const counters = document.querySelectorAll(".counter");
let count = 0;
const manualCount = document.getElementById("setCount");
const manualButton = document.getElementById("manualCountSetter");

const increment = () => changeCount(++count);
const decrement = () => changeCount(--count);
const reset = () => changeCount(0);

function changeCount(value) {
    count = value;
    counters.forEach(counter => counter.innerHTML = count.toString());
}

function goToHome() {
    window.location.href = window.location.origin;
}

document.addEventListener("click", (event) => {
    if (event.target.closest("button, a, input")) return;
    increment();
});

function setCountManually() {
    if (manualCount.value.length === 0) return;
    changeCount(manualCount.value);
    manualCount.value = "";
    manualButton.disabled = true;
}

manualCount.addEventListener("input", () => {
    manualButton.disabled = manualCount.value.length === 0;
});

document.addEventListener("DOMContentLoaded", reset());