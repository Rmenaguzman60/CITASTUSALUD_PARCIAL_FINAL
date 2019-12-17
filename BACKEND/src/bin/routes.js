const express = require("express");
const cors = require ("cors");
const bodyParser = require ("body-parser");

const app = express();

app.use (cors());
app.use (bodyParser.json());

const {controller} = require("./Controller");

app.get("/", (req, res)=>{
    res.send("citasunicor"); 
})

app.get("/usuario",(req, res)=>{
    controller.getusuario(res);
})

app.post("/usuario",(req, res)=>{
    var data = req.body;
    controller.addusuario(res,data);
})

app.get("/citas",(req, res)=>{
    controller.getcitas(res);
})
app.post("/citas",(req, res)=>{
    var data = req.body;
    controller.addcitas(res,data);
})

app.get("/medico",(req, res)=>{
    controller.getmedico(res);
})

app.post("/medico",(req, res)=>{
    var data = req.body;
    controller.addmedico(res,data);
})

app.get("/eventos",(req, res)=>{
    controller.geteventos(res);
})

app.post("/eventos",(req, res)=>{
    var data = req.body;
    controller.addeventos(res,data);
})

app.get("/historial",(req, res)=>{
    controller.gethistorial(res);
})

app.post("/historial",(req, res)=>{
    var data = req.body;
    controller.addhistorial(res,data);
})
app.get("/notificacion",(req, res)=>{
    controller.getnotificacion(res);
})

app.post("/notificacion",(req, res)=>{
    var data = req.body;
    controller.addnotificacion(res,data);
})

exports.app = app;