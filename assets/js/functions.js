(function($){
	$('.nav-toggle').on('click', function(e){
		e.preventDefault();
		$(this).parent().toggleClass('open');
	});
})(jQuery);
