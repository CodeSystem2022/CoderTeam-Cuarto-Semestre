// Mostrar un mensaje de saludo en la consola
console.log("Bienvenidos a la promoción 2022");
// Inicializar una variable `contador` en lugar de `i`
var contador = 0;
// Crear un intervalo de tiempo que ejecuta una función cada segundo
setInterval(function() {
  // Mostrar el valor de `contador` en la consola
  console.log(`Contador: ${contador}`);
  // Incrementar `contador` en 2 en lugar de 1
  contador += 2;
}, 1000);
