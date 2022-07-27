/*5.7 Dado el siguiente html y javascript, utiliza .filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input. De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'. Si introduzco 'i', 
me deberia de mostrar el streamer 'Rubius' e 'Ibai'.
En este caso, muestra solo los streamers filtrados cuando hagamos click en el button.*/

const streamers2 = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];




/*creamos una funcion para enlazar js con html en relación al input. con document.querySelector*/
const dataFunction = document.querySelector('[data-function="toFilterStreamers"]');
// crramos una funcion para enlazar el boton del html con el archivo del app
const button = document.querySelector('[data-function="toShowFilterStreamers"]')
const toShowFilterStreamers = () => {
    const resul = streamers2.filter((element) =>
        element.name.includes(dataFunction.value)
    );

    console.log(resul);
}

button.addEventListener("click", toShowFilterStreamers)



