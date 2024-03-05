let score1="Tushar" // when we convert this into number its also throw NaN value
let score2="33mm" // when we convert this type of string into number, it converts into number but out alwas shows NaN(Not an Number) 
let score3="33" // when we convert this into number it perfectly convert into number
let score4=undefined // when we convert this into number its also throw NaN value
let score5=null // when we convert this into number it always convert into 0
let score6=true // when we convert this into number it convert into 1
let score7=false // when we convert this into number it convert into 0

console.log(typeof score); // It gives type of variables 
console.log(typeof(score)); // It also give type of variables but its syntex is method

let valueInNumber=Number (score)
console.log(typeof valueInNumber); //it shows type is number
console.log(valueInNumber); // But it always throws NaN