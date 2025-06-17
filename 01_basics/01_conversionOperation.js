let score = "11xyz"

//console.log(typeof score); // string 
//console.log(typeof(score)); // string

let valueInNumber = Number(score)
//console.log(typeof valueInNumber); // number
//console.log(valueInNumber); // NaN => Not a Number

//for eg : let score = null
//console.log(typeof score); // object
//console.log(valueInNumber);//0

//for eg : let score = undefined
//console.log(typeof score); // undefined
//console.log(valueInNumber);// NaN

//for eg : let score = true
//console.log(typeof score); // boolean
//console.log(valueInNumber);// 1

// "33" => 33
// "11xyz" => NaN
//  true => 1; false => 0

let isLoggedIn = "shreya"

let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn);

// 1 => true; 0 => false
// "" => false
// "shreya" => true

let someNumber = 33

let stringNumber = String(someNumber)
// console.log(stringNumber);
// console.log(typeof stringNumber);

// *********************** Operations ***********************

let value = 3
let negValue = -value
// console.log(negValue);//-3

// console.log(2+2);//4
// console.log(2-2);//0
// console.log(2*2);//4
// console.log(2**3);//8
// console.log(2/3);//0.6666666666666666
// console.log(2%3);//2

let str1 = "hello"
let str2 = " shreya "

let str3 = str1 + str2
// console.log(str3); // hello shreya

// console.log("1" + 2);// 12
// console.log(1 + "2");// 12
// console.log("1" + 2 + 2);// 122
// console.log(1 + 2 + "2");// 122

// console.log( (3 + 4) * 5 % 3);// 2

// console.log(+true);// 1
// console.log(+"");// 0

let num1, num2, num3
num1 = num2 = num3 = 2 + 2
//console.log(num3);//4

let gameCounter = 100
++gameCounter;
// console.log(gameCounter);//101
