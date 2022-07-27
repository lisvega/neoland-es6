/*Iteración #1: Arrows

Crea una arrow function que tenga dos parametros a y b y 
que por defecto el valor de a = 10 y de b = 5. Haz que la función muestre 
por consola la suma de los dos parametros.


1.2 Ejecuta esta función pasando un solo parametro
*/


let a = 10;
let b = 5;

const suma = (a, b) => {
    console.log(a + b);
};

suma(a, b);

//1.1 Ejecuta esta función sin pasar ningún parametro
const suma1 = () => {
    console.log(a + b);
};

suma1();

//1.2 Ejecuta esta función pasando un solo parametro
const suma2 = (a) => {
    console.log(a + b);
};

suma2(a);


//1.3 Ejecuta esta función pasando dos parametros
const suma3 = (a, b) => {
    console.log(a + b);
};

suma3(a, b);


/*----------------------------------------*/


//Iteración #2: Destructuring




/*2.1 En base al siguiente javascript, crea variables en base a las propiedades 
del objeto usando object destructuring e imprimelas por consola. Cuidado, 
no hace falta hacer destructuring del array, solo del objeto.*/


const game = { title: 'The last us 2', gender: ['action', 'zombie', 'survival'], year: 2020 }


//creamos variables de las key de las que estan dentro del objeto
// y tambien usamos el destructuring
let { title, gender, year } = game;
console.log(title, gender, year);





/*.2.2 En base al siguiente javascript, usa destructuring para crear 3 variables
llamadas fruit1, fruit2 y fruit3, con los valores del array. Posteriormente
imprimelo por consola.*/



const fruits = ['Banana', 'Strawberry', 'Orange'];
// creamos tres variables haciendo referencia a cada elemento dentro del array de fruits
let = [fruit1, fruit2, fruit3] = fruits;
console.log(fruit1, fruit2, fruit3);



//2.3 En base al siguiente javascript, usa destructuring para crear 2
//variables igualandolo a la función e imprimiendolo por consola.

const animalFunction = () => {
    return { nombre: 'Bengal Tiger', race: 'Tiger' }
};

// creamos dos variables para igualarlas a la funcion original 
let { nombre } = animalFunction();
let { race } = animalFunction();

console.log(nombre);
console.log(race);


/*2.4 En base al siguiente javascript, usa destructuring para crear las
variables name y itv con sus respectivos valores. Posteriormente crea
3 variables usando igualmente el destructuring para cada uno de los años
y comprueba que todo esta bien imprimiendolo.*/

const car = { name: 'Mazda 6', itv: [2015, 2011, 2020] }

//1.1 aqui creamos dos variables  para destructurar el array, que hacen referencia a las propiedades del objeto
let { name, itv } = car;

console.log(itv);

// aqui creamos tres variables haciendo referencia a cada uno de los tres años de la itv, y imprimimos por consola (year1.....)
const [year1, year2, year3] = itv;
console.log(year1);






//------------------Iteración #3: Spread Operator---------------------------------------------------------


//3.1 Dado el siguiente array, crea una copia usando spread operators.
const pointsList = [32, 54, 21, 64, 75, 43]

// creamos una nueva varible le hemos llamado copiaPointsList en la cual guardamos la copia del  array original.
const copiaPointsList = [...pointsList]

// aqui lo imprimimos por consola
console.log(copiaPointsList);







//3.2 Dado el siguiente objeto, crea una copia usando spread operators.

//creamos una nueva varible le hemos llamado copiaPointsList en la cual guardamos la copia del objeto original.
const toy = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };

const copytoy = { ...toy }
console.log(copytoy);


//3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
//spread operatos.

const pointsList1 = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54, 87, 99, 65, 32];

//aqui creamos un nuevo  array, la cual la llamamos copylistaNew para juntar los dos array.
const copylistaNew = [...pointsList1, ...pointsLis2];

console.log(copylistaNew)


//3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
//con spread operators.

const toy1 = { name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor' };
const toyUpdate = { lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk'] }

const copyNewObjet = { ...toy1, ...toyUpdate };
console.log(copyNewObjet);



//3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
//pero sin editar el array inicial. De nuevo, usando spread operatos.
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];



// aqui creamos la copia del array original
const copyList = [...colors]
// luego creamos una variable para guardar la 2 posición que es la que vamos a eliminar
const saved = [];

// creamos un bucle for para recorrer la lista del array copiado
for (i = 0; i < copyList.length; i++) {
    // aqui creamos un condicional para seleccionar la posición 2
    if (!(i == 2)) {

        console.log("entro")
        //aqui enviamos a la variable saved la posición 2 que hemos eliminado. 
        saved.push(copyList[i])

    }
}
console.log(saved);



//---------------------------- esta es otra forma de hacerlo-------------------------------
/*const eliminar = copycolors.splice(1,1);

console.log(eliminar)

console.log(copycolors)
//Creamos una función para eliminar posiciones. Splice (X,Y)
X = Posición que queremos quitar
Y = Número de elementos a borrar*/






//Iteración #4: Map

//4.1 Dado el siguiente array, devuelve un array con sus nombres
//utilizando.map().


const users2 = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' }
];


// aqui creamos una variable en la cual mapemos el listado original, para retornar los elementos los cuales
// queremos iterar en este caso el ejercicio nos solicita retornar los nombres(name).
let usersdos = users2.map(elementoIterado => elementoIterado.name)

console.log(usersdos);




/*4.2 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y cambia el nombre a 'Anacleto' en caso de que 
empiece por 'A'*/
const users3 = [
    { id: 1, name: 'Abel' },
    { id: 2, name: 'Julia' },
    { id: 3, name: 'Pedro' },
    { id: 4, name: 'Amanda' }
];


