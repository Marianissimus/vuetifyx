<template>
  <v-container grid-list-lg>

  <v-layout align-center justify-center>
    <div class="title">
      <h2>Welcome to</h2>
      <h1>
        MY DELICIOUS
        <br/>
        RESTAURANT
      </h1>
    </div>
  </v-layout>

<!--     <v-layout>
      <v-parallax
      dark
      src="https://picsum.photos/1200/600"
      >
        <v-layout
        align-center
        column
        justify-center
        >
          <h1 class="display-2 font-weight-thin mb-3">Vuetify.js</h1>
          <h4 class="subheading">Build your application today!</h4>
        </v-layout>
      </v-parallax>
    </v-layout> -->

    <v-layout align-center justify-center class="mt-3">
       <v-carousel
       interval="8000"
       >
        <v-carousel-item
          v-for="(item,i) in carouselItems"
          :key="i"
          :src="item.src"
        ></v-carousel-item>
      </v-carousel>

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

.title {
  font-family: 'Josefin Sans', sans-serif;
  text-align: center;
  color: #FFF;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 40vh;
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