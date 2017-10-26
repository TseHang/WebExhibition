;(() => {
  const windowWidth = $(window).width()
  const BREAKPOINT_MOBILE = 768
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

  if (windowWidth >= BREAKPOINT_MOBILE) {
    $(window).scroll(function () {
      const scrollVal = $(this).scrollTop()

      if (scrollVal < errorDistance) {
        $('.gogoGuide').addClass('hover')

        window.setTimeout(() => {
          $('.gogoGuide').removeClass('hover')
        }, 2500)
      } else if (scrollVal > errorDistance) {
        $('.experience-talk').html('「抽獎系統」<br>「即時回饋系統」<br>都是一些平常可見的小工具，但這一次我們加入了現實生活中「實際操作該有的情感元素」，有一種化腐朽為神奇地感覺呢！')
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
  } else {
    $(window).scroll(function () {
      const scrollVal = $(this).scrollTop()
      const sectionContent = $('.section-content').offset().top

      if (scrollVal <= sectionContent) {
        setMobileMenuText('嗨，我叫艾克斯・貝利恩斯，要來玩玩嘛？', '一改網頁小工具只完成「功能」的習慣，加入活潑的頁面、互動性的元件，增加情緒，讓整個過程發現更多體驗的可能。')
      } else {
        setMobileMenuText('小改變，給予你不一樣的好體驗！', '「抽獎系統」<br>「即時回饋系統」<br>都是一些平常可見的小工具，但這一次我們加入了現實生活中「實際操作該有的情感元素」，有一種化腐朽為神奇地感覺呢！')
      }
    })
  }

  function setMobileMenuText(mainText, subText) {
    $('.nav-main-text').html(mainText)
    $('.nav-sub-text').html(subText)
  }
})()
