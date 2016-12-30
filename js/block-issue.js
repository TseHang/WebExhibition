const data = {
	header: {
		title: '深度議題',
		subTitle: '轉化人們對於議題的沈重特性，加入故事性的元素使其生動、活潑起來。'
	},
	section: {

	}
}
let vmHeader = new Vue({
	delimiters: ['${', '}'],
	el: 'header',
	data: {
		header: data.header
	}
});