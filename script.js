let menu = document.getElementById('menu');
function show() {
    menu.classList.toggle('hidden')
  
}

let open1 = document.querySelector('.open1');
let open2 = document.querySelector('.open2');



let openToggle = document.querySelector('.openToggle');
let openToggle2 = document.querySelector('.openToggle2');



openToggle.addEventListener('click' , () => {
    open1.classList.toggle('hidden');
    

})

openToggle2.addEventListener('click' , () => {
    open2.classList.toggle('hidden');
    

})


    