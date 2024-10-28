//https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript

function solution(str){
  let zodis = '';
  for (let i = str.length-1; i >= 0; i--) {
    zodis += str[i];
  }
  return zodis;
}

console.log('wordl');
  console.log(solution('wordl'));

console.log('-------')

// https://www.codewars.com/kata/59dd3ccdded72fc78b000b25/train/javascript
/*
Complete the function which returns the weekday according to the input number:

1 returns "Sunday"
2 returns "Monday"
3 returns "Tuesday"
4 returns "Wednesday"
5 returns "Thursday"
6 returns "Friday"
7 returns "Saturday"
Otherwise returns "Wrong, please enter a number between 1 and 7"
*/

function whatday(num) {
if( num>=8) {
  return 'Wrong, please enter a number between 1 and 7'
};
if (num === 1) {
  return 'Sunday';
}
if (num === 2) {
  return 'Monday';
}
if (num === 3) {
  return 'Tuesday';
}
if (num === 4) {
  return 'Wednesday';
}
if (num === 5) {
  return 'Thursday';
}
if (num === 6) {
  return 'Friday';
}
if (num === 7) {
  return 'Saturday';
}
  if (num !== undefined) {
  return 'Wrong, please enter a number between 1 and 7'
};
    if (typeof num === 'number') {
  return 'Wrong, please enter a number between 1 and 7'
};
}

console.log(whatday(1),'Sunday');
console.log(whatday(2), 'Monday');
console.log(whatday(3),'Tuesday');
console.log(whatday(8),  'Wrong, please enter a number between 1 and 7');
console.log(whatday('sanday'),  'Wrong, please enter a number between 1 and 7');
console.log(whatday('undefined'),  'Wrong, please enter a number between 1 and 7');

// https://www.codewars.com/kata/570669d8cb7293a2d1001473/train/javascript

function ifChuckSaysSo(){
  return !true;
}

console.log(ifChuckSaysSo(), false);


/*
https://www.codewars.com/kata/55a5befdf16499bffb00007b/train/javascript
*/
function add(a,b){
    return a+b
}

function divide(a,b){
    return a/b
}

function multiply(a,b){
    return a*b
}

function mod(a,b){
    return a%b
}
   
function exponent(a,b){
    return a**b
}
    
function subt(a,b){
    return a-b
}

console.log(add(1,2),3);
console.log(multiply(1,2),2);
console.log(divide(2,1),2);
console.log(mod(1,2),1);
console.log(exponent(1,2),1);
console.log(subt(1,2),-1);

function reverseAreyOfNumber(list) {
  const rev = [];

  for (let i = list.length - 1; i >= 0; i--) {
  rev.push
  }
return '';
  } 
  

console.log(reverseAreyOfNumber([1,2,3,4,5]));
// https://www.codewars.com/kata/57a083a57cb1f31db7000028/train/javascript
/*
    Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples
n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]
MATHEMATICSFUNDAMENTALS
*/


function powersOfTwo(n){
  let atsakymas  = [];
    for (let i =  0; i <= n ; i++) {
    atsakymas.push(2 ** i);
  }
  return atsakymas;
}


console.log(powersOfTwo((0), [1]));
console.log(powersOfTwo((1), [1, 2]));
console.log(powersOfTwo((4), [1, 2, 4, 8, 16]));
    



/*
https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
DESCRIPTION:
Your task is to create a function that does four basic mathematical operations.

The function should take three arguments - operation(string/char), value1(number), value2(number).
The function should return result of numbers after applying the chosen operation.

Examples(Operator, value1, value2) --> output
('+', 4, 7) --> 11
('-', 15, 18) --> -3
('*', 5, 5) --> 25
('/', 49, 7) --> 7
*/

//}

function basicOp(operation, value1, value2){
  if (operation === '+') {
    return value1+value2;
  }
  if (operation === '-') {
    return value1-value2;
  }
    if (operation === '*') {
    return value1*value2;
  }
    if (operation === '/') {
    return value1/value2;
  }
}


    console.log(basicOp("+", 4, 7));
    console.log(basicOp("-", 15, 18));
    console.log(basicOp("*", 5, 5));
    console.log(basicOp("/", 49, 7));
  
function calcObj(operation, n1, n2){
 const mathFuncions = {
  '+' : (a,b) => a+b,
  '-' : (a,b) => a-b,
  '/' : (a,b) => a/b,
  '*' : (a,b) => a*b,
 } 
 return mathFuncions[operation](n1,n2);
}


    console.log(calcObj("+", 4, 7));
    console.log(calcObj("-", 15, 18));
    console.log(calcObj("*", 5, 5));
    console.log(calcObj("/", 49, 7));

    // https://www.codewars.com/kata/544675c6f971f7399a000e79/train/javascript

const stringToNumber = function(str){
  return parseFloat(str);
}

console.log(stringToNumber("1234"),1234)
console.log(stringToNumber("605"), 605)
console.log(stringToNumber("1405"),1405)
console.log(stringToNumber("-7"),  -7)

//https://www.codewars.com/kata/55c28f7304e3eaebef0000da/train/javascript

