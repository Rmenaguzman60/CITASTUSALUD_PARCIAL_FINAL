const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const notificacionSchema = new Schema ({

    mensaje: String,
    hora: String,
    fecha: String,
});

const notificacion = mongoose.model("notificacion", notificacionSchema);
module.exports = notificacion;