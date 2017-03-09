document.write('Vamos a jugar a pares y nones. El jugador 1 siempre elige nones y el jugador 2 siempre elige pares');
var jugador1;
var jugador2;

jugador1=prompt('Jugador 1 elige un número de el 1 al 5');
document.write('El jugador 1 ha sacado'+ jugador1);

jugador2=prompt('Jugador 2 elige un número de el 1 al 5');
document.write('El jugador 2 ha sacado'+ jugador2);



var jugador1= Number(jugador1);
var jugador2= Number(jugador2);

var suma=jugador1+jugador2;
document.write('La suma de jugadas es = ' + suma);

if(suma%2===0){
    
    document.write('Enhorabuena jugador 1 has ganado')

}else{
    document.write('Enhorabuena jugador 2 has ganado')
}