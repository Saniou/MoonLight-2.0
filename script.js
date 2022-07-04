let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains_behind = document.getElementById("mountains_behind");
let mountains_front = document.getElementById("mountains_front");
let text = document.getElementById("text");
let header = document.getElementById("header");
let btn = document.getElementById("btn");

window.addEventListener('scroll', function () {

    let value = window.scrollY;

    stars.style.left = value + 'px';
    moon.style.top = value *  + 'px'
    mountains_front.style.top = value * 0 + 'px';
    mountains_behind.style.top = value * 0.5 + 'px';
    header.style.top = value * 0.6 + 'px'
    text.style.marginRight = value * 4 + 'px';
    btn.style.marginTop = value * 1.25 +'px';

})