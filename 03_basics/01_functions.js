function sayMyName(){
    // console.log("S");
    // console.log("H");
    // console.log("R");
    // console.log("E");
    // console.log("Y");
    // console.log("A");
}

// sayMyName()

// function addTwoNumbers(number1, number2){

//     console.log(number1 + number2);
// }

function addTwoNumbers(number1, number2){

   //one way // let result = number1 + number2
    // return result
    //console.log("shreya");//after return any console.log won't work
   //another way //return number1 + number2
}

const result = addTwoNumbers(3, 5)

// console.log("Result: ", result);// Result: 8


function loginUserMessage(username = "XYZ"){
    if(!username)// ! is used for changing the answer 
    {
        console.log("PLease enter a username");
        return
    }
    return `${username} just logged in`
}

// console.log(loginUserMessage("shreya")) // shreya just logged in
// console.log(loginUserMessage()) // undefined just logged in


function calculate_Cart_Price(val1, val2, ...num1)//... this is rest operator // this means ans will be [ 500, 2000 ] bcoz val1 will take 200 and val2 will take 400 
{
    return num1
}

// console.log(calculateCartPrice(200, 400, 500, 2000))

const user = {
    username: "shreya",
    prices: 199
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
    username: "sam",
    price: 399
})

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

// console.log(returnSecondValue(myNewArray));
// console.log(returnSecondValue([200, 400, 500, 1000]));