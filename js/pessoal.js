$(document).ready(function(){

	//menu inicio
	$('.inicio').click(function() {
		$('body,html').animate({scrollTop: $(".inicio").offset().top}, "slow");
	});
}
