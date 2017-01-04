//Initialize
const s = skrollr.init({
  //跟smoothScrolling的功能，主要都是讓scroll事件不要這麼敏感，動畫才不會看起來卡卡的。
  smoothScrolling : true,
  smoothScrollingDuration:200,

  //可以定義一些常數在影格使用，Example: data-_myconst-200 and skrollr.init({constants: {myconst: 300}}) result in data-500.
  constants:{
    initTop:100
  },
  //讓文本高度自動達到滿足Keyframe的條件
  forceHeight:true,
  //針對行動裝置的功能
  mobileCheck:function(){},
  mobileDeceleration:0.004,
  //畫面一開始，元素的初始值set：物件上第一個影格的值，ease：相對畫面開始的Scrolltop值使用兩格影格作參考，reset:使用他原生的CSS值
  edgeStrategy:'set',
  //render事件

  render: function(data) {
  	console.log(data);
    // 判斷雲出來的時機
  //   if (parseInt($('.background').css("left")) < 0){
  //     $('.cloud, .man-run-container').css('-webkit-animation-play-state', 'running')
  //               .css('animation-play-state', 'running');
  //   }
  //   else{
  //     $('.cloud, .man-run-container').css('-webkit-animation-play-state', 'paused')
  //               .css('animation-play-state', 'paused');
  //   }

  //   // 讓bar不見
  //   if (data.curTop > 100 && data.direction == "down"){
  //     navbarHidden() ;
  //   }
  //   else{
  //     navbarShow() ;
  //   }

  //   // 判斷小人是否要跑！！
  //   if (data.curTop > (data.maxTop-errorDistance)){
  //     $('.man-run-container').addClass("man-run-container-animation");
  //     navbarShow() ;
  //   }
  //   else {
  //     $('.man-run-container').removeClass("man-run-container-animation");
  //   }
  }

});