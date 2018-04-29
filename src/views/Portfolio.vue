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
                <a @click="changeFilter(null)" :class="{selected: showSelected(null)}" data-option-value="*" style="cursor: pointer">All Works</a>
              </li>
              <li v-for="filter in filters" :key="filter.category">
                <a href="#" @click="changeFilter(filter.category)" :class="{selected: showSelected(filter.category)}" :data-option-value="`.${filter.category}`" style="cursor: pointer">{{ filter.name }}</a>
              </li>
            </ul>
          </div>

          <div id="mj-portfolio-grid" class="grid ">
            <project v-for="(project, i) in filteredProjects" :key="i" :project="project" v-on:showSlideshow="showSlideshow" />
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
    changeFilter(tag) {
      this.filter = tag;
    },
    showSlideshow(images) {
      this.images = images;
      this.slideshow = true;
    },
    hideSlideshow() {
      this.slideshow = false;
      this.images = [];
    },
    showSelected(category) {
      return this.filter === category;
    },
  },
  data() {
    return {
      slideshow: false,
      images: [],
      projects: [],
      filter: null,
      filters: [
        {
          name: 'Carwrapping',
          category: 'Carwrapping',
        },
        {
          name: 'Tuinaanleg',
          category: 'Tuinaanleg',
        },
        {
          name: 'Tuinonderhoud',
          category: 'Tuinonderhoud',
        },
        {
          name: 'Schilderen',
          category: 'Schilderen',
        },
        {
          name: 'Webdesign',
          category: 'Webdesign',
        },
      ],
    };
  },
  created: function() {
    axios.get('js/projects.json').then(response => {
      // console.log(response);
      this.projects = response.data;
    });
  },
  computed: {
    filteredProjects() {
      if (!this.filter) {
        return this.projects;
      }
      return this.projects.filter(project => project.category == this.filter);
    },
  },
};
</script>
