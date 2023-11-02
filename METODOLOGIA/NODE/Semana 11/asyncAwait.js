async function saludarPersona(nombre, miCallback) {
    setTimeout(function() {
        console.log('Saludos, ' + nombre);
        miCallback(nombre);
    }, 1000);
}

function conversacion(callbackHablar) {
    setTimeout(function() {
        console.log('Bla bla bla bla...');
        callbackHablar();
    }, 1000);
}

function despedirse(nombre, otroCallback) {
    setTimeout(function() {
        console.log('Hasta luego, ' + nombre);
        otroCallback();
    }, 1000);
}

async function programaPrincipal() {
    await saludarPersona('Eduardo', conversacion);
    await conversacion(despedirse);
}

programaPrincipal();
