const hamburger= document.querySelector(".hamburger");
const menu = document.querySelector(".menu");
let line1Bar= document.querySelector(".line1__bars--menu");
let line2Bar= document.querySelector(".line2__bars--menu");
let line3Bar= document.querySelector(".line3__bars--menu");
const listElements = document.querySelectorAll(".menu__item-show")

hamburger.addEventListener("click", animateMenu);

function animateMenu(){
  line1Bar.classList.toggle("activateline1__bars--menu");
  line2Bar.classList.toggle("activateline2__bars--menu");
  line3Bar.classList.toggle("activateline3__bars--menu");
}

function toggleMenu() {
  menu.classList.toggle("menu__links-show")
}

function addClick(){
  listElements.forEach(element => {
    element.addEventListener("click", () =>{
      let subMenu= element.children[1]
      let height=0
      element.classList.toggle("menu__item-active")

      if(subMenu.clientHeight === 0){
        height = subMenu.scrollHeight
      }

      subMenu.style.height= `${height}px`

    })
  })
}

function deleteStyleHeight(){
  listElements.forEach(element => {
    if(element.children[1].getAttribute("style")){
      element.children[1].removeAttribute("style")
      element.classList.remove("menu__item-active")
    }
  })
}

window.addEventListener("resize", () =>{
  if(window.innerWidth > 800){
    deleteStyleHeight()
    if(menu.classList.contains("menu__links-show")){
      menu.classList.remove("menu__links-show")
    }
  }else{
    addClick()
  }
})

if(window.innerWidth <=800){
  addClick()
}