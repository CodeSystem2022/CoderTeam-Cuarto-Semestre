function funcionAsincrona(callback) {
  setTimeout(() => {
    console.log("Iniciando tarea asíncrona...");
    console.log("Hola, soy una función asíncrona");
    console.log("Terminando tarea asíncrona...");
    
    if (callback) {
      callback("wildBlueTurtle");
    }
  }, 1000);
}
function miCallback(nombre) {
  console.log("...");
  console.log("Konichiwa " + nombre);
  console.log("ending...");
}

console.log("starting...");

funcionAsincrona(miCallback);
