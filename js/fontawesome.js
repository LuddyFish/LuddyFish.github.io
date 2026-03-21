let iconSpin;

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