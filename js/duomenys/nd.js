const vienas = 1;
const du = 2;
const trys = 3;

console.log(vienas);
console.log(du);
console.log(trys);

const vienas1 = 'vienas';
const du2 = 'du';
const trys3 = 'trys';

console.log(vienas1);
console.log(du2);
console.log(trys3);

const talls = [195, 210, 187, 215, 200];
const weight = [100, 90, 87, 100, 88];
const upps = [ 20, 21, 23, 25, 18];
console.log('ugiai graziu vaikinu', talls);
console.log('svoriai graziu vaikinu', weight);
console.log('graziu vaikinu', upps);

const vardai = ['Mantas', 'Petras', 'Jonas', 'Martynas', 'Jurgis'];
console.log(vardai);

const plaukai = ['ilgi', 'trumpi', 'praplikes', 'nesiskuta koju', 'suauges antakis'];
console.log(plaukai);

const akys = ['melynos', 'rudos', 'zvairos', 'zalios', 'piratas'];
console.log(akys);


const skaiciukai = talls.length + weight.length + upps.length;
console.log(skaiciukai);

let sujungimas1 = vardai[0];

function sujungimasVardai(vardai) {
    let index1 = 0
    let sujungimas1 = vardai[index1];
    sujungimas1 += " ";
    sujungimas1 +=  vardai[++index1];
    sujungimas1 += " ";
    sujungimas1 += vardai[++index1];
    sujungimas1 += " ";
    sujungimas1 += vardai[++index1];
    sujungimas1 += " ";
    sujungimas1 += vardai[++index1];
    return sujungimas1;
};
    console.log(sujungimasVardai(vardai));

function sujungimasPlaukai(plaukai) {
    let index1 = 0
    let sujungimas1 = plaukai[index1];
    sujungimas1 += " ";
    sujungimas1 +=  plaukai[++index1];
    sujungimas1 += " ";
    sujungimas1 += plaukai[++index1];
    sujungimas1 += " ";
    sujungimas1 += plaukai[++index1];
    sujungimas1 += " ";
    sujungimas1 += plaukai[++index1];
    return sujungimas1;
};
    console.log(sujungimasPlaukai(plaukai));

function sujungimasAkys(akys) {
    let index1 = 0
    let sujungimas1 = akys[index1];
    sujungimas1 += " ";
    sujungimas1 +=  akys[++index1];
    sujungimas1 += " ";
    sujungimas1 += akys[++index1];
    sujungimas1 += " ";
    sujungimas1 += akys[++index1];
    sujungimas1 += " ";
    sujungimas1 += akys[++index1];
    return sujungimas1;
};
    console.log(sujungimasAkys(akys));

const skaiciavimasTalls = [talls[0]-talls[1]+talls[2]-talls[3]+talls[4]];
console.log(skaiciavimasTalls);

const skaiciavimasWeight = [weight[0]-weight[1]+weight[2]-weight[3]+weight[4]];
console.log(skaiciavimasWeight);

const skaiciavimasUpps = [upps[0]-upps[1]+upps[2]-upps[3]+upps[4]];
console.log(skaiciavimasUpps);

console.log(sujungimasVardai(vardai), sujungimasPlaukai(plaukai), sujungimasAkys(akys))


let kintamasis1 = 2;
let kintamasis2 = 5;

if (kintamasis1 > kintamasis2) {
    console.log('pomidoras');
} else {
    console.log('');
};


if (kintamasis1 < kintamasis2) {
       console.log('pomidoras');
} else {
    console.log('');
};

if (kintamasis1 = kintamasis2) {
     console.log('pomidoras');
} else {
    console.log('');
};

if (kintamasis1 != kintamasis2) {
     console.log('pomidoras');
} else {
    console.log('');
};

if (kintamasis1 >= kintamasis2) {
     console.log('pomidoras');
} else {
    console.log('');
};

if (kintamasis1 <= kintamasis2) {
     console.log('pomidoras');
} else {
    console.log('');
};


const martynas = 'martynas';
const zalios = 'zalios';

console.log(martynas);
console.log(zalios);

if (martynas.length > zalios.length) {
     console.log('pomidoras');
} else {
    console.log('');
};

if (martynas.length < zalios.length) {
     console.log('pomidoras');
} else {
    console.log('');
};

if (martynas.length = zalios.length) {
     console.log('pomidoras');
} else {
    console.log('');
};
if (martynas.length != zalios.length) {
     console.log('pomidoras');
} else {
    console.log('');
};

if (martynas.length <= zalios.length) {
     console.log('pomidoras');
} else {
    console.log('');
};
if (martynas.length >= zalios.length) {
     console.log('pomidoras');
} else {
    console.log('');
};

const sumVardai = (vardai[0].length + vardai[1].length + vardai[2].length + vardai[3].length + vardai[4].length);
const sumPlaukai = (plaukai[0].length + plaukai[1].length + plaukai[2].length + plaukai[3].length + plaukai[4].length);
const sumAkys = (akys[0].length + akys[1].length + akys[2].length + akys[3].length + akys[4].length);

console.log(sumVardai);
console.log(sumPlaukai);
console.log(sumAkys);

