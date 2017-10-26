;(() => {
  const windowWidth = $(window).width()
  const errorDistance = 80
  const data = {
    header: {
      title: '深度議題',
      subTitle: '轉化人們對於議題的沈重特性，加入故事性的元素使其生動、活潑起來。',
    },
    section: {},
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
        }, 2000)
      } else if (scrollVal > errorDistance) {
        $('.experience-talk').html('「掌蚊人」<br>我們的第一個大型專案，從發想、尋找合適的設計師、溝通討論...到最後內容編輯、程式製作完成共花了 3個月。')
      }
    })

    $('.section-board').mouseover(() => {
      $('.gogoGuide').addClass('hover')
      $('.experience-talk').html('來把！這是一場對抗登革熱的修煉！😀')
    })

    $('.section-board').mouseout(() => {
      $('.gogoGuide').removeClass('hover')
    })
  }
})()
