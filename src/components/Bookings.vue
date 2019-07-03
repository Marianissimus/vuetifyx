<template>
  <v-container>
    <v-layout>
      <v-dialog v-model="responseMessage">
        <v-card>
          <v-card-title class="headline">
            Reservation received
          </v-card-title>
          <v-card-text>
           Thank you! We just received your reservation on the name of {{ name }} for {{ howMany }} persons
           for {{ date }} at {{ time }}.
          </v-card-text>
        </v-card>
      </v-dialog>

      <v-form ref="form">

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

      </v-form>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      valid: true,
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
        let message = true
        this.responseMessage = message
      }
    },
    reset () {
      this.$refs.form.reset()
    }
  }
}
</script>