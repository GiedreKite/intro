//https://www.codewars.com/kata/57ab2d6072292dbf7c000039


/*
ą -> a,
ć -> c,
ę -> e,
ł -> l,
ń -> n,
ó -> o,
ś -> s,
ź -> z,
ż -> z
*/
// 733
/*
function correctPolishLetters (string) {
let rezult = '';

  for (let i = 0; i < string.length; i++) {
    const letter = string[i];

    if (letter === 'ą') {
        rezult += 'a';
    } else if (letter === 'ć') {
        rezult += 'c';
    } else if (letter === 'ę') {
        rezult += 'e';
    } else if (letter === 'ł') {
        rezult += 'l';
    }  else if (letter === 'ń') {
        rezult += 'n';
    }  else if (letter === 'ó') {
        rezult += 'o';
    }  else if (letter === 'ś') {
        rezult += 's';
    }  else if (letter === 'ź') {
        rezult += 'z';
    }  else if (letter === 'ż') {
        rezult += 'z';
    } else { 
        rezult += letter;
    }
  }
  return rezult;
}
*/

/*
// 513
function correctPolishLetters (string) {
const polishAbc = 'ąćęłńóśźż';
const englishAbc = 'acelnoszz';
let rezult = '';

for (let i =0; i< string.length; i++) {
    const letter = string[i];
    let index = -1
    for(let j =0; j< polishAbc.length; j++) {
        const polishletter = polishAbc[j];
        if (polishletter === letter) {
            rezult += englishAbc[j];
            index = j;
        }
    }
    if (index === -1) {
        rezult += letter;
    }
    }
return rezult;
}





console.log(correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski");
console.log(correctPolishLetters("Lech Wałęsa"),"Lech Walesa");
console.log(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie");

console.assert(correctPolishLetters("Jędrzej Błądziński"),"Jedrzej Bladzinski");
console.assert(correctPolishLetters("Lech Wałęsa"),"Lech Walesa");
console.assert(correctPolishLetters("Maria Skłodowska-Curie"),"Maria Sklodowska-Curie");
*/
console.log('-------------');
/*
function peopleWithAgeDrink(old) {
  if (old < 14) {
    old = 'drink toddy';
  } else if (old <= 17) {
    old =  'drink coke';
  } else if (old <= 20) {
    old = 'drink beer';
  }  else if (old >= 21) {
    old = 'drink whisky';
  }
  return old
};

console.log(peopleWithAgeDrink(21));
*/
console.log('-------------');
/*
const areaOrPerimeter = function(l,w) {
  
    if (l === w) {
        const square = l * l;
        return square;
    }
    if (l !== w) {
        const rectangle = l + l + w + w;
        return rectangle;
     }
}
console.log(areaOrPerimeter(3,3));
console.log(areaOrPerimeter(6,10));
console.log(areaOrPerimeter(10,9));
*/
console.log('-------------');
//https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript 

console.clear()

function addLength(str) {
    let sakinys = [];
    const zodis = str.split(' ');
    for (let i = 0; i < zodis.length; i++) {
  sakinys[i]= zodis[i] + ' '+ zodis[i].length;
  // sakinys.push(zodis[i] + ' '+ zodis[i].length);
    }
    return sakinys;
}

console.log(addLength('apple ban'));
console.log(addLength('you will win'));




console.log('-------------');
//https://www.codewars.com/kata/5a023c426975981341000014/train/javascript

/*function otherAngle(a, b) {
    if (a>0 && a<180 && b>0 && b<180 && a+b <=180) {
        return 180-a-b;
    }
}

console.log(otherAngle(90, 60));
console.log(otherAngle(120, 60));
console.log(otherAngle(110, 60));
console.log(otherAngle(30, 60));
console.log(otherAngle(3, 60));

console.log('-------------');
*/
/*
https://www.codewars.com/kata/5715eaedb436cf5606000381/solutions/javascript
function positiveSum(arr) {
    let plus = 0;
    for (let i= 0; i<= arr.length; i++) {
        const numberis = arr[i];
        if (numberis > 0) {
           plus = arr[i] + plus;
        }
    }
    return plus;
}

console.log(positiveSum([1,2,3,4,5]));
console.log(positiveSum([1,2,3,4,-5]));
console.log(positiveSum([1,2,-3,4,5,-15]));
console.log(positiveSum([1,-2,3,4,513]));
console.log(positiveSum([[],0]));
console.log(positiveSum([-1,-2,-3,-4,-5,0]));
console.log(positiveSum([-1,2,3,4,-5,9]));
*/
console.log('-------------');
// https://www.codewars.com/kata/5a3fe3dde1ce0e8ed6000097/train/javascript
/*
function century(year) {
  if(year !== 'number'){
    'folse'
  };
  if (year % 100 === 0) {
    return parseInt(year/100);
} else if (year % 100 !== 0) {
    return parseInt(year/100)+1;
}

if (year < 100) {
    return 1;
}
}

console.log(century(1705));
console.log(century(1900));
console.log(century(1601));
console.log(century(2000));
console.log(century(89));
console.log(century(2784));
*/
console.log('-------------');
// https://www.codewars.com/kata/57cc975ed542d3148f00015b/train/javascript

