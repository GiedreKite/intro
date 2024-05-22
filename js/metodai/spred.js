//Spred operatorius

/*
*/

//Value by reference
const a = [1,2,3];
const b = a;


console.log(a);
console.log(b);

a[0] = 44;
console.log(a);
console.log(b);

b[2] = 777;
console.log(a);
console.log(b);

let c = 7;
let d = c;

c = 111;
console.log(c);
console.log(d);

d = 9999;
console.log(c);
console.log(d);

//...Spred masyvas
//...iskopijuoti pirmo lygio informacija

const e = [1,2,3];
const f = [...e];

console.log(e);
console.log(f);

e[0] = 111;
f[2] = 888

console.log(e);
console.log(f);

const g = [0,...e, 4, 5, 6];
console.log(g);

const h = [...e, ...e, 5050, ...e, 777];
console.log(h);

// ...spred object

const obj1 = {name: 'Jonas', age: 99};
const obj2 = obj1;

console.log(obj1);
console.log(obj2);

obj1.name = 'Maryte';

console.log(obj1);
console.log(obj2);

obj2.age = '72';

console.log(obj1);
console.log(obj2);

const obj3 = {brand: 'audi', model: '80'};
const obj4 = {...obj3};

console.log(obj3);
console.log(obj4);

obj3.brand = 'Volvo';

console.log(obj3);
console.log(obj4);

obj3.model = 'XXX';

console.log(obj3);
console.log(obj4);

const person = {
    name: 'petras',
    age:77,
};

const adress = {
    city: 'miestas',
    street: 'gatve',
    number: 45,
}
// irasius paskutini duomeni,'ona' pakeicia petra
const fullPersonsDetails = {
    id:111,
    phone: 888855465,
    ...person,
    ...adress,
    name: 'ona',

}

console.log(person);
console.log(adress);
console.log(fullPersonsDetails);

const str = 'abc';
const arr = ['a', 'b', 'c'];
const obj = {
    0: 'a',
    1: 'b',
    2: 'c',
}

console.log(str, arr, obj);
console.log(str[0], arr[0], obj[0]);

const k = [1,2,3];
const l = {name: 'ona', age: 55}

console.log(k);
console.log(l);

const p = {...k, ...l};

console.log(p);

// taip negalima -->
//const m = [...l, ...k];

//console.log(m);