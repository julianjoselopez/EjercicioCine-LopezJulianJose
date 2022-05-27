btnEnviar.addEventListener("click", () => {
let cantidadSillas: number = Number(prompt(`Ingrese la cantidad de butacas: `));
let cine: Boolean[] = new Array(cantidadSillas);
let indice: number;
let nroButaca: number;
for (indice = 0; indice < cantidadSillas; indice++) {
  nroButaca = indice + 1;
  cine[indice] = Boolean(
    prompt("¿la butaca " + nroButaca +" esta ocupada? vacio =no "));
}

let vacias: number = 0;
let indice: number;
for (indice = 0; indice < cantidadSillas; indice++) {
  if (cine[indice] == false) {
    vacias++;
  } 
}
console.log(
  `Hay ${vacias} sillas vacias`
);
