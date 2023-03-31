/* eslint-disable no-prototype-builtins */
var INC_collection_load = false;
var INC = {}
var isPricemismatch
var dupDataObjectProducts= []
var cid = "";
var pid = ""
var noimg='https://www.increasingly.co/Implementation/usPA9/img/no-image.png'
var pdptickboxpid = []
var href_split = window.location.href.split('?')[1];
if (href_split != undefined) {
    var total_split_href = href_split.split('&');
    var cid = "";
    var pid = ""

    if (href_split != undefined) {
        for (h = 0; h < total_split_href.length; h++) {
            if (total_split_href[h].indexOf('cid') >= 0) {
                cid = total_split_href[h].split('=')[1]
            } else if (total_split_href[h].indexOf('pid') >= 0) {
                pid = total_split_href[h].split('=')[1]
            }
        }
    }
}
var onloadflag=true;
if ((window.location.href.indexOf('incgs=2') >= 0 || window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=2') >= 0) && cid != "" && cid != 0 && cid != null && pid != "" && pid != 0 && pid != null || window.location.href.indexOf('collections/bundles') >= 0) {
    INC_collection_load = true;
    var loader_body = setInterval(function () {
        if (document.querySelector('#shopify-section-product-template') != null) {
            clearInterval(loader_body)
            if (document.querySelector('.container .product') != null) {
                document.querySelector('.container .product').style.display = "none";
                document.querySelector('.container .breadcrumb-collection').style.display = "none";
            }
        } else if (document.querySelector('#shopify-section-collection-template .container') != null) {
            clearInterval(loader_body)
            if (document.querySelector('.container .product') != null) {
                document.querySelector('.container .product').style.display = "none";
                document.querySelector('.container .breadcrumb-collection').style.display = "none";
            }
            var allcolchild = document.querySelector('#shopify-section-collection-template .container').children
            for (c = 0; c < allcolchild.length; c++) {
                allcolchild[c].style.display = "none"
            }
        }

        var styles_LOADER = '@-webkit-keyframes a{0%{-webkit-transform:translateY(.75rem);transform:translateY(.75rem)}to{-webkit-transform:translateY(-.16667rem);transform:translateY(-.16667rem)}}@keyframes a{0%{-webkit-transform:translateY(.75rem);transform:translateY(.75rem)}to{-webkit-transform:translateY(-.16667rem);transform:translateY(-.16667rem)}}@-webkit-keyframes b{0%{opacity:0}to{opacity:1}}@keyframes b{0%{opacity:0}to{opacity:1}}.busy{position:relative;overflow:hidden;width:100%}.busy__overlay{height:100%;width:100%;-webkit-transition:opacity .2s ease-in-out;transition:opacity .2s ease-in-out}.busy__overlay--hide{opacity:0}.busy__content-wrapper{position:absolute;top:50%;left:50%;-webkit-transform:translateX(-50%) translateY(-50%);-ms-transform:translateX(-50%) translateY(-50%);transform:translateX(-50%) translateY(-50%);opacity:0;-webkit-animation-name:b;animation-name:b;-webkit-animation-delay:2s;animation-delay:2s;-webkit-animation-duration:1s;animation-duration:1s;-webkit-animation-fill-mode:forwards;animation-fill-mode:forwards}.busy__animation{height:5rem;width:5rem;margin-left:auto;margin-right:auto;fill:#f03c48}.busy__animation svg{-webkit-animation:a .55s infinite ease alternate;animation:a .55s infinite ease alternate}.busy__text{color:#012a5b;font-weight:600;margin-top:1rem;text-align:center}.busy--white .busy__overlay{background:hsla(0,0%,100%,.9)}.busy--fullscreen>.busy__overlay{z-index:900000;position:fixed;top:0;right:0;bottom:0;left:0;background:hsla(0,0%,100%,.9)}.busy--fullscreen>.busy__overlay .busy__content-wrapper{position:fixed;-webkit-animation-delay:.5s;animation-delay:.5s}.busy--fullscreen>.busy__overlay .busy__animation{width:5.83333rem;height:5.83333rem}@media (min-width:941px){.busy--fullscreen>.busy__overlay .busy__animation{width:10rem;height:auto}}.busy--fullscreen>.busy__overlay .busy__text{font-size:1.5rem}@media (min-width:941px){.busy--fullscreen>.busy__overlay .busy__text{font-size:2rem}}.busy--empty-space-adjustment{min-height:8.33333rem}.busy--empty-space-adjustment .busy>.busy__overlay{visibility:hidden}.busy--app-loading-hidden{display:none}.recaptcha-active .busy .busy__overlay{z-index:1}'


        var css_inc = document.createElement('style');
        css_inc.type = 'text/css';
        css_inc.innerHTML = styles_LOADER
        document.getElementsByTagName("head")[0].appendChild(css_inc);


        var loader_html = '<div class="busy busy--fullscreen busy--empty-space-adjustment" bis_skin_checked="1"><div class="busy__overlay" bis_skin_checked="1"><div class="busy__content-wrapper" bis_skin_checked="1"><div class="busy__animation" bis_skin_checked="1"></div><div class="inc_logo_client" bis_skin_checked="1" style="-webkit-animation: a .55s infinite ease alternate;animation: a .55s infinite ease alternate;"> <a href="https://uspoloassn.com" title="U.S. Polo Assn."> <img src="//cdn.shopify.com/s/files/1/0014/6217/3742/files/uspa-logo-onwht_410x.png?v=1580651861" class="inc_logo_img" alt="U.S. Polo Assn." style="max-width: 300px;"></a></div><p class="busy__text">Loading…</p></div></div></div>'


        var loader_block = document.createElement('loader_block')
        loader_block.setAttribute('id', 'loader_block_inc')
        loader_block.innerHTML = loader_html
        document.querySelector('body').appendChild(loader_block)
        clearInterval(loader_body)
    }, 100);
}
if (INC_collection_load == true) {
    var versionUpdate = (new Date()).getTime();
    var jsFilePath = "https://www.increasingly.co/Implementation/usPA9_col/js/usPA9_c.js?v=" + versionUpdate;
    var scriptTag = document.createElement('script');
    scriptTag.type = 'text/javascript';
    scriptTag.src = jsFilePath;
    document.querySelector('body').appendChild(scriptTag);
} else if (INC_collection_load == false) {
    var INC_ENV = "prod";
    var logger = function (a, b) {
        switch (INC_ENV) {
            case "prod":
                "";
                break;
            case "dev":
                (b != undefined && b != null) ? console.log(a, b): console.log(a);
                break;
        }
    }
    INC.config = {}
    INC.config.recommendationProduct = []
    INC.config.recommendation = false;

    function checkDevUserCookie() {
        var cookieArray = document.cookie.split(";");
        cookieArray.forEach(function (cookie) {
            var cookieSplit = cookie.split("=");
            if (cookieSplit[0].trim() == "devENV") {
                console.log(cookieSplit[1].trim());
                if (cookieSplit[1].trim() == "devUser") {
                    INC_ENV = "dev";
                    setTimeout(function () {
                        logger("initializing dev");
                        init();
                    }, 2000);
                }
            }
        });
        if (INC_ENV == "prod") {
            setTimeout(function () {
                if (window.location.host == 'uspoloassn.com') {
                    console.log("initializing");
                    init();
                }

                if (window.location.host != 'uspoloassn.com') console.log("Increasingly");
            }, 2000);
        }
    }
    checkDevUserCookie();
    if (window.location.pathname == "/account/login") {
        var el = document.querySelector('.btn.action_button');
        el.addEventListener("click", function () {
            var userNameCheck = document.querySelector('#customer_email');
            var passwordCheck = document.querySelector('#customer_password');
            logger(userNameCheck.value);
            logger(passwordCheck.value);
            if ((userNameCheck.value == "devices@increasingly.com") &&
                (passwordCheck.value == "Increasingly123")
            ) {
                logger("cookie set");
                document.cookie = "devENV=devUser; path=/";
            }
        });
    }
    logger("ok");

    function addCSSFile() {
        if (typeof (ltkCustObj) != "undefined" && ltkCustObj != undefined && ltkCustObj.email == "devices@increasingly.com") {
            var cssFilePath = "https://www.increasingly.co/Clients/usPA9/css/usPA9.css?v=" + versionUpdate;

        } else {
            var cssFilePath = "https://www.increasingly.co/Implementation/usPA9/css/usPA9.css";
        }
        var linkTag = document.createElement('link');
        linkTag.rel = "stylesheet";
        linkTag.href = cssFilePath;
        document.querySelector('head').appendChild(linkTag);
    }

    // window.addEventListener('load', init);

    var productObjTmp = {
        id: '',
        sku: '',
        name: '',
        url: '',
        imageURL: '',
        regularPrice: '',
        activePrice: '',
        activePriceMsg: '',
        manufacturer: '',
        otherImageList: [],
        option: {
            "1": "",
            "2": "",
            "3": ""
        },
        internalId: '',
        mainId: '',
        categoryName: '',
        catergoryId: ''
    }
    var bundleResponse = {};
    // var pdpProductId = '';
    // var productArray = [];
    // var bundleProductsArray = [];
    var incDataStore = {};
    var bundleObj = {
        id: '',
        totalRegularPrice: '',
        totalActivePrice: '',
        totalBundlePrice: '',
        totalBundleDiscountPrice: '',
        productCount: '',
        productId: []
    }
    var inc = {};
    var currencySymbol = "$";
    var currencyName = "USD";

    function buildDataStoreObj(productId, bundleResponse) {

        incDataStore = {};
        // var bundles = JSON.parse(bundleResponse).Bundles;
        if (INC.config.recommendation == true) {
            var bundles = [];
            bundles.push({
                BundleId: '12345'
            })
        } else {
            var bundles = JSON.parse(bundleResponse).Bundles;
        }

        if (inc.pageType == "cartPage") {
            bundles = JSON.parse(window.sessionStorage.getItem("bundleJSON")).Bundles;
        }

        var dataStoreObj = {};
        var bundleProductsArray = [];
        var pdpProductId = '';
        // for (var i = 0; i < bundles.length; i++) {
        for (var i = 0; i < bundles.length; i++) {
            var irbBundleObj = bundles[i];
            var bundleObj = {};
            if (INC.config.recommendation == true) {
                var irbBundleObj = bundleResponse;
            } else {
                var irbBundleObj = bundles[i];
            }
            var bundleObj = {};
            if (INC.config.recommendation == false) {
                bundleObj.id = irbBundleObj["BundleId"];
                bundleObj.totalRegularPrice = irbBundleObj["TotalPrice"];
                bundleObj.totalActivePrice = irbBundleObj["TotalSpecialPrice"];
                bundleObj.totalBundlePrice = irbBundleObj["TotalBundlePrice"];
                bundleObj.totalBundleDiscountPrice = irbBundleObj["DiscountPrice"];
                bundleObj.productCount = irbBundleObj["ProductCount"];
            }
            if (INC.config.recommendation == true) {
                var irbProductsArray = irbBundleObj.CategoryRecommendations;
            } else {
                var irbProductsArray = irbBundleObj["Products"];
            }
            // var irbProductsArray = irbBundleObj["Products"];
            if (irbProductsArray.length) {
                pdpProductId = irbProductsArray[0]["ProductId"];
                if(irbProductsArray[1] != undefined){
                    bundleProductsArray.push(irbProductsArray[1]["ProductId"]);
                }
            }

            for (var j = 0; j < irbProductsArray.length; j++) {
                // var product = irbProductsArray[j];
                if (INC.config.recommendation == true) {
                    bundleProductsArray.push(irbProductsArray[j].ProductId);
                    INC.config.recommendationProduct.push(irbProductsArray[j].ProductId)
                    var product = irbProductsArray[j]
                } else {
                    var product = irbProductsArray[j];
                }
                var pAttributes = product["Attributes"];
                var pAttObj = {};
                if(pAttributes != null){
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
                                    childProduct["ProductLevelDiscountMessage"] = product["ProductLevelDiscountMessage"]
                                }
                                var productObj = createProductAttObj(childProduct);
                                productObj.mainId = product["ProductId"];
                                productObj.bundleId = bundleObj.id;
                                productObj.option[pAttributesObj["attributeId"]].id = pAttributesObj["attributeId"];
                                productObj.option[pAttributesObj["attributeId"]].label = pAttributesObj["frontEndLabel"];
                                productObj.option[pAttributesObj["attributeId"]].code = pAttributesObj["attributeCode"];
    
                                if (!dataStoreObj.hasOwnProperty(product['ProductId'])) {
                                    dataStoreObj[product['ProductId']] = {};
                                }
                                if (!dataStoreObj[product['ProductId']].hasOwnProperty(productObj['id'])) {
                                    dataStoreObj[product['ProductId']][productObj['id']] = {}
                                }
                                // logger("child product");
                                // logger(productObj);
                                pAttObj = dataStoreObj[product['ProductId']][productObj['id']];
                                // logger("child product in datastore")
                                // logger(pAttObj);
    
                                // logger("");
                                for (pAtt in productObj) {
                                    if (pAtt == "option") {
                                        if (!pAttObj.hasOwnProperty('option')) {
                                            pAttObj["option"] = {}
                                        }
                                        // if (product['ProductId'] == "1718881878062") {
                                        //     logger(pAttObj.option);
                                        //     Object.keys(productObj[pAtt]).forEach(function (key) {
                                        //         pAttObj[pAtt][key] = productObj[pAtt][key];
                                        //         logger(productObj[pAtt][key]);
                                        //         logger(pAttObj.option);
                                        //     });
                                        // } else {
                                        Object.keys(productObj[pAtt]).forEach(function (key) {
                                            pAttObj[pAtt][key] = productObj[pAtt][key];
    
                                            // logger("productid " + productObj['id']);
                                            // logger("pAtt " + pAtt);
                                            // logger("key " + key);
                                            // logger("text " + productObj[pAtt][key].text);
                                            // logger("productObj[pAtt][key]");
                                            // logger(productObj[pAtt][key]);
                                            // logger("pAttObj");
                                            // logger(pAttObj);
                                        });
                                        // }
                                    } else {
                                        pAttObj[pAtt] = productObj[pAtt];
                                    }
                                }
    
                                // logger("child product after update");
                                // logger(pAttObj);
                            }
                        }
                    }
                }
                if (pAttributes == null) {
                    // var productObj = createProductAttObj(childProduct);
                    productObj = new createProductObj(product);
                    productObj["bundleId"] = irbBundleObj["BundleId"];
                    if (INC.config.recommendation == false) {
                        productObj["bundledProductId"] = pdpProductId;
                    }

                    productObj.sku = productObj.id;
                    productObj.Filed3 = product["Field3"] + " | " + product["Field4"];
                    if (!Object.prototype.hasOwnProperty.call(dataStoreObj, productObj['mainId'])) {
                        dataStoreObj[productObj['mainId']] = {};
                    }

                    dataStoreObj[productObj["id"]] = {};
                    if (!!window.MSInputMethodContext && !!document.documentMode) {
                        dataStoreObj[productObj['mainId']][productObj['id']] = JSON.parse(JSON.stringify(productObj));
                    } else {
                        dataStoreObj[productObj['mainId']][productObj['id']] = Object.assign({}, productObj);
                    }
                }
                // productArray.push(pAttObj);
            }
        }
        incDataStore.dataStoreObj = dataStoreObj;
        incDataStore.bundleProductsArray = bundleProductsArray;
        incDataStore.pdpProductId = pdpProductId;
        incDataStore.bundleCartProducts = {};
        incDataStore.tickboxProducts = {};
    }

    function createProductAttObj(childProduct) {
        // logger(childProduct);
        var productObj = {};
        productObj.id = childProduct["childProductId"];
        productObj.sku = childProduct["childProductSku"];
        productObj.name = childProduct["childProductName"];
        productObj.addsku = childProduct["childProductSku"];
        productObj.productType = childProduct["ProductType"];
        productObj.url = childProduct["childProductUrl"];
        productObj.imageURL = childProduct["childProductImageUrl"];
        productObj.regularPrice = childProduct["childProductPrice"];
        productObj.activePrice = (childProduct["childProductSpecialPrice"] != null && childProduct["childProductSpecialPrice"] != "0.00") ? childProduct["childProductSpecialPrice"] : childProduct["childProductPrice"];
        productObj.activePriceMsg = (childProduct["productLevelDiscountMessage"] != null) ? childProduct["productLevelDiscountMessage"] : "";
        productObj.otherImageList = childProduct["childProductOtherImageUrl"];
        productObj.ProductLevelDiscountMessage = childProduct["ProductLevelDiscountMessage"];
        productObj.option = {};
        productObj.option[childProduct["optionId"]] = {};
        productObj.option[childProduct["optionId"]].text = childProduct["optionText"];
        productObj.option[childProduct["optionId"]].imgSrc = (childProduct["optionImageUrl"] != null) ? childProduct["optionImageUrl"] : "";
        productObj.option[childProduct["optionId"]].colorCode = childProduct["colorCode"];
        productObj.internalId = childProduct["childInternalProductId"].toString();
        // logger(productObj);
        //console.log(childProduct)
        return productObj;
    }
    function createProductObj(product) {
        // var productObj = Object.assign({}, product);
        var productObj = {};
        productObj.id = product["ProductId"];
        productObj.sku = product["ProductSku"];
        productObj.productType = product["ProductType"];
        productObj.addsku = product["ProductSku"];
        productObj.mainId = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
        productObj.name = product["ProductName"];
        productObj.url = product["ProductUrl"];
        productObj.imageURL = product["ImageURL"];
        productObj.regularPrice = product["Price"];
        productObj.activePrice = (product["SpecialPrice"] != null && product["SpecialPrice"] != "0.00") ? product["SpecialPrice"] : product["Price"];
        productObj.activePriceMsg = (product["ProductLevelDiscountMessage"] != null) ? product["ProductLevelDiscountMessage"] : "";
        productObj.otherImageList = product["OtherImageList"];
        productObj.ProductLevelDiscountMessage = product["ProductLevelDiscountMessage"];

        // productObj.internalId = product["InternalProductId"].toString();

        return productObj;
    }
    // function clearProductObj() {
    //     for (productProp in productObj) {
    //         productObj[productProp] = '';
    //     }

    //     return true;
    // }

    // logger(dataStoreObj);

    function irbReq(productId, bundleCount, elementName) {
        var elementName = elementName || "";
        var productId = productId;
        var apiKey = "usPA9";
        var bundleReqCount = bundleCount;
        var irbPATH = "//usarapidload.increasingly.co/increasingly_bundles?irb/";

        var irbReqParams =
            "product_ids=" + productId +
            "&category_id=" +
            "&api_key=" + apiKey +
            "&client_id=" +
            "&client_visitor_id=" + inc.ivid +
            "&page_type=" + elementName +
            "&is_tc=" +
            "&no_of_bundles=" + bundleReqCount;

        var irbReqURL = decodeURI(irbPATH + btoa(irbReqParams));
        var networkConfigObj = {
            type: "irb",
            url: irbReqURL
        }

        return refreshBundles(networkConfigObj, productId);
    }

    function refreshBundles(networkConfigObj, productId) {
        var querySel = ".swatch_options [data-option-index='1'] div"
        var eleArr = document.querySelectorAll(querySel)
        var count = 0
        for (var i = 0; i < eleArr.length; i++) {
            if (eleArr[i].classList.contains("soldout")) {
                count++
            }
        }
        if(document.querySelector('.button.action_button.button--add-to-cart.disabled') != null){
            oosproduct(productId)
        }
        networkReq(networkConfigObj, function (response, productId) {
            logger(response.length);
            if (response.length == 0) {
                return;
            }
            var responseJSON = JSON.parse(response);

            var isrecomendation = false;
            if (responseJSON.CategoryRecommendations != null) {
                if (responseJSON.CategoryRecommendations.length > 0) {
                    if(document.querySelector('.button.action_button.button--add-to-cart.disabled') != null){
                        oosproduct(productId)
                    }
                    isrecomendation = true
                }
            }
            
            if (responseJSON.hasOwnProperty('CategoryRecommendations') && isrecomendation == true && inc.pageType == "pdp") {
                responseJSON.timeStamp = Date.now();
                var dataObj = {
                    productId: productId,
                    response: responseJSON
                }

                var productId = dataObj.productId;
                var bundleResponse = responseJSON;
                INC.config.recommendation = true
                buildDataStoreObj(productId, bundleResponse)
                if ((incDataStore.dataStoreObj == null) || (incDataStore.dataStoreObj == undefined)) return;
                INC.config.recommendation = true
                buildCrawlDataObj()
                switch (inc.pageType) {
                    case "pdp":
                        createAMBlock(null, "PDP", "recommendation");
                        break;
                }
            } else if (responseJSON.Bundles != null) {
                if (responseJSON.hasOwnProperty('Bundles') && (responseJSON.Bundles.length > 0)) {
                    responseJSON.timeStamp = Date.now();
                    var dataObj = {
                        productId: productId,
                        response: responseJSON
                    }

                    var productId = dataObj.productId;
                    bundleResponse = JSON.stringify(dataObj.response);
                    try {
                        window.sessionStorage.setItem("bundleJSON", bundleResponse);
                    } catch (err) {

                    }

                    buildDataStoreObj(productId, bundleResponse);
                    if ((incDataStore.dataStoreObj == null) || (incDataStore.dataStoreObj == undefined)) return;
                    if (inc.pageType == "productList") {
                        createSidebarBlock();
                        return;
                    }
                    detectPageType();
                }
            }
        }, productId);
    }

    function networkReq(nwConfigObj, cb, productId) {

        var reqObj = {
            url: nwConfigObj.url,
            method: (nwConfigObj.method == null || nwConfigObj.method == undefined || nwConfigObj.method.length == 0) ? 'GET' : nwConfigObj.method,
            params: nwConfigObj.params,
            type: networkReq.type
        }

        var xhr = new XMLHttpRequest();
        xhr.open(reqObj.method, reqObj.url, true);

        xhr.onload = function () {}

        xhr.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                if (productId) {
                    // logger(xhr.response)
                    cb(xhr.response, productId);
                }
            }
        }
        xhr.send(reqObj.params);
    }

    var prefix = "inc_";
    var postfix = "_block";

    var uiConfig = {
        pdp: {
            className: {
                pdpModalBlock: prefix + "pdp" + postfix,
                pdpModalTitleBlock: prefix + "pdp_title" + postfix,
                pdpModalTitleTextBlock: prefix + "pdp_title_text" + postfix,
                pdpModalTitleText: prefix + "pdp_title_text",
                pdpModalBundleBlock: prefix + "pdp_bundle" + postfix,
                pdpModalMainProductBlock: prefix + "pdp_product-main" + postfix,
                pdpModalAddIconBlock: prefix + "pdp_icon-add" + postfix,
                pdpModalBundleProductBlock: prefix + "pdp_product-bundle" + postfix,
                pdpModalBundleCartBlock: prefix + "pdp_bundle-cart" + postfix,

                pdpAddIconImgBlock: prefix + "pdp_icon-add_img" + postfix,
                pdpAddIconImg: prefix + "pdp_icon-add_img",
                pdpBundleProductLeftBtnBlock: prefix + "pdp_product-bundle_left-btn" + postfix,
                pdpBundleProductLeftBtnImgBlock: prefix + "pdp_product-bundle_left-btn_img" + postfix,
                pdpBundleProductLeftBtnImg: prefix + "pdp_product-bundle_left-btn_img",
                pdpBundleProductRightBtnBlock: prefix + "pdp_product-bundle_right-btn" + postfix,
                pdpBundleProductRightBtnImgBlock: prefix + "pdp_product-bundle_right-btn_img" + postfix,
                pdpBundleProductRightBtnImg: prefix + "pdp_product-bundle_right-btn_img",

                pdpBundleProductListBlock: prefix + "pdp_product-bundle_list" + postfix,

                pdpBundleCartStripeColorBlock: prefix + "pdp_cart_block_stripe_color" + postfix,

                pdpBundleCartTitleBlock: prefix + "pdp_bundle-cart_title" + postfix,
                pdpBundleCartTitleImgBlock: prefix + "pdp_bundle-cart_title_img" + postfix,
                pdpBundleCartTitleImg: prefix + "pdp_bundle-cart_title_img",
                pdpBundleCartTitleTextBlock: prefix + "pdp_bundle-cart_title_text" + postfix,
                pdpBundleCartTitleText: prefix + "pdp_bundle-cart_title_text",
                pdpBundleCartPriceBlock: prefix + "pdp_bundle-cart_price" + postfix,
                pdpBundleCartPriceMainBlock: prefix + "pdp_bundle-cart_price_main",
                pdpBundleCartPriceMainTitleBlock: prefix + "pdp_bundle-cart_price_main_title" + postfix,
                pdpBundleCartPriceMainTitleTextBlock: prefix + "pdp_bundle-cart_price_main_title_text" + postfix,
                pdpBundleCartPriceMainTitleText: prefix + "pdp_bundle-cart_price_main_title_text",
                pdpBundleCartPriceMainFigureBlock: prefix + "pdp_bundle-cart_price_main_figure" + postfix,
                pdpBundleCartPriceMainFigureTextBlock: prefix + "pdp_bundle-cart_price_main_figure_text" + postfix,
                pdpBundleCartPriceMainFigureText: prefix + "pdp_bundle-cart_price_main_figure_text",
                pdpBundleCartPriceAddonBlock: prefix + "pdp_bundle-cart_price_addon" + postfix,
                pdpBundleCartPriceAddonTitleBlock: prefix + "pdp_bundle-cart_price_addon_title" + postfix,
                pdpBundleCartPriceAddonTitleTextBlock: prefix + "pdp_bundle-cart_price_addon_title_text" + postfix,
                pdpBundleCartPriceAddonTitleText: prefix + "pdp_bundle-cart_price_addon_title_text",
                pdpBundleCartPriceAddonFigureBlock: prefix + "pdp_bundle-cart_price_addon_figure" + postfix,
                pdpBundleCartPriceAddonFigureTextBlock: prefix + "pdp_bundle-cart_price_addon_figure_text" + postfix,
                pdpBundleCartPriceAddonFigureText: prefix + "pdp_bundle-cart_price_addon_figure_text",
                pdpBundleCartSummaryBlock: prefix + "pdp_bundle-cart_summary" + postfix,
                pdpBundleCartSummaryTitleBlock: prefix + "pdp_bundle-cart_summary_title" + postfix,
                pdpBundleCartSummaryTitleTextBlock: prefix + "pdp_bundle-cart_summary_title_text" + postfix,
                pdpBundleCartSummaryTitleText: prefix + "pdp_bundle-cart_summary_title_text",
                pdpBundleCartSummaryPriceBlock: prefix + "pdp_bundle-cart_summary_price" + postfix,
                pdpBundleCartSummaryPriceRegularBlock: prefix + "pdp_bundle-cart_summary_price_regular" + postfix,
                pdpBundleCartSummaryPriceRegularTextBlock: prefix + "pdp_bundle-cart_summary_price_regular_text" + postfix,
                pdpBundleCartSummaryPriceRegularText: prefix + "pdp_bundle-cart_summary_price_regular_text",
                pdpBundleCartSummaryPriceActiveBlock: prefix + "pdp_bundle-cart_summary_price_active" + postfix,
                pdpBundleCartSummaryPriceActiveTextBlock: prefix + "pdp_bundle-cart_summary_price_active_text" + postfix,
                pdpBundleCartSummaryPriceActiveText: prefix + "pdp_bundle-cart_summary_price_active_text",
                pdpBundleCartSummaryPriceWorthBlock: prefix + "pdp_bundle_cart_summary_price_worth" + postfix,
                pdpBundleCartSummaryPriceWorthTextBlock: prefix + "pdp_bundle_cart_summary_price_worth_text" + postfix,
                pdpBundleCartSummaryPriceWorthText: prefix + "pdp_bundle_cart_summary_price_worth_text",
                pdpBundleCartSummaryAddBlock: prefix + "pdp_bundle-cart_summary_add" + postfix,
                pdpBundleCartSummaryAddBtnBlock: prefix + "pdp_bundle-cart_summary_add_btn" + postfix,
                pdpBundleCartSummaryAddBtnTextBlock: prefix + "pdp_bundle-cart_summary_add_btn_text" + postfix,
                pdpBundleCartSummaryAddBtnText: prefix + "pdp_bundle-cart_summary_add_btn_text",
                pdpBundleCartSummaryAddBtnImgBlock: prefix + "pdp_bundle-cart_summary_add_btn_img" + postfix,
                pdpBundleCartSummaryAddBtnImg: prefix + "pdp_bundle-cart_summary_add_btn_img",

                productBlock: prefix + "product" + postfix,
                productImgBlock: prefix + "product_img" + postfix,
                productImg: prefix + "product_img",
                productImgLink: prefix + "product_img_link",
                productDescBlock: prefix + "product_desc" + postfix,
                productTitleBlock: prefix + "product_desc_title" + postfix,
                productTitleTextBlock: prefix + "product_desc_title_text" + postfix,
                productTitleText: prefix + "product_desc_title_text",
                productTitleTextLink: prefix + "product_title_text_link",
                productPriceBlock: prefix + "product_desc_price" + postfix,
                productActivePriceBlock: prefix + "product_desc_price_active" + postfix,
                productActivePriceTextBlock: prefix + "product_desc_price_active_text" + postfix,
                productActivePriceText: prefix + "product_desc_price_active_text",
                productRegularPriceBlock: prefix + "product_desc_price_regular" + postfix,
                productRegularPriceTextBlock: prefix + "product_desc_price_regular_text" + postfix,
                productRegularPriceText: prefix + "product_desc_price_regular_text",
                productPriceWorthBlock: prefix + "product_desc_price_worth" + postfix,
                productPriceWorthTextBlock: prefix + "product_desc_price_worth_text" + postfix,
                productPriceWorthText: prefix + "product_desc_price_worth_text",
                productPriceWorthTextMsg: prefix + "product_desc_price_worth_text_msg",
                productPromoMsgBlock: prefix + "promo" + postfix,
                productPromoMsgText: prefix + "promo_text",
                productAttBlock: prefix + "product_desc_att" + postfix,
                productAttColorBlock: prefix + "product_desc_att_color" + postfix,
                productAttColorTitleBlock: prefix + "product_desc_att_color_title" + postfix,
                productAttColorTitleTextBlock: prefix + "product_desc_att_color_title_text" + postfix,
                productAttColorTitleText: prefix + "product_desc_att_color_title_text",
                productAttColorImgBlock: prefix + "product_desc_att_color_img" + postfix,
                productAttColorImg: prefix + "product_desc_att_color_img",
                productAttSizeBlock: prefix + "product_desc_att_size" + postfix,
                productAttSizeTitleBlock: prefix + "product_desc_att_size_title" + postfix,
                productAttSizeTitleTextBlock: prefix + "product_desc_att_size_title_text" + postfix,
                productAttSizeTitleText: prefix + "product_desc_att_size_title_text",
                productAttSizeImgBlock: prefix + "product_desc_att_size_img" + postfix,
                productAttSizeImg: prefix + "product_desc_att_size_img",
                productAttLengthBlock: prefix + "product_desc_att_length" + postfix,
                productAttLengthTitleBlock: prefix + "product_desc_att_length_title" + postfix,
                productAttLengthTitleTextBlock: prefix + "product_desc_att_length_title_text" + postfix,
                productAttLengthTitleText: prefix + "product_desc_att_length_title_text",
                productAttLengthImgBlock: prefix + "product_desc_att_length_img" + postfix,
                productAttLengthImg: prefix + "product_desc_att_length_img",
                productQtyBlock: prefix + "product_desc_qty" + postfix,
                productQtyDownBlock: prefix + "product_desc_qty_down" + postfix,
                productQtyDownBtnBlock: prefix + "product_desc_qty_down_btn" + postfix,
                productQtyDownBtn: prefix + "product_desc_qty_down_btn",
                productQtyInputBlock: prefix + "product_desc_qty_input" + postfix,
                productQtyInputTextBlock: prefix + "product_desc_qty_input_text" + postfix,
                productQtyInputText: prefix + "product_desc_qty_input_text",
                productQtyInput: prefix + "product_desc_qty_input",
                productQtyUpBlock: prefix + "product_desc_qty_up" + postfix,
                productQtyUpBtnBlock: prefix + "product_desc_qty_up_btn" + postfix,
                productQtyUpBtn: prefix + "product_desc_qty_up_btn",
                productAddBlock: prefix + "product_desc_add" + postfix,
                productAddTextBlock: prefix + "product_desc_add_text" + postfix,
                productAddText: prefix + "product_desc_add_text",
                productAddImgBlock: prefix + "product_desc_add_img" + postfix,
                productAddImg: prefix + "product_desc_add_img",
                productAttSelBlock: prefix + "product_att_sel" + postfix,
                productAttSelColorBlock: prefix + "product_att_sel_color" + postfix,
                productAttSelColorTitleBlock: prefix + "product_att_sel_color_title" + postfix,
                productAttSelColorTitleTextBlock: prefix + "product_att_sel_color_title_text" + postfix,
                productAttSelColorTitleText: prefix + "product_att_sel_color_title_text",
                productAttSelColorListBlock: prefix + "product_att_sel_color_list" + postfix,
                productAttSelColorImgBlock: prefix + "product_att_sel_color_img" + postfix,
                productAttSelColorImg: prefix + "product_att_sel_color_img",
                productAttSelColorImgTooltip: prefix + "product_att_sel_color_img_tooltip",
                productAttSelSizeBlock: prefix + "product_att_sel_size" + postfix,
                productAttSelSizeTitleBlock: prefix + "product_att_sel_size_title" + postfix,
                productAttSelSizeTitleTextBlock: prefix + "product_att_sel_size_title_text" + postfix,
                productAttSelSizeTitleText: prefix + "product_att_sel_size_title_text",
                productAttSelSizeListBlock: prefix + "product_att_sel_size_list" + postfix,
                productAttSelSizeImgBlock: prefix + "product_att_sel_size_img" + postfix,
                productAttSelSizeImg: prefix + "product_att_sel_size_img",
                productAttSelLengthBlock: prefix + "product_att_sel_length" + postfix,
                productAttSelLengthTitleBlock: prefix + "product_att_sel_length_title" + postfix,
                productAttSelLengthTitleTextBlock: prefix + "product_att_sel_length_title_text" + postfix,
                productAttSelLengthTitleText: prefix + "product_att_sel_length_title_text",
                productAttSelLengthListBlock: prefix + "product_att_sel_length_list" + postfix,
                productAttSelLengthImgBlock: prefix + "product_att_sel_length_img" + postfix,
                productAttSelLengthImg: prefix + "product_att_sel_length_img",
                productAttSelDoneBlock: prefix + "product_att_sel_done" + postfix,
                productAttSelDoneBtnBlock: prefix + "product_att_sel_done_btn" + postfix,
                productAttSelDoneBtnTextBlock: prefix + "product_att_sel_done_btn_text" + postfix,
                productAttSelDoneBtnText: prefix + "product_att_sel_done_btn_text"
            },
            dom: {
                pdpModalBlock: ["pdpModalTitleBlock", "pdpModalBundleBlock"],
                pdpModalTitleBlock: ["pdpModalTitleTextBlock"],
                pdpModalTitleTextBlock: ["pdpModalTitleText"],
                pdpModalBundleBlock: ["pdpModalMainProductBlock", "pdpModalAddIconBlock", "pdpModalBundleProductBlock", "pdpModalBundleCartBlock"],
                pdpModalMainProductBlock: ["productBlock"],
                pdpModalAddIconBlock: ["pdpAddIconImgBlock"],
                pdpAddIconImgBlock: ["pdpAddIconImg"],

                pdpModalBundleProductBlock: ["pdpBundleProductLeftBtnBlock", "pdpBundleProductListBlock", "pdpBundleProductRightBtnBlock"],
                pdpBundleProductLeftBtnBlock: ["pdpBundleProductLeftBtnImgBlock"],
                pdpBundleProductLeftBtnImgBlock: ["pdpBundleProductLeftBtnImg"],
                pdpBundleProductRightBtnBlock: ["pdpBundleProductRightBtnImgBlock"],
                pdpBundleProductRightBtnImgBlock: ["pdpBundleProductRightBtnImg"],

                pdpBundleProductListBlock: ["productBlock"],

                pdpModalBundleCartBlock: ["pdpBundleCartStripeColorBlock"],
                pdpBundleCartStripeColorBlock: ["pdpBundleCartTitleBlock", "pdpBundleCartPriceBlock", "pdpBundleCartSummaryBlock"],
                pdpBundleCartTitleBlock: ["pdpBundleCartTitleImgBlock", "pdpBundleCartTitleTextBlock"],
                pdpBundleCartTitleImgBlock: ["pdpBundleCartTitleImg"],
                pdpBundleCartTitleTextBlock: ["pdpBundleCartTitleText"],
                pdpBundleCartPriceBlock: ["pdpBundleCartPriceMainBlock", "pdpBundleCartPriceAddonBlock"],
                pdpBundleCartPriceMainBlock: ["pdpBundleCartPriceMainTitleBlock", "pdpBundleCartPriceMainFigureBlock"],
                pdpBundleCartPriceMainTitleBlock: ["pdpBundleCartPriceMainTitleTextBlock"],
                pdpBundleCartPriceMainTitleTextBlock: ["pdpBundleCartPriceMainTitleText"],
                pdpBundleCartPriceMainFigureBlock: ["pdpBundleCartPriceMainFigureTextBlock"],
                pdpBundleCartPriceMainFigureTextBlock: ["pdpBundleCartPriceMainFigureText"],
                pdpBundleCartPriceAddonBlock: ["pdpBundleCartPriceAddonTitleBlock", "pdpBundleCartPriceAddonFigureBlock"],
                pdpBundleCartPriceAddonTitleBlock: ["pdpBundleCartPriceAddonTitleTextBlock"],
                pdpBundleCartPriceAddonTitleTextBlock: ["pdpBundleCartPriceAddonTitleText"],
                pdpBundleCartPriceAddonFigureBlock: ["pdpBundleCartPriceAddonFigureTextBlock"],
                pdpBundleCartPriceAddonFigureTextBlock: ["pdpBundleCartPriceAddonFigureText"],
                pdpBundleCartSummaryBlock: ["pdpBundleCartSummaryTitleBlock", "pdpBundleCartSummaryPriceBlock", "pdpBundleCartSummaryPriceWorthBlock", "pdpBundleCartSummaryAddBlock"],
                pdpBundleCartSummaryTitleBlock: ["pdpBundleCartSummaryTitleTextBlock"],
                pdpBundleCartSummaryTitleTextBlock: ["pdpBundleCartSummaryTitleText"],
                pdpBundleCartSummaryPriceBlock: ["pdpBundleCartSummaryPriceRegularBlock", "pdpBundleCartSummaryPriceActiveBlock"],
                pdpBundleCartSummaryPriceRegularBlock: ["pdpBundleCartSummaryPriceRegularTextBlock"],
                pdpBundleCartSummaryPriceRegularTextBlock: ["pdpBundleCartSummaryPriceRegularText"],
                pdpBundleCartSummaryPriceActiveBlock: ["pdpBundleCartSummaryPriceActiveTextBlock"],
                pdpBundleCartSummaryPriceActiveTextBlock: ["pdpBundleCartSummaryPriceActiveText"],
                pdpBundleCartSummaryPriceWorthBlock: ["pdpBundleCartSummaryPriceWorthTextBlock"],
                pdpBundleCartSummaryPriceWorthTextBlock: ["pdpBundleCartSummaryPriceWorthText"],
                pdpBundleCartSummaryAddBlock: ["pdpBundleCartSummaryAddBtnBlock"],
                pdpBundleCartSummaryAddBtnBlock: ["pdpBundleCartSummaryAddBtnImgBlock", "pdpBundleCartSummaryAddBtnTextBlock"],
                pdpBundleCartSummaryAddBtnImgBlock: ["pdpBundleCartSummaryAddBtnImg"],
                pdpBundleCartSummaryAddBtnTextBlock: ["pdpBundleCartSummaryAddBtnText"],

                productBlock: ["productImgBlock", "productDescBlock", "productAttSelBlock"],
                productImgBlock: ["productImg", "productImgLink"],
                productDescBlock: ["productTitleBlock", "productPriceBlock", "productPriceWorthBlock", "productPromoMsgBlock", "productAttBlock", "productQtyBlock", "productAddBlock"],
                productTitleBlock: ["productTitleTextBlock"],
                productTitleTextBlock: ["productTitleText", "productTitleTextLink"],
                productPriceBlock: ["productActivePriceBlock", "productRegularPriceBlock"],
                productActivePriceBlock: ["productActivePriceTextBlock"],
                productActivePriceTextBlock: ["productActivePriceText"],
                productRegularPriceBlock: ["productRegularPriceTextBlock"],
                productRegularPriceTextBlock: ["productRegularPriceText"],
                productPriceWorthBlock: ["productPriceWorthTextBlock"],
                productPriceWorthTextBlock: ["productPriceWorthText", "productPriceWorthTextMsg"],
                productPromoMsgBlock: ["productPromoMsgText"],
                productAttBlock: ["productAttColorBlock", "productAttSizeBlock", "productAttLengthBlock"],
                productAttColorBlock: ["productAttColorTitleBlock", "productAttColorImgBlock"],
                productAttColorTitleBlock: ["productAttColorTitleTextBlock"],
                productAttColorTitleTextBlock: ["productAttColorTitleText"],
                productAttColorImgBlock: ["productAttColorImg"],
                productAttSizeBlock: ["productAttSizeTitleBlock", "productAttSizeImgBlock"],
                productAttSizeTitleBlock: ["productAttSizeTitleTextBlock"],
                productAttSizeTitleTextBlock: ["productAttSizeTitleText"],
                productAttSizeImgBlock: ["productAttSizeImg"],
                productAttLengthBlock: ["productAttLengthTitleBlock", "productAttLengthImgBlock"],
                productAttLengthTitleBlock: ["productAttLengthTitleTextBlock"],
                productAttLengthTitleTextBlock: ["productAttLengthTitleText"],
                productAttLengthImgBlock: ["productAttLengthImg"],
                productQtyBlock: ["productQtyDownBlock", "productQtyInputBlock", "productQtyUpBlock"],
                productQtyDownBlock: ["productQtyDownBtnBlock"],
                productQtyDownBtnBlock: ["productQtyDownBtn"],
                productQtyInputBlock: ["productQtyInputTextBlock"],
                productQtyInputTextBlock: ["productQtyInputText"],
                productQtyUpBlock: ["productQtyUpBtnBlock"],
                productQtyUpBtnBlock: ["productQtyUpBtn"],
                productAddBlock: ["productAddTextBlock", "productAddImgBlock"],
                productAddTextBlock: ["productAddText"],
                productAddImgBlock: ["productAddImg"],
                productAttSelBlock: ["productAttSelColorBlock", "productAttSelSizeBlock", "productAttSelLengthBlock", "productAttSelDoneBlock"],
                productAttSelColorBlock: ["productAttSelColorTitleBlock", "productAttSelColorListBlock"],
                productAttSelColorTitleBlock: ["productAttSelColorTitleTextBlock"],
                productAttSelColorTitleTextBlock: ["productAttSelColorTitleText"],
                productAttSelColorListBlock: ["productAttSelColorImgBlock"],
                productAttSelColorImgBlock: ["productAttSelColorImg", "productAttSelColorImgTooltip"],
                productAttSelSizeBlock: ["productAttSelSizeTitleBlock", "productAttSelSizeListBlock"],
                productAttSelSizeTitleBlock: ["productAttSelSizeTitleTextBlock"],
                productAttSelSizeTitleTextBlock: ["productAttSelSizeTitleText"],
                productAttSelSizeListBlock: ["productAttSelSizeImgBlock"],
                productAttSelSizeImgBlock: ["productAttSelSizeImg"],
                productAttSelLengthBlock: ["productAttSelLengthTitleBlock", "productAttSelLengthListBlock"],
                productAttSelLengthTitleBlock: ["productAttSelLengthTitleTextBlock"],
                productAttSelLengthTitleTextBlock: ["productAttSelLengthTitleText"],
                productAttSelLengthListBlock: ["productAttSelLengthImgBlock"],
                productAttSelLengthImgBlock: ["productAttSelLengthImg"],
                productAttSelDoneBlock: ["productAttSelDoneBtnBlock"],
                productAttSelDoneBtnBlock: ["productAttSelDoneBtnTextBlock"],
                productAttSelDoneBtnTextBlock: ["productAttSelDoneBtnText"]

            }
        },
        am: {
            className: {
                amBlock: prefix + "am" + postfix,
                amTitleBlock: prefix + "am_title" + postfix,
                amTitleTextBlock: prefix + "am_title_text" + postfix,
                amTitleText: prefix + "am_title_text" + postfix,
                amTitleImgBlock: prefix + "am_title_img" + postfix,
                amTitleImg: prefix + "am_title_img",

                amProductListBlock: prefix + "am_product-list" + postfix,
                amProductListLeftBtnBlock: prefix + "am_product-list_left-btn" + postfix,
                amProductListLeftBtnImgBlock: prefix + "am_product-list_left-btn_img" + postfix,
                amProductListLeftBtnImg: prefix + "am_product-list_left-btn_img",
                amProductListRightBtnBlock: prefix + "am_product-list_right-btn" + postfix,
                amProductListRightBtnImgBlock: prefix + "am_product-list_right-btn_img" + postfix,
                amProductListRightBtnImg: prefix + "am_product-list_right-btn_img",

                productBlock: prefix + "product" + postfix,
                productImgBlock: prefix + "product_img" + postfix,
                productImg: prefix + "product_img",
                productImgLink: prefix + "product_img_link",
                productDescBlock: prefix + "product_desc" + postfix,
                productTitleBlock: prefix + "product_desc_title" + postfix,
                productTitleTextBlock: prefix + "product_desc_title_text" + postfix,
                productTitleText: prefix + "product_desc_title_text",
                productTitleTextLink: prefix + "product_title_text_link",
                productPriceBlock: prefix + "product_desc_price" + postfix,
                productActivePriceBlock: prefix + "product_desc_price_active" + postfix,
                productActivePriceTextBlock: prefix + "product_desc_price_active_text" + postfix,
                productActivePriceText: prefix + "product_desc_price_active_text",
                productRegularPriceBlock: prefix + "product_desc_price_regular" + postfix,
                productRegularPriceTextBlock: prefix + "product_desc_price_regular_text" + postfix,
                productRegularPriceText: prefix + "product_desc_price_regular_text",
                productPriceWorthBlock: prefix + "product_desc_price_worth" + postfix,
                productPriceWorthTextBlock: prefix + "product_desc_price_worth_text" + postfix,
                productPriceWorthText: prefix + "product_desc_price_worth_text",
                productPriceWorthTextMsg: prefix + "product_desc_price_worth_text_msg",
                productPromoMsgBlock: prefix + "promo" + postfix,
                productPromoMsgText: prefix + "promo_text",
                productAttBlock: prefix + "product_desc_att" + postfix,
                productAttColorBlock: prefix + "product_desc_att_color" + postfix,
                productAttColorTitleBlock: prefix + "product_desc_att_color_title" + postfix,
                productAttColorTitleTextBlock: prefix + "product_desc_att_color_title_text" + postfix,
                productAttColorTitleText: prefix + "product_desc_att_color_title_text",
                productAttColorImgBlock: prefix + "product_desc_att_color_img" + postfix,
                productAttColorImg: prefix + "product_desc_att_color_img",
                productAttSizeBlock: prefix + "product_desc_att_size" + postfix,
                productAttSizeTitleBlock: prefix + "product_desc_att_size_title" + postfix,
                productAttSizeTitleTextBlock: prefix + "product_desc_att_size_title_text" + postfix,
                productAttSizeTitleText: prefix + "product_desc_att_size_title_text",
                productAttSizeImgBlock: prefix + "product_desc_att_size_img" + postfix,
                productAttSizeImg: prefix + "product_desc_att_size_img",
                productAttLengthBlock: prefix + "product_desc_att_length" + postfix,
                productAttLengthTitleBlock: prefix + "product_desc_att_length_title" + postfix,
                productAttLengthTitleTextBlock: prefix + "product_desc_att_length_title_text" + postfix,
                productAttLengthTitleText: prefix + "product_desc_att_length_title_text",
                productAttLengthImgBlock: prefix + "product_desc_att_length_img" + postfix,
                productAttLengthImg: prefix + "product_desc_att_length_img",
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
                productAttSelBlock: prefix + "product_att_sel" + postfix,
                productAttSelColorBlock: prefix + "product_att_sel_color" + postfix,
                productAttSelColorTitleBlock: prefix + "product_att_sel_color_title" + postfix,
                productAttSelColorTitleTextBlock: prefix + "product_att_sel_color_title_text" + postfix,
                productAttSelColorTitleText: prefix + "product_att_sel_color_title_text",
                productAttSelColorListBlock: prefix + "product_att_sel_color_list" + postfix,
                productAttSelColorImgBlock: prefix + "product_att_sel_color_img" + postfix,
                productAttSelColorImg: prefix + "product_att_sel_color_img",
                productAttSelColorImgTooltip: prefix + "product_att_sel_color_img_tooltip",
                productAttSelSizeBlock: prefix + "product_att_sel_size" + postfix,
                productAttSelSizeTitleBlock: prefix + "product_att_sel_size_title" + postfix,
                productAttSelSizeTitleTextBlock: prefix + "product_att_sel_size_title_text" + postfix,
                productAttSelSizeTitleText: prefix + "product_att_sel_size_title_text",
                productAttSelSizeListBlock: prefix + "product_att_sel_size_list" + postfix,
                productAttSelSizeImgBlock: prefix + "product_att_sel_size_img" + postfix,
                productAttSelSizeImg: prefix + "product_att_sel_size_img",
                productAttSelLengthBlock: prefix + "product_att_sel_length" + postfix,
                productAttSelLengthTitleBlock: prefix + "product_att_sel_length_title" + postfix,
                productAttSelLengthTitleTextBlock: prefix + "product_att_sel_length_title_text" + postfix,
                productAttSelLengthTitleText: prefix + "product_att_sel_length_title_text",
                productAttSelLengthListBlock: prefix + "product_att_sel_length_list" + postfix,
                productAttSelLengthImgBlock: prefix + "product_att_sel_length_img" + postfix,
                productAttSelLengthImg: prefix + "product_att_sel_length_img",
                productAttSelDoneBlock: prefix + "product_att_sel_done" + postfix,
                productAttSelDoneBtnBlock: prefix + "product_att_sel_done_btn" + postfix,
                productAttSelDoneBtnTextBlock: prefix + "product_att_sel_done_btn_text" + postfix,
                productAttSelDoneBtnText: prefix + "product_att_sel_done_btn_text"
            },
            dom: {
                amBlock: ["amTitleBlock", "amProductListLeftBtnBlock", "amProductListBlock", "amProductListRightBtnBlock"],
                amTitleBlock: ["amTitleTextBlock", "amTitleImgBlock"],
                amTitleTextBlock: ["amTitleText"],
                amTitleImgBlock: ["amTitleImg"],
                amProductListLeftBtnBlock: ["amProductListLeftBtnImgBlock"],
                amProductListLeftBtnImgBlock: ["amProductListLeftBtnImg"],
                amProductListRightBtnBlock: ["amProductListRightBtnImgBlock"],
                amProductListRightBtnImgBlock: ["amProductListRightBtnImg"],
                amProductListBlock: ["productBlock"],
                productBlock: ["productImgBlock", "productDescBlock", "productAttSelBlock"],
                productImgBlock: ["productImg", "productImgLink"],
                productDescBlock: ["productTitleBlock", "productPriceBlock", "productPriceWorthBlock", "productPromoMsgBlock", "productAttBlock", "productQtyBlock", "productAddBlock"],
                productTitleBlock: ["productTitleTextBlock"],
                productTitleTextBlock: ["productTitleText", "productTitleTextLink"],
                productPriceBlock: ["productActivePriceBlock", "productRegularPriceBlock"],
                productActivePriceBlock: ["productActivePriceTextBlock"],
                productActivePriceTextBlock: ["productActivePriceText"],
                productRegularPriceBlock: ["productRegularPriceTextBlock"],
                productRegularPriceTextBlock: ["productRegularPriceText"],
                productPriceWorthBlock: ["productPriceWorthTextBlock"],
                productPriceWorthTextBlock: ["productPriceWorthText", "productPriceWorthTextMsg"],
                productPromoMsgBlock: ["productPromoMsgText"],
                productAttBlock: ["productAttColorBlock", "productAttSizeBlock", "productAttLengthBlock"],
                productAttColorBlock: ["productAttColorTitleBlock", "productAttColorImgBlock"],
                productAttColorTitleBlock: ["productAttColorTitleTextBlock"],
                productAttColorTitleTextBlock: ["productAttColorTitleText"],
                productAttColorImgBlock: ["productAttColorImg"],
                productAttSizeBlock: ["productAttSizeTitleBlock", "productAttSizeImgBlock"],
                productAttSizeTitleBlock: ["productAttSizeTitleTextBlock"],
                productAttSizeTitleTextBlock: ["productAttSizeTitleText"],
                productAttSizeImgBlock: ["productAttSizeImg"],
                productAttLengthBlock: ["productAttLengthTitleBlock", "productAttLengthImgBlock"],
                productAttLengthTitleBlock: ["productAttLengthTitleTextBlock"],
                productAttLengthTitleTextBlock: ["productAttLengthTitleText"],
                productAttLengthImgBlock: ["productAttLengthImg"],
                productQtyBlock: ["productQtyDownBlock", "productQtyInputBlock", "productQtyUpBlock"],
                productQtyDownBlock: ["productQtyDownBtnBlock"],
                productQtyDownBtnBlock: ["productQtyDownBtn"],
                productQtyInputBlock: ["productQtyInputTextBlock"],
                productQtyInputTextBlock: ["productQtyInputText"],
                productQtyUpBlock: ["productQtyUpBtnBlock"],
                productQtyUpBtnBlock: ["productQtyUpBtn"],
                productAddBlock: ["productAddTextBlock", "productAddImgBlock"],
                productAddTextBlock: ["productAddText"],
                productAddImgBlock: ["productAddImg"],
                productAttSelBlock: ["productAttSelColorBlock", "productAttSelSizeBlock", "productAttSelLengthBlock", "productAttSelDoneBlock"],
                productAttSelColorBlock: ["productAttSelColorTitleBlock", "productAttSelColorListBlock"],
                productAttSelColorTitleBlock: ["productAttSelColorTitleTextBlock"],
                productAttSelColorTitleTextBlock: ["productAttSelColorTitleText"],
                productAttSelColorListBlock: ["productAttSelColorImgBlock"],
                productAttSelColorImgBlock: ["productAttSelColorImg", "productAttSelColorImgTooltip"],
                productAttSelSizeBlock: ["productAttSelSizeTitleBlock", "productAttSelSizeListBlock"],
                productAttSelSizeTitleBlock: ["productAttSelSizeTitleTextBlock"],
                productAttSelSizeTitleTextBlock: ["productAttSelSizeTitleText"],
                productAttSelSizeListBlock: ["productAttSelSizeImgBlock"],
                productAttSelSizeImgBlock: ["productAttSelSizeImg"],
                productAttSelLengthBlock: ["productAttSelLengthTitleBlock", "productAttSelLengthListBlock"],
                productAttSelLengthTitleBlock: ["productAttSelLengthTitleTextBlock"],
                productAttSelLengthTitleTextBlock: ["productAttSelLengthTitleText"],
                productAttSelLengthListBlock: ["productAttSelLengthImgBlock"],
                productAttSelLengthImgBlock: ["productAttSelLengthImg"],
                productAttSelDoneBlock: ["productAttSelDoneBtnBlock"],
                productAttSelDoneBtnBlock: ["productAttSelDoneBtnTextBlock"],
                productAttSelDoneBtnTextBlock: ["productAttSelDoneBtnText"]

            }
        },
        sidebar: {
            className: {
                sidebarModalBlock: prefix + "sidebar_modal" + postfix,
                sidebarHeaderBlock: prefix + "sidebar_header" + postfix,
                sidebarCheckoutBlock: prefix + "sidebar_checkout" + postfix,
                sidebarCartAddedBlock: prefix + "sidebar_cart_added" + postfix,
                sidebarRecommendedBlock: prefix + "sidebar_recommended" + postfix,
                sidebarHeaderContinueBlock: prefix + "header_continue" + postfix,
                sidebarHeaderContinueImgBlock: prefix + "header_continue_img" + postfix,
                sidebarHeaderContinueImg: prefix + "header_continue_img",
                sidebarHeaderContinueTextBlock: prefix + "header_continue_text" + postfix,
                sidebarHeaderContinueText: prefix + "header_continue_text",
                sidebarHeaderTitleBlock: prefix + "header_title" + postfix,
                sidebarHeaderTitleTextBlock: prefix + "header_title_text" + postfix,
                sidebarHeaderTitleText: prefix + "header_title_text",
                sidebarHeaderItemBlock: prefix + "header_item" + postfix,
                sidebarHeaderItemCountBlock: prefix + "header_item_count" + postfix,
                sidebarHeaderItemCountTitleBlock: prefix + "header_item_count_title" + postfix,
                sidebarHeaderItemCountTitle: prefix + "header_item_count_title",
                sidebarHeaderItemCountTextBlock: prefix + "header_item_count_text" + postfix,
                sidebarHeaderItemCountText: prefix + "header_item_count_text",
                sidebarMobileHeaderItemCountText: prefix + "mobile_header_item_count_text",
                sidebarHeaderItemCountTextTooltip: prefix + "header_item_count_text_tooltip",
                sidebarCartAddedProductsBlock: prefix + "cart_added_products" + postfix,
                sidebarCartAddedProductsLeftBtnBlock: prefix + "cart_added_products_left_btn" + postfix,
                sidebarCartAddedProductsLeftBtnImgBlock: prefix + "cart_added_products_left_btn_img" + postfix,
                sidebarCartAddedProductsLeftBtnImg: prefix + "cart_added_products_left_btn_img",
                sidebarCartAddedProductsRightBtnBlock: prefix + "cart_added_products_right_btn" + postfix,
                sidebarCartAddedProductsRightBtnImgBlock: prefix + "cart_added_products_right_btn_img" + postfix,
                sidebarCartAddedProductsRightBtnImg: prefix + "cart_added_products_right_btn_img",
                sidebarCartAddedProductsMoreBlock: prefix + "cart_added_products_more" + postfix,
                sidebarCartAddedProductBlock: prefix + "cart_added_product" + postfix,
                sidebarCartAddedProductImgBlock: prefix + "cart_added_product_img" + postfix,
                sidebarCartAddedProductImg: prefix + "cart_added_product_img",
                sidebarCartAddedProductDescBlock: prefix + "cart_added_product_desc" + postfix,
                sidebarCartAddedProductDescTitleBlock: prefix + "cart_added_product_desc_title" + postfix,
                sidebarCartAddedProductDescTitle: prefix + "cart_added_product_desc_title",
                sidebarCartAddedProductDescPriceBlock: prefix + "cart_added_product_desc_price" + postfix,
                sidebarCartAddedProductDescPriceRegularBlock: prefix + "cart_added_product_desc_price_regular" + postfix,
                sidebarCartAddedProductDescPriceRegular: prefix + "cart_added_product_desc_price_regular",
                sidebarCartAddedProductDescPriceSpecialBlock: prefix + "cart_added_product_desc_price_special" + postfix,
                sidebarCartAddedProductDescPriceSpecial: prefix + "cart_added_product_desc_price_special",
                sidebarCartAddedProductDescPriceSpecialMsg: prefix + "cart_added_product_desc_price_special_msg",
                sidebarRecommendedTitleBlock: prefix + "recommended_title" + postfix,
                sidebarRecommendedTitleTextBlock: prefix + "recommended_title_text" + postfix,
                sidebarRecommendedTitleText: prefix + "recommended_title_text",
                sidebarRecommendAllItemsBlock: prefix + "recommend_items" + postfix,
                sidebarRecommendAllItemsTitleBlock: prefix + "recommend_all_items_title" + postfix,
                sidebarRecommendAllItemsTitleTextBlock: prefix + "recommend_all_items_title_text" + postfix,
                sidebarRecommendAllItemsTitleText: prefix + "recommend_all_items_title_text",
                sidebarRecommendAllItemsTitleBtnBlock: prefix + "recommend_all_items_title_btn" + postfix,
                sidebarRecommendAllItemsTitleBtnImgBlock: prefix + "recommend_all_items_title_btn_img" + postfix,
                sidebarRecommendAllItemsTitleBtnImg: prefix + "recommend_all_items_title_btn_img",
                sidebarRecommendAllItemsListingBlock: prefix + "recommend_all_items_listing" + postfix,
                sidebarRecommendItemsListingLeftBtnBlock: prefix + "recommend_items_listing_left_btn" + postfix,
                sidebarRecommendItemsListingLeftBtnImgBlock: prefix + "recommend_items_listing_left_btn_img" + postfix,
                sidebarRecommendItemsListingLeftBtnImg: prefix + "recommend_items_listing_left_btn_img",
                sidebarRecommendItemsListingRightBtnBlock: prefix + "recommend_items_listing_right_btn" + postfix,
                sidebarRecommendItemsListingRightBtnImgBlock: prefix + "recommend_items_listing_right_btn_img" + postfix,
                sidebarRecommendItemsListingRightBtnImg: prefix + "recommend_items_listing_right_btn_img",
                sidebarRecommendItemsListingProductsListBlock: prefix + "recommend_items_listing_products_list" + postfix,
                sidebarCheckoutContinueBlock: prefix + "checkout_continue" + postfix,
                sidebarCheckoutContinueBtnBlock: prefix + "checkout_continue_btn" + postfix,
                sidebarCheckoutContinueBtnTextBlock: prefix + "checkout_continue_btn_text" + postfix,
                sidebarCheckoutContinueBtnText: prefix + "checkout_continue_btn_text",
                sidebarCheckoutBasketBlock: prefix + "checkout_basket" + postfix,
                sidebarCheckoutBasketBtnBlock: prefix + "checkout_basket_btn" + postfix,
                sidebarCheckoutBasketBtnTextBlock: prefix + "checkout_basket_btn_text" + postfix,
                sidebarCheckoutBasketBtnText: prefix + "checkout_basket_btn_text",

                productBlock: prefix + "product" + postfix,
                productImgBlock: prefix + "product_img" + postfix,
                productImg: prefix + "product_img",
                productImgLink: prefix + "product_img_link",
                productDescBlock: prefix + "product_desc" + postfix,
                productTitleBlock: prefix + "product_desc_title" + postfix,
                productTitleTextBlock: prefix + "product_desc_title_text" + postfix,
                productTitleText: prefix + "product_desc_title_text",
                productTitleTextLink: prefix + "product_title_text_link",
                productPriceBlock: prefix + "product_desc_price" + postfix,
                productActivePriceBlock: prefix + "product_desc_price_active" + postfix,
                productActivePriceTextBlock: prefix + "product_desc_price_active_text" + postfix,
                productActivePriceText: prefix + "product_desc_price_active_text",
                productRegularPriceBlock: prefix + "product_desc_price_regular" + postfix,
                productRegularPriceTextBlock: prefix + "product_desc_price_regular_text" + postfix,
                productRegularPriceText: prefix + "product_desc_price_regular_text",
                productPriceWorthBlock: prefix + "product_desc_price_worth" + postfix,
                productPriceWorthTextBlock: prefix + "product_desc_price_worth_text" + postfix,
                productPriceWorthText: prefix + "product_desc_price_worth_text",
                productPriceWorthTextMsg: prefix + "product_desc_price_worth_text_msg",
                productPromoMsgBlock: prefix + "promo" + postfix,
                productPromoMsgText: prefix + "promo_text",
                productAttBlock: prefix + "product_desc_att" + postfix,
                productAttColorBlock: prefix + "product_desc_att_color" + postfix,
                productAttColorTitleBlock: prefix + "product_desc_att_color_title" + postfix,
                productAttColorTitleTextBlock: prefix + "product_desc_att_color_title_text" + postfix,
                productAttColorTitleText: prefix + "product_desc_att_color_title_text",
                productAttColorImgBlock: prefix + "product_desc_att_color_img" + postfix,
                productAttColorImg: prefix + "product_desc_att_color_img",
                productAttSizeBlock: prefix + "product_desc_att_size" + postfix,
                productAttSizeTitleBlock: prefix + "product_desc_att_size_title" + postfix,
                productAttSizeTitleTextBlock: prefix + "product_desc_att_size_title_text" + postfix,
                productAttSizeTitleText: prefix + "product_desc_att_size_title_text",
                productAttSizeImgBlock: prefix + "product_desc_att_size_img" + postfix,
                productAttSizeImg: prefix + "product_desc_att_size_img",
                productAttLengthBlock: prefix + "product_desc_att_length" + postfix,
                productAttLengthTitleBlock: prefix + "product_desc_att_length_title" + postfix,
                productAttLengthTitleTextBlock: prefix + "product_desc_att_length_title_text" + postfix,
                productAttLengthTitleText: prefix + "product_desc_att_length_title_text",
                productAttLengthImgBlock: prefix + "product_desc_att_length_img" + postfix,
                productAttLengthImg: prefix + "product_desc_att_length_img",
                productQtyBlock: prefix + "product_desc_qty" + postfix,
                productQtyDownBlock: prefix + "product_desc_qty_down" + postfix,
                productQtyDownBtnBlock: prefix + "product_desc_qty_down_btn" + postfix,
                productQtyDownBtn: prefix + "product_desc_qty_down_btn",
                productQtyInputBlock: prefix + "product_desc_qty_input" + postfix,
                productQtyInputTextBlock: prefix + "product_desc_qty_input_text" + postfix,
                productQtyInputText: prefix + "product_desc_qty_input_text",
                productQtyInput: prefix + "product_desc_qty_input",
                productQtyUpBlock: prefix + "product_desc_qty_up" + postfix,
                productQtyUpBtnBlock: prefix + "product_desc_qty_up_btn" + postfix,
                productQtyUpBtn: prefix + "product_desc_qty_up_btn",
                productAddBlock: prefix + "product_desc_add" + postfix,
                productAddTextBlock: prefix + "product_desc_add_text" + postfix,
                productAddText: prefix + "product_desc_add_text",
                productAddImgBlock: prefix + "product_desc_add_img" + postfix,
                productAddImg: prefix + "product_desc_add_img",
                productAttSelBlock: prefix + "product_att_sel" + postfix,
                productAttSelColorBlock: prefix + "product_att_sel_color" + postfix,
                productAttSelColorTitleBlock: prefix + "product_att_sel_color_title" + postfix,
                productAttSelColorTitleTextBlock: prefix + "product_att_sel_color_title_text" + postfix,
                productAttSelColorTitleText: prefix + "product_att_sel_color_title_text",
                productAttSelColorListBlock: prefix + "product_att_sel_color_list" + postfix,
                productAttSelColorImgBlock: prefix + "product_att_sel_color_img" + postfix,
                productAttSelColorImg: prefix + "product_att_sel_color_img",
                productAttSelColorImgTooltip: prefix + "product_att_sel_color_img_tooltip",
                productAttSelSizeBlock: prefix + "product_att_sel_size" + postfix,
                productAttSelSizeTitleBlock: prefix + "product_att_sel_size_title" + postfix,
                productAttSelSizeTitleTextBlock: prefix + "product_att_sel_size_title_text" + postfix,
                productAttSelSizeTitleText: prefix + "product_att_sel_size_title_text",
                productAttSelSizeListBlock: prefix + "product_att_sel_size_list" + postfix,
                productAttSelSizeImgBlock: prefix + "product_att_sel_size_img" + postfix,
                productAttSelSizeImg: prefix + "product_att_sel_size_img",
                productAttSelLengthBlock: prefix + "product_att_sel_length" + postfix,
                productAttSelLengthTitleBlock: prefix + "product_att_sel_length_title" + postfix,
                productAttSelLengthTitleTextBlock: prefix + "product_att_sel_length_title_text" + postfix,
                productAttSelLengthTitleText: prefix + "product_att_sel_length_title_text",
                productAttSelLengthListBlock: prefix + "product_att_sel_length_list" + postfix,
                productAttSelLengthImgBlock: prefix + "product_att_sel_length_img" + postfix,
                productAttSelLengthImg: prefix + "product_att_sel_length_img",
                productAttSelDoneBlock: prefix + "product_att_sel_done" + postfix,
                productAttSelDoneBtnBlock: prefix + "product_att_sel_done_btn" + postfix,
                productAttSelDoneBtnTextBlock: prefix + "product_att_sel_done_btn_text" + postfix,
                productAttSelDoneBtnText: prefix + "product_att_sel_done_btn_text"
            },
            dom: {
                sidebarModalBlock: ["sidebarHeaderBlock", "sidebarCheckoutBlock", "sidebarCartAddedBlock", "sidebarRecommendedBlock"],
                sidebarHeaderBlock: ["sidebarHeaderContinueBlock", "sidebarHeaderTitleBlock", "sidebarHeaderItemBlock"],
                sidebarHeaderContinueBlock: ["sidebarHeaderContinueImgBlock", "sidebarHeaderContinueTextBlock"],
                sidebarHeaderContinueImgBlock: ["sidebarHeaderContinueImg"],
                sidebarHeaderContinueTextBlock: ["sidebarHeaderContinueText"],
                sidebarHeaderTitleBlock: ["sidebarHeaderTitleTextBlock"],
                sidebarHeaderTitleTextBlock: ["sidebarHeaderTitleText"],
                sidebarHeaderItemBlock: ["sidebarHeaderItemCountBlock"],
                sidebarHeaderItemTextBlock: ["sidebarHeaderItemText"],
                sidebarHeaderItemCountBlock: ["sidebarHeaderItemCountTitleBlock", "sidebarHeaderItemCountTextBlock"],
                sidebarHeaderItemCountTitleBlock: ["sidebarHeaderItemCountTitle"],
                sidebarHeaderItemCountTextBlock: ["sidebarHeaderItemCountText", "sidebarHeaderItemCountTextTooltip"],
                sidebarCartAddedBlock: ["sidebarCartAddedProductsLeftBtnBlock", "sidebarCartAddedProductsBlock", "sidebarCartAddedProductsRightBtnBlock"],
                sidebarCartAddedProductsBlock: ["sidebarCartAddedProductBlock"],
                sidebarCartAddedProductsLeftBtnBlock: ["sidebarCartAddedProductsLeftBtnImgBlock"],
                sidebarCartAddedProductsLeftBtnImgBlock: ["sidebarCartAddedProductsLeftBtnImg"],
                sidebarCartAddedProductsRightBtnBlock: ["sidebarCartAddedProductsRightBtnImgBlock"],
                sidebarCartAddedProductsRightBtnImgBlock: ["sidebarCartAddedProductsRightBtnImg"],
                sidebarCartAddedProductBlock: ["sidebarCartAddedProductImgBlock", "sidebarCartAddedProductDescBlock"],
                sidebarCartAddedProductImgBlock: ["sidebarCartAddedProductImg"],
                sidebarCartAddedProductDescBlock: ["sidebarCartAddedProductDescTitleBlock", "sidebarCartAddedProductDescPriceBlock"],
                sidebarCartAddedProductDescTitleBlock: ["sidebarCartAddedProductDescTitle"],
                sidebarCartAddedProductDescPriceBlock: ["sidebarCartAddedProductDescPriceRegularBlock", "sidebarCartAddedProductDescPriceSpecialBlock"],
                sidebarCartAddedProductDescPriceRegularBlock: ["sidebarCartAddedProductDescPriceRegular"],
                sidebarCartAddedProductDescPriceSpecialBlock: ["sidebarCartAddedProductDescPriceSpecial", "sidebarCartAddedProductDescPriceSpecialMsg"],
                sidebarRecommendedBlock: ["sidebarRecommendedTitleBlock", "sidebarRecommendAllItemsBlock"],
                sidebarRecommendedTitleBlock: ["sidebarRecommendedTitleTextBlock"],
                sidebarRecommendedTitleTextBlock: ["sidebarRecommendedTitleText"],
                sidebarRecommendAllItemsBlock: ["sidebarRecommendAllItemsTitleBlock", "sidebarRecommendAllItemsListingBlock"],
                sidebarRecommendAllItemsTitleBlock: ["sidebarRecommendAllItemsTitleTextBlock", "sidebarRecommendAllItemsTitleBtnBlock"],
                sidebarRecommendAllItemsTitleTextBlock: ["sidebarRecommendAllItemsTitleText"],
                sidebarRecommendAllItemsTitleBtnBlock: ["sidebarRecommendAllItemsTitleBtnImgBlock"],
                sidebarRecommendAllItemsTitleBtnImgBlock: ["sidebarRecommendAllItemsTitleBtnImg"],
                sidebarRecommendAllItemsListingBlock: ["sidebarRecommendItemsListingLeftBtnBlock", "sidebarRecommendItemsListingProductsListBlock", "sidebarRecommendItemsListingRightBtnBlock"],
                sidebarRecommendItemsListingLeftBtnBlock: ["sidebarRecommendItemsListingLeftBtnImgBlock"],
                sidebarRecommendItemsListingLeftBtnImgBlock: ["sidebarRecommendItemsListingLeftBtnImg"],
                sidebarRecommendItemsListingProductsListBlock: ["productBlock"],
                sidebarRecommendItemsListingRightBtnBlock: ["sidebarRecommendItemsListingRightBtnImgBlock"],
                sidebarRecommendItemsListingRightBtnImgBlock: ["sidebarRecommendItemsListingRightBtnImg"],
                sidebarCheckoutBlock: ["sidebarCheckoutContinueBlock", "sidebarCheckoutBasketBlock"],
                sidebarCheckoutContinueBlock: ["sidebarCheckoutContinueBtnBlock"],
                sidebarCheckoutContinueBtnBlock: ["sidebarCheckoutContinueBtnTextBlock"],
                sidebarCheckoutContinueBtnTextBlock: ["sidebarCheckoutContinueBtnText"],
                sidebarCheckoutBasketBlock: ["sidebarCheckoutBasketBtnBlock"],
                sidebarCheckoutBasketBtnBlock: ["sidebarCheckoutBasketBtnTextBlock"],
                sidebarCheckoutBasketBtnTextBlock: ["sidebarCheckoutBasketBtnText", "sidebarMobileHeaderItemCountText"],

                productBlock: ["productImgBlock", "productDescBlock", "productAttSelBlock"],
                productImgBlock: ["productImg", "productImgLink"],
                productDescBlock: ["productTitleBlock", "productPriceBlock", "productPriceWorthBlock", "productPromoMsgBlock", "productAttBlock", "productQtyBlock", "productAddBlock"],
                productTitleBlock: ["productTitleTextBlock"],
                productTitleTextBlock: ["productTitleText", "productTitleTextLink"],
                productPriceBlock: ["productActivePriceBlock", "productRegularPriceBlock"],
                productActivePriceBlock: ["productActivePriceTextBlock"],
                productActivePriceTextBlock: ["productActivePriceText"],
                productRegularPriceBlock: ["productRegularPriceTextBlock"],
                productRegularPriceTextBlock: ["productRegularPriceText"],
                productPriceWorthBlock: ["productPriceWorthTextBlock"],
                productPriceWorthTextBlock: ["productPriceWorthText", "productPriceWorthTextMsg"],
                productPromoMsgBlock: ["productPromoMsgText"],
                productAttBlock: ["productAttColorBlock", "productAttSizeBlock", "productAttLengthBlock"],
                productAttColorBlock: ["productAttColorTitleBlock", "productAttColorImgBlock"],
                productAttColorTitleBlock: ["productAttColorTitleTextBlock"],
                productAttColorTitleTextBlock: ["productAttColorTitleText"],
                productAttColorImgBlock: ["productAttColorImg"],
                productAttSizeBlock: ["productAttSizeTitleBlock", "productAttSizeImgBlock"],
                productAttSizeTitleBlock: ["productAttSizeTitleTextBlock"],
                productAttSizeTitleTextBlock: ["productAttSizeTitleText"],
                productAttSizeImgBlock: ["productAttSizeImg"],
                productAttLengthBlock: ["productAttLengthTitleBlock", "productAttLengthImgBlock"],
                productAttLengthTitleBlock: ["productAttLengthTitleTextBlock"],
                productAttLengthTitleTextBlock: ["productAttLengthTitleText"],
                productAttLengthImgBlock: ["productAttLengthImg"],
                productQtyBlock: ["productQtyDownBlock", "productQtyInputBlock", "productQtyUpBlock"],
                productQtyDownBlock: ["productQtyDownBtnBlock"],
                productQtyDownBtnBlock: ["productQtyDownBtn"],
                productQtyInputBlock: ["productQtyInputTextBlock"],
                productQtyInputTextBlock: ["productQtyInputText"],
                productQtyUpBlock: ["productQtyUpBtnBlock"],
                productQtyUpBtnBlock: ["productQtyUpBtn"],
                productAddBlock: ["productAddTextBlock", "productAddImgBlock"],
                productAddTextBlock: ["productAddText"],
                productAddImgBlock: ["productAddImg"],
                productAttSelBlock: ["productAttSelColorBlock", "productAttSelSizeBlock", "productAttSelLengthBlock", "productAttSelDoneBlock"],
                productAttSelColorBlock: ["productAttSelColorTitleBlock", "productAttSelColorListBlock"],
                productAttSelColorTitleBlock: ["productAttSelColorTitleTextBlock"],
                productAttSelColorTitleTextBlock: ["productAttSelColorTitleText"],
                productAttSelColorListBlock: ["productAttSelColorImgBlock"],
                productAttSelColorImgBlock: ["productAttSelColorImg", "productAttSelColorImgTooltip"],
                productAttSelSizeBlock: ["productAttSelSizeTitleBlock", "productAttSelSizeListBlock"],
                productAttSelSizeTitleBlock: ["productAttSelSizeTitleTextBlock"],
                productAttSelSizeTitleTextBlock: ["productAttSelSizeTitleText"],
                productAttSelSizeListBlock: ["productAttSelSizeImgBlock"],
                productAttSelSizeImgBlock: ["productAttSelSizeImg"],
                productAttSelLengthBlock: ["productAttSelLengthTitleBlock", "productAttSelLengthListBlock"],
                productAttSelLengthTitleBlock: ["productAttSelLengthTitleTextBlock"],
                productAttSelLengthTitleTextBlock: ["productAttSelLengthTitleText"],
                productAttSelLengthListBlock: ["productAttSelLengthImgBlock"],
                productAttSelLengthImgBlock: ["productAttSelLengthImg"],
                productAttSelDoneBlock: ["productAttSelDoneBtnBlock"],
                productAttSelDoneBtnBlock: ["productAttSelDoneBtnTextBlock"],
                productAttSelDoneBtnTextBlock: ["productAttSelDoneBtnText"]
            },
        },
        
        tickbox: {
            className: {
                productBlock: prefix + "product" + postfix,
                productImgBlock: prefix + "product_img" + postfix,
                productImg: prefix + "product_img",
                productImgLink: prefix + "product_img_link",
                productDescBlock: prefix + "product_desc" + postfix,
                productTitleBlock: prefix + "product_desc_title" + postfix,
                productTitleTextBlock: prefix + "product_desc_title_text" + postfix,
                productTitleText: prefix + "product_desc_title_text",
                productTitleTextLink: prefix + "product_title_text_link",
                productPriceBlock: prefix + "product_desc_price" + postfix,
                productActivePriceBlock: prefix + "product_desc_price_active" + postfix,
                productActivePriceTextBlock: prefix + "product_desc_price_active_text" + postfix,
                productActivePriceText: prefix + "product_desc_price_active_text",
                productRegularPriceBlock: prefix + "product_desc_price_regular" + postfix,
                productRegularPriceTextBlock: prefix + "product_desc_price_regular_text" + postfix,
                productRegularPriceText: prefix + "product_desc_price_regular_text",
                productPriceWorthBlock: prefix + "product_desc_price_worth" + postfix,
                productPriceWorthTextBlock: prefix + "product_desc_price_worth_text" + postfix,
                productPriceWorthText: prefix + "product_desc_price_worth_text",
                productPriceWorthTextMsg: prefix + "product_desc_price_worth_text_msg",
                productPromoMsgBlock: prefix + "promo" + postfix,
                productPromoMsgText: prefix + "promo_text",
                productAttBlock: prefix + "product_desc_att" + postfix,
                productAttColorBlock: prefix + "product_desc_att_color" + postfix,
                productAttColorTitleBlock: prefix + "product_desc_att_color_title" + postfix,
                productAttColorTitleTextBlock: prefix + "product_desc_att_color_title_text" + postfix,
                productAttColorTitleText: prefix + "product_desc_att_color_title_text",
                productAttColorImgBlock: prefix + "product_desc_att_color_img" + postfix,
                productAttColorImg: prefix + "product_desc_att_color_img",
                productAttSizeBlock: prefix + "product_desc_att_size" + postfix,
                productAttSizeTitleBlock: prefix + "product_desc_att_size_title" + postfix,
                productAttSizeTitleTextBlock: prefix + "product_desc_att_size_title_text" + postfix,
                productAttSizeTitleText: prefix + "product_desc_att_size_title_text",
                productAttSizeImgBlock: prefix + "product_desc_att_size_img" + postfix,
                productAttSizeImg: prefix + "product_desc_att_size_img",
                productAttLengthBlock: prefix + "product_desc_att_length" + postfix,
                productAttLengthTitleBlock: prefix + "product_desc_att_length_title" + postfix,
                productAttLengthTitleTextBlock: prefix + "product_desc_att_length_title_text" + postfix,
                productAttLengthTitleText: prefix + "product_desc_att_length_title_text",
                productAttLengthImgBlock: prefix + "product_desc_att_length_img" + postfix,
                productAttLengthImg: prefix + "product_desc_att_length_img",
                productQtyBlock: prefix + "product_desc_qty" + postfix,
                productQtyDownBlock: prefix + "product_desc_qty_down" + postfix,
                productQtyDownBtnBlock: prefix + "product_desc_qty_down_btn" + postfix,
                productQtyDownBtn: prefix + "product_desc_qty_down_btn",
                productQtyInputBlock: prefix + "product_desc_qty_input" + postfix,
                productQtyInputTextBlock: prefix + "product_desc_qty_input_text" + postfix,
                productQtyInputText: prefix + "product_desc_qty_input_text",
                productQtyInput: prefix + "product_desc_qty_input",
                productQtyUpBlock: prefix + "product_desc_qty_up" + postfix,
                productQtyUpBtnBlock: prefix + "product_desc_qty_up_btn" + postfix,
                productQtyUpBtn: prefix + "product_desc_qty_up_btn",
                productAddBlock: prefix + "product_desc_add" + postfix,
                productAddTextBlock: prefix + "product_desc_add_text" + postfix,
                productAddText: prefix + "product_desc_add_text",
                productAddImgBlock: prefix + "product_desc_add_img" + postfix,
                productAddImg: prefix + "product_desc_add_img",
                productAttSelBlock: prefix + "product_att_sel" + postfix,
                productAttSelColorBlock: prefix + "product_att_sel_color" + postfix,
                productAttSelColorTitleBlock: prefix + "product_att_sel_color_title" + postfix,
                productAttSelColorTitleTextBlock: prefix + "product_att_sel_color_title_text" + postfix,
                productAttSelColorTitleText: prefix + "product_att_sel_color_title_text",
                productAttSelColorListBlock: prefix + "product_att_sel_color_list" + postfix,
                productAttSelColorImgBlock: prefix + "product_att_sel_color_img" + postfix,
                productAttSelColorImg: prefix + "product_att_sel_color_img",
                productAttSelColorImgTooltip: prefix + "product_att_sel_color_img_tooltip",
                productAttSelSizeBlock: prefix + "product_att_sel_size" + postfix,
                productAttSelSizeTitleBlock: prefix + "product_att_sel_size_title" + postfix,
                productAttSelSizeTitleTextBlock: prefix + "product_att_sel_size_title_text" + postfix,
                productAttSelSizeTitleText: prefix + "product_att_sel_size_title_text",
                productAttSelSizeListBlock: prefix + "product_att_sel_size_list" + postfix,
                productAttSelSizeImgBlock: prefix + "product_att_sel_size_img" + postfix,
                productAttSelSizeImg: prefix + "product_att_sel_size_img",
                productAttSelLengthBlock: prefix + "product_att_sel_length" + postfix,
                productAttSelLengthTitleBlock: prefix + "product_att_sel_length_title" + postfix,
                productAttSelLengthTitleTextBlock: prefix + "product_att_sel_length_title_text" + postfix,
                productAttSelLengthTitleText: prefix + "product_att_sel_length_title_text",
                productAttSelLengthListBlock: prefix + "product_att_sel_length_list" + postfix,
                productAttSelLengthImgBlock: prefix + "product_att_sel_length_img" + postfix,
                productAttSelLengthImg: prefix + "product_att_sel_length_img",
                productAttSelDoneBlock: prefix + "product_att_sel_done" + postfix,
                productAttSelDoneBtnBlock: prefix + "product_att_sel_done_btn" + postfix,
                productAttSelDoneBtnTextBlock: prefix + "product_att_sel_done_btn_text" + postfix,
                productAttSelDoneBtnText: prefix + "product_att_sel_done_btn_text"
            },
            dom: {
                productBlock: ["productImgBlock", "productDescBlock", "productAttSelBlock"],
                productImgBlock: ["productImg", "productImgLink"],
                productDescBlock: ["productTitleBlock", "productPriceBlock", "productPriceWorthBlock", "productPromoMsgBlock", "productAttBlock", "productQtyBlock", "productAddBlock"],
                productTitleBlock: ["productTitleTextBlock"],
                productTitleTextBlock: ["productTitleText", "productTitleTextLink"],
                productPriceBlock: ["productActivePriceBlock", "productRegularPriceBlock"],
                productActivePriceBlock: ["productActivePriceTextBlock"],
                productActivePriceTextBlock: ["productActivePriceText"],
                productRegularPriceBlock: ["productRegularPriceTextBlock"],
                productRegularPriceTextBlock: ["productRegularPriceText"],
                productPriceWorthBlock: ["productPriceWorthTextBlock"],
                productPriceWorthTextBlock: ["productPriceWorthText", "productPriceWorthTextMsg"],
                productPromoMsgBlock: ["productPromoMsgText"],
                productAttBlock: ["productAttColorBlock", "productAttSizeBlock", "productAttLengthBlock"],
                productAttColorBlock: ["productAttColorTitleBlock", "productAttColorImgBlock"],
                productAttColorTitleBlock: ["productAttColorTitleTextBlock"],
                productAttColorTitleTextBlock: ["productAttColorTitleText"],
                productAttColorImgBlock: ["productAttColorImg"],
                productAttSizeBlock: ["productAttSizeTitleBlock", "productAttSizeImgBlock"],
                productAttSizeTitleBlock: ["productAttSizeTitleTextBlock"],
                productAttSizeTitleTextBlock: ["productAttSizeTitleText"],
                productAttSizeImgBlock: ["productAttSizeImg"],
                productAttLengthBlock: ["productAttLengthTitleBlock", "productAttLengthImgBlock"],
                productAttLengthTitleBlock: ["productAttLengthTitleTextBlock"],
                productAttLengthTitleTextBlock: ["productAttLengthTitleText"],
                productAttLengthImgBlock: ["productAttLengthImg"],
                productQtyBlock: ["productQtyDownBlock", "productQtyInputBlock", "productQtyUpBlock"],
                productQtyDownBlock: ["productQtyDownBtnBlock"],
                productQtyDownBtnBlock: ["productQtyDownBtn"],
                productQtyInputBlock: ["productQtyInputTextBlock"],
                productQtyInputTextBlock: ["productQtyInputText"],
                productQtyUpBlock: ["productQtyUpBtnBlock"],
                productQtyUpBtnBlock: ["productQtyUpBtn"],
                productAddBlock: ["productAddTextBlock", "productAddImgBlock"],
                productAddTextBlock: ["productAddText"],
                productAddImgBlock: ["productAddImg"],
                productAttSelBlock: ["productAttSelColorBlock", "productAttSelSizeBlock", "productAttSelLengthBlock", "productAttSelDoneBlock"],
                productAttSelColorBlock: ["productAttSelColorTitleBlock", "productAttSelColorListBlock"],
                productAttSelColorTitleBlock: ["productAttSelColorTitleTextBlock"],
                productAttSelColorTitleTextBlock: ["productAttSelColorTitleText"],
                productAttSelColorListBlock: ["productAttSelColorImgBlock"],
                productAttSelColorImgBlock: ["productAttSelColorImg", "productAttSelColorImgTooltip"],
                productAttSelSizeBlock: ["productAttSelSizeTitleBlock", "productAttSelSizeListBlock"],
                productAttSelSizeTitleBlock: ["productAttSelSizeTitleTextBlock"],
                productAttSelSizeTitleTextBlock: ["productAttSelSizeTitleText"],
                productAttSelSizeListBlock: ["productAttSelSizeImgBlock"],
                productAttSelSizeImgBlock: ["productAttSelSizeImg"],
                productAttSelLengthBlock: ["productAttSelLengthTitleBlock", "productAttSelLengthListBlock"],
                productAttSelLengthTitleBlock: ["productAttSelLengthTitleTextBlock"],
                productAttSelLengthTitleTextBlock: ["productAttSelLengthTitleText"],
                productAttSelLengthListBlock: ["productAttSelLengthImgBlock"],
                productAttSelLengthImgBlock: ["productAttSelLengthImg"],
                productAttSelDoneBlock: ["productAttSelDoneBtnBlock"],
                productAttSelDoneBtnBlock: ["productAttSelDoneBtnTextBlock"],
                productAttSelDoneBtnTextBlock: ["productAttSelDoneBtnText"]

            }
        },
    }

    /**
     * Function returns classlist to query in querySelector and querySelectorAll
     * @param {*} className
     */
    function getSelectorClassName(classNames, className) {
        return "." + classNames[className];
    }

    function getProductIdFromWebpage() {
        // return "1915087847470";
        // return "1720147214382";
        var el = document.querySelector('.clearfix.product_form.init.smart-payment-button--true.product_form_options.product_form--swatches.is-visible');
        // var pid = (el != null) ? el.getAttribute('data-product-id') : "1915087847470";
        // var pid = (el != null) ? el.getAttribute('data-product-id') : "1791978569774";
        // var pid = (el != null) ? el.getAttribute('data-product-id') : "1720147214382";
        var pid = (el != null) ? el.getAttribute('data-product-id') : "1720551800878";
        var pid = (el != null) ? el.getAttribute('data-product-id') : "1718881878062";

        return pid || "";
    }

    var inc = {};

    function detectPageType() {
        inc.deviceType = (window.innerWidth > 768) ? "desktop" : "mobile";
        var el = document.querySelector('.clearfix.product_form.init.smart-payment-button--true.product_form_options.product_form--swatches.is-visible')
        if ((el != null) && (el != undefined)) {
            inc.pageType = "pdp";
            logger(inc);
            createPDPBlock();
            setTimeout(function () {
                buildCrawlDataObj()
            }, 2000)
            return;
        }else if(document.querySelector('.clearfix.product_form.product_form--swatches.is-visible') != null){
            inc.pageType = "pdp";
            logger(inc);
            createPDPBlock();
            setTimeout(function () {
                buildCrawlDataObj()
            }, 2000)
            return;
        }
        el = document.querySelector('.shopify-section.cart-section');

        if ((el != null) && (el != undefined)) {
            if (document.querySelector('.container.cart__empty-cart-message.is-hidden') != null) {
                inc.pageType = "cartPage";
                logger(inc);
                createAMBlock();
                return;
            }
        }

        // if(document.querySelector('.product-wrap') != null){
        //     inc.pageType = "productList";
        //     logger(inc);
        //     createSidebarBlock();
        //     return;
        // }
        // createPDPBlock()
        // createSidebarBlock();
        // createAMBlock();
        inc.pageType = "other";
        logger(inc);
        // return "other";
        return;
    }
    function buildCrawlDataObj() {
        var el = document.querySelector('.clearfix.product_form.init.smart-payment-button--true.product_form_options.product_form--swatches.is-visible')
        if (el != null) {
            if(JSON.parse(el.getAttribute('data-product')) != undefined){
                var getdatael = JSON.parse(el.getAttribute('data-product')).tags
                var genderinc = ""
                for(var g=0;g<getdatael.length;g++){
                    if(getdatael[g].indexOf('GenderDescription') >= 0){
                        genderinc = getdatael[g].split("::")[1]
                    }
                }
            }
            var pid = el.getAttribute('data-product-id');
            var swatchOptions = document.querySelector('.swatch_options');
            if (swatchOptions != null || swatchOptions != undefined) {
                var swatchChildrens = swatchOptions.children;
            }
            var attObjArray = [];

            if (document.querySelector('.description') != "") {
                var descr = document.querySelector('.description').innerHTML
            } else {
                var descr = ""
            }
            //document.querySelectorAll('form[action="/cart/add"] ')[0].querySelectorAll('.swatch .swatch-element.color.available')
            if (swatchChildrens != undefined || swatchChildrens != null) {
                for (var i = 0; i < swatchChildrens.length; i++) {
                    var child = swatchChildrens[i];
                    if (child.getAttribute('data-option-index') == 0) {
                        var swatchDivs = child.querySelectorAll('div');
                        for (var j = 0; j < swatchDivs.length; j++) {
                            var div = swatchDivs[j];
                            //for (div of swatchDivs) {
                            if (div.getAttribute('data-value') != undefined) {

                                var colorObj = {
                                    backgroundColor: div.querySelector('label').style.backgroundColor,
                                    backgroundImage: div.querySelector('img').src,
                                    text: div.getAttribute('data-value')
                                }
                                var selcolr = ""
                                if(div.querySelector('label').getAttribute('data-image') != null){
                                    if (div.querySelector('label').getAttribute('data-image').split('products')[1] != undefined) {
                                        selcolr = div.querySelector('label').getAttribute('data-image').split('products')[1].split('_')[0]
                                    }
                                }
                                var otherimglist = document.querySelectorAll('.product_gallery_nav div img')
                                var other_image_lists = [];
                                if (otherimglist[0] != undefined) {
                                    var other_imag = otherimglist;
                                    var ccc = 0
                                    for (var k = 0; k < other_imag.length; k++) {
                                        if (other_imag[k].src.indexOf(selcolr) >= 0) {
                                            if (ccc < 4) {
                                                var other_img = other_imag[k].src;
                                                if (other_image_lists.indexOf(other_img) == -1) {
                                                    other_image_lists.push(other_img);
                                                }
                                                ccc++
                                            }
                                        }
                                    }
                                }
                                // logger(colorObj);
                                var childid = ""
                                if(div.getAttribute('data-id') != null){
                                    childid = div.getAttribute('data-id')
                                }else if(div.previousElementSibling != null){
                                    if(div.previousElementSibling.getAttribute('data-image') != null){
                                        var splt=div.previousElementSibling.getAttribute('data-image').split('?v=')[1]
                                    }else if(div.querySelector('.swatch__image ') != null){
                                        var splt=div.querySelector('.swatch__image ').src.split('?v=')[1] 
                                    }
                                    childid = splt
                                }
                                //swatch__image 
                                var attObj = {
                                    "child_product_id": childid,
                                    "attribute_code": "Colour",
                                    "attribute_label": "COLOR",
                                    "attribute_id": "1",
                                    "option_image_url": colorObj.backgroundImage,
                                    "option_id": "1",
                                    "option_text": colorObj.text,
                                    "color_code": colorObj.backgroundColor,
                                    "image_url": other_image_lists
                                }

                                attObjArray.push(attObj);
                            }
                        }
                    }
                }
            }

            
            // sendCrawlData({ "pid": pid, "attData": attObjArray });
            sendCrawlData({
                "pid": pid,
                "desc": descr,
                "attData": attObjArray,
                "genderinc" : genderinc
            });
        }else if(document.querySelector('.clearfix.product_form.product_form--swatches.is-visible') != null){
            var el=document.querySelector('.clearfix.product_form.product_form--swatches.is-visible')
            if(JSON.parse(el.getAttribute('data-product')) != undefined){
                var getdatael = JSON.parse(el.getAttribute('data-product')).tags
                var genderinc = ""
                for(var g=0;g<getdatael.length;g++){
                    if(getdatael[g].indexOf('GenderDescription') >= 0){
                        genderinc = getdatael[g].split("::")[1]
                    }
                }
            }
            var pid = el.getAttribute('data-product-id');
            if (document.querySelector('.description') != "") {
                var descr = document.querySelector('.description').innerHTML
            } else {
                var descr = ""
            }
            var attObjArray = [];
            sendCrawlData({
                "pid": pid,
                "desc": descr,
                "attData": attObjArray,
                "genderinc" : genderinc
            });
        }
    }

    function sendCrawlData(dataObj) {
        if (window.location.host == "uspoloassn.com" && document.querySelector('html[lang="en"]') != null) {
            var eventData = {
                "event_data": {
                    "product_id": dataObj["pid"],
                    "product_attribute_data": dataObj["attData"],
                    "description": encodeURI(dataObj["desc"]),
                    "field1": dataObj["genderinc"],
                    // "other_image_list": dataObj["otherimglist"],
                },
                "event_type": "product_page_visit",
                "method": "track",
                "token": "usPA9"
            };

            var crawlData = {
                "eventData": btoa(JSON.stringify(eventData)),
                "uri": document.location.href
            }

            var xhr = new XMLHttpRequest();
            var method = "POST";
            var url = "https://usagather.increasingly.com/ImportCrawledData";
            xhr.onreadystatechange = handleStateChange;

            xhr.open(method, url, true);
            xhr.setRequestHeader('Content-Type', 'application/json');

            function handleStateChange() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    // logger(xhr.responseText);
                }
            }
            xhr.send(JSON.stringify(crawlData));
        }

        // logger(crawlData);
        // logger(eventData);
    }
    // try {
    //     setTimeout(function () {
    //         buildCrawlDataObj()
    //     }, 3000)
    // } catch (err) {

    // }
    function get_discount_price(p_original_price, p_sale_price) {
        //Math.round(((p_original_price - p_sale_price) / p_original_price) * 100);
        return parseFloat(+p_original_price - +p_sale_price)
    }

    function get_discount_price_percentage(p_original_price, p_sale_price) {
        return Math.round(((p_original_price - p_sale_price) / p_original_price) * 100);
    }

    function createSidebarBlock() {
        if (document.querySelector('.inc_sidebar_modal_block')) {
            document.querySelector('.inc_sidebar_modal_block').remove()
        }
        var sbClassNames = uiConfig["sidebar"].className;
        var sbBlock = getElementChilds("sidebarModalBlock", "sidebar");
        sbBlock.style.display = "none";
        sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarHeaderBlock")).setAttribute("id", "inc_sb_header_block");
       
        Array.prototype.forEach.call(sbBlock.querySelectorAll(getSelectorClassName(sbClassNames, "sidebarCartAddedProductBlock")), function (block) {
            block.parentNode.removeChild(block);
        });
        Array.prototype.forEach.call(sbBlock.querySelectorAll(getSelectorClassName(sbClassNames, "productBlock")), function (block) {
            block.parentNode.removeChild(block);
        });

        var elHeaderContinueText = sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarHeaderContinueText"));
        var elHeaderItemBlock = sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarHeaderItemBlock"));
        var elHeaderItemCountTitle = sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarHeaderItemCountTitle"));
        var elHeaderItemCountTextBlock = sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarHeaderItemCountTextBlock"));
        var elHeaderItemCountText = sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarHeaderItemCountText"));
        var elHeaderItemCountTextTooltip = sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarHeaderItemCountTextTooltip"));
        var elRecommendedTitleTextBlock = sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarRecommendedTitleTextBlock"));
        var elRecommendedTitleText = sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarRecommendedTitleText"));
        var elContinueBtnText = sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarCheckoutContinueBtnText"));
        var elCheckoutBtnText = sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarCheckoutBasketBtnText"));
        var sidebarMobileHeaderItemCountText = sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarMobileHeaderItemCountText"));
        

        if (window.innerWidth < 820) {
            var elRecoBlock = sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarRecommendedBlock"));
            var elCheckoutBlock = sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarCheckoutBlock"));
            elRecoBlock.parentNode.insertBefore(elCheckoutBlock, elRecoBlock);
        }

        elHeaderContinueText.innerText = "Back";
        elHeaderItemBlock.addEventListener("click", function () {
            window.location.href = "https://uspoloassn.com/cart";
        });
        if (Object.keys(incDataStore.bundleCartProducts).length > 1) {
            elHeaderItemCountTitle.innerText = "Items added to your bag";
        } else {
            elHeaderItemCountTitle.innerText = "Item added to your bag";
        }
        elHeaderItemCountText.innerText = Object.keys(incDataStore.bundleCartProducts).length || 0;
        sidebarMobileHeaderItemCountText.innerText = Object.keys(incDataStore.bundleCartProducts).length || 0;
        elHeaderItemCountTextTooltip.innerText = "ADDED";
        elHeaderItemCountTextTooltip.style.display = "none";
        elRecommendedTitleText.innerText = "Other Customers Also Bought";
        elContinueBtnText.innerText = "Continue Shopping";
        elCheckoutBtnText.innerText = "View Bag";

        var siteWidePromo = document.createElement('div')
        // siteWidePromo.innerText = "Back to School Buy More Save More Sale"
        siteWidePromo.classList.add("inc_promo_sitewide")

        var sitePromoMain = document.createElement('div')
        var sitePromoSpan1 = document.createElement('span')
        var sitePromoSpan2 = document.createElement('span')
        var sitePromoSpan3 = document.createElement('span')
        sitePromoMain.classList.add("inc_promo_main");
        sitePromoSpan1.innerHTML = ''//"Extra 20% off $100+  Use code: <span>GIFT20</span>";
        sitePromoSpan2.innerHTML = ''//"Extra 25% off $150+ Use code: <span>GIFT25</span>";
        sitePromoSpan3.innerHTML = ''//"Extra 30% off $200+ Use code: <span>GIFT30</span>";
        sitePromoSpan1.classList.add("PromoSpan1");
        sitePromoSpan2.classList.add("PromoSpan2");
        sitePromoSpan3.classList.add("PromoSpan3");
        // sitePromoMain.appendChild(sitePromoSpan1);
        // sitePromoMain.appendChild(sitePromoSpan2);
        // sitePromoMain.appendChild(sitePromoSpan3);
        // elRecommendedTitleTextBlock.appendChild(siteWidePromo)
        // elRecommendedTitleTextBlock.appendChild(sitePromoMain);

        var productListObj = incDataStore.dataStoreObj;

        // var productListArray = Object.keys(productListObj);

        var productListArray = incDataStore.bundleProductsArray;

        var sbProductListBlock = sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarRecommendItemsListingProductsListBlock"));

        for (var i = 5; i < productListArray.length; i++) {
            var productBlock = createProductBlock(productListArray[i], "sidebar");

            productBlock.querySelector(getSelectorClassName(sbClassNames, "productAddBlock")).addEventListener("click", function (e) {
                logger("clicked");

                var productBlockNode = this.parentNode.parentNode;

                logger(productBlockNode);
                var sku = productBlockNode.getAttribute('data-sku');
                var findObj = new FindObj();
                findObj["sku"] = sku;

                var qty = productBlockNode.querySelector(getSelectorClassName(sbClassNames, "productQtyInputText")).querySelector('input').value;
               

                logger(qty);
                logger(findObj);
                addProductToCart(findObj, qty, "pdp", productBlockNode);
            });

            sbProductListBlock.appendChild(productBlock);
        }

        sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarHeaderContinueBlock")).addEventListener("click", function () {
            sbBlock.style.display = "none";
            hideSidebar();
        });

        sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarCheckoutContinueBlock")).addEventListener("click", function () {
            sbBlock.style.display = "none";
            hideSidebar();
        });

        sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarCheckoutBasketBlock")).addEventListener("click", function () {
            
            window.location.href = "https://uspoloassn.com/cart";
        });

        var productBlocks = "";
        var sliderBtnCounter = 0;

        sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarCartAddedProductsRightBtnBlock")).addEventListener("click", function () {
            productBlocks = sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarCartAddedProductsBlock"))
                .querySelectorAll(getSelectorClassName(sbClassNames, "sidebarCartAddedProductBlock"));
           
            if (sliderBtnCounter > productBlocks.length - 2) {
                sliderBtnCounter--;
                return;
            }
            if (productBlocks[sliderBtnCounter] != null) {
                productBlocks[sliderBtnCounter].style.display = "none";
                sliderBtnCounter++;
            }
        });

        sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarCartAddedProductsLeftBtnBlock")).addEventListener("click", function () {
            productBlocks = sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarCartAddedProductsBlock"))
                .querySelectorAll(getSelectorClassName(sbClassNames, "sidebarCartAddedProductBlock"));
            logger(sliderBtnCounter);
            if (productBlocks[sliderBtnCounter] != null) {
                productBlocks[sliderBtnCounter].style.display = "flex";
                (sliderBtnCounter <= 0) ? 0: sliderBtnCounter--;
                // logger("clicked");
            }
        });

        var body = document.querySelector('body');
        body.appendChild(sbBlock);
        var elSideBarOverlayBlock = document.createElement('div');
        elSideBarOverlayBlock.setAttribute("class", "inc_sidebar_overlay_block");
        elSideBarOverlayBlock.addEventListener("click", function () {
            hideSidebar();
        });
        elSideBarOverlayBlock.style.display = "none";
        body.appendChild(elSideBarOverlayBlock);
    }

    function updateSidebarBlock(tickbox) {
        var sbClassNames = uiConfig["sidebar"].className;
        var sbBlock = document.querySelector(getSelectorClassName(sbClassNames, "sidebarModalBlock"));
        var sbCartBlock = sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarCartAddedProductsBlock"));
        var elHeaderItemCountText = sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarHeaderItemCountText"));
        var elHeaderItemCountTextTooltip = sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarHeaderItemCountTextTooltip"));
        var elHeaderItemCountTitle = sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarHeaderItemCountTitle"));
        var sidebarMobileHeaderItemCountText = sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarMobileHeaderItemCountText"));
        // window.location.href = "#inc_sb_header_block";
        
        if(tickbox == "tickbox"){
            var bundleCartProductsArray = Object.keys(incDataStore.tickboxProducts);
        }else{
            sbCartBlock.innerHTML = "";
            var bundleCartProductsArray = Object.keys(incDataStore.bundleCartProducts);
        }
        

        if (bundleCartProductsArray.length > 1) {
            elHeaderItemCountTitle.innerText = "Items added to your bag";
        } else {
            elHeaderItemCountTitle.innerText = "Item added to your bag";
        }
        if(tickbox == "tickbox"){
            elHeaderItemCountText.innerText = (bundleCartProductsArray.length) + (1);
            sidebarMobileHeaderItemCountText.innerText = (bundleCartProductsArray.length) + (1)
        }else{
            elHeaderItemCountText.innerText = bundleCartProductsArray.length;
            sidebarMobileHeaderItemCountText.innerText = bundleCartProductsArray.length;
        }
        elHeaderItemCountTextTooltip.style.display = "block";
        setTimeout(function () {
            elHeaderItemCountTextTooltip.style.display = "none";
        }, 2000);

        bundleCartProductsArray.forEach(function (productSKU) {
            var findObj = new FindObj();
            findObj["sku"] = productSKU;
            var productObj = getProductBySKU(findObj);
            var productBlock = getElementChilds("sidebarCartAddedProductBlock", "sidebar");

            var elImg = productBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarCartAddedProductImg"));
            var elProductTitleText = productBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarCartAddedProductDescTitle"));
            var elProductPriceRegularText = productBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarCartAddedProductDescPriceRegular"));
            var elProductPriceSpecialText = productBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarCartAddedProductDescPriceSpecial"));

            var elImgTag = generateHTMLTags('img', {
                src: productObj.imageURL
            });
            elImgTag.setAttribute('onerror', "this.src='" + noimg + "'");
            elImg.appendChild(elImgTag);

            elProductTitleText.innerText = productObj.name;
            elProductPriceRegularText.innerText = currencySymbol + productObj.regularPrice + " " + currencyName;
            elProductPriceSpecialText.innerText = currencySymbol + productObj.activePrice + " " + currencyName;
            sbCartBlock.appendChild(productBlock);
        });
    }

    function showSidebar() {

        var cblocked_scrolls = setInterval(function () {
            if (document.querySelector('body.blocked-scroll') != null) {
                clearInterval(cblocked_scrolls)
                document.querySelector('body').classList.remove('blocked-scroll')
            }
        })
        // document.querySelector('body').setAttribute('style','position: relative;overflow: auto;pointer-events: auto;')
        var elSidebarOverlay = document.querySelector(".inc_sidebar_overlay_block");
        if(elSidebarOverlay != null){
            elSidebarOverlay.style.display = "block";
        }
        document.querySelector(getSelectorClassName(uiConfig["sidebar"].className, "sidebarModalBlock")).style.display = "block";
        var body = document.querySelector("body");
        body.style.overflowY = "hidden";
        window.location.href = "#inc_sb_header_block";
        document.querySelector('body').classList.add('inc_open_sidebar');
        document.querySelector('html').classList.add('inc_open_sidebar');
        
        if (document.querySelector('.inc_recommend_items_listing_products_list_block').innerText == "") {
            if (document.querySelector('.inc_sidebar_modal_block') != null) {
                document.querySelector('.inc_sidebar_modal_block').setAttribute('id', 'inc_empty_sidebar')
                document.querySelector('.inc_sidebar_modal_block').classList.add("inc_empty_sidebar")
            }
        }
    }

    function hideSidebar() {
        // document.querySelector('body').setAttribute('style','')
        document.querySelector('body').classList.remove('blocked-scroll')
        var elSidebarOverlay = document.querySelector(".inc_sidebar_overlay_block");
        elSidebarOverlay.style.display = "none";
        document.querySelector(getSelectorClassName(uiConfig["sidebar"].className, "sidebarModalBlock")).style.display = "none";
        var body = document.querySelector("body");
        body.style.overflowY = "";
        window.history.pushState("", document.title, window.location.pathname + window.location.search);
        // window.location.hash = "";
        document.querySelector('.inc_sidebar_modal_block').classList.remove('inc_empty_sidebar');
        document.querySelector('body').classList.remove('inc_open_sidebar');
        document.querySelector('html').classList.remove('inc_open_sidebar');
        window.location.reload();
    }

    function addProductToSidebarCart(findObj, qty,tickbox) {
        var sbClassNames = uiConfig["sidebar"].className;
        var sbBlock = document.querySelector(getSelectorClassName(sbClassNames, "sidebarModalBlock"));
        if(sbBlock != null){
            var sbCartBlock = sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarCartAddedProductsBlock"));
            var productObj = getProductBySKU(findObj);
            var productBlock = getElementChilds("sidebarCartAddedProductBlock", "sidebar");

            var elImg = productBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarCartAddedProductImg"));
            var elProductTitleText = productBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarCartAddedProductDescTitle"));
            var elProductPriceRegularText = productBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarCartAddedProductDescPriceRegular"));
            var elProductPriceSpecialText = productBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarCartAddedProductDescPriceSpecial"));

            var elImgTag = generateHTMLTags('img', {
                src: productObj.imageURL
            });
            elImg.appendChild(elImgTag);

            elProductTitleText.innerText = productObj.name;
            elProductPriceRegularText.innerText = currencySymbol + productObj.regularPrice;
            elProductPriceSpecialText.innerText = currencySymbol + productObj.activePrice;
            
            sbCartBlock.insertBefore(productBlock, sbCartBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarCartAddedProductBlock")));

            var itemCountText = sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarHeaderItemCountText"));
            itemCountText.innerText = parseInt(itemCountText.innerText) + parseInt(qty);


            var itemCountTextCheckout = sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarMobileHeaderItemCountText"));
            itemCountTextCheckout.innerText = parseInt(itemCountTextCheckout.innerText) + parseInt(qty);

            var elHeaderItemCountTitle = sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarHeaderItemCountTitle"));
            if (itemCountText.innerText > 1) {
                elHeaderItemCountTitle.innerText = "Items added to your bag";
            } else {
                elHeaderItemCountTitle.innerText = "Item added to your bag";
            }

            var elHeaderItemCountTextTooltip = sbBlock.querySelector(getSelectorClassName(sbClassNames, "sidebarHeaderItemCountTextTooltip"));
            elHeaderItemCountTextTooltip.style.display = "block";
            setTimeout(function () {
                elHeaderItemCountTextTooltip.style.display = "none";
            }, 2000);
        }
    };

    function createAMBlock(type, PDP_type, recommendation) {
        if (document.querySelector('.inc_am_block')) {
            document.querySelector('.inc_am_block').remove()
        }
        var amClassNames = uiConfig["am"].className;
        var amBlock = getElementChilds("amBlock", "am");
        if (recommendation == "recommendation") {
            // setTimeout(function () {
             amBlock.classList.add("inc_recommendations");
             //}, 1000)
         }
        Array.prototype.forEach.call(amBlock.querySelectorAll(getSelectorClassName(amClassNames, "productBlock")), function (block) {
            block.parentNode.removeChild(block);
        });

        var elAmTitleText = amBlock.querySelector(getSelectorClassName(amClassNames, "amTitleText"));
        var elAmTitleTextBlock = amBlock.querySelector(getSelectorClassName(amClassNames, "amTitleBlock"));
        

        var siteWidePromo = document.createElement('div')
        // siteWidePromo.innerText = "Back to School Buy More Save More Sale"
        siteWidePromo.classList.add("inc_promo_sitewide")

        var sitePromoMain = document.createElement('div')
        var sitePromoSpan1 = document.createElement('span')
        var sitePromoSpan2 = document.createElement('span')
        var sitePromoSpan3 = document.createElement('span')
        sitePromoMain.classList.add("inc_promo_main");
        sitePromoSpan1.innerHTML = ""//Extra 20% off $100+  Use code: <span>GIFT20</span>";
        sitePromoSpan2.innerHTML = ""//"Extra 25% off $150+ Use code: <span>GIFT25</span>";
        sitePromoSpan3.innerHTML = ""//"Extra 30% off $200+ Use code: <span>GIFT30</span>";
        sitePromoSpan1.classList.add("PromoSpan");
        sitePromoSpan2.classList.add("PromoSpan2");
        sitePromoSpan3.classList.add("PromoSpan3");
        // sitePromoMain.appendChild(sitePromoSpan1);
        // sitePromoMain.appendChild(sitePromoSpan2);
        // sitePromoMain.appendChild(sitePromoSpan3);
        // elAmTitleTextBlock.appendChild(siteWidePromo)
        // elAmTitleTextBlock.appendChild(sitePromoMain);


        var productListObj = incDataStore.dataStoreObj;

        // var productListArray = Object.keys(productListObj);
        if (recommendation == "recommendation") {
            var productListArray = INC.config.recommendationProduct;
        } else {
            var productListArray = Object.keys(productListObj);
        }

        var amProductListBlock = amBlock.querySelector(getSelectorClassName(amClassNames, "amProductListBlock"));

        var productIdsInCart = [];
        // if(typeof(SMARTOFFER) != "undefined"){
        //     SMARTOFFER.cart.items.forEach(function(product){
        //         productIdsInCart.push(product["product_id"]);
        //     });
        // }
        var productIdsListObjString = window.sessionStorage.getItem("itemsAddedToCart") || JSON.stringify({});
        var productIdsListObj = JSON.parse(productIdsListObjString);
        var productIdsInCart = Object.keys(productIdsListObj);
        //console.log(productIdsInCart)
        if (PDP_type == "PDP" || recommendation == "recommendation") {
            productListArray.forEach(function (mainProductId) {
                for (var i = 0; i < productIdsInCart.length; i++) {
                    if (mainProductId == productIdsInCart[i]) return;
                }
                if (recommendation == "recommendation") {
                    elAmTitleText.innerHTML = "Best Selling <span>Similar</span> Products";
                } else {
                    elAmTitleText.innerHTML = "Before You Checkout";
                }
                amProductListBlock.appendChild(createProductBlock(mainProductId, "am"));
            });
        } else {
            productListArray.forEach(function (mainProductId) {
                for (var i = 0; i < productIdsInCart.length; i++) {
                    if (mainProductId == productIdsInCart[i]) return;
                }
                if (recommendation == "recommendation") {
                    elAmTitleText.innerHTML = "Best Selling <span>Similar</span> Products";
                } else {
                    elAmTitleText.innerHTML = "Before You Checkout";
                }
                amProductListBlock.appendChild(createProductBlock(mainProductId, "am"));
            });
        }
        if(productListArray.length < 4){
            amProductListBlock.classList.add('inc_lessthan4')
        }else{
            amProductListBlock.classList.add('inc_'+productListArray.length)
        }
        
        var amProductBlocks = amBlock.querySelectorAll(getSelectorClassName(amClassNames, "productBlock"));
        amProductBlocks.forEach(function (productBlock) {
            productBlock.querySelector(getSelectorClassName(amClassNames, "productAddBlock")).addEventListener("click", function (e) {
                logger("clicked");

                var productBlockNode = this.parentNode.parentNode;

                logger(productBlockNode);
                var sku = productBlockNode.getAttribute('data-sku');
                var findObj = new FindObj();
                findObj["sku"] = sku;

                var qty = productBlockNode.querySelector(getSelectorClassName(amClassNames, "productQtyInputText")).querySelector('input').value;
                // var productObj = getProductBySKU(findObj);

                logger(qty);
                logger(findObj);
                addProductToCart(findObj, qty, "cartPage", productBlockNode);
            });
        });

        if (PDP_type == "PDP" || recommendation == "recommendation") {
            var cartSection = document.querySelector('.product__blocks') || document.querySelector('body');
        } else {
            var cartSection = document.querySelector('.shopify-section.cart-section') || document.querySelector('body');
        }

        cartSection.parentNode.insertBefore(amBlock, cartSection);

        var productBlocks = amBlock.querySelector(getSelectorClassName(amClassNames, "amProductListBlock"))
            .querySelectorAll(getSelectorClassName(amClassNames, "productBlock"));
        var sliderBtnCounter = 0;
        if (productBlocks.length < 5) {
            amBlock.querySelector(getSelectorClassName(amClassNames, "amProductListLeftBtnBlock")).style.opacity = "0"
            amBlock.querySelector(getSelectorClassName(amClassNames, "amProductListRightBtnBlock")).style.opacity = "0"
        }
        amBlock.querySelector(getSelectorClassName(amClassNames, "amProductListRightBtnBlock")).addEventListener("click", function () {
            if (sliderBtnCounter > productBlocks.length - 3) {
                sliderBtnCounter--;
                return;
            }

            amBlock.querySelector(getSelectorClassName(amClassNames, "amProductListLeftBtnBlock")).style.opacity = "1"
            productBlocks[sliderBtnCounter].style.display = "none";
            sliderBtnCounter++;
            if (sliderBtnCounter == productBlocks.length - 4) {
                amBlock.querySelector(getSelectorClassName(amClassNames, "amProductListRightBtnBlock")).style.opacity = "0.5"
                sliderBtnCounter--;
            }
        });

        amBlock.querySelector(getSelectorClassName(amClassNames, "amProductListLeftBtnBlock")).addEventListener("click", function () {
            logger(sliderBtnCounter);
            amBlock.querySelector(getSelectorClassName(amClassNames, "amProductListRightBtnBlock")).style.opacity = "1"
            productBlocks[sliderBtnCounter].style.display = "flex";
            if (sliderBtnCounter == 0) {
                sliderBtnCounter = 0;
                amBlock.querySelector(getSelectorClassName(amClassNames, "amProductListLeftBtnBlock")).style.opacity = "0.5"
            } else {
                sliderBtnCounter--
            }
            logger("clicked");
        });
        // if (recommendation == "recommendation") {
        //     setTimeout(function () {
        //         if (document.querySelector('.inc_am_block') != null) {
        //             document.querySelector('.inc_am_block').classList.add('inc_recommendations')
        //         }
        //     }, 1000)
        // }

        
        // cartSection.appendChild(amBlock);
    }

    function createPDPBlock() {
        if (document.querySelector('.inc_pdp_block')) {
            document.querySelector('.inc_pdp_block').remove()
        }
        // return createSidebarBlock();
        var pdpClassNames = uiConfig.pdp.className;
        var pdpBlock = getElementChilds('pdpModalBlock', 'pdp');
        // pdpBlock.querySelectorAll(getSelectorClassName(pdpClassNames, "productBlock")).forEach(function (block) {
        //     block.remove();
        // });
        Array.prototype.forEach.call(pdpBlock.querySelectorAll(getSelectorClassName(pdpClassNames, "productBlock")), function (block) {
            block.parentNode.removeChild(block);
        });
        var modalTitle = pdpBlock.querySelector(getSelectorClassName(pdpClassNames, "pdpModalTitleTextBlock"));
        modalTitle.innerText = "Build Your Bundle";

        var siteWidePromo = document.createElement('div')
        //siteWidePromo.innerText = "Back to School Buy More Save More Sale"
        siteWidePromo.classList.add("inc_promo_sitewide")

        var sitePromoMain = document.createElement('div')
        var sitePromoSpan1 = document.createElement('span')
        var sitePromoSpan2 = document.createElement('span')
        var sitePromoSpan3 = document.createElement('span')
        sitePromoMain.classList.add("inc_promo_main");
        sitePromoSpan1.innerHTML = ""//"Extra 20% off $100+  Use code: <span>GIFT20</span>";
        sitePromoSpan2.innerHTML = ""//"Extra 25% off $150+ Use code: <span>GIFT25</span>";
        sitePromoSpan3.innerHTML = ""//"Extra 30% off $200+ Use code: <span>GIFT30</span>";
        sitePromoSpan1.classList.add("PromoSpan1");
        sitePromoSpan2.classList.add("PromoSpan2");
        sitePromoSpan3.classList.add("PromoSpan3");
        // sitePromoMain.appendChild(sitePromoSpan1);
        //Extra 25% Off Your Purchase* Use code: FF25
        // sitePromoMain.appendChild(sitePromoSpan2);
        // sitePromoMain.appendChild(sitePromoSpan3);
    
        if (siteWidePromo) {
            modalTitle.appendChild(siteWidePromo)
            modalTitle.appendChild(sitePromoMain)
        }
        var productListObj = incDataStore.dataStoreObj;
        var pdpProductId = getProductIdFromWebpage();

        for (mainProductId in productListObj) {
            if (mainProductId == pdpProductId) {
                for (childProductId in productListObj[mainProductId]) {
                    // logger(childProductId);
                }
            }
        }

        var mainProductBlock = createProductBlock(pdpProductId, "pdp");
        if (mainProductBlock == undefined) {
            return
        }
        var bundleProductsArray = incDataStore.bundleProductsArray;

        var pdpBundleProductListBlock = pdpBlock.querySelector(getSelectorClassName(pdpClassNames, "pdpBundleProductListBlock"));

        for (var i = 0; i < 4; i++) {
            var productBlock = createProductBlock(bundleProductsArray[i], "pdp");

            var productAttColor = "";
            var productAttSize = "";
            var productAttLength = "";

            pdpBundleProductListBlock.appendChild(productBlock);
        }

        var elPdpBundleCartBlock = createPDPBundleCartBlock();

        // var pdpBundleCartBlock = pdpBlock.querySelector(getSelectorClassName(pdpClassNames, "pdpModalBundleCartBlock"));
        // pdpBundleCartBlock.remove();

        var pdpBundleCartBlock = pdpBlock.querySelector(getSelectorClassName(pdpClassNames, "pdpModalBundleCartBlock"));
        pdpBundleCartBlock.parentNode.removeChild(pdpBundleCartBlock);

        var pdpBundleBlock = pdpBlock.querySelector(getSelectorClassName(pdpClassNames, "pdpModalBundleBlock"));
        pdpBundleBlock.appendChild(elPdpBundleCartBlock);

        // var body = document.querySelector('body');

        var elPdpMainProductBlock = pdpBlock.querySelector(getSelectorClassName(pdpClassNames, "pdpModalMainProductBlock"));
        
        elPdpMainProductBlock.appendChild(mainProductBlock);
        var pdpBlockSibling = document.querySelector('.product__blocks') || document.querySelector('body');
        var pdpBlockSibling_rev = document.querySelector('#shopify-section-product-image-scroll__main');


        if (document.querySelector('.purchase-details .button--add-to-cart') != null) {
            if (document.querySelector('.purchase-details .button--add-to-cart').getAttribute('disabled') == "disabled") {
                if (pdpBlock != null) {
                    pdpBlock.style.display = "none";
                }
            }
        } else {
            if (pdpBlock != null) {
                pdpBlock.style.display = "none";
            }
        }
        switch (inc.deviceType) {
            case "mobile":
                pdpBlockSibling = document.querySelector('.product__blocks') || document.querySelector('.description.bottom');
                break;
        }
        if (pdpBlockSibling != null) {
            pdpBlockSibling.parentNode.insertBefore(pdpBlock, pdpBlockSibling);
        } else if (pdpBlockSibling_rev != null) {
            pdpBlockSibling_rev.parentNode.insertBefore(pdpBlock, pdpBlockSibling_rev);
        }

        // logger(pdpBlock);
        // addCSS();

        var elProductAddBlock = document.querySelectorAll('.inc_pdp_block .inc_product_desc_add_block');
        // document.querySelectorAll(getSelectorClassName(pdpClassNames, "productAddBlock"));

        for (var i = 0; i < 2; i++) {
            elProductAddBlock[i].click();
        }
        var productBlocks = pdpBlock.querySelector(getSelectorClassName(pdpClassNames, "pdpBundleProductListBlock")).querySelectorAll(getSelectorClassName(pdpClassNames, "productBlock"));
        var sliderBtnCounter = 0;
        pdpBlock.querySelector(getSelectorClassName(pdpClassNames, "pdpBundleProductLeftBtnBlock")).setAttribute("style", "pointer-events: none; opacity: 0.5;");
        pdpBlock.querySelector(getSelectorClassName(pdpClassNames, "pdpBundleProductLeftBtnImgBlock")).setAttribute("style", "opacity: 0.5;");

        pdpBlock.querySelector(getSelectorClassName(pdpClassNames, "pdpBundleProductRightBtnBlock")).addEventListener("click", function () {
           
            hideProductAttBlock();
            var prod_c = 1;
            if (sliderBtnCounter + prod_c < productBlocks.length) {
                pdpBlock.querySelector(getSelectorClassName(pdpClassNames, "pdpBundleProductLeftBtnBlock")).setAttribute("style", "pointer-events: auto; opacity: 1");
                pdpBlock.querySelector(getSelectorClassName(pdpClassNames, "pdpBundleProductLeftBtnImgBlock")).setAttribute("style", "opacity: 1;");
            }
            if (sliderBtnCounter + prod_c == productBlocks.length - 2) {
                pdpBlock.querySelector(getSelectorClassName(pdpClassNames, "pdpBundleProductRightBtnBlock")).setAttribute("style", "pointer-events: none; opacity: 0.5");
                pdpBlock.querySelector(getSelectorClassName(pdpClassNames, "pdpBundleProductRightBtnImgBlock")).setAttribute("style", "opacity: 0.5");
            }
            if (sliderBtnCounter > productBlocks.length - 2) {
                sliderBtnCounter--;
                return;
            }
            productBlocks[sliderBtnCounter].style.display = "none";
            sliderBtnCounter++;
        });

        pdpBlock.querySelector(getSelectorClassName(pdpClassNames, "pdpBundleProductLeftBtnBlock")).addEventListener("click", function () {
            // logger(sliderBtnCounter);
            console.log(sliderBtnCounter)
            hideProductAttBlock();
            if (sliderBtnCounter > 0) {
                productBlocks[sliderBtnCounter - 1].style.display = "block";
            }
            if (sliderBtnCounter > 0) {
                pdpBlock.querySelector(getSelectorClassName(pdpClassNames, "pdpBundleProductRightBtnBlock")).setAttribute("style", "pointer-events: auto; opacity: 1");
                pdpBlock.querySelector(getSelectorClassName(pdpClassNames, "pdpBundleProductRightBtnImgBlock")).setAttribute("style", "opacity: 1");
            }
            if (sliderBtnCounter == 1) {
                pdpBlock.querySelector(getSelectorClassName(pdpClassNames, "pdpBundleProductLeftBtnBlock")).setAttribute("style", "pointer-events: none; opacity: 0.5");
                pdpBlock.querySelector(getSelectorClassName(pdpClassNames, "pdpBundleProductLeftBtnImgBlock")).setAttribute("style", "opacity: 0.5;");

            }

            (sliderBtnCounter == 0) ? 0: sliderBtnCounter--;
            // logger("clicked");
        });
        pdpBlock.querySelector(getSelectorClassName(pdpClassNames, "pdpModalTitleBlock")).addEventListener("click", function () {
            hideProductAttBlock();
        });

        elPdpBundleCartBlock.addEventListener("click", function () {
            hideProductAttBlock();
        });

        calculateBundleTotal();
        createSidebarBlock();
        var clientSwatchOptions = document.querySelector('.swatch_options');
        if (clientSwatchOptions != null) {
            clientSwatchOptions.addEventListener("click", function (event) {
                clientProductAutoSelect();
            });
        }

        var elClientAddToCartBtn = document.querySelector('.ajax-submit.action_button.button--add-to-cart.action_button--secondary');
        elClientAddToCartBtn.addEventListener("click", function (event) {

            setTimeout(function () {
                var warningPara = elClientAddToCartBtn.parentNode.parentNode.parentNode.parentNode.querySelector('.warning.animated.bounceIn');

                if ((warningPara == null) || (warningPara == undefined)) {
                    var productObj = getProductByAttFromClient();
                    var findObj = new FindObj();
                    findObj["sku"] = productObj["sku"];
                    var sbBlock = document.querySelector(getSelectorClassName(uiConfig["sidebar"].className, "sidebarModalBlock"));
                    sbBlock.querySelectorAll(getSelectorClassName(uiConfig["sidebar"].className, "sidebarCartAddedProductBlock")).forEach(function (block) {
                        block.remove();
                    });
                    sbBlock.querySelector(getSelectorClassName(uiConfig["sidebar"].className, "sidebarHeaderItemCountText")).innerText = 0;
                    sbBlock.querySelector(getSelectorClassName(uiConfig["sidebar"].className, "sidebarMobileHeaderItemCountText")).innerText = 0;
                    var clientQtyBlock = document.querySelector(".purchase-details");
                    var productQty = clientQtyBlock.querySelector(".quantity-input").value;
                    addProductToSidebarCart(findObj, productQty);
                    showSidebar();
                }
            }, 1200);
        });

        clientProductAutoSelect();
        var colorelblocks = document.querySelectorAll('.swatch_options')[0]
        if (colorelblocks != undefined) {
            var allcolorel = colorelblocks.querySelectorAll('.swatch-element.color')
            for (v = 0; v < allcolorel.length; v++) {
                allcolorel[v].addEventListener('click', function () {
                    buildCrawlDataObj()
                })
            }
        }
    }

    function createPDPBundleCartBlock() {
        var classNames = uiConfig["pdp"].className;
        var pdpBundleCartBlock = getElementChilds("pdpModalBundleCartBlock", "pdp");

        var elBundleCartTitleImg = pdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartTitleImg"));
        var elBundleCartTitleText = pdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartTitleText"));
        var elBundleCartPriceMainTitleText = pdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceMainTitleText"));
        var elBundleCartPriceMainFigureText = pdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceMainFigureText"));
        var elBundleCartPriceAddonTitleText = pdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceAddonTitleText"));
        var elBundleCartPriceAddonFigureText = pdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceAddonFigureText"));
        var elBundleCartSummaryTitleText = pdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartSummaryTitleText"));
        var elBundleCartSummaryPriceRegularText = pdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartSummaryPriceRegularText"));
        var elBundleCartSummaryPriceActiveText = pdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartSummaryPriceActiveText"));
        var elBundleCartSummaryAddBlock = pdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartSummaryAddBlock"));
        var elBundleCartSummaryAddBtnText = pdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartSummaryAddBtnText"));

        // var elTitleImg = generateHTMLTags('img', { src: 'cart.png' });
        // elBundleCartTitleImg.appendChild(elTitleImg);
        elBundleCartTitleText.innerText = "PRICE SUMMARY";
        elBundleCartPriceMainTitleText.innerText = "MAIN PRODUCT";
        elBundleCartPriceAddonTitleText.innerText = "ADDONS SELECTED";
        elBundleCartSummaryTitleText.innerText = "Total Bundle Price";
        elBundleCartSummaryAddBtnText.innerText = "Add bundle to bag";
        elBundleCartSummaryPriceActiveText.innerText = 0;

        elBundleCartSummaryAddBlock.addEventListener("click", function () {
            logger("clicked");
            addBundleToCart();
        })

        return pdpBundleCartBlock;
    }

    function hideProductAttBlock() {

        var pdpClassNames = uiConfig["pdp"].className;
        var sbClassNames = uiConfig["sidebar"].className;
        var amClassNames = uiConfig["am"].className;
        var tickboxClassNames = uiConfig["tickbox"].className;

        var pdpBlock = document.querySelector(getSelectorClassName(pdpClassNames, "pdpModalBlock"));
        if ((pdpBlock != null) && (pdpBlock != undefined)) {
            var elPdpProductBlocks = pdpBlock.querySelectorAll(getSelectorClassName(pdpClassNames, "productBlock"));
            elPdpProductBlocks.forEach(function (productBlock) {
                productBlock.querySelector(getSelectorClassName(pdpClassNames, "productAttSelDoneBtnBlock")).click();
            });
        }

        var sbBlock = document.querySelector(getSelectorClassName(sbClassNames, "sidebarModalBlock"));
        if ((sbBlock != null) && (sbBlock != undefined)) {
            var elSbProductBlocks = sbBlock.querySelectorAll(getSelectorClassName(sbClassNames, "productBlock"));
            elSbProductBlocks.forEach(function (productBlock) {
                productBlock.querySelector(getSelectorClassName(pdpClassNames, "productAttSelDoneBtnBlock")).click();
            });
        }

        var amBlock = document.querySelector(getSelectorClassName(amClassNames, "amBlock"));
        if ((amBlock != null) && (amBlock != undefined)) {
            var elAmProductBlocks = amBlock.querySelectorAll(getSelectorClassName(amClassNames, "productBlock"));
            elAmProductBlocks.forEach(function (productBlock) {
                productBlock.querySelector(getSelectorClassName(pdpClassNames, "productAttSelDoneBtnBlock")).click();
            });
        }
        var tickboxblock = document.querySelector('.inc_pdp_tick_box_block');
        if ((tickboxblock != null) && (tickboxblock != undefined)) {
            var elAmProductBlocks = tickboxblock.querySelectorAll('.inc_product_block');
            elAmProductBlocks.forEach(function (productBlock) {
                productBlock.querySelector('.inc_product_att_sel_done_btn_block').click();
            });
        }
    }

    function navigateToProductPage(productBlock,tickb) {

        var findObj = new FindObj();
        findObj["id"] = productBlock.getAttribute("data-id");
        // logger("here");
        var productObj = getProductById(findObj);
        logger(productObj);


        // setTimeout(function () {
        //     window.location.href = 'productObj.url';
        // }, 2000);
        if (window.innerWidth > 820 && !INC.config.recommendation) {
            window.open(productObj.url, '_blank')
        } else {
            //e.preventDefault();
            var href = productObj.url
            setTimeout(function () {
                window.location.href = href
            }, 3000)
        }

        if ((document.querySelector(getSelectorClassName(uiConfig["sidebar"].className, "sidebarModalBlock")) != null) &&
            (document.querySelector(getSelectorClassName(uiConfig["sidebar"].className, "sidebarModalBlock")).style.display == "none")
        ) {
            var pageType = "100";
            if(tickb == "tickbox"){
                pageType = "109";
            }
            logger(pageType);
            trackingEvents("bundleProductClickTracking", {
                "product_id": productBlock.getAttribute("data-main_id"),
                "core_product_id": getProductIdFromWebpage()
            }, pageType);
            return;
        }
        trackingEvents("bundleProductClickTracking", {
            "product_id": productBlock.getAttribute("data-main_id"),
            "core_product_id": getProductIdFromWebpage()
        });

    }
    /**
     * Function creates product block
     * @param {*} childProductId 
     * @param {*} blockType 
     */
    function createProductBlock(childProductId, blockType) {
        var classNames = uiConfig[blockType].className;
        var productBlock = getElementChilds("productBlock", blockType);
        var findObj = new FindObj();
        findObj["id"] = childProductId;
        productBlock.style.userSelect = "none";
        var productObj = getProductById(findObj);
        if (blockType == "pdp" && productObj.mainId == incDataStore.pdpProductId) {
            //QA_Test
            // if(QA_TEST_CODE.PriceMisMatch){
            //     productObj.activePrice="1.00"
            // }
            isPricemismatch = incPriceMismatch(productObj.activePrice, productObj.regularPrice)
            if (isPricemismatch) {
                buildCrawlDataObj()
                return
            }
        }
        var productColorText =""
        if(productObj["option"] != null){
            productColorText = productObj["option"]["1"].text;
        }
        
        if(blockType == "tickbox"){
            var add_html = productBlock.querySelector('.inc_product_desc_price_worth_block').innerHTML
            var add_sibling = productBlock.querySelector('.inc_product_desc_price_block')
            var html_add_block = document.createElement('div');
            html_add_block.classList.add('inc_product_desc_price_worth_block')
            html_add_block.innerHTML = add_html
            var add_html_rem = productBlock.querySelector('.inc_product_desc_price_worth_block');
            add_html_rem.parentNode.removeChild(add_html_rem);
            add_sibling.appendChild(html_add_block)
        }
        productBlock.setAttribute('data-id', productObj.id);
        productBlock.setAttribute('data-sku', productObj.sku);
        productBlock.setAttribute('data-main_id', productObj.mainId);

        var elImgTag1 = generateHTMLTags('img', {
            src: productObj.imageURL
        })
        elImgTag1.setAttribute('onerror', "this.src='" + noimg + "'");
        if (productObj.otherImageList != null) {
            var elImgTag2 = generateHTMLTags('img', {src: productObj.otherImageList[0]});
            elImgTag2.setAttribute('onerror', "this.src='" + noimg + "'");
        }

        productBlock.setAttribute('productType',productObj.productType)
        productBlock.setAttribute('module_inc',blockType)
        var elImg = productBlock.querySelector(getSelectorClassName(classNames, "productImg"));
        var elImgLink = productBlock.querySelector(getSelectorClassName(classNames, "productImgLink"));
        var elTitleBlock = productBlock.querySelector(getSelectorClassName(classNames, "productTitleBlock"));
        var elTitleText = productBlock.querySelector(getSelectorClassName(classNames, "productTitleText"));
        var elTitleTextLink = productBlock.querySelector(getSelectorClassName(classNames, "productTitleTextLink"));
        var elDesc = productBlock.querySelector(getSelectorClassName(classNames, "productDescBlock"));
        var elActivePriceText = productBlock.querySelector(getSelectorClassName(classNames, "productActivePriceText"));
        var elRegularPriceText = productBlock.querySelector(getSelectorClassName(classNames, "productRegularPriceText"));
        var elworthPrice = productBlock.querySelector(getSelectorClassName(classNames, "productPriceWorthText"));
        var elAttBlock = productBlock.querySelector(getSelectorClassName(classNames, "productAttBlock"));
        var elAttColorTitleText = productBlock.querySelector(getSelectorClassName(classNames, "productAttColorTitleText"));
        var elAttColorImg = productBlock.querySelector(getSelectorClassName(classNames, "productAttColorImg"));
        var elAttSizeTitleText = productBlock.querySelector(getSelectorClassName(classNames, "productAttSizeTitleText"));
        var elAttSizeImg = productBlock.querySelector(getSelectorClassName(classNames, "productAttSizeImg"));
        var elAttLengthTitleText = productBlock.querySelector(getSelectorClassName(classNames, "productAttLengthTitleText"));
        var elAttLengthImg = productBlock.querySelector(getSelectorClassName(classNames, "productAttLengthImg"));
        var elQtyInputText = productBlock.querySelector(getSelectorClassName(classNames, "productQtyInputText"));
        var elQtyDownBlock = productBlock.querySelector(getSelectorClassName(classNames, "productQtyDownBlock"));
        var elQtyUpBlock = productBlock.querySelector(getSelectorClassName(classNames, "productQtyUpBlock"));
        var elProductAddBlock = productBlock.querySelector(getSelectorClassName(classNames, "productAddBlock"));
        var elProductAddImg = productBlock.querySelector(getSelectorClassName(classNames, "productAddImg"));
        var elProductAddText = elProductAddBlock.querySelector(getSelectorClassName(classNames, "productAddText"));
        var productAddTextBlock = elProductAddBlock.querySelector(getSelectorClassName(classNames, "productAddTextBlock"));
        var elPromoBlock = productBlock.querySelector(getSelectorClassName(classNames, "productPromoMsgBlock"));
        var elPromoText = productBlock.querySelector(getSelectorClassName(classNames, "productPromoMsgText"));

        var elAttSelBlock = productBlock.querySelector(getSelectorClassName(classNames, "productAttSelBlock"));
        var elAttSelColorTitleText = productBlock.querySelector(getSelectorClassName(classNames, "productAttSelColorTitleText"));
        var elAttSelColoListBlock = productBlock.querySelector(getSelectorClassName(classNames, "productAttSelColorListBlock"));
        var elAttSelSizeTitleText = productBlock.querySelector(getSelectorClassName(classNames, "productAttSelSizeTitleText"));
        var elAttSelSizeListBlock = productBlock.querySelector(getSelectorClassName(classNames, "productAttSelSizeListBlock"));
        var elAttSelLengthTitleText = productBlock.querySelector(getSelectorClassName(classNames, "productAttSelLengthTitleText"));
        var elAttSelLengthListBlock = productBlock.querySelector(getSelectorClassName(classNames, "productAttSelLengthListBlock"));

        elAttSelColoListBlock.innerHTML = "";
        elAttSelSizeListBlock.innerHTML = "";
        elAttSelLengthListBlock.innerHTML = "";

        if(productObj["option"] != null){
            Object.keys(productObj["option"]).forEach(function (productOption) {
                switch (productOption) {
                    case "1":
                        elAttSelColorTitleText.innerText = productObj["option"]["1"].label.toUpperCase();
                        break;
                    case "2":
                        elAttSelSizeTitleText.innerText = productObj["option"]["2"].label.toUpperCase();
                        break;
                    case "3":
                        elAttSelLengthTitleText.innerText = productObj["option"]["3"].label.toUpperCase();
                        break;
                }
            });
        }

        var attSelColorImgBlock = generateHTMLTags('div', {
            class: classNames["productAttSelColorImgBlock"]
        });
        var attSelColorImg = generateHTMLTags('div', {
            class: classNames["productAttSelColorImg"]
        });
        var attSelSizeImgBlock = generateHTMLTags('div', {
            class: classNames["productAttSelSizeBlock"]
        });
        var attSelSizeImg = generateHTMLTags('div', {
            class: classNames["productAttSelSizeImg"]
        });
        var attSelLengthImgBlock = generateHTMLTags('div', {
            class: classNames["productAttSelLengthImgBlock"]
        });
        var attSelLengthImg = generateHTMLTags('div', {
            class: classNames["productAttSelLengthImgBlock"]
        });

        var productLink = document.createElement('a');
        productLink.setAttribute("rel", "noopener noreferrer");
        productLink.href = productObj.url;
        productLink.target = "_blank";
        productLink.style.cursor = "pointer";
        productLink.setAttribute("otherImageList", productObj["otherImageList"]);
        productLink.setAttribute("imageURL", productObj["imageURLMain"]);
        if(blockType == "tickbox"){
            productLink.setAttribute('tickbox','tickbox')
        }
        productLink.addEventListener('click', function (e) {
            e.preventDefault()
            hideProductAttBlock();
            var ticb=this.getAttribute('tickbox')
            navigateToProductPage(productBlock,ticb);
        });;
        productLink.appendChild(elImgTag1);
        elImg.appendChild(productLink);
        elTitleBlock.addEventListener("click", function (e) {
            e.preventDefault()
            var ticb=this.querySelector('a').getAttribute('tickbox')
            navigateToProductPage(productBlock,ticb);
        });
        var pLink = document.createElement('a');
        pLink.setAttribute("rel", "noopener noreferrer");
        if(blockType == "tickbox"){
            pLink.setAttribute('tickbox','tickbox')
        }
        pLink.href = productObj.url;
        pLink.target = "_blank";
        pLink.setAttribute("title", productObj.name);
        if(productObj.name != null){
            elTitleText.innerHTML = productObj.name.toUpperCase();
        }
        
        if (productObj.regularPrice == productObj.activePrice) {
            elActivePriceText.innerHTML = currencySymbol + productObj.activePrice + " " + currencyName;
            elRegularPriceText.innerHTML = "";
        } else {
            elActivePriceText.innerHTML = currencySymbol + productObj.activePrice + " " + currencyName;
            elRegularPriceText.innerHTML = currencySymbol + productObj.regularPrice + " " + currencyName;
        }
        var worthPrice = get_discount_price(productObj.regularPrice, productObj.activePrice)
        var save_prc = get_discount_price_percentage(productObj.regularPrice, productObj.activePrice)

        if (save_prc != 0) {
            elworthPrice.innerHTML = "You save: " + save_prc + "% ";
            var elworthPriceSpanPrice = document.createElement('span');
            elworthPriceSpanPrice.innerHTML = "(" + currencySymbol + parseFloat(worthPrice).toFixed(2) + " " + currencyName + ")";
            elworthPrice.appendChild(elworthPriceSpanPrice);
        }

        elPromoText.classList.add('inc_promo_text');
        if ((productObj.ProductLevelDiscountMessage != null || productObj.ProductLevelDiscountMessage != undefined) && elPromoText != undefined) {
            elPromoBlock.classList.add('inc_active');
            elPromoText.innerHTML = productObj.ProductLevelDiscountMessage;
            elPromoText.style.textTransform = "none"
        }else if (productObj.ProductLevelDiscountMessage == null || productObj.ProductLevelDiscountMessage == undefined) {
            elPromoBlock.classList.add('inc_active');
            elPromoText.innerHTML = ""
            //"Extra 20% off $100+  Use code: GIFT20 <br> Extra 25% off $150+ Use code: GIFT25 <br> Extra 30% off $200+ Use code: GIFT30";
            elPromoText.style.textTransform = "none"
            elPromoBlock.style.visibility = "hidden"
        }
        elPromoBlock.appendChild(elPromoText);
        // elDesc.appendChild(elPromoBlock)
        if(productObj.productType == 'simple'){
            elAttBlock.style.display="none"
        }
        if ((productObj["option"] != null) && (productObj["option"] != undefined) && (Object.keys(productObj["option"]).length > 0)) {
            // logger(productObj["option"]);
            Object.keys(productObj["option"]).forEach(function (option) {
                switch (option) {
                    case "1":
                        elAttColorTitleText.innerText = productObj["option"]["1"]["label"].toUpperCase();
                        elAttColorImg.style.backgroundColor = productObj["option"]["1"]["colorCode"];
                        // elAttColorImg.style.backgroundImage = "url(" + productObj["option"]["1"]["imgSrc"] + ")";
                        if (productObj["option"]["1"]["imgSrc"] !== "") {
                            if(productObj["option"]["1"]["imgSrc"].indexOf('no-image') >= 0){
                                elAttColorImg.style.backgroundColor = productObj["option"]["1"]["colorCode"];
                            }else{
                                elAttColorImg.style.backgroundImage = "url(" + productObj["option"]["1"]["imgSrc"] + ")";
                            }
                        }
                        break;
                    case "2":
                        elAttSizeTitleText.innerText = productObj["option"]["2"]["label"].toUpperCase();
                        elAttSizeImg.innerText = productObj["option"]["2"]["text"];
                        break;
                    case "3":
                        elAttLengthTitleText.innerText = productObj["option"]["3"]["label"].toUpperCase();
                        elAttLengthImg.innerText = productObj["option"]["3"]["text"];
                        break;
                }
            });
        }

        elAttBlock.addEventListener('click', function () {
            hideProductAttBlock();
            document.querySelector('body').classList.add('inc_open_color_popup')
            var elAttSel = elAttBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productAttSelBlock"));
            elAttSel.style.display = "block";

        });

        var elQtyInput = generateHTMLTags('input');
        // elQtyInput.setAttribute('type', 'number');
        elQtyInput.setAttribute("disabled", "");
        elQtyInput.style.backgroundColor = "white";
        elQtyInput.value = 1;
        elQtyInputText.appendChild(elQtyInput);

        elQtyDownBlock.addEventListener('click', function () {

            elQtyInput.value = (elQtyInput.value - 1 < 1) ? 1 : elQtyInput.value - 1;

            var sku = productBlock.getAttribute('data-sku');
            var qty = parseInt(elQtyInput.value);

            if (elProductAddText.innerText == "ADDED") {
                updateBundleCart({
                    sku: sku,
                    qty: qty
                }, "Add");
            }
        });

        elQtyUpBlock.addEventListener('click', function () {

            elQtyInput.value = parseInt(elQtyInput.value) + 1;

            var sku = productBlock.getAttribute('data-sku');
            var qty = parseInt(elQtyInput.value);

            if (elProductAddText.innerText == "ADDED") {
                updateBundleCart({
                    sku: sku,
                    qty: qty
                }, "Add");
            }
        });
        if (blockType == "sidebar") {
            elProductAddText.innerText = "Add to bag";
        } else if (blockType == "am") {
            elProductAddText.innerText = "Add to bag";
        } else {
            elProductAddText.innerText = "Add";
        }
        //blockType
        elProductAddText.style.userSelect = "none";
        elProductAddBlock.addEventListener("click", function () {
            var sku = productBlock.getAttribute('data-sku');
            var qty = parseInt(elQtyInput.value);
            if(productBlock.getAttribute('producttype') == 'configurable' && productBlock.getAttribute('module_inc') == 'tickbox'){
                if(document.querySelector('.inc_pdp_block .inc_product_att_sel_block[style="display: block;"]') != null){
                    document.querySelector('.inc_pdp_block .inc_product_att_sel_block[style="display: block;"]').style.display = 'none'
                }
                if(productBlock.querySelector('.inc_product_att_sel_block.btn_disable_mode') != null){
                    return;
                }
                if(productBlock.querySelector('.inc_product_att_sel_block') != null && productBlock.querySelector('.inc_product_att_sel_block').style.display != 'block'){
                    if(productBlock.querySelector('.inc_product_desc_add_text_block.inc_add_toggle') == null){
                        productBlock.querySelector('.inc_product_att_sel_block').style.display="block"
                        productBlock.querySelector('.inc_product_att_sel_block').classList.add('btn_disable_mode')
                        return;
                    }
                }
            }
            switch (elProductAddText.innerText.trim().toUpperCase()) {
                case "ADD":
                    elProductAddText.innerText = "ADDED";
                    var classList = elProductAddImg.getAttribute('class');
                    classList = classList + " active";
                    elProductAddImg.setAttribute('class', classList);
                    productAddTextBlock.classList.add("inc_add_toggle");
                    if (blockType != "tickbox") {
                        updateBundleCart({
                            sku: sku,
                            qty: qty
                        }, "Add");
                    }
                    productBlock.querySelector('.inc_product_att_sel_block').classList.remove('btn_disable_mode')
                    break;
                case "ADDED":
                    elProductAddText.innerText = "ADD";
                    var classList = elProductAddImg.getAttribute('class');
                    classList = classList.split("active")[0].trim();
                    elProductAddImg.setAttribute('class', classList);
                    productAddTextBlock.classList.remove("inc_add_toggle");
                    productBlock.querySelector('.inc_product_att_sel_block').classList.remove('btn_disable_mode')
                    if (blockType != "tickbox") {
                        updateBundleCart({
                            sku: sku,
                            qty: qty
                        }, "Sub");
                    }
                    break;
            }
        });

        findObj = new FindObj();
        findObj["mainId"] = productObj.mainId;
        if(productObj["option"] != null){
            var productColorsObj = getProductColorsObj(findObj);
            productColorsObj["colorArray"].sort(function (a, b) {
                return (a["text"] == productColorText) ? -1 : 1;
            });

            productColorsObj["colorArray"].forEach(function (colorObj) {
                var attSelColorImgBlock = generateHTMLTags('div', {
                    class: classNames["productAttSelColorImgBlock"]
                });
                var attSelColorImg = generateHTMLTags('div', {
                    class: classNames["productAttSelColorImg"]
                });

                attSelColorImgBlock.addEventListener("click", function () {
                    // update sku
                    var colorText = this.getAttribute("data-color");

                    elAttSelBlock.setAttribute("data-color", colorText);
                    // logger(this);
                    this.parentNode.querySelectorAll(getSelectorClassName(classNames, "productAttSelColorImg")).forEach(function (colorImg) {
                        colorImg.style.borderColor = "#ddd";
                    });
                    this.querySelector(getSelectorClassName(classNames, "productAttSelColorImg")).style.borderColor = "rgb(65, 65, 65)";
                    // logger(this.querySelector(getSelectorClassName(classNames, "productAttSelColorImg")));
                    // logger("clicked");

                    elAttSelSizeListBlock.innerHTML = "";

                    findObj = new FindObj();
                    findObj.mainId = productObj.mainId;
                    findObj.colorText = colorText;

                    var productSizesObj = getProductSizesObj(findObj);

                    var productSizeText = "";

                    if (productSizesObj["sizeArray"].length > 0) {
                        productSizesObj["sizeArray"].forEach(function (sizeObj) {
                            var attSelSizeImgBlock = generateHTMLTags('div', {
                                class: classNames["productAttSelSizeImgBlock"]
                            });
                            var attSelSizeImg = generateHTMLTags('div', {
                                class: classNames["productAttSelSizeImg"]
                            });

                            attSelSizeImgBlock.addEventListener("click", function () {

                                // logger("size clicked");
                                var sizeText = this.getAttribute('data-size');
                                elAttSelBlock.setAttribute("data-size", sizeText);
                                // logger("parentnode");
                                // logger(this.parentNode);
                                // logger("attsize img parentnode");
                                // logger(attSelSizeImgBlock.parentNode);
                                this.parentNode.querySelectorAll(getSelectorClassName(classNames, "productAttSelSizeImg")).forEach(function (colorImg) {
                                    colorImg.style.borderColor = "#ddd";
                                });
                                this.querySelector(getSelectorClassName(classNames, "productAttSelSizeImg")).style.borderColor = "rgb(65, 65, 65)";

                                // update sku;
                                findObj = new FindObj();
                                findObj["mainId"] = productObj.mainId;
                                findObj["colorText"] = elAttSelBlock.getAttribute('data-color');
                                findObj["sizeText"] = elAttSelBlock.getAttribute('data-size');

                                var productLengthsObj = getProductLengthsObj(findObj);
                                // logger(productLengthsObj);
                                if (productLengthsObj["lengthArray"].length > 0) {
                                    elAttSelLengthListBlock.innerHTML = "";

                                    productLengthsObj["lengthArray"].forEach(function (lengthObj) {
                                        var attSelLengthImgBlock = generateHTMLTags('div', {
                                            class: classNames["productAttSelLengthImgBlock"]
                                        });
                                        var attSelLengthImg = generateHTMLTags('div', {
                                            class: classNames["productAttSelLengthImg"]
                                        });

                                        attSelLengthImgBlock.addEventListener("click", function () {

                                            var lengthText = this.getAttribute("data-length");
                                            elAttSelBlock.setAttribute("data-length", lengthText);

                                            this.parentNode.querySelectorAll(getSelectorClassName(classNames, "productAttSelLengthImg")).forEach(function (colorImg) {
                                                colorImg.style.borderColor = "#ddd";
                                            });
                                            this.querySelector(getSelectorClassName(classNames, "productAttSelLengthImg")).style.borderColor = "rgb(65, 65, 65)";

                                            findObj = new FindObj();
                                            findObj["mainId"] = productObj.mainId;
                                            findObj["colorText"] = elAttSelBlock.getAttribute("data-color");
                                            findObj["sizeText"] = elAttSelBlock.getAttribute("data-size");
                                            findObj["lengthText"] = elAttSelBlock.getAttribute("data-length");

                                            updateProductBlock(classNames, productBlock, findObj);
                                        });

                                        attSelLengthImg.innerText = lengthObj["text"];
                                        attSelLengthImgBlock.setAttribute('data-length', lengthObj["text"]);
                                        attSelLengthImgBlock.appendChild(attSelLengthImg);
                                        elAttSelLengthListBlock.appendChild(attSelLengthImgBlock);
                                    });

                                    elAttSelLengthListBlock.querySelector(getSelectorClassName(classNames, "productAttSelLengthImgBlock")).click();
                                }
                                // logger(findObj);
                                // logger(getProductByAtt(findObj));

                                updateProductBlock(classNames, productBlock, findObj);
                            });

                            if (productSizeText.length == 0) {
                                productSizeText = sizeObj["text"];
                            }

                            attSelSizeImg.innerText = sizeObj["text"];
                            attSelSizeImgBlock.setAttribute('data-size', sizeObj["text"]);
                            attSelSizeImgBlock.appendChild(attSelSizeImg);
                            elAttSelSizeListBlock.appendChild(attSelSizeImgBlock);
                        });

                        elAttSelSizeListBlock.querySelector(getSelectorClassName(classNames, "productAttSelSizeImgBlock")).click();

                        // findObj = new FindObj();
                        // findObj["id"] = productObj.id;
                        // findObj["colorText"] = productColorText;
                        // findObj["sizeText"] = productSizeText;

                        // findProductByIdAndAtt(findObj);
                    }

                    updateProductBlock(classNames, productBlock, findObj);
                });

                attSelColorImg.style.backgroundColor = colorObj["colorCode"];
                if (colorObj["imgSrc"] !== "") {
                    if(colorObj["imgSrc"].indexOf('no-image') >= 0){
                        attSelColorImg.style.backgroundColor = colorObj["colorCode"];
                    }else{
                        attSelColorImg.style.backgroundImage = "url(" + colorObj["imgSrc"] + ")";
                    }
                }
                attSelColorImgBlock.setAttribute('data-color', colorObj["text"]);
                attSelColorImgBlock.setAttribute('title', colorObj["text"]);
                var attSelColorTooltipDiv = generateHTMLTags('div', {
                    class: classNames["productAttSelColorImgTooltip"]
                });
                attSelColorTooltipDiv.innerText = colorObj["text"];
                attSelColorTooltipDiv.style.display = "none";

                // logger(attSelColorImg);
                attSelColorImgBlock.appendChild(attSelColorTooltipDiv);
                attSelColorImgBlock.appendChild(attSelColorImg);
                elAttSelColoListBlock.appendChild(attSelColorImgBlock);
            });

            if(elAttSelColoListBlock.querySelector(getSelectorClassName(classNames, "productAttSelColorImgBlock")) != null){
                elAttSelColoListBlock.querySelector(getSelectorClassName(classNames, "productAttSelColorImgBlock")).click();
            }
            findObj.color = productObj["option"]["1"].text;
        }

        if ((inc.deviceType == "mobile") && (inc.pageType == "cartPage")) {

            var scroll = function (e) {
                e.preventDefault();
            }

            elAttBlock.addEventListener('click', function () {
                document.body.addEventListener("touchmove", scroll);
            });
        }

        var productAttDoneBtnBlock = productBlock.querySelector(getSelectorClassName(classNames, "productAttSelDoneBtnBlock"));
        productAttDoneBtnBlock.querySelector(getSelectorClassName(classNames, "productAttSelDoneBtnText")).innerText = "Done";
        productAttDoneBtnBlock.addEventListener("click", function () {
            productBlock.querySelector(getSelectorClassName(classNames, "productAttSelBlock")).classList.remove('btn_disable_mode')
            if(productBlock.getAttribute('producttype') == 'configurable' && productBlock.getAttribute('module_inc') == 'tickbox'){
                if(productBlock.querySelector('.inc_product_desc_add_text_block.inc_add_toggle') == null){
                    productBlock.querySelector('.inc_product_desc_add_text_block').click()
                }
            }
            document.querySelector('body').classList.remove('inc_open_color_popup')
            productBlock.querySelector(getSelectorClassName(classNames, "productAttSelBlock")).style.display = "none";
            if ((inc.deviceType == "mobile") && (inc.pageType == "cartPage")) {
                document.body.removeEventListener("touchmove", scroll);
            }
        });
        pLink.appendChild(elTitleText)
        productBlock.querySelector('.inc_product_desc_title_text_block').replaceChild(pLink, productBlock.querySelector('.inc_product_desc_title_text_block').childNodes[0])
        return productBlock;
    }
    /**
     * Update ProductBlock
     * @param {*} classNames 
     * @param {*} productBlock 
     * @param {*} productObj 
     */
    function updateProductBlock(classNames, productBlock, findObj) {
        var classNames = classNames;
        var productBlock = productBlock;
        var productObj = getProductByAtt(findObj)
        var previousSKU = "";
        var dataStore = incDataStore;

        productBlock.setAttribute('data-id', productObj["id"]);
        previousSKU = productBlock.getAttribute("data-sku");
        productBlock.setAttribute('data-sku', productObj["sku"]);
        productBlock.setAttribute('data-bundleId', productObj["bundleId"]);
        var elImg = productBlock.querySelector(getSelectorClassName(classNames, "productImg"));
        var elImgLink = productBlock.querySelector(getSelectorClassName(classNames, "productImgLink"));
        var elAttColorTitleText = productBlock.querySelector(getSelectorClassName(classNames, "productAttColorTitleText"));
        var elAttColorImg = productBlock.querySelector(getSelectorClassName(classNames, "productAttColorImg"));
        var elAttSizeBlock = productBlock.querySelector(getSelectorClassName(classNames, "productAttSizeBlock"));
        var elAttSizeTitleText = productBlock.querySelector(getSelectorClassName(classNames, "productAttSizeTitleText"));
        var elAttSizeImg = productBlock.querySelector(getSelectorClassName(classNames, "productAttSizeImg"));
        var elAttLengthBlock = productBlock.querySelector(getSelectorClassName(classNames, "productAttLengthBlock"));
        var elAttLengthTitleText = productBlock.querySelector(getSelectorClassName(classNames, "productAttLengthTitleText"));
        var elAttLengthImg = productBlock.querySelector(getSelectorClassName(classNames, "productAttLengthImg"));
        var elAttSelColorTitleText = productBlock.querySelector(getSelectorClassName(classNames, "productAttSelColorTitleText"));
        var elAttSelSizeTitleText = productBlock.querySelector(getSelectorClassName(classNames, "productAttSelSizeTitleText"));
        var elAttSelLengthTitleText = productBlock.querySelector(getSelectorClassName(classNames, "productAttSelLengthTitleText"));
        var elPromoBlock = productBlock.querySelector(getSelectorClassName(classNames, "productPromoMsgBlock"));
        var elPromoText = productBlock.querySelector(getSelectorClassName(classNames, "productPromoMsgText"));
        var elAttBlock = productBlock.querySelector(getSelectorClassName(classNames, "productAttBlock"));
        // logger(elImg);

        elImg.querySelector('img').setAttribute('src', productObj["imageURL"]);
        elImg.querySelector('img').setAttribute('onerror', "this.src='" + noimg + "'");
        elAttLengthBlock.style.display = "none";
        elAttSizeBlock.style.display = "none";

        if (findObj["lengthText"].length > 0) {
            elAttLengthBlock.style.display = (inc.pageType == "cartPage") ? "block" : "block";
        }

        if (findObj["sizeText"].length > 0) {
            elAttSizeBlock.style.display = (inc.pageType == "cartPage") ? "block" : "block";
        }
        if (findObj["lengthText"].length > 0 && findObj["sizeText"].length > 0) {
            elAttBlock.classList.add("inc_addBlock_class")
        }
        if ((productObj.ProductLevelDiscountMessage != null || productObj.ProductLevelDiscountMessage != undefined) && elPromoText != undefined) {
        elPromoBlock.classList.add('inc_active');
        elPromoText.innerHTML = productObj.ProductLevelDiscountMessage
        elPromoText.style.textTransform = "none"
        // elPromoBlock.style.display = "none"
        }
        try {
            if ((productObj["option"] != null) && (productObj["option"] != undefined) && (Object.keys(productObj["option"]).length > 0)) {
                // logger(productObj["option"]);
                Object.keys(productObj["option"]).forEach(function (option) {
                    switch (option) {
                        case "1":
                            elAttColorTitleText.innerText = productObj["option"]["1"]["label"].toUpperCase();
                            elAttColorImg.style.backgroundColor = "";
                            // elAttColorImg.style.backgroundColor = productObj["option"]["1"]["text"];
                            elAttColorImg.style.backgroundColor = productObj["option"]["1"]["colorCode"];
                            elAttColorImg.style.backgroundImage = "";
                            if (productObj["option"]["1"]["imgSrc"] !== "") {
                                if(productObj["option"]["1"]["imgSrc"].indexOf('no-image') >= 0){
                                    elAttColorImg.style.backgroundColor = productObj["option"]["1"]["colorCode"];
                                }else{
                                    elAttColorImg.style.backgroundImage = "url(" + productObj["option"]["1"]["imgSrc"] + ")";
                                }
                            }
                            // elAttColorImg.style.backgroundImage = "url(" + productObj["option"]["1"]["imgSrc"] + ")";
                            elAttSelColorTitleText.innerText = productObj["option"]["1"].label.toUpperCase() + " : " + productObj["option"]["1"]["text"];;
                            break;
                        case "2":
                            elAttSizeTitleText.innerText = productObj["option"]["2"]["label"].toUpperCase();
                            elAttSizeImg.innerText = productObj["option"]["2"]["text"];
                            elAttSelSizeTitleText.innerText = productObj["option"]["2"].label.toUpperCase() + " : " + productObj["option"]["2"]["text"];
                            break;
                        case "3":
                            elAttLengthTitleText.innerText = productObj["option"]["3"]["label"].toUpperCase();
                            elAttLengthImg.innerText = productObj["option"]["3"]["text"];
                            elAttSelLengthTitleText.innerText = productObj["option"]["3"].label.toUpperCase() + " : " + productObj["option"]["3"]["text"];
                            break;
                    }
                });
            }
            if (productBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText == "Added" || productBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText == "ADDED") {
                if (!dataStore.hasOwnProperty('bundleCartProducts')) {
                    dataStore['bundleCartProducts'] = {};
                }

                dataStore["bundleCartProducts"][productObj["sku"]] = dataStore["bundleCartProducts"][previousSKU];
                if (productObj["sku"] != previousSKU) {
                    delete dataStore["bundleCartProducts"][previousSKU];
                }
            }
        } catch (err) {

        }
        calculateBundleTotal();
        // var elAttSelBlock = productBlock.querySelector(getSelectorClassName(classNames, "productAttSelBlock"));
        // productBlock
    }

    /**
     * Function update bundle cart obj
     * @param {*} bundleCartObj 
     */
    function updateBundleCart(bundleCartObj, type) {
        var dataStore = incDataStore;
        if (!dataStore.hasOwnProperty('bundleCartProducts')) {
            dataStore['bundleCartProducts'] = {};
        }

        switch (type) {
            case "Add":
                dataStore["bundleCartProducts"][bundleCartObj["sku"]] = bundleCartObj["qty"];
                break;
            case "Sub":
                delete dataStore["bundleCartProducts"][bundleCartObj["sku"]];
                break;
        }

        calculateBundleTotal();
        // logger(bundleCartObj);
    }

    function clientProductAutoSelect() {
        logger("here");
        var pageURL = new URL(window.location.href);
        var childProductId = pageURL.searchParams.get("variant") || getProductIdFromWebpage();
        var findObj = new FindObj();
        findObj["sku"] = childProductId;
        var productObj = getProductBySKU(findObj);
        if (Object.keys(productObj).length == 0) return;
        logger(productObj);

        var findObj = new FindObj();
        findObj["mainId"] = productObj.mainId;
        if(productObj["option"] != undefined){
            Object.keys(productObj["option"]).forEach(function (option) {
                switch (option) {
                    case "1":
                        findObj["colorText"] = productObj["option"]["1"]["text"];
                        break;
                    case "2":
                        findObj["sizeText"] = productObj["option"]["2"]["text"];
                        break;
                    case "3":
                        findObj["lengthText"] = productObj["option"]["2"]["text"];
                        break;
                }
            });
        }


        var swatchOptions = document.querySelector('.swatch_options');
        var productAttSelected = {};
        if(swatchOptions != null){
            var allInput = swatchOptions.querySelectorAll('input');
            
            logger(allInput);
            for (var i = 0; i < allInput.length; i++) {
                logger(allInput[i].checked);
                if (allInput[i].checked) {
                    logger(allInput[i].name);
                    logger(allInput[i].value);
                    productAttSelected[allInput[i].name] = productAttSelected[allInput[i].value];
                }
            }
        }

        var classNames = uiConfig["pdp"].className;
        var productBlock = document.querySelector(getSelectorClassName(classNames, "productBlock"));
        var productAttSelBlock = productBlock.querySelector(getSelectorClassName(classNames, "productAttSelBlock"));
        var productAttSelColorImgBlocks = productAttSelBlock.querySelectorAll(getSelectorClassName(classNames, "productAttSelColorImgBlock"));
        
        for (var i = 0; i < productAttSelColorImgBlocks.length; i++) {
            var colorImgBlock = productAttSelColorImgBlocks[i];
            if(productObj["option"] != undefined){
                if (colorImgBlock.getAttribute("data-color") == productObj["option"]["1"]["text"]) {
                    logger(productObj["option"]["1"]["text"]);
                    colorImgBlock.click();
                }
            }
        }
        var sizeListBlock = document.querySelector(getSelectorClassName(classNames, "productAttSelSizeListBlock"));
        var productAttSelSizeImgBlocks = sizeListBlock.querySelectorAll(getSelectorClassName(classNames, "productAttSelSizeImgBlock"));

        for (var i = 0; i < productAttSelSizeImgBlocks.length; i++) {
            var sizeImgBlock = productAttSelSizeImgBlocks[i];
            if(productObj["option"] != undefined){
                if (sizeImgBlock.getAttribute("data-size") == productObj["option"]["2"]["text"]) {
                    logger(productObj["option"]["2"]["text"]);
                    sizeImgBlock.click();
                }
            }
        }
        var lengthListBlock = document.querySelector(getSelectorClassName(classNames, "productAttSelLengthListBlock"));
        var productAttSelLengthImgBlocks = lengthListBlock.querySelectorAll(getSelectorClassName(classNames, "productAttSelLengthImgBlock"));
        for (var i = 0; i < productAttSelLengthImgBlocks.length; i++) {
            var lengthImgBlock = productAttSelLengthImgBlocks[i];
            if (lengthImgBlock.getAttribute("data-length") == productObj["option"]["2"]["text"]) {
                lengthImgBlock.click();
            }
        }
        if (document.querySelector('.inc_pdp_block') != null) {
            if (document.querySelector('.purchase-details .button--add-to-cart') != null) {
                if (document.querySelector('.purchase-details .button--add-to-cart').getAttribute('disabled') != "disabled") {
                    document.querySelector('.inc_pdp_block').style.display = "block"
                } else {
                    document.querySelector('.inc_pdp_block').style.display = "none"
                }
            } else {
                document.querySelector('.inc_pdp_block').style.display = "none"
            }
        }
    }

    function getProductByAttFromClient() {

        var pageURL = new URL(window.location.href);
        var childProductId = getProductIdFromWebpage();
        //pageURL.searchParams.get("variant") || 
        var findObj = new FindObj();
        findObj["id"] = childProductId;
        var productObj = getProductById(findObj);
        logger(productObj);
        return productObj;
    }
    /**
     * Function returns product attributes
     * @param {*} findObj 
     */
    function getProductAtt(findObj) {
        var productListObj = incDataStore.dataStoreObj;
        var sizesArray = [];
        var lengthArray = [];
        var productAttObj = {};

        var mainProductId = findObj.mainProductId;
        // for(mainProductId in productListObj){
        logger(productListObj[mainProductId]);
        for (childProductId in productListObj[mainProductId]) {
            var childProductObj = productListObj[mainProductId][childProductId];
            // logger(childProductObj);
            if (childProductObj["option"]["1"].text = findObj.colorText) {
                if ((childProductObj["option"]["2"] != null) && (childProductObj["option"]["2"] != undefined)) {
                    sizesArray.push(childProductObj["option"]["2"].text);
                }

                if ((childProductObj["option"]["3"] != null) && (childProductObj["option"]["3"] != undefined)) {
                    lengthArray.push(childProductObj["option"]["3"].text);
                }
            }
        }

        productAttObj = {
            mainProductId: findObj.mainProductId,
            sizesArray: sizesArray,
            lengthArray: lengthArray
        }

        return productAttObj;
    }

    /**
     * Function return all product colors
     * @param {*} findObj
     */
    function getProductColorsObj(findObj) {
        var productColorObj = {};
        var productListObj = incDataStore.dataStoreObj;
        var productColorArrayObj = {}
        var productColorObjArray = [];

        if (findObj.hasOwnProperty("mainId")) {
            for (mainProductId in productListObj) {
                if (mainProductId == findObj["mainId"]) {
                    for (childProductId in productListObj[mainProductId]) {
                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]] = {};
                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["colorCode"] = "";
                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = "";
                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["1"]["colorCode"];
                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
                        
                    }
                }
            }
        }

        Object.keys(productColorArrayObj).forEach(function (colorText) {
            var colorObj = {}
            colorObj["text"] = colorText;
            colorObj["colorCode"] = productColorArrayObj[colorText]["colorCode"];
            colorObj["imgSrc"] = productColorArrayObj[colorText]["imgSrc"];
            productColorObjArray.push(colorObj);
        });

        productColorObj["colorArray"] = productColorObjArray;
        return productColorObj;
    }

    /**
     * Function return all product sizes
     * @param {*} findObj 
     */
    function getProductSizesObj(findObj) {
        var productSizeObj = {};
        var productListObj = incDataStore.dataStoreObj;
        var productSizesArrayObj = {};
        var productSizesObjArray = [];
        var sizesArray = ["S", "M", "L", "XL", "XX", "XXL"];

        if (findObj.hasOwnProperty("mainId")) {
            for (mainProductId in productListObj) {
                if (mainProductId == findObj["mainId"]) {
                    for (childProductId in productListObj[mainProductId]) {
                        if (productListObj[mainProductId][childProductId]["option"] != null &&
                            productListObj[mainProductId][childProductId]["option"] != undefined &&
                            productListObj[mainProductId][childProductId]["option"]["2"] != null &&
                            productListObj[mainProductId][childProductId]["option"]["2"] != undefined &&
                            productListObj[mainProductId][childProductId]["option"]["1"] != null &&
                            productListObj[mainProductId][childProductId]["option"]["1"] != undefined &&
                            productListObj[mainProductId][childProductId]["option"]["1"].text == findObj.colorText) {
                            // productSizeObj[childProductId] = {};
                            // productSizeObj[childProductId]["text"] = productListObj[mainProductId][childProductId]["option"]["2"]["text"];
                            productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]] = productListObj[mainProductId][childProductId]["option"]["2"]["imgSrc"];
                            // productSizesArray.push(productListObj[mainProductId][childProductId]["option"]["2"]["text"]);
                        }
                    }
                }
            }
        }

        Object.keys(productSizesArrayObj).forEach(function (sizeText) {
            var sizeObj = {};
            sizeObj["text"] = sizeText;
            productSizesObjArray.push(sizeObj);
        });
        productSizeObj["sizeArray"] = productSizesObjArray.sort(function (a, b) {
            return a["text"].split("-")[0].trim() - b["text"].split("-")[0].trim()
        });
        productSizeObj["sizeArray"] = productSizesObjArray.sort();
        productSizeObj["sizeArray"] = productSizesObjArray.sort(function (a, b) {
            return sizesArray.indexOf(a["text"]) - sizesArray.indexOf(b["text"])
        });

        // logger(productSizeObj);

        return productSizeObj;
    }


    function getProductLengthsObj(findObj) {
        var productLengthObj = {};
        var productListObj = incDataStore.dataStoreObj;
        var productLengthsArrayObj = {};
        var productLengthsObjArray = [];

        if (findObj.hasOwnProperty("mainId")) {
            for (mainProductId in productListObj) {
                if (mainProductId == findObj["mainId"]) {
                    for (childProductId in productListObj[mainProductId]) {
                        if (productListObj[mainProductId][childProductId]["option"] != null &&
                            productListObj[mainProductId][childProductId]["option"] != undefined &&
                            productListObj[mainProductId][childProductId]["option"]["3"] != null &&
                            productListObj[mainProductId][childProductId]["option"]["3"] != undefined &&
                            productListObj[mainProductId][childProductId]["option"]["2"] != null &&
                            productListObj[mainProductId][childProductId]["option"]["2"] != undefined &&
                            productListObj[mainProductId][childProductId]["option"]["2"].text == findObj.sizeText &&
                            productListObj[mainProductId][childProductId]["option"]["1"] != null &&
                            productListObj[mainProductId][childProductId]["option"]["1"] != undefined &&
                            productListObj[mainProductId][childProductId]["option"]["1"].text == findObj.colorText) {

                            productLengthsArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]] = productListObj[mainProductId][childProductId]["option"]["3"]["imgSrc"];
                        }
                    }
                }
            }
        }

        Object.keys(productLengthsArrayObj).forEach(function (lengthText) {
            var lengthObj = {};
            lengthObj["text"] = lengthText;
            productLengthsObjArray.push(lengthObj);
        });

        productLengthObj["lengthArray"] = productLengthsObjArray;

        return productLengthObj;
    }

    /**
     * Function calculates bundle total
     */
    function calculateBundleTotal() {
        // if(inc.pageType != "pdp") return;
        var classNames = uiConfig["pdp"].className;
        var dataStore = incDataStore;
        var bundleCartProducts = dataStore["bundleCartProducts"];
        var productListObj = incDataStore.dataStoreObj;

        var totalRegularPrice = 0;
        var totalActivePrice = 0;
        var totalMainProduct = 0;
        var totalAddonProducts = 0;
        var totalAddonProductsCount = 0;
        var mainId = getProductIdFromWebpage();

        if (bundleCartProducts != null) {
            Object.keys(bundleCartProducts).forEach(function (sku) {
                for (mainProductId in productListObj) {
                    // logger("main product id:");
                    // logger(mainProductId);
                    // logger("keys:");
                    // logger(Object.keys(productListObj[mainProductId]));
                    for (childProductId in productListObj[mainProductId]) {
                        // logger("sku: " + sku);
                        // logger("childproductId: " + childProductId + "  mainproductId: " + mainProductId);
                        // logger("");
                        // logger(productListObj[mainProductId][childProductId]);
                        // try{
                        if (sku == productListObj[mainProductId][childProductId]["sku"]) {
                            var regularPrice = productListObj[mainProductId][childProductId]["regularPrice"];
                            var activePrice = productListObj[mainProductId][childProductId]["activePrice"];
                            totalRegularPrice = totalRegularPrice + (parseFloat(bundleCartProducts[sku]) * regularPrice);
                            totalActivePrice = totalActivePrice + (parseFloat(bundleCartProducts[sku]) * activePrice);
                            // logger("childProductId: " + childProductId);
                            // var findObj = {};
                            // findObj["sku"] = sku;
                            // logger("sku: " + sku);
                            // logger("mainId: " + mainProductId);
                            // logger(getProductBySKU(findObj));

                            // if (getProductBySKU(findObj).mainId == mainId) {
                            if (productListObj[mainProductId][childProductId].mainId == mainId) {
                                totalMainProduct = totalMainProduct + (parseFloat(bundleCartProducts[sku]) * activePrice);
                            }

                            // if (getProductBySKU(findObj).mainId != mainId) {
                            if (productListObj[mainProductId][childProductId].mainId != mainId) {
                                totalAddonProductsCount++;
                                totalAddonProducts = totalAddonProducts + (parseFloat(bundleCartProducts[sku]) * activePrice);
                            }
                        }
                        // } catch(err){

                        // }
                    }
                }
            });
        }

        try {
            var elPdpBundleCartBlock = document.querySelector(getSelectorClassName(classNames, "pdpModalBundleCartBlock"));
            var elPriceMainFigureText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceMainFigureText"));
            var elPriceAddonTitleText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceAddonTitleText"));
            var elPriceAddonFigureText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceAddonFigureText"));
            var elPriceRegularText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartSummaryPriceRegularText"));
            var elPriceActiveText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartSummaryPriceActiveText"));
            var elPriceWorthText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartSummaryPriceWorthText"));

            var worthPrice = get_discount_price(totalRegularPrice, totalActivePrice)
            var save_prc = get_discount_price_percentage(totalRegularPrice, totalActivePrice)
            //elPriceWorthText.innerText = "You save: " + save_prc  + "% " + "(" + currencySymbol + parseFloat(worthPrice).toFixed(2) + " " +currencyName +")"

            elPriceWorthText.innerHTML = "You save: " + save_prc + "% ";
            var elworthCartPriceSpanPrice = document.createElement('span');
            elworthCartPriceSpanPrice.innerHTML = "(" + currencySymbol + parseFloat(worthPrice).toFixed(2) + " " + currencyName + ")";
            elPriceWorthText.appendChild(elworthCartPriceSpanPrice);


            elPriceAddonTitleText.innerText = "ADD-ON(S) SELECTED " + ((totalAddonProductsCount > 0) ? totalAddonProductsCount : "");
            elPriceMainFigureText.innerText = currencySymbol + totalMainProduct.toFixed(2);
            elPriceAddonFigureText.innerText = currencySymbol + totalAddonProducts.toFixed(2);
            elPriceRegularText.innerText = currencySymbol + totalRegularPrice.toFixed(2) + " " + currencyName;
            elPriceActiveText.innerText = currencySymbol + totalActivePrice.toFixed(2) + " " + currencyName;

            if (totalActivePrice == 0) {
                document.querySelector(getSelectorClassName(classNames, "productAddBlock")).click();
            }

        } catch (err) {

        }
        // logger("regular price:" + totalRegularPrice);
        // logger("active price:" + totalActivePrice);
        // var classNames = uiConfig.pdp.className;
        // var pdpBlockClassName = getSelectorClassName(classNames, "pdpModalBlock");
        // var pdpProductBlock = document.querySelectorAll(getSelectorClassName(classNames, "productBlock"));

        // var pdpProductAddClassName = getSelectorClassName(classNames, "productAddBlock");
        // var elProductAddBlock = document.querySelectorAll(pdpBlockClassName + " " + pdpProductAddClassName);

        // var totalActive = 0;
        // var totalRegular = 0;

        // pdpProductBlock.forEach(function (productBlock) {
        //     var sku = productBlock.getAttribute('data-sku');
        //     // var qty = productBlock.querySelector(getSelectorClassName(classNames, productqty )).value;

        //     // var productObj = getProductBySKU(sku);

        //     // totalActive = totalActive + qty * productObj.activePrice;
        //     // totalRegular = totalRegular + qty * productObj.regularPrice;
        // });

        // // elProductAddBlock.forEach(function (elProductAdd) {
        // //     var qty = elProductAdd.parentNode.querySelector(getSelectorClassName(classNames, "productQtyInputText")).value;
        // //     var sku = elProductAdd.parentNode.

        // //     var productObj = getProductBySKU(sku);

        // //     totalActive = totalActive + qty * productObj.activePrice;
        // //     totalRegular = totalRegular + qty * productObj.regularPrice;
        // // });

        // var elBundleCartPriceActiveText = document.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceActiveText"));
        // var elBundleCartPriceRegularText = document.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceRegularText"));

        // // elBundleCartPriceActiveText.innerText = totalActive;
        // // elBundleCartPriceRegularText.innerText = totalRegular;

        // // logger(elProductAddBlock);
    }

    /**
     * Find Obj constructor function. Used to construct product find Object.
     * @constructor
     */
    function FindObj() {
        this.id = "";
        this.mainId = "";
        this.sku = "";
        this.colorText = "";
        this.sizeText = "";
        this.lengthText = "";
    }

    /**
     * Function finds product by attribute value
     * @param {*} findObj 
     */
    function getProductByAtt(findObj) {
        var childProductObj = {};
        var productListObj = incDataStore.dataStoreObj;
        // logger("here");
        // for (mainProductId in productListObj) {
        var mainProductListObj = productListObj[findObj.mainId];
        for (childProductId in mainProductListObj) {
            if (
                mainProductListObj[childProductId]["option"] != null &&
                mainProductListObj[childProductId]["option"] != undefined &&
                mainProductListObj[childProductId]["option"]["1"] != null &&
                mainProductListObj[childProductId]["option"]["1"] != undefined &&
                ((mainProductListObj[childProductId]["option"]["2"] == null) ||
                    (mainProductListObj[childProductId]["option"]["2"] == undefined)) &&
                (findObj.colorText == mainProductListObj[childProductId]["option"]["1"].text)
            ) {
                childProductObj = mainProductListObj[childProductId];
            }
            if (
                mainProductListObj[childProductId]["option"] != null &&
                mainProductListObj[childProductId]["option"] != undefined &&
                mainProductListObj[childProductId]["option"]["1"] != null &&
                mainProductListObj[childProductId]["option"]["1"] != undefined &&
                mainProductListObj[childProductId]["option"]["2"] != null &&
                mainProductListObj[childProductId]["option"]["2"] != undefined &&
                (findObj.colorText == mainProductListObj[childProductId]["option"]["1"].text) &&
                (findObj.sizeText == mainProductListObj[childProductId]["option"]["2"].text)
            ) {
                if (findObj.hasOwnProperty("lengthText") && (findObj["lengthText"].length > 0) &&
                    (findObj.lengthText == mainProductListObj[childProductId]["option"]["3"].text)
                ) {
                    childProductObj = mainProductListObj[childProductId];
                    // logger("length: > 0");
                    // logger(childProductObj);
                }

                if (findObj.hasOwnProperty("lengthText") && (findObj["lengthText"].length == 0)) {
                    childProductObj = mainProductListObj[childProductId];
                    // logger("length: = 0");
                    // logger(childProductObj);
                }
            }
        }
        // logger(childProductObj);
        return childProductObj;
    }

    function getProductById(findObj) {
        var childProductObj = {};
        var productListObj = incDataStore.dataStoreObj;
        if (Object.prototype.hasOwnProperty.call(findObj, "id")) {
            for (var mainProductId in productListObj) {
                for (var childProductId in productListObj[mainProductId]) {
                    if (productListObj[mainProductId][childProductId]["id"] == findObj["id"]) {
                        childProductObj = productListObj[mainProductId][childProductId];
                        break;
                    }
                }
            }
        }
        if(Object.keys(childProductObj).length == 0){
            if (Object.prototype.hasOwnProperty.call(findObj, "id")) {
                for (var mainProductIds in productListObj) {
                    for (var childProductIds in productListObj[mainProductIds]) {
                        if (productListObj[mainProductIds][childProductIds]["id"] == findObj["id"]) {
                            childProductObj = productListObj[mainProductIds][childProductIds];
                            break;
                        }
                    }
                }
            }
        }
        return childProductObj;
    }

    /**
     * Function finds product by SKU
     * @param {*} findObj 
     */
    function getProductBySKU(findObj) {
        var childProductObj = {};
        var productListObj = incDataStore.dataStoreObj;

        if (findObj.hasOwnProperty("sku")) {
            for (mainProductId in productListObj) {
                for (childProductId in productListObj[mainProductId]) {
                    if (productListObj[mainProductId][childProductId].sku == findObj.sku) {
                        childProductObj = productListObj[mainProductId][childProductId];
                    }
                }
            }
        }

        return childProductObj;
    }

    /**
     * Function return element
     * @param {*} child 
     * @param {*} pageType 
     */
    function getElementChilds(child, pageType) {
        var uiconfig = uiConfig;
        var pType = pageType;
        var vDOM = uiconfig[pType]["dom"];

        var elementHTML = generateHTMLTags('div', {
            class: uiconfig[pType]["className"][child]
        })
        if (vDOM.hasOwnProperty(child)) {
            vDOM[child].forEach(function (subChild) {
                elementHTML.appendChild(getElementChilds(subChild, pType));
            });
        }

        return elementHTML;
    }

    /**
     * Function for generating HTML Tags
     * @param {*} tagName  - Tag name for element 
     * @param {*} attributeObj - Attributes for element
     * @param {*} childNode - childNode for element
     * @param {*} eventListner - Event Listner added to the element
     * @param {*} callback - Callback for eventlistener
     */
    function generateHTMLTags(tagName, attributeObj, childNode, eventListner, callback) {

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
                if(attributeObj[attr] != undefined){
                    element.setAttribute(attr, attributeObj[attr]);
                }
            }
            }
        }

        if (childNode != null && childNode != undefined) element.appendChild(childNode);
        if (eventListner != null && childNode != undefined) element.addEventListener(eventListner, callback);

        return element;
    }


    function addProductToCart(findObj, qty, pageType, productBlock) {
        var reqURL = 'https://uspoloassn.com/cart/add.js';
        var mainProductId = incDataStore.pdpProductId;
        var productObj = getProductBySKU(findObj);
        var eventDataObj = {};
        var iatc = window.sessionStorage.getItem("itemsAddedToCart") || JSON.stringify({});
        iatc = JSON.parse(iatc);
        iatc[productObj.mainId] = "added";
        window.sessionStorage.setItem("itemsAddedToCart", JSON.stringify(iatc));
        var formData = new FormData();
        formData.append("form_type", "product");
        if(productObj.productType == 'simple'){
            formData.append("id", productObj.addsku);
        }else{
            formData.append("id", productObj.sku);
        }
        if(productObj["option"] != undefined){
            if(productObj["option"] != undefined){
                if (productObj.hasOwnProperty("option")) {
                    Object.keys(productObj["option"]).forEach(function (option) {
                        switch (option) {
                            case "1":
                                formData.append("option-0", productObj["option"]["1"].text);
                                break;
                            case "2":
                                formData.append("option-1", productObj["option"]["2"].text);
                                break;
                            case "3":
                                formData.append("option-2", productObj["option"]["3"].text);
                                break;
                        }
                    });
                }
            }
        }

        formData.append('quantity', qty);

        eventDataObj["bundle_data"] = {
            "id": productObj.bundleId,
            "product_ids": [mainProductId, productObj.id],
            "product_id": mainProductId
        };

        //&& pageType == 'tickbox'
        if (pageType != "cartPage") {
            var productAddText = productBlock.querySelector(getSelectorClassName(uiConfig["sidebar"].className, "productAddText"));
            productAddText.innerText = "Added";
            setTimeout(function () {
                productAddText.innerText = "ADD TO BAG";
                if(pageType != 'tickbox'){
                    productBlock.style.display = "none";
                }
            }, 200);

            

            if(pageType == 'tickbox'){
                setTimeout(function () {
                    addProductToSidebarCart(findObj, qty,'tickbox');
                }, 1000);
                trackingEvents("bundleAddToCart", eventDataObj, "109");
            }else{
                addProductToSidebarCart(findObj, qty);
                trackingEvents("bundleAddToCart", eventDataObj, (inc.pageType == "productList") ? "101" : "107",pageType);
            }
            
        }

        if (pageType == "cartPage") {
            var productAddText = productBlock.querySelector(getSelectorClassName(uiConfig["am"].className, "productAddText"));
            productAddText.innerText = "Added";
            setTimeout(function () {
                productAddText.innerText = "ADD";
                productBlock.style.display = "none";
            }, 2000);
            trackingEvents("bundleAddToCart", eventDataObj, "103");
        }

        networkReqForCart(reqURL, formData, 'POST', function () {
            if (pageType == "pdp" || pageType == 'tickbox') {
                return;
            }
            setTimeout(function () {
                window.location.reload();
            }, 3200);
        });
    }

    function addBundleToCart() {
        var reqURL = 'https://uspoloassn.com/cart/add.js';

        var bundleCartProductsObj = incDataStore.bundleCartProducts;
        var bundleCartProductsArray = Object.keys(bundleCartProductsObj);

        var iatc = JSON.parse(window.sessionStorage.getItem("itemsAddedToCart")) || {};
        bundleCartProductsArray.forEach(function (sku) {
            var findObj = new FindObj();
            findObj["sku"] = sku;

            var productObj = getProductBySKU(findObj);
            iatc[productObj.mainId] = "added";
        });
        window.sessionStorage.setItem("itemsAddedToCart", JSON.stringify(iatc));

        var formData = new FormData();

        var findObj = new FindObj();
        findObj["sku"] = bundleCartProductsArray[0];

        var productObj = getProductBySKU(findObj);
        logger(productObj);
        formData.append('form_type', 'product');
        if(productObj.productType == 'simple'){
            formData.append("id", productObj.addsku);
        }else{
            formData.append("id", productObj.sku);
        }
        if(productObj["option"] != undefined){
            if(productObj["option"] != undefined){
                if (productObj.hasOwnProperty("option")) {
                    Object.keys(productObj["option"]).forEach(function (option) {
                        switch (option) {
                            case "1":
                                formData.append("option-0", productObj["option"]["1"].text);
                                break;
                            case "2":
                                formData.append("option-1", productObj["option"]["2"].text);
                                break;
                            case "3":
                                formData.append("option-2", productObj["option"]["3"].text);
                                break;
                        }
                    });
                }
            }
        }

        formData.append('quantity', bundleCartProductsObj[productObj["sku"]]);

        networkReqForCart(reqURL, formData, 'POST', function () {

            if (bundleCartProductsArray.length < 2) {
                showSidebar();
                updateSidebarBlock();
                document.querySelector(getSelectorClassName(uiConfig["pdp"].className, "pdpBundleCartSummaryAddBtnText")).classList.remove("inc_loading");
                return;
            }

            var formData1 = new FormData();
            var findObj1 = new FindObj();

            findObj1["sku"] = bundleCartProductsArray[1];

            var productObj1 = getProductBySKU(findObj1);

            formData1.append('form_type', 'product');
            // formData1.append('id', productObj1.sku);
            if(productObj1.productType == 'simple'){
                formData1.append("id", productObj1.addsku);
            }else{
                formData1.append("id", productObj1.sku);
            }
            if(productObj1["option"] != undefined){
                if (productObj1.hasOwnProperty("option")) {
                    Object.keys(productObj1["option"]).forEach(function (option) {
                        switch (option) {
                            case "1":
                                formData1.append("option-0", productObj1["option"]["1"].text);
                                break;
                            case "2":
                                formData1.append("option-1", productObj1["option"]["2"].text);
                                break;
                            case "3":
                                formData1.append("option-2", productObj1["option"]["3"].text);
                                break;
                        }
                    });
                }
            }

            formData1.append('quantity', bundleCartProductsObj[productObj1["sku"]]);
            setTimeout(function () {
                networkReqForCart(reqURL, formData1, 'POST', function () {

                    if (bundleCartProductsArray.length < 3) {
                        showSidebar();
                        updateSidebarBlock();
                        document.querySelector(getSelectorClassName(uiConfig["pdp"].className, "pdpBundleCartSummaryAddBtnText")).classList.remove("inc_loading");
                        return;
                    }

                    var formData2 = new FormData();
                    var findObj2 = new FindObj();

                    findObj2["sku"] = bundleCartProductsArray[2];

                    var productObj2 = getProductBySKU(findObj2);

                    formData2.append('form_type', 'product');
                    // formData2.append('id', productObj2.sku);
                    if(productObj2.productType == 'simple'){
                        formData2.append("id", productObj2.addsku);
                    }else{
                        formData2.append("id", productObj2.sku);
                    }
                    if(productObj2["option"] != undefined){
                        if (productObj2.hasOwnProperty("option")) {
                            Object.keys(productObj2["option"]).forEach(function (option) {
                                switch (option) {
                                    case "1":
                                        formData2.append("option-0", productObj2["option"]["1"].text);
                                        break;
                                    case "2":
                                        formData2.append("option-1", productObj2["option"]["2"].text);
                                        break;
                                    case "3":
                                        formData2.append("option-2", productObj2["option"]["3"].text);
                                        break;
                                }
                            });
                        }
                    }

                    formData2.append('quantity', bundleCartProductsObj[productObj2["sku"]]);

                    setTimeout(function () {
                        networkReqForCart(reqURL, formData2, 'POST', function () {
                            if (bundleCartProductsArray.length < 4) {
                                showSidebar();
                                updateSidebarBlock();
                                document.querySelector(getSelectorClassName(uiConfig["pdp"].className, "pdpBundleCartSummaryAddBtnText")).classList.remove("inc_loading");
                                return;
                            }

                            var formData3 = new FormData();
                            var findObj3 = new FindObj();

                            findObj3["sku"] = bundleCartProductsArray[3];

                            var productObj3 = getProductBySKU(findObj3);

                            formData3.append('form_type', 'product');
                            // formData3.append('id', productObj3.sku);
                            if(productObj3.productType == 'simple'){
                                formData3.append("id", productObj3.addsku);
                            }else{
                                formData3.append("id", productObj3.sku);
                            }
                            if(productObj3["option"] != undefined){
                                if (productObj3.hasOwnProperty("option")) {
                                    Object.keys(productObj3["option"]).forEach(function (option) {
                                        switch (option) {
                                            case "1":
                                                formData3.append("option-0", productObj3["option"]["1"].text);
                                                break;
                                            case "2":
                                                formData3.append("option-1", productObj3["option"]["2"].text);
                                                break;
                                            case "3":
                                                formData3.append("option-2", productObj3["option"]["3"].text);
                                                break;
                                        }
                                    });
                                }
                            }

                            formData3.append('quantity', bundleCartProductsObj[productObj3["sku"]]);

                            setTimeout(function () {
                                networkReqForCart(reqURL, formData3, 'POST', function () {
                                    if (bundleCartProductsArray.length < 5) {
                                        showSidebar();
                                        updateSidebarBlock();
                                        document.querySelector(getSelectorClassName(uiConfig["pdp"].className, "pdpBundleCartSummaryAddBtnText")).classList.remove("inc_loading");
                                        return;
                                    }

                                    var formData4 = new FormData();
                                    var findObj4 = new FindObj();

                                    findObj4["sku"] = bundleCartProductsArray[4];

                                    var productObj4 = getProductBySKU(findObj4);

                                    formData4.append('form_type', 'product');
                                    // formData4.append('id', productObj4.sku);
                                    if(productObj4.productType == 'simple'){
                                        formData4.append("id", productObj4.addsku);
                                    }else{
                                        formData4.append("id", productObj4.sku);
                                    }
                                    if(productObj4["option"] != undefined){
                                        if (productObj4.hasOwnProperty("option")) {
                                            Object.keys(productObj4["option"]).forEach(function (option) {
                                                switch (option) {
                                                    case "1":
                                                        formData4.append("option-0", productObj4["option"]["1"].text);
                                                        break;
                                                    case "2":
                                                        formData4.append("option-1", productObj4["option"]["2"].text);
                                                        break;
                                                    case "3":
                                                        formData4.append("option-2", productObj4["option"]["3"].text);
                                                        break;
                                                }
                                            });
                                        }
                                    }

                                    formData4.append('quantity', bundleCartProductsObj[productObj4["sku"]]);

                                    setTimeout(function () {
                                        networkReqForCart(reqURL, formData4, 'POST', function () {
                                            showSidebar();
                                            updateSidebarBlock();
                                            document.querySelector(getSelectorClassName(uiConfig["pdp"].className, "pdpBundleCartSummaryAddBtnText")).classList.remove("inc_loading");
                                        });
                                    }, 250);
                                });
                            }, 250);
                        });
                    }, 250);

                });
            }, 250);

        });

        var mainProductId = incDataStore.pdpProductId;
        bundleCartProductsArray.forEach(function (productSKU) {
            var findObj = new FindObj();
            findObj["sku"] = productSKU;
            var productObj = getProductBySKU(findObj);
            // if (productObj.id == mainProductId) return;
            var eventDataObj = {};
            eventDataObj["bundle_data"] = {
                "id": productObj.bundleId,
                "product_ids": [mainProductId, productObj.id],
                "product_id": mainProductId
            };

            trackingEvents("bundleAddToCart", eventDataObj);
        });
        // productObjArray.forEach(function())
        // document.querySelector(getSelectorClassName(uiConfig["sidebar"].className, "sidebarModalBlock")).style.display = "block";
        // showSidebar();
        // updateSidebarBlock();
    }

    function networkReqForCart(url, params, method, cb) {

        var reqObj = {
            url: url,
            method: (method == null || method == undefined) ? 'GET' : method,
            params: params
        }
        // if(QA_TEST_CODE.addToCartError && method=='POST' && document.querySelector('.inc_sidebar_modal_block') != null && (document.querySelector('.inc_sidebar_modal_block')).style.display !='none'){
        //     reqObj.url='https://uspoloassn.com/cart/failApi'
        // }
        var xhr = new XMLHttpRequest();
        xhr.open(reqObj.method, reqObj.url, true);

        xhr.onload = function () {}

        xhr.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                // logger(xhr.response);
                if (document.querySelector(getSelectorClassName(uiConfig["pdp"].className, "pdpBundleCartSummaryAddBtnText")) != null) {
                    document.querySelector(getSelectorClassName(uiConfig["pdp"].className, "pdpBundleCartSummaryAddBtnText")).classList.add("inc_loading");
                }
                if (cb != null) cb();
            } else if (this.readyState == 4 && this.status === 404) {
                addToCartError(incDataStore.pdpProductId, 'failed to add product to cart')
            }
        }
        xhr.send(params);
    }

    /**
     * Function initiallize irb request
     */
    function init() {
        addCSSFile();
        addIncVisitorId();
        if (window.location.pathname == "/") return;
        var plpPageCheck = (document.querySelector('.product-wrap') != null) && (document.querySelector('.sort_by') != null);
        if (plpPageCheck) {
            inc.pageType = "productList";
            logger(inc);
            var elList = document.querySelectorAll('.product-wrap');
            elList.forEach(function (element) {
                if(element.querySelector('.quick_shop.ss-icon.js-quick-shop-link') != null){
                    element.querySelector('.quick_shop.ss-icon.js-quick-shop-link').addEventListener("click", function (e) {
                        logger(this.getAttribute("data-id"));
                        var productMainId = this.getAttribute("data-id");
                        if (document.querySelector(getSelectorClassName(uiConfig["sidebar"].className, "sidebarModalBlock")) != null) {
                            document.querySelector(getSelectorClassName(uiConfig["sidebar"].className, "sidebarModalBlock")).remove();
                            document.querySelector(".inc_sidebar_overlay_block").remove();
                        }
                        irbReq(productMainId, 20);

                        setTimeout(function () {
                            if (document.querySelector('.fancybox-container') != null) {
                                var elClientAddToCartBtn = document.querySelector('.fancybox-container').querySelector('.ajax-submit.action_button.button--add-to-cart.action_button--secondary');
                                elClientAddToCartBtn.addEventListener("click", function (event) {

                                    setTimeout(function () {
                                        var warningPara = elClientAddToCartBtn.parentNode.parentNode.parentNode.parentNode.querySelector('.warning.animated.bounceIn');
                                        if ((warningPara == null) || (warningPara == undefined)) {
                                            var productObj = getProductByAttFromClient();
                                            var findObj = new FindObj();
                                            findObj["sku"] = productObj["sku"];
                                            var sbBlock = document.querySelector(getSelectorClassName(uiConfig["sidebar"].className, "sidebarModalBlock"));
                                            sbBlock.querySelectorAll(getSelectorClassName(uiConfig["sidebar"].className, "sidebarCartAddedProductBlock")).forEach(function (block) {
                                                block.remove();
                                            });
                                            sbBlock.querySelector(getSelectorClassName(uiConfig["sidebar"].className, "sidebarHeaderItemCountText")).innerText = 0;
                                            var clientQtyBlock = document.querySelector(".purchase-details");
                                            var productQty = clientQtyBlock.querySelector(".quantity-input").value;
                                            addProductToSidebarCart(findObj, productQty);
                                            sbBlock.querySelector(getSelectorClassName(uiConfig["sidebar"].className, "sidebarCartAddedBlock")).style.display = "none";
                                            showSidebar();
                                        }
                                    }, 1200);
                                });
                            }
                        }, 3000);
                    });
                }
            });
            // return;
        }

        if (plpPageCheck == true) return;

        var el = document.querySelector('.clearfix.product_form.init.smart-payment-button--true.product_form_options.product_form--swatches.is-visible')
        if ((el != null) && (el != undefined)) {
            inc.pageType = "pdp";
            logger(inc);
            irbReq(getProductIdFromWebpage(), 30);
            setTimeout(function(){
                irbReq_tickbox()
            },200)
            return;
        }else if(document.querySelector('.clearfix.product_form.product_form--swatches.is-visible') != null){
            inc.pageType = "pdp";
            logger(inc);
            irbReq(getProductIdFromWebpage(), 30);
            setTimeout(function(){
                irbReq_tickbox()
            },200)
            return;
        }
        el = document.querySelector('.shopify-section.cart-section');

        if ((el != null) && (el != undefined)) {
            if (document.querySelector('.container.cart__empty-cart-message.is-hidden') != null) {
                inc.pageType = "cartPage";
                logger(inc);
                if (typeof (SMARTOFFER) != "undefined") {
                    if (SMARTOFFER.cart.items.length == 0) return;
                    // var productIdsListObjString = window.sessionStorage.getItem("itemsAddedToCart") || JSON.stringify({});
                    // var productIdsListObj = JSON.parse(productIdsListObjString);
                    // var productIds = Object.keys(productIdsListObj);
                    // var productIds = [];
                    // SMARTOFFER.cart.items.forEach(function(product){
                    //     productIds.push(product["product_id"]);
                    // });
                }
                var productIdsListObjString = window.sessionStorage.getItem("itemsAddedToCart") || JSON.stringify({});
                var productIdsListObj = JSON.parse(productIdsListObjString);
                var productIds = Object.keys(productIdsListObj);
                //console.log("1")
                //console.log(productIds)
                irbReq(productIds, 12, "checkout_cart_index");
                return;
            }
        }
    }



    function initDev() {
        addCSSFile();
        init();
    }

    function trackingEvents(eventType, eventDataObj, pageType) {
        var importDataObj = {};
        var importEventDataObj = {};
        var clientToken = "usPA9";

        switch (eventType) {
            case "productPageVisit":
                importEventDataObj["event_data"] = eventDataObj;
                importEventDataObj["event_type"] = "product_page_visit";
                importEventDataObj["method"] = "track";
                break;
            case "catalogProductView":
                importEventDataObj["event_data"] = eventDataObj;
                importEventDataObj["event_type"] = "catalog_product_view";
                importEventDataObj["page_type"] = "catalog_product_view";
                importEventDataObj["method"] = "track";
                break;
            case "bundleProductClickTracking":
                importEventDataObj["event_data"] = eventDataObj;
                importEventDataObj["event_type"] = "bundle_product_click_tracking";
                if (INC.config.recommendation == true && inc.pageType == "pdp") importEventDataObj["rt"] = "8";
                switch (inc.pageType) {
                    case "pdp":
                        if(pageType == "tickbox"){
                            importEventDataObj["page_type"] = "109"
                        }else{
                            if (INC.config.recommendation) importEventDataObj["page_type"] = "100";
                            else importEventDataObj["page_type"] = pageType || "107";
                        }
                        

                        break;
                    case "productList":
                        importEventDataObj["page_type"] = "101";
                        break;
                    case "cartPage":
                        importEventDataObj["page_type"] = "103";
                        break;
                }

                importEventDataObj["is_logged"] = "0";
                importEventDataObj["method"] = "track";
                sendAffiliateRequest();
                break;
            case "bundleAddToCart":
                importEventDataObj["event_data"] = eventDataObj;
                importEventDataObj["event_type"] = "bundle_add_to_cart";
                
                if(pageType == "tickbox"){
                    importEventDataObj["page_type"] = "109"
                }else{
                    importEventDataObj["page_type"] = pageType || "100";
                }
                importEventDataObj["is_logged"] = "0";
                importEventDataObj["method"] = "track";
                sendAffiliateRequest();
                break;

        }

        importEventDataObj["platform"] = "";
        importEventDataObj["token"] = clientToken;
        logger(importEventDataObj);
        importDataObj["eventData"] = btoa(JSON.stringify(importEventDataObj));
        importDataObj["uri"] = window.location.origin + window.location.pathname;
        importDataObj["vid"] = inc.ivid;
        sendTrackingEvents(importDataObj);
    }

    function sendAffiliateRequest() {
        // var xhr = new XMLHttpRequest();
        // var method = "POST";
        // var url = "https://shareasale.com/r.cfm?b=889238&u=1861455&m=66874&afftrack=";
        // xhr.onreadystatechange = handleStateChange;

        // xhr.open(method, url, true);

        // function handleStateChange() {
        //     if (xhr.readyState === 4 && xhr.status === 200) {
        //         // logger(xhr.responseText);
        //     }
        // }

        // xhr.send();
        var url = 'https://shareasale.com/r.cfm?b=889238&u=1861455&m=66874&afftrack='
        var oImg = document.createElement("img");
        oImg.setAttribute('id', 'cstracking')
        oImg.setAttribute('src', url);
        oImg.setAttribute('height', '1px');
        oImg.setAttribute('width', '1px');
        oImg.setAttribute('style', 'display:none')
        document.body.appendChild(oImg);
    }

    function sendTrackingEvents(importDataObj) {
        var xhr = new XMLHttpRequest();
        var method = "POST";
        var url = "https://usaoptimizedby.increasingly.co/ImportData";
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

    function addIncVisitorId() {
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
            var clientDomain = window.location.host.replace("www", "");
            var d = new Date();
            d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = 'ivid=' + ivid + '; expires=' + expires + '; domain=' + clientDomain + '; path=/' + '; secure:' + true + ';'
            // document.cookie = "ivid=" + ivid + ";" + "expires=16 Jul 2021 06:23:41 GMT;" + "path=/";
        }
        console.log("ivid: " + ivid);
        // var oImg = document.createElement("img");
        // oImg.setAttribute('src', "//usaoptimizedby.increasingly.co/GetVisitorId?ivid=" + ivid);
        // oImg.setAttribute('height', '1px');
        // oImg.setAttribute('width', '1px');
        // oImg.setAttribute('style', 'display:none');
        // document.body.appendChild(oImg);

        inc.ivid = ivid;
    }

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
    document.onclick = clickListener;

    function clickListener(e) {
        var clickedElement = (window.event) ?
            window.event.srcElement :
            e.target,
            tags = document.getElementsByTagName(clickedElement.tagName);
        //console.log(clickedElement)
        if (clickedElement.className == "close" || clickedElement.parentNode.parentNode.className == "close") {
            if (document.querySelector('.cart__item-list')) {

                productBlocks = document.querySelector('.cart__item-list').querySelectorAll('.cart__card');
                setTimeout(function () {
                    if (productBlocks.length == 1) {
                        if (document.querySelector('.inc_am_block') != null) {
                            document.querySelector('.inc_am_block').setAttribute('style', 'display:none;')
                        }
                    }
                }, 1000);
            }
        }
        if(clickedElement.parentNode != null){
            if (inc.pageType == "pdp") {
                if(clickedElement.classList.contains('button--add-to-cart') == true || clickedElement.parentNode.classList.contains('button--add-to-cart') == true){
                    if(document.querySelector('.inc_product_att_sel_block.btn_disable_mode') != null){
                        if(document.querySelector('.inc_product_att_sel_block.btn_disable_mode').style.display == 'block'){
                            document.querySelector('.inc_product_att_sel_block.btn_disable_mode').style.display = 'none'
                            document.querySelector('.inc_product_att_sel_block.btn_disable_mode').classList.remove('btn_disable_mode')
                        } 
                    }else if(document.querySelector('.inc_product_att_sel_block[style="display: block;"]') != null){
                        document.querySelector('.inc_product_att_sel_block[style="display: block;"]').style.display = 'none'
                    }
                    if(document.querySelector('.inc_pdp_tick_box_product-list_block .inc_product_block .inc_product_desc_add_text_block.inc_add_toggle') != null){
                        incDataStore["tickboxProducts"] = {}
                        setTimeout(function(){
                            var elprdb = document.querySelectorAll('.inc_pdp_tick_box_product-list_block .inc_product_block')
                            for(var t=0;t<elprdb.length;t++){
                                if(elprdb[t].querySelector('.inc_product_desc_add_text_block.inc_add_toggle') != null){
                                    var productBlockNode = elprdb[t]
                                    var sku = productBlockNode.getAttribute('data-sku');
                                    var findObj = new FindObj();
                                    findObj["sku"] = sku;
                                    var qty = productBlockNode.querySelector('.inc_product_desc_qty_input_text input').value;
                                    incDataStore["tickboxProducts"][sku] = qty;
                                    if(elprdb.length == t+1){
                                        addtickboxToCart()
                                    }
                                }
                            }
                        },1200)
                    }
                }
            }
        }

    }
}
// }
function incPriceMismatch(price, special_price) {
    var priceMismatchObj = {}
    priceMismatchObj.token = 'usPA9'
    priceMismatchObj.product_id = getProductIdFromWebpage()
    priceMismatchObj.product_price = null
    priceMismatchObj.special_price = "0.00"
    priceMismatchObj.old_product_price = price
    priceMismatchObj.old_special_price = special_price
    priceMismatchObj.price_type = "IncVAT"

    if (document.querySelector('.modal_price .sale .current_price .money') != null) {
        if (document.querySelector('.modal_price .sale .current_price .money').innerText.replace(',', '').replace('$', '').split(" ")[0].trim() != null) {
            priceMismatchObj.special_price = document.querySelector('.modal_price .sale .current_price .money').innerText.replace(',', '').replace('$', '').replace('US','').split(" ")[0].trim()
            //priceMismatchObj.special_price = priceMismatchObj.special_price.replace(' ', '')
        }

    }
    if (document.querySelector('.modal_price .was-price .money') != null) {
        if (document.querySelector('.modal_price .was-price .money').innerText.replace(',', '').replace('$', '').split(" ")[0].trim() != null) {
            priceMismatchObj.product_price = document.querySelector('.modal_price .was-price .money').innerText.replace(',', '').replace('$', '').replace('US','').split(" ")[0].trim()
            //priceMismatchObj.product_price = priceMismatchObj.product_price.replace(' ', '')
        }

    }
    if (priceMismatchObj.product_price == null) {
        priceMismatchObj.product_price = priceMismatchObj.special_price
        //priceMismatchObj.special_price = null
    }
    if (price == null) {
        price = special_price
    }
    if (special_price == null) {
        special_price = price
    }

    if (parseFloat(priceMismatchObj.product_price) != parseFloat(special_price) || parseFloat(priceMismatchObj.special_price) != parseFloat(price)) {
        data = {
            "eventData": Base64.encode(JSON.stringify(priceMismatchObj))
        }
        jQuery.ajax({
            type: "POST",
            url: "https://usagather.increasingly.com/ProductPriceDetails",
            data: JSON.stringify(data),
            headers: {
                "content-type": "application/json; charset=utf-8"
            },
            error: function (jqXHR, textStatus, errorMessage) {

            },
            success: function (data) {

            }
        });
        return true;
    } else {
        return false;
    }
}
var Base64 = {
    _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
    encode: function (e) {
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
    decode: function (e) {
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
    _utf8_encode: function (e) {
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
    _utf8_decode: function (e) {
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

function oosproduct(prdid) {
    buildCrawlDataObj()
    var format_json_data;
    var product_id = prdid;
    var qty = 0
    format_json_data = JSON.stringify({
        "token": 'usPA9',
        "product_id": product_id,
        "quantity": qty,
    });

    if (product_id != null) {
        data = {
            "eventData": Base64.encode(format_json_data)
        };

        var p_url = 'https://usagather.increasingly.com/ProductInventoryUpdate';
        var xhr = new XMLHttpRequest();
        xhr.open("POST", p_url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == XMLHttpRequest.DONE) {
                if (xhr.status == 200) {
                    if (xhr.responseText != "" && xhr.responseText != null) {} else {}
                }
            }
        };

        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(JSON.stringify(data));
    }
}

function addToCartError(prdid, errorMessage) {
    var errorObj = {};
    var product_id = prdid;
    var feed_id = 141
    if (product_id.includes("-")) {
        product_id = product_id.split('-')[0]
    }

    if (errorMessage.length == 0) {
        errorMessage = "failed to add product to cart"
    }
    errorMessage = errorMessage == null ? "failed to add product to cart" : errorMessage.toString()

    // var detectPageTypeError = function () {
    //     if (document.querySelector('body.template-collection')) return "101";
    //     if (document.querySelector('body.template-product')) return "107";
    //     if (document.querySelector('#template-page-order')) return "107";
    //     if (document.querySelector("body.template-cart")) return "103";
    // }


    var currentPageType = inc.pageType
    if (inc.pageType == "pdp") {
        currentPageType = "100"
    }
    if (document.querySelector('.inc_sidebar_modal_block') != null && (document.querySelector('.inc_sidebar_modal_block')).style.display != 'none') {
        currentPageType = "107";
    }
    if (inc.pageType == "cartPage") {
        currentPageType = "103"
    }

    errorObj.feedId = feed_id
    errorObj.productId = product_id
    errorObj.source = currentPageType
    errorObj.message = errorMessage
    errorObj.stackTrace = navigator.userAgent


    var data = {
        "eventData": Base64.encode(JSON.stringify(errorObj))
    }


    jQuery.ajax({
        type: "POST",
        url: "https://usaoptimizedby.increasingly.co/AddError",
        headers: {
            "content-type": "application/json; charset=utf-8"
        },
        data: JSON.stringify(data),
        error: function (jqXHR, textStatus, errorMessage) {

        },
        success: function (data) {
            //console.log(data)
        }
    });
}

function irbReq_tickbox() {
    var pdpProductId = getProductIdFromWebpage();
    let elementName = 'catalog_product_view'
    let bundleReqCount = 2;
    let apiKey = "usPA9";
    let irbPATH = "//usarapidload.increasingly.co/increasingly_bundles?irb/";

    let irbReqParams =
        "product_ids=" + pdpProductId +
        "&category_id=" +
        "&api_key=" + apiKey +
        "&client_id=" +
        "&page_type=" + elementName +
        "&fr=" + "1" +
        "&client_visitor_id=" + inc.ivid +
        "&is_tbx=" + "1" +
        "&no_of_bundles=" + bundleReqCount;

    let irbReqURL1 = decodeURI(irbPATH + btoa(irbReqParams));
    let xhr = new XMLHttpRequest();
    xhr.open("GET", irbReqURL1, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status === 200) {
            if (xhr.response != "") {
                tickbox_datstore(JSON.parse(xhr.response),"tickbox")
            }
        }
    }
    xhr.send(JSON.stringify(btoa(irbReqParams)));
}

function tickbox_datstore(bundle_response,tickbox) {
    if(incDataStore.dataStoreObj == undefined){
        incDataStore.dataStoreObj = {}
    }
    let bundles_tc = bundle_response.Bundles;
    let bundleproductarrayTC = {}
    let pdpProductId = ""
    if (bundle_response.ProductsDetail != null) {
        for(let prdetails of bundle_response.ProductsDetail) {
            bundleproductarrayTC[prdetails.ProductId] = prdetails
        }
    } else if (bundle_response.ProductsDetail == null || bundle_response.ProductsDetail == "null") {
        for(let catrec of bundle_response.CategoryRecommendations) {
            bundleproductarrayTC[catrec.ProductId] = catrec
        }
    }
    if(bundles_tc != undefined){
        let bundle_count = bundles_tc.length
        var pdpProductId_ = getProductIdFromWebpage();
        for(let i = 0; i < bundle_count; i++) {
            // if (dupDataObjectProducts.indexOf(bundles_tc[i].BundleId) == -1) {
                // dupDataObjectProducts.push(bundles_tc[i].BundleId)
                let irbBundleObj = bundles_tc[i];
                let bundleObj = {};
                bundleObj.id = irbBundleObj["BundleId"];
                let fltr=false;
                if (INC.config.recommendation == fltr) {
                    bundleObj.id = irbBundleObj["BundleId"];
                    bundleObj.totalRegularPrice = irbBundleObj["TotalPrice"];
                    bundleObj.totalActivePrice = irbBundleObj["TotalSpecialPrice"];
                    bundleObj.totalBundlePrice = irbBundleObj["TotalBundlePrice"];
                    bundleObj.totalBundleDiscountPrice = irbBundleObj["DiscountPrice"];
                    bundleObj.productCount = irbBundleObj["ProductCount"];
                }
                let irbProductsArray = irbBundleObj["ProductIds"]
                if (irbProductsArray.length) {
                    if (pdptickboxpid != undefined) {
                        pdpProductId = irbProductsArray[0];
                        if(pdptickboxpid.indexOf(irbProductsArray[1]) == -1){
                            pdptickboxpid.push(irbProductsArray[1]);
                        }
                    }
                }
                for(let irbprdarray of irbProductsArray) {
                    let product = bundleproductarrayTC[irbprdarray]
                    if(pdpProductId_ != product.ProductId){
                        var pAttributes = product["Attributes"];
                        var pAttObj = {};
                        if(pAttributes != null){
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
                                            childProduct["ProductLevelDiscountMessage"] = product["ProductLevelDiscountMessage"]
                                        }
                                        childProduct["ProductType"] = product["ProductType"]
                                        var productObj = createProductAttObj(childProduct);
                                        productObj.mainId = product["ProductId"];
                                        productObj.bundleId = bundleObj.id;
                                        productObj.option[pAttributesObj["attributeId"]].id = pAttributesObj["attributeId"];
                                        productObj.option[pAttributesObj["attributeId"]].label = pAttributesObj["frontEndLabel"];
                                        productObj.option[pAttributesObj["attributeId"]].code = pAttributesObj["attributeCode"];
    
                                        if (!incDataStore.dataStoreObj.hasOwnProperty(product['ProductId'])) {
                                            incDataStore.dataStoreObj[product['ProductId']] = {};
                                        }
                                        if (!incDataStore.dataStoreObj[product['ProductId']].hasOwnProperty(productObj['id'])) {
                                            incDataStore.dataStoreObj[product['ProductId']][productObj['id']] = {}
                                        }
                                        pAttObj = incDataStore.dataStoreObj[product['ProductId']][productObj['id']];
                                        for (pAtt in productObj) {
                                            if (pAtt == "option") {
                                                if (!pAttObj.hasOwnProperty('option')) {
                                                    pAttObj["option"] = {}
                                                }
                                                Object.keys(productObj[pAtt]).forEach(function (key) {
                                                    pAttObj[pAtt][key] = productObj[pAtt][key];
                                                });
                                            } else {
                                                pAttObj[pAtt] = productObj[pAtt];
                                            }
                                        }
                                    }
                                }
                            }
                        }
                        if (pAttributes == null) {
                            productObj = new createProductObj(product);
                            productObj["bundleId"] = irbBundleObj["BundleId"];
                            productObj["bundledProductId"] = pdpProductId;
                            productObj.sku = productObj.id;
                            productObj.Filed3 = product["Field3"] + " | " + product["Field4"];
                            if ((incDataStore.dataStoreObj != undefined) && !Object.prototype.hasOwnProperty.call(incDataStore.dataStoreObj, productObj['mainId'])) {
                                incDataStore.dataStoreObj[productObj['mainId']] = {};
                            }
                            if (incDataStore.dataStoreObj != undefined) {
                                incDataStore.dataStoreObj[productObj['mainId']][productObj['id']] = {};
                                if (!!window.MSInputMethodContext && !!document.documentMode) {
                                    incDataStore.dataStoreObj[productObj['mainId']][productObj['id']] = JSON.parse(JSON.stringify(productObj));
                                } else {
                                    incDataStore.dataStoreObj[productObj['mainId']][productObj['id']] = Object.assign({}, productObj);
                                }
                            }
                        }
                        // if (pAttributes == null) {
                        //     productObj = new createProductObj(product);
                        //     productObj["bundleId"] = irbBundleObj["BundleId"];
                        //     if (INC.config.recommendation == false) {
                        //         productObj["bundledProductId"] = pdpProductId;
                        //     }

                        //     productObj.sku = productObj.id;
                        //     productObj.Filed3 = product["Field3"] + " | " + product["Field4"];
                        //     if (!Object.prototype.hasOwnProperty.call(incDataStore.dataStoreObj, productObj['mainId'])) {
                        //         incDataStore.dataStoreObj[productObj['mainId']] = {};
                        //     }

                        //     incDataStore.dataStoreObj[productObj["id"]] = {};
                        //     if (!!window.MSInputMethodContext && !!document.documentMode) {
                        //         incDataStore.dataStoreObj[productObj['mainId']][productObj['id']] = JSON.parse(JSON.stringify(productObj));
                        //     } else {
                        //         incDataStore.dataStoreObj[productObj['mainId']][productObj['id']] = Object.assign({}, productObj);
                        //     }
                        // }
                       
                    }
                }
            // }
        }
        if(tickbox == "tickbox"){
            pdptickboxblock()
        }
    }
}

