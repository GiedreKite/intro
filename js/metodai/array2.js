// [1,2,3] ->[2,4,6]

function double(list) {
    const result = [];

    for (const item of list) {
        result.push(list * 2)
    }
    return result
}
const a1 = [1,2,3];
const a2 = [10, 20, 30];
console.log(a1, double(a1))

function map (list, transformFunc) {
    const result = [];

    for (const item of list) {
        result.push(transformFunc(item));
    }
return result
}

console.log(map(a1, n=> n*2))
console.log(map(a2, n=> n*3))
console.log(map(a1, n=> 0))
console.log(map(a2, n=> n+1))
console.log(map(a2, n=> n-2))
console.log(map(a2, n=> (2*n+1) %10))

console.log('--map----------');
console.log(a1);
console.log(a1.map(n=> n*2));

console.log(a2);
console.log(a2.map(n=> n*3));

console.log(['Labas', 'rytas', 'Lietuva'].map(s => s.length));
console.log(['Labas', 'rytas', 'Lietuva'].map(s => s[0]));
console.log(['Labas', 'rytas', 'Lietuva'].map(s => s.charAt(s.length-1)));

const marks = [10, 2, 8, 4, 6];

console.log(marks.map(n=> n+1 > 10 ? 10 : n + 1));


console.log('--filter----');

const randomNum = [10, -3, 3.14, 5, 777, -13, -2.727];

const positiveNum = randomNum.filter(n => n>=0);
console.log(positiveNum)

const negativeNum = randomNum.filter(n => n<=0);
console.log(negativeNum)

const intergerNum = randomNum.filter(n => n % 1 === 0);
console.log(intergerNum)

const decimalNum = randomNum.filter(n => n % 1 !== 0);
console.log(decimalNum)

const randomData = [10,'labas', NaN, {}, [], Infinity, -3, 0, 3.14, 5, true, 777, -13, -2.727];

// ne neigiami skaiciai
const tss = randomData
    .filter(n => true)
    .filter(n => Number.isInteger(n))
    .filter(n => n>=0);

console.log(tss);


const tss2 = randomData
    .filter(n => typeof n === 'number')
    .filter(n => isFinite(n))
    .filter(n => n >= 0)
    .filter(n => n % 1 === 0);
console.log(tss2);

const tss3 = randomData.filter(n => Number.isInteger(n) && n >= 0);
console.log(tss3);


// SOrt

console.log('----sort---');

const dictionary = ['labas', 'rytas', 'asla', 'medis', 'zuvis'];
console.log(dictionary);

dictionary.sort();
console.log(dictionary);

const jonasMarks = [10,2,8,11,1,4,22,100,101,110,110010,6];
console.log(jonasMarks);

jonasMarks.sort();
console.log(jonasMarks[0]);
console.log(jonasMarks.at(-1));
console.log(jonasMarks);

// neigiamas skaicius => a -1 eina i prieki
// 0 a ir b lieka savo vietose
// teigiamas skaicius -> a eina i gala

jonasMarks.sort((a, b)=> a < b ? -1 : 1);
console.log(jonasMarks);

jonasMarks.sort((a, b)=> a -b );
console.log(jonasMarks);

jonasMarks.sort((a, b)=> b - a );
console.log(jonasMarks);


const stud = [
    {n:'Jonas',m: 7},
    {n:'ona',m: 10},
    {n:'petras',m: 4},
    {n:'Agne',m: 2},
];

stud.sort((a,b) => a.m - b.m);
console.log(stud)


stud.sort((a,b) => b.m - a.m);
console.log(stud)

// vardu palyginimas

function varduPalyginimas (a, b) {
    if (a>b) {
        return -1;
    } else if (a===b) {
        return 0;
    } else {
        return 1};
}

stud.sort(varduPalyginimas);
console.log(stud)

console.log('--filter----');



