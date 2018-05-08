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
              <div class="col-xs-3 col-md-2 col-lg-2">
                <!-- Logo -->
                <div class="logo text-center" id="logo">
                  <a href="/"><img src="img/logo_jp.png" alt="Logo" /></a>
                </div>
              </div>
              <div class="col-xs-7 col-lg-5">
                <!-- Logo -->
                <div class="nummer" style="padding-top: 10px">
                  <h1>0498/72.85.76</h1>
                </div>
              </div>
              <div class="col-xs-3 col-lg-5 social-list" style="padding-top: 10px" v-if="$mq === 'xl'">
                <a href="https://www.facebook.com/multiservicejp/" target="_blank">
                  Volg ons op:
                  <i class="fab fa-facebook-f"></i>acebook</a>
              </div>
              <div class="col-xs-1 social-list" style="padding-top: 10px" v-else>
                <a href="https://www.facebook.com/multiservicejp/" target="_blank">
                  <i class="fab fa-facebook-f"></i>
                </a>
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
                <router-link to="/contact#contactSection">Contact me</router-link>
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
      if (this.$mq !== 'lg' && this.$mq !== 'xl')
        this.navActive = !this.navActive;
    },
  },
};
</script>


<style lang="scss">
/*------------------------------------------------------------------
.______    __  ___   ___  __   _______  ___________    ____ 
|   _  \  |  | \  \ /  / |  | |   ____||   ____\   \  /   / 
|  |_)  | |  |  \  V  /  |  | |  |__   |  |__   \   \/   /  
|   ___/  |  |   >   <   |  | |   __|  |   __|   \_    _/   
|  |      |  |  /  .  \  |  | |  |____ |  |        |  |     
| _|      |__| /__/ \__\ |__| |_______||__|        |__|     


@charset "utf-8";

[Main Stylesheet]

Project:    Mj
Version:    0.1
Last change:    15.01.2017
Primary use:    Creative Resume Template 


[Typography]

Body:               16px 'Open Sans', sans-serif;
Paragraph:          'Open Sans', sans-serif;

Section Title:      24/1.1 'Roboto', sans-serif;

/*==============================
[Table of contents]

1. CSS Reset
2. Preloader Section
3. Mainmenu Section
4. Header Background
5. Top Social Links
6. Heading Text
7. Hero Section Anime
8. Education And Experiance Section
9. Progress Bar
10.Service Section
11.Portfolio Section
12.Counter Section
13.Footer Section
14.Blog Section
15.Contact Section
16.Map Section
17.Top Footer

-------------------------------------------------------------------*/

/*--------------------------------------------------------------
  1. Mj - css reset
--------------------------------------------------------------*/
body {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 300;
  letter-spacing: 0.7px;
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  overflow: hidden;
}
iframe {
  border: none;
}
a,
b,
div,
ul,
li {
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
  -webkit-tap-highlight-color: transparent;
  -moz-outline-: none;
}
a,
a:hover,
a:focus,
a:active {
  color: #fff;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
a:focus,
a:active,
input,
input:hover,
input:focus,
input:active,
textarea,
textarea:hover,
textarea:focus,
textarea:active {
  -moz-outline: none;
  outline: none;
}
img:not([draggable]),
embed,
object,
video {
  max-width: 100%;
  height: auto;
}
a,
a:active,
a:focus,
a:hover,
a:visited {
  text-decoration: none;
  outline: 0;
}
img {
  border: none;
  max-width: 100%;
}
ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
h1,
h2,
h3,
h4,
h5,
h6,
.h1,
.h2,
.h3,
.h4,
.h5,
.h6,
.property-features-meta li {
  font-family: 'Roboto', sans-serif;
  font-weight: bold;
}
.textright {
  text-align: right;
}
.textleft {
  text-align: left;
}
.textcenter {
  text-align: center;
}
strong {
  font-weight: 700;
}
.fullScreen,
.container.fullScreen,
.fullWidth {
  width: 100%;
}
.single-slider-container {
  position: relative;
}
.box-overley {
  background-color: #000;
  bottom: 0;
  display: block;
  left: 0;
  opacity: 0.3;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=30)';
  position: absolute;
  right: 0;
  top: 0;
  z-index: 0;
}
.zIndex {
  position: relative;
  z-index: 2;
}
.section-padding {
  padding-top: 60px;
  padding-bottom: 40px;
}
.section-neg-padding {
  margin-top: -40px;
  margin-bottom: -60px;
}

/*--------------------------------------------------------------
  2. Mj - Preloader Section
--------------------------------------------------------------*/

#freshr-preloader {
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 99999;
  background-color: #edefee;
  text-align: center;
  color: #323232;
  overflow: hidden;
}
.freshr-preloader-table {
  display: table;
  height: 100%;
  position: absolute;
  width: 100%;
}

.freshr-table-cell {
  display: table-cell;
  vertical-align: middle;
}
.freshr-preloader-top > h3 {
  color: #323232;
  font-family: inherit;
  font-size: 1em;
  font-weight: 600;
  letter-spacing: 4px;
  line-height: 1;
  text-transform: uppercase;
}
.freshr-by p {
  background-color: #edefee;
  color: #323232;
  display: inline-block;
  font-family: inherit;
  font-style: italic;
  line-height: 1.5;
  margin: 13px 0;
  padding: 0 8px;
  position: relative;
  z-index: 2;
}
.freshr-by {
  margin: auto;
  max-width: 500px;
  position: relative;
  width: 50%;
}
.freshr-preloader-top > h2 {
  font-family: inherit;
  font-weight: 700;
  color: #323232;
  text-transform: uppercase;
  margin-top: 0;
  margin-bottom: 20px;
}
.freshr-by > span {
  background-color: #323232;
  display: block;
  height: 2px;
  margin-top: 1px;
  position: absolute;
  top: 50%;
  width: 100%;
  z-index: 1;
}

.loading_dots {
  font-size: 1em;
  line-height: 1;
}

.loading_dots span {
  -webkit-animation: loading_dots 0.8s linear infinite;
  animation: loading_dots 0.8s linear infinite;
  background: none repeat scroll 0 0 #323232;
  border-radius: 50%;
  display: inline-block;
  height: 13px;
  width: 13px;
  margin: 0 8px;
}
.loading_dots span:nth-child(2) {
  -webkit-animation-delay: 0.2s;
  animation-delay: 0.2s;
}
.loading_dots span:nth-child(1) {
  -webkit-animation-delay: 0.4s;
  animation-delay: 0.4s;
}

@-webkit-keyframes loading_dots {
  0% {
    background: #c8c9c8;
  }
  50% {
    background: #323232;
  }
  100% {
    background: #c8c9c8;
  }
}
@keyframes loading_dots {
  0% {
    background: #c8c9c8;
  }
  50% {
    background: #323232;
  }
  100% {
    background: #c8c9c8;
  }
}

/*--------------------------------------------------------------
  3. Mj - Mainmenu Section
--------------------------------------------------------------*/

