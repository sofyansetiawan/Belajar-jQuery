$(document).ready(function(){
	$("#mulai1").click(function(){
		$("#efek1").slideUp();
		$("#efek1").slideDown();
		$("#efek1").animate({left:'300px', fontSize:'40px'});
		$("#efek1").animate({left:'20px', fontSize:'20px'});
		$("#efek1").hide("slow");
		$("#efek1").show("slow");
	});

	$("#mulai2").click(function(){
		$("#efek2").slideUp().slideDown().animate({left:'300px', fontSize:'40px'}).animate({left:'20px', fontSize:'20px'}).hide("slow").show("slow");
	});
});