// objektas

const empty = {};

const student1Name = 'Jonas';
const studentAge1 = 99;
const studentMarried1 = true;

const stud1 = ['Jonas', 99, true];
const stud2 = ['Maryte', false, 88];
const stud3 = [60, true, 'Petras'];
const stud4 = ['Ona', true];

console.log(stud3[2]);

const stud11 = {
    name: 'Jonas',
    age: 99,
    isMarried: true,
    color: 'red',
}

console.log(stud11)

const stud12 = {
    isMarried: true,
    name: 'Maryte',
    age: 88,
}

console.log(stud12)

const stud13 = {
    age: 99,
    name: 'Kazys',
    isMarried: false,
}

console.log(stud13)

console.log(stud11);
console.log(stud11.name);
console.log(stud11.age);
console.log(stud11.isMarried);

console.log(stud12);
console.log(stud12.name);
console.log(stud12.age);
console.log(stud12.isMarried);

console.log(stud13);
console.log(stud13.name);
console.log(stud13.age);
console.log(stud13.isMarried);

const students = [
    {name: 'Jonas', age: 99, isMarried: true},
    {name: 'MAryte', age: 88, isMarried: false},
    {name: 'Petras', age: 77, isMarried: true},
    {name: 'Ona', age: 66, isMarried: false},
    {name: 'Chuk', age: 55, isMarried: false},
]

console.log(students[3]);
console.log(students[students.length - 1]);
console.log(students.at);

console.log('-------------');

//Sveiki, as Vardas, man xx metu ir as esu/nesu vedes.

function intoduction(studentData) {
    return `Sveiki, as ${studentData.name}, man ${studentData.age} metu ir as ${studentData.isMarried ?'esu':'nesu'} vedes.`;
}

console.log(intoduction(students[0]));
console.log(intoduction(students[1]));
console.log(intoduction(students[2]));
console.log(intoduction(students[3]));

console.log('---------');
for(let i = 0; i < students.length; i++){
    console.log(intoduction(students[i]));
}

const stud131 = {
    age: 99,
    name: 'Kazys',
    isMarried: false,
}

//Supaprastinta objekto sintakse
console.log(stud131.name);
console.log(stud131.age);
console.log(stud131.isMarried);

// Standartine sintekse
console.log(stud131['name']);
console.log(stud131['age']);
console.log(stud131['isMarried']);

const key = 'age';
console.log(stud131.key);
console.log(stud131['age']);
console.log(stud131[key]);

console.clear()

function giveMe(data, key) {
    return data[key]
}

console.log(giveMe({name: 'jonas', age: 99}, 'name'));
console.log(giveMe({name: 'jonas', age: 99}, 'age'));
console.log(giveMe({name: 'jonas', age: 99}, 'isMerried'));
