const counters = document.querySelectorAll(".counter");
let count = 0;
const manualCount = document.getElementById("setCount");

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
    changeCount(manualCount.value);
    manualCount.value = "";
}

document.addEventListener("DOMContentLoaded", reset());