.logo {
  padding: 0;
  color: #fff;
  font-size: 40px;
  font-weight: 800;
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
}

.ct-btn-scroll {
  position: absolute;
  bottom: 20px;
  left: 0;
  right: 0;
  margin: auto;
  z-index: 9;
  border-radius: 50%;
  -webkit-transition: background-color 0.25s ease-in-out;
  transition: background-color 0.25s ease-in-out;
  animation: move 4s infinite forwards;

  display: flex;
  justify-content: center;
  align-items: center;
}
.ct-btn-scroll > img {
  padding: 50px;
}
@keyframes move {
  0% {
    transform: translateY(0px);
  }
  25% {
    transform: translateY(0px);
  }
  75% {
    transform: translateY(50px);
  }
  100% {
    transform: translateY(0px);
  }
}

.nummer h1 {
  color: #fff;
  font-size: 20px;
  text-align: center;
  transition: all 0.4s ease 0s;
}
.mainmenu-area {
  position: fixed;
  z-index: 10;
  /*background: rgba(21, 51, 81, .9);*/
  height: auto;
  width: 100%;
  /*box-shadow: .1px .1px 10px #333;*/
  -webkit-transition: box-shadow 0.3s ease 0s, background-color 0.5s ease 0s;
  transition: box-shadow 0.3s ease 0s, background-color 0.5s ease 0s;
}
.main-menu {
  text-align: right;
  top: 0;
  width: 100%;
  height: auto;
}
.main-menu ul {
  display: inline-block;
  margin-right: 20px;
}
.main-menu ul li {
  display: inline-block;
  padding: 30px 10px;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.main-menu ul li a {
  color: #fff;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-size: 13px;
  font-weight: 700;
  position: relative;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.main-menu ul li a:before {
  content: '';
  position: absolute;
  height: 2px;
  width: 0%;
  background-color: #74dbef;
  top: 100%;
  left: 0%;
  opacity: 0;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.main-menu ul li a:hover {
  color: #74dbef;
}
.main-menu ul li a:hover:before {
  opacity: 1;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';
  width: 50%;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.fa-navicon:before,
.fa-reorder:before,
.fa-bars:before {
  content: '';
}

ul.menus {
  top: -25px;
  position: relative;
  opacity: 0;
  transition: all 0.4s;
}
ul.menus.addedAnimation {
  top: -3px;
  opacity: 1;
}

.barger-menu-ico {
  width: 20px;
  right: 0;
  display: inline-block;
  margin-top: 30px;
  cursor: pointer;
  transition: margin-top 0.6s ease 0s;
}
.barger-menu-ico i {
  color: #fff;
  font-size: 20px;
  font-weight: 300;
  box-shadow: none;
}
.side-ico {
  margin: 3px 0px;
  background-color: #fff;
  width: 100%;
  height: 2px;
  -webkit-transition: color 0.6s ease 0s;
  transition: color 0.6s ease 0s;
}
.mainmenu-area.header__fixed {
  background-color: rgba(51, 51, 51, 0.86);
  box-shadow: 0 1px 8px -1px rgb(51, 51, 51);
  -webkit-transition: box-shadow 0.3s ease 0s, background-color 0.5s ease 0s;
  transition: box-shadow 0.3s ease 0s, background-color 0.5s ease 0s;
}
.mainmenu-area.header__fixed .barger-menu-ico {
  margin-top: 20px;
}
.mainmenu-area.header__fixed .social-list {
  margin-top: 0;
}
.mainmenu-area.header__fixed .nummer h1 {
  margin-top: 5px;
}

.mainmenu-area.header__fixed .main-menu ul li {
  padding: 15px 10px;
  -webkit-transition: padding 0.6s ease 0s;
  transition: padding 0.6s ease 0s;
}
.mainmenu-area.header__fixed .logo img {
  height: 49px;
  width: 49px;
  -webkit-transition: height 0.6s ease 0s, width 0.6s ease 0s;
  transition: height 0.6s ease 0s, width 0.6s ease 0s;
}
.mainmenu-area.header__fixed .main-menu ul li a {
  color: #ddd;
  -webkit-transition: color 0.6s ease 0s;
  transition: color 0.6s ease 0s;
}
.mainmenu-area.header__fixed .side-ico {
  background-color: #ddd;
  -webkit-transition: color 0.6s ease 0s;
  transition: color 0.6s ease 0s;
}
.mainmenu-area.header__fixed .main-menu ul li a:hover {
  color: #74dbef;
}

/*--------------------------------------------------------------
  4. Mj - Header Background
--------------------------------------------------------------*/

.header-area-bg {
  position: relative;
  height: 100vh;
  width: 100%;
  /*background-image: url(https://dummyimage.com/1900x600);*/
  background-position: 50% 0;
  background-repeat: no-repeat;
  background-size: cover;
  /*background-attachment: fixed;*/
  top: 0%;
  left: 0%;
  padding: 0px 0px 0px 0px;
}

.header-area-bg:before {
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  background-color: rgba(77, 81, 89, 0.2);
  content: '';
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=70)';
}
.parallax-window {
  min-height: 400px;
}
/*--------------------------------------------------------------
  5. Mj - Top Social Links
--------------------------------------------------------------*/

.social-list {
  margin: 13px 0;
  transition: all 0.4s ease 0s;
}
.social-list a {
  color: #fff;
  font-size: 20px;
  font-weight: 600;
  font-family: 'Roboto', 'Open Sans', sans-serif;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.social-list a:hover {
  color: #6edaef;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.header-heading-area {
  position: absolute;
  z-index: 2;
  top: 28%;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  width: 100%;
  left: 0;
  text-align: center;
}
.header-heading-area h1 {
  color: #fff;
  font-size: 100px;
  font-weight: 800;
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
}
.header-heading-area p {
  color: #fff;
  font-size: 36px;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: -30px;
}
.header-btn.resume-btns {
  background-color: rgba(131, 186, 241, 0.75);
  text-transform: uppercase;
  font-size: 16px;
  padding: 10px 25px;
  border: 2px solid #83baf1;
  border-radius: 5px;
  font-family: 'Open Sans', sans-serif;
  position: absolute;
  left: 50%;
  -webkit-transform: translateX(-50%);
  transform: translateX(-50%);
}
.header-btn.resume-btns:hover {
  background-color: #83baf1;
  -webkit-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
  border: 1px solid #83baf1;
}

/*--------------------------------------------------------------
  6. Mj - Heading Text
--------------------------------------------------------------*/

.heading-section,
.center-heading-section,
.center-small-heading-section {
  padding-top: 40px;
  padding-bottom: 30px;
  position: relative;
  margin-bottom: 30px;
}
.heading-section:before {
  position: absolute;
  content: '';
  height: 2px;
  width: 10%;
  background-color: #74dbef;
  bottom: 25%;
}
.center-heading-section:before {
  position: absolute;
  content: '';
  height: 2px;
  width: 40px;
  background-color: #74dbef;
  bottom: 20%;
  left: 45.5%;
}
.center-small-heading-section:before {
  position: absolute;
  content: '';
  height: 2px;
  width: 40px;
  background-color: #74dbef;
  bottom: 20%;
  left: 46.4%;
}
.heading-section h2,
.center-heading-section h2,
.center-small-heading-section h2 {
  color: #333333;
  font-size: 24px;
  text-transform: uppercase;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
}
.hello-details-section {
  margin-bottom: 30px;
}
.read-more.resume-btns-one {
  color: #333;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 400;
  padding: 10px 15px;
  border: 1px solid #ebebeb;
  border-radius: 5px;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.read-more.resume-btns-one:hover {
  background-color: #74dbef;
  color: #fff;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
  border: 1px solid #74dbef;
}
.read-more.resume-btns-one:hover {
  background-color: #74dbef;
  color: #fff;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
  border: 1px solid #74dbef;
}
.hello-details-section h2 {
  font-size: 24px;
  color: #333333;
  font-family: 'Open Sans', sans-serif;
  padding-bottom: 20px;
  margin-top: 5px;
}
.hello-details-section p {
  margin-bottom: 0px;
  font-size: 14px;
  color: #555555;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
}
.hello-details-section ul li p {
  font-size: 14px;
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;
  color: #333333;
}
.hello-details-section ul li p span {
  font-weight: 400;
}
.personal-info-details {
  padding-top: 10px;
}
.personal-info-details ul li p {
  font-size: 14px;
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;
  color: #333333;
}
.personal-info-details ul li p span {
  font-weight: 400;
}

/*--------------------------------------------------------------
  7. Mj - Education And Experiance Section
--------------------------------------------------------------*/

.single-e-and-e-section {
  margin-top: 30px;
  cursor: pointer;
}
.e-and-e-ico {
  width: 12%;
  display: inline-block;
  margin-bottom: 50px;
}
.e-and-e-ico i {
  color: #ffffff;
  font-size: 16px;
  height: 40px;
  width: 40px;
  background-color: #5e88fc;
  border-radius: 5%;
  text-align: center;
  line-height: 40px;
  position: relative;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.e-and-e-txt {
  width: 88%;
  float: right;
}
.e-and-e-txt h3,
.e-and-e-txt p {
  font-size: 14px;
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;
  margin: 10px 0px 0px 0px;
}
.e-and-e-txt h4 {
  margin: 0px;
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 700;
  text-transform: capitalize;
}
.e-and-e-txt h3 {
  font-weight: 600;
}
.e-and-e-txt p {
  font-weight: 300;
  font-size: 14px;
}

.single-e-and-e-section:hover.single-e-and-e-section h4,
.single-e-and-e-section:hover.single-e-and-e-section h3 {
  color: #74dbef;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.single-e-and-e-section:hover.single-e-and-e-section i {
  background-color: #74dbef;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}

/*--------------------------------------------------------------
  8. Mj - Progress Bar
--------------------------------------------------------------*/

.single-skills:hover .prg-text span,
.single-skills:hover .prg-text p {
  color: #74dbef;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
  cursor: pointer;
}

.prg-background {
  background-color: #afffff;
  height: 10px;
  width: 80%;
  position: relative;
  left: 50px;
  border-radius: 0px;
  box-shadow: none;
}
.prg-color-bar {
  background-color: #74dbef;
  box-shadow: none;
  -webkit-transition: none;
  -moz-transition: none;
  -ms-transition: none;
  -o-transition: none;
  transition: none;
}
.prg-text span {
  position: relative;
  left: 0px;
  font-size: 16px;
  color: #333333;
  font-weight: 700;
  top: 10px;
  font-family: 'Open Sans', sans-serif;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.prg-text p {
  font-size: 16px;
  color: #333333;
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;
  margin-left: 50px;
  margin-bottom: -20px;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
  font-size: 12px;
  text-transform: uppercase;
}

/*--------------------------------------------------------------
  9. Mj - Service Section
--------------------------------------------------------------*/

.service-area-bg {
  /*background-image: url(https://dummyimage.com/2000x1500);*/
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
  background-attachment: fixed;
  position: relative;
  padding-bottom: 70px;
  padding-top: 70px;
}
.service-area-bg:before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #000000;
  opacity: 0.6;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=60)';
}
.single-service {
  border-radius: 5px;
  border: 1px solid #ebebeb;
  padding: 45px 0;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  cursor: pointer;
  -webkit-transition: all 0.2s ease-in-out;
  transition: all 0.2s ease-in-out;
}
.service-ico {
  margin-right: 10px;
  margin-left: 20px;
  width: 80px;
  height: 80px;
  border-radius: 5px;
  border: 1px solid #fff;
  display: flex;
  justify-content: center;
  align-items: center;
}
.service-ico i {
  color: #fff;
  font-size: 50px;
}
.service-text {
  width: 80%;
  margin-right: 10px;
}
.service-text h4,
.service-text p {
  margin-top: 0px;
  color: #fff;
  font-size: 24px;
  font-weight: bold;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: 0px;
}
.service-text p {
  font-size: 16px;
  font-weight: 700;
}
.single-service:hover {
  border: 1px solid #74dbef;
  -webkit-transform: scale(1.04);
  transform: scale(1.04);
  -webkit-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}
.service-img {
  padding-top: 6px;
  position: relative;
}
.service-img img {
  border-radius: 5px;
}
.service-img:before {
  position: absolute;
  content: '';
  border-top: 1px solid #b9ffff;
  border-bottom: 1px solid #b9ffff;
  border-right: 1px solid #b9ffff;
  border-left: 1px solid #b9ffff;
  z-index: -2;
  height: 100%;
  top: 30px;
  width: 90%;
  left: -30px;
  border-radius: 5px;
}

/*--------------------------------------------------------------
  10. Mj - Portfolio Section
--------------------------------------------------------------*/

.portfolio-section {
  /*padding-bottom: 30px;*/
}
.portfolio-menu {
  padding-bottom: 30px;
  text-align: center;
}
.portfolio-menu ul li {
  display: inline-block;
  margin-right: 35px;
}
.portfolio-menu ul li:last-child {
  margin-right: 0px;
}
.portfolio-menu ul li a {
  color: #333333;
  padding: 0px 0px;
  position: relative;
}
.portfolio-menu ul li a:before {
  position: absolute;
  content: '';
  height: 2px;
  width: 0px;
  background-color: #74dbef;
  top: 100%;
  left: 0%;
  overflow: hidden;
  display: block;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.portfolio-menu ul li a:hover:before {
  width: 50px;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.portfolio-menu ul li a:hover {
  color: #74dbef;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.isotope:after {
  content: '';
  display: block;
  clear: both;
}

.grid:after {
  content: '';
  display: block;
  clear: both;
}

.grid-item {
  float: left;
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
  padding: 0 10px;
}

.grid-item--height2 {
  height: 400px;
  width: 66%;
}
.grid-item--height22 {
  height: 295px;
  width: 66%;
}
.grid-item--height1 {
  height: 400px;
  width: 32%;
}
.grid-item--height11 {
  height: 400px;
  width: 66%;
}
.grid-item--height3 {
  width: 32%;
  height: 607px;
}
.grid-item--height4 {
  width: 32%;
  height: 453px;
}
.grid-item--height44 {
  width: 66%;
  height: 453px;
}
.grid-item--height5 {
  width: 32%;
  height: 249px;
}
.grid-item--height6 {
  width: 32%;
  height: 456px;
}

.port-img-overlay a {
  display: block;
  height: 100%;
}
.port-img-overlay {
  position: relative;
  overflow: hidden;
  display: block;
  text-align: center;
  cursor: pointer;
  top: 0%;
  left: 0%;
  right: 0%;
  bottom: 0%;
}
.port-img-overlay:before {
  content: '';
  position: absolute;
  background-color: rgba(29, 233, 182, 0.8);
  top: 0;
  left: 10px;
  height: 100%;
  width: calc(100% - 20px);
  opacity: 0;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.port-img-overlay:hover:before {
  opacity: 0.2;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=20)';
}
.port-img-overlay img {
  -webkit-transition: opacity 0.35s;
  transition: opacity 0.35s;
  max-width: 100%;
  max-height: 100%;
}
.img-hover-txt {
  position: absolute;
  top: 0%;
  left: 10px;
  width: calc(100% - 20px);
  height: 100%;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  opacity: 0;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.img-hover-txt p {
  display: block;
  overflow: hidden;
  position: absolute;
  top: 50%;
  text-align: center;
  width: 100%;
  left: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 24px;
  padding: 0px 15px;
}
.img-hover-txt p span {
  display: block;
  font-size: 16px;
  font-weight: 400;
}
.port-img-overlay a:hover .img-hover-txt {
  -webkit-transform: scale(0.9);
  transform: scale(0.9);
  opacity: 1;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';
  background-color: rgba(29, 233, 182, 0.9);
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.img-hover-txt:before {
  position: absolute;
  content: '';
  top: 0%;
  right: 0%;
  left: 0%;
  bottom: 0%;
  height: 100%;
  width: 100%;
  border: 1px solid rgba(51, 51, 51, 0.4);
  opacity: 0;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
}

.port-load-more-btn {
  padding-top: 30px;
}
a.load-more-port {
  color: #333;
  display: block;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;
}
.port-load-more-btn i {
  display: block;
}
/*--------------------------------------------------------------
  11. Mj - Counter Section
--------------------------------------------------------------*/

.counter-bg {
  /*background-image: url(https://dummyimage.com/2000x1500);*/
  /*background-repeat: no-repeat;*/
  background-position: center center;
  background-attachment: fixed;
  background-size: cover;
  padding-top: 120px;
  padding-bottom: 35px;
  position: relative;
}
.counter-bg:before {
  position: absolute;
  content: '';
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: #000000;
  opacity: 0.6;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=60)';
}
.single-counter i {
  font-size: 60px;
  color: #74dbef;
  cursor: pointer;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.single-counter i:hover {
  color: #40e3ba;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.single-counter h2 {
  font-size: 36px;
  color: #fff;
  font-family: 'Roboto', sans-serif;
  font-weight: 700;
}
.single-counter p {
  color: #fff;
  font-size: 18px;
  font-family: 'Open Sans', sans-serif;
  text-transform: uppercase;
}

/*--------------------------------------------------------------
  12. Mj - Footer Section
--------------------------------------------------------------*/

.footer-section {
  background-color: #222222;
  padding: 30px 0px;
}
.footer-row {
  padding: 0 30px;
}
.copyrights-txt {
  padding-top: 10px;
}
.copyrights-txt p {
  font-size: 18px;
  color: #fff;
  margin-bottom: 0px;
  font-weight: 400;
}
.copyrights-txt p a {
  text-decoration: underline;
  font-weight: 700;
}
.social-list-footer {
  padding-top: 10px;
}
.social-list-footer ul li {
  display: inline-block;
  font-size: 24px;
  margin-right: 30px;
}
.social-list-footer ul li a {
  color: #fff;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.social-list-footer ul li a i.fa-facebook:hover {
  color: #3b5998;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.social-list-footer ul li a i.fa-twitter:hover {
  color: #1da1f2;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.social-list-footer ul li a i.fa-pinterest:hover {
  color: #bd081c;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.social-list-footer ul li a i.fa-linkedin:hover {
  color: #dd5143;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.social-list-footer ul li a i.fa-skype:hover {
  color: #00aff0;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.social-list-footer ul li:last-child {
  margin-right: 0px;
}

/*--------------------------------------------------------------
  13. Mj - Blog Section
--------------------------------------------------------------*/

.blog-details {
  width: 83%;
  float: left;
  padding-right: 30px;
}
.single-blog-left,
.single-blog-right-two {
  background-color: #f7f7f7;
}
.single-blog-left {
  margin-bottom: 20px;
  padding: 30px;
}
.blog-name h2 {
  color: #74dbef;
  font-size: 30px;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
  margin-top: 0;
}
.blog-name p {
  color: #333333;
  font-family: 'Open Sans', sans-serif;
  font-weight: 300;
}
.blog-icon-and-details {
  /*  padding-bottom: 50px;
  padding-top: 10px;*/
}
.blog-icon-and-details p {
  color: #333333;
  margin: 0;
}
.blog-icon-and-details span {
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
}
.blog-icon-and-details i {
  margin-right: 10px;
  margin-left: 10px;
}
.blog-icon-and-details i:last-child {
  margin-right: 0px;
}
.blog-icon-and-details i:first-child {
  margin-left: 0px;
}
.blog-left-ico {
  background-color: #fff;
  padding: 16px;
  border-radius: 3px;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.2);
  height: 90px;
  width: 90px;
  float: right;
  position: absolute;
  right: 30px;
  top: 50%;
  transform: translateY(-50%);
}
.blog-left-ico i {
  color: #74dbef;
  font-size: 24px;
}
.blog-left-ico p {
  font-size: 18px;
  font-weight: 600;
  font-family: 'Open Sans', sans-serif;
}

.single-blog-right {
  background-image: url(https://dummyimage.com/600x300);
  background-repeat: no-repeat;
  background-position: center center;
  background-size: cover;
}
.second-bloog .single-blog-right {
  float: right;
}
.image-txt {
  background-color: #b0e4ee;
  position: absolute;
  right: 50px;
  top: 50px;
  padding: 5px 15px;
  border-radius: 5px;
}
.image-txt p {
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;
  margin: 0px;
}
.second-bloog .image-txt {
  right: 460px;
}
.second-bloog .single-blog-right {
  background-image: url(https://dummyimage.com/600x300);
}
.blog_simple_overley {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 3;
}

/*--------------------------------------------------------------
  14. Mj - Contact Section
--------------------------------------------------------------*/

.get-in-touch-section {
  padding-bottom: 100px;
}
.contact-form input[type='text'],
.contact-form input[type='email'],
.contact-form textarea {
  border-top: 0px;
  border-left: 0px;
  box-shadow: none;
  border-radius: 0px;
  border-right: 0px;
  padding-left: 0px;
  font-weight: 700;
  border-bottom: 1px solid #cccccc;
  position: relative;
  display: block;
  overflow: hidden;
  text-align: left;
  width: 100%;
  background: none;
  margin-bottom: 50px;
}
.contact-form input[type='text']:focus,
.contact-form input[type='email']:focus,
.contact-form textarea:focus {
  background: none;
  box-shadow: none;
  border-bottom: 1px solid #333;
}
.submit_btn {
  color: #555;
  background: none;
  border-radius: 3px;
  font-weight: 700;
  box-shadow: none;
  padding: 10px 55px;
  border: 2px solid #afffff;
  -webkit-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.submit_btn:hover {
  background-color: #afffff;
  border: 2px solid #afffff;
  -webkit-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

/*--------------------------------------------------------------
  15. Mj - Map Section
--------------------------------------------------------------*/

#map {
  width: 100%;
  height: 470px;
  padding: 0;
}
.maps {
  padding: 0px;
  margin: 0px;
}
#heading {
  font-family: 'Open Sans', sans-serif;
  font-size: 24px;
  text-align: center;
}
#bodyContent p {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  display: block;
}
#bodyContent a {
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  color: #333;
}
div#bodyContent span {
  display: block;
  font-weight: 300;
}

/*--------------------------------------------------------------
  15. Mj - Top Footer Section
--------------------------------------------------------------*/
.footer-top-bg.parallax-window {
  min-height: 200px;
}
.footer-top-section {
  background-color: #222;
}
.text-bg {
  padding: 60px 15px;
  margin: 50px 0px;
}

.footer-top-txt {
  color: #fff;
}
.footer-top-txt h2 {
  font-size: 28px;
  text-transform: uppercase;
  margin-top: 10px;
  margin-bottom: 0px;
}
.footer-top-txt p {
  text-transform: uppercase;
  margin: 0px;
}
.footer-top-btn {
  text-transform: uppercase;
}
.footer-top-btn a {
  display: inline-block;
  padding: 10px 40px;
  border-radius: 5px;
  font-weight: 700;
  font-size: 18px;
  border: 1px solid #c69c6d;
  transition: all 0.4s ease 0s;
}
.footer-top-btn a:hover {
  background-color: #fff;
  border: 1px solid #fff;
  color: #c69c6d;
  transition: all 0.4s ease 0s;
}

/* Icon 1 */

#nav-icon1,
#nav-icon2,
#nav-icon3,
#nav-icon4 {
  width: 25px;
  height: 20px;
  position: relative;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.5s ease-in-out;
  -moz-transition: 0.5s ease-in-out;
  -o-transition: 0.5s ease-in-out;
  transition: 0.5s ease-in-out;
  cursor: pointer;
}
#nav-icon2 span {
  display: block;
  position: absolute;
  height: 3px;
  width: 50%;
  background: #83baf1;
  opacity: 1;
  -webkit-transform: rotate(0deg);
  -moz-transform: rotate(0deg);
  -o-transform: rotate(0deg);
  transform: rotate(0deg);
  -webkit-transition: 0.25s ease-in-out;
  -moz-transition: 0.25s ease-in-out;
  -o-transition: 0.25s ease-in-out;
  transition: 0.25s ease-in-out;
}

#nav-icon2 span:nth-child(even) {
  left: 50%;
  border-radius: 0 9px 9px 0;
}

#nav-icon2 span:nth-child(odd) {
  left: 0px;
  border-radius: 9px 0 0 9px;
}

#nav-icon2 span:nth-child(1),
#nav-icon2 span:nth-child(2) {
  top: 0px;
}

#nav-icon2 span:nth-child(3),
#nav-icon2 span:nth-child(4) {
  top: 7px;
}

#nav-icon2 span:nth-child(5),
#nav-icon2 span:nth-child(6) {
  top: 14px;
}

#nav-icon2.open span:nth-child(1),
#nav-icon2.open span:nth-child(6) {
  -webkit-transform: rotate(45deg);
  -moz-transform: rotate(45deg);
  -o-transform: rotate(45deg);
  transform: rotate(45deg);
}

