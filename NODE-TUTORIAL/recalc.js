// 1. 자식 파일에서 require 하면 부모 파일에서 실행됨
const calc = require('./calc'); // .(현재 디렉토리) 에서 /cale 파일 내용을 가져옴 
// calc.js 파일 안에는 
// console.log("I am calculator!"); 이렇게 되어 있음 ( 이 내용을 가져옴 )
// console 에다 node recalc.js 치면 I'am calculator! 가 나옴 
// 또한, ./calc 파일의 modules 객체가 나옴

// 2. 부모 파일 exports 하면, 자식 파일에서 name 찍힘 
console.log(calc.name);
console.log(calc.add(3,4));
console.log(calc.substract(3,4));
console.log(calc.multiply(3,4));


