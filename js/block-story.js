(function(window){
	const windowWidth = $(window).width();
	const windowHeight = $(window).height();
	const errorDistance = 80;
	const data = {
		header: {
			title: '報導故事書',
			subTitle: '我嘗試用「講故事」的方式，結合數據視覺化圖表佐證，引導出深刻的事實或著人們所沒發現的議題。'
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
				// $('.experienceTalk').html('我是貼心小助手，艾克斯・貝利恩斯！請多多指教 😊');

				window.setTimeout(function(){
					$('.gogoGuide').removeClass('hover');
				},2000);

		  }else if(scrollVal > errorDistance){
		  	$('.experienceTalk').html('「Review2015」<br>「幸福的定義」<br>這系列已經榮獲我最愛作品的前三名 <3');
		  }
		});

		$('#section-review2015').mouseover(function(){
			$('.gogoGuide').addClass('hover');
			$('.experienceTalk').html('我們的第一個作品，雖然不是很完美，但卻是2015年很重要的議題喔！ ><');
		})

		$('#section-happiness').mouseover(function(){
			$('.gogoGuide').addClass('hover');
			$('.experienceTalk').html('幸福是什麼呢？好深奧的問題啊...我都快被搞混了＠＠＠');
		})

		$('.section-board').mouseout(function(){
			$('.gogoGuide').removeClass('hover');
		})
	}	
})(window)
