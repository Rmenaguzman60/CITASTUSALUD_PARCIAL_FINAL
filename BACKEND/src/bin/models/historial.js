const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const historialSchema = new Schema ({

    id: String,
    hora: String,
    cita: String,

});

const historial = mongoose.model("historial", historialSchema);
module.exports = historial;
