/* ==========================================================================
   Hero Section Interactive Features (Fixed)
   ========================================================================== */

$(document).ready(function () {

    // 1. Create Animated Background Particles
    function createParticles() {
        const heroSection = $('#home-section');

        if ($('.particles-container').length === 0) {
            const particlesContainer = $('<div class="particles-container"></div>');

            for (let i = 0; i < 10; i++) {
                const particle = $('<div class="particle"></div>');
                particlesContainer.append(particle);
            }

            heroSection.prepend(particlesContainer);
        }
    }

    // Mouse move effect for particles
    $('#home-section').on('mousemove', function (e) {
        const particles = $('.particle');
        const mouseX = e.pageX;
        const mouseY = e.pageY;

        particles.each(function () {
            const particle = $(this);
            const rect = this.getBoundingClientRect();
            const particleX = rect.left + rect.width / 2;
            const particleY = rect.top + rect.height / 2;

            const deltaX = mouseX - particleX;
            const deltaY = mouseY - particleY;
            const distance = Math.sqrt(deltaX * deltaX + deltaY * deltaY);

            if (distance < 200) {
                const angle = Math.atan2(deltaY, deltaX);
                const force = (200 - distance) / 10;
                const moveX = Math.cos(angle) * force;
                const moveY = Math.sin(angle) * force;

                particle.css({
                    'transform': 'translate(' + (-moveX) + 'px, ' + (-moveY) + 'px)'
                });
            }
        });
    });

    // 7. Create Scroll Indicator
    function createScrollIndicator() {
        const heroSection = $('#home-section');

        if ($('.scroll-indicator').length === 0) {
            const scrollIndicator = $('<div class="scroll-indicator">' +
                '<div class="scroll-mouse">' +
                '<div class="scroll-wheel"></div>' +
                '</div>' +
                '<div class="scroll-text">Scroll</div>' +
                '</div>');

            heroSection.append(scrollIndicator);

            scrollIndicator.on('click', function () {
                $('html, body').animate({
                    scrollTop: $(window).height()
                }, 1000);
            });
        }
    }

    // Hide scroll indicator when scrolling
    $(window).on('scroll', function () {
        const scrollTop = $(window).scrollTop();
        const scrollIndicator = $('.scroll-indicator');

        if (scrollTop > 100) {
            scrollIndicator.fadeOut(300);
        } else {
            scrollIndicator.fadeIn(300);
        }
    });

    // Initialize features
    createParticles();
    createScrollIndicator();

    console.log('✨ Hero Section Enhanced!');
});
