const name = "shreya"
const repoCount = 25

// console.log(name + repoCount + " Value");//don't use this type of syntax
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);//use this


const gameName = new String('shreya-sm-com')

// console.log(gameName[0]);//s
// console.log(gameName.__proto__);//{}

// console.log(gameName.length);//13
// console.log(gameName.toUpperCase());//SHREYA-SM-COM
// console.log(gameName.charAt(2));//r
// console.log(gameName.indexOf('r'));//2

const newString = gameName.substring(0, 4)
console.log(newString);//shre

const anotherString = gameName.slice(-12, 4)
console.log(anotherString);//hre


const newStringOne = "   shreya    "
console.log(newStringOne);//   shreya    
console.log(newStringOne.trim());//shreya


const url = "https://hitesh.com/shreya%20marvania"
console.log(url.replace('%20', '-'))//https://marvania.com/shreya-marvania
console.log(url.includes('sundar'))//false
console.log(gameName.split('-'));//[ 'hitesh', 'hc', 'com' ]