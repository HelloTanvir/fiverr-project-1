var noti_flag = 0;
var element = document.querySelector(".noti-wraper");
document.querySelector("#bell").addEventListener("click", showOrHideNoti);
function showOrHideNoti(){
    if (noti_flag === 0) {
        element.style.display = "block";
        element.classList.remove("fadeOut");
        element.classList.add("fadeIn");
        noti_flag = 1;
    }
    else {
        element.classList.remove("fadeIn");
        element.classList.add("fadeOut");
        noti_flag = 0;
    }
}

var menu_flag = 0;
var menu = document.querySelector(".menu-wraper");
var shadow = document.querySelector("#shadow");
document.querySelector("#ham-burger").addEventListener("click", showHide);
document.querySelector("#close").addEventListener("click", showHide);

function showHide() {
    if (menu_flag === 0) {
        menu.style.display = "block";
        shadow.style.display = "block";
        menu_flag = 1;
    }
    else {
        menu.style.display = "none";
        shadow.style.display = "none";
        menu_flag = 0;
    }
}