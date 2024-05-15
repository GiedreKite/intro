/*
Pamatyti laikrodi, visas galimas kombinacijas, valandos tikslumu
intervalas 1 iki 12
pateikimo formatas: 1:00...
1:15
1:30
1:45
2:00
*/

/*
for(let i = 1; i <= 4; i++) {
    console.log(i+':00');
    console.log(i+':15');
    console.log(i+':30');
    console.log(i+':45');
}
*/
/*
for(let val = 1; val <= 4; val++) {
    let min = 0;
    for (let i = 0; i < 4; i++) {  
        if (min < 10) {
            console.log(val + ':0'+ min)
        } else {
    console.log(val + ':' + min);
        }
    min +=15;
}
}
console.log ('--------');

for(let val = 15; val <= 15; val++) {
    for (let min = 0; min < 4; min++) {  
        for(let sek = 0; sek<60; sek++) {
    console.log(val + ':' + min + ':' + sek);
        }
    }
}
*/

//      MAsyvas masyve

const matrix = [10,2,4,6,10];
console.log(matrix);

for (let i = 0; i<matrix.length; i++) {
    console.log(i, '-', matrix[i]);
}


const students = [
    [10,9,9,8],
    [9,7,9,2,3,4,6],
    [7,8,9,6,3,5,7,8,10,10,9,9,8,],
    [8,8,8,8,8,8],
    []
];

console.log('Jonas(0)');
const jonoPazymiai=students[0];

/*
console.log(jonoPazymiai[0]);
console.log(jonoPazymiai[1]);
console.log(jonoPazymiai[2]);
console.log(jonoPazymiai[3]);
*/
for(let i = 0; i < jonoPazymiai.length; i++) {
    console.log('jonas', jonoPazymiai[i])
}

console.log(students[0])

console.log('------------')
for(let i = 0; i < students[1].length; i++) {
    console.log('marytes', students[1][i])
}
console.log('------------')
for(let i = 0; i < students[2].length; i++) {
    console.log('birute', students[2][i])
}
console.log('------------')
for(let i = 0; i < students[3].length; i++) {
    console.log('kaziukas', students[3][i])
}
console.log('------------')
for(let i = 0; i < students[4].length; i++) {
    console.log('petriukas', students[4][i])
}
console.clear()   

const gorila = [
    [1,2,3],
    [4,[5,6],7],
    [
        [8,9,10],
        [11,12,13,[14,15]],
    ]
];

console.log(gorila[2]);
console.log(gorila[2][0]);
console.log(gorila[2][0][0]);
console.log(gorila[2][0][1]);
console.log(gorila[2][0][2]);

console.log(gorila[2][1]);
console.log(gorila[2][1][0]);
console.log(gorila[2][1][1]);
console.log(gorila[2][1][2]);
console.log(gorila[2][1][3]);

console.log(gorila[2][1][3][0]);
console.log(gorila[2][1][3][1]);









