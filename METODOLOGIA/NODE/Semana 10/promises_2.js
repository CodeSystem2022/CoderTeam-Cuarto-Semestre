function saludarPersona(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('¡Saludos, ' + nombre + '!');
            resolve(nombre);
        }, 1000);
    });
}

function conversacion(callback) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('Bla bla bla bla...');
            resolve(callback);
        }, 1000);
    });
}

function despedirse(nombre) {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            console.log('¡Hasta la vista, ' + nombre + '!');
            reject('Ha ocurrido un error');
        }, 1000);
    });
}

console.log('Comenzando el proceso...');

saludarPersona('Ariel')
    .then(conversacion)
    .then(conversacion)
    .then(conversacion)
    .then(despedirse)
    .then(() => {
        console.log('Proceso finalizado');
    })
    .catch((error) => {
        console.log('Se ha producido un error:');
        console.log(error);
    });
