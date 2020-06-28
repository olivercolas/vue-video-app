<template>
  <div class="video-control-overlay" @click="handleOverlayClick">
    <button class="video-control-overlay__button">
      <img v-if="type === 'play'" :src="require('../assets/btn-play.png')" />
      <img v-if="type === 'pause'" :src="require('../assets/btn-pause.png')" data-type="pause"/>
    </button>
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

  &__button {
    position: relative;
    top: calc(50% - 23px);
    left: calc(50% - 17px);
    padding: 20px 27px;
    border-radius: 50%;

    &:focus {
      background-color: #ffd700;
    }

    img {
      height: 46px;
      width: 34px;
      margin-left: 7px;
      margin-top: 3px;

      &[data-type="pause"] {
        margin-left:1px;
      }
    }
  }
}
</style>
