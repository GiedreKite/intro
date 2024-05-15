/* 
Funkcija - funkcija, pernaudojama logika
() - parametru blokas
{} - logikos blokas
Input => Function() => Output
*/

function doSomething(params) {
    // 1) Input (parametru) validavimas
    // 2) Vykdome logika
    // 3) Gauto rezultato validavimas
    // 4) Graziname rezultata
}


function funkcijosPavadinimas() {
};

const a = funkcijosPavadinimas();

console.log(a);

function empty() {
    return undefined;
}

console.log(empty());

function giveMeFive() {
    return 5;
}
function giveMeSix() {
    return 6;
}
console.log(giveMeFive());
console.log(giveMeSix());

/*
Input:
Name: Giedre
surname: Narvilaite

Output:
Laba diena, as esu Giedre Narvilaite!
*/

function intro(name, lastname) {
   return 'Laba diena, as esu ' + name + ' ' + lastname + '!';
}

console.log(intro('Giedre', 'Narvilaite'));
console.log(intro('Panele', 'linksmuole'));

/*
Input:
- pirmas skaicius = 5
- antras skaicius = 7

Output: 
35
*/

function multiply(firstNumber, secondNumber) {
    return firstNumber * secondNumber;
}

console.log(multiply(5 ,7));
console.log(multiply(-2 ,8));
console.log(multiply(3.14 ,2));

// Mano vardas Giedre, man 35, as megstu sporta.
// Mano vardas Tomas, man 39, as megstu geles.


function iLike(name, age, item) {
    return ' Mano vardas ' + name + ' ' + 'man yra ' + age + ', ' + 'as megstu ' + item + '.';

}

console.log(iLike('Jonas'));
console.log(iLike('Kastytis', 88));
console.log(iLike('Juozas', 34, 'geles'));

function price(value){
    const PVM = 21;
    const priceincrease = 1 + PVM / 100;
    priceForSale = value * priceincrease;
    return priceForSale;

}
console.log(price(100));
console.log(price(150));


//Zodynas : zodis, zodis, zodis

function words(w1,w2,w3) {
    let sakinys = 'Zodynas:';
    sakinys += ' ';
    sakinys += w1;
    sakinys+= ', ';
    sakinys += w2;
    sakinys+= ', ';
    sakinys+= w3;
    sakinys+= '.';
    return(sakinys);
}
console.log(words('labas', 'rytas', 'Lietuva'));




