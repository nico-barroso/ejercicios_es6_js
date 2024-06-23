// 4.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean mayor que 18
const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const filteredAge = ages.filter((adult) => adult > 18);
console.log(filteredAge);

// 4.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los valores que sean par.
const ages2 = [22, 14, 24, 55, 65, 21, 12, 13, 90];
const evenAges = ages2.filter((adult) => adult % 2 == 0);
console.log(evenAges);

// 4.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que tengan el gameMorePlayed = 'League of Legends'.
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];
const filteredStreamers = streamers.filter((streamer) => {
  if (streamer.gameMorePlayed === "League of Legends") {
    return {
      name: streamer.name,
      age: streamer.age,
      gamemMorePlayed: streamer.gameMorePlayed,
    };
  }
});
console.log(filteredStreamers);

// 4.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array
// con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos
// usar la funcion .includes() para la comprobación.
const streamers2 = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];
const streamers2Filtered = streamers2.filter((streamer) => {
  if (streamer.name.includes("u")) {
    return {
      name: streamer.name,
      age: streamer.age,
      gameMorePlayed: streamer.gameMorePlayed,
    };
  }
});
console.log(streamers2Filtered);

// 4.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan
// el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion
// .includes() para la comprobación.
// Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando
// .age sea mayor que 35.
const streamersLegendsFilter = streamers2.filter((streamer) => {
  if (streamer.gameMorePlayed.includes("Legends")) {
    if (streamer.age > 35) {
      streamer.gameMorePlayed = streamer.gameMorePlayed.toUpperCase();
    }
    //?El filter espera siempre que se devuelva un valor booleano, así que al cumplirse la primera condición,
    //?devolvemos un true en el callback para que pueda aplicar el filtro al siguiente valor (si este se cumple).
    return true;
  }
});

console.log(streamersLegendsFilter);
