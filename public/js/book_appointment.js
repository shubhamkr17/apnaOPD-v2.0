

// $('a[href$=form4]').click(function () {
// 	$('#form4').show();

// });

if(location.hash != 0 && location.hash == '#form1') {
	
	$("#form2, #form3, #form4, #form5, #form6").hide();
}

if(location.hash != 0 && location.hash == '#form2') {
	
	$("#form1, #form4, #form3, #form5, #form6").hide();
}

if(location.hash != 0 && location.hash == '#form3') {
	
	$("#form1, #form2, #form4, #form5, #form6").hide();
}

if(location.hash != 0 && location.hash == '#form4') {
	
	$("#form1, #form2, #form3, #form5, #form6").hide();
}

if(location.hash != 0 && location.hash == '#form5') {
	
	$("#form1, #form2, #form3, #form4, #form6").hide();
}

if(location.hash != 0 && location.hash == '#form6') {
	
	$("#form1, #form2, #form3, #form5, #form4").hide();
}