/*
function check(a, b) {
    for (let i = 0; i<a.length; i++) {
        if (a[i] === b ) {
            return true;
        } 
    }
return false;
}
*/

/*function check(a, b) {
    let atsakymas = true;
    const ilgis = a.lenght;
    const sekantisIlgis = b.lenght;
  if (ilgis < 0 && sekantisIlgis < 0) {
    return false;
  }
  return atsakymas
}
*/
/*
    console.log(check([66, 101], 66), true);
    console.log(check([101, 45, 75, 105, 99, 107], 107), true);
    console.log (check(['t', 'e', 'e','s', 't'], 'e'), true);
    console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);
 console.log ('--------');
 */

//https://www.codewars.com/kata/55f9bca8ecaa9eac7100004a/train/javascript

//Clock shows h hours, m minutes and s seconds after midnight.

//Your task is to write a function which returns the time since midnight in milliseconds.

//24 h / 60 min / 60 sek/ 1000 milisek
/*
function past(h, m, s){
 
    let val = h * 60 * 60* 1000;
    let min = m * 60 * 1000;
    let sek = s * 1000;

    return val + min + sek;
}
   /*
    for (let i = 0; i <= 23; i++){
       for (let j = 0; j <= 59; j++) {
        for (let y = 0; y <= 59; y++) {
            return val[i] + min[j] + sek[y];

*/
/*
    console.log(past(0,1,1),61000)
    console.log(past(1,1,1),3661000)
    console.log(past(0,0,0),0)
    console.log(past(1,0,1),3601000)
    console.log(past(1,0,0),3600000)

    console.log ('--------');
*/
/*
    At the annual family gathering, the family likes to find the oldest living family member’s age and the youngest family member’s age and calculate the difference between them.

You will be given an array of all the family members' ages, in any order. The ages will be given in whole numbers, so a baby of 5 months, will have an ascribed ‘age’ of 0. Return a new array (a tuple in Python) with [youngest age, oldest age, difference between the youngest and oldest age].
  */  
function differenceInAges(ages){
  let max = 0

  for (let i = 0; i >= 200 ; i++) {
    Math.max(ages[i]);
    }

  return
}

console.log(differenceInAges(10, 25, 36, 85, 90));

    console.log ('--------');

/*function getDrinkByProfession(param){
const map = array.map('Jabroni' => 'Patron Tequila');
}*/
 
/*
console.log(getDrinkByProfession("jabrOni"), "Patron Tequila", "'Jabroni' should map to 'Patron Tequila'");
console.log(getDrinkByProfession("scHOOl counselor"), "Anything with Alcohol", "'School Counselor' should map to 'Anything with alcohol'");
console.log(getDrinkByProfession("prOgramMer"), "Hipster Craft Beer", "'Programmer' should map to 'Hipster Craft Beer'");
console.log(getDrinkByProfession("bike ganG member"), "Moonshine", "'Bike Gang Member' should map to 'Moonshine'");
console.log(getDrinkByProfession("poLiTiCian"), "Your tax dollars", "'Politician' should map to 'Your tax dollars'");
console.log(getDrinkByProfession("r.apper"), "Cristal", "'Rapper' should map to 'Cristal'");
console.log(getDrinkByProfession("pundit"), "Beer", "'Pundit' should map to 'Beer'");
console.log(getDrinkByProfession("Pug"), "Beer", "'Pug' should map to 'Beer'");
*/
//console.log(getDrinkByProfession('Jabroni'));
/*
"Jabroni"	"Patron Tequila"
"School Counselor"	"Anything with Alcohol"
"Programmer"	"Hipster Craft Beer"
"Bike Gang Member"	"Moonshine"
"Politician"	"Your tax dollars"
"Rapper"	"Cristal"
anything else	"Beer"
*/
