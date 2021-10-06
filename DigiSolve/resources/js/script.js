$(document).ready(function() {
    $(".about__section").waypoint(function(direction) {
        if(direction=="down") {
            $("nav").addClass('sticky__nav');
        }
        if (direction == "up") {
            $("nav").removeClass('sticky__nav');
        }
    }, {
        offset:'10%'
    }); 
});

$(document).ready(function(){
    $(".js--scroll__to__contact").click(function() {
        $('html, body').animate({scrollTop:$('.js--contact__section').offset().top}, 1000);
    });


    $(".about__section").waypoint(function() {
        $(".js--about__box").addClass('animate__animated animate__fadeIn')
    }, {
        offset:'80%'
    });

    $(".our__services__section").waypoint(function() {
        $(".js--service__box").addClass('animate__animated  animate__zoomIn');
    }, {
        offset:'60%'
    });

    $(".packages__content").waypoint(function() {
        $(".js--enterprise").addClass('animate__animated  animate__pulse');
    }, {
        offset:'80%'
    });

    $('a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .click(function(event) {
    // On-page links
    if (
      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
      && 
      location.hostname == this.hostname
    ) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      // Does a scroll target exist?
      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function() {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();
          if ($target.is(":focus")) { // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
            $target.focus(); // Set focus again
          };
        });
      }
    }
  });

});



// else {
    //     $("nav").removeClass('sticky__nav');
    // }

// $(document).ready(function() {
//     $(".about__section").waypoint(function(direction) {
//         $("nav").addClass("sticky__nav");
//     })  

//     // $("h1").click(function()  {
//     //     $(this).css("color", "red");
//     // });
// }); 