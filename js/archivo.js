// el usuario elige que producto quiere
let producto = prompt(
  "quieres comprar una camisa ($1500) o un pantalon ($2000)?"
);

// costo total del producto
let costo = 0;

if (producto == "camisa") {
  costo = costo + 1500;
  alert(`el costo del producto es: $${costo}`);
} else {
  costo = costo + 2000;
  alert(`el costo del producto es: $${costo}`);
}

// DOM
let texto = document.createElement("h3");
texto.innerHTML =
  "decidiste comprar: " + producto + ", por el precio de: " + costo;
document.body.append(texto);

// el usuario elige la forma de pago
let pago = prompt(
  "queres abonar en un pago unico (+0%), en 3 cuotas (+10%) o en 6 cuotas (+20%)"
);

// cuotas
let cuotas = [3, 6];
let valorCuotas = 0;

if (pago == "pago unico") {
  texto.innerHTML =
    "Tu producto final es: " + producto + ", cuyo costo total son : $" + costo;
} else if (pago == "3 cuotas") {
  cuotas.pop();
  costo = costo * 1.1;
  valorCuotas = (valorCuotas + costo) / cuotas;

  costo = costo.toFixed(2);
  valorCuotas = valorCuotas.toFixed(2);

  // DOM
  let h1 = document.createElement("h1");
  texto.innerHTML =
    "Tu producto final es: " +
    producto +
    ", cuyo costo total son : $" +
    costo +
    ", que deberas abonar en: 3 cuotas de: $" +
    valorCuotas;
  document.body.append(texto);
} else {
  cuotas.shift();
  costo = costo * 1.2;
  valorCuotas = (valorCuotas + costo) / cuotas;

  costo = costo.toFixed(2);
  valorCuotas = valorCuotas.toFixed(2);

  // DOM
  let h1 = document.createElement("h1");
  texto.innerHTML =
    "Tu producto final es: " +
    producto +
    ", cuyo costo total son : $" +
    costo +
    ", que deberas abonar en: 6 cuotas de: $" +
    valorCuotas;
  document.body.append(texto);
}

// DOM
let borrar = document.getElementById("borrar");
borrar.remove();
