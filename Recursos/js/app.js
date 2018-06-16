var d=document;

d.querySelector("#enviar").onclick=validarDatos;
d.getElementById('error').style.color='red';
reglaNom=/^[a-zñ | A-ZÑ]+[a-zñ | A-ZÑ\s]+[a-zñ | A-ZÑ]$/
reglaApe=/^[a-zñ | A-ZÑ]+[a-zñ | A-ZÑ\s]+[a-zñ | A-ZÑ]$/
reglaEmail=/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;


function validarDatos(){

	el=d.getElementById('nombres');
	if (!validarRequeridos(el))return;
	if (!validarERegular(el,reglaNom))return;

	el=d.getElementById('apellidos');
	if (!validarRequeridos(el))return;
	if (!validarERegular(el,reglaApe))return;

	el=d.getElementById('email');
	if (!validarRequeridos(el))return;
	if (!validarERegular(el,reglaEmail))return;

	/* Respuesta positiva */
	d.getElementById('error').style.color='green';
	d.getElementById('error').style.fontWeight='bold';
	d.getElementById('error').innerHTML="Todo ready "
}

function validarRequeridos(el) {
	sw=true;

	if (el.checkValidity()==false && el.required){
		d.getElementById('error').innerHTML="<p> Debe Ingresar "+el.id+"<p>"
	sw=false;
}else{
	d.getElementById('error').innerHTML=""
}
return sw;
}

function validarERegular(el,regla){
	sw=true;
	valor=el.value;
	if (!regla.test(valor)) {
		d.getElementById("error").innerHTML="<p> Debe ingresar un "+el.id+" Valido(s) </p>"
	sw=false;
	}
return sw;
}
