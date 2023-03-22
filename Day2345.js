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

/*Day 4
conditionals: Block of codes that will be executed if expression is true;
syntax
if (condition) {
this part of code runs for truthy condition*/


let isSnowing =true
if (isSnowing) {
    console.log ('carry your coat')
}

let num = 3
if (num > 0) {
  console.log(`${num} is a positive number`)
}
//  3 is a positive number

let grade= 10
if (grade < 10){
  console.log(`${grade} is not amazing`)
}
else if (grade =10){
  console.log (`${grade} is awesome`)
}
else {
  console.log (`${grade} is nothing`)
}
let stolenProp= false
if (stolenProp) {
  console.log ('You are safe')
}
else {
  console.log ('Go and return it NOW!')
} 

let exam=50
if (exam >= 50) {
    console.log('You have passed, welcome to the next level') 
}

/* syntax
if (condition) {
  // this part of code runs for truthy condition
} else {
  // this part of code runs for false condition, if else creates chances for a false statement ,more like if false then run this.
}*/

let scores= 100
if (scores<100) {
    console.log ('You have failed')
}
else {
  console.log ('You have made it to the top :)')
}


/* // syntax
if (condition) {
     // code
} else if (condition) {
   // code
} else {
    //  code
}
*/
let pass = 80
if (pass < 50) {
  console.log('You should really sit up')
}
else if (pass<70){
  console.log('Use to the time you spend on your and put it to good use')
}
else if(pass=70){
  console.log(`${pass} makes you are an amazing student, keep it up!!`)
}
else if(pass>70){
  console.log('You are a star')
}
else{
  console.log('You are an exceptional Student')
}

let a = 0
if (a > 0) {
  console.log(`${a} is a positive number`)
} else if (a < 0) {
  console.log(`${a} is a negative number`)
} else if (a == 0) {
  console.log(`${a} is zero`)
} else {
  console.log(`${a} is not a number`)
}

//switch statement 
let weather = 'cloudy'
switch (weather) {
  case 'rainy':
    console.log('You need a rain coat.')
    break
  case 'cloudy':
    console.log('It might be cold, you need a jacket.')
    break
  case 'sunny':
    console.log('Go out freely.')
    break
  default:
    console.log(' No need for rain coat.')
}

let calender= 'Saturday'
switch (calender) {
  case 'Monday':
    console.log ('This is the most busy day')
  case 'Tuesday':
    console.log ('This is a day more busy day')
  case 'Wednesday':
    console.log ('This is a busy day, but not so busy as Monday')
  case 'Thurday':
    console.log ('This is a day i love because it is almost weekend')
  case 'Friday':
    console.log ('Yayyy! its the weekend')
  case 'Saturday': 
    console.log ('I love Saturdays cause WTF, TGIF!!!')
}


/*let dayUserInput = prompt('What day is today ?')
let day = dayUserInput.toLowerCase()

switch (day) {
  case 'monday':
    console.log('Today is Monday')
    break
  case 'tuesday':
    console.log('Today is Tuesday')
    break
  case 'wednesday':
    console.log('Today is Wednesday')
    break
  case 'thursday':
    console.log('Today is Thursday')
    break
  case 'friday':
    console.log('Today is Friday')
    break
  case 'saturday':
    console.log('Today is Saturday')
    break
  case 'sunday':
    console.log('Today is Sunday')
    break
  default:
    console.log('It is not a week day.')
}*/
/*
let digit = prompt('Enter number');
switch (true) {
  case digit > 0:
    console.log('Number is positive');
    break;
  case digit == 0:
    console.log('Numbers is zero');
    break;
  case digit < 0:
    console.log('Number is negative');
    break;
  default:
    console.log('Entered value was not a number');
}*/





//Day 5
//ARRAYS
const student = Array (38, 50, false)
console.log (student)

const amazing = [ 48, 1, 'Resting','sleeping', 'Traveling' , 'Skating', 'Cooking' ,10, 2, 'Washing the stars', 'moon' ]
console.log ('Amazing:' , amazing)
console.log ('Number of Amazing things:' , amazing.length)

let language = ('Very important') 
const enter= ( language.split)
//console.log (enter)
console.log (language.split(','))

console.log (amazing.length)
console.log (amazing[2])
console.log (amazing[0])
let lastindex= (amazing.length-1)
console.log(amazing [lastindex])
console.log (student.length-1)

