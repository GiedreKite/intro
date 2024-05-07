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






/*
 
Sukurti du kintamuosius. Jiems priskirti savo mylimo aktoriaus vardą ir pavardę kaip stringus (Jonas Jonaitis). Atspausdinti trumpesnį stringą.


Sukurkite 4 kintamuosius, kurie saugotų jūsų vardą, pavardę, gimimo metus ir šiuos metus (nebūtinai tikrus). Parašykite kodą, kuris pagal gimimo metus paskaičiuotų jūsų amžių ir naudodamas vardo ir pavardės kintamuosius atspausdintų tokį sakinį :
"Aš esu Vardenis Pavardenis. Man yra XX metai(ų)".

*/
