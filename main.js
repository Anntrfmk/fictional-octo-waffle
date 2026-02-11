"use strict";


a = 15;
console.log(a);
/*
let num = 5; 
const leftBorderWidth = 1;

num = 10;
console.log(num);

const obj ={
    a:50
};
obj.a =10;
console.log(obj);

*/
var name = 'Ann';
{
    let result =50;
}

const vehicleBodyWidth = 500;
const vehicleBodylength = 400;

///

console. log("Ширина кузова автомобіля :" + vehicleBodyWidth + ', довжина: ' + vehicleBodylength);

//['dhkj','jfhjm','gvkj'].localeCompare(a => )
///Reguest
//Data 
//Response

//snake_case
//UPPER_SNAKE_CASE
//kebab-case
//PascalCase

let color_red = "#F00";

let userName = 'John';
let userNumber = 25;
userNumber = 24;

let numb = 2.6;
console.log(4/8)
const person ='Alex';
const bool=true;
//null
console.log 

const arr =[1,2,3];
const arrObj ={
    0:1,
    1:2,
    2:3,
    abc:{
        a:1,
        b:2,
        c:3,
    }
}
console.log(arr [1]);
console.log(arrObj[1]);


const obj ={
    Anna:500,
    Alice:800

};


//alert("Hello");
//const result = confirm("Are you here&");
//console.log(result);

//const answer = prompt("do you love me?", "yes");
//console.log(typeof(answer));
//console.log(answer+5);

const answers =[];
answers[0] = prompt("what is your name?",'');
answers[1] = prompt("what is your lastname?","");
answers[3] = prompt("how old are you?","");

document.whrite(answers);

console.log(4+ +"5");

let incr=10,
    decr=10;
//incr++;постфікс//++incr;префікс
//decr--;//--decr;
console.log(++incr);
console.log(--decr);

console.log(5%2);
console.log(2*4 =='8');//можна з і без ''
console.log(2*4===8);
 const inChecked= true;
 isClose = false;

console.log(isChecked && isClose);//porivniania tilku oba
console.log(isChecked || isClose);//porivniania dage jaksho 1 

 console.log(isChecked || !isClose);//!-true->false
 
 if (4 == 9){
    console.log('ok');
 } else{
    console.log("eror");  
 }

//const number = 50;
//if (number<49){
    //console.log('eror');

//} else if (number>100){
   // console.log('too much');
//} else{
   // console.log('ok')
//}
//ternarnyj operator
//(number == 50)? console.log('ok'):console.log('eror');
const number = 50;
switch(number){
    case 49:
        console.log('false');
      break;
    case 100:
        console.log('false');
      break;
    case 51:
        console.log('true');
      break;
    default:
        console.log("another time");
        break;

};
//logiczni operatory
//&& - operator i
/*
const humb = 5;
const fries = 1;
const cola = 1;

console.log(humb===3 && cola && fries)

console.log(1&&0);//0 = false
console.log(1&&5);//1,5 = true
console.log(null&&5);
console.log(0&&"hjemn,m");

if( humb && fries){
    console.log("i'm good");
} else{
    console.log("we go out")
};
*/
const humb = 3;
const fries = 3;//or null
const cola = 0;
const nuggets =2;
if( humb === 3 && cola ===2 || fries === 3 && nuggets){
    console.log("i'm good");
} else{
    console.log("we go out");
};
console.log(humb === 3 && cola ===2 );

let jortohnRep, alexReport, samReport, annReport = 'done';
console.log(jortohnRep || alexReport || samReport || annReport);

console.log(!0); //ne 0

let num = 50;
/*
while(num<55){
    console.log(num);
    num++;
}

do {
    console.log(num);
    num++;
}
while(num<55);
*/
for(let i = 1; i<10; i++){
    if (i===6){
        //break;
        continue;
    }
    console.log(i);
    //console.log(num);
    //num++;

}

for(let i=5; i<=10;i++){
    console.log(i);
}