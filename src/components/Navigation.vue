<template>
  <v-toolbar app color="brown darken-4" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <router-link to="/home"><v-btn flat>Home</v-btn></router-link>
      <router-link to="/menu"><v-btn flat>Menu</v-btn></router-link>
      <router-link to="/promotions"><v-btn flat>Promotions</v-btn></router-link>
      <router-link to="/bookings"><v-btn flat>Bookings</v-btn></router-link>
      <router-link to="/gallery"><v-btn flat>Gallery</v-btn></router-link>
      <router-link to="/events"><v-btn flat>Events</v-btn></router-link>
      <router-link to="/contact"><v-btn flat>Contact</v-btn></router-link>
  </v-toolbar>
</template>

<script>
export default {
  name: 'AppNavigation',
  data () {
    return {
      appTitle: 'deliciousness'
    }
  }
}
</script>

<style scoped>
a {
  text-decoration: none;
}
</style>