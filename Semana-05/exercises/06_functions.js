//6. Funciones
/*
a. Crear una función suma que reciba dos valores numéricos y retorne el resultado. Ejecutar
la función y guardar el resultado en una variable, mostrando el valor de dicha variable en
la consola del navegador.
*/

function suma(num1, num2){
    return num1 + num2;
}

var num1 = 5, num2 = 12, sum;

console.log('Exercise 6.a')
sum = suma(num1, num2);
console.log(sum);

/*
b. A la función suma anterior, agregarle una validación para controlar si alguno de los
parámetros no es un número, mostrar una alerta aclarando que uno de los parámetros
tiene error y retornar el valor NaN como resultado.
*/

function suma(num1, num2){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        return num1 + num2;
    } else{
        console.log('They are not numbers')
        return NaN;
    }
}

var num1 = 'a', num2 = 12, sum;

console.log('Exercise 6.b')
sum = suma(num1, num2);
console.log(sum);


/*
c. Crear una función validate integer que reciba un número como parámetro y devuelva
verdadero si es un número entero.
*/

function validateInteger(value){
    if(value % 1 == 0){
        return true;
    } else{
        return false;
    }
}

console.log('Exercise 6.c')
var value = 10.5;
console.log(validateInteger(value));

/*
d. A la función suma del ejercicio 6b) agregarle una llamada que valide que los números
sean enteros. En caso que haya decimales mostrar un alerta con el error y retorna el
número convertido a entero (redondeado).
*/

function suma(num1, num2){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        if(num1 % 1 == 0 && num2 % 1 == 0){
            return num1 + num2;
        }
        console.log('Error, numbers are not int');
            sum = (num1 + num2) - ((num1 + num2) % 1)
            return sum;
    } else{
        console.log('They are not numbers')
        return NaN;
    }
}

var num1 = 10, num2 = 18.4, num3, sum;

console.log('Exercise 6.d')
num3 = suma(num1, num2);
console.log(num3);

/*
e. Convertir la validación del ejercicio 6d) en una función separada y llamarla dentro de la
función suma probando que todo siga funcionando igual.
*/

function validateInteger(value){
    if(value % 1 == 0){
        return true;
    } else{
        return false;
    }
}

function suma(num1, num2){
    if(typeof num1 === 'number' && typeof num2 === 'number'){
        if(validateInteger(num1) && validateInteger(num2)){
            return num1 + num2;
        } else{
            console.log('Error, numbers are not int');
            sum = (num1 + num2) - ((num1 + num2) % 1)
            return sum;
        }
    } else{
        console.log('They are not numbers')
        return NaN;
    }
}

var num1 = 10, num2 = 16.3, num3, sum;

console.log('Exercise 6.e')
num3 = suma(num1, num2);
console.log(num3);
