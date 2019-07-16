<template>
  <v-container grid-list-lg>
    <current-heading title="Ongoing Promotions"></current-heading>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md4 >
        <v-card color="brown darken-2" dark style="position: relative; padding: 1em;">
          <div class="subheading">
            Today, {{ today }}
          </div>
          <div class="headline" style="margin: .5em 0;">
            The meter-long beer challenge
          </div>
          <div class="body-2" style="margin: 1em 0; line-height: 2em">
            Enjoy our freshest beer (just in!) with a special discount when buying at least 1 meter of beer.
          </div>
          <div style="padding: 10px 0; text-align: right">
            <v-btn bottom fab color="yellow" light large>
              <span class="headline brown--text">25%</span>
            </v-btn>
          </div>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-card color="brown" dark>
              <v-card-title primary class="title">Tomorrow</v-card-title>
              <v-card-text>Just got the freshest, nicest chocolate, so prepare to enjoy Chocolate Day.</v-card-text>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-card color="brown lighten-1" dark>
              <v-card-title primary class="title">Day After Tomorrow</v-card-title>
              <v-card-text>We're expecting a fresh shipment from Galati, so get ready for Fish Day.</v-card-text>
            </v-card>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm6 md2 child-flex>
        <v-card color="brown darken-2" dark>
          <v-card-title primary class="title">Every Tuesday</v-card-title>
          <v-card-text>Our meat scouts get back in town from their weekly trip to the mountain with, the freshest and most tender meat they could find. We give you discounts to properly enjoy it.</v-card-text>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-card color="brown lighten-4" light>
          <v-card-title primary class="title">Group discounts!</v-card-title>
          <v-card-text>Every group larger than 5 gets:
            <ul>
              <li>
                10% discount on each work day.
              </li>
              <li>
                5% discount on each week-end day
              </li>
              <li>
                One free beer for every new-commer!
              </li>
            </ul>

          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import Heading from './Heading.vue'

export default {
  components: {
    'current-heading': Heading
  },
  data: () => ({
    lorem: `Lorem ipsum dolor sit amet, mel at clita quando. Te sit oratio vituperatoribus, nam ad ipsum posidonium mediocritatem, explicari dissentiunt cu mea. Repudiare disputationi vim in, mollis iriure nec cu, alienum argumentum ius ad. Pri eu justo aeque torquatos.`,
    today: new Date().toString().slice(0, 15),
  }),
  methods: {
  }
}
</script>


