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
                <a @click="changeFilter(null)" data-option-value="*" style="cursor: pointer">All Works</a>
              </li>
              <li v-for="filter in filters" :key="filter.category">
                <a @click="changeFilter(filter.category)" :data-option-value="`.${filter.category}`" style="cursor: pointer">{{ filter.name }}</a>
              </li>
            </ul>
          </div>

          <div id="mj-portfolio-grid" class="grid ">
            <project v-for="(project, i) in projects" :key="i" :project="project" v-on:showSlideshow="showSlideshow" />
            <slideshow v-if="slideshow" :images="images" :imagefolder="imagefolder" v-on:hideSlideshow="hideSlideshow" />
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
      let $container = $('#mj-portfolio-grid'),
        colWidth = function() {
          let w = $container.width(),
            columnNum = 1,
            columnWidth = 0;
          if (w > 1200) {
            columnNum = 3;
          } else if (w > 900) {
            columnNum = 3;
          } else if (w > 600) {
            columnNum = 3;
          } else if (w > 450) {
            columnNum = 2;
          } else if (w > 385) {
            columnNum = 1;
          }
          columnWidth = Math.floor(w / columnNum);
          $container.find('.grid-item').each(function() {
            let $item = $(this),
              multiplier_w = $item.attr('class').match(/grid-item-w(\d)/),
              multiplier_h = $item.attr('class').match(/grid-item-h(\d)/),
              width = multiplier_w
                ? columnWidth * multiplier_w[1]
                : columnWidth,
              height = multiplier_h
                ? columnWidth * multiplier_h[1] * 0.4 - 12
                : columnWidth * 0.5;
            $item.css({
              width: width,
              // height: height
            });
          });
          return columnWidth;
        },
        isotope = function() {
          $container.isotope({
            resizable: false,
            itemSelector: '.grid-item',
            masonry: {
              columnWidth: colWidth(),
              gutterWidth: 3,
            },
          });
        };
      isotope();
      $(window).resize(isotope);
      let $optionSets = $('.mj-portfolio-nav .option-set'),
        $optionLinks = $optionSets.find('a');
      $optionLinks.on('click', function() {
        let $this = $(this);
        let $optionSet = $this.parents('.option-set');
        $optionSet.find('.selected').removeClass('selected');
        $this.addClass('selected');

        // make option object dynamically, i.e. { filter: '.my-filter-class' }
        let options = {},
          key = $optionSet.attr('data-option-key'),
          value = $this.attr('data-option-value');
        // parse 'false' as false boolean
        value = value === 'false' ? false : value;
        options[key] = value;
        if (key === 'layoutMode' && typeof changeLayoutMode === 'function') {
          // changes in layout modes need extra logic
          changeLayoutMode($this, options);
        } else {
          // creativewise, apply new options
          $container.isotope(options);
        }
        return false;
      });
    },
    showSlideshow(images, imagefolder) {
      this.images = images;
      this.imagefolder = imagefolder;
      this.slideshow = true;
    },
    hideSlideshow() {
      this.slideshow = false;
      this.images = [];
      this.imagefolder = null;
    },
    showSelected(category) {
      return this.filter === category;
    },
  },
  data() {
    return {
      slideshow: false,
      images: [],
      imagefolder: null,
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
