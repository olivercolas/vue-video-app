<template>
  <v-app>
    <v-app-bar app color="primary">
      <v-btn
        v-if="routeName && routeName !== ''"
        to="/"
        :depressed="!isVideoPage"
        :dark="isVideoPage"
        :color="!isVideoPage ? 'primary' : 'black'"
        >{{ isVideoPage ? 'Back Home' : 'Video App' }}</v-btn
      >
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Watch } from 'vue-property-decorator';

@Component
export default class App extends Vue {
  mounted() {
    this.$store.dispatch('movies/addMovies');
    this.setRouteName(this.$route.name as string);
  }

  routeName = '';

  get isVideoPage() {
    return this.routeName === 'Video';
  }

  @Watch('$route')
  onRouteChange(to: any, from: any) {
    this.setRouteName(to.name);
  }

  setRouteName(name: string) {
    this.routeName = name;
  }
}
</script>
