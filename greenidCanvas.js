function GetCanvasData() {
        var elem = null, canvasAttributes = {}, hashAttributes = {}, d = null;
        var c = ["webgl", "experimental-webgl", "moz-webgl", "webkit-3d"];
        for (var e = 0, b = document.createElement("canvas") ; e < c.length; e++) {
            try {
                if (d = b.getContext(c[e])) {
                    hashAttributes.ContextName = c[e];
                    break;
                }
            } catch (f) {
            }
        }
        if (!d || !1 in d) {
            return null;
        } else {
            // If context is available, try to retrieve the debug features
            try {
                var debugInfo = d.getExtension('WEBGL_debug_renderer_info');
                canvasAttributes["uvdr"] = d.getParameter(debugInfo.UNMASKED_VENDOR_WEBGL);
                canvasAttributes["urdr"] = d.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL);
            } catch (f) {
            }         
        }
        b = "VENDOR VERSION RENDERER SHADING_LANGUAGE_VERSION DEPTH_BITS MAX_VERTEX_ATTRIBS MAX_VERTEX_TEXTURE_IMAGE_UNITS MAX_VARYING_VECTORS MAX_VERTEX_UNIFORM_VECTORS MAX_COMBINED_TEXTURE_IMAGE_UNITS MAX_TEXTURE_SIZE MAX_CUBE_MAP_TEXTURE_SIZE NUM_COMPRESSED_TEXTURE_FORMATS MAX_RENDERBUFFER_SIZE MAX_VIEWPORT_DIMS ALIASED_LINE_WIDTH_RANGE ALIASED_POINT_SIZE_RANGE".split(" ");
        var modernAttributes = {"VENDOR":"vdr", "RENDERER":"rdr"};
        for (c = 0; c < b.length; c++) {
            e = b[c];
            if (e in d) {
                if (e in modernAttributes) {
                    canvasAttributes[modernAttributes[e]] = d.getParameter(d[e]);
                }              
                hashAttributes[e] = d.getParameter(d[e]);
            }        
        }
        var cv = document.createElement("canvas");
        cv.setAttribute("style", "visibility:hidden");
        document.body.appendChild(cv);
        var t = "myword glyphs vext bunfiq jackz";
        var xt = cv.getContext("2d");
        // Draw as in legacy to keep hash the same
        DrawInCanvas(t, xt);
        hashAttributes["img"] = cv.toDataURL();
        // Draw with emoji test to get
        t += ", \ud83d\ude03";
        xt.clearRect(0, 0, cv.width, c.height);
        DrawInCanvas(t, xt);      
        canvasAttributes["iduh"] = window.MD5Hash(cv.toDataURL());
        document.body.removeChild(cv);
        return {
            legacy: hashAttributes,
            modern: canvasAttributes
        };
    }
    function DrawInCanvas(text, canvasContext) {
        canvasContext.font = "14px 'Arial'";
        canvasContext.fillStyle = "rgba(555, 0, 0, 0.9)";
        canvasContext.fillRect(125, 1, 62, 20);
        canvasContext.fillStyle = "rgba(77, 142, 1, 0.9)";
        canvasContext.fillText(text, 2, 15);
        canvasContext.fillStyle = "rgba(102, 204, 0, 0.7)";
        canvasContext.fillText(text, 4, 17);
    }
