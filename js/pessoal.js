$(document).ready(function(){
	var voltaMenu = function(){
		$('.side-menu').animate({
			marginLeft: "-220px"}, "slow")
	}
	var width = $( window ).width();

	$(".btn-menu").click(function(event) {
		$('.side-menu').animate({
			marginLeft: "0px"}, "slow")
	});

$("#fechar").click(function(event) {
		$('.side-menu').animate({
			marginLeft: "-220px"}, "slow")
	});

//inicio
	$("#inicio").click(function() {
		$('body,html').animate({scrollTop: $(".sec-inicio").offset().top}, "slow", function(){
			if(width<=480){
				voltaMenu();
			}
		});
	});

//terminal
	$("#terminal").click(function() {
		$('body,html').animate({scrollTop: $(".sec-terminal").offset().top}, "slow", function(){
			if(width<=480){
				voltaMenu();
			}
		});
	});

//seguranca
	$("#seguranca").click(function() {
		$('body,html').animate({scrollTop: $(".sec-seguranca").offset().top}, "slow", function(){
			if(width<=480){
				voltaMenu();
			}
		});
	});

//torre
	$("#torre").click(function() {
		$('body,html').animate({scrollTop: $(".sec-torre").offset().top}, "slow", function(){
			if(width<=480){
				voltaMenu();
			}
		});
	});


//vip
	$("#vip").click(function() {
		$('body,html').animate({scrollTop: $(".sec-vip").offset().top}, "slow", function(){
			if(width<=480){
				voltaMenu();
			}
		});
	});

//esteiras
	$("#esteiras").click(function() {
		$('body,html').animate({scrollTop: $(".sec-esteiras").offset().top}, "slow", function(){
			if(width<=480){
				voltaMenu();
			}
		});
	});

//cco
	$("#cco").click(function() {
		$('body,html').animate({scrollTop: $(".sec-cco").offset().top}, "slow", function(){
			if(width<=480){
				voltaMenu();
			}
		});
	});

//dufry
	$("#dufry").click(function() {
		$('body,html').animate({scrollTop: $(".sec-dufry").offset().top}, "slow"), function(){
			if(width<=480){
				voltaMenu();
			}
		};
	});

//receita
	$("#receita").click(function() {
		$('body,html').animate({scrollTop: $(".sec-receita").offset().top}, "slow", function(){
			if(width<=480){
				voltaMenu();
			}
		});
	});

//vigiario
	$("#vigiario").click(function() {
		$('body,html').animate({scrollTop: $(".sec-vigiario").offset().top}, "slow"), function(){
			if(width<=480){
				voltaMenu();
			}
		};
	});

//federal
	$("#federal").click(function() {
		$('body,html').animate({scrollTop: $(".sec-federal").offset().top}, "slow", function(){
			if(width<=480){
				voltaMenu();
			}
		});
	});

});
