/*
  Theme Name: Mj - OnePage personal & resume template
  Theme URL: http://www.pixiefy.com/mj/
  Author: pixiefy team
  Author URI: http://www.pixiefy.com/
  Description: Mj - Responsive Onepage Personal Resume and Portfolio HTML5 Template.
  Version: 0.1

	==================================
	[Table of contents]

	1. Custom Function
	2. Click And Scroll Menu Item Init
	3. Click Slide Menu Init
	4. Tooltip Init
	5. Wow Init
	6. Google Map Init
	7. Preloader Init
	8. Isotope Filtering Init
	9. Simple Parallax Init
	10. Header Fixed With Scroll
	11. Scroll And Animate Skill
	12. Animate Fun Factory Counter
	13. Equal Height Init - Resize Event
	14. Equal Height Init - On Ready Event
	15. Ajax Contact Form

*/

(function($) {
  'use strict';

  /* --------------------------------------------------------------
		1. CUSTOM FUNCTION
	--------------------------------------------------------------*/
  jQuery.fn.exists = function() {
    return this.length > 0;
  };

  function isScrolledIntoView(elem) {
    let docViewTop = $(window).scrollTop();
    let docViewBottom = docViewTop + $(window).height();

    let elemTop = $(elem).offset().top;
    let elemBottom = elemTop + $(elem).height();

    return elemBottom <= docViewBottom && elemTop >= docViewTop;
  }

  $.fn.animateNumbers = function(stop, commas, duration, ease) {
    return this.each(function() {
      let $this = $(this);
      let start = parseInt($this.text().replace(/,/g, ''), 10);
      commas = commas === undefined ? true : commas;
      $({
        value: start,
      }).animate(
        {
          value: stop,
        },
        {
          duration: duration == undefined ? 500 : duration,
          easing: ease == undefined ? 'swing' : ease,
          step: function() {
            $this.text(Math.floor(this.value));
            if (commas) {
              $this.text(
                $this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'),
              );
            }
          },
          complete: function() {
            if ((parseInt($this.text()) !== stop, 10)) {
              $this.text(stop);
              if (commas) {
                $this.text(
                  $this.text().replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,'),
                );
              }
            }
          },
        },
      );
    });
  };

  /* --------------------------------------------------------------
		2. CLICK AND SCROLL MENU ITEM INIT
	--------------------------------------------------------------*/
  $('#mainmenu').on('click', 'a', function(e) {
    let href = $(this).attr('href'),
      offsetTop = href === '#' ? 0 : $(href).offset().top - 0;
    $('html, body')
      .stop()
      .animate(
        {
          scrollTop: offsetTop,
        },
        500,
        'easeInOutCirc',
      );
    e.preventDefault();
  });

  /* --------------------------------------------------------------
		3. CLICK SLIDE MENU INIT
	--------------------------------------------------------------*/
  // $('#nav-icon2.barger-menu-ico').on('click', function(e) {
  //   e.preventDefault();
  //   $(this).toggleClass('fa-bars');
  //   $(this).toggleClass('fa-close');
  //   let menus = $('.menus');
  //   menus.toggleClass('addedAnimation');
  //   $(this).toggleClass('open');
  // });

  $(function() {
    if (window.innerWidth > 769) {
      $('#nav-icon2.barger-menu-ico').addClass('open navIconHide');
      let menus = $('.menus');
      menus.toggleClass('addedAnimation');
    }
  });

  /* --------------------------------------------------------------
		4. TOOLTIP INIT
	--------------------------------------------------------------*/
  $('[data-toggle="tooltip"]').tooltip();

  /* --------------------------------------------------------------
		5. WOW INIT
	--------------------------------------------------------------*/
  $(function() {
    let wow = new WOW({
      boxClass: 'wow', // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset: 0, // distance to the element when triggering the animation (default is 0)
      mobile: false, // trigger animations on mobile devices (default is true)
      live: true, // act on asynchronously loaded content (default is true)
      callback: function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null, // optional scroll container selector, otherwise use window
    });
    wow.init();
  });

  $(window).on('load', function() {
    /* --------------------------------------------------------------
			7. PRELOADER INIT
		--------------------------------------------------------------*/
    $('#freshr-preloader')
      .delay(600)
      .fadeOut(500);
    $('body').css({ overflow: 'visible' });
    $('.freshr-scroll-down').addClass('animated');
  }); // end window load event.

  $(window).on('scroll', function() {
    /* --------------------------------------------------------------
			9. SIMPLE PARALLAX INIT
		--------------------------------------------------------------*/
    $(
      '.blog-area-bg, .header-area-bg, .contact-area-bg, .hello-area-bg, .prtfolio-area-bg',
    ).css('background-position', '50% ' + $(this).scrollTop() / 2 + 'px');

    /* --------------------------------------------------------------
			10. HEADER FIXED WITH SCROLL
		--------------------------------------------------------------*/
    if ($(window).scrollTop() > 50) {
      $('#mainmenu-area').addClass('header__fixed');
    } else {
      $('#mainmenu-area').removeClass('header__fixed');
    }

    /* --------------------------------------------------------------
			11. SCROLL AND ANIMATE SKILL
		--------------------------------------------------------------*/
    if ($('#expertise_skill_charts').exists()) {
      if (isScrolledIntoView('#expertise_skill_charts')) {
        $('.single-skills').each(function() {
          let percetageHeight = $(this).find('.progress-bar');
          let percetageSkill = $(this).find('.counter');
          let data = $(this).attr('data-animation-value');
          $(percetageHeight).animate(
            { width: data + '%' },
            { duration: 3500, easing: 'easeOutCirc' },
          );
          $(percetageSkill).animateNumbers(data, true, parseInt(3500, 10));
        });
      } // end isScrolledIntoView
    } // if exists

    /* --------------------------------------------------------------
			12. ANIMATE FUN FACTORY COUNTER
		--------------------------------------------------------------*/
    if ($('#my_counter').exists()) {
      if (isScrolledIntoView('#my_counter')) {
        $('.counter-oka').each(function() {
          let data = $(this).attr('data-percentage');
          $(this).animateNumbers(data, true, parseInt(3500, 10));
        });
      } // end isScrolledIntoView
    }
  }); // end window scroll event

  $(window).on('resize', function() {
    /* --------------------------------------------------------------
			13. EQUAL HEIGHT INIT
		--------------------------------------------------------------*/
    $('.single-blog-right').css({
      height: $('.single-blog-left').outerHeight(),
    });
  }); // end window scroll event

  /* --------------------------------------------------------------
		14. EQUAL HEIGHT INIT
	--------------------------------------------------------------*/
  $('.single-blog-right').css({ height: $('.single-blog-left').outerHeight() });

  /* --------------------------------------------------------------
		15. Contact form init - Ajax
	--------------------------------------------------------------*/
  $('#emailform').on('submit', function(e) {
    e.preventDefault();

    let name = $('#form-name-px'),
      email = $('#form-email-px'),
      subject = $('#form-subject-px'),
      massage = $('#form-massage-px'),
      name_val = name.val(),
      email_val = email.val(),
      validate = false;

    function validateEmail(email) {
      let re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      return re.test(email_val);
    }

    name.removeClass('error');
    massage.removeClass('error');
    email.removeClass('error');

    if (name.val() === '') {
      validate = true;
      name.addClass('error');
    }

    if (massage.val() === '') {
      validate = true;
      massage.addClass('error');
    }

    if (email.val() === '') {
      validate = true;
      email.addClass('error');
    }

    if (!validateEmail(email.val())) {
      validate = true;
      email.addClass('error');
    }

    if (validate === false) {
      let form = $('#emailform');
      $.ajax({
        method: 'POST',
        url: $(this).attr('action'),
        data: {
          name: $('#form-name-px').val(),
          email: $('#form-email-px').val(),
          subject: $('#form-subject-px').val(),
          message: $('#form-massage-px').val(),
        },
        success: function() {
          $(
            '<div class="message-update alert alert-success">Mail is verzonden.</div>',
          ).appendTo($('.submit_btn').parent());
          form.each(function() {
            this.reset();
          });
        },
      });
    }
  });
})(jQuery);

$(document).ready(function() {
  $('a').on('click', function(event) {
    if (this.hash !== '') {
      event.preventDefault();
      let hash = this.hash;
      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function() {
          window.location.hash = hash;
        },
      );
    }
  });
});
