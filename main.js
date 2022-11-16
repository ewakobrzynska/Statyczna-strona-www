'use strict';

const switcher = document.querySelector('.btn2');

switcher.addEventListener('click', function() {
    document.body.classList.toggle('default-theme');
    document.body.classList.toggle('dark-theme');
});