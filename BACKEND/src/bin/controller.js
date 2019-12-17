const mongoose = require("mongoose");
const usuario = require ("./models/usuario");
const citas = require ("./models/citas");
const eventos = require ("./models/eventos");
const historial = require ("./models/historial");
const medico = require ("./models/medico");
const notificacion = require ("./models/noticacion");

class Controller{
    constructor(){
        this.connect();
    }
     async connect(){
         try{ 
             await mongoose.connect(
                 "mongodb+srv://rmenaguzman60:JDuqaROs1QjRHzBn@cluster0-2sirv.mongodb.net/citastusalud?retryWrites=true&w=majority",
                 {useNewUrlParser:true}
                          )
             console.log("conectado a la base de datos");
 
         }catch(e){
             console.error(e);
         }
     }

     getusuario(res){
        usuario.find ({} , (err,usuario) => {
            if (err) throw err;

            res.send (usuario);
        })
    }
addusuario(res,data){
    usuario.create(data, (err, usuario) => {
        if (err) throw err;
        res.send({
            msg: "usuario Added",
            usuario:usuario
        })
    })
} 

getcitas(res){
    citas.find ({} , (err,citas) => {
        if (err) throw err;

        res.send (citas);
    })
}
addcitas(res,data){
citas.create(data, (err, citas) => {
    if (err) throw err;
    res.send({
        msg: "citas Added",
        citas:citas
    })
})
} 

geteventos(res){
    eventos.find ({} , (err,eventos) => {
        if (err) throw err;

        res.send (eventos);
    })
}
addeventos(res,data){
eventos.create(data, (err, eventos) => {
    if (err) throw err;
    res.send({
        msg: "eventos Added",
        eventos:eventos
    })
})
} 

gethistorial(res){
    historial.find ({} , (err,historial) => {
        if (err) throw err;

        res.send (historial);
    })
}
addhistorial(res,data){
    historial.create(data, (err, historial) => {
    if (err) throw err;
    res.send({
        msg: "historial Added",
        historial:historial
    })
})
} 

getmedico(res){
medico.find ({} , (err,medico) => {
    if (err) throw err;

    res.send (medico);
})
}
addmedico(res,data){
    medico.create(data, (err, medico) => {
if (err) throw err;
res.send({
    msg: "medico Added",
    medico:medico
})
})
} 

getnotificacion(res){
    notificacion.find ({} , (err,notificacion) => {
        if (err) throw err;

        res.send (notificacion);
    })
}
addnotificacion(res,data){
    notificacion.create(data, (err, notificacion) => {
    if (err) throw err;
    res.send({
        msg: "notificacion Added",
        notificacion:notificacion
    })
})
} 

}

exports.controller = new Controller();