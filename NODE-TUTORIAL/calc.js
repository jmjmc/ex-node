console.log("I am calculator!");
//1. 모듈 알아보기 
console.log(module);

// module 객체의 결과 ( console 에다 node calc.js 하면 됨 )  ==> { 객체 } 가 나옴
// { id : '.', path : ' ', exports : { } , filename : ' ', loaded : false, children : [] , paths : [] }
// module 객체는 각 모듈에 대한 정보를 제공하는 객체임.
// 여러 속성들이 있는데, 이 중 일부는 기본적으로 설정되는 값이며, 
// 다른 값들은 모듈이 실행되고 로드됨에 따라 동적으로 변경함

// id : 모듈의 식별자, 모듈의 상대 또는 절대 경로를 포함
// path : 모듈이 위치한 경로
// exports : 모듈이 외부로 공개하는 객체, 이를 통해 다른 모듈에서 해당 모듈의 기능에 접근할 수 있음
// filename: 모듈 파일의 절대 경로
// loaded : 모듈이 로드되었는지 여부를 나타내는 블리언 값
// children : 현재 모듈이 로드한 하위 모듈에 대한 배열.
// paths : 모듈이 로드할 때 검색하는 경로들을 담은 배열. 

// 이러한 속성들은 모듈이 실행됨에 따라 동적으로 변경되므로, '기본값' 이라기보다는 모듈이 실행되는 컨텍스트에 따라 달라짐,
// 따라서 특정 모듈이 실행될 때, 이 속성들이 어떻게 설정되는지에 대한 정보는 해당 모듈의 동작과 코드에 따라 달라짐 

console.log(module.children); // 하위 모듈들의 배열
console.log(module.parent); // 부모 모듈 


// 이 파일은 recalc.js 파일에서 require 되어 있음
// console 에 node calc 하면 id 가 (.) 임
// 그런데, console 에 node recalc.js 하면 
// children 배열 안에 id, path, exports, filename, loaded, children, paths 가 생김 
//   배열 안에 children 이 [] 비워있음 


//{
//    id: '.',
//    path: 'C:\\Users\\jm\\Documents\\GitHub\\ex-node\\NODE-TUTORIAL',
//    exports: {},
//    filename: 'C:\\Users\\jm\\Documents\\GitHub\\ex-node\\NODE-TUTORIAL\\recalc.js',
//    loaded: false,
//    children: [
//      {
//        id: 'C:\\Users\\jm\\Documents\\GitHub\\ex-node\\NODE-TUTORIAL\\calc.js',
//        path: 'C:\\Users\\jm\\Documents\\GitHub\\ex-node\\NODE-TUTORIAL',
//        exports: {},
//        filename: 'C:\\Users\\jm\\Documents\\GitHub\\ex-node\\NODE-TUTORIAL\\calc.js',
//        loaded: false,
//        children: [],
//        paths: [Array]
//      }
//    ],
//    paths: [
//      'C:\\Users\\jm\\Documents\\GitHub\\ex-node\\NODE-TUTORIAL\\node_modules',
//      'C:\\Users\\jm\\Documents\\GitHub\\ex-node\\node_modules',
//      'C:\\Users\\jm\\Documents\\GitHub\\node_modules',
//      'C:\\Users\\jm\\Documents\\node_modules',
//      'C:\\Users\\jm\\node_modules',
//      'C:\\Users\\node_modules',
//      'C:\\node_modules'
//    ]
//  }

// calc.js 파일(자식)이 recalc.js 파일(부모)과 부모 자식 관계임 
// 어떻게 알 수 있는가? recalc.js 파일에 인자를 넣어놨기 때문
// 부모파일 const calc = require('./calc'); 이렇게 되어 있음

console.log("Hi, i am child")
// console 에다, node calc 하면 위의 "Hi, i am child" 가 나옴 


// 2. 자식 파일에서 부모 파일로 name 가져오기   
//module.exports.name = 'Jupeter';
//module.exports.add = (a,b) =>{
//    return a + b;
//};
//module.exports.substract = (a,b) =>{
//    return a - b;
//};
//module.exports.multiply = (a,b) =>{
//    return a * b;
//};

// module.exports 반복되니깐, 간단하게 만들어보기

let add = (a,b) => {
    return a + b;
};

let substract = (a,b) => {
    return a - b;
};

let multiply = (a, b) => {
    return a * b;
};

let divide = (a, b) => {
    return a/b;
};

// object 를 담는다. 

module.exports = {
    add: add,
    substract: substract,
    multiply: multiply,
    divide: divide
}
// 위에 key와 value 가 같을 경우, 하나로만 써도 됨 

// 또는 es6 방식
//export const add = add;
//export const substract = substract;
//export const multiply = multiply;
//export const divide = divide;

// command : node yargs_2 add --a=3 --b=4