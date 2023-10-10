<template>
  <exampleFor></exampleFor>
  <ClassBind></ClassBind>
  <ExampleModel></ExampleModel>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import exampleSelective from './components/exampleSelective.vue';
import exampleFor from './components/exampleFor.vue';
import ClassBind from './components/ClassBind.vue';
import ExampleModel from './components/ExampleModel.vue';

export default defineComponent({
  components: {
    exampleFor,
    ClassBind,
    ExampleModel
  }

  
})

</script>

<style lang="scss" scoped>

</style>
