
let num1 = parseInt(prompt("Ingresa un número "));
let num2 = parseInt(prompt("Ingresa otro número (diferente al anterior)"));
let num3 = parseInt(prompt("Ingresa otro número más (direrente a los anteriores)"));

if (num1 === num2 && num2 === num3) {
    console.log ("¡Los números son iguales!")
    alert("¡Los números son iguales!");
}

//Array con los números ingresados
numerosIngresados = [num1, num2, num3];

//Orden descendente de numeros ingresados
let numDescendentes = [...numerosIngresados].sort((a, b) => b - a);

//Orden ascendente de numeros ingesados
let numAscendentes = [...numerosIngresados].sort((a, b) => a - b);

//Clasificación de números
let numMayor = numDescendentes[0];
let numMedio = numDescendentes[1];
let numMenor = numDescendentes[2];

console.log("Números en orden descendente: " + numDescendentes);
console.log("Números en orden ascendente: " + numAscendentes);
console.log("El número menor es: " + numMenor);
console.log("El número de en medio es: " + numMedio);
console.log("El número mayor es: " + numMayor);

let contenedorOrden = document.getElementById("resultado")

contenedorOrden. innerHTML = `
  <p>Orden descendente: ${numDescendentes.join(", ")}</p>
  <p>Orden ascendente: ${numAscendentes.join(", ")}</p>
  `;

let contenedorClasificacion = document.getElementById("clasificacion")

contenedorClasificacion.innerHTML = `
  <p>El número menor es: ${numMenor}</p>
  <p>El número de en medio es: ${numMedio}</p>
  <p>El número mayor es: ${numMayor}</p>
  `;




