(function(){
    function handleOrientation(event) {
            var alpha = event.alpha;
            var beta = event.beta;
            var gamma = event.gamma;
    }
    var flag = "PC";
    try {
        var userAgentInfo = navigator.userAgent;
        var Agents = new Array("iPhone", "Windows Phone", "iPod", "BlackBerry", "SymbianOS");

        if (userAgentInfo.indexOf("Android") > 0 && userAgentInfo.indexOf("Mobile") > 0) {
            if (window.DeviceOrientationEvent) {
            window.addEventListener('deviceorientation', handleOrientation, true);
        } else {
            console.log("Device orientation not supported");
        }

            flag = "SP";
        } else {
            for (var i = 0; i < Agents.length; i++) {
                if (userAgentInfo.indexOf(Agents[i]) > 0) {
                    flag = "SP";
                    break;
                }
            }
        }

        return flag;
    } catch (e) {}
    return '';
})();
