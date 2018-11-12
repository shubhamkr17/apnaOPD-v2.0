$( "#Form1" ).submit(function( event ) {
	  
	  console.log( 'form1 data', $( this ).serializeArray() );
	  event.preventDefault();
	});

$( "#Form2" ).submit(function( event ) {
	
	console.log( 'form2 data', $( this ).serializeArray() );
	event.preventDefault();
	});

	$( "#Form3" ).submit(function( event ) {
	
	console.log( 'form3 data', $( this ).serializeArray() );
	event.preventDefault();
	});

	$( "#Form4" ).submit(function( event ) {
	
	console.log( 'form4 data', $( this ).serializeArray() );
	event.preventDefault();
	});

	$( "#Form5" ).submit(function( event ) {
	
	console.log( 'form5 data', $( this ).serializeArray() );
	event.preventDefault();
	});

	$( "#Form6" ).submit(function( event ) {
	
	console.log( 'form6 data', $( this ).serializeArray() );
	event.preventDefault();
	});