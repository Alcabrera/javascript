//OBTENEMOS EL NODO PADRE EN EL QUE VAMOS A ÑADIR LA IMAGEN
		var imagenesDiv=document.getElementById('imagenesDiv');
	//CREAMOS UN NODO TIPO ELEMENT
		var imagen=document.createElement('img');
	//ESTABLECEMOS LOS ATRIBUTOS DE LA IMAGEN CON LA NOTACIÓN PUNTO
	imagen.src='miimagen.jpg';
	imagen.id='miimagenid';
	//AÑADIMOS L NODO ELEMENT COMO HIJO DEL NODO PADRE QUE OBTUVIMOS
	imagenesDiv.appendChild(imagen);
//EJEMPLO DE COMO ELIMINAR COSAS
	var parrafo=document.getElementById('miFrase');
 parrafo.parentNode.removeChild(parrafo);

	
 
 

 function creaNodoLista(texto){

 	
 	var elementoNuevo=document.createElement('li');
 	var contenido= document.createTextNode(texto);
 	elementoNuevo.appendChild(contenido);
 	return elementoNuevo;
 }
 document.getElementById('anadePelis').onclick=anadirPeliculaALista;

 function anadirPeliculaALista(){
 	var listaSelects=document.getElementById('miLista')
 	var opcionSeleccionada= listaSelects.selectedIndex;
 	var peliculaSeleccionada=listaSelects.options[opcionSeleccionada].text;
 	
 	var nuevaPelicula=creaNodoLista(peliculaSeleccionada);
 	document.getElementById('lista').appendChild(nuevaPelicula);
 	listaSelects.removeChild(listaSelects.options[opcionSeleccionada]);

 }

 function creaNodoSelect(valor, texto){
 	var nodoOption=document.createElement('option');
 	var nodoTexto= document.createTextNode(texto);
 	nodoOption.appendChild(nodoTexto);
 	nodoOption.value=valor;
 	return nodoOption;
 }

 document.getElementById('eliminaPrimera').onclick=eliminaPeliculasLista;
 function eliminaPeliculasLista(){
 	/*
 	var parent= document.getElementById('miLista');
 	var opciones= parent.options;
 	parent.removeChild(opciones[0]);


*/
var listaUl=document.getElementById('lista');
var opciones=listaUl.getElementsByTagName('li');
var nombrePelicula=opciones[0].innerHTML;
var nuevaOpcion= creaNodoSelect(nombrePelicula, nombrePelicula);
document.getElementById('miLista').appendChild(nuevaOpcion);
listaUl.removeChild(opciones[0]);

 }
document.getElementById('eliminaUltima').onclick=eliminaUltimaLista;
 function eliminaUltimaLista(){
 	/*var parent= document.getElementById('miLista');
 	var opciones= parent.options;
 	parent.removeChild(opciones[opciones.length-1]);
*/
//VERSION UL

var listaUl=document.getElementById('lista');
var opciones=listaUl.getElementsByTagName('li');
var nombrePelicula=opciones[0].innerHTML;
var nuevaOpcion= creaNodoSelect(nombrePelicula, nombrePelicula);
document.getElementById('miLista').appendChild(nuevaOpcion);
listaUl.removeChild(opciones[opciones.length-1]);
 }