<template>
  <div class="video">
    <video-control-icons
      :type="playing ? 'pause' : 'play'"
      @play="playVideo"
      @pause="stopVideo"
    />
    <v-img
      v-if="!playing"
      height="calc(100vh - 64px)"
      width="100%"
      :src="movie.poster"
    ></v-img>
    <video v-show="playing" ref="videoPlayer" id="video">
      <source :src="movie.video" type="video/mp4" />
    </video>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component } from 'vue-property-decorator';
import { Getter } from 'vuex-class';
import VideoControlIcons from '@/components/VideoControlIcons.vue';
import { Movie } from '../store/modules/movies/models';

@Component({
  components: {
    VideoControlIcons
  }
})
export default class Video extends Vue {
  @Getter('movies/getMovieById') getMovieById!: Function;

  movie: Movie = {
    id: 0,
    title: '',
    poster: '',
    video: ''
  };

  playing = false;

  mounted() {
    this.initOrRedirect();
  }

  initOrRedirect() {
    const movie = this.getMovieById(this.$route.params.id);
    if (movie) {
      this.setCurrentMovie(movie);
    } else {
      this.redirectHome();
    }
  }

  setCurrentMovie(movie: Movie) {
    this.movie = movie;
  }

  redirectHome() {
    this.$router.push({ name: 'Home' });
  }

  playVideo() {
    this.playing = true;
    (this.$refs.videoPlayer as HTMLVideoElement).play();
  }

  stopVideo() {
    this.playing = false;
    (this.$refs.videoPlayer as HTMLVideoElement).pause();
  }
}
</script>

<style lang="scss">
.video {
  position: relative;

  video {
    height: 100%;
    width: 100%;
  }
}
</style>
