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
  components: {
    'app-nav': Navigation
  }
}
</script>

<style lang="scss">

</style>
