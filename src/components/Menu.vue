<template>
  <v-container grid-list-lg>
    <v-layout row wrap align-content-space-around>
      <v-flex v-for="item in items" :key="item.id" xs12 sm6 md4 lg3>
        <v-card elevation="12" ripple height="310">
          <v-img class="white--text" height="200px" src="https://picsum.photos/200">
            <v-card-title>
              {{ item.name }}
            </v-card-title>
          </v-img>
          <v-card-text>
            <v-layout row>
            <p>{{ item.description }}</p>
            </v-layout>
          </v-card-text>
          <v-card-actions>
            <v-layout row justify-end>
              <v-btn>{{ item.price }} lei</v-btn>
            </v-layout>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
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
