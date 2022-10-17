const menu = document.getElementsByClassName("menu-hambur");
const hambuger = document.getElementsByClassName("activeMenu");

function main() {
    hambuger.onclick = switchMenu;
}
function switchMenu() {
    console.log("Toggle");
    menu.classList.toggle(".active");
}

main();