const data = {
	header: {
		title: '有趣小應用',
		subTitle: '加入活潑的頁面、互動性的元件，改變人們對原先使用網頁小程式的單調印象。'
	}
};

let vmHeader = new Vue({
	delimiters: ['${', '}'],
	el: 'header',
	data: {
		header: data.header
	}
});