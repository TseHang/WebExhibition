'use strict';

var windowWidth = $(window).width();
var windowHeight = $(window).height();
var errorDistance = 100;

$('#logo-experience').mouseover(function () {
	$('.hintText').html('讓我來為您導覽吧！！');
});

$('#logo-experience').mouseout(function () {
	$('.hintText').html('可以...摸摸我的頭嗎 >///<');
});

$('#logo-experience').click(function () {
	$('.section').css('display', 'block');
	$('html , body').animate({
		scrollTop: $(window).height()
	}, 800);
});

if (windowWidth >= 768 && windowWidth < 1280) {
	$(window).scroll(function () {
		var scrollVal = $(this).scrollTop();
		if (scrollVal < windowHeight - errorDistance) {
			$('.gogoGuide').css('display', 'none');
		} else {
			$('.gogoGuide').css('display', 'block');
		}
	});
} else if (windowWidth >= 1280) {
	$(window).scroll(function () {
		var scrollVal = $(this).scrollTop();

		if (scrollVal < windowHeight - errorDistance) {
			$('.gogoGuide').css('display', 'none');
			$('.gogoGuide').removeClass('hover');
		} else if (scrollVal > windowHeight - errorDistance && scrollVal < windowHeight + errorDistance) {
			$('.gogoGuide').css('display', 'block');
			$('.gogoGuide').addClass('hover');

			window.setTimeout(function () {
				$('.gogoGuide').removeClass('hover');
			}, 2000);
		}

		if (scrollVal < windowHeight * 2 - errorDistance) {
			$('.experienceTalk').html('我是貼心小助手，艾克斯・貝利恩斯！請多多指教 😊');
		} else {
			$('.experienceTalk').html('這是我們所分成的六個主題，點擊框框可進入詳細內容。');
		}
	});
}

$('#why-board').mouseover(function () {
	$('.gogoGuide').addClass('hover');
	$('.experienceTalk').html('下一個世代...該怎麼樣才能讓人喜歡呢？ 恩...你喜歡 艾克斯・貝利恩斯 嗎？ 很高興認識大家！^_^');
});

$('#what-board').mouseover(function () {
	$('.gogoGuide').addClass('hover');
	$('.experienceTalk').html('我們把之前的作品歸類為六個主題，分別是<b>「3D & VR」、「深度議題」、「有趣小應用」、「視覺化圖表」、「報導＆故事書」、「遊戲」</b>，每一個都是很有趣的體驗，大家玩玩看吧！');
});

$('#impact-board').mouseover(function () {
	$('.gogoGuide').addClass('hover');
	$('.experienceTalk').html('媽媽說：「做人，要學著謙虛！」，所以... 我們還要多努力！但還是看看吧 ～～');
});

$('.board-card ').mouseout(function () {
	$('.gogoGuide').removeClass('hover');
});