function createArray(number){
  var newArray = [];
  
  for(var counter = 1; counter <= number; counter ++){
    newArray.push(counter);
  }
  
  return newArray;
}
console.log(createArray(1),[1]);
console.log(createArray(2),[1,2]);
console.log(createArray(3),[1,2,3]);
console.log(createArray(4),[1,2,3,4]);
console.log(createArray(5),[1,2,3,4,5]);

// https://www.codewars.com/kata/55c90cad4b0fe31a7200001f/train/javascript


function buildString(...template){
  return `I like ${template.join(', ')}!`;
}

console.log(buildString('Cheese','Milk','Chocolate'), 'I like Cheese, Milk, Chocolate!', 'Return the correct String');
console.log(buildString('Cheese','Milk'), 'I like Cheese, Milk!', 'Return the correct String');
console.log(buildString('Chocolate'), 'I like Chocolate!', 'Return the correct String');
  
// https://www.codewars.com/kata/56aed32a154d33a1f3000018/train/javascript

function myFirstKata(a, b) {
  if (typeof a !== "number") {
    return false;
  } if (typeof b !== 'number') {
    return false;
  } else {
   return a % b + b % a;
   }
}

console.log(myFirstKata(3,5),(3 % 5 + 5 % 3));
console.log(myFirstKata("hello",3),false);
console.log(myFirstKata(67,"bye"),false);
console.log(myFirstKata(true,true),false);
console.log(myFirstKata(314,107),(107 % 314 + 314 % 107));
console.log(myFirstKata(19483,9),(9 % 19483 + 19483 % 9));


// https://www.codewars.com/kata/57158fb92ad763bb180004e7/train/javascript

function rainAmount(mm){
    if (mm >= 40) {
      return 'Your plant has had more than enough water for today!';
    } if (mm < 40) {
      const liko = 40 - mm;
      return `You need to give your plant ${liko}mm of water`
    }
}

console.log(rainAmount(100));
console.log(rainAmount(39));


//https://www.codewars.com/kata/57202aefe8d6c514300001fd/train/javascript
console.log('---ternary--')


function saleHotdogs(n){
  const a = n < 5 ? 100 : 0;
  const b = n>= 5 && n < 10 ? 95 : 0;
  const c = n>= 10 ? 90 : 0;
  return n * a + n * b + n * c
}

console.log(saleHotdogs(  1),  100);
console.log(saleHotdogs(  4),  400);
console.log(saleHotdogs(  5),  475);
console.log(saleHotdogs(  9),  855);
console.log(saleHotdogs( 10),  900);
console.log(saleHotdogs(100), 9000);





//https://www.codewars.com/kata/571effabb625ed9b0600107a/train/javascript

function getLength(arr){
  return arr.length;
}
function getFirst(arr){
  return arr[0];
}
function getLast(arr){
  return arr[arr.length -1];
}
function pushElement(arr){
  var el=1;
  arr.push(el);
  return arr
}
function popElement(arr){ 
  arr.pop();
  return arr;
}

console.log(getLength([1,2,3]),3);
console.log(getFirst([1,2,3]),1);
console.log(getLast([1,2,3]),3);
console.log(pushElement([1,2,3]).length,4);
console.log(popElement([1,2,3]).length,2);

// https://www.codewars.com/kata/55cb854deb36f11f130000e1/train/javascript

function weatherInfo (temp) {
  var c = convertToCelsius(temp)
  if (c < 0)
    return (c + " is freezing temperature")
  else
    return (c + " is above freezing temperature")
}

function convertToCelsius (temperature) {
  var celsius = (temperature - 32) * (5/9)
  return Math.ceil(celsius)
}


console.log (weatherInfo(50), '10 is above freezing temperature')
console.log (weatherInfo(23),  '-5 is freezing temperature')

// https://www.codewars.com/kata/5861d28f124b35723e00005e/train/javascript
const zeroFuel = (distanceToPump, mpg, fuelLeft) =>  (distanceToPump / mpg) <= fuelLeft ? true : false
;

console.log(zeroFuel(50, 25, 2), true);
console.log(zeroFuel(100, 50, 1), false);

// https://www.codewars.com/kata/5704aea738428f4d30000914/train/javascript
function tripleTrouble(one, two, three){
  let trip = ''; 
  for (let i=0; i<one.length; i++) {
    trip += one[i] + two[i] + three[i];
  }
  return trip
}

console.log(tripleTrouble("aaa","bbb","ccc"), "abcabcabc");
console.log(tripleTrouble("aaaaaa","bbbbbb","cccccc"), "abcabcabcabcabcabc");
console.log(tripleTrouble("burn", "reds", "roll"), "brrueordlnsl");
console.log(tripleTrouble("Sea","urn","pms"), "Supermans"); 
console.log(tripleTrouble("LLh", "euo", "xtr"), "LexLuthor");

function position(letter){
 const lettersOfAlphabet = "abcdefghijklmnopqrstuvwxyz";
  return `Position of alphabet: ${lettersOfAlphabet.indexOf(letter) +1}`
}

 assert.strictEqual(position("a"),"Position of alphabet: 1");
    assert.strictEqual(position("z"),"Position of alphabet: 26");
    assert.strictEqual(position("e"),"Position of alphabet: 5");