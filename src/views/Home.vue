<template>
  <div class="home">
    <!-- MJ Main Banner Section -->
    <section class="header-section-area" id="homeSection">
      <div class="header-area-bg parallax-window" style="background-image: url(img/home_achtergrond2_lichter2-min.jpg);">
        <div class="container">
          <div class="row">
            <div class="header-heading-area text-center">
              <p>Uw specialist in precisie werk</p>
              <h1>Multi-Service JP</h1>

              <div class="header-btn wow bounceIn">
                <router-link to="#contactSection" class="header-btn resume-btns">
                  <i class="fa fa-send"></i> Contact Me</router-link>
              </div>
            </div>

            <!-- Scroll down Arrow -->
            <div>
              <router-link class="ct-btn-scroll ct-js-btn-scroll" to="#helloSection">
                <img alt="Arrow Down Icon" src="https://www.solodev.com/assets/anchor/arrow-down.png">
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MJ Personal Info Start -->
    <section class="hello-personal-info-area section-padding" id="helloSection">
      <div class="container">
        <div class="row">
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="heading-section">
              <h2>Hallo</h2>
            </div>
            <div class="hello-details-section">
              <h2>Mijn naam is Jonathan Put.</h2>
              <p>Oprichter en eigenaar van Multi-Service JP. In 2016 startte ik mijn activiteiten op zelfstandige basis tijdens mijn studies. Na een vlot gesprek verzorgen wij al uw projecten met de hoogste precisie. Efficiëntie, creativiteit en nauwkeurigheid staan bij ons centraal. Met mijn gemotiveerd team gaan we elke uitdaging aan:
                <ul>
                  <li>
                    <p>Tuinwerken :
                      <span>Door 5 jaar ervaring in hagen scheren kan ik uw tuin perfect onderhouden / plaatsen van een afsluiting / aanleg van uw gazon of planten van een nieuwe haag…</span>
                    </p>
                  </li>
                  <li>
                    <p>Carwrapping :
                      <span>Door de opleiding bij 3M Carwrapping, mijn hoog gehalte aan geduld en mijn nauwkeurigheid kan ik uw auto weer laten schitteren in een nieuw jasje.</span>
                    </p>
                  </li>
                  <li>
                    <p>Webdesign :
                      <span>Door mijn voorgaande opleiding en collega’s aan KDG slagen wij erin om een moderne dynamische website op maat te ontwerpen.</span>
                    </p>
                  </li>
                </ul>
              </p>
            </div>
            <router-link to="/bio" class="read-more resume-btns-one">Read More
              <i class="fa fa-angle-double-right"></i>
            </router-link>
          </div>
          <div class="col-md-6 col-sm-6 col-xs-12">
            <div class="heading-section">
              <h2>personal info</h2>
            </div>
            <div class="personal-info-details">
              <ul>
                <li>
                  <p> Name :
                    <span> Jonathan Put</span>
                  </p>
                </li>
                <li>
                  <p> Birth Place :
                    <span> Rumst, Belgium</span>
                  </p>
                </li>
                <li>
                  <p> Date of Birth :
                    <span> 02/10/1992</span>
                  </p>
                </li>
                <li>
                  <p> Nationality :
                    <span> Belg</span>
                  </p>
                </li>

                <li>
                  <p> Phone :
                    <span> (+32) 498 / 72.85.76</span>
                  </p>
                </li>
                <li>
                  <p> Address :
                    <span> Schaarbos 8, 2850 BOOM</span>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MJ Service Area Start -->
    <section class="service-area section-padding" id="servicesSection">
      <div class="center-heading-section text-center">
        <h2>my services</h2>
      </div>
      <div class="service-area-bg parallax-window" style="background-image: url(img/home_myService-min.jpg);">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <div class="single-service">
                <div class="service-ico">
                  <i class="fa fa-arrows-alt"></i>
                </div>
                <div class="service-text" onclick="location.href='/portfolio#portfolioSection';">
                  <h4>Tuinonderhoud / Tuinaanleg</h4>
                  <p>Maak uw buren jaloers door een mooi strak geschoren haag en tot het laatste bladje opgekuisd! Wij plaatsen afsluitingen met de hoogste precisie. Afgewerkt met rolgazon/bomen/hagen/...</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="single-service">
                <div class="service-ico">
                  <i class="fa fa-car"></i>
                </div>
                <div class="service-text" onclick="location.href='portfolio#portfolioSection';">
                  <h4>Carwrapping</h4>
                  <p>Nieuwe kleurtje nodig voor uw wagen dat er na een paar jaar terug af kan? Wij maken ontwerp op maat of volledige wrap. Prijzen kan u aanvragen via contactformulier.</p>
                </div>
              </div>
            </div>
          </div>
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <div class="single-service">
                <div class="service-ico">
                  <i class="fa fa-paint-brush"></i>
                </div>
                <div class="service-text" onclick="location.href='portfolio#portfolioSection';">
                  <h4>Schilderen</h4>
                  <p>Wij geven uw buiten hekwerk/poort of tuinhuis een grondige oplap beurt. Maar heeft u binnen in een project kunnen we dit zeker realiseren.</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="single-service">
                <div class="service-ico">
                  <i class="fa fa-code"></i>
                </div>
                <div class="service-text" onclick="location.href='portfolio#portfolioSection';">
                  <h4>Webdesign</h4>
                  <p>Dynamische en moderne websites / Login systemen voor uw website. Webshops / contactformulieren / mobile view krijgt u allemaal van onze vakmannen.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MJ CTA Section -->
    <section class="footer-top-section section-neg-padding">
      <div>
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
                  <router-link to="#contactSection">Contact me</router-link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MJ Counter Section Start -->
    <section class="counter-section section-padding">
      <div id="my_counter"></div>
      <div class="counter-bg parallax-window" style="background-image: url(img/home_counter-min.jpg);">
        <div class="container">
          <div class="row">
            <div class="counters text-center">
              <div class="col-md-3 col-sm-3 col-xs-6 single-counter">
                <i class="fa fa-user"></i>
                <h2>
                  <span data-percentage="27" class="counter-oka">0</span>
                </h2>
                <p>Happy clients</p>
              </div>
              <div class="col-md-3 col-sm-3 col-xs-6 single-counter">
                <i class="fa fa-folder-open"></i>
                <h2>
                  <span data-percentage="9" class="counter-oka">0</span>
                </h2>
                <p>projects done</p>
              </div>
              <div class="col-md-3 col-sm-3 col-xs-6 single-counter">
                <i class="fa fa-clock"></i>
                <h2>
                  <span data-percentage="2365" class="counter-oka">0</span>
                </h2>
                <p>working hours</p>
              </div>
              <div class="col-md-3 col-sm-3 col-xs-6 single-counter">
                <i class="fa fa-coffee"></i>
                <h2>
                  <span data-percentage="563" class="counter-oka">0</span>
                </h2>
                <p>Cofee cups</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- MJ Contact form section -->
    <section class="get-in-touch-section section-padding" id="contactSection">
      <div class="center-heading-section text-center">
        <h2>get in touch</h2>
      </div>
      <div class="container">

        <div class="col-md-12 col-sm-12 col-xs-12">
          <div class="contact-form">
            <!-- Form Start -->
            <contact-form></contact-form>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<script>
import ContactForm from '@/components/ContactForm';
export default {
  components: {
    ContactForm,
  },
};
</script>

<style lang="scss" scoped>
.header-heading-area {
  font-size: 1.4rem;
  h1 {
    padding-top: 5px;
  }
}
.form-check-label {
  margin-left: 15px;
  margin-bottom: 20px;
}
.privacy-link {
  color: #57b4b4;
}

@media screen and (min-width: 720px) {
  .personal-info-details {
    padding-top: 53px;
  }
}
</style>
