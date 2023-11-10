
// fs:file system
const fs = require('fs');
const { dirname } = require('path');

// primero leemos el archivo.txt
function leer(ruta, cb){
    fs.readFile(ruta,(error, data)=>{
       // console.log(data.toString());
       cb(data.toString());
    })
}

//leer(__dirname +'/archivo.txt');

//leer(__dirname +'/archivo.txt', console.log);

leer(`${__dirname}/archivo.txt`, console.log); // sintaxis ES6

// segundo escribimos el archivo.txt, creandolo
function escribir(ruta, contenido, cb){
    fs.writeFile(ruta, contenido, function(err){
        if(err) {
            console.log ('no se pudo escribir, error: ', err);
        } else {
            console.log('se escribio corectamente');
        }
    })
}
escribir(`${__dirname}/archivo1.txt`,'Soy un nuevo archivo',console.log)
// tener cuidado antes de escribir un file
//aca reescribimos el archiv1.tx

escribir(`${__dirname}/archivo1.txt`,'reescribo el archivo1.txt',console.log)
// no es conveniente usar fs para escribir multiples archivos

// Tercero borrar el archivo1.tx

function borrar(ruta,cb) {
    fs.unlink(ruta, cb); //elimina de manera asincrona
}  

borrar(`${__dirname}/archivo1.txt`, console.log);
