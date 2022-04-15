//2. Strings
/* 
a. Crear una variable de tipo string con al menos 10 caracteres y convertir todo el texto en
mayúscula (utilizar toUpperCase).
*/

var so = 'ubuntu linux';

console.log(so.toUpperCase());

/*
b. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los primeros 5 caracteres guardando el resultado en una nueva variable (utilizar
substring).
*/

var explorer = 'mozilla firefox', first;

first = explorer.substring(0, 5);
console.log(first);

/*
c. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con los últimos 3 caracteres guardando el resultado en una nueva variable (utilizar
substring).
*/

var favCoffe = 'cappuccino';

last = favCoffe.substring(7,10);
console.log(last);

/*
d. Crear una variable de tipo string con al menos 10 caracteres y generar un nuevo string
con la primera letra en mayúscula y las demás en minúscula. Guardar el resultado en
una nueva variable (utilizar substring, toUpperCase, toLowerCase y el operador +).
*/

var language = 'javascript', firstLetter, newLanguage;

firstLetter = language.substring(0,1);
newLanguage = firstLetter.toUpperCase() + language.substring(1);
console.log(newLanguage);

/*
e. Crear una variable de tipo string con al menos 10 caracteres y algún espacio en blanco.
Encontrar la posición del primer espacio en blanco y guardarla en una variable (utilizar
indexOf).
*/

var randomText = 'This is a random text', blank;

blank = randomText.indexOf(' ');
console.log('The first blank space is in position: ' + blank);

/*
f. Crear una variable de tipo string con al menos 2 palabras largas (10 caracteres y algún
espacio entre medio). Utilizar los métodos de los ejercicios anteriores para generar un
nuevo string que tenga la primera letra de ambas palabras en mayúscula y las demás
letras en minúscula (utilizar indexOf, substring, toUpperCase, toLowerCase y el operador+).
*/

var twoWords = 'goniometric circumference', letter1, letter2, word1, word2;

blankSpace = twoWords.indexOf(' ');
letter1 = twoWords.substring(0,1);
word1 = twoWords.substring(1,blankSpace);
blankSpace += 1;
word2 = twoWords.substring(blankSpace);
letter2 = word2.substring(0,1);

letter1 = letter1.toUpperCase();
letter2 = letter2.toUpperCase();

twoWords = letter1 + word1 + ' ' + letter2 + word2.substring(1);

console.log(twoWords);
