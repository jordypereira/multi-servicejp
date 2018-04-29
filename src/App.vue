<template>
  <div id="app">
    <div id="freshr-preloader">
      <div class="freshr-preloader-table">
        <div class="freshr-table-cell">
          <div class="freshr-preloader-top">
            <h3>Multi-Service JP</h3>
            <div class="freshr-by">
              <p>by</p>
              <span></span>
            </div>
            <h2>Jonathan Put</h2>
            <div class="loading_dots">
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- MJ Main menu and header area -->
    <header class="mainmenu-area" id="mainmenu-area">
      <div class="container">
        <div class="row menu-area">
          <div class="col-xs-10 col-sm-7 col-md-6 col-lg-8">
            <div class="row">
              <div class="col-xs-3 col-md-2">
                <!-- Logo -->
                <div class="logo text-center" id="logo">
                  <a href="/"><img src="img/logo_jp.png" alt="Logo" /></a>
                </div>
              </div>
              <div class="col-lg-4">
                <!-- Logo -->
                <div class="nummer" style="padding-top: 10px">
                  <h1>0498/72.85.76</h1>
                </div>
              </div>
              <div class="col-lg-5 social-list" style="padding-top: 10px">
                <a href="https://www.facebook.com/multiservicejp/" target="_blank" v-if="$mq === 'lg'">
                  Volg ons op:
                  <i class="fab fa-facebook-f"></i>acebook</a>
              </div>
            </div>
          </div>

          <div class="col-xs-2 col-sm-5 col-md-6 col-lg-4">
            <!-- Menu -->
            <nav class="main-menu" id="mainmenu">
              <ul class="menus" :class="{'addedAnimation': navActive}" @click="toggleNav()">
                <li>
                  <router-link to="/">Home</router-link>
                </li>
                <li>
                  <router-link to="/bio">Bio</router-link>
                </li>
                <li>
                  <router-link to="/portfolio">Portfolio</router-link>
                </li>
                <!-- <li><a href="blog.html">blogs</a></li>
									<li><a href="single.html">blog single</a></li> -->
                <li>
                  <router-link to="/contact">Contact</router-link>
                </li>
              </ul>
              <div id="nav-icon2" class="barger-menu-ico" @click="toggleNav()" :class="{'fa-bars': navActive, 'fa-close': navActive, 'open': navActive}">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </header>
    <router-view/>
    <!-- MJ CTA Section -->
    <section class="footer-top-section">
      <div class="container">
        <div class="row text-bg">
          <div>
            <div class="col-md-8 col-sm-8 col-xs-12">
              <div class="footer-top-txt">
                <h2>Start building your project with me</h2>
                <p>are you impressed with my work ?</p>
              </div>
            </div>
            <div class="col-md-4 col-sm-4 col-xs-12">
              <div class="footer-top-btn text-right">
                <router-link to="/contact">Contact me</router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- MJ Footer Section -->
    <footer class="footer-section">
      <div class="container">
        <div class="row footer-row">
          <div class="col-md-8 col-sm-8 col-xs-12">
            <div class="copyrights-txt">
              <p> &copy; 2017 All rights reserved. Designed By
                <a href="index.html">Webdesign JP</a>
              </p>
            </div>
          </div>
          <div class="col-md-4 col-sm-4 col-xs-12 footer-social">
            <!-- Footer Social -->
            <div class="social-list-footer text-right">
              <ul>
                <li>
                  <a href="https://www.facebook.com/multiservicejp/" data-toggle="tooltip" data-placement="top" title="Facebook">
                    <i class="fab fa-facebook-f"></i>acebook</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      navActive: false,
    };
  },
  methods: {
    toggleNav() {
      if (this.$mq !== 'lg') this.navActive = !this.navActive;
    },
  },
};
</script>


<style lang="scss">
#logo {
  img {
    margin-top: 5px;
    max-width: 75px;
    @media (min-width: 720px) {
      max-width: 100px;
    }
  }
}
</style>
