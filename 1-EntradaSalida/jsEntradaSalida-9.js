/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function MostrarAumento()
{var sueldo ;
 var nuevo_sueldo; 

 sueldo = parseFloat (document.getElementById("sueldo").value) ;

 nuevo_sueldo = sueldo * 1.1 ;

document.getElementById("resultado").value = nuevo_sueldo.toFixed(2);
	
}
