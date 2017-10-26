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
