(() => {
  // Header.js
  $('#fa-lists-applications').click(() => {
    $('.fa-caret-down').toggleClass('rotate-to-up')
    $('.menu-lists-applications').toggleClass('open')
  })
  // gogoGuide.js
  $('.gogoGuide').mouseleave(function() {
    $('.experience-talk').html('我是貼心小助手，艾克斯・貝利恩斯！😊')
    $(this).removeClass('icon-show drag')
  })

  $('#gogoGuide').draggable({
    start: function() {
      $(this).toggleClass('drag')
    },
    drag: function() {
      $('.experience-talk').html('哇～～我在飛～～😝')
    },
    stop: function() {
      $(this).toggleClass('drag')
      $('.experience-talk').html('真是一段驚險又刺激的旅程 ～呼～')
    },
  })

  $('#gogoGuide').click(function() {
    $(this).toggleClass('icon-show')
  })

  $('.experience-icon-close').click(() => {
    $('.experience-talk').html('下次...重新整理見...謝謝您的陪伴！')

    $('#gogoGuide').animate(
      {
        opacity: 0,
      },
      1500,
      function() {
        $(this).remove()
      }
    )
  })
  $('.experience-icon-home').mouseover(() => {
    $('.experience-talk').html('回到首頁！！～～')
    $('#gogoGuide').addClass('drag')
  })

  $('.experience-icon-close').mouseover(() => {
    $('.experience-talk').html('嗚嗚嗚嗚我保證會乖乖工作...😭 不要刪掉我！')
    $('#gogoGuide').addClass('drag')
  })
})()
