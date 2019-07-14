<template>
  <div>
  <v-toolbar app color="brown darken-4" dark>
    <v-spacer></v-spacer>
    <v-toolbar-items class="hidden-sm-and-down">
      <v-btn flat to="/home">
        <v-icon class="mr-1">home</v-icon>
        Home
      </v-btn>
      <v-btn flat to="/menu">
        <v-icon class="mr-1 material-icons">restaurant_menu</v-icon>
        Menu
      </v-btn>
      <v-btn flat to="/promotions">
        <v-icon class="mr-1 material-icons">local_offer</v-icon>
        Promotions
      </v-btn>
       <v-btn flat to="/gallery">
        <v-icon class="mr-1 material-icons">photo_album</v-icon>
        Gallery
      </v-btn>
      <v-btn flat to="/events">
        <v-icon class="mr-1 material-icons">event</v-icon>
        Events
      </v-btn>
      <v-btn flat to="/contact">
        <v-icon class="mr-1 material-icons">map</v-icon>
        Contact
      </v-btn>
      <v-btn flat @click="dialog = true" color="lime" light>
        <v-icon class="mr-1 material-icons">call_to_action</v-icon>
        Book Now!
      </v-btn>
    </v-toolbar-items>
    <v-spacer></v-spacer>
    <v-toolbar-side-icon @click="toggleDrawer"></v-toolbar-side-icon>
  </v-toolbar>
  <app-drawer ref="appDrawer" @makeABooking="dialog = true"></app-drawer>
  <make-a-booking :dialog="dialog" @hasFinished="dialog = false"></make-a-booking>
  </div>
</template>

<script>
import NavigationDrawer from './NavigationDrawer'

export default {
  components: {
    'app-drawer': NavigationDrawer
  },
  name: 'AppNavigation',
  data () {
    return {
      dialog: false,
      drawer: false
    }
  },
  methods: {
    toggleDrawer() {
      this.$refs.appDrawer.toggleDrawer()
    }
  },
}
</script>

<style scoped>
v-btn {
  height: 100px;
}
a {
  text-decoration: none;
  color: white;
}
test {
  border: 1px solid yellow;
}
</style>