const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const medicoSchema = new Schema ({

    Id: String,
    nombres: String,
    apellidos: String,

});

const medico = mongoose.model("medico", medicoSchema);
module.exports = medico;
