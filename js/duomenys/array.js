/*
Array - masyvas, sarasas, listas, matrica
*/

const empty = [];
console.log(empty);

const marks = [10, 2, 8, 4, 6, 9];
console.log(marks);

const mark1 = 10;
const mark2 = 2;
const mark3 = 8;
const mark4 = 4;
const mark5 = 6;

const sum = mark1 + mark2 + mark3 + mark4 +mark5;
const count = 6;
const avarage1 = sum / count;

console.log(avarage1);


const sum2 = marks[0]+ marks[1] + marks[2] + marks[3] + marks[4] + marks[5];
const count2 = marks.length;
const avarage2 = sum2 / count2;

console.log('suma', sum2);
console.log('kiekis', count2);
console.log('Vidurkis', avarage2);

console.log('>>>', marks[0]);
console.log('>>>', marks[1]);
console.log('>>>', marks[2]);
console.log('>>>', marks[3]);
console.log('>>>', marks[4]);
console.log('>>>', marks[5]);


/* sum3 = sum3 + marks[0];
sum3 = sum3 + marks[1];
sum3 = sum3 + marks[2];
sum3 = sum3 + marks[3];
sum3 = sum3 + marks[4];
sum3 = sum3 + marks[5];
*/

//? = 30 + undefined = NaN
//sum3 = sum3 + marks[6];

/*
sum3 += marks[0];
sum3 += marks[1];
sum3 += marks[2];
sum3 += marks[3];
sum3 += marks[4];
sum3 += marks[5];
*/

let sum3 = 0
let index = 0 

/*sum3 += marks[index];
index += 1;

sum3 += marks[index];
index += 1;

sum3 += marks[index];
index += 1;

sum3 += marks[index];
index += 1;

sum3 += marks[index];
index += 1;

sum3 += marks[index];
index += 1;

*/

sum3 += marks[index++];
sum3 += marks[index++];
sum3 += marks[index++];
sum3 += marks[index++];
sum3 += marks[index++];
sum3 += marks[index++];

console.log('suma', sum3);

console.clear();



function marksAverage(marks) {
    if (marks.length === 0) {  
    return 'Vidurkis: nera pazymiu.';
}

let sum = 0;

    if (marks.length > 0) { 
       sum += marks[0];
}
  if (marks.length > 1) { 
       sum += marks[1]; 
       
  if (marks.length > 2) { 
       sum += marks[2];
}
 if (marks.length > 3) { 
       sum += marks[3];
}
if (marks.length > 4) { 
       sum += marks[4];
}
if (marks.length > 5) { 
       sum += marks[5]; 
}
}
if (marks.length > 6) {  
    const sum = marks[0] + marks[1]
}
    return 'Vidurkis: ' + (sum / marks.length);
}

const student = [];


const jonoPazymiai = [];
console.log(jonoPazymiai);
console.log(marksAverage(jonoPazymiai));

jonoPazymiai.push(10);
console.log(jonoPazymiai);
console.log(marksAverage(jonoPazymiai));

jonoPazymiai.push(8);
console.log(jonoPazymiai);
console.log(marksAverage(jonoPazymiai));

jonoPazymiai.push(8);
console.log(jonoPazymiai);
console.log(marksAverage(jonoPazymiai));

jonoPazymiai.push(10);
console.log(jonoPazymiai);
console.log(marksAverage(jonoPazymiai));

jonoPazymiai.push(2);
console.log(jonoPazymiai);
console.log(marksAverage(jonoPazymiai));

