window.addEventListener('load', function(){
    var list = document.querySelectorAll('pre code');
    [].forEach.call(list, function(code) {
        hljs.highlightBlock(code);
    });
});

