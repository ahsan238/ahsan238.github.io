(function(){

    var x = 0
    let fp = ' ';
    function handleOrientation(event) {
            x = event.alpha+event.beta+event.gamma;
    }

    try {
        var userAgentInfo = navigator.userAgent;

        fp += userAgentInfo
        if (userAgentInfo.indexOf("Android") > 0 && userAgentInfo.indexOf("Mobile") > 0) {
            if (window.DeviceOrientationEvent) {
                window.addEventListener('deviceorientation', handleOrientation, true);
                fp += '' + x
            }
        }
        return fp;
    } catch (e) {}
    return '';
})();
