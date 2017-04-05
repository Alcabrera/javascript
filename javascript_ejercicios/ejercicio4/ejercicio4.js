function propiedadesPagina(){
	console.log('El título de esta página es '+ document.title);
	console.log(document.location);
	console.log(document.screen);
	console.log(screen.availHeight);

}
propiedadesPagina();

function prueba(){
	alert('Prueba desde función externa');
}
function resaltar(elemento){
	elemento.style.backgroundColor='red';

}
function elmeneito(boton){
	boton.style.left=parseInt(Math.random()*1000)+'px';
	boton.style.top=àrseInt(Math.random()*800)+'px';
	
}
function elbotonescritor(boton){
	console.log(boton.innerHTML);
}

function cambioUno(imag,numero){
	
	if (numero==2) {
		imag.src="img/perrete.jpg";	
	}else{
		imag.src="img/gatete.jpg";

	}
	}

	document.getElementById('boton').onclick=probar;

	function probar(){
		alert('Has pulsado');
	}

	document.getElementById('botoncillo').onclick=cambiaboton;

	function cambiaboton(){
		var boton=document.getElementById('botoncillo');
		if(boton.innerHTML=="Estoy activo"){
			boton.innerHTML="Estoy inactivo";
		}else{
			boton.innerHTML="Estoy activo";
		}
	}
	document.getElementById('imaginador').onclick=matafoto;

		function matafoto(){
			var foto=document.getElementById('foto');
			if (foto.style.display!='none') {
			foto.style.display='none';
		}else{
			foto.style.display='inline';
		}
		}