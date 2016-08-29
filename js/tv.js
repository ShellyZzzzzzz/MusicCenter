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
	var curSection = 2;
	var curElement = $('.combination').eq(2);
	var sctNum = $('header').find('li').length;
	var cbtNum = $('.combination').length;
	$(document).keydown(function(e) {
		e = e || window.event;
		e.preventDefault();
        switch (e.keyCode) {
        	case 37: {//左
        		break;
        	}
            case 38: {//上
        		break;
        	}
        	case 39: {//右
        		if(curSection == 0) {

        		} else if(curSection == 1){
        			
        		} else {
        			curElement.css('border', 'none');
        			if(curElement.attr('class').indexOf('left') == -1) {
        				var p = curElement.parent()
        				var tc = p.children().index(curElement);
        				var tn = p.next().children();
        				if(tn.length >= 1) {
        					curElement = (tc > 0 && tn.length > 1) ? tn.eq(1) : tn.eq(0);
        				}
        			} else {
        				var tn = curElement.next();
        				if(tn.length != 0) {
        					curElement = curElement.next();	
        				}
        			}
        			if(curElement.length != 0) {
        				selectCbt(curElement);
        			}
        		}
        		break;
        	}
        	case 40: {//下
        		break;
        	}
        }
	});
});

function selectCbt(curElement) {
	curElement.css('border', '2px solid red');
	var l = - (curElement[0].offsetLeft - $('#siderbar-sm').width() - curElement.width()) ;
	$('#content').children('div').animate({left: l}, 500);
}