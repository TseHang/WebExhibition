const data = {
	header: {
		title: '報導故事書',
		subTitle: '我嘗試用「講故事」的方式，結合數據視覺化圖表佐證，引導出深刻的事實或著人們所沒發現的議題。'
	}
};

let vmHeader = new Vue({
	delimiters: ['${', '}'],
	el: 'header',
	data: {
		header: data.header
	}
});