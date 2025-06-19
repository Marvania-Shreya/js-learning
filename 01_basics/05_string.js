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


// String.prototype.at() => The at() method of String values takes an integer value and returns a new String => Syntax:at(index)

// String.prototype.charAt() => The charAt() method of String values returns a new string consisting of the single UTF-16 code unit at the given index. => Syntax:charAt(index)

// String.prototype.indexOf() => The indexOf() method of String values searches this string and returns the index of the first occurrence of the specified substring. => Syntax:indexOf(searchString)
//indexOf(searchString, position)
