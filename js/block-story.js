;(() => {
  const windowWidth = $(window).width()
  const BREAKPOINT_MOBILE = 768
  const errorDistance = 80
  const data = {
    header: {
      title: '報導故事書',
      subTitle: '我們嘗試用「講故事」的方式，結合數據視覺化圖表佐證，引導出深刻的事實或著人們所沒發現的議題。',
    },
  }

  const vmHeader = new Vue({
    delimiters: ['${', '}'],
    el: 'header',
    data: {
      header: data.header,
    },
  })

  if (windowWidth >= BREAKPOINT_MOBILE) {
    $(window).scroll(function () {
      const scrollVal = $(this).scrollTop()
      if (scrollVal < errorDistance) {
        $('.gogoGuide').addClass('hover')
        window.setTimeout(() => {
          $('.gogoGuide').removeClass('hover')
        }, 2000)
      } else if (scrollVal > errorDistance) {
        $('.experience-talk').html('「Review2015」<br>「幸福的定義」<br>這系列是我最初也最喜歡的作品 <3')
      }
    })

    $('#section-review2015').mouseover(() =>  {
      $('.gogoGuide').addClass('hover')
      $('.experience-talk').html('屬於主人的第一個發布作品，雖然不是很完美，但卻是2015年很重要的議題討論喔！ ><')
    })

    $('#section-happiness').mouseover(() =>  {
      $('.gogoGuide').addClass('hover')
      $('.experience-talk').html('幸福是什麼呢？ 我的主人是個很喜歡哲學的人哈哈。但真的... 好深奧啊... 我都快被搞混了＠＠＠')
    })

    $('.section-board').mouseout(() => {
      $('.gogoGuide').removeClass('hover')
    })
  } else {
    $(window).scroll(function () {
      const scrollVal = $(this).scrollTop()
      const sectionContent = $('.section-content').offset().top

      if (scrollVal <= sectionContent) {
        setMobileMenuText('嗨，我叫艾克斯・貝利恩斯，要來玩玩嘛？', '「講故事」，一直都是一個很吸引人且能溫暖人心的表達方式，這裡是主人最一開始的作品，也代表著主人最初想試著用網頁說一個好故事的心情...')
      } else {
        setMobileMenuText('這系列是我們最初也最喜歡的作品😊', '「Review2015」<br>「幸福的定義」<br> 利用 Reavel.js 做出一種類似網頁故事書的概念，為的就是更好地傳達整個故事的張力與情節。')
      }
    })
  }

  function setMobileMenuText(mainText, subText) {
    $('.nav-main-text').html(mainText)
    $('.nav-sub-text').html(subText)
  }
})()
