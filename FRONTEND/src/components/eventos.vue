<template>
 <v-layout row wrap justify-center align-center>
 </v-card>
  <v-card class="mx-auto" color="#229BE1" dark max-width="900">
    
<v-text>
 <center><h1 class row wrap justify-center align-center="tittle">EVENTOS</H1></center>
</v-text>
 <v-carousel hide-delimiters>
    <v-carousel-item
      v-for="(item,i) in items"
      :key="i"
      :src="item.src"
    ></v-carousel-item>
  </v-carousel>

  </v-card>
    
</v-layout>


</template>
<script>
  export default {
    data () {
      return {
        items: [
          {
            src: 'https://elcongresocasadelpueblo.files.wordpress.com/2011/10/volantesangre.jpg',
          },
          {
            src: 'https://i1.wp.com/www.formulamedica.com.co/wp-content/uploads/2018/10/ANDI-Foro-de-la-salud-Formula-Medica.jpg?resize=1000%2C518&ssl=1',
          },
          {
            src: 'http://www.iessdeh.org/foronuevasperspectivas/images/webprograma_01.jpg',
          },
          {
            src: 'https://plumaslibres.com.mx/wp-content/uploads/2017/10/INVITACIO%CC%81N-FORO-PARA-LA-CONCIENCIA-SOBRE-EL-CA%CC%81NCER-DE-MAMA.jpg',
          },
        ],
      }
    },
  }
</script>