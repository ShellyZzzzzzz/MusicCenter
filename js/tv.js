$(document).ready(function($) {
	$('#inner_left_div').hide();

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
					var tp = curElement.prev();
					if(tp.length) {
						curElement.css('border', 'none');
						curElement = tp;
						selectSec(curElement, true);
					}
        		} else if(curSection == 2) {
        			curElement.css('border', 'none');

        			if($('.combination').index(curElement) == 0) {
        				curSection = 1
        				siderbarShow();
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
            	if(curSection == 1) {
            		curElement.css('border', 'none');
            		var tp = curElement.prev();
            		if(tp.length == 0) {
            			curSection = 0;
            			curElement = $('header').find('li').eq(0);
            			siderbarHide();
            			selectSec(curElement);
            		} else {
            			curElement = tp;
            			curElement.css('border', '1px solid red');
            		}

            	} else if(curSection == 2) {
            		curElement.css('border', 'none');
            		var t = curElement.parent().children();
        			if(t.index(curElement) >= 1) {
        				curElement = t.eq(0);
        				selectCbt(curElement);
        			} else {
        				curSection = 0;
        				var sec = curElement.parent().attr('class').substr(-1) - 0;
        				curElement = $('header').find('li').eq(sec);
        				selectSec(curElement);
        			}
            	}
        		break;
        	}
        	case 39: {//右
        		curElement.css('border', 'none');

        		if(curSection == 0) {
        			var tn = curElement.next();
					if(tn.length) {
						curElement.css('border', 'none');
						curElement = tn;
						selectSec(curElement, true);
					}
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

        		if(curSection == 0) {
        			curElement.css('border', 'none');
        			curSection = 2;

        			var sec = curElement.attr('id');
        			switch(sec) {
        				case "listen": {
        					curElement = $('.section0').children().eq(0);
        					break;
        				}
        				case "watch": {
        					curElement = $('.section1').children().eq(0);
        					break;
        				}
        				case "play": {
        					curElement = $('.section2').children().eq(0);
        					break;
        				}
        			}
        			curElement.css('border', '1px solid red');

        		} else if(curSection == 1) {
            		var tn = curElement.next();
            		if(tn.length != 0) {
            			curElement.css('border', 'none');
            			curElement = tn;
            			curElement.css('border', '1px solid red');
            		}
        		} else {
        			var t = curElement.parent().children();
        			if(t.index(curElement) == 0) {
        				curElement.css('border', 'none');
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
	if($('.combination').index(curElement) == 0) {
		var l = - (curElement[0].offsetLeft - curElement.width());
		$('#inner_left_div').hide();
	} else {
		var l = - (curElement[0].offsetLeft - $('#content').width() / 2);
	}
	$('#content').children('div').animate({left: l}, 500);
}

function selectSec(curElement, isFrom0) {
	curElement.css('border', '1px solid red');
	if(isFrom0) {
		curElement.css('border', '1px solid red');
		var sec = $('header').find('li').index(curElement);
		switch(sec) {
			case 0: {
				selectListen();
				break;
			}
			case 1: {
				selectWatch();
				break;
			}
			case 2: {
				selectPlay();
				break;
			}
		}
	}
}

//侧边栏事件
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

//导航栏事件
function selectListen() {
	$('#content').children('div').animate({left: 158}, 500, function() {
		$('#inner_left_div').hide(500);
	});	
}

function selectWatch() {
	$('#inner_left_div').show(50, function() {
		$('#content').children('div').animate({left: -470}, 500);
	});
}

function selectPlay() {
	$('#inner_left_div').show(50, function() {
		$('#content').children('div').animate({left: -1090}, 500);
	});;
}