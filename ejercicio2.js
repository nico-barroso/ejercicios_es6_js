// 2.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43];

const newPointlist = [...pointsList];
console.log("2.1 ", newPointlist);

// 2.2 Dado el siguiente objeto, crea una copia usando spread operators.
const toy1 = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };

const toy1Copy = { ...toy1 };
console.log("2.2. ", toy1Copy);

// 2.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando
// spread operatos.
const pointsList2 = [32, 54, 21, 64, 75, 43];
const pointsLis3 = [54, 87, 99, 65, 32];

const newPointList = [...pointsList2, ...pointsLis3];
console.log("2.3. ", newPointList);

// 2.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos
// con spread operators.
const toy2 = { name: "Bus laiyiar", date: "20-30-1995", color: "multicolor" };
const toyUpdate = { lights: "rgb", power: ["Volar like a dragon", "MoonWalk"] };

const newToyObject = { ...toy2, ...toyUpdate };
console.log("2.4. ", newToyObject);

// 2.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2
// pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ["rojo", "azul", "amarillo", "verde", "naranja"];

const updatedColors = [...colors.slice(0, 2), ...colors.slice(3)];
console.log("2.5. ", updatedColors);
