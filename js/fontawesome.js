let iconSpin;
let iconFadeOut;
let iconFadeIn;


function addSpin(element, stop = false, timeLength = 1000) {
    // Check if spin is already active
    if (iconSpin) {
        clearTimeout(iconSpin);
        iconSpin = null;
    }
    
    const icon = element.querySelector("i");
    // Safety removal
    icon.classList.remove("fa-spin");
    void icon.offsetWidth;
    icon.classList.add("fa-spin");

    // Start spin
    if (stop) {
        iconSpin = setTimeout(() => {
            icon.classList.remove("fa-spin");
        }, timeLength);
    }
}

function swapIcons(element, replaceElementId, timeLength = 1000) {
    if (iconFadeOut) {
        clearTimeout(iconFadeOut);
        iconFadeOut = null;
    }
    if (iconFadeIn) {
        clearTimeout(iconFadeIn);
        iconFadeIn = null;
    }

    const old = element.querySelector("i");
    old.classList.remove("fa-fade");
    void old.offsetWidth;
    old.classList.add("fa-fade");

    const newElement = document.getElementById(replaceElementId)
    const replacement = newElement.querySelector("i");
    replacement.classList.remove("fa-fade");
    void replacement.offsetWidth;
    replacement.classList.add("fa-fade");

    iconFadeOut = setTimeout(() => {
        element.classList.add("d-none");
        old.classList.remove("fa-fade");
    }, timeLength);

    iconFadeIn = setTimeout(() => {
        newElement.classList.remove("d-none");
        setTimeout(() => {
            replacement.classList.remove("fa-fade");
        }, timeLength);
    }, timeLength);
}
