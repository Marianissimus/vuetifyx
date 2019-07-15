<template>
  <v-container class="px-0 py-0" fluid>

    <v-parallax
      light
      :src="require('../assets/back.jpg')"
      height= "650"
      width="100%"
      >
      <v-layout align-center justify-center>
        <v-flex>
          <div class="title">
            <!-- <h2>Welcome to</h2> -->
            <h1>
              <small>La</small>
              <br>
               Obsession
              <br/>
              <small>Restaurant</small>
            </h1>
          </div>
        </v-flex>
      </v-layout>
    </v-parallax>

  <v-layout align-space-around justify-space-around row py-5 wrap>
    <v-flex sm8 md3 d-flex :class="{'ma-4': $vuetify.breakpoint.smAndDown}">
      <v-card dark color="brown darken-2">
        <v-card-title >
          <div class="title font-weight-light">
            <span class="ml-3">BELIEF</span>
          </div>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <p>
          We believe that a restaurant must be striving to always re-create a certain feeling, an ineffable mixture of delicious food, impeccable serving, and serene atmosphere.
          </p><p>
          The search for an ideal time, for the je ne sais quoi, c'est ça La Obsession.
          </p>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex sm8 md3 d-flex :class="{'ma-4': $vuetify.breakpoint.smAndDown}">
      <v-card dark color="brown darken-2">
        <v-card-title >
          <div class="title font-weight-light">
            <span class="ml-3">HOW WE WORK</span>
          </div>
        </v-card-title>
        <v-divider></v-divider>
        <v-card-text>
          <p>
          We strive to achieve our belief with a cuisine based on the top, fresh local ingredients and innovating on their use.
          </p>
          <p>
          Therefore, our latest creation will be the freshest, and our creativity will make the familiar seem so new and joyfull.
          </p>
        </v-card-text>
      </v-card>
    </v-flex>

    <v-flex sm8 md3 d-flex :class="{'ma-4': $vuetify.breakpoint.smAndDown}">
      <v-card dark color="brown darken-2">
        <v-card-title >
          <div class="title font-weight-light">
            <span class="ml-3">FACILITIES</span>
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

.container {
  background-color: #FCF7F8;
}
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

.title small {
  font-family: 'Croissant One', cursive;
  letter-spacing: .1em;
  font-weight: 400;
}

.title h2 {
  font-family: 'Croissant One', cursive;
  color: #5D4037;
  text-shadow: 1px 2px 3px #CCC;
}

.v-card__text{
  font-size: 1.1em;
}
</style>