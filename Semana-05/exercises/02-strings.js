//2. Strings
console.log('Strings exercises');
/* 
a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en
mayúscula (utilizar toUpperCase).
*/
console.log('Exercise 02.a');

var so = 'ubuntu linux';

console.log(so.toUpperCase());

/*
b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar
substring).
*/
console.log('Exercise 02.b');

var explorer = 'mozilla firefox';

console.log(explorer.substring(0, 5));

/*
c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar
substring).
*/
console.log('Exercise 02.c');

var favCoffe = 'cappuccino';

console.log(favCoffe.substring(7,10));

/*
d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en
una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
*/
console.log('Exercise 02.d');

var language = 'javascript', newLanguage;

newLanguage = language.substring(0,1).toUpperCase() + language.substring(1).toLowerCase();
console.log(newLanguage);

/*
e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar
indexOf).
*/
console.log('Exercise 02.e');

var randomText = 'This is a random text', blank;

blank = randomText.indexOf(' ');
console.log('The first blank space is in position: ' + (blank + 1));

/*
f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún
espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un
nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás
letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador+).
*/
console.log('Exercise 02.f');

var twoWords = 'goniometric circumference', word1, word2;

blankSpace = twoWords.indexOf(' ');
word1 = twoWords.substring(0,1).toUpperCase() + twoWords.substring(1,blankSpace);
word2 = twoWords.substring(blankSpace+1, blankSpace+2).toUpperCase() + twoWords.substring(blankSpace+2);

console.log(word1 + ' ' + word2);
//Lo cambie para ocupar menos variables y lineas de codigo, aunque entiendo que pierdo legibilidad
