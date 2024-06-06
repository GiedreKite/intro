const text = 'Labas rytas. ';

console.log(text.repeat(2));

String.prototype.firstSymbol = function() {
    return this[0];
}


console.log(text[0]);
console.log(text.firstSymbol());
console.log('aaaaabbb'.firstSymbol());

// https://www.codewars.com/kata/56cd44e1aa4ac7879200010b/train/javascript



String.prototype.isUpperCase = function () {
    const str = ''+ this
    return str === str.toUpperCase();
}
console.log('Hello'.isUpperCase())


