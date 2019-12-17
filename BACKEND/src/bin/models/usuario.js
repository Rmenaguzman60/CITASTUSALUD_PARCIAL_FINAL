const mongoose = require ("mongoose");
const Schema = mongoose.Schema;

const usuarioSchema = new Schema ({

    nombre1: String,
    nombre2: String,
    apellido1: String,
    apellido2: String,
    carrera: String,
    semestre: String,
});

const usuario = mongoose.model("usuario", usuarioSchema);
module.exports = usuario;