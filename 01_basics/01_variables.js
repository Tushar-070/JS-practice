const accountId=144553
let accountEmail='tusharkhatri@gmail.com'
var accountPassword='12345'
accountCity='Alwar'


// accountId=2  // not allowed because it is decleared by const variable


accountEmail='hii@.com'
accountPassword='21212121'
accountCity='Gurgaon'
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId,accountEmail,accountPassword,accountCity])

