/*
Destruktizacija
gimininga siela - spred

*/

const a = [10,2,8,4,6];
const first = a[0];
const second = a[1];
const rest = a.slice(2);

console.log(a);
console.log(first);
console.log(second);
console.log(rest);

const b = [10,2,8,4,6];
const first1 = b[0];
const second1 = b[1];
const rest1 = b.slice(2);

console.log(b);
console.log(first1);
console.log(second1);
console.log(rest1);

const dict = ['labas', 'rytas', 'Lietuva', 'sakau', 'tau'];
const [word1, word2, ...restOfDict] = dict;

console.log(word1);
console.log(word2);
console.log(restOfDict)

function giveMeTwoNumbers () {
    const a = Math.floor(Math.random() * 10);
    const b = Math.floor(Math.random() * 10);
    return [a, b];
}

const [n1, n2] = giveMeTwoNumbers();


//const res1 =giveMeTwoNumbers()
////const n1 = rest1[0];
////const n2 = rest1[1];
//const[n1 , n2] = res1

console.log(giveMeTwoNumbers(10));

//console.log(res1, n1-n2)

const res2 =giveMeTwoNumbers()
 const[n3 , n4] = res2

console.log(res2, n3-n4);

const person = {
    name: 'Petras',
    age: 55,
    happy: true,
};

const userName = person.name;
const userAge = person.age;
const userHappy = person.happy;

const {age, name, ...restDetails} = person;
console.log(age);
console.log(name);
console.log(restDetails);

function food () {
    const list = [
        {name1:'cepelinai', count: 2},
        {name1:'manai', count: 1},
        {name1:'sriuba', count: 0},
    ];

    return list[Math.floor(Math.random() * list.length)];
}

//const {name1,count} = food();

//const f1 = food();
//
//const sentence1 = `Valgysi ${f1.name1} porciju kiekis ${f1.count}`
//console.log(sentence1);
//
//const sentence2 = `Valgysi ${name1} porciju kiekis ${count}`
//console.log(sentence2);

//const {name1, count} = food();
//console.log(name1);
//const sentence2 = `Valgysi ${name1} porciju kiekis ${count}`
//console.log(sentence2);


const {name1:valgis, count:kiekis} = food();
const sentence2 = `Valgysi ${valgis} porciju kiekis ${kiekis}`
console.log(sentence2);

function drinks(...list){
    return `Gerimu kiekis:${list.length}.`;
}

console.log(drinks('a','b', 'c'))

function iLike(name, ...list) {
    return `${name} megsta ${list.length} spalvas.`;
}

console.log(iLike('Petras'));
console.log(iLike('Jonas', 'red', 'blue'));
console.log(iLike('Maryte', 'white', 'black', '50greys'));

function nextFunc(a, b, c, ...restParams) {
    return null;
}

console.log(Math.max(10, 7));
console.log(Math.min(10, 7));

const marks = [10, 2, 8, 4, 6];
console.log(Math.max(...marks));
console.log(Math.min(...marks));