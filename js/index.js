;(() => {
  const windowWidth = $(window).width()
  const windowHeight = $(window).height()
  const errorDistance = 100

  $('#logo-experience').mouseover(() => {
    $('.hintText').html('點一下，讓我來為您導覽吧！！')
  })

  $('#logo-experience').mouseout(() => {
    $('.hintText').html('可以...摸摸我的頭嗎 >///<')
  })

  $('#logo-experience').click(() => {
    $('.section').css('display', 'block')
    $('html , body').animate(
      {
        scrollTop: $(window).height(),
      },
      800,
    )
  })

  if (windowWidth >= 768 && windowWidth < 1280) {
    $(window).scroll(function() {
      let scrollVal = $(this).scrollTop()
      if (scrollVal < windowHeight - errorDistance) {
        $('.gogoGuide').css('display', 'none')
      } else {
        $('.gogoGuide').css('display', 'block')
      }
    })
  } else if (windowWidth >= 1280) {
    $(window).scroll(function() {
      let scrollVal = $(this).scrollTop()

      if (scrollVal < windowHeight - errorDistance) {
        $('.gogoGuide').css('display', 'none')
        $('.gogoGuide').removeClass('hover')
      } else if (
        scrollVal > windowHeight - errorDistance &&
        scrollVal < windowHeight + errorDistance
      ) {
        $('.gogoGuide').css('display', 'block')
        $('.gogoGuide').addClass('hover')

        window.setTimeout(function() {
          $('.gogoGuide').removeClass('hover')
        }, 2000)
      }

      if (scrollVal < windowHeight * 2 - errorDistance) {
        $('.experience-talk').html('我是貼心小助手，艾克斯・貝利恩斯！請多多指教 😊')
      } else {
        $('.experience-talk').html('這裡是我們所分成的六個主題，點擊框框看看每一個有趣的作品吧。')
      }
    })
  }

  $('#why-board').mouseover(function() {
    $('.gogoGuide').addClass('hover')
    $('.experience-talk').html(
      '下一個世代...該怎麼樣才能讓人喜歡呢？ 恩...你喜歡 艾克斯・貝利恩斯 嗎？ 至少我很高興認識大家！嗯嗯^_^'
    )
  })

  $('#what-board').mouseover(function() {
    $('.gogoGuide').addClass('hover')
    $('.experience-talk').html(
      '我們把之前的作品歸類為六個主題，分別是<b>「3D & VR」、「深度議題」、「有趣小應用」、「視覺化圖表」、「報導＆故事書」、「遊戲」</b>，每一個都是很有趣的體驗，大家玩玩看吧！'
    )
  })

  $('#impact-board').mouseover(function() {
    $('.gogoGuide').addClass('hover')
    $('.experience-talk').html('主人說：「生命，是長期而不段持續的累積。」，所以... 我們還要多努力！繼續積累作品！')
  })

  $('.board-card ').mouseout(function() {
    $('.gogoGuide').removeClass('hover')
  })
})()
