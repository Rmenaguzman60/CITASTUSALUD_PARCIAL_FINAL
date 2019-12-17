<template>
 <v-layout row wrap justify-center align-center>
 </v-card>
  <v-card class="mx-auto" color="#229BE1" dark max-width="900">
    

    <v-text>
 <center><h1 class row wrap justify-center align-center="tittle">CITA MEDICA</H1></center>
</v-text>

    <center> <v-img
      src = " https://www.todoandroid.es/wordpress/wp-content/uploads/2018/12/medico-kW3F-U502152478876EoB-624x385@El-Correo.jpg "
      height="300" 
      width="500"
    > </v-img></center>

<v-row >
    <v-col>
      <v-sheet height="400" width="700" >
        <v-calendar
          color="#229BE1"
          type="day"
        >
          <template v-slot:day-header="{ present }">
            <template
              v-if="present"
              class="text-center"
            >
              
            </template>
          </template>

          <template  v-slot:interval="{ hour }">
            <div class="text-center" >

             <v-btn color="light-blue" >  {{ hour }} HOY </v-btn>
             <v-btn color= "indigo" @click="AGENDAR()">AGENDAR</v-btn>
     <v-btn color= "indigo lighten-1" @click="ELIMINAR()">ELMINAR</v-btn>

            </div>
          </template>
        </v-calendar>
      </v-sheet>
    </v-col>
  </v-row>

 </v-card>
    
</v-layout>


</template>