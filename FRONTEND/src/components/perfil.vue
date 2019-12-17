<template>
 <v-layout row wrap justify-center align-center>
 <v-card class="mx-auto" color="#229BE1" dark max-width="400">
    

    <center> <h2 class row wrap justify-center align-center="title"> Perfil </h2> </center>

    </v-card-title>
    <v-img
      src = " https://cdn.vuetifyjs.com/images/cards/mountain.jpg "
      altura = " 10" 
      ancho = "25px" 
    > </v-img>
    <center><h2 class row wrap justify-center align-center="tittle">DATOS</H2></center>
    </v-card-title>
    <v-card-text>
    <v-text-<v-text-field
        label="id"
        v-model="id"
    ></v-text-field>
    <v-text-<v-text-field
        label="nombre1"
        v-model="nombre1"
    ></v-text-field>
    <v-text-<v-text-field
        label="nombre2"
        v-model="nombre2"
    ></v-text-field>
    <v-text-<v-text-field
        label="apellido1"
        v-model="apellido1"
    ></v-text-field>
    <v-text-<v-text-field
        label="apellido2"
        v-model="apellido2"
    ></v-text-field>
    <v-text-<v-text-field
        label="carrera"
        v-model="carrera"
    ></v-text-field>
    <v-text-<v-text-field
        label="semestre"
        v-model="semestre"
    ></v-text-field>
     </v-card-text>
     <v-card-actions>
     <v-layout new wrap justify-center>
     <v-btn color= "#0C093B" @click="editar()">EDITAR</v-btn>
     <v-btn color= "#0C093B" @click="guardar()">GUARDAR</v-btn>

    </v-layout>        
</v-card-actions>

 </v-card>
    
</v-layout>

</template>