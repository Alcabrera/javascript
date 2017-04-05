
	document.getElementById('lanzar_alerta').onclick=function(){
		alert('¡Hola mundo!');
	}
/*EXISTEN DOS FORMAS DISTINTAS DE DECLARAR VARIABLES:
	var a=1;
	b= 2;
SI NO SE USAN DENTRO DE UNA FUNCIÓN, NO HAY DIFERENCIA ENTRE UNA Y OTRA
SI SE DECLARA CON VAR DENTRO DE UNA FUNCIÓN, LA VARIABLE SERÁ SOLO DE ÁMBITO LOCAL, SOLO EXISTE DENTRO DE DICHA FUNCIÓN
SI SE DECLARA DENTRO DE LA FUNCIÓN SIN USAR VARM JS BUSCARÁ ESA VARIABLE, PRIMERO EN EL ÁMBITO DE LA FUNCIÓN Y LUEGO HASTA EL ÁMBITO GLOBAL. SI NO LA ENCUENTRA, LA CREA
*/
//AMBITO GLOBAL
var a=1;
 b=2;

function sumar(){
	//AMBITO LOCAL, DENTRO DE LA FUNCIÓN
	var a=4;
	 b=6;
	resultado=a+b;

}
sumar();

console.log('a= '+a);
console.log('b='+b);
console.log('resultado=' +resultado);


var valor= prompt('Introduce tu nombre:');
console.log(valor);
	
	alert("Hola, "+valor);

var valor1= prompt('Introduce el valor 1:');
var valor2= prompt('Introduce el valor 2:');

	alert("A ver "+valor+" .El resultado de tu multiplicación es= "+ valor1*valor2);

function pruebaParametros(parametro1, parametro2){
	console.log(parametro1);
	console.log(parametro2);
}
pruebaParametros("Hola", "Adios");
pruebaParametros("Uno", "Dos","Tres");
pruebaParametros("abdce");

function presentador(name, age){
	console.log("Soy "+name+" y tengo "+age+" años.");
}
	var edad= prompt('Edad:');
	var nombre= prompt('Nombre:');

	presentador(nombre, edad);
function presentador2(name, age){
	alert("Soy "+name+" y tengo "+age+" años.");
}
	presentador2(nombre,edad);

function impuestos(precio, impuesto){
	var precioTotal= (precio*impuesto/100)+parseInt(precio);
	alert("El total es= "+precioTotal);
	console.log("El precio del producto es "+precio+" sin impuestos y "+precioTotal+" con el IVA incluido");
}
	var precio=prompt("Precio del producto:");
	var impuesto=prompt("Impuesto a aplicar:");

	impuestos(precio, impuesto);

