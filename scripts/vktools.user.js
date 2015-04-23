// ==UserScript==
// @name vktools
// @description Some useful things for vk.com
// @author V07D
// @license WTFPL
// @version 1.0
// @include http://vk.com/*
// ==/UserScript==
 
(function(window, undefined ) {
        function getAllPosts() {
                var xhr = new XMLHttpRequest();
                var body = 'act=' + encodeURIComponent('get_wall') + '&al=' + encodeURIComponent(1) + '&owner_id=' + encodeURIComponent(264828584) + '&type=' + encodeURIComponent('all');
                xhr.open("POST", '/al_wall.php', true);
                xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
                xhr.onreadystatechange = function() {
                        if (xmlhttp.readyState == 4) {

                        }
                }
        }

        function clear() {
                var all = document.getElementsByClassName('own');
                for(var i=0;i<all.length;i++) {
                        document.getElementById('post_delete'+all[i].getAttribute('id').split('post')[1]).onclick();
                }
        }

        function restore() {
                var dld = document.getElementsByClassName('dld');
                for(var i=0;i<dld.length;i++) {
                        //eval(dld[i].getElementsByTagName('a')[0].getAttribute('onclick'));
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

        function injectControls() {
                var cmd = {
                        scroll:function(){
                                console.log('Scroll!');
                                var height = document.body.scrollHeight;
                                window.scrollTo(0,document.body.scrollHeight);
                                setTimeout(function(){
                                        if(document.body.scrollHeight > height) {
                                                cmd.scroll();
                                        }
                                        else {
                                                console.log('Not scroll!');
                                                return;
                                        }
                                },1000);
                        },
                        clear:function(){
                                var all = document.getElementsByClassName('own');
                                for(var i=0;i<all.length;i++) {
                                        document.getElementById('post_delete'+all[i].getAttribute('id').split('post')[1]).onclick();
                                }
                        },
                        restore:function(){
                            var dld = document.getElementsByClassName('dld');
                                for(var i=0;i<dld.length;i++) {
                                        dld[i].getElementsByTagName('a')[0].onclick();
                                }    
                        }
                }
                var panel = document.getElementById('profile_actions');

                var scrollHref = document.createElement('a');
                scrollHref.innerHTML = 'Scroll to bottom';
                scrollHref.onclick = cmd.scroll;

                var clearHref = document.createElement('a');
                clearHref.innerHTML = 'Clear all posts';
                clearHref.onclick = cmd.clear;

                var restoreHref = document.createElement('a');
                restoreHref.innerHTML = 'Restore deleted posts';
                restoreHref.onclick = cmd.restore;

                panel.appendChild(scrollHref);
                panel.appendChild(clearHref);
                panel.appendChild(restoreHref);
        }

        function test() {
                alert('test');
        }


 
        // normalized window
        var w;
        if (unsafeWindow != "undefined"){
                w = unsafeWindow
        } else {
                w = window;    
        }
 
        // You can inject almost any javascript library here.
        // Just pass the w as the window reference,
        // e.g. jquery.min.js embedding:
        // (function(a,b){function ci(a) ... a.jQuery=a.$=d})(w);
 
 
        // do not run in frames
        if (w.self != w.top){
                return;
        }
 
        // additional url check.
        // Google Chrome do not treat @match as intended sometimes.
        if (/http[s]?:\/\/vk.com/.test(w.location.href)){
                //Below is the userscript code itself

                var restoreScript = document.createElement('script');
                restoreScript.appendChild(document.createTextNode('('+ injectControls +')();'));
                (document.body || document.head || document.documentElement).appendChild(restoreScript);
       
       
                //injectControls();
        }
})(window);