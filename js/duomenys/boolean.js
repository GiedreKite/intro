/*
/BOOLEAN - logines reiksmes

- true
- false

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

// ND 138 kombinacijos

console.log(true && true && true && true);
console.log(true && true && true && false);
console.log(true && true && false && true);
console.log(true && true && false && false);
console.log(true && false && false && true);
console.log(true && false && false && false);
console.log(false && false && false && true);
console.log(false && false && false && false);


console.clear();

console.log(!true);
console.log(!false);
console.log(!!false);

// daugiau nei 2 !! nerasyti 

console.log(!!!false);
console.log(!!!!false);
