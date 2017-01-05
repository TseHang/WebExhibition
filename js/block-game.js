(function(window){
	const windowWidth = $(window).width();
	const windowHeight = $(window).height();
	const errorDistance = 80;
	const data = {
		header: {
			title: '遊戲',
			subTitle: '讓遊戲不只是遊戲，還可以讓使用者在玩樂中學習新知識。'
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
		  	$('.experienceTalk').html('「掌蚊宗師」<br>一個因應掌蚊人網站而生的遊戲！遊戲的所有元素都是主人親手製作，像是：配樂、設計稿、遊戲設定...希望大家會喜歡 ～');
		  }
		});

		$('.section-board').mouseover(function(){
			$('.gogoGuide').addClass('hover');
			$('.experienceTalk').html('這是Beta測試版遊戲！😀還沒上線給民眾，今日搶先公開 ><');
		})

		$('.section-board').mouseout(function(){
			$('.gogoGuide').removeClass('hover');
		})
	}
})(window)