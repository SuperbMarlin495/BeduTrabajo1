function explicacion(){
    let ina = document.getElementById("ida").value;
    let inb = document.getElementById("idb").value;
    let inc = document.getElementById("idc").value;
    


    let a = parseInt(ina, 10);
    let b = parseInt(inb, 10);
    let c = parseInt(inc, 10);


    let apaso1 = (-1) * b;
    let apaso2 = Math.pow(b, 2);
    let apaso3 = 4 * a;
    let apaso4 = apaso3 * c;
    let apaso5 = apaso2 - apaso4;

    if (apaso5 < 0){
        alert("La raiz tiene numero negativo, por lo tanto no se puede resolver")
        document.write("Tus valores de ecuacion son: ")
        document.write("<br>A:  " + a + "<br>B:  "+ b + "<br>C:  "+c)
        document.writeln("<br>Favor de revisar las constantes")
    }


    let aposo6 = Math.sqrt(apaso5);
    let abajo = 2*a;
    let semif1 = apaso1 + aposo6;
    let semif2 = apaso1 - aposo6;
    let final1 = semif1/abajo;
    let final2 = semif2/abajo;

    if(apaso5 >= 0){
        document.write("<br>Tu formula ya sustituida es:  x = [-("+b+") +- √("+b+"∧2 - 4("+a+")("+c+"))]/2("+a+")<br>"+"<br>");
        document.write("<br>El valor de X1 es: " + final1);
        document.write("<br>El valor de X2 es: " + final2);
    }
}