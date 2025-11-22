AOS.init({
	duration: 800,
	easing: 'slide'
});

(function ($) {

	"use strict";

	$(window).stellar({
		responsive: true,
		parallaxBackgrounds: true,
		parallaxElements: true,
		horizontalScrolling: false,
		hideDistantElements: false,
		scrollProperty: 'scroll'
	});


	var fullHeight = function () {

		$('.js-fullheight').css('height', $(window).height());
		$(window).resize(function () {
			$('.js-fullheight').css('height', $(window).height());
		});

	};
	fullHeight();

	// loader
	var loader = function () {
		setTimeout(function () {
			if ($('#ftco-loader').length > 0) {
				$('#ftco-loader').removeClass('show');
			}
		}, 1);
	};
	loader();

	// Scrollax
	$.Scrollax();



	// Burger Menu
	var burgerMenu = function () {

		$('body').on('click', '.js-fh5co-nav-toggle', function (event) {

			event.preventDefault();

			if ($('#ftco-nav').is(':visible')) {
				$(this).removeClass('active');
			} else {
				$(this).addClass('active');
			}



		});

	};
	burgerMenu();


	var onePageClick = function () {


		$(document).on('click', '#ftco-nav a[href^="#"]', function (event) {
			event.preventDefault();

			var href = $.attr(this, 'href');

			$('html, body').animate({
				scrollTop: $($.attr(this, 'href')).offset().top - 70
			}, 500, function () {
				// window.location.hash = href;
			});
		});

	};

	onePageClick();


	var carousel = function () {
		$('.home-slider').owlCarousel({
			loop: true,
			autoplay: true,
			margin: 0,
			animateOut: 'fadeOut',
			animateIn: 'fadeIn',
			nav: false,
			autoplayHoverPause: false,
			items: 1,
			navText: ["<span class='ion-md-arrow-back'></span>", "<span class='ion-chevron-right'></span>"],
			responsive: {
				0: {
					items: 1
				},
				600: {
					items: 1
				},
				1000: {
					items: 1
				}
			}
		});
	};
	carousel();

	$('nav .dropdown').hover(function () {
		var $this = $(this);
		// 	 timer;
		// clearTimeout(timer);
		$this.addClass('show');
		$this.find('> a').attr('aria-expanded', true);
		// $this.find('.dropdown-menu').addClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').addClass('show');
	}, function () {
		var $this = $(this);
		// timer;
		// timer = setTimeout(function(){
		$this.removeClass('show');
		$this.find('> a').attr('aria-expanded', false);
		// $this.find('.dropdown-menu').removeClass('animated-fast fadeInUp show');
		$this.find('.dropdown-menu').removeClass('show');
		// }, 100);
	});


	$('#dropdown04').on('show.bs.dropdown', function () {
		console.log('show');
	});

	// scroll
	var scrollWindow = function () {
		$(window).scroll(function () {
			var $w = $(this),
				st = $w.scrollTop(),
				navbar = $('.ftco_navbar'),
				sd = $('.js-scroll-wrap');

			if (st > 150) {
				if (!navbar.hasClass('scrolled')) {
					navbar.addClass('scrolled');
				}
			}
			if (st < 150) {
				if (navbar.hasClass('scrolled')) {
					navbar.removeClass('scrolled sleep');
				}
			}
			if (st > 350) {
				if (!navbar.hasClass('awake')) {
					navbar.addClass('awake');
				}

				if (sd.length > 0) {
					sd.addClass('sleep');
				}
			}
			if (st < 350) {
				if (navbar.hasClass('awake')) {
					navbar.removeClass('awake');
					navbar.addClass('sleep');
				}
				if (sd.length > 0) {
					sd.removeClass('sleep');
				}
			}
		});
	};
	scrollWindow();



	var counter = function () {

		$('#section-counter, .hero-wrap, .ftco-counter, .ftco-about').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				var comma_separator_number_step = $.animateNumber.numberStepFactories.separator(',')
				$('.number').each(function () {
					var $this = $(this),
						num = $this.data('number');
					console.log(num);
					$this.animateNumber(
						{
							number: num,
							numberStep: comma_separator_number_step
						}, 7000
					);
				});

			}

		}, { offset: '95%' });

	}
	counter();


	var contentWayPoint = function () {
		var i = 0;
		$('.ftco-animate').waypoint(function (direction) {

			if (direction === 'down' && !$(this.element).hasClass('ftco-animated')) {

				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function () {

					$('body .ftco-animate.item-animate').each(function (k) {
						var el = $(this);
						setTimeout(function () {
							var effect = el.data('animate-effect');
							if (effect === 'fadeIn') {
								el.addClass('fadeIn ftco-animated');
							} else if (effect === 'fadeInLeft') {
								el.addClass('fadeInLeft ftco-animated');
							} else if (effect === 'fadeInRight') {
								el.addClass('fadeInRight ftco-animated');
							} else {
								el.addClass('fadeInUp ftco-animated');
							}
							el.removeClass('item-animate');
						}, k * 50, 'easeInOutExpo');
					});

				}, 100);

			}

		}, { offset: '95%' });
	};
	contentWayPoint();

	// magnific popup
	$('.image-popup').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		fixedContentPos: true,
		mainClass: 'mfp-no-margins mfp-with-zoom', // class to remove default margin from left and right side
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0, 1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			verticalFit: true
		},
		zoom: {
			enabled: true,
			duration: 300 // don't foget to change the duration also in CSS
		}
	});

	$('.popup-youtube, .popup-vimeo, .popup-gmaps').magnificPopup({
		disableOn: 700,
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,

		fixedContentPos: false
	});






	// Skills Chart Implementation
	$(document).ready(function () {
		var ctx = document.getElementById('skillsChart');
		if (!ctx) {
			console.error('Canvas element not found');
			return;
		}
		ctx = ctx.getContext('2d');
		var skillsChart;

		function initChart(theme) {
			var textColor = theme === 'dark' ? '#e0e0e0' : '#212529';
			var gridColor = theme === 'dark' ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)';
			var pointLabelColor = theme === 'dark' ? '#e0e0e0' : '#212529';

			var config = {
				type: 'radar',
				data: {
					labels: ['Machine Learning', 'Microsoft Azure', 'Power BI/Tableau', 'n8n', 'Python', 'SQL'],
					datasets: [{
						label: 'Skill Proficiency',
						data: [70, 80, 70, 70, 80, 70],
						backgroundColor: 'rgba(255, 189, 57, 0.2)',
						borderColor: '#ffbd39',
						pointBackgroundColor: '#ffbd39',
						pointBorderColor: '#fff',
						pointHoverBackgroundColor: '#fff',
						pointHoverBorderColor: '#ffbd39',
						pointRadius: 5,
						pointHoverRadius: 10,
						borderWidth: 2
					}]
				},
				options: {
					responsive: true,
					maintainAspectRatio: false,
					animation: {
						duration: 2000,
						easing: 'easeOutQuart'
					},
					scales: {
						r: {
							beginAtZero: true,
							max: 100,
							ticks: {
								display: false,
								stepSize: 20
							},
							grid: {
								color: gridColor,
								lineWidth: 1
							},
							pointLabels: {
								font: {
									size: 14,
									weight: 'bold'
								},
								color: pointLabelColor
							},
							angleLines: {
								color: gridColor
							}
						}
					},
					plugins: {
						legend: {
							display: false
						},
						tooltip: {
							enabled: true,
							backgroundColor: 'rgba(0,0,0,0.8)',
							titleColor: '#ffbd39',
							bodyColor: '#fff',
							titleFont: {
								size: 16
							},
							bodyFont: {
								size: 14
							},
							displayColors: false,
							callbacks: {
								label: function (context) {
									return context.label + ': ' + context.parsed.r + '%';
								}
							}
						}
					},
					interaction: {
						mode: 'nearest',
						intersect: true
					}
				}
			};

			if (skillsChart) {
				skillsChart.destroy();
			}
			skillsChart = new Chart(ctx, config);
		}

		// Initialize chart with current theme
		var currentTheme = localStorage.getItem('theme') || 'dark';
		initChart(currentTheme);

		// Update chart on theme toggle
		$('#theme-toggle').on('click', function () {
			// Small delay to allow class transition and then check new state
			setTimeout(function () {
				var newTheme = $('body').hasClass('dark-mode') ? 'dark' : 'light';
				initChart(newTheme);
			}, 100);
		});
	});

})(jQuery);

