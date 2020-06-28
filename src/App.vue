<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Video app</v-toolbar-title>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  mounted() {
    this.$store.dispatch('movies/addMovies');
  }
}
</script>
