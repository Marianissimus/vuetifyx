<template>
  <v-container>

    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-dialog v-model="responseMessage">
          <v-card>
            <v-toolbar dark color="brown darken-3 flat">
              <v-toolbar-title>
                Reservation received!
              </v-toolbar-title>
            </v-toolbar>
            <v-card-text>
             Thank you, {{ name }} ! We just received your reservation for {{ howMany }} persons
             for {{ date }} at {{ time }}.
            </v-card-text>
          </v-card>
        </v-dialog>
      </v-flex>
    </v-layout>

    <v-layout align-center justify-center>
      <v-flex xs12 sm8 md4>
        <v-card>

          <v-toolbar dark color="brown darken-3 flat">
            <v-toolbar-title>
              Reservation form
            </v-toolbar-title>
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
        </v-card>
      </v-flex>

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