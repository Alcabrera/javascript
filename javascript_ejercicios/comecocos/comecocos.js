(function(){



document.addEventListener('keydown', moverPacman);


var pacman= document.getElementById('pacman');

var punto= document.getElementById('punto');
var resultado=0;
var marcador=document.getElementById('marcador');
var comida= 20;
var puntuacionMaxima=100;

var pacmanLeft=100;
var pacmanTop=100;
var pacmanSize=50;

var puntoSize=20;

var velocidad=20;
var anchoVentana=window.innerWidth;
var altoVentana=window.innerHeight;




inicio();

function inicio(){
pacman.style.left= pacmanLeft + 'px';
pacman.style.top= pacmanTop + 'px';
pacman.style.width= pacmanSize+'px';
pacman.style.height= pacmanSize+'px';


punto.style.width= puntoSize+'px';
punto.style.height= puntoSize+'px';
	moverPunto();
}


function moverPacman(evento) {
	switch(evento.which){
		case 37:
		if( pacmanLeft>0){
					console.log('Flecha izquierda');
					pacmanLeft-=velocidad;
					
					}
					break;
		case 38:
		if (pacmanTop>0) {
			console.log('Flecha arriba');
			pacmanTop-=velocidad;
			}
			break;
		case 39:
		if (pacmanLeft +pacmanSize+velocidad<anchoVentana) {
			console.log('Flecha derecha');
			pacmanLeft+=velocidad;
			}
			break;
		case 40:
		if (pacmanTop+pacmanSize+velocidad<altoVentana){
					console.log('Flecha abajo');
					pacmanTop+=velocidad;
		}
			break;
			
			
					
	}
	
		pacman.style.left=pacmanLeft+'px';
		pacman.style.top=pacmanTop+'px';

		if (hayColision()==true){
			moverPunto();
			aumentarMarcador();
		}

}

function moverPunto(){
	do{
		 puntoLeft= parseInt(Math.random()*(anchoVentana-puntoSize));
	 	 puntoTop= parseInt(Math.random()*(altoVentana-puntoSize));
	 	}while(hayColision()==true);

 	 punto.style.left= puntoLeft+ 'px';
 	 punto.style.top= puntoTop+ 'px';
}

function hayColision(){
	if((puntoLeft< pacmanLeft + pacmanSize) && 
	 (puntoLeft+puntoSize> pacmanLeft)&&
	(puntoTop< pacmanTop + pacmanSize)&&
	(puntoTop+puntoSize>pacmanTop)){
		return true;
	}
}
function aumentarMarcador(){
	resultado+=comida;
			
			marcador.innerHTML=resultado;
			console.log(marcador);
	if (resultado>=puntuacionMaxima) {
		if (confirm ('Felicidades, has ganado. ¿Quieres empezar de nuevo?')){
			window.location='comecocos.html';
	}
}
}
})();