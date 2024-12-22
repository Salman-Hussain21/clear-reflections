// preloader 

document.addEventListener("DOMContentLoaded", function () {
    // Simulate loading time (replace with actual image loading logic)
    setTimeout(function () {
        // Hide the preloader
        document.querySelector(".preloader").style.display = "none";
        // Show the content
        document.querySelector(".content").style.display = "block";
    }, 3000); // Adjust the time as needed
});


// preloader end

// latest product gallery script

$(document).ready(function(){
    $(".filter-button").click(function(){
        var value = $(this).attr('data-filter');
        if(value == "all")
        {
            $('.filter').show('1000');
        }
        else
        {
            $(".filter").not('.'+value).hide('3000');
            $('.filter').filter('.'+value).show('3000');
        }
    });

    if ($(".filter-button").removeClass("active")) {
        $(this).removeClass("active");
    }
    $(this).addClass("active");
});

// latest product gallery script end.


// reviews carousel

$(document).ready(function() {
    //carousel options
    $('#quote-carousel').carousel({
      pause: true, interval: 10000,
    });
  });

// reviews carousel end

