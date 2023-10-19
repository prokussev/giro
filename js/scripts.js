const menuButton = document.querySelector(".m-menu");
const menu = document.querySelector(".menu");
menuButton.addEventListener("click", () =>{
    menu.classList.toggle("is-open");
});

let btn = document.querySelector('.headerButtonText1')
btn.addEventListener('click', function(){
    console.log(document.querySelector('.formItems').offsetWidth);
})