/* ==========================================================================
   Custom Features: Dark Mode
   ========================================================================== */

$(document).ready(function () {

	/* --- Dark Mode Toggle --- */
	const themeToggleBtn = document.getElementById('theme-toggle');
	if (themeToggleBtn) {
		const body = document.body;

		// Check for saved user preference
		const currentTheme = localStorage.getItem('theme');

		// Default to Dark Mode if no preference or if preference is 'dark'
		if (!currentTheme || currentTheme === 'dark') {
			body.classList.add('dark-mode');
			localStorage.setItem('theme', 'dark'); // Save default
		}

		themeToggleBtn.addEventListener('click', function () {
			body.classList.toggle('dark-mode');

			if (body.classList.contains('dark-mode')) {
				localStorage.setItem('theme', 'dark');
			} else {
				localStorage.setItem('theme', 'light');
			}
		});
	}


});


/* ==========================================================================
   Interactive Experience Section (Tabs)
   ========================================================================== */

$(document).ready(function () {
	const experienceCards = document.querySelectorAll('.experience-card');
	const timelineItems = document.querySelectorAll('.timeline-item');

	if (experienceCards.length === 0) return;

	// Add click handlers to timeline items
	timelineItems.forEach(item => {
		item.addEventListener('click', function () {
			// Remove active class from all items
			timelineItems.forEach(i => i.classList.remove('active'));
			experienceCards.forEach(c => c.classList.remove('active'));

			// Add active class to clicked item
			this.classList.add('active');

			// Show corresponding card
			const stage = this.getAttribute('data-stage');
			const targetCard = document.querySelector(`.experience-card[data-stage="${stage}"]`);
			if (targetCard) {
				targetCard.classList.add('active');
			}
		});
	});

	// Initial activation of first stage
	if (timelineItems.length > 0) {
		timelineItems[0].classList.add('active');
	}
	if (experienceCards.length > 0) {
		experienceCards[0].classList.add('active');
	}
});
