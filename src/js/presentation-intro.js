"use strict";

// Checks for a key press
const keyPressed = (key, e) => {
    // Prevent space from scrolling down when clicked.
    e.code === "Space" ? e.preventDefault() : false

    return e.isComposing || e.code === key
};

const elementExist = element => {
    return (document.querySelector(element) !== null);
}

// Apply and revert a callback function
const presentation_item = (control_key, undo_key, control_callback, undo_callback) => {
    document.addEventListener("keydown", event => {
        keyPressed(control_key, event) ? control_callback(about_me, intro_header)
            : keyPressed(undo_key, event) ? undo_callback(intro_header, about_me)
            : false
    });

}

const hideAndShowItem = (show_item_selector, hide_item_selector) => {
    hide_item_selector.style.display = "none";
    show_item_selector.style.display = "block";
}

const intro_header = document.querySelector("#introduction-header");
const about_me = document.querySelector("#task-content");

document.addEventListener("keydown", event => {
    const goToFetchedSite = selector => {
        elementExist(selector) ? window.location.href = document.querySelector(selector).getAttribute("href")
            : false;
    }
    keyPressed("ArrowRight", event) ? goToFetchedSite(".presentation-link-right")
        : keyPressed("ArrowLeft", event) ? goToFetchedSite(".presentation-link-left")
        : false;
});

// Add mobile support
const presentationContent = document.querySelector("#presentation-content");

presentationContent.addEventListener("click", () => {
    getComputedStyle(intro_header).display === "block" ? hideAndShowItem(about_me, intro_header) : hideAndShowItem(intro_header, about_me);
})

presentation_item("Space", "Enter", hideAndShowItem, hideAndShowItem);
