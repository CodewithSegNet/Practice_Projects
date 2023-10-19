let form = document.querySelector("form");
let text = document.getElementById("text");
let todoCon = document.querySelector(".todo-con")
const sun = document.querySelector('.sun');
const moon = document.querySelector('.moon')
const body = document.querySelector('body')
const light = document.querySelector('.banner_light')
const dark = document.querySelector('.banner_dark');
const ligthInfo = document.querySelector('.info')
const input = document.querySelector("input")
const place = document.querySelector(".todo-con")
const banner = document.querySelector(".banner_dark")
const banner2 = document.querySelector(".banner_light")
const choice2 = document.querySelector(".choice2")

sun.addEventListener('click', () => {
  if(moon.classList.contains('hidden')){
    choice2.classList.add("card_light")
    sun.classList.add('hidden');
    moon.classList.remove('hidden');
    ligthInfo.classList.add('card_light')
    input.classList.add('card_light')
    place.classList.add('card_light')
    body.classList.add('card_light')
    banner2.classList.remove("hidden")
    banner.classList.add('hidden')

  }
})




moon.addEventListener('click', () => {
  if(sun.classList.contains('hidden')){
    sun.classList.remove('hidden');
    moon.classList.add('hidden');
    ligthInfo.classList.remove('card_light')
    input.classList.remove('card_light')
    place.classList.remove('card_light')
    body.classList.remove('card_light')
    banner.classList.remove("hidden")
    banner2.classList.add("hidden")
    choice2.classList.remove("card_light")
  }
})



form.addEventListener('submit', (task)=>{
  task.preventDefault();
  addTodo();
})
let todos=JSON.parse(localStorage.getItem("todos"))
if(todos){
  todos.forEach(element => {
    addTodo(element)
  })
}
function addTodo(elem) {
let todoCall = document.createElement("div");
todoCall.classList.add("todocall")
let  todoText = text.value;
text.value = "";
if(elem){
  todoText = elem.text;
}
if(todoText){
todoCall.innerHTML = `
<div class="todo-li">
<div class="check ${elem && elem.complete?"active-check":""}">
  <img src="images/icon-check.svg" alt="">
</div>
<p class="ptag ${elem && elem.complete?"complete":""}">${todoText}</p>
<button class="close"><img src="images/icon-cross.svg" alt=""></button>
</div>
<div class="hr"></div>`
todoCon.appendChild(todoCall);
update();
}

let close = todoCall.querySelector(".close")
close.addEventListener('click', ()=>{
  todoCall.remove()
  update()
});
let check = todoCall.querySelector(".check")
check.addEventListener('click', () => {
  check.classList.toggle("active-check")
  todoCall.children[0].children[1].classList.toggle("complete")
  update()
})
}

function update() {
  let ptag = document.querySelectorAll(".ptag");
  let arr = [];
  ptag.forEach(element =>{
    arr.push({
      text:element.innerHTML,
      complete:element.classList.contains("complete"),
    })
  })
  localStorage.setItem("todos", JSON.stringify(arr));
}

let info = document.querySelectorAll(".choice p")
let todoli = document.querySelectorAll(".todocall")

info.forEach(element => {
  element.addEventListener('click', () => {
    info.forEach(item => {
      item.classList.remove("active");
     })
      element.classList.add("active")
      if(element.innerHTML == "Active"){
        todoli.forEach(elem => {
          if(!elem.children[0].children[1].classList.contains("complete")){
            elem.style.display = "block"
          
          }else{
            elem.style.display = "none"
           
          }
        })
      }else if(element.innerHTML == "Completed"){
        todoli.forEach(elem => {
          if(elem.children[0].children[1].classList.contains("complete")){
            elem.style.display = "block"
          }else{
            elem.style.display = "none"
      
          }
        })
      }else{
        todoli.forEach(elem => {
          elem.style.display = "block"
        
          }
          )}
     })
  })

  let clear = document.querySelector(".clear");
  clear.addEventListener('click', () => {
    todoli.forEach(elem => {
      if(elem.children[0].children[1].classList.contains("complete") && elem.children[0].children[1].classList.contains("color_line")){
        elem.remove()
        update()
      }
    })
  })
 
  let left = document.querySelector(".left");
function setItem(){
 let activeTodo = document.querySelectorAll(".todo-li .active-check")
 let diff = todoli.length - activeTodo.length;
 left.innerText= `${diff} items left`

}
setItem()



let info2 = document.querySelectorAll(".choice2 p")
let todoli2 = document.querySelectorAll(".todocall")

info2.forEach(element => {
  element.addEventListener('click', () => {
    info2.forEach(item2 => {
      item2.classList.remove("active");
     })
      element.classList.add("active")
      if(element.innerHTML == "Active"){
        todoli2.forEach(elem => {
          if(!elem.children[0].children[1].classList.contains("complete")){
            elem.style.display = "block"
          
          }else{
            elem.style.display = "none"
           
          }
        })
      }else if(element.innerHTML == "Completed"){
        todoli2.forEach(elem => {
          if(elem.children[0].children[1].classList.contains("complete")){
            elem.style.display = "block"
          }else{
            elem.style.display = "none"
      
          }
        })
      }else{
        todoli2.forEach(elem => {
          elem.style.display = "block"
        
          }
          )}
     })
  })

  let clear2 = document.querySelector(".clear");
  clear.addEventListener('click', () => {
    todoli.forEach(elem => {
      if(elem.children[0].children[1].classList.contains("complete")){
        elem.remove()
        update()
      }
    })
  })
 
  let left2 = document.querySelector(".left");
function setItem(){
 let activeTodo = document.querySelectorAll(".todo-li .active-check")
 let diff = todoli.length - activeTodo.length;
 left.innerText= `${diff} items left`

}
setItem()