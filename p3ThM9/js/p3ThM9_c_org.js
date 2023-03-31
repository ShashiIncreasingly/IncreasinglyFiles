// var versionUpdate = (new Date()).getTime();
// function addCSSFile() {
//     var cssFilePath = "https://www.increasingly.co/Implementation/p3ThM9/css/main.css?v="+versionUpdate;
//     var linkTag = document.createElement('link');
//     linkTag.rel = "stylesheet";
//     linkTag.href = cssFilePath;
//     linkTag.setAttribute('class','inc_css_col')
//     document.querySelector('head').appendChild(linkTag);
// }
// addCSSFile()

//readCookie('ivid') == "e37a4ce23958c3e203ec5446ef43b9a13dc77b7081"

var INC_COL = (typeof (INC_COL) == "undefined") ? {} : INC_COL;
var IRB_flag=true
INC_COL.ENV = "prod";
INC_COL.debug = 0;
INC_COL.initStatus = "";
INC_COL.initStatusCP = "";
var prefix = "inc_";
var postfix = "_block";
reinitcall_flag=true
pdp_s20productflg=true
irbobservload=true
INC_COL.checkDevUserCookie = function () {
    if (INC_COL.ENV == "prod") {

        setTimeout(function () {
            INC_COL.config.pageType = INC_COL.methods.detectPageType();
            if (INC_COL.debug) console.log(INC_COL.config.pageType);
            pdp_s20productflg=true
            INC_COL.init();
        }, 200);
    }
}



INC_COL.clientConfig = {};
INC_COL.clientConfig.currencySymbol = "";
INC_COL.clientConfig.productPage = {};
INC_COL.clientConfig.flagoos = true;
INC_COL.clientConfig.discPrc = "";
INC_COL.clientConfig.productPage.pdpElementSelector = "";
INC_COL.clientConfig.productPage.amElementSelector = "";
INC_COL.clientConfig.productPage.sbElementSelector = "";
INC_COL.clientConfig.productListPage = {};
INC_COL.clientConfig.productListPage.sbElementSelector = "";
INC_COL.clientConfig.cartPage = {};
INC_COL.clientConfig.cartPage.amElementSelector = "";
INC_COL.clientConfig.statusVAT = "";
INC_COL.clientConfig.regularPricePrefix = "";
INC_COL.clientConfig.checkoutLink = "/shop/Basket/";
INC_COL.clientConfig.loggedInUser = "";
INC_COL.clientConfig.offset = 0;
INC_COL.clientConfig.slidevalue = 0;
INC_COL.config = {};
INC_COL.config.deviceType = "";
INC_COL.config.clientToken = "p3ThM9";
INC_COL.config.trackingURL = "https://optimizedby.increasingly.co/ImportData";
INC_COL.config.addToBasketURL = "https://www.petsathome.com/webapp/wcs/stores/servlet/AjaxOrderChangeServiceItemAdd";
INC_COL.config.affiliateURL = "";
INC_COL.config.crawlDataObj = {};
INC_COL.config.pageType = "";
INC_COL.config.ivid = "";
INC_COL.config.language = "en";
INC_COL.config.clientOverlayInterval = "";
INC_COL.config.conversionPixelFileStatus = "";
INC_COL.config.deviceMode = "";
INC_COL.config.pdpaddedProductList = [];
INC_COL.config.stopImgOver = false;
INC_COL.config.tout = null;
INC_COL.config.plpstorebtnclick = null;
INC_COL.config.empty_prod_details=[]
INC_COL.config.inc_slideIndex = 1;
INC_COL.config.quick_view=true;
INC_COL.config.user_interaction_modal= true;
INC_COL.config.close_modal_time= 0;
INC_COL.config.bundle_tracking=[];
INC_COL.config.Product_id = null;
INC_COL.config.dupBasket = [];
INC_COL.config.dupDataObjectProducts = [];
INC_COL.config.uniqueobjectproduct = [];
INC_COL.config.uniqueproduct = [];
INC_COL.config.pdpCID = "";
INC_COL.config.pdpPID = "";
INC_COL.config.noimage =  "https://www.increasingly.co/Implementation/p3ThM9/img/no-image.svg";
INC_COL.config.collection_combo_details = [];

INC_COL.config.productexclusion = []
INC_COL.methods = {};

if (window.location.hostname == "www.uat02p.pahtest.com"){
    INC_COL.config.addToBasketURL = "https://www.uat02p.pahtest.com/webapp/wcs/stores/servlet/AjaxOrderChangeServiceItemAdd";
} else {
   INC_COL.config.addToBasketURL = "https://www.petsathome.com/webapp/wcs/stores/servlet/AjaxOrderChangeServiceItemAdd"; 
}

function isBase64(str) {
    try {
        return btoa(atob(str)) == str;
    } catch (err) {
        return false;
    }
}
function isIE() {
    ua = navigator.userAgent;
    /* MSIE used to detect old browsers and Trident used to newer ones*/
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    return is_ie;
}
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

var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function(e) {
        var t = "";
        var n, r, i, s, o, u, a;
        var f = 0;
        e = Base64._utf8_encode(e);
        while (f < e.length) {
            n = e.charCodeAt(f++);
            r = e.charCodeAt(f++);
            i = e.charCodeAt(f++);
            s = n >> 2;
            o = (n & 3) << 4 | r >> 4;
            u = (r & 15) << 2 | i >> 6;
            a = i & 63;
            if (isNaN(r)) {
                u = a = 64
            } else if (isNaN(i)) {
                a = 64
            }
            t = t + this._keyStr.charAt(s) + this._keyStr.charAt(o) + this._keyStr.charAt(u) + this._keyStr.charAt(a)
        }
        return t
    },
    decode: function(e) {
        var t = "";
        var n, r, i;
        var s, o, u, a;
        var f = 0;
        e = e.replace(/[^A-Za-z0-9+/=]/g, "");
        while (f < e.length) {
            s = this._keyStr.indexOf(e.charAt(f++));
            o = this._keyStr.indexOf(e.charAt(f++));
            u = this._keyStr.indexOf(e.charAt(f++));
            a = this._keyStr.indexOf(e.charAt(f++));
            n = s << 2 | o >> 4;
            r = (o & 15) << 4 | u >> 2;
            i = (u & 3) << 6 | a;
            t = t + String.fromCharCode(n);
            if (u != 64) {
                t = t + String.fromCharCode(r)
            }
            if (a != 64) {
                t = t + String.fromCharCode(i)
            }
        }
        t = Base64._utf8_decode(t);
        return t
    },
    _utf8_encode: function(e) {
        e = e.replace(/rn/g, "n");
        var t = "";
        for (var n = 0; n < e.length; n++) {
            var r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r)
            } else if (r > 127 && r < 2048) {
                t += String.fromCharCode(r >> 6 | 192);
                t += String.fromCharCode(r & 63 | 128)
            } else {
                t += String.fromCharCode(r >> 12 | 224);
                t += String.fromCharCode(r >> 6 & 63 | 128);
                t += String.fromCharCode(r & 63 | 128)
            }
        }
        return t
    },
    _utf8_decode: function(e) {
        var t = "";
        var n = 0;
        var r = c1 = c2 = 0;
        while (n < e.length) {
            r = e.charCodeAt(n);
            if (r < 128) {
                t += String.fromCharCode(r);
                n++
            } else if (r > 191 && r < 224) {
                c2 = e.charCodeAt(n + 1);
                t += String.fromCharCode((r & 31) << 6 | c2 & 63);
                n += 2
            } else {
                c2 = e.charCodeAt(n + 1);
                c3 = e.charCodeAt(n + 2);
                t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                n += 3
            }
        }
        return t
    }
}

// if(localStorage.getItem('redirect_to_cart') == "1" || localStorage.getItem('redirect_to_cart') == 1){
//     setInterval(function(){
//         console.log("Interval Fired")
//         if (window.innerWidth > 767){
//             if(document.querySelector('#GotoCartButtonFromMiniBasket') != null){
//                 localStorage.removeItem('redirect_to_cart')
//                 document.querySelector('#GotoCartButtonFromMiniBasket').click()
//             }
//         } else {
//             if (document.querySelector('#HeaderCartDisplay').innerText != 0){
//                 localStorage.removeItem('redirect_to_cart')
//                 setTimeout(function() {
//                     document.querySelector('.site-header__basket.site-basket a').click()
//                 }, 200);
//             }
//         }
//     },0)
// }

INC_COL.init = function () {
    if(pdp_s20productflg){
        INC_COL.config.pdpaddedProductList = [];
        INC_COL.config.empty_prod_details=[]
        INC_COL.config.bundle_tracking=[];
        INC_COL.config.dupBasket = [];
        INC_COL.config.dupDataObjectProducts = [];
        INC_COL.config.uniqueobjectproduct = [];
        INC_COL.config.uniqueproduct = [];
        INC_COL.config.Product_id = null;
        
        INC_COL.methods.addVisitorID();
        INC_COL.config.deviceType = INC_COL.methods.detectDeviceType();
        INC_COL.config.pageType = INC_COL.methods.detectPageType();
        INC_COL.config.language = INC_COL.methods.detectLanguage();
        INC_COL.clientConfig.statusVAT = INC_COL.methods.checkStatusVAT();
        INC_COL.clientConfig.statusLoggedIn = INC_COL.methods.checkStatusLoggedIn();
        if (INC_COL.debug) console.log(INC_COL.config.pageType);
        if (INC_COL.debug) console.log(INC_COL.clientConfig.statusVAT);
        INC_COL.methods.clear();
        switch (INC_COL.config.pageType) {
            case "pdp":
                if(IRB_flag){
                    IRB_flag=false
                    if (INC_COL.debug) console.log("on pdp page");
                    var productId = INC_COL.methods.getProductIdFromWebPage();
                    if (INC_COL.debug) console.log(productId);
                    getTrackingPixel()
                    INC_COL.methods.irbReq_collection_bundle()
                }
                break;
            
            case "productList":
                if (INC_COL.debug) console.log("on plp page");
                INC_COL.methods.irbReq_collection_bundle()
                // var observeDOM = (function() {
                //     var MutationObserver = window.MutationObserver || window.WebKitMutationObserver,
                //         eventListenerSupported = window.addEventListener;
                //     return function(obj, callback) {
                //         if (MutationObserver) {
                //             // define a new observer
                //             var obs = new MutationObserver(function(mutations, observer) {
                //                 if (mutations[0].addedNodes.length || mutations[0].removedNodes.length) callback();
                //             });
                //             // have the observer observe foo for changes in children
                //             obs.observe(obj, {
                //                 childList: true,
                //                 subtree: true
                //             });
                //         } else if (eventListenerSupported) {
                //             obj.addEventListener('DOMNodeInserted', callback, false);
                //             obj.addEventListener('DOMNodeRemoved', callback, false);
                //         }
                //     };
                // })();
                // if (document.getElementsByClassName('ProductList').length != 0) {
                    // observeDOM(document.getElementsByClassName('ProductList')[0], function() {
                    //     setTimeout(function(){
                    //         if(irbobservload){
                    //             irbobservload=false
                    //             INC_COL.methods.irbReq_collection_bundle()
                    //         }
                    //     },500)
                    // });
                    
                // }
                // $(".SubCategoryName li").on('click', function(ev) {
                //     if(irbobservload){
                //         irbobservload=false
                //         INC_COL.methods.irbReq_collection_bundle()
                //     }
                // })
                break;
        }

        if (INC_COL.debug) {
            // setInterval(function () {
                if (INC_COL.debug) console.log(INC_COL.dataStore.bundleCartProducts);
            // }, 5000);
        }
        pdp_s20productflg=false
    }
    
}



INC_COL.dataStore = {};
INC_COL.dataStore.methods = function () {
    var inccolDataStore = INC_COL.dataStore;
    var dataStoreObj = {};

    function buildDataStoreObj(bundleResponse,collection) {
        INC_COL.config.collection_combo_details=[]
        INC_COL.config.dupDataObjectProducts=[]
        
        if(collection == "collection"){
            var collection_count = bundleResponse.ComboSetCount
            if(collection_count == 0){
                irbobservload=true
                if (document.querySelector('.site-width-container').style.backgroundImage.indexOf("increasingly")>=0){
                    document.querySelector('.site-width-container').style.backgroundImage=""
                }
                if(document.querySelector('.container-100--nowrap') != null){
                    document.querySelector('.container-100--nowrap').style.display="flex";
                }

                if (document.querySelector('.click-collect') != null){
                    document.querySelector('.click-collect').style.display="flex";
                }

                if (document.querySelector('.full-width') != null){
                    document.querySelector('.full-width').style.display="flex";
                }

                if (document.querySelector('.spacer-bottom-60') != null){
                    document.querySelector('.spacer-bottom-60').style.display="flex";
                }

                if(document.querySelector('.pdp-heading-ratings') != null){
                    document.querySelector('.pdp-heading-ratings').style.display="block";
                }

                if (document.querySelector('.scroller') != null){
                    document.querySelector('.scroller').style.display="block";
                }

                if (document.querySelector('.br_related_products') != null){
                    document.querySelector('.br_related_products').style.display="flex";
                }

                if (document.querySelector('.spacer-bottom-20') != null){
                    document.querySelector('.spacer-bottom-20').style.display="grid";
                }

                if (document.querySelector('#checkout-combo') != null){
                    document.querySelector('#checkout-combo').style.display="block";
                }

                if (document.querySelector('.pdp-price') != null){
                    document.querySelector('.pdp-price').style.display="block"
                }

                if (document.querySelector('.add-to-basket__inner') != null){
                    document.querySelector('.add-to-basket__inner').style.display="block"
                }   

                if (document.querySelector('.inner-spacer-top-30') != null){
                    document.querySelector('.inner-spacer-top-30').style.display="block";
                }
            }
        }else{
            var collection_count = 1

        }

        for (var c = 0; c < bundleResponse.ComboSetCount; c++) {
            INC_COL.dataStore.clientProductDealsCategory = "";
            
            if(collection == "collection"){
                var bundles = bundleResponse.ComboSet[c].Bundles
            }else{
                var bundles = bundleResponse.Bundles;
            }
            var productDealCount = 0;
            if (bundleResponse.ProductDeals != null) {
                bundleResponse.ProductDeals.forEach(function (productDealObj) {

                    bundles.push({
                        BundleId: bundles[0]["BundleId"],
                        Products: [bundles[0].Products[0], productDealObj]
                    });

                    INC_COL.dataStore.clientProductDealsCategory = productDealObj.CategoryId;
                });
            }
            if(collection == "collection"){
                INC_COL.config.uniqueobjectproduct = []
                INC_COL.config.dupDataObjectProducts=[]
            }
            // var dataStoreObj = {};
            var bundleProductsArray = [];
            var pdpProductId = '';
            if (window.location.pathname == "/kosik") {
                var productIds_d = [];
                if (document.querySelectorAll('.Cart_Body .Cart-Campaigns .Cart-Products .Cart-ProductImage a')[0] != null) {
                    Array.prototype.forEach.call(document.querySelectorAll('.Cart_Body .Cart-Campaigns .Cart-Products .Cart-ProductImage a'), function (elProductCode) {
                        var productId = elProductCode.getAttribute('ng-href').split('/')[2];
                        productIds_d.push(productId);
                    });
                }
            }
            var collection_bundles = [] 
            var collection_products=[]
            INC_COL.config.prod_json_respons = bundles
            for (var i = 0; i < bundles.length; i++) {
                if(INC_COL.config.dupDataObjectProducts.indexOf(bundles[i].BundleId) == -1){
                    INC_COL.config.dupDataObjectProducts.push(bundles[i].BundleId)
                    var irbBundleObj = bundles[i];
                    var bundleObj = {};
                    bundleObj.id = irbBundleObj["BundleId"];
                    bundleObj.totalRegularPrice = irbBundleObj["TotalPrice"];
                    bundleObj.totalActivePrice = irbBundleObj["TotalSpecialPrice"];
                    bundleObj.totalBundlePrice = irbBundleObj["TotalBundlePrice"];
                    bundleObj.totalBundleDiscountPrice = irbBundleObj["DiscountPrice"];
                    bundleObj.productCount = irbBundleObj["ProductCount"];


                    var irbProductsArray = irbBundleObj["Products"];
                    if (irbProductsArray.length) {
                        if (window.location.pathname == "/cart" || window.location.pathname == "/kosik") {
                            if (productIds_d.indexOf(irbProductsArray[0]["ProductId"]) >= 0) {
                                pdpProductId = irbProductsArray[0]["ProductId"];
                                if (irbProductsArray[1].Attributes == null && INC_COL.clientConfig.statusLoggedIn == true) {
                                    bundleProductsArray.push(irbProductsArray[1]["ProductId"]);
                                }

                                if (INC_COL.clientConfig.statusLoggedIn == false) {
                                    bundleProductsArray.push(irbProductsArray[1]["ProductId"]);
                                }
                            } else if (productIds_d.indexOf(irbProductsArray[1]["ProductId"]) >= 0) {
                                pdpProductId = irbProductsArray[1]["ProductId"];
                                if (irbProductsArray[0].Attributes == null && INC_COL.clientConfig.statusLoggedIn == true) {
                                    bundleProductsArray.push(irbProductsArray[0]["ProductId"]);
                                }

                                if (INC_COL.clientConfig.statusLoggedIn == false) {
                                    bundleProductsArray.push(irbProductsArray[0]["ProductId"]);
                                }
                            }
                        } else {
                            pdpProductId = irbProductsArray[0]["ProductId"];
                            bundleProductsArray.push(irbProductsArray[1]["ProductId"]);
                        }
                    }
                    
                    for (var j = 0; j < irbProductsArray.length; j++) {
                        if(INC_COL.config.uniqueobjectproduct.indexOf(irbProductsArray[j].ProductName) == -1){
                            INC_COL.config.uniqueobjectproduct.push(irbProductsArray[j].ProductName)
                            var product = irbProductsArray[j];
                            if(collection == "collection"){
                                product["comboId"] = bundleResponse.ComboSet[c].ComboId
                            }
                            var pAttributes = product["Attributes"] || "";
                            if(isBase64(product["Description"]) == true){
                                product["Description"] = Base64.decode(product["Description"])
                            }else{
                                product["Description"] = product["Description"]
                            }
                            
                            if(pAttributes != "" && pAttributes != null){
                                pAttributes = attribute_listing(pAttributes)
                            }
                            var pAttObj = {};
                            if(pAttributes[0] != undefined){
                                if(pAttributes[0].attributeCode == "size"){
                                    if(pAttributes[1] != undefined){
                                        pAttributes[1].attributeId = pAttributes[0].attributeId
                                    }
                                }else if(pAttributes[1] != undefined){
                                    if(pAttributes[1].attributeCode == "size"){
                                        if(pAttributes[0] != undefined){
                                            pAttributes[0].attributeId = pAttributes[1].attributeId
                                        }
                                    }
                                }
                            }
                            for(t=0;t<pAttributes.length;t++){
                                // pAttributes[t].attributeIdss = pAttributes[t].attributeId
                                // pAttributes[t].attributeId = t
                                // var attr_values = pAttributes[t].attributeValues;
                                // for(v=0;v<attr_values.length;v++){
                                //     attr_values[v].optionIdsss = attr_values[v].optionId;
                                //     attr_values[v].optionId = t;
                                // }
                                pAttributes[t].attributeIds = t
                                var attr_values = pAttributes[t].attributeValues;
                                for (v = 0; v < attr_values.length; v++) {
                                    attr_values[v].optionIds = t;
                                    attr_values[v].childProductIdss = product["ProductId"] + t;
                                }
                            }
                            collection_products.push(product["ProductId"])
                            

                            if (pAttributes.length) {
                                for (var k = 0; k < pAttributes.length; k++) {
                                    var pAttributesObj = pAttributes[k];
                                    var pAttributesValues = pAttributesObj["attributeValues"];

                                    for (var l = 0; l < pAttributesValues.length; l++) {
                                        var childProduct = pAttributesValues[l];
                                        if (childProduct["childProductId"] == null) {
                                            childProduct["childProductId"] = product["ProductId"];
                                            childProduct["childProductSku"] = product["ProductSku"];
                                            childProduct["childProductName"] = product["ProductName"];
                                            childProduct["childProductImageUrl"] = product["ImageURL"];
                                            childProduct["childProductOtherImageUrl"] = product["OtherImageList"];
                                            childProduct["childProductUrl"] = product["ProductUrl"];
                                            childProduct["childProductPrice"] = product["Price"];
                                            childProduct["childProductSpecialPrice"] = product["SpecialPrice"];
                                            childProduct["childProductDescription"] = product["Description"];
                                            childProduct["childInternalProductId"] = product["ProductId"]
                                        }
                                        childProduct["comboId"] = product["comboId"];
                                        childProduct["childProductId_d"] = product["ProductId"];
                                        childProduct["childProductOtherImageUrl12"] = product["OtherImageList"];
                                        childProduct["MainColor"] = product["Color"];
                                        // childProduct["childProductSku"] = childProduct["childProductId"];
                                        if(childProduct["childProductImageUrl"] == ""){
                                            childProduct["childProductImageUrl"] = product["ImageURL"];
                                        }
                                        childProduct["ProductType"] = product["ProductType"];
                                        childProduct["main_img"] = product["ImageURL"];
                                        childProduct["PromotionalMessage"] = product["PromotionalMessage"];
                                        childProduct["ProductLevelDiscountMessage"] = product["ProductLevelDiscountMessage"];
                                        childProduct["childCategoryName"] = product["CategoryName"];
                                        childProduct["childProductField6"] = product["Field6"];
                                        childProduct["childCategoryId"] = product["CategoryId"];
                                        childProduct["childProductDescription"] = product["Description"];
                                        childProduct["ShortDescription"] = product["Description"];
                                        childProduct["Field3"] = product["Field3"];
                                        if(pAttributesObj["attributeCode"] == "color" || pAttributesObj["attributeCode"] == "color" || pAttributesObj["attributeCode"] == "color"){
                                            pAttributesObj["attributeCode"] = "color"
                                        }else{
                                            pAttributesObj["attributeCode"] = "size"
                                        }
                                        childProduct["attributeId"] = pAttributesObj["attributeId"];
                                        childProduct["attributeCode"] = pAttributesObj["attributeCode"]

                                        childProduct["productStatus"] = product["ProductStatus"];
                                        childProduct["quantity"] = product["Quantity"];

                                        var productObj = new INC_COL.classes.ProductAttObj(childProduct);
                                        
                                        productObj["bundledProductId"] = pdpProductId;
                                        productObj.mainId = product["ProductId"];
                                        productObj.bundleId = bundleObj.id;
                                        // productObj.id = product["ProductId"];
                                        productObj.sku = productObj.id;
                                        productObj.option[pAttributesObj["attributeIds"]].id = pAttributesObj["attributeId"];
                                        productObj.option[pAttributesObj["attributeIds"]].label = pAttributesObj["frontEndLabel"];
                                        productObj.option[pAttributesObj["attributeIds"]].code = pAttributesObj["attributeCode"];
                                        productObj.Filed3 = product["Field1"];
                                        if (!dataStoreObj.hasOwnProperty(product['ProductId'])) {
                                            dataStoreObj[product['ProductId']] = {};
                                        }
                                        if (!dataStoreObj[product['ProductId']].hasOwnProperty(productObj['id'])) {
                                            dataStoreObj[product['ProductId']][productObj['id']] = {}
                                        }
                                        pAttObj = dataStoreObj[product['ProductId']][productObj['id']];

                                        
                                        for (pAtt in productObj) {
                                            if (pAtt == "option") {
                                                if (!pAttObj.hasOwnProperty('option')) {
                                                    pAttObj["option"] = {}
                                                }
                                                
                                                Object.keys(productObj[pAtt]).forEach(function (key) {
                                                    pAttObj[pAtt][key] = productObj[pAtt][key];
                                                });
                                                // }
                                            } else {
                                                pAttObj[pAtt] = productObj[pAtt];
                                            }
                                        }

                                        // if(INC_COL.debug) console.log("child product after update");
                                        // if(INC_COL.debug) console.log(pAttObj);
                                    }
                                    
                                }
                            }
            
                            if (pAttributes.length == 0) {
                                var productObj = new INC_COL.classes.ProductObj(product);
                                productObj["bundleId"] = irbBundleObj["BundleId"];
                                productObj["bundledProductId"] = pdpProductId;
                                productObj.sku = productObj.sku;
                                productObj.Field3 = product["Field1"];
                                if (!dataStoreObj.hasOwnProperty(productObj['mainId'])) {
                                    dataStoreObj[productObj['mainId']] = {};
                                }
            
                                dataStoreObj[productObj['mainId']][productObj['id']] = {};
                                if (!!window.MSInputMethodContext && !!document.documentMode) {
                                    dataStoreObj[productObj['mainId']][productObj['id']] = JSON.parse(JSON.stringify(productObj));
                                } else {
                                    dataStoreObj[productObj['mainId']][productObj['id']] = Object.assign({}, productObj);
                                }
                            }
                        }
                        // productArray.push(pAttObj);
                    }
                   
                    // if(collection == "collection"){
                    //     collection_bundles.push({
                    //         bundles:bundles[i].BundleId,
                    //         products:collection_products
                    //     })
                    // }
                }

            }
            if(collection == "collection"){
                collection_bundles.push({
                    // bundles:bundles[i].BundleId,
                    products:collection_products
                })
            }
            if(collection == "collection"){
                INC_COL.config.collection_combo_details.push({
                    comboId:bundleResponse.ComboSet[c].ComboId,
                    ComboImageURL:bundleResponse.ComboSet[c].ComboImageURL,
                    ComboProductURL:bundleResponse.ComboSet[c].ComboProductURL,
                    ComboTitle:bundleResponse.ComboSet[c].ComboTitle,
                    collection_bundles : collection_bundles
                })
            }
        }

        inccolDataStore.dataStoreObj = dataStoreObj;
        inccolDataStore.bundleProductsArray = bundleProductsArray;
        inccolDataStore.pdpProductId = pdpProductId;
        if (INC_COL.debug) console.log("DataStore");
        if (INC_COL.debug) console.log(inccolDataStore)
        // if(INC_COL.debug) console.log(inccolDataStore);
        inccolDataStore.bundleCartProducts = {};

        if(collection == "collection"){
            setTimeout(function(){
                if(bundleResponse.ComboSetCount != 0){
                    if(INC_COL.config.pageType == "pdp"){
                        INC_COL.methods.createPDPCollectionBlock()
                    }else if(INC_COL.config.pageType == "productList"){
                        INC_COL.methods.createPLPCollectionBlock()
                    }
                }
            },500)
        }
        
    }

    function getFirstProductObjByMainId(findObj) {
        var childProductObj = {};
        var productListObj = INC_COL.dataStore.dataStoreObj;

        // childProductObj = productListObj[findObj["mainId"]][Object.keys(productListObj[findObj["mainId"]])[0]];
        if(productListObj != undefined){
            try{
                childProductObj = productListObj[findObj["mainId"]][Object.keys(productListObj[findObj["mainId"]])[0]];
            }
            catch (err) {
            }
        }

        return childProductObj;
    }

    function getProductById(findObj) {
        var childProductObj = {};
        var productListObj = INC_COL.dataStore.dataStoreObj;
        // if (INC_COL.debug) console.log(findObj);
        if (findObj.hasOwnProperty("id")) {
            for (mainProductId in productListObj) {
                for (childProductId in productListObj[mainProductId]) {
                    // if (INC_COL.debug) console.log(childProductId == findObj["id"]);
                   
                        if (productListObj[mainProductId][childProductId]["id"] == findObj["id"]) {
                            childProductObj = productListObj[mainProductId][childProductId];
                        }
                   
                }
            }
        }
        // if (INC_COL.debug) console.log(childProductObj);
        return childProductObj;
    }

    function getProductBySKU(findObj) {
        var childProductObj = {};
        var productListObj = INC_COL.dataStore.dataStoreObj;

        if (findObj.hasOwnProperty('sku')) {
            for (mainProductId in productListObj) {
                for (childProductId in productListObj[mainProductId]) {
                    if (productListObj[mainProductId][childProductId]["sku"] == findObj['sku']) {
                        childProductObj = productListObj[mainProductId][childProductId];
                    }
                }
            }
        }
        // if (INC_COL.debug) console.log(childProductObj);
        return childProductObj;
    }

    function getUniqueCatergories() {
        var catergoriesArray = [];

        var productListObj = INC_COL.dataStore.dataStoreObj;
        var bundleProductsArray = INC_COL.dataStore.bundleProductsArray;

        bundleProductsArray.forEach(function (productId) {

            for (childProductId in productListObj[productId]) {
                var indexOfCategoryId = catergoriesArray.indexOf(productListObj[productId][childProductId]["categoryId"]);
                // if (INC_COL.debug) console.log(productListObj[productId][childProductId]["categoryId"]);
                if (indexOfCategoryId == -1 && productListObj[productId][childProductId]["categoryId"] != INC_COL.dataStore.clientProductDealsCategory) {
                    catergoriesArray.push(productListObj[productId][childProductId]["categoryId"]);
                }
            }
        });

        // catergoriesArray.push(INC_COL.dataStore.clientProductDealsCategory);
        // if (INC_COL.debug) console.log(catergoriesArray);
        return catergoriesArray;
    }

    function getProductColorsObj(findObj,type_of) {
        
        var productColorObj = {};
        var productListObj = INC_COL.dataStore.dataStoreObj;
        var productColorArrayObj = {}
        var productColorObjArray = [];
        var option_ids = ""
        var c_pid = ""
        var is_color=true;
        if (findObj.hasOwnProperty("mainId")) {
            for (mainProductId in productListObj) {
                if (mainProductId == findObj["mainId"]) {
                    for (childProductId in productListObj[mainProductId]) {
                        if(productListObj[mainProductId][childProductId]["option"]["0"] != undefined){
                            if(productListObj[mainProductId][childProductId]["option"]["0"].code == "color"){
                                if (productListObj[mainProductId][childProductId]["option"] != null &&
                                    productListObj[mainProductId][childProductId]["option"] != undefined &&
                                    productListObj[mainProductId][childProductId]["option"]["0"] != null &&
                                    productListObj[mainProductId][childProductId]["option"]["0"] != undefined) {
                                    if(type_of != undefined){
                                        var attr_block=null;
                                        if(type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == false){
                                            attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                        }else{
                                            attr_block = type_of.parentNode.parentNode.parentNode
                                        }
                                        if(type_of.parentNode != null){
                                            var opt_text=attr_block.getAttribute('data-zero');
                                            var opt_size_text=attr_block.getAttribute('data-size');
                                            if(opt_size_text == undefined){
                                                var opt_size_text=""
                                            }
                                        }else{
                                            var opt_text=type_of.innerText;
                                            var opt_size_text=""
                                        }
                                        
                                        if(opt_text != "" && opt_size_text != "" && productListObj[mainProductId][childProductId].option[1] != undefined && productListObj[mainProductId][childProductId].option[2] != undefined){
                                            if(productListObj[mainProductId][childProductId].option[1].text == opt_text && productListObj[mainProductId][childProductId].option[2].text == opt_size_text){
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]] = {};
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = "";
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = "";
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["0"]["titleText"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["0"]["colorCode"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["0"]["imgSrc"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["0"]["code"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["0"]["cpid"];
                                            }
                                        }else if(opt_text != "" && productListObj[mainProductId][childProductId].option[1] != undefined){
                                            if(productListObj[mainProductId][childProductId].option[1].text == opt_text){
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]] = {};
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = "";
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = "";
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["0"]["titleText"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["0"]["colorCode"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["0"]["imgSrc"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["0"]["code"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["0"]["cpid"];
                                            }
                                        }else{
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]] = {};
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = "";
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = "";
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["0"]["titleText"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["0"]["colorCode"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["0"]["imgSrc"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["0"]["code"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["0"]["cpid"];
                                        }
                                    }else{
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]] = {};
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = "";
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = "";
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["0"]["titleText"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["0"]["colorCode"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["0"]["imgSrc"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["0"]["code"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["0"]["cpid"];
                                    }

                                }
                            } else{
                                is_color = false;
                            }
                        }
                    }
                }
            }
        }
        Object.keys(productColorArrayObj).forEach(function (colorText) {
            var colorObj = {}
            colorObj["text"] = colorText;
            // colorObj["imgSrc"] = productColorArrayObj[colorText];
            colorObj["colorCode"] = productColorArrayObj[colorText]["colorCode"];
            colorObj["imgSrc"] = productColorArrayObj[colorText]["imgSrc"];
            colorObj["titleText"] = productColorArrayObj[colorText]["titleText"];
            colorObj["code"] = productColorArrayObj[colorText]["code"];
            colorObj["cpid"] = productColorArrayObj[colorText]["cpid"];
            productColorObjArray.push(colorObj);
        });
        if(type_of == "size"){
            productColorObj["sizeArray"] = productColorObjArray;
        }else if(type_of == "zero"){
            productColorObj["att0Array"] = productColorObjArray;
        }else if(type_of == "third"){
            productColorObj["att3Array"] = productColorObjArray;
        }else{
            productColorObj["colorArray"] = productColorObjArray;
        }
        return productColorObj;
    }

    function getProductSizesObj(findObj,type_of) {
        var productSizeObj = {};
        var productListObj = INC_COL.dataStore.dataStoreObj;
        var productSizesArrayObj = {};
        var productSizesObjArray = [];
        var sizesArray = ["S", "M", "L", "XL", "XX", "XXL"];
        var attr_code="";
        var c_pid="";
        if (findObj.hasOwnProperty("mainId")) {
            for (mainProductId in productListObj) {
                if (mainProductId == findObj["mainId"]) {
                    for (childProductId in productListObj[mainProductId]) {
                        if(type_of != undefined){
                            var attr_block=null;
                            if(type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == false){
                                attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                            }else{
                                attr_block = type_of.parentNode.parentNode.parentNode
                            }
                            var opt_text=attr_block.getAttribute('data-zero');
                            var opt_size_text=attr_block.getAttribute('data-size');
                            // var opt_color_text=attr_block.getAttribute('data-color');

                            if(opt_size_text == undefined){
                                var opt_size_text=""
                            }
                            if(opt_text == undefined){
                                var opt_text=""
                            }
                            if(opt_color_text == undefined){
                                var opt_color_text=""
                            }
                            // var opt_text=type_of.parentNode.parentNode.parentNode.getAttribute('data-zero');
                            // var opt_text=type_of.innerText

                            if(opt_text != "" && productListObj[mainProductId][childProductId].option[1] != undefined){
                                if(productListObj[mainProductId][childProductId].option[1].text == opt_text){
                                    if (productListObj[mainProductId][childProductId]["option"] != null &&
                                        productListObj[mainProductId][childProductId]["option"] != undefined &&
                                        productListObj[mainProductId][childProductId]["option"]["2"] != null &&
                                        productListObj[mainProductId][childProductId]["option"]["2"] != undefined) {
                                        productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]] = productListObj[mainProductId][childProductId]["option"]["2"]["text"];
                                        attr_code = productListObj[mainProductId][childProductId]["option"]["2"]["code"];
                                        c_pid = productListObj[mainProductId][childProductId]["option"]["2"]["cpid"];
                                    }
                                }
                            }else if (productListObj[mainProductId][childProductId]["option"] != null &&
                                productListObj[mainProductId][childProductId]["option"] != undefined &&
                                productListObj[mainProductId][childProductId]["option"]["2"] != null &&
                                productListObj[mainProductId][childProductId]["option"]["2"] != undefined) {
                                productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]] = productListObj[mainProductId][childProductId]["option"]["2"]["text"];
                                attr_code = productListObj[mainProductId][childProductId]["option"]["2"]["code"];
                                c_pid = productListObj[mainProductId][childProductId]["option"]["2"]["cpid"];
                            }
                        }else if (productListObj[mainProductId][childProductId]["option"] != null &&
                            productListObj[mainProductId][childProductId]["option"] != undefined &&
                            productListObj[mainProductId][childProductId]["option"]["2"] != null &&
                            productListObj[mainProductId][childProductId]["option"]["2"] != undefined) {
                            productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]] = productListObj[mainProductId][childProductId]["option"]["2"]["text"];
                            attr_code = productListObj[mainProductId][childProductId]["option"]["2"]["code"];
                            c_pid = productListObj[mainProductId][childProductId]["option"]["2"]["cpid"];
                        }
                    }
                    
                }
            }
        }

        Object.keys(productSizesArrayObj).forEach(function (sizeText) {
            var sizeObj = {};
            sizeObj["text"] = sizeText;
            sizeObj["code"] = attr_code;
            sizeObj["cpid"] = c_pid;
            productSizesObjArray.push(sizeObj);
            // productSizesObjArray.push(code);
        });
        productSizeObj["sizeArray"] = productSizesObjArray.sort(function (a, b) { return a["text"].split("-")[0].trim() - b["text"].split("-")[0].trim() });
        // productSizeObj["sizeArray"] = productSizesObjArray.sort(function (a, b) { return a["text"].split(" ")[1].trim() - b["text"].split(" ")[1].trim() });
        productSizeObj["sizeArray"] = productSizesObjArray.sort();
        productSizeObj["sizeArray"] = productSizesObjArray.sort(function (a, b) { return sizesArray.indexOf(a["text"]) - sizesArray.indexOf(b["text"]) });

        return productSizeObj;
    }
    function getProductopt0Obj(findObj,type_of) {
        var product0Obj = {};
        var productListObj = INC_COL.dataStore.dataStoreObj;
        var product0ArrayObj = {}
        var product0ObjArray = [];

        if (findObj.hasOwnProperty("mainId")) {
            for (mainProductId in productListObj) {
                if (mainProductId == findObj["mainId"]) {
                    for (childProductId in productListObj[mainProductId]) {
                    
                        if (productListObj[mainProductId][childProductId]["option"] != null &&
                            productListObj[mainProductId][childProductId]["option"] != undefined &&
                            productListObj[mainProductId][childProductId]["option"]["1"] != null &&
                            productListObj[mainProductId][childProductId]["option"]["1"] != undefined) {

                            var attr_main=true;
                            var first_attr_acodec = ["Connectivity","Number of SIM", "Device"];
                            if(productListObj[mainProductId][childProductId]["option"][0].code != undefined || productListObj[mainProductId][childProductId]["option"][1].code != undefined ){
                                if(first_attr_acodec.indexOf(productListObj[mainProductId][childProductId]["option"][0].code) == -1 && first_attr_acodec.indexOf(productListObj[mainProductId][childProductId]["option"][1].code) == -1){
                                    attr_main = false;
                                }
                            }
                            if(attr_main == true){
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]] = {};
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["colorCode"] = "";
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = "";
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["1"]["titleText"];
                                
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["1"]["code"];
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["1"]["cpid"];
                            }else{
                                if(findObj.colorText != undefined){
                                    if(productListObj[mainProductId][childProductId].option["0"].text.trim().toLocaleLowerCase() == findObj.colorText.trim().toLocaleLowerCase()){
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]] = {};
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["colorCode"] = "";
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = "";
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["1"]["titleText"];
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["1"]["cpid"];
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["1"]["code"];
                                    }
                                }else{
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]] = {};
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["colorCode"] = "";
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = "";
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["1"]["titleText"];
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["1"]["cpid"];
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["1"]["code"];
                                }
                            }
                        }

                        // colorObj["text"] = productListObj[mainProductId][childProductId]["option"]["1"]["text"];
                        // colorObj["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
                        // product0ObjArray.push(colorObj)
                    }
                }
            }
        }

        Object.keys(product0ArrayObj).forEach(function (colorText) {
            var attr0Obj = {}
            attr0Obj["text"] = colorText;
            attr0Obj["imgSrc"] = product0ArrayObj[colorText]["imgSrc"];
            attr0Obj["titleText"] = product0ArrayObj[colorText]["titleText"];
            attr0Obj["code"] = product0ArrayObj[colorText]["code"];
            attr0Obj["cpid"] = product0ArrayObj[colorText]["cpid"];
            product0ObjArray.push(attr0Obj);
        });

        product0Obj["att0Array"] = product0ObjArray;

        return product0Obj;
    }
    function getProductopt3Obj(findObj,type_of) {
        var product3Obj = {};
        var productListObj = INC_COL.dataStore.dataStoreObj;
        var productColorArrayObj = {}
        var product3ObjArray = [];

        if (findObj.hasOwnProperty("mainId")) {
            for (mainProductId in productListObj) {
                if (mainProductId == findObj["mainId"]) {
                    for (childProductId in productListObj[mainProductId]) {
                    
                        if (productListObj[mainProductId][childProductId]["option"] != null &&
                            productListObj[mainProductId][childProductId]["option"] != undefined &&
                            productListObj[mainProductId][childProductId]["option"]["3"] != null &&
                            productListObj[mainProductId][childProductId]["option"]["3"] != undefined) {
                            if(type_of != undefined){
                                var attr_block=null;
                                if(type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == false){
                                    attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                }else{
                                    attr_block = type_of.parentNode.parentNode.parentNode
                                }
                                var opt_text=attr_block.getAttribute('data-zero');
                                var opt_size_text=attr_block.getAttribute('data-size');
                                var opt_color_text=attr_block.getAttribute('data-color');

                                if(opt_size_text == undefined){
                                    var opt_size_text=""
                                }
                                if(opt_color_text == undefined){
                                    var opt_color_text=""
                                }
                                // if(type_of.getAttribute('data-option') == "2"){
                                //     var opt_text=type_of.parentNode.parentNode.parentNode.getAttribute('data-zero');
                                //     var opt_size_text=type_of.parentNode.parentNode.parentNode.getAttribute('data-size');
                                //     var opt_color_text=type_of.parentNode.parentNode.parentNode.getAttribute('data-color');
                                // }else{
                                //     var opt_text=type_of.innerText;
                                //     var opt_size_text=""
                                //     var opt_color_text=""
                                // }
                                if(opt_text != "" && opt_size_text != "" && opt_color_text != ""){
                                    if(productListObj[mainProductId][childProductId].option[1] != undefined && productListObj[mainProductId][childProductId].option[2] != undefined && productListObj[mainProductId][childProductId].option[0] != undefined){
                                        if(productListObj[mainProductId][childProductId].option[1].text == opt_text && productListObj[mainProductId][childProductId].option[2].text == opt_size_text && productListObj[mainProductId][childProductId].option[0].text == opt_color_text){
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]] = {};
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["colorCode"] = "";
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = "";
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["3"]["titleText"];
                                            
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["3"]["imgSrc"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["3"]["code"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["3"]["cpid"];
                                        }
                                    }
                                }else{
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]] = {};
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["colorCode"] = "";
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = "";
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["3"]["titleText"];
                                    
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["3"]["imgSrc"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["3"]["code"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["3"]["cpid"];
                                }
                            }else{
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]] = {};
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["colorCode"] = "";
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = "";
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["3"]["titleText"];
                                    
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["3"]["imgSrc"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["3"]["code"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["3"]["cpid"];
                            }


                        }

                        // colorObj["text"] = productListObj[mainProductId][childProductId]["option"]["1"]["text"];
                        // colorObj["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
                        // product3ObjArray.push(colorObj)
                    }
                }
            }
        }

        Object.keys(productColorArrayObj).forEach(function (colorText) {
            var attr3Obj = {}
            var attrr3Obj = {}
            attr3Obj["text"] = colorText;
            attr3Obj["imgSrc"] = productColorArrayObj[colorText]["imgSrc"];
            attr3Obj["titleText"] = productColorArrayObj[colorText]["titleText"];
            attr3Obj["code"] = productColorArrayObj[colorText]["code"];
            attr3Obj["cpid"] = productColorArrayObj[colorText]["cpid"];
            product3ObjArray.push(attrr3Obj);
        });

        product3Obj["att3Array"] = product3ObjArray;

        return product3Obj;
    }
    function getProductopt4Obj(findObj) {
        var product4Obj = {};
        var productListObj = INC_COL.dataStore.dataStoreObj;
        var productColorArrayObj = {}
        var product4ObjArray = [];

        if (findObj.hasOwnProperty("mainId")) {
            for (mainProductId in productListObj) {
                if (mainProductId == findObj["mainId"]) {
                    for (childProductId in productListObj[mainProductId]) {
                        if (productListObj[mainProductId][childProductId]["option"] != null &&
                            productListObj[mainProductId][childProductId]["option"] != undefined &&
                            productListObj[mainProductId][childProductId]["option"]["4"] != null &&
                            productListObj[mainProductId][childProductId]["option"]["4"] != undefined) {

                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["4"]["text"]] = {};
                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["4"]["text"]]["colorCode"] = "";
                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["4"]["text"]]["imgSrc"] = "";
                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["4"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["4"]["titleText"];
                            
                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["4"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["4"]["imgSrc"];
                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["4"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["4"]["code"];
                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["4"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["4"]["cpid"];


                        }
                    }
                }
            }
        }

        Object.keys(productColorArrayObj).forEach(function (colorText) {
            var attr4Obj = {}
            attr4Obj["text"] = colorText;
            attr4Obj["imgSrc"] = productColorArrayObj[colorText]["imgSrc"];
            attr4Obj["titleText"] = productColorArrayObj[colorText]["titleText"];
            attr4Obj["code"] = productColorArrayObj[colorText]["code"];
            attr4Obj["cpid"] = productColorArrayObj[colorText]["cpid"];
            product4ObjArray.push(attr4Obj);
        });

        product4Obj["att4Array"] = product4ObjArray;

        return product4Obj;

    }
   
    function getProductByAtt(findObj) {
        
        var childProductObj = {};
        var productListObj = INC_COL.dataStore.dataStoreObj;
        var mainProductListObj = productListObj[findObj.mainId];
        for (childProductId in mainProductListObj) {
           
            if(findObj.zeroText != "" && findObj.sizeText != "" && findObj.colorText != "" && findObj.thirdText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined && mainProductListObj[childProductId]["option"]["2"] != undefined && mainProductListObj[childProductId]["option"]["3"] != undefined){
                if(findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text && findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text && findObj.sizeText == mainProductListObj[childProductId]["option"]["2"].text && findObj.thirdText == mainProductListObj[childProductId]["option"]["3"].text){
                    childProductObj = mainProductListObj[childProductId];
                }
            } else if(findObj.zeroText != "" && findObj.sizeText != "" && findObj.colorText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined && mainProductListObj[childProductId]["option"]["2"] != undefined){
                if(findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text && findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text && findObj.sizeText == mainProductListObj[childProductId]["option"]["2"].text){
                    childProductObj = mainProductListObj[childProductId];
                }
            } else if(findObj.zeroText != "" && findObj.colorText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined){
                if(findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text && findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text){
                    childProductObj = mainProductListObj[childProductId];
                }
            }else if(findObj.zeroText == "" && findObj.sizeText == "" && findObj.thirdText != "" && findObj.colorText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined){
                if(findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text && findObj.thirdText == mainProductListObj[childProductId]["option"]["1"].text){
                    childProductObj = mainProductListObj[childProductId];
                }
            } else if (
                mainProductListObj[childProductId]["option"] != null &&
                mainProductListObj[childProductId]["option"] != undefined &&
                mainProductListObj[childProductId]["option"]["0"] != null &&
                mainProductListObj[childProductId]["option"]["0"] != undefined &&
                (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text)
            ) {
                childProductObj = mainProductListObj[childProductId];
                
            } else if (
                mainProductListObj[childProductId]["option"] != null &&
                mainProductListObj[childProductId]["option"] != undefined &&
                mainProductListObj[childProductId]["option"]["1"] != null &&
                mainProductListObj[childProductId]["option"]["1"] != undefined &&
                (findObj.sizeText == mainProductListObj[childProductId]["option"]["1"].text)
            ) {
                childProductObj = mainProductListObj[childProductId];
                
            }
        }

        // if (INC_COL.debug) console.log(childProductObj);
        return childProductObj;
    }

    return {
        buildDataStoreObj: buildDataStoreObj,
        getFirstProductObjByMainId: getFirstProductObjByMainId,
        getProductById: getProductById,
        getProductBySKU: getProductBySKU,
        getUniqueCatergories: getUniqueCatergories,
        getProductColorsObj: getProductColorsObj,
        getProductSizesObj: getProductSizesObj,
        getProductopt3Obj: getProductopt3Obj,
        getProductopt4Obj: getProductopt4Obj,
        getProductopt0Obj: getProductopt0Obj,
        getProductByAtt: getProductByAtt
    }
}

INC_COL.classes = {};
INC_COL.classes.ProductObj = function (product) {
    this.bundleId = "";
    this.id = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
    this.sku = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
    this.comboId = ((product != null) && (product != undefined)) ? product["comboId"] : "";
    this.childsku = ((product != null) && (product != undefined)) ? product["ProductSku"] : "";
    this.name = ((product != null) && (product != undefined)) ? ((INC_COL.config.language == "en") ? product["ProductName"] : product["Field4"]) : "";
    this.url = ((product != null) && (product != undefined)) ? product["ProductUrl"] : "";
    this.imageURL = ((product != null) && (product != undefined)) ? product["ImageURL"] : "";
    this.regularPrice = ((product != null) && (product != undefined)) ? product["Price"] : "";
    this.activePrice = ((product != null) && (product != undefined)) ? ((product["SpecialPrice"] != null) ? product["SpecialPrice"] : product["Price"]) : "";
    this.discountPrice = ((product != null) && (product != undefined)) ? product["Field2"] : "";
    // this.activePriceMsg = ((product != null) && (product != undefined)) ? ((product["Field3"] != "") ? ((INC_COL.config.language == "en") ? product["Field3"] : product["Field6"]) : "") : "");
    
    this.manufacturer = ((product != null) && (product != undefined)) ? product["Manufacturer"] : "";
    this.otherImageList = ((product != null) && (product != undefined)) ? product["OtherImageList"] : [];
    this.size = ((product != null) && (product != undefined)) ? ((product["size"] != null) ? product["size"] : "") : "";
    this.option = {};
    
    if(product["ProductLevelDiscountMessage"] != null){
        this.ProductLevelDiscountMessage = product["ProductLevelDiscountMessage"]
    }else{
        if(product["PromotionalMessage"] == "null" || product["PromotionalMessage"] == "Null"){
            this.ProductLevelDiscountMessage = ""
        }else{
            this.ProductLevelDiscountMessage = product["PromotionalMessage"]
        }
    }
    this.ProductType = product["ProductType"];
    this.internalId = ((product != null) && (product != undefined)) ? product["InternalId"] : "";
    this.mainId = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
    this.categoryName = ((product != null) && (product != undefined)) ? product["CategoryName"] : "";
    this.categoryId = ((product != null) && (product != undefined)) ? product["CategoryId"] : "";
    this.description = ((product != null) && (product != undefined)) ? product["Description"] : "";
    this.shortDescription = ((product != null) && (product != undefined)) ? ((INC_COL.config.language == "en") ? product["Description"] : product["Field5"]) : "";
    this.ratingsCount = ((product != null) && (product != undefined)) ? product["Field3"] : "";
    this.reviewsCount = ((product != null) && (product != undefined)) ? product["Field4"] : "";
    this.worthPrice = ((product != null) && (product != undefined)) ? product["Field3"] : "";
    this.offer = ((product != null) && (product != undefined)) ? product["Field6"] : "";
    this.ProductType = product["ProductType"];
    this.ProductStatus = ((product != null) && (product != undefined)) ? product["ProductStatus"] : "";
    this.Quantity = ((product != null) && (product != undefined)) ? product["Quantity"] : "";
}
INC_COL.classes.ProductAttObj = function (product) {
    this.bundleId = "";
    this.id = ((product != null) && (product != undefined)) ? product["childProductId"] : "";
    this.sku = ((product != null) && (product != undefined)) ? product["childProductId"] : "";
    this.childsku = ((product != null) && (product != undefined)) ? product["childProductSku"] : "";
    this.name = ((product != null) && (product != undefined)) ? ((INC_COL.config.language == "en") ? product["childProductName"] : product["Field4"]) : "";
    this.attributeId = ((product != null) && (product != undefined)) ? product["attributeId"] : "";
    this.url = ((product != null) && (product != undefined)) ? product["childProductUrl"] : "";
    this.imageURL = ((product != null) && (product != undefined)) ? product["childProductImageUrl"] : "";
    this.regularPrice = ((product != null) && (product != undefined)) ? product["childProductPrice"] : "";
    this.activePrice = ((product != null) && (product != undefined)) ? ((product["childProductSpecialPrice"] != null) ? product["childProductSpecialPrice"] : product["childProductPrice"]) : "";
    this.comboId = ((product != null) && (product != undefined)) ? product["comboId"] : "";
    this.optionId = ((product != null) && (product != undefined)) ? product["optionId"] : "";
    this.activePriceMsg = ((product != null) && (product != undefined)) ? ((product["Field3"] != "") ? ((INC_COL.config.language == "en") ? product["Field3"] : product["Field6"]) : "") : "";
    this.main_img = ((product != null) && (product != undefined)) ? product["main_img"] : "";
    
    if(this.ProductLevelDiscountMessage != null){
        this.ProductLevelDiscountMessage = product["ProductLevelDiscountMessage"]
    }else{
        this.ProductLevelDiscountMessage = product["PromotionalMessage"]
    }
    this.manufacturer = ((product != null) && (product != undefined)) ? product["Manufacturer"] : "";
    this.otherImageList = ((product != null) && (product != undefined)) ? product["childProductOtherImageUrl"] : [];
    
    if(product["childProductOtherImageUrl"] == null){
        this.otherImageList=[]
        this.otherImageList[0] = product["childProductImageUrl"]
    }
    if(this.otherImageList.indexOf(product["childProductImageUrl"]) == -1){
        this.otherImageList.unshift(product["childProductImageUrl"])
    }
    this.size = "";
    this.option = {};
    // this.option = {
    //     "1": "",
    //     "2": "",
    //     "3": ""
    // };
    if (((product != null) && (product != undefined))) {
        this.option[product["optionIds"]] = {};
        this.option[product["optionIds"]].text = product["optionText"];
        this.option[product["optionIds"]].cpid = product["childProductSku"].split("|")[0];
        this.option[product["optionIds"]].titleText = (product["childProductField2"] != null) ? product["childProductField2"] : "";
        this.option[product["optionIds"]].imgSrc = (product["optionImageUrl"] != null) ? product["optionImageUrl"] : "";
        this.option[product["optionIds"]].colorCode = (product["colorCode"] != null) ? product["colorCode"] : "";
        
    }
    
    this.internalId = ((product != null) && (product != undefined)) ? product["childInternalProductId"] : "";
    // this.mainId = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
    this.categoryName = ((product != null) && (product != undefined)) ? product["childCategoryName"] : "";
    this.categoryId = ((product != null) && (product != undefined)) ? product["childCategoryId"] : "";
    this.description = ((product != null) && (product != undefined)) ? product["childProductDescription"] : "";
    this.shortDescription = ((product != null) && (product != undefined)) ? ((INC_COL.config.language == "en") ? product["ShortDescription"] : product["Field5"]) : "";
    this.ratingsCount = ((product != null) && (product != undefined)) ? product["Field3"].split('|')[1] : "";
    this.reviewsCount = ((product != null) && (product != undefined)) ? product["Field3"].split('|')[0]: "";
    this.worthPrice = ((product != null) && (product != undefined)) ? product["Field3"] : "";
    this.ProductStatus = ((product != null) && (product != undefined)) ? product["productStatus"] : "";
    this.Quantity = ((product != null) && (product != undefined)) ? product["quantity"] : "";
    var product_id = "";
    if (document.querySelector('#product_addtocart_form') != null) {
        product_id = document.querySelector('#product_addtocart_form').getAttribute('data-product-sku').split('_')[0];
    }
    // INC_COL.config.bundle_show_flag = true;
    if(product.childProductId_d == product_id &&  product["attributeCode"] != "size"){
    
        var prd_name_c=""
        if(document.querySelector('.page-title-wrapper span') != null){
            var prd_name_c = document.querySelector('.page-title-wrapper span').innerText
        }
        
        
        if(product.optionText != "" && product.optionText != undefined){
            if(prd_name_c.toLocaleLowerCase().indexOf(product.optionText.trim().toLocaleLowerCase()) >= 0){
                INC_COL.config.bundle_show_flag = true;
            }
        }
    }
    this.ProductType = product["ProductType"];
    
}

INC_COL.classes.FindObj = function (findObj) {
    this.id = (findObj != null && findObj != undefined) ? findObj.id : "";
    this.sku = (findObj != null && findObj != undefined) ? findObj.sku : "";
    this.mainId = (findObj != null && findObj != undefined) ? findObj.mainId : "";
    this.colorText = (findObj != null && findObj != undefined) ? findObj.colorText : "";
    this.sizeText = (findObj != null && findObj != undefined) ? findObj.sizeText : "";
}

INC_COL.classes.NWConfig = function (nwConfigObj) {
    this.url = (nwConfigObj != null && nwConfigObj != undefined) ? nwConfigObj.url : "";
    this.method = (nwConfigObj != null && nwConfigObj != undefined) ? nwConfigObj.method : "GET";
    this.params = (nwConfigObj != null && nwConfigObj != undefined) ? nwConfigObj.params : "";
}

if (window.innerWidth > 768){
    INC_COL.uiConfig = {
        collection: {
            className: {
                collectionModalBlock: prefix + "collection" + postfix,
                productModuleBlock: prefix + "product_module" + postfix,
                productModalBlock: prefix + "product_modal" + postfix,
                productShowcaseBlock: prefix + "product_showcase" + postfix,
                productBlock: prefix + "product" + postfix,
                productHeaderBlock: prefix + "product_header" + postfix,
                productHeaderTitleBlock: prefix + "product_header_title" + postfix,
                productHeaderTitleTextBlock: prefix + "product_header_title_text" + postfix,
                productHeaderTitleText: prefix + "product_header_title_text",
                productHeaderImgBlock: prefix + "product_header_img" + postfix,
                productHeaderImg: prefix + "product_header_img",
                productImgBlock: prefix + "product_img" + postfix,
                productImgMainBlock: prefix + "product_img_main" + postfix,
                productImgMainImgBlock: prefix + "product_img_main_img" + postfix,
                productImgMainImg: prefix + "product_img_main_img",
                productImgMainZoomBlock: prefix + "product_img_main_zoom" + postfix,
                productImgMainZoomBtnBlock: prefix + "product_img_main_zoom_btn" + postfix,
                productImgMainZoomBtnImgBlock: prefix + "product_img_main_zoom_btn_img" + postfix,
                productImgMainZoomBtnImg: prefix + "product_img_main_zoom_btn_img",
                productImgMainZoomBtnTextBlock: prefix + "product_img_main_zoom_btn_text" + postfix,
                productImgMainZoomBtnText: prefix + "product_img_main_zoom_btn_text",
                productImgGalleryBlock: prefix + "product_img_gallery" + postfix,
                productImgGalleryHeaderBlock: prefix + "producy_img_gallery_header" + postfix,
                productImgGalleryHeaderTitleBlock: prefix + "product_img_gallery_header_title" + postfix,
                productImgGalleryHeaderTitleImgBlock: prefix + "product_img_gallery_header_title_img" + postfix,
                productImgGalleryHeaderTitleImg: prefix + "product_img_gallery_header_title_img",
                productImgGalleryHeaderTitleTextBlock: prefix + "product_img_gallery_header_title_text" + postfix,
                productImgGalleryHeaderTitleText: prefix + "product_img_gallery_header_title_text",
                productImgGalleryHeaderToggleBlock: prefix + "product_img_gallery_header_toggle" + postfix,
                productImgGalleryHeaderToggleImgBlock: prefix + "product_img_gallery_header_toggle_img" + postfix,
                productImgGalleryHeaderToggleImg: prefix + "product_img_gallery_header_toggle_img",
                productImgGalleryHeaderToggleTextBlock: prefix + "product_img_gallery_header_toggle_text" + postfix,
                productImgGalleryHeaderToggleText: prefix + "product_img_gallery_header_toggle_text",
                productImgGalleryLeftBlock: prefix + "product_img_gallery_left" + postfix,
                productImgGalleryLeftBtnBlock: prefix + "product_img_gallery_left_btn" + postfix,
                productImgGalleryLeftBtnImgBlock: prefix + "product_img_gallery_left_btn_img" + postfix,
                productImgGalleryLeftBtnImg: prefix + "product_img_gallery_left_btn_img",
                productImgGalleryLeftBtnTextBlock: prefix + "product_img_gallery_left_btn_text" + postfix,
                productImgGalleryLeftBtnText: prefix + "product_img_gallery_left_btn_text",
                productImgGalleryListBlock: prefix + "product_img_gallery_list" + postfix,
                productImgGalleryListItemBlock: prefix + "product_img_gallery_list_item" + postfix,
                productImgGalleryListItemImgBlock: prefix + "product_img_gallery_list_item_img" + postfix,
                productImgGalleryListItemImg: prefix + "product_img_gallery_list_item_img",
                productImgGalleryListItemTextBlock: prefix + "product_img_gallery_list_item_text" + postfix,
                productImgGalleryListItemText: prefix + "product_img_gallery_list_item_text",
                productImgGalleryRightBlock: prefix + "product_img_gallery_right" + postfix,
                productImgGalleryRightBtnBlock: prefix + "product_img_gallery_right_btn" + postfix,
                productImgGalleryRightBtnImgBlock: prefix + "product_img_gallery_right_btn_img" + postfix,
                productImgGalleryRightBtnImg: prefix + "product_img_gallery_right_btn_img",
                productImgGalleryRightBtnTextBlock: prefix + "product_img_gallery_right_btn_text" + postfix,
                productImgGalleryRightBtnText: prefix + "product_img_gallery_right_btn_text",
                productDescBlock: prefix + "product_desc" + postfix,
                productTitleBlock: prefix + "product_desc_title" + postfix,
                productTitleTextBlock: prefix + "product_desc_title_text" + postfix,
                productTitleText: prefix + "product_desc_title_text",
                productRatingsBlock: prefix + "product_desc_ratings" + postfix,
                productInfoBlock: prefix + "product_desc_info" + postfix,
                productInfoImgBlock: prefix + "product_desc_info_img" + postfix,
                productInfoImg: prefix + "product_desc_info_img",
                productInfoTextBlock: prefix + "product_desc_info_text" + postfix,
                productInfoText: prefix + "product_desc_info_text",
                productInfoFullDescBlock: prefix + "product_Info_Full_desc_info" + postfix,
                productInfoFullDescText: prefix + "product_Info_Full_desc_info_text",
                productPriceBlock: prefix + "product_desc_price" + postfix,
                productPriceLabel: prefix + "product_price_label" + postfix,
                productPriceActiveBlock: prefix + "product_desc_price_active" + postfix,
                productPriceActiveTextBlock: prefix + "product_desc_price_active_text" + postfix,
                productPriceActiveText: prefix + "product_desc_price_active_text",
                productPriceActiveTextMsg: prefix + "product_desc_price_active_text_msg",
                productPriceRegularBlock: prefix + "product_desc_price_regular" + postfix,
                productPriceRegularTextBlock: prefix + "product_desc_price_regular_text" + postfix,
                productPriceRegularText: prefix + "product_desc_price_regular_text",
                productPriceWorthBlock: prefix + "product_desc_price_worth" + postfix,
                productPriceWorthTextBlock: prefix + "product_desc_price_worth_text" + postfix,
                productPriceWorthText: prefix + "product_desc_price_worth_text",
                productPriceWorthTextMsg: prefix + "product_desc_price_worth_text_msg",
                productAttBlock: prefix + "product_desc_att" + postfix,
                productAttColorBlock: prefix + "product_desc_att_color" + postfix,
                productAttColorTitleBlock: prefix + "product_desc_att_color_title" + postfix,
                productAttColorTitleTextBlock: prefix + "product_desc_att_color_title_text" + postfix,
                productAttColorTitleText: prefix + "product_desc_att_color_title_text",
                productAttColorTitleTextSelected: prefix + "product_desc_att_color_title_text_selected",
                productAttColorListBlock: prefix + "product_desc_att_color_list" + postfix,
                productAttColorListItemBlock: prefix + "product_desc_att_color_list_item" + postfix,
                productAttColorListItemImgBlock: prefix + "product_desc_att_color_list_item_img" + postfix,
                productAttColorListItemImg: prefix + "product_desc_att_color_list_item_img",
                productAttColorListItemTextBlock: prefix + "product_desc_att_color_list_item_text" + postfix,
                productAttColorListItemText: prefix + "product_desc_att_color_list_item_text",
                productAttSizeBlock: prefix + "product_desc_att_size" + postfix,
                productAttSizeTitleBlock: prefix + "product_desc_att_size_title" + postfix,
                productAttSizeTitleTextBlock: prefix + "product_desc_att_size_title_text" + postfix,
                productAttSizeTitleText: prefix + "product_desc_att_size_title_text",
                productAttSizeTitleTextSelected: prefix + "product_desc_att_size_title_text_selected",
                productAttSizeListBlock: prefix + "product_desc_att_size_list" + postfix,
                productAttSizeListItemBlock: prefix + "product_desc_att_size_list_item" + postfix,
                productAttSizeListItemImgBlock: prefix + "product_desc_att_size_list_item_img" + postfix,
                productAttSizeListItemImg: prefix + "product_desc_att_size_list_item_img",
                productAttSizeListItemTextBlock: prefix + "product_desc_att_size_list_item_text" + postfix,
                productAttSizeListItemText: prefix + "product_desc_att_size_list_item_text",
                productAttzeroBlock: prefix + "product_desc_att_zero" + postfix,
                productAttzeroTitleBlock: prefix + "product_desc_att_zero_title" + postfix,
                productAttzeroTitleTextBlock: prefix + "product_desc_att_zero_title_text" + postfix,
                productAttzeroTitleText: prefix + "product_desc_att_zero_title_text",
                productAttzeroTitleTextSelected: prefix + "product_desc_att_zero_title_text_selected",
                productAttzeroListBlock: prefix + "product_desc_att_zero_list" + postfix,
                productAttzeroListItemBlock: prefix + "product_desc_att_zero_list_item" + postfix,
                productAttzeroListItemImgBlock: prefix + "product_desc_att_zero_list_item_img" + postfix,
                productAttzeroListItemImg: prefix + "product_desc_att_zero_list_item_img",
                productAttzeroListItemTextBlock: prefix + "product_desc_att_zero_list_item_text" + postfix,
                productAttzeroListItemText: prefix + "product_desc_att_zero_list_item_text",
                productAttthirdBlock: prefix + "product_desc_att_third" + postfix,
                productAttthirdTitleBlock: prefix + "product_desc_att_third_title" + postfix,
                productAttthirdTitleTextBlock: prefix + "product_desc_att_third_title_text" + postfix,
                productAttthirdTitleText: prefix + "product_desc_att_third_title_text",
                productAttthirdTitleTextSelected: prefix + "product_desc_att_third_title_text_selected",
                productAttthirdListBlock: prefix + "product_desc_att_third_list" + postfix,
                productAttthirdListItemBlock: prefix + "product_desc_att_third_list_item" + postfix,
                productAttthirdListItemImgBlock: prefix + "product_desc_att_third_list_item_img" + postfix,
                productAttthirdListItemImg: prefix + "product_desc_att_third_list_item_img",
                productAttthirdListItemTextBlock: prefix + "product_desc_att_third_list_item_text" + postfix,
                productAttthirdListItemText: prefix + "product_desc_att_third_list_item_text",
                productAttfourthBlock: prefix + "product_desc_att_fourth" + postfix,
                productAttfourthTitleBlock: prefix + "product_desc_att_fourth_title" + postfix,
                productAttfourthTitleTextBlock: prefix + "product_desc_att_fourth_title_text" + postfix,
                productAttfourthTitleText: prefix + "product_desc_att_fourth_title_text",
                productAttfourthTitleTextSelected: prefix + "product_desc_att_fourth_title_text_selected",
                productAttfourthListBlock: prefix + "product_desc_att_fourth_list" + postfix,
                productAttfourthListItemBlock: prefix + "product_desc_att_fourth_list_item" + postfix,
                productAttfourthListItemImgBlock: prefix + "product_desc_att_fourth_list_item_img" + postfix,
                productAttfourthListItemImg: prefix + "product_desc_att_fourth_list_item_img",
                productAttfourthListItemTextBlock: prefix + "product_desc_att_fourth_list_item_text" + postfix,
                productAttfourthListItemText: prefix + "product_desc_att_fourth_list_item_text",

                productAttEditText: prefix + "product_desc_att_edit_text",
                productAttEditBlock: prefix + "product_desc_att_edit" + postfix,
                productInStockBlock: prefix + "product_instock" + postfix,
                productPackOfBlock: prefix + "product_desc_pack_of" + postfix,
                productPackOfLeftBlock: prefix + "product_desc_pack_of_left" + postfix,
                productPackOfListBlock: prefix + "product_desc_pack_of_list" + postfix,
                productPackOfRightBlock: prefix + "product_desc_pack_of_right" + postfix,
                productPackOfLeftBtnBlock: prefix + "product_desc_pack_of_left_btn" + postfix,
                productPackOfLeftBtnImgBlock: prefix + "product_desc_pack_of_left_btn_img" + postfix,
                productPackOfLeftBtnImg: prefix + "product_desc_pack_of_left_btn_img",
                productPackOfRightBtnBlock: prefix + "product_desc_pack_of_right_btn" + postfix,
                productPackOfRightBtnImgBlock: prefix + "product_desc_pack_of_right_btn_img" + postfix,
                productPackOfRightBtnImg: prefix + "product_desc_pack_of_right_btn_img",
                productPackOfItemBlock: prefix + "product_desc_pack_of_item" + postfix,
                productPackOfItemTitleBlock: prefix + "product_desc_pack_of_item_title" + postfix,
                productPackOfItemTitleTextBlock: prefix + "product_desc_pack_of_item_title_text" + postfix,
                productPackOfItemTitleText: prefix + "product_desc_pack_of_item_title_text",
                productPackOfItemImgBlock: prefix + "product_desc_pack_of_item_img" + postfix,
                productPackOfItemImg: prefix + "product_desc_pack_of_item_img",
                productPackOfItemQuantityBlock: prefix + "product_desc_pack_of_item_quantity" + postfix,
                productPackOfItemQuantityTextBlock: prefix + "product_desc_pack_of_item_quantity_text" + postfix,
                productPackOfItemQuantityText: prefix + "product_desc_pack_of_item_quantity_text",
                productPackOfItemPriceBlock: prefix + "product_desc_pack_of_item_price" + postfix,
                productPackOfItemPriceRegularBlock: prefix + "product_desc_pack_of_item_price_regular" + postfix,
                productPackOfItemPriceRegularTextBlock: prefix + "product_desc_pack_of_item_price_regular_text" + postfix,
                productPackOfItemPriceRegularText: prefix + "product_desc_pack_of_item_price_regular_text",
                productPackOfItemPriceActiveBlock: prefix + "product_desc_pack_of_item_price_active" + postfix,
                productPackOfItemPriceActiveTextBlock: prefix + "product_desc_pack_of_item_price_active_text" + postfix,
                productPackOfItemPriceActiveText: prefix + "product_desc_pack_of_item_price_active_text",
                productQtyAddBtnBlock: prefix + "product_desc_qty_add_btn" + postfix,
                productQtyBlock: prefix + "product_desc_qty" + postfix,
                productQtyDownBlock: prefix + "product_desc_qty_down" + postfix,
                productQtyDownBtnBlock: prefix + "product_desc_qty_down_btn" + postfix,
                productQtyDownBtn: prefix + "product_desc_qty_down_btn",
                productQtyInputBlock: prefix + "product_desc_qty_input" + postfix,
                productQtyInputTextBlock: prefix + "product_desc_qty_input_text" + postfix,
                productQtyInputText: prefix + "product_desc_qty_input_text",
                productQtyUpBlock: prefix + "product_desc_qty_up" + postfix,
                productQtyUpBtnBlock: prefix + "product_desc_qty_up_btn" + postfix,
                productQtyUpBtn: prefix + "product_desc_qty_up_btn",
                productAddBlock: prefix + "product_desc_add" + postfix,
                productAddTextBlock: prefix + "product_desc_add_text" + postfix,
                productAddText: prefix + "product_desc_add_text",
                productAddImgBlock: prefix + "product_desc_add_img" + postfix,
                productAddImg: prefix + "product_desc_add_img",
                productAddErrText: prefix + "product_desc_add_err_text" + postfix,
            },
            dom: {
                collectionModalBlock: ["productModuleBlock"],
                productModuleBlock: ["productShowcaseBlock", "productModalBlock"],
                productShowcaseBlock: ["productBlock"],
                productModalBlock: ["productBlock"],
                productBlock: ["productHeaderBlock", "productImgBlock", "productDescBlock"],
                productHeaderBlock: ["productHeaderTitleBlock", "productHeaderImgBlock"],
                productHeaderTitleBlock: ["productHeaderTitleTextBlock"],
                productHeaderTitleTextBlock: ["productHeaderTitleText"],
                productHeaderImgBlock: ["productHeaderImg"],
                productImgBlock: ["productImgMainBlock", "productImgGalleryBlock"],
                productImgMainBlock: ["productImgMainImgBlock", "productImgMainZoomBlock"],
                productImgMainImgBlock: ["productImgMainImg"],
                productImgMainZoomBlock: ["productImgMainZoomBtnBlock"],
                productImgMainZoomBtnBlock: ["productImgMainZoomBtnImgBlock", "productImgMainZoomBtnTextBlock"],
                productImgMainZoomBtnImgBlock: ["productImgMainZoomBtnImg"],
                productImgMainZoomBtnTextBlock: ["productImgMainZoomBtnText"],
                productImgGalleryBlock: ["productImgGalleryHeaderBlock", "productImgGalleryLeftBlock", "productImgGalleryListBlock", "productImgGalleryRightBlock"],
                productImgGalleryHeaderBlock: ["productImgGalleryHeaderTitleBlock", "productImgGalleryHeaderToggleBlock"],
                productImgGalleryHeaderTitleBlock: ["productImgGalleryHeaderTitleImgBlock", "productImgGalleryHeaderTitleTextBlock"],
                productImgGalleryHeaderTitleImgBlock: ["productImgGalleryHeaderTitleImg"],
                productImgGalleryHeaderTitleTextBlock: ["productImgGalleryHeaderTitleText"],
                productImgGalleryHeaderToggleBlock: ["productImgGalleryHeaderToggleImgBlock", "productImgGalleryHeaderToggleTextBlock"],
                productImgGalleryHeaderToggleImgBlock: ["productImgGalleryHeaderToggleImg"],
                productImgGalleryHeaderToggleTextBlock: ["productImgGalleryHeaderToggleText"],
                productImgGalleryBlock: ["productImgGalleryLeftBlock", "productImgGalleryListBlock", "productImgGalleryRightBlock"],
                productImgGalleryLeftBlock: ["productImgGalleryLeftBtnBlock"],
                productImgGalleryLeftBtnBlock: ["productImgGalleryLeftBtnImgBlock", "productImgGalleryLeftBtnTextBlock"],
                productImgGalleryLeftBtnImgBlock: ["productImgGalleryLeftBtnImg"],
                productImgGalleryLeftBtnTextBlock: ["productImgGalleryLeftBtnText"],
                productImgGalleryListBlock: ["productImgGalleryListItemBlock"],
                productImgGalleryListItemBlock: ["productImgGalleryListItemImgBlock", "productImgGalleryListItemTextBlock"],
                productImgGalleryListItemImgBlock: ["productImgGalleryListItemImg"],
                productImgGalleryListItemTextBlock: ["productImgGalleryListItemText"],
                productImgGalleryRightBlock: ["productImgGalleryRightBtnBlock"],
                productImgGalleryRightBtnBlock: ["productImgGalleryRightBtnImgBlock", "productImgGalleryRightBtnTextBlock"],
                productImgGalleryRightBtnImgBlock: ["productImgGalleryRightBtnImg"],
                productImgGalleryRightBtnTextBlock: ["productImgGalleryRightBtnText"],
                productDescBlock: ["productTitleBlock","productRatingsBlock","productPriceBlock", "productInfoBlock", "productAttBlock","productInStockBlock", "productPackOfBlock",  "productQtyAddBtnBlock"],
                productTitleBlock: ["productTitleTextBlock"],
                productTitleTextBlock: ["productTitleText"],
                productInfoBlock: ["productInfoImgBlock", "productInfoTextBlock","productInfoFullDescBlock"],
                productInfoImgBlock: ["productInfoImg"],
                productInfoTextBlock: ["productInfoText"],
                productInfoFullDescBlock: ["productInfoFullDescText"],
                productPriceBlock: ["productPriceLabel", "productPriceActiveBlock", "productPriceRegularBlock","productPriceWorthBlock"],
                productPriceActiveBlock: ["productPriceActiveTextBlock"],
                productPriceActiveTextBlock: ["productPriceActiveText", "productPriceActiveTextMsg"],
                productPriceRegularBlock: ["productPriceRegularTextBlock"],
                productPriceRegularTextBlock: ["productPriceRegularText"],
                productPriceWorthBlock: ["productPriceWorthTextBlock"],
                productPriceWorthTextBlock: ["productPriceWorthText","productPriceWorthTextMsg"],
                
                productAttBlock: ["productAddErrText","productAttzeroBlock","productAttSizeBlock", "productAttthirdBlock","productAttColorBlock","productAttfourthBlock","productAttEditBlock"],
                productAttColorBlock: ["productAttColorTitleBlock", "productAttColorListBlock"],
                productAttColorTitleBlock: ["productAttColorTitleTextBlock"],
                productAttColorTitleTextBlock: ["productAttColorTitleText", "productAttColorTitleTextSelected"],
                productAttColorListBlock: ["productAttColorListItemBlock"],
                productAttColorListItemBlock: ["productAttColorListItemImgBlock", "productAttColorListItemTextBlock"],
                productAttColorListItemImgBlock: ["productAttColorListItemImg"],
                productAttColorListItemTextBlock: ["productAttColorListItemText"],
                
                productAttzeroBlock: ["productAttzeroTitleBlock", "productAttzeroListBlock"],
                productAttzeroTitleBlock: ["productAttzeroTitleTextBlock"],
                productAttzeroTitleTextBlock: ["productAttzeroTitleText", "productAttzeroTitleTextSelected"],
                productAttzeroListBlock: ["productAttzeroListItemBlock"],
                productAttzeroListItemBlock: ["productAttzeroListItemImgBlock", "productAttzeroListItemTextBlock"],
                productAttzeroListItemImgBlock: ["productAttzeroListItemImg"],
                productAttzeroListItemTextBlock: ["productAttzeroListItemText"],

                productAttthirdBlock: ["productAttthirdTitleBlock", "productAttthirdListBlock"],
                productAttthirdTitleBlock: ["productAttthirdTitleTextBlock"],
                productAttthirdTitleTextBlock: ["productAttthirdTitleText", "productAttthirdTitleTextSelected"],
                productAttthirdListBlock: ["productAttthirdListItemBlock"],
                productAttthirdListItemBlock: ["productAttthirdListItemImgBlock", "productAttthirdListItemTextBlock"],
                productAttthirdListItemImgBlock: ["productAttthirdListItemImg"],
                productAttthirdListItemTextBlock: ["productAttthirdListItemText"],

                productAttfourthBlock: ["productAttfourthTitleBlock", "productAttfourthListBlock"],
                productAttfourthTitleBlock: ["productAttfourthTitleTextBlock"],
                productAttfourthTitleTextBlock: ["productAttfourthTitleText", "productAttfourthTitleTextSelected"],
                productAttfourthListBlock: ["productAttfourthListItemBlock"],
                productAttfourthListItemBlock: ["productAttfourthListItemImgBlock", "productAttfourthListItemTextBlock"],
                productAttfourthListItemImgBlock: ["productAttfourthListItemImg"],
                productAttfourthListItemTextBlock: ["productAttfourthListItemText"],

                productAttSizeBlock: ["productAttSizeTitleBlock", "productAttSizeListBlock"],
                productAttSizeTitleBlock: ["productAttSizeTitleTextBlock"],
                productAttSizeTitleTextBlock: ["productAttSizeTitleText", "productAttSizeTitleTextSelected"],
                productAttSizeListBlock: ["productAttSizeListItemBlock"],
                productAttSizeListItemBlock: ["productAttSizeListItemImgBlock", "productAttSizeListItemTextBlock"],
                productAttSizeListItemImgBlock: ["productAttSizeListItemImg"],
                productAttSizeListItemTextBlock: ["productAttSizeListItemText"],

                productAttEditBlock: ["productAttEditText"],
                productPackOfBlock: ["productPackOfLeftBlock", "productPackOfListBlock", "productPackOfRightBlock"],
                productPackOfLeftBlock: ["productPackOfLeftBtnBlock"],
                productPackOfLeftBtnBlock: ["productPackOfLeftBtnImgBlock"],
                productPackOfLeftBtnImgBlock: ["productPackOfLeftBtnImg"],
                productPackOfRightBlock: ["productPackOfRightBtnBlock"],
                productPackOfRightBtnBlock: ["productPackOfRightBtnImgBlock"],
                productPackOfRightBtnImgBlock: ["productPackOfRightBtnImg"],
                productPackOfListBlock: ["productPackOfItemBlock"],
                productPackOfItemBlock: ["productPackOfItemImgBlock", "productPackOfItemTitleBlock", "productPackOfItemQuantityBlock", "productPackOfItemPriceBlock"],
                productPackOfItemImgBlock: ["productPackOfItemImg"],
                productPackOfItemTitleBlock: ["productPackOfItemTitleTextBlock"],
                productPackOfItemTitleTextBlock: ["productPackOfItemTitleText"],
                productPackOfItemQuantityBlock: ["productPackOfItemQuantityTextBlock"],
                productPackOfItemQuantityTextBlock: ["productPackOfItemQuantityText"],
                productPackOfItemPriceBlock: ["productPackOfItemPriceActiveBlock", "productPackOfItemPriceRegularBlock"],
                productPackOfItemPriceActiveBlock: ["productPackOfItemPriceActiveTextBlock"],
                productPackOfItemPriceActiveTextBlock: ["productPackOfItemPriceActiveText"],
                productPackOfItemPriceRegularBlock: ["productPackOfItemPriceRegularTextBlock"],
                productPackOfItemPriceRegularTextBlock: ["productPackOfItemPriceRegularText"],
                productQtyAddBtnBlock: ["productQtyBlock","productAddBlock"],
                productQtyBlock: ["productQtyDownBlock", "productQtyInputBlock", "productQtyUpBlock"],
                productQtyDownBlock: ["productQtyDownBtnBlock"],
                productQtyDownBtnBlock: ["productQtyDownBtn"],
                productQtyUpBlock: ["productQtyUpBtnBlock"],
                productQtyUpBtnBlock: ["productQtyUpBtn"],
                productQtyInputBlock: ["productQtyInputTextBlock"],
                productQtyInputTextBlock: ["productQtyInputText"],
                productAddBlock: ["productAddImgBlock", "productAddTextBlock"],
                productAddTextBlock: ["productAddText"],
                productAddImgBlock: ["productAddImg"],
            }
        },
    }
} else {
    INC_COL.uiConfig = {
        collection: {
            className: {
                collectionModalBlock: prefix + "collection" + postfix,
                productModuleBlock: prefix + "product_module" + postfix,
                productModalBlock: prefix + "product_modal" + postfix,
                productShowcaseBlock: prefix + "product_showcase" + postfix,
                productBlock: prefix + "product" + postfix,
                productHeaderBlock: prefix + "product_header" + postfix,
                productHeaderTitleBlock: prefix + "product_header_title" + postfix,
                productHeaderTitleTextBlock: prefix + "product_header_title_text" + postfix,
                productHeaderTitleText: prefix + "product_header_title_text",
                productHeaderImgBlock: prefix + "product_header_img" + postfix,
                productHeaderImg: prefix + "product_header_img",
                productImgBlock: prefix + "product_img" + postfix,
                productImgMainBlock: prefix + "product_img_main" + postfix,
                productImgMainImgBlock: prefix + "product_img_main_img" + postfix,
                productImgMainImg: prefix + "product_img_main_img",
                productImgMainZoomBlock: prefix + "product_img_main_zoom" + postfix,
                productImgMainZoomBtnBlock: prefix + "product_img_main_zoom_btn" + postfix,
                productImgMainZoomBtnImgBlock: prefix + "product_img_main_zoom_btn_img" + postfix,
                productImgMainZoomBtnImg: prefix + "product_img_main_zoom_btn_img",
                productImgMainZoomBtnTextBlock: prefix + "product_img_main_zoom_btn_text" + postfix,
                productImgMainZoomBtnText: prefix + "product_img_main_zoom_btn_text",
                productImgGalleryBlock: prefix + "product_img_gallery" + postfix,
                productImgGalleryHeaderBlock: prefix + "producy_img_gallery_header" + postfix,
                productImgGalleryHeaderTitleBlock: prefix + "product_img_gallery_header_title" + postfix,
                productImgGalleryHeaderTitleImgBlock: prefix + "product_img_gallery_header_title_img" + postfix,
                productImgGalleryHeaderTitleImg: prefix + "product_img_gallery_header_title_img",
                productImgGalleryHeaderTitleTextBlock: prefix + "product_img_gallery_header_title_text" + postfix,
                productImgGalleryHeaderTitleText: prefix + "product_img_gallery_header_title_text",
                productImgGalleryHeaderToggleBlock: prefix + "product_img_gallery_header_toggle" + postfix,
                productImgGalleryHeaderToggleImgBlock: prefix + "product_img_gallery_header_toggle_img" + postfix,
                productImgGalleryHeaderToggleImg: prefix + "product_img_gallery_header_toggle_img",
                productImgGalleryHeaderToggleTextBlock: prefix + "product_img_gallery_header_toggle_text" + postfix,
                productImgGalleryHeaderToggleText: prefix + "product_img_gallery_header_toggle_text",
                productImgGalleryLeftBlock: prefix + "product_img_gallery_left" + postfix,
                productImgGalleryLeftBtnBlock: prefix + "product_img_gallery_left_btn" + postfix,
                productImgGalleryLeftBtnImgBlock: prefix + "product_img_gallery_left_btn_img" + postfix,
                productImgGalleryLeftBtnImg: prefix + "product_img_gallery_left_btn_img",
                productImgGalleryLeftBtnTextBlock: prefix + "product_img_gallery_left_btn_text" + postfix,
                productImgGalleryLeftBtnText: prefix + "product_img_gallery_left_btn_text",
                productImgGalleryListBlock: prefix + "product_img_gallery_list" + postfix,
                productImgGalleryListItemBlock: prefix + "product_img_gallery_list_item" + postfix,
                productImgGalleryListItemImgBlock: prefix + "product_img_gallery_list_item_img" + postfix,
                productImgGalleryListItemImg: prefix + "product_img_gallery_list_item_img",
                productImgGalleryListItemTextBlock: prefix + "product_img_gallery_list_item_text" + postfix,
                productImgGalleryListItemText: prefix + "product_img_gallery_list_item_text",
                productImgGalleryRightBlock: prefix + "product_img_gallery_right" + postfix,
                productImgGalleryRightBtnBlock: prefix + "product_img_gallery_right_btn" + postfix,
                productImgGalleryRightBtnImgBlock: prefix + "product_img_gallery_right_btn_img" + postfix,
                productImgGalleryRightBtnImg: prefix + "product_img_gallery_right_btn_img",
                productImgGalleryRightBtnTextBlock: prefix + "product_img_gallery_right_btn_text" + postfix,
                productImgGalleryRightBtnText: prefix + "product_img_gallery_right_btn_text",
                productDescBlock: prefix + "product_desc" + postfix,
                productTitleBlock: prefix + "product_desc_title" + postfix,
                productTitleTextBlock: prefix + "product_desc_title_text" + postfix,
                productTitleText: prefix + "product_desc_title_text",
                productRatingsBlock: prefix + "product_desc_ratings" + postfix,
                productInfoBlock: prefix + "product_desc_info" + postfix,
                productInfoImgBlock: prefix + "product_desc_info_img" + postfix,
                productInfoImg: prefix + "product_desc_info_img",
                productInfoTextBlock: prefix + "product_desc_info_text" + postfix,
                productInfoText: prefix + "product_desc_info_text",
                productInfoFullDescBlock: prefix + "product_Info_Full_desc_info" + postfix,
                productInfoFullDescText: prefix + "product_Info_Full_desc_info_text",
                productPriceBlock: prefix + "product_desc_price" + postfix,
                productPriceLabel: prefix + "product_price_label" + postfix,
                productPriceActiveBlock: prefix + "product_desc_price_active" + postfix,
                productPriceActiveTextBlock: prefix + "product_desc_price_active_text" + postfix,
                productPriceActiveText: prefix + "product_desc_price_active_text",
                productPriceActiveTextMsg: prefix + "product_desc_price_active_text_msg",
                productPriceRegularBlock: prefix + "product_desc_price_regular" + postfix,
                productPriceRegularTextBlock: prefix + "product_desc_price_regular_text" + postfix,
                productPriceRegularText: prefix + "product_desc_price_regular_text",
                productPriceWorthBlock: prefix + "product_desc_price_worth" + postfix,
                productPriceWorthTextBlock: prefix + "product_desc_price_worth_text" + postfix,
                productPriceWorthText: prefix + "product_desc_price_worth_text",
                productPriceWorthTextMsg: prefix + "product_desc_price_worth_text_msg",
                productAttBlock: prefix + "product_desc_att" + postfix,
                productAttColorBlock: prefix + "product_desc_att_color" + postfix,
                productAttColorTitleBlock: prefix + "product_desc_att_color_title" + postfix,
                productAttColorTitleTextBlock: prefix + "product_desc_att_color_title_text" + postfix,
                productAttColorTitleText: prefix + "product_desc_att_color_title_text",
                productAttColorTitleTextSelected: prefix + "product_desc_att_color_title_text_selected",
                productAttColorListBlock: prefix + "product_desc_att_color_list" + postfix,
                productAttColorListItemBlock: prefix + "product_desc_att_color_list_item" + postfix,
                productAttColorListItemImgBlock: prefix + "product_desc_att_color_list_item_img" + postfix,
                productAttColorListItemImg: prefix + "product_desc_att_color_list_item_img",
                productAttColorListItemTextBlock: prefix + "product_desc_att_color_list_item_text" + postfix,
                productAttColorListItemText: prefix + "product_desc_att_color_list_item_text",
                productAttSizeBlock: prefix + "product_desc_att_size" + postfix,
                productAttSizeTitleBlock: prefix + "product_desc_att_size_title" + postfix,
                productAttSizeTitleTextBlock: prefix + "product_desc_att_size_title_text" + postfix,
                productAttSizeTitleText: prefix + "product_desc_att_size_title_text",
                productAttSizeTitleTextSelected: prefix + "product_desc_att_size_title_text_selected",
                productAttSizeListBlock: prefix + "product_desc_att_size_list" + postfix,
                productAttSizeListItemBlock: prefix + "product_desc_att_size_list_item" + postfix,
                productAttSizeListItemImgBlock: prefix + "product_desc_att_size_list_item_img" + postfix,
                productAttSizeListItemImg: prefix + "product_desc_att_size_list_item_img",
                productAttSizeListItemTextBlock: prefix + "product_desc_att_size_list_item_text" + postfix,
                productAttSizeListItemText: prefix + "product_desc_att_size_list_item_text",
                productAttzeroBlock: prefix + "product_desc_att_zero" + postfix,
                productAttzeroTitleBlock: prefix + "product_desc_att_zero_title" + postfix,
                productAttzeroTitleTextBlock: prefix + "product_desc_att_zero_title_text" + postfix,
                productAttzeroTitleText: prefix + "product_desc_att_zero_title_text",
                productAttzeroTitleTextSelected: prefix + "product_desc_att_zero_title_text_selected",
                productAttzeroListBlock: prefix + "product_desc_att_zero_list" + postfix,
                productAttzeroListItemBlock: prefix + "product_desc_att_zero_list_item" + postfix,
                productAttzeroListItemImgBlock: prefix + "product_desc_att_zero_list_item_img" + postfix,
                productAttzeroListItemImg: prefix + "product_desc_att_zero_list_item_img",
                productAttzeroListItemTextBlock: prefix + "product_desc_att_zero_list_item_text" + postfix,
                productAttzeroListItemText: prefix + "product_desc_att_zero_list_item_text",
                productAttthirdBlock: prefix + "product_desc_att_third" + postfix,
                productAttthirdTitleBlock: prefix + "product_desc_att_third_title" + postfix,
                productAttthirdTitleTextBlock: prefix + "product_desc_att_third_title_text" + postfix,
                productAttthirdTitleText: prefix + "product_desc_att_third_title_text",
                productAttthirdTitleTextSelected: prefix + "product_desc_att_third_title_text_selected",
                productAttthirdListBlock: prefix + "product_desc_att_third_list" + postfix,
                productAttthirdListItemBlock: prefix + "product_desc_att_third_list_item" + postfix,
                productAttthirdListItemImgBlock: prefix + "product_desc_att_third_list_item_img" + postfix,
                productAttthirdListItemImg: prefix + "product_desc_att_third_list_item_img",
                productAttthirdListItemTextBlock: prefix + "product_desc_att_third_list_item_text" + postfix,
                productAttthirdListItemText: prefix + "product_desc_att_third_list_item_text",
                productAttfourthBlock: prefix + "product_desc_att_fourth" + postfix,
                productAttfourthTitleBlock: prefix + "product_desc_att_fourth_title" + postfix,
                productAttfourthTitleTextBlock: prefix + "product_desc_att_fourth_title_text" + postfix,
                productAttfourthTitleText: prefix + "product_desc_att_fourth_title_text",
                productAttfourthTitleTextSelected: prefix + "product_desc_att_fourth_title_text_selected",
                productAttfourthListBlock: prefix + "product_desc_att_fourth_list" + postfix,
                productAttfourthListItemBlock: prefix + "product_desc_att_fourth_list_item" + postfix,
                productAttfourthListItemImgBlock: prefix + "product_desc_att_fourth_list_item_img" + postfix,
                productAttfourthListItemImg: prefix + "product_desc_att_fourth_list_item_img",
                productAttfourthListItemTextBlock: prefix + "product_desc_att_fourth_list_item_text" + postfix,
                productAttfourthListItemText: prefix + "product_desc_att_fourth_list_item_text",

                productAttEditText: prefix + "product_desc_att_edit_text",
                productAttEditBlock: prefix + "product_desc_att_edit" + postfix,
                productInStockBlock: prefix + "product_instock" + postfix,
                productPackOfBlock: prefix + "product_desc_pack_of" + postfix,
                productPackOfLeftBlock: prefix + "product_desc_pack_of_left" + postfix,
                productPackOfListBlock: prefix + "product_desc_pack_of_list" + postfix,
                productPackOfRightBlock: prefix + "product_desc_pack_of_right" + postfix,
                productPackOfLeftBtnBlock: prefix + "product_desc_pack_of_left_btn" + postfix,
                productPackOfLeftBtnImgBlock: prefix + "product_desc_pack_of_left_btn_img" + postfix,
                productPackOfLeftBtnImg: prefix + "product_desc_pack_of_left_btn_img",
                productPackOfRightBtnBlock: prefix + "product_desc_pack_of_right_btn" + postfix,
                productPackOfRightBtnImgBlock: prefix + "product_desc_pack_of_right_btn_img" + postfix,
                productPackOfRightBtnImg: prefix + "product_desc_pack_of_right_btn_img",
                productPackOfItemBlock: prefix + "product_desc_pack_of_item" + postfix,
                productPackOfItemTitleBlock: prefix + "product_desc_pack_of_item_title" + postfix,
                productPackOfItemTitleTextBlock: prefix + "product_desc_pack_of_item_title_text" + postfix,
                productPackOfItemTitleText: prefix + "product_desc_pack_of_item_title_text",
                productPackOfItemImgBlock: prefix + "product_desc_pack_of_item_img" + postfix,
                productPackOfItemImg: prefix + "product_desc_pack_of_item_img",
                productPackOfItemQuantityBlock: prefix + "product_desc_pack_of_item_quantity" + postfix,
                productPackOfItemQuantityTextBlock: prefix + "product_desc_pack_of_item_quantity_text" + postfix,
                productPackOfItemQuantityText: prefix + "product_desc_pack_of_item_quantity_text",
                productPackOfItemPriceBlock: prefix + "product_desc_pack_of_item_price" + postfix,
                productPackOfItemPriceRegularBlock: prefix + "product_desc_pack_of_item_price_regular" + postfix,
                productPackOfItemPriceRegularTextBlock: prefix + "product_desc_pack_of_item_price_regular_text" + postfix,
                productPackOfItemPriceRegularText: prefix + "product_desc_pack_of_item_price_regular_text",
                productPackOfItemPriceActiveBlock: prefix + "product_desc_pack_of_item_price_active" + postfix,
                productPackOfItemPriceActiveTextBlock: prefix + "product_desc_pack_of_item_price_active_text" + postfix,
                productPackOfItemPriceActiveText: prefix + "product_desc_pack_of_item_price_active_text",
                productQtyAddBtnBlock: prefix + "product_desc_qty_add_btn" + postfix,
                productQtyBlock: prefix + "product_desc_qty" + postfix,
                productQtyDownBlock: prefix + "product_desc_qty_down" + postfix,
                productQtyDownBtnBlock: prefix + "product_desc_qty_down_btn" + postfix,
                productQtyDownBtn: prefix + "product_desc_qty_down_btn",
                productQtyInputBlock: prefix + "product_desc_qty_input" + postfix,
                productQtyInputTextBlock: prefix + "product_desc_qty_input_text" + postfix,
                productQtyInputText: prefix + "product_desc_qty_input_text",
                productQtyUpBlock: prefix + "product_desc_qty_up" + postfix,
                productQtyUpBtnBlock: prefix + "product_desc_qty_up_btn" + postfix,
                productQtyUpBtn: prefix + "product_desc_qty_up_btn",
                productAddBlock: prefix + "product_desc_add" + postfix,
                productAddTextBlock: prefix + "product_desc_add_text" + postfix,
                productAddText: prefix + "product_desc_add_text",
                productAddImgBlock: prefix + "product_desc_add_img" + postfix,
                productAddImg: prefix + "product_desc_add_img",
                productAddErrText: prefix + "product_desc_add_err_text" + postfix,
            },
            dom: {
                collectionModalBlock: ["productModuleBlock"],
                productModuleBlock: ["productShowcaseBlock", "productModalBlock"],
                productShowcaseBlock: ["productBlock"],
                productModalBlock: ["productBlock"],
                productBlock: ["productHeaderBlock", "productImgBlock", "productDescBlock"],
                productHeaderBlock: ["productHeaderTitleBlock", "productHeaderImgBlock"],
                productHeaderTitleBlock: ["productHeaderTitleTextBlock"],
                productHeaderTitleTextBlock: ["productHeaderTitleText"],
                productHeaderImgBlock: ["productHeaderImg"],
                productImgBlock: ["productImgMainBlock", "productImgGalleryBlock"],
                productImgMainBlock: ["productImgMainImgBlock", "productImgMainZoomBlock"],
                productImgMainImgBlock: ["productImgMainImg"],
                productImgMainZoomBlock: ["productImgMainZoomBtnBlock"],
                productImgMainZoomBtnBlock: ["productImgMainZoomBtnImgBlock", "productImgMainZoomBtnTextBlock"],
                productImgMainZoomBtnImgBlock: ["productImgMainZoomBtnImg"],
                productImgMainZoomBtnTextBlock: ["productImgMainZoomBtnText"],
                productImgGalleryBlock: ["productImgGalleryHeaderBlock", "productImgGalleryLeftBlock", "productImgGalleryListBlock", "productImgGalleryRightBlock"],
                productImgGalleryHeaderBlock: ["productImgGalleryHeaderTitleBlock", "productImgGalleryHeaderToggleBlock"],
                productImgGalleryHeaderTitleBlock: ["productImgGalleryHeaderTitleImgBlock", "productImgGalleryHeaderTitleTextBlock"],
                productImgGalleryHeaderTitleImgBlock: ["productImgGalleryHeaderTitleImg"],
                productImgGalleryHeaderTitleTextBlock: ["productImgGalleryHeaderTitleText"],
                productImgGalleryHeaderToggleBlock: ["productImgGalleryHeaderToggleImgBlock", "productImgGalleryHeaderToggleTextBlock"],
                productImgGalleryHeaderToggleImgBlock: ["productImgGalleryHeaderToggleImg"],
                productImgGalleryHeaderToggleTextBlock: ["productImgGalleryHeaderToggleText"],
                productImgGalleryBlock: ["productImgGalleryLeftBlock", "productImgGalleryListBlock", "productImgGalleryRightBlock"],
                productImgGalleryLeftBlock: ["productImgGalleryLeftBtnBlock"],
                productImgGalleryLeftBtnBlock: ["productImgGalleryLeftBtnImgBlock", "productImgGalleryLeftBtnTextBlock"],
                productImgGalleryLeftBtnImgBlock: ["productImgGalleryLeftBtnImg"],
                productImgGalleryLeftBtnTextBlock: ["productImgGalleryLeftBtnText"],
                productImgGalleryListBlock: ["productImgGalleryListItemBlock"],
                productImgGalleryListItemBlock: ["productImgGalleryListItemImgBlock", "productImgGalleryListItemTextBlock"],
                productImgGalleryListItemImgBlock: ["productImgGalleryListItemImg"],
                productImgGalleryListItemTextBlock: ["productImgGalleryListItemText"],
                productImgGalleryRightBlock: ["productImgGalleryRightBtnBlock"],
                productImgGalleryRightBtnBlock: ["productImgGalleryRightBtnImgBlock", "productImgGalleryRightBtnTextBlock"],
                productImgGalleryRightBtnImgBlock: ["productImgGalleryRightBtnImg"],
                productImgGalleryRightBtnTextBlock: ["productImgGalleryRightBtnText"],
                productDescBlock: ["productTitleBlock","productRatingsBlock","productPriceBlock", "productInfoBlock", "productAttBlock", "productInStockBlock" ,"productPackOfBlock",  "productQtyAddBtnBlock"],
                productTitleBlock: ["productTitleTextBlock"],
                productTitleTextBlock: ["productTitleText"],
                productInfoBlock: ["productInfoImgBlock", "productInfoTextBlock","productInfoFullDescBlock"],
                productInfoImgBlock: ["productInfoImg"],
                productInfoTextBlock: ["productInfoText"],
                productInfoFullDescBlock: ["productInfoFullDescText"],
                productPriceBlock: ["productPriceLabel", "productPriceActiveBlock", "productPriceRegularBlock","productPriceWorthBlock"],
                productPriceActiveBlock: ["productPriceActiveTextBlock"],
                productPriceActiveTextBlock: ["productPriceActiveText", "productPriceActiveTextMsg"],
                productPriceRegularBlock: ["productPriceRegularTextBlock"],
                productPriceRegularTextBlock: ["productPriceRegularText"],
                productPriceWorthBlock: ["productPriceWorthTextBlock"],
                productPriceWorthTextBlock: ["productPriceWorthText","productPriceWorthTextMsg"],
                
                productAttBlock: ["productAddErrText","productAttzeroBlock","productAttSizeBlock","productAttthirdBlock", "productAttColorBlock","productAttfourthBlock","productAttEditBlock"],
                productAttColorBlock: ["productAttColorTitleBlock", "productAttColorListBlock"],
                productAttColorTitleBlock: ["productAttColorTitleTextBlock"],
                productAttColorTitleTextBlock: ["productAttColorTitleText", "productAttColorTitleTextSelected"],
                productAttColorListBlock: ["productAttColorListItemBlock"],
                productAttColorListItemBlock: ["productAttColorListItemImgBlock", "productAttColorListItemTextBlock"],
                productAttColorListItemImgBlock: ["productAttColorListItemImg"],
                productAttColorListItemTextBlock: ["productAttColorListItemText"],
                
                productAttzeroBlock: ["productAttzeroTitleBlock", "productAttzeroListBlock"],
                productAttzeroTitleBlock: ["productAttzeroTitleTextBlock"],
                productAttzeroTitleTextBlock: ["productAttzeroTitleText", "productAttzeroTitleTextSelected"],
                productAttzeroListBlock: ["productAttzeroListItemBlock"],
                productAttzeroListItemBlock: ["productAttzeroListItemImgBlock", "productAttzeroListItemTextBlock"],
                productAttzeroListItemImgBlock: ["productAttzeroListItemImg"],
                productAttzeroListItemTextBlock: ["productAttzeroListItemText"],

                productAttthirdBlock: ["productAttthirdTitleBlock", "productAttthirdListBlock"],
                productAttthirdTitleBlock: ["productAttthirdTitleTextBlock"],
                productAttthirdTitleTextBlock: ["productAttthirdTitleText", "productAttthirdTitleTextSelected"],
                productAttthirdListBlock: ["productAttthirdListItemBlock"],
                productAttthirdListItemBlock: ["productAttthirdListItemImgBlock", "productAttthirdListItemTextBlock"],
                productAttthirdListItemImgBlock: ["productAttthirdListItemImg"],
                productAttthirdListItemTextBlock: ["productAttthirdListItemText"],

                productAttfourthBlock: ["productAttfourthTitleBlock", "productAttfourthListBlock"],
                productAttfourthTitleBlock: ["productAttfourthTitleTextBlock"],
                productAttfourthTitleTextBlock: ["productAttfourthTitleText", "productAttfourthTitleTextSelected"],
                productAttfourthListBlock: ["productAttfourthListItemBlock"],
                productAttfourthListItemBlock: ["productAttfourthListItemImgBlock", "productAttfourthListItemTextBlock"],
                productAttfourthListItemImgBlock: ["productAttfourthListItemImg"],
                productAttfourthListItemTextBlock: ["productAttfourthListItemText"],

                productAttSizeBlock: ["productAttSizeTitleBlock", "productAttSizeListBlock"],
                productAttSizeTitleBlock: ["productAttSizeTitleTextBlock"],
                productAttSizeTitleTextBlock: ["productAttSizeTitleText", "productAttSizeTitleTextSelected"],
                productAttSizeListBlock: ["productAttSizeListItemBlock"],
                productAttSizeListItemBlock: ["productAttSizeListItemImgBlock", "productAttSizeListItemTextBlock"],
                productAttSizeListItemImgBlock: ["productAttSizeListItemImg"],
                productAttSizeListItemTextBlock: ["productAttSizeListItemText"],

                productAttEditBlock: ["productAttEditText"],
                productPackOfBlock: ["productPackOfLeftBlock", "productPackOfListBlock", "productPackOfRightBlock"],
                productPackOfLeftBlock: ["productPackOfLeftBtnBlock"],
                productPackOfLeftBtnBlock: ["productPackOfLeftBtnImgBlock"],
                productPackOfLeftBtnImgBlock: ["productPackOfLeftBtnImg"],
                productPackOfRightBlock: ["productPackOfRightBtnBlock"],
                productPackOfRightBtnBlock: ["productPackOfRightBtnImgBlock"],
                productPackOfRightBtnImgBlock: ["productPackOfRightBtnImg"],
                productPackOfListBlock: ["productPackOfItemBlock"],
                productPackOfItemBlock: ["productPackOfItemImgBlock", "productPackOfItemTitleBlock", "productPackOfItemQuantityBlock", "productPackOfItemPriceBlock"],
                productPackOfItemImgBlock: ["productPackOfItemImg"],
                productPackOfItemTitleBlock: ["productPackOfItemTitleTextBlock"],
                productPackOfItemTitleTextBlock: ["productPackOfItemTitleText"],
                productPackOfItemQuantityBlock: ["productPackOfItemQuantityTextBlock"],
                productPackOfItemQuantityTextBlock: ["productPackOfItemQuantityText"],
                productPackOfItemPriceBlock: ["productPackOfItemPriceActiveBlock", "productPackOfItemPriceRegularBlock"],
                productPackOfItemPriceActiveBlock: ["productPackOfItemPriceActiveTextBlock"],
                productPackOfItemPriceActiveTextBlock: ["productPackOfItemPriceActiveText"],
                productPackOfItemPriceRegularBlock: ["productPackOfItemPriceRegularTextBlock"],
                productPackOfItemPriceRegularTextBlock: ["productPackOfItemPriceRegularText"],
                productQtyAddBtnBlock: ["productQtyBlock","productAddBlock"],
                productQtyBlock: ["productQtyDownBlock", "productQtyInputBlock", "productQtyUpBlock"],
                productQtyDownBlock: ["productQtyDownBtnBlock"],
                productQtyDownBtnBlock: ["productQtyDownBtn"],
                productQtyUpBlock: ["productQtyUpBtnBlock"],
                productQtyUpBtnBlock: ["productQtyUpBtn"],
                productQtyInputBlock: ["productQtyInputTextBlock"],
                productQtyInputTextBlock: ["productQtyInputText"],
                productAddBlock: ["productAddImgBlock", "productAddTextBlock"],
                productAddTextBlock: ["productAddText"],
                productAddImgBlock: ["productAddImg"],
            }
        },
    }
}



INC_COL.methods.getSelectorClassName = function (classNames, className) {
    return "." + classNames[className];
}
// INC_COL.methods.getSelectorClassName = function (classNames, className) {
//     return "." + classNames[className];
// }
INC_COL.methods.get_product_ratings_col = function(filed3, field2, rating_containers) {
    // if (readCookie('ivid') == "3295f835c65c224c9bd48df6ec17bb7603ce70b45a"){
    if(filed3 != undefined && filed3 != "" && filed3 != 0 && filed3.split('|')[0] != "0.0" && filed3.split('|')[0] != "0"){
        var rating = filed3
        rating = rating.toString()
        if(rating == undefined || rating == ""){
            rating = "0"
        }
        var ratingAvg = field2.split('|')[0]
        var rating_container = rating_containers;
        rating_m = rating.replace(".", "-");
        
        if (rating == 0) {
            rating = "0-0"
            rating_m = "0-0"
        }
        if (rating == 1) {
            rating = "1-0"
            if (rating_m != null) {
                rating_m = "1-0"
            }
        }
        if (rating == 2) {
            rating = "2-0"
            if (rating_m != null) {
                rating_m = "2-0"
            }
        }
        if (rating == 3) {
            rating = "3-0"
            if (rating_m != null) {
                rating_m = "3-0"
            }
        }
        if (rating == 4) {
            rating = "4-0"
            if (rating_m != null) {
                rating_m = "4-0"
            }
        }
        if (rating == 5) {
            rating = "5-0"
            if (rating_m != null) {
                rating_m = "5-0"
            }
        }
        if (rating == "") {
            rating = 0;
        }
        if (rating_m != null) {
            rating_container.classList.add("rating_" + rating_m);
        } else {
            rating_container.classList.add("rating_" + rating);
        }
        
        var count = document.createElement('span');
        count.classList.add('rating_count')
        rating_container.appendChild(count);
        var avg = document.createElement('span');
        avg.classList.add('rating_avg')
        if (rating == "0-0") {
            count.textContent = "(0)";
        } else {
            if(ratingAvg.replace('-', '.') != ""){
                count.textContent = "("+ratingAvg.replace('-', '.')+")" 
            }
        }
        var stars = document.createElement('span');
        stars.classList.add('rating_stars');
        stars.innerHTML = "★★★★★"
        rating_container.appendChild(stars);
        if (filed3 != null){
            var reviews = document.createElement('div');
            reviews.classList.add('reviews');
            reviews.innerText = filed3; 
            rating_container.appendChild(reviews);
        }

    }else{
        var stars = document.createElement('span');
        stars.innerHTML = "★★★★★"
        stars.classList.add('rating_stars');
        stars.classList.add('noratings');
        rating_containers.classList.add('NoStars');
    }
    // }
}
INC_COL.methods.getProductIdFromWebPage = function () {
    var href_split =  window.location.href.split('?')[1];
    if(href_split != undefined){
        var total_split_href=href_split.split('&');
        var cid="";
        var pid=""
        
        if(href_split != undefined){
            for(h=0;h<total_split_href.length;h++){
                if(total_split_href[h].indexOf('cid') >= 0){
                    cid = total_split_href[h].split('=')[1]
                }else if(total_split_href[h].indexOf('pid') >= 0){
                    pid = total_split_href[h].split('=')[1].replace('#','')
                }
            }
        }
        INC_COL.config.pdpCID = cid
        INC_COL.config.pdpPID = pid
        return pid;

    }
    
    // if(window.location.href.indexOf('incgs=2') >= 0 && cid != "" && cid != 0 && cid != null && pid != "" && pid != 0 && pid != null){
    //     var total_split_href=href_split.split('&');
    //     var cid="";
    //     var pid=""
        
    //     if(href_split != undefined){
    //         for(h=0;h<total_split_href.length;h++){
    //             if(total_split_href[h].indexOf('cid') >= 0){
    //                 cid = total_split_href[h].split('=')[1].split('#')[0]
    //             }else if(total_split_href[h].indexOf('pid') >= 0){
    //                 pid = total_split_href[h].split('=')[1].split('#')[0]
    //             }
    //         }
    //     }
    //     INC_COL.config.pdpCID = cid
    //     INC_COL.config.pdpPID = pid
    // }else{
    //     if (window.location.pathname.split('/')[2] != undefined && window.location.pathname.split('/')[2].split('-')[2] != undefined) {
    //         return window.location.pathname.split('/')[2].split('-')[2]
    //      } else if (window.location.pathname.split('/')[2] != undefined && window.location.pathname.split('/')[2] != ""){
    //         return window.location.pathname.split('/')[2]
    //      }
    // }
    
}
INC_COL.methods.detectPageType = function () {
    if (INC_COL.config.deviceType == "mobile") {
        if((window.location.href.indexOf('incgs=2') >= 0 || window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=3') >= 0)){
            return "pdp";
        }
        if (document.querySelector('html').classList.contains('pdp')) return "pdp";
        // if (GTMdata != null){
        //     if (GTMdata.productListerEvent.eventAction == "Product Detail View") return "pdp";
        // }
        if (document.querySelector('.desktop-theme.checkout-cart-index') != null) return "cartPage";
        if (document.querySelector('#ProductListNavigationPostAjaxJavascript') != null || document.querySelector('.layout-product-tile-holder') != null || document.querySelector('#searchBasedNavigation_widget') != null || document.querySelector('#containerModal') != null) return "productList";
        
    } else {
        if((window.location.href.indexOf('incgs=2') >= 0 || window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=3') >= 0)){
            return "pdp";
        }
        if (document.querySelector('html').classList.contains('pdp')) return "pdp";
        // if (GTMdata != null){
        //     if (GTMdata.productListerEvent.eventAction == "Product Detail View") return "pdp";
        // }
        if (document.querySelector('#desktop-theme.checkout-cart-index') != null) return "cartPage";
        if (document.querySelector('#ProductListNavigationPostAjaxJavascript') != null || document.querySelector('.layout-product-tile-holder') != null || document.querySelector('#searchBasedNavigation_widget') != null || document.querySelector('#containerModal') != null) return "productList";
    }
}
INC_COL.methods.detectDeviceType = function () {
    return (window.innerWidth > 768) ? "desktop" : "mobile";
}
INC_COL.methods.detectLanguage = function detectLanguage() { return "en"; }

INC_COL.methods.addProductToSidebarCart = function (findObj, qty,productBlock,client_add_btn,btn_addtocart) {
    
    var dataStore = INC_COL.dataStore;
    var classNames = INC_COL.uiConfig.sidebar.className;
    var getSelectorClassName = this.getSelectorClassName;

    var sbBlock = document.querySelector(getSelectorClassName(classNames, "sidebarModalBlock"));

    function getViewElement(className) {
        if(sbBlock != null){
            return sbBlock.querySelector(getSelectorClassName(classNames, className));
        }
    }
    var subtotal_activeprice =0;
    var subtotal_regular = 0;
    if(document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_active_text') != null){
        var subtotal_activeprice = document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_active_text').getAttribute('subtotalactiveprice')
    }
    if(document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_regular_text') != null){
        var subtotal_regular = document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_regular_text').getAttribute('subtotalregularprice')
    }
    if(subtotal_activeprice == null){
        subtotal_activeprice = 0
    }
    if(subtotal_regular == null){
        subtotal_regular = 0
    }
    if(client_add_btn == "client_add_btn"){
        var subtotal_activeprice =0;
        var subtotal_regular = 0;
    }
   
    var elHeadersubtotalactivetext = getViewElement("sidebarCartAddedProductDescSubTotalActiveText");
    var elHeadersubtotalregulartext = getViewElement("sidebarCartAddedProductDescSubTotalRegularText");
    var elHeaderItemCountFigureText = getViewElement("sidebarHeaderItemCountFigureText");
    var sidebarHeaderItemCountTitleText = getViewElement("sidebarHeaderItemCountTitleText");
    var sbCartBlock = getViewElement("sidebarCartAddedListBlock");

    var productObj = dataStore.methods().getProductById(findObj);
    var productBlock = INC_COL.methods.getElementChilds("sidebarCartAddedProductBlock", "sidebar");

    var elImg = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductImg"));
    var elTitleText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescTitleText"));
    var elPriceActiveText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceActiveText"));
    var elPriceRegularText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceRegularText"));
    var elAttsizeText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescAttSizeText"));
    var elAttColorText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescAttColorText"));
    
    var elImgTag = INC_COL.methods.generateHTMLTags('img', { src: productObj.imageURL });
    elImg.appendChild(elImgTag);

    elTitleText.innerHTML =  qty + "<small>x </small>" + productObj.name;
    
    //current  active prod
    var color="";
    var size="";
    if(document.querySelector('.inc_sidebar_modal_block.active') != null){
        var just_check_prod_block = document.querySelector('.inc_sidebar_modal_block .inc_product_module_block[data-main_id="'+productObj.mainId+'"]')
    }else{
        var just_check_prod_block = document.querySelector('.inc_product_module_block[data-main_id="'+productObj.mainId+'"]')
    }
    if(just_check_prod_block != null){
        if(just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.active div') != null){
            size = just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.active div').innerText
        }
        if(just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block') != null){
            color = just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-color')
        }
    }
    console.log("size " + size)
    console.log("color " + color)
    if(btn_addtocart != undefined){
        if(btn_addtocart.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == true){
            var module_blk= btn_addtocart.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            if(module_blk.querySelector('.inc_product_modal_block .inc_product_desc_att_block') != null){
                var sel_attr = module_blk.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                var zero_text = sel_attr.getAttribute('data-zero');
                var size_text = sel_attr.getAttribute('data-size');
                var color_text = sel_attr.getAttribute('data-color');
                var third_text = sel_attr.getAttribute('data-third');
                
                var size=""
                if(color_text != undefined){
                    size = color_text
                }
                if(zero_text != undefined){
                    if(size == ""){
                        size = zero_text
                    }else{
                        size = size + "|" + zero_text
                    }
                }
                if(size_text != undefined){
                    size = size + "|" + size_text
                }
                if(third_text != undefined){
                    size = size + "|" + third_text
                }
            }
        }
    }
    //end
    if(size != ""){
        elAttsizeText.innerText = size;
    }else if(color != ""){
        elAttColorText.innerText = color + " | ";
    }
    
   
    var activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
    var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();

    elPriceActiveText.innerText = " Price: " + formatter.format(activePrice)
    // elPriceActiveText.innerText = formatter.format(elPriceActiveText).toFixed(2).innerText;
    if(client_add_btn == "client_add_btn"){
        if (subtotal_regular == "" && +regularPrice != 0 && regularPrice != "") {
            var subtotalactiveprice= +subtotal_activeprice + (+activePrice * qty)
            var subtotalregukarprice= +subtotal_activeprice + (+regularPrice * qty)
        } else {
            var subtotalactiveprice= +subtotal_activeprice + (+activePrice * qty)
            var subtotalregukarprice= +subtotal_regular + (+regularPrice * qty)
        }
    }else{
        if (subtotal_regular == "" && +regularPrice != 0 && regularPrice != "") {
            var subtotalactiveprice= +subtotal_activeprice + (+activePrice * qty)
            var subtotalregukarprice= +subtotal_activeprice + (+regularPrice * qty)
        } else {
            var subtotalactiveprice= +subtotal_activeprice + (+activePrice * qty)
            var subtotalregukarprice= +subtotal_regular + (+regularPrice * qty)
        }
    }
    
    
    // if (productObj.activePrice != productObj.regularPrice) {
    //     elPriceRegularText.innerText = INC_COL.clientConfig.currencySymbol + regularPrice + " " + ((INC_COL.clientConfig.statusVAT == "true") ? "(INC_COL. VAT)" : "(Ex. VAT)");
    // }
    var old_qty = 0;
    if(document.querySelector('.inc_header_item_count_title_text') != null){
        var old_qty = document.querySelector('.inc_header_item_count_title_text').innerText.split('Item(s)')[0].replace('(','').trim()
    }
    if(sbCartBlock != null){
        sbCartBlock.insertBefore(productBlock, sbCartBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductBlock")));
    }
    // elHeaderItemCountFigureText.innerText = parseInt(elHeaderItemCountFigureText.innerText) + parseInt(qty);
    if(elHeaderItemCountFigureText != undefined){
        elHeaderItemCountFigureText.style.display = "none";
    }
    if(sidebarHeaderItemCountTitleText != null){
        if(client_add_btn == "client_add_btn"){
            sidebarHeaderItemCountTitleText.innerHTML = "1 Item(s)  |  "//parseInt(qty)+" Item(s)  |  ";
        }else{
            sidebarHeaderItemCountTitleText.innerHTML =   (parseInt(old_qty) + 1)+" Item(s)  |  ";
            //parseInt(qty)
        }
    }
    
    if(sbCartBlock != null){
        if (sbCartBlock.querySelectorAll(getSelectorClassName(classNames, "sidebarCartAddedProductBlock")).length > 2) {
            getViewElement("sidebarCartAddedRightBtnBlock").style.visibility = "visible";
            getViewElement("sidebarCartAddedLeftBtnBlock").style.visibility = "visible";
        }
    }
    if(elHeadersubtotalactivetext != null){
        elHeadersubtotalactivetext.setAttribute('subtotalactiveprice',subtotalactiveprice)
        elHeadersubtotalregulartext.setAttribute('subtotalregularprice',subtotalregukarprice)
        if (+subtotalactiveprice != null && (+subtotalactiveprice < +subtotalregukarprice)) {
            elHeadersubtotalactivetext.innerHTML = INC_COL.clientConfig.currencySymbol + formatter.format(subtotalactiveprice)
            elHeadersubtotalregulartext.innerHTML = INC_COL.clientConfig.currencySymbol + formatter.format(subtotalregukarprice);
            
        }else{
            elHeadersubtotalactivetext.innerHTML = INC_COL.clientConfig.currencySymbol + formatter.format(subtotalactiveprice);
            elHeadersubtotalregulartext.innerHTML=""
        }
    }
    if(window.innerWidth > 767){
        if(document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 6){
            document.querySelector('.inc_sidebar_cart_added_block').classList.add('flex-start')
        }
    }else{
        if(document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 3){
            document.querySelector('.inc_sidebar_cart_added_block').classList.add('flex-start')
        }
    }
    if(document.querySelectorAll('.inc_cart_added_product_block').length > 7){
        document.querySelector('.inc_sidebar_cart_added_block').classList.add('more_than_seven')
    }
}

INC_COL.methods.createPDPBundleCartBlock = function () {
    var classNames = INC_COL.uiConfig.pdp.className;
    var pdpBundleCartBlock = this.getElementChilds("pdpModalBundleCartBlock", "pdp");
    var getSelectorClassName = INC_COL.methods.getSelectorClassName;
    function getViewElement(className) {
        return pdpBundleCartBlock.querySelector(getSelectorClassName(classNames, className));
    }

    var elBundleCartTitleBlock = getViewElement("pdpBundleCartTitleBlock");
    var elBundleCartTitleText = getViewElement("pdpBundleCartTitleText");
    var elBundleCartAddedBlock = getViewElement("pdpBundleCartAddedBlock");
    var elBundleCartSummaryViewBlock = getViewElement("pdpBundleCartSummaryViewBlock");
    var elBundleCartSummaryViewBtnText = getViewElement("pdpBundleCartSummaryViewBtnText");
    var elBundleCartAddBtnBlock = getViewElement("pdpBundleCartSummaryAddBtnBlock");
    // var elBundleCartAddBtnOverlay = getViewElement("pdpModalBundleCartOverlay");
    elBundleCartTitleText.innerText = "  Price Summary";
    elBundleCartAddBtnBlock.classList.add('inc_loading')
    setTimeout(function(){
        elBundleCartAddBtnBlock.classList.remove('inc_loading')
    },300)
    var elBundleCartTitleImgBlock = getViewElement("pdpBundleCartTitleImgBlock");
    elBundleCartTitleImgBlock.addEventListener('click', function () {
        elBundleCartTitleBlock.classList.toggle('active');
        elBundleCartAddedBlock.classList.toggle('active');
        elBundleCartSummaryViewBlock.classList.toggle('active');
        pdpBundleCartBlock.classList.toggle('active');
        document.querySelector('body').classList.toggle('inc_mobile_overlay');
        document.querySelector('.inc_pdp_bundle_cart_overlay_block').classList.toggle('active');
    });

    elBundleCartSummaryViewBtnText.innerText = "ADDED ITEMS";
    elBundleCartSummaryViewBlock.addEventListener('click', function () {
        // if (INC_COL.debug) console.log("ok");
        document.querySelector('body').classList.toggle('inc_mobile_overlay');
        elBundleCartTitleBlock.classList.toggle('active');
        elBundleCartAddedBlock.classList.toggle('active');
        elBundleCartSummaryViewBlock.classList.toggle('active');
        pdpBundleCartBlock.classList.toggle('active');
        document.querySelector('.inc_pdp_bundle_cart_overlay_block').classList.toggle('active');
    });

    elBundleCartAddBtnBlock.addEventListener("click", function (e) {
        if(document.querySelector('.inc_pdp_bundle_cart_title_img_block') != null){
            if(document.querySelector('.inc_pdp_bundle_cart_block.active') != null){
                document.querySelector('.inc_pdp_bundle_cart_title_img_block').click()
            }
        }
        INC_COL.clientConfig.offset = 0;
        INC_COL.clientConfig.slidevalue = 0;
        document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style','margin-left: 0')
        if(document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3){
            document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style','pointer-events: none;opacity:0.5')
            if (isIE()){
                document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style','opacity:0.5')
            }
            document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style','pointer-events: auto;opacity:1')
            if (isIE()){
                document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style','opacity:1')
            }
        }
        
        var btn_cart = e.target
        btn_cart.classList.add('inc_loading')
        // INC_COL.methods.addBundleToCart(btn_cart);
        
    });

    return pdpBundleCartBlock;
}

INC_COL.methods.sendBundleClickTracking = function (productId) {
    getTrackingPixel()
    var pageType = "";
    var getSelectorClassName = INC_COL.methods.getSelectorClassName;

    switch (INC_COL.config.pageType) {
        case "pdp": pageType = "107"; break;
        case "productList": pageType = "101"; break;
        case "cartPage": pageType = "103"; break;
        case "other": pageType = "101";
    }

    if (document.querySelector('.inc_sidebar_modal_block.active') == null && INC_COL.config.pageType == "pdp") {
        pageType = "100";
    }

    INC_COL.methods.trackingEvents("bundleProductClickTracking", { "product_id": productId, "core_product_id": INC_COL.dataStore.pdpProductId}, pageType);

}

INC_COL.methods.updateBundleCart = function (bundleCartObj, type,main_id,bundle_id,pname,pprice) {
    var dataStore = INC_COL.dataStore;
    var listToDelete=[]
    if (!dataStore.hasOwnProperty('bundleCartProducts')) {
        dataStore['bundleCartProducts'] = {};
        INC_COL.config.pdpaddedProductList=[]
        INC_COL.config.bundle_tracking=[]
        INC_COL.config.dupBasket=[]
    }
    var main_elm=document.querySelector('.inc_collection_product_list_block[data-main_id="'+main_id+'"]')
    var combo_id = ""
    if(main_elm != null){
        combo_id = main_elm.getAttribute('data-combo_id')
    }
    switch (type) {
        case "add": dataStore["bundleCartProducts"][bundleCartObj["sku"]] = bundleCartObj["qty"];
            
            if(INC_COL.config.pdpaddedProductList.indexOf(main_id) == -1){
                INC_COL.config.pdpaddedProductList.push(main_id)
                INC_COL.config.bundle_tracking.push({
                    id:main_id,
                    sku:bundleCartObj["sku"],
                    bid:bundle_id,
                    combo_id:combo_id,
                    qty:bundleCartObj["qty"]

                });
            }else{
                for (var h = 0; h < INC_COL.config.bundle_tracking.length; h++) {
                    if (INC_COL.config.bundle_tracking[h].id == main_id) {
                        INC_COL.config.bundle_tracking[h].qty = bundleCartObj["qty"];
                        INC_COL.config.bundle_tracking[h].sku = bundleCartObj["sku"];
                        INC_COL.config.bundle_tracking[h].combo_id = combo_id
                    }
                }
            }
            break;
        case "sub": delete dataStore["bundleCartProducts"][bundleCartObj["sku"]];
            INC_COL.config.pdpaddedProductList.remove_prod_list = function() {
                var what, a = arguments, L = a.length, ax;
                while (L && this.length) {
                    what = a[--L];
                    while ((ax = this.indexOf(what)) !== -1) {
                        this.splice(ax, 1);
                    }
                }
                return this;
            };
            listToDelete[0] = main_id
            for (var i = 0; i < INC_COL.config.bundle_tracking.length; i++) {
                var obj = INC_COL.config.bundle_tracking[i];
                if(obj != undefined){
                    if (listToDelete.indexOf(obj.id) !== -1) {
                        INC_COL.config.bundle_tracking.splice(i, 1);
                    }
                }
            }
            INC_COL.config.bundle_tracking = INC_COL.config.bundle_tracking
            INC_COL.config.pdpaddedProductList.remove_prod_list(main_id);
            // INC_COL.config.pdpaddedProductList.remove_prod_list = function() {
            //     var what, a = arguments, L = a.length, ax;
            //     while (L && this.length) {
            //         what = a[--L];
            //         while ((ax = this.indexOf(what)) !== -1) {
            //             this.splice(ax, 1);
            //         }
            //     }
            //     return this;
            // };
            // INC_COL.config.pdpaddedProductList.remove_prod_list(main_id);
            break;
    }

    if (INC_COL.config.pageType == "pdp") this.calculateBundleTotal();
}

INC_COL.methods.calculateBundleTotal = function () {
    var dataStore = INC_COL.dataStore;
    var bundleCartProducts = dataStore["bundleCartProducts"];
    var productListObj = dataStore.dataStoreObj;
    var duplicate_check_produ=[]
    var totalRegularPrice = 0;
    var totalActivePrice = 0;
    var totalMainProduct = 0;
    var totalAddonProducts = 0;
    var totalAddonProductsCount = 0;
    var totalProductCount = 0;
    var mainId = INC_COL.methods.getProductIdFromWebPage();
    
    if (bundleCartProducts != null && bundleCartProducts != undefined) {
        Object.keys(bundleCartProducts).forEach(function (sku) {
            for (mainProductId in productListObj) {
                for (childProductId in productListObj[mainProductId]) {
                    if (sku == productListObj[mainProductId][childProductId]["sku"]) {
                        if(duplicate_check_produ.indexOf(productListObj[mainProductId][childProductId]["sku"]) == -1){
                            duplicate_check_produ.push(productListObj[mainProductId][childProductId]["sku"])
                            var regularPrice = productListObj[mainProductId][childProductId]["regularPrice"];
                            var activePrice = productListObj[mainProductId][childProductId]["activePrice"];
                            totalRegularPrice = totalRegularPrice + (parseFloat(bundleCartProducts[sku]) * regularPrice);
                            totalActivePrice = totalActivePrice + (parseFloat(bundleCartProducts[sku])) * activePrice;

                            if (productListObj[mainProductId][childProductId].mainId == mainId) {
                                totalProductCount++;
                                totalMainProduct = totalMainProduct + (parseInt(bundleCartProducts[sku]) * activePrice);
                            }

                            // if (getProductBySKU(findObj).mainId != mainId) {
                            if (productListObj[mainProductId][childProductId].mainId != mainId) {
                                totalProductCount++;
                                totalAddonProductsCount++;
                                totalAddonProducts = totalAddonProducts + (parseInt(bundleCartProducts[sku]) * activePrice);
                            }
                        }
                    }
                }
            }
        });
    }

    if (INC_COL.debug) console.log("totalMainProduct: " + totalMainProduct);
    if (INC_COL.debug) console.log("totalAddonProducts: " + totalAddonProducts);
    if (INC_COL.debug) console.log("totalAddonProductsCount: " + totalAddonProductsCount);

    var priceObj = {
        totalActivePrice: parseFloat(totalActivePrice).toFixed(2),
        totalRegularPrice: parseFloat(totalRegularPrice).toFixed(2),
        totalMainProduct: totalMainProduct,
        totalAddonProducts: totalAddonProducts,
        totalAddonProductsCount: totalAddonProductsCount,
        totalProductCount: totalProductCount
    }

    this.updateBundleCartBlock(priceObj);
}

INC_COL.methods.updateBundleCartBlock = function (priceObj) {
    var dataStore = INC_COL.dataStore;
    var bundleCartProducts = dataStore["bundleCartProducts"];
//INC_COL.dataStore.bundleCartProducts
    var totalRegularPrice = priceObj.totalRegularPrice;
    var totalActivePrice = priceObj.totalActivePrice;
    var totalMainProduct = priceObj.totalMainProduct;
    var totalAddonProducts = priceObj.totalAddonProducts;
    var totalAddonProductsCount = priceObj.totalAddonProductsCount;
    var totalProductCount = priceObj.totalProductCount;

    var checkout_block = document.querySelector('.inc_collection_product_checkout_block')
    var checkout_wrapper = document.querySelector('.inc_collection_product_checkout_price_text_wrapper')
    var elBundleCartPriceactiveText = document.querySelector('.inc_collection_product_checkout_price_active_price')
    var elBundleCartPriceRegularText = document.querySelector('.inc_collection_product_checkout_price_regular_price')
    var elBundleCartAddBtnText = document.querySelector('.inc_collection_product_checkout_button_text')
    var bundleCartProductsArray = Object.keys(bundleCartProducts);
    var elcheckoutbtn = document.querySelector('.inc_collection_product_checkout_button')
    var elBundleCartPriceSaveText = document.querySelector('.inc_collection_product_checkout_price_save_price')
    var elincPricecut = document.querySelector('.inc_priceCut_block');
    var elwasPriceBlock = document.querySelector('.inc_wasPrice_block');
    var elsavePriceBlock = document.querySelector('.inc_savePrice_block');
    checkout_wrapper.classList.remove('simple_price')
    checkout_wrapper.classList.remove('is_special_price')
    document.querySelector('.inc_collection_Images_gallery_promo_block').classList.remove('is_special_price')
    var totalsaveprc =  get_discount_price(totalRegularPrice,totalActivePrice)
    
    if(totalRegularPrice != totalActivePrice && totalRegularPrice != null && totalRegularPrice != "") {
        elBundleCartPriceRegularText.innerText = INC_COL.clientConfig.currencySymbol + formatter.format(totalRegularPrice)
        elBundleCartPriceactiveText.innerText = INC_COL.clientConfig.currencySymbol + formatter.format(totalActivePrice)
        elBundleCartPriceSaveText.style.display="flex"
        elBundleCartPriceSaveText.innerHTML = "<span>You save</span> " + "<div class='save_price_text_disc'>"+formatter.format(totalsaveprc)+"</div>"
        checkout_wrapper.classList.add('is_special_price')    
        document.querySelector('.inc_collection_Images_gallery_promo_block').classList.add('is_special_price')
        document.querySelector('.inc_collection_Images_gallery_promo_block').innerHTML = "<div class='collection_landing_promo'> <span>You save</span> " + "<div class='save_price_text_disc'  style='margin-left: 4px;'>"+formatter.format(totalsaveprc)+"</div></div>"
    }else{
        elBundleCartPriceSaveText.style.display="none"
        elBundleCartPriceactiveText.innerText = INC_COL.clientConfig.currencySymbol + formatter.format(totalActivePrice)
        document.querySelector('.inc_collection_Images_gallery_promo_block').innerHTML = ""
        elBundleCartPriceRegularText.innerText =""
        elBundleCartPriceSaveText.innerText = ""
        checkout_wrapper.classList.add('simple_price')
    }

    if (document.querySelectorAll('.inc_collection_product_block .inc_collection_product_list_block') != null){
        var productCount = document.querySelectorAll('.inc_collection_product_block .inc_collection_product_list_block').length;
    }

    if(INC_COL.clientConfig.flagoos){
        if(INC_COL.clientConfig.discPrc != ""){
            // var discPrc = productObj.discountPrice
            if (totalProductCount == productCount){
                var aftDiscPrc = totalActivePrice - INC_COL.clientConfig.discPrc;
                elBundleCartPriceactiveText.innerText = "Price cut";
                elincPricecut.innerText = formatter.format(aftDiscPrc);
                elwasPriceBlock.innerText = "was " + formatter.format(totalActivePrice);
                elsavePriceBlock.innerHTML = "<span>You save</span> " + formatter.format(totalActivePrice - aftDiscPrc);
                elBundleCartPriceactiveText.style.display = "flex";
                // elincPricecut.innerText = formatter.format(totalActivePrice);
                elwasPriceBlock.style.display = "block"
                elsavePriceBlock.style.display = "block"
                elBundleCartPriceSaveText.style.display="flex"
                elBundleCartPriceSaveText.innerHTML = "<span>You save</span> " + "<div class='save_price_text_disc'>"+formatter.format(aftDiscPrc)+"</div>"
                checkout_wrapper.classList.add('is_special_price')    
                document.querySelector('.inc_collection_Images_gallery_promo_block').classList.add('is_special_price')
                document.querySelector('.inc_collection_Images_gallery_promo_block').innerHTML = "<div class='collection_landing_promo'> <span>Offer Price</span>" + "<div class='save_price_text_disc'  style='margin-left: 4px;'>"+formatter.format(aftDiscPrc)+ "</div>"+ "<div class='save_price_text_disc'  style='margin-left: 4px;'>"+formatter.format(totalActivePrice - aftDiscPrc)+ " <span>Savings</span>" +"</div></div>"
                document.querySelector('.inc_collection_Images_gallery_promo_block').style.display = "block";
                if (totalActivePrice == 0.00){
                    elBundleCartPriceactiveText.style.display = "none";
                    elincPricecut.innerText = formatter.format(totalActivePrice);
                    elwasPriceBlock.style.display = "none"
                    elsavePriceBlock.style.display = "none"
                }
            } else {
                elBundleCartPriceactiveText.style.display = "none";
                elincPricecut.innerText = formatter.format(totalActivePrice);
                elwasPriceBlock.style.display = "none"
                elsavePriceBlock.style.display = "none"
                if (document.querySelector('.inc_collection_Images_gallery_promo_block') != null){
                  document.querySelector('.inc_collection_Images_gallery_promo_block').style.display = "none";  
                }
            }
        }
    }

    var bundleCartProductsLength = Object.keys(bundleCartProducts).length;

        
    if (bundleCartProductsLength > 1) {
        elBundleCartAddBtnText.innerText = "Add "+bundleCartProductsArray.length+" Item(s) To Basket"
        elcheckoutbtn.setAttribute("style", "pointer-events: auto;opacity:1");
        // document.querySelector('.inc_collection_product_selected_block').innerHTML = "("+bundleCartProductsArray.length+ " dostupných produktov)"
    }

    if (!(bundleCartProductsLength > 1)) {
        if(bundleCartProductsLength == 0){
            elBundleCartAddBtnText.innerText = "Add To Basket"
            elcheckoutbtn.setAttribute("style", "pointer-events: none;opacity:0.5");
            // document.querySelector('.inc_collection_product_selected_block').innerHTML = "(dostupných produktov)"
        }else{
            elcheckoutbtn.setAttribute("style", "pointer-events: auto;opacity:1");
            elBundleCartAddBtnText.innerText = "Add "+bundleCartProductsArray.length+" Item(s) To Basket"
            // document.querySelector('.inc_collection_product_selected_block').innerHTML = "("+bundleCartProductsArray.length+ " dostupných produktov)"
        }
    }
}

INC_COL.methods.clear = function () {
    if (document.querySelector('.inc_collection_block') != null) {
        
        Array.prototype.forEach.call(document.querySelectorAll('.inc_collection_block'), function (el) {
            el.parentNode.removeChild(el);
        });
    }
}

INC_COL.methods.getElementChilds = function (child, pageType) {
    var uiConfig = INC_COL.uiConfig;
    var pType = pageType;
    var vDOM = uiConfig[pType]["dom"];
    // if (INC_COL.debug) console.log(child);
    var elementHTML = this.generateHTMLTags('div', { class: uiConfig[pType]["className"][child] })
    if (vDOM.hasOwnProperty(child)) {
        vDOM[child].forEach(function (subChild) {
            elementHTML.appendChild(INC_COL.methods.getElementChilds(subChild, pType));
        });
    }

    return elementHTML;
}

INC_COL.methods.generateHTMLTags = function (tagName, attributeObj, childNode, eventListner, callback) {
    var element = document.createElement(tagName);
    for (attr in attributeObj) {
        switch (attr) {
            case "class": {
                element.setAttribute('class', attributeObj[attr]);
            }
                break;
            case "style": {
                for (styleAttr in attributeObj[attr]) {
                    element.style[styleAttr] = attributeObj[attr][styleAttr];
                }
            }
                break;
            default: {
                element.setAttribute(attr, attributeObj[attr]);
            }
        }
    }

    if (childNode != null && childNode != undefined) element.appendChild(childNode);
    if (eventListner != null && childNode != undefined) element.addEventListener(eventListner, callback);

    return element;
}


INC_COL.methods.addBundleToCart = function (btn_cart) {
    
    INC_COL.clientConfig.OOS=[]
    var form_key = "";
    if (WCParamJS != null) {
        storeId = WCParamJS.storeId;
        catalogId = WCParamJS.catalogId;
        langId = WCParamJS.langId;
    }
    var addProductURL = INC_COL.config.addToBasketURL
    var dataStore = INC_COL.dataStore;
    var mainProductId = "";
    var pr_ids=[]
    Object.keys(dataStore.bundleCartProducts).forEach(function (bundleCartProduct) {
        pr_ids.push("1")
        getTrackingPixel()
    })
    var success_length=0;
    var searchParamsObjArray = [];
    var url1="";
    var url2="";
    var url3="";
    var url4="";
    var url5="";
    var url6="";
    var url7="";
    var url8="";
    var url9="";
    var param1=""
    var param2=""
    var param3=""
    var param4=""
    var param5=""
    var param6=""
    var param7=""
    var param8=""
    var param9=""
    var count_pr_to_add=0
    var total_length=Object.keys(dataStore.bundleCartProducts);
    INC_COL.config.pdpaddedProductList=[]
    Object.keys(dataStore.bundleCartProducts).forEach(function (bundleCartProduct) {
        
        var findObj = new INC_COL.classes.FindObj({ id: bundleCartProduct });
        var productObj = INC_COL.dataStore.methods().getProductById(findObj);
        if (INC_COL.debug) console.log(productObj);
        // addProductURL = addProductURL + btoa(productObj.url) + '/product/' + productObj.mainId;
        
        if(INC_COL.config.pageType == "pdp"){
            INC_COL.config.pdpaddedProductList.push(productObj.mainId)
        }
        var formData = []
        var addProductURL = INC_COL.config.addToBasketURL
        formData = new FormData();
        if (productObj.ProductType == "configurable") {
            var form_param='storeId='+storeId+'&catalogId='+catalogId+'&langId='+langId+'&orderId='+"."+'&partNumberWR='+productObj.mainId+'&calculationUsage='+"-1,-2,-5,-6,-7"+'&inventoryValidation='+"true"+'&pahDoInventory='+"N"+'&catEntryId='+productObj.Filed3+'&quantity='+dataStore.bundleCartProducts[bundleCartProduct]+'&isAddToDelivery='+"true"+'&requesttype='+"ajax"+''
        } else {
            var form_param='storeId='+storeId+'&catalogId='+catalogId+'&langId='+langId+'&orderId='+"."+'&partNumberWR='+productObj.mainId+'&calculationUsage='+"-1,-2,-5,-6,-7"+'&inventoryValidation='+"true"+'&pahDoInventory='+"N"+'&catEntryId='+productObj.Field3+'&quantity='+dataStore.bundleCartProducts[bundleCartProduct]+'&isAddToDelivery='+"true"+'&requesttype='+"ajax"+''
        }
        var params = form_param;
        if (INC_COL.debug) console.log(params);
        

        
        var nwConfigObj = new INC_COL.classes.NWConfig();
        nwConfigObj["url"] = addProductURL;
        nwConfigObj["method"] = 'POST';
        nwConfigObj["params"] = params;
        
        if (INC_COL.debug) console.log(nwConfigObj["url"]);
        count_pr_to_add++
        if(count_pr_to_add == 1){
            url1 =addProductURL
            param1 = form_param
        }else if(count_pr_to_add == 2){
            url2 =addProductURL
            param2 = form_param
        }else if(count_pr_to_add == 3){
            url3 =addProductURL
            param3 = form_param
        }else if(count_pr_to_add == 4){
            url4 =addProductURL
            param4 = form_param
        }else if(count_pr_to_add == 5){
            url5 =addProductURL
            param5 = form_param
        }else if(count_pr_to_add == 6){
            url6 =addProductURL
            param6 = form_param
        }else if(count_pr_to_add == 7){
            url7 =addProductURL
            param7 = form_param
        }else if(count_pr_to_add == 8){
            url8 =addProductURL
            param8 = form_param
        }else if(count_pr_to_add == 9){
            url9 =addProductURL
            param9 = form_param
        }
        if(total_length.length == count_pr_to_add){
            ajax_add_to_cart(url1,url2,url3,url4,url5,url6,url7,url8,url9,param1,param2,param3,param4,param5,param6,param7,param8,param9,btn_cart,mainProductId)
        }
    });
    
    var timeoutOffset = 0;
    if (window.innerWidth > 767){
        if (document.querySelector('#GotoCartButtonFromMiniBasket') == null){
            // localStorage.setItem('redirect_to_cart','1')
            window.location.reload()
            window.location.href = MiniBasketJS.gotoBasketURL;
        } 
    } else {
        if (document.querySelector('#HeaderCartDisplay').innerText == 0){
            // localStorage.setItem('redirect_to_cart','1')
            window.location.reload()
            window.location.href = MiniBasketJS.gotoBasketURL;
        }
    }
    
    setTimeout(function(){
        var cart_img_count=document.querySelectorAll('.cart-container ul li .m_product-image img')
        for(c=0;c<cart_img_count.length;c++){
            var cart_img_src=cart_img_count[c].getAttribute('data-src');
            cart_img_count[c].setAttribute('src',cart_img_src)
        }  
    },6000) 
}
function ajax_add_to_cart(url1,url2,url3,url4,url5,url6,url7,url8,url9,param1,param2,param3,param4,param5,param6,param7,param8,param9,btn_cart,mainProductId){
    console.log("working not sure what's wrong");
    jQuery.ajax({
        type: "POST",
        url: url1,
        data: param1,
        async: false,
        // processData: false,
        // contentType: false,
        error: function(jqXHR, textStatus, errorMessage) {
            
            if(jqXHR.status == 403){
                setTimeout(function(){
                    removeincloader()
                },500)
                    
                window.location.reload()
            }

        },
        success: function(data) {
            console.log("working not sure what's wrong success");
            // success_length++
            // update_cart_session()
            if(url2 == ""){
                add_to_cart_tracking_multiple_col(mainProductId)
                if(btn_cart != undefined){
                    btn_cart.classList.remove('inc_loading')
                    btn_cart.parentNode.setAttribute('style','pointer-events: auto;')
                }
                if(btn_cart.querySelector('.inc_collection_product_checkout_button_text') != null){
                    btn_cart.querySelector('.inc_collection_product_checkout_button_text').classList.remove('inc_loading')
                    btn_cart.setAttribute('style','pointer-events: auto;')
                }
                
                if (window.innerWidth > 767){
                    if (document.querySelector('#GotoCartButtonFromMiniBasket') != null){
                        document.querySelector('#GotoCartButtonFromMiniBasket').click();
                    } 
                } else {
                    if (document.querySelector('#HeaderCartDisplay').innerText != 0){
                        document.querySelector('#HeaderCartDisplay').click();
                    }
                }
                
                setTimeout(function(){
                    removeincloader()
                },500)
                
            }
            if(url2 != ""){
                jQuery.ajax({
                    type: "POST",
                    url: url2,
                    data: param2,
                    async: false,
                    // processData: false,
                    // contentType: false,
                    error: function(jqXHR, textStatus, errorMessage) {
                        if(jqXHR.status == 403){
                            removeincloader()
                            window.location.reload()
                        }
                    },
                    success: function(data) {
                        
                        // success_length++
                        // update_cart_session()
                        if(url3 == ""){
                            add_to_cart_tracking_multiple_col(mainProductId)
                            if(btn_cart != undefined){
                                btn_cart.classList.remove('inc_loading')
                                btn_cart.parentNode.setAttribute('style','pointer-events: auto;')
                            }
                            if(btn_cart.querySelector('.inc_collection_product_checkout_button_text') != null){
                                btn_cart.querySelector('.inc_collection_product_checkout_button_text').classList.remove('inc_loading')
                                btn_cart.setAttribute('style','pointer-events: auto;')
                            }
                            if (window.innerWidth > 767){
                                if (document.querySelector('#GotoCartButtonFromMiniBasket') != null){
                                    document.querySelector('#GotoCartButtonFromMiniBasket').click();
                                } 
                            } else {
                                if (document.querySelector('#HeaderCartDisplay').innerText != 0){
                                    document.querySelector('#HeaderCartDisplay').click();
                                }
                            }
                            setTimeout(function(){
                                removeincloader()
                            },500)
                        }
                        if(url3 != ""){
                            jQuery.ajax({
                                type: "POST",
                                url: url3,
                                data: param3,
                                async: false,
                                // processData: false,
                                // contentType: false,
                                error: function(jqXHR, textStatus, errorMessage) {
                                    if(jqXHR.status == 403){
                                        setTimeout(function(){
                                            removeincloader()
                                        },500)
                                        window.location.reload()
                                    }
                                },
                                success: function(data) {
                                    
                                    // success_length++
                                    // update_cart_session()
                                    if(url4 == ""){
                                        add_to_cart_tracking_multiple_col(mainProductId)
                                        if(btn_cart != undefined){
                                            btn_cart.classList.remove('inc_loading')
                                            btn_cart.parentNode.setAttribute('style','pointer-events: auto;')
                                        }
                                        if(btn_cart.querySelector('.inc_collection_product_checkout_button_text') != null){
                                            btn_cart.querySelector('.inc_collection_product_checkout_button_text').classList.remove('inc_loading')
                                            btn_cart.setAttribute('style','pointer-events: auto;')
                                        }
                                        if (window.innerWidth > 767){
                                            if (document.querySelector('#GotoCartButtonFromMiniBasket') != null){
                                                document.querySelector('#GotoCartButtonFromMiniBasket').click();
                                            } 
                                        } else {
                                            if (document.querySelector('#HeaderCartDisplay').innerText != 0){
                                                document.querySelector('#HeaderCartDisplay').click();
                                            }
                                        } 
                                        setTimeout(function(){
                                            removeincloader()
                                        },500)
                                        
                                    }
                                    if(url4 != ""){
                                        jQuery.ajax({
                                            type: "POST",
                                            url: url4,
                                            data: param4,
                                            async: false,
                                            // processData: false,
                                            // contentType: false,
                                            error: function(jqXHR, textStatus, errorMessage) {
                                                if(jqXHR.status == 403){
                                                    removeincloader()
                                                    window.location.reload()
                                                }
                                            },
                                            success: function(data) {
                                                
                                                // success_length++
                                                // update_cart_session()
                                                if(url5 == ""){
                                                    add_to_cart_tracking_multiple_col(mainProductId)
                                                    if(btn_cart != undefined){
                                                        btn_cart.classList.remove('inc_loading')
                                                        btn_cart.parentNode.setAttribute('style','pointer-events: auto;')
                                                    }
                                                    if(btn_cart.querySelector('.inc_collection_product_checkout_button_text') != null){
                                                        btn_cart.querySelector('.inc_collection_product_checkout_button_text').classList.remove('inc_loading')
                                                        btn_cart.setAttribute('style','pointer-events: auto;')
                                                    }
                                                    if (window.innerWidth > 767){
                                                        if (document.querySelector('#GotoCartButtonFromMiniBasket') != null){
                                                            document.querySelector('#GotoCartButtonFromMiniBasket').click();
                                                        } 
                                                    } else {
                                                        if (document.querySelector('#HeaderCartDisplay').innerText != 0){
                                                            document.querySelector('#HeaderCartDisplay').click();
                                                        }
                                                    }  
                                                    setTimeout(function(){
                                                        removeincloader()
                                                    },500)
                                                }
                                                if(url5 != ""){
                                                    jQuery.ajax({
                                                        type: "POST",
                                                        url: url5,
                                                        data: param5,
                                                        async: false,
                                                        // processData: false,
                                                        // contentType: false,
                                                        error: function(jqXHR, textStatus, errorMessage) {
                                                            if(jqXHR.status == 403){
                                                                removeincloader()
                                                                window.location.reload()
                                                            }
                                                        },
                                                        success: function(data) {
                                                            
                                                            if(url6 == ""){
                                                                add_to_cart_tracking_multiple_col(mainProductId)
                                                                if(btn_cart != undefined){
                                                                    btn_cart.classList.remove('inc_loading')
                                                                    btn_cart.parentNode.setAttribute('style','pointer-events: auto;')
                                                                }
                                                                if(btn_cart.querySelector('.inc_collection_product_checkout_button_text') != null){
                                                                    btn_cart.querySelector('.inc_collection_product_checkout_button_text').classList.remove('inc_loading')
                                                                    btn_cart.setAttribute('style','pointer-events: auto;')
                                                                }
                                                                if (document.querySelector('#GotoCartButtonFromMiniBasket') != null){
                                                                    document.querySelector('#GotoCartButtonFromMiniBasket').click();
                                                                } 
                                                                setTimeout(function(){
                                                                    removeincloader()
                                                                },500)
                                                            }
                                                            if(url6 != ""){
                                                                jQuery.ajax({
                                                                    type: "POST",
                                                                    url: url5,
                                                                    data: param5,
                                                                    async: false,
                                                                    // processData: false,
                                                                    // contentType: false,
                                                                    error: function() {
                                                                        removeincloader()
                                                                    },
                                                                    success: function(data) {
                                                                        
                                                                        if(url7 == ""){
                                                                            add_to_cart_tracking_multiple_col(mainProductId)
                                                                            if(btn_cart != undefined){
                                                                                btn_cart.classList.remove('inc_loading')
                                                                                btn_cart.parentNode.setAttribute('style','pointer-events: auto;')
                                                                            }
                                                                            if(btn_cart.querySelector('.inc_collection_product_checkout_button_text') != null){
                                                                                btn_cart.querySelector('.inc_collection_product_checkout_button_text').classList.remove('inc_loading')
                                                                                btn_cart.setAttribute('style','pointer-events: auto;')
                                                                            }
                                                                            if (window.innerWidth > 767){
                                                                                if (document.querySelector('#GotoCartButtonFromMiniBasket') != null){
                                                                                    document.querySelector('#GotoCartButtonFromMiniBasket').click();
                                                                                } 
                                                                            } else {
                                                                                if (document.querySelector('#HeaderCartDisplay').innerText != 0){
                                                                                    document.querySelector('#HeaderCartDisplay').click();
                                                                                }
                                                                            }
                                                                               
                                                                        }
                                                                        if(url7 != ""){
                                                                            jQuery.ajax({
                                                                                type: "POST",
                                                                                url: url5,
                                                                                data: param5,
                                                                                async: false,
                                                                                // processData: false,
                                                                                // contentType: false,
                                                                                error: function() {
                                                                                    
                                                                                },
                                                                                success: function(data) {
                                                                                    
                                                                                    if(url8 == ""){
                                                                                        add_to_cart_tracking_multiple_col(mainProductId)
                                                                                        if(btn_cart != undefined){
                                                                                            btn_cart.classList.remove('inc_loading')
                                                                                        }
                                                                                        if(btn_cart.querySelector('.inc_collection_product_checkout_button_text') != null){
                                                                                            btn_cart.querySelector('.inc_collection_product_checkout_button_text').classList.remove('inc_loading')
                                                                                        }
                                                                                        if (window.innerWidth > 767){
                                                                                            if (document.querySelector('#GotoCartButtonFromMiniBasket') != null){
                                                                                                document.querySelector('#GotoCartButtonFromMiniBasket').click();
                                                                                            } 
                                                                                        } else {
                                                                                            if (document.querySelector('#HeaderCartDisplay').innerText != 0){
                                                                                                document.querySelector('#HeaderCartDisplay').click();
                                                                                            }
                                                                                        } 
                                                                                         
                                                                                    }
                                                                                    if(url8 != ""){
                                                                                        jQuery.ajax({
                                                                                            type: "POST",
                                                                                            url: url5,
                                                                                            data: param5,
                                                                                            async: false,
                                                                                            // processData: false,
                                                                                            // contentType: false,
                                                                                            error: function() {
                                                                                                
                                                                                            },
                                                                                            success: function(data) {
                                                                                                
                                                                                                // success_length++
                                                                                                // update_cart_session()
                                                                                                add_to_cart_tracking_multiple_col(mainProductId)
                                                                                                if(btn_cart != undefined){
                                                                                                    btn_cart.classList.remove('inc_loading')
                                                                                                }
                                                                                                if(btn_cart.querySelector('.inc_collection_product_checkout_button_text') != null){
                                                                                                    btn_cart.querySelector('.inc_collection_product_checkout_button_text').classList.remove('inc_loading')
                                                                                                }
                                                                                                if (window.innerWidth > 767){
                                                                                                    if (document.querySelector('#GotoCartButtonFromMiniBasket') != null){
                                                                                                        document.querySelector('#GotoCartButtonFromMiniBasket').click();
                                                                                                    } 
                                                                                                } else {
                                                                                                    if (document.querySelector('#HeaderCartDisplay').innerText != 0){
                                                                                                        document.querySelector('#HeaderCartDisplay').click();
                                                                                                    }
                                                                                                }  
                                                                                                 

                                                                                            }
                                                                                        });
                                                                                    }   
                                                                                }
                                                                            });
                                                                        }
                                                                    }
                                                                });
                                                            }
                                                        }
                                                    });
                                                }
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    }
                });
            }
        }
    });
}

// function miniBasket_add_to_cart(){
//     if (WCParamJS != null) {
//         storeId = WCParamJS.storeId;
//         catalogId = WCParamJS.catalogId;
//         langId = WCParamJS.langId;
//     }
//     https://www.petsathome.com/shop/MiniBasketDisplayView?catalogId=10651&urlLangId=-1&langId=-1&storeId=10151
//     var param = "catalogId=" + catalogId + "&urlLangId=" + langId + "&langId=" + langId + "storeId=" +  storeId;
//     var url1 = "https://www.petsathome.com/shop/MiniBasketDisplayView?" + param
//     console.log("working not sure what's wrong");
//     jQuery.ajax({
//         type: "POST",
//         url: url1,
//         data: param1,
//         async: false,
//         // processData: false,
//         // contentType: false,
//         error: function() {
//             console.log("working not sure what's wrong error");
//         },
//         success: function(data) {
//             console.log("working not sure what's wrong success");
//             // success_length++
//             // update_cart_session()
//             if(url2 == ""){
//                 add_to_cart_tracking_multiple_col(mainProductId)
//                 if(btn_cart != undefined){
//                     btn_cart.classList.remove('inc_loading')
//                 }
//                 if (document.querySelector('#GotoCartButtonFromMiniBasket') != null){
//                     document.querySelector('#GotoCartButtonFromMiniBasket').click();
//                 }
                
//             }
//         }
//     });
// }

function update_cart_session(){
    var time_stmp=Math.round(new Date().getTime()/1000);
    
    if (window.location.hostname == "www.craghoppers.com") {
        var ses_url='https://www.craghoppers.com/customer/section/load/?sections=cart%2Cmessages&force_new_section_timestamp=true&_='+time_stmp+''
    }else if (window.location.host == "www.hawkshead.com") {
        var ses_url='https://www.hawkshead.com/customer/section/load/?sections=cart%2Cmessages&force_new_section_timestamp=true&_='+time_stmp+''
    } else if (window.location.host == "www.craghoppers.de") {
        var ses_url='https://www.craghoppers.de/customer/section/load/?sections=cart%2Cmessages&force_new_section_timestamp=true&_='+time_stmp+''
    }   

   
    
    jQuery.ajax({
        type: "GET",
        url: ses_url,
        async: true,
        error: function(jqXHR, textStatus, errorMessage) {
            
        },
        success: function(data) {
            // graph_pl()
            // setTimeout(function(){
                var update_cart_session=localStorage.getItem('mage-cache-storage');
                var cart_localstorage = JSON.parse(update_cart_session).cart   
                cart_localstorage =  data.cart;   
                
                
                // var total_p=0;
                
                // data.cart.summary_count = data.cart.items.length
                // for(p=0;p<data.cart.items.length;p++){
                //     total_p = total_p + data.cart.items[p].price
                // }
                // data.cart.subtotal = '<span class="price">£'+total_p+'</span>'
                // data.cart.subtotalAmount =  total_p
                // data.cart.subtotal_excl_tax = '<span class="price">£'+total_p+'</span>'
                // data.cart.subtotal_incl_tax= '<span class="price">£'+total_p+'</span>'
                // data.cart.grand_total= '<span class="price">£'+total_p+'</span>'
                // data.cart.grand_total_excl_tax= '<span class="price">£'+total_p+'</span>'
                // data.cart.grand_total_incl_tax= '<span class="price">£'+total_p+'</span>'
                
                // cart_localstorage.localStorage.setItem('cart',data.cart)
                cart_localstorage =  data.cart;   
            // },100)   
        }
    });

}


function getTrackingPixel() {
    if(window.location.hostname == "www.petsathome.com"){
        url = "";
    }
    /*-------------------Tracking with Image Pixel---------------------------*/
    // var oImg = document.createElement("img");
    // oImg.setAttribute('id', 'cstracking')
    // oImg.setAttribute('src', url);
    // oImg.setAttribute('height', '1px');
    // oImg.setAttribute('width', '1px');
    // oImg.setAttribute('style', 'display:none')
    // document.body.appendChild(oImg);
    /* -----------------------------------------------------------------------*/
}

function add_to_cart_tracking_multiple_col(source) {
    var eevent_type = "collection_add_to_cart";
    var productIdsforTracking = []

    pageType = "102";
    
    for (var k = 0; k < INC_COL.config.bundle_tracking.length; k++) {
        productIdsforTracking.push(INC_COL.config.bundle_tracking[k].id)
    }
    var sh_type = "1"
    if(window.location.href.indexOf('incgs=1') >= 0){
        sh_type = "1"
    }else if(window.location.href.indexOf('incgs=2') >= 0){
        sh_type = "2"
    }else if(window.location.href.indexOf('incgs=3') >= 0){
        sh_type = "3"
    }
    var all_data = [{"id":INC_COL.config.bundle_tracking[0].combo_id,"product_ids":productIdsforTracking,"incgs":sh_type}];
    data = {
        "eventData": btoa((JSON.stringify({
            "event_data": {
                "combo_data": all_data
            },
            "page_type": pageType.toString(),
            "event_type": eevent_type,
            "method": "track",
            "platform": "",
            "token": INC_COL.config.clientToken
        }))),
        "vid": INC_COL.config.ivid,
        "time": getCurrentFormattedTime(),
        "uri": document.location.href
    };
    makeTrackingApiCall(JSON.stringify(data));

    
}
function add_to_cart_tracking_multiple(mainProductId) {
    var event_type = "bundle_add_to_cart";
    var core_prod_id = "";
    var productIdsforTracking = []
    core_prod_id = mainProductId;

    pageType = "100";
    // eventdata = { "id": bundleId, "product_ids": productIdsforTracking, "product_id": core_prod_id.toString() }
    var all_data = [];
    for (var k = 0; k < INC_COL.config.bundle_tracking.length; k++) {
        if (INC_COL.config.bundle_tracking.length == 1) {
            productIdsforTracking.push(mainProductId)
            productIdsforTracking.push(INC_COL.config.bundle_tracking[k].id)
            all_data.push({
                id: parseInt(INC_COL.config.bundle_tracking[k].bid),
                product_ids: productIdsforTracking,
                product_id: core_prod_id
            })
            productIdsforTracking = []
        } else {
            if (mainProductId != INC_COL.config.bundle_tracking[k].id) {
                productIdsforTracking.push(mainProductId)
                productIdsforTracking.push(INC_COL.config.bundle_tracking[k].id)
                all_data.push({
                    id: parseInt(INC_COL.config.bundle_tracking[k].bid),
                    product_ids: productIdsforTracking,
                    product_id: core_prod_id
                })
                productIdsforTracking = []
            }
        }
    }
    data = {
        "eventData": btoa((JSON.stringify({
            "event_data": {
                "bundle_data": all_data
            },
            "page_type": pageType.toString(),
            "event_type": event_type,
            "method": "track",
            "platform": "",
            "token": INC_COL.config.clientToken,
            "mb": "1"
        }))),
        "vid": INC_COL.config.ivid,
        "time": getCurrentFormattedTime(),
        "uri": document.location.href
    };
    makeTrackingApiCall(JSON.stringify(data));


}
function makeTrackingApiCall(eventdata) {
    //console.log("TRACKING");
    p_url = '//optimizedby.increasingly.co/ImportData';
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                if (xhr.responseText != "" && xhr.responseText != null) {
                    // m_incBndle.DataModel.jsonData = xhr.responseText;
                    // callback(m_incBndle.DataModel.jsonData)
                } else {
                    //console.log(xhr);
                }
            }
        }
    };
    xhr.open("POST", p_url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(eventdata);
}
function getCurrentFormattedTime() {
    var d = new Date();
    var currentTime = (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds());
    return currentTime;
}
INC_COL.methods.getBasketID = function () {
    var cookieArray = document.cookie.split(";");
    var basketID = "";
    cookieArray.forEach(function (cookie) {
        var cookieSplit = cookie.split("=");
        // if (cookieSplit[0].trim() == "travisperkins-cart") {
        //     if (INC_COL.debug) console.log(cookieSplit[1].trim());
        //     basketID = cookieSplit[1].trim();
        // }
    });

    return basketID;
};

INC_COL.methods.checkStatusVAT = function () {
    if (INC_COL.methods.checkStatusLoggedIn()) return "false";
    var cookieArray = document.cookie.split(";");
    var statusVAT = "true";
    cookieArray.forEach(function (cookie) {
        var cookieSplit = cookie.split("=");
        if (cookieSplit[0].trim() == "includeVat") {
            // if (INC_COL.debug) console.log(cookieSplit[1].trim());
            statusVAT = cookieSplit[1].trim();
        }
    });

    return statusVAT;
}

INC_COL.methods.checkStatusLoggedIn = function () {
    var cookieArray = document.cookie.split(";");
    var statusLoggedIn = false;
    cookieArray.forEach(function (cookie) {
        var cookieSplit = cookie.split("=");
        if (cookieSplit[0].trim() == "customer_name") {
            statusLoggedIn = true;
        }
    });

    return statusLoggedIn;
}

INC_COL.methods.getCookieValue = function (cookieName) {
    var cookieArray = document.cookie.split(";");
    var cookieValue = "";
    cookieArray.forEach(function (cookie) {
        var cookieSplit = cookie.split("=");
        if (cookieSplit[0].trim() == cookieName) cookieValue = cookieSplit[1].trim();
    });

    return cookieValue
}


INC_COL.methods.trackingEvents = function (eventType, eventDataObj, pageType) {

    // var importEventDataObj = new INC_COL.classes.EventData(eventDataObj);
    pageType = "102";
    var importEventDataObj = {};
    var importDataObj = {};
    var rt_type = "5"
    if(window.location.href.indexOf('incgs=1') >= 0){
        rt_type = "4"
    }else if(window.location.href.indexOf('incgs=2') >= 0){
        rt_type = "5"
    }else if(window.location.href.indexOf('incgs=3') >= 0){
        rt_type = "6"
    }
    importEventDataObj["event_data"] = eventDataObj;

    switch (eventType) {
        case "productPageVisit":
            importEventDataObj["event_type"] = "product_page_visit";
            importEventDataObj["method"] = "track";
            break;
        case "catalogProductView":
            importEventDataObj["event_type"] = "catalog_product_view";
            importEventDataObj["page_type"] = "catalog_product_view";
            importEventDataObj["method"] = "track";
            break;
        case "bundleProductClickTracking":
            importEventDataObj["event_type"] = "bundle_product_click_tracking";
            importEventDataObj["page_type"] = pageType;
            importEventDataObj["rt"] = rt_type;
            importEventDataObj["is_logged"] = "0";
            importEventDataObj["method"] = "track";
            INC_COL.methods.sendAffiliateRequest();
            break;
        case "bundleAddToCart":
            importEventDataObj["event_type"] = "bundle_add_to_cart";
            importEventDataObj["page_type"] = pageType;
            importEventDataObj["is_logged"] = (INC_COL.clientConfig.statusLoggedIn == true) ? "1" : "0";
            importEventDataObj["method"] = "track";
            INC_COL.methods.sendAffiliateRequest();
            break;
    }

    importEventDataObj["platform"] = "";
    importEventDataObj["token"] = INC_COL.config.clientToken;
    importEventDataObj["collection"] = '1';
    importDataObj["eventData"] = btoa(JSON.stringify(importEventDataObj));
    importDataObj["uri"] = window.location.href;
    importDataObj["vid"] = INC_COL.config.ivid;
    INC_COL.methods.sendTrackingEvents(importDataObj);
}

INC_COL.methods.sendTrackingEvents = function (importDataObj) {
    

    var xhr = new XMLHttpRequest();
    var method = "POST";
    // var url = "https://optimizedby.increasingly.co/ImportData";
    var url = INC_COL.config.trackingURL;
    xhr.onreadystatechange = handleStateChange;

    xhr.open(method, url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    function handleStateChange() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // logger(xhr.responseText);
        }
    }

    xhr.send(JSON.stringify(importDataObj));
}

INC_COL.methods.sendAffiliateRequest = function () {
    var url = INC_COL.config.affiliateURL;
    var oImg = document.createElement("img");
    oImg.setAttribute('id', 'cstracking')
    oImg.setAttribute('src', url);
    oImg.setAttribute('height', '1px');
    oImg.setAttribute('width', '1px');
    oImg.setAttribute('style', 'display:none')
    document.body.appendChild(oImg);
}
INC_COL.methods.addVisitorID = function () {

    function generateUniqueINCVisitorId(len, bits) {

        var bits = bits || 36;
        var outStr = "";
        var newStr;
        while (outStr.length < len) {
            newStr = Math.random().toString(bits).slice(2);
            outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
        }
        return outStr;
    }

    var cookieArray = document.cookie.split(";");
    var ivid = "";
    cookieArray.forEach(function (cookie) {
        var cookieSplit = cookie.split("=");
        if (cookieSplit[0].trim() == "ivid") {
            ivid = cookieSplit[1].trim();
        }
    });

    if (ivid.length == 0) {
        ivid = generateUniqueINCVisitorId(42, 16);
        document.cookie = "ivid=" + ivid + ";" + "expires=16 Jul 2021 06:23:41 GMT;" + "path=/";
    }
    console.log("ivid: " + ivid);

    var oImg = document.createElement("img");
    oImg.setAttribute('src', "//optimizedby.increasingly.co/GetVisitorId?ivid=" + ivid);
    oImg.setAttribute('height', '1px');
    oImg.setAttribute('width', '1px');
    oImg.setAttribute('style', 'display:none');
    document.body.appendChild(oImg);

    INC_COL.config.ivid = ivid;

    return ivid;
}



INC_COL.checkDevUserCookie();



document.onclick = clickListener;
    
function clickListener(e) {
    var clickedElement = (window.event) ?
    window.event.srcElement :
    e.target,
    tags = document.getElementsByTagName(clickedElement.tagName);
    try{
        if(clickedElement != null){
            if(clickedElement.className == "inc_product_modal_block active"){
                document.querySelector('html').classList.remove('inc_overlay');
                if(document.querySelector('.inc_product_Info_Full_desc_info_block.show_full_desc') != null){
                    document.querySelector('.inc_product_Info_Full_desc_info_block.show_full_desc .close_read_more').click()
                }
                clickedElement.classList.remove('active')
            }
            if(clickedElement.className == "inc_collection_modal_block active"){
                document.querySelector('html').classList.remove('inc_overlay');
                document.querySelector('html').classList.remove('inc_prevent_scroll')
                document.querySelector('html').style.overflow = "auto";
                clickedElement.classList.remove('active')
                // INC_COL.methods.updateBundleCart({ sku: sku, qty: qty }, "add",main_id,bundle_id,null,null);
            }
            if(clickedElement.className == "inc_pdp_bundle_cart_overlay_block active"){
                document.querySelector('.inc_pdp_bundle_cart_title_img_block').click()
            }
            
        }

        if(clickedElement.parentNode != null){
            if(clickedElement.className != "inc_product_desc_att_zero_title_text_selected" && clickedElement.className != "inc_product_desc_att_color_title_text_selected" && clickedElement.parentNode.className != "inc_product_desc_att_color_title_text_block" && clickedElement.className != "inc_product_desc_att_zero_title_text" &&  clickedElement.className != "inc_product_desc_att_zero_title_text_block" && clickedElement.className != "inc_product_desc_add_block" && clickedElement.className != "inc_product_desc_add_text" && clickedElement.className != "img_color_swatch" && clickedElement.className != "inc_product_desc_att_size_title_text_selected" && clickedElement.className != "inc_product_desc_att_size_title_text" && clickedElement.className != "inc_product_desc_att_size_title_text_block"){
                if(document.querySelector('.inc_product_desc_att_block .show_dropdown') != null){
                    document.querySelector('.inc_product_desc_att_block .show_dropdown').classList.remove('show_dropdown')
                }
            }
        }
        
    }
    catch (err) {
        var formData = new FormData();
        formData.append("EmailId", "shashi@increasingly.com");
        formData.append("Subject", 'JS Error on Avon cz collection');
        formData.append("Message", err + 'Error Stack' + err.stack + " -- " + window.location.href);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", '//api.increasingly.co/SendEmail', true);
        xhr.send(formData);
    } 
}

function login_user(){
    if(document.querySelector('.authenticated-user a') != null){
        if(document.querySelector('.authenticated-user a').innerText.indexOf('increasingly') >= 0){

            return true
        }

    }
}

function read_more_inc(element){
    var prod_desc_block = element.parentNode.parentNode.parentNode;
    prod_desc_block.querySelector('.inc_product_Info_Full_desc_info_block').classList.toggle('show_full_desc')
}


//window.location.pathname.indexOf('/ca/')

function slideTo(id, n, elm, type_of) {
    if (elm.className == "left_arrow" || elm.className == "left_arrow active") {
        var nn = -1
        inc_showSlides(INC_COL.config.inc_slideIndex += nn, nn, elm, type_of);
    } else {
        var nn = 1
        inc_showSlides(INC_COL.config.inc_slideIndex += nn, nn, elm, type_of);
    }
}

function inc_showSlides(n, ind, elm,type_of) {
    //inc_collection_module_block active
    var i;
    if(document.querySelector('.inc_collection_modal_block.active') == null){
        var showcase_other_img_list = elm.querySelector('.inc_product_module_block .inc_product_showcase_block .inc_product_img_main_img a')
        var modal_other_img_list=elm.querySelector('.inc_product_module_block .inc_product_modal_block .inc_product_img_main_img a')
        var showcase_dots=elm.querySelectorAll('.inc_product_module_block .inc_product_showcase_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block')
        var modal_dots=elm.querySelectorAll('.inc_product_module_block .inc_product_modal_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block')

        var showcase_other_img = elm.querySelector('.inc_product_module_block .inc_product_showcase_block .inc_product_img_main_img a img')

        var modal_other_img = elm.querySelector('.inc_product_module_block .inc_product_modal_block .inc_product_img_main_img a img')
    }else{
        var modal_other_img_list=elm.querySelector('.inc_collection_module_block.active .inc_product_img_main_img a')
        var showcase_other_img_list = elm.querySelector('.inc_collection_module_block.active .inc_product_img_main_img a')
        var modal_dots=elm.querySelectorAll('.inc_collection_module_block.active .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block')
        var showcase_dots=elm.querySelectorAll('.inc_collection_module_block.active .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block')
        var modal_other_img = elm.querySelector('.inc_collection_module_block.active .inc_product_img_main_img a img')
        var showcase_other_img = elm.querySelector('.inc_collection_module_block.active .inc_product_img_main_img a img')
    }

    if(document.querySelector('.inc_collection_modal_block.active') == null){
        var otherImg_list=showcase_other_img_list.getAttribute('otherImageList');
        var get_org_img = showcase_other_img_list.getAttribute('imageURL')
    }else{
        var otherImg_list=modal_other_img_list.getAttribute('otherImageList');
        var get_org_img = modal_other_img_list.getAttribute('imageURL')
    }
    
    var additional_img=[]
    var additional_img = otherImg_list.split(',');
    
    if (n > additional_img.length) {
        INC_COL.config.inc_slideIndex = 1
    }
    if (n < 1) {
        INC_COL.config.inc_slideIndex = additional_img.length
    }
    
    for (i = 0; i < showcase_dots.length; i++) {
        if(document.querySelector('.inc_collection_modal_block.active') != null){
            showcase_dots[i].classList.remove('active')
        }
        if(modal_dots[i] != undefined){
            modal_dots[i].classList.remove('active')
        }
    }
    var img_src = additional_img[INC_COL.config.inc_slideIndex - 1];
    if(document.querySelector('.inc_collection_modal_block.active') != null){
        showcase_other_img.setAttribute('src',img_src);
        showcase_other_img.setAttribute('onerror',"this.src='"+INC_COL.config.noimage+"'" );
    }
    modal_other_img.setAttribute('src',img_src)
    
    modal_other_img.setAttribute('onerror',"this.src='"+INC_COL.config.noimage+"'" );
    
    for (var r = 0; r < showcase_dots.length; r++) {
        if(document.querySelector('.inc_collection_modal_block.active') != null){
            showcase_dots[r].classList.remove('active');
        }
        
        modal_dots[r].classList.remove('active');
        
    }
    if(document.querySelector('.inc_collection_modal_block.active') != null){
        if (showcase_dots[INC_COL.config.inc_slideIndex - 1] != null) {
            showcase_dots[INC_COL.config.inc_slideIndex - 1].classList.add('active');
        }
    }
    if (modal_dots[INC_COL.config.inc_slideIndex - 1] != null) {
        modal_dots[INC_COL.config.inc_slideIndex - 1].classList.add('active');
    }
}
// SWIPE FEATURE
var xDown = null;
var yDown = null;

function add_swipe(element) {
    element.addEventListener('touchstart', handleTouchStart, false);
    element.addEventListener('touchmove', handleTouchMove, false);
}

function handleTouchStart(evt) {
    xDown = evt.touches[0].clientX;
    yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }
    var xUp = evt.touches[0].clientX;
    var yUp = evt.touches[0].clientY;
    var xDiff = xDown - xUp;
    var yDiff = yDown - yUp;
    if (Math.abs(xDiff) + Math.abs(yDiff) > 150) { //to deal with to short swipes
        if (Math.abs(xDiff) > Math.abs(yDiff)) { /*most significant*/
            if (xDiff > 0) {
                console.log("Math.abs(xDiff) + Math.abs(yDiff) > 150")
                var prod_card=evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                slideTo(null,0,prod_card,"left")
            } else { /* right swipe */
                console.log("Math.abs(xDiff) + Math.abs(yDiff) > 150  else")
                var prod_card=evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                slideTo(null,0,prod_card,"right")
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    }
    if (Math.abs(xDiff) + Math.abs(yDiff) < 150) {
        if (Math.abs(xDiff) > Math.abs(yDiff)) { /*most significant*/
            if (xDiff > 0) { /* left swipe */
                var prod_card=evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                slideTo(null,0,prod_card,"left")
            } else { /* right swipe */
                var prod_card=evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                slideTo(null,0,prod_card,"right")
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    }
}


function attribute_listing(valueArray) {
    var allattr = valueArray
    sortingArr = ["color","size"];
    sorting = ["color","size"];
    for(a=0;a<allattr.length;a++){
        if(sortingArr.indexOf(allattr[a].attributeCode) == -1){
            // valueArray[a].attributeCode = "color"
            // sortingArr.push(allattr[a].attributeCode)
            sorting.push(allattr[a].attributeCode)
        }
    }
    // sortingArr = ["color","size"];

    items = valueArray

    // sorting = ["color","size"];
    result = []

    sorting.forEach(function(key) {
        var found = false;
        items = items.filter(function(item) {
            if (!found && item.attributeCode == key) {
                result.push(item);
                found = true;
                return false;
            } else
                return true;
        })
    })
    return result;
}


function get_discount_price(p_original_price, p_sale_price) {
    //Math.round(((p_original_price - p_sale_price) / p_original_price) * 100);
    return parseFloat(+p_original_price - +p_sale_price)
}


function default_varients_click(){
    if(document.querySelector('.inc_collection_module_product_block.active .inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.avail') != null){
        if(document.querySelector('.inc_collection_module_product_block.active .inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.avail.active') == null){
            document.querySelector('.inc_collection_module_product_block.active .inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.avail').click();
        }
    }
    if(document.querySelector('.inc_collection_module_product_block.active .inc_product_desc_att_size_list_item_img_block.avail') != null){
        if(document.querySelector('.inc_collection_module_product_block.active .inc_product_desc_att_size_list_item_img_block.avail.active') == null){
            document.querySelector('.inc_collection_module_product_block.active .inc_product_desc_att_size_list_item_img_block.avail').click();
        }
    }
    
    if(document.querySelector('.inc_collection_module_product_block.active .inc_product_desc_att_third_list_item_img_block') != null){
        if(document.querySelector('.inc_collection_module_product_block.active .inc_product_desc_att_third_list_item_img_block.active') == null){
            document.querySelector('.inc_collection_module_product_block.active .inc_product_desc_att_third_list_item_img_block').click();
        }
    }
    if(document.querySelector('.inc_collection_module_product_block.active .inc_product_desc_att_color_list_item_block') != null){
        if(document.querySelector('.inc_collection_module_product_block.active .inc_product_desc_att_color_list_item_block.active') == null){
            if(document.querySelector('.inc_collection_module_product_block.active .inc_product_desc_att_color_list_item_img') != null){
                document.querySelector('.inc_collection_module_product_block.active .inc_product_desc_att_color_list_item_img').click();
            }
        }
    }
}

function repare_bundle_prod_oos(){
    
}




//collection code starts here

INC_COL.methods.irbReq_collection_bundle = function (productId, bundleCount, elementName) {

    var elementName = "catalog_product_view";
    var Pid = INC_COL.methods.getProductIdFromWebPage();
    if(INC_COL.config.pageType == "productList"){
        var elementName = "catalog_category_view";
        // if (window.innerWidth > 767){
        //     if(document.querySelector('#GotoCartButtonFromMiniBasket') != null){
                if(document.querySelector('.ProductListHeading h1') != null){
                    Pid =  document.querySelector('.ProductListHeading h1').innerText.trim()//.toUpperCase();
                }else{
                    var product_category = [];
                    if (document.querySelectorAll('#containerModal .breadcrumb__wrapper .breadcrumb li') != null) {
                        var pr_cat = document.querySelectorAll('#containerModal .breadcrumb li.breadcrumb__item');
                        for (var k = 0; k < pr_cat.length; k++) {
                            if (k != 0) {
                                if (pr_cat.length == k+1) {
                                    var category_data = pr_cat[k].innerText.replace('&amp;', '&').trim();
                                    product_category.push(category_data);
                                }
                            }
                        }
                    }
                    if(product_category.length != 0){
                        Pid = product_category[0].replace(/\s+/g, '_').toLowerCase();
                    }

                    if (Pid == "crates_&_accessories" || Pid == "dog_accessory_bundles" || Pid == "black_friday_-_shop_all" || Pid == "black_friday_-_dog" || Pid == "black_friday_-_bedding" || Pid == "crates_&_travel" || Pid == "kennels_&_containment" || Pid == "dog_beds" || Pid == "puppy_crates,_gates_&_pens" || Pid == "puppy_training" || Pid == "free_crate_mat_&_toy_when_you_buy_a_dog_crate") {
                        Pid = "dog_crates_and_accessories"
                    } 
                }
                var productId = Pid;
        //     }
        // }
        
    }
    var shooping_type = "2"
    if(window.location.href.indexOf('incgs=1') >= 0){
        shooping_type = "1"
    }else if(window.location.href.indexOf('incgs=3') >= 0){
        shooping_type = "3"
    }
    //btoa('EDP a EDT')
    var apiKey = 'p3ThM9';
    var irbPATH = "//rapidload.increasingly.co/increasingly_bundles?irb/";
    var set = "1"
    if(INC_COL.config.pageType == "pdp"){
        var irbReqParams =
        "product_ids=" + INC_COL.config.pdpPID + 
        "&category_id=" + 
        "&api_key=" + apiKey +
        "&client_id=" +
        "&page_type=" + 'catalog_product_view' +
        "&set=" + set +
        "&cid=" + INC_COL.config.pdpCID +
        "&incgs=" + shooping_type +
        "&client_visitor_id=" + INC_COL.config.ivid 
        ;
    }else{
        var irbReqParams =
        "product_ids=" + 
        "&category_id=" + Base64.encode(productId) + 
        "&api_key=" + apiKey +
        "&client_id=" +
        "&page_type=" + "catalog_category_view" +
        "&client_visitor_id=" + INC_COL.config.ivid +
        "&set=" + set +
        "&npb=" + "2"
        ;
    }
    if (INC_COL.debug) console.log(irbReqParams);
    var irbReqURL1 = decodeURI(irbPATH + btoa(irbReqParams));
    var networkConfigObj = new INC_COL.classes.NWConfig();
    networkConfigObj["url"] = irbReqURL1;
    
    var xhr = new XMLHttpRequest();
    xhr.open("GET", networkConfigObj["url"], true);

    xhr.onload = function () { }
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status === 200) {
            IRB_flag=true
            if(xhr.response != ""){
                INC_COL.dataStore.methods().buildDataStoreObj(JSON.parse(xhr.response),'collection');
                
            }else{
                irbobservload=true
                if(document.querySelector('.container-100--nowrap') != null){
                    document.querySelector('.container-100--nowrap').style.display="flex";
                }

                if (document.querySelector('.click-collect') != null){
                    document.querySelector('.click-collect').style.display="flex";
                }

                if (document.querySelector('.spacer-bottom-60') != null){
                    document.querySelector('.spacer-bottom-60').style.display="flex";
                }
            }
        }
    }

    xhr.send(JSON.stringify(networkConfigObj["params"]));
    
}




function generate_html_tag(element, className) {
    var generateEl = document.createElement(element);
    className ? generateEl.classList.add(className) : null;
    return generateEl;
}

INC_COL.methods.createCollectionProductModalBlock = function (pdpProductId, blockType, bundleProductListCheck,parentblock) {
    var classNames = INC_COL.uiConfig[blockType].className;
    var productBlock = this.getElementChilds("productBlock", blockType);
    var findObj = new INC_COL.classes.FindObj({ id: pdpProductId });
    var productObj = INC_COL.dataStore.methods().getProductById(findObj);
    // var productColorText = productObj["option"]["0"].text;
    var getSelectorClassName = this.getSelectorClassName;

    
    if((productObj.ProductStatus == 1 && productObj.Quantity == 0) || (productObj.ProductStatus == 3)){
        productBlock.setAttribute('stock_status', 'inc_oos');
    }else{
        productBlock.setAttribute('stock_status', 'inc_instock');
    }
    productBlock.setAttribute('data-id', productObj.id);
    productBlock.setAttribute('data-sku', productObj.sku);
    productBlock.setAttribute('data-main_id', productObj.mainId);
    productBlock.setAttribute('data-bundle_id', productObj.bundleId);
    productBlock.setAttribute('data-combo_id', productObj.comboId);
    var main_prod_id = productObj.mainId
    function getViewElement(className) {
        return productBlock.querySelector(getSelectorClassName(classNames, className));
    }

    var elHeader = getViewElement("productHeaderBlock");
    var elInfoText = getViewElement("productInfoText");
    var elImgBlock = getViewElement("productImgBlock");
    var elImgGalleryListBlock = getViewElement("productImgGalleryListBlock");
    var elTitleBlock = getViewElement("productTitleBlock");
    var elTitleText = getViewElement("productTitleText");
    var elPriceActiveText = getViewElement("productPriceActiveText");
    var elPriceActiveMsg = getViewElement("productPriceActiveTextMsg");
    var elPriceRegularText = getViewElement("productPriceRegularText");
    var elAttBlock = getViewElement("productAttBlock");
    var elAttColorBlock = getViewElement("productAttColorBlock");
    var elAttColorTitleText = getViewElement("productAttColorTitleText");
    var elAttColorTitleTextSelected = getViewElement("productAttColorTitleTextSelected");
    var elAttColorListBlock = getViewElement("productAttColorListBlock");
    var elAttSizeBlock = getViewElement("productAttSizeBlock");
    var elAttSizeTitleBlock = getViewElement("productAttSizeTitleBlock");
    var elAttSizeTitleText = getViewElement("productAttSizeTitleText");
    var elAttSizeTitleTextSelected = getViewElement("productAttSizeTitleTextSelected");

    var elcolortitleblock = getViewElement("productAttColorTitleBlock");
    var elsizetitleblock = getViewElement("productAttSizeTitleBlock");
    var elzerotitleblock = getViewElement("productAttzeroTitleBlock");
    var elthirdtitleblock = getViewElement("productAttthirdTitleBlock");
    var elfourthtitleblock = getViewElement("productAttfourthTitleBlock");
    var elAttSizeListBlock = getViewElement("productAttSizeListBlock");
    var elAtt0ListBlock = getViewElement("productAttzeroListBlock");
    var elAtt3ListBlock = getViewElement("productAttthirdListBlock");
    var elAtt4ListBlock = getViewElement("productAttfourthListBlock");

    var elAtt0Block = getViewElement("productAttzeroBlock");
    var elAtt3Block = getViewElement("productAttthirdBlock");
    var elAtt4Block = getViewElement("productAttfourthBlock");
    var elAtt0TitleTextSelected = getViewElement("productAttzeroTitleTextSelected");
    var elAtt0TitleText = getViewElement("productAttzeroTitleText");
    var elAtt3TitleTextSelected = getViewElement("productAttthirdTitleTextSelected");
    var elAtt3TitleText = getViewElement("productAttthirdTitleText");
    var elAtt4TitleTextSelected = getViewElement("productAttfourthTitleTextSelected");
    var elAtt4TitleText = getViewElement("productAttfourthTitleText");
    var elproductInStockBlock = getViewElement("productInStockBlock");
    var elPackOfListBlock = getViewElement("productPackOfListBlock");
    var elQtyBlock = getViewElement("productQtyBlock");
    var elQtyInputText = getViewElement("productQtyInputText");
    var elQtyDownBlock = getViewElement("productQtyDownBlock");
    var elQtyUpBlock = getViewElement("productQtyUpBlock");
    var elAddBlock = getViewElement("productAddBlock");
    var elAddText = getViewElement("productAddText");
    var elAddImg = getViewElement("productAddImg");
    var elratingsBlock = getViewElement("productRatingsBlock");
    var elFullDesctext = getViewElement("productInfoFullDescText");
    var elworthPrice = getViewElement("productPriceWorthText");
    var elGalleryRightArrow = getViewElement("productImgGalleryRightBlock");
    var elGallerylefttArrow = getViewElement("productImgGalleryLeftBlock");
    

    elHeader.querySelector(getSelectorClassName(classNames, "productHeaderImgBlock")).addEventListener("click", function () {
        if(document.querySelector('.inc_sidebar_modal_block.active') == null){
            document.querySelector('html').classList.remove('inc_overlay');
        }
        if(document.querySelector('.inc_sidebar_modal_block.active') != null){
            document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
        }
        if(productBlock.querySelector('.close_read_more') != null){
            productBlock.querySelector('.close_read_more').click()
        }
        if(document.querySelector('.inc_collection_modal_block.active') != null){
            document.querySelector('.inc_collection_modal_block.active').classList.remove("active");
        }else{
            productBlock.parentNode.classList.remove("active");
        }
        
    });

    var elImgMainImg = elImgBlock.querySelector(getSelectorClassName(classNames, "productImgMainImg"));
    var elImgTag1 = this.generateHTMLTags('img', { src: productObj.imageURL });
    elImgTag1.setAttribute('onerror',"this.src='"+INC_COL.config.noimage+"'" );
    elImgTag1.setAttribute('alt',productObj.name)

    var productLink = document.createElement('a');

    productLink.href = productObj.url.split('?')[0];
    productLink.appendChild(elImgTag1);
    productLink.setAttribute('otherImageList',productObj["otherImageList"])
    productLink.setAttribute('imageURL',productObj["imageURL"])
    add_swipe(productLink)
    
    

    elImgMainImg.appendChild(productLink);
    elImgMainImg.addEventListener("click", function (e) {
        // INC_COL.methods.sendBundleClickTracking(productBlock.getAttribute('data-id'));
        e.preventDefault();
        INC_COL.methods.sendBundleClickTracking(productBlock.getAttribute('data-id'));
        var href = productBlock.querySelector('.inc_product_img_main_img a').href
        setTimeout(function(){
            window.location.href = href
        },2000)
    });

    elImgGalleryListBlock.innerHTML = "";
    
    if ((productObj.otherImageList != null) && productObj.otherImageList.length > 1) {
        var otimg=0
        productObj.otherImageList.forEach(function (otherImgURL) {
            var elOtherImgTag = INC_COL.methods.generateHTMLTags('img', { src: otherImgURL });
            elOtherImgTag.setAttribute('alt',productObj.name)
            elOtherImgTag.setAttribute('onerror',"this.src='"+INC_COL.config.noimage+"'" );

            var elImgGalleryListItemBlock = INC_COL.methods.getElementChilds("productImgGalleryListItemBlock", blockType);

            var elImgGalleryListItemImg = elImgGalleryListItemBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemImg"));

            elImgGalleryListItemImg.appendChild(elOtherImgTag);

            elImgGalleryListItemBlock.addEventListener("click", function () {

                Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productImgGalleryListItemBlock")), function (galleryListItemBlock) {
                    galleryListItemBlock.classList.remove("active");
                });

                elImgGalleryListItemBlock.classList.add("active");

                elImgMainImg.querySelector('img').src = otherImgURL;
                elImgMainImg.querySelector('img').setAttribute('onerror',"this.src='"+INC_COL.config.noimage+"'" );
            })

            elImgGalleryListBlock.appendChild(elImgGalleryListItemBlock);
            if(otimg == 0){
                elImgGalleryListItemBlock.classList.add('active')
            }
            otimg++;
            if(productObj.otherImageList.length > 4){
                elImgGalleryListItemBlock.parentNode.classList.add("flex-start")
            }
        });

    }

    elTitleBlock.addEventListener("click", function (e) {
        // INC_COL.methods.sendBundleClickTracking(productBlock.getAttribute('data-id'));
        e.preventDefault();
        INC_COL.methods.sendBundleClickTracking(productBlock.getAttribute('data-id'));
        var href = productBlock.querySelector('.inc_product_img_main_img a').href
        setTimeout(function(){
            window.location.href = href
            // window.location.reload();
        },2000)
    });


    var pTitleDiv = document.createElement('div');
    pTitleDiv.innerText = productObj.name;

    // elHeader.querySelector(getSelectorClassName(classNames, "productHeaderTitleText")).innerText = productObj.name + " | " + productObj.categoryName;
    
    var field1 = productObj.ratingsCount;
    var field4 = productObj.reviewsCount;
    INC_COL.methods.get_product_ratings_col(field1,field4,elratingsBlock);
    var pLink = document.createElement('a');
    pLink.href = productObj.url.split('?')[0];
    pLink.setAttribute('title',productObj.name)
    pLink.appendChild(pTitleDiv);
    elTitleText.appendChild(pLink);

    //hubble-usp__item-title

    if((productObj.ProductStatus == 1 && productObj.Quantity > 0) ){
        elproductInStockBlock.innerText = "In stock"
    }
   

    var activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
    var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
    // var worthPrice =  get_discount_price(regularPrice,activePrice)

    
    // elPriceActiveMsg.innerText = " + VAT"
    elPriceRegularText.innerText = "";
    
    if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
        elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_price')
        elPriceActiveText.innerText = INC_COL.clientConfig.currencySymbol + formatter.format(activePrice)
        elPriceRegularText.innerText = INC_COL.clientConfig.regularPricePrefix + INC_COL.clientConfig.currencySymbol + 
        formatter.format(regularPrice)
        // elworthPrice.innerText = "Save " + formatter.format(worthPrice);
        // elworthPrice.style.display="flex"
        // elworthPrice.parentNode.parentNode.style.display="flex"
    }else{
        // elworthPrice.style.display="none"
        // elworthPrice.parentNode.parentNode.setAttribute('style','display:none !important')
        elPriceActiveText.innerText = INC_COL.clientConfig.currencySymbol + formatter.format(activePrice)
    }

    if (productBlock.querySelector('.pc_promo_div') == null && productObj.ProductLevelDiscountMessage != null && productObj.ProductLevelDiscountMessage != "") {
        var ec_promo_wrapper_div = document.createElement('div');
        ec_promo_wrapper_div.classList.add('pc_promo_header_div');
        ec_promo_wrapper_div.classList.add('inc_dual_promo')
        var ec_promo_header_div = document.createElement('div');
        ec_promo_header_div.classList.add('pc_promo_header_div');
        var ec_title_span = document.createElement('span');
        ec_title_span.classList.add('pc_title_span');
        ec_title_span.innerText = "Speciální nabídka";
        var ec_promo_div = document.createElement('div');
        ec_promo_div.classList.add('pc_promo_div')
        ec_promo_div.classList.add('inc_active')
        var ec_promo_span = document.createElement('span');
        ec_promo_span.classList.add('pc_promo_span')

        ec_promo_span.classList.add('red_promo')
        ec_promo_span.innerHTML = productObj.ProductLevelDiscountMessage.replace("_", " ");
        ec_promo_header_div.appendChild(ec_title_span);
        // ec_promo_header_div.appendChild(ec_promo_header_div);
        ec_promo_div.appendChild(ec_promo_span);
        ec_promo_wrapper_div.appendChild(ec_promo_header_div);
        ec_promo_wrapper_div.appendChild(ec_promo_div)
        var elPrice_blck = getViewElement("productInfoBlock");
        var view = elPrice_blck//productPriceBlock
        if (view != null || view != undefined) {
            // view.insertBefore(ec_promo_div, view.childNodes[0]);
            view.parentNode.insertBefore(ec_promo_wrapper_div, view);
        }
    } else if (productBlock.querySelector('.pc_promo_div') == null && productObj.promoMsg != null && productObj.promoMsg != "") {
        var ec_promo_div = document.createElement('div');
        ec_promo_div.classList.add('pc_promo_div')
        ec_promo_div.classList.add('inc_active')
        var ec_promo_span = document.createElement('span');
        ec_promo_span.classList.add('pc_promo_span')

        ec_promo_span.classList.add('red_promo')
        ec_promo_span.innerHTML = productObj.promoMsg.replace("_", " ")
        ec_promo_div.appendChild(ec_promo_span);

        var elPrice_blck = getViewElement("productInfoBlock");
        var view = elPrice_blck//productPriceBlock
        if (view != null || view != undefined) {
            // view.insertBefore(ec_promo_div, view.childNodes[0]);
            view.parentNode.insertBefore(ec_promo_div, view);
        }
    } else {
        var ec_promo_div = document.createElement('div');
        ec_promo_div.classList.add('pc_promo_div')
        ec_promo_div.classList.add('empty');
        var elPrice_blck = getViewElement("productInfoBlock");
        var view = elPrice_blck//productPriceBlock
        if (view != null || view != undefined) {
            // view.insertBefore(ec_promo_div, view.childNodes[0]);
            view.parentNode.insertBefore(ec_promo_div, view);
        }
    }

    var qty_title=document.createElement('label')
    qty_title.innerText = "Quantity"
    //elQtyBlock
    elQtyBlock.parentNode.insertBefore(qty_title, elQtyBlock);
    var elQtyInput = this.generateHTMLTags('input');
    elQtyInput.setAttribute('type', "number");
    elQtyInput.setAttribute('min', 1);
    elQtyInput.setAttribute('max', 99);
    elQtyInput.setAttribute('maxlength', 2);
    elQtyInput.value = 1;
    elQtyInput.setAttribute('old_qty', '1');
    elQtyInput.setAttribute('pattern', '[\d]{9}');
    elQtyInput.setAttribute("onkeydown", "if(event.key==='.'){event.preventDefault();}");
    elQtyInput.setAttribute('onKeyPress', 'if(this.value.length==2) return false;');
    elQtyInput.setAttribute("oninput", "validity.valid||(value='');");
    elQtyBlock.addEventListener("click", function () {
        if(productBlock.querySelector('.close_read_more') != null){
            productBlock.querySelector('.close_read_more').click()
        }
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productPackOfListBlock")), function (el) {
            el.classList.remove("active");
        });
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productAttSizeListBlock")), function (attSizeListBlock) {
            attSizeListBlock.classList.remove("active");
        });
        // console.log(elPackOfListBlock.className);
        elPackOfListBlock.classList.toggle("active");
    });

   

    elQtyInput.addEventListener("keydown", function () {
        setTimeout(function () {
            if (elQtyInput.value.length == 0) elQtyInput.value = 1;
            if (elQtyInput.value == 0) elQtyInput.value = 1;
            if (elQtyInput.value > 99) elQtyInput.value = 99;

            var productModuleBlock = productBlock.parentNode.parentNode;

            

            var id = productBlock.getAttribute('data-id');
            var qty = parseInt(elQtyInput.value);
            var main_id = productBlock.getAttribute('data-main_id');
            var bundle_id = productBlock.getAttribute('data-bundle_id');
            
            var pname=productBlock.querySelector('.inc_product_desc_title_text').innerText;
            var pprice=productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$','');
            var productModuleBlock = document.querySelector('.inc_collection_product_list_block[data-main_id="'+main_id+'"]');
            if(productModuleBlock != null){
                productModuleBlock.querySelector('.inc_product_desc_qty_input_block input').value =  parseInt(elQtyInput.value)
                if(parseInt(elQtyInput.value) > 1){
                    productModuleBlock.querySelector('.inc_product_desc_qty_block').classList.remove('singleqty')
                    productModuleBlock.querySelector('.inc_product_desc_qty_down_btn').setAttribute('title','')
                }else{
                    productModuleBlock.querySelector('.inc_product_desc_qty_block').classList.add('singleqty')
                    productModuleBlock.querySelector('.inc_product_desc_qty_down_btn').setAttribute('title','Remove')
                }
            }
            //
            // if (elAddText.innerText == "ADDED") {
            //     INC_COL.methods.updateBundleCart({ sku: id, qty: qty }, "add",main_id,bundle_id,pname,pprice);
            // }
        }, 50);

    });

    elQtyInputText.appendChild(elQtyInput);

    elQtyDownBlock.addEventListener('click', function () {
        
        if(productBlock.querySelector('.close_read_more') != null){
            productBlock.querySelector('.close_read_more').click()
        }
        var prod_card=elQtyInput.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        elQtyInput.value = (elQtyInput.value - 1 < 1) ? 1 : elQtyInput.value - 1;

        var productModuleBlock = productBlock.parentNode.parentNode;

       
    
        var id = productBlock.getAttribute('data-id');
        var qty = parseInt(elQtyInput.value);
        var bundle_id = productBlock.getAttribute('data-bundle_id');
        var main_id = productBlock.getAttribute('data-main_id');
        var productModuleBlock = document.querySelector('.inc_collection_product_list_block[data-main_id="'+main_id+'"]');
        if(productModuleBlock != null){
            productModuleBlock.querySelector('.inc_product_desc_qty_input_block input').value =  parseInt(elQtyInput.value)
            if(parseInt(elQtyInput.value) > 1){
                productModuleBlock.querySelector('.inc_product_desc_qty_down_btn').setAttribute('title','')
                productModuleBlock.querySelector('.inc_product_desc_qty_block').classList.remove('singleqty')
            }else{
                productModuleBlock.querySelector('.inc_product_desc_qty_block').classList.add('singleqty')
                productModuleBlock.querySelector('.inc_product_desc_qty_down_btn').setAttribute('title','Remove')
            }
        }
        // var pname=productBlock.querySelector('.inc_product_desc_title_text').innerText;
        // var pprice=productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$','');
        // if (elAddText.innerText == "ADDED" || elAddText.innerText == "UPDATE") {
            // INC_COL.methods.updateBundleCart({ sku: id, qty: qty }, "add",main_id,bundle_id,null,null);
        // }
    });

    elQtyUpBlock.addEventListener('click', function () {
        
        if(productBlock.querySelector('.close_read_more') != null){
            productBlock.querySelector('.close_read_more').click()
        }
        var prod_card=elQtyInput.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        elQtyInput.value = (parseInt(elQtyInput.value) + 1 > 99) ? 99 : parseInt(elQtyInput.value) + 1;

        var productModuleBlock = productBlock.parentNode.parentNode;

      

        var id = productBlock.getAttribute('data-id');
        var qty = parseInt(elQtyInput.value);
        var bundle_id = productBlock.getAttribute('data-bundle_id');
        var main_id = productBlock.getAttribute('data-main_id');
        var productModuleBlock = document.querySelector('.inc_collection_product_list_block[data-main_id="'+main_id+'"]');
        if(productModuleBlock != null){
            productModuleBlock.querySelector('.inc_product_desc_qty_input_block input').value =  parseInt(elQtyInput.value)
            if(parseInt(elQtyInput.value) > 1){
                productModuleBlock.querySelector('.inc_product_desc_qty_down_btn').setAttribute('title','')
                productModuleBlock.querySelector('.inc_product_desc_qty_block').classList.remove('singleqty')
            }else{
                productModuleBlock.querySelector('.inc_product_desc_qty_down_btn').setAttribute('title','Remove')
                productModuleBlock.querySelector('.inc_product_desc_qty_block').classList.add('singleqty')
            }
        }
        // var pname=productBlock.querySelector('.inc_product_desc_title_text').innerText;
        // var pprice=productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$','');
        // if (elAddText.innerText == "ADDED" || elAddText.innerText == "UPDATE") {
            // INC_COL.methods.updateBundleCart({ sku: id, qty: qty }, "add",main_id,bundle_id,null,null);
        // }
    });

    findObj = new INC_COL.classes.FindObj({ mainId: productObj.mainId });

    if(INC_COL.dataStore.methods().getProductColorsObj(findObj).colorArray.length == 0 && INC_COL.dataStore.methods().getProductopt0Obj(findObj).att0Array.length == 0){
        elHeader.querySelector(getSelectorClassName(classNames, "productHeaderTitleText")).innerText = "View Details";
    }else{
        if(INC_COL.dataStore.methods().getProductopt0Obj(findObj).att0Array.length > 0){
            if(INC_COL.dataStore.methods().getProductopt0Obj(findObj).att0Array[0] != undefined){
                elHeader.querySelector(getSelectorClassName(classNames, "productHeaderTitleText")).innerText = "View Details"//+INC_COL.dataStore.methods().getProductopt0Obj(findObj).att0Array[0].code+"";
            }else{
                elHeader.querySelector(getSelectorClassName(classNames, "productHeaderTitleText")).innerText = "View Details"//+INC_COL.dataStore.methods().getProductSizesObj(findObj).sizeArray[0].code+"";
            }
        }else if(INC_COL.dataStore.methods().getProductColorsObj(findObj).colorArray.length > 0) {
            if(INC_COL.dataStore.methods().getProductColorsObj(findObj).colorArray[0].code == "color"){
                elHeader.querySelector(getSelectorClassName(classNames, "productHeaderTitleText")).innerText = "View Details";
            }else{
                elHeader.querySelector(getSelectorClassName(classNames, "productHeaderTitleText")).innerText = "View Details"//+INC_COL.dataStore.methods().getProductColorsObj(findObj).colorArray[0].code+"";
            }
        }
    }
    
    var product0Obj = INC_COL.dataStore.methods().getProductopt0Obj(findObj);

    var productSizesObj = INC_COL.dataStore.methods().getProductSizesObj(findObj);

    var productColorsObj = INC_COL.dataStore.methods().getProductColorsObj(findObj);
    
    var product3Obj = INC_COL.dataStore.methods().getProductopt3Obj(findObj);

    var product4Obj = INC_COL.dataStore.methods().getProductopt4Obj(findObj);

//cpid
    
    var check_main_s=true
    var first_attr_acode = ["Connectivity","Number of SIM", "Device"]
    if(product0Obj["att0Array"][0] != undefined && product0Obj.att0Array.length > 0 && productSizesObj.sizeArray.length == 0 && productColorsObj.colorArray.length > 0 &&
        product3Obj["att3Array"][0] != undefined && product3Obj.att3Array.length > 0 && product4Obj["att4Array"][0] != undefined && product4Obj.att4Array.length > 0){
        if(first_attr_acode.indexOf(product0Obj["att0Array"][0].code) == -1){
            console.log("s")
            check_main_s = false;
        }
    }

    if(check_main_s){
        if(product0Obj.att0Array.length > 0){
            if(product0Obj["att0Array"][0].code != "color"){
                findObj = new INC_COL.classes.FindObj({ mainId: productObj.mainId });
                elAtt0ListBlock.innerHTML = "";
                var product0Obj = product0Obj;
                var productSizeText = "";
                if (product0Obj["att0Array"].length > 0) {
                    elAtt0TitleText.innerText = product0Obj["att0Array"][0].code;
                    elAtt0Block.classList.add("active");
                    product0Obj["att0Array"].forEach(function (sizeObj) {
                        var attSizeBlock0 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemBlock"] });
                        var attSizeImgBlock0 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImgBlock"] });
                        var attSizeImg0 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImg"] });
                        attSizeImgBlock0.addEventListener("click", function (e) {
                            
                            // var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                            var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_collection_module_product_block .inc_product_desc_att_block')
                            
                            
                            var attr_text = this.getAttribute("data-size");

                            elAttBlock.setAttribute("data-zero", attr_text);
                            elAtt0ListBlock.parentNode.classList.remove('show_dropdown')
                            
                            var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_size_list_item_img_block')

                            for(cl=0;cl<all_color_list_item_img.length;cl++){
                                all_color_list_item_img[cl].classList.remove("active");
                            }
                            
                            this.classList.add("active");
                            
                            elAtt0TitleTextSelected.innerText = attr_text;

                            var sel_size = elAttBlock.getAttribute('data-size')
                            findObj = new INC_COL.classes.FindObj({ mainId: productObj.mainId, colorText: attr_text });
                            findObj.sizeText=sel_size
                            elAttSizeListBlock.innerHTML = "";
                            
                            var productSizesObj = INC_COL.dataStore.methods().getProductSizesObj(findObj,this);

                            if(productSizesObj["sizeArray"][0] != undefined){
                                if(productSizesObj["sizeArray"][0].code == "color"){
                                    productColorsObj = INC_COL.dataStore.methods().getProductSizesObj(findObj,this);
                                    productSizesObj = INC_COL.dataStore.methods().getProductColorsObj(findObj,this);
                                }
                            }
                            var productSizeText = "";

                            if (productSizesObj["sizeArray"].length > 0) {
                                elAttSizeBlock.classList.add("active");
                                
                                productSizesObj["sizeArray"].forEach(function (sizeObj) {
                                    var attSizeBlock = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemBlock"] });
                                    var attSizeImgBlock = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImgBlock"] });
                                    var attSizeImg = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImg"] });

                                    attSizeImgBlock.addEventListener("click", function () {
                                        var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_collection_module_product_block .inc_product_desc_att_block')
                                        
                                        var attr_text = this.getAttribute("data-size")
                                        elAttSizeBlock.classList.add("active");
                                        elAttSizeTitleTextSelected.innerText = attr_text;
                                        elAttBlock.setAttribute("data-size", attr_text);
                
                                        var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_size_list_item_img_block')
                
                                        for(cl=0;cl<all_color_list_item_img.length;cl++){
                                            all_color_list_item_img[cl].classList.remove("active");
                                        }
                                        
                                        this.classList.add("active");
                                        var sel_size = elAttBlock.getAttribute('data-size')
                                        findObj = new INC_COL.classes.FindObj({ mainId: productObj.mainId, colorText: attr_text });
                                        findObj.sizeText=sel_size
                
                                        findObj = new INC_COL.classes.FindObj({ mainId: productObj.mainId, colorText: "", sizeText: attr_text });
                                        elAttColorListBlock.innerHTML = "";
                                        var productColorsObj = INC_COL.dataStore.methods().getProductColorsObj(findObj,this);
                                        
                                        var productColorText = "";
                
                                        if (productColorsObj["colorArray"].length > 0) {
                                            elAttColorBlock.classList.add("active");
                                            
                                            productColorsObj["colorArray"].forEach(function (colorObj) {
                                            
                
                                                var attColorBlock = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemBlock"] })
                                                var attColorImgBlock = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemImgBlock"] });
                                                var attColorImg = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemImg"] });
                                                var attColorTextBlock = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemTextBlock"] });
                                                var attColorText = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemText"] });
                                                
                                                
                                                attColorImgBlock.addEventListener("click", function () {
                                                    var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_collection_module_product_block .inc_product_desc_att_block')
                                                    
                                                    if(productBlock.querySelector('.close_read_more') != null){
                                                        productBlock.querySelector('.close_read_more').click()
                                                    }
                                                    var colorText = this.getAttribute("data-color")
                                                    elAttBlock.setAttribute("data-color", colorText);
                                    
                                                    
                                                    var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_color_list_item_img')
                                    
                                                    for(cl=0;cl<all_color_list_item_img.length;cl++){
                                                        all_color_list_item_img[cl].parentNode.parentNode.classList.remove("active");
                                                    }
                                                    
                                                    this.parentNode.classList.add("active");
                                                    // elAttColorTitleTextSelected.innerText = colorText;
                                                    //third
                                                    var sel_size = elAttBlock.getAttribute('data-size')
                                                    findObj = new INC_COL.classes.FindObj({ mainId: productObj.mainId, colorText: attr_text });
                                                    findObj.sizeText=sel_size
                                                    elAtt3ListBlock.innerHTML = "";
                                    
                                                    var product3rdObj = INC_COL.dataStore.methods().getProductopt3Obj(findObj,this);
                                                    if (product3rdObj["att3Array"].length > 0) {
                                                        elAttSizeBlock.classList.add("active");
                                                        
                                                        product3rdObj["att3Array"].forEach(function (sizeObj) {
                                                            var attSizeBlock3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemBlock"] });
                                                            var attSizeImgBlock3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemImgBlock"] });
                                                            var attSizeImg3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemImg"] });
                                    
                                                            attSizeImgBlock3.addEventListener("click", function () {
                                                                var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_collection_module_product_block .inc_product_desc_att_block')
                                                                
                                                                
                                                                if(productBlock.querySelector('.close_read_more') != null){
                                                                    productBlock.querySelector('.close_read_more').click()
                                                                }
                                                                var attr_text = this.getAttribute("data-size")
                                        
                                                                elAttBlock.setAttribute("data-third", attr_text);
                                        
                                                                
                                                                
                                                                var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_third_list_item_img_block')
                                        
                                                                for(cl=0;cl<all_color_list_item_img.length;cl++){
                                                                    all_color_list_item_img[cl].classList.remove("active");
                                                                }
                                                                var attr_text = this.getAttribute("data-size")
                                                                this.classList.add("active");
                                                                elAtt3TitleTextSelected.innerText = attr_text;;
                                        
                                                                INC_COL.methods.updateProductCollectionBlock(productBlock, findObj, blockType);
                                                                var pr_mod_elm = productBlock.parentNode.parentNode
                                                                if(pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block') != null){
                                                                    pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block').innerText=""
                                                                }
                                                            });
                
                                                            if (productSizeText.length == 0) {
                                                                productSizeText = sizeObj["text"];
                                                            }
                                    
                                                            attSizeImg3.innerText = sizeObj["text"];
                                                            attSizeImgBlock3.setAttribute('title', sizeObj["text"]);
                                                            attSizeImgBlock3.setAttribute('data-cpid', sizeObj["cpid"]);
                                                            attSizeImgBlock3.setAttribute('data-size', sizeObj["text"]);
                                                            attSizeImgBlock3.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                                                            attSizeImgBlock3.setAttribute('data-option', "3");
                                                            attSizeImgBlock3.appendChild(attSizeImg3);
                                                            elAtt3ListBlock.appendChild(attSizeImgBlock3);
                                                            if(attSizeImgBlock3.getAttribute('data-size').toLocaleLowerCase() == elAttSizeBlock.querySelector('.inc_product_desc_att_size_title_text_selected').innerText.toLocaleLowerCase()){
                                                                attSizeImgBlock3.classList.add('active')
                                                            }
                                                        });
                                                        var third_el_bl=elAtt3ListBlock.querySelector(getSelectorClassName(classNames, "productAttthirdListItemImgBlock"))
                                                        //                        
                                                        if(third_el_bl.parentNode.querySelector('.inc_product_desc_att_third_list_item_img_block.active') == null){
                                                            third_el_bl.click();
                                                        }
                                                    }
                                                    //end 
                                    
                                                    INC_COL.methods.updateProductCollectionBlock(productBlock, findObj, blockType);
                                    
                                                    var pr_mod_elm = productBlock.parentNode.parentNode
                                                    if(pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block') != null){
                                                        pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block').innerText=""
                                                    }
                                                    
                                                });
                                                
                                                attColorImg.style.backgroundColor = colorObj["colorCode"];
                                    
                                            
                                                if (colorObj["imgSrc"].length > 0) {
                                                    if(colorObj["colorCode"] == ""){
                                                        //{ src: colorObj["imgSrc"] }
                                                        var colorImg = INC_COL.methods.generateHTMLTags('img');
                                                        colorImg.style.backgroundImage="url('"+colorObj["imgSrc"]+"')";
                                                        if(productObj.categoryName != ""){
                                                            colorImg.classList.add(productObj.categoryName.replace(/\s/g, ''))
                                                        }
                                                        //
                                                        attColorImg.appendChild(colorImg);
                                                    }
                                                }
                                    
                                    
                                                var colorTitle = INC_COL.methods.generateHTMLTags('a');
                                                colorTitle.innerText = colorObj["text"]
                                                colorTitle.title = colorObj["text"];
                                                colorTitle.addEventListener('click', function (e) { e.preventDefault(); })
                                                attColorImg.appendChild(colorTitle);
                                                // attSelColorImg.style.backgroundImage = "url(" + colorObj["imgSrc"] + ")";
                                                attColorImgBlock.setAttribute('title', colorObj["text"]);
                                                attColorImgBlock.setAttribute('data-color', colorObj["text"]);
                                                attColorImgBlock.setAttribute('data-cpid', colorObj["cpid"]);
                                                attColorImgBlock.setAttribute("datacolor", colorObj["text"].toLocaleLowerCase());
                                                attColorImgBlock.setAttribute('data-option', "0");
                                                // if (INC_COL.debug) console.log(colorObj);
                                                var colorSwatchImgDiv = document.createElement('div');
                                                colorSwatchImgDiv.style.backgroundColor = colorObj["colorCode"];
                                    
                                                if (colorObj["imgSrc"].length > 0) {
                                                    if(colorObj["colorCode"] == ""){
                                                        //{ src: colorObj["imgSrc"] }
                                                        var colorImg = INC_COL.methods.generateHTMLTags('img');
                                                        colorImg.style.backgroundImage="url('"+colorObj["imgSrc"]+"')";
                                                        if(productObj.categoryName != ""){
                                                            colorImg.classList.add(productObj.categoryName.replace(/\s/g, ''))
                                                        }
                                                        //
                                                        attColorImg.appendChild(colorImg);
                                                    }
                                                }
                                    
                                                // elImgColorSwatch.appendChild(colorSwatchImgDiv);
                                                attColorImgBlock.appendChild(attColorImg);
                                                attColorBlock.appendChild(attColorImgBlock);
                                                elAttColorListBlock.appendChild(attColorBlock);
                                                if(elAttColorListBlock.parentNode.querySelector('.inc_product_desc_att_color_title_text_selected').innerText.toLocaleLowerCase() == colorObj.text.toLocaleLowerCase()){
                                                    attColorBlock.classList.add('active');
                                                    color_text_edt = colorObj.text
                                                    elAttBlock.setAttribute('data-color',color_text_edt)
                                                }
                                            });
                                            var color_el_bl=elAttColorListBlock.querySelector(getSelectorClassName(classNames, "productAttColorListItemImgBlock"))
                                            //                        
                                            if(color_el_bl.parentNode.parentNode.querySelector('.inc_product_desc_att_color_list_item_block.active') == null){
                                                color_el_bl.click();
                                            }
                
                                        }
                
                                        //third
                                        var sel_size = elAttBlock.getAttribute('data-size')
                                        findObj = new INC_COL.classes.FindObj({ mainId: productObj.mainId, colorText: attr_text });
                                        findObj.sizeText=sel_size
                                        elAtt3ListBlock.innerHTML = "";
                
                                        var product3rdObj = INC_COL.dataStore.methods().getProductopt3Obj(findObj,this);
                                        if (product3rdObj["att3Array"].length > 0) {
                                            elAttSizeBlock.classList.add("active");
                                            
                                            product3rdObj["att3Array"].forEach(function (sizeObj) {
                                                var attSizeBlock3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemBlock"] });
                                                var attSizeImgBlock3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemImgBlock"] });
                                                var attSizeImg3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemImg"] });
                        
                                                attSizeImgBlock3.addEventListener("click", function () {
                                                    
                                                    var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_collection_module_product_block .inc_product_desc_att_block')
                                                    if(productBlock.querySelector('.close_read_more') != null){
                                                        productBlock.querySelector('.close_read_more').click()
                                                    }
                                                    var attr_text = this.getAttribute("data-size")
                            
                                                    elAttBlock.setAttribute("data-third", attr_text);
                            
                                                    var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_third_list_item_img_block')
                            
                                                    for(cl=0;cl<all_color_list_item_img.length;cl++){
                                                        all_color_list_item_img[cl].classList.remove("active");
                                                    }
                                                    var attr_text = this.getAttribute("data-size")
                                                    this.classList.add("active");
                                                    elAtt3TitleTextSelected.innerText = attr_text;;
                            
                                                    INC_COL.methods.updateProductCollectionBlock(productBlock, findObj, blockType);
                            
                                                    
                                                    
                                                });

                                                if (productSizeText.length == 0) {
                                                    productSizeText = sizeObj["text"];
                                                }
                        
                                                attSizeImg3.innerText = sizeObj["text"];
                                                attSizeImgBlock3.setAttribute('data-cpid', sizeObj["cpid"]);
                                                attSizeImgBlock3.setAttribute('data-size', sizeObj["text"]);
                                                attSizeImgBlock3.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                                                attSizeImgBlock3.setAttribute('data-option', "3");
                                                attSizeImgBlock3.appendChild(attSizeImg3);
                                                elAtt3ListBlock.appendChild(attSizeImgBlock3);
                                                if(attSizeImgBlock3.getAttribute('data-size').toLocaleLowerCase() == elAttSizeBlock.querySelector('.inc_product_desc_att_size_title_text_selected').innerText.toLocaleLowerCase()){
                                                    attSizeImgBlock3.classList.add('active')
                                                }
                                            });
                                            var third_el_bl=elAtt3ListBlock.querySelector(getSelectorClassName(classNames, "productAttthirdListItemImgBlock"))
                                            //                        
                                            if(third_el_bl.parentNode.querySelector('.inc_product_desc_att_third_list_item_img_block.active') == null){
                                                third_el_bl.click();
                                            }
                                        }
                                        //end 
                
                                        INC_COL.methods.updateProductCollectionBlock(productBlock, findObj, blockType);
                
                                        var productModuleBlock = productBlock.parentNode.parentNode;
                                        var pr_mod_elm = productBlock.parentNode.parentNode
                                        if(pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block') != null){
                                            pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block').innerText=""
                                        }
                                       
                                        
                                    });

                                    if (productSizeText.length == 0) {
                                        productSizeText = sizeObj["text"];
                                    }
                                    attSizeImgBlock.classList.add('avail')
                                    attSizeImg.innerText = sizeObj["text"];
                                    attSizeImgBlock.setAttribute('title', sizeObj["text"]);
                                    attSizeImgBlock.setAttribute('data-cpid', sizeObj["cpid"]);
                                    attSizeImgBlock.setAttribute('data-size', sizeObj["text"]);
                                    attSizeImgBlock.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                                    attSizeImgBlock.setAttribute('data-option', "2");
                                    attSizeImgBlock.appendChild(attSizeImg);
                                    elAttSizeListBlock.appendChild(attSizeImgBlock);
                                    if(attSizeImgBlock.getAttribute('data-size').toLocaleLowerCase() == elAttSizeBlock.querySelector('.inc_product_desc_att_size_title_text_selected').innerText.toLocaleLowerCase()){
                                        attSizeImgBlock.classList.add('active')
                                    }
                                });
                                var size_el_bl=elAttSizeListBlock.querySelector(getSelectorClassName(classNames, "productAttSizeListItemImgBlock"))
                                //                        
                                if(size_el_bl.parentNode.querySelector('.inc_product_desc_att_size_list_item_img_block.active') == null){
                                    size_el_bl.click();
                                }

                            }

                            findObj = new INC_COL.classes.FindObj({ mainId: productObj.mainId, colorText: "", sizeText: attr_text });

                            elAttColorListBlock.innerHTML = "";
                            var productSizesObj = INC_COL.dataStore.methods().getProductSizesObj(findObj,this);
                            var productColorsObj = INC_COL.dataStore.methods().getProductColorsObj(findObj,this);
                            // if(productSizesObj["sizeArray"][0] != undefined){
                            //     if(productSizesObj["sizeArray"][0].code == "color"){
                            //         productColorsObj = INC_COL.dataStore.methods().getProductSizesObj(findObj,'color');
                            //     }
                            // }
                            var productColorText = "";

                            if (productColorsObj["colorArray"].length > 0) {
                                elAttColorBlock.classList.add("active");
                                
                                productColorsObj["colorArray"].forEach(function (colorObj) {
                                

                                    var attColorBlock = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemBlock"] })
                                    var attColorImgBlock = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemImgBlock"] });
                                    var attColorImg = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemImg"] });
                                    var attColorTextBlock = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemTextBlock"] });
                                    var attColorText = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemText"] });
                                    
                                    
                                    attColorImgBlock.addEventListener("click", function () {
                                        
                                        var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_collection_module_product_block .inc_product_desc_att_block')
                                        
                                        if(productBlock.querySelector('.close_read_more') != null){
                                            productBlock.querySelector('.close_read_more').click()
                                        }
                                        var colorText = this.getAttribute("data-color")
                                        elAttBlock.setAttribute("data-color", colorText);
                    
                                        
                                        
                                        var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_color_list_item_img')
                    
                                        for(cl=0;cl<all_color_list_item_img.length;cl++){
                                            all_color_list_item_img[cl].parentNode.parentNode.classList.remove("active");
                                        }
                                        
                                        this.parentNode.classList.add("active");
                    
                                        elAttColorTitleTextSelected.innerText = colorText;
                                        //third
                                        var sel_size = elAttBlock.getAttribute('data-size')
                                        findObj = new INC_COL.classes.FindObj({ mainId: productObj.mainId, colorText: colorText });
                                        // findObj.sizeText=sel_size
                                        elAtt3ListBlock.innerHTML = "";
                                        var product3rdObj = INC_COL.dataStore.methods().getProductopt3Obj(findObj,this);
                                        if (product3rdObj["att3Array"].length > 0) {
                                            elAttSizeBlock.classList.add("active");
                                            
                                            product3rdObj["att3Array"].forEach(function (sizeObj) {
                                                var attSizeBlock3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemBlock"] });
                                                var attSizeImgBlock3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemImgBlock"] });
                                                var attSizeImg3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemImg"] });
                    
                                                attSizeImgBlock3.addEventListener("click", function () {
                                                    
                                                    var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_collection_module_product_block .inc_product_desc_att_block')
                                                    
                                                    if(productBlock.querySelector('.close_read_more') != null){
                                                        productBlock.querySelector('.close_read_more').click()
                                                    }
                                                    var attr_text = this.getAttribute("data-size")
                            
                                                    elAttBlock.setAttribute("data-third", attr_text);
                            
                                                   
                                                    
                                                    var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_third_list_item_img_block')
                            
                                                    for(cl=0;cl<all_color_list_item_img.length;cl++){
                                                        all_color_list_item_img[cl].classList.remove("active");
                                                    }
                                                    var attr_text = this.getAttribute("data-size")
                                                    this.classList.add("active");
                                                    elAtt3TitleTextSelected.innerText = attr_text;;
                            
                                                    INC_COL.methods.updateProductCollectionBlock(productBlock, findObj, blockType);
                            
                                                    var pr_mod_elm = productBlock.parentNode.parentNode
                                                    if(pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block') != null){
                                                        pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block').innerText=""
                                                    }
                                                    
                                                });
                    
                                                if (productSizeText.length == 0) {
                                                    productSizeText = sizeObj["text"];
                                                }
                    
                                                attSizeImg3.innerText = sizeObj["text"];
                                                attSizeImgBlock3.setAttribute('data-cpid', sizeObj["cpid"]);
                                                attSizeImgBlock3.setAttribute('data-size', sizeObj["text"]);
                                                attSizeImgBlock3.setAttribute('title', sizeObj["text"]);
                                                attSizeImgBlock3.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                                                attSizeImgBlock3.setAttribute('data-option', "3");
                                                attSizeImgBlock3.appendChild(attSizeImg3);
                                                elAtt3ListBlock.appendChild(attSizeImgBlock3);
                                                if(attSizeImgBlock3.getAttribute('data-size').toLocaleLowerCase() == elAttSizeBlock.querySelector('.inc_product_desc_att_size_title_text_selected').innerText.toLocaleLowerCase()){
                                                    attSizeImgBlock3.classList.add('active')
                                                }
                                            });
                                            var third_el_bl=elAtt3ListBlock.querySelector(getSelectorClassName(classNames, "productAttthirdListItemImgBlock"))
                                            //                        
                                            if(third_el_bl.parentNode.querySelector('.inc_product_desc_att_third_list_item_img_block.active') == null){
                                                third_el_bl.click();
                                            }
                                        }
                                        //end 
                    
                                        INC_COL.methods.updateProductCollectionBlock(productBlock, findObj, blockType);
                                        
                                        if (this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block') == null){
                                             this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_img_gallery_right_block').style.display="none";
                                              this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_img_gallery_left_block').style.display="none"
                                        } else {
                                           this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_img_gallery_right_block').style.display="block";
                                              this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_img_gallery_left_block').style.display="block" 
                                        }
                                         
                                       
                                        var zero_text = elAttBlock.getAttribute('data-zero');
                                        var size_text = elAttBlock.getAttribute('data-size');
                                        var color_text = elAttBlock.getAttribute('data-color');
                                        var third_text = elAttBlock.getAttribute('data-third');
                                        
                                        var sel_attr_text=""
                                        if(color_text != undefined){
                                            sel_attr_text = color_text
                                        }
                                        if(zero_text != undefined){
                                            if(sel_attr_text == ""){
                                                sel_attr_text = zero_text
                                            }else{
                                                if(sel_attr_text == ""){
                                                    sel_attr_text = zero_text
                                                }else{
                                                    sel_attr_text = sel_attr_text + " | " + zero_text
                                                }
                                            }
                                        }
                                        if(size_text != undefined){
                                            sel_attr_text = sel_attr_text + " | " + size_text
                                        }
                                        if(third_text != undefined){
                                            sel_attr_text = sel_attr_text + " | " + third_text
                                        }
                                        var pr_mod_elm = productBlock.parentNode.parentNode
                                        if(pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != ""){
                                            // pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').innerText = sel_attr_text 
                                            // pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title',sel_attr_text)
                                        }
            
                                    });
                                    
                                    attColorImg.style.backgroundColor = colorObj["colorCode"];
                        
                                
                                    if (colorObj["imgSrc"].length > 0) {
                                        if(colorObj["colorCode"] == ""){
                                            //{ src: colorObj["imgSrc"] }
                                            var colorImg = INC_COL.methods.generateHTMLTags('img');
                                            colorImg.style.backgroundImage="url('"+colorObj["imgSrc"]+"')";
                                            if(productObj.categoryName != ""){
                                                colorImg.classList.add(productObj.categoryName.replace(/\s/g, ''))
                                            }
                                            //
                                            attColorImg.appendChild(colorImg);
                                        }
                                    }
                        
                        
                                    var colorTitle = INC_COL.methods.generateHTMLTags('a');
                                    colorTitle.innerText = colorObj["text"]
                                    colorTitle.title = colorObj["text"];
                                    colorTitle.addEventListener('click', function (e) { e.preventDefault(); })
                                    attColorImg.appendChild(colorTitle);
                                    // attSelColorImg.style.backgroundImage = "url(" + colorObj["imgSrc"] + ")";
                                    attColorImgBlock.setAttribute('data-color', colorObj["text"]);
                                    attColorImgBlock.setAttribute('data-cpid', colorObj["cpid"]);
                                    attColorImgBlock.setAttribute('title', colorObj["text"]);
                                    attColorImgBlock.setAttribute("datacolor", colorObj["text"].toLocaleLowerCase());
                                    attColorImgBlock.setAttribute('data-option', "0");
                                    var colorSwatchImgDiv = document.createElement('div');
                                    colorSwatchImgDiv.style.backgroundColor = colorObj["colorCode"];
                        
                                    if (colorObj["imgSrc"].length > 0) {
                                        if(colorObj["colorCode"] == ""){
                                            //{ src: colorObj["imgSrc"] }
                                            var colorImg = INC_COL.methods.generateHTMLTags('img');
                                            colorImg.style.backgroundImage="url('"+colorObj["imgSrc"]+"')";
                                            if(productObj.categoryName != ""){
                                                colorImg.classList.add(productObj.categoryName.replace(/\s/g, ''))
                                            }
                                            //
                                            attColorImg.appendChild(colorImg);
                                        }
                                    }
                        
                                    // elImgColorSwatch.appendChild(colorSwatchImgDiv);
                                    attColorImgBlock.appendChild(attColorImg);
                                    attColorBlock.appendChild(attColorImgBlock);
                                    elAttColorListBlock.appendChild(attColorBlock);
                                    if(elAttColorListBlock.parentNode.querySelector('.inc_product_desc_att_color_title_text_selected').innerText.toLocaleLowerCase() == colorObj.text.toLocaleLowerCase()){
                                        attColorBlock.classList.add('active');
                                        color_text_edt = colorObj.text
                                        elAttBlock.setAttribute('data-color',color_text_edt)
                                        // attColorBlock.querySelector('.inc_product_desc_att_color_list_item_img').click()
                                    }
                                });
                                var color_el_bl=elAttColorListBlock.querySelector(getSelectorClassName(classNames, "productAttColorListItemImgBlock"))
                                //                        
                                if(color_el_bl.parentNode.parentNode.querySelector('.inc_product_desc_att_color_list_item_block.active') == null){
                                    color_el_bl.click();
                                }

                            }

                            //third
                            
                            findObj = new INC_COL.classes.FindObj({ mainId: productObj.mainId, colorText: attr_text });
                            var sel_size = elAttBlock.getAttribute('data-size')
                            findObj.sizeText=sel_size
                            elAtt3ListBlock.innerHTML = "";

                            var product3rdObj = INC_COL.dataStore.methods().getProductopt3Obj(findObj,this);
                            // if(product3Obj["att3Array"][0] != undefined){
                            //     if(product3Obj["att3Array"][0].code == "color"){
                            //         productColorsObj = INC_COL.dataStore.methods().getProductopt3Obj(findObj,color);
                            //         product3Obj = INC_COL.dataStore.methods().getProductColorsObj(findObj,"third");
                            //     }
                            // }
                            if (product3rdObj["att3Array"].length > 0) {
                                elAttSizeBlock.classList.add("active");
                                
                                product3rdObj["att3Array"].forEach(function (sizeObj) {
                                    var attSizeBlock3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemBlock"] });
                                    var attSizeImgBlock3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemImgBlock"] });
                                    var attSizeImg3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemImg"] });

                                    attSizeImgBlock3.addEventListener("click", function () {
                                        
                                        var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_collection_module_product_block .inc_product_desc_att_block')
                                        if(productBlock.querySelector('.close_read_more') != null){
                                            productBlock.querySelector('.close_read_more').click()
                                        }
                                        var attr_text = this.getAttribute("data-size")
                
                                        elAttBlock.setAttribute("data-third", attr_text);
                
                                        
                                        var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_third_list_item_img_block')
                
                                        for(cl=0;cl<all_color_list_item_img.length;cl++){
                                            all_color_list_item_img[cl].classList.remove("active");
                                        }
                                        var attr_text = this.getAttribute("data-size")
                                        this.classList.add("active");
                                        elAtt3TitleTextSelected.innerText = attr_text;;
                
                                        INC_COL.methods.updateProductCollectionBlock(productBlock, findObj, blockType);
                
                                        var pr_mod_elm = productBlock.parentNode.parentNode
                                        if(pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block') != null){
                                            pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block').innerText=""
                                        }
                
                                         
                                    });

                                    if (productSizeText.length == 0) {
                                        productSizeText = sizeObj["text"];
                                    }

                                    attSizeImg3.innerText = sizeObj["text"];
                                    attSizeImgBlock3.setAttribute('title', sizeObj["text"]);
                                    attSizeImgBlock3.setAttribute('data-cpid', sizeObj["cpid"]);
                                    attSizeImgBlock3.setAttribute('data-size', sizeObj["text"]);
                                    attSizeImgBlock3.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                                    attSizeImgBlock3.setAttribute('data-option', "3");
                                    attSizeImgBlock3.appendChild(attSizeImg3);
                                    elAtt3ListBlock.appendChild(attSizeImgBlock3);
                                    if(attSizeImgBlock3.getAttribute('data-size').toLocaleLowerCase() == elAttSizeBlock.querySelector('.inc_product_desc_att_size_title_text_selected').innerText.toLocaleLowerCase()){
                                        attSizeImgBlock3.classList.add('active')
                                    }
                                });
                                var third_el_bl=elAtt3ListBlock.querySelector(getSelectorClassName(classNames, "productAttthirdListItemImgBlock"))
                                //                        
                                if(third_el_bl.parentNode.querySelector('.inc_product_desc_att_third_list_item_img_block.active') == null){
                                    third_el_bl.click();
                                }
                            }
                            //end 

                            INC_COL.methods.updateProductCollectionBlock(productBlock, findObj, blockType);

                            
                            var zero_text = elAttBlock.getAttribute('data-zero');
                            var size_text = elAttBlock.getAttribute('data-size');
                            var color_text = elAttBlock.getAttribute('data-color');
                            var third_text = elAttBlock.getAttribute('data-third');
                            
                            var sel_attr_text=""
                            if(color_text != undefined){
                                sel_attr_text = color_text
                            }
                            if(zero_text != undefined){
                                if(sel_attr_text == ""){
                                    sel_attr_text = zero_text
                                }else{
                                    sel_attr_text = sel_attr_text + " | " + zero_text
                                }
                            }
                            if(size_text != undefined){
                                sel_attr_text = sel_attr_text + " | " + size_text
                            }
                            if(third_text != undefined){
                                sel_attr_text = sel_attr_text + " | " + third_text
                            }
                            var pr_mod_elm = productBlock.parentNode.parentNode
                            if(pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block') != null){
                                pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block').innerText=""
                            }
                            
                        });
                        
                        attSizeImgBlock0.classList.add('avail')
                        if (productSizeText.length == 0) {
                            productSizeText = sizeObj["text"];
                        }
                        var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|XX|XXXXL|2XL|3XL|4XL$');
                        var chckType = sizeObj["text"];
                        
                        reg.test(chckType);
                        
                        
                        attSizeImg0.innerText = sizeObj["text"];
                        attSizeImgBlock0.setAttribute('data-cpid', sizeObj["cpid"]);
                        attSizeImgBlock0.setAttribute('data-size', sizeObj["text"]);
                        attSizeImgBlock0.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                        attSizeImgBlock0.setAttribute('data-option', "1");
                        if(product0Obj["att0Array"][0].code == "size"){
                            attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                        }else if(product0Obj["att0Array"][0].code == "letter"){
                            attSizeImgBlock0.setAttribute('title', "Letter" + " "+ sizeObj["text"].toUpperCase());
                        } else if(product0Obj["att0Array"][0].code == "choose"){
                            attSizeImgBlock0.setAttribute('title', "Number " + sizeObj["text"].toUpperCase());
                        }else{
                            attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                        }
                            
                        attSizeImgBlock0.appendChild(attSizeImg0);
                        elAtt0ListBlock.appendChild(attSizeImgBlock0);
                        
                    });
                    
                }
            }
        }
        
        if(productSizesObj.sizeArray.length > 0){
            if(productSizesObj["sizeArray"][0].code != "color"){
                findObj = new INC_COL.classes.FindObj({ mainId: productObj.mainId });
                            
                elAttSizeListBlock.innerHTML = "";
                var productSizeText = "";
                    
                if (productSizesObj["sizeArray"].length > 0) {
                    elAttSizeTitleText.innerText = productSizesObj["sizeArray"][0].code;
                    elAttSizeBlock.classList.add("active");
                    productSizesObj["sizeArray"].forEach(function (sizeObj) {
                        
                        var attSizeBlock = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemBlock"] });
                        var attSizeImgBlock = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImgBlock"] });
                        var attSizeImg = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttSizeListItemImg"] });

                        attSizeImgBlock.classList.add('avail')
                        attSizeImgBlock.addEventListener("click", function () {
                            
                            
                            
                            var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_collection_module_product_block .inc_product_desc_att_block')
                            
                            
                            if(productBlock.querySelector('.close_read_more') != null){
                                productBlock.querySelector('.close_read_more').click()
                            }
                            var attr_text = this.getAttribute("data-size")
                            elAttSizeBlock.classList.add("active");
                            elAttSizeTitleTextSelected.innerText = attr_text;
                            elAttBlock.setAttribute("data-size", attr_text);

                            
                            if(this.parentNode != null){
                                var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_size_list_item_img_block')

                                for(cl=0;cl<all_color_list_item_img.length;cl++){
                                    all_color_list_item_img[cl].classList.remove("active");
                                }
                            }
                            
                            this.classList.add("active");
                            var sel_size = elAttBlock.getAttribute('data-size')
                            findObj = new INC_COL.classes.FindObj({ mainId: productObj.mainId, colorText: attr_text });
                            findObj.sizeText=sel_size

                            findObj = new INC_COL.classes.FindObj({ mainId: productObj.mainId, colorText: "", sizeText: attr_text });
                            elAttColorListBlock.innerHTML = "";
                            var productColorsObj = INC_COL.dataStore.methods().getProductColorsObj(findObj);
                            
                            var productColorText = "";

                            if (productColorsObj["colorArray"].length > 0) {
                                elAttColorBlock.classList.add("active");
                                
                                productColorsObj["colorArray"].forEach(function (colorObj) {
                                

                                    var attColorBlock = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemBlock"] })
                                    var attColorImgBlock = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemImgBlock"] });
                                    var attColorImg = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemImg"] });
                                    var attColorTextBlock = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemTextBlock"] });
                                    var attColorText = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemText"] });
                                    
                                    
                                    attColorImgBlock.addEventListener("click", function () {
                                        
                                        var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_collection_module_product_block .inc_product_desc_att_block')
                                        if(productBlock.querySelector('.close_read_more') != null){
                                            productBlock.querySelector('.close_read_more').click()
                                        }
                                        var colorText = this.getAttribute("data-color")
                                        elAttBlock.setAttribute("data-color", colorText);
                        
                                        
                                        var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_color_list_item_img')
                        
                                        for(cl=0;cl<all_color_list_item_img.length;cl++){
                                            all_color_list_item_img[cl].parentNode.parentNode.classList.remove("active");
                                        }
                                        
                                        this.parentNode.classList.add("active");
                                        elAttColorTitleTextSelected.innerText = colorText;
                                        //third
                                        var sel_size = elAttBlock.getAttribute('data-size')
                                        findObj = new INC_COL.classes.FindObj({ mainId: productObj.mainId, colorText: attr_text });
                                        findObj.sizeText=sel_size
                                        elAtt3ListBlock.innerHTML = "";
                        
                                        var product3rdObj = INC_COL.dataStore.methods().getProductopt3Obj(findObj,this);
                                        if (product3rdObj["att3Array"].length > 0) {
                                            elAttSizeBlock.classList.add("active");
                                            
                                            product3rdObj["att3Array"].forEach(function (sizeObj) {
                                                var attSizeBlock3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemBlock"] });
                                                var attSizeImgBlock3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemImgBlock"] });
                                                var attSizeImg3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemImg"] });
                        
                                                // var attr_text = this.getAttribute("data-size")
                                                // this.parentNode.classList.add("active");
                                                // elAtt3TitleTextSelected.innerText = attr_text;;

                                                attSizeImgBlock3.addEventListener("click", function () {
                                                    
                                                    var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_collection_module_product_block .inc_product_desc_att_block')
                                                    
                                                    
                                                    
                                                    if(productBlock.querySelector('.close_read_more') != null){
                                                        productBlock.querySelector('.close_read_more').click()
                                                    }
                                                    var attr_text = this.getAttribute("data-size")
                            
                                                    elAttBlock.setAttribute("data-third", attr_text);
                            
                                                    
                                                    var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_third_list_item_img_block')
                            
                                                    for(cl=0;cl<all_color_list_item_img.length;cl++){
                                                        all_color_list_item_img[cl].classList.remove("active");
                                                    }
                                                    var attr_text = this.getAttribute("data-size")
                                                    this.classList.add("active");
                                                    elAtt3TitleTextSelected.innerText = attr_text;;
                            
                                                    INC_COL.methods.updateProductCollectionBlock(productBlock, findObj, blockType);
                            
                            
                                                    var pr_mod_elm = productBlock.parentNode.parentNode
                                                    if(pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block') != null){
                                                        pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block').innerText=""
                                                    }
                                                    
                                                });

                                                if (productSizeText.length == 0) {
                                                    productSizeText = sizeObj["text"];
                                                }
                        
                                                attSizeImg3.innerText = sizeObj["text"];
                                                attSizeImgBlock3.setAttribute('title', sizeObj["text"]);
                                                attSizeImgBlock3.setAttribute('data-cpid', sizeObj["cpid"]);
                                                attSizeImgBlock3.setAttribute('data-size', sizeObj["text"]);
                                                attSizeImgBlock3.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                                                attSizeImgBlock3.setAttribute('data-option', "3");
                                                attSizeImgBlock3.appendChild(attSizeImg3);
                                                elAtt3ListBlock.appendChild(attSizeImgBlock3);
                                                if(attSizeImgBlock3.getAttribute('data-size').toLocaleLowerCase() == elAttSizeBlock.querySelector('.inc_product_desc_att_size_title_text_selected').innerText.toLocaleLowerCase()){
                                                    attSizeImgBlock3.classList.add('active')
                                                }
                                            });
                                            
                                        }
                                        //end 
                        
                                        INC_COL.methods.updateProductCollectionBlock(productBlock, findObj, blockType);
                        
                                        
                                        var zero_text = elAttBlock.getAttribute('data-zero');
                                        var size_text = elAttBlock.getAttribute('data-size');
                                        var color_text = elAttBlock.getAttribute('data-color');
                                        var third_text = elAttBlock.getAttribute('data-third');
                                        
                                        var sel_attr_text=""
                                        if(color_text != undefined){
                                            sel_attr_text = color_text
                                        }
                                        if(zero_text != undefined){
                                            if(sel_attr_text == ""){
                                                sel_attr_text = zero_text
                                            }else{
                                                sel_attr_text = sel_attr_text + " | " + zero_text
                                            }
                                        }
                                        if(size_text != undefined){
                                            sel_attr_text = sel_attr_text + " | " + size_text
                                        }
                                        if(third_text != undefined){
                                            sel_attr_text = sel_attr_text + " | " + third_text
                                        }
                                        var pr_mod_elm = productBlock.parentNode.parentNode
                                        if(pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block') != null){
                                            pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block').innerText=""
                                        }
            
                                    });
                                    
                                    attColorImg.style.backgroundColor = colorObj["colorCode"];
                        
                                
                                    if (colorObj["imgSrc"].length > 0) {
                                        if(colorObj["colorCode"] == ""){
                                            //{ src: colorObj["imgSrc"] }
                                            var colorImg = INC_COL.methods.generateHTMLTags('img');
                                            colorImg.style.backgroundImage="url('"+colorObj["imgSrc"]+"')";
                                            if(productObj.categoryName != ""){
                                                colorImg.classList.add(productObj.categoryName.replace(/\s/g, ''))
                                            }
                                            //
                                            attColorImg.appendChild(colorImg);
                                        }
                                    }
                        
                        
                                    var colorTitle = INC_COL.methods.generateHTMLTags('a');
                                    colorTitle.innerText = colorObj["text"]
                                    colorTitle.title = colorObj["text"];
                                    colorTitle.addEventListener('click', function (e) { e.preventDefault(); })
                                    attColorImg.appendChild(colorTitle);
                                    // attSelColorImg.style.backgroundImage = "url(" + colorObj["imgSrc"] + ")";
                                    attColorImgBlock.setAttribute('title', colorObj["text"]);
                                    attColorImgBlock.setAttribute('data-cpid', colorObj["cpid"]);
                                    attColorImgBlock.setAttribute('data-color', colorObj["text"]);
                                    attColorImgBlock.setAttribute("datacolor", colorObj["text"].toLocaleLowerCase());
                                    attColorImgBlock.setAttribute('data-option', "0");
                                    var colorSwatchImgDiv = document.createElement('div');
                                    colorSwatchImgDiv.style.backgroundColor = colorObj["colorCode"];
                        
                                    if (colorObj["imgSrc"].length > 0) {
                                        if(colorObj["colorCode"] == ""){
                                            //{ src: colorObj["imgSrc"] }
                                            var colorImg = INC_COL.methods.generateHTMLTags('img');
                                            colorImg.style.backgroundImage="url('"+colorObj["imgSrc"]+"')";
                                            if(productObj.categoryName != ""){
                                                colorImg.classList.add(productObj.categoryName.replace(/\s/g, ''))
                                            }
                                            //
                                            attColorImg.appendChild(colorImg);
                                        }
                                    }
                        
                                    // elImgColorSwatch.appendChild(colorSwatchImgDiv);
                                    attColorImgBlock.appendChild(attColorImg);
                                    attColorBlock.appendChild(attColorImgBlock);
                                    elAttColorListBlock.appendChild(attColorBlock);
                                    if(elAttColorListBlock.parentNode.querySelector('.inc_product_desc_att_color_title_text_selected').innerText.toLocaleLowerCase() == colorObj.text.toLocaleLowerCase()){
                                        attColorBlock.classList.add('active');
                                        color_text_edt = colorObj.text
                                        elAttBlock.setAttribute('data-color',color_text_edt)
                                        // attColorBlock.querySelector('.inc_product_desc_att_color_list_item_img').click()
                                    }
                                });


                            }

                            //third
                            var sel_size = elAttBlock.getAttribute('data-size')
                            findObj = new INC_COL.classes.FindObj({ mainId: productObj.mainId, colorText: attr_text });
                            findObj.sizeText=sel_size
                            elAtt3ListBlock.innerHTML = "";

                            var product3rdObj = INC_COL.dataStore.methods().getProductopt3Obj(findObj,this);
                            if (product3rdObj["att3Array"].length > 0) {
                                elAttSizeBlock.classList.add("active");
                                
                                product3rdObj["att3Array"].forEach(function (sizeObj) {
                                    var attSizeBlock3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemBlock"] });
                                    var attSizeImgBlock3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemImgBlock"] });
                                    var attSizeImg3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemImg"] });

                                    attSizeImgBlock3.addEventListener("click", function () {
                                        
                                        var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_collection_module_product_block .inc_product_desc_att_block')
                                        
                                        if(productBlock.querySelector('.close_read_more') != null){
                                            productBlock.querySelector('.close_read_more').click()
                                        }
                                        var attr_text = this.getAttribute("data-size")
                
                                        elAttBlock.setAttribute("data-third", attr_text);
                
                                       
                                        
                                        var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_third_list_item_img_block')
                
                                        for(cl=0;cl<all_color_list_item_img.length;cl++){
                                            all_color_list_item_img[cl].classList.remove("active");
                                        }
                                        var attr_text = this.getAttribute("data-size")
                                        this.classList.add("active");
                                        elAtt3TitleTextSelected.innerText = attr_text;;
                
                                        INC_COL.methods.updateProductCollectionBlock(productBlock, findObj, blockType);
                                        var pr_mod_elm = productBlock.parentNode.parentNode
                                        if(pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block') != null){
                                            pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block').innerText=""
                                        }
                                        
                                        
                                    });

                                    if (productSizeText.length == 0) {
                                        productSizeText = sizeObj["text"];
                                    }

                                    attSizeImg3.innerText = sizeObj["text"];
                                    attSizeImgBlock3.setAttribute('data-cpid', sizeObj["cpid"]);
                                    attSizeImgBlock3.setAttribute('data-size', sizeObj["text"]);
                                    attSizeImgBlock3.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                                    attSizeImgBlock3.setAttribute('data-option', "3");
                                    attSizeImgBlock3.appendChild(attSizeImg3);
                                    elAtt3ListBlock.appendChild(attSizeImgBlock3);
                                    if(attSizeImgBlock3.getAttribute('data-size').toLocaleLowerCase() == elAttSizeBlock.querySelector('.inc_product_desc_att_size_title_text_selected').innerText.toLocaleLowerCase()){
                                        attSizeImgBlock3.classList.add('active')
                                    }
                                });
                                
                            }
                            //end 

                            INC_COL.methods.updateProductCollectionBlock(productBlock, findObj, blockType);

                            
                            var zero_text = elAttBlock.getAttribute('data-zero');
                            var size_text = elAttBlock.getAttribute('data-size');
                            var color_text = elAttBlock.getAttribute('data-color');
                            var third_text = elAttBlock.getAttribute('data-third');
                            
                            var sel_attr_text=""
                            if(color_text != undefined){
                                sel_attr_text = color_text
                            }
                            if(zero_text != undefined){
                                if(sel_attr_text == ""){
                                    sel_attr_text = zero_text
                                }else{
                                    sel_attr_text = sel_attr_text + " | " + zero_text
                                }
                            }
                            if(size_text != undefined){
                                sel_attr_text = sel_attr_text + " | " + size_text
                            }
                            if(third_text != undefined){
                                sel_attr_text = sel_attr_text + " | " + third_text
                            }
                            
                            var pr_mod_elm = productBlock.parentNode.parentNode
                            if(pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block') != null){
                                pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block').innerText=""
                            }
                            default_varients_click()

                        });
                        
                        if (productSizeText.length == 0) {
                            productSizeText = sizeObj["text"];
                        }
                        var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|XX|XXXXL|2XL|3XL|4XL$');
                        var chckType = sizeObj["text"];
                        
                        reg.test(chckType);
                        
                        
                        attSizeImg.innerText = sizeObj["text"];
                        attSizeImgBlock.setAttribute('data-cpid', sizeObj["cpid"]);
                        attSizeImgBlock.setAttribute('title', sizeObj["text"]);
                        attSizeImgBlock.setAttribute('data-size', sizeObj["text"]);
                        attSizeImgBlock.setAttribute('data-cpid', sizeObj["cpid"]);
                        attSizeImgBlock.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                        attSizeImgBlock.setAttribute('data-option', "2");
                        if(productSizesObj["sizeArray"][0].code == "size"){
                            attSizeImgBlock.setAttribute('title', sizeObj["text"].toUpperCase());
                        }else if(productSizesObj["sizeArray"][0].code == "letter"){
                            attSizeImgBlock.setAttribute('title', "Letter" + " "+ sizeObj["text"].toUpperCase());
                        } else if(productSizesObj["sizeArray"][0].code == "choose"){
                            attSizeImgBlock.setAttribute('title', "Number " + sizeObj["text"].toUpperCase());
                        }else{
                            attSizeImgBlock.setAttribute('title', sizeObj["text"].toUpperCase());
                        }
                        
                        attSizeImgBlock.appendChild(attSizeImg);
                        elAttSizeListBlock.appendChild(attSizeImgBlock);
                        
                    });
            
                }
            }
        }
    }
    
    if(productColorsObj.colorArray.length > 0){
        elAttColorListBlock.innerHTML = "";
        // if (INC_COL.debug) console.log(productColorsObj["colorArray"]);
        var one_attr_flag=false
        if(productColorsObj["colorArray"].length == 1){
            one_attr_flag = true
        }
        if (productColorsObj["colorArray"].length > 0) {
            productColorsObj["colorArray"].forEach(function (colorObj) {
                elAttColorBlock.classList.add("active");
                elAttColorTitleText.innerText = "color :";
                var attColorBlock = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemBlock"] })
                var attColorImgBlock = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemImgBlock"] });
                var attColorImg = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemImg"] });
                var attColorTextBlock = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemTextBlock"] });
                var attColorText = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttColorListItemText"] });
    
                attColorImgBlock.addEventListener("click", function () {
                    
                    var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                    
                    
                    if(productBlock.querySelector('.close_read_more') != null){
                        productBlock.querySelector('.close_read_more').click()
                    }
                    var colorText = this.getAttribute("data-color")
                    elAttBlock.setAttribute("data-color", colorText);

                   
                    
                    var all_color_list_item_img = this.parentNode.querySelectorAll('.inc_product_desc_att_color_list_item_img')

                    for(cl=0;cl<all_color_list_item_img.length;cl++){
                        all_color_list_item_img[cl].parentNode.parentNode.classList.remove("active");
                    }
                    
                    this.parentNode.classList.add("active");

                    elAttColorTitleTextSelected.innerText = colorText;
                    //third
                    var sel_size = elAttBlock.getAttribute('data-size')
                    findObj = new INC_COL.classes.FindObj({ mainId: productObj.mainId, colorText: colorText });
                    // findObj.sizeText=sel_size
                    elAtt3ListBlock.innerHTML = "";
                    var check_clr_click_mai_attr=true
                    var first_attr_acodec = ["Connectivity","Number of SIM", "Device"];
                    var product0Obj1 = INC_COL.dataStore.methods().getProductopt0Obj(findObj);
                    var productSizesObj2 = INC_COL.dataStore.methods().getProductSizesObj(findObj);
                    var productColorsObj3 = INC_COL.dataStore.methods().getProductColorsObj(findObj);
                    if(product0Obj["att0Array"][0] != undefined && product0Obj1.att0Array.length > 0 && productSizesObj2.sizeArray.length == 0 && productColorsObj3.colorArray.length > 0){
                        if(first_attr_acode.indexOf(product0Obj1["att0Array"][0].code) == -1){
                            check_clr_click_mai_attr = false;
                        }
                    }
                    if(check_clr_click_mai_attr == true){
                        var product3rdObj = INC_COL.dataStore.methods().getProductopt3Obj(findObj,this);
                        if (product3rdObj["att3Array"].length > 0) {
                            elAtt3Block.classList.add("active");
                            
                            product3rdObj["att3Array"].forEach(function (sizeObj) {
                                var attSizeBlock3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemBlock"] });
                                var attSizeImgBlock3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemImgBlock"] });
                                var attSizeImg3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemImg"] });

                                attSizeImgBlock3.addEventListener("click", function () {
                                    
                                    var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_collection_module_product_block .inc_product_desc_att_block')
                                   
                                    
                                    
                                    if(productBlock.querySelector('.close_read_more') != null){
                                        productBlock.querySelector('.close_read_more').click()
                                    }
                                    var attr_text = this.getAttribute("data-size")
            
                                    elAttBlock.setAttribute("data-third", attr_text);
            
                                    
                                    var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_third_list_item_img_block')
            
                                    for(cl=0;cl<all_color_list_item_img.length;cl++){
                                        all_color_list_item_img[cl].classList.remove("active");
                                    }
                                    var attr_text = this.getAttribute("data-size")
                                    this.classList.add("active");
                                    elAtt3TitleTextSelected.innerText = attr_text;;
            
                                    INC_COL.methods.updateProductCollectionBlock(productBlock, findObj, blockType);
                                    var pr_mod_elm = productBlock.parentNode.parentNode
                                    if(pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block') != null){
                                        pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block').innerText=""
                                    }
                                });

                                if (productSizeText.length == 0) {
                                    productSizeText = sizeObj["text"];
                                }

                                attSizeImg3.innerText = sizeObj["text"];
                                attSizeImgBlock3.setAttribute('data-cpid', sizeObj["cpid"]);
                                attSizeImgBlock3.setAttribute('data-size', sizeObj["text"]);
                                attSizeImgBlock3.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                                attSizeImgBlock3.setAttribute('data-option', "3");
                                attSizeImgBlock3.appendChild(attSizeImg3);
                                elAtt3ListBlock.appendChild(attSizeImgBlock3);
                                if(attSizeImgBlock3.getAttribute('data-size').toLocaleLowerCase() == elAttSizeBlock.querySelector('.inc_product_desc_att_size_title_text_selected').innerText.toLocaleLowerCase()){
                                    attSizeImgBlock3.classList.add('active')
                                }
                            });
                            
                        }
                    }else{
                        elAtt3ListBlock.innerHTML = "";
                        var product3rdObj = INC_COL.dataStore.methods().getProductopt0Obj(findObj);
                        if (product3rdObj["att0Array"].length > 0) {
                            elAtt3Block.classList.add("active");
                            
                            product3rdObj["att0Array"].forEach(function (sizeObj) {
                                
                                var attSizeBlock3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemBlock"] });
                                var attSizeImgBlock3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemImgBlock"] });
                                var attSizeImg3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemImg"] });

                                attSizeImgBlock3.addEventListener("click", function () {
                                    
                                    var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_collection_module_product_block .inc_product_desc_att_block')
                                    
                                    
                                    if(productBlock.querySelector('.close_read_more') != null){
                                        productBlock.querySelector('.close_read_more').click()
                                    }
                                    var attr_text = this.getAttribute("data-size")

                                    elAttBlock.setAttribute("data-third", attr_text);

                                    
                                    
                                    var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_third_list_item_img_block')

                                    for(cl=0;cl<all_color_list_item_img.length;cl++){
                                        all_color_list_item_img[cl].classList.remove("active");
                                    }
                                    var attr_text = this.getAttribute("data-size")
                                    this.classList.add("active");
                                    elAtt3TitleTextSelected.innerText = attr_text;;

                                    INC_COL.methods.updateProductCollectionBlock(productBlock, findObj, blockType);
                                    var pr_mod_elm = productBlock.parentNode.parentNode
                                    if(pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block') != null){
                                        pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block').innerText=""
                                    }
                                    
                                });

                                // if (productSizeText.length == 0) {
                                //     productSizeText = sizeObj["text"];
                                // }

                                attSizeImg3.innerText = sizeObj["text"];
                                attSizeImgBlock3.setAttribute('data-cpid', sizeObj["cpid"]);
                                attSizeImgBlock3.setAttribute('data-size', sizeObj["text"]);
                                attSizeImgBlock3.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                                attSizeImgBlock3.setAttribute('data-option', "3");
                                attSizeImgBlock3.appendChild(attSizeImg3);
                                elAtt3ListBlock.appendChild(attSizeImgBlock3);
                                if(attSizeImgBlock3.getAttribute('data-size').toLocaleLowerCase() == elAttSizeBlock.querySelector('.inc_product_desc_att_size_title_text_selected').innerText.toLocaleLowerCase()){
                                    attSizeImgBlock3.classList.add('active')
                                }
                            });
                            var third_el_bl=elAtt3ListBlock.querySelector(getSelectorClassName(classNames, "productAttthirdListItemImgBlock"))
                            //                        
                            if(third_el_bl.parentNode.querySelector('.inc_product_desc_att_third_list_item_img_block.active') == null){
                                third_el_bl.click();
                            }
                        }
                    }
                    //end 

                    INC_COL.methods.updateProductCollectionBlock(productBlock, findObj, blockType);

                    
                    var pr_mod_elm = productBlock.parentNode.parentNode
                    if(pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block') != null){
                        pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block').innerText=""
                    }
                    default_varients_click()
                });
    
                
    
                attColorImg.style.backgroundColor = colorObj["colorCode"];
    
                
                if (colorObj["imgSrc"].length > 0) {
                    if(colorObj["colorCode"] == ""){
                        //{ src: colorObj["imgSrc"] }
                        var colorImg = INC_COL.methods.generateHTMLTags('img');
                        colorImg.style.backgroundImage="url('"+colorObj["imgSrc"]+"')";
                        if(productObj.categoryName != ""){
                            colorImg.classList.add(productObj.categoryName.replace(/\s/g, ''))
                        }
                        //
                        attColorImg.appendChild(colorImg);
                    }
                }
    
    
                
                var colorTitle = INC_COL.methods.generateHTMLTags('a');
                colorTitle.innerText = colorObj["text"]
                colorTitle.title = colorObj["text"].toUpperCase();
                colorTitle.addEventListener('click', function (e) { e.preventDefault(); })
                attColorImg.appendChild(colorTitle);
                attColorImgBlock.setAttribute('data-cpid', colorObj["cpid"]);
                attColorImgBlock.setAttribute('title', colorObj["text"]);
                attColorImgBlock.setAttribute('data-color', colorObj["text"]);
                attColorImgBlock.setAttribute("datacolor", colorObj["text"].toLocaleLowerCase());
                attColorImgBlock.setAttribute('data-option', "0");
               
                
                attColorImgBlock.appendChild(attColorImg);
                attColorBlock.appendChild(attColorImgBlock);
                elAttColorListBlock.appendChild(attColorBlock);
                var prod_id = productBlock.getAttribute('data-main_id');
                if(one_attr_flag == true){
                    setTimeout(function(){
                        if(INC_COL.methods.getProductIdFromWebPage() == prod_id){  
                            attColorImgBlock.click()
                        }
                    },0)
                }
                if(elAttColorListBlock.parentNode.querySelector('.inc_product_desc_att_color_title_text_selected').innerText.toLocaleLowerCase() == colorObj.text.toLocaleLowerCase()){
                    attColorBlock.classList.add('active');
                    color_text_edt = colorObj.text
                    elAttBlock.setAttribute('data-color',color_text_edt)
                    // attColorBlock.querySelector('.inc_product_desc_att_color_list_item_img').click()
                }
            });
            
        }
    }
    
    if(check_main_s){
        if(product3Obj.att3Array.length > 0){
            if(product3Obj["att3Array"][0].code != "color"){
                findObj = new INC_COL.classes.FindObj({ mainId: productObj.mainId });
                            
                elAtt3ListBlock.innerHTML = "";
            
                

                var productSizeText = "";
            
                // if (INC_COL.debug) console.log(attColorImgBlock);
                    
                if (product3Obj["att3Array"].length > 0) {
                    // elAttSizeTitleText.innerText = "SELECT OPTION";
                    // elAtt3Block.classList.add("active");
                    product3Obj["att3Array"].forEach(function (sizeObj) {
                        elAtt3TitleText.innerText = product3Obj["att3Array"][0].code;
                        elAtt3Block.classList.add("active");
                        var attSizeBlock3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemBlock"] });
                        var attSizeImgBlock3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemImgBlock"] });
                        var attSizeImg3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemImg"] });

                        attSizeImgBlock3.classList.add('avail')

                        attSizeImgBlock3.addEventListener("click", function () {
                            default_varients_click()
                            
                            var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_collection_module_product_block .inc_product_desc_att_block')
                            
                            
                            if(productBlock.querySelector('.close_read_more') != null){
                                productBlock.querySelector('.close_read_more').click()
                            }
                            var attr_text = this.getAttribute("data-size")

                            elAttBlock.setAttribute("data-third", attr_text);

                            
                            var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_third_list_item_img_block')

                            for(cl=0;cl<all_color_list_item_img.length;cl++){
                                all_color_list_item_img[cl].classList.remove("active");
                            }
                            var attr_text = this.getAttribute("data-size")
                            this.classList.add("active");
                            elAtt3TitleTextSelected.innerText = attr_text;;

                            INC_COL.methods.updateProductCollectionBlock(productBlock, findObj, blockType);
                            var pr_mod_elm = productBlock.parentNode.parentNode
                            if(pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block') != null){
                                pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block').innerText=""
                            }
                            default_varients_click()
                        });
                    
                        
                        if (productSizeText.length == 0) {
                            productSizeText = sizeObj["text"];
                        }
                        var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|XX|XXXXL|2XL|3XL|4XL$');
                        var chckType = sizeObj["text"];
                        
                        reg.test(chckType);
                        
                        
                        attSizeImg3.innerText = sizeObj["text"];
                        attSizeImgBlock3.setAttribute('data-cpid', sizeObj["cpid"]);
                        attSizeImgBlock3.setAttribute('title', sizeObj["text"]);
                        attSizeImgBlock3.setAttribute('data-size', sizeObj["text"]);
                        attSizeImgBlock3.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                        attSizeImgBlock3.setAttribute('data-option', "3");
                            
                        attSizeImgBlock3.appendChild(attSizeImg3);
                        elAtt3ListBlock.appendChild(attSizeImgBlock3);
                        
                    });
            
                }
            }
        }
    }else{
        
        elAtt3ListBlock.innerHTML = "";
        var product3rdObj = INC_COL.dataStore.methods().getProductopt0Obj(findObj);
        if (product3rdObj["att0Array"].length > 0) {
            elAtt3Block.classList.add("active");
            
            product3rdObj["att0Array"].forEach(function (sizeObj) {
                
                var attSizeBlock3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemBlock"] });
                var attSizeImgBlock3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemImgBlock"] });
                var attSizeImg3 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttthirdListItemImg"] });

                attSizeImgBlock3.addEventListener("click", function () {
                    default_varients_click()
                    
                    var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_collection_module_product_block .inc_product_desc_att_block')
                    
                    
                    if(productBlock.querySelector('.close_read_more') != null){
                        productBlock.querySelector('.close_read_more').click()
                    }
                    var attr_text = this.getAttribute("data-size")

                    elAttBlock.setAttribute("data-third", attr_text);

                    
                    if(this.parentNode != null){
                        var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_third_list_item_img_block')

                        for(cl=0;cl<all_color_list_item_img.length;cl++){
                            all_color_list_item_img[cl].classList.remove("active");
                        }
                    }
                    var attr_text = this.getAttribute("data-size")
                    this.classList.add("active");
                    elAtt3TitleTextSelected.innerText = attr_text;;

                    INC_COL.methods.updateProductCollectionBlock(productBlock, findObj, blockType);
                    var pr_mod_elm = productBlock.parentNode.parentNode
                    if(pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block') != null){
                        pr_mod_elm.querySelector('.inc_product_desc_add_err_text_block').innerText=""
                    }
                    default_varients_click()
                });

                // if (productSizeText.length == 0) {
                //     productSizeText = sizeObj["text"];
                // }
                elAtt3TitleText.innerText=sizeObj["code"]
                attSizeImg3.innerText = sizeObj["text"];
                attSizeImgBlock3.setAttribute('data-cpid', sizeObj["cpid"]);
                attSizeImgBlock3.setAttribute('data-size', sizeObj["text"]);
                attSizeImgBlock3.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                attSizeImgBlock3.setAttribute('data-option', "3");
                attSizeImgBlock3.appendChild(attSizeImg3);
                elAtt3ListBlock.appendChild(attSizeImgBlock3);
                if(attSizeImgBlock3.getAttribute('data-size').toLocaleLowerCase() == elAttSizeBlock.querySelector('.inc_product_desc_att_size_title_text_selected').innerText.toLocaleLowerCase()){
                    attSizeImgBlock3.classList.add('active')
                }
            });
            var third_el_bl=elAtt3ListBlock.querySelector(getSelectorClassName(classNames, "productAttthirdListItemImgBlock"))
            //                        
            if(third_el_bl.parentNode.querySelector('.inc_product_desc_att_third_list_item_img_block.active') == null){
                // third_el_bl.click();
            }
        }
    }

    if(product4Obj.att4Array.length > 0){
        if(product4Obj["att4Array"][0].code != "color"){
            findObj = new INC_COL.classes.FindObj({ mainId: productObj.mainId });
                        
            elAtt4ListBlock.innerHTML = "";
        
            

            var productSizeText = "";
        
            // if (INC_COL.debug) console.log(attColorImgBlock);
                
            if (product4Obj["att4Array"].length > 0) {
                // elAttSizeTitleText.innerText = "SELECT OPTION";
                // elAttSizeBlock.classList.add("active");
                product4Obj["att4Array"].forEach(function (sizeObj) {
                    
                    var attSizeBlock4 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttfourthListItemBlock"] });
                    var attSizeImgBlock4 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttfourthListItemImgBlock"] });
                    var attSizeImg4 = INC_COL.methods.generateHTMLTags('div', { class: classNames["productAttfourthListItemImg"] });
                    attSizeImgBlock4.classList.add('avail')
                
                    
                    if (productSizeText.length == 0) {
                        productSizeText = sizeObj["text"];
                    }
                    var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|XX|XXXXL|2XL|3XL|4XL$');
                    var chckType = sizeObj["text"];
                    
                    reg.test(chckType);
                    
                    
                    attSizeImg4.innerText = sizeObj["text"];
                    attSizeImgBlock4.setAttribute('data-cpid', sizeObj["cpid"]);
                    attSizeImgBlock4.setAttribute('data-size', sizeObj["text"]);
                    attSizeImgBlock4.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                    attSizeImgBlock4.setAttribute('data-option', "4");
                    if(product4Obj["att4Array"][0].code == "size"){
                        attSizeImgBlock4.setAttribute('title', sizeObj["text"].toUpperCase());
                    }else if(product4Obj["att4Array"][0].code == "letter"){
                        attSizeImgBlock4.setAttribute('title', "Letter" + " "+ sizeObj["text"].toUpperCase());
                    } else if(product4Obj["att4Array"][0].code == "choose"){
                        attSizeImgBlock4.setAttribute('title', "Number " + sizeObj["text"].toUpperCase());
                    }else{
                        attSizeImgBlock4.setAttribute('title', sizeObj["text"].toUpperCase());
                    }
                        
                    attSizeImgBlock4.appendChild(attSizeImg4);
                    elAtt4ListBlock.appendChild(attSizeImgBlock4);
                    
                });
        
            }
        }
    }

    
    elGalleryRightArrow.addEventListener("click", function (e) {
        var prod_card=this.parentNode.parentNode.parentNode.parentNode.parentNode;
        var pr_id=prod_card.getAttribute('data-main_id')
        slideTo(pr_id,0,prod_card,"right")
        // console.log("cli")
        
    });
    elGallerylefttArrow.addEventListener("click", function (e) {
        var prod_card=this.parentNode.parentNode.parentNode.parentNode.parentNode;
        var pr_id=prod_card.getAttribute('data-main_id')
        slideTo(pr_id,0,prod_card,"left")
        // console.log("cli")
    });
    if ((productObj.otherImageList == null) || productObj.otherImageList.length < 2) {
        elGalleryRightArrow.style.display="none"
        elGallerylefttArrow.style.display="none"
    }
    switch (blockType) {
        case "pdp": elAddText.innerText = "ADD"; break;
        case "sidebar":
        case "am": elAddText.innerText = "ADD"; break;
    }

    if (productColorsObj["colorArray"].length > 0) {
        if (productColorsObj["colorArray"].length == 1){
            elAttColorListBlock.classList.add('single_dropdown')
        }
        // elAttColorTitleTextSelected.innerText = 'Choose your colours';
        elcolortitleblock.addEventListener('click',function(){
            var togle_remove=false
            if(document.querySelector('.inc_product_desc_att_block .show_dropdown') != null ){
                togle_remove = true
                document.querySelector('.inc_product_desc_att_block .show_dropdown').classList.remove('show_dropdown')
            }
            if(togle_remove == true){
                this.parentNode.classList.remove('show_dropdown')
            }else{
                this.parentNode.classList.toggle('show_dropdown')
            }
        })
    }
    if (product0Obj.att0Array.length > 0) {
        if (product0Obj.att0Array.length == 1){
          elAtt0ListBlock.classList.add('single_dropdown')
        }
        // elAtt0TitleTextSelected.innerText = 'Choose size first';
        elzerotitleblock.addEventListener('click',function(){
            var togle_remove=false
            if(document.querySelector('.inc_product_desc_att_block .show_dropdown') != null){
                togle_remove = true
                document.querySelector('.inc_product_desc_att_block .show_dropdown').classList.remove('show_dropdown')
            }
            if(togle_remove == true){
                this.parentNode.classList.remove('show_dropdown')
            }else{
                this.parentNode.classList.toggle('show_dropdown')
            }
        })
    }  
    if (productSizesObj.sizeArray.length > 0) {
        if (productSizesObj.sizeArray.length == 1){
          elsizetitleblock.classList.add('single_dropdown')
        }
        elsizetitleblock.addEventListener('click',function(){
            var togle_remove=false
            if(document.querySelector('.inc_product_desc_att_block .show_dropdown') != null){
                togle_remove = true
                document.querySelector('.inc_product_desc_att_block .show_dropdown').classList.remove('show_dropdown')
            }
            if(togle_remove == true){
                this.parentNode.classList.remove('show_dropdown')
            }else{
                this.parentNode.classList.toggle('show_dropdown')
            }
        })

    } 
    if (product3Obj.att3Array.length > 0) {
        if (product3Obj.att3Array.length == 1){
          elAtt3ListBlock.classList.add('single_dropdown')
        }
        elthirdtitleblock.addEventListener('click',function(){
            var togle_remove=false
            if(document.querySelector('.inc_product_desc_att_block .show_dropdown') != null){
                togle_remove = true
                document.querySelector('.inc_product_desc_att_block .show_dropdown').classList.remove('show_dropdown')
            }
            if(togle_remove == true){
                this.parentNode.classList.remove('show_dropdown')
            }else{
                this.parentNode.classList.toggle('show_dropdown')
            }
        })
    }
    if (product4Obj.att4Array.length > 0) {
        if (product4Obj.att4Array.length == 1){
          elAtt4ListBlock.classList.add('single_dropdown')
        }
        elfourthtitleblock.addEventListener('click',function(){
            var togle_remove=false
            if(document.querySelector('.inc_product_desc_att_block .show_dropdown') != null){
                togle_remove = true
                document.querySelector('.inc_product_desc_att_block .show_dropdown').classList.remove('show_dropdown')
            }
            if(togle_remove == true){
                this.parentNode.classList.remove('show_dropdown')
            }else{
                this.parentNode.classList.toggle('show_dropdown')
            }
        })
    }

    elAddBlock.addEventListener("click", function () {
        var productModuleBlock = productBlock.parentNode.parentNode;
        var mainpid=productModuleBlock.getAttribute('data-main_id')
        var prod_block = document.querySelector('.inc_collection_product_list_block[data-main_id="'+mainpid+'"]');
        var datasku = productModuleBlock.querySelector('.inc_product_block_collection').getAttribute('data-sku')
        var dataid = productModuleBlock.querySelector('.inc_product_block_collection').getAttribute('data-id')
        var mainid = productModuleBlock.querySelector('.inc_product_block_collection').getAttribute('data-main_id')
        var colorText = ""
        if(productModuleBlock.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block') != null){
            colorText = productModuleBlock.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-color')
        }
        findObj = new INC_COL.classes.FindObj({ mainId: mainid, colorText: colorText });
        var productObj = INC_COL.dataStore.methods().getProductByAtt(findObj);
        var previousSKU = "";
        previousSKU = datasku
        if(productModuleBlock.querySelector('.inc_product_desc_att_color_list_item_img img') != null){
            if(productModuleBlock.querySelector('.inc_product_desc_att_color_list_item_block.active') == null){
                productModuleBlock.querySelector('.inc_product_desc_att_color_title_text_selected').innerText="Please Select option"
            }else{
                if(prod_block != null){
                    prod_block.classList.add('active');
                    // if (productModuleBlock.querySelector('.inc_product_desc_add_text').innerText == "Přidán") {
                    //     if (!INC_COL.dataStore.hasOwnProperty('bundleCartProducts')) {
                    //         INC_COL.dataStore['bundleCartProducts'] = {};
                    //     }
                
                    //     INC_COL.dataStore["bundleCartProducts"][productObj["sku"]] = INC_COL.dataStore["bundleCartProducts"][previousSKU];
                    //     if (productObj["sku"] != previousSKU) {
                    //         delete INC_COL.dataStore["bundleCartProducts"][previousSKU];
                    //     }
                    // }
                    // productModuleBlock.parentNode.parentNode.classList.remove('active')
                    productBlock.querySelector('.inc_product_desc_add_text').innerText = "Added";
                    prod_block.querySelector('.inc_collection_product_button_text').innerText = "Added"
                    var id = prod_block.getAttribute('data-id');
                    var sku = prod_block.getAttribute('data-sku');
                    var qty = parseInt(prod_block.querySelector('.inc_product_desc_qty_input_block input').value);
                    var bundle_id = prod_block.getAttribute('data-bundle_id');
                    var main_id = prod_block.getAttribute('data-main_id');
                    prod_block.querySelector('.inc_collection_product_add_button').style.display="none"
                    prod_block.querySelector('.inc_product_desc_qty_block').setAttribute('style','display:flex !important')
                    
                    productModuleBlock.querySelector('.inc_collection_popup_close_icon').click()
                    INC_COL.methods.updateBundleCart({ sku: sku, qty: qty }, "add",main_id,bundle_id,null,null);
                }
            }
        }else{
            
            prod_block.classList.add('active');
            productBlock.querySelector('.inc_product_desc_add_text').innerText = "Added";
            prod_block.querySelector('.inc_collection_product_button_text').innerText = "Added"
            var id = prod_block.getAttribute('data-id');
            var sku = prod_block.getAttribute('data-sku');
            var qty = parseInt(prod_block.querySelector('.inc_product_desc_qty_input_block input').value);
            var bundle_id = prod_block.getAttribute('data-bundle_id');
            var main_id = prod_block.getAttribute('data-main_id');
            prod_block.querySelector('.inc_collection_product_add_button').style.display="none"
            prod_block.querySelector('.inc_product_desc_qty_block').setAttribute('style','display:flex !important')
            productModuleBlock.querySelector('.inc_collection_popup_close_icon').click()
            // if(this.innerText != "Přidán" && prod_block.classList.contains('simple') == false){
                INC_COL.methods.updateBundleCart({ sku: sku, qty: qty }, "add",main_id,bundle_id,null,null);
            // }
        }
    });

    return productBlock;
}

INC_COL.methods.createPDPCollectionBlock = function (response) {
    INC_COL.methods.clear ()
    if (window.innerWidth > 767){
        if (document.querySelector('.site-width-container').style.backgroundImage.indexOf("increasingly")>=0){
            document.querySelector('.site-width-container').style.backgroundImage=""
        }
    } else {
        
            
            if (document.querySelector('.layout-pdp') != null){
                if (document.querySelector('.layout-pdp').style.backgroundImage.indexOf("increasingly")>=0){
                    document.querySelector('.layout-pdp').style.backgroundImage=""
                }
            }
       
    }
    if(document.querySelector('.container-100--nowrap') != null){
        document.querySelector('.container-100--nowrap').style.display="none";
    }

    if (document.querySelector('.click-collect') != null){
        document.querySelector('.click-collect').style.display="none";
    }

    if (document.querySelector('.full-width') != null){
        document.querySelector('.full-width').style.display="none";
    }

    if (document.querySelector('.spacer-bottom-60') != null){
        document.querySelector('.spacer-bottom-60').style.display="none";
    }

    if(document.querySelector('.pdp-heading-ratings') != null){
        document.querySelector('.pdp-heading-ratings').style.display="none";
    }

    if (document.querySelector('.scroller') != null){
        document.querySelector('.scroller').style.display="none";
    }

    if (document.querySelector('.spacer-bottom-20') != null){
        document.querySelector('.spacer-bottom-20').style.display="none";
    }

    if (document.querySelector('.inner-spacer-top-30') != null){
        document.querySelector('.inner-spacer-top-30').style.display="none";
    }
    
    if (document.querySelector('.br_related_products') != null){
        document.querySelector('.br_related_products').style.display="none";
    }

    if (document.querySelector('.pdp-price') != null){
        document.querySelector('.pdp-price').style.display="none"
    }

    if (document.querySelector('.add-to-basket__inner') != null){
        document.querySelector('.add-to-basket__inner').style.display="none"
    }

    if (document.querySelector('#checkout-combo') != null){
        document.querySelector('#checkout-combo').style.display="none";
    }
    
    document.querySelector('html').classList.add('inc_coll_avail');

    if(document.querySelector('.inc_collection_block') != null){
        var collection_block=document.querySelector('.inc_collection_block')
        collection_block.parentNode.removeChild(collection_block);
    }
    // if (isIE()){
    //     collection_block.setAttribute('style','position:relative;background:#fff;')
    // }
    var inc_collection_block = generate_html_tag('div','inc_collection_block');

    
    var inc_collection_bundle_block = generate_html_tag('div','inc_collection_bundle_block');
    inc_collection_block.appendChild(inc_collection_bundle_block)

    //collection modal block

    var inc_collection_modal_block = generate_html_tag('div','inc_collection_modal_block');
    var inc_collection_modal_list = generate_html_tag('div','inc_collection_modal_list');
    inc_collection_modal_block.appendChild(inc_collection_modal_list)
    inc_collection_block.appendChild(inc_collection_modal_block)

    
    
    var pr = 0;
    var sp = 0;
    
    
    
    
    for(k=0;k<INC_COL.config.collection_combo_details.length;k++){
        if (k == 0){    
            if(INC_COL.config.pageType == "pdp"){
            var inc_collection_item_wrapper = generate_html_tag('div','inc_collection_item_wrapper');
            inc_collection_bundle_block.appendChild(inc_collection_item_wrapper)
            //image gallery block for collections
            var inc_collection_Images_block = generate_html_tag('div','inc_collection_Images_block');
            inc_collection_item_wrapper.appendChild(inc_collection_Images_block)

            if(window.innerWidth > 819){
                var inc_collection_Images_gallery_promo_block = generate_html_tag('div','inc_collection_Images_gallery_promo_block');
                inc_collection_Images_block.appendChild(inc_collection_Images_gallery_promo_block)
                // inc_collection_Images_gallery.appendChild(inc_collection_Images_gallery_promo_block)
            }
            
            var inc_collection_img_list=generate_html_tag('div', 'inc_collection_img_list');
            inc_collection_Images_block.appendChild(inc_collection_img_list)
            
            

            //collection per product block
            var inc_collection_Product_details_block = generate_html_tag('div','inc_collection_Product_details_block');
            inc_collection_item_wrapper.appendChild(inc_collection_Product_details_block)

            //collection image per items
            var inc_collection_Images_gallery = generate_html_tag('div','inc_collection_Images_gallery');
            inc_collection_Images_gallery.classList.add('active')
            inc_collection_Images_block.appendChild(inc_collection_Images_gallery)


            
            
            
            var inc_collection_thumbnail_block = generate_html_tag('div','inc_collection_thumbnail_block');
            inc_collection_Images_block.appendChild(inc_collection_thumbnail_block)

            var inc_collection_thumbnail_item_block = generate_html_tag('div','inc_collection_thumbnail_item_block');
            inc_collection_thumbnail_block.appendChild(inc_collection_thumbnail_item_block)

            var inc_collection_thumbnail_arrows_block = generate_html_tag('div','inc_collection_thumbnail_arrows_block');
            inc_collection_thumbnail_item_block.appendChild(inc_collection_thumbnail_arrows_block)
            var inc_collection_thumbnail_prev_wrapper = generate_html_tag('div','inc_collection_thumbnail_prev_wrapper');
            inc_collection_thumbnail_prev_wrapper.setAttribute('style','opacity: 0.5;pointer-events: none;')
            inc_collection_thumbnail_arrows_block.appendChild(inc_collection_thumbnail_prev_wrapper)

            var inc_collection_thumbnail_prev_btn = generate_html_tag('div','inc_collection_thumbnail_prev_btn');
            inc_collection_thumbnail_prev_btn.innerText = "Previous"
            inc_collection_thumbnail_prev_wrapper.appendChild(inc_collection_thumbnail_prev_btn)

            inc_collection_thumbnail_prev_wrapper.addEventListener('click',function(){
                var elprev = this.parentNode.parentNode.parentNode.parentNode
            // this.previousElementSibling
                var elprevcurrentactive = elprev.querySelector('.inc_collection_thumbnail_item.active')
                if(elprevcurrentactive.previousElementSibling != null){
                    elprevcurrentactive.previousElementSibling.click()
                }else{
                    elprev.querySelector('.inc_collection_thumbnail_item').click()
                    elprev.querySelector('.inc_collection_img_list').classList.remove('active')
                    elprev.querySelector('.inc_collection_thumbnail_arrows_block').classList.remove('active')
                    elprev.querySelector('.inc_collection_Images_gallery').classList.add('active')
                    elprev.querySelector('.inc_collection_thumbnail_prev_wrapper').setAttribute('style','opacity: 0.5;pointer-events: none;')
                    elprev.querySelector('.inc_collection_thumbnail_next_wrapper').setAttribute('style','')
                    elprev.querySelector('.inc_collection_thumbnail_item').classList.remove('active')
                }
            });

            var inc_dots_block = generate_html_tag('div','inc_dots_block');
            inc_collection_thumbnail_arrows_block.appendChild(inc_dots_block)

            var inc_collection_thumbnail_next_wrapper = generate_html_tag('div','inc_collection_thumbnail_next_wrapper');
            inc_collection_thumbnail_arrows_block.appendChild(inc_collection_thumbnail_next_wrapper)
            var inc_collection_thumbnail_next_btn = generate_html_tag('div','inc_collection_thumbnail_next_btn');
            inc_collection_thumbnail_next_btn.innerText = "Next"
            inc_collection_thumbnail_next_wrapper.appendChild(inc_collection_thumbnail_next_btn)
            
            inc_collection_thumbnail_next_wrapper.addEventListener('click',function(){
                var elnext = this.parentNode.parentNode.parentNode.parentNode
                var elnextcurrentactive = elnext.querySelector('.inc_collection_thumbnail_item.active')
                if(elnextcurrentactive == null){
                    elnext.querySelector('.inc_collection_thumbnail_item').click()
                }else if(elnextcurrentactive.nextElementSibling != null){
                    elnextcurrentactive.nextElementSibling.click()
                    elnext.querySelector('.inc_collection_thumbnail_prev_wrapper').setAttribute('style','')
                    if(elnextcurrentactive.nextElementSibling.nextElementSibling == null){
                        elnext.querySelector('.inc_collection_thumbnail_next_wrapper').setAttribute('style','opacity: 0.5;pointer-events: none;')
                    }
                }else{
                    elnext.querySelector('.inc_collection_thumbnail_next_wrapper').setAttribute('style','opacity: 0.5;pointer-events: none;')
                }
            });
            //inc_collection_thumbnail_item_block

            var inc_collection_thumbnail_item_list = generate_html_tag('div','inc_collection_thumbnail_item_list');
            inc_collection_thumbnail_item_block.appendChild(inc_collection_thumbnail_item_list)
            
            var inc_collection_title_header_block = generate_html_tag('div','inc_collection_title_header_block');
            
            if(window.innerWidth > 819){
                inc_collection_Product_details_block.appendChild(inc_collection_title_header_block)
            }

            var inc_collection_title_text = generate_html_tag('div','inc_collection_title_text');
            inc_collection_title_header_block.appendChild(inc_collection_title_text)

            var inc_collection_product_selected_block = generate_html_tag('div','inc_collection_product_selected_block');
            // inc_collection_product_selected_block.innerText="(dostupných produktov)"
            inc_collection_title_header_block.appendChild(inc_collection_product_selected_block)

            var inc_collection_rating_block = generate_html_tag('div','inc_collection_rating_block');
            inc_collection_title_header_block.appendChild(inc_collection_rating_block)
            
            var inc_collection_available_text = generate_html_tag('div','inc_collection_available_text');
            inc_collection_available_text.innerText = "Products Available in Kit"
            inc_collection_Product_details_block.appendChild(inc_collection_available_text)
            if(window.innerWidth < 600){
                // inc_collection_available_text.style.display="none"
            }
            var inc_collection_product_item_block = generate_html_tag('div','inc_collection_product_item_block');
            inc_collection_Product_details_block.appendChild(inc_collection_product_item_block)


            var inc_collection_product_item_list = generate_html_tag('div','inc_collection_product_item_list');
            inc_collection_product_item_block.appendChild(inc_collection_product_item_list)

            var inc_collection_product_block = generate_html_tag('div','inc_collection_product_block');
            inc_collection_product_item_list.appendChild(inc_collection_product_block)
            if (window.location.hostname == "www.uat02p.pahtest.com"){
                var ComboImageURL=INC_COL.config.collection_combo_details[k].ComboImageURL.replace('https://www.petsathome.com','https://www.uat02p.pahtest.com/')
                var ComboProductURL=INC_COL.config.collection_combo_details[k].ComboProductURL.replace('https://www.petsathome.com','https://www.uat02p.pahtest.com/')
            } else {
                var ComboImageURL=INC_COL.config.collection_combo_details[k].ComboImageURL
                var ComboProductURL=INC_COL.config.collection_combo_details[k].ComboProductURL
            }
            var ComboTitle=INC_COL.config.collection_combo_details[k].ComboTitle.replace('with Accessory Bundle','kit');
            inc_collection_title_text.innerText = ComboTitle.replace('with Accessory Bundle','kit');
            var inc_collection_img_listcollection=generate_html_tag('div', 'inc_collection_img_list');
            inc_collection_Images_gallery.appendChild(inc_collection_img_listcollection)
            var collection_combo_img_wrappercol=generate_html_tag('div','collection_combo_img_wrapper');
            var collection_combo_imgcol=generate_html_tag('img');
            collection_combo_imgcol.setAttribute('src',ComboImageURL)
            collection_combo_imgcol.setAttribute('onerror',"this.src='"+INC_COL.config.noimage+"'" );
            collection_combo_img_wrappercol.appendChild(collection_combo_imgcol)
            inc_collection_img_listcollection.appendChild(collection_combo_img_wrappercol)
            var collection_combo_img_text_wrappercol=generate_html_tag('div','collection_combo_img_text_wrappercol');
            var collection_combo_img_text=generate_html_tag('div','collection_combo_img_text');
            collection_combo_img_text.innerText = ComboTitle
            collection_combo_img_text_wrappercol.appendChild(collection_combo_img_text)
            inc_collection_Images_block.appendChild(collection_combo_img_text_wrappercol)
            if(window.innerWidth < 820){
                inc_collection_title_text.style.display = "none"
                // inc_collection_product_selected_block.style.display = "none"
                collection_combo_img_text_wrappercol.appendChild(inc_collection_title_header_block)
                var inc_collection_Images_gallery_promo_block = generate_html_tag('div','inc_collection_Images_gallery_promo_block');
                inc_collection_title_header_block.appendChild(inc_collection_Images_gallery_promo_block)
            }
            collection_combo_img_wrappercol.classList.add('active')
            inc_collection_img_listcollection.classList.add('active')
            
            var colllectionrating=0
            for(p=0;p<INC_COL.config.collection_combo_details[k].collection_bundles.length;p++){
                for(r=0;r<INC_COL.config.collection_combo_details[k].collection_bundles[p].products.length;r++){
                    inc_collection_Images_gallery.classList.add('combo_' +INC_COL.config.collection_combo_details[k].collection_bundles[p].products.length )
                    inc_collection_Images_block.classList.add('combo_' +INC_COL.config.collection_combo_details[k].collection_bundles[p].products.length )
                    var product_id=INC_COL.config.collection_combo_details[k].collection_bundles[p].products[r]
                    var pdpProductId = INC_COL.dataStore.methods().getFirstProductObjByMainId({ mainId: product_id }).id;
                    var findObj = new INC_COL.classes.FindObj({ id: pdpProductId });
                    var productObj = INC_COL.dataStore.methods().getProductById(findObj);
                    var img_wrapper = generate_html_tag('div','img_wrapper');
                    var p_img = generate_html_tag('img');
                    p_img.setAttribute('src',productObj["imageURL"])
                    img_wrapper.appendChild(p_img)
                    // inc_collection_Images_gallery.appendChild(img_wrapper)
                    //change this once we get collection title
                    if(r == 0){
                        
                        var field1 = productObj.ratingsCount;
                        var field2 = productObj.reviewsCount;
                        // var rating_col = INC_COL.methods.get_product_ratings_col(field1,inc_collection_rating_block);
                    }
                    // inc_collection_rating_block.appendChild(rating_col)

                    if(colllectionrating < productObj.ratingsCount){
                        colllectionrating = productObj.ratingsCount
                        collectionreview = productObj.reviewsCount;
                    }

                    var inc_collection_thumbnail_item = generate_html_tag('div','inc_collection_thumbnail_item');
                    inc_collection_thumbnail_item_list.appendChild(inc_collection_thumbnail_item)
                    inc_collection_thumbnail_item.setAttribute('index',r)
                    var elOtherImgTag = generate_html_tag('img');
                    elOtherImgTag.setAttribute('src',productObj["imageURL"])

                    inc_collection_thumbnail_item.setAttribute('href_red',productObj.url)
                    elOtherImgTag.setAttribute('onerror',"this.src='"+INC_COL.config.noimage+"'" );
                    inc_collection_thumbnail_item.appendChild(elOtherImgTag)

                    var dot_btn = generate_html_tag('div','inc_dot');
                    dot_btn.setAttribute('index',r)
                    dot_btn.setAttribute('main_img',productObj["imageURL"])
                    inc_dots_block.appendChild(dot_btn)

                    dot_btn.addEventListener('click',function(){
                        var elcolimgblock = this.parentNode.parentNode.parentNode.parentNode.parentNode
                        var ind_img=this.getAttribute('index');
                        var imgsrc=this.getAttribute('main_img');

                        elcolimgblock.querySelector('.collection_combo_img_wrapper img').src = imgsrc
                        elcolimgblock.querySelector('.inc_collection_Images_gallery').classList.remove('active')
                        elcolimgblock.querySelector('.inc_collection_img_list').classList.add('active')
                        elcolimgblock.querySelector('.inc_collection_thumbnail_arrows_block').classList.add('active')
                        if(elcolimgblock.querySelector('.inc_dot.active') != null){
                            elcolimgblock.querySelector('.inc_dot.active').classList.remove('active')
                        }
                        if(elcolimgblock.querySelector('.inc_collection_thumbnail_item.active') != null){
                            elcolimgblock.querySelector('.inc_collection_thumbnail_item.active').classList.remove('active')
                        }
                        if(elcolimgblock.querySelector('.inc_collection_thumbnail_item[index="'+ind_img+'"]') != null){
                            elcolimgblock.querySelector('.inc_collection_thumbnail_item[index="'+ind_img+'"]').classList.add('active')
                        }
                        this.classList.add('active')
                        elcolimgblock.querySelector('.inc_collection_thumbnail_prev_wrapper').setAttribute('style','')
                        if(this.nextElementSibling != null){
                            elcolimgblock.querySelector('.inc_collection_thumbnail_next_wrapper').setAttribute('style','')
                        }

                    })

                    if (INC_COL.config.collection_combo_details[k].collection_bundles[p].products.length == 3){
                        inc_collection_img_list.classList.add('inc_three_col')
                    }

                    inc_collection_thumbnail_item.addEventListener('click',function(){
                        var elcolimgblock = this.parentNode.parentNode.parentNode.parentNode
                        var ind_img=this.getAttribute('index');
                        var imgsrc=this.querySelector('img').src

                        elcolimgblock.querySelector('.collection_combo_img_wrapper img').src = imgsrc
                        elcolimgblock.querySelector('.inc_collection_Images_gallery').classList.remove('active')
                        elcolimgblock.querySelector('.inc_collection_img_list').classList.add('active')
                        elcolimgblock.querySelector('.inc_collection_thumbnail_arrows_block').classList.add('active')
                        if(elcolimgblock.querySelector('.inc_collection_thumbnail_item.active') != null){
                            elcolimgblock.querySelector('.inc_collection_thumbnail_item.active').classList.remove('active')
                        }
                        if(elcolimgblock.querySelector('.inc_dot.active') != null){
                            elcolimgblock.querySelector('.inc_dot.active').classList.remove('active')
                        }
                        if(elcolimgblock.querySelector('.inc_dot[index="'+ind_img+'"]') != null){
                            elcolimgblock.querySelector('.inc_dot[index="'+ind_img+'"]').classList.add('active')
                        }
                        this.classList.add('active')
                        elcolimgblock.querySelector('.inc_collection_thumbnail_prev_wrapper').setAttribute('style','')
                        elcolimgblock.querySelector('.inc_collection_thumbnail_next_wrapper').setAttribute('style','')

                    })
                

                    if(r == 0){
                        dot_btn.classList.add('active')
                        var collection_combo_img_wrapper=generate_html_tag('div','collection_combo_img_wrapper');
                        var collection_combo_img=generate_html_tag('img');
                        collection_combo_img.setAttribute('src',productObj["imageURL"])
                        collection_combo_img_wrapper.appendChild(collection_combo_img)
                        collection_combo_img_wrapper.setAttribute('index',r)
                        inc_collection_img_list.appendChild(collection_combo_img_wrapper)
                        collection_combo_img_wrapper.classList.add('active')
                        collection_combo_img_wrapper.addEventListener('click',function(e){
                            if(document.querySelector('.inc_collection_thumbnail_item.active') != null){
                                var hrefre=document.querySelector('.inc_collection_thumbnail_item.active').getAttribute('href_red')
                                var comboid=document.querySelector('.inc_collection_product_list_block').getAttribute('data-combo_id')
                                INC_COL.methods.sendBundleClickTracking(comboid);
                                window.location.href=hrefre
                            }
                        })
                    }
                
                    var inc_collection_product_list_block = generate_html_tag('div','inc_collection_product_list_block');
                    inc_collection_product_list_block.classList.add(productObj.ProductType)
                    inc_collection_product_block.appendChild(inc_collection_product_list_block)

                    var inc_collection_product_list_wrapper = generate_html_tag('div','inc_collection_product_list_wrapper');
                    inc_collection_product_list_block.appendChild(inc_collection_product_list_wrapper)

                    var inc_collection_product_image_block = generate_html_tag('div','inc_collection_product_image_block');
                    inc_collection_product_list_wrapper.appendChild(inc_collection_product_image_block)

                    var inc_collection_product_image = generate_html_tag('img');
                    inc_collection_product_image.setAttribute('src',productObj["imageURL"])
                    inc_collection_product_image.setAttribute('onerror',"this.src='"+INC_COL.config.noimage+"'" );
                    inc_collection_product_image_block.appendChild(inc_collection_product_image)

                    var inc_collection_product_info_block = generate_html_tag('div','inc_collection_product_info_block');
                    inc_collection_product_list_wrapper.appendChild(inc_collection_product_info_block)

                    inc_collection_product_list_block.setAttribute('data-id', productObj.id);
                    inc_collection_product_list_block.setAttribute('data-sku', productObj.sku);
                    inc_collection_product_list_block.setAttribute('data-main_id', productObj.mainId);
                    inc_collection_product_list_block.setAttribute('data-bundle_id', productObj.bundleId);
                    inc_collection_product_list_block.setAttribute('data-combo_id', productObj.comboId);
                    if((productObj.ProductStatus == 1 && productObj.Quantity == 0) || (productObj.ProductStatus == 3)){
                        inc_collection_product_list_block.setAttribute('stock_status', 'inc_oos');
                    }else{
                        inc_collection_product_list_block.setAttribute('stock_status', 'inc_instock');
                    }
                    var inc_collection_product_title = generate_html_tag('div','inc_collection_product_title');
                    var p_name = generate_html_tag('a');
                    p_name.setAttribute('producturl',productObj.url)
                    p_name.setAttribute('href',productObj.url)
                    p_name.setAttribute('comboid',productObj.comboId)
                    p_name.innerText = productObj.name
                    p_name.addEventListener('click',function(e){
                        e.preventDefault();
                        INC_COL.methods.sendBundleClickTracking(this.getAttribute('comboid'));
                        var hrefredirect = this.getAttribute('producturl')
                        setTimeout(function(){
                            window.location.href=hrefredirect
                        },2000)
                    })
                    inc_collection_product_title.setAttribute('title',productObj.name)
                    inc_collection_product_title.appendChild(p_name)
                    inc_collection_product_info_block.appendChild(inc_collection_product_title)
                    if((productObj.ProductStatus == 1 && productObj.Quantity > 0) ){
                        inc_collection_product_image_block.addEventListener('click',function(){
                            var datamainid=this.parentNode.parentNode.getAttribute('data-main_id');
                            if(document.querySelector('.inc_collection_modal_block .inc_collection_module_block.active') != null){
                                document.querySelector('.inc_collection_modal_block .inc_collection_module_block.active').classList.remove('active')
                            }
                            if(document.querySelector('.inc_collection_modal_block .inc_collection_module_block[data-main_id="'+datamainid+'"]') != null){
                                document.querySelector('.inc_collection_modal_block .inc_collection_module_block[data-main_id="'+datamainid+'"]').classList.add('active')
                            }
                            if(document.querySelector('.inc_collection_module_block.active .inc_popup_product_details_tab_block') != null){
                                document.querySelector('.inc_collection_module_block.active .inc_popup_product_details_tab_block').click()
                            }
                            document.querySelector('html').classList.add('inc_overlay');
                            document.querySelector('.inc_collection_modal_block').classList.toggle('active')
                        })


                        // inc_collection_product_title.addEventListener('click',function(){
                        //     var datamainid=this.parentNode.parentNode.parentNode.getAttribute('data-main_id');
                        //     if(document.querySelector('.inc_collection_modal_block .inc_collection_module_block.active') != null){
                        //         document.querySelector('.inc_collection_modal_block .inc_collection_module_block.active').classList.remove('active')
                        //     }
                        //     if(document.querySelector('.inc_collection_modal_block .inc_collection_module_block[data-main_id="'+datamainid+'"]') != null){
                        //         document.querySelector('.inc_collection_modal_block .inc_collection_module_block[data-main_id="'+datamainid+'"]').classList.add('active')
                        //     }
                        //     if(document.querySelector('.inc_collection_module_block.active .inc_popup_product_details_tab_block') != null){
                        //         document.querySelector('.inc_collection_module_block.active .inc_popup_product_details_tab_block').click()
                        //     }
                        //     document.querySelector('html').classList.add('inc_overlay');
                        //     document.querySelector('.inc_collection_modal_block').classList.toggle('active')
                        // })
                    }

                    var inc_collection_product_rating = generate_html_tag('div','inc_collection_product_rating');
                    var inc_product_desc_ratings_block = generate_html_tag('div','inc_product_desc_ratings_block');
                    inc_collection_product_rating.appendChild(inc_product_desc_ratings_block)
                    var field1 = productObj.ratingsCount;
                    var field2 = productObj.reviewsCount;
                    INC_COL.methods.get_product_ratings_col(field1,field2,inc_product_desc_ratings_block);
                    inc_collection_product_info_block.appendChild(inc_collection_product_rating)
                    
                    var activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
                    var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
                    if (productObj.discountPrice != ""){
                        INC_COL.clientConfig.discPrc = productObj.discountPrice;
                    }
                    var price=0;
                    var specialprice=0;
                    if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
                        specialprice = activePrice
                        price = regularPrice
                    } else{
                        price = regularPrice
                        specialprice = 0
                    }
                    if (sp != 0 && +specialprice != 0) {
                        pr += +price;
                        sp += +specialprice;
                    } else if (sp != 0 && +specialprice == 0) {
                        pr += +price;
                        sp += +price;
                    } else if (sp == 0 && +specialprice == 0) {
                        pr += +price;
                        sp += +price;
                    } else {
                        pr += +price;
                        sp += +specialprice;
                    }

                    var inc_collection_product_price_block = generate_html_tag('div','inc_collection_product_price_block');
                    inc_collection_product_info_block.appendChild(inc_collection_product_price_block)

                    var inc_collection_product_active_price = generate_html_tag('div','inc_collection_product_active_price');
                    inc_collection_product_price_block.appendChild(inc_collection_product_active_price)

                    var inc_collection_product_regular_price = generate_html_tag('div','inc_collection_product_regular_price');
                    inc_collection_product_price_block.appendChild(inc_collection_product_regular_price)

                    inc_collection_product_regular_price.innerText = "";
        
                    if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
                        inc_collection_product_active_price.parentNode.classList.add('is_special_price')
                        inc_collection_product_active_price.innerText = formatter.format(activePrice)
                        inc_collection_product_regular_price.innerHTML = "<span>Was</span>" + INC_COL.clientConfig.regularPricePrefix + 
                        formatter.format(regularPrice)
                    }else{
                        inc_collection_product_active_price.innerText = formatter.format(activePrice)
                    }
                    //Vybraný odstín::
                    //Vybrat odstín: 
                    //přidat
                    if((productObj.ProductStatus == 1 && productObj.Quantity == 0)){
                        inc_collection_product_price_block.style.display = "none"
                        var inc_oos_text = generate_html_tag('div','inc_oos_text');
                        inc_oos_text.innerText = "Out of stock"
                        inc_oos_text.setAttribute('style','text-transform: none;color: #B32A2C;font-weight: bold;')
                        inc_collection_product_info_block.appendChild(inc_oos_text)
                        INC_COL.clientConfig.flagoos = false
                    }
                    var inc_collection_product_add_block = generate_html_tag('div','inc_collection_product_add_block');
                    inc_collection_product_list_block.appendChild(inc_collection_product_add_block)
                    
                    var inc_collection_product_viewdetails_text = generate_html_tag('div','inc_collection_product_viewdetails_text');
                    inc_collection_product_viewdetails_text.setAttribute('title','View Details')
                    findObj = new INC_COL.classes.FindObj({ mainId: productObj.mainId });

                    if(INC_COL.dataStore.methods().getProductColorsObj(findObj).colorArray.length == 0 && INC_COL.dataStore.methods().getProductopt0Obj(findObj).att0Array.length == 0){
                       inc_collection_product_viewdetails_text.innerText = "View Details";
                    }else{
                        if(INC_COL.dataStore.methods().getProductopt0Obj(findObj).att0Array.length > 0){
                            if(INC_COL.dataStore.methods().getProductopt0Obj(findObj).att0Array[0] != undefined){
                                inc_collection_product_viewdetails_text.innerText = "View Details"//+INC_COL.dataStore.methods().getProductopt0Obj(findObj).att0Array[0].code+"";
                            }else{
                                inc_collection_product_viewdetails_text.innerText = "View Details"//+INC_COL.dataStore.methods().getProductSizesObj(findObj).sizeArray[0].code+"";
                            }
                        }else if(INC_COL.dataStore.methods().getProductColorsObj(findObj).colorArray.length > 0) {
                            if(INC_COL.dataStore.methods().getProductColorsObj(findObj).colorArray[0].code == "color"){
                                inc_collection_product_viewdetails_text.innerText = "View Details";
                            }else{
                               inc_collection_product_viewdetails_text.innerText = "View Details"//+INC_COL.dataStore.methods().getProductColorsObj(findObj).colorArray[0].code+"";
                            }
                        }
                    }
                    // inc_collection_product_viewdetails_text.innerText = "View Details"
                    inc_collection_product_add_block.appendChild(inc_collection_product_viewdetails_text)
                    if((productObj.ProductStatus == 1 && productObj.Quantity == 0) || (productObj.ProductStatus == 3)){
                        // inc_collection_product_button_block.setAttribute('style','opacity: 0.5;pointer-events: none;')
                        inc_collection_product_viewdetails_text.setAttribute('style','opacity: 0.5;pointer-events: none;')
                    }
                    inc_collection_product_viewdetails_text.addEventListener('click',function(){
                        var datamainid=this.parentNode.parentNode.getAttribute('data-main_id');
                        if(document.querySelector('.inc_collection_modal_block .inc_collection_module_block.active') != null){
                            document.querySelector('.inc_collection_modal_block .inc_collection_module_block.active').classList.remove('active')
                        }
                        if(document.querySelector('.inc_collection_modal_block .inc_collection_module_block[data-main_id="'+datamainid+'"]') != null){
                            document.querySelector('.inc_collection_modal_block .inc_collection_module_block[data-main_id="'+datamainid+'"]').classList.add('active')
                        }
                        if(document.querySelector('.inc_collection_module_block.active .inc_popup_product_details_tab_block') != null){
                            document.querySelector('.inc_collection_module_block.active .inc_popup_product_details_tab_block').click()
                        }
                        document.querySelector('html').classList.add('inc_overlay');
                        document.querySelector('.inc_collection_modal_block').classList.toggle('active')
                    })
                    var inc_collection_product_select_btn = generate_html_tag('div','inc_collection_product_select_btn');
                    var inc_collection_product_select_btn_text = generate_html_tag('div','inc_collection_product_select_btn_text');
                    inc_collection_product_select_btn_text.innerText = "Add"
                    inc_collection_product_select_btn.appendChild(inc_collection_product_select_btn_text)

                    var inc_collection_product_button_block = generate_html_tag('div','inc_collection_product_button_block');
                    var inc_collection_product_button_text = generate_html_tag('div','inc_collection_product_button_text');
                    
                    inc_collection_product_button_text.innerText = "Add"

                    inc_collection_product_button_text.addEventListener('click',function(){
                        var prod_block = this.parentNode.parentNode.parentNode
                        prod_block.classList.add('active')
                        this.parentNode.style.display="none"
                        this.innerText = "Added"
                        var prodid = prod_block.getAttribute('data-main_id')
                        // prod_block.querySelector('.inc_product_desc_qty_block').style.display="block"
                        var productModuleBlock = document.querySelector('.inc_collection_module_block[data-main_id="'+prodid+'"]');
                        if(productModuleBlock != null){
                            productModuleBlock.querySelector('.inc_product_desc_add_text').innerText = "Added"
                        }
                        prod_block.querySelector('.inc_product_desc_qty_block').style.display = "flex"
                        var id = prod_block.getAttribute('data-id');
                        var sku = prod_block.getAttribute('data-sku');
                        var qty = parseInt(prod_block.querySelector('.inc_product_desc_qty_input_block input').value);
                        var bundle_id = prod_block.getAttribute('data-bundle_id');
                        var main_id = prod_block.getAttribute('data-main_id');
                        INC_COL.methods.updateBundleCart({ sku: sku, qty: qty }, "add",main_id,bundle_id,null,null);
                    })

                    
                    inc_collection_product_button_block.appendChild(inc_collection_product_button_text)
                    inc_collection_product_add_block.appendChild(inc_collection_product_button_block)
                    //qty block
                    var inc_product_desc_qty_block = generate_html_tag('div','inc_product_desc_qty_block');
                    inc_collection_product_add_block.appendChild(inc_product_desc_qty_block)
                    // inc_product_desc_qty_block.style.display="none"
                    
                    inc_product_desc_qty_block.classList.add('singleqty')
                    inc_product_desc_qty_block.setAttribute('title','Quantity')
                    var inc_product_desc_qty_down_block = generate_html_tag('div','inc_product_desc_qty_down_block');
                    inc_product_desc_qty_block.appendChild(inc_product_desc_qty_down_block)
                    var inc_product_desc_qty_down_btn = generate_html_tag('div','inc_product_desc_qty_down_btn');
                    inc_product_desc_qty_down_block.appendChild(inc_product_desc_qty_down_btn)

                    var inc_product_desc_qty_input_block = generate_html_tag('div','inc_product_desc_qty_input_block');
                    inc_product_desc_qty_block.appendChild(inc_product_desc_qty_input_block)
                    var elQtyInput = this.generateHTMLTags('input');
                    elQtyInput.setAttribute('type', "number");
                    elQtyInput.setAttribute('aria-label', "quantity");
                    elQtyInput.setAttribute('min', 1);
                    elQtyInput.setAttribute('max', 99);
                    elQtyInput.setAttribute('maxlength', 2);
                    elQtyInput.value = 1;
                    elQtyInput.setAttribute('old_qty', '1');
                    elQtyInput.setAttribute('pattern', '[\d]{9}');
                    elQtyInput.setAttribute("onkeydown", "if(event.key==='.'){event.preventDefault();}");
                    elQtyInput.setAttribute('onKeyPress', 'if(this.value.length==2) return false;');
                    elQtyInput.setAttribute("oninput", "validity.valid||(value='');");
                    elQtyInput.setAttribute("disabled", "disabled");
                    inc_product_desc_qty_input_block.appendChild(elQtyInput)
                    
                    

                    var inc_product_desc_qty_up_block = generate_html_tag('div','inc_product_desc_qty_up_block');
                    inc_product_desc_qty_block.appendChild(inc_product_desc_qty_up_block)
                    var inc_product_desc_qty_up_btn = generate_html_tag('div','inc_product_desc_qty_up_btn');
                    inc_product_desc_qty_up_block.appendChild(inc_product_desc_qty_up_btn)

                    //qty click event
                    elQtyInput.addEventListener("keydown", function (ev) {
                        
                        var elm = ev.currentTarget
                        var qtyinputtag=elm
                        setTimeout(function(){
                            var elitemblock = qtyinputtag.parentNode.parentNode.parentNode.parentNode
                            if (qtyinputtag.value.length == 0) qtyinputtag.value = 1;
                            if (qtyinputtag.value == 0) qtyinputtag.value = 1;
                            if (qtyinputtag.value > 99) qtyinputtag.value = 99;
                            if(parseInt(qtyinputtag.value) > 1){
                                elitemblock.querySelector('.inc_product_desc_qty_down_btn').setAttribute('title','')
                                elitemblock.querySelector('.inc_product_desc_qty_block').classList.remove('singleqty')
                            }else{
                                elitemblock.querySelector('.inc_product_desc_qty_down_btn').setAttribute('title','Remove')
                                elitemblock.querySelector('.inc_product_desc_qty_block').classList.add('singleqty')
                            }
                            var id = elitemblock.getAttribute('data-id');
                            var qty = parseInt(qtyinputtag.value);
                            var main_id = elitemblock.getAttribute('data-main_id');
                            var bundle_id = elitemblock.getAttribute('data-bundle_id');
                            // var pname=elitemblock.querySelector('.inc_product_desc_title_text').innerText;
                            // var pprice=elitemblock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$','');
                            var productModuleBlock = document.querySelector('.inc_collection_module_block[data-main_id="'+main_id+'"]');
                            if(productModuleBlock != null){
                                productModuleBlock.querySelector('.inc_product_desc_qty_input_text input').value =  parseInt(qtyinputtag.value)
                            }
                            // if(parseInt(qtyinputtag.value) == 1 && qtyinputtag.parentNode.parentNode.classList.contains('singleqty') == true){
                            //     elitemblock.classList.remove('active')
                            //     elitemblock.querySelector('.inc_collection_product_button_text').innerText = "Přidat"
                            //     var prodid = elitemblock.getAttribute('data-main_id')
                            //     var productModuleBlock = document.querySelector('.inc_collection_module_block[data-main_id="'+prodid+'"]');
                            //     if(productModuleBlock != null){
                            //         productModuleBlock.querySelector('.inc_product_desc_add_text').innerText = "Přidat"
                            //     }
                            //     if(elitemblock.classList.contains('configurable') == true){
                            //         elitemblock.querySelector('.inc_collection_product_button_block').style.display="flex"
                            //         elitemblock.querySelector('.inc_collection_product_add_button').style.display="flex"
                            //         elitemblock.querySelector('.inc_product_desc_qty_block').setAttribute('style','display:none')
                            //     }else{
                            //         elitemblock.querySelector('.inc_product_desc_qty_block').style.display="none"
                            //         elitemblock.querySelector('.inc_collection_product_button_text').style.display="flex"
                            //         elitemblock.querySelector('.inc_collection_product_button_block').style.display="flex"
                            //     }
                                
                            //     var id = elitemblock.getAttribute('data-id');
                            //     var sku = elitemblock.getAttribute('data-sku');
                            //     var qty = parseInt(elitemblock.querySelector('.inc_product_desc_qty_input_block input').value);
                            //     var bundle_id = elitemblock.getAttribute('data-bundle_id');
                            //     var main_id = elitemblock.getAttribute('data-main_id');
                            //     INC_COL.methods.updateBundleCart({ sku: sku, qty: qty }, "sub",main_id,bundle_id,null,null);
                            // }
                            // else{
                                var sku = elitemblock.getAttribute('data-sku');
                                INC_COL.methods.updateBundleCart({ sku: sku, qty: qty }, "add",main_id,bundle_id,null,null);
                            // }
                            if(parseInt(qtyinputtag.value) > 1){
                                elitemblock.querySelector('.inc_collection_product_button_text').style.display="none"
                                elitemblock.querySelector('.inc_collection_product_button_block').style.display="none"
                                elitemblock.querySelector('.inc_product_desc_qty_down_btn').setAttribute('title','')
                                elitemblock.querySelector('.inc_product_desc_qty_block').classList.remove('singleqty')
                            }else{
                                elitemblock.querySelector('.inc_product_desc_qty_down_btn').setAttribute('title','Remove')
                                elitemblock.querySelector('.inc_product_desc_qty_block').classList.add('singleqty')
                            }
                        },50)
                    });
                    
                    
                    inc_product_desc_qty_down_block.addEventListener('click', function () {
                        
                        var el_qty_input=this.parentNode.querySelector('input')
                        var elitemblock=this.parentNode.parentNode.parentNode
                        el_qty_input.value = (el_qty_input.value - 1 < 1) ? 1 : el_qty_input.value - 1;

                        var id = elitemblock.getAttribute('data-id');
                        var sku = elitemblock.getAttribute('data-sku');
                        var qty = parseInt(el_qty_input.value);
                        var bundle_id = elitemblock.getAttribute('data-bundle_id');
                        var main_id = elitemblock.getAttribute('data-main_id');
                        var productModuleBlock = document.querySelector('.inc_collection_module_block[data-main_id="'+main_id+'"]');
                        if(productModuleBlock != null){
                            productModuleBlock.querySelector('.inc_product_desc_qty_input_text input').value =  parseInt(el_qty_input.value)
                        }
                        if(parseInt(el_qty_input.value) == 1 && el_qty_input.parentNode.parentNode.classList.contains('singleqty') == true){
                            elitemblock.classList.remove('active')
                            elitemblock.querySelector('.inc_collection_product_button_text').innerText = "Add"
                            var prodid = elitemblock.getAttribute('data-main_id')
                            var productModuleBlock = document.querySelector('.inc_collection_module_block[data-main_id="'+prodid+'"]');
                            if(productModuleBlock != null){
                                productModuleBlock.querySelector('.inc_product_desc_add_text').innerText = "Add"
                            }
                            if(elitemblock.classList.contains('configurable') == true){
                                elitemblock.querySelector('.inc_collection_product_button_block').style.display="flex"
                                elitemblock.querySelector('.inc_collection_product_add_button').style.display="flex"
                                elitemblock.querySelector('.inc_product_desc_qty_block').setAttribute('style','display:none')
                            }else{
                                if (isIE()){
                                   elitemblock.querySelector('.inc_product_desc_qty_block').style.display="none !important" 
                                } else {
                                    elitemblock.querySelector('.inc_product_desc_qty_block').style.display="none"
                                }
                                elitemblock.querySelector('.inc_collection_product_button_block').style.display="flex"
                                elitemblock.querySelector('.inc_collection_product_button_text').style.display="flex"
                                elitemblock.querySelector('.inc_collection_product_button_block').style.display="flex"
                            }
                            
                            var id = elitemblock.getAttribute('data-id');
                            var sku = elitemblock.getAttribute('data-sku');
                            var qty = parseInt(elitemblock.querySelector('.inc_product_desc_qty_input_block input').value);
                            var bundle_id = elitemblock.getAttribute('data-bundle_id');
                            var main_id = elitemblock.getAttribute('data-main_id');
                            INC_COL.methods.updateBundleCart({ sku: sku, qty: qty }, "sub",main_id,bundle_id,null,null);
                        }else{
                            INC_COL.methods.updateBundleCart({ sku: sku, qty: qty }, "add",main_id,bundle_id,null,null);
                        }
                        if(parseInt(el_qty_input.value) > 1){
                            elitemblock.querySelector('.inc_collection_product_button_text').style.display="none"
                            elitemblock.querySelector('.inc_collection_product_button_block').style.display="none"
                            elitemblock.querySelector('.inc_product_desc_qty_block').classList.remove('singleqty')
                            elitemblock.querySelector('.inc_product_desc_qty_down_btn').setAttribute('title','')
                        }else{
                            elitemblock.querySelector('.inc_product_desc_qty_down_btn').setAttribute('title','Remove')
                            elitemblock.querySelector('.inc_product_desc_qty_block').classList.add('singleqty')
                        }
                        
                    });
                    
                    inc_product_desc_qty_up_block.addEventListener('click', function () {
                        var elitemblock=this.parentNode.parentNode.parentNode
                        
                        var el_qty_input=this.parentNode.querySelector('input')
                        el_qty_input.value = (parseInt(el_qty_input.value) + 1 > 99) ? 99 : parseInt(el_qty_input.value) + 1;
                        
                        if(parseInt(el_qty_input.value) > 1){
                            elitemblock.querySelector('.inc_product_desc_qty_down_btn').setAttribute('title','')
                            elitemblock.querySelector('.inc_product_desc_qty_block').classList.remove('singleqty')
                        }else{
                            elitemblock.querySelector('.inc_product_desc_qty_down_btn').setAttribute('title','Remove')
                            elitemblock.querySelector('.inc_product_desc_qty_block').classList.add('singleqty')
                        }
                        var id = elitemblock.getAttribute('data-id');
                        var sku = elitemblock.getAttribute('data-sku');
                        var qty = parseInt(el_qty_input.value);
                        var bundle_id = elitemblock.getAttribute('data-bundle_id');
                        var main_id = elitemblock.getAttribute('data-main_id');
                        var productModuleBlock = document.querySelector('.inc_collection_module_block[data-main_id="'+main_id+'"]');
                        if(productModuleBlock != null){
                            productModuleBlock.querySelector('.inc_product_desc_qty_input_text input').value =  parseInt(el_qty_input.value)
                        }
                        INC_COL.methods.updateBundleCart({ sku: sku, qty: qty }, "add",main_id,bundle_id,null,null);
                        // var pname=productBlock.querySelector('.inc_product_desc_title_text').innerText;
                        // var pprice=productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$','');
                        // if (elAddText.innerText == "ADDED" || elAddText.innerText == "UPDATE") {
                        //     INC_COL.methods.updateBundleCart({ sku: id, qty: qty }, "add",main_id,bundle_id,pname,pprice);
                        // }
                    });
                    //end

                    var inc_collection_product_add_button = generate_html_tag('div','inc_collection_product_add_button');
                    inc_collection_product_button_block.appendChild(inc_collection_product_add_button)

                    var inc_collection_product_shade_button = generate_html_tag('div','inc_collection_product_shade_button');
                    inc_collection_product_shade_button.innerText = "Add"
                    inc_collection_product_add_button.appendChild(inc_collection_product_shade_button)
                    if((productObj.ProductStatus == 1 && productObj.Quantity == 0) || (productObj.ProductStatus == 3)){
                        // inc_collection_product_shade_button.setAttribute('style','opacity: 0.5;pointer-events: none;')
                        inc_collection_product_button_block.setAttribute('style','opacity: 0.5;pointer-events: none;')
                    }
                    inc_collection_product_shade_button.addEventListener('click',function(){
                        var datamainid=this.parentNode.parentNode.parentNode.parentNode.getAttribute('data-main_id');
                        if(document.querySelector('.inc_collection_modal_block .inc_collection_module_block.active') != null){
                            document.querySelector('.inc_collection_modal_block .inc_collection_module_block.active').classList.remove('active')
                        }
                        if(document.querySelector('.inc_collection_modal_block .inc_collection_module_block[data-main_id="'+datamainid+'"]') != null){
                            document.querySelector('.inc_collection_modal_block .inc_collection_module_block[data-main_id="'+datamainid+'"]').classList.add('active')
                        }
                        if(document.querySelector('.inc_collection_module_block.active .inc_popup_product_details_tab_block') != null){
                            document.querySelector('.inc_collection_module_block.active .inc_popup_product_details_tab_block').click()
                        }
                        document.querySelector('html').classList.add('inc_overlay');
                        document.querySelector('.inc_collection_modal_block').classList.toggle('active')
                    })
                    var inc_collection_product_selected_wrapper_block = generate_html_tag('div','inc_collection_product_selected_wrapper_block');
                    var inc_collection_product_size_selected_block = generate_html_tag('div','inc_collection_product_size_selected_block');
                    
                    var inc_collection_product_size_select_text = generate_html_tag('div','inc_collection_product_size_select_text');
                    if((productObj.ProductStatus == 1 && productObj.Quantity == 0) || (productObj.ProductStatus == 3)){
                        inc_collection_product_size_select_text.innerText = ""
                    }else{
                        inc_collection_product_size_select_text.innerText = "Size:"
                    }
                    // inc_collection_product_size_select_text.innerText = "Size:"
                    inc_collection_product_size_selected_block.appendChild(inc_collection_product_size_select_text)

                    var inc_collection_product_size_selected_text = generate_html_tag('div','inc_collection_product_size_selected_text');
                    
                    // inc_collection_product_size_selected_text.style.color="#fff"
                    inc_collection_product_size_selected_block.appendChild(inc_collection_product_size_selected_text)

                    var inc_collection_product_color_selected_block = generate_html_tag('div','inc_collection_product_color_selected_block');
                    
                    var inc_collection_product_color_select_text = generate_html_tag('div','inc_collection_product_color_select_text');
                    // inc_collection_product_color_select_text.innerText = "Color:"
                    if((productObj.ProductStatus == 1 && productObj.Quantity == 0) || (productObj.ProductStatus == 3)){
                        inc_collection_product_size_selected_text.innerText = "."
                        inc_collection_product_size_selected_text.style.color="#fff"
                        inc_collection_product_color_select_text.innerText = "."
                        inc_collection_product_color_select_text.style.color="#fff"
                    }else{
                        inc_collection_product_color_select_text.innerText = "Color:"
                    }
                    inc_collection_product_color_selected_block.appendChild(inc_collection_product_color_select_text)

                    var inc_collection_product_color_selected_text = generate_html_tag('div','inc_collection_product_color_selected_text');
                    inc_collection_product_color_selected_text.innerText = ""
                    inc_collection_product_color_selected_block.appendChild(inc_collection_product_color_selected_text)

                    var inc_collection_product_sizes_selected_block = generate_html_tag('div','inc_collection_product_size_selected_block');
                    var inc_collection_product_sizes_select_text = generate_html_tag('div','inc_collection_product_sizes_select_text');
                    inc_collection_product_sizes_select_text.innerText = "Size:"
                    inc_collection_product_sizes_selected_block.appendChild(inc_collection_product_sizes_select_text)

                    var inc_collection_product_sizes_selected_text = generate_html_tag('div','inc_collection_product_sizes_selected_text');
                    inc_collection_product_sizes_selected_text.innerText = ""
                    inc_collection_product_sizes_selected_block.appendChild(inc_collection_product_sizes_selected_text)

                    var inc_collection_product_colors_selected_block = generate_html_tag('div','inc_collection_product_colors_selected_block');
                    
                    var inc_collection_product_colors_select_text = generate_html_tag('div','inc_collection_product_colors_select_text');
                    inc_collection_product_colors_select_text.innerText = "Color:"
                    inc_collection_product_colors_selected_block.appendChild(inc_collection_product_colors_select_text)

                    var inc_collection_product_colors_selected_text = generate_html_tag('div','inc_collection_product_colors_selected_text');
                    inc_collection_product_colors_selected_text.innerText = ""
                    inc_collection_product_colors_selected_block.appendChild(inc_collection_product_colors_selected_text)

                    inc_collection_product_selected_wrapper_block.appendChild(inc_collection_product_sizes_selected_block);
                    inc_collection_product_selected_wrapper_block.appendChild(inc_collection_product_colors_selected_block);
                    inc_collection_product_info_block.appendChild(inc_collection_product_selected_wrapper_block);

                    inc_collection_product_add_block.appendChild(inc_collection_product_size_selected_block)
                    inc_collection_product_add_block.appendChild(inc_collection_product_color_selected_block)


                    if(productObj.ProductType == "configurable"){
                        // inc_collection_product_button_text.style.display="none"
                    }else{
                        inc_collection_product_add_button.style.display="none"
                        // inc_collection_product_shade_selected_block.setAttribute('style','display:none')
                    }
                    // var colproductBlock = this.createProductModuleBlock(product_id, "collection", true,inc_collection_product_item_list);
                    var inc_collection_module_block = generate_html_tag('div','inc_collection_module_block');
                    inc_collection_module_block.setAttribute('data-main_id', productObj.mainId);

                    var inc_collection_product_detail_tab_block = generate_html_tag('div','inc_collection_product_detail_tab_block');
                    inc_collection_module_block.appendChild(inc_collection_product_detail_tab_block)

                    var inc_collection_module_product_block = generate_html_tag('div','inc_collection_module_product_block');
                    inc_collection_module_product_block.classList.add('active')
                    inc_collection_module_block.appendChild(inc_collection_module_product_block)

                    var pdpProductId = INC_COL.dataStore.methods().getFirstProductObjByMainId({ mainId: product_id }).id;
                    var productcollectionModalBlock = INC_COL.methods.createCollectionProductModalBlock(pdpProductId, 'collection', true,inc_collection_modal_list);
                    productcollectionModalBlock.className = "inc_product_block_collection"
                    if(productcollectionModalBlock.querySelector('.inc_product_desc_add_text') != null){
                        productcollectionModalBlock.querySelector('.inc_product_desc_add_text').innerText = "Add"
                    }
                    productcollectionModalBlock.classList.add('active')
                    inc_collection_module_product_block.appendChild(productcollectionModalBlock)
                    inc_collection_modal_list.appendChild(inc_collection_module_block)
                    if((productObj.ProductStatus == 1 && productObj.Quantity == 0) || (productObj.ProductStatus == 3)){
                        productcollectionModalBlock.querySelector('.inc_product_desc_add_block').setAttribute('style','opacity: 0.5;pointer-events: none;')
                    }
                    var inc_collection_popup_close_icon = generate_html_tag('span','inc_collection_popup_close_icon')
                    inc_collection_product_detail_tab_block.appendChild(inc_collection_popup_close_icon)

                    inc_collection_popup_close_icon.addEventListener('click',function(e){
                        var mblock = this.parentNode.parentNode.parentNode.parentNode
                        document.querySelector('html').classList.remove('inc_overlay');
                        document.querySelector('html').classList.remove('inc_prevent_scroll')
                        document.querySelector('html').style.overflow = "auto";
                        mblock.classList.remove('active')
                    })

                    var inc_popup_product_details_tab_block = generate_html_tag('div','inc_popup_product_details_tab_block')
                    inc_popup_product_details_tab_block.classList.add('active')
                    var inc_popup_product_details_tab_text = generate_html_tag('div','inc_popup_product_details_text')
                    findObj = new INC_COL.classes.FindObj({ mainId: productObj.mainId });

                    if(INC_COL.dataStore.methods().getProductColorsObj(findObj).colorArray.length == 0 && INC_COL.dataStore.methods().getProductopt0Obj(findObj).att0Array.length == 0){
                       inc_popup_product_details_tab_text.innerText = "View Details";
                    }else{
                        if(INC_COL.dataStore.methods().getProductopt0Obj(findObj).att0Array.length > 0){
                            if(INC_COL.dataStore.methods().getProductopt0Obj(findObj).att0Array[0] != undefined){
                                inc_popup_product_details_tab_text.innerText = "View Details"//+INC_COL.dataStore.methods().getProductopt0Obj(findObj).att0Array[0].code+"";
                            }else{
                                inc_popup_product_details_tab_text.innerText = "View Details"//+INC_COL.dataStore.methods().getProductSizesObj(findObj).sizeArray[0].code+"";
                            }
                        }else if(INC_COL.dataStore.methods().getProductColorsObj(findObj).colorArray.length > 0) {
                            if(INC_COL.dataStore.methods().getProductColorsObj(findObj).colorArray[0].code == "color"){
                                inc_popup_product_details_tab_text.innerText = "View Details";
                            }else{
                               inc_popup_product_details_tab_text.innerText = "View Details"//+INC_COL.dataStore.methods().getProductColorsObj(findObj).colorArray[0].code+"";
                            }
                        }
                    }
                    // inc_popup_product_details_tab_text.innerText = "View Details"
                    inc_popup_product_details_tab_block.appendChild(inc_popup_product_details_tab_text)
                    inc_collection_product_detail_tab_block.appendChild(inc_popup_product_details_tab_block)
                    
                    inc_popup_product_details_tab_block.addEventListener('click',function(){
                        this.parentNode.querySelector('.inc_popup_product_description_tab_block').classList.remove('active')
                        this.parentNode.querySelector('.inc_popup_product_details_tab_block').classList.add('active')
                        this.parentNode.parentNode.querySelector('.inc_popup_product_description_block').classList.remove('active')
                        this.parentNode.parentNode.querySelector('.inc_product_block_collection').classList.add('active')
                        scrollToPrd(this)
                    })

                    function scrollToPrd(e){
                        var elmnt = e.parentNode.parentNode.querySelector('.inc_product_block_collection');
                        elmnt.scrollIntoView();
                    }

                    if(productObj.description != "" && productObj.description != null){
                        var inc_popup_product_description_tab_block = generate_html_tag('div','inc_popup_product_description_tab_block')
                        var inc_popup_product_description_tab_text = generate_html_tag('div','inc_popup_product_description_text')
                        inc_popup_product_description_tab_text.innerText = "Product Description"
                        inc_popup_product_description_tab_block.appendChild(inc_popup_product_description_tab_text)
                        inc_collection_product_detail_tab_block.appendChild(inc_popup_product_description_tab_block)
                        var inc_popup_product_description_block = generate_html_tag('div','inc_popup_product_description_block')
                        var inc_popup_product_description_text = generate_html_tag('div','inc_popup_product_description_text')
                        inc_popup_product_description_text.innerHTML  = productObj.description;


                        inc_popup_product_description_tab_block.addEventListener('click',function(){
                            this.parentNode.querySelector('.inc_popup_product_details_tab_block').classList.remove('active')
                            this.parentNode.querySelector('.inc_popup_product_description_tab_block').classList.add('active')
                            this.parentNode.parentNode.querySelector('.inc_product_block_collection').classList.remove('active')
                            this.parentNode.parentNode.querySelector('.inc_popup_product_description_block').classList.add('active')
                            scrollToDesc(this)
                        })
                        if(inc_popup_product_description_text.querySelector('.SeeMore') != null){
                            inc_popup_product_description_text.querySelector('.SeeMore').style.display="none"
                        }
                        inc_popup_product_description_block.appendChild(inc_popup_product_description_text)
                        inc_collection_module_product_block.appendChild(inc_popup_product_description_block)
                        if(inc_popup_product_description_block.querySelector('.SeeMore') != null){
                            inc_popup_product_description_block.querySelector('.SeeMore').style.display="none"
                        }
                    }

                    function scrollToDesc(e){
                        var elmnt = e.parentNode.parentNode.querySelector('.inc_popup_product_description_block')
                        elmnt.scrollIntoView();
                    }

                    if(r == 0){
                        inc_collection_module_block.classList.add('active')
                    }
                    //product slider on modal
                    var inc_collection_slider_block = generate_html_tag('div','inc_collection_slider_block');
                    var inc_collection_slider_list_block = generate_html_tag('div','inc_collection_slider_list_block');
                    inc_collection_slider_block.appendChild(inc_collection_slider_list_block)
                    inc_collection_module_product_block.appendChild(inc_collection_slider_block)

                    if(INC_COL.config.collection_combo_details[k].collection_bundles[p].products[r+1] != undefined){
                        var product_idnext=INC_COL.config.collection_combo_details[k].collection_bundles[p].products[r+1]
                        var pdpProductId = INC_COL.dataStore.methods().getFirstProductObjByMainId({ mainId: product_idnext }).id;
                        var findObjnext = new INC_COL.classes.FindObj({ id: pdpProductId });
                        var productObjnext = INC_COL.dataStore.methods().getProductById(findObjnext);

                        if(r == 0){
                            var inc_collection_slider_next_block = generate_html_tag('div','inc_collection_slider_next_block');
                            inc_collection_slider_list_block.appendChild(inc_collection_slider_next_block)
                            var inc_collection_slider_next_img_block = generate_html_tag('div','inc_collection_slider_next_img_block');
                            inc_collection_slider_next_block.appendChild(inc_collection_slider_next_img_block)
                            var inc_collection_slider_next_img = generate_html_tag('img');
                            inc_collection_slider_next_img.setAttribute('src',productObjnext["imageURL"])
                            //productObj["imageURL"]
                            inc_collection_slider_next_img_block.appendChild(inc_collection_slider_next_img)
                            var inc_collection_slider_next_text = generate_html_tag('div','inc_collection_slider_next_text');
                            inc_collection_slider_next_text.innerText = "Next"
                            inc_collection_slider_next_img_block.appendChild(inc_collection_slider_next_text)

                            inc_collection_slider_list_block.classList.add('next')

                            inc_collection_slider_next_block.setAttribute('data-id', productObjnext.id);
                            inc_collection_slider_next_block.setAttribute('data-main_id', productObjnext.mainId);
                            inc_collection_slider_next_block.setAttribute('data-bundle_id', productObjnext.bundleId);
                            inc_collection_slider_next_block.setAttribute('data-combo_id', productObjnext.comboId);
                            inc_collection_slider_next_block.addEventListener('click',function(){
                                var active_modal = document.querySelector('.inc_collection_module_block.active')
                                if(active_modal != null){
                                    if(active_modal.nextElementSibling != null){
                                        active_modal.classList.remove('active')
                                        active_modal.nextElementSibling.classList.add('active')
                                        if(document.querySelector('.inc_collection_module_block.active .inc_popup_product_details_tab_block') != null){
                                            document.querySelector('.inc_collection_module_block.active .inc_popup_product_details_tab_block').click()
                                        }
                                    }
                                }
                            })
                            
                            //
                        }else{
                            var product_idprev=INC_COL.config.collection_combo_details[k].collection_bundles[p].products[r-1]
                            var pdpProductId = INC_COL.dataStore.methods().getFirstProductObjByMainId({ mainId: product_idprev }).id;
                            var findObjprev = new INC_COL.classes.FindObj({ id: pdpProductId });
                            var productObjprev = INC_COL.dataStore.methods().getProductById(findObjprev);

                            var inc_collection_slider_previous_block = generate_html_tag('div','inc_collection_slider_previous_block');
                            inc_collection_slider_list_block.appendChild(inc_collection_slider_previous_block)
                            var inc_collection_slider_previous_text = generate_html_tag('div','inc_collection_slider_previous_text');
                            inc_collection_slider_previous_text.innerText = "Previous"
                            inc_collection_slider_previous_block.appendChild(inc_collection_slider_previous_text)
                            var inc_collection_slider_previous_img_block = generate_html_tag('div','inc_collection_slider_previous_img_block');
                            inc_collection_slider_previous_block.appendChild(inc_collection_slider_previous_img_block)
                            var inc_collection_slider_previous_img = generate_html_tag('img');
                            inc_collection_slider_previous_img.setAttribute('src',productObjprev["imageURL"])
                            inc_collection_slider_previous_img_block.appendChild(inc_collection_slider_previous_img)

                            //next

                            var inc_collection_slider_next_block = generate_html_tag('div','inc_collection_slider_next_block');
                            inc_collection_slider_list_block.appendChild(inc_collection_slider_next_block)
                            var inc_collection_slider_next_img_block = generate_html_tag('div','inc_collection_slider_next_img_block');
                            inc_collection_slider_next_block.appendChild(inc_collection_slider_next_img_block)
                            var inc_collection_slider_next_img = generate_html_tag('img');
                            inc_collection_slider_next_img.setAttribute('src',productObjnext["imageURL"])
                            inc_collection_slider_next_img_block.appendChild(inc_collection_slider_next_img)
                            var inc_collection_slider_next_text = generate_html_tag('div','inc_collection_slider_next_text');
                            inc_collection_slider_next_text.innerText = "Next"
                            inc_collection_slider_next_img_block.appendChild(inc_collection_slider_next_text)



                            inc_collection_slider_previous_block.setAttribute('data-id', productObjprev.id);
                            inc_collection_slider_previous_block.setAttribute('data-main_id', productObjprev.mainId);
                            inc_collection_slider_previous_block.setAttribute('data-bundle_id', productObjprev.bundleId);
                            inc_collection_slider_previous_block.setAttribute('data-combo_id', productObjprev.comboId);

                            inc_collection_slider_next_block.setAttribute('data-id', productObjnext.id);
                            inc_collection_slider_next_block.setAttribute('data-main_id', productObjnext.mainId);
                            inc_collection_slider_next_block.setAttribute('data-bundle_id', productObjnext.bundleId);
                            inc_collection_slider_next_block.setAttribute('data-combo_id', productObjnext.comboId);

                            inc_collection_slider_previous_block.addEventListener('click',function(){
                                var active_modal = document.querySelector('.inc_collection_module_block.active')
                                if(active_modal != null){
                                    if(active_modal.previousElementSibling != null){
                                        active_modal.classList.remove('active')
                                        active_modal.previousElementSibling.classList.add('active')
                                        if(document.querySelector('.inc_collection_module_block.active .inc_popup_product_details_tab_block') != null){
                                            document.querySelector('.inc_collection_module_block.active .inc_popup_product_details_tab_block').click()
                                        }
                                    }
                                }
                            })

                            inc_collection_slider_next_block.addEventListener('click',function(){
                                var active_modal = document.querySelector('.inc_collection_module_block.active')
                                if(active_modal != null){
                                    if(active_modal.nextElementSibling != null){
                                        active_modal.classList.remove('active')
                                        active_modal.nextElementSibling.classList.add('active')
                                        if(document.querySelector('.inc_collection_module_block.active .inc_popup_product_details_tab_block') != null){
                                            document.querySelector('.inc_collection_module_block.active .inc_popup_product_details_tab_block').click()
                                        }
                                    }
                                }
                            })
                            inc_collection_slider_list_block.classList.add('next_prev')
                        }
                    }else if(INC_COL.config.collection_combo_details[k].collection_bundles[p].products.length == r+1){
                        if(INC_COL.config.collection_combo_details[k].collection_bundles[p].products[r-1] != undefined){
                            var product_idprev=INC_COL.config.collection_combo_details[k].collection_bundles[p].products[r-1]
                            var pdpProductId = INC_COL.dataStore.methods().getFirstProductObjByMainId({ mainId: product_idprev }).id;
                            var findObjprev = new INC_COL.classes.FindObj({ id: pdpProductId });
                            var productObjprev = INC_COL.dataStore.methods().getProductById(findObjprev);
                            var inc_collection_slider_previous_block = generate_html_tag('div','inc_collection_slider_previous_block');
                            inc_collection_slider_list_block.appendChild(inc_collection_slider_previous_block)
                            var inc_collection_slider_previous_text = generate_html_tag('div','inc_collection_slider_previous_text');
                            inc_collection_slider_previous_text.innerText = "Previous"
                            inc_collection_slider_previous_block.appendChild(inc_collection_slider_previous_text)
                            var inc_collection_slider_previous_img_block = generate_html_tag('div','inc_collection_slider_previous_img_block');
                            inc_collection_slider_previous_block.appendChild(inc_collection_slider_previous_img_block)
                            var inc_collection_slider_previous_img = generate_html_tag('img');
                            inc_collection_slider_previous_img.setAttribute('src',productObjprev["imageURL"])
                            inc_collection_slider_previous_img_block.appendChild(inc_collection_slider_previous_img)


                            inc_collection_slider_previous_block.setAttribute('data-id', productObjprev.id);
                            inc_collection_slider_previous_block.setAttribute('data-main_id', productObjprev.mainId);
                            inc_collection_slider_previous_block.setAttribute('data-bundle_id', productObjprev.bundleId);
                            inc_collection_slider_previous_block.setAttribute('data-combo_id', productObjprev.comboId);
                            inc_collection_slider_previous_block.addEventListener('click',function(){
                                var active_modal = document.querySelector('.inc_collection_module_block.active')
                                if(active_modal != null){
                                    if(active_modal.previousElementSibling != null){
                                        active_modal.classList.remove('active')
                                        active_modal.previousElementSibling.classList.add('active')
                                        if(document.querySelector('.inc_collection_module_block.active .inc_popup_product_details_tab_block') != null){
                                            document.querySelector('.inc_collection_module_block.active .inc_popup_product_details_tab_block').click()
                                        }
                                    }
                                }
                            })
                            inc_collection_slider_list_block.classList.add('prev')
                        }
                    }  
                    //end
                }
            }
            if(colllectionrating != 0){
                var rating_col = INC_COL.methods.get_product_ratings_col(colllectionrating,collectionreview,inc_collection_rating_block)
            } else {
                inc_collection_product_rating.classList.add('noRating');
            }
            var inc_collection_product_checkout_block = generate_html_tag('div','inc_collection_product_checkout_block');
            inc_collection_product_block.appendChild(inc_collection_product_checkout_block)
            var inc_collection_product_checkout_price_text_wrapper = generate_html_tag('div','inc_collection_product_checkout_price_text_wrapper');
            inc_collection_product_checkout_block.appendChild(inc_collection_product_checkout_price_text_wrapper)
        
            var inc_collection_product_checkout_text = generate_html_tag('div','inc_collection_product_checkout_text');
            inc_collection_product_checkout_text.innerText = ""
            inc_collection_product_checkout_price_text_wrapper.appendChild(inc_collection_product_checkout_text)
        
            var inc_collection_product_checkout_price_block = generate_html_tag('div','inc_collection_product_checkout_price_block');
            inc_collection_product_checkout_price_text_wrapper.appendChild(inc_collection_product_checkout_price_block)
        
            var inc_collection_product_checkout_price_active_price = generate_html_tag('div','inc_collection_product_checkout_price_active_price');
            inc_collection_product_checkout_price_block.appendChild(inc_collection_product_checkout_price_active_price)
        
            var inc_collection_product_checkout_price_regular_price = generate_html_tag('div','inc_collection_product_checkout_price_regular_price');
            inc_collection_product_checkout_price_block.appendChild(inc_collection_product_checkout_price_regular_price)

            var inc_collection_product_checkout_price_save_price = generate_html_tag('div','inc_collection_product_checkout_price_save_price');
            inc_collection_product_checkout_price_text_wrapper.appendChild(inc_collection_product_checkout_price_save_price)
            var inc_collection_product_checkout_wrapper = generate_html_tag('div','inc_collection_product_checkout_wrapper');
            var inc_collection_product_checkout_button = generate_html_tag('div','inc_collection_product_checkout_button');
            var inc_collection_product_checkout_button_text = generate_html_tag('div','inc_collection_product_checkout_button_text');
            inc_collection_product_checkout_button_text.innerText = "Add To Basket"
            inc_collection_product_checkout_button.setAttribute("style", "pointer-events: none;opacity:0.5");
            inc_collection_product_checkout_button.appendChild(inc_collection_product_checkout_button_text)
            inc_collection_product_checkout_price_text_wrapper.appendChild(inc_collection_product_checkout_wrapper)
            inc_collection_product_checkout_wrapper.appendChild(inc_collection_product_checkout_button)
            
            var inc_price_wrapper = generate_html_tag('div','inc_price_wrapper');
            
            inc_collection_product_checkout_price_block.appendChild(inc_price_wrapper);
            var inc_priceCut_block = generate_html_tag('div','inc_priceCut_block');
            inc_priceCut_block.innerText = "";
            inc_price_wrapper.appendChild(inc_priceCut_block);
            inc_wasPrcSavePrc_wrapper= generate_html_tag('div','inc_wasPrcSavePrc_wrapper');
            inc_price_wrapper.appendChild(inc_wasPrcSavePrc_wrapper);
            var inc_wasPrice_block = generate_html_tag('div','inc_wasPrice_block');
            inc_wasPrice_block.innerText = "";
            inc_wasPrcSavePrc_wrapper.appendChild(inc_wasPrice_block);
            var inc_savePrice_block = generate_html_tag('div','inc_savePrice_block');
            inc_savePrice_block.innerText = "";
            inc_wasPrcSavePrc_wrapper.appendChild(inc_savePrice_block);
        
            inc_collection_product_checkout_button.addEventListener('click',function(){
                var loader_html='<div class="-js-loader show"><i class="spinner"></i></div>'
                var createloader = document.createElement('div')
                createloader.classList.add('inc-loader')
                createloader.innerHTML = loader_html
                var el = document.querySelector('body')
                el.insertBefore(createloader, el.childNodes[0]);
                var btn_cart = this.querySelector('.inc_collection_product_checkout_button_text')
                btn_cart.classList.add('inc_loading')
                btn_cart.parentNode.setAttribute('style','pointer-events: none;')
                setTimeout(function(){
                    INC_COL.methods.addBundleToCart(btn_cart);
                },200)
            })

            // inc_collection_product_checkout_button_text.addEventListener('click',function(){
            //     var btn_cart = this
            //     btn_cart.classList.add('inc_loading')
            //     INC_COL.methods.addBundleToCart(btn_cart);
            // })
            
        
            var pr = 0;
            var sp = 0;
            inc_collection_product_checkout_price_text_wrapper.classList.remove('is_special_price')
            inc_collection_product_checkout_price_text_wrapper.classList.remove('simple_price')
                if (pr != sp && sp != 0) {
                    inc_collection_product_checkout_price_text_wrapper.classList.add('is_special_price')
                    inc_collection_product_checkout_price_active_price.innerHTML = formatter.format(sp)
                    inc_collection_product_checkout_price_regular_price.innerHTML = formatter.format(pr)
                }else{
                    inc_collection_product_checkout_price_text_wrapper.classList.add('simple_price')
                    inc_collection_product_checkout_price_active_price.innerHTML = formatter.format(pr)
                    inc_collection_product_checkout_price_regular_price.innerHTML = ""
                } 

            }
        }
    }


    //ProductListModule
    if(INC_COL.config.pageType == "productList"){
        var plp_sibling = document.querySelector('.ProductListModule')
        plp_sibling.parentNode.insertBefore(inc_collection_block, plp_sibling);
        
    }else{
        //  document.querySelector('.columns .column.main').setAttribute('style','')
        if (window.location.innerwidth > 767){
            var pdpcolsibling = document.querySelector('.spacer-bottom-60')
        } else {
            var pdpcolsibling = document.querySelector('.inner-spacer-bottom-40')
            if (pdpcolsibling == null || pdpcolsibling == ""){
              var pdpcolsibling = document.querySelector('.spacer-bottom-60')  
            }
        }
        //Error404
        if(pdpcolsibling != null){
            pdpcolsibling.parentNode.insertBefore(inc_collection_block, pdpcolsibling);
        }
        var all_modal = document.querySelectorAll('.inc_product_block_collection[stock_status="inc_instock"]')
        
        for(a=0;a<all_modal.length;a++){
            var main_id = all_modal[a].getAttribute('data-cpid')
            
            if(all_modal[a].querySelector('.inc_product_desc_att_zero_block.active') != null){
                
                if(all_modal[a].querySelector('.inc_product_desc_att_size_list_item_img_block.avail') != null){
                    if(all_modal[a].querySelector('.inc_product_desc_att_size_list_item_img[data-cpid="'+main_id+'"]') != null){
                        all_modal[a].querySelector('.inc_product_desc_att_size_list_item_img[data-cpid="'+main_id+'"]').click()
                    }else{
                        if(all_modal[a].querySelector('.inc_product_desc_att_size_list_item_img_block.avail') != null){
                            all_modal[a].querySelector('.inc_product_desc_att_size_list_item_img').click()
                        }
                        all_modal[a].querySelector('.inc_product_desc_add_block').click()
                    }
                }
                if(all_modal[a].querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="'+main_id+'"] .inc_product_desc_att_color_list_item_img') != null){
                    all_modal[a].querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="'+main_id+'"] .inc_product_desc_att_color_list_item_img').click()
                } 
                all_modal[a].querySelector('.inc_product_desc_add_block').click()
                // document.querySelectorAll('.inc_collection_product_shade_button')[a].click()

            }else if(all_modal[a].querySelector('.inc_product_desc_att_color_block.active') != null){
                var flagto = false 
                
                if(all_modal[a].querySelector('.inc_product_desc_att_size_list_item_img_block.avail') != null){
                    flagto = true
                    all_modal[a].querySelector('.inc_product_desc_att_size_list_item_img[data-cpid="'+main_id+'"]').click()
                }
                if(all_modal[a].querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="'+main_id+'"] .inc_product_desc_att_color_list_item_img') != null){
                    flagto = true
                    all_modal[a].querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="'+main_id+'"] .inc_product_desc_att_color_list_item_img').click()
                }
                if(flagto == false){
                    if(all_modal[a].querySelector('.inc_product_desc_att_color_list_item_img') != null){
                        all_modal[a].querySelector('.inc_product_desc_att_color_list_item_img').click()
                    } 
                    if(all_modal[a].querySelector('.inc_product_desc_att_size_list_item_img_block.avail') != null){
                        all_modal[a].querySelector('.inc_product_desc_att_size_list_item_img').click()
                    }
                }
                all_modal[a].querySelector('.inc_product_desc_add_block').click()
                // document.querySelectorAll('.inc_collection_product_shade_button')[a].click()

            }else if(all_modal[a].querySelector('.inc_product_desc_att_zero_block.active') != null){
                var flagto = false;
                if(all_modal[a].querySelector('.inc_product_desc_att_color_list_item_img') != null){
                    flagto = true
                    all_modal[a].querySelector('.inc_product_desc_att_color_list_item_img').click()
                } 
                if(all_modal[a].querySelector('.inc_product_desc_att_size_list_item_img_block.avail') != null){
                    flagto = true
                    all_modal[a].querySelector('.inc_product_desc_att_size_list_item_img').click()
                }
                if(flagto == false){
                    if(all_modal[a].querySelector('.inc_product_desc_att_color_list_item_img') != null){
                        all_modal[a].querySelector('.inc_product_desc_att_color_list_item_img').click()
                    } 
                    if(all_modal[a].querySelector('.inc_product_desc_att_size_list_item_img_block.avail') != null){
                        all_modal[a].querySelector('.inc_product_desc_att_size_list_item_img').click()
                    }
                }
                all_modal[a].querySelector('.inc_product_desc_add_block').click()
                // document.querySelectorAll('.inc_collection_product_shade_button')[a].click()

            }else if(all_modal[a].querySelector('.inc_product_desc_att_color_block.active') != null){
                if(all_modal[a].querySelector('.inc_product_desc_att_color_list_item_img') != null){
                    all_modal[a].querySelector('.inc_product_desc_att_color_list_item_img').click()
                } 
                if(all_modal[a].querySelector('.inc_product_desc_att_size_list_item_img_block.avail') != null){
                    all_modal[a].querySelector('.inc_product_desc_att_size_list_item_img').click()
                }
                all_modal[a].querySelector('.inc_product_desc_add_block').click()
                // document.querySelectorAll('.inc_collection_product_shade_button')[a].click()

            }else{
                all_modal[a].querySelector('.inc_product_desc_add_block').click()
                // document.querySelectorAll('.inc_collection_product_shade_button')[a].click()
            }
        }
    }
    
}

INC_COL.methods.createPLPCollectionBlock = function (response) {
   
    if(document.querySelector('.plp_collection_block') != null){
        var collection_block=document.querySelector('.plp_collection_block')
        collection_block.parentNode.removeChild(collection_block);
    }
    
    var inc_collection_block = generate_html_tag('div','plp_collection_block');
    var collection_title_block=generate_html_tag('div','collection_title_block')
    var collection_plp_title_text=generate_html_tag('div','collection_plp_title_text')
    collection_plp_title_text.innerText = "Naše nejnovější kolekce"
    collection_title_block.appendChild(collection_plp_title_text)
    inc_collection_block.appendChild(collection_title_block)
    var inc_collection_bundle_block = generate_html_tag('div','inc_collection_bundle_block');
    inc_collection_block.appendChild(inc_collection_bundle_block)
    var sliderBtnCounter = 0;
    //

        var inc_collection_slider_block = generate_html_tag('div','inc_collection_slider_block');
        var inc_collection_thumbnail_arrows_block = generate_html_tag('div','inc_collection_thumbnail_arrows_block');

        inc_collection_slider_block.appendChild(inc_collection_thumbnail_arrows_block)
        var inc_collection_thumbnail_prev_wrapper = generate_html_tag('div','inc_collection_thumbnail_prev_wrapper');
        inc_collection_thumbnail_arrows_block.appendChild(inc_collection_thumbnail_prev_wrapper)

        var inc_collection_thumbnail_prev_btn = generate_html_tag('div','inc_collection_thumbnail_prev_btn');
        inc_collection_thumbnail_prev_btn.innerText = "Previous"
        inc_collection_thumbnail_prev_wrapper.appendChild(inc_collection_thumbnail_prev_btn)
        var all_p_length = document.querySelectorAll('.inc_collection_item_block').length
        inc_collection_thumbnail_prev_btn.setAttribute("style", "pointer-events: none;opacity:0.5");
        inc_collection_thumbnail_prev_btn.parentNode.setAttribute("style", "pointer-events: none;opacity:0.5");
        inc_collection_thumbnail_prev_wrapper.addEventListener('click',function(){
            var elprev = this.parentNode.parentNode.parentNode.parentNode
           sliderBtnCounter--;
            if (sliderBtnCounter == -1) sliderBtnCounter = 0;
            var all_p_length = document.querySelectorAll('.inc_collection_item_block').length
            if (INC_COL.clientConfig.slidevalue == -1) INC_COL.clientConfig.slidevalue = 0;
            var width_slide=""
            if(window.innerWidth > 767){
                width_slide = 250
            }else{
                width_slide = 248
            }
            if(INC_COL.clientConfig.slidevalue > 0){
                document.querySelector('.inc_collection_thumbnail_next_btn').setAttribute("style", "pointer-events: auto;opacity:1");
                document.querySelector('.inc_collection_thumbnail_next_btn').parentNode.setAttribute("style", "pointer-events: auto;opacity:1");
                INC_COL.clientConfig.slidevalue--
                INC_COL.clientConfig.offset = (parseInt(INC_COL.clientConfig.offset) + width_slide) + 'px';
                var menu = document.querySelector('.inc_collection_item_list_block');
                menu.setAttribute('style','margin-left:'+INC_COL.clientConfig.offset+';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
            }
            if(INC_COL.clientConfig.slidevalue == 0){
                document.querySelector('.inc_collection_thumbnail_prev_btn').setAttribute("style", "pointer-events: none;opacity:0.5");
                document.querySelector('.inc_collection_thumbnail_prev_btn').parentNode.setAttribute("style", "pointer-events: none;opacity:0.5");
            }
        });

       

        var inc_collection_thumbnail_next_wrapper = generate_html_tag('div','inc_collection_thumbnail_next_wrapper');
        inc_collection_thumbnail_arrows_block.appendChild(inc_collection_thumbnail_next_wrapper)
        var inc_collection_thumbnail_next_btn = generate_html_tag('div','inc_collection_thumbnail_next_btn');
        inc_collection_thumbnail_next_btn.innerText = "Next"
        inc_collection_thumbnail_next_wrapper.appendChild(inc_collection_thumbnail_next_btn)
        
        inc_collection_thumbnail_next_wrapper.addEventListener('click',function(){
            var elnext = this.parentNode.parentNode.parentNode.parentNode
            sliderBtnCounter++;
            var all_p_length = document.querySelectorAll('.inc_collection_item_block').length
            if (sliderBtnCounter > all_p_length.length - 1) {
                sliderBtnCounter--;
            }
            
            var cc_ount=1;
            if(window.innerWidth > 1239){
                cc_ount = 4
            }
            var width_slide=""
            if(window.innerWidth > 767){
                width_slide = 250
            }else{
                width_slide = 248
            }
            // cc_ount=1
            if(+INC_COL.clientConfig.slidevalue + +cc_ount < all_p_length){
               document.querySelector('.inc_collection_thumbnail_prev_btn').setAttribute("style", "pointer-events: auto;opacity:1");
               document.querySelector('.inc_collection_thumbnail_prev_btn').parentNode.setAttribute("style", "pointer-events: auto;opacity:1");
                INC_COL.clientConfig.slidevalue++
                INC_COL.clientConfig.offset = (parseInt(INC_COL.clientConfig.offset) - width_slide) + 'px';
                var menu = document.querySelector('.inc_collection_item_list_block');
                menu.setAttribute('style','margin-left:'+INC_COL.clientConfig.offset+';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
            }
            
            if(+INC_COL.clientConfig.slidevalue + +cc_ount == all_p_length){
                document.querySelector('.inc_collection_thumbnail_next_btn').setAttribute("style", "pointer-events: none;opacity:0.5");
                document.querySelector('.inc_collection_thumbnail_next_btn').parentNode.setAttribute("style", "pointer-events: none;opacity:0.5");
            }
        });
        if((window.innerWidth > 420 && INC_COL.config.collection_combo_details.length > 4) || (window.innerWidth > 420 && INC_COL.config.collection_combo_details.length > 2) || (window.innerWidth < 420 && INC_COL.config.collection_combo_details.length > 1)){
            inc_collection_block.appendChild(inc_collection_slider_block)
        }

        if (INC_COL.config.collection_combo_details.length <= 4){
            inc_collection_slider_block.classList.add('hideSlider');
        }
        
    //collection modal block

    var inc_collection_modal_block = generate_html_tag('div','inc_collection_modal_block');
    var inc_collection_modal_list = generate_html_tag('div','inc_collection_modal_list');
    inc_collection_modal_block.appendChild(inc_collection_modal_list)
    inc_collection_block.appendChild(inc_collection_modal_block)

    var inc_collection_item_list_block = generate_html_tag('div','inc_collection_item_list_block');
    inc_collection_bundle_block.appendChild(inc_collection_item_list_block)
    
    for(k=0;k<INC_COL.config.collection_combo_details.length;k++){
        if(k < 8){
            var inc_collection_item_block = generate_html_tag('div','inc_collection_item_block');
            inc_collection_item_list_block.appendChild(inc_collection_item_block)
            var inc_collection_item_wrapper = generate_html_tag('div','inc_collection_item_wrapper');
            inc_collection_item_block.appendChild(inc_collection_item_wrapper)
            //image gallery block for collections
            
            var inc_collection_Images_block = generate_html_tag('div','inc_collection_Images_block');
            inc_collection_item_wrapper.appendChild(inc_collection_Images_block)
            var inc_collection_Name_block = generate_html_tag('div','inc_collection_Name_block');
            inc_collection_item_wrapper.appendChild(inc_collection_Name_block)
            var inc_collection_Name_text = generate_html_tag('div','inc_collection_Name_text');
            inc_collection_Name_block.appendChild(inc_collection_Name_text)
            inc_collection_Name_text.setAttribute('style','max-height: 40px;')
            //collection per product block
            var inc_collection_details_block = generate_html_tag('div','inc_collection_details_block');
            inc_collection_item_wrapper.appendChild(inc_collection_details_block)

            //collection image per items
            var inc_collection_Images_gallery = generate_html_tag('div','inc_collection_Images_gallery');
            inc_collection_Images_gallery.classList.add('active')
            inc_collection_Images_block.appendChild(inc_collection_Images_gallery)
            
            var collection_combo_img_wrapper=generate_html_tag('div','collection_combo_img_wrapper');
            var collection_combo_img=generate_html_tag('img');
        
            collection_combo_img_wrapper.appendChild(collection_combo_img)
            inc_collection_Images_gallery.appendChild(collection_combo_img_wrapper)
            collection_combo_img_wrapper.classList.add('active')
            

            var inc_collection_price_block = generate_html_tag('div','inc_collection_price_block');
            inc_collection_details_block.appendChild(inc_collection_price_block)

            var inc_collection_regular_price = generate_html_tag('div','inc_collection_regular_price');
            inc_collection_price_block.appendChild(inc_collection_regular_price)
            
            var inc_collection_active_price = generate_html_tag('div','inc_collection_active_price');
            inc_collection_price_block.appendChild(inc_collection_active_price)

            var inc_price_wrapper = generate_html_tag('div','inc_price_wrapper');
            inc_collection_price_block.appendChild(inc_price_wrapper)
            var inc_priceCut_block = generate_html_tag('div','inc_priceCut_block');
            inc_price_wrapper.appendChild(inc_priceCut_block)
            inc_priceCut_block.innerText = "";
            inc_wasPrcSavePrc_wrapper = generate_html_tag('div','inc_wasPrcSavePrc_wrapper');
            inc_price_wrapper.appendChild(inc_wasPrcSavePrc_wrapper)
            var inc_wasPrice_block = generate_html_tag('div','inc_wasPrice_block');
            inc_wasPrcSavePrc_wrapper.appendChild(inc_wasPrice_block)
            inc_wasPrice_block.innerText = "";
            var inc_savePrice_block = generate_html_tag('div','inc_savePrice_block');
            inc_wasPrcSavePrc_wrapper.appendChild(inc_savePrice_block)
            inc_savePrice_block.innerText = "";
            

            var inc_collection_Rating_block = generate_html_tag('div','inc_collection_Rating_block');
            inc_collection_details_block.appendChild(inc_collection_Rating_block)

            var inc_collection_promo_block = generate_html_tag('div','inc_collection_promo_block');
            inc_collection_details_block.appendChild(inc_collection_promo_block)

        

            var pr = 0;
            var sp = 0;
            var bestrating=0
            var inc_collection_product_list_wrapper_block = generate_html_tag('div','inc_collection_product_list_wrapper_block');
            // inc_collection_product_list_wrapper_block.classList.add(inc_collection_product_list_wrapper_block)
            inc_collection_item_wrapper.appendChild(inc_collection_product_list_wrapper_block)
            for(p=0;p<INC_COL.config.collection_combo_details[k].collection_bundles.length;p++){
                var inc_collection_product_list_header_block = generate_html_tag('h1','inc_collection_product_list_header_block');
                // inc_collection_product_list_wrapper_block.classList.add(inc_collection_product_list_wrapper_block)
                inc_collection_product_list_header_block.innerText = "Products Available in Kit";
                inc_collection_product_list_wrapper_block.appendChild(inc_collection_product_list_header_block)
                for(r=0;r<INC_COL.config.collection_combo_details[k].collection_bundles[p].products.length;r++){
                    
                    var product_id=INC_COL.config.collection_combo_details[k].collection_bundles[p].products[r]
                    var pdpProductId = INC_COL.dataStore.methods().getFirstProductObjByMainId({ mainId: product_id }).id;
                    var findObj = new INC_COL.classes.FindObj({ id: pdpProductId });
                    var productObj = INC_COL.dataStore.methods().getProductById(findObj);
                    var img_wrapper = generate_html_tag('div','img_wrapper');
                    var p_img = generate_html_tag('img');
                    p_img.setAttribute('src',productObj["imageURL"])
                    img_wrapper.appendChild(p_img)
                    // inc_collection_Images_gallery.appendChild(img_wrapper)
                    // if (readCookie('ivid') == "3295f835c65c224c9bd48df6ec17bb7603ce70b45a" || readCookie('ivid') == "fd24505fb206c33b6b7f5fb9ef35c521f6af4234f6"){
                        

                        var inc_collection_product_list_block = generate_html_tag('div','inc_collection_product_list_block');
                        inc_collection_product_list_block.classList.add(productObj.ProductType)
                        inc_collection_product_list_wrapper_block.appendChild(inc_collection_product_list_block)

                        var inc_collection_product_list_wrapper = generate_html_tag('div','inc_collection_product_list_wrapper');
                        inc_collection_product_list_block.appendChild(inc_collection_product_list_wrapper)

                        var inc_collection_product_image_block = generate_html_tag('div','inc_collection_product_image_block');
                        inc_collection_product_list_wrapper.appendChild(inc_collection_product_image_block)

                        var inc_collection_product_image = generate_html_tag('img');
                        inc_collection_product_image.setAttribute('src',productObj["imageURL"])
                        inc_collection_product_image.setAttribute('onerror',"this.src='"+INC_COL.config.noimage+"'" );
                        inc_collection_product_image_block.appendChild(inc_collection_product_image)

                        inc_collection_product_image_block.addEventListener('click',function(){
                            var datamainid=this.parentNode.parentNode.getAttribute('data-main_id');
                            if(document.querySelector('.inc_collection_modal_block .inc_collection_module_block.active') != null){
                                document.querySelector('.inc_collection_modal_block .inc_collection_module_block.active').classList.remove('active')
                            }
                            if(document.querySelector('.inc_collection_modal_block .inc_collection_module_block[data-main_id="'+datamainid+'"]') != null){
                                document.querySelector('.inc_collection_modal_block .inc_collection_module_block[data-main_id="'+datamainid+'"]').classList.add('active')
                            }
                            if(document.querySelector('.inc_collection_module_block.active .inc_popup_product_details_tab_block') != null){
                                document.querySelector('.inc_collection_module_block.active .inc_popup_product_details_tab_block').click()
                            }
                            document.querySelector('html').classList.add('inc_overlay');
                            document.querySelector('.inc_collection_modal_block').classList.toggle('active')
                        })

                        var inc_collection_product_info_block = generate_html_tag('div','inc_collection_product_info_block');
                        inc_collection_product_list_wrapper.appendChild(inc_collection_product_info_block)

                        inc_collection_product_list_block.setAttribute('data-id', productObj.id);
                        inc_collection_product_list_block.setAttribute('data-sku', productObj.sku);
                        inc_collection_product_list_block.setAttribute('data-main_id', productObj.mainId);
                        inc_collection_product_list_block.setAttribute('data-bundle_id', productObj.bundleId);
                        inc_collection_product_list_block.setAttribute('data-combo_id', productObj.comboId);

                        var inc_collection_product_title = generate_html_tag('div','inc_collection_product_title');
                        var p_name = generate_html_tag('p');
                        p_name.innerText = productObj.name
                        inc_collection_product_title.setAttribute('title',productObj.name)
                        inc_collection_product_title.appendChild(p_name)
                        inc_collection_product_info_block.appendChild(inc_collection_product_title)
                        // inc_collection_product_title.addEventListener('click',function(){
                        //     var datamainid=this.parentNode.parentNode.getAttribute('data-main_id');
                        //     if(document.querySelector('.inc_collection_modal_block .inc_collection_module_block.active') != null){
                        //         document.querySelector('.inc_collection_modal_block .inc_collection_module_block.active').classList.remove('active')
                        //     }
                        //     if(document.querySelector('.inc_collection_modal_block .inc_collection_module_block[data-main_id="'+datamainid+'"]') != null){
                        //         document.querySelector('.inc_collection_modal_block .inc_collection_module_block[data-main_id="'+datamainid+'"]').classList.add('active')
                        //     }
                        //     if(document.querySelector('.inc_collection_module_block.active .inc_popup_product_details_tab_block') != null){
                        //         document.querySelector('.inc_collection_module_block.active .inc_popup_product_details_tab_block').click()
                        //     }
                        //     document.querySelector('html').classList.add('inc_overlay');
                        //     document.querySelector('.inc_collection_modal_block').classList.toggle('active')
                        // })

                        var inc_collection_product_rating = generate_html_tag('div','inc_collection_product_rating');
                        var inc_product_desc_ratings_block = generate_html_tag('div','inc_product_desc_ratings_block');
                        inc_collection_product_rating.appendChild(inc_product_desc_ratings_block)
                        var field1 = productObj.ratingsCount;
                        var field2 = productObj.reviewsCount;
                        INC_COL.methods.get_product_ratings_col(field1,field2,inc_product_desc_ratings_block);
                        inc_collection_product_info_block.appendChild(inc_collection_product_rating)
                        
                        var activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
                        var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
                        if (productObj.discountPrice != ""){
                            INC_COL.clientConfig.discPrc = productObj.discountPrice;
                        }
                        var price=0;
                        var specialprice=0;
                        if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
                            specialprice = activePrice
                            price = regularPrice
                        } else{
                            price = regularPrice
                            specialprice = 0
                        }
                        if (sp != 0 && +specialprice != 0) {
                            pr += +price;
                            sp += +specialprice;
                        } else if (sp != 0 && +specialprice == 0) {
                            pr += +price;
                            sp += +price;
                        } else if (sp == 0 && +specialprice == 0) {
                            pr += +price;
                            sp += +price;
                        } else {
                            pr += +price;
                            sp += +specialprice;
                        }

                        var inc_collection_product_price_block = generate_html_tag('div','inc_collection_product_price_block');
                        inc_collection_product_info_block.appendChild(inc_collection_product_price_block)

                        var inc_collection_product_active_price = generate_html_tag('div','inc_collection_product_active_price');
                        inc_collection_product_price_block.appendChild(inc_collection_product_active_price)

                        var inc_collection_product_regular_price = generate_html_tag('div','inc_collection_product_regular_price');
                        inc_collection_product_price_block.appendChild(inc_collection_product_regular_price)

                        inc_collection_product_regular_price.innerText = "";
            
                        if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
                            inc_collection_product_active_price.parentNode.classList.add('is_special_price')
                            inc_collection_product_active_price.innerText = formatter.format(activePrice)
                            inc_collection_product_regular_price.innerHTML = "<span>Was</span>" + INC_COL.clientConfig.regularPricePrefix + 
                            formatter.format(regularPrice)
                        }else{
                            inc_collection_product_active_price.innerText = formatter.format(activePrice)
                        }
                        var inc_collection_product_view_details_block = generate_html_tag('div','inc_collection_product_view_details_block');
                        // inc_collection_product_list_wrapper_block.classList.add(inc_collection_product_list_wrapper_block)
                        inc_collection_product_view_details_block.innerText = "View Details";
                        inc_collection_product_info_block.appendChild(inc_collection_product_view_details_block)
                        inc_collection_product_list_wrapper_block.addEventListener('click',function(){
                            var hrefredirect = this.parentNode.parentNode.querySelector('.inc_collection_checkout_btn').getAttribute('href')
                            window.location.href=hrefredirect
                        })

                    // }
                    var field1 = productObj.ratingsCount;
                    var field2 =productObj.reviewsCount
                    if(bestrating < productObj.ratingsCount){
                        bestrating = productObj.ratingsCount;
                        bestreview = productObj.reviewsCount;
                    }
                    if(r == 0){
                        // var rating_col = INC_COL.methods.get_product_ratings(field1,inc_collection_Rating_block);
                    }
                    
                    

                    
                    
                    // var productcollectionModalBlock = INC_COL.methods.createProductModalBlock(product_id, 'collection', true,inc_collection_modal_list);
                    // if(productcollectionModalBlock.querySelector('.inc_product_desc_add_text') != null){
                    //     productcollectionModalBlock.querySelector('.inc_product_desc_add_text').innerText = "Přidat"
                    // }
                    // productcollectionModalBlock.classList.add('active')
                    // inc_collection_module_product_block.appendChild(productcollectionModalBlock)
                    // inc_collection_modal_list.appendChild(inc_collection_module_block)

                    // var inc_collection_popup_close_icon = generate_html_tag('span','inc_collection_popup_close_icon')
                    // inc_collection_product_detail_tab_block.appendChild(inc_collection_popup_close_icon)
                    // var inc_popup_product_details_tab_block = generate_html_tag('div','inc_popup_product_details_tab_block')
                    // inc_popup_product_details_tab_block.classList.add('active')
                    // var inc_popup_product_details_tab_text = generate_html_tag('div','inc_popup_product_details_text')
                    // inc_popup_product_details_tab_text.innerText = "Zobrazit podrobnosti"
                    // inc_popup_product_details_tab_block.appendChild(inc_popup_product_details_tab_text)
                    // inc_collection_product_detail_tab_block.appendChild(inc_popup_product_details_tab_block)
                    
                    // inc_popup_product_details_tab_block.addEventListener('click',function(){
                    //     this.parentNode.querySelector('.inc_popup_product_description_tab_block').classList.remove('active')
                    //     this.parentNode.querySelector('.inc_popup_product_details_tab_block').classList.add('active')
                    //     this.parentNode.parentNode.querySelector('.inc_popup_product_description_block').classList.remove('active')
                    //     this.parentNode.parentNode.querySelector('.inc_product_block').classList.add('active')
                    // })

                    // if(productObj.description != "" && productObj.description != null){
                    //     var inc_popup_product_description_tab_block = generate_html_tag('div','inc_popup_product_description_tab_block')
                    //     var inc_popup_product_description_tab_text = generate_html_tag('div','inc_popup_product_description_text')
                    //     inc_popup_product_description_tab_text.innerText = "Popis výrobku"
                    //     inc_popup_product_description_tab_block.appendChild(inc_popup_product_description_tab_text)
                    //     inc_collection_product_detail_tab_block.appendChild(inc_popup_product_description_tab_block)
                    //     var inc_popup_product_description_block = generate_html_tag('div','inc_popup_product_description_block')
                    //     var inc_popup_product_description_text = generate_html_tag('div','inc_popup_product_description_text')
                    //     inc_popup_product_description_text.innerHTML  = productObj.description

                    //     inc_popup_product_description_tab_block.addEventListener('click',function(){
                    //         this.parentNode.querySelector('.inc_popup_product_details_tab_block').classList.remove('active')
                    //         this.parentNode.querySelector('.inc_popup_product_description_tab_block').classList.add('active')
                    //         this.parentNode.parentNode.querySelector('.inc_product_block').classList.remove('active')
                    //         this.parentNode.parentNode.querySelector('.inc_popup_product_description_block').classList.add('active')
                    //     })
                        
                    //     inc_popup_product_description_block.appendChild(inc_popup_product_description_text)
                    //     inc_collection_module_product_block.appendChild(inc_popup_product_description_block)
                    // }

                    // if(r == 0){
                    //     inc_collection_module_block.classList.add('active')
                    // }
                    //product slider on modal
                }
            }

            if(bestrating != 0){
                INC_COL.methods.get_product_ratings_col(bestrating,bestreview,inc_collection_Rating_block);
            } else {
                inc_collection_product_rating.classList.add('noRating');
            }

            inc_collection_regular_price.innerText = "";
            
            if (pr != sp && sp != 0) {
                inc_collection_active_price.parentNode.classList.add('is_special_price')
                inc_collection_active_price.innerText = formatter.format(sp)
                inc_collection_regular_price.innerHTML = "<span>was</span>"+ "<span class = 'price'>"+ formatter.format(pr) +"</span>" 
                
                var spec_text = generate_html_tag('span','special_text')
                spec_text.innerText = ""
                // inc_collection_active_price.parentNode.insertBefore(spec_text,inc_collection_active_price)

                //promo
                var totalsaveprcplp =  get_discount_price(pr,sp)
                var ec_promo_wrapper_div = document.createElement('div');
                ec_promo_wrapper_div.classList.add('pc_promo_header_div');
                ec_promo_wrapper_div.classList.add('inc_dual_promo')
                var ec_promo_header_div = document.createElement('div');
                ec_promo_header_div.classList.add('pc_promo_header_div');
                var ec_title_span = document.createElement('span');
                ec_title_span.classList.add('pc_title_span');
                ec_title_span.innerText = "You save";
                var ec_promo_div = document.createElement('div');
                ec_promo_div.classList.add('pc_promo_div')
                ec_promo_div.classList.add('inc_active')
                var ec_promo_span = document.createElement('span');
                ec_promo_span.classList.add('pc_promo_span')
        
                ec_promo_span.classList.add('red_promo')
                ec_promo_span.innerHTML = "<div class='collection_plp_promo'> <span>You save</span> " + "<div class='save_price_text_disc' style='margin-left: 4px;'>"+formatter.format(totalsaveprcplp)+"</div></div>";
                ec_promo_header_div.appendChild(ec_title_span);
                ec_promo_div.appendChild(ec_promo_span);
                ec_promo_wrapper_div.appendChild(ec_promo_header_div);
                ec_promo_wrapper_div.appendChild(ec_promo_div)
                inc_collection_promo_block.appendChild(ec_promo_wrapper_div)
                
            }else{
                inc_collection_regular_price.innerHTML = ""
                inc_collection_active_price.innerHTML = formatter.format(pr)
            }

            if(INC_COL.clientConfig.flagoos){
                if(INC_COL.clientConfig.discPrc != ""){
                    var aftDiscPrc = pr - INC_COL.clientConfig.discPrc;
                    inc_collection_active_price.innerText = "Price cut";
                    inc_priceCut_block.innerText = formatter.format(aftDiscPrc);
                    inc_wasPrice_block.innerText = "was " + formatter.format(pr);
                    inc_savePrice_block.innerHTML = "<span>You save</span> " + formatter.format(pr - aftDiscPrc);
                }
            }
            if (window.location.hostname == "www.uat02p.pahtest.com"){
                var ComboImageURL=INC_COL.config.collection_combo_details[k].ComboImageURL.replace('https://www.petsathome.com','https://www.uat02p.pahtest.com/')
                var ComboProductURL=INC_COL.config.collection_combo_details[k].ComboProductURL.replace('https://www.petsathome.com','https://www.uat02p.pahtest.com/')
            } else {
                var ComboImageURL=INC_COL.config.collection_combo_details[k].ComboImageURL
                var ComboProductURL=INC_COL.config.collection_combo_details[k].ComboProductURL
            }
            var ComboTitle=INC_COL.config.collection_combo_details[k].ComboTitle.replace('with Accessory Bundle','kit')
            inc_collection_Name_text.innerText  = ComboTitle.replace('with Accessory Bundle','kit');
            inc_collection_Name_text.setAttribute('title',ComboTitle)
            collection_combo_img.setAttribute('src',ComboImageURL)
            collection_combo_img.setAttribute('onerror',"this.src='"+INC_COL.config.noimage+"'" );
            collection_combo_img.setAttribute('style','width: 100%;height: 100%;object-fit: contain;')
            var inc_collection_checkout_btn = generate_html_tag('a','inc_collection_checkout_btn');
            var inc_collection_checkout_btn_text = generate_html_tag('div','inc_collection_checkout_btn_text');
            inc_collection_checkout_btn_text.innerText = "More Details"
            inc_collection_checkout_btn.appendChild(inc_collection_checkout_btn_text);

            // var product_id=INC_COL.config.collection_combo_details[k].collection_bundles[0].products[0]
            // var findObj = new INC_COL.classes.FindObj({ id: product_id });
            // var productObj = INC_COL.dataStore.methods().getProductById(findObj);
            
            var comboid=INC_COL.config.collection_combo_details[k].comboId
            if (window.location.hostname == "www.uat02p.pahtest.com"){
                var ComboImageURL=INC_COL.config.collection_combo_details[k].ComboImageURL.replace('https://www.petsathome.com','https://www.uat02p.pahtest.com/')
                var ComboProductURL=INC_COL.config.collection_combo_details[k].ComboProductURL.replace('https://www.petsathome.com','https://www.uat02p.pahtest.com/')
            } else {
                var ComboImageURL=INC_COL.config.collection_combo_details[k].ComboImageURL
                var ComboProductURL=INC_COL.config.collection_combo_details[k].ComboProductURL
            }
            var ComboTitle=INC_COL.config.collection_combo_details[k].ComboTitle.replace('with Accessory Bundle','kit');
            // var prodid=productObj.mainId
            // var p_url=""
            // p_url = "?&incgs=2&cid="+comboid+"&pid="+prodid
            inc_collection_checkout_btn.setAttribute('producturl',ComboProductURL)
                inc_collection_checkout_btn.setAttribute('href',ComboProductURL)
                inc_collection_checkout_btn.setAttribute('comboid',INC_COL.config.collection_combo_details[k].comboId)
            inc_collection_item_block.appendChild(inc_collection_checkout_btn);
            inc_collection_checkout_btn.addEventListener('click',function(e){
                e.preventDefault();
                load_page_loader()
                // this.querySelector('.inc_collection_checkout_btn_text').classList.add('inc_collection_product_checkout_button_text')
                // this.querySelector('.inc_collection_checkout_btn_text').classList.add('inc_loading')
                INC_COL.methods.sendBundleClickTracking(this.getAttribute('comboid'));
                var hrefredirect = this.getAttribute('producturl')
                setTimeout(function(){
                    window.location.href=hrefredirect
                },2000)
            })

            
        }
    }

    // setTimeout(function() {
        // var checking_popup = setInterval(function(){
        // if(document.querySelector('.inc_collection_block') == null){
        //     console.log('PLP');
        //     clearInterval(checking_popup)
        //     checking_popup = "";
            
            var rem_pop = document.querySelector('.inc_collection_block')
                if (rem_pop == null) {
                    var plp_sibling = document.querySelector('#searchBasedNavigation_widget')
                    plp_sibling.parentNode.insertBefore(inc_collection_block, plp_sibling);
                }
        //     }
        // },15000)
    // }, 500);

    // var plp_sibling = document.querySelector('.o-layout.u-flex-display')
    // plp_sibling.parentNode.insertBefore(inc_collection_block, plp_sibling);
    // irbobservload=true
}

INC_COL.methods.createcollectionproductBlock = function (productListObj,collectionProductListBlock) {
    if(INC_COL.dataStore.dataStoreObj.undefined == undefined){
        var classNames = INC_COL.uiConfig.am.className;
        var collectionBlock = this.getElementChilds("collectionModalBlock", "collection");
        var getSelectorClassName = INC_COL.methods.getSelectorClassName;
        
        function getViewElement(className) {
            return collectionBlock.querySelector(getSelectorClassName(classNames, className));
        }
        
        // var productListObj = INC_COL.dataStore.dataStoreObj;
        var productListArray = Object.keys(productListObj);

        var collectionProductListBlock = getViewElement("collectionProductListBlock");

        var productIds = [];
        Array.prototype.forEach.call(document.querySelectorAll('#cart-table .option-line-items .gtm-cart-data'), function (elProductCode) {
            var cart_id=JSON.parse(elProductCode.value)
            productIds.push(cart_id.id);
        });

        var bundleProductsArray = INC_COL.dataStore.bundleProductsArray;

        // productListArray.forEach(function (mainProductId) {
        bundleProductsArray.forEach(function (mainProductId) {
            if (productIds.indexOf(mainProductId) == -1) {
                var firstProductObjByMainId = INC_COL.dataStore.methods().getFirstProductObjByMainId({ mainId: mainProductId });
                collectionProductListBlock.appendChild(INC_COL.methods.createProductModuleBlock(firstProductObjByMainId.id, "collection", false,collectionBlock));
            }
        });

        var collectionProductBlocks = collectionBlock.querySelectorAll(getSelectorClassName(classNames, "productBlock"));
        Array.prototype.forEach.call(collectionProductBlocks, function (productBlock) {
            productBlock.querySelector(getSelectorClassName(classNames, "productAddBlock")).addEventListener("click", function (e) {
                var productBlockNode = this.parentNode.parentNode;
                if(this.parentNode.parentNode.className == "inc_product_desc_block"){
                    productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode
                }
                var sku = productBlockNode.getAttribute('data-sku');
                
                var findObj = new INC_COL.classes.FindObj({ id: sku });
                var qty = productBlockNode.querySelector('input').value;

                var add_btn = productBlockNode.querySelector('.inc_product_desc_add_text')
                var add_btn_click = productBlockNode.querySelector(getSelectorClassName(classNames, "productAddText"));
                var add_prod_im = productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImg"));
                if(productBlockNode.querySelector('.img_color_swatch') != null){
                    if(productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.active') != null){
                        if(document.querySelector('.inc_product_modal_block.active') != null){
                            document.querySelector('.inc_product_modal_block.active .inc_product_header_img').click()
                            productBlockNode.querySelector('.inc_product_desc_add_text').innerText="Adding.."
                        }
                        INC_COL.methods.addProductToCart(findObj, qty, "am", productBlockNode,add_btn_click,add_prod_im,add_btn);
                    }else{
                        productBlockNode.querySelector('.img_color_swatch').click()
                    }
                }else if(productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.avail') != null){
                    if(productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.avail.active') != null){
                        if(document.querySelector('.inc_product_modal_block.active') != null){
                            document.querySelector('.inc_product_modal_block.active .inc_product_header_img').click()
                            productBlockNode.querySelector('.inc_product_desc_add_text').innerText="Adding.."
                        }
                        INC_COL.methods.addProductToCart(findObj, qty, "am", productBlockNode,add_btn_click,add_prod_im,add_btn);
                    }
                }else{
                    if(document.querySelector('.inc_product_modal_block.active') != null){
                        document.querySelector('.inc_product_modal_block.active .inc_product_header_img').click()
                        productBlockNode.querySelector('.inc_product_desc_add_text').innerText="Adding.."
                    }
                    INC_COL.methods.addProductToCart(findObj, qty, "am", productBlockNode,add_btn_click,add_prod_im,add_btn);
                }
            });
        });

        
    }
    //INC_COL.config.collection_combo_details
}

INC_COL.methods.updateProductCollectionBlock = function (productBlock, findObj, blockType, bundleProductListCheck) {
    var dataStore = INC_COL.dataStore;
    var classNames = INC_COL.uiConfig[blockType].className;
    var productBlock = productBlock;
    var productModuleBlock = document.querySelector('.inc_collection_product_list_block[data-main_id="'+findObj.mainId+'"]');
    var indexprd = productBlock.getAttribute('index')
    if(productModuleBlock == null){
        var productModuleBlock = document.querySelectorAll('.inc_collection_product_list_block')[indexprd];
    }
    var zero_text = productBlock.querySelector('.inc_product_desc_att_block').getAttribute('data-zero');
    var size_text = productBlock.querySelector('.inc_product_desc_att_block').getAttribute('data-size');
    var color_text = productBlock.querySelector('.inc_product_desc_att_block').getAttribute('data-color');
    var third_text = productBlock.querySelector('.inc_product_desc_att_block').getAttribute('data-third');
    
    
    var sel_attr_text=""
    if(color_text != undefined){
        findObj.colorText = color_text
        sel_attr_text = color_text
        clr_txt = color_text
    }else{
        findObj.colorText = ""
    }
    if(zero_text != undefined){
        findObj.zeroText = zero_text
        if(sel_attr_text == ""){
            sel_attr_text = zero_text
        }else{
            sel_attr_text = sel_attr_text + " | " + zero_text
        }
    }else{
        findObj.zeroText = ""
    }
    if(size_text != undefined){
        findObj.sizeText = size_text
        sel_attr_text = sel_attr_text + " | " + size_text
        // sz_txt = size_text
    }else{
        findObj.sizeText = ""
    }
    
    if(third_text != undefined){
        findObj.thirdText = third_text
        sel_attr_text = sel_attr_text + " | " + third_text
    }else{
        findObj.thirdText = ""
    }
    
    
    

    var productObj = INC_COL.dataStore.methods().getProductByAtt(findObj);
    var previousSKU = "";
    var getSelectorClassName = this.getSelectorClassName;
    
    previousSKU = productBlock.getAttribute('data-sku');
    productBlock.setAttribute('data-id', productObj.id);
    productBlock.setAttribute('data-sku', productObj.sku);
    productBlock.setAttribute('data-main_id', productObj.mainId);
    productBlock.setAttribute('data-bundle_id', productObj.bundleId);
    productBlock.setAttribute('data-combo_id', productObj.comboId);

    if(productModuleBlock != null){
        productModuleBlock.setAttribute('data-id', productObj.id);
        productModuleBlock.setAttribute('data-sku', productObj.sku);
        productModuleBlock.setAttribute('data-main_id', productObj.mainId);
        productModuleBlock.setAttribute('data-bundle_id', productObj.bundleId);
        productModuleBlock.setAttribute('data-combo_id', productObj.comboId);
    }

    // if(document.querySelector('.inc_pdp_bundle_cart_added_product_block[data-main_id="'+productObj.mainId+'"]') != null && sel_attr_text != ""){
    //     var added_sum_prod=document.querySelector('.inc_pdp_bundle_cart_added_product_block[data-main_id="'+productObj.mainId+'"]')
    //     added_sum_prod.querySelector('.inc_pdp_bundle_cart_added_product_att_color_text_block').innerText  = sel_attr_text
    //     added_sum_prod.querySelector('.inc_pdp_bundle_cart_added_product_att_block').setAttribute('title',sel_attr_text)
    // }
    // if(productModuleBlock.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != ""){
    //     productModuleBlock.querySelector('.inc_product_desc_att_size_title_text').innerText = sel_attr_text 
    //     productModuleBlock.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title',sel_attr_text)
    // }
    
    if(document.querySelector('.inc_pdp_bundle_cart_added_product_block[data-main_id="'+productObj.mainId+'"]') != null){
        var added_sum_prod=document.querySelector('.inc_pdp_bundle_cart_added_product_block[data-main_id="'+productObj.mainId+'"]')
        added_sum_prod.querySelector('.inc_pdp_bundle_cart_added_product_att_color_text_block').innerText  = sel_attr_text
        added_sum_prod.querySelector('.inc_pdp_bundle_cart_added_product_att_block').setAttribute('title',sel_attr_text)
    }
    if(productModuleBlock != null){
        if(productModuleBlock.querySelector('.inc_collection_product_color_selected_text') != null){
            productModuleBlock.querySelector('.inc_collection_product_color_selected_text').innerText = clr_txt 
            productModuleBlock.querySelector('.inc_collection_product_color_selected_text').setAttribute('title',clr_txt)
            productModuleBlock.querySelector('.inc_collection_product_colors_selected_text').innerText = clr_txt 
            productModuleBlock.querySelector('.inc_collection_product_colors_selected_text').setAttribute('title',clr_txt)
            productModuleBlock.querySelector('.inc_collection_product_viewdetails_text').innerText = 'Select Options'
        }

        if(productModuleBlock.querySelector('.inc_collection_product_size_selected_text') != null){
            productModuleBlock.querySelector('.inc_collection_product_size_selected_text').innerText = zero_text 
            productModuleBlock.querySelector('.inc_collection_product_size_selected_text').setAttribute('title',zero_text)
            productModuleBlock.querySelector('.inc_collection_product_sizes_selected_text').innerText = zero_text 
            productModuleBlock.querySelector('.inc_collection_product_sizes_selected_text').setAttribute('title',zero_text)
            // productModuleBlock.querySelector('.inc_collection_product_viewdetails_text').innerText = 'Select Options'
        }
    }

    function getViewElement(className) {
        return productBlock.querySelector(getSelectorClassName(classNames, className));
    }

    var elImgBlock = getViewElement("productImgBlock");
    var elInfoText = getViewElement("productInfoText");
    var elImgBlock = getViewElement("productImgBlock");
    var elImgGalleryListBlock = getViewElement("productImgGalleryListBlock");
    var elTitleBlock = getViewElement("productTitleBlock");
    var elTitleText = getViewElement("productTitleText");
    var elPriceActiveText = getViewElement("productPriceActiveText");
    var elPriceActiveMsg = getViewElement("productPriceActiveTextMsg");
    var elPriceRegularText = getViewElement("productPriceRegularText");
    var elAttBlock = getViewElement("productAttBlock");
    var elAttColorTitleText = getViewElement("productAttColorTitleText");
    var elAttColorTitleTextSelected = getViewElement("productAttColorTitleTextSelected");
    var elAttColorListBlock = getViewElement("productAttColorListBlock");
    var elAttSizeTitleText = getViewElement("productAttSizeTitleText");
    var elAttSizeTitleTextSelected = getViewElement("productAttSizeTitleTextSelected");
    var elPackOfListBlock = getViewElement("productPackOfListBlock");
    var elQtyInputText = getViewElement("productQtyInputText");
    var elQtyDownBlock = getViewElement("productQtyDownBlock");
    var elQtyUpBlock = getViewElement("productQtyUpBlock");
    var elAddBlock = getViewElement("productAddBlock");
    var elAddText = getViewElement("productAddText");
    var elAddImg = getViewElement("productAddImg");
    var elworthPrice = getViewElement("productPriceWorthText");
    var elFullDesctext = getViewElement("productInfoFullDescText");
    if(productModuleBlock != null){
        var prod_modal=productModuleBlock.querySelector('.inc_collection_module_product_block')
    }
    var elImgMainImg = elImgBlock.querySelector(getSelectorClassName(classNames, "productImgMainImg"));

    elImgMainImg.querySelectorAll('img')[0].setAttribute('src', productObj["imageURL"]);
   
    elImgMainImg.querySelector('a').setAttribute('href', productObj["url"]);
    elImgMainImg.querySelector('a').setAttribute('otherImageList',productObj["otherImageList"])
    elImgMainImg.querySelector('a').setAttribute('imageURL',productObj["imageURL"])

    elImgMainImg.querySelectorAll('img')[0].setAttribute('data-mouseover',productObj.otherImageList)
    elImgMainImg.querySelectorAll('img')[0].setAttribute('data-imageURL',productObj.imageURL)
    
    if(productModuleBlock != null){
        var prod_ids = productModuleBlock.getAttribute('data-main_id')
        if(document.querySelector('.inc_pdp_bundle_product_list_items_block .inc_pdp_bundle_product_list_item_block[data-main_id="'+prod_ids+'"]') != null){
            var tab_img = document.querySelector('.inc_pdp_bundle_product_list_items_block .inc_pdp_bundle_product_list_item_block[data-main_id="'+prod_ids+'"]');
            if(tab_img.querySelector('img') != null){
                tab_img.querySelector('img').src=productObj["imageURL"]
            }
           
        }
        if(productModuleBlock.querySelector('.inc_collection_product_image_block img') != null){
            productModuleBlock.querySelector('.inc_collection_product_image_block img').src=productObj["imageURL"]
        }
    }


    elImgGalleryListBlock.innerHTML = "";

    if ((productObj.otherImageList != null) && productObj.otherImageList.length > 1) {
        var otimg=0;
        productObj.otherImageList.forEach(function (otherImgURL) {
            if(otimg < 5){
                var elOtherImgTag = INC_COL.methods.generateHTMLTags('img', { src: otherImgURL });
                elOtherImgTag.setAttribute('alt', productObj.name)
                elOtherImgTag.setAttribute('onerror',"this.src='"+productObj.imageURL+"'" );
                var elImgGalleryListItemBlock = INC_COL.methods.getElementChilds("productImgGalleryListItemBlock", blockType);

                var elImgGalleryListItemImg = elImgGalleryListItemBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemImg"));

                elImgGalleryListItemImg.appendChild(elOtherImgTag);

                elImgGalleryListItemBlock.addEventListener("click", function () {

                    Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productImgGalleryListItemBlock")), function (galleryListItemBlock) {
                        galleryListItemBlock.classList.remove("active");
                    });

                    elImgGalleryListItemBlock.classList.add("active");

                    elImgMainImg.querySelector('img').src = otherImgURL;
                    elImgMainImg.querySelector('img').setAttribute('onerror',"this.src='"+productObj.imageURL+"'" );
                })

                elImgGalleryListBlock.appendChild(elImgGalleryListItemBlock);
                if(otimg == 0){
                    elImgGalleryListItemBlock.classList.add('active')
                }
                otimg++;
                if(productObj.otherImageList.length > 4){
                    elImgGalleryListItemBlock.parentNode.classList.add("flex-start")
                }
            }
        });

        // if (INC_COL.debug) console.log(elImgGalleryListBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemBlock")));

        // elImgGalleryListBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemBlock")).click();
    }

    inc_collection_product_image_block.addEventListener('click',function(){
        var datamainid=this.parentNode.parentNode.getAttribute('data-main_id');
        if(document.querySelector('.inc_collection_modal_block .inc_collection_module_block.active') != null){
            document.querySelector('.inc_collection_modal_block .inc_collection_module_block.active').classList.remove('active')
        }
        if(document.querySelector('.inc_collection_modal_block .inc_collection_module_block[data-main_id="'+datamainid+'"]') != null){
            document.querySelector('.inc_collection_modal_block .inc_collection_module_block[data-main_id="'+datamainid+'"]').classList.add('active')
        }
        if(document.querySelector('.inc_collection_module_block.active .inc_popup_product_details_tab_block') != null){
            document.querySelector('.inc_collection_module_block.active .inc_popup_product_details_tab_block').click()
        }
        document.querySelector('html').classList.add('inc_overlay');
        document.querySelector('.inc_collection_modal_block').classList.toggle('active')
    })

    elTitleText.querySelector('div').innerText = productObj.name;
    elTitleText.querySelector('a').setAttribute('href', productObj["url"]);
    
    elTitleText.querySelector('a').setAttribute('title',productObj.name)
    if(productModuleBlock != null){
        if(productModuleBlock.querySelector('.inc_collection_product_title') != null){
            productModuleBlock.querySelector('.inc_collection_product_title').innerHTML=productObj.name
            productModuleBlock.querySelector('.inc_collection_product_title').setAttribute('title',productObj.name)
        }
    }

    var activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
    var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
    var worthPrice =  get_discount_price(regularPrice,activePrice)



    
    // elPriceActiveMsg.innerText = " + VAT"
    elPriceRegularText.parentNode.parentNode.parentNode.classList.remove('is_special_price')
    elPriceRegularText.innerText = "";
    if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
        elPriceActiveText.innerText = formatter.format(activePrice)
        elPriceRegularText.innerText = formatter.format(regularPrice)
        elworthPrice.innerText = "You save " + formatter.format(worthPrice);
        elworthPrice.style.display="flex"
        elworthPrice.parentNode.parentNode.style.display="flex"
        elPriceRegularText.parentNode.parentNode.parentNode.classList.add('is_special_price')
        if(productModuleBlock != null){
            if(productModuleBlock.querySelector('.inc_collection_product_active_price') != null){
                productModuleBlock.querySelector('.inc_collection_product_active_price').innerHTML=formatter.format(activePrice)
            }
            if(productModuleBlock.querySelector('.inc_collection_product_save_price') != null){
                productModuleBlock.querySelector('.inc_collection_product_save_price').innerHTML = "You save " + formatter.format(worthPrice);
            }
            if(productModuleBlock.querySelector('.inc_collection_product_regular_price') != null){
                productModuleBlock.querySelector('.inc_collection_product_regular_price').innerHTML = "<span>Was</span>" + formatter.format(regularPrice)
            }
        }
    }else{
        elworthPrice.style.display="none"
        elworthPrice.parentNode.parentNode.setAttribute('style','display:none !important')
        elPriceActiveText.innerText = formatter.format(activePrice)
        if(productModuleBlock != null){
            if(productModuleBlock.querySelector('.inc_collection_product_active_price') != null){
                productModuleBlock.querySelector('.inc_collection_product_active_price').innerHTML=formatter.format(activePrice)
            }
            if(productModuleBlock.querySelector('.inc_collection_product_save_price') != null){
                productModuleBlock.querySelector('.inc_collection_product_save_price').innerHTML=""
            }
            if(productModuleBlock.querySelector('.inc_collection_product_regular_price') != null){
                productModuleBlock.querySelector('.inc_collection_product_regular_price').innerHTML=""
            }
        }
    }
    
    if (productBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText == "Added") {
        if (!dataStore.hasOwnProperty('bundleCartProducts')) {
            dataStore['bundleCartProducts'] = {};
        }

        dataStore["bundleCartProducts"][productObj["sku"]] = dataStore["bundleCartProducts"][previousSKU];
        if (productObj["sku"] != previousSKU) {
            delete dataStore["bundleCartProducts"][previousSKU];
        }
    }

    var elQtyInput = elQtyInputText.querySelector('input');
    var sku = productBlock.getAttribute('data-sku');
    var bundle_id = productBlock.getAttribute('data-bundle_id');
    var main_id = productBlock.getAttribute('data-main_id');
    var qty = parseInt(elQtyInput.value);
    var pname=productBlock.querySelector('.inc_product_desc_title_text').innerText;
    var pprice=productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$','');
    if (elAddText.innerText == "Added") {
        INC_COL.methods.updateBundleCart({ sku: sku, qty: qty}, "add",main_id,bundle_id,pname,pprice);
    }

    elPackOfListBlock.innerHTML = "";

    
}

//end of collection

var script = document.createElement('script');
    script.type = 'text/javascript';

    script.src = "https://cdn.polyfill.io/v2/polyfill.min.js?features=Intl.~locale.en";
    document.body.appendChild(script);

if(window.location.host == "www.craghoppers.de"){
    var formatter = new Intl.NumberFormat('de-DE', {
        style: 'currency',
        currency: 'EUR',
    });
}else{
    var formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP',
    });
}

function load_page_loader(){
    var loader_html='<div class="-js-loader show"><i class="spinner"></i></div>'
    var createloader = document.createElement('div')
    createloader.classList.add('inc-loader')
    createloader.innerHTML = loader_html
    var el = document.querySelector('body')
    el.insertBefore(createloader, el.childNodes[0]);
}
function removeincloader(){
    var inc_loader=document.querySelector('.inc-loader')
    if(inc_loader != null){
        inc_loader.parentNode.removeChild(inc_loader)
    }
}