<template>
  <v-container class="px-0 py-0" fluid>
    <v-parallax light :src="require('../assets/back2.jpg')" height="650" width="100%">
      <v-layout align-center justify-center>
        <v-flex>
          <div class="title">
            <!-- <h2>Welcome to</h2> -->
            <h1>
              <small>The</small>
              <br />Obsession
              <br />
              <small>Restaurant</small>
            </h1>
          </div>
        </v-flex>
      </v-layout>
    </v-parallax>

    <v-layout align-space-around justify-space-around row py-5 wrap>
      <v-flex sm8 md3 d-flex :class="{'ma-4': $vuetify.breakpoint.smAndDown}">
        <v-card dark color="brown darken-2">
          <v-card-title>
            <div class="title font-weight-light">
              <span class="ml-3">BELIEF</span>
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <p>We believe that a restaurant must be striving to always re-create a certain feeling, an ineffable mixture of delicious food, impeccable serving, and serene atmosphere.</p>
            <p>The search for an ideal time, for the je ne sais quoi, c'est ça La Obsession.</p>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex sm8 md3 d-flex :class="{'ma-4': $vuetify.breakpoint.smAndDown}">
        <v-card dark color="brown darken-2">
          <v-card-title>
            <div class="title font-weight-light">
              <span class="ml-3">HOW WE WORK</span>
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <p>We strive to achieve our belief with a cuisine based on the top, fresh local ingredients and innovating on their use.</p>
            <p>Therefore, our latest creation will be the freshest, and our creativity will make the familiar seem so new and joyfull.</p>
          </v-card-text>
        </v-card>
      </v-flex>

      <v-flex sm8 md3 d-flex :class="{'ma-4': $vuetify.breakpoint.smAndDown}">
        <v-card dark color="brown darken-2">
          <v-card-title>
            <div class="title font-weight-light">
              <span class="ml-3">FACILITIES</span>
            </div>
          </v-card-title>
          <v-divider></v-divider>
          <v-card-text>
            <v-list-tile>
              <v-icon class="mr-3" color="white">ac_unit</v-icon>Air Conditioning
            </v-list-tile>
            <v-list-tile>
              <v-icon class="mr-3" color="white">cake</v-icon>Special Events
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
        <v-carousel interval="8000" height="1000">
          <v-carousel-item v-for="(item,i) in carouselItems" :key="i" :src="item.src"></v-carousel-item>
        </v-carousel>
      </v-flex>
    </v-layout>

    <v-layout
      align-center
      justify-center
      column
      fill-height
      dark
      class="mt-5 mb-3 px-3 brown darken-4"
    >
      <v-flex xs12 class="py-3">
        <h3 class="title mt-2">Find us on</h3>
      </v-flex>
      <v-layout row>
        <v-flex>
          <figure>
            <span id="facebook">
              <svg class="svg-icon" viewBox="0 0 20 20">
                <path
                  class="contactIcons"
                  fill="#FFF"
                  d="M11.344,5.71c0-0.73,0.074-1.122,1.199-1.122h1.502V1.871h-2.404c-2.886,0-3.903,1.36-3.903,3.646v1.765h-1.8V10h1.8v8.128h3.601V10h2.403l0.32-2.718h-2.724L11.344,5.71z"
                />
              </svg>
            </span>
          </figure>
        </v-flex>
        <v-flex>
          <figure>
            <span id="instagram">
              <svg class="svg-icon" viewBox="0 0 24 24">
                <path
                  class="contactIcons"
                  fill="#FFF"
                  d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"
                />
              </svg>
            </span>
          </figure>
        </v-flex>
        
        <v-flex>
          <figure>
            <span id="tripadvisor">
              <svg class="svg-icon" viewBox="0 0 24 24">
                <path
                  class="contactIcons"
                  fill="#FFF"
                 d="M23.011 9.532c.281-1.207 1.175-2.416 1.175-2.416h-4.012c-2.251-1.455-4.981-2.226-8.013-2.226-3.14 0-5.978.78-8.214 2.251H.186s.885 1.186 1.17 2.386C.624 10.534.189 11.749.189 13.084c0 3.316 2.697 6.008 6.012 6.008 1.891 0 3.571-.885 4.681-2.254l1.275 1.916 1.291-1.936c.57.736 1.32 1.336 2.205 1.74 1.455.66 3.092.736 4.592.18 3.106-1.154 4.696-4.621 3.556-7.726-.209-.556-.48-1.051-.81-1.485l.02.005zm-3.171 8.072c-1.2.445-2.505.395-3.67-.143-.824-.383-1.503-.982-1.988-1.727-.201-.299-.375-.623-.503-.971-.146-.395-.22-.803-.259-1.215-.074-.832.045-1.673.405-2.453.54-1.164 1.501-2.051 2.701-2.496 2.49-.914 5.25.361 6.166 2.841.916 2.481-.36 5.245-2.835 6.163h-.017zm-9.668-1.834c-.863 1.271-2.322 2.113-3.973 2.113-2.646 0-4.801-2.156-4.801-4.797 0-2.641 2.156-4.802 4.801-4.802s4.798 2.161 4.798 4.802c0 .164-.03.314-.048.479-.081.811-.341 1.576-.777 2.221v-.016zM3.15 13.023c0 1.641 1.336 2.971 2.971 2.971s2.968-1.33 2.968-2.971c0-1.635-1.333-2.964-2.966-2.964-1.636 0-2.971 1.329-2.971 2.964H3.15zm12.048 0c0 1.641 1.329 2.971 2.968 2.971 1.636 0 2.965-1.33 2.965-2.971 0-1.635-1.329-2.964-2.965-2.964-1.635 0-2.971 1.329-2.971 2.964h.003zm-11.022 0c0-1.071.869-1.943 1.936-1.943 1.064 0 1.949.873 1.949 1.943 0 1.076-.869 1.951-1.949 1.951-1.081 0-1.951-.875-1.951-1.951h.015zm12.033 0c0-1.071.869-1.943 1.949-1.943 1.066 0 1.937.873 1.937 1.943 0 1.076-.87 1.951-1.952 1.951-1.079 0-1.949-.875-1.949-1.951h.015zM12.156 5.94c2.161 0 4.111.389 5.822 1.162-.645.018-1.275.131-1.906.36-1.515.555-2.715 1.665-3.375 3.125-.315.66-.48 1.359-.541 2.065-.225-3.076-2.76-5.515-5.881-5.578C7.986 6.34 9.967 5.94 12.112 5.94h.044z"
                />
              </svg>
            </span>
          </figure>
        </v-flex>
      </v-layout>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      carouselItems: [
        {
          src: require("../assets/gallery/gallery12.jpg")
        },
        {
          src: require("../assets/menu/pancakes.jpg")
        },
        {
          src: require("../assets/gallery/gallery4.jpg")
        },
        {
          src: require("../assets/menu/avocado_bread.jpg")
        }
      ]
    };
  }
};
</script>

