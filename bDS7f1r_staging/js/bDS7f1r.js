

addCSSFile()
function addCSSFile() {
    var versionUpdate = (new Date()).getTime();
    var cssFilePath = "https://www.increasingly.co/Implementation/bDS7f1r_staging/css/bDS7f1r.css?v=" + versionUpdate;
    var linkTag = document.createElement('link');
    linkTag.rel = "stylesheet";
    linkTag.href = cssFilePath;
    document.querySelector('head').appendChild(linkTag);
}
var INC = (typeof(INC) == "undefined") ? {} : INC;
var init_flag = true
INC.ENV = "prod";
INC.debug = 0;
INC.initStatus = "";
INC.initStatusCP = "";
var prefix = "inc_";
var postfix = "_block";
onloadpdp = false;
//"staging.bradfords.co.uk"
INC.checkDevUserCookie = function() {
    if (INC.ENV == "prod") {
        setTimeout(function() {
            INC.config.pageType = INC.methods.detectPageType();
            if (INC.debug) console.log(INC.config.pageType);

            if (init_flag) {
                init_flag = false;
                INC.init();
            }
        }, 200);
    }
}

INC.clientConfig = {};
INC.clientConfig.currencySymbol = "";
INC.clientConfig.productPage = {};
INC.clientConfig.productPage.pdpElementSelector = "";
INC.clientConfig.productPage.amElementSelector = "";
INC.clientConfig.productPage.sbElementSelector = "";
INC.clientConfig.productListPage = {};
INC.clientConfig.productListPage.sbElementSelector = "";
INC.clientConfig.cartPage = {};
INC.clientConfig.cartPage.amElementSelector = "";
INC.clientConfig.statusVAT = "";
INC.clientConfig.regularPricePrefix = "";
INC.clientConfig.checkoutLink = "http://staging.bradfords.co.uk/checkout/cart/";
INC.clientConfig.loggedInUser = "";
INC.clientConfig.offset = 0;
INC.clientConfig.slidevalue = 0;
INC.config = {};
INC.config.deviceType = "";
INC.config.clientToken = "bDS7f1r";
INC.config.trackingURL = "https://optimizedby.increasingly.co/ImportData";
INC.config.addToBasketURL = "http://staging.bradfords.co.uk/checkout/cart/add/uenc/";
INC.config.affiliateURL = "";
INC.config.crawlDataObj = {};
INC.config.pageType = "";
INC.config.ivid = "";
INC.config.language = "en";
INC.config.clientOverlayInterval = "";
INC.config.conversionPixelFileStatus = "";
INC.config.deviceMode = "";
INC.config.pdpaddedProductList = [];
INC.config.stopImgOver = false;
INC.config.tout = null;
INC.config.plpstorebtnclick = null;
INC.config.empty_prod_details = []
INC.config.inc_slideIndex = 1;
INC.config.quick_view = true;
INC.config.user_interaction_modal = true;
INC.config.close_modal_time = 0;
INC.config.bundle_tracking = [];
INC.config.Product_id = null;
INC.config.dupBasket = [];
INC.config.dupDataObjectProducts = [];
//INC.config.noimage= "https://www.increasingly.co/Implementation/bLD8x/images/noimage.png"
INC.config.noimage = "https://www.increasingly.co/Implementation/bDS7f1r/js/noimage.png"
INC.config.srcImgeLazy = "https://www.increasingly.co/Implementation/bDS7f1r/prod/images/img_placeholder.gif";

// Manual promo badges
INC.config.bigDeals = ["ABN642", "PNT105", "PNT106", "DTA066", "SMP211", "ABR598", "ABP681", "ABP680", "SMP215", "FBD012", "APP053", "FPS020", "HTB051", "HTA686", "HTA112", "HTA111", "CLA997", "ABK315", "ABP964"];
INC.config.springSummer = ["CBP122", "CBP125", "CBP126", "CBP124", "MEL613", "STP341", "STP773", "STP765", "GFP136", "GFP135", "GFP134", "GFP137", "GFP131", "GSL015", "GRS240", "GFP133", "GFP132", "GLS060", "STP769", "PTC020", "DEK103", "DEK102", "DEK101", "DEK100", "DEK104", "STP763", "STP764", "CVP006", "ALG001", "CVP004", "CVP005", "CVP001", "MEL605", "BAG010", "ABR862", "DSS105", "WSW005", "LSF008", "LSF013", "PTK135", "WDS600", "PTM176", "PTK134", "PTK121", "WDS604", "WDS602", "ALH010", "ALR010", "PNT173", "PNT172", "BPS005", "ATG035", "PNT176", "PNT174", "PNT347", "WDS601", "PTD266", "GLS065", "GLS064", "ABR861", "PTD268", "PTD286", "PTM007", "PTM302", "PTD521"]

var init_fun_flag = true
INC.config.storeId = ""
if (window.innerWidth > 1367) {
    INC.config.dekstop = true
} else {
    INC.config.dekstop = false
}
if (window.innerWidth > 960) {
    INC.config.tab = true
} else {
    INC.config.tab = false
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



INC.init = function(init_call) {
    if (init_fun_flag == true || init_call == "init_call") {

        if (document.querySelector('#branchNumber') != null) {
            INC.config.storeId = document.querySelector('#branchNumber').value;
            localStorage.setItem('inc_storeId', INC.config.storeId)
        }
        if (INC.config.storeId == "" && localStorage.getItem('inc_storeId') != undefined) {
            INC.config.storeId = localStorage.getItem('inc_storeId')
        } else {
            // INC.config.storeId = "8263"
        }
        INC.methods.addVisitorID();
        INC.config.deviceType = INC.methods.detectDeviceType();
        INC.config.pageType = INC.methods.detectPageType();
        INC.config.language = INC.methods.detectLanguage();
        INC.clientConfig.statusVAT = INC.methods.checkStatusVAT();
        INC.clientConfig.statusLoggedIn = INC.methods.checkStatusLoggedIn();
        if (INC.debug) console.log(INC.config.pageType);
        if (INC.debug) console.log(INC.clientConfig.statusVAT);
        INC.methods.clear();
        switch (INC.config.pageType) {
            case "pdp":
                if (INC.debug) console.log("on pdp page");
                setTimeout(function() {
                    var productId = INC.methods.getProductIdFromWebPage();
                    if (INC.debug) console.log(productId);

                    INC.methods.irbReq(productId, 5, "catalog_product_view");
                }, 0);
                setTimeout(function(){
                    INC.methods.sendCrawlData()
                }, 1000)
                break;
            case "cartPage":
                if (INC.debug) console.log("on cart page");
                setTimeout(function() {
                    var productIds = []

                    Array.prototype.forEach.call(document.querySelectorAll('.checkout-items .item-wrapper .item .item-title'), function(elProductCode) {
                        productIds.push(elProductCode.querySelectorAll('span')[0].innerText.split(':')[1].trim());

                    });
                    INC.methods.irbReq(productIds, 12, "checkout_cart_index");
                }, 0);

                break;
            case "productList":
                var productId = "";
                if (document.querySelector('.heading-wrapper .heading') != null) {
                    var t_l = document.querySelectorAll('.wrapper .breadcrumbs-wrapper .breadcrumbs li').length
                    productId = document.querySelectorAll('.wrapper .breadcrumbs-wrapper .breadcrumbs li')[t_l - 2].querySelector('a').innerText.trim().toUpperCase();
                } else if(document.querySelector('.items-list .heading') != null){
                    var t_l = document.querySelectorAll('.breadcrumbs-wrapper .breadcrumbs li').length
                    productId = document.querySelectorAll('.breadcrumbs-wrapper .breadcrumbs li')[t_l-1].innerText
                    
                }else if(document.querySelector('.heading-wrapper .heading') != null){
                    productId = document.querySelector('.heading-wrapper .heading').innerText;
                }

                // productId = "Ventilation".toUpperCase()
                INC.methods.irbReq_category_based(productId, 10, "catalog_category_view")
                
                break;
        }

        if (INC.debug) {
            // setInterval(function () {
            if (INC.debug) console.log(INC.dataStore.bundleCartProducts);
            // }, 5000);
        }
    }
}


INC.dataStore = {};
INC.dataStore.methods = function() {
    var incDataStore = INC.dataStore;
    // var dataStoreObj = INC.dataStore.dataStoreObj;
    var dataStoreObj = {};

    function buildDataStoreObj(bundleResponse) {
        INC.config.dupDataObjectProducts = []
        INC.dataStore.clientProductDealsCategory = "";
        if (INC.config.pageType == "productList") {
            var bundles = [];
        } else {
            var bundles = bundleResponse.Bundles;
        }
        var productDealCount = 0;
        if (bundleResponse.ProductDeals != null) {
            bundleResponse.ProductDeals.forEach(function(productDealObj) {

                bundles.push({
                    BundleId: bundles[0]["BundleId"],
                    Products: [bundles[0].ProductIds[0], productDealObj]
                });

                INC.dataStore.clientProductDealsCategory = productDealObj.CategoryId;
            });
        }



        var dataStoreObj = {};
        var bundleProductsArray = [];
        var pdpProductId = '';
        if (window.location.pathname == "/checkout/cart/") {
            var productIds_d = [];
            Array.prototype.forEach.call(document.querySelectorAll('.checkout-items .item-wrapper .item .item-title'), function(elProductCode) {
                productIds_d.push(elProductCode.querySelectorAll('span')[0].innerText.split(':')[1].trim());

            });
        }

        if (INC.config.pageType == "productList") {
            bundle_count = 1
        } else {
            var bundle_count = bundles.length
        }
        
        var bundleproductarray={}
        if(INC.config.pageType != "productList"){
            if(bundleResponse.ProductsDetail != null){
                for (var ib = 0; ib < bundleResponse.ProductsDetail.length; ib++) {
                    bundleproductarray[bundleResponse.ProductsDetail[ib].ProductId] = bundleResponse.ProductsDetail[ib]
                }
            }
        }
        // for (var i = 0; i < 3; i++) {
            
        for (var i = 0; i < bundle_count; i++) {
            if (INC.config.pageType == "productList") {
                bundles.push({
                    BundleId: 1
                })
            }
            if (INC.config.dupDataObjectProducts.indexOf(bundles[i].BundleId) == -1) {
                INC.config.dupDataObjectProducts.push(bundles[i].BundleId)
                var irbBundleObj = bundles[i];
                var bundleObj = {};
                if (INC.config.pageType == "productList") {
                    bundleObj.id = irbBundleObj["BundleId"];
                    // if (INC.debug) console.log(bundleObj.id);
                    bundleObj.totalRegularPrice = irbBundleObj["TotalPrice"];
                    bundleObj.totalActivePrice = irbBundleObj["TotalSpecialPrice"];
                    bundleObj.totalBundlePrice = irbBundleObj["TotalBundlePrice"];
                    bundleObj.totalBundleDiscountPrice = irbBundleObj["DiscountPrice"];
                    bundleObj.productCount = irbBundleObj["ProductCount"];
                }
                if (INC.config.pageType == "productList") {
                    var irbProductsArray = bundleResponse.CategoryRecommendations;
                } else {
                    var irbProductsArray = irbBundleObj["ProductIds"];
                }
                

                if (INC.config.pageType != "productList") {
                    if (irbProductsArray.length) {
                        if (window.location.pathname == "/checkout/cart/") {
                            if (productIds_d.indexOf(irbProductsArray[0]) >= 0) {
                                pdpProductId = irbProductsArray[0];
                                if (irbProductsArray[1].Attributes == null && INC.clientConfig.statusLoggedIn == true) {
                                    bundleProductsArray.push(irbProductsArray[1]);
                                }

                                if (INC.clientConfig.statusLoggedIn == false) {
                                    bundleProductsArray.push(irbProductsArray[1]);
                                }
                            } else if (productIds_d.indexOf(irbProductsArray[1]) >= 0) {
                                pdpProductId = irbProductsArray[1];
                                if (irbProductsArray[0].Attributes == null && INC.clientConfig.statusLoggedIn == true) {
                                    bundleProductsArray.push(irbProductsArray[0]);
                                }

                                if (INC.clientConfig.statusLoggedIn == false) {
                                    bundleProductsArray.push(irbProductsArray[0]);
                                }
                            }
                        } else {
                            pdpProductId = irbProductsArray[0];
                            bundleProductsArray.push(irbProductsArray[1]);
                        }
                    }
                }

                for (var j = 0; j < irbProductsArray.length; j++) {
                    // var product = irbProductsArray[j];
                    if(INC.config.pageType == "productList"){
                        var product = irbProductsArray[j]
                    }else{
                        var product = bundleproductarray[irbProductsArray[j]];
                    }
                    
                    if (product["SpecialPrice"] == 0) {
                        product["SpecialPrice"] = product["Price"]
                    }
                    if (isBase64(product["Description"]) == true) {
                        product["Description"] = (product["Description"])
                    } else {
                        // product["Description"] = product["Description"]
                        try {
                            if (product["Description"] != "" && product["Description"] != null) {
                                if (product["Description"].indexOf('the') >= 0 || product["Description"].indexOf('for') >= 0 || product["Description"].indexOf('of') >= 0 || product["Description"].indexOf('and') >= 0 || product["Description"].indexOf('is') >= 0 || product["Description"].indexOf('are') >= 0 || product["Description"].indexOf('FROM') >= 0 || product["Description"].indexOf('from') >= 0 || product["Description"].indexOf('*') >= 0 || product["Description"].indexOf('Concrete') >= 0 || product["Description"].indexOf('Round') >= 0) {
                                    product["Description"] = product["Description"]
                                } else {
                                    product["Description"] = (product["Description"])
                                }

                            }
                        } catch (e) {
                            product["Description"] = product["Description"]
                        }

                    }
                    if (INC.config.pageType == "productList") {
                        bundleProductsArray.push(product["ProductId"]);
                    }
                    var pAttributes = product["Attributes"] || "";
                    if (pAttributes != "" && pAttributes != null) {
                        pAttributes = attribute_listing(pAttributes)
                    }
                    var pAttObj = {};
                    for (t = 0; t < pAttributes.length; t++) {
                        pAttributes[t].attributeId = t
                        var attr_values = pAttributes[t].attributeValues;
                        for (v = 0; v < attr_values.length; v++) {
                            attr_values[v].optionId = t;
                        }
                    }

                    if (pAttributes.length) {
                        for (var k = 0; k < pAttributes.length; k++) {
                            var pAttributesObj = pAttributes[k];
                            var pAttributesValues = pAttributesObj["attributeValues"];

                            for (var l = 0; l < pAttributesValues.length; l++) {
                                var childProduct = pAttributesValues[l];
                                if (childProduct["childProductId"] == null) {
                                    childProduct["childProductId"] = product["ProductId"];
                                    childProduct["childProductSku"] = product["ProductId"];
                                    childProduct["childProductName"] = product["ProductName"];
                                    childProduct["childProductImageUrl"] = product["ImageURL"];
                                    childProduct["childProductOtherImageUrl"] = product["OtherImageList"];
                                    childProduct["childProductUrl"] = product["ProductUrl"];
                                    childProduct["childProductPrice"] = product["Price"];
                                    childProduct["childProductSpecialPrice"] = product["SpecialPrice"];
                                    childProduct["childProductDescription"] = product["Description"];
                                    childProduct["childInternalProductId"] = product["ProductId"]
                                }
                                if (childProduct["childProductImageUrl"] == "") {
                                    childProduct["childProductImageUrl"] = product["ImageURL"];
                                }
                                childProduct["childProductImageUrl"] = childProduct["childProductImageUrl"].replace('staging.buildex.co.uk', 'www.buildex.co.uk')
                                childProduct["childProductUrl"] = childProduct["childProductUrl"].replace('', '').replace('staging.buildex.co.uk', 'www.buildex.co.uk')
                                childProduct["PromotionalMessage"] = product["PromotionalMessage"];
                                childProduct["ProductLevelDiscountMessage"] = product["ProductLevelDiscountMessage"];
                                childProduct["childCategoryName"] = product["CategoryName"];
                                childProduct["childProductField6"] = product["Field6"];
                                childProduct["childCategoryId"] = product["CategoryId"];
                                childProduct["childProductDescription"] = product["Description"];
                                childProduct["ShortDescription"] = product["Description"];
                                childProduct["Field3"] = product["Field3"];


                                var productObj = new INC.classes.ProductAttObj(childProduct);

                                productObj["bundledProductId"] = pdpProductId;
                                productObj.mainId = product["ProductId"];
                                productObj.bundleId = bundleObj.id;
                                productObj.sku = productObj.id;
                                productObj.option[pAttributesObj["attributeId"]].id = pAttributesObj["attributeId"];
                                productObj.option[pAttributesObj["attributeId"]].label = pAttributesObj["frontEndLabel"];
                                productObj.option[pAttributesObj["attributeId"]].code = pAttributesObj["attributeCode"];
                                productObj.Filed3 = product["Field1"];
                                productObj.ProductLevelDiscountMessage = product["ProductLevelDiscountMessage"];
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

                                        Object.keys(productObj[pAtt]).forEach(function(key) {
                                            pAttObj[pAtt][key] = productObj[pAtt][key];
                                        });
                                    } else {
                                        pAttObj[pAtt] = productObj[pAtt];
                                    }
                                }
                            }

                        }
                    }

                    if (pAttributes.length == 0) {
                        var productObj = new INC.classes.ProductObj(product);
                        productObj["bundleId"] = irbBundleObj["BundleId"];
                        productObj["bundledProductId"] = pdpProductId;
                        productObj.sku = productObj.id;
                        productObj.Filed3 = product["Field1"];
                        productObj.ProductLevelDiscountMessage = product["ProductLevelDiscountMessage"];
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
            }
        }

        incDataStore.dataStoreObj = dataStoreObj;
        incDataStore.bundleProductsArray = bundleProductsArray;
        incDataStore.pdpProductId = pdpProductId;
        if (INC.debug) console.log("DataStore");
        if (INC.debug) console.log(incDataStore)
        incDataStore.bundleCartProducts = {};
        if (INC.config.pageType == "productList") {
            setTimeout(function() {
                INC.methods.createAMBlock();
                onloadpdp = true
            }, 100)
        }
    }

    function getFirstProductObjByMainId(findObj) {
        var childProductObj = {};
        var productListObj = INC.dataStore.dataStoreObj;
        if (productListObj != undefined) {
            childProductObj = productListObj[findObj["mainId"]][Object.keys(productListObj[findObj["mainId"]])[0]];
        }

        return childProductObj;
    }

    function getProductById(findObj) {
        var childProductObj = {};
        var productListObj = INC.dataStore.dataStoreObj;
        if (findObj.hasOwnProperty("id")) {
            for (mainProductId in productListObj) {
                for (childProductId in productListObj[mainProductId]) {
                    if (productListObj[mainProductId][childProductId]["id"] == findObj["id"]) {
                        childProductObj = productListObj[mainProductId][childProductId];
                    }
                }
            }
        }
        return childProductObj;
    }

    function getProductBySKU(findObj) {
        var childProductObj = {};
        var productListObj = INC.dataStore.dataStoreObj;

        if (findObj.hasOwnProperty('sku')) {
            for (mainProductId in productListObj) {
                for (childProductId in productListObj[mainProductId]) {
                    if (productListObj[mainProductId][childProductId]["sku"] == findObj['sku']) {
                        childProductObj = productListObj[mainProductId][childProductId];
                    }
                }
            }
        }
        // if (INC.debug) console.log(childProductObj);
        return childProductObj;
    }

    function getUniqueCatergories() {
        var catergoriesArray = [];

        var productListObj = INC.dataStore.dataStoreObj;
        var bundleProductsArray = INC.dataStore.bundleProductsArray;

        bundleProductsArray.forEach(function(productId) {

            for (childProductId in productListObj[productId]) {
                var indexOfCategoryId = catergoriesArray.indexOf(productListObj[productId][childProductId]["categoryId"]);
                if (indexOfCategoryId == -1 && productListObj[productId][childProductId]["categoryId"] != INC.dataStore.clientProductDealsCategory) {
                    catergoriesArray.push(productListObj[productId][childProductId]["categoryId"]);
                }
            }
        });
        return catergoriesArray;
    }

    function getProductColorsObj(findObj, type_of) {

        var productColorObj = {};
        var productListObj = INC.dataStore.dataStoreObj;
        var productColorArrayObj = {}
        var productColorObjArray = [];
        var option_ids = ""
        var is_color = true;
        if (findObj.hasOwnProperty("mainId")) {
            for (mainProductId in productListObj) {
                if (mainProductId == findObj["mainId"]) {
                    for (childProductId in productListObj[mainProductId]) {
                        if (productListObj[mainProductId][childProductId]["option"]["0"] != undefined) {
                            if (productListObj[mainProductId][childProductId]["option"]["0"].code == "color") {
                                if (productListObj[mainProductId][childProductId]["option"] != null &&
                                    productListObj[mainProductId][childProductId]["option"] != undefined &&
                                    productListObj[mainProductId][childProductId]["option"]["0"] != null &&
                                    productListObj[mainProductId][childProductId]["option"]["0"] != undefined) {
                                    if (type_of != undefined) {
                                        var attr_block = null;
                                        if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == false) {
                                            attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                        } else {
                                            attr_block = type_of.parentNode.parentNode.parentNode
                                        }
                                        if (type_of.parentNode != null) {
                                            var opt_text = attr_block.getAttribute('data-zero');
                                            var opt_size_text = attr_block.getAttribute('data-size');
                                            if (opt_size_text == undefined) {
                                                var opt_size_text = ""
                                            }
                                        } else {
                                            var opt_text = type_of.innerText;
                                            var opt_size_text = ""
                                        }

                                        if (opt_text != "" && opt_size_text != "" && productListObj[mainProductId][childProductId].option[1] != undefined && productListObj[mainProductId][childProductId].option[2] != undefined) {
                                            if (productListObj[mainProductId][childProductId].option[1].text == opt_text && productListObj[mainProductId][childProductId].option[2].text == opt_size_text) {
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]] = {};
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = "";
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = "";
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["0"]["titleText"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["0"]["colorCode"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["0"]["imgSrc"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["0"]["code"];
                                            }
                                        } else if (opt_text != "" && productListObj[mainProductId][childProductId].option[1] != undefined) {
                                            if (productListObj[mainProductId][childProductId].option[1].text == opt_text) {
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]] = {};
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = "";
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = "";
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["0"]["titleText"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["0"]["colorCode"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["0"]["imgSrc"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["0"]["code"];
                                            }
                                        } else {
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]] = {};
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = "";
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = "";
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["0"]["titleText"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["0"]["colorCode"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["0"]["imgSrc"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["0"]["code"];
                                        }
                                    } else {
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]] = {};
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = "";
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = "";
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["0"]["titleText"];
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["0"]["colorCode"];
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["0"]["imgSrc"];
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["0"]["code"];
                                    }

                                }
                            } else {
                                is_color = false;
                            }
                        }
                    }
                }
            }
        }
        Object.keys(productColorArrayObj).forEach(function(colorText) {
            var colorObj = {}
            colorObj["text"] = colorText;
            // colorObj["imgSrc"] = productColorArrayObj[colorText];
            colorObj["colorCode"] = productColorArrayObj[colorText]["colorCode"];
            colorObj["imgSrc"] = productColorArrayObj[colorText]["imgSrc"];
            colorObj["titleText"] = productColorArrayObj[colorText]["titleText"];
            colorObj["code"] = productColorArrayObj[colorText]["code"];
            productColorObjArray.push(colorObj);
        });
        if (type_of == "size") {
            productColorObj["sizeArray"] = productColorObjArray;
        } else if (type_of == "zero") {
            productColorObj["att0Array"] = productColorObjArray;
        } else if (type_of == "third") {
            productColorObj["att3Array"] = productColorObjArray;
        } else {
            productColorObj["colorArray"] = productColorObjArray;
        }
        return productColorObj;
    }

    function getProductSizesObj(findObj, type_of) {
        var productSizeObj = {};
        var productListObj = INC.dataStore.dataStoreObj;
        var productSizesArrayObj = {};
        var productSizesObjArray = [];
        var sizesArray = ["S", "M", "L", "XL", "XX", "XXL"];
        var attr_code = "";

        if (findObj.hasOwnProperty("mainId")) {
            for (mainProductId in productListObj) {
                if (mainProductId == findObj["mainId"]) {
                    for (childProductId in productListObj[mainProductId]) {
                        if (type_of != undefined) {
                            var attr_block = null;
                            if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == false) {
                                attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                            } else {
                                attr_block = type_of.parentNode.parentNode.parentNode
                            }
                            var opt_text = attr_block.getAttribute('data-zero');
                            var opt_size_text = attr_block.getAttribute('data-size');

                            if (opt_size_text == undefined) {
                                var opt_size_text = ""
                            }
                            if (opt_text == undefined) {
                                var opt_text = ""
                            }
                            if (opt_color_text == undefined) {
                                var opt_color_text = ""
                            }

                            if (opt_text != "" && productListObj[mainProductId][childProductId].option[1] != undefined) {
                                if (productListObj[mainProductId][childProductId].option[1].text == opt_text) {
                                    if (productListObj[mainProductId][childProductId]["option"] != null &&
                                        productListObj[mainProductId][childProductId]["option"] != undefined &&
                                        productListObj[mainProductId][childProductId]["option"]["2"] != null &&
                                        productListObj[mainProductId][childProductId]["option"]["2"] != undefined) {
                                        productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]] = productListObj[mainProductId][childProductId]["option"]["2"]["text"];
                                        attr_code = productListObj[mainProductId][childProductId]["option"]["2"]["code"];
                                    }
                                }
                            } else if (productListObj[mainProductId][childProductId]["option"] != null &&
                                productListObj[mainProductId][childProductId]["option"] != undefined &&
                                productListObj[mainProductId][childProductId]["option"]["2"] != null &&
                                productListObj[mainProductId][childProductId]["option"]["2"] != undefined) {
                                productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]] = productListObj[mainProductId][childProductId]["option"]["2"]["text"];
                                attr_code = productListObj[mainProductId][childProductId]["option"]["2"]["code"];
                            }
                        } else if (productListObj[mainProductId][childProductId]["option"] != null &&
                            productListObj[mainProductId][childProductId]["option"] != undefined &&
                            productListObj[mainProductId][childProductId]["option"]["2"] != null &&
                            productListObj[mainProductId][childProductId]["option"]["2"] != undefined) {
                            productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]] = productListObj[mainProductId][childProductId]["option"]["2"]["text"];
                            attr_code = productListObj[mainProductId][childProductId]["option"]["2"]["code"];
                        }
                    }

                }
            }
        }

        Object.keys(productSizesArrayObj).forEach(function(sizeText) {
            var sizeObj = {};
            sizeObj["text"] = sizeText;
            sizeObj["code"] = attr_code;
            productSizesObjArray.push(sizeObj);
        });
        productSizeObj["sizeArray"] = productSizesObjArray.sort(function(a, b) {
            return a["text"].split("-")[0].trim() - b["text"].split("-")[0].trim()
        });
        productSizeObj["sizeArray"] = productSizesObjArray.sort();
        productSizeObj["sizeArray"] = productSizesObjArray.sort(function(a, b) {
            return sizesArray.indexOf(a["text"]) - sizesArray.indexOf(b["text"])
        });

        return productSizeObj;
    }

    function getProductopt0Obj(findObj, type_of) {
        var product0Obj = {};
        var productListObj = INC.dataStore.dataStoreObj;
        var product0ArrayObj = {}
        var product0ObjArray = [];

        if (findObj.hasOwnProperty("mainId")) {
            for (mainProductId in productListObj) {
                if (mainProductId == findObj["mainId"]) {
                    for (childProductId in productListObj[mainProductId]) {
                        var opt_id = "1";
                        if (productListObj[mainProductId][childProductId]["option"]["1"] == undefined && productListObj[mainProductId][childProductId]["option"]["0"] != undefined) {
                            if (productListObj[mainProductId][childProductId]["option"]["0"].code == "size") {
                                opt_id = "0"
                            }
                        }
                        if (productListObj[mainProductId][childProductId]["option"] != null &&
                            productListObj[mainProductId][childProductId]["option"] != undefined &&
                            productListObj[mainProductId][childProductId]["option"][opt_id] != null &&
                            productListObj[mainProductId][childProductId]["option"][opt_id] != undefined) {

                            product0ArrayObj[productListObj[mainProductId][childProductId]["option"][opt_id]["text"]] = {};
                            product0ArrayObj[productListObj[mainProductId][childProductId]["option"][opt_id]["text"]]["colorCode"] = "";
                            product0ArrayObj[productListObj[mainProductId][childProductId]["option"][opt_id]["text"]]["imgSrc"] = "";
                            product0ArrayObj[productListObj[mainProductId][childProductId]["option"][opt_id]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"][opt_id]["titleText"];

                            product0ArrayObj[productListObj[mainProductId][childProductId]["option"][opt_id]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"][opt_id]["imgSrc"];
                            product0ArrayObj[productListObj[mainProductId][childProductId]["option"][opt_id]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"][opt_id]["code"];


                        }
                    }
                }
            }
        }

        Object.keys(product0ArrayObj).forEach(function(colorText) {
            var attr0Obj = {}
            attr0Obj["text"] = colorText;
            attr0Obj["imgSrc"] = product0ArrayObj[colorText]["imgSrc"];
            attr0Obj["titleText"] = product0ArrayObj[colorText]["titleText"];
            attr0Obj["code"] = product0ArrayObj[colorText]["code"];
            product0ObjArray.push(attr0Obj);
        });

        product0Obj["att0Array"] = product0ObjArray;

        return product0Obj;
    }

    function getProductopt3Obj(findObj, type_of) {
        var product3Obj = {};
        var productListObj = INC.dataStore.dataStoreObj;
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
                            if (type_of != undefined) {
                                var attr_block = null;
                                if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == false) {
                                    attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                } else {
                                    attr_block = type_of.parentNode.parentNode.parentNode
                                }
                                var opt_text = attr_block.getAttribute('data-zero');
                                var opt_size_text = attr_block.getAttribute('data-size');
                                var opt_color_text = attr_block.getAttribute('data-color');

                                if (opt_size_text == undefined) {
                                    var opt_size_text = ""
                                }
                                if (opt_color_text == undefined) {
                                    var opt_color_text = ""
                                }
                                if (opt_text != "" && opt_size_text != "" && opt_color_text != "") {
                                    if (productListObj[mainProductId][childProductId].option[1] != undefined && productListObj[mainProductId][childProductId].option[2] != undefined && productListObj[mainProductId][childProductId].option[0] != undefined) {
                                        if (productListObj[mainProductId][childProductId].option[1].text == opt_text && productListObj[mainProductId][childProductId].option[2].text == opt_size_text && productListObj[mainProductId][childProductId].option[0].text == opt_color_text) {
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]] = {};
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["colorCode"] = "";
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = "";
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["3"]["titleText"];

                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["3"]["imgSrc"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["3"]["code"];
                                        }
                                    }
                                } else {
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]] = {};
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["colorCode"] = "";
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = "";
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["3"]["titleText"];

                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["3"]["imgSrc"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["3"]["code"];
                                }
                            } else {
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]] = {};
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["colorCode"] = "";
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = "";
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["3"]["titleText"];

                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["3"]["imgSrc"];
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["3"]["code"];
                            }


                        }
                    }
                }
            }
        }

        Object.keys(productColorArrayObj).forEach(function(colorText) {
            var attr3Obj = {}
            attr3Obj["text"] = colorText;
            attr3Obj["imgSrc"] = productColorArrayObj[colorText]["imgSrc"];
            attr3Obj["titleText"] = productColorArrayObj[colorText]["titleText"];
            attr3Obj["code"] = productColorArrayObj[colorText]["code"];
            product3ObjArray.push(attr3Obj);
        });

        product3Obj["att3Array"] = product3ObjArray;

        return product3Obj;
    }

    function getProductopt4Obj(findObj) {
        var product4Obj = {};
        var productListObj = INC.dataStore.dataStoreObj;
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


                        }
                    }
                }
            }
        }

        Object.keys(productColorArrayObj).forEach(function(colorText) {
            var attr4Obj = {}
            attr4Obj["text"] = colorText;
            attr4Obj["imgSrc"] = productColorArrayObj[colorText]["imgSrc"];
            attr4Obj["titleText"] = productColorArrayObj[colorText]["titleText"];
            attr4Obj["code"] = productColorArrayObj[colorText]["code"];
            product4ObjArray.push(attr4Obj);
        });

        product4Obj["att4Array"] = product4ObjArray;

        return product4Obj;

    }

    function getProductByAtt(findObj) {

        var childProductObj = {};
        var productListObj = INC.dataStore.dataStoreObj;
        var mainProductListObj = productListObj[findObj.mainId];
        for (childProductId in mainProductListObj) {

            if (findObj.zeroText != "" && findObj.sizeText != "" && findObj.colorText != "" && findObj.thirdText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined && mainProductListObj[childProductId]["option"]["2"] != undefined && mainProductListObj[childProductId]["option"]["3"] != undefined) {
                if (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text && findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text && findObj.sizeText == mainProductListObj[childProductId]["option"]["2"].text && findObj.thirdText == mainProductListObj[childProductId]["option"]["3"].text) {
                    childProductObj = mainProductListObj[childProductId];
                }
            } else if (findObj.zeroText != "" && findObj.sizeText != "" && findObj.colorText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined && mainProductListObj[childProductId]["option"]["2"] != undefined) {
                if (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text && findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text && findObj.sizeText == mainProductListObj[childProductId]["option"]["2"].text) {
                    childProductObj = mainProductListObj[childProductId];
                }
            } else if (findObj.zeroText != "" && findObj.colorText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined) {
                if (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text && findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text) {
                    childProductObj = mainProductListObj[childProductId];
                }
            } else if (
                mainProductListObj[childProductId]["option"] != null &&
                mainProductListObj[childProductId]["option"] != undefined &&
                mainProductListObj[childProductId]["option"]["0"] != null &&
                mainProductListObj[childProductId]["option"]["0"] != undefined &&
                (findObj.zeroText == mainProductListObj[childProductId]["option"]["0"].text)
            ) {
                childProductObj = mainProductListObj[childProductId];

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

        // if (INC.debug) console.log(childProductObj);
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

INC.classes = {};
INC.classes.ProductObj = function(product) {
    this.bundleId = "";
    this.id = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
    this.sku = ((product != null) && (product != undefined)) ? product["ProductSku"] : "";
    this.childsku = ((product != null) && (product != undefined)) ? product["ProductSku"] : "";
    this.name = ((product != null) && (product != undefined)) ? ((INC.config.language == "en") ? product["ProductName"] : product["Field4"]) : "";
    this.url = ((product != null) && (product != undefined)) ? product["ProductUrl"].replace('https://www.bradfords.co.uk/','http://staging.bradfords.co.uk/') : "";
    this.imageURL = ((product != null) && (product != undefined)) ? product["ImageURL"] : "";
    this.regularPrice = ((product != null) && (product != undefined)) ? product["Price"] : "";
    this.activePrice = ((product != null) && (product != undefined)) ? ((product["SpecialPrice"] != null) ? product["SpecialPrice"] : product["Price"]) : "";
    this.activePriceMsg = ((product != null) && (product != undefined)) ? ((product["Field3"] != "") ? ((INC.config.language == "en") ? product["Field3"] : product["Field6"]) : "") : "";

    this.manufacturer = ((product != null) && (product != undefined)) ? product["Manufacturer"] : "";
    this.otherImageList = ((product != null) && (product != undefined)) ? product["OtherImageList"] : [];
    this.size = ((product != null) && (product != undefined)) ? ((product["Size"] != null) ? product["Size"] : "") : "";
    this.option = {};
    if (this.otherImageList != null) {
        if (this.otherImageList.indexOf(product["ImageURL"]) == -1) {
            this.otherImageList.unshift(product["ImageURL"])
        }
    }
    if (this.ProductLevelDiscountMessage != null) {
        this.ProductLevelDiscountMessage = product["ProductLevelDiscountMessage"]
    } else {
        this.ProductLevelDiscountMessage = product["PromotionalMessage"]
    }
    this.internalId = ((product != null) && (product != undefined)) ? product["InternalId"] : "";
    this.mainId = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
    this.categoryName = ((product != null) && (product != undefined)) ? product["CategoryName"] : "";
    this.categoryId = ((product != null) && (product != undefined)) ? product["CategoryId"] : "";
    this.description = ((product != null) && (product != undefined)) ? product["Description"] : "";
    this.shortDescription = ((product != null) && (product != undefined)) ? ((INC.config.language == "en") ? product["Description"] : product["Field5"]) : "";
    this.ratingsCount = ((product != null) && (product != undefined)) ? product["Field6"] : "";
    this.reviewsCount = ((product != null) && (product != undefined)) ? product["Field6"] : "";
    this.worthPrice = ((product != null) && (product != undefined)) ? product["Field3"] : "";
}
INC.classes.ProductAttObj = function(product) {
    this.bundleId = "";
    this.id = ((product != null) && (product != undefined)) ? product["childProductId"] : "";
    this.sku = ((product != null) && (product != undefined)) ? product["childProductSku"] : "";
    this.childsku = ((product != null) && (product != undefined)) ? product["childProductSku"] : "";
    this.name = ((product != null) && (product != undefined)) ? ((INC.config.language == "en") ? product["childProductName"] : product["Field4"]) : "";
    this.url = ((product != null) && (product != undefined)) ? product["childProductUrl"].replace('https://www.bradfords.co.uk/','http://staging.bradfords.co.uk') : "";
    this.imageURL = ((product != null) && (product != undefined)) ? product["childProductImageUrl"] : "";
    this.regularPrice = ((product != null) && (product != undefined)) ? product["childProductPrice"] : "";
    this.activePrice = ((product != null) && (product != undefined)) ? ((product["childProductSpecialPrice"] != null) ? product["childProductSpecialPrice"] : product["childProductPrice"]) : "";

    this.activePriceMsg = ((product != null) && (product != undefined)) ? ((product["Field3"] != "") ? ((INC.config.language == "en") ? product["Field3"] : product["Field6"]) : "") : "";


    if (this.ProductLevelDiscountMessage != null) {
        this.ProductLevelDiscountMessage = product["ProductLevelDiscountMessage"]
    } else {
        this.ProductLevelDiscountMessage = product["PromotionalMessage"]
    }
    this.manufacturer = ((product != null) && (product != undefined)) ? product["Manufacturer"] : "";
    this.otherImageList = ((product != null) && (product != undefined)) ? product["childProductOtherImageUrl"] : [];
    if (this.otherImageList != null) {
        if (this.otherImageList.indexOf(product["childProductImageUrl"]) == -1) {
            this.otherImageList.unshift(product["childProductImageUrl"])
        }
    }
    if (product["childProductOtherImageUrl"] == null) {
        this.otherImageList = []
        this.otherImageList[0] = product["childProductImageUrl"]
    }
    this.size = "";
    this.option = {};
    // this.option = {
    //     "1": "",
    //     "2": "",
    //     "3": ""
    // };
    if (((product != null) && (product != undefined))) {
        this.option[product["optionId"]] = {};
        this.option[product["optionId"]].text = product["optionText"];
        this.option[product["optionId"]].titleText = (product["childProductField2"] != null) ? product["childProductField2"] : "";
        this.option[product["optionId"]].imgSrc = (product["optionImageUrl"] != null) ? product["optionImageUrl"] : "";
        this.option[product["optionId"]].colorCode = (product["colorCode"] != null) ? product["colorCode"] : "";
    }
    this.internalId = ((product != null) && (product != undefined)) ? product["childInternalProductId"] : "";
    this.categoryName = ((product != null) && (product != undefined)) ? product["childCategoryName"] : "";
    this.categoryId = ((product != null) && (product != undefined)) ? product["childCategoryId"] : "";
    this.description = ((product != null) && (product != undefined)) ? product["childProductDescription"] : "";
    this.shortDescription = ((product != null) && (product != undefined)) ? ((INC.config.language == "en") ? product["ShortDescription"] : product["Field5"]) : "";
    this.ratingsCount = ((product != null) && (product != undefined)) ? product["childProductField6"] : "";
    this.reviewsCount = ((product != null) && (product != undefined)) ? product["childProductField6"] : "";
    this.worthPrice = ((product != null) && (product != undefined)) ? product["Field3"] : "";
}
INC.classes.FindObj = function(findObj) {
    this.id = (findObj != null && findObj != undefined) ? findObj.id : "";
    this.sku = (findObj != null && findObj != undefined) ? findObj.sku : "";
    this.mainId = (findObj != null && findObj != undefined) ? findObj.mainId : "";
    this.colorText = (findObj != null && findObj != undefined) ? findObj.colorText : "";
    this.sizeText = (findObj != null && findObj != undefined) ? findObj.sizeText : "";
}

INC.classes.NWConfig = function(nwConfigObj) {
    this.url = (nwConfigObj != null && nwConfigObj != undefined) ? nwConfigObj.url : "";
    this.method = (nwConfigObj != null && nwConfigObj != undefined) ? nwConfigObj.method : "GET";
    this.params = (nwConfigObj != null && nwConfigObj != undefined) ? nwConfigObj.params : "";
}

if (window.innerWidth > 768) {
    INC.uiConfig = {
        pdp: {
            className: {
                pdpModalBlock: prefix + "pdp" + postfix,
                pdpModalTitleBlock: prefix + "pdp_title" + postfix,
                pdpModalTitleTextBlock: prefix + "pdp_title_text" + postfix,
                pdpModalTitleText: prefix + "pdp_title_text",
                pdpModalTitleImgBlock: prefix + "pdp_title_img" + postfix,
                pdpModalTitleImg: prefix + "pdp_title_img",

                pdpModalBundleBlock: prefix + "pdp_bundle" + postfix,
                pdpModalMainProductBlock: prefix + "pdp_product-main" + postfix,
                pdpModalAddIconBlock: prefix + "pdp_icon-add" + postfix,
                pdpModalBundleProductBlock: prefix + "pdp_bundle_product" + postfix,
                pdpModalBundleCartBlock: prefix + "pdp_bundle_cart" + postfix,
                pdpModalBundleCartOverlay: prefix + "pdp_bundle_cart_overlay" + postfix,

                pdpAddIconImgBlock: prefix + "pdp_icon-add_img" + postfix,
                pdpAddIconImg: prefix + "pdp_icon-add_img",
                pdpBundleProductLeftBtnBlock: prefix + "pdp_bundle_product_left-btn" + postfix,
                pdpBundleProductLeftBtnImgBlock: prefix + "pdp_bundle_product_left-btn_img" + postfix,
                pdpBundleProductLeftBtnImg: prefix + "pdp_bundle_product_left-btn_img",
                pdpBundleProductRightBtnBlock: prefix + "pdp_bundle_product_right-btn" + postfix,
                pdpBundleProductRightBtnImgBlock: prefix + "pdp_bundle_product_right-btn_img" + postfix,
                pdpBundleProductRightBtnImg: prefix + "pdp_bundle_product_right-btn_img",

                pdpBundleProductListBlock: prefix + "pdp_bundle_product_list" + postfix,
                pdpBundleProductListMainBlock: prefix + "pdp_bundle_product_list_main" + postfix,
                pdpBundleProductListMainLeftBlock: prefix + "pdp_bundle_product_list_main_left" + postfix,
                pdpBundleProductListMainLeftBtnBlock: prefix + "pdp_bundle_product_list_main_left_btn" + postfix,
                pdpBundleProductListMainLeftBtnImgBlock: prefix + "pdp_bundle_product_list_main_left_btn_img" + postfix,
                pdpBundleProductListMainLeftBtnImg: prefix + "pdp_bundle_product_list_main_left_btn_img",
                pdpBundleProductListMainLeftBtnTextBlock: prefix + "pdp_bundle_product_list_main_left_btn_text" + postfix,
                pdpBundleProductListMainLeftBtnText: prefix + "pdp_bundle_product_list_main_left_btn_text",
                pdpBundleProductListMainListBlock: prefix + "pdp_bundle_product_list_main_list" + postfix,
                pdpBundleProductListMainRightBlock: prefix + "pdp_bundle_product_list_main_right" + postfix,
                pdpBundleProductListMainRightBtnBlock: prefix + "pdp_bundle_product_list_main_right_btn" + postfix,
                pdpBundleProductListMainRightBtnImgBlock: prefix + "pdp_bundle_product_list_main_right_btn_img" + postfix,
                pdpBundleProductListMainRightBtnImg: prefix + "pdp_bundle_product_list_main_right_btn_img",
                pdpBundleProductListMainRightBtnTextBlock: prefix + "pdp_bundle_product_list_main_right_btn_text" + postfix,
                pdpBundleProductListMainRightBtnText: prefix + "pdp_bundle_product_list_main_right_btn_text",
                pdpBundleProductListLeftBlock: prefix + "pdp_bundle_product_list_left" + postfix,
                pdpBundleProductListLeftBtnBlock: prefix + "pdp_bundle_product_list_left_btn" + postfix,
                pdpBundleProductListLeftBtnImgBlock: prefix + "pdp_bundle_product_list_left_btn_img" + postfix,
                pdpBundleProductListLeftBtnImg: prefix + "pdp_bundle_product_list_left_btn_img",
                pdpBundleProductListRightBlock: prefix + "pdp_bundle_product_list_right" + postfix,
                pdpBundleProductListRightBtnBlock: prefix + "pdp_bundle_product_list_right_btn" + postfix,
                pdpBundleProductListRightBtnImgBlock: prefix + "pdp_bundle_product_list_right_btn_img" + postfix,
                pdpBundleProductListRightBtnImg: prefix + "pdp_bundle_product_list_right_btn_img",
                pdpBundleProductListItemsBlockShowMoreLess: prefix + "pdp_bundle_product_list_items_show_more_less" + postfix,
                pdpBundleProductListItemsBlockShowMoreLessText: prefix + "pdp_bundle_product_list_items_show_more_less_text",
                pdpBundleProductListItemsBlock: prefix + "pdp_bundle_product_list_items" + postfix,
                pdpBundleProductListItemBlock: prefix + "pdp_bundle_product_list_item" + postfix,
                pdpBundleProductListItemImgBlock: prefix + "pdp_bundle_product_list_item_img" + postfix,
                pdpBundleProductListItemImg: prefix + "pdp_bundle_product_list_item_img",
                pdpBundleProductListItemTitleBlock: prefix + "pdp_bundle_product_list_item_title" + postfix,
                pdpBundleProductListItemTitleTextBlock: prefix + "pdp_bundle_product_list_item_title_text" + postfix,
                pdpBundleProductListItemTitleText: prefix + "pdp_bundle_product_list_item_title_text",
                pdpBundleProductListItemPriceBlock: prefix + "pdp_bundle_product_list_item_price" + postfix,
                pdpBundleProductListItemPriceActiveBlock: prefix + "pdp_bundle_product_list_item_price_active" + postfix,
                pdpBundleProductListItemPriceActiveTextBlock: prefix + "pdp_bundle_product_list_item_price_active_text" + postfix,
                pdpBundleProductListItemPriceActiveText: prefix + "pdp_bundle_product_list_item_price_active_text",
                pdpBundleProductListItemAddedBlock: prefix + "pdp_bundle_product_list_item_added" + postfix,
                pdpBundleProductListItemAddedBtnBlock: prefix + "pdp_bundle_product_list_item_added_btn" + postfix,
                pdpBundleProductListItemAddedBtnImgBlock: prefix + "pdp_bundle_product_list_item_added_btn_img" + postfix,
                pdpBundleProductListItemAddedBtnImg: prefix + "pdp_bundle_product_list_item_added_btn_img",
                pdpBundleProductListItemAddedBtnTextBlock: prefix + "pdp_bundle_product_list_item_added_btn_text" + postfix,
                pdpBundleProductListItemAddedBtnText: prefix + "pdp_bundle_product_list_item_added_btn_text",

                pdpBundleCartTitleBlock: prefix + "pdp_bundle_cart_title" + postfix,
                pdpBundleCartTitleTextBlock: prefix + "pdp_bundle_cart_title_text" + postfix,
                pdpBundleCartTitleText: prefix + "pdp_bundle_cart_title_text",
                pdpBundleCartTitleImgBlock: prefix + "pdp_bundle_cart_title_img" + postfix,
                pdpBundleCartTitleImg: prefix + "pdp_bundle_cart_title_img",
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
                pdpBundleCartAddedBlock: prefix + "pdp_bundle_cart_added" + postfix,
                pdpBundleCartAddedProductBlock: prefix + "pdp_bundle_cart_added_product" + postfix,
                pdpBundleCartAddedProductImgBlock: prefix + "pdp_bundle_cart_added_product_img" + postfix,
                pdpBundleCartAddedProductImg: prefix + "pdp_bundle_cart_added_product_img",
                pdpBundleCartAddedProductTitleBlock: prefix + "pdp_bundle_cart_added_product_title" + postfix,
                pdpBundleCartAddedProductTitleTextBlock: prefix + "pdp_bundle_cart_added_product_title_text" + postfix,
                pdpBundleCartAddedProductTitleText: prefix + "pdp_bundle_cart_added_product_title_text",
                pdpBundleCartAddedProductPriceBlock: prefix + "pdp_bundle_cart_added_product_price" + postfix,
                pdpBundleCartAddedProductPriceTextBlock: prefix + "pdp_bundle_cart_added_product_price_text" + postfix,
                pdpBundleCartAddedProductPriceText: prefix + "pdp_bundle_cart_added_product_price_text",
                pdpBundleCartAddedProductAttBlock: prefix + "pdp_bundle_cart_added_product_att" + postfix,
                pdpBundleCartAddedProductAttColorBlock: prefix + "pdp_bundle_cart_added_product_att_color" + postfix,
                pdpBundleCartAddedProductAttColorTextBlock: prefix + "pdp_bundle_cart_added_product_att_color_text" + postfix,
                pdpBundleCartAddedProductAttColorText: prefix + "pdp_bundle_cart_added_product_att_color_text" + postfix,
                pdpBundleCartAddedProductAttSizeBlock: prefix + "pdp_bundle_cart_added_product_att_size" + postfix,
                pdpBundleCartAddedProductAttSizeTextBlock: prefix + "pdp_bundle_cart_added_product_att_size_text" + postfix,
                pdpBundleCartAddedProductAttSizeText: prefix + "pdp_bundle_cart_added_product_att_size_text",
                pdpBundleCartAddedProductQtyBlock: prefix + "pdp_bundle_cart_added_product_qty" + postfix,
                pdpBundleCartAddedProductQtyTextBlock: prefix + "pdp_bundle_cart_added_product_qty_text" + postfix,
                pdpBundleCartAddedProductQtyText: prefix + "pdp_bundle_cart_addeed_product_qty_text",
                pdpBundleCartAddedProductEditBlock: prefix + "pdp_bundle_cart_added_product_edit" + postfix,
                pdpBundleCartAddedProductEditTextBlock: prefix + "pdp_bundle_cart_added_product_edit_text" + postfix,
                pdpBundleCartAddedProductEditText: prefix + "pdp_bundle_cart_added_product_edit_text",
                pdpBundleCartAddedProductEditImgBlock: prefix + "pdp_bundle_cart_added_product_edit_img" + postfix,
                pdpBundleCartAddedProductEditImg: prefix + "pdp_bundle_cart_added_product_edit_img",
                pdpBundleCartSummaryBlock: prefix + "pdp_bundle_cart_summary" + postfix,
                pdpBundleCartSummaryTitleBlock: prefix + "pdp_bundle_cart_summary_title" + postfix,
                pdpBundleCartSummaryTitleTextBlock: prefix + "pdp_bundle_cart_summary_title_text" + postfix,
                pdpBundleCartSummaryTitleText: prefix + "pdp_bundle_cart_summary_title_text",
                pdpBundleCartSummaryPriceBlock: prefix + "pdp_bundle_cart_summary_price" + postfix,
                pdpBundleCartSummaryPriceRegularBlock: prefix + "pdp_bundle_cart_summary_price_regular" + postfix,
                pdpBundleCartSummaryPriceRegularTextBlock: prefix + "pdp_bundle_cart_summary_price_regular_text" + postfix,
                pdpBundleCartSummaryPriceRegularText: prefix + "pdp_bundle_cart_summary_price_regular_text",
                pdpBundleCartSummaryPriceActiveBlock: prefix + "pdp_bundle_cart_summary_price_active" + postfix,
                pdpBundleCartSummaryPriceActiveTextBlock: prefix + "pdp_bundle_cart_summary_price_active_text" + postfix,
                pdpBundleCartSummaryPriceActiveText: prefix + "pdp_bundle_cart_summary_price_active_text",
                pdpBundleCartSummaryViewBlock: prefix + "pdp_bundle_cart_summary_view" + postfix,
                pdpBundleCartSummaryViewBtnBlock: prefix + "pdp_bundle_cart_summary_view_btn" + postfix,
                pdpBundleCartSummaryViewBtnImgBlock: prefix + "pdp_bundle_cart_summary_view_btn_img" + postfix,
                pdpBundleCartSummaryViewBtnImg: prefix + "pdp_bundle_cart_summary_view_btn_img",
                pdpBundleCartSummaryViewBtnTextBlock: prefix + "pdp_bundle_cart_summary_view_btn_text" + postfix,
                pdpBundleCartSummaryViewBtnText: prefix + "pdp_bundle_cart_summary_view_btn_text",
                pdpBundleCartSummaryViewBtnCountBlock: prefix + "pdp_bundle_cart_summary_view_btn_count" + postfix,
                pdpBundleCartSummaryViewBtnCount: prefix + "pdp_bundle_cart_summary_view_btn_count",
                pdpBundleCartSummaryAddBlock: prefix + "pdp_bundle_cart_summary_add" + postfix,
                pdpBundleCartSummaryAddBtnBlock: prefix + "pdp_bundle_cart_summary_add_btn" + postfix,
                pdpBundleCartSummaryAddBtnTextBlock: prefix + "pdp_bundle_cart_summary_add_btn_text" + postfix,
                pdpBundleCartSummaryAddBtnText: prefix + "pdp_bundle_cart_summary_add_btn_text",
                pdpBundleCartSummaryAddBtnImgBlock: prefix + "pdp_bundle_cart_summary_add_btn_img" + postfix,
                pdpBundleCartSummaryAddBtnImg: prefix + "pdp_bundle_cart_summary_add_btn_img",
                pdpBundleCartSummaryCollectionBlock: prefix + "pdp_bundle_cart_summary_collection" + postfix,

                pdpBundleCartSummaryCollectionBtnBlock: prefix + "pdp_bundle_cart_summary_collection_btn" + postfix,
                pdpBundleCartSummaryCollectionBtnTextBlock: prefix + "pdp_bundle_cart_summary_collection_btn_text" + postfix,
                pdpBundleCartSummaryCollectionBtnText: prefix + "pdp_bundle_cart_summary_collection_btn_text",
                pdpBundleCartSummaryCollectionBtnImgBlock: prefix + "pdp_bundle_cart_summary_collection_btn_img" + postfix,
                pdpBundleCartSummaryCollectionBtnImg: prefix + "pdp_bundle_cart_summary_collection_btn_img",

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
                productTitleTextHeader: prefix + "product_desc_title_text_header",
                productRatingsBlock: prefix + "product_desc_ratings" + postfix,
                productInfoBlock: prefix + "product_desc_info" + postfix,
                productInfoImgBlock: prefix + "product_desc_info_img" + postfix,
                productInfoImg: prefix + "product_desc_info_img",
                productInfoFullDescBlock: prefix + "product_Info_Full_desc_info" + postfix,
                productInfoFullDescText: prefix + "product_Info_Full_desc_info_text",
                productInfoTextBlock: prefix + "product_desc_info_text" + postfix,
                productInfoText: prefix + "product_desc_info_text",
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
                productAddBlockclickcollect: prefix + "product_desc_add_click_collect" + postfix,
                productAddTextBlockclickcollect: prefix + "product_desc_add_text_click_collect" + postfix,
                productAddTextclickcollect: prefix + "product_desc_add_text_click_collect",
                productAddImgBlockclickcollect: prefix + "product_desc_add_img_click_collect" + postfix,
                productAddImgclickcollect: prefix + "product_desc_add_img_click_collect",
                productAddErrText: prefix + "product_desc_add_err_text" + postfix,

            },
            dom: {
                pdpModalBlock: ["pdpModalTitleBlock", "pdpModalBundleBlock"],
                pdpModalTitleBlock: ["pdpModalTitleTextBlock", "pdpModalTitleImgBlock"],
                pdpModalTitleTextBlock: ["pdpModalTitleText"],
                pdpModalTitleImgBlock: ["pdpModalTitleImg"],
                pdpModalBundleBlock: ["pdpModalMainProductBlock", "pdpModalAddIconBlock", "pdpModalBundleProductBlock", "pdpModalBundleCartOverlay", "pdpModalBundleCartBlock"],
                pdpModalMainProductBlock: ["productModuleBlock"],
                pdpModalAddIconBlock: ["pdpAddIconImgBlock"],
                pdpAddIconImgBlock: ["pdpAddIconImg"],

                pdpModalBundleProductBlock: ["pdpBundleProductLeftBtnBlock", "pdpBundleProductListBlock", "pdpBundleProductRightBtnBlock"],
                pdpBundleProductLeftBtnBlock: ["pdpBundleProductLeftBtnImgBlock"],
                pdpBundleProductLeftBtnImgBlock: ["pdpBundleProductLeftBtnImg"],
                pdpBundleProductRightBtnBlock: ["pdpBundleProductRightBtnImgBlock"],
                pdpBundleProductRightBtnImgBlock: ["pdpBundleProductRightBtnImg"],
                pdpBundleProductListBlock: ["pdpBundleProductListMainBlock", "pdpBundleProductListLeftBlock", "pdpBundleProductListItemsBlockShowMoreLess", "pdpBundleProductListItemsBlock", "pdpBundleProductListRightBlock"],
                pdpBundleProductListMainBlock: ["pdpBundleProductListMainLeftBlock", "pdpBundleProductListMainListBlock", "pdpBundleProductListMainRightBlock"],
                pdpBundleProductListMainLeftBlock: ["pdpBundleProductListMainLeftBtnBlock"],
                pdpBundleProductListMainLeftBtnBlock: ["pdpBundleProductListMainLeftBtnImgBlock", "pdpBundleProductListMainLeftBtnTextBlock"],
                pdpBundleProductListMainLeftBtnImgBlock: ["pdpBundleProductListMainLeftBtnImg"],
                pdpBundleProductListMainLeftBtnTextBlock: ["pdpBundleProductListMainLeftBtnText"],
                pdpBundleProductListMainListBlock: ["productModuleBlock"],
                pdpBundleProductListMainRightBlock: ["pdpBundleProductListMainRightBtnBlock"],
                pdpBundleProductListMainRightBtnBlock: ["pdpBundleProductListMainRightBtnImgBlock", "pdpBundleProductListMainRightBtnTextBlock"],
                pdpBundleProductListMainRightBtnImgBlock: ["pdpBundleProductListMainRightBtnImg"],
                pdpBundleProductListMainRightBtnTextBlock: ["pdpBundleProductListMainRightBtnText"],
                pdpBundleProductListLeftBlock: ["pdpBundleProductListLeftBtnBlock"],
                pdpBundleProductListLeftBtnBlock: ["pdpBundleProductListLeftBtnImgBlock"],
                pdpBundleProductListLeftBtnImgBlock: ["pdpBundleProductListLeftBtnImg"],
                pdpBundleProductListRightBlock: ["pdpBundleProductListRightBtnBlock"],
                pdpBundleProductListRightBtnBlock: ["pdpBundleProductListRightBtnImgBlock"],
                pdpBundleProductListRightBtnImgBlock: ["pdpBundleProductListRightBtnImg"],
                pdpBundleProductListItemsBlockShowMoreLess: ["pdpBundleProductListItemsBlockShowMoreLessText"],
                pdpBundleProductListItemsBlock: ["pdpBundleProductListItemBlock"],
                pdpBundleProductListItemBlock: ["pdpBundleProductListItemAddedBlock", "pdpBundleProductListItemImgBlock", "pdpBundleProductListItemTitleBlock", "pdpBundleProductListItemPriceBlock"],
                pdpBundleProductListItemAddedBlock: ["pdpBundleProductListItemAddedBtnBlock"],
                pdpBundleProductListItemAddedBtnBlock: ["pdpBundleProductListItemAddedBtnImgBlock", "pdpBundleProductListItemAddedBtnTextBlock"],
                pdpBundleProductListItemAddedBtnImgBlock: ["pdpBundleProductListItemAddedBtnImg"],
                pdpBundleProductListItemAddedBtnTextBlock: ["pdpBundleProductListItemAddedBtnText"],
                pdpBundleProductListItemImgBlock: ["pdpBundleProductListItemImg"],
                pdpBundleProductListItemTitleBlock: ["pdpBundleProductListItemTitleTextBlock"],
                pdpBundleProductListItemTitleTextBlock: ["pdpBundleProductListItemTitleText"],
                pdpBundleProductListItemPriceBlock: ["pdpBundleProductListItemPriceActiveBlock"],
                pdpBundleProductListItemPriceActiveBlock: ["pdpBundleProductListItemPriceActiveTextBlock"],
                pdpBundleProductListItemPriceActiveTextBlock: ["pdpBundleProductListItemPriceActiveText"],

                pdpModalBundleCartBlock: ["pdpBundleCartTitleBlock", "pdpBundleCartPriceBlock", "pdpBundleCartAddedBlock", "pdpBundleCartSummaryBlock"],
                pdpBundleCartTitleBlock: ["pdpBundleCartTitleTextBlock", "pdpBundleCartTitleImgBlock"],
                pdpBundleCartTitleTextBlock: ["pdpBundleCartTitleText"],
                pdpBundleCartTitleImgBlock: ["pdpBundleCartTitleImg"],
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
                pdpBundleCartAddedBlock: ["pdpBundleCartAddedProductBlock"],
                pdpBundleCartAddedProductBlock: ["pdpBundleCartAddedProductImgBlock", "pdpBundleCartAddedProductTitleBlock", "pdpBundleCartAddedProductAttBlock", "pdpBundleCartAddedProductQtyBlock", "pdpBundleCartAddedProductPriceBlock", "pdpBundleCartAddedProductEditBlock"],
                pdpBundleCartAddedProductImgBlock: ["pdpBundleCartAddedProductImg"],
                pdpBundleCartAddedProductTitleBlock: ["pdpBundleCartAddedProductTitleTextBlock"],
                pdpBundleCartAddedProductTitleTextBlock: ["pdpBundleCartAddedProductTitleText"],
                pdpBundleCartAddedProductPriceBlock: ["pdpBundleCartAddedProductPriceTextBlock"],
                pdpBundleCartAddedProductPriceTextBlock: ["pdpBundleCartAddedProductPriceText"],
                pdpBundleCartAddedProductAttBlock: ["pdpBundleCartAddedProductAttColorBlock", "pdpBundleCartAddedProductAttSizeBlock"],
                pdpBundleCartAddedProductAttColorBlock: ["pdpBundleCartAddedProductAttColorTextBlock"],
                pdpBundleCartAddedProductAttColorTextBlock: ["pdpBundleCartAddedProductAttColorText"],
                pdpBundleCartAddedProductAttSizeBlock: ["pdpBundleCartAddedProductAttSizeTextBlock"],
                pdpBundleCartAddedProductAttSizeTextBlock: ["pdpBundleCartAddedProductAttSizeText"],
                pdpBundleCartAddedProductQtyBlock: ["pdpBundleCartAddedProductQtyTextBlock"],
                pdpBundleCartAddedProductQtyTextBlock: ["pdpBundleCartAddedProductQtyText"],
                pdpBundleCartAddedProductEditBlock: ["pdpBundleCartAddedProductEditTextBlock", "pdpBundleCartAddedProductEditImgBlock"],
                pdpBundleCartAddedProductEditTextBlock: ["pdpBundleCartAddedProductEditText"],
                pdpBundleCartAddedProductEditImgBlock: ["pdpBundleCartAddedProductEditImg"],
                pdpBundleCartSummaryBlock: ["pdpBundleCartSummaryTitleBlock", "pdpBundleCartSummaryPriceBlock", "pdpBundleCartSummaryViewBlock", "pdpBundleCartSummaryAddBlock", "pdpBundleCartSummaryCollectionBlock"],
                pdpBundleCartSummaryTitleBlock: ["pdpBundleCartSummaryTitleTextBlock"],
                pdpBundleCartSummaryTitleTextBlock: ["pdpBundleCartSummaryTitleText"],
                pdpBundleCartSummaryViewBlock: ["pdpBundleCartSummaryViewBtnBlock"],
                pdpBundleCartSummaryViewBtnBlock: ["pdpBundleCartSummaryViewBtnImgBlock", "pdpBundleCartSummaryViewBtnTextBlock", "pdpBundleCartSummaryViewBtnCountBlock"],
                pdpBundleCartSummaryViewBtnImgBlock: ["pdpBundleCartSummaryViewBtnImg"],
                pdpBundleCartSummaryViewBtnTextBlock: ["pdpBundleCartSummaryViewBtnText"],
                pdpBundleCartSummaryViewBtnCountBlock: ["pdpBundleCartSummaryViewBtnCount"],
                pdpBundleCartSummaryPriceBlock: ["pdpBundleCartSummaryPriceActiveBlock", "pdpBundleCartSummaryPriceRegularBlock"],
                pdpBundleCartSummaryPriceRegularBlock: ["pdpBundleCartSummaryPriceRegularTextBlock"],
                pdpBundleCartSummaryPriceRegularTextBlock: ["pdpBundleCartSummaryPriceRegularText"],
                pdpBundleCartSummaryPriceActiveBlock: ["pdpBundleCartSummaryPriceActiveTextBlock"],
                pdpBundleCartSummaryPriceActiveTextBlock: ["pdpBundleCartSummaryPriceActiveText"],
                pdpBundleCartSummaryAddBlock: ["pdpBundleCartSummaryAddBtnBlock"],
                pdpBundleCartSummaryAddBtnBlock: ["pdpBundleCartSummaryAddBtnTextBlock", "pdpBundleCartSummaryAddBtnImgBlock"],
                pdpBundleCartSummaryAddBtnTextBlock: ["pdpBundleCartSummaryAddBtnText"],
                pdpBundleCartSummaryAddBtnImgBlock: ["pdpBundleCartSummaryAddBtnImg"],
                pdpBundleCartSummaryCollectionBlock: ["pdpBundleCartSummaryCollectionBtnBlock"],
                pdpBundleCartSummaryCollectionBtnBlock: ["pdpBundleCartSummaryCollectionBtnTextBlock", "pdpBundleCartSummaryCollectionBtnImgBlock"],
                pdpBundleCartSummaryCollectionBtnTextBlock: ["pdpBundleCartSummaryCollectionBtnText"],
                pdpBundleCartSummaryCollectionBtnImgBlock: ["pdpBundleCartSummaryCollectionBtnImg"],
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
                productDescBlock: ["productTitleBlock", "productPriceBlock", "productRatingsBlock", "productInfoBlock", "productAttBlock", "productPackOfBlock", "productQtyAddBtnBlock"],
                productTitleBlock: ["productTitleTextBlock"],
                productTitleTextBlock: ["productTitleTextHeader", "productTitleText"],
                productInfoBlock: ["productInfoImgBlock", "productInfoTextBlock", "productInfoFullDescBlock"],
                productInfoImgBlock: ["productInfoImg"],
                productInfoTextBlock: ["productInfoText"],
                productInfoFullDescBlock: ["productInfoFullDescText"],
                productPriceBlock: ["productPriceLabel", "productPriceActiveBlock", "productPriceRegularBlock", "productPriceWorthBlock"],
                productPriceActiveBlock: ["productPriceActiveTextBlock"],
                productPriceActiveTextBlock: ["productPriceActiveText", "productPriceActiveTextMsg"],
                productPriceRegularBlock: ["productPriceRegularTextBlock"],
                productPriceRegularTextBlock: ["productPriceRegularText"],
                productPriceWorthBlock: ["productPriceWorthTextBlock"],
                productPriceWorthTextBlock: ["productPriceWorthText", "productPriceWorthTextMsg"],
                productAttBlock: ["productAddErrText", "productAttzeroBlock", "productAttSizeBlock", "productAttColorBlock", "productAttthirdBlock", "productAttfourthBlock", "productAttEditBlock"],
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
                productQtyAddBtnBlock: ["productQtyBlock", "productAddBlock", "productAddBlockclickcollect"],
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
                productAddBlockclickcollect: ["productAddImgBlockclickcollect", "productAddTextBlockclickcollect"],
                productAddTextBlockclickcollect: ["productAddTextclickcollect"],
                productAddImgBlockclickcollect: ["productAddImgclickcollect"],

            }
        },
        sidebar: {
            className: {
                sidebarModalBlock: prefix + "sidebar_modal" + postfix,
                sidebarHeaderBlock: prefix + "sidebar_header" + postfix,
                sidebarCartAddedBlock: prefix + "sidebar_cart_added" + postfix,
                sidebarRecommendedBlock: prefix + "sidebar_recommended" + postfix,
                sidebarCheckoutBlock: prefix + "sidebar_checkout" + postfix,
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
                sidebarHeaderItemCountTitleTextBlock: prefix + "header_item_count_title_text" + postfix,
                sidebarHeaderItemCountTitleText: prefix + "header_item_count_title_text",
                sidebarHeaderItemCountFigureBlock: prefix + "header_item_count_figure" + postfix,
                sidebarHeaderItemCountFigureTextBlock: prefix + "header_item_count_figure_text" + postfix,
                sidebarHeaderItemCountFigureText: prefix + "header_item_count_figure_text",
                sidebarCartAddedProductDescSubTotalPriceBlock: prefix + "cart_added_product_desc_subtotal_price" + postfix,
                sidebarCartAddedProductDescSubTotalPriceRegularBlock: prefix + "cart_added_product_desc_subtotal_price_regular" + postfix,
                sidebarCartAddedProductDescSubTotalRegularTextBlock: prefix + "cart_added_product_desc_subtotal_price_regular_text" + postfix,
                sidebarCartAddedProductDescSubTotalRegularText: prefix + "cart_added_product_desc_subtotal_price_regular_text",
                sidebarCartAddedProductDescSubTotalActiveBlock: prefix + "cart_added_product_desc_subtotal_price_active" + postfix,
                sidebarCartAddedProductDescSubTotalActiveTextBlock: prefix + "cart_added_product_desc_subtotal_price_active_text" + postfix,
                sidebarCartAddedProductDescSubTotalActiveText: prefix + "cart_added_product_desc_subtotal_price_active_text",
                sidebarCartAddedProductDescSubTotalActiveTextMsg: prefix + "cart_added_product_desc_subtotal_price_active_text_msg",

                sidebarCartAddedLeftBlock: prefix + "cart_added_left" + postfix,
                sidebarCartAddedLeftBtnBlock: prefix + "cart_added_left_btn" + postfix,
                sidebarCartAddedLeftBtnImgBlock: prefix + "cart_added_left_btn_img" + postfix,
                sidebarCartAddedLeftBtnImg: prefix + "cart_added_left_btn_img",
                sidebarCartAddedRightBlock: prefix + "cart_added_right" + postfix,
                sidebarCartAddedRightBtnBlock: prefix + "cart_added_right_btn" + postfix,
                sidebarCartAddedRightBtnImgBlock: prefix + "cart_added_right_btn_img" + postfix,
                sidebarCartAddedRightBtnImg: prefix + "cart_added_right_btn_img",
                sidebarCartAddedListBlock: prefix + "cart_added_list" + postfix,
                sidebarCartAddedProductBlock: prefix + "cart_added_product" + postfix,
                sidebarCartAddedProductImgBlock: prefix + "cart_added_product_img" + postfix,
                sidebarCartAddedProductImg: prefix + "cart_added_product_img",
                sidebarCartAddedProductDescBlock: prefix + "cart_added_product_desc" + postfix,
                sidebarCartAddedProductDescTitleBlock: prefix + "cart_added_product_desc_title" + postfix,
                sidebarCartAddedProductDescTitleTextBlock: prefix + "cart_added_product_desc_title_text" + postfix,
                sidebarCartAddedProductDescTitleText: prefix + "cart_added_product_desc_title_text",
                sidebarCartAddedProductDescPriceBlock: prefix + "cart_added_product_desc_price" + postfix,
                sidebarCartAddedProductDescPriceRegularBlock: prefix + "cart_added_product_desc_price_regular" + postfix,
                sidebarCartAddedProductDescPriceRegularTextBlock: prefix + "cart_added_product_desc_price_regular_text" + postfix,
                sidebarCartAddedProductDescPriceRegularText: prefix + "cart_added_product_desc_price_regular_text",
                sidebarCartAddedProductDescPriceActiveBlock: prefix + "cart_added_product_desc_price_active" + postfix,
                sidebarCartAddedProductDescPriceActiveTextBlock: prefix + "cart_added_product_desc_price_active_text" + postfix,
                sidebarCartAddedProductDescPriceActiveText: prefix + "cart_added_product_desc_price_active_text",
                sidebarCartAddedProductDescPriceActiveTextMsg: prefix + "cart_added_product_desc_price_active_text_msg",
                sidebarCartAddedProductDescAttBlock: prefix + "cart_added_product_desc_att" + postfix,
                sidebarCartAddedProductDescAttColorBlock: prefix + "cart_added_product_desc_att_color" + postfix,
                sidebarCartAddedProductDescAttColorTextBlock: prefix + "cart_added_product_desc_att_color_text" + postfix,
                sidebarCartAddedProductDescAttColorText: prefix + "cart_added_product_desc_att_color_text" + postfix,
                sidebarCartAddedProductDescAttSizeBlock: prefix + "cart_added_product_desc_att_size" + postfix,
                sidebarCartAddedProductDescAttSizeTextBlock: prefix + "cart_added_product_desc_att_size_text" + postfix,
                sidebarCartAddedProductDescAttSizeText: prefix + "cart_added_product_desc_att_size_text",


                sidebarRecommendedTitleBlock: prefix + "recommended_title" + postfix,
                sidebarRecommendedTitleTextBlock: prefix + "recommended_title_text" + postfix,
                sidebarRecommendedTitleText: prefix + "recommended_title_text",
                sidebarRecommendedTitleImgBlock: prefix + "recommended_title_img" + postfix,
                sidebarRecommendedTitleImg: prefix + "recommended_title_img",
                sidebarRecommendedTabsBlock: prefix + "recommended_tabs" + postfix,
                sidebarRecommendedTabsTitleBlock: prefix + "recommended_tabs_title" + postfix,
                sidebarRecommendedTabsTitleTextBlock: prefix + "recommended_tabs_title_text" + postfix,
                sidebarRecommendedTabsTitleText: prefix + "recommended_tabs_title_text",
                sidebarRecommendedTabsLeftBlock: prefix + "recommended_tabs_left" + postfix,
                sidebarRecommendedTabsListBlock: prefix + "recommended_tabs_list" + postfix,
                sidebarRecommendedTabsRightBlock: prefix + "recommended_tabs_right" + postfix,
                sidebarRecommendedTabsLeftBtnBlock: prefix + "recommended_tabs_left_btn" + postfix,
                sidebarRecommendedTabsLeftBtnImgBlock: prefix + "recommended_tabs_left_btn_img" + postfix,
                sidebarRecommendedTabsLeftBtnImg: prefix + "recommended_tabs_left_btn_img",
                sidebarRecommendedTabsRightBtnBlock: prefix + "recommended_tabs_right_btn" + postfix,
                sidebarRecommendedTabsRightBtnImgBlock: prefix + "recommended_tabs_right_btn_img" + postfix,
                sidebarRecommendedTabsRightBtnImg: prefix + "recommended_tabs_right_btn_img",
                sidebarRecommendedTabsListItemBlock: prefix + "recommended_tabs_list_item" + postfix,
                sidebarRecommendedTabsListItemTextBlock: prefix + "recommended_tabs_list_item_text" + postfix,
                sidebarRecommendedTabsListItemText: prefix + "recommended_tabs_list_item_text",
                sidebarRecommendedProductsBlock: prefix + "recommended_products" + postfix,
                sidebarRecommendedProductsLeftBlock: prefix + "recommended_products_left" + postfix,
                sidebarRecommendedProductsListBlock: prefix + "recommended_products_list" + postfix,
                sidebarRecommendedProductsListMainBlock: prefix + "recommended_products_list_main" + postfix,
                sidebarRecommendedProductsRightBlock: prefix + "recommended_products_right" + postfix,
                sidebarRecommendedProductsLeftBtnBlock: prefix + "recommended_products_left_btn" + postfix,
                sidebarRecommendedProductsLeftBtnImgBlock: prefix + "recommended_products_left_btn_img" + postfix,
                sidebarRecommendedProductsLeftBtnImg: prefix + "recommended_products_left_btn_img",
                sidebarRecommendedProductsRightBtnBlock: prefix + "recommeded_products_right_btn" + postfix,
                sidebarRecommendedProductsRightBtnImgBlock: prefix + "recommended_products_right_btn_img" + postfix,
                sidebarRecommendedProductsRightBtnImg: prefix + "recommended_products_right_btn_img",
                sidebarCheckoutContinueBlock: prefix + "checkout_continue" + postfix,
                sidebarCheckoutContinueBtnBlock: prefix + "checkout_continue_btn" + postfix,
                sidebarCheckoutContinueBtnTextBlock: prefix + "checkout_continue_btn_text" + postfix,
                sidebarCheckoutContinueBtnText: prefix + "checkout_continue_btn_text",
                sidebarCheckoutContinueBtnImgBlock: prefix + "checkout_continue_btn_img" + postfix,
                sidebarCheckoutContinueBtnImg: prefix + "checkout_continue_btn_img",
                sidebarCheckoutBasketBlock: prefix + "checkout_basket" + postfix,
                sidebarCheckoutBasketBtnBlock: prefix + "checkout_basket_btn" + postfix,
                sidebarCheckoutBasketBtnTextBlock: prefix + "checkout_basket_btn_text" + postfix,
                sidebarCheckoutBasketBtnText: prefix + "checkout_basket_btn_text",
                sidebarCheckoutBasketBtnImgBlock: prefix + "checkout_basket_btn_img" + postfix,
                sidebarCheckoutBasketBtnImg: prefix + "checkout_basket_btn_img",

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

                productAttEditBlock: prefix + "product_desc_att_edit" + postfix,
                productAttEditTextBlock: prefix + "product_desc_att_edit_text" + postfix,
                productAttEditText: prefix + "product_desc_att_edit_text",
                productAttEditImgBlock: prefix + "product_desc_att_edit_img" + postfix,
                productAttEditImg: prefix + "product_desc_att_edit_img",
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
                productAddBlockclickcollect: prefix + "product_desc_add_click_collect" + postfix,
                productAddTextBlockclickcollect: prefix + "product_desc_add_text_click_collect" + postfix,
                productAddTextclickcollect: prefix + "product_desc_add_text_click_collect",
                productAddImgBlockclickcollect: prefix + "product_desc_add_img_click_collect" + postfix,
                productAddImgclickcollect: prefix + "product_desc_add_img_click_collect",
                productAddErrText: prefix + "product_desc_add_err_text" + postfix,
            },
            dom: {
                sidebarModalBlock: ["sidebarCartAddedBlock", "sidebarHeaderBlock", "sidebarCheckoutBlock", "sidebarRecommendedBlock"],
                sidebarHeaderBlock: ["sidebarHeaderContinueBlock", "sidebarHeaderItemBlock"],
                sidebarHeaderContinueBlock: ["sidebarHeaderContinueImgBlock", "sidebarHeaderContinueTextBlock"],
                sidebarHeaderContinueImgBlock: ["sidebarHeaderContinueImg"],
                sidebarHeaderContinueTextBlock: ["sidebarHeaderContinueText"],
                sidebarHeaderTitleBlock: ["sidebarHeaderTitleTextBlock"],
                sidebarHeaderTitleTextBlock: ["sidebarHeaderTitleText"],
                sidebarHeaderItemBlock: ["sidebarHeaderItemCountBlock"],
                sidebarHeaderItemCountBlock: ["sidebarHeaderItemCountTitleBlock", "sidebarHeaderItemCountFigureBlock", "sidebarCartAddedProductDescSubTotalPriceBlock"],
                sidebarHeaderItemCountTitleBlock: ["sidebarHeaderItemCountTitleTextBlock"],
                sidebarHeaderItemCountTitleTextBlock: ["sidebarHeaderItemCountTitleText"],
                sidebarHeaderItemCountFigureBlock: ["sidebarHeaderItemCountFigureTextBlock"],
                sidebarHeaderItemCountFigureTextBlock: ["sidebarHeaderItemCountFigureText"],

                sidebarCartAddedProductDescSubTotalPriceBlock: ["sidebarCartAddedProductDescSubTotalActiveBlock", "sidebarCartAddedProductDescSubTotalPriceRegularBlock"],
                sidebarCartAddedProductDescSubTotalActiveBlock: ["sidebarCartAddedProductDescSubTotalActiveTextBlock"],
                sidebarCartAddedProductDescSubTotalActiveTextBlock: ["sidebarCartAddedProductDescSubTotalActiveText", "sidebarCartAddedProductDescPriceActiveTextMsg"],
                sidebarCartAddedProductDescSubTotalPriceRegularBlock: ["sidebarCartAddedProductDescSubTotalRegularTextBlock"],
                sidebarCartAddedProductDescSubTotalRegularTextBlock: ["sidebarCartAddedProductDescSubTotalRegularText"],

                sidebarCartAddedBlock: ["sidebarHeaderTitleBlock", "sidebarCartAddedLeftBlock", "sidebarCartAddedListBlock", "sidebarCartAddedRightBlock"],
                sidebarCartAddedLeftBlock: ["sidebarCartAddedLeftBtnBlock"],
                sidebarCartAddedLeftBtnBlock: ["sidebarCartAddedLeftBtnImgBlock"],
                sidebarCartAddedLeftBtnImgBlock: ["sidebarCartAddedLeftBtnImg"],
                sidebarCartAddedRightBlock: ["sidebarCartAddedRightBtnBlock"],
                sidebarCartAddedRightBtnBlock: ["sidebarCartAddedRightBtnImgBlock"],
                sidebarCartAddedRightBtnImgBlock: ["sidebarCartAddedRightBtnImg"],
                sidebarCartAddedListBlock: ["sidebarCartAddedProductBlock"],
                sidebarCartAddedProductBlock: ["sidebarCartAddedProductImgBlock", "sidebarCartAddedProductDescBlock"],
                sidebarCartAddedProductImgBlock: ["sidebarCartAddedProductImg"],
                sidebarCartAddedProductDescBlock: ["sidebarCartAddedProductDescTitleBlock", "sidebarCartAddedProductDescAttBlock", "sidebarCartAddedProductDescPriceBlock"],
                sidebarCartAddedProductDescTitleBlock: ["sidebarCartAddedProductDescTitleTextBlock"],
                sidebarCartAddedProductDescTitleTextBlock: ["sidebarCartAddedProductDescTitleText"],
                sidebarCartAddedProductDescPriceBlock: ["sidebarCartAddedProductDescPriceActiveBlock", "sidebarCartAddedProductDescPriceRegularBlock"],
                sidebarCartAddedProductDescPriceActiveBlock: ["sidebarCartAddedProductDescPriceActiveTextBlock"],
                sidebarCartAddedProductDescPriceActiveTextBlock: ["sidebarCartAddedProductDescPriceActiveText", "sidebarCartAddedProductDescPriceActiveTextMsg"],
                sidebarCartAddedProductDescPriceRegularBlock: ["sidebarCartAddedProductDescPriceRegularTextBlock"],
                sidebarCartAddedProductDescPriceRegularTextBlock: ["sidebarCartAddedProductDescPriceRegularText"],

                sidebarCartAddedProductDescAttBlock: ["sidebarCartAddedProductDescAttColorBlock", "sidebarCartAddedProductDescAttSizeBlock"],
                sidebarCartAddedProductDescAttColorBlock: ["sidebarCartAddedProductDescAttColorTextBlock"],
                sidebarCartAddedProductDescAttColorTextBlock: ["sidebarCartAddedProductDescAttColorText"],
                sidebarCartAddedProductDescAttSizeBlock: ["sidebarCartAddedProductDescAttSizeTextBlock"],
                sidebarCartAddedProductDescAttSizeTextBlock: ["sidebarCartAddedProductDescAttSizeText"],

                sidebarRecommendedBlock: ["sidebarRecommendedTitleBlock", "sidebarRecommendedTabsBlock", "sidebarRecommendedProductsBlock"],
                sidebarRecommendedTitleBlock: ["sidebarRecommendedTitleTextBlock", "sidebarRecommendedTitleImgBlock"],
                sidebarRecommendedTitleTextBlock: ["sidebarRecommendedTitleText"],
                sidebarRecommendedTitleImgBlock: ["sidebarRecommendedTitleImg"],
                sidebarRecommendedTabsBlock: ["sidebarRecommendedTabsTitleBlock", "sidebarRecommendedTabsLeftBlock", "sidebarRecommendedTabsListBlock", "sidebarRecommendedTabsRightBlock"],
                sidebarRecommendedTabsTitleBlock: ["sidebarRecommendedTabsTitleTextBlock"],
                sidebarRecommendedTabsTitleTextBlock: ["sidebarRecommendedTabsTitleText"],
                sidebarRecommendedTabsLeftBlock: ["sidebarRecommendedTabsLeftBtnBlock"],
                sidebarRecommendedTabsLeftBtnBlock: ["sidebarRecommendedTabsLeftBtnImgBlock"],
                sidebarRecommendedTabsLeftBtnImgBlock: ["sidebarRecommendedTabsLeftBtnImg"],
                sidebarRecommendedTabsRightBlock: ["sidebarRecommendedTabsRightBtnBlock"],
                sidebarRecommendedTabsRightBtnBlock: ["sidebarRecommendedTabsRightBtnImgBlock"],
                sidebarRecommendedTabsRightBtnImgBlock: ["sidebarRecommendedTabsRightBtnImg"],
                sidebarRecommendedTabsListBlock: ["sidebarRecommendedTabsListItemBlock"],
                sidebarRecommendedTabsListItemBlock: ["sidebarRecommendedTabsListItemTextBlock"],
                sidebarRecommendedTabsListItemTextBlock: ["sidebarRecommendedTabsListItemText"],
                sidebarRecommendedProductsBlock: ["sidebarRecommendedProductsLeftBlock", "sidebarRecommendedProductsListMainBlock", "sidebarRecommendedProductsRightBlock"],
                sidebarRecommendedProductsLeftBlock: ["sidebarRecommendedProductsLeftBtnBlock"],
                sidebarRecommendedProductsLeftBtnBlock: ["sidebarRecommendedProductsLeftBtnImgBlock"],
                sidebarRecommendedProductsLeftBtnImgBlock: ["sidebarRecommendedProductsLeftBtnImg"],
                sidebarRecommendedProductsRightBlock: ["sidebarRecommendedProductsRightBtnBlock"],
                sidebarRecommendedProductsRightBtnBlock: ["sidebarRecommendedProductsRightBtnImgBlock"],
                sidebarRecommendedProductsRightBtnImgBlock: ["sidebarRecommendedProductsRightBtnImg"],
                sidebarRecommendedProductsListMainBlock: ["sidebarRecommendedProductsListBlock"],
                sidebarRecommendedProductsListBlock: ["productModuleBlock"],
                sidebarCheckoutBlock: ["sidebarCheckoutContinueBlock", "sidebarCheckoutBasketBlock"],
                sidebarCheckoutContinueBlock: ["sidebarCheckoutContinueBtnBlock"],
                sidebarCheckoutContinueBtnBlock: ["sidebarCheckoutContinueBtnImgBlock", "sidebarCheckoutContinueBtnTextBlock"],
                sidebarCheckoutContinueBtnImgBlock: ["sidebarCheckoutContinueBtnImg"],
                sidebarCheckoutContinueBtnTextBlock: ["sidebarCheckoutContinueBtnText"],
                sidebarCheckoutBasketBlock: ["sidebarCheckoutBasketBtnBlock"],
                sidebarCheckoutBasketBtnBlock: ["sidebarCheckoutBasketBtnImgBlock", "sidebarCheckoutBasketBtnTextBlock"],
                sidebarCheckoutBasketBtnImgBlock: ["sidebarCheckoutBasketBtnImg"],
                sidebarCheckoutBasketBtnTextBlock: ["sidebarCheckoutBasketBtnText"],

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
                productDescBlock: ["productTitleBlock", "productPriceBlock", "productRatingsBlock", "productInfoBlock", "productAttBlock", "productPackOfBlock", "productQtyAddBtnBlock"],
                productTitleBlock: ["productTitleTextBlock"],
                productTitleTextBlock: ["productTitleText"],
                productInfoBlock: ["productInfoImgBlock", "productInfoTextBlock", "productInfoFullDescBlock"],
                productInfoImgBlock: ["productInfoImg"],
                productInfoTextBlock: ["productInfoText"],
                productInfoFullDescBlock: ["productInfoFullDescText"],
                productPriceBlock: ["productPriceLabel", "productPriceActiveBlock", "productPriceRegularBlock", "productPriceWorthBlock"],
                productPriceActiveBlock: ["productPriceActiveTextBlock"],
                productPriceActiveTextBlock: ["productPriceActiveText", "productPriceActiveTextMsg"],
                productPriceRegularBlock: ["productPriceRegularTextBlock"],
                productPriceRegularTextBlock: ["productPriceRegularText"],
                productPriceWorthBlock: ["productPriceWorthTextBlock"],
                productPriceWorthTextBlock: ["productPriceWorthText", "productPriceWorthTextMsg"],

                productAttBlock: ["productAddErrText", "productAttzeroBlock", "productAttSizeBlock", "productAttColorBlock", "productAttthirdBlock", "productAttfourthBlock", "productAttEditBlock"],
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
                productQtyAddBtnBlock: ["productQtyBlock", "productAddBlock", "productAddBlockclickcollect"],
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
                productAddBlockclickcollect: ["productAddImgBlockclickcollect", "productAddTextBlockclickcollect"],
                productAddTextBlockclickcollect: ["productAddTextclickcollect"],
                productAddImgBlockclickcollect: ["productAddImgclickcollect"],
            }
        },
        am: {
            className: {
                afModalBlock: prefix + "af" + postfix,
                afModalTitleBlock: prefix + "af_title" + postfix,
                afModalTitleTextBlock: prefix + "af_title_text" + postfix,
                afModalTitleText: prefix + "af_title_text",
                afModalClose: prefix + "af_modal_close",
                afModalBundlesBlock: prefix + "af_bundles" + postfix,
                afLeftBlock: prefix + "af_left" + postfix,
                afLeftBtnBlock: prefix + "af_left_btn" + postfix,
                afLeftBtnImgBlock: prefix + "af_left_btn_img" + postfix,
                afLeftBtnImg: prefix + "af_left_btn_img",
                afProductListMainBlock: prefix + "af_product-list-main" + postfix,
                afProductListBlock: prefix + "af_product-list" + postfix,
                afRightBlock: prefix + "af_right" + postfix,
                afRightBtnBlock: prefix + "af_right_btn" + postfix,
                afRightBtnImgBlock: prefix + "af_right_btn_img" + postfix,
                afRightBtnImg: prefix + "af_right_btn_img",

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
                productAddBlockclickcollect: prefix + "product_desc_add_click_collect" + postfix,
                productAddTextBlockclickcollect: prefix + "product_desc_add_text_click_collect" + postfix,
                productAddTextclickcollect: prefix + "product_desc_add_text_click_collect",
                productAddImgBlockclickcollect: prefix + "product_desc_add_img_click_collect" + postfix,
                productAddImgclickcollect: prefix + "product_desc_add_img_click_collect",
                productAddErrText: prefix + "product_desc_add_err_text" + postfix,
            },
            dom: {
                afModalBlock: ["afModalTitleBlock", "afModalBundlesBlock"],
                afModalTitleBlock: ["afModalTitleTextBlock"],
                afModalTitleTextBlock: ["afModalTitleText", "afModalClose"],
                afModalBundlesBlock: ["afLeftBlock", "afProductListMainBlock", "afRightBlock"],
                afLeftBlock: ["afLeftBtnBlock"],
                afLeftBtnBlock: ["afLeftBtnImgBlock"],
                afLeftBtnImgBlock: ["afLeftBtnImg"],
                afProductListMainBlock: ["afProductListBlock"],
                afProductListBlock: ["productModuleBlock", "productModuleBlock", "productModuleBlock"],
                afRightBlock: ["afRightBtnBlock"],
                afRightBtnBlock: ["afRightBtnImgBlock"],
                afRightBtnImgBlock: ["afRightBtnImg"],

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
                productDescBlock: ["productTitleBlock", "productPriceBlock", "productRatingsBlock", "productInfoBlock", "productAttBlock", "productPackOfBlock", "productQtyAddBtnBlock"],
                productTitleBlock: ["productTitleTextBlock"],
                productTitleTextBlock: ["productTitleText"],
                productInfoBlock: ["productInfoImgBlock", "productInfoTextBlock", "productInfoFullDescBlock"],
                productInfoImgBlock: ["productInfoImg"],
                productInfoTextBlock: ["productInfoText"],
                productInfoFullDescBlock: ["productInfoFullDescText"],
                productPriceBlock: ["productPriceLabel", "productPriceActiveBlock", "productPriceRegularBlock", "productPriceWorthBlock"],
                productPriceActiveBlock: ["productPriceActiveTextBlock"],
                productPriceActiveTextBlock: ["productPriceActiveText", "productPriceActiveTextMsg"],
                productPriceRegularBlock: ["productPriceRegularTextBlock"],
                productPriceRegularTextBlock: ["productPriceRegularText"],
                productPriceWorthBlock: ["productPriceWorthTextBlock"],
                productPriceWorthTextBlock: ["productPriceWorthText", "productPriceWorthTextMsg"],

                productAttBlock: ["productAddErrText", "productAttzeroBlock", "productAttSizeBlock", "productAttColorBlock", "productAttthirdBlock", "productAttfourthBlock", "productAttEditBlock"],
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
                productQtyAddBtnBlock: ["productQtyBlock", "productAddBlock", "productAddBlockclickcollect"],
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
                productAddBlockclickcollect: ["productAddImgBlockclickcollect", "productAddTextBlockclickcollect"],
                productAddTextBlockclickcollect: ["productAddTextclickcollect"],
                productAddImgBlockclickcollect: ["productAddImgclickcollect"],
            }
        },
    }
} else {
    INC.uiConfig = {
        pdp: {
            className: {
                pdpModalBlock: prefix + "pdp" + postfix,
                pdpModalTitleBlock: prefix + "pdp_title" + postfix,
                pdpModalTitleTextBlock: prefix + "pdp_title_text" + postfix,
                pdpModalTitleText: prefix + "pdp_title_text",
                pdpModalTitleImgBlock: prefix + "pdp_title_img" + postfix,
                pdpModalTitleImg: prefix + "pdp_title_img",

                pdpModalBundleBlock: prefix + "pdp_bundle" + postfix,
                pdpModalMainProductBlock: prefix + "pdp_product-main" + postfix,
                pdpModalAddIconBlock: prefix + "pdp_icon-add" + postfix,
                pdpModalBundleProductBlock: prefix + "pdp_bundle_product" + postfix,
                pdpModalBundleCartBlock: prefix + "pdp_bundle_cart" + postfix,
                pdpModalBundleCartOverlay: prefix + "pdp_bundle_cart_overlay" + postfix,

                pdpAddIconImgBlock: prefix + "pdp_icon-add_img" + postfix,
                pdpAddIconImg: prefix + "pdp_icon-add_img",
                pdpBundleProductLeftBtnBlock: prefix + "pdp_bundle_product_left-btn" + postfix,
                pdpBundleProductLeftBtnImgBlock: prefix + "pdp_bundle_product_left-btn_img" + postfix,
                pdpBundleProductLeftBtnImg: prefix + "pdp_bundle_product_left-btn_img",
                pdpBundleProductRightBtnBlock: prefix + "pdp_bundle_product_right-btn" + postfix,
                pdpBundleProductRightBtnImgBlock: prefix + "pdp_bundle_product_right-btn_img" + postfix,
                pdpBundleProductRightBtnImg: prefix + "pdp_bundle_product_right-btn_img",

                pdpBundleProductListBlock: prefix + "pdp_bundle_product_list" + postfix,
                pdpBundleProductListMainBlock: prefix + "pdp_bundle_product_list_main" + postfix,
                pdpBundleProductListMainLeftBlock: prefix + "pdp_bundle_product_list_main_left" + postfix,
                pdpBundleProductListMainLeftBtnBlock: prefix + "pdp_bundle_product_list_main_left_btn" + postfix,
                pdpBundleProductListMainLeftBtnImgBlock: prefix + "pdp_bundle_product_list_main_left_btn_img" + postfix,
                pdpBundleProductListMainLeftBtnImg: prefix + "pdp_bundle_product_list_main_left_btn_img",
                pdpBundleProductListMainLeftBtnTextBlock: prefix + "pdp_bundle_product_list_main_left_btn_text" + postfix,
                pdpBundleProductListMainLeftBtnText: prefix + "pdp_bundle_product_list_main_left_btn_text",
                pdpBundleProductListMainListBlock: prefix + "pdp_bundle_product_list_main_list" + postfix,
                pdpBundleProductListMainRightBlock: prefix + "pdp_bundle_product_list_main_right" + postfix,
                pdpBundleProductListMainRightBtnBlock: prefix + "pdp_bundle_product_list_main_right_btn" + postfix,
                pdpBundleProductListMainRightBtnImgBlock: prefix + "pdp_bundle_product_list_main_right_btn_img" + postfix,
                pdpBundleProductListMainRightBtnImg: prefix + "pdp_bundle_product_list_main_right_btn_img",
                pdpBundleProductListMainRightBtnTextBlock: prefix + "pdp_bundle_product_list_main_right_btn_text" + postfix,
                pdpBundleProductListMainRightBtnText: prefix + "pdp_bundle_product_list_main_right_btn_text",
                pdpBundleProductListLeftBlock: prefix + "pdp_bundle_product_list_left" + postfix,
                pdpBundleProductListLeftBtnBlock: prefix + "pdp_bundle_product_list_left_btn" + postfix,
                pdpBundleProductListLeftBtnImgBlock: prefix + "pdp_bundle_product_list_left_btn_img" + postfix,
                pdpBundleProductListLeftBtnImg: prefix + "pdp_bundle_product_list_left_btn_img",
                pdpBundleProductListRightBlock: prefix + "pdp_bundle_product_list_right" + postfix,
                pdpBundleProductListRightBtnBlock: prefix + "pdp_bundle_product_list_right_btn" + postfix,
                pdpBundleProductListRightBtnImgBlock: prefix + "pdp_bundle_product_list_right_btn_img" + postfix,
                pdpBundleProductListRightBtnImg: prefix + "pdp_bundle_product_list_right_btn_img",
                pdpBundleProductListItemsBlockShowMoreLess: prefix + "pdp_bundle_product_list_items_show_more_less" + postfix,
                pdpBundleProductListItemsBlockShowMoreLessText: prefix + "pdp_bundle_product_list_items_show_more_less_text",
                pdpBundleProductListItemsBlock: prefix + "pdp_bundle_product_list_items" + postfix,
                pdpBundleProductListItemBlock: prefix + "pdp_bundle_product_list_item" + postfix,
                pdpBundleProductListItemImgBlock: prefix + "pdp_bundle_product_list_item_img" + postfix,
                pdpBundleProductListItemImg: prefix + "pdp_bundle_product_list_item_img",
                pdpBundleProductListItemTitleBlock: prefix + "pdp_bundle_product_list_item_title" + postfix,
                pdpBundleProductListItemTitleTextBlock: prefix + "pdp_bundle_product_list_item_title_text" + postfix,
                pdpBundleProductListItemTitleText: prefix + "pdp_bundle_product_list_item_title_text",
                pdpBundleProductListItemPriceBlock: prefix + "pdp_bundle_product_list_item_price" + postfix,
                pdpBundleProductListItemPriceActiveBlock: prefix + "pdp_bundle_product_list_item_price_active" + postfix,
                pdpBundleProductListItemPriceActiveTextBlock: prefix + "pdp_bundle_product_list_item_price_active_text" + postfix,
                pdpBundleProductListItemPriceActiveText: prefix + "pdp_bundle_product_list_item_price_active_text",
                pdpBundleProductListItemAddedBlock: prefix + "pdp_bundle_product_list_item_added" + postfix,
                pdpBundleProductListItemAddedBtnBlock: prefix + "pdp_bundle_product_list_item_added_btn" + postfix,
                pdpBundleProductListItemAddedBtnImgBlock: prefix + "pdp_bundle_product_list_item_added_btn_img" + postfix,
                pdpBundleProductListItemAddedBtnImg: prefix + "pdp_bundle_product_list_item_added_btn_img",
                pdpBundleProductListItemAddedBtnTextBlock: prefix + "pdp_bundle_product_list_item_added_btn_text" + postfix,
                pdpBundleProductListItemAddedBtnText: prefix + "pdp_bundle_product_list_item_added_btn_text",

                pdpBundleCartTitleBlock: prefix + "pdp_bundle_cart_title" + postfix,
                pdpBundleCartTitleTextBlock: prefix + "pdp_bundle_cart_title_text" + postfix,
                pdpBundleCartTitleText: prefix + "pdp_bundle_cart_title_text",
                pdpBundleCartTitleImgBlock: prefix + "pdp_bundle_cart_title_img" + postfix,
                pdpBundleCartTitleImg: prefix + "pdp_bundle_cart_title_img",
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
                pdpBundleCartAddedBlock: prefix + "pdp_bundle_cart_added" + postfix,
                pdpBundleCartAddedProductBlock: prefix + "pdp_bundle_cart_added_product" + postfix,
                pdpBundleCartAddedProductImgBlock: prefix + "pdp_bundle_cart_added_product_img" + postfix,
                pdpBundleCartAddedProductImg: prefix + "pdp_bundle_cart_added_product_img",
                pdpBundleCartAddedProductTitleBlock: prefix + "pdp_bundle_cart_added_product_title" + postfix,
                pdpBundleCartAddedProductTitleTextBlock: prefix + "pdp_bundle_cart_added_product_title_text" + postfix,
                pdpBundleCartAddedProductTitleText: prefix + "pdp_bundle_cart_added_product_title_text",
                pdpBundleCartAddedProductPriceBlock: prefix + "pdp_bundle_cart_added_product_price" + postfix,
                pdpBundleCartAddedProductPriceTextBlock: prefix + "pdp_bundle_cart_added_product_price_text" + postfix,
                pdpBundleCartAddedProductPriceText: prefix + "pdp_bundle_cart_added_product_price_text",
                pdpBundleCartAddedProductAttBlock: prefix + "pdp_bundle_cart_added_product_att" + postfix,
                pdpBundleCartAddedProductAttColorBlock: prefix + "pdp_bundle_cart_added_product_att_color" + postfix,
                pdpBundleCartAddedProductAttColorTextBlock: prefix + "pdp_bundle_cart_added_product_att_color_text" + postfix,
                pdpBundleCartAddedProductAttColorText: prefix + "pdp_bundle_cart_added_product_att_color_text" + postfix,
                pdpBundleCartAddedProductAttSizeBlock: prefix + "pdp_bundle_cart_added_product_att_size" + postfix,
                pdpBundleCartAddedProductAttSizeTextBlock: prefix + "pdp_bundle_cart_added_product_att_size_text" + postfix,
                pdpBundleCartAddedProductAttSizeText: prefix + "pdp_bundle_cart_added_product_att_size_text",
                pdpBundleCartAddedProductQtyBlock: prefix + "pdp_bundle_cart_added_product_qty" + postfix,
                pdpBundleCartAddedProductQtyTextBlock: prefix + "pdp_bundle_cart_added_product_qty_text" + postfix,
                pdpBundleCartAddedProductQtyText: prefix + "pdp_bundle_cart_addeed_product_qty_text",
                pdpBundleCartAddedProductEditBlock: prefix + "pdp_bundle_cart_added_product_edit" + postfix,
                pdpBundleCartAddedProductEditTextBlock: prefix + "pdp_bundle_cart_added_product_edit_text" + postfix,
                pdpBundleCartAddedProductEditText: prefix + "pdp_bundle_cart_added_product_edit_text",
                pdpBundleCartAddedProductEditImgBlock: prefix + "pdp_bundle_cart_added_product_edit_img" + postfix,
                pdpBundleCartAddedProductEditImg: prefix + "pdp_bundle_cart_added_product_edit_img",
                pdpBundleCartSummaryBlock: prefix + "pdp_bundle_cart_summary" + postfix,
                pdpBundleCartSummaryTitleBlock: prefix + "pdp_bundle_cart_summary_title" + postfix,
                pdpBundleCartSummaryTitleTextBlock: prefix + "pdp_bundle_cart_summary_title_text" + postfix,
                pdpBundleCartSummaryTitleText: prefix + "pdp_bundle_cart_summary_title_text",
                pdpBundleCartSummaryPriceBlock: prefix + "pdp_bundle_cart_summary_price" + postfix,
                pdpBundleCartSummaryPriceRegularBlock: prefix + "pdp_bundle_cart_summary_price_regular" + postfix,
                pdpBundleCartSummaryPriceRegularTextBlock: prefix + "pdp_bundle_cart_summary_price_regular_text" + postfix,
                pdpBundleCartSummaryPriceRegularText: prefix + "pdp_bundle_cart_summary_price_regular_text",
                pdpBundleCartSummaryPriceActiveBlock: prefix + "pdp_bundle_cart_summary_price_active" + postfix,
                pdpBundleCartSummaryPriceActiveTextBlock: prefix + "pdp_bundle_cart_summary_price_active_text" + postfix,
                pdpBundleCartSummaryPriceActiveText: prefix + "pdp_bundle_cart_summary_price_active_text",
                pdpBundleCartSummaryViewBlock: prefix + "pdp_bundle_cart_summary_view" + postfix,
                pdpBundleCartSummaryViewBtnBlock: prefix + "pdp_bundle_cart_summary_view_btn" + postfix,
                pdpBundleCartSummaryViewBtnImgBlock: prefix + "pdp_bundle_cart_summary_view_btn_img" + postfix,
                pdpBundleCartSummaryViewBtnImg: prefix + "pdp_bundle_cart_summary_view_btn_img",
                pdpBundleCartSummaryViewBtnTextBlock: prefix + "pdp_bundle_cart_summary_view_btn_text" + postfix,
                pdpBundleCartSummaryViewBtnText: prefix + "pdp_bundle_cart_summary_view_btn_text",
                pdpBundleCartSummaryViewBtnCountBlock: prefix + "pdp_bundle_cart_summary_view_btn_count" + postfix,
                pdpBundleCartSummaryViewBtnCount: prefix + "pdp_bundle_cart_summary_view_btn_count",
                pdpBundleCartSummaryAddBlock: prefix + "pdp_bundle_cart_summary_add" + postfix,
                pdpBundleCartSummaryAddBtnBlock: prefix + "pdp_bundle_cart_summary_add_btn" + postfix,
                pdpBundleCartSummaryAddBtnTextBlock: prefix + "pdp_bundle_cart_summary_add_btn_text" + postfix,
                pdpBundleCartSummaryAddBtnText: prefix + "pdp_bundle_cart_summary_add_btn_text",
                pdpBundleCartSummaryAddBtnImgBlock: prefix + "pdp_bundle_cart_summary_add_btn_img" + postfix,
                pdpBundleCartSummaryAddBtnImg: prefix + "pdp_bundle_cart_summary_add_btn_img",
                pdpBundleCartSummaryCollectionBlock: prefix + "pdp_bundle_cart_summary_collection" + postfix,
                pdpBundleCartSummaryCollectionBtnBlock: prefix + "pdp_bundle_cart_summary_collection_btn" + postfix,
                pdpBundleCartSummaryCollectionBtnTextBlock: prefix + "pdp_bundle_cart_summary_collection_btn_text" + postfix,
                pdpBundleCartSummaryCollectionBtnText: prefix + "pdp_bundle_cart_summary_collection_btn_text",
                pdpBundleCartSummaryCollectionBtnImgBlock: prefix + "pdp_bundle_cart_summary_collection_btn_img" + postfix,
                pdpBundleCartSummaryCollectionBtnImg: prefix + "pdp_bundle_cart_summary_collection_btn_img",

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
                productTitleTextHeader: prefix + "product_desc_title_text_header",
                productRatingsBlock: prefix + "product_desc_ratings" + postfix,
                productInfoBlock: prefix + "product_desc_info" + postfix,
                productInfoImgBlock: prefix + "product_desc_info_img" + postfix,
                productInfoImg: prefix + "product_desc_info_img",
                productInfoFullDescBlock: prefix + "product_Info_Full_desc_info" + postfix,
                productInfoFullDescText: prefix + "product_Info_Full_desc_info_text",
                productInfoTextBlock: prefix + "product_desc_info_text" + postfix,
                productInfoText: prefix + "product_desc_info_text",
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
                productAddBlockclickcollect: prefix + "product_desc_add_click_collect" + postfix,
                productAddTextBlockclickcollect: prefix + "product_desc_add_text_click_collect" + postfix,
                productAddTextclickcollect: prefix + "product_desc_add_text_click_collect",
                productAddImgBlockclickcollect: prefix + "product_desc_add_img_click_collect" + postfix,
                productAddImgclickcollect: prefix + "product_desc_add_img_click_collect",
                productAddErrText: prefix + "product_desc_add_err_text" + postfix,
            },
            dom: {
                pdpModalBlock: ["pdpModalTitleBlock", "pdpModalBundleBlock"],
                pdpModalTitleBlock: ["pdpModalTitleTextBlock", "pdpModalTitleImgBlock"],
                pdpModalTitleTextBlock: ["pdpModalTitleText"],
                pdpModalTitleImgBlock: ["pdpModalTitleImg"],
                pdpModalBundleBlock: ["pdpModalMainProductBlock", "pdpModalAddIconBlock", "pdpModalBundleProductBlock", "pdpModalBundleCartOverlay", "pdpModalBundleCartBlock"],
                pdpModalMainProductBlock: ["productModuleBlock"],
                pdpModalAddIconBlock: ["pdpAddIconImgBlock"],
                pdpAddIconImgBlock: ["pdpAddIconImg"],

                pdpModalBundleProductBlock: ["pdpBundleProductLeftBtnBlock", "pdpBundleProductListBlock", "pdpBundleProductRightBtnBlock"],
                pdpBundleProductLeftBtnBlock: ["pdpBundleProductLeftBtnImgBlock"],
                pdpBundleProductLeftBtnImgBlock: ["pdpBundleProductLeftBtnImg"],
                pdpBundleProductRightBtnBlock: ["pdpBundleProductRightBtnImgBlock"],
                pdpBundleProductRightBtnImgBlock: ["pdpBundleProductRightBtnImg"],
                pdpBundleProductListBlock: ["pdpBundleProductListMainBlock", "pdpBundleProductListLeftBlock", "pdpBundleProductListItemsBlockShowMoreLess", "pdpBundleProductListItemsBlock", "pdpBundleProductListRightBlock"],
                pdpBundleProductListMainBlock: ["pdpBundleProductListMainLeftBlock", "pdpBundleProductListMainListBlock", "pdpBundleProductListMainRightBlock"],
                pdpBundleProductListMainLeftBlock: ["pdpBundleProductListMainLeftBtnBlock"],
                pdpBundleProductListMainLeftBtnBlock: ["pdpBundleProductListMainLeftBtnImgBlock", "pdpBundleProductListMainLeftBtnTextBlock"],
                pdpBundleProductListMainLeftBtnImgBlock: ["pdpBundleProductListMainLeftBtnImg"],
                pdpBundleProductListMainLeftBtnTextBlock: ["pdpBundleProductListMainLeftBtnText"],
                pdpBundleProductListMainListBlock: ["productModuleBlock"],
                pdpBundleProductListMainRightBlock: ["pdpBundleProductListMainRightBtnBlock"],
                pdpBundleProductListMainRightBtnBlock: ["pdpBundleProductListMainRightBtnImgBlock", "pdpBundleProductListMainRightBtnTextBlock"],
                pdpBundleProductListMainRightBtnImgBlock: ["pdpBundleProductListMainRightBtnImg"],
                pdpBundleProductListMainRightBtnTextBlock: ["pdpBundleProductListMainRightBtnText"],
                pdpBundleProductListLeftBlock: ["pdpBundleProductListLeftBtnBlock"],
                pdpBundleProductListLeftBtnBlock: ["pdpBundleProductListLeftBtnImgBlock"],
                pdpBundleProductListLeftBtnImgBlock: ["pdpBundleProductListLeftBtnImg"],
                pdpBundleProductListRightBlock: ["pdpBundleProductListRightBtnBlock"],
                pdpBundleProductListRightBtnBlock: ["pdpBundleProductListRightBtnImgBlock"],
                pdpBundleProductListRightBtnImgBlock: ["pdpBundleProductListRightBtnImg"],
                pdpBundleProductListItemsBlockShowMoreLess: ["pdpBundleProductListItemsBlockShowMoreLessText"],
                pdpBundleProductListItemsBlock: ["pdpBundleProductListItemBlock"],
                pdpBundleProductListItemBlock: ["pdpBundleProductListItemAddedBlock", "pdpBundleProductListItemImgBlock", "pdpBundleProductListItemTitleBlock", "pdpBundleProductListItemPriceBlock"],
                pdpBundleProductListItemAddedBlock: ["pdpBundleProductListItemAddedBtnBlock"],
                pdpBundleProductListItemAddedBtnBlock: ["pdpBundleProductListItemAddedBtnImgBlock", "pdpBundleProductListItemAddedBtnTextBlock"],
                pdpBundleProductListItemAddedBtnImgBlock: ["pdpBundleProductListItemAddedBtnImg"],
                pdpBundleProductListItemAddedBtnTextBlock: ["pdpBundleProductListItemAddedBtnText"],
                pdpBundleProductListItemImgBlock: ["pdpBundleProductListItemImg"],
                pdpBundleProductListItemTitleBlock: ["pdpBundleProductListItemTitleTextBlock"],
                pdpBundleProductListItemTitleTextBlock: ["pdpBundleProductListItemTitleText"],
                pdpBundleProductListItemPriceBlock: ["pdpBundleProductListItemPriceActiveBlock"],
                pdpBundleProductListItemPriceActiveBlock: ["pdpBundleProductListItemPriceActiveTextBlock"],
                pdpBundleProductListItemPriceActiveTextBlock: ["pdpBundleProductListItemPriceActiveText"],

                pdpModalBundleCartBlock: ["pdpBundleCartTitleBlock", "pdpBundleCartPriceBlock", "pdpBundleCartSummaryBlock"],
                pdpBundleCartTitleBlock: ["pdpBundleCartTitleTextBlock", "pdpBundleCartTitleImgBlock"],
                pdpBundleCartTitleTextBlock: ["pdpBundleCartTitleText"],
                pdpBundleCartTitleImgBlock: ["pdpBundleCartTitleImg"],
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
                pdpBundleCartAddedBlock: ["pdpBundleCartAddedProductBlock"],
                pdpBundleCartAddedProductBlock: ["pdpBundleCartAddedProductImgBlock", "pdpBundleCartAddedProductTitleBlock", "pdpBundleCartAddedProductAttBlock", "pdpBundleCartAddedProductQtyBlock", "pdpBundleCartAddedProductPriceBlock", "pdpBundleCartAddedProductEditBlock"],
                pdpBundleCartAddedProductImgBlock: ["pdpBundleCartAddedProductImg"],
                pdpBundleCartAddedProductTitleBlock: ["pdpBundleCartAddedProductTitleTextBlock"],
                pdpBundleCartAddedProductTitleTextBlock: ["pdpBundleCartAddedProductTitleText"],
                pdpBundleCartAddedProductPriceBlock: ["pdpBundleCartAddedProductPriceTextBlock"],
                pdpBundleCartAddedProductPriceTextBlock: ["pdpBundleCartAddedProductPriceText"],
                pdpBundleCartAddedProductAttBlock: ["pdpBundleCartAddedProductAttColorBlock", "pdpBundleCartAddedProductAttSizeBlock"],
                pdpBundleCartAddedProductAttColorBlock: ["pdpBundleCartAddedProductAttColorTextBlock"],
                pdpBundleCartAddedProductAttColorTextBlock: ["pdpBundleCartAddedProductAttColorText"],
                pdpBundleCartAddedProductAttSizeBlock: ["pdpBundleCartAddedProductAttSizeTextBlock"],
                pdpBundleCartAddedProductAttSizeTextBlock: ["pdpBundleCartAddedProductAttSizeText"],
                pdpBundleCartAddedProductQtyBlock: ["pdpBundleCartAddedProductQtyTextBlock"],
                pdpBundleCartAddedProductQtyTextBlock: ["pdpBundleCartAddedProductQtyText"],
                pdpBundleCartAddedProductEditBlock: ["pdpBundleCartAddedProductEditTextBlock", "pdpBundleCartAddedProductEditImgBlock"],
                pdpBundleCartAddedProductEditTextBlock: ["pdpBundleCartAddedProductEditText"],
                pdpBundleCartAddedProductEditImgBlock: ["pdpBundleCartAddedProductEditImg"],
                pdpBundleCartSummaryBlock: ["pdpBundleCartSummaryTitleBlock", "pdpBundleCartSummaryPriceBlock", "pdpBundleCartSummaryViewBlock", "pdpBundleCartAddedBlock", "pdpBundleCartSummaryAddBlock", "pdpBundleCartSummaryCollectionBlock"],
                pdpBundleCartSummaryTitleBlock: ["pdpBundleCartSummaryTitleTextBlock"],
                pdpBundleCartSummaryTitleTextBlock: ["pdpBundleCartSummaryTitleText"],
                pdpBundleCartSummaryViewBlock: ["pdpBundleCartSummaryViewBtnBlock"],
                pdpBundleCartSummaryViewBtnBlock: ["pdpBundleCartSummaryViewBtnImgBlock", "pdpBundleCartSummaryViewBtnTextBlock", "pdpBundleCartSummaryViewBtnCountBlock"],
                pdpBundleCartSummaryViewBtnImgBlock: ["pdpBundleCartSummaryViewBtnImg"],
                pdpBundleCartSummaryViewBtnTextBlock: ["pdpBundleCartSummaryViewBtnText"],
                pdpBundleCartSummaryViewBtnCountBlock: ["pdpBundleCartSummaryViewBtnCount"],
                pdpBundleCartSummaryPriceBlock: ["pdpBundleCartSummaryPriceActiveBlock", "pdpBundleCartSummaryPriceRegularBlock"],
                pdpBundleCartSummaryPriceRegularBlock: ["pdpBundleCartSummaryPriceRegularTextBlock"],
                pdpBundleCartSummaryPriceRegularTextBlock: ["pdpBundleCartSummaryPriceRegularText"],
                pdpBundleCartSummaryPriceActiveBlock: ["pdpBundleCartSummaryPriceActiveTextBlock"],
                pdpBundleCartSummaryPriceActiveTextBlock: ["pdpBundleCartSummaryPriceActiveText"],
                pdpBundleCartSummaryAddBlock: ["pdpBundleCartSummaryAddBtnBlock"],
                pdpBundleCartSummaryAddBtnBlock: ["pdpBundleCartSummaryAddBtnTextBlock", "pdpBundleCartSummaryAddBtnImgBlock"],
                pdpBundleCartSummaryAddBtnTextBlock: ["pdpBundleCartSummaryAddBtnText"],
                pdpBundleCartSummaryAddBtnImgBlock: ["pdpBundleCartSummaryAddBtnImg"],
                pdpBundleCartSummaryCollectionBlock: ["pdpBundleCartSummaryCollectionBtnBlock"],
                pdpBundleCartSummaryCollectionBtnBlock: ["pdpBundleCartSummaryCollectionBtnTextBlock", "pdpBundleCartSummaryCollectionBtnImgBlock"],
                pdpBundleCartSummaryCollectionBtnTextBlock: ["pdpBundleCartSummaryCollectionBtnText"],
                pdpBundleCartSummaryCollectionBtnImgBlock: ["pdpBundleCartSummaryCollectionBtnImg"],
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
                productDescBlock: ["productTitleBlock", "productPriceBlock", "productRatingsBlock", "productInfoBlock", "productAttBlock", "productPackOfBlock", "productQtyAddBtnBlock"],
                productTitleBlock: ["productTitleTextBlock"],
                productTitleTextBlock: ["productTitleTextHeader", "productTitleText"],
                productInfoBlock: ["productInfoImgBlock", "productInfoTextBlock", "productInfoFullDescBlock"],
                productInfoImgBlock: ["productInfoImg"],
                productInfoTextBlock: ["productInfoText"],
                productInfoFullDescBlock: ["productInfoFullDescText"],
                productPriceBlock: ["productPriceLabel", "productPriceActiveBlock", "productPriceRegularBlock", "productPriceWorthBlock"],
                productPriceActiveBlock: ["productPriceActiveTextBlock"],
                productPriceActiveTextBlock: ["productPriceActiveText", "productPriceActiveTextMsg"],
                productPriceRegularBlock: ["productPriceRegularTextBlock"],
                productPriceRegularTextBlock: ["productPriceRegularText"],
                productPriceWorthBlock: ["productPriceWorthTextBlock"],
                productPriceWorthTextBlock: ["productPriceWorthText", "productPriceWorthTextMsg"],
                productAttBlock: ["productAddErrText", "productAttzeroBlock", "productAttSizeBlock", "productAttColorBlock", "productAttthirdBlock", "productAttfourthBlock", "productAttEditBlock"],
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
                productQtyAddBtnBlock: ["productQtyBlock", "productAddBlock", "productAddBlockclickcollect"],
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
                // productQtyAddBtnBlock: ["productQtyBlock","productAddBlock","productAddBlockclickcollect"],
                productAddBlockclickcollect: ["productAddImgBlockclickcollect", "productAddTextBlockclickcollect"],
                productAddTextBlockclickcollect: ["productAddTextclickcollect"],
                productAddImgBlockclickcollect: ["productAddImgclickcollect"],
            }
        },
        sidebar: {
            className: {
                sidebarModalBlock: prefix + "sidebar_modal" + postfix,
                sidebarHeaderBlock: prefix + "sidebar_header" + postfix,
                sidebarCartAddedBlock: prefix + "sidebar_cart_added" + postfix,
                sidebarRecommendedBlock: prefix + "sidebar_recommended" + postfix,
                sidebarCheckoutBlock: prefix + "sidebar_checkout" + postfix,
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
                sidebarHeaderItemCountTitleTextBlock: prefix + "header_item_count_title_text" + postfix,
                sidebarHeaderItemCountTitleText: prefix + "header_item_count_title_text",
                sidebarHeaderItemCountFigureBlock: prefix + "header_item_count_figure" + postfix,
                sidebarHeaderItemCountFigureTextBlock: prefix + "header_item_count_figure_text" + postfix,
                sidebarHeaderItemCountFigureText: prefix + "header_item_count_figure_text",
                sidebarCartAddedProductDescSubTotalPriceBlock: prefix + "cart_added_product_desc_subtotal_price" + postfix,
                sidebarCartAddedProductDescSubTotalPriceRegularBlock: prefix + "cart_added_product_desc_subtotal_price_regular" + postfix,
                sidebarCartAddedProductDescSubTotalRegularTextBlock: prefix + "cart_added_product_desc_subtotal_price_regular_text" + postfix,
                sidebarCartAddedProductDescSubTotalRegularText: prefix + "cart_added_product_desc_subtotal_price_regular_text",
                sidebarCartAddedProductDescSubTotalActiveBlock: prefix + "cart_added_product_desc_subtotal_price_active" + postfix,
                sidebarCartAddedProductDescSubTotalActiveTextBlock: prefix + "cart_added_product_desc_subtotal_price_active_text" + postfix,
                sidebarCartAddedProductDescSubTotalActiveText: prefix + "cart_added_product_desc_subtotal_price_active_text",
                sidebarCartAddedProductDescSubTotalActiveTextMsg: prefix + "cart_added_product_desc_subtotal_price_active_text_msg",

                sidebarCartAddedLeftBlock: prefix + "cart_added_left" + postfix,
                sidebarCartAddedLeftBtnBlock: prefix + "cart_added_left_btn" + postfix,
                sidebarCartAddedLeftBtnImgBlock: prefix + "cart_added_left_btn_img" + postfix,
                sidebarCartAddedLeftBtnImg: prefix + "cart_added_left_btn_img",
                sidebarCartAddedRightBlock: prefix + "cart_added_right" + postfix,
                sidebarCartAddedRightBtnBlock: prefix + "cart_added_right_btn" + postfix,
                sidebarCartAddedRightBtnImgBlock: prefix + "cart_added_right_btn_img" + postfix,
                sidebarCartAddedRightBtnImg: prefix + "cart_added_right_btn_img",
                sidebarCartAddedListBlock: prefix + "cart_added_list" + postfix,
                sidebarCartAddedProductBlock: prefix + "cart_added_product" + postfix,
                sidebarCartAddedProductImgBlock: prefix + "cart_added_product_img" + postfix,
                sidebarCartAddedProductImg: prefix + "cart_added_product_img",
                sidebarCartAddedProductDescBlock: prefix + "cart_added_product_desc" + postfix,
                sidebarCartAddedProductDescTitleBlock: prefix + "cart_added_product_desc_title" + postfix,
                sidebarCartAddedProductDescTitleTextBlock: prefix + "cart_added_product_desc_title_text" + postfix,
                sidebarCartAddedProductDescTitleText: prefix + "cart_added_product_desc_title_text",
                sidebarCartAddedProductDescPriceBlock: prefix + "cart_added_product_desc_price" + postfix,
                sidebarCartAddedProductDescPriceRegularBlock: prefix + "cart_added_product_desc_price_regular" + postfix,
                sidebarCartAddedProductDescPriceRegularTextBlock: prefix + "cart_added_product_desc_price_regular_text" + postfix,
                sidebarCartAddedProductDescPriceRegularText: prefix + "cart_added_product_desc_price_regular_text",
                sidebarCartAddedProductDescPriceActiveBlock: prefix + "cart_added_product_desc_price_active" + postfix,
                sidebarCartAddedProductDescPriceActiveTextBlock: prefix + "cart_added_product_desc_price_active_text" + postfix,
                sidebarCartAddedProductDescPriceActiveText: prefix + "cart_added_product_desc_price_active_text",
                sidebarCartAddedProductDescPriceActiveTextMsg: prefix + "cart_added_product_desc_price_active_text_msg",
                sidebarCartAddedProductDescAttBlock: prefix + "cart_added_product_desc_att" + postfix,
                sidebarCartAddedProductDescAttColorBlock: prefix + "cart_added_product_desc_att_color" + postfix,
                sidebarCartAddedProductDescAttColorTextBlock: prefix + "cart_added_product_desc_att_color_text" + postfix,
                sidebarCartAddedProductDescAttColorText: prefix + "cart_added_product_desc_att_color_text" + postfix,
                sidebarCartAddedProductDescAttSizeBlock: prefix + "cart_added_product_desc_att_size" + postfix,
                sidebarCartAddedProductDescAttSizeTextBlock: prefix + "cart_added_product_desc_att_size_text" + postfix,
                sidebarCartAddedProductDescAttSizeText: prefix + "cart_added_product_desc_att_size_text",


                sidebarRecommendedTitleBlock: prefix + "recommended_title" + postfix,
                sidebarRecommendedTitleTextBlock: prefix + "recommended_title_text" + postfix,
                sidebarRecommendedTitleText: prefix + "recommended_title_text",
                sidebarRecommendedTitleImgBlock: prefix + "recommended_title_img" + postfix,
                sidebarRecommendedTitleImg: prefix + "recommended_title_img",
                sidebarRecommendedTabsBlock: prefix + "recommended_tabs" + postfix,
                sidebarRecommendedTabsTitleBlock: prefix + "recommended_tabs_title" + postfix,
                sidebarRecommendedTabsTitleTextBlock: prefix + "recommended_tabs_title_text" + postfix,
                sidebarRecommendedTabsTitleText: prefix + "recommended_tabs_title_text",
                sidebarRecommendedTabsLeftBlock: prefix + "recommended_tabs_left" + postfix,
                sidebarRecommendedTabsListBlock: prefix + "recommended_tabs_list" + postfix,
                sidebarRecommendedTabsRightBlock: prefix + "recommended_tabs_right" + postfix,
                sidebarRecommendedTabsLeftBtnBlock: prefix + "recommended_tabs_left_btn" + postfix,
                sidebarRecommendedTabsLeftBtnImgBlock: prefix + "recommended_tabs_left_btn_img" + postfix,
                sidebarRecommendedTabsLeftBtnImg: prefix + "recommended_tabs_left_btn_img",
                sidebarRecommendedTabsRightBtnBlock: prefix + "recommended_tabs_right_btn" + postfix,
                sidebarRecommendedTabsRightBtnImgBlock: prefix + "recommended_tabs_right_btn_img" + postfix,
                sidebarRecommendedTabsRightBtnImg: prefix + "recommended_tabs_right_btn_img",
                sidebarRecommendedTabsListItemBlock: prefix + "recommended_tabs_list_item" + postfix,
                sidebarRecommendedTabsListItemTextBlock: prefix + "recommended_tabs_list_item_text" + postfix,
                sidebarRecommendedTabsListItemText: prefix + "recommended_tabs_list_item_text",
                sidebarRecommendedProductsBlock: prefix + "recommended_products" + postfix,
                sidebarRecommendedProductsLeftBlock: prefix + "recommended_products_left" + postfix,
                sidebarRecommendedProductsListBlock: prefix + "recommended_products_list" + postfix,
                sidebarRecommendedProductsListMainBlock: prefix + "recommended_products_list_main" + postfix,
                sidebarRecommendedProductsRightBlock: prefix + "recommended_products_right" + postfix,
                sidebarRecommendedProductsLeftBtnBlock: prefix + "recommended_products_left_btn" + postfix,
                sidebarRecommendedProductsLeftBtnImgBlock: prefix + "recommended_products_left_btn_img" + postfix,
                sidebarRecommendedProductsLeftBtnImg: prefix + "recommended_products_left_btn_img",
                sidebarRecommendedProductsRightBtnBlock: prefix + "recommeded_products_right_btn" + postfix,
                sidebarRecommendedProductsRightBtnImgBlock: prefix + "recommended_products_right_btn_img" + postfix,
                sidebarRecommendedProductsRightBtnImg: prefix + "recommended_products_right_btn_img",
                sidebarCheckoutContinueBlock: prefix + "checkout_continue" + postfix,
                sidebarCheckoutContinueBtnBlock: prefix + "checkout_continue_btn" + postfix,
                sidebarCheckoutContinueBtnTextBlock: prefix + "checkout_continue_btn_text" + postfix,
                sidebarCheckoutContinueBtnText: prefix + "checkout_continue_btn_text",
                sidebarCheckoutContinueBtnImgBlock: prefix + "checkout_continue_btn_img" + postfix,
                sidebarCheckoutContinueBtnImg: prefix + "checkout_continue_btn_img",
                sidebarCheckoutBasketBlock: prefix + "checkout_basket" + postfix,
                sidebarCheckoutBasketBtnBlock: prefix + "checkout_basket_btn" + postfix,
                sidebarCheckoutBasketBtnTextBlock: prefix + "checkout_basket_btn_text" + postfix,
                sidebarCheckoutBasketBtnText: prefix + "checkout_basket_btn_text",
                sidebarCheckoutBasketBtnImgBlock: prefix + "checkout_basket_btn_img" + postfix,
                sidebarCheckoutBasketBtnImg: prefix + "checkout_basket_btn_img",

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

                productAttEditBlock: prefix + "product_desc_att_edit" + postfix,
                productAttEditTextBlock: prefix + "product_desc_att_edit_text" + postfix,
                productAttEditText: prefix + "product_desc_att_edit_text",
                productAttEditImgBlock: prefix + "product_desc_att_edit_img" + postfix,
                productAttEditImg: prefix + "product_desc_att_edit_img",
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
                productAddBlockclickcollect: prefix + "product_desc_add_click_collect" + postfix,
                productAddTextBlockclickcollect: prefix + "product_desc_add_text_click_collect" + postfix,
                productAddTextclickcollect: prefix + "product_desc_add_text_click_collect",
                productAddImgBlockclickcollect: prefix + "product_desc_add_img_click_collect" + postfix,
                productAddImgclickcollect: prefix + "product_desc_add_img_click_collect",
                productAddErrText: prefix + "product_desc_add_err_text" + postfix,
            },
            dom: {
                sidebarModalBlock: ["sidebarCartAddedBlock", "sidebarHeaderBlock", "sidebarRecommendedBlock", "sidebarCheckoutBlock"],
                sidebarHeaderBlock: ["sidebarHeaderContinueBlock", "sidebarHeaderItemBlock"],
                sidebarHeaderContinueBlock: ["sidebarHeaderContinueImgBlock", "sidebarHeaderContinueTextBlock"],
                sidebarHeaderContinueImgBlock: ["sidebarHeaderContinueImg"],
                sidebarHeaderContinueTextBlock: ["sidebarHeaderContinueText"],
                sidebarHeaderTitleBlock: ["sidebarHeaderTitleTextBlock"],
                sidebarHeaderTitleTextBlock: ["sidebarHeaderTitleText"],
                sidebarHeaderItemBlock: ["sidebarHeaderItemCountBlock"],
                sidebarHeaderItemCountBlock: ["sidebarHeaderItemCountTitleBlock", "sidebarHeaderItemCountFigureBlock", "sidebarCartAddedProductDescSubTotalPriceBlock"],
                sidebarHeaderItemCountTitleBlock: ["sidebarHeaderItemCountTitleTextBlock"],
                sidebarHeaderItemCountTitleTextBlock: ["sidebarHeaderItemCountTitleText"],
                sidebarHeaderItemCountFigureBlock: ["sidebarHeaderItemCountFigureTextBlock"],
                sidebarHeaderItemCountFigureTextBlock: ["sidebarHeaderItemCountFigureText"],

                sidebarCartAddedProductDescSubTotalPriceBlock: ["sidebarCartAddedProductDescSubTotalActiveBlock", "sidebarCartAddedProductDescSubTotalPriceRegularBlock"],
                sidebarCartAddedProductDescSubTotalActiveBlock: ["sidebarCartAddedProductDescSubTotalActiveTextBlock"],
                sidebarCartAddedProductDescSubTotalActiveTextBlock: ["sidebarCartAddedProductDescSubTotalActiveText", "sidebarCartAddedProductDescPriceActiveTextMsg"],
                sidebarCartAddedProductDescSubTotalPriceRegularBlock: ["sidebarCartAddedProductDescSubTotalRegularTextBlock"],
                sidebarCartAddedProductDescSubTotalRegularTextBlock: ["sidebarCartAddedProductDescSubTotalRegularText"],

                sidebarCartAddedBlock: ["sidebarHeaderTitleBlock", "sidebarCartAddedLeftBlock", "sidebarCartAddedListBlock", "sidebarCartAddedRightBlock"],
                sidebarCartAddedLeftBlock: ["sidebarCartAddedLeftBtnBlock"],
                sidebarCartAddedLeftBtnBlock: ["sidebarCartAddedLeftBtnImgBlock"],
                sidebarCartAddedLeftBtnImgBlock: ["sidebarCartAddedLeftBtnImg"],
                sidebarCartAddedRightBlock: ["sidebarCartAddedRightBtnBlock"],
                sidebarCartAddedRightBtnBlock: ["sidebarCartAddedRightBtnImgBlock"],
                sidebarCartAddedRightBtnImgBlock: ["sidebarCartAddedRightBtnImg"],
                sidebarCartAddedListBlock: ["sidebarCartAddedProductBlock"],
                sidebarCartAddedProductBlock: ["sidebarCartAddedProductImgBlock", "sidebarCartAddedProductDescBlock"],
                sidebarCartAddedProductImgBlock: ["sidebarCartAddedProductImg"],
                sidebarCartAddedProductDescBlock: ["sidebarCartAddedProductDescTitleBlock", "sidebarCartAddedProductDescAttBlock", "sidebarCartAddedProductDescPriceBlock"],
                sidebarCartAddedProductDescTitleBlock: ["sidebarCartAddedProductDescTitleTextBlock"],
                sidebarCartAddedProductDescTitleTextBlock: ["sidebarCartAddedProductDescTitleText"],
                sidebarCartAddedProductDescPriceBlock: ["sidebarCartAddedProductDescPriceActiveBlock", "sidebarCartAddedProductDescPriceRegularBlock"],
                sidebarCartAddedProductDescPriceActiveBlock: ["sidebarCartAddedProductDescPriceActiveTextBlock"],
                sidebarCartAddedProductDescPriceActiveTextBlock: ["sidebarCartAddedProductDescPriceActiveText", "sidebarCartAddedProductDescPriceActiveTextMsg"],
                sidebarCartAddedProductDescPriceRegularBlock: ["sidebarCartAddedProductDescPriceRegularTextBlock"],
                sidebarCartAddedProductDescPriceRegularTextBlock: ["sidebarCartAddedProductDescPriceRegularText"],

                sidebarCartAddedProductDescAttBlock: ["sidebarCartAddedProductDescAttColorBlock", "sidebarCartAddedProductDescAttSizeBlock"],
                sidebarCartAddedProductDescAttColorBlock: ["sidebarCartAddedProductDescAttColorTextBlock"],
                sidebarCartAddedProductDescAttColorTextBlock: ["sidebarCartAddedProductDescAttColorText"],
                sidebarCartAddedProductDescAttSizeBlock: ["sidebarCartAddedProductDescAttSizeTextBlock"],
                sidebarCartAddedProductDescAttSizeTextBlock: ["sidebarCartAddedProductDescAttSizeText"],

                sidebarRecommendedBlock: ["sidebarRecommendedTitleBlock", "sidebarRecommendedTabsBlock", "sidebarRecommendedProductsBlock"],
                sidebarRecommendedTitleBlock: ["sidebarRecommendedTitleTextBlock", "sidebarRecommendedTitleImgBlock"],
                sidebarRecommendedTitleTextBlock: ["sidebarRecommendedTitleText"],
                sidebarRecommendedTitleImgBlock: ["sidebarRecommendedTitleImg"],
                sidebarRecommendedTabsBlock: ["sidebarRecommendedTabsTitleBlock", "sidebarRecommendedTabsLeftBlock", "sidebarRecommendedTabsListBlock", "sidebarRecommendedTabsRightBlock"],
                sidebarRecommendedTabsTitleBlock: ["sidebarRecommendedTabsTitleTextBlock"],
                sidebarRecommendedTabsTitleTextBlock: ["sidebarRecommendedTabsTitleText"],
                sidebarRecommendedTabsLeftBlock: ["sidebarRecommendedTabsLeftBtnBlock"],
                sidebarRecommendedTabsLeftBtnBlock: ["sidebarRecommendedTabsLeftBtnImgBlock"],
                sidebarRecommendedTabsLeftBtnImgBlock: ["sidebarRecommendedTabsLeftBtnImg"],
                sidebarRecommendedTabsRightBlock: ["sidebarRecommendedTabsRightBtnBlock"],
                sidebarRecommendedTabsRightBtnBlock: ["sidebarRecommendedTabsRightBtnImgBlock"],
                sidebarRecommendedTabsRightBtnImgBlock: ["sidebarRecommendedTabsRightBtnImg"],
                sidebarRecommendedTabsListBlock: ["sidebarRecommendedTabsListItemBlock"],
                sidebarRecommendedTabsListItemBlock: ["sidebarRecommendedTabsListItemTextBlock"],
                sidebarRecommendedTabsListItemTextBlock: ["sidebarRecommendedTabsListItemText"],
                sidebarRecommendedProductsBlock: ["sidebarRecommendedProductsLeftBlock", "sidebarRecommendedProductsListMainBlock", "sidebarRecommendedProductsRightBlock"],
                sidebarRecommendedProductsLeftBlock: ["sidebarRecommendedProductsLeftBtnBlock"],
                sidebarRecommendedProductsLeftBtnBlock: ["sidebarRecommendedProductsLeftBtnImgBlock"],
                sidebarRecommendedProductsLeftBtnImgBlock: ["sidebarRecommendedProductsLeftBtnImg"],
                sidebarRecommendedProductsRightBlock: ["sidebarRecommendedProductsRightBtnBlock"],
                sidebarRecommendedProductsRightBtnBlock: ["sidebarRecommendedProductsRightBtnImgBlock"],
                sidebarRecommendedProductsRightBtnImgBlock: ["sidebarRecommendedProductsRightBtnImg"],
                sidebarRecommendedProductsListMainBlock: ["sidebarRecommendedProductsListBlock"],
                sidebarRecommendedProductsListBlock: ["productModuleBlock"],
                sidebarCheckoutBlock: ["sidebarCheckoutContinueBlock", "sidebarCheckoutBasketBlock"],
                sidebarCheckoutContinueBlock: ["sidebarCheckoutContinueBtnBlock"],
                sidebarCheckoutContinueBtnBlock: ["sidebarCheckoutContinueBtnImgBlock", "sidebarCheckoutContinueBtnTextBlock"],
                sidebarCheckoutContinueBtnImgBlock: ["sidebarCheckoutContinueBtnImg"],
                sidebarCheckoutContinueBtnTextBlock: ["sidebarCheckoutContinueBtnText"],
                sidebarCheckoutBasketBlock: ["sidebarCheckoutBasketBtnBlock"],
                sidebarCheckoutBasketBtnBlock: ["sidebarCheckoutBasketBtnImgBlock", "sidebarCheckoutBasketBtnTextBlock"],
                sidebarCheckoutBasketBtnImgBlock: ["sidebarCheckoutBasketBtnImg"],
                sidebarCheckoutBasketBtnTextBlock: ["sidebarCheckoutBasketBtnText"],

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
                productDescBlock: ["productTitleBlock", "productPriceBlock", "productRatingsBlock", "productInfoBlock", "productAttBlock", "productPackOfBlock", "productQtyAddBtnBlock"],
                productTitleBlock: ["productTitleTextBlock"],
                productTitleTextBlock: ["productTitleText"],
                productInfoBlock: ["productInfoImgBlock", "productInfoTextBlock", "productInfoFullDescBlock"],
                productInfoImgBlock: ["productInfoImg"],
                productInfoTextBlock: ["productInfoText"],
                productInfoFullDescBlock: ["productInfoFullDescText"],
                productPriceBlock: ["productPriceLabel", "productPriceActiveBlock", "productPriceRegularBlock", "productPriceWorthBlock"],
                productPriceActiveBlock: ["productPriceActiveTextBlock"],
                productPriceActiveTextBlock: ["productPriceActiveText", "productPriceActiveTextMsg"],
                productPriceRegularBlock: ["productPriceRegularTextBlock"],
                productPriceRegularTextBlock: ["productPriceRegularText"],
                productPriceWorthBlock: ["productPriceWorthTextBlock"],
                productPriceWorthTextBlock: ["productPriceWorthText", "productPriceWorthTextMsg"],

                productAttBlock: ["productAddErrText", "productAttzeroBlock", "productAttSizeBlock", "productAttColorBlock", "productAttthirdBlock", "productAttfourthBlock", "productAttEditBlock"],
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
                productQtyAddBtnBlock: ["productQtyBlock", "productAddBlock", "productAddBlockclickcollect"],
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
                //  productQtyAddBtnBlock: ["productQtyBlock","productAddBlock","productAddBlockclickcollect"],
                productAddBlockclickcollect: ["productAddImgBlockclickcollect", "productAddTextBlockclickcollect"],
                productAddTextBlockclickcollect: ["productAddTextclickcollect"],
                productAddImgBlockclickcollect: ["productAddImgclickcollect"],
            }
        },
        am: {
            className: {
                afModalBlock: prefix + "af" + postfix,
                afModalTitleBlock: prefix + "af_title" + postfix,
                afModalTitleTextBlock: prefix + "af_title_text" + postfix,
                afModalTitleText: prefix + "af_title_text",
                afModalClose: prefix + "af_modal_close",
                afModalBundlesBlock: prefix + "af_bundles" + postfix,
                afLeftBlock: prefix + "af_left" + postfix,
                afLeftBtnBlock: prefix + "af_left_btn" + postfix,
                afLeftBtnImgBlock: prefix + "af_left_btn_img" + postfix,
                afLeftBtnImg: prefix + "af_left_btn_img",
                afProductListMainBlock: prefix + "af_product-list-main" + postfix,
                afProductListBlock: prefix + "af_product-list" + postfix,
                afRightBlock: prefix + "af_right" + postfix,
                afRightBtnBlock: prefix + "af_right_btn" + postfix,
                afRightBtnImgBlock: prefix + "af_right_btn_img" + postfix,
                afRightBtnImg: prefix + "af_right_btn_img",

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
                productAddBlockclickcollect: prefix + "product_desc_add_click_collect" + postfix,
                productAddTextBlockclickcollect: prefix + "product_desc_add_text_click_collect" + postfix,
                productAddTextclickcollect: prefix + "product_desc_add_text_click_collect",
                productAddImgBlockclickcollect: prefix + "product_desc_add_img_click_collect" + postfix,
                productAddImgclickcollect: prefix + "product_desc_add_img_click_collect",
                productAddErrText: prefix + "product_desc_add_err_text" + postfix,
            },
            dom: {
                afModalBlock: ["afModalTitleBlock", "afModalBundlesBlock"],
                afModalTitleBlock: ["afModalTitleTextBlock"],
                afModalTitleTextBlock: ["afModalTitleText", "afModalClose"],
                afModalBundlesBlock: ["afLeftBlock", "afProductListMainBlock", "afRightBlock"],
                afLeftBlock: ["afLeftBtnBlock"],
                afLeftBtnBlock: ["afLeftBtnImgBlock"],
                afLeftBtnImgBlock: ["afLeftBtnImg"],
                afProductListMainBlock: ["afProductListBlock"],
                afProductListBlock: ["productModuleBlock", "productModuleBlock", "productModuleBlock"],
                afRightBlock: ["afRightBtnBlock"],
                afRightBtnBlock: ["afRightBtnImgBlock"],
                afRightBtnImgBlock: ["afRightBtnImg"],

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
                productDescBlock: ["productTitleBlock", "productPriceBlock", "productRatingsBlock", "productInfoBlock", "productAttBlock", "productPackOfBlock", "productQtyAddBtnBlock"],
                productTitleBlock: ["productTitleTextBlock"],
                productTitleTextBlock: ["productTitleText"],
                productInfoBlock: ["productInfoImgBlock", "productInfoTextBlock", "productInfoFullDescBlock"],
                productInfoImgBlock: ["productInfoImg"],
                productInfoTextBlock: ["productInfoText"],
                productInfoFullDescBlock: ["productInfoFullDescText"],
                productPriceBlock: ["productPriceLabel", "productPriceActiveBlock", "productPriceRegularBlock", "productPriceWorthBlock"],
                productPriceActiveBlock: ["productPriceActiveTextBlock"],
                productPriceActiveTextBlock: ["productPriceActiveText", "productPriceActiveTextMsg"],
                productPriceRegularBlock: ["productPriceRegularTextBlock"],
                productPriceRegularTextBlock: ["productPriceRegularText"],
                productPriceWorthBlock: ["productPriceWorthTextBlock"],
                productPriceWorthTextBlock: ["productPriceWorthText", "productPriceWorthTextMsg"],

                productAttBlock: ["productAddErrText", "productAttzeroBlock", "productAttSizeBlock", "productAttColorBlock", "productAttthirdBlock", "productAttfourthBlock", "productAttEditBlock"],
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
                productQtyAddBtnBlock: ["productQtyBlock", "productAddBlock", "productAddBlockclickcollect"],
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
                // productQtyAddBtnBlock: ["productQtyBlock","productAddBlock","productAddBlockclickcollect"],
                productAddBlockclickcollect: ["productAddImgBlockclickcollect", "productAddTextBlockclickcollect"],
                productAddTextBlockclickcollect: ["productAddTextclickcollect"],
                productAddImgBlockclickcollect: ["productAddImgclickcollect"],
            }
        },
    }
}

INC.methods = {};
INC.methods.networkReq = function(nwConfigObj, cb) {

    var nwConfigObj = new INC.classes.NWConfig(nwConfigObj);
    // if(INC.debug) console.log(nwConfigObj);
    var xhr = new XMLHttpRequest();
    xhr.open(nwConfigObj.method, nwConfigObj.url, true);

    xhr.onload = function() {}
    // xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status === 200) {
            if (xhr.response != "") {
                if (INC.config.pageType == "pdp" && document.querySelector('.add-to-customize') == null) {
                    cb(xhr.response);
                } else {
                    cb(xhr.response);
                }
                if (INC.config.pageType == "pdp") {
                    var p_ids = INC.methods.getProductIdFromWebPage()
                    INC.methods.irbReq_is_tc(p_ids, 10, "catalog_product_view","resp_avail",cb);
                }
                sessionStorage.setItem('bundleJSON', xhr.response)
            } else {
                if (INC.config.pageType == "pdp") {
                    var p_ids = INC.methods.getProductIdFromWebPage()
                    INC.methods.irbReq_is_tc(p_ids, 10, "catalog_product_view",'no_resp');
                }
                // if (INC.config.pageType == "pdp") {
                //     var delay = 2500
                // } else {
                //     var delay = 1000
                // }
                // setTimeout(function() {

                //     if (INC.config.pageType == "pdp") {
                //         INC.config.empty_prod_details = []
                //         var product_wrap = document.getElementsByClassName("product-main")[0];
                //         var pdpprd_id = INC.methods.getProductIdFromWebPage();
                //         var p_id = INC.methods.getProductIdFromWebPage();
                //         var p_name = document.querySelector('.page-title-wrapper h1').innerText;
                //         var p_img = ""
                //         var p_img = document.querySelector('.product-info-main img').src
                //         var regularPrice = "";
                //         var p_activePrice = ""

                //         if (document.querySelector('.special-price .price-including-tax span.price') != null) {
                //             p_activePrice = document.querySelector('.special-price .price-including-tax span.price').innerText.trim()

                //         } else {
                //             if(document.querySelector('.product-price.box .price-including-tax span.price') != null){
                //                 p_activePrice = document.querySelector('.product-price.box .price-including-tax span.price').innerText.trim()
                //             }else if(document.querySelector('.price-wrapper span.price') != null){
                //                 p_activePrice = document.querySelector('.price-wrapper span.price').innerText.trim()
                //             }
                //         }
                //         if (document.querySelector('.product-price.box .price-including-tax span.price') != null) {
                //             regularPrice = document.querySelector('.product-price.box .price-including-tax span.price').innerText.trim()
                //         }
                //         var size = ""
                //         if (document.querySelector('.m_variant-swatches li.active a') != null) {
                //             size = document.querySelector('.m_variant-swatches li.active a').getAttribute('title')
                //         }
                //         INC.config.empty_prod_details.push({
                //             p_id: p_id,
                //             p_name: p_name,
                //             p_img: p_img,
                //             p_activePrice: p_activePrice,
                //             regularPrice: regularPrice,
                //             size: size
                //         })
                //     }
                //     if (INC.config.pageType != "cartPage" && INC.config.pageType != "productList") {
                //         INC.config.pdpaddedProductList.push(INC.config.empty_prod_details[0].p_id)
                //         INC.config.pdpaddedProductList.push("9517B002")
                //         INC.config.pdpaddedProductList.push("8267B001")
                //         if (typeof(response) != "object") {
                //             var ress = JSON.parse(ressponse_data);
                //         } else {
                //             var ress = ressponse_data;
                //         }
                        
                //         ress.Bundles[0].ProductIds[0] = INC.config.empty_prod_details[0].p_id
                //         ress.ProductsDetail[0].ProductId = INC.config.empty_prod_details[0].p_id;
                //         ress.ProductsDetail[0].ProductName = INC.config.empty_prod_details[0].p_name;
                //         ress.ProductsDetail[0].Price = INC.config.empty_prod_details[0].p_activePrice;
                //         ress.ProductsDetail[0].SpecialPrice = INC.config.empty_prod_details[0].regularPrice;
                //         ress.ProductsDetail[0].ImageURL = INC.config.empty_prod_details[0].p_img;
                //         ress.ProductsDetail[0].size = INC.config.empty_prod_details[0].size;
                        
                //         cb(ress);
                //     }
                // }, delay)

            }
        }
    }

    xhr.send(JSON.stringify(nwConfigObj.params));
}

INC.methods.irbReq = function(productId, bundleCount, elementName) {

    var elementName = elementName || "";
    var productId = productId;
    var apiKey = INC.config.clientToken;
    var bundleReqCount = bundleCount || 5;
    var irbPATH = "https://rapidload.increasingly.co/increasingly_bundles?irb/";

    if (INC.config.pageType == "pdp" || INC.config.pageType == "cartPage" || INC.config.pageType == "productList") {
        var irbReqParams =
            "product_ids=" + productId +
            "&category_id=" +
            "&api_key=" + apiKey +
            "&client_id=" +
            "&page_type=" + elementName +
            "&fr=" + "1" + 
            "&client_visitor_id=" + INC.config.ivid //+
        // "&is_tc=" + "1" +
        // "&no_of_bundles=" + bundleReqCount
        ;
    } else {
        var irbReqParams =
            "product_ids=" + productId +
            "&category_id=" +
            "&api_key=" + apiKey +
            "&client_id=" +
            "&page_type=" + elementName +
            "&fr=" + "1" + 
            "&client_visitor_id=" + INC.config.ivid +
            "&is_tc=" + "1" +
            "&no_of_bundles=" + bundleReqCount;
    }


    if (INC.debug) console.log(irbReqParams);
    var irbReqURL = decodeURI(irbPATH + btoa(irbReqParams));
    var networkConfigObj = new INC.classes.NWConfig();
    networkConfigObj["url"] = irbReqURL;

    return this.refreshBundles(networkConfigObj);
}

INC.methods.irbReq_category_based = function(productId, bundleCount, elementName) {

    var elementName = elementName || "";
    var productId = productId;
    var apiKey = INC.config.clientToken;
    var irbPATH = "https://rapidload.increasingly.co/increasingly_bundles?irb/";
    //apiKey +
    var irbReqParams =
        "product_ids=" +
        "&category_id=" + btoa(productId) +
        "&api_key=" + apiKey +
        "&client_id=" +
        "&page_type=" + elementName +
        "&client_visitor_id=" + INC.config.ivid;

    if (INC.debug) console.log(irbReqParams);
    var irbReqURL1 = decodeURI(irbPATH + btoa(irbReqParams));
    var networkConfigObj = new INC.classes.NWConfig();
    networkConfigObj["url"] = irbReqURL1;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", networkConfigObj["url"], true);

    xhr.onload = function() {}
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status === 200) {
            if (xhr.response != "") {
                // cb_category_based(JSON.parse(xhr.response));
                INC.dataStore.methods().buildDataStoreObj(JSON.parse(xhr.response));
            }
        }
    }

    xhr.send(JSON.stringify(networkConfigObj["params"]));

}

INC.methods.refreshBundles = function(nwConfigObj) {
    var incDataStore = INC.dataStore;

    INC.methods.networkReq(nwConfigObj, function(response) {


        if (INC.debug) console.log(response.length);
        if (response.length == 0) return;

        if (typeof(response) != "object") {
            var responseJSON = JSON.parse(response);
        } else {
            var responseJSON = response;
        }

        if (responseJSON.hasOwnProperty('Bundles') && (responseJSON.Bundles.length > 0)) {
            responseJSON.timeStamp = Date.now();
            var bundleResponse = responseJSON;
            if (INC.debug) console.log(bundleResponse);
            INC.dataStore.methods().buildDataStoreObj(bundleResponse);

            if ((incDataStore.dataStoreObj == null) || (incDataStore.dataStoreObj == undefined)) return;

            switch (INC.config.pageType) {
                case "pdp":
                    INC.methods.createPDPBlock();
                    break;
                case "cartPage":
                    INC.methods.createAMBlock();
                    break;
                case "productList":
                    
                    break;
            }


        }
        if (INC.debug) console.log(responseJSON.hasOwnProperty('Bundles') && INC.config.pageType == "productList");


    });
}

INC.methods.irbReq_is_tc = function(productId, bundleCount, elementName,no_resp,cb) {

    var elementName = elementName || "";
    var productId = productId;
    var apiKey = INC.config.clientToken;
    var bundleReqCount = bundleCount || 5;
    var irbPATH = "https://rapidload.increasingly.co/increasingly_bundles?irb/";

    var irbReqParams =
        "product_ids=" + productId +
        "&category_id=" +
        "&api_key=" + apiKey +
        "&client_id=" +
        "&page_type=" + elementName +
        "&fr=" + "1" + 
        "&client_visitor_id=" + INC.config.ivid +
        "&is_tc=" + "1" +
        "&no_of_bundles=" + bundleReqCount;

    if (INC.debug) console.log(irbReqParams);
    var irbReqURL1 = decodeURI(irbPATH + btoa(irbReqParams));
    var networkConfigObj = new INC.classes.NWConfig();
    networkConfigObj["url"] = irbReqURL1;

    var xhr = new XMLHttpRequest();
    xhr.open("GET", networkConfigObj["url"], true);

    xhr.onload = function() {}
    // xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status === 200) {
            if (xhr.response != "") {
                if (INC.config.pageType == "pdp" && document.querySelector('.add-to-customize') == null) {
                    
                    if(no_resp != "no_resp"){
                        cb_tc(JSON.parse(xhr.response));
                    }else{
                        var incDataStore = INC.dataStore;
                        if (typeof(xhr.response) != "object") {
                            var responseJSON = JSON.parse(xhr.response);
                        } else {
                            var responseJSON = xhr.response;
                        }
                
                        if (responseJSON.hasOwnProperty('Bundles') && (responseJSON.Bundles.length > 0)) {
                            responseJSON.timeStamp = Date.now();
                            var bundleResponse = responseJSON;
                            if (INC.debug) console.log(bundleResponse);
                            INC.dataStore.methods().buildDataStoreObj(bundleResponse);
                
                            if ((incDataStore.dataStoreObj == null) || (incDataStore.dataStoreObj == undefined)) return;
                
                            INC.methods.createPDPBlock();
                            setTimeout(function() {
                                INC.methods.createPDPBlock("sidebar")
                            },100)
                        }
                    }
                }
                // sessionStorage.setItem('bundleJSON',xhr.response)
            } else {
                if (INC.config.pageType == "pdp") {
                    var delay = 2500
                } else {
                    var delay = 1000
                }
                // setTimeout(function() {

                //     if (INC.config.pageType == "pdp") {
                //         INC.config.empty_prod_details = []
                //         var product_wrap = document.getElementsByClassName("product-main")[0];
                //         var pdpprd_id = INC.methods.getProductIdFromWebPage();
                //         var p_id = INC.methods.getProductIdFromWebPage();
                //         var p_name = document.querySelector('.page-title-wrapper h1').innerText;
                //         var p_img = ""
                //         var p_img = document.querySelector('.product-info-main img').src
                //         var regularPrice = "";
                //         var p_activePrice = ""

                //         if (document.querySelector('.special-price .price-including-tax span.price') != null) {
                //             p_activePrice = document.querySelector('.special-price .price-including-tax span.price').innerText.trim()

                //         } else {
                //             if(document.querySelector('.product-price.box .price-including-tax span.price') != null){
                //                 p_activePrice = document.querySelector('.product-price.box .price-including-tax span.price').innerText.trim()
                //             }else if(document.querySelector('.price-wrapper span.price') != null){
                //                 p_activePrice = document.querySelector('.price-wrapper span.price').innerText.trim()
                //             }
                //         }
                //         if (document.querySelector('.product-price.box .price-including-tax span.price') != null) {
                //             regularPrice = document.querySelector('.product-price.box .price-including-tax span.price').innerText.trim()
                //         }
                //         var size = ""
                //         if (document.querySelector('.m_variant-swatches li.active a') != null) {
                //             size = document.querySelector('.m_variant-swatches li.active a').getAttribute('title')
                //         }
                //         INC.config.empty_prod_details.push({
                //             p_id: p_id,
                //             p_name: p_name,
                //             p_img: p_img,
                //             p_activePrice: p_activePrice,
                //             regularPrice: regularPrice,
                //             size: size
                //         })
                //     }
                //     if (INC.config.pageType != "cartPage" && INC.config.pageType != "ticket") {
                //         INC.config.pdpaddedProductList.push(INC.config.empty_prod_details[0].p_id)
                //         INC.config.pdpaddedProductList.push("9517B002")
                //         INC.config.pdpaddedProductList.push("8267B001")
                //         if (typeof(response) != "object") {
                //             var ress = JSON.parse(ressponse_data);
                //         } else {
                //             var ress = ressponse_data;
                //         }
                //         ress.Bundles[0].ProductIds[0] = INC.config.empty_prod_details[0].p_id
                //         ress.ProductsDetail[0].ProductId = INC.config.empty_prod_details[0].p_id;
                //         ress.ProductsDetail[0].ProductName = INC.config.empty_prod_details[0].p_name;
                //         ress.ProductsDetail[0].Price = INC.config.empty_prod_details[0].p_activePrice;
                //         ress.ProductsDetail[0].SpecialPrice = INC.config.empty_prod_details[0].regularPrice;
                //         ress.ProductsDetail[0].ImageURL = INC.config.empty_prod_details[0].p_img;
                //         ress.ProductsDetail[0].size = INC.config.empty_prod_details[0].size;
                //         cb_tc(ress);
                //     }
                // }, delay)

            }
        }
    }

    xhr.send(JSON.stringify(networkConfigObj["params"]));
}


INC.methods.getSelectorClassName = function(classNames, className) {
    return "." + classNames[className];
}
INC.methods.get_product_ratings = function(filed3, rating_containers) {
    if (filed3 != undefined && filed3 != "" && filed3 != 0 && filed3.split('|')[0] != "0.0" && filed3.split('|')[0] != "0") {
        var rating = filed3.split("|")[0].split(" ")[0];
        if (rating == undefined || rating == "") {
            rating = "0"
        }
        var ratingAvg = filed3
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
            count.textContent = ""//"(" + rating.replace('-', '.') + ")"
        }
        var stars = document.createElement('span');
        stars.classList.add('rating_stars');
        stars.innerHTML = "★★★★★"
        rating_container.appendChild(stars);
    } else {
        var stars = document.createElement('span');
        stars.innerHTML = ""
        stars.style.color = "#fff"
        stars.classList.add('rating_stars');
        stars.classList.add('noratings');
        rating_containers.appendChild(stars);
    }
}
INC.methods.getProductIdFromWebPage = function() {
    if (document.querySelector('.product-summary #product-code') != null) {
        var productId = document.querySelector('.product-summary #product-code').innerText

    } else if (document.querySelector('.trustpilot-widget[data-sku]').getAttribute('data-sku') != null) {
        var productId = document.querySelector('.trustpilot-widget[data-sku]').getAttribute('data-sku')
    }
    if (INC.debug) console.log(productId);
    INC.config.Product_id = productId
    return productId;

}

INC.methods.detectPageType = function() {
    if (document.querySelector('.product.data.items') != null) return "pdp";
    // Magento 1 classnames
    if (document.querySelector('.catalog-category-view') != null) return "productList";
    if (document.querySelector('.catalogsearch-result-index') != null) return "productList";
    if (document.querySelector('#product-tabs-container') != null) return "pdp";
    if (document.querySelector(".cart-container") != null) return "cartPage";
    // if ( document.querySelector("#checkout-methods-items")  != null) return "cartPage";
}
INC.methods.detectDeviceType = function() {
    return (window.innerWidth > 768) ? "desktop" : "mobile";
}
INC.methods.detectLanguage = function detectLanguage() {
    return "en";
}
INC.methods.showSidebar = function() {
    if (document.querySelector('.inc_sidebar_modal_block') != null) {
        var seidebar_pr_length = document.querySelectorAll('.inc_sidebar_modal_block .inc_product_module_block').length;

        if (!(seidebar_pr_length > 2)) {
            document.querySelector('.inc_recommended_products_right_block').style.visibility = "hidden";
            document.querySelector('.inc_recommended_products_left_block').style.visibility = "hidden";

        }

        if (seidebar_pr_length > 2) {
            INC.clientConfig.slidevalue = 0
            document.querySelector('.inc_recommended_products_list_block').setAttribute('style', 'margin-left:0;')
            document.querySelector('.inc_recommended_products_right_block').style.visibility = "visible";
            document.querySelector('.inc_recommended_products_right_block .inc_recommended_products_right_btn_img').setAttribute("style", "pointer-events: auto;opacity:1");
            document.querySelector('.inc_recommended_products_right_block').style.visibility = "visible";
            document.querySelector('.inc_recommended_products_right_block .inc_recommeded_products_right_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
            document.querySelector('.inc_recommended_products_left_block').style.visibility = "visible";
            document.querySelector('.inc_recommended_products_left_block .inc_recommended_products_left_btn_block').style.visibility = "visible";
            document.querySelector('.inc_recommended_products_left_block .inc_recommended_products_left_btn_block .inc_recommended_products_left_btn_img').style.visibility = "visible";

            document.querySelector('.inc_recommended_products_left_block .inc_recommended_products_left_btn_block .inc_recommended_products_left_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
            document.querySelector('.inc_recommended_products_left_block').setAttribute("style", "opacity:0.5");
        }
        var total_added_product = INC.config.pdpaddedProductList;

        var all_cate_tab = document.querySelectorAll('.inc_recommended_tabs_list_block .inc_recommended_tabs_list_item_text');

        if (all_cate_tab.length == 0) {
            if (document.querySelector('.inc_sidebar_modal_block') != null) {
                document.querySelector('.inc_sidebar_modal_block').setAttribute('id', 'inc_empty_sidebar')
            }
        }
        if (document.querySelector('.inc_cart_added_product_desc_title_text') != null && document.querySelector('.inc_cart_added_product_desc_title_text').innerText == "undefined") return;

        var elSidebarOverlay = document.querySelector(".inc_sidebar_overlay_block");
        if (elSidebarOverlay != null) {
            elSidebarOverlay.style.display = "block";
        }
        var classNames = INC.uiConfig.sidebar.className;
        var getSelectorClassName = INC.methods.getSelectorClassName;
        document.querySelector(getSelectorClassName(classNames, "sidebarModalBlock")).classList.add("active");
        document.querySelector('html').classList.add('pop_inc_overlay');
        if (typeof(jQuery) != "undefined") {
            setTimeout(function() {
                jQuery('.inc_sidebar_modal_block.active').animate({
                    scrollTop: jQuery('.inc_sidebar_modal_block.active').height()
                }, 'slow');
            }, 2000)
        }

        if (document.querySelector('.inc_recommended_products_list_block .inc_product_module_block') == null) {
            if (document.querySelector('.inc_recommended_tabs_list_item_text') != null) {
                document.querySelector('.inc_recommended_tabs_list_item_text').click()
            }
        }
    }
    if (document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading') != undefined) {
        document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading').classList.remove('inc_loading')
    }
}
INC.methods.hideSidebar = function() {
    var elSidebarOverlay = document.querySelector(".inc_sidebar_overlay_block");
    INC.config.pdpaddedProductList = []
    elSidebarOverlay.style.display = "none";
    var classNames = INC.uiConfig.sidebar.className;
    var getSelectorClassName = INC.methods.getSelectorClassName;
    document.querySelector('html').classList.remove('pop_inc_overlay')
    document.querySelector(getSelectorClassName(classNames, "sidebarModalBlock")).classList.remove("active");
    localStorage.removeItem("bdsLoadModal");
    window.location.reload();
}
INC.methods.addProductToSidebarCart = function(findObj, qty, productBlock, client_add_btn, type_bundle) {

    var dataStore = INC.dataStore;
    var classNames = INC.uiConfig.sidebar.className;
    var getSelectorClassName = this.getSelectorClassName;

    var sbBlock = document.querySelector(getSelectorClassName(classNames, "sidebarModalBlock"));

    function getViewElement(className) {
        if (sbBlock != null) {
            return sbBlock.querySelector(getSelectorClassName(classNames, className));
        }
    }
    var subtotal_activeprice = 0;
    var subtotal_regular = 0;
    if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_active_text') != null) {
        var subtotal_activeprice = document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_active_text').getAttribute('subtotalactiveprice')
    }
    if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_regular_text') != null) {
        var subtotal_regular = document.querySelector('.inc_cart_added_product_desc_subtotal_price_block .inc_cart_added_product_desc_subtotal_price_regular_text').getAttribute('subtotalregularprice')
    }
    if (subtotal_activeprice == null) {
        subtotal_activeprice = 0
    }
    if (subtotal_regular == null) {
        subtotal_regular = 0
    }
    if (client_add_btn == "client_add_btn") {
        var subtotal_activeprice = 0;
        var subtotal_regular = 0;
    }

    var elHeadersubtotalactivetext = getViewElement("sidebarCartAddedProductDescSubTotalActiveText");
    var elHeadersubtotalregulartext = getViewElement("sidebarCartAddedProductDescSubTotalRegularText");
    var elHeaderItemCountFigureText = getViewElement("sidebarHeaderItemCountFigureText");
    var sidebarHeaderItemCountTitleText = getViewElement("sidebarHeaderItemCountTitleText");
    var sbCartBlock = getViewElement("sidebarCartAddedListBlock");

    var productObj = dataStore.methods().getProductById(findObj);
    var productBlock = INC.methods.getElementChilds("sidebarCartAddedProductBlock", "sidebar");
    productBlock.setAttribute('id', productObj.id)
    productBlock.setAttribute('sku', productObj.sku)
    productBlock.setAttribute('mainId', productObj.mainId)
    productBlock.setAttribute('qty', '1')
    productBlock.setAttribute('type_bundle', type_bundle)
    productBlock.classList.add(type_bundle)
    var elImg = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductImg"));
    var elTitleText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescTitleText"));
    var elPriceActiveText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceActiveText"));
    var elPriceRegularText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceRegularText"));
    var elAttsizeText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescAttSizeText"));
    var elAttColorText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescAttColorText"));

    var elImgTag = INC.methods.generateHTMLTags('img', {
        src: productObj.imageURL
    });
    if(onloadpdp == true){
        elImgTag.src = productObj.imageURL
    }
    elImgTag.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
    elImg.appendChild(elImgTag);
    elImgTag.setAttribute('alt', productObj.name)
    elTitleText.innerHTML = qty + "<small>x </small>" + productObj.name;

    //current  active prod
    var color = "";
    var size = "";
    if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
        var just_check_prod_block = document.querySelector('.inc_sidebar_modal_block .inc_product_module_block[data-main_id="' + productObj.sku + '"]')
    } else {
        var just_check_prod_block = document.querySelector('.inc_product_module_block[data-main_id="' + productObj.mainId + '"]')
    }
    if (just_check_prod_block != null) {
        if (just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.active div') != null) {
            size = just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.active div').innerText
        }
        if (just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block') != null) {
            color = just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-color')
        }
    }
    console.log("size " + size)
    console.log("color " + color)
    //end
    if (color != "") {
        elAttColorText.innerText = color + " | ";
    } else {
        elAttsizeText.innerText = size;
    }


    var activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
    var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();

    elPriceActiveText.innerHTML = "<span>Price: </span>" + "<span class='price'>" + INC.clientConfig.currencySymbol + formatter.format(activePrice) + "</span> <span class='inc'> Inc. VAT</span>"
    if (client_add_btn == "client_add_btn") {
        if (subtotal_regular == "" && +regularPrice != 0 && regularPrice != "") {
            var subtotalactiveprice = +subtotal_activeprice + (+activePrice * qty)
            var subtotalregukarprice = +subtotal_activeprice + (+regularPrice * qty)
        } else {
            var subtotalactiveprice = +subtotal_activeprice + (+activePrice * qty)
            var subtotalregukarprice = +subtotal_regular + (+regularPrice * qty)
        }
    } else {
        if (subtotal_regular == "" && +regularPrice != 0 && regularPrice != "") {
            var subtotalactiveprice = +subtotal_activeprice + (+activePrice * qty)
            var subtotalregukarprice = +subtotal_activeprice + (+regularPrice * qty)
        } else {
            var subtotalactiveprice = +subtotal_activeprice + (+activePrice * qty)
            var subtotalregukarprice = +subtotal_regular + (+regularPrice * qty)
        }
    }



    var old_qty = 0;
    if (document.querySelector('.inc_header_item_count_title_text') != null) {
        var old_qty = document.querySelector('.inc_header_item_count_title_text').innerText.split('Items')[0].split('Item')[0].replace('(', '').trim()
    }
    if (sbCartBlock != null) {
        sbCartBlock.insertBefore(productBlock, sbCartBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductBlock")));
    }
    if (elHeaderItemCountFigureText != undefined) {
        elHeaderItemCountFigureText.style.display = "none";
    }
    var p_type_details = document.createElement('div');
    if (type_bundle == "collection") {
        p_type_details.innerText = "Add to collection"
    } else {
        p_type_details.innerText = "Add to delivery"
    }
    p_type_details.classList.add('p_type_details')
    p_type_details.setAttribute('style', 'display:block;width:100%')
    productBlock.querySelector('.inc_cart_added_product_desc_block').appendChild(p_type_details)
    if (document.querySelector('.inc_cart_added_product_block[type_bundle="' + type_bundle + '"][id="' + productObj.id + '"]') == null) {
        sbCartBlock.insertBefore(productBlock, sbCartBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductBlock")));
    }
    sbCartBlock.style.justifyContent = "flex-start"
    elHeaderItemCountFigureText.style.display = "none";
    if (sidebarHeaderItemCountTitleText != undefined) {
        if (client_add_btn == "client_add_btn") {

            sidebarHeaderItemCountTitleText.innerHTML = "1 Item  <small>|</small>  "
        } else {
            sidebarHeaderItemCountTitleText.innerHTML = (parseInt(old_qty) + 1) + " Item(s)  <small>|</small>  ";
        }
    }

    if (sbCartBlock != null) {
        if (sbCartBlock.querySelectorAll(getSelectorClassName(classNames, "sidebarCartAddedProductBlock")).length > 2) {
            getViewElement("sidebarCartAddedRightBtnBlock").style.visibility = "visible";
            getViewElement("sidebarCartAddedLeftBtnBlock").style.visibility = "visible";
        }
    }
    elHeadersubtotalactivetext.setAttribute('subtotalactiveprice', subtotalactiveprice)
    elHeadersubtotalregulartext.setAttribute('subtotalregularprice', subtotalregukarprice)
    elHeadersubtotalactivetext.parentNode.parentNode.parentNode.classList.remove('inc_special_price')
    if (+subtotalactiveprice != null && (+subtotalactiveprice < +subtotalregukarprice)) {
        elHeadersubtotalactivetext.parentNode.parentNode.parentNode.classList.add('inc_special_price')
        elHeadersubtotalactivetext.innerHTML = "<span class='now_was'>Now</span> <span class='price'>" + INC.clientConfig.currencySymbol + formatter.format(subtotalactiveprice) + "</span> "
        elHeadersubtotalregulartext.innerHTML = "<span class='now_was'>Was</span> <span class='price'>" + INC.clientConfig.currencySymbol + formatter.format(subtotalregukarprice) + "</span> ";
        // elHeadersubtotalactivetext.style.color="#ee1c31"
    } else {
        // elHeadersubtotalactivetext.style.color="#000"
        elHeadersubtotalactivetext.innerHTML = "<span class='price'>" + INC.clientConfig.currencySymbol + formatter.format(subtotalactiveprice) + "</span> ";
        elHeadersubtotalregulartext.innerHTML = ""
    }
    if (window.innerWidth > 767) {
        if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 6) {
            document.querySelector('.inc_sidebar_cart_added_block').classList.add('flex-start')
        }
    } else {
        if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 3) {
            document.querySelector('.inc_sidebar_cart_added_block').classList.add('flex-start')
        }
    }
    if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 7) {
        document.querySelector('.inc_sidebar_cart_added_block').classList.add('more_than_seven')
    }
}
INC.methods.createAMBlock = function(ticket) {

    if (INC.dataStore.dataStoreObj.undefined == undefined) {
        var classNames = INC.uiConfig.am.className;
        var amBlock = this.getElementChilds("afModalBlock", "am");
        var getSelectorClassName = INC.methods.getSelectorClassName;

        if (INC.config.pageType == "productList") {
            amBlock.classList.add('inc_best_sellers')
            amBlock.setAttribute('id', 'inc_best_sellers')
        } else {

        }

        function getViewElement(className) {
            return amBlock.querySelector(getSelectorClassName(classNames, className));
        }
        getViewElement("afProductListBlock").innerHTML = "";

        var elAmTitleText = getViewElement("afModalTitleText");


        document.querySelector('body').classList.add('inc_cart_container');

        var productListObj = INC.dataStore.dataStoreObj;
        var productListArray = Object.keys(productListObj);

        var amProductListBlock = getViewElement("afProductListBlock");

        var productIds = [];
        Array.prototype.forEach.call(document.querySelectorAll('.checkout-items .item-wrapper .item .item-title'), function(elProductCode) {
            productIds.push(elProductCode.querySelectorAll('span')[0].innerText.split(':')[1].trim());

        });
        var bundleProductsArray = INC.dataStore.bundleProductsArray;

        bundleProductsArray.forEach(function(mainProductId) {
            if (productIds.indexOf(mainProductId) == -1) {
                var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({
                    mainId: mainProductId
                });
                amProductListBlock.appendChild(INC.methods.createProductModuleBlock(firstProductObjByMainId.id, "am", false, amBlock));
                if (INC.config.pageType == "productList") {
                    elAmTitleText.innerText = "Best Sellers";
                } else {
                    elAmTitleText.innerText = "Other Customers Also Bought";
                }
            }
        });


        var amProductBlocks = amBlock.querySelectorAll(getSelectorClassName(classNames, "productBlock"));
        Array.prototype.forEach.call(amProductBlocks, function(productBlock) {
            productBlock.querySelector(getSelectorClassName(classNames, "productAddBlock")).addEventListener("click", function(e) {
                var productBlockNode = this.parentNode.parentNode;
                if (this.parentNode.parentNode.className == "inc_product_desc_block") {
                    productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode
                }
                var sku = productBlockNode.getAttribute('data-sku');
                var findObj = new INC.classes.FindObj({
                    id: sku
                });
                var qty = productBlockNode.querySelector('input').value;

                var add_btn = productBlockNode.querySelector('.inc_product_desc_add_text')
                var add_btn_click = productBlockNode.querySelector(getSelectorClassName(classNames, "productAddText"));
                var add_prod_im = productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImg"));
                if (productBlockNode.querySelector('.img_color_swatch') != null) {
                    if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.active') != null) {
                        if (document.querySelector('.inc_product_modal_block.active') != null) {
                            document.querySelector('.inc_product_modal_block.active .inc_product_header_img').click()
                            productBlockNode.querySelector('.inc_product_desc_add_text').innerText = "Adding.."
                        }
                        INC.methods.addProductToCart(findObj, qty, "am", productBlockNode, add_btn_click, add_prod_im, add_btn, "delivery");
                    } else {
                        productBlockNode.querySelector('.img_color_swatch').click()
                    }
                } else if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.avail') != null) {
                    if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.avail.active') != null) {
                        if (document.querySelector('.inc_product_modal_block.active') != null) {
                            document.querySelector('.inc_product_modal_block.active .inc_product_header_img').click()
                            productBlockNode.querySelector('.inc_product_desc_add_text').innerText = "Adding.."
                        }
                        INC.methods.addProductToCart(findObj, qty, "am", productBlockNode, add_btn_click, add_prod_im, add_btn, "delivery");
                    }
                } else {
                    if (document.querySelector('.inc_product_modal_block.active') != null) {
                        document.querySelector('.inc_product_modal_block.active .inc_product_header_img').click()
                        productBlockNode.querySelector('.inc_product_desc_add_text').innerText = "Adding.."
                    }
                    INC.methods.addProductToCart(findObj, qty, "am", productBlockNode, add_btn_click, add_prod_im, add_btn, "delivery");
                }
            });
        });
        Array.prototype.forEach.call(amProductBlocks, function(productBlock) {
            productBlock.querySelector(getSelectorClassName(classNames, "productAddBlockclickcollect")).addEventListener("click", function(e) {

                var productBlockNode = this.parentNode.parentNode;
                if (this.parentNode.parentNode.className == "inc_product_desc_block") {
                    productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode
                }
                var sku = productBlockNode.getAttribute('data-sku');
                var findObj = new INC.classes.FindObj({
                    id: sku
                });
                var qty = productBlockNode.querySelector('input').value;
                if (qty == undefined || qty == "") {
                    qty = 1
                }
                var add_btn = productBlockNode.querySelector('.inc_product_desc_add_text')
                var add_btn_click = productBlockNode.querySelector(getSelectorClassName(classNames, "productAddText"));
                var add_prod_im = productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImg"));
                if (productBlockNode.querySelector('.img_color_swatch') != null) {
                    if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.active') != null) {
                        if (document.querySelector('.inc_product_modal_block.active') != null) {
                            document.querySelector('.inc_product_modal_block.active .inc_product_header_img').click()
                            productBlockNode.querySelector('.inc_product_desc_add_text').innerText = "Adding.."
                        }
                        INC.methods.addProductToCart(findObj, qty, "am", productBlockNode, add_btn_click, add_prod_im, add_btn, "collection");
                    } else {
                        productBlockNode.querySelector('.img_color_swatch').click()
                    }
                } else if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.avail') != null) {
                    if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.avail.active') != null) {
                        if (document.querySelector('.inc_product_modal_block.active') != null) {
                            document.querySelector('.inc_product_modal_block.active .inc_product_header_img').click()
                            productBlockNode.querySelector('.inc_product_desc_add_text').innerText = "Adding.."
                        }
                        INC.methods.addProductToCart(findObj, qty, "am", productBlockNode, add_btn_click, add_prod_im, add_btn, "collection");
                    }
                } else {
                    if (document.querySelector('.inc_product_modal_block.active') != null) {
                        document.querySelector('.inc_product_modal_block.active .inc_product_header_img').click()
                        productBlockNode.querySelector('.inc_product_desc_add_text_click_collect').innerText = "Adding.."
                    }
                    INC.methods.addProductToCart(findObj, qty, "am", productBlockNode, add_btn_click, add_prod_im, add_btn, "collection");
                }
            });
        });
        INC.methods.clear();

        if (INC.config.pageType == "productList") {
            var elAMPosition2 = document.querySelectorAll('.pagination.clearfix')[2];
            var elAMPosition = document.querySelector('.category-description');
            var elAMPositionMain = document.querySelector('#maincontent');
            var elAMPosition3 = document.querySelector('.newsletter-wrapper');
            amBlock.setAttribute('style','margin: auto;')
            if(elAMPositionMain != null){
                elAMPositionMain.appendChild(amBlock);
            }else if (elAMPosition2 != null) {
                elAMPosition2.appendChild(amBlock);
            } else if (elAMPosition3 != null) {
                elAMPosition3.appendChild(amBlock);
            }

        } else {
            if (window.innerWidth > 960) {
                if (window.innerWidth > 1367) {
                    var elAMPosition = document.querySelector('#maincontent');
                    elAMPosition.appendChild(amBlock);
                } else {
                    var elAMPosition = document.querySelector('main#maincontent .column');
                    elAMPosition.appendChild(amBlock);
                }

            } else {
                var elAMPosition = document.querySelector('.cart-summary') || document.querySelector('.rewards');

                elAMPosition.appendChild(amBlock);
            }
        }




        var prd_length = 5
        if (document.querySelector('.inc_af_block.ticket_modal.cart_modal_active') != null) {
            prd_length = 4
        }

        amBlock.querySelector(getSelectorClassName(classNames, "afRightBtnBlock")).style.visibility = "hidden";
        amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).style.visibility = "hidden";


        var productBlocks = amProductListBlock.querySelectorAll(getSelectorClassName(classNames, "productModuleBlock"));
        var sliderBtnCounter = 0;

        if (productBlocks.length > prd_length) {
            amBlock.querySelector(getSelectorClassName(classNames, "afRightBtnBlock")).style.visibility = "visible";
            amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).style.visibility = "visible";
            amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");

            amBlock.querySelector(getSelectorClassName(classNames, "afRightBtnImg")).style.visibility = "visible";
            amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnImg")).style.visibility = "visible";
            amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnImg")).setAttribute("style", "pointer-events: none;opacity:0.5");
        }
        if (document.querySelector('#inc_best_sellers') != null) {
            amBlock.querySelector(getSelectorClassName(classNames, "afRightBtnBlock")).addEventListener("click", function() {
                sliderBtnCounter++;
                if (sliderBtnCounter > productBlocks.length - prd_length) {
                    sliderBtnCounter--;
                }
                var all_p_length = document.querySelectorAll('.inc_af_product-list_block .inc_product_module_block').length
                // productBlocks[sliderBtnCounter - 1].style.display = "none";
                var cc_ount = 1;
                if (window.innerWidth > 1239) {
                    cc_ount = prd_length
                }
                var wid_sld = 232
                if (INC.config.pageType == "productList") {
                    var wid_sld = 314 * 3
                    if (window.innerWidth > 1367) {
                        wid_sld = 291 * 3
                    } else if (window.innerWidth > 1279) {
                        wid_sld = 289 * 3
                    } else if (window.innerWidth > 1139) {
                        wid_sld = 261 * 3
                    } else if (window.innerWidth > 997) {
                        wid_sld = 255 * 3
                    } else {
                        wid_sld = 252
                    }
                }


                if (+INC.clientConfig.slidevalue + +cc_ount < all_p_length) {
                    amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).setAttribute("style", "pointer-events: auto;opacity:1");
                    amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afLeftBtnImg")).setAttribute("style", "pointer-events: auto;opacity:1");
                    INC.clientConfig.slidevalue++
                    INC.clientConfig.slidevalue = INC.clientConfig.slidevalue + 2
                    INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) - wid_sld) + 'px';
                    var menu = amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afProductListBlock"));
                    menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                }

                if (+INC.clientConfig.slidevalue + +cc_ount >= all_p_length) {
                    amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afRightBtnBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");
                    amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afRightBtnImg")).setAttribute("style", "pointer-events: none;opacity:0.5");
                }
            });

            amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).addEventListener("click", function() {
                sliderBtnCounter--;
                if (sliderBtnCounter == -1) sliderBtnCounter = 0;
                // productBlocks[sliderBtnCounter].style.display = "flex";
                var all_p_length = document.querySelectorAll('.inc_af_product-list_block .inc_product_module_block').length
                var wid_sld = 232
                if (INC.config.pageType == "productList") {
                    var wid_sld = 314 * 3
                    if (window.innerWidth > 1367) {
                        wid_sld = 291 * 3
                    } else if (window.innerWidth > 1279) {
                        wid_sld = 289 * 3
                    } else if (window.innerWidth > 1139) {
                        wid_sld = 261 * 3
                    } else if (window.innerWidth > 997) {
                        wid_sld = 255 * 3
                    } else {
                        wid_sld = 252
                    }
                }


                if (INC.clientConfig.slidevalue == -1) INC.clientConfig.slidevalue = 0;
                if (INC.clientConfig.slidevalue > 0) {
                    amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afRightBtnBlock")).setAttribute("style", "pointer-events: auto;opacity:1");
                    amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afRightBtnImg")).setAttribute("style", "pointer-events: auto;opacity:1");
                    INC.clientConfig.slidevalue--
                    INC.clientConfig.slidevalue = INC.clientConfig.slidevalue - 2
                    INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) + wid_sld) + 'px';
                    var menu = amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afProductListBlock"));
                    menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                }
                if (INC.clientConfig.slidevalue == 0) {
                    amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");
                    amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afLeftBtnImg")).setAttribute("style", "pointer-events: none;opacity:0.5");
                }
            });
        } else {
            amBlock.querySelector(getSelectorClassName(classNames, "afRightBtnBlock")).addEventListener("click", function() {
                sliderBtnCounter++;
                if (sliderBtnCounter > productBlocks.length - prd_length) {
                    sliderBtnCounter--;
                }
                var all_p_length = document.querySelectorAll('.inc_af_product-list_block .inc_product_module_block').length
                // productBlocks[sliderBtnCounter - 1].style.display = "none";
                var cc_ount = 1;
                if (window.innerWidth > 1239) {
                    cc_ount = prd_length
                }
                var wid_sld = 232
                if (INC.config.pageType == "productList") {
                    var wid_sld = 314
                    if (window.innerWidth < 1280) {
                        var wid_sld = document.querySelector('.inc_product_block').clientWidth
                        if (window.innerWidth < 1140) {
                            wid_sld = wid_sld
                        } else {
                            wid_sld = wid_sld + 10
                        }
                    }
                }

                if (+INC.clientConfig.slidevalue + +cc_ount < all_p_length) {
                    amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).setAttribute("style", "pointer-events: auto;opacity:1");
                    amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afLeftBtnImg")).setAttribute("style", "pointer-events: auto;opacity:1");
                    INC.clientConfig.slidevalue++
                    INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) - wid_sld) + 'px';
                    var menu = amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afProductListBlock"));
                    menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                }

                if (+INC.clientConfig.slidevalue + +cc_ount == all_p_length) {
                    amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afRightBtnBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");
                    amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afRightBtnImg")).setAttribute("style", "pointer-events: none;opacity:0.5");
                }
            });

            amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).addEventListener("click", function() {
                sliderBtnCounter--;
                if (sliderBtnCounter == -1) sliderBtnCounter = 0;
                // productBlocks[sliderBtnCounter].style.display = "flex";
                var all_p_length = document.querySelectorAll('.inc_af_product-list_block .inc_product_module_block').length
                var wid_sld = 232
                if (INC.config.pageType == "productList") {
                    var wid_sld = 314
                    if (window.innerWidth < 1280) {
                        var wid_sld = document.querySelector('.inc_product_block').clientWidth
                        if (window.innerWidth < 1140) {
                            wid_sld = wid_sld
                        } else {
                            wid_sld = wid_sld + 10
                        }
                    }
                }
                if (INC.clientConfig.slidevalue == -1) INC.clientConfig.slidevalue = 0;
                if (INC.clientConfig.slidevalue > 0) {
                    amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afRightBtnBlock")).setAttribute("style", "pointer-events: auto;opacity:1");
                    amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afRightBtnImg")).setAttribute("style", "pointer-events: auto;opacity:1");
                    INC.clientConfig.slidevalue--
                    INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) + wid_sld) + 'px';
                    var menu = amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afProductListBlock"));
                    menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                }
                if (INC.clientConfig.slidevalue == 0) {
                    amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");
                    amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afLeftBtnImg")).setAttribute("style", "pointer-events: none;opacity:0.5");
                }
            });
        }


        setTimeout(function() {
            if (document.querySelector('.inc_af_title_block') != null) {
                document.querySelector('.inc_af_title_block').setAttribute('role', "contentinfo")
            }
            setTimeout(function() {
                onloadpdp = true
            }, 400)
        }, 100)
    }

}
INC.methods.createPDPBlock = function(sidebar) {

    var empty_sidebarflag = false
    if(INC.dataStore.dataStoreObj != undefined){
        if (INC.dataStore.dataStoreObj[INC.config.Product_id] != undefined) {
            if (INC.dataStore.dataStoreObj[INC.config.Product_id][INC.config.Product_id] != undefined) {
                if (INC.dataStore.dataStoreObj[INC.config.Product_id][INC.config.Product_id].bundleId == "12345679") {
                    empty_sidebarflag = true
                }
            }
        }
    }
    if (sidebar != "sidebar") {
        if (INC.dataStore.dataStoreObj.undefined != undefined || empty_sidebarflag == false) {
            var classNames = INC.uiConfig.pdp.className;
            var pdpBlock = this.getElementChilds("pdpModalBlock", "pdp");
            if (document.querySelector('#product-addtocart-button[title="Out Of Stock"]') != null) {
                pdpBlock.style.display = "none";
            }
            // pdpBlock.setAttribute('role','main')
            var getSelectorClassName = INC.methods.getSelectorClassName;
            Array.prototype.forEach.call(pdpBlock.querySelectorAll(getSelectorClassName(classNames, "productBlock")), function(block) {
                block.parentNode.removeChild(block);
            });

            function getViewElement(className) {
                return pdpBlock.querySelector(getSelectorClassName(classNames, className));
            }

            var modalTitle = getViewElement("pdpModalTitleText");
            modalTitle.innerText = "Frequently Bought Together";


            var productListObj = INC.dataStore.dataStoreObj;
            // var pdpProductId = INC.dataStore.pdpProductId;
            var pdpProductId = INC.dataStore.methods().getFirstProductObjByMainId({
                mainId: INC.dataStore.pdpProductId
            }).id;

            var mainProductBlock = this.createProductModuleBlock(pdpProductId, "pdp", false, pdpBlock);
            var bundleProductsArray = INC.dataStore.bundleProductsArray;
            var elPdpMainProductBlock = getViewElement("pdpModalMainProductBlock");
            elPdpMainProductBlock.innerHTML = "";
            elPdpMainProductBlock.appendChild(mainProductBlock);
            var mainProductHeader = getViewElement("productHeaderTitleText");
            if (window.innerWidth > 767) {
                mainProductHeader.innerText = "This Item";
            } else {
                mainProductHeader.innerText = "This Item"
            }

            var pdpBundleProductListMainBlock = getViewElement("pdpBundleProductListMainBlock");
            pdpBundleProductListMainBlock.innerHTML = "";

            var pdpBundleProductListItemsBlock = getViewElement("pdpBundleProductListItemsBlock");
            pdpBundleProductListItemsBlock.innerHTML = "";

            var productVisibleCount = (bundleProductsArray.length > 5) ? 5 : bundleProductsArray.length;

            for (var i = 0; i < productVisibleCount; i++) {
                var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({
                    mainId: bundleProductsArray[i]
                });
                var productBlock = this.createProductModuleBlock(firstProductObjByMainId.id, "pdp", true, pdpBlock);
                if (INC.config.deviceType == "mobile") productBlock.style.display = "none";
                pdpBundleProductListMainBlock.appendChild(productBlock);

                if (INC.config.deviceType == "mobile") {

                }
                var productListItemBlock = this.createProductListItemBlock(firstProductObjByMainId, "pdp");
                pdpBundleProductListItemsBlock.appendChild(productListItemBlock);
                var item_title_head = productBlock.querySelector('.inc_product_desc_title_text_header')
                item_title_head.innerHTML = "Frequently Bought With"
            }

            pdpBlock.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock")).classList.add("active");
            pdpBundleProductListMainBlock.querySelector(getSelectorClassName(classNames, "productModuleBlock")).style.display = "block";

            var pdpBundleCartBlock = this.createPDPBundleCartBlock();
            var rpdpBundleCartBlock = pdpBlock.querySelector(getSelectorClassName(classNames, "pdpModalBundleCartBlock"));
            rpdpBundleCartBlock.parentNode.removeChild(rpdpBundleCartBlock);
            pdpBlock.querySelector(getSelectorClassName(classNames, "pdpModalBundleBlock")).appendChild(pdpBundleCartBlock);


            INC.methods.clear();


            var pdpBlockSibling = document.querySelector('.product-info')
            pdpBlockSibling.parentNode.insertBefore(pdpBlock, pdpBlockSibling);

            var elProductAddBlock = document.querySelectorAll(getSelectorClassName(classNames, "productAddBlock"));



            var productBlocks = getViewElement("pdpBundleProductListBlock").querySelectorAll(getSelectorClassName(classNames, "productModuleBlock"));
            var show_more_less_block = getViewElement("pdpBundleProductListItemsBlockShowMoreLess")
            var show_more_less_text = getViewElement("pdpBundleProductListItemsBlockShowMoreLessText");
            show_more_less_text.innerHTML = "Show more products";
            show_more_less_text.classList.add('down_wrrow');

            if (document.querySelector('.inc_pdp_product-main_block .inc_product_desc_title_text_header') != null) {
                if (window.innerWidth > 767) {
                    document.querySelector('.inc_pdp_product-main_block .inc_product_desc_title_text_header').innerHTML = "This item"
                } else {
                    document.querySelector('.inc_pdp_product-main_block .inc_product_desc_title_text_header').innerHTML = "This item"
                }
            }
            getViewElement("pdpBundleProductListItemsBlockShowMoreLess").addEventListener("click", function(ev) {
                var show_more_less_text = getViewElement("pdpBundleProductListItemsBlockShowMoreLessText");
                var clickshowmore = ev.target.querySelector('.inc_pdp_bundle_product_list_items_show_more_less_text')
                if (clickshowmore == null) {
                    clickshowmore = ev.target
                }
                if (clickshowmore.classList.contains('down_wrrow') == true) {
                    show_more_less_text.innerHTML = "Show less products";
                    show_more_less_text.classList.remove('down_wrrow');
                    show_more_less_text.classList.add('up_wrrow');
                    document.querySelector('.inc_pdp_bundle_product_list_items_block').classList.add('active');
                } else {
                    show_more_less_text.innerHTML = "Show more products";
                    show_more_less_text.classList.remove('up_wrrow');
                    show_more_less_text.classList.add('down_wrrow');
                    document.querySelector('.inc_pdp_bundle_product_list_items_block').classList.remove('active');
                }
            });
            getViewElement("pdpBundleProductLeftBtnBlock").setAttribute("style", "pointer-events: none;opacity:0.5");
            if (isIE()) {
                getViewElement("pdpBundleProductLeftBtnImg").setAttribute("style", "opacity:0.5");
            }
            var sliderBtnCounter = 0;
            if (INC.debug) console.log("pdp product blocks count:" + productBlocks.length);
            var lengthCount = productBlocks.length + 1;
            if (productBlocks.length >= 3) {
                getViewElement("pdpBundleProductRightBtnBlock").addEventListener("click", function() {
                    var prod_c = 1;
                    var width_prod = 249;
                    if (window.innerWidth > 1139) {
                        prod_c = 2
                        width_prod = 251;
                    }

                    if (INC.clientConfig.slidevalue + prod_c < productBlocks.length) {
                        getViewElement("pdpBundleProductLeftBtnBlock").setAttribute("style", "pointer-events: auto;opacity:1");
                        if (isIE()) {
                            getViewElement("pdpBundleProductLeftBtnImg").setAttribute("style", "opacity:1");
                        }
                        INC.clientConfig.slidevalue++
                        INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) - width_prod) + 'px';
                        var menu = getViewElement("pdpBundleProductListMainBlock");
                        menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                    }
                    if (INC.clientConfig.slidevalue + prod_c == productBlocks.length) {
                        getViewElement("pdpBundleProductRightBtnBlock").setAttribute("style", "pointer-events: none;opacity:0.5");
                        if (isIE()) {
                            getViewElement("pdpBundleProductRightBtnImg").setAttribute("style", "opacity:0.5");
                        }
                    }
                    sliderBtnCounter++;

                    if (sliderBtnCounter > lengthCount - 3) {
                        sliderBtnCounter--;
                    }
                    if (INC.debug) console.log(sliderBtnCounter);
                    if (INC.debug) console.log("pdp product blocks count:" + productBlocks.length);
                });

                getViewElement("pdpBundleProductLeftBtnBlock").addEventListener("click", function() {
                    var prod_c = 1;
                    var width_prod = 249;
                    if (window.innerWidth > 1139) {
                        prod_c = 2
                        width_prod = 251;
                    }
                    if (INC.clientConfig.slidevalue == -1) INC.clientConfig.slidevalue = 0;
                    if (INC.clientConfig.slidevalue > 0) {
                        getViewElement("pdpBundleProductRightBtnBlock").setAttribute("style", "pointer-events: auto;opacity:1");
                        if (isIE()) {
                            getViewElement("pdpBundleProductRightBtnImg").setAttribute("style", "opacity:1");
                        }
                        INC.clientConfig.slidevalue--
                        INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) + width_prod) + 'px';
                        var menu = getViewElement("pdpBundleProductListMainBlock");
                        menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                    }
                    if (INC.clientConfig.slidevalue == 0) {
                        getViewElement("pdpBundleProductLeftBtnBlock").setAttribute("style", "pointer-events: none;opacity:0.5");
                        if (isIE()) {
                            getViewElement("pdpBundleProductLeftBtnImg").setAttribute("style", "opacity:0.5");
                        }
                    }
                    sliderBtnCounter--;
                    if (sliderBtnCounter == -1) sliderBtnCounter = 0;
                    if (INC.debug) console.log(sliderBtnCounter);
                });
            }

            if (!(productBlocks.length >= 3)) {
                if (INC.debug) console.log(productBlocks.length);
                getViewElement("pdpBundleProductRightBtnBlock").style.visibility = "hidden";
                getViewElement("pdpBundleProductLeftBtnBlock").style.visibility = "hidden";
            }

            setTimeout(function() {

                for (var i = 0; i < 8; i++) {
                    if (typeof(elProductAddBlock[i]) != "undefined" && i % 2 != 0) {
                        var productBlockNode = elProductAddBlock[i].parentNode.parentNode.parentNode.parentNode.parentNode;
                        if (window.innerWidth > 1139) {
                            if (i == 1 || i == 3 || i == 5) {
                                var module_block = elProductAddBlock[i].parentNode.parentNode.parentNode.parentNode.parentNode;
                                if (module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_color_list_item_img') != null) {
                                    module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_color_list_item_img').click()
                                }
                                if (module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_size_list_item_img') != null) {
                                    module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_size_list_item_img').click()
                                }
                                elProductAddBlock[i].click();
                            }
                        } else if (i == 1 || i == 3) {
                            var module_block = elProductAddBlock[i].parentNode.parentNode.parentNode.parentNode.parentNode;
                            if (module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_color_list_item_img') != null) {
                                module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_color_list_item_img').click()
                            }
                            if (module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_size_list_item_img') != null) {
                                module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_size_list_item_img').click()
                            }
                            elProductAddBlock[i].click();

                        }

                    }
                }
            }, 100)
            setTimeout(function() {

                var client_var = ""
                if (document.querySelector('.swatches .selectable.selected a') != null) {
                    var client_var = document.querySelector('.swatches .selectable.selected a').innerText.trim().toLocaleLowerCase()
                    client_var = client_var
                }
                var prod_id = productBlock.getAttribute('data-main_id');
                if (document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + client_var + '"] div') != undefined) {
                    document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + client_var + '"] div').click()
                } else if (document.querySelector('.inc_product_modal_block .inc_product_desc_att_size_list_item_img_block[datasize="' + client_var + '"] div') != null) {
                    document.querySelector('.inc_product_modal_block .inc_product_desc_att_size_list_item_img_block[datasize="' + client_var + '"] div').click()
                } else {
                    if (INC.methods.getProductIdFromWebPage() == prod_id) {
                        if (elAttColorListBlock.querySelector(getSelectorClassName(classNames, "productAttColorListItemImgBlock")) != null) {
                            elAttColorListBlock.querySelector(getSelectorClassName(classNames, "productAttColorListItemImgBlock")).click();
                        }
                    } else if (document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_color_list_item_img a') != null) {
                        if (document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_color_list_item_block.active') == null) {
                            document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_color_list_item_img a').click()
                        }
                    }
                }
                setTimeout(function() {
                    onloadpdp = true
                }, 400)
            }, 300)
            
        }
    }

    if (sidebar == "sidebar") {
        if(INC.dataStore.dataStoreObj != undefined){
            this.createSidebarBlock();
        }
    }

    // this.trackingEvents("productPageVisit", { "product_id": INC.dataStore.pdpProductId });
    // this.trackingEvents("catalogProductView", { "product_id": INC.dataStore.pdpProductId });
}

INC.methods.createPDPBundleCartBlock = function() {
    var classNames = INC.uiConfig.pdp.className;
    var pdpBundleCartBlock = this.getElementChilds("pdpModalBundleCartBlock", "pdp");
    var getSelectorClassName = INC.methods.getSelectorClassName;

    function getViewElement(className) {
        return pdpBundleCartBlock.querySelector(getSelectorClassName(classNames, className));
    }


    var elBundleCartTitleBlock = getViewElement("pdpBundleCartTitleBlock");
    var elBundleCartTitleText = getViewElement("pdpBundleCartTitleText");
    var elBundleCartAddedBlock = getViewElement("pdpBundleCartAddedBlock");
    var elBundleCartSummaryViewBlock = getViewElement("pdpBundleCartSummaryViewBlock");
    var elBundleCartSummaryViewBtnText = getViewElement("pdpBundleCartSummaryViewBtnText");
    var elBundleCartAddBtnBlock = getViewElement("pdpBundleCartSummaryAddBtnBlock");
    var elBundleCartCollectionBtnBlock = getViewElement("pdpBundleCartSummaryCollectionBtnBlock");
    // var elBundleCartAddBtnOverlay = getViewElement("pdpModalBundleCartOverlay");

    if (window.innerWidth > 768) {
        elBundleCartTitleText.innerText = "Price Summary";
    }
    // else{
    //     elBundleCartTitleText.innerText = "Item(s) Added";
    //     elBundleCartTitleText.setAttribute('style','text-transform: none;')
    // }

    var elBundleCartTitleImgBlock = getViewElement("pdpBundleCartTitleImgBlock");
    elBundleCartTitleImgBlock.addEventListener('click', function() {
        elBundleCartTitleBlock.classList.toggle('active');
        elBundleCartAddedBlock.classList.toggle('active');
        elBundleCartSummaryViewBlock.classList.toggle('active');
        pdpBundleCartBlock.classList.toggle('active');
        document.querySelector('body').classList.toggle('inc_mobile_overlay');
        document.querySelector('.inc_pdp_bundle_cart_overlay_block').classList.toggle('active');
    });

    elBundleCartSummaryViewBtnText.innerText = "items added";
    elBundleCartSummaryViewBlock.addEventListener('click', function() {
        // if (INC.debug) console.log("ok");
        //   document.querySelector('body').classList.toggle('inc_mobile_overlay');
        elBundleCartTitleBlock.classList.toggle('active');
        elBundleCartAddedBlock.classList.toggle('active');
        elBundleCartSummaryViewBlock.classList.toggle('active');
        pdpBundleCartBlock.classList.toggle('active');
        document.querySelector('.inc_pdp_bundle_cart_overlay_block').classList.toggle('active');
    });

    elBundleCartAddBtnBlock.addEventListener("click", function(e) {
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
        document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
        if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3) {
            document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
            if (isIE()) {
                document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
            }
            document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
            if (isIE()) {
                document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
            }
        }

        var btn_cart = e.target
        btn_cart.parentNode.parentNode.classList.add('inc_loading')
        INC.methods.addBundleToCart(btn_cart, "delivery");
    });
    elBundleCartCollectionBtnBlock.addEventListener("click", function(e) {
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
        document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
        if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3) {
            document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
            if (isIE()) {
                document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
            }
            document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
            if (isIE()) {
                document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
            }
        }

        var btn_cart = e.target
        btn_cart.parentNode.parentNode.classList.add('inc_loading')
        INC.methods.addBundleToCart(btn_cart, "collection");
    });


    return pdpBundleCartBlock;
}
INC.methods.createSidebarBlock = function() {
    var dataStore = INC.dataStore;
    var classNames = INC.uiConfig.sidebar.className;
    var sbBlock = this.getElementChilds("sidebarModalBlock", "sidebar");
    var getSelectorClassName = INC.methods.getSelectorClassName;

    function getViewElement(className) {
        return sbBlock.querySelector(getSelectorClassName(classNames, className));
    }
    getViewElement("sidebarCartAddedListBlock").innerHTML = "";

    var elHeaderContinueText = getViewElement("sidebarHeaderContinueText");
    var elHeaderTitleText = getViewElement("sidebarHeaderTitleText");
    var elHeaderItemCountBlock = getViewElement("sidebarHeaderItemCountBlock");
    var elHeaderItemCountTitleText = getViewElement("sidebarHeaderItemCountTitleText");
    var elHeaderItemCountFigureText = getViewElement("sidebarHeaderItemCountFigureText");
    var elRecommendedTitleText = getViewElement("sidebarRecommendedTitleText");
    var elRecommendedTabsListBlock = getViewElement("sidebarRecommendedTabsListBlock");
    var elRecommendedProductsBlock = getViewElement("sidebarRecommendedProductsBlock");
    var elRecommendedProductsListBlock = getViewElement("sidebarRecommendedProductsListBlock");
    var elCheckoutContinueBtnText = getViewElement("sidebarCheckoutContinueBtnText");
    var elCheckoutBasketBtnText = getViewElement("sidebarCheckoutBasketBtnText");
    var elheaditemblock = getViewElement("sidebarHeaderItemBlock");
    var elheadtitleblock = getViewElement("sidebarHeaderTitleBlock");
    var elrectitleblock = getViewElement("sidebarRecommendedTitleBlock");
    var elcheckoutblock = getViewElement("sidebarCheckoutBlock");
    var elrecblock = getViewElement("sidebarRecommendedTabsBlock");
    var elcardaddelist = getViewElement("sidebarRecommendedProductsListBlock")
    var eladedblk = getViewElement("sidebarCartAddedListBlock")

    elheaditemblock.setAttribute('role', "banner")
    elrectitleblock.setAttribute('role', "banner")
    elheadtitleblock.setAttribute('role', "banner")
    elcheckoutblock.setAttribute('role', "contentinfo")
    elRecommendedProductsListBlock.setAttribute('role', "contentinfo")
    elRecommendedProductsListBlock.setAttribute('tabindex', 0)
    elrecblock.setAttribute('role', "contentinfo")
    eladedblk.setAttribute('role', "contentinfo")



    elHeaderContinueText.innerText = "Back";
    elHeaderTitleText.innerText = "Just added";
    if (Object.keys(dataStore.bundleCartProducts).length == 1) {
        elHeaderItemCountTitleText.innerText = Object.keys(dataStore.bundleCartProducts).length + " Item";
    } else {
        elHeaderItemCountTitleText.innerText = Object.keys(dataStore.bundleCartProducts).length + " Items";
    }
    elRecommendedTitleText.innerText = "Other customers also bought";
    elCheckoutContinueBtnText.innerText = "Continue shopping";

    var elCheckoutLink = document.createElement('a');
    elCheckoutLink.href = INC.clientConfig.checkoutLink;
    var elCheckoutTextDiv = document.createElement('div');
    elCheckoutTextDiv.innerText = "View basket";
    elCheckoutLink.appendChild(elCheckoutTextDiv);
    elCheckoutBasketBtnText.appendChild(elCheckoutLink);


    elHeaderItemCountBlock.addEventListener("click", function() {
        // document.cookie = "openCartSlider=1; path=/";
        // window.location.href = INC.clientConfig.checkoutLink;
    });


    var productCategoriesArray = dataStore.methods().getUniqueCatergories();

    elRecommendedTabsListBlock.innerHTML = "";
    var category_count = 0
    productCategoriesArray.forEach(function(productCategory) {
        if (category_count < 5 && productCategory != undefined) {
            category_count++
            var sidebarTabsListItemBlock = INC.methods.getElementChilds("sidebarRecommendedTabsListItemBlock", "sidebar");
            var sidebarTabsListItemText = sidebarTabsListItemBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedTabsListItemText"));
            sidebarTabsListItemText.parentNode.parentNode.setAttribute('title', productCategory)
            if (INC.config.pageType != "productList") {
                sidebarTabsListItemText.innerHTML = productCategory.toLocaleLowerCase();
            }
            sidebarTabsListItemText.setAttribute('style', 'text-transform:capitalize;')
            sidebarTabsListItemBlock.addEventListener("click", function() {

                elRecommendedProductsBlock.innerHTML = "";
                elRecommendedProductsBlock.innerHTML = INC.methods.getElementChilds("sidebarRecommendedProductsBlock", "sidebar").innerHTML;
                var elRecommendedProductsListBlock = elRecommendedProductsBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsListBlock"));
                elRecommendedProductsListBlock.innerHTML = "";
                Array.prototype.forEach.call(elRecommendedTabsListBlock.querySelectorAll(getSelectorClassName(classNames, "sidebarRecommendedTabsListItemBlock")), function(elTabsItemBlock) {
                    elTabsItemBlock.classList.remove("active");
                });
                sidebarTabsListItemBlock.classList.add("active");
                INC.methods.updateSidebarProductsList(elRecommendedProductsListBlock, productCategory);

            });
            elRecommendedTabsListBlock.setAttribute('tabindex', 0)
            elRecommendedTabsListBlock.appendChild(sidebarTabsListItemBlock);
        }
    });
    if (elRecommendedTabsListBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedTabsListItemBlock")) != null) {
        elRecommendedTabsListBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedTabsListItemBlock")).click();
    } else {
        elRecommendedTitleText.style.display = "none";
    }


    getViewElement("sidebarHeaderContinueBlock").addEventListener("click", function() {
        document.querySelector('body').classList.remove('inc_overlay');
        INC.methods.hideSidebar();
        INC.config.pdpaddedProductList = []
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
    });

    getViewElement("sidebarCheckoutContinueBlock").addEventListener("click", function() {
        document.querySelector('body').classList.remove('inc_overlay');
        INC.clientConfig.offset = 0;
        INC.config.pdpaddedProductList = []
        INC.clientConfig.slidevalue = 0;
        INC.methods.hideSidebar();
    });

    getViewElement("sidebarCheckoutBasketBlock").addEventListener("click", function() {
        window.location.href = INC.clientConfig.checkoutLink;
    });

    var addedProductBlocks = "";
    var addedSliderBtnCounter = 0;

    getViewElement("sidebarCartAddedRightBtnBlock").addEventListener("click", function() {
        addedProductBlocks = getViewElement("sidebarCartAddedListBlock").querySelectorAll(getSelectorClassName(classNames, "sidebarCartAddedProductBlock"));
        if (INC.debug) console.log("right click");
        if (INC.debug) console.log(addedProductBlocks);
        if (INC.debug) console.log(getViewElement("sidebarCartAddedListBlock"));
        addedSliderBtnCounter++;
        if (addedSliderBtnCounter > addedProductBlocks.length - 2) {
            addedSliderBtnCounter--;
        }
        if (addedProductBlocks.length > 2) {
            addedProductBlocks[addedSliderBtnCounter - 1].style.display = "none";
        }
    });

    getViewElement("sidebarCartAddedLeftBtnBlock").addEventListener("click", function() {
        addedProductBlocks = getViewElement("sidebarCartAddedListBlock").querySelectorAll(getSelectorClassName(classNames, "sidebarCartAddedProductBlock"));
        if (INC.debug) console.log("left click");
        if (INC.debug) console.log(addedProductBlocks);
        addedSliderBtnCounter--;
        if (addedSliderBtnCounter == -1) addedSliderBtnCounter = 0;
        addedProductBlocks[addedSliderBtnCounter].style.display = "flex";
    });

    getViewElement("sidebarCartAddedRightBtnBlock").style.visibility = "hidden";
    getViewElement("sidebarCartAddedLeftBtnBlock").style.visibility = "hidden";
    getViewElement("sidebarCartAddedLeftBtnBlock").setAttribute("style", "pointer-events: none;opacity:0.5");

    var body = document.querySelector('body');

    var elSideBarOverlayBlock = document.createElement('div');
    elSideBarOverlayBlock.setAttribute("class", "inc_sidebar_overlay_block");
    elSideBarOverlayBlock.addEventListener("click", function() {
        document.querySelector('body').classList.remove('inc_overlay');
        INC.methods.hideSidebar();
        INC.config.pdpaddedProductList = []
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
    });
    elSideBarOverlayBlock.style.display = "none";
    body.appendChild(elSideBarOverlayBlock);
    body.appendChild(sbBlock);

    if (INC.dataStore.dataStoreObj.undefined != undefined) {
        if (document.querySelector('.inc_recommended_products_block') != null) {
            document.querySelector('.inc_recommended_products_block').style.display = "none"
        }
        if (document.querySelector('.s7staticimage img') != null && document.querySelector('.inc_cart_added_product_img') != null) {
            var p_img = document.querySelector('.s7staticimage img').src
            document.querySelector('.inc_cart_added_product_img').src = p_img
        }
    }
    setTimeout(function() {
        if (document.querySelector('.inc_recommended_products_list_block') != null) {
            document.querySelector('.inc_recommended_products_list_block').setAttribute('role', "contentinfo")
        }
    }, 100)

}
INC.methods.updateSidebarBlock = function(type_bundle) {
    var subtotalactiveprice = 0
    var subtotalregukarprice = 0
    var dataStore = INC.dataStore;
    var classNames = INC.uiConfig.sidebar.className;
    var getSelectorClassName = this.getSelectorClassName;
    var sbBlock = document.querySelector(getSelectorClassName(classNames, "sidebarModalBlock"));

    function getViewElement(className) {
        return sbBlock.querySelector(getSelectorClassName(classNames, className));
    }

    var sidebarHeaderItemCountTitleText = getViewElement("sidebarHeaderItemCountTitleText");
    var elHeaderItemCountFigureText = getViewElement("sidebarHeaderItemCountFigureText");
    var elHeadersubtotalactivetext = getViewElement("sidebarCartAddedProductDescSubTotalActiveText");
    var elHeadersubtotalregulartext = getViewElement("sidebarCartAddedProductDescSubTotalRegularText");
    var sbCartBlock = getViewElement("sidebarCartAddedListBlock");
    sbCartBlock.innerHTML = "";

    var bundleCartProductsArray = Object.keys(dataStore.bundleCartProducts);
    if (bundleCartProductsArray.length == 1) {
        sidebarHeaderItemCountTitleText.innerHTML = Object.keys(dataStore.bundleCartProducts).length + " Item  <small>|</small>  ";
    } else {
        sidebarHeaderItemCountTitleText.innerHTML = Object.keys(dataStore.bundleCartProducts).length + " Item(s)  <small>|</small>  ";
    }

    var headerItemCountFigureText = 0;
    var subtotalactiveprice = 0
    var subtotalregukarprice = 0
    bundleCartProductsArray.forEach(function(productSKU) {
        var findObj = new INC.classes.FindObj({
            sku: productSKU
        });
        var productObj = INC.dataStore.methods().getProductBySKU(findObj);
        var productBlock = INC.methods.getElementChilds("sidebarCartAddedProductBlock", "sidebar");
        var color = "";
        var size = "";
        var just_check_prod_block = document.querySelector('.inc_product_module_block[data-main_id="' + productObj.mainId + '"]')
        if (just_check_prod_block != null) {
            if (just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.active div') != null) {
                size = just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.active div').innerText
            }
            if (just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block') != null) {
                color = just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-color')
            }
        }
        productBlock.style.userSelect = "none";

        var elImg = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductImg"));
        var elTitleText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescTitleText"));
        var elPriceActiveText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceActiveText"));
        var elPriceRegularText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceRegularText"));
        var elAttColorText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescAttColorText"));
        var elAttsizeText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescAttSizeText"));
        var elImgTag = INC.methods.generateHTMLTags('img', {
            src: productObj.imageURL
        });
        if(onloadpdp == true){
            elImgTag.src = productObj.imageURL
        }
        elImgTag.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
        elImg.appendChild(elImgTag);
        elImgTag.setAttribute('alt', productObj.name)
        elTitleText.innerHTML = dataStore.bundleCartProducts[productSKU] + "<small>x</small>" + productObj.name;
        if (color != "") {
            elAttColorText.innerText = color;
        } else {
            elAttsizeText.innerText = size;
        }


        var activePrice = parseFloat(productObj.activePrice).toFixed(2);
        var regularPrice = parseFloat(productObj.regularPrice).toFixed(2);
        subtotalactiveprice = (+subtotalactiveprice + (+productObj.activePrice * dataStore.bundleCartProducts[productSKU]));
        subtotalregukarprice = (+subtotalregukarprice + (+productObj.regularPrice * dataStore.bundleCartProducts[productSKU]));
        elPriceActiveText.innerHTML = "<span>Price: </span> <span>" + formatter.format(activePrice) + "</span> <span class='inc'> Inc. VAT</span>"
        productBlock.setAttribute('id', productObj.id)
        productBlock.setAttribute('sku', productObj.sku)
        productBlock.setAttribute('mainId', productObj.mainId)
        productBlock.setAttribute('qty', '1')
        productBlock.setAttribute('type_bundle', type_bundle)
        productBlock.classList.add(type_bundle)




        var p_type_details = document.createElement('div');
        if (type_bundle == "collection") {
            p_type_details.innerText = "Add to collection"
        } else {
            p_type_details.innerText = "Add to delivery"
        }
        p_type_details.classList.add('p_type_details')
        p_type_details.setAttribute('style', 'display:block;width:100%')
        productBlock.querySelector('.inc_cart_added_product_desc_block').appendChild(p_type_details)
        sbCartBlock.appendChild(productBlock);

    });
    elHeadersubtotalactivetext.parentNode.parentNode.parentNode.classList.remove('inc_special_price')
    if (+subtotalactiveprice != null && (+subtotalactiveprice < +subtotalregukarprice)) {
        elHeadersubtotalactivetext.setAttribute('subtotalActiveprice', subtotalactiveprice)
        elHeadersubtotalregulartext.setAttribute('subtotalRegularprice', subtotalregukarprice)
        elHeadersubtotalactivetext.parentNode.parentNode.parentNode.classList.add('inc_special_price')
        elHeadersubtotalactivetext.innerHTML = "<span class='now_was'>Now</span> <span class='price'>" + INC.clientConfig.currencySymbol + formatter.format(subtotalactiveprice) + "</span>"
        elHeadersubtotalregulartext.innerHTML = "<span class='now_was'>Was</span> <span class='price'>" + INC.clientConfig.currencySymbol + formatter.format(subtotalregukarprice) + "</span>"
    } else {
        elHeadersubtotalactivetext.setAttribute('subtotalActiveprice', subtotalactiveprice)
        elHeadersubtotalregulartext.setAttribute('subtotalRegularprice', subtotalregukarprice)
        elHeadersubtotalactivetext.innerHTML = "<span class='price'>" + INC.clientConfig.currencySymbol + formatter.format(subtotalregukarprice) + "</span>"
        elHeadersubtotalregulartext.innerHTML = ""
    }
    if (Object.keys(dataStore.bundleCartProducts).length == 1) {
        sidebarHeaderItemCountTitleText.innerHTML = Object.keys(dataStore.bundleCartProducts).length + " Item  <small>|</small> ";
    } else {
        sidebarHeaderItemCountTitleText.innerHTML = Object.keys(dataStore.bundleCartProducts).length + " Item(s)  <small>|</small>  ";
    }
    if (bundleCartProductsArray.length > 2) {
        getViewElement("sidebarCartAddedRightBtnBlock").style.visibility = "visible";
        getViewElement("sidebarCartAddedLeftBtnBlock").style.visibility = "visible";
    }

    if (!(bundleCartProductsArray.length > 2)) {
        getViewElement("sidebarCartAddedRightBtnBlock").style.visibility = "hidden";
        getViewElement("sidebarCartAddedLeftBtnBlock").style.visibility = "hidden";
    }
    if (window.innerWidth > 767) {
        if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 5) {
            document.querySelector('.inc_sidebar_cart_added_block').classList.add('flex-start')
        }
    } else {
        if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 3) {
            document.querySelector('.inc_sidebar_cart_added_block').classList.add('flex-start')
        }
    }
}

INC.methods.updateSidebarProductsList = function(elRecommendedProductsListBlock, productCategory) {

    var classNames = INC.uiConfig.sidebar.className;
    var getSelectorClassName = INC.methods.getSelectorClassName;
    var productListArray = INC.dataStore.bundleProductsArray;
    var dupl_sidebar_prod = []
    for (var i = 0; i < productListArray.length; i++) {
        var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({
            mainId: productListArray[i]
        });
        if (INC.config.pageType == "productList") {
            if (INC.dataStore.dataStoreObj.undefined == undefined) {
                if (dupl_sidebar_prod.indexOf(firstProductObjByMainId.id) == -1) {
                    dupl_sidebar_prod.push(firstProductObjByMainId.id)
                    var productBlock = INC.methods.createProductModuleBlock(firstProductObjByMainId.id, "sidebar", false, elRecommendedProductsListBlock);

                    productBlock.querySelector(getSelectorClassName(classNames, "productAddBlock")).addEventListener("click", function(e) {
                        if (INC.debug) console.log("clicked");

                        var productBlockNode = this.parentNode.parentNode;
                        if (this.parentNode.parentNode.className == "inc_product_desc_block") {
                            productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode
                        }
                        var sku = productBlockNode.getAttribute('data-sku');
                        var findObj = new INC.classes.FindObj({
                            id: sku
                        });
                        var qty = productBlockNode.querySelector('input').value;
                        var add_btn_click = productBlockNode.querySelector(getSelectorClassName(classNames, "productAddText"));
                        var add_prod_im = productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImg"));

                        setTimeout(function() {
                            Array.prototype.forEach.call(productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImg")), function(el) {
                                el.classList.remove("checked");
                            });

                        }, 2000);
                        var add_btn = productBlockNode.querySelector('.inc_product_desc_add_text')
                        if (productBlockNode.querySelector('.img_color_swatch') != null) {
                            if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.active') != null) {
                                INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im, add_btn, "delivery");
                            } else {
                                productBlockNode.querySelector('.img_color_swatch').click()
                            }
                        } else if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.avail') != null) {
                            if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.avail.active') != null) {
                                INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im, add_btn, "delivery");
                            }
                        } else {
                            INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im, add_btn, "delivery");
                        }
                    });
                    productBlock.querySelector(getSelectorClassName(classNames, "productAddBlockclickcollect")).addEventListener("click", function(e) {
                        if (INC.debug) console.log("clicked");

                        var productBlockNode = this.parentNode.parentNode;
                        if (this.parentNode.parentNode.className == "inc_product_desc_block") {
                            productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode
                        }
                        var sku = productBlockNode.getAttribute('data-sku');
                        var findObj = new INC.classes.FindObj({
                            id: sku
                        });
                        // productQtyInputText.innerText="QTY";
                        var qty = productBlockNode.querySelector('input').value;
                        if (qty == undefined || qty == "") {
                            qty = 1
                        }
                        var add_btn_click = productBlockNode.querySelector(getSelectorClassName(classNames, "productAddTextclickcollect"));
                        var add_prod_im = productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImgclickcollect"));
                        // productBlockNode.querySelector(getSelectorClassName(classNames, "productAddText")).innerText = "ADDED";

                        setTimeout(function() {
                            // var elAddImg = getViewElement("productAddImg");
                            Array.prototype.forEach.call(productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImg")), function(el) {
                                el.classList.remove("checked");
                            });

                        }, 2000);
                        var add_btn = productBlockNode.querySelector('.inc_product_desc_add_text_click_collect')
                        if (productBlockNode.querySelector('.img_color_swatch') != null) {
                            if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.active') != null) {
                                INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im, add_btn, "collection");
                            } else {
                                productBlockNode.querySelector('.img_color_swatch').click()
                            }
                        } else if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.avail') != null) {
                            if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.avail.active') != null) {
                                INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im, add_btn, "collection");
                            }
                        } else {
                            INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im, add_btn, "collection");
                        }
                    });
                    elRecommendedProductsListBlock.appendChild(productBlock);
                }
            }
        } else {
            if (firstProductObjByMainId["categoryId"] == productCategory) {
                if (INC.dataStore.dataStoreObj.undefined == undefined) {
                    if (dupl_sidebar_prod.indexOf(firstProductObjByMainId.id) == -1) {
                        dupl_sidebar_prod.push(firstProductObjByMainId.id)
                        var productBlock = INC.methods.createProductModuleBlock(firstProductObjByMainId.id, "sidebar", false, elRecommendedProductsListBlock);

                        productBlock.querySelector(getSelectorClassName(classNames, "productAddBlock")).addEventListener("click", function(e) {
                            if (INC.debug) console.log("clicked");

                            var productBlockNode = this.parentNode.parentNode;
                            if (this.parentNode.parentNode.className == "inc_product_desc_block") {
                                productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode
                            }
                            var sku = productBlockNode.getAttribute('data-sku');
                            var findObj = new INC.classes.FindObj({
                                id: sku
                            });
                            var qty = productBlockNode.querySelector('input').value;
                            var add_btn_click = productBlockNode.querySelector(getSelectorClassName(classNames, "productAddText"));
                            var add_prod_im = productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImg"));

                            setTimeout(function() {
                                Array.prototype.forEach.call(productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImg")), function(el) {
                                    el.classList.remove("checked");
                                });

                            }, 2000);
                            var add_btn = productBlockNode.querySelector('.inc_product_desc_add_text')
                            if (productBlockNode.querySelector('.img_color_swatch') != null) {
                                if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.active') != null) {
                                    INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im, add_btn, "delivery");
                                } else {
                                    productBlockNode.querySelector('.img_color_swatch').click()
                                }
                            } else if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.avail') != null) {
                                if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.avail.active') != null) {
                                    INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im, add_btn, "delivery");
                                }
                            } else {
                                INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im, add_btn, "delivery");
                            }
                        });
                        productBlock.querySelector(getSelectorClassName(classNames, "productAddBlockclickcollect")).addEventListener("click", function(e) {
                            if (INC.debug) console.log("clicked");

                            var productBlockNode = this.parentNode.parentNode;
                            if (this.parentNode.parentNode.className == "inc_product_desc_block") {
                                productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode
                            }
                            var sku = productBlockNode.getAttribute('data-sku');
                            var findObj = new INC.classes.FindObj({
                                id: sku
                            });
                            // productQtyInputText.innerText="QTY";
                            var qty = productBlockNode.querySelector('input').value;
                            if (qty == undefined || qty == "") {
                                qty = 1
                            }
                            var add_btn_click = productBlockNode.querySelector(getSelectorClassName(classNames, "productAddTextclickcollect"));
                            var add_prod_im = productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImgclickcollect"));
                            // productBlockNode.querySelector(getSelectorClassName(classNames, "productAddText")).innerText = "ADDED";

                            setTimeout(function() {
                                // var elAddImg = getViewElement("productAddImg");
                                Array.prototype.forEach.call(productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImg")), function(el) {
                                    el.classList.remove("checked");
                                });

                            }, 2000);
                            var add_btn = productBlockNode.querySelector('.inc_product_desc_add_text_click_collect')
                            if (productBlockNode.querySelector('.img_color_swatch') != null) {
                                if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.active') != null) {
                                    INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im, add_btn, "collection");
                                } else {
                                    productBlockNode.querySelector('.img_color_swatch').click()
                                }
                            } else if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.avail') != null) {
                                if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.avail.active') != null) {
                                    INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im, add_btn, "collection");
                                }
                            } else {
                                INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im, add_btn, "collection");
                            }
                        });
                        elRecommendedProductsListBlock.appendChild(productBlock);
                    }
                }
            };
        }
    }

    if (INC.debug) console.log(elRecommendedProductsListBlock.parentNode);
    if (INC.debug) console.log(elRecommendedProductsListBlock.childNodes.length);
    if (INC.debug) console.log(elRecommendedProductsListBlock.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")));
    INC.clientConfig.offset = 0;
    INC.clientConfig.slidevalue = 0;
    elRecommendedProductsListBlock.setAttribute('style', 'margin-left: 0')

    if (!(elRecommendedProductsListBlock.childNodes.length > 3)) {
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBlock")).style.visibility = "hidden";
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).style.visibility = "hidden";
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).setAttribute("style", "pointer-events: none;opacity:0.5;visibility: hidden;");
    }

    if (elRecommendedProductsListBlock.childNodes.length > 3) {
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBlock")).style.visibility = "visible";
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).style.visibility = "visible";
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");
    }
    // if (isIE()){
    elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnImg")).setAttribute("style", "opacity:0.5");
    // }
    var sliderBtnCounter = 0;

    var productBlocks = elRecommendedProductsListBlock.querySelectorAll(getSelectorClassName(classNames, "productModuleBlock"));
    elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBtnBlock")).addEventListener("click", function() {
        var productBlocks = document.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block')
        if (INC.clientConfig.slidevalue + 1 < productBlocks.length) {
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnBlock")).setAttribute("style", "pointer-events: auto;opacity:1");
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).setAttribute("style", "pointer-events: auto;opacity:1");
            // if (isIE()){
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnImg")).setAttribute("style", "opacity:1");
            // }
            INC.clientConfig.slidevalue++
            var slide_w = 242
            if (window.innerWidth > 1590) {
                var slide_w = 252
            }
            INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) - slide_w) + 'px';
            var menu = elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsListBlock"));
            menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
        }
        var cc_ount = 1;

        if (window.innerWidth > 960) {
            cc_ount = 2
        }

        if (+INC.clientConfig.slidevalue + +cc_ount == productBlocks.length) {
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBtnBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");
            document.querySelector('.inc_recommended_products_right_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
            // if (isIE()){
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBtnImg")).setAttribute("style", "opacity:0.5");
            // }
        }
        sliderBtnCounter++;
        if (sliderBtnCounter > productBlocks.length - 3) {
            sliderBtnCounter--;
        }
        if (INC.debug) console.log(sliderBtnCounter);
        if (INC.debug) console.log(productBlocks);
        // productBlocks[sliderBtnCounter - 1].style.display = "none";
        if (INC.debug) console.log(sliderBtnCounter);
        if (INC.debug) console.log("pdp product blocks count:" + productBlocks.length);

    });

    elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnBlock")).addEventListener("click", function() {
        var productBlocks = document.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block')
        if (INC.clientConfig.slidevalue == -1) INC.clientConfig.slidevalue = 0;
        if (INC.clientConfig.slidevalue > 0) {
            var slide_w = 242
            if (window.innerWidth > 1590) {
                var slide_w = 252
            }
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBtnBlock")).setAttribute("style", "pointer-events: auto;opacity:1");
            document.querySelector('.inc_recommended_products_right_btn_img').setAttribute("style", "pointer-events: auto;opacity:1");
            // if (isIE()){
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBtnImg")).setAttribute("style", "opacity:1");
            // }
            INC.clientConfig.slidevalue--
            INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) + slide_w) + 'px';
            var menu = elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsListBlock"));
            menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
        }
        if (INC.clientConfig.slidevalue == 0) {
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");
            // if (isIE()){
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnImg")).setAttribute("style", "opacity:0.5");
            // }
        }
        sliderBtnCounter--;
        if (sliderBtnCounter == -1) sliderBtnCounter = 0;
        // productBlocks[sliderBtnCounter].style.display = "block";

        if (INC.debug) console.log(sliderBtnCounter);
    });

}
INC.methods.sendBundleClickTracking = function(productId) {

    var pageType = "";
    var getSelectorClassName = INC.methods.getSelectorClassName;

    switch (INC.config.pageType) {
        case "pdp":
            pageType = "107";
            break;
        case "productList":
            pageType = "101";
            break;
        case "cartPage":
            pageType = "103";
            break;
        case "other":
            pageType = "101";
    }

    if (document.querySelector('.inc_sidebar_modal_block.active') == null && INC.config.pageType == "pdp") {
        pageType = "100";
    }

    INC.methods.trackingEvents("bundleProductClickTracking", {
        "product_id": productId,
        "core_product_id": INC.dataStore.pdpProductId
    }, pageType);

}

INC.methods.createProductModuleBlock = function(pdpProductId, blockType, bundleProductListCheck, parentblock) {
    if (INC.dataStore.dataStoreObj.undefined == undefined) {
        var classNames = INC.uiConfig[blockType].className;
        var findObj = new INC.classes.FindObj({
            id: pdpProductId
        });
        var productObj = INC.dataStore.methods().getProductById(findObj);
        var getSelectorClassName = this.getSelectorClassName;

        var productModuleBlock = this.getElementChilds("productModuleBlock", blockType);
        productModuleBlock.style.userSelect = "none";
        productModuleBlock.setAttribute('data-id', productObj.id);
        productModuleBlock.setAttribute('data-sku', productObj.sku);
        productModuleBlock.setAttribute('data-main_id', productObj.mainId);
        productModuleBlock.setAttribute('data-bundle_id', productObj.bundleId);

        function getViewElement(className) {
            return productModuleBlock.querySelector(getSelectorClassName(classNames, className));
        }

        var elProductShowcaseBlock = getViewElement("productShowcaseBlock");
        var elProductModalBlock = getViewElement("productModalBlock");

        elProductShowcaseBlock.innerHTML = "";
        elProductModalBlock.innerHTML = "";
        if (elProductShowcaseBlock != null) {
            elProductShowcaseBlock.setAttribute('role', "contentinfo")
        }
        if (elProductModalBlock != null) {
            elProductModalBlock.setAttribute('role', "contentinfo")
        }
        var productShowcaseBlock = INC.methods.createProductShowcaseBlock(pdpProductId, blockType, bundleProductListCheck, parentblock);
        var productModalBlock = INC.methods.createProductModalBlock(pdpProductId, blockType, bundleProductListCheck, parentblock);

        elProductShowcaseBlock.appendChild(productShowcaseBlock);
        elProductModalBlock.appendChild(productModalBlock);

        return productModuleBlock;
    }
}

INC.methods.createProductShowcaseBlock = function(pdpProductId, blockType, bundleProductListCheck, parentblock) {
    var classNames = INC.uiConfig[blockType].className;
    var productBlock = this.getElementChilds("productBlock", blockType);
    var findObj = new INC.classes.FindObj({
        id: pdpProductId
    });
    var productObj = INC.dataStore.methods().getProductById(findObj);
    var getSelectorClassName = this.getSelectorClassName;

    productBlock.setAttribute('data-id', productObj.id);
    productBlock.setAttribute('data-sku', productObj.sku);
    productBlock.setAttribute('data-main_id', productObj.mainId);
    productBlock.setAttribute('data-bundle_id', productObj.bundleId);

    function getViewElement(className) {
        return productBlock.querySelector(getSelectorClassName(classNames, className));
    }

    var elHeader = getViewElement("productHeaderBlock");
    var elInfoText = getViewElement("productInfoText");
    var elImgBlock = getViewElement("productImgBlock");
    var elImgGalleryListBlock = getViewElement("productImgGalleryListBlock");
    var elTitleBlock = getViewElement("productTitleBlock");
    var elTitleText = getViewElement("productTitleText");
    var elproductPriceBlock = getViewElement("productPriceBlock");
    var elproductPriceLabel = getViewElement("productPriceLabel");
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
    var elAttSizeListBlock = getViewElement("productAttSizeListBlock");
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
    var elzoomicon = getViewElement("productImgMainZoomBtnImg");
    var fulldescblock = getViewElement("productInfoFullDescBlock");
    var img_block = getViewElement("productImgMainImgBlock");
    var elAddTextclickcollect = getViewElement("productAddTextclickcollect");
    var elAddBlockclickcollect = getViewElement("productAddBlockclickcollect");
    if (blockType != "pdp") {
        if (productObj.Field6 == "CollectOnly" && INC.config.storeId != "") {
            productBlock.classList.add('is_click_collect_only')
            elAddBlock.style.display = "none"
        } else if (productObj.Field6 == "CollectOnly" && INC.config.storeId == "") {
            elAddBlockclickcollect.style.display = "none"
            elAddBlock.style.display = "none"
        } else if (productObj.Field6 == "DeliveryOnly") {
            productBlock.classList.add('is_delivery_only')
            elAddBlockclickcollect.style.display = "none"
        } else if (productObj.Field6 == "Both") {
            productBlock.classList.add('is_click_collect_only')
            productBlock.classList.add('is_both_avail')
        } else if (INC.config.storeId == "") {
            productBlock.classList.add('is_delivery_only')
            elAddBlockclickcollect.style.display = "none"
        } else {
            productBlock.classList.add('is_click_collect_only')
        }
    }

    var discountBadge = INC.methods.generateHTMLTags("div")
    if(INC.config.bigDeals.indexOf(productObj.id) > -1){
        discountBadge.classList.add("inc_bigDeals_badge")
        productBlock.appendChild(discountBadge)
    }else if(INC.config.springSummer.indexOf(productObj.id) > -1){
        discountBadge.classList.add("inc_springSummer_badge")
        productBlock.appendChild(discountBadge)
    }


    elHeader.querySelector(getSelectorClassName(classNames, "productHeaderImgBlock")).addEventListener("click", function() {

        productBlock.parentNode.classList.remove("active");
    });

    var elImgMainImg = elImgBlock.querySelector(getSelectorClassName(classNames, "productImgMainImg"));
    var elImgTag1 = this.generateHTMLTags('img', {
        src: productObj.imageURL
    });
    if(onloadpdp == true){
        elImgTag1.src = productObj.imageURL
    }
    elImgTag1.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
    if (typeof(jQuery) != "undefined") {
        jQuery(elImgTag1).on('mouseover', function(e) {
            if (jQuery(this).data('mouseover') != "" && jQuery(this).data('mouseover') != null) {
                var self = this,
                    i = 1,
                    images = jQuery(this).data('mouseover').split(',');


                (function nextImage() {
                    var dotsel = null
                    var next = images[i++ % images.length].split('#');
                    jQuery(self).data('timeout', setTimeout(function() {
                        self.src = next[0];
                        if (self != undefined) {
                            if (self.parentNode != undefined) {
                                var dotsel = self.parentNode.parentNode.parentNode.parentNode.parentNode
                            }
                        }
                        if (dotsel != null) {
                            if (dotsel.querySelector('.inc_product_img_gallery_list_item_block.active') != null) {
                                if (dotsel.querySelector('.inc_product_img_gallery_list_item_block.active').nextElementSibling != null) {
                                    dotsel.querySelector('.inc_product_img_gallery_list_item_block.active').nextElementSibling.classList.add('active')
                                    dotsel.querySelector('.inc_product_img_gallery_list_item_block.active').classList.remove('active')
                                } else if (dotsel.querySelector('.inc_product_img_gallery_list_item_block.active') != null) {
                                    dotsel.querySelector('.inc_product_img_gallery_list_item_block.active').classList.remove('active')
                                    dotsel.querySelector('.inc_product_img_gallery_list_item_block').classList.add('active')
                                }
                            }
                        }
                        nextImage();
                    }, 300), next[1]);
                })();
            }

        }).on('mouseout', function(e) {
            clearTimeout(jQuery(this).data('timeout'));
            this.src = jQuery(this).attr('data-imageurl');
            var dotsel = null
            if (this != undefined) {
                if (this.parentNode != undefined) {
                    var dotsel = this.parentNode.parentNode.parentNode.parentNode.parentNode
                    if (dotsel != null) {
                        if (dotsel.querySelector('.inc_product_img_gallery_list_item_block.active') != null) {
                            dotsel.querySelector('.inc_product_img_gallery_list_item_block.active').classList.remove('active')
                        }
                        if (dotsel.querySelector('.inc_product_img_gallery_list_item_block') != null) {
                            dotsel.querySelector('.inc_product_img_gallery_list_item_block').classList.add('active')
                        }
                    }
                }
            }

        });
    }
    //
    elImgTag1.setAttribute('role', 'img')
    elImgTag1.setAttribute('aria-label', 'Image')
    elImgTag1.setAttribute('alt', productObj.name)
    elImgTag1.setAttribute('data-mouseover', productObj["otherImageList"])
    elImgTag1.setAttribute('data-imageURL', productObj["imageURL"])
    var productLink = document.createElement('a');

    productLink.href = productObj.url;
    productLink.appendChild(elImgTag1);
    productLink.setAttribute('otherImageList', productObj["otherImageList"])
    productLink.setAttribute('imageURL', productObj["imageURL"])
    add_swipe(productLink)

    elImgMainImg.appendChild(productLink);
    elImgMainImg.addEventListener("click", function() {
        INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-id'));
    });
    elzoomicon.setAttribute('title', 'View Details')
    var elImgMainZoomImgBlock = elImgBlock.querySelector(getSelectorClassName(classNames, "productImgMainZoomBtnImgBlock"));

    elImgMainZoomImgBlock.addEventListener('click', function() {
        if (productBlock.querySelector('.close_read_more') != null) {
            productBlock.querySelector('.close_read_more').click()
        }
        if (document.querySelector('.inc_sidebar_modal_block.active') == null) {
            document.querySelector('body').classList.remove('inc_overlay');
        }
        if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
            document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
        }
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productModalBlock")), function(el) {
            el.classList.remove("active");
        });
        if (document.querySelector('.inc_sidebar_modal_block.active') == null) {
            document.querySelector('body').classList.add('inc_overlay');
        }
        if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
            document.querySelector('.inc_sidebar_modal_block.active').classList.add('overflow_visible')
        }
        this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).classList.add("active");
        if ((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true) {
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
                if (document.querySelector('.inc_pdp_block') != null) {
                    jQuery("html, body").animate({
                        scrollTop: jQuery(".inc_pdp_block").offset().top - 80
                    }, 0);
                } else if (document.querySelector('.inc_af_block') != null) {
                    jQuery("html, body").animate({
                        scrollTop: jQuery(".inc_af_block").offset().top - 80
                    }, 0);
                }
            }
        }
    });

    var elImgMainZoomTextBlock = elImgBlock.querySelector(getSelectorClassName(classNames, "productImgMainZoomBtnTextBlock"));

    elImgMainZoomTextBlock.style.display = "none";
    elImgMainZoomTextBlock.addEventListener('click', function() {
        if (productBlock.querySelector('.close_read_more') != null) {
            productBlock.querySelector('.close_read_more').click()
        }
        if (document.querySelector('.inc_sidebar_modal_block.active') == null) {
            document.querySelector('body').classList.remove('inc_overlay');
        }
        if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
            document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
        }
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productModalBlock")), function(el) {
            el.classList.remove("active");
        });
        if (document.querySelector('.inc_sidebar_modal_block.active') == null) {
            document.querySelector('body').classList.add('inc_overlay');
        }
        if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
            document.querySelector('.inc_sidebar_modal_block.active').classList.add('overflow_visible')
        }
        console.log(this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode);
        this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).classList.add("active");
    });

    var elImgMainZoomText = elImgBlock.querySelector(getSelectorClassName(classNames, "productImgMainZoomBtnText"));

    elImgGalleryListBlock.innerHTML = "";

    if ((productObj.otherImageList != null) && productObj.otherImageList.length > 1) {
        var otimg = 0;
        productObj.otherImageList.forEach(function(otherImgURL) {
            var elOtherImgTag = INC.methods.generateHTMLTags('img', {
                src: otherImgURL
            });
            if(onloadpdp == true){
                elOtherImgTag.src = otherImgURL
            }
            elOtherImgTag.setAttribute('role', 'img')
            elOtherImgTag.setAttribute('aria-label', 'Image')
            elOtherImgTag.setAttribute('alt', productObj.name)
            elOtherImgTag.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");

            var elImgGalleryListItemBlock = INC.methods.getElementChilds("productImgGalleryListItemBlock", blockType);

            var elImgGalleryListItemImg = elImgGalleryListItemBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemImg"));

            elImgGalleryListItemImg.appendChild(elOtherImgTag);

            elImgGalleryListItemBlock.addEventListener("click", function() {

                Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productImgGalleryListItemBlock")), function(galleryListItemBlock) {
                    galleryListItemBlock.classList.remove("active");
                });

                elImgGalleryListItemBlock.classList.add("active");

                elImgMainImg.querySelector('img').src = otherImgURL;
                elImgMainImg.querySelector('img').setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
            })

            elImgGalleryListBlock.appendChild(elImgGalleryListItemBlock);
            if (otimg == 0) {
                elImgGalleryListItemBlock.classList.add('active')
            }
            otimg++;
            if (productObj.otherImageList.length > 5) {
                elImgGalleryListItemBlock.parentNode.classList.add("flex-start")
            }
        });
    } else {
        elImgMainZoomImgBlock.style.display = "none"
    }

    elTitleBlock.addEventListener("click", function() {
        INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-id'));
    });

    var pTitleDiv = document.createElement('div');
    pTitleDiv.innerHTML = productObj.name;
    var field1 = productObj.ratingsCount;
    // INC.methods.get_product_ratings(field1, elratingsBlock);
    var pLink = document.createElement('a');
    pLink.href = productObj.url;
    pLink.setAttribute('title', productObj.name)
    pLink.appendChild(pTitleDiv);
    elTitleText.appendChild(pLink);


    var manufacture = document.createElement('div');
    manufacture.classList.add('manufacture_block');
    manufacture.style.display = "none"

    var manuf_brand = document.createElement('div');
    manuf_brand.classList.add('manuf_brand');
    if (productObj.manufacturer != "") {
        manuf_brand.innerText = "Brand:"
    }
    manufacture.appendChild(manuf_brand)

    var manuf_brand_text = document.createElement('div');
    manuf_brand_text.classList.add('manuf_brand_text');
    if (productObj.manufacturer != "") {
        manuf_brand_text.innerHTML = productObj.manufacturer.replace('&amp;', '')
    }
    manufacture.appendChild(manuf_brand_text)
    elTitleBlock.appendChild(manufacture)


    var short_desc = productObj.shortDescription;
    var deschtml = document.createElement('div')
    deschtml.innerHTML = short_desc;
    var desctext = ""
    var descrtotext = ""
    if (deschtml.querySelector('.m_product-description') != null) {
        var desctext = deschtml.querySelector('.m_product-description').innerText.trim().replace(/&lt;br&gt;/g, '<br>').replace(/&lt;br/g, '<br>').replace('<br', '<br>').replace('>', '').split('\n')[0]
    }
    if (desctext == "") {
        if (productObj.shortDescription.split('\n')[2] != undefined) {
            if (productObj.shortDescription.split('\n')[2].length > 135) {
                if (window.innerWidth > 767) {
                    desctext = productObj.shortDescription.split('\n')[2].substring(0, 134);
                } else {
                    desctext = productObj.shortDescription.split('\n')[2].substring(0, 70);
                }
            }
        } else {
            if (productObj.shortDescription.length > 135) {
                if (window.innerWidth > 767) {
                    desctext = productObj.shortDescription.substring(0, 134);
                } else {
                    desctext = productObj.shortDescription.substring(0, 70);
                }
            }
        }
    } else {
        if (desctext.length > 130) {
            if (window.innerWidth > 767) {
                desctext = desctext.trim().substring(0, 120);
            } else {
                desctext = desctext.trim().substring(0, 70);
            }
        }
    }
    elInfoText.innerHTML = desctext + "..." + "<a class='inc_readMore' onClick='read_more_inc(this)'>Read More</a>";
    elFullDesctext.innerHTML = productObj.description.replace(/&lt;br&gt;/g, '<br>').replace(/&lt;br/g, '<br>').replace('>', '');
    fulldescblock.setAttribute('aria-hidden', 'true')


    var activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
    var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
    var worthPrice = parseFloat(productObj.worthPrice).toFixed(2).toString();

    elPriceRegularText.innerText = "";
    if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
        elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_price')
        elPriceActiveText.innerHTML = "<span class='now_was'>Now</span> <span class='price'>" + INC.clientConfig.currencySymbol + formatter.format(activePrice) + "</span> <span class='inc'> Inc. VAT</span>"
        elPriceRegularText.innerHTML = "<span class='now_was'>Was</span> <span class='price'>" + INC.clientConfig.currencySymbol + formatter.format(regularPrice) + "</span> <span class='inc'> Inc. VAT</span>"
    } else {
        elPriceActiveText.innerHTML = "<span class='price'>" + INC.clientConfig.currencySymbol + formatter.format(activePrice) + "</span> <span class='inc'> Inc. VAT</span>"

    }
//debugger
//console.log(productObj)
    if (productBlock.querySelector('.pc_promo_div') == null && productObj.ProductLevelDiscountMessage != null && productObj.ProductLevelDiscountMessage != "") {
        var ec_promo_div = document.createElement('div');
        ec_promo_div.classList.add('pc_promo_div')
        ec_promo_div.classList.add('active')
        var ec_promo_span = document.createElement('span');
        ec_promo_span.classList.add('pc_promo_span')

        ec_promo_span.classList.add('red_promo')
        ec_promo_span.innerHTML = productObj.ProductLevelDiscountMessage.replace("_", " ")
        ec_promo_span.setAttribute('title', productObj.ProductLevelDiscountMessage.replace("_", " "))
        ec_promo_div.appendChild(ec_promo_span);

        var elPrice_blck = getViewElement("productInfoBlock");
        var view = elPrice_blck //productPriceBlock
        if (view != null || view != undefined) {
            // view.insertBefore(ec_promo_div, view.childNodes[0]);
            view.parentNode.insertBefore(ec_promo_div, view);
        }
        if (parentblock != undefined) {
            parentblock.classList.add('promos_available')
        }
    } else {
        var ec_promo_div = document.createElement('div');
        ec_promo_div.classList.add('pc_promo_div')
        ec_promo_div.classList.add('empty');
        var elPrice_blck = getViewElement("productInfoBlock");
        var view = elPrice_blck //productPriceBlock
        if (view != null || view != undefined) {
            // view.insertBefore(ec_promo_div, view.childNodes[0]);
            view.parentNode.insertBefore(ec_promo_div, view);
        }
    }
    elAttBlock.addEventListener("click", function() {
        if (productBlock.querySelector('.close_read_more') != null) {
            productBlock.querySelector('.close_read_more').click()
        }
        if (document.querySelector('.inc_sidebar_modal_block.active') == null) {
            document.querySelector('body').classList.remove('inc_overlay');
        }
        if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
            document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
        }
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productModalBlock")), function(el) {
            el.classList.remove("active");
        });
        if (document.querySelector('.inc_sidebar_modal_block.active') == null) {
            document.querySelector('body').classList.add('inc_overlay');
        }
        if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
            document.querySelector('.inc_sidebar_modal_block.active').classList.add('overflow_visible')
        }
        this.parentNode.parentNode.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).classList.add("active");
        if ((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true) {
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
                if (document.querySelector('.inc_pdp_block') != null) {
                    jQuery("html, body").animate({
                        scrollTop: jQuery(".inc_pdp_block").offset().top - 80
                    }, 0);
                } else if (document.querySelector('.inc_af_block') != null) {
                    jQuery("html, body").animate({
                        scrollTop: jQuery(".inc_af_block").offset().top - 80
                    }, 0);
                }
            }
        }
    });



    var elQtyInput = this.generateHTMLTags('input');
    elQtyInput.setAttribute('type', "number");
    elQtyInput.setAttribute('aria-label', "quantity");
    elQtyInput.setAttribute('min', 1);
    elQtyInput.setAttribute('max', 99);
    elQtyInput.setAttribute('maxlength', 2);
    elQtyInput.setAttribute('disabled', true);
    elQtyInput.value = 1;
    elQtyInput.setAttribute('old_qty', '1');
    elQtyInput.setAttribute('pattern', '[0-9]');
    elQtyInput.setAttribute("onkeydown", "if(event.key==='.'){event.preventDefault();}");
    elQtyInput.setAttribute('onKeyPress', 'if(this.value.length==2) return false;');

    elQtyBlock.addEventListener("click", function() {
        if (productBlock.querySelector('.close_read_more') != null) {
            productBlock.querySelector('.close_read_more').click()
        }

        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productPackOfListBlock")), function(el) {
            el.classList.remove("active");
        });
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productAttSizeListBlock")), function(attSizeListBlock) {
            attSizeListBlock.classList.remove("active");
        });
        elPackOfListBlock.classList.toggle("active");
    });



    elQtyInput.addEventListener("keydown", function() {

        var prod_card = elQtyInput.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        elPackOfListBlock.classList.remove("active");
        setTimeout(function() {
            if (elQtyInput.value.length == 0) elQtyInput.value = 1;
            if (elQtyInput.value == 0) elQtyInput.value = 1;
            if (elQtyInput.value > 99) elQtyInput.value = 99;

            var productModuleBlock = productBlock.parentNode.parentNode;

            var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

            showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productQtyInputText")).querySelector('input').value = parseInt(elQtyInput.value);

            var id = productBlock.getAttribute('data-id');
            var qty = parseInt(elQtyInput.value);
            var main_id = productBlock.getAttribute('data-main_id');
            var bundle_id = productBlock.getAttribute('data-bundle_id');
            var pname = productBlock.querySelector('.inc_product_desc_title_text').innerText;
            var pprice = productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$', '');
            prod_card.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_block input').value = elQtyInput.value
            if (elAddText.innerText == "ADDED") {
                INC.methods.updateBundleCart({
                    sku: id,
                    qty: qty
                }, "add", main_id, bundle_id, pname, pprice);
            }
        }, 50);

    });

    elQtyInputText.appendChild(elQtyInput);

    elQtyDownBlock.addEventListener('click', function() {

        if (productBlock.querySelector('.close_read_more') != null) {
            productBlock.querySelector('.close_read_more').click()
        }
        var prod_card = elQtyInput.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        elQtyInput.value = (elQtyInput.value - 1 < 1) ? 1 : elQtyInput.value - 1;

        var productModuleBlock = productBlock.parentNode.parentNode;

        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

        showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productQtyInputText")).querySelector('input').value = parseInt(elQtyInput.value);
        prod_card.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_block input').value = elQtyInput.value
        var id = productBlock.getAttribute('data-id');
        var qty = parseInt(elQtyInput.value);
        var main_id = productBlock.getAttribute('data-main_id');
        var bundle_id = productBlock.getAttribute('data-bundle_id');
        var pname = productBlock.querySelector('.inc_product_desc_title_text').innerText;
        var pprice = productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$', '');
        if (elAddText.innerText == "ADDED" || elAddText.innerText == "UPDATE") {
            INC.methods.updateBundleCart({
                sku: id,
                qty: qty
            }, "add", main_id, bundle_id, pname, pprice);
        }
    });

    elQtyUpBlock.addEventListener('click', function() {

        if (productBlock.querySelector('.close_read_more') != null) {
            productBlock.querySelector('.close_read_more').click()
        }
        var prod_card = elQtyInput.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        elQtyInput.value = (parseInt(elQtyInput.value) + 1 > 99) ? 99 : parseInt(elQtyInput.value) + 1;

        var productModuleBlock = productBlock.parentNode.parentNode;

        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

        showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productQtyInputText")).querySelector('input').value = parseInt(elQtyInput.value);
        prod_card.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_block input').value = elQtyInput.value
        var id = productBlock.getAttribute('data-id');
        var qty = parseInt(elQtyInput.value);
        var main_id = productBlock.getAttribute('data-main_id');
        var bundle_id = productBlock.getAttribute('data-bundle_id');
        var pname = productBlock.querySelector('.inc_product_desc_title_text').innerText;
        var pprice = productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$', '');
        if (elAddText.innerText == "ADDED" || elAddText.innerText == "UPDATE") {
            INC.methods.updateBundleCart({
                sku: id,
                qty: qty
            }, "add", main_id, bundle_id, pname, pprice);
        }
    });

    findObj = new INC.classes.FindObj({
        mainId: productObj.mainId
    });

    var productColorsObj = INC.dataStore.methods().getProductColorsObj(findObj);
    if (productColorsObj.colorArray.length == 0) {
        var productSizesObj = INC.dataStore.methods().getProductSizesObj(findObj);
    }
    if (productColorsObj.colorArray.length > 0) {
        elAttColorListBlock.innerHTML = "";
        if (productColorsObj["colorArray"].length > 0) {
            var elImgColorSwatch = document.createElement('div');
            elImgColorSwatch.classList.add("img_color_swatch");
            elImgColorSwatch.style.display = "none"
            var elImgColorSwatchCount = document.createElement('div');
            elImgColorSwatchCount.classList.add("img_color_swatch_count");
            elImgColorSwatchCount.style.display = "none"
            elImgColorSwatchCount.innerText = productColorsObj["colorArray"].length;

            elImgMainZoomTextBlock.style.display = "none";
            elImgMainZoomText.appendChild(elImgColorSwatch);
            elImgMainZoomText.appendChild(elImgColorSwatchCount);
        }
    }
    var sizezero = INC.dataStore.methods().getProductopt0Obj(findObj)
    if (productColorsObj["colorArray"].length == 0 && sizezero["att0Array"].length == 0) {
        elAttSizeTitleText.innerText = "View Details";
    } else {
        elAttSizeTitleText.innerText = "Select Options";
    }


    switch (blockType) {
        case "pdp":
            elAddText.innerText = "ADD";
            break;
        case "sidebar":
            elAddText.innerText = "Add to delivery";
            elAddTextclickcollect.innerText = "Add to collection";
            break;
        case "am":
            elAddText.innerText = "Add to delivery";
            elAddTextclickcollect.innerText = "Add to collection";
            break;
    }

    elAddBlock.addEventListener("click", function() {
        if (productBlock.querySelector('.close_read_more') != null) {
            productBlock.querySelector('.close_read_more').click()
        }
        var productModuleBlock = productBlock.parentNode.parentNode;

        var modalProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

        var sku = productBlock.getAttribute('data-sku');
        var mainId = productBlock.getAttribute('data-main_id');
        var main_id = productBlock.getAttribute('data-main_id');
        var bundle_id = productBlock.getAttribute('data-bundle_id');
        var pname = productBlock.querySelector('.inc_product_desc_title_text').innerText;
        var pprice = productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$', '');
        var qty = parseInt(elQtyInput.value);
        var prod_card = elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        if (document.querySelector('.inc_sidebar_modal_block.active') == null && document.querySelector('.inc_af_block') == null) {
            //img_color_swatch
            if (productModuleBlock.querySelector('.img_color_swatch') != null || productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.avail') != null) {

                if (productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.active') != null || productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.active') != null) {
                    switch (elAddText.innerText) {
                        case "ADD TO DELIVERY":
                        case "ADD":
                            elAddText.innerText = "ADDED";
                            elAddText.classList.add('added');
                            elAddText.parentNode.parentNode.classList.add('Inc_checked');
                            modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText = "UPDATE";
                            var pListItemBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + "[data-main_id=\"" + mainId + "\"]");
                            if (pListItemBlock != null) {
                                pListItemBlock.classList.add('product_added');
                                pListItemBlock.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemAddedBtnImg")).classList.add("checked");
                            }
                            elAddImg.classList.add("checked");
                            modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.add("checked");
                            if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({
                                sku: sku,
                                qty: qty
                            }, "add", main_id, bundle_id, pname, pprice);
                            if (prod_card != null) {
                                if (prod_card.querySelector('.inc_product_modal_block.active') != null) {
                                    prod_card.querySelector('.inc_product_modal_block.active').classList.remove('active')
                                }
                            }
                            break;
                        case "ADDED":
                            if (modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText != "UPDATE" && prod_card.querySelector('.inc_product_modal_block.active') != null) {
                                elAddText.innerText = "ADD TO DELIVERY";
                                elAddText.classList.remove('added');
                                elAddText.parentNode.parentNode.classList.remove('Inc_checked');
                                modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText = "ADD";
                                var pListItemBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + "[data-main_id=\"" + mainId + "\"]");
                                if (pListItemBlock != null) {
                                    pListItemBlock.classList.remove('product_added');
                                    pListItemBlock.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemAddedBtnImg")).classList.remove("checked");
                                }
                                elAddImg.classList.remove("checked");
                                modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.remove("checked");
                                if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({
                                    sku: sku,
                                    qty: qty
                                }, "sub", main_id, bundle_id, pname, pprice);
                            } else {
                                if (prod_card.querySelector('.inc_product_modal_block.active') == null) {
                                    elAddText.innerText = "ADD TO DELIVERY";
                                    elAddText.classList.remove('added');
                                    elAddText.parentNode.parentNode.classList.remove('Inc_checked');
                                    modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText = "ADD";
                                    var pListItemBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + "[data-main_id=\"" + mainId + "\"]");
                                    if (pListItemBlock != null) {
                                        pListItemBlock.classList.remove('product_added');
                                        pListItemBlock.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemAddedBtnImg")).classList.remove("checked");
                                    }
                                    elAddImg.classList.remove("checked");
                                    modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.remove("checked");
                                    if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({
                                        sku: sku,
                                        qty: qty
                                    }, "sub", main_id, bundle_id, pname, pprice);
                                }
                            }
                            if (prod_card != null) {
                                if (prod_card.querySelector('.inc_product_modal_block.active') != null) {
                                    prod_card.querySelector('.inc_product_modal_block.active').classList.remove('active')
                                }
                            }
                            break;
                    }
                } else {
                    if (productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).parentNode.querySelector('.img_color_swatch') != null) {
                        productModuleBlock.querySelector('.img_color_swatch').click()
                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText = "Please Select Color"
                    } else if (productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block') != null) {
                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText = "Please Select option"
                        productModuleBlock.querySelector('.inc_product_desc_att_block').click()
                    }
                }
            } else {
                switch (elAddText.innerText) {
                    case "ADD TO DELIVERY":
                    case "ADD":
                        elAddText.innerText = "ADDED";
                        elAddText.classList.add('added');
                        elAddText.parentNode.parentNode.classList.add('Inc_checked');
                        modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText = "UPDATE";
                        var pListItemBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + "[data-main_id=\"" + mainId + "\"]");
                        if (pListItemBlock != null) {
                            pListItemBlock.classList.add('product_added');
                            pListItemBlock.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemAddedBtnImg")).classList.add("checked");
                        }
                        elAddImg.classList.add("checked");
                        modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.add("checked");
                        if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({
                            sku: sku,
                            qty: qty
                        }, "add", main_id, bundle_id, pname, pprice);
                        if (prod_card != null) {
                            if (prod_card.querySelector('.inc_product_modal_block.active') != null) {
                                prod_card.querySelector('.inc_product_modal_block.active').classList.remove('active')
                            }
                        }
                        break;
                    case "ADDED":
                        if (modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText != "UPDATE" && prod_card.querySelector('.inc_product_modal_block.active') != null) {
                            elAddText.innerText = "ADD TO DELIVERY";
                            elAddText.classList.remove('added');
                            elAddText.parentNode.parentNode.classList.remove('Inc_checked');
                            modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText = "ADD";
                            var pListItemBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + "[data-main_id=\"" + mainId + "\"]");
                            if (pListItemBlock != null) {
                                pListItemBlock.classList.remove('product_added');
                                pListItemBlock.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemAddedBtnImg")).classList.remove("checked");
                            }
                            elAddImg.classList.remove("checked");
                            modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.remove("checked");
                            if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({
                                sku: sku,
                                qty: qty
                            }, "sub", main_id, bundle_id, pname, pprice);
                        } else {
                            if (prod_card.querySelector('.inc_product_modal_block.active') == null) {
                                elAddText.innerText = "ADD";
                                elAddText.classList.remove('added');
                                elAddText.parentNode.parentNode.classList.remove('Inc_checked');
                                modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText = "ADD";
                                productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_text input').value = "1";
                                productModuleBlock.querySelector('.inc_product_desc_qty_input_text input').value = "1"
                                var pListItemBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + "[data-main_id=\"" + mainId + "\"]");
                                if (pListItemBlock != null) {
                                    pListItemBlock.classList.remove('product_added');
                                    pListItemBlock.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemAddedBtnImg")).classList.remove("checked");
                                }
                                elAddImg.classList.remove("checked");
                                modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.remove("checked");
                                if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({
                                    sku: sku,
                                    qty: qty
                                }, "sub", main_id, bundle_id, pname, pprice);
                            }
                        }
                        if (prod_card != null) {
                            if (prod_card.querySelector('.inc_product_modal_block.active') != null) {
                                prod_card.querySelector('.inc_product_modal_block.active').classList.remove('active')
                            }
                        }
                        break;
                }
            }

        } else {

            if (productModuleBlock.querySelector('.img_color_swatch') != null || productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.avail') != null) {
                if (productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.active') != null || productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.avail.active') != null) {
                    elAddText.innerText = "ADDING...";
                    elAddText.parentNode.parentNode.setAttribute("style", "pointer-events: none;opacity: 0.5;");
                } else {
                    if (productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.img_color_swatch') != null) {
                        productModuleBlock.querySelector('.img_color_swatch').click()
                    } else if (productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.avail') != null) {
                        productModuleBlock.querySelector('.inc_product_desc_att_block').click()
                    }
                }
            } else {
                elAddText.innerText = "ADDING...";
                elAddText.parentNode.parentNode.setAttribute("style", "pointer-events: none;opacity: 0.5;");
            }
        }
    });
    elAddBlockclickcollect.addEventListener("click", function() {
        if (productBlock.querySelector('.close_read_more') != null) {
            productBlock.querySelector('.close_read_more').click()
        }
        var productModuleBlock = productBlock.parentNode.parentNode;

        var modalProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

        var sku = productBlock.getAttribute('data-sku');
        var mainId = productBlock.getAttribute('data-main_id');
        var main_id = productBlock.getAttribute('data-main_id');
        var qty = parseInt(elQtyInput.value);
        var prod_card = elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        if (document.querySelector('.inc_sidebar_modal_block.active') == null && document.querySelector('.inc_af_block') == null) {

        } else {

            if (productModuleBlock.querySelector('.img_color_swatch') != null) {
                if (productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.active') != null) {
                    elAddTextclickcollect.innerText = "ADDING...";
                    elAddTextclickcollect.parentNode.parentNode.setAttribute("style", "pointer-events: none;opacity: 0.5;");
                } else {
                    productModuleBlock.querySelector('.img_color_swatch').click()
                }
            } else {
                elAddTextclickcollect.innerText = "ADDING...";
                elAddTextclickcollect.parentNode.parentNode.setAttribute("style", "pointer-events: none;opacity: 0.5;");
            }
        }

    });

    return productBlock;
}

INC.methods.createProductModalBlock = function(pdpProductId, blockType, bundleProductListCheck, parentblock) {
    var classNames = INC.uiConfig[blockType].className;
    var productBlock = this.getElementChilds("productBlock", blockType);
    var findObj = new INC.classes.FindObj({
        id: pdpProductId
    });
    var productObj = INC.dataStore.methods().getProductById(findObj);
    // var productColorText = productObj["option"]["0"].text;
    var getSelectorClassName = this.getSelectorClassName;

    productBlock.setAttribute('data-id', productObj.id);
    productBlock.setAttribute('data-sku', productObj.sku);
    productBlock.setAttribute('data-main_id', productObj.mainId);
    productBlock.setAttribute('data-bundle_id', productObj.bundleId);
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
    var fulldescblock = getViewElement("productInfoFullDescBlock");
    var descheadingblock = getViewElement("productInfoImg");
    var elAddTextclickcollect = getViewElement("productAddTextclickcollect");
    var elAddBlockclickcollect = getViewElement("productAddBlockclickcollect");


    if (blockType != "pdp") {
        if (productObj.Field6 == "CollectOnly" && INC.config.storeId != "") {
            productBlock.classList.add('is_click_collect_only')
            elAddBlock.style.display = "none"
        } else if (productObj.Field6 == "CollectOnly" && INC.config.storeId == "") {
            elAddBlockclickcollect.style.display = "none"
            elAddBlock.style.display = "none"
        } else if (productObj.Field6 == "DeliveryOnly") {
            productBlock.classList.add('is_delivery_only')
            elAddBlockclickcollect.style.display = "none"
        } else if (productObj.Field6 == "Both") {
            productBlock.classList.add('is_click_collect_only')
            productBlock.classList.add('is_both_avail')
        } else if (INC.config.storeId == "") {
            productBlock.classList.add('is_delivery_only')
            elAddBlockclickcollect.style.display = "none"
        } else {
            productBlock.classList.add('is_click_collect_only')
        }
    }

    var img_block = getViewElement("productImgMainImgBlock");

    img_block.setAttribute('role', 'img')
    img_block.setAttribute('aria-label', 'Image')

    // if (INC.debug) console.log(productObj);

    elHeader.querySelector(getSelectorClassName(classNames, "productHeaderImgBlock")).addEventListener("click", function() {
        if (document.querySelector('.inc_sidebar_modal_block.active') == null) {
            document.querySelector('body').classList.remove('inc_overlay');
        }
        if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
            document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
        }
        if (productBlock.querySelector('.close_read_more') != null) {
            productBlock.querySelector('.close_read_more').click()
        }
        productBlock.parentNode.classList.remove("active");
    });

    var elImgMainImg = elImgBlock.querySelector(getSelectorClassName(classNames, "productImgMainImg"));
    var elImgTag1 = this.generateHTMLTags('img', {
        src: productObj.imageURL
    });
    if(onloadpdp == true){
        elImgTag1.src = productObj.imageURL
    }
    elImgTag1.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
    elImgTag1.setAttribute('role', 'img')
    elImgTag1.setAttribute('aria-label', 'Image')
    elImgTag1.setAttribute('alt', productObj.name)

    var productLink = document.createElement('a');

    productLink.href = productObj.url;
    productLink.appendChild(elImgTag1);
    productLink.setAttribute('otherImageList', productObj["otherImageList"])
    productLink.setAttribute('imageURL', productObj["imageURL"])
    add_swipe(productLink)



    elImgMainImg.appendChild(productLink);
    elImgMainImg.addEventListener("click", function() {
        INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-id'));
    });

    elImgGalleryListBlock.innerHTML = "";

    if ((productObj.otherImageList != null) && productObj.otherImageList.length > 1) {
        var otimg = 0
        productObj.otherImageList.forEach(function(otherImgURL) {
            var elOtherImgTag = INC.methods.generateHTMLTags('img', {
                src: otherImgURL
            });
            if(onloadpdp == true){
                elOtherImgTag.src = otherImgURL
            }
            elOtherImgTag.setAttribute('alt', productObj.name)
            elOtherImgTag.setAttribute('role', 'img')
            elOtherImgTag.setAttribute('aria-label', 'Image')
            elOtherImgTag.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");

            var elImgGalleryListItemBlock = INC.methods.getElementChilds("productImgGalleryListItemBlock", blockType);

            var elImgGalleryListItemImg = elImgGalleryListItemBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemImg"));

            elImgGalleryListItemImg.appendChild(elOtherImgTag);

            elImgGalleryListItemBlock.addEventListener("click", function() {

                Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productImgGalleryListItemBlock")), function(galleryListItemBlock) {
                    galleryListItemBlock.classList.remove("active");
                });

                elImgGalleryListItemBlock.classList.add("active");

                elImgMainImg.querySelector('img').src = otherImgURL;
                elImgMainImg.querySelector('img').setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
            })

            elImgGalleryListBlock.appendChild(elImgGalleryListItemBlock);
            if (otimg == 0) {
                elImgGalleryListItemBlock.classList.add('active')
            }
            otimg++;
            if (productObj.otherImageList.length > 5) {
                elImgGalleryListItemBlock.parentNode.classList.add("flex-start")
            }
        });
    }

    elTitleBlock.addEventListener("click", function() {
        INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-id'));
    });

    var pTitleDiv = document.createElement('div');
    pTitleDiv.innerHTML = productObj.name;

    var field1 = productObj.ratingsCount;
    // INC.methods.get_product_ratings(field1, elratingsBlock);
    var pLink = document.createElement('a');
    pLink.href = productObj.url;
    pLink.setAttribute('title', productObj.name)
    pLink.appendChild(pTitleDiv);
    elTitleText.appendChild(pLink);

    var short_desc = productObj.description;
    var deschtml = document.createElement('div')
    deschtml.innerHTML = short_desc;

    var desctext = ""
    var descrtotext = ""
    if (deschtml != null) {
        var desctext = deschtml.innerHTML.trim().replace(/&lt;br&gt;/g, '<br>').replace(/&lt;br/g, '<br>').replace('<br', '<br>').replace('>', '').split('\n')[0]
    }
    if (desctext == "") {
        if (productObj.description.replace(/&lt;br&gt;/g, '<br>').replace(/&lt;br/g, '<br>').replace('<br', '<br>').replace('>', '').split('\n')[2] != undefined) {
            if (productObj.description.replace(/&lt;br&gt;/g, '<br>').replace(/&lt;br/g, '<br>').replace('<br', '<br>').replace('>', '').split('\n')[2].length > 135) {
                if (window.innerWidth > 767) {
                    desctext = productObj.description.replace(/&lt;br&gt;/g, '<br>').replace(/&lt;br/g, '<br>').replace('<br', '<br>').replace('>', '').split('\n')[2].substring(0, 134);
                } else {
                    desctext = productObj.description.replace(/&lt;br&gt;/g, '<br>').replace(/&lt;br/g, '<br>').replace('<br', '<br>').replace('>', '').split('\n')[2].substring(0, 70);
                }
            }
        } else {
            if (productObj.description.length > 135) {
                if (window.innerWidth > 767) {
                    desctext = productObj.description.replace(/&lt;br&gt;/g, '<br>').replace(/&lt;br/g, '<br>').replace('<br', '<br>').replace('>', '').substring(0, 134);
                } else {
                    desctext = productObj.description.replace(/&lt;br&gt;/g, '<br>').replace(/&lt;br/g, '<br>').replace('<br', '<br>').replace('>', '').substring(0, 70);
                }
            }
        }
    } else {
        if (desctext.length > 130) {
            if (window.innerWidth > 767) {
                desctext = desctext.trim().substring(0, 120);
            } else {
                desctext = desctext.trim().substring(0, 70);
            }
        }
    }
    if (desctext.length > 5) {

        if (productObj.description.replace(/&lt;br&gt;/g, '<br>').replace(/&lt;br/g, '<br>').replace('>', '').length > desctext.length) {
            descheadingblock.innerText = "Description:"
            elInfoText.innerHTML = desctext + "..." + "<a class='inc_readMore' onClick='read_more_inc(this)'>Read More</a>";
        } else {
            descheadingblock.innerText = "Description:"
            elInfoText.innerHTML = desctext
        }

        elFullDesctext.innerHTML = productObj.description.replace(/&lt;br&gt;/g, '<br>').replace(/&lt;br/g, '<br>').replace('>', '');
        fulldescblock.setAttribute('aria-hidden', 'true')

        var close_read_more = document.createElement('div');
        close_read_more.classList.add('close_read_more');
        elFullDesctext.parentNode.appendChild(close_read_more)

        close_read_more.addEventListener('click', function(e) {
            var close_read_more_page = e.target.parentNode
            close_read_more_page.classList.remove('show_full_desc')
        });
    }



    var activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
    var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
    var worthPrice = parseFloat(productObj.worthPrice).toFixed(2).toString();


    // elPriceActiveMsg.innerText = " + VAT"
    elPriceRegularText.innerText = "";

    if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
        elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_price')
        elPriceActiveText.innerHTML = "<span class='now_was'>Now</span> <span class='price'>" + INC.clientConfig.currencySymbol + formatter.format(activePrice) + "</span> <span class='inc'> Inc. VAT</span>"
        elPriceRegularText.innerHTML = "<span class='now_was'>Was</span> <span class='price'>" + INC.clientConfig.regularPricePrefix + INC.clientConfig.currencySymbol +
            formatter.format(regularPrice) + "</span> <span class='inc'> Inc. VAT</span>"
    } else {
        elPriceActiveText.innerHTML = "<span class='price'>" + INC.clientConfig.currencySymbol + formatter.format(activePrice) + "</span> <span class='inc'> Inc. VAT</span>"
    }

    if (productBlock.querySelector('.pc_promo_div') == null && productObj.ProductLevelDiscountMessage != null && productObj.ProductLevelDiscountMessage != "") {
        var in_available_offer = document.createElement('div');
        in_available_offer.innerText = "Available Offer"
        in_available_offer.classList.add('in_available_offer')
        var ec_promo_div = document.createElement('div');
        ec_promo_div.classList.add('pc_promo_div')
        ec_promo_div.classList.add('active')
        var ec_promo_span = document.createElement('span');
        ec_promo_span.classList.add('pc_promo_span')

        ec_promo_span.classList.add('red_promo')
        ec_promo_span.innerHTML = productObj.ProductLevelDiscountMessage.replace("_", " ")
        ec_promo_span.setAttribute('title', productObj.ProductLevelDiscountMessage.replace("_", " "))
        ec_promo_div.appendChild(ec_promo_span);

        var elPrice_blck = getViewElement("productInfoBlock");
        var view = elPrice_blck //productPriceBlock
        if (view != null || view != undefined) {
            // view.insertBefore(ec_promo_div, view.childNodes[0]);
            view.parentNode.insertBefore(in_available_offer, view);
            view.parentNode.insertBefore(ec_promo_div, view);
        }
    } else {
        var ec_promo_div = document.createElement('div');
        ec_promo_div.classList.add('pc_promo_div')
        ec_promo_div.classList.add('empty');
        var elPrice_blck = getViewElement("productInfoBlock");
        var view = elPrice_blck //productPriceBlock
        if (view != null || view != undefined) {
            // view.insertBefore(ec_promo_div, view.childNodes[0]);
            view.parentNode.insertBefore(ec_promo_div, view);
        }
    }
    var qty_title = document.createElement('label')
    qty_title.innerText = "Quantity"
    //elQtyBlock
    elQtyBlock.parentNode.insertBefore(qty_title, elQtyBlock);
    var elQtyInput = this.generateHTMLTags('input');
    elQtyInput.setAttribute('type', "number");
    elQtyInput.setAttribute('aria-label', "quantity");
    elQtyInput.setAttribute('min', 1);
    elQtyInput.setAttribute('max', 99);
    elQtyInput.setAttribute('maxlength', 2);
    elQtyInput.setAttribute('disabled', true);
    elQtyInput.value = 1;
    elQtyInput.setAttribute('old_qty', '1');
    elQtyInput.setAttribute('pattern', '[0-9]');
    elQtyInput.setAttribute("onkeydown", "if(event.key==='.'){event.preventDefault();}");
    elQtyInput.setAttribute('onKeyPress', 'if(this.value.length==2) return false;');

    elQtyBlock.addEventListener("click", function() {
        if (productBlock.querySelector('.close_read_more') != null) {
            productBlock.querySelector('.close_read_more').click()
        }

        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productPackOfListBlock")), function(el) {
            el.classList.remove("active");
        });
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productAttSizeListBlock")), function(attSizeListBlock) {
            attSizeListBlock.classList.remove("active");
        });
        elPackOfListBlock.classList.toggle("active");
    });



    elQtyInput.addEventListener("keydown", function() {
        var prod_card = elQtyInput.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        elPackOfListBlock.classList.remove("active");
        setTimeout(function() {
            if (elQtyInput.value.length == 0) elQtyInput.value = 1;
            if (elQtyInput.value == 0) elQtyInput.value = 1;
            if (elQtyInput.value > 99) elQtyInput.value = 99;

            var productModuleBlock = productBlock.parentNode.parentNode;

            var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

            showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productQtyInputText")).querySelector('input').value = parseInt(elQtyInput.value);

            var id = productBlock.getAttribute('data-id');
            var qty = parseInt(elQtyInput.value);
            var main_id = productBlock.getAttribute('data-main_id');
            var bundle_id = productBlock.getAttribute('data-bundle_id');
            var pname = productBlock.querySelector('.inc_product_desc_title_text').innerText;
            var pprice = productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$', '');
            prod_card.querySelector('.inc_product_showcase_block .inc_product_desc_qty_input_block input').value = elQtyInput.value
            if (elAddText.innerText == "ADDED") {
                INC.methods.updateBundleCart({
                    sku: id,
                    qty: qty
                }, "add", main_id, bundle_id, pname, pprice);
            }
        }, 50);

    });

    elQtyInputText.appendChild(elQtyInput);

    elQtyDownBlock.addEventListener('click', function() {
        if (productBlock.querySelector('.close_read_more') != null) {
            productBlock.querySelector('.close_read_more').click()
        }
        var prod_card = elQtyInput.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        elQtyInput.value = (elQtyInput.value - 1 < 1) ? 1 : elQtyInput.value - 1;

        var productModuleBlock = productBlock.parentNode.parentNode;

        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

        showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productQtyInputText")).querySelector('input').value = parseInt(elQtyInput.value);
        prod_card.querySelector('.inc_product_showcase_block .inc_product_desc_qty_input_block input').value = elQtyInput.value
        var id = productBlock.getAttribute('data-id');
        var qty = parseInt(elQtyInput.value);
        var bundle_id = productBlock.getAttribute('data-bundle_id');
        var main_id = productBlock.getAttribute('data-main_id');
        var pname = productBlock.querySelector('.inc_product_desc_title_text').innerText;
        var pprice = productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$', '');
        if (elAddText.innerText == "ADDED" || elAddText.innerText == "UPDATE") {
            INC.methods.updateBundleCart({
                sku: id,
                qty: qty
            }, "add", main_id, bundle_id, pname, pprice);
        }
    });

    elQtyUpBlock.addEventListener('click', function() {
        if (productBlock.querySelector('.close_read_more') != null) {
            productBlock.querySelector('.close_read_more').click()
        }
        var prod_card = elQtyInput.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        elQtyInput.value = (parseInt(elQtyInput.value) + 1 > 99) ? 99 : parseInt(elQtyInput.value) + 1;

        var productModuleBlock = productBlock.parentNode.parentNode;

        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

        showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productQtyInputText")).querySelector('input').value = parseInt(elQtyInput.value);
        prod_card.querySelector('.inc_product_showcase_block .inc_product_desc_qty_input_block input').value = elQtyInput.value
        var id = productBlock.getAttribute('data-id');
        var qty = parseInt(elQtyInput.value);
        var bundle_id = productBlock.getAttribute('data-bundle_id');
        var main_id = productBlock.getAttribute('data-main_id');
        var pname = productBlock.querySelector('.inc_product_desc_title_text').innerText;
        var pprice = productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$', '');
        if (elAddText.innerText == "ADDED" || elAddText.innerText == "UPDATE") {
            INC.methods.updateBundleCart({
                sku: id,
                qty: qty
            }, "add", main_id, bundle_id, pname, pprice);
        }
    });

    findObj = new INC.classes.FindObj({
        mainId: productObj.mainId
    });

    if (INC.dataStore.methods().getProductColorsObj(findObj).colorArray.length == 0 && INC.dataStore.methods().getProductopt0Obj(findObj).att0Array.length == 0) {
        elHeader.querySelector(getSelectorClassName(classNames, "productHeaderTitleText")).innerText = "View Details";
    } else {
        if (INC.dataStore.methods().getProductopt0Obj(findObj).att0Array.length > 0) {
            if (INC.dataStore.methods().getProductopt0Obj(findObj).att0Array[0] != undefined) {
                elHeader.querySelector(getSelectorClassName(classNames, "productHeaderTitleText")).innerText = "Select Size";
            } else {
                elHeader.querySelector(getSelectorClassName(classNames, "productHeaderTitleText")).innerText = "Select  Colour";
            }
        } else if (INC.dataStore.methods().getProductColorsObj(findObj).colorArray.length > 0) {
            elHeader.querySelector(getSelectorClassName(classNames, "productHeaderTitleText")).innerText = "Select  Colour";
        }
    }

    var product0Obj = INC.dataStore.methods().getProductopt0Obj(findObj);

    var productSizesObj = INC.dataStore.methods().getProductSizesObj(findObj);

    var productColorsObj = INC.dataStore.methods().getProductColorsObj(findObj);

    var product3Obj = INC.dataStore.methods().getProductopt3Obj(findObj);

    var product4Obj = INC.dataStore.methods().getProductopt4Obj(findObj);



    if (product0Obj.att0Array.length > 0) {
        if (product0Obj["att0Array"][0].code != "color") {
            findObj = new INC.classes.FindObj({
                mainId: productObj.mainId
            });
            elAtt0ListBlock.innerHTML = "";
            var product0Obj = product0Obj;
            var productSizeText = "";
            if (product0Obj["att0Array"].length > 0) {
                elAtt0TitleText.innerText = product0Obj["att0Array"][0].code;
                elAtt0Block.classList.add("active");
                product0Obj["att0Array"].forEach(function(sizeObj) {
                    var attSizeBlock0 = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttSizeListItemBlock"]
                    });
                    var attSizeImgBlock0 = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttSizeListItemImgBlock"]
                    });
                    var attSizeImg0 = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttSizeListItemImg"]
                    });
                    attSizeImgBlock0.addEventListener("click", function(e) {
                        var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                        var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                        var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
                        var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                        if (atteditbutton != null) {
                            atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                            atteditbutton.innerText = "Edit"
                        }


                        if (productBlock.querySelector('.close_read_more') != null) {
                            productBlock.querySelector('.close_read_more').click()
                        }
                        var attr_text = this.getAttribute("data-size");

                        elAttBlock.setAttribute("data-zero", attr_text);

                        if (atteditbutton != null) {
                            atteditbutton.parentNode.classList.add('active')
                        }

                        var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_size_list_item_img_block')

                        for (cl = 0; cl < all_color_list_item_img.length; cl++) {
                            all_color_list_item_img[cl].classList.remove("active");
                        }

                        this.classList.add("active");

                        elAtt0TitleTextSelected.innerText = attr_text;

                        var sel_size = elAttBlock.getAttribute('data-size')
                        findObj = new INC.classes.FindObj({
                            mainId: productObj.mainId,
                            colorText: attr_text
                        });
                        findObj.sizeText = sel_size
                        elAttSizeListBlock.innerHTML = "";

                        var productSizesObj = INC.dataStore.methods().getProductSizesObj(findObj, this);

                        if (productSizesObj["sizeArray"][0] != undefined) {
                            if (productSizesObj["sizeArray"][0].code == "color") {
                                productColorsObj = INC.dataStore.methods().getProductSizesObj(findObj, this);
                                productSizesObj = INC.dataStore.methods().getProductColorsObj(findObj, this);
                            }
                        }
                        var productSizeText = "";

                        if (productSizesObj["sizeArray"].length > 0) {
                            elAttSizeBlock.classList.add("active");

                            productSizesObj["sizeArray"].forEach(function(sizeObj) {
                                var attSizeBlock = INC.methods.generateHTMLTags('div', {
                                    class: classNames["productAttSizeListItemBlock"]
                                });
                                var attSizeImgBlock = INC.methods.generateHTMLTags('div', {
                                    class: classNames["productAttSizeListItemImgBlock"]
                                });
                                var attSizeImg = INC.methods.generateHTMLTags('div', {
                                    class: classNames["productAttSizeListItemImg"]
                                });

                                attSizeImgBlock.addEventListener("click", function() {
                                    var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                                    var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                                    var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
                                    var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                                    if (atteditbutton != null) {
                                        atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                                        atteditbutton.innerText = "Edit"
                                    }


                                    if (productBlock.querySelector('.close_read_more') != null) {
                                        productBlock.querySelector('.close_read_more').click()
                                    }
                                    var attr_text = this.getAttribute("data-size")
                                    elAttSizeBlock.classList.add("active");
                                    elAttSizeTitleTextSelected.innerText = attr_text;
                                    elAttBlock.setAttribute("data-size", attr_text);

                                    if (atteditbutton != null) {
                                        atteditbutton.parentNode.classList.add('active')
                                    }

                                    var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_size_list_item_img_block')

                                    for (cl = 0; cl < all_color_list_item_img.length; cl++) {
                                        all_color_list_item_img[cl].classList.remove("active");
                                    }

                                    this.classList.add("active");
                                    var sel_size = elAttBlock.getAttribute('data-size')
                                    findObj = new INC.classes.FindObj({
                                        mainId: productObj.mainId,
                                        colorText: attr_text
                                    });
                                    findObj.sizeText = sel_size

                                    findObj = new INC.classes.FindObj({
                                        mainId: productObj.mainId,
                                        colorText: "",
                                        sizeText: attr_text
                                    });
                                    elAttColorListBlock.innerHTML = "";
                                    var productColorsObj = INC.dataStore.methods().getProductColorsObj(findObj, this);

                                    var productColorText = "";

                                    if (productColorsObj["colorArray"].length > 0) {
                                        elAttColorBlock.classList.add("active");

                                        productColorsObj["colorArray"].forEach(function(colorObj) {


                                            var attColorBlock = INC.methods.generateHTMLTags('div', {
                                                class: classNames["productAttColorListItemBlock"]
                                            })
                                            var attColorImgBlock = INC.methods.generateHTMLTags('div', {
                                                class: classNames["productAttColorListItemImgBlock"]
                                            });
                                            var attColorImg = INC.methods.generateHTMLTags('div', {
                                                class: classNames["productAttColorListItemImg"]
                                            });
                                            var attColorTextBlock = INC.methods.generateHTMLTags('div', {
                                                class: classNames["productAttColorListItemTextBlock"]
                                            });
                                            var attColorText = INC.methods.generateHTMLTags('div', {
                                                class: classNames["productAttColorListItemText"]
                                            });


                                            attColorImgBlock.addEventListener("click", function() {
                                                var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                                                var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                                                var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
                                                var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                                                if (atteditbutton != null) {
                                                    atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                                                    atteditbutton.innerText = "Edit"
                                                }


                                                if (productBlock.querySelector('.close_read_more') != null) {
                                                    productBlock.querySelector('.close_read_more').click()
                                                }
                                                var colorText = this.getAttribute("data-color")
                                                elAttBlock.setAttribute("data-color", colorText);

                                                if (atteditbutton != null) {
                                                    atteditbutton.parentNode.classList.add('active')
                                                }

                                                var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_color_list_item_img')

                                                for (cl = 0; cl < all_color_list_item_img.length; cl++) {
                                                    all_color_list_item_img[cl].parentNode.parentNode.classList.remove("active");
                                                }

                                                this.parentNode.classList.add("active");
                                                elAttColorTitleTextSelected.innerText = colorText;
                                                //third
                                                var sel_size = elAttBlock.getAttribute('data-size')
                                                findObj = new INC.classes.FindObj({
                                                    mainId: productObj.mainId,
                                                    colorText: attr_text
                                                });
                                                findObj.sizeText = sel_size
                                                elAtt3ListBlock.innerHTML = "";

                                                var product3rdObj = INC.dataStore.methods().getProductopt3Obj(findObj, this);
                                                if (product3rdObj["att3Array"].length > 0) {
                                                    elAttSizeBlock.classList.add("active");

                                                    product3rdObj["att3Array"].forEach(function(sizeObj) {
                                                        var attSizeBlock3 = INC.methods.generateHTMLTags('div', {
                                                            class: classNames["productAttthirdListItemBlock"]
                                                        });
                                                        var attSizeImgBlock3 = INC.methods.generateHTMLTags('div', {
                                                            class: classNames["productAttthirdListItemImgBlock"]
                                                        });
                                                        var attSizeImg3 = INC.methods.generateHTMLTags('div', {
                                                            class: classNames["productAttthirdListItemImg"]
                                                        });

                                                        attSizeImgBlock3.addEventListener("click", function() {
                                                            var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                                                            var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                                                            var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
                                                            var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                                                            if (atteditbutton != null) {
                                                                atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                                                                atteditbutton.innerText = "Edit"
                                                            }


                                                            if (productBlock.querySelector('.close_read_more') != null) {
                                                                productBlock.querySelector('.close_read_more').click()
                                                            }
                                                            var attr_text = this.getAttribute("data-size")

                                                            elAttBlock.setAttribute("data-third", attr_text);

                                                            if (atteditbutton != null) {
                                                                atteditbutton.parentNode.classList.add('active')
                                                            }

                                                            var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_third_list_item_img_block')

                                                            for (cl = 0; cl < all_color_list_item_img.length; cl++) {
                                                                all_color_list_item_img[cl].classList.remove("active");
                                                            }
                                                            var attr_text = this.getAttribute("data-size")
                                                            this.classList.add("active");
                                                            elAtt3TitleTextSelected.innerText = attr_text;;

                                                            INC.methods.updateProductBlock(productBlock, findObj, blockType);

                                                            var productModuleBlock = productBlock.parentNode.parentNode;

                                                            var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                                                            INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                                                            var size_text = ""

                                                        });

                                                        if (productSizeText.length == 0) {
                                                            productSizeText = sizeObj["text"];
                                                        }

                                                        attSizeImg3.innerText = sizeObj["text"];
                                                        attSizeImgBlock3.setAttribute('data-size', sizeObj["text"]);
                                                        attSizeImgBlock3.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                                                        attSizeImgBlock3.setAttribute('data-option', "3");
                                                        attSizeImgBlock3.appendChild(attSizeImg3);
                                                        elAtt3ListBlock.appendChild(attSizeImgBlock3);
                                                        if (attSizeImgBlock3.getAttribute('data-size').toLocaleLowerCase() == elAttSizeBlock.querySelector('.inc_product_desc_att_size_title_text_selected').innerText.toLocaleLowerCase()) {
                                                            attSizeImgBlock3.classList.add('active')
                                                        }
                                                    });
                                                    var third_el_bl = elAtt3ListBlock.querySelector(getSelectorClassName(classNames, "productAttthirdListItemImgBlock"))
                                                    //                        
                                                    if (third_el_bl.parentNode.querySelector('.inc_product_desc_att_third_list_item_img_block.active') == null) {
                                                        third_el_bl.click();
                                                    }
                                                }
                                                //end 

                                                INC.methods.updateProductBlock(productBlock, findObj, blockType);

                                                var productModuleBlock = productBlock.parentNode.parentNode;

                                                var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                                                INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                                                var zero_text = elAttBlock.getAttribute('data-zero');
                                                var size_text = elAttBlock.getAttribute('data-size');
                                                var color_text = elAttBlock.getAttribute('data-color');
                                                var third_text = elAttBlock.getAttribute('data-third');

                                                var sel_attr_text = ""
                                                if (color_text != undefined) {
                                                    sel_attr_text = color_text
                                                }
                                                if (zero_text != undefined) {
                                                    if (sel_attr_text == "") {
                                                        sel_attr_text = zero_text
                                                    } else {
                                                        sel_attr_text = sel_attr_text + " / " + zero_text
                                                    }
                                                }
                                                if (size_text != undefined) {
                                                    sel_attr_text = sel_attr_text + " / " + size_text
                                                }
                                                if (third_text != undefined) {
                                                    sel_attr_text = sel_attr_text + " / " + third_text
                                                }
                                                var pr_mod_elm = productBlock.parentNode.parentNode
                                                if (pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != "") {
                                                    pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').innerText = sel_attr_text
                                                    pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title', sel_attr_text)
                                                }

                                                productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText = ""
                                            });

                                            attColorImg.style.backgroundColor = colorObj["colorCode"];


                                            if (colorObj["imgSrc"].length > 0) {
                                                if (colorObj["colorCode"] == "") {
                                                    var colorImg = INC.methods.generateHTMLTags('img');
                                                    colorImg.setAttribute('alt', colorObj["text"])
                                                    colorImg.style.backgroundImage = "url('" + colorObj["imgSrc"] + "')";
                                                    if (productObj.categoryName != "") {
                                                        colorImg.classList.add(productObj.categoryName.replace(/\s/g, ''))
                                                    }
                                                    attColorImg.appendChild(colorImg);
                                                }
                                            }

                                            var colorTitle = INC.methods.generateHTMLTags('a');
                                            colorTitle.innerText = colorObj["text"]
                                            colorTitle.title = colorObj["text"];
                                            colorTitle.addEventListener('click', function(e) {
                                                e.preventDefault();
                                            })
                                            attColorImg.appendChild(colorTitle);
                                            attColorImgBlock.setAttribute('data-color', colorObj["text"]);
                                            attColorImgBlock.setAttribute("datacolor", colorObj["text"].toLocaleLowerCase());
                                            attColorImgBlock.setAttribute('data-option', "0");
                                            var colorSwatchImgDiv = document.createElement('div');
                                            colorSwatchImgDiv.style.backgroundColor = colorObj["colorCode"];

                                            if (colorObj["imgSrc"].length > 0) {
                                                var colorSwatchImg = INC.methods.generateHTMLTags('img', {
                                                    src: colorObj["imgSrc"]
                                                });
                                                colorSwatchImg.setAttribute('alt', colorObj["text"])
                                                colorSwatchImgDiv.appendChild(colorSwatchImg);
                                            }
                                            attColorImgBlock.appendChild(attColorImg);
                                            attColorBlock.appendChild(attColorImgBlock);
                                            elAttColorListBlock.appendChild(attColorBlock);
                                            if (elAttColorListBlock.parentNode.querySelector('.inc_product_desc_att_color_title_text_selected').innerText.toLocaleLowerCase() == colorObj.text.toLocaleLowerCase()) {
                                                attColorBlock.classList.add('active');
                                                color_text_edt = colorObj.text
                                            }
                                        });
                                        var color_el_bl = elAttColorListBlock.querySelector(getSelectorClassName(classNames, "productAttColorListItemImgBlock"))
                                        //                        
                                        if (color_el_bl.parentNode.parentNode.querySelector('.inc_product_desc_att_color_list_item_block.active') == null) {
                                            color_el_bl.click();
                                        }

                                    }

                                    //third
                                    var sel_size = elAttBlock.getAttribute('data-size')
                                    findObj = new INC.classes.FindObj({
                                        mainId: productObj.mainId,
                                        colorText: attr_text
                                    });
                                    findObj.sizeText = sel_size
                                    elAtt3ListBlock.innerHTML = "";

                                    var product3rdObj = INC.dataStore.methods().getProductopt3Obj(findObj, this);
                                    if (product3rdObj["att3Array"].length > 0) {
                                        elAttSizeBlock.classList.add("active");

                                        product3rdObj["att3Array"].forEach(function(sizeObj) {
                                            var attSizeBlock3 = INC.methods.generateHTMLTags('div', {
                                                class: classNames["productAttthirdListItemBlock"]
                                            });
                                            var attSizeImgBlock3 = INC.methods.generateHTMLTags('div', {
                                                class: classNames["productAttthirdListItemImgBlock"]
                                            });
                                            var attSizeImg3 = INC.methods.generateHTMLTags('div', {
                                                class: classNames["productAttthirdListItemImg"]
                                            });

                                            attSizeImgBlock3.addEventListener("click", function() {
                                                var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                                                var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                                                var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
                                                var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                                                if (atteditbutton != null) {
                                                    atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                                                    atteditbutton.innerText = "Edit"
                                                }


                                                if (productBlock.querySelector('.close_read_more') != null) {
                                                    productBlock.querySelector('.close_read_more').click()
                                                }
                                                var attr_text = this.getAttribute("data-size")

                                                elAttBlock.setAttribute("data-third", attr_text);

                                                if (atteditbutton != null) {
                                                    atteditbutton.parentNode.classList.add('active')
                                                }

                                                var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_third_list_item_img_block')

                                                for (cl = 0; cl < all_color_list_item_img.length; cl++) {
                                                    all_color_list_item_img[cl].classList.remove("active");
                                                }
                                                var attr_text = this.getAttribute("data-size")
                                                this.classList.add("active");
                                                elAtt3TitleTextSelected.innerText = attr_text;;

                                                INC.methods.updateProductBlock(productBlock, findObj, blockType);

                                                var productModuleBlock = productBlock.parentNode.parentNode;

                                                var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                                                INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                                                var size_text = ""

                                            });

                                            if (productSizeText.length == 0) {
                                                productSizeText = sizeObj["text"];
                                            }

                                            attSizeImg3.innerText = sizeObj["text"];
                                            attSizeImgBlock3.setAttribute('data-size', sizeObj["text"]);
                                            attSizeImgBlock3.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                                            attSizeImgBlock3.setAttribute('data-option', "3");
                                            attSizeImgBlock3.appendChild(attSizeImg3);
                                            elAtt3ListBlock.appendChild(attSizeImgBlock3);
                                            if (attSizeImgBlock3.getAttribute('data-size').toLocaleLowerCase() == elAttSizeBlock.querySelector('.inc_product_desc_att_size_title_text_selected').innerText.toLocaleLowerCase()) {
                                                attSizeImgBlock3.classList.add('active')
                                            }
                                        });
                                        var third_el_bl = elAtt3ListBlock.querySelector(getSelectorClassName(classNames, "productAttthirdListItemImgBlock"))
                                        //                        
                                        if (third_el_bl.parentNode.querySelector('.inc_product_desc_att_third_list_item_img_block.active') == null) {
                                            third_el_bl.click();
                                        }
                                    }
                                    //end 

                                    INC.methods.updateProductBlock(productBlock, findObj, blockType);

                                    var productModuleBlock = productBlock.parentNode.parentNode;

                                    var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                                    INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                                    var zero_text = elAttBlock.getAttribute('data-zero');
                                    var size_text = elAttBlock.getAttribute('data-size');
                                    var color_text = elAttBlock.getAttribute('data-color');
                                    var third_text = elAttBlock.getAttribute('data-third');

                                    var sel_attr_text = ""
                                    if (color_text != undefined) {
                                        sel_attr_text = color_text
                                    }
                                    if (zero_text != undefined) {
                                        if (sel_attr_text == "") {
                                            sel_attr_text = zero_text
                                        } else {
                                            if (sel_attr_text == "") {
                                                sel_attr_text = zero_text
                                            } else {
                                                sel_attr_text = sel_attr_text + " / " + zero_text
                                            }
                                        }
                                    }
                                    if (size_text != undefined) {
                                        sel_attr_text = sel_attr_text + " / " + size_text
                                    }
                                    if (third_text != undefined) {
                                        sel_attr_text = sel_attr_text + " / " + third_text
                                    }
                                    var pr_mod_elm = productBlock.parentNode.parentNode
                                    if (pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != "") {
                                        pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').innerText = sel_attr_text
                                        pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title', sel_attr_text)
                                    }

                                    productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText = ""
                                });

                                if (productSizeText.length == 0) {
                                    productSizeText = sizeObj["text"];
                                }

                                attSizeImg.innerText = sizeObj["text"];
                                attSizeImgBlock.setAttribute('data-size', sizeObj["text"]);
                                attSizeImgBlock.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                                attSizeImgBlock.setAttribute('data-option', "2");
                                attSizeImgBlock.appendChild(attSizeImg);
                                elAttSizeListBlock.appendChild(attSizeImgBlock);
                                if (attSizeImgBlock.getAttribute('data-size').toLocaleLowerCase() == elAttSizeBlock.querySelector('.inc_product_desc_att_size_title_text_selected').innerText.toLocaleLowerCase()) {
                                    attSizeImgBlock.classList.add('active')
                                }
                            });
                            var size_el_bl = elAttSizeListBlock.querySelector(getSelectorClassName(classNames, "productAttSizeListItemImgBlock"))
                            //                        
                            if (size_el_bl.parentNode.querySelector('.inc_product_desc_att_size_list_item_img_block.active') == null) {
                                size_el_bl.click();
                            }

                        }

                        findObj = new INC.classes.FindObj({
                            mainId: productObj.mainId,
                            colorText: "",
                            sizeText: attr_text
                        });

                        elAttColorListBlock.innerHTML = "";
                        var productSizesObj = INC.dataStore.methods().getProductSizesObj(findObj, this);
                        var productColorsObj = INC.dataStore.methods().getProductColorsObj(findObj, this);
                        var productColorText = "";

                        if (productColorsObj["colorArray"].length > 0) {
                            elAttColorBlock.classList.add("active");

                            productColorsObj["colorArray"].forEach(function(colorObj) {


                                var attColorBlock = INC.methods.generateHTMLTags('div', {
                                    class: classNames["productAttColorListItemBlock"]
                                })
                                var attColorImgBlock = INC.methods.generateHTMLTags('div', {
                                    class: classNames["productAttColorListItemImgBlock"]
                                });
                                var attColorImg = INC.methods.generateHTMLTags('div', {
                                    class: classNames["productAttColorListItemImg"]
                                });
                                var attColorTextBlock = INC.methods.generateHTMLTags('div', {
                                    class: classNames["productAttColorListItemTextBlock"]
                                });
                                var attColorText = INC.methods.generateHTMLTags('div', {
                                    class: classNames["productAttColorListItemText"]
                                });


                                attColorImgBlock.addEventListener("click", function() {
                                    var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                                    var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                                    var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
                                    var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                                    if (atteditbutton != null) {
                                        atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                                        atteditbutton.innerText = "Edit"
                                    }


                                    if (productBlock.querySelector('.close_read_more') != null) {
                                        productBlock.querySelector('.close_read_more').click()
                                    }
                                    var colorText = this.getAttribute("data-color")
                                    elAttBlock.setAttribute("data-color", colorText);

                                    if (atteditbutton != null) {
                                        atteditbutton.parentNode.classList.add('active')
                                    }

                                    var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_color_list_item_img')

                                    for (cl = 0; cl < all_color_list_item_img.length; cl++) {
                                        all_color_list_item_img[cl].parentNode.parentNode.classList.remove("active");
                                    }

                                    this.parentNode.classList.add("active");

                                    elAttColorTitleTextSelected.innerText = colorText;
                                    //third
                                    var sel_size = elAttBlock.getAttribute('data-size')
                                    findObj = new INC.classes.FindObj({
                                        mainId: productObj.mainId,
                                        colorText: colorText
                                    });
                                    // findObj.sizeText=sel_size
                                    elAtt3ListBlock.innerHTML = "";

                                    var product3rdObj = INC.dataStore.methods().getProductopt3Obj(findObj, this);
                                    if (product3rdObj["att3Array"].length > 0) {
                                        elAttSizeBlock.classList.add("active");

                                        product3rdObj["att3Array"].forEach(function(sizeObj) {
                                            var attSizeBlock3 = INC.methods.generateHTMLTags('div', {
                                                class: classNames["productAttthirdListItemBlock"]
                                            });
                                            var attSizeImgBlock3 = INC.methods.generateHTMLTags('div', {
                                                class: classNames["productAttthirdListItemImgBlock"]
                                            });
                                            var attSizeImg3 = INC.methods.generateHTMLTags('div', {
                                                class: classNames["productAttthirdListItemImg"]
                                            });

                                            attSizeImgBlock3.addEventListener("click", function() {
                                                var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                                                var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                                                var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
                                                var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                                                if (atteditbutton != null) {
                                                    atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                                                    atteditbutton.innerText = "Edit"
                                                }


                                                if (productBlock.querySelector('.close_read_more') != null) {
                                                    productBlock.querySelector('.close_read_more').click()
                                                }
                                                var attr_text = this.getAttribute("data-size")

                                                elAttBlock.setAttribute("data-third", attr_text);

                                                if (atteditbutton != null) {
                                                    atteditbutton.parentNode.classList.add('active')
                                                }

                                                var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_third_list_item_img_block')

                                                for (cl = 0; cl < all_color_list_item_img.length; cl++) {
                                                    all_color_list_item_img[cl].classList.remove("active");
                                                }
                                                var attr_text = this.getAttribute("data-size")
                                                this.classList.add("active");
                                                elAtt3TitleTextSelected.innerText = attr_text;;

                                                INC.methods.updateProductBlock(productBlock, findObj, blockType);

                                                var productModuleBlock = productBlock.parentNode.parentNode;

                                                var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                                                INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                                                var size_text = ""

                                            });

                                            if (productSizeText.length == 0) {
                                                productSizeText = sizeObj["text"];
                                            }

                                            attSizeImg3.innerText = sizeObj["text"];
                                            attSizeImgBlock3.setAttribute('data-size', sizeObj["text"]);
                                            attSizeImgBlock3.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                                            attSizeImgBlock3.setAttribute('data-option', "3");
                                            attSizeImgBlock3.appendChild(attSizeImg3);
                                            elAtt3ListBlock.appendChild(attSizeImgBlock3);
                                            if (attSizeImgBlock3.getAttribute('data-size').toLocaleLowerCase() == elAttSizeBlock.querySelector('.inc_product_desc_att_size_title_text_selected').innerText.toLocaleLowerCase()) {
                                                attSizeImgBlock3.classList.add('active')
                                            }
                                        });
                                        var third_el_bl = elAtt3ListBlock.querySelector(getSelectorClassName(classNames, "productAttthirdListItemImgBlock"))
                                        //                        
                                        if (third_el_bl.parentNode.querySelector('.inc_product_desc_att_third_list_item_img_block.active') == null) {
                                            third_el_bl.click();
                                        }
                                    }
                                    //end 

                                    INC.methods.updateProductBlock(productBlock, findObj, blockType);

                                    var productModuleBlock = productBlock.parentNode.parentNode;

                                    var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                                    INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                                    var zero_text = elAttBlock.getAttribute('data-zero');
                                    var size_text = elAttBlock.getAttribute('data-size');
                                    var color_text = elAttBlock.getAttribute('data-color');
                                    var third_text = elAttBlock.getAttribute('data-third');

                                    var sel_attr_text = ""
                                    if (color_text != undefined) {
                                        sel_attr_text = color_text
                                    }
                                    if (zero_text != undefined) {
                                        if (sel_attr_text == "") {
                                            sel_attr_text = zero_text
                                        } else {
                                            if (sel_attr_text == "") {
                                                sel_attr_text = zero_text
                                            } else {
                                                sel_attr_text = sel_attr_text + " / " + zero_text
                                            }
                                        }
                                    }
                                    if (size_text != undefined) {
                                        sel_attr_text = sel_attr_text + " / " + size_text
                                    }
                                    if (third_text != undefined) {
                                        sel_attr_text = sel_attr_text + " / " + third_text
                                    }
                                    var pr_mod_elm = productBlock.parentNode.parentNode
                                    if (pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != "") {
                                        pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').innerText = sel_attr_text
                                        pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title', sel_attr_text)
                                    }
                                    productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText = ""
                                });

                                attColorImg.style.backgroundColor = colorObj["colorCode"];


                                if (colorObj["imgSrc"].length > 0) {
                                    if (colorObj["colorCode"] == "") {
                                        //{ src: colorObj["imgSrc"] }
                                        var colorImg = INC.methods.generateHTMLTags('img');
                                        colorImg.setAttribute('alt', colorObj["text"])
                                        colorImg.style.backgroundImage = "url('" + colorObj["imgSrc"] + "')";
                                        if (productObj.categoryName != "") {
                                            colorImg.classList.add(productObj.categoryName.replace(/\s/g, ''))
                                        }
                                        //
                                        attColorImg.appendChild(colorImg);
                                    }
                                }

                                var colorTitle = INC.methods.generateHTMLTags('a');
                                colorTitle.innerText = colorObj["text"]
                                colorTitle.title = colorObj["text"];
                                colorTitle.addEventListener('click', function(e) {
                                    e.preventDefault();
                                })
                                attColorImg.appendChild(colorTitle);
                                // attSelColorImg.style.backgroundImage = "url(" + colorObj["imgSrc"] + ")";
                                attColorImgBlock.setAttribute('data-color', colorObj["text"]);
                                attColorImgBlock.setAttribute("datacolor", colorObj["text"].toLocaleLowerCase());
                                attColorImgBlock.setAttribute('data-option', "0");
                                var colorSwatchImgDiv = document.createElement('div');
                                colorSwatchImgDiv.style.backgroundColor = colorObj["colorCode"];

                                if (colorObj["imgSrc"].length > 0) {
                                    var colorSwatchImg = INC.methods.generateHTMLTags('img', {
                                        src: colorObj["imgSrc"]
                                    });
                                    colorSwatchImg.setAttribute('alt', colorObj["text"])
                                    colorSwatchImgDiv.appendChild(colorSwatchImg);
                                }
                                // elImgColorSwatch.appendChild(colorSwatchImgDiv);
                                attColorImgBlock.appendChild(attColorImg);
                                attColorBlock.appendChild(attColorImgBlock);
                                elAttColorListBlock.appendChild(attColorBlock);
                                if (elAttColorListBlock.parentNode.querySelector('.inc_product_desc_att_color_title_text_selected').innerText.toLocaleLowerCase() == colorObj.text.toLocaleLowerCase()) {
                                    attColorBlock.classList.add('active');
                                    color_text_edt = colorObj.text
                                    // attColorBlock.querySelector('.inc_product_desc_att_color_list_item_img').click()
                                }
                            });
                            var color_el_bl = elAttColorListBlock.querySelector(getSelectorClassName(classNames, "productAttColorListItemImgBlock"))
                            //                        
                            if (color_el_bl.parentNode.parentNode.querySelector('.inc_product_desc_att_color_list_item_block.active') == null) {
                                color_el_bl.click();
                            }

                        }

                        //third

                        findObj = new INC.classes.FindObj({
                            mainId: productObj.mainId,
                            colorText: attr_text
                        });
                        var sel_size = elAttBlock.getAttribute('data-size')
                        findObj.sizeText = sel_size
                        elAtt3ListBlock.innerHTML = "";

                        var product3rdObj = INC.dataStore.methods().getProductopt3Obj(findObj, this);
                        if (product3rdObj["att3Array"].length > 0) {
                            elAttSizeBlock.classList.add("active");

                            product3rdObj["att3Array"].forEach(function(sizeObj) {
                                var attSizeBlock3 = INC.methods.generateHTMLTags('div', {
                                    class: classNames["productAttthirdListItemBlock"]
                                });
                                var attSizeImgBlock3 = INC.methods.generateHTMLTags('div', {
                                    class: classNames["productAttthirdListItemImgBlock"]
                                });
                                var attSizeImg3 = INC.methods.generateHTMLTags('div', {
                                    class: classNames["productAttthirdListItemImg"]
                                });

                                attSizeImgBlock3.addEventListener("click", function() {
                                    var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                                    var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                                    var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
                                    var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                                    if (atteditbutton != null) {
                                        atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                                        atteditbutton.innerText = "Edit"
                                    }


                                    if (productBlock.querySelector('.close_read_more') != null) {
                                        productBlock.querySelector('.close_read_more').click()
                                    }
                                    var attr_text = this.getAttribute("data-size")

                                    elAttBlock.setAttribute("data-third", attr_text);

                                    if (atteditbutton != null) {
                                        atteditbutton.parentNode.classList.add('active')
                                    }

                                    var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_third_list_item_img_block')

                                    for (cl = 0; cl < all_color_list_item_img.length; cl++) {
                                        all_color_list_item_img[cl].classList.remove("active");
                                    }
                                    var attr_text = this.getAttribute("data-size")
                                    this.classList.add("active");
                                    elAtt3TitleTextSelected.innerText = attr_text;;

                                    INC.methods.updateProductBlock(productBlock, findObj, blockType);

                                    var productModuleBlock = productBlock.parentNode.parentNode;

                                    var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                                    INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                                    var size_text = ""

                                });

                                if (productSizeText.length == 0) {
                                    productSizeText = sizeObj["text"];
                                }

                                attSizeImg3.innerText = sizeObj["text"];
                                attSizeImgBlock3.setAttribute('data-size', sizeObj["text"]);
                                attSizeImgBlock3.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                                attSizeImgBlock3.setAttribute('data-option', "3");
                                attSizeImgBlock3.appendChild(attSizeImg3);
                                elAtt3ListBlock.appendChild(attSizeImgBlock3);
                                if (attSizeImgBlock3.getAttribute('data-size').toLocaleLowerCase() == elAttSizeBlock.querySelector('.inc_product_desc_att_size_title_text_selected').innerText.toLocaleLowerCase()) {
                                    attSizeImgBlock3.classList.add('active')
                                }
                            });
                            var third_el_bl = elAtt3ListBlock.querySelector(getSelectorClassName(classNames, "productAttthirdListItemImgBlock"))
                            //                        
                            if (third_el_bl.parentNode.querySelector('.inc_product_desc_att_third_list_item_img_block.active') == null) {
                                third_el_bl.click();
                            }
                        }
                        //end 

                        INC.methods.updateProductBlock(productBlock, findObj, blockType);

                        var productModuleBlock = productBlock.parentNode.parentNode;

                        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                        INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                        var zero_text = elAttBlock.getAttribute('data-zero');
                        var size_text = elAttBlock.getAttribute('data-size');
                        var color_text = elAttBlock.getAttribute('data-color');
                        var third_text = elAttBlock.getAttribute('data-third');

                        var sel_attr_text = ""
                        if (color_text != undefined) {
                            sel_attr_text = color_text
                        }
                        if (zero_text != undefined) {
                            if (sel_attr_text == "") {
                                sel_attr_text = zero_text
                            } else {
                                sel_attr_text = sel_attr_text + " / " + zero_text
                            }
                        }
                        if (size_text != undefined) {
                            sel_attr_text = sel_attr_text + " / " + size_text
                        }
                        if (third_text != undefined) {
                            sel_attr_text = sel_attr_text + " / " + third_text
                        }
                        var pr_mod_elm = productBlock.parentNode.parentNode
                        if (pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != "") {
                            pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').innerText = sel_attr_text
                            pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title', sel_attr_text)
                        }

                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText = ""

                    });

                    attSizeImgBlock0.classList.add('avail')
                    if (productSizeText.length == 0) {
                        productSizeText = sizeObj["text"];
                    }
                    var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|XX|XXXXL|2XL|3XL|4XL$');
                    var chckType = sizeObj["text"];

                    reg.test(chckType);


                    attSizeImg0.innerText = sizeObj["text"];
                    attSizeImgBlock0.setAttribute('data-size', sizeObj["text"]);
                    attSizeImgBlock0.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                    attSizeImgBlock0.setAttribute('data-option', "1");
                    if (product0Obj["att0Array"][0].code == "size") {
                        attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                    } else if (product0Obj["att0Array"][0].code == "letter") {
                        attSizeImgBlock0.setAttribute('title', "Letter" + " " + sizeObj["text"].toUpperCase());
                    } else if (product0Obj["att0Array"][0].code == "choose") {
                        attSizeImgBlock0.setAttribute('title', "Number " + sizeObj["text"].toUpperCase());
                    } else {
                        attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
                    }

                    attSizeImgBlock0.appendChild(attSizeImg0);
                    elAtt0ListBlock.appendChild(attSizeImgBlock0);

                });

            }
        }
    }

    if (productSizesObj.sizeArray.length > 0) {
        if (productSizesObj["sizeArray"][0].code != "color") {
            findObj = new INC.classes.FindObj({
                mainId: productObj.mainId
            });

            elAttSizeListBlock.innerHTML = "";
            var productSizeText = "";

            if (productSizesObj["sizeArray"].length > 0) {
                elAttSizeTitleText.innerText = productSizesObj["sizeArray"][0].code.toUpperCase();
                elAttSizeBlock.classList.add("active");
                productSizesObj["sizeArray"].forEach(function(sizeObj) {

                    var attSizeBlock = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttSizeListItemBlock"]
                    });
                    var attSizeImgBlock = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttSizeListItemImgBlock"]
                    });
                    var attSizeImg = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttSizeListItemImg"]
                    });

                    attSizeImgBlock.classList.add('avail')

                    attSizeImgBlock.addEventListener("click", function() {
                        var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                        var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                        var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
                        var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                        if (atteditbutton != null) {
                            atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                            atteditbutton.innerText = "Edit"
                        }


                        if (productBlock.querySelector('.close_read_more') != null) {
                            productBlock.querySelector('.close_read_more').click()
                        }
                        var attr_text = this.getAttribute("data-size")
                        elAttSizeBlock.classList.add("active");
                        elAttSizeTitleTextSelected.innerText = attr_text;
                        elAttBlock.setAttribute("data-size", attr_text);

                        if (atteditbutton != null) {
                            atteditbutton.parentNode.classList.add('active')
                        }

                        var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_size_list_item_img_block')

                        for (cl = 0; cl < all_color_list_item_img.length; cl++) {
                            all_color_list_item_img[cl].classList.remove("active");
                        }

                        this.classList.add("active");
                        var sel_size = elAttBlock.getAttribute('data-size')
                        findObj = new INC.classes.FindObj({
                            mainId: productObj.mainId,
                            colorText: attr_text
                        });
                        findObj.sizeText = sel_size

                        findObj = new INC.classes.FindObj({
                            mainId: productObj.mainId,
                            colorText: "",
                            sizeText: attr_text
                        });
                        elAttColorListBlock.innerHTML = "";
                        var productColorsObj = INC.dataStore.methods().getProductColorsObj(findObj);

                        var productColorText = "";

                        if (productColorsObj["colorArray"].length > 0) {
                            elAttColorBlock.classList.add("active");

                            productColorsObj["colorArray"].forEach(function(colorObj) {


                                var attColorBlock = INC.methods.generateHTMLTags('div', {
                                    class: classNames["productAttColorListItemBlock"]
                                })
                                var attColorImgBlock = INC.methods.generateHTMLTags('div', {
                                    class: classNames["productAttColorListItemImgBlock"]
                                });
                                var attColorImg = INC.methods.generateHTMLTags('div', {
                                    class: classNames["productAttColorListItemImg"]
                                });
                                var attColorTextBlock = INC.methods.generateHTMLTags('div', {
                                    class: classNames["productAttColorListItemTextBlock"]
                                });
                                var attColorText = INC.methods.generateHTMLTags('div', {
                                    class: classNames["productAttColorListItemText"]
                                });


                                attColorImgBlock.addEventListener("click", function() {
                                    var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                                    var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                                    var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
                                    var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                                    if (atteditbutton != null) {
                                        atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                                        atteditbutton.innerText = "Edit"
                                    }


                                    if (productBlock.querySelector('.close_read_more') != null) {
                                        productBlock.querySelector('.close_read_more').click()
                                    }
                                    var colorText = this.getAttribute("data-color")
                                    elAttBlock.setAttribute("data-color", colorText);

                                    if (atteditbutton != null) {
                                        atteditbutton.parentNode.classList.add('active')
                                    }

                                    var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_color_list_item_img')

                                    for (cl = 0; cl < all_color_list_item_img.length; cl++) {
                                        all_color_list_item_img[cl].parentNode.parentNode.classList.remove("active");
                                    }

                                    this.parentNode.classList.add("active");
                                    elAttColorTitleTextSelected.innerText = colorText;
                                    //third
                                    var sel_size = elAttBlock.getAttribute('data-size')
                                    findObj = new INC.classes.FindObj({
                                        mainId: productObj.mainId,
                                        colorText: attr_text
                                    });
                                    findObj.sizeText = sel_size
                                    elAtt3ListBlock.innerHTML = "";

                                    var product3rdObj = INC.dataStore.methods().getProductopt3Obj(findObj, this);
                                    if (product3rdObj["att3Array"].length > 0) {
                                        elAttSizeBlock.classList.add("active");

                                        product3rdObj["att3Array"].forEach(function(sizeObj) {
                                            var attSizeBlock3 = INC.methods.generateHTMLTags('div', {
                                                class: classNames["productAttthirdListItemBlock"]
                                            });
                                            var attSizeImgBlock3 = INC.methods.generateHTMLTags('div', {
                                                class: classNames["productAttthirdListItemImgBlock"]
                                            });
                                            var attSizeImg3 = INC.methods.generateHTMLTags('div', {
                                                class: classNames["productAttthirdListItemImg"]
                                            });



                                            attSizeImgBlock3.addEventListener("click", function() {
                                                var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                                                var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                                                var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
                                                var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                                                if (atteditbutton != null) {
                                                    atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                                                    atteditbutton.innerText = "Edit"
                                                }


                                                if (productBlock.querySelector('.close_read_more') != null) {
                                                    productBlock.querySelector('.close_read_more').click()
                                                }
                                                var attr_text = this.getAttribute("data-size")

                                                elAttBlock.setAttribute("data-third", attr_text);

                                                if (atteditbutton != null) {
                                                    atteditbutton.parentNode.classList.add('active')
                                                }

                                                var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_third_list_item_img_block')

                                                for (cl = 0; cl < all_color_list_item_img.length; cl++) {
                                                    all_color_list_item_img[cl].classList.remove("active");
                                                }
                                                var attr_text = this.getAttribute("data-size")
                                                this.classList.add("active");
                                                elAtt3TitleTextSelected.innerText = attr_text;;

                                                INC.methods.updateProductBlock(productBlock, findObj, blockType);

                                                var productModuleBlock = productBlock.parentNode.parentNode;

                                                var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                                                INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                                                var size_text = ""

                                            });

                                            if (productSizeText.length == 0) {
                                                productSizeText = sizeObj["text"];
                                            }

                                            attSizeImg3.innerText = sizeObj["text"];
                                            attSizeImgBlock3.setAttribute('data-size', sizeObj["text"]);
                                            attSizeImgBlock3.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                                            attSizeImgBlock3.setAttribute('data-option', "3");
                                            attSizeImgBlock3.appendChild(attSizeImg3);
                                            elAtt3ListBlock.appendChild(attSizeImgBlock3);
                                            if (attSizeImgBlock3.getAttribute('data-size').toLocaleLowerCase() == elAttSizeBlock.querySelector('.inc_product_desc_att_size_title_text_selected').innerText.toLocaleLowerCase()) {
                                                attSizeImgBlock3.classList.add('active')
                                            }
                                        });

                                    }
                                    //end 

                                    INC.methods.updateProductBlock(productBlock, findObj, blockType);

                                    var productModuleBlock = productBlock.parentNode.parentNode;

                                    var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                                    INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                                    var zero_text = elAttBlock.getAttribute('data-zero');
                                    var size_text = elAttBlock.getAttribute('data-size');
                                    var color_text = elAttBlock.getAttribute('data-color');
                                    var third_text = elAttBlock.getAttribute('data-third');

                                    var sel_attr_text = ""
                                    if (color_text != undefined) {
                                        sel_attr_text = color_text
                                    }
                                    if (zero_text != undefined) {
                                        if (sel_attr_text == "") {
                                            sel_attr_text = zero_text
                                        } else {
                                            sel_attr_text = sel_attr_text + " / " + zero_text
                                        }
                                    }
                                    if (size_text != undefined) {
                                        sel_attr_text = sel_attr_text + " / " + size_text
                                    }
                                    if (third_text != undefined) {
                                        sel_attr_text = sel_attr_text + " / " + third_text
                                    }
                                    var pr_mod_elm = productBlock.parentNode.parentNode
                                    if (pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != "") {
                                        pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').innerText = sel_attr_text
                                        pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title', sel_attr_text)
                                    }

                                    productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText = ""
                                });

                                attColorImg.style.backgroundColor = colorObj["colorCode"];


                                if (colorObj["imgSrc"].length > 0) {
                                    if (colorObj["colorCode"] == "") {
                                        //{ src: colorObj["imgSrc"] }
                                        var colorImg = INC.methods.generateHTMLTags('img');
                                        colorImg.setAttribute('alt', colorObj["text"])
                                        colorImg.style.backgroundImage = "url('" + colorObj["imgSrc"] + "')";
                                        if (productObj.categoryName != "") {
                                            colorImg.classList.add(productObj.categoryName.replace(/\s/g, ''))
                                        }
                                        //
                                        attColorImg.appendChild(colorImg);
                                    }
                                }

                                var colorTitle = INC.methods.generateHTMLTags('a');
                                colorTitle.innerText = colorObj["text"]
                                colorTitle.title = colorObj["text"];
                                colorTitle.addEventListener('click', function(e) {
                                    e.preventDefault();
                                })
                                attColorImg.appendChild(colorTitle);
                                attColorImgBlock.setAttribute('data-color', colorObj["text"]);
                                attColorImgBlock.setAttribute("datacolor", colorObj["text"].toLocaleLowerCase());
                                attColorImgBlock.setAttribute('data-option', "0");
                                var colorSwatchImgDiv = document.createElement('div');
                                colorSwatchImgDiv.style.backgroundColor = colorObj["colorCode"];

                                if (colorObj["imgSrc"].length > 0) {
                                    var colorSwatchImg = INC.methods.generateHTMLTags('img', {
                                        src: colorObj["imgSrc"]
                                    });
                                    colorSwatchImg.setAttribute('alt', colorObj["text"])
                                    colorSwatchImgDiv.appendChild(colorSwatchImg);
                                }
                                attColorImgBlock.appendChild(attColorImg);
                                attColorBlock.appendChild(attColorImgBlock);
                                elAttColorListBlock.appendChild(attColorBlock);
                                if (elAttColorListBlock.parentNode.querySelector('.inc_product_desc_att_color_title_text_selected').innerText.toLocaleLowerCase() == colorObj.text.toLocaleLowerCase()) {
                                    attColorBlock.classList.add('active');
                                    color_text_edt = colorObj.text
                                }
                            });


                        }

                        //third
                        var sel_size = elAttBlock.getAttribute('data-size')
                        findObj = new INC.classes.FindObj({
                            mainId: productObj.mainId,
                            colorText: attr_text
                        });
                        findObj.sizeText = sel_size
                        elAtt3ListBlock.innerHTML = "";

                        var product3rdObj = INC.dataStore.methods().getProductopt3Obj(findObj, this);
                        if (product3rdObj["att3Array"].length > 0) {
                            elAttSizeBlock.classList.add("active");

                            product3rdObj["att3Array"].forEach(function(sizeObj) {
                                var attSizeBlock3 = INC.methods.generateHTMLTags('div', {
                                    class: classNames["productAttthirdListItemBlock"]
                                });
                                var attSizeImgBlock3 = INC.methods.generateHTMLTags('div', {
                                    class: classNames["productAttthirdListItemImgBlock"]
                                });
                                var attSizeImg3 = INC.methods.generateHTMLTags('div', {
                                    class: classNames["productAttthirdListItemImg"]
                                });

                                attSizeImgBlock3.addEventListener("click", function() {
                                    var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                                    var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                                    var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
                                    var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                                    if (atteditbutton != null) {
                                        atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                                        atteditbutton.innerText = "Edit"
                                    }


                                    if (productBlock.querySelector('.close_read_more') != null) {
                                        productBlock.querySelector('.close_read_more').click()
                                    }
                                    var attr_text = this.getAttribute("data-size")

                                    elAttBlock.setAttribute("data-third", attr_text);

                                    if (atteditbutton != null) {
                                        atteditbutton.parentNode.classList.add('active')
                                    }

                                    var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_third_list_item_img_block')

                                    for (cl = 0; cl < all_color_list_item_img.length; cl++) {
                                        all_color_list_item_img[cl].classList.remove("active");
                                    }
                                    var attr_text = this.getAttribute("data-size")
                                    this.classList.add("active");
                                    elAtt3TitleTextSelected.innerText = attr_text;;

                                    INC.methods.updateProductBlock(productBlock, findObj, blockType);

                                    var productModuleBlock = productBlock.parentNode.parentNode;

                                    var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                                    INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                                    var size_text = ""

                                });

                                if (productSizeText.length == 0) {
                                    productSizeText = sizeObj["text"];
                                }

                                attSizeImg3.innerText = sizeObj["text"];
                                attSizeImgBlock3.setAttribute('data-size', sizeObj["text"]);
                                attSizeImgBlock3.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                                attSizeImgBlock3.setAttribute('data-option', "3");
                                attSizeImgBlock3.appendChild(attSizeImg3);
                                elAtt3ListBlock.appendChild(attSizeImgBlock3);
                                if (attSizeImgBlock3.getAttribute('data-size').toLocaleLowerCase() == elAttSizeBlock.querySelector('.inc_product_desc_att_size_title_text_selected').innerText.toLocaleLowerCase()) {
                                    attSizeImgBlock3.classList.add('active')
                                }
                            });

                        }
                        //end 

                        INC.methods.updateProductBlock(productBlock, findObj, blockType);

                        var productModuleBlock = productBlock.parentNode.parentNode;

                        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                        INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                        var zero_text = elAttBlock.getAttribute('data-zero');
                        var size_text = elAttBlock.getAttribute('data-size');
                        var color_text = elAttBlock.getAttribute('data-color');
                        var third_text = elAttBlock.getAttribute('data-third');

                        var sel_attr_text = ""
                        if (color_text != undefined) {
                            sel_attr_text = color_text
                        }
                        if (zero_text != undefined) {
                            if (sel_attr_text == "") {
                                sel_attr_text = zero_text
                            } else {
                                sel_attr_text = sel_attr_text + " / " + zero_text
                            }
                        }
                        if (size_text != undefined) {
                            sel_attr_text = sel_attr_text + " / " + size_text
                        }
                        if (third_text != undefined) {
                            sel_attr_text = sel_attr_text + " / " + third_text
                        }
                        var pr_mod_elm = productBlock.parentNode.parentNode
                        if (pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != "") {
                            pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').innerText = sel_attr_text
                            pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title', sel_attr_text)
                        }

                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText = ""
                    });

                    if (productSizeText.length == 0) {
                        productSizeText = sizeObj["text"];
                    }
                    var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|XX|XXXXL|2XL|3XL|4XL$');
                    var chckType = sizeObj["text"];

                    reg.test(chckType);


                    attSizeImg.innerText = sizeObj["text"];
                    attSizeImgBlock.setAttribute('data-size', sizeObj["text"]);
                    attSizeImgBlock.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                    attSizeImgBlock.setAttribute('data-option', "2");
                    if (productSizesObj["sizeArray"][0].code == "size") {
                        attSizeImgBlock.setAttribute('title', sizeObj["text"].toUpperCase());
                    } else if (productSizesObj["sizeArray"][0].code == "letter") {
                        attSizeImgBlock.setAttribute('title', "Letter" + " " + sizeObj["text"].toUpperCase());
                    } else if (productSizesObj["sizeArray"][0].code == "choose") {
                        attSizeImgBlock.setAttribute('title', "Number " + sizeObj["text"].toUpperCase());
                    } else {
                        attSizeImgBlock.setAttribute('title', sizeObj["text"].toUpperCase());
                    }

                    attSizeImgBlock.appendChild(attSizeImg);
                    elAttSizeListBlock.appendChild(attSizeImgBlock);

                });

            }
        }
    }

    if (productColorsObj.colorArray.length > 0) {
        elAttColorListBlock.innerHTML = "";
        // if (INC.debug) console.log(productColorsObj["colorArray"]);
        var one_attr_flag = false
        if (productColorsObj["colorArray"].length == 1) {
            one_attr_flag = true
        }
        if (productColorsObj["colorArray"].length > 0) {
            productColorsObj["colorArray"].forEach(function(colorObj) {
                elAttColorBlock.classList.add("active");
                elAttColorTitleText.innerText = "COLOUR";
                var attColorBlock = INC.methods.generateHTMLTags('div', {
                    class: classNames["productAttColorListItemBlock"]
                })
                var attColorImgBlock = INC.methods.generateHTMLTags('div', {
                    class: classNames["productAttColorListItemImgBlock"]
                });
                var attColorImg = INC.methods.generateHTMLTags('div', {
                    class: classNames["productAttColorListItemImg"]
                });
                var attColorTextBlock = INC.methods.generateHTMLTags('div', {
                    class: classNames["productAttColorListItemTextBlock"]
                });
                var attColorText = INC.methods.generateHTMLTags('div', {
                    class: classNames["productAttColorListItemText"]
                });

                attColorImgBlock.addEventListener("click", function() {
                    var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                    var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                    var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
                    var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                    if (atteditbutton != null) {
                        atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                        atteditbutton.innerText = "Edit"
                    }


                    if (productBlock.querySelector('.close_read_more') != null) {
                        productBlock.querySelector('.close_read_more').click()
                    }
                    var colorText = this.getAttribute("data-color")
                    elAttBlock.setAttribute("data-color", colorText);

                    if (atteditbutton != null) {
                        atteditbutton.parentNode.classList.add('active')
                    }

                    var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_color_list_item_img')

                    for (cl = 0; cl < all_color_list_item_img.length; cl++) {
                        all_color_list_item_img[cl].parentNode.parentNode.classList.remove("active");
                    }

                    this.parentNode.classList.add("active");

                    elAttColorTitleTextSelected.innerText = colorText;
                    //third
                    var sel_size = elAttBlock.getAttribute('data-size')
                    findObj = new INC.classes.FindObj({
                        mainId: productObj.mainId,
                        colorText: colorText
                    });
                    // findObj.sizeText=sel_size
                    elAtt3ListBlock.innerHTML = "";

                    var product3rdObj = INC.dataStore.methods().getProductopt3Obj(findObj, this);
                    if (product3rdObj["att3Array"].length > 0) {
                        elAttSizeBlock.classList.add("active");

                        product3rdObj["att3Array"].forEach(function(sizeObj) {
                            var attSizeBlock3 = INC.methods.generateHTMLTags('div', {
                                class: classNames["productAttthirdListItemBlock"]
                            });
                            var attSizeImgBlock3 = INC.methods.generateHTMLTags('div', {
                                class: classNames["productAttthirdListItemImgBlock"]
                            });
                            var attSizeImg3 = INC.methods.generateHTMLTags('div', {
                                class: classNames["productAttthirdListItemImg"]
                            });

                            attSizeImgBlock3.addEventListener("click", function() {
                                var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                                var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                                var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
                                var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                                if (atteditbutton != null) {
                                    atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                                    atteditbutton.innerText = "Edit"
                                }


                                if (productBlock.querySelector('.close_read_more') != null) {
                                    productBlock.querySelector('.close_read_more').click()
                                }
                                var attr_text = this.getAttribute("data-size")

                                elAttBlock.setAttribute("data-third", attr_text);

                                if (atteditbutton != null) {
                                    atteditbutton.parentNode.classList.add('active')
                                }

                                var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_third_list_item_img_block')

                                for (cl = 0; cl < all_color_list_item_img.length; cl++) {
                                    all_color_list_item_img[cl].classList.remove("active");
                                }
                                var attr_text = this.getAttribute("data-size")
                                this.classList.add("active");
                                elAtt3TitleTextSelected.innerText = attr_text;;

                                INC.methods.updateProductBlock(productBlock, findObj, blockType);

                                var productModuleBlock = productBlock.parentNode.parentNode;

                                var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                                INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                                var size_text = ""

                            });

                            if (productSizeText.length == 0) {
                                productSizeText = sizeObj["text"];
                            }

                            attSizeImg3.innerText = sizeObj["text"];
                            attSizeImgBlock3.setAttribute('data-size', sizeObj["text"]);
                            attSizeImgBlock3.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                            attSizeImgBlock3.setAttribute('data-option', "3");
                            attSizeImgBlock3.appendChild(attSizeImg3);
                            elAtt3ListBlock.appendChild(attSizeImgBlock3);
                            if (attSizeImgBlock3.getAttribute('data-size').toLocaleLowerCase() == elAttSizeBlock.querySelector('.inc_product_desc_att_size_title_text_selected').innerText.toLocaleLowerCase()) {
                                attSizeImgBlock3.classList.add('active')
                            }
                        });

                    }
                    //end 

                    INC.methods.updateProductBlock(productBlock, findObj, blockType);

                    var productModuleBlock = productBlock.parentNode.parentNode;

                    var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                    INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                    var zero_text = elAttBlock.getAttribute('data-zero');
                    var size_text = elAttBlock.getAttribute('data-size');
                    var color_text = elAttBlock.getAttribute('data-color');
                    var third_text = elAttBlock.getAttribute('data-third');

                    var sel_attr_text = ""
                    if (color_text != undefined) {
                        sel_attr_text = color_text
                    }
                    if (zero_text != undefined) {
                        if (sel_attr_text == "") {
                            sel_attr_text = zero_text
                        } else {
                            sel_attr_text = sel_attr_text + " / " + zero_text
                        }
                    }
                    if (size_text != undefined) {
                        sel_attr_text = sel_attr_text + " / " + size_text
                    }
                    if (third_text != undefined) {
                        sel_attr_text = sel_attr_text + " / " + third_text
                    }
                    var pr_mod_elm = productBlock.parentNode.parentNode
                    if (pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != "") {
                        pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').innerText = sel_attr_text
                        pr_mod_elm.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title', sel_attr_text)
                    }

                    productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText = ""
                });



                attColorImg.style.backgroundColor = colorObj["colorCode"];


                if (colorObj["imgSrc"].length > 0) {
                    if (colorObj["colorCode"] == "") {
                        //{ src: colorObj["imgSrc"] }
                        var colorImg = INC.methods.generateHTMLTags('img');
                        colorImg.setAttribute('alt', colorObj["text"])
                        colorImg.style.backgroundImage = "url('" + colorObj["imgSrc"] + "')";
                        if (productObj.categoryName != "") {
                            colorImg.classList.add(productObj.categoryName.replace(/\s/g, ''))
                        }
                        //
                        attColorImg.appendChild(colorImg);
                    }
                }

                var colorTitle = INC.methods.generateHTMLTags('a');
                colorTitle.innerText = colorObj["text"]
                colorTitle.title = colorObj["text"].toUpperCase();
                colorTitle.addEventListener('click', function(e) {
                    e.preventDefault();
                })
                attColorImg.appendChild(colorTitle);
                attColorImgBlock.setAttribute('data-color', colorObj["text"]);
                attColorImgBlock.setAttribute("datacolor", colorObj["text"].toLocaleLowerCase());
                attColorImgBlock.setAttribute('data-option', "0");


                attColorImgBlock.appendChild(attColorImg);
                attColorBlock.appendChild(attColorImgBlock);
                elAttColorListBlock.appendChild(attColorBlock);
                var prod_id = productBlock.getAttribute('data-main_id');
                if (one_attr_flag == true) {
                    setTimeout(function() {
                        if (INC.methods.getProductIdFromWebPage() == prod_id) {
                            attColorImgBlock.click()
                        }
                    }, 0)
                }
            });

        }
    }

    if (product3Obj.att3Array.length > 0) {
        if (product3Obj["att3Array"][0].code != "color") {
            findObj = new INC.classes.FindObj({
                mainId: productObj.mainId
            });

            elAtt3ListBlock.innerHTML = "";



            var productSizeText = "";

            if (product3Obj["att3Array"].length > 0) {
                product3Obj["att3Array"].forEach(function(sizeObj) {
                    elAtt3TitleText.innerText = product3Obj["att3Array"][0].code.toUpperCase();
                    elAtt3Block.classList.add("active");
                    var attSizeBlock3 = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttthirdListItemBlock"]
                    });
                    var attSizeImgBlock3 = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttthirdListItemImgBlock"]
                    });
                    var attSizeImg3 = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttthirdListItemImg"]
                    });

                    attSizeImgBlock3.classList.add('avail')

                    attSizeImgBlock3.addEventListener("click", function() {
                        var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
                        var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                        var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')
                        var atteditbutton = prod_card_attr_block.querySelector('.inc_product_desc_att_edit_text')
                        if (atteditbutton != null) {
                            atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
                            atteditbutton.innerText = "Edit"
                        }


                        if (productBlock.querySelector('.close_read_more') != null) {
                            productBlock.querySelector('.close_read_more').click()
                        }
                        var attr_text = this.getAttribute("data-size")

                        elAttBlock.setAttribute("data-third", attr_text);

                        if (atteditbutton != null) {
                            atteditbutton.parentNode.classList.add('active')
                        }

                        var all_color_list_item_img = this.parentNode.parentNode.querySelectorAll('.inc_product_desc_att_third_list_item_img_block')

                        for (cl = 0; cl < all_color_list_item_img.length; cl++) {
                            all_color_list_item_img[cl].classList.remove("active");
                        }
                        var attr_text = this.getAttribute("data-size")
                        this.classList.add("active");
                        elAtt3TitleTextSelected.innerText = attr_text;;

                        INC.methods.updateProductBlock(productBlock, findObj, blockType);

                        var productModuleBlock = productBlock.parentNode.parentNode;

                        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

                        INC.methods.updateProductBlock(showcaseProductBlock, findObj, blockType);
                        var size_text = ""

                    });


                    if (productSizeText.length == 0) {
                        productSizeText = sizeObj["text"];
                    }
                    var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|XX|XXXXL|2XL|3XL|4XL$');
                    var chckType = sizeObj["text"];

                    reg.test(chckType);


                    attSizeImg3.innerText = sizeObj["text"];
                    attSizeImgBlock3.setAttribute('data-size', sizeObj["text"]);
                    attSizeImgBlock3.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                    attSizeImgBlock3.setAttribute('data-option', "3");

                    attSizeImgBlock3.appendChild(attSizeImg3);
                    elAtt3ListBlock.appendChild(attSizeImgBlock3);

                });

            }
        }
    }

    if (product4Obj.att4Array.length > 0) {
        if (product4Obj["att4Array"][0].code != "color") {
            findObj = new INC.classes.FindObj({
                mainId: productObj.mainId
            });

            elAtt4ListBlock.innerHTML = "";



            var productSizeText = "";

            if (product4Obj["att4Array"].length > 0) {
                product4Obj["att4Array"].forEach(function(sizeObj) {

                    var attSizeBlock4 = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttfourthListItemBlock"]
                    });
                    var attSizeImgBlock4 = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttfourthListItemImgBlock"]
                    });
                    var attSizeImg4 = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttfourthListItemImg"]
                    });
                    attSizeImgBlock4.classList.add('avail')


                    if (productSizeText.length == 0) {
                        productSizeText = sizeObj["text"];
                    }
                    var reg = new RegExp('^[A-Z]|XS|S|M|L|XL|XXL|XXXL|XX|XXXXL|2XL|3XL|4XL$');
                    var chckType = sizeObj["text"];

                    reg.test(chckType);


                    attSizeImg4.innerText = sizeObj["text"];
                    attSizeImgBlock4.setAttribute('data-size', sizeObj["text"]);
                    attSizeImgBlock4.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                    attSizeImgBlock4.setAttribute('data-option', "4");
                    if (product4Obj["att4Array"][0].code == "size") {
                        attSizeImgBlock4.setAttribute('title', sizeObj["text"].toUpperCase());
                    } else if (product4Obj["att4Array"][0].code == "letter") {
                        attSizeImgBlock4.setAttribute('title', "Letter" + " " + sizeObj["text"].toUpperCase());
                    } else if (product4Obj["att4Array"][0].code == "choose") {
                        attSizeImgBlock4.setAttribute('title', "Number " + sizeObj["text"].toUpperCase());
                    } else {
                        attSizeImgBlock4.setAttribute('title', sizeObj["text"].toUpperCase());
                    }

                    attSizeImgBlock4.appendChild(attSizeImg4);
                    elAtt4ListBlock.appendChild(attSizeImgBlock4);

                });

            }
        }
    }


    elGalleryRightArrow.addEventListener("click", function(e) {
        var prod_card = this.parentNode.parentNode.parentNode.parentNode.parentNode;
        var pr_id = prod_card.getAttribute('data-main_id')
        slideTo(pr_id, 0, prod_card, "right")

    });
    elGallerylefttArrow.addEventListener("click", function(e) {
        var prod_card = this.parentNode.parentNode.parentNode.parentNode.parentNode;
        var pr_id = prod_card.getAttribute('data-main_id')
        slideTo(pr_id, 0, prod_card, "left")
    });
    if ((productObj.otherImageList == null) || productObj.otherImageList.length < 2) {
        elGalleryRightArrow.style.display = "none"
        elGallerylefttArrow.style.display = "none"
    }
    switch (blockType) {
        case "pdp":
            elAddText.innerText = "ADD TO DELIVERY";
            break;
        case "sidebar":
        case "am":
            elAddText.innerText = "ADD TO DELIVERY";
            elAddTextclickcollect.innerText = "Add to collection";
    }

    elAddBlock.addEventListener("click", function() {
        if (productBlock.querySelector('.close_read_more') != null) {
            productBlock.querySelector('.close_read_more').click()
        }
        var productModuleBlock = productBlock.parentNode.parentNode;
        if (document.querySelector('.inc_sidebar_modal_block.active') == null) {
            document.querySelector('body').classList.remove('inc_overlay');
        }
        if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
            document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
        }
        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));
        if (INC.config.pageType != "cartPage" && INC.config.pageType != "ticket") {
            showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productAddBlock")).click();
        }
        // var error_element = document.createElement('a')
        if (productModuleBlock.querySelector('.img_color_swatch') != null) {
            if (productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.active') != null) {
                setTimeout(function() {
                    if (document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active') != null) {
                        document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active').classList.remove('active')
                    }
                }, 100)
            } else {
                productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText = "Please Select option"
            }
        } else if (productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.avail') != null) {
            if (productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.active') != null) {
                setTimeout(function() {
                    if (document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active') != null) {
                        document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active').classList.remove('active')
                    }
                }, 100)

            } else {
                productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText = "Please Select option"
            }
        } else {
            setTimeout(function() {
                if (document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active') != null) {
                    document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active').classList.remove('active')
                }
            }, 100)
        }



    });
    elAddBlockclickcollect.addEventListener("click", function() {
        if (productBlock.querySelector('.close_read_more') != null) {
            productBlock.querySelector('.close_read_more').click()
        }
        var productModuleBlock = productBlock.parentNode.parentNode;
        if (document.querySelector('.inc_sidebar_modal_block.active') == null) {
            document.querySelector('html').classList.remove('inc_overlay');
        }
        if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
            document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
        }
        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));
        if (INC.config.pageType != "cartPage") {
            showcaseProductBlock.querySelector('.inc_product_desc_add_click_collect_block').click()
        }
        // var error_element = document.createElement('a')
        if (productModuleBlock.querySelector('.img_color_swatch') != null) {
            if (productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.active') != null) {
                setTimeout(function() {
                    if (document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active') != null) {
                        document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active').classList.remove('active')
                    }
                }, 100)
            } else {
                productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').innerText = "Please select option"
            }
        } else {
            setTimeout(function() {
                if (document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active') != null) {
                    document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active').classList.remove('active')
                }
            }, 100)
        }

    });

    return productBlock;
}

INC.methods.updateProductBlock = function(productBlock, findObj, blockType, bundleProductListCheck) {
    var dataStore = INC.dataStore;
    var classNames = INC.uiConfig[blockType].className;
    var productBlock = productBlock;
    var productModuleBlock = productBlock.parentNode.parentNode;

    //
    var modal_attr_block = productModuleBlock.querySelector('.inc_product_modal_block')
    var zero_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-zero');
    var size_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-size');
    var color_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-color');
    var third_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-third');

    var sel_attr_text = ""
    if (color_text != undefined) {
        findObj.colorText = color_text
        sel_attr_text = color_text
    } else {
        findObj.colorText = ""
    }
    if (zero_text != undefined) {
        findObj.zeroText = zero_text
        if (sel_attr_text == "") {
            sel_attr_text = zero_text
        } else {
            sel_attr_text = sel_attr_text + " / " + zero_text
        }
    } else {
        findObj.zeroText = ""
    }
    if (size_text != undefined) {
        findObj.sizeText = size_text
        sel_attr_text = sel_attr_text + " / " + size_text
    } else {
        findObj.sizeText = ""
    }

    if (third_text != undefined) {
        findObj.thirdText = third_text
        sel_attr_text = sel_attr_text + " / " + third_text
    } else {
        findObj.thirdText = ""
    }




    var productObj = INC.dataStore.methods().getProductByAtt(findObj);
    var previousSKU = "";
    var getSelectorClassName = this.getSelectorClassName;

    previousSKU = productBlock.getAttribute('data-sku');
    productBlock.setAttribute('data-id', productObj.id);
    productBlock.setAttribute('data-sku', productObj.sku);
    productBlock.setAttribute('data-main_id', productObj.mainId);
    productBlock.setAttribute('data-bundle_id', productObj.bundleId);

    productModuleBlock.setAttribute('data-id', productObj.id);
    productModuleBlock.setAttribute('data-sku', productObj.sku);
    productModuleBlock.setAttribute('data-main_id', productObj.mainId);
    productModuleBlock.setAttribute('data-bundle_id', productObj.bundleId);

    if (document.querySelector('.inc_pdp_bundle_cart_added_product_block[data-main_id="' + productObj.mainId + '"]') != null && sel_attr_text != "") {
        var added_sum_prod = document.querySelector('.inc_pdp_bundle_cart_added_product_block[data-main_id="' + productObj.mainId + '"]')
        added_sum_prod.querySelector('.inc_pdp_bundle_cart_added_product_att_color_text_block').innerText = sel_attr_text
        added_sum_prod.querySelector('.inc_pdp_bundle_cart_added_product_att_block').setAttribute('title', sel_attr_text)
    }
    if (productModuleBlock.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != "") {
        productModuleBlock.querySelector('.inc_product_desc_att_size_title_text').innerText = sel_attr_text
        productModuleBlock.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title', sel_attr_text)
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
    var elAddTextclickcollect = getViewElement("productAddTextclickcollect");
    var elAddBlockclickcollect = getViewElement("productAddBlockclickcollect");
    productBlock.classList.remove('is_click_collect_only')
    productBlock.classList.remove('is_both_avail')
    productBlock.classList.remove('is_delivery_only')

    if (blockType != "pdp") {
        elAddBlock.style.display = "flex"
        elAddBlockclickcollect.style.display = "flex"
        if (productObj.Field6 == "CollectOnly" && INC.config.storeId != "") {
            productBlock.classList.add('is_click_collect_only')
            elAddBlock.style.display = "none"
        } else if (productObj.Field6 == "CollectOnly" && INC.config.storeId == "") {
            elAddBlockclickcollect.style.display = "none"
            elAddBlock.style.display = "none"
        } else if (productObj.Field6 == "DeliveryOnly") {
            productBlock.classList.add('is_delivery_only')
            elAddBlockclickcollect.style.display = "none"
        } else if (productObj.Field6 == "Both") {
            productBlock.classList.add('is_click_collect_only')
            productBlock.classList.add('is_both_avail')
            elAddBlock.style.display = "flex"
            elAddBlockclickcollect.style.display = "flex"
        } else if (INC.config.storeId == "") {
            productBlock.classList.add('is_delivery_only')
            elAddBlockclickcollect.style.display = "none"
        } else {
            productBlock.classList.add('is_click_collect_only')
        }
    }

    var prod_modal = productModuleBlock.querySelector('.inc_product_modal_block')
    var elImgMainImg = elImgBlock.querySelector(getSelectorClassName(classNames, "productImgMainImg"));

    elImgMainImg.querySelectorAll('img')[0].setAttribute('src', productObj["imageURL"]);

    elImgMainImg.querySelector('a').setAttribute('href', productObj["url"]);
    elImgMainImg.querySelector('a').setAttribute('otherImageList', productObj["otherImageList"])
    elImgMainImg.querySelector('a').setAttribute('imageURL', productObj["imageURL"])

    elImgMainImg.querySelectorAll('img')[0].setAttribute('data-mouseover', productObj["otherImageList"])
    elImgMainImg.querySelectorAll('img')[0].setAttribute('data-imageURL', productObj["imageURL"])

    var prod_ids = productModuleBlock.getAttribute('data-main_id')
    if (document.querySelector('.inc_pdp_bundle_product_list_items_block .inc_pdp_bundle_product_list_item_block[data-main_id="' + prod_ids + '"]') != null) {
        var tab_img = document.querySelector('.inc_pdp_bundle_product_list_items_block .inc_pdp_bundle_product_list_item_block[data-main_id="' + prod_ids + '"]');
        if (tab_img.querySelector('img') != null) {
            tab_img.querySelector('img').src = productObj["imageURL"]
        }
    }

    elImgGalleryListBlock.innerHTML = "";

    if ((productObj.otherImageList != null) && productObj.otherImageList.length > 1) {
        var otimg = 0;
        productObj.otherImageList.forEach(function(otherImgURL) {
            var elOtherImgTag = INC.methods.generateHTMLTags('img', {
                src: otherImgURL
            });
            if(onloadpdp == true){
                elOtherImgTag.src = otherImgURL
            }
            elOtherImgTag.setAttribute('alt', productObj.name)
            elOtherImgTag.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
            var elImgGalleryListItemBlock = INC.methods.getElementChilds("productImgGalleryListItemBlock", blockType);

            var elImgGalleryListItemImg = elImgGalleryListItemBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemImg"));

            elImgGalleryListItemImg.appendChild(elOtherImgTag);

            elImgGalleryListItemBlock.addEventListener("click", function() {

                Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productImgGalleryListItemBlock")), function(galleryListItemBlock) {
                    galleryListItemBlock.classList.remove("active");
                });

                elImgGalleryListItemBlock.classList.add("active");

                elImgMainImg.querySelector('img').src = otherImgURL;
                elImgMainImg.querySelector('img').setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
            })

            elImgGalleryListBlock.appendChild(elImgGalleryListItemBlock);
            if (otimg == 0) {
                elImgGalleryListItemBlock.classList.add('active')
            }
            otimg++;
            if (productObj.otherImageList.length > 5) {
                elImgGalleryListItemBlock.parentNode.classList.add("flex-start")
            }

        });

    }

    elTitleText.querySelector('div').innerHTML = productObj.name;
    elTitleText.querySelector('a').setAttribute('href', productObj["url"]);

    elTitleText.querySelector('a').setAttribute('title', productObj.name)


    elFullDesctext.setAttribute('aria-hidden', 'true')
    var activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
    var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
    var worthPrice = parseFloat(productObj.worthPrice).toFixed(2).toString();




    // elPriceActiveMsg.innerText = " + VAT"
    elPriceRegularText.innerText = "";
    if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
        elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(activePrice) + "</span> <span class='inc'> Inc. VAT</span>"
        elPriceRegularText.innerHTML = INC.clientConfig.regularPricePrefix + INC.clientConfig.currencySymbol +
            formatter.format(regularPrice) + "</span> <span class='inc'> Inc. VAT</span>"
    } else {
        elPriceActiveText.innerHTML = "<span class='price'>" + INC.clientConfig.currencySymbol + formatter.format(activePrice) + "</span> <span class='inc'> Inc. VAT</span>"
    }

    if (productBlock.querySelector(getSelectorClassName(classNames, "productAddText")).innerText == "ADDED") {
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
    var pname = productBlock.querySelector('.inc_product_desc_title_text').innerText;
    var pprice = productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$', '');
    if (elAddText.innerText == "ADDED" || elAddText.innerText == "UPDATE") {
        INC.methods.updateBundleCart({
            sku: sku,
            qty: qty
        }, "add", main_id, bundle_id, pname, pprice);
    }

    elPackOfListBlock.innerHTML = "";


}

INC.methods.createProductListItemBlock = function(productObj, blockType) {
    var classNames = INC.uiConfig[blockType].className;
    var productListItemBlock = this.getElementChilds("pdpBundleProductListItemBlock", blockType);
    var findObj = new INC.classes.FindObj({
        id: productObj.id,
        mainId: productObj.mainId
    });
    var productObj = INC.dataStore.methods().getProductById(findObj);
    var getSelectorClassName = this.getSelectorClassName;
    productListItemBlock.style.userSelect = "none";
    productListItemBlock.setAttribute('data-id', productObj.id);
    productListItemBlock.setAttribute('data-sku', productObj.sku);
    productListItemBlock.setAttribute('data-main_id', productObj.mainId);
    productListItemBlock.setAttribute('data-bundle_id', productObj.bundleId);

    function getViewElement(className) {
        return productListItemBlock.querySelector(getSelectorClassName(classNames, className));
    }

    var elImg = getViewElement("pdpBundleProductListItemImg");
    var elTitleText = getViewElement("pdpBundleProductListItemTitleText");
    var elImgTag1 = INC.methods.generateHTMLTags('img', {
        src: productObj.imageURL
    });
    if(onloadpdp == true){
        elImgTag1.src =  productObj.imageURL
    }
    elImgTag1.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
    elImgTag1.setAttribute('alt', productObj.name)
    elImg.appendChild(elImgTag1);
    productListItemBlock.addEventListener("click", function() {
        if (INC.debug) console.log("list image clicked");
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productPackOfListBlock")), function(el) {
            el.classList.remove("active");
        });
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productAttSizeListBlock")), function(attSizeListBlock) {
            attSizeListBlock.classList.remove("active");
        });

        var elListMainBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListMainBlock"));
        Array.prototype.forEach.call(elListMainBlock.querySelectorAll(getSelectorClassName(classNames, "productModuleBlock")), function(productBlock) {
            productBlock.style.display = "none";
        });
        elListMainBlock.querySelector(getSelectorClassName(classNames, "productModuleBlock") + "[data-main_id=\"" + productObj.mainId + "\"]").style.display = "block";

        Array.prototype.forEach.call(productListItemBlock.parentNode.querySelectorAll(getSelectorClassName(classNames, "pdpBundleProductListItemBlock")), function(pListItemBlock) {
            pListItemBlock.classList.remove("active");
        });

        productListItemBlock.classList.add("active");
    });

    elTitleText.innerText = "";

    return productListItemBlock;
}

INC.methods.updateProductListItem = function(productObj, blockType) {

    if (blockType != "pdp") return;
    var classNames = INC.uiConfig[blockType].className;
    var findObj = new INC.classes.FindObj({
        id: productObj.id,
        mainId: productObj.mainId
    });
    var productObj = INC.dataStore.methods().getProductById(findObj);
    var getSelectorClassName = this.getSelectorClassName;

    var querySelectorString = getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + "[data-id=\"" + productObj.id + "\"]";
    if (INC.debug) console.log(querySelectorString);

    var productListItemBlock = document.querySelector(querySelectorString);

    if (INC.debug) console.log(productListItemBlock);

    function getViewElement(className) {
        return productListItemBlock.querySelector(getSelectorClassName(classNames, className));
    }

    var elImg = getViewElement("pdpBundleProductListItemImg");

    elImg.querySelector('img').setAttribute('src', productObj.imageURL);
    elImg.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");

}

INC.methods.updateBundleCart = function(bundleCartObj, type, main_id, bundle_id, pname, pprice) {
    var dataStore = INC.dataStore;
    var listToDelete = []
    if (!dataStore.hasOwnProperty('bundleCartProducts')) {
        dataStore['bundleCartProducts'] = {};
        INC.config.pdpaddedProductList = []
        INC.config.bundle_tracking = []
        INC.config.dupBasket = []
    }

    switch (type) {
        case "add":
            dataStore["bundleCartProducts"][bundleCartObj["sku"]] = bundleCartObj["qty"];

            if (INC.config.pdpaddedProductList.indexOf(main_id) == -1) {
                INC.config.pdpaddedProductList.push(main_id)
                INC.config.bundle_tracking.push({
                    id: main_id,
                    bid: bundle_id,
                    pname: pname,
                    prc: pprice,
                    qty: bundleCartObj["qty"]

                });
            }
            break;
        case "sub":
            delete dataStore["bundleCartProducts"][bundleCartObj["sku"]];
            INC.config.pdpaddedProductList.remove_prod_list = function() {
                var what, a = arguments,
                    L = a.length,
                    ax;
                while (L && this.length) {
                    what = a[--L];
                    while ((ax = this.indexOf(what)) !== -1) {
                        this.splice(ax, 1);
                    }
                }
                return this;
            };
            listToDelete[0] = main_id
            for (var i = 0; i < INC.config.bundle_tracking.length; i++) {
                var obj = INC.config.bundle_tracking[i];
                if (obj != undefined) {
                    if (listToDelete.indexOf(obj.id) !== -1) {
                        INC.config.bundle_tracking.splice(i, 1);
                    }
                }
            }
            INC.config.bundle_tracking = INC.config.bundle_tracking
            INC.config.pdpaddedProductList.remove_prod_list(main_id);
            break;
    }

    if (INC.config.pageType == "pdp") this.calculateBundleTotal();
}

INC.methods.calculateBundleTotal = function() {
    var dataStore = INC.dataStore;
    var bundleCartProducts = dataStore["bundleCartProducts"];
    var productListObj = dataStore.dataStoreObj;
    var duplicate_check_produ = []
    var totalRegularPrice = 0;
    var totalActivePrice = 0;
    var totalMainProduct = 0;
    var totalAddonProducts = 0;
    var totalAddonProductsCount = 0;
    var totalProductCount = 0;
    var mainId = INC.methods.getProductIdFromWebPage();

    if (bundleCartProducts != null && bundleCartProducts != undefined) {
        Object.keys(bundleCartProducts).forEach(function(sku) {
            for (mainProductId in productListObj) {
                for (childProductId in productListObj[mainProductId]) {
                    if (sku == productListObj[mainProductId][childProductId]["sku"]) {
                        if (duplicate_check_produ.indexOf(productListObj[mainProductId][childProductId]["sku"]) == -1) {
                            duplicate_check_produ.push(productListObj[mainProductId][childProductId]["sku"])
                            var regularPrice = productListObj[mainProductId][childProductId]["regularPrice"];
                            var activePrice = productListObj[mainProductId][childProductId]["activePrice"];
                            totalRegularPrice = totalRegularPrice + (parseFloat(bundleCartProducts[sku]) * regularPrice);
                            totalActivePrice = totalActivePrice + (parseFloat(bundleCartProducts[sku])) * activePrice;

                            if (productListObj[mainProductId][childProductId].mainId == mainId) {
                                totalProductCount++;
                                totalMainProduct = totalMainProduct + (parseInt(bundleCartProducts[sku]) * activePrice);
                            }

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

    if (INC.debug) console.log("totalMainProduct: " + totalMainProduct);
    if (INC.debug) console.log("totalAddonProducts: " + totalAddonProducts);
    if (INC.debug) console.log("totalAddonProductsCount: " + totalAddonProductsCount);

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

INC.methods.updateBundleCartBlock = function(priceObj) {
    var classNames = INC.uiConfig.pdp.className;
    var dataStore = INC.dataStore;
    var bundleCartProducts = dataStore["bundleCartProducts"];
    var getSelectorClassName = INC.methods.getSelectorClassName;

    var totalRegularPrice = priceObj.totalRegularPrice;
    var totalActivePrice = priceObj.totalActivePrice;
    var totalMainProduct = priceObj.totalMainProduct;
    var totalAddonProducts = priceObj.totalAddonProducts;
    var totalAddonProductsCount = priceObj.totalAddonProductsCount;
    var totalProductCount = priceObj.totalProductCount;

    var elPdpBundleCartBlock = document.querySelector(this.getSelectorClassName(classNames, "pdpModalBundleCartBlock"));

    function getViewElement(className) {
        return elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, className));
    }

    var elBundleCartAddedBlock = getViewElement("pdpBundleCartAddedBlock");
    var elBundleCartSummaryViewBtnCount = getViewElement("pdpBundleCartSummaryViewBtnCount");
    var elBundleCartPriceRegularText = getViewElement("pdpBundleCartSummaryPriceRegularText");
    var elBundleCartPriceActiveText = getViewElement("pdpBundleCartSummaryPriceActiveText");
    var elBundleCartPriceActiveTextMsg = getViewElement("pdpBundleCartSummaryPriceActiveTextMsg");

    elBundleCartAddedBlock.innerHTML = "";



    var bundleCartProductsArray = Object.keys(bundleCartProducts);
    elBundleCartSummaryViewBtnCount.innerText = bundleCartProductsArray.length;
    for (var i = 0; i < bundleCartProductsArray.length; i++) {
        var findObj = new INC.classes.FindObj({
            sku: bundleCartProductsArray[i]
        });
        var productObj = INC.dataStore.methods().getProductBySKU(findObj);
        var productId = productObj.id;
        var prepen_elm = this.createBundleCartAddedProductBlock(productId, bundleCartProducts[bundleCartProductsArray[i]], "pdp")
        if (elBundleCartAddedBlock != null || elBundleCartAddedBlock != undefined) {
            elBundleCartAddedBlock.insertBefore(prepen_elm, elBundleCartAddedBlock.childNodes[0]);
        }

    }

    if (!(bundleCartProductsArray.length > 4)) {
        var elBundleCartAddedProductDiv = document.createElement('div');
        elBundleCartAddedProductDiv.classList.add("bundle_cart_added_product_div");
        elBundleCartAddedProductDiv.innerText = "Add Product";
        elBundleCartAddedBlock.appendChild(elBundleCartAddedProductDiv);
    }

    elBundleCartPriceRegularText.style.display = "none";
    if (totalActivePrice != totalRegularPrice) {
        elBundleCartPriceRegularText.style.display = "flex";
    }

    elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.remove('simple_price')
    elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.remove('is_special_price')
    elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.remove('simple_price')
    elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.remove('is_special_price')

    if (totalRegularPrice != totalActivePrice && totalRegularPrice != null && totalRegularPrice != "") {
        elBundleCartPriceActiveText.innerHTML = "<span class='now_was'>Now</span> <span class='price'>" + INC.clientConfig.currencySymbol + formatter.format(totalActivePrice) + "</span> ";
        elBundleCartPriceRegularText.innerHTML = "<span class='now_was'>Was</span> <span class='price'>" + INC.clientConfig.currencySymbol + formatter.format(totalRegularPrice) + "</span> "
        elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.add('is_special_price')
        elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.add('is_special_price')
    } else {
        elBundleCartPriceActiveText.innerText = INC.clientConfig.currencySymbol + formatter.format(totalActivePrice);
        elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.add('simple_price')
        elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.add('simple_price')
    }

    if (elPdpBundleCartBlock != null && elPdpBundleCartBlock != undefined) {
        var bundleCartProductsLength = Object.keys(bundleCartProducts).length;

        var elBundleCartTitleText = getViewElement("pdpBundleCartSummaryTitleText");
        var elBundleCartAddBtnText = getViewElement("pdpBundleCartSummaryAddBtnText");
        var elBundleCartCollectionBtnText = getViewElement("pdpBundleCartSummaryCollectionBtnText");

        if (window.innerWidth < 819) {
            // if (bundleCartProductsLength > 1) {
            //     elBundleCartTitleText.innerText = "Total Price";
            //     elBundleCartAddBtnText.innerText = "Add "+bundleCartProductsArray.length+" item(s) to basket";
            //     elBundleCartAddBtnclickcollectText.innerText = "Click & Collect "+bundleCartProductsArray.length+" item(s)";
            // }

            // if (!(bundleCartProductsLength > 1)) {
            //     elBundleCartTitleText.innerText = "Total Price";
            //     elBundleCartAddBtnText.innerText = "Add 1 item to basket";
            //     elBundleCartAddBtnclickcollectText.innerText = "Click & Collect 1 item";
            // }
            if (bundleCartProductsLength > 1) {
                elBundleCartTitleText.innerText = "Total price";
                elBundleCartAddBtnText.innerText = "Add to Delivery";
                elBundleCartCollectionBtnText.innerText = "Add to collection";
            }

            if (!(bundleCartProductsLength > 1)) {
                elBundleCartTitleText.innerText = "Total price";
                elBundleCartAddBtnText.innerText = "Add to Delivery";
                elBundleCartCollectionBtnText.innerText = "Add to collection";
            }
        } else {

            if (bundleCartProductsLength > 1) {
                elBundleCartTitleText.innerText = "Total price";
                elBundleCartAddBtnText.innerText = "Add " + bundleCartProductsArray.length + " item(s) to delivery"
                elBundleCartCollectionBtnText.innerText = "Add " + bundleCartProductsArray.length + " item(s) to collection";
            }

            if (!(bundleCartProductsLength > 1)) {
                elBundleCartTitleText.innerText = "Total price";
                elBundleCartAddBtnText.innerText = "Add 1 item to delivery";
                elBundleCartCollectionBtnText.innerText = "Add 1 item to collection";
            }
        }

    }

    var elPriceMainTitleText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceMainTitleText"));
    var elPriceMainFigureText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceMainFigureText"));
    var elPriceAddonTitleText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceAddonTitleText"));
    var elPriceAddonFigureText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceAddonFigureText"));
    var elPriceRegularText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartSummaryPriceRegularText"));
    var elPriceActiveText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartSummaryPriceActiveText"));

    elPriceMainTitleText.innerText = "Main Product Price";
    elPriceAddonTitleText.innerText = "Add-on(s) Selected  " + ((totalAddonProductsCount > 0) ? totalAddonProductsCount : "");

    elPriceMainFigureText.innerText = INC.clientConfig.currencySymbol + formatter.format(totalMainProduct)
    elPriceAddonFigureText.innerText = INC.clientConfig.currencySymbol + formatter.format(totalAddonProducts)
    elPriceActiveText.innerHTML = "<span class='price'>" + INC.clientConfig.currencySymbol + formatter.format(totalActivePrice) + "</span> ";


    if (totalRegularPrice != totalActivePrice && totalRegularPrice != null && totalRegularPrice != "") {
        elBundleCartPriceActiveText.innerHTML = "<span class='now_was'>Now</span> <span class='price'>" + INC.clientConfig.currencySymbol + formatter.format(totalActivePrice) + "</span> ";
    }

    if (totalActivePrice == 0) {
        setTimeout(function() {
            document.querySelectorAll(getSelectorClassName(classNames, "productAddBlock"))[1].click();
        }, 5);
    }
}

INC.methods.createBundleCartAddedProductBlock = function(productId, qty, blockType) {
    var classNames = INC.uiConfig[blockType].className;
    var addedProductBlock = this.getElementChilds("pdpBundleCartAddedProductBlock", blockType);
    var findObj = new INC.classes.FindObj({
        id: productId
    });
    var productObj = INC.dataStore.methods().getProductById(findObj);
    var getSelectorClassName = INC.methods.getSelectorClassName;
    addedProductBlock.setAttribute('data-id', productObj.id);
    addedProductBlock.setAttribute('data-sku', productObj.sku);
    addedProductBlock.setAttribute('data-main_id', productObj.mainId);
    addedProductBlock.setAttribute('data-bundle_id', productObj.bundleId);

    //current  active prod
    var color = "";
    var size = "";
    var just_check_prod_block = document.querySelector('.inc_product_module_block[data-main_id="' + productObj.mainId + '"]')
    if (just_check_prod_block != null) {
        if (just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.active div') != null) {
            size = just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.active div').innerText
        }
        if (just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block') != null) {
            color = just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-color')
        }
    }
    console.log("size " + size)
    console.log("color " + color)
    //end
    function getViewElement(className) {
        return addedProductBlock.querySelector(getSelectorClassName(classNames, className));
    }

    var elTitleText = getViewElement("pdpBundleCartAddedProductTitleText");
    var elImg = getViewElement("pdpBundleCartAddedProductImg");
    var elPriceActiveText = getViewElement("pdpBundleCartAddedProductPriceText");
    var elAttColorText = getViewElement("pdpBundleCartAddedProductAttColorText");
    var elAttsizeText = getViewElement("pdpBundleCartAddedProductAttSizeText");
    var elQtyText = getViewElement("pdpBundleCartAddedProductQtyText");
    var elEditTextBlock = getViewElement("pdpBundleCartAddedProductEditTextBlock");
    var elEditText = getViewElement("pdpBundleCartAddedProductEditText");
    var elEditImgBlock = getViewElement("pdpBundleCartAddedProductEditImgBlock");
    var elEditImg = getViewElement("pdpBundleCartAddedProductEditImg");

    elTitleText.innerText = productObj.name;
    var elImgTag1 = this.generateHTMLTags('img', {
        src: productObj.imageURL
    });
    if(onloadpdp == true){
        elImgTag1.src = productObj.imageURL
    }
    elImgTag1.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
    elImgTag1.setAttribute('alt', productObj.name)
    elImg.appendChild(elImgTag1);

    var prod_module_elm = document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="' + productObj.mainId + '"]')
    var zero_text = "";
    var size_text = "";
    var color_text = "";
    var third_text = "";
    if(prod_module_elm != null){
        modal_attr_block = prod_module_elm.querySelector('.inc_product_modal_block')
        zero_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-zero');
        size_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-size');
        color_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-color');
        third_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-third');
    }

    var sel_attr_text = ""
    if (color_text != undefined) {
        sel_attr_text = color_text
    }
    if (zero_text != undefined) {
        if (sel_attr_text == "") {
            sel_attr_text = zero_text
        } else {
            sel_attr_text = sel_attr_text + " / " + zero_text
        }
    }
    if (size_text != undefined) {
        sel_attr_text = sel_attr_text + " / " + size_text
    }
    if (third_text != undefined) {
        sel_attr_text = sel_attr_text + " / " + third_text
    }

    if (sel_attr_text != "") {
        elAttColorText.innerText = sel_attr_text;
        elAttColorText.parentNode.parentNode.setAttribute('title', sel_attr_text)
    }




    elPriceActiveText.innerHTML = "<span class='price'>" + INC.clientConfig.currencySymbol + formatter.format(productObj.activePrice * qty) + "</span>"

    elEditTextBlock.addEventListener("click", function() {
        if (INC.config.deviceType == "mobile") {
            if (INC.debug) console.log(productObj);
            if (INC.debug) console.log(document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + '[data-main_id="' + productObj.mainId + '"]'));

            if (document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + '[data-main_id="' + productObj.mainId + '"]') != null)
                document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + '[data-main_id="' + productObj.mainId + '"]').click();
        }

        if (INC.config.deviceType == "desktop") {
            if (INC.debug) console.log(document.querySelector(getSelectorClassName(classNames, "productModuleBlock") + '[data-id="' + productObj.id + '"]'));
            Array.prototype.forEach.call(document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListMainBlock")).querySelectorAll(getSelectorClassName(classNames, "productModuleBlock")), function(el, index) {
                if (INC.debug) console.log(el);
                if (INC.debug) console.log("index of el: " + index);
                if (el.getAttribute('data-id') == productObj.id) {
                    if (index > 1) {
                        for (var i = 0; i < 2; i++) {
                            document.querySelector(getSelectorClassName(classNames, "pdpBundleProductRightBtnBlock")).click()
                        }
                    }

                    if (!(index > 1)) {
                        for (var i = 0; i < 2; i++) {
                            document.querySelector(getSelectorClassName(classNames, "pdpBundleProductLeftBtnBlock")).click()
                        }
                    }
                }
            });
            // }
        }

        setTimeout(function() {
            document.querySelector(getSelectorClassName(classNames, "productBlock") + '[data-id="' + productObj.id + '"]').querySelector(getSelectorClassName(classNames, "productAttBlock")).click();
        }, 50);
    });
    elEditText.parentNode.parentNode.classList.add('elipsis_inc')
    elEditText.innerText = "Edit";
    elEditImgBlock.addEventListener("click", function() {
        document.querySelector(getSelectorClassName(classNames, "productBlock") + '[data-id="' + productObj.id + '"]').querySelector(getSelectorClassName(classNames, "productAddBlock")).click();
    });
    elEditImg.innerText = "";
    return addedProductBlock;
}

INC.methods.clear = function() {

    if (document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarModalBlock")) != null) {
        Array.prototype.forEach.call(document.querySelectorAll(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarModalBlock")), function(el) {
            el.parentNode.removeChild(el);
        });

        Array.prototype.forEach.call(document.querySelectorAll(".inc_sidebar_overlay_block"), function(el) {
            el.parentNode.removeChild(el);
        });
    }

    if (document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.am.className, "afModalBlock")) != null) {

        Array.prototype.forEach.call(document.querySelectorAll(INC.methods.getSelectorClassName(INC.uiConfig.am.className, "afModalBlock")), function(el) {
            el.parentNode.removeChild(el);
        });
    }

    if (document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.pdp.className, "pdpModalBlock")) != null) {
        Array.prototype.forEach.call(document.querySelectorAll(INC.methods.getSelectorClassName(INC.uiConfig.pdp.className, "pdpModalBlock")), function(el) {
            el.parentNode.removeChild(el);
        });
    }
}

INC.methods.getElementChilds = function(child, pageType) {
    var uiConfig = INC.uiConfig;
    var pType = pageType;
    var vDOM = uiConfig[pType]["dom"];
    // if (INC.debug) console.log(child);
    var elementHTML = this.generateHTMLTags('div', {
        class: uiConfig[pType]["className"][child]
    })
    if (vDOM.hasOwnProperty(child)) {
        vDOM[child].forEach(function(subChild) {
            elementHTML.appendChild(INC.methods.getElementChilds(subChild, pType));
        });
    }

    return elementHTML;
}

INC.methods.generateHTMLTags = function (tagName, attributeObj, childNode, eventListner, callback) {
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
                    if(tagName == 'img'){
                        element.classList.add('inc_lazy')
                        element.setAttribute('data-src', attributeObj[attr]);
                        element.setAttribute('src', INC.config.srcImgeLazy);
                    }else{
                        element.setAttribute(attr, attributeObj[attr]);
                    }
                    // element.setAttribute(attr, attributeObj[attr]);
                }
            }
        }
    }

    if (childNode != null && childNode != undefined) element.appendChild(childNode);
    if (eventListner != null && childNode != undefined) element.addEventListener(eventListner, callback);

    return element;
}
INC.methods.addProductToCart = function(findObj, qty, pageType, productBlock, add_btn_click, add_prod_im, btn_addtocart, type_bundle) {
    INC.clientConfig.OOS = []
    var form_key = "";
    if (document.querySelector('input[name="form_key"]') != null) {
        form_key = document.querySelectorAll('input[name="form_key"]')[0].value;
    }
    var dataStore = INC.dataStore;
    var addProductURL = INC.config.addToBasketURL;
    var findObj = new INC.classes.FindObj(findObj);
    var productObj = INC.dataStore.methods().getProductById(findObj);
    var formData = []
    formData = new FormData();

    if (type_bundle == 'delivery') {
        if (productObj.ProductType == "configurable") {
            addProductURL = addProductURL + btoa(productObj.url.split('?')[0]) + '/product/' + productObj.childsku;
            var form_param = 'product=' + productObj.childsku + '&selected_configurable_option=&related_product=&form_key=' + form_key + '&qty=' + qty + ''

        } else {
            addProductURL = addProductURL + btoa(productObj.url.split('?')[0]) + '/product/' + productObj.childsku;
            var form_param = 'product=' + productObj.childsku + '&selected_configurable_option=&related_product=&form_key=' + form_key + '&qty=' + qty + ''
        }
    } else if (type_bundle == 'collection') {
        if (productObj.ProductType == "configurable") {
            addProductURL = addProductURL + btoa(productObj.url.split('?')[0]) + '/product/' + productObj.childsku;
            var form_param = 'product=' + productObj.childsku + '&selected_configurable_option=&related_product=&form_key=' + form_key + '&qty=' + qty + '&branchNumber=' + INC.config.storeId + '&isCollection=true'

        } else {
            addProductURL = addProductURL + btoa(productObj.url.split('?')[0]) + '/product/' + productObj.childsku;
            var form_param = 'product=' + productObj.childsku + '&selected_configurable_option=&related_product=&form_key=' + form_key + '&qty=' + qty + '&branchNumber=' + INC.config.storeId + '&isCollection=true'
        }
    }
    var params = form_param;

    if (INC.debug) console.log(params);

    var nwConfigObj = new INC.classes.NWConfig();
    nwConfigObj["url"] = addProductURL;
    nwConfigObj["method"] = 'POST';
    nwConfigObj["params"] = params;
    if (INC.debug) console.log(nwConfigObj["url"]);

    jQuery.ajax({
        type: "POST",
        url: addProductURL,
        data: nwConfigObj.params,
        // processData: false,
        // contentType: false,
        error: function(jqXHR, textStatus, errorMessage) {

        },
        success: function(data) {


            if (INC.config.pageType == "cartPage") {
                productBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.am.className, "productAddText")).innerText = "ADDED TO BASKET";
                // productBlock.remove();
                if (productBlock != null) {
                    productBlock.parentNode.removeChild(productBlock);
                }
                window.location.reload();
            } else if (INC.config.pageType == "productList") {
                if (window.location.href.indexOf('inc_best_sellers') == -1) {
                    window.location.href = window.location.href + "/#inc_best_sellers"
                } else {
                    window.location.reload();
                }
            }

            add_btn_click.innerText = "ADDED"
            if (INC.config.pageType != "cartPage" && INC.config.pageType != "productList") INC.methods.addProductToSidebarCart(findObj, qty, productBlock, type_bundle);
            setTimeout(function() {
                if (INC.config.pageType == "cartPage" || INC.config.pageType == "productList") {
                    if (INC.config.deviceType == "mobile") {
                        if (type_bundle == "delivery") {
                            add_btn_click.innerText = "Add to delivery ";
                        } else {
                            add_btn_click.innerText = "Add to Collection";
                        }

                    } else {
                        if (type_bundle == "delivery") {
                            add_btn_click.innerText = "Add to Delivery";
                        } else {
                            add_btn_click.innerText = "Add to Collection";
                        }

                    }
                } else {
                    if (INC.config.deviceType == "mobile") {
                        if (type_bundle == "delivery") {
                            add_btn_click.innerText = "Add to delivery";
                        } else {
                            document.querySelector('.p_type_details').innerText = "Add to collection"
                            add_btn_click.innerText = "Add to Collection";
                        }
                    } else {
                        if (type_bundle == "delivery") {
                            add_btn_click.innerText = "Add to Delivery";
                        } else {
                            document.querySelector('.p_type_details').innerText = "Add to collection"
                            add_btn_click.innerText = "Add to Collection";
                        }
                    }

                }


                Array.prototype.forEach.call(add_btn_click, function(el) {
                    if (INC.config.pageType == "cartPage" || INC.config.pageType == "productList") {
                        if (INC.config.deviceType == "mobile") {
                            if (type_bundle == "delivery") {
                                el.innerText = "Add";
                            } else {
                                el.innerText = "Add to Collection";
                            }
                        } else {
                            if (type_bundle == "delivery") {
                                el.innerText = "Add to Delivery";
                            } else {
                                el.innerText = "Add to Collection";
                            }
                        }
                    } else {
                        if (INC.config.deviceType == "mobile") {
                            if (type_bundle == "delivery") {
                                el.innerText = "Add";
                            } else {
                                el.innerText = "Add to Collection";
                            }
                        } else {
                            if (type_bundle == "delivery") {
                                el.innerText = "Add to Delivery";
                            } else {
                                el.innerText = "Add to Collection";
                            }
                        }
                    }
                });
                if (btn_addtocart != undefined) {
                    btn_addtocart.setAttribute("style", "pointer-events: auto;opacity: 1;");
                }
                if (btn_addtocart != undefined) {
                    btn_addtocart.parentNode.parentNode.setAttribute("style", "pointer-events: auto;opacity: 1;");
                }
            }, 2000);

        }
    });


    var pageType = "";
    switch (INC.config.pageType) {
        case "pdp":
            pageType = "107";
            break;
        case "productList":
            pageType = "101";
            break;
        case "cartPage":
            pageType = "103";
            break;
        case "other":
            pageType = "101";
            break;
    }
    var eventDataObj = {};
    if (INC.config.pageType == "productList") {
        var pageType = "catalog_category_view"
        eventdata = {
            "core_product_id": productObj.mainId,
            "product_id": productObj.mainId.toString(),
        }
        data = {
            "eventData": btoa((JSON.stringify({
                "event_data": eventdata,
                "page_type": pageType,
                "event_type": 'product_deal_add_to_cart',
                "method": "track",
                "platform": "",
                "token": INC.config.clientToken
            }))),
            "vid": readCookie('ivid'),
            "time": getCurrentFormattedTime(),
            "uri": document.location.href
        };
        makeTrackingApiCall(JSON.stringify(data));
    } else {
        if (INC.config.pageType == "cartPage") {
            eventDataObj["bundle_data"] = {
                "id": productObj.bundleId,
                "product_ids": [productObj.bundledProductId, productObj.mainId],
                "product_id": productObj.mainId
            }
        } else {
            eventDataObj["bundle_data"] = {
                "id": productObj.bundleId,
                "product_ids": [productObj.bundledProductId, productObj.mainId],
                "product_id": productObj.bundledProductId
            }
        }
        INC.methods.trackingEvents("bundleAddToCart", eventDataObj, pageType);
    }




}
INC.methods.addBundleToCart = function(btn_cart, type_bundle) {
    INC.clientConfig.OOS = []
    var form_key = "";
    if (document.querySelector('input[name="form_key"]') != null) {
        form_key = document.querySelectorAll('input[name="form_key"]')[0].value;
    }
    var addProductURL = INC.config.addToBasketURL
    var dataStore = INC.dataStore;
    var mainProductId = document.querySelector('.inc_pdp_product-main_block .inc_product_module_block').getAttribute('data-main_id');
    var pr_ids = []
    Object.keys(dataStore.bundleCartProducts).forEach(function(bundleCartProduct) {
        pr_ids.push("1")
    })
    var success_length = 0;
    var searchParamsObjArray = [];
    var url1 = "";
    var url2 = "";
    var url3 = "";
    var url4 = "";
    var url5 = "";
    var url6 = "";
    var param1 = ""
    var param2 = ""
    var param3 = ""
    var param4 = ""
    var param5 = ""
    var param6 = ""
    var count_pr_to_add = 0
    var total_length = Object.keys(dataStore.bundleCartProducts);
    INC.config.pdpaddedProductList = []
    var formData = []
    var related_product = document.querySelector('#product_addtocart_form input[name="related_product"]').value;
    Object.keys(dataStore.bundleCartProducts).forEach(function(bundleCartProduct) {

        var findObj = new INC.classes.FindObj({
            id: bundleCartProduct
        });
        var productObj = INC.dataStore.methods().getProductById(findObj);
        if (INC.debug) console.log(productObj);
        // addProductURL = addProductURL + btoa(productObj.url) + '/product/' + productObj.mainId;

        if (INC.config.pageType == "pdp") {
            INC.config.pdpaddedProductList.push(productObj.mainId)
        }


        var data = {}
        var addProductURL = INC.config.addToBasketURL
        // formData = new FormData();
        //&uenc='+btoa(addProductURL)+'
        if (type_bundle == 'delivery') {
            if (productObj.ProductType == "configurable") {
                addProductURL = addProductURL + btoa(productObj.url.split('?')[0]) + '/product/' + productObj.childsku;
                var form_param = 'product=' + productObj.childsku + '&isCollection: false&branchNumber=-1&selected_configurable_option=&related_product=&form_key=' + form_key + '&qty=' + dataStore.bundleCartProducts[bundleCartProduct] + ''

            } else {
                addProductURL = addProductURL + btoa('http://staging.bradfords.co.uk/everbuild-kos-fire-cement-1kg-kfc001') + '/product/' + productObj.childsku + "/";
                // var form_param = 'product=' + productObj.childsku + '&isCollection: false&branchNumber=-1&selected_configurable_option=&related_product=&form_key=' + form_key + '&qty=' + dataStore.bundleCartProducts[bundleCartProduct] + ''
                var form_param =  'product='+productObj.childsku+'&selected_configurable_option=&related_product=&form_key='+form_key+'&qty='+dataStore.bundleCartProducts[bundleCartProduct]+'&branchNumber=-1&isCollection=false'
            }
        } else if (type_bundle == 'collection') {
            if (productObj.ProductType == "configurable") {
                addProductURL = addProductURL + btoa(productObj.url.split('?')[0]) + '/product/' + productObj.childsku;
                var form_param = 'product=' + productObj.childsku + '&isCollection: false&branchNumber=-1&selected_configurable_option=&related_product=&form_key=' + form_key + '&qty=' + dataStore.bundleCartProducts[bundleCartProduct] + '&branchNumber=' + INC.config.storeId + '&isCollection=true'

            } else {
                addProductURL = addProductURL + btoa(productObj.url.split('?')[0]) + '/product/' + productObj.childsku;
                // var form_param = 'product=' + productObj.childsku + '&isCollection: false&branchNumber=-1&selected_configurable_option=&related_product=&form_key=' + form_key + '&qty=' + dataStore.bundleCartProducts[bundleCartProduct] + '&branchNumber=' + INC.config.storeId + '&isCollection=true'
                var form_param =  'product='+productObj.childsku+'&selected_configurable_option=&related_product=&form_key='+form_key+'&qty='+dataStore.bundleCartProducts[bundleCartProduct]+'&branchNumber=-1&isCollection=false'
            }
        }
        
        data["form_key"] = form_key;
        data["product"] = productObj.childsku;
        // data["uenc"] = btoa(addProductURL);
        data["branchNumber"] = '-1'
        data["related_product"] = related_product;
        data["qty"] = dataStore.bundleCartProducts[bundleCartProduct];
        formData.push(form_param)
        var params = form_param;
        if (INC.debug) console.log(params);


        var nwConfigObj = new INC.classes.NWConfig();
        nwConfigObj["url"] = addProductURL;
        nwConfigObj["method"] = 'POST';
        nwConfigObj["params"] = params;

        if (INC.debug) console.log(nwConfigObj["url"]);
        count_pr_to_add++
        if (count_pr_to_add == 1) {
            url1 = addProductURL
            param1 = params
        } else if (count_pr_to_add == 2) {
            url2 = addProductURL
            param2 = params
        } else if (count_pr_to_add == 3) {
            url3 = addProductURL
            param3 = params
        } else if (count_pr_to_add == 4) {
            url4 = addProductURL
            param4 = params
        } else if (count_pr_to_add == 5) {
            url5 = addProductURL
            param5 = params
        } else if (count_pr_to_add == 6) {
            url6 = addProductURL
            param6 = params
        }
        if (total_length.length == count_pr_to_add) {
            ajax_add_to_cart(url1, url2, url3, url4, url5, url6, param1, param2, param3, param4, param5, param6, btn_cart, mainProductId, type_bundle)
        }
    });

    var timeoutOffset = 0;


    setTimeout(function() {
        var cart_img_count = document.querySelectorAll('.cart-container ul li .m_product-image img')
        for (c = 0; c < cart_img_count.length; c++) {
            var cart_img_src = cart_img_count[c].getAttribute('data-src');
            cart_img_count[c].setAttribute('src', cart_img_src)
        }
    }, 6000)
}

function ajax_add_to_cart(url1, url2, url3, url4, url5, url6, param1, param2, param3, param4, param5, param6, btn_cart, mainProductId, type_bundle) {
    callprodA()

    function callprodA() {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url1, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                if (url2 == "") {
                    add_to_cart_tracking_multiple(mainProductId)
                    if (btn_cart != undefined) {
                        btn_cart.classList.remove('inc_loading')
                    }
    
                    document.querySelector('body').classList.add('inc_overlay');
                    INC.methods.showSidebar();
                    INC.methods.updateSidebarBlock(type_bundle);
    
    
                }

                if (url2 != "") {
                    callprodB()
                }

                if (INC.debug) console.log(xhr.response)
            }
        }
        xhr.send(param1);
    }

    function callprodB() {
        var xhr = new XMLHttpRequest();
        xhr.open('POST', url2, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                if (url3 == "") {
                    add_to_cart_tracking_multiple(mainProductId)
                    if (btn_cart != undefined) {
                        btn_cart.classList.remove('inc_loading')
                    }

                    document.querySelector('body').classList.add('inc_overlay');
                    INC.methods.showSidebar();
                    INC.methods.updateSidebarBlock(type_bundle);

                }
                if (url3 != "") {
                    callprodC()
                }

                if (INC.debug) console.log(xhr.response)
            }
        }
        xhr.send(param2);
    }

    function callprodC() {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url3, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                if(url4 == ""){
                    add_to_cart_tracking_multiple(mainProductId)
                    if (btn_cart != undefined) {
                        btn_cart.classList.remove('inc_loading')
                    }

                    document.querySelector('body').classList.add('inc_overlay');
                    INC.methods.showSidebar();
                    INC.methods.updateSidebarBlock(type_bundle);
                }
                if (url4 != "") {
                    callprodD()
                }

                if (INC.debug) console.log(xhr.response)
            }
        }
        xhr.send(param3);
    }
    function callprodD() {
        if (INC.config.basketId != null && param4.basketId == 0) {
            param4.basketId = INC.config.basketId
        }
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url4, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                if(url5 == ""){
                    add_to_cart_tracking_multiple(mainProductId)
                    if (btn_cart != undefined) {
                        btn_cart.classList.remove('inc_loading')
                    }

                    document.querySelector('body').classList.add('inc_overlay');
                    INC.methods.showSidebar();
                    INC.methods.updateSidebarBlock(type_bundle);
                }
                if (url5 != "") {
                    callprodE()
                }

                if (INC.debug) console.log(xhr.response)
            }
        }
        xhr.send(param4);
    }
    function callprodE() {
        if (INC.config.basketId != null && param5.basketId == 0) {
            param5.basketId = INC.config.basketId
        }
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url5, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                if(url6 == ""){
                    add_to_cart_tracking_multiple(mainProductId)
                    if (btn_cart != undefined) {
                        btn_cart.classList.remove('inc_loading')
                    }

                    document.querySelector('body').classList.add('inc_overlay');
                    INC.methods.showSidebar();
                    INC.methods.updateSidebarBlock(type_bundle);
                }
                if (url6 != "") {
                    callprodF()
                }

                if (INC.debug) console.log(xhr.response)
            }
        }
        xhr.send(param5);
    }
    function callprodF() {
        var xhr = new XMLHttpRequest();
        xhr.open("POST", url6, true);
        xhr.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        xhr.onreadystatechange = function () {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
                add_to_cart_tracking_multiple(mainProductId)
            if (btn_cart != undefined) {
                btn_cart.classList.remove('inc_loading')
            }

            document.querySelector('body').classList.add('inc_overlay');
            INC.methods.showSidebar();
            INC.methods.updateSidebarBlock(type_bundle);
            }
        }
        xhr.send(param6);
    }
    // jQuery.ajax({
    //     type: "POST",
    //     url: url1,
    //     data: param1,
    //     // dataType: "json",
    //     async: true,
    //     cache: false,

    //     success: function(data) {

    //         // success_length++

    //         if (url2 == "") {
    //             add_to_cart_tracking_multiple(mainProductId)
    //             if (btn_cart != undefined) {
    //                 btn_cart.classList.remove('inc_loading')
    //             }

    //             document.querySelector('body').classList.add('inc_overlay');
    //             INC.methods.showSidebar();
    //             INC.methods.updateSidebarBlock(type_bundle);


    //         }
    //         if (url2 != "") {
    //             jQuery.ajax({
    //                 type: "POST",
    //                 url: url2,
    //                 data: param2,
    //                 // dataType: "json",
    //                 async: true,
    //                 // processData: false,
    //                 // contentType: false,
    //                 error: function(jqXHR, textStatus, errorMessage) {

    //                 },
    //                 success: function(data) {

    //                     // success_length++

    //                     if (url3 == "") {
    //                         add_to_cart_tracking_multiple(mainProductId)
    //                         if (btn_cart != undefined) {
    //                             btn_cart.classList.remove('inc_loading')
    //                         }

    //                         document.querySelector('body').classList.add('inc_overlay');
    //                         INC.methods.showSidebar();
    //                         INC.methods.updateSidebarBlock(type_bundle);

    //                     }
    //                     if (url3 != "") {
    //                         jQuery.ajax({
    //                             type: "POST",
    //                             url: url3,
    //                             data: param3,
    //                             // dataType: "json",
    //                             async: true,
    //                             // processData: false,
    //                             // contentType: false,
    //                             error: function(jqXHR, textStatus, errorMessage) {

    //                             },
    //                             success: function(data) {

    //                                 // success_length++

    //                                 if (url4 == "") {
    //                                     add_to_cart_tracking_multiple(mainProductId)
    //                                     if (btn_cart != undefined) {
    //                                         btn_cart.classList.remove('inc_loading')
    //                                     }

    //                                     document.querySelector('body').classList.add('inc_overlay');
    //                                     INC.methods.showSidebar();
    //                                     INC.methods.updateSidebarBlock(type_bundle);

    //                                 }
    //                                 if (url4 != "") {
    //                                     jQuery.ajax({
    //                                         type: "POST",
    //                                         url: url4,
    //                                         data: param4,
    //                                         // dataType: "json",
    //                                         async: true,
    //                                         // processData: false,
    //                                         // contentType: false,
    //                                         error: function(jqXHR, textStatus, errorMessage) {

    //                                         },
    //                                         success: function(data) {

    //                                             // success_length++

    //                                             if (url5 == "") {
    //                                                 add_to_cart_tracking_multiple(mainProductId)
    //                                                 if (btn_cart != undefined) {
    //                                                     btn_cart.classList.remove('inc_loading')
    //                                                 }

    //                                                 document.querySelector('body').classList.add('inc_overlay');
    //                                                 INC.methods.showSidebar();
    //                                                 INC.methods.updateSidebarBlock(type_bundle);

    //                                             }
    //                                             if (url5 != "") {
    //                                                 jQuery.ajax({
    //                                                     type: "POST",
    //                                                     url: url5,
    //                                                     data: param5,
    //                                                     // dataType: "json",
    //                                                     async: true,
    //                                                     // processData: false,
    //                                                     // contentType: false,
    //                                                     error: function(jqXHR, textStatus, errorMessage) {

    //                                                     },
    //                                                     success: function(data) {

    //                                                         if (url6 == "") {
    //                                                             add_to_cart_tracking_multiple(mainProductId)
    //                                                             if (btn_cart != undefined) {
    //                                                                 btn_cart.classList.remove('inc_loading')
    //                                                             }

    //                                                             document.querySelector('body').classList.add('inc_overlay');
    //                                                             INC.methods.showSidebar();
    //                                                             INC.methods.updateSidebarBlock(type_bundle);

    //                                                         }
    //                                                         if (url6 != "") {
    //                                                             jQuery.ajax({
    //                                                                 type: "POST",
    //                                                                 url: url6,
    //                                                                 data: param6,
    //                                                                 // dataType: "json",
    //                                                                 async: true,
    //                                                                 // processData: false,
    //                                                                 // contentType: false,
    //                                                                 error: function(jqXHR, textStatus, errorMessage) {

    //                                                                 },
    //                                                                 success: function(data) {

    //                                                                     // success_length++

    //                                                                     add_to_cart_tracking_multiple(mainProductId)
    //                                                                     if (btn_cart != undefined) {
    //                                                                         btn_cart.classList.remove('inc_loading')
    //                                                                     }

    //                                                                     document.querySelector('body').classList.add('inc_overlay');
    //                                                                     INC.methods.showSidebar();
    //                                                                     INC.methods.updateSidebarBlock(type_bundle);
    //                                                                 }
    //                                                             });
    //                                                         }
    //                                                     }
    //                                                 });
    //                                             }
    //                                         }
    //                                     });
    //                                 }
    //                             }
    //                         });
    //                     }
    //                 }
    //             });
    //         }
    //     },
    //     error: function(jqXHR, textStatus, errorMessage) {
    //         // console.log("Error:", errorMessage)
    //     }

    // });
}

function add_to_cart_tracking_multiple(mainProductId) {
    var event_type = "bundle_add_to_cart";
    var core_prod_id = "";
    var productIdsforTracking = []
    core_prod_id = mainProductId;

    pageType = "100";
    // eventdata = { "id": bundleId, "product_ids": productIdsforTracking, "product_id": core_prod_id.toString() }
    var all_data = [];
    for (var k = 0; k < INC.config.bundle_tracking.length; k++) {
        if (INC.config.bundle_tracking.length == 1) {
            productIdsforTracking.push(mainProductId)
            productIdsforTracking.push(INC.config.bundle_tracking[k].id)
            all_data.push({
                id: parseInt(INC.config.bundle_tracking[k].bid),
                product_ids: productIdsforTracking,
                product_id: core_prod_id
            })
            productIdsforTracking = []
        } else {
            if (mainProductId != INC.config.bundle_tracking[k].id) {
                productIdsforTracking.push(mainProductId)
                productIdsforTracking.push(INC.config.bundle_tracking[k].id)
                all_data.push({
                    id: parseInt(INC.config.bundle_tracking[k].bid),
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
            "token": INC.config.clientToken,
            "mb": "1"
        }))),
        "vid": INC.config.ivid,
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


INC.methods.checkStatusVAT = function() {
    if (INC.methods.checkStatusLoggedIn()) return "false";
    var cookieArray = document.cookie.split(";");
    var statusVAT = "true";
    cookieArray.forEach(function(cookie) {
        var cookieSplit = cookie.split("=");
        if (cookieSplit[0].trim() == "includeVat") {
            // if (INC.debug) console.log(cookieSplit[1].trim());
            statusVAT = cookieSplit[1].trim();
        }
    });

    return statusVAT;
}

INC.methods.checkStatusLoggedIn = function() {
    var cookieArray = document.cookie.split(";");
    var statusLoggedIn = false;
    cookieArray.forEach(function(cookie) {
        var cookieSplit = cookie.split("=");
        if (cookieSplit[0].trim() == "customer_name") {
            statusLoggedIn = true;
        }
    });

    return statusLoggedIn;
}


INC.methods.trackingEvents = function(eventType, eventDataObj, pageType) {

    // var importEventDataObj = new INC.classes.EventData(eventDataObj);
    var importEventDataObj = {};
    var importDataObj = {};

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


            importEventDataObj["is_logged"] = "0";
            importEventDataObj["method"] = "track";
            INC.methods.sendAffiliateRequest();
            break;
        case "bundleAddToCart":
            importEventDataObj["event_type"] = "bundle_add_to_cart";
            importEventDataObj["page_type"] = pageType;
            importEventDataObj["is_logged"] = (INC.clientConfig.statusLoggedIn == true) ? "1" : "0";
            importEventDataObj["method"] = "track";
            INC.methods.sendAffiliateRequest();
            break;
    }

    importEventDataObj["platform"] = "";
    importEventDataObj["token"] = INC.config.clientToken;
    // if (INC.debug) console.log(importEventDataObj);
    importDataObj["eventData"] = btoa(JSON.stringify(importEventDataObj));
    importDataObj["uri"] = window.location.href;
    importDataObj["vid"] = INC.config.ivid;
    INC.methods.sendTrackingEvents(importDataObj);
}

INC.methods.sendTrackingEvents = function(importDataObj) {


    var xhr = new XMLHttpRequest();
    var method = "POST";
    var url = INC.config.trackingURL;
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

INC.methods.sendAffiliateRequest = function() {
    var url = INC.config.affiliateURL;
    var oImg = document.createElement("img");
    oImg.setAttribute('id', 'cstracking')
    oImg.setAttribute('src', url);
    oImg.setAttribute('height', '1px');
    oImg.setAttribute('width', '1px');
    oImg.setAttribute('style', 'display:none')
    document.body.appendChild(oImg);
}
INC.methods.addVisitorID = function() {

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
    cookieArray.forEach(function(cookie) {
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

    // var oImg = document.createElement("img");
    // oImg.setAttribute('src', "///optimizedby.increasingly.co/GetVisitorId?ivid=" + ivid);
    // oImg.setAttribute('height', '1px');
    // oImg.setAttribute('width', '1px');
    // oImg.setAttribute('style', 'display:none');
    // document.body.appendChild(oImg);

    INC.config.ivid = ivid;

    return ivid;
}


INC.checkDevUserCookie();


document.onclick = clickListener;

function clickListener(e) {
    var clickedElement = (window.event) ?
        window.event.srcElement :
        e.target,
        tags = document.getElementsByTagName(clickedElement.tagName);
    try {
        if (clickedElement.innerText != "In-Store Pickup" && clickedElement.innerText != "Add to wishlist" && clickedElement.innerText != "In-Store Pickup") {
            if (clickedElement.className == "inc_product_modal_block active") {
                document.querySelector('body').classList.remove('inc_overlay');
                if (document.querySelector('.inc_product_Info_Full_desc_info_block.show_full_desc') != null) {
                    document.querySelector('.inc_product_Info_Full_desc_info_block.show_full_desc .close_read_more').click()
                }
                clickedElement.classList.remove('active')
            }
            if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
                //INC.config.user_interaction_modal = false
            }

            if (clickedElement.className == "inc_pdp_bundle_cart_overlay_block active") {
                document.querySelector('.inc_pdp_bundle_cart_title_img_block').click()
            }
            //add-to-cart
            
            if (document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active') == null) {
                if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
                    if (document.querySelector('.close_read_more') != null) {
                        document.querySelector('.close_read_more').click()
                    }
                    document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
                }
            }
            if (document.querySelector('.inc_sidebar_modal_block.active') == null) {
                 if(clickedElement.id == "product-addtocart-delivery-button"  || clickedElement.innerText == "CONTINUE" && clickedElement.parentNode.parentNode.parentNode.parentNode.classList.contains('delivery-popup') == true){
                 }else if (clickedElement.innerHTML == "Add To Collection") {

                 }else{
                    // if ((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true) {
                    //     if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1 && window.innerWidth < 1337) {
                    //         if (document.querySelector('.inc_pdp_block') != null) {
                    //             jQuery("html, body").animate({
                    //                 scrollTop: jQuery(".inc_pdp_block").offset().top - 80
                    //             }, 0);
                    //         } else if (document.querySelector('.inc_af_block') != null) {
                    //             jQuery("html, body").animate({
                    //                 scrollTop: jQuery(".inc_af_block").offset().top - 80
                    //             }, 0);
                    //         }
                    //     }
                    // }
                 }
                
                document.querySelector('html').classList.remove('inc_overlay');
            }
            //autoselection 
            if (clickedElement.parentNode != null) {
                if (clickedElement.parentNode != null) {
                    if (clickedElement.parentNode.parentNode != null) {
                        if ((INC.config.pageType == "pdp" && clickedElement.parentNode.parentNode.parentNode != undefined)) {
                            if (clickedElement.parentNode.className != null) {
                                if (clickedElement.className == "swatchanchor") {
                                    if (document.querySelector('.swatches .selectable') != null) {
                                        client_var = clickedElement.innerText.trim().toLocaleLowerCase()
                                        if (document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + client_var + '"] div') != undefined) {
                                            document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + client_var + '"] div').click()
                                        } else if (document.querySelector('.inc_product_modal_block .inc_product_desc_att_size_list_item_img_block[datasize="' + client_var + '"] div') != null) {
                                            document.querySelector('.inc_product_modal_block .inc_product_desc_att_size_list_item_img_block[datasize="' + client_var + '"] div').click()
                                        }
                                        setTimeout(function() {
                                            if (document.querySelector('.inc_pdp_block') != null) {
                                                if (document.querySelector('#add-to-cart') != null) {
                                                    if (document.querySelector('#add-to-cart').disabled == true && document.querySelector('#product-content .product-variations') == null) {
                                                        document.querySelector('.inc_pdp_block').style.display = "none"
                                                    } else {
                                                        document.querySelector('.inc_pdp_block').style.display = "block"
                                                    }
                                                } else {
                                                    document.querySelector('.inc_pdp_block').style.display = "none"
                                                }
                                            }
                                        }, 4000)
                                    }
                                }
                            }

                        }
                    }
                }
            }

        }
    } catch (err) {
        var formData = new FormData();
        formData.append("EmailId", "garima@increasingly.com");
        formData.append("Subject", 'JS Error on BradFords');
        formData.append("Message", err + 'Error Stack' + err.stack);
        var xhr = new XMLHttpRequest();
        xhr.open("POST", '//api.increasingly.co/SendEmail', true);
        xhr.send(formData);
    }
}


setTimeout(function() {
    if (window.innerWidth < 820) {
        window.addEventListener("orientationchange", function() {
            if (window.matchMedia("(orientation: portrait)").matches) {
                console.log("PORTRAIT")
                INC.config.deviceMode = "PORTRAIT"
                var inc_pdp_block_rem = document.querySelector(".inc_pdp_block");
                if (inc_pdp_block_rem != null) {
                    inc_pdp_block_rem.parentNode.removeChild(inc_pdp_block_rem);
                    var sidebar_rem = document.querySelector(".inc_sidebar_modal_block");
                    sidebar_rem.parentNode.removeChild(sidebar_rem);
                    var over_rem = document.querySelector(".inc_sidebar_overlay_block");
                    over_rem.parentNode.removeChild(over_rem);
                    setTimeout(function() {
                        INC.init();
                    }, 0)
                }

            }
            if (window.matchMedia("(orientation: landscape)").matches) {
                console.log("LANSCAPE")
                INC.config.deviceMode = "LANSCAPE";
                var inc_pdp_block_rem = document.querySelector(".inc_pdp_block");
                if (inc_pdp_block_rem != null) {
                    inc_pdp_block_rem.parentNode.removeChild(inc_pdp_block_rem);
                    var sidebar_rem = document.querySelector(".inc_sidebar_modal_block");
                    sidebar_rem.parentNode.removeChild(sidebar_rem);
                    var over_rem = document.querySelector(".inc_sidebar_overlay_block");
                    over_rem.parentNode.removeChild(over_rem);
                    setTimeout(function() {
                        INC.init();
                    }, 0)
                }
            }
        }, false);
    }
    if (typeof(jQuery) != "undefined") {
        jQuery(window).resize(function() {
            if (document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_list_main_block') != null) {
                document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_list_main_block').setAttribute("style", "margin-left:0");
                if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > 3) {
                    document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_left-btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                    document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_right-btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                    if (isIE()) {
                        document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
                        document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
                    }
                }
                INC.clientConfig.slidevalue = 0
                INC.clientConfig.offset = 0
                INC.clientConfig.slidevalue = 0
            }
            var seidebar_pr_length = document.querySelectorAll('.inc_sidebar_modal_block .inc_product_module_block').length;

            if (seidebar_pr_length != undefined) {
                if (seidebar_pr_length > 2) {
                    INC.clientConfig.slidevalue = 0

                    if (document.querySelector('.inc_recommended_products_list_block') != null) {
                        document.querySelector('.inc_recommended_products_list_block').setAttribute('style', 'margin-left:0;')
                        document.querySelector('.inc_recommended_products_right_block').style.visibility = "visible";
                        document.querySelector('.inc_recommended_products_right_block .inc_recommended_products_right_btn_img').setAttribute("style", "pointer-events: auto;opacity:1");
                        document.querySelector('.inc_recommended_products_right_block').style.visibility = "visible";
                        document.querySelector('.inc_recommended_products_right_block .inc_recommeded_products_right_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                        document.querySelector('.inc_recommended_products_left_block').style.visibility = "visible";
                        document.querySelector('.inc_recommended_products_left_block .inc_recommended_products_left_btn_block').style.visibility = "visible";
                        document.querySelector('.inc_recommended_products_left_block .inc_recommended_products_left_btn_block .inc_recommended_products_left_btn_img').style.visibility = "visible";

                        document.querySelector('.inc_recommended_products_left_block .inc_recommended_products_left_btn_block .inc_recommended_products_left_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
                        document.querySelector('.inc_recommended_products_left_block').setAttribute("style", "opacity:0.5");
                        INC.clientConfig.slidevalue = 0
                        INC.clientConfig.offset = 0
                        INC.clientConfig.slidevalue = 0
                    }
                }
            }
            if (document.querySelector('.inc_best_sellers .inc_af_product-list_block') != null) {
                document.querySelector('.inc_best_sellers .inc_af_product-list_block').setAttribute("style", "margin-left:0");
                if (document.querySelectorAll('.inc_best_sellers .inc_product_module_block').length > 3) {
                    document.querySelector('.inc_best_sellers .inc_af_left_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                    document.querySelector('.inc_best_sellers .inc_af_right_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");

                }
                INC.clientConfig.slidevalue = 0
                INC.clientConfig.offset = 0
                INC.clientConfig.slidevalue = 0
                // if(document.querySelector('.inc_af_block') != null){
                //     if(window.innerWidth > 1366){
                //         document.querySelector('.inc_af_block').style.width="862px"
                //     } else if(window.innerWidth > 979){
                //         document.querySelector('.inc_af_block').style.width="697px"
                //     }else if(window.innerWidth > 961){
                //         document.querySelector('.inc_af_block').style.width="684px"
                //     }
                // }
            }
            if (document.querySelector('.inc_af_block') != null) {

                if (window.innerWidth < 1367) {
                    if (INC.config.dekstop == true) {
                        var amblock = document.querySelector('.inc_af_block')
                        amblock.parentNode.removeChild(amblock);
                        INC.config.dekstop = false
                        INC.config.tab = true
                        INC.init();
                    }
                } else if (window.innerWidth > 970) {
                    if (INC.config.tab == true) {
                        var amblock = document.querySelector('.inc_af_block')
                        amblock.parentNode.removeChild(amblock);
                        INC.config.tab = false
                        INC.config.dekstop = true
                        INC.init();
                    }
                }
            }
        });
        if (typeof(jQuery) != "undefined") {
            jQuery(window).on('scroll', function() {
                var y_scroll_pos = window.pageYOffset;
                //var scroll_pos_test = element_position;
                var inc_div = document.querySelector(".inc_pdp_block");
                if (document.querySelector('.inc_pdp_block') != null) {
                    if (document.querySelector('.inc_pdp_block') != null) {
                        var width_min = 300
                        var widthplus = 600 //225;
                        if (window.innerWidth > 500) {
                            var width_min = 200
                            var widthplus = 450
                        }
                        if (window.innerWidth < 600) {
                            if (y_scroll_pos >= inc_div.offsetTop - width_min && y_scroll_pos <= inc_div.offsetTop + widthplus) {
                                if (document.querySelector('.inc_pdp_block') != null) {
                                    if (document.querySelector('#chat-widget-container') != null) {
                                        document.querySelector('body').classList.add('inc_hide_chat');
                                    }
                                }
                            } else {
                                if (document.querySelector('.inc_pdp_block') != null) {
                                    if (document.querySelector('#chat-widget-container') != null) {
                                        document.querySelector('body').classList.remove('inc_hide_chat');
                                    }
                                }
                            }
                        }
                        var width_minbtn = 300 //top to bottom
                        var widthplusbtn = 250 // bottom to top
                        if (window.innerWidth > 500) {
                            var width_minbtn = 200
                            var widthplusbtn = 450
                        }
                        if (window.innerWidth < 600) {
                            if (y_scroll_pos >= inc_div.offsetTop - width_minbtn && y_scroll_pos <= inc_div.offsetTop + widthplusbtn) {
                                if (document.querySelector('.inc_pdp_block') != null) {

                                    if (document.querySelector('body').classList.contains('.inc_sticky_add_to_cart') == false) {
                                        document.querySelector('body').classList.add('inc_sticky_add_to_cart');
                                    }
                                }
                            } else {
                                if (document.querySelector('.inc_pdp_block') != null) {

                                    if (document.querySelector('body') != null) {
                                        document.querySelector('body').classList.remove('inc_sticky_add_to_cart');
                                    }
                                }
                            }
                        }
                    }
                }
            });
        }
    }
}, 3000)

function login_user() {
    if (document.querySelector('.authenticated-user a') != null) {
        if (document.querySelector('.authenticated-user a').innerText.indexOf('increasingly') >= 0) {

            return true
        }

    }
}

function read_more_inc(element) {
    var prod_desc_block = element.parentNode.parentNode.parentNode.parentNode.parentNode;
    prod_desc_block.querySelector('.inc_product_Info_Full_desc_info_block').classList.toggle('show_full_desc')
}

function plp_quickView(wrapper) {
    INC.config.quick_view = false;
    setTimeout(function() {
        var is_selected = false;
        if (document.querySelector('.ui-dialog.o_dialog-modal.size') != null) {
            if (document.querySelector('.ui-dialog.o_dialog-modal.size').style.display == "none") {
                is_selected = true;
            }
        } else if (document.querySelector('.m_variant-swatches.color') != null) {
            is_selected = true;
        } else if (document.querySelector('.m_variant-swatches.color') == null && document.querySelector('.ui-dialog.o_dialog-modal.size') == null) {
            is_selected = true;
        }
        if (is_selected) {
            var product_wrap = wrapper;

            setTimeout(function() {
                var productId = product_wrap.querySelector('.product-availability input[name="pid"]').value;
                var p_img = product_wrap.querySelector('picture img').src;
                var p_name = product_wrap.querySelector('h1[itemprop="name"]').innerText;
                var prc = product_wrap.querySelector('.price-container span').innerText.replace(/[^\d\.\,\s]+/g, '');
                if (product_wrap.querySelector('.strong.font-color-red') != null) { //orig-price
                    var s_prc = product_wrap.querySelector('.price-container span.orig-price').innerText.replace(/[^\d\.\,\s]+/g, '');

                }
                if (s_prc != null) {
                    var p_activePrice = s_prc
                    var regularPrice = s_prc
                } else {
                    var p_activePrice = prc
                    var regularPrice = prc
                }
                var qty = product_wrap.querySelector('.input-container input').value;
                INC.config.empty_prod_details.push({
                    p_id: productId,
                    p_name: p_name,
                    p_img: p_img,
                    p_activePrice: p_activePrice,
                    regularPrice: regularPrice
                })
                if (document.querySelector('.stock.ui-dialog-buttons') != null) {
                    if (document.querySelector('.stock.ui-dialog-buttons').style.display == "none") {
                        INC.dataStore.plpProductQty = qty;
                        INC.methods.clear();
                        INC.methods.irbReq(productId, 10, "catalog_product_view");
                    }
                } else {
                    INC.dataStore.plpProductQty = qty;
                    INC.methods.clear();
                    INC.methods.irbReq(productId, 10, "catalog_product_view");
                }
                INC.config.plpstorebtnclick = null;
            }, 300)
        }

        //}
    }, 400)
}




function slideTo(id, n, elm, type_of) {
    if (elm.className == "left_arrow" || elm.className == "left_arrow active") {
        var nn = -1
        inc_showSlides(INC.config.inc_slideIndex += nn, nn, elm, type_of);
    } else {
        var nn = 1
        inc_showSlides(INC.config.inc_slideIndex += nn, nn, elm, type_of);
    }
}

function inc_showSlides(n, ind, elm, type_of) {
    var i;
    var showcase_other_img_list = elm.querySelector('.inc_product_module_block .inc_product_showcase_block .inc_product_img_main_img a')
    var modal_other_img_list = elm.querySelector('.inc_product_module_block .inc_product_modal_block .inc_product_img_main_img a')
    var showcase_dots = elm.querySelectorAll('.inc_product_module_block .inc_product_showcase_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block')
    var modal_dots = elm.querySelectorAll('.inc_product_module_block .inc_product_modal_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block')

    var showcase_other_img = elm.querySelector('.inc_product_module_block .inc_product_showcase_block .inc_product_img_main_img a img')

    var modal_other_img = elm.querySelector('.inc_product_module_block .inc_product_modal_block .inc_product_img_main_img a img')

    var otherImg_list = showcase_other_img_list.getAttribute('otherImageList');
    var additional_img = []
    var additional_img = otherImg_list.split(',');
    var get_org_img = showcase_other_img_list.getAttribute('imageURL')
    if (n > additional_img.length) {
        INC.config.inc_slideIndex = 1
    }
    if (n < 1) {
        INC.config.inc_slideIndex = additional_img.length
    }

    for (i = 0; i < showcase_dots.length; i++) {
        showcase_dots[i].classList.remove('active')
        if (modal_dots[i] != undefined) {
            modal_dots[i].classList.remove('active')
        }
    }
    var img_src = additional_img[INC.config.inc_slideIndex - 1];
    showcase_other_img.setAttribute('src', img_src);
    modal_other_img.setAttribute('src', img_src)
    showcase_other_img.setAttribute('onerror', "this.src='" + get_org_img + "'");
    modal_other_img.setAttribute('onerror', "this.src='" + get_org_img + "'");

    for (var r = 0; r < showcase_dots.length; r++) {
        showcase_dots[r].classList.remove('active');

        modal_dots[r].classList.remove('active');

    }
    if (showcase_dots[INC.config.inc_slideIndex - 1] != null) {
        showcase_dots[INC.config.inc_slideIndex - 1].classList.add('active');
    }
    if (modal_dots[INC.config.inc_slideIndex - 1] != null) {
        modal_dots[INC.config.inc_slideIndex - 1].classList.add('active');
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
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            /*most significant*/
            if (xDiff > 0) {
                console.log("Math.abs(xDiff) + Math.abs(yDiff) > 150")
                var prod_card = evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                slideTo(null, 0, prod_card, "left")
            } else {
                /* right swipe */
                console.log("Math.abs(xDiff) + Math.abs(yDiff) > 150  else")
                var prod_card = evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                slideTo(null, 0, prod_card, "right")
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    }
    if (Math.abs(xDiff) + Math.abs(yDiff) < 150) {
        if (Math.abs(xDiff) > Math.abs(yDiff)) {
            /*most significant*/
            if (xDiff > 0) {
                /* left swipe */
                var prod_card = evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                slideTo(null, 0, prod_card, "left")
            } else {
                /* right swipe */
                var prod_card = evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                slideTo(null, 0, prod_card, "right")
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    }
}


var formatter = new Intl.NumberFormat('en-GB', {
    style: 'currency',
    currency: 'GBP',
});

function cb_tc(bundle_response) {
    var bundles_tc = bundle_response.Bundles;
    var bundleproductarrayTC={}
    for (var ibT = 0; ibT < bundle_response.ProductsDetail.length; ibT++) {
        bundleproductarrayTC[bundle_response.ProductsDetail[ibT].ProductId] = bundle_response.ProductsDetail[ibT]
    }
    for (var i = 0; i < bundles_tc.length; i++) {
        if (INC.config.dupDataObjectProducts.indexOf(bundles_tc[i].BundleId) == -1) {
            INC.config.dupDataObjectProducts.push(bundles_tc[i].BundleId)
            var irbBundleObj = bundles_tc[i];
            var bundleObj = {};
            bundleObj.id = irbBundleObj["BundleId"];
            // if (INC.debug) console.log(bundleObj.id);
            bundleObj.totalRegularPrice = irbBundleObj["TotalPrice"];
            bundleObj.totalActivePrice = irbBundleObj["TotalSpecialPrice"];
            bundleObj.totalBundlePrice = irbBundleObj["TotalBundlePrice"];
            bundleObj.totalBundleDiscountPrice = irbBundleObj["DiscountPrice"];
            bundleObj.productCount = irbBundleObj["ProductCount"];


            var irbProductsArray = irbBundleObj["ProductIds"];
            if (irbProductsArray.length) {
                pdpProductId = irbProductsArray[0];
                if(INC.dataStore.bundleProductsArray != undefined){
                    INC.dataStore.bundleProductsArray.push(irbProductsArray[1]);
                }
            }

            for (var j = 0; j < irbProductsArray.length; j++) {
                var product = bundleproductarrayTC[irbProductsArray[j]];
                if (product["SpecialPrice"] == 0) {
                    product["SpecialPrice"] = product["Price"]
                }
                if (isBase64(product["Description"]) == true) {
                    product["Description"] = (product["Description"])
                } else {
                    // product["Description"] = product["Description"]
                    try {
                        if (product["Description"] != "" && product["Description"] != null) {
                            if (product["Description"] != "" && product["Description"] != null) {
                                if (product["Description"].indexOf('the') >= 0 || product["Description"].indexOf('for') >= 0 || product["Description"].indexOf('of') >= 0 || product["Description"].indexOf('and') >= 0 || product["Description"].indexOf('is') >= 0 || product["Description"].indexOf('are') >= 0 || product["Description"].indexOf('FROM') >= 0 || product["Description"].indexOf('from') >= 0 || product["Description"].indexOf('*') >= 0 || product["Description"].indexOf('Round') >= 0) {
                                    product["Description"] = product["Description"]
                                } else {
                                    product["Description"] = (product["Description"])
                                }

                            }
                        }
                    } catch (e) {
                        product["Description"] = product["Description"]
                    }

                }
                var pAttributes = product["Attributes"] || "";
                if (pAttributes != "" && pAttributes != null) {
                    pAttributes = attribute_listing(pAttributes)
                }
                var pAttObj = {};
                for (t = 0; t < pAttributes.length; t++) {
                    pAttributes[t].attributeId = t
                    var attr_values = pAttributes[t].attributeValues;
                    for (v = 0; v < attr_values.length; v++) {
                        attr_values[v].optionId = t;
                    }
                }

                if (pAttributes.length) {
                    for (var k = 0; k < pAttributes.length; k++) {
                        var pAttributesObj = pAttributes[k];
                        var pAttributesValues = pAttributesObj["attributeValues"];

                        for (var l = 0; l < pAttributesValues.length; l++) {
                            var childProduct = pAttributesValues[l];
                            if (childProduct["childProductId"] == null) {
                                childProduct["childProductId"] = product["ProductId"];
                                childProduct["childProductSku"] = product["ProductId"];
                                childProduct["childProductName"] = product["ProductName"];
                                childProduct["childProductImageUrl"] = product["ImageURL"];
                                childProduct["childProductOtherImageUrl"] = product["OtherImageList"];
                                childProduct["childProductUrl"] = product["ProductUrl"];
                                childProduct["childProductPrice"] = product["Price"];
                                childProduct["childProductSpecialPrice"] = product["SpecialPrice"];
                                childProduct["childProductDescription"] = product["Description"];
                                childProduct["childInternalProductId"] = product["ProductId"]
                            }
                            if (childProduct["childProductImageUrl"] == "") {
                                childProduct["childProductImageUrl"] = product["ImageURL"];
                            }
                            childProduct["childProductImageUrl"] = childProduct["childProductImageUrl"].replace('staging.buildex.co.uk', 'www.buildex.co.uk')
                            childProduct["childProductUrl"] = childProduct["childProductUrl"].replace('', '').replace('staging.buildex.co.uk', 'www.buildex.co.uk')


                            childProduct["PromotionalMessage"] = product["PromotionalMessage"];
                            childProduct["ProductLevelDiscountMessage"] = product["ProductLevelDiscountMessage"];
                            childProduct["childCategoryName"] = product["CategoryName"];
                            childProduct["childProductField6"] = product["Field6"];
                            childProduct["childCategoryId"] = product["CategoryId"];
                            childProduct["childProductDescription"] = product["Description"];
                            childProduct["ShortDescription"] = product["Description"];
                            childProduct["Field3"] = product["Field3"];

                            var productObj = new INC.classes.ProductAttObj(childProduct);

                            productObj["bundledProductId"] = pdpProductId;
                            productObj.mainId = product["ProductId"];
                            productObj.bundleId = bundleObj.id;
                            productObj.sku = productObj.id;
                            productObj.option[pAttributesObj["attributeId"]].id = pAttributesObj["attributeId"];
                            productObj.option[pAttributesObj["attributeId"]].label = pAttributesObj["frontEndLabel"];
                            productObj.option[pAttributesObj["attributeId"]].code = pAttributesObj["attributeCode"];
                            productObj.Filed3 = product["Field1"];
                            productObj.ProductLevelDiscountMessage = product["ProductLevelDiscountMessage"];
                            if (!INC.dataStore.dataStoreObj.hasOwnProperty(product['ProductId'])) {
                                INC.dataStore.dataStoreObj[product['ProductId']] = {};
                            }
                            if (!INC.dataStore.dataStoreObj[product['ProductId']].hasOwnProperty(productObj['id'])) {
                                INC.dataStore.dataStoreObj[product['ProductId']][productObj['id']] = {}
                            }
                            pAttObj = INC.dataStore.dataStoreObj[product['ProductId']][productObj['id']];


                            for (pAtt in productObj) {
                                if (pAtt == "option") {
                                    if (!pAttObj.hasOwnProperty('option')) {
                                        pAttObj["option"] = {}
                                    }

                                    Object.keys(productObj[pAtt]).forEach(function(key) {
                                        pAttObj[pAtt][key] = productObj[pAtt][key];
                                    });
                                } else {
                                    pAttObj[pAtt] = productObj[pAtt];
                                }
                            }
                        }

                    }
                }

                if (pAttributes.length == 0) {
                    var productObj = new INC.classes.ProductObj(product);
                    productObj["bundleId"] = irbBundleObj["BundleId"];
                    productObj["bundledProductId"] = pdpProductId;
                    productObj.sku = productObj.id;
                    productObj.Filed3 = product["Field1"];
                    productObj.ProductLevelDiscountMessage = product["ProductLevelDiscountMessage"];
                    if(INC.dataStore.dataStoreObj != undefined){
                        if (!INC.dataStore.dataStoreObj.hasOwnProperty(productObj['mainId'])) {
                            INC.dataStore.dataStoreObj[productObj['mainId']] = {};
                        }
                        INC.dataStore.dataStoreObj[productObj['mainId']][productObj['id']] = {};
                        if (!!window.MSInputMethodContext && !!document.documentMode) {
                            INC.dataStore.dataStoreObj[productObj['mainId']][productObj['id']] = JSON.parse(JSON.stringify(productObj));
                        } else {
                            INC.dataStore.dataStoreObj[productObj['mainId']][productObj['id']] = Object.assign({}, productObj);
                        }
                    }
                }
            }
        }
    }

    setTimeout(function() {
        INC.methods.createPDPBlock("sidebar")
    })

}

function attribute_listing(valueArray) {

    sortingArr = ["color", "size"];

    items = valueArray

    sorting = ["color", "size"];
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




function cb_category_based(bundleResponse) {
    INC.dataStore = {};
    var incDataStore = INC.dataStore;
    INC.dataStore.clientProductDealsCategory = "";
    var bundles = bundleResponse.CategoryRecommendations;



    var dataStoreObj = {};
    var bundleProductsArray = [];
    var pdpProductId = '';

    for (var i = 0; i < 1; i++) {
        // var irbBundleObj = bundles[i];
        var bundleObj = {};
        // bundleObj.id = irbBundleObj["BundleId"];
        // INC.dataStore.bundleProductsArray
        var irbProductsArray = bundles;
        if (irbProductsArray.length) {
            pdpProductId = irbProductsArray[0]["ProductId"];
        }

        for (var j = 0; j < irbProductsArray.length; j++) {
            var product = irbProductsArray[j];
            if (isBase64(product["Description"]) == true) {
                product["Description"] = (product["Description"])
            } else {
                // product["Description"] = product["Description"]
                try {
                    if (product["Description"] != "" && product["Description"] != null) {
                        if (product["Description"] != "" && product["Description"] != null) {
                            if (product["Description"].indexOf('the') >= 0 || product["Description"].indexOf('for') >= 0 || product["Description"].indexOf('of') >= 0 || product["Description"].indexOf('and') >= 0 || product["Description"].indexOf('is') >= 0 || product["Description"].indexOf('are') >= 0 || product["Description"].indexOf('FROM') >= 0 || product["Description"].indexOf('from') >= 0 || product["Description"].indexOf('*') >= 0) {
                                product["Description"] = product["Description"]
                            } else {
                                product["Description"] = (product["Description"])
                            }

                        }
                    }
                } catch (e) {
                    product["Description"] = product["Description"]
                }

            }
            bundleProductsArray.push(product.ProductId)
            var pAttributes = product["Attributes"] || "";
            if (pAttributes != "" && pAttributes != null) {
                pAttributes = attribute_listing(pAttributes)
            }
            var pAttObj = {};
            for (t = 0; t < pAttributes.length; t++) {
                pAttributes[t].attributeId = t
                var attr_values = pAttributes[t].attributeValues;
                for (v = 0; v < attr_values.length; v++) {
                    attr_values[v].optionId = t;
                }
            }
            product["ImageURL"] = product["ImageURL"].replace('staging.buildex.co.uk', 'www.buildex.co.uk')
            product["ProductUrl"] = product["ProductUrl"].replace('', '').replace('staging.buildex.co.uk', 'www.buildex.co.uk')
            if (pAttributes.length) {
                for (var k = 0; k < pAttributes.length; k++) {
                    var pAttributesObj = pAttributes[k];
                    var pAttributesValues = pAttributesObj["attributeValues"];

                    for (var l = 0; l < pAttributesValues.length; l++) {
                        var childProduct = pAttributesValues[l];
                        if (childProduct["childProductId"] == null) {
                            childProduct["childProductId"] = product["ProductId"];
                            childProduct["childProductSku"] = product["ProductId"];
                            childProduct["childProductName"] = product["ProductName"];
                            childProduct["childProductImageUrl"] = product["ImageURL"];
                            childProduct["childProductOtherImageUrl"] = product["OtherImageList"];
                            childProduct["childProductUrl"] = product["ProductUrl"];
                            childProduct["childProductPrice"] = product["Price"];
                            childProduct["childProductSpecialPrice"] = product["SpecialPrice"];
                            childProduct["childProductDescription"] = product["Description"];
                            childProduct["childInternalProductId"] = product["ProductId"]
                        }
                        if (childProduct["childProductImageUrl"] == "") {
                            childProduct["childProductImageUrl"] = product["ImageURL"];
                        }
                        childProduct["childProductImageUrl"] = childProduct["childProductImageUrl"].replace('staging.buildex.co.uk', 'www.buildex.co.uk')
                        childProduct["childProductUrl"] = childProduct["childProductUrl"].replace('', '').replace('staging.buildex.co.uk', 'www.buildex.co.uk')
                        childProduct["PromotionalMessage"] = product["PromotionalMessage"];
                        childProduct["ProductLevelDiscountMessage"] = product["ProductLevelDiscountMessage"];
                        childProduct["childCategoryName"] = product["CategoryName"];
                        childProduct["childProductField6"] = product["Field6"];
                        childProduct["childCategoryId"] = product["CategoryId"];
                        childProduct["childProductDescription"] = product["Description"];
                        childProduct["ShortDescription"] = product["Description"];
                        childProduct["Field3"] = product["Field3"];

                        // if(pAttributesObj["attributeCode"] == "color"){
                        //     childProduct["optionId"] = "2"
                        //     pAttributesObj["attributeId"] = "2"
                        // }else{
                        //     childProduct["optionId"] = "1"
                        //     pAttributesObj["attributeId"] = "1"
                        // }
                        //
                        var productObj = new INC.classes.ProductAttObj(childProduct);

                        productObj["bundledProductId"] = pdpProductId;
                        productObj.mainId = product["ProductId"];
                        productObj.bundleId = bundleObj.id;
                        productObj.sku = productObj.id;
                        productObj.option[pAttributesObj["attributeId"]].id = pAttributesObj["attributeId"];
                        productObj.option[pAttributesObj["attributeId"]].label = pAttributesObj["frontEndLabel"];
                        productObj.option[pAttributesObj["attributeId"]].code = pAttributesObj["attributeCode"];
                        productObj.Filed3 = product["Field1"];
                        productObj.ProductLevelDiscountMessage = product["ProductLevelDiscountMessage"];
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

                                Object.keys(productObj[pAtt]).forEach(function(key) {
                                    pAttObj[pAtt][key] = productObj[pAtt][key];
                                });
                                // }
                            } else {
                                pAttObj[pAtt] = productObj[pAtt];
                            }
                        }

                        // if(INC.debug) console.log("child product after update");
                        // if(INC.debug) console.log(pAttObj);
                    }

                }
            }

            if (pAttributes.length == 0) {
                var productObj = new INC.classes.ProductObj(product);
                // productObj["bundleId"] = irbBundleObj["BundleId"];
                productObj["bundledProductId"] = pdpProductId;
                productObj.sku = productObj.id;
                productObj.Filed3 = product["Field1"];
                productObj.ProductLevelDiscountMessage = product["ProductLevelDiscountMessage"];
                if (!dataStoreObj.hasOwnProperty(productObj['mainId'])) {
                    dataStoreObj[productObj['mainId']] = {};
                }

                // if(!dataStoreObj[product['mainId']].hasOwnProperty(product['id'])){
                //     dataStoreObj[product['mainId']['id']] = {};
                // }

                dataStoreObj[productObj['mainId']][productObj['id']] = {};
                if (!!window.MSInputMethodContext && !!document.documentMode) {
                    dataStoreObj[productObj['mainId']][productObj['id']] = JSON.parse(JSON.stringify(productObj));
                } else {
                    dataStoreObj[productObj['mainId']][productObj['id']] = Object.assign({}, productObj);
                }

                // dataStoreObj[productObj['mainId']][productObj['id']] = Object.assign({}, productObj);
            }
            // productArray.push(pAttObj);
        }

    }

    incDataStore.dataStoreObj = dataStoreObj;
    incDataStore.bundleProductsArray = bundleProductsArray;
    incDataStore.pdpProductId = pdpProductId;
    if (INC.debug) console.log("DataStore");
    if (INC.debug) console.log(incDataStore)
    // if(INC.debug) console.log(incDataStore);
    incDataStore.bundleCartProducts = {};
    // if(INC.debug) console.log("");

    setTimeout(function() {
        INC.methods.createAMBlock();
    }, 100)
}


function isBase64(str) {
    try {
        return btoa(atob(str)) == str;
    } catch (err) {
        return false;
    }
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
var timeOut = 2200
if (isIE()) {
    timeOut = 3100
}

INC.methods.sendCrawlData = function() {
    function buildCrawlDataObj() {

        var elQtyDataAll = document.querySelectorAll('.price_breaks th');
        var elBulkQuantityMessage = document.querySelector('.bulkbuy.upp.tc.fl.pr_hide');
        var elProductQtyMsg = document.querySelector('.uos.pr_hide');

        var productId = INC.methods.getProductIdFromWebPage();
        var productType = "DeliveryOnly"
        if(document.querySelector('#product-addtocart-collection-button') != null && document.querySelector('#product-addtocart-delivery-button') != null){
            productType = "Both"
        }
        else if(document.querySelector('#product-addtocart-collection-button') != null && document.querySelector('#product-addtocart-delivery-button') == null){
            productType = "CollectOnly"
        }


        var productObj = {
            "product_id": productId,
            // "product_name": productTitle,
            // "field4": productQtyMsg + bulkQuantityMessage + qtyDataText.join("|")
            "field6" : productType
        }

        if (INC.debug) console.log(productObj);

        sendCrawlData(productObj);
    }

    function sendCrawlData(productObj) {
        var eventData = {
            "event_data": productObj,
            "event_type": "product_page_visit",
            "method": "track",
            "token": "bDS7f1r"
        };
        var crawlData = {
            "eventData": btoa(JSON.stringify(eventData)),
            "uri": window.location.origin + window.location.pathname
        }
        var xhr = new XMLHttpRequest();
        var method = "POST";
        var url = "https://gather.increasingly.com/ImportCrawledData";
        xhr.onreadystatechange = handleStateChange;
        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');

        function handleStateChange() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (INC.debug) console.log(xhr.responseText);
            }
        }
        xhr.send(JSON.stringify(crawlData));
        if (INC.debug) console.log(crawlData)
        if (INC.debug) console.log(eventData);
    }

    buildCrawlDataObj();
}

var _isVisible = {
    viewport: {},
    _index: 0,
    _imgs: null,
    _active: false,
    _init: function(data) {
        this.viewport.top = window.pageYOffset;
        this.viewport.bottom = this.viewport.top + window.innerHeight;
        this._imgs = document.querySelectorAll(data.classSelector);
        this._index = data.index;
        this._active = true;
        this.getImages();
    },
    checkVisibility: function(elm) {
        if (typeof (elm) == "undefined")
            return;
        var bounds = {};
        bounds.top = elm.getBoundingClientRect().top + window.pageYOffset;
        bounds.bottom = bounds.top + elm.clientHeight;
        return (bounds.bottom >= this.viewport.top && bounds.bottom <= this.viewport.bottom) || (bounds.top <= this.viewport.bottom && bounds.top >= this.viewport.top);
    },
    getImages: function() {
        (function(elm) {
            var imgLoader = window.setInterval(function() {
                if (elm.checkVisibility(elm._imgs[elm._index])) {
                    switch (elm._imgs[elm._index].tagName) {
                    case "IMG":
                        if (!(elm._imgs[elm._index].src.indexOf("img_placeholder") == -1)) {
                            elm._imgs[elm._index].src = elm._imgs[elm._index].getAttribute('data-src');
                        }
                        break;
                    case "SOURCE":
                        //https://gzinc.increasingly.co/Implementation/tA7T9/images/img_placeholder.gif
                        //if (!(elm._imgs[elm._index].srcset.indexOf("https") > -1)) {
                        if (!(elm._imgs[elm._index].srcset.indexOf("img_placeholder") == -1)) {
                            elm._imgs[elm._index].srcset = elm._imgs[elm._index].getAttribute('data-src');
                        }
                        break;
                    }
                }
                elm._index++;
            }, 10);
        }
        )(this);
    }
}
  window.addEventListener('scroll', function() {
    _isVisible._init({
        classSelector: ".inc_pdp_block img[data-src], .inc_pdp_block source[data-src], .inc_sidebar_modal_block img[data-src], .inc_sidebar_modal_block source[data-src], .inc_af_block img[data-src], .inc_af_block source[data-src]",
        index: 0
    }, {passive: true});
});
window.addEventListener('mousemove', function() {
    _isVisible._init({
        classSelector: ".inc_pdp_block img[data-src], .inc_pdp_block source[data-src], .inc_sidebar_modal_block img[data-src], .inc_sidebar_modal_block source[data-src], .inc_af_block img[data-src], .inc_af_block source[data-src]",
        index: 0
    });
}, {passive: true});
document.addEventListener('DOMContentLoaded', function() {
    _isVisible._init({
        classSelector: ".inc_pdp_block img[data-src], .inc_pdp_block source[data-src], .inc_sidebar_modal_block img[data-src], .inc_sidebar_modal_block source[data-src], .inc_af_block img[data-src], .inc_af_block source[data-src]",
        index: 0
    });
}, {passive: true});