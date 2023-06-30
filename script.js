const hamburger= document.querySelector(".hamburger");
let line1Bar= document.querySelector(".line1__bars--menu");
let line2Bar= document.querySelector(".line2__bars--menu");
let line3Bar= document.querySelector(".line3__bars--menu");

hamburger.addEventListener("click", animateMenu);

function animateMenu(){
  line1Bar.classList.toggle("activateline1__bars--menu");
  line2Bar.classList.toggle("activateline2__bars--menu");
  line3Bar.classList.toggle("activateline3__bars--menu");
}




function toggleMenu() {
  let menu = document.querySelector(".menu");
  menu.style.display = (menu.style.display === "block") ? "none" : "block";
}
