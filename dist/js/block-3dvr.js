'use strict';

var data = {
	header: {
		title: '3D & VR',
		subTitle: '基於 WebGL 技術渲染3D電腦圖形，創造更擬真、實境的網頁瀏覽體驗。'
	}
};

var vmHeader = new Vue({
	delimiters: ['${', '}'],
	el: 'header',
	data: {
		header: data.header
	}
});