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
