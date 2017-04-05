document.onkeydown = mostrarInformacionTecla;

function mostrarInformacionTecla(evento) {
	var caracter = String.fromCharCode(evento.which);
	var codigoTecla = evento.which;
	var codigoCaracter = evento.charCode;

	console.log('KEYDOWN');
	console.log('Caracter: ' + caracter);
	console.log('Código de tecla: ' + codigoTecla);
	console.log('Código de caracter: ' + codigoCaracter);
	console.log('--------------');
}

document.onkeypress = mostrarInfomacionCaracter;

function mostrarInfomacionCaracter(evento) {
	var caracter = String.fromCharCode(evento.which);
	var codigoTecla = evento.which;
	var codigoCaracter = evento.charCode;

	console.log('KEYPRESS');
	console.log('Caracter: ' + caracter);
	console.log('Código de tecla: ' + codigoTecla);
	console.log('Código de caracter: ' + codigoCaracter);
	console.log('************');
}

//Este es un ejemplo de cómo se pueden usar los eventos de teclado para crear una máscara de introducción de texto. El código que hay a continuación impide que se introduzcan caracteres que no sean números en un campo de texto.

document.getElementById('texto').onkeypress = comprobarTecla;

function comprobarTecla(evento) {
	var caracter = String.fromCharCode(evento.which); //nos devuelve el código de tecla que se ha pulsado y String.fromCharCode lo convierte a la letra correspondiente.
	if (caracter < "0" || caracter > "9") {
		evento.preventDefault(); //si el caracter no está entre el 0 y el 9 no hagas nada
	}
}


document.getElementById('matricula').addEventListener('keypress' , comprobarMatricula);

function comprobarMatricula(evento) {
	var caracter = String.fromCharCode(evento.which);
	var longitud = this.value.length; //recuperamos el texto escrito

	//establecemos la longitud para que no supere 7, de momento no discriminamos entre letras y números.
	if (longitud >=7) { 
		evento.preventDefault();
	}
	//en caso contrario, si la longuitud es menor igual que tres tiene que escribir un número
	else if (longitud <= 3) {
		//si no es un número no hagas lo que tienes que hacer por defecto
		if (caracter < "0" || caracter > "9") {
			evento.preventDefault(); 
			}
		//si el carácter es menor que A y mayor que Z no hagas lo que tienes que hacer por defecto.
		} else {
			if (caracter < "A" || caracter > "Z") {
			evento.preventDefault(); 
			}
		}
	}