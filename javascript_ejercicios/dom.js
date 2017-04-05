function ordenaListas(){
	var listaOrdenada= document.getElementsByTagName('ol');
	var elementoOrdenado= listaOrdenada[0].getElementsByTagName('li');
	for (var i = 0; i < elementoOrdenado.length; i++) {
		
		console.log(elementoOrdenado[i].innerHTML);
	}

	var listaDesordenada=document.getElementsByTagName('ul');
	var elementoDesordenado=listaDesordenada[0].getElementsByTagName('li');

	for (var i = 0; i < elementoDesordenado.length; i++) {
		
		console.log(elementoDesordenado[i].innerHTML);
	}

}
document.getElementById('muestraListasBtn').onclick=ordenaListas;

function cambiaCeldas(){
	
	var celdasBody= document.getElementsByTagName('tbody')[0];
	var filas=celdasBody.getElementsByTagName('tr');

	for (var i = 0; i < filas.length; i++) {
		if (i%2!=0) {
			filas[i].style.backgroundColor='red';
		}
	}
}
cambiaCeldas();

document.getElementById('mostrarDom').onclick=muestraElDom;

function muestraElDom(){
	var encabezado=document.getElementsByName('encabezado');
	console.log(encabezado[0].innerHTML);
	var botoncicos=document.getElementsByName('radios');
	console.log(botoncicos);
}
document.getElementById('mostrarMarcado').onclick=muestraElMarcado;

function muestraElMarcado(){
	var botoncicos=document.getElementsByName('radios');
	for (var i = 0; i < botoncicos.length; i++) {
		if(botoncicos[i].checked==true){
			alert(botoncicos[i].value);
		}
	}
}
function buscaMenu(){
	var menu=document.getElementsByClassName('menu');
	console.log(menu[0].innerHTML);
}
buscaMenu();
/*document.getElementById('lista').onmouseover=cambiaClase;
function cambiaClase(){
	var claseMenu= document.querySelectorAll('.menu .opcion');
	for (var i = 0; i < claseMenu.length; i++) {
		claseMenu[i].className+= ' rojo_negrita';
	}
	

	
}//FUNCIONAAAAAAA, PERO VAMOS A USAR EL MÉTODO SERGIO
*/
function hacerIntercativo(){
	var elementos= document.getElementsByClassName('opcion');

	for (var i = 0; i < elementos.length; i++) {
		elementos[i].onmouseover= anadirClase;
	}
}
function anadirClase(){
	this.className+= ' rojo_negrita';
}
hacerIntercativo();

//NODO DE TIPO ELEMENT
 	var parrafo=document.createElement('p');
 //CREAMOS EL NODO TIPO TEXT
 	var contenido= document.createTextNode('Hola mundo');
// AÑADIMOS EL NODO TEXT COMO HIJO DEL NODO ELEMENT
 	parrafo.appendChild(contenido);
 //POR ULTIMO, AÑADIMOS EL NODO ELEMENT COMO HIJO DE LA PÁGINA
 	document.body.appendChild(parrafo);
