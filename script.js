console.log("Hello wilders!");

const firstValue = prompt("Premier nombre ?");
const operator = prompt("Opérateur ?");
const secondValue = prompt("Deuxième nombre ?");
let result;

if (operator === "+") {
    result = parseInt(firstValue) + parseInt(secondValue);
} else if (operator === "-") {
    result = parseInt(firstValue) - parseInt(secondValue);
} else if (operator === "*") {
    result = parseInt(firstValue) * parseInt(secondValue);
} else if (operator === "/") {
    result = parseInt(firstValue) / parseInt(secondValue);
}  else {
    result = "Opération inconnue";
}

console.log(result);
console.log("Bye wilders!");