$(document).ready(function($) {
	$('#inner_left_div').hide();

	$('#siderbar-sm').mouseenter(function(event) {
		$('#siderbar-lg').animate({left: 0}, 500, function() {
			$('#siderbar-sm').width(120);
		});
	});

	$('#siderbar-lg').mouseout(function(event) {
		$('#siderbar-lg').animate({left: -110}, 500, function() {
			$('#siderbar-sm').width(80);
		});
	});

	$('#listen').hover(function() {
		$('#content').children('div').animate({left: 158}, 500);
		$('#inner_left_div').hide();
	});
	$('#watch').hover(function() {
		$('#inner_left_div').show();
		$('#content').children('div').animate({left: -470}, 500);
	});
	$('#play').hover(function() {
		$('#inner_left_div').show();
		$('#content').children('div').animate({left: -1090}, 500);
	});
});