;(() => {
  const windowWidth = $(window).width()
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

  if (windowWidth >= 768) {
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
  }
})()
