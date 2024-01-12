// 파일의 입출력하기 
const fs = require('fs');

// Assign bank accounts to all Korean people. : 모든 한국사람에게 한국계좌 할당 
// First of all, all Koreans shall be listed as users of OP. : 사용자 등록 
// Bank accounts of them are same to their telephome number : 은행계좌번호(핸드폰번호) - 개인식별체계 (상호통신체계)
// TEL => bank account, IPv6 address,   

let zsls = []; // 50,000,000 people' name and tel. (array) 

// 사람 추가하기  
let addZsl = function(name, tel) {
    let zsl = {};

    zsl.name = name;
    zsl.tel = tel;

    zsls.push(zsl);

    fs.writeFileSync("zsl-list", JSON.stringify(zsls))
}

addZsl("Superman", 82101111222)
console.log(zsls);
