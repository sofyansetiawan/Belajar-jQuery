$(document).ready(function(){
	// get

	// alert("Mengambil Teks : " + $('#ambil1').text());
	// alert("Mengambil HTML : " + $('#ambil1').html());

	// var string1 = $('#ambil1').text();
	// var string2 = $('#ambil1').html();

	// alert(string1 + " "+ string2);

	$("#button1").click(function(){
		alert("Nama: " +$('#input1').val() + ", Alamat: " + $('#input2').val());
	});

	$("#button2").click(function(){
		alert("Name input1: " +$('#input1').attr('name') + ", Tipe Input2: " + $('#input2').attr('type') + ", Warna Teks Input3: " + $('#input3').attr('style'));
	});

	// set

	$("#set1").click(function(){
		$("#kal1").text("Halo Apa Kabar? Saya Baik-baik saja");
	});

	$("#set2").click(function(){
		$("#kal2").html("<b>Halo Apa Kabar?</b> <em>Saya <span style='color:green;background:yellow;'>Baik-baik saja</span></em>");
	});	

	$("#set3").click(function(){
		$('#inp1').val("Sofyan Setiawan");
		$('#inp2').val("KIRIM");
	});

	$("#set4").click(function(){
		$("li").text(function(no_urut, nama){
			no_urut++;
			return "No Urut: " + no_urut + ", Nama: "+ nama;
		});
	});

	$("#set5").click(function(){
		$(".ke_youtube").attr({
			"href": "http://youtube.com", 
			"title": "Youtube"
		});
	});

	$("#set6").click(function(){
		$(".ke_youtube").attr("href", function(i, link){
			return link + "/results?search_query=juniordev";
		});
	});
});







