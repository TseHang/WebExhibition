const windowWidth = $(window).width();
const windowHeight = $(window).height();
const errorDistance = 80;
const data = {
	header: {
		title: '3D & VR',
		subTitle: '基於 WebGL 技術渲染3D電腦圖形，創造更擬真、實境的網頁瀏覽體驗。'
	}
};

let vmHeader = new Vue({
	delimiters: ['${', '}'],
	el: 'header',
	data: {
		header: data.header
	}
});
var count = 0;

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
	  	$('.experienceTalk').html('「3D & VR」<br>是近期一個很夯的話題，我們針對專題展場做了一點小應用，希望大家喜歡！');
	  }
	});

	$('.section-board').mouseover(function(){
		$('.gogoGuide').addClass('hover');
		$('.experienceTalk').html('用手機來玩看看吧！😀');
	})

	$('.section-board').mouseout(function(){
		$('.gogoGuide').removeClass('hover');
	})
}