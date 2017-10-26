;(() => {
  const windowWidth = $(window).width()
  const errorDistance = 80
  const data = {
    header: {
      title: '3D & VR',
      subTitle: '基於 WebGL 技術渲染3D電腦圖形，創造更擬真、實境的網頁瀏覽體驗。',
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
        }, 2000)
      } else if (scrollVal > errorDistance) {
        $('.experience-talk').html('「3D & VR」<br>是近期一個很夯的話題，我們針對專題展場做了一點小應用，拿起手機試試看吧！')
      }
    })

    $('.section-board').mouseover(() => {
      $('.gogoGuide').addClass('hover')
      $('.experience-talk').html('用手機玩看看吧！😀')
    })

    $('.section-board').mouseout(() => {
      $('.gogoGuide').removeClass('hover')
    })
  }
})()
