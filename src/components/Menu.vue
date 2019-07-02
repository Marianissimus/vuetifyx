<template>
<v-layout justify-center>
  <v-container
    grid-list-md
  >
      <v-flex xs12 sm6>

        <v-card v-for="item in items" :key="item.id" elevation="12" ripple width="300">
          <v-card-title>{{ item.name }} </v-card-title>
          <v-card-text>
             <v-img
            src="https://picsum.photos/200"
            height="200px">
            </v-img>
          </v-card-text>
          <v-card-actions>
            {{ items }}
          </v-card-actions>

        </v-card>

      </v-flex>

  </v-container>
</v-layout>
</template>

<script>
import menuItems from '../data/menu.json'

export default {
  data () {
    return {
      items: []
    }
  },
  created () {
    this.fetchMenu()
  },
  methods: {
    fetchMenu() {
      this.items = menuItems.menu
    }
  }
}
</script>
