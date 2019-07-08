<template>
  <v-container grid-list-lg>
    <current-heading title="Contact Us"></current-heading>
  </v-container>
</template>

<script>
import Heading from './Heading.vue'

export default {
  components: {
    'current-heading': Heading
  },
  data () {
    return {
    }
  }
}
</script>