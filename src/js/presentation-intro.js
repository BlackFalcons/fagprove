"use strict";

const keyPressed = key => {
    return event.isComposing || event.keyCode === key
};

function presentation_item(control_key, undo_key, control_callback, undo_callback) {
    const intro_header = document.querySelector("#introduction-header");

    const about_me = document.querySelector("#task-content");

    document.addEventListener("keydown", event => {
        keyPressed(control_key) ? control_callback(about_me, intro_header)
            : keyPressed(undo_key) ? undo_callback(intro_header, about_me)
            : false
    });
}

function hideAndShowItem(show_item_selector, hide_item_selector) {
    hide_item_selector.style.display = "none";
    show_item_selector.style.display = "block";
}

presentation_item(13, 32, hideAndShowItem, hideAndShowItem)

document.addEventListener("keydown", event => {
    const goToFetchedSite = selector => window.location.href = document.querySelector(selector).getAttribute("href");
    keyPressed(39) ? goToFetchedSite(".presentation-link-right")
        : keyPressed(37) ? goToFetchedSite(".presentation-link-left")
        : false;
});
