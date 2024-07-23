

    // https://www.codewars.com/kata/5601409514fc93442500010b/train/javascript
    function betterThanAverage(classPoints, yourPoints) {
  const count = classPoints.length;

  let clas = 0;
  
  let vid = clas / count;

  for (let i = 0; i< classPoints.length; i++) {
    clas += classPoints[i];
    vid = clas/count
  } 
  if(vid < yourPoints) { 
    return  true
  } else { return  false}
}


console.log(betterThanAverage([2, 3], 5, true));
console.log(betterThanAverage([100, 40, 34, 57, 29, 72, 57, 88], 75, true));
console.log(betterThanAverage([12, 23, 34, 45, 56, 67, 78, 89, 90], 9, false));
console.log(betterThanAverage([41, 75, 72, 56, 80, 82, 81, 33], 50, false));
console.log(betterThanAverage([29, 55, 74, 60, 11, 90, 67, 28], 21, false));


console.log('----while--')
// https://www.codewars.com/kata/57216d4bcdd71175d6000560/train/javascript
function padIt(str,n){
  let ats = '';
  while(n===1) { return '*'+str};
 while(n % 2 === 0){
 return ats = '*'.repeat(n/2)+str+'*'.repeat(n/2)
 } 
  while(n % 2 !== 0){
  return ats = '*'.repeat(1+n/2)+str+'*'.repeat(n/2)
 }
 return ats
}


    console.log(padIt("a",1),"*a");
    console.log(padIt("a",2),"*a*");
    console.log(padIt("a",3),"**a*");
    console.log(padIt("a",4),"**a**");
    console.log(padIt("a",5),"***a**");

// https://www.codewars.com/kata/570bcd9715944a2c8e000009/train/javascript

function sc(floor){
  let sound = '';
    if (floor <2) {
    return ''
  }
  if (floor <=6 && floor>=2) {
    return sound +('Aa~ ').repeat(floor-1) +('Pa!') +(' Aa!')
  }
    if (floor >6) {
    return sound + ('Aa~ ').repeat(floor-1) + ('Pa!')
  }
}

console.log(sc(2), "Aa~ Pa! Aa!", "good luck!");  
console.log(sc(6), "Aa~ Aa~ Aa~ Aa~ Aa~ Pa! Aa!", "good luck!"); 
console.log(sc(7), "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!"); 
console.log(sc(10), "Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Aa~ Pa!", "good luck!"); 
console.log(sc(1), "", "good luck!"); 
console.log(sc(-1), "", "good luck!"); 

console.log('----------ar sakinyje yra zodis')
// https://www.codewars.com/kata/56a4addbfd4a55694100001f/train/javascript
function validateHello(greetings) {
  const dict = ['hello', 'ciao' , 'salut', 'hallo', 'hola' , 'ahoj' , 'czesc',
  ];
  greetings = greetings.toLowerCase();
  
  for (const word of dict) {
    if (greetings.includes(word)) {
      return true;
    }
  }
  return false;
}
// const validateHello = greetings => /hello|ciao|salut|hallo|hola|ahoj|czesc/i.test(greetings)
console.log(validateHello('ahoj'), true);
console.log(validateHello('meh'), false);
console.log(validateHello('ciao'), true);
console.log(validateHello('ciao sako tau'), true);
console.log(validateHello('Hallowen'), true);

console.log('-------is nan')
//https://www.codewars.com/kata/5722fd3ab7162a3a4500031f/train/javascript

function whatNumberIsIt(n){
  if (n === Infinity) {
    return 'Input number is Number.POSITIVE_INFINITY'
  } if (n === -Infinity) {
    return 'Input number is Number.NEGATIVE_INFINITY'
  } if (isNaN(n) === true) {
    return 'Input number is Number.NaN'
  } if (n === 5e-324) {
    return 'Input number is Number.MIN_VALUE'
  } if (n === 1.7976931348623157e+308) {
    return 'Input number is Number.MAX_VALUE'
  } else {
    return `Input number is ${n}`
  }
}

console.log(whatNumberIsIt(1/0),"Input number is Number.POSITIVE_INFINITY");
console.log(whatNumberIsIt(100),"Input number is 100");
console.log(whatNumberIsIt(1.7976931348623157e+308),"Input number is Number.MAX_VALUE");
console.log(whatNumberIsIt(5e-324),"Input number is Number.MIN_VALUE");
console.log(whatNumberIsIt(-Number.MAX_VALUE*2),"Input number is Number.NEGATIVE_INFINITY");
console.log(whatNumberIsIt(NaN),"Input number is Number.NaN");
console.log(whatNumberIsIt(Infinity+1),"Input number is Number.POSITIVE_INFINITY");



    console.log('------pakeisti raides kitomis')
function replace(s){
ats = '';
for(let i =0;i<s.length;i++) {
  if (s[i] === 'a' )
    ats += '!' 
  else if (s[i] === 'e' )
    ats += '!'
  else if (s[i] === 'i')
    ats += '!'
  else if (s[i] === 'o') 
    ats += '!'
  else if (s[i] === 'u') 
    ats += '!'
  else if (s[i] === 'A') 
    ats += '!'
  else if (s[i] === 'E') 
    ats += '!'
  else if (s[i] === 'I' ) 
    ats += '!'
  else if (s[i] === 'O' ) 
    ats += '!'
  else if (s[i] === 'U') 
    ats += '!'
  else 
  ats += s[i]
  }
  return ats 
}


/*
function replace(s){
   return s.replace(/[aeiouAEIOU]/g,'!');
}

*/
console.log(replace("Hi!") , "H!!")
console.log(replace("!Hi! Hi!") , "!H!! H!!")
console.log(replace("aeiou") , "!!!!!")
console.log(replace("ABCDE") , "!BCD!")
console.log(replace("WrmARZ") , "W!!ARZ")



// https://www.codewars.com/kata/55d24f55d7dd296eb9000030/train/javascript
function summation (num) {
  let sum = 0;
  for (let i = 0; i<=num; i++) {
    sum += 1 * (i); 
  }
  return sum 
}

console.log(summation(1),  1);
console.log(summation(2),  3);
console.log(summation(8), 36);

// https://www.codewars.com/kata/5865918c6b569962950002a1/train/javascript

function strCount (str, letter){  
  let sum = 0;
  for (let i = 0; i<str.length; i++) {
    if (str[i] === letter) 
     sum += 1;
  } return sum
}

    console.log(strCount('Hello', 'o'), 1);
    console.log(strCount('Hello', 'l'), 2);
    console.log(strCount('',      'z'), 0);

    
 // https://www.codewars.com/kata/57280481e8118511f7000ffa/train/javascript

 function splitAndMerge(string, separator) {
  toString(string);
    return  string.split('').join(separator).replaceAll('. .', ' ').replaceAll(', ,', ' ').replaceAll('- -', ' ').replaceAll('   ', ' ');
  };
  
  

console.log(splitAndMerge("My name is John"," ") , "M y n a m e i s J o h n");
console.log(splitAndMerge("My name is John","-") , "M-y n-a-m-e i-s J-o-h-n");
console.log(splitAndMerge("Hello World!",".") , "H.e.l.l.o W.o.r.l.d.!");
console.log(splitAndMerge("Hello World!",",") , "H,e,l,l,o W,o,r,l,d,!");