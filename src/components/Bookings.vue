<template>
<v-dialog :value="dialog" :persistent="!hasFinished" max-width="600px">
  <!-- response message -->
  <v-card v-show="responseMessage">
    <v-toolbar dark color="brown darken-3 flat">
      <v-toolbar-title>
        Reservation received!
      </v-toolbar-title>
    </v-toolbar>
    <v-card-text>
      Thank you, {{ name }} ! We just received your reservation for {{ howMany }} persons
      for {{ date }} at {{ time }}.
    </v-card-text>
    <v-card-actions>
      <v-flex class="text-xs-center">
        <v-btn color="brown darken-2" elevation="10" dark ripple @click="finishBooking">OK</v-btn>
      </v-flex>
    </v-card-actions>
  </v-card>

  <!-- reservation form-->
  <v-card v-show="!responseMessage">
    <v-toolbar dark color="brown darken-3 flat">
      <v-toolbar-title>
        Reservation form
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn flat dark @click="cancel">
        <v-icon large>close</v-icon>
      </v-btn>

    </v-toolbar>

    <v-form ref="form" class="pl-3 pr-3 pt-2 pb-3">
      <v-text-field
        v-model="name"
        label="Name"
        prepend-icon="account_circle"
        :rules="nameRules"
        >
      </v-text-field>

      <v-text-field
        v-model="email"
        :rules="emailRules"
        prepend-icon="email"
        label="E-mail"
        required
      ></v-text-field>

      <v-text-field
          v-model="howMany"
          type="number"
          max="12" min="1" step="1"
          prepend-icon="group"
          label="How Many Guests"
          :rules="guestRules"
          required
        >
        </v-text-field>

        <v-menu
        v-model="dateMenu"
        :close-on-content-click="false"
        :nudge-right="40"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="date"
            label="Date of reservation"
            prepend-icon="calendar_today"
            readonly
            v-on="on"
            :rules="dateRules"
          ></v-text-field>
        </template>
        <v-date-picker v-model="date" :min="today" @input="dateMenu = false"></v-date-picker>
      </v-menu>

      <v-menu
        v-model="timeMenu"
        :close-on-content-click="false"
        :nudge-right="40"
        lazy
        transition="scale-transition"
        offset-y
        full-width
        min-width="290px"
      >
        <template v-slot:activator="{ on }">
          <v-text-field
            v-model="time"
            label="Time of reservation"
            prepend-icon="alarm"
            readonly
            v-on="on"
            :rules="timeRules"
          ></v-text-field>
        </template>
        <v-time-picker v-model="time" @input="timeMenu = false"></v-time-picker>
      </v-menu>

      <v-flex class="text-xs-center">
        <v-btn
          :disabled="!valid"
          color="success"
          @click="validate">
          Send
        </v-btn>

        <v-btn
        color="error"
        @click="reset">
          Reset Form
        </v-btn>

        <v-btn
        color="blue-grey"
        dark
        @click="cancel">
          Close
        </v-btn>

      </v-flex>

    </v-form>
  </v-card>

</v-dialog>

</template>

<script>
export default {
  props: ['dialog'],
  data () {
    return {
      valid: true,
      hasFinished: false,
      name: '',
      email: '',
      nameRules: [
        v => !!v || 'The name field is required'
      ],
      emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
      ],
      guestRules: [
      v => !!v || 'No of guests is required'
      ],
      dateRules: [
      v => !!v || 'Reservation date is required'
      ],
      timeRules: [
      v => !!v || 'Reservation time is required'
      ],
      howMany: null,
      dateMenu: false,
      today: new Date().toISOString().substr(0, 10),
      date: this.today,
      time: '',
      timeMenu: false,
      responseMessage: null
    }
  },
  computed: {
    cGuests() {
      return this.howMany + ' guests'
    }
  },
  methods: {
    validate () {
      if (this.$refs.form.validate()) {
        this.responseMessage = true
        this.hasFinished = true;
      }
    },
    cancel () {
      this.$emit('hasFinished')
    },
    reset () {
      this.$refs.form.reset()
    },
    finishBooking () {
      this.$emit('hasFinished')
      this.hasFinished = false
      // delay in order to show the fading out of the response modal, instead of the form modal
      setTimeout(()=>{ this.responseMessage = null }, 500);
      this.reset()
    }
  }
}
</script>