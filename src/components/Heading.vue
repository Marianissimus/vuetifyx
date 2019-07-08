<template>
  <v-layout row justify-center class="display-1 brown--text text--darken-2 pt-3 pb-3">
    <h1 class="mb-3">
      {{ title }}
    </h1>
  </v-layout>
</template>

<script>
export default {
  props: ['title']
}
</script>
