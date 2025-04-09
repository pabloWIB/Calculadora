let display = document.getElementById("display");
const displayHistorial = document.getElementById("historial");

function appendToDisplay(input) {
    display.value += input;
}

function clearDisplay() {
    display.value = "";
}

function borrar() {
    display.value = display.value.slice(0, -1);
}

function calculate() {
    try {
        let arrayValue = display.value;
        let result = eval(display.value);
        display.value = result;
        displayHistorial.innerHTML += `<li>${arrayValue} = ${result}</li>`;
        displayHistorial.innerHTML += `<p>-------------------------------------</p>`;
    } catch {
        display.value = "Error";
    }
}


function limpiarHistorial() {
    displayHistorial.innerHTML = "";
}

document.addEventListener('keydown', function (event) {
    const allowedKeys = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', '+', '-', '*', '/', '.'];

    if (allowedKeys.includes(event.key)) {
        appendToDisplay(event.key);
    } else if (event.key === 'Enter') {
        calculate();
    } else if (event.key === 'Backspace') {
        borrar();
    } else if (event.key === 'Escape') {
        clearDisplay();
    }
});