$(document).ready(function () {
                        "use strict";

                        // All Variable ===============================================================================
                        var footer = $('.footer-date'),
                                                customMenu = $('.controll-sub-menu');

                        // Custom Menu ================================================================================
                        customMenu.on('click', function () {
                                                $(this).find('> .fa').toggleClass('fa-chevron-right fa-chevron-down');
                                                $(this).next('.sub-menu').slideToggle().siblings('.sub-menu').slideUp();
                                                $(this).siblings('.controll-sub-menu').find('> .fa').addClass('fa-chevron-right').removeClass(' fa-chevron-down');
                                                $('html, body').animate({
                                                                        scrollTop: $($(this).data('scroll')).offset().top
                                                }, 500);
                                                if ($(this).is(':first-of-type')) {
                                                                        location.reload();
                                                }
                        });
                        // Sidebar ====================================================================================
                        $('*:not(.fa-menu, .sidebar, .sidebar *, .control .fa)').click(function () {
                                                if ($('.fa-menu').hasClass('fa-close')) {
                                                                        $('.fa-menu').click();
                                                }
                        });
                        $('.fa-menu').on('click', function () {
                                                $(this).toggleClass('fa-bars fa-close');
                                                $(this).next('.sidebar').toggleClass('right');
                        });
                        $('.fa-menu, .sidebar, .sidebar *, .control .fa').click(function (event) {
                                                event.stopPropagation();
                        });

                        // Placeholder ================================================================================
                        $('[placeholder]').focus(function () {
                                                $(this).attr('data-place', $(this).attr('placeholder'));
                                                $(this).attr('placeholder', '');
                        }).blur(function () {
                                                $(this).attr('placeholder', $(this).attr('data-place'));
                        });

                        // Append Date To Footer =====================================================================
                        footer.text(footer.text() + new Date().getFullYear());

});