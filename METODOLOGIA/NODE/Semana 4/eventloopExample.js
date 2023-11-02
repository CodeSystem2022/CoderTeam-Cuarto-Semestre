const EventEmitter = require("events").EventEmitter;
const emisorEventos = new EventEmitter();

const eventoPersonalizado = "miEventoPersonalizado";

emisorEventos.on(eventoPersonalizado, () => {
    console.log("¡Es hora!");
});

// Emitir el evento personalizado después de un cierto tiempo
setTimeout(() => {
    emisorEventos.emit(eventoPersonalizado);
}, 1000);
