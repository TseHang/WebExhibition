;(() => {
  const windowWidth = $(window).width()
  const BREAKPOINT_MOBILE = 768
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

  if (windowWidth >= BREAKPOINT_MOBILE) {
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
  } else {
    $(window).scroll(function () {
      const scrollVal = $(this).scrollTop()
      const sectionContent = $('.section-content').offset().top

      if (scrollVal <= sectionContent) {
        setMobileMenuText('嗨，我叫艾克斯・貝利恩斯，要來玩玩嘛？', '網頁一直以來的主要功能多以「呈現資訊」為主，但在資訊越來越多的情況下，人們已經愈趨疲乏。所以我們試著轉化大眾對於議題的沈重特性，加入故事性的元素使其生動、活潑起來。')
      } else {
        setMobileMenuText('來把！這是一場對抗登革熱的修煉！😀', '「掌蚊人」<br>我們的第一個大型專案，從發想、尋找合適的設計師、溝通討論...到最後內容編輯、程式製作完成共花了 3個月。')
      }
    })
  }

  function setMobileMenuText(mainText, subText) {
    $('.nav-main-text').html(mainText)
    $('.nav-sub-text').html(subText)
  }
})()
