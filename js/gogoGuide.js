(function(window){
  $(".gogoGuide").mouseleave(function(){
    $('.experienceTalk').html('我是貼心小助手，艾克斯・貝利恩斯！😊');
    $(this).removeClass('close-show drag');
  })

  $("#gogoGuide").draggable({
    start: function() {
      $(this).toggleClass('drag');
    },
    drag: function() {
      $('.experienceTalk').html('哇～～我在飛～～😝');
    },
    stop: function() {
      $(this).toggleClass('drag');
      $('.experienceTalk').html('真是一段驚險又刺激的旅程 ～呼～');
    }
  });

  $('#gogoGuide').click(function(){
    $(this).toggleClass('close-show');
  })

  $('.experience-close').click(function(){
    $('.experienceTalk').html('下次...重新整理見...謝謝您的陪伴！');

    $('#gogoGuide').animate({
      opacity: 0
    }, 1000, function(){
      $(this).remove();
    });
  })

  $('.experience-close').mouseover(function(){
    $('.experienceTalk').html('嗚嗚嗚嗚我保證會乖乖工作...😭');
    $('#gogoGuide').addClass('drag');
  })
})(window)