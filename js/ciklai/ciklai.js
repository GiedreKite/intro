/*
FOR - pagrindinis ciklas (en. loop)

*/

console.log('start');
//             ++i/i=+1/i++
for (let i=0; i <= 10 ; i += 2) {
console.log(i)
}

console.log('finish');

console.log('---------------');

console.log('start');
for (let i=0; i <= 10 ; i++) {
console.log(i)
}

console.log('finish');

console.log('---------------');

//0101010101 <=> 1485.584

console.log('start');
for (let i=20; i >= 0 ; i = i-2.3) {
console.log(i)
}



console.log('finish');

console.log('---------------');

//0101010101 <=> 1485.584

console.log('start');
for (let i=200; i >= 0 ; i = i-23) {
console.log(i/10)
}


console.log('finish');

console.clear();

for (let i = 0; i < 5; i++){
    console.log(i, 'Laba diena');
}

const colors = ['white', 'black', 'red', 'green', 'blue', 'pink'];
console.log(colors[0]);
console.log(colors[1]);
console.log(colors[2]);
console.log(colors[3]);
console.log(colors[4]);

console.log('---------------');

for (let i = 0; i < colors.length ; i++) {
    console.log(i, colors[i]);
}

console.log('---------------');

for (let i = colors.length-1; i >= 0 ; --i) {
    console.log(i, colors[i]);
}

console.log('---------------');
for (let i = 0; i < colors.length ; i++) {
    console.log(i, colors[colors.length - 1 - i]);
}


console.log('---------------');
 
const marks = [10, 2, 8, 4, 6];

let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
    console.log(sum / marks.length)
}

console.log('---------------');

const jonas = [];
const maryte = [10, 8, 7, 6, 10];
const petriukas = [2, 4, 6, 3];
const ona = [8, 7, 3, 10, 10, 8];

function marksAverage(marks) {
    if (marks.length === 0) {
return 'Nera pazymiu.';
    }

    let sum = 0;

for (let i = 0; i < marks.length; i++) {
sum += marks[i];
}
return sum / marks.length;
    }



console.log(marksAverage(jonas));
console.log(marksAverage(maryte));
console.log(marksAverage(petriukas));
console.log(marksAverage(ona));