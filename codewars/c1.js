

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









// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript
/*
String.prototype.isUpperCase = function isUpperCase (string) {
  if (string === string.toUpperCase()) {
    return true && `${string} is upper case`;
  } else { return `false ${string} is not upper case`;
}
}
*/

function isUpperCase (string) {
  if (string === string.toUpperCase()) {
    return true && `${string} is upper case`;
  } else { return `false ${string} is not upper case`;
}
}

 console.log(isUpperCase('Hello World', false, 'Hello World is not upper case'));
 console.log(isUpperCase('hello world', false, 'hello world is not upper case'));
 console.log(isUpperCase('Hello world', false, 'Hello world is not upper case'));
 console.log(isUpperCase('hello World', false, 'hello World is not upper case'));
 console.log(isUpperCase('HELLO WORLD', true, 'HELLO WORLD is upper case'));
 console.log(isUpperCase('Bob walks his dog every day.', false, 'Bob walks his dog every day. is not upper case'));
 console.log(isUpperCase('BOB walks his dog every day.', false, 'BOB walks his dog every day. is not upper case'));
 console.log(isUpperCase('BOB WALKS HIS DOG EVERY DAY.', true, 'BOB WALKS HIS DOG EVERY DAY. is upper case'));
 console.log(isUpperCase('BOB WALKs HIS DOG EVERY DAY.', false, 'BOB WALKs HIS DOG EVERY DAY. is not upper case'));
 console.log(isUpperCase('#lovewins', false, '#lovewins is not upper case'));
 console.log(isUpperCase('#Lovewins', false, '#Lovewins is not upper case'));
 console.log(isUpperCase('#loveWins', false, '#loveWins is not upper case'));
 console.log(isUpperCase('#LoveWins', false, '#LoveWins is not upper case'));
 console.log(isUpperCase('#LOVEWins', false, '#LOVEWins is not upper case'));
 console.log(isUpperCase('#LoveWINS', false, '#LoveWINS is not upper case'));
 console.log(isUpperCase('#LOVEWINs', false, '#LOVEWINs is not upper case'));
 console.log(isUpperCase('#lOVEWINS', false, '#lOVEWINS is not upper case'));
 console.log(isUpperCase('#LOVEWINS', true, '#LOVEWINS is upper case'));
/*


    
    assert.strictEqual('c'.isUpperCase(), false, 'c is not upper case');
    assert.strictEqual('C'.isUpperCase(), true, 'C is upper case');
    assert.strictEqual('hello I AM DONALD'.isUpperCase(), false, 'hello I AM DONALD not is upper case');
    assert.strictEqual('HELLO I AM DONALD'.isUpperCase(), true, 'HELLO I AM DONALD is upper case');
    assert.strictEqual('ACSKLDFJSgSKLDFJSKLDFJ'.isUpperCase(), false, 'ACSKLDFJSgSKLDFJSKLDFJ not is upper case');
    assert.strictEqual('ACSKLDFJSGSKLDFJSKLDFJ'.isUpperCase(), true, 'ACSKLDFJSGSKLDFJSKLDFJ is upper case');
    assert.strictEqual('Hello World'.isUpperCase(), false, 'Hello World is not upper case');
    assert.strictEqual('hello world'.isUpperCase(), false, 'hello world is not upper case');
    assert.strictEqual('Hello world'.isUpperCase(), false, 'Hello world is not upper case');
    assert.strictEqual('hello World'.isUpperCase(), false, 'hello World is not upper case');
    assert.strictEqual('HELLO WORLD'.isUpperCase(), true, 'HELLO WORLD is upper case');
    assert.strictEqual('Bob walks his dog every day.'.isUpperCase(), false, 'Bob walks his dog every day. is not upper case');
    assert.strictEqual('BOB walks his dog every day.'.isUpperCase(), false, 'BOB walks his dog every day. is not upper case');
    assert.strictEqual('BOB WALKS HIS DOG EVERY DAY.'.isUpperCase(), true, 'BOB WALKS HIS DOG EVERY DAY. is upper case');
    assert.strictEqual('BOB WALKs HIS DOG EVERY DAY.'.isUpperCase(), false, 'BOB WALKs HIS DOG EVERY DAY. is not upper case');
    assert.strictEqual('#lovewins'.isUpperCase(), false, '#lovewins is not upper case');
    assert.strictEqual('#Lovewins'.isUpperCase(), false, '#Lovewins is not upper case');
    assert.strictEqual('#loveWins'.isUpperCase(), false, '#loveWins is not upper case');
    assert.strictEqual('#LoveWins'.isUpperCase(), false, '#LoveWins is not upper case');
    assert.strictEqual('#LOVEWins'.isUpperCase(), false, '#LOVEWins is not upper case');
    assert.strictEqual('#LoveWINS'.isUpperCase(), false, '#LoveWINS is not upper case');
    assert.strictEqual('#LOVEWINs'.isUpperCase(), false, '#LOVEWINs is not upper case');
    assert.strictEqual('#lOVEWINS'.isUpperCase(), false, '#lOVEWINS is not upper case');
    assert.strictEqual('#LOVEWINS'.isUpperCase(), true, '#LOVEWINS is upper case');
    */