<template>
  <div class="video-control-overlay" @click="handleOverlayClick">
    <button
      v-if="type === 'play'"
      type="button"
      :style="
        `background-image: url(${require('../assets/btn-play.png')}); background-size: 'cover'`
      "
    ></button>
    <button
      v-if="type === 'pause'"
      type="button"
      :style="
        `background-image: url(${require('../assets/btn-pause.png')}); background-size: 'cover'`
      "
    ></button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component
export default class VideoControlIcons extends Vue {
  @Prop({ default: 'play' }) readonly type!: string;

  handleOverlayClick() {
    this.$emit(this.type);
  }
}
</script>

<style lang="scss">
.video-control-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
  cursor: pointer;

  button {
    position: relative;
    top: 50%;
    left: 50%;
    height: 46px;
    width: 34px;
    &:focus {
      background-color: #FFD700;
    }
  }
}
</style>
