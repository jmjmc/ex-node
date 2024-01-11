//https://nodejs.org/api/fs.html
const fs = require('fs'); // fs: file system

console.log("Hello Jupeter!");
//import { appendFile } from 'node:fs';

            // 첫 번째 argument(전달 인자), 두 번째 전달 인자, 세번째 함수(err)/callback
fs.appendFile('message.txt', 'data to append', (err) => {
    // err 일 경우, err, 아닐경우는 console.log 나옴 
  if (err) throw err;
  console.log('The "data to append" was appended to file!');
});
