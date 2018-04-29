<template>
  <div class="home">
    <!-- MJ Main Banner Section -->
    <section class="header-section-area" id="homeSection">
      <div class="header-area-bg parallax-window" style="background-image: url(img/home_achtergrond2_lichter2.jpg);">
        <div class="container">
          <div class="row">
            <div class="header-heading-area text-center">
              <p>Uw specialist in precisie werk</p>
              <h1>Multi-Service JP</h1>

              <div class="header-btn wow bounceIn">
                <a href="#contactSection" class="header-btn resume-btns">
                  <i class="fa fa-send"></i> Contact Me</a>
              </div>
            </div>

            <!-- Scroll down Arrow -->
            <div>
              <a class="ct-btn-scroll ct-js-btn-scroll" href="#helloSection">
                <img alt="Arrow Down Icon" src="https://www.solodev.com/assets/anchor/arrow-down.png">
              </a>
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
              <h2>hello</h2>
            </div>
            <div class="hello-details-section">
              <h2>I’m Jonathan Put</h2>
              <p>Oprichter en eigenaar van Multi-Service JP. In 2016 startte ik mijn activiteiten op zelfstandige basis tijdens mijn studies. Na een vlot gesprek verzorgen wij al uw project met de hoogste precisie. Efficiënt, creatief en nauwkeurigheid staan bij ons centraal. Met mijn gemotiveerd team gaan wel elke uitdaging aan:
                <ul>
                  <li>
                    <p>Tuinwerken :
                      <span>Door 5jaar ervaring in hagen scheren kan ik uw tuin perfect onderhouden / het plaatsen van een afsluiting / aanleg van uw gazon of een nieuwe haag.</span>
                    </p>
                  </li>
                  <li>
                    <p>Carwrapping :
                      <span>Na de opleiding bij 3M Carwrapping, mijn hoog gehalte aan geduld en mijn nauwkeurigheid kan ik uw auto weer laten schitteren in een nieuw jasje.</span>
                    </p>
                  </li>
                  <li>
                    <p>Webdesign :
                      <span>Door mijn voorgaande opleiding en collega’s aan KDG slagen wij er in om een moderne dynamische website op maat te ontwerpen.</span>
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
      <div class="service-area-bg parallax-window" style="background-image: url(img/home_myService.jpg);">
        <div class="container">
          <div class="row">
            <div class="col-md-6 col-sm-12">
              <div class="single-service">
                <div class="service-ico">
                  <i class="fa fa-arrows-alt"></i>
                </div>
                <div class="service-text" onclick="location.href='portfolio.html#portfolioSection';">
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
                <div class="service-text" onclick="location.href='portfolio.html#portfolioSection';">
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
                <div class="service-text" onclick="location.href='portfolio.html#portfolioSection';">
                  <h4>Schilderen</h4>
                  <p>Wij plaatsen afsluiting met de hoogste precisie zodat u jaren lang kan genieten van een perfect geplaatste omheining op maat van uw tuin. Afgewerkt met rolgazon/bomen/hagen/...</p>
                </div>
              </div>
            </div>
            <div class="col-md-6 col-sm-12">
              <div class="single-service">
                <div class="service-ico">
                  <i class="fa fa-code"></i>
                </div>
                <div class="service-text" onclick="location.href='portfolio.html#portfolioSection';">
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
                  <a href="#contactSection">Contact me</a>
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
      <div class="counter-bg parallax-window" style="background-image: url(img/home_counter.jpg);">
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
            <form id="emailform" action="php/contact.php" method="POST">
              <div class="form-group">
                <input type="text" class="form-control" id="form-name-px" name="pixiefy_name" placeholder="Your Name:">
              </div>
              <div class="form-group">
                <input type="email" class="form-control" id="form-email-px" name="pixiefy_email" placeholder="Your Email:">
              </div>
              <div class="form-group">
                <input type="text" class="form-control" id="form-subject-px" name="pixiefy_subject" placeholder="Your Subject:">
              </div>
              <div class="form-group">
                <textarea class="form-control" id="form-massage-px" rows="5" name="pixiefy_message" placeholder="Type Your Message:"></textarea>
              </div>
              <div>
                <button type="submit" class="submit_btn">
                  <i class="fa fa-send"></i> Send</button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </section>
  </div>
</template>

<style lang="scss" scoped>
.header-heading-area {
  font-size: 1.4rem;
  h1 {
    padding-top: 5px;
  }
}
</style>
