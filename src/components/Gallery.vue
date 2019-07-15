<template>
  <v-container grid-list-lg>
    <current-heading title="Gallery"></current-heading>
    <!-- the gallery -->
    <v-layout align-center justify-center>
      <v-flex sm10 md10>
        <v-card>
          <v-container grid-list-md fluid>
            <v-layout row wrap>
              <v-flex
                v-for="n in 12"
                :key="n"
                xs6 sm4 lg3
                d-flex
              >
                <v-card flat tile class="d-flex pointer">
                  <v-img
                    :src="require('../assets/gallery/gallery' + n + '.jpg')"
                    :lazy-src="require('../assets/gallery/gallery' + n + '.jpg')"
                    aspect-ratio="1"
                    class="grey lighten-2"
                    @click="openImage(n)"
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
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-card>
      </v-flex>
    </v-layout>

    <!-- the pop-up image -->
    <v-layout align-center justify-center>

        <v-dialog v-model="currentImg" v-if="currentImg" width="800px" height="500px">
          <v-card flat>

           <v-img
              aspect-ratio="1"
              cover
              :src="currentImg"
              >

              <v-layout class="white--text navigation">

                <v-btn v-show="currentIndex > 1" flat class="leftArrow shadow" @click="openImage(currentIndex-1)">
                  <v-icon x-large color="white">navigate_before</v-icon>
                 </v-btn>

                 <v-btn v-show="currentIndex < 12" flat class="rightArrow shadow" @click="openImage(currentIndex+1)">
                  <v-icon x-large color="white">navigate_next</v-icon>
                 </v-btn>

                 <v-btn flat @click="currentImg = false" class="headline pointer font-weight-black shadow closebtn">
                   <v-icon x-large color="white">close</v-icon>
                 </v-btn>
              </v-layout>

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
          </v-card>
        </v-dialog>

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
      currentImg: null,
      currentIndex: null,
      lazySrc: null
    }
  },
  methods: {
    openImage(img) {
      this.currentIndex = img
      this.currentImg = require('../assets/gallery/gallery' + img + '.jpg')
      // this.lazySrc = "https://picsum.photos/500/300?image=" + img
    }
  }
}
</script>

<style scoped>
.pointer {
  cursor: pointer;
}

.shadow {
  text-shadow: 0px 0px 4px #000000;
}

.leftArrow{
  position: absolute;
  color: white;
  background: none;
  left: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.rightArrow{
  position: absolute;
  right: 10px;
  top: 50%;
  transform: translateY(-50%);
}

.closebtn {
  position: absolute;
  top: 10px;
  right: 10px;
}

</style>