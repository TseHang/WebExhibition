const windowWidth = $(window).width();
const windowHeight = $(window).height();
const errorDistance = 150;
const data = {
	header: {
		title: '有趣小應用',
		subTitle: '加入活潑的頁面、互動性的元件，改變人們對原先使用網頁小程式的單調印象。'
	}
};

let vmHeader = new Vue({
	delimiters: ['${', '}'],
	el: 'header',
	data: {
		header: data.header
	}
});

if(windowWidth >= 1280){
	$(window).scroll(function () {
	  var scrollVal = $(this).scrollTop();
	  
	  if( scrollVal < errorDistance){
			$('.gogoGuide').addClass('hover');

			window.setTimeout(function(){
				$('.gogoGuide').removeClass('hover');
			},2000);

	  }else if(scrollVal > errorDistance){
	  	$('.experienceTalk').html('「抽獎系統」<br>「即時問卷系統」<br>都是一些平常可見的小事情，但在這邊卻有一種化腐朽為神奇地感覺呢！');
	  }
	});

	$('#section-slotMachine').mouseover(function(){
		$('.gogoGuide').addClass('hover');
		$('.experienceTalk').html('結合跑馬燈與抽獎箱的元素，抽到我吧！！😀');
	})

	$('#section-d3ForceSimple').mouseover(function(){
		$('.gogoGuide').addClass('hover');
		$('.experienceTalk').html('超酷的互動系統，有廠商還找我們洽談合作可能性呢！😀');
	})

	$('.section-board').mouseout(function(){
		$('.gogoGuide').removeClass('hover');
	})
}