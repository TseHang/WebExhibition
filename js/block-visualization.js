;(() => {
  const windowWidth = $(window).width()
  const errorDistance = 150

  const data = {
    header: {
      title: '視覺化圖表',
      subTitle: '把死板的資料欄位整理再分析，用視覺化的手法創造出人們「容易解讀」的圖像化資訊，呈現其背後的意義。',
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
        $('.experience-talk').html('「1999視覺化」<br>這是我們團隊第一次受政府單位委託做的視覺化專案，從發想、版面設計、呈現的手法都是自己來，最後選出3張精美的圖表，希望帶給大家不一樣的圖表意義。')
      }
    })

    $('.section-board').mouseover(() => {
      $('.gogoGuide').addClass('hover')
      $('.experience-talk').html('哇～～要點開了嗎...好緊張...😀')
    })

    $('.section-board').mouseout(() => {
      $('.gogoGuide').removeClass('hover')
    })
  }
})()
