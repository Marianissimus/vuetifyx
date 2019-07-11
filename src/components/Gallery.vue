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
                v-for="n in 9"
                :key="n"
                xs6 sm4 lg3
                d-flex
              >
                <v-card flat tile class="d-flex pointer">
                  <v-img
                    :src="`https://picsum.photos/500/300?image=${n * 5 + 10}`"
                    :lazy-src="`https://picsum.photos/10/6?image=${n * 5 + 10}`"
                    aspect-ratio="1"
                    class="grey lighten-2"
                    @click="openImage(`${n * 5 + 10}`)"
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
              width="800px"
              height="500px"
              contain
              :src="currentSrc"
              >
               <v-layout pa-2 class="white--text">
                  <v-spacer></v-spacer>
                  <span
                  @click="currentImg = false"
                  class="headline pointer font-weight-black shadow mr-2">
                    <v-icon large color="white">close</v-icon>
                  </span>
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
      currentSrc: null,
      lazySrc: null
    }
  },
  methods: {
    openImage(img) {
      this.currentImg = img
      this.currentSrc = "https://picsum.photos/800/500?image=" + img
      this.lazySrc = "https://picsum.photos/500/300?image=" + img
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
</style>