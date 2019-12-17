<template>
 <v-layout row wrap justify-center align-center>
 <v-card class="mx-auto" color="#229BE1" dark max-width="400">
  

    <v-card-title primary-title>
    <h2 class="title"> Registro</h2>
    </v-card-title>
    <v-card-text>
        <v-text-field
           label="id"
           v-model ="id"
        ></v-text-field>
        <v-text-field
           label="nombre1"
           v-model ="nombre1"
        ></v-text-field>
        <v-text-field
           label="nombre2"
           v-model ="nombre2"
        ></v-text-field>
        <v-text-field
           label="apellido1"
           v-model ="apellido1"
        ></v-text-field>
        <v-text-field
           label="apellido2"
           v-model ="apellido2"
        ></v-text-field>
        <v-text-field
           label="carrera"
           v-model ="carrera"
        ></v-text-field>
        <v-text-field
           label="semestre"
           v-model ="semestre"
        ></v-text-field>
    </v-card-text>
    <v-card-actions>
        <v-layout new  wrap justify-center>

 <v-btn color="#0C093B" @click="GUARDAR()" > GUARDAR </v-btn>

         </v-layout>
    </v-card-actions>
 </v-card>
    
</v-layout>
</template>
<script>
import axios from "axios";
export default {
    data(){
        return {
            id:"",
            nombre1:"",
            nombre2:"",
            apellido1:"",
            apellido2:"",
            carrera:"",
            semestre:""

        }
    },
    methods:{
       GUARDAR(){
        axios.post("http://localhost:3000/usuario",{
            id:this.id,
            nombre1:this.nombre1,
            nombre2:this.nombre2,
            apellido1:this.apellido1,
            apellido2:this.apellido2,
            carrera:this.carrera,
            semestre:this.semestre
        }).then (response =>{
            console.log (response.data);
        })
}
    },
}
</script>
<style scoped>
#container {
    min-height: 100vh;
}
</style>
