function daugyba(no1, no2) {
    if (typeof no1 !== 'number'); {
        console.log ('Pirmas parametras nera skaiciaus tipo');
    }
     if (typeof no2 !== 'number'); {
        console.log ('Antras parametras nera skaiciaus tipo');
    }
    const ats = no1 * no2;
    return ats;
}


function multiply(a, b) {
    /*
    - jeigu, pirmas parametras nera skaicius
        - graziname klaidos pranesima
    - jeigu, antras parametras nera skaicius
        - graziname klaidos pranesima
        
    - Atskirame kintamaje issisaugome sandaugos reiksme
    - Graziname sandaugos reiksme
    */
}

function multiply(a, b) {
    if (typeof a !== 'number') {
        return 'Pirmasis parametras turi buti skaiciaus tipo.';
    }

    if (typeof b !== 'number') {
        return 'Antrasis parametras turi buti skaiciaus tipo.';
    }

    const answer = a * b;
    return answer;
}




console.log(daugyba(1,2))
console.log(daugyba(3,2))
console.log(daugyba(1,3))
console.log(daugyba(-1,2))
console.log(daugyba(3,-2))
console.log(daugyba(-1,-3))
console.log(daugyba(1,2.232))
console.log(daugyba(3.252,2))
console.log(daugyba(1.25,3.5))

console.log(daugyba(1,Infinity))
console.log(daugyba(Infinity,2))
console.log(daugyba(Infinity,Infinity))
console.log(daugyba(-1,Infinity))
console.log(daugyba(-Infinity,2))
console.log(daugyba(-Infinity,-Infinity))

console.log(daugyba(1,NaN))
console.log(daugyba(-NaN,2))
console.log(daugyba(-NaN,-NaN))

console.log('-------');

console.log(daugyba(5, 'Labas'.length));
console.log(daugyba(5, [].length));
console.log(daugyba(5, [7].length));
console.log(daugyba(5, [7, 2].length));
console.log(daugyba(5, daugyba(2,4)));

// nenaudoti dvieju skaiciu per kableli, kaip zemiau pateikta
console.log(daugyba(5, 'Labas'));
console.log(daugyba(5, []));
console.log(daugyba(5, [7]));
console.log(daugyba(5, [7, 2]));
console.log(daugyba(5, true));
console.log(daugyba(5, false));
console.log(daugyba(5, undefined));
console.log(daugyba(5, null));
console.log(daugyba(5, daugyba));
console.log(daugyba(5, daugyba()));
console.log(daugyba(5, (2,4)));
console.log(daugyba(5));
console.log(daugyba());
