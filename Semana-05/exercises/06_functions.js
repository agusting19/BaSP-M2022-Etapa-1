//6. Funciones
console.log('Functions exercises');
/*
a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar
la función y guardar el resultado en una variable, mostrando el valor de dicha variable en
la consola del navegador.
*/
console.log('Exercise 6.a');

function suma1(num1, num2){
    return num1 + num2;
}

var num1 = 5, num2 = 12;

console.log(suma1(num1, num2));

/*
b. A la función suma anterior, agregarle una validación para controlar si alguno de los
parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros
tiene error y retornar el valor NaN como resultado.
*/
console.log('Exercise 6.b');

function suma2(num1, num2){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    } else{
        console.log('They are not numbers')
        return NaN;
    }
}

var num1 = 'a', num2 = 12;

console.log(suma2(num1, num2));


/*
c. Crear una función validate integer que reciba un número como parámetro y devuelva
verdadero si es un número entero.
*/
console.log('Exercise 6.c');

function validateInteger(value){
    if(value % 1 == 0){
        return true;
    } else{
        return false;
    }
}

var value = 10.5;
console.log(validateInteger(value));

/*
d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números
sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el
número convertido a entero (redondeado).
*/
console.log('Exercise 6.d');

function suma3(num1, num2){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        if(num1 % 1 == 0 && num2 % 1 == 0){
            return num1 + num2;
        }
        alert('Error, numbers are not int');
            return (num1 + num2) - ((num1 + num2) % 1);
    } else{
        console.log('They are not numbers');
        return NaN;
    }
}

var num1 = 10, num2 = 18.4;

console.log(suma3(num1, num2));

/*
e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la
función suma probando que todo siga funcionando igual.
*/
console.log('Exercise 6.e');

function validateInteger(value){
    if(value % 1 == 0){
        return true;
    } else{
        return false;
    }
}

function suma4(num1, num2){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        if(validateInteger(num1) && validateInteger(num2)){
            return num1 + num2;
        } else{
            console.log('Error, numbers are not int');
            return (num1 + num2) - ((num1 + num2) % 1);
        }
    } else{
        console.log('They are not numbers');
        return NaN;
    }
}

var num1 = 10, num2 = 16.3;

console.log(suma4(num1, num2));
