const net = require("net");
const request = require("request");
const fs = require("fs");
const url = process.argv[2];
const path = process.argv[3];
console.log(url, path);
// const conn = net.createConnection({
//   host: url,
//   port: 80
// })
// conn.setEncoding("utf8");

// conn.on("connect", () =>{
request(url, (error, response, data) => {
  fs.writeFile(path, data, (err) => {
    if(!err) {
      const stats = fs.statSync(path);
      console.log(`Downloaded and saved ${stats.size} bytes to ${path}`);
    } else {
      console.log(`error: ${err}`);
    }
  });
})