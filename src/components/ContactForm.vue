<template>
  <form id="emailform" action="php/contact.php" method="post">
    <div class="row">
      <div class="col-12 col-lg-4">
        <div class="form-group">
          <input type="text" class="form-control" id="form-name-px" name="name" placeholder="Your Name:">
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="form-group">
          <input type="email" class="form-control" id="form-email-px" name="email" placeholder="Your Email:">
        </div>
      </div>
      <div class="col-12 col-lg-4">
        <div class="form-group">
          <input type="text" class="form-control" id="form-name-px" name="tel" placeholder="Your phone number:">
        </div>
      </div>
    </div>
    <div class="form-group">
      <input type="text" class="form-control" id="form-subject-px" name="subject" placeholder="Your Subject:">
    </div>
    <div class="form-group">
      <textarea class="form-control" id="form-massage-px" rows="5" name="message" placeholder="Type Your Message:"></textarea>
    </div>
    <div class="form-check">
      <input class="form-check-input" type="checkbox" value="" id="defaultCheck1" v-model="privacycheck">
      <label class="form-check-label" for="defaultCheck1">
        Ik heb de
        <a href="./img/privacy_statement_multi-servicejp.pdf" class="privacy-link">privacy verklaring</a> gelezen en goedgekeurd*
      </label>
    </div>
    <div>
      <button type="submit" class="submit_btn" :disabled="!privacycheck">
        <i class="fa fa-send"></i> Send</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      privacycheck: false,
    };
  },
};
</script>

<style>
.form-check-label {
  margin-left: 15px;
  margin-bottom: 20px;
}
.privacy-link {
  color: #57b4b4;
}
@media (min-width: 1080px) {
  .privacy-link:hover {
    color: #376666;
  }
}
</style>
