document.getElementById('provinciaSelect').addEventListener('change', cargarCiudades);

	function cargarCiudades(){
		
	var ciudadId= this.value;
	var xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange=function(){
		if (this.readyState== 4&& this.status==200){
			var ciudadesJSON= JSON.parse(this.responseText);
			var opciones="";


			for (ciudad in ciudadesJSON){
				opciones+= '<option value="'+ciudadesJSON[ciudad].id+'">';
				opciones+= ciudadesJSON[ciudad].nombre;
				opciones+= '</option>';
				
			}
			document.getElementById('ciudadSelect').innerHTML=opciones;
			console.log(opciones);
			
		}
	};
	xhttp.open("GET","ciudades.php?id="+ciudadId,true);
	xhttp.send();
}
	