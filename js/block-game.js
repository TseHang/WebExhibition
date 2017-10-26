;(() => {
  const windowWidth = $(window).width()
  const BREAKPOINT_MOBILE = 768
  const errorDistance = 80
  const data = {
    header: {
      title: '遊戲',
      subTitle: '讓遊戲不只是遊戲，還可以讓使用者在玩樂中學習新知識。',
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
        }, 3000)
      } else if (scrollVal > errorDistance) {
        $('.experience-talk').html('「掌蚊宗師」<br>遊戲的所有元素都是主人親手製作，包括：配樂、設計稿、遊戲關卡、內容...希望大家會喜歡 ～')
      }
    })

    $('.section-board').mouseover(() => {
      $('.gogoGuide').addClass('hover')
      $('.experience-talk').html('這是Beta測試版遊戲！😀 可能有點小 Bug，現在搶先公開 ><')
    })

    $('.section-board').mouseout(() => {
      $('.gogoGuide').removeClass('hover')
    })
  } else {
    $(window).scroll(function () {
      const scrollVal = $(this).scrollTop()
      const sectionContent = $('.section-content').offset().top

      if (scrollVal <= sectionContent) {
        setMobileMenuText('嗨，我叫艾克斯・貝利恩斯，要來玩玩嘛？', '我從沒幻想過自己可以寫出一款遊戲。<br>即使這次的掌蚊宗師不是那麼精緻與完整，但以從頭到尾由自己親手設計的遊戲來說，還是讓人愛不釋手呢！！')
      } else {
        setMobileMenuText('拜託你們如果玩到Bug不要怪我 嗚嗚😂', '這是Beta測試版遊戲！可能有點小Bug。可是千真萬確的是一款從配樂、設計稿、遊戲關卡、內容...都由我們一手包辦的遊戲，希望大家玩玩看哈哈 ～')
      }
    })
  }

  function setMobileMenuText(mainText, subText) {
    $('.nav-main-text').html(mainText)
    $('.nav-sub-text').html(subText)
  }
})()
