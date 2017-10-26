;(() => {
  // Header.js
  $('#fa-lists-applications').click(() => {
    $('.fa-caret-down').toggleClass('rotate-to-up')
    $('.menu-lists-applications').toggleClass('open')
  })

  $('.nav-main-text').click(() => {
    $('.nav-sub-text-div').toggleClass('show')
  })
  // ---------

  $('.gogoGuide').mouseleave(function () {
    $('.experience-talk').html('我是貼心小助手，艾克斯・貝利恩斯！😊')
    $(this).removeClass('icon-show drag')
  })

  $('#gogoGuide').draggable({
    start() {
      $(this).toggleClass('drag')
    },
    drag() {
      $('.experience-talk').html('哇～～我在飛～～😝')
    },
    stop() {
      $(this).toggleClass('drag')
      $('.experience-talk').html('點我，會有意想不到的功能出現喔！🙃')
    },
  })

  $('#gogoGuide').click(function () {
    $(this).toggleClass('icon-show')
  })

  $('.experience-icon-close').click(() => {
    $('.experience-talk').html('下次...重新整理見...謝謝您的陪伴！')
    $('#gogoGuide').animate(
      {
        opacity: 0,
      },
      1500,
      function () {
        $(this).remove()
      }
    )
  })
  $('.experience-icon-home').mouseover(() => {
    $('.experience-talk').html('這是主人寫下關於「我的故事」，也就是我如何誕生的故事！😁')
    $('#gogoGuide').addClass('drag')
  })

  $('.experience-icon-close').mouseover(() => {
    $('.experience-talk').html('嗚嗚嗚嗚我保證會乖乖工作...😭 不要讓我消失！')
    $('#gogoGuide').addClass('drag')
  })

  $('.experience-icon-lists').mouseover(() => {
    $('.experience-talk').html('這裡包含主人曾經做過的小小作品，沒有這些累積也就不會出現我！🙃')
    $('#gogoGuide').addClass('drag')
  })
})()
