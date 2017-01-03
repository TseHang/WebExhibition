const data = {
	header: {
		title: '遊戲',
		subTitle: '讓遊戲不只是遊戲，還可以讓使用者在玩樂中學習新知識。'
	}
};

let vmHeader = new Vue({
	delimiters: ['${', '}'],
	el: 'header',
	data: {
		header: data.header
	}
});