#nav-icon2.open span:nth-child(2),
#nav-icon2.open span:nth-child(5) {
  -webkit-transform: rotate(-45deg);
  -moz-transform: rotate(-45deg);
  -o-transform: rotate(-45deg);
  transform: rotate(-45deg);
}

#nav-icon2.open span:nth-child(1) {
  left: 2px;
  top: 5px;
}

#nav-icon2.open span:nth-child(2) {
  left: calc(50% - 2px);
  top: 5px;
}

#nav-icon2.open span:nth-child(3) {
  left: -50%;
  opacity: 0;
}

#nav-icon2.open span:nth-child(4) {
  left: 100%;
  opacity: 0;
}

#nav-icon2.open span:nth-child(5) {
  left: 2px;
  top: 13px;
}

#nav-icon2.open span:nth-child(6) {
  left: calc(50% - 3px);
  top: 13px;
}
#nav-icon2.navIconHide {
  display: none;
}
.form-control.error {
  border-color: red !important;
}
#emailform .alert-success {
  float: right;
  padding: 12px 15px;
  width: 60%;
}
.contact-alert-message {
  padding: 10px 0 25px;
  text-align: center;
  overflow: hidden;
  width: 100%;
}

/*--------------------------------------------------------------
  16. Mj - Version Styles
--------------------------------------------------------------*/
body.female-version .header-area-bg:before,
body.female-version .prtfolio-area-bg:before,
body.female-version .hello-area-bg:before,
body.female-version .contact-area-bg:before,
body.female-version .blog-area-bg:before {
  background-color: rgba(233, 0, 63, 0.3);
}
body.female-version .header-btn.resume-btns {
  border: 1px solid #e9003f;
  background-color: rgba(233, 0, 63, 0.3);
}
body.female-version .header-btn.resume-btns:hover {
  background-color: rgba(233, 0, 63, 0.8);
  border: 1px solid #e9003f;
}
body.female-version .heading-section:before,
body.female-version .center-heading-section:before,
body.female-version .center-small-heading-section:before {
  background-color: #e9003f;
}
body.female-version .read-more.resume-btns-one:hover,
body.female-version .submit_btn:hover {
  background-color: rgba(233, 0, 63, 1);
  border: 1px solid #e9003f;
  color: #fff;
}
body.female-version .single-service:hover,
body.female-version .submit_btn,
body.female-version .footer-top-btn a,
body.female-version .hello-img img {
  border: 1px solid #e9003f;
}
body.female-version .footer-top-btn a:hover {
  background-color: #fff;
  border: 1px solid #fff;
  color: #e9003f;
}
body.female-version .e-and-e-ico i,
body.female-version .prg-color-bar,
body.female-version .image-txt,
body.female-version .portfolio-menu ul li a:before,
body.female-version .main-menu ul li a:before,
body.female-version .service-area-bg:before,
body.female-version .blog-heading-section h2:before,
body.female-version .contact-heading-section h2:before,
body.female-version .hello-heading h2:before {
  background-color: rgba(233, 0, 63, 1);
}
body.female-version .counter-bg:before,
body.female-version .footer-top-bg:before {
  background-color: rgba(233, 0, 63, 0.4);
  opacity: 1;
}
body.female-version .service-area-bg:before {
  opacity: 0.4;
}
body.female-version .single-e-and-e-section:hover.single-e-and-e-section i,
body.female-version .prg-background {
  background-color: #a94442;
}
body.female-version .single-e-and-e-section:hover.single-e-and-e-section h4,
body.female-version .single-e-and-e-section:hover.single-e-and-e-section h3,
body.female-version .single-skills:hover .prg-text span,
body.female-version .single-skills:hover .prg-text p {
  color: #a94442;
}
body.female-version .port-img-overlay a:hover .img-hover-txt,
body.female-version .port-img-overlay:before {
  background-color: rgba(233, 0, 63, 0.9);
}
body.female-version .single-counter i,
body.female-version .single-counter i:hover,
body.female-version .blog-name h2,
body.female-version .blog-left-ico i,
body.female-version .icon-bg i,
body.female-version .port-load-more-btn i,
body.female-version .portfolio-menu ul li a:hover,
body.female-version .mainmenu-area.header__fixed .main-menu ul li a:hover,
body.female-version .main-menu ul li a:hover,
body.female-version .social-list ul li a:hover {
  color: rgba(233, 0, 63, 1);
}
/*--------------------------------------------------------------
  Resume Header Background
--------------------------------------------------------------*/

