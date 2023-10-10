<template>
    <p :class="{rojo:valid, verde:!valid}">{{ error }}</p>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    
    export default defineComponent({
        name: 'ClassBind',
        data() {
            return {
                correcto: 'Todo Bien',
                error: 'Algo salió mal',
                valid: false
            }
        },
    })

</script>

<style lang="scss" scoped>
    .rojo{
        color: red;
    }

    .verde{
        color: green;
    }
</style>