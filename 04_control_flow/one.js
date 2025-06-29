// if

const isUserloggedIn = true
const temperature = 41
// if ( temperature === 40 ){
//     console.log("less than 50");
// } else {
//     console.log("temperature is greater than 50");
// }
// console.log("Execute");

// <, >, <=, >=, ==, !=, ===, !==
// 2<=2 , 3!=2 , 2==="2"
// = :- is for assigning , == :- is for comparing , === :- check datatype
// != :- not equal to

// const score = 200
// if (score > 100) {
//     let power = "fly"
//     console.log(`User power: ${power}`);
// }
// console.log(`User power: ${power}`);

// shorthand notation
// const balance = 1000

// if (balance > 500) console.log("test"),console.log("test2");// this way can be said as implicit way and this type of code is unreadiable 

// nesting for if else
// if (balance < 500) {
//     console.log("less than 500");
// } else if (balance < 750) {
//     console.log("less than 750");
// } else if (balance < 900) {
//     console.log("less than 750");
// } else {
//     console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3)// all conditions should be true then only it will execute 
{
    console.log("Allow to buy course");
}

if (loggedInFromGoogle || loggedInFromEmail)// ( || ) this performs OR operation and it is used for multiple conditions // if only one condition is true it will execute 
{
    console.log("User logged in");
}