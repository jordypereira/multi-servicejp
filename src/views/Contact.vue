<template>
  <div id="contact">
    <section class="contact-section-area" id="homeSection">
      <div class="contact-area-bg parallax-window" style="background-image: url(img/portfolio_achtergrond2_lichter.jpg);">
        <div class="container">
          <div class="row">
            <div class="contact-heading-area text-center">
              <p>Vrijblijvend meer informatie gewenst</p>
              <h1 class="wow slideInDown" data-wow-delay=".1s">Contacteer ons nu</h1>
            </div>
          </div>
        </div>
      </div>
    </section>

    <div class="contact-icon-section section-padding">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <div class="contact-ico">
              <i class="fa fa-phone"></i>
            </div>
            <div class="contact-deatils">
              <p>Contact right away </p>
              <p>0498/72.85.76</p>

            </div>
          </div>
          <div class="col-md-4">
            <div class="contact-ico">
              <i class="fa fa-envelope"></i>
            </div>
            <div class="contact-deatils">
              <p>Offertes/questions</p>
              <p>support@multi-servicejp.be</p>
            </div>
          </div>
          <div class="col-md-4">
            <div class="contact-ico">
              <i class="fa fa-map-marker"></i>
            </div>
            <div class="contact-deatils">
              <p>Schaarbos 8</p>
              <p>BOOM, Belgium</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <section class="get-in-touch-section " id="contactSection">
      <div class="container">
        <div class="row">
          <div class="contact-heading-section text-center">
            <h2>get in touch</h2>
            <p>Wilt u dat ik langs kom om een project/werk te bespreken? Prijs aanvraag voor carwrapping of eender welke andere vraag: vul onderstaand formulier in en ik neem zo snel mogelijk contact met u op.</p>
          </div>

          <div class="col-md-12">
            <div class="contact-form">
              <!-- Form Start -->
              <contact-form></contact-form>
            </div>
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
