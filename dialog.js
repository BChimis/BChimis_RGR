$(function() {
	
    $('#dialog').dialog({
		open: function() {
			$('.ui-dialog-titlebar-close').bind('click', function() {
				$('#dialog').dialog('close');
			})
		}
	});
			
});