function pdptickboxblock(){
    var eltickplacement=document.querySelector('.product-form__cart-submit')
    if(el_tick_boxblock != null){
        el_tick_boxblock.parentNode.removeChild(el_tick_boxblock)
    }
    var eltickplacement=document.querySelector('.purchase-details .purchase-details__buttons')
    var el_tick_box = '<div class="inc_pdp_tick_box_title_block"><div class="inc_pdp_tick_box_title_text_block">Customers also buy: </div></div><div class="inc_pdp_tick_box_product-list_block"></div>'
    var eltickboxblock = document.createElement('div')
    eltickboxblock.classList.add('inc_pdp_tick_box_block')
    eltickboxblock.innerHTML = el_tick_box
    
    var pdpClassNames = uiConfig.tickbox.className;
    var tickboxPDP = getElementChilds('productBlock', 'tickbox');
    Array.prototype.forEach.call(tickboxPDP.querySelectorAll(getSelectorClassName(pdpClassNames, "productBlock")), function (block) {
        block.parentNode.removeChild(block);
    });
    var loadbundles = false
    eltickboxblock.querySelector('.inc_pdp_tick_box_product-list_block').innerHTML = ""
    for(var t=0;t<pdptickboxpid.length;t++){
        // || t == 2
        if(t == 0){
            var productBlock = createProductBlock(pdptickboxpid[t], "tickbox");
            loadbundles = true
            eltickboxblock.querySelector('.inc_pdp_tick_box_product-list_block').appendChild(productBlock)
        }
    }
    if(loadbundles == true){
        if(eltickplacement != null){
            eltickplacement.parentNode.insertBefore(eltickboxblock,eltickplacement)
        }
    }
    if(document.querySelector('.inc_pdp_tick_box_product-list_block .inc_product_att_sel_block') != null){
        document.querySelector('.inc_pdp_tick_box_product-list_block .inc_product_att_sel_block').style.display = "none";
        if(document.querySelectorAll('.inc_pdp_tick_box_product-list_block .inc_product_att_sel_block')[1] != undefined){
            document.querySelectorAll('.inc_pdp_tick_box_product-list_block .inc_product_att_sel_block')[1].style.display = "none";
        }
        if(document.querySelectorAll('.inc_pdp_tick_box_product-list_block .inc_product_att_sel_block')[2] != undefined){
            document.querySelectorAll('.inc_pdp_tick_box_product-list_block .inc_product_att_sel_block')[2].style.display = "none";
        }
    }
    setTimeout(function(){
        onloadflag = false
    },3000)
}

