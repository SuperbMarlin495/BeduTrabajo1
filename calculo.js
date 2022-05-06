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

}