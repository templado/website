window.addEventListener('load', function(){
    var list = document.querySelectorAll('.php');
    [].forEach.call(list, function(code) {
        hljs.highlightBlock(code);
    });
});

