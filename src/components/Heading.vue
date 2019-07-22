<template>
  <v-layout row justify-center class="display-1 brown--text text--darken-2 pt-3 pb-4">
    <h1 class="mb-3">
      <v-flex class="text-xs-center custom mb-3">{{ title }}</v-flex>
    </h1>
  </v-layout>
</template>

<script>
export default {
  props: ['title']
}
</script>

<style>
 .custom {
  font-family: 'Croissant One', cursive;
  color: #5D4037;
  text-shadow: 1px 2px 3px #CCC;
 }

</style>