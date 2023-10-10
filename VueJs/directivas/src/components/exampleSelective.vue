<template>
    <h1 v-if="visible">Hola mundo</h1>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';
    export default defineComponent({
        data() {
            return {
                visible: true
            }
        },
    })
</script>

<style lang="scss" scoped>

</style>