//var c = 300
let a = 300
if (true) {
    let a = 10
    const b = 20
    // console.log("INNER: ", a);// INNER: 10
    
}

// what is written in if it is block scope and outside it's called global scope

// console.log(a);//300
// console.log(b);
// console.log(c);

// child function can access parent variable
function one(){
    const username = "shreya"

    function two(){
        const website = "youtube"
        console.log(username);// shreya
    }
    // console.log(website);

     two() // shreya

}
// one()

if (true) {
    const username = "shreya"
    if (username === "shreya") {
        const website = " youtube"
        // console.log(username + website);// shreya youtube
    }
    // console.log(website);// error
}
// console.log(username);// error


// ++++++++++++++++++ interesting ++++++++++++++++++
// here are 2 types of way to declare functions 

//1) only declaration 
console.log(addone(5))//6
function addone(num){
    return num + 1
}


//2) declaration with holding in variable
addTwo(5) // error
const addTwo = function(num){
    return num + 2
}
