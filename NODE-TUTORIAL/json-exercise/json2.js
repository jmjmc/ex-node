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
addZsl("Birdman", 82101111222)
addZsl("Superman", 82101111222)
console.log(zsls);

//DB쓰지 않고 JSON FILE 로 저장해보기, 그리고 중복제거해보기 

let distinct_zsls = [];

let distinct_addZs1 = function(name, tel) {
    let zsl = {};
    zsl.name = name;
    zsl.tel = tel;
    //enumeration     //원소 하나씩 확인 // argument(name) 가 동일할 경우(ture)
let duplicatedZsls = distinct_zsls.filter((zsl)=>zsl.name === name);

if (duplicatedZsls.length === 0) {
    distinct_zsls.push(zsl);
    fs.writeFileSync("zsl-list2", JSON.stringify(distinct_zsls))
}
}

distinct_addZs1("Superman", 82101111222)
distinct_addZs1("Birdman", 82101111222)
distinct_addZs1("Superman", 82101111222)
console.log(distinct_addZs1);
// command : node json2.js
// 결과 
//[ { name: 'Superman', tel: 82101111222 } ]
// [Function: distinct_addZs1]
// zsl-list2 이거 하게되면, 중복된 거 제거됨 