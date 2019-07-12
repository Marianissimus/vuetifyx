<template>
  <v-container grid-list-lg>

  <v-layout align-center justify-center>
    <v-flex>
      <div class="title">
        <h2>Welcome to</h2>
        <h1>
          MY DELICIOUS
          <br/>
          RESTAURANT
        </h1>
      </div>
    </v-flex>
  </v-layout>

  <v-flex class="gifpreloader">
    <v-parallax
    light
    src="https://picsum.photos/1200/1600"
    >
      <v-layout
      column
      justify-center
      align-center
      >
        <h1 class="display-2 font-weight-thin mb-3">Deliciousness</h1>
        <h4 class="subheading">Enjoy the finest food we have cooked today!</h4>
      </v-layout>
    </v-parallax>
  </v-flex>

  <v-layout row class="my-3">
    <v-flex sm4>
      <v-card dark color="brown darken-2">
        <v-card-title >
          <div class="title font-weight-light">
            <span class="ml-3">About</span>
          </div>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          We believe that coming to a restaurant must bring people together around excellent food, sometimes traditional, sometimes innovative, and even better atmosphere.
        </v-card-text>
      </v-card>
    </v-flex>
    <v-flex sm4>
      <v-card dark color="brown lighten-2">
        <v-card-text>two</v-card-text>
      </v-card>
    </v-flex>
    <v-flex sm4>
      <v-card dark color="brown darken-2">
        <v-card-title >
          <div class="title font-weight-light">
            <span class="ml-3">Facilities</span>
          </div>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <v-list-tile>
            <v-icon class="mr-3" color="white">ac_unit</v-icon>
            Air Conditioning
          </v-list-tile>
          <v-list-tile>
            <v-icon class="mr-3" color="white">cake</v-icon>
            Special Events
          </v-list-tile>
          <v-list-tile>
            <v-icon class="mr-3" color="white">child_care</v-icon>
            <span>Child Care Amenities</span>
          </v-list-tile>
          <v-list-tile>
            <v-icon class="mr-3" color="white">local_parking</v-icon>
            <span>Private Parking</span>
          </v-list-tile>
        </v-card-text>
      </v-card>
    </v-flex>

  </v-layout>

  <v-layout row align-center justify-center>
    <v-flex>
      <v-carousel
       interval="8000"
       >
        <v-carousel-item
          v-for="(item,i) in carouselItems"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>
    </v-flex>
  </v-layout>

</v-container>

  </div>
</template>

<script>
export default {
  data () {
    return {
      carouselItems: [
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg'
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>

.gifpreloader {
    background:url(../assets/loading.gif) center center no-repeat;
}

.title {
  font-family: 'Josefin Sans', sans-serif;
  text-align: center;
  color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.title h1 {
  background-image: url(https://media.giphy.com/media/2uBxu5oXGSgzS/giphy.gif);
  background-size: cover;
  background-position: 0;
  color: transparent;
  -moz-background-clip: text;
  -webkit-background-clip: text;
  text-transform: uppercase;
  font-size: 5em;
  line-height: 1.3;
  margin: 10px 0;
  @media only screen and (max-width: 600px)  {
    font-size: 3em;
  }
}

.title h2 {
  font-family: 'Croissant One', cursive;
  color: #5D4037;
  text-shadow: 1px 2px 3px #CCC;
}
</style>