const args = process.argv.slice(2)
const fs = require('fs')
var readline = require('readline')


const request = require('request');

request(args[0], (error, response, body) => {
  fs.writeFile( args[1], body, (err) => {
    if (err) throw err;
    console.log('The file has been saved');
  });
});

// const data = new Uint8Array(Buffer.from(request()));

// const writer = fs.writeFile( args[1], package, (err) => {
  // if (err) throw err;
  // console.log('The final has been saved');
// });
// 
// setTimeout(() => {
  // writer
// }, 1000);