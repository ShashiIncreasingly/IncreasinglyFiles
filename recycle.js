// https://loft.omni7.jp/addcart/OP_OSA0020_002_22Action.do

// org.apache.struts.taglib.html.TOKEN: b7224ca36a1a3735960e6746540a9c86
// addCartEntity.addCartGoodsInfoList[0].buyCnt: 1
// addCartEntity.corporationCode: 050
// addCartEntity.siteCode: 0009
// addCartEntity.drugConsentResult: 0
// monogrammingContent: 
// addCartEntity.destinationURL: https://loft.omni7.jp/detail/4000512364863
// addCartEntity.buttonType: 0
// addCartEntity.addCartGoodsInfoList[0].corporationItemCode: 4000512364863
// addCartEntity.addCartGoodsInfoList[0].corporationGoodsCode: 4000512364863
// addCartEntity.addCartGoodsInfoList[0].buyPeriodCode: 
// addCartEntity.addCartGoodsInfoList[0].selectedFlg: 1
// omni.request.osz.common.setCartMarkcode: 26ea12b2da4d2d1f9873e2684e2d1166

// //text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9

// // content-application/x-www-form-urlencoded


// var taglibtoken = document.querySelector('input[name = "org.apache.struts.taglib.html.TOKEN"]').value
// var setcartmcode = document.querySelector('input[name = "omni.request.osz.common.setCartMarkcode"]').value
// var site_code = document.querySelector('input[name = "addCartEntity.siteCode"]').value
// var corporation_Code = document.querySelector('input[name = "addCartEntity.corporationCode"]').value
// var drugConsent_Result = document.querySelector('input[name = "addCartEntity.drugConsentResult"]').value


// var paramss='addCartEntity.addCartGoodsInfoList%5B0%5D.buyCnt=1&addCartEntity.corporationCode=050&addCartEntity.siteCode=0009&addCartEntity.drugConsentResult=0&monogrammingContent=&addCartEntity.destinationURL=https%3A%2F%2Floft.omni7.jp%2Fdetail%2F4000512364863&addCartEntity.buttonType=0&addCartEntity.addCartGoodsInfoList%5B0%5D.corporationItemCode=4000512364863&addCartEntity.addCartGoodsInfoList%5B0%5D.corporationGoodsCode=4000512364863&addCartEntity.addCartGoodsInfoList%5B0%5D.buyPeriodCode=&addCartEntity.addCartGoodsInfoList%5B0%5D.selectedFlg=1&omni.request.osz.common.setCartMarkcode=9d0b60d8bcc968500524bbd3dd82377d'

// var params = 'org.apache.struts.taglib.html.TOKEN='+taglibtoken+'&addCartEntity.addCartGoodsInfoList%5B0%5D.buyCnt=1&addCartEntity.corporationCode='+corporation_Code+'&addCartEntity.siteCode='+site_code+'&addCartEntity.drugConsentResult='+drugConsent_Result+'&monogrammingContent=&addCartEntity.destinationURL: https://loft.omni7.jp/detail/4000512364863&addCartEntity.buttonType=0&addCartEntity.addCartGoodsInfoList%5B0%5D.corporationItemCode=4000512364863&addCartEntity.addCartGoodsInfoList%5B0%5D.corporationGoodsCode=4000512364863&addCartEntity.addCartGoodsInfoList%5B0%5D.buyPeriodCode=&addCartEntity.addCartGoodsInfoList%5B0%5D.selectedFlg=1&omni.request.osz.common.setCartMarkcode='+setcartmcode+''

// var added = document.querySelector('#cart_whole').getAttribute('name').replace('Form','')
// var xhr = new XMLHttpRequest();
// xhr.open('POST', 'https://loft.omni7.jp/addcart/'+added+'Action.do', true);
// xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
// xhr.onload = function () { }
// xhr.onreadystatechange = function () {
//     if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
//         var reporting_ul = document.querySelector('.get_allclient_list_dropdown')
//         if(xhr.responseText != ""){
            
//         }
//     }
// }
// xhr.send(paramss);

// //https://loft.omni7.jp/detail/4521186146147?intpr=loft_frmng_detail_recommend_cate&siteCateCode=0800902500030000

// //text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9
// //upgrade-insecure-requests: 1
// // content-application/x-www-form-urlencoded

// var taglibtoken = document.querySelector('input[name = "org.apache.struts.taglib.html.TOKEN"]').value
// var setcartmcode = document.querySelector('input[name = "omni.request.osz.common.setCartMarkcode"]').value
// var site_code = document.querySelector('input[name = "addCartEntity.siteCode"]').value
// var corporation_Code = document.querySelector('input[name = "addCartEntity.corporationCode"]').value
// var drugConsent_Result = document.querySelector('input[name = "addCartEntity.drugConsentResult"]').value

// var formData = []
// var data0 = {};
// data0["org.apache.struts.taglib.html.TOKEN"] = taglibtoken;
// data0["addCartEntity.addCartGoodsInfoList[0].buyCnt"] = 1;
// data0["addCartEntity.corporationCode"] = corporation_Code;
// data0["addCartEntity.siteCode"] = site_code;
// data0["addCartEntity.drugConsentResult"] = 0;
// data0["addCartEntity.destinationURL"] = 'https://loft.omni7.jp/detail/4000512364863';
// data0["buttonType"] = 0;
// data0["addCartEntity.addCartGoodsInfoList[0].corporationItemCode"] = '4000512364863';
// data0["addCartEntity.addCartGoodsInfoList[0].corporationGoodsCode"] = '4000512364863';
// data0["addCartEntity.addCartGoodsInfoList[0].buyPeriodCode"] = '';
// data0["addCartEntity.addCartGoodsInfoList[0].selectedFlg"] = 1;
// data0["omni.request.osz.common.setCartMarkcode"] = setcartmcode;


// formData.push(data0);
// jQuery.ajax({
//     type: "POST",
//     url: '/addcart/OP_OSA0020_002_22Action.do',
//     crossOrigin: true,
//     headers: {
//         'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
//         'Content-Type': 'application/x-www-form-urlencoded'
//     },
//     data: formData[0],
//     contentType:'application/x-www-form-urlencoded',
//     error: function(jqXHR, textStatus, errorMessage) {                    },
//     success: function(data) {
//     }
// });







// https://www.omni7.jp/cart/OP_OSE0100_001_01.do





// var taglibtoken = document.querySelector('input[name = "org.apache.struts.taglib.html.TOKEN"]').value
// var setcartmcode = document.querySelector('input[name = "omni.request.osz.common.setCartMarkcode"]').value
// var site_code = document.querySelector('input[name = "addCartEntity.siteCode"]').value
// var corporation_Code = document.querySelector('input[name = "addCartEntity.corporationCode"]').value
// var drugConsent_Result = document.querySelector('input[name = "addCartEntity.drugConsentResult"]').value

var formData = []
    formData = new FormData();
// var data0 = {};
// data0.append('org.apache.struts.taglib.html.TOKEN', taglibtoken);
// data0.append('addCartEntity.addCartGoodsInfoList[0].buyCnt', 1);
// data0.append('addCartEntity.corporationCode', corporation_Code);
// data0.append('addCartEntity.siteCode', site_code);
// data0.append('addCartEntity.drugConsentResult', 0);
// data0.append('addCartEntity.destinationURL', 'https://loft.omni7.jp/detail/4901005520288?recomParam=lo-detail-item-jiku-history-rec');
// data0.append('buttonType', 0);
// data0.append('addCartEntity.addCartGoodsInfoList[0].corporationItemCode', '4901005520288');
// data0.append('addCartEntity.addCartGoodsInfoList[0].corporationGoodsCode', '4901005520288');
// data0.append('addCartEntity.addCartGoodsInfoList[0].buyPeriodCode', '');
// data0.append('addCartEntity.addCartGoodsInfoList[0].selectedFlg', 1);
// data0.append('omni.request.osz.common.setCartMarkcode', setcartmcode);



// formData.push(data0);
// jQuery.ajax({
//     type: "POST",
//     url: '/addcart/OP_OSA0020_002_22Action.do',
//     crossOrigin: true,
//     // headers: {
//     //     'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
//     //     'Content-Type': 'application/x-www-form-urlencoded'
//     // },
//     data: formData[0],
// //     contentType:'application/x-www-form-urlencoded',
// processdata: false,
// processData: false,
//             contentType: false,
//     error: function(jqXHR, textStatus, errorMessage) {                    },
//     success: function(data) {
//     }
// });



// //adding getting

// var taglibtoken = document.querySelector('input[name = "org.apache.struts.taglib.html.TOKEN"]').value
// var setcartmcode = document.querySelector('input[name = "omni.request.osz.common.setCartMarkcode"]').value
// var site_code = document.querySelector('input[name = "addCartEntity.siteCode"]').value
// var corporation_Code = document.querySelector('input[name = "addCartEntity.corporationCode"]').value
// var drugConsent_Result = document.querySelector('input[name = "addCartEntity.drugConsentResult"]').value

// var formData = []
// var data0 = {};
// data0["org.apache.struts.taglib.html.TOKEN"] = taglibtoken;
// data0["addCartEntity.addCartGoodsInfoList[0].buyCnt"] = 1;
// data0["addCartEntity.corporationCode"] = corporation_Code;
// data0["addCartEntity.siteCode"] = site_code;
// data0["addCartEntity.drugConsentResult"] = 0;
// data0["addCartEntity.destinationURL"] = 'https://loft.omni7.jp/detail/4000512364863';
// data0["buttonType"] = 0;
// data0["addCartEntity.addCartGoodsInfoList[0].corporationItemCode"] = '4000512364863';
// data0["addCartEntity.addCartGoodsInfoList[0].corporationGoodsCode"] = '4000512364863';
// data0["addCartEntity.addCartGoodsInfoList[0].buyPeriodCode"] = '';
// data0["addCartEntity.addCartGoodsInfoList[0].selectedFlg"] = 1;
// data0["omni.request.osz.common.setCartMarkcode"] = setcartmcode;


// formData.push(data0);
// jQuery.ajax({
//     type: "POST",
//     url: '/addcart/OP_OSA0020_002_22Action.do',
// //     crossOrigin: true,
//     headers: {
//         'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
//         'Content-Type': 'application/x-www-form-urlencoded',
//         'sec-fetch-dest':'document',
//         'sec-fetch-mode':'navigate',
//         'sec-fetch-user':'?1',
//         'upgrade-insecure-requests':'1'

//     },
//     data: formData[0],
//     processdata: false,
//     error: function(jqXHR, textStatus, errorMessage) {   window.location.href = "https://www.omni7.jp/cart/OP_OSE0100_001_01.do"                 },
//     success: function(data) {
//     }
// });

$('.shashi').click(function(){
    var taglibtoken = document.querySelector('input[name = "org.apache.struts.taglib.html.TOKEN"]').value
    var setcartmcode = document.querySelector('input[name = "omni.request.osz.common.setCartMarkcode"]').value
    var site_code = document.querySelector('input[name = "addCartEntity.siteCode"]').value
    var corporation_Code = document.querySelector('input[name = "addCartEntity.corporationCode"]').value
    var drugConsent_Result = document.querySelector('input[name = "addCartEntity.drugConsentResult"]').value
    
    var formData = []
    var data0 = {};
    data0["org.apache.struts.taglib.html.TOKEN"] = taglibtoken;
    data0["addCartEntity.addCartGoodsInfoList[0].buyCnt"] = 1;
    data0["addCartEntity.corporationCode"] = corporation_Code;
    data0["addCartEntity.siteCode"] = site_code;
    data0["addCartEntity.drugConsentResult"] = 0;
    data0["addCartEntity.destinationURL"] = 'https://loft.omni7.jp/detail/4000512364863';
    data0["buttonType"] = 0;
    data0["addCartEntity.addCartGoodsInfoList[0].corporationItemCode"] = '4000512364863';
    data0["addCartEntity.addCartGoodsInfoList[0].corporationGoodsCode"] = '4000512364863';
    data0["addCartEntity.addCartGoodsInfoList[0].buyPeriodCode"] = '';
    data0["addCartEntity.addCartGoodsInfoList[0].selectedFlg"] = 1;
    data0["omni.request.osz.common.setCartMarkcode"] = setcartmcode;
    
    
    formData.push(data0);
    jQuery.ajax({
        type: "POST",
        url: '/addcart/OP_OSA0020_002_22Action.do',
    //     crossOrigin: true,
        headers: {
            'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
            'Content-Type': 'application/x-www-form-urlencoded',
            'upgrade-insecure-requests':'1'
    
        },
        data: formData[0],
        processdata: false,
        error: function(jqXHR, textStatus, errorMessage) {                    },
        success: function(data) {
        }
    });
})

var param = 'items%5B0%5D%5Bform_type%5D=product&items%5B0%5D%5Butf8%5D=%E2%9C%93&items%5B0%5D%5Boptions%5D%5BColor%5D=Black%2FBlack%20Stitching&items%5B0%5D%5Boptions%5D%5BSize%5D=XXS&items%5B0%5D%5Bid%5D=39860530184236&items%5B0%5D%5Bquantity%5D=1'
jQuery.ajax({
    type: "POST",
    url: 'https://www.rubylove.com/cart/add.js',
    data: param,
    error: function(jqXHR, textStatus, errorMessage) {
        
    },
    success: function(data) {
        var totalbagcount=document.querySelector('.js-cart-counter').innerText
        if (totalbagcount != 0) {
            if (document.querySelector('.js-minicart-items') != null) {
                var elmqty =  document.querySelectorAll('.minicart-product__columns-wrapper')[0]
                var elqtyv =  elmqty.querySelector('.minicart-product__quantity-input').value
                elmqty.querySelector('.minicart-product__quantity-button[aria-label="Increase quantity"]').click()
                elmqty.querySelector('.minicart-product__quantity-input').value = elqtyv
                setTimeout(function () {
                elmqty.querySelector('.minicart-product__quantity-input').value = elqtyv
                    elmqty.querySelector('.minicart-product__quantity-button[aria-label="Reduce quantity"]').click()
                }, 3000)
            }else{
                sessionStorage.setItem("reloading", "true")
                window.location.reload()
            }
        }
    }
});
var url2 = 'https://www.rubylove.com/cart.js'
var xhr2 = new XMLHttpRequest();
xhr2.open('GET', url2, false);
xhr2.onload = function() {}
xhr2.setRequestHeader('accept', '*/*');
xhr2.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        
    }
}
xhr2.send();


var url2 = 'https://www.ganni.com/on/demandware.store/Sites-ganni-Site/en_GB/Cart-MiniCartShow'
var xhr2 = new XMLHttpRequest();
xhr2.open('GET', url2, false);
xhr2.onload = function() {}
xhr2.setRequestHeader('accept', '*/*');
xhr2.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        
    }
}
xhr2.send();

var url3 = 'https://www.rubylove.com/cart.js?Dyo8o6fYTacbWPfPY=1'
var xhr3 = new XMLHttpRequest();
xhr3.open('GET', url3, false);
xhr3.onload = function() {}
xhr3.setRequestHeader('accept', '*/*');
xhr3.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        debugger
        var e = JSON.parse(xhr3.responseText)
        
        e.items.forEach(function(t) {
                if (null === t.properties)
                    return t.filteredProperties = {},
                    null;
                var e = Object.keys(t.properties);
                if (e.includes("_original_variant")) {
                    var n = t.properties._original_variant;
                    t.url = n.url
                }
                t.filteredProperties = e.reduce(function(e, n) {
                    return n.startsWith("_") || ["shipping_interval_unit_type", "shipping_interval_frequency"].includes(n) || (e[n] = t.properties[n]),
                    e
                }, {}),
                e.includes("shipping_interval_unit_type") && e.includes("shipping_interval_frequency") && (t.filteredProperties.Subscription = "".concat(t.properties.shipping_interval_frequency, " ").concat(t.properties.shipping_interval_unit_type))
            }),
            document.dispatchEvent(new CustomEvent("cart:item_count",{
                detail: {
                    item_count: e.item_count
                }
            })),
            
            window.cart = e
        
    
        
    }
}
xhr3.send();

//MIx tokyo
var url='https://mix.tokyo/b/pc/xml/Cart.html?mthd=91&mode=1&sc=MIX&item=531924060410038X%2C1&_=1603947011387'
jQuery.ajax({
    type: "GET",
    url: url,
    error: function(jqXHR, textStatus, errorMessage) {                    },
    success: function(data) {
    }
});

var url='https://mix.tokyo/b/pc/xml/Cart.html?mthd=91&mode=1&sc=MIX&item=531924060410038X%2C1'
jQuery.ajax({
    type: "GET",
    url: url,
    error: function(jqXHR, textStatus, errorMessage) {                    },
    success: function(data) {
    }
});

//toysrus
//    execAsyncJsonPost("../cart/CCtAddGoodsToCart_J.jsp","GOODS_NO=" + goodsNo + "&GOODS_CNT=" + goodsCnt + "&CFM_ID=" + cfmId + "&GOODS_STK_NO=" + goodsStkNo + "&REAL_PRICE=" + realPrice + "&URL_CONTEXT=" + urlContext, "addCartGoods_callback");
//cartCheckDispList("178928","654048100","1725")
var cfftoken=document.querySelector('input[name="CFM_ID"]').value
var goodsNo = "214353"
var goodsCnt = 1
var cfmId = cfftoken
var goodsStkNo = '691184600'
var urlContext = 'detail_cart_dialog'
execAsyncJsonPost("../cart/CCtAddGoodsToCart_J.jsp","GOODS_NO=" + goodsNo + "&GOODS_CNT=" + goodsCnt + "&CFM_ID=" + cfmId + "&GOODS_STK_NO=" + goodsStkNo + "&REAL_PRICE=" + realPrice + "&URL_CONTEXT=" + urlContext, "addCartGoods_callback");
var cfftoken=document.querySelector('input[name="CFM_ID"]').value
    var formData = []
    var data0 = {};
    data0["GOODS_NO"] = '214353';
    data0["GOODS_CNT"] = 1;
    data0["CFM_ID"] = cfftoken;
    data0["GOODS_STK_NO"] = '691184600';
//     data0["REAL_PRICE"] = '6991';
    data0["URL_CONTEXT"] = 'detail_cart_dialog';
    formData.push(data0);
    jQuery.ajax({
        type: "POST",
        url: 'https://www.toysrus.co.jp/cart/CCtAddGoodsToCart_J.jsp',
        data: formData[0],
        error: function(jqXHR, textStatus, errorMessage) {                    },
        success: function(data) {
        }
    });


    //gladd
        var formData = []
        var data0 = {};
        data0["sale_id"] = '74735';
        data0["product_id"] = '6216393';
        data0["quantity"] = 1;
        data0["size"] = '0';
        formData.push(data0);
        jQuery.ajax({
            type: "POST",
            // url: 'https://gladd.jp/members/ajax/add_cart_item',
            url:'https://gladd.jp/gld_api/cart/add',
            data: formData[0],
            error: function(jqXHR, textStatus, errorMessage) {                    },
            success: function(data) {
                document.querySelector('._inbag').click()
            }
        });
        //

//inc

// sale_id: 86389
// product_id: 7274064
// quantity: 1
// size: 14014612
    
var $add_to_cart_flg = 0;
if ($add_to_cart_flg === 0) {
    $add_to_cart_flg = 1;
    setTimeout(function () {
        $add_to_cart_flg = 0;
    }, 3000);

    var formData = []
    var data0 = {};
    data0["sale_id"] = '86389';
    data0["product_id"] = '7274064';
    data0["quantity"] = 1;
    data0["size"] = '14014612';
    formData.push(data0);
        jQuery.ajax({
        type: "POST",
        // url: 'https://gladd.jp/members/ajax/add_cart_item',
        url:'https://gladd.jp/gld_api/cart/add',
        data: formData[0],
        error: function(jqXHR, textStatus, errorMessage) {                    },
        success: function(data) {
            var json = data//JSON.parse(data)
            if (json.error && json.error === 'order_max_error') {
                $('a#check_cart').click();
                return false;
            }
            if (json.notice && json.notice === 'replace_order_quantity') {
                $('a#check_cart').click();
                return false;
            }

            $('div#alert_bag').remove();
            $('.header_inner').append(json.tmpl);
            $('div#alert_bag').slideDown('fast');

            setTimeout(function () {
                $('div#alert_bag').slideUp('fast');
            }, 4000);

            if (!json.error) {
                timelimit = new Date();
                if(json.cart_end_time == false){
                    timelimit.setTime(timelimit  * 1000);
                }else{
                    timelimit.setTime(json.cart_end_time * 1000);
                }
                
                $('#inBag').text(json.total_qty);
                set_tab_countdown(timelimit);
                // Amplitude送信
                var desc = $('meta[name="description"]').attr('content').split('｜');
                var str = desc[0].split('-');
                var productName = str[1];
                var brandName = $('meta[property="og:brand"]').attr('content');
                var productPrice = $('meta[property="og:price"]').attr('content');
                window.sendAmplitudeEvent('Add to Cart', {'Item_Name': productName, 'Brand_Name': brandName, 'Price': productPrice, 'Sale_Id': json.sale_id});
            }
            displayCartStatus();
        }
    });

}
//https://gladd.jp/gld_api/cart/add

lorex

//with sku

var url = 'https://www.lorextechnology.com/hd-security-cameras/mpx-hd-1080p-ptz-camera-with-color-night-vision-2-pack/%2Fdetail%2Fhd-security-cameras%2Fmpx-hd-1080p-ptz-camera-with-color-night-vision-2-pack%2FLZV2622BW-2PK-1-p?1609918787233'
var param = '_dyncharset=ISO-8859-1&_dynSessConf=-7477204923059892676&%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.productId=prod1420033&_D%3A%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.productId=+&%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.catalogRefIds=sku1560033&_D%3A%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.catalogRefIds=+&%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.addItemToOrderSuccessURL=%2Fdetail%2Fhd-security-cameras%2Fmpx-hd-1080p-ptz-camera-with-color-night-vision-2-pack%2FLZV2622BW-2PK-1-p&_D%3A%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.addItemToOrderSuccessURL=+&%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.addItemToOrderErrorURL=%2Fdetail%2Fhd-security-cameras%2Fmpx-hd-1080p-ptz-camera-with-color-night-vision-2-pack%2FLZV2622BW-2PK-1-p&_D%3A%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.addItemToOrderErrorURL=+&%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.quantity=1&_D%3A%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.quantity=+&%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.addItemToOrder=%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.addItemToOrder&_D%3A%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.addItemToOrder=+&_DARGS=%2Fsite%2Finclude%2FaddToCartForm.jsp.addToCartForm&isAJAX=true'
        jQuery.ajax({
            type: "POST",
            url: url,
            data: param,
            error: function(jqXHR, textStatus, errorMessage) {                    },
            success: function(data) {
                
            }
        });
//without sku

        var url = ' https://www.lorextechnology.com/hd-security-cameras/mpx-hd-1080p-ptz-camera-with-color-night-vision-4-pack/%2Fdetail%2Fhd-security-cameras%2Fmpx-hd-1080p-ptz-camera-with-color-night-vision-4-pack%2FLZV2622BW-4PK-1-p?1611824768976'
        var param = 'atg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.productId=prod1420034&_D%3A%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.productId=+&%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.catalogRefIds=sku1560034&_D%3A%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.catalogRefIds=+&%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.addItemToOrderSuccessURL=%2Fdetail%2Fhd-security-cameras%2Fmpx-hd-1080p-ptz-camera-with-color-night-vision-4-pack%2FLZV2622BW-4PK-1-p&_D%3A%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.addItemToOrderSuccessURL=+&%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.addItemToOrderErrorURL=%2Fdetail%2Fhd-security-cameras%2Fmpx-hd-1080p-ptz-camera-with-color-night-vision-4-pack%2FLZV2622BW-4PK-1-p&_D%3A%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.addItemToOrderErrorURL=+&%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.quantity=1&_D%3A%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.quantity=+&%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.addItemToOrder=%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.addItemToOrder&_D%3A%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.addItemToOrder=+&_DARGS=%2Fsite%2Finclude%2FaddToCartForm.jsp.addToCartForm&isAJAX=true'
        jQuery.ajax({
            type: "POST",
            url: url,
            data: param,
            error: function(jqXHR, textStatus, errorMessage) {                    },
            success: function(data) {
                
            }
        });




        var formData = []
formData.push("");
$.ajax({
                    type: "POST",
            url: 'https://uat.vashi.tomandco.co.uk/api/p/basket/add',
            data: formData[0],
                    error: function(jqXHR, textStatus, errorMessage) {                    },
                    success: function(data) {
                    }
});


var param = "{'products':[{'id':39400,'qty':1,'options':{'9754':147189}}]}"
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://uat.vashi.tomandco.co.uk/api/p/basket/add', true);
xhr.setRequestHeader('content-type', 'application/json');
xhr.onload = function () { }
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var reporting_ul = document.querySelector('.get_allclient_list_dropdown')
        if(xhr.responseText != ""){
            
        }
    }
}
xhr.send(param);
xdn_get_url_callback: undefined



var searchParamObj = {
    "operationName": "checkoutLineItemsAdd",
    "variables": {
        "checkoutId":"Z2lkOi8vc2hvcGlmeS9DaGVja291dC9lNzY3YjVkYTBmNTAzNTA2Y2Q3YWRiY2YyZTg2NTVhOD9rZXk9OWZmNzkzMzIxMDhjOWZjZGMzMzNkMzg4MDZkZmMzOTk=",
        "lineItems": []
    },
    "query":"mutation checkoutLineItemsAdd($lineItems: [CheckoutLineItemInput!]!, $checkoutId: ID!) {\n  checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {\n    checkoutUserErrors {\n      code\n      field\n      message\n      __typename\n    }\n    checkout {\n      ...checkoutFields\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment checkoutFields on Checkout {\n  id\n  webUrl\n  completedAt\n  lineItems(first: 50) {\n    edges {\n      node {\n        customAttributes {\n          key\n          value\n          __typename\n        }\n        id\n        title\n        quantity\n        discountAllocations {\n          allocatedAmount {\n            amount\n            __typename\n          }\n          discountApplication {\n            ... on ScriptDiscountApplication {\n              title\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        variant {\n          id\n          title\n          sku\n          priceV2 {\n            amount\n            __typename\n          }\n          image {\n            transformedSrc(maxWidth: 400, maxHeight: 500)\n            altText\n            id\n            __typename\n          }\n          product {\n            title\n            handle\n            vendor\n            id\n            tags\n            productType\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  subtotalPriceV2 {\n    amount\n    currencyCode\n    __typename\n  }\n  totalPriceV2 {\n    amount\n    currencyCode\n    __typename\n  }\n  __typename\n}\n"
}

searchParamObj["variables"]["lineItems"].push({
    customAttributes : [],
    quantity : 1,
    variantId:"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTI2NDM5MzE2Njg5NA=="
})
var searchParamObjString = JSON.stringify(searchParamObj);




var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://www.universalstandard.com/api/graphql', false);
xhr.onload = function() {}
xhr.setRequestHeader('content-type', 'application/json');
// xhr.setRequestHeader('authorization', "Bearer " + INC.methods.getCookieValue("access_token"));
// xhr.setRequestHeader('bruid2', INC.methods.getCookieValue("_br_uid_2"));
xhr.setRequestHeader('accept', '*/*');
xhr.setRequestHeader('x-shopify-storefront-access-token', 'e7ed38350019f0e02ea60d1dddf2a119');
xhr.setRequestHeader('xdn_get_url_callback', undefined);
xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        
    }
}
xhr.send(searchParamObjString);


var url = 'https://www.universalstandard.com/cart.js'

var xhr = new XMLHttpRequest();
xhr.open('GET', url, false);
xhr.onload = function() {}
// xhr.setRequestHeader('content-type', 'application/json');
// xhr.setRequestHeader('authorization', "Bearer " + INC.methods.getCookieValue("access_token"));
// xhr.setRequestHeader('bruid2', INC.methods.getCookieValue("_br_uid_2"));
xhr.setRequestHeader('accept', '*/*');
// xhr.setRequestHeader('x-shopify-storefront-access-token', 'e7ed38350019f0e02ea60d1dddf2a119');
// xhr.setRequestHeader('xdn_get_url_callback', undefined);
xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        
    }
}
xhr.send();
//



var url = 'https://www.universalstandard.com/cart.js'

var xhr = new XMLHttpRequest();
xhr.open('GET', url, false);
xhr.onload = function() {}
xhr.setRequestHeader('accept', '*/*');
xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        
    }
}
xhr.send();


var searchParamObj = {
    "operationName": "checkoutLineItemsAdd",
    "variables": {
        "checkoutId":JSON.parse(localStorage.getItem('vuex')).cart.checkout.id,
        "lineItems": []
    },
    "query":"mutation checkoutLineItemsAdd($lineItems: [CheckoutLineItemInput!]!, $checkoutId: ID!) {\n  checkoutLineItemsAdd(checkoutId: $checkoutId, lineItems: $lineItems) {\n    checkoutUserErrors {\n      code\n      field\n      message\n      __typename\n    }\n    checkout {\n      ...checkoutFields\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment checkoutFields on Checkout {\n  id\n  webUrl\n  completedAt\n  lineItems(first: 50) {\n    edges {\n      node {\n        customAttributes {\n          key\n          value\n          __typename\n        }\n        id\n        title\n        quantity\n        discountAllocations {\n          allocatedAmount {\n            amount\n            __typename\n          }\n          discountApplication {\n            ... on ScriptDiscountApplication {\n              title\n              __typename\n            }\n            __typename\n          }\n          __typename\n        }\n        variant {\n          id\n          title\n          sku\n          priceV2 {\n            amount\n            __typename\n          }\n          image {\n            transformedSrc(maxWidth: 400, maxHeight: 500)\n            altText\n            id\n            __typename\n          }\n          product {\n            title\n            handle\n            vendor\n            id\n            tags\n            productType\n            __typename\n          }\n          selectedOptions {\n            name\n            value\n            __typename\n          }\n          __typename\n        }\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  customAttributes {\n    key\n    value\n    __typename\n  }\n  subtotalPriceV2 {\n    amount\n    currencyCode\n    __typename\n  }\n  totalPriceV2 {\n    amount\n    currencyCode\n    __typename\n  }\n  __typename\n}\n"}

searchParamObj["variables"]["lineItems"].push({
    customAttributes : [],
    quantity : 1,
    variantId:"Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0VmFyaWFudC8zOTI2NDM5MzE2Njg5NA=="
})
var searchParamObjString = JSON.stringify(searchParamObj);




var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://www.universalstandard.com/api/graphql', false);
xhr.onload = function() {}
xhr.setRequestHeader('content-type', 'application/json');
// layer0_get_url_callback: undefined
// xhr.setRequestHeader('authorization', "Bearer " + INC.methods.getCookieValue("access_token"));
// xhr.setRequestHeader('bruid2', INC.methods.getCookieValue("_br_uid_2"));
xhr.setRequestHeader('accept', '*/*');
xhr.setRequestHeader('x-shopify-storefront-access-token', 'e7ed38350019f0e02ea60d1dddf2a119');
xhr.setRequestHeader('xdn_get_url_callback', undefined);
xhr.setRequestHeader('layer0_get_url_callback', undefined);
xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        
    }
}
xhr.send(searchParamObjString);





var addc = 'https://api.bluecore.com/api/track/add_to_cart'
// var param = "{'data'="+payload.data+",ip= 1}"
var param = {
    data: payload.data,ip: 1}
var xhr = new XMLHttpRequest();
xhr.open('POST', addc, true);
xhr.setRequestHeader('content-type', 'application/json');
xhr.onload = function () { }
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var reporting_ul = document.querySelector('.get_allclient_list_dropdown')
        if(xhr.responseText != ""){
            
        }
    }
}
xhr.send(JSON.stringify(param));


//

Quantity: 1
cartAction: add
pid: 34259845
size: 
color: 
name: 



var url = 'https://www.rw-co.com/on/demandware.store/Sites-Rwco_CA-Site/default/Cart-AddProduct?format=ajax&cgid=men-new-arrivals&recommendation=false'


var data0 = {};
    var formData = []
    var param0 = ""
    
    data0["pid"] = '34259845';
    data0["quantity"] = 1;
    data0["cartAction"] = 'add';
    data0["size"] = "";
    data0["color"] = "";
    data0["name"] = "";
    var url0 = url;
    formData.push(data0)
    var url0 = url;
    formData.push(data0)
    param0 = Object.keys(data0).map(csrf_token=>csrf_token + "=" + encodeURIComponent(data0[csrf_token])).join("&")
   
    fetch(url, {
        method: "POST",
        mode: "same-origin",
        cache: "default",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json"
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: param0,
    })
    .then(function(response){ 
        return response.json();
    })
    .then(function(data){ 
        debugger
        jQuery(".cart-wrapper").html(data);
        initializeCache();
        initializeEvents();
        if (jQuery(".cart-empty").is(":visible")) {
            clearCart();
            clearMiniCart();
        } else {
            html = jQuery(".ajax-minicart").html();
            jQuery("#mini-cart").html(html);
            jQuery(".ajax-minicart").remove();
            app.minicart.init();
        }
        $(document).trigger("updateCartFinished");
        window.cartUpdateRunning = false;
        getShippingMethods();
    });

    jQuery(".cart-wrapper").html(data);
    initializeCache();
    initializeEvents();
    if (jQuery(".cart-empty").is(":visible")) {
        clearCart();
        clearMiniCart();
    } else {
        html = jQuery(".ajax-minicart").html();
        jQuery("#mini-cart").html(html);
        jQuery(".ajax-minicart").remove();
        app.minicart.init();
    }
    $(document).trigger("updateCartFinished");
    window.cartUpdateRunning = false;
    getShippingMethods();

    var param = "Quantity=1&cartAction=add&pid=34259845&size=&color=&name="
app.cart.update(param, null)
var param = "Quantity=1&cartAction=add&pid=34259845&size=&color=&name="
var url = 'https://www.rw-co.com/on/demandware.store/Sites-Rwco_CA-Site/default/Cart-AddProduct?format=ajax&cgid=men-new-arrivals&recommendation=false'
        url = app.util.ajaxUrl(app.urls.addProduct);
        url = app.util.appendParamToURL(url, "cgid", app.constants.CATEGORY_ID);
        if (typeof app.gtm != "undefined" && app.gtm && typeof app.gtm.util != "undefined" && app.gtm.util) {
            url = app.gtm.util.appendListTypeUrlParameter(url);
        }
        // $.post(url, param, null || app.cart.refresh);
        jQuery.ajax({
            type: "POST",
            url: url,
            data: param,
            error: function(jqXHR, textStatus, errorMessage) {                    },
            success: function(data) {
                debugger
                jQuery(".cart-wrapper").html(data);
                if (jQuery(".cart-empty").is(":visible")) {
                    clearCart();
                    clearMiniCart();
                } else {
                    html = jQuery(".ajax-minicart").html();
                    jQuery("#mini-cart").html(html);
                    jQuery(".ajax-minicart").remove();
                    app.minicart.init();
                }
                $(document).trigger("updateCartFinished");
                window.cartUpdateRunning = false;
            }
        })



        //Reitmans
        var param = "Quantity=1&cartAction=add&pid=34259845&size=&color=&name="   

        //1st

        var data ="Quantity=1&cartAction=add&pid=34190103&size=&color=&name=";
        app.cart.update(data, function(response) {
             
                app.minicart.show(response);
                app.cro.addToCart();
        });


        https://www.rw-co.com/en/colour-block-short-sleeve-polo/449341.html?dwvar_449341_color=Bright%20White%20Total%20Eclipse&cgid=men-new-arrivals#start=1
        var data ="Quantity=1&cartAction=add&pid=34259845&size=&color=&name="   
        app.cart.update(data, function(response) {
             
                app.minicart.show(response);
                app.cro.addToCart();
        });

        var inc_genre = ""
        if (document.URL.split("/")[3] == "01") {
            inc_genre = document.URL.split("/")[4];
        } else {
            inc_genre = document.URL.split("/")[5];
        }
        var url = 'https://belluna.jp/dwr/call/plaincall/ThrowProduct.throwProduct.dwr'
        var param = "callCount=1& windowName=&c0-scriptName=ThrowProduct&c0-methodName=throwProduct&c0-id=0&c0-param0=string:030101&c0-param1=string:ODHX&c0-param2=string:20633&c0-param3=string:4&c0-param4=string:M&c0-param5=string:1&c0-param6=string:stock_conf&c0-param7=string:01&c0-param8=string:stock_conf&c0-param9=string:add_cart_ovo&c0-param10=string:0&batchId:1&page=:"+encodeURIComponent(window.location.pathname)+"&httpSessionId:&scriptSessionId:"
        $.ajax({
            type: "POST",
            url: url,
            data: param,
            error: function(jqXHR, textStatus, errorMessage) {                    },
            success: function(data) {
                debugger
                
            }
        })

        callCount=1
        windowName=
        c0-scriptName=ThrowProduct
        c0-methodName=throwProduct
        c0-id=0
        c0-param0=string:030101
        c0-param1=string:ODHX
        c0-param2=string:20633
        c0-param3=string:4
        c0-param4=string:M
        c0-param5=string:1
        c0-param6=string:stock_conf
        c0-param7=string:01
        c0-param8=string:stock_conf
        c0-param9=string:add_cart_ovo
        c0-param10=string:0
        batchId=1
        page=%2Fsp%2F01%2F030101%2Fd%2FODHX%2F20633%2Fgoods_detail%2F%3FrefRnk%3DlcateDaily
        httpSessionId=
        scriptSessionId=



        javascript:buttonKind='top';ga_setQuantity();executeAjax('add_cart_ovo','01','goods_detail','form1','0','OCAP','01973',null,null,null);
        
        gaCartAdd('ga_catalog_code','ga_product_code','ga_min_normal_price','ga_shop_name','','ga_color_to_cart','ga_size_to_cart','ga_quantity');
        
        ssAddCart('74704ecb50a6faa82f32d63f5668cdf0', document.getElementById('sssku_' + document.getElementById('color_code_u').value + '_' + document.getElementById('size_code_u').value).value, document.getElementById('quantity_u').value);return false


        vashi
        app.customer.basket.basketService.add(null, aaa)
        var url = 'https://uat.vashi.tomandco.co.uk/api/p/basket/add'
var param = '{"products":[{"id":76687,"qty":1,"options":{"9742":146894},"bundle_options":{"32944":{"74098":1},"32945":{"74099":1}}}]}'
var param2 = '{"products":[{"id":71790,"qty":1,"options":{"9763":147327},"bundle_options":{"27496":{"65048":1},"32079":{"73231":1}}}]}'
var param3 = '{"products":[{"id":76670,"qty":1,"options":{"9725":146452},"bundle_options":{"32958":{"74112":1},"32959":{"74113":1}}}]}'
var param4 = '{"products":[{"id":292623,"qty":1,"options":{"10298":159078},"bundle_options":{"38436":{"81753":1},"38437":{"81754":1}}}]}'
var jsparam =JSON.parse(param).products[0]
app.customer.basket.basketService.add(null, jsparam)
var jsparam2 =JSON.parse(param2).products[0]
app.customer.basket.basketService.add(null, jsparam2)
var jsparam3 =JSON.parse(param3).products[0]
app.customer.basket.basketService.add(null, jsparam3)
var jsparam4 =JSON.parse(param4).products[0]
app.customer.basket.basketService.add(null, jsparam4)   




//

PLP - 2nd product
https://www.games-workshop.com/en-GB/searchResults?N=647457687+2062718492
var xhr = new XMLHttpRequest();
var params = '_dyncharset=UTF-8&_dynSessConf=5027337759661510046&%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.quantity=1&_D%3A%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.quantity=+&%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.catalogRefIds=99120204015&_D%3A%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.catalogRefIds=+&_D%3A%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.giftlistId=+&_D%3A%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.giftlistItemId=+&%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.productId=prod3170187&_D%3A%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.productId=+&%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.addItemToOrder=Add+To+Cart&_D%3A%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.addItemToOrder=+&_DARGS=%2Fcatalog%2Ffragments%2FajaxForms.jsp.addToCart';
xhr.open('POST', 'https://www.games-workshop.com/en-GB/', true);
//Send the proper header information along with the request
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.send(params);
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.games-workshop.com/en-GB/cart/miniCart.jsp?type=addToCart&_=1625461396629', true);
xhr.send(null);
https://www.games-workshop.com/en-GB/Sylvaneth-Alarielle-the-Everqueen
PDP
var xhr = new XMLHttpRequest();
var params = '_dyncharset=UTF-8&_dynSessConf=5027337759661510046&%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.quantity=1&_D%3A%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.quantity=+&%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.catalogRefIds=99120204015&_D%3A%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.catalogRefIds=+&_D%3A%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.giftlistId=+&_D%3A%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.giftlistItemId=+&%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.productId=prod3170187&_D%3A%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.productId=+&%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.addItemToOrder=Add+To+Cart&_D%3A%2Fatg%2Fcommerce%2Forder%2Fpurchase%2FCartModifierFormHandler.addItemToOrder=+&_DARGS=%2Fcatalog%2Ffragments%2FajaxForms.jsp.addToCart';
xhr.open('POST', 'https://www.games-workshop.com/en-GB/', true);
//Send the proper header information along with the request
xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
xhr.send(params);
var xhr = new XMLHttpRequest();
xhr.open('GET', 'https://www.games-workshop.com/en-GB/cart/miniCart.jsp?type=addToCart&_=1625461396629', true);
xhr.send(null);


//christy

product: 176
selected_configurable_option: 
related_product: 
item: 176
form_key: HRT8kDDSyoa9FpTv
super_group[170]: 0
super_group[702]: 0
super_group[167]: 0
super_group[171]: 1
super_group[168]: 2
super_group[173]: 0

form_key: HRT8kDDSyoa9FpTv
product: 176
item: 176
related_product: 
selected_configurable_option: 
super_group[167]: 0
super_group[168]: 1
super_group[170]: 0
super_group[171]: 0
super_group[173]: 1

https://www.christy.co.uk/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuY2hyaXN0eS5jby51ay9zdXByZW1lLWh5Z3JvLXdoaXRl/product/176/

https://www.christy.co.uk/checkout/cart/add/uenc/aHR0cHM6Ly93d3cuY2hyaXN0eS5jby51ay9zdXByZW1lLWh5Z3JvLXdoaXRl%2C/product/176/


product: 405
selected_configurable_option: 
related_product: 
item: 405
form_key: 0p6yDEUScilGRqeJ
super_group[188]: 1
super_group[219]: 0
super_group[1130]: 0
super_group[240]: 0
super_group[252]: 1
super_group[9979]: 0

//RD
var prm = 'product=702&selected_configurable_option=&related_product=&item=702&form_key=sYUtR7yz6qpbtdPd&qty=1'
    jQuery.ajax({
        type: "POST",
        url: 'https://www.rattandirect.co.uk/checkout/cart/add/uenc/aHR0cHM6Ly93d3cucmF0dGFuZGlyZWN0LmNvLnVrL2FzY290LXJhdHRhbi0zLXNlYXQtZ2FyZGVuLXNvZmEtc2V0LWluLWdyZXkuaHRtbA%2C%2C/product/702/',
        data: prm,
        error: function(jqXHR, textStatus, errorMessage) {
            
        },
        success: function(res) {
            if (res.backUrl) {
                
                if (eventData.redirectParameters.length > 0) {
                    parameters = res.backUrl.split('#');
                    parameters.push(eventData.redirectParameters.join('&'));
                    res.backUrl = parameters.join('#');
                }
                window.location = res.backUrl;
                return;
            }
            if (res.messages) {
                jQuery(self.options.messagesSelector).html(res.messages);
            }
            if (res.minicart) {
                jQuery(self.options.minicartSelector).replaceWith(res.minicart);
                jQuery(self.options.minicartSelector).trigger('contentUpdated');
            }
            if (res.product && res.product.statusText) {
                jQuery(self.options.productStatusSelector).removeClass('available').addClass('unavailable').find('span').html(res.product.statusText);
            }
            if (res.crosssel_html) {
                jQuery('.crosssell_product_popup').html(res.crosssel_html).trigger('contentUpdated');
                if (res.product_name) {
                    jQuery('.crosssell-cart-detail > div').text(res.product_name);
                }
                if (res.product_image) {
                    jQuery('.crosssell-cart-detail> img').attr("src", res.product_image);
                }
                if (res.product_price) {
                    jQuery('.crosssell-cart-detail > span').text(res.product_price);
                }
                jQuery("#crosssell-product-slider").owlCarousel({
                    loop: false,
                    nav: true,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        768: {
                            items: 1,
                        },
                        992: {
                            items: 1,
                        },
                        1200: {
                            items: 1,
                        }
                    }
                });
                jQuery('.crosssell_product_popup').modal('openModal');
                // if (self.options.redirect == true) {
                //     jQuery('.crosssell-product-popup .block-title.title').hide();
                //     jQuery('.crosssell-product-popup .cross-extra-link').css({
                //         "border-bottom": "none",
                //         "margin-bottom": "0"
                //     });
                //     setTimeout(function() {
                //         location.reload();
                //     }, 1500);
                // }
            }
        }
    });


    https://www.rattandirect.co.uk/checkout/cart/add/uenc/aHR0cHM6Ly93d3cucmF0dGFuZGlyZWN0LmNvLnVrL29ybGFuZG8tcmF0dGFuLWdhcmRlbi12YXNlLXNldC1pbi1jaG9jb2xhdGUtbWl4LWFuZC1jb2ZmZWUtY3JlYW0uaHRtbA%2C%2C/product/633/
    //


//RD
var form_k = document.querySelector('input[name="form_key"]').value
var prm = 'product=702&selected_configurable_option=&related_product=&item=702&form_key='+form_k+'&qty=1'
var urls='https://www.rattandirect.co.uk/checkout/cart/add/uenc/'+btoa(window.location.href).replace('==','%2C%2C')+'/product/702/'
    jQuery.ajax({
        type: "POST",
        url: urls,
        data: prm,
        error: function(jqXHR, textStatus, errorMessage) {
            
        },
        success: function(res) {
            if (res.backUrl) {
                
                if (eventData.redirectParameters.length > 0) {
                    parameters = res.backUrl.split('#');
                    parameters.push(eventData.redirectParameters.join('&'));
                    res.backUrl = parameters.join('#');
                }
                window.location = res.backUrl;
                return;
            }
            if (res.messages) {
                jQuery(self.options.messagesSelector).html(res.messages);
            }
            if (res.minicart) {
                jQuery(self.options.minicartSelector).replaceWith(res.minicart);
                jQuery(self.options.minicartSelector).trigger('contentUpdated');
            }
            if (res.product && res.product.statusText) {
                jQuery(self.options.productStatusSelector).removeClass('available').addClass('unavailable').find('span').html(res.product.statusText);
            }
            if (res.crosssel_html) {
                jQuery('.crosssell_product_popup').html(res.crosssel_html).trigger('contentUpdated');
                if (res.product_name) {
                    jQuery('.crosssell-cart-detail > div').text(res.product_name);
                }
                if (res.product_image) {
                    jQuery('.crosssell-cart-detail> img').attr("src", res.product_image);
                }
                if (res.product_price) {
                    jQuery('.crosssell-cart-detail > span').text(res.product_price);
                }
                jQuery("#crosssell-product-slider").owlCarousel({
                    loop: false,
                    nav: true,
                    responsiveClass: true,
                    responsive: {
                        0: {
                            items: 1,
                        },
                        768: {
                            items: 1,
                        },
                        992: {
                            items: 1,
                        },
                        1200: {
                            items: 1,
                        }
                    }
                });
                jQuery('.crosssell_product_popup').modal('openModal');
                // if (self.options.redirect == true) {
                //     jQuery('.crosssell-product-popup .block-title.title').hide();
                //     jQuery('.crosssell-product-popup .cross-extra-link').css({
                //         "border-bottom": "none",
                //         "margin-bottom": "0"
                //     });
                //     setTimeout(function() {
                //         location.reload();
                //     }, 1500);
                // }
            }
        }
    });







    function(t, e, n) {
        "use strict";
        e.__esModule = !0;
        var r = a(n(11))
          , i = a(n(12))
          , o = a(n(22));
        function a(t) {
            return t && t.__esModule ? t : {
                default: t
            }
        }
        var s = function() {
            function t() {
                !function(t, e) {
                    if (!(t instanceof e))
                        throw new TypeError("Cannot call a class as a function")
                }(this, t),
                this.$body = $(document.body),
                this.overlayUtils = new o.default,
                this.cartAddHooks = ["cart-item-add-remote", "cart-item-update-remote", "cart-item-remove-remote"],
                this.$quickCartContent = $("[data-quick-cart-content]"),
                this.$quickCartTotals = $("[data-quick-cart-totals]"),
                this._bindEvents()
            }
            return t.prototype._bindEvents = function() {
                var t = this
                  , e = r.default.bind(r.default.debounce(this._quickCartUpdate, 400), this);
                this.$quickCartContent.on("click", "[data-quick-cart-update]", function(t) {
                    t.preventDefault();
                    var n = $(t.currentTarget);
                    e(n)
                }),
                this.$body.on("quick-cart-refresh", function(e) {
                    e.preventDefault(),
                    t._refreshContent()
                }),
                this.cartAddHooks.forEach(function(e) {
                    i.default.hooks.on(e, function() {
                        t._refreshContent()
                    })
                })
            }
            ,
            t.prototype._quickCartUpdate = function(t) {
                var e = this
                  , n = t.data("item-id")
                  , r = $("#quick-cart-qty-" + n)
                  , o = parseInt(r.data("value"), 10);
                this.overlayUtils.show();
                var a = "increase" === t.data("action") ? o + 1 : o - 1;
                i.default.api.cart.itemUpdate(n, a, function(t, n) {
                    "succeed" === n.data.status ? (o = a,
                    e._refreshContent()) : (r.data("value", o),
                    e._showMessage(n.data.errors))
                })
            }
            ,
            t.prototype._refreshContent = function() {
                var t = this;
                window.Extend && window.ExtendBigCommerce && ExtendBigCommerce.normalizeCart({
                    balance: !0
                }, function(t, e) {
                    if (e && e.updates)
                        return window.location.reload()
                }),
                i.default.api.cart.getContent({
                    template: {
                        content: "cart/quick-cart-content",
                        totals: "cart/quick-cart-totals"
                    }
                }, function(e, n) {
                    t.$quickCartContent.html(n.content),
                    t.$quickCartTotals.html(n.totals),
                    t.$quickCartContent.promise().done(function() {
                        t.$quickCartTotals.promise().done(function() {
                            $("[data-quick-cart-content]", t.$quickCartContent).data("quick-cart-content"),
                            t.overlayUtils.hide()
                        })
                    })
                })
            }
            ,
            t.prototype._showMessage = function(t) {
                alert(t.join("\n"))
            }
            ,
            t
        }();
        e.default = s
    }


    //pets at home

    var paramsinc = [];
paramsinc.storeId = '10151';
paramsinc.catalogId = '10651';
paramsinc.langId = '-1';
paramsinc.orderId = ".";
paramsinc.partNumberWR = 'P3431';
paramsinc.calculationUsage = "-1,-2,-5,-6,-7";
paramsinc.inventoryValidation = "true";
paramsinc.pahDoInventory = "N";
paramsinc.catEntryId = '67927';
paramsinc.isAddToDelivery = true;
paramsinc.quantity = '1';
wc.service.invoke('AddOrderItemDesktop', paramsinc);


//https://stilacosmetics.com/cart.js



var urla='https://stilacosmetics.com/cart/add.js'
var param = 'form_type=product&utf8=%E2%9C%93&option-0=Intense+Labradorite+(Charcoal)&id=33132323635303&quantity=1'





jQuery.ajax({
    type: "POST",
    url: urla,
    data: param,
    error: function(jqXHR, textStatus, errorMessage) {                    },
    success: function(data) {

    }
});
var url = 'https://stilacosmetics.com/cart.js'
var xhr = new XMLHttpRequest();
xhr.open('GET', url, false);
xhr.onload = function() {}
xhr.setRequestHeader('accept', '*/*');
xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        
    }
}
xhr.send();

var posturl='https://stilacosmetics.com/cart'
var poparam='{"checkout":"Check out"}'
jQuery.ajax({
    type: "POST",
    url: posturl,
    data: poparam,
    error: function(jqXHR, textStatus, errorMessage) {                    },
    success: function(data) {

    }
});


//clinique
var urls = 'https://www.clinique.in/rpc/jsonrpc.tmpl?dbgmethod=rpc.form'

var data0 = {};
var formData = []

data0["JSONRPC"] = '[{"method":"rpc.form","id":3,"params":[{"_SUBMIT":"cart","SKU_BASE_ID":54210,"INCREMENT":1,"QTY":1}]}]';
formData.push(data0)
jQuery.ajax({
    type: "POST",
    url: urls,
    data: formData[0],
    error: function(jqXHR, textStatus, errorMessage) {                    },
    success: function(data) {

    }
});
var args = {}
args.qty = 1
args.skuBaseId = 54210
var catBaseId = ""
var params = {
    skus: [54210],
    itemType: 'cart',
    INCREMENT: 1,
    CAT_BASE_ID: catBaseId,
    QTY: args.qty || 1,
  };



generic.checkout.cart.updateCart({
    params: params,
    onSuccess: function(r) {
        var messages = r.getMessages();
        var offerCriteriaMessages = '';
        if (messages) {
            messages.forEach(function(message) {
            if (message.key === 'offer_criteria_not_met') {
                offerCriteriaMessages = offerCriteriaMessages.concat(message.text + '<br />');
            }
            });
        }
        if (offerCriteriaMessages) {
            $(document).trigger('addToCart.failure', [messages]);
            generic.overlay.launch({
            content: offerCriteriaMessages,
            includeBackground: true,
            cssStyle: {
                width: '324px',
                padding: '25px'
            }
            });
        } else {
            var resultData = r.getData();
            $(document).trigger('addToCart.success', [resultData]);
        }
    },
    onFailure: function(ss) {
        var errorObjectsArray = ss.getMessages();
        $(document).trigger('addToCart.failure', [errorObjectsArray]);
        var prodAddedMsg = $('<div/>').html('<span data-test-id="max_error_message">' + errorObjectsArray[0].text + '</span>').html();
        generic.overlay.launch({
            content: prodAddedMsg,
            includeBackground: true,
            cssStyle: {
            width: '324px',
            padding: '25px'
            }
        });
    }
});


//PA



// var url = 'https://www.peacockalley.com/cart.js'



var param = 'quantity=1&id=43210106636'
$.ajax({
    type: "POST",
    url: 'https://www.peacockalley.com/cart/add.js',
    data: param,
    error: function(jqXHR, textStatus, errorMessage) {
        
    },
    success: function(data) {
        
        
    }
});
var url1='https://www.peacockalley.com/cart'
var xhr = new XMLHttpRequest();
xhr.open('GET', url1, false);
xhr.onload = function() {}
xhr.setRequestHeader('accept', '*/*');
xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        
    }
}
xhr.send();
var url2 = 'https://www.peacockalley.com/cart.js'
var xhr = new XMLHttpRequest();
xhr.open('GET', url2, false);
xhr.onload = function() {}
xhr.setRequestHeader('accept', '*/*');
xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        
    }
}
xhr.send();


//Glad

var $add_to_cart_flg = 0;
if ($add_to_cart_flg === 0) {
    $add_to_cart_flg = 1;
    setTimeout(function () {
        $add_to_cart_flg = 0;
    }, 3000);

    var formData = []
    var data0 = {};
    data0["sale_id"] = '86389';
    data0["product_id"] = '7274064';
    data0["quantity"] = 2;
    data0["size"] = '14014612';
    formData.push(data0);
        jQuery.ajax({
        type: "POST",
        // url: 'https://gladd.jp/members/ajax/add_cart_item',
        url:'https://gladd.jp/gld_api/cart/add',
        data: formData[0],
        error: function(jqXHR, textStatus, errorMessage) {                    },
        success: function(data) {
            var json = data//JSON.parse(data)
            if (json.error && json.error === 'order_max_error') {
                $('a#check_cart').click();
                return false;
            }
            if (json.notice && json.notice === 'replace_order_quantity') {
                $('a#check_cart').click();
                return false;
            }

            $('div#alert_bag').remove();
            $('.header_inner').append(json.tmpl);
            $('div#alert_bag').slideDown('fast');

            setTimeout(function () {
                $('div#alert_bag').slideUp('fast');
            }, 4000);

            if (!json.error) {
                timelimit = new Date();
                timelimit.setTime(json.cart_end_time * 1000);
                $('#inBag').text(json.total_qty);
                set_tab_countdown(timelimit);
                // Amplitude送信
                var desc = $('meta[name="description"]').attr('content').split('｜');
                var str = desc[0].split('-');
                var productName = str[1];
                var brandName = $('meta[property="og:brand"]').attr('content');
                var productPrice = $('meta[property="og:price"]').attr('content');
                window.sendAmplitudeEvent('Add to Cart', {'Item_Name': productName, 'Brand_Name': brandName, 'Price': productPrice, 'Sale_Id': json.sale_id});
            }
            displayCartStatus();
        }
    });

}


//2nd way to add in glad
var formData = []
    var data0 = {};
    data0["sale_id"] = '86389';
    data0["product_id"] = '7274064';
    data0["quantity"] = 2;
    data0["size"] = '14014612';
    formData.push(data0);


$.post("/gld_api/cart/add", formData[0], function(e) {
    if (e.error && "order_max_error" === e.error)
        return $("a#check_cart").click(),
        !1;
    if (e.notice && "replace_order_quantity" === e.notice)
        return $("a#check_cart").click(),
        !1;
    if ($("div#alert_bag").remove(),
    $(".header_inner").append(e.tmpl),
    $("div#alert_bag").slideDown("fast"),
    setTimeout(function() {
        $("div#alert_bag").slideUp("fast")
    }, 4e3),
    !e.error) {
        var t = new Date;
        t.setTime(1e3 * e.cart_end_time),
        $("#inBag").text(e.total_qty),
        set_tab_countdown(t);
        var n = $('meta[name="description"]').attr("content").split("｜")
          , a = n[0].split("-")
          , i = a[1]
          , s = $('meta[property="og:brand"]').attr("content")
          , o = $('meta[property="og:price"]').attr("content");
        window.sendAmplitudeEvent("Add to Cart", {
            Item_Name: i,
            Brand_Name: s,
            Price: o,
            Sale_Id: e.sale_id
        })
    }
    displayCartStatus()
}, "json")


//Gilt

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}

var param = '{"sku":{"id":"2905832"},"sale":{"id":"122196207"}}'
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://www.gilt.jp/webapi/v3/reservations', true);
xhr.setRequestHeader('authorization', readCookie('token_hashed_email'));
xhr.setRequestHeader('content-type', 'application/json');
xhr.onload = function () { }
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        
        if(xhr.responseText != ""){
            document.querySelector('.glyphicon-cart').click()
        }
    }
}
xhr.send(param);



//PAH error 
//success
var paramsinc = [];
paramsinc.storeId = '10151';
paramsinc.catalogId = '10651';
paramsinc.langId = '-1';
paramsinc.orderId = ".";
paramsinc.partNumberWR = 'P3431';
paramsinc.calculationUsage = "-1,-2,-5,-6,-7";
paramsinc.inventoryValidation = "true";
paramsinc.pahDoInventory = "N";
paramsinc.catEntryId = '67927';
paramsinc.isAddToDelivery = true;
paramsinc.quantity = '1';
dojo.xhrPost({
    url: 'https://www.uat03p.pahtest.com/webapp/wcs/stores/servlet/AjaxOrderChangeServiceItemAdd',
    handleAs: "json-comment-filtered",
    form: null,
    content: paramsinc,
    service: wc.service.services.AddOrderItem,
    load: function(_255, _256) {
        var _257 = _256.args.service;
        _255.serviceId = _257.id;
        _255.actionId = _257.actionId;
        for (var prop in _255) {}
        if (_257.successTest(_255)) {
            _257.successHandler(_255);
            dojo.publish("modelChanged", [_255]);
            if (_257.actionId) {
                dojo.publish("modelChanged/" + _257.actionId, [_255]);
            }
        } else {
            var _258 = _24e("storeId", this.url);
            var _259 = _24e("catalogId", this.url);
            var _25a = _24e("langId", this.url);
            if (_255.errorCode == "2500") {
                var _25b = _255.originatingCommand;
                _25b = _25b.replace("?", "%3F");
                _25b = _25b.replace(/&amp;/g, "%26");
                _25b = _25b.replace(/&/g, "%26");
                _25b = _25b.replace(/=/g, "%3D");
                _25b = "LogonForm?nextUrl=" + _25b + "&storeId=" + _258 + "&catalogId=" + _259 + "&langId=" + _25a + "&myAcctMain=1";
                document.location.href = _25b;
            } else {
                if (_255.errorCode == "2550") {
                    var _25b = _255.originatingCommand;
                    _25b = _25b.replace("?", "%3F");
                    _25b = _25b.replace(/&amp;/g, "%26");
                    _25b = _25b.replace(/&/g, "%26");
                    _25b = _25b.replace(/=/g, "%3D");
                    _25b = "AjaxLogonForm?nextUrl=" + _25b + "&storeId=" + _258 + "&catalogId=" + _259 + "&langId=" + _25a + "&myAcctMain=1";
                    document.location.href = _25b;
                } else {
                    if (_255.errorCode == "2530") {
                        var _25b = _255.originatingCommand;
                        _25b = _25b.replace("?", "%3F");
                        _25b = _25b.replace(/&amp;/g, "%26");
                        _25b = _25b.replace(/&/g, "%26");
                        _25b = _25b.replace(/=/g, "%3D");
                        _25b = "PasswordReEnterErrorView?nextUrl=" + _25b + "&storeId=" + _258 + "&catalogId=" + _259 + "&langId=" + _25a;
                        document.location.href = _25b;
                    } else {
                        if (_255.errorCode == "2510") {
                            document.location.href = "Logoff?URL=ReLogonFormView&storeId=" + _258;
                        } else {
                            if (_255.errorCode == "2520") {
                                document.location.href = "ProhibitedCharacterErrorView?storeId=" + _258 + "&catalogId=" + _259 + "&langId=" + _25a;
                            } else {
                                if (_255.errorCode == "2540") {
                                    document.location.href = "CrossSiteRequestForgeryErrorView?storeId=" + _258 + "&catalogId=" + _259 + "&langId=" + _25a;
                                } else {
                                    if (_255.errorCode == "CMN1039E") {
                                        document.location.href = "CookieErrorView?storeId=" + _258 + "&catalogId=" + _259 + "&langId=" + _25a;
                                    } else {
                                        _257.failureHandler(_255);
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        dojo.publish("ajaxRequestCompleted");
    },
    error: function(_25c, _25d) {
        debugger
        var _25e = dojo.i18n.getLocalization("wc", "common");
        dojo.publish("ajaxRequestCompleted");
    }
});


//error

var paramsinc = [];
paramsinc.storeId = '10151';
paramsinc.catalogId = '10651';
paramsinc.langId = '-1';
paramsinc.orderId = ".";
paramsinc.partNumberWR = '7139949';
paramsinc.calculationUsage = "-1,-2,-5,-6,-7";
paramsinc.inventoryValidation = "true";
paramsinc.pahDoInventory = "N";
paramsinc.catEntryId = '358730';
paramsinc.isAddToDelivery = true;
paramsinc.quantity = '1';

dojo.xhrPost({
    url: 'https://www.uat03p.pahtest.com/webapp/wcs/stores/servlet/AjaxOrderChangeServiceItemAdd',
    handleAs: "json-comment-filtered",
    form: null,
    content: paramsinc,
    service: wc.service.services.AddOrderItem,
    load: function(_255, _256) {
        callbacksuccessinc(_255, _256)
    },
    error: function(_25c, _25d) {
        var _25e = dojo.i18n.getLocalization("wc", "common");
        dojo.publish("ajaxRequestCompleted");
    }
});

function callbacksuccessinc(_255, _256){
    var _257 = _256.args.service;
    _255.serviceId = _257.id;
    _255.actionId = _257.actionId;
    for (var prop in _255) {}
    if (_257.successTest(_255)) {
        _257.successHandler(_255);
        dojo.publish("modelChanged", [_255]);
        if (_257.actionId) {
            dojo.publish("modelChanged/" + _257.actionId, [_255]);
        }
    } else {
        var _258 = _24e("storeId", this.url);
        var _259 = _24e("catalogId", this.url);
        var _25a = _24e("langId", this.url);
        if (_255.errorCode == "2500") {
            var _25b = _255.originatingCommand;
            _25b = _25b.replace("?", "%3F");
            _25b = _25b.replace(/&amp;/g, "%26");
            _25b = _25b.replace(/&/g, "%26");
            _25b = _25b.replace(/=/g, "%3D");
            _25b = "LogonForm?nextUrl=" + _25b + "&storeId=" + _258 + "&catalogId=" + _259 + "&langId=" + _25a + "&myAcctMain=1";
            document.location.href = _25b;
        } else {
            if (_255.errorCode == "2550") {
                var _25b = _255.originatingCommand;
                _25b = _25b.replace("?", "%3F");
                _25b = _25b.replace(/&amp;/g, "%26");
                _25b = _25b.replace(/&/g, "%26");
                _25b = _25b.replace(/=/g, "%3D");
                _25b = "AjaxLogonForm?nextUrl=" + _25b + "&storeId=" + _258 + "&catalogId=" + _259 + "&langId=" + _25a + "&myAcctMain=1";
                document.location.href = _25b;
            } else {
                if (_255.errorCode == "2530") {
                    var _25b = _255.originatingCommand;
                    _25b = _25b.replace("?", "%3F");
                    _25b = _25b.replace(/&amp;/g, "%26");
                    _25b = _25b.replace(/&/g, "%26");
                    _25b = _25b.replace(/=/g, "%3D");
                    _25b = "PasswordReEnterErrorView?nextUrl=" + _25b + "&storeId=" + _258 + "&catalogId=" + _259 + "&langId=" + _25a;
                    document.location.href = _25b;
                } else {
                    if (_255.errorCode == "2510") {
                        document.location.href = "Logoff?URL=ReLogonFormView&storeId=" + _258;
                    } else {
                        if (_255.errorCode == "2520") {
                            document.location.href = "ProhibitedCharacterErrorView?storeId=" + _258 + "&catalogId=" + _259 + "&langId=" + _25a;
                        } else {
                            if (_255.errorCode == "2540") {
                                document.location.href = "CrossSiteRequestForgeryErrorView?storeId=" + _258 + "&catalogId=" + _259 + "&langId=" + _25a;
                            } else {
                                if (_255.errorCode == "CMN1039E") {
                                    document.location.href = "CookieErrorView?storeId=" + _258 + "&catalogId=" + _259 + "&langId=" + _25a;
                                } else {
                                    _257.failureHandler(_255);
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    dojo.publish("ajaxRequestCompleted");
}



//lorex

var url = 'https://www.lorex.com/cart/add.js'
var param = '{"quantity":"1","id":40664482119830,"properties":{"Ref":"40727713022102","Product":"16-Channel Fusion NVR System with 4K (8MP) IP Cameras (8 / Black)","Term":"3 years - sold by Extend"}}'
var xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('content-type', 'application/json');
xhr.onload = function () { }
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        if(xhr.responseText != ""){
            
        }
    }
}
xhr.send(param);

setTimeout(function(){
    var url = 'https://www.lorex.com/cart/add.js'
    var param = '{"form_type":"product","utf8":"✓","id":"40727713022102","quantity":"1"}'
    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function () { }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            if(xhr.responseText != ""){
                
            }
        }
    }
    xhr.send(param);
},400)


ajaxSubmit: function (form) {
            var self = this,
                productIds = idsResolver(form),
                formData;

            $(self.options.minicartSelector).trigger('contentLoading');
            self.disableAddToCartButton(form);
            formData = new FormData(form[0]);

            $.ajax({
                url: form.attr('action'),
                data: formData,
                type: 'post',
                dataType: 'json',
                cache: false,
                contentType: false,
                processData: false,

                /** @inheritdoc */
                beforeSend: function () {
                    if (self.isLoaderEnabled()) {
                        $('body').trigger(self.options.processStart);
                    }
                },

                /** @inheritdoc */
                success: function (res) {
                    var eventData, parameters;

                    $(document).trigger('ajax:addToCart', {
                        'sku': form.data().productSku,
                        'productIds': productIds,
                        'form': form,
                        'response': res
                    });

                    if (self.isLoaderEnabled()) {
                        $('body').trigger(self.options.processStop);
                    }

                    if (res.backUrl) {
                        eventData = {
                            'form': form,
                            'redirectParameters': []
                        };
                        // trigger global event, so other modules will be able add parameters to redirect url
                        $('body').trigger('catalogCategoryAddToCartRedirect', eventData);

                        if (eventData.redirectParameters.length > 0) {
                            parameters = res.backUrl.split('#');
                            parameters.push(eventData.redirectParameters.join('&'));
                            res.backUrl = parameters.join('#');
                        }

                        self._redirect(res.backUrl);

                        return;
                    }

                    if (res.messages) {
                        $(self.options.messagesSelector).html(res.messages);//"[data-placeholder="messages"]"
                    }

                    if (res.minicart) {
                        $(self.options.minicartSelector).replaceWith(res.minicart);
                        $(self.options.minicartSelector).trigger('contentUpdated');
                        //"[data-block="minicart"]"
                    }

                    if (res.product && res.product.statusText) {
                        $(self.options.productStatusSelector)//".stock.available"
                            .removeClass('available')
                            .addClass('unavailable')
                            .find('span')
                            .html(res.product.statusText);
                    }
                    self.enableAddToCartButton(form);
                },

                /** @inheritdoc */
                error: function (res) {
                    $(document).trigger('ajax:addToCart:error', {
                        'sku': form.data().productSku,
                        'productIds': productIds,
                        'form': form,
                        'response': res
                    });
                },

                /** @inheritdoc */
                complete: function (res) {
                    if (res.state() === 'rejected') {
                        location.reload();
                    }
                    window.scrollTo(0, 0);
                }
            });
        },

        //self.options.minicartSelector == '[data-block="minicart"]'


        formData = new FormData();
        formData.append("quantity-" + productObj['id'] + "", qty);
        // formData.append("uuid", "");
        // formData.append("cartAction", "add");
        if(INC.config.addedproductcart.indexOf(productObj['id']) >= 0){
            formData.append("cartAction", "update");
        }else{
            formData.append("cartAction", "add");
        }
        formData.append("pid", productObj['id']);
        formData.append("format", "ajax");



        



var url = 'https://events.demoup.com/callback/store/cart'

var param = '{"currency":"GBP","domainId":"","movieId":null,"movieWatched":0,"priceTotal":7.92,"sellSession":"8361b9d6012ac6b4630a8564cc6b175c","url":"https://cps-web-ui-cand.k8cand.cityplumbing.co.uk/bathroom-wastes/iflo-slotted-clicker-basin-waste-1-14in/p/854008","buttonRendered":0}'

    var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function () { }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            if(xhr.responseText != ""){
                
            }
        }
    }
    xhr.send(param);



// formData.push(data0);
jQuery.ajax({
    type: "POST",
    url: url,
    crossOrigin: true,
    headers: {
        'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9',
        'Content-Type': 'application/x-www-form-urlencoded'
    },
    data: formData[0],
//     contentType:'application/x-www-form-urlencoded',
// processdata: false,
processData: false,
            contentType: false,
    error: function(jqXHR, textStatus, errorMessage) {                    },
    success: function(data) {
    }
});


//Revital
function cartDrawerItemsHeightinc() {
    var scrollY = window.pageYOffset;
      var headerHeight = jQuery('.js-cd-header').outerHeight(true);
  
      if (jQuery('.header').hasClass('is-fixed')) {
          headerHeight = jQuery('.js-cd-header-inner').outerHeight(true);
    }
    
    if(scrollY >= 300 && !jQuery('.header').hasClass('is-fixed') && !jQuery('.header').hasClass('header--fixed')){
      headerHeight = 0;
    }
  
    var totalHeight =
          jQuery('.js-cd-top').outerHeight(true) + jQuery('.js-cd-bottom').outerHeight(true) + headerHeight;
  
          if(jQuery(window).outerWidth(true) < 767) {
              jQuery('.js-cd-items').css({
                  height: `calc(100vh - ${totalHeight + 80}px)`,
              });
          } else {
              jQuery('.js-cd-items').css({
                  height: `calc(100vh - ${totalHeight + 40}px)`,
              });
          }
  
      jQuery('.cart-drawer').css({
          top: `${headerHeight}px`,
      });
  
      if(jQuery('.cart-drawer').hasClass('expanded') || (window.innerHeight + window.scrollY) >= document.body.offsetHeight){
          jQuery('#loyaltylion-beacon-frame').addClass('hide-badge')
      } else {
          jQuery('#loyaltylion-beacon-frame').removeClass('hide-badge')
      }
  }
  

var $form = jQuery('[action="/cart/add"]');
var $formBtn = jQuery('.js-btn-product');
var param = 'id=39716276240542&quantity=1'
jQuery.ajax({
    url: '/cart/add.js',
    type: 'POST',
    data: param,
    dataType: 'json',
    success: function (data, textStatus, jqXHR) {
        console.log('Success', data)
        pupulatecartinc(true);
    },
    error: function (jqXHR, textStatus, error) {
    }
});
function pupulatecartinc(){
    var expand = false
    jQuery.ajax({
        url: '/cart',
        type: 'GET',
        success: (data) => {
            var $cartContainer = jQuery('.js-cart-drawer-container');
            var $cartBtn = jQuery('.js-btn-cart');
            var $cartHTML = jQuery(data).find('.js-cart-drawer-ajax').html();
            var cartCounterText = jQuery(data).find('.item-counter').text();

            // inser html
            $cartContainer.html($cartHTML);
            $cartBtn.find('.btn-cart__counter').text(cartCounterText);

            if(cartCounterText !== '0'){
                $cartBtn.addClass('btn-cart--toggled');
            } else {
                $cartBtn.removeClass('btn-cart--toggled');
            }

            cartDrawerItemsHeightinc();

            
        },
        error: (jqXHR, textStatus, error) => {
            console.log('error populate cart', error);
        }
    });
}





var price = 1
    var special_price = '11'
    var priceMismatchObj = {}
    priceMismatchObj.token = "cT8pNg"
    priceMismatchObj.product_id = INC.methods.getProductIdFromWebPage();
    priceMismatchObj.product_price = null
    priceMismatchObj.special_price = "0.00"
    priceMismatchObj.old_product_price = price
    priceMismatchObj.old_special_price = special_price
    priceMismatchObj.price_type= "IncVAT"
   
    if (document.querySelector('.productPrice .prices_holder .price_inc_vat_section .includedVAT') != null) {
        if (document.querySelector('.productPrice .prices_holder .price_inc_vat_section .includedVAT').innerText.replace(',','').replace('Â£','').trim() != null) {
            priceMismatchObj.special_price = document.querySelector('.productPrice .prices_holder .price_inc_vat_section .includedVAT').innerText.replace(',','').replace('Â£','').replace('£','').trim()
            //priceMismatchObj.special_price = priceMismatchObj.special_price.replace(' ', '')
        }

    }
    if (priceMismatchObj.product_price == null) {
        priceMismatchObj.product_price = priceMismatchObj.special_price
        //priceMismatchObj.special_price = null
    }
    if(price==null){
        price=special_price
    }
    if(special_price==null){
        special_price=price
    }

    if (parseFloat(priceMismatchObj.product_price) != parseFloat(special_price) || parseFloat(priceMismatchObj.special_price) != parseFloat(price)) {
        var mismatchData = {
            "eventData": Base64.encode(JSON.stringify(priceMismatchObj))
        }
        var parm=JSON.stringify(mismatchData)
//         debugger;
            prurl = "https://gather.increasingly.com/ProductPriceDetails";
            var xhr = new XMLHttpRequest();
            xhr.open('POST', prurl, true);
            xhr.setRequestHeader('content-type', 'application/json; charset=utf-8');
            xhr.onload = function () { }
            xhr.onreadystatechange = function () {
                if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
                    if(xhr.responseText != ""){
                        
                    }
                }
            }
            xhr.send(parm);
            }






///marksandspencer

            var url = 'https://www.marksandspencer.com/webapp/wcs/stores/servlet/AjaxOrderItemAddCmd'


var data0 = {};
    var formData = []
    var param0 = ""
    
    data0["productId"] = 'P60532241';
    data0["quantity_1"] = 1;
    data0["storeId"] = '10151';
    data0["catalogId"] = "10051";
    data0["partNumber_1"] = "60532241006";
    var url0 = url;
    formData.push(data0)
    
    param0 = Object.keys(data0).map(csrf_token=>csrf_token + "=" + encodeURIComponent(data0[csrf_token])).join("&")
   
    fetch(url, {
        method: "POST",
        mode: "same-origin",
        cache: "default",
        credentials: "same-origin",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
            Accept: "application/json"
        },
        redirect: "follow",
        referrer: "no-referrer",
        body: param0,
    })
    .then(function(response){ 
        return response.json();
    })
    .then(function(data){ 
        
    });


    //selco

    var param = '{"products":[{"product_id":52,"qty":4}]}'
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://www.selcobw.com/rest/V1/catalog/product/purchaseoptions', true);
xhr.setRequestHeader('content-type', 'application/json');
xhr.setRequestHeader('authorization', "Bearer " + JSON.parse(localStorage.getItem('store.user')).token);
xhr.onload = function () { }
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var reporting_ul = document.querySelector('.get_allclient_list_dropdown')
        if(xhr.responseText != ""){
            
        }
    }
}
xhr.send(param);




var param = '{"items":[{"qty":1,"sku":"010011858","quote_id":"2288106","extension_attributes":{"selco_purchase_type":"bulky"},"product_option":{"extension_attributes":{"configurable_item_options":[{"option_id":"203","option_value":1054}]}}}]}'
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://www.selcobw.com/rest/V1/carts/mine/items/bulk', true);
xhr.setRequestHeader('content-type', 'application/json');
xhr.setRequestHeader('authorization', "Bearer " + JSON.parse(localStorage.getItem('store.user')).token);
xhr.onload = function () { }
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var reporting_ul = document.querySelector('.get_allclient_list_dropdown')
        if(xhr.responseText != ""){
            
        }
    }
}
xhr.send(param);

//google api
JSON.parse(document.querySelector('#app-env').innerText)
var param = 'address=sw111hj&components=country:GB&key=AIzaSyBgqu4PTkPbPn0yVXNRG7_iiSXLf7mQV2w'
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://maps.googleapis.com/maps/api/geocode/json?address=sw111hj&components=country:GB&key=AIzaSyBgqu4PTkPbPn0yVXNRG7_iiSXLf7mQV2w', true);
// xhr.setRequestHeader('content-type', 'application/json');
// xhr.setRequestHeader('authorization', "Bearer " + JSON.parse(localStorage.getItem('store.user')).token);
xhr.onload = function () { }
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var reporting_ul = document.querySelector('.get_allclient_list_dropdown')
        if(xhr.responseText != ""){
            
        }
    }
}
xhr.send(param);

https://www.selcobw.com/rest/V1/postcodewhitelist/check

{"postcode":"sw111hj"}


Request URL: https://maps.googleapis.com/maps/api/geocode/json?address=sw111hj&components=country:GB&key=AIzaSyBgqu4PTkPbPn0yVXNRG7_iiSXLf7mQV2w
address=sw111hj&components=country:GB&key=AIzaSyBgqu4PTkPbPn0yVXNRG7_iiSXLf7mQV2w


https://www.selcobw.com/rest/V1/branchesstock/nearest/product
{"latitude":51.4601403,"longitude":-0.1645136,"items":[{"product_id":1704,"qty":1}]}




//screwfix


var param = 'qty=1&productId=102KY&deliveryType=delivery&shouldUpdateStore=false&giftItemId=giftItemId&giftListId=giftListId'
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://www.screwfix.com/product/jsp/product/responsive/addItemToOrder.jsp', true);
xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
// xhr.setRequestHeader('authorization', "Bearer " + JSON.parse(localStorage.getItem('store.user')).token);
xhr.onload = function () { }
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        if(xhr.responseText != ""){
            
        }
    }
}
xhr.send(param);

setTimeout(function(){//collection
var param2 = 'qty=1&productId=3570T&deliveryType=collection&selectedBranchCode=PA9&selectedBranchName=Brixton&collectionQuantity=7&shouldUpdateStore=false&giftItemId=giftItemId&giftListId=giftListId'
var xhr1 = new XMLHttpRequest();
xhr1.open('POST', 'https://www.screwfix.com/product/jsp/product/responsive/addItemToOrder.jsp', true);
xhr1.setRequestHeader('content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
// xhr1.setRequestHeader('authorization', "Bearer " + JSON.parse(localStorage.getItem('store.user')).token);
xhr1.onload = function () { }
xhr1.onreadystatechange = function () {
    if (xhr1.readyState === XMLHttpRequest.DONE && xhr1.status === 200) {
        if(xhr1.responseText != ""){
            
        }
    }
}
xhr1.send(param2);},500)
//

// stencil-config: {"cart":{"suggestions":{"limit":4}}}
// stencil-options: {"render_with":"cart/preview"}
//victoria
var formData = new FormData();
        formData.append("action", "add");
        formData.append("product_id", '7939');
        formData.append("attribute["+9823+"]", 'Pre-order - this item will ship when in stock');
        formData.append("qty[]", "1");
        formData.append("authenticity_token", BCData.csrf_token);

var url = 'https://victoriahealth.com/remote/v1/cart/add'
var xhr = new XMLHttpRequest();
xhr.open('POST', url, false);
xhr.onload = function() {}
xhr.setRequestHeader('accept', '*/*');
xhr.setRequestHeader('stencil-config', '');
xhr.setRequestHeader('stencil-options', '');
xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        if(xhr.responseText != ""){
            var res = JSON.parse(xhr.responseText);
            var url1='https://victoriahealth.com/cart.php?suggest='+res.data.cart_item.id+''
            var xhr1 = new XMLHttpRequest();
            xhr1.open('GET', url1, false);
            xhr1.onload = function() {}
            xhr1.setRequestHeader('content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
            xhr1.setRequestHeader('stencil-config', '{"cart":{"suggestions":{"limit":4}}}');
            xhr1.setRequestHeader('stencil-options', '{"render_with":"common/cart-preview"}');
            xhr1.onreadystatechange = function() {
                if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                    
                    var url1='https://victoriahealth.com/cart.php'
                    var xhr11 = new XMLHttpRequest();
                    xhr11.open('GET', url1, false);
                    xhr11.onload = function() {}
                    xhr11.setRequestHeader('content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
                    xhr11.setRequestHeader('stencil-options', '{"render_with":"common/cart-preview"}');
                    xhr11.setRequestHeader('accept', '*/*');
                    xhr11.onreadystatechange = function() {
                        if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                            
                        }
                    }
                    xhr11.send();
                }
            }
            xhr1.send();
        }
    }
}
xhr.send(formData);
document.querySelector('#custom-cart-click-dropdown').click()





//cefinecosmetics
var params = "https://cefinecosmetics.co.jp/Form/Product/ProductDetail.aspx?pid=200210163048000000";
var simpleprodurl = "https://cefinecosmetics.co.jp/Form/Product/ProductDetail.aspx?shop=0&pid=300310191076000000";
var cardid= ''
if(document.querySelector('input[name="ctl00$BodyHeaderMain$BodyMiniCart$rMiniCartList$ctl00$hfCartId"]') != null){
    cardid = document.querySelector('input[name="ctl00$BodyHeaderMain$BodyMiniCart$rMiniCartList$ctl00$hfCartId"]').value
}
var d__VIEWSTATE = document.querySelector('form[name="aspnetForm"] #__VIEWSTATE').value
var d__EVENTVALIDATION = document.querySelector('form[name="aspnetForm"] #__EVENTVALIDATION').value
var genid=document.querySelector('form[name="aspnetForm"] #__VIEWSTATEGENERATOR').value
var prodId = "200210163048000000"
var variation_Id = "200210163048000000-200210163048015000"
var var_selectedid="200210163048000000-200210163048015000"
var shopid__=0
if(document.querySelector('#ctl00_BodyHeaderMain_BodyMiniCart_rMiniCartList_ctl00_rMiniCart_ctl00_hfShopId') != null){
    shopid__ = document.querySelector('#ctl00_BodyHeaderMain_BodyMiniCart_rMiniCartList_ctl00_rMiniCart_ctl00_hfShopId').value
}
var prdqty="1"

if(cardid != ''){
    var param1config = "ctl00%24smScriptManager=ctl00%24ContentPlaceHolder1%24upUpdatePanel%7Cctl00%24ContentPlaceHolder1%24lbCartAdd&ctl00%24BodyHeaderMain%24BodyMiniCart%24rMiniCartList%24ctl00%24rMiniCart%24ctl00%24hfShopId="+shopid__+"&ctl00%24BodyHeaderMain%24BodyMiniCart%24rMiniCartList%24ctl00%24rMiniCart%24ctl00%24hfProductId="+prodId+"&ctl00%24BodyHeaderMain%24BodyMiniCart%24rMiniCartList%24ctl00%24rMiniCart%24ctl00%24hfVariationId="+variation_Id+"&ctl00%24BodyHeaderMain%24BodyMiniCart%24rMiniCartList%24ctl00%24rMiniCart%24ctl00%24hfIsFixedPurchase=False&ctl00%24BodyHeaderMain%24BodyMiniCart%24rMiniCartList%24ctl00%24rMiniCart%24ctl00%24hfAddCartKbn=Normal&ctl00%24BodyHeaderMain%24BodyMiniCart%24rMiniCartList%24ctl00%24rMiniCart%24ctl00%24hfProductSaleId=&ctl00%24BodyHeaderMain%24BodyMiniCart%24rMiniCartList%24ctl00%24rMiniCart%24ctl00%24hfProductOptionValue=&ctl00%24BodyHeaderMain%24BodyMiniCart%24rMiniCartList%24ctl00%24hfCartId="+encodeURIComponent(cardid)+"&ctl00%24BodyHeaderMain%24tbSearchWord=&ctl00%24BodyHeaderMain%24tbSearchWord2=&ctl00%24ContentPlaceHolder1%24hfIsRedirectAfterAddProduct=CART&ctl00%24ContentPlaceHolder1%24ddlVariationSelect="+encodeURIComponent(var_selectedid)+"&ctl00%24ContentPlaceHolder1%24tbCartAddProductCount="+encodeURIComponent(prdqty)+"&__EVENTTARGET=ctl00%24ContentPlaceHolder1%24lbCartAdd&__EVENTARGUMENT=&__LASTFOCUS="+encodeURIComponent(d__VIEWSTATE)+"&_VIEWSTATEGENERATOR="+encodeURIComponent(genid)+"&__EVENTVALIDATION="+encodeURIComponent(d__EVENTVALIDATION)+"&__ASYNCPOST=true&"


    var prodId="300310191076000000"
    var simpleparam = "ctl00%24smScriptManager=ctl00%24ContentPlaceHolder1%24upUpdatePanel%7Cctl00%24ContentPlaceHolder1%24lbCartAdd&__EVENTTARGET=ctl00%24ContentPlaceHolder1%24lbCartAdd&__EVENTARGUMENT=&__LASTFOCUS="+encodeURIComponent(d__VIEWSTATE)+"&_VIEWSTATEGENERATOR="+encodeURIComponent(genid)+"&__EVENTVALIDATION="+encodeURIComponent(d__EVENTVALIDATION)+"D&ctl00%24BodyHeaderMain%24BodyMiniCart%24rMiniCartList%24ctl00%24rMiniCart%24ctl00%24hfShopId="+shopid__+"&ctl00%24BodyHeaderMain%24BodyMiniCart%24rMiniCartList%24ctl00%24rMiniCart%24ctl00%24hfProductId="+prodId+"&ctl00%24BodyHeaderMain%24BodyMiniCart%24rMiniCartList%24ctl00%24rMiniCart%24ctl00%24hfVariationId="+prodId+"&ctl00%24BodyHeaderMain%24BodyMiniCart%24rMiniCartList%24ctl00%24rMiniCart%24ctl00%24hfIsFixedPurchase=False&ctl00%24BodyHeaderMain%24BodyMiniCart%24rMiniCartList%24ctl00%24rMiniCart%24ctl00%24hfAddCartKbn=Normal&ctl00%24BodyHeaderMain%24BodyMiniCart%24rMiniCartList%24ctl00%24rMiniCart%24ctl00%24hfProductSaleId=&ctl00%24BodyHeaderMain%24BodyMiniCart%24rMiniCartList%24ctl00%24rMiniCart%24ctl00%24hfProductOptionValue=&ctl00%24BodyHeaderMain%24BodyMiniCart%24rMiniCartList%24ctl00%24hfCartId="+encodeURIComponent(cardid)+"&ctl00%24BodyHeaderMain%24tbSearchWord=&ctl00%24BodyHeaderMain%24tbSearchWord2=&ctl00%24ContentPlaceHolder1%24hfIsRedirectAfterAddProduct=CART&ctl00%24ContentPlaceHolder1%24tbCartAddProductCount="+encodeURIComponent(prdqty)+"&__ASYNCPOST=true&"
    
}else{
    var param1config = "ctl00%24smScriptManager=ctl00%24ContentPlaceHolder1%24upUpdatePanel%7Cctl00%24ContentPlaceHolder1%24lbCartAdd&ctl00%24BodyHeaderMain%24tbSearchWord=&ctl00%24BodyHeaderMain%24tbSearchWord2=&ctl00%24ContentPlaceHolder1%24hfIsRedirectAfterAddProduct=CART&ctl00%24ContentPlaceHolder1%24ddlVariationSelect="+encodeURIComponent(var_selectedid)+"&ctl00%24ContentPlaceHolder1%24tbCartAddProductCount="+encodeURIComponent(prdqty)+"&__EVENTTARGET=ctl00%24ContentPlaceHolder1%24lbCartAdd&__EVENTARGUMENT=&__LASTFOCUS="+encodeURIComponent(d__VIEWSTATE)+"&__VIEWSTATEGENERATOR="+encodeURIComponent(genid)+"&__EVENTVALIDATION="+encodeURIComponent(d__EVENTVALIDATION)+"&__ASYNCPOST=true&"


    var simpleparam = "ctl00%24smScriptManager=ctl00%24ContentPlaceHolder1%24upUpdatePanel%7Cctl00%24ContentPlaceHolder1%24lbCartAdd&__EVENTTARGET=ctl00%24ContentPlaceHolder1%24lbCartAdd&__EVENTARGUMENT=&__LASTFOCUS="+encodeURIComponent(d__VIEWSTATE)+"&__VIEWSTATEGENERATOR="+encodeURIComponent(genid)+"&__EVENTVALIDATION="+encodeURIComponent(d__EVENTVALIDATION)+"&ctl00%24BodyHeaderMain%24tbSearchWord=&ctl00%24BodyHeaderMain%24tbSearchWord2=&ctl00%24ContentPlaceHolder1%24hfIsRedirectAfterAddProduct=CART&ctl00%24ContentPlaceHolder1%24tbCartAddProductCount="+encodeURIComponent(prdqty)+"&__ASYNCPOST=true&"
}



var xhr = new XMLHttpRequest();
xhr.open("POST", simpleprodurl, true);
xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xhr.setRequestHeader("X-MicrosoftAjax", "Delta=true");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.onerror = function () {
    
}
xhr.onload = function () {

    if (xhr.readyState == 4 && xhr.status == 200) {
       
    }
}
xhr.send(simpleparam);




//jewson

addToBasketFromListing: function addToBasketFromListing() {
    events.on("submit", ".js-add-product-listing form", function(e) {
        e.preventDefault();
        var t = e.target.querySelector("input[name=qty]");
        if (!t.value)
            return !1;
        var o = new URLSearchParams(new FormData(e.target)).toString()
          , a = e.target.querySelector(".btn");
        o.indexOf("CSRFToken") > -1 && ACC.config.CSRFToken && (o += "&".concat(ACC.config.CSRFToken)),
        a.classList.add("loading"),
        fetch("/ajax/trolley/add", {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: o
        }).then(function(e) {
            if (e.ok)
                return e.json()
        }).then(function(e) {
            if (!e.cartModificationData)
                return !1;
            if ("success" === e.cartModificationData.statusCode) {
                var _o8 = {
                    alertClass: "alert--success",
                    totalUnit: e.cartData.totalUnitCount,
                    title: e.cartModificationData.statusMessage,
                    content: ACC.miniCart.templateEntries(e.cartModificationData.entry),
                    cta: {
                        url: "/trolley",
                        title: document.body.classList.contains("punchout-session") ? "Go to trolley" : "Checkout"
                    }
                };
                ACC.flashcard && ACC.flashcard.render(_o8),
                ACC.miniCart.render(e.cartData),
                ACC.product.addToBasketFromListingTrack(e.cartModificationData),
                t.value > 1 && (t.value = 1,
                t.dispatchEvent(new Event("change")))
            } else if (e.cartModificationData.statusMessage) {
                var _t16 = [];
                for (var _o10 = 0; _o10 < e.cartData.entries.length; _o10++) {
                    _t16.push(ACC.miniCart.templateEntries(e.cartData.entries[_o10]))
                }
                var _o9 = {
                    alertClass: "alert--error",
                    totalUnit: e.cartData.totalUnitCount,
                    title: e.cartModificationData.statusMessage,
                    content: _t16.join(""),
                    cta: {
                        url: "/trolley",
                        title: document.body.classList.contains("punchout-session") ? "Go to trolley" : "Checkout"
                    }
                };
                ACC.flashcard && ACC.flashcard.render(_o9)
            }
        }).catch(function(e) {
            console.info("Error ", e)
        }).finally(function() {
            a.classList.remove("loading")
        })
    })
},





//west49.com
var url = 'https://west49.com/cart/add.js'
var data = 'properties%5B_collection_ids%5D=deals-25%2C99-longboards%2Call_en%2Cw49_new%2Cpl_skate%2Cpromo_50-off%2Cpromo_50off-hardgoods%2Cpromo_markdown_-129%2Cpromo_markdown_69%2Croute-exclusion%2Cw49_brands_zoo-york%2Cw49_en_skate%2Cw49_en_skate_longboards%2Cw49_newpl_new-arrivals%2Cw49_new_skate%2Cw49_skate-from-29%2Cw49_skateboards-scooters&properties%5B_option1%5D=Assorted&id=41118107828406&quantity=1&properties%5B_title%5D=Zoo+York+Photo+Collage+Longboard+40&properties%5B_option_title1%5D=Color&properties%5B_option_title2%5D=Size&properties%5B_url%5D=%2Fproducts%2F4851-18144091-zoo-york-photo-collage-longboard'
fetch(url, {
            method: "POST",
            mode: "same-origin",
            cache: "default",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Accept: "application/json"
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: data,
        })
        .then(function(response){ 
            var e = document._shopify_cart._refresh();
            return document._shopify_cart._run_campaigns(),
            e
            document.querySelector('.site-header__desktop-cart.js-cart-open').click()
            return response.json(); 
        })
        .then(function(data){ 
           
        });
//charlotterusse

var urls = 'https://charlotterusse.com/cart/add.js'

var data = 'lusions-may-6%2C50-off-exceptions-may-17%2C50-off-exceptions-may-21%2C50-off-exclusions-apr-1%2C50-off-exclusions-apr-15%2C50-off-exclusions-apr-22%2C50-off-exclusions-apr-24%2C50-off-exclusions-aug-20%2C50-off-exclusions-august-15%2C50-off-exclusions-july-19%2C50-off-exclusions-mar-3%2C50-off-exclusions-mar-8%2C50-off-exclusions-may-26%2C50-off-exclusions-may-28%2C50-off-exclusions-sep-21%2C50-off-exclusions-sep-22%2C50-off-exclusions-may-25%2Call%2Call-urban-product%2Call_en%2Cclothes-bottoms_new-bottoms%2Cclothes-bottoms_paperbag%2Cclothes-bottoms_shop-all-bottoms%2Cclothes-bottoms_shorts%2Cclothes-shorts_denim%2Cclothes-shorts_high-rise%2Cclothes-shorts_paperbag%2Cclothes_denim%2Cclothes_shop-all-clothes%2Cclothes_shorts%2Cclothes_tie-it-up%2Ccr_-10-denim-shorts-skirts%2Ccr_-10-or-less%2Ccr_-10-or-less-womens_shorts%2Ccr_-10-or-less_womens%2Ccr_-15-deals%2Ccr_-15-denim%2Ccr_mujeres-shorts-de-jean_shorts-de-jean-cintura-alta%2Ccr_womens-denim-shorts_high-rise%2Ccr_womens-denim_shop-all-denim%2Ccr_womens-10-denim-shorts-skirts%2Ccr_womens-denim-shorts%2Cmay-6-bogo-50-off-exception%2Cmothers-day_-15%2Cnew-womens_shorts%2Cnew_clothes%2Cnew_shop-all-new%2Cnew_womens%2Cpromo_-10-denim-shorts-dresses%2Cpromo_-10-or-less%2Cpromo_-10denim-skirts-and-shorts%2Cpromo_spring-summer&properties%5B_option1%5D=Black&properties%5B_option2%5D=S%2FP&id=41944490836162&quantity=1&properties%5B_title%5D=Self-Tie+High-Rise+Denim+Paperbag+Short&properties%5B_option_title1%5D=Color&properties%5B_option_title2%5D=Size&properties%5B_url%5D=%2Fproducts%2F0520-64642669-self-tie-high-rise-denim-paperbag-short&properties%5B_product_id%5D=7371371282626&properties%5B_variant_id%5D='
fetch(urls, {
            method: "POST",
            mode: "same-origin",
            cache: "default",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Accept: "application/json"
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: data,
        })
        .then(function(response){ 
            var e = document._shopify_cart._refresh();
            return document._shopify_cart._run_campaigns(),
            e
            document.querySelector('.site-header__desktop-cart.js-cart-open').click()
            return response.json(); 
        })
        .then(function(data){ 
           
        });




// not working
//urban Planet
var url = 'https://urban-planet.com/cart/add.js'
var param = '{"items":[{"id":40108115492957,"quantity":1}]}'
fetch(url, {
            method: "POST",
            mode: "same-origin",
            cache: "default",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: param,
        })
        .then(function(response){ 
            return response.json(); 
        })
        .then(function(data){ 
           
        });

        var url1 = 'https://urban-planet.com/cart?view=line-item-data'

        var url2 = 'https://urban-planet.com/cart.js'
        var url3 = 'https://urban-planet.com/cart/update.js'
        var pp = '{"updates":{"40108115492957:a127cc498b45adb44adfd760b3ca1044":0,"40108115492957:407a79f4b32e806e3a2700b5b2de6119":0}}'
var xhr2 = new XMLHttpRequest();
xhr2.open('POST', url3, false);
xhr2.onload = function() {}
xhr2.setRequestHeader('accept', '*/*');
xhr2.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        
    }
}
xhr2.send(pp);

//working one

//urban planet
                    
                    var url = 'https://urban-planet.com/cart/add.js'
var param = '{"items":[{"id":40108115492957,"quantity":1}]}'
fetch(url, {
            method: "POST",
            mode: "same-origin",
            cache: "default",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: param,
        })
        .then(function(response){ 
                    var totalbagcount=document.querySelector('.cart-count').innerText
                    if (totalbagcount != 0) {
                        if (document.querySelector('.cart-flyout') != null) {
                            var elmqty =  document.querySelectorAll('.form--cart .cart__items')[0]
                            var elqtyv =  elmqty.querySelector('.line-item__qty-input').value
                            elmqty.querySelector('.line-item__qty-control--increment').click()
                            elmqty.querySelector('.line-item__qty-input').value = elqtyv
                            setTimeout(function () {
                            elmqty.querySelector('.line-item__qty-input').value = elqtyv
                                elmqty.querySelector('.line-item__qty-control--decrement').click()
                            }, 3000)
                        }else{
                            sessionStorage.setItem("reloading", "true")
                            window.location.reload()
                        }
                    }
                    else {
                        sessionStorage.setItem("reloading", "true")
                        window.location.reload()
                    }
            return response.json(); 
        })
        .then(function(data){ 
           
        });
        

        //




        //gaiam
        var par = "id=32665714241&option-0=10lb&quantity=1&add="
fetch("https://www.gaiam.com/cart/add", {
    method: "POST",
    headers: {
        "Content-Type": "application/x-www-form-urlencoded"
    },
    body: par
}).then(function(e) {
    if (e.ok)
        return e.json()
}).then(function(e) {
   
}).catch(function(e) {
    console.info("Error ", e)
}).finally(function() {
    
})


//balsamhill
var url = 'https://www.balsamhill.com/ajax/cart/addMultiple'
var param = '[{"2803019":"1"}]'

$.ajax(url, {
    type: "POST",
    contentType: "text/plain",
    headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',

       },
    data:param,
    crossDomain: true,
    success: function(result) {
    },
});

//balsam uat
var url='https://uat-ui.i.balsamhill.com/api/addProductToCart/bh-us/users/anonymous/carts/7e9ee011-2712-480d-8ce3-d3624de76ace/entries?fields=FULL&curr=USD'
var param='{"product":{"code":"4003375","purchasable":false},"variantProperties":{},"quantity":1}'
fetch(url, {
    method: "POST",
    mode: "same-origin",
    cache: "default",
    credentials: "same-origin",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/plain, */*"
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: param,
})
.then(function(response){ 
})
.then(function(data){ 
   
});


//no cat id
//cart-id


//no cat id
var url = 'https://uat-ui.i.balsamhill.com/api/addProductToCart/bh-us/users/anonymous/carts/none/entries?fields=FULL&curr=USD'
var param='{"product":{"code":"4003375","purchasable":false},"variantProperties":{},"quantity":1}'
fetch(url, {
    method: "POST",
    mode: "same-origin",
    cache: "default",
    credentials: "same-origin",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/plain, */*"
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: param,
})
.then(function(response){ 
})
.then(function(data){ 
   
});
//
//no cat id
//cart-id
var url = 'https://uat-ui.i.balsamhill.co.uk/api/addProductToCart/bh-uk/users/anonymous/carts/none/entries?fields=FULL&curr=GBP'
var param='{"product":{"code":"4000276","purchasable":false},"variantProperties":{"product_attributes.attribute_title.wildcard_1":"Platinum Glitter","Length":10,"Width":4},"quantity":1}'
fetch(url, {
    method: "POST",
    mode: "same-origin",
    cache: "default",
    credentials: "same-origin",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/plain, */*"
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: param,
})
.then(function(response){ 
    
    var res = response.headers.get('cart-id')
    var urlget='https://uat-ui.i.balsamhill.co.uk/api/hybris/bh-uk/users/anonymous/carts/'+res+'?fields=BASIC&curr=GBP'
    fetch(urlget)
    .then(resp => {
        console.log(resp.statusText);
        if(resp != undefined){
            if(resp.guid != undefined){
            localStorage.setItem('cartId', '"'+resp.guid+'"')
                window.location.reload()
            }
        }
        return resp.text();
    })
    .then(data_ => {
         console.log(data_)
            if(JSON.parse(data_).guid != undefined){
                var crtid=JSON.parse(data_).guid.toString()
                localStorage.setItem('cartId', '"'+crtid.toString()+'"')
            }
    });
    //no cat id
//cart-id
var url = 'https://uat-ui.i.balsamhill.co.uk/api/addProductToCart/bh-uk/users/anonymous/carts/'+res+'/entries?fields=FULL&curr=GBP'
var param='{"product":{"code":"4003342","purchasable":false},"variantProperties":{"product_attributes.attribute_title.wildcard_1":"Platinum Glitter","Length":10,"Width":4},"quantity":1}'
fetch(url, {
    method: "POST",
    mode: "same-origin",
    cache: "default",
    credentials: "same-origin",
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json, text/plain, */*"
    },
    redirect: "follow",
    referrer: "no-referrer",
    body: param,
})
.then(function(response){ 
    
    var res = response.headers.get('cart-id')
    var urlget='https://uat-ui.i.balsamhill.co.uk/api/hybris/bh-uk/users/anonymous/carts/'+res+'?fields=BASIC&curr=GBP'
    fetch(urlget)
    .then(resp => {
        console.log(resp.statusText);
        if(resp != undefined){
            if(resp.guid != undefined){
            localStorage.setItem('cartId', '"'+resp.guid+'"')
                window.location.reload()
            }
        }
        return resp.text();
    })
    .then(data_ => {
         console.log(data_)
            if(JSON.parse(data_).guid != undefined){
                var crtid=JSON.parse(data_).guid.toString()
                localStorage.setItem('cartId', '"'+crtid.toString()+'"')
            }
        });
})
.then(function(data){ 
});

})
.then(function(data){ 
});
//
//forever21

var url='https://www.forever21.ca/cart/add.js'
var prm='properties%5B_collection_ids%5D=callout_crop-tops%2Cup-to-50%2Cen_sweaters-knits%2Cexclusions-f-w-2022-30%2Cexclusions-s-s-2022-40%2Cf21-ca-available%2Cgift-guide%2Clong-sleeves%2Cnew-arrivals%2Cnew-arrivals-home-page%2Cnew-in%2Cnew%2C50-off-1%2Call%2Cpromo-f21-s-s-2022-20%2Cpromo-s-s-2022-40%2Cshop-the-look%2Ctest-fr-collection%2Cunder-35%2Cup-to-75-off%2Cwomen%2Cwomen-new-arrivals%2Cwomen-sweats-knits%2Cwomen-tops%2Csweaters%2Cwomen-tops_crop-tops%2Cwomen-tops_long-sleeves&properties%5B_option1%5D=Pale+Yellow&properties%5B_option2%5D=M&id=42223358640281&quantity=1&properties%5B_title%5D=Ribbed+Split-Neck+Sweater&properties%5B_option_title1%5D=Color&properties%5B_option_title2%5D=Size&properties%5B_url%5D=%2Fproducts%2F6085-63843413-ribbed-split-neck-sweater'
fetch(url, {
            method: "POST",
            mode: "same-origin",
            cache: "default",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Accept: "application/json"
            },
            redirect: "follow",
            referrer: "no-referrer",
            body: prm,
        })
        .then(function(response){ 
            var e = document._shopify_cart._refresh();
            return document._shopify_cart._run_campaigns(),
            e
            document.querySelector('.site-header__desktop-cart.js-cart-open').click()
            return response.json(); 
        })
        .then(function(data){ 
           
        });

















//increasingly cms

type: "GET",    
url: "http://example.com",
cache: false,
crossDomain: true,
dataType: 'json',
xhrFields: {
    withCredentials: true
},
success: function (data) {
    alert(data);
});


var email_user=document.querySelector('#email_input').value;
            var pwd=document.querySelector('#password_input').value;
            var email_dec=email_user
            var password_decod=btoa(pwd)
            var param = {"emailId":email_dec, "password": password_decod}
            var formdata=[]
            var data0={}
            data0["emailId"] = email_dec;
            data0["password"] = password_decod;
            formdata.push(data0)


$.ajax({
                    method: 'post',
                    url: '//cms.increasingly.com/Login',
                    data: formdata[0]
                    success: function(result) {
                        localStorage.setItem('login_type','user_password')
                      localStorage.setItem('client_details',result.ApiKeyClientId)
                      localStorage.setItem('client_domain',result.DomainName)
                      localStorage.setItem('sessionExpire','false')
                      window.location.href='https://app.increasingly.com/dashboard.html';
                    },
                    error: function(jqxhr, status, exception) {
                        console.log('Error ' + exception);
                    }
                });


var param='{"emailId":"lindsay.costa@wickes.co.uk","password":"V0tTMklOUzFS"}'
fetch('//cms.increasingly.com/Login', {
    method: 'POST',
    headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',

       },
    body: param,
}).then(function(response){ 
            var result = response.json()
        .then(function(data){ 
        });




 var param='{"emailId":"lindsay.costa@wickes.co.uk","password":"V0tTMklOUzFS"}'
$.ajax('//cms.increasingly.com/Login', {
    type: "POST",
    contentType: "text/plain",
    headers: {
         'Accept': 'application/json',
         'Content-Type': 'application/json',

       },
    xhrFields: {
         withCredentials: true
    },
    data:param,
    crossDomain: true,
    success: function(result) {
        localStorage.setItem('login_type','user_password')
        localStorage.setItem('client_details',result.ApiKeyClientId)
        localStorage.setItem('client_domain',result.DomainName)
        localStorage.setItem('sessionExpire','false')
        window.location.href='https://app.increasingly.com/dashboard.html';
    },
});




Shopify.country="US"
function addCSSFile() {
var versionUpdate = (new Date()).getTime();
var cssFilePath = "https://usaincreasingly.increasingly.co/Clients/rU6y1oVe/dev/css/rU6y1oVe.css";
var linkTag = document.createElement('link');
linkTag.rel = "stylesheet";
linkTag.href = cssFilePath;
document.querySelector('head').appendChild(linkTag);
}
addCSSFile()
var versionUpdate = (new Date()).getTime();
var jsFilePath = "https://usaincreasingly.increasingly.co/Clients/rU6y1oVe/dev/js/rU6y1oVe_org.js"
var scriptTag = document.createElement('script');
scriptTag.type = 'text/javascript';
scriptTag.src = jsFilePath;
document.querySelector('body').appendChild(scriptTag);
//
 sku: variant.sku,
        handle: product.handle,
        title: product.title,
        image: variantImages[0].originalSrc,
        parentId: product.id,
        id: variant.id,
        variant: variant.title,
        options: variant.selectedOptions,
        price: Number(variant.price),
        collections: collectionsSimple,
        tags: product.tags,
        quantity,
        // @TODO sync this with api, when cart prices are calculated
        labels: product.labels

// mclarenstore

var param=[]
var data1 = {};
var newCart = JSON.parse(localStorage.getItem('GEM_ExternalCart'))
var newForm={}
var cartitems_=localStorage.getItem('mclaren-state')
var cart_item_=JSON.parse(cartitems_)
param = cart_item_.cart.items
var var_opt=[]
var var_o = {};
var_o["name"] = 'Size';
var_o["value"] = 'S';
var var_o1 = {};
var_o1["name"] = 'Color';
var_o1["value"] = 'BLACK/BLACK';
var_opt.push(var_o)
var_opt.push(var_o1)
var data0 = {};
data0["id"] = '42322315182267';
data0["handle"] = '"mens-team-core-essentials-mclaren-t-shirt"';
data0["parentId"] = '7287776018619';
data0["image"] =  "https://cdn.shopify.com/s/files/1/0569/0867/7307/products/TM1346_BLACKBLACK_2.jpg?v=1646256118";
data0["quantity"] = 1;
data0["labels"] = [];
data0["options"] = var_opt;
data0["sku"] = "TM1346-Black/Black-S";
data0["price"] = 29;
data0["title"] = "S / BLACK/BLACK";
data0["variant"] = "Mens Team Core Essentials T-Shirt";
param.push(data0)
newForm["customerId"] = ""
newForm["items"] = param
newForm["email"] = ""
newForm["marketing"] = false
newForm["vouchers"] = []
var url = 'https://api.mclarenstore.com/basket'

 //'{"items":[{"discounts":[],"handle":"mens-team-core-essentials-mclaren-t-shirt","id":"42322315182267","image":"https://cdn.shopify.com/s/files/1/0569/0867/7307/products/TM1346_BLACKBLACK_2.jpg?v=1646256118","labels":[],"options":[{"name":"Size","value":"S"},{"name":"Color","value":"BLACK/BLACK"}],"parentId":"7287776018619","price":29,"quantity":1,"sku":"TM1346-Black/Black-S","title":"Mens Team Core Essentials T-Shirt","variant":"S / BLACK/BLACK"},{"sku":"TM1399-Black-S","handle":"mens-lando-norris-core-essentials-t-shirt","title":"Mens Lando Norris Core Essentials T-Shirt","image":"https://cdn.shopify.com/s/files/1/0569/0867/7307/products/TM1399_BLACK_NECTARINE_1_4.jpg?v=1650445996","parentId":"7287776116923","variant":"S / BLACK/WHITE","options":[{"name":"Size","value":"S"},{"name":"Color","value":"BLACK/WHITE"}],"price":33,"collections":["lando-norris","lando-norris-t-shirts-polos","formula-1","formula-1-t-shirts-polos","team-essentials","shop-all","formula-1-fanwear","lando-norris-fanwear","formula-1-mens","special-offer"],"tags":["category:essentials","category:fanwear","category:formula-1","driver:lando-norris","gender:mens","shop-all","size-guide:mens","type:t-shirt"],"labels":[],"id":"42322315542715","quantity":2}],"vouchers":[],"customerId":"","email":"","marketing":false}'
        
fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newForm),
    })
    .then(function(response){ 
        return response.json();
    })
    .then(function(data){ 
        if(data.message != 'Validation failed'){
            var res = data
            localStorage.setItem('GEM_ExternalCart',JSON.stringify(res))
            var getlcart=localStorage.getItem('mclaren-state')
            var cartel=JSON.parse(getlcart)
            cartel.cart.items = res.items
            localStorage.setItem('mclaren-state',JSON.stringify(cartel))
            window.location.reload
        }
    });


        var xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('content-type', 'application/json');
xhr.onload = function () { }
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        if(xhr.responseText != ""){
            var res = JSON.parse(xhr.responseText)
            localStorage.setItem('GEM_ExternalCart',JSON.stringify(res))
            var getlcart=localStorage.getItem('mclaren-state')
            var cartel=JSON.parse(getlcart)
            cartel.cart.items = res.items
            localStorage.setItem('mclaren-state',JSON.stringify(cartel))
        }
    }
}
xhr.send(JSON.stringify(newForm));



import getConfig from 'next/config'
import notify from '../notify'

const { publicRuntimeConfig } = getConfig()

const basketRequest = cart =>
  fetch(`${publicRuntimeConfig.api}/basket`, {
    method: 'POST',
    body: JSON.stringify(cart),
    headers: {
      'content-type': 'application/json'
    }
  })
    .then(res => res.json())
    .then(res => notifyIfVoucherRemoved(res, cart))

const notifyIfVoucherRemoved = (res, cart) => {
  let attemptedVouchers = cart.vouchers
  let actualVouchers = res.vouchers
  let voucherName = attemptedVouchers[0]

  if (actualVouchers.length < attemptedVouchers.length) {
    notify({
      text: `Voucher "${voucherName}" is not applicable to this basket`
    })
  }

  return res
}

let to

const debouncedBasketRequest = cart =>
  new Promise(res => {
    to && clearTimeout(to)
    to = setTimeout(() => {
      to = undefined
      res(basketRequest(cart))
    }, 1000)
  })

export default debouncedBasketRequest



var data0 = {};
data0["emailId"] = 'lindsay.costa@wickes.co.uk';
var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://cms.increasingly.com/Clients', true);
xhr.setRequestHeader('content-type', 'application/json');
xhr.onload = function () { }
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        var reporting_ul = document.querySelector('.get_allclient_list_dropdown')
        if(xhr.responseText != ""){
            
        }
    }
}
xhr.send(JSON.stringify(data0));




oct-notification oct-notification--visible

oct-text oct-text--light oct-text--size_m - "1 item" 


oct-text oct-text--bold oct-text--size_l = "£8.99"


var param = '{"calculateInventory":true,"quickBuy":false,"orderItems":[{"partNumber":"10154633012","quantity":1}]}'
jQuery.ajax({
    type: "POST",
    url: 'https://www.boots.com/api/checkout/basket/items',
    headers: {
        'channel': 'Ecommerce',
        'adrum': 'isAjax:true',
        'accept': '*/*',
        'siteid': 'UK',
        'x-custom-hostname': '',
        'Content-Type': 'application/json'
    },
    data: param,
    error: function(jqXHR, textStatus, errorMessage) {
        
    },
    success: function(data) {
        
    }
});


//viovet

var url = 'https://www.viovet.co.uk/dialogs.ajax?mode=add_product&products_id=24902&quantity=1&_=1656648810888'

var xhr11 = new XMLHttpRequest();
xhr11.open('GET', url, false);
xhr11.onload = function() {}
xhr11.setRequestHeader('content-type', 'application/x-www-form-urlencoded; charset=UTF-8');
xhr11.setRequestHeader('stencil-options', '{"render_with":"common/cart-preview"}');
xhr11.setRequestHeader('accept', '*/*');
xhr11.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        
    }
}
xhr11.send();


var url = 'https://www.viovet.co.uk/dialogs.ajax?mode=add_product&products_id=3811&quantity=1'//&_=1656648810888

$.ajax({
                type: "GET",
                url: url,
                data: $(this).serialize(),
                success: function (response) {
                    var modal_content = $("#remodal-dialog-content");
                    modal_content.html("");
                    if (response.status == "OK") {
                        if (response.data !== undefined) {
                            modal_content.html(response.data.html);
                            remodal_instance.open();
                            $(".basket-items-quantity").text(response.data.basket.total_basket_items_count_with_suffix);
                            $(".basket-value").text("- " + response.data.basket.header_basket_value);
                            pulse_element(".basket-wrapper");
                            $(".basket-items-quantity._sm").text(response.data.basket.total_basket_items_count);
                            $(".basket-value._sm").text(response.data.basket.header_basket_value);
                        } else {
                            modal_content.html(response.message);
                            remodal_instance.open();
                        }
                    } else {
                        modal_content.html(
                            "<p>" +
                                i18next.t("error") +
                                ": " +
                                response.message +
                                "</p>" +
                                '<div class="grid-box _one-whole _centered _no-padding">' +
                                '<a class="cta-button _cta-primary _one-half" href="">' +
                                i18next.t("refresh_page") +
                                "</a>" +
                                "</div>"
                        );
                        remodal_instance.open();
                    }
                    unblock_element(section_to_block);
                },
            });





function addCSSFile() {
    var cssFilePath = "https://www.increasingly.co/Clients/Mc5arEn/css/Mc5arEn.css";
    var linkTag = document.createElement('link');
    linkTag.rel = "stylesheet";
    linkTag.href = cssFilePath;
    document.querySelector('head').appendChild(linkTag);
}
addCSSFile()
// LOAD JS
var versionUpdate = (new Date()).getTime();
var jsFilePath = "https://www.increasingly.co/Clients/Mc5arEn/js/Mc5arEn.js?v=" + versionUpdate;
var scriptTag = document.createElement('script');
scriptTag.type = 'text/javascript';
scriptTag.src = jsFilePath;
document.querySelector('body').appendChild(scriptTag);



//wickes
fetch("https://www.wickes.co.uk/cart/add", {
  "headers": {
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
  },
  "body": "productCodePost=256939&qty=1",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

///chaoscards
var haskeyelm = document.querySelector('.product form').getAttribute('data-ajax-hash')
var ajhas1=JSON.parse(haskeyelm)[0]
var ajhas2=JSON.parse(haskeyelm)[1]


var url='https://www.chaoscards.co.uk/'
var ajxuparam = 'ajax_hash%5B%5D='+ajhas1+'&ajax_hash%5B%5D='+ajhas2+'&hc_timing=46001&qty=1&pid=283932&ajax_origin=add_to_cart_form_283932&module=cart&ajax_act=do_add_to_cart&_ga_client_id=2003320844.1657640708&rp='+rp+'&window_location=%2Fprod%2Fbooster-boxes-pokemon%2Fpokemon-astral-radiance-sealed-booster-case-6-booster-boxes&window_location_query_string=%2Fprod%2Fbooster-boxes-pokemon%2Fpokemon-astral-radiance-sealed-booster-case-6-booster-boxes'

$.ajax(url, {
    type: "POST",
    contentType: "text/plain",
    headers: {
         'Accept': 'text/plain, */*; q=0.01',
         'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',

       },
    data:ajxuparam,
    success: function(result) {
        
    },
});


var uurl = 'https://yesbebe.co.uk/cart/add.js'

var param = 'quantity=1&form_type=product&utf8=%E2%9C%93&id=42602654236884'

jQuery.ajax({
    type: "POST",
    url: urla,
    data: param,
    error: function(jqXHR, textStatus, errorMessage) {                    },
    success: function(data) {

    }
});



///yesbebe



var uurl = 'https://yesbebe.co.uk/cart/add.js'

var param = 'quantity=1&form_type=product&utf8=%E2%9C%93&id=42602654236884'
fetch(uurl, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: param,
    })
    .then(function(response){ 
        return response.json();
    })
    .then(function(data){ 
        if(data.message != 'Validation failed'){
            var cart_item = data
            // var cart_item = JSON.parse(cart_item__)
        if (typeof cart_item.items != "undefined" && cart_item.items.length > 0) {
            cart_item = cart_item.items[0];
        }
        var gsf_gtag_args = {};
        if (cart_item) {
            gsf_gtag_args.ecomm_prodid = generateProductIds([cart_item]);
            gsf_gtag_args.ecomm_totalvalue = parseFloat((cart_item.price / 100).toFixed(2));
            var gsf_prod_ids = getShopProductData([cart_item], "id");
            var gsf_prod_name = getShopProductData([cart_item], "title");
            var gsf_bing_ecomm_prodid = generateProductIds([cart_item], "bing");
        } else {
            if (typeof gsf_conversion_data != "undefined" && gsf_conversion_data && gsf_conversion_data.data.total_price > 0) {
                gsf_gtag_args.ecomm_prodid = generateProductIds(gsf_conversion_data.data.product_data);
                gsf_gtag_args.ecomm_totalvalue = gsf_conversion_data.data.total_price;
                var gsf_prod_ids = getShopProductData(gsf_conversion_data.data.product_data, "id");
                var gsf_prod_name = getShopProductData(gsf_conversion_data.data.product_data, "name");
                var gsf_bing_ecomm_prodid = generateProductIds(gsf_conversion_data.data.product_data, "bing");
            } else {
                console.log("Conversion Tracking Snippet is Missing");
            }
        }
        if (gsf_gtag_args.ecomm_totalvalue != "undefined" && gsf_gtag_args.ecomm_totalvalue && gsf_gtag_args.ecomm_totalvalue > 0) {
            gsf_gtag_args.send_to = "AW-882102875";
            gsf_gtag_args.ecomm_pagetype = "cart";
            gtag("event", "add_to_cart", gsf_gtag_args);
            gtag("event", "conversion", { send_to: "AW-882102875/HdOTCPCapsQDENukz6QD", value: gsf_gtag_args.ecomm_totalvalue });
        }
        }
    });


var uurl = 'https://yesbebe.co.uk/cart/add.js'

var param = 'quantity=1&form_type=product&utf8=%E2%9C%93&id=42602654236884'
jQuery.ajax({
    type: "POST",
    url: uurl,
    data: param,
    error: function(jqXHR, textStatus, errorMessage) {                    },
    success: function(cart_item__) {
        var cart_item = JSON.parse(cart_item__)
        if (typeof cart_item.items != "undefined" && cart_item.items.length > 0) {
            cart_item = cart_item.items[0];
        }
        var gsf_gtag_args = {};
        if (cart_item) {
            gsf_gtag_args.ecomm_prodid = generateProductIds([cart_item]);
            gsf_gtag_args.ecomm_totalvalue = parseFloat((cart_item.price / 100).toFixed(2));
            var gsf_prod_ids = getShopProductData([cart_item], "id");
            var gsf_prod_name = getShopProductData([cart_item], "title");
            var gsf_bing_ecomm_prodid = generateProductIds([cart_item], "bing");
        } else {
            if (typeof gsf_conversion_data != "undefined" && gsf_conversion_data && gsf_conversion_data.data.total_price > 0) {
                gsf_gtag_args.ecomm_prodid = generateProductIds(gsf_conversion_data.data.product_data);
                gsf_gtag_args.ecomm_totalvalue = gsf_conversion_data.data.total_price;
                var gsf_prod_ids = getShopProductData(gsf_conversion_data.data.product_data, "id");
                var gsf_prod_name = getShopProductData(gsf_conversion_data.data.product_data, "name");
                var gsf_bing_ecomm_prodid = generateProductIds(gsf_conversion_data.data.product_data, "bing");
            } else {
                console.log("Conversion Tracking Snippet is Missing");
            }
        }
        if (gsf_gtag_args.ecomm_totalvalue != "undefined" && gsf_gtag_args.ecomm_totalvalue && gsf_gtag_args.ecomm_totalvalue > 0) {
            gsf_gtag_args.send_to = "AW-882102875";
            gsf_gtag_args.ecomm_pagetype = "cart";
            gtag("event", "add_to_cart", gsf_gtag_args);
            gtag("event", "conversion", { send_to: "AW-882102875/HdOTCPCapsQDENukz6QD", value: gsf_gtag_args.ecomm_totalvalue });
        }
    }
});


var uurl = 'https://yesbebe.co.uk/cart/add.js'

var param = 'quantity=1&form_type=product&utf8=%E2%9C%93&id=42602654236884'
fetch(uurl, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: param,
    })
    .then(function(response){ 
        return response.json();
    })
    .then(function(data){ 
        if(data.message != 'Validation failed'){
            var cart_item = data
            // var cart_item = JSON.parse(cart_item__)
        if (typeof cart_item.items != "undefined" && cart_item.items.length > 0) {
            cart_item = cart_item.items[0];
        }
        var gsf_gtag_args = {};
        if (cart_item) {
            gsf_gtag_args.ecomm_prodid = generateProductIds([cart_item]);
            gsf_gtag_args.ecomm_totalvalue = parseFloat((cart_item.price / 100).toFixed(2));
            var gsf_prod_ids = getShopProductData([cart_item], "id");
            var gsf_prod_name = getShopProductData([cart_item], "title");
            var gsf_bing_ecomm_prodid = generateProductIds([cart_item], "bing");
        } else {
            if (typeof gsf_conversion_data != "undefined" && gsf_conversion_data && gsf_conversion_data.data.total_price > 0) {
                gsf_gtag_args.ecomm_prodid = generateProductIds(gsf_conversion_data.data.product_data);
                gsf_gtag_args.ecomm_totalvalue = gsf_conversion_data.data.total_price;
                var gsf_prod_ids = getShopProductData(gsf_conversion_data.data.product_data, "id");
                var gsf_prod_name = getShopProductData(gsf_conversion_data.data.product_data, "name");
                var gsf_bing_ecomm_prodid = generateProductIds(gsf_conversion_data.data.product_data, "bing");
            } else {
                console.log("Conversion Tracking Snippet is Missing");
            }
        }
        if (gsf_gtag_args.ecomm_totalvalue != "undefined" && gsf_gtag_args.ecomm_totalvalue && gsf_gtag_args.ecomm_totalvalue > 0) {
            gsf_gtag_args.send_to = "AW-882102875";
            gsf_gtag_args.ecomm_pagetype = "cart";
            gtag("event", "add_to_cart", gsf_gtag_args);
            gtag("event", "conversion", { send_to: "AW-882102875/HdOTCPCapsQDENukz6QD", value: gsf_gtag_args.ecomm_totalvalue });
        }
        }
    });
var url2 = 'https://yesbebe.co.uk/cart?t=1658303146954&view=ajax'
var xhr2 = new XMLHttpRequest();
xhr2.open('GET', url2, false);
xhr2.onload = function() {}
xhr2.setRequestHeader('accept', '*/*');
xhr2.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        
    }
}
xhr2.send();
var generateProductIds = function (items, type = "google") {
    var gsf_pids = [];
    for (var i = 0; i < items.length; i++) {
        var gsf_pid = generateProductItemsId(items[i], type);
        if (gsf_pid) {
            gsf_pids.push(gsf_pid);
        }
    }
    return gsf_pids;
};
var generateProductItemsId = function (items, type = "google") {
    var bing_sku_as_product_id = "0";
    var gsf_item_pid = "shopify_GB" + "_" + items.product_id + "_" + items.variant_id;
    if (type == "bing" && bing_sku_as_product_id != -1) {
        if (parseInt("0") === 1) {
            gsf_item_pid = items.sku;
        } else if (parseInt("0") === 2) {
            gsf_item_pid = items.variant_id;
        }
    } else {
        if (parseInt("1") === 1) {
            gsf_item_pid = items.sku;
        } else if (parseInt("1") === 2) {
            gsf_item_pid = items.variant_id;
        }
    }
    return gsf_item_pid;
};
var getShopProductData = function (items, type) {
    var gsf_shop_pdata = "";
    var gsf_shop_pids = [];
    for (var i = 0; i < items.length; i++) {
        var gsf_item = items[i];
        if (type == "name" || type == "title") {
            var gsf_shop_pdata = type == "title" ? gsf_item.product_title : gsf_item.name;
        } else if (type == "category") {
            var gsf_shop_pdata = gsf_item.category;
        } else if (type == "id") {
            gsf_shop_pids.push(gsf_item.product_id);
        }
    }
    return type == "id" ? gsf_shop_pids : gsf_shop_pdata;
};


//tsukumo


fetch("https://shop.tsukumo.co.jp/basket/add", {
 "headers": {
  "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
 },
 "body": "qty=1&item=0406620513010&price=default",
 "method": "POST",
 "mode": "cors",
 "credentials": "include"
});



//ganni

var urls = 'https://ct.pinterest.com/user/?event=addtocart&ed=%7B%22np%22%3A%22gtm%22%2C%22order_quantity%22%3A1%2C%22value%22%3A95%2C%22currency%22%3A%22EUR%22%2C%22line_items%22%3A%5B%7B%22product_id%22%3A%22T3205%22%2C%22product_category%22%3A%22Clothing%2FTops%2FT-Shirts%22%7D%5D%7D&tid=2613834653430&pd=%7B%22em%22%3A%2224aba99b2defbb47ee981b4200313f61f3ae31541d8717bdac1e463c838939b0%22%2C%22pin_unauth%22%3A%22dWlkPU5HRmhaREkxTm1RdE0yUTFOUzAwTVRJM0xUbGtZMkV0TWpFMFpUTmlOek13T0Rrdw%22%2C%22aem_country%22%3A%22632cd2fea71dcde005af4e07f14b8bc1f68b63d9c1b373dc6048fb87e90af22b%22%2C%22aem_eligible_list%22%3A%5B%22country%22%5D%7D&cb=1667998200903&dep=4%2CTAGS_RECEIVED&stc=true'

$.ajax({
    url: urls,
    method: "GET",
    success: function (e) {
    },
    error: function () {
    },
});


var url = 'https://www.ganni.com/on/demandware.store/Sites-ganni-Site/en/Cart-AddProduct'

param = 'pid=T325315103&quantity=1&options=%5B%5D'
// $.ajax({
//     url: url,
//     method: "POST",
//     data: param,
//     success: function (e) {
//         !(function (e) {
//             $(".minicart").trigger("count:update", e);
//             var t = e.error ? "alert-danger" : "alert-success";
//             e.newBonusDiscountLineItem && 0 !== Object.keys(e.newBonusDiscountLineItem).length
//                 ? c(e.newBonusDiscountLineItem)
//                 : (0 === $(".add-to-cart-messages").length && $("body").append('<div class="add-to-cart-messages"></div>'),
//                   $(".add-to-cart-messages").append('<div class="alert ' + t + ' add-to-basket-alert text-center" role="alert">' + e.message + "</div>"),
//                   setTimeout(function () {
//                       $(".add-to-basket-alert").remove();
//                   }, 5e3));
//         })(e),
//             $("body").trigger("product:afterAddToCart", e),
//             $.spinner().stop()
//             // h(e.reportingURL);
//     },
//     error: function () {
//         $.spinner().stop();
//     },
// });
var s = $("body"),
            o = $(".bundle-item"),
            l = $(".add-to-cart-url");
            u = { pid: 'T325315103', quantity: 1 };
$.ajax({
    url: url,
    method: "POST",
    data: param,
    success: function (e) {
        var t, n;
            s.trigger("product:afterAddToCart", e),
            (t = e),
            $("body").trigger("minicart:render", t),
            s.trigger("count:update", t),
            $.spinner().stop(),
            e.reportingURL && (n = e.reportingURL) && $.ajax({ url: n, method: "GET", success: function () {}, error: function () {} }),
            // a.reportRecommendationToCart(u.pid),
            r.updateAddToCartButton(e, i);
    },
    error: function () {
        $.spinner().stop();
    },
});
//empty
// $.ajax({
//     url: url,
//     method: "POST",
//     data: param,
//     success: function (e) {
//         var t, n;
//         s.trigger("product:afterAddToCart", e),
//             (t = e),
//             s.trigger("minicart:render", t),
//             s.trigger("count:update", t),
//             $.spinner().stop(),
//             // e.reportingURL && (n = e.reportingURL) && $.ajax({ url: n, method: "GET", success: function () {}, error: function () {} }),
//             a.reportRecommendationToCart(u.pid),
//             r.updateAddToCartButton(e, i);
//     },
//     error: function () {
//         $.spinner().stop();
//     },
// });

var url2='https://www.ganni.com/on/demandware.store/Sites-ganni-Site/en/ReportingEvent-MiniCart'
$.ajax({
    url: url2,
    method: "GET",
    success: function (e) {

    },
    error: function () {
       
    },
});

//ganni final code
var url = 'https://www.ganni.com/on/demandware.store/Sites-ganni-Site/en/Cart-AddProduct'

param = 'pid=T325315103&quantity=1&options=%5B%5D'
var s = $("body"),
            o = $(".bundle-item"),
            l = $(".add-to-cart-url");
            u = { pid: 'T325315103', quantity: 1 };
$.ajax({
    url: url,
    method: "POST",
    data: param,
    success: function (e) {
        var t, n;
        // s.trigger("product:afterAddToCart", e),
            (t = e),
            s.trigger("minicart:render", t),
            s.trigger("count:update", t),
            $.spinner().stop(),
            e.reportingURL && (n = e.reportingURL) && $.ajax({ url: n, method: "GET", success: function () {}, error: function () {} }),
            a.reportRecommendationToCart(u.pid),
            r.updateAddToCartButton(e, i);
    },
    error: function () {
        $.spinner().stop();
    },
});


//

//accept: application/json, text/plain, */*
//ocp-apim-subscription-key: cd1817ac421a4eae8bd985e95b139fb1
//universe: ironmongery
//content-type: application/json
//https://api.manutantraders.com/basket/MergeBasket


var url='https://api.manutantraders.com/basket/AddItem'
var prm='{"basketId":6120053,"accountCode":"1211500","emailAddress":"uat@increasingly.com","skuCode":960450,"quantity":1,"length":null,"width":null,"screwholes":null,"calculatedPrice":1.52}'
var xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
xhr.setRequestHeader('content-type', 'application/json');
xhr.setRequestHeader('ocp-apim-subscription-key', 'cd1817ac421a4eae8bd985e95b139fb1');
xhr.onload = function () { }
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        if(xhr.responseText != ""){
            var res = JSON.parse(xhr.responseText)
            var mergeprm='{"basketId":'+res.basketId+',"accountCode":"1211500","emailAddress":""}'
            var xhr1 = new XMLHttpRequest();
            xhr1.open('POST', 'https://api.manutantraders.com/basket/MergeBasket', true);
            xhr1.setRequestHeader('Accept', 'application/json, text/plain, */*');
            xhr1.setRequestHeader('content-type', 'application/json');
            xhr1.setRequestHeader('ocp-apim-subscription-key', 'cd1817ac421a4eae8bd985e95b139fb1');
            xhr1.onload = function () { }
            xhr1.onreadystatechange = function () {
                if (xhr1.readyState === XMLHttpRequest.DONE && xhr1.status === 200) {
                    if(xhr1.responseText != ""){
                        var res = JSON.parse(xhr1.responseText)
                        
                    }
                }
            }
            xhr1.send(mergeprm);
        }
    }
}
xhr.send(prm);


fetch("https://www.wickes.co.uk/cart/add", {
  "headers": {
    "content-type": "application/x-www-form-urlencoded; charset=UTF-8",
  },
  "body": "productCodePost=256939&qty=1",
  "method": "POST",
  "mode": "cors",
  "credentials": "include"
});

var url='https://www.wickes.co.uk/cart/add'
var prm='productCodePost=256939&qty=1'
$.ajax(url, {
    type: "POST",
    contentType: "text/plain",
    headers: {
     'Accept': '*/*',
     'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8',
     'mode': 'cors',
     'credentials': 'include',

   },
    data:prm,
    success: function(result) {
        
    },
});


//



var url='https://mt-gateway.azure-api.net/basket/AddItem'
var prm='{"basketId":0,"accountCode":"","emailAddress":"","skuCode":309700,"quantity":1,"length":null,"width":null,"screwholes":null,"calculatedPrice":null}'
var xhr = new XMLHttpRequest();
xhr.open('POST', url, true);
xhr.setRequestHeader("Accept", "application/json, text/plain, */*");
xhr.setRequestHeader("content-type", "application/json");
xhr.setRequestHeader("ocp-apim-subscription-key","cd1817ac421a4eae8bd985e95b139fb1")
xhr.onload = function () { }
xhr.onreadystatechange = function () {
    if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        if(xhr.responseText != ""){
             // var res = JSON.parse(xhr.responseText)
                var guestBasketArray = '[{"addedByVoucher":false,"expectedDeliveryDate":"2022-10-14T00:00:00","id":565001,"isBackOrder":false,"isDirect":false,"isHazardous":false,"isLongLength":false,"m2mHeight":0,"m2mScrewholes":null,"m2mWidth":0,"name":"Olde Forge Inner Letter Tidy - 295 x 81mm - Antique Black","prices":{"decimalSalePercentage":0,"price":10.45,"priceBreaks":[{"quantity":1,"currentPrice":10.45,"offerPrice":0,"saving":0},{"quantity":10,"currentPrice":9.95,"offerPrice":0,"saving":4}],"salePercentage":0,"salePrice":0,"vatPrice":12.54,"vatPriceBreaks":[{"quantity":1,"currentPrice":12.54,"offerPrice":0,"saving":0},{"quantity":10,"currentPrice":11.94,"offerPrice":0,"saving":4}]},"quantity":1,"skuCode":"565001","stockLevel":245,"url":"olde-forge-inner-letter-tidy-295-x-81mm-antique-black-565001","leadTime":""}]'
                localStorage.setItem('guestBasket', guestBasketArray)
                window.dispatchEvent(new Event("storage"));
        }
    }
}
xhr.send(prm);

//
jQuery.ajax({
            type: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Accept: "*/*"
            },
            url: 'https://us.sandro-paris.com/on/demandware.store/Sites-Sandro-US-Site/en_US/Cart-AddProduct?format=ajax',
            data: 'cartAction=add&pid=3607171764594&prodFrSize=',
            
            error: function(jqXHR, textStatus, errorMessage) {                    },
            success: function(data) {
                jQuery(".cart-wrapper").html(data);
                // if (jQuery(".cart-empty").is(":visible")) {
                //     clearCart();
                //     clearMiniCart();
                // } else {
                //     html = jQuery(".ajax-minicart").html();
                //     jQuery("#mini-cart").html(html);
                //     jQuery(".ajax-minicart").remove();
                //     app.minicart.init();
                // }
                // $(document).trigger("updateCartFinished");
                // window.cartUpdateRunning = false;
            }
        })


jQuery.ajax({
            type: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Accept: "*/*"
            },
            url: 'https://us.sandro-paris.com/on/demandware.store/Sites-Sandro-US-Site/en_US/Cart-AddProduct?format=ajax',
            data: 'cartAction=add&pid=3607171764594&prodFrSize=',
            
            error: function(jqXHR, textStatus, errorMessage) {                    },
            success: function(data) {
                var dataelm = document.createElement('div')
                dataelm.innerHTML = data
                // document.querySelector(".mini-cart-content").innerHTML = dataelm.querySelector('.mini-cart-content').innerHTML
                if(document.querySelector('.mini-cart-content .mini-cart-product .minicart-remove-button') != null){
                    var itemid = document.querySelector('.mini-cart-content .mini-cart-product .minicart-remove-button').getAttribute('aria-describedby')
                    var elmcartitem = document.querySelector('.mini-cart-content .mini-cart-product .minicart-remove-button[aria-describedby="'+itemid+'"]')
                    if(elmcartitem != null){
                        elmcartitem = elmcartitem.parentNode.parentNode.parentNode
                    }
                    if(elmcartitem != null){
                        elmcartitem.querySelector('.btn-add-quantity').click()
                        setTimeout(function(){
                                var elmcartitem_ = document.querySelector('.mini-cart-content .mini-cart-product .minicart-remove-button[aria-describedby="'+itemid+'"]')
                                if(elmcartitem_ != null){
                                    elmcartitem_ = elmcartitem_.parentNode.parentNode.parentNode
                                }
                            elmcartitem_.querySelector('.btn-remove-quantity').click()
                        },2000)
                    }
                }else{
                    localStorage.setItem('inc_added_refresh','1')
                    window.location.reload()
                }
            }
        })
//

//https://us.maje.com/on/demandware.store/Sites-Maje-US-Site/en_US/CartAjax-MiniCartRemove?uuid=7aac73de0f6b1a3ed3b1c80be0&_=1661751881366

jQuery.ajax({
            type: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Accept: "*/*"
            },
            url: 'https://us.maje.com/on/demandware.store/Sites-Maje-US-Site/en_US/Cart-AddProduct?format=ajax',
            data: 'cartAction=add&pid=3661601828959&prodFrSize=',
            
            error: function(jqXHR, textStatus, errorMessage) {                    },
            success: function(data) {
                var dataelm = document.createElement('div')
                dataelm.innerHTML = data
                var elmim = dataelm.querySelectorAll('.mini-cart-image img')
                for(e=0;e<elmim.length;e++){
                    elmim[e].src = elmim[e].getAttribute('data-src')
                }
                if(document.querySelector('.mini-cart-product') != null){
                    document.querySelector("#mini-cart .mini-cart-content").innerHTML = dataelm.querySelector('.mini-cart-content').innerHTML
                    document.querySelector('#mini-cart .mini-cart-label').classList.add('active-cart')
                    document.querySelector('#mini-cart .mini-cart-content').classList.add('open-cart')  
                    removecartfn()
                } else{
                    localStorage.setItem('inc_added_refresh','1')
                    window.location.reload()
                }                                               
                
            }
})

function removecartfn(){
    var elm = document.querySelectorAll('.minicart-remove-button')
    for(l=0;l<elm.length;l++){
        elm[l].addEventListener('click',function(e){
            e.preventDefault()
            var hrfn = this.getAttribute('href')
            var xhr2 = new XMLHttpRequest();
            xhr2.open('GET', hrfn, false);
            xhr2.onload = function() {}
            xhr2.onreadystatechange = function() {
                if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                    if(xhr2.responseText != ""){
                        appendtocart(xhr2.responseText)
                    }       
                }
            }
            xhr2.send();
        })
    }
}
function appendtocart(data){
    var dataelm = document.createElement('div')
    dataelm.innerHTML = data
    var elmim = dataelm.querySelectorAll('.mini-cart-image img')
    for(e=0;e<elmim.length;e++){
        elmim[e].src = elmim[e].getAttribute('data-src')
    }
    if(document.querySelector('.mini-cart-product') != null){
        document.querySelector("#mini-cart .mini-cart-content").innerHTML = dataelm.querySelector('.mini-cart-content').innerHTML
        document.querySelector('#mini-cart .mini-cart-label').classList.add('active-cart')
        document.querySelector('#mini-cart .mini-cart-content').classList.add('open-cart')  
        removecartfn()
    } else{
        localStorage.setItem('inc_added_refresh','1')
        window.location.reload()
    } 
}

if(localStorage.getItem('inc_added_refresh') == "1" && document.querySelector('#mini-cart .mini-cart-label') != null){
        document.querySelector('#mini-cart .mini-cart-label').classList.add('active-cart')
        document.querySelector('#mini-cart .mini-cart-content').classList.add('open-cart')  
        localStorage.removeItem('inc_added_refresh')
    }
    //end
var url2 = 'https://api.manutantraders.com/product/StockCheck/422476?timestamp='
var xhr2 = new XMLHttpRequest();
xhr2.open('GET', url2, false);
xhr2.onload = function() {}
xhr2.setRequestHeader("Accept", "application/json, text/plain, */*");
                    xhr2.setRequestHeader("content-type", "application/json");
                    xhr2.setRequestHeader("ocp-apim-subscription-key", "cd1817ac421a4eae8bd985e95b139fb1");
xhr2.setRequestHeader('accept', '*/*');
xhr2.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        
    }
}
xhr2.send();
//
// title clothing

var prm = 'shop=tilletts.myshopify.com&product=6764167299185&product_variant=39885311770737&lang=en'
var url = 'https://candyrack.digismoothie.app/api/candyrack/offers?shop=tilletts.myshopify.com&product=6764167299185&product_variant=39885311770737&lang=en'

var xhr2 = new XMLHttpRequest();
xhr2.open('GET', url, false);
xhr2.onload = function() {}
xhr2.setRequestHeader("Accept", "application/json, text/plain, */*");
                    xhr2.setRequestHeader("content-type", "application/json");
xhr2.setRequestHeader('accept', '*/*');
xhr2.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        
    }
}
xhr2.send();


var url = 'https://www.tillettsclothing.co.uk/cart/add'
var param = '{"form_type":"product","utf8":"✓","id":"39885311770737","quantity":"1","add":""}'
var xhr = new XMLHttpRequest();
    xhr.open('POST', url, true);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function () { }
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            if(xhr.responseText != ""){
                window.location.reload()
            }
        }
    }
    xhr.send(param);

var url = 'https://www.tillettsclothing.co.uk/cart.js'
var xhr = new XMLHttpRequest();
xhr.open('GET', url, false);
xhr.onload = function() {}
xhr.setRequestHeader('accept', '*/*');
xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        
    }
}
xhr.send();


//wickes crawl
if(document.querySelector('.switch.switch-vat') != null){
    var product_price = 0
    var old_price = null;
    if (document.querySelector('.pdp-price-container .pdp-price__old-price') == null) {
        var product_price = $('.pdp-price-container .pdp-price__new-price').text().split('£')[1].replace(',', '').trim();

        if (product_price.indexOf('From') >= 0) {
            product_price.replace('From', '').trim()
        }
        old_price = null;
    } else {
        var product_price = jQuery('.pdp-price-container .pdp-price__old-price').text().toString().split('£')[1].replace(',', '').trim();

        if (product_price.indexOf('From') >= 0) {
            product_price.replace('From', '').trim()
        }
        old_price = $('.pdp-price-container .pdp-price__new-price').text().replace(',', '').split('£')[1].trim();
    }
    var old_price_exc=null
    var priceexc = null
    if(document.querySelector('.pdp-price-container .pdp-price__value.excluding-vat .pdp-price__new-price') != null){
        priceexc = document.querySelector('.pdp-price-container .pdp-price__value.excluding-vat .pdp-price__new-price').innerText.split('£')[1].replace(',', '').trim();
        if(document.querySelector('.pdp-price-container .pdp-price__value.excluding-vat .pdp-price__old-price') != null){
            old_price_exc = document.querySelector('.pdp-price-container .pdp-price__value.excluding-vat .pdp-price__old-price').innerText.split('£')[1].replace(',', '').trim();
            priceexc = document.querySelector('.pdp-price-container .pdp-price__value.excluding-vat .pdp-price__new-price').innerText.split('£')[1].replace(',', '').trim();
        }
    }
    if(document.querySelector('.pdp-price-container .pdp-price__value.including-vat .pdp-price__new-price') != null){
        product_price=document.querySelector('.pdp-price-container .pdp-price__value.including-vat .pdp-price__new-price').innerText.split('£')[1].replace(',', '').trim();
        if(document.querySelector('.pdp-price-container .pdp-price__value.including-vat .pdp-price__old-price') != null){
            old_price = document.querySelector('.pdp-price-container .pdp-price__value.including-vat .pdp-price__old-price').innerText.split('£')[1].replace(',', '').trim();
            product_price=document.querySelector('.pdp-price-container .pdp-price__value.including-vat .pdp-price__new-price').innerText.split('£')[1].replace(',', '').trim();
        }
    }
}
console.log("product_price - " + product_price + " old_price - " + old_price + "priceexc - " + priceexc + "old_price_exc - " + old_price_exc)


//balsam crawl
function categoryCrawl(){
        var productLayerprod=[];
        setTimeout(function(){
            var elplpprod = document.querySelectorAll('.plp-product-wrap')
            var plpbadge=[]
            for(l=0;l<elplpprod.length;l++){
                var pidplp = elplpprod[l].getAttribute('data-parent')
                var plbadgetext = ""
                if(elplpprod[l].querySelector('.plp-type-badge-text') != null){
                    plbadgetext = elplpprod[l].querySelector('.plp-type-badge-text').innerText
                }
                plpbadge.push({
                    plpid:pidplp,
                    badgeText:plbadgetext
                })
            }
            if(plpbadge.length > 0){
                format_json_data = JSON.stringify({
                    "event_data": {
                        "product_id": product_id,
                        "field1":final_category,
                    },
                    "event_type": "product_page_visit",
                    "method": "track",
                    "token": INC.config.clientToken
                });

                data = {
                    "eventData": btoa(format_json_data),
                    "vid": readCookie('ivid'),
                    "time": getCurrentFormattedTime(),
                    "uri": document.location.href
                };
            
                
                p_url = 'https://gather.increasingly.com/ImportCrawledData';
                if (getCountry() == "b58lus") {
                    p_url = "https://usagather.increasingly.com/ImportCrawledData"
                }
                if (getCountry() == "b58lau") {
                    p_url = "https://usagather.increasingly.com/ImportCrawledData"
                }
                var xhr = new XMLHttpRequest();
                xhr.onreadystatechange = function () {
                    if (xhr.readyState == XMLHttpRequest.DONE) {
                        if (xhr.status == 200) {
                            if (xhr.responseText != "" && xhr.responseText != null) { } else { }
                        }
                    }
                };
                xhr.open("POST", p_url, true);
                xhr.setRequestHeader('Content-Type', 'application/json');
                xhr.send(JSON.stringify(data));
            }
        },200)
    }
    setTimeout(function(){
        categoryCrawl();
    },4000)
//crawl


var url = 'https://www.macpac.co.nz/on/demandware.store/Sites-MacpacNZ-Site/en_NZ/Cart-AddProduct?format=ajax'
var param='Quantity=1&cartAction=add&pid=114097-BLK00-S'
jQuery.ajax({
            type: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
                Accept: "*/*"
            },
            url: url,
            data: param,
            error: function(jqXHR, textStatus, errorMessage) {                    },
            success: function(data) {
                jQuery("#mini-cart").html(data);
                var url2 = 'https://www.macpac.co.nz/on/demandware.store/Sites-MacpacNZ-Site/en_NZ/Product-AddToCartConfirmation?format=ajax&Quantity=1&cartAction=add&pid=114097-BLK00-S'

var xhr2 = new XMLHttpRequest();
xhr2.open('GET', url2, false);
xhr2.onload = function() {}
xhr2.setRequestHeader("Accept", "application/json, text/plain, */*");
                    xhr2.setRequestHeader("content-type", "application/json");
                    xhr2.setRequestHeader("ocp-apim-subscription-key", "cd1817ac421a4eae8bd985e95b139fb1");
xhr2.setRequestHeader('accept', '*/*');
xhr2.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        
        document.querySelector('.dialog-container').style.display = "block"
        document.querySelector('.reveal-overlay').style.display = "block"
    }
}
xhr2.send();
                // if (jQuery(".cart-empty").is(":visible")) {
                //     clearCart();
                //     clearMiniCart();
                // } else {
                //     html = jQuery(".ajax-minicart").html();
                //     jQuery("#mini-cart").html(html);
                //     jQuery(".ajax-minicart").remove();
                //     app.minicart.init();
                // }
                // $(document).trigger("updateCartFinished");
                // window.cartUpdateRunning = false;
            }
        })


//https://log.gs3.goo.ne.jp/aeonns/?action=cart&item=0105200794337970Y%2C1%2C47500&corporate=0105&shop=01050000019810&jan=200794337970Y&amount=47500&p_area=2&url=https%3A%2F%2Fshop.aeon.com%2Fnetsuper%2F01050000019810%2F01050000019810200794337970Y.html&ref=&id=IaOKv0ZdXUItswIgNwkZ8ENyuFhHXFPD-183cae90e8b&sid=IaOKv0ZdXUItswIgNwkZ8ENyuFhHXFPD-183cae90e8b-183cae90e8c&t=1665557264394

// var url='https://log.gs3.goo.ne.jp/aeonns/?action=cart&item=0105200794337970Y%2C1%2C47500&corporate=0105&shop=01050000019810&jan=200794337970Y&amount=47500&p_area=2&url=https%3A%2F%2Fshop.aeon.com%2Fnetsuper%2F01050000019810%2F01050000019810200794337970Y.html&ref=&id=IaOKv0ZdXUItswIgNwkZ8ENyuFhHXFPD-183cae90e8b&sid=IaOKv0ZdXUItswIgNwkZ8ENyuFhHXFPD-183cae90e8b-183cae90e8c&t=1665557264394'

// var xhr2 = new XMLHttpRequest();
// xhr2.open('GET', url, false);
// xhr2.onload = function() {}
// xhr2.setRequestHeader('accept', '*/*');
// xhr2.onreadystatechange = function() {
//     if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        
//     }
// }
// xhr2.send();


// var url2='https://shop.aeon.com/netsuper/01050000019810/checkout/checkproduct/type/?product_id=105108050&quote_id=0&_=1665557608366'

// var xhr2_ = new XMLHttpRequest();
// xhr2_.open('GET', url2, false);
// xhr2_.onload = function() {}
// xhr2_.setRequestHeader('accept', '*/*');
// xhr2_.onreadystatechange = function() {
//     if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        
//     }
// }
// xhr2_.send();


//netsuper

var url='https://shop.aeon.com/netsuper/01050000019810/checkout/cart/add/uenc/aHR0cHM6Ly9zaG9wLmFlb24uY29tL25ldHN1cGVyLzAxMDUwMDAwMDE5ODEwLzAxMDUwMDAwMDE5ODEwMjAwNzk0MzM3OTcwWS5odG1s/product/105108050/'

var param='qty=1&product=105108050&form_key=rVzGSMbAH4BUzwXn&product=105108050&uenc=aHR0cHM6Ly9zaG9wLmFlb24uY29tL25ldHN1cGVyLzAxMDUwMDAwMDE5ODEwL2NoZWNrb3V0L2NhcnQvYWRkL3VlbmMvYUhSMGNITTZMeTl6YUc5d0xtRmxiMjR1WTI5dEwyNWxkSE4xY0dWeUx6QXhNRFV3TURBd01ERTVPREV3THpBeE1EVXdNREF3TURFNU9ERXdNakF3TnprME16TTNPVGN3V1M1b2RHMXMvcHJvZHVjdC8xMDUxMDgwNTAv&form_key=rVzGSMbAH4BUzwXn&product_type=3&cap_id=12167107'
    jQuery.ajax({
        type: "POST",
        url: url,
        data: param,
        error: function(jqXHR, textStatus, errorMessage) {
            
        },
        success: function(res) {
            
        }
    });



    YCW04LKAZ4Z

//cefine latest

var param = 'ctl00%24smScriptManager=ctl00%24ContentPlaceHolder1%24upUpdatePanel%7Cctl00%24ContentPlaceHolder1%24lbCartAdd&ctl00%24BodyHeaderMain%24tbSearchWord=&ctl00%24BodyHeaderMain%24tbSearchWord2=&ctl00%24ContentPlaceHolder1%24hfIsRedirectAfterAddProduct=CART&ctl00%24ContentPlaceHolder1%24ddlVariationSelect=200210203120000000-200210203120200000&ctl00%24ContentPlaceHolder1%24tbCartAddProductCount=1&__EVENTTARGET=ctl00%24ContentPlaceHolder1%24lbCartAdd&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=%2FwEPDwULLTE5NDU3NzE1ODQPFmoeFFN0b2NrRXhpc3RlbmNlU2VhcmNoBQEwHgtWYXJpYXRpb25JZAUlMjAwMjEwMjAzMTIwMDAwMDAwLTIwMDIxMDIwMzEyMDIwMDAwMB4LUHJvZHVjdE5hbWUFSOa4oei%2BuuebtOe%2BjumZkOWumuOCseODvOOCue%2B8i%2BOCt%2BODq%2BOCr%2BOCpuOCp%2BODg%2BODiOODkeOCpuODgOODvOOCu%2BODg%2BODiB4KU2FsZUZpbHRlcgUBMB4ZU3Vic2NyaXB0aW9uQm94U2VhcmNoV29yZGUeC0Rpc3BsYXlTZWxsaB4vY3RsMDAkQ29udGVudFBsYWNlSG9sZGVyMS0%2BdWNCcGFtclJlbGVhc2UuVmFsdWVlHgV0aXRsZQVm5rih6L6655u0576O6ZmQ5a6a44Kx44O844K577yL44K344Or44Kv44Km44Kn44OD44OI44OR44Km44OA44O844K744OD44OI772cQ0VGSU5F77yI44K744OV44Kj44O844OM77yJHjNjdGwwMCRDb250ZW50UGxhY2VIb2xkZXIxLT5kZGxWYXJpYXRpb25TZWxlY3QuVmFsdWVlHgpDYW5BZGRDYXJ0Zx4HU29ydEtibgUCMTAeDERpc3BsYXlDb3VudAJkHi9jdGwwMCRDb250ZW50UGxhY2VIb2xkZXIxLT51Y0JwYW1yQXJyaXZhbC5WYWx1ZWUeDERpc3BJbWFnZUtibgUBMh4KQ2F0ZWdvcnlJZGUeClBhZ2VOdW1iZXICAR4ITWF4UHJpY2VlHjZjdGwwMCRDb250ZW50UGxhY2VIb2xkZXIxLT50YkNhcnRBZGRQcm9kdWN0Q291bnQuVmFsdWUFATEeBlNob3BJZAUBMB4OUHJvZHVjdEdyb3VwSWRlHg5Jc1N0b2NrTWFuYWdlZGceEkRpc3BsYXlPbmx5U3BQcmljZWUeO2N0bDAwJENvbnRlbnRQbGFjZUhvbGRlcjEtPmhJc1NlbGVjdGluZ1ZhcmlhdGlvbkV4aXN0LlZhbHVlZR4QUmVxdWVzdFBhcmFtZXRlcjLWDgABAAAA%2F%2F%2F%2F%2FwEAAAAAAAAABAEAAADiAVN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkRpY3Rpb25hcnlgMltbU3lzdGVtLlN0cmluZywgbXNjb3JsaWIsIFZlcnNpb249NC4wLjAuMCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iNzdhNWM1NjE5MzRlMDg5XSxbU3lzdGVtLlN0cmluZywgbXNjb3JsaWIsIFZlcnNpb249NC4wLjAuMCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1iNzdhNWM1NjE5MzRlMDg5XV0EAAAAB1ZlcnNpb24IQ29tcGFyZXIISGFzaFNpemUNS2V5VmFsdWVQYWlycwADAAMIkgFTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5HZW5lcmljRXF1YWxpdHlDb21wYXJlcmAxW1tTeXN0ZW0uU3RyaW5nLCBtc2NvcmxpYiwgVmVyc2lvbj00LjAuMC4wLCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPWI3N2E1YzU2MTkzNGUwODldXQjmAVN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLktleVZhbHVlUGFpcmAyW1tTeXN0ZW0uU3RyaW5nLCBtc2NvcmxpYiwgVmVyc2lvbj00LjAuMC4wLCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPWI3N2E1YzU2MTkzNGUwODldLFtTeXN0ZW0uU3RyaW5nLCBtc2NvcmxpYiwgVmVyc2lvbj00LjAuMC4wLCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPWI3N2E1YzU2MTkzNGUwODldXVtdFQAAAAkCAAAAJQAAAAkDAAAABAIAAACSAVN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLkdlbmVyaWNFcXVhbGl0eUNvbXBhcmVyYDFbW1N5c3RlbS5TdHJpbmcsIG1zY29ybGliLCBWZXJzaW9uPTQuMC4wLjAsIEN1bHR1cmU9bmV1dHJhbCwgUHVibGljS2V5VG9rZW49Yjc3YTVjNTYxOTM0ZTA4OV1dAAAAAAcDAAAAAAEAAAAVAAAAA%2BQBU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuS2V5VmFsdWVQYWlyYDJbW1N5c3RlbS5TdHJpbmcsIG1zY29ybGliLCBWZXJzaW9uPTQuMC4wLjAsIEN1bHR1cmU9bmV1dHJhbCwgUHVibGljS2V5VG9rZW49Yjc3YTVjNTYxOTM0ZTA4OV0sW1N5c3RlbS5TdHJpbmcsIG1zY29ybGliLCBWZXJzaW9uPTQuMC4wLjAsIEN1bHR1cmU9bmV1dHJhbCwgUHVibGljS2V5VG9rZW49Yjc3YTVjNTYxOTM0ZTA4OV1dBPz%2F%2F%2F%2FkAVN5c3RlbS5Db2xsZWN0aW9ucy5HZW5lcmljLktleVZhbHVlUGFpcmAyW1tTeXN0ZW0uU3RyaW5nLCBtc2NvcmxpYiwgVmVyc2lvbj00LjAuMC4wLCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPWI3N2E1YzU2MTkzNGUwODldLFtTeXN0ZW0uU3RyaW5nLCBtc2NvcmxpYiwgVmVyc2lvbj00LjAuMC4wLCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPWI3N2E1YzU2MTkzNGUwODldXQIAAAADa2V5BXZhbHVlAQEGBQAAAARzaG9wBgYAAAABMAH5%2F%2F%2F%2F%2FP%2F%2F%2FwYIAAAAA3BpZAYJAAAAEjIwMDIxMDIwMzEyMDAwMDAwMAH2%2F%2F%2F%2F%2FP%2F%2F%2FwYLAAAAA3ZpZAYMAAAAAAHz%2F%2F%2F%2F%2FP%2F%2F%2FwYOAAAAA3BubwYPAAAAATEB8P%2F%2F%2F%2Fz%2F%2F%2F8GEQAAAANjYXQJDAAAAAHt%2F%2F%2F%2F%2FP%2F%2F%2FwYUAAAABHN3cmQJDAAAAAHq%2F%2F%2F%2F%2FP%2F%2F%2FwYXAAAABnNic3dyZAkMAAAAAef%2F%2F%2F%2F8%2F%2F%2F%2FBhoAAAADY29sCQwAAAAB5P%2F%2F%2F%2Fz%2F%2F%2F8GHQAAAANpbWcGHgAAAAEyAeH%2F%2F%2F%2F8%2F%2F%2F%2FBiAAAAAEc29ydAYhAAAAAjEwAd7%2F%2F%2F%2F8%2F%2F%2F%2FBiMAAAAFY2ljb24JDAAAAAHb%2F%2F%2F%2F%2FP%2F%2F%2FwYmAAAAA21pbgkMAAAAAdj%2F%2F%2F%2F8%2F%2F%2F%2FBikAAAADbWF4CQwAAAAB1f%2F%2F%2F%2Fz%2F%2F%2F8GLAAAAAVkcGNudAYtAAAAAi0xAdL%2F%2F%2F%2F8%2F%2F%2F%2FBi8AAAAEdWRucwYwAAAAATABz%2F%2F%2F%2F%2Fz%2F%2F%2F8GMgAAAARkb3NwCQwAAAABzP%2F%2F%2F%2Fz%2F%2F%2F8GNQAAAARmcGZsBjYAAAABMAHJ%2F%2F%2F%2F%2FP%2F%2F%2FwY4AAAAA3NmbAk2AAAAAcb%2F%2F%2F%2F8%2F%2F%2F%2FBjsAAAADcGdpCQwAAAABw%2F%2F%2F%2F%2Fz%2F%2F%2F8GPgAAAANiaWQJDAAAAAHA%2F%2F%2F%2F%2FP%2F%2F%2FwZBAAAACmJyYW5kX25hbWUKCx4WU2VsZWN0ZWRWYXJpYXRpb25OYW1lM2UeE0ZpeGVkUHVyY2hhc2VGaWx0ZXIFATAePGN0bDAwJENvbnRlbnRQbGFjZUhvbGRlcjEtPnJQcm9kdWN0T3B0aW9uVmFsdWVTZXR0aW5ncy5WYWx1ZWUeDENhbkdpZnRPcmRlcmgeBUNvbG9yZR4WU2VsZWN0ZWRWYXJpYXRpb25OYW1lMmUeDEhhc1ZhcmlhdGlvbmceLmN0bDAwJENvbnRlbnRQbGFjZUhvbGRlcjEtPnVjQnBhbXJSZXNhbGUuVmFsdWVlHg9IYXNTdG9ja01lc3NhZ2VoHg9TZWxlY3RWYXJpYXRpb25nHgxBbGVydE1lc3NhZ2VlHgdCdXlhYmxlZx4bcHJvZHVjdF9vcHRpb25fc2V0dGluZ19saXN0MoMFAAEAAAD%2F%2F%2F%2F%2FAQAAAAAAAAAMAgAAAER3Mi5BcHAuQ29tbW9uLCBWZXJzaW9uPTEuMC4wLjAsIEN1bHR1cmU9bmV1dHJhbCwgUHVibGljS2V5VG9rZW49bnVsbAUBAAAALncyLkFwcC5Db21tb24uUHJvZHVjdC5Qcm9kdWN0T3B0aW9uU2V0dGluZ0xpc3QBAAAAFjxJdGVtcz5rX19CYWNraW5nRmllbGQDlQFTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0YDFbW3cyLkFwcC5Db21tb24uUHJvZHVjdC5Qcm9kdWN0T3B0aW9uU2V0dGluZywgdzIuQXBwLkNvbW1vbiwgVmVyc2lvbj0xLjAuMC4wLCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPW51bGxdXQIAAAAJAwAAAAQDAAAAlQFTeXN0ZW0uQ29sbGVjdGlvbnMuR2VuZXJpYy5MaXN0YDFbW3cyLkFwcC5Db21tb24uUHJvZHVjdC5Qcm9kdWN0T3B0aW9uU2V0dGluZywgdzIuQXBwLkNvbW1vbiwgVmVyc2lvbj0xLjAuMC4wLCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPW51bGxdXQMAAAAGX2l0ZW1zBV9zaXplCF92ZXJzaW9uBAAALHcyLkFwcC5Db21tb24uUHJvZHVjdC5Qcm9kdWN0T3B0aW9uU2V0dGluZ1tdAgAAAAgICQQAAAAAAAAAAAAAAAcEAAAAAAEAAAAAAAAABCp3Mi5BcHAuQ29tbW9uLlByb2R1Y3QuUHJvZHVjdE9wdGlvblNldHRpbmcCAAAACx4OQXJyaXZhbE1haWxLYm5kHgxDYW1wYWlnbkljb25lHg5Qcm9kdWN0Q29sb3JJZGUePmN0bDAwJENvbnRlbnRQbGFjZUhvbGRlcjEtPmhmU2hvd091dE9mU3RvY2tDcm9zc1NlbGxMaXN0LlZhbHVlBQRUcnVlHhJTZWxlY3RWYXJpYXRpb25LYm4LKXB3Mi5BcHAuQ29tbW9uLkNvbnN0YW50cytTZWxlY3RWYXJpYXRpb25LYm4sIHcyLkFwcC5Db21tb24sIFZlcnNpb249MS4wLjAuMCwgQ3VsdHVyZT1uZXV0cmFsLCBQdWJsaWNLZXlUb2tlbj1udWxsAB4WU2VsZWN0ZWRWYXJpYXRpb25OYW1lMWUeCE1pblByaWNlZR4QSXNWYXJpYXRpb25OYW1lM2geClNlYXJjaFdvcmRlHglQcm9kdWN0SWQFEjIwMDIxMDIwMzEyMDAwMDAwMB47Y3RsMDAkQ29udGVudFBsYWNlSG9sZGVyMS0%2BaGZTaG93T3V0T2ZTdG9ja1VwU2VsbExpc3QuVmFsdWUFBFRydWUeDlByb2R1Y3RUYWdMaXN0MuQGAAEAAAD%2F%2F%2F%2F%2FAQAAAAAAAAAEAQAAAI4BU3lzdGVtLkNvbGxlY3Rpb25zLkdlbmVyaWMuTGlzdGAxW1tTeXN0ZW0uQ29sbGVjdGlvbnMuSGFzaHRhYmxlLCBtc2NvcmxpYiwgVmVyc2lvbj00LjAuMC4wLCBDdWx0dXJlPW5ldXRyYWwsIFB1YmxpY0tleVRva2VuPWI3N2E1YzU2MTkzNGUwODldXQMAAAAGX2l0ZW1zBV9zaXplCF92ZXJzaW9uAwAAHlN5c3RlbS5Db2xsZWN0aW9ucy5IYXNodGFibGVbXQgICQIAAAAEAAAABAAAAAcCAAAAAAEAAAAEAAAAAxxTeXN0ZW0uQ29sbGVjdGlvbnMuSGFzaHRhYmxlCQMAAAAJBAAAAAkFAAAACQYAAAAEAwAAABxTeXN0ZW0uQ29sbGVjdGlvbnMuSGFzaHRhYmxlBwAAAApMb2FkRmFjdG9yB1ZlcnNpb24IQ29tcGFyZXIQSGFzaENvZGVQcm92aWRlcghIYXNoU2l6ZQRLZXlzBlZhbHVlcwAAAwMABQULCBxTeXN0ZW0uQ29sbGVjdGlvbnMuSUNvbXBhcmVyJFN5c3RlbS5Db2xsZWN0aW9ucy5JSGFzaENvZGVQcm92aWRlcgjsUTg%2FAgAAAAoKAwAAAAkHAAAACQgAAAABBAAAAAMAAADsUTg%2FAgAAAAoKAwAAAAkJAAAACQoAAAABBQAAAAMAAADsUTg%2FAgAAAAoKAwAAAAkLAAAACQwAAAABBgAAAAMAAADsUTg%2FAgAAAAoKAwAAAAkNAAAACQ4AAAAQBwAAAAIAAAAGDwAAAAZ0YWdfaWQGEAAAAAh0YWdfbmFtZRAIAAAAAgAAAAYRAAAACHRhZ19pY29uBhIAAAAM44Ki44Kk44Kz44OzEAkAAAACAAAACQ8AAAAJEAAAABAKAAAAAgAAAAYVAAAADHRhZ19tYXRlcmlhbAYWAAAABue0oOadkBALAAAAAgAAAAkPAAAACRAAAAAQDAAAAAIAAAAGGQAAAAx0YWdfY2FwYWNpdHkGGgAAAAblrrnph48QDQAAAAIAAAAJDwAAAAkQAAAAEA4AAAACAAAABh0AAAAMdGFnX2NhdGVnb3J5Bh4AAAAP44Kr44OG44K044Oq44O8Cx40Y3RsMDAkQ29udGVudFBsYWNlSG9sZGVyMS0%2BZGRsVmFyaWF0aW9uU2VsZWN0MS5WYWx1ZWUeNGN0bDAwJENvbnRlbnRQbGFjZUhvbGRlcjEtPmRkbFZhcmlhdGlvblNlbGVjdDIuVmFsdWVlHhBDYW5GaXhlZFB1cmNoYXNlaB4SU3Vic2NyaXB0aW9uQm94RmxnBQEwFgJmD2QWBGYPZBYCAhAPZBYGZg8VA8wC44K744OV44Kj44O844OMLENFRklORSzjgrXjg63jg7Ms44Oh44Kk44Kv44Ki44OD44OXLOOCs%2BOCueODoSznvo7lrrksLE1BS0UgVVAs5rih6L6655u0576O6ZmQ5a6a44Kx44O844K577yL44K344Or44Kv44Km44Kn44OD44OI44OR44Km44OA44O844K744OD44OILOODkeOCpuODgOODvOODleOCoeODs%2BODh%2BODvOOCt%2BODp%2BODsyzjg5XjgqHjg7Pjg4fjg7zjgrfjg6fjg7Ms44OV44Kh44Oz44OHLOa4oei%2BuuebtOe%2Bjizjgrfjg6vjgq8s44OG44Kr44OqLOOBj%2BOBmeOBvyzjgq3jg7zjg5flipss576O5a655oiQ5YiG6YWN5ZCILOOBhuOCi%2BOBiuOBhCzjgY%2FjgZrjgozjgavjgY%2FjgYSJAeOCu%2BODleOCo%2BODvOODjCZsdDvlhazlvI%2Fjg5bjg6njg7Pjg4njgrXjgqTjg4gmZ3Q75rih6L6655u0576O6ZmQ5a6a44Kx44O844K577yL44K344Or44Kv44Km44Kn44OD44OI44OR44Km44OA44O844K744OD44OI44Gu5ZWG5ZOB6Kmz57SwSOa4oei%2BuuebtOe%2BjumZkOWumuOCseODvOOCue%2B8i%2BOCt%2BODq%2BOCr%2BOCpuOCp%2BODg%2BODiOODkeOCpuODgOODvOOCu%2BODg%2BODiGQCAQ8VASF3Mi1pbWclMmZtYWtldXAlMmZsaW1pdGVkMjFjYXNlX3NkAgIPFQFbaHR0cHM6Ly9jZWZpbmVjb3NtZXRpY3MuY28uanAvRm9ybS9Qcm9kdWN0L1Byb2R1Y3REZXRhaWwuYXNweD9zaG9wPTAmcGlkPTIwMDIxMDIwMzEyMDAwMDAwMGQCAhAWAh4GYWN0aW9uBT4vRm9ybS9Qcm9kdWN0L1Byb2R1Y3REZXRhaWwuYXNweD9zaG9wPTAmcGlkPTIwMDIxMDIwMzEyMDAwMDAwMGQWBgIBDw8WBB4pY3RsMDAkQm9keUhlYWRlck1haW4tPmRkbENhdGVnb3JpZXMuVmFsdWVlHihjdGwwMCRCb2R5SGVhZGVyTWFpbi0%2BdGJTZWFyY2hXb3JkLlZhbHVlZWQWAgICD2QWAmYPZBYCZg8PFgQeNGN0bDAwJEJvZHlIZWFkZXJNYWluJEJvZHlNaW5pQ2FydC0%2BZGl2TWluaUNhcnQuVmFsdWVlHjljdGwwMCRCb2R5SGVhZGVyTWFpbiRCb2R5TWluaUNhcnQtPmRpdk1pbmlDYXJ0RW1wdHkuVmFsdWVlZBYCZg9kFgJmD2QWAmYPFgIeB1Zpc2libGVoFgICAQ8WAh4LXyFJdGVtQ291bnQC%2F%2F%2F%2F%2Fw9kAgMPZBYUAgEPZBYCZg8WAh87AgEWAgIBD2QWAmYPFQJ%2FL0Zvcm0vUHJvZHVjdC9Qcm9kdWN0TGlzdC5hc3B4P3Nob3A9MCZhbXA7Y2F0PTIwMCZhbXA7ZHBjbnQ9MTAwJmFtcDtpbWc9MiZhbXA7c29ydD0xMCZhbXA7dWRucz0wJmFtcDtmcGZsPTAmYW1wO3NmbD0wJmFtcDtwbm89MQdNQUtFIFVQZAICD2QWAmYPZBYmZg9kFgYCAQ8PFgIeCEltYWdlVXJsBUIvQ29udGVudHMvUHJvZHVjdEltYWdlcy8wL3cyLWltZyUyZm1ha2V1cCUyZmxpbWl0ZWQyMWNhc2Vfc19MTC5qcGdkZAIDDxYCHzsCChYUZg9kFgICAQ8PFgIfPAVIL0NvbnRlbnRzL1Byb2R1Y3RJbWFnZXMvMC93Mi1pbWclMmZ2YXJpYXRpb24lMmYyMDAyMTAxNjIwNDkwMDEwMDBfTEwuanBnZGQCAQ9kFgICAQ8PFgIfPAVIL0NvbnRlbnRzL1Byb2R1Y3RJbWFnZXMvMC93Mi1pbWclMmZ2YXJpYXRpb24lMmYyMDAyMTAxNjIwNDkwOTAwMDBfTEwuanBnZGQCAg9kFgICAQ8PFgIfPAVIL0NvbnRlbnRzL1Byb2R1Y3RJbWFnZXMvMC93Mi1pbWclMmZ2YXJpYXRpb24lMmYyMDAyMTAxNjIwNDkxMDAwMDBfTEwuanBnZGQCAw9kFgICAQ8PFgIfPAVIL0NvbnRlbnRzL1Byb2R1Y3RJbWFnZXMvMC93Mi1pbWclMmZ2YXJpYXRpb24lMmYyMDAyMTAxNjIwNDkxMTAwMDBfTEwuanBnZGQCBA9kFgICAQ8PFgIfPAVIL0NvbnRlbnRzL1Byb2R1Y3RJbWFnZXMvMC93Mi1pbWclMmZ2YXJpYXRpb24lMmYyMDAyMTAxNjIwNDkxMjAwMDBfTEwuanBnZGQCBQ9kFgICAQ8PFgIfPAVIL0NvbnRlbnRzL1Byb2R1Y3RJbWFnZXMvMC93Mi1pbWclMmZ2YXJpYXRpb24lMmYyMDAyMTAxNjIwNDkxMzAwMDBfTEwuanBnZGQCBg9kFgICAQ8PFgIfPAVIL0NvbnRlbnRzL1Byb2R1Y3RJbWFnZXMvMC93Mi1pbWclMmZ2YXJpYXRpb24lMmYyMDAyMTAxNjIwNDkxNTAwMDBfTEwuanBnZGQCBw9kFgICAQ8PFgIfPAVIL0NvbnRlbnRzL1Byb2R1Y3RJbWFnZXMvMC93Mi1pbWclMmZ2YXJpYXRpb24lMmYyMDAyMTAxNjIwNDkyMDAwMDBfTEwuanBnZGQCCA9kFgICAQ8PFgIfPAVIL0NvbnRlbnRzL1Byb2R1Y3RJbWFnZXMvMC93Mi1pbWclMmZ2YXJpYXRpb24lMmYyMDAyMTAxNjIwNDkyMTAwMDBfTEwuanBnZGQCCQ9kFgICAQ8PFgIfPAVIL0NvbnRlbnRzL1Byb2R1Y3RJbWFnZXMvMC93Mi1pbWclMmZ2YXJpYXRpb24lMmYyMDAyMTAxNjIwNDkyMjAwMDBfTEwuanBnZGQCBQ8WBB87Zh86aGQCCw9kFhxmDxUCSOa4oei%2BuuebtOe%2BjumZkOWumuOCseODvOOCue%2B8i%2BOCt%2BODq%2BOCr%2BOCpuOCp%2BODg%2BODiOODkeOCpuODgOODvOOCu%2BODg%2BODiABkAgEPFgIfOmgWAmYPFQQLJiMxNjU7NCw0MDAG56iO6L68AAbnqI7ovrxkAgIPFgIfOmgWAmYPFQQLJiMxNjU7NCw0MDAG56iO6L68AAbnqI7ovrxkAgMPFgIfOmgWAmYPFQULJiMxNjU7NCw0MDALJiMxNjU7NCwwMDAABueojui%2BvABkAgQPFgIfOmcWAmYPFQMACyYjMTY1OzQsNDAwCyYjMTY1OzQsMDAwZAIFDxYCHzpoFgRmDxYCHzpoFgJmDxUCAAbnqI7ovrxkAgEPFQILJiMxNjU7NCw0MDAG56iO6L68ZAIGDxUBkg48IS0tPHA%2BJm5ic3A7PC9wPg0KPHA%2BPHNwYW4gc3R5bGU9ImZvbnQtc2l6ZToxNnB4O2NvbG9yOiNmZDg5ODk7Ij48c3Ryb25nPuOAkDEx5pyINOaXpe%2B9nuS6iOe0hOWPl%2BS7mOS4reOAkTwvc3Ryb25nPjwvc3Bhbj48L3A%2BDQo8cD4mbmJzcDs8L3A%2BDQo8cCBzdHlsZT0ibGluZS1oZWlnaHQ6IDEuNTsiPuOBk%2BOBoeOCieOBruWVhuWTgeOBr%2BS6iOe0hOWVhuWTgeOBp%2BOBmeOAgjEx5pyIMTHml6Xjgojjgornmbrlo7LjgpLplovlp4vjgZfjgIHpoIbmrKHnmbrpgIHjgYTjgZ%2FjgZfjgb7jgZnjgII8YnI%2BDQrkuojntITllYblk4HjgajpgJrluLjllYblk4HjgpLlkIzmmYLjgavjgYrmsYLjgoHjgYTjgZ%2FjgaDjgY%2FjgZPjgajjga%2FjgafjgY3jgb7jgZvjgpPjgILlkIzmmYLjgavjgYrmsYLjgoHjgYTjgZ%2FjgaDjgY%2FjgajliKXjgqvjg7zjg4jmsbrmuIjjgajjgarjgorjgIHpgIHmlpnjg7vmiYvmlbDmlpnnrYnjgYzliKXpgJTjgYvjgYvjgovlj6%2Fog73mgKfjgYzjgYLjgorjgb7jgZnjga7jgafjgIHjgZTms6jmhI%2FjgY%2FjgaDjgZXjgYTjgII8L3A%2BLS0%2BDQoNCjxwPiZuYnNwOzwvcD4NCjwhLS08cCBzdHlsZT0ibWFyZ2luLWJvdHRvbToxLjVlbTtsaW5lLWhlaWdodDoxLjU7Ij48c3BhbiBzdHlsZT0iY29sb3I6cmVkOyBmb250LXNpemU6MTNweDtmb250LXdlaWdodDpib2xkOyI%2B44OR44Km44OA44O844Oh44Kk44Kv44Ki44OD44OX44K544Od44Oz44K4KDHlgIsp44Gu44OO44OZ44Or44OG44Kj44Gv57WC5LqG44GE44Gf44GX44G%2B44GX44Gf44CCPGJyPjwvc3Bhbj48L3A%2BLS0%2BDQo8cD48c3BhbiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjojMDA4MDgwOyBjb2xvcjojRkZGRkZGOyBmb250LXNpemU6MTNweDtmb250LXdlaWdodDo2MDA7cGFkZGluZzoycHggNXB4Ij4mbmJzcDvjg43jgrPjg53jgrnlr77lv5zllYblk4EmbmJzcDs8L3NwYW4%2BPC9wPg0KPHA%2BJm5ic3A7PC9wPg0KPCEtLTxwPjxzcGFuIHN0eWxlPSJmb250LXNpemU6MTBweCI%2B4oC744ON44Kz44Od44K55a%2B%2B5b%2Bc5ZWG5ZOB44Gv77yT44Gk44G%2B44Gn44ON44Kz44Od44K544Gn6YWN6YCB44GE44Gf44GX44G%2B44GZ44CCPC9zcGFuPjwvcD4tLT4NCjxwPjxhIGhyZWY9Imh0dHBzOi8vY2VmaW5lY29zbWV0aWNzLmNvLmpwL1BhZ2UvZmFxLmFzcHgjZGVsaXZlcnkiPjxzcGFuIHN0eWxlPSJmb250LXNpemU6MTBweCI%2BPHU%2B44ON44Kz44Od44K544Gr44Gk44GE44GmIOOCiOOBj%2BOBguOCi%2BOBlOizquWVjyDvvJ48L3U%2BPC9zcGFuPjwvYT48L3A%2BDQoNCjwhLS0NCjxkaXYgY2xhc3M9InAtY3AtdHh0IiBzdHlsZT0ibWFyZ2luLXRvcDogMmVtOyI%2BDQo8cD48c3BhbiBzdHlsZT0iY29sb3I6I2FhYjY1NDsgZm9udC1zaXplOjE0cHg7bGluZS1oZWlnaHQ6MS41ZW07Ij48c3Ryb25nPuOAkDjmnIgzMeaXpeOBvuOBp%2BOAkTxicj7jgq%2Fjg6zjg7Pjgrjjg7PjgrDjgqrjgqTjg6vvvIvjgrfjg6vjgq%2Fjgqbjgqfjg4Pjg4jjg5Hjgqbjg4Djg7zjgq3jg6Pjg7Pjg5rjg7zjg7PkuK3vvIE8L3N0cm9uZz48L3NwYW4%2BPC9wPg0KJm5ic3A7DQo8cD48c3BhbiBzdHlsZT0iZm9udC1zaXplOjEycHg7Ij7kuIDnt5Ljgavos7zlhaXjgacyMO%2B8heOCquODleKZqiA8dT48YSBocmVmPSJodHRwczovL2NlZmluZWNvc21ldGljcy5jby5qcC9QYWdlLzIwMjJTd3BOY29TUy5hc3B4IiB0YXJnZXQ9Il9ibGFuayI%2B6Kmz44GX44GP44Gv44GT44Gh44KJIO%2B8njwvYT48L3U%2BPC9wPg0KPC9kaXY%2BDQotLT4NCg0KDQo8c3R5bGU%2BDQojZHZQcm9kdWN0RGV0YWlsQXJlYSAuaWNvbiBzcGFuIHsNCgltYXJnaW4tcmlnaHQ6IDVweDsNCn0NCjwvc3R5bGU%2BZAIHDxYCHzpoZAIID2QWBGYPFQEAZAIBDxUBAGQCCQ8VAa4BamF2YXNjcmlwdDpzaG93X3BvcHVwX3dpbmRvdygmIzM5Oy9Gb3JtL1Byb2R1Y3QvUHJvZHVjdFN0b2NrTGlzdC5hc3B4P3Nob3A9MCZhbXA7cGlkPTIwMDIxMDIwMzEyMDAwMDAwMCYjMzk7LCA3MDAsIDQwMCwgdHJ1ZSwgdHJ1ZSwgJiMzOTtQcm9kdWN0U3RvY2tMaXN0JiMzOTspOyByZXR1cm4gZmFsc2U7ZAIKDxUBAGQCCw8WAh87AgoWFAIBD2QWBGYPFQEAZAIBDw8WAh4PQ29tbWFuZEFyZ3VtZW50BSUyMDAyMTAyMDMxMjAwMDAwMDAtMjAwMjEwMjAzMTIwMDAxMDAwZBYGZg8VAiUyMDAyMTAyMDMxMjAwMDAwMDAtMjAwMjEwMjAzMTIwMDAxMDAwJTIwMDIxMDIwMzEyMDAwMDAwMC0yMDAyMTAyMDMxMjAwMDEwMDBkAgEPDxYCHzwFRy9Db250ZW50cy9Qcm9kdWN0SW1hZ2VzLzAvdzItaW1nJTJmdmFyaWF0aW9uJTJmMjAwMjEwMTYyMDQ5MDAxMDAwX00uanBnZGQCAg8VARXmuKHovrrnm7Tnvo7jgqvjg6njg7xkAgIPZBYEZg8VAQBkAgEPDxYCHz0FJTIwMDIxMDIwMzEyMDAwMDAwMC0yMDAyMTAyMDMxMjAwOTAwMDBkFgZmDxUCJTIwMDIxMDIwMzEyMDAwMDAwMC0yMDAyMTAyMDMxMjAwOTAwMDAlMjAwMjEwMjAzMTIwMDAwMDAwLTIwMDIxMDIwMzEyMDA5MDAwMGQCAQ8PFgIfPAVHL0NvbnRlbnRzL1Byb2R1Y3RJbWFnZXMvMC93Mi1pbWclMmZ2YXJpYXRpb24lMmYyMDAyMTAxNjIwNDkwOTAwMDBfTS5qcGdkZAICDxUBBE9DOTBkAgMPZBYEZg8VAQBkAgEPDxYCHz0FJTIwMDIxMDIwMzEyMDAwMDAwMC0yMDAyMTAyMDMxMjAxMDAwMDBkFgZmDxUCJTIwMDIxMDIwMzEyMDAwMDAwMC0yMDAyMTAyMDMxMjAxMDAwMDAlMjAwMjEwMjAzMTIwMDAwMDAwLTIwMDIxMDIwMzEyMDEwMDAwMGQCAQ8PFgIfPAVHL0NvbnRlbnRzL1Byb2R1Y3RJbWFnZXMvMC93Mi1pbWclMmZ2YXJpYXRpb24lMmYyMDAyMTAxNjIwNDkxMDAwMDBfTS5qcGdkZAICDxUBBU9DMTAwZAIED2QWBGYPFQEAZAIBDw8WAh89BSUyMDAyMTAyMDMxMjAwMDAwMDAtMjAwMjEwMjAzMTIwMTEwMDAwZBYGZg8VAiUyMDAyMTAyMDMxMjAwMDAwMDAtMjAwMjEwMjAzMTIwMTEwMDAwJTIwMDIxMDIwMzEyMDAwMDAwMC0yMDAyMTAyMDMxMjAxMTAwMDBkAgEPDxYCHzwFRy9Db250ZW50cy9Qcm9kdWN0SW1hZ2VzLzAvdzItaW1nJTJmdmFyaWF0aW9uJTJmMjAwMjEwMTYyMDQ5MTEwMDAwX00uanBnZGQCAg8VAQVPQzExMGQCBQ9kFgRmDxUBAGQCAQ8PFgIfPQUlMjAwMjEwMjAzMTIwMDAwMDAwLTIwMDIxMDIwMzEyMDEyMDAwMGQWBmYPFQIlMjAwMjEwMjAzMTIwMDAwMDAwLTIwMDIxMDIwMzEyMDEyMDAwMCUyMDAyMTAyMDMxMjAwMDAwMDAtMjAwMjEwMjAzMTIwMTIwMDAwZAIBDw8WAh88BUcvQ29udGVudHMvUHJvZHVjdEltYWdlcy8wL3cyLWltZyUyZnZhcmlhdGlvbiUyZjIwMDIxMDE2MjA0OTEyMDAwMF9NLmpwZ2RkAgIPFQEFT0MxMjBkAgYPZBYEZg8VAQBkAgEPDxYCHz0FJTIwMDIxMDIwMzEyMDAwMDAwMC0yMDAyMTAyMDMxMjAxMzAwMDBkFgZmDxUCJTIwMDIxMDIwMzEyMDAwMDAwMC0yMDAyMTAyMDMxMjAxMzAwMDAlMjAwMjEwMjAzMTIwMDAwMDAwLTIwMDIxMDIwMzEyMDEzMDAwMGQCAQ8PFgIfPAVHL0NvbnRlbnRzL1Byb2R1Y3RJbWFnZXMvMC93Mi1pbWclMmZ2YXJpYXRpb24lMmYyMDAyMTAxNjIwNDkxMzAwMDBfTS5qcGdkZAICDxUBBU9DMTMwZAIHD2QWBGYPFQEAZAIBDw8WAh89BSUyMDAyMTAyMDMxMjAwMDAwMDAtMjAwMjEwMjAzMTIwMTUwMDAwZBYGZg8VAiUyMDAyMTAyMDMxMjAwMDAwMDAtMjAwMjEwMjAzMTIwMTUwMDAwJTIwMDIxMDIwMzEyMDAwMDAwMC0yMDAyMTAyMDMxMjAxNTAwMDBkAgEPDxYCHzwFRy9Db250ZW50cy9Qcm9kdWN0SW1hZ2VzLzAvdzItaW1nJTJmdmFyaWF0aW9uJTJmMjAwMjEwMTYyMDQ5MTUwMDAwX00uanBnZGQCAg8VAQVPQzE1MGQCCA9kFgRmDxUBECBjbGFzcz0nY2hlY2tlZCdkAgEPDxYCHz0FJTIwMDIxMDIwMzEyMDAwMDAwMC0yMDAyMTAyMDMxMjAyMDAwMDBkFgZmDxUCJTIwMDIxMDIwMzEyMDAwMDAwMC0yMDAyMTAyMDMxMjAyMDAwMDAlMjAwMjEwMjAzMTIwMDAwMDAwLTIwMDIxMDIwMzEyMDIwMDAwMGQCAQ8PFgIfPAVHL0NvbnRlbnRzL1Byb2R1Y3RJbWFnZXMvMC93Mi1pbWclMmZ2YXJpYXRpb24lMmYyMDAyMTAxNjIwNDkyMDAwMDBfTS5qcGdkZAICDxUBBU5BMjAwZAIJD2QWBGYPFQEAZAIBDw8WAh89BSUyMDAyMTAyMDMxMjAwMDAwMDAtMjAwMjEwMjAzMTIwMjEwMDAwZBYGZg8VAiUyMDAyMTAyMDMxMjAwMDAwMDAtMjAwMjEwMjAzMTIwMjEwMDAwJTIwMDIxMDIwMzEyMDAwMDAwMC0yMDAyMTAyMDMxMjAyMTAwMDBkAgEPDxYCHzwFRy9Db250ZW50cy9Qcm9kdWN0SW1hZ2VzLzAvdzItaW1nJTJmdmFyaWF0aW9uJTJmMjAwMjEwMTYyMDQ5MjEwMDAwX00uanBnZGQCAg8VAQVOQTIxMGQCCg9kFgRmDxUBAGQCAQ8PFgIfPQUlMjAwMjEwMjAzMTIwMDAwMDAwLTIwMDIxMDIwMzEyMDIyMDAwMGQWBmYPFQIlMjAwMjEwMjAzMTIwMDAwMDAwLTIwMDIxMDIwMzEyMDIyMDAwMCUyMDAyMTAyMDMxMjAwMDAwMDAtMjAwMjEwMjAzMTIwMjIwMDAwZAIBDw8WAh88BUcvQ29udGVudHMvUHJvZHVjdEltYWdlcy8wL3cyLWltZyUyZnZhcmlhdGlvbiUyZjIwMDIxMDE2MjA0OTIyMDAwMF9NLmpwZ2RkAgIPFQEFTkEyMjBkAgwPFgQfO2YfOmhkAg0PFQGiAWphdmFzY3JpcHQ6c2hvd19wb3B1cF93aW5kb3coJiMzOTsvRm9ybS9Qcm9kdWN0L1Byb2R1Y3REZXRhaWxTdWJJbWFnZS5hc3B4P3Nob3A9MCZhbXA7cGlkPTIwMDIxMDIwMzEyMDAwMDAwMCYjMzk7LCA2NjAsIDU0MCwgZmFsc2UsIGZhbHNlLCAmIzM5O1Byb2R1Y3RJbWFnZSYjMzk7KWQCDA9kFgICAQ8WAh87AgIWBGYPZBYCZg8VAQBkAgEPZBYCZg8VAQBkAg0PZBYqAgEPFgIfOwL%2F%2F%2F%2F%2FD2QCAg8WAh87Av%2F%2F%2F%2F8PZAIDDxYCHzsC%2F%2F%2F%2F%2Fw9kAgQPEA8WAh4LXyFEYXRhQm91bmRnZBAVCxjpgbjmip7jgZfjgabjgY%2FjgaDjgZXjgYQW5rih6L6655u0576O44Kr44Op44O8IAVPQzkwIAZPQzEwMCAGT0MxMTAgBk9DMTIwIAZPQzEzMCAGT0MxNTAgBk5BMjAwIAZOQTIxMCAGTkEyMjAgFQsAJTIwMDIxMDIwMzEyMDAwMDAwMC0yMDAyMTAyMDMxMjAwMDEwMDAlMjAwMjEwMjAzMTIwMDAwMDAwLTIwMDIxMDIwMzEyMDA5MDAwMCUyMDAyMTAyMDMxMjAwMDAwMDAtMjAwMjEwMjAzMTIwMTAwMDAwJTIwMDIxMDIwMzEyMDAwMDAwMC0yMDAyMTAyMDMxMjAxMTAwMDAlMjAwMjEwMjAzMTIwMDAwMDAwLTIwMDIxMDIwMzEyMDEyMDAwMCUyMDAyMTAyMDMxMjAwMDAwMDAtMjAwMjEwMjAzMTIwMTMwMDAwJTIwMDIxMDIwMzEyMDAwMDAwMC0yMDAyMTAyMDMxMjAxNTAwMDAlMjAwMjEwMjAzMTIwMDAwMDAwLTIwMDIxMDIwMzEyMDIwMDAwMCUyMDAyMTAyMDMxMjAwMDAwMDAtMjAwMjEwMjAzMTIwMjEwMDAwJTIwMDIxMDIwMzEyMDAwMDAwMC0yMDAyMTAyMDMxMjAyMjAwMDAUKwMLZ2dnZ2dnZ2dnZ2cWAQIIZAIFDxAPFgIfPmdkEBULGOmBuOaKnuOBl%2BOBpuOBj%2BOBoOOBleOBhBbmuKHovrrnm7Tnvo7jgqvjg6njg7wgBU9DOTAgBk9DMTAwIAZPQzExMCAGT0MxMjAgBk9DMTMwIAZPQzE1MCAGTkEyMDAgBk5BMjEwIAZOQTIyMCAVCwAlMjAwMjEwMjAzMTIwMDAwMDAwLTIwMDIxMDIwMzEyMDAwMTAwMCUyMDAyMTAyMDMxMjAwMDAwMDAtMjAwMjEwMjAzMTIwMDkwMDAwJTIwMDIxMDIwMzEyMDAwMDAwMC0yMDAyMTAyMDMxMjAxMDAwMDAlMjAwMjEwMjAzMTIwMDAwMDAwLTIwMDIxMDIwMzEyMDExMDAwMCUyMDAyMTAyMDMxMjAwMDAwMDAtMjAwMjEwMjAzMTIwMTIwMDAwJTIwMDIxMDIwMzEyMDAwMDAwMC0yMDAyMTAyMDMxMjAxMzAwMDAlMjAwMjEwMjAzMTIwMDAwMDAwLTIwMDIxMDIwMzEyMDE1MDAwMCUyMDAyMTAyMDMxMjAwMDAwMDAtMjAwMjEwMjAzMTIwMjAwMDAwJTIwMDIxMDIwMzEyMDAwMDAwMC0yMDAyMTAyMDMxMjAyMTAwMDAlMjAwMjEwMjAzMTIwMDAwMDAwLTIwMDIxMDIwMzEyMDIyMDAwMBQrAwtnZ2dnZ2dnZ2dnZxYBZmQCBg8QDxYCHz5nZGQWAGQCBw8WAh87Av%2F%2F%2F%2F8PZAIIDxYCHzsC%2F%2F%2F%2F%2Fw9kAgkPFgIfOwL%2F%2F%2F%2F%2FD2QCCg8WAh87ZmQCCw8WAh4Fc3R5bGVlZAIMD2QWBAICDxYCHzpoFgICAQ8PFgIfOmhkZAIEDxUBATBkAg0PFQEEVHJ1ZWQCDg8WAh86aGQCDw8WAh86aBYIAgMPDxYMHyUFB0FSUklWQUwfLgUSMjAwMjEwMjAzMTIwMDAwMDAwHx5nHhNJc1JlZ2lzdGVyU3VjY2VlZGVkaB4QSXNBbHJlYWR5VmlzaWJsZWgfAQUlMjAwMjEwMjAzMTIwMDAwMDAwLTIwMDIxMDIwMzEyMDIwMDAwMGQWCAIBDxYCHzpoFgJmD2QWBAIBDxAPFgIeB0NoZWNrZWRnZGRkZAICDxQrAgFkZAICDxYCHzpoFgJmD2QWBGYPEA8WAh9CaGRkZGQCAQ8UKwIBZGQCAw8QDxYCH0JnZGRkZAIFDxAPFgIfPmdkZBYAZAIFDxYCHzpoZAIHDw8WDB8lBQdSRUxFQVNFHy4FEjIwMDIxMDIwMzEyMDAwMDAwMB8eZx9AaB9BaB8BBSUyMDAyMTAyMDMxMjAwMDAwMDAtMjAwMjEwMjAzMTIwMjAwMDAwZBYIAgEPFgIfOmgWAmYPZBYEAgEPEA8WAh9CZ2RkZGQCAg8UKwIBZGQCAg8WAh86aBYCZg9kFgRmDxAPFgIfQmhkZGRkAgEPFCsCAWRkAgMPEA8WAh9CZ2RkZGQCBQ8QDxYCHz5nZGQWAGQCCQ8WAh86aGQCEA8VAQVGYWxzZWQCEQ8WAh86aBYEAgMPDxYMHyUFBlJFU0FMRR8uBRIyMDAyMTAyMDMxMjAwMDAwMDAfHmcfQGgfQWgfAQUlMjAwMjEwMjAzMTIwMDAwMDAwLTIwMDIxMDIwMzEyMDIwMDAwMGQWCAIBDxYCHzpoFgJmD2QWBAIBDxAPFgIfQmdkZGRkAgIPFCsCAWRkAgIPFgIfOmgWAmYPZBYEZg8QDxYCH0JoZGRkZAIBDxQrAgFkZAIDDxAPFgIfQmdkZGRkAgUPEA8WAh8%2BZ2RkFgBkAgUPFgIfOmhkAhIPFgIfOmgWAmYPFQEAZAITDxUB4QFqYXZhc2NyaXB0OnNob3dfcG9wdXBfd2luZG93KCYjMzk7L0Zvcm0vUHJvZHVjdC9SZWFsU2hvcFByb2R1Y3RTdG9ja0xpc3QuYXNweD9waWQ9MjAwMjEwMjAzMTIwMDAwMDAwJmFtcDt2aWQ9MjAwMjEwMjAzMTIwMDAwMDAwLTIwMDIxMDIwMzEyMDIwMDAwMCYjMzk7LCA2MzAsIDkwMCwgdHJ1ZSwgdHJ1ZSwgJiMzOTtQcm9kdWN0UmVhbFNob3BTdG9ja0xpc3QmIzM5Oyk7IHJldHVybiBmYWxzZTtkAhQPZBYGAgEPFQFkaHR0cHMlM2ElMmYlMmZjZWZpbmVjb3NtZXRpY3MuY28uanAlMmZGb3JtJTJmUHJvZHVjdCUyZlByb2R1Y3REZXRhaWwuYXNweCUzZnBpZCUzZDIwMDIxMDIwMzEyMDAwMDAwMGQCAg8VAmRodHRwcyUzYSUyZiUyZmNlZmluZWNvc21ldGljcy5jby5qcCUyZkZvcm0lMmZQcm9kdWN0JTJmUHJvZHVjdERldGFpbC5hc3B4JTNmcGlkJTNkMjAwMjEwMjAzMTIwMDAwMDAwSOa4oei%2BuuebtOe%2BjumZkOWumuOCseODvOOCue%2B8i%2BOCt%2BODq%2BOCr%2BOCpuOCp%2BODg%2BODiOODkeOCpuODgOODvOOCu%2BODg%2BODiGQCAw8VAWRodHRwcyUzYSUyZiUyZmNlZmluZWNvc21ldGljcy5jby5qcCUyZkZvcm0lMmZQcm9kdWN0JTJmUHJvZHVjdERldGFpbC5hc3B4JTNmcGlkJTNkMjAwMjEwMjAzMTIwMDAwMDAwZAIVDxUBBUZhbHNlZAIODxYCHzpoFgJmDxUBAGQCDw8WAh86aBYCZg8VAQBkAhAPFgIfOmgWAmYPFQEAZAIRDxYCHzpoFgJmDxUBAGQCEg9kFgJmDxUBde%2B8nOa4oei%2BuuebtOe%2BjumZkOWumuODh%2BOCtuOCpOODs%2B%2B8nuOCt%2BODq%2BOCr%2BOCpuOCp%2BODg%2BODiOODkeOCpuODgOODvOOCseODvOOCue%2B8i%2BODrOODleOCo%2BODq%2BOBruaVsOmHj%2BmZkOWumuOCu%2BODg%2BODiGQCEw9kFgJmDxUBkgXjgIjjgrvjg5XjgqPjg7zjg4zDl%2Ba4oei%2BuuebtOe%2BjiDpmZDlrprjg4fjgrbjgqTjg7Pjgrvjg4Pjg4jnmbvloLTvvIHjgInjgaTjgZHjgabjgYTjgovjga7jgpLlv5jjgozjgZXjgZvjgovjgIHoh6rnhLbjgafou73jgYTjgaTjgZHlv4PlnLDjga7jg5Hjgqbjg4Djg7zjg5XjgqHjg7Pjg4fjg7zjgrfjg6fjg7PjgILjg5XjgqHjg7Pjg4fjg7zjgrfjg6fjg7PnsonkvZPjgYzjgIHlkLjjgYTjgaTjgY%2FjgojjgYbjgarou73jgoTjgYvjgZXjgafogozjgavjgarjgZjjgb%2FjgIHjgqvjg5Djg7zjgZfjgarjgYzjgonjgYrogozjgpLjgbXjgpPjgo%2FjgorjgajjgZfjgZ%2FljbDosaHjgavjgILjgrfjg6vjgq%2Fjg5Hjgqbjg4Djg7zjgajjgIHjg5LjgqLjg6vjg63jg7Pphbjjgarjganjga7kv53mub%2FmiJDliIbjgYzjgZfjgaPjgajjgorjgZXjgonjgZXjgonjgavku5XkuIrjgZLjgb7jgZnjgILmmYLplpPjgYzjgZ%2FjgaPjgabjgoLjgY%2FjgZrjgozjgavjgY%2FjgY%2FjgIHoh6rkv6Hjga7ogozjgYzntprjgY3jgb7jgZnjgIJTUEYzMCAvIFBBKysrPGJyPjwhLS08c3BhbiBzdHlsZT1mb250LXNpemU6ODAlOz7igLvpmZDlrprjg4fjgrbjgqTjg7PjgrHjg7zjgrnjg7vjg6zjg5XjgqPjg6vjga7nibnliKXjgrvjg4Pjg4jjgIrmlbDph4%2FpmZDlrprjgIs8L3NwYW4%2BLS0%2BZAIUDxYCHzpoFgJmDxUBAGQCFQ9kFgJmDxUBwAHlhobjgpLjgYvjgY%2FjgojjgYbjgavjgIHjg5XjgqHjg7Pjg4fjg7zjgrfjg6fjg7Pjga7ooajpnaLjgpLvvJLvvZ7vvJPlm57jgZnjgbnjgonjgZvjgabjgIHjg5bjg6njgrfjgb7jgZ%2Fjga%2Fjgrnjg53jg7PjgrjjgavjgbXjgY%2Fjgb7jgZvjgb7jgZnjgILjgYrpoZTjga7lhoXlgbTjgYvjgonlpJblgbTjgavjga7jgbDjgZfjgb7jgZnjgIJkAhYPZBYCZg8VAZgD44GK6IKM44Gr55Ww5bi444GM55Sf44GY44Gm44GE44Gq44GE44GL44KI44GP5rOo5oSP44GX44Gm44GU5L2%2F55So44GP44Gg44GV44GE44CC5YK344CB44Gv44KM44KC44Gu44CB5rm%2F55a5562J55Ww5bi444Gu44GC44KL6YOo5L2N44Gr44Gv44GU5L2%2F55So44Gr44Gq44KJ44Gq44GE44Gn44GP44Gg44GV44GE44CC5L2%2F55So5Lit44KE5L2%2F55So5b6M44Gr6LWk44G%2F44CB44Gv44KM44CB44GL44KG44G%2F44CB5Yi65r%2BA44CB6Imy5oqc44GR77yI55m95paR562J77yJ44KE6buS44Ga44G%2F562J44Gu55Ww5bi444GM54%2B%2B44KM44Gf5pmC44Gv44CB5L2%2F55So44KS5Lit5q2i44GX44CB55qu6Iaa56eR5bCC6ZaA5Yy7562J44G444GU55u46KuH44GV44KM44KL44GT44Go44KS44GK44GZ44GZ44KB44GX44G%2B44GZ44CCZAIXDxYCHzpoFgJmDxUBAGQCGA8WAh86aBYCZg8VAQBkAhkPFgIfOmgWAmYPFQEAZAIaDxUBBUZhbHNlZAIbDxUBgNwCPGxpbmsgcmVsPSJzdHlsZXNoZWV0IiBocmVmPSIuLi8uLi9QYWdlL0xQL01ha2Uvc2lsa3dldHBvd2Rlci1jYXNlLWxpbWl0ZWQvanMvYW9zLmNzcyI%2BDQo8bGluayByZWw9InN0eWxlc2hlZXQiIGhyZWY9Ii4uLy4uL1BhZ2UvTFAvTWFrZS9zaWxrd2V0cG93ZGVyLWNhc2UtbGltaXRlZC8yMWF3L2Nzcy9zdHlsZS5jc3MiPg0KPHNjcmlwdCBzcmM9Ii4uLy4uL1BhZ2UvTFAvTWFrZS9zaWxrd2V0cG93ZGVyLWNhc2UtbGltaXRlZC9qcy9hb3MuanMiPjwvc2NyaXB0Pg0KPHNjcmlwdCBzcmM9Ii4uLy4uL1BhZ2UvTFAvTWFrZS9zaWxrd2V0cG93ZGVyLWNhc2UtbGltaXRlZC9qcy9tb3ZpZV9zaW5nbGUuanMiPjwvc2NyaXB0Pg0KDQo8IS0tIDIxMDkyNSB5YWhvb%2BWvqeafu%2BWvvuW%2FnCAtLT4NCjxzY3JpcHQgdHlwZT0idGV4dC9qYXZhc2NyaXB0Ij4NCiQoZnVuY3Rpb24oKSB7DQp2YXIgdXJsID0gbG9jYXRpb24uaHJlZjsNCnZhciBwYXJhbUFycmF5ID0gW107DQp1cmxzcGx0ID0gdXJsLnNwbGl0KCI%2FIik7DQpwYXJzcGx0ID0gdXJsc3BsdFsxXS5zcGxpdCgiJiIpOw0KIA0KZm9yICggaSA9IDA7IGkgPCBwYXJzcGx0Lmxlbmd0aDsgaSsrICkgew0KcGFyYW0gPSBwYXJzcGx0W2ldLnNwbGl0KCI9Iik7DQpwYXJhbUFycmF5LnB1c2gocGFyYW1bMF0pOw0KcGFyYW1BcnJheVtwYXJhbVswXV0gPSBwYXJhbVsxXTsNCn0NCiANCmlmICggcGFyYW1BcnJheVsia2V5Il0gPT0gInloIikgew0KLy8gVVJM44Gu5LiA6YOo44GMW2tleT15aF3jgafjgYLjgaPjgZ%2FloLTlkIjjga7lh6bnkIYNCiQoJyNkZXRhaWxUaHJlZScpLnByZXBlbmQoJzxzdHlsZT4ubHBfcG93ZGVyIC5zdGVwX19saXN0LXdyYXB7bWF4LXdpZHRoOjU1MHB4IWltcG9ydGFudDt9I2R2UHJvZHVjdFJldmlld0FyZWEsLnloe2Rpc3BsYXk6IG5vbmUhaW1wb3J0YW50O30ubHBfcG93ZGVyIC5pZ3R2aW5mbywubHBfcG93ZGVyIC5pZ3R2e2Rpc3BsYXk6IG5vbmU7fS5scF9wb3dkZXIgLmluc3RhZ3JhbXtkaXNwbGF5OiBub25lO31AbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyNXB4KXsubHBfcG93ZGVyIC5wcm9kdWN0X19saXN0LWl0ZW06bnRoLWNoaWxkKDQpLCAubHBfcG93ZGVyIC5wcm9kdWN0X19saXN0LWl0ZW06bnRoLWNoaWxkKDUpIHttYXJnaW4tcmlnaHQ6IDEwcHg7fX08L3N0eWxlPicpOw0KfQ0KfSk7DQo8L3NjcmlwdD4NCjwhLS0gLy8yMTA5MjUgeWFob2%2Flr6nmn7vlr77lv5wgLS0%2BDQoNCjxkaXYgaWQ9InByaW1hcnkiIGNsYXNzPSJscF9wb3dkZXIiPg0KDQogPCEtLSAyMDIyMDUxNiB5b3V0dWJlIC0tPg0KPGRpdiBjbGFzcz0ieWgiIGRhdGEtYW9zPSJmYWRlLXVwIiBzdHlsZT0ibWFyZ2luOiA2MHB4IGF1dG8gMjBweCFpbXBvcnRhbnQ7Zm9udC1zaXplOiAyMHB4O3RleHQtYWxpZ246IGNlbnRlcjtmb250LXdlaWdodDogYm9sZDtsaW5lLWhlaWdodDogMS41OyI%2BDQogICAg5rih6L6655u0576O44GV44KT44GrPGJyIGNsYXNzPSJzcCI%2B44GU57S55LuL44GE44Gf44Gg44GN44G%2B44GX44Gf77yBDQogIDwvZGl2Pg0KICA8ZGl2IGNsYXNzPSJ2aWRlbyB5aCIgaWQ9InZpZGVvIiBkYXRhLWFvcz0iZmFkZS11cCIgc3R5bGU9Im1hcmdpbi1ib3R0b206IDBweDsiPg0KICAgIDxpZnJhbWUgd2lkdGg9IjU2MCIgaGVpZ2h0PSIzMTUiIHNyYz0iaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvTjl1OVoxWkx2dTg%2Fc3RhcnQ9MTg0IiBmcmFtZWJvcmRlcj0iMCIgYWxsb3c9ImFjY2VsZXJvbWV0ZXI7IGF1dG9wbGF5OyBjbGlwYm9hcmQtd3JpdGU7IGVuY3J5cHRlZC1tZWRpYTsgZ3lyb3Njb3BlOyBwaWN0dXJlLWluLXBpY3R1cmUiIGFsbG93ZnVsbHNjcmVlbj48L2lmcmFtZT4NCiAgPC9kaXY%2BDQo8ZGl2IGNsYXNzPSJ5aCIgZGF0YS1hb3M9ImZhZGUtdXAiIHN0eWxlPSJtYXJnaW46IDIwcHggYXV0byA3MHB4IWltcG9ydGFudDtmb250LXNpemU6IDIwcHg7dGV4dC1hbGlnbjogY2VudGVyO2ZvbnQtd2VpZ2h0OiBib2xkO2xpbmUtaGVpZ2h0OiAxLjU7Ij4NCiAgICDjg4vjgq3jg5PjgpLpmqDjgZk8YnIgY2xhc3M9InNwIj7jgrfjg6vjgq%2Fjgqbjgqfjg4Pjg4jjg5Hjgqbjg4Djg7zjga48YnIgY2xhc3M9InNwIj7jgqvjg5Djg7zlipvvvIENCiAgPC9kaXY%2BDQogIDwhLS0gLy8yMDIyMDUxNiB5b3V0dWJlIC0tPg0KDQo8IS0tIOa4oei%2BuuebtOe%2BjuOCq%2BODqeODvGN0cyAtLT4NCjxzZWN0aW9uIGNsYXNzPSJtYWluLXRvcF9jcCIgZGF0YS1hb3M9ImZhZGUtdXAiPg0KICAgIDxkaXYgY2xhc3M9Im1haW4tdG9wX19pbm5lcl9jcCB3bi1jdHMiPg0KICAgICAgICAgIDxpbWcgY2xhc3M9InBjIiBzdHlsZT0ibWFyZ2luLWJvdHRvbToyMHB4IWltcG9ydGFudDsiIHNyYz0iLi4vLi4vUGFnZS9MUC9NYWtlL3NpbGt3ZXRwb3dkZXItcmVmaWxsL2ltZy9jYXNlc2V0X3BjXy5qcGciIGFsdD0iIiBjbGFzcz0iIj4NCiAgICAgICAgICA8aW1nIGNsYXNzPSJzcCIgc3R5bGU9Im1hcmdpbi1ib3R0b206NXB4IWltcG9ydGFudDttYXgtaGVpZ2h0OnVuc2V0IWltcG9ydGFudDsiIHNyYz0iLi4vLi4vUGFnZS9MUC9NYWtlL3NpbGt3ZXRwb3dkZXItcmVmaWxsL2ltZy9jYXNlc2V0X3NwXy5qcGciIGFsdD0iIiBjbGFzcz0iIj4NCiAgICA8L2Rpdj4gDQogICAgPGRpdiBjbGFzcz0ibWFpbi10b3BfX2lubmVyX2NwIHduLWN0cyI%2BDQogICAgICAgICAgPGltZyBjbGFzcz0icGMiIHN0eWxlPSJtYXJnaW4tYm90dG9tOjQwcHghaW1wb3J0YW50OyIgc3JjPSIuLi8uLi9QYWdlL0xQL01ha2Uvc2lsa3dldHBvd2Rlci1yZWZpbGwvaW1nL3dfY3RzX3BjXy5qcGciIGFsdD0iIiBjbGFzcz0iIj4NCiAgICAgICAgICA8aW1nIGNsYXNzPSJzcCIgc3R5bGU9Im1hcmdpbi1ib3R0b206NXB4IWltcG9ydGFudDsiIHNyYz0iLi4vLi4vUGFnZS9MUC9NYWtlL3NpbGt3ZXRwb3dkZXItcmVmaWxsL2ltZy93X2N0c19zcF8uanBnIiBhbHQ9IiIgY2xhc3M9IiI%2BDQogICAgPC9kaXY%2BICAgICAgDQo8L3NlY3Rpb24%2BIDwhLS0gbWFpbi10b3AgU0VDVElPTiBFTkQgLS0%2BDQo8c3R5bGU%2BDQpAbWVkaWEgb25seSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDYyNXB4KSB7DQogIC5scF9wb3dkZXIgLm1haW4tdG9wX19pbm5lcl9jcC53bi1jdHMgew0KICAgICBoZWlnaHQ6IGF1dG87DQogICAgIG1hcmdpbi1ib3R0b206NXB4DQogIH0NCn0NCjwvc3R5bGU%2BDQo8IS0tIC8v5rih6L6655u0576O44Kr44Op44O8Y3RzIC0tPg0KDQogICAgICAgICAgPCEtLSBtb3ZpZSAxMS8xMeOAnCAtLT4NCiAgICAgICAgICA8ZGl2IGNsYXNzPSJwcm9kdWN0LW1vdmllIiBkYXRhLWFvcz0iZmFkZS11cCI%2BDQogICAgICAgICAgICA8dmlkZW8gcGxheXNpbmxpbmUgcG9zdGVyPSIuLi8uLi9QYWdlLzJuZEFubml2ZXJzYXJ5L21vdmllL3RodW1ibmFpbC9zd3BfbGltaXRlZC5qcGciIGlkPSJ2aWRlb19zdCIgb25jbGljaz0idGhpcy5wbGF5KCk7Ij4NCiAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9Ii4uLy4uL1BhZ2UvMm5kQW5uaXZlcnNhcnkvbW92aWUvc3dwX2xpbWl0ZWQubXA0IiB0eXBlPSJ2aWRlby9tcDQiIC8%2BDQogICAgICAgICAgICA8L3ZpZGVvPg0KICAgICAgICAgICAgPGRpdiBjbGFzcz0idmlkZW8tYnRuIiBpZD0idmlkZW8tYnRuIj48L2Rpdj4NCiAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgICA8IS0tIC8vbW92aWUgLS0%2BDQoNCiAgPHNlY3Rpb24gY2xhc3M9Im1haW4tdG9wIiBkYXRhLWFvcz0iZmFkZS11cCI%2BDQogICAgICA8ZGl2IGNsYXNzPSJtYWluLXRvcF9faW5uZXIiPg0KICAgICAgICAgIDxkaXYgY2xhc3M9Im1haW4tdG9wX19pbWciPiZuYnNwOzwvZGl2Pg0KICAgICAgICAgIDxkaXYgY2xhc3M9Im1haW4tdG9wX190ZXh0Ij4NCiAgICAgICAgICAgICAgPHA%2BDQogICAgICAgICAgICAgICAg5rih6L6655u0576Ow5fjgrvjg5XjgqPjg7zjg4w8YnI%2B6ZmQ5a6a44OH44K244Kk44Oz44Kx44O844K555m75aC077yBDQogICAgICAgICAgICAgIDwvcD4NCiAgICAgICAgICAgICAgPCEtLTxzdXA%2B4oC75pKu5b2x44K344O844Oz44Gq44Gp44Gn44CB44Oh44Kk44Kv44Ki44OD44OX44Ki44O844OG44Kj44K544OI44Gr6YG444Gw44KM44Gm44GN44G%2B44GX44Gf44CCPGJyPuKAu%2BOCueODneODs%2BOCuOS7mOOCseODvOOCueOBr%2BWIpeWjsuOCijwvc3VwPi0tPg0KICAgICAgICAgIDwvZGl2Pg0KICAgICAgPC9kaXY%2BDQogIDwvc2VjdGlvbj4gPCEtLSBtYWluLXRvcCBTRUNUSU9OIEVORCAtLT4NCg0KICA8c2VjdGlvbiBjbGFzcz0ic3RlcCIgZGF0YS1hb3M9ImZhZGUtdXAiPg0KICAgICAgPGRpdiBjbGFzcz0iY29udGFpbmVyLWlubmVyIj4NCiAgICAgICAgICA8ZGl2IGNsYXNzPSJzdGVwX190b3AtYXJlYSI%2BDQogICAgICAgICAgICAgIDxoMiBjbGFzcz0ic3RlcF9fdHRsIj4NCiAgICAgICAgICAgICAgICAgIOOAiuaVsOmHj%2BmZkOWumuOAizxicj7muKHovrrnm7Tnvo7pmZDlrprjgrHjg7zjgrnvvIs8YnIgY2xhc3M9InNwIj7jgrfjg6vjgq%2Fjgqbjgqfjg4Pjg4jjg5Hjgqbjg4Djg7zjgrvjg4Pjg4gNCiAgICAgICAgICAgICAgPC9oMj4NCiAgICAgICAgICAgICAgPHAgY2xhc3M9InN0ZXBfX3N1YnR0bCI%2BJmx0O%2BODkeOCpuODgOODvOODleOCoeODs%2BODh%2BODvOOCt%2BODp%2BODs%2B%2B8i%2BmZkOWumuODh%2BOCtuOCpOODs%2BOCseODvOOCuSDjgrvjg4Pjg4gmZ3Q7PC9wPg0KICAgICAgICAgICAgICA8dWwgY2xhc3M9InN0ZXBfX2xpc3Qtd3JhcCI%2BDQogICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9InN0ZXBfX2xpc3QiPg0KICAgICAgICAgICAgICAgICAgICAgIOS%2Fnea5vw0KICAgICAgICAgICAgICAgICAgPC9saT4NCiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz0ic3RlcF9fbGlzdCI%2BDQogICAgICAgICAgICAgICAgICAgICAg5q%2Bb56m044Kx44KiDQogICAgICAgICAgICAgICAgICA8L2xpPg0KICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPSJzdGVwX19saXN0IHloIj4NCiAgICAgICAgICAgICAgICAgICAgICDjgqjjgqTjgrjjg7PjgrDjgrHjgqINCiAgICAgICAgICAgICAgICAgIDwvbGk%2BDQogICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9InN0ZXBfX2xpc3QiPg0KICAgICAgICAgICAgICAgICAgICAgIOOCt%2BODq%2BOCreODvOOBquS7leS4iuOBjOOCig0KICAgICAgICAgICAgICAgICAgPC9saT4NCiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz0ic3RlcF9fbGlzdCI%2BDQogICAgICAgICAgICAgICAgICAgICAg44Kr44OQ44O85YqbDQogICAgICAgICAgICAgICAgICA8L2xpPg0KICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPSJzdGVwX19saXN0Ij4NCiAgICAgICAgICAgICAgICAgICAgICDjgq3jg7zjg5flipsNCiAgICAgICAgICAgICAgICAgIDwvbGk%2BDQogICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9InN0ZXBfX2xpc3QiPg0KICAgICAgICAgICAgICAgICAgICAgIFNQRjMwIC8gUEErKysNCiAgICAgICAgICAgICAgICAgIDwvbGk%2BDQogICAgICAgICAgICAgIDwvdWw%2BDQogICAgICAgICAgICAgIDxwIGNsYXNzPSJzdGVwX190ZXh0Ij4NCiAgICAgICAgICAgICAgICAgIOiHs%2Bi%2Fkei3nembouOCguOAgTEw5pmC6ZaTPHN1cD7igLs8L3N1cD7lvozjgoLnvo7jgZfjgYTogozjgbjjgII8YnI%2BDQogICAgICAgICAgICAgICAgICDjgrfjg6vjgq%2Fjgqbjgqfjg4Pjg4jjg5Hjgqbjg4Djg7zjga%2FjgIHjg6Ljg4fjg6vjgoTlpbPlhKrjgZ%2FjgaHjga48YnIgY2xhc3M9InNwIj7jgq3jg6zjgqTjgpLjgZrjgaPjgajmlK%2FjgYjjgabjgY3jgZ%2Fjg5XjgqHjg7Pjg4fjg7zjgrfjg6fjg7PjgII8YnI%2BDQogICAgICAgICAgICAgICAgICAyMueorumhnuOCguOBrue%2BjuWuueaIkOWIhuOCkumFjeWQiOOBl%2BOBn%2BODkeOCpuODgOODvOOBjDxiciBjbGFzcz0ic3AiPuOCueODg%2BOBqOiCjOOBq%2BOBquOBmOOBv%2BOAgeaCqeOBv%2BOCkuOCq%2BODkOODvOOAgjxicj4NCiAgICAgICAgICAgICAgICAgIOOBteOCk%2BOCj%2BOCiuOCt%2BODq%2BOCr%2BiCjOOCkuOBpOOBj%2BOCiuOBvuOBmeOAgjxicj4NCiAgICAgICAgICAgICAgICAgIOOBleOBguavjuaXpeOBruODoeOCpOOCr%2BOBq%2BOAgeODl%2BODreOBruS7leS4iuOBjOOCiuOCkuOAgg0KICAgICAgICAgICAgICA8L3A%2BDQogICAgICAgICAgICAgIDxwIGNsYXNzPSJzdGVwX19kaXNjIj7igLvlvZPnpL7oqr%2FjgbnjgILlirnmnpzjgavjga%2FlgIvkurrlt67jgYzjgYLjgorjgb7jgZnjgIIgPC9wPg0KICAgICAgICAgIDwvZGl2Pg0KDQogICAgICAgICAgPCEtLSBtb3ZpZSAxMS8xMeOAnCAtLT4NCiAgICAgICAgICA8IS0tPGRpdiBjbGFzcz0icHJvZHVjdC1tb3ZpZSI%2BDQogICAgICAgICAgICA8dmlkZW8gcGxheXNpbmxpbmUgcG9zdGVyPSIuLi8uLi9QYWdlLzJuZEFubml2ZXJzYXJ5L2ltZy9zdHJhdGVneS5qcGciIGlkPSJ2aWRlb19zdCIgb25jbGljaz0idGhpcy5wbGF5KCk7Ij4NCiAgICAgICAgICAgICAgPHNvdXJjZSBzcmM9Ii4uLy4uL1BhZ2UvMjAyMXNzL2Fzc2V0cy9tb3ZpZS9zdHJhdGVneS5tcDQiIHR5cGU9InZpZGVvL21wNCIgLz4NCiAgICAgICAgICAgIDwvdmlkZW8%2BDQogICAgICAgICAgICA8ZGl2IGNsYXNzPSJ2aWRlby1idG4iIGlkPSJ2aWRlby1idG4iPjwvZGl2Pg0KICAgICAgICAgIDwvZGl2Pi0tPg0KICAgICAgICAgIDwhLS0gLy9tb3ZpZSAtLT4NCg0KICAgICAgICAgIDxkaXYgY2xhc3M9ImxpbWl0ZWQtY3RzLWFyZWEiPg0KICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJjcC1pbWciPg0KICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Ii4uLy4uL1BhZ2UvTFAvTWFrZS9zaWxrd2V0cG93ZGVyLWNhc2UtbGltaXRlZC8yMWF3L2ltZy9pbWdfMDEucG5nIiBhbHQ9IiI%2BDQogICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJuLWN0cyI%2BDQogICAgICAgICAgICAgICAgPHA%2BPGltZyBjbGFzcz0ibi1jdHMtcmVhZCIgc3JjPSIuLi8uLi9QYWdlL0xQL01ha2Uvc2lsa3dldHBvd2Rlci1jYXNlLWxpbWl0ZWQvMjFhdy9pbWcvaW1nXzAzLnBuZyIgYWx0PSIiPjwvcD4NCiAgICAgICAgICAgICAgICA8cCBjbGFzcz0ibi1jdHMtdHRsIj7jgIxNQURFIElOIEpBUEFOIOOBruiJr%2BOBleOCkjxicj7jgoLjgaPjgajjgb%2FjgpPjgarjgavnn6XjgaPjgabmrLLjgZfjgYTjgI08L3A%2BDQogICAgICAgICAgICAgICAgPHAgY2xhc3M9Im4tY3RzLXR4dCI%2B44OL44Ol44O844Oo44O844Kv44Gn5pqu44KJ44GX5aeL44KB44Gm44CBPGJyPg0KICAgICAgICAgICAgICAgICAg44GE44Gj44Gd44GG5pel5pys5paH5YyW44Gu6a2F5Yqb44KS5oSf44GY44KL44KI44GG44Gr44Gq44KK44G%2B44GX44Gf44CCPGJyPg0KICAgICAgICAgICAgICAgICAg5aSa5qeY5oCn44Gr44GC44G144KM44Gf5LuK44Gg44GL44KJ44GT44Gd44CBTUFERSBJTiBKQVBBTuOBrumtheWKm%2BOCkuS8neOBiOOBn%2BOBhOOAgjxicj4NCiAgICAgICAgICAgICAgICAgIOOBk%2BOBrumZkOWumuODh%2BOCtuOCpOODs%2BOBq%2BOBr%2BOAgeOBneOCk%2BOBquaDs%2BOBhOOCkui%2BvOOCgeOBvuOBl%2BOBn%2BOAgjwvcD4NCiAgICAgICAgICAgICAgICA8cCBjbGFzcz0ibi1jdHMtdHh0IiBzdHlsZT0ibWFyZ2luLXRvcDoxZW07Ij4NCiAgICAgICAgICAgICAgICAgIOOCt%2BODq%2BOCr%2BOCpuOCp%2BODg%2BODiOODkeOCpuODgOODvOOBq%2BmFjeWQiOOBleOCjOOBpuOBhOOCi%2BOAgTxicj4NCiAgICAgICAgICAgICAgICAgIOOCt%2BODq%2BOCrzxzcGFuPuKAuzE8L3NwYW4%2B44Go5ZKM5ryi5qSN54mp44Gu57SF6IqxPHNwYW4%2B4oC7Mjwvc3Bhbj7jg7vntKvmoLk8c3Bhbj7igLszPC9zcGFuPuODu%2BailOWtkDxzcGFuPuKAuzQ8L3NwYW4%2B44KSPGJyIGNsYXNzPSJwYyI%2B44Oi44OB44O844OV44Gr44GX44Gf44CB44Gh44KH44Gj44G044KK5ZKM44KSPGJyIGNsYXNzPSJwYyI%2B5oSf44GY44KJ44KM44KL44OH44K244Kk44Oz44Gn44GZ44CCPC9wPg0KICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJuLWN0cy10eHQiIHN0eWxlPSJtYXJnaW4tdG9wOjFlbTsiPjxzcGFuPuKAuzHmlbTogozmiJDliIYg4oC7MuODmeODi%2BODkOODiuiKseOCqOOCreOCuTxicj4NCiAgICAgICAgICAgICAgICAgIOKAuzPjg6Djg6njgrXjgq3moLnjgqjjgq3jgrkg4oC7NOOCr%2BODgeODiuOCt%2BaenOWun%2BOCqOOCreOCuTwvc3Bhbj48L3A%2BDQogICAgICAgICAgICAgIDwvZGl2Pg0KDQogICAgICAgICAgICAgIDxkaXYgY2xhc3M9Im4tY3RzLXByb2R1Y3QiPg0KICAgICAgICAgICAgICAgIDxpbWcgY2xhc3M9Im4tY3RzLXByb2R1Y3QtaW1nIiBzcmM9Ii4uLy4uL1BhZ2UvTFAvTWFrZS9zaWxrd2V0cG93ZGVyLWNhc2UtbGltaXRlZC8yMWF3L2ltZy9EXy5wbmciIGFsdD0iIj4NCiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJuLWN0cy1wcm9kdWN0LXR4dGFyZWEiPg0KICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9InAtdHRsIj7jgYvjgovjgY%2FjgIHjgoTjgZXjgZfjgY%2FjgIHjgY%2FjgZrjgozjgavjgY%2FjgYTjgII8YnI%2B44K344Or44Kv6IKMPHNwYW4%2B4oC7PC9zcGFuPuODleOCoeODs%2BODhzwvcD4NCiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJwLW5hbWUiPua4oei%2BuuebtOe%2BjumZkOWumuOCseODvOOCue%2B8izxicj7jgrfjg6vjgq%2Fjgqbjgqfjg4Pjg4jjg5Hjgqbjg4Djg7zjgrvjg4Pjg4g8L3A%2BDQogICAgICAgICAgICAgICAgICA8cCBjbGFzcz0icC1kZXNjIj4844OR44Km44OA44O844OV44Kh44Oz44OH44O844K344On44OzPjxicj4NCiAgICAgICAgICAgICAgICAgICAg44Os44OV44Kj44OrKOipsOabv%2BeUqCnvvIvpmZDlrprjg4fjgrbjgqTjg7PjgrHjg7zjgrko44K544Od44Oz44K45LuYKTwvcD4NCiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJwLXByaWNlIj7jgIrmlbDph4%2FpmZDlrprjgIsgPHNwYW4gc3R5bGU9InRleHQtZGVjb3JhdGlvbjogbGluZS10aHJvdWdoIDFweCBzb2xpZCAjZWQ2MDU4OyI%2BwqU1LDUwMDwvc3Bhbj4gPHNwYW4gc3R5bGU9ImNvbG9yOiAjZWQ2MDU4O2ZvbnQtc2l6ZTogMS44ZW07Ij7CpTQsNDAwPC9zcGFuPijnqI7ovrwpPC9wPg0KPCEtLTxwIGNsYXNzPSJwLXByaWNlIj7jgIrmlbDph4%2FpmZDlrprjgIvCpTUsNTAwKOeojui%2BvCk8L3A%2BLS0%2BDQogICAgICAgICAgICAgICAgICA8cCBjbGFzcz0iYnRuQ2FydCI%2BPGEgaHJlZj0iaHR0cHM6Ly9jZWZpbmVjb3NtZXRpY3MuY28uanAvRm9ybS9Qcm9kdWN0L1Byb2R1Y3REZXRhaWwuYXNweD9zaG9wPTAmcGlkPTIwMDIxMDIwMzEyMDAwMDAwMCI%2B44GU6LO85YWl44Gv44GT44Gh44KJPC9hPjwvcD4NCiAgICAgICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgICAgICAgPC9kaXY%2BDQoNCiAgICAgICAgICA8L2Rpdj4NCg0KICAgICAgICAgIDxkaXYgY2xhc3M9InN0ZXBfX2JvdC1hcmVhIj4NCiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ic3RlcF9fbGluZSI%2BDQogICAgICAgICAgICAgICAgICA8aW1nIHNyYz0iLi4vLi4vUGFnZS9MUC9NYWtlL3NpbGt3ZXRwb3dkZXItcmVmaWxsL2ltZy9jb2xvcl9jaGFydF8yd2MuanBnIiBhbHQ9IiIgY2xhc3M9InN0ZXBfX2NvbG9yLWltZy0tMiI%2BDQogICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgIDxkaXYgY2xhc3M9InN0ZXBfX2JvdC1hcmVhIj4NCiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iY2hhbmdlIj4NCiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9Imh0dHBzOi8vY2VmaW5lY29zbWV0aWNzLmNvLmpwL1BhZ2UvY2hhbmdlY3AuYXNweCI%2BPGltZyBjbGFzcz0icGMiIHNyYz0iLi4vLi4vUGFnZS9MUC9NYWtlL3NpbGt5c2tpbmNhcmVsaXF1aWQvaW1nL2NvbG9yX2NoYXJ0XzIuanBnIiBhbHQ9IiIgY2xhc3M9InN0ZXBfX2NvbG9yLWltZy0tMiI%2BPC9hPg0KICAgICAgICAgICAgICAgICAgPGEgaHJlZj0iaHR0cHM6Ly9jZWZpbmVjb3NtZXRpY3MuY28uanAvUGFnZS9jaGFuZ2VjcC5hc3B4Ij48aW1nIGNsYXNzPSJzcCIgc3JjPSIuLi8uLi9QYWdlL0xQL01ha2Uvc2lsa3lza2luY2FyZWxpcXVpZC9pbWcvY29sb3JfY2hhcnRfMl9zcC5qcGciIGFsdD0iIiBjbGFzcz0ic3RlcF9fY29sb3ItaW1nLS0yIj48L2E%2BDQogICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgIDwvZGl2Pg0KDQogICAgICA8L2Rpdj4NCiAgPC9zZWN0aW9uPiA8IS0tIFNURVAgU0VDVElPTiBFTkQgLS0%2BDQoNCg0KICA8c2VjdGlvbiBjbGFzcz0iaG93dG8iIGRhdGEtYW9zPSJmYWRlLXVwIj4NCiAgICAgIDxkaXYgY2xhc3M9ImNvbnRhaW5lci1pbm5lciI%2BDQogICAgICAgICAgPGgyIGNsYXNzPSJob3d0b19fdHRsIj5IT1cgVE8g44K344Or44Kv6IKMPC9oMj4NCiAgICAgICAgICA8cCBjbGFzcz0iaG93dG9fX3N1YnR0bCI%2B44OX44Ot44Gr5pWZ44KP44KL44Kt44Os44Kk44Gu44OS44Oz44OIPC9wPg0KICAgICAgICAgIDx1bCBjbGFzcz0iaG93dG9fX2xpc3Qtd3JhcCI%2BDQogICAgICAgICAgICAgIDxsaSBjbGFzcz0iaG93dG9fX2xpc3QtLTEiPg0KICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iaG93dG9fX2xpc3QtaW5uZXItMSI%2BDQogICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Ii4uLy4uL1BhZ2UvTFAvTWFrZS9zaWxrd2V0cG93ZGVyLXJlZmlsbC9pbWcvc3RlcDEucG5nIiBhbHQ9IiIgY2xhc3M9Imhvd3RvX19zdGVwLWltZyI%2BDQogICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Ii4uLy4uL1BhZ2UvTFAvTWFrZS9zaWxrd2V0cG93ZGVyLXJlZmlsbC9pbWcvQS5qcGciIGFsdD0iIiBjbGFzcz0iaG93dG9fX2l0ZW0taW1nIj4NCiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJob3d0b19fdGV4dCI%2BDQogICAgICAgICAgICAgICAgICAgICAgICAgIDxwPuOAiCDjgYrpoZTnlKjml6XjgoTjgZHmraLjgoHjg6HjgqTjgq%2FkuIvlnLAg44CJPC9wPg0KICAgICAgICAgICAgICAgICAgICAgICAgICA8cD5VVuOCq%2BODg%2BODiOOCqOOCr%2BODquODpUND44K944OV44OIKzwvcD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgPG9sPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuOCueOCreODs%2BOCseOCouW%2BjOOAgTHjg5fjg4Pjgrfjg6XjgpLmiYvjgavjgajjgorjgIHpoKzjga7pg6jliIbjgYvjgonjgYrpoZTlhajkvZPjgavloZfjgormrovjgZfjga7jgarjgYTjgojjgYbkuIHlr6fjgavjgarjgZjjgb7jgZvjgb7jgZnjgII8L2xpPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPummluOBq%2BOCguOBquOBmOOBvuOBm%2BOBpuOBiuS9v%2BOBhOOBj%2BOBoOOBleOBhOOAgjwvbGk%2BDQogICAgICAgICAgICAgICAgICAgICAgICAgIDwvb2w%2BDQogICAgICAgICAgICAgICAgICAgICAgPC9kaXY%2BDQogICAgICAgICAgICAgICAgICA8L2Rpdj4NCiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9Imhvd3RvX19saXN0LWlubmVyLTIiPg0KICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9Imhvd3RvX19saXN0LWZsZXgiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICA8aW1nIHNyYz0iLi4vLi4vUGFnZS9MUC9NYWtlL3NpbGt3ZXRwb3dkZXItcmVmaWxsL2ltZy9saXN0LWl0ZW0tMl9wYy5wbmciIGFsdD0iIiBjbGFzcz0iaG93dG9fX2l0ZW0taW1nMiI%2BDQogICAgICAgICAgICAgICAgICAgICAgPC9kaXY%2BDQogICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz0iaG93dG9fX3RleHQiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICA8cD7jg5XjgqHjg7Pjg4fjg7zjgrfjg6fjg7PnspLlrZDjgYzjg5XjgqPjg4Pjg4jjgZfjgIE8YnI%2B44K344Or44Kv6IKM44KS44Ot44Oz44Kw44Kt44O844OX44CCPGJyPuOCt%2BODq%2BOCr%2BOCpuOCp%2BODg%2BODiOODkeOCpuODgOODvOOBqDxicj7nm7jmgKfjga7oia%2FjgYTlpJrmqZ%2Fog73jg6HjgqTjgq%2FkuIvlnLDjgafjgZnjgII8L3A%2BDQogICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9Imhvd3RvX19saXN0LWZsZXgiPg0KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj0iaHR0cHM6Ly9jZWZpbmVjb3NtZXRpY3MuY28uanAvRm9ybS9Qcm9kdWN0L1Byb2R1Y3REZXRhaWwuYXNweD9zaG9wPTAmcGlkPTEwMDE1MDE1MTA0MjAwMDAwMSZjYXQ9MTAwMTUwIj48aW1nIHNyYz0iLi4vLi4vUGFnZS9MUC9NYWtlL3NpbGt3ZXRwb3dkZXItcmVmaWxsL2ltZy9pbGx1c3QuanBnIiBhbHQ9IiIgY2xhc3M9Imhvd3RvX19pbGx1c3QiPjwvYT4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY%2BDQogICAgICAgICAgICAgICAgICAgICAgPC9kaXY%2BDQogICAgICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Ii4uLy4uL1BhZ2UvTFAvTWFrZS9zaWxrd2V0cG93ZGVyLXJlZmlsbC9pbWcvcmlnaHRfYXJyb3cucG5nIiBhbHQ9IiIgY2xhc3M9ImFycm93LXBjIj4NCiAgICAgICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgICA8L2xpPg0KICAgICAgICAgICAgICA8bGkgY2xhc3M9Imhvd3RvX19saXN0LS0yIj4NCiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSIuLi8uLi9QYWdlL0xQL01ha2Uvc2lsa3dldHBvd2Rlci1yZWZpbGwvaW1nL3N0ZXAyLnBuZyIgYWx0PSIiIGNsYXNzPSJob3d0b19fc3RlcC1pbWciPg0KICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Ii4uLy4uL1BhZ2UvTFAvTWFrZS9zaWxrd2V0cG93ZGVyLXJlZmlsbC9pbWcvQy5qcGciIGFsdD0iIiBjbGFzcz0iaG93dG9fX2l0ZW0taW1nMyI%2BDQogICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJob3d0b19fdGV4dCI%2BDQogICAgICAgICAgICAgICAgICAgICAgPHA%2B44CIIOODkeOCpuODgOODvOODleOCoeODs%2BODh%2BODvOOCt%2BODp%2BODsyDjgIk8L3A%2BDQogICAgICAgICAgICAgICAgICAgICAgPHA%2B44K344Or44Kv44Km44Kn44OD44OI44OR44Km44OA44O8PC9wPg0KICAgICAgICAgICAgICAgICAgICAgIDxvbD4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuWGhuOCkuaPj%2BOBj%2BOCiOOBhuOBq%2BODleOCoeODs%2BODh%2BODvOOCt%2BODp%2BODs%2BOBruihqOmdouOCkjLvvZ4z5Zue44GZ44G544KJ44Gb44Gm44CB44OW44Op44K344G%2B44Gf44Gv44K544Od44Oz44K444Gr44G144GP44G%2B44Gb44G%2B44GZ44CCPC9saT4NCiAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPuOBiumhlOOBruWGheWBtOOBi%2BOCieWkluWBtOOBq%2BWQkeOBi%2BOBo%2BOBpuOBruOBsOOBl%2BOBvuOBmeOAgjwvbGk%2BDQogICAgICAgICAgICAgICAgICAgICAgPC9vbD4NCiAgICAgICAgICAgICAgICAgIDwvZGl2Pg0KICAgICAgICAgICAgICA8L2xpPg0KICAgICAgICAgIDwvdWw%2BDQogICAgICA8L2Rpdj4NCiAgPC9zZWN0aW9uPiA8IS0tIEhPV1RPIFNFQ1RJT04gRU5EIC0tPg0KDQo8ZGl2IGNsYXNzPSJ2aWRlbyIgaWQ9InZpZGVvIj4NCjxpZnJhbWUgd2lkdGg9IjU2MCIgaGVpZ2h0PSIzMTUiIHNyYz0iaHR0cHM6Ly93d3cueW91dHViZS5jb20vZW1iZWQvYjQ3Y1dCTFF0VXMiIGZyYW1lYm9yZGVyPSIwIiBhbGxvdz0iYWNjZWxlcm9tZXRlcjsgYXV0b3BsYXk7IGNsaXBib2FyZC13cml0ZTsgZW5jcnlwdGVkLW1lZGlhOyBneXJvc2NvcGU7IHBpY3R1cmUtaW4tcGljdHVyZSIgYWxsb3dmdWxsc2NyZWVuPjwvaWZyYW1lPg0KPC9kaXY%2BDQoNCiAgPHNlY3Rpb24gY2xhc3M9InNpbGsiIGRhdGEtYW9zPSJmYWRlLXVwIj4NCiAgICAgIDxoMiBjbGFzcz0ic2lsa19fdHRsIj7jgrfjg6vjgq%2Fjga7jgaHjgYvjgok8L2gyPg0KICAgICAgPGRpdiBjbGFzcz0ic2lsa19faW5uZXIiPg0KICAgICAgICAgIDx1bCBjbGFzcz0ic2lsa19fZmVhdHVyZSI%2BDQogICAgICAgICAgICAgIDxsaSBjbGFzcz0ic2lsa19fZmVhdHVyZS1saXN0Ij4NCiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJzaWxrX19mZWF0dXJlLWxpc3QtdHRsIj7jgrnjgq3jg7PjgrHjgqLlirnmnpw8L3A%2BDQogICAgICAgICAgICAgICAgICA8cCBjbGFzcz0ic2lsa19fZmVhdHVyZS1saXN0LXR4dCI%2BDQogICAgICAgICAgICAgICAgICAgICAg44K344Or44Kv44Gv44CB6IKM44Go44KI44GP5Ly844Gf44Ki44Of44OO6YW444Gn5qeL5oiQ44GV44KM44Gf44CBPGJyPg0KICAgICAgICAgICAgICAgICAgICAgIOiHqueEtue0oOadkOOBqOOBhOOCj%2BOCjOOBpuOBhOOBvuOBmeOAgjxicj4NCiAgICAgICAgICAgICAgICAgICAgICDogozjgavjgarjgZjjgb%2FjgoTjgZnjgY%2FjgIHjgYbjgovjgYrjgYTjgpLkv53jgaHjgarjgYzjgonjgIHjgq3jg6HjgpLmlbTjgYjjgovjgarjganjgIE8YnI%2BDQogICAgICAgICAgICAgICAgICAgICAg44K544Kt44Oz44Kx44Ki5Yq55p6c44KC5pyf5b6F44Gn44GN44G%2B44GZ44CCDQogICAgICAgICAgICAgICAgICA8L3A%2BDQogICAgICAgICAgICAgIDwvbGk%2BDQogICAgICAgICAgICAgIDxsaSBjbGFzcz0ic2lsa19fZmVhdHVyZS1saXN0Ij4NCiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJzaWxrX19mZWF0dXJlLWxpc3QtdHRsIj7jgbXjgpPjgo%2Fjgorou73jgYTjgaTjgZHlv4PlnLA8L3A%2BDQogICAgICAgICAgICAgICAgICA8cCBjbGFzcz0ic2lsa19fZmVhdHVyZS1saXN0LXR4dCI%2BDQogICAgICAgICAgICAgICAgICAgICAg44OU44Ol44Ki44Gq44K344Or44Kv44OR44Km44OA44O844KS6YWN5ZCI44CCPGJyPg0KICAgICAgICAgICAgICAgICAgICAgIOODoeOCpOOCr%2BOCkuOBl%2BOBpuOBhOOCi%2BOBruOBq%2BOAgeiCjOihqOmdouOBr%2BOCteODqeOCteODqeOBqOOBl%2BOBn%2Bi7veOBhOOBpOOBkeW%2Fg%2BWcsOOAgjxicj4NCiAgICAgICAgICAgICAgICAgICAgICDntKDogozjgojjgorjgoLntKDogozjgaPjgb3jgYTjgrfjg6vjgq%2FogozjgavlsI7jgY3jgb7jgZnjgIINCiAgICAgICAgICAgICAgICAgIDwvcD4NCiAgICAgICAgICAgICAgPC9saT4NCiAgICAgICAgICAgICAgPGxpIGNsYXNzPSJzaWxrX19mZWF0dXJlLWxpc3QiPg0KICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9InNpbGtfX2ZlYXR1cmUtbGlzdC10dGwiPuOCreODvOODl%2BWKm%2BOBuOOBruiHquS%2FoTwvcD4NCiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJzaWxrX19mZWF0dXJlLWxpc3QtdHh0Ij4NCiAgICAgICAgICAgICAgICAgICAgICDjgrfjg6vjgq%2Fjga7nspLlrZDjga%2FnqbTjgYzjgZ%2FjgY%2FjgZXjgpPnqbrjgYTjgZ%2FlpJrlrZTos6rlvaLnirbjgII8YnI%2BDQogICAgICAgICAgICAgICAgICAgICAg55qu6ISC44O75rGX44KS44GZ44Gw44KE44GP5ZC45Y%2BO44CB5ZC4552A44GZ44KL44Gu44Gn44CBPGJyPg0KICAgICAgICAgICAgICAgICAgICAgIOODqOODrOOBq%2BOBj%2BOBhOOAgeODhuOCq%2BODquOBq%2BOBj%2BOBhOOAgeOBj%2BOBmeOBv%2BOBq%2BOBj%2BOBhOOAgjxicj4NCiAgICAgICAgICAgICAgICAgICAgICDlpJzjgb7jgafoh6rkv6Hjga7ogozjgYzntprjgY3jgb7jgZnjgIINCiAgICAgICAgICAgICAgICAgIDwvcD4NCiAgICAgICAgICAgICAgPC9saT4NCiAgICAgICAgICA8L3VsPg0KICAgICAgICAgIDxkaXYgY2xhc3M9InNpbGtfX2ltZyI%2BDQogICAgICAgICAgICAgIDxpbWcgc3JjPSIuLi8uLi9QYWdlL0xQL01ha2Uvc2lsa3dldHBvd2Rlci1yZWZpbGwvaW1nL3NsaWtfMS5qcGciIGFsdD0iIiBjbGFzcz0ic2lsa19faW1nLTEiPg0KICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJzaWxrX19pbWctZGV0YWlsIj4NCiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSIuLi8uLi9QYWdlL0xQL01ha2Uvc2lsa3dldHBvd2Rlci1yZWZpbGwvaW1nL3NsaWtfMDIuanBnIiBhbHQ9IiIgY2xhc3M9InNpbGtfX2ltZy0yIj4NCiAgICAgICAgICAgICAgICAgIDxwPumAmuawl%2BaAp%2BOBruOCiOOBhOWkmuWtlOizquW9oueKtjwvcD4NCiAgICAgICAgICAgICAgPC9kaXY%2BDQogICAgICAgICAgPC9kaXY%2BDQogICAgICA8L2Rpdj4NCiAgPC9zZWN0aW9uPiA8IS0tIFNJTEsgU0VDVElPTiBFTkQgLS0%2BDQoNCiAgPHNlY3Rpb24gY2xhc3M9Im5hdHVyYWwiIGRhdGEtYW9zPSJmYWRlLXVwIj4NCiAgICAgIDxoMiBjbGFzcz0ibmF0dXJhbF9fdHRsIj4NCiAgICAgICAgICDjg4rjg4Hjg6Xjg6njg6vjgarogozljbDosaHjgbjlsI7jgY88YnI%2BDQogICAgICAgICAg44CM5ZKM5ryi5qSN54mp6Imy57Sg44CNDQogICAgICA8L2gyPg0KICAgICAgPGRpdiBjbGFzcz0ibmF0dXJhbF9faW5uZXIiPg0KICAgICAgICAgIDx1bCBjbGFzcz0ibmF0dXJhbF9fbGlzdCI%2BDQogICAgICAgICAgICAgIDxsaSBjbGFzcz0ibmF0dXJhbF9fbGlzdC1pdGVtIj4NCiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSIuLi8uLi9QYWdlL0xQL01ha2Uvc2lsa3dldHBvd2Rlci1yZWZpbGwvaW1nL21hcnVfMDEuanBnIiBhbHQ9IiI%2BDQogICAgICAgICAgICAgICAgICA8cD7jgY%2FjgaHjgarjgZc8L3A%2BDQogICAgICAgICAgICAgIDwvbGk%2BDQogICAgICAgICAgICAgIDxsaSBjbGFzcz0ibmF0dXJhbF9fbGlzdC1pdGVtIj4NCiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSIuLi8uLi9QYWdlL0xQL01ha2Uvc2lsa3dldHBvd2Rlci1yZWZpbGwvaW1nL21hcnVfMDIuanBnIiBhbHQ9IiI%2BDQogICAgICAgICAgICAgICAgICA8cD7ntKvmoLk8L3A%2BDQogICAgICAgICAgICAgIDwvbGk%2BDQogICAgICAgICAgICAgIDxsaSBjbGFzcz0ibmF0dXJhbF9fbGlzdC1pdGVtIj4NCiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSIuLi8uLi9QYWdlL0xQL01ha2Uvc2lsa3dldHBvd2Rlci1yZWZpbGwvaW1nL21hcnVfMDMuanBnIiBhbHQ9IiI%2BDQogICAgICAgICAgICAgICAgICA8cD7ntIXoirE8L3A%2BDQogICAgICAgICAgICAgIDwvbGk%2BDQogICAgICAgICAgPC91bD4NCiAgICAgICAgICA8ZGl2IGNsYXNzPSJuYXR1cmFsX19yaWdodCI%2BDQogICAgICAgICAgICAgIDxkaXYgY2xhc3M9Im5hdHVyYWxfXzJuZC10dGwiPuacneOCguOAgeWknOOCguOAguOCr%2BODquOCouOBquiCjOWNsOixoeOBuOOAgjwvZGl2Pg0KICAgICAgICAgICAgICA8cCBjbGFzcz0ibmF0dXJhbF9fdHh0Ij4NCiAgICAgICAgICAgICAgICAgIDxzcGFuPuOCt%2BODq%2BOCr%2BOBqOWSjOa8ouakjeeJqeiJsue0oOOBr%2BOAgeaXpeacrOOBruS8nee1seeahOOBquafk%2BiJsuaKgOihk%2BOBp%2BOCguOBguOCizwvc3Bhbj48YnI%2BDQogICAgICAgICAgICAgICAgICDjgIzojYnmnKjmn5PjgoHjgI3jgavkvb%2Fjgo%2FjgozjgovjgbvjganopqrlkozmgKfjga7pq5jjgYToh6rnhLbntKDmnZDjgafjgZnjgIIgPGJyPg0KICAgICAgICAgICAgICAgICAg44K744OV44Kj44O844OM44Gv44CB44GT44Gu5ZKM5ryi5qSN54mp6Imy57Sg44Gr552A55uu44GX44CBIDxicj4NCiAgICAgICAgICAgICAgICAgIOOBj%2BOBoeOBquOBl%2BODu%2Be0heiKseODu%2Be0q%2BagueOBru%2B8k%2BeoruOBruiJsue0oOOCkumFjeWQiOOBl%2BOBvuOBl%2BOBn%2BOAgiA8YnI%2BDQogICAgICAgICAgICAgICAgICDmpI3niannlLHmnaXjga7jg4rjg4Hjg6Xjg6njg6vjgarnmbroibLjgafjgIEgPGJyPg0KICAgICAgICAgICAgICAgICAg5pyd44GL44KJ5pmp44G%2B44Gn5Lm%2B54el44Gr44KI44KL44GP44GZ44G%2F44Gu44Gq44GE44Kv44Oq44Ki44Gq6IKM5Y2w6LGh44G444CCDQogICAgICAgICAgICAgIDwvcD4NCiAgICAgICAgICA8L2Rpdj4NCiAgICAgIDwvZGl2Pg0KICA8L3NlY3Rpb24%2BIDwhLS0gTkFUVVJBTCBTRUNUSU9OIEVORCAtLT4NCg0KICA8c2VjdGlvbiBjbGFzcz0iZWZmZWN0IiBkYXRhLWFvcz0iZmFkZS11cCI%2BDQogICAgICA8aDIgY2xhc3M9ImVmZmVjdF9fdHRsIj7jg6HjgqTjgq%2FjgZfjgarjgYzjgonjgrnjgq3jg7PjgrHjgqLlirnmnpw8L2gyPg0KICAgICAgPHAgY2xhc3M9ImVmZmVjdF9fdHh0Ij4NCiAgICAgICAgICDnvo7jgZfjgYTogozjgavku5XkuIrjgZLjgovjg6HjgqTjgq%2FmqZ%2Fog73jgpLmjIHjgaHjgarjgYzjgonjgIHntKDogozjga7nvo7jgZfjgZXjgpLjgrXjg53jg7zjg4jjgZnjgovjg4fjg6XjgqLjg6vjg5Hjg6%2Fjg7zjgYzjgrvjg5XjgqPjg7zjg4zjga7lrp%2FlipvjgafjgZnjgII8YnI%2BDQogICAgICAgICAg44Kz44Op44O844Ky44Oz44CB44OS44Ki44Or44Ot44Oz6YW444KS44Gv44GY44KB44CB576O5a655oiQ5YiG44KS6YWN5ZCI44GX44G%2B44GX44Gf44CCPGJyPg0KICAgICAgICAgIOOBl%2BOBo%2BOBqOOCiuOAgeOBhuOCi%2BOBiuOBhOOBruOBguOCi%2Ba%2BhOOCk%2BOBoOiCjOOBuOWwjuOBjeOBvuOBmeOAgg0KICAgICAgPC9wPg0KICAgICAgPGRpdiBjbGFzcz0iY29udGFpbmVyLWlubmVyIj4NCiAgICAgICAgICA8dWwgY2xhc3M9ImVmZmVjdF9fbGlzdC13cmFwIj4NCiAgICAgICAgICAgICAgPGxpIGNsYXNzPSJlZmZlY3RfX2xpc3QtaXRlbSI%2BDQogICAgICAgICAgICAgICAgICA8aW1nIHNyYz0iLi4vLi4vUGFnZS9MUC9NYWtlL3NpbGt3ZXRwb3dkZXItcmVmaWxsL2ltZy9tYXJ1bWFydTEucG5nIiBhbHQ9IiI%2BDQogICAgICAgICAgICAgICAgICA8cCBjbGFzcz0iZWZmZWN0X19saXN0LXR4dC0xIj7jg6bjgq3jg47jgrfjgr%2Fjgqjjgq3jgrk8L3A%2BDQogICAgICAgICAgICAgICAgICA8cCBjbGFzcz0iZWZmZWN0X19saXN0LXR4dC0yIj7ogozjg4Tjg6Tjg7vogozjgZnjgZPjgoTjgYs8L3A%2BDQogICAgICAgICAgICAgIDwvbGk%2BDQogICAgICAgICAgICAgIDxsaSBjbGFzcz0iZWZmZWN0X19saXN0LWl0ZW0iPg0KICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Ii4uLy4uL1BhZ2UvTFAvTWFrZS9zaWxrd2V0cG93ZGVyLXJlZmlsbC9pbWcvbWFydW1hcnUyLnBuZyIgYWx0PSIiPg0KICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9ImVmZmVjdF9fbGlzdC10eHQtMSI%2B44Oe44Kw44Ov5qC555qu44Ko44Kt44K5PC9wPg0KICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9ImVmZmVjdF9fbGlzdC10eHQtMiI%2B6IKM44OE44OkPC9wPg0KICAgICAgICAgICAgICA8L2xpPg0KICAgICAgICAgICAgICA8bGkgY2xhc3M9ImVmZmVjdF9fbGlzdC1pdGVtIj4NCiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSIuLi8uLi9QYWdlL0xQL01ha2Uvc2lsa3dldHBvd2Rlci1yZWZpbGwvaW1nL21hcnVtYXJ1My5wbmciIGFsdD0iIj4NCiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJlZmZlY3RfX2xpc3QtdHh0LTEiPuOCq%2BODs%2BOCvuOCpuagueOCqOOCreOCuTwvcD4NCiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJlZmZlY3RfX2xpc3QtdHh0LTIiPuiCjOOBhuOCi%2BOBiuOBhDwvcD4NCiAgICAgICAgICAgICAgPC9saT4NCiAgICAgICAgICAgICAgPGxpIGNsYXNzPSJlZmZlY3RfX2xpc3QtaXRlbSI%2BDQogICAgICAgICAgICAgICAgICA8aW1nIHNyYz0iLi4vLi4vUGFnZS9MUC9NYWtlL3NpbGt3ZXRwb3dkZXItcmVmaWxsL2ltZy9tYXJ1bWFydTQucG5nIiBhbHQ9IiI%2BDQogICAgICAgICAgICAgICAgICA8cCBjbGFzcz0iZWZmZWN0X19saXN0LXR4dC0xIj7jgqrjgqbjgrTjg7Pjgqjjgq3jgrk8L3A%2BDQogICAgICAgICAgICAgICAgICA8cCBjbGFzcz0iZWZmZWN0X19saXN0LXR4dC0yIj7ogozjgYbjgovjgYrjgYQ8L3A%2BDQogICAgICAgICAgICAgIDwvbGk%2BDQogICAgICAgICAgICAgIDxsaSBjbGFzcz0iZWZmZWN0X19saXN0LWl0ZW0iPg0KICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Ii4uLy4uL1BhZ2UvTFAvTWFrZS9zaWxrd2V0cG93ZGVyLXJlZmlsbC9pbWcvbWFydW1hcnU1LnBuZyIgYWx0PSIiPg0KICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9ImVmZmVjdF9fbGlzdC10eHQtMSI%2B44Os44Kk44K344Ko44Kt44K5PC9wPg0KICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9ImVmZmVjdF9fbGlzdC10eHQtMiI%2B6IKM44GZ44GT44KE44GLPC9wPg0KICAgICAgICAgICAgICA8L2xpPg0KICAgICAgICAgICAgICA8bGkgY2xhc3M9ImVmZmVjdF9fbGlzdC1pdGVtIj4NCiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSIuLi8uLi9QYWdlL0xQL01ha2Uvc2lsa3dldHBvd2Rlci1yZWZpbGwvaW1nL21hcnVtYXJ1Ni5wbmciIGFsdD0iIj4NCiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJlZmZlY3RfX2xpc3QtdHh0LTEiPuODiOOCpuOCreOCqOOCreOCuTwvcD4NCiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJlZmZlY3RfX2xpc3QtdHh0LTIiPuiCjOODhOODpDwvcD4NCiAgICAgICAgICAgICAgPC9saT4NCiAgICAgICAgICAgICAgPGxpIGNsYXNzPSJlZmZlY3RfX2xpc3QtaXRlbSI%2BDQogICAgICAgICAgICAgICAgICA8aW1nIHNyYz0iLi4vLi4vUGFnZS9MUC9NYWtlL3NpbGt3ZXRwb3dkZXItcmVmaWxsL2ltZy9tYXJ1bWFydTcucG5nIiBhbHQ9IiI%2BDQogICAgICAgICAgICAgICAgICA8cCBjbGFzcz0iZWZmZWN0X19saXN0LXR4dC0xIj7jg4Tjg5zjgq%2FjgrXjgqjjgq3jgrk8L3A%2BDQogICAgICAgICAgICAgICAgICA8cCBjbGFzcz0iZWZmZWN0X19saXN0LXR4dC0yIj7jg4%2Fjg6rlr77nrZY8L3A%2BDQogICAgICAgICAgICAgIDwvbGk%2BDQogICAgICAgICAgICAgIDxsaSBjbGFzcz0iZWZmZWN0X19saXN0LWl0ZW0iPg0KICAgICAgICAgICAgICAgICAgPGltZyBzcmM9Ii4uLy4uL1BhZ2UvTFAvTWFrZS9zaWxrd2V0cG93ZGVyLXJlZmlsbC9pbWcvbWFydW1hcnU4LnBuZyIgYWx0PSIiPg0KICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9ImVmZmVjdF9fbGlzdC10eHQtMSI%2B44Ko44O844OH44Or44Ov44Kk44K544Ko44Kt44K5PC9wPg0KICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9ImVmZmVjdF9fbGlzdC10eHQtMiI%2B44OP44Oq5a%2B%2B562WPC9wPg0KICAgICAgICAgICAgICA8L2xpPg0KICAgICAgICAgICAgICA8bGkgY2xhc3M9ImVmZmVjdF9fbGlzdC1pdGVtIj4NCiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSIuLi8uLi9QYWdlL0xQL01ha2Uvc2lsa3dldHBvd2Rlci1yZWZpbGwvaW1nL21hcnVtYXJ1OS5wbmciIGFsdD0iIj4NCiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJlZmZlY3RfX2xpc3QtdHh0LTEiPuOCq%2BODn%2BODhOODrOiKseOCqOOCreOCuTwvcD4NCiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPSJlZmZlY3RfX2xpc3QtdHh0LTIiPuiCjOODhOODpDwvcD4NCiAgICAgICAgICAgICAgPC9saT4NCiAgICAgICAgICAgICAgPGxpIGNsYXNzPSJlZmZlY3RfX2xpc3QtaXRlbSI%2BDQogICAgICAgICAgICAgICAgICA8aW1nIHNyYz0iLi4vLi4vUGFnZS9MUC9NYWtlL3NpbGt3ZXRwb3dkZXItcmVmaWxsL2ltZy9tYXJ1bWFydTEwLnBuZyIgYWx0PSIiPg0KICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9ImVmZmVjdF9fbGlzdC10eHQtMSI%2B44OP44Oe44Oh44Oq44K544Ko44Kt44K5PC9wPg0KICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9ImVmZmVjdF9fbGlzdC10eHQtMiI%2B5q%2Bb56m044Kx44KiPC9wPg0KICAgICAgICAgICAgICA8L2xpPg0KICAgICAgICAgICAgICA8bGkgY2xhc3M9ImVmZmVjdF9fbGlzdC1pdGVtIj4NCiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSIuLi8uLi9QYWdlL0xQL01ha2Uvc2lsa3dldHBvd2Rlci1yZWZpbGwvaW1nL21hcnVtYXJ1MTEucG5nIiBhbHQ9IiI%2BDQogICAgICAgICAgICAgICAgICA8cCBjbGFzcz0iZWZmZWN0X19saXN0LXR4dC0xIj7jgrvjg7Pjg4Hjg5Xjgqnjg6rjgqLjg5Djg6k8YnI%2B44Ko44Kt44K5PC9wPg0KICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9ImVmZmVjdF9fbGlzdC10eHQtMiI%2B6IKM44GZ44GT44KE44GLPC9wPg0KICAgICAgICAgICAgICA8L2xpPg0KICAgICAgICAgICAgICA8bGkgY2xhc3M9ImVmZmVjdF9fbGlzdC1pdGVtIj4NCiAgICAgICAgICAgICAgICAgIDxpbWcgc3JjPSIuLi8uLi9QYWdlL0xQL01ha2Uvc2lsa3dldHBvd2Rlci1yZWZpbGwvaW1nL21hcnVtYXJ1MTIucG5nIiBhbHQ9IiI%2BDQogICAgICAgICAgICAgICAgICA8cCBjbGFzcz0iZWZmZWN0X19saXN0LXR4dC0xIj7jg57jg4njg7Pjg4rjg6rjg6rjg7zoirE8YnI%2B44Ko44Kt44K5PC9wPg0KICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9ImVmZmVjdF9fbGlzdC10eHQtMiI%2B6IKM44GG44KL44GK44GEPC9wPg0KICAgICAgICAgICAgICA8L2xpPg0KICAgICAgICAgIDwvdWw%2BDQogICAgICA8L2Rpdj4NCiAgPC9zZWN0aW9uPiA8IS0tIEVGRkVDVCBTRUNUSU9OIEVORCAtLT4NCg0KICA8c2VjdGlvbiBjbGFzcz0ic2tpbiIgZGF0YS1hb3M9ImZhZGUtdXAiPg0KICAgICAgPGgyIGNsYXNzPSJza2luX190dGwiPuOBiuiKseWei%2BeykuWtkOOBp%2Bavm%2BeptOOAgeODh%2BOCs%2BODnOOCs%2BOCkuaYjuOCi%2BOBhOWNsOixoeOBqzxzdXA%2B4oC7MTwvc3VwPjwvaDI%2BDQogICAgICA8ZGl2IGNsYXNzPSJza2luX19pbm5lciI%2BDQogICAgICAgICAgPGltZyBzcmM9Ii4uLy4uL1BhZ2UvTFAvTWFrZS9zaWxrd2V0cG93ZGVyLXJlZmlsbC9pbWcvc2tpbl9pbWcuanBnIiBhbHQ9IiIgY2xhc3M9InNraW5fX2ltZyI%2BDQogICAgICAgICAgPGRpdiBjbGFzcz0ic2tpbl9fZGV0YWlsIj4NCiAgICAgICAgICAgICAgPGRpdiBjbGFzcz0ic2tpbl9fc3VidHRsIj7jgr3jg5Xjg4jjg5Xjgqnjg7zjgqvjgrnlirnmnpw8L2Rpdj4NCiAgICAgICAgICAgICAgPHAgY2xhc3M9InNraW5fX3R4dCI%2BDQogICAgICAgICAgICAgICAgICDnqbTjgoTlsI%2FjgZjjgo%2FjgIHjgrfjg5%2Fjgarjganjga7oibLjg6Djg6njgIHjgqvjg5Djg7zjgZfjgZ%2FjgYTjg53jgqTjg7Pjg4jjga%2FjgIHjgbLjgajjgZ3jgozjgZ7jgozjgILjgZ3jgZPjgafjgIHjgrvjg5XjgqPjg7zjg4zjgafjga%2FjgrXjgqTjgrrjgoLlvaLjgoLjgbLjgajjgaTjgbLjgajjgaTnlbDjgarjgovnibnmrorjgaogIiDjgYroirHlnovnspLlrZAgIiDjgpLphY3lkIjjgILjgZPjga7nspLlrZDjgYznmq7ohprooajpnaLjga7lh7jlh7njgavjg5XjgqPjg4Pjg4jjgZfjgIHlhYnjgpLkubHlj43lsITjgZXjgZvjgovjgr3jg5Xjg4jjg5Xjgqnjg7zjgqvjgrnlirnmnpzjgafjgYrogozjga7msJfjgavjgarjgovmr5vnqbTjgoTjg4fjgrPjg5zjgrPjgIHoibLjg6Djg6njgpLnm67nq4vjgZ%2FjgarjgY%2FjgZXjgZvjgb7jgZnjgILmnJ3jgYvjgonmmanjgb7jgafjgY%2FjgZnjgb88c3VwPuKAuzI8L3N1cD7jga7jgarjgYTjgq%2Fjg6rjgqLjgarogozljbDosaHjgbjjgIINCiAgICAgICAgICAgICAgPC9wPg0KICAgICAgICAgICAgICA8cCBjbGFzcz0ic2tpbl9fZGlzYyI%2B4oC7MSDjg6HjgqTjgq%2FlirnmnpzjgavjgojjgovjgIDigLsy5Lm%2B54el44Gr44KI44KLPC9wPg0KICAgICAgICAgIDwvZGl2Pg0KICAgICAgPC9kaXY%2BDQogIDwvc2VjdGlvbj4gPCEtLSBTS0lOIFNFQ1RJT04gRU5EIC0tPg0KICANCiAgPHNlY3Rpb24gY2xhc3M9InNraW4iIGRhdGEtYW9zPSJmYWRlLXVwIj4NCiAgICA8aDIgY2xhc3M9InNraW5fX3R0bCI%2B5LiA57eS44Gr5L2%2F44Gj44Gm44CB44KC44Gj44Go44Kt44Os44Kk44CCPC9oMj4NCg0KPCEtLSBJR1RW44O8LS0%2BDQogIDxkaXYgaWQ9ImlndHYiIGNsYXNzPSJpZ3R2aW5mbyIgZGF0YS1hb3M9ImZhZGUtdXAiPg0KICAgIOWGheenkeODu%2BearuiGmuenkeWMu%2BOBruWPi%2BWIqeaWsOWFiOeUn%2BOBq%2BOBlOe0ueS7i%2BOBhOOBn%2BOBoOOBjeOBvuOBl%2BOBn%2BOAgg0KICA8L2Rpdj4NCjxzdHlsZT4jaWd0dnttYXJnaW4tdG9wOi0yMDBweDtwYWRkaW5nLXRvcDoyOTBweDt9QG1lZGlhIHNjcmVlbiBhbmQgKCBtYXgtd2lkdGg6NzY3cHggKXsjaWd0dnttYXJnaW4tdG9wOi0xMHB4O3BhZGRpbmctdG9wOjUwcHg7fX08L3N0eWxlPg0KDQo8ZGl2IGNsYXNzPSJpZ3R2IiBkYXRhLWFvcz0iZmFkZS11cCI%2BDQo8YmxvY2txdW90ZSBjbGFzcz0iaW5zdGFncmFtLW1lZGlhIiBkYXRhLWluc3Rncm0tcGVybWFsaW5rPSJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3R2L0NMeHI5NFVCanQwLz91dG1fc291cmNlPWlnX2VtYmVkJmFtcDt1dG1fY2FtcGFpZ249bG9hZGluZyIgZGF0YS1pbnN0Z3JtLXZlcnNpb249IjEzIiBzdHlsZT0iIGJhY2tncm91bmQ6I0ZGRjsgYm9yZGVyOjA7IGJvcmRlci1yYWRpdXM6M3B4OyBib3gtc2hhZG93OjAgMCAxcHggMCByZ2JhKDAsMCwwLDAuNSksMCAxcHggMTBweCAwIHJnYmEoMCwwLDAsMC4xNSk7IG1hcmdpbjogMXB4OyBtYXgtd2lkdGg6NTQwcHg7IG1pbi13aWR0aDozMjZweDsgcGFkZGluZzowOyB3aWR0aDo5OS4zNzUlOyB3aWR0aDotd2Via2l0LWNhbGMoMTAwJSAtIDJweCk7IHdpZHRoOmNhbGMoMTAwJSAtIDJweCk7Ij48ZGl2IHN0eWxlPSJwYWRkaW5nOjE2cHg7Ij4gPGEgaHJlZj0iaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS90di9DTHhyOTRVQmp0MC8%2FdXRtX3NvdXJjZT1pZ19lbWJlZCZhbXA7dXRtX2NhbXBhaWduPWxvYWRpbmciIHN0eWxlPSIgYmFja2dyb3VuZDojRkZGRkZGOyBsaW5lLWhlaWdodDowOyBwYWRkaW5nOjAgMDsgdGV4dC1hbGlnbjpjZW50ZXI7IHRleHQtZGVjb3JhdGlvbjpub25lOyB3aWR0aDoxMDAlOyIgdGFyZ2V0PSJfYmxhbmsiPiA8ZGl2IHN0eWxlPSIgZGlzcGxheTogZmxleDsgZmxleC1kaXJlY3Rpb246IHJvdzsgYWxpZ24taXRlbXM6IGNlbnRlcjsiPiA8ZGl2IHN0eWxlPSJiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0OyBib3JkZXItcmFkaXVzOiA1MCU7IGZsZXgtZ3JvdzogMDsgaGVpZ2h0OiA0MHB4OyBtYXJnaW4tcmlnaHQ6IDE0cHg7IHdpZHRoOiA0MHB4OyI%2BPC9kaXY%2BIDxkaXYgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGZsZXgtZ3JvdzogMTsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7Ij4gPGRpdiBzdHlsZT0iIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjQ7IGJvcmRlci1yYWRpdXM6IDRweDsgZmxleC1ncm93OiAwOyBoZWlnaHQ6IDE0cHg7IG1hcmdpbi1ib3R0b206IDZweDsgd2lkdGg6IDEwMHB4OyI%2BPC9kaXY%2BIDxkaXYgc3R5bGU9IiBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0OyBib3JkZXItcmFkaXVzOiA0cHg7IGZsZXgtZ3JvdzogMDsgaGVpZ2h0OiAxNHB4OyB3aWR0aDogNjBweDsiPjwvZGl2PjwvZGl2PjwvZGl2PjxkaXYgc3R5bGU9InBhZGRpbmc6IDE5JSAwOyI%2BPC9kaXY%2BIDxkaXYgc3R5bGU9ImRpc3BsYXk6YmxvY2s7IGhlaWdodDo1MHB4OyBtYXJnaW46MCBhdXRvIDEycHg7IHdpZHRoOjUwcHg7Ij48c3ZnIHdpZHRoPSI1MHB4IiBoZWlnaHQ9IjUwcHgiIHZpZXdCb3g9IjAgMCA2MCA2MCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cHM6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cHM6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxnIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKC01MTEuMDAwMDAwLCAtMjAuMDAwMDAwKSIgZmlsbD0iIzAwMDAwMCI%2BPGc%2BPHBhdGggZD0iTTU1Ni44NjksMzAuNDEgQzU1NC44MTQsMzAuNDEgNTUzLjE0OCwzMi4wNzYgNTUzLjE0OCwzNC4xMzEgQzU1My4xNDgsMzYuMTg2IDU1NC44MTQsMzcuODUyIDU1Ni44NjksMzcuODUyIEM1NTguOTI0LDM3Ljg1MiA1NjAuNTksMzYuMTg2IDU2MC41OSwzNC4xMzEgQzU2MC41OSwzMi4wNzYgNTU4LjkyNCwzMC40MSA1NTYuODY5LDMwLjQxIE01NDEsNjAuNjU3IEM1MzUuMTE0LDYwLjY1NyA1MzAuMzQyLDU1Ljg4NyA1MzAuMzQyLDUwIEM1MzAuMzQyLDQ0LjExNCA1MzUuMTE0LDM5LjM0MiA1NDEsMzkuMzQyIEM1NDYuODg3LDM5LjM0MiA1NTEuNjU4LDQ0LjExNCA1NTEuNjU4LDUwIEM1NTEuNjU4LDU1Ljg4NyA1NDYuODg3LDYwLjY1NyA1NDEsNjAuNjU3IE01NDEsMzMuODg2IEM1MzIuMSwzMy44ODYgNTI0Ljg4Niw0MS4xIDUyNC44ODYsNTAgQzUyNC44ODYsNTguODk5IDUzMi4xLDY2LjExMyA1NDEsNjYuMTEzIEM1NDkuOSw2Ni4xMTMgNTU3LjExNSw1OC44OTkgNTU3LjExNSw1MCBDNTU3LjExNSw0MS4xIDU0OS45LDMzLjg4NiA1NDEsMzMuODg2IE01NjUuMzc4LDYyLjEwMSBDNTY1LjI0NCw2NS4wMjIgNTY0Ljc1Niw2Ni42MDYgNTY0LjM0Niw2Ny42NjMgQzU2My44MDMsNjkuMDYgNTYzLjE1NCw3MC4wNTcgNTYyLjEwNiw3MS4xMDYgQzU2MS4wNTgsNzIuMTU1IDU2MC4wNiw3Mi44MDMgNTU4LjY2Miw3My4zNDcgQzU1Ny42MDcsNzMuNzU3IDU1Ni4wMjEsNzQuMjQ0IDU1My4xMDIsNzQuMzc4IEM1NDkuOTQ0LDc0LjUyMSA1NDguOTk3LDc0LjU1MiA1NDEsNzQuNTUyIEM1MzMuMDAzLDc0LjU1MiA1MzIuMDU2LDc0LjUyMSA1MjguODk4LDc0LjM3OCBDNTI1Ljk3OSw3NC4yNDQgNTI0LjM5Myw3My43NTcgNTIzLjMzOCw3My4zNDcgQzUyMS45NCw3Mi44MDMgNTIwLjk0Miw3Mi4xNTUgNTE5Ljg5NCw3MS4xMDYgQzUxOC44NDYsNzAuMDU3IDUxOC4xOTcsNjkuMDYgNTE3LjY1NCw2Ny42NjMgQzUxNy4yNDQsNjYuNjA2IDUxNi43NTUsNjUuMDIyIDUxNi42MjMsNjIuMTAxIEM1MTYuNDc5LDU4Ljk0MyA1MTYuNDQ4LDU3Ljk5NiA1MTYuNDQ4LDUwIEM1MTYuNDQ4LDQyLjAwMyA1MTYuNDc5LDQxLjA1NiA1MTYuNjIzLDM3Ljg5OSBDNTE2Ljc1NSwzNC45NzggNTE3LjI0NCwzMy4zOTEgNTE3LjY1NCwzMi4zMzggQzUxOC4xOTcsMzAuOTM4IDUxOC44NDYsMjkuOTQyIDUxOS44OTQsMjguODk0IEM1MjAuOTQyLDI3Ljg0NiA1MjEuOTQsMjcuMTk2IDUyMy4zMzgsMjYuNjU0IEM1MjQuMzkzLDI2LjI0NCA1MjUuOTc5LDI1Ljc1NiA1MjguODk4LDI1LjYyMyBDNTMyLjA1NywyNS40NzkgNTMzLjAwNCwyNS40NDggNTQxLDI1LjQ0OCBDNTQ4Ljk5NywyNS40NDggNTQ5Ljk0MywyNS40NzkgNTUzLjEwMiwyNS42MjMgQzU1Ni4wMjEsMjUuNzU2IDU1Ny42MDcsMjYuMjQ0IDU1OC42NjIsMjYuNjU0IEM1NjAuMDYsMjcuMTk2IDU2MS4wNTgsMjcuODQ2IDU2Mi4xMDYsMjguODk0IEM1NjMuMTU0LDI5Ljk0MiA1NjMuODAzLDMwLjkzOCA1NjQuMzQ2LDMyLjMzOCBDNTY0Ljc1NiwzMy4zOTEgNTY1LjI0NCwzNC45NzggNTY1LjM3OCwzNy44OTkgQzU2NS41MjIsNDEuMDU2IDU2NS41NTIsNDIuMDAzIDU2NS41NTIsNTAgQzU2NS41NTIsNTcuOTk2IDU2NS41MjIsNTguOTQzIDU2NS4zNzgsNjIuMTAxIE01NzAuODIsMzcuNjMxIEM1NzAuNjc0LDM0LjQzOCA1NzAuMTY3LDMyLjI1OCA1NjkuNDI1LDMwLjM0OSBDNTY4LjY1OSwyOC4zNzcgNTY3LjYzMywyNi43MDIgNTY1Ljk2NSwyNS4wMzUgQzU2NC4yOTcsMjMuMzY4IDU2Mi42MjMsMjIuMzQyIDU2MC42NTIsMjEuNTc1IEM1NTguNzQzLDIwLjgzNCA1NTYuNTYyLDIwLjMyNiA1NTMuMzY5LDIwLjE4IEM1NTAuMTY5LDIwLjAzMyA1NDkuMTQ4LDIwIDU0MSwyMCBDNTMyLjg1MywyMCA1MzEuODMxLDIwLjAzMyA1MjguNjMxLDIwLjE4IEM1MjUuNDM4LDIwLjMyNiA1MjMuMjU3LDIwLjgzNCA1MjEuMzQ5LDIxLjU3NSBDNTE5LjM3NiwyMi4zNDIgNTE3LjcwMywyMy4zNjggNTE2LjAzNSwyNS4wMzUgQzUxNC4zNjgsMjYuNzAyIDUxMy4zNDIsMjguMzc3IDUxMi41NzQsMzAuMzQ5IEM1MTEuODM0LDMyLjI1OCA1MTEuMzI2LDM0LjQzOCA1MTEuMTgxLDM3LjYzMSBDNTExLjAzNSw0MC44MzEgNTExLDQxLjg1MSA1MTEsNTAgQzUxMSw1OC4xNDcgNTExLjAzNSw1OS4xNyA1MTEuMTgxLDYyLjM2OSBDNTExLjMyNiw2NS41NjIgNTExLjgzNCw2Ny43NDMgNTEyLjU3NCw2OS42NTEgQzUxMy4zNDIsNzEuNjI1IDUxNC4zNjgsNzMuMjk2IDUxNi4wMzUsNzQuOTY1IEM1MTcuNzAzLDc2LjYzNCA1MTkuMzc2LDc3LjY1OCA1MjEuMzQ5LDc4LjQyNSBDNTIzLjI1Nyw3OS4xNjcgNTI1LjQzOCw3OS42NzMgNTI4LjYzMSw3OS44MiBDNTMxLjgzMSw3OS45NjUgNTMyLjg1Myw4MC4wMDEgNTQxLDgwLjAwMSBDNTQ5LjE0OCw4MC4wMDEgNTUwLjE2OSw3OS45NjUgNTUzLjM2OSw3OS44MiBDNTU2LjU2Miw3OS42NzMgNTU4Ljc0Myw3OS4xNjcgNTYwLjY1Miw3OC40MjUgQzU2Mi42MjMsNzcuNjU4IDU2NC4yOTcsNzYuNjM0IDU2NS45NjUsNzQuOTY1IEM1NjcuNjMzLDczLjI5NiA1NjguNjU5LDcxLjYyNSA1NjkuNDI1LDY5LjY1MSBDNTcwLjE2Nyw2Ny43NDMgNTcwLjY3NCw2NS41NjIgNTcwLjgyLDYyLjM2OSBDNTcwLjk2Niw1OS4xNyA1NzEsNTguMTQ3IDU3MSw1MCBDNTcxLDQxLjg1MSA1NzAuOTY2LDQwLjgzMSA1NzAuODIsMzcuNjMxIj48L3BhdGg%2BPC9nPjwvZz48L2c%2BPC9zdmc%2BPC9kaXY%2BPGRpdiBzdHlsZT0icGFkZGluZy10b3A6IDhweDsiPiA8ZGl2IHN0eWxlPSIgY29sb3I6IzM4OTdmMDsgZm9udC1mYW1pbHk6QXJpYWwsc2Fucy1zZXJpZjsgZm9udC1zaXplOjE0cHg7IGZvbnQtc3R5bGU6bm9ybWFsOyBmb250LXdlaWdodDo1NTA7IGxpbmUtaGVpZ2h0OjE4cHg7Ij4g44GT44Gu5oqV56i%2F44KSSW5zdGFncmFt44Gn6KaL44KLPC9kaXY%2BPC9kaXY%2BPGRpdiBzdHlsZT0icGFkZGluZzogMTIuNSUgMDsiPjwvZGl2PiA8ZGl2IHN0eWxlPSJkaXNwbGF5OiBmbGV4OyBmbGV4LWRpcmVjdGlvbjogcm93OyBtYXJnaW4tYm90dG9tOiAxNHB4OyBhbGlnbi1pdGVtczogY2VudGVyOyI%2BPGRpdj4gPGRpdiBzdHlsZT0iYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDsgYm9yZGVyLXJhZGl1czogNTAlOyBoZWlnaHQ6IDEyLjVweDsgd2lkdGg6IDEyLjVweDsgdHJhbnNmb3JtOiB0cmFuc2xhdGVYKDBweCkgdHJhbnNsYXRlWSg3cHgpOyI%2BPC9kaXY%2BIDxkaXYgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNGNEY0RjQ7IGhlaWdodDogMTIuNXB4OyB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpIHRyYW5zbGF0ZVgoM3B4KSB0cmFuc2xhdGVZKDFweCk7IHdpZHRoOiAxMi41cHg7IGZsZXgtZ3JvdzogMDsgbWFyZ2luLXJpZ2h0OiAxNHB4OyBtYXJnaW4tbGVmdDogMnB4OyI%2BPC9kaXY%2BIDxkaXYgc3R5bGU9ImJhY2tncm91bmQtY29sb3I6ICNGNEY0RjQ7IGJvcmRlci1yYWRpdXM6IDUwJTsgaGVpZ2h0OiAxMi41cHg7IHdpZHRoOiAxMi41cHg7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCg5cHgpIHRyYW5zbGF0ZVkoLTE4cHgpOyI%2BPC9kaXY%2BPC9kaXY%2BPGRpdiBzdHlsZT0ibWFyZ2luLWxlZnQ6IDhweDsiPiA8ZGl2IHN0eWxlPSIgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDsgYm9yZGVyLXJhZGl1czogNTAlOyBmbGV4LWdyb3c6IDA7IGhlaWdodDogMjBweDsgd2lkdGg6IDIwcHg7Ij48L2Rpdj4gPGRpdiBzdHlsZT0iIHdpZHRoOiAwOyBoZWlnaHQ6IDA7IGJvcmRlci10b3A6IDJweCBzb2xpZCB0cmFuc3BhcmVudDsgYm9yZGVyLWxlZnQ6IDZweCBzb2xpZCAjZjRmNGY0OyBib3JkZXItYm90dG9tOiAycHggc29saWQgdHJhbnNwYXJlbnQ7IHRyYW5zZm9ybTogdHJhbnNsYXRlWCgxNnB4KSB0cmFuc2xhdGVZKC00cHgpIHJvdGF0ZSgzMGRlZykiPjwvZGl2PjwvZGl2PjxkaXYgc3R5bGU9Im1hcmdpbi1sZWZ0OiBhdXRvOyI%2BIDxkaXYgc3R5bGU9IiB3aWR0aDogMHB4OyBib3JkZXItdG9wOiA4cHggc29saWQgI0Y0RjRGNDsgYm9yZGVyLXJpZ2h0OiA4cHggc29saWQgdHJhbnNwYXJlbnQ7IHRyYW5zZm9ybTogdHJhbnNsYXRlWSgxNnB4KTsiPjwvZGl2PiA8ZGl2IHN0eWxlPSIgYmFja2dyb3VuZC1jb2xvcjogI0Y0RjRGNDsgZmxleC1ncm93OiAwOyBoZWlnaHQ6IDEycHg7IHdpZHRoOiAxNnB4OyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCk7Ij48L2Rpdj4gPGRpdiBzdHlsZT0iIHdpZHRoOiAwOyBoZWlnaHQ6IDA7IGJvcmRlci10b3A6IDhweCBzb2xpZCAjRjRGNEY0OyBib3JkZXItbGVmdDogOHB4IHNvbGlkIHRyYW5zcGFyZW50OyB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTRweCkgdHJhbnNsYXRlWCg4cHgpOyI%2BPC9kaXY%2BPC9kaXY%2BPC9kaXY%2BIDxkaXYgc3R5bGU9ImRpc3BsYXk6IGZsZXg7IGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47IGZsZXgtZ3JvdzogMTsganVzdGlmeS1jb250ZW50OiBjZW50ZXI7IG1hcmdpbi1ib3R0b206IDI0cHg7Ij4gPGRpdiBzdHlsZT0iIGJhY2tncm91bmQtY29sb3I6ICNGNEY0RjQ7IGJvcmRlci1yYWRpdXM6IDRweDsgZmxleC1ncm93OiAwOyBoZWlnaHQ6IDE0cHg7IG1hcmdpbi1ib3R0b206IDZweDsgd2lkdGg6IDIyNHB4OyI%2BPC9kaXY%2BIDxkaXYgc3R5bGU9IiBiYWNrZ3JvdW5kLWNvbG9yOiAjRjRGNEY0OyBib3JkZXItcmFkaXVzOiA0cHg7IGZsZXgtZ3JvdzogMDsgaGVpZ2h0OiAxNHB4OyB3aWR0aDogMTQ0cHg7Ij48L2Rpdj48L2Rpdj48L2E%2BPHAgc3R5bGU9IiBjb2xvcjojYzljOGNkOyBmb250LWZhbWlseTpBcmlhbCxzYW5zLXNlcmlmOyBmb250LXNpemU6MTRweDsgbGluZS1oZWlnaHQ6MTdweDsgbWFyZ2luLWJvdHRvbTowOyBtYXJnaW4tdG9wOjhweDsgb3ZlcmZsb3c6aGlkZGVuOyBwYWRkaW5nOjhweCAwIDdweDsgdGV4dC1hbGlnbjpjZW50ZXI7IHRleHQtb3ZlcmZsb3c6ZWxsaXBzaXM7IHdoaXRlLXNwYWNlOm5vd3JhcDsiPjxhIGhyZWY9Imh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vdHYvQ0x4cjk0VUJqdDAvP3V0bV9zb3VyY2U9aWdfZW1iZWQmYW1wO3V0bV9jYW1wYWlnbj1sb2FkaW5nIiBzdHlsZT0iIGNvbG9yOiNjOWM4Y2Q7IGZvbnQtZmFtaWx5OkFyaWFsLHNhbnMtc2VyaWY7IGZvbnQtc2l6ZToxNHB4OyBmb250LXN0eWxlOm5vcm1hbDsgZm9udC13ZWlnaHQ6bm9ybWFsOyBsaW5lLWhlaWdodDoxN3B4OyB0ZXh0LWRlY29yYXRpb246bm9uZTsiIHRhcmdldD0iX2JsYW5rIj7lj4vliKnmlrAo44Go44KC44KK44GC44KJ44GfKShAYXJhdGF0b21vcmkp44GM44K344Kn44Ki44GX44Gf5oqV56i%2FPC9hPjwvcD48L2Rpdj48L2Jsb2NrcXVvdGU%2BIDxzY3JpcHQgYXN5bmMgc3JjPSIvL3d3dy5pbnN0YWdyYW0uY29tL2VtYmVkLmpzIj48L3NjcmlwdD4NCjwvZGl2Pg0KPCEtLSBJR1RWZW5kLS0%2BDQogIDwvc2VjdGlvbj4gPCEtLSBTS0lOIFNFQ1RJT04gRU5EIC0tPiAgDQoNCjxzZWN0aW9uIGNsYXNzPSJpbnN0YWdyYW0iIGRhdGEtYW9zPSJmYWRlLXVwIj4NCjxkaXYgY2xhc3M9ImlubmVyIj4NCiAgICA8aGVhZGVyPg0KICAgIDxoMj5pbnN0YWdyYW0gVk9JQ0U8L2gyPg0KICAgIDxwPuOCpOODs%2BOCueOCv%2BOCsOODqeODoOODnOOCpOOCuTwvcD4NCiAgICA8L2hlYWRlcj4NCiAgICA8dWwgY2xhc3M9InNsaWRlIj4NCg0KICAgICAgIDxsaSBocmVmPSIjaW5zdGEwMSIgY2xhc3M9Im1vZGFsIj4NCiAgICAgICAgPGRpdiBpZD0iaW5zdGEwMSIgY2xhc3M9ImlubmVyIj4NCiAgICAgICAgPGltZyBzcmM9Ii4uLy4uL0NvbnRlbnRzL0ltYWdlc1BrZy9pbnN0YWdyYW0vaXRlbVAvU1dQXzIwMjAwOF8xLmpwZyIgLz4NCiAgICAgICAgPGRpdiBjbGFzcz0idGV4dCI%2BDQogICAgICAgIDxoMz48YSBocmVmPSJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3NoaW1hY2hhbl8yMy8iIHRhcmdldD0iX2JsYW5rIj5zaGltYWNoYW5fMjM8L2E%2BPC9oMz4NCiAgICAgICAgPHA%2B5rih6L6655u0576O44GV44KT44KC5oSb55So44GX44Gm44KL44G%2F44Gf44GE44Gu77u%2FPGJyPg0KI%2BOCu%2BODleOCo%2BODvOODjOOCt%2BODq%2BOCr%2BOCpuOCp%2BODg%2BODiOODkeOCpuODgOODvO%2B7vzxicj4NCu%2B7vzxicj4NCuaomea6luiJsuOBrk9DMTAw77u%2FPGJyPg0K5pyA5Yid6KaL44Gf44KJ5r%2BD44GE44GL44Gq77yB77yf44Gj44Gm5oCd44Gj44Gf44GR44Gp77u%2FPGJyPg0K5aGX44Gj44Gf44KJ44Gd44KT44Gq44GT44Go44Gq44GL44Gj44Gf77yB77u%2FPGJyPg0K77u%2FPGJyPg0K44K144Op44OD44Go44GX44Gm44Gm6Lu944GE44Gk44GR5b%2BD5Zyw77yB77u%2FPGJyPg0K44Gg44GR44Gp44Kr44OQ44O85Yqb44KC44GC44Gj44Gm6Imv44GE8J%2BSk%2B%2B7vzxicj4NCu%2B7vzxicj4NCuS5vueHpeiCjOOBoOOBkeOBqeS%2Fnea5v%2BOBl%2BOBpuOBi%2BOCieS9v%2BeUqOOBl%2BOBn%2BOBl%2B%2B7vzxicj4NCueyieWQueOBhOOBn%2BOCiuOCguOBl%2BOBquOBi%2BOBo%2BOBn%2FCfmIrvu788YnI%2BDQrvu788YnI%2BDQoyMueorumhnuOBrue%2BjuWuueaIkOWIhuOCgumFjeWQiOOBleOCjOOBpuOCi%2BOBv%2BOBn%2BOBhOOBoOOBi%2BOCie%2B7vzxicj4NCuODoeOCpOOCr%2BOCkuOBl%2BOBquOBjOOCieOCueOCreODs%2BOCseOCouWKueaenOOCguacn%2BW%2BheOBp%2BOBjeOCi%2BOBqOOBruOBk%2BOBqOOBo%2B%2B8geKdpO%2B4j%2B%2B7vzxicj4NCu%2B7vzxicj4NCuKYhe%2B7vzxicj4NCiPjgrvjg5XjgqPjg7zjg4wgI%2BOCs%2BOCueODoSAj44Oh44Kk44KvICPnvo7lrrkgI%2Be%2BjuiCjDxicj4NCiAgICAgICAgPC9wPg0KICAgICAgICA8L2Rpdj4NCiAgICAgICAgPC9kaXY%2BDQogICAgIDwvbGk%2BDQoNCiAgICAgICA8bGkgaHJlZj0iI2luc3RhMDIiIGNsYXNzPSJtb2RhbCI%2BDQogICAgICAgIDxkaXYgaWQ9Imluc3RhMDIiIGNsYXNzPSJpbm5lciI%2BDQogICAgICAgIDxpbWcgc3JjPSIuLi8uLi9Db250ZW50cy9JbWFnZXNQa2cvaW5zdGFncmFtLzIwMjAwMTI3XzA4LmpwZyIgLz4NCiAgICAgICAgPGRpdiBjbGFzcz0idGV4dCI%2BDQogICAgICAgIDxoMz48YSBocmVmPSJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL21vcnVuYWJsb2cvIiB0YXJnZXQ9Il9ibGFuayI%2BbW9ydW5hYmxvZzwvYT48L2gzPg0KICAgICAgICA8cD7iiaoj44K744OV44Kj44O844OM44K344Or44Kv44Km44Kn44OD44OI44OR44Km44OA44O877u%2F77u%2F4omrPGJyIC8%2BDQo8YnIgLz4NCjxiciAvPg0KICAgICAgICDku4rlubTjga7lpI%2FjgajjgaPjgabjgoLjgajjgaPjgabjgoI8YnIgLz4NCuOBiuS4luipseOBq%2BOBquOCiuOBvuOBl%2BOBn%2BOAgeOBk%2BOBoeOCiTxiciAvPg0K44G944Gj44Gh44KD44KK44Gu6aGU5rGX44Gr44KC5by344GE5bSp44KM44Gr44GP44GV77yBPGJyIC8%2BDQrliKXlo7Ljgorjga7jg5bjg6njgrfku5jjgZHjgafjgoLku5jlsZ7jga7jg5Hjg5Xku5jjgZE8YnIgLz4NCuOBp%2BOCguiJr%2BmBjuOBjuOCi%2BKcp%2BKAp8uaPGJyIC8%2BDQouPGJyIC8%2BDQouPGJyIC8%2BDQrmm7jjgY3jgY3jgozjgarjgYTjg6zjg5Pjg6Xjg7zjgpI8YnIgLz4NCm1vcnVuYWJsb2fjgavjgabmm7jjgYTjgabjgb%2Fjgb7jgZfjgZ%2FigKriuJzinaTvuI7iuJ3igKw8YnIgLz4NCi48YnIgLz4NCi48YnIgLz4NCiPjgrvjg5XjgqPjg7zjg4wgI%2BOCt%2BODq%2BOCr%2BOCpuOCqOODg%2BODiOODkeOCpuODgOODvCAj44Kz44K544Oh5aW944GNICPjgrPjgrnjg6EgI%2BODleOCoeODs%2BODh%2BODvOOCt%2BODp%2BODsyAj44OR44Km44OA44O844OV44Kh44Oz44OH44O844K344On44OzICPjg5Hjgqbjg4Djg7zjg5XjgqHjg7Pjg4cgI%2BOCs%2BOCueODoeWlveOBjeOBleOCk%2BOBqOe5i%2BOBjOOCiuOBn%2BOBhA0KICAgICAgICA8L3A%2BDQogICAgICAgIDwvZGl2Pg0KICAgICAgICA8L2Rpdj4NCiAgICAgPC9saT4NCg0KDQogICAgICAgPGxpIGhyZWY9IiNpbnN0YTAzIiBjbGFzcz0ibW9kYWwiPg0KICAgICAgICA8ZGl2IGlkPSJpbnN0YTAzIiBjbGFzcz0iaW5uZXIiPg0KICAgICAgICA8aW1nIHNyYz0iLi4vLi4vQ29udGVudHMvSW1hZ2VzUGtnL2luc3RhZ3JhbS9pdGVtUC9TV1BfMjAyMDA4XzIuanBnIiAvPg0KICAgICAgICA8ZGl2IGNsYXNzPSJ0ZXh0Ij4NCiAgICAgICAgPGgzPjxhIGhyZWY9Imh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vbW9tbXkuMTk4OS8iIHRhcmdldD0iX2JsYW5rIj5tb21teS4xOTg5PC9hPjwvaDM%2BDQogICAgICAgIDxwPuOBmuOBo%2BOBqOawl%2BOBq%2BOBquOBo%2BOBpuOBhOOBn%2B%2B7vzxicj4NCuOCu%2BODleOCo%2BODvOODjOOBru%2B7vzxicj4NCuOCt%2BODq%2BOCr%2BOCpuOCp%2BODg%2BODiOODkeOCpuODgOODvO%2B8ge%2B7vzxicj4NCi7vu788YnI%2BDQrntZDoq5bjgYvjgonoqIDjgYbjgajjgIHjgIHvu788YnI%2BDQrjgoHjgaHjgoPjgY%2FjgaHjgoPmsJfjgavlhaXjgorjgb7jgZfjgZ%2Fwn5iN77u%2FPGJyPg0KLu%2B7vzxicj4NCuWOmuWhl%2BOCiuOBq%2BOBquOCieOBmuOAgei7veOBhOOBpOOBkeW%2Fg%2BWcsOOAgu%2B7vzxicj4NCuS4gOeVquawl%2BOBq%2BWFpeOBo%2BOBn%2BOBruOBr%2BOAgeW0qeOCjOOBq%2BOBj%2BOBle%2B8ge%2B7vzxicj4NCuacneODoeOCpOOCr%2BOBl%2BOBpuOAgeaZruauteOBruODoeOCpOOCr%2BOBquOCie%2B7vzxicj4NCuWkleaWueOBq%2BOBr%2Bm8u%2BOChOOBiuOBp%2BOBk%2BOBruODhuOCq%2BOCiuOBjO%2B7vzxicj4NCuawl%2BOBq%2BOBquOCi%2BOBruOBq%2BOAgeOBk%2BOBruODleOCoeODs%2BODh%2BOBr%2B%2B7vzxicj4NCuW0qeOCjOOBpuOCi%2BaEn%2BOBjOOBquOBhOODvO%2B8ge%2B8ge%2B7vzxicj4NCi7vu788YnI%2BDQrjgY%2FjgZnjgoDjgZPjgajjgoLjgarjgY%2FjgIHvu788YnI%2BDQrjgYrnm7TjgZfjgYTjgonjgZrjgafmhJ%2Fli5XvvIHvvIHvu788YnI%2BDQou77u%2FPGJyPg0K57KS5a2Q44GM57Sw44GL44GE44GL44KJ44Gq44Gu44GL44Gq77yf77u%2FPGJyPg0K44Go44Gr44GL44GP44GZ44GU44GE44Gn44GZ44CC77u%2FPGJyPg0K5YyW57Kn5bSp44KM44Gr5oKp44KT44Gn44KL5pa544Gr77u%2FPGJyPg0K44Gc44Gy44Gc44Gy5L2%2F44Gj44Gm44G%2F44Gm44G744GX44GE44Gn44GZ77yB77u%2FPGJyPg0KLu%2B7vzxicj4NCi7vu788YnI%2BDQoj44K744OV44Kj44O844OM77u%2FPGJyPg0KI%2BOCt%2BODq%2BOCr%2BOCpuOCp%2BODg%2BODiOODkeOCpuODgOODvO%2B7vzxicj4NCiPjg5XjgqHjg7Pjg4fjg7zjgrfjg6fjg7Pvu788YnI%2BDQoj44Kz44K544Oh44Os44Od44CAI%2BOCs%2BOCueODoeWlveOBjeOBleOCk%2BOBqOe5i%2BOBjOOCiuOBn%2BOBhO%2B7vzxicj4NCiAgICAgICAgPC9wPg0KICAgICAgICA8L2Rpdj4NCiAgICAgICAgPC9kaXY%2BDQogICAgIDwvbGk%2BDQoNCiAgICAgICA8bGkgaHJlZj0iI2luc3RhMDQiIGNsYXNzPSJtb2RhbCI%2BDQogICAgICAgIDxkaXYgaWQ9Imluc3RhMDQiIGNsYXNzPSJpbm5lciI%2BDQogICAgICAgIDxpbWcgc3JjPSIuLi8uLi9Db250ZW50cy9JbWFnZXNQa2cvaW5zdGFncmFtLzIwMjAwMTI3XzA5LmpwZyIgLz4NCiAgICAgICAgPGRpdiBjbGFzcz0idGV4dCI%2BDQogICAgICAgIDxoMz48YSBocmVmPSJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL3BvbnRhX21hbjAzMDgvIiB0YXJnZXQ9Il9ibGFuayI%2BcG9udGFfbWFuMDMwODwvYT48L2gzPg0KICAgICAgICA8cD7iiaoj44K744OV44Kj44O844OM44K344Or44Kv44Km44Kn44OD44OI44OR44Km44OA44O84omrPGJyIC8%2BDQrkvb%2FnlKjjgZfjgabjgb%2Fjgb7jgZfjgZ%2Fimarvu788YnIgLz4NCu%2B7vzxiciAvPg0K77u%2FPGJyIC8%2BDQrmuKHovrrnm7Tnvo7jgZXjgpPjgYzkvb%2Fjgo%2FjgozjgabjgYTjgovjgZPjgajjgafmnInlkI3jgarjg5XjgqHjg7Pjg4fjg7zjgrfjg6fjg7Pwn5iM4pyo77u%2FPGJyIC8%2BDQrjgIzjgrfjg6vjgq%2FjgI3jgajlkI3liY3jgavlhaXjgaPjgabjgovjgaDjgZHjgYLjgaPjgabjgIHvu788YnIgLz4NCuOBl%2BOBo%2BOBqOOCiuOBquOCgeOCieOBi%2BOBq%2BOBquOBo%2BOBpuOBj%2BOCjOOBvuOBl%2BOBn%2BKZqu%2B7vzxiciAvPg0K77u%2FPGJyIC8%2BDQrjgrfjg6vjgq%2Fjgqbjgqfjg4Pjg4jjg5Hjgqbjg4Djg7zjgavjga%2Fnvo7lrrnmiJDliIbjgYwyMueorumhnuOCguWFpeOBo%2BOBpuOBvuOBmfCfmLPvu788YnIgLz4NCuOBiuWMlueyp%2BOBl%2BOBquOBjOOCieOCueOCreODs%2BOCseOCouOAgei0heayouOBp%2BOBmeOCiOOBrfCfmI3vu788YnIgLz4NCu%2B7vzxiciAvPg0K44Gk44GR5b%2BD5Zyw44Gv6Lu944GP44Gm44GV44KJ44Gj44Go44GX44Gf5oSf44GY44CC77u%2FPGJyIC8%2BDQrmmpHjgYTml6Xjgavkvb%2FnlKjjgZfjgabjgb%2Fjgb7jgZfjgZ%2FjgYzjgIHltKnjgozjgoLjgarjgY%2FjgYTjgYTmhJ%2FjgZjimLrvuI%2Fwn5KV77u%2FPGJyIC8%2BDQrvu788YnIgLz4NCu%2B7vzxiciAvPg0KI%2BOCu%2BODleOCo%2BODvOODjCAj44K744OV44Kj44O844OM44K344Or44Kv44Km44Kn44OD44OI44OR44Km44OA44O8I%2BODleOCoeODs%2BODh%2BODvOOCt%2BODp%2BODsyAj44Kz44K544OhICPnvo7lrrnlpb3jgY0gI%2Be%2BjuiCjCAj5aWz5YSq6IKMICPjgqLjg6njgrXjg7wg77u%2FI%2Be%2BjuWuueWlveOBjeOBquS6uuOBqOe5i%2BOBjOOCiuOBn%2BOBhCAj44Kz44K544Oh5aW944GN44GV44KT44Go57mL44GM44KK44Gf44GEICPjgrnjgq3jg7PjgrHjgqIgI%2BOBjeOCjOOBhOOBq%2BOBquOCiuOBn%2BOBhA0KICAgICAgICA8L3A%2BDQogICAgICAgIDwvZGl2Pg0KICAgICAgICA8L2Rpdj4NCiAgICAgPC9saT4NCg0KICAgICAgIDxsaSBocmVmPSIjaW5zdGEwNSIgY2xhc3M9Im1vZGFsIj4NCiAgICAgICAgPGRpdiBpZD0iaW5zdGEwNSIgY2xhc3M9ImlubmVyIj4NCiAgICAgICAgPGltZyBzcmM9Ii4uLy4uL0NvbnRlbnRzL0ltYWdlc1BrZy9pbnN0YWdyYW0vaXRlbVAvU1dQXzIwMjAwOF8zLmpwZyIgLz4NCiAgICAgICAgPGRpdiBjbGFzcz0idGV4dCI%2BDQogICAgICAgIDxoMz48YSBocmVmPSJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL2tlcHBpMDgzMC8iIHRhcmdldD0iX2JsYW5rIj5rZXBwaTA4MzA8L2E%2BPC9oMz4NCiAgICAgICAgPHA%2B6LaF576O6IKM44Gu5oyB44Gh5Li744CB5rih6L6655u0576O44GV44KT44GM5L2%2F55So44GX44Gm44GE44KL44OR44Km44OA44O844OV44Kh44Oz44OH44O844K344On44Oz4pyo77u%2FPGJyPg0K77u%2FPGJyPg0K44GE44Gk44KC6KGM44Gj44Gm44KL576O5a656Zmi44Gn44KC44GK44K544K544Oh44GX44Gm44Gm44CB6LO85YWl44GX44Gm44G%2F44G%2B44GX44Gf4p2k77iP77u%2FPGJyPg0K77u%2FPGJyPg0K77u%2FPGJyPg0K44Kr44Op44O844Gv5qiZ5rqW6Imy44GuT0MxMDDjgpLpgbjjgbPjgb7jgZfjgZ%2FjgILvu788YnI%2BDQrvu788YnI%2BDQrlsJHjgZfmv4PjgYTjgYvjgarjgajmhJ%2FjgZjjgb7jgZfjgZ%2FjgYzjgIHlrp%2FpmpvjgavogozjgavkuZfjgZvjgovjgajopovjgZ%2Fnm67jgojjgormmI7jgovjgY%2FjgabkuIHluqboia%2FjgYvjgaPjgZ%2FjgafjgZnwn5GN77u%2FPGJyPg0K77u%2FPGJyPg0K77u%2FPGJyPg0K44OV44Kh44Oz44OH44O844K344On44Oz44Gj44Gm6YeN44Gf44GE5oSf44GY44GM44GX44Gm44GC44KT44G%2B44KK5aW944GN44GY44KD44Gq44GE44KT44Gg44GR44Gp44CB44GT44KM44Gv5L2%2F55So5oSf44KC5LuV5LiK44GM44KK44KC6Lu944GP44Gm5rCX44Gr5YWl44KK44G%2B44GX44Gf8J%2BSle%2B7vzxicj4NCu%2B7vzxicj4NCuiWhOOBpeOBjeOBoOOBkeOBqeOAgeOBguOCi%2Beoi%2BW6puOBruOCq%2BODkOODvOWKm%2BOCguOBguOCiuOBvuOBmfCfmIrvu788YnI%2BDQrvu788YnI%2BDQrvu788YnI%2BDQrkuIvlnLDjgpLku5jjgZHjgabjgYvjgonou73jgY%2Fph43jga3jgZ%2FjgpPjgaDjgZHjganjgIHlpJXmlrnjgavjgarjgaPjgabjgoLltKnjgoznn6XjgonjgZrwn42A77u%2FPGJyPg0K5YyW57Kn55u044GX44KC5LiN5b%2BF6KaB44Gq44GP44KJ44GE44Gn44GX44Gf4oC877iP77u%2FPGJyPg0K77u%2FPGJyPg0K77u%2FPGJyPg0K44GE44G%2B44Gv5LuY5bGe44Gu44OR44OV44KS5L2%2F44Gj44Gm44GE44KL44Gu44Gn44GZ44GM44CB44OW44Op44K344Gn44Gk44GR44KL44Go44KI44KK5LiA5bGk44Kt44Os44Kk44Gr5LuV5LiK44GM44KL44G%2F44Gf44GE4pyo4pyo77u%2FPGJyPg0K77u%2FPGJyPg0K77u%2FPGJyPg0KMjLnqK7poZ7jga7nvo7lrrnmiJDliIbjgYzphY3lkIjjgZXjgozjgabjgYTjgovjga7jgafjgIHnvo7ogozlirnmnpzjgavjgoLmnJ%2FlvoXjgZfjgZ%2FjgYTjg7zwn6Sj77u%2FPGJyPg0K77u%2FPGJyPg0K77u%2FPGJyPg0KI%2BOCu%2BODleOCo%2BODvOODjCPjgrfjg6vjgq%2Fjgqbjgqfjg4Pjg4jjg5Hjgqbjg4Djg7wj44K744OV44Kj44O844OM44K344Or44Kv44Km44Kn44OD44OI44OR44Km44OA44O8I%2BODleOCoeODs%2BODh%2BODvOOCt%2BODp%2BODsyPjg5Hjgqbjg4Djg7zjg5XjgqHjg7Pjg4fjg7zjgrfjg6fjg7Mj44Kz44K544OhI%2BOCs%2BOCueODoeWlveOBjeOBleOCk%2BOBqOe5i%2BOBjOOCiuOBn%2BOBhCPjgrPjgrnjg6Hlpb3jgY0j576O5a655aW944GNPGJyPg0KICAgICAgICA8L3A%2BDQogICAgICAgIDwvZGl2Pg0KICAgICAgICA8L2Rpdj4NCiAgICAgPC9saT4NCg0KICAgICAgIDxsaSBocmVmPSIjaW5zdGEwNiIgY2xhc3M9Im1vZGFsIj4NCiAgICAgICAgPGRpdiBpZD0iaW5zdGEwNiIgY2xhc3M9ImlubmVyIj4NCiAgICAgICAgPGltZyBzcmM9Ii4uLy4uL0NvbnRlbnRzL0ltYWdlc1BrZy9pbnN0YWdyYW0vMjAyMDAxMjdfMTQuanBnIiAvPg0KICAgICAgICA8ZGl2IGNsYXNzPSJ0ZXh0Ij4NCiAgICAgICAgPGgzPjxhIGhyZWY9Imh0dHBzOi8vd3d3Lmluc3RhZ3JhbS5jb20vcG9wb3BvcG9wb3BvcG8xMjMxMjMvIiB0YXJnZXQ9Il9ibGFuayI%2BcG9wb3BvcG9wb3BvcG8xMjMxMjM8L2E%2BPC9oMz4NCiAgICAgICAgPHA%2B4omq44K744K344O844OML%2BOCt%2BODq%2BOCr%2BOCpuOCp%2BODg%2BODiOODkeOCpuODgOODvOKJqzxiciAvPg0K6auY44GZ44GO44KC44Gq44GP44CB5a6J44GZ44GO44KL44GT44Go44KC44Gq44GE44OV44Kh44Oz44OH44O844K344On44Oz44KS5o6i44GX44Gm44GE44KL5pmC44Gr44K744K344O844OM44Gu44OV44Kh44Oz44OH44O844K344On44Oz44Gr5Ye65Lya44GE44G%2B44GX44Gf44CCPGJyIC8%2BDQo8YnIgLz4NCuOCveODkOOCq%2BOCueOBjOODgeODqeODm%2BODqeOBguOCiuOAgeaYlOOBi%2BOCieOBruaCqeOBv%2BOBquOBruOBp%2BOBmeOBjOOBjeOBo%2BOBoeOCiuOCq%2BODkOODvOOBmeOCi%2BS6i%2BOBjOOBp%2BOBjeOBvuOBl%2BOBn%2BOAgjxiciAvPg0KPGJyIC8%2BDQrljprloZfjgormhJ%2FjgYzlh7rjgZrjg4rjg4Hjg6Xjg6njg6vjgarku5XkuIrjgYzjgorjgII8YnIgLz4NCjxiciAvPg0K5LiL5Zyw44KS6JaE44KB44Gr5aGX44KL44Gu44GM44KI44KM44Ga44Gr57a66bqX44Gr5aGX44KM44KL44Od44Kk44Oz44OI44Gn44GZ44CCPGJyIC8%2BDQo8YnIgLz4NCumPoeOCguWkp%2BOBjeOCgeOBp2dvb2QhPGJyIC8%2BDQo8YnIgLz4NCuOBiuOCueOCueODoeODleOCoeODs%2BODh%2BODvOOCt%2BODp%2BODs%2BOBp%2BOBmeOAgjxiciAvPg0KPGJyIC8%2BDQoj44OV44Kh44Oz44OH44O844K344On44OzPGJyIC8%2BDQoj44Gd44Gw44GL44GZPGJyIC8%2BDQoj6IKM44Gu5oKp44G%2FPGJyIC8%2BDQojY29zbWU8YnIgLz4NCiPjgrPjgrnjg6E8YnIgLz4NCiPjgrvjgrfjg7zjg4w8YnIgLz4NCiPjgrfjg6vjgq%2Fjgqbjgqfjg4Pjg4jjg5Hjgqbjg4Djg7w8YnIgLz4NCiAgICAgICAgPC9wPg0KICAgICAgICA8L2Rpdj4NCiAgICAgICAgPC9kaXY%2BDQogICAgIDwvbGk%2BDQoNCiAgICAgICA8bGkgaHJlZj0iI2luc3RhMDciIGNsYXNzPSJtb2RhbCI%2BDQogICAgICAgIDxkaXYgaWQ9Imluc3RhMDciIGNsYXNzPSJpbm5lciI%2BDQogICAgICAgIDxpbWcgc3JjPSIuLi8uLi9Db250ZW50cy9JbWFnZXNQa2cvaW5zdGFncmFtLzIwMjAwMTI3XzI3LmpwZyIgLz4NCiAgICAgICAgPGRpdiBjbGFzcz0idGV4dCI%2BDQogICAgICAgIDxoMz48YSBocmVmPSJodHRwczovL3d3dy5pbnN0YWdyYW0uY29tL21heWFsZXlzLyIgdGFyZ2V0PSJfYmxhbmsiPm1heWFsZXlzPC9hPjwvaDM%2BDQogICAgICAgIDxwPuKJqiPjg5XjgqHjg7Pjg4fpm6PmsJHljZLmpa0g44Gu5LqI5oSf44CC4omrPGJyIC8%2BDQogICAgICAgIOWto%2BevgOOBjOWkieOCj%2BOCi%2BOBqOiCjOOBq%2BWQiOOBhuWMlueyp%2BWTgeOCguWkieOCj%2BOCizxiciAvPg0K44CCPGJyIC8%2BDQoj44K744OV44Kj44O844OM44K344Or44Kv44Km44Kn44OD44OI44OR44Km44OA44O8PGJyIC8%2BDQrltKnjgozjgarjgYTjg5XjgqHjg7Pjg4fjgpLmjqLjgZfjgabml6nkvZXlubQ8YnIgLz4NCuOBhOOBhOOBqOaAneOBhuODleOCoeODs%2BODh%2BOBr%2BOBneOCjOOBquOCiuOBq%2BOBguOBo%2BOBn%2BOBl%2BOAgeawl%2BOBq%2BWFpeOBo%2BOBpuOBn%2BOCguOBruOCguOBguOBo%2BOBn%2BOBkeOBqeOAgeOBk%2BOCjOOBr%2BS7iuOBvuOBp%2BOBqOmBleOBhuOAgjxiciAvPg0K44CCPGJyIC8%2BDQrjgbvjgpPjgaPjgajoloTjgaXjgY3jgafjgIHjgarjgYrjgYvjgaTjgqvjg5Djg7zlipvjgoLjgZ3jgozjgarjgorjgavjgYLjgaPjgabjgIHlsJHjgZfjgafntrrpupfjgavopovjgYjjgovjgII8YnIgLz4NCuW0qeOCjOOBquOBhOOCj%2BOBkeOBp%2BOBr%2BOBquOBhOOBkeOBqeOAgeW0qeOCjOaWueOBjOe2uum6l%2BOAgjxiciAvPg0K44Gg44GL44KJ44GK55u044GX44KC5qW944CCPGJyIC8%2BDQrjgaDjgZHjganjgIHku5jlsZ7jga7jg5Hjg5Xjga%2FnoazjgZnjgY7jgovjgYvjgonjg4njg6njg4PjgrDjgrnjg4jjgqLjga7msqLlsbHlhaXjgaPjgabjgovjg5Hjg5XjgpLkvb%2FjgaPjgabjgovjgILjgZ3jgozjgaflhYXliIbvvIE8YnIgLz4NCuOCteODvOODg%2BOBqOaSq%2BOBp%2BOCi%2BOBoOOBkeOBp%2Be2uum6l%2BOBq%2BOBquOCi%2BKZoTxiciAvPg0K44CCPGJyIC8%2BDQrjgajjgobjg7zjgZPjgajjgafjg6rjg5Q8YnIgLz4NCua4oei%2BuuebtOe%2BjuaEm%2BOBleOCk%2BeUqOWTgeOAguOBiuelreOCiuOBp%2BOCguW0qeOCjOOBq%2BOBj%2BOBj%2BOAgeODm%2BODs%2BODiOOBk%2BOCjOmbouOBm%2BOBquOBhOOAguOChOOBo%2BOBseOCiuODqeOCpOODs%2BS9v%2BOBhOOBjOOBhOOBhOOBi%2BOCieS4i%2BWcsOOCguiyt%2BOBo%2BOBpuOBv%2BOBn%2BOBkeOBqeiJr%2BOBjeOAguOBn%2BOBoOOAgeWfuuekjuWMlueyp%2BWTgeOBruOCr%2BODquODvOODoOOBqOOBruebuOaAp%2BOBr%2BmBuOOBsOOBquOBhOOBqOOCreODrOOCpOOBq%2BOBruOCieOBquOBhOKApuimgeazqOaEj%2BeCuSEhPGJyIC8%2BDQrjgII8YnIgLz4NCuOChOOBo%2BOBseOCiuWOmuWhl%2BOCiuOCq%2BODkOODvOOCiOOCiuiHqueEtuOBquiCjOaEn%2BOBjOWkp%2BWIh%2BKZoeats%2BOCkumHjeOBreOCi%2BOBlOOBqOOBq%2BODiuODgeODpeODqeODq%2BOBp%2BOBhOOBpuOAgee2uum6l%2BOAguOBneOCk%2BOBquiCjOOBq%2BOBquOCiuOBn%2BOBhOOBqOaAneOBhuOCiOOBhuOBq%2BOBquOBo%2BOBn%2BOBi%2BOCieOCueOCreODs%2BOCseOCouOBruWkp%2BWIh%2BOBleOCkuOCiOOCiuaEn%2BOBmOOCi%2BOCiOOBhuOBq%2BOBquOBo%2BOBn%2BOAgjxiciAvPg0K44CCPGJyIC8%2BDQroibLjgIXjgYzjgpPjgbDjgo3jgYbjgII8YnIgLz4NCuOAgjxiciAvPg0KI%2Be%2Bjua0uyPjg5XjgqHjg7Pjg4fpm6PmsJHntYLkuoYj44Gu5LqI5a6aPGJyIC8%2BDQrjgYLjgajkuIDpgLHplpPlvozjga8j576O5rS75b%2BY5bm05LyaPGJyIC8%2BDQrmpb3jgZfjgb%2FjgZnjgY7jgovimaHjgqTjg7Pjgrnjgr%2Fjga7lh7rkvJrjgYTjgavmhJ%2ForJ3imaHjgb7jgaDjgb7jgaDjgaDjgZHjgannvo7jgpLov73msYLjgZnjgovjga7jga%2Fmpb3jgZfjgYTimaHjgZ3jga7liY3jgavnl6njgZvjgb7jgZnjgILjgajjgorjgYLjgYjjgZrlhYPjga7kvZPph43jgavmiLvjgZfjgZ%2FjgYTjgILnl6njgZvjgZnjgY7jgZrjgIHjgbXjgo%2FjgaPjgajjgZfjgZ%2FkvZPjgavjgarjgorjgZ%2FjgYTjgILjgZ3jgpPjgarnkIbmg7Pjga7kurrjgIJMaWx544GV44KT44Gr5Lya44GI44KL4pmh5qW944GX44G%2F4pmhPGJyIC8%2BDQogICAgICAgIDwvcD4NCiAgICAgICAgPC9kaXY%2BDQogICAgICAgIDwvZGl2Pg0KICAgICA8L2xpPg0KDQogICAgICAgPGxpIGhyZWY9IiNpbnN0YTA4IiBjbGFzcz0ibW9kYWwiPg0KICAgICAgICA8ZGl2IGlkPSJpbnN0YTA4IiBjbGFzcz0iaW5uZXIiPg0KICAgICAgICA8aW1nIHNyYz0iLi4vLi4vQ29udGVudHMvSW1hZ2VzUGtnL2luc3RhZ3JhbS8yMDIwMDEyN18yOS5qcGciIC8%2BDQogICAgICAgIDxkaXYgY2xhc3M9InRleHQiPg0KICAgICAgICA8aDM%2BPGEgaHJlZj0iaHR0cHM6Ly93d3cuaW5zdGFncmFtLmNvbS9va2FtZS5tb25leS8iIHRhcmdldD0iX2JsYW5rIj5va2FtZS5tb25leTwvYT48L2gzPg0KICAgICAgICA8cD7iiarjg5XjgqHjg7Pjg4fjg7zjgrfjg6fjg7PjgpLmlrDoqr%2FjgZfjgb7jgZfjgZ%2Fil4si4omrPGJyIC8%2BDQogICAgICAgIC48YnIgLz4NCiPjgrvjg5XjgqPjg7zjg4zjgrfjg6vjgq%2Fjgqbjgqfjg4Pjg4jjg5Hjgqbjg4Djg7wg8J%2BZhuKAjeKZgO%2B4j%2FCfkpU8YnIgLz4NCi48YnIgLz4NCuOCpOODs%2BOCueOCv%2BOBp%2BOCgue0ueS7i%2BOBleOCjOOBpuOCi%2BaWueOBjOWkmuOBhOOBruOBp%2Bawl%2BOBq%2BOBquOBo%2BOBpuOBvuOBl%2BOBn%2FCfmI08YnIgLz4NCi48YnIgLz4NCuODjeODg%2BODiOOBp%2BizvOWFpeOBl%2BOBn%2BOBkeOBqeOAgeWPo%2BOCs%2BODn%2BOCkuiqreOBv%2Ba8geOBo%2BOBpuaomea6luiJsuOBp%2BOCguaYjuOCi%2BOCgeOBqOOBruODrOODk%2BODpeODvOOBjOWkmuOBj%2BOBpjxiciAvPg0K6IKM44Gv57WQ5qeL55m944GE5pa5KOOCteODs%2BODl%2BODq%2BWTgeOBquOBqeOBruaomea6luiJsuOBjOippuOBm%2BOBquOBhCnjgafjgZnjgYzjgZPjgaHjgonjga%2FmqJnmupboibLjgafvvIHvvIHinKg8YnIgLz4NCumBleWSjOaEn%2BOBquOBi%2BOBo%2BOBn%2BOBp%2BOBmfCfmI08YnIgLz4NCuOBquOBruOBp%2BODjeODg%2BODiOOBp%2Biyt%2BOBhuWgtOWQiOOBr%2BOBhOOBpOOCguOCiOOCiuaal%2BOCgeOBi%2BOBqu%2B8n%2BOBqOaAneOBhuOCq%2BODqeODvOOBp%2BS4geW6puOBhOOBhOOBi%2BOCguOBp%2BOBmfCfpJQ8YnIgLz4NCi48YnIgLz4NCuiCneW%2Fg%2BOBruS7mOOBkeW%2Fg%2BWcsOOBr%2BOAgeWhl%2BOBo%2BOBpuOBvuOBmeaEn%2BOBjOOBquOBj%2BiHqueEtuOBquaEn%2BOBmOKcqDxiciAvPg0K44Kr44OQ44O85Yqb44Gv5q%2Bb56m044Gq44Gp44Gv44GL44Gq44KK44GE44GE5oSf44GY8J%2BYjTxiciAvPg0K44K344Of44Gd44Gw44GL44GZ44GM44Gn44GN44KE44GZ44GE5L2T6LOq44Gn44CB44Kz44Oz44OX44Os44OD44Kv44K544Gn44KC44GC44KL44Gu44Gn44GZ44GM44GV44GZ44GM44Gr5a6M55Kn44Gr44Kr44OQ44O844Gv5Ye65p2l44Gq44GL44Gj44Gf8J%2Bko%2BS4i%2BWcsOOCguOCq%2BODkOODvOWKm%2BOBruOBguOCi%2BOCguOBruOBq%2BOBl%2BOBn%2BOCiuOCs%2BODs%2BOCt%2BODvOODqeODvOOCguS9v%2BOBhuOBqOOBsOOBo%2BOBoeOCiuOBoOOBqOaAneOBhOOBvuOBmfCfkYw8YnIgLz4NCuOBqOOBq%2BOBi%2BOBj%2BWOmuWhl%2BOCiuaEn%2BOBquOBj%2Be2uum6l%2BOBquiCjOOBq%2Bimi%2BOBm%2BOBn%2BOBhOaWueOBq%2BOBr%2BOBiuOBmeOBmeOCgeOBp%2BOBmfCfpKQ8YnIgLz4NCi48YnIgLz4NCi48YnIgLz4NCuOBk%2BOCjOOBi%2BOCieOBruWto%2BevgOODkeOCpuODgOODvOODleOCoeODs%2BODh%2BOBr%2BS5vueHpeOBl%2BOBjOOBoeOBoOOBkeOBqeOAgeOBk%2BOBoeOCieOBr%2BS7iuOBruOBqOOBk%2BOCjeawl%2BOBq%2BOBquOCieOBquOBhOKcqOe2mee2muOBl%2BOBpuS9v%2BOBo%2BOBpuOBv%2BOBvuOBmeKcqDxiciAvPg0KLjxiciAvPg0KLjxiciAvPg0KLjxiciAvPg0KI%2BODkeOCpuODgOODvOODleOCoeODs%2BODhzxiciAvPg0KI%2BWls%2BWtkOWKm%2BWQkeS4iuWnlOWToeS8mjxiciAvPg0KI%2BOCu%2BODleOCo%2BODvOODjDxiciAvPg0KI%2BOCt%2BODq%2BOCr%2BOCpuOCp%2BODg%2BODiOODkeOCpuODgOODvDxiciAvPg0KI%2BOBhOOBhOOBrei%2FlOOBlzxiciAvPg0KI%2BODoeOCpOOCrzxiciAvPg0KI%2BOCs%2BOCueODoeizvOWFpeWTgTxiciAvPg0KICAgICAgICA8L3A%2BDQogICAgICAgIDwvZGl2Pg0KICAgICAgICA8L2Rpdj4NCiAgICAgPC9saT4NCg0KICAgIDwvdWw%2BDQo8L2Rpdj4NCjwvc2VjdGlvbj4NCg0KICA8c2VjdGlvbiBjbGFzcz0icHJvZHVjdCIgZGF0YS1hb3M9ImZhZGUtdXAiPg0KICAgICAgPGgyIGNsYXNzPSJwcm9kdWN0X190dGwiPg0KICAgICAgICAgIOaWsOOBl%2BOBhOiCjOOCkuOBvuOBqOOBo%2BOBn%2BOCiOOBhuOBqzxicj4NCiAgICAgICAgICDoh6rnhLbjgarnvo7jgZfjgZXjgYzjgIHjgZrjgaPjgajntprjgY3jgb7jgZnjgIINCiAgICAgIDwvaDI%2BDQogICAgICA8ZGl2IGNsYXNzPSJwcm9kdWN0X19pbm5lciI%2BDQogICAgICAgICAgPGltZyBzcmM9Ii4uLy4uL1BhZ2UvTFAvTWFrZS9zaWxrd2V0cG93ZGVyLWNhc2UtbGltaXRlZC8yMWF3L2ltZy9EXy5wbmciIGFsdD0iIiBjbGFzcz0icHJvZHVjdF9faW1nIj4NCiAgICAgICAgICA8ZGl2IGNsYXNzPSJwcm9kdWN0X19kZXRhaWwiPg0KICAgICAgICAgICAgICA8ZGl2IGNsYXNzPSJwcm9kdWN0X19kZXRhaWwtdHRsIj4NCiAgICAgICAgICAgICAgICAgIOa4oei%2BuuebtOe%2BjumZkOWumuOCseODvOOCue%2B8izxicj7jgrfjg6vjgq%2Fjgqbjgqfjg4Pjg4jjg5Hjgqbjg4Djg7zjgrvjg4Pjg4gNCiAgICAgICAgICAgICAgPC9kaXY%2BDQogICAgICAgICAgICAgIDxwIGNsYXNzPSJwcm9kdWN0X19kZXRhaWwtc3VidHRsIj4NCiAgICAgICAgICAgICAgICAgIDzjg5Hjgqbjg4Djg7zjg5XjgqHjg7Pjg4fjg7zjgrfjg6fjg7PvvIvpmZDlrprjg4fjgrbjgqTjg7PjgrHjg7zjgrnjgrvjg4Pjg4g%2BDQogICAgICAgICAgICAgIDwvcD4NCiAgICAgICAgICAgICAgPHVsIGNsYXNzPSJwcm9kdWN0X19saXN0Ij4NCiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz0icHJvZHVjdF9fbGlzdC1pdGVtIj7kv53mub88L2xpPg0KICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPSJwcm9kdWN0X19saXN0LWl0ZW0iPuavm%2BeptOOCseOCojwvbGk%2BDQogICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9InByb2R1Y3RfX2xpc3QtaXRlbSB5aCI%2B44Ko44Kk44K444Oz44Kw44Kx44KiPC9saT4NCiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz0icHJvZHVjdF9fbGlzdC1pdGVtIj7jgrfjg6vjgq3jg7zjgarku5XkuIrjgYzjgoo8L2xpPg0KICAgICAgICAgICAgICAgICAgPGxpIGNsYXNzPSJwcm9kdWN0X19saXN0LWl0ZW0iPuOCq%2BODkOODvOWKmzwvbGk%2BDQogICAgICAgICAgICAgICAgICA8bGkgY2xhc3M9InByb2R1Y3RfX2xpc3QtaXRlbSI%2B44Kt44O844OX5YqbPC9saT4NCiAgICAgICAgICAgICAgICAgIDxsaSBjbGFzcz0icHJvZHVjdF9fbGlzdC1pdGVtIj5TUEYzMCAvIFBBKysrPC9saT4NCiAgICAgICAgICAgICAgPC91bD4NCiAgICAgICAgICAgICAgPHAgY2xhc3M9InByb2R1Y3RfX3ByaWNlIj7vv6U0LDQwMO%2B8iOeojui%2BvO%2B8iTwvcD4NCiAgICAgICAgICA8L2Rpdj4NCiAgICAgIDwvZGl2Pg0KICAgICAgPGRpdiBjbGFzcz0icHJvZHVjdF9fYnRuIj4NCiAgICAgICAgICA8YSBocmVmPSIiPuOBlOizvOWFpeOBr%2BOBk%2BOBoeOCiTwvYT4NCiAgICAgIDwvZGl2Pg0KICA8L3NlY3Rpb24%2BIDwhLS0gUFJPRFVDVCBTRUNUSU9OIEVORCAtLT4NCjwvZGl2Pg0KPHNjcmlwdD4NCiAgICBBT1MuaW5pdCh7DQogICAgICAgIGR1cmF0aW9uOiAyNTAwLA0KICAgICAgICBlYXNpbmc6ICdlYXNlJywNCiAgICAgICAgb25jZTogdHJ1ZQ0KICAgIH0pOw0KPC9zY3JpcHQ%2BZAIcDw8WFB4xY3RsMDAkQ29udGVudFBsYWNlSG9sZGVyMSRjdGw1Ny0%2BdGJOaWNrTmFtZS5WYWx1ZWUeNmN0bDAwJENvbnRlbnRQbGFjZUhvbGRlcjEkY3RsNTctPmRkbFJldmlld1JhdGluZy5WYWx1ZWUeO2N0bDAwJENvbnRlbnRQbGFjZUhvbGRlcjEkY3RsNTctPmR2UHJvZHVjdFJldmlld0lucHV0LlZhbHVlZR8uBRIyMDAyMTAyMDMxMjAwMDAwMDAfEgUBMB4%2BY3RsMDAkQ29udGVudFBsYWNlSG9sZGVyMSRjdGw1Ny0%2BZHZQcm9kdWN0UmV2aWV3Q29tcGxldGUuVmFsdWVlHj1jdGwwMCRDb250ZW50UGxhY2VIb2xkZXIxJGN0bDU3LT5kdlByb2R1Y3RSZXZpZXdDb25maXJtLlZhbHVlZR4%2BY3RsMDAkQ29udGVudFBsYWNlSG9sZGVyMSRjdGw1Ny0%2BZHZQcm9kdWN0UmV2aWV3Q29tbWVudHMuVmFsdWVlHwIFSOa4oei%2BuuebtOe%2BjumZkOWumuOCseODvOOCue%2B8i%2BOCt%2BODq%2BOCr%2BOCpuOCp%2BODg%2BODiOODkeOCpuODgOODvOOCu%2BODg%2BODiB40Y3RsMDAkQ29udGVudFBsYWNlSG9sZGVyMSRjdGw1Ny0%2BdGJSZXZpZXdUaXRsZS5WYWx1ZWVkFgJmD2QWAmYPZBYKAgEPFgIfOmgWBGYPFgIfOwL%2F%2F%2F%2F%2FD2QCAQ8PFgIfOmhkZAIDDxYCHzpoFgZmDw9kFgIeCm9ua2V5cHJlc3MFJ2lmIChldmVudC5rZXlDb2RlPT0xMyl7IHJldHVybiBmYWxzZTsgfWQCAg8QDxYCHz5nZA8WBWYCAQICAgMCBBYFEAUD4piFBQExZxAFBuKYheKYhQUBMmcQBQnimIXimIXimIUFATNnEAUM4piF4piF4piF4piFBQE0ZxAFD%2BKYheKYheKYheKYheKYhQUBNWcWAWZkAgQPD2QWAh9KBSdpZiAoZXZlbnQua2V5Q29kZT09MTMpeyByZXR1cm4gZmFsc2U7IH1kAgUPFgIfOmhkAgcPFgIfOmhkAgkPDxYCHzpnZGQCAw8WBB87Zh86aGQCBA8WBB87Zh86aGQCBQ8PFgIeNmN0bDAwJENvbnRlbnRQbGFjZUhvbGRlcjEkY3RsMDMtPnJQcm9kdWN0SGlzdG9yeS5WYWx1ZWVkFgJmDxYCHzsCAhYGZg9kFgJmDxUBBUZhbHNlZAIBD2QWAgIBD2QWDmYPFQFOL0Zvcm0vUHJvZHVjdC9Qcm9kdWN0RGV0YWlsLmFzcHg%2Fc2hvcD0wJmFtcDtwaWQ9MjAwMjEwMjAzMTIwMDAwMDAwJmFtcDtjYXQ9MjAwZAIBDw8WAh88BUEvQ29udGVudHMvUHJvZHVjdEltYWdlcy8wL3cyLWltZyUyZm1ha2V1cCUyZmxpbWl0ZWQyMWNhc2Vfc19NLmpwZ2RkAgIPFQEh5rih6L6655u0576O6ZmQ5a6a44Kx44O844K577yLLi4uZAIDDxYCHzpoFgJmDxUCCyYjMTY1OzUsNTAwAGQCBQ8WAh86aBYCZg8VAgsmIzE2NTs1LDUwMABkAgcPZBYCZg8VAgsmIzE2NTs1LDUwMAsmIzE2NTs0LDQwMGQCCQ8WAh86aBYCZg8VAQsmIzE2NTs1LDUwMGQCAg9kFgICAQ9kFg5mDxUBTi9Gb3JtL1Byb2R1Y3QvUHJvZHVjdERldGFpbC5hc3B4P3Nob3A9MCZhbXA7cGlkPTIwMDIxMDE2ODEzODAwMDAwMCZhbXA7Y2F0PTIwMGQCAQ8PFgIfPAU2L0NvbnRlbnRzL1Byb2R1Y3RJbWFnZXMvMC93Mi1pbWclMmZtYWtldXAlMmZtdnV2X00uanBnZGQCAg8VASHjg6LjgqTjgrnjg4Hjg6XjgqLjg7Tjgqfjg7zjg6suLi5kAgMPFgIfOmgWAmYPFQILJiMxNjU7MywzMDAAZAIFDxYCHzpoFgJmDxUCCyYjMTY1OzMsMzAwAGQCBw8WAh86aBYCZg8VAgsmIzE2NTszLDMwMABkAgkPZBYCZg8VAQsmIzE2NTszLDMwMGQCBg8VATRjdGwwMF9Db250ZW50UGxhY2VIb2xkZXIxX2hJc1NlbGVjdGluZ1ZhcmlhdGlvbkV4aXN0ZAIHDxUBLGN0bDAwX0NvbnRlbnRQbGFjZUhvbGRlcjFfZGRsVmFyaWF0aW9uU2VsZWN0ZAIIDxUBLGN0bDAwX0NvbnRlbnRQbGFjZUhvbGRlcjFfZGRsVmFyaWF0aW9uU2VsZWN0ZAIJDxUCLWN0bDAwX0NvbnRlbnRQbGFjZUhvbGRlcjFfZGRsVmFyaWF0aW9uU2VsZWN0MS1jdGwwMF9Db250ZW50UGxhY2VIb2xkZXIxX2RkbFZhcmlhdGlvblNlbGVjdDJkAgoPFQUSMjAwMjEwMjAzMTIwMDAwMDAwEjIwMDIxMDIwMzEyMDAwMDAwMBIyMDAyMTAyMDMxMjAwMDAwMDBI5rih6L6655u0576O6ZmQ5a6a44Kx44O844K577yL44K344Or44Kv44Km44Kn44OD44OI44OR44Km44OA44O844K744OD44OIBTUsNTAwZAIED2QWAmYPZBYEZg8WAh86Z2QCAQ8WAh86Z2RkM%2Fm5ckTdcRxySZ35PEGwxZ7MHi4KhypEgR0kCdYZ1pA%3D&__VIEWSTATEGENERATOR=1E4D0DCC&__EVENTVALIDATION=%2FwEdAB%2BvUEVL5xn%2FoebSdMTshgeJJ85AwcawoJZUJxx8UwuklnnvFGiU%2Bsyp5mGAttmT3DmwDzk0rnMj33pt5H%2FFSktJV7e7I3BUESdri77u5Bx%2Bp%2FR56SK%2FQQRrosog%2Fr%2BqPjzzvdrb4fBpbwMUeo1iVlzBcKj8nQbL3R5LVy%2F%2Fj3rp%2Ba6chRNVKNBLbwMq6Jk3tYXyBY%2FW2ZFKyJft0CA5ZYm9FZeHu0wu%2BdShmd07CS%2F2QD4BHmLtwSC6Jhjy9V8KFNAdjhgiX0ZmDKV%2FnAcAr37s9uqTkNxulg%2B%2BZx3lFPo8AakiQRb3B1w8lXmdC0qav4LfS6KNaEKvU1vunni35RGbax44WHW4XODTY5Dbv6sBpET9VniVSd9X5wD2kLvdwP1utjOPT0NcOkK%2BMperZ4vDsBK3nb0dcYvjxYaKo5FSaN5FF5kiWSINPYa%2BGTTFs%2BPZbnjRZ6n8vdwpv5QgUaYgRqlryuroozjRagEzUW28WZp8hK1fnkoHdkLyjn%2FZJCrt4ELXPXckUWkv%2Bc0eXU2%2BVtYoaoOf8bkkUcf12McrcTeCcBu%2B5KOAt%2ByINWyeRoZHGiswWakhxeAsyjrV1tKCbNqMPNytHwUJSLwV%2FcNm%2BKeFbNg97W4PEZxoPkdHmoM4Ez%2BCItFNL0kflOUliSFLXuw1IiVl5NlCqitNLzqdAnzG5JDdFrgwSDGJZ5JIFfA%3D&__ASYNCPOST=true&'

var url = 'Request URL: https://cefinecosmetics.co.jp/Form/Product/ProductDetail.aspx?shop=0&pid=200210203120000000' 

var xhr = new XMLHttpRequest();
xhr.open("POST", url, true);
xhr.setRequestHeader("X-Requested-With", "XMLHttpRequest");
xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
xhr.setRequestHeader("X-MicrosoftAjax", "Delta=true");
xhr.setRequestHeader("Cache-Control", "no-cache");
xhr.onerror = function () {
    
}
xhr.onload = function () {

    if (xhr.readyState == 4 && xhr.status == 200) {
       
    }
}
xhr.send(param);



AWIN.Tracking.Sale.currency

function getNowDateTime(){
        var d_Now　=　new Date();
        var d_Year = d_Now.getYear();
        var d_Mon = d_Now.getMonth() + 1;
        var d_Day = d_Now.getDate();
        var d_Hour = d_Now.getHours();
        var d_Min = d_Now.getMinutes();
        var d_Sec = d_Now.getMilliseconds();
        
        if(d_Mon < 10){
            d_Mon = "0"+d_Mon;
        }
        if(d_Hour < 10){
            d_Hour = "0"+d_Hour;
        }
        if(d_Day < 10){
            d_Day = "0"+d_Day;
        }
        if(d_Min < 10){
            d_Min = "0"+d_Min;
        }
        if(d_Sec < 10){
            d_Sec = "0"+d_Sec;
        }
        // yyyymmddhhddsss形式の文字列を作成
        var nowdatetime = ""+d_Year+d_Mon+d_Day+d_Hour+d_Min+d_Sec;
        return nowdatetime;
    }

//cocodecow
//Accept: text/javascript, text/html, application/xml, text/xml, */*
var nowdatetime = getNowDateTime();


var nowdatetime = getNowDateTime();
//https://www.cocodecow.com/coco/ajaxrequest/?DateTime=12211081519903&cd=CV2961&cnt=1&Mode=5&cntundefined=false
var a = new Ajax.Request(
"/coco/ajaxrequest/",   
{
"method": "get",
"parameters": "DateTime="+nowdatetime+"&Mode=1&OpenFolderName=&cd=945553&OpenFolderFlg=&cntundefined=false",   
onSuccess: function(request) {
},
onComplete: function(request) {
},
onFailure: function(request) {
},
onException: function (request) {
}
}
);  

}
var nowdatetime = getNowDateTime();

//forest
var nowdatetime = getNowDateTime();
var url = 'https://www.forest.co.jp/Forestway/ajaxrequest/?DateTime='+nowdatetime+'&cd=159800&cnt=1&memo=&Mode=5&cntundefined=false' 

var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.setRequestHeader("Accept", "text/javascript, text/html, application/xml, text/xml, */*");
xhr.onerror = function () {
    
}
xhr.onload = function () {

    if (xhr.readyState == 4 && xhr.status == 200) {
       
    }
}
xhr.send();


var url = 'Request URL: https://maps.googleapis.com/maps/api/js?key=AIzaSyDPf1Mveb0wOF-V_6wADqXJnEPkSp6ymck&channel=cps-desktop&v=quarterly&region=GB'

var xhr = new XMLHttpRequest();
xhr.open("GET", url, true);
xhr.setRequestHeader("Accept", "text/javascript, text/html, application/xml, text/xml, */*");
xhr.onerror = function () {
    
}
xhr.onload = function () {

    if (xhr.readyState == 4 && xhr.status == 200) {
       
    }
}
xhr.send();

//var f = e.init("/m/{merchant_id}/l/{locale}/product/{page_id}/reviews", d, i()({



var f = e.init("/m/{merchant_id}/l/{locale}/product/{page_id}/reviews", d, i()({


 https://display.powerreviews.com/m/8192/l/en_US/product/7132613P/reviews?apikey=4f609daa-0f5e-4005-8225-44c637d5e424&_noconfig=true
Request Method: GET




function fopen(sfopenName, sfopenFlg) {  
fopen2(sfopenName, '', sfopenFlg);
}
function fopen2(sfopenName, sCode, sfopenFlg) {  

//https://www.forest.co.jp/Forestway/ajaxrequest/?DateTime=12212141102222&cd=J847MK&cnt=1&memo=&Mode=5&cntundefined=false

        var nowdatetime = getNowDateTime();
 
var a = new Ajax.Request(   
  "/Forestway/ajaxrequest/",   
  {   
  "method": "get",   
  "parameters": "DateTime="+nowdatetime+"&Mode=1&OpenFolderName="+sfopenName+"&cd="+sCode+"&OpenFolderFlg="+sfopenFlg,   
  onSuccess: function(request) {     
  },   
  onComplete: function(request) {   
  },   
  onFailure: function(request) {     
  },   
  onException: function (request) {   
  }   
  }   
  );  
 
}


//Bosch



var url = 'https://eshop-int.bosch-professional.com/gb/en/api/integration/cart-items'

var param='{"entryNumber":"1","assortmentType":"tools","quantity":"1","productSku":"06188000DX","productName":"GHJ 12+18V XA S","price":"196.02","productId":"52482","ean":"4059952580555","stockIndicator":"AVAILABLE"}'

    fetch(url, {
        method: "POST",
        cache: "default",
        headers: {
            "Content-Type": "application/json"
          },
          credentials: "include",
        
        body: param,
    })
    .then(function(response){ 
        return response.json();
    })
    .then(function(data){ 
        
    });






// cps




var searchParamObj = {
    "operationName": "BasketItemsAddEcom",
    "variables": {
        "branchId":"6447",
        "input": {},
        "postCode":"SW17 0HJ",
        "withCollectionAvailability":true,
        "withContracts":true,
        "withDeliveryAvailability":true,
        "withoutJobLists":true,
        "withoutPrices":true,
    },
    "query":"mutation BasketItemsAddEcom($input: BasketItemsAddInput!, $postCode: PostCode!, $branchId: ID!, $contractId: ID, $withoutPrices: Boolean!, $withContracts: Boolean!, $withDeliveryAvailability: Boolean!, $withCollectionAvailability: Boolean!, $withoutJobLists: Boolean!) {\n  basketItemsAdd(input: $input) {\n    basket {\n      ...BasketFields\n      __typename\n    }\n    __typename\n  }\n}\n\nfragment PromotionsFields on Promotion {\n  badge\n  endDate\n  id\n  message\n  __typename\n}\n\nfragment PurchaseTotalFields on PurchaseTotal {\n  deliveryCharge {\n    ...PriceValueFields\n    __typename\n  }\n  productsTotal {\n    ...PriceValueFields\n    __typename\n  }\n  productsWasTotal {\n    ...PriceValueFields\n    __typename\n  }\n  promotionalSavings {\n    ...PriceValueFields\n    __typename\n  }\n  total {\n    ...PriceValueFields\n    __typename\n  }\n  tradeSaving {\n    ...PriceValueFields\n    __typename\n  }\n  __typename\n}\n\nfragment PriceValueFields on PriceValue {\n  valueExVat\n  valueIncVat\n  vatAmount\n  __typename\n}\n\nfragment TACFields on TradeAuthorisationCard {\n  id\n  dailyLimit {\n    ...TACLimitFields\n    __typename\n  }\n  monthlyLimit {\n    ...TACLimitFields\n    __typename\n  }\n  monthlyLimit {\n    ...TACLimitFields\n    __typename\n  }\n  number\n  status\n  transactionLimit\n  weeklyLimit {\n    ...TACLimitFields\n    __typename\n  }\n  __typename\n}\n\nfragment TACLimitFields on TradeAuthorisationCardLimit {\n  availableAmount\n  limit\n  __typename\n}\n\nfragment BasketCollectionFulfilmentPreferenceFields on BasketCollectionFulfilmentPreference {\n  collectionBranch {\n    ...BranchBasketFields\n    __typename\n  }\n  id\n  items {\n    ...CollectionBasketItemFields\n    __typename\n  }\n  __typename\n}\n\nfragment AddressFields on Address {\n  city\n  line1\n  line2\n  line3\n  postCode\n  __typename\n}\n\nfragment BranchBasketFields on Branch {\n  address {\n    ...AddressFields\n    __typename\n  }\n  id\n  name\n  __typename\n}\n\nfragment CollectionBasketItemFields on CollectionBasketItem {\n  id\n  appliedPromotions {\n    id\n    message\n    __typename\n  }\n  availability {\n    cutOffDateTime\n    estimatedDateTime\n    limitedStockQuantity\n    minimumOrderQuantity\n    status\n    statusReason\n    __typename\n  }\n  deliveryAvailability(postCode: $postCode) @include(if: $withDeliveryAvailability) {\n    cutOffDateTime\n    deliveryType\n    estimatedDateTime\n    limitedStockQuantity\n    minimumOrderQuantity\n    status\n    statusReason\n    supplierLeadTimeDays\n    __typename\n  }\n  price @skip(if: $withoutPrices) {\n    ...PriceValueFields\n    __typename\n  }\n  wasPrice @skip(if: $withoutPrices) {\n    ...PriceValueFields\n    __typename\n  }\n  quantity\n  product {\n    ...BasketBaseProductFields\n    __typename\n  }\n  branch {\n    id\n    __typename\n  }\n  __typename\n}\n\nfragment BasketBaseProductFields on Product {\n  id\n  description\n  images {\n    altText\n    url\n    __typename\n  }\n  productImages {\n    images {\n      altText\n      url\n      dimensions {\n        height\n        width\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  name\n  technicalSpecification {\n    name\n    value\n    __typename\n  }\n  category {\n    id\n    name\n    parentCategoryIds\n    __typename\n  }\n  jobLists(first: 1000) @skip(if: $withoutJobLists) {\n    nodes {\n      ...JobListFields\n      jobListProducts {\n        totalCount\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  ...ProductPriceFields\n  __typename\n}\n\nfragment BasketDeliveryFulfilmentPreferenceFields on BasketDeliveryFulfilmentPreference {\n  availableDeliveryMethods {\n    deliveryCharge {\n      ...PriceValueFields\n      __typename\n    }\n    deliveryDateTime\n    type\n    __typename\n  }\n  availableNominatedDeliveryDayOptions {\n    date\n    dayPeriods\n    __typename\n  }\n  deliveryMethod {\n    deliveryCharge {\n      ...PriceValueFields\n      __typename\n    }\n    deliveryDateTime\n    type\n    freeDeliveryThreshold {\n      ...PriceValueFields\n      __typename\n    }\n    __typename\n  }\n  deliveryPostcode\n  nominatedDeliveryDay {\n    date\n    dayPeriod\n    __typename\n  }\n  id\n  items {\n    ...DeliveryBasketItemFields\n    __typename\n  }\n  __typename\n}\n\nfragment DeliveryBasketItemFields on DeliveryBasketItem {\n  id\n  appliedPromotions {\n    id\n    message\n    __typename\n  }\n  availability {\n    cutOffDateTime\n    deliveryType\n    estimatedDateTime\n    limitedStockQuantity\n    minimumOrderQuantity\n    status\n    statusReason\n    supplierLeadTimeDays\n    __typename\n  }\n  collectionAvailability(branchId: $branchId) @include(if: $withCollectionAvailability) {\n    cutOffDateTime\n    estimatedDateTime\n    limitedStockQuantity\n    minimumOrderQuantity\n    status\n    statusReason\n    __typename\n  }\n  price @skip(if: $withoutPrices) {\n    ...PriceValueFields\n    __typename\n  }\n  wasPrice @skip(if: $withoutPrices) {\n    ...PriceValueFields\n    __typename\n  }\n  quantity\n  product {\n    ...BasketBaseProductFields\n    __typename\n  }\n  postCode\n  __typename\n}\n\nfragment BasketFields on Basket {\n  appliedCoupon {\n    code\n    rejectReasons\n    __typename\n  }\n  appliedContractId @include(if: $withContracts)\n  appliedPromotions {\n    ...PromotionsFields\n    __typename\n  }\n  availablePaymentTypes\n  expirationDateTime\n  id\n  total {\n    ...PurchaseTotalFields\n    __typename\n  }\n  fulfilmentPreferences {\n    ... on BasketCollectionFulfilmentPreference {\n      ...BasketCollectionFulfilmentPreferenceFields\n      __typename\n    }\n    ... on BasketDeliveryFulfilmentPreference {\n      ...BasketDeliveryFulfilmentPreferenceFields\n      __typename\n    }\n    __typename\n  }\n  creditLimits {\n    isDailyLimitExceeded\n    isMonthlyLimitExceeded\n    isTransactionLimitExceeded\n    isWeeklyLimitExceeded\n    tac {\n      ...TACFields\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment ProductPriceFields on Product {\n  productPrice(contractId: $contractId) @skip(if: $withoutPrices) {\n    isContractPrice @include(if: $withContracts)\n    basePrice {\n      valueExVat\n      valueIncVat\n      vatAmount\n      __typename\n    }\n    price {\n      valueExVat\n      valueIncVat\n      vatAmount\n      __typename\n    }\n    promotions {\n      badge\n      endDate\n      id\n      message\n      __typename\n    }\n    quantityBreakPrices {\n      minimalQuantity\n      price {\n        valueExVat\n        valueIncVat\n        vatAmount\n        __typename\n      }\n      promotions {\n        badge\n        endDate\n        id\n        message\n        __typename\n      }\n      __typename\n    }\n    __typename\n  }\n  __typename\n}\n\nfragment JobListFields on JobList {\n  id\n  name\n  __typename\n}\n"
}
var fulfilmentPreferencet={}
fulfilmentPreferencet.collectionBranchId="6447"
fulfilmentPreferencet.deliveryPostcode="SW17 0HJ"
fulfilmentPreferencet.fulfilmentType="DELIVERY"
var itemsd=[]
itemsd.push({
    productId:"961159",
    quantity:1
})
searchParamObj["variables"]["input"].basketId = '6cc4218c-d208-254d-8c7b-0a72bf3675f4'
searchParamObj["variables"]["input"].fulfilmentPreference = fulfilmentPreferencet
searchParamObj["variables"]["input"].items = itemsd

// searchParamObj["variables"]["input"].push({
//     basketId : '6cc4218c-d208-254d-8c7b-0a72bf3675f4',
//     fulfilmentPreference : fulfilmentPreferencet,
//     items:itemsd,
// })

var searchParamObjString = JSON.stringify(searchParamObj);




var xhr = new XMLHttpRequest();
xhr.open('POST', 'https://www.cityplumbing.co.uk/graphql-ecom?op=BasketItemsAddEcom', false);
xhr.onload = function() {}
xhr.setRequestHeader('content-type', 'application/json');
xhr.setRequestHeader('session-token', readCookie('guest_session_token'));
// xhr.setRequestHeader('bruid2', INC.methods.getCookieValue("_br_uid_2"));
xhr.setRequestHeader('accept', '*/*');
xhr.setRequestHeader('x-tp-request-id', '5478c64d-fe63-4dd1-9c6f-a51cae042252');
xhr.setRequestHeader('x-tp-session-id', '26bb5e37-8e8b-45ce-8429-482069cefc79');
xhr.setRequestHeader('x-data-consumer-name', 'CPS-WEB');
xhr.setRequestHeader('x-tp-checkout-new', true);
xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        
    }
}
xhr.send(searchParamObjString);




RO orderId
https://www.avon.ro/checkoutmobile/confirma/26036615/


var pr='storeId=10151&catalogId=10651&langId=-1&orderId=.&partNumberWR=7131259&calculationUsage=-1%2C-2%2C-5%2C-6%2C-7&inventoryValidation=true&pahDoInventory=N&catEntryId=249252&quantity=1&isAddToDelivery=true&requesttype=ajax'
var urls='https://www.petsathome.com/webapp/wcs/stores/servlet/AjaxOrderChangeServiceItemAdd'
var xhr = new XMLHttpRequest();
xhr.open('POST', urls, false);
xhr.onload = function() {}
xhr.setRequestHeader('content-type', 'application/x-www-form-urlencoded');
xhr.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        
    }
}
xhr.send(pr);


//Denby onsite collection discount
193013796	https://l1460339c1tst-store.occa.ocs.oraclecloud.com/cast-iron-cookware/cooking-serving-dish/193013796#fo_c=2183&fo_k=e8ef8698e3fa202c15aca91d7447c0d3&fo_s=gsuruk
193013797	https://l1460339c1tst-store.occa.ocs.oraclecloud.com/cast-iron-cookware/cooking-serving-dish/193013797#fo_c=2183&fo_k=702da56cfcedc5efc8ba6feda580ffcb&fo_s=gsuruk
193013798	https://l1460339c1tst-store.occa.ocs.oraclecloud.com/cast-iron-cookware/cooking-serving-dish/193013798#fo_c=2183&fo_k=6a27759d2f77ee147a46bff5d761bdf6&fo_s=gsuruk
193013800	https://l1460339c1tst-store.occa.ocs.oraclecloud.com/under-100/cooking-serving-dish/193013800#fo_c=2183&fo_k=d32ba0eaece3a62163f547370d2dc5f6&fo_s=gsuruk



I have access to the Denby development site where there are 2 variations of discounts that we can test to see how the discount would work. Please see details below:-
https://l1460339c1tst-store.occa.ocs.oraclecloud.com/
Login:- admin
Password:- admin
Cast Iron Bundle 2 - use code CASTBUNDLE2 to activate. 2 products
193013797
93013800
£100 off
You might also want one without a code just so you can see it working:
Cast Iron Bundle 1 - will trigger automatically when the 3 products are added and you can see the code already applied when you look at your basket
193013796
193013798
193013800
£140 off


//uspa

var url2 = 'https://uspoloassn.com/cart.js'
var xhr2 = new XMLHttpRequest();
xhr2.open('GET', url2, false);
xhr2.onload = function() {}
xhr2.setRequestHeader('accept', '*/*');
xhr2.onreadystatechange = function() {
    if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
        if(xhr2.responseText != ""){
            jQuery(document).trigger("cart.requestComplete", [JSON.parse(xhr2.responseText)])
            CartJS.addItem()
        }
        
    }
}
xhr2.send();