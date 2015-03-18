setInterval(function(){
  if(/79\/85/.test(document.getElementsByClassName('im_tab_selected')[0].getElementsByClassName('im_tab3')[0].innerHTML)){
    document.getElementsByClassName('add_media_type_1_topic add_media_item')[0].click();
    document.getElementById('im_change_topic_val').value = 'Залупа конская';
    document.getElementsByClassName('box_controls_wrap')[0].getElementsByTagName('button')[0].click();
  }
},3000);
