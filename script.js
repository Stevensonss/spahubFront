toggle = document.querySelector('.nav-toggle');

header = document.querySelector('header');

ham = document.querySelector('.ham');
bur = document.querySelector('.bur');
ger = document.querySelector('.ger');

toggle.addEventListener("click", function(){
    ham.classList.toggle("ham-active");
    bur.classList.toggle("bur-active");
    ger.classList.toggle("ger-active");
    header.classList.toggle("header-active")
}) 