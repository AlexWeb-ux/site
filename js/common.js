$(document).ready(function () {
  var eqElement = ".element";
  $(window)
    .load(function () {
      equalheight(eqElement);
    })
    .resize(function () {
      equalheight(eqElement);
    });

//  $(".nav").navigation();
	$(".nav__item a").click(function() {
		var scroll_el = $(this).attr('href');
		if ($(scroll_el).length != 0) {
				$('html, body').animate({
						scrollTop: $(scroll_el).offset().top - 0
				}, 800);
		}
		return false;
});

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
