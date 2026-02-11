// Знаходимо кнопку "Hi" по id в HTML
const noBtn=document.getElementById("no");
// Знаходимо кнопку "Так" в HTML
const yesBtn=document.getElementById("yes");
// Знаходимо заголовок з питанням в HTML
const title=document.getElementById("title");
// КОЛИ наводять мишку на кнопку "Hi" в HTML
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
//запуск сердечок
setInterval(createHeart, 300);
});

function createHeart() {
  const heart = document.createElement("div");
  heart.classList.add("heart");

  const hearts = ["💘", "💗", "💕"];
  heart.innerText = hearts[Math.floor(Math.random() * hearts.length)];

  // випадкова позиція по ширині
  heart.style.left = Math.random() * window.innerWidth + "px";

  // випадкова тривалість анімації (2–4 сек)
  const duration = Math.random() * 2 + 2;
  heart.style.animationDuration = duration + "s";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, duration * 1000);
}




