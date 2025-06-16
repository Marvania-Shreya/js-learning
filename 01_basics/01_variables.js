const accountId = 1839 //use const for constant
let accountEmail = "shreya@gmail.com" //mostly use let for variable 
var accountPassword = "1234"//var is not used nowadays 
accountCity = "Jaipur" //this way is not good to use it 
let accountState; //it's undefined
// accountId = 2 not allowed

accountEmail = "sm@sm.com"
accountPassword = "9999"
accountCity = "pune"

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
 prefer not to use var
 because of issue in block scope and functional scope
*/