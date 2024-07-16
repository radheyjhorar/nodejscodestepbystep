
// const http = require('http')
// const data = require('./data');

// http.createServer((req, res) => {
//   res.writeHead(200, {"Content-Type": 'application/json'});
//   res.write(JSON.stringify(data));
//   res.end();
// }).listen(5000);










// const fs = require('fs');

// const input = process.argv;

// if(input[2] === 'add') {
//   fs.writeFileSync(input[3], input[4])
// } else if(input[2] === 'remove') {
//   fs.unlinkSync(input[3])
// } else {
//   console.log("Invalid Output");
// }














// const fs = require('fs');
// const path = require('path');
// const dirPath = path.join(__dirname, 'files');
// console.log(dirPath);

// for(let i = 0; i < 5; i++) {
  // fs.writeFileSync(`${dirPath}/hello${i}.txt`, "A simple text file"); // create five new files
  // fs.unlinkSync(`${dirPath}/hello${i}.txt`);  // remove the five files
  // fs.writeFileSync(dirPath+"/test"+i+".txt", "A simple text file"); // create five new files
  // fs.unlinkSync(dirPath+"/test"+i+".txt"); // remove the five files
// }


// fs.readdir(dirPath, (err, files) => {
//   // console.log(files);
//   files.forEach(file => console.log("File name is: " + file));
// })


















// CRUD with file system
// const fs = require("fs");
// const path = require("path");
// const dirPath = path.join(__dirname, "crud");
// const filePath = `${dirPath}/apple.txt`

// fs.writeFileSync(filePath, 'this is a simple text file');

// fs.readFile(filePath, "utf8", (err, data) => {
//   console.log(data);
// })

// fs.appendFile(filePath, ' and file name is apple.txt', err => !err && console.log("File is updated"));

// fs.rename(filePath, `${dirPath}/fruit.txt`, (err) => {
//   if(err) { 
//     console.log(err);
//   } else {
//     console.log("File name is updated")
//   }
// });

// fs.unlinkSync(`${dirPath}/fruit.txt`);

















let a = 10;
let b = 0;


let waitingData = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(20)
  }, 2000);
})

waitingData.then((data) => {
  b = data;
  console.log(a + b);
})


console.log(a + b);