//creamos una variable la llamamos user4 que recorremos sus key, value con el 
//map y le solicitamos que nos retorne aquellas key que sean los nombres. 
let users4 = users3.map(elementoIterado =>
    (elementoIterado.name))

// creamos un contenedor vacio para almacenar aquellos elementos modificados por el forEach que se encuentra abajo
// no se puede recorrer con un forEach los objetos por eso creamos esta nueva let vacia, que recorre la key.
let copiamodificada = [];


//recorremos el array con el forEach y creamos una condición en donde decimos si el primer caracter coincide con la letra 'a' si es 
//igual con el nombre'ANACLETO' luego usamos el metodo push para insertar los elementos recorridos y modificados al array vacio.
users4.forEach((element) => {
    if (element.charAt(0) == 'A') {
        element = 'Anacleto'
        copiamodificada.push(element)
    }
    else { copiamodificada.push(element) }
})

console.log(copiamodificada)




/*4.3 Dado el siguiente array, devuelve una lista que contenga los valores 
de la propiedad .name y añade al valor de .name el string ' (Visitado)
cuando el valor de la propiedad isVisited = true.*/
const cities = [
    { isVisited: true, name: 'Tokyo' },
    { isVisited: false, name: 'Madagascar' },
    { isVisited: true, name: 'Amsterdam' },
    { isVisited: false, name: 'Seul' }
];

let listCities = cities.map(elementoIterado => elementoIterado.name)



//---------------------------------Iteración #5: Filter

// 5.1 Dado el siguiente array, utiliza .filter() para generar un nuevo array con los valores que sean mayor que 18

const ages = [22, 14, 24, 55, 65, 21, 12, 13, 90];

//Creamos nueva constante NewAge para filtrar Age

const newAge = ages.filter(checkAdult);

function checkAdult(age) {
    return age > 18;
}
console.log(newAge)



/*5.2 Dado el siguiente array, utiliza .filter() para generar un nuevo array
con los valores que sean par.*/
const ages1 = [22, 14, 24, 55, 65, 21, 12, 13, 90];

const par = ages1.filter(numeros);

function numeros(agepar) {
    return agepar % 2 == 0;
}

console.log(par);






/*5.3 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que tengan el gameMorePlayed = 'League of Legends'.*/
const streamers = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

// creamos un array con una funcion en la cual le pusimos un metodo filter, con una función en la cual seleccionaba a los elementos
// que contenian a los objetos que tienen la key gameMorePlayed = 'League of Legends'
const leyends = streamers.filter(function (streamers) {
    return streamers.gameMorePlayed == 'League of Legends';
});

console.log(leyends);




/*5.4 Dado el siguiente array, utiliza .filter() para generar un nuevo array 
con los streamers que incluyan el caracter 'u' en su propiedad .name. Recomendamos 
usar la funcion .includes() para la comprobación.*/
const streamers1 = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];


const u = streamers1.filter(
    function (streamers1) {
        return streamers1.name.includes("u");
    }
)
console.log(u)






/*5.5 utiliza .filter() para generar un nuevo array con los streamers que incluyan 
el caracter 'Legends' en su propiedad .gameMorePlayed. Recomendamos usar la funcion 
.includes() para la comprobación.

Además, pon el valor de la propiedad .gameMorePlayed a MAYUSCULAS cuando 
.age sea mayor que 35.*/


/*se creo un array en donde se utilizo el metodo filter, luego se creo otra función dentro del array, para recopilar aquellos 
objetos que incluian el valor legends, una vez obtenidos estos valores para cumplir con lo solicitado en el ejercicio 
se creó una condición
donde se indica que si los elementos seleccionados son mayores a 35, tenia que cambiarle su key(gameMorePlayed a MAYUSCULAS).
pusimos mayusculas a traves del metodo toUpperCase*/

const legends = streamers1.filter((streamers1) => {
    const returnLegends = streamers1.gameMorePlayed.toLowerCase().includes("legends");
    if (returnLegends && streamers1.age > 35) {
        streamers1.gameMorePlayed = streamers1.gameMorePlayed.toUpperCase();
    } return returnLegends;
});
console.log(legends);











/*5.6 Dado el siguiente html y javascript, utiliza.filter() para mostrar por consola 
los streamers que incluyan la palabra introducida en el input .De esta forma, si 
introduzco 'Ru' me deberia de mostrar solo el streamer 'Rubius'.Si
introduzco 'i', me deberia de mostrar el streamer 'Rubius' e 'Ibai'.*/

const streamers2 = [
    { name: 'Rubius', age: 32, gameMorePlayed: 'Minecraft' },
    { name: 'Ibai', age: 25, gameMorePlayed: 'League of Legends' },
    { name: 'Reven', age: 43, gameMorePlayed: 'League of Legends' },
    { name: 'AuronPlay', age: 33, gameMorePlayed: 'Among Us' }
];

/* creamos una funcion para enlazar js con html en relación al input. con document.querySelector  */
const dataFunction1 = document.querySelector('[data-function="toFilterStreamers"]');

// cramos la función toFilterStreamers vacia para luego insertar otra función la cual le llamamoss resul, y le aplicamos 
// el metodo filter para filtrar la información de la columna name que se encuentra en el streamer2, que incluya la 
// función del input dataFunction
const toFilterStreamers = () => {
    const resul = streamers2.filter((element) =>
        element.name.includes(dataFunction1.value)
    );

    console.log(resul);
}



// creamos un evento que escuche a nuestro input llamando al objetivo toFilterStreamers de nuestra funcion vacia
dataFunction.addEventListener('input', toFilterStreamers)
// esto es un buscador real como google.




