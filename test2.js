$(document).ready(function(){

	var total_member = 1;

	function tambahMember(){
		var n = total_member + 1;

		var isi = '<div class="member" id="tambahmember'+total_member+'" style="display:none">';

		isi += '<hr>';

		isi += '<div class="input"><input type="text" name="nama'+n+'" required placeholder="Nama Lengkap ke-'+n+'"></div><div class="input"><input type="text" name="alamat'+n+'" required placeholder="Alamat ke-'+n+'"></div><div class="input"><input type="email" name="email'+n+'" required placeholder="Email ke-'+n+'"></div><div class="input"><input type="text" name="no_hp'+n+'" required placeholder="Nomor Handphone ke-'+n+'"></div>';

		isi += '</div>';

		$('a.tambahmember').before(isi);
		$('#tambahmember'+total_member).slideDown('medium');

		total_member++;
	}

	function hapusMember(){
		total_member--;
		if(total_member<=1){
			total_member = 1;
		}
		$('#tambahmember'+total_member).slideUp('medium', function(){
			$(this).remove();
		});
	}

	$('a.tambahmember').click(function(){
		tambahMember();
	});

	$('a.hapusmember').click(function(){
		hapusMember();
	});

});