.prtfolio-area-bg {
  position: relative;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0%;
  left: 0%;
  padding: 0px 0px 0px 0px;
}

.prtfolio-area-bg:before {
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  content: '';
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=70)';
  filter: opacity(70);
}
.parallax-window {
  min-height: 400px;
}
.prtfolio-area-bg.parallax-window {
  min-height: 0px;
}

.prtfolio-heading-area {
  color: #fff;
  position: relative;
  padding: 140px 0px;
  z-index: 1;
}
.prtfolio-heading-area h1 {
  color: #fff;
  font-size: 100px;
  font-weight: 800;
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
  padding-top: 5px;
}
.prtfolio-heading-area p {
  color: #fff;
  font-size: 36px;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: -30px;
}

/*--------------------------------------------------------------
  Resume Portfolio Section
--------------------------------------------------------------*/

.portfolio-heading-section {
  text-transform: uppercase;
  color: #222;
  padding-bottom: 30px;
}
.portfolio-heading-section h2 {
  font-family: 'Open Sans', sans-serif;
  font-size: 48px;
  position: relative;
  padding-bottom: 15px;
}
.portfolio-heading-section h2:before {
  position: absolute;
  content: '';
  height: 2px;
  width: 10%;
  background-color: #d6b161;
  bottom: 0%;
}
.portfolio-section {
  padding-bottom: 30px;
}
.portfolio-menu {
  padding-bottom: 30px;
  text-align: center;
}
.portfolio-menu ul li {
  display: inline-block;
  margin-right: 35px;
}
.portfolio-menu ul li:last-child {
  margin-right: 0px;
}
.portfolio-menu ul li a {
  color: #333333;
  padding: 0px 0px;
  font-weight: 400;
  position: relative;
}
.portfolio-menu ul li a:before {
  position: absolute;
  content: '';
  height: 2px;
  width: 0px;
  background-color: #74dbef;
  top: 100%;
  left: 0%;
  overflow: hidden;
  display: block;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.portfolio-menu ul li a:hover:before {
  width: 50px;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.portfolio-menu ul li a:hover {
  color: #74dbef;
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.isotope:after {
  content: '';
  display: block;
  clear: both;
}

.grid:after {
  content: '';
  display: block;
  clear: both;
}

.grid-item {
  float: left;
  width: 100px;
  height: 100px;
  margin-bottom: 20px;
}

.grid-item--height2 {
  height: 400px;
  width: 770px;
}
.grid-item--height1 {
  height: 400px;
  width: 370px;
}
.grid-item--height3 {
  width: 370px;
  height: 607px;
}
.grid-item--height4 {
  width: 370px;
  height: 453px;
}
.grid-item--height5 {
  width: 373px;
  height: 249px;
}
.grid-item--height6 {
  width: 373px;
  height: 456px;
}

.port-img-overlay a {
  display: block;
}
.port-img-overlay {
  position: relative;
  overflow: hidden;
  display: block;
  text-align: center;
  cursor: pointer;
  top: 0%;
  left: 0%;
  right: 0%;
  bottom: 0%;
}
.port-img-overlay:before {
  content: '';
  position: absolute;
  background-color: rgba(29, 233, 182, 0.8);
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  opacity: 0;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.port-img-overlay:hover:before {
  opacity: 0.2;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=20)';
}
.port-img-overlay img {
  -webkit-transition: opacity 0.35s;
  transition: opacity 0.35s;
}
.img-hover-txt {
  position: absolute;
  top: 0%;
  left: 0%;
  width: 100%;
  height: 100%;
  color: #fff;
  font-size: 18px;
  font-weight: 700;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  opacity: 0;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.img-hover-txt p {
  display: block;
  overflow: hidden;
  position: absolute;
  top: 50%;
  text-align: center;
  width: 100%;
  left: 0;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
  font-size: 24px;
  padding: 0px 15px;
}
.img-hover-txt p span {
  display: block;
  font-size: 16px;
  font-weight: 400;
}
.port-img-overlay a:hover .img-hover-txt {
  -webkit-transform: scale(0.9);
  transform: scale(0.9);
  opacity: 1;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=100)';
  background-color: rgba(29, 233, 182, 0.9);
  -webkit-transition: all 0.4s ease 0s;
  transition: all 0.4s ease 0s;
}
.img-hover-txt:before {
  position: absolute;
  content: '';
  top: 0%;
  right: 0%;
  left: 0%;
  bottom: 0%;
  height: 100%;
  width: 100%;
  border: 1px solid rgba(51, 51, 51, 0.4);
  opacity: 0;
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=0)';
}

.port-load-more-btn {
  padding-top: 30px;
  padding-bottom: 30px;
}
a.load-more-port {
  color: #333;
  display: block;
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 700;
  font-family: 'Open Sans', sans-serif;
}
.port-load-more-btn i {
  display: block;
}

/*--------------------------------------------------------------
  Resume Header Background
--------------------------------------------------------------*/

.contact-area-bg {
  position: relative;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0%;
  left: 0%;
  padding: 0px 0px 0px 0px;
}

.contact-area-bg:before {
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  content: '';
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=70)';
}
.parallax-window {
  min-height: 400px;
}
.contact-area-bg.parallax-window {
  min-height: 0px;
}

.contact-heading-area {
  color: #fff;
  position: relative;
  padding: 140px 0px;
  z-index: 1;
}
.contact-heading-area h1 {
  color: #fff;
  font-size: 100px;
  font-weight: 800;
  text-transform: uppercase;
  font-family: 'Open Sans', sans-serif;
  padding-top: 5px;
}
.contact-heading-area p {
  color: #fff;
  font-size: 36px;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: -30px;
}

.contact-form input[type='text'],
.contact-form input[type='email'],
.contact-form textarea {
  border-top: 0px;
  border-left: 0px;
  box-shadow: none;
  border-radius: 0px;
  border-right: 0px;
  padding-left: 0px;
  font-weight: 700;
  border-bottom: 1px solid #cccccc;
  position: relative;
  display: block;
  overflow: hidden;
  text-align: left;
  width: 100%;
  background: none;
  margin-bottom: 50px;
}
.contact-form input[type='text']:focus,
.contact-form input[type='email']:focus,
.contact-form textarea:focus {
  background: none;
  box-shadow: none;
  border-bottom: 1px solid #333;
}
.submit_btn {
  color: #555;
  background: none;
  border-radius: 3px;
  font-weight: 700;
  box-shadow: none;
  padding: 10px 55px;
  border: 2px solid #afffff;
  -webkit-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

.submit_btn:hover {
  background-color: #afffff;
  border: 2px solid #afffff;
  -webkit-transition: all 0.4s ease-in-out 0s;
  transition: all 0.4s ease-in-out 0s;
}

/*--------------------------------------------------------------
  Resume Map Section
--------------------------------------------------------------*/

#map {
  width: 100%;
  height: 470px;
  padding: 0;
}
.maps {
  padding: 0px;
  margin: 0px;
}
#heading {
  font-family: 'Open Sans', sans-serif;
  font-size: 24px;
  text-align: center;
}
#bodyContent p {
  font-family: 'Open Sans', sans-serif;
  font-size: 16px;
  font-weight: 500;
  text-align: center;
  display: block;
}
#bodyContent a {
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  color: #333;
}
div#bodyContent span {
  display: block;
  font-weight: 300;
}

