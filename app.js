$(document).ready(function() {

    $("#div1").fadeIn(2000);
    $("#div2").fadeIn(2000);
    $("#div3").fadeIn(5000);
    $("#div4").fadeIn(6000);

});

//Smooth Scrol

$(document).ready(function() {
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });
});

$(function() {
    $(".dropdown").on("show.bs.dropdown hide.bs.dropdown", function() {
        $(this).find(".caret").toggleClass("caretup");
    });
});




$(document).ready(function() {
    $('#mainMenu').addClass('nav-special-margin');
    var scrollTop = 0;
    $(window).scroll(function() {
        scrollTop = $(window).scrollTop();
        $('.counter').html(scrollTop);

        if (scrollTop >= 300) {
            $('#global-nav').addClass('scrolled-nav');
            $('.menuP').addClass('hideMe');
            $('#mainMenu').removeClass('nav-special-margin');
            $("#brand").attr("src", "web-images/logo-small.jpg");
        } else if (scrollTop < 300) {
            $('#global-nav').removeClass('scrolled-nav');
            $('.menuP').removeClass('hideMe');
            $('#mainMenu').addClass('nav-special-margin');
            $('#brand').removeClass('halfMe');
            $("#brand").attr("src", "web-images/logo-sm.png");
        }

    });

});



// this scripts allows the parent of the dropdown to be clickable

$(function($) {
    $('.navbar .dropdown').hover(function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(250).slideDown();

    }, function() {
        $(this).find('.dropdown-menu').first().stop(true, true).delay(100).slideUp();

    });

    $('.navbar .dropdown > a').click(function() {
        location.href = this.href;
    });

});