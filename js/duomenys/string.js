/* 
String- tekstas, tekstiniu simboliu grandinele

iniciavimas: ' vienguba, " (dviguba)

*/

const name = 'Jonas';
console.log(name);

const name2 = "Maryte";
console.log(name2);

const sakinys = "Labas rytas, Giedre";
console.log(sakinys);

// Vienguba (') kabute.
const kabutes1 = "Vienguba (') kabute.";
console.log(kabutes1);

// Dvyguba (") kabute.
const kabutes2 = 'Vienguba (") kabute.';
console.log(kabutes2);

const personName = 'Chuck';
const personSurname = 'Noris';
const fullname = personName + ' ' +personSurname
console.log(fullname);

// Vienguba (')  ir dvyguba (") kabutes.
// Vienguba (') 
//               ir dvyguba (") kabutes.
const kabutes12 = kabutes1 + ' ' + kabutes2;
console.log(kabutes12)

const kabutes12_1 = 'Vienguba (\')  ir dvyguba (") kabutes.';
const kabutes12_2 = "Vienguba (')  ir dvyguba (\") kabutes."
const kabutes12_3 = 'Vienguba (\')  ir dvyguba (\") kabutes.';
const kabutes12_4 = "Vienguba (\')  ir dvyguba (\") kabutes."


console.log(kabutes12_1);
console.log(kabutes12_2);
console.log(kabutes12_3);
console.log(kabutes12_4);

console.clear()


// Pinigines turinys: 0
// Pinigine papildyta: 10
// Pinigines turinys: 10
// Pinigine papildyta: 90
// Pinigines turinys: 100

const a = 'Pinigines turinys:';
const b = 'Pinigine papildyta:';
const c = 'Pinigines turinys:';
const d = 'Pinigine papildyta:';
const e = 'Pinigines turinys:';

let z = 0;

console.log(a+z);
console.log(b+z+10);
console.log(c+z);
console.log(d+z+90);
console.log(e+z);
