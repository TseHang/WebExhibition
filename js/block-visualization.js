const windowWidth = $(window).width();
const windowHeight = $(window).height();
const errorDistance = 150;

const data = {
	header: {
		title: '視覺化圖表',
		subTitle: '把死板的資料欄位整理再分析，用視覺化技術創造出人們「容易解讀」的圖像化資訊，呈現其背後的意義。'
	}
};

let vmHeader = new Vue({
	delimiters: ['${', '}'],
	el: 'header',
	data: {
		header: data.header
	}
});

if(windowWidth >= 768){
	$(window).scroll(function () {
	  var scrollVal = $(this).scrollTop();
	  
	  if( scrollVal < errorDistance){
			$('.gogoGuide').addClass('hover');

			window.setTimeout(function(){
				$('.gogoGuide').removeClass('hover');
			},2000);

	  }else if(scrollVal > errorDistance){
	  	$('.experienceTalk').html('「1999視覺化」<br>這是我們團隊第一次合做的視覺化專案，從發想、版面設計、呈現的手法都是自己來，最後選出3張精美的圖表，希望帶給大家不一樣的圖表意義。');
	  }
	});

	$('.section-board').mouseover(function(){
		$('.gogoGuide').addClass('hover');
		$('.experienceTalk').html('哇～～要點開了嗎...好緊張...😀');
	})

	$('.section-board').mouseout(function(){
		$('.gogoGuide').removeClass('hover');
	})
}