//https://www.avon.ro/checkoutmobile/confirma/26036615/
var conversion_pixel_fired=true
function readCookie(name) 
{
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
var avonIntconversion = setInterval(function(){
    if(typeof(AvonAnalyticsObjex) != "undefined"){
        //if(typeof(AvonAnalyticsObjex) != "undefined"){
            if(AvonAnalyticsObjex != undefined && AvonAnalyticsObjex != "" && AvonAnalyticsObjex.order_product_skus != undefined && AvonAnalyticsObjex.order_product_skus.length > 0){
                if(conversion_pixel_fired == true){
                    clearInterval(avonIntconversion)
                    console.log("clearing")
                    trackConversion();
                    if(typeof(avonIntconversion) != "undefined"){
                        avonIntconversion = null
                    }
                }
            }
    }

}, 1000);
function trackConversion() {
    if((window.location.host == 'www.avon.ro' && window.location.pathname.indexOf("confirma") >= 0)){
        try{
        var _incProductsInfo= ""; // basket product details
        var _ivid = "";
            if (localStorage.getItem('inc_cookie') != null && localStorage.getItem('inc_cookie') != "" && localStorage.getItem('inc_cookie') != undefined) {
             _ivid = localStorage.getItem('inc_cookie');
            }

            if (_ivid == null || _ivid == "" || _ivid == undefined) {
             _ivid = readCookie('ivid');
            } 

        if(window.AvonAnalyticsObjex != undefined && window.AvonAnalyticsObjex != null){  
            conversion_pixel_fired=false;
            for(i=0; i < window.AvonAnalyticsObjex.order_product_skus.length; i++){       
            var unitPrice =  parseFloat(window.AvonAnalyticsObjex.order_product_price[i]/window.AvonAnalyticsObjex.order_product_quantity[i])
                _incProductsInfo += "p1=" + window.AvonAnalyticsObjex.order_product_skus[i] + "&p2=" + unitPrice + "&p3=" + window.AvonAnalyticsObjex.order_product_quantity[i] + "|"
            }
             _incProductsInfo = _incProductsInfo.replace(/\|$/, '');

            var _incConvPixData = '//optimizedby.increasingly.co/track?CONVERSION_PIXEL/clientId=285&orderId='+window.AvonAnalyticsObjex.order_ID+'&orderAmount='+window.AvonAnalyticsObjex.order_sub_total+'&orderStatus='+escape('completed')+'&currency='+window.AvonAnalyticsObjex.content_currency_code+'&discountAmount='+window.AvonAnalyticsObjex.order_discount_amount+'&couponCode='+window.AvonAnalyticsObjex.order_promo_code+'&storeCode='+window.AvonAnalyticsObjex.content_currency_code+'&ivid='+_ivid+'&productsInfo='+escape(_incProductsInfo)+'&cb='+Math.floor(Math.random()*999999);

            var _incConvPixElm = document.createElement('img');
            _incConvPixElm.setAttribute('border', '0');
            _incConvPixElm.setAttribute('width', '1');
            _incConvPixElm.setAttribute('height', '1');
            _incConvPixElm.setAttribute('src',_incConvPixData);
            _incConvPixElm.setAttribute('style','display:none');

            var _incConvPixPlaceToSet = document.querySelector('body');
            if(window.AvonAnalyticsObjex.order_ID != "")
                _incConvPixPlaceToSet.appendChild(_incConvPixElm);

        }
        } catch (err) {
            var formData = new FormData();
            formData.append("EmailId", "tech@increasingly.com");
            formData.append("Subject", 'Conversion pixel Error Avon shopwithmyrep');
            formData.append("Message", err.stack);
            var xhr = new XMLHttpRequest();
            xhr.open("POST", '//api.increasingly.co/SendEmail', true);
            xhr.send(formData);
        }
    }

}

