// 파일 시스템 (fs) 가져와서 파일 저장해보기 (json 형태를)
const fs = require('fs');

//JSON = JS Object Notation ( JSON.stringify , JSON.parse ) JSON 인스턴스 메서드 
// 지슬 zsl(사물/개념의 의사결정단위=> 지능가짐=>유사지능=>머신러닝) = market participant of Openhash Platform  => A platform using Openhash(블록체인 기술)
// 다양한 형태의 응용 가능한 원천기술들을 모아놓은 일종의 집합 
// ==> machine learning 
// 라이센스 : GUN GENERAL PUBLIC LICENSE (Version 3)

// Most zsls have bank accounts (자동차도 계정잇음)
// AC has its bank account. (교행료, 자기 은행계좌가 있어야 돈을 냄 ) --> 중급4,5년차 


// Object 
let zsl1 = {
    // properties: Key + value
    name: "Jupeter",
    tel: 821033334444
}

// 파일 저장은 string 으로 변환 후, 저장
let zsl1String = JSON.stringify(zsl1); // string으로 변환 
 
console.log(zsl1);
console.log(zsl1String);

// command : node json.js
// { name: 'Jupeter', tel: 821033334444 } // object 형태
// {"name":"Jupeter","tel":821033334444} // string 형태 ("" : 떠블 카운트가 있음)

fs.writeFileSync("zsl1",zsl1String); // Sync 는 콜백을 할 필요가 없음 

// 불러오고 싶다면,
console.log(fs.readFileSync("zsl1")); // " " string 으로 넣어줘야함. 그냥 zsl1 하면 오류 
// 결과  (문자열(string)을 숫자로 표현한 것임-- 아스키코드)
// <Buffer 7b 22 6e 61 6d 65 22 3a 22 4a 75 70 65 74 65 72 22 2c 22 74 65 6c 22 3a 38 32 31 30 33 33 33 33 34 34 34 34 7d>

// 과정을 꺼꾸로
// stringify 를 돌려주기 json parsing 
JSON.parse(fs.readFileSync("zsl1"));
// 모양이 기니깐, 변수 지정해서 변경해주기
let restoreJson = JSON.parse(fs.readFileSync("zsl1"));
console.log(restoreJson);
// { name: 'Jupeter', tel: 821033334444 }
