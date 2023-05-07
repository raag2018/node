/*
primero crea el proceso main() en la pila de procesos
crea el console 
registra el timeout es una tarea asincrona y la registra en node apis
registra el segundo timeout, lo registra en node apis
registra el tercer timeout, lo registra en node apis
========================
node registra los procesos listos de ser ejecutados en la cola de callbacks
node ejecuta el console
======================================
los dos procesos en la cola de callbacks los coloca
en la pila de procesos y los ejecuta
=========================================
el proceso pendiente en la pila de apis, lo mueve a pila de callbacks
y luego cuando ya esta listo lo vuelve a poner en la pila de procesos
y lo ejecuta y termina el programa

*/
console.log("inicio de programa");
setTimeout(() => {
    console.log("primer timeout");
}, 3000);
setTimeout(() => {
    console.log("segundo timeout");
}, 0);
setTimeout(() => {
    console.log("tercer timeout");
}, 0);
console.log("fin del programa");