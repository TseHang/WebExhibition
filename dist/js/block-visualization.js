'use strict';

var data = {
	header: {
		title: '視覺化圖表',
		subTitle: '把死板的資料欄位整理再分析，用視覺化技術創造出人們「容易解讀」的圖像化資訊，呈現其背後的意義。'
	}
};

var vmHeader = new Vue({
	delimiters: ['${', '}'],
	el: 'header',
	data: {
		header: data.header
	}
});