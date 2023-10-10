<template>
    <ul>
        <li v-for="pais in paises" :key="pais">
          {{ pais.codigo }} - {{ pais.nombre }} - {{ pais.Idioma }}
        </li>

    </ul>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'ExampleFor',

        data() {
            return {
                paises: [
                    {
                        'nombre' : 'Colombia',
                        'codigo' : '10',
                        'Idioma' : 'Español'
                    },

                    {
                        'nombre' : 'Perú',
                        'codigo' : '2',
                        'Idioma' : 'Español'
                    },

                    {
                        'nombre' : 'Usa',
                        'codigo' : '14',
                        'Idioma' : 'Ingles'
                    }
                ]
            }
        },
    })
</script>

<style lang="scss" scoped>

</style>