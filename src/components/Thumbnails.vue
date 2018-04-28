<template>
  <div class="t-container">
    <div class="s-thumbnails">
      <div class="s-thumbnail" v-for="(image, i) in images" :key="i" :style="{ backgroundImage: `url('${image.img}')`}" :class="isCurrent(image)" @click="$emit('setCurrent',i+1)"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['images', 'current'],
  methods: {
    isCurrent(image) {
      return this.current === image ? 'current' : '';
    },
    setCurrent(image) {
      this.current = image;
    },
  },
};
</script>

<style lang="scss" scoped>
$break-medium: 720px;
$break-large: 980px;

.t-container {
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 10000;
  bottom: 10px;
  left: 0;
  width: 75vw;
  margin: 0 12.5vw;
  overflow-x: auto;
  .s-thumbnails {
    display: flex;
    .s-thumbnail {
      height: 50px;
      width: 50px;
      @media screen and (min-width: $break-medium) {
        height: 100px;
        width: 100px;
      }
      flex: 1 1 auto;
      margin: 0 10px;
      background-size: cover;
      background-position: center;
      filter: opacity(0.5);
      &:hover {
        cursor: pointer;
        filter: opacity(0.8);
      }
    }
    .current {
      filter: none;
    }
  }
}
</style>
