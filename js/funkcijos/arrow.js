/*
Arrow function - rodykline funkcija

*/

const n1 = 4;
const n2 = 4;

//function declaracion
function sum(a, b) {
    return a + b;
}

console.log( `${n1} + ${n2} = ${sum(n1,n2)}`);

// kintamajam prisskiriamaanonimine funkcija

const diff = function (a, b) {
    return a - b;
}

console.log(`${n1} - ${n2} = ${diff(n1, n2)}`);


// arrow funcion
const multi = (a,b) => {
    return a * b;
}

console.log(`${n1} * ${n2} = ${multi(n1, n2)}`);

// arrow funcion
// jei logikos bloke tik viena procedura, galima nerasyti {return}
const div = (a,b) => a / b;


console.log(`${n1} / ${n2} = ${div(n1, n2)}`);

const divirsum = (a,b,c,d) => a / b + (c * d);

console.log(`${n1} / ${n2} + (${n1} * ${n2}) = ${divirsum(n1, n2, n1, n2)}`);


//arrow funcion
// jeigu parametru bloke yra tik 1 parametras, galima nerasyti ()
const square = n => n * n;
console.log(`${n1} * ${n2} = ${square(n1, n2)}`);


function hi1 (name1) {
    return 'Hi, my name is ' + name1 + '!';
}

console.log(hi1('Jonas'));

function hi2 (name1) {
    return `Hi, my name is ${name1}!`;
}

console.log(hi2('Jonas'));

const hi3 = name1 => `Hi, my name is ${name1}!`;

console.log(hi3('Jonas'));

const abbr = (a, b) => `My name is ${a} and second name is ${b}`;
const abbr2 = (a, b) => `My name is ${a[0]} and second name is ${b[0]}`;

console.log(abbr('Giedre', 'Narvilaite'));
console.log(abbr2('Giedre', 'Narvilaite'));

console.log(vienas());

function vienas() {
    return 'Vienas';
}

console.log(vienas());

// negalima consoles rasyti anksciau jei trumpiname funkcijas 
const antras = () =>'antras';

console.log(antras());

//const sum = (_,__)=>_+__;
