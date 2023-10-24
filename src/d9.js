(function () {
    var d9d = collectSignals();
    
    function collectSignals() {
        var s = {};
        var ft = initFt(s);
        s.D9_120 = navigator.platform;
        s.D9_123 = navigator.maxTouchPoints || 0;
        var m = ft.isM(s.D9_120, s.D9_123)
        s.D9_134 = ft.getPlugins(m);
        return s
    }
    function initFt(r) {
        var ft = {};
        ft.isM = function(p, t) {
            return !!p && p === "iPhone" || p === "iPad" || (p.substr(0, 7) === "Linux a" && t > 0)
        };
        ft.getPlugins = function(m) {
            var a = [];
            if (m) {
                return a
            }
            try {
                a.push(navigator.plugins)
                return a
            } catch (e) {
                return null
            }
        };
    }
})();