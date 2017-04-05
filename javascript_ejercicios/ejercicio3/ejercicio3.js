function comprobarDivisiom(dividendo,divisor){
	if (dividendo%divisor==0) {
		console.log(dividendo+" es divisible entre "+divisor);
	}
	else{
		console.log("No son divisibles");
	}
}
comprobarDivisiom(6,3);


	var efectivo=500;
		var precio=300;

	function comprar(efectivo, precio){
		if (efectivo>0) {
			if (precio<efectivo) {
				console.log("Has comprado el producto");
				efectivo= efectivo-precio;
				console.log("Te queda "+efectivo+" dinero");
			}else{
				console.log("No tienes dinero para comprar el producto");
			}

		} else{
			console.log("No tienes dinero");
		}
		}
		

		comprar(efectivo,precio);

		function semana(dia){
			if (dia<=7) {
			switch(dia){
				case 1: console.log("Hoy es lunes");
				break;
				case 2: console.log("Hoy es martes");
				break;
				case 3: console.log("Hoy es miercoles");
				break;
				case 4: console.log("Hoy es jueves");
				break;
				case 5: console.log("Hoy es viernes");
				break;
				case 6: console.log("Hoy es sabado");
				console.log("FIN DE SEMANA!!");
				break;
				case 7: console.log("Hoy es domingo");
				console.log("FIN DE SEMANA!!");
				break;
			}}else{
				console.log("Ese día no es valido");
			}

		}

		semana(7);

		function dado(cara){
			switch (cara){ 
				case 1: console.log("La cara opuesta es seis");
				break;
				case 2: console.log("La cara opuesta es 5");
				break;
				case 3: console.log("La cara opuesta es 4");
				break;
				case 4: console.log("La cara opuesta es 3");
				break;
				case 5: console.log("La cara opuesta es 2");
				break;
				case 6: console.log("La cara opuesta es 1");
				break;

			}
		}
		 var cara= parseInt(prompt("Escribe que cara te ha salido"));
		dado(cara);

		function factorial(numeroso){
			if (numeroso==0){
				return 1;
			}
			for (var i = 1; i < numeroso; i++) {
				factor = numeroso*i;
				console.log(numeroso+" dividido entre "+i+"="+factor);
			}
		}

		factorial(10);

		function tabla(numero){
			for (var i = 1; i < 11; i++) {
				console.log(numero*i);
			}
		}

		tabla(2);

		function esprimo(numero){
			for (var i = 2; i < numero /2 ; i++) {
				if (numero%i==0) {
					console.log("El numero "+numero+" no es primo");
					return;
				}
					
				
			}
			console.log("El numero "+numero+" es primo");
		}

		esprimo(7);

		function asteriscador(numero){
			var resultado= "";
			var asterisco=0;
			while (asterisco<numero){
				resultado+="*";
				asterisco++;
			}
			console.log(resultado);
		}

		asteriscador(8);

	/*	function imparizador(este, elotro){
			var impares;
			while (este<elotro){
				if (este%2!=0) {
					impares+=este;
					este++;
				}
			}
			console.log(impares);


		}
		imparizador(1,10);*/

		function media(){
			var contador=0;
			var entrada="";
			var suma=0;//RESULTADO DE LA SUMA DE LOS ELEMENTOS INTRODUCIDOS POR PROMPT
			while (entrada!="0"){
				entrada = prompt('Introduce un número');
				if (entrada !="0"){
					suma +=parseInt(entrada);
					contador++;
				}
			}
			console.log("La media es =" +(suma/contador));
		}

		media();

		/*function numeroMayor(){
			var entrada;
			var maximo=-Infinity;
			do{
				entrada = prompt('Introduce un número');
				if (maximo <parseInt(entrada)){
					maximo= parseInt(entrada);
						}
		}while (entrada=!"0");
		console.log('El máximo es ='+maximo);
	}
	numeroMayor();
*/
	function maxAleatorio(){
		var total=0;
		do{
			aleatorio=parseInt(Math.random()*100);
			total+=aleatorio;
			console.log(total);
		}while (total<1000);
	 console.log(total);
}

maxAleatorio();

var str=document.title="Nuevo titulo";

console.log(str);