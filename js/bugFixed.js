$(document).ready(function () {
    $(window).scroll(function () {
        $(document).scrollTop() > 200 ? $('.backtotop').addClass('ml_sidebar_show1') : $('.backtotop').removeClass('ml_sidebar_show1');
    });
}),
    $('.zk_mb').click(function (a) {
        a.preventDefault(), $('.pronav_ul').slideToggle();
    }),
    $('.pchead').removeAttr('data-aos'),
    $('.pchead').removeAttr('data-aos-delay'),
    $('.pcheader').removeAttr('data-aos'),
    $('.pcheader').removeAttr('data-aos-delay'),
    $('.pclogo').removeAttr('data-aos'),
    $('.pclogo').removeAttr('data-aos-delay'),
    $('.pcnav li').removeAttr('data-aos'),
    $('.pcnav li').removeAttr('data-aos-delay'),
    $('.ml_mb_head').removeAttr('data-aos'),
    $('.ml_mb_head').removeAttr('data-aos-delay');
var bread_width = $('.inside').width();

function getpost(a, t) {
    return (
        $.ajax({
            url: a,
            type: 'POST',
            data: t,
            datatype: 'json',
            async: !1,
            success: function (a) {},
            error: function () {}
        }),
        ''
    );
}
console.log(bread_width);
$('.ml_bread_inner').css('max-width', bread_width),
    $(document).ready(function () {
        var a = window.location.host;
        'tengyun.template.tyjz.com' == a &&
            ($('img').each(function () {
                var a = $(this).attr('src');
                if (void 0 !== a) {
                    var t = a;
                    a.indexOf('/../../upload/') >= 0 && (a = a.replace('/../../upload/', 'upload/')),
                        a.indexOf('/upload/') >= 0 && (a = a.replace('/upload/', 'upload/')),
                        t != a && $(this).attr('src', a);
                }
            }),
            $('a').each(function () {
                var a = $(this).attr('href');
                if (void 0 !== a) {
                    var t = a;
                    a.indexOf('/../../upload/') >= 0 && (a = a.replace('/../../upload/', 'upload/')),
                        a.indexOf('/upload/') >= 0 && (a = a.replace('/upload/', 'upload/')),
                        t != a && $(this).attr('href', a);
                }
                ('/' != a && '/' != a) || $(this).attr('href', 'default.aspx');
            }),
            $('.ueditor_baidumap').attr(
                'src',
                'qz_ueditor/dialogs/map/show.html#center=116.404,39.915&zoom=10&width=530&height=340&markers=116.404,39.915&markerStyles=l,A'
            ));
            // getpost('http://new.400301.com/api/Query/add.aspx', {
            //     domain: a
            // });
    });

