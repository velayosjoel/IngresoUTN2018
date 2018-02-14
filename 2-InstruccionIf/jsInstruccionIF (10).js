function Mostrar()
{
	//Genero el número RANDOM entre 1 y 10 
	
var nota

nota = Math.floor((Math.random(1) * 10) + 1);

if( nota == 9 || nota == 10 ) 
{
	alert (nota + " excelente ") ;
}

else if (nota <= 8 && nota >=4 )

{
	alert (nota + " aprobo ");

}

else 

{
	alert( nota + " desaprobo ")  ;
}
}//FIN DE LA FUNCIÓN