<template>
  <div class="home">
    <v-carousel v-model="model" class="carousel" height="600">
      <v-carousel-item v-for="movie in movies" :key="movie.id">
        <v-img
          height="100%"
          v-ripple
          @click="selectVideo(movie.id)"
          class="carousel__img"
          :src="movie.poster"
        >
        </v-img>
      </v-carousel-item>
    </v-carousel>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { State } from 'vuex-class';
import { Movie, MovieState } from '../store/modules/movies/models';

@Component
export default class Home extends Vue {
  @State((state: { movies: MovieState }) => state.movies.list) movies!: Movie[];

  model = 0;

  selectVideo(id: number) {
    this.$router.push({ name: 'Video', params: { id: id.toString() } });
  }
}
</script>

<style lang="scss">
.carousel {
  margin: 40px;
  width: calc(100% - 80px) !important;

  &__img {
    cursor: pointer;
  }
}
</style>
