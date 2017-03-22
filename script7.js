$(document).ready(function(){
	$("#mulai").click(function(){
		$("#efek1").slideUp(5000);
		$("#efek2").slideUp(5000);
		$("#efek2").slideDown(5000);
		$("#efek3").animate({left:'400px'}, 5000);
		$("#efek3").animate({fontSize:'40px'}, 5000);
		$("#efek3").animate({borderWidth:'10px'}, 5000);
		$("#efek3").hide(5000);
		$("#efek3").show(5000);
	});

	$("#henti1").click(function(){
		$("#efek1").stop();
		$("#efek2").stop();
		$("#efek3").stop();
	});

	$("#henti2").click(function(){
		$("#efek1").stop(true);
		$("#efek2").stop(true);
		$("#efek3").stop(true);
	});

	$("#henti3").click(function(){
		$("#efek1").stop(false, true);
		$("#efek2").stop(false, true);
		$("#efek3").stop(false, true);
	});
});