.contact-heading-section {
  text-transform: uppercase;
  color: #222;
  padding-bottom: 30px;
}
.contact-heading-section h2 {
  font-family: 'Open Sans', sans-serif;
  font-size: 48px;
  position: relative;
  padding-bottom: 15px;
}
.contact-heading-section h2:before {
  position: absolute;
  content: '';
  height: 2px;
  width: 10%;
  background-color: #d6b161;
  bottom: 0%;
}
.contact-icon-section {
  padding-bottom: 100px;
}
.contact-ico {
  margin-top: 20px;
  display: inline-block;
  width: 10%;
  float: left;
}
.contact-ico i {
  font-size: 24px;
  color: #333;
  transition: all 0.4s ease 0s;
  transform: scale(1);
}
.contact-deatils {
  display: inline-block;
  width: 90%;
  float: right;
}
.contact-deatils p {
  font-size: 18px;
  margin: 0px;
  color: #555;
}
.contact-ico i:hover {
  transform: scale(1.1);
  color: #d6b161;
  transition: all 0.4s ease 0s;
  cursor: pointer;
}

/*--------------------------------------------------------------
  Resume Header Background
--------------------------------------------------------------*/

.hello-area-bg {
  position: relative;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  top: 0%;
  left: 0%;
  padding: 0px 0px 0px 0px;
}

