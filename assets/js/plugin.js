jQuery('#ribbon a').on ('click', function (e) {
	e.preventDefault();	
	var id = jQuery(this).attr('class');
	jQuery('.bec_container').slideUp();
	jQuery('#'+id).slideToggle();
})
jQuery('.mobile-menu').on('click', function () {
	jQuery('#ribbon').slideToggle();
})