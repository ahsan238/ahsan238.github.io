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
                for (var i = 0; i < navigator.plugins.length; i++) {
                    a.push(navigator.plugins[i].name + ": " + navigator.plugins[i].description + " (" + navigator.plugins[i].filename + ")")
                }
                return a
            } catch (e) {
                return null
            }
        };
        return ft;
    }
})();