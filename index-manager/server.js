var express = require("express");
var app = express();

const config = require('config');

let users = {
    1: {
        id: '1',
        username: 'user1',
    },
    2: {
        id: '2',
        username: 'user2',
    },
};
  
let messages = {
    1: {
        id: '1',
        text: 'Hello World',
        userId: '1',
    },
    2: {
        id: '2',
        text: 'Bye World',
        userId: '2',
    },
};

function getBalances() {
    
    return new Promise((resolve, reject) => {
        const binance = require('node-binance-api')().options({
            APIKEY: config.get('Binance.key'),
            APISECRET: config.get('Binance.secret'),
            useServerTime: true, // If you get timestamp errors, synchronize to server time at startup
            // test: true // If you want to use sandbox mode where orders are simulated
        });
        let balanceMap = {};
        binance.useServerTime(function() {
            binance.balance((error, balances) => {
                if ( error ) return console.error(error);
                // console.log("balances()", balances);
                // console.log("BNB balance: ", balances.BNB.available);
                getAssets().forEach(element => {
                    // console.log('Balance for ',element,':',balances[element].available+balances[element].onOrder);
                    let sum = parseFloat(balances[element].available) + parseFloat(balances[element].onOrder);
                    // console.log(sum);
                    balanceMap[element]=sum;
                });
        
                // console.log(balanceMap);
                resolve(balanceMap);
                // return balanceMap;
            });
        });
        // return balanceMap;
        // return null;
    });
    
    
}

function getAssets() {
    return config.get('Crypto.assetList');
}

function returnWeightedList(numList) {
    // get max number from list provided
    // set max value and initialize return list
    const max = Math.max(...numList);
    let returnList = [];
    // scale each element in list according to market cap ratios between them
    // push scaled number onto return list
    numList.forEach(element => {
        returnList.push(returnWeighted(max,element));
    });
    // return results after weighting
    return returnList;
}

function returnSpread(numList) {
    // use array reduce method to get sum of list supplied
    // initialize array of percentages to return
    let sum = numList.reduce(getSum);
    let returnedSpread = [];
    // calculate percentage of each item and push to return array
    numList.forEach(element => {
        returnedSpread.push(element/sum*100);
    });
    // return results
    return returnedSpread;
};

function returnWeighted(num1, num2) {
    return (num1 + 13*Math.sqrt(num1/num2)*num2*(num2/num1))/2;
};

function getSum(total, num) {
    return total + num;
};

function printLine() {
    console.log('\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n');
}

function main() {
    printLine();
    console.log('@                              Crypto Report                              @');
    printLine();
    // initialize list of assets and their circulating supplies
    const assets = config.get('Crypto.tickerList');
    const supplyMap = config.get('Crypto.supplyMap');
    const capitalization = config.get('Binance.capitalization');
    // initialize binance client with api key and using sandbox mode
    const binance = require('node-binance-api')().options({
        APIKEY: config.get('Binance.key'),
        APISECRET: config.get('Binance.secret'),
        useServerTime: true, // If you get timestamp errors, synchronize to server time at startup
        // test: true // If you want to use sandbox mode where orders are simulated
    });
    // call binance api and read values from ticker object returned
    binance.prices((error, ticker) => {
        // initialize market cap array to return and add market caps to array
        if (error) {
            console.log(error);
        }
        // console.log(ticker);
        let marketcapArray = [];
        assets.forEach(element => {
            element=='BTCUSDC'?marketcapArray.push(ticker[element]*supplyMap[element]):marketcapArray.push(ticker['BTCUSDC']*ticker[element]*supplyMap[element]);
        });
        // pass weighted market cap array into returnSpread function and set value to indexSpread
        const indexSpread = returnSpread(returnWeightedList(marketcapArray));
        // initialize indexMap and populate it
        let indexMap = {};
        for(i=0;i<marketcapArray.length;i++){
            // create objet with asset name as key and percentage as value
            indexMap[assets[i]]=indexSpread[i];
        }
        // print asset and percentage to console
        let index = 0;
        assets.forEach(element => {
            capitalization*indexMap[element]/100
            console.log(getAssets()[index],'percentage:',indexMap[element],'%');
            console.log('Target',getAssets()[index],'investment:',capitalization*indexMap[element]/100,'\n');
            index++;
        });
        printLine();
        console.log('@                                Portfolio                                @');
        printLine();

        getBalances().then((balanceMap) => {
            let i=0;
            let sum = 0;
            getAssets().forEach(element => {
                let asset = assets[i];
                element=='BTC'?sum += balanceMap[element]:sum += balanceMap[element]*ticker[asset];
                // console.log(num);
                element=='BTC'?console.log('\nBalance for', element, 'is:\n',balanceMap[element]):console.log('\nBalance for', element, 'in BTC is :\n',balanceMap[element]*ticker[asset]);
                element=='BTC'?console.log('To rebalance:','\n',parseFloat(capitalization*indexMap[asset]/100)-parseFloat(balanceMap[element]),'BTC'):console.log('To rebalance:','\n',parseFloat(capitalization*indexMap[asset]/100)-parseFloat(balanceMap[element])*ticker[asset],'BTC');
                i++;
            });
            printLine();
            console.log('\nTotal Balance:',sum,'BTC','\n');
            printLine();
        });
    });

};

main();

app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
});

app.post('/', (req, res) => {
    return res.send('Received a POST HTTP method');
});

app.put('/', (req, res) => {
    return res.send('Received a PUT HTTP method');
});

app.delete('/', (req, res) => {
    return res.send('Received a DELETE HTTP method');
});

app.get("/url", (req, res, next) => {
    res.json(["Tony","Lisa","Michael","Ginger","Food"]);
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});