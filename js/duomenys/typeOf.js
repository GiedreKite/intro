/*
Duomens tipo nustatymas

TYPROF (duomens tipo nustatymo operatosius)
*/

function empty() {

}

console.log(typeof 5);
console.log(typeof 3.14);
console.log(typeof Infinity);
console.log(typeof NaN);
console.log(typeof '');
console.log(typeof 'Labas');
console.log(typeof ' ');
console.log(typeof true);
console.log(typeof false);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof []);
console.log(typeof [1,2,3]);
console.log(typeof ['a', 'b', 'c']);
console.log(typeof {});
console.log(typeof empty);


// Kai norime patikrinti ar tai yra masyvas
console.log(Array.isArray([]));
console.log(Array.isArray([1, 2, 3]));
console.log(Array.isArray(['labas']));
console.log(Array.isArray([true]));
console.log(Array.isArray([empty]));

console.log('-----------');

const tikrinamasNulis = null;
if(tikrinamasNulis === null) {
    console.log('taip');
} else {
    console.log('ne')
    }


const a = 254;
console.log(a);

if(typeof a === 'string') {
    console.log('dirbu su stringu');
} else {
    console.log('as dirbu su kita reiksme')
}


console.log('------------------');


const x = '';
const y = 7


console.log(typeof (x && y));
console.log(typeof ('' && y));
console.log(typeof ('' && 7));
console.log(typeof (false && 7));
console.log(typeof (false && true));
console.log(typeof (false && false));
console.log(typeof (true && true));


console.log('------------------');


if (typeof (x && y) !== 'number') {
    console.log('error');
} else {
    console.log('ok');
}

if (typeof x !== 'number') {
    console.log('Error: x');
} else if (typeof y !== 'number') {
    console.log('Error: y');
} else {
    console.log('puiku');
}