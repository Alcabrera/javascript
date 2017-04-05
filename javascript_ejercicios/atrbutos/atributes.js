document.getElementById('numeroUno').value= generarAleatorio(10);

document.getElementById('numeroDos').value=generarAleatorio(10);

var caja= document.getElementById('resultado');

function generarAleatorio(maximo){
	return parseInt(Math.random()*maximo)+1;
}




	document.getElementById('resultado').onblur=compruebaResultado;

	function compruebaResultado(){
		var factorUno= document.getElementById('numeroUno').value;
		var factorDos= document.getElementById('numeroDos').value;
		var resultadoNodo= document.getElementById('resultado');
		var resultado= resultadoNodo.value;

		if (resultado==factorUno*factorDos) {
			resultadoNodo.style.backgroundColor='green';
		}else{
				resultadoNodo.style.backgroundColor='red';
		}

	}

	/*nodoTablas=document.getElementsByTagName('table');
	for (var i = 0; i < nodoTablas.length; i++)
	if (nodoTablas[0].hasAttribute('border')){
		nodoTablas[0].removeAttribute('border');
		nodoTablas= nodoTablas[0].style.border='solid';

	}*/
	

	function embellecerBordesTablas(){
		var tablas=document.getElementsByTagName('table');
		for (var i = 0; i < tablas.length; i++) {
			if (tablas[i].hasAttribute('border')) {
				tablas[i].removeAttribute('border');
				tablas[i].style.border='solid';
			}
		}}
embellecerBordesTablas();

	var nodoBoton=document.getElementById('dboton');
	var nodoCheck=document.getElementById('checkCaja');

	nodoCheck.onchange= verificaCaja;

	function verificaCaja(){
	
		nodoBoton.disabled= !nodoCheck.checked;
	}
	
	var parrafo= document.getElementById('elParrafo');
	console.log(parrafo.nodeName);
	console.log(parrafo.nodeType);
	console.log(parrafo.firstChild.nodeValue);

	document.getElementById('funcionLista').onclick=comprobarhermanos;

	function comprobarhermanos(){
		var valor=document.getElementById('escribeNumero').value;
		var elementosLista= document.getElementById('listaNumeros').getElementsByTagName('li');

		for (var i = 0; i < elementosLista.length; i++) {
			if (elementosLista[i].innerHTML == valor){
				mostrarHermanos(elementosLista[i]);
			}
		}
	}
function mostrarHermanos(nodo){
	if (nodo.previousElementSibling!=null){
		console.log('Hermano anterior: '+ nodo.previousElementSibling.innerHTML);}
	if (nodo.nextElementSibling!=null){
		console.log('Hermano posterior: '+ nodo.nextElementSibling.innerHTML);}
}



		var cuadrado= document.getElementById('cuadrado');
		cuadrado.addEventListener('mouseover',cambiarColor1);
		cuadrado.addEventListener('mouseout',cambiarColor2);

		function cambiarColor1(){
			this.style.backgroundColor='#0fa';
		}
		function cambiarColor2(){
			this.style.backgroundColor='#a0f';
		}