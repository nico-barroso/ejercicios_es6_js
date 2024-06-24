// 5. Dado el siguiente javascript, utiliza .filter() para mostrar por consola
// los streamers que incluyan la palabra introducida en el input. De esta forma, si
// introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si
// introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
const streamers = [
  { name: "Rubius", age: 32, gameMorePlayed: "Minecraft" },
  { name: "Ibai", age: 25, gameMorePlayed: "League of Legends" },
  { name: "Reven", age: 43, gameMorePlayed: "League of Legends" },
  { name: "AuronPlay", age: 33, gameMorePlayed: "Among Us" },
];

function streamerFilter(streamers) {
  const input = document.querySelector("input");
  input.addEventListener("keypress", (event) => {
    if (event.key === "Enter") {
      const lowerResult = event.target.value.toLowerCase();
      //Nos aseguramos que los resultados coincidan convirtiendo ambos strings, tando el del input
      //como el del objeto a minúsculas y lo filtramos.
      const strFiltered = streamers.filter((streamer) =>
        streamer.name.toLowerCase().includes(lowerResult)
      );
      //Si pasamos el strFiltered nos devolverá todo el objeto, pero como solo queremos el nombre del streamer,
      //mapeamos el resultado y lo guardamos en una nueva variable para que sea accesible y podamos controlar errores de tipo.

      const strMap = strFiltered.map((streamer) => streamer.name);

      if (strMap.length === 0) {
        console.log("Introduzca un nombre válido");
      }
      console.log(strMap);
    }
  });
}
streamerFilter(streamers);
