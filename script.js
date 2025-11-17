
$(window).scroll(function() {

    if ($(window).scrollTop() > 100) {
        $('.main_h').addClass('sticky');
    } else {
        $('.main_h').removeClass('sticky');
    }
});

// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// navigation scroll lijepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});

//skill-scroll

// Function to handle the animation and stop observing
const handleIntersect = (entries, observer) => {
  entries.forEach(entry => {
    // Check if the element is intersecting
    if (entry.isIntersecting) {
      // Add the animation class
      entry.target.classList.add('is-visible');
      // Stop observing the element once it has animated
      observer.unobserve(entry.target);
    }
  });
};

// Create a single Intersection Observer instance
const observer = new IntersectionObserver(handleIntersect, {
  root: null, // Use the browser viewport
  threshold: 0.5 // Trigger when 50% of the element is visible
});

// Select all items and tell the observer to watch them
document.querySelectorAll('.span').forEach(item => {
  observer.observe(item);
});


