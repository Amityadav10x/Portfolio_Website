/* ==========================================================================
   Premium Project Cards Interactive Features
   ========================================================================== */

$(document).ready(function () {

    // Add action buttons and Read More to each project card
    $('.blog-entry').each(function () {
        const $card = $(this);
        const projectLink = $card.find('.block-20').attr('href');

        // Create action buttons container
        const $actionsDiv = $('<div class="project-actions"></div>');

        // Create View Project button
        const $viewBtn = $('<a href="' + projectLink + '" target="_blank" class="project-action-btn">' +
            '<i class="icon-eye"></i> View Project</a>');

        // Append buttons to actions container
        $actionsDiv.append($viewBtn);

        // Append actions to the image container
        $card.find('.block-20').append($actionsDiv);

        // Add Read More button for project descriptions
        const $description = $card.find('.text p').first();
        if ($description.length && $description[0].scrollHeight > 85) {
            const $readMoreBtn = $('<button class="read-more-btn">Read More</button>');
            $description.after($readMoreBtn);

            $readMoreBtn.on('click', function (e) {
                e.preventDefault();
                e.stopPropagation();

                $description.toggleClass('expanded');
                $(this).toggleClass('expanded');

                if ($(this).hasClass('expanded')) {
                    $(this).text('Read Less');
                } else {
                    $(this).text('Read More');
                }
            });
        }
    });

    // 3D Tilt Effect on Mouse Move
    $('.blog-entry').on('mousemove', function (e) {
        const $card = $(this);
        const cardRect = this.getBoundingClientRect();
        const cardCenterX = cardRect.left + cardRect.width / 2;
        const cardCenterY = cardRect.top + cardRect.height / 2;

        const mouseX = e.clientX - cardCenterX;
        const mouseY = e.clientY - cardCenterY;

        const rotateX = (mouseY / cardRect.height) * 10;
        const rotateY = (mouseX / cardRect.width) * -10;

        $card.css({
            'transform': `translateY(-15px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`
        });
    });

    // Reset transform on mouse leave
    $('.blog-entry').on('mouseleave', function () {
        $(this).css({
            'transform': ''
        });
    });

    // Scroll Reveal Animation
    function revealOnScroll() {
        const cards = document.querySelectorAll('.blog-entry');

        cards.forEach(card => {
            const cardTop = card.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;

            if (cardTop < windowHeight * 0.85) {
                card.classList.add('reveal-active');
            }
        });
    }

    // Initial check
    revealOnScroll();

    // Check on scroll
    $(window).on('scroll', revealOnScroll);

    // Add ripple effect on click
    $('.blog-entry').on('click', function (e) {
        // Don't add ripple if clicking on Read More button
        if ($(e.target).hasClass('read-more-btn')) {
            return;
        }

        const $ripple = $('<span class="ripple"></span>');
        const $card = $(this);

        const x = e.pageX - $card.offset().left;
        const y = e.pageY - $card.offset().top;

        $ripple.css({
            left: x + 'px',
            top: y + 'px'
        });

        $card.append($ripple);

        setTimeout(() => {
            $ripple.remove();
        }, 600);
    });

    // Parallax effect for project images
    $(window).on('scroll', function () {
        $('.blog-entry .block-20').each(function () {
            const scrolled = $(window).scrollTop();
            const cardOffset = $(this).offset().top;
            const windowHeight = $(window).height();

            if (scrolled + windowHeight > cardOffset) {
                const yPos = -(scrolled - cardOffset) * 0.1;
                $(this).css('background-position', `center ${yPos}px`);
            }
        });
    });

    // Add loading animation
    $('.blog-entry').each(function (index) {
        $(this).css({
            'animation-delay': (index * 0.1) + 's'
        });
    });

    // Smooth hover transition for tools badges
    $('.blog-entry .text ul li').hover(
        function () {
            $(this).css({
                'transform': 'translateY(-3px) scale(1.05)',
                'box-shadow': '0 6px 15px rgba(255, 189, 57, 0.4)'
            });
        },
        function () {
            $(this).css({
                'transform': '',
                'box-shadow': ''
            });
        }
    );

    console.log('✨ Premium Project Cards Enhanced with Read More!');
});
