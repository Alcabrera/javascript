document.getElementById('principal').addEventListener('click', mostrarTextoPorConsola);
document.getElementById('secundario').addEventListener('click', mostrarTextoPorConsola);
document.getElementById('terciario').addEventListener('click', mostrarTextoPorConsola);
document.getElementById('parrafo').addEventListener('click', mostrarTextoPorConsola);
document.addEventListener('click', mostrarTextoPorConsola);
window.addEventListener('click', mostrarTextoPorConsola);

function mostrarTextoPorConsola() {
	console.log('Soy un nodo con ID ' + this.id + ' y tipo ' + this.nodeName + ' y estoy burbujeando');
}

function resaltar(evento) {
	switch (evento.type) {

		case 'mouseover': this.style.color= 'yellow'; break;
		case 'mouseout' : this.style.color = 'black'; break;
	}
}

document.getElementById('textoDiv').addEventListener('mouseover', resaltar);
document.getElementById('textoDiv').addEventListener('mouseout', resaltar);

document.getElementById('contenedor').addEventListener('click', mostrarTarget);
//no es necesario añadirle eventos a cada botón ya que coge la acción del div que lo contiene

function mostrarTarget(evento) {
	console.log('El target del evento es: ' + evento.target.innerHTML);
	console.log('El target del evento es: ' + evento.currentTarget.innerHTML);
}

//Esto toma todos los botones de la tabla tablaFrutas y les añade un listener. (forma rápida de coger todos los botones sin tener que darle id a cada uno)
var botones = document.getElementById('tablaFrutas').getElementsByTagName('button'); //cojo los botones dentro de la tabla

for (var i = 0; i < botones.length; i++) {
	botones[i].addEventListener('click', borrarFila);
}

function borrarFila() {
	if (confirm('¿Estás seguro que quieres borrar la fruta?') == false) {
		return false;
	}

	var fila = this.parentNode.parentNode;
	fila.parentNode.removeChild(fila); //desde el hijo llamamos al padre que le indica que elimine al hijo 
}

document.getElementById('parrafo1').addEventListener('click', cambiarCSS);
document.getElementById('parrafo2').addEventListener('click', cambiarCSS);
document.getElementById('parrafo3').addEventListener('click', cambiarCSS);

document.getElementById('parrafo1').addEventListener('dblclick', cambiarCSS);
document.getElementById('parrafo2').addEventListener('dblclick', cambiarCSS);
document.getElementById('parrafo3').addEventListener('dblclick', cambiarCSS);

function cambiarCSS(evento) {
	switch(evento.type) {
		case 'click': this.className = 'modparrafo1';
		break;
		case 'dblclick': this.className = 'modparrafo2';
		break;
	}
}