(function() {
  //preloader
  $(window).load(function() {

    $('#preloader').delay(1300).slideUp('slow');

  });
  // detect if IE : from http://stackoverflow.com/a/16657946
  var ie = (function() {
    var undef, rv = -1; // Return value assumes failure.
    var ua = window.navigator.userAgent;
    var msie = ua.indexOf('MSIE ');
    var trident = ua.indexOf('Trident/');

    if (msie > 0) {
      // IE 10 or older => return version number
      rv = parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    } else if (trident > 0) {
      // IE 11 (or newer) => return version number
      var rvNum = ua.indexOf('rv:');
      rv = parseInt(ua.substring(rvNum + 3, ua.indexOf('.', rvNum)), 10);
    }

    return ((rv > -1) ? rv : undef);
  }());

  // disable/enable scroll (mousewheel and keys) from http://stackoverflow.com/a/4770179
  // left: 37, up: 38, right: 39, down: 40,
  // spacebar: 32, pageup: 33, pagedown: 34, end: 35, home: 36
  var keys = [32, 37, 38, 39, 40],
    wheelIter = 0;

  function preventDefault(e) {
    e = e || window.event;
    if (e.preventDefault)
      e.preventDefault();
    e.returnValue = false;
  }

  function keydown(e) {
    for (var i = keys.length; i--;) {
      if (e.keyCode === keys[i]) {
        preventDefault(e);
        return;
      }
    }
  }

  function touchmove(e) {
    preventDefault(e);
  }

  function wheel(e) {
    // for IE
    //if( ie ) {
    //preventDefault(e);
    //}
  }

  function disable_scroll() {
    window.onmousewheel = document.onmousewheel = wheel;
    document.onkeydown = keydown;
    document.body.ontouchmove = touchmove;
  }

  function enable_scroll() {
    window.onmousewheel = document.onmousewheel = document.onkeydown = document.body.ontouchmove = null;
  }

  var docElem = window.document.documentElement,
    scrollVal,
    isRevealed,
    noscroll,
    isAnimating,
    container = document.getElementById('cross-portfolio'),
    trigger = container.querySelector('button.trigger');

  function scrollY() {
    return window.pageYOffset || docElem.scrollTop;
  }

  function scrollPage() {
    scrollVal = scrollY();

    if (noscroll && !ie) {
      if (scrollVal < 0) return false;
      // keep it that way
      window.scrollTo(0, 0);
    }

    if (classie.has(container, 'notrans')) {
      classie.remove(container, 'notrans');
      return false;
    }

    if (isAnimating) {
      return false;
    }

    if (scrollVal <= 0 && isRevealed) {
      toggle(0);
    } else if (scrollVal > 0 && !isRevealed) {
      toggle(1);
    }
  }

  function toggle(reveal) {
    isAnimating = true;

    if (reveal) {
      classie.add(container, 'modify');
    } else {
      noscroll = true;
      disable_scroll();
      classie.remove(container, 'modify');
    }

    // simulating the end of the transition:
    setTimeout(function() {
      isRevealed = !isRevealed;
      isAnimating = false;
      if (reveal) {
        noscroll = false;
        enable_scroll();
      }
    }, 600);
  }

  // refreshing the page...
  var pageScroll = scrollY();
  noscroll = pageScroll === 0;

  disable_scroll();

  if (pageScroll) {
    isRevealed = true;
    classie.add(container, 'notrans');
    classie.add(container, 'modify');
  }

  window.addEventListener('scroll', scrollPage);
  trigger.addEventListener('click', function() {
    toggle('reveal');
  });

  //typed
  $(".element").typed({
    strings: ["I'm Web Developer", "I'm Web Designer"],
    typeSpeed: 1,
    backSpeed: 1,
    backDelay: 1000,
    loop: true
  });

  $(".sub-title").typed({
    strings: ["Web Developer", "Web Designer"],
    typeSpeed: 1,
    backSpeed: 1,
    backDelay: 1400,
    loop: true
  });



  //reveal on scrool
  var waypoint = new Waypoint({
    element: document.getElementById('count'),
    handler: function() {
      $('.count').countTo();
    },
    offset: 500
  })


  $('.anchor-scroll').anchorScroll({
     scrollSpeed: 1000,
     offsetTop: 0
  });



  $(".my-project").on("click", function() {
    var $this = $(this);
    var img, title, desc, smdesc;

    if ($this.hasClass('1')) {

      img = $('#img-src-1');
      title = $("#img-title-1");
      desc = $("#img-desc-1");
      smdesc = $("#img-smdesc-1");

    }
    if ($this.hasClass('2')) {

      img = $('#img-src-2');
      title = $("#img-title-2");
      desc = $("#img-desc-2");
      smdesc = $("#img-smdesc-2");

    }
    if ($this.hasClass('3')) {

      img = $('#img-src-3');
      title = $("#img-title-3");
      desc = $("#img-desc-3");
      smdesc = $("#img-smdesc-3");

    }
    if ($this.hasClass('4')) {

      img = $('#img-src-4');
      title = $("#img-title-4");
      desc = $("#img-desc-4");
      smdesc = $("#img-smdesc-4");

    }

    $('#show-img').attr('src', img.attr('src'));
    $('#show-title').text(title.text());
    $('#show-desc-1').text(desc.text());
    $('#show-desc-2').text(smdesc.text());
    $('#projectModal').modal({
      backdrop: 'static',
      keyboard: false
    });

  });

  $(".carousel-inner").owlCarousel({

    navigation: false,
    slideSpeed: 300,
    paginationSpeed: 400,
    singleItem: true,
    autoPlay: 3000

  });

window.sr = ScrollReveal().reveal('.animated');
// Nav icon
  $('#nav-icon').click(function() {
    $(this).toggleClass('open');
    $("#menu-overlay").toggleClass("menu-show");
  });
  $('.anchor-scroll').click(function() {
    $('#nav-icon').removeClass('open');
    $("#menu-overlay").removeClass("menu-show");
  });

})();
