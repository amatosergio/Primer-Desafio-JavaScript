// Pedir ingresar un numero, el cual dependiendo el valor, se repetira el saludo por alert, con la palabra : ¡ Hola !
let numero = parseInt (prompt("Ingrese un numero, el cual repetira el saludo, segun el numero que indiques: "))

for (let i=1; i<=numero; i++) {
    alert ("¡ Hola !")
}



// Ciclo utilizando While, cuando numero valga 70, el contador se detendra por la sentencia break. Mostrado por document.write

let num= 0

while (num<100){
    num ++;
    document.write (num+ " ")
    if (num == 70){
        break
    }
}

// Ciclo utilizando Do while 

	//EJEMPLO DO...WHILE

 let valor = parseInt(prompt('Ingrese un numero'))
 let vuelta = 0
 do{
 valor = valor + 5 
 document.write( "<br>" +valor+ "<br>")
 vuelta++

 }while(vuelta<=8)
