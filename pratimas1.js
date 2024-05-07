const a = '\'Hello';
const b = 'world';
const c = 'this';
const d = 'is';
const e = 'great\'';

console.log(a + ' '+ b + ' ' + c + ' ' + d + ' ' + e);

//console.log( (\') a + ' '+ b + ' ' + c + ' ' + d + ' ' + e (\') );


// jei noriu išskirti kabutėmis meta klaidą, kodėėėl ???
// console.log((\')a + ' '+ b + ' ' + c + ' ' + d + ' ' + e(\'));

let slash2 = "'";
let slash1 = "'";

function smash(word10,word20,word30,word40,word50) {
    let slash1 = "'";
    slash1 += word10;
    slash1 += " ";
    slash1 += word20;
    slash1 += " ";
    slash1 += word30;
    slash1 += " ";
    slash1 += word40;
    slash1 += " ";
    slash1 += word50;
    let slash2 = "'"; ;
   return slash1;
 };
    console.log(smash('hello', 'world', 'this', 'is', 'great'));