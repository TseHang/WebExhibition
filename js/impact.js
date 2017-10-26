;(() => {
  const windowWidth = $(window).width()
  const BREAKPOINT_MOBILE = 768

  const s = skrollr.init({
    // 跟smoothScrolling的功能，主要都是讓scroll事件不要這麼敏感，動畫才不會看起來卡卡的。
    smoothScrolling: true,
    smoothScrollingDuration: 200,

    // 可以定義一些常數在影格使用，Example: data-_myconst-200 and skrollr.init({constants: {myconst: 300}}) result in data-500.
    constants: {
      initTop: 100,
    },
    forceHeight: true, // 讓文本高度自動達到滿足Keyframe的條件
    mobileCheck: () => {}, // 針對行動裝置的功能
    mobileDeceleration: 0.004,

    // 畫面一開始，元素的初始值set：物件上第一個影格的值，ease：相對畫面開始的Scrolltop值使用兩格影格作參考，reset:使用他原生的CSS值
    edgeStrategy: 'set',
    render: function(data) {},
  })

  // Header.js
  const faListsApplications = document.getElementById('fa-lists-applications')
  const faCaretDown = document.getElementsByClassName('fa-caret-down')
  const menuListsApplications = document.getElementsByClassName('menu-lists-applications')
  faListsApplications.addEventListener('click', () => {
    faCaretDown[0].classList.toggle('rotate-to-up')
    menuListsApplications[0].classList.toggle('open')
  })

  $('.nav-main-text').click(() => $('.nav-sub-text-div').toggleClass('show'))
  if (windowWidth < BREAKPOINT_MOBILE) {
    $(window).scroll(function() {
      const scrollVal = $(this).scrollTop()
      const sectionPart = $('.section-part').offset().top

      if (scrollVal <= sectionPart) {
        setMobileMenuText(
          '嗨，我叫艾克斯・貝利恩斯，要來玩玩嘛？',
          '「設計的本質在於解決問題。而對於網頁來說就是創造殺手級的體驗。」<br>這裡記載著我們的一些作品，因為其某些特色，所以能有不一樣的機會被看見😊'
        )
      } else {
        setMobileMenuText(
          '很幸運的！我們的作品因此被看見😀',
          '我一直覺得，<b>有價值的東西絕不會被埋沒，只是還沒找出對的方式。</b><br>每一次想要更深入學習網頁「說故事」的過程中總是會遇到幾個瓶頸，當然其中不乏的就是應該被說要多學幾套框架，才好更應用於實作。但是可能天生個性使然吧！把東西做到目前最好，一直是我堅守的信條，也因此走上了這條關於「情感呈現與體驗」的不歸路。這裡面的作品還很青澀，希望你們能夠喜歡～～'
        )
      }
    })
  }
  function setMobileMenuText(mainText, subText) {
    $('.nav-main-text').html(mainText)
    $('.nav-sub-text').html(subText)
  }
})()
