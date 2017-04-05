

	//document.contextmenu=disparaMensaje;

	document.addEventListener('contextmenu', disparaMensaje);

	function disparaMensaje(evento){
		evento.preventDefault();
			//alert('Esta página no permite menú de contexto');
	}

	document.addEventListener('click', encuentraCoordenadas);

	function encuentraCoordenadas(evento){
		
		console.log('client x: '+evento.clientX);
		console.log('client y:'+evento.clientY);
		console.log('screen x: '+evento.screenX);
		console.log('screen y:'+evento.screenY);
		console.log('page x:'+evento.pageX);
		console.log('page y:'+evento.pageY);

		var botonRaton= evento.button;

		

		if (botonRaton==0) {
		console.log('Botón pulsado: Izquierdo');
	}	else if(botonRaton==1){
		evento.button.preventDefault();
		console.log('Botón pulsado: central');
	}	else{
		console.log('Botón pulsado: derecho');
	}


	}
	
	/*CREA DOS DIV CON VARIAS LINEAS DE CONTENIDO CADA UNA. CREA UNA FUNCIÓN QUE SI PULSAS*/

	function ejecutarFuncion(fn){
						console.log('Llamando a la función que me han pasado como parámetro:');
						fn();
					}
					function funcionConNombre(){
					console.log('Función con nombre');
					}

					var funcionEnVariable= function(){
						console.log('Función en variable');
					}

					ejecutarFuncion(funcionConNombre);
					ejecutarFuncion(funcionEnVariable);
					ejecutarFuncion(function(){
						console.log('Funcion pasada como parametro');
					});

				document.getElementById('boton').addEventListener('click', function(evento){
					alert('Se ha pulsado el boton');
				});


					

				document.getElementById('suma').addEventListener('click', sumar);

				function sumar(){
					var numeroUno= parseInt(document.getElementById('minuendo').value);
					var numeroDos= parseInt(document.getElementById('sustraendo').value);
					console.log(numeroUno+numeroDos);
				}

				document.getElementById('resta').addEventListener('click', function(){
					var numeroUno= parseInt(document.getElementById('minuendo').value);
					var numeroDos= parseInt(document.getElementById('sustraendo').value);
					console.log(parseInt(numeroUno-numeroDos));

				});


				
				function mostrarResultado(fn){
					console.log(fn(3, 5));
				}
				var multiplicacion = function(factor1, factor2){
					return  factor1*factor2;
					
				};

				mostrarResultado(multiplicacion);

				var cadena1= "2 + 2";//CREA UNA CADENA PRIMITIVA
			var cadena2= new String("2 + 2");//CREA UN OBJETO DE TIPO STRING
			eval(cadena1);//Devuelve el numero 4
			eval(cadena2);//Devuelve la cadena 2 + 2.
			eval(cadena2.valueOf());//DEVUELVE EL NÚMERO 4