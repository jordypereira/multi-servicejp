<template>
  <div class="s-container">
    <div class="overlay" @click="$emit('hideSlideshow')"></div>

    <div id="lightbox" class="lightbox">
      <div class="lb-data">
        <div class="lb-closeContainer">
          <a class="lb-close" :style="{ backgroundImage: `url('${closeIcon}')` }" @click="$emit('hideSlideshow')"></a>
        </div>
        <div class="lb-details">
          <p class="lb-number">Image {{ imageCount }} of {{ imageTotal }}</p>
          <p class="lb-caption">{{ currentImage.description }}</p>
        </div>
      </div>
      <div class="lb-outerContainer">
        <div class="lb-container">
          <img class="lb-image" :src="currentImage.img" ref="image" />
          <div class="lb-nav">
            <a class="lb-prev" @click="previousImage()" :style="{ backgroundImage: `url('${prevIcon}')` }"></a>
            <a class="lb-next" @click="nextImage()" :style="{ backgroundImage: `url('${nextIcon}')` }"></a>
          </div>
          <div v-if="loading" class="lb-loader">
            <a class="lb-cancel" :style="{ backgroundImage: `url('${loadingIcon}')` }"></a>
          </div>
        </div>
      </div>
    </div>
    <thumbnails :images="this.images" :current="this.currentImage" v-on:setCurrent="changeImage" />
  </div>
</template>

<script>
import closeIcon from '../assets/lightbox/close.png';
import loadingIcon from '../assets/lightbox/loading.gif';
import nextIcon from '../assets/lightbox/next.png';
import prevIcon from '../assets/lightbox/prev.png';
import Thumbnails from '../components/Thumbnails';

export default {
  props: ['images'],
  components: {
    Thumbnails,
  },
  data() {
    return {
      currentImage: this.images[0] || null,
      imageCount: 1,
      imageTotal: this.images.length,
      loading: false,
      closeIcon,
      loadingIcon,
      nextIcon,
      prevIcon,
      dragstart: null,
    };
  },
  methods: {
    changeImage: function(index) {
      this.currentImage = this.images[index - 1];
    },
    nextImage: function() {
      this.$refs.image.classList.add('fadeInRight');
      if (this.imageCount === this.imageTotal) {
        this.imageCount = 1;
      } else {
        this.imageCount++;
      }
      setTimeout(() => {
        this.$refs.image.classList.remove('fadeInRight');
      }, 250);
      this.changeImage(this.imageCount);
    },
    previousImage: function() {
      this.$refs.image.classList.add('fadeInLeft');
      if (this.imageCount === 1) {
        this.imageCount = this.imageTotal;
      } else {
        this.imageCount--;
      }
      setTimeout(() => {
        this.$refs.image.classList.remove('fadeInLeft');
      }, 250);
      this.changeImage(this.imageCount);
    },
    handleArrowKeys(e) {
      if (e.key === 'ArrowRight') {
        this.nextImage();
      } else if (e.key === 'ArrowLeft') {
        this.previousImage();
      } else if (e.key === 'Escape') {
        this.$emit('hideSlideshow');
      }
    },
    handleScrollingEvent(e) {
      e.preventDefault();
      if (e.deltaY < 0) {
        this.nextImage();
      } else if (e.deltaY > 0) {
        this.previousImage();
      }
    },
    handleDragging(e) {
      const start = this.dragstart;
      const end = e.clientX;
      if (start < end) {
        this.previousImage();
      } else this.nextImage();
    },
    handleTouch(e) {
      const start = this.dragstart;
      const end = e.changedTouches[0].clientX;
      if (start < end) {
        this.previousImage();
      } else this.nextImage();
    },
  },
  created: function() {
    window.addEventListener('keydown', e => this.handleArrowKeys(e));
    // window.addEventListener('wheel', e => this.handleScrollingEvent(e));
    window.addEventListener('touchend', e => this.handleTouch(e));
    window.addEventListener(
      'touchstart',
      e => (this.dragstart = e.touches[0].clientX),
    );
    window.addEventListener('dragend', e => this.handleDragging(e));
    window.addEventListener('dragstart', e => (this.dragstart = e.clientX));
  },
};
</script>

<style lang="scss" scoped>
$break-medium: 720px;
$break-large: 980px;

.overlay {
  position: fixed;
  width: 100%;
  height: 100%;
  display: block;
  top: 0;
  left: 0;
  z-index: 9999;
  background-color: rgba(0, 0, 0, 0.8);
}

.lightbox {
  position: fixed;
  top: 0px;
  left: 0;
  width: 100%;
  z-index: 10000;
  text-align: center;
  display: flex;
  align-items: center;
  flex-flow: column nowrap;
}

.lightbox .lb-image {
  display: block;
  height: auto;
  max-width: 80vw;
  max-height: calc(95vh - 100px);
  @media screen and (min-width: $break-medium) {
    max-height: calc(95vh - 150px);
  }
  @media screen and (min-width: $break-large) {
    max-height: calc(95vh - 200px);
  }
  border-radius: 3px;
  margin: 0 auto;
  &:hover {
    cursor: grab;
  }

  animation-duration: 200ms;
  animation-fill-mode: both;
  transition: all 500ms;
}
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadeInLeft {
  animation-name: fadeInLeft;
}
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
}

.fadeInRight {
  animation-name: fadeInRight;
}

.lb-outerContainer {
  position: relative;
  width: 80vw;
  height: auto;
  max-height: 80vh;
}

.lb-loader {
  position: fixed;
  top: 43%;
  left: 0;
  height: 25%;
  width: 100%;
  text-align: center;
  line-height: 0;
}

.lb-cancel {
  display: block;
  width: 32px;
  height: 32px;
  margin: 0 auto;
  background-repeat: no-repeat;
}

.lb-nav {
  display: none;
  @media screen and (min-width: $break-medium) {
    display: block;
  }
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  z-index: 10;
}

.lb-container > .nav {
  left: 0;
}

.lb-prev,
.lb-next {
  height: 100%;
  cursor: pointer;
  display: block;
}

.lb-nav a.lb-prev {
  width: 50%;
  left: 0;
  float: left;
  background: left 50% no-repeat;
  filter: opacity(0);
  opacity: 0;
  transition: opacity 0.6s;
}

.lb-nav a.lb-prev:hover {
  filter: opacity(1);
  opacity: 1;
}

.lb-nav a.lb-next {
  width: 50%;
  right: 0;
  float: right;
  background: right 50% no-repeat;
  filter: opacity(0);
  transition: opacity 0.6s;
}

.lb-nav a.lb-next:hover {
  filter: opacity(1);
  opacity: 1;
}

.lb-data {
  padding: 10px 4px;
  color: #ccc;
  display: flex;
}

.lb-data .lb-details {
  display: flex;
  flex-flow: column wrap;
  flex: 1 1 auto;
}

.lb-data .lb-caption {
  font-size: 13px;
  font-weight: bold;
}

.lb-data .lb-number {
  font-size: 12px;
  color: #999;
}

.lb-closeContainer {
  position: fixed;
  left: 5px;
  top: 5px;
}
.lb-data .lb-close {
  display: block;
  width: 30px;
  height: 30px;
  margin-right: 10px;
  background: top right no-repeat;
  opacity: 0.7;
  transition: opacity 0.2s;
}

.lb-data .lb-close:hover {
  cursor: pointer;
  opacity: 1;
}
</style>
