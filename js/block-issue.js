const windowWidth = $(window).width();
const windowHeight = $(window).height();
const errorDistance = 80;
const data = {
	header: {
		title: '深度議題',
		subTitle: '轉化人們對於議題的沈重特性，加入故事性的元素使其生動、活潑起來。'
	},
	section: {

	}
}
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
			// $('.experienceTalk').html('我是貼心小助手，艾克斯・貝利恩斯！請多多指教 😊');

			window.setTimeout(function(){
				$('.gogoGuide').removeClass('hover');
			},2000);

	  }else if(scrollVal > errorDistance){
	  	$('.experienceTalk').html('「掌蚊人」<br>我們的第一個大型專案，從發想、尋找適合的設計師、溝通討論...到最後內容編輯製作完成共花了 3個月。');
	  }
	});

	$('.section-board').mouseover(function(){
		$('.gogoGuide').addClass('hover');
		$('.experienceTalk').html('來把！一場對抗登革熱的修煉！😀');
	})

	$('.section-board').mouseout(function(){
		$('.gogoGuide').removeClass('hover');
	})
}