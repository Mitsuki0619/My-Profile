'use strict';

// 取得
const headerElement = document.getElementById("header");
const targetElement = document.querySelectorAll(".animationTarget");
const more = document.getElementById('more');
const profText = document.getElementById('profText');



// スクロールしたらアニメーション
document.addEventListener("scroll", () => {
    if(document.getElementById("main").getBoundingClientRect().bottom < 0){
        headerElement.classList.add("active");
    } else {
        headerElement.classList.remove("active");
    }
})

document.addEventListener("scroll", () => {
    for(let i = 0; i < targetElement.length; i++) {
        const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * 0.6;
        if(window.innerHeight > getElementDistance) {
            targetElement[i].classList.add("show");
        } 
    }
})

// イントロアニメーション
ityped.init(document.querySelector("#ityped"), {
    strings: ['Mitsuki Iwamura'],
    loop:　false,
    typeSpeed: 150,
})


// PROFILE MORE OR LESS BUTTON
more.addEventListener('click', () => {
    if(more.innerText == "MORE"){
    profText.classList.remove('none');
    more.textContent = "LESS";
    } else {    
    profText.classList.add('none');    
    more.textContent = "MORE";
    }
})
