<template>
    <v-navigation-drawer v-model="drawer" app clipped floating temporary right dark class="brown darken-4">

      <v-list-tile>
        <v-btn light flat color="brown lighten-1" @click="drawer = false">
          <v-icon class="mr-1 material-icons-outlined">close</v-icon>
          Close
        </v-btn>
      </v-list-tile>

      <v-divider></v-divider>

      <v-list-tile>
        <v-btn flat to="/home">
          <v-icon class="mr-1">home</v-icon>
          Home
        </v-btn>
      </v-list-tile>

      <v-list-tile>
        <v-btn flat to="/menu">
          <v-icon class="mr-1 material-icons-outlined">restaurant_menu</v-icon>
          Menu
        </v-btn>
      </v-list-tile>

      <v-list-tile>
        <v-btn flat to="/promotions">
          <v-icon class="mr-1 material-icons-outlined">local_offer</v-icon>
          Promotions
        </v-btn>
      </v-list-tile>

      <v-list-tile>
         <v-btn flat to="/gallery">
          <v-icon class="mr-1 material-icons-outlined">photo_album</v-icon>
          Gallery
        </v-btn>
      </v-list-tile>

      <v-list-tile>
        <v-btn flat to="/events">
          <v-icon class="mr-1 material-icons-outlined">event</v-icon>
          Events
        </v-btn>
      </v-list-tile>

      <v-list-tile>
        <v-btn flat to="/contact">
          <v-icon class="mr-1 material-icons-outlined">map</v-icon>
          Contact
        </v-btn>
      </v-list-tile>

      <v-list-tile>
        <v-btn flat @click="$emit('makeABooking')" color="lime" light>
          <v-icon class="mr-2 material-icons-outlined">call_to_action</v-icon>
          Book Now!
        </v-btn>
      </v-list-tile>

    </v-navigation-drawer>
</template>


<script>
export default {
  data () {
    return {
      drawer: false
    }
  },
  methods: {
    toggleDrawer () {
      this.drawer = !this.drawer
    }
  }
}
</script>
