var cuadrado= document.getElementById('cuadrado');
		cuadrado.addEventListener('mouseover',cambiarColor1);
		cuadrado.addEventListener('mouseout',cambiarColor2);

		function cambiarColor1(){
			this.style.backgroundColor='#0fa';
		}
		function cambiarColor2(){
			this.style.backgroundColor='#a0f';
			this.removeEventListener('mouseover', cambiarColor1);
			this.removeEventListener('mouseout', cambiarColor2);
		}

		function crearBotonesToggle(){
			document.getElementById('botonUno').addEventListener('click', activarBotonToggle);
			document.getElementById('botonDos').addEventListener('click', activarBotonToggle);
			document.getElementById('botonTres').addEventListener('click', activarBotonToggle);
			document.getElementById('botonCuatro').addEventListener('click', activarBotonToggle);
		}

		crearBotonesToggle();

		function activarBotonToggle(){
			var botones = document.getElementsByTagName('button');
			for (var i = 0; i < botones.length; i++) {
				botones[i].className='desactivado';
			}
			this.className='activado';
		}

			document.getElementById('envioFormulario').addEventListener('click', enviarFormulario);

			function enviarFormulario(){
				console.log('Formulario enviado');
				this.removeEventListener('click',enviarFormulario);

				this.addEventListener('click', avisoDeEnviado);
			}

			function avisoDeEnviado(){
				alert('El formulario ya ha sido enviado');
			}