$(document).ready(function() {
    // Change the active indicator on click
    $('.carousel-indicators-custom .indicator').on('click', function() {
        var index = $(this).index();
        $('.carousel-indicators-custom .indicator').removeClass('active');
        $(this).addClass('active');
        $('#carousel').carousel(index);
    });

    // Change the active indicator on slide change
    $('#carousel').on('slide.bs.carousel', function (e) {
        var index = $(e.relatedTarget).index();
        $('.carousel-indicators-custom .indicator').removeClass('active');
        $('.carousel-indicators-custom .indicator').eq(index).addClass('active');
    });

    // Change the active indicator on hover
    $('.hover-card').hover(function() {
        var index = $(this).closest('.col-md-4').index();
        $('.carousel-indicators-custom .indicator').removeClass('active');
        $('.carousel-indicators-custom .indicator').eq(index).addClass('active');
    });
});

$(document).ready(function() {
    $('.project-card').on('click', function() {
        $('.project-card').removeClass('active');

        $(this).addClass('active');

        var imageUrl = $(this).data('image');

        // Change the src attribute of the project image
        $('#project-image').attr('src', imageUrl);
    });
});

