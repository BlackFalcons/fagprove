"use strict";

// Disable buttons without link.
document.querySelectorAll(".button").forEach(e => {
    e.getAttribute("href") === "#" ? e.classList.add("disabled") : false;
});
