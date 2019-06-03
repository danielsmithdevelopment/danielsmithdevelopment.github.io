const express = require("express");
const app = express();

const config = require('config');

const binance = require('node-binance-api')().options({
    APIKEY: config.get('Binance.key'),
    APISECRET: config.get('Binance.secret'),
    useServerTime: true, // If you get timestamp errors, synchronize to server time at startup
    // test: true // If you want to use sandbox mode where orders are simulated
});

function getBalances() {
    
    return new Promise((resolve, reject) => {
        
        let balanceMap = {};
        binance.useServerTime(function() {
            binance.balance((error, balances) => {
                if ( error ) return console.error(error);
                getAssets().forEach(element => {
                    let sum = parseFloat(balances[element].available) + parseFloat(balances[element].onOrder);
                    balanceMap[element]=sum;
                });
                resolve(balanceMap);
            });
        });
    });
    
}

function getAssets() {
    return config.get('Crypto.assetList');
}

function printLine() {
    console.log('\n@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@\n');
}

function main() {

};

main();

app.get('/', (req, res) => {
    return res.send('Received a GET HTTP method');
});

app.listen(3000, () => {
    console.log("Server running on port 3000");
});