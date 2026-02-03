// Знаходимо кнопку "Hi" по id
const noBtn=document.getElementById("no");
// Знаходимо кнопку "Так"
const yesBtn=document.getElementById("yes");
// Знаходимо заголовок з питанням
const title=document.getElementById("title");
// КОЛИ наводять мишку на кнопку "Hi"
noBtn.addEventListener("mouseenter",function(){
    const maxX=window.innerWidth-noBtn.offsetWidth;
    const maxY =window.innerHeight-noBtn.offsetHeight;

    const x = Math.random()*maxX;
    const y =Math.random()*maxY;
    
    noBtn.style.left=x+"px";
    noBtn.style.top=y+"px";

});
// КОЛИ натискають кнопку "Так"
yesBtn.addEventListener("click",function() {
   title.innerText="І я тебе люблю❤️" 
});



