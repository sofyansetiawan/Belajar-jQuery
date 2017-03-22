$(document).ready(function(){
	var hash = window.location.hash;
	$(hash).slideUp(5000);
	$(hash).slideDown(5000);
	$(hash).animate({left: '400px', top: '200px;'});
});