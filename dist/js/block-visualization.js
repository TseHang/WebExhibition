"use strict";!function(){function e(e,o){$(".nav-main-text").html(e),$(".nav-sub-text").html(o)}var o=$(window).width(),t=768,i=150,n={header:{title:"視覺化圖表",subTitle:"把死板的資料欄位整理再分析，用視覺化的手法創造出人們「容易解讀」的圖像化資訊，呈現其背後的意義。"}};new Vue({delimiters:["${","}"],el:"header",data:{header:n.header}});o>=t?($(window).scroll(function(){var e=$(this).scrollTop();e<i?($(".gogoGuide").addClass("hover"),window.setTimeout(function(){$(".gogoGuide").removeClass("hover")},3e3)):e>i&&$(".experience-talk").html("「1999視覺化」<br>這是我們團隊第一次受政府單位委託做的視覺化專案，從發想、版面設計、呈現的手法都是自己來，最後選出3張精美的圖表，希望帶給大家不一樣的圖表意義。")}),$(".section-board").mouseover(function(){$(".gogoGuide").addClass("hover"),$(".experience-talk").html("哇～～要點開了嗎...好緊張...😀")}),$(".section-board").mouseout(function(){$(".gogoGuide").removeClass("hover")})):$(window).scroll(function(){var o=$(this).scrollTop(),t=$(".section-content").offset().top;o<=t?e("嗨，我叫艾克斯・貝利恩斯，要來玩玩嘛？","會開始做視覺化圖表的起因都是因為我們進入了一個很酷很酷的團隊 -- 「用數據看台灣」！你有在關注我們嗎？XD"):e("這是第一個自己從規劃、提案、設計...當起團隊 PM 角色的專案😏","「1999視覺化」<br>我們團隊第一次受政府單位委託做的視覺化專案，從發想、版面設計、呈現的手法都是自己來，最後選出3張精美的圖表，希望帶給大家不一樣的圖表意義。")})}();