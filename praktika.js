const name = 'Mantai';

function vardas(name) {
    return console.log(`Labas ${name}`);
};

vardas('Mantai');
 console.log(vardas);

const text = `labas`

function howMany(text) {
    return conslole.log(text.length);
};

console.log(howMany.length);




/*
Mark and John are trying to compare their BMI (Body Mass Index), which is
calculated using the formula:
BMI = mass / height ** 2 = mass / (height * height) (mass in kg
and height in meter).
Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both
versions)
3. Create a Boolean variable 'markHigherBMI' containing information about
whether Mark has a higher BMI than John.
Test data:
§ Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95
m tall.
§ Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76
m tall.

*/

const markWeight = 78;
const johnWheiht = 92;
const markTall = 1.69;
const johnTall = 1.95;
const markBmi = markWeight / markTall ** 2;
const johnBmi = johnWheiht / johnTall ** 2;


console.log(markBmi);
console.log(johnBmi);

const markBiggerBmi1 = markBmi >= johnBmi
const markSmollerBmi1 = markBmi <= johnBmi
const johnBiggerBmi2 =  johnBmi >= markBmi
const johnSmollerBmi2 =  johnBmi <= markBmi

console.log('sveria daugiau Markas', markBiggerBmi1);
console.log('sveria maziau Markas', markSmollerBmi1);
console.log('sveria daugiau Johanas', johnBiggerBmi2);
console.log('sveria maziau Johanas', johnSmollerBmi2);


if (markBmi > johnBmi) {
    console.log(`Mark BMI is ${markBmi}  is higher than John's ${johnBmi}!`);
    } else {
        console.log(`Mark BMI is ${markBmi}  is smoller than John's ${johnBmi}!`)
    };


/*
Use the BMI example from Challenge #1, and the code you already wrote, and
improve it.
Your tasks:
1. Print a nice output to the console, saying who has the higher BMI. The message
is either "Mark's BMI is higher than John's!" or "John's BMI is higher than Mark's!"
2. Use a template literal to include the BMI values in the outputs. Example: "Mark's
BMI (28.3) is higher than John's (23.9)!"
Hint: Use an if/else statement 😉
*/



const wu = 'Wu Tang';
const mad = 'Cappaddona';

if (wu.length < mad.length) {
    console.log(wu);
} else if (mad.length < wu.length) {
    console.log(mad)
}

const g = 'Giedre';
const n = 'Narvilaite';
const m1 = 1988;
const men = 5;
const dien = 12;
const data = 2024;
const month = 5;
const day = 10;
let metai = data - m1;
let metai2 = data - m1 - 1;
const menesiai = men - month;
const dienos = dien - day;
 
console.log(metai);
console.log(metai2);

function manoMetai() {
    let gimtadienis = 0;
    if (men >= month && dien>= day) {
      gimtadienis = metai2;
    } else if (men< month && dien < day) {
        gimtadienis = metai;
    }
return gimtadienis;
}

console.log(manoMetai());
console.log(`Aš esu ${g} ${n}. Man yra ${manoMetai()} metai.`);
console.log(`Mano gimtadienis bus už ${menesiai} menesių ir ${dienos} dienų.`);


let labas = 'labas123';

function pavadinimas (labas) {
    console.log(labas);
}

pavadinimas(labas);

function pavadinimas2(a,b) {
    return a+b
}

console.log(pavadinimas2(5,6));

function arLyginis(number) {
if(number % 2 === 0) {
    console.log(`${number} yra lyginis`);
}
else {
    console.log(`${number} yra nelyginis`);
}
}

arLyginis(6);
arLyginis(7);
arLyginis(13);

function printNumber(count) {
    for(let i = 0; i <= count; i++) {
        console.log(i)
    }
}

printNumber(3)


console.log('------------');

const arrayus = [1021,1,5,11,-1,20,32]

function biggestNo (arr) {
    let bigges = arr[0];
    for (let i=0; i<= arr.length; i++) {
        if (arr[i] > bigges) {
            bigges = arr[i];
        }
    }
    return bigges
}

console.log(biggestNo(arrayus))



