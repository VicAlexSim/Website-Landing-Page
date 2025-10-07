/*
	Modern Portfolio JavaScript
	Enhanced functionality for Victor Sim's portfolio
*/

(function($) {
    'use strict';

    var $window = $(window),
        $body = $('body'),
        $header = $('#header'),
        $menu = $('#menu'),
        $menuToggle = $('.menu-toggle'),
        $menuClose = $('.close');

    // Initialize when DOM is ready
    $(document).ready(function() {
        init();
    });

    function init() {
        // Remove preload class
        $body.removeClass('is-preload');
        
        // Initialize components
        initMobileMenu();
        initSmoothScrolling();
        initScrollEffects();
        initAnimations();
        initContactForm();
    }

    // Mobile Menu
    function initMobileMenu() {
        $menuToggle.on('click', function(e) {
            e.preventDefault();
            $menu.addClass('active');
            $body.addClass('menu-open');
        });

        $menuClose.on('click', function(e) {
            e.preventDefault();
            $menu.removeClass('active');
            $body.removeClass('menu-open');
        });

        // Close menu when clicking on links
        $menu.find('a').on('click', function() {
            $menu.removeClass('active');
            $body.removeClass('menu-open');
        });

        // Close menu when clicking outside
        $(document).on('click', function(e) {
            if ($menu.hasClass('active') && !$(e.target).closest('#menu, .menu-toggle').length) {
                $menu.removeClass('active');
                $body.removeClass('menu-open');
            }
        });

        // Close menu on escape key
        $(document).on('keydown', function(e) {
            if (e.keyCode === 27 && $menu.hasClass('active')) {
                $menu.removeClass('active');
                $body.removeClass('menu-open');
            }
        });
    }

    // Smooth Scrolling
    function initSmoothScrolling() {
        $('a[href^="#"]').on('click', function(e) {
            var target = $(this.getAttribute('href'));
            
            if (target.length) {
                e.preventDefault();
                
                $('html, body').animate({
                    scrollTop: target.offset().top - 80
                }, 800, 'easeInOutQuart');
            }
        });
    }

    // Scroll Effects
    function initScrollEffects() {
        var lastScrollTop = 0;
        var scrollThreshold = 100;

        $window.on('scroll', function() {
            var scrollTop = $(this).scrollTop();
            
            // Header background on scroll
            if (scrollTop > scrollThreshold) {
                $header.addClass('scrolled');
            } else {
                $header.removeClass('scrolled');
            }

            // Update active navigation
            updateActiveNav();

            lastScrollTop = scrollTop;
        });
    }

    // Update Active Navigation
    function updateActiveNav() {
        var scrollPos = $(document).scrollTop() + 100;
        
        $('.desktop-nav a[href^="#"]').each(function() {
            var currLink = $(this);
            var refElement = $(currLink.attr('href'));
            
            if (refElement.length && 
                refElement.offset().top <= scrollPos && 
                refElement.offset().top + refElement.height() > scrollPos) {
                
                $('.desktop-nav a').removeClass('active');
                currLink.addClass('active');
            }
        });
    }

    // Animations on Scroll
    function initAnimations() {
        // Intersection Observer for fade-in animations
        if ('IntersectionObserver' in window) {
            var observer = new IntersectionObserver(function(entries) {
                entries.forEach(function(entry) {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-in');
                    }
                });
            }, {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            });

            // Observe elements for animation
            $('.project-card, .blog-card, .experience-item, .skill-category').each(function() {
                observer.observe(this);
            });
        }
    }

    // Contact Form
    function initContactForm() {
        $('form').on('submit', function(e) {
            e.preventDefault();
            
            var form = $(this);
            var formData = new FormData(this);
            
            // Basic form validation
            var isValid = true;
            form.find('input[required], textarea[required]').each(function() {
                if (!$(this).val().trim()) {
                    $(this).addClass('error');
                    isValid = false;
                } else {
                    $(this).removeClass('error');
                }
            });

            if (isValid) {
                // Show success message (in a real implementation, you'd send the data to a server)
                showNotification('Thank you for your message! I\'ll get back to you soon.', 'success');
                form[0].reset();
            } else {
                showNotification('Please fill in all required fields.', 'error');
            }
        });

        // Remove error class on input
        $('input, textarea').on('input', function() {
            $(this).removeClass('error');
        });
    }

    // Notification System
    function showNotification(message, type) {
        var notification = $('<div class="notification ' + type + '">' + message + '</div>');
        
        $body.append(notification);
        
        setTimeout(function() {
            notification.addClass('show');
        }, 100);
        
        setTimeout(function() {
            notification.removeClass('show');
            setTimeout(function() {
                notification.remove();
            }, 300);
        }, 3000);
    }

    // Utility Functions
    function debounce(func, wait, immediate) {
        var timeout;
        return function() {
            var context = this, args = arguments;
            var later = function() {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            var callNow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callNow) func.apply(context, args);
        };
    }

    // Easing function for smooth scrolling
    $.easing.easeInOutQuart = function (x, t, b, c, d) {
        if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
        return -c/2 * ((t-=2)*t*t*t - 2) + b;
    };

    // Add CSS for animations and notifications
    $('<style>')
        .prop('type', 'text/css')
        .html(`
            .animate-in {
                opacity: 1 !important;
                transform: translateY(0) !important;
            }
            
            .notification {
                position: fixed;
                top: 20px;
                right: 20px;
                padding: 1rem 1.5rem;
                border-radius: 8px;
                color: white;
                font-weight: 500;
                z-index: 10000;
                transform: translateX(100%);
                transition: transform 0.3s ease;
            }
            
            .notification.show {
                transform: translateX(0);
            }
            
            .notification.success {
                background: #34c759;
            }
            
            .notification.error {
                background: #ff3b30;
            }
            
            .form-group input.error,
            .form-group textarea.error {
                border-color: #ff3b30;
            }
            
            .desktop-nav a.active {
                color: #007aff;
            }
            
            .desktop-nav a.active::after {
                width: 100%;
            }
            
            #header.scrolled {
                background: rgba(255, 255, 255, 0.98);
                box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
            }
            
            .menu-open {
                overflow: hidden;
            }
        `)
        .appendTo('head');

})(jQuery);