// this keyword tells aboout current context
const user = {
    username: "shreya",
    price: 999,

    welcomeMessage: function() {
        //console.log(`${this.username} , welcome to website`);
        //console.log(this);
    }

}

// user.welcomeMessage()
// user.username = "sam"
// user.welcomeMessage()
// console.log(this);//{}
// in browser when a engine runs which is more used it is global object's  window object

// function chai(){
//     let username = "shreya"
//     console.log(this.username);// undefined bcoz this keyword can only be used for objects not for functions 
// }
// chai()


// const chai = function () {
//     let username = "shreya"
//     console.log(this.username);// undefined
// }

const chai =  () => {
    let username = "shreya"
    //console.log(this);
}
// chai()

// basic syntax: () => {}
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }
// console.log(addTwo(3, 4))

// if you use {} brackets then we have to use return otherwise it's not used

// const addTwo = (num1, num2) =>  num1 + num2 // this way is called implicitly 
// const addTwo = (num1, num2) => ( num1 + num2 )

// const addTwo = (num1, num2) => {username: "shreya"}//undefined// we can't return object like this
// const addTwo = (num1, num2) => ({username: "shreya"})//{ username: 'shreya' }

//console.log(addTwo(3, 4))


// const myArray = [2, 5, 3, 7, 8]

// myArray.forEach()