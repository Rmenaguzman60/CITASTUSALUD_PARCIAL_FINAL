const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const citasSchema = new Schema ({

    tipo: String,
    hora: String,
    fecha: String,
    lugar: String,
});

const citas = mongoose.model("citas", citasSchema);
module.exports = citas;