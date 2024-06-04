// https://www.codewars.com/kata/50654ddff44f800200000007/train/javascript
function solution(a, b){
  if (a.length > b.length) {
    return b + a + b;
  } else { return a + b + a;
  }
}
console.log(solution('45', '1'), '1451');
console.log(solution('13', '200'), '1320013');
console.log(solution('Soon', 'Me'), 'MeSoonMe');
console.log(solution('U', 'False'), 'UFalseU');


//https://www.codewars.com/kata/53dc23c68a0c93699800041d/train/javascript


function smash (...words) {
  return words.join(' ').replaceAll(',',' ');
  }

console.log(smash(["hello", "world"]), "hello world");
console.log(smash(["hello", "amazing", "world"]), "hello amazing world");
console.log(smash(["this", "is", "a", "really", "long", "sentence"]), "this is a really long sentence");


// https://www.codewars.com/kata/55c933c115a8c426ac000082/train/javascript

function evalObject(value){
  let result = 0;
  switch(value.operation){
    case'+': result = value.a + value.b;
      break;
    case'-': result = value.a - value.b;
      break;
    case'/': result = value.a / value.b;
      break;
    case'*': result = value.a * value.b;
      break;
    case'%': result = value.a % value.b;
      break;
    case'^': result = Math.pow(value.a, value.b);
  }
  return result;
}

console.log({a:1})
console.log({b:1})


console.log(evalObject({a:1,b:1,operation:'+'}), 2, 'Return the evaluated string as a number!');
console.log(evalObject({a:1,b:1,operation:'-'}), 0, 'Return the evaluated string as a number!');
console.log(evalObject({a:1,b:1,operation:'/'}), 1, 'Return the evaluated string as a number!');
console.log(evalObject({a:1,b:1,operation:'*'}), 1, 'Return the evaluated string as a number!');
console.log(evalObject({a:1,b:1,operation:'%'}), 0, 'Return the evaluated string as a number!');
console.log(evalObject({a:1,b:1,operation:'^'}), 1, 'Return the evaluated string as a number!');

//https://www.codewars.com/kata/56c24c58e0c0f741d4001aef/train/javascript

const isReallyNaN = (val) => Number.isNaN(val);

console.log(isReallyNaN(37));
console.log(isReallyNaN('37'));
console.log(isReallyNaN(NaN));
console.log(isReallyNaN(undefined));
console.log(isReallyNaN(Infinity));
console.log(isReallyNaN(true));


// https://www.codewars.com/kata/57f222ce69e09c3630000212/train/javascript

function well(x){
  let sum = 0;
  for (let i =  0; i < x.length ; i++) {
   if (x[i] === 'good') { 
      sum ++; 
    }
    }
    if (sum > 0 && sum < 3) {
      return 'Publish!';
    } else if (sum >= 3) {
      return  'I smell a series!';
    } else {
      return 'Fail!';
    }
  }


console.log(well(['bad', 'bad', 'bad']), 'Fail!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
console.log(well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');


// https://www.codewars.com/kata/5899dc03bc95b1bf1b0000ad/train/javascript

function invert(array) {
  let sum = [];
  for (let i =0; i<array.length; i++) {
    sum.push(-(array[i]));
  }

  return sum
}
console.log(invert([1,2,3,4,5]), [-1,-2,-3,-4,-5]);
console.log(invert([1,-2,3,-4,5]), [-1,2,-3,4,-5]);
console.log(invert([]), []);
console.log(invert([0]), [0]);


// https://www.codewars.com/kata/5721a78c283129e416000999/train/javascript

function pickIt(arr){
  let odd=[];
  let even=[];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) { odd.push(arr[i])}
      else if (arr[i] % 2 === 0)
      { even.push(arr[i])}
    } 
    return [odd,even];
  }
  


console.log(pickIt([1,2]),[[1],[2]]);
console.log(pickIt([1,2,3]),[[1,3],[2]]);
console.log(pickIt([3,2,1]),[[3,1],[2]]);
console.log(pickIt([10,20,30]),[[],[10,20,30]]);
console.log(pickIt([11,21,31]),[[11,21,31],[]]);
console.log(pickIt([8,1,5,4,6,1,1]),[[1,5,1,1],[8,4,6]]);


// https://www.codewars.com/kata/57a2013acf1fa5bfc4000921/train/javascript

function findAverage(array) {
  if (array.length === 0) {
    return 0}
  
  let sum = 0;
  let count = 0;
  for (let i = 0; i<array.length; i++)
  if(array.length>0) {
    sum += array[i];
    count++;
    }
    return sum / count
  }

console.log(findAverage([1,1,1]), 1);
console.log(findAverage([1,2,3]), 2);
console.log(findAverage([1,2,3,4]), 2.5);
console.log(findAverage([]), 0);

// https://www.codewars.com/kata/515e188a311df01cba000003/train/javascript

