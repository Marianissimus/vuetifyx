<template>
  <div id="app">
      <v-app>
        <app-nav></app-nav>
        <v-content transition="slide-x-transition">
          <router-view></router-view>
        </v-content>
      </v-app>
  </div>
</template>

<script>
import Navigation from './components/Navigation'
export default {
  name: 'app',
  data () {
    return {
      drawer: null,
    }
  },
  components: {
    'app-nav': Navigation
  }
}
</script>

<style lang="scss">
#app {
 background-image: linear-gradient( 359.3deg,  rgba(239,235,233,1) 1%, rgba(239,235,233,0) 70.9% );
}
</style>
