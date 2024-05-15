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

console.log('-------------');

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

console.log('-------------');

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

console.log('-------------');
//https://www.codewars.com/kata/559d2284b5bb6799e9000047/train/javascript 

function addLength(str) {
    let stringas= str
    str.replaceAll(' ',str.lenght);    
    }

console.log('apple ban');
//console.log(addLength('apple ban'));
console.log('you will win');
//console.log(addLength('you will win'));

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

function check(a, b) {
    //test


}
    console.log(check([66, 101], 66), true);
    console.log(check([101, 45, 75, 105, 99, 107], 107), true);
    console.log (check(['t', 'e', 's', 't'], 'e'), true);
    console.log(check(['what', 'a', 'great', 'kata'], 'kat'), false);



