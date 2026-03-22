const counter = document.getElementById("counter");
let count = 0;
const manualCount = document.getElementById("setCount");
const manualButton = document.getElementById("manualCountSetter");

function goToHome() {
    window.location.href = window.location.origin;
}

// Counting
const increment = () => changeCount(++count);
const decrement = () => changeCount(--count);
const reset = () => changeCount(0);

function changeCount(value) {
    count = value;
    counter.innerHTML = count.toString();

    counter.style.fontsize = count.toString().length > 2 ? "30vw" : "40vw";
}

document.addEventListener("click", (event) => {
    if (event.target.closest("button, a, input")) return;
    increment();
});

document.addEventListener("DOMContentLoaded", reset());

// Manual Count
function setCountManually() {
    if (manualCount.value.length === 0) return;
    changeCount(manualCount.value);
    manualCount.value = "";
    manualButton.disabled = true;
}

manualCount.addEventListener("input", () => {
    manualButton.disabled = manualCount.value.length === 0;
});