

function conversorradianeses(grados) {
	return grados*Math.PI/180;
	console.log(grados*Math.PI/180);
}

function calculaCosos(){
	var grados = prompt("Escribe el número");
	var radianes= conversorradianeses(grados);
	console.log(Math.cos(radianes));
	console.log(Math.sin(radianes));
	console.log(Math.tan(radianes));
}

calculaCosos();

	function aleatorieador(){
		var numeroAAdivinar= parseInt(Math.random()*100);
			console.log(numeroAAdivinar);
		for (var i = 1; i <= 10; i++) {
			var numero= prompt("Introduce un número entre uno y 100");
			if (numero==numeroAAdivinar) {
				alert ("Lo has adivinado, era el "+numeroAAdivinar+" enhorabuena");
				return;
			}else{
				if (numero>numeroAAdivinar) {
					alert ("El número introducido es más grande que el generado. Llevas "
						+ i +" intentos");
				}else{
					alert ("El número introducido es más pequéño que el número generado. Llevas "
						+ i +" intentos");
				}
			}
		} alert ('No lo has conseguido. Intentalo de nuevo.')
	}

	aleatorieador();

	document.getElementById('cilindroBtn').addEventListener('click', calculaVolumen);

	function calculaArea(radio) {
		return Math.pow(radio, 2)*Math.PI;
	}
	function calculaVolumen(){
		var radio= document.getElementById('radio').value;
		var altura= document.getElementById('altura').value;

		var area= calculaArea(radio);

		var volumen= area*altura;

		document.getElementById("volumen").value= volumen;
	}