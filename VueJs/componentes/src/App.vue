<template>

  <PostContainer/>
</template>

//Lang="ts" significa que está utilizando typeScript
<script lang="ts">
  import { defineComponent } from 'vue';
  import PostContainer from './components/PostContainer.vue';

  export default defineComponent ({
    components: {
      PostContainer
    }
  })
</script>

//scoped es para que solo se apliquen los estilos a ese componente
<style lang="scss" scoped>

</style>
