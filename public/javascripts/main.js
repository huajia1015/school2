$('.carousel').carousel();
if (location.hash.indexOf('#tab') != -1) {
    $('#tab a[href=' + location.hash + ']').tab('show');
}
$('.order-block').click(function (e) {
    e.preventDefault();
    $('.cover').show();
});
$('.cover-close').click(function () {
    $('.cover').hide();
});