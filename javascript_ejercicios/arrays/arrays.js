var colores=['rojo', 'verde', 'azul'];

console.log(colores[0]);//rojo
console.log(colores[1]);//verde
console.log(colores[2]);//azul

/*EJEMPLOS*/

var numeros=['cero', ,'dos', , 'cuatro'];

console.log(numeros[0]);//cero
console.log(numeros[1]);//undefined

var datos=[13,'Juanito', 22.8, true, ['uno','dos']];

console.log(datos[0]);//13
console.log(datos[1]);//Juanito
console.log(datos[4][1]);//dos

var vocales=['a','e','i','o','u'];

for (var i=0; i< vocales.length; i++){
	console.log(vocales[i]);
}

var palabras=['Hola','cómo','estás','hoy'];

function mostrarPalabra(valor, indice){
	console.log('índice: '+ indice);
	console.log('Valor: '+valor);
}

palabras.forEach(mostrarPalabra);


var vocales=['a','e','i','o','u'];

for (indice in vocales){
	
	console.log('índice :'+indice);
	console.log('Valor: '+vocales[indice]);
}

function pintarCiudad(ciudad){
	console.log(ciudad);
}
var ciudades=['Badajoz','Cáceres','Madrid','Valencia','Sevilla'];
ciudades.map(pintarCiudad);

/*EJERCICIOS*/

var datos=['Alberto','Cabrera','Centeno',['Antonio Martínez Virel','1','7D'],'29'];

console.log(datos[0]);
console.log(datos[1]);
console.log(datos[3][1]);





var valores=[];

function nuevosValores(){
	var entrada;
	while(entrada!=0){
	entrada= prompt('Introduce los datos');
	valores.push(entrada);
	}

	for (var i = 0; i < valores.length; i++) {
		console.log('Índice = '+i);
		console.log('Valor = '+valores[i]);
	}
}

nuevosValores();

var numeracion=[3,4,5,4,6,10,20];
var resultado=0;
function sumador(valor){
	
	
	resultado+= valor;
	
}
 numeracion.forEach(sumador);
console.log(parseInt(resultado));

function componentesDeFrases(){
	var frase= prompt('Introduce una frase:');
	var fraseArray=frase.split('');

	console.log('La frase original es: '+frase);
	console.log('Numero de palabras: '+fraseArray.length);
	console.log('Primera palabra: '+fraseArray[0]);
	console.log('Última palabra: '+fraseArray[fraseArray.length-1]);
	console.log('Orden inverso: '+fraseArray.reverse());
	console.log('Órden alfabético: '+fraseArray.sort());
}
componentesDeFrases();
