$(document).ready(function($) {
	$('#inner_left_div').hide();

	$('#siderbar-sm').children('li').mouseenter(function(event) {
		$('#siderbar-sm').css('visibility', 'hidden');
		$('#siderbar-lg').animate({left: 0}, 500, function() {
			$('#siderbar-sm').width(135);
		});
	});

	$('#siderbar-lg').mouseout(function(event) {
		$('#siderbar-lg').animate({left: -110}, 500, function() {
			$('#siderbar-sm').css('visibility', 'visible');
			$('#siderbar-sm').width(95);
		});
	});

	$('#listen').click(function() {
		$('#content').children('div').animate({left: 158}, 500, function() {
			$('#inner_left_div').hide(500);	
		});	
	});
	
	$('#watch').click(function() {
		$('#inner_left_div').show(50, function() {
			$('#content').children('div').animate({left: -470}, 500);
		});
	});

	$('#play').click(function() {
		$('#inner_left_div').show(50, function() {
			$('#content').children('div').animate({left: -1090}, 500);
		});;
	});
});