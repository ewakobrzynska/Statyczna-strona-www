'use strict';

const switcher = document.querySelector('.btn2');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('default-theme');
    document.body.classList.toggle('dark-theme');
});


/*function toggleMenu(){

    console.log("toggleMenu called!");

    let menu = document.getElementById("nav_menu");

    // console.log(menu.className)

    if (menu.className === "nav_menu"){
        menu.className += " responsive";
    }else{
        menu.className = "nav_menu";
    }


}*/