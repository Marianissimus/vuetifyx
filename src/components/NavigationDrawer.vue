<template>
    <v-navigation-drawer :value="drawer" app right dark class="brown darken-4">
      <v-toolbar flat>
        <v-list>
          <v-list-tile>
            <v-list-tile-title class="title">
              Application
            </v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-toolbar>

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
        <v-btn flat to="/bookings">
          <v-icon class="mr-2 material-icons-outlined">contact_mail</v-icon>
          Bookings
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

    </v-navigation-drawer>
</template>


<script>
export default {
  props: ['drawer']
}
</script>
