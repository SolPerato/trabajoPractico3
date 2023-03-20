function info(cadena) {
    var resultado = "La cadena \""+cadena+"\" ";
    if(cadena == cadena.toUpperCase()) {
      resultado += " está formada sólo por mayúsculas";
    }
    else if(cadena == cadena.toLowerCase()) {
      resultado += " está formada sólo por minúsculas";
    }
    else {
      resultado += " está formada por mayúsculas y minúsculas";
    }
  
    return resultado;
  }
  
 alert(info("HolA CoMO estAS?"));
  alert(info("...nunca es tarde para aprender..."));
  alert(info("MI NOMBRE ES JUAN Y SOY ESTUDIANTE"));