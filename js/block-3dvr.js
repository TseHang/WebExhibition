;(() => {
  const windowWidth = $(window).width()
  const BREAKPOINT_MOBILE = 768
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
  if (windowWidth >= BREAKPOINT_MOBILE) {
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
  } else {
    $(window).scroll(function () {
      const scrollVal = $(this).scrollTop()
      const sectionContent = $('.section-content').offset().top

      if (scrollVal <= sectionContent) {
        setMobileMenuText('嗨，我叫艾克斯・貝利恩斯，要來玩玩嘛？', '這裡是「3D & VR」的世界，事實上 WebGL的技術已經發展到很擬真的地步，你有沒有像我一樣期待未來呢？')
      } else {
        setMobileMenuText('用手機玩看看吧！😀', '「3D & VR」<br>是近期一個很夯的話題，我們針對專題展場做了一點小應用，拿起手機試試看吧！')
      }
    })
  }

  function setMobileMenuText(mainText, subText) {
    $('.nav-main-text').html(mainText)
    $('.nav-sub-text').html(subText)
  }
})()
