
var all = document.getElementsByClassName('own');
for(var i=0;i<all.length;i++) {
document.getElementById('post_delete'+all[i].getAttribute('id').split('post')[1]).onclick();
}
