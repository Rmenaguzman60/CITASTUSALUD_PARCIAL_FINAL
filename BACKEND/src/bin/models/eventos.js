const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const EventosSchema = new Schema ({

    id: String,
    nombre: String,
    descripcion: String,
    fecha: String,
    hora: String,
    lugar: String,
});

const eventos  = mongoose.model("eventos", EventosSchema);
module.exports = eventos;
