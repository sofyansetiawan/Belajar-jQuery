$(document).ready(function(){
	$(".b1").click(function(){
		$(".d1").hide("slow", function(){
			alert("Element ini sudah tersembunyi");
		});
	});

	function tampil(){
		document.getElementById("d2").innerHTML = "Hello World, Selamat Datang di Website Saya";
		alert("Selesai");
	}

	function hitung1(panjang, lebar){
		var p = panjang;
		var l = lebar;
		var luas = p * l;
		document.getElementById("d2").innerHTML +=
		'Panjang = ' + p + '<br>' +
		'Lebar = ' + l + '<br>' +
		'Luas = ' + luas;
	}

	$(".b2").click(function(){
		$("#d2").animate({
			width: '400px',
			fontSize: '30px'
		}, "slow", function(){
			tampil();
			hitung1(20, 30);
		});
	});
});