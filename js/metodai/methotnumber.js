// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number

console.log(Number.isFinite(152455));
console.log(Number.isFinite(-1254));
console.log(Number.isFinite(-12.54));
console.log(Number.isFinite(0));
console.log(Number.isFinite(-Infinity));
console.log(Number.isFinite(Infinity));
console.log(Number.isFinite(NaN));
console.log(Number.isFinite(null));
console.log(Number.isFinite('0'));

console.log('isFinite');
console.log(isFinite(152455));
console.log(isFinite(-1254));
console.log(isFinite(-12.54));
console.log(isFinite(0));
console.log(isFinite(-Infinity));
console.log(isFinite(Infinity));
console.log(isFinite(NaN));
console.log(isFinite(null));
console.log(isFinite('0'));

console.log('is NaN------------');
console.log(isNaN(152455));
console.log(isNaN(-1254));
console.log(isNaN(-12.54));
console.log(isNaN(0));
console.log(isNaN(-Infinity));
console.log(isNaN(Infinity));
console.log(isNaN(NaN));
console.log(isNaN(null));
console.log(isNaN('0'));

console.log('parseInt');
console.log(parseInt(152455));
console.log(parseInt(-1254));
console.log(parseInt(-12.54545));
console.log(parseInt(0));
console.log(parseInt(-Infinity));
console.log(parseInt(Infinity));
console.log(parseInt(NaN));
console.log(parseInt(null));
console.log(parseInt('0'));
console.log(parseInt('metai'));
console.log(parseInt('123abc'));
console.log(parseInt('abc123abc123'));
console.log(parseInt('123abc123abc123'));
console.log(parseInt('1232e5'));
console.log(parseInt('1.232e5'));
console.log(parseInt('7e5'));

const a = '88';
const b = parseInt('87');
console.log(a);
console.log(b);
console.log(typeof(a));
console.log(typeof(b));

console.log('parseFloat');
console.log(parseFloat(152455));
console.log(parseFloat(-1254));
console.log(parseFloat(-12.54256));
console.log(parseFloat(0));
console.log(parseFloat(-Infinity));
console.log(parseFloat(Infinity));
console.log(parseFloat(NaN));
console.log(parseFloat(null));
console.log(parseFloat('0'));
console.log(parseFloat('metai'));
console.log(parseFloat('12.3abc'));
console.log(parseFloat('abc123abc123'));
console.log(parseFloat('12.3abc123abc123'));
console.log(parseFloat('1232e5'));
console.log(parseFloat('12.32e3'));
console.log(parseFloat('1.232e5'));
console.log(parseFloat('7e5'));
console.log(parseFloat('7e-2'));

console.log('Number.toFixed()');


// serveryje nuo 0 iki 100, o ziniatinklyje nuo 0 iki 20
const c = 5;
console.log(c);
console.log(c.toFixed(20));
const d = 5.1458;
console.log(d);
console.log(d.toFixed(20));
const e = 5.123;
console.log(e);
console.log(e.toFixed(2));
const f = 5.128;
console.log(f);
console.log(f.toFixed(2));
console.log(parseFloat(f.toFixed(2)))
