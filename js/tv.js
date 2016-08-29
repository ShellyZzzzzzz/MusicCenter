$(document).ready(function($) {
	$('#inner_left_div').hide();

	//侧边栏事件
	$('#siderbar-sm').children('li').click(function(event) {
		$('#siderbar-sm').css('visibility', 'hidden');
		$('#siderbar-lg').animate({left: 0}, 500, function() {
			$('#siderbar-sm').width(135);
		});
	});

	$('#siderbar-lg').click(function(event) {
		$('#siderbar-lg').animate({left: -110}, 500, function() {
			$('#siderbar-sm').width(95);
			$('#siderbar-sm').css('visibility', 'visible');
		});
	});

	//导航栏事件
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

	//版块选择事件
	$(document).keydown(function(e) {
		e = e || window.event;
        switch (e.keyCode) {
        	case 37: {//左
        		break;
        	}
            case 38: {//上
        		break;
        	}
        	case 39: {//右
        		break;
        	}
        	case 40: {//下
        		break;
        	}
        }
	});
});