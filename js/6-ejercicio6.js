var lado1 = lado2 = 0;
        var perimetro = 0;
        lado1 = valor();
        lado2 = valor();

       valorDePerimetro(lado1,lado2);
        function valor(){
            return parseFloat(window.prompt("Ingrese el valor del lado"));
        }    
        function valorDePerimetro(a,b){
            var perimetro = 2*(a+b);
            document.write("el perimetro de un rectángulo de : " + a + " y " + b +" es "+perimetro);
        }