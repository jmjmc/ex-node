//https://nodejs.org/api/fs.html
const fs = require('fs');
//https://nodejs.org/api/os.html
const os = require('os'); // os : 

let user = os.userInfo();
// "user" 문자열 ( console 에다가 node os.js 하면 됨 )
console.log("user");// 이거 잘못 된 것임 아래 usr 객체로 보내야함 

fs.appendFile('message.txt', 'data to append', (err) => {
    if(err) throw err;
    console.log('The "data to append" was appended to file!' + user); // [object Object]
    console.log('The "data to append" was appended to file!' + user.gid); // usr. (도트) 하면, gid/username/appendFile/uid/homedir 가 나타남
    console.log('The "data to append" was appended to file!' + user.username);
    console.log('The "data to append" was appended to file!' + user.appendFile);
    console.log('The "data to append" was appended to file!' + user.uid);
    console.log('The "data to append" was appended to file!' + user.homedir);
    // usr 객체 ( console 에다 node os 하면 됨)
    console.log(user); // 이거 하면, usr.(도트) 한 결과  { uid, gid, username, homedir, shell }  이 나옴  
});












