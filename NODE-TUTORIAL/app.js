// package.json, package-lock.json
// open source 3rd party libraries = lodash(synchronous), RxJS(asynchronous), Cycle.js (functional reactive programming)
// node package manager (npm)
// npm install ==> package.json 파일을 만듦 (package.json 파일은 업데이트를 관리하는 것 5.6.0 -> 6.0.1 로 )
// 버전확인 :  npm -v  // npm i npm 하면 업데이트됨 (이거 하면 node_modules 생성되고, package-lock.json 도 만들어짐) 
// npm install lodash --save

// 근데, npm install 하면 package-lock.json 이 먼저 만들어지고,
// npm i npm 하면 node_modules랑 package.json 이 만들어짐

// npm install lodash 여기서 lodash는 _(밑줄 바를 말함) Lo
// npm install lodash 하면 lodash 파일이 생성됨 --> package.json 안에 dependencies 버전이 있음 (package.json은 라이브러리 버전관리, package-lock.json은 라이브러리의 버전 상세 설명)
const _ = require('lodash');

var array = [1];
              // concat : 합치다   // array 속에 array 임 
var other = _.concat(array, 2, [3], [[4]],6);

console.log(other); // nodemon app 를 실행하면, 4 옆에 6을 추가하면 console 에서 실행이 됨 
// [ 1, 2, 3, [4] ]
console.log(array);
// [ 1 ]


//https://lodash.com/
// 이 홈페이지의 상단에 FP Guide 클릭하면 됨 *(functional programming)

const fp = require('lodash/fp');
// 예제 : 함수형 스타일로 배열의 각 요소를 제곱
const numbers = [1,2,3,4,5];
const squaredNumbers = fp.map(fp.squre, numbers);// fp.map 은 매핑 작업, fp.square 는 숫자를 제곱하는 함수 , numbers : 대상 배열로, 각 요소가 제곱될 배열 
console.log(squaredNumbers);
// [1,2,3,4,5]


// nodemon 패키지 : 코드 변화에 실시간 변화 
// 설치 방법 : npm install -g nodemon (-g가 안될 때가 있음)
// 실행 방법 : nodemon app
//                    app는 파일명



// ./cale.js 파일(자식)에 module.exports.add 를 만들어놨는데,
// 부모 app.js 파일에서 add 를 호출하고자 한다. 
const calc = require('./calc');
// const _ = require('lodash');

// process 객체의 argv(아규먼트)의 메타 
console.log(process.argv); 
// console 에다 node app 하면, 결과가 아래처럼 나옴 argv(아규먼트)
// [ 
//   'C:\\Program Files\\nodejs\\node.exe',
//   'C:\\Users\\jm\\Documents\\GitHub\\ex-node\\NODE-TUTORIAL\\app'
//  ]
// 
               // 1. node, 2. app, 3. add 
// console 에다 node app add 하면, 살향은 안되지만, argv(아규먼트) 가 3개 나옴
//[
//    'C:\\Program Files\\nodejs\\node.exe', // node (0)
//    'C:\\Users\\jm\\Documents\\GitHub\\ex-node\\NODE-TUTORIAL\\app', // app (1)
//    'add' // add (2)
//  ]

// 그러면 argv(아규먼트)를 규정해서 만들기 
let arg2 = process.argv[2]; // 위에 (2) 이거 부분 나옴 
console.log(arg2); // 결과 : add 

// 그러면 calc.js 파일에서 사용되는 add, substract, multiply 가져다 쓰려면,,

//let arg3 = process.argv[3]; --> string 값 
let arg3 = Number(process.argv[3]); 
let arg4 = Number(process.argv[4]);

console.log(process.argv); // node app add 3 4 
//[
//    'C:\\Program Files\\nodejs\\node.exe',
//    'C:\\Users\\jm\\Documents\\GitHub\\ex-node\\NODE-TUTORIAL\\app',
//    'add',
//    '3',
//    '4'
//  ]

// 위에 const calc = require('./calc'); 이걸 선언했기때문에, calc (.) 도트 하면 add, substract, multiply 나옴
console.log(calc.add(arg3, arg4)); // console에다 node app add 3 4 하면, 3과 4 를 하면 34라고 나옴 (숫자인식으로 계산안하고, 문자로 계산되네...)
// 둘 다 arguemnts are strings (문자열)
// 그래서 숫자로 바꿔줘야함 let arg3 = Number(process.argv[3]);  이렇게 Number 로 바꿔줌
// 그렇게 되면, 3 + 4 로 7 이 나옴 


// 만약 콘솔에다. node app add 3 4 5 해도 3 + 4 = 7 로 나옴
// 그런데, node app add 3 으로 하면, Nan 으로 뜸
// 그러면, Nan 을 해결할 수 있는 방법은

// node app add 3 6 실행해보기 
// 버전때문에 안됨, 업데이트하기 npm install -g npm@latest , npm install 