function addtickboxToCart() {
    var reqURL = 'https://uspoloassn.com/cart/add.js';

    var tickboxProductsObj = incDataStore.tickboxProducts;
    var tickboxProductsArray = Object.keys(tickboxProductsObj);

    var iatc = JSON.parse(window.sessionStorage.getItem("itemsAddedToCart")) || {};
    tickboxProductsArray.forEach(function (sku) {
        var findObj = new FindObj();
        findObj["sku"] = sku;

        var productObj = getProductBySKU(findObj);
        iatc[productObj.mainId] = "added";
    });
    window.sessionStorage.setItem("itemsAddedToCart", JSON.stringify(iatc));

    var formData = new FormData();

    var findObj = new FindObj();
    findObj["sku"] = tickboxProductsArray[0];

    var productObj = getProductBySKU(findObj);
    logger(productObj);
    formData.append('form_type', 'product');
    if(productObj.productType == 'simple'){
        formData.append("id", productObj.addsku);
    }else{
        formData.append("id", productObj.sku);
    }
    if(productObj["option"] != undefined){
        if(productObj["option"] != undefined){
            if (productObj.hasOwnProperty("option")) {
                Object.keys(productObj["option"]).forEach(function (option) {
                    switch (option) {
                        case "1":
                            formData.append("option-0", productObj["option"]["1"].text);
                            break;
                        case "2":
                            formData.append("option-1", productObj["option"]["2"].text);
                            break;
                        case "3":
                            formData.append("option-2", productObj["option"]["3"].text);
                            break;
                    }
                });
            }
        }
    }

    formData.append('quantity', tickboxProductsObj[productObj["sku"]]);

    networkReqForCart(reqURL, formData, 'POST', function () {

        if (tickboxProductsArray.length < 2) {
            showSidebar();
            updateSidebarBlock("tickbox");
            document.querySelector(getSelectorClassName(uiConfig["pdp"].className, "pdpBundleCartSummaryAddBtnText")).classList.remove("inc_loading");
            return;
        }

        var formData1 = new FormData();
        var findObj1 = new FindObj();

        findObj1["sku"] = tickboxProductsArray[1];

        var productObj1 = getProductBySKU(findObj1);

        formData1.append('form_type', 'product');
        // formData1.append('id', productObj1.sku);
        if(productObj1.productType == 'simple'){
            formData1.append("id", productObj1.addsku);
        }else{
            formData1.append("id", productObj1.sku);
        }
        if(productObj1["option"] != undefined){
            if (productObj1.hasOwnProperty("option")) {
                Object.keys(productObj1["option"]).forEach(function (option) {
                    switch (option) {
                        case "1":
                            formData1.append("option-0", productObj1["option"]["1"].text);
                            break;
                        case "2":
                            formData1.append("option-1", productObj1["option"]["2"].text);
                            break;
                        case "3":
                            formData1.append("option-2", productObj1["option"]["3"].text);
                            break;
                    }
                });
            }
        }

        formData1.append('quantity', tickboxProductsObj[productObj1["sku"]]);
        setTimeout(function () {
            networkReqForCart(reqURL, formData1, 'POST', function () {

                if (tickboxProductsArray.length < 3) {
                    showSidebar();
                    updateSidebarBlock("tickbox");;
                    document.querySelector(getSelectorClassName(uiConfig["pdp"].className, "pdpBundleCartSummaryAddBtnText")).classList.remove("inc_loading");
                    return;
                }

                var formData2 = new FormData();
                var findObj2 = new FindObj();

                findObj2["sku"] = tickboxProductsArray[2];

                var productObj2 = getProductBySKU(findObj2);

                formData2.append('form_type', 'product');
                // formData2.append('id', productObj2.sku);
                if(productObj2.productType == 'simple'){
                    formData2.append("id", productObj2.addsku);
                }else{
                    formData2.append("id", productObj2.sku);
                }
                if(productObj2["option"] != undefined){
                    if (productObj2.hasOwnProperty("option")) {
                        Object.keys(productObj2["option"]).forEach(function (option) {
                            switch (option) {
                                case "1":
                                    formData2.append("option-0", productObj2["option"]["1"].text);
                                    break;
                                case "2":
                                    formData2.append("option-1", productObj2["option"]["2"].text);
                                    break;
                                case "3":
                                    formData2.append("option-2", productObj2["option"]["3"].text);
                                    break;
                            }
                        });
                    }
                }

                formData2.append('quantity', tickboxProductsObj[productObj2["sku"]]);

                setTimeout(function () {
                    networkReqForCart(reqURL, formData2, 'POST', function () {
                        if (tickboxProductsArray.length < 4) {
                            showSidebar();
                            updateSidebarBlock("tickbox");;
                            document.querySelector(getSelectorClassName(uiConfig["pdp"].className, "pdpBundleCartSummaryAddBtnText")).classList.remove("inc_loading");
                            return;
                        }

                        var formData3 = new FormData();
                        var findObj3 = new FindObj();

                        findObj3["sku"] = tickboxProductsArray[3];

                        var productObj3 = getProductBySKU(findObj3);

                        formData3.append('form_type', 'product');
                        // formData3.append('id', productObj3.sku);
                        if(productObj3.productType == 'simple'){
                            formData3.append("id", productObj3.addsku);
                        }else{
                            formData3.append("id", productObj3.sku);
                        }
                        if(productObj3["option"] != undefined){
                            if (productObj3.hasOwnProperty("option")) {
                                Object.keys(productObj3["option"]).forEach(function (option) {
                                    switch (option) {
                                        case "1":
                                            formData3.append("option-0", productObj3["option"]["1"].text);
                                            break;
                                        case "2":
                                            formData3.append("option-1", productObj3["option"]["2"].text);
                                            break;
                                        case "3":
                                            formData3.append("option-2", productObj3["option"]["3"].text);
                                            break;
                                    }
                                });
                            }
                        }

                        formData3.append('quantity', tickboxProductsObj[productObj3["sku"]]);

                        setTimeout(function () {
                            networkReqForCart(reqURL, formData3, 'POST', function () {
                                if (tickboxProductsArray.length < 5) {
                                    showSidebar();
                                    updateSidebarBlock("tickbox");;
                                    document.querySelector(getSelectorClassName(uiConfig["pdp"].className, "pdpBundleCartSummaryAddBtnText")).classList.remove("inc_loading");
                                    return;
                                }

                                var formData4 = new FormData();
                                var findObj4 = new FindObj();

                                findObj4["sku"] = tickboxProductsArray[4];

                                var productObj4 = getProductBySKU(findObj4);

                                formData4.append('form_type', 'product');
                                // formData4.append('id', productObj4.sku);
                                if(productObj4.productType == 'simple'){
                                    formData4.append("id", productObj4.addsku);
                                }else{
                                    formData4.append("id", productObj4.sku);
                                }
                                if(productObj4["option"] != undefined){
                                    if (productObj4.hasOwnProperty("option")) {
                                        Object.keys(productObj4["option"]).forEach(function (option) {
                                            switch (option) {
                                                case "1":
                                                    formData4.append("option-0", productObj4["option"]["1"].text);
                                                    break;
                                                case "2":
                                                    formData4.append("option-1", productObj4["option"]["2"].text);
                                                    break;
                                                case "3":
                                                    formData4.append("option-2", productObj4["option"]["3"].text);
                                                    break;
                                            }
                                        });
                                    }
                                }

                                formData4.append('quantity', tickboxProductsObj[productObj4["sku"]]);

                                setTimeout(function () {
                                    networkReqForCart(reqURL, formData4, 'POST', function () {
                                        showSidebar();
                                        updateSidebarBlock("tickbox");;
                                        document.querySelector(getSelectorClassName(uiConfig["pdp"].className, "pdpBundleCartSummaryAddBtnText")).classList.remove("inc_loading");
                                    });
                                }, 250);
                            });
                        }, 250);
                    });
                }, 250);

            });
        }, 250);

    });

    var mainProductId = incDataStore.pdpProductId;
    tickboxProductsArray.forEach(function (productSKU) {
        var findObj = new FindObj();
        findObj["sku"] = productSKU;
        var productObj = getProductBySKU(findObj);
        var eventDataObj = {};
        eventDataObj["bundle_data"] = {
            "id": productObj.bundleId,
            "product_ids": [mainProductId, productObj.id],
            "product_id": mainProductId
        };

        trackingEvents("bundleAddToCart", eventDataObj,"tickbox");
    });
}

