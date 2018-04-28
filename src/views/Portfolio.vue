<template>
  <div id="portfolio">
    <section class="prtfolio-section-area" id="homeSection">
      <div class="prtfolio-area-bg parallax-window" style="background-image: url(img/portfolio_achtergrond2_lichter.jpg);">
        <div class="container">
          <div class="row">
            <div class="prtfolio-heading-area text-center">
              <h1 class="wow slideInDown" data-wow-delay=".1s">PROJECTEN</h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="portfolio-section section-padding" id="portfolioSection">
      <div class="center-small-heading-section text-center">
        <h2>portfolio</h2>
      </div>
      <div class="container">
        <div class="row">
          <div class="mj-portfolio-nav portfolio-menu">
            <ul id="filters" class="option-set clearfix" data-option-key="filter">
              <li>
                <a href="#" data-option-value="*">All Works</a>
              </li>
              <li>
                <a href="#" data-option-value=".Carwrapping">Carwrapping</a>
              </li>
              <li>
                <a href="#" data-option-value=".Tuinaanleg">Tuinaanleg</a>
              </li>
              <li>
                <a href="#" data-option-value=".Tuinonderhoud">Tuinonderhoud</a>
              </li>
              <li>
                <a href="#" data-option-value=".Schilderwerken">Schilderwerken</a>
              </li>
              <li>
                <a href="#" data-option-value=".Webdesign">Webdesign</a>
              </li>
            </ul>
          </div>

          <div id="mj-portfolio-grid" class="grid ">
            <project v-for="(project, i) in projects" :key="i" :project="project" v-on:showSlideshow="showSlideshow" />
            <slideshow v-if="slideshow" :images="images" v-on:hideSlideshow="hideSlideshow" />
          </div>
          <!-- <div class="port-load-more-btn text-center">
            <a href="#" class="load-more-port">Load More
              <i class="fa fa-angle-double-down"></i>
            </a>
          </div> -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Project from '@/components/Project';
import Slideshow from '@/components/Slideshow';
import axios from 'axios';

export default {
  components: {
    Project,
    Slideshow,
  },
  methods: {
    showSlideshow(images) {
      this.images = images;
      this.slideshow = true;
    },
    hideSlideshow() {
      this.slideshow = false;
      this.images = [];
    },
  },
  data() {
    return {
      slideshow: false,
      images: [],
      projects: [],
    };
  },
  created: function() {
    axios.get('js/projects.json').then(response => {
      // console.log(response);
      this.projects = response.data;
    });
  },
};
</script>
