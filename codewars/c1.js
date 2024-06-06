

// https://www.codewars.com/kata/57256064856584bc47000611/train/javascript

/*
Task
Coding in function howManySmaller, function accept 2 parameter:arr and n. arr is a decimal array. n is a decimal.

The first mission: let all elements in the array keep two decimal places(No need to convert number n).

The second mission: Traversal arr, count the number of the element which smaller than n and return it.

for example:

howManySmaller([1.234,1.235,1.228],1.24) should return 2
howManySmaller([1.1888,1.1868,1.1838],1.19) should return 1
howManySmaller([3.1288,3.1212,3.1205],3.1212) should return 2
*/
function howManySmaller(arr,n){

  
  return 
}

console.log(howManySmaller([1.234,1.235,1.228],1.24), 2);
console.log(howManySmaller([1.1888,1.1868,1.1838],1.19), 1);
console.log(howManySmaller([3.1288,3.1212,3.1205],3.1212), 2);




// https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript
/*

function trueOrFalse(val){
  const arr = [
    {a: 1},
    {b: 2},
    {c: 1},
  ]
  if (val === a>b)    return false;             
  else     return true;
}
*/
/*
function trueOrFalse(val){
  const  a=1;
  const  b=2;
  const  c=1;
  if (a>b) {
    return 'false';
  } if (a===b) {
    return 'false'; 
  } if (a<b) {
    return 'true'; 
  } if (a!==b) {
    return 'true'; 
  } if (b>c) {
    return 'true';
  } if (b===c) {
    return 'false'; 
  } if (b<c) {
    return 'false'; 
  } if (b!==c) {
    return 'true'; 
  } if (a===c) {
    return 'true'; 
  } if (a!==c) {
    return 'false';      
}
}
*/
/*
console.log(trueOrFalse((a>b),"false"));
console.log(trueOrFalse((a===b),"false"));
console.log(trueOrFalse((a<b),"true"));
console.log(trueOrFalse((a!==b),"true"));
console.log(trueOrFalse((b>c),"true"));
console.log(trueOrFalse((b===c),"false"));
console.log(trueOrFalse((b<c),"false"));
console.log(trueOrFalse((b!==c),"true"));
console.log(trueOrFalse((a===c),"true"));
console.log(trueOrFalse((a!==c),"false"));

*/


// https://www.codewars.com/kata/55ca77fa094a2af31f00002a/train/javascript

function messiGoals () {
var laLigaGoals  = 10;
var championsLeagueGoals = 40;
var copaDelReyGoals = 8;
return messiGoals}

function totalGoals() {
  var total = messiGoals;
  return total 
}


console.log(messiGoals(), 58)
console.log(totalGoals(), 58)


// https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript

function strCount(str, num){  
  return str, str.slice(num - 1, num + 1);
}

function strCount(str, num){
  const strii = str + ''  
  return strii.charAt(num).indexOf();
}

    console.log(strCount('Hello', 'o'), 1);
    console.log(strCount('Hello', 'l'), 2);
    console.log(strCount('',      'z'), 0);


    
// https://www.codewars.com/kata/5ab52526379d20736b00000e/train/javascript

/*
function magNumber(info){
  
}

       [["PT92", 6], 2],
        [["M4A1", 8], 1],
        [["M16A2", 19], 2],
        [["PSG1", 31], 19],
        [["PT92", 19], 4],
  
    
    console.log(magNumber(input), expected);
*/












    // https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript
    function betterThanAverage(classPoints, yourPoints) {
  const count = classPoints.length;

  let clas = 0;
  
  let vid = clas / count;

  for (let i = 0; i< classPoints.length; i++) {
    clas += classPoints[i];
  } 
  if(vid > yourPoints) { 
    return  console.log(vid)
  } else if (vid<yourPoints){ return  console.log(vid)}
}


console.log(betterThanAverage([2, 3], 5, true));
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75, true));
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9, false));
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50, false));
console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21, false));



 // https://www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript

 function splitAndMerge(string, separator) {
  const text = string.split(' ')
  return text
}

console.log(splitAndMerge("My name is John"," ") , "M y n a m e i s J o h n");
console.log(splitAndMerge("My name is John","-") , "M-y n-a-m-e i-s J-o-h-n");
console.log(splitAndMerge("Hello World!",".") , "H.e.l.l.o W.o.r.l.d.!");
console.log(splitAndMerge("Hello World!",",") , "H,e,l,l,o W,o,r,l,d,!");


// https://www.codewars.com/kata/56d6b921c9ae3fd926000601/train/javascript
function strii(text) {
  return text.toString();
}

console.log(strii((123).toString(), "123"));
console.log(strii(Math.PI.toString(), "3.141592653589793"));
console.log(strii(Math.E.toString(), "2.718281828459045"));
console.log(strii(true.toString(), "true"));
console.log(strii(false.toString(), "false"));
console.log(strii([1,2,3,4,5].toString().replace(/\s+/g, ""), "[1,2,3,4,5]"));
  


console.log('---------')
//https://www.codewars.com/kata/5d59576768ba810001f1f8d6/train/javascript 

function quadratic(x1, x2){
  let x=[]
  let sprendimas = (x-x1) * (x-x2)
  if (x1 === 0) { return x = x1}
  else if (x2 === 0) { return x = x2}
  return [x1, x2, x1*x2];
}

console.log(quadratic( 0,  1), [1, -1,   0]);
console.log(quadratic( 1,  1), [1, -2,   1]);
console.log(quadratic(-4, -9), [1, 13,  36]);
console.log(quadratic(-5, -4), [1,  9,  20]);
console.log(quadratic( 4, -9), [1,  5, -36]);
console.log(quadratic( 5, -4), [1, -1, -20]);


// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
const summation = function (num) {
  let sum = 0;
  for (let i = 0; i<num.length; i++) {
    sum += num[i]
  }
  return console.log(sum) 
}

console.log(summation(1),  1);
console.log(summation(2),  3);
console.log(summation(8), 36);