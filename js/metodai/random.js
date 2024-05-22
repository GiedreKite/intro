// [0..1)]

console.log(Math.random());

function moneta() {
if (Math.random() <0.5){
    return 'skaicius'
} else {
    return 'herbas'
}
}

const metimuKiekis = 10;
console.log(moneta)
console.log('skaicius');
console.log('herbas');

let herbai = 0;
for (let i=0; i < metimuKiekis; i++) {
    const iskrito = moneta();
    if (iskrito === 'herbas') {
        herbai++;
    }
}

console.log('herbu kiekis:', herbai);
console.log('skaiciu kiekis:', metimuKiekis -herbai);

const week = ['pirm','antr','trec','ketv','penk','sest','sekm'];

for (let i=0; i < 10; i++) {
    const index = Math.floor(Math.random() * week.length);
    console.log(week[index]);
}

console.log('--------');
//Man reikia atsitiktinio skaiciaus intervale nuo 1 iki 10

for (let i=1; i <= 10; i++) {
    const index = Math.floor(Math.random() *10 +1);
    console.log(index);
}

console.log('--------');
//ND Man reikia atsitiktinio skaiciaus intervale nuo 23 iki 617

for (let i=1; i <= 10; i++) {
    const index = Math.floor(Math.random() * (617 - 22) + (23)); 
    console.log(index);
}

console.log('--------');
for (let i=1; i <= 10; i++) {
    const index = Math.floor(Math.random() * (100 - 95) + (96)); 
    console.log(index);
}


