"use strict";!function(){function e(e,o){$(".nav-main-text").html(e),$(".nav-sub-text").html(o)}var o=$(window).width(),t=768,i=80,n={header:{title:"遊戲",subTitle:"讓遊戲不只是遊戲，還可以讓使用者在玩樂中學習新知識。"}};new Vue({delimiters:["${","}"],el:"header",data:{header:n.header}});o>=t?($(window).scroll(function(){var e=$(this).scrollTop();e<i?($(".gogoGuide").addClass("hover"),window.setTimeout(function(){$(".gogoGuide").removeClass("hover")},3e3)):e>i&&$(".experience-talk").html("「掌蚊宗師」<br>遊戲的所有元素都是主人親手製作，包括：配樂、設計稿、遊戲關卡、內容...希望大家會喜歡 ～")}),$(".section-board").mouseover(function(){$(".gogoGuide").addClass("hover"),$(".experience-talk").html("這是Beta測試版遊戲！😀 可能有點小 Bug，現在搶先公開 ><")}),$(".section-board").mouseout(function(){$(".gogoGuide").removeClass("hover")})):$(window).scroll(function(){var o=$(this).scrollTop(),t=$(".section-content").offset().top;o<=t?e("嗨，我叫艾克斯・貝利恩斯，要來玩玩嘛？","我從沒幻想過自己可以寫出一款遊戲。<br>即使這次的掌蚊宗師不是那麼精緻與完整，但以從頭到尾由自己親手設計的遊戲來說，還是讓人愛不釋手呢！！"):e("拜託你們如果玩到Bug不要怪我 嗚嗚😂","這是Beta測試版遊戲！可能有點小Bug。可是千真萬確的是一款從配樂、設計稿、遊戲關卡、內容...都由我們一手包辦的遊戲，希望大家玩玩看哈哈 ～")})}();