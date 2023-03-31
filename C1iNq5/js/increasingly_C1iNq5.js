var enableInc = false;
var cssfileload=false
function checkpagetype(){
    if (document.querySelector('.page-product-') != null || document.querySelector('.sd-product-spp') != null || document.querySelector('.page-product') != null || document.querySelector('meta[name="productId"]') != null || document.querySelector('.plp-wrapper') != null || document.querySelector('.products-grid-wrap') != null || document.querySelector('#viewcart') != null || document.querySelector('.viewcart-panel')!=null || document.querySelector('.sd-product-grid') != null || document.querySelector('.js-grid-item-product.js-grid-item') != null) {
        cssfileload = true;
        // enableInc = true
    }
}




function getVisitorId() {
    function generateUniqueINCVisitorId(len, bits) {
        var bits_ = bits || 36;
        var outStr = "";
        var newStr;
        while (outStr.length < len) {
            newStr = Math.random().toString(bits_).slice(2);
            outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
        }
        return outStr;
    }
    var ivid = "";
    if(readCookie('ivid') != undefined){
        ivid = readCookie('ivid')
    }
    var clientdomain = window.location.host;
    var d = new Date();
    if (ivid.length == 0) {
        ivid = generateUniqueINCVisitorId(42, 16);
        var arr = clientdomain.split(".");
        arr.shift();
        clientdomain = arr.join(".");
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = 'ivid=' + ivid + '; expires=' + expires + '; domain=' + clientdomain + '; path=/' + '; secure;'
    }else{
        arr = clientdomain.split(".");
        arr.shift();
        clientdomain = arr.join(".");
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        var expires_ = "expires=" + d.toUTCString();
        document.cookie = 'ivid=' + ivid + '; expires=' + expires_ + '; domain=' + clientdomain + '; path=/' + '; secure;'
    }
}

getVisitorId()
function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function isIE() {
   var ua = navigator.userAgent;
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    return is_ie;
}
function inc_assets_call(jsfile,cssfile,domaintype,passdomain){
    function addCSSFile() {
        var versionUpdate = (new Date()).getTime();
        var cssFilePath = cssfile + "?v=" + versionUpdate;
        var linkTag = document.createElement('link');
        linkTag.rel = "stylesheet";
        linkTag.href = cssFilePath;
        document.querySelector('head').appendChild(linkTag);
    }
    addCSSFile();
    var versionUpdate = (new Date()).getTime();
    var jsFilePath = jsfile + "?v=" + versionUpdate;
    var scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    if(domaintype == "Dev"){
        // scriptTag.setAttribute('integrity','sha384-fjKKH05v+QGu+qG5dyK7vjUPMwfPBu1/eW6EFt4oUlyvSLveadqyqR9R5+dRLxoa')
    }else{
        // scriptTag.setAttribute('integrity','sha384-XNrd7y20OKjSKIz5jMFwNoYMtUY2/sSAu+5MUfO9N3kUrK5ccNRJqv0DJCw5rL9S')
    }
    var domain =  passdomain.split('www.')[1]
    scriptTag.setAttribute('crossorigin', domain)
    scriptTag.src = jsFilePath;
    document.querySelector('body').appendChild(scriptTag);
}
if(isIE() == false){
    setTimeout(function() {
        checkpagetype()
        if (enableInc) { 
            var inc_cookie = readCookie('ivid')
            if (readCookie('ivid') != null) {
                var cook_ids = readCookie("ivid");
                try{
                    localStorage.setItem('inc_cookie', cook_ids);
                }
                catch(err){
                    err.stack
                }
            }
            checkpagetype()
            if(cssfileload == true){
                var data = {}
                if(inc_cookie != "" && inc_cookie != undefined){
                    data = { "eventData": btoa((JSON.stringify({"vid":inc_cookie,"token":"C1iNq5"}))) };
                }else{
                    data = { "eventData": btoa((JSON.stringify({"token": 'C1iNq5'}))) };
                }
                var eventdata = JSON.stringify(data)
                var p_url = '//rapidload.increasingly.co/increasingly_domain';
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == XMLHttpRequest.DONE) {
                        if (xhr.status == 200) {
                            if (xhr.responseText != "" && xhr.responseText != null) {
                                var resData = JSON.parse(xhr.responseText)
                                if(resData.bundlesEnabled == true){
                                    if(resData.domainType == "production"){
                                        // inc_assets_call(resData.jsFilePath,resData.cssFilePath,resData.domainType,resData.domain)
                                    }else{
                                        // inc_assets_call(resData.jsFilePath,resData.cssFilePath,resData.domainType,resData.domain)
                                    }
                                }
                            }
                        }
                    }
                };
                xhr.open("POST", p_url, true);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(eventdata);
            }
        }
    }, 600)
}