.hello-area-bg:before {
  position: absolute;
  top: 0%;
  left: 0%;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  content: '';
  -ms-filter: 'progid:DXImageTransform.Microsoft.Alpha(Opacity=70)';
}
.parallax-window {
  min-height: 400px;
}
.hello-area-bg.parallax-window {
  min-height: 0px;
}

.hello-heading-area {
  color: #fff;
  position: relative;
  padding: 140px 0px;
  z-index: 1;
}
.hello-heading-area h1 {
  font-family: 'Open Sans', sans-serif;
  font-size: 100px;
  font-weight: 800;
  text-transform: uppercase;
  padding-top: 5px;
}
.hello-heading-area p {
  color: #fff;
  font-size: 36px;
  font-weight: 400;
  font-family: 'Open Sans', sans-serif;
  margin-bottom: -30px;
}

.hello-img img {
  border: 1px solid #74dbef;
}
.hello-heading {
  font-size: 48px;
  text-transform: uppercase;
  color: #222;
}
.hello-heading h2 {
  position: relative;
  margin: 0;
  padding: 0;
  font-family: 'Open Sans', sans-serif;
}
.hello-heading h2:before {
  position: absolute;
  content: '';
  height: 2px;
  width: 10%;
  top: 100%;
  left: 0%;
  background-color: #74dbef;
}
.hello-txt {
  color: #333;
  font-size: 16px;
}
.hello-txt h3 {
  font-size: 24px;
  font-family: 'Open Sans', sans-serif;
}
.hello-txt span {
  color: #555;
  font-weight: 700;
}
.hello-txt span p {
  font-weight: 300;
}

