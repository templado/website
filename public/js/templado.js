window.addEventListener('load', function(){
    var list = document.querySelectorAll('.php, .shell, .xml, .html');
    [].forEach.call(list, function(code) {
        hljs.highlightBlock(code);
    });

    var nav = document.getElementById('nav');
    var href = document.location.pathname;
    var a = nav.querySelector('a[href="'+href+'"]');
    nav.getElementsByTagName('hr')[0].setAttribute('class', a.parentNode.getAttribute('class'));

});

