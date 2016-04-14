function loadScript(url, callback)
{
    // Adding the script tag to the head as suggested before
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = url;

    // Then bind the event to the callback function.
    // There are several events for cross browser compatibility.
    script.onreadystatechange = callback;
    script.onload = callback;

    // Fire the loading
    head.appendChild(script);
}

var coreJsURL='https://raw.githubusercontent.com/myalcin81/freeclick-for-yobit-freecoins/master/core.js';
loadScript(coreJsURL,console.log('core.js added'));;