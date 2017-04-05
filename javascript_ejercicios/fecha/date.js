function muestraFechas() {
	var ahora= new Date();
	var annoActual= ahora.getFullYear();

	for (var anno = annoActual; anno <= 2050; anno++) {
		var dia1= new Date(anno, 0, 1 );

		if(dia1.getDay()==1){
			console.log(anno);
		}
	}
}

muestraFechas();

function relojReal(){
	var ahora= new Date();
	var hora= ahora.getHours()+':'+ ahora.getMinutes()+':'+ahora.getSeconds();
	document.getElementById('reloj').innerHTML = hora;

	
}
setInterval(relojReal, 1000);