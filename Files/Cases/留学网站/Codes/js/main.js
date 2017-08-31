/**
 * Created by Administrator on 2017/1/5.
 */
// wow.js
new WOW().init();
// $(function () {})
$(function () {
    wbannertop();
})
//resize
$(window).resize(function () {
    wbannertop();
})
// index js
//nav js
$('.navbar-nav>li>a').click(function () {
    $('.navbar-nav>li').removeClass('active');
    $(this).parent('li').addClass('active');
})
//轮播 js
$('.carousel').carousel({
    interval: 2000
})
// 固定导航后的banner距离
function wbannertop() {
    var wnavhigh = $('.w-navwrap').height();
    $('.w-indexbanner').css('margin-top',wnavhigh);
}

