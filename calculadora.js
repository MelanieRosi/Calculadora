// en este nuevo archivo deberemos requerir los cuatros archivos hechos con anterioridad

let sumar = require('./sumar');
let restar = require('./restar'); 
let multiplicar = require('./multiplicar');
let dividir = require('./dividir');

console.log (sumar(10,5));
console.log (restar(23,3));

console.log (multiplicar(3,2));
console.log (multiplicar(4,0));

console.log(dividir(30,5));
console.log(dividir(0,2)); 

/* Preguntas:
a- Si hubiesemos programado todo en un mismo archivo probablemente llegariamos al mismo final pero con más dificultad por la cantidad de información en el archivo y dificultad al momento de encontrar errores.

b- El mejor camino es generar distintos archivos y requerirlos en uno solo ya que, a medida que avancemos en el contenido y nuestros codigos crezcan, es una buena practica mantener el orden, así los errores no crean un efecto 'bola de nieve' y las ejecuciones son más agiles.

c- Si, ya que es una metodologia muy practica. 
*/