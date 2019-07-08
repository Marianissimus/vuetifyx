<template>
  <v-toolbar app color="brown darken-4" dark>
      <v-toolbar-side-icon></v-toolbar-side-icon>
      <router-link to="/home">
        <v-btn flat>
          <v-icon class="mr-1">home</v-icon>
          Home
        </v-btn>
      </router-link>
      <router-link to="/menu">
        <v-btn flat>
          <v-icon class="mr-1 material-icons-outlined">restaurant_menu</v-icon>
          Menu
        </v-btn>
      </router-link>
      <router-link to="/promotions">
        <v-btn flat>
          <v-icon class="mr-1 material-icons-outlined">local_offer</v-icon>
          Promotions
        </v-btn>
      </router-link>
      <router-link to="/bookings">
        <v-btn flat>
          <v-icon class="mr-1 material-icons-outlined">contact_mail</v-icon>
          Bookings
        </v-btn>
      </router-link>
      <router-link to="/gallery">
        <v-btn flat>
          <v-icon class="mr-1 material-icons-outlined">photo_album</v-icon>
          Gallery
        </v-btn>
      </router-link>
      <router-link to="/events">
        <v-btn flat>
          <v-icon class="mr-1 material-icons-outlined">event</v-icon>
          Events
        </v-btn>
      </router-link>
      <router-link to="/contact">
        <v-btn flat>
          <v-icon class="mr-1 material-icons-outlined">map</v-icon>
          Contact
        </v-btn>
      </router-link>
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