function form1submit(){
	var formData = new FormData(document.querySelector('form'));
	console.log('form 1',formData);
}




// $( "form" ).submit(function( event ) {
// 	  event.preventDefault();
// 	  console.log( 'form1 data', $( this ).serialize() );
	  
// 	});