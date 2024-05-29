// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String


const word = 'Labas rytas, Lietuva!';

console.log(word);
console.log('Labas rytas, Lietuva!');

console.log(word[0]);
console.log('Labas rytas, Lietuva!'[0]);

console.log(word.charAt(0));
console.log('Labas rytas, Lietuva!'.charAt(0));

console.log(word.charCodeAt(0));
console.log(word.charCodeAt(1));
console.log(word.charCodeAt(2));
console.log(word.charCodeAt(3));
console.log(word.charCodeAt(4));

console.log('Labas'.concat('rytas'));
console.log('Labas'.concat(' rytas, Lietuva!'));
console.log('Labas'.concat(' rytas,').concat(' Lietuva!'));

console.log('-----------');
console.log('endsWith');
console.log('Labas'.endsWith('x'));
console.log('Labas'.endsWith('s'));
console.log('Labas'.endsWith('gg'));
console.log('Labas'.endsWith('as'));
console.log('Labas'.endsWith('Labas'));
console.log('Labas'.endsWith('labas'));

console.log('L'.charCodeAt(0));
console.log('l'.charCodeAt(0));

console.log('-----------');
console.log('startsWith');
console.log('Labas'.startsWith('x'));
console.log('Labas'.startsWith('s'));
console.log('Labas'.startsWith('L'));
console.log('Labas'.startsWith('La'));
console.log('Labas'.startsWith('Labas'));
console.log('Labas'.startsWith('labas'));

console.log('-----------');
console.log('includes()');
console.log('Pomidoras'.includes('x'));
console.log('Pomidoras'.includes('gg'));
console.log('Pomidoras'.includes('doras'));
console.log('Pomidoras'.includes('Pomi'));
console.log('Pomidoras'.includes('pomi'));
console.log('Pomidoras'.includes('omi'));

console.log('-----------');
console.log('indexOf()');
console.log('Pomidoras'.indexOf('x'));
console.log('Pomidoras'.indexOf('gg'));
console.log('Pomidoras'.indexOf('doras'));
console.log('Pomidoras'.indexOf('Pomi'));
console.log('Pomidoras'.indexOf('pomi'));
console.log('Pomidoras'.indexOf('omi'));
console.log('Pomidoras'.indexOf('P'));
console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('m'));
console.log('Pomidoras'.indexOf('i'));
console.log('Pomidoras'.indexOf('d'));
console.log('Pomidoras'.indexOf('o'));
console.log('Pomidoras'.indexOf('r'));
console.log('Pomidoras'.indexOf('a'));
console.log('Pomidoras'.indexOf('s'));
console.log('Pomidoras'.indexOf('P',1));
console.log('Pomidoras'.indexOf('o',2));
console.log('Pomidoras'.indexOf('m',3));

console.log('----------');
console.log('.repeat()');
console.log('A'.repeat(2));
console.log('uuu'.repeat(6));
console.log('Aaaaa'.repeat(3));
console.log('Labas'.repeat(2));
console.log('Labas'.repeat(1));
console.log('Labas'.repeat(NaN));
console.log('Labas'.repeat(0));
console.log('Labas'.repeat(undefined));
console.log('Labas'.repeat(null));
console.log('Labas'.repeat('du'));
console.log('Labas'.repeat(3.14));
console.log('Labas'.repeat(3.8));

console.log('----------');
console.log('.replace()');
console.log('Pomidoras'.replace('P', 'B'));
console.log('Pomidoras'.replace('o', 'x'));
console.log('Pomidoras'.replace('o', '-x-'));
console.log('Pomidoras'.replace('omi', 'ukuo'));
console.log('Pomidoras'.replace('AAA', '-x-').replace('o', '-x-'));

console.log('----------');
console.log('.replaceAll()');
console.log('Pomidoras'. replaceAll('o','_'));
console.log('Aaaaaa'. replaceAll('a','b'));

console.log('----------');
console.log('.slice()');
console.log('Pyragelis'.slice());
console.log('Pyragelis'.slice(0));
console.log('Pyragelis'.slice(1));
console.log('Pyragelis'.slice(2));
console.log('Pyragelis'.slice(3));

const p = 'Pyragelis';


console.log(p.slice(-3));
console.log(p.slice(p.length-3));
console.log(p.slice(6));
console.log(p.slice(-9));

console.log('----------');
const w = 'Rasa';

console.log(w.slice(-3));
console.log(w.slice(p.length-3));
console.log(w.slice(6));
console.log(w.slice(-9));

console.log('----------');
console.log('Pyragelis'.slice(2,4));
console.log('Pyragelis'.slice(2,6));
console.log('Pyragelis'.slice(2,100));

console.log('2547515'.slice(2,100));

console.log('----------');

console.log('split()');

const sakinys = 'Labas rytas, Lietuva!';
const zodziai = sakinys.split(' ');

console.log(zodziai);
console.log(zodziai[0]);
console.log(zodziai[1]);
console.log(zodziai[2]);

console.log('Labas rytas, Lietuva!'.split(' '));
console.log('----------');
const sakinys1 = 'Bananas';
const zodziai1 = sakinys1.split('an');

console.log(zodziai1);
console.log(zodziai1[0]);
console.log(zodziai1[1]);
console.log(zodziai1[2]);
console.log(zodziai1[3]);
console.log('----------');
const sakinys2 = 'Bananas';
const zodziai2 = sakinys2.split('B');

console.log(zodziai2);
console.log(zodziai2[0]);
console.log(zodziai2[1]);


//sakinys -> tuscias/ ne tuscias
//split -> tuscias/ ne tuscias
// split -> (ne)buvo kur kirpti


console.log('----.toLowerCase()------');
console.log('Pomidoras'.toLowerCase());
console.log('----.toUpperCase()------');
console.log('Pomidoras'.toUpperCase());

console.log('----.trim()------');
console.log('"'+'    Labas rytas    '.trim() + '"')
console.log('"'+'    Labas       rytas    '.trim() + '"')

console.log('----.trimEnd()------');
console.log('"'+'    Labas rytas    '.trimEnd() + '"')
console.log('----.trimStart()------');
console.log('"'+'    Labas rytas    '.trimStart() + '"')


const text = 'Labas rytas, Lietuva! Kaip tu, mieloji, ten laikais?';
const dictionary = text.replaceAll(',','').replaceAll('!','').replaceAll('?','').split(' ')

console.log(dictionary)


