const express = require("express")
const os = require('os');
const app = express();

const config = require('config');

function main() {
   console.log(config.get('app.greeting'));
//    config.get('blog-posts').forEach(element => {
//        console.log(os.EOL,element,os.EOL);
//    });
};

main();

app.get('/', (req, res) => {
    let resBody = []
    config.get('blog-posts').forEach(element => {
        resBody.push(element);
    });
    console.log('Received a GET HTTP method');
    return res.send(resBody);
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

