const numb0ffilm =[];
numb0ffilm[0]=prompt("How much films did you sow?",'');

const personalmovie={
    count:numb0ffilm,
    movies:{},
    actors:{},
    genres:[],//masiv
    privat:false

};
const a = prompt("One of the last wached films?",'');
const b = prompt("One of the last wached films?",'');

const c = prompt("How much stars you can get for this film?",'');
      d = prompt("How much stars you can get for this film?",'');

personalmovie.movies[a]=b;//
personalmovie.movies[c]=d;
console.log(personalmovie)


/*: 5678910 #1
for(let i=5; i<=10;i++){
    console.log(i);
}
#2
for(let i=20; i>=10; i--){
    if(i===12){
        break;
    }
    console.log(i);
}
#3
for(let i=2; i<=10; i++){
    if(i%2===0){
        console.log(i);
    }
}

for (let i = 2; i <= 16; i++) {
    if (i % 2 === 0) {
        continue;
     } else {
         console.log(i);
    }
}

let i =2;
while(i<=15){
     i++;
    if(i%2===0){
        continue;
    }
     console.log(i);

}
const arr =[5,6,7,8,9,10];
console.log(arr);

function fifthTask() {
    const arrayOfNumbers = [];
    arr[0]=5,
    arr[1]=6,
    arr[2]=7,
    arr[3]=8,
    arr[4]=9, 
    arr[5]=10
    // Не трогаем
    return arrayOfNumbers;
}
*/