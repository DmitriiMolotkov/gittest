let menu = document.querySelector('.menu');
let link = document.querySelector('.title');

link.onclick = function() {
    menu.classList.toggle('open');
};