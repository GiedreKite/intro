function numerSize(n) {
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

console.log('1', numerSize(5));
console.log('2', numerSize(781));
console.log('3', numerSize(37060123456));
console.log('4', numerSize( true ));
console.log('5', numerSize("asd"));
console.log('6', numerSize(NaN));
console.log('7', numerSize(3.14));
console.log('7', numerSize(-3.14));
console.log('8', numerSize(-Infinity));
console.log('9', numerSize(Infinity));
console.log('10', numerSize(1e6));


//const nAstext = ''+ n;
//    if (nAstext === 'NaN' 
//       ||  nAstext ==='Infinity'
//       ||  nAstext ==='-Infinity') {
//        return 'duok normalu skaiciu.'
//       }


/*
function skaitmenuKiekisSkaiciuje(nom1) {
        const nAstext = '' + nom1;
     if (typeof nom1 !== 'number') {
        return 'Pateikta netinkamo tipo reikšmė';
    }
    if (typeof nom1 === 'boolean') {
        return 'Pateikta netinkamo tipo reikšmė';
    }
    if (typeof nom1 === 'undefined') {
        return 'Pateikta netinkamo tipo reikšmė';
    }
    if (nom1 % 1 !== 0 && nom1 < 0) {
        return nAstext.length -2
}
    if (nom1 === NaN) {
        return 'Pateikta netinkamo tipo reikšmė';
    }
     if (nom1 % 1 !== 0) {
        return nAstext.length -1
}
 if (nom1 < 0) {
        return nAstext.length -1
}
    return nAstext.length;
}
console.log('1', skaitmenuKiekisSkaiciuje(5));
console.log('2', skaitmenuKiekisSkaiciuje(781));
console.log('3', skaitmenuKiekisSkaiciuje(37060123456));
console.log('4', skaitmenuKiekisSkaiciuje( true ));
console.log('5', skaitmenuKiekisSkaiciuje("asd"));
console.log('6', skaitmenuKiekisSkaiciuje(NaN));
console.log('7', skaitmenuKiekisSkaiciuje(3.14);
console.log('7', skaitmenuKiekisSkaiciuje(-3.14);
*/




