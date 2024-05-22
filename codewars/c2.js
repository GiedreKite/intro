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
console.log(whatday(20),  'Wrong, please enter a number between 1 and 7');
console.log(whatday('sanday'),  'Wrong, please enter a number between 1 and 7');
console.log(whatday('undefined'),  'Wrong, please enter a number between 1 and 7');

// https://www.codewars.com/kata/570669d8cb7293a2d1001473/train/javascript

function ifChuckSaysSo(){
  return !true;
}

console.log(ifChuckSaysSo(), false);

function reverseWords(strii) {
  let sakinys = '';

  if (typeof strii === 'string' && strii.length > 0) {
    const zodis = strii.split(' ');
    for (let i = strii.length - 1; i >= 0; i--) {
      sakinys[i] = + zodis[i]
    }

    return sakinys;

  } 
  return '';
}

console.log(reverseWords());
console.log(reverseWords('hello world!'));
console.log(reverseWords());
console.log(reverseWords("vienas"));
console.log(reverseWords("hello world!"), "world! hello")
console.log(reverseWords("yoda doesn't speak like this"), "this like speak doesn't yoda")
console.log(reverseWords("foobar"), "foobar")
console.log(reverseWords("kata editor"), "editor kata")
console.log(reverseWords("row row row your boat"), "boat your row row row")
console.log(reverseWords(""), "")

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
