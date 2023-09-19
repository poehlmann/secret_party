// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
// starting from v2 you can add only the features you need reducing the bundle size
window.addEventListener('DOMContentLoaded', (event) => {
    particlesJS("particles-js",
        {
            "autoPlay": true,
            "delay": 0,
            "detectRetina": true,
            "fpsLimit": 120,
            "particles": {
                "bounce": {
                    "horizontal": {
                        "random": {
                            "enable": true,
                            "minimumValue": 0.1
                        },
                        "value": {
                            "min": 0.1,
                            "max": 1
                        }
                    },
                    "vertical": {
                        "random": {
                            "enable": false,
                            "minimumValue": 0.1
                        },
                        "value": 1
                    }
                },
                "collisions": {
                    "absorb": {
                        "speed": 2
                    },
                    "bounce": {
                        "horizontal": {
                            "random": {
                                "enable": false,
                                "minimumValue": 0.1
                            },
                            "value": 1
                        },
                        "vertical": {
                            "random": {
                                "enable": false,
                                "minimumValue": 0.1
                            },
                            "value": 1
                        }
                    },
                    "enable": false,
                    "maxSpeed": 30,
                    "mode": "bounce",
                    "overlap": {
                        "enable": true,
                        "retries": 0
                    }
                },
                "color": {
                    "value": [
                        'rgba(212,255,0,0.69)', 'rgba(166,196,32,0.49)', 'rgba(128,141,76,0.35)'
                    ],
                    "animation": {
                        "h": {
                            "count": 0,
                            "enable": false,
                            "offset": 0,
                            "speed": 20,
                            "delay": 0,
                            "decay": 0,
                            "sync": true
                        },
                        "s": {
                            "count": 0,
                            "enable": false,
                            "offset": 0,
                            "speed": 1,
                            "delay": 0,
                            "decay": 0,
                            "sync": true
                        },
                        "l": {
                            "count": 0,
                            "enable": false,
                            "offset": 0,
                            "speed": 1,
                            "delay": 0,
                            "decay": 0,
                            "sync": true
                        }
                    }
                },
                "groups": {},
                "move": {
                    "angle": {
                        "offset": 0,
                        "value": 90
                    },
                    "attract": {
                        "distance": 200,
                        "enable": false,
                        "rotate": {
                            "x": 3000,
                            "y": 3000
                        }
                    },
                    "center": {
                        "x": 50,
                        "y": 50,
                        "mode": "percent",
                        "radius": 0
                    },
                    "decay": 0,
                    "distance": {},
                    "direction": "none",
                    "drift": 0,
                    "enable": true,
                    "gravity": {
                        "acceleration": 9.81,
                        "enable": false,
                        "inverse": false,
                        "maxSpeed": 50
                    },
                    "path": {
                        "clamp": true,
                        "delay": {
                            "random": {
                                "enable": false,
                                "minimumValue": 0
                            },
                            "value": 0
                        },
                        "enable": false,
                        "options": {}
                    },
                    "outModes": {
                        "default": "out",
                        "bottom": "out",
                        "left": "out",
                        "right": "out",
                        "top": "out"
                    },
                    "random": false,
                    "size": false,
                    "speed": 3,
                    "spin": {
                        "acceleration": 0,
                        "enable": false
                    },
                    "straight": false,
                    "trail": {
                        "enable": false,
                        "length": 10,
                        "fill": {}
                    },
                    "vibrate": false,
                    "warp": false
                },
                "number": {
                    "density": {
                        "enable": true,
                        "width": 1920,
                        "height": 1080
                    },
                    "limit": 0,
                    "value": 30
                },
                "opacity": {
                    "random": {
                        "enable": false,
                        "minimumValue": 1
                    },
                    "value": {
                        "min": 0.1,
                        "max": 0.5
                    },
                    "animation": {
                        "count": 0,
                        "enable": false,
                        "speed": 1,
                        "decay": 0,
                        "delay": 0,
                        "sync": false,
                        "mode": "auto",
                        "startValue": "random",
                        "destroy": "none"
                    }
                },
                "reduceDuplicates": false,
                "shadow": {
                    "blur": 0,
                    "color": {
                        "value": "#000"
                    },
                    "enable": true,
                    "offset": {
                        "x": 0,
                        "y": 0
                    }
                },
                "shape": {
                    "close": true,
                    "fill": true,
                    "options": {},
                    "type": "circle"
                },
                "size": {
                    "random": {
                        "enable": false,
                        "minimumValue": 50
                    },
                    "value": {
                        "min": 5,
                        "max": 30
                    },
                    "animation": {
                        "count": 0,
                        "enable": true,
                        "speed": 1,
                        "decay": 0,
                        "delay": 0,
                        "sync": false,
                        "mode": "auto",
                        "startValue": "random",
                        "destroy": "none"
                    }
                },
                "zIndex": {
                    "random": {
                        "enable": false,
                        "minimumValue": 0
                    },
                    "value": 0,
                    "opacityRate": 1,
                    "sizeRate": 1,
                    "velocityRate": 1
                },
            },
            "responsive": [],
            "smooth": false,
        });
});
(function($) {
    // 'use strict';

    function PlayMusic() {

        var play=document.getElementById("music");
        play.play();
    }

    $(document).ready(function(){
        setTimeout(PlayMusic,1000);
    })

    // window.onload = function() {
    //     Particles.init({
    //         selector: '.background',
    //         sizeVariations: 30,
    //         color: [
    //             'rgba(212,255,0,0.69)', 'rgba(166,196,32,0.49)', 'rgba(128,141,76,0.35)'
    //         ]
    //     });
    // };

    $(document).on('click', '#tragos', function(e) {
        swal({
            title: 'Carta de Tragos!',
            imageUrl: '/secret_party//images/la_carta.jpg',
            imageWidth: '100%',
            imageHeight: 'auto',
            imageAlt: 'Carta de tragos - private party',
            animation: true
        })
    });
    // Main Navigation
    $( '.hamburger-menu' ).on( 'click', function() {
        $(this).toggleClass('open');
        $('.site-navigation').toggleClass('show');
    });

    var countdown_date = $('.countdown').data("date");

    $('.countdown').countdown(countdown_date, function(event) {
        $('.dday').html(event.strftime('%-D'));
        $('.dhour').html(event.strftime('%-H'));
        $('.dmin').html(event.strftime('%-M'));
        $('.dsec').html(event.strftime('%-S'));
    });

    // Events Slider
    var next_event_slider = new Swiper('.next-event-slider', {
        slidesPerView: 4,
        spaceBetween: 20,
        loop: true,
        centeredSlides: true,
        breakpoints: {
            // when window width is <= 320px
            576: {
                slidesPerView: 1
            },
            // when window width is <= 480px
            768: {
                slidesPerView: 2
            },
            // when window width is <= 640px
            1200: {
                slidesPerView: 3
            }
        },
        navigation: {
            nextEl: '.next-event-slider-wrap .swiper-button-next'
        }
    });

    // Testimonial slider
    var testimonialsSlider = new Swiper('.testimonials-slider', {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.testimonials-container .swiper-button-next'
        }
    });

    // Buy Tickets Form
    $(".increase-ticket").click(function() {
        var $n = $(this)
            .parent(".number-of-tickets")
            .parent(".flex")
            .parent(".ticket-row")
            .find(".ticket-count");
        $n.val(Number($n.val())+1 );
    });

    $(".decrease-ticket").click(function() {
        var $n = $(this)
            .parent(".number-of-tickets")
            .parent(".flex")
            .parent(".ticket-row")
            .find(".ticket-count");
        var amount = Number($n.val());
        if (amount > 0) {
            $n.val(amount-1);
        }
    });

    $(".clear-ticket-count").on( 'click', function() {
        var $count = $('.ticket-count');
        $count.val('1');
    });

    // Tabs
    $(function() {
        $('.tab-content:first-child').show();

        $('.tab-nav').bind('click', function(e) {
            $this = $(this);
            $tabs = $this.parent().parent().next();
            $target = $($this.data("target"));
            $this.siblings().removeClass('active');
            $target.siblings().css("display", "none");
            $this.addClass('active');
            $target.fadeIn("slow");
        });

        $('.tab-nav:first-child').trigger('click');
    });

    // Accordion & Toggle
    $('.accordion-wrap.type-accordion').collapsible({
        accordion: true,
        contentOpen: 0,
        arrowRclass: 'arrow-r',
        arrowDclass: 'arrow-d'
    });

    $('.accordion-wrap .entry-title').on('click', function() {
        $('.accordion-wrap .entry-title').removeClass('active');
        $(this).addClass('active');
    });

    // Circular Progress Bar
    $('#hard_work').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.75,
        size: 220,
        thickness: 3,
        fill: {
            gradient: ["#00d1ff", "#1effc5"]
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(75 * progress) + '<span>%</span>');
    });

    $('#good_music').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.83,
        size: 220,
        thickness: 3,
        fill: {
            gradient: ["#00d1ff", "#1effc5"]
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(83 * progress) + '<span>%</span>');
    });

    $('#power').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 0.65,
        size: 220,
        thickness: 3,
        fill: {
            gradient: ["#00d1ff", "#1effc5"]
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(65 * progress) + '<span>%</span>');
    });

    $('#fun_time').circleProgress({
        startAngle: -Math.PI / 4 * 2,
        value: 1,
        size: 220,
        thickness: 3,
        fill: {
            gradient: ["#00d1ff", "#1effc5"]
        }
    }).on('circle-animation-progress', function(event, progress) {
        $(this).find('strong').html(Math.round(100 * progress) + '<span>%</span>');
    });

    // Counter
    $(".start-counter").each(function () {
        var counter = $(this);

        counter.countTo({
            formatter: function (value, options) {
                return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
            }
        });
    });

    // Load more events
    var $container      = $('.blog-list-page');
    var $item           = $('.single-blog-content');

    $item.slice(0, 6).addClass('visible');

    $('.load-more .btn').on('click', function (e) {
        e.preventDefault();

        $('.single-blog-content:hidden').slice(0, 6).addClass('visible');
        $container.masonry();
    });

    // Back to Top
    if ( $( '.back-to-top' ).length) {
        var scrollTrigger = 500, // px
            backToTop = function () {
                var scrollTop = $(window).scrollTop();
                if (scrollTop > scrollTrigger) {
                    $('.back-to-top').addClass('show');
                } else {
                    $('.back-to-top').removeClass('show');
                }
            };
        backToTop();
        $(window).on('scroll', function () {
            backToTop();
        });
        $('.back-to-top').on('click', function (e) {
            e.preventDefault();
            $('html,body').animate({
                scrollTop: 0
            }, 800);
        });
    }

})(jQuery);
