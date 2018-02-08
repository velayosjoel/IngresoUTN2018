/*Debemos lograr tomar el importe por ID.
Transformarlo a entero (parseInt), luego
mostrar el importe con un Descuento del 25 %
en el cuadro de texto "RESULTADO"*/
function MostrarDescuento()
{  var precio ;
    var descuento;
 var preciofinal; 

 precio = parseFloat (document.getElementById("importe").value) ;

 descuento  = precio * 0.25 ;

 preciofinal= precio - descuento ;

document.getElementById("resultado").value = preciofinal.toFixed(2);
	
}
