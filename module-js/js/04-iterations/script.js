// const person ={
//     name: 'Freddy',
//     apellido: 'Kruger',
//     age: 40
// }

// //iterar en las propiedades de un objeto
// for (props in person) {
//     console.log(person[props]);
// }

// let index = 0;
// while (index < 10) {
//     console.log(index);
//     index ++
// }

//Ejercicios=========================05 oct 2021================================
/*
    Ejercicio 1:
    Pedir al usuario usuario un numero entre 1 y 10
    Imprimir la tabla de multiplicar de ese número
    p.ej.
    3 x 1 = 3
    3 x 2 = 6
*/

function tablas_multiplicar() {
	let final, i, numuser, resultado;
	numuser = 0;
	final = 10;
	resultado = 0;
	
    numuser = Number(prompt('Ingresa un número entre el 1 y el 10'));
   
	for (i=1;i<=final;i++) {
		resultado = numuser*i;
		console.log(`${numuser} X ${i} = ${resultado}`);
	}
}

//tablas_multiplicar();

/*
Ejercicio 2:
Pedir al usuario un numero entre 10 y 100
Imprimir todos los numeros pares que existen entre 1 y ese numero
*/

function pair() {
    let i, numuser;
	numuser = 0;
	resultado = 0;
    numuser = Number(prompt('Ingresa un número entre el 1 y el 100'));

    for (i=1;i<=numuser;i++) {
        if (i % 2 === 0) {
            console.log(`El número ${i} es par`);
        }
	}
}

//pair();


/*
Ejercicio 3:
Imprimir en consola la suma total de todos los digitos de una cantidad p.ej. "1234" -> 10
*/

function sumatoria() {
    let acumulador = 0;
    let cifra = 0;

    cantUser = prompt('Ingresa una cantidad');
    const arreglo = Array.from(String(cantUser), Number);

    for (let i = 0; i < arreglo.length; i++) {
        cifra = arreglo[i];
        
        acumulador += cifra
        
    }
    console.log(acumulador);

}

//sumatoria();


/*
Ejercicio 4:
Imprimir en consola el siguiente patrón
*
**
***
****
*****
******
*******
********
*********
**********
*/

function patron() {
    let group;
    for (let i = 0; i < 10; i++) {
        let asterix = '*';
        group += asterix
        console.log(group);
    }
}
patron()