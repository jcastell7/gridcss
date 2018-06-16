var d=document;
d.getElementById('mensaje').style.color='red';
var verificar = true;
var formulario = d.getElementById('cotizacion');
var prestamo = d.getElementById('prestamo');
var interes = d.getElementById('interes');
var periodo = d.getElementById('periodo');

function validar(){
var error = d.getElementById('mensaje').innerHTML="<p> Solo datos numericos <p>";
	if (!prestamo.value) {

		alert("hey");
		prestamo.focus();
		verificar = false;
	}
	else if (isNaN(prestamo.value)) {
		error
		prestamo.focus();
		verificar=false;
	}
	
		else if (!interes.value) {

		error
		interes.focus();
		verificar = false;
		}else if (isNaN(interes.value)) {
		
		error
		interes.focus();
		verificar=false;
		}else if (interes.value < 1 || interes.value > 3) {
		
		d.getElementById('mensaje').innerHTML="<p> Debe ingresar un porcentaje entre 1 y 3<p>"
		interes.focus();
		verificar=false;
	}
		 else if (!periodo.value) {

		error
		periodo.focus();
		verificar = false;
	}else if (isNaN(periodo.value)) {
		alert("solo numeros");
		periodo.focus();
	}else if (periodo.value < 6 || periodo.value > 72) {
		d.getElementById('mensaje').innerHTML="<p> Debe ingresar un dato entre 6 y 72<p>"
		periodo.focus();
		verificar=false;
	}

	else if (verificar==true) {

		d.getElementById('mensaje').style.color='green';
		d.getElementById('mensaje').style.fontWeight='bold';
		d.getElementById('mensaje').innerHTML="Todo ready "

	}
}

window.onload = function()
{
	var bEnviar=d.getElementById("cotizar");
	bEnviar.onclick=validar;
}


