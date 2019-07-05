<template>
  <v-container grid-list-lg>
    <v-tabs class="mb-3" fixed-tabs color="transparent" dark slider-color="brown darken-2" show-arrows>
      <v-tab>
        <v-btn @click="filter('all')">all</v-btn>
      </v-tab>
      <v-tab>
        <v-btn @click="filter('breakfast')">breakfast</v-btn>
      </v-tab>
      <v-tab>
        <v-btn @click="filter('lunch')">lunch</v-btn>
      </v-tab>
      <v-tab>
        <v-btn @click="filter('dinner')">dinner</v-btn>
      </v-tab>
    </v-tabs>
    <v-layout row wrap align-content-space-around>
      <v-flex v-for="item in filteredItems" :key="item.id" xs12 sm6 md4 lg3>
        <v-card elevation="12" ripple height="320">
          <v-img class="white--text shadow headline black text-capitalize" height="200px" src="https://picsum.photos/200">
            <v-card-title>
              {{ item.name }}
            </v-card-title>
          </v-img>
          <v-card-text>
            <v-layout row>
            <p class="brown--text">{{ item.description }}</p>
            </v-layout>
          </v-card-text>
          <v-card-actions>
            <v-rating hover background-color="brown lighten-3" v-model="item.rating" color="brown darken-1" class="bottomLeft"></v-rating>
            <v-btn color="brown darken-2" dark fab bottom class="bottomRight">{{ item.price }} lei</v-btn>
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
      items: [],
      filteredItems: []
    }
  },
  created () {
    this.fetchMenu()
  },
  methods: {
    fetchMenu() {
      this.items = menuItems.menu
      this.filteredItems = this.items
    },
    filter(arg){
      this.filteredItems = (arg === 'all') ? this.items : this.items.filter(el => el.type.includes(arg))
    }
  }
}
</script>

<style scoped>
.bottomRight {
  position: absolute;
  bottom: 10px;
  right: 10px;
}
.bottomLeft{
  position: absolute;
  bottom: 15px;
  left: 10px;
}
.shadow {
  text-shadow: 0px 0px 4px #000000;
}
</style>