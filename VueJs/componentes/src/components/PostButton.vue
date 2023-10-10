<template>
    <button class="post-button">Ver Detalle</button>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'PostButton'
    })
</script>

<style lang="scss" scoped>
    .post-button{
        background-color: antiquewhite;
        border: solid 2px darkgrey;
        padding: 3px;
        border-radius: 5px;
        box-shadow: 2px 2px 10px darkgrey;
    }
</style>