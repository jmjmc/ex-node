const yargs = require('yargs');

console.log(yargs.argv); 

// command : node yargs_2 add --a=3 --b=4
// { _: [ 'add' ], a: 3, b: 4, '$0': 'yargs_2' }

// 그러면, 계산해보기

let arg2 = yargs.argv._[0];
let arg3 = yargs.argv.a;
let arg4 = yargs.argv.b;

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

// command : node yargs_2 add --a=3 --b=4
// 7 

// command : node yargs_2 add --a --b
// { _: [ 'add' ], a: true, b: true, '$0': 'yargs_2' }
                     // ture 그러면, npm i yargs --save  여기서 --save은 결국 true 

// node yargs_2 add --a=3 --b=4                     
console.log(yargs.argv); //  여기서 더 한 번 찍으면, { _: [ 'add' ], a: 3, b: 4, '$0': 'yargs_2' } 이런 결과 나옴 
