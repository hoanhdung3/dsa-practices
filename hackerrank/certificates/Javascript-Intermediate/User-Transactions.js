'use strict';

const fs = require('fs');
const https = require('https');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
      inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');
    main();
});

function readLine() {
      return inputString[currentLine++];
}

const axios = require('axios');

async function getNumTransactions(username) {
    // write your code here
    // API endpoint: https://jsonmock.hackerrank.com/api/article_users?username=<username>
    // API endpoint: https://jsonmock.hackerrank.com/api/transactions?&userId=<userId>
    try{
        const userDetails = await axios.get(`https://jsonmock.hackerrank.com/api/article_users?username=` + username);
        if(userDetails.data.data && userDetails.data.data.length !== 0){
            const userId = userDetails.data.data[0].id;
            const transData = await axios.get(`https://jsonmock.hackerrank.com/api/transactions?&userId=` + userId);
            return transData.data.total;
        }
        return 'Username Not Found';
    }catch(e){
        console.log(e);
    }
}
async function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);
    const username = readLine().trim();
    const result = await getNumTransactions(username);
    ws.write(result.toString());
}