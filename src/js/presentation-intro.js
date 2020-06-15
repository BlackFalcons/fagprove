"use strict";

const intro_header = document.querySelector("#introduction-header");
const about_me = document.querySelector("#task-content");

document.addEventListener("keydown", event => {
    if(event.isComposing || event.keyCode === 13) {
        intro_header.style.display = "none";
        about_me.style.display = "block";
    } else if (event.isComposing || event.keyCode === 32) {
        intro_header.style.display = "block";
        about_me.style.display = "none";
    }
});
