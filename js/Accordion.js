$(document).ready(function () {

    var lastIcon;

    // FAQ ACCORDION

    $('.accordion > .accordion-item .accordion-button').click(function () {

        if ($(this).parents('.accordion-item').hasClass('active')) {
            $(this).parents('.accordion-item').removeClass('active');
            $(this).find('.fa').toggleClass('fa-angle-down fa-angle-up');
            lastIcon = null;
            return true;
        }

        $('.accordion > .accordion-item').removeClass('active');
        $(this).parents('.accordion-item').addClass('active');
        $(this).find('.fa').add(lastIcon).toggleClass('fa-angle-down fa-angle-up');
        lastIcon = $(this).find('.fa');
    });




});

