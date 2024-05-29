//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const marks = [10, 2, 8, 4, 6];
const abc = ['a', 'b', 'c', 'd', 'e']

console.log([...marks].concat([1, 2, 3]));
console.log([...marks].concat(2, 3));
console.log([...marks].concat([1, 2, 3]));
console.log([...marks].concat(1,[1, 2, 3]));
console.log([...marks].concat([1, 2, 3], 6));
console.log([...marks].concat(2, [1, 2, 3], 7));

console.log([...marks, 2, ...[1, 2, 3], 7]);

console.log('n\ .copyWithin -----------');
console.log([...marks])
console.log([...marks].copyWithin(2 ,0, 1));
console.log([...marks].copyWithin(2 ,0, 2));
console.log([...marks].copyWithin(2 ,0, 3));
console.log([...marks].copyWithin(3 ,0, 3));

console.log('n\ .fill -----------');
console.log([...marks]);
console.log([...marks].fill(999));
console.log([...marks].fill(0));
console.log([...marks].fill(''));
console.log([...marks].fill('', 2));
console.log([...marks].fill('', 1, 3));

//const penkiolikaZuikiu = new Array.fill('zuikis');
//console.log(penkiolikaZuikiu);

console.log('n\ .flat -----------');
console.log([1, 2, 3].flat());
console.log([1, [2, 3], 4, 5].flat());
console.log([1, [2, [3]], 4, 5].flat());
console.log([1, [2, [3]], 4, 5].flat(2));
console.log([1, [2, [3]], 4, 5].flat().flat());

console.log('n\ .includes -----------');
console.log([...marks]);
console.log([...marks].includes(2));
console.log([...marks].includes(10));
console.log([...marks].includes(5));

console.log([[1], [2], [3]].includes([2]));
const two = [2];8

console.log([[1], two, [3]].includes(two));

console.log('n\ .indexOf -----------');
console.log([...marks]);
console.log([...marks].indexOf('labas'));
console.log([...marks].indexOf(10));
console.log([...marks].indexOf(6));
console.log([...marks].indexOf(2524));
console.log([...marks].indexOf(10, 2));
console.log([...marks, 10].indexOf(10, 2));


console.log('n\ .join -----------');
console.log([...abc]);
console.log([...abc].join(', '));
console.log([...marks].join(', '));
console.log([...abc].join(''));


console.log('n\ .keys -----------');
console.log([...marks]);
console.log([...marks].keys);


console.log('n\ .lastIndexOf -----------');
console.log([...marks]);
console.log([...marks].lastIndexOf());
console.log([...marks].lastIndexOf(10));
console.log([...marks].lastIndexOf(5));
console.log([...marks, 7, 8, 9, 10].lastIndexOf(8));


console.log('n\ .pop -----------');
const  marks2 = [...marks]
console.log([...marks2]);
console.log(marks2.pop());
console.log(marks2);
console.log(marks2.pop());



console.log('n\ .push -----------');
const  marks3 = [...marks]
console.log(marks3);
console.log(marks3.push(5));
console.log(marks3);
console.log(marks3.push(10));
console.log(marks3);
console.log(marks3.push(100));
console.log(marks3);

console.log('n\ .unshift -----------');
const  marks4 = [...marks]
console.log(marks4);
console.log(marks4.unshift(0));
console.log(marks4.unshift(1));
console.log(marks4.unshift(2));
console.log(marks4.unshift(3));

console.log('n\ .shift -----------');
const  marks5 = [...marks]
console.log(marks5);
console.log(marks5.shift(0));
console.log(marks5);
console.log(marks5.shift(2));
console.log(marks5);
console.log(marks5.shift(1));
console.log(marks5);


console.log('n\ .reverse -----------');
console.log([...marks]);
console.log([...marks].reverse());
const demo = ['Labas', 'rytas', 'Lietuva'];
console.log([...demo]);
console.log([...demo].reverse());

const reversedDemo = demo.reverse();
console.log(demo);











// nd turbo Index of