<style lang="scss" scoped>
.container {
  background-color: #fcf7f8;
}
.gifpreloader {
  background: url(../assets/loading.gif) center center no-repeat;
}

.title {
  font-family: "Josefin Sans", sans-serif;
  text-align: center;
  color: #fff;
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
  background-clip: text;
  text-transform: uppercase;
  font-size: 5em;
  line-height: 1.3;
  margin: 10px 0;
  @media only screen and (max-width: 600px) {
    font-size: 3em;
  }
}

.title small {
  font-family: "Croissant One", cursive;
  letter-spacing: 0.1em;
  font-weight: 400;
}

.title h2 {
  font-family: "Croissant One", cursive;
  color: #5d4037;
  text-shadow: 1px 2px 3px #ccc;
}

.v-card__text {
  font-size: 1.1em;
}

.contactIcons {
  -webkit-transition: fill 0.5s ease-in-out;
  transition: fill 0.5s ease-in-out;
  fill: #fff;
  stroke-width: 0.2px;
}

figure {
  width: 3em;
  height: auto;
  margin: 2em;
}

figure:hover {
  cursor: pointer;
}

figure:hover .contactIcons {
  fill:#cddc39;
}

figcaption {
  -webkit-transition: fill 0.5s ease-in-out;
  transition: fill 0.5s ease-in-out;
  text-decoration: none;
  color: white;
}
</style>