function getPlanetName(id){
  let name;
  switch(id){
    case 1:
      name = 'Mercury'
       break;
    case 2:
      name = 'Venus'
       break;
    case 3:
      name = 'Earth'
       break;
    case 4:
      name = 'Mars'
       break;
    case 5:
      name = 'Jupiter'
       break;
    case 6:
      name = 'Saturn'
       break;
    case 7:
      name = 'Uranus'
       break;
    case 8:
      name = 'Neptune'
       break;
  }
  
  return name;
}

console.log(getPlanetName(2), 'Venus');
console.log(getPlanetName(5), 'Jupiter');
console.log(getPlanetName(3), 'Earth');

// https://www.codewars.com/kata/56ff6a70e1a63ccdfa0001b1/train/javascript

function arrayMadness(a, b) {
 let sumA =0;
 let sumB =0;
 
 for (let i = 0; i < a.length; i++) {
  sumA = sumA + (a[i] ** 2)};
 for (let y = 0; y < b.length; y++) { 
  sumB = sumB + (b[y] ** 3)};
if ( sumA > sumB) {
 return true}
 else {
  return false
 }
}

    console.log(arrayMadness([4,5,6],[1,2,3]), 'true');
    console.log(arrayMadness([5,6,7],[4,5,6]), 'false');
    console.log(arrayMadness([4,5,6],[3,4,5]), 'false');
    console.log(arrayMadness([3,4,5],[2,3,4]), 'false');
    console.log(arrayMadness([2,3,4],[1,2,3]), 'false');
    console.log(arrayMadness([1,2,3],[0,1,2]), 'true');
    console.log(arrayMadness([5,3,2,4,1],[15]), 'false');
    console.log(arrayMadness([2,5,3,4,1],[3,3,3,3,3]), 'false');
    console.log(arrayMadness([1,3,5,2,4],[2,2,2,2,2,2,2,1]), 'false');
    console.log(arrayMadness([1,2,3,4,5],[2,2,2,2,2,2,1,1,1]), 'true');
    console.log(arrayMadness([2,4,6,8,10,12,14],[1,3,5,7,9,11,13]), 'false');


    // https://www.codewars.com/kata/568dcc3c7f12767a62000038/train/javascript
function setAlarm(employed, vacation){
  if (employed === true && vacation === true) {
    return false
  } else if (employed === true && vacation === false) {
    return true
  } else if (employed === false && vacation === true) {
    return false
  } else if (employed === false && vacation === false) {
    return false
  }
}

console.log(setAlarm(true, true),  false,"Should be false.");
console.log(setAlarm(false,true),  false, "Should be false.");
console.log(setAlarm(true, false), true,"Should be true.");


//https://www.codewars.com/kata/57a429e253ba3381850000fb/train/javascript
function bmi(weight, height) {
  const heigt2 = height ** 2
  const KMI = weight /  heigt2
  if (KMI <= 18.5) {
    return "Underweight";
  } else if (KMI<= 25.0 && KMI>18.5){
    return "Normal";
  } else if (KMI<= 30.0 && KMI>25){
    return "Overweight";
  } else if (KMI > 30)
    return "Obese";
 }

console.log(bmi(80, 1.80), "Normal");

// https://www.codewars.com/kata/572059afc2f4612825000d8a/train/javascript

function howManydays(month){
  let days = 0;
  switch (month){
      case 1:
      days = 31;
      break;
      case 3:
      days = 31;
      break;
      case 5:
      days = 31;
      break;
      case 7:
      days = 31;
      break;
      case 8:
      days = 31;
      break;            
      case 10:
      days = 31;
      break;
      case 12:
      days = 31;
      break;
      case 4:
      days = 30;
      break;    
      case 6:
      days = 30;
      break;
      case 9:
      days = 30;
      break;
      case 11:
      days = 30;
      break;
      case 2:
      days = 28;
      break;
  }
  return days;
}
console.log(howManydays(1),31);
console.log(howManydays(2),28);
console.log(howManydays(3),31);
console.log(howManydays(4),30);
console.log(howManydays(12),31);




//https://www.codewars.com/kata/52a47dd7e950edabfa000391/train/javascript

function getMax1()
{
  const max = 
  {
   name: 'Max Headroom'
  }
  return max;
}

function getMax2()
{ const max2 = 
  {
    name: 'Max Headroom'
  }
   return max2
}



console.log(getMax1());
console.log(getMax2());




// https://www.codewars.com/kata/57f780909f7e8e3183000078/train/javascript

function grow(x){
 let skaiciai = [...x] 
 skaiciai.reduce((total, item) => total * item)
 return skaiciai.reduce((total, item) => total * item, 1)
}

console.log(grow([1, 2, 3]), 6);
console.log(grow([4, 1, 1, 1, 4]), 16); 
console.log(grow([2, 2, 2, 2, 2, 2]), 64); 