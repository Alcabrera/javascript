function expresionesRegulares(){
	var miExReg= /as.?a/
	var msg = 'Patrón: as.?a \n';
	msg += '¿Contiene casado el patrón?:'+ miExReg.test('casado')+'\n';
	msg += '¿Contiene castaño el patrón?:'+ miExReg.test('castaño')+'\n';
	msg += '¿Contiene sabina el patrón?:'+ miExReg.test('sabina')+'\n';
	msg += '¿Contiene asa el patrón?:'+ miExReg.test('asa')+'\n';
	msg += '¿Contiene as el patrón?:'+ miExReg.test('as')+'\n';
	
	alert(msg);
		}
	expresionesRegulares();

	function compruebaExpresion(palabra){
		
		//var miExReg= new RegExp('^a+b{2, 4}'); VALIDA UNA EXPRESIÓN QUE EMPIECE POR UNA O MÁS A, Y CONTENGA A CONTINUACIÓN ENTRE 2 Y 4 Bs
		//var miExReg=	/(^[1-7]?\d{1,3})|8000$  /
		//var miExReg= /^[0-9]{4}[B-DF-HJ-NP-TV-Z]{3}$/;//EXPRESIÓN PARA VALIDAR MATRÍCULAS ACTUALES
		var miExReg= /^(0[1-9]|1[0-9]|2[0-9]|3[0-1])\/ (0[1-9]|1[0-2])\/[0-9]{4}$/;//ESTO VALIDA FECHAS, DANDO POR SENTADO QUE TODOS LOS MESES PUEDEN TENER 31 DÍAS
		
		return miExReg.test(palabra);
	}
	console.log(compruebaExpresion('8000'));

	function palabraConE(argument) {
		var MiExp= new RegExp('e.?.?o');
		return MiExp.test(argument);

	}
		console.log(palabraConE('perro'));

		var miRegExp= /p(.)sto/g; //probar después con /p(.)sto/g
		var txt= "El pasto es pisto pero no pesto";
		while ((coincidencias= miRegExp.exec(txt))!==null){
			console.log(coincidencias);
		}

		var miExReg=/(\w+)\s(\w+)\s(\w+)/;
	var txt ="Celia Leonar Pajuelo";
	var cambiada= txt.replace(miExReg, '$2 $3 $1');
	console.log(cambiada);