<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>{{ collectionName }}: {{ readersNumber }} {{ book.title }}</div>
  </div>
</template>

<script lang="ts">

import { reactive, ref } from 'vue';

export default {
    props: {
      collectionName: String
    },
    setup(props) {
      const readersNumber = ref(0)
      const book = reactive({ title: 'Vue 3 Guide' })

      // expose to template
      return {
        readersNumber,
        book
      }
    }
}
</script>