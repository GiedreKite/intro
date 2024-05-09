function skaitmenuKiekisSkaiciuje(n) {
    if (typeof n !== 'number') {
        console.log('Pateikta netinkamo tipo reikšmė')
    }
    const nAsText = '' + n;
    return nAsText.length;    
}

console.log('1', skaitmenuKiekisSkaiciuje(5));
console.log('2', skaitmenuKiekisSkaiciuje(781));
console.log('3', skaitmenuKiekisSkaiciuje(37060123456));
console.log('4', skaitmenuKiekisSkaiciuje( true ));
console.log('5', skaitmenuKiekisSkaiciuje("asd"));
console.log('6', skaitmenuKiekisSkaiciuje(NaN));

function skaitmenuKiekisSkaiciuje(n) {
    if (typeof n !== 'number') {
        console.log('Pateikta netinkamo tipo reikšmė')
    }
    const nAsText = '' + n;
    return nAsText.length;    
}

console.log('1', skaitmenuKiekisSkaiciuje(5));
console.log('2', skaitmenuKiekisSkaiciuje(781));
console.log('3', skaitmenuKiekisSkaiciuje(37060123456));
console.log('4', skaitmenuKiekisSkaiciuje( true ));
console.log('5', skaitmenuKiekisSkaiciuje("asd"));
console.log('6', skaitmenuKiekisSkaiciuje(NaN));

/*
const a = 1452;
console.log(a);
console.log('' + a);
console.log(a.toString());

console.log(typeof a);
console.log(typeof '' + a);
console.log(typeof a.toString());

*/


/*


function skaitmenuKiekisSkaiciuje(nom1) {
    let ats = 0;
     if (nom1 = NaN) {
        'Pateikta netinkamo tipo reikšmė';
    } else if (nom1 >= 0) {
        ats = nom1.length;
    } else if (nom1 < 0) {
        ats = nom1.length;
    }
    return nom1.length;
}

console.log(skaitmenuKiekisSkaiciuje(5));
console.log(skaitmenuKiekisSkaiciuje(781));
console.log(skaitmenuKiekisSkaiciuje(37060123456));
console.log(skaitmenuKiekisSkaiciuje( true ));
console.log(skaitmenuKiekisSkaiciuje("asd"));
console.log(skaitmenuKiekisSkaiciuje(NaN));

*/


/*
Funkcijos


Funkcija pavadinimu “skaitmenuKiekisSkaiciuje”:
priima vieną kintamąjį
jei perduotas kintamasis nėra skaičiaus tipo, tai išveda pranešimą “Pateikta netinkamo tipo reikšmė.”
priešingu atveju, funkcija tęsia darbą
į atskirą kintamąjį įsimena skaičių sudarančių skaitmenų kiekį
gražina skaitmenų kiekį
TESTAI:
console.log( skaitmenuKiekisSkaiciuje( 5 ) );
rezultatas: 1
console.log( skaitmenuKiekisSkaiciuje( 781 ) );
rezultatas: 3
console.log( skaitmenuKiekisSkaiciuje( 37060123456 ) );
rezultatas: 11
console.log( skaitmenuKiekisSkaiciuje( true ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( “asd” ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
console.log( skaitmenuKiekisSkaiciuje( NaN ) );
rezultatas: “Pateikta netinkamo tipo reikšmė.”
*/
