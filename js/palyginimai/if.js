/*
IF - palyginimas

Palyginimo operatoriai :
VISI: >, <, <=, >=, ==, !=, ===, !==
Naudotini: >, <, <=, >=, ===, !==
Nenaudotini: ==, !=

Sablonai:
if () {}
if () {} else {}
if () {} else if () {}
if () {} else if () {} else {}
if () {} ... else if () {} ... else if () {}
if () {} ... else if () {} ... else {}

*/

//1
const age = 99;
const ageLimit = 18;


//2
if (age < ageLimit) {
console.log('Atsiprasome, esate per jaunas...');
} else {
    console.log('Prasome uzeiti.')
};


//3
const color = 'red';
let translation = '';
if (translation === 'red') {
    console.log ('Raudona');
} else if (translation === 'blue') {
    console.log ('Melyna');
} else if (translation === 'green') {
    console.log ('Zalia');
} else {
console.log('nezinau tokios spalvos');
}; 
console.log('>>>', translation);

//4

const color1 = 'red';
const color2 = 'grey';
const color3 = 'pink';
const color4 = 'blue';
const color5 = 'black';
const color6 = 'white';
const color7 = 'green';
const color8 = 'yellow';

function colorTranslation(color) {
    let translation = '';
    if (color === 'red') {
    translation = 'Raudona';
} else if ( color === 'grey') {
    translation = 'pilka';
} else if ( color === 'pink') {
    translation = 'ruzava';
} else if ( color === 'blue') {
    translation = 'melyna';
} else if ( color === 'black') {
    translation = 'juoda';
} else if ( color === 'white') {
    translation = 'balta';
} else if ( color === 'green') {
    translation = 'zalia';
} else if ( color === 'yellow') {
    translation = 'geltona';
}

return color + '->' + translation;
}
console.log(colorTranslation('red'));
console.log(colorTranslation('grey'));
console.log(colorTranslation('pink'));
console.log(colorTranslation('blue'));
console.log(colorTranslation('black'));
console.log(colorTranslation('white'));
console.log(colorTranslation('green'));
console.log(colorTranslation('yellow'));

// Color -> Spalva;

if(4 >= 2) {
    console.log('Taip, daugiau');
} else {
    console.log('Ne, maziau');
};

