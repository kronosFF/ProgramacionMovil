<template>
    <div class="image">
        <img src=""/>
    </div>
</template>

<script lang="ts">
    import { defineComponent } from 'vue';

    export default defineComponent({
        name: 'post-image',
        props: {
            ruta:{
                type: String,
                      default: ""
            }
        }
    })
</script>

<style lang="scss" scoped>
    .image{
        display: flex;
        justify-content: center;
        img{
            width: 100px;
            height: 100px;
        }
    }
</style>