/* eslint-disable no-inner-declarations */
if(window.location.host == "www.uat03p.pahtest.com" || window.location.host == 'www.petsathome.com'){
    if ((window.location.hostname == "www.petsathome.com" && window.location.href.indexOf("OrderShippingBillingConfirmationView") >= 0)) {
        setTimeout(function(){
            try{
                var conversion_pixel_flag = true;
                function readCookie(name){
                    try{
                        var nameEQ = name + "=";
                        if(document.cookie != undefined && document.cookie != "" && document.cookie != null && document.cookie.indexOf(";") > -1){
                                var ca = document.cookie.split(';');
                                for (var i = 0; i < ca.length; i++) {
                                var c = ca[i];
                                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                                }        
                        }
                        return null;   
                    }
                    catch(err){
                        return null;
                    }
                }
                var products;
                var orderID = 0;
                var totlrevenue = 0;
                var orderAmount = 0;
                var inctax = 0;
                var incship = 0;
                var collectproductids=[]
                var discount=0;
                var wkInt = setInterval(function(){
                    if(dataLayer != undefined){
                        for(d=0;d<dataLayer.length;d++){
                            if(dataLayer[d]["ecommerce"] != undefined && dataLayer[d]["ecommerce"]["purchase"]["products"] != undefined && dataLayer[d]["ecommerce"]["purchase"]["products"].length > 0){
                                products =  dataLayer[d]["ecommerce"]["purchase"]["products"];
                                orderID = dataLayer[d]["ecommerce"]["purchase"]["actionField"].id;
                                discount = dataLayer[d]["ecommerce"]["purchase"]["actionField"].discount;
                                if(discount == null | discount == ""){
                                    discount = "";
                                }
                                if(document.querySelectorAll('.checkout-confirmation-summary__product.checkout-confirmation-summary__product--discount .checkout-confirmation-summary__discounts')[1] != undefined){
                                    var eldiscprc=document.querySelectorAll('.checkout-confirmation-summary__product.checkout-confirmation-summary__product--discount .checkout-confirmation-summary__discounts')[1].innerText.replace('£','')
                                    discount = Math.abs(eldiscprc)
                                }
                                orderAmount = dataLayer[d].ecommerce.purchase.actionField.revenue;
                                inctax = dataLayer[d]["ecommerce"]["purchase"]["actionField"].tax;
                                incship = dataLayer[d]["ecommerce"]["purchase"]["actionField"].shipping;
                                totlrevenue = dataLayer[d]["ecommerce"]["purchase"]["actionField"].revenue;
                               
                            }
                        }
                        if (conversion_pixel_flag) {
                            clearInterval(wkInt);
                            console.log("track conversion calling")
                            trackConversion();
                        }
                    }
                }, 200);
                function trackConversion() {
                    if (window.location.hostname == "www.petsathome.com" && window.location.href.indexOf("OrderShippingBillingConfirmationView") >= 0) {
                        try{
                            conversion_pixel_flag = false
                            var _incProductsInfo= ""; 
                            var _ivid = "";
                            try{
                                if (localStorage.getItem('inc_cookie') != null && localStorage.getItem('inc_cookie') != "" && localStorage.getItem('inc_cookie') != undefined) {
                                _ivid = localStorage.getItem('inc_cookie');
                                }
                            }
                            catch(e){
                            
                            }
            
                            if (_ivid == null || _ivid == "" || _ivid == undefined) {
                                _ivid = readCookie('ivid');
                            } 
            
                            if(products != undefined && products != null){  
                                for(i=0; i < products.length; i++){       
                                    _incProductsInfo += "p1=" + products[i].id + "&p2=" + products[i].price + "&p3=" + products[i].quantity + "&p4=" + products[i].variant +"|"
                                }
                                
                                _incProductsInfo = _incProductsInfo.replace(/\|$/, '');
                                var currency = "GBP";
                                var _incConvPixData = '//optimizedby.increasingly.co/track?CONVERSION_PIXEL/clientId=203&orderId='+orderID+'&orderAmount='+orderAmount+'&orderStatus='+escape('complete')+'&currency='+currency+'&discountAmount='+discount+'&transactionTax=' + inctax + '&transactionShipping=' + incship + '&couponCode=&storeCode='+currency+'&ivid='+_ivid+'&productsInfo='+escape(_incProductsInfo)+'&cb='+Math.floor(Math.random()*999999);
                                console.log("data -- " + _incConvPixData)
                                var _incConvPixElm = document.createElement('img');
                                _incConvPixElm.setAttribute('border', '0');
                                _incConvPixElm.setAttribute('width', '1');
                                _incConvPixElm.setAttribute('height', '1');
                                _incConvPixElm.setAttribute('src',_incConvPixData);
                                _incConvPixElm.setAttribute('style','display:none');
            
                                var _incConvPixPlaceToSet = document.querySelector('body');
                                if(orderID != ""){
                                    console.log(_incConvPixElm)
                                    _incConvPixPlaceToSet.appendChild(_incConvPixElm);
                                }
                                
                                try{
                                    var added_prodbundle=false;
                                    for(i2=0;i2<dataLayer.length;i2++){
                                        if(dataLayer[i2]["ecommerce"] != undefined && dataLayer[i2]["ecommerce"]["purchase"]["products"] != undefined && dataLayer[i2]["ecommerce"]["purchase"]["products"].length > 0){
                                            var allprodc = dataLayer[i2]["ecommerce"]["purchase"]["products"]
                                            for(p1=0;p1<allprodc.length;p1++){
                                                var cookieaddeddetails=readCookie('ividData')
                                                if(cookieaddeddetails != undefined){
                                                    var addedp = JSON.parse(cookieaddeddetails)
                                                    for(h1=0;h1<addedp.length;h1++){
                                                        if(addedp[h1] != null){
                                                            if(addedp[h1].name == dataLayer[i2]["ecommerce"]["purchase"]["products"][p1].name || addedp[h1].id == dataLayer[i2]["ecommerce"]["purchase"]["products"][p1].id){
                                                                // dataLayer[i2]["ecommerce"]["purchase"]["products"][p1].product_type = 'Bundle'
                                                                added_prodbundle = true
                                                                // window.dataLayer = window.dataLayer || [];
                                                                // window.dataLayer.push({
                                                                //     'event' : 'GAEventNI',
                                                                //     'eventCategory' : 'Bundle',
                                                                //     'eventAction' : 'Purchased',
                                                                //     'eventLabel' : 'Bundle' //track if this was added as a bundle if true. If false 'No Bundle'
                                                                // });
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                    if(added_prodbundle == true){
                                        window.dataLayer = window.dataLayer || [];
                                        window.dataLayer.push({
                                            'event' : 'GAEventNI',
                                            'eventCategory' : 'Bundle',
                                            'eventAction' : 'Purchased',
                                            'eventLabel' : 'Bundle' //track if this was added as a bundle if true. If false 'No Bundle'
                                        });
                                    }else{
                                        window.dataLayer = window.dataLayer || [];
                                        window.dataLayer.push({
                                            'event' : 'GAEventNI',
                                            'eventCategory' : 'Bundle',
                                            'eventAction' : 'Purchased',
                                            'eventLabel' : 'No Bundle' //track if this was added as a bundle if true. If false 'No Bundle'
                                        });
                                    }
                                    setTimeout(function(){
                                        var clientDomain = window.location.host.replace("www", "");
                                        var emptyarra = []
                                        var d = new Date();
                                        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
                                        var expires = "expires=" + d.toUTCString();
                                        document.cookie = 'ividData=' + JSON.stringify(emptyarra) + '; expires=' + expires + '; domain=' + clientDomain + '; path=/' + '; secure:' + true + ';'
                                    },10)
                                }
                                catch (err1) {
                                }
                            }
                        } catch (err) {
                            var formData = new FormData();
                            formData.append("EmailId", "shashi@increasingly.com");
                            formData.append("Subject", 'Conversion pixel Error PAH');
                            formData.append("Message", err.stack);
                            var xhr = new XMLHttpRequest();
                            xhr.open("POST", '//api.increasingly.co/SendEmail', true);
                            xhr.send(formData);
                        }
                    }
                }
            }
            catch(er){
            
            }
        },2000);
    }else{
        if(window.location.href.indexOf("shop/Checkout") == -1 && window.location.pathname != '/shop/Checkout'){
            setTimeout(function(){
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
                
                function generateIcid() {
                    rvid = randomIvid(42, 16);
                    return rvid;
                }
                
                function randomIvid(len, bits) {
                    bits = bits || 36;
                    var outStr = "",
                        newStr;
                    while (outStr.length < len) {
                        newStr = Math.random().toString(bits).slice(2);
                        outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
                    }
                    return outStr;
                };
                
                function generate_html_tag(element, className) {
                    var generateEl = document.createElement(element);
                    className ? generateEl.classList.add(className) : null;
                    return generateEl;
                }
                
                function getVisitorId() {
                    var clientDomain = window.location.host.replace("www", "");
                    if (readCookie('ivid') == undefined || readCookie('ivid') == '' || readCookie('ivid') == null || readCookie('ivid') == 'null') {
                        var vid = ((readCookie('ivid') == undefined) || readCookie('ivid') == '' || (readCookie('ivid') == 'null')) ? generateIcid() : readCookie('ivid');
                        var d = new Date();
                        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
                        var expires = "expires=" + d.toUTCString();
                        document.cookie = 'ivid=' + vid + '; expires=' + expires + '; domain=' + clientDomain + '; path=/' + '; secure:' + true + ';'
                    }
                }
                getVisitorId()
                function getCurrentFormattedTime() {
                    var d = new Date();
                    var currentTime = (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds());
                    return currentTime;
                }
                function detectPage() {
                    if(window.location.pathname != '/webapp/wcs/stores/servlet/Checkout'){
                        if (document.querySelector('#pdp-accordion__description') != null) {
                            return "pdp";
                        }else if (document.querySelector('.products-grid-wrap') != null) {
                            return "productList";
                        } else if (document.querySelector('.plp-wrapper') != null) {
                            return "productList";
                        }else if (document.querySelector('.new-checkout') != null) {
                            return "cartPage";
                        }else if(document.querySelector('.basket-header')!=null){
                            return "cartPage";
                        }else if(document.querySelector('body').classList.contains('checkout-cart-index')){
                            return "cartPage";
                        }
                    }
                }
                function assets_c(){
                    
                    function addCSSFile() {
                        var versionUpdate = (new Date()).getTime();
                        var cssFilePath = "https://www.increasingly.co/Implementation/p3ThM9/prod_rec/css/p3ThM9.css?v=" + versionUpdate;
                        var linkTag = document.createElement('link');
                        linkTag.rel = "stylesheet";
                        linkTag.href = cssFilePath;
                        document.querySelector('head').appendChild(linkTag);
                    }
                    addCSSFile();
                    var versionUpdate = (new Date()).getTime();
                    var jsFilePath = "https://www.increasingly.co/Implementation/p3ThM9/prod_rec/js/p3ThM9.js?v=" + versionUpdate;
                    var scriptTag = document.createElement('script');
                    scriptTag.type = 'text/javascript';
                    scriptTag.src = jsFilePath;
                    document.querySelector('body').appendChild(scriptTag);  
                    
                }
                var load_script = true;


                if ((window.location.hostname == "www.petsathome.com" && window.location.href.indexOf("shop/OrderShippingBillingConfirmationView") >= 0)) {
                    load_script = false;
                }
                if(window.location.href.indexOf('shop/Checkout') >= 0){
                    load_script = false;
                }
                var inc_cookie = readCookie('ivid')
                if (readCookie('ivid') != null) {
                    var cook_ids = readCookie("ivid");
                    localStorage.setItem('inc_cookie', cook_ids);
                }
                
                if((detectPage() == "pdp" || detectPage() == "cartPage" || detectPage() == "productList")){
                    if(load_script == true){
                        if(document.querySelector('.onetrust') != null){
                            if(document.querySelector('.onetrust').style.display == "flex"){
                                var eltrustcookie=document.querySelector('.onetrust .onetrust__btn')
                                if(eltrustcookie != null){
                                    eltrustcookie.addEventListener('click',function(){
                                        if((detectPage() == "pdp" || detectPage() == "cartPage" || detectPage() == "productList")){
                                            assets_c()
                                        }
                                    })
                                }
                                return;
                            }
                        }
                        assets_c()
                    }  
                }else{ 
                    if(window.location.href.indexOf('multipack=1') >= 0){
                        function addCSSFile() {
                            var versionUpdate = (new Date()).getTime();
                            var cssFilePath = "https://www.increasingly.co/Implementation/p3ThM9/p3ThM9_gs/css/pah_c.css?v="+versionUpdate;
                            var linkTag = document.createElement('link');
                            linkTag.rel = "stylesheet";
                            linkTag.href = cssFilePath;
                            document.querySelector('head').appendChild(linkTag);
                        }
                        addCSSFile()
                        var versionUpdate = (new Date()).getTime();
                        var jsFilePath = "https://www.increasingly.co/Implementation/p3ThM9/p3ThM9_gs/multipack/js/PAH_multi_r.js?v="+versionUpdate;
                        var scriptTag = document.createElement('script');
                        scriptTag.type = 'text/javascript';
                        scriptTag.src = jsFilePath;
                        document.querySelector('body').appendChild(scriptTag);
                        //   var versionUpdate = (new Date()).getTime();
                        //   var jsFilePath = "https://www.increasingly.co/Implementation/p3ThM9/p3ThM9_gs/multipack/js/PAH.js?v="+versionUpdate;
                        //   var scriptTag = document.createElement('script');
                        //   scriptTag.type = 'text/javascript';
                        //   scriptTag.src = jsFilePath;
                        //   document.querySelector('body').appendChild(scriptTag);
                    }else{
                        if((window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=2') >= 0 || window.location.href.indexOf('incgs=3') >= 0)){
                            function addCSSFile() {
                                var versionUpdate = (new Date()).getTime();
                                var cssFilePath = "https://www.increasingly.co/Implementation/p3ThM9/p3ThM9_gs/css/pah_c.css?v="+versionUpdate;
                                var linkTag = document.createElement('link');
                                linkTag.rel = "stylesheet";
                                linkTag.href = cssFilePath;
                                document.querySelector('head').appendChild(linkTag);
                            }
                            addCSSFile()
                            var versionUpdate = (new Date()).getTime();
                            var jsFilePath = "https://www.increasingly.co/Implementation/p3ThM9/p3ThM9_gs/js/PAH_r.js?v="+versionUpdate;
                            var scriptTag = document.createElement('script');
                            scriptTag.type = 'text/javascript';
                            scriptTag.src = jsFilePath;
                            document.querySelector('body').appendChild(scriptTag);
                            // var versionUpdate = (new Date()).getTime();
                            // var jsFilePath = "https://www.increasingly.co/Implementation/p3ThM9/p3ThM9_gs/js/PAH.js?v="+versionUpdate;
                            // var scriptTag = document.createElement('script');
                            // scriptTag.type = 'text/javascript';
                            // scriptTag.src = jsFilePath;
                            // document.querySelector('body').appendChild(scriptTag);
                        }
                    }
                }
                setTimeout(function(){
                    var elmrem=document.querySelectorAll('.dth-mini-basket__items__qty-remove')
                    if(elmrem[0] != undefined){
                        for(c=0;c<elmrem.length;c++){
                            elmrem[c].addEventListener('click',function(){
                                setTimeout(function () {
                                    var idlayer = 0
                                    for(q=0;q<dataLayer.length;q++){
                                        if(dataLayer[q].event == "removeFromCart"){
                                            var idlayer = q
                                            if(dataLayer[q+1] != undefined){
                                                if(dataLayer[q+1].event == "removeFromCart"){
                                                    idlayer = q+1
                                                }
                                            }
                                            if(dataLayer[q+2] != undefined){
                                                if(dataLayer[q+2].event == "removeFromCart"){
                                                    idlayer = q+2
                                                }
                                            }
                                            if(dataLayer[q+3] != undefined){
                                                if(dataLayer[q+3].event == "removeFromCart"){
                                                    idlayer = q+3
                                                }
                                            }
                                            if(dataLayer[q+4] != undefined){
                                                if(dataLayer[q+4].event == "removeFromCart"){
                                                    idlayer = q+4
                                                }
                                            }
                                            
                                        }
                                    }
                                    if(dataLayer[idlayer] != undefined){
                                        if(dataLayer[idlayer]["ecommerce"] != undefined){
                                            if(dataLayer[idlayer]["ecommerce"]["remove"] != undefined){
                                                if(dataLayer[idlayer]["ecommerce"]["remove"]["products"] != undefined){
                                                    if(dataLayer[idlayer]["ecommerce"]["remove"]["products"][0] != undefined){
                                                        var addedflag = false; 
                                                        var cookieaddeddetails=readCookie('ividData')
                                                        if(cookieaddeddetails != undefined){
                                                            var addedp = JSON.parse(cookieaddeddetails)
                                                            for(h=0;h<addedp.length;h++){
                                                                if(addedp[h] != null){
                                                                    if(addedp[h].name.trim().toLocaleLowerCase() == dataLayer[idlayer]["ecommerce"]["remove"]["products"][0].name.trim().toLocaleLowerCase() || addedp[h].id == dataLayer[idlayer]["ecommerce"]["remove"]["products"][0].id || addedp[h].variant == dataLayer[idlayer]["ecommerce"]["remove"]["products"][0].variant){
                                                                        addedflag = true;
                                                                        delete addedp[h];
                                                                        var clientDomain = window.location.host.replace("www", "");
                                                                        var d = new Date();
                                                                        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
                                                                        var expires = "expires=" + d.toUTCString();
                                                                        document.cookie = 'ividData=' + JSON.stringify(addedp) + '; expires=' + expires + '; domain=' + clientDomain + '; path=/' + '; secure:' + true + ';'
                                                                    }
                                                                }
                                                            }
                                                            if(addedflag == true){
                                                                dataLayer[idlayer]["ecommerce"]["remove"]["products"][0].product_type = 'Bundle'
                                                            }else{
                                                                if(dataLayer[idlayer]["ecommerce"]["remove"]["products"][0].product_type == undefined){
                                                                    dataLayer[idlayer]["ecommerce"]["remove"]["products"][0].product_type = 'No Bundle'
                                                                }
                                                            }
                                                        }else{
                                                            if(dataLayer[idlayer]["ecommerce"]["remove"]["products"][0].product_type == undefined){
                                                                dataLayer[idlayer]["ecommerce"]["remove"]["products"][0].product_type = 'No Bundle'
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }, 2000)
                            })
                        }
                    }
                    if(window.location.pathname == '/shop/Checkout'){
                        for(q1=0;q1<dataLayer.length;q1++){
                            if(dataLayer[q1].event == "checkout"){
                                var allprodc = dataLayer[q1]["ecommerce"]["checkout"].products
                                for(p1=0;p1<allprodc.length;p1++){
                                    var cookieaddeddetails=readCookie('ividData')
                                    if(cookieaddeddetails != undefined){
                                        var addedp = JSON.parse(cookieaddeddetails)
                                        var checkoutaddedflag = false; 
                                        for(h1=0;h1<addedp.length;h1++){
                                            if(addedp[h1] != null){
                                                if(addedp[h1].name.trim().toLocaleLowerCase() == dataLayer[q1]["ecommerce"]["checkout"].products[p1].name.trim().toLocaleLowerCase() || addedp[h1].id == dataLayer[q1]["ecommerce"]["checkout"].products[p1].id || addedp[h1].variant == dataLayer[q1]["ecommerce"]["checkout"].products[p1].variant){
                                                    checkoutaddedflag = true
                                                    dataLayer[q1]["ecommerce"]["checkout"].products[p1].product_type = 'Bundle'
                                                }
                                            }
                                        }
                                        if(checkoutaddedflag == true){
                                            dataLayer[q1]["ecommerce"]["checkout"].products[p1].product_type = 'Bundle'
                                        }else {
                                            if(dataLayer[q1]["ecommerce"]["checkout"].products[p1].product_type == undefined){
                                                dataLayer[q1]["ecommerce"]["checkout"].products[p1].product_type = 'No Bundle'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },1000)
            },1000)
        }else{
            setTimeout(function(){
                function readCookie(name){
                    try{
                        var nameEQ = name + "=";
                        if(document.cookie != undefined && document.cookie != "" && document.cookie != null && document.cookie.indexOf(";") > -1){
                                var ca = document.cookie.split(';');
                                for (var i = 0; i < ca.length; i++) {
                                var c = ca[i];
                                while (c.charAt(0) == ' ') c = c.substring(1, c.length);
                                if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
                                }        
                        }
                        return null;   
                    }
                    catch(err){
                        return null;
                    }
                }
                setTimeout(function(){
                    var elmrem=document.querySelectorAll('.dth-mini-basket__items__qty-remove')
                    if(elmrem[0] != undefined){
                        for(c=0;c<elmrem.length;c++){
                            elmrem[c].addEventListener('click',function(){
                                setTimeout(function () {
                                    var idlayer = 0
                                    for(q=0;q<dataLayer.length;q++){
                                        if(dataLayer[q].event == "removeFromCart"){
                                            var idlayer = q
                                            if(dataLayer[q+1] != undefined){
                                                if(dataLayer[q+1].event == "removeFromCart"){
                                                    idlayer = q+1
                                                }
                                            }
                                            if(dataLayer[q+2] != undefined){
                                                if(dataLayer[q+2].event == "removeFromCart"){
                                                    idlayer = q+2
                                                }
                                            }
                                            if(dataLayer[q+3] != undefined){
                                                if(dataLayer[q+3].event == "removeFromCart"){
                                                    idlayer = q+3
                                                }
                                            }
                                            if(dataLayer[q+4] != undefined){
                                                if(dataLayer[q+4].event == "removeFromCart"){
                                                    idlayer = q+4
                                                }
                                            }
                                            
                                        }
                                    }
                                    if(dataLayer[idlayer] != undefined){
                                        if(dataLayer[idlayer]["ecommerce"] != undefined){
                                            if(dataLayer[idlayer]["ecommerce"]["remove"] != undefined){
                                                if(dataLayer[idlayer]["ecommerce"]["remove"]["products"] != undefined){
                                                    if(dataLayer[idlayer]["ecommerce"]["remove"]["products"][0] != undefined){
                                                        var addedflag = false; 
                                                        var cookieaddeddetails=readCookie('ividData')
                                                        if(cookieaddeddetails != undefined){
                                                            var addedp = JSON.parse(cookieaddeddetails)
                                                            for(h=0;h<addedp.length;h++){
                                                                if(addedp[h] != null){
                                                                    if(addedp[h].name.trim().toLocaleLowerCase() == dataLayer[idlayer]["ecommerce"]["remove"]["products"][0].name.trim().toLocaleLowerCase() || addedp[h].id == dataLayer[idlayer]["ecommerce"]["remove"]["products"][0].id || addedp[h].variant == dataLayer[idlayer]["ecommerce"]["remove"]["products"][0].variant){
                                                                        addedflag = true;
                                                                        delete addedp[h];
                                                                        var clientDomain = window.location.host.replace("www", "");
                                                                        var d = new Date();
                                                                        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
                                                                        var expires = "expires=" + d.toUTCString();
                                                                        document.cookie = 'ividData=' + JSON.stringify(addedp) + '; expires=' + expires + '; domain=' + clientDomain + '; path=/' + '; secure:' + true + ';'
                                                                    }
                                                                }
                                                            }
                                                            if(addedflag == true){
                                                                dataLayer[idlayer]["ecommerce"]["remove"]["products"][0].product_type = 'Bundle'
                                                            }else{
                                                                if(dataLayer[idlayer]["ecommerce"]["remove"]["products"][0].product_type == undefined){
                                                                    dataLayer[idlayer]["ecommerce"]["remove"]["products"][0].product_type = 'No Bundle'
                                                                }
                                                            }
                                                        }else{
                                                            if(dataLayer[idlayer]["ecommerce"]["remove"]["products"][0].product_type == undefined){
                                                                dataLayer[idlayer]["ecommerce"]["remove"]["products"][0].product_type = 'No Bundle'
                                                            }
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                    }
                                }, 2000)
                            })
                        }
                    }
                    if(window.location.pathname == '/shop/Checkout'){
                        for(q1=0;q1<dataLayer.length;q1++){
                            if(dataLayer[q1].event == "checkout"){
                                var allprodc = dataLayer[q1]["ecommerce"]["checkout"].products
                                for(p1=0;p1<allprodc.length;p1++){
                                    var cookieaddeddetails=readCookie('ividData')
                                    if(cookieaddeddetails != undefined){
                                        var addedp = JSON.parse(cookieaddeddetails)
                                        var checkoutaddedflag = false; 
                                        for(h1=0;h1<addedp.length;h1++){
                                            if(addedp[h1] != null){
                                                if(addedp[h1].name.trim().toLocaleLowerCase() == dataLayer[q1]["ecommerce"]["checkout"].products[p1].name.trim().toLocaleLowerCase() || addedp[h1].id == dataLayer[q1]["ecommerce"]["checkout"].products[p1].id || addedp[h1].variant == dataLayer[q1]["ecommerce"]["checkout"].products[p1].variant){
                                                    checkoutaddedflag = true
                                                    dataLayer[q1]["ecommerce"]["checkout"].products[p1].product_type = 'Bundle'
                                                }
                                            }
                                        }
                                        if(checkoutaddedflag == true){
                                            dataLayer[q1]["ecommerce"]["checkout"].products[p1].product_type = 'Bundle'
                                        }else {
                                            if(dataLayer[q1]["ecommerce"]["checkout"].products[p1].product_type == undefined){
                                                dataLayer[q1]["ecommerce"]["checkout"].products[p1].product_type = 'No Bundle'
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                },1000)
            },2000)
        }
        if(window.location.href.indexOf('incnvgs=nvgGS') >= 0){
            setTimeout(function(){
                if(document.querySelector('.pr-btn-review.pr-accessible-btn') != null){
                    var elbtnaccisble = document.querySelector('.pr-btn-review.pr-accessible-btn')
                    elbtnaccisble.addEventListener('click',function(){
                        var checkthankyou = setInterval(function(){
                            if(document.querySelector('.thank-you-page h5 a') != null){
                                clearInterval(checkthankyou)
                                document.querySelector('.thank-you-page h5 a').href = localStorage.getItem('incGSurl')
                            }
                        },100)
                    })
                }
            },3000)
        }
    }
}
