<template>
  <h1>
    Hola {{ nombre }}
  </h1>
</template>

<script lang="ts">
  export default {

    //Para declarar variables
    data() {
      return {
        nombre:'Yeison',
        edad:22,
      }
    },

    //Para ejecutar en el momento en que se monte el componente
    //Se ejecuta apenas se compile
    mounted() {
      this.saludar();
    },

    //Toda la logica JS
    methods: {
      saludar(){
        alert('Hola');
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss"></style>