@media (min-width: 1200px) {
}

/*Use if needed*/
@media (min-width: 992px) and (max-width: 1199px) {
  .grid-item--height2 {
    height: 300px;
  }
  .grid-item--height1 {
    height: 300px;
  }
  .grid-item--height3 {
    height: 507px;
  }
  .grid-item--height4 {
    height: 400px;
  }
  .grid-item--height5 {
    height: 193px;
  }
  .grid-item--height6 {
    height: 356px;
  }
}

/*      Tablet Layout: 768px */

@media only screen and (min-width: 768px) and (max-width: 991px) {
  .main-menu ul {
    margin-right: 0px;
  }
  .header-heading-area h1 {
    font-size: 4.5em;
  }
  .header-heading-area p {
    font-size: 2.5em;
  }
  .header-btn.resume-btns,
  .read-more.resume-btns-one {
    font-size: 14px;
    padding: 10px 15px;
  }
  .heading-section,
  .center-heading-section,
  .center-small-heading-section {
    padding-top: 15px;
    padding-bottom: 15px;
  }
  .hello-details-section h2 {
    padding-bottom: 0px;
    margin-top: 0;
  }
  .e-and-e-txt {
    width: 84%;
  }
  .e-and-e-txt h4 {
    font-size: 14px;
  }
  .e-and-e-txt h3,
  .e-and-e-txt p {
    font-size: 12px;
    margin: 6px 0px 0px 0px;
  }
  .e-and-e-txt p {
    font-weight: 400;
    font-size: 12px;
  }
  .single-e-and-e-section {
    min-height: 120px;
  }
  .service-ico {
    width: 60px;
    height: 60px;
  }
  .service-ico i {
    font-size: 30px;
  }
  .single-service {
    max-height: 185px;
  }
  .grid-item {
    max-width: 100%;
  }
  .mainmenu-area.header__fixed .barger-menu-ico {
    margin-top: 22px;
  }
  .social-list a,
  .nummer h1 {
    font-size: 22px;
  }
  .grid-item--height2 {
    height: 250px;
  }
  .grid-item--height1 {
    height: 250px;
  }
  .grid-item--height3 {
    height: 457px;
  }
  .grid-item--height4 {
    height: 350px;
  }
  .grid-item--height5 {
    height: 143px;
  }
  .grid-item--height6 {
    height: 306px;
  }
  .grid-item {
    margin-bottom: 10px;
    padding: 0 5px;
  }
  .blog-heading-area h1 {
    font-size: 5em;
  }

  .blog-heading-area h1,
  .contact-heading-area h1,
  .hello-heading-area h1,
  .prtfolio-heading-area h1 {
    font-size: 3.5em;
  }
  .blog-heading-area,
  .contact-heading-area,
  .hello-heading-area,
  .prtfolio-heading-area {
    padding: 100px 0px;
  }
}

