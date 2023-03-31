//https://www.e-hapi.com/shop/order/order.aspx?order_id=2302201828037528
function generateRandomString(bits1) {
    return (crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295).toString(bits1).substring(2, 15) + (crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295).toString(bits1).substring(2, 15);
}


function getVisitorId() {
    function generateUniqueINCVisitorId(len, bits) {
        var bits1 = bits || 36;
        var outStr = "";
        var newStr;
        while (outStr.length < len) {
            newStr = generateRandomString(bits1).toString().slice(2);
            outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
        }
        return outStr;
    }
    var clientdomain = window.location.host
    var arr = clientdomain.split(".");
    var d = new Date();
    var expires = "expires=" + d.toUTCString();
    var ivid = "";
    if(readCookie('ivid') != undefined){
        ivid = readCookie('ivid')
    }
    if (ivid.length == 0) {
        ivid = generateUniqueINCVisitorId(42, 16);
        arr.shift();
        clientdomain = arr.join(".");
        if(arr == 'com' || window.location.host.indexOf('www') == -1){
            clientdomain = window.location.host;
        }
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        expires = "expires=" + d.toUTCString();
        document.cookie = 'ivid=' + ivid + '; expires=' + expires + '; domain=' + clientdomain + '; path=/' + '; secure;'
    }else{
        arr.shift();
        clientdomain = arr.join(".");
        if(arr == 'com' || window.location.host.indexOf('www') == -1){
            clientdomain = window.location.host;
        }
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        expires = "expires=" + d.toUTCString();
        document.cookie = 'ivid=' + ivid + '; expires=' + expires + '; domain=' + clientdomain + '; path=/' + '; secure;'
    }
    return ivid;
}
getVisitorId()

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var s of ca) {
        var c = s;
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
    if (window.innerWidth < 1367 && window.innerWidth > 600) {
        document.querySelector('body').classList.add('safari_browser')
    } else if (window.innerWidth > 1367) {
        document.querySelector('body').classList.add('safari_browser_inc')
    }
}

if (readCookie('ivid') != null) {
    var cook_ids = readCookie("ivid");
    localStorage.setItem('inc_cookie', cook_ids);
}

if (window.location.hostname == 'www.e-hapi.com' && window.location.href.indexOf("order/order.aspx") >= 0) {
    setTimeout(function(){
        try{
            var conversion_pixel_flag = true;
            var optimisedtrack = "//jpoptimizedby.increasingly.co"
            var client_id = '287'
            var products;
            var orderID = 0;
            var orderAmount = 0;
            var inctax = 0;
            var incship = 0;
            var curencyinc = "JPY"
            var couponcode=""
            var incdisc=0
            var wkInt = setInterval(function(){
                if(window.dataLayer != undefined){
                    for (var daprd of window.dataLayer) {
                        if(daprd != null){
                            for(var ip=0;ip<daprd.length;ip++){
                                if(daprd[ip].items != undefined && daprd[ip].items.length > 0 && daprd[ip].transaction_id != undefined && daprd[ip].value != undefined){
                                    products =  daprd[ip].items;
                                    orderID =  daprd[ip].transaction_id;
                                    orderAmount = daprd[ip].value;
                                    incship = daprd[ip].shipping;
                                    if(daprd[ip].tax != ""){
                                        inctax = daprd[ip].tax;
                                    }
                                }
                            }
                        }
                    }
                    if (conversion_pixel_flag && orderID != undefined && orderID != 0) {
                        clearInterval(wkInt);
                        console.log("track conversion calling")
                        trackConversion();
                    }
                }
            }, 200);
            // eslint-disable-next-line no-inner-declarations
            function trackConversion() {
                try{
                    conversion_pixel_flag = false
                    var _incProductsInfo= ""; 
                    var _ivid = "";
                        if (localStorage.getItem('inc_cookie') != null && localStorage.getItem('inc_cookie') != "" && localStorage.getItem('inc_cookie') != undefined) {
                        _ivid = localStorage.getItem('inc_cookie');
                        }
    
                        if (_ivid == null || _ivid == "" || _ivid == undefined) {
                        _ivid = readCookie('ivid');
                        } 
    
                    if(products != undefined && products != null){ 
                        for (var prdetails of products) { 
                            if(prdetails.price != 0){
                                var p4id = prdetails.item_id
                                var p1id = prdetails.item_id
                                if(prdetails.goods != undefined){
                                    p4id = prdetails.goods
                                }
                                _incProductsInfo += "p1=" + p1id + "&p2=" + prdetails.price + "&p3=" + prdetails.quantity + "&p4=" + p4id +"|"
                            }
                        }
                        _incProductsInfo = _incProductsInfo.replace(/\|$/, '');

                        var _incConvPixData = ''+optimisedtrack+'/track?CONVERSION_PIXEL/clientId='+client_id+'&orderId='+orderID+'&orderAmount='+orderAmount+'&orderStatus='+escape('complete')+'&currency='+curencyinc+'&discountAmount=&transactionTax=' + inctax + '&transactionShipping=' + incship + '&couponCode='+couponcode+'&storeCode='+curencyinc+'&ivid='+_ivid+'&productsInfo='+escape(_incProductsInfo)+'&cb='+Math.floor(Math.random()*999999);
                            console.log("data -- " + _incConvPixData)
                        
                        var _incConvPixElm = document.createElement('img');
                        _incConvPixElm.setAttribute('border', '0');
                        _incConvPixElm.setAttribute('width', '1');
                        _incConvPixElm.setAttribute('height', '1');
                        _incConvPixElm.setAttribute('src',_incConvPixData);
                        _incConvPixElm.setAttribute('style','display:none');
                        var _incConvPixPlaceToSet = document.querySelector('body');
                        _incConvPixPlaceToSet.appendChild(_incConvPixElm);
                    }
                } catch (err) {
                    var formData = new FormData();
                    formData.append("EmailId", "tech@increasingly.com");
                    formData.append("Subject", 'Conversion pixel Error on E-hapi');
                    formData.append("Message", err.stack);
                    var xhr = new XMLHttpRequest();
                    xhr.open("POST", '//api.increasingly.co/SendEmail', true);
                    xhr.send(formData);
                }
            }
        }
        catch(er){
            console.log("e")
        }
    },1500);
}


