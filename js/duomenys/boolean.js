/*
/BOOLEAN - logines reiksmes

- true
- false



Boolean logikos operatoriai:
- && (and)
- || (or)
- ! (not)

Kaip interpretuojami  kiti duomenu tipai ir ju reiksmes, jei jos yra naudojamos lyg boolean ' ais? 

String:
- jei tuscias - false
- jei ne tuscias - true

Number:
- jei NaN - false
- jei nulis - false
- jei ne nulis - true
- jei infinity - true
- jei -infinity - true

Array:
- jei tuscias - true
- jei ne tuscias - true

Object:
- jei tuscias - true
- jei ne tuscias - true

Undefind - false
null - false




Boolean logikos operatoriai;


*/

const username = 'Giedre';
const age = 35;
const hasCar = true;
const hasFuel = false;

console.log(hasCar);
console.log(hasFuel);

console.log('kaip nenaudoti:', true + true + true);
console.log('kaip nenaudoti:', true * false);

console.log('---------');
console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);


//Mergina
// Kada eisiu i pasimatyma
// - turi buti charizmatiskas
// - turi megti sporta
// - turi buti intelektualus

const fun = true;
const kiteborder = true;
const megamind = true;

const willGoTo = fun && kiteborder && megamind;
console.log('>>>',willGoTo);

//Vaikinas
// Kada eisiu i pasimatyma
// - turi buti charizmatiskas
// - turi megti sporta
// - turi buti intelektualus

const funy = true;
const kiteborders = true;
const megaminds = false;

const willGoTof = funy || kiteborders || megaminds;
console.log('>>>',willGoTof);

console.clear();

console.log(true && true);
console.log(true && false);
console.log(false && true);
console.log(false && false);

console.log('---------');

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

console.log('---------');

console.log(true && true || true);
console.log(true && true || false);

console.log(true && false || true);
console.log(true && false || false);

console.log(false && true || true);
console.log(false && false || false);

console.log(false && true || true);
console.log(false && false || false);

console.log(false && false || true);
console.log(false && false || false);

console.log('---------');

console.log('---------');

console.log(true || true && true);
console.log(true || true && false);

console.log(true || false && true);
console.log(true || false && false);

console.log(false || true && true);
console.log(false || true && false);

console.log(false || false && true);
console.log(false || false && false);

console.log('---------');

console.clear();


console.clear();

console.log(!true);
console.log(!false);
console.log(!!false);

// daugiau nei 2 !! nerasyti 

console.log(!!!false);
console.log(!!!!false);


// ND 128 kombinacijos

console.clear();
console.log('----1-----');

console.log(true && true && true && true);
console.log(false && true && true && true);
console.log(true && false && true && true);
console.log(true && true && false && true);
console.log(true && true && true && false);
console.log(false && false && true && true);
console.log(false && true && false && true);
console.log(false && true && true && false);
console.log(true && false && false && true);
console.log(true && true && false && false);
console.log(true && false && true && false);
console.log(false && false && false && true);
console.log(false && false && true && false);
console.log(false && true && false && false);
console.log(true && false && false && false);
console.log(false && false && false && false);

console.log('----2-----');

console.log(true && true && true || true);
console.log(false && true && true || true);
console.log(true && false && true || true);
console.log(true && true && false || true);
console.log(true && true && true || false);
console.log(false && false && true || true);
console.log(false && true && false || true);
console.log(false && true && true || false);
console.log(true && false && false || true);
console.log(true && true && false || false);
console.log(true && false && true || false);
console.log(false && false && false || true);
console.log(false && false && true || false);
console.log(false && true && false || false);
console.log(true && false && false || false);
console.log(false && false && false || false);

console.log('----3-----');

console.log(true && true || true && true);
console.log(false && true || true && true);
console.log(true && false || true && true);
console.log(true && true || false && true);
console.log(true && true || true && false);
console.log(false && false || true && true);
console.log(false && true || false && true);
console.log(false && true || true && false);
console.log(true && false || false && true);
console.log(true && true || false && false);
console.log(true && false || true && false);
console.log(false && false || false && true);
console.log(false && false || true && false);
console.log(false && true || false && false);
console.log(true && false || false && false);
console.log(false && false || false && false);

