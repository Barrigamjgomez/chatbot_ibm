$(document).ready(function(){
	$('#chat').hide();
		$('#help').on('click', function(){	
		$('#chat').show();	
	});
	$('#cerrar').on('click',function(){
		$('#chat').hide();
	});
});


