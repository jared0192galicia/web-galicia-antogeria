const menu = document.querySelector("#menuHam");
const hambuger = document.querySelector(".activeMenu");

function main() {
    hambuger.addEventListener('click', switchMenu);
}
function switchMenu() {
    menu.classList.toggle("active");
    menu.classList.toggle("menu-hambur");
    console.log("Toggle");
}

main();