const logo = document.querySelector('.container');
const menu = document.querySelector('.menu');

logo.addEventListener('click', function(){
    menu.classList.toggle('showmenu')
});