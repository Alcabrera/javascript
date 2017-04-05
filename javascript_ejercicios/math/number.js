document.getElementById('enviarBtn').addEventListener('click', function(){

	var numero= document.getElementById('campoTexto').value;

	if (isNaN(numero)){
		alert('No es un numero válido');
		return;
	}
	alert('El número es: '+numero);
});

	document.getElementById('multiplicaBtn').addEventListener('click', multiplicaDecimales);

		function multiplicaDecimales(){
			var numero1= parseFloat(document.getElementById('campoTexto1').value);
			var numero2= parseFloat(document.getElementById('campoTexto2').value);

			var resultado1= numero1*numero2;


			document.getElementById('campoTexto3').value=resultado1;
			document.getElementById('campoTexto4').value=resultado1.toFixed(2);


			console.log(numero1);
			console.log(numero2);
			console.log(resultado1);

		}