amazing [1]= ('interesting')
amazing [5] = ('Travels')
console.log (amazing)
// Array can have items of different data types
const arr = [
  'Asabeneh',
  250,
  true,
  { country: 'Finland', city: 'Helsinki' },
  { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
] // arr containing different data types
console.log(arr)

//Modifying array element
//methods to manipulate arrays; Array,length,concat, indexOf, slice, splice, join, toString, includes, lastIndexOf, isArray,fill,push,pop,shift and unshift..
 //example; the first example modifies by changing the values pointed out by the index you inputed.
const countries = [
  'Albania',
  'Bolivia',
  'Canada',
  'Denmark',
  'Ethiopia',
  'Finland',
  'Germany',
  'Hungary',
  'Ireland',
  'Japan',
  'Kenya'
]

countries[0] = 'Nigeria'  // Replacing Albania by Nigeria
let astIndex = countries.length - 1
countries[astIndex] = 'Korea' // Replacing Kenya by Korea
console.log (countries)
// modifying array using '.fill'
const debut = Array(8).fill('miss')
console.log (debut)

const book= Array(3).fill(8)
console.log (book)

//concatenating arrays using concat
const phone= ['samsung', 'iPhone', 'Itel', 'Gionee']
const balablu=['Redmi', 'Opor', 'Sansui']
const join= phone.concat(balablu)
console.log (join)

//getting array length; I already practiced to do that using .length
console.log (join.length)

//Getting index an element in an array
//indexOf:To check if an item exist in an array. If it exists it returns the index else it returns -1.
const money = [7,'lambo',0, 'Mascerati', 'Benz', 2]
console.log (money.indexOf(7))
console.log (join.indexOf())
console.log (join.indexOf('Gionee'))

//lastIndexOf: It gives the position of the last item in the array. If it exist, it returns the index else it returns -1.

const numbers = [1, 2, 3, 4, 5, 3, 1, 2, 2, 3, 1, 4, 2]

console.log(numbers.lastIndexOf(2))
console.log(numbers.lastIndexOf(0))
console.log(numbers.lastIndexOf(1))
console.log(numbers.lastIndexOf(4))
console.log(numbers.lastIndexOf(6))

const collecteral = ['certificate', 'Awards', 'Mirror', 'football', 'Television', 'Radio', 'quokka']
console.log (collecteral.lastIndexOf('football'))

//includes:To check if an item exist in an array. If it exist it returns the true else it returns false.
const files = [0,3,2,1,0,6,5,3,4,7,8,9,5,5,3,2,1, 'flex']
console.log(files.includes(5)) 
console.log(files.includes(0)) 
console.log(files.includes(1))
console.log(files.includes(6))
console.log(files.includes('flex'))
console.log(files.includes('f'))

//Array.isArray:To check if the data type is an array
const stuff= [8,7,1,0,2,5]
console.log(Array.isArray(stuff))

//const link= 30
//console.log(Arrray.isArray(link))

//converting Array to string
const names = ['Asabeneh',12, 'Mathias',0,'Elias',10, 'Brook']
console.log(names.toString()) 

//join: It is used to join the elements of the array.
//it returns it as a string...
console.log(names.join()) 
console.log(names.join('')) 
console.log(names.join(' '))
console.log(names.join(', '))
console.log(names.join(' # '))

//slice: it cuts out multiple item in range, it takes two values the start and the end...
console.log (names.slice())
//.splice removes items from an array , it takes 3 properties; the start, the numbers to remove and the ones to replace
console.log (names.splice(3,4,'Elias', 'Timothy', 'Thomas', 8))
console.log (names)

//.push; adds array to the end of an already existing array
// .pop; removes an (1) item from the end of the array
// .shift; removes an (1) item from the front of an array
// .unshift; adds an item to the begining of an array

//reversing items in an array using .reverse

const array1 = [1, false, 2, 3, 4, "yes", false]
const newArray1 = [...array1]
console.log(newArray1)
console.log(newArray1.splice(1,7))
console.log(newArray1)


console.log(array1.push(5,3))
console.log(array1)

console.log(array1.pop())
console.log(array1)

console.log(array1.shift())
console.log(array1)

console.log(array1.unshift(2))
console.log(array1)
