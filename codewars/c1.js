



// https://www.codewars.com/kata/571f832f07363d295d001ba8/train/javascript
/*

function trueOrFalse(val){
  const arr = {}
    {a: 1},
    {b: 2},
    {c: 1},
  ]
  if (val === a>b)    return false;             
  else     return true;
}
*/

function trueOrFalse(val){
  var arr = {
    a:1,
    b:2,
    c:1,
  }
  arr.Sort(val)
  val of arr === 
  if (a>b) {
    return 'false';
  } if (a===b) {
    return 'false'; 
  } if (a<b) {
    return 'true'; 
  } if (a!==b) {
    return 'true'; 
  } if (b>c) {
    return 'true';
  } if (b===c) {
    return 'false'; 
  } if (b<c) {
    return 'false'; 
  } if (b!==c) {
    return 'true'; 
  } if (a===c) {
    return 'true'; 
  } if (a!==c) {
    return 'false';      
}
}


console.log(trueOrFalse((a>b),"false"));
console.log(trueOrFalse((a===b),"false"));
console.log(trueOrFalse((a<b),"true"));
console.log(trueOrFalse((a!==b),"true"));
console.log(trueOrFalse((b>c),"true"));
console.log(trueOrFalse((b===c),"false"));
console.log(trueOrFalse((b<c),"false"));
console.log(trueOrFalse((b!==c),"true"));
console.log(trueOrFalse((a===c),"true"));
console.log(trueOrFalse((a!==c),"false"));




// https://www.codewars.com/kata/55ca77fa094a2af31f00002a/train/javascript

function messiGoals () {
var laLigaGoals  = 10;
var championsLeagueGoals = 40;
var copaDelReyGoals = 8;
return messiGoals}

function totalGoals() {
  var total = messiGoals;
  return total 
}


console.log(messiGoals(), 58)
console.log(totalGoals(), 58)





    
// https://www.codewars.com/kata/5ab52526379d20736b00000e/train/javascript

/*
function magNumber(info){
  
}

       [["PT92", 6], 2],
        [["M4A1", 8], 1],
        [["M16A2", 19], 2],
        [["PSG1", 31], 19],
        [["PT92", 19], 4],
  
    
    console.log(magNumber(input), expected);
*/






// https://www.codewars.com/kata/56d6b921c9ae3fd926000601/train/javascript
function strii(text) {
  if (text === [text]) {
    ats = []
    return ats.push(text);
  }
  else {return text.toString()};
}

console.log(strii((123).toString(), "123"));
console.log(strii(Math.PI.toString(), "3.141592653589793"));
console.log(strii(Math.E.toString(), "2.718281828459045"));
console.log(strii(true.toString(), "true"));
console.log(strii(false.toString(), "false"));
console.log(strii([1,2,3,4,5].toString().replace(/\s+/g, ""), "[1,2,3,4,5]"));
  





/*
function solution(str){
  let ats = [];
  let text = 
   if (str.length %2 ===0) {
     for (i=0; i<str.length; i++) {
      return ats.push(str[i]+str[i+1]+'')
}}
    if (str.length %2 !==0) {
     for (i=0; i<str.length; i++) { 
      return ats.push(str[i]+'_')
}
        
      }}

    console.log(solution("abcdef"), ["ab", "cd", "ef"]);
    console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
    console.log(solution(""), []);

    */

// https://www.codewars.com/kata/5583090cbe83f4fd8c000051/train/javascript
console.log('-----')

function digitize(n) {
 let atsak = [];
  for (let i = n.length-1; i>=1; i--) {
    n = toString(n);
    console.log(n[i]);
    if (n>=10) { atsak.push(n[i]) } 
    return atsak
    }
  
  // if else (n.length = 1) { 
  //  ats = n;
  //  return [ats]}
  }



console.log(digitize(35231),[1,3,2,5,3]);
console.log(digitize(0),[0]);

function spec() {
	const career = Math.random()
		if (career <= 0.32) {
			return  'FrontEnd Developer' }
		 else if (career <= 0.65) {
			return  'BackEnd Developer'
		} else {
			return 'Full-Stack Developer'
		}
}
  


console.log(spec())

function moneta() {
if (Math.random() <0.5){
    return 'skaicius'
} else {
    return 'herbas'
}
}

//https://www.codewars.com/kata/5721c189cdd71194c1000b9b/train/javascript


function grabDoll(dolls){
  var bag=[];
  //coding here
  
  return bag;
}

console.log(grabDoll(["Mickey Mouse","Hello Kitty","Snow white"]),["Hello Kitty"]);
console.log(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Snow white"]),["Hello Kitty","Hello Kitty"]);
console.log(grabDoll(["Mickey Mouse","Hello Kitty","Hello Kitty","Barbie doll","Snow white"]),["Hello Kitty","Hello Kitty","Barbie doll"]);
console.log(grabDoll(["Mickey Mouse","Barbie doll","Hello Kitty","Hello Kitty","Hello Kitty","Snow white"]),["Barbie doll","Hello Kitty","Hello Kitty"]);
