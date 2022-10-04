
$(document).ready(function() {
    $("nav ul li a").click(function(){
        $(".aing").slideToggle("medium");

	$('nav ul li.mati').each(function(index, el) {
		var aingID = el.id.split('_')[1];
		$('.aing#' + aingID).hide();
	});
});

$('nav').delegate('.mati', 'click', function(event) {
	var pilihIsi = this.id.split('_')[1];
	console.log(pilihIsi);
	document.location.hash = pilihIsi;

	$('.aing:visible').fadeOut('medium', function() {
		$('.aing#' + pilihIsi).fadeIn('medium');
	});

	var $this = $(this);
	$this.removeClass('mati').addClass("hidup");
    $this.siblings().addClass('mati').removeClass('hidup');

    });
});