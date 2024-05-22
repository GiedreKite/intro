
//https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript


function smash (words) {
  let atsakymas = '';

 // if (words.length >= 0) {
 //   return '';
 // } if (words.length === 1) {
 //   return words;
 // } else {
    for (let i = 0; i< words.length; i++) {
      atsakymas = words[i] + atsakymas; 
    }
    return atsakymas;
  }




console.log(smash('hello', 'world', 'this', 'is', 'great'));
console.log(smash('labas','man gerai','sekas'));

 if ("Should return empty string for empty array.", () => {
   assert.strictEqual(smash([]), "");
 });

 if ("One word example should return the word.", () => {
   assert.strictEqual(smash(["hello"]), "hello");
 });
   
 if ("Multiple words should be separated by spaces.", () =>  {
   assert.strictEqual(smash(["hello", "world"]), "hello world");
   assert.strictEqual(smash(["hello", "amazing", "world"]), "hello amazing world");
   assert.strictEqual(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");
 });



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

//function basicOp(operation, value1, value2){
//
//   const veiksmas = String(value1) +operation + String(value2);
//
//  return (eval(veiksmas));
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


function powersOfTwo1(n){
  let atsakymas1  = [];
  let atsakymas =[];
  if (n === 0) {
    for (let i =  0; i <= n ; i++) {
    let two = 2 ** i;
    atsakymas1 += + two;
    }
    return [atsakymas1];
  }
  if (n>0) {
    for (let i =  0; i <= n ; i++) {
    let two = 2 ** i;
    atsakymas = two;
    atsakymas = atsakymas + ',';
  }return [atsakymas]
  }
}
//expected [ '1' ] to deeply equal [ 1 ]
//assert.deepEqual(powersOfTwo((0), [1]));
//assert.deepEqual(powersOfTwo((1), [1, 2]));
//assert.deepEqual(powersOfTwo((4), [1, 2, 4, 8, 16]));

console.log(powersOfTwo((0), [1]));
console.log(powersOfTwo((1), [1, 2]));
console.log(powersOfTwo((4), [1, 2, 4, 8, 16]));
    
console.log(powersOfTwo1((0), [1]));
console.log(powersOfTwo1((1), [1, 2]));
console.log(powersOfTwo1((4), [1, 2, 4, 8, 16])); 



//https://www.codewars.com/kata/56d6c333c9ae3fc32800070f/train/javascript

function yearDays(year) {
  if (year % 4 === 0) {
    return '' + year + ' has 366 days'
  } else {
    return '' + year + ' has 365 days'
  }
}

//Test.assertEquals(yearDays(0), '0 has 366 days');
//Test.assertEquals(yearDays(-64), '-64 has 366 days');
//Test.assertEquals(yearDays(2016), '2016 has 366 days');
//Test.assertEquals(yearDays(1974), '1974 has 365 days');
//Test.assertEquals(yearDays(-10), '-10 has 365 days');
//Test.assertEquals(yearDays(666), '666 has 365 days');
//Test.assertEquals(yearDays(1857), '1857 has 365 days');

console.log(yearDays(0), '0 has 366 days');
console.log(yearDays(-64), '-64 has 366 days');
console.log(yearDays(2016), '2016 has 366 days');
console.log(yearDays(1974), '1974 has 365 days');
console.log(yearDays(-10), '-10 has 365 days');
console.log(yearDays(666), '666 has 365 days');
console.log(yearDays(1857), '1857 has 365 days');