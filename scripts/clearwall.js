function clear() {
	var all = document.getElementsByClassName('own');
	for(var i=0;i<all.length;i++) {
		document.getElementById('post_delete'+all[i].getAttribute('id').split('post')[1]).onclick();
	}
}

function restore() {
	var dld = document.getElementsByClassName('dld');
	for(var i=0;i<dld.length;i++) {
		dld[i].getElementsByTagName('a')[0].onclick();
	}
}

function scroll() {
	console.log('Scroll!');
	var height = document.body.scrollHeight;
	window.scrollTo(0,document.body.scrollHeight);
	setTimeout(function(){
		if(document.body.scrollHeight > height) {
			scroll();
		}
		else {
			console.log('Not scroll!');
			return;
		}
	},1000);
}

document.getElementById('scroll-button').onclick = function(){
	scroll();
}