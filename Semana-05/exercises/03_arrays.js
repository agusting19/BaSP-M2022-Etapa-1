//3. Arrays
console.log('Array exercises');
/*
a. Dado el siguiente array: ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"] mostrar por consola los
meses 5 y 11 (utilizar console.log).
*/
console.log('Exercise 03.a');

var months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(months[5]);
console.log(months[11]);

/*
b. Ordenar el array de meses alfabéticamente y mostrarlo por consola (utilizar sort).
*/
console.log('Exercise 03.b');

months.sort();
console.log(months);

/*
c. Agregar un elemento al principio y al final del array (utilizar unshift y push).
*/
console.log('Exercise 03.c');

months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

months.unshift('Winter');
months.push('Summer');
console.log(months);


/*
d. Quitar un elemento del principio y del final del array (utilizar shift y pop).
*/
console.log('Exercise 03.d');

months.shift();
months.pop();
console.log(months);

/*
e. Invertir el orden del array (utilizar reverse).
*/
console.log('Exercise 03.e');

months.reverse();
console.log(months);

/*
f. Unir todos los elementos del array en un único string donde cada mes este separado por
un guión - (utilizar join).
*/
console.log('Exercise 03.f');

months = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio",
"Agosto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];

console.log(months.join('-'));

/*
g. Crear una copia del array de meses que contenga desde Mayo hasta Noviembre (utilizar
slice).
*/
console.log('Exercise 03.g');

montsCopy = months.slice(4, 11);
console.log(montsCopy);
