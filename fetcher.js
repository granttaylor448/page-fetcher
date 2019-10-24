const args = process.argv.slice(2)
const fs = require('fs')
var readline = require('readline')
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
const request = require('request');


request(args[0], (error, response, body) => {
  if (body === undefined){
    console.log("Whoops that's not a website")
    rl.close()
    return;
    
  }
  if (fs.existsSync(args[1])) {
    
    rl.question('Do you want to overwrite this file?', (answer) => {
      if (answer === "yes") {
        console.log("You got it")
        fs.writeFile( args[1], body, () => {
          console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`)
          rl.close()
        })
      } else {
        console.log("suit yourself")
        rl.close()
      }
      })
      } else {
      
        fs.writeFile(args[1], body, (err) => {
          if (err) { console.log("Not the right file path");
          rl.close()
        } else { 
          
          console.log(`Downloaded and saved ${body.length} bytes to ${args[1]}`)
          rl.close()
        }
        })
      }
    });

    // request(args[0], (error, response, body) => {
  // 
  // fs.writeFile( args[1], body, (err) => {
    // if (err) throw err;
    // else {
      // if (fs.existsSync(args[1])) {
      // rl.question('Do you want to overwrite this file?', (answer) => {
        // if (answer === "yes") {
          // console.log("You got it")
          // rl.close()
        // } else {
          // rl.close()
        // }
      // 
      // });
    // }
    //  };
    // console.log('The file has been saved');
  // });
// });

// const data = new Uint8Array(Buffer.from(request()));

// const writer = fs.writeFile( args[1], package, (err) => {
  // if (err) throw err;
  // console.log('The final has been saved');
// });
// 
// setTimeout(() => {
  // writer
// }, 1000);