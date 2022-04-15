//4. If Else
/*
a. Crear un número aleatorio entre 0 y 1 utilizando la función Math.random(), si el valor es
mayor o igual que 0,5 mostrar una alerta con el mensaje “Greater than 0,5” y sino un
alerta con el mensaje “Lower than 0,5”.
*/

if((Math.random()) >= 0.5){
    console.log('Greater than 0,5');
} else{
    console.log('Lower than 0,5');
}

/*
b. Crear una variable “Age” que contenga un número entero entre 0 y 100 y muestre los
siguientes mensajes de alerta:
i. “Bebe” si la edad es menor a 2 años;
ii. “Niño” si la edad es entre 2 y 12 años;
iii. “Adolescente” entre 13 y 19 años;
iv. “Joven” entre 20 y 30 años;
v. “Adulto” entre 31 y 60 años;
vi. “Adulto mayor” entre 61 y 75 años;
vii. “Anciano” si es mayor a 75 años.
*/

var Age = 23;

if(Age < 2){
    console.log('Baby');
} else if(Age <= 12){
    console.log('Kid');
} else if(Age <= 19){
    console.log('Adolescent');
} else if(Age <= 30){
    console.log('Young');
} else if(Age <= 60){
    console.log('Adult');
} else if(Age <= 75){
    console.log('Elderly');
} else{
    console.log('Old Man');
}
