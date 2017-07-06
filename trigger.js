function loadScript(url, callback)
{
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;
    script.onreadystatechange = callback;
    script.onload = callback;
    head.appendChild(script);
}

var coreJsURL='https://raw.githubusercontent.com/farukg/freeclick-for-yobit-freecoins/master/core.js';
loadScript(coreJsURL,console.log('core.js added'));;
