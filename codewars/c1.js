

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

switch (day) {
    case 1:
        console.log('Pirm');
        break;

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

    console.log(strCount('Hello', 'o'), 1);
    console.log(strCount('Hello', 'l'), 2);
    console.log(strCount('',      'z'), 0);

   // https://www.codewars.com/kata/555a67db74814aa4ee0001b5/train/javascript

/*
function testEven(n) {

  }


   assert.strictEqual(testEven(0), true, "testEven for 0");
    assert.strictEqual(testEven(0.5), false, "testEven for 0.5");
    assert.strictEqual(testEven(1), false, "testEven for 1");
    assert.strictEqual(testEven(2), true, "testEven for 2");
    assert.strictEqual(testEven(-4), true, "testEven for 2");
*/

    // https://www.codewars.com/kata/568dc014440f03b13900001d/train/javascript

    function getDrinkByProfession(param){
  if (param = 'Jabroni' ){
    return "Patron Tequila"
  } else if (param = "School Counselor") {
    return "Anything with Alcohol"
  } else if (param = "Programmer") {
    return "Hipster Craft Beer"
  } else if (param = "Bike Gang Member") {
    return 	"Moonshine"
  } else if (param = "Politician") {
    return 	"Your tax dollars"
  } else if (param = "Rapper") {
    return 	"Cristal"
  } else { return  "Beer"}
}


console.log(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
console.log(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
console.log(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
console.log(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
console.log(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
console.log(getDrinkByProfession("rapper"), "Cristal", "'Rapper' should map to 'Cristal'");
console.log(getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
console.log(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");



// https://www.codewars.com/kata/5b077ebdaf15be5c7f000077/train/javascript

function countSheep (num){
  if (num = 0) {
    return ''
  }

  let count = '';
  for (let i = 1; i<=num; i++) {
   count += count[1] + ' sheep...'
 }
  return count
}

console.log(countSheep(0), "");
console.log(countSheep(1), "1 sheep...");
console.log(countSheep(2), "1 sheep...2 sheep...");
console.log(countSheep(3), "1 sheep...2 sheep...3 sheep...")





