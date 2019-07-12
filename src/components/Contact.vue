<template>
  <v-container grid-list-lg>
    <current-heading title="Contact Us"></current-heading>
     <v-layout class="m-3">
      <v-flex>
        <div class="map">
          <iframe
          id="gmap_canvas" src="https://maps.google.com/maps?q=Bucharest%20Tineretului%2023&t=&z=15&ie=UTF8&iwloc=&output=embed" frameborder="0" marginheight="0" marginwidth="0">
          </iframe>
        </div>
      </v-flex>
    </v-layout>
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

<style scoped>
.map {
  background:url(../assets/loadingmap.gif) center center no-repeat;
}

#gmap_canvas{
  width: 100%;
  height: 100vh;
}
</style>