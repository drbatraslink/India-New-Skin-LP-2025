// Screenshot carousel initialization (autoplay only on mobile)
const isMobile = window.innerWidth < 1024;

$('.icon_banner_foot_slider').owlCarousel({
  loop: true,
  responsiveClass: true,
  nav: true,
  margin: 5,
  autoplay: isMobile,
  autoplayTimeout: 6000,
  smartSpeed: 400,
  navText: [
    "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />",
    "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />",
  ],
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
    1200: { items: 4 },
  },
});

// Screenshot carousel initialization
$('.screenshot_slider').owlCarousel({
  loop: true,
  responsiveClass: true,
  nav: true,
  margin: 5,
  autoplay: true,
  autoplayTimeout: 6000,
  smartSpeed: 400,
  navText: [
    "<img src='images/previmage.webp' alt='001 prev' width='50' height='50' />",
    "<img src='images/nextimage.webp' alt='001 next' width='50' height='50' />",
  ],
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    768: { items: 2 },
    1024: { items: 2 },
    1200: { items: 3 },
  },
});


function toggleOwlCarousel() {
  const $slider = $('#skin_conditions_slider');

  if ($(window).width() < 768) {
    if (!$slider.hasClass('owl-loaded')) {
      $slider.addClass('owl-carousel');
      $slider.owlCarousel({
        loop: false,
        margin: 15,
        nav: true,
        autoHeight: false,
        smartSpeed: 500,
        autoplay: true,
        autoplayTimeout: 6000,
        navText: [
          "<img src='images/previmage.webp' alt='prev' width='50' height='50' />",
          "<img src='images/nextimage.webp' alt='next' width='50' height='50' />"
        ],
        responsive: {
          0: { items: 3 },
          480: { items: 3 },
          600: { items: 4 }
        }
      });
    }
  } else {
    if ($slider.hasClass('owl-loaded')) {
      $slider.trigger('destroy.owl.carousel');
      $slider.removeClass('owl-carousel owl-loaded');
      $slider.find('.owl-stage-outer, .owl-stage, .owl-item, .owl-nav, .owl-dots').children().unwrap();
    }
  }
}

// Run on load and resize
$(document).ready(toggleOwlCarousel);
$(window).resize(toggleOwlCarousel);



// Testimonial carousel initialization
$('#testimonilas_slider').owlCarousel({
  loop: false,
  responsiveClass: true,
  nav: true,
  margin: 20,
  autoplay: false,
  autoplayTimeout: 4000,
  smartSpeed: 400,
  navText: [
    "<img src='images/previmage.webp' alt='002 prev' width='50' height='50' />",
    "<img src='images/nextimage.webp' alt='002 next' width='50' height='50' />",
  ],
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
    1200: { items: 3 },
  },
});

// Advance skin carousel initialization
$('#advance_skin_slider').owlCarousel({
  loop: false,
  responsiveClass: true,
  nav: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 8000,
  smartSpeed: 400,
  navText: [
    "<img src='images/previmage.webp' alt='003 prev' width='50' height='50' />",
    "<img src='images/nextimage.webp' alt='003 next' width='50' height='50' />",
  ],
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    768: { items: 1 },
    1024: { items: 1 },
    1200: { items: 1 },
  },
});


// Advance skin carousel initialization
$('#banner_slider').owlCarousel({
  loop: false,
  responsiveClass: true,
  nav: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 8000,
  smartSpeed: 400,
  navText: [
    "<img src='images/previmage.webp' alt='003 prev' width='50' height='50' />",
    "<img src='images/nextimage.webp' alt='003 next' width='50' height='50' />",
  ],
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    768: { items: 1 },
    1024: { items: 1 },
    1200: { items: 1 },
  },
});


// Google rating carousel initialization
$('#googlerating_slider').owlCarousel({
  loop: true,
  responsiveClass: true,
  nav: true,
  margin: 0,
  autoplay: true,
  autoplayTimeout: 8000,
  smartSpeed: 400,
  navText: [
    "<img src='images/previmage.webp' alt='004 prev' width='50' height='50' />",
    "<img src='images/nextimage.webp' alt='004 next' width='50' height='50' />",
  ],
  responsive: {
    0: { items: 1 },
    600: { items: 1 },
    768: { items: 2 },
    1024: { items: 3 },
    1200: { items: 3 },
  },
});

