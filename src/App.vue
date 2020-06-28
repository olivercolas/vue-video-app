<template>
  <v-app>
    <v-app-bar app color="primary" dark>
      <v-toolbar-title>Video app</v-toolbar-title>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
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
