const display = document.getElementById("display");
const resultadoDiv = document.getElementById("resultado");

function agregar(valor) {
    // Inserta el valor en el input
    display.value += valor;
}

function borrar() {
    display.value = "";
    resultadoDiv.textContent = "";
}

function calcular() {
    try {
        
        const valor = display.value.trim();
        if (valor === "") {
            display.value = "";
            return;
        }
        const resultado = math.evaluate(valor);
        display.value = String(resultado);
        
        resultadoDiv.textContent = "";
    } catch (error) {
        display.value = "Error";
        console.error(error);
    }
}

function derivar() {
    try {
        const expr = display.value.trim();
        if (expr === "") {
            resultadoDiv.textContent = "Ingrese una expresión en x";
            return;
        }
        
        const derivada = math.derivative(expr, 'x');
        
        resultadoDiv.textContent = derivada.toString();
    } catch (error) {
        resultadoDiv.textContent = "Error";
        console.error(error);
    }
}
