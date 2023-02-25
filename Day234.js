let age = 35
const gravity = 9.81  // we use const for non-changing values, gravitational constant in  m/s2
let mass = 72         // mass in Kilogram
const PI = 3.14       // pi a geometrical constant


// More Examples
const boilingPoint = 100 // temperature in oC, boiling point of water which is a constant
const bodyTemp = 37      // oC average human body temperature, which is a constant

console.log(age, gravity, mass, PI, boilingPoint, bodyTemp)
console.log (bodyTemp- PI)

// String Method
// 1. length
let js = 'JavaScript'
console.log(js.length)        
let firstName = 'Asabeneh'
console.log(firstName.length)  

// 2. accessing characters in a string using the index
let string = 'JavaScript'
let firstLetter = string[0]

console.log(firstLetter)   

let secondLetter = string[1] 
let thirdLetter = string[2]
let lastLetter = string[9]

console.log(lastLetter)   

let lastIndex = string.length - 1

console.log(lastIndex)
console.log(string[lastIndex]) 


let sequence= "Wake up, brush your teeth and go to work"
console.log (sequence.length)
console.log (lastIndex)
console.log (lastLetter)

//another example
let letter= 'JavaScript'
let theLetter = letter[Math.floor(Math.random()*10)];;;;
console.log(theLetter)


// 3. toUpperCase(): this method changes the string to uppercase letters.
console.log(sequence.toUpperCase())

// 4. tolowerCase(): this method changes the string to lowercase letters.
console.log (sequence.toLowerCase())
// 5. .substr(): it starts from the index you want it to start, this browser supports substring not substr
console.log(string.substr(4,6))
console.log(string.substring(4,6))
// 6. .substring()
console.log (sequence.substring(4,20))

// 7. .split (): splits a string at a specified place
let journey = '30 Days Of JavaScript'
console.log(journey.split())     // Changes to an array -> ["30 Days Of JavaScript"]
console.log(journey.split(' '))  // Split to an array at space -> ["30", "Days", "Of", "JavaScript"]

// 8. .trim(): 
console.log (journey.trim('')) 
//or console.log (journey.trim ())

// 9. .includes (): checks if the string includes something, it usually returns true or false
console.log (journey. includes('Days'))
// Do not forget to put the bracket in all methods, and also include the strings in the bracket.

//10. .replace (): takes as a parameter the old substring and a new substring
console.log (journey.replace('Java', 'Phyton'))
//you have to put the one you are changing exactly the way it is if not it will not be replaced
let defined= 'I love Angel so much'
console.log (defined.replace('love', 'hate')) 

// 11. charAt(): Takes index and it returns the value at that index
console.log(journey.charAt(4))
console.log(journey.charAt(5))
console.log(defined.charAt(9))

// 12. charCodeAt(): Takes index and it returns char code (ASCII number) of the value at that index
console.log(journey.charCodeAt(3))
console.log(journey.indexOf('D'))          // 3
console.log(journey.indexOf('Days'))       // 3
console.log(journey.indexOf('days'))       // -1
console.log(journey.indexOf('a'))          // 4
console.log(string.indexOf('JavaScript')) // 11
console.log(string.indexOf('Script'))     //15

// 15. concat(): it takes many substrings and joins them.
let learn= 'Serious'
console.log(learn.concat('30 Days of javaScript'))

// 16. startsWith: it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false).
let life= 'Let love lead'
console.log(life.startsWith('Let'))
console.log(life.startsWith('life'))

//17.endsWith: it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).
console.log(life.endsWith('let'))
console.log(life.endsWith('lead'))
console.log(life.endsWith('love lead'))

//18. search: it takes a substring as an argument and it returns the index of the first match. The search value can be a string or a regular expression pattern. 

 
/*Day 3
Truthy values are positive and negative number except zero (0), the boolean truth and all strings except empty string('').
Falsy values are 0, empty strings(''), NaN, the boolean false, undefined variables and Null
*/

// Assignment Operators (=, +=, -=, *=,/=, %=, **=) an equal sign assigns and assignment to a value...
// Arithmetic Operators (+,-,*,%,**,/)
// Comparism Operators (>,<, !=,==,===, >=,<=) they compare value, mostly booleans...
console.log(3 == 2)             // false, because 3 is not equal to 2
console.log(3 != 2)             // true, because 3 is not equal to 2
console.log(3 == '3')           // true, compare only value
console.log(3 === '3')          // false, compare both value and data type
console.log(3 !== '3')          // true, compare both value and data type
console.log(3 != 3)             // false, compare only value
// Notice the difference == and ===

// logical operators (&&, ||, !)

const check = 4 > 3 && 10 < 5         // true && false -> false
console.log(check)

const checks = 4 > 3 || 10 < 5         // true  || false -> true
console.log(checks)

// increment operators ; ++ and decreament operators--
//Ternary Operators:Ternary operator allows to write a condition. Another way to write conditionals is using ternary operators.

let isRaining = true
isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')
isRaining = false

isRaining
  ? console.log('You need a rain coat.')
  : console.log('No need for a rain coat.')

let isReading = true
  isReading
  ? console.log ('You need to read for exam')
  : console.log ('No need to read for exams')

 isReading = false
 isReading
 ?console.log('You need to read for exam')
 :console.log('No need to read for exams')
 
 //Date Object
 const now= new Date()
console.log(now)
console.log(now.getFullYear())
console.log(now.getMonth())
console.log(now.getDate()) 
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getSeconds())




