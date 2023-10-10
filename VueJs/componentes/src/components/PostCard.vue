<template>
    <div class="post-card">
        <h1>{{ tittle }}</h1>
        <p>
            {{ summary }}
        </p>

        <post-image ruta="{{ image }}"/>

        <PostButton/>

    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import PostButton from './PostButton.vue';
    import PostImage from './PostImage.vue';

    export default defineComponent({
        name: 'PostCard',
        components: { //Es para utilizar otro componente dentro de este componente
            PostButton, //Componente que se está utilizando dentro de este mismo
            PostImage
        },

        //Propiedades
        props: {

            tittle: {
                type: String, 
                      default: ""
            }, 

            summary: {
                type: String , 
                      default: ""
            },

            text: {
                type: String,
                      default: ""
            },

            image: {
                type: String,
                      default: ""
            }
        }
    })
</script>

<style lang="scss" scoped>
    .post-card{
        border-radius: 15px;
        padding: 10px;
        margin: 5px;
        border: solid 1px darkgrey;
        min-width: 80%; //para que llene el espacio
    }
</style>
