<template>
  <v-container grid-list-lg>
    <current-heading title="Our Menu"></current-heading>
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
      <v-flex v-for="(item, card_index) in filteredItems" :key="item.id" xs12 sm6 md4 lg3>
        <v-card elevation="12" ripple height="330">
          <v-img height="200px"
           :src="require(`../assets/menu/${item.image}_sm.jpg`)"
           style="cursor: pointer"
           @click="enlarge(item.image, card_index)"
          >
            <v-card-title  class="white--text titleshadow headline text-capitalize">
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

        <!-- the pop-up image -->
    <v-layout align-center justify-center>

        <v-dialog v-model="currentImg" v-if="currentImg" max-width="80vw">

          <v-layout align-center justify-center fill-height style="position: relative">

           <v-img
              cover
              height= "800px"
              :src="require(`../assets/menu/${currentImg}.jpg`)"
            >

            <template v-slot:placeholder>
              <v-layout
                fill-height
                align-center
                justify-center
                ma-0
              >
                <v-progress-circular indeterminate color="grey lighten-5"></v-progress-circular>
              </v-layout>
            </template>

            </v-img>

            <v-btn v-if="currentIndex > 0"  absolute left flat class="shadow" @click="currentImg = prevImg; currentIndex -= 1">
              <v-icon x-large color="white">navigate_before</v-icon>
             </v-btn>

             <v-btn v-if="currentIndex < filteredItems.length - 1" absolute right flat class="shadow" @click="currentImg = nextImg; currentIndex += 1">
              <v-icon x-large color="white">navigate_next</v-icon>
             </v-btn>

             <v-btn absolute top right flat class="shadow" style="margin-top: 40px;"
              @click="closeImage"
             >
               <v-icon x-large color="white">close</v-icon>
             </v-btn>

          </v-layout>

        </v-dialog>
    </v-layout>

  </v-container>
</template>

<script>
import menuItems from '../data/menu.json'
import Heading from './Heading.vue'

export default {
  components: {
    'current-heading': Heading
  },
  data () {
    return {
      items: [],
      filteredItems: [],
      isImageEnlarged: false,
      currentImg: false,
      currentIndex: null
    }
  },
  created () {
    this.fetchMenu()
  },
  computed: {
    nextImg() {
      return this.filteredItems[this.currentIndex + 1].image
    },
    prevImg() {
      return this.filteredItems[this.currentIndex - 1].image
    }
  },
  methods: {
    fetchMenu() {
      this.items = menuItems.menu
      this.filteredItems = this.items
    },
    filter(arg){
      this.filteredItems = (arg === 'all') ? this.items : this.items.filter(el => el.type.includes(arg))
    },
    enlarge(item, arg){
      this.currentImg = item
      this.isImageEnlarged = true
      this.currentIndex = arg
    },
    closeImage () {
      this.isImageEnlarged = false
      this.currentImg = false
      this.currentIndex = null
    },
  }
}
</script>

<style>
.theme--dark.v-icon {
    color: #3e2723;
}


.shadow {
  text-shadow: 0px 0px 4px #000000;
}

.titleshadow {
  text-shadow:  0px 0px 1px #3E2723,
                0px 0px 2px #3E2723,
                0px 0px 3px #3E2723,
                0px 0px 4px #3E2723,
                0px 0px 5px #3E2723,
                0px 0px 6px #3E2723;
}

.bottomRight {
  position: absolute;
  bottom: 10px;
  right: 10px;
  pointer-events: none;
}
.bottomLeft{
  position: absolute;
  bottom: 15px;
  left: 10px;
}

</style>