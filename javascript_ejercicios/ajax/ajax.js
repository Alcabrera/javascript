document.getElementById('cargaBtn').addEventListener('click', cargaDocumento);
function cargaDocumento(){
	var xhttp= new XMLHttpRequest();
	xhttp.onreadystatechange=function(){
		if (this.readyState== 4&& this.status==200){
			document.getElementById("demo").innerHTML= this.responseText;
		}
	};
	xhttp.open("GET","archivo.txt",true);
	xhttp.send();
}