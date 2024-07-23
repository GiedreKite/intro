function sum(a,b = 0) {
    if (typeof a === 'number') {
        return a+b;}
    if (typeof a === 'number') {
        return a+b;} 
}

console.log(sum(7,5));
console.log(sum(7));
console.log(sum())
console.log(sum('labas'))


console.log(1 == '1');
for(let i = 1; i < 5; i++) {
	   console.log(i);

       function sum(a = null, b = 7) {
    if (typeof a !== 'number') {
        return 'ERROR...'
    }

    if (typeof b !== 'number') {
        return 'ERROR...'
    }

    return a + b;
}

console.log(sum(7, 5));
console.log(sum(7));
console.log(sum());
console.log(sum('labas'));

function header(isHomepage = false) {
    return isHomepage ? 'HOME PAGE' : 'OTHER PAGE';
}

console.log(header(true));
console.log(header());
console.log(header());
console.log(header());
console.log(header());
}