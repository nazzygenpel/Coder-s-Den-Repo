//Exercise: Level 1

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

const webTechs = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB'
   ]

    //Declare an empty array;
const character= []

    /*Declare an array with more than 5 number of elements
    Find the length of your array
    Get the first item, the middle item and the last item of the array*/

const program= ['label', 'feast', 'sublime', 'overall', 'victim', 'solution', 14, 'salvation', 100]
console.log (program.length)
console.log (program)
console.log (program[0]) //first item on the Array
console.log (program.length-1)// This was done to check the index of the last item before inputing the index in the next console
console.log (program[8])
console.log (program[4]) // The middle item

    //Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
const mixedDataTypes= [
    'company',
    'Exercise',
    'methods',
     4,
    'Butter',
    'laptops',
    9,
    'marriage',
]
console.log (mixedDataTypes.length) //8

    /*Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
    Print the array using console.log()*/
const ITCompany=  [
'Facebook',
'Google',
'Microsoft',
'Apple', 
'IBM', 
'Oracle' , 
'Amazon']

console.log (ITCompany)
    //Print the number of companies in the array
console.log (ITCompany.length) // there are 7 items in the array
    //Print the first company, middle and last company
console.log (ITCompany[0])//first company
console.log (ITCompany[6]) // last company, length which is 7 minus 1= 6
console.log (ITCompany[3])//middle company

    //Print out each company
console.log (ITCompany[0])
console.log (ITCompany[1])
console.log (ITCompany[2])
console.log (ITCompany[3])
console.log (ITCompany[4])
console.log (ITCompany[5])
console.log (ITCompany[6])

    //Change each company name to uppercase one by one and print them out
for (let company of ITCompany){
console.log (company.toUpperCase())  
  };

    //Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
const newSentence = ['are big IT companies.']   
console.log (`${ITCompany}`+ `${newSentence}` )
    //OR
console.log (ITCompany.concat(newSentence))

    //Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
let theCompany = ITCompany.includes ('Tiger')
if (theCompany === true) {
    console.log ('Tiger')
 } 
else {
    console.log ('The company is not found')
  }
    //Filter out companies which have more than one 'o' without the filter method
//ITCompany.filter ('oo')
//console.log (ITCompany)
    //Sort the array using sort() method
console.log (ITCompany.sort())
    //Reverse the array using reverse() method
console.log (ITCompany.reverse())
    //Slice out the first 3 companies from the array
console.log (ITCompany.slice(0,3))
console.log (ITCompany)
    //Slice out the last 3 companies from the array
console.log (ITCompany.slice(3,6))
    //Slice out the middle IT company or companies from the array
console.log (ITCompany)
    //Remove the first IT company from the array
console.log (ITCompany.shift())
console.log (ITCompany)
    //Remove the middle IT company or companies from the array
console.log (ITCompany.slice(2,3))
    //Remove the last IT company from the array
console.log (ITCompany.pop())
console.log (ITCompany)
    //Remove all IT companies*/
ITCompany.splice()
console.log (ITCompany)


/*Exercise: Level 2
    Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file

    First remove all the punctuations and change the string to array and count the number of words in the array

    let text =
    'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
    console.log(words)
    console.log(words.length)

    ["I", "love", "teaching", "and", "empowering", "people", "I", "teach", "HTML", "CSS", "JS", "React", "Python"]

    13*/

//In the following shopping cart add, remove, edit items
    const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
        //add 'Meat' in the beginning of your shopping cart if it has not been already added
    newCart = shoppingCart.unshift('Meat')
    console.log (newCart)
    console.log (shoppingCart)
        //add Sugar at the end of you shopping cart if it has not been already added
    console.log (shoppingCart.push('sugar'))
    console.log (shoppingCart)
        //remove 'Honey' if you are allergic to honey
    console.log (shoppingCart)
        //modify Tea to 'Green Tea'
    shoppingCart.toString
    console.log (shoppingCart)

        //In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.
    let exists = countries.includes ('Ethiopia')
    if (exists === true) {
        console.log ('Ethiopia')
    }
    else {
        console.log (countries.unshift('Ethiopia'))
    }

    //In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.

    //Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']

let fullStack = frontEnd.concat('backEnd')
//console.log(fullStack) 


//Exercise: Level 3
//The following is an array of 10 students ages:

    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24]

        //Sort the array and find the min and max age
         let age=ages.sort
        console.log (ages)
        //Find the median age(one middle item or two middle items divided by two)
        //Find the average age(all items divided by number of items)
        //Find the range of the ages(max minus min)
        //Compare the value of (min - average) and (max - average), use abs() method 1.Slice the first ten countries from the countries array

        //Find the middle country(ies) in the countries array

    
        //Divide the countries array into two equal arrays if it is even. If countries array is not even , one more country for the first half.*/
