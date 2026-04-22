let layer = document.querySelector(".fade-layer");
layer.addEventListener("click", closeMenu);

let button = document.querySelector(".menu-button");
button.addEventListener("click", showMenu);

function showMenu() {
    let menu = document.querySelector("nav.menu");
    menu.classList.toggle("show");
    layer.classList.toggle("visible");
    button.classList.toggle("open");
}

function closeMenu() {
    let menu = document.querySelector("nav.menu");
    menu.classList.remove("show");
    layer.classList.remove("visible");
    button.classList.remove("open");
}