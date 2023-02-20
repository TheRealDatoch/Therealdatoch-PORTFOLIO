// DARK MODE EFFECTS

let toglIcon = document.getElementById('toggleicon');

let headerBlack = document.getElementById("header")



toglIcon.addEventListener('click',function(e){
e.preventDefault();

document.body.classList.toggle("darkmode");

if (document.body.classList.contains("darkmode")) {
 toglIcon.src = "./bold/Group.svg";
}
else{
 toglIcon.src = "./bold/moon.svg";
}

});

// TYPE IN EFFECTS

const typedTextSpan = document.querySelector('.typed-text');

const cursorSpan= document.querySelector('.cursor');

const textArray = ["Freelancing jobs.",  "Working Remotely.", "Sharing new business ideas.", "also trying out new foods."];

const typingDelay = 200;
const erasingDelay = 100;
const newTextDelay = 2000;
let textArrayIndex = 0;
let charIndex = 0;

function type(){
 if (charIndex < textArray[textArrayIndex].length){
  if(!cursorSpan.classList.contains("typing"))cursorSpan.classList.add("typing");
  typedTextSpan.textContent += textArray[textArrayIndex].charAt(charIndex);
  charIndex++
  setTimeout(type, typingDelay);
 }else {
  cursorSpan.classList.remove("typing");
  setTimeout(erase, newTextDelay);
 }
}

function erase(){
 if (charIndex>0){
  if(!cursorSpan.classList.contains("typing"))cursorSpan.classList.add("typing");
  typedTextSpan.textContent = textArray[textArrayIndex].substring(0, charIndex-1);
  charIndex--;
  setTimeout(erase, erasingDelay);
 }else{
  cursorSpan.classList.remove("typing");
  textArrayIndex++;
  if(textArrayIndex>=textArray.length) textArrayIndex=0;
  setTimeout(type, typingDelay +1100);
 }

}

document.addEventListener("DOMContentLoaded", function(){
 if(textArray.length)setTimeout(type, newTextDelay +250);
});


// CURSOR EFFECTS

