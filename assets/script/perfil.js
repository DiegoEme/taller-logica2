const teclado = {
  displayValue: "",
};

function inputDigit(digit) {
  const { displayValue } = teclado;
  teclado.displayValue = displayValue == "0" ? digit : displayValue + digit;
}

function updateDisplay() {
  const display = document.querySelector(".screen");
  display.value = teclado.displayValue;
}

updateDisplay();

const keys = document.querySelector("#keyboard");
keys.addEventListener("click", function teclas(event) {
  //Acceder a la tecla que se clickea
  const cualTecla = event.target;

  //Revisar si el elemento que se cliquea es un boton
  //Si no, salir de la función

  if (!cualTecla.matches("button")) {
    return;
  }
  if (cualTecla.classList.contains("btn")) {
    console.log("boton", cualTecla.value);
  }
  if (cualTecla.classList.contains("borrar")) {
    console.log("borrar", cualTecla.value);
  }
  inputDigit(cualTecla.value);
  updateDisplay();
});

function agregar() {
  let input = document.getElementById("screen");
  var e = document.createElement("div");
  e.innerText = input.value;
  e.className = "item";
  document.getElementById("lista").appendChild(e);
  input.value = "";
}
