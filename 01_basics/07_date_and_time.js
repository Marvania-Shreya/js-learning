// Dates

let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toLocaleString());
// console.log(typeof myDate);


// console.log(myDate.toString());                  
// =>  Tue Feb 18 2025 05:33:15 GMT+0530 (India Standard Time)

// console.log(myDate.toLocaleString());        
// => 2/18/2025, 5:33:15 AM

// console.log(myDate.toISOString());             
// => 2025-02-18T00:03:15.104Z

// console.log(myDate.toJSON());                    
// =>  2025-02-18T00:03:15.104Z

// console.log(myDate.toLocaleDateString()); 
// =>  2/18/2025

// console.log(myDate.toTimeString());         
// =>  05:33:15 GMT+0530 (India Standard Time)

// console.log(myDate.toUTCString());           
// =>  Tue, 18 Feb 2025 00:03:15 GMT


// let myCreatedDate = new Date(2023, 0, 23)
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
// console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()

// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());

// `${newDate.getDay()} and the time `

newDate.toLocaleString('default', {
    weekday: "long",
})