$(document).ready(function(){
	$('#chat').hide();
		$('#help').on('click', function(){	
		$('#chat').show(3000);	
	});
	$('#cerrar').on('click',function(){
		$('#chat').hide(3000);
	});
});


