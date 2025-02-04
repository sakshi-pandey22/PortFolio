$(function() {
    let viewport = $('#container').innerWidth();
    let tb = $('#thumbs');
    let divWidth = tb.outerWidth();

    $('#container').mousemove(function(e) {
        tb.css({
            left: ((viewport - divWidth) * (e.pageX / viewport)).toFixed(1) + "px"
        });
    });

    $('.history-block').on('click', function() {
        $('.history-block').css('width', '300px');
        $('.history-block').find('.title').css('width', '260px');
        $('.history-block .timeline').hide(300);

        $(this).css('width', '600px');
        $(this).find('.title').css('width', '500px');
        $(this).find('.timeline').show(800);

        $('#container').off('mousemove').on('mousemove', function(e) {
            let newLeft = ((viewport - divWidth - 300) * (e.pageX / viewport)).toFixed(1);
            tb.css({ left: Math.max(300, newLeft) + "px" });
        });
    });

    $('.timeline ul li').on('click', function() {
        $(this).fadeOut(200).fadeIn(200);
    });
});