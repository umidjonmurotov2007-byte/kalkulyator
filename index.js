const display = document.getElementById("display");

function append(value) {
    display.value += value;
}

function clearDisplay() {
    display.value = "";
}

function backspace() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let expression = display.value;

        expression = expression.replace(/÷/g, "/");
        expression = expression.replace(/×/g, "*");

        display.value = eval(expression);
    } catch {
        display.value = "Error";
    }
}

document.addEventListener("keydown", (e) => {

    if ("0123456789+-*/.%".includes(e.key)) {
        append(e.key);
    }

    if (e.key === "Enter") {
        calculate();
    }

    if (e.key === "Backspace") {
        backspace();
    }

    if (e.key === "Escape") {
        clearDisplay();
    }
});