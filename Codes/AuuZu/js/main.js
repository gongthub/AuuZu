/**
 * Created by Administrator on 2017/1/5.
 */
// wow.js
new WOW().init();
$(function() {
	
//轮播 js
	$('#div-index-img-carousel').carousel({
		interval: false
	})
	 $(".auuzu-index-service-cont img").each(function(k,img){
			new JumpObj(img,10);
	})
})
//resize
$(window).resize(function() {
	
});