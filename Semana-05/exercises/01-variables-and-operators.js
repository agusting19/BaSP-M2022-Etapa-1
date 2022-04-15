//1. Variables y Operadores
/*
a. Crear dos variables numéricas y utilizar el operador suma para guardar el valor de la
suma de ambos números en una 3er variable.
*/

var num1 = 9, num2 = 5, num3;

num3 = num1 + num2;
console.log('The sum of the variables is equal to:' + num3);

/*
b. Crear dos variables de tipo String y concatenarlas guardando el resultado en una 3er
variable.
*/

var firstName = 'Agustin', lastName = 'Gomez', fullName;

fullName = firstName + ' ' + lastName;
console.log('My full name is ' + fullName);

/*
c. Crear dos variables de tipo String y sumar el largo de cada variable (cantidad de letras
del string) guardando el resultado de la suma en una 3er variable (utilizar length). 
*/

var word1 = 'Radium', word2 = 'Rocket', wordsLength;

wordsLength = word1.length + word2.length;
console.log('The length of the two words is: ' + wordsLength);