console.log(vardai[0].length + vardai[1].length + vardai[2].length + vardai[3].length + vardai[4].length);
console.log(plaukai[0].length + plaukai[1].length + plaukai[2].length + plaukai[3].length + plaukai[4].length);
console.log(akys[0].length + akys[1].length + akys[2].length + akys[3].length + akys[4].length);


if (sumVardai > sumPlaukai && sumVardai > sumAkys) {
    console.log('didziausias vardu ilgis');
} else {
    console.log('nera didziausias vardu ilgis');
};

if (sumPlaukai > sumVardai  && sumPlaukai > sumAkys) {
    console.log('didziausias plauku ilgis');
} else {
    console.log('nera didziausias plauku ilgis');
};

if (sumAkys > sumPlaukai && sumAkys > sumVardai) {
    console.log('didziausias akiu ilgis');
} else {
    console.log('nera didziausias akiu ilgis');
};


if (sumVardai < sumPlaukai && sumVardai < sumAkys) {
    console.log('maziausias vardu ilgis');
} else {
    console.log('nera maziausias vardu ilgis');
};

if (sumPlaukai < sumVardai  && sumPlaukai < sumAkys) {
    console.log('maziausias plauku ilgis');
} else {
    console.log('nera maziausias plauku ilgis');
};

if (sumAkys < sumPlaukai && sumAkys < sumVardai) {
    console.log('maziausias akiu ilgis');
} else {
    console.log('nera maziausias akiu ilgis');
};


if (sumAkys === sumPlaukai === sumVardai) {
    console.log('lygus');
} else {
    console.log('nelygus');
};

if (sumAkys !== sumPlaukai !== sumVardai) {
    console.log('nelygus');
} else {
    console.log('lygus');
};


if (sumVardai >= sumPlaukai && sumVardai >= sumAkys) {
    console.log('didziausias arba lygus vardu ilgis');
} else {
    console.log('nera didziausias arba lygus vardu ilgis');
};

if (sumPlaukai >= sumVardai  && sumPlaukai >= sumAkys) {
    console.log('didziausias arba lygus plauku ilgis');
} else {
    console.log('nera didziausias arba lygus plauku ilgis');
};

if (sumAkys >= sumPlaukai && sumAkys >= sumVardai) {
    console.log('didziausias arba lygus akiu ilgis');
} else {
    console.log('nera didziausias arba lygus akiu ilgis');
};


if (sumVardai <= sumPlaukai && sumVardai <= sumAkys) {
    console.log('maziausias = vardu ilgis');
} else {
    console.log('nera maziausias = vardu ilgis');
};

if (sumPlaukai <= sumVardai  && sumPlaukai <= sumAkys) {
    console.log('maziausias = plauku ilgis');
} else {
    console.log('nera maziausias = plauku ilgis');
};

if (sumAkys <= sumPlaukai && sumAkys <= sumVardai) {
    console.log('maziausias = akiu ilgis');
} else {
    console.log('nera maziausias = akiu ilgis');
};

/*
JavaScript mini užduotys

Išvesti teksto tipo kintamųjų ilgius

Tarpusavyje palyginti sąrašo tipo kintamųjų ilgius:
kuris didesnis arba lygus
kuris mažesnis arba lygus

*/

console.log('start 0 … 0');
function nuoNulioIkiNulio(nulisirnulis) {
    if (nulisirnulis.length === 0) {
        return 'nera duomenu';
    }

    let sumNulis = 0;

for (let i = 0; i >= 0 ; i++) {
    sumNulis += nulisirnulis[i];
} 
return sumNulis;
};
console.log(nuoNulioIkiNulio(nulisirnulis));


console.log('finish');
console.log('---------------');


/*
console.log('start 0 … 4');
function nuoNulioIkiKeturiu(nulisKeturi) {
    let sum = 0;
for (let i=0; i <= 4 ; i++) {
    sum += sumKeturi[i];
} return sumKeturi;
};
console.log(nuoNulioIkiKeturiu(nulisKeturi))

console.log('finish');

console.log('---------------');

console.log('start 0 … 100');
for (let i=0; i <= 5 ; i++) {
console.log(i)
}

console.log('finish');

console.log('---------------');

console.log('start 574 … 815');
for (let i=0; i <= 0 ; i++) {
console.log(i)
}

console.log('finish');

console.log('---------------');

console.log('start -50 … 50');
for (let i=0; i <= 0 ; i++) {
console.log(i)
}

console.log('finish');

console.log('---------------');

console.log('start -70 … 30');
for (let i=0; i <= 0 ; i++) {
console.log(i)
}

console.log('finish');

console.log('---------------');




/*
Ciklo for panaudojimas
Suskaičiuoti ką gausime susumavus skaičius intervale tarp (imtinai):
0 … 0
0 … 4
0 … 100
574 … 815
-50 … 50
-70 … 30
panaudojant ciklą perrašyti tekstinio tipo kintamųjų reikšmes iš kito galo:
pvz.: “abcdef” -> “fedcba”
Suskaičiuoti, kiek nurodytame intervale yra skaičių, kurie dalijasi be liekanos iš 3, 5 ir 7 atskirai:
0 - 11
8 - 31
-18 - 18
rezultatą pateikti tokiu formatu:
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 3 yra 4 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 5 yra 3 vienetai.
Skaičių intervale tarp 0 ir 11, besidalijančių be liekanos iš 7 yra 2 vienetai.
*/