console.log('----4-----');

console.log(true || true && true && true);
console.log(false || true && true && true);
console.log(true || false && true && true);
console.log(true || true && false && true);
console.log(true || true && true && false);
console.log(false || false && true && true);
console.log(false || true && false && true);
console.log(false || true && true && false);
console.log(true || false && false && true);
console.log(true || true && false && false);
console.log(true || false && true && false);
console.log(false || false && false && true);
console.log(false || false && true && false);
console.log(false || true && false && false);
console.log(true || false && false && false);
console.log(false || false && false && false);

console.log('----5-----');

console.log(true && true || true || true);
console.log(false && true || true || true);
console.log(true && false || true || true);
console.log(true && true || false || true);
console.log(true && true || true || false);
console.log(false && false || true || true);
console.log(false && true || false || true);
console.log(false && true || true || false);
console.log(true && false || false || true);
console.log(true && true || false || false);
console.log(true && false || true || false);
console.log(false && false || false || true);
console.log(false && false || true || false);
console.log(false && true || false || false);
console.log(true && false || false || false);
console.log(false && false || false || false);

console.log('----6-----');

console.log(true || true && true || true);
console.log(false || true && true || true);
console.log(true || false && true || true);
console.log(true || true && false || true);
console.log(true || true && true || false);
console.log(false || false && true || true);
console.log(false || true && false || true);
console.log(false || true && true || false);
console.log(true || false && false || true);
console.log(true || true && false || false);
console.log(true || false && true || false);
console.log(false || false && false || true);
console.log(false || false && true || false);
console.log(false || true && false || false);
console.log(true || false && false || false);
console.log(false || false && false || false);

console.log('----7-----');

console.log(true || true || true && true);
console.log(false || true || true && true);
console.log(true || false || true && true);
console.log(true || true || false && true);
console.log(true || true || true && false);
console.log(false || false || true && true);
console.log(false || true || false && true);
console.log(false || true || true && false);
console.log(true || false || false && true);
console.log(true || true || false && false);
console.log(true || false || true && false);
console.log(false || false || false && true);
console.log(false || false || true && false);
console.log(false || true || false && false);
console.log(true || false || false && false);
console.log(false || false || false && false);

console.log('----8-----');

console.log(true || true || true || true);
console.log(false || true || true || true);
console.log(true || false || true || true);
console.log(true || true || false || true);
console.log(true || true || true || false);
console.log(false || false || true || true);
console.log(false || true || false || true);
console.log(false || true || true || false);
console.log(true || false || false || true);
console.log(true || true || false || false);
console.log(true || false || true || false);
console.log(false || false || false || true);
console.log(false || false || true || false);
console.log(false || true || false || false);
console.log(true || false || false || false);
console.log(false || false || false || false);

/*



*/

console.log('------------')

if(true) {
    console.log(true);
} else {
    console.log(false);
}
if(undefined) {
    console.log(true);
} else {
    console.log(false);
}

if(null) {
    console.log(true);
} else {
    console.log(false);
}

if(10) {
    console.log(true);
} else {
    console.log(false);
}

const bbb = 4 > 2;
const ccc = 4 < 2;

if(bbb) {
    console.log(true);
} else {
    console.log(false);
}

if(ccc) {
    console.log(true);
} else {
    console.log(false);
}
 console.clear();

if (4==4) {
    console.log('taip');
} else {
    console.log('Ne');
}

if (4===4) {
    console.log('taip');
} else {
    console.log('Ne');
}

if (4=='4') {
    console.log('taip');
} else {
    console.log('Ne');
}

if (1==true) {
    console.log('taip');
} else {
    console.log('Ne');
}
if (1===true) {
    console.log('taip');
} else {
    console.log('Ne');
}

const n1 = 4;
const n2 ='4';

if(n1==n2) {
    console.log('taip, ', n1 + n2);
} else {
    console.log('ne');
}
if(n1==n2) {
    console.log('taip, ', n1 - n2);
} else {
    console.log('ne');
}
if(n1==n2) {
    console.log('taip, ', n1 * n2);
} else {
    console.log('ne');
}
if(n1==n2) {
    console.log('taip, ', n1 / n2);
} else {
    console.log('ne');
}