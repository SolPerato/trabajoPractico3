function tablaMultiplicar(j){

	document.write("<h2>Tabla de multiplicar del "+ j +"</h2>");

	document.write("<ul>");

	for(i = 1;i<=10;i++){
		document.write("<li>");
		document.write(j + "x " + i + "= " + j * i);
		document.write("</li>");
	}

	document.write("</ul>");
}

tablaMultiplicar(6);