$(".owl-nav .owl-prev").attr("role", "button"), $(".owl-nav .owl-next").attr("role", "button")

// Scroll to top button logic
const scrollToTopBtn = document.querySelector('.scrollToTopBtn');
const rootElement = document.documentElement;

function handleScroll() {
  const scrollTotal = rootElement.scrollHeight - rootElement.clientHeight;
  scrollToTopBtn.classList.toggle('showBtn', rootElement.scrollTop / scrollTotal > 0.02);
}

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

scrollToTopBtn.addEventListener('click', scrollToTop);
window.addEventListener('scroll', handleScroll);

// Open & Close Form
function openForm() {
  document.getElementById("myForm").style.display = "block";
  $("#myForm .myForm-top-form").append($(".form-top-new"));
  $(".contactFormHolder .contactForm").hide();
}

function closeForm() {
  $(".contactFormHolder .contactForm").show().append($(".form-top-new"));
  document.getElementById("myForm").style.display = "none";
}

// Popup Video Initialization
$(function() {
  $(".popup-youtube, .popup-vimeo").magnificPopup({
    type: "iframe",
    mainClass: "mfp-fade",
    removalDelay: 160,
    preloader: false,
    fixedContentPos: true
  });
});


  // Accordion functionality
  const togglers = document.querySelectorAll('[data-bs-toggle]');
  togglers.forEach((btn) => {
    const targetBlock = document.querySelector(btn.dataset.bsToggle);
    if (btn.classList.contains('active')) {
      targetBlock.style.maxHeight = targetBlock.scrollHeight + 'px';
      btn.closest('.accordion__item').classList.add('active');
    }

    btn.addEventListener('click', (e) => {
      const block = document.querySelector(e.currentTarget.dataset.bsToggle);
      if (e.currentTarget.classList.contains('active')) {
        block.style.maxHeight = '';
        e.currentTarget.closest('.accordion__item').classList.remove('active');
      } else {
        block.style.maxHeight = block.scrollHeight + 'px';
        e.currentTarget.closest('.accordion__item').classList.add('active');
      }
      e.currentTarget.classList.toggle('active');
      document.querySelectorAll('.accordion__header').forEach((header) => {
        if (header !== e.currentTarget) {
          header.classList.remove('active');
          document.querySelector(header.dataset.bsToggle).style.maxHeight = '';
          header.closest('.accordion__item').classList.remove('active');
        }
      });
    });
  });


  /*** 3. Tab Functionality ***/
  function setupTabs() {
    $(".tabb_content").hide().first().show();
    $("ul.nptabbs li").on("click", function () {
      const target = $(this).attr("rel");
      $(".tabb_content").hide();
      $("#" + target).fadeIn();
      $("ul.nptabbs li").removeClass("active");
      $(this).addClass("active");
      $(".tabb_drawer_heading").removeClass("d_active");
      $(".tabb_drawer_heading[rel='" + target + "']").addClass("d_active");
    });

    $(".tabb_drawer_heading").on("click", function () {
      const target = $(this).attr("rel");
      $(".tabb_content").hide();
      $("#" + target).fadeIn();
      $(".tabb_drawer_heading").removeClass("d_active");
      $(this).addClass("d_active");
      $("ul.nptabbs li").removeClass("active");
      $("ul.nptabbs li[rel='" + target + "']").addClass("active");
    });

    $("ul.nptabbs li").last().addClass("tabb_last");
  }

  function tabControl() {
    const tabs = $(".tabbed-content .tabs");
    if (tabs.is(":visible")) {
      tabs.find("a").on("click", function (e) {
        e.preventDefault();
        const target = $(this).attr("href");
        tabs.find("a").removeClass("active");
        $(".tabbed-content .item").removeClass("active");
        $(this).addClass("active");
        $(target).addClass("active");
      });
    } else {
      $(".tabbed-content .item").on("click", function () {
        const target = $(this).attr("id");
        const parent = $(this).parents(".tabbed-content");
        parent.find(".tabs a").removeClass("active");
        parent.find(".item").removeClass("active");
        $(this).addClass("active");
        parent.find(`.tabs a[href="#${target}"]`).addClass("active");
      });
    }
  }

  setupTabs();
  tabControl();

  let resizeTimer;
  $(window).on("resize", function () {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(tabControl, 250);
  });
