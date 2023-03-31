//logs ex in conversion pixel

var emailtrigger_flag=true
    //conversion pixel_code
    if(window.location.host == "www.petsathome.com" && window.location.href.indexOf("OrderShippingBillingConfirmationView") >= 0){
        function readCookie(name) {
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
        var checkout = false;
        var orderID = 0;
        var orderAmount=0;
        var produts;
        var currency = "GBP";
        var tax = 0;
        var discount = 0;
        var datalayer = dataLayer
        for(j=0;j<datalayer.length;j++){
            if (datalayer != null){
                if (datalayer[j].event == "purchase"){
                    checkout = true
                }
            }
        }
        var lpInt = setInterval(function(){
                try{
                    if(checkout){
                        var datalayer = dataLayer
                        for(j=0;j<datalayer.length;j++){
                            if (datalayer != null){
                                if (datalayer[j].event == "purchase"){
                                    currency = datalayer[j].currencyCode;
                                    orderAmount = dataLayer[j].ecommerce.purchase.actionField.revenue;
                                    tax = dataLayer[j].ecommerce.purchase.actionField.tax;
                                    discount = dataLayer[j].ecommerce.purchase.actionField.discount;
                                    if(discount == null | discount == ""){
                                        discount = "";
                                    }
                                    shipping = dataLayer[j].ecommerce.purchase.actionField.shipping;
                                    produts = dataLayer[j].ecommerce.purchase.products;
                                }
                            }
                        }
                        
                    } else{
                        if(emailtrigger_flag == true){
                            emailtrigger_flag = false
                            var formData = new FormData();
                            formData.append("EmailId", "nitish@increasingly.com");
                            formData.append("Subject", 'Conversion pixel data for PetsAtHome');
                            formData.append("Message", "Conversion Pixel");
                            var xhr = new XMLHttpRequest();
                            xhr.open("POST", '//api.increasingly.co/SendEmail', true);
                            xhr.send(formData);
                        }
                    }
                    if(yotpoTrackConversionData != undefined){
                        orderID = yotpoTrackConversionData.orderId;
                    }
                }
                catch{
                    if(emailtrigger_flag == true){
                        emailtrigger_flag = false;
                        var formData = new FormData();
                        formData.append("EmailId", "nitish@increasingly.com");
                        formData.append("Subject", 'Conversion pixel data  error for Aurate');
                        formData.append("Message", "Conversion Pixel");
                        var xhr = new XMLHttpRequest();
                        xhr.open("POST", '//api.increasingly.co/SendEmail', true);
                        xhr.send(formData);
                    }
                }
                if(produts != undefined && produts != null &&  produts.length > 0) {
                    clearInterval(lpInt);
                    console.log("track conversion calling")
                    if(conversion_pixel_flag){
                        trackConversion();
                    }
                }
        }, 200);
        function trackConversion() {
               try{
                var _incProductsInfo= ""; // basket product details
                var _ivid = "";
                console.log("called")
                    if (localStorage.getItem('inc_cookie') != null && localStorage.getItem('inc_cookie') != "" && localStorage.getItem('inc_cookie') != undefined) {
                    _ivid = localStorage.getItem('inc_cookie');
                    }
                    if (_ivid == null || _ivid == "" || _ivid == undefined) {
                    _ivid = readCookie('ivid');
                    }
                    if (produts != undefined && produts.length > 0) {
                        for (var i = 0; i < produts.length; i++) {
                            _incProductsInfo += "p1=" + produts[i].id + "&p2=" + produts[i].price + "&p3=" + produts[i].quantity + "&p4=" + produts[i].variant+"|"
                        }
                        _incProductsInfo = _incProductsInfo.replace(/\|$/, '');
                    }
                    var _incConvPixData = '//usaoptimizedby.increasingly.co/track?CONVERSION_PIXEL/clientId=178&orderId='+orderID+'&orderAmount='+orderAmount+'&orderStatus='+escape('completed')+'&currency='+currency+'&discountAmount='+discount+'&transactionTax='+tax+'&transactionShipping='+shipping+'&couponCode=&storeCode=US'+'&ivid='+_ivid+'&productsInfo='+escape(_incProductsInfo)+'&cb='+Math.floor(Math.random()*999999);
                    var _incConvPixElm = document.createElement('img');
                    _incConvPixElm.setAttribute('border', '0');
                    _incConvPixElm.setAttribute('width', '1');
                    _incConvPixElm.setAttribute('height', '1');
                    _incConvPixElm.setAttribute('src',_incConvPixData);
                    _incConvPixElm.setAttribute('style','display:none');
                    var _incConvPixPlaceToSet = document.querySelector('body');
                    if(orderID.length > 0)
                        _incConvPixPlaceToSet.appendChild(_incConvPixElm);
                        conversion_pixel_flag=false
                } catch (err) {
                    var formData = new FormData();
                    formData.append("EmailId", "nitish@increasingly.com");
                    formData.append("Subject", 'Conversion pixel Error for Aurate');
                    formData.append("Message", err.stack);
                    var xhr = new XMLHttpRequest();
                    xhr.open("POST", '//api.increasingly.co/SendEmail', true);
                    xhr.send(formData);
                }
        }
    }
    //end of conversion pixel


