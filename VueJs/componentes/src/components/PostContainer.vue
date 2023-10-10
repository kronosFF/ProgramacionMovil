<template>
    <h1>
        Listado de POSTS
    </h1>

    <div class="post-container">

        <!--Este es desde las props o propiedades-->
        <PostCard 
        
            v-for="post in posts" :key="post.contador"
            :tittle="post.tittle"
            :summary="post.summary"
        /> 

        

        <!--Este es desde el data -->
        <!-- <PostCard :tittle="tittle" :summary="summary"/>  -->

    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    import PostCard from './PostCard.vue';
    import datos from '../assets/json/datos.json'

    export default defineComponent ({
        name: 'PostContainer',
        components: {
            PostCard
        },

        data() {
            return {
                // tittle: 'Este es el titulo desde el data',
                // summary: 'Este es el summary desde data',
            }
        },

        //Variables computadas (No tienen valor fijo ya que necesitan de una base de datos, una consulta, un json, etc)
        computed: {
            //Para tomar los datos del json
            posts: () => {
                return datos.map((post:any) => {
                    return post
                })
            }
        }
    })
</script>

<style lang="scss" scoped>
    .post-container{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
    }
</style>