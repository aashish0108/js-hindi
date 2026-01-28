const accountId=1
let accountEmail="aj@aj.com"
var accountPassword="123"
accountCity="Pune"

let accountState;

// accountId=2  //const can't be changed
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

