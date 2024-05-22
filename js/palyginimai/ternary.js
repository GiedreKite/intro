/*
UNARY - vienybe (a++,a--)
BINARY - dvejybe (a+b)
TERNARY - trejybe (a?b:c)
*/

let x = 10;

if (4>2){
    x +=10;
} else {
    x -= 5;
}

console.log(x);

const b = 4 > 2 ? 888 : 666;
console.log(b);

const c = 4 < 2 ? 123 : 456;
console.log(c);

const d = 4 < 2 ? 2*4 : 3-1;
console.log(d);

const e = 1 + 2 > 3 ? 4 : 5;
console.log(e);
// const e = 1 + 2 > 3 ? 4 : 5;
// const e = 3 > 3 ? 4 : 5;
// const e = False ? 4 : 5;
// const e = 5;

const f = 'labas'.length > 0? 'ilgas' : 'tuscias';
console.log(f);

const g = 'pomidoras'[1 > 0? 0 : 5];
console.log(g);

// jei skaicius teigiamas, sumuojame su paciu savimi
// jei neigiamas, atimame isjo 10


const sum = (a,b) => a + b;
const diff = (a,b) => a - b;
const n = 7;
let ats = null;

const ats2 = n>0 ? sum(n,n) : diff(n, 10);

if (n > 0) {
    const ats =sum(n,n);
    } else {
        ats = diff(n,10);
    };

console.log(ats);
console.log(ats2);

/* jei tekstas trumpas, (iki 5 simboliu), grazink pirma simboli, priesingu atveju paskutini
*/


const first = s => s[0];
const last = s => s.at(-1);
//const last = s => s[s.length - 1];

const text1 = 'Labas';
const  strAts = text1.length < 5 ? first(text1) : last(text1);

console.log(strAts);

const FuncToCall = text1.length < 5 ? first : last;
const strAts2 = FuncToCall(text1);
console.log(FuncToCall);
console.log(strAts2);

const jonasMarks = [];
const onaMarks = [10, 2, 8, 4, 6, 9];

function emptyMarksArray() {
    return 'studentas neturi pazymiu';
}
console.log('---------------');
function marksAverage (marks) {
    let sum = 0;
    for (let i =0; i< marks.length; i++) {
        sum++;
    }
    const avarage = sum / marks.length;
    return avarage
}


const jonasFunc = jonasMarks.length === 0
? emptyMarksArray
:  marksAverage;
const jonasAverage = jonasFunc(jonasMarks);
console.log(jonasAverage);
console.log('---------------');

const onaFunc = onaMarks.length === 0
? emptyMarksArray
:  marksAverage;
const onaAverage = onaFunc(onaMarks);
console.log(onaAverage);