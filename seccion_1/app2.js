/*
node crea el proceso main() en la pila de procesos
primero registra las funciones declaradas
despues registra la variable 
despues comienza a crear los argumentos de la funcion
y luego ejecuta el return y se elimina de la pila de proceso
y pasa a la linea del console
*/
//node crea la funcion en el registro global
//funcion de flechas
const saludar = (nombre) => {
    //template string 
    return `Saludos ${nombre}`;
}
//el registro de la funcion lo ejecuta console.log
let nombre = 'Robert';
console.log(saludar(nombre));