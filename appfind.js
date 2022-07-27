
//Iteración #6: Find
//6.1 Dado el siguiente array, usa .find() para econtrar el número 100.
const numbers = [32, 21, 63, 95, 100, 67, 43];


const found = numbers.find(element => element === 100);
console.log(found)


//6.2 Dado el siguiente array, usa .find() para econtrar la pelicula del año 2010.
const movies = [
    { title: 'Madagascar', stars: 4.5, date: 2015 },
    { title: 'Origen', stars: 5, date: 2010 },
    { title: 'Your Name', stars: 5, date: 2016 }
];

const moviList = movies.find(element => element.date == 2010);

console.log(moviList)



/*6.3 Dado el siguiente javascript, usa .find() para econtrar el alien de nombre 
'Cucushumushu' y la mutación 'Porompompero'. Una vez que los encuentres, usa 
spread operator para fusionarlos teniendo en cuenta que el objeto de la mutación 
lo queremos meter en la propiedad .mutation del objeto fusionado.*/
const aliens = [
    { name: 'Zalamero', planet: 'Eden', age: 4029 },
    { name: 'Paktu', planet: 'Andromeda', age: 32 },
    { name: 'Cucushumushu', planet: 'Marte', age: 503021 }
];
const mutations = [
    { name: 'Porompompero', description: 'Hace que el alien pueda adquirir la habilidad de tocar el tambor' },
    { name: 'Fly me to the moon', description: 'Permite volar, solo y exclusivamente a la luna' },
    { name: 'Andando que es gerundio', description: 'Invoca a un señor mayor como Personal Trainer' }
];


// creamos una variable usando .find para encontrar en el listado de objetos el nombre indicado por el ejercicio
const foundAliens = aliens.find(element => element.name == 'Cucushumushu')
console.log(foundAliens)

// creamos una variable usando .find para encontrar en el listado de objetos el nombre indicado por el ejercicio
const foundMutations = mutations.find(element => element.name == 'Porompompero')
console.log(foundMutations)

//creamos una variable para fusionar a las dos variables.
let fusion = { ...foundAliens, foundMutations }
console.log(fusion)



/*----------------Iteración #7: Reduce--------------------------------
7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
los alumnos usando la función .reduce().*/

const exams = [
    { name: 'Yuyu Cabeza Crack', score: 5 },
    { name: 'Maria Aranda Jimenez', score: 1 },
    { name: 'Cristóbal Martínez Lorenzo', score: 6 },
    { name: 'Mercedez Regrera Brito', score: 7 },
    { name: 'Pamela Anderson', score: 3 },
    { name: 'Enrique Perez Lijó', score: 6 },
    { name: 'Pedro Benitez Pacheco', score: 8 },
    { name: 'Ayumi Hamasaki', score: 4 },
    { name: 'Robert Kiyosaki', score: 2 },
    { name: 'Keanu Reeves', score: 10 }
];

// aqui creeamos una función sumar los score o notas del array exams atravez de la función reduce
const total = exams.reduce(function (acumulator, exams) {
    return acumulator + exams.score;
}, 0
);

console.log(total)








/*7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los
alumnos que esten aprobados usando la función .reduce().*/

const aprobados = exams.filter(exam => exam.score > 5);

console.log(aprobados)

// una vez obtenisdos aquellos notas aprobados con el metodo filter cramos una variable con la funcion reduce para sumar

const sumaAprobados = aprobados.reduce((acc, aprobados) => acc + aprobados.score, 0);

console.log(sumaAprobados)





//7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().


//creamos una variable con la función .reduce, para recorrer y sumar todos los score totales
const promedio = exams.reduce(function (acumulator, exams) {

    return acumulator + exams.score;
}, 0
);
console.log(promedio)

// aqui creamos una variable para sacar el promedio final
const promedioFinal = promedio / exams.length
console.log(promedioFinal)




//**Iteración #8: Bonus**//
/*6.1 Dado el siguiente javascript filtra los videojuegos por gender = 'RPG' usando 
.filter() y usa .reduce() para conseguir la media de sus .score. 
La función .find() también podría ayudarte para el contrar el genero 'RPG' en el 
array .gender.*/

const videogames = [
    { name: 'Final Fantasy VII', genders: ['RPG'], score: 9.5 },
    { name: 'Assasins Creed Valhala', genders: ['Aventura', 'RPG'], score: 4.5 },
    { name: 'The last of Us 2', genders: ['Acción', 'Aventura'], score: 9.8 },
    { name: 'Super Mario Bros', genders: ['Plataforma'], score: 8.5 },
    { name: 'Genshin Impact', genders: ['RPG', 'Aventura'], score: 7.5 },
    { name: 'Legend of Zelda: Breath of the wild', genders: ['RPG', 'La cosa más puto bonita que he visto nunca'], score: 10 },
]

// creamos una nueva variable igualada a su variable original, para filtar de la parte del genero al que tenga incluido 'RPG'
const game = videogames.filter(element => element.genders.includes('RPG'));

console.log(game);

//creamos otra variable usando .reduce para conseguir la media
const media = game.reduce((acc, play) => acc + play.score / game.length, 0);

console.log(media)


