// yargs 설치 : npm i yargs --save 
// yargs 선언 : const argv = require('yargs').argv

const yargs = require('yargs');

console.log(process.argv);
// array 
//[
//    'C:\\Program Files\\nodejs\\node.exe',
//    'C:\\Users\\jm\\Documents\\GitHub\\ex-node\\NODE-TUTORIAL\\yargs'
//  ]

console.log(yargs.argv);
// object 
           // key:value
// { _: [], '$0': 'yargs' }

//          각각의 command 
// command : node yargs add 3 4
//[
//    'C:\\Program Files\\nodejs\\node.exe',
//    'C:\\Users\\jm\\Documents\\GitHub\\ex-node\\NODE-TUTORIAL\\yargs',
//    'add',
//    '3',
//    '4'
//  ]
//  { _: [ 'add', 3, 4 ], '$0': 'yargs' }


let arg2 = yargs.argv._[0];
let arg3 = yargs.argv._[1];
let arg4 = yargs.argv._[2];

const calc = require('./calc');
if (arg2 == 'add') {
    let result = calc.add(arg3, arg4);
    console.log(result);
} else if (arg2 === 'substract') {
    let result = calc.substract(arg3, arg4);
    console.log(result);
} else if (arg2 === 'multiply') {
    let result = calc.multiply(arg3, arg4);
    console.log(result);
}
// command : node yargs add 3 4
// 7 
// 위에 process 보단, yargs 

// 블록체인 기술처럼 은행을 만드는 것임  
// 5천명의 은행계좌를 만들고, 활성화시키고자 할 때, 은행이용자를 추가하고 빼고 할때, 
// process 보단 yargs 를 쓴다. 