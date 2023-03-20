var lado1 = lado2 = 0;
        var perimetro = 0;
        lado1 = valor();
        lado2 = valor();
    
       Perimetro(lado1,lado2);
             
        function valor(){
            return parseFloat(window.prompt("escribe la longitud de un lado"));
        }    
        function Perimetro(a,b){
            var perimetro = 2*(a+b);
            document.write("el perimetro de un rectángulo es: " + a + " y " + b +" es "+perimetro);
        }