/*      Mobile Layout: 320px. */

@media only screen and (max-width: 767px) {
  .header-btn.resume-btns,
  .read-more.resume-btns-one {
    font-size: 14px;
    padding: 10px 15px;
  }
  .header-heading-area h1,
  .hello-heading-area h1,
  .contact-heading-area h1,
  .prtfolio-heading-area h1 {
    font-size: 3em;
  }
  .header-heading-area p,
  .hello-heading-area p,
  .contact-heading-area p,
  .prtfolio-heading-area p {
    font-size: 2em;
    line-height: 1.1em;
  }
  .single-e-and-e-section {
    min-height: 130px;
  }
  .section-padding {
    padding-top: 0px;
  }
  .service-ico {
    float: none;
    margin-right: 0;
    margin-left: 0;
    width: 100%;
    height: 100px;
  }
  .service-text {
    float: none;
    width: 100%;
    text-align: center;
  }
  .single-service {
    padding: 20px;
    display: inline-block;
  }
  .service-ico {
    float: none;
    margin-right: 0;
    margin-left: 0;
    width: 100%;
    text-align: center;
    height: 80px;
    margin-bottom: 10px;
  }
  .service-text h4 {
    font-size: 20px;
    line-height: 1.5em;
  }
  .service-text p {
    font-size: 15px;
    line-height: 1.5em;
    font-weight: 500;
  }
  .grid-item--height2,
  .grid-item--height1,
  .grid-item--height3,
  .grid-item--height4,
  .grid-item--height5,
  .grid-item--height6 {
    max-width: 100%;
  }
  .footer-top-txt {
    text-align: center;
    margin-bottom: 25px;
  }
  .text-right {
    text-align: center;
  }
  .copyrights-txt p {
    font-size: 0.8em;
    text-align: center;
  }
  .social-list-footer ul li {
    font-size: 18px;
    margin-right: 20px;
  }
  ul.menus {
    position: absolute;
    width: 300px;
    right: 0px;
    visibility: hidden;
    margin-right: 0;
    background-color: rgba(51, 51, 51, 0.86);
  }
  ul.menus.addedAnimation {
    top: 75px;
    opacity: 1;
    max-width: 200px;
    visibility: visible;
  }
  .main-menu ul li {
    width: 100%;
  }
  .barger-menu-ico {
    margin-top: 35px;
  }
  .main-menu ul li {
    padding: 10px 20px;
  }
  .mainmenu-area.header__fixed .barger-menu-ico {
    margin-top: 22px;
  }
  .mainmenu-area.header__fixed ul.menus.addedAnimation {
    top: 65px;
  }
  .mainmenu-area.header__fixed .main-menu ul li {
    padding: 10px 20px;
  }
  .contact-form {
    margin-top: 50px;
  }
  .blog-heading-section h2 {
    font-size: 2em;
  }
  .single-blog-ico {
    width: 30%;
  }
  .blog-txt-third-post {
    width: 70%;
  }
  .blog-heading-area,
  .contact-heading-area,
  .hello-heading-area,
  .prtfolio-heading-area {
    padding: 100px 0px;
  }
  .blog-heading-area h3 {
    font-size: 2.5em;
  }
  .post-details ul li {
    font-size: 1em;
    margin: 0 5px;
  }
  .latest-blog-section.section-padding,
  .hello-single.section-padding,
  .hello-heading {
    padding-top: 50px;
  }

  .post-txt blockquote {
    padding: 0px 30px;
    padding-right: 30px;
    font-size: 16px;
  }
  .post-txt p {
    font-size: 16px;
  }
  .post-txt blockquote:before {
    font-size: 30px;
    left: -5px;
    top: -20px;
  }
  .post-txt blockquote:after {
    font-size: 30px;
    right: 1%;
    bottom: -10px;
  }
  .contact-heading-section h2 {
    font-size: 2em;
    margin-bottom: 25px;
  }
  .blog-heading-section,
  .contact-heading-section {
    width: 90%;
    margin: auto;
  }
  .portfolio-menu ul li {
    margin-right: 10px;
    font-size: 14px;
  }
  .grid-item--height2 {
    height: 300px;
  }
  .parallax-window {
    min-height: auto;
  }
}

/*      Wide Mobile Layout: 480px. */

@media only screen and (min-width: 480px) and (max-width: 767px) {
  .single-e-and-e-section {
    min-height: 100px;
  }
  .grid-item--height2 {
    height: 250px;
  }
  .grid-item--height1 {
    height: 250px;
  }
  .grid-item--height3 {
    height: 457px;
  }
  .grid-item--height4 {
    height: 350px;
  }
  .grid-item--height5 {
    height: 143px;
  }
  .grid-item--height6 {
    height: 306px;
  }
  .grid-item {
    margin-bottom: 10px;
    padding: 0 5px;
  }
}

/*      Mobile Layout: 480px. */
@media only screen and (max-width: 479px) {
  .e-and-e-txt {
    width: 85%;
  }
  .header-heading-area h1,
  .hello-heading-area h1,
  .contact-heading-area h1,
  .prtfolio-heading-area h1 {
    font-size: 2.5em;
  }
  .header-heading-area p,
  .hello-heading-area p,
  .contact-heading-area p,
  .prtfolio-heading-area p {
    font-size: 1.7em;
  }
}
/*      Small Mobile Layout: 480px. */
@media only screen and (max-width: 350px) {
  .header-heading-area h1,
  .hello-heading-area h1,
  .contact-heading-area h1,
  .prtfolio-heading-area h1 {
    font-size: 2.3em;
  }
  .header-heading-area p,
  .hello-heading-area p,
  .contact-heading-area p,
  .prtfolio-heading-area p {
    font-size: 1.3em;
  }
}

#logo {
  img {
    margin-top: 5px;
    max-width: 50px;
    @media (min-width: 490px) {
      max-width: 65px;
    }
    @media (min-width: 720px) {
      max-width: 75px;
    }
  }
}
</style>
