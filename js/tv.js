$(document).ready(function($) {
	$('#inner_left_div').hide();

	//侧边栏事件
	$('#siderbar-sm').click(function(event) {
		siderbarShow();
	});

	$('#siderbar-lg').click(function(event) {
		siderbarHide();
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
        		if(curSection == 0) {
					
        		} else if(curSection == 2) {
        			curElement.css('border', 'none');

        			if($('.combination').index(curElement) == 0) {
        				curSection = 1
        				$('#siderbar-sm').click();
        				$('#inner_left_div').hide();
        				curElement = $('#siderbar-lg').children('li').eq(0);
        				curElement.css('border', '1px solid red');	
        			} else {
	        			if(curElement.attr('class').indexOf('right') == -1) {
	        				var p = curElement.parent();
	        				var tc = p.children().index(curElement);
	        				var tp = p.prev().children();
	        				if(tp.length >= 1) {
	        					curElement = (tc > 0 && tp.length > 1) ? tp.eq(tp.length - 1) : tp.eq(0);
	        				}
	        			} else {
	        				var tp = curElement.prev();
	        				if(tp.length != 0) {
	        					curElement = curElement.prev();	
	        				}
	        			}
	        			if(curElement.length != 0) {
	        				selectCbt(curElement);
	        			}
        			}
        		}
        		break;
        	}
            case 38: {//上
            	curElement.css('border', 'none');
            	if(curSection == 1) {

            	} else if(curSection == 2) {
            		var t = curElement.parent().children();
        			if(t.index(curElement) >= 1) {
        				curElement = t.eq(0);
        				selectCbt(curElement);
        			} else {
        				curSection = 0;
        				
        			}
            	}
        		break;
        	}
        	case 39: {//右
        		curElement.css('border', 'none');

        		if(curSection == 0) {

        		} else if(curSection == 1){
        			curSection = 2;
        			siderbarHide();
        			curElement = $('.combination').eq(0);
        			curElement.css('border', '1px solid red');
        		} else {
        			$('#inner_left_div').show();

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
        		curElement.css('border', 'none');

        		if(curSection == 0) {

        		} else if(curSection == 1) {

        		} else {
        			var t = curElement.parent().children();
        			if(t.index(curElement) == 0) {
        				curElement = curElement.next();
        				selectCbt(curElement);
        			}
        		}
        		break;
        	}
        }
	});
});

function selectCbt(curElement) {
	curElement.css('border', '1px solid red');
	var l = - (curElement[0].offsetLeft - curElement.width());
	if($('.combination').index(curElement) == 0) {
		var l = - (curElement[0].offsetLeft - curElement.width());
		$('#inner_left_div').hide();
	} else {
		var l = - (curElement[0].offsetLeft - $('#content').width() / 2);
	}
	$('#content').children('div').animate({left: l}, 500);
}

function siderbarShow() {
	$('#siderbar-sm').css('visibility', 'hidden');
	$('#siderbar-lg').animate({left: 0}, 500, function() {
		$('#siderbar-sm').width(135);
	});
}

function siderbarHide() {
	$('#siderbar-lg').animate({left: -110}, 500, function() {
		$('#siderbar-sm').width(95);
		$('#siderbar-sm').css('visibility', 'visible');
	});
}