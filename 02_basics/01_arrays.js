// array

const myArr = [0, 1, 2, 3, 4, 5]
// console.log(myArr[1]);// 1
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)

// Array methods

// myArr.push(6)// [ 0, 1, 2, 3, 4, 5, 6 ]
// myArr.pop()//[ 0, 1, 2, 3, 4, 5 ]

// myArr.unshift(9)//[ 9, 0, 1, 2, 3, 4 ]
// myArr.shift()//[ 1, 2, 3, 4 ]

// console.log(myArr.includes(9));// false
// console.log(myArr.indexOf(3));// 3

// const newArr = myArr.join()

// console.log(myArr);//[ 0, 1, 2, 3, 4 ,5]
// console.log( newArr);//0,1,2,3,4,5
// console.log(typeof newArr);// string


// slice, splice

// The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object selected from start to end. => shallow copy : A shallow copy of an object is a copy whose properties share the same references

// The splice() method of Array instances changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.

console.log("A ", myArr);// A  [ 0, 1, 2, 3, 4, 5 ]

const myn1 = myArr.slice(1, 3)

console.log(myn1);//[ 1, 2 ]
console.log("B ", myArr);// B  [ 0, 1, 2, 3, 4, 5 ]


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);// C [ 0, 4, 5 ]
console.log(myn2);// [ 1, 2, 3 ]