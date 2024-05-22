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

const sakinys = vienas1 + ' ' + du2 + ' '  + trys3;
console.log(sakinys);

const talls = [195, 210, 187, 215, 200];
const weight = [100, 90, 87, 100, 88];
const upps = [ 20, 21, 23, 25, 18];
console.log('ugiai graziu vaikinu', talls);
console.log('svoriai graziu vaikinu', weight);
console.log('graziu vaikinu', upps);

const vardai = ['Mantas', 'Petras', 'Jonas', 'Martynas', 'Jurgis'];
console.log(vardai);
console.log(vardai[0] + ', ' + vardai[1] + ', ' + vardai[2] + ', ' + vardai[3] + ', ' + vardai[4]);

const plaukai = ['ilgi', 'trumpi', 'praplikes', 'nesiskuta koju', 'suauges antakis'];
console.log(plaukai);
console.log(plaukai[0] + ', ' + plaukai[1] + ', ' + plaukai[2] + ', ' + plaukai[3] + ', ' + plaukai[4]);

const akys = ['melynos', 'rudos', 'zvairos', 'zalios', 'piratas'];
console.log(akys);
console.log(akys[0] + ', ' + akys[1] + ', ' + akys[2] + ', ' + akys[3] + ', ' + akys[4]);

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

console.clear();

console.log('-------');

function intervalSum(start, finish) {
    let atsakymas = 0;
    for (let i = start; i <= finish; i++) {
        atsakymas += i
    }
    
    return atsakymas;
}
console.log(intervalSum(0, 0));
console.log(intervalSum(0, 4));
console.log(intervalSum(0, 100));
console.log(intervalSum(574, 815));
console.log(intervalSum(-50, 50));
console.log(intervalSum(-70, 30));

console.log('---------------');

function reverseString(text) {
    let answer = '';

    for (let i = 0; i < text.length; ++i) {
        console.log(i, text[i]);
        answer += text[text.length -1 - i];
    }
    return text;
}


console.log(reverseString('labukas'));

const abc = [ 'a', 'b', 'c', 'd', 'e', 'f']
for (let i = abc.length-1; i >= 0 ; --i) {
    console.log(i, abc[i]);
}
for (let i = 0; i <= abc.length - 1 ; ++i) {
    console.log(i, abc[i]);
}

for (let i = abc.length-1; i >= 0 ; --i) {
    console.log(i, abc[i]);
}


function reverseString2(text) {
    let answer = '';

    for (let i = 0; i < text.length; ++i) {
        console.log(i, text[i]);
        answer = text[text.length -1 - i] + answer;
    }
    return text;
}

function reverseString3(text) {
    let answer = '';

    for (let i = 0; i < text.length; i++) {
        answer = text[i] + answer;
    }
    return text;
}

console.log(reverseString('labukas'));
console.log(reverseString2('alus'));
console.log(reverseString3('sedek uzu kedes'));

function reverseString(text) {
    let answer = '';

    // for (let i = 0; i < text.length; i++) {
    //     answer += text[text.length - 1 - i];
    // }

    for (let i = 0; i < text.length; i++) {
        answer = text[i] + answer;
    }

    // for (let i = text.length - 1; i >= 0; i--) {
    //     answer += text[i];
    // }

    // for (let i = text.length - 1; i >= 0; i--) {
    //     answer = text[text.length - 1 - i] + answer;
    // }

    return answer;
}

console.log(reverseString('labukas'), '-->', 'sakubal');
console.log(reverseString('alus'), '-->', 'sula');
console.log(reverseString('sedek uzu kedes'), '-->', 'sedek uzu kedes');


console.clear();

function numberCount(start, finish, step) {
    let answer = 0;

    for (let i = start; i <= finish; i++) {
        if (i % step === 0) {
        answer++;
    }
    }
    return 'Skaičių intervale tarp ' + start + ' ir ' + finish + ', besidalijančių be liekanos iš ' + step + ' yra ' + answer + 'vienetai.' ;
}

console.log(numberCount(0, 11, 3));
console.log(numberCount(0, 11, 5));
console.log(numberCount(0, 11, 7));

console.log(numberCount(8, 31, 3));
console.log(numberCount(8, 31, 5));
console.log(numberCount(8, 31, 7));

console.log(numberCount(-18, 18, 3));
console.log(numberCount(-18, 18, 5));
console.log(numberCount(-18, 18, 7));




function tusciaFunkcija2() {
    if (tusciaFunkcija.length >=0); {  
    }
    return 'false'}

console.log(tusciaFunkcija2());

function tusciaFunkcija() {
    return 'false'
}

console.log(tusciaFunkcija());


function daugyba(no1, no2) {
    if (typeof no1 !== 'number') {
        return 'Pirmas parametras nera skaiciaus tipo';
    }

    if (typeof no2 !== 'number') {
        return 'Antras parametras nera skaiciaus tipo';
    }
    const atsak = no1 * no2;
    return atsak;
}


console.log(daugyba(1, 2))
console.log(daugyba(3, 2))
console.log(daugyba(1, 3))



console.clear()

/*
function skaitmenuKiekisSkaiciuje(n) {
    if(typeof n !== 'number') {
        return 'Blogas duomenu tipas.'
    }
    const nAstext = ''+ n;
    // if (isFinite(n) === false) 
    
    if (!isFinite(n)) {
        return 'duok normalu skaiciu.'
       }
    let size = nAstext.length;

    if (n % 1 !== 0) {
        size--;
    }
    if (n<0) {
        size--;
        }
    return size;
}
 
console.log('skaiciukaiSkaiciuke --->');
console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje( true ));
console.log(skaitmenuKiekisSkaiciuje("asd"));
console.log(skaitmenuKiekisSkaiciuje(NaN));

    
*/
console.log('-------------');

