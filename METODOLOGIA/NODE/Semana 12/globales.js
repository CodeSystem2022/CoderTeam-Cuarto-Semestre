// this == global = true

//Mostrar algo en consola
console.log();

//Mostrar un mensaje en forma de error
console.log();

//Ejecutar un codigo despues de un intervalo de tiempo
serTimeout(() => {});

//Ejecutar un codigo cada intervalo de tiempo
setInterval(() => {});

//Da prioridad de ejecucion a una funcion asincronica
setImmdiate(() => {});


console.log(global);

console.log(setInterval);

Let i = 0;
Let intervalo = serInterval(() => {
    console.log('Hola');
    if (i == 3){
        clearInterval(intervalo);
    }
    i++;
}, 1000);


setImmediate(() => {
    console.log('Saludo inmediato');
});

requiere();

console.log(process);

console.log(__dirname);

console.log(__filename);

global.miVariable = 'mi variable global';
console.log(miVariable);