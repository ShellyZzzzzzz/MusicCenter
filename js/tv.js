$(document).ready(function($) {
	$('#inner_left_div').hide();
    $('html').get(0).style.overflow = 'hidden';

	//版块选择事件
	var curSection = 2;
	var curElement = $('.combination').eq(0);
    selectCbt(curElement, curSection);
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
						cancelSelect(curElement, curSection);
						curElement = tp;
						selectSec(curElement, true);
					}
        		} else if(curSection == 2) {
        			cancelSelect(curElement, curSection);

        			if($('.combination').index(curElement) == 0) {
        				curSection = 1
        				siderbarShow();
        				$('#inner_left_div').hide();
        				curElement = $('#siderbar-lg').children('li').eq(0);
        				curElement.css({
                            'color': 'rgb(157,85,255)',
                            'font-size': '22px'
                        });
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
            		cancelSelect(curElement, curSection);
            		var tp = curElement.prev();
            		if(tp.length == 0) {
            			curSection = 0;
            			curElement = $('header').find('li').eq(0);
            			siderbarHide();
            			selectSec(curElement);
            		} else {
            			curElement = tp;
            			curElement.css({
                            'color': 'rgb(157,85,255)',
                            'font-size': '22px'
                        });
            		}

            	} else if(curSection == 2) {
            		cancelSelect(curElement, curSection);
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
        		cancelSelect(curElement, curSection);

        		if(curSection == 0) {
        			var tn = curElement.next();
					if(tn.length) {
						cancelSelect(curElement, curSection);
						curElement = tn;
						selectSec(curElement, true);
					}
        		} else if(curSection == 1){
        			curSection = 2;
        			siderbarHide();
        			curElement = $('.combination').eq(0);
        			selectCbt(curElement);
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
        			cancelSelect(curElement, curSection);
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
                        case "dance": {
                            curElement = $('.section3').children().eq(0);
                            break;
                        }
        			}
                    selectCbt(curElement);

        		} else if(curSection == 1) {
            		var tn = curElement.next();
            		if(tn.length != 0) {
            			cancelSelect(curElement, curSection);
            			curElement = tn;
            			curElement.css({
                            'color': 'rgb(157,85,255)',
                            'font-size': '22px'
                        });
            		}
        		} else {
        			var t = curElement.parent().children();
        			if(t.index(curElement) == 0 && t.length != 1) {
        				cancelSelect(curElement, curSection);
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
	curElement.css('border', '2px solid #fff');

    var w = curElement.children('img').width();
    curElement.children('img').width(w + 10);

	if($('.combination').index(curElement) == 0) {
		selectListen();
		$('#inner_left_div').hide();
	} else {
		var l = - (curElement[0].offsetLeft - $('#content').width()/2 + curElement.width()/2);
        $('#content').children('div').animate({left: l}, 500);
	}
}

function selectSec(curElement, isFrom0) {
    curElement.css({
        'color': 'rgb(157,85,255)',
        'font-size': '22px'
    });
	if(isFrom0) {
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
            case 3: {
                selectDance();
                break;
            }
		}
	}
}

function cancelSelect(curElement, curSection) {
    if(curSection == 2) {
        curElement.css('border', 'none');

        var w = curElement.children('img').width();
        curElement.children('img').width(w - 10);
    } else {
        curElement.css({
            'color': '#efefff',
            'font-size': '20px'
        });
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
	$('#content').children('div').animate({left: 0}, 500, function() {
		$('#inner_left_div').hide(500);
	});	
}

function selectWatch() {
	$('#inner_left_div').show(50, function() {
		$('#content').children('div').animate({left: -638}, 500);
	});
}

function selectPlay() {
	$('#inner_left_div').show(50, function() {
		$('#content').children('div').animate({left: -1258}, 500);
	});;
}

function selectDance() {
    $('#inner_left_div').show(50, function() {
        $('#content').children('div').animate({left: -2038}, 500);
    });;
}