console.log('-------------');
/*
function didziausiasSkaiciusSarase(numberiuks) {
    if (numberiuks.length <= 0) {
        return 'Pateiktas sąrašas negali būti tuščias.';
    }
    let didziausiasis = numberiuks[0];
    for (let k = 0; k < numberiuks.length; k++) {
    if (numberiuks[k] > didziausiasis) {
        didziausiasis = numberiuks[k]
    } 
    }
     if (typeof numberiuks === 'string') {
        return 'Pateikta netinkamo tipo reikšmė.'
    }
     if (typeof numberiuks === 'boolean') {
        return 'Pateikta netinkamo tipo reikšmė.'
    }
     if (typeof numberiuks === 'undefined') {
        return 'Pateikta netinkamo tipo reikšmė.'
    }
     if (typeof numberiuks === 'symbol') {
        return 'Pateikta netinkamo tipo reikšmė.'
    }
    return didziausiasis
}

console.log(didziausiasSkaiciusSarase([1]));
console.log(didziausiasSkaiciusSarase([1, 2, 3]));
console.log(didziausiasSkaiciusSarase([-5,78,14,0,18]));
console.log(didziausiasSkaiciusSarase([69,69,69,69,66]));
console.log(didziausiasSkaiciusSarase([-1, -2, -3, -4, -5, -6, -7, -8 ]));
console.log(didziausiasSkaiciusSarase('pomidoras'));
console.log(didziausiasSkaiciusSarase([]));

*/

/*
Funkcija pavadinimu “didziausiasSkaiciusSarase”:
priima vieną kintamąjį
jei perduotas kintamasis nėra sąrašo tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
jei sąrašas yra tuščias, tai išveda pranešimą “Pateiktas sąrašas negali būti tuščias.”
priešingu atveju, funkcija tęsia darbą
pereina per visą pateiktą sąrašą ir į atskirą kintamąjį įsimena skaičių, kuris tuo metu yra didžiausias
gražina didžiausią surastą skaičių
*/


function isrinktiRaides(tekstas, kelintaRaide) {
    if (typeof tekstas !== 'string') {
        return 'Pirmasis kintamasis yra netinkamo tipo.';
    }
    if (typeof kelintaRaide !== 'number') {
    return 'Antrasis kintamasis yra netinkamo tipo.'
    }
     if (kelintaRaide >= tekstas.length) {
     return 'Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.'
    }
    if (tekstas.length >= 100) {
        return 'Tekstas yra per ilgas'
    }
    if (tekstas.length <= 0) {
        return 'Tekstas yra tuscias'
    }
    if (kelintaRaide <= 0) {
    return 'Antrasis kintamasis turi buti didesnis uz nuli.'
    }
     let iskarpyta = '';
    for (let i = kelintaRaide-1; i < tekstas.length; i = kelintaRaide + i) { 
        iskarpyta += tekstas[i];
    }
return iskarpyta;
}


console.log(isrinktiRaides('abcdefg', 2));
//rezultatas: “bdf”
console.log( isrinktiRaides('abcdefghijkl', 3) );
//rezultatas: “cfil”
console.log( isrinktiRaides('abc', 0 ) );
//rezultatas: “Antrasis kintamasis turi būti didesnis už nulį.”
console.log( isrinktiRaides('abc', 4 ) );
//rezultatas: “Antrasis kintamasis turi būti ne didesnis už pateikto teksto ilgį.”
console.log( isrinktiRaides(1561, 2 ) );
//rezultatas: “Pirmasis kintamasis yra netinkamo tipo.”



/*
Funkcija pavadinimu “isrinktiRaides”:
priima du kintamuosius:
pirmasis nurodo tekstą, su kuriuo reikės atlikti užduotį
antrasis nurodo kas kelintą raidę išrinkti
priešingu atveju tęsiame darbą
išrenkame iš nurodyto teksto kas kelintą raidę (pagal antrojo kintamojo žingsnį)
išrinktas raides sudėti į atskirą kintamąjį, kuris yra teksto tipo
gražina rezultatą


*/

/*
Funkcija pavadinimu “dalyba”:
turi priimti du kintamuosius
reikia sugalvoti ir įgyvendinti kuo daugiau logiškų patikrinimų, 
kurie padėtų apsaugoti funkciją nuo neteisingo panaudojimo
esant blogoms sąlygoms, išvesti atitinkamą pranešimą
esant geroms - tęsti darbą
į atskirą kintamąjį išsaugoti apskaičiuotą dviejų skaičių dalybos reikšmę
daliname pirmąjį skaičių iš antrojo
grąžinti suskaičiuotą reikšmę
TESTAI:
sugalvoti bent 5 testus, kurie bendrai iš esmės patvirtintu gerą funkcijos veikimą
*/



console.log('-------------');
/*
function dalyba(num1, num2) {
    if (typeof num1 !== 'number') {
        return 'pirmas simbolis klaidingas, turi buti skaitmuo'
    }
    if (typeof num2 !== 'number') {
        return 'antras simbolis klaidingas, turi buti skaitmuo'
    }
    return num1/num2
}

console.log(dalyba(NaN, 2))
console.log(dalyba(4, 2))
console.log(dalyba(4, 2.52))
console.log(dalyba(4.2, 2))
console.log(dalyba([], 2))
console.log(dalyba(4, 'stringas'))
console.log(dalyba('stringas', 2))
console.log(dalyba(Infinity, 2))
*/