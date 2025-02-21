$(document).ready(function() {
    $(window).scroll(function() {
        if(this.scrollY > 20) {
            $('.navbar').addClass("sticky");
        }
        else {
            $('.navbar').removeClass("sticky");
        }
        if(this.scrollY > 500) {
            $('.scroll-up-btn').addClass('show');
        }
        else {
            $('.scroll-up-btn').removeClass('show');
        }
    });

    // scroll-up 
    $('.scroll-up-btn').click(function() {
        $('html').animate({scrollTop: 0});
    });

    // responsive navbar
    $('.menu-btn').click(function() {
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typewriter animation
    var typed = new Typed(".typing", {
        strings: ["Full-Stack Developer.", "Web Developer."],
        typeSpeed: 100,
        backSpeed: 30,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Full-Stack Developer.", "Web Developer."],
        typeSpeed: 100,
        backSpeed: 30,
        loop: true
    });

    // owl carousel
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

(function(){
    // Initialize EmailJS with your user ID
    emailjs.init("ZOJ9r7DugBTF5Qryo"); // Replace with your actual EmailJS User ID
})();
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Send email using EmailJS
    emailjs.send("service_ra9mi4e", "template_ywkccxg", {
        name: name,
        email: email,
        message: message,
    })
    .then(function(response) {
        setTimeout(function(){location.reload(true);},1000);
        alert("Message sent successfully!");
    
    }, function(error) {
        alert("Failed to send message. Please try again later.");
    });
});








