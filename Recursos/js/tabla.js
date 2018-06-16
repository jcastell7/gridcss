var d=document;
var tabla=d.createElement("table");
for (var i=1; i <= 20; i++) {
	var fila=d.createElement("tr");
	for (var j=1; j <= 20; j++) {	
		var col=d.createElement("td");
		var xval=d.createTextNode(i*j);
		col.appendChild(xval);
		fila.appendChild(col);
	}
	tabla.appendChild(fila);
}
var res=d.getElementById("container");
res.appendChild(tabla);
