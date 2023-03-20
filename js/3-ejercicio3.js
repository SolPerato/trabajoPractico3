var ciudades = ["Nueva York, Estados Unidos", "Barcelona, España", "Tokio, Japón", "Londres, Reino Unido", "Roma, Italia", "Pekín, China", "Río de Janeiro, Brasil", "Ámsterdam, Países Bajos", "Sídney, Australia", "el Cairo, Egipto"];
document.write("El arreglo tiene: "+ ciudades.length + " elementos");
ciudades.push("Paris, Francia");

document.write("<br>");
document.write("<ul>");
    document.write("<li>");
	document.write("Primera posicion: " + ciudades[0]);
    document.write("</li>");
	document.write("<br>");
    document.write("<li>");
	document.write("Tercera posicion: " + ciudades[2]);
    document.write("</li>");
	document.write("<br>");
    document.write("<li>");
	valorUltimaPosicion = ciudades[ciudades.length-1]
	document.write("Ultima posicion: " + valorUltimaPosicion);
    document.write("</li>");
	document.write("<br>");
document.write("</ul>");  

document.write("<h1>Arreglo de ciudades</h1>");
document.write("<ul>");

document.write("<li>");
document.write("Elemento: " + ciudades[0]);
document.write("</li>");
document.write("<li>");
document.write("Elemento: " + ciudades[1]);
document.write("</li>");
document.write("<li>");
document.write("Elemento: " + ciudades[2]);
document.write("</li>");
document.write("<li>");
document.write("Elemento: " + ciudades[3]);
document.write("</li>");
document.write("<li>");
document.write("Elemento: " + ciudades[4]);
document.write("</li>");
document.write("<li>");
document.write("Elemento: " + ciudades[5]);
document.write("</li>");
document.write("<li>");
document.write("Elemento: " + ciudades[6]);
document.write("</li>");
document.write("<li>");
document.write("Elemento: " + ciudades[7]);
document.write("</li>");
document.write("<li>");
document.write("Elemento: " + ciudades[8]);
document.write("</li>");
document.write("<li>");
document.write("Elemento: " + ciudades[9]);
document.write("</li>");
document.write("<li>");
document.write("Elemento: " + ciudades[10]);
document.write("</li>");

document.write("</ul>");  

