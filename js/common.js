$(document).ready(function () {

function SmoothMenuScroll() {
        var anchor = $('.scrollToLink');
        if (anchor.length) {
            anchor.children('a').bind('click', function(event) {
                if ($(window).scrollTop() > 10) {
                    var headerH = '80';
                } else {
                    var headerH = '120';
                }
                var target = $(this);
                $('html, body').stop().animate({
                    scrollTop: $(target.attr('href')).offset().top - headerH + 'px'
                }, 1200, 'easeInOutExpo');
                anchor.removeClass('current');
                target.parent().addClass('current');
                event.preventDefault();
            });
        }
    }
    SmoothMenuScroll();

    function OnePageMenuScroll() {
        var windscroll = $(window).scrollTop();
        if (windscroll >= 100) {
            var menuAnchor = $('.one-page-scroll-menu .scrollToLink').children('a');
            menuAnchor.each(function() {
                // grabing section id dynamically
                var sections = $(this).attr('href');
                $(sections).each(function() {
                    // checking is scroll bar are in section
                    if ($(this).offset().top <= windscroll + 100) {
                        // grabing the dynamic id of section
                        var Sectionid = $(sections).attr('id');
                        // removing current class from others
                        $('.one-page-scroll-menu').find('li').removeClass('current');
                        // adding current class to related navigation
                        $('.one-page-scroll-menu').find('a[href*=\\#' + Sectionid + ']').parent().addClass('current');
                    }
                });
            });
        } else {
            $('.one-page-scroll-menu li.current').removeClass('current');
            $('.one-page-scroll-menu li:first').addClass('current');
        }
    }	
	
  $("section").waypoint(
    function (direction) {
      if (direction === "down") {
        $(".class").addClass("active");
      } else if (direction === "up") {
        $(".class").removeClass("deactive");
      }
    },
    { offset: 100 }
  );

  $("#top").click(function () {
    $("body, html").animate(
      {
        scrollTop: 0,
      },
      800
    );
    return false;
  });

  $(".nav__icon").click(function () {
    $(this).addClass("hidden");
    $("header.header").addClass("visible");
  });
  $(".nav__item a").click(function () {
    $("header.header").removeClass("visible");
    $(".nav__icon").removeClass("hidden");
  });
});
