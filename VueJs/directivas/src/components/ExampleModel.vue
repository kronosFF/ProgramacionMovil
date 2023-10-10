<template>
    <h1>Mi formulario</h1>
    <label for="">Nombre: </label>
    <input v-model="nombre" type="text">

    <br><br>

    <label for="">Apellido: </label>
    <input v-model="apellido" type="text">

    <br><br>

    <label for="">Edad: </label>
    <input v-model="edad" type="text">

    <br><br>

    <button @click="mostrarNombre()">Ver dato</button>
    <button @click="ocultarNombre()">Ocultar dato</button>

    <br><br>

    <div>
        <h3 v-show="mostrar">{{ nombre}} | {{ apellido }} | {{ edad }}</h3>
    </div>

    <img :src="require('@/assets/emeplo.png')"  alt="">
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
    name: 'ExampleModel',

    data() {
        return {
            nombre: '',
            apellido: '',
            edad: '',
            mostrar: false
            //Asignar el valor de una variable a un campo y viceverza
        }
    },

    methods: {
        mostrarNombre(){
            this.mostrar = true
        },

        ocultarNombre(){
            this.mostrar = false
        }
    },
})

</script>

<style lang="scss" scoped>

</style>