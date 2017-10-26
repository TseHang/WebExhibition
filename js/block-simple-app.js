;(() => {
  const windowWidth = $(window).width()
  const errorDistance = 150
  const data = {
    header: {
      title: '有趣小應用',
      subTitle: '加入活潑的頁面、互動性的元件，改變人們對原先使用網頁小程式只有單純「功能」的單調印象。',
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
        }, 2500)
      } else if (scrollVal > errorDistance) {
        $('.experience-talk').html('「抽獎系統」<br>「即時問卷系統」<br>都是一些平常可見的小工具，但這一次卻有一種化腐朽為神奇地感覺呢！')
      }
    })

    $('#section-slotMachine').mouseover(() => {
      $('.gogoGuide').addClass('hover')
      $('.experience-talk').html('這個跑馬燈據主人說花了很久的時間才想出來誒XDD！')
    })

    $('#section-d3ForceSimple').mouseover(() => {
      $('.gogoGuide').addClass('hover')
      $('.experience-talk').html('超酷的即時互動系統，曾有廠商以此為基底洽談合作可能！')
    })

    $('.section-board').mouseout(() => {
      $('.gogoGuide').removeClass('hover')
    })
  }
})()
