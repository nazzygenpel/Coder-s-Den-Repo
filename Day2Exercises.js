 /* LEVEL I
 Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
Print the string on the browser console using console.log()
Print the length of the string on the browser console using console.log()
Change all the string characters to capital letters using toUpperCase() method
Change all the string characters to lowercase letters using toLowerCase() method
Cut (slice) out the first word of the string using substr() or substring() method
Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
Check if the string contains a word Script using includes() method
Split the string into an array using split() method
Split the string 30 Days Of JavaScript at the space using split() method
'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
Use startsWith() method with the string 30 Days Of JavaScript and make the result true
Use endsWith() method with the string 30 Days Of JavaScript and make the result true
Use match() method to find all the a’s in 30 Days Of JavaScript
Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
Use repeat() method to print 30 Days Of JavaScript 2 times
*/
// ANSWERS
let challenge= '30 Days of JavaScript'
console.log (challenge)
console.log (challenge.length)
console.log (challenge.toUpperCase())
console.log (challenge.toLowerCase())
console.log (challenge.substring(3))
console.log (challenge.substring(0,3))
console.log (challenge.includes('Script'))
console.log (challenge.split())
console.log (challenge.split(' '))

let softWare = 'Facebook, Google, Microsoft, Apple, IBM,  Oracle, Amazon'
console.log(softWare.split(','))

console.log(challenge.replace('JavaScript', 'Phyton'))
console.log(challenge.charAt(15))
console.log(challenge.charCodeAt('J'))
console.log(challenge.indexOf('a'))
console.log(challenge.lastIndexOf('a'))


let sentence= 'You cannot end a sentence with because because because is a conjunction'
console.log(sentence.indexOf('because'))
console.log (sentence.lastIndexOf('because'))
console.log(sentence.search('because'))
console.log(sentence.trim(''))
console.log(challenge.startsWith('30 Days'))
console.log(challenge.endsWith('Script'))
console.log(challenge.match('a'))

let string= '30 Days of'
console.log(string.concat( 'Javascript'))
console.log(challenge.repeat(2))

// LEVEL II
/*Using console.log() print out the following statement:
The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
Using console.log() print out the following quote by Mother Teresa:
"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
Check if 'on' is found in both python and jargon
I hope this course is not full of jargon. Check if jargon is in the sentence.
Generate a random number between 0 and 100 inclusively.
Generate a random number between 50 and 100 inclusively.
Generate a random number between 0 and 255 inclusively.
Access the 'JavaScript' string characters using a random number.
Use console.log() and escape characters to print the following pattern.

1 1 1 1 1
2 1 2 4 8
3 1 3 9 27
4 1 4 16 64
5 1 5 25 125
Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
*/
let exercise= 'There is no exercise better for the heart than reaching down and lifting people up'
console.log('"'+exercise+'"')

let quote= "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."
console.log('"'+quote+'"')

let stringNum = '10'
console.log (typeof stringNum)
let mainNum= parseInt(stringNum)
console.log(mainNum) 

let floatNum= '9.8'
let actualNum= parseFloat(floatNum)  
console.log(actualNum)
console.log(Math.round(9.8))

let phyt= 'Phyton'
let jarg='Jargon'

console.log(phyt.includes('on'))
console.log(jarg.includes('on'))
console.log(phyt.search('on'))
console.log(phyt.match('on'))
console.log(jarg.search('on'))
console.log(jarg.match('on'))

let checksen= 'I hope this course is not full of jargon'
console.log(checksen.includes('jargon'))

console.log(Math.floor(Math.random()*101));;;;;;;;;
console.log(Math.floor(Math.random()*101) -50);;;;;;;;;;
console.log(Math.floor(Math.random()*256));;;;;;;;

let letter= 'JavaScript'
let theLetter = letter[Math.floor(Math.random()*10)];;;;
console.log(theLetter)

console.log('1\t1\t1\t1\t1')
console.log('2\t1\t2\t4\t8')
console.log('3\t1\t3\t9\t27')
console.log('4\t1\t4\t16\t64')
console.log('5\t1\t5\t25\t125')

let word= 'You cannot end a sentence with because because because is a conjunction '
console.log(word.indexOf('because'))
console.log(word.substr(0,31))
console.log(word.substr(54, ))

/*LEVEL III
'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.

Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'

Clean the following text and find the most frequent word (hint, use replace and regular expressions).

    const sentence = '%I $am@% a %tea@cher%, &and& I lo%#ve %te@a@ching%;. The@re $is no@th@ing; &as& mo@re rewarding as educa@ting &and& @emp%o@weri@ng peo@ple. ;I found tea@ching m%o@re interesting tha@n any ot#her %jo@bs. %Do@es thi%s mo@tiv#ate yo@u to be a tea@cher!? %Th#is 30#Days&OfJavaScript &is al@so $the $resu@lt of &love& of tea&ching'
Calculate the total annual income of the person by extracting the numbers from the following text. 'He earns 5000 euro from salary per month, 10000 euro annual bonus, 15000 euro online courses per month.'
*/

//ANSWERS
let stuff= 'Love is the best thing in this world. Some found their love and some are still looking for their love.'
console.log(stuff.search('Love'))
let annual='/because/gi'
console.log(word.match(annual))
console.log(word.match('because'))
//This one is quite confusing to me...







