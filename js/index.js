;(() => {
  const windowWidth = $(window).width()
  const windowHeight = $(window).height()
  const BREAKPOINT_MOBILE = 768
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

  if (windowWidth >= BREAKPOINT_MOBILE) {
    $(window).scroll(function() {
      let scrollVal = $(this).scrollTop()
      const hiddenLimitScope = windowHeight - errorDistance
      const showLimitScope = windowHeight + errorDistance
      if (scrollVal < hiddenLimitScope) {
        $('.gogoGuide').css('display', 'none')
        $('.gogoGuide').removeClass('hover')
      } else if (
        scrollVal > hiddenLimitScope &&
        scrollVal < showLimitScope
      ) {
        $('.gogoGuide').css('display', 'block')
        $('.gogoGuide').addClass('hover')

        window.setTimeout(() => {
          $('.gogoGuide').removeClass('hover')
        }, 2000)

        if (scrollVal < windowHeight * 2 - errorDistance) {
          $('.experience-talk').html('我是貼心小助手，艾克斯・貝利恩斯！請多多指教 😊')
        } else {
          $('.experience-talk').html('這裡是我們所分成的六個主題，點擊框框看看每一個有趣的作品吧。')
        }
      }
    })
  } else {
    $(window).scroll(function () {
      let scrollVal = $(this).scrollTop()
      const whyBoardScope = $('#why-board').offset().top
      const whatBoardScope = $('#what-board').offset().top
      const impactBoardScope = $('#impact-board').offset().top
      const sectionBlocksScope = $('.section-blocks').offset().top

      if (scrollVal <= whyBoardScope) {
        setMobileMenuText('嗨，我叫艾克斯・貝利恩斯，要來玩玩嘛？', '這個網頁共包含六個主題，分別是<b>「3D & VR」、「深度議題」、「有趣小應用」、「視覺化圖表」、「報導＆故事書」、「遊戲」</b>，每一個都是很有趣的體驗，大家玩玩看吧！')
      } else if (scrollVal <= whatBoardScope) {
        setMobileMenuText('下一個世代的網頁...該怎麼樣才能讓人喜歡呢？', '恩...你喜歡 艾克斯・貝利恩斯 嗎？ 至少我很高興認識大家！嗯嗯^_^')
      } else if (scrollVal <= impactBoardScope) {
        setMobileMenuText('我們把曾經思考過的項目分為六個主題...', '分別是<b>「3D & VR」、「深度議題」、「有趣小應用」、「視覺化圖表」、「報導＆故事書」、「遊戲」</b>...')
      } else if (scrollVal <= sectionBlocksScope) {
        setMobileMenuText('每一種應用，都有其意想不到的發展XD', '「生命，是長期而不段持續的累積。」很高興能與大家分享我的體悟與<span class="link" onclick=\'window.open("./impact.html")\' >作品價值</span>！')
      } else {
        setMobileMenuText('點一個區塊進去吧！', '"3D & VR": 一個小小的展場應用, <br>"深度議題": 掌蚊人, <br>"有趣小應用": 抽獎機、即時回饋系統, <br>"報導＆故事書": Review2015、幸福的定義, <br>"遊戲": 掌蚊宗師')
      }
    })
  }

  function setMobileMenuText (mainText, subText) {
    $('.nav-main-text').html(mainText)
    $('.nav-sub-text').html(subText)
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
    $('.experience-talk').html('主人說：「生命，是長期而不段持續的累積。」所以... 我們還要多努力！繼續積累作品！')
  })

  $('.board-card ').mouseout(function() {
    $('.gogoGuide').removeClass('hover')
  })
})()
