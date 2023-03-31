var INC = (typeof (INC) == "undefined") ? {} : INC;
var init_flag = true
INC.ENV = "prod";
INC.debug = 0;
INC.initStatus = "";
INC.initStatusCP = "";
var prefix = "inc_";
var postfix = "_block";
var onloadpdp = false;
var crawl_click = false;

var onloadpdp_delete = false;
INC.checkDevUserCookie = function () {
    if (INC.ENV == "prod") {
        setTimeout(function () {
            INC.config.pageType = INC.methods.detectPageType();
            if (INC.debug) console.log(INC.config.pageType);

            if (init_flag) {
                init_flag = false;
                INC.init();
            }
        }, 200);
    }
}
var inc_scroll_height = 100
var item_inc = []
INC.clientConfig = {};
INC.clientConfig.currencySymbol = "";
// INC.clientConfig.currencySymbol = "$";
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
INC.clientConfig.loggedInUser = "";
INC.clientConfig.offset = 0;
INC.clientConfig.slidevalue = 0;
INC.config = {};
INC.config.deviceType = "";
INC.config.clientToken = "p3ThM9cON";
INC.config.trackingURL = "https://optimizedby.increasingly.co/ImportData";
INC.config.addToBasketURL = "https://www.petsathome.com/webapp/wcs/stores/servlet/AjaxOrderChangeServiceItemAdd";
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
INC.clientConfig.OOS = []
INC.config.disablebtn = true;
INC.config.sidebarremovedprod = [];
INC.config.bundle_skuPushed = []
INC.config.FBTTitle = "Frequently Bought together"
INC.config.AddText = "Add"
INC.config.AddedText = "Added"
INC.config.TotalText = "Total"
INC.config.AddToCartText = "Add to Cart"
INC.config.ItemAddedToCarttext = "Just Added to your Basket"
INC.config.ExcItemAlreadyinCartText = "(excludes items already in Basket)"
INC.config.NosText = "items"
INC.config.OtherCustAlsoBoughtText = "Other customers also bought"
INC.config.ContinueShopping = "Continue Shopping"
INC.config.CartText = "View Basket & Checkout"
INC.config.BeforeYouChecktext = "Customers Also Bought"
INC.config.ViewDetailsText = "View details"
INC.config.DescriptionText = "Description"
INC.config.SeeOtherProdText = "See other products"
INC.config.ColorSizeText = "Color / size"
INC.config.EditText = "Edit"
INC.config.UpdateText = "UPDATE"
INC.config.addingText = "Adding"
INC.config.qtyText = "Quantity:"
INC.config.addtocartsecondarytext = "Add to Basket"
INC.config.noimage = "https://www.increasingly.co/Implementation/p3ThM9/images/noimage.png"
INC.config.recommendation = false;
INC.config.clientbtn = true;
INC.config.sumarybtnrem = false;
INC.config.categorytabclick = false;
INC.config.recommendationProduct = []
INC.config.srcImgeLazy = "https://www.increasingly.co/Implementation/p3ThM9/images/img_placeholder.gif";
var price_array = [];
var x_price_array = [];
if(window.location.host == "www.syt02.pahtest.com"){
    INC.clientConfig.checkoutLink = "https://www.syt02.pahtest.com/shop/Basket?storeId=10151&langId=-1&catalogId=10651&krypto=auWLPddlMHZmWi7zY9RWSpje1S%2BJFy9sAcGATXIQD%2BBEoGMK%2F9iWhV7nSNwsDsWGTRzJYPmAYzGi%0AC4sIH6VNN1C7bxzhr%2FjFfK%2BykX2y7xvBmG%2BKv26zsvgjMLtutcGSbb96zDitZ3Sp33JiUl7scbxa%0A3u5%2BHoEHtVKw78AgYWzpWwZY142QT02RjBg47fXTOipqZid0uVC3d0tyoq9%2BAMYgGYLGRCqaFMqp%0A0M87HVU%3D"
    INC.config.addToBasketURL = "https://www.syt02.pahtest.com/webapp/wcs/stores/servlet/AjaxOrderChangeServiceItemAdd"
}
else if (!(window.location.host == "www.uat03p.pahtest.com")) {
    INC.clientConfig.checkoutLink = "https://www.petsathome.com/shop/Basket?storeId=10151&langId=-1&catalogId=10651";
    INC.config.addToBasketURL = "https://www.petsathome.com/webapp/wcs/stores/servlet/AjaxOrderChangeServiceItemAdd";
} else {
    INC.clientConfig.checkoutLink = "https://www.uat03p.pahtest.com/shop/Basket?storeId=10151&langId=-1&catalogId=10651&krypto=auWLPddlMHY%2FX9GGJALkFuwi1kL91wDjAsAeALJ%2Fb5UuU4%2B%2F1YATS7HpCYCG%2FnDnBGWMmLMD50ZU%0AGCZvpqw57CdCbQKGY%2FHSzTYpuEf%2BVe7hXp7FQ1PlQrm2Sdl9fJDsKlZnfbeCWDsRdHpvpV3nMkG1%0ARCwUoktkgCmsV7svh6KyxqAlralHCe7l92qs60Hvwdik%2Fb%2Fc0PBkfs%2BlKv0kXh0Pd%2BlalV%2BUBc4F%0AJ2y8fA8%3D";
    INC.config.addToBasketURL = "https://www.uat03p.pahtest.com/webapp/wcs/stores/servlet/AjaxOrderChangeServiceItemAdd";
}

function isIE() {
    ua = navigator.userAgent;
    /* MSIE used to detect old browsers and Trident used to newer ones*/
    var is_ie = ua.indexOf("MSIE ") > -1 || ua.indexOf("Trident/") > -1;
    return is_ie;
}

function isBase64(str) {
    try {
        return btoa(atob(str)) == str;
    } catch (err) {
        return false;
    }
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

function generate_html_tag(element, className) {
    var generateEl = document.createElement(element);
    className ? generateEl.classList.add(className) : null;
    return generateEl;
}

INC.init = function () {
    INC.methods.addVisitorID();
    INC.config.recommendation = false;
    INC.config.deviceType = INC.methods.detectDeviceType();
    INC.config.pageType = INC.methods.detectPageType();
    INC.config.language = INC.methods.detectLanguage();
    INC.clientConfig.statusVAT = INC.methods.checkStatusVAT();
    INC.clientConfig.statusLoggedIn = INC.methods.checkStatusLoggedIn();
    if (INC.debug) console.log(INC.config.pageType);
    if (INC.debug) console.log(INC.clientConfig.statusVAT);
    INC.methods.clear();
    setTimeout(function () {
        if (document.querySelector('.dth-mini-basket__items__qty-remove') == null) {
            var clientDomain = window.location.host.replace("www", "");
            var emptyarra = []
            var d = new Date();
            d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = 'ividData=' + JSON.stringify(emptyarra) + '; expires=' + expires + '; domain=' + clientDomain + '; path=/' + '; secure:' + true + ';'
        }
    }, 2000);
    switch (INC.config.pageType) {
        case "pdp":

            if (INC.debug) console.log("on pdp page");
            // INC.config.recommendation = true
            setTimeout(function () {
                // document.querySelector('.pdp-product-details .add-to-basket__add-btn .disabled')
                // if(document.querySelector('.pdp-product-details .add-to-basket__add-btn .disabled') == null){

                // }
                var sqpdetailsflag = false;
                if (document.querySelector('#AddToCartForm') != null) {
                    if (document.querySelector('#AddToCartForm').getAttribute('action').indexOf('SQPDetailsForm') >= 0) {
                        sqpdetailsflag = true
                    }
                }
                if (sqpdetailsflag == false) {
                    //add showsidebar function
                    if (document.querySelector('.add-to-basket__btn-row .btn.add-to-basket__add-btn.disabled') != null) {
                        if (!(document.querySelector('.add-to-basket__btn-row .btn.add-to-basket__add-btn.disabled').innerText.toLocaleLowerCase() == "add for delivery")) {
                            var productId = INC.methods.getProductIdFromWebPage();
                            INC.methods.irbReq(productId, 5, "catalog_product_view");
                        }
                    } else {
                        var productId = INC.methods.getProductIdFromWebPage();
                        INC.methods.irbReq(productId, 5, "catalog_product_view");
                    }
                }

            }, 0);

            break;
        case "cartPage":
            if (INC.debug) console.log("on cart page");
            setTimeout(function () {
                var productIds = [];
                if (window.oiProducts != undefined) {
                    Array.prototype.forEach.call(window.oiProducts, function (elProductCode) {
                        var productId = elProductCode.id;
                        productIds.push(productId);
                    });
                } else {
                    Array.prototype.forEach.call(document.querySelectorAll('.dth-mini-basket__items__qty-remove'), function (elProductCode) {
                        if (elProductCode.getAttribute('data-parentprn') != undefined) {
                            productIds.push(elProductCode.getAttribute('data-parentprn'));
                        }
                    });
                    //
                }
                if (productIds.length == 0) {
                    var datalayer = dataLayer
                    for (j = 0; j < datalayer.length; j++) {
                        if (datalayer != null) {
                            if (datalayer[j].event == "checkout") {
                                if (datalayer[j].ecommerce != undefined) {
                                    if (datalayer[j].ecommerce.checkout != undefined) {
                                        if (datalayer[j].ecommerce.checkout.products != undefined) {
                                            var elproducts = datalayer[j].ecommerce.checkout.products
                                            for (ll = 0; ll < elproducts.length; ll++) {
                                                productIds.push(elproducts[ll].id)
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
                if (INC.debug) console.log(productIds);

                if (productIds.length > 0) {
                    INC.methods.irbReq(productIds, 12, "checkout_cart_index");
                }

            }, 0);
            break;
        case "productList":
            break;
    }

}




INC.dataStore = {};
INC.dataStore.methods = function () {
    var incDataStore = INC.dataStore;
    var dataStoreObj = {};

    function buildDataStoreObj(bundleResponse) {
        INC.config.dupDataObjectProducts = []

        // var incDataStore = {};
        INC.dataStore.clientProductDealsCategory = "";

        if (INC.config.recommendation == true) {
            // var bundles = [];
            // bundles.push({
            //     BundleId : '12345'
            // })
        } else {
            var bundles = bundleResponse.Bundles;
        }

        var productDealCount = 0;
        if (bundleResponse.ProductDeals != null) {
            bundleResponse.ProductDeals.forEach(function (productDealObj) {
                bundles.push({
                    BundleId: bundles[0]["BundleId"],
                    Products: [bundles[0].Products[0], productDealObj]
                });

                INC.dataStore.clientProductDealsCategory = productDealObj.CategoryId;
            });
        }



        var dataStoreObj = {};
        var bundleproductarray = {}
        var bundleProductsArray = [];

        if (window.location.pathname == "/shop/Basket" || INC.config.recommendation || window.location.href.indexOf('CheckoutBasket') >= 0) {
            var productIds_d = [];
            if (window.oiProducts != undefined) {
                Array.prototype.forEach.call(window.oiProducts, function (elProductCode) {
                    var productId = elProductCode.id;
                    productIds_d.push(productId);
                });
            } else {
                Array.prototype.forEach.call(document.querySelectorAll('.dth-mini-basket__items__qty-remove'), function (elProductCode) {
                    productIds_d.push(elProductCode.getAttribute('data-parentprn'));
                });
            }
            if (productIds_d.length == 0) {
                var datalayer = dataLayer
                for (j = 0; j < datalayer.length; j++) {
                    if (datalayer != null) {
                        if (datalayer[j].event == "checkout") {
                            if (datalayer[j].ecommerce != undefined) {
                                if (datalayer[j].ecommerce.checkout != undefined) {
                                    if (datalayer[j].ecommerce.checkout.products != undefined) {
                                        var elproducts = datalayer[j].ecommerce.checkout.products
                                        for (ll = 0; ll < elproducts.length; ll++) {
                                            productIds_d.push(elproducts[ll].id)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if (bundleResponse.ProductsDetail != undefined || INC.config.recommendation == true) {
            if (INC.config.recommendation == true) {
                // for (var ib = 0; ib < bundleResponse.CategoryRecommendations.length; ib++) {
                //     bundleproductarray[bundleResponse.CategoryRecommendations[ib].ProductId] = bundleResponse.CategoryRecommendations[ib]
                // }
            } else {
                for (var ib = 0; ib < bundleResponse.ProductsDetail.length; ib++) {
                    bundleproductarray[bundleResponse.ProductsDetail[ib].ProductId] = bundleResponse.ProductsDetail[ib]
                }
            }
            // if (bundleResponse.ProductsDetail != null) {
            //     for (var ib = 0; ib < bundleResponse.ProductsDetail.length; ib++) {
            //         bundleproductarray[bundleResponse.ProductsDetail[ib].ProductId] = bundleResponse.ProductsDetail[ib]
            //     }
            // } else if (bundleResponse.CategoryRecommendations != null) {
            //     for (var ib = 0; ib < bundleResponse.CategoryRecommendations.length; ib++) {
            //         bundleproductarray[bundleResponse.CategoryRecommendations[ib].ProductId] = bundleResponse.CategoryRecommendations[ib]
            //     }
            // }

            for (var i = 0; i < bundles.length; i++) {
                if (INC.config.dupDataObjectProducts.indexOf(bundles[i].BundleId) == -1) {
                    if (INC.config.recommendation == false) {
                        INC.config.dupDataObjectProducts.push(bundles[i].BundleId)
                    }
                    if (INC.config.recommendation == true) {
                        // var irbBundleObj = bundleResponse;
                    } else {
                        var irbBundleObj = bundles[i];
                    }
                    var bundleObj = {};

                    if (INC.config.recommendation == true) {} else {
                        bundleObj.id = irbBundleObj["BundleId"];
                    }

                    if (INC.config.recommendation == false) {
                        bundleObj.id = irbBundleObj["BundleId"];
                        bundleObj.totalRegularPrice = irbBundleObj["TotalPrice"];
                        bundleObj.totalActivePrice = irbBundleObj["TotalSpecialPrice"];
                        bundleObj.totalBundlePrice = irbBundleObj["TotalBundlePrice"];
                        bundleObj.totalBundleDiscountPrice = irbBundleObj["DiscountPrice"];
                        bundleObj.productCount = irbBundleObj["ProductCount"];
                    }

                    if (INC.config.recommendation == true) {
                        // var irbProductsArray = irbBundleObj.CategoryRecommendations;
                    } else {
                        var irbProductsArray = irbBundleObj["ProductIds"]
                    }

                    if (INC.config.recommendation == false) {
                        if (irbProductsArray) {

                            if (window.location.pathname == "/shop/Basket" || INC.config.recommendation || window.location.href.indexOf('CheckoutBasket') >= 0) {
                                if (productIds_d.indexOf(irbProductsArray[0]) >= 0) {
                                    pdpProductId = irbProductsArray[0];
                                    if (INC.clientConfig.statusLoggedIn == false) {
                                        bundleProductsArray.push(irbProductsArray[1]);
                                    }
                                } else if (productIds_d.indexOf(irbProductsArray[1]) >= 0) {
                                    pdpProductId = irbProductsArray[1];
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

                    if (INC.config.recommendation == true) {
                        // bundleProductsArray.push(bundles[i]["ProductId"]);
                    }
                    for (var j = 0; j < irbProductsArray.length; j++) {
                        if (INC.config.recommendation == true) {
                            // bundleProductsArray.push(irbProductsArray[j].ProductId);
                            // INC.config.recommendationProduct.push(irbProductsArray[j].ProductId)
                            // var product = irbProductsArray[j]
                        } else {
                            var product = bundleproductarray[irbProductsArray[j]]
                        }
                        if (INC.config.recommendation == false) {
                            if (product["OtherImageList"] != null) {
                                if (product["OtherImageList"].indexOf(product["ImageURL"]) == -1) {
                                    // product["OtherImageList"].unshift(product["ImageURL"])
                                }
                            }
                        }

                        if (INC.config.recommendation == false) {
                            if (isBase64(product["Description"]) == true) {
                                try {
                                    product["Description"] = Base64.decode(product["Description"])
                                } catch (e) {
                                    product["Description"] = product["Description"]
                                }
                            } else {
                                try {
                                    if (product["Description"] != "" && product["Description"] != null) {
                                        if (product["Description"].indexOf('the') >= 0 || product["Description"].indexOf('br') >= 0 || product["Description"].indexOf('<a>') >= 0 || product["Description"].indexOf('<p>') >= 0 || product["Description"].indexOf('<span>') >= 0 || product["Description"].indexOf('and') >= 0 || product["Description"].indexOf('<a')) {
                                            product["Description"] = product["Description"]
                                        } else {
                                            product["Description"] = Base64.decode(product["Description"])
                                        }

                                    }
                                } catch (e) {
                                    product["Description"] = product["Description"]
                                }

                            }
                        }

                        var pAttributes = product["Attributes"] || "";
                        if (pAttributes != "" && pAttributes != null) {
                            for (var h = 0; h < pAttributes.length; h++) {
                                if (pAttributes[h].frontEndLabel == "color") {
                                    pAttributes[h].frontEndLabel = "Color"
                                }
                                if (pAttributes[h].frontEndLabel == "size") {
                                    pAttributes[h].frontEndLabel = "Size"
                                }
                                if (pAttributes[h].frontEndLabel == "weight") {
                                    pAttributes[h].frontEndLabel = "Weight"
                                }
                                if (pAttributes[h].frontEndLabel == "colour") {
                                    pAttributes[h].frontEndLabel = "Color"
                                }
                                if (pAttributes[h].frontEndLabel == "volume") {
                                    pAttributes[h].frontEndLabel = "Volume"
                                }
                                pAttributes[h].attributeCode = pAttributes[h].frontEndLabel;
                            }
                            pAttributes = attribute_listing(pAttributes)
                        }

                        var pAttObj = {};
                        for (t = 0; t < pAttributes.length; t++) {
                            if (pAttributes.length == 1) {
                                if (pAttributes[0].attributeCode == "Color" || pAttributes[0].attributeCode == "color") {
                                    pAttributes[0].attributeId = 0;
                                    var attr_values = pAttributes[t].attributeValues;
                                    for (v = 0; v < attr_values.length; v++) {
                                        attr_values[v].optionId = 0;
                                    }
                                } else {
                                    pAttributes[0].attributeId = 1;
                                    var attr_values = pAttributes[t].attributeValues;
                                    for (v = 0; v < attr_values.length; v++) {
                                        attr_values[v].optionId = 1;
                                    }
                                }
                            } else {
                                pAttributes[t].attributeId = t
                                var attr_values = pAttributes[t].attributeValues;
                                for (v = 0; v < attr_values.length; v++) {
                                    attr_values[v].optionId = t;
                                }
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
                                    childProduct["PromotionalMessage"] = product["PromotionalMessage"];
                                    childProduct["ProductLevelDiscountMessage"] = product["ProductLevelDiscountMessage"];
                                    childProduct["childCategoryName"] = product["CategoryName"];
                                    childProduct["childProductField6"] = product["Field6"];
                                    childProduct["childCategoryId"] = product["CategoryId"];
                                    childProduct["childProductDescription"] = product["Description"];
                                    childProduct["ShortDescription"] = product["ShortDescription"];
                                    childProduct["Field5"] = product["Field5"];
                                    childProduct["ProductType"] = product["ProductType"];
                                    childProduct["mainSKU"] = product["ProductSku"];
                                    childProduct["childProductIdmain"] = product["ProductId"];

                                    childProduct["childProductImageUrlMain"] = product["ImageURL"];
                                    childProduct["childProductPriceMain"] = product["Price"];
                                    childProduct["childProductSpecialPriceMain"] = product["SpecialPrice"];
                                    childProduct["childProductNameMain"] = product["ProductName"];
                                    childProduct["childProductUrlMain"] = product["ProductUrl"];
                                    childProduct["Field1"] = product["Field1"];

                                    childProduct["childProductOtherImageUrl"] = product["OtherImageList"];
                                    childProduct["childProductName"] = product["ProductName"];
                                    childProduct["Manufacturer"] = product["Manufacturer"];
                                    var productObj = new INC.classes.ProductAttObj(childProduct);

                                    productObj["bundledProductId"] = pdpProductId;
                                    productObj.mainId = product["ProductId"];
                                    productObj.bundleId = bundleObj.id;
                                    productObj.sku = productObj.id;
                                    productObj.option[pAttributesObj["attributeId"]].id = pAttributesObj["attributeId"];
                                    productObj.option[pAttributesObj["attributeId"]].label = pAttributesObj["frontEndLabel"];
                                    productObj.option[pAttributesObj["attributeId"]].code = pAttributesObj["attributeCode"];
                                    // productObj.Filed3 = product["Field1"];
                                    productObj.Filed3 = product["Field3"] + " | " + product["Field4"];
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

                                    // if(INC.debug) console.log("child product after update");
                                    // if(INC.debug) console.log(pAttObj);
                                }

                            }
                        }

                        if (pAttributes.length == 0) {
                            var productObj = new INC.classes.ProductObj(product);
                            productObj["bundleId"] = irbBundleObj["BundleId"];
                            if (INC.config.recommendation == false) {
                                productObj["bundledProductId"] = pdpProductId;
                            }
                            productObj.sku = productObj.id;
                            // productObj.Filed3 = product["Field1"];
                            productObj.Filed3 = product["Field3"] + " | " + product["Field4"];
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
        }
        // console.log(bundleProductsArray)
        incDataStore.dataStoreObj = dataStoreObj;
        incDataStore.bundleProductsArray = bundleProductsArray;
        if (INC.config.recommendation == false) {
            incDataStore.pdpProductId = INC.methods.getProductIdFromWebPage();
        }
        if (INC.debug) console.log("DataStore");
        if (INC.debug) console.log(incDataStore)
        // if(INC.debug) console.log(incDataStore);
        incDataStore.bundleCartProducts = {};
        // if(INC.debug) console.log("");
    }

    function getFirstProductObjByMainId(findObj) {
        //debugger
        var childProductObj = {};
        var productListObj = INC.dataStore.dataStoreObj;

        // childProductObj = productListObj[findObj["mainId"]][Object.keys(productListObj[findObj["mainId"]])[0]];
        if (productListObj != undefined) {
            childProductObj = productListObj[findObj["mainId"]][Object.keys(productListObj[findObj["mainId"]])[0]];
        }

        return childProductObj;
    }

    function getProductById(findObj) {
        var childProductObj = {};
        var productListObj = INC.dataStore.dataStoreObj;
        // if (INC.debug) console.log(findObj);
        if (findObj.hasOwnProperty("id")) {
            for (mainProductId in productListObj) {
                for (childProductId in productListObj[mainProductId]) {
                    // if (INC.debug) console.log(childProductId == findObj["id"]);
                    if (productListObj[mainProductId][childProductId]["id"] == findObj["id"]) {
                        childProductObj = productListObj[mainProductId][childProductId];
                    }
                }
            }
        }
        // if (INC.debug) console.log(childProductObj);
        return childProductObj;
    }

    function getProductBySKU(findObj, type) {
        var childProductObj = {};
        var productListObj;
        if (type == "collection") {
            productListObj = INC_COL.dataStore.dataStoreObj;
        } else {
            productListObj = INC.dataStore.dataStoreObj;
        }

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

    function getUniqueCatergories(coll) {
        var catergoriesArray = [];

        var productListObj = INC.dataStore.dataStoreObj;
        var bundleProductsArray = INC.dataStore.bundleProductsArray;
        if(coll == "coll") {
            productListObj = INC_COL.dataStore.dataStoreObj;
            bundleProductsArray = Object.keys(INC_COL.dataStore.dataStoreObj)
        }

        bundleProductsArray.forEach(function (productId) {

            for (childProductId in productListObj[productId]) {
                var indexOfCategoryId = catergoriesArray.indexOf(productListObj[productId][childProductId]["categoryId"]);
                // if (INC.debug) console.log(productListObj[productId][childProductId]["categoryId"]);
                if (indexOfCategoryId == -1 && productListObj[productId][childProductId]["categoryId"] != INC.dataStore.clientProductDealsCategory) {
                    catergoriesArray.push(productListObj[productId][childProductId]["categoryId"]);
                }
            }
        });

        // catergoriesArray.push(INC.dataStore.clientProductDealsCategory);
        // if (INC.debug) console.log(catergoriesArray);
        return catergoriesArray;
    }

    function sorting_data(json_object, key_to_sort_by) {
        function sortByKey(a, b) {
            var x = a[key_to_sort_by];
            var y = b[key_to_sort_by];
            return ((x < y) ? -1 : ((x > y) ? 1 : 0));
        }

        json_object.sort(sortByKey);
    }

    function sortByKey(array, key) {
        return array.sort(function (a, b) {
            var x = a[key],
                y = b[key];
            if (typeof x === 'string') {
                x = x.toLowerCase();
                y = y.toLowerCase();
                if (!isNaN(x) && !isNaN(y)) {
                    x = parseInt(x, 10);
                    y = parseInt(y, 10);
                }
            }
            return (x < y ? -1 : (x > y ? 1 : 0));
        });
    }


    function getProductColorsObj(findObj, type_of) {
        var productColorObj = {};
        var productListObj = INC.dataStore.dataStoreObj;
        var productColorArrayObj = {}
        var productColorObjArray = [];
        var option_ids = ""
        var c_pid = ""
        var is_color = true;
        if (findObj.hasOwnProperty("mainId")) {
            for (mainProductId in productListObj) {
                if (mainProductId == findObj["mainId"]) {
                    for (childProductId in productListObj[mainProductId]) {
                        if (productListObj[mainProductId][childProductId]["option"]["0"] != undefined) {
                            if (productListObj[mainProductId][childProductId]["option"]["0"].code == "Color") {
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
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["0"]["cpid"];
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
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["0"]["cpid"];
                                            }
                                        } else {
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]] = {};
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = "";
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = "";
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["0"]["titleText"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["0"]["colorCode"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["0"]["imgSrc"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["0"]["code"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["0"]["cpid"];
                                        }
                                    } else {
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
                            } else {
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
        var c_pid = "";
        var prc = "";
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
                            // var opt_color_text=attr_block.getAttribute('data-color');

                            if (opt_size_text == undefined) {
                                var opt_size_text = ""
                            }
                            if (opt_text == undefined) {
                                var opt_text = ""
                            }
                            if (opt_color_text == undefined) {
                                var opt_color_text = ""
                            }
                            // var opt_text=type_of.parentNode.parentNode.parentNode.getAttribute('data-zero');
                            // var opt_text=type_of.innerText

                            if (opt_text != "" && productListObj[mainProductId][childProductId].option[1] != undefined) {
                                if (productListObj[mainProductId][childProductId].option[1].text == opt_text) {
                                    if (productListObj[mainProductId][childProductId]["option"] != null &&
                                        productListObj[mainProductId][childProductId]["option"] != undefined &&
                                        productListObj[mainProductId][childProductId]["option"]["2"] != null &&
                                        productListObj[mainProductId][childProductId]["option"]["2"] != undefined) {
                                        productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]] = productListObj[mainProductId][childProductId]["option"]["2"]["text"];
                                        attr_code = productListObj[mainProductId][childProductId]["option"]["2"]["code"];
                                        c_pid = productListObj[mainProductId][childProductId]["option"]["2"]["cpid"];
                                        prc = productListObj[mainProductId][childProductId]["option"]["2"]["activePriceChild"];
                                    }
                                }
                            } else if (productListObj[mainProductId][childProductId]["option"] != null &&
                                productListObj[mainProductId][childProductId]["option"] != undefined &&
                                productListObj[mainProductId][childProductId]["option"]["2"] != null &&
                                productListObj[mainProductId][childProductId]["option"]["2"] != undefined) {
                                productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]] = productListObj[mainProductId][childProductId]["option"]["2"]["text"];
                                attr_code = productListObj[mainProductId][childProductId]["option"]["2"]["code"];
                                c_pid = productListObj[mainProductId][childProductId]["option"]["2"]["cpid"];
                                prc = productListObj[mainProductId][childProductId]["option"]["2"]["activePriceChild"];
                            }
                        } else if (productListObj[mainProductId][childProductId]["option"] != null &&
                            productListObj[mainProductId][childProductId]["option"] != undefined &&
                            productListObj[mainProductId][childProductId]["option"]["2"] != null &&
                            productListObj[mainProductId][childProductId]["option"]["2"] != undefined) {
                            productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]] = productListObj[mainProductId][childProductId]["option"]["2"]["text"];
                            attr_code = productListObj[mainProductId][childProductId]["option"]["2"]["code"];
                            c_pid = productListObj[mainProductId][childProductId]["option"]["2"]["cpid"];
                            prc = productListObj[mainProductId][childProductId]["option"]["2"]["activePriceChild"];
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
            sizeObj["prc"] = prc;
            productSizesObjArray.push(sizeObj);
            // productSizesObjArray.push(code);
        });
        productSizeObj["sizeArray"] = productSizesObjArray.sort(function (a, b) {
            return a["text"].split("-")[0].trim() - b["text"].split("-")[0].trim()
        });
        // productSizeObj["sizeArray"] = productSizesObjArray.sort(function (a, b) { return a["text"].split(" ")[1].trim() - b["text"].split(" ")[1].trim() });
        productSizeObj["sizeArray"] = productSizesObjArray.sort();
        productSizeObj["sizeArray"] = productSizesObjArray.sort(function (a, b) {
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

                        if (productListObj[mainProductId][childProductId]["option"] != null &&
                            productListObj[mainProductId][childProductId]["option"] != undefined &&
                            productListObj[mainProductId][childProductId]["option"]["1"] != null &&
                            productListObj[mainProductId][childProductId]["option"]["1"] != undefined) {

                            var attr_main = true;
                            var first_attr_acodec = ["Connectivity", "Number of SIM", "Device"];
                            if (productListObj[mainProductId][childProductId]["option"][0] != undefined || productListObj[mainProductId][childProductId]["option"][1].code != undefined) {
                                if (first_attr_acodec.indexOf(productListObj[mainProductId][childProductId]["option"][0]) == -1 && first_attr_acodec.indexOf(productListObj[mainProductId][childProductId]["option"][1].code) == -1) {
                                    attr_main = false;
                                }
                            }
                            if (attr_main == true) {
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]] = {};
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["colorCode"] = "";
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = "";
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["1"]["titleText"];

                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["1"]["code"];
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["1"]["cpid"];
                                product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["prc"] = productListObj[mainProductId][childProductId]["option"]["1"]["activePriceChild"];
                            } else {
                                if (findObj.colorText != undefined) {
                                    if (productListObj[mainProductId][childProductId].option["0"].text.trim().toLocaleLowerCase() == findObj.colorText.trim().toLocaleLowerCase()) {
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]] = {};
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["colorCode"] = "";
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = "";
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["1"]["titleText"];
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["1"]["cpid"];
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["1"]["code"];
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["prc"] = productListObj[mainProductId][childProductId]["option"]["1"]["activePriceChild"];
                                    }
                                } else {
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]] = {};
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["colorCode"] = "";
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = "";
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["1"]["titleText"];
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["1"]["cpid"];
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["1"]["code"];
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["prc"] = productListObj[mainProductId][childProductId]["option"]["1"]["activePriceChild"];
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
            attr0Obj["text1"] = colorText.replace('g', '').replace('l', '').replace('k', '');
            attr0Obj["imgSrc"] = product0ArrayObj[colorText]["imgSrc"];
            attr0Obj["titleText"] = product0ArrayObj[colorText]["titleText"];
            attr0Obj["code"] = product0ArrayObj[colorText]["code"];
            attr0Obj["cpid"] = product0ArrayObj[colorText]["cpid"];
            attr0Obj["prc"] = product0ArrayObj[colorText]["prc"];
            product0ObjArray.push(attr0Obj);
        });

        product0Obj["att0Array"] = product0ObjArray;
        product0Obj["att0Array"] = product0ObjArray.sort(function (a, b) {
            return a["text1"].split("-")[0].trim() - b["text1"].split("-")[0].trim()
        });
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
                                if (type_of.parentNode.parentNode != null) {
                                    if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == false) {
                                        attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                    } else {
                                        attr_block = type_of.parentNode.parentNode.parentNode
                                    }
                                } else {
                                    attr_block = type_of.parentNode
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
                                // if(type_of.getAttribute('data-option') == "2"){
                                //     var opt_text=type_of.parentNode.parentNode.parentNode.getAttribute('data-zero');
                                //     var opt_size_text=type_of.parentNode.parentNode.parentNode.getAttribute('data-size');
                                //     var opt_color_text=type_of.parentNode.parentNode.parentNode.getAttribute('data-color');
                                // }else{
                                //     var opt_text=type_of.innerText;
                                //     var opt_size_text=""
                                //     var opt_color_text=""
                                // }
                                if (opt_text != "" && opt_size_text != "" && opt_color_text != "") {
                                    if (productListObj[mainProductId][childProductId].option[1] != undefined && productListObj[mainProductId][childProductId].option[2] != undefined && productListObj[mainProductId][childProductId].option[0] != undefined) {
                                        if (productListObj[mainProductId][childProductId].option[1].text == opt_text && productListObj[mainProductId][childProductId].option[2].text == opt_size_text && productListObj[mainProductId][childProductId].option[0].text == opt_color_text) {
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]] = {};
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["colorCode"] = "";
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = "";
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["3"]["titleText"];

                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["3"]["imgSrc"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["3"]["code"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["3"]["cpid"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["prc"] = productListObj[mainProductId][childProductId]["option"]["3"]["activePriceChild"];
                                        }
                                    }
                                } else {
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]] = {};
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["colorCode"] = "";
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = "";
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["3"]["titleText"];

                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["3"]["imgSrc"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["3"]["code"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["3"]["cpid"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["prc"] = productListObj[mainProductId][childProductId]["option"]["3"]["activePriceChild"];
                                }
                            } else {
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]] = {};
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["colorCode"] = "";
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = "";
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["3"]["titleText"];

                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["3"]["imgSrc"];
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["3"]["code"];
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["3"]["cpid"];
                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["prc"] = productListObj[mainProductId][childProductId]["option"]["3"]["activePriceChild"];
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
            attr3Obj["text"] = colorText;
            attr3Obj["imgSrc"] = productColorArrayObj[colorText]["imgSrc"];
            attr3Obj["titleText"] = productColorArrayObj[colorText]["titleText"];
            attr3Obj["code"] = productColorArrayObj[colorText]["code"];
            attr3Obj["cpid"] = productColorArrayObj[colorText]["cpid"];
            attr3Obj["prc"] = productColorArrayObj[colorText]["prc"];
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
            } else if (findObj.zeroText == "" && findObj.sizeText == "" && findObj.thirdText == "" && findObj.colorText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined) {
                if (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text) {
                    childProductObj = mainProductListObj[childProductId];
                }
            } else if (findObj.zeroText != "" && findObj.sizeText == "" && findObj.thirdText == "" && findObj.colorText == "" && mainProductListObj[childProductId]["option"]["1"] != undefined) {
                if (findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text) {
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
INC.classes.ProductObj = function (product) {
    this.bundleId = "";
    this.id = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
    this.sku = ((product != null) && (product != undefined)) ? product["ProductSku"] : "";
    this.mainsku = ((product != null) && (product != undefined)) ? product["ProductSku"] : "";
    this.childsku = ((product != null) && (product != undefined)) ? product["ProductSku"] : "";
    this.name = ((product != null) && (product != undefined)) ? ((INC.config.language == "en") ? product["ProductName"] : product["Field4"]) : "";
    if (window.location.host == "www.uat03p.pahtest.com") {
        this.url = product["ProductUrl"].replace('https://www.petsathome.com/', 'https://www.uat03p.pahtest.com/');
    } else {
        this.url = product["ProductUrl"]
    }

    this.imageURL = ((product != null) && (product != undefined)) ? product["ImageURL"] : "";

    this.regularPrice = ((product != null) && (product != undefined)) ? product["Price"] : "";
    this.activePrice = ((product != null) && (product != undefined)) ? ((product["SpecialPrice"] != null) ? product["SpecialPrice"] : product["Price"]) : "";
    this.activePriceMsg = ((product != null) && (product != undefined)) ? ((product["Field3"] != "") ? ((INC.config.language == "en") ? product["Field3"] : product["Field6"]) : "") : "";

    this.manufacturer = ((product != null) && (product != undefined)) ? product["Manufacturer"] : "";

    this.otherImageList = ((product != null) && (product != undefined)) ? product["OtherImageList"] : [];
    this.size = ((product != null) && (product != undefined)) ? ((product["Size"] != null) ? product["Size"] : "") : "";
    this.option = {};

    this.pointcollect = "";

    this.internalId = ((product != null) && (product != undefined)) ? product["InternalId"] : "";
    this.mainId = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
    this.categoryName = ((product != null) && (product != undefined)) ? product["CategoryName"].replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('_', ' ') : "";
    this.manufacturer = ((product != null) && (product != undefined)) ? product["Manufacturer"] : "";
    this.categoryId = ((product != null) && (product != undefined)) ? product["CategoryId"].replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('_', ' ') : "";
    this.description = ((product != null) && (product != undefined)) ? product["Description"] : "";
    this.shortDescription = ((product != null) && (product != undefined)) ? product["ShortDescription"] : "";
    this.internalCategoryId = ((product != null) && (product != undefined)) ? product["Field1"] : "";
    this.ratingsCount = ((product != null) && (product != undefined)) ? product["Field6"] : "";
    this.pricingCount = ((product != null) && (product != undefined)) ? product["Field6"] : "";

    if (product["PromotionalMessage"] != null) {
        this.ProductLevelDiscountMessage = product["PromotionalMessage"];
        // this.PromotionalMessage = product["PromotionalMessage"];
    }





    if (product["Field5"] != null) {
        if (product["Field5"].split('Collect')[1] != undefined) {
            this.worthPrice = product["Field5"].split('Collect')[1].split('points')[0]
        } else {
            this.worthPrice = ((product != null) && (product != undefined)) ? product["Field5"] : "";
        }
    } else {
        this.worthPrice = ((product != null) && (product != undefined)) ? product["Field5"] : "";
    }
    // this.worthPrice = ((product != null) && (product != undefined)) ? product["Field5"] : "";
    this.ProductType = ((product != null) && (product != undefined)) ? product["ProductType"] : "";

    this.regularPriceMain = ((product != null) && (product != undefined)) ? product["Price"] : "";
    this.activePriceMain = ((product != null) && (product != undefined)) ? ((product["SpecialPrice"] != null) ? product["SpecialPrice"] : product["Price"]) : "";
    this.nameMain = ((product != null) && (product != undefined)) ? ((INC.config.language == "en") ? product["ProductName"] : product["ProductName"]) : "";
    this.imageURLMain = ((product != null) && (product != undefined)) ? product["ImageURL"] : "";

    if (window.location.host == "www.uat03p.pahtest.com") {
        this.urlMain = ((product != null) && (product != undefined)) ? product["ProductUrl"].replace('https://www.petsathome.com/', 'https://www.uat03p.pahtest.com/') : "";
    } else {
        this.urlMain = ((product != null) && (product != undefined)) ? product["ProductUrl"] : "";
    }

}
INC.classes.ProductAttObj = function (product) {
    this.bundleId = "";
    this.id = ((product != null) && (product != undefined)) ? product["childProductId"] : "";
    this.sku = ((product != null) && (product != undefined)) ? product["childProductSku"] : "";
    this.mainsku = ((product != null) && (product != undefined)) ? product["mainSKU"] : "";
    this.childsku = ((product != null) && (product != undefined)) ? product["childProductSku"] : "";
    // this.name = ((product != null) && (product != undefined)) ? ((INC.config.language == "en") ? product["childProductName"] : product["childProductName"]) : "";
    this.name = ((product != null) && (product != undefined)) ? ((INC.config.language == "en") ? product["childProductName"] : product["childProductName"]) : '';
    //    this.url = ((product != null) && (product != undefined)) ? product["childProductUrl"] : "";
    if (window.location.host == "www.uat03p.pahtest.com") {
        this.url = ((product != null) && (product != undefined)) ? product["childProductUrl"].replace('https://www.petsathome.com/', 'https://www.uat03p.pahtest.com/') : "";
    } else {
        this.url = ((product != null) && (product != undefined)) ? product["childProductUrl"] : "";
    }
    this.imageURL = ((product != null) && (product != undefined)) ? product["childProductImageUrl"] : "";
    this.regularPrice = ((product != null) && (product != undefined)) ? product["childProductPrice"] : "";
    this.activePrice = ((product != null) && (product != undefined)) ? ((product["childProductSpecialPrice"] != null) ? product["childProductSpecialPrice"] : product["childProductPrice"]) : "";

    this.activePriceMsg = ((product != null) && (product != undefined)) ? ((product["Field3"] != "") ? ((INC.config.language == "en") ? product["Field3"] : product["Field6"]) : "") : "";



    if (product["ProductLevelDiscountMessage"] != null) {
        this.ProductLevelDiscountMessage = product["ProductLevelDiscountMessage"]
    } else {
        //this.ProductLevelDiscountMessage = product["Field1"]

        this.ProductLevelDiscountMessage = product["PromotionalMessage"];

    }
    this.pointcollect = "";
    this.manufacturer = ((product != null) && (product != undefined)) ? product["Manufacturer"] : "";
    this.otherImageList = ((product != null) && (product != undefined)) ? product["childProductOtherImageUrl"] : [];

    this.size = "";
    this.option = {};
    if (((product != null) && (product != undefined))) {
        this.option[product["optionId"]] = {};
        this.option[product["optionId"]].text = product["optionText"];
        this.option[product["optionId"]].titleText = (product["childProductField2"] != null) ? product["childProductField2"] : "";
        this.option[product["optionId"]].imgSrc = (product["optionImageUrl"] != null) ? product["optionImageUrl"] : "";
        this.option[product["optionId"]].colorCode = (product["colorCode"] != null) ? product["colorCode"] : "";
    }
    this.internalId = ((product != null) && (product != undefined)) ? product["childInternalProductId"] : "";
    // this.mainId = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
    this.categoryName = ((product != null) && (product != undefined)) ? product["childCategoryName"].replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('_', ' ') : "";
    this.categoryId = ((product != null) && (product != undefined)) ? product["childCategoryId"].replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('_', ' ').replace('_', ' ') : "";
    this.description = ((product != null) && (product != undefined)) ? product["childProductDescription"] : "";
    this.shortDescription = ((product != null) && (product != undefined)) ? ((INC.config.language == "en") ? product["ShortDescription"] : product["Field5"]) : "";
    this.ratingsCount = ((product != null) && (product != undefined)) ? product["childProductField6"] : "";
    this.pricingCount = ((product != null) && (product != undefined)) ? product["childProductField6"] : product["Field6"];
    this.reviewsCount = ((product != null) && (product != undefined)) ? product["childProductField6"] : "";
    this.internalCategoryId = ((product != null) && (product != undefined)) ? product["childProductField1"] : "";
    // this.worthPrice = ((product != null) && (product != undefined)) ? product["childProductField5"] : "";
    if (product["Field5"] != null) {
        if (product["Field5"].split('Collect')[1] != undefined) {
            this.worthPrice = product["Field5"].split('Collect')[1].split('points')[0]
        } else {
            this.worthPrice = ((product != null) && (product != undefined)) ? product["Field5"] : "";
        }
    } else {
        this.worthPrice = ((product != null) && (product != undefined)) ? product["Field5"] : "";
    }
    this.ProductType = ((product != null) && (product != undefined)) ? product["ProductType"] : "";

    this.regularPriceMain = product["childProductPriceMain"];
    this.activePriceMain = ((product != null) && (product != undefined)) ? ((product["childProductSpecialPriceMain"] != null) ? product["childProductSpecialPriceMain"] : product["childProductPriceMain"]) : "";
    this.nameMain = ((product != null) && (product != undefined)) ? ((INC.config.language == "en") ? product["childProductNameMain"] : product["childProductNameMain"]) : "";
    this.imageURLMain = ((product != null) && (product != undefined)) ? ((INC.config.language == "en") ? product["childProductImageUrlMain"] : product["childProductImageUrlMain"]) : "";
    // this.urlMain = ((product != null) && (product != undefined)) ? product["childProductUrlMain"] : "";
    if (window.location.host == "www.uat03p.pahtest.com") {
        this.urlMain = ((product != null) && (product != undefined)) ? product["childProductUrlMain"].replace('https://www.petsathome.com/', 'https://www.uat03p.pahtest.com/') : "";
    } else {
        this.urlMain = ((product != null) && (product != undefined)) ? product["childProductUrlMain"] : "";
    }
}
INC.classes.FindObj = function (findObj) {
    this.id = (findObj != null && findObj != undefined) ? findObj.id : "";
    this.sku = (findObj != null && findObj != undefined) ? findObj.sku : "";
    this.mainId = (findObj != null && findObj != undefined) ? findObj.mainId : "";
    this.colorText = (findObj != null && findObj != undefined) ? findObj.colorText : "";
    this.sizeText = (findObj != null && findObj != undefined) ? findObj.sizeText : "";
}

INC.classes.NWConfig = function (nwConfigObj) {
    this.url = (nwConfigObj != null && nwConfigObj != undefined) ? nwConfigObj.url : "";
    this.method = (nwConfigObj != null && nwConfigObj != undefined) ? nwConfigObj.method : "GET";
    this.params = (nwConfigObj != null && nwConfigObj != undefined) ? nwConfigObj.params : "";
}

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
            pdpBundleProductHeaderBlock: prefix + "pdp_bundle_product_header" + postfix,
            pdpBundleProductHeaderText: prefix + "pdp_bundle_product_header_text",
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
            pdpBundleProductListItemsWrapperBlock: prefix + "pdp_bundle_product_list_wrapper_items" + postfix,
            pdpBundleProductListItemsWrapperHeaderBlock: prefix + "pdp_bundle_product_list_wrapper_header" + postfix,
            pdpBundleProductListItemsWrapperHeaderText: prefix + "pdp_bundle_product_list_wrapper_header_text" + postfix,
            pdpBundleProductListItemsWrapperHeaderclose: prefix + "pdp_bundle_product_list_wrapper_header_close" + postfix,
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
            pdpBundleCartSummaryPriceSaveBlock: prefix + "pdp_bundle_cart_summary_price_save" + postfix,
            pdpBundleCartSummaryPriceSaveText: prefix + "pdp_bundle_cart_summary_price_save_text",
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
            pdpBundleCartSummaryAddBtnspan: prefix + "pdp_bundle_cart_summary_add_btn_span",
            pdpBundleCartSummaryAddBtnImgBlock: prefix + "pdp_bundle_cart_summary_add_btn_img" + postfix,
            pdpBundleCartSummaryAddBtnImg: prefix + "pdp_bundle_cart_summary_add_btn_img",

            pdpBundleCartSummaryMainPrd: prefix + "pdp_bundle_cart_summary_main_prd",
            pdpBundleCartSummaryMainPrdTxt: prefix + "pdp_bundle_cart_summary_main_prd_txt",
            pdpBundleCartSummaryMainPrdPrc: prefix + "pdp_bundle_cart_summary_main_prd_prc",

            pdpBundleCartSummaryAddonPrd: prefix + "pdp_bundle_cart_summary_addon_prd",
            pdpBundleCartSummaryAddonPrdTxt: prefix + "pdp_bundle_cart_summary_addon_prd_txt",
            pdpBundleCartSummaryAddonPrdPrc: prefix + "pdp_bundle_cart_summary_addon_prd_prc",

            productModuleBlock: prefix + "product_module" + postfix,
            productModalBlock: prefix + "product_modal" + postfix,
            productShowcaseBlock: prefix + "product_showcase" + postfix,
            productBlock: prefix + "product" + postfix,

            productextensionBlock: prefix + "product_extension" + postfix,
            productHeaderMainBlock: prefix + "product_header_main" + postfix,
            productHeaderMainBlockTitle: prefix + "product_header_main_title" + postfix,
            productHeaderMainBlockRating: prefix + "product_header_main_rating" + postfix,
            productHeaderBlock: prefix + "product_header" + postfix,
            productHeaderTitleBlock: prefix + "product_header_title" + postfix,
            productHeaderTitleTextBlock: prefix + "product_header_title_text" + postfix,
            productHeaderTitleText: prefix + "product_header_title_text",
            productHeaderImgBlock: prefix + "product_header_img" + postfix,
            productHeaderImg: prefix + "product_header_img",

            productDescriptionHeaderBlock: prefix + "product_Description_header" + postfix,
            productDescriptionHeaderTitleBlock: prefix + "product_Description_header_title" + postfix,
            productDescriptionHeaderTitleTextBlock: prefix + "product_Description_header_title_text" + postfix,
            productDescriptionHeaderTitleText: prefix + "product_Description_header_title_text",
            productDescriptionHeaderImgBlock: prefix + "product_Description_header_img" + postfix,
            productDescriptionHeaderImg: prefix + "product_Description_header_img",

            productInfoMainBlock: prefix + "product_info_main" + postfix,
            productImgBlock: prefix + "product_img" + postfix,
            productImgMainBlock: prefix + "product_img_main" + postfix,
            productImgMainImg: prefix + "product_img_main_img",
            productImgGalleryBlock: prefix + "product_img_gallery" + postfix,

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
            productBstxtBlock: prefix + "product_bstxt" + postfix,
            productTitleBlock: prefix + "product_desc_title" + postfix,
            productTitleTextBlock: prefix + "product_desc_title_text" + postfix,
            productTitleText: prefix + "product_desc_title_text",

            productRatingsBlock: prefix + "product_desc_ratings" + postfix,

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
            productAttDetailsBlock: prefix + "product_desc_att_details" + postfix,
            productDetailsBlock: prefix + "product_details_prod" + postfix,
            productDetailstext: prefix + "product_details_prod_text",
            productvariantSimpleBlock: prefix + "product_variant_simple" + postfix,
            productvariantSimpleText: prefix + "product_variant_simple_text",
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
            productAttvariantaddBlock: prefix + "product_desc_att_variant_add" + postfix,
            productAttvariantaddText: prefix + "product_desc_att_variant_text",
            productAttvariantviewdetailsBlock: prefix + "product_desc_att_variant_view_details" + postfix,
            productAttvariantviewdetailsText: prefix + "product_desc_att_variant_view_details_text",
            productAttEditText: prefix + "product_desc_att_edit_text",
            productAttEditBlock: prefix + "product_desc_att_edit" + postfix,

            productQtyAddBtnBlock: prefix + "product_desc_qty_add_btn" + postfix,
            productDescQtyBlock: prefix + "product_qty" + postfix,

            productDescQtyDownBlock: prefix + "product_qty_down" + postfix,
            productDescQtyDownBtnBlock: prefix + "product_qty_down_btn" + postfix,
            productDescQtyDownBtn: prefix + "product_qty_down_btn",
            productDescQtyInputBlock: prefix + "product_qty_input" + postfix,
            productDescQtyInputTextBlock: prefix + "product_qty_input_text" + postfix,
            productDescQtyInputText: prefix + "product_qty_input_text",
            productDescQtyUpBlock: prefix + "product_qty_up" + postfix,
            productDescQtyUpBtnBlock: prefix + "product_qty_up_btn" + postfix,
            productDescQtyUpBtn: prefix + "product_qty_up_btn",


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
            productAddspan: prefix + "product_desc_add_span",
            productAddImgBlock: prefix + "product_desc_add_img" + postfix,
            productAddImg: prefix + "product_desc_add_img",

            productDescAddBlock: prefix + "product_add" + postfix,
            productDescAddTextBlock: prefix + "product_add_text" + postfix,
            productDescAddText: prefix + "product_add_text",

            productvariantPopupClose: prefix + "product_desc_variant_popup_close" + postfix,
            productAddErrText: prefix + "product_desc_add_err_text" + postfix,
            productAddTitle: prefix + "product_desc_add_title_text" + postfix,
            productDescriptionMainBlock: prefix + "product_description_main" + postfix,
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

            pdpModalBundleProductBlock: ["pdpBundleProductHeaderBlock", "pdpBundleProductLeftBtnBlock", "pdpBundleProductListBlock", "pdpBundleProductRightBtnBlock"],
            pdpBundleProductHeaderBlock: ["pdpBundleProductHeaderText"],
            pdpBundleProductLeftBtnBlock: ["pdpBundleProductLeftBtnImgBlock"],
            pdpBundleProductLeftBtnImgBlock: ["pdpBundleProductLeftBtnImg"],
            pdpBundleProductRightBtnBlock: ["pdpBundleProductRightBtnImgBlock"],
            pdpBundleProductRightBtnImgBlock: ["pdpBundleProductRightBtnImg"],
            pdpBundleProductListBlock: ["pdpBundleProductListMainBlock", "pdpBundleProductListLeftBlock", "pdpBundleProductListItemsBlockShowMoreLess", "pdpBundleProductListItemsWrapperBlock", "pdpBundleProductListRightBlock"],
            pdpBundleProductListItemsWrapperBlock: ["pdpBundleProductListItemsWrapperHeaderBlock", "pdpBundleProductListItemsBlock"],
            pdpBundleProductListItemsWrapperHeaderBlock: ["pdpBundleProductListItemsWrapperHeaderText", "pdpBundleProductListItemsWrapperHeaderclose"],
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
            pdpBundleCartTitleBlock: ["pdpBundleCartTitleTextBlock"],
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
            pdpBundleCartAddedBlock: ["pdpBundleCartAddedProductBlock"],
            pdpBundleCartAddedProductBlock: ["pdpBundleCartAddedProductImgBlock", "pdpBundleCartAddedProductTitleBlock", "pdpBundleCartAddedProductQtyBlock", "pdpBundleCartAddedProductPriceBlock", "pdpBundleCartAddedProductAttBlock", "pdpBundleCartAddedProductEditBlock"],
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
            pdpBundleCartSummaryBlock: ["pdpBundleCartSummaryMainPrd", "pdpBundleCartSummaryAddonPrd", "pdpBundleCartSummaryTitleBlock", "pdpBundleCartSummaryPriceBlock", "pdpBundleCartSummaryPriceSaveBlock", "pdpBundleCartSummaryViewBlock", "pdpBundleCartSummaryAddBlock"],
            pdpBundleCartSummaryTitleBlock: ["pdpBundleCartSummaryTitleTextBlock"],
            pdpBundleCartSummaryTitleTextBlock: ["pdpBundleCartSummaryTitleText"],
            pdpBundleCartSummaryViewBlock: ["pdpBundleCartSummaryViewBtnBlock"],
            pdpBundleCartSummaryViewBtnBlock: ["pdpBundleCartSummaryViewBtnImgBlock", "pdpBundleCartSummaryViewBtnTextBlock", "pdpBundleCartSummaryViewBtnCountBlock"],
            pdpBundleCartSummaryViewBtnImgBlock: ["pdpBundleCartSummaryViewBtnImg"],
            pdpBundleCartSummaryViewBtnTextBlock: ["pdpBundleCartSummaryViewBtnText"],
            pdpBundleCartSummaryViewBtnCountBlock: ["pdpBundleCartSummaryViewBtnCount"],
            pdpBundleCartSummaryPriceBlock: ["pdpBundleCartSummaryPriceActiveBlock", "pdpBundleCartSummaryPriceRegularBlock"],
            pdpBundleCartSummaryPriceSaveBlock: ["pdpBundleCartSummaryPriceSaveText"],
            pdpBundleCartSummaryPriceRegularBlock: ["pdpBundleCartSummaryPriceRegularTextBlock"],
            pdpBundleCartSummaryPriceRegularTextBlock: ["pdpBundleCartSummaryPriceRegularText"],
            pdpBundleCartSummaryPriceActiveBlock: ["pdpBundleCartSummaryPriceActiveTextBlock"],
            pdpBundleCartSummaryPriceActiveTextBlock: ["pdpBundleCartSummaryPriceActiveText"],
            pdpBundleCartSummaryAddBlock: ["pdpBundleCartSummaryAddBtnBlock"],
            pdpBundleCartSummaryAddBtnBlock: ["pdpBundleCartSummaryAddBtnTextBlock", "pdpBundleCartSummaryAddBtnImgBlock"],
            pdpBundleCartSummaryAddBtnTextBlock: ["pdpBundleCartSummaryAddBtnText", "pdpBundleCartSummaryAddBtnspan"],
            // pdpBundleCartSummaryAddBtnText:["pdpBundleCartSummaryAddBtnspan"],
            pdpBundleCartSummaryAddBtnImgBlock: ["pdpBundleCartSummaryAddBtnImg"],

            pdpBundleCartSummaryMainPrd: ["pdpBundleCartSummaryMainPrdTxt", "pdpBundleCartSummaryMainPrdPrc"],
            pdpBundleCartSummaryAddonPrd: ["pdpBundleCartSummaryAddonPrdTxt", "pdpBundleCartSummaryAddonPrdPrc"],

            productModuleBlock: ["productShowcaseBlock", "productModalBlock"],
            productShowcaseBlock: ["productBlock"],
            productModalBlock: ["productBlock"],
            productBlock: ["productextensionBlock", "productHeaderMainBlock", "productInfoMainBlock", "productDescriptionMainBlock"],
            productInfoMainBlock: ["productImgBlock", "productDescBlock"],
            productHeaderMainBlock: ["productHeaderMainBlockTitle", "productHeaderMainBlockRating", "productHeaderBlock", "productDescriptionHeaderBlock", "productHeaderImgBlock"],
            productHeaderBlock: ["productHeaderTitleBlock"],
            productHeaderTitleBlock: ["productHeaderTitleTextBlock"],
            productHeaderTitleTextBlock: ["productHeaderTitleText"],
            productHeaderImgBlock: ["productHeaderImg"],

            productDescriptionHeaderBlock: ["productDescriptionHeaderTitleBlock"],
            productDescriptionHeaderTitleBlock: ["productDescriptionHeaderTitleTextBlock"],
            productDescriptionHeaderTitleTextBlock: ["productDescriptionHeaderTitleText"],
            productDescriptionHeaderImgBlock: ["productDescriptionHeaderImg"],

            productImgBlock: ["productImgMainBlock", "productImgGalleryBlock"],
            productImgMainBlock: ["productImgMainImg"],
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
            productDescBlock: ["productTitleBlock", "productRatingsBlock", "productPriceBlock", "productAttDetailsBlock", "productQtyAddBtnBlock"],
            productAttDetailsBlock: ["productvariantSimpleBlock", "productAttBlock", "productDetailsBlock"],
            productDetailsBlock: ["productDetailstext"],
            productvariantSimpleBlock: ["productvariantSimpleText"],
            productTitleBlock: ["productTitleTextBlock"],
            productTitleTextBlock: ["productTitleText"],
            productPriceBlock: ["productPriceLabel", "productPriceActiveBlock", "productPriceRegularBlock", "productPriceWorthBlock"],
            productPriceActiveBlock: ["productPriceActiveTextBlock"],
            productPriceActiveTextBlock: ["productPriceActiveText", "productPriceActiveTextMsg"],
            productPriceRegularBlock: ["productPriceRegularTextBlock"],
            productPriceRegularTextBlock: ["productPriceRegularText"],
            productPriceWorthBlock: ["productPriceWorthTextBlock"],
            productPriceWorthTextBlock: ["productPriceWorthText", "productPriceWorthTextMsg"],
            productAttBlock: ["productvariantPopupClose", "productAddErrText", "productAddTitle", "productAttzeroBlock", "productAttSizeBlock", "productAttColorBlock", "productAttthirdBlock", "productAttfourthBlock", "productAttEditBlock", "productAttvariantaddBlock", "productQtyBlock"],
            productAttvariantaddBlock: ["productAttvariantaddText"],
            productAttvariantviewdetailsBlock: ["productAttvariantviewdetailsText"],
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
            productQtyAddBtnBlock: ["productDescQtyBlock", "productDescAddBlock", "productAddBlock", "productBstxtBlock"],
            productDescAddBlock: ["productDescAddTextBlock"],
            productDescAddTextBlock: ["productDescAddText"],
            productDescQtyBlock: ["productDescQtyDownBlock", "productDescQtyInputBlock", "productDescQtyUpBlock"],
            productDescQtyDownBlock: ["productDescQtyDownBtnBlock"],
            productDescQtyDownBtnBlock: ["productDescQtyDownBtn"],
            productDescQtyUpBlock: ["productDescQtyUpBtnBlock"],
            productDescQtyUpBtnBlock: ["productDescQtyUpBtn"],
            productDescQtyInputBlock: ["productDescQtyInputTextBlock"],
            productDescQtyInputTextBlock: ["productDescQtyInputText"],
            productQtyBlock: ["productQtyDownBlock", "productQtyInputBlock", "productQtyUpBlock"],
            productQtyDownBlock: ["productQtyDownBtnBlock"],
            productQtyDownBtnBlock: ["productQtyDownBtn"],
            productQtyUpBlock: ["productQtyUpBtnBlock"],
            productQtyUpBtnBlock: ["productQtyUpBtn"],
            productQtyInputBlock: ["productQtyInputTextBlock"],
            productQtyInputTextBlock: ["productQtyInputText"],
            productAddBlock: ["productAddImgBlock", "productAddTextBlock"],
            productAddTextBlock: ["productAddText", "productAddspan"],
            productAddImgBlock: ["productAddImg"],
        }
    },
    sidebar: {
        className: {
            sidebarModalBlock: prefix + "sidebar_modal" + postfix,
            sidebarModalCartAndTitleBlock: prefix + "sidebar_modal_cart_and_title" + postfix,
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


            sidebarCartAddedListBlock: prefix + "cart_added_list" + postfix,
            sidebarCountBlock: prefix + "cart_product_count" + postfix,
            sidebarCartAddedProductBlock: prefix + "cart_added_product" + postfix,
            sidebarCartAddedProductImgBlock: prefix + "cart_added_product_img" + postfix,
            sidebarCartAddedProductImg: prefix + "cart_added_product_img",
            sidebarCartAddedProductDescBlock: prefix + "cart_added_product_desc" + postfix,
            sidebarCartAddedProductqtyBlock: prefix + "cart_added_product_qty" + postfix,
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
            sidebarRecommendedTabsListBlock: prefix + "recommended_tabs_list" + postfix,
            sidebarRecommendedTabsListItemBlock: prefix + "recommended_tabs_list_item" + postfix,
            sidebarRecommendedTabsListItemTextBlock: prefix + "recommended_tabs_list_item_text" + postfix,
            sidebarRecommendedTabsListItemText: prefix + "recommended_tabs_list_item_text",
            sidebarRecommendedProductsBlock: prefix + "recommended_products" + postfix,
            sidebarRecommendedProductsLeftBlock: prefix + "recommended_products_left" + postfix,
            sidebarRecommendedProductsListBlock: prefix + "recommended_products_list" + postfix,
            sidebarRecommendedProductsItemThumbBlock: prefix + "recommended_products_item_thumb" + postfix,
            sidebarRecommendedProductsListItemThumbBlock: prefix + "recommended_products_list_item_thumb" + postfix,
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
            sidebarCheckoutContinueBtnspan: prefix + "checkout_continue_btn_span",
            sidebarCheckoutContinueBtnImgBlock: prefix + "checkout_continue_btn_img" + postfix,
            sidebarCheckoutContinueBtnImg: prefix + "checkout_continue_btn_img",
            sidebarCheckoutBasketBlock: prefix + "checkout_basket" + postfix,
            sidebarCheckoutBasketBtnBlock: prefix + "checkout_basket_btn" + postfix,
            sidebarCheckoutBasketBtnTextBlock: prefix + "checkout_basket_btn_text" + postfix,
            sidebarCheckoutBasketBtnText: prefix + "checkout_basket_btn_text",
            sidebarCheckoutBasketBtnspan: prefix + "checkout_basket_btn_span",
            sidebarCheckoutBasketBtnImgBlock: prefix + "checkout_basket_btn_img" + postfix,
            sidebarCheckoutBasketBtnImg: prefix + "checkout_basket_btn_img",

            productModuleBlock: prefix + "product_module" + postfix,
            productModalBlock: prefix + "product_modal" + postfix,
            productShowcaseBlock: prefix + "product_showcase" + postfix,
            productBlock: prefix + "product" + postfix,
            productextensionBlock: prefix + "product_extension" + postfix,
            productHeaderMainBlock: prefix + "product_header_main" + postfix,
            productHeaderMainBlockTitle: prefix + "product_header_main_title" + postfix,
            productHeaderMainBlockRating: prefix + "product_header_main_rating" + postfix,
            productHeaderBlock: prefix + "product_header" + postfix,
            productHeaderTitleBlock: prefix + "product_header_title" + postfix,
            productHeaderTitleTextBlock: prefix + "product_header_title_text" + postfix,
            productHeaderTitleText: prefix + "product_header_title_text",
            productHeaderImgBlock: prefix + "product_header_img" + postfix,
            productHeaderImg: prefix + "product_header_img",

            productDescriptionHeaderBlock: prefix + "product_Description_header" + postfix,
            productDescriptionHeaderTitleBlock: prefix + "product_Description_header_title" + postfix,
            productDescriptionHeaderTitleTextBlock: prefix + "product_Description_header_title_text" + postfix,
            productDescriptionHeaderTitleText: prefix + "product_Description_header_title_text",
            productDescriptionHeaderImgBlock: prefix + "product_Description_header_img" + postfix,
            productDescriptionHeaderImg: prefix + "product_Description_header_img",

            productInfoMainBlock: prefix + "product_info_main" + postfix,
            productImgBlock: prefix + "product_img" + postfix,
            productImgMainBlock: prefix + "product_img_main" + postfix,
            productImgMainImg: prefix + "product_img_main_img",

            productImgGalleryBlock: prefix + "product_img_gallery" + postfix,

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
            productBstxtBlock: prefix + "product_bstxt" + postfix,
            productTitleBlock: prefix + "product_desc_title" + postfix,
            productTitleTextBlock: prefix + "product_desc_title_text" + postfix,
            productTitleText: prefix + "product_desc_title_text",

            productRatingsBlock: prefix + "product_desc_ratings" + postfix,
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
            productAttDetailsBlock: prefix + "product_desc_att_details" + postfix,
            productDetailsBlock: prefix + "product_details_prod" + postfix,
            productDetailstext: prefix + "product_details_prod_text",
            productvariantSimpleBlock: prefix + "product_variant_simple" + postfix,
            productvariantSimpleText: prefix + "product_variant_simple_text",
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
            productAttvariantaddBlock: prefix + "product_desc_att_variant_add" + postfix,
            productAttvariantaddText: prefix + "product_desc_att_variant_text",
            productAttvariantviewdetailsBlock: prefix + "product_desc_att_variant_view_details" + postfix,
            productAttvariantviewdetailsText: prefix + "product_desc_att_variant_view_details_text",
            productAttEditText: prefix + "product_desc_att_edit_text",
            productAttEditImgBlock: prefix + "product_desc_att_edit_img" + postfix,
            productAttEditImg: prefix + "product_desc_att_edit_img",

            productQtyAddBtnBlock: prefix + "product_desc_qty_add_btn" + postfix,
            productDescQtyBlock: prefix + "product_qty" + postfix,
            productDescQtyDownBlock: prefix + "product_qty_down" + postfix,
            productDescQtyDownBtnBlock: prefix + "product_qty_down_btn" + postfix,
            productDescQtyDownBtn: prefix + "product_qty_down_btn",
            productDescQtyInputBlock: prefix + "product_qty_input" + postfix,
            productDescQtyInputTextBlock: prefix + "product_qty_input_text" + postfix,
            productDescQtyInputText: prefix + "product_qty_input_text",
            productDescQtyUpBlock: prefix + "product_qty_up" + postfix,
            productDescQtyUpBtnBlock: prefix + "product_qty_up_btn" + postfix,
            productDescQtyUpBtn: prefix + "product_qty_up_btn",
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
            productAddspan: prefix + "product_desc_add_span",
            productAddImgBlock: prefix + "product_desc_add_img" + postfix,
            productAddImg: prefix + "product_desc_add_img",
            productDescAddBlock: prefix + "product_add" + postfix,
            productDescAddTextBlock: prefix + "product_add_text" + postfix,
            productDescAddText: prefix + "product_add_text",
            productvariantPopupClose: prefix + "product_desc_variant_popup_close" + postfix,
            productAddErrText: prefix + "product_desc_add_err_text" + postfix,
            productAddTitle: prefix + "product_desc_add_title_text" + postfix,
            productDescriptionMainBlock: prefix + "product_description_main" + postfix,
        },
        dom: {
            sidebarModalBlock: ["sidebarModalCartAndTitleBlock", "sidebarCheckoutBlock", "sidebarRecommendedBlock"],
            sidebarModalCartAndTitleBlock: ["sidebarHeaderTitleBlock", "sidebarCartAddedBlock", "sidebarHeaderBlock"],
            sidebarHeaderBlock: ["sidebarHeaderContinueBlock", "sidebarHeaderItemBlock"],
            sidebarHeaderContinueBlock: ["sidebarHeaderContinueImgBlock", "sidebarHeaderContinueTextBlock"],
            sidebarHeaderContinueImgBlock: ["sidebarHeaderContinueImg"],
            sidebarHeaderContinueTextBlock: ["sidebarHeaderContinueText"],

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

            sidebarCartAddedBlock: ["sidebarCartAddedListBlock", "sidebarCountBlock", "sidebarCartAddedRightBlock"],
            sidebarHeaderTitleBlock: ["sidebarHeaderTitleTextBlock"],
            sidebarCartAddedListBlock: ["sidebarCartAddedProductBlock"],
            sidebarCartAddedProductBlock: ["sidebarCartAddedProductImgBlock", "sidebarCartAddedProductDescBlock"],
            sidebarCartAddedProductImgBlock: ["sidebarCartAddedProductImg"],
            sidebarCartAddedProductDescBlock: ["sidebarCartAddedProductDescTitleBlock", "sidebarCartAddedProductDescAttBlock", "sidebarCartAddedProductDescPriceBlock", "sidebarCartAddedProductqtyBlock"],
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
            sidebarRecommendedTabsBlock: ["sidebarRecommendedTabsTitleBlock", "sidebarRecommendedTabsListBlock", "sidebarRecommendedTabsRightBlock"],
            sidebarRecommendedTabsTitleBlock: ["sidebarRecommendedTabsTitleTextBlock"],
            sidebarRecommendedTabsTitleTextBlock: ["sidebarRecommendedTabsTitleText"],
            sidebarRecommendedTabsListBlock: ["sidebarRecommendedTabsListItemBlock"],
            sidebarRecommendedTabsListItemBlock: ["sidebarRecommendedTabsListItemTextBlock"],
            sidebarRecommendedTabsListItemTextBlock: ["sidebarRecommendedTabsListItemText"],
            sidebarRecommendedProductsBlock: ["sidebarRecommendedProductsLeftBlock", "sidebarRecommendedProductsListMainBlock", "sidebarRecommendedProductsItemThumbBlock", "sidebarRecommendedProductsRightBlock"],
            sidebarRecommendedProductsLeftBlock: ["sidebarRecommendedProductsLeftBtnBlock"],
            sidebarRecommendedProductsLeftBtnBlock: ["sidebarRecommendedProductsLeftBtnImgBlock"],
            sidebarRecommendedProductsLeftBtnImgBlock: ["sidebarRecommendedProductsLeftBtnImg"],
            sidebarRecommendedProductsItemThumbBlock: ["sidebarRecommendedProductsListItemThumbBlock"],
            sidebarRecommendedProductsRightBlock: ["sidebarRecommendedProductsRightBtnBlock"],
            sidebarRecommendedProductsRightBtnBlock: ["sidebarRecommendedProductsRightBtnImgBlock"],
            sidebarRecommendedProductsRightBtnImgBlock: ["sidebarRecommendedProductsRightBtnImg"],
            sidebarRecommendedProductsListMainBlock: ["sidebarRecommendedProductsListBlock"],
            sidebarRecommendedProductsListBlock: ["productModuleBlock"],
            sidebarCheckoutBlock: ["sidebarCheckoutContinueBlock", "sidebarCheckoutBasketBlock"],
            sidebarCheckoutContinueBlock: ["sidebarCheckoutContinueBtnBlock"],
            sidebarCheckoutContinueBtnBlock: ["sidebarCheckoutContinueBtnImgBlock", "sidebarCheckoutContinueBtnTextBlock"],
            sidebarCheckoutContinueBtnImgBlock: ["sidebarCheckoutContinueBtnImg"],
            sidebarCheckoutContinueBtnTextBlock: ["sidebarCheckoutContinueBtnText", "sidebarCheckoutContinueBtnspan"],
            sidebarCheckoutBasketBlock: ["sidebarCheckoutBasketBtnBlock"],
            sidebarCheckoutBasketBtnBlock: ["sidebarCheckoutBasketBtnImgBlock", "sidebarCheckoutBasketBtnTextBlock"],
            sidebarCheckoutBasketBtnImgBlock: ["sidebarCheckoutBasketBtnImg"],
            sidebarCheckoutBasketBtnTextBlock: ["sidebarCheckoutBasketBtnspan", "sidebarCheckoutBasketBtnText"],

            productModuleBlock: ["productShowcaseBlock", "productModalBlock"],
            productShowcaseBlock: ["productBlock"],
            productModalBlock: ["productBlock"],
            productBlock: ["productextensionBlock", "productHeaderMainBlock", "productInfoMainBlock", "productDescriptionMainBlock"],
            productInfoMainBlock: ["productImgBlock", "productDescBlock", "productBstxtBlock"],
            productHeaderMainBlock: ["productHeaderMainBlockTitle", "productHeaderMainBlockRating", "productHeaderBlock", "productDescriptionHeaderBlock", "productHeaderImgBlock"],
            productHeaderBlock: ["productHeaderTitleBlock"],
            productHeaderTitleBlock: ["productHeaderTitleTextBlock"],
            productHeaderTitleTextBlock: ["productHeaderTitleText"],
            productHeaderImgBlock: ["productHeaderImg"],

            productDescriptionHeaderBlock: ["productDescriptionHeaderTitleBlock"],
            productDescriptionHeaderTitleBlock: ["productDescriptionHeaderTitleTextBlock"],
            productDescriptionHeaderTitleTextBlock: ["productDescriptionHeaderTitleText"],
            productDescriptionHeaderImgBlock: ["productDescriptionHeaderImg"],
            productImgBlock: ["productImgMainBlock", "productImgGalleryBlock"],
            productImgMainBlock: ["productImgMainImg"],
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
            productDescBlock: ["productTitleBlock", "productRatingsBlock", "productPriceBlock", "productAttDetailsBlock", "productQtyAddBtnBlock"],
            productAttDetailsBlock: ["productvariantSimpleBlock", "productAttBlock", "productDetailsBlock"],
            productDetailsBlock: ["productDetailstext"],
            productvariantSimpleBlock: ["productvariantSimpleText"],
            productTitleBlock: ["productTitleTextBlock"],
            productTitleTextBlock: ["productTitleText"],
            productPriceBlock: ["productPriceLabel", "productPriceActiveBlock", "productPriceRegularBlock", "productPriceWorthBlock"],
            productPriceActiveBlock: ["productPriceActiveTextBlock"],
            productPriceActiveTextBlock: ["productPriceActiveText", "productPriceActiveTextMsg"],
            productPriceRegularBlock: ["productPriceRegularTextBlock"],
            productPriceRegularTextBlock: ["productPriceRegularText"],
            productPriceWorthBlock: ["productPriceWorthTextBlock"],
            productPriceWorthTextBlock: ["productPriceWorthText", "productPriceWorthTextMsg"],

            productAttBlock: ["productvariantPopupClose", "productAddErrText", "productAddTitle", "productAttzeroBlock", "productAttSizeBlock", "productAttColorBlock", "productAttthirdBlock", "productAttfourthBlock", "productAttEditBlock", "productAttvariantaddBlock", "productQtyBlock"],
            productAttvariantaddBlock: ["productAttvariantaddText"],
            productAttvariantviewdetailsBlock: ["productAttvariantviewdetailsText"],
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
            productQtyAddBtnBlock: ["productDescQtyBlock", "productDescAddBlock", "productAddBlock", "productBstxtBlock"],
            productDescAddBlock: ["productDescAddTextBlock"],
            productDescAddTextBlock: ["productDescAddText"],
            productDescQtyBlock: ["productDescQtyDownBlock", "productDescQtyInputBlock", "productDescQtyUpBlock"],
            productDescQtyDownBlock: ["productDescQtyDownBtnBlock"],
            productDescQtyDownBtnBlock: ["productDescQtyDownBtn"],
            productDescQtyUpBlock: ["productDescQtyUpBtnBlock"],
            productDescQtyUpBtnBlock: ["productDescQtyUpBtn"],
            productDescQtyInputBlock: ["productDescQtyInputTextBlock"],
            productDescQtyInputTextBlock: ["productDescQtyInputText"],
            productQtyBlock: ["productQtyDownBlock", "productQtyInputBlock", "productQtyUpBlock"],
            productQtyDownBlock: ["productQtyDownBtnBlock"],
            productQtyDownBtnBlock: ["productQtyDownBtn"],
            productQtyUpBlock: ["productQtyUpBtnBlock"],
            productQtyUpBtnBlock: ["productQtyUpBtn"],
            productQtyInputBlock: ["productQtyInputTextBlock"],
            productQtyInputTextBlock: ["productQtyInputText"],
            productAddBlock: ["productAddImgBlock", "productAddTextBlock"],
            productAddTextBlock: ["productAddText", "productAddspan"],
            productAddImgBlock: ["productAddImg"],
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
            productextensionBlock: prefix + "product_extension" + postfix,
            productHeaderMainBlock: prefix + "product_header_main" + postfix,
            productHeaderMainBlockTitle: prefix + "product_header_main_title" + postfix,
            productHeaderMainBlockRating: prefix + "product_header_main_rating" + postfix,
            productHeaderBlock: prefix + "product_header" + postfix,
            productHeaderTitleBlock: prefix + "product_header_title" + postfix,
            productHeaderTitleTextBlock: prefix + "product_header_title_text" + postfix,
            productHeaderTitleText: prefix + "product_header_title_text",
            productHeaderImgBlock: prefix + "product_header_img" + postfix,
            productHeaderImg: prefix + "product_header_img",

            productDescriptionHeaderBlock: prefix + "product_Description_header" + postfix,
            productDescriptionHeaderTitleBlock: prefix + "product_Description_header_title" + postfix,
            productDescriptionHeaderTitleTextBlock: prefix + "product_Description_header_title_text" + postfix,
            productDescriptionHeaderTitleText: prefix + "product_Description_header_title_text",
            productDescriptionHeaderImgBlock: prefix + "product_Description_header_img" + postfix,
            productDescriptionHeaderImg: prefix + "product_Description_header_img",
            productInfoMainBlock: prefix + "product_info_main" + postfix,
            productImgBlock: prefix + "product_img" + postfix,
            productImgMainBlock: prefix + "product_img_main" + postfix,

            productImgMainImg: prefix + "product_img_main_img",
            productImgGalleryBlock: prefix + "product_img_gallery" + postfix,

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
            productBstxtBlock: prefix + "product_bstxt" + postfix,
            productTitleBlock: prefix + "product_desc_title" + postfix,
            productTitleTextBlock: prefix + "product_desc_title_text" + postfix,
            productTitleText: prefix + "product_desc_title_text",
            productRatingsBlock: prefix + "product_desc_ratings" + postfix,

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
            productAttDetailsBlock: prefix + "product_desc_att_details" + postfix,
            productDetailsBlock: prefix + "product_details_prod" + postfix,
            productDetailstext: prefix + "product_details_prod_text",
            productvariantSimpleBlock: prefix + "product_variant_simple" + postfix,
            productvariantSimpleText: prefix + "product_variant_simple_text",
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
            productAttvariantaddBlock: prefix + "product_desc_att_variant_add" + postfix,
            productAttvariantaddText: prefix + "product_desc_att_variant_text",
            productAttvariantviewdetailsBlock: prefix + "product_desc_att_variant_view_details" + postfix,
            productAttvariantviewdetailsText: prefix + "product_desc_att_variant_view_details_text",
            productAttEditText: prefix + "product_desc_att_edit_text",
            productAttEditBlock: prefix + "product_desc_att_edit" + postfix,

            productQtyAddBtnBlock: prefix + "product_desc_qty_add_btn" + postfix,
            productDescQtyBlock: prefix + "product_qty" + postfix,
            productDescQtyDownBlock: prefix + "product_qty_down" + postfix,
            productDescQtyDownBtnBlock: prefix + "product_qty_down_btn" + postfix,
            productDescQtyDownBtn: prefix + "product_qty_down_btn",
            productDescQtyInputBlock: prefix + "product_qty_input" + postfix,
            productDescQtyInputTextBlock: prefix + "product_qty_input_text" + postfix,
            productDescQtyInputText: prefix + "product_qty_input_text",
            productDescQtyUpBlock: prefix + "product_qty_up" + postfix,
            productDescQtyUpBtnBlock: prefix + "product_qty_up_btn" + postfix,
            productDescQtyUpBtn: prefix + "product_qty_up_btn",
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
            productAddspan: prefix + "product_desc_add_span",
            productAddImgBlock: prefix + "product_desc_add_img" + postfix,
            productAddImg: prefix + "product_desc_add_img",
            productDescAddBlock: prefix + "product_add" + postfix,
            productDescAddTextBlock: prefix + "product_add_text" + postfix,
            productDescAddText: prefix + "product_add_text",
            productvariantPopupClose: prefix + "product_desc_variant_popup_close" + postfix,
            productAddErrText: prefix + "product_desc_add_err_text" + postfix,
            productAddTitle: prefix + "product_desc_add_title_text" + postfix,
            productDescriptionMainBlock: prefix + "product_description_main" + postfix,
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
            productBlock: ["productextensionBlock", "productHeaderMainBlock", "productInfoMainBlock", "productDescriptionMainBlock"],
            productInfoMainBlock: ["productImgBlock", "productDescBlock", "productBstxtBlock"],
            productHeaderMainBlock: ["productHeaderMainBlockTitle", "productHeaderMainBlockRating", "productHeaderBlock", "productDescriptionHeaderBlock", "productHeaderImgBlock"],
            productHeaderBlock: ["productHeaderTitleBlock"],
            productHeaderTitleBlock: ["productHeaderTitleTextBlock"],
            productHeaderTitleTextBlock: ["productHeaderTitleText"],
            productHeaderImgBlock: ["productHeaderImg"],

            productDescriptionHeaderBlock: ["productDescriptionHeaderTitleBlock"],
            productDescriptionHeaderTitleBlock: ["productDescriptionHeaderTitleTextBlock"],
            productDescriptionHeaderTitleTextBlock: ["productDescriptionHeaderTitleText"],
            productDescriptionHeaderImgBlock: ["productDescriptionHeaderImg"],
            productImgBlock: ["productImgMainBlock", "productImgGalleryBlock"],
            productImgMainBlock: ["productImgMainImg"],

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
            productDescBlock: ["productTitleBlock", "productRatingsBlock", "productPriceBlock", "productAttDetailsBlock", "productQtyAddBtnBlock"],
            productAttDetailsBlock: ["productvariantSimpleBlock", "productAttBlock", "productDetailsBlock"],
            productDetailsBlock: ["productDetailstext"],
            productvariantSimpleBlock: ["productvariantSimpleText"],
            productTitleBlock: ["productTitleTextBlock"],
            productTitleTextBlock: ["productTitleText"],
            productPriceBlock: ["productPriceLabel", "productPriceActiveBlock", "productPriceRegularBlock", "productPriceWorthBlock"],
            productPriceActiveBlock: ["productPriceActiveTextBlock"],
            productPriceActiveTextBlock: ["productPriceActiveText", "productPriceActiveTextMsg"],
            productPriceRegularBlock: ["productPriceRegularTextBlock"],
            productPriceRegularTextBlock: ["productPriceRegularText"],
            productPriceWorthBlock: ["productPriceWorthTextBlock"],
            productPriceWorthTextBlock: ["productPriceWorthText", "productPriceWorthTextMsg"],

            productAttBlock: ["productvariantPopupClose", "productAddErrText", "productAddTitle", "productAttzeroBlock", "productAttSizeBlock", "productAttColorBlock", "productAttthirdBlock", "productAttfourthBlock", "productAttEditBlock", "productAttvariantaddBlock", "productQtyBlock"],
            productAttvariantaddBlock: ["productAttvariantaddText"],
            productAttvariantviewdetailsBlock: ["productAttvariantviewdetailsText"],
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
            productQtyAddBtnBlock: ["productDescQtyBlock", "productDescAddBlock", "productAddBlock", "productBstxtBlock"],
            productDescAddBlock: ["productDescAddTextBlock"],
            productDescAddTextBlock: ["productDescAddText"],
            productDescQtyBlock: ["productDescQtyDownBlock", "productDescQtyInputBlock", "productDescQtyUpBlock"],
            productDescQtyDownBlock: ["productDescQtyDownBtnBlock"],
            productDescQtyDownBtnBlock: ["productDescQtyDownBtn"],
            productDescQtyUpBlock: ["productDescQtyUpBtnBlock"],
            productDescQtyUpBtnBlock: ["productDescQtyUpBtn"],
            productDescQtyInputBlock: ["productDescQtyInputTextBlock"],
            productDescQtyInputTextBlock: ["productDescQtyInputText"],
            productQtyBlock: ["productQtyDownBlock", "productQtyInputBlock", "productQtyUpBlock"],
            productQtyDownBlock: ["productQtyDownBtnBlock"],
            productQtyDownBtnBlock: ["productQtyDownBtn"],
            productQtyUpBlock: ["productQtyUpBtnBlock"],
            productQtyUpBtnBlock: ["productQtyUpBtn"],
            productQtyInputBlock: ["productQtyInputTextBlock"],
            productQtyInputTextBlock: ["productQtyInputText"],
            productAddBlock: ["productAddImgBlock", "productAddTextBlock"],
            productAddTextBlock: ["productAddText", "productAddspan"],
            productAddImgBlock: ["productAddImg"],
        }
    },
}

INC.methods = {};
INC.methods.networkReq = function (nwConfigObj, cb) {

    var nwConfigObj = new INC.classes.NWConfig(nwConfigObj);
    // if(INC.debug) console.log(nwConfigObj);
    var xhr = new XMLHttpRequest();
    xhr.open(nwConfigObj.method, nwConfigObj.url, true);

    xhr.onload = function () {}
    // xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status === 200) {
            if (xhr.response != "") {
                if (INC.config.pageType == "pdp" && document.querySelector('.add-to-customize') == null) {
                    cb(xhr.response);
                } else {
                    cb(xhr.response);
                }
                if (INC.config.pageType == "pdp") {
                    var p_ids = INC.methods.getProductIdFromWebPage()
                    var repd = JSON.parse(xhr.response)
                    if (repd.CategoryRecommendations == null) {
                        INC.methods.irbReq_is_tc(p_ids, 10, "catalog_product_view");
                    }
                }
                sessionStorage.setItem('bundleJSON', xhr.response)
            }
            // else {
            //     if (INC.config.pageType == "productList") {
            //         INC.config.modal_called = true
            //     }
            //     if(INC.config.pageType == "pdp"){
            //         var p_ids=INC.methods.getProductIdFromWebPage()
            //         setTimeout(function(){
            //             // INC.methods.irbReq_is_categ_recomendation(p_ids, 10, "catalog_product_view");
            //         },1000)
            //     }
            // }
        }
    }

    xhr.send(JSON.stringify(nwConfigObj.params));
}

INC.methods.irbReq = function (productId, bundleCount, elementName) {

    var elementName = elementName || "";
    var productId = productId;
    var apiKey = INC.config.clientToken;
    var bundleReqCount = bundleCount || 5;
    var irbPATH = "//rapidload.increasingly.co/increasingly_bundles?irb/";
    if (INC.config.pageType == "pdp" || INC.config.pageType == "cartPage") {
        var irbReqParams =
            "product_ids=" + productId +
            "&category_id=" +
            "&api_key=" + apiKey +
            "&client_id=" +
            "&page_type=" + elementName +
            "&fr=" + "1" +
            "&client_visitor_id=" + INC.config.ivid;
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

INC.methods.refreshBundles = function (nwConfigObj) {
    var incDataStore = INC.dataStore;

    INC.methods.networkReq(nwConfigObj, function (response) {


        if (INC.debug) console.log(response.length);
        if (response.length == 0) return;

        if (typeof (response) != "object") {
            var responseJSON = JSON.parse(response);
        } else {
            var responseJSON = response;
        }
        var isrecomendation = false;
        if (responseJSON.CategoryRecommendations != null) {
            if (responseJSON.CategoryRecommendations.length > 0) {
                isrecomendation = true
            }
        }
        if (responseJSON.hasOwnProperty('CategoryRecommendations') && isrecomendation == true) {
            responseJSON.timeStamp = Date.now();
            var bundleResponse = responseJSON;
            // INC.config.recommendation = true
            INC.dataStore.methods().buildDataStoreObj(bundleResponse);
            if ((incDataStore.dataStoreObj == null) || (incDataStore.dataStoreObj == undefined)) return;
            // INC.config.recommendation = true

            switch (INC.config.pageType) {
                // case "pdp": INC.methods.createAMBlock(null,"PDP","recommendation"); break;
            }
        } else if (responseJSON.hasOwnProperty('Bundles') && (responseJSON.Bundles != null)) {
            INC.config.recommendation = false;
            responseJSON.timeStamp = Date.now();
            var bundleResponse = responseJSON;
            if (INC.debug) console.log(bundleResponse);
            INC.dataStore.methods().buildDataStoreObj(bundleResponse);

            if ((incDataStore.dataStoreObj == null) || (incDataStore.dataStoreObj == undefined)) return;

            switch (INC.config.pageType) {
                case "pdp":
                    INC.methods.createPDPBlock();
                    if (document.querySelector('.add-to-cart') != null) {
                        if (INC.config.pageType == "pdp") {
                            if (document.querySelector('.add-to-cart').getAttribute('onClick') == undefined) {
                                document.querySelector('.add-to-cart').setAttribute('onClick', 'pdp_sidebar_client_btn_click(this)')
                            }
                        }
                    }
                    break;
                case "cartPage":
                    INC.methods.createAMBlock();
                    break;
                case "ticket":
                    INC.methods.createAMBlock("ticket");
                    break;
                case "productList":
                    INC.config.dupDataObjectProducts = []
                    INC.methods.createSidebarBlock();
                    var findObj = new INC.classes.FindObj();
                    findObj["id"] = INC.dataStore.pdpProductId;
                    var sbBlock = document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarModalBlock"));
                    sbBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarCartAddedBlock")).style.visibilty = "hidden";
                    document.querySelector(".inc_sidebar_modal_block .inc_sidebar_cart_added_block").style.borderBottom = "0px";
                    sbBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarHeaderItemCountFigureText")).innerText = 0;
                    sbBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarCartAddedListBlock")).innerHTML = "";
                    if (INC.dataStore.plpProductQty == 0) {
                        INC.dataStore.plpProductQty = 1
                    }
                    INC.dataStore.plpProductQty = Math.abs(INC.dataStore.plpProductQty)
                    INC.methods.addProductToSidebarCart(findObj, INC.dataStore.plpProductQty, null, "client_add_btn");
                    if (document.querySelector('.ic_popup_module_wrapper.inc_active .inc_popup_close') != null) {
                        document.querySelector('.ic_popup_module_wrapper.inc_active .inc_popup_close').click();
                    }
                    INC.methods.showSidebar();



                    var img_elem = setInterval(function () {
                        var circle_img = document.querySelector('.inc_cart_added_product_img img')
                        if (circle_img != null) {
                            clearInterval(img_elem)
                            var circle_img = document.querySelector('.inc_cart_added_product_img img')
                            if (circle_img != null) {
                                circle_img.src = INC.config.empty_prod_details[0].p_img
                            }
                            var subtotalinc_active = document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text');
                            if (subtotalinc_active != null) {
                                var subt = (+INC.config.empty_prod_details[0].p_activePrice * 1)
                                subtotalinc_active.innerText = formatter.format(subt);
                                subtotalinc_active.setAttribute('subtotalinc_activeprice', subt)
                                var subtotalregular = document.querySelector('.inc_cart_added_product_desc_subtotal_price_regular_text')
                                subtotalregular.setAttribute('subtotalregularprice', (+INC.config.empty_prod_details[0].regularPrice * 1))

                                if (INC.config.empty_prod_details[0].regularPrice != 0 && INC.config.empty_prod_details[0].regularPrice != INC.config.empty_prod_details[0].p_activePrice) {
                                    document.querySelector('.inc_cart_added_product_desc_subtotal_price_regular_text').innerText = formatter.format(+INC.config.empty_prod_details[0].regularPrice * 1);
                                    document.querySelector('.inc_cart_added_product_desc_subtotal_price_regular_text').setAttribute('style', 'margin-right: 4px;')
                                }
                            }
                            var prd_names = document.querySelector('.inc_cart_added_product_desc_title_text')
                            prd_names.innerHTML = INC.config.empty_prod_details[0].p_name
                            var prd_price = document.querySelector('.inc_cart_added_product_desc_price_active_text')
                            if (prd_price != null) {
                                prd_price.innerText = formatter.format(INC.config.empty_prod_details[0].p_activePrice);
                            }
                        }
                    }, 100)
                    break;
            }


        } else if (responseJSON.hasOwnProperty('CategoryRecommendations') && (responseJSON.CategoryRecommendations.length > 0)) {
            responseJSON.timeStamp = Date.now();
            var bundleResponse = responseJSON;
            if (INC.debug) console.log(bundleResponse);
            INC.dataStore.methods().buildDataStoreObj(bundleResponse);

            if ((incDataStore.dataStoreObj == null) || (incDataStore.dataStoreObj == undefined)) return;
            //console.log(incDataStore.dataStoreObj)
            // INC.config.recommendation = true
            switch (INC.config.pageType) {
                case "pdp":
                    INC.methods.createAMBlock("PDP");
                    break;
            }

        }
        if (INC.debug) console.log(responseJSON.hasOwnProperty('Bundles') && INC.config.pageType == "productList");


    });
}

INC.methods.irbReq_is_tc = function (productId, bundleCount, elementName) {
    var elementName = elementName || "";
    var productId = productId;
    var apiKey = INC.config.clientToken;
    var bundleReqCount = bundleCount || 5;
    var irbPATH = "//rapidload.increasingly.co/increasingly_bundles?irb/";
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

    xhr.onload = function () {}

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status === 200) {
            if (xhr.response != "") {
                if (INC.config.pageType == "pdp") {
                    cb_tc(JSON.parse(xhr.response));
                }
            }
        }
    }

    xhr.send(JSON.stringify(networkConfigObj["params"]));
}
INC.methods.irbReq_is_categ_recomendation = function (productId, bundleCount, elementName) {
    var bundleResponse = "";
    INC.dataStore.methods().buildDataStoreObj(bundleResponse);
    // INC.config.recommendation = true

    var elementName = elementName || "";
    var productId = productId;
    var apiKey = INC.config.clientToken;
    var bundleReqCount = bundleCount || 5;
    var irbPATH = "//rapidload.increasingly.co/increasingly_bundles?irb/";
    var irbReqParams =
        "product_ids=" + productId +
        "&category_id=" +
        "&api_key=" + apiKey +
        "&client_id=" +
        "&page_type=" + elementName +
        "&fr=" + "1" +
        "&client_visitor_id=" + INC.config.ivid +
        "&rc=" + "1"
    if (INC.debug) console.log(irbReqParams);
    var irbReqURL1 = decodeURI(irbPATH + btoa(irbReqParams));
    var networkConfigObj = new INC.classes.NWConfig();
    networkConfigObj["url"] = irbReqURL1;
    var xhr = new XMLHttpRequest();
    xhr.open("GET", networkConfigObj["url"], true);

    xhr.onload = function () {}
    // xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4 && xhr.status === 200) {
            if (xhr.response != "") {
                if (INC.config.pageType == "pdp") {
                    cb_tc(JSON.parse(xhr.response), "recommendation");
                }
            }
        }
    }

    xhr.send(JSON.stringify(networkConfigObj["params"]));
}

INC.methods.getSelectorClassName = function (classNames, className) {
    return "." + classNames[className];
}
INC.methods.get_product_ratings = function (filed3, field2, rating_containers) {
    //&& filed3 != 0 && filed3.split('|')[0] != "0.0" && filed3.split('|')[0] != "0"
    var reviewc = filed3
    var count = document.createElement('span');
    count.classList.add('rating_count')
    rating_containers.appendChild(count);
    var avg = document.createElement('span');
    avg.classList.add('rating_avg')

    if (reviewc.split('|')[1] == undefined || reviewc.split('|')[1] == '') {
        count.textContent = "(0)";
    } else {
        // if (reviewc.replace('-', '.').trim() != "") {
        //     count.textContent = "(" + reviewc.replace('-', '.').trim() + ")"
        // }
        count.textContent = "(" + filed3.split('|')[1] + ")";

    }
    if (filed3 != undefined && filed3 != "") {
        var rating = filed3.split('|')[0];
        var reviewc = field2
        // filed3.split('|')[1];
        if (rating == "" || rating == undefined || rating == "NaN" || rating == "norating") {
            rating = 0
        }
        // var gave_rat = filed4;
        var ratingAvg = filed3
        // rating = Math.round(rating * 2) / 2;
        rating = parseFloat(rating).toFixed(1)
        rating = rating.toString();
        var rating_m = null;
        //if (rating != 0 && rating != "" && rating != null) {
        var rating_container = rating_containers;
        if (rating != 0 && rating != 1 && rating != 2 && rating != 3 && rating != 4 && rating != 5) {
            rating_m = rating.replace(".", "-");
        }
        if (rating == 0) {
            rating = "0-0"
        }
        if (rating == 1) {
            rating = "1-0"
        }
        if (rating == 2) {
            rating = "2-0"
        }
        if (rating == 3) {
            rating = "3-0"
        }
        if (rating == 4) {
            rating = "4-0"
        }
        if (rating == 5) {
            rating = "5-0"
        }
        if (rating == "") {
            rating = 0;
        }
        if ((rating_m != null && rating_m != "NaN")) {
            rating_containers.classList.add("rating_" + rating_m);
        } else if (isNaN(rating_m)) {
            rating_containers.classList.add("rating_" + rating);
        } else {
            rating_containers.classList.add("rating_" + rating);
        }

        var stars = document.createElement('span');
        stars.classList.add('rating_stars');
        if ((rating_m != null && rating_m != "NaN")) {
            stars.classList.add("rating_" + rating_m);
        } else if (isNaN(rating_m)) {
            stars.classList.add("rating_" + rating);
        } else {
            stars.classList.add("rating_" + rating);
        }
        rating_containers.appendChild(stars);
    } else {
        var stars = document.createElement('span');
        stars.innerText = "."
        stars.style.color = "#fff"
        stars.classList.add('rating_stars');
        stars.classList.add('noratings');
        rating_containers.appendChild(stars);
    }
}
INC.methods.getProductIdFromWebPage = function () {
    var href_split = window.location.href.split('?override')[1];
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
    if ((window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=3') >= 0) && cid != "" && cid != 0 && cid != null && pid != "" && pid != 0 && pid != null) {
        var total_split_href = href_split.split('&');
        var cid = "";
        var pid = ""

        if (href_split != undefined) {
            for (h = 0; h < total_split_href.length; h++) {
                if (total_split_href[h].indexOf('cid') >= 0) {
                    cid = total_split_href[h].split('=')[1].split('#')[0]
                } else if (total_split_href[h].indexOf('pid') >= 0) {
                    pid = total_split_href[h].split('=')[1].split('#')[0]
                }
            }
        }
        // cid = "6899319";
        // pid = "1902";
        INC_COL.config.pdpCID = cid
        INC_COL.config.pdpPID = pid
        return pid;
    }
}

INC.methods.detectPageType = function () {
    if (document.querySelector('#pdp-accordion__description') != null) {
        return "pdp";
    } else if (document.querySelector('.products-grid-wrap') != null) {
        return "productList";
    } else if (document.querySelector('.plp-wrapper') != null) {
        return "productList";
    } else if (document.querySelector('.new-checkout') != null) {
        return "cartPage";
    } else if (document.querySelector('.basket-header') != null) {
        return "cartPage";
    } else if (document.querySelector('body').classList.contains('checkout-cart-index')) {
        return "cartPage";
    }
    if ((window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=2') >= 0 || window.location.href.indexOf('incgs=3') >= 0)) {
        return "pdp";
    }
    if (document.querySelector('.products-grid-wrap') != null) {
        return "plp";
    }
}
INC.methods.detectDeviceType = function () {
    if (window.innerWidth > 1590) {

    }
    return (window.innerWidth > 900) ? "desktop" : "mobile";
}
INC.methods.detectLanguage = function detectLanguage() {
    return "en";
}
INC.methods.showSidebar = function () {

    if (document.querySelector('.dialog') != null) {
        document.querySelector('.dialog').style.visibility = "hidden";
    }

    if (document.querySelector('.-js-overlay') != null) {
        document.querySelector('.-js-overlay').remove();
    }

    if (document.querySelector('.atb-confirmation') != null) {
        document.querySelector('.atb-confirmation').classList.add('inc_hide');
    }

    if (document.querySelector('.inc_sidebar_modal_block') != null) {
        var total_added_product = INC.config.pdpaddedProductList;
        for (t = 0; t < INC.config.pdpaddedProductList.length; t++) {
            var elmrem = document.querySelector('.inc_sidebar_recommended_block .inc_product_module_block[data-main_id="' + INC.config.pdpaddedProductList[t] + '"]')
            if (elmrem != null) {
                elmrem.parentNode.removeChild(elmrem);
            }
        }
        var seidebar_pr_length = document.querySelectorAll('.inc_sidebar_modal_block .inc_product_module_block').length;
        if (document.querySelector('.inc_sidebar_cart_added_block') != null) {
            document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_active')
        }
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

        if (seidebar_pr_length == 0) {
            // window.location.href = INC.clientConfig.checkoutLink;
            if (document.querySelector('.modal-inner-wrap') != null) {
                document.querySelector('.modal-inner-wrap').style.visibility = 'visible';
            }
        }

        var total_added_product = INC.config.pdpaddedProductList;

        var all_cate_tab = document.querySelectorAll('.inc_recommended_tabs_list_block .inc_recommended_tabs_list_item_text');

        if (all_cate_tab.length == 0) {
            if (document.querySelector('.inc_sidebar_modal_block') != null) {
                document.querySelector('.inc_sidebar_modal_block').setAttribute('id', 'inc_empty_sidebar')
            }
        }
        if (document.querySelector('#progress_bar_dialog') != null) {
            document.querySelector('#progress_bar_dialog').style.display = "none"
        }
        if (document.querySelector('.inc_sidebar_modal_block .inc_product_module_block') != null) {
            if (document.querySelector('.inc_cart_added_product_desc_title_text') != null && document.querySelector('.inc_cart_added_product_desc_title_text').innerText == "undefined") return;

            if (document.querySelector('.sidebar_outer') != null) {
                document.querySelector('.sidebar_outer').style.display = "block"
                document.querySelector('.inc_sidebar_modal_block').style.display = "block"
                document.querySelector('.sidebar_outer').classList.add('sidebar_outer_active')
            }

            document.querySelector('html').classList.add('inc_overlay');
            var elSidebarOverlay = document.querySelector(".inc_sidebar_overlay_block");
            if (elSidebarOverlay != null) {
                elSidebarOverlay.style.display = "block";
            }
            document.querySelector('.inc_sidebar_modal_block').style.display = "block";
            var classNames = INC.uiConfig.sidebar.className;
            var getSelectorClassName = INC.methods.getSelectorClassName;
            document.querySelector('.inc_sidebar_modal_block').classList.add("inc_active");
            if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {} else {
                document.querySelector('html').classList.remove('inc_overlay')
                document.querySelector('body').classList.remove('inc_popup_open');
            }
            if (document.querySelector('.inc_recommended_products_list_block .inc_product_module_block') == null) {
                if (document.querySelector('.inc_recommended_tabs_list_item_text') != null) {
                    document.querySelector('.inc_recommended_tabs_list_item_text').click()
                    setTimeout(function () {
                        _isVisible._init({
                            classSelector: ".inc_pdp_block source[data-src], .inc_sidebar_modal_block img[data-src], .inc_sidebar_modal_block source[data-src]",
                            index: 0
                        });
                    }, 2000)
                }
            }
            if (document.querySelector('.sidebar_outer.sidebar_outer_active') == null) {
                document.querySelector('html').classList.remove('inc_overlay')
                document.querySelector('body').classList.remove('inc_popup_open');
            }
        }
        setTimeout(function () {
            _isVisible._init({
                classSelector: ".inc_pdp_block source[data-src], .inc_sidebar_modal_block img[data-src], .inc_sidebar_modal_block source[data-src]",
                index: 0
            });
        }, 2000)
    }
    if (document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block') != null) {
        document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block').classList.remove('inc_loading');
    }
    // document.querySelector('body').style.overflowY = "hidden";
}
INC.methods.hideSidebar = function () {

    INC.config.sidebarremovedprod = []
    document.querySelector('html').style = '';
    var elSidebarOverlay = document.querySelector(".inc_sidebar_overlay_block");
    // INC.config.pdpaddedProductList = []
    elSidebarOverlay.style.display = "none";
    var classNames = INC.uiConfig.sidebar.className;
    var getSelectorClassName = INC.methods.getSelectorClassName;
    document.querySelector('html').classList.remove('inc_overlay')
    document.querySelector('body').classList.remove('inc_popup_open');
    document.querySelector(getSelectorClassName(classNames, "sidebarModalBlock")).classList.remove("inc_active");
    document.querySelector(getSelectorClassName(classNames, "sidebarModalBlock")).style.display = "none"
    if (document.querySelector('#widget_minishopcart') != null) {
        // document.querySelector('#widget_minishopcart').click()
    }
    if (document.querySelector('.sidebar_outer') != null) {
        document.querySelector('.inc_sidebar_modal_block').style.display = "none"
        document.querySelector('.sidebar_outer').style.display = "none"
        document.querySelector('.sidebar_outer').classList.remove('sidebar_outer_active')
    }
    if (document.querySelector('#minishopcart_total') != null && document.querySelector('#miniBasketTabProdCount') != null) {
        document.querySelector('#minishopcart_total').innerText = document.querySelector('#miniBasketTabProdCount').innerText.trim()
    }

    if (document.querySelector('.action-close') != null) {
        document.querySelector('.action-close').click();
    }
    var allchecked = document.querySelectorAll('.inc_pdp_bundle_product_list_main_block .inc_product_showcase_block .inc_product_desc_add_img.checked')
    for (re = 0; re < allchecked.length; re++) {
        if (allchecked[re] != undefined) {
            allchecked[re].click()
        }
    }



    INC.config.pdpaddedProductList = Object.keys(INC.dataStore.bundleCartProducts)
    if (document.querySelector('.sidebar_outer') != null) {
        Array.prototype.forEach.call(document.querySelectorAll('.sidebar_outer'), function (el) {
            el.parentNode.removeChild(el);
        });

        Array.prototype.forEach.call(document.querySelectorAll(".sidebar_outer"), function (el) {
            el.parentNode.removeChild(el);
        });
        Array.prototype.forEach.call(document.querySelectorAll(".inc_sidebar_overlay_block"), function (elm) {
            elm.parentNode.removeChild(elm);
        });
    }
    setTimeout(function () {
        INC.methods.createSidebarBlock();
    }, 20)

    setTimeout(function () {
        if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_block') != null) {
            document.querySelector('.inc_cart_added_product_desc_subtotal_price_block').classList.remove('is_special_price');
        }

    }, 30)

    setTimeout(function () {
        document.querySelector('html').style = ''
    }, 1000)
    //     if (INC.CartA && INC.CartB & INC.CartC & INC.CartD & INC.CartE & INC.CartF) {
    //         INC_COL.CartA = true
    // INC_COL.CartB = true
    // INC_COL.CartC = true
    // INC_COL.CartD = true
    // INC_COL.CartE = true
    // INC_COL.CartF = true
    //     }
    window.location.reload();

}
INC.methods.addProductToSidebarCart = function (findObj, qty, productBlock, client_add_btn, btn_addtocart) {
    if (qty == 0) {
        qty = 1;
    }
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
    if (document.querySelector('.inc_sidebar_cart_added_block.inc_active') != null) {
        if (document.querySelector('.inc_header_item_count_title_block') != null) {
            document.querySelector('.inc_header_item_count_title_block').click()
        }
    }
    var bundleaddedpriceblock = getViewElement("sidebarCartAddedProductDescSubTotalPriceBlock");
    var elHeadersubtotalactivetext = getViewElement("sidebarCartAddedProductDescSubTotalActiveText");
    var elHeadersubtotalregulartext = getViewElement("sidebarCartAddedProductDescSubTotalRegularText");
    var elHeaderItemCountFigureText = getViewElement("sidebarHeaderItemCountFigureText");
    var sidebarHeaderItemCountTitleText = getViewElement("sidebarHeaderItemCountTitleText");
    var sbCartBlock = getViewElement("sidebarCartAddedListBlock");
    if (client_add_btn == "client_add_btn") {
        sbCartBlock.innerHTML = ""
    }
    var productObj = dataStore.methods().getProductById(findObj);
    var productBlock = INC.methods.getElementChilds("sidebarCartAddedProductBlock", "sidebar");

    if (INC.clientConfig.OOS.indexOf(productObj.mainId) >= 0) {
        productBlock.classList.add('cross')
        for (e = 0; e < INC.clientConfig.OOS.length; e++) {
            if (INC.clientConfig.OOS_MESG[e] != undefined) {
                var remerrorjust = document.querySelector('.inc_justerror')
                if (remerrorjust != null) {
                    remerrorjust.parentNode.removeChild(remerrorjust)
                }
                if (document.querySelector('.inc_justerror') == null) {
                    var headertitle = sbBlock.querySelector('.inc_sidebar_modal_cart_and_title_block')
                    var errormes = generate_html_tag('div', 'inc_justerror')
                    var errormestext = generate_html_tag('span', 'inc_justerror_text')
                    // if(errormestext.innerHTML == null ){
                    errormestext.innerHTML = "<span>An unknown error has occurred. Please refresh or try again later</span>"
                    // }
                    //  productObj.name + " - " + INC.clientConfig.OOS_MESG[e]
                    errormes.appendChild(errormestext)
                    headertitle.parentNode.insertBefore(errormes, headertitle)
                    setTimeout(function () {
                        // var remerrorjust=document.querySelector('.inc_justerror')
                        // if(remerrorjust != null){
                        //     remerrorjust.parentNode.removeChild(remerrorjust)
                        // }
                    }, 15000)
                }
            }
        }
    } else {
        productBlock.setAttribute('data-id', productObj.id);
        productBlock.setAttribute('data-sku', productObj.sku);
        productBlock.setAttribute('data-main_id', productObj.mainId);
        productBlock.setAttribute('data-bundle_id', productObj.bundleId);
        productBlock.setAttribute('data-childsku', productObj.childsku);
        productBlock.setAttribute('data-mainsku', productObj.mainsku);

        var quantityLabel = INC.methods.generateHTMLTags('div')
        quantityLabel.classList.add('sidebar_product_quantity_label')
        productBlock.appendChild(quantityLabel)

        var elImg = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductImg"));
        var elTitleText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescTitleText"));
        var elPriceActiveText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceActiveText"));
        var elPriceRegularText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceRegularText"));
        var elAttsizeText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescAttSizeText"));
        var elAttColorText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescAttColorText"));

        var elImgTag = INC.methods.generateHTMLTags('img', {
            src: productObj.imageURL
        });
        if (Object.keys(productObj).length > 0) {
            elImgTag.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
        }
        if (onloadpdp == true) {
            elImgTag.src = productObj.imageURL
        }
        elImg.appendChild(elImgTag);
        elImgTag.setAttribute('alt', productObj.name)

        elTitleText.innerHTML = qty + " X " + "<a style='text-transform: unset;'>" + productObj.name + "</a>";
        elTitleText.setAttribute('title', productObj.name.toString())
        //href='" + productObj.url + "'
        elTitleText.setAttribute('style', 'text-transform: unset;')

        //current  active prod
        var color = "";
        var size = "";
        if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
            var just_check_prod_block = document.querySelector('.inc_sidebar_modal_block .inc_product_module_block[data-main_id="' + productObj.sku + '"]')
        } else {
            var just_check_prod_block = document.querySelector('.inc_product_module_block[data-main_id="' + productObj.mainId + '"]')
        }
        if (just_check_prod_block != null) {
            if (just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active div') != null) {
                size = just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active div').innerText
            }
            if (just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block') != null) {
                color = just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-color')
            }
        }
        if (btn_addtocart != undefined) {
            if (btn_addtocart.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == true) {
                var module_blk = btn_addtocart.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                if (module_blk.querySelector('.inc_product_modal_block .inc_product_desc_att_block') != null) {
                    var sel_attr = module_blk.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                    var zero_text = sel_attr.getAttribute('data-zero');
                    var size_text = sel_attr.getAttribute('data-size');
                    var color_text = sel_attr.getAttribute('data-color');
                    var third_text = sel_attr.getAttribute('data-third');

                    var size = ""
                    var color = ""
                    if (color_text != undefined) {
                        color = color_text
                    }
                    if (zero_text != undefined) {
                        if (size == "") {
                            size = zero_text
                        } else {
                            size = size + "|" + zero_text
                        }
                    }
                    if (size_text != undefined) {
                        size = size + "|" + size_text
                    }
                    if (third_text != undefined) {
                        size = size + "|" + third_text
                    }
                }
            }
        }


        //end
        if (color != "" && color != undefined && color != null) {
            elAttColorText.innerText = "Color" + color;
        } else if (size != "" && size != undefined && size != null) {
            elAttsizeText.innerText = "Size : " + size;
        }


        var activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
        var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();

        elPriceActiveText.innerText = INC.clientConfig.currencySymbol + formatter.format(activePrice)
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


        var old_qty = 0
        if (document.querySelector('.inc_header_item_count_title_text') != null) old_qty = document.querySelector('.inc_header_item_count_title_text').textContent.split('Subtotal (')[1].split('items')[0].trim()
        if (sbCartBlock != null) {
            if (document.querySelector('.inc_cart_added_product_block[data-id="' + productObj.id + '"]') == null) {
                if (sbCartBlock != null) {
                    sbCartBlock.insertBefore(productBlock, sbCartBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductBlock")));
                }
            } else {
                var addedel = document.querySelector('.inc_cart_added_product_block[data-id="' + productObj.id + '"]')
                addedel.parentNode.removeChild(addedel)

                if (sbCartBlock != null) {
                    sbCartBlock.insertBefore(productBlock, sbCartBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductBlock")));
                }
            }

        }
        if (qty < 1) qty = 1
        if (elHeaderItemCountFigureText != null) elHeaderItemCountFigureText.style.display = "none";
        if (client_add_btn == "client_add_btn") {
            if (qty == 1) {
                sidebarHeaderItemCountTitleText.innerHTML = "Subtotal" + " " + "(" + (parseInt(qty)) + " item)";
            } else {
                sidebarHeaderItemCountTitleText.innerHTML = "Subtotal" + " " + "(" + (parseInt(qty)) + " items)";
            }
        } else {
            sidebarHeaderItemCountTitleText.innerHTML = "Subtotal" + " " + "(" + (parseInt(qty) + parseInt(old_qty)) + " items)";
        }
        quantityLabel.innerText = qty


        if (sbCartBlock != null) {
            if (sbCartBlock.querySelectorAll(getSelectorClassName(classNames, "sidebarCartAddedProductBlock")).length > 2) {
                getViewElement("sidebarCartAddedRightBtnBlock").style.visibility = "visible";
                getViewElement("sidebarCartAddedLeftBtnBlock").style.visibility = "visible";
            }
        }
        elHeadersubtotalactivetext.setAttribute('subtotalactiveprice', subtotalactiveprice)
        elHeadersubtotalregulartext.setAttribute('subtotalregularprice', subtotalregukarprice)
        if (+subtotalactiveprice != null && (+subtotalactiveprice < +subtotalregukarprice)) {
            elHeadersubtotalactivetext.innerHTML = INC.clientConfig.currencySymbol + formatter.format(subtotalactiveprice)
            elHeadersubtotalregulartext.innerHTML = "<span>" + "Was" + "</span>" + INC.clientConfig.currencySymbol + formatter.format(subtotalregukarprice);
            if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_block') != null) document.querySelector('.inc_cart_added_product_desc_subtotal_price_block').classList.add("is_special_price")

            elHeadersubtotalactivetext.style.color = "#ee1c31"
        } else {
            elHeadersubtotalactivetext.style.color = "#000"
            elHeadersubtotalactivetext.innerHTML = INC.clientConfig.currencySymbol + formatter.format(subtotalactiveprice);
            elHeadersubtotalregulartext.innerHTML = ""
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
        if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 7) {
            document.querySelector('.inc_sidebar_cart_added_block').classList.add('more_than_seven')
        }

        setTimeout(function () {
            for (it = 0; it < item_inc.length; it++) {
                if (item_inc[it].exceededQuantityCatEntryIds != undefined) {
                    var adde_items = document.querySelector('.inc_cart_added_product_block[data-childsku="' + item_inc[it].exceededQuantityCatEntryIds + '"]')
                    if (adde_items != null) {
                        adde_items.setAttribute('orderId', item_inc[it].orderId)
                        adde_items.setAttribute('exceededQuantityCatEntryIds', item_inc[it].exceededQuantityCatEntryIds)
                        adde_items.classList.add('max_qty_reach')
                        adde_items.querySelector('.inc_product_desc_qty_up_block').setAttribute('style', 'pointer-events: none;opacity: 0.7;')
                    }
                } else {
                    var adde_items = document.querySelector('.inc_cart_added_product_block[data-childsku="' + item_inc[it].catEntryId + '"]')
                    if (adde_items != null) {
                        adde_items.setAttribute('itemCatEntryId', item_inc[it].itemCatEntryId)
                        adde_items.setAttribute('orderId', item_inc[it].orderId)
                        adde_items.setAttribute('orderItemId', item_inc[it].orderItemId)
                    }
                }
            }
        }, 3000)
    }
}
INC.methods.createAMBlock = function (PDP_type) {
    //console.log("triggerd")
    setTimeout(function () {
        onloadpdp = true
    }, 500)
    if (INC.dataStore.dataStoreObj.undefined == undefined) {
        var classNames = INC.uiConfig.am.className;
        var amBlock = this.getElementChilds("afModalBlock", "am");
        var getSelectorClassName = INC.methods.getSelectorClassName;

        function getViewElement(className) {
            return amBlock.querySelector(getSelectorClassName(classNames, className));
        }
        if (document.querySelector('.o-navigation__bag .a-bag-count') != null) {
            var totalbagcountside = document.querySelector('.o-navigation__bag .a-bag-count').innerText
            if (totalbagcountside == 0) {
                amBlock.style.display = "none"
            }
        }
        getViewElement("afProductListBlock").innerHTML = "";

        var elAmTitleText = getViewElement("afModalTitleText");
        if (PDP_type == "PDP" || PDP_type == "productList") {
            elAmTitleText.innerText = "Other customers also viewed";
        } else {

        }


        var productListObj = INC.dataStore.dataStoreObj;
        var productListArray = Object.keys(productListObj);
        //console.log(productListObj)
        var amProductListBlock = getViewElement("afProductListBlock");
        var amProductListDotsBlock = getViewElement("afProductListDotsMainBlock");


        var cartId = document.querySelectorAll('.order-summary__section__content table.product-table tr.product')
        var productIds = [];
        if (window.oiProducts != undefined) {
            Array.prototype.forEach.call(window.oiProducts, function (elProductCode) {
                var productId = elProductCode.id;
                productIds.push(productId);
            });
        } else {
            Array.prototype.forEach.call(document.querySelectorAll('.dth-mini-basket__items__qty-remove'), function (elProductCode) {
                if (elProductCode.getAttribute('data-parentprn') != undefined) {
                    productIds.push(elProductCode.getAttribute('data-parentprn'));
                }
            });
        }
        if (productIds.length == 0) {
            var datalayer = dataLayer
            for (j = 0; j < datalayer.length; j++) {
                if (datalayer != null) {
                    if (datalayer[j].event == "checkout") {
                        if (datalayer[j].ecommerce != undefined) {
                            if (datalayer[j].ecommerce.checkout != undefined) {
                                if (datalayer[j].ecommerce.checkout.products != undefined) {
                                    var elproducts = datalayer[j].ecommerce.checkout.products
                                    for (ll = 0; ll < elproducts.length; ll++) {
                                        productIds.push(elproducts[ll].id)
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        var bundleProductsArray = INC.dataStore.bundleProductsArray;
        if (INC.config.pageType == "pdp") {
            if (INC.dataStore.bundleProductsArray.indexOf(INC.config.Product_id) == -1) INC.dataStore.bundleProductsArray.push(INC.config.Product_id)
            productIds = []
        }
        var addeddupl = []
        var p_count = 0
        // productListArray.forEach(function (mainProductId) {
        //console.log(bundleProductsArray)
        var duplamid = []
        var countmodule = 0
        if (PDP_type == "PDP") {
            bundleProductsArray.forEach(function (mainProductId) {
                if (duplamid.indexOf(mainProductId) == -1) {
                    duplamid.push(mainProductId)
                    amProductListBlock.appendChild(INC.methods.createProductModuleBlock(mainProductId, "am", false, amBlock));
                    elAmTitleText.innerText = "Other customers also viewed";
                }
            });
        } else {
            bundleProductsArray.forEach(function (mainProductId) {
                if (duplamid.indexOf(mainProductId) == -1) {
                    duplamid.push(mainProductId)
                    if (productIds.indexOf(mainProductId) == -1) {
                        if (INC.config.recommendation == false) {
                            var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({
                                mainId: mainProductId
                            });
                            var prd_module = INC.methods.createProductModuleBlock(firstProductObjByMainId.id, "am", false, amBlock);
                        } else {
                            //console.log("inside am function")
                            var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({
                                mainId: mainProductId
                            });
                            var prd_module = INC.methods.createProductModuleBlock(firstProductObjByMainId.id, "am", false, amBlock);
                        }


                        if (prd_module.getAttribute('data-id') != "undefined") {
                            amProductListBlock.appendChild(prd_module);
                            elAmTitleText.innerText = "Customers Also Bought";
                            if (INC.config.recommendation == false) {
                                if (countmodule > 2) {
                                    // prd_module.style.display = "none"
                                }
                            }
                            countmodule++
                        }
                    }
                }
            });
        }


        var amProductBlocks = amBlock.querySelectorAll(getSelectorClassName(classNames, "productBlock"));
        Array.prototype.forEach.call(amProductBlocks, function (productBlock) {
            productBlock.querySelector(getSelectorClassName(classNames, "productAddBlock")).addEventListener("click", function (e) {
                //console.log("Clicked")
                //
                var productBlockNode = this.parentNode.parentNode;
                var flag_check = INC.methods.checkVariantSelection(productBlockNode)
                if (this.parentNode.parentNode.className == "inc_product_desc_block") {
                    productBlockNode = this.parentNode.parentNode.parentNode.parentNode
                }
                var sku = productBlockNode.getAttribute('data-sku');
                var findObj = new INC.classes.FindObj({
                    id: sku
                });
                var qty = productBlockNode.querySelector('input').value;

                var add_btn = productBlockNode.querySelector('.inc_product_desc_add_text')
                var add_btn_click = productBlockNode.querySelector(getSelectorClassName(classNames, "productAddText"));
                var add_prod_im = productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImg"));

                if (flag_check == 1) {
                    if (this.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_showcase_block') == true || this.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_modal_block') == true) {
                        productBlockNode.querySelector('.inc_product_desc_add_text').innerText = "Adding..."
                        INC.methods.addProductToCart(findObj, qty, "am", productBlockNode, add_btn_click, add_prod_im, add_btn);
                    }
                }
            });
        });
        if (INC.config.pageType == "pdp" || INC.config.pageType == "productList") {
            if (amBlock != null) {
                amBlock.style.paddingTop = "10px"
            }

        }

        var prod_sl_c = ""
        if (INC.config.pageType == "pdp" || INC.config.pageType == "productList") {
            prod_sl_c = 1
        } else {
            prod_sl_c = 1
        }
        if (document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.am.className, "afModalBlock")) != null) {
            Array.prototype.forEach.call(document.querySelectorAll(INC.methods.getSelectorClassName(INC.uiConfig.am.className, "afModalBlock")), function (el) {
                el.parentNode.removeChild(el);
            });
        }
        var CartPos;

        if (window.innerWidth <= 820) {
            CartPos = document.querySelector('.basket_page_rr');
        } else {
            CartPos = document.querySelector('#JSContainer').nextElementSibling
        }
        if (CartPos != null) {
            CartPos.parentNode.insertBefore(amBlock, CartPos);
        }




        amBlock.querySelector(getSelectorClassName(classNames, "afRightBtnBlock")).style.visibility = "hidden";
        amBlock.querySelector(getSelectorClassName(classNames, "afRightBtnImg")).style.visibility = "hidden";
        amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).style.visibility = "hidden";
        amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnImg")).style.visibility = "hidden";


        var productBlocks = amProductListBlock.querySelectorAll(getSelectorClassName(classNames, "productModuleBlock"));
        var sliderBtnCounter = 0;

        if (productBlocks.length > prod_sl_c) {
            amBlock.querySelector(getSelectorClassName(classNames, "afRightBtnBlock")).style.visibility = "visible";
            amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).style.visibility = "visible";
            amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");

            amBlock.querySelector(getSelectorClassName(classNames, "afRightBtnImg")).style.visibility = "visible";
            amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnImg")).style.visibility = "visible";
            amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnImg")).setAttribute("style", "pointer-events: none;opacity:0.5");
        }
        var cc_ount = 1;
        if (window.innerWidth > 1239) {
            cc_ount = 4
        }
        if (productBlocks.length <= cc_ount) {
            amBlock.querySelector(getSelectorClassName(classNames, "afRightBtnBlock")).style.visibility = "hidden";
            amBlock.querySelector(getSelectorClassName(classNames, "afRightBtnImg")).style.visibility = "hidden";
            amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).style.visibility = "hidden";
            amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnImg")).style.visibility = "hidden";
        }
        amBlock.querySelector(getSelectorClassName(classNames, "afRightBtnBlock")).addEventListener("click", function () {
            sliderBtnCounter++;
            if (sliderBtnCounter > productBlocks.length - 1) {
                sliderBtnCounter--;
            }
            var all_p_length = document.querySelectorAll('.inc_af_product-list_block .inc_product_module_block').length
            // productBlocks[sliderBtnCounter - 1].style.display = "none";
            var cc_ount = 1;
            if (window.innerWidth > 1239) {
                cc_ount = 4
            }
            var width_slide = ""
            if (INC.config.pageType == "pdp" || INC.config.pageType == "productList") {
                // var cc_ount = 3;
                var width_slide = 260;
                if (window.innerWidth > 1270) {
                    // cc_ount = 4
                }
                if (window.innerWidth > 1368) {
                    // cc_ount = 4
                    // width_slide = 299;
                }
            } else {
                if (window.innerWidth > 768) {
                    width_slide = 278
                } else {
                    width_slide = 264
                }
            }



            if (+INC.clientConfig.slidevalue + +cc_ount < all_p_length) {
                amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).setAttribute("style", "pointer-events: auto;opacity:1");
                amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afLeftBtnImg")).setAttribute("style", "pointer-events: auto;opacity:1");
                INC.clientConfig.slidevalue++
                INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) - width_slide) + 'px';
                var menu = amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afProductListBlock"));
                // menu.style['transitionDuration'] = '0.5s'
                // menu.style['marginLeft'] = INC.clientConfig.offset
                menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                // if(INC.config.pageType == "pdp"){
                if (document.querySelector('.inc_af_product-list-dots-main_block .inc_dots.inc_active') != null) {
                    document.querySelector('.inc_af_product-list-dots-main_block .inc_dots.inc_active').classList.remove('inc_active')
                }
                if (document.querySelectorAll('.inc_af_product-list-dots-main_block .inc_dots')[+INC.clientConfig.slidevalue] != null) document.querySelectorAll('.inc_af_product-list-dots-main_block .inc_dots')[+INC.clientConfig.slidevalue].classList.add('inc_active')
                // }
            }

            if (+INC.clientConfig.slidevalue + +cc_ount == all_p_length) {
                amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afRightBtnBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");
                amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afRightBtnImg")).setAttribute("style", "pointer-events: none;opacity:0.5");
            }
        });

        amBlock.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).addEventListener("click", function () {
            sliderBtnCounter--;
            if (sliderBtnCounter == -1) sliderBtnCounter = 0;
            // productBlocks[sliderBtnCounter].style.display = "flex";
            var all_p_length = document.querySelectorAll('.inc_af_product-list_block .inc_product_module_block').length
            if (INC.clientConfig.slidevalue == -1) INC.clientConfig.slidevalue = 0;
            var width_slide = ""
            if (INC.config.pageType == "pdp" || INC.config.pageType == "productList") {
                // var cc_ount = 3;
                var width_slide = 260;
                if (window.innerWidth > 1270) {
                    // cc_ount = 4
                }
                if (window.innerWidth > 1368) {
                    // cc_ount = 4
                    // width_slide = 299;
                }
            } else {
                if (window.innerWidth > 768) {
                    width_slide = 278
                } else {
                    width_slide = 264
                }
            }
            if (INC.clientConfig.slidevalue > 0) {
                amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afRightBtnBlock")).setAttribute("style", "pointer-events: auto;opacity:1");
                amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afRightBtnImg")).setAttribute("style", "pointer-events: auto;opacity:1");
                INC.clientConfig.slidevalue--
                INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) + width_slide) + 'px';
                var menu = amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afProductListBlock"));
                // menu.style['transitionDuration'] = '0.5s'
                // menu.style['marginLeft'] = INC.clientConfig.offset
                menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                // if(INC.config.pageType == "pdp"){
                if (document.querySelector('.inc_af_product-list-dots-main_block .inc_dots.inc_active') != null) {
                    document.querySelector('.inc_af_product-list-dots-main_block .inc_dots.inc_active').classList.remove('inc_active')
                }
                if (document.querySelectorAll('.inc_af_product-list-dots-main_block .inc_dots')[+INC.clientConfig.slidevalue] != null) document.querySelectorAll('.inc_af_product-list-dots-main_block .inc_dots')[+INC.clientConfig.slidevalue].classList.add('inc_active')
                // }
            }
            if (INC.clientConfig.slidevalue == 0) {
                amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afLeftBtnBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");
                amBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "afLeftBtnImg")).setAttribute("style", "pointer-events: none;opacity:0.5");
            }
        });
        var allcrosssel = document.querySelectorAll('.o-line-items__description a')

        for (l = 0; l < allcrosssel.length; l++) {
            var namec = allcrosssel[l].getAttribute('title')
            var allincam = document.querySelectorAll('.inc_af_product-list_block .inc_product_module_block .inc_product_desc_title_text a')
            for (v = 0; v < allincam.length; v++) {
                if (allincam[v].getAttribute('title') == namec) {
                    var prodmodalblck = allincam[v].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                    if (prodmodalblck.parentNode != null) {
                        if (prodmodalblck != null) {
                            prodmodalblck.parentNode.removeChild(prodmodalblck);
                        }
                    }
                    INC.clientConfig.slidevalue = 0
                    INC.clientConfig.offset = 0
                    document.querySelector('.inc_af_product-list_block').setAttribute('style', 'margin-left: 0')
                    document.querySelector('.inc_af_right_btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
                    document.querySelector('.inc_af_right_btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
                    document.querySelector('.inc_af_left_btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
                    document.querySelector('.inc_af_left_btn_img').setAttribute('style', 'pointer-events: none;opacity:0.5')
                }
            }
        }
        setTimeout(function () {
            onloadpdp = true
            _isVisible._init({
                classSelector: ".inc_pdp_block img[data-src], .inc_pdp_block source[data-src], .inc_sidebar_modal_block img[data-src], .inc_sidebar_modal_block source[data-src], .inc_af_block img[data-src], .inc_af_block source[data-src]",
                index: 0
            });
        }, 400)

    }
    if (INC.config.pageType == "cartPage") {
        if (document.querySelector('.inc_af_block') != null) {
            document.querySelector('.inc_af_block').classList.add('af_cart_page')
        }
    } else if (INC.config.pageType == "pdp") {
        if (document.querySelector('.inc_af_block') != null) {
            document.querySelector('.inc_af_block').classList.add('inc_recommendations');
        }
    }
}
INC.methods.createPDPBlock = function (sidebar) {
    document.querySelector('body').classList.add('inc_bundles');
    var empty_sidebarflag = false
    if (INC.dataStore.dataStoreObj[INC.config.Product_id] != undefined) {
        if (INC.dataStore.dataStoreObj[INC.config.Product_id][INC.config.Product_id] != undefined) {
            if (INC.dataStore.dataStoreObj[INC.config.Product_id][INC.config.Product_id].bundleId == "12345679") {
                empty_sidebarflag = true
            }
        }
    }
    if (sidebar != "sidebar") {
        if (INC.dataStore.dataStoreObj.undefined != undefined || empty_sidebarflag == false) {
            var classNames = INC.uiConfig.pdp.className;
            var pdpBlock = this.getElementChilds("pdpModalBlock", "pdp");

            pdpBlock.setAttribute('style', 'clear: both;max-width:100%;')
            var getSelectorClassName = INC.methods.getSelectorClassName;
            Array.prototype.forEach.call(pdpBlock.querySelectorAll(getSelectorClassName(classNames, "productBlock")), function (block) {
                block.parentNode.removeChild(block);
            });

            function getViewElement(className) {
                return pdpBlock.querySelector(getSelectorClassName(classNames, className));
            }

            var modalTitle = getViewElement("pdpModalTitleText");
            modalTitle.innerText = "Frequently Bought together";


            var productListObj = INC.dataStore.dataStoreObj;
            // var pdpProductId = INC.dataStore.pdpProductId;
            var pdpProductId = INC.dataStore.methods().getFirstProductObjByMainId({
                mainId: INC.dataStore.pdpProductId
            }).id;

            var mainProductBlock = this.createProductModuleBlock(pdpProductId, "pdp", false, pdpBlock);
            var bundleProductsArray = INC.dataStore.bundleProductsArray;
            var elPdpMainProductBlock = getViewElement("pdpModalMainProductBlock");
            var tumbnail_array = [];
            elPdpMainProductBlock.innerHTML = "";
            var mainprodtitletext = document.createElement('div')
            mainprodtitletext.classList.add('mainprodtitletext')
            mainprodtitletext.innerText = "This item"
            elPdpMainProductBlock.appendChild(mainprodtitletext)
            elPdpMainProductBlock.appendChild(mainProductBlock);
            var mainProductHeader = getViewElement("productHeaderTitleText");
            mainProductHeader.innerText = "Main product ".toUpperCase();
            var elAttColorListBlock = getViewElement("productAttColorListBlock");

            var pdpBundleProductListMainBlock = getViewElement("pdpBundleProductListMainBlock");
            pdpBundleProductListMainBlock.innerHTML = "";

            var pdpBundleProductListItemsBlock = getViewElement("pdpBundleProductListItemsBlock");
            pdpBundleProductListItemsBlock.innerHTML = "";

            var productVisibleCount = (bundleProductsArray.length > 5) ? 5 : bundleProductsArray.length;

            if (INC.config.deviceType == "mobile") productVisibleCount = (bundleProductsArray.length > 2) ? 2 : bundleProductsArray.length;

            for (var i = 0; i < productVisibleCount; i++) {
                // var productBlock = this.createProductBlock(bundleProductsArray[i], "pdp");
                var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({
                    mainId: bundleProductsArray[i]
                });
                var productBlock = this.createProductModuleBlock(firstProductObjByMainId.id, "pdp", true, pdpBlock);
                //if (INC.config.deviceType == "mobile")  productBlock.setAttribute('style', 'display: none!important'); 
                pdpBundleProductListMainBlock.appendChild(productBlock);

                if (INC.config.deviceType == "mobile") {

                }
                var productListItemBlock = this.createProductListItemBlock(firstProductObjByMainId, "pdp");
                pdpBundleProductListItemsBlock.appendChild(productListItemBlock);

                tumbnail_array.push(firstProductObjByMainId);
            }


            var header = getViewElement("pdpBundleProductHeaderText");
            //header.innerText = "Frequently bought with"
            if (header != null) {
                header.innerText = "Frequently Bought with"
                header.style.textTransform = "none"
            }
            // if (INC.config.deviceType == "mobile") 
            pdpBlock.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock")).classList.add("inc_active");
            pdpBundleProductListMainBlock.querySelector(getSelectorClassName(classNames, "productModuleBlock")).style.display = "block";

            var pdpBundleCartBlock = this.createPDPBundleCartBlock();
            var rpdpBundleCartBlock = pdpBlock.querySelector(getSelectorClassName(classNames, "pdpModalBundleCartBlock"));
            rpdpBundleCartBlock.parentNode.removeChild(rpdpBundleCartBlock);
            pdpBlock.querySelector(getSelectorClassName(classNames, "pdpModalBundleBlock")).appendChild(pdpBundleCartBlock);


            INC.methods.clear();

            if (pdpBlock.querySelector('.inc_pdp_product-main_block .inc_product_module_block[data-id="undefined"]') != null) {
                pdpBlock.setAttribute('style', 'display:none')
            }

            if (document.querySelector('.pdp-stock__message') != null) {
                pdpBlock.setAttribute('style', 'display:none')
            }

            if (window.innerWidth > 767) {
                if (document.querySelector('.tabs') != null) {
                    var pdpBlockeinstienSibling = document.querySelector('.tabs').parentNode;
                } else if (document.querySelector('.checkout-combo__wrapper') != null) {
                    var pdpBlockeinstienSibling = document.querySelector('.checkout-combo__wrapper');
                } else if (document.querySelector('.tabs') != null) {
                    var pdpBlockeinstienSibling = document.querySelector('.tabs').parentNode;
                } else if (document.querySelector('#pdp-accordion__description') != null) {
                    var pdpBlockeinstienSibling = document.querySelector('#pdp-accordion__description').parentNode.parentNode;
                    if (pdpBlockeinstienSibling != null || pdpBlockeinstienSibling != undefined) {
                        pdpBlockeinstienSibling.parentNode.insertBefore(pdpBlock, pdpBlockeinstienSibling);
                    }
                } else if (document.querySelector('.tick-list') != null) {
                    var pdpBlockeinstienSibling = document.querySelector('.tick-list');
                }
                if (pdpBlockeinstienSibling != null || pdpBlockeinstienSibling != undefined) {
                    pdpBlockeinstienSibling.parentNode.insertBefore(pdpBlock, pdpBlockeinstienSibling);
                }
            } else {
                if (document.querySelector('.tabs') != null) {
                    var pdpBlockeinstienSibling = document.querySelector('.tabs').parentNode;
                    if (pdpBlockeinstienSibling != null || pdpBlockeinstienSibling != undefined) {
                        pdpBlockeinstienSibling.parentNode.insertBefore(pdpBlock, pdpBlockeinstienSibling);
                    }
                } else if (document.querySelector('.pdp-product-details') != null) {
                    var pdpBlockeinstienSibling = document.querySelector('.pdp-product-details');
                    pdpBlockeinstienSibling.appendChild(pdpBlock);
                } else if (document.querySelector('#pdp-accordion__description') != null) {
                    var pdpBlockeinstienSibling = document.querySelector('#pdp-accordion__description').parentNode.parentNode;
                    if (pdpBlockeinstienSibling != null || pdpBlockeinstienSibling != undefined) {
                        pdpBlockeinstienSibling.parentNode.insertBefore(pdpBlock, pdpBlockeinstienSibling);
                    }
                }
            }





            var elProductAddBlock = document.querySelectorAll(getSelectorClassName(classNames, "productAddBlock"));



            var productBlocks = getViewElement("pdpBundleProductListBlock").querySelectorAll(getSelectorClassName(classNames, "productModuleBlock"));
            var show_more_less_block = getViewElement("pdpBundleProductListItemsBlockShowMoreLess")
            var show_more_less_text = getViewElement("pdpBundleProductListItemsBlockShowMoreLessText");
            show_more_less_text.innerHTML = "Show more products";
            show_more_less_text.classList.add('down_wrrow');

            if (document.querySelector('.inc_pdp_product-main_block .inc_product_desc_title_text_header') != null) {
                document.querySelector('.inc_pdp_product-main_block .inc_product_desc_title_text_header').innerHTML = "Selected Product"
                document.querySelector('.inc_pdp_product-main_block .inc_product_desc_title_text_header').style.textTransform = "none"
            }
            // getViewElement("pdpBundleProductListMainBlock").classList.add('inc_active')pdpBundleProductListMainBlock
            getViewElement("pdpBundleProductListItemsBlockShowMoreLess").addEventListener("click", function (ev) {
                var show_more_less_text = getViewElement("pdpBundleProductListItemsBlockShowMoreLessText");
                var clickshowmore = ev.target.querySelector('.inc_pdp_bundle_product_list_items_show_more_less_text')
                if (clickshowmore == null) {
                    clickshowmore = ev.target
                }
                if (clickshowmore.classList.contains('down_wrrow') == true) {
                    show_more_less_text.innerHTML = "Show less products";
                    show_more_less_text.classList.remove('down_wrrow');
                    show_more_less_text.classList.add('up_wrrow');
                    document.querySelector('.inc_pdp_bundle_product_list_items_block').classList.add('inc_active');
                } else {
                    show_more_less_text.innerHTML = "Show more products";
                    show_more_less_text.classList.remove('up_wrrow');
                    show_more_less_text.classList.add('down_wrrow');
                    document.querySelector('.inc_pdp_bundle_product_list_items_block').classList.remove('inc_active');
                }
            });
            getViewElement("pdpBundleProductLeftBtnBlock").setAttribute("style", "pointer-events: none;opacity:0.5");
            // if (isIE()){
            getViewElement("pdpBundleProductLeftBtnImg").setAttribute("style", "opacity:0.5");
            // }
            getViewElement("pdpBundleProductLeftBtnImg").setAttribute('title', 'Scroll left')
            getViewElement("pdpBundleProductRightBtnImg").setAttribute('title', 'Scroll right')
            var sliderBtnCounter = 0;
            if (INC.debug) console.log("pdp product blocks count:" + productBlocks.length);
            var lengthCount = productBlocks.length + 1;
            if (window.innerWidth < 1185) {
                var prd_length = 1
            } else {
                var prd_length = 2
            }
            if (productBlocks.length > prd_length) {
                getViewElement("pdpBundleProductRightBtnBlock").addEventListener("click", function () {
                    var prod_c = 1;
                    var width_prod = 262;

                    if (window.innerWidth >= 820 && window.innerWidth < 1025) {
                        width_prod = 262;
                    }

                    if (window.innerWidth > 1189) {
                        prod_c = 2
                        width_prod = 282
                    }
                    if (window.innerWidth > 1250) {
                        prod_c = 2
                        width_prod = 312;
                    }

                    if (INC.clientConfig.slidevalue + prod_c < productBlocks.length) {
                        getViewElement("pdpBundleProductLeftBtnBlock").setAttribute("style", "pointer-events: auto;opacity:1");
                        // if (isIE()){
                        getViewElement("pdpBundleProductLeftBtnImg").setAttribute("style", "opacity:1");
                        // }
                        INC.clientConfig.slidevalue++
                        INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) - width_prod) + 'px';
                        var menu = getViewElement("pdpBundleProductListMainBlock");
                        // menu.style['transitionDuration'] = '0.5s'
                        // menu.style['marginLeft'] = INC.clientConfig.offset;
                        menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                    }
                    if (INC.clientConfig.slidevalue + prod_c == productBlocks.length) {
                        getViewElement("pdpBundleProductRightBtnBlock").setAttribute("style", "pointer-events: none;opacity:0.5");
                        // if (isIE()){
                        getViewElement("pdpBundleProductRightBtnImg").setAttribute("style", "opacity:0.5");
                        // }
                    }
                    sliderBtnCounter++;
                    if (sliderBtnCounter > lengthCount - 3) {
                        sliderBtnCounter--;
                    }
                    if (INC.debug) console.log(sliderBtnCounter);
                    if (INC.debug) console.log("pdp product blocks count:" + productBlocks.length);
                    window.dataLayer = window.dataLayer || [];
                    var mainprodname = document.querySelector('.inc_pdp_product-main_block .inc_product_desc_title_text').innerText
                    window.dataLayer.push({
                        'event': 'GAEvent',
                        'eventCategory': 'Bundle',
                        'eventAction': 'carousel_right', //Track carousel_left or carousel_right
                        'eventLabel': mainprodname,
                    });
                });


                getViewElement("pdpBundleProductLeftBtnBlock").addEventListener("click", function () {
                    // INC.clientConfig.slidevalue--
                    var prod_c = 1;
                    var width_prod = 262;

                    if (window.innerWidth >= 820 && window.innerWidth < 1025) {
                        width_prod = 262;
                    }

                    if (window.innerWidth > 1189) {
                        prod_c = 2
                        width_prod = 282
                    }


                    if (window.innerWidth > 1250) {
                        prod_c = 2
                        width_prod = 312;
                    }

                    if (INC.clientConfig.slidevalue == -1) INC.clientConfig.slidevalue = 0;
                    if (INC.clientConfig.slidevalue > 0) {
                        getViewElement("pdpBundleProductRightBtnBlock").setAttribute("style", "pointer-events: auto;opacity:1");
                        // if (isIE()){
                        getViewElement("pdpBundleProductRightBtnImg").setAttribute("style", "opacity:1");
                        // }
                        INC.clientConfig.slidevalue--
                        INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) + width_prod) + 'px';
                        var menu = getViewElement("pdpBundleProductListMainBlock");
                        // menu.style['transitionDuration'] = '0.5s'
                        // menu.style['marginLeft'] = INC.clientConfig.offset
                        menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                    }
                    if (INC.clientConfig.slidevalue == 0) {
                        getViewElement("pdpBundleProductLeftBtnBlock").setAttribute("style", "pointer-events: none;opacity:0.5");
                        // if (isIE()){
                        getViewElement("pdpBundleProductLeftBtnImg").setAttribute("style", "opacity:0.5");
                        // }
                    }
                    sliderBtnCounter--;
                    if (sliderBtnCounter == -1) sliderBtnCounter = 0;
                    if (INC.debug) console.log(sliderBtnCounter);
                    window.dataLayer = window.dataLayer || [];
                    var mainprodname = document.querySelector('.inc_pdp_product-main_block .inc_product_desc_title_text').innerText
                    window.dataLayer.push({
                        'event': 'GAEvent',
                        'eventCategory': 'Bundle',
                        'eventAction': 'carousel_left', //Track carousel_left or carousel_right
                        'eventLabel': mainprodname,
                    });
                });
            }

            if (!(productBlocks.length > prd_length)) {
                if (INC.debug) console.log(productBlocks.length);
                getViewElement("pdpBundleProductRightBtnBlock").style.visibility = "hidden";
                getViewElement("pdpBundleProductLeftBtnBlock").style.visibility = "hidden";
            }
            setTimeout(function () {

                for (var i = 0; i < 8; i++) {
                    if (typeof (elProductAddBlock[i]) != "undefined" && i % 2 != 0) {

                        var productBlockNode = elProductAddBlock[i].parentNode.parentNode.parentNode.parentNode.parentNode;
                        if (window.innerWidth > 1139) {
                            if (i == 1) {

                                var module_block = elProductAddBlock[i].parentNode.parentNode.parentNode.parentNode.parentNode;
                                var showcase_block = elProductAddBlock[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode

                                if (module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_size_list_item_img') != null) {
                                    module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_size_list_item_img').click()
                                }

                                if (module_block.querySelectorAll('.inc_product_modal_block .inc_product_desc_att_color_list_item_img')[0] != null) {
                                    module_block.querySelectorAll('.inc_product_modal_block .inc_product_desc_att_color_list_item_img')[0].click()
                                }

                                elProductAddBlock[i].click();
                            }
                        } else if (i == 1) {
                            var module_block = elProductAddBlock[i].parentNode.parentNode.parentNode.parentNode.parentNode;

                            if (module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_size_list_item_img') != null) {
                                module_block.querySelector('.inc_product_modal_block .inc_product_desc_att_size_list_item_img').click()
                            }

                            if (module_block.querySelectorAll('.inc_product_modal_block .inc_product_desc_att_color_list_item_img')[1] != null) {
                                module_block.querySelectorAll('.inc_product_modal_block .inc_product_desc_att_color_list_item_img')[1].click()
                            } else {
                                if (module_block.querySelectorAll('.inc_product_modal_block .inc_product_desc_att_color_list_item_img')[0] != null) {
                                    module_block.querySelectorAll('.inc_product_modal_block .inc_product_desc_att_color_list_item_img')[0].click()
                                }
                            }
                            elProductAddBlock[i].click();
                        }

                    }
                }

            }, 100)
            setTimeout(function () {

                var client_var = ""
                if (document.querySelector('.swatch-size .swatch-element.selected input') != null) {
                    var client_var = document.querySelector('.swatch-size .swatch-element.selected input').value.toLocaleLowerCase()
                    client_var = client_var
                    if (document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_size_list_item_img_block[datasize="' + client_var + '"] div') != null) {
                        document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_size_list_item_img_block[datasize="' + client_var + '"] div').click()
                    }
                }
                //
                var client_var1 = ""
                if (document.querySelector('.swatch-element.color.selected input') != null) {
                    var client_var1 = document.querySelector('.swatch-element.color.selected input').value.toLocaleLowerCase()
                    client_var1 = client_var1
                    if (document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + client_var1 + '"] div') != undefined) {
                        document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + client_var1 + '"] div').click()
                    }
                }

                var client_var2 = ""
                if (document.querySelector('.variant-input-wrap[name="Type"] input[checked]') != null) {
                    var client_var2 = document.querySelector('.variant-input-wrap[name="Type"] input[checked]').value.toLocaleLowerCase()
                    if (document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_size_list_item_img_block[datasize="' + client_var2 + '"] div') != null) {
                        document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_size_list_item_img_block[datasize="' + client_var2 + '"] div').click()
                    }
                }
                setTimeout(function () {
                    onloadpdp_delete = true;
                    onloadpdp = true
                    _isVisible._init({
                        classSelector: ".inc_pdp_block img[data-src], .inc_pdp_block source[data-src], .inc_sidebar_modal_block img[data-src], .inc_sidebar_modal_block source[data-src], .inc_af_block img[data-src], .inc_af_block source[data-src]",
                        index: 0
                    });
                }, 1000)
            }, 300)
        }
        var clientaddtocartbtn = document.querySelector('#productPageAdd2Cart')
    }

    if (sidebar == "sidebar") {
        this.createSidebarBlock();
        //INC.methods.createAMBlock("PDP");
    }



    // this.trackingEvents("productPageVisit", { "product_id": INC.dataStore.pdpProductId });
    // this.trackingEvents("catalogProductView", { "product_id": INC.dataStore.pdpProductId });
}

INC.methods.createPDPBundleCartBlock = function () {
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
    var elBundleCartAddBlock = getViewElement("pdpBundleCartSummaryAddBlock");
    var elBundleCartsummaryBlock = getViewElement("pdpBundleCartSummaryBlock");

    var elBundleCartTitleTextblock = getViewElement("pdpBundleCartTitleTextBlock");

    elBundleCartTitleText.innerText = "Price summary";
    if (window.innerWidth < 820) {
        elBundleCartTitleTextblock.addEventListener('click', function () {
            var cartsummaryel = this.parentNode.parentNode.parentNode;
            this.classList.toggle('inc_active')
            cartsummaryel.querySelector('.inc_pdp_bundle_cart_added_block').classList.toggle('inc_active')
        })
    }

    elBundleCartAddedBlock.innerHTML = "";


    var inc_collect_point_checkout_block = generate_html_tag('div', 'inc_collect_point_checkout_block')
    var inc_collect_point_text = generate_html_tag('div', 'inc_collect_point_text')
    inc_collect_point_checkout_block.appendChild(inc_collect_point_text)

    elBundleCartsummaryBlock.appendChild(inc_collect_point_checkout_block)



    elBundleCartSummaryViewBtnText.innerText = "Added items";

    elBundleCartAddBtnBlock.addEventListener("click", function (e) {
        var addCheckCategory = INC.config.pdpaddedProductList;
        var productListArrayprod = INC.dataStore.bundleProductsArray;
        var categoryList = INC.dataStore.methods().getUniqueCatergories();

        for (ct = 0; ct < categoryList.length; ct++) {
            var count = 0;
            for (var ij = 0; ij < productListArrayprod.length; ij++) {
                var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({
                    mainId: productListArrayprod[ij]
                });
                if (firstProductObjByMainId["categoryName"] == categoryList[ct]) {
                    if (addCheckCategory.indexOf(productListArrayprod[ij]) == -1) {
                        count++
                    }
                }
            }
            if (count == 0) {
                if (document.querySelector('.inc_recommended_tabs_list_item_block[title="' + categoryList[ct] + '"]') != null) {
                    var categrem = document.querySelector('.inc_recommended_tabs_list_item_block[title="' + categoryList[ct] + '"]')
                    if (categrem != null) {
                        categrem.parentNode.removeChild(categrem)
                    }
                }
            }
        }
        var varient_selected_flag = true
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;

        if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
            INC.config.categorytabclick = true
            document.querySelector('.inc_recommended_tabs_list_item_block').click()
            INC.config.categorytabclick = false
            if (document.querySelector('.inc_recommended_products_list_block .inc_product_module_block') == null) {
                var remcateg = document.querySelector('.inc_recommended_tabs_list_item_block.inc_active')
                if (remcateg != null) {
                    remcateg.parentNode.removeChild(remcateg)
                }
            }
        }
        this.classList.add('inc_loading');
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
        if (window.innerWidth < 1185) {
            var prd_length = 2
        } else {
            var prd_length = 3
        }
        document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
        if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > prd_length) {
            document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
            // if (isIE()){
            document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
            // }
            document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
            // if (isIE()){
            document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
            // }
        }

        if (INC.config.disablebtn == true) {
            var btn_cart = e.target
            INC.config.disablebtn = false
            btn_cart.classList.add('inc_loading')
            INC.methods.addBundleToCart(btn_cart);
            var toc = Object.keys(INC.dataStore.bundleCartProducts).length
        }
    });

    return pdpBundleCartBlock;
}
INC.methods.createSidebarBlock = function () {
    var dataStore = INC.dataStore;
    var classNames = INC.uiConfig.sidebar.className;
    var sbBlock = this.getElementChilds("sidebarModalBlock", "sidebar");
    var sidebar_dialoge_block = document.createElement('div')
    sidebar_dialoge_block.classList.add('sidebar_outer')
    // sidebar_dialoge_block.style.display="none"
    sidebar_dialoge_block.appendChild(sbBlock)
    var getSelectorClassName = INC.methods.getSelectorClassName;

    function getViewElement(className) {
        return sbBlock.querySelector(getSelectorClassName(classNames, className));
    }
    // if(INC.debug) console.log(sbBlock);
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
    var elsidebarheadblock = getViewElement("sidebarHeaderBlock")



    elheaditemblock.addEventListener('click', function () {
        var cnt = document.querySelector('.inc_header_item_count_title_text').getAttribute('added_counts')

        if (cnt >= 1) {
            if (document.querySelector('.inc_sidebar_cart_added_block').classList.contains('inc_active') == true) {
                document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_active')
                var alladdedprodlength = document.querySelectorAll('.inc_cart_added_product_block').length;
                var morecount = 2
                if (window.innerWidth < 819) {
                    morecount = 1
                }

                if (alladdedprodlength > morecount) {
                    var tcount = alladdedprodlength - morecount + " more item(s)"
                    document.querySelector('.inc_header_item_count_title_text').innerText = "+" + tcount
                    document.querySelector('.inc_header_item_count_title_text').setAttribute('added_counts', (alladdedprodlength - morecount))
                } else {
                    document.querySelector('.inc_header_item_count_title_text').innerText = ""
                }
            } else {
                document.querySelector('.inc_header_item_count_title_text').innerText = ""
                document.querySelector('.inc_sidebar_cart_added_block').classList.add('inc_active')
            }
        }
    })


    var close_sisebar_icon = generate_html_tag('span', 'close_sisebar_icon')
    elheadtitleblock.appendChild(close_sisebar_icon)
    elRecommendedProductsListBlock.setAttribute('role', "contentinfo")
    elRecommendedProductsListBlock.setAttribute('tabindex', 0)



    elHeaderContinueText.innerText = "Back";
    elHeaderTitleText.innerText = "Just Added to your Basket";
    elHeaderTitleText.style.textTransform = "none"
    elHeaderItemCountTitleText.innerText = "Subtotal" + " " + "(" + Object.keys(dataStore.bundleCartProducts).length + " items)";
    elRecommendedTitleText.innerText = "Customers Also Bought";
    elRecommendedTitleText.style.textTransform = "none"
    elCheckoutContinueBtnText.innerText = "Continue Shopping";
    // elCheckoutContinueBtnText.style.textTransform="none"

    var elCheckoutLink = document.createElement('a');
    elCheckoutLink.setAttribute('href', INC.clientConfig.checkoutLink);
    var elCheckoutTextDiv = document.createElement('div');
    elCheckoutTextDiv.innerText = "View Basket & Checkout";
    // elCheckoutTextDiv.style.textTransform="none"
    elCheckoutTextDiv.setAttribute('draggable', 'false');
    elCheckoutLink.appendChild(elCheckoutTextDiv);
    elCheckoutBasketBtnText.appendChild(elCheckoutLink);



    var productCategoriesArray = dataStore.methods().getUniqueCatergories();
    elRecommendedTabsListBlock.innerHTML = "";
    elRecommendedProductsListBlock.innerHTML = "";
    var category_count = 0
    elRecommendedTabsListBlock.classList.add('inc_categ_' + Object.keys(productCategoriesArray).length)
    productCategoriesArray.forEach(function (productCategory) {
        if (category_count < 5 && productCategory != undefined) {
            category_count++
            var sidebarTabsListItemBlock = INC.methods.getElementChilds("sidebarRecommendedTabsListItemBlock", "sidebar");
            var sidebarTabsListItemText = sidebarTabsListItemBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedTabsListItemText"));
            sidebarTabsListItemText.parentNode.parentNode.setAttribute('title', productCategory)
            // if(INC.config.pageType != "productList"){
            sidebarTabsListItemText.innerText = productCategory.toLocaleLowerCase();
            // }
            sidebarTabsListItemText.setAttribute('style', 'text-transform:capitalize;')
            // sidebarTabsListItemBlock.setAttribute('tabindex',category_count)
            sidebarTabsListItemBlock.addEventListener("click", function () {
                elRecommendedProductsBlock.innerHTML = "";
                elRecommendedProductsBlock.innerHTML = INC.methods.getElementChilds("sidebarRecommendedProductsBlock", "sidebar").innerHTML;
                var elRecommendedProductsListBlock = elRecommendedProductsBlock.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsListBlock"));
                elRecommendedProductsListBlock.innerHTML = "";
                Array.prototype.forEach.call(elRecommendedTabsListBlock.querySelectorAll(getSelectorClassName(classNames, "sidebarRecommendedTabsListItemBlock")), function (elTabsItemBlock) {
                    elTabsItemBlock.classList.remove("inc_active");
                });
                sidebarTabsListItemBlock.classList.add("inc_active");
                INC.methods.updateSidebarProductsList(elRecommendedProductsListBlock, productCategory);
                window.dataLayer = window.dataLayer || [];
                //document.querySelector('.sidebar_outer').classList.add('sidebar_outer_active')
                if (document.querySelector('.sidebar_outer.sidebar_outer_active') != null && INC.config.categorytabclick == false) {
                    window.dataLayer.push({
                        'event': 'GAEvent',
                        'eventCategory': 'Bundle',
                        'eventAction': 'Category',
                        'eventLabel': productCategory,
                    });
                }
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


    getViewElement("sidebarHeaderContinueBlock").addEventListener("click", function () {
        document.querySelector('html').classList.remove('inc_overlay');
        INC.methods.hideSidebar();
        INC.config.pdpaddedProductList = []
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
    });

    getViewElement("sidebarCheckoutContinueBlock").addEventListener("click", function () {
        document.querySelector('html').classList.remove('inc_overlay');
        INC.clientConfig.offset = 0;
        INC.config.pdpaddedProductList = []
        INC.clientConfig.slidevalue = 0;
        INC.methods.hideSidebar();
    });

    getViewElement("sidebarCheckoutBasketBlock").addEventListener("click", function () {
        this.querySelector('.inc_checkout_basket_btn_block').classList.add('inc_loading')
        window.location.href = INC.clientConfig.checkoutLink;
    });

    var addedProductBlocks = "";
    var addedSliderBtnCounter = 0;




    var body = document.querySelector('body');
    body.appendChild(sidebar_dialoge_block);
    var elSideBarOverlayBlock = document.createElement('div');
    elSideBarOverlayBlock.setAttribute("class", "inc_sidebar_overlay_block");
    elSideBarOverlayBlock.addEventListener("click", function () {

        document.querySelector('html').classList.remove('inc_overlay');
        INC.methods.hideSidebar();
        INC.config.pdpaddedProductList = []
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
    });
    close_sisebar_icon.addEventListener("click", function () {
        document.querySelector('html').classList.remove('inc_overlay');
        INC.methods.hideSidebar();
        INC.config.pdpaddedProductList = []
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
    });
    elSideBarOverlayBlock.style.display = "none";
    body.appendChild(elSideBarOverlayBlock);

    if (INC.dataStore.dataStoreObj.undefined != undefined) {
        if (document.querySelector('.inc_recommended_products_block') != null) {
            document.querySelector('.inc_recommended_products_block').style.display = "none"
        }
        if (document.querySelector('.s7staticimage img') != null && document.querySelector('.inc_cart_added_product_img') != null) {
            var p_img = document.querySelector('.s7staticimage img').src
            document.querySelector('.inc_cart_added_product_img').src = p_img
        }
    }
    setTimeout(function () {
        if (document.querySelector('.inc_recommended_products_list_block') != null) {
            document.querySelector('.inc_recommended_products_list_block').setAttribute('role', "contentinfo")
        }
    }, 100)

}
INC.methods.updateSidebarBlock = function () {
    var subtotalactiveprice = 0
    var subtotalregukarprice = 0
    var dataStore = INC.dataStore;
    var classNames = INC.uiConfig.sidebar.className;
    var getSelectorClassName = this.getSelectorClassName;
    var sbBlock = document.querySelector(getSelectorClassName(classNames, "sidebarModalBlock"));
    if (sbBlock != null) {
        function getViewElement(className) {
            return sbBlock.querySelector(getSelectorClassName(classNames, className));
        }
        var total_count = 0

        var sidebarHeaderItemCountTitleText = getViewElement("sidebarHeaderItemCountTitleText");
        var elHeaderItemCountFigureText = getViewElement("sidebarHeaderItemCountFigureText");
        var elHeadersubtotalactivetext = getViewElement("sidebarCartAddedProductDescSubTotalActiveText");
        var elHeadersubtotalregulartext = getViewElement("sidebarCartAddedProductDescSubTotalRegularText");
        var sbCartBlock = getViewElement("sidebarCartAddedListBlock");
        var sidebarHeaderseelesstext = getViewElement("sidebarHeaderItemCountFigureText");

        sidebarHeaderseelesstext.innerText = ""
        sbCartBlock.innerHTML = "";
        var bundleCartProductsArray = Object.keys(dataStore.bundleCartProducts);
        sidebarHeaderItemCountTitleText.innerHTML = "Subtotal (" + Object.keys(dataStore.bundleCartProducts).length + " item)";
        var headerItemCountFigureText = 0;
        var subtotalactiveprice = 0
        var subtotalregukarprice = 0
        var error_message = ""
        var oosname = []
        var oosids = []
        var remerrorjust = document.querySelectorAll('.inc_justerror')
        for (r = 0; r < remerrorjust.length; r++) {
            if (remerrorjust[r] != null) {
                remerrorjust[r].parentNode.removeChild(remerrorjust[r])
            }
        }

        bundleCartProductsArray.forEach(function (productSKU) {
            if (dataStore.bundleCartProducts[productSKU] < 1) dataStore.bundleCartProducts[productSKU] = 1

            var findObj = new INC.classes.FindObj({
                sku: productSKU
            });
            var productObj = INC.dataStore.methods().getProductBySKU(findObj);
            if (INC.clientConfig.OOS.indexOf(productObj.mainId) >= 0) {
                if (oosname.indexOf(productObj.name) == -1 && oosids.indexOf(productObj.mainId) == -1) {
                    error_message = ""
                    oosids.push(productObj.mainId)
                    oosname.push(productObj.name)
                    if (error_message == "") {
                        error_message = "<span>An unknown error has occurred. Please refresh or try again later</span>"
                    } else {
                        error_message = "<span>An unknown error has occurred. Please refresh or try again later</span>"
                    }
                    // var remerrorjust=document.querySelector('.inc_justerror')
                    // if(remerrorjust != null){
                    //     remerrorjust.parentNode.removeChild(remerrorjust)
                    // }
                    // if(document.querySelector('.inc_justerror') == null){
                    var headertitle = sbBlock.querySelector('.inc_sidebar_modal_cart_and_title_block')
                    var errormes = generate_html_tag('div', 'inc_justerror')
                    var errorimg = generate_html_tag('img', 'errorimg')
                    errorimg.src = productObj.imageURL
                    errormes.appendChild(errorimg)
                    var errormestext = generate_html_tag('span', 'inc_justerror_text')
                    // if(errormestext.innerHTML == null ){
                    errormestext.innerHTML = error_message
                    // }
                    errormes.appendChild(errormestext)
                    headertitle.parentNode.insertBefore(errormes, headertitle)
                    setTimeout(function () {
                        var remerrorjust = document.querySelectorAll('.inc_justerror')
                        for (r = 0; r < remerrorjust.length; r++) {
                            if (remerrorjust[r] != null) {
                                remerrorjust[r].parentNode.removeChild(remerrorjust[r])
                            }
                        }
                    }, 5000)
                    // }
                    // for (e = 0; e < INC.clientConfig.OOS.length; e++) {
                    //     if (INC.clientConfig.OOS_MESG[e] != undefined) {

                    //     }
                    // }
                }
            } else {
                headerItemCountFigureText = headerItemCountFigureText + parseInt(dataStore.bundleCartProducts[productSKU]);
                var productBlock = INC.methods.getElementChilds("sidebarCartAddedProductBlock", "sidebar");
                productBlock.setAttribute('data-id', productObj.id);
                productBlock.setAttribute('data-sku', productObj.sku);
                productBlock.setAttribute('data-main_id', productObj.mainId);
                productBlock.setAttribute('data-bundle_id', productObj.bundleId);
                productBlock.setAttribute('data-childsku', productObj.childsku);
                productBlock.setAttribute('data-mainsku', productObj.mainsku);
                var quantityLabel = INC.methods.generateHTMLTags('div')
                quantityLabel.classList.add('sidebar_product_quantity_label')
                quantityLabel.innerText = dataStore.bundleCartProducts[productSKU]
                productBlock.appendChild(quantityLabel)
                var color = "";
                var size = "";
                var just_check_prod_block = document.querySelector('.inc_product_module_block[data-main_id="' + productObj.mainId + '"]')
                if (just_check_prod_block != null) {
                    if (just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active div') != null) {
                        size = just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active div').innerText
                    }
                    if (just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block') != null) {
                        color = just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-color')
                    }
                }
                // console.log("size " + size)
                // console.log("color " + color)
                //end
                productBlock.style.userSelect = "none";

                var elImg = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductImg"));
                var elTitleText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescTitleText"));
                var elPriceActiveText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceActiveText"));
                var elPriceRegularText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceRegularText"));
                var elAttColorText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescAttColorText"));
                var elAttsizeText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescAttSizeText"));
                var eladdedqtyblock = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductqtyBlock"));
                var elImgTag = INC.methods.generateHTMLTags('img', {
                    src: productObj.imageURL
                });
                if (onloadpdp == true) {
                    elImgTag.src = productObj.imageURL
                }
                elImgTag.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
                elImg.appendChild(elImgTag);
                elImgTag.setAttribute('alt', productObj.name)
                elTitleText.setAttribute('title', productObj.name.toString())
                elTitleText.innerHTML = dataStore.bundleCartProducts[productSKU] + ' X ' + productObj.name;
                elTitleText.setAttribute('style', 'text-transform: unset;')
                if (color != "" && color != undefined && color != null) {
                    elAttColorText.innerText = "Color" + color;
                } else if (size != "" && size != undefined && size != null) {
                    elAttsizeText.innerText = "Size" + size;
                }

                var activePrice = parseFloat(productObj.activePrice).toFixed(2);
                var regularPrice = parseFloat(productObj.regularPrice).toFixed(2);
                subtotalactiveprice = (+subtotalactiveprice + (+productObj.activePrice * dataStore.bundleCartProducts[productSKU]));
                subtotalregukarprice = (+subtotalregukarprice + (+productObj.regularPrice * dataStore.bundleCartProducts[productSKU]));
                elPriceActiveText.innerText = formatter.format(activePrice)


                sbCartBlock.appendChild(productBlock);
            }
        });
        if (+subtotalactiveprice != null && (+subtotalactiveprice < +subtotalregukarprice)) {
            elHeadersubtotalactivetext.setAttribute('subtotalActiveprice', subtotalactiveprice)
            elHeadersubtotalregulartext.setAttribute('subtotalRegularprice', subtotalregukarprice)
            elHeadersubtotalactivetext.innerHTML = INC.clientConfig.currencySymbol + formatter.format(subtotalactiveprice)
            elHeadersubtotalregulartext.innerHTML = "<span>" + "was" + "</span>" + INC.clientConfig.currencySymbol + formatter.format(subtotalregukarprice)
            if (document.querySelector('.inc_cart_added_product_desc_subtotal_price_block') != null) document.querySelector('.inc_cart_added_product_desc_subtotal_price_block').classList.add("is_special_price")
            elHeadersubtotalactivetext.style.color = "#ee1c31"
        } else {
            elHeadersubtotalactivetext.setAttribute('subtotalActiveprice', subtotalactiveprice)
            elHeadersubtotalactivetext.style.color = "#000"
            elHeadersubtotalregulartext.setAttribute('subtotalRegularprice', subtotalregukarprice)
            elHeadersubtotalactivetext.innerHTML = INC.clientConfig.currencySymbol + formatter.format(subtotalregukarprice)
            elHeadersubtotalregulartext.innerHTML = ""
        }
        if (headerItemCountFigureText == 1) {
            sidebarHeaderItemCountTitleText.innerHTML = "Subtotal " + "(" + headerItemCountFigureText + " item)";
        } else {
            sidebarHeaderItemCountTitleText.innerHTML = "Subtotal " + "(" + headerItemCountFigureText + " items)";
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

        setTimeout(function () {
            for (it = 0; it < item_inc.length; it++) {
                if (item_inc[it].exceededQuantityCatEntryIds != undefined) {
                    var adde_items = document.querySelector('.inc_cart_added_product_block[data-childsku="' + item_inc[it].exceededQuantityCatEntryIds + '"]')
                    if (adde_items != null) {
                        adde_items.setAttribute('orderId', item_inc[it].orderId)
                        adde_items.setAttribute('exceededQuantityCatEntryIds', item_inc[it].exceededQuantityCatEntryIds)
                        adde_items.classList.add('max_qty_reach')
                        adde_items.querySelector('.inc_product_desc_qty_up_block').setAttribute('style', 'pointer-events: none;opacity: 0.7;')
                    }
                } else {
                    var adde_items = document.querySelector('.inc_cart_added_product_block[data-childsku="' + item_inc[it].catEntryId + '"]')
                    if (adde_items != null) {
                        adde_items.setAttribute('itemCatEntryId', item_inc[it].itemCatEntryId)
                        adde_items.setAttribute('orderId', item_inc[it].orderId)
                        adde_items.setAttribute('orderItemId', item_inc[it].orderItemId)
                    }
                }
            }
        }, 3000)
    }
}

INC.methods.updateSidebarColBlock = function (COL_dataStore) {
    var subtotalactiveprice = 0
    var subtotalregukarprice = 0
    var dataStore = COL_dataStore;
    var classNames = INC.uiConfig.sidebar.className;
    var getSelectorClassName = this.getSelectorClassName;
    var sbBlock = document.querySelector(getSelectorClassName(classNames, "sidebarModalBlock"));
    if (sbBlock != null) {
        function getViewElement(className) {
            return sbBlock.querySelector(getSelectorClassName(classNames, className));
        }

        var sidebarHeaderItemCountTitleText = getViewElement("sidebarHeaderItemCountTitleText");
        var elHeaderItemCountFigureText = getViewElement("sidebarHeaderItemCountFigureText");
        var elHeadersubtotalactivetext = getViewElement("sidebarCartAddedProductDescSubTotalActiveText");
        var elHeadersubtotalregulartext = getViewElement("sidebarCartAddedProductDescSubTotalRegularText");
        var elHeadersubtotalsavetext = getViewElement("sidebarCartAddedProductDescSubTotalSaveText");
        var elHeaderTitleText = sbBlock.querySelector('.inc_header_title_text')
        var eltitleb = getViewElement("sidebarHeaderItemCountTitleBlock");
        var elActivePriceBlock = getViewElement("sidebarCartAddedProductDescSubTotalActiveBlock");
        var elSavePriceBlock = getViewElement("sidebarCartAddedProductDescSubTotalSaveBlock");
        var elPrice_block = getViewElement("sidebarCartAddedProductDescSubTotalPriceBlock");

        var sbCartBlock = getViewElement("sidebarCartAddedListBlock");

        sbCartBlock.innerHTML = "";

        //var sidebarCountBlock = getViewElement("sidebarCountBlock");
        //sidebarCountBlock.style.display = "none";
        var totalProdQty = 0
        var bundleCartProductsArray = Object.keys(dataStore.bundleCartProducts);
        for (var key of Object.keys(dataStore.bundleCartProducts)) {
            if(INC_COL.clientConfig.OOS.indexOf(key) == -1){
                totalProdQty = totalProdQty + dataStore.bundleCartProducts[key]
            }   
        }
        //console.log(totalProdQty)
        if (totalProdQty == 1) {
            sidebarHeaderItemCountTitleText.innerHTML = "Subtotal " + "(" + totalProdQty + " item}"
        } else {
            sidebarHeaderItemCountTitleText.innerHTML = "Subtotal " + "(" + totalProdQty + " items)"
        }
        var headerItemCountFigureText = 0;
        var subtotalactiveprice = 0
        var subtotalregukarprice = 0
        var discountPrice = 0
        var discountPer = 0


        bundleCartProductsArray.forEach(function (productSKU, i) {
            // debugger
            var findObj = new INC.classes.FindObj({
                sku: productSKU
            });
            var productObj = INC.dataStore.methods().getProductBySKU(findObj, "collection");

            ///added for oos msg
            if (INC_COL.clientConfig.OOS.indexOf(productObj.mainId) >= 0) {
                var productBlock = INC.methods.getElementChilds("sidebarCartAddedProductBlock", "sidebar");
                productBlock.classList.add('cross')
                for (e = 0; e < INC_COL.clientConfig.OOS.length; e++) {
                    if (INC_COL.clientConfig.OOS_MESG[e] != undefined) {
                        var remerrorjust = document.querySelector('.inc_justerror')
                        if (remerrorjust != null) {
                            remerrorjust.parentNode.removeChild(remerrorjust)
                        }
                        if (document.querySelector('.inc_justerror') == null) {
                            var headertitle = sbBlock.querySelector('.inc_sidebar_modal_cart_and_title_block')
                            var errormes = generate_html_tag('div', 'inc_justerror')
                            var errormestext = generate_html_tag('span', 'inc_justerror_text')
                            // if(errormestext.innerHTML == null ){
                            errormestext.innerHTML = "<span>An unknown error has occurred. Please refresh or try again later</span>"
                            // }
                            //  productObj.name + " - " + INC.clientConfig.OOS_MESG[e]
                            errormes.appendChild(errormestext)
                            headertitle.parentNode.insertBefore(errormes, headertitle)
                            setTimeout(function () {
                                var remerrorjust=document.querySelector('.inc_justerror')
                                if(remerrorjust != null){
                                    remerrorjust.parentNode.removeChild(remerrorjust)
                                }
                            }, 4000)
                        }
                    }
                }
            }else{
                if(INC_COL.clientConfig.OOS.indexOf(productObj.mainId) == -1){
                    var productBlock = INC.methods.getElementChilds("sidebarCartAddedProductBlock", "sidebar");
                    //current  active prod
                    var color = "";
                    var size = "";
                    var just_check_prod_block = document.querySelector('.inc_product_module_block[data-main_id="' + productObj.mainId + '"]')
                    if (just_check_prod_block != null) {
                        if (just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active div') != null) {
                            size = just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active div').textContent
                        }
                        if (just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block') != null) {
                            color = just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-color')
                        }
                    }
                    
                    //productBlock.style.userSelect = "none";
                    var elImgBlock = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductImgBlock"));
                    var elImg = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductImg"));
                    var elTitleText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescTitleText"));
                    var elPriceActiveText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceActiveText"));
                    var elPriceRegularText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescPriceRegularText"));
                    var elAttColorText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescAttColorText"));
                    var elAttsizeText = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductDescAttSizeText"));
                    var elImgTag = INC.methods.generateHTMLTags('img', {
                        src: productObj.imageURL
                    });
                    var elQtyblock = productBlock.querySelector(getSelectorClassName(classNames, "sidebarCartAddedProductqtyBlock"));
    
    
    
                    // getViewElement("sidebarCartAddedProductqtyBlock");
                    elImgTag.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
                    elImg.appendChild(elImgTag);
                    elImgTag.setAttribute('alt', productObj.name)
                    elTitleText.innerHTML = dataStore.bundleCartProducts[productSKU] + "<small> x </small>" + productObj.name;
                    if (color != "") {
                        if (size != "") {
                            elAttsizeText.textContent = size;
                        } else {
                            elAttColorText.textContent = color;
                        }
                    }
                    // if(just_check_prod_block == null){
                    //     if(productObj.option != undefined){
                    //         if(productObj.option[1] != undefined){
                    //             elAttsizeText.textContent = productObj.option[1].text
                    //         }
                    //     }
    
                    // }
                    var quantityLabel = INC.methods.generateHTMLTags('div')
                    quantityLabel.classList.add('sidebar_product_quantity_label')
                    quantityLabel.innerText = dataStore.bundleCartProducts[productSKU]
                    productBlock.appendChild(quantityLabel)
    
                    var activePrice = parseFloat(productObj.activePrice).toFixed(2);
                    var regularPrice = parseFloat(productObj.regularPrice).toFixed(2);
                    subtotalactiveprice = (+subtotalactiveprice + (+productObj.activePrice * dataStore.bundleCartProducts[productSKU]));
                    subtotalregukarprice = (+subtotalregukarprice + (+productObj.regularPrice * dataStore.bundleCartProducts[productSKU]));
                    discountPrice = get_discount_price(subtotalregukarprice, subtotalactiveprice);
                    discountPer = get_discount_price_percentage(subtotalregukarprice, subtotalactiveprice);
                    // console.log(discountPrice,discountPer);
    
                    elPriceActiveText.innerHTML = formatter.format(activePrice).replace('US', '')
                    if (+activePrice != null && (+activePrice < +regularPrice)) {
                        elPriceRegularText.innerHTML = formatter.format(regularPrice).replace('US', '')
                    }
    
                    var pric_sum_elm = elHeadersubtotalactivetext.parentNode.parentNode.parentNode;
                    var total_save_price_block = document.createElement('div');
                    total_save_price_block.classList.add('total_save_price_block');
                    var total_save_price = document.createElement('div');
                    total_save_price.classList.add('total_save_price');
                    total_save_price_block.appendChild(total_save_price)
                    // pric_sum_elm.appendChild(total_save_price_block)
    
                    if (+subtotalactiveprice != null && (+subtotalactiveprice < +subtotalregukarprice)) {
                        var total_save_prc = get_discount_price_percentage(subtotalregukarprice, subtotalactiveprice);
                        if (total_save_prc != 0) {
                            // if(pric_sum_elm.querySelector('.total_save_price_block') != null){
                            //     pric_sum_elm.querySelector('.total_save_price').innerText=total_save_prc + "% Off";
                            //     pric_sum_elm.querySelector('.total_save_price_block').style.display="block"
                            // }
                        }
                    }
    
    
    
                    sbCartBlock.appendChild(productBlock);
                    if (window.innerWidth > 820) {
                        if (i > 2) {
                            //  productBlock.style.display = 'none'
                        }
                    }
                }
            }

        });



        elHeadersubtotalactivetext.parentNode.parentNode.classList.remove('inc_special_price')
        if (+subtotalactiveprice != null && (+subtotalactiveprice < +subtotalregukarprice)) {
            // elHeadersubtotalsavetext.innerHTML = "SAVE " + formatter.format(discountPrice) + " (" + (discountPer) + "%)";
            elHeadersubtotalactivetext.setAttribute('subtotalActiveprice', subtotalactiveprice)
            elHeadersubtotalregulartext.setAttribute('subtotalregularprice', subtotalregukarprice)
            elHeadersubtotalactivetext.innerHTML = INC.clientConfig.currencySymbol + formatter.format(subtotalactiveprice).replace('US', '')
            elHeadersubtotalregulartext.innerHTML = "was " + INC.clientConfig.currencySymbol + formatter.format(subtotalregukarprice).replace('US', '')
            elHeadersubtotalactivetext.parentNode.parentNode.classList.add('inc_special_price')
            // elHeadersubtotalactivetext.style.color="#ee1c31"
        } else {
            elHeadersubtotalactivetext.setAttribute('subtotalActiveprice', subtotalactiveprice)
            elHeadersubtotalactivetext.parentNode.parentNode.classList.remove('inc_special_price')
            elHeadersubtotalregulartext.setAttribute('subtotalregularprice', subtotalregukarprice)
            elHeadersubtotalactivetext.innerHTML = INC.clientConfig.currencySymbol + formatter.format(subtotalregukarprice).replace('US', '')
            elHeadersubtotalregulartext.innerHTML = ""
        }
        if (totalProdQty == 1) {
            sidebarHeaderItemCountTitleText.innerHTML = "Subtotal " + "(" + totalProdQty + " item)"
        } else {
            sidebarHeaderItemCountTitleText.innerHTML = "Subtotal " + "(" + totalProdQty + " items)"
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
        if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 3) {
            //document.querySelector('.inc_sidebar_cart_added_block .inc_cart_added_product_block').setAttribute('style','display:none;');
            if (window.innerWidth > 820) {
                // sidebarCountBlock.style.display = "block";
            }
            // sidebarCountBlock.innerHTML = "<a href=" + INC.clientConfig.checkoutLink + "> +" + (sbCartBlock.querySelectorAll(getSelectorClassName(classNames, "sidebarCartAddedProductBlock")).length - 3) + "</a>";
            // sidebarCountBlock.addEventListener("click", function (e) {
            //     window.location.href = INC.clientConfig.checkoutLink;
            // });
        }
    } else {
        document.querySelector('html').classList.remove('inc_overlay');
        setTimeout(function () {
            window.location.assign('https://www.feelunique.com/shop/basket')
        }, 2000)

    }
}

INC.methods.updateSidebarProductsList = function (elRecommendedProductsListBlock, productCategory) {
    //debugger
    var classNames = INC.uiConfig.sidebar.className;
    var getSelectorClassName = INC.methods.getSelectorClassName;
    var productListArray = INC.dataStore.bundleProductsArray;
    var dupl_sidebar_prod = []
    var addCheck = INC_COL.config.pdpaddedProductList.concat(INC.config.pdpaddedProductList)

    for (var i = 0; i < productListArray.length; i++) {
        // var findObj = new INC.classes.FindObj({ id: productListArray[i] });
        var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({
            mainId: productListArray[i]
        });
        if (firstProductObjByMainId["categoryId"] == productCategory) {
            if (INC.dataStore.dataStoreObj.undefined == undefined) {
                if (addCheck.indexOf(productListArray[i]) == -1) {
                    if (INC.config.sidebarremovedprod.indexOf(firstProductObjByMainId.id) == -1) {
                        if (dupl_sidebar_prod.indexOf(firstProductObjByMainId.id) == -1) {
                            dupl_sidebar_prod.push(firstProductObjByMainId.id)
                            var productBlock = INC.methods.createProductModuleBlock(firstProductObjByMainId.id, "sidebar", false, elRecommendedProductsListBlock);

                            productBlock.querySelector(getSelectorClassName(classNames, "productAddBlock")).addEventListener("click", function (e) {
                                if (INC.debug) console.log("clicked");

                                var productBlockNode = this.parentNode.parentNode;
                                if (this.parentNode.parentNode.className == "inc_product_desc_block") {
                                    productBlockNode = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                                }
                                // var productQtyInputText = productBlockNode.querySelector(getSelectorClassName(classNames, "productQtyInputText"));
                                var sku = productBlockNode.getAttribute('data-sku');
                                var findObj = new INC.classes.FindObj({
                                    id: sku
                                });
                                // var qty = productQtyInputText.innerText;
                                var qty = productBlockNode.querySelector('input').value;
                                var add_btn_click = productBlockNode.querySelector(getSelectorClassName(classNames, "productAddText"));
                                var add_prod_im = productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImg"));
                                var dataid = productBlockNode.getAttribute('data-id');
                                var added_maxqtyel = document.querySelector('.inc_cart_added_product_block.max_qty_reach[data-id="' + dataid + '"]')

                                if (added_maxqtyel == null) {
                                    setTimeout(function () {
                                        // var elAddImg = getViewElement("productAddImg");
                                        Array.prototype.forEach.call(productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImg")), function (el) {
                                            el.classList.remove("checked");
                                        });

                                    }, 2000);
                                    var add_btn_click = productBlockNode.querySelector(getSelectorClassName(classNames, "productAddText"));
                                    var add_prod_im = productBlockNode.querySelectorAll(getSelectorClassName(classNames, "productAddImg"));
                                    var add_btn = productBlockNode.querySelector('.inc_product_desc_add_text')
                                    if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block') != null) {
                                        if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block.inc_active') != null) {
                                            if (INC.config.disablebtn == true) {
                                                INC.config.disablebtn = false;
                                                productBlockNode.querySelector('.inc_product_variant_simple_text').innerText = "Adding...";
                                                productBlockNode.querySelector('.inc_product_desc_add_text').innerText = "Adding..."
                                                INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im, add_btn);
                                            }
                                        } else {
                                            productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_color_list_item_block').click()
                                        }
                                    } else if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.avail') != null) {
                                        if (productBlockNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector('.inc_product_desc_att_size_list_item_img_block.avail.inc_active') != null) {
                                            if (INC.config.disablebtn == true) {
                                                INC.config.disablebtn = false;

                                                productBlockNode.querySelector('.inc_product_desc_add_text').innerText = "Adding...";
                                                productBlockNode.querySelector('.inc_product_variant_simple_text').innerText = "Adding...";
                                                INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im, add_btn);
                                            }
                                        }
                                    } else {
                                        if (INC.config.disablebtn == true) {
                                            INC.config.disablebtn = false;
                                            productBlockNode.querySelector('.inc_product_variant_simple_text').innerText = "Adding...";
                                            productBlockNode.querySelector('.inc_product_desc_add_text').innerText = "Adding..."
                                            INC.methods.addProductToCart(findObj, qty, "sidebar", productBlockNode, add_btn_click, add_prod_im, add_btn);
                                        }
                                    }
                                } else {
                                    var add_btn_click = productBlockNode.querySelector(getSelectorClassName(classNames, "productAddText"));
                                    add_btn_click.innerText = "Add";
                                    Array.prototype.forEach.call(add_btn_click, function (el) {
                                        el.innerText = "Add";
                                    });
                                    var add_btn = productBlockNode.querySelector('.inc_product_desc_add_text')
                                    if (add_btn != undefined) {
                                        add_btn.parentNode.parentNode.setAttribute("style", "pointer-events: auto;opacity: 1;");
                                    }
                                    INC.config.disablebtn = true
                                    jQuery('.inc_sidebar_modal_block.inc_active').animate({
                                        scrollTop: jQuery('.inc_sidebar_cart_added_block.inc_active').height()
                                    }, 'fast');
                                }
                            });
                            elRecommendedProductsListBlock.appendChild(productBlock);
                        }
                    }
                }
            }
        };
    }

    if (INC.debug) console.log(elRecommendedProductsListBlock.parentNode);
    if (INC.debug) console.log(elRecommendedProductsListBlock.childNodes.length);
    if (INC.debug) console.log(elRecommendedProductsListBlock.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")));
    INC.clientConfig.offset = 0;
    INC.clientConfig.slidevalue = 0;
    elRecommendedProductsListBlock.setAttribute('style', 'margin-left: 0')

    if (!(elRecommendedProductsListBlock.childNodes.length > 2)) {
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBlock")).style.visibility = "hidden";
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).style.visibility = "hidden";
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).setAttribute("style", "pointer-events: none;opacity:0.5;visibility: hidden;");
    }

    if (elRecommendedProductsListBlock.childNodes.length > 2) {
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBlock")).style.visibility = "visible";
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).style.visibility = "visible";
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).setAttribute("style", "pointer-events: none;opacity:0.5");
    }
    // if (isIE()){
    elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnImg")).setAttribute("style", "opacity:0.5");
    // }
    var sliderBtnCounter = 0;

    elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnImg")).setAttribute('title', 'Scroll left')
    elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBtnImg")).setAttribute('title', 'Scroll right')

    var productBlocks = elRecommendedProductsListBlock.querySelectorAll(getSelectorClassName(classNames, "productModuleBlock"));
    elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBtnBlock")).addEventListener("click", function () {
        var productBlocks = document.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block')
        if (INC.clientConfig.slidevalue + 1 < productBlocks.length) {
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnBlock")).setAttribute("style", "pointer-events: auto;opacity:1");
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBlock")).setAttribute("style", "pointer-events: auto;opacity:1");
            // if (isIE()){
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnImg")).setAttribute("style", "opacity:1");
            // }
            INC.clientConfig.slidevalue++
            var slide_w = 274
            if (window.innerWidth > 1590) {
                var slide_w = 274
            }
            INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) - slide_w) + 'px';
            var menu = elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsListBlock"));
            // menu.style['transitionDuration'] = '0.5s'
            // menu.style['marginLeft'] = INC.clientConfig.offset
            menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
        }
        var cc_ount = 1;

        if (window.innerWidth > 819) {
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
        if (sliderBtnCounter > productBlocks.length - cc_ount) {
            sliderBtnCounter--;
        }
        if (INC.debug) console.log(sliderBtnCounter);
        if (INC.debug) console.log(productBlocks);
        // productBlocks[sliderBtnCounter - 1].style.display = "none";
        if (INC.debug) console.log(sliderBtnCounter);
        if (INC.debug) console.log("pdp product blocks count:" + productBlocks.length);

    });

    elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsLeftBtnBlock")).addEventListener("click", function () {
        var productBlocks = document.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block')
        if (INC.clientConfig.slidevalue == -1) INC.clientConfig.slidevalue = 0;
        if (INC.clientConfig.slidevalue > 0) {
            var slide_w = 274
            if (window.innerWidth > 1590) {
                var slide_w = 274
            }
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBtnBlock")).setAttribute("style", "pointer-events: auto;opacity:1");
            document.querySelector('.inc_recommended_products_right_btn_img').setAttribute("style", "pointer-events: auto;opacity:1");
            // if (isIE()){
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsRightBtnImg")).setAttribute("style", "opacity:1");
            // }
            INC.clientConfig.slidevalue--
            INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) + slide_w) + 'px';
            var menu = elRecommendedProductsListBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "sidebarRecommendedProductsListBlock"));
            // menu.style['transitionDuration'] = '0.5s'
            // menu.style['marginLeft'] = INC.clientConfig.offset
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
    });
    setTimeout(function () {
        var allimgSid = document.querySelectorAll('.inc_sidebar_modal_block img[data-src]')
        for (img = 0; img < allimgSid.length; img++) {
            allimgSid[img].src = allimgSid[img].getAttribute('data-src')
        }
        _isVisible._init({
            classSelector: ".inc_pdp_block img[data-src], .inc_pdp_block source[data-src], .inc_sidebar_modal_block img[data-src], .inc_sidebar_modal_block source[data-src], .inc_af_block img[data-src], .inc_af_block source[data-src]",
            index: 0
        });
    }, 10)
}
INC.methods.sendBundleClickTracking = function (productId) {

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
        case "ticket":
            pageType = "103";
            break;
        case "other":
            pageType = "101";
    }

    if (document.querySelector('.inc_sidebar_modal_block.inc_active') == null && INC.config.pageType == "pdp") {
        pageType = "100";
    }

    INC.methods.trackingEvents("bundleProductClickTracking", {
        "product_id": productId,
        "core_product_id": INC.dataStore.pdpProductId
    }, pageType);

}

INC.methods.createProductModuleBlock = function (pdpProductId, blockType, bundleProductListCheck, parentblock) {
    if (INC.dataStore.dataStoreObj.undefined == undefined) {
        // || INC.dataStore.dataStoreObj[INC.config.Product_id][INC.config.Product_id].bundleId != "12345679"
        var classNames = INC.uiConfig[blockType].className;
        var findObj = new INC.classes.FindObj({
            id: pdpProductId
        });
        var productObj = INC.dataStore.methods().getProductById(findObj);
        var getSelectorClassName = this.getSelectorClassName;
        //console.log(productObj)
        var productModuleBlock = this.getElementChilds("productModuleBlock", blockType);
        productModuleBlock.style.userSelect = "none";
        productModuleBlock.setAttribute('data-id', productObj.id);
        productModuleBlock.setAttribute('data-sku', productObj.sku);
        productModuleBlock.setAttribute('data-main_id', productObj.mainId);
        productModuleBlock.setAttribute('data-bundle_id', productObj.bundleId);
        productModuleBlock.classList.add(productObj.ProductType)

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
        // var productShowcaseBlock = INC.methods.createProductModalBlock(pdpProductId, blockType, bundleProductListCheck);
        var productModalBlock = INC.methods.createProductModalBlock(pdpProductId, blockType, bundleProductListCheck, parentblock);

        elProductShowcaseBlock.appendChild(productShowcaseBlock);
        elProductModalBlock.appendChild(productModalBlock);

        // console.log(elProductShowcaseBlock);
        // console.log(elProductModalBlock);

        return productModuleBlock;
    }
}


INC.methods.createProductShowcaseBlock = function (pdpProductId, blockType, bundleProductListCheck, parentblock) {
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
    productBlock.setAttribute('data_main_variant', productObj.mainProdVariant);
    productBlock.setAttribute('data-category_name', productObj.categoryName);
    productBlock.setAttribute('product_type', productObj.ProductType);
    productBlock.classList.add(productObj.ProductType)

    function getViewElement(className) {
        return productBlock.querySelector(getSelectorClassName(classNames, className));
    }
    var elHeaderInfoBlck = getViewElement("productInfoMainBlock");
    var elHeader = getViewElement("productHeaderMainBlock");
    var elImgBlock = getViewElement("productImgBlock");
    var elImgGalleryListBlock = getViewElement("productImgGalleryListBlock");
    var elTitleBlock = getViewElement("productTitleBlock");
    var elTitleTextBlock = getViewElement("productTitleTextBlock");
    var elTitleText = getViewElement("productTitleText");
    var elproductPriceBlock = getViewElement("productPriceBlock");
    var elproductPriceLabel = getViewElement("productPriceLabel");
    var elPriceActiveText = getViewElement("productPriceActiveText");
    var elPriceActiveMsg = getViewElement("productPriceActiveTextMsg");
    var elPriceRegularText = getViewElement("productPriceRegularText");
    var eleditblock = getViewElement("productAttEditBlock");
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
    var elworthPrice = getViewElement("productPriceWorthText");
    var fulldescblock = getViewElement("productInfoFullDescBlock");
    var eldetailsprodblock = getViewElement("productAttDetailsBlock")
    var eladdvarianttext = getViewElement("productvariantSimpleText")
    var elconfigtitle = getViewElement("productAddTitle")
    var elvariantaddbtn = getViewElement("productAttvariantaddBlock")
    var elvariantaddbtntext = getViewElement("productAttvariantaddText")
    var elvariantviewdetails = getViewElement("productAttvariantviewdetailsBlock")
    var elvariantviewdetailstext = getViewElement("productAttvariantviewdetailsText")
    var eldescblock = getViewElement("productDescBlock");
    var elbstxtblock = getViewElement("productBstxtBlock");
    var elvariantpopupclose = getViewElement("productvariantPopupClose")
    var elselectoptaddbtn = getViewElement("productvariantSimpleBlock")
    var elsizetitleblock = getViewElement("productAttzeroTitleBlock");
    var eldescrpionblock = getViewElement("productDescBlock");

    var productDescQtyInputText = getViewElement("productDescQtyInputText");
    var productDescQtyBlock = getViewElement("productDescQtyBlock");
    var productDescAddText = getViewElement("productDescAddText");
    var elQtyAddBtnBlock = getViewElement("productQtyAddBtnBlock");
    var productDescQtyUp = getViewElement("productDescQtyUpBlock");
    var productDescQtyDown = getViewElement("productDescQtyDownBlock");


    elQtyAddBtnBlock.classList.add(productObj.ProductType);

    // elproductPriceLabel.innerHTML = "SALE"

    //elratingsBlock

    // if (productObj.manufacturer != null && productObj.manufacturer != '' && productObj.manufacturer != undefined ) {
    //     var manufacturer = document.createElement('div');
    //     manufacturer.classList.add('inc_manufacturer_details');
    //     manufacturer.textContent = productObj.manufacturer;
    //     elratingsBlock.parentNode.insertBefore(manufacturer, elratingsBlock);
    // }


    // var loggin_div = document.createElement('div');
    // loggin_div.classList.add('inc_login_details');



    elvariantpopupclose.addEventListener('click', function () {
        if (document.querySelector('.inc_product_modal_block.inc_active') == null && document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
            document.querySelector('html').classList.remove('inc_overlay')
            document.querySelector('body').style.position = "relative"
            document.querySelector('body').style.overflow = "auto"

        }
        this.parentNode.classList.remove('inc_active')
        document.querySelector('body').classList.remove('inc_minipopup');
        productBlock.classList.remove('show_overlay')
    });


    elHeaderInfoBlck.setAttribute('data-id', productObj.id);
    elHeaderInfoBlck.setAttribute('data-sku', productObj.sku);
    elHeaderInfoBlck.setAttribute('data-main_id', productObj.mainId);
    elHeaderInfoBlck.setAttribute('data-bundle_id', productObj.bundleId);

    elHeader.querySelector(getSelectorClassName(classNames, "productHeaderImgBlock")).addEventListener("click", function () {
        productBlock.parentNode.classList.remove("inc_active");
    });


    var elImgMainImg = elImgBlock.querySelector(getSelectorClassName(classNames, "productImgMainImg"));
    var elImgTag1 = this.generateHTMLTags('img', {
        src: productObj.imageURLMain
    });
    if (elImgTag1 == true) {
        elImgTag.src = productObj.imageURLMain
    }
    elImgTag1.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
    elImgTag1.setAttribute('role', 'img')
    elImgTag1.setAttribute('aria-label', 'Image')
    elImgTag1.setAttribute('alt', productObj.nameMain)
    elImgTag1.setAttribute('data-mouseover', productObj["otherImageList"])
    elImgTag1.setAttribute('data-imageURL', productObj["imageURLMain"])
    var productLink = document.createElement('a');

    productLink.href = productObj.url;
    productLink.appendChild(elImgTag1);
    productLink.setAttribute('otherImageList', productObj["otherImageList"])
    productLink.setAttribute('imageURL', productObj["imageURLMain"])
    add_swipe(productLink)

    elImgMainImg.appendChild(productLink);

    if (blockType == "sidebar" && window.innerWidth < 728) {
        productLink.addEventListener('click', function (e) {
            INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
            getTrackingPixel();
        })
    } else {
        productLink.addEventListener('click', function (e) {
            getTrackingPixel();
            e.preventDefault();
        })
    }

    if (INC.config.pageType == "pdp" && INC.config.recommendation) {
        productLink.setAttribute("href", productObj.url);
        elImgMainImg.addEventListener("click", function () {

            INC.methods.sendBundleClickTracking(productObj.mainId);
            getTrackingPixel();

        });
    } else {
        elImgMainImg.addEventListener("click", function (e) {
            
            if (productBlock.querySelector('.close_read_more') != null) {
                productBlock.querySelector('.close_read_more').click()
            }

            if (productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block') != null) {
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block').click()
            }
            if (document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                document.querySelector('html').classList.remove('inc_overlay');
                document.querySelector('body').classList.remove('inc_popup_open');
            }
            if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
                document.querySelector('.inc_sidebar_modal_block.inc_active').classList.remove('overflow_visible')
            }
            Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productModalBlock")), function (el) {
                el.classList.remove("inc_active");
            });
            if (document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                document.querySelector('html').classList.add('inc_overlay');
            }
            if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
                document.querySelector('.inc_sidebar_modal_block.inc_active').classList.add('overflow_visible')
            }
            productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_title_text_block').click()
            document.querySelector('html').classList.add('inc_overlay');
            document.querySelector('body').classList.add('inc_popup_open');
            if (blockType == "sidebar" && window.innerWidth < 728) {
                e.preventDefault();
                var href = productBlock.querySelector('.inc_product_img_main_img a').href;
                setTimeout(function(){
                    window.location.href = href
                },2000)
            } else {
                productBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).classList.add("inc_active")
            }
        });
    }

    elImgGalleryListBlock.innerHTML = "";

    if ((productObj.otherImageList != null) && (productObj.otherImageList.length > 1) && (productObj.otherImageList[productObj.otherImageList.length - 1] != "")) {
        var otimg = 0;

        productObj.otherImageList.forEach(function (otherImgURL) {
            var elOtherImgTag = INC.methods.generateHTMLTags('img', {
                src: otherImgURL
            });
            if (elOtherImgTag == true) {
                elOtherImgTag.src = otherImgURL
            }
            elOtherImgTag.setAttribute('role', 'img')
            elOtherImgTag.setAttribute('aria-label', 'Image')
            elOtherImgTag.setAttribute('alt', productObj.name)
            elOtherImgTag.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");

            var elImgGalleryListItemBlock = INC.methods.getElementChilds("productImgGalleryListItemBlock", blockType);

            var elImgGalleryListItemImg = elImgGalleryListItemBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemImg"));

            if (productObj.otherImageList.length > 4) {
                elImgGalleryListItemImg.classList.add('OthImg4');
            }

            elImgGalleryListItemImg.appendChild(elOtherImgTag);
            elImgGalleryListItemBlock.setAttribute('index', otimg)
            elImgGalleryListItemBlock.addEventListener("click", function () {

                Array.prototype.forEach.call(productBlock.querySelectorAll(getSelectorClassName(classNames, "productImgGalleryListItemBlock")), function (galleryListItemBlock) {
                    galleryListItemBlock.classList.remove("inc_active");
                });

                elImgGalleryListItemBlock.classList.add("inc_active");

                elImgMainImg.querySelector('img').src = otherImgURL;
                elImgMainImg.querySelector('img').setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
            })

            elImgGalleryListBlock.appendChild(elImgGalleryListItemBlock);
            if (otimg == 0) {
                elImgGalleryListItemBlock.classList.add('inc_active')
            }
            otimg++;
            if (productObj.otherImageList.length > 5) {
                elImgGalleryListItemBlock.parentNode.classList.add("flex-start")
            }
        });
    }

    if ((INC.config.pageType == "pdp" && !INC.config.recommendation) || INC.config.pageType != "pdp") {
        elTitleTextBlock.addEventListener("click", function (e) {
            if (productBlock.querySelector('.close_read_more') != null) {
                productBlock.querySelector('.close_read_more').click()
            }

            if (productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block') != null) {
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block').click()
            }
            if (document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                document.querySelector('html').classList.remove('inc_overlay');
                document.querySelector('body').classList.remove('inc_popup_open');
            }
            Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productModalBlock")), function (el) {
                el.classList.remove("inc_active");
            });
            if (document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                document.querySelector('html').classList.add('inc_overlay');
            }
            if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
                document.querySelector('.inc_sidebar_modal_block.inc_active').classList.add('overflow_visible')
            }
            productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_title_text_block').click()
            document.querySelector('html').classList.add('inc_overlay');
            document.querySelector('body').classList.add('inc_popup_open');
            if (blockType == "sidebar" && window.innerWidth < 728) {
                e.preventDefault();
                var href = productBlock.querySelector('.inc_product_img_main_img a').href;
                setTimeout(function(){
                    window.location.href = href
                },2000)
            } else {
                productBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productModalBlock")).classList.add("inc_active")
            }
            setTimeout(function () {
                if (document.querySelector('.inc_product_modal_block.inc_active') != null) document.querySelector('html').classList.add('inc_overlay');
            }, 300)
        });
    }

    var pTitleDiv = document.createElement('div');
    pTitleDiv.textContent = productObj.nameMain;
    var field1 = productObj.ratingsCount

    var field2 = productObj.reviewsCount
    // productObj.Filed3;   
    INC.methods.get_product_ratings(field1, field2, elratingsBlock);
    var pLink = document.createElement('a');
    // pLink.href = productObj.url;
    if (blockType == "pdp" && INC.config.Product_id == productObj.mainId) {
        pLink.setAttribute('style', 'cursor: default;text-decoration: none;')
    } else {
        pLink.setAttribute('style', 'cursor: default;text-decoration: none;')
    }
    pLink.href = productObj.url;
    if (blockType == "sidebar" && window.innerWidth < 728) {
        pLink.addEventListener('click', function (e) {
            INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
            getTrackingPixel();
        })
    } else {
        pLink.addEventListener('click', function (e) {
            getTrackingPixel();
            e.preventDefault()
        })
    }
    pLink.setAttribute('style', 'text-transform: unset;')
    pLink.setAttribute('title', productObj.nameMain)
    if (INC.config.pageType == "pdp" && INC.config.recommendation) {
        pLink.setAttribute('href', productObj.url)
    }
    pLink.appendChild(pTitleDiv);
    elTitleText.appendChild(pLink);


    var activePrice = parseFloat(productObj.activePriceMain).toFixed(2).toString();
    var regularPrice = parseFloat(productObj.regularPriceMain).toFixed(2).toString();
    // var worthPrice = parseFloat(productObj.worthPrice).toFixed(2).toString();
    var totalsaveprc = get_discount_price(productObj.regularPriceMain, productObj.activePriceMain)
    var totalsaveper = get_discount_price_percentage(productObj.regularPriceMain, productObj.activePriceMain)

    // elPriceActiveMsg.textContent = " + VAT"
    // 
    var fromTxt = generate_html_tag('span', 'fromTxt');
    var actPrc = elPriceActiveText.parentNode.parentNode
    //actPrc.appendChild(fromTxt)
    elPriceRegularText.textContent = "";


    if (productObj.ProductType != "simple") {
        var priceRange = get_child_product_prices(productObj.mainId)
        if (priceRange.innerText.split(',')[0] != priceRange.innerText.split(',')[1] && priceRange.innerText.split(',')[1] != undefined) {
            elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_price')
            elPriceActiveText.innerHTML = priceRange.innerText.split(',')[0]
            elPriceRegularText.innerHTML = "was " + priceRange.innerText.split(',')[1]
        } else {
            elPriceActiveText.innerHTML = priceRange.innerText.split(',')[0]
        }
    } else {
        if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
            elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_price')
            if (productObj.pricingCount != "") {
                elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(activePrice)
                elPriceRegularText.innerHTML = "<span>" + "WAS" + "</span>" + INC.clientConfig.regularPricePrefix + INC.clientConfig.currencySymbol + formatter.format(regularPrice)
            } else {
                elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(activePrice)
                elPriceRegularText.innerHTML = "<span>" + "WAS" + "</span>" + INC.clientConfig.regularPricePrefix + INC.clientConfig.currencySymbol + formatter.format(regularPrice)
            }
            // elworthPrice.innerHTML = "Save " + formatter.format(totalsaveprc);
        } else {
            //fromTxt.innerText = "from";
            if (productObj.pricingCount != "") {
                elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(activePrice)
            } else {
                elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(activePrice)
            }
            elworthPrice.innerHTML = ""
        }
    }

    // if (productObj.PromotionalMessage != null) {
    //     if (productObj.PromotionalMessage.toLocaleLowerCase().includes('sale')) {
    //         elworthPrice.innerHTML = "Save " + formatter.format(totalsaveprc);
    //         elPriceActiveText.classList.add('inc_sale');
    //     } else if(productObj.PromotionalMessage.toLocaleLowerCase().includes('new in')) {
    //         elproductPriceLabel.style.display = 'none';
    //         elworthPrice.innerHTML = productObj.PromotionalMessage;
    //         elworthPrice.classList.add('new-inc');
    //     }else{
    //         elproductPriceLabel.style.display = 'none';
    //         elworthPrice.innerHTML = productObj.PromotionalMessage;
    //     }
    // } else {
    //     elproductPriceLabel.style.display = 'none';
    //     elworthPrice.style.display = 'none';
    // }

    if (productBlock.querySelector('.pc_promo_div') == null && productObj.ProductLevelDiscountMessage != null && productObj.ProductLevelDiscountMessage != "") {
        var inc_offer = generate_html_tag('div', 'inc_offer')
        inc_offer.textContent = ""
        elImgBlock.appendChild(inc_offer)
        var ec_promo_div = document.createElement('div');
        ec_promo_div.classList.add('pc_promo_div')
        ec_promo_div.classList.add('inc_active')
        var ec_promo_span = document.createElement('span');
        ec_promo_span.classList.add('pc_promo_span')

        ec_promo_span.classList.add('red_promo')
        ec_promo_span.innerHTML = productObj.ProductLevelDiscountMessage.split('|')[0].replace("_", " ")
        ec_promo_span.setAttribute('title', productObj.ProductLevelDiscountMessage.split('|')[0].replace("_", " "))
        ec_promo_div.appendChild(ec_promo_span);


        var view = elproductPriceBlock
        if (view != null || view != undefined) {
            view.parentNode.insertBefore(ec_promo_div, view);
        }
        if (parentblock != undefined) {
            parentblock.classList.add('promos_available')
        }
        var inc_promo_popup = generate_html_tag('div', 'inc_promo_popup')
        var inc_promo_dialoge = generate_html_tag('div', 'inc_promo_dialoge')
        var inc_close_promo = generate_html_tag('span', 'inc_close_promo')
        inc_promo_dialoge.appendChild(inc_close_promo)
        var inc_promo_heading = generate_html_tag('div', 'inc_promo_heading')
        inc_promo_heading.textContent = ""
        inc_promo_dialoge.appendChild(inc_promo_heading)
        var inc_promo_sub_heading = generate_html_tag('div', 'inc_promo_sub_heading')
        // inc_promo_sub_heading.textContent = "You can combine promotions but only one offer code can be used per transaction"
        inc_promo_dialoge.appendChild(inc_promo_sub_heading)
        var inc_promo_text_block = generate_html_tag('div', 'inc_promo_text_block')

        var ec_promo_div_popup = document.createElement('div');
        ec_promo_div_popup.classList.add('ec_promo_div_popup')
        if (productObj.ProductLevelDiscountMessage.split("|")[0] != "" && productObj.ProductLevelDiscountMessage.split("|")[0] != "null" && productObj.ProductLevelDiscountMessage.split("|")[0] != "undefined") {
            ec_promo_div_popup.classList.add('inc_active')
        }
        var ec_promo_span_popup = document.createElement('span');
        ec_promo_span_popup.classList.add('ec_promo_span_popup')
        ec_promo_span_popup.classList.add('red_promo')
        if (productObj.ProductLevelDiscountMessage.split("|")[0] != "null" && productObj.ProductLevelDiscountMessage.split("|")[0] != "undefined") {
            ec_promo_span_popup.innerHTML = productObj.ProductLevelDiscountMessage.split("|")[0]
        }
        ec_promo_div_popup.appendChild(ec_promo_span_popup);


        if (productObj.ProductLevelDiscountMessage.split("|")[1] != undefined) {
            var ec_promo_div_popup1 = document.createElement('div');
            ec_promo_div_popup1.classList.add('ec_promo_div_popup')
            if (productObj.ProductLevelDiscountMessage.split("|")[1] != "") {
                ec_promo_div_popup1.classList.add('inc_active')
            }
            var ec_promo_span_popup1 = document.createElement('span');
            ec_promo_span_popup1.classList.add('ec_promo_span_popup')

            ec_promo_span_popup1.classList.add('red_promo')
            ec_promo_span_popup1.innerHTML = productObj.ProductLevelDiscountMessage.split("|")[1]
            ec_promo_div_popup1.appendChild(ec_promo_span_popup1);

        }
        if (productObj.ProductLevelDiscountMessage.split("|")[2] != undefined) {
            var ec_promo_div_popup2 = document.createElement('div');
            ec_promo_div_popup2.classList.add('ec_promo_div_popup')
            if (productObj.ProductLevelDiscountMessage.split("|")[2] != "") {
                ec_promo_div_popup2.classList.add('inc_active')
            }
            var ec_promo_span_popup2 = document.createElement('span');
            ec_promo_span_popup2.classList.add('ec_promo_span_popup')

            ec_promo_span_popup2.classList.add('red_promo')
            ec_promo_span_popup2.innerHTML = productObj.ProductLevelDiscountMessage.split("|")[2]
            ec_promo_div_popup2.appendChild(ec_promo_span_popup2);

        }
        if (productObj.ProductLevelDiscountMessage.split("|")[2] != undefined) {
            inc_promo_text_block.appendChild(ec_promo_div_popup)
            inc_promo_text_block.appendChild(ec_promo_div_popup1)
            inc_promo_text_block.appendChild(ec_promo_div_popup2)
        } else if (productObj.ProductLevelDiscountMessage.split("|")[1] != undefined) {
            inc_promo_text_block.appendChild(ec_promo_div_popup)
            inc_promo_text_block.appendChild(ec_promo_div_popup1)
        } else {
            inc_promo_text_block.appendChild(ec_promo_div_popup)
        }
        inc_promo_dialoge.appendChild(inc_promo_text_block)
        inc_promo_popup.appendChild(inc_promo_dialoge)
        inc_promo_popup.style.display = "none"
        productBlock.appendChild(inc_promo_popup)

        // ec_promo_div.addEventListener('click', function () {
        //     if (productBlock.querySelector('.inc_promo_popup') != null) {
        //         if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
        //             document.querySelector('.inc_sidebar_modal_block.inc_active').classList.add('overflow_visible')
        //         }
        //         document.querySelector('html').classList.add('inc_overlay_promo');
        //         productBlock.querySelector('.inc_promo_popup').classList.add('inc_active')
        //     }

        // })
        inc_close_promo.addEventListener('click', function () {
            document.querySelector('html').classList.remove('inc_overlay_promo');
            this.parentNode.parentNode.classList.remove('inc_active')
            if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
                document.querySelector('.inc_sidebar_modal_block.inc_active').classList.remove('overflow_visible')
            }
        })

    } else {
        var ec_promo_div = document.createElement('div');
        ec_promo_div.classList.add('pc_promo_div')
        ec_promo_div.classList.add('empty');
        var view = elproductPriceBlock
        if (view != null || view != undefined) {
            view.parentNode.insertBefore(ec_promo_div, view);
        }
    }

    var inc_variant_error_text = generate_html_tag('div', 'inc_variant_error_text');
    eldetailsprodblock.parentNode.insertBefore(inc_variant_error_text, eldetailsprodblock);

    if (window.innerWidth < 820) {
        var inc_empty_popup = generate_html_tag('div', 'inc_empty_popup');
        eldetailsprodblock.appendChild(inc_empty_popup);
    }
    if (blockType == "am") {
        productDescAddText.innerText = "Add to Basket"
    } else if (blockType == "sidebar") {
        productDescAddText.innerText = "Add to Basket"
    } else {
        productDescAddText.innerText = "Add to Bundle"
    }

    productDescAddText.addEventListener('click', function () {
        this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
    });

    var qty_title1 = document.createElement('label')
    qty_title1.innerText = "qty"
    //productDescQtyBlock
    productDescQtyBlock.parentNode.insertBefore(qty_title1, productDescQtyBlock);

    var elQtyInput1 = this.generateHTMLTags('input');
    elQtyInput1.setAttribute('type', "number");
    elQtyInput1.setAttribute('aria-label', "quantity");
    elQtyInput1.setAttribute('min', 1);
    elQtyInput1.setAttribute('max', 999);
    elQtyInput1.setAttribute('maxlength', 3);
    if (window.innerWidth > 820) {
        elQtyInput1.setAttribute('readonly', '');
    }
    elQtyInput1.value = 1;
    elQtyInput1.setAttribute('old_qty', '1');
    elQtyInput1.setAttribute('pattern', '/^-?\d+\.?\d*$/');
    elQtyInput1.setAttribute("onkeydown", "if(event.key==='.'){event.preventDefault();}");
    elQtyInput1.setAttribute('onKeyPress', 'if(this.value.length==3) return false;');
    elQtyInput1.setAttribute("oninput", "validity.valid||(value='');");
    // elQtyInput1.setAttribute("oninput", "validity.valid||(value='');");

    setTimeout(function () {
        elQtyInput1.parentNode.parentNode.parentNode.parentNode.classList.add('singleqty');
    })


    elQtyInput1.addEventListener("keydown", function (e) {
        var prod_card = elQtyInput1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        var key = e.keyCode;
        if (key === 32) {
            e.preventDefault();
        }
        setTimeout(function () {
            // if (elQtyInput1.value === 0) elQtyInput1.value = 1;
            // if (elQtyInput1.value < 1) elQtyInput1.value = 1;
            if (elQtyInput1.value > 100) elQtyInput1.value = 100;
            setTimeout(function () {
                if (elQtyInput1.value === 0) elQtyInput1.value = 1;
                if (elQtyInput1.value < 1) elQtyInput1.value = 1;
                if (elQtyInput1.value == "") {
                    // elQtyInput1.value = 1
                    qty = 1
                }
                if (isNaN(qty) || qty < 1) qty = 1;
                if (window.innerWidth > 820) {
                    prod_card.querySelector('.inc_product_showcase_block .inc_product_desc_qty_add_btn_block .inc_product_qty_input_text input').value = qty
                }

                // elQtyInput1.value = qty
                if (elAddText.innerText == "Added" || elAddText.innerText == "Update" || elAddText.innerText == "ADDED" || elAddText.innerText == "UPDATE") {

                    INC.methods.updateBundleCart({
                        sku: id,
                        qty: qty
                    }, "add", main_id, bundle_id, pname, pprice);
                }
            }, 1000)
            var productModuleBlock = productBlock.parentNode.parentNode;

            var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));
            var qty = parseInt(elQtyInput1.value);
            if (!isNaN(qty)) showcaseProductBlock.querySelector('.inc_product_qty_input_text input').value = qty;

            var id = productBlock.getAttribute('data-id');

            var main_id = productBlock.getAttribute('data-main_id');
            var bundle_id = productBlock.getAttribute('data-bundle_id');
            var pname = productBlock.querySelector('.inc_product_desc_title_text').innerText;
            var pprice = productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$', '');
            // if(elQtyInput1.value == ""){
            //     elQtyInput1.value = 1
            //     qty = 1
            // }
            if (window.innerWidth > 820) {
                prod_card.querySelector('.inc_product_showcase_block .inc_product_desc_qty_add_btn_block .inc_product_qty_input_text input').value = elQtyInput1.value
            }

            prod_card.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_qty_add_btn_block .inc_product_qty_input_text input').value = elQtyInput1.value


            if (elAddText.innerText == "Added" || elAddText.innerText == "Update" || elAddText.innerText == "ADDED" || elAddText.innerText == "UPDATE") {
                if (isNaN(qty) || qty < 1) qty = 1;
                INC.methods.updateBundleCart({
                    sku: id,
                    qty: qty
                }, "add", main_id, bundle_id, pname, pprice);
            }

        }, 200);

    });

    productDescQtyInputText.appendChild(elQtyInput1);

    var added_text = document.createElement('span');
    added_text.classList.add("inc_add_text");
    productDescQtyInputText.appendChild(added_text);



    productDescQtyDown.addEventListener('click', function () {

        if (productBlock.querySelector('.close_read_more') != null) {
            productBlock.querySelector('.close_read_more').click()
        }
        var prod_card = elQtyInput1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        elQtyInput1.value = (elQtyInput1.value - 1 < 1) ? 1 : elQtyInput1.value - 1;

        var productModuleBlock = productBlock.parentNode.parentNode;

        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));
        var modalProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

        showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productDescQtyBlock")).querySelector('input').value = parseInt(elQtyInput1.value);
        //prod_card.querySelector('.inc_product_showcase_block .inc_product_desc_qty_input_block input').value = elQtyInput1.value
        modalProductBlock.querySelector('.inc_product_qty_input_text input').value = parseInt(elQtyInput1.value);

        var id = productBlock.getAttribute('data-id');
        var sku = productBlock.getAttribute('data-sku');
        var qty = parseInt(elQtyInput1.value);
        var bundle_id = productBlock.getAttribute('data-bundle_id');
        var main_id = productBlock.getAttribute('data-main_id');
        var pname = productBlock.querySelector('.inc_product_desc_title_text').innerText;
        var pprice = productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$', '');
        if (parseInt(elQtyInput1.value) == 1 && productDescQtyBlock.classList.contains('singleqty') == true) {
            if (elAddText.textContent == "Added" || elAddText.textContent == "Update" || elAddText.textContent == INC.config.AddedText || elAddText.textContent == INC.config.UpdateText) {

                document.querySelector('html').classList.remove('inc_overlay')
                var modal_blck = productModuleBlock.querySelector('.inc_product_modal_block')
                var showcase_blck = productModuleBlock.querySelector('.inc_product_showcase_block')
                var elAddTextshowcase = showcase_blck.querySelector('.inc_product_desc_add_text')
                var elAddTextmodal = modal_blck.querySelector('.inc_product_desc_add_text')
                // elAddTextshowcase.innerText = "Add to Bundle";
                // elAddTextshowcase.classList.remove('added');
                // elAddTextshowcase.parentNode.parentNode.classList.remove('Inc_checked');

                // elAddTextshowcase.parentNode.parentNode.parentNode.classList.remove('inc_active');
                // elAddTextmodal.innerText = "Add to Bundle";
                // showcase_blck.classList.remove('inc_checked')
                // showcase_blck.querySelector('.inc_product_block').classList.remove('inc_checked')
                // showcase_blck.querySelector('.inc_product_desc_add_img_block').classList.remove("checked");
                // modal_blck.querySelector('.inc_product_desc_add_img_block').classList.remove("checked");
                if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({
                    sku: id,
                    qty: qty
                }, "add", main_id, bundle_id, pname, pprice);
            }
        } else {
            if (elAddText.textContent == "Added" || elAddText.textContent == "Update" || elAddText.textContent == INC.config.AddedText || elAddText.textContent == INC.config.UpdateText) {
                INC.methods.updateBundleCart({
                    sku: id,
                    qty: qty
                }, "add", main_id, bundle_id, pname, pprice);
            }
        }
        if (elQtyInput1.value == 1) {
            elQtyBlock.classList.add('singleqty')
            productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_desc_qty_block').classList.add('singleqty')
            productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_qty_block').classList.add('singleqty')
            modalProductBlock.querySelector('.inc_product_qty_input_text input').parentNode.parentNode.parentNode.parentNode.classList.add('singleqty');
            // document.querySelector('html').classList.add('inc_overlay');

        }

    });

    productDescQtyUp.addEventListener('click', function () {

        if (productBlock.querySelector('.close_read_more') != null) {
            productBlock.querySelector('.close_read_more').click()
        }
        var prod_card = elQtyInput1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        elQtyInput1.value = (parseInt(elQtyInput1.value) + 1 > 100) ? 100 : parseInt(elQtyInput1.value) + 1;

        var productModuleBlock = productBlock.parentNode.parentNode;

        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));
        var modalProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

        showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productDescQtyBlock")).querySelector('input').value = parseInt(elQtyInput1.value);
        modalProductBlock.querySelector('.inc_product_qty_input_text input').value = parseInt(elQtyInput1.value);

        modalProductBlock.querySelector('.inc_product_qty_input_text input').parentNode.parentNode.parentNode.parentNode.classList.remove('singleqty');

        productDescQtyBlock.classList.remove('singleqty')
        productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_desc_qty_block').classList.remove('singleqty')
        var id = productBlock.getAttribute('data-id');
        var qty = parseInt(elQtyInput1.value);
        var bundle_id = productBlock.getAttribute('data-bundle_id');
        var main_id = productBlock.getAttribute('data-main_id');
        var pname = productBlock.querySelector('.inc_product_desc_title_text').innerText;
        var pprice = productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$', '');
        if (elAddText.textContent == "Added" || elAddText.textContent == "Update" || elAddText.textContent == INC.config.AddedText || elAddText.textContent == INC.config.UpdateText) {
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
    var product0Obj = INC.dataStore.methods().getProductopt0Obj(findObj);

    var productSizesObj = INC.dataStore.methods().getProductSizesObj(findObj);

    var productColorsObj = INC.dataStore.methods().getProductColorsObj(findObj);

    var product3Obj = INC.dataStore.methods().getProductopt3Obj(findObj);

    var product4Obj = INC.dataStore.methods().getProductopt4Obj(findObj);

    elAtt0ListBlock.innerHTML = "";
    elAttSizeListBlock.innerHTML = "";
    elAttColorListBlock.innerHTML = "";
    elAtt3ListBlock.innerHTML = "";


    if (product0Obj.att0Array.length > 0) {
        if (product0Obj["att0Array"][0].code != "Color") {
            findObj = new INC.classes.FindObj({
                mainId: productObj.mainId
            });
            elAtt0ListBlock.innerHTML = "";
            var product0Obj = product0Obj;
            var productSizeText = "";
            if (product0Obj["att0Array"].length > 0) {
                elAtt0TitleText.innerText = product0Obj["att0Array"][0].code + ':';
                elAtt0Block.classList.add("inc_active");

                product0Obj["att0Array"].forEach(function (sizeObj) {
                    var attSizeBlock0 = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttSizeListItemBlock"]
                    });
                    var attSizeImgBlock0 = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttSizeListItemImgBlock"]
                    });
                    var attSizeImg0 = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttSizeListItemImg"]
                    });

                    attSizeImgBlock0.setAttribute('onClick', 'INC.methods.mappvariants(this,\'' + blockType + '\',"zero")')
                    // if (window.innerWidth > 830) {
                    //     elAtt0TitleTextSelected.innerText = "Please select your Size"
                    //     if (elAtt0TitleTextSelected.innerText == "Please select your Size") {
                    //         elAtt0TitleTextSelected.setAttribute('style', 'color:#FF0000')
                    //     }
                    // }

                    if (true) {
                        elAtt0TitleTextSelected.innerText = "Please select the " + product0Obj["att0Array"][0].code;
                        elAtt0TitleTextSelected.setAttribute('style', 'color:#FF0000 !important')
                        if (elAtt0TitleTextSelected.innerText == "Please select your Size") {
                            elAtt0TitleTextSelected.setAttribute('style', 'color:#FF0000')
                        }

                    }

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
        if (productSizesObj["sizeArray"][0].code != "Color") {
            findObj = new INC.classes.FindObj({
                mainId: productObj.mainId
            });

            elAttSizeListBlock.innerHTML = "";
            var productSizeText = "";

            if (productSizesObj["sizeArray"].length > 0) {
                elAttSizeTitleText.innerText = productSizesObj["sizeArray"][0].code;
                elAttSizeBlock.classList.add("inc_active");
                productSizesObj["sizeArray"].forEach(function (sizeObj) {
                    var attSizeBlock = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttSizeListItemBlock"]
                    });
                    var attSizeImgBlock = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttSizeListItemImgBlock"]
                    });
                    var attSizeImg = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttSizeListItemImg"]
                    });
                    elAttSizeTitleTextSelected.innerText = "Please select option"
                    if (elAttSizeTitleTextSelected.innerText == "Please select option") {
                        elAttSizeTitleTextSelected.setAttribute('style', 'color:#FF0000')
                    }
                    attSizeImgBlock.classList.add('avail')
                    attSizeImgBlock.setAttribute('onClick', 'INC.methods.mappvariants(this,\'' + blockType + '\',"size")')
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
            productColorsObj["colorArray"].forEach(function (colorObj) {
                elAttColorBlock.classList.add("inc_active");
                elAttColorTitleText.innerText = "Color :";
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

                attColorImg.style.backgroundColor = colorObj["colorCode"];
                attColorImgBlock.setAttribute('onClick', 'INC.methods.mappvariants(this,\'' + blockType + '\',"color")')
                if (true) {
                    elAttColorTitleTextSelected.innerText = "Please select a Color"
                    if (elAttColorTitleTextSelected.innerText == "Please select a Color") {
                        elAttColorTitleTextSelected.setAttribute('style', 'color:#FF0000')
                    }
                }
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
                colorTitle.addEventListener('click', function (e) {
                    e.preventDefault();
                })
                attColorImg.appendChild(colorTitle);
                attColorImg.classList.add(colorObj["text"].toLowerCase().replace(' ', '-'));
                attColorImg.style.backgroundColor = colorObj["text"];
                attColorImgBlock.setAttribute('data-color', colorObj["text"]);
                attColorImgBlock.setAttribute("datacolor", colorObj["text"].toLocaleLowerCase());
                attColorImgBlock.setAttribute('data-option', "0");


                attColorImgBlock.appendChild(attColorImg);
                attColorBlock.appendChild(attColorImgBlock);
                elAttColorListBlock.appendChild(attColorBlock);
                var prod_id = productBlock.getAttribute('data-main_id');
                if (one_attr_flag == true) {
                    setTimeout(function () {
                        if (INC.methods.getProductIdFromWebPage() == prod_id) {
                            attColorImgBlock.click()
                        }
                    }, 0)
                }
            });

        }
    }
    if (product3Obj.att3Array.length > 0) {
        if (product3Obj["att3Array"][0].code != "Color") {
            findObj = new INC.classes.FindObj({
                mainId: productObj.mainId
            });

            elAtt3ListBlock.innerHTML = "";
            var productSizeText = "";
            if (product3Obj["att3Array"].length > 0) {
                product3Obj["att3Array"].forEach(function (sizeObj) {
                    elAtt3TitleTextSelected.innerText = "Please select option"
                    if (elAtt3TitleTextSelected.innerText == "Please select option") {
                        elAtt3TitleTextSelected.setAttribute('style', 'color:#FF0000')
                    }
                    elAtt3TitleText.innerText = product3Obj["att3Array"][0].code;
                    elAtt3Block.classList.add("inc_active");
                    var attSizeBlock3 = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttthirdListItemBlock"]
                    });
                    var attSizeImgBlock3 = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttthirdListItemImgBlock"]
                    });
                    var attSizeImg3 = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttthirdListItemImg"]
                    });

                    attSizeImgBlock3.setAttribute('onClick', 'INC.methods.mappvariants(this,\'' + blockType + '\',"third")')
                    attSizeImgBlock3.classList.add('avail')

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

    if (window.innerWidth > 810) {
        if (product0Obj["att0Array"].length > 0) {
            elAtt0TitleTextSelected.addEventListener('click', function () {
                this.parentNode.parentNode.parentNode.classList.toggle('show_dropdown')
            })
        }
    }

    var sizezero = INC.dataStore.methods().getProductopt0Obj(findObj)
    if (productColorsObj["colorArray"].length == 0 && sizezero["att0Array"].length == 0) {
        elAttBlock.classList.add('attributes_not_avail')
        eladdvarianttext.textContent = "Add"
        switch (blockType) {
            case "pdp":
                eladdvarianttext.textContent = "Add to Bundle";
                break;
            case "sidebar":
                eladdvarianttext.textContent = "Add to Basket";
                break;
            case "am":
                eladdvarianttext.textContent = "Add to Basket";
                break;
        }
        eladdvarianttext.classList.add('simple')
    } else if (productColorsObj["colorArray"].length > 0) {
        elAttBlock.classList.add('attributes_avail')
        elAttSizeTitleText.textContent = "View colours";
        eladdvarianttext.textContent = "Select Option";
        eladdvarianttext.classList.add('config')
        elconfigtitle.textContent = "Please select a Color";

        switch (blockType) {
            case "pdp":
                elvariantaddbtntext.textContent = "Add to Bundle";
                break;
            case "sidebar":
                elvariantaddbtntext.textContent = "Add to Basket";
                break;
            case "am":
                elvariantaddbtntext.textContent = "Add to Cart";
                break;
        }
    } else if (sizezero["att0Array"].length > 0) {
        eladdvarianttext.textContent = "Select Option";
        eladdvarianttext.classList.add('config')
        elAttBlock.classList.add('attributes_avail')
        elAttSizeTitleText.textContent = "View Sizes";
        elconfigtitle.textContent = "Please select your Size";
        switch (blockType) {
            case "pdp":
                elvariantaddbtntext.textContent = "Add to Bundle";
                break;
            case "sidebar":
                elvariantaddbtntext.textContent = "Add to Basket";
                break;
            case "am":
                elvariantaddbtntext.textContent = "Add to Cart";
                break;
        }
    }



    elvariantaddbtn.addEventListener('click', function () {
        if ((this.textContent.trim() == "Update" || this.parentNode.classList.contains('config_avail') == true) && this.innerText.trim() != "Add to Basket") {
            var moduleblk = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
            var flag_check = INC.methods.checkVariantSelection(moduleblk)
            if (flag_check == 1 || flag_check == 3) {
                if (document.querySelector('.inc_product_modal_block.inc_active') == null && document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                    document.querySelector('html').classList.remove('inc_overlay')
                }
                this.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()
                this.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()
                var delayset = 0


                productBlock.classList.remove('show_overlay')
                if (this.textContent.trim() == "Add") {
                    this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
                    // document.querySelector('html').classList.add('inc_popup_open')
                }
            } else {
                //
                if (flag_check == 2 || flag_check == 0) {
                    if (flag_check != 0) {
                        if (this.parentNode.parentNode.querySelector('.inc_variant_tag') != null) {
                            this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select a Color";
                            this.parentNode.parentNode.querySelector('.inc_variant_tag').setAttribute('style', 'border:1px solid #E52B45;')
                        }
                    }

                    if (this.parentNode.querySelector('.inc_product_desc_add_title_text_block') != null) {
                        if (this.parentNode.getAttribute('data-color') == null && this.parentNode.getAttribute('data-zero') != null && this.parentNode.getAttribute('data-size') != null) {
                            this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select your Size and Color options";
                        } else if (this.parentNode.getAttribute('data-color') != null && this.parentNode.querySelectorAll('inc_product_desc_att_color_list_item_block.inc_active').length > 0) {
                            this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select your Size";
                        } else if (this.parentNode.getAttribute('data-zero') != null || this.parentNode.getAttribute('data-size') != null) {
                            this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select a Color";
                        }
                        this.parentNode.querySelector('.inc_product_desc_add_title_text_block').setAttribute('style', 'display:block;')
                    }

                }
            }
        } else {
            if (this.innerText.trim() == "Add to Basket" || this.innerText.trim() == "SELECT") {
                var moduleblk = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                var flag_check = INC.methods.checkVariantSelection(moduleblk)
                if (flag_check == 1 || flag_check == 3) {
                    if (document.querySelector('.inc_product_modal_block.inc_active') == null && document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                        document.querySelector('html').classList.remove('inc_overlay')
                    }
                    this.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()
                    this.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()

                    productBlock.classList.remove('show_overlay')
                    if (this.textContent.trim() == "Add to Basket" || this.textContent.trim() == "SELECT" || this.textContent.trim() == "Add") {
                        this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
                        // document.querySelector('html').classList.add('inc_popup_open')
                    }
                } else {
                    // if(this.parentNode.parentNode.querySelector('.inc_variant_tag') != null){
                    if (flag_check == 2 || flag_check == 0) {
                        if (this.parentNode.querySelector('.inc_product_desc_add_title_text_block') != null) {
                            if (this.parentNode.getAttribute('data-color') == null && this.parentNode.getAttribute('data-zero') == null && this.parentNode.getAttribute('data-size') == null) {
                                this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select your Size and Color options";
                            } else if (this.parentNode.getAttribute('data-zero') == null) {
                                this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select your Size";
                            } else if (this.parentNode.getAttribute('data-zero') != null || this.parentNode.getAttribute('data-size') != null) {
                                this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select a Color";
                            }
                            this.parentNode.querySelector('.inc_product_desc_add_title_text_block').setAttribute('style', 'display:block;')
                        }

                        if (flag_check == 0) {
                            if (this.parentNode.querySelector('.inc_product_desc_add_title_text_block') != null) {
                                this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select your size";
                                // this.parentNode.parentNode.querySelector('.inc_variant_tag').setAttribute('style','border:1px solid #E52B45;')
                            }
                        }
                    }
                    // }
                }
            } else {
                var moduleblk = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                var flag_check = INC.methods.checkVariantSelection(moduleblk)
                if (flag_check == 1 || flag_check == 3) {
                    this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
                    this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()
                    // document.querySelector('html').classList.add('inc_popup_open')

                } else {
                    if (flag_check == 2 || flag_check == 0) {
                        if (flag_check != 0) {
                            if (this.parentNode.parentNode.querySelector('.inc_variant_tag') != null) {
                                this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select a Color";
                                // this.parentNode.parentNode.querySelector('.inc_variant_tag').setAttribute('style','border:1px solid #E52B45;')
                            }
                        }

                        if (this.parentNode.querySelector('.inc_product_desc_add_title_text_block') != null) {
                            if (this.parentNode.getAttribute('data-color') == null && this.parentNode.getAttribute('data-zero') == null && this.parentNode.getAttribute('data-size') == null) {
                                this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select your Size and Color options";
                            } else if (this.parentNode.getAttribute('data-color') != null) {
                                this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select your Size";
                            } else if (this.parentNode.getAttribute('data-zero') != null || this.parentNode.getAttribute('data-size')) {
                                this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select a Color";
                            }
                            this.parentNode.querySelector('.inc_product_desc_add_title_text_block').setAttribute('style', 'display:block;')
                        }


                        if (flag_check == 0) {
                            if (this.parentNode.querySelector('.inc_product_desc_add_title_text_block') != null) {
                                this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select your size";
                                // this.parentNode.parentNode.querySelector('.inc_variant_tag').setAttribute('style','border:1px solid #E52B45;')
                            }
                        }
                    }
                }
                if (this.parentNode.classList.contains('inc_active') == false) {

                }
            }

        }
    })

    elselectoptaddbtn.addEventListener('click', function () {
        if (document.querySelector('.inc_product_desc_att_block.inc_active') != null) {
            document.querySelector('.inc_product_desc_att_block.inc_active').classList.remove('inc_active')
        }
        if (this.querySelector('.inc_product_variant_simple_text').className != 'inc_product_variant_simple_text simple') {
            document.querySelector('body').classList.add('inc_minipopup');
        }
        if (this.querySelector('.inc_product_variant_simple_text.simple') != null) {
            this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
        } else {
            if (window.innerWidth < 820 && INC.config.pageType != "cartPage") {
                // debugger
                document.querySelector('html').classList.add('inc_overlay')

                document.querySelector('body').style.overflow = "hidden"
                productBlock.classList.add('show_overlay')
                this.parentNode.querySelector('.inc_product_desc_att_block.attributes_avail').classList.add('inc_active')
            } else {
                document.querySelector('html').classList.add('inc_overlay');
                this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block').classList.add('inc_active')
            }

            if (productBlock.parentNode.parentNode.parentNode.classList.contains('inc_af_product-list_block')) {
                document.querySelector('html').classList.add('inc_overlay');
            }

            productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_info_main_block').classList.add('inc_active');

            productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_description_main_block').classList.remove('inc_active');
            if (document.querySelector('.sidebar_outer.sidebar_outer_active') != null) {
                var mainprodname = document.querySelector('.inc_col_desc_main_product_details_bk .inc_prd_desc_title_txt').innerText
                var clickprodnamne = productBlock.querySelector('.inc_product_desc_title_text').innerText
                window.dataLayer = window.dataLayer || [];
                window.dataLayer.push({
                    'event': 'GAEvent',
                    'eventCategory': 'Bundle',
                    'eventAction': 'Select Option',
                    'eventLabel': mainprodname,
                    'item': clickprodnamne
                });
                dataLayer.push({
                    'event': 'vpv',
                    'virtualPageURL': '/shop/bundle/ProductDetails/vpv',
                    'virtualPageTitle': 'Bundle Product Details Quickview VPV'
                });
            }
        }
    })
    switch (blockType) {
        case "pdp":
            elAddText.textContent = INC.config.AddText;
            break;
        case "sidebar":
            elAddText.textContent = "Add to Cart";
            break;
        case "am":
            elAddText.textContent = "Add to Cart";
            break;
    }
    elAddBlock.addEventListener("click", function () {
        //console.log("Triggeredde")
        if (productBlock.querySelector('.close_read_more') != null) {
            productBlock.querySelector('.close_read_more').click()
        }
        var productModuleBlock = productBlock.parentNode.parentNode;

        var modalProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productModalBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));
        var flag_check = INC.methods.checkVariantSelection(productModuleBlock)
        var sku = productBlock.getAttribute('data-sku');
        var mainId = productBlock.getAttribute('data-main_id');
        var main_id = productBlock.getAttribute('data-main_id');
        var bundle_id = productBlock.getAttribute('data-bundle_id');
        var pname = productBlock.querySelector('.inc_product_desc_title_text').textContent;
        var pprice = productBlock.querySelector('.inc_product_desc_price_active_text').textContent.replace('$', '');
        if (document.querySelector('.inc_pdp_product-main_block .inc_product_desc_title_text') != null) {
            var mainprodname = document.querySelector('.inc_pdp_product-main_block .inc_product_desc_title_text').innerText
        } else {
            var mainprodname = ""
        }
        var qty = parseInt(elQtyInput1.value);
        if (qty < 1) qty = 1
        var prod_card = elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        if (document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
            if (flag_check == 1 || onloadpdp == false || onloadpdp_delete == false) {
                switch (elAddText.textContent) {
                    case "Add":
                        elAddText.textContent = "Added";
                        elAddText.classList.add('added');
                        productDescAddText.textContent = "Added"
                        elAddText.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').classList.add('Inc_checked');
                        modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).textContent = "Update";
                        var pListItemBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + "[data-main_id=\"" + mainId + "\"]");
                        if (pListItemBlock != null) {
                            pListItemBlock.classList.add('product_added');
                            pListItemBlock.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemAddedBtnImg")).classList.add("checked");
                        }
                        if (flag_check == 2) {
                            // document.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').textContent = "Please select a Color"
                        }
                        elAddImg.classList.add("checked");
                        modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.add("checked");
                        if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({
                            sku: sku,
                            qty: qty
                        }, "add", main_id, bundle_id, pname, pprice);

                        if (prod_card != null) {
                            if (prod_card.querySelector('.inc_product_modal_block.inc_active') != null) {
                                prod_card.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                            }
                        }
                        productModuleBlock.querySelector('.inc_product_variant_simple_block').classList.add('added_inc')
                        productModuleBlock.querySelector('.inc_product_desc_qty_add_btn_block').classList.add('added_inc')
                        if (productModuleBlock.querySelector('.inc_product_desc_qty_add_btn_block .inc_add_text') != null) {
                            productModuleBlock.querySelector('.inc_product_desc_qty_add_btn_block .inc_add_text').innerText = "Added to Bundle";
                        }
                        productModuleBlock.querySelector('.inc_product_add_block').classList.add('added_inc')
                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_add_block').classList.add('added_inc')
                        productModuleBlock.querySelector('.inc_product_desc_att_variant_text').textContent = "Update"
                        productModuleBlock.querySelector('.inc_product_variant_simple_text').textContent = productModuleBlock.querySelector('.inc_product_variant_simple_text').getAttribute('title')
                        //dataLayer track
                        if (INC.config.sumarybtnrem == false && onloadpdp == true) {
                            window.dataLayer = window.dataLayer || [];
                            window.dataLayer.push({
                                'event': 'GAEvent',
                                'eventCategory': 'Bundle',
                                'eventAction': 'added', //Track added or removed
                                'eventLabel': mainprodname, // main product
                                'item': pname //track item clicked on frequently bought together
                            });
                        }
                        break;
                    case "Added":
                        if (modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).textContent != "Update" && prod_card.querySelector('.inc_product_modal_block.inc_active') != null) {
                            elAddText.textContent = "Add";
                            productDescAddText.textContent = "Add to Bundle"
                            elAddText.classList.remove('added');
                            elAddText.parentNode.parentNode.classList.remove('Inc_checked');
                            modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).textContent = "Add to Bundle";
                            var pListItemBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + "[data-main_id=\"" + mainId + "\"]");
                            if (pListItemBlock != null) {
                                pListItemBlock.classList.remove('product_added');
                                pListItemBlock.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemAddedBtnImg")).classList.remove("checked");
                            }
                            elAddImg.classList.remove("checked");
                            modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.remove("checked");
                            if (productModuleBlock.querySelector('.inc_product_variant_simple_text.simple') != null) {
                                productModuleBlock.querySelector('.inc_product_variant_simple_text.simple').textContent = "Add to Bundle"
                            } else {
                                // console.log(productModuleBlock.querySelector('.inc_product_variant_simple_text').getAttribute('title'))
                                productModuleBlock.querySelector('.inc_product_variant_simple_text').textContent = "Select Option";

                            }
                            if (productModuleBlock.querySelector('.inc_product_variant_simple_block') != null) {
                                productModuleBlock.querySelector('.inc_product_variant_simple_block').classList.remove('added_inc')
                            }
                            productModuleBlock.querySelector('.inc_product_desc_qty_add_btn_block').classList.remove('added_inc')
                            productModuleBlock.querySelector('.inc_product_add_block').classList.remove('added_inc')
                            productModuleBlock.querySelector('.inc_product_modal_block .inc_product_add_block').classList.remove('added_inc')
                            productModuleBlock.querySelector('.inc_product_desc_att_variant_text').textContent = "Add to Bundle"
                            if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({
                                sku: sku,
                                qty: qty
                            }, "sub", main_id, bundle_id, pname, pprice);
                            if (INC.config.sumarybtnrem == false) {
                                window.dataLayer = window.dataLayer || [];
                                window.dataLayer.push({
                                    'event': 'GAEvent',
                                    'eventCategory': 'Bundle',
                                    'eventAction': 'removed', //Track added or removed
                                    'eventLabel': mainprodname, // main product
                                    'item': pname //track item clicked on frequently bought together
                                });
                            }
                        } else {
                            if (prod_card.querySelector('.inc_product_modal_block.inc_active') == null) {
                                elAddText.textContent = "Add";
                                productDescAddText.textContent = "Add to Bundle"
                                elAddText.classList.remove('added');
                                elAddText.parentNode.parentNode.classList.remove('Inc_checked');
                                modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).textContent = "Add to Bundle";
                                var pListItemBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + "[data-main_id=\"" + mainId + "\"]");
                                if (pListItemBlock != null) {
                                    pListItemBlock.classList.remove('product_added');
                                    pListItemBlock.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemAddedBtnImg")).classList.remove("checked");
                                }
                                if (productModuleBlock.querySelector('.inc_product_variant_simple_text.simple') != null) {
                                    productModuleBlock.querySelector('.inc_product_variant_simple_text.simple').textContent = "Add to Bundle"
                                } else {
                                    productModuleBlock.querySelector('.inc_product_variant_simple_text').textContent = "Select Option";
                                }
                                if (productModuleBlock.querySelector('.inc_product_variant_simple_block') != null) {
                                    productModuleBlock.querySelector('.inc_product_variant_simple_block').classList.remove('added_inc')
                                }
                                productModuleBlock.querySelector('.inc_product_desc_qty_add_btn_block').classList.remove('added_inc')
                                productModuleBlock.querySelector('.inc_product_add_block').classList.remove('added_inc')
                                productModuleBlock.querySelector('.inc_product_modal_block .inc_product_add_block').classList.remove('added_inc')
                                productModuleBlock.querySelector('.inc_product_desc_att_variant_text').textContent = "Add to Bundle"
                                elAddImg.classList.remove("checked");
                                modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.remove("checked");
                                if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({
                                    sku: sku,
                                    qty: qty
                                }, "sub", main_id, bundle_id, pname, pprice);
                                if (INC.config.sumarybtnrem == false) {
                                    window.dataLayer = window.dataLayer || [];
                                    window.dataLayer.push({
                                        'event': 'GAEvent',
                                        'eventCategory': 'Bundle',
                                        'eventAction': 'removed', //Track added or removed
                                        'eventLabel': mainprodname, // main product
                                        'item': pname //track item clicked on frequently bought together
                                    });
                                }
                            }
                        }
                        if (prod_card != null) {

                            if (prod_card.querySelector('.inc_product_modal_block.inc_active') != null) {
                                prod_card.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                            }
                        }
                        break;
                }
            } else {
                if (document.querySelector('.inc_product_modal_block.inc_active') == null) {
                    if (document.querySelector('.inc_pdp_bundle_block.inc_active .inc_pdp_bundle_cart_title_img_block') != null) {
                        document.querySelector('.inc_pdp_bundle_block.inc_active .inc_pdp_bundle_cart_title_img_block').click()
                    }
                    if (window.innerWidth < 820) {
                        productModuleBlock.querySelector('.inc_product_variant_simple_text').click()
                    } else {
                        productModuleBlock.querySelector('.inc_product_variant_simple_block').click()
                    }
                    switch (elAddText.textContent) {
                        case "Add":
                            if (document.querySelector('.inc_product_modal_block.inc_active') == null) {
                                if (window.innerWidth < 820) {
                                    productModuleBlock.querySelector('.inc_product_variant_simple_text').click()
                                } else {
                                    productModuleBlock.querySelector('.inc_product_details_prod_block').click()
                                }
                            }
                            if (productModuleBlock.querySelector('.inc_product_variant_simple_text').getAttribute('title') != null) {
                                productModuleBlock.querySelector('.inc_product_variant_simple_text').textContent = productModuleBlock.querySelector('.inc_product_variant_simple_text').getAttribute('title');
                            }
                            break;
                        case "Added":
                            if (modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).textContent != "Update" && prod_card.querySelector('.inc_product_modal_block.inc_active') != null) {
                                elAddText.textContent = "Add";
                                productDescAddText.textContent = "Add to Bundle"
                                elAddText.classList.remove('added');
                                elAddText.parentNode.parentNode.classList.remove('Inc_checked');
                                modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).textContent = "Add to Bundle";
                                var pListItemBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + "[data-main_id=\"" + mainId + "\"]");
                                if (pListItemBlock != null) {
                                    pListItemBlock.classList.remove('product_added');
                                    pListItemBlock.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemAddedBtnImg")).classList.remove("checked");
                                }
                                elAddImg.classList.remove("checked");
                                modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.remove("checked");
                                if (productModuleBlock.querySelector('.inc_product_variant_simple_text.simple') != null) {
                                    productModuleBlock.querySelector('.inc_product_variant_simple_text.simple').textContent = "Add to Bundle"
                                } else {
                                    productModuleBlock.querySelector('.inc_product_variant_simple_text').textContent = "Select Option";
                                }
                                if (productModuleBlock.querySelector('.inc_product_variant_simple_block') != null) {
                                    productModuleBlock.querySelector('.inc_product_variant_simple_block').classList.remove('added_inc')
                                }
                                productModuleBlock.querySelector('.inc_product_desc_qty_add_btn_block').classList.remove('added_inc')
                                productModuleBlock.querySelector('.inc_product_add_block').classList.remove('added_inc')
                                productModuleBlock.querySelector('.inc_product_modal_block .inc_product_add_block').classList.remove('added_inc')
                                productModuleBlock.querySelector('.inc_product_desc_att_variant_text').textContent = "Add to Bundle"
                                if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({
                                    sku: sku,
                                    qty: qty
                                }, "sub", main_id, bundle_id, pname, pprice);
                                if (INC.config.sumarybtnrem == false) {
                                    window.dataLayer = window.dataLayer || [];
                                    window.dataLayer.push({
                                        'event': 'GAEvent',
                                        'eventCategory': 'Bundle',
                                        'eventAction': 'removed', //Track added or removed
                                        'eventLabel': mainprodname, // main product
                                        'item': pname //track item clicked on frequently bought together
                                    });
                                }
                            } else {
                                if (prod_card.querySelector('.inc_product_modal_block.inc_active') == null) {
                                    // prod_card.querySelector('.inc_product_variant_simple_text').click()
                                    elAddText.textContent = "Add";
                                    productDescAddText.textContent = "Add to Bundle"
                                    elAddText.classList.remove('added');
                                    elAddText.parentNode.parentNode.classList.remove('Inc_checked');
                                    modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddText")).textContent = "Add to Bundle";
                                    var pListItemBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + "[data-main_id=\"" + mainId + "\"]");
                                    if (pListItemBlock != null) {
                                        pListItemBlock.classList.remove('product_added');
                                        pListItemBlock.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemAddedBtnImg")).classList.remove("checked");
                                    }
                                    if (productModuleBlock.querySelector('.inc_product_variant_simple_text.simple') != null) {
                                        productModuleBlock.querySelector('.inc_product_variant_simple_text.simple').textContent = "Add to Bundle"
                                    } else {
                                        productModuleBlock.querySelector('.inc_product_variant_simple_text').textContent = "Select Option";
                                    }
                                    if (productModuleBlock.querySelector('.inc_product_variant_simple_block') != null) {
                                        productModuleBlock.querySelector('.inc_product_variant_simple_block').classList.remove('added_inc')
                                    }
                                    productModuleBlock.querySelector('.inc_product_desc_qty_add_btn_block').classList.remove('added_inc')
                                    productModuleBlock.querySelector('.inc_product_add_block').classList.remove('added_inc')
                                    productModuleBlock.querySelector('.inc_product_modal_block .inc_product_add_block').classList.remove('added_inc')
                                    productModuleBlock.querySelector('.inc_product_desc_att_variant_text').textContent = "Add to Bundle"
                                    elAddImg.classList.remove("checked");
                                    modalProductBlock.querySelector(getSelectorClassName(classNames, "productAddImg")).classList.remove("checked");
                                    if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({
                                        sku: sku,
                                        qty: qty
                                    }, "sub", main_id, bundle_id, pname, pprice);
                                    if (INC.config.sumarybtnrem == false) {
                                        window.dataLayer = window.dataLayer || [];
                                        window.dataLayer.push({
                                            'event': 'GAEvent',
                                            'eventCategory': 'Bundle',
                                            'eventAction': 'removed', //Track added or removed
                                            'eventLabel': mainprodname, // main product
                                            'item': pname //track item clicked on frequently bought together
                                        });
                                    }
                                }
                            }
                            if (prod_card != null) {
                                setTimeout(function () {
                                    if (prod_card.querySelector('.inc_product_modal_block.inc_active') != null) {
                                        prod_card.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                                    }
                                }, 100)
                            }
                            break;
                    }
                    // productModuleBlock.querySelector('.inc_product_details_prod_block').click()
                }
            }
        } else {
            if (flag_check == 1) {
                elAddText.textContent = "Adding...";

                elAddText.parentNode.parentNode.setAttribute("style", "pointer-events: none;opacity: 0.5;");
            } else {
                if (document.querySelector('.inc_product_modal_block.inc_active') == null) {
                    productModuleBlock.querySelector('.inc_product_details_prod_block').click()
                }
            }
        }
    });


    if (window.innerWidth < 820) {
        var qty_text = document.createElement('label')
        qty_text.innerText = "Quantity";
        // var ref = inc_product_qty_down_block
        var qty_block = productBlock.querySelector('.inc_product_desc_qty_add_btn_block .inc_product_qty_block');
        qty_block.insertBefore(qty_text, qty_block.firstChild);
        var ref = productBlock.querySelector('.inc_product_desc_att_details_block .inc_product_desc_att_block .inc_product_desc_att_edit_block');
        // qty_block.appendChild(qty_text);
        ref.parentNode.insertBefore(qty_block, ref);
    }

    return productBlock;
}

INC.methods.createProductModalBlock = function (pdpProductId, blockType, bundleProductListCheck, parentblock) {
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
    productBlock.classList.add(productObj.ProductType)

    var main_prod_id = productObj.mainId

    function getViewElement(className) {
        return productBlock.querySelector(getSelectorClassName(classNames, className));
    }

    var elHeader = getViewElement("productHeaderBlock");
    var productHeaderMainBlock = getViewElement("productHeaderMainBlock");

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
    var elproductPriceBlock = getViewElement("productPriceBlock");

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
    var elworthPrice = getViewElement("productPriceWorthText");
    var elGalleryRightArrow = getViewElement("productImgGalleryRightBlock");
    var elGallerylefttArrow = getViewElement("productImgGalleryLeftBlock");
    var fulldescblock = getViewElement("productInfoFullDescBlock");
    var fullDescHeaderText = getViewElement("productInfoFullDescDescHeaderText")
    var fullDescShippingHeaderText = getViewElement("productInfoFullDescShippingHeaderText")
    var fullDescShippingText = getViewElement("productInfoFullDescShippingText")
    var productDescriptionMainBlock = getViewElement("productDescriptionMainBlock");

    var productHeaderMainBlockTitle = getViewElement("productHeaderMainBlockTitle")
    var productHeaderMainBlockRating = getViewElement("productHeaderMainBlockRating")

    var elcolortitleblock = getViewElement("productAttColorTitleBlock");
    var elsizetitleblock = getViewElement("productAttzeroTitleBlock");

    var eldescrpionblock = getViewElement("productDescBlock");
    var productDescQtyBlock = getViewElement("productDescQtyBlock");
    var productDescQtyInputText = getViewElement("productDescQtyInputText");
    var productDescQtyUp = getViewElement("productDescQtyUpBlock");
    var productDescQtyDown = getViewElement("productDescQtyDownBlock");

    // var elproductPriceLabel = getViewElement("productPriceLabel");
    // elproductPriceLabel.innerHTML = "SALE"

    // if (productObj.manufacturer != null || productObj.manufacturer != '') {
    //     var manufacturer = document.createElement('div');
    //     manufacturer.classList.add('inc_manufacturer_details');
    //     manufacturer.textContent = productObj.manufacturer;
    //     productHeaderMainBlockTitle.parentNode.insertBefore(manufacturer, productHeaderMainBlockTitle);
    // }

    productHeaderMainBlock.querySelector(getSelectorClassName(classNames, "productHeaderImgBlock")).addEventListener("click", function () {

        if (document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
            document.querySelector('html').classList.remove('inc_overlay');
            document.querySelector('body').classList.remove('inc_popup_open');
        }
        if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
            document.querySelector('.inc_sidebar_modal_block.inc_active').classList.remove('overflow_visible')
        }
        if (productBlock.querySelector('.close_read_more') != null) {
            productBlock.querySelector('.close_read_more').click()
        }
        if (productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_text input') != null && productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_qty_input_text input') != null) {
            if (productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_text input').value != productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_qty_input_text input').value) {
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_text input').value = productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_qty_input_text input').value
            }
        }
        productBlock.parentNode.classList.remove("inc_active");
        productBlock.parentNode.querySelector('.inc_product_header_title_block').classList.add('inc_active');
        productBlock.parentNode.querySelector('.inc_product_header_title_block_1').classList.remove('inc_active');
        if (document.querySelector('.inc_product_modal_block.inc_active') == null) {
            // document.querySelector('html').classList.remove('inc_overlay')
            // document.querySelector('body').setAttribute('style', 'overflow:auto')
        }
    });

    var elImgMainImg = elImgBlock.querySelector(getSelectorClassName(classNames, "productImgMainImg"));
    var elImgTag1 = this.generateHTMLTags('img', {
        src: productObj.imageURLMain
    });
    if (elImgTag1 == true) {
        elImgTag1.src = productObj.imageURLMain
    }
    elImgTag1.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
    elImgTag1.setAttribute('role', 'img')
    elImgTag1.setAttribute('aria-label', 'Image')
    elImgTag1.setAttribute('alt', productObj.nameMain.toLocaleLowerCase())



    if (window.innerWidth < 820) {
        if (productObj.otherImageList != null && productObj.otherImageList.length < 2) {
            elGalleryRightArrow.style.display = 'none';
            elGallerylefttArrow.style.display = 'none';
        }
    } else {
        if (productObj.otherImageList != null && productObj.otherImageList.length < 6) {
            elGalleryRightArrow.style.display = 'none';
            elGallerylefttArrow.style.display = 'none';
        }
    }


    var productLink = document.createElement('a');
    productLink.target = "_blank";
    productLink.href = productObj.url;
    productLink.appendChild(elImgTag1);
    productLink.style.cursor = 'pointer';
    // productLink.target = '_blank';
    productLink.setAttribute('otherImageList', productObj["otherImageList"])
    productLink.setAttribute('imageURL', productObj["imageURLMain"])
    add_swipe(productLink)



    elImgMainImg.appendChild(productLink);
    elImgMainImg.addEventListener("click", function () {
        INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
        getTrackingPixel();
    });

    elImgGalleryListBlock.innerHTML = "";

    if ((productObj.otherImageList != null) && productObj.otherImageList.length > 1) {
        var otimg = 0

        productObj.otherImageList.forEach(function (otherImgURL) {
            otherImgURL = otherImgURL;
            var elOtherImgTag = INC.methods.generateHTMLTags('img', {
                src: otherImgURL
            });
            if (elOtherImgTag == true) {
                elOtherImgTag.src = otherImgURL
            }
            elOtherImgTag.setAttribute('alt', productObj.name)
            elOtherImgTag.setAttribute('role', 'img')
            elOtherImgTag.setAttribute('aria-label', 'Image')
            elOtherImgTag.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");

            var elImgGalleryListItemBlock = INC.methods.getElementChilds("productImgGalleryListItemBlock", blockType);

            var elImgGalleryListItemImg = elImgGalleryListItemBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemImg"));
            elImgGalleryListItemBlock.setAttribute('index', otimg)
            if (productObj.otherImageList.length > 4) {
                elImgGalleryListItemImg.classList.add('OthImg4');
            }

            elImgGalleryListItemImg.appendChild(elOtherImgTag);

            elImgGalleryListItemBlock.addEventListener("click", function () {
                Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productImgGalleryListItemBlock")), function (galleryListItemBlock) {
                    galleryListItemBlock.classList.remove("inc_active");
                });

                elImgGalleryListItemBlock.classList.add("inc_active");

                elImgMainImg.querySelector('img').src = otherImgURL;
                elImgMainImg.querySelector('img').setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
            })

            elImgGalleryListBlock.appendChild(elImgGalleryListItemBlock);
            if (otimg == 0) {
                elImgGalleryListItemBlock.classList.add('inc_active')
            }
            otimg++;
            if (productObj.otherImageList.length > 5) {
                elImgGalleryListItemBlock.parentNode.classList.add("flex-start")
            }
        });

        // elImgGalleryListBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemBlock")).click();
    }

    elTitleBlock.addEventListener("click", function () {
        INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
        getTrackingPixel();
    });

    var pTitleDiv = document.createElement('div');
    pTitleDiv.innerText = productObj.nameMain;


    var pLinkModal = document.createElement('a');
    pLinkModal.setAttribute("title", productObj.nameMain);
    pLinkModal.setAttribute("href", productObj.url);
    pLinkModal.setAttribute("target", "_blank");
    pLinkModal.innerText = productObj.nameMain;
    productHeaderMainBlockTitle.appendChild(pLinkModal)
    pLinkModal.addEventListener("click", function () {
        INC.methods.sendBundleClickTracking(productObj.mainId);
        getTrackingPixel()
    });

    var field1 = productObj.ratingsCount
    var field2 = productObj.reviewsCount

    INC.methods.get_product_ratings(field1, field2, elratingsBlock);

    var productHeaderMainBlockRatingDiv = document.createElement('div');

    productHeaderMainBlockRatingDiv.innerHTML = productBlock.querySelector('.inc_product_desc_ratings_block').innerHTML
    var classList = productBlock.querySelector('.inc_product_desc_ratings_block').className.split(' ')
    //classList.split('');
    productHeaderMainBlockRatingDiv.classList.add(classList[0])
    if (classList[1] != undefined) {
        productHeaderMainBlockRatingDiv.classList.add(classList[1])
    }
    productHeaderMainBlockRating.appendChild(productHeaderMainBlockRatingDiv);
    var pLinkModalSKU = document.createElement('span');
    pLinkModalSKU.classList.add("product_modal_sku");
    pLinkModalSKU.innerText = "#" + productObj.sku
    productHeaderMainBlockRating.appendChild(pLinkModalSKU)

    var pLink = document.createElement('a');
    pLink.href = productObj.url;
    pLink.setAttribute('style', 'text-transform: unset;')
    pLink.setAttribute('title', productObj.nameMain)
    pLink.appendChild(pTitleDiv);
    elTitleText.appendChild(pLink);


    var totalsaveprc = get_discount_price(productObj.regularPriceMain, productObj.activePriceMain)

    var activePrice = parseFloat(productObj.activePriceMain).toFixed(2).toString();
    var regularPrice = parseFloat(productObj.regularPriceMain).toFixed(2).toString();
    // var worthPrice = parseFloat(productObj.worthPrice).toFixed(2).toString();

    elPriceRegularText.innerText = "";
    if (productObj.ProductType != "simple") {
        var priceRange = get_child_product_prices(productObj.mainId)
        if (priceRange.innerText.split(',')[0] != priceRange.innerText.split(',')[1] && priceRange.innerText.split(',')[1] != undefined) {
            elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_price')
            elPriceActiveText.innerHTML = priceRange.innerText.split(',')[0]
            elPriceRegularText.innerHTML = "was " + priceRange.innerText.split(',')[1]
        } else {
            elPriceActiveText.innerHTML = priceRange.innerText.split(',')[0]
        }
    } else {
        if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
            elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_price')
            if (productObj.pricingCount != "") {
                elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(activePrice)
                elPriceRegularText.innerHTML = "<span>" + "WAS" + "</span>" + INC.clientConfig.regularPricePrefix + INC.clientConfig.currencySymbol + formatter.format(regularPrice)
            } else {
                elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(activePrice)
                elPriceRegularText.innerHTML = "<span>" + "WAS" + "</span>" + INC.clientConfig.regularPricePrefix + INC.clientConfig.currencySymbol + formatter.format(regularPrice)
            }
            // elworthPrice.innerHTML = "Save " + formatter.format(totalsaveprc);
        } else {
            if (productObj.pricingCount != "") {
                elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(activePrice)
            } else {
                elPriceActiveText.innerText = INC.clientConfig.currencySymbol + formatter.format(activePrice)
            }
            // elworthPrice.innerHTML = "";
        }
    }

    // if (productObj.PromotionalMessage != null) {
    //     if (productObj.PromotionalMessage.toLocaleLowerCase().includes('sale')) {
    //         elworthPrice.innerHTML = "Save " + formatter.format(totalsaveprc);
    //         elPriceActiveText.classList.add('inc_sale');
    //     } else if(productObj.PromotionalMessage.toLocaleLowerCase().includes('new in')) {
    //         elproductPriceLabel.style.display = 'none';
    //         elworthPrice.innerHTML = productObj.PromotionalMessage;
    //         elworthPrice.classList.add('new-inc');
    //     }else{
    //         elproductPriceLabel.style.display = 'none';
    //         elworthPrice.innerHTML = productObj.PromotionalMessage;
    //     }
    // } else {
    //     elproductPriceLabel.style.display = 'none';
    //     elworthPrice.style.display = 'none';
    // }


    if (productBlock.querySelector('.pc_promo_div') == null && productObj.ProductLevelDiscountMessage != null && productObj.ProductLevelDiscountMessage != "") {
        var ec_promo_div_main = document.createElement('div');
        ec_promo_div_main.classList.add('ec_promo_div_main')
        var ec_promo_div = document.createElement('div');
        ec_promo_div.classList.add('pc_promo_div')
        if (productObj.offer != "" && productObj.offer != null) {
            var offer_block = document.createElement('div')
            offer_block.classList.add('inc_offer_block')
            var offer_text = document.createElement('a')
            offer_text.setAttribute('href', productObj.offer);
            offer_text.setAttribute('target', 'target');
            offer_text.classList.add('inc_offer_text')
            offer_text.innerText = "Offers"
            offer_block.appendChild(offer_text)
        }
        if (productObj.ProductLevelDiscountMessage.split("|")[0] != "" && productObj.ProductLevelDiscountMessage.split("|")[0] != "null" && productObj.ProductLevelDiscountMessage.split("|")[0] != "undefined") {
            ec_promo_div.classList.add('inc_active')
        }
        var ec_promo_span = document.createElement('span');
        ec_promo_span.classList.add('pc_promo_span')

        ec_promo_span.classList.add('red_promo')
        if (productObj.ProductLevelDiscountMessage.split("|")[0] != "null" && productObj.ProductLevelDiscountMessage.split("|")[0] != "undefined") {
            ec_promo_span.innerHTML = productObj.ProductLevelDiscountMessage.split("|")[0]
        }
        ec_promo_div.appendChild(ec_promo_span);



        var inc_avail_offer_block = document.createElement('div');
        inc_avail_offer_block.classList.add('inc_avail_offer_block')
        var in_available_offer = document.createElement('div');
        in_available_offer.innerText = "Available Offer"
        in_available_offer.setAttribute('style', 'margin-bottom: 8px;padding-bottom: 2px;border-bottom: 1px solid #e0e0e0;font-size: 14px;font-family: FuturaPT-Book, futura-pt, Futura, Arial;display: block;')
        in_available_offer.classList.add('in_available_offer')
        inc_avail_offer_block.appendChild(in_available_offer);


        if (productObj.ProductLevelDiscountMessage.split("|")[1] != undefined) {
            in_available_offer.innerText = "Available Offers"
            var ec_promo_div1 = document.createElement('div');
            ec_promo_div1.classList.add('pc_promo_div')
            if (productObj.ProductLevelDiscountMessage.split("|")[1] != "") {
                ec_promo_div1.classList.add('inc_active')
            }
            var ec_promo_span1 = document.createElement('span');
            ec_promo_span1.classList.add('pc_promo_span')

            ec_promo_span1.classList.add('red_promo')
            ec_promo_span1.innerHTML = productObj.ProductLevelDiscountMessage.split("|")[1]
            ec_promo_div1.appendChild(ec_promo_span1);

        }
        if (productObj.ProductLevelDiscountMessage.split("|")[2] != undefined) {
            in_available_offer.innerText = "Available Offers"
            var ec_promo_div2 = document.createElement('div');
            ec_promo_div2.classList.add('pc_promo_div')
            if (productObj.ProductLevelDiscountMessage.split("|")[2] != "") {
                ec_promo_div2.classList.add('inc_active')
            }
            var ec_promo_span2 = document.createElement('span');
            ec_promo_span2.classList.add('pc_promo_span')

            ec_promo_span2.classList.add('red_promo')
            ec_promo_span2.innerHTML = productObj.ProductLevelDiscountMessage.split("|")[2]
            ec_promo_div2.appendChild(ec_promo_span2);

        }

        var view = elproductPriceBlock

        if (productObj.ProductLevelDiscountMessage.split("|")[2] != undefined) {
            // view.parentNode.insertBefore(in_available_offer, view);
            ec_promo_div_main.appendChild(ec_promo_div)
            ec_promo_div_main.appendChild(ec_promo_div1)
            ec_promo_div_main.appendChild(ec_promo_div2)
            view.parentNode.insertBefore(ec_promo_div_main, view);
        } else if (productObj.ProductLevelDiscountMessage.split("|")[1] != undefined) {
            ec_promo_div_main.appendChild(ec_promo_div)
            ec_promo_div_main.appendChild(ec_promo_div1)
            view.parentNode.insertBefore(ec_promo_div_main, view);
        } else {
            // view.parentNode.insertBefore(in_available_offer, view);
            ec_promo_div_main.appendChild(ec_promo_div)
            view.parentNode.insertBefore(ec_promo_div_main, view);
        }

    } else {
        var ec_promo_div = document.createElement('div');
        ec_promo_div.classList.add('pc_promo_div')
        ec_promo_div.classList.add('empty');
        var view = elAttBlock
        if (view != null || view != undefined) {
            view.parentNode.insertBefore(ec_promo_div, view);
        }
    }

    var qty_title1 = document.createElement('label')
    qty_title1.innerText = "Quantity"
    //productDescQtyBlock
    productDescQtyBlock.parentNode.insertBefore(qty_title1, productDescQtyBlock);
    var elQtyInput1 = this.generateHTMLTags('input');
    elQtyInput1.setAttribute('type', "number");
    elQtyInput1.setAttribute('aria-label', "quantity");
    elQtyInput1.setAttribute('min', 1);
    elQtyInput1.setAttribute('max', 999);
    elQtyInput1.setAttribute('maxlength', 3);
    // elQtyInput.setAttribute('disabled', true);
    //elQtyInput1.setAttribute('readonly', '');
    elQtyInput1.value = 1;
    elQtyInput1.setAttribute('old_qty', '1');
    elQtyInput1.setAttribute('pattern', '/^-?\d+\.?\d*$/');
    elQtyInput1.setAttribute("onkeydown", "if(event.key==='.'){event.preventDefault();}");
    elQtyInput1.setAttribute('onKeyPress', 'if(this.value.length==3) return false;');
    elQtyInput1.setAttribute('oninput', "validity.valid||(value='1')");
    // elQtyInput1.setAttribute("oninput", "validity.valid||(value='');");
    // elQtyInput1.setAttribute("oninput", "validity.valid||(value='');");
    productDescQtyBlock.classList.add('singleqty')

    // debugger
    //     productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_qty_block').classList.add('singleqty')




    elQtyInput1.addEventListener("keydown", function (e) {
        var prod_card = elQtyInput1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        var key = e.keyCode;
        if (key === 32) {
            e.preventDefault();
        }
        setTimeout(function () {
            // if (elQtyInput1.value === 0) elQtyInput1.value = 1;
            // if (elQtyInput1.value < 1) elQtyInput1.value = 1;
            if (elQtyInput1.value > 100) elQtyInput1.value = 100;
            setTimeout(function () {
                if (elQtyInput1.value === 0) elQtyInput1.value = 1;
                if (elQtyInput1.value < 1) elQtyInput1.value = 1;
                if (elQtyInput1.value == "") {
                    // elQtyInput1.value = 1
                    qty = 1
                }
                if (isNaN(qty) || qty < 1) qty = 1;
                if (window.innerWidth > 820) {
                    prod_card.querySelector('.inc_product_showcase_block .inc_product_desc_qty_add_btn_block .inc_product_qty_input_text input').value = qty
                }

                // elQtyInput1.value = qty
                if (elAddText.innerText == "Added" || elAddText.innerText == "Update" || elAddText.innerText == "ADDED" || elAddText.innerText == "UPDATE") {

                    INC.methods.updateBundleCart({
                        sku: id,
                        qty: qty
                    }, "add", main_id, bundle_id, pname, pprice);
                }
                if (elQtyInput1.value == 1) {
                    productDescQtyBlock.classList.add('singleqty')
                } else {
                    productDescQtyBlock.classList.remove('singleqty')
                }
            }, 1000)
            var productModuleBlock = productBlock.parentNode.parentNode;

            var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));
            var qty = parseInt(elQtyInput1.value);
            if (!isNaN(qty)) showcaseProductBlock.querySelector('.inc_product_qty_input_text input').value = qty;

            var id = productBlock.getAttribute('data-id');

            var main_id = productBlock.getAttribute('data-main_id');
            var bundle_id = productBlock.getAttribute('data-bundle_id');
            var pname = productBlock.querySelector('.inc_product_desc_title_text').innerText;
            var pprice = productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$', '');
            // if(elQtyInput1.value == ""){
            //     elQtyInput1.value = 1
            //     qty = 1
            // }
            if (window.innerWidth > 820) {
                prod_card.querySelector('.inc_product_showcase_block .inc_product_desc_qty_add_btn_block .inc_product_qty_input_text input').value = elQtyInput1.value
            }

            if (elAddText.innerText == "Added" || elAddText.innerText == "Update" || elAddText.innerText == "ADDED" || elAddText.innerText == "UPDATE") {
                if (isNaN(qty) || qty < 1) qty = 1;
                INC.methods.updateBundleCart({
                    sku: id,
                    qty: qty
                }, "add", main_id, bundle_id, pname, pprice);
            }
            // if(elQtyInput1.value == 1){
            //     productDescQtyBlock.classList.add('singleqty')
            // }else{
            //     productDescQtyBlock.classList.remove('singleqty')
            // }
        }, 200);

    });

    productDescQtyInputText.appendChild(elQtyInput1);

    productDescQtyDown.addEventListener('click', function () {

        if (productBlock.querySelector('.close_read_more') != null) {
            productBlock.querySelector('.close_read_more').click()
        }
        var prod_card = elQtyInput1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        elQtyInput1.value = (elQtyInput1.value - 1 < 1) ? 1 : elQtyInput1.value - 1;

        if (elQtyInput1.value == 1) {
            productDescQtyBlock.classList.add('singleqty')
        }

        var productModuleBlock = productBlock.parentNode.parentNode;

        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

        showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productDescQtyBlock")).querySelector('input').value = parseInt(elQtyInput1.value);
        //prod_card.querySelector('.inc_product_showcase_block .inc_product_desc_qty_input_block input').value = elQtyInput1.value

        var id = productBlock.getAttribute('data-id');
        var sku = productBlock.getAttribute('data-sku');
        var qty = parseInt(elQtyInput1.value);
        var bundle_id = productBlock.getAttribute('data-bundle_id');
        var main_id = productBlock.getAttribute('data-main_id');
        var pname = productBlock.querySelector('.inc_product_desc_title_text').innerText;
        var pprice = productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$', '');
        if (parseInt(elQtyInput1.value) == 1 && productDescQtyBlock.classList.contains('singleqty') == true) {
            if (elAddText.textContent == "Added" || elAddText.textContent == "Update" || elAddText.textContent == INC.config.AddedText || elAddText.textContent == INC.config.UpdateText) {

                // document.querySelector('html').classList.remove('inc_overlay')
                var modal_blck = productModuleBlock.querySelector('.inc_product_modal_block')
                var showcase_blck = productModuleBlock.querySelector('.inc_product_showcase_block')
                var elAddTextshowcase = showcase_blck.querySelector('.inc_product_desc_add_text')
                var elAddTextmodal = modal_blck.querySelector('.inc_product_desc_add_text')
                if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({
                    sku: id,
                    qty: qty
                }, "add", main_id, bundle_id, pname, pprice);
            }
        } else {
            if (elAddText.textContent == "Added" || elAddText.textContent == "Update" || elAddText.textContent == INC.config.AddedText || elAddText.textContent == INC.config.UpdateText) {
                INC.methods.updateBundleCart({
                    sku: id,
                    qty: qty
                }, "add", main_id, bundle_id, pname, pprice);
            }
        }
        if (elQtyInput1.value == 1) {
            elQtyBlock.classList.add('singleqty')
            productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_desc_qty_block').classList.add('singleqty')
            productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_qty_block').classList.add('singleqty')
        }

    });

    productDescQtyUp.addEventListener('click', function () {

        if (productBlock.querySelector('.close_read_more') != null) {
            productBlock.querySelector('.close_read_more').click()
        }
        var prod_card = elQtyInput1.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
        elQtyInput1.value = (parseInt(elQtyInput1.value) + 1 > 100) ? 100 : parseInt(elQtyInput1.value) + 1;

        var productModuleBlock = productBlock.parentNode.parentNode;

        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));

        showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productDescQtyBlock")).querySelector('input').value = parseInt(elQtyInput1.value);
        productDescQtyBlock.classList.remove('singleqty')
        productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_desc_qty_block').classList.remove('singleqty')
        var id = productBlock.getAttribute('data-id');
        var qty = parseInt(elQtyInput1.value);
        var bundle_id = productBlock.getAttribute('data-bundle_id');
        var main_id = productBlock.getAttribute('data-main_id');
        var pname = productBlock.querySelector('.inc_product_desc_title_text').innerText;
        var pprice = productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$', '');
        if (elAddText.textContent == "Added" || elAddText.textContent == "Update" || elAddText.textContent == INC.config.AddedText || elAddText.textContent == INC.config.UpdateText) {
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
        elHeader.querySelector(getSelectorClassName(classNames, "productHeaderTitleText")).innerText = "Overview";
    } else {
        if (INC.dataStore.methods().getProductopt0Obj(findObj).att0Array.length > 0) {
            if (INC.dataStore.methods().getProductopt0Obj(findObj).att0Array[0] != undefined) {
                elHeader.querySelector(getSelectorClassName(classNames, "productHeaderTitleText")).innerText = "Overview";
            } else {
                elHeader.querySelector(getSelectorClassName(classNames, "productHeaderTitleText")).innerText = "Overview";
            }
        } else if (INC.dataStore.methods().getProductColorsObj(findObj).colorArray.length > 0) {
            elHeader.querySelector(getSelectorClassName(classNames, "productHeaderTitleText")).innerText = "Overview";
        }
    }

    var inc_product_header_title_block_1 = document.createElement('div');
    inc_product_header_title_block_1.classList.add('inc_product_header_title_block_1');
    var inc_product_header_title_text_block_1 = document.createElement('div');
    inc_product_header_title_text_block_1.classList.add('inc_product_header_title_text_block_1');
    var inc_product_header_title_text_1 = document.createElement('div');
    inc_product_header_title_text_1.classList.add('inc_product_header_title_text_1');
    var header_ref = elHeader
    inc_product_header_title_text_1.innerText = "Product Description";
    //console.log(elHeader.querySelector('.inc_product_header_img_block'));

    if (window.innerWidth < 820) {
        productDescriptionMainBlock.innerHTML = "<span>Product Description</span>" + productObj.description;
    } else {
        productDescriptionMainBlock.innerHTML = productObj.description;
    }


    inc_product_header_title_text_block_1.appendChild(inc_product_header_title_text_1);
    inc_product_header_title_block_1.appendChild(inc_product_header_title_text_block_1);
    header_ref.appendChild(inc_product_header_title_block_1);

    var inc_product_header_title_block = inc_product_header_title_block_1.parentNode.querySelector('.inc_product_header_title_block');

    //thrid tab
    var inc_product_header_new_page = document.createElement('div');
    inc_product_header_new_page.classList.add('inc_product_header_new_page');
    var inc_product_header_new_page_text = document.createElement('a');
    inc_product_header_new_page_text.classList.add('inc_product_header_new_page_text');
    inc_product_header_new_page_text.innerText = "Open in a new tab"
    inc_product_header_new_page_text.setAttribute("href", productObj.url)
    inc_product_header_new_page_text.setAttribute("target", "_blank")
    inc_product_header_new_page.appendChild(inc_product_header_new_page_text)
    header_ref.appendChild(inc_product_header_new_page)
    inc_product_header_new_page.addEventListener("click", function () {
        INC.methods.sendBundleClickTracking(productObj.mainId);
        getTrackingPixel()
    });

    inc_product_header_title_block_1.addEventListener('click', function () {
        this.parentNode.parentNode.parentNode.querySelector(".inc_product_description_main_block").classList.add("inc_active")
        this.parentNode.parentNode.parentNode.querySelector(".inc_product_info_main_block").classList.remove("inc_active")
        this.parentNode.querySelector('.inc_product_header_title_block').classList.remove("inc_active");
        this.classList.add("inc_active");
        var prod_desc_block = inc_product_header_title_block_1.parentNode.parentNode.parentNode;

    });

    inc_product_header_title_block.classList.add('inc_active');




    //var inc_product_header_title_block = inc_product_header_title_block_1.parentNode.querySelector('.inc_product_header_title_block');

    inc_product_header_title_block.addEventListener('click', function () {
        this.parentNode.parentNode.parentNode.querySelector(".inc_product_description_main_block").classList.remove("inc_active")
        this.parentNode.parentNode.parentNode.querySelector(".inc_product_info_main_block").classList.add("inc_active")
        var prod_desc_block = inc_product_header_title_block_1.parentNode.parentNode.parentNode;
        inc_product_header_title_block.classList.add('inc_active');
        inc_product_header_title_block_1.classList.remove('inc_active');
    });

    var product0Obj = INC.dataStore.methods().getProductopt0Obj(findObj);

    var productSizesObj = INC.dataStore.methods().getProductSizesObj(findObj);

    var productColorsObj = INC.dataStore.methods().getProductColorsObj(findObj);

    var product3Obj = INC.dataStore.methods().getProductopt3Obj(findObj);

    var product4Obj = INC.dataStore.methods().getProductopt4Obj(findObj);

    elAtt0ListBlock.innerHTML = "";
    elAttSizeListBlock.innerHTML = "";
    elAttColorListBlock.innerHTML = "";
    elAtt3ListBlock.innerHTML = "";


    if (product0Obj.att0Array.length > 0) {
        if (product0Obj["att0Array"][0].code != "Color") {
            findObj = new INC.classes.FindObj({
                mainId: productObj.mainId
            });
            elAtt0ListBlock.innerHTML = "";
            var product0Obj = product0Obj;
            var productSizeText = "";
            if (product0Obj["att0Array"].length > 0) {
                elAtt0TitleText.innerText = product0Obj["att0Array"][0].code + ':';
                elAtt0Block.classList.add("inc_active");

                product0Obj["att0Array"].forEach(function (sizeObj) {
                    var attSizeBlock0 = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttSizeListItemBlock"]
                    });
                    var attSizeImgBlock0 = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttSizeListItemImgBlock"]
                    });
                    var attSizeImg0 = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttSizeListItemImg"]
                    });

                    attSizeImgBlock0.setAttribute('onClick', 'INC.methods.mappvariants(this,\'' + blockType + '\',"zero")')
                    if (true) {
                        elAtt0TitleTextSelected.innerText = "Please select the " + product0Obj["att0Array"][0].code;
                        if (elAtt0TitleTextSelected.innerText == "Please select your Size") {
                            elAtt0TitleTextSelected.setAttribute('style', 'color:#FF0000')
                        }

                    }
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
        if (productSizesObj["sizeArray"][0].code != "Color") {
            findObj = new INC.classes.FindObj({
                mainId: productObj.mainId
            });

            elAttSizeListBlock.innerHTML = "";
            var productSizeText = "";

            if (productSizesObj["sizeArray"].length > 0) {
                elAttSizeTitleText.innerText = productSizesObj["sizeArray"][0].code;
                elAttSizeBlock.classList.add("inc_active");
                productSizesObj["sizeArray"].forEach(function (sizeObj) {
                    var attSizeBlock = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttSizeListItemBlock"]
                    });
                    var attSizeImgBlock = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttSizeListItemImgBlock"]
                    });
                    var attSizeImg = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttSizeListItemImg"]
                    });
                    elAttSizeTitleTextSelected.innerText = "Please select option"
                    if (elAttSizeTitleTextSelected.innerText == "Please select option") {
                        elAttSizeTitleTextSelected.setAttribute('style', 'color:#FF0000')
                    }
                    attSizeImgBlock.classList.add('avail')
                    attSizeImgBlock.setAttribute('onClick', 'INC.methods.mappvariants(this,\'' + blockType + '\',"size")')
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
            productColorsObj["colorArray"].forEach(function (colorObj) {
                elAttColorBlock.classList.add("inc_active");
                elAttColorTitleText.innerText = "Color: ";
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

                attColorImg.style.backgroundColor = colorObj["colorCode"];
                attColorImgBlock.setAttribute('onClick', 'INC.methods.mappvariants(this,\'' + blockType + '\',"color")')
                if (true) {
                    elAttColorTitleTextSelected.innerText = "Please select a Color"
                    if (elAttColorTitleTextSelected.innerText == "Please select a Color") {
                        elAttColorTitleTextSelected.setAttribute('style', 'color:#FF0000')
                    }
                }
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
                colorTitle.addEventListener('click', function (e) {
                    e.preventDefault();
                })
                attColorImg.classList.add(colorObj["text"].toLowerCase().replace(' ', '-'));
                attColorImg.style.backgroundColor = colorObj["text"];
                attColorImg.appendChild(colorTitle);
                attColorImgBlock.setAttribute('data-color', colorObj["text"]);
                attColorImgBlock.setAttribute("datacolor", colorObj["text"].toLocaleLowerCase());
                attColorImgBlock.setAttribute('data-option', "0");


                attColorImgBlock.appendChild(attColorImg);
                attColorBlock.appendChild(attColorImgBlock);
                elAttColorListBlock.appendChild(attColorBlock);
                var prod_id = productBlock.getAttribute('data-main_id');
                if (one_attr_flag == true) {
                    setTimeout(function () {
                        if (INC.methods.getProductIdFromWebPage() == prod_id) {
                            // attColorImgBlock.click()
                        }
                    }, 0)
                }
            });

        }
    }
    if (product3Obj.att3Array.length > 0) {
        if (product3Obj["att3Array"][0].code != "Color") {
            findObj = new INC.classes.FindObj({
                mainId: productObj.mainId
            });

            elAtt3ListBlock.innerHTML = "";
            var productSizeText = "";
            if (product3Obj["att3Array"].length > 0) {
                product3Obj["att3Array"].forEach(function (sizeObj) {
                    elAtt3TitleTextSelected.innerText = "Please select option"
                    if (elAtt3TitleTextSelected.innerText == "Please select option") {
                        elAtt3TitleTextSelected.setAttribute('style', 'color:#FF0000')
                    }
                    elAtt3TitleText.innerText = product3Obj["att3Array"][0].code + " " + ":";
                    elAtt3Block.classList.add("inc_active");
                    var attSizeBlock3 = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttthirdListItemBlock"]
                    });
                    var attSizeImgBlock3 = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttthirdListItemImgBlock"]
                    });
                    var attSizeImg3 = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttthirdListItemImg"]
                    });

                    attSizeImgBlock3.setAttribute('onClick', 'INC.methods.mappvariants(this,\'' + blockType + '\',"third")')
                    attSizeImgBlock3.classList.add('avail')

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

    if (product0Obj.att0Array.length > 0) {
        elAtt0TitleTextSelected.addEventListener('click', function () {
            this.parentNode.parentNode.parentNode.classList.toggle('show_dropdown')
        })
        elAttBlock.classList.add('attributes_avail')
    }

    elGallerylefttArrow.setAttribute('title', 'Scroll left')
    elGalleryRightArrow.setAttribute('title', 'Scroll right')

    elGalleryRightArrow.addEventListener("click", function (e) {
        var prod_card = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        var pr_id = prod_card.getAttribute('data-main_id')
        slideTo(pr_id, 0, prod_card, "right", "arrow")
    });
    elGallerylefttArrow.addEventListener("click", function (e) {
        var prod_card = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        var pr_id = prod_card.getAttribute('data-main_id')
        slideTo(pr_id, 0, prod_card, "left", "arrow")
    });




    if ((productObj.otherImageList == null) || productObj.otherImageList.length < 2) {
        elGalleryRightArrow.style.display = "none"
        elGallerylefttArrow.style.display = "none"
    }
    switch (blockType) {
        case "pdp":
            elAddText.innerText = "Add to Bundle";
            break;
        case "sidebar":
            elAddText.innerText = "Add to Basket";
            break;
        case "am":
            elAddText.innerText = "Add to Basket";
            break;
    }
    elAddBlock.addEventListener("click", function () {
        if (productBlock.querySelector('.close_read_more') != null) {
            productBlock.querySelector('.close_read_more').click()
        }


        productBlock.parentNode.querySelector('.inc_product_header_title_block').classList.add('inc_active');
        productBlock.parentNode.querySelector('.inc_product_header_title_block_1').classList.remove('inc_active');
        productBlock.parentNode.querySelector('.inc_product_description_main_block').classList.remove('inc_active')

        var productModuleBlock = productBlock.parentNode.parentNode;
        var flag_check = INC.methods.checkVariantSelection(productModuleBlock)
        if (document.querySelector('.sidebar_outer.sidebar_outer_active') == null) {
            document.querySelector('body').classList.remove('inc_popup_open')
            document.querySelector('html').classList.remove('inc_overlay')
        }
        if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
            document.querySelector('.inc_sidebar_modal_block.inc_active').classList.remove('overflow_visible')
        }
        var showcaseProductBlock = productModuleBlock.querySelector(getSelectorClassName(classNames, "productShowcaseBlock")).querySelector(getSelectorClassName(classNames, "productBlock"));
        if (INC.config.pageType != "cartPage" && !INC.config.recommendation && INC.config.pageType != "ticket" && productModuleBlock.parentNode.className.indexOf('inc_af_product-list_block') == -1) {
            showcaseProductBlock.querySelector(getSelectorClassName(classNames, "productAddBlock")).click();
        }

        if (productModuleBlock.classList.contains('configurable') == true) {
            if (flag_check == 1) {
                setTimeout(function () {
                    if (document.querySelector('.inc_sidebar_modal_block.inc_active .inc_product_modal_block.inc_active') != null) {
                        document.querySelector('.inc_sidebar_modal_block.inc_active .inc_product_modal_block.inc_active').classList.remove('inc_active')
                        document.querySelector('body').classList.remove('inc_popup_open');
                        document.querySelector('html').classList.remove('inc_popup_open');

                        if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
                            document.querySelector('html').classList.add('inc_overlay');
                        }
                    }
                }, 100)
            } else {
                if (productModuleBlock.querySelector('.inc_product_desc_att_block').getAttribute('data-zero') == null && productModuleBlock.querySelector('.inc_product_desc_att_block').getAttribute('data-color') == null) {
                    // productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').textContent = "Please select your Size and Color options"
                } else if (productModuleBlock.querySelector('.inc_product_desc_att_block').getAttribute('data-zero') != null || productModuleBlock.querySelector('.inc_product_desc_att_block').getAttribute('data-size') != null) {
                    // productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').textContent = "Please select a Color"
                } else if (productModuleBlock.querySelector('.inc_product_desc_att_block').getAttribute('data-color') != null) {
                    //  productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').textContent = "Please select your Size"

                }
                productModuleBlock.querySelector('.inc_product_desc_add_title_text_block').setAttribute('style', 'color:#E52B45')
                var element = document.querySelector('.inc_product_modal_block.inc_active .inc_product_block .inc_product_desc_att_color_block')
                if (element != null) {
                    //  element.scrollIntoView({ behavior: 'smooth' })
                    if (flag_check == 0) {
                        // productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_err_text_block').textContent = "Please select your Size"
                    }
                    if (window.innerWidth < 820) {
                        // document.querySelector('html').classList.add('inc_popup_open')
                        document.querySelector('html').classList.add('inc_overlay')
                    }

                }
            }
        } else {
            setTimeout(function () {
                if (document.querySelector('.inc_sidebar_modal_block.inc_active .inc_product_modal_block.inc_active') != null) {
                    document.querySelector('.inc_sidebar_modal_block.inc_active .inc_product_modal_block.inc_active').classList.remove('inc_active')
                    document.querySelector('body').classList.remove('inc_popup_open')
                }
                if (document.querySelector('.inc_sidebar_modal_block.inc_active .inc_product_modal_block.inc_active') == null && document.querySelector('.inc_sidebar_modal_block') != null) {
                    document.querySelector('.inc_sidebar_modal_block').classList.remove('overflow_visible')
                }
            }, 100)
        }
        setTimeout(function () {
            if (document.querySelector('.sidebar_outer.sidebar_outer_active') != null && document.querySelector('.inc_product_modal_block.inc_active') == null) {
                document.querySelector('.inc_sidebar_modal_block.inc_active').classList.remove('overflow_visible')
            }
        }, 200)
    });


    return productBlock;
}

INC.methods.mappvariants = function (obj, blocktype, type_of_variant) {
    //
    console.log("Mapping")
    var size_flag = false;
    var colorflag = false;
    var thirdflag = false;
    if (type_of_variant == "zero") {
        size_flag = true;
        colorflag = true;
        thirdflag = true;
    } else if (type_of_variant == "color") {
        size_flag = true;
        thirdflag = true;
    } else if (type_of_variant == "size") {
        colorflag = true;
        thirdflag = true;
    } else if (type_of_variant == "third") {
        colorflag = true;
        size_flag = true;
    }
    if (obj.parentNode != undefined) {
        var productModuleBlck = obj.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        if (productModuleBlck.classList.contains('inc_product_showcase_block') == true || productModuleBlck.classList.contains('inc_product_modal_block') == true) {
            productModuleBlck = productModuleBlck.parentNode
        }

        var classNames = INC.uiConfig[blocktype].className;
        var getSelectorClassName = this.getSelectorClassName;
        var productblockshow = productModuleBlck.querySelector('.inc_product_showcase_block .inc_product_block')
        var productblockmod = productModuleBlck.querySelector('.inc_product_modal_block .inc_product_block')

        var mainprdid = productblockshow.getAttribute('data-main_id')


        if (type_of_variant == "zero") {
            var sel_variant = obj.getAttribute('data-size')
            productblockmod.querySelector('.inc_product_desc_att_block').setAttribute('data-zero', sel_variant)
            productblockshow.querySelector('.inc_product_desc_att_block').setAttribute('data-zero', sel_variant)
        } else if (type_of_variant == "color") {
            var sel_variant = obj.getAttribute('data-color')
            productblockmod.querySelector('.inc_product_desc_att_block').setAttribute('data-color', sel_variant)
            productblockshow.querySelector('.inc_product_desc_att_block').setAttribute('data-color', sel_variant)
        } else if (type_of_variant == "size") {
            var sel_variant = obj.getAttribute('data-size')
            productblockmod.querySelector('.inc_product_desc_att_block').setAttribute('data-size', sel_variant)
            productblockshow.querySelector('.inc_product_desc_att_block').setAttribute('data-size', sel_variant)
        } else if (type_of_variant == "third") {
            var sel_variant = obj.getAttribute('data-size')
            productblockmod.querySelector('.inc_product_desc_att_block').setAttribute('data-third', sel_variant)
            productblockshow.querySelector('.inc_product_desc_att_block').setAttribute('data-third', sel_variant)
        }

        // var atteditbutton = productblockshow.querySelector('.inc_product_desc_att_edit_text')
        // if(atteditbutton != null){
        //     atteditbutton.parentNode.parentNode.classList.add('elipsis_inc')
        //     atteditbutton.innerText = "Edit"
        // }

        var main_p_id = INC.dataStore.methods().getFirstProductObjByMainId({
            mainId: mainprdid
        }).id;
        var findobj = new INC.classes.FindObj({
            id: main_p_id
        });
        var productObjs = INC.dataStore.methods().getProductById(findobj);
        var zero_text = productblockmod.querySelector('.inc_product_desc_att_block').getAttribute('data-zero');
        var size_text = productblockmod.querySelector('.inc_product_desc_att_block').getAttribute('data-size');
        var color_text = productblockmod.querySelector('.inc_product_desc_att_block').getAttribute('data-color');
        var third_text = productblockmod.querySelector('.inc_product_desc_att_block').getAttribute('data-third');

        findobj.mainId = mainprdid
        findobj.colorText = ""
        var sel_attr_text = ""
        if (color_text != undefined) {
            findobj.colorText = color_text
            productblockmod.querySelector('.inc_product_desc_att_color_title_text_selected').setAttribute('style', 'color:"#4D4D4F";')
            productblockmod.querySelector('.inc_product_desc_att_color_title_text_selected').innerText = color_text
            productblockshow.querySelector('.inc_product_desc_att_color_title_text_selected').setAttribute('style', 'color:"#4D4D4F";')
            productblockshow.querySelector('.inc_product_desc_att_color_title_text_selected').innerText = color_text
        }
        if (zero_text != undefined) {
            findobj.zeroText = zero_text
            productblockshow.querySelector('.inc_product_desc_att_zero_title_text_selected').innerText = zero_text
            productblockshow.querySelector('.inc_product_desc_att_zero_title_text_selected').setAttribute('style', 'color:"#4D4D4F";')
            productblockmod.querySelector('.inc_product_desc_att_zero_title_text_selected').classList.add('inc_change_color');
            productblockmod.querySelector('.inc_product_desc_att_zero_title_text_selected').innerText = zero_text
        }
        if (size_text != undefined) {
            findobj.sizeText = size_text
            productblockshow.querySelector('.inc_product_desc_att_size_title_text_selected').innerText = size_text
            productblockmod.querySelector('.inc_product_desc_att_size_title_text_selected').innerText = size_text
            productblockshow.querySelector('.inc_product_desc_att_size_title_text_selected').setAttribute('style', 'color:"#4D4D4F";')
            productblockmod.querySelector('.inc_product_desc_att_size_title_text_selected').setAttribute('style', 'color:"#4D4D4F";')
        }

        if (third_text != undefined) {
            findobj.thirdText = third_text
            productblockmod.querySelector('.inc_product_desc_att_third_title_text_selected').innerText = third_text
            productblockshow.querySelector('.inc_product_desc_att_third_title_text_selected').innerText = third_text
        }
        productblockmod.querySelector('.inc_product_desc_add_err_text_block').innerHTML = ""
        productblockshow.querySelector('.inc_variant_error_text').innerHTML = ""
        productblockshow.querySelector('.inc_product_variant_simple_text').setAttribute('style', '')
        productblockshow.querySelector('.inc_product_desc_add_title_text_block').setAttribute('style', '')

        var productSizesObj = INC.dataStore.methods().getProductSizesObj(findobj, obj);
        var productColorsObj = INC.dataStore.methods().getProductColorsObj(findobj, obj);
        var product3rdObj = INC.dataStore.methods().getProductopt3Obj(findobj, obj);

        var elAttSizeBlock = productblockmod.querySelector('.inc_product_desc_att_size_block')
        var elAttColorBlock = productblockmod.querySelector('.inc_product_desc_att_color_block')
        var elAtt3rdBlock = productblockmod.querySelector('.inc_product_desc_att_third_block')
        var elAttSizeListBlock = productblockmod.querySelector('.inc_product_desc_att_size_list_block')
        var elAttColorListBlock = productblockmod.querySelector('.inc_product_desc_att_color_list_block')
        var elAtt3ListBlock = productblockmod.querySelector('.inc_product_desc_att_third_list_block')

        var elAttSizeBlockshow = productblockshow.querySelector('.inc_product_desc_att_size_block')
        var elAttColorBlockshow = productblockshow.querySelector('.inc_product_desc_att_color_block')
        var elAtt3rdBlockshow = productblockshow.querySelector('.inc_product_desc_att_third_block')
        var elAttSizeListBlockshow = productblockshow.querySelector('.inc_product_desc_att_size_list_block')
        var elAttColorListBlockshow = productblockshow.querySelector('.inc_product_desc_att_color_list_block')
        var elAtt3ListBlockshow = productblockshow.querySelector('.inc_product_desc_att_third_list_block')

        //size block
        //var cloned_li = ic_discount_ul.cloneNode(ic_discount_ul);
        // attSizeImgBlock0.setAttribute('onClick','INC.methods.mappvariants(this,\''+blocktype+'\',"zero")')
        if (type_of_variant == "zero" || type_of_variant == "third" || type_of_variant == "color") {
            elAttSizeListBlock.innerHTML = "";
            elAttSizeListBlockshow.innerHTML = "";
            if (productSizesObj["sizeArray"].length > 0) {
                elAttSizeBlock.classList.add("inc_active");
                productSizesObj["sizeArray"].forEach(function (sizeObj) {
                    var attSizeBlock = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttSizeListItemBlock"]
                    });
                    var attSizeImgBlock = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttSizeListItemImgBlock"]
                    });
                    var attSizeImg = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttSizeListItemImg"]
                    });
                    attSizeImgBlock.setAttribute('onClick', 'INC.methods.mappvariants(this,\'' + blocktype + '\',"size")')


                    attSizeImgBlock.classList.add('avail')
                    attSizeImg.innerText = sizeObj["text"];
                    attSizeImgBlock.setAttribute('data-size', sizeObj["text"]);
                    attSizeImgBlock.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                    attSizeImgBlock.setAttribute('data-option', "2");
                    attSizeImgBlock.appendChild(attSizeImg);
                    var attSizeImgBlockclone = attSizeImgBlock.cloneNode(attSizeImgBlock);
                    elAttSizeListBlock.appendChild(attSizeImgBlock);
                    elAttSizeListBlockshow.appendChild(attSizeImgBlockclone);
                    if (size_text != undefined) {
                        if (size_text.toLocaleLowerCase() == sizeObj["text"].toLocaleLowerCase()) {
                            attSizeImgBlock.classList.add('inc_active')
                            attSizeImgBlockclone.classList.add('inc_active')
                        }
                    }
                });
            }
        } else {
            var sizelowertext = size_text.toLocaleLowerCase()
            if (productblockmod.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
                productblockmod.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.inc_active').classList.remove('inc_active')
            }
            if (productblockshow.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
                productblockshow.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.inc_active').classList.remove('inc_active')
            }
            productblockmod.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datacolor="' + sizelowertext + '"]').classList.add('inc_active')
            productblockshow.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datacolor="' + sizelowertext + '"]').classList.add('inc_active')
        }
        //color block
        if (type_of_variant == "zero" || type_of_variant == "size" || type_of_variant == "third") {
            elAttColorListBlock.innerHTML = "";
            elAttColorListBlockshow.innerHTML = "";
            var productColorText = "";
            if (productModuleBlck.querySelector('.inc_product_modal_block .inc_product_desc_att_color_title_text_selected').innerText == "" && productModuleBlck.querySelector('.inc_product_desc_att_color_title_text_selected').innerText == "") {
                productModuleBlck.querySelector('.inc_product_modal_block .inc_product_desc_att_color_title_text_selected').innerText = ""
                productModuleBlck.querySelector('.inc_product_desc_att_color_title_text_selected').innerText = ""
            }
            var selcol = findobj.colorText
            if (productColorsObj["colorArray"].length > 0) {
                elAttColorBlock.classList.add("inc_active");

                productColorsObj["colorArray"].forEach(function (colorObj) {
                    if (selcol == colorObj["text"]) {
                        findobj.colorText = colorObj["text"]
                        findobj.color_text = colorObj["text"]
                        productblockmod.querySelector('.inc_product_desc_att_color_title_text_selected').innerText = colorObj["text"]
                        productblockshow.querySelector('.inc_product_desc_att_color_title_text_selected').innerText = colorObj["text"]
                    } else {
                        findobj.colorText = ""
                        findobj.color_text = ""
                        productblockmod.querySelector('.inc_product_desc_att_color_title_text_selected').innerText = ""
                        productblockshow.querySelector('.inc_product_desc_att_color_title_text_selected').innerText = ""
                    }
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

                    attColorImg.style.backgroundColor = colorObj["colorCode"];
                    attColorImgBlock.setAttribute('onClick', 'INC.methods.mappvariants(this,\'' + blocktype + '\',"color")')
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
                    colorTitle.addEventListener('click', function (e) {
                        e.preventDefault();
                    })
                    attColorImg.appendChild(colorTitle);
                    // attSelColorImg.style.backgroundImage = "url(" + colorObj["imgSrc"] + ")";
                    attColorImg.classList.add(colorObj["text"].toLowerCase().replace(' ', '-'));
                    attColorImg.style.backgroundColor = colorObj["text"];
                    attColorImgBlock.setAttribute('data-color', colorObj["text"]);
                    attColorImgBlock.setAttribute("datacolor", colorObj["text"].toLocaleLowerCase());
                    attColorImgBlock.setAttribute('data-option', "0");
                    var colorSwatchImgDiv = document.createElement('div');
                    colorSwatchImgDiv.style.backgroundColor = colorObj["colorCode"];

                    // if (colorObj["imgSrc"].length > 0) {
                    var colorSwatchImg = INC.methods.generateHTMLTags('img', {
                        src: colorObj["imgSrc"]
                    });
                    colorSwatchImg.setAttribute('alt', colorObj["text"])
                    colorSwatchImgDiv.appendChild(colorSwatchImg);
                    // }
                    // elImgColorSwatch.appendChild(colorSwatchImgDiv);
                    attColorImgBlock.appendChild(attColorImg);
                    attColorBlock.appendChild(attColorImgBlock);
                    var attColorBlockclone = attColorBlock.cloneNode(attColorBlock);
                    elAttColorListBlock.appendChild(attColorBlock);
                    elAttColorListBlockshow.appendChild(attColorBlockclone);
                    if (color_text != null) {
                        if (color_text.toLocaleLowerCase() == colorObj.text.toLocaleLowerCase()) {
                            attColorBlock.classList.add('inc_active');
                            attColorBlockclone.classList.add('inc_active');
                            color_text_edt = colorObj.text
                        }
                    }
                });
            }
        } else {
            var colorlowertext = color_text.toLocaleLowerCase()
            if (productblockmod.querySelector('.inc_product_desc_att_color_list_item_block.inc_active') != null) {
                productblockmod.querySelector('.inc_product_desc_att_color_list_item_block.inc_active').classList.remove('inc_active')
            }
            if (productblockshow.querySelector('.inc_product_desc_att_color_list_item_block.inc_active') != null) {
                productblockshow.querySelector('.inc_product_desc_att_color_list_item_block.inc_active').classList.remove('inc_active')
            }
            productblockmod.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + colorlowertext + '"]').parentNode.classList.add('inc_active')
            productblockshow.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + colorlowertext + '"]').parentNode.classList.add('inc_active')
        }
        //third block
        if (type_of_variant == "zero" || type_of_variant == "size" || type_of_variant == "color") {
            elAtt3ListBlock.innerHTML = "";
            elAtt3ListBlockshow.innerHTML = "";
            if (product3rdObj["att3Array"].length > 0) {
                elAtt3rdBlock.classList.add("inc_active");

                product3rdObj["att3Array"].forEach(function (sizeObj) {
                    var attSizeBlock3 = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttthirdListItemBlock"]
                    });
                    var attSizeImgBlock3 = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttthirdListItemImgBlock"]
                    });
                    var attSizeImg3 = INC.methods.generateHTMLTags('div', {
                        class: classNames["productAttthirdListItemImg"]
                    });
                    attSizeImgBlock3.setAttribute('onClick', 'INC.methods.mappvariants(this,\'' + blocktype + '\',"third")')
                    attSizeImg3.innerText = sizeObj["text"];
                    attSizeImgBlock3.setAttribute('data-size', sizeObj["text"]);
                    attSizeImgBlock3.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                    attSizeImgBlock3.setAttribute('data-option', "3");
                    attSizeImgBlock3.appendChild(attSizeImg3);
                    var attSizeImgBlock3clone = attSizeImgBlock3.cloneNode(attSizeImgBlock3);
                    elAtt3ListBlock.appendChild(attSizeImgBlock3);
                    elAtt3ListBlockshow.appendChild(attSizeImgBlock3clone);
                    if (third_text != undefined) {
                        if (third_text.toLocaleLowerCase() == sizeObj["text"].toLocaleLowerCase()) {
                            attSizeImgBlock3.classList.add('inc_active')
                            attSizeImgBlock3clone.classList.add('inc_active')
                        }
                    }
                });
            }
        } else {
            var thirdlowertext = third_text.toLocaleLowerCase()
            if (productblockmod.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
                productblockmod.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block.inc_active').classList.remove('inc_active')
            }
            if (productblockshow.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
                productblockshow.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block.inc_active').classList.remove('inc_active')
            }
            productblockmod.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block[datacolor="' + thirdlowertext + '"]').classList.add('inc_active')
            productblockshow.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block[datacolor="' + thirdlowertext + '"]').classList.add('inc_active')
        }
        //end
        if (type_of_variant == "zero") {
            var zerolowertext = zero_text.toLocaleLowerCase()
            if (productblockmod.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
                productblockmod.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active').classList.remove('inc_active')
            }
            if (productblockshow.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
                productblockshow.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active').classList.remove('inc_active')
            }
            productblockmod.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' + zerolowertext + '"]').classList.add('inc_active')
            productblockshow.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' + zerolowertext + '"]').classList.add('inc_active')
        }

        INC.methods.updateProductBlock(productblockshow, findobj, blocktype);
        INC.methods.updateProductBlock(productblockmod, findobj, blocktype);
    }

    setTimeout(function () {
        _isVisible._init({
            classSelector: ".inc_pdp_block img[data-src], .inc_pdp_block source[data-src], .inc_sidebar_modal_block img[data-src], .inc_sidebar_modal_block source[data-src], .inc_af_block img[data-src], .inc_af_block source[data-src]",
            index: 0
        });
    }, 500)


}
INC.methods.onloadCheckproduct = function (productModuleBlock) {
    var modalProductBlock = productModuleBlock.querySelector('.inc_product_modal_block .inc_product_block');
    var productBlock = productModuleBlock.querySelector('.inc_product_block')
    var elddtext = productBlock.querySelector('.inc_product_desc_add_text')
    var elqty = productBlock.querySelector('.inc_product_desc_qty_block input')
    var sku = productBlock.getAttribute('data-sku');
    var mainId = productBlock.getAttribute('data-main_id');
    var main_id = productBlock.getAttribute('data-main_id');
    var bundle_id = productBlock.getAttribute('data-bundle_id');
    var pname = productBlock.querySelector('.inc_product_desc_title_text').textContent;
    var pprice = productBlock.querySelector('.inc_product_desc_price_active_text').textContent.replace('$', '');
    var qty = parseInt(elqty.value);
    var elprodImg = productBlock.querySelector('.inc_product_desc_add_img')
    var prod_card = elddtext.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    elddtext.classList.add('added');
    elddtext.innerText = "Added"

    elddtext.parentNode.parentNode.classList.add('Inc_checked');
    modalProductBlock.querySelector('.inc_product_desc_add_text').textContent = "Update";
    var pListItemBlock = document.querySelector(".inc_pdp_bundle_product_list_item_block[data-main_id=\"" + mainId + "\"]");
    if (pListItemBlock != null) {
        pListItemBlock.classList.add('product_added');
        pListItemBlock.querySelector('.inc_pdp_bundle_product_list_item_added_btn_img').classList.add("checked");
    }
    elprodImg.classList.add("checked");
    modalProductBlock.querySelector('.inc_product_desc_add_img').classList.add("checked");
    if (INC.config.pageType == "pdp") INC.methods.updateBundleCart({
        sku: sku,
        qty: qty
    }, "add", main_id, bundle_id, pname, pprice);

    if (prod_card != null) {
        if (prod_card.querySelector('.inc_product_modal_block.inc_active') != null) {
            prod_card.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
        }
    }
    //productModuleBlock.querySelector('.inc_product_variant_simple_text').textContent = "Added"
    productModuleBlock.querySelector('.inc_product_variant_simple_block').classList.add('added_inc')
    var delayset = 0
    productModuleBlock.querySelector('.inc_product_desc_qty_add_btn_block').classList.add('added_inc')
    if (productModuleBlock.querySelector('.inc_product_desc_qty_add_btn_block .inc_add_text') != null) {
        productModuleBlock.querySelector('.inc_product_desc_qty_add_btn_block .inc_add_text').innerText = "Added to Bundle";
    }
    productModuleBlock.querySelector('.inc_product_add_block').classList.add('added_inc')
    productModuleBlock.querySelector('.inc_product_modal_block .inc_product_add_block').classList.add('added_inc')
    productModuleBlock.querySelector('.inc_product_desc_att_variant_text').textContent = "Update"
}

INC.methods.checkVariantSelection = function (prod_module_block) {
    var attr_flag_color = false;
    var attr_flag_size = false;
    var attr__flag_zero = false;
    var attr__flag_third = false;

    var elSize = prod_module_block.querySelector('.inc_product_desc_att_size_block.inc_active')
    var elColor = prod_module_block.querySelector('.inc_product_desc_att_color_block.inc_active')
    var elattr0 = prod_module_block.querySelector('.inc_product_desc_att_zero_block.inc_active')
    var elthird3 = prod_module_block.querySelector('.inc_product_desc_att_third_block.inc_active')


    if (elColor != null && elattr0 != null && elthird3 != null && elSize != null) {
        if (elColor.querySelector('.inc_product_desc_att_color_list_item_block.inc_active') != null && elattr0.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active') != null && elthird3.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active') != null && elSize.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
            attr_flag_color = true
            attr__flag_zero = true
            attr__flag_third = true;
            attr_flag_size = true
        } else {
            attr_flag_color = false
            attr__flag_zero = false
            attr__flag_third = false;
            attr_flag_size = false
        }
    } else if (elColor != null && elattr0 != null && elSize != null) {
        if (elColor.querySelector('.inc_product_desc_att_color_list_item_block.inc_active') != null && elattr0.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active') != null && elSize.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
            attr_flag_color = true
            attr__flag_zero = true
            attr__flag_third = true;
            attr_flag_size = true
        } else {
            attr_flag_color = false
            attr__flag_zero = false
            attr__flag_third = false;
            attr_flag_size = false
        }
    } else if (elColor != null && elattr0 != null) {
        if (elColor.querySelector('.inc_product_desc_att_color_list_item_block.inc_active') != null && elattr0.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
            attr_flag_color = true
            attr__flag_zero = true
            attr_flag_size = true;
            attr__flag_third = true;
        } else {
            attr_flag_color = false
            attr__flag_zero = false
            attr__flag_third = false;
            attr_flag_size = false;
        }
    } else {
        if (elColor != null) {
            if (elColor.querySelector('.inc_product_desc_att_color_list_item_block.inc_active') != null) {
                attr_flag_color = true
            }
        } else {
            attr_flag_color = true
        }
        if (elattr0 != null) {
            if (elattr0.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
                attr__flag_zero = true
            }
        } else {
            attr__flag_zero = true
        }
        if (elSize != null) {
            if (elSize.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
                attr_flag_size = true
            }
        } else {
            attr_flag_size = true
        }
        if (elthird3 != null) {
            if (elthird3.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
                attr__flag_third = true
            }
        } else {
            attr__flag_third = true
        }
    }

    // if(attr_flag_color == true && attr__flag_zero == true){
    //     return 1
    // }else{
    //     return 0
    // }
    if (attr_flag_color == true && attr__flag_zero == true && attr__flag_third == true) {
        return 1
    } else {
        if (attr_flag_size == false) {
            return 2
        } else if (attr__flag_third == false) {
            return 3
        } else if (attr_flag_color == false) {
            return 0
        } else {
            return 0
        }
    }
}

function inc_onchange_variant(elattrblock) {
    if (elattrblock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == true) {
        var elmainblock = elattrblock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    } else {
        var elmainblock = elattrblock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
    }
    if (elmainblock.querySelector('.inc_product_modal_block.inc_active') == null) {
        var sel_varel = elmainblock.querySelector('.inc_product_modal_block')
    } else {
        var sel_varel = elmainblock.querySelector('.inc_product_showcase_block')
    }
    var elAttBlock = elattrblock.parentNode.parentNode
    var productBlock = elattrblock.parentNode.parentNode.parentNode.parentNode.parentNode
    var attrImng = elattrblock.options[elattrblock.selectedIndex].getAttribute('imgurlc')
    if (attrImng != undefined || attrImng != null) {
        if (productBlock.querySelector('.inc_product_img_main_img img') != null) {
            productBlock.querySelector('.inc_product_img_main_img img').src = attrImng
            productBlock.querySelector('.inc_product_img_main_img a').setAttribute('imageurl', attrImng)
            productBlock.querySelector('.inc_product_img_main_img img').setAttribute('data-imageurl', attrImng)
        }
    }

    var elAtt0TitleText = elAttBlock.querySelector('.inc_product_desc_att_zero_title_text')
    var prod_card_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_att_block')
    var prod_modal_attr_block = elAttBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
    var attselectedsizeText = prod_card_attr_block.querySelector('.inc_product_desc_att_size_title_text')

    if (productBlock.querySelector('.close_read_more') != null) {
        productBlock.querySelector('.close_read_more').click()
    }
    var attr_text = elattrblock.options[elattrblock.selectedIndex].getAttribute("datasize");
    var attr_text_small = elattrblock.options[elattrblock.selectedIndex].getAttribute("datasize");
    if (attr_text != "" && attr_text != null) {
        if (elAttBlock.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' + attr_text_small + '"]') != null) {
            elAttBlock.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' + attr_text_small + '"]').click()
        }
        if (sel_varel != null) {
            var sel_variant = sel_varel.querySelector('.inc_variant_tag')
            if (sel_variant != null) {
                var alloptionss = sel_variant.querySelectorAll('option')
                for (j = 0; j < alloptionss.length; j++) {
                    if (alloptionss[j].getAttribute('datasize') == attr_text_small.toLocaleLowerCase()) {
                        alloptionss[j].selected = 'selected'
                        break;
                    }
                }
            }
        }
    }
}

INC.methods.updateProductBlock = function (productBlock, findObj, blockType, bundleProductListCheck) {

    var dataStore = INC.dataStore;
    var classNames = INC.uiConfig[blockType].className;
    var productBlock = productBlock;
    var productModuleBlock = productBlock.parentNode.parentNode;

    var modal_attr_block = productModuleBlock.querySelector('.inc_product_modal_block')
    var zero_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-zero');
    var size_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-size');
    var color_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-color');
    var third_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-third');

    var sel_attr_text = ""
    if (zero_text != undefined) {
        findObj.zero_text = zero_text
        sel_attr_text = zero_text
    } else {
        findObj.zeroText = ""
        findObj.zero_text = ""
    }
    if (color_text != undefined) {
        findObj.color_text = color_text
        if (sel_attr_text == "") {
            sel_attr_text = color_text
        } else {
            sel_attr_text = sel_attr_text + " / " + color_text
        }
    } else {
        findObj.color_text = ""
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



    if (productBlock.querySelector('.inc_product_variant_simple_text') != null) {
        // if(blockType == "sidebar"){
        //     productBlock.querySelector('.inc_product_variant_simple_text').innerText = "Select Option"
        // }else{
        //     productBlock.querySelector('.inc_product_variant_simple_text').innerText = sel_attr_text
        // }
        if (blockType == "sidebar" || blockType == "am") {
            productBlock.querySelector('.inc_product_variant_simple_text').innerText = "Select Option"
        } else {
            productBlock.querySelector('.inc_product_variant_simple_text').setAttribute('title', sel_attr_text)
            if (productModuleBlock.querySelector('.inc_product_block .inc_product_add_block.added_inc') != null) {
                productBlock.querySelector('.inc_product_variant_simple_text').innerText = sel_attr_text
            }
        }


        // productBlock.querySelector('.inc_product_variant_simple_text').setAttribute('title', sel_attr_text)
        // if (window.innerWidth < 920){
        if (color_text != null) {
            var PrdVarSimTxt = productBlock.querySelector('.inc_product_variant_simple_text')
            var colorTitle = INC.methods.generateHTMLTags('div');

            colorTitle.addEventListener('click', function (e) {
                e.preventDefault();
            })
            PrdVarSimTxt.appendChild(colorTitle);
            colorTitle.classList.add("colorCircle")
            colorTitle.classList.add(color_text.toLowerCase().replace(' ', '-'));
            PrdVarSimTxt.parentNode.classList.add('added_inc');
        }
        // }
    }
    var productObj = INC.dataStore.methods().getProductByAtt(findObj);

    if (Object.keys(productObj).length != 0) {
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
            added_sum_prod.querySelector('.inc_pdp_bundle_cart_added_product_att_color_text_block').textContent = sel_attr_text
            added_sum_prod.querySelector('.inc_pdp_bundle_cart_added_product_att_color_text_block').setAttribute('style', '')
            added_sum_prod.querySelector('.inc_pdp_bundle_cart_added_product_att_block').setAttribute('title', sel_attr_text)
        }
        if (productModuleBlock.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != "") {
            productModuleBlock.querySelector('.inc_product_desc_att_size_title_text').textContent = sel_attr_text
            productModuleBlock.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title', sel_attr_text)
        }

        function getViewElement(className) {
            return productBlock.querySelector(getSelectorClassName(classNames, className));
        }

        var elImgBlock = getViewElement("productImgBlock");
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
        var elGalleryRightArrow = getViewElement("productImgGalleryRightBlock");
        var elGallerylefttArrow = getViewElement("productImgGalleryLeftBlock");

        var eladdbtnqtyblock = getViewElement("productQtyAddBtnBlock");

        if (productBlock.parentNode.className.indexOf('inc_product_showcase_block') >= 0) {
            if (blockType != "pdp") {
                eladdbtnqtyblock.classList.add('inc_active')
            }
        }
        var prod_modal = productModuleBlock.querySelector('.inc_product_modal_block')
        var elImgMainImg = elImgBlock.querySelector(getSelectorClassName(classNames, "productImgMainImg"));

        elImgMainImg.querySelectorAll('img')[0].setAttribute('src', productObj["imageURL"]);


        if (productBlock.parentNode.className.indexOf('inc_product_showcase_block') == -1) {
            elImgMainImg.querySelector('a').setAttribute('href', productObj["url"]);
        }
        elImgMainImg.querySelector('a').setAttribute('otherImageList', productObj["otherImageList"])
        elImgMainImg.querySelector('a').setAttribute('imageURL', productObj["imageURL"])

        elImgMainImg.querySelectorAll('img')[0].setAttribute('data-mouseover', productObj["otherImageList"])
        elImgMainImg.querySelectorAll('img')[0].setAttribute('data-imageURL', productObj["imageURL"])



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

        // elworthPrice.textContent = productObj.reviewsCount

        elImgGalleryListBlock.innerHTML = "";

        if ((productObj.otherImageList != null) && productObj.otherImageList.length > 1) {
            var otimg = 0;
            productObj.otherImageList.forEach(function (otherImgURL) {
                var elOtherImgTag = INC.methods.generateHTMLTags('img', {
                    src: otherImgURL
                });
                if (elOtherImgTag == true) {
                    elOtherImgTag.src = otherImgURL
                }
                elOtherImgTag.setAttribute('alt', productObj.name)
                elOtherImgTag.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
                var elImgGalleryListItemBlock = INC.methods.getElementChilds("productImgGalleryListItemBlock", blockType);

                var elImgGalleryListItemImg = elImgGalleryListItemBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemImg"));

                elImgGalleryListItemImg.appendChild(elOtherImgTag);
                elImgGalleryListItemBlock.setAttribute('index', otimg)
                elImgGalleryListItemBlock.addEventListener("click", function () {

                    Array.prototype.forEach.call(productBlock.querySelectorAll(getSelectorClassName(classNames, "productImgGalleryListItemBlock")), function (galleryListItemBlock) {
                        galleryListItemBlock.classList.remove("inc_active");
                    });

                    elImgGalleryListItemBlock.classList.add("inc_active");

                    elImgMainImg.querySelector('img').src = otherImgURL
                    elImgMainImg.querySelector('img').setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
                })

                elImgGalleryListBlock.appendChild(elImgGalleryListItemBlock);
                if (otimg == 0) {
                    elImgGalleryListItemBlock.classList.add('inc_active')
                }
                otimg++;
                if (productObj.otherImageList.length > 5) {
                    elImgGalleryListItemBlock.parentNode.classList.add("flex-start")
                }

            });

            // if (INC.debug) console.log(elImgGalleryListBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemBlock")));

            // elImgGalleryListBlock.querySelector(getSelectorClassName(classNames, "productImgGalleryListItemBlock")).click();
        }

        if (window.innerWidth > 819) {
            if ((productObj.otherImageList == null) || productObj.otherImageList.length < 2 || productObj.otherImageList.length == 1 || productObj.otherImageList == "") {
                elGalleryRightArrow.style.display = "none"
                elGallerylefttArrow.style.display = "none"
            }
        } else {
            if (productObj.otherImageList == null || productObj.otherImageList.length < 1 || productObj.otherImageList.length == 1 || productObj.otherImageList == "") {
                elGalleryRightArrow.style.display = "none"
                elGallerylefttArrow.style.display = "none"
            }
        }

        //console.log(productObj);

        elTitleText.querySelector('div').textContent = productObj.name

        elTitleText.querySelector('a').setAttribute('title', productObj.name)


        var activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
        var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
        // var worthPrice = parseFloat(productObj.worthPrice).toFixed(2).toString();

        var totalsaveprc = get_discount_price(productObj.regularPrice, productObj.activePrice)
        var totalsaveper = get_discount_price_percentage(productObj.regularPrice, productObj.activePrice)

        elPriceActiveText.parentNode.parentNode.parentNode.classList.remove('is_special_price')
        // elPriceActiveMsg.textContent = " + VAT"
        elPriceRegularText.textContent = "";
        if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
            elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_price')
            if (productObj.pricingCount != "") {
                elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(activePrice)
                elPriceRegularText.innerHTML = "<span>" + "WAS" + "</span>" + INC.clientConfig.regularPricePrefix + INC.clientConfig.currencySymbol + formatter.format(regularPrice)
            } else {
                elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(activePrice)
                elPriceRegularText.innerHTML = "<span>" + "WAS" + "</span>" + INC.clientConfig.regularPricePrefix + INC.clientConfig.currencySymbol + formatter.format(regularPrice)
            }
            elworthPrice.innerHTML = "You save: " + formatter.format(totalsaveprc) + " (" + (totalsaveper) + "%)";
        } else {
            elworthPrice.innerHTML = "";
            if (productObj.pricingCount != "") {
                elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(activePrice)
            } else {
                elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(activePrice)
            }
        }
        if (productBlock.querySelector(getSelectorClassName(classNames, "productAddText")).textContent == "Added" || productBlock.querySelector(getSelectorClassName(classNames, "productAddText")).textContent == INC.config.AddedText || productBlock.parentNode.parentNode.querySelector(getSelectorClassName(classNames, "productAddText")).textContent == INC.config.AddedText) {
            if (!dataStore.hasOwnProperty('bundleCartProducts')) {
                dataStore['bundleCartProducts'] = {};
                INC.config.pdpaddedProductList = []
                INC.config.bundle_tracking = []
                INC.config.bundle_skuPushed = []
                INC.config.dupBasket = []
            }

            dataStore["bundleCartProducts"][productObj["sku"]] = dataStore["bundleCartProducts"][previousSKU];
            if (productObj["sku"] != previousSKU) {
                delete dataStore["bundleCartProducts"][previousSKU];
            }
        }

        //debugger
        var elQtyInput = productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_qty_add_btn_block .inc_product_qty_block input');
        // if(window.innerWidth > 820){
        //     elQtyInput = elQtyInputText.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_qty_add_btn_block input');
        // }else{
        //     elQtyInput = productBlock.querySelector('.inc_product_desc_att_block .inc_product_qty_block .inc_product_qty_input_block input');
        //     console.log(elQtyInput,productBlock.querySelector('.inc_product_desc_att_block .inc_product_qty_block .inc_product_qty_input_block input'))
        // }

        var sku = productBlock.getAttribute('data-sku');
        var bundle_id = productBlock.getAttribute('data-bundle_id');
        var main_id = productBlock.getAttribute('data-main_id');
        var qty = parseInt(elQtyInput.value);
        var pname = productBlock.querySelector('.inc_product_desc_title_text').textContent;
        var pprice = productBlock.querySelector('.inc_product_desc_price_active_text').textContent.replace('$', '');

        if (elAddText.parentNode.parentNode.querySelector('.inc_product_desc_add_img.checked') != null) {
            INC.methods.updateBundleCart({
                sku: sku,
                qty: qty
            }, "add", main_id, bundle_id, pname, pprice);
        }
        setTimeout(function () {
            console.log("naturalWidth" + elImgMainImg.querySelectorAll('img')[0].naturalWidth)
            if (elImgMainImg.querySelectorAll('img')[0].naturalWidth == 360) {
                elImgMainImg.querySelectorAll('img')[0].setAttribute('src', productObj["imageURLMain"]);
            }
        }, 200);

    }
}

INC.methods.createProductListItemBlock = function (productObj, blockType) {
    var classNames = INC.uiConfig[blockType].className;
    var productListItemBlock = this.getElementChilds("pdpBundleProductListItemBlock", blockType);
    var findObj = new INC.classes.FindObj({
        id: productObj.id,
        mainId: productObj.mainId
    });
    var productObj = INC.dataStore.methods().getProductById(findObj);
    // var productColorText = productObj["option"]["0"].text;
    // var productColorsCount = INC.dataStore.methods().getProductColorsObj(findObj)["colorArray"].length;
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
    if (elImgTag1 == true) {
        elImgTag1.src = productObj.imageURL
    }
    elImgTag1.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
    elImgTag1.setAttribute('alt', productObj.name)
    elImg.appendChild(elImgTag1);
    productListItemBlock.addEventListener("click", function () {
        if (INC.debug) console.log("list image clicked");
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productPackOfListBlock")), function (el) {
            el.classList.remove("inc_active");
        });
        Array.prototype.forEach.call(document.querySelectorAll(getSelectorClassName(classNames, "productAttSizeListBlock")), function (attSizeListBlock) {
            attSizeListBlock.classList.remove("inc_active");
        });

        var elListMainBlock = document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListMainBlock"));
        Array.prototype.forEach.call(elListMainBlock.querySelectorAll(getSelectorClassName(classNames, "productModuleBlock")), function (productBlock) {
            // productBlock.style.display = "none";
            productBlock.setAttribute('style', 'display: none!important');
        });
        elListMainBlock.querySelector(getSelectorClassName(classNames, "productModuleBlock") + "[data-main_id=\"" + productObj.mainId + "\"]").style.display = "block";

        Array.prototype.forEach.call(productListItemBlock.parentNode.querySelectorAll(getSelectorClassName(classNames, "pdpBundleProductListItemBlock")), function (pListItemBlock) {
            pListItemBlock.classList.remove("inc_active");
        });

        productListItemBlock.classList.add("inc_active");
    });

    elTitleText.innerText = "";

    // if (productColorsCount > 1) {
    //     elTitleText.innerText = "+" + parseInt(productColorsCount - 1) + ((parseInt(productColorsCount - 1) > 1) ? " COLOURS" : " COLOUR");
    // }

    // if (productColorsCount == 1) {
    //     elTitleText.innerText = " 1 COLOUR";
    // }

    return productListItemBlock;
}

INC.methods.updateProductListItem = function (productObj, blockType) {

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
    elImg.querySelector('img').setAttribute('onerror', "this.src='" + INC.config.noimage + "'");

}

INC.methods.updateBundleCart = function (bundleCartObj, type, main_id, bundle_id, pname, pprice) {
    var dataStore = INC.dataStore;
    var listToDelete = []
    if (!dataStore.hasOwnProperty('bundleCartProducts')) {
        dataStore['bundleCartProducts'] = {};
        INC.config.pdpaddedProductList = []
        INC.config.bundle_tracking = []
        INC.config.bundle_skuPushed = []
        INC.config.dupBasket = []
    }

    switch (type) {
        case "add":
            dataStore["bundleCartProducts"][bundleCartObj["sku"]] = bundleCartObj["qty"];
            if (INC.config.bundle_skuPushed.indexOf(bundleCartObj["sku"]) == -1) {
                INC.config.bundle_skuPushed.push(bundleCartObj["sku"])
            }
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
            INC.config.pdpaddedProductList.remove_prod_list = function () {
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
            INC.config.bundle_skuPushed.remove_prod_list = function () {
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

            INC.config.bundle_tracking = INC.config.bundle_tracking
            INC.config.pdpaddedProductList.remove_prod_list(main_id);
            INC.config.bundle_skuPushed.remove_prod_list(bundleCartObj["sku"]);
            // INC.config.pdpaddedProductList.remove_prod_list = function() {
            //     var what, a = arguments, L = a.length, ax;
            //     while (L && this.length) {
            //         what = a[--L];
            //         while ((ax = this.indexOf(what)) !== -1) {
            //             this.splice(ax, 1);
            //         }
            //     }
            //     return this;
            // };
            // INC.config.pdpaddedProductList.remove_prod_list(main_id);
            break;
    }

    if (INC.config.pageType == "pdp") this.calculateBundleTotal();
}

INC.methods.calculateBundleTotal = function () {
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
    var total_qty = 0
    var total_collect_point = 0
    var mainId = INC.methods.getProductIdFromWebPage();
    if (bundleCartProducts != null && bundleCartProducts != undefined) {
        Object.keys(bundleCartProducts).forEach(function (sku) {
            for (mainProductId in productListObj) {
                for (childProductId in productListObj[mainProductId]) {
                    if (sku == productListObj[mainProductId][childProductId]["sku"]) {
                        if (duplicate_check_produ.indexOf(productListObj[mainProductId][childProductId]["sku"]) == -1) {
                            duplicate_check_produ.push(productListObj[mainProductId][childProductId]["sku"])
                            var regularPrice = productListObj[mainProductId][childProductId]["regularPrice"];
                            var activePrice = productListObj[mainProductId][childProductId]["activePrice"];
                            totalRegularPrice = totalRegularPrice + (parseFloat(bundleCartProducts[sku]) * regularPrice);
                            totalActivePrice = totalActivePrice + (parseFloat(bundleCartProducts[sku])) * activePrice;

                            total_qty = total_qty + parseInt(bundleCartProducts[sku])

                            if (productListObj[mainProductId][childProductId]["worthPrice"] != "" && productListObj[mainProductId][childProductId]["worthPrice"] != null) {
                                total_collect_point = total_collect_point + +(productListObj[mainProductId][childProductId]["worthPrice"] * parseInt(bundleCartProducts[sku]))
                            }
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

    if (INC.debug) console.log("totalMainProduct: " + totalMainProduct);
    if (INC.debug) console.log("totalAddonProducts: " + totalAddonProducts);
    if (INC.debug) console.log("totalAddonProductsCount: " + totalAddonProductsCount);

    var priceObj = {
        totalActivePrice: parseFloat(totalActivePrice).toFixed(2),
        totalRegularPrice: parseFloat(totalRegularPrice).toFixed(2),
        totalMainProduct: totalMainProduct,
        totalAddonProducts: totalAddonProducts,
        totalAddonProductsCount: totalAddonProductsCount,
        totalProductCount: totalProductCount,
        total_qty: total_qty,
        total_collect_point: total_collect_point
    }

    this.updateBundleCartBlock(priceObj);
}

INC.methods.updateBundleCartBlock = function (priceObj) {
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
    var total_qty_item = priceObj.total_qty
    var total_col_point = priceObj.total_collect_point
    var elPdpBundleCartBlock = document.querySelector(this.getSelectorClassName(classNames, "pdpModalBundleCartBlock"));
    if (elPdpBundleCartBlock != null) {
        function getViewElement(className) {
            if (elPdpBundleCartBlock != null) {
                return elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, className));
            } else {
                return false;
            }
        }

        var elBundleCartAddedBlock = getViewElement("pdpBundleCartAddedBlock");
        var elBundleCartSummaryViewBtnCount = getViewElement("pdpBundleCartSummaryViewBtnCount");
        var elBundleCartPriceRegularText = getViewElement("pdpBundleCartSummaryPriceRegularText");
        var elBundleCartPriceActiveText = getViewElement("pdpBundleCartSummaryPriceActiveText");
        var elBundleCartPriceActiveTextMsg = getViewElement("pdpBundleCartSummaryPriceActiveTextMsg");
        var elBundleCartTitleTextcount = getViewElement("pdpBundleCartTitleText");
        var elBundleCartTitleTextblock = getViewElement("pdpBundleCartTitleTextBlock");
        var elbundlesavetext = getViewElement("pdpBundleCartSummaryPriceSaveText");
        var elCartsummaryMainPrdtxtBlock = getViewElement("pdpBundleCartSummaryMainPrdTxt");
        var elCartsummaryMainPrdPrcBlock = getViewElement("pdpBundleCartSummaryMainPrdPrc");
        var elCartsummaryAddonPrdtxtBlock = getViewElement("pdpBundleCartSummaryAddonPrdTxt");
        var elCartsummaryAddonPrdPrcBlock = getViewElement("pdpBundleCartSummaryAddonPrdPrc");

        elBundleCartAddedBlock.innerHTML = "";

        var countcollect = 0;
        var totol_qty_item = 0;
        var bundleCartProductsArray = Object.keys(bundleCartProducts);
        elBundleCartSummaryViewBtnCount.textContent = bundleCartProductsArray.length;

        if (window.innerWidth < 820) {
            elBundleCartTitleTextcount.textContent = "Items you've added" //total_qty_item + 
        }
        var onloadprod = []
        if (document.querySelector('.inc_pdp_product-main_block .inc_product_module_block') != null) {
            var idmain = document.querySelector('.inc_pdp_product-main_block .inc_product_module_block').getAttribute('data-id')
            if (document.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_module_block') != null) {
                var bprod = document.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_module_block').getAttribute('data-id')
                onloadprod.push(idmain)
                onloadprod.push(bprod)
            }
        }
        for (var m = 0; m < INC.config.bundle_skuPushed.length; m++) {
            var elcont = INC.config.bundle_skuPushed[m]
            for (var i = 0; i < bundleCartProductsArray.length; i++) {


                var findObj = new INC.classes.FindObj({
                    sku: bundleCartProductsArray[i]
                });
                var productObj = INC.dataStore.methods().getProductBySKU(findObj);
                // if (INC.debug) console.log(productObj);
                if (elcont == productObj.id) {
                    var productId = productObj.id;
                    var prepen_elm = this.createBundleCartAddedProductBlock(productId, bundleCartProducts[bundleCartProductsArray[i]], "pdp")
                    if (elBundleCartAddedBlock != null || elBundleCartAddedBlock != undefined) {
                        elBundleCartAddedBlock.appendChild(prepen_elm);
                    }
                    countcollect = +countcollect + +productObj.worthPrice
                }

                if (i == 0) {
                    var mainPrdPrc = productObj.regularPrice;
                }

            }
        }


        elBundleCartPriceRegularText.style.display = "none";
        if (totalActivePrice != totalRegularPrice) {
            elBundleCartPriceRegularText.style.display = "flex";
        }

        if (bundleCartProductsArray.length == 0) {
            setTimeout(function () {
                onloadpdp_delete = false;
                INC.config.sumarybtnrem = false
                document.querySelectorAll(getSelectorClassName(classNames, "productAddBlock"))[1].click();
                onloadpdp_delete = true;
            }, 5);
        }
        elBundleCartPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(totalActivePrice)
        elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.remove('simple_price')
        elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.remove('is_special_price')
        elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.remove('simple_price')
        elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.remove('is_special_price')
        var totalsaveprcs = get_discount_price(totalRegularPrice, totalActivePrice)
        var totalsavepers = get_discount_price_percentage(totalRegularPrice, totalActivePrice)
        if (totalRegularPrice != "0.00" && totalRegularPrice != totalActivePrice && totalRegularPrice != null && totalRegularPrice != "") {
            elBundleCartPriceRegularText.innerHTML = "<span>" + "Was" + "</span>" + INC.clientConfig.currencySymbol + formatter.format(totalRegularPrice)
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.add('is_special_price')
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.add('is_special_price')
            elbundlesavetext.innerHTML = "You save: " + formatter.format(totalsaveprcs) + " (" + (totalsavepers) + "%)";
        } else {
            elbundlesavetext.innerHTML = ""
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.add('simple_price')
        }
        if (window.innerWidth < 900) {
            elCartsummaryMainPrdtxtBlock.innerHTML = "Main product ";
            elCartsummaryMainPrdPrcBlock.innerText = ""
            if (totalMainProduct != undefined) {
                elCartsummaryMainPrdPrcBlock.innerText = formatter.format(totalMainProduct)
            }
            if (bundleCartProductsArray.length == 1) {

                if (totalAddonProducts == 0 || totalAddonProducts == 0.00) {
                    elCartsummaryAddonPrdtxtBlock.innerText = "No addon product selected ";
                    elCartsummaryAddonPrdPrcBlock.innerHTML = ""
                } else {
                    elCartsummaryAddonPrdtxtBlock.innerText = "1 addon product selected ";
                    elCartsummaryAddonPrdPrcBlock.innerHTML = elCartsummaryAddonPrdPrcBlock.innerText = "+ " + formatter.format(totalAddonProducts)
                }
            } else if (bundleCartProductsArray.length > 1) {
                if (totalMainProduct == 0 || totalMainProduct == 0.00) {
                    elCartsummaryAddonPrdtxtBlock.innerText = bundleCartProductsArray.length + " " + "addon products selected ";
                } else {
                    if (bundleCartProductsArray.length == 2) {
                        elCartsummaryAddonPrdtxtBlock.innerText = bundleCartProductsArray.length - 1 + " " + "addon product selected ";
                    } else {
                        elCartsummaryAddonPrdtxtBlock.innerText = bundleCartProductsArray.length - 1 + " " + "addon products selected ";
                    }

                }

                elCartsummaryAddonPrdPrcBlock.innerText = "+ " + formatter.format(totalAddonProducts)
            } else {
                elCartsummaryAddonPrdtxtBlock.innerText = "No addon product selected ";
                elCartsummaryAddonPrdPrcBlock.innerHTML = "$0.00"
            }
        }

        if (elPdpBundleCartBlock != null && elPdpBundleCartBlock != undefined) {
            var bundleCartProductsLength = Object.keys(bundleCartProducts).length;
            var elBundleCartTitleText = getViewElement("pdpBundleCartSummaryTitleText");
            var elBundleCartAddBtnText = getViewElement("pdpBundleCartSummaryAddBtnText");
            elBundleCartAddBtnText.style.textTransform = "none"
            if (window.innerWidth < 900) {
                elBundleCartTitleText.textContent = "Total bundle price:";
            } else {
                elBundleCartTitleText.textContent = "Total bundle price";
            }

            if (totalProductCount == 2) {
                elBundleCartAddBtnText.textContent = "Add both to Basket";
            } else if (totalProductCount == 3) {
                elBundleCartAddBtnText.textContent = "Add all three to Basket"
            } else if (totalProductCount == 4) {
                elBundleCartAddBtnText.textContent = "Add all four to Basket"
            } else if (totalProductCount == 5) {
                elBundleCartAddBtnText.textContent = "Add all five to Basket"
            } else if (totalProductCount == 6) {
                elBundleCartAddBtnText.textContent = "Add all six to Basket"
            }

            if (!(totalProductCount > 1)) {
                elBundleCartAddBtnText.textContent = "Add to Basket";
            }
        }

        var elPriceMainTitleText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceMainTitleText"));
        var elPriceMainFigureText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceMainFigureText"));
        var elPriceAddonTitleText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceAddonTitleText"));
        var elPriceAddonFigureText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartPriceAddonFigureText"));
        var elPriceRegularText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartSummaryPriceRegularText"));
        var elPriceActiveText = elPdpBundleCartBlock.querySelector(getSelectorClassName(classNames, "pdpBundleCartSummaryPriceActiveText"));

        elPriceMainTitleText.textContent = "Main Product Price ";
        elPriceAddonTitleText.textContent = "Add-on(s) Selected  " + ((totalAddonProductsCount > 0) ? totalAddonProductsCount : "");

        elPriceMainFigureText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(totalMainProduct)
        elPriceAddonFigureText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(totalAddonProducts)
        elPriceActiveText.innerHTML = INC.clientConfig.currencySymbol + formatter.format(totalActivePrice)

        setTimeout(function () {
            if (INC.dataStore.bundleCartProducts != null) {
                if (Object.keys(INC.dataStore.bundleCartProducts).length == 0) {
                    elBundleCartAddBtnText.textContent = "ADD BUNDLE TO BASKET";
                    elBundleCartAddBtnText.parentNode.parentNode.setAttribute('style', 'pointer-events: none;opacity: 0.5;')
                } else {
                    elBundleCartAddBtnText.parentNode.parentNode.setAttribute('style', 'pointer-events: auto;opacity: 1;')
                }
            }
        }, 100);
    }

}

INC.methods.createBundleCartAddedProductBlock = function (productId, qty, blockType) {
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
        if (just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active div') != null) {
            size = just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active div').innerText
        }
        if (just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block') != null) {
            color = just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-color')
        }
    }

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

    // elTitleText.innerText = productObj.name;
    var elImgTag1 = this.generateHTMLTags('img', {
        src: productObj.imageURL
    });
    elImgTag1.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
    if (onloadpdp == true) {
        elImgTag1.src = productObj.imageURL
    }
    elImg.appendChild(elImgTag1);

    var prod_module_elm = document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="' + productObj.mainId + '"]')
    var modal_attr_block = prod_module_elm.querySelector('.inc_product_modal_block')
    var zero_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-zero');
    var size_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-size');
    var color_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-color');
    var third_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-third');

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

    if (color_text != "" && color_text != undefined && color_text != null) {
        elAttColorText.innerText = sel_attr_text;
        elAttColorText.parentNode.parentNode.setAttribute('title', sel_attr_text)
    } else if (size_text != "" && size_text != null || zero_text != "" && zero_text != null) {
        elAttColorText.innerText = sel_attr_text;
        elAttColorText.parentNode.parentNode.setAttribute('title', sel_attr_text)
    }

    elAttColorText.style.textTransform = "none"
    var pTitleDiv = document.createElement('div');
    pTitleDiv.innerHTML = "<span>" + qty + 'x ' + "</span>" + productObj.name;
    // pTitleDiv.innerHTML = productObj.name;
    pTitleDiv.setAttribute('style', 'text-transform: unset;')
    elQtyText.innerHTML = qty

    var pLink = document.createElement('a');
    pLink.title = qty + 'x' + productObj.name //+ ((attColorText.length > 0) ? (" | " + attColorText) : "");

    // pLink.setAttribute('href', productObj["url"]);
    pLink.appendChild(pTitleDiv);
    elTitleText.appendChild(pLink);

    elPriceActiveText.innerText = INC.clientConfig.currencySymbol + formatter.format(productObj.activePrice * qty)

    elEditTextBlock.addEventListener("click", function () {
        INC.config.sumarybtnrem = true
        if (INC.config.deviceType == "mobile") {
            if (INC.debug) console.log(productObj);
            if (INC.debug) console.log(document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + '[data-main_id="' + productObj.mainId + '"]'));

            if (document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + '[data-main_id="' + productObj.mainId + '"]') != null)
                document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListItemBlock") + '[data-main_id="' + productObj.mainId + '"]').click();
        }

        if (INC.config.deviceType == "desktop") {
            if (INC.debug) console.log(document.querySelector(getSelectorClassName(classNames, "productModuleBlock") + '[data-id="' + productObj.id + '"]'));
            Array.prototype.forEach.call(document.querySelector(getSelectorClassName(classNames, "pdpBundleProductListMainBlock")).querySelectorAll(getSelectorClassName(classNames, "productModuleBlock")), function (el, index) {
                if (INC.debug) console.log(el);
                if (INC.debug) console.log("index of el: " + index);
            });
            // }
        }

        setTimeout(function () {
            document.querySelector(getSelectorClassName(classNames, "productBlock") + '[data-id="' + productObj.id + '"]').parentNode.parentNode.querySelector('.inc_product_modal_block').classList.add('inc_active');
            document.querySelector('html').classList.add('inc_overlay');
            INC.config.sumarybtnrem = false
        }, 50);
    });
    elEditImgBlock.addEventListener("click", function () {
        var prdname = this.parentNode.parentNode.querySelector('.inc_pdp_bundle_cart_added_product_title_text').innerText.split('x')[1]
        var mainprodname = document.querySelector('.inc_pdp_product-main_block .inc_product_desc_title_text').innerText
        INC.config.sumarybtnrem = true
        window.dataLayer = window.dataLayer || [];
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({
            'event': 'GAEvent',
            'eventCategory': 'Bundle',
            'eventAction': 'item_removed',
            'eventLabel': mainprodname,
            'item': prdname
        });
        document.querySelector(getSelectorClassName(classNames, "productBlock") + '[data-id="' + productObj.id + '"]').querySelector(getSelectorClassName(classNames, "productAddBlock")).click();
        setTimeout(function () {
            INC.config.sumarybtnrem = false
        }, 50);
    });
    elEditImg.innerText = "";
    return addedProductBlock;
}

INC.methods.clear = function () {
    if (document.querySelector('.sidebar_outer') != null) {
        Array.prototype.forEach.call(document.querySelectorAll('.sidebar_outer'), function (el) {
            el.parentNode.removeChild(el);
        });

        Array.prototype.forEach.call(document.querySelectorAll(".sidebar_outer"), function (el) {
            el.parentNode.removeChild(el);
        });
    }
    if (document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarModalBlock")) != null) {
        Array.prototype.forEach.call(document.querySelectorAll(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarModalBlock")), function (el) {
            el.parentNode.removeChild(el);
        });

        Array.prototype.forEach.call(document.querySelectorAll(".inc_sidebar_overlay_block"), function (el) {
            el.parentNode.removeChild(el);
        });
    }

    if (document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.am.className, "afModalBlock")) != null) {
        Array.prototype.forEach.call(document.querySelectorAll(INC.methods.getSelectorClassName(INC.uiConfig.am.className, "afModalBlock")), function (el) {
            el.parentNode.removeChild(el);
        });
    }

    if (document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.pdp.className, "pdpModalBlock")) != null) {
        Array.prototype.forEach.call(document.querySelectorAll(INC.methods.getSelectorClassName(INC.uiConfig.pdp.className, "pdpModalBlock")), function (el) {
            el.parentNode.removeChild(el);
        });
    }
}

INC.methods.getElementChilds = function (child, pageType) {
    var uiConfig = INC.uiConfig;
    var pType = pageType;
    var vDOM = uiConfig[pType]["dom"];
    // if (INC.debug) console.log(child);
    var elementHTML = this.generateHTMLTags('div', {
        class: uiConfig[pType]["className"][child]
    })
    if (vDOM.hasOwnProperty(child)) {
        vDOM[child].forEach(function (subChild) {
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
            // if(attributeObj[attr] != undefined){
            //     element.setAttribute(attr, attributeObj[attr]);
            // }
            if (attributeObj[attr] != undefined) {
                element.setAttribute(attr, attributeObj[attr]);
                element.setAttribute('data-src', attributeObj[attr]);
            }
        }
        }
    }
    if (childNode != null && childNode != undefined) element.appendChild(childNode);
    if (eventListner != null && childNode != undefined) element.addEventListener(eventListner, callback);
    return element;
}



INC.methods.addProductToCart = function (findObj, qty, pageType, productBlock, add_btn_click, add_prod_im, btn_addtocart) {
    if((window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=3') >= 0)){
                
    }else{
        document.querySelector('html').classList.remove('inc_overlay')
    }
    
    if (qty < 1) qty = 1
    var formKey = ""
    var addProductURL = INC.config.addToBasketURL;
    if (document.querySelector('input[name="form_key"]') != null) {
        formKey = document.querySelector('input[name="form_key"]').value;
    }
    var addProductURL = INC.config.addToBasketURL;
    var findObj = new INC.classes.FindObj(findObj);
    var productObj = INC.dataStore.methods().getProductById(findObj);
    var data0 = {};
    var formData = []

    var storeId = WCParamJS.storeId;
    var catalogId = WCParamJS.catalogId;
    var langId = -1;
    // var partNumberWR;
    var inventoryValidation = true;
    var pahDoInventory = 'N';
    //var catEntryId = document.querySelector('.dth-mini-basket__items__qty-remove').getAttribute('data-orderitemci');
    var quantity = 1;
    var isAddToDelivery = true;
    var requesttype = 'ajax';

    document.querySelector('body').classList.remove('inc_popup_open');

    //formData.push(data0)
    var mainids = productBlock.getAttribute('data-main_id')

    data0["storeId"] = storeId;
    data0["catalogId"] = catalogId;
    data0["langId"] = langId;
    data0["orderId"] = '.';
    data0["partNumberWR"] = productObj.mainsku;
    data0["calculationUsage"] = "-1,-2,-5,-6,-7";
    data0["inventoryValidation"] = inventoryValidation;
    data0["pahDoInventory"] = pahDoInventory;
    data0["catEntryId"] = productObj.internalCategoryId;
    data0["quantity"] = qty;
    data0["isAddToDelivery"] = isAddToDelivery;
    data0["requesttype"] = requesttype;
    var url0 = addProductURL;
    formData.push(data0)
    var addedproducdetails = []
    var mainproductids = productObj.mainId
    var sizeText = ""
    var weightText = ""
    if (productObj.option[0] != undefined || productObj.option[1] != undefined || productObj.option[2] != undefined) {
        if (productObj.option[1] != undefined) {
            if (productObj.option[1].code == "Size") {
                sizeText = productObj.option[1].text
            } else if (productObj.option[1].code == "Weight") {
                weightText = productObj.option[1].text
            } else if (productObj.option[1].code == "Volume") {
                sizeText = productObj.option[1].text
            }
        }
    }
    addedproducdetails.push({
        'name': productObj.name,
        'id': productObj.mainId,
        'price': productObj.activePrice,
        'brand': productObj.manufacturer,
        'category': productObj.categoryName,
        'variant': productObj.id,
        'quantity': qty,
        'weight': weightText,
        'size': sizeText, //track if available,
    })
    setJsonDatatoCookie(addedproducdetails)
    // dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
    // dataLayer.push({
    //     'event': 'addToCart',
    //     'product_type' : 'Bundle', //track if this was added as a bundle if true. If false 'No Bundle'
    //     'ecommerce': {
    //     'currencyCode': 'GBP',
    //     'add': {                                // 'add' actionFieldObject measures.
    //         'products':addedproducdetails
    //         }
    //     }
    // });
    dojo.xhrPost({
        url: url0,
        handleAs: "json-comment-filtered",
        form: null,
        content: formData[0],
        service: wc.service.services.AddOrderItem,
        load: function (_255, _256) {
            INC.config.disablebtn = true
            if (_255.errorMessage != undefined && _255.errorMessage != "") {
                oosproduct(mainproductids, qty)
                var remerrorjust = document.querySelectorAll('.inc_justerror')
                for (r1 = 0; r1 < remerrorjust.length; r1++) {
                    if (remerrorjust[r1] != null) {
                        remerrorjust[r1].parentNode.removeChild(remerrorjust[r1])
                    }
                }
                if (document.querySelector('.inc_justerror') == null) {
                    var headertitle = document.querySelector('.inc_sidebar_modal_cart_and_title_block')
                    var errormes = generate_html_tag('div', 'inc_justerror')
                    var errormestext = generate_html_tag('span', 'inc_justerror_text')
                    // if(errormestext.innerHTML == null ){
                    errormestext.innerHTML = "<span>An unknown error has occurred. Please refresh or try again later</span>"
                    // }
                    errormes.appendChild(errormestext)
                    headertitle.parentNode.insertBefore(errormes, headertitle)
                    jQuery('.inc_sidebar_modal_block.inc_active').animate({
                        scrollTop: jQuery('.inc_header_title_text_block').height() - 100
                    }, 'fast');
                    if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
                        document.querySelector('html').classList.add('inc_overlay');
                    }

                    setTimeout(function () {
                        var remerrorjust = document.querySelectorAll('.inc_justerror')
                        for (r = 0; r < remerrorjust.length; r++) {
                            if (remerrorjust[r] != null) {
                                remerrorjust[r].parentNode.removeChild(remerrorjust[r])
                            }
                        }
                    }, 5000)
                }
                INC.clientConfig.OOS.push(productObj.mainId)
                INC.clientConfig.OOS_MESG.push(_255.errorMessage)
            } else {
                INC.config.pdpaddedProductList.push(productObj.mainId)
                INC.config.sidebarremovedprod.push(mainids)
                // if(INC.config.clientbtn){
                if (INC.config.pageType != "cartPage" && !INC.config.recommendation) INC.methods.addProductToSidebarCart(findObj, qty, productBlock, null, btn_addtocart);
                // }


                if (INC.config.pageType == "cartPage" || INC.config.recommendation) {
                    if (document.querySelector('.inc_product_modal_block.inc_active') != null) {
                        document.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                    }
                    
                    document.querySelector('html').classList.remove('inc_overlay')
                    productBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.am.className, "productAddText")).innerText = "Added";
                    if (productBlock != null) {
                        productBlock.parentNode.removeChild(productBlock);
                    }
                    
                    window.location.reload();
                }

                add_btn_click.innerText = "Added";
                setTimeout(function () {
                    add_btn_click.innerText = "Add To Cart";
                    Array.prototype.forEach.call(add_btn_click, function (el) {
                        el.innerText = "Add";
                    });
                    if (btn_addtocart != undefined) {
                        if (btn_addtocart.parentNode.parentNode != null) btn_addtocart.parentNode.parentNode.setAttribute("style", "pointer-events: auto;opacity: 1;");
                    }
                    INC.config.disablebtn = true
                }, 2000);
                var allprd = document.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block').length

                if (document.querySelector('.inc_recommended_products_list_block .inc_product_module_block') == null || allprd == 1) {
                    if (document.querySelector('.inc_recommended_tabs_list_item_block.inc_active') != null) {
                        var remcat = document.querySelector('.inc_recommended_tabs_list_item_block.inc_active')
                        if (remcat != null) {
                            remcat.parentNode.removeChild(remcat)

                            if (document.querySelector('.inc_recommended_tabs_list_item_block') == null) {
                                ////INC.methods.hideSidebar()
                                window.location.href = INC.clientConfig.checkoutLink;
                                // document.querySelector('.inc_header_continue_img_block').click()
                                // jQuery("html, body").animate({
                                //     scrollTop: 0
                                // }, "slow");
                                // document.querySelector('.-js-basket-trigger').click()
                            }
                            if (document.querySelectorAll('.inc_recommended_tabs_list_item_block').length > 1) {
                                if (productBlock != null) {
                                    productBlock.parentNode.removeChild(productBlock);
                                }
                                if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                                    INC.config.categorytabclick = true
                                    document.querySelector('.inc_recommended_tabs_list_item_block').click()
                                    INC.config.categorytabclick = false
                                }
                            } else {
                                if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                                    INC.config.categorytabclick = true
                                    document.querySelector('.inc_recommended_tabs_list_item_block').click()
                                    INC.config.categorytabclick = false
                                }
                                document.querySelector('.inc_recommended_products_list_block').setAttribute('style', 'margin-left:0;')
                            }
                        }
                    }
                } else {

                    if (productBlock != null && productBlock.parentNode != null) {
                        productBlock.parentNode.removeChild(productBlock);
                    }
                }
                INC.clientConfig.slidevalue = 0
                INC.clientConfig.offset = 0;
                var seidebar_pr_length = document.querySelectorAll('.inc_sidebar_modal_block .inc_product_module_block').length;
                if (INC.config.pageType != "cartPage" && !INC.config.recommendation) {
                    if (document.querySelector('.inc_sidebar_cart_added_block') != null) {
                        document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_active')
                    }
                    if (document.querySelector('.inc_recommended_products_list_block') != null) document.querySelector('.inc_recommended_products_list_block').setAttribute('style', 'margin-left:0;')
                    if (!(seidebar_pr_length > 2)) {
                        document.querySelector('.inc_recommended_products_right_block').style.visibility = "hidden";
                        document.querySelector('.inc_recommended_products_left_block').style.visibility = "hidden";
                        document.querySelector('.inc_recommended_products_left_btn_img_block').style.visibility = "hidden";
                    }
                    if (seidebar_pr_length > 2) {
                        INC.clientConfig.slidevalue = 0
                        INC.clientConfig.offset = 0;
                        document.querySelector('.inc_recommended_products_list_block').setAttribute('style', 'margin-left:0;')
                        document.querySelector('.inc_recommended_products_right_block').style.visibility = "visible";
                        document.querySelector('.inc_recommended_products_right_block .inc_recommended_products_right_btn_img_block').setAttribute("style", "pointer-events: auto;opacity:1");
                        document.querySelector('.inc_recommended_products_right_block').style.visibility = "visible";
                        document.querySelector('.inc_recommended_products_right_block .inc_recommeded_products_right_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                        document.querySelector('.inc_recommended_products_left_block').style.visibility = "visible";
                        document.querySelector('.inc_recommended_products_left_block .inc_recommended_products_left_btn_block').style.visibility = "visible";
                        document.querySelector('.inc_recommended_products_left_block .inc_recommended_products_left_btn_block .inc_recommended_products_left_btn_img').style.visibility = "visible";

                        document.querySelector('.inc_recommended_products_left_block .inc_recommended_products_left_btn_block .inc_recommended_products_left_btn_img_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                        // document.querySelector('.inc_recommended_products_left_btn_img_block').setAttribute("style", "opacity:0.5");
                    }

                    document.querySelector('.inc_recommended_products_list_block').setAttribute('style', 'margin-left:0;')

                    var plength = document.querySelectorAll('.inc_sidebar_modal_block .inc_product_module_block').length;
                    if (plength == 1) {
                        document.querySelector('.inc_recommended_products_right_block').style.visibility = "hidden";
                        document.querySelector('.inc_recommended_products_left_block').style.visibility = "hidden";
                    }
                }
            }
            callbacksuccessinc(_255, _256)
            if (document.querySelector('.dth-add-to-basket.-js-add-to-basket .dth-add-to-basket__image') != null) {
                document.querySelector('.dth-add-to-basket.-js-add-to-basket .dth-add-to-basket__image').src = productObj.imageURL
            }
        },
        error: function (_25c, _25d) {
            var _25e = dojo.i18n.getLocalization("wc", "common");
            dojo.publish("ajaxRequestCompleted");
            if (document.querySelector('.dth-add-to-basket.-js-add-to-basket .dth-add-to-basket__image') != null) {
                document.querySelector('.dth-add-to-basket.-js-add-to-basket .dth-add-to-basket__image').src = productObj.imageURL
            }
            if (INC.config.pageType == "cartPage" || INC.config.recommendation) {
                if (document.querySelector('.inc_product_modal_block.inc_active') != null) {
                    document.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                }
                productBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.am.className, "productAddText")).innerText = "Not Added";
                productBlock.querySelector('.inc_product_variant_simple_text').innerText = "Not Added";
                if (productBlock != null) {
                    productBlock.parentNode.removeChild(productBlock);
                }
                
                window.location.reload();
            }
            productBlock.querySelector('.inc_product_variant_simple_text').innerText = "Not Added";
            add_btn_click.innerText = "Not Added";
            if (productBlock != null) {
                productBlock.parentNode.removeChild(productBlock);
            }
            if((window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=3') >= 0)){
                
            }else{
                if (document.querySelector('.sidebar_outer.sidebar_outer_active') == null) {
                    document.querySelector('html').classList.remove('inc_overlay')
                }
            }
            
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
        case "ticket":
            pageType = "103";
            break;
        case "other":
            pageType = "101";
            break;
    }
    var pname = productBlock.querySelector('.inc_product_desc_title_text').innerText;
    var pprice = productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('$', '');
    var eventDataObj = {};
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
INC.methods.addBundleToCart = function (btn_cart) {
    if (document.querySelector('.dth-add-to-basket.-js-add-to-basket') != null) {
        document.querySelector('.dth-add-to-basket.-js-add-to-basket').style.opacity = "0"
    }
    INC.clientConfig.OOS = []
    item_inc = []
    var storeId = WCParamJS.storeId;
    var catalogId = WCParamJS.catalogId;
    var langId = -1;
    // var partNumberWR;
    var inventoryValidation = true;
    var pahDoInventory = 'N';
    //var catEntryId = document.querySelector('.dth-mini-basket__items__qty-remove').getAttribute('data-orderitemci');
    var quantity = 1;
    var isAddToDelivery = true;
    var requesttype = 'ajax';

    var addProductURL = INC.config.addToBasketURL;
    if (document.querySelector('input[name="form_key"]') != null) {
        formKey = document.querySelector('input[name="form_key"]').value;
    }
    var dataStore = INC.dataStore;
    var mainProductId = document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.pdp.className, "productBlock")).getAttribute('data-main_id');
    var searchParamsObjArray = [];
    var formData = []
    formData = new FormData();
    var t = 0;
    var data0 = {};
    var data1 = {};
    var data2 = {};
    var data3 = {};
    var data4 = {};
    var data5 = {};
    var data6 = {};
    var url0 = null;
    var url1 = null;
    var url2 = null;
    var url3 = null;
    var url4 = null;
    var url5 = null;
    var url6 = null;
    var pid0 = null;
    var pid1 = null;
    var pid2 = null;
    var pid3 = null;
    var pid4 = null;
    var pid5 = null;
    var pid6 = null;
    var formData = []
    var form_data_json = []
    var count_pr_to_add = 0
    var addedproducdetails = []
    var total_length = Object.keys(dataStore.bundleCartProducts);
    Object.keys(dataStore.bundleCartProducts).forEach(function (bundleCartProduct) {
        var findObj = new INC.classes.FindObj({
            id: bundleCartProduct
        });
        var productObj = INC.dataStore.methods().getProductById(findObj);
        if (count_pr_to_add == 0) {
            data0["storeId"] = storeId;
            data0["catalogId"] = catalogId;
            data0["langId"] = langId;
            data0["orderId"] = '.';
            data0["partNumberWR"] = productObj.mainsku;
            data0["calculationUsage"] = "-1,-2,-5,-6,-7";
            data0["inventoryValidation"] = inventoryValidation;
            data0["pahDoInventory"] = pahDoInventory;
            data0["catEntryId"] = productObj.internalCategoryId;
            data0["quantity"] = dataStore.bundleCartProducts[bundleCartProduct];
            data0["isAddToDelivery"] = isAddToDelivery;
            data0["requesttype"] = requesttype;
            url0 = addProductURL;
            pid0 = productObj.mainId
            formData.push(data0)
        } else if (count_pr_to_add == 1) {
            data1["storeId"] = storeId;
            data1["catalogId"] = catalogId;
            data1["langId"] = langId;
            data1["partNumberWR"] = productObj.mainsku;
            data1["inventoryValidation"] = inventoryValidation;
            data1["pahDoInventory"] = pahDoInventory;
            data1["catEntryId"] = productObj.internalCategoryId;
            data1["quantity"] = dataStore.bundleCartProducts[bundleCartProduct];
            data1["isAddToDelivery"] = isAddToDelivery;
            data1["requesttype"] = requesttype;
            url1 = addProductURL;
            pid1 = productObj.mainId
            formData.push(data1)
        } else if (count_pr_to_add == 2) {
            data2["storeId"] = storeId;
            data2["catalogId"] = catalogId;
            data2["langId"] = langId;
            data2["partNumberWR"] = productObj.mainsku;
            data2["inventoryValidation"] = inventoryValidation;
            data2["pahDoInventory"] = pahDoInventory;
            data2["catEntryId"] = productObj.internalCategoryId;
            data2["quantity"] = dataStore.bundleCartProducts[bundleCartProduct];
            data2["isAddToDelivery"] = isAddToDelivery;
            data2["requesttype"] = requesttype;
            url2 = addProductURL;
            pid2 = productObj.mainId
            formData.push(data2)
        } else if (count_pr_to_add == 3) {
            data3["storeId"] = storeId;
            data3["catalogId"] = catalogId;
            data3["langId"] = langId;
            data3["partNumberWR"] = productObj.mainsku;
            data3["inventoryValidation"] = inventoryValidation;
            data3["pahDoInventory"] = pahDoInventory;
            data3["catEntryId"] = productObj.internalCategoryId;
            data3["quantity"] = dataStore.bundleCartProducts[bundleCartProduct];
            data3["isAddToDelivery"] = isAddToDelivery;
            data3["requesttype"] = requesttype;
            url3 = addProductURL;
            pid3 = productObj.mainId
            formData.push(data3)
        } else if (count_pr_to_add == 4) {
            data4["storeId"] = storeId;
            data4["catalogId"] = catalogId;
            data4["langId"] = langId;
            data4["partNumberWR"] = productObj.mainsku;
            data4["inventoryValidation"] = inventoryValidation;
            data4["pahDoInventory"] = pahDoInventory;
            data4["catEntryId"] = productObj.internalCategoryId;
            data4["quantity"] = dataStore.bundleCartProducts[bundleCartProduct];
            data4["isAddToDelivery"] = isAddToDelivery;
            data4["requesttype"] = requesttype;
            url4 = addProductURL;
            pid4 = productObj.mainId
            formData.push(data4)
        } else if (count_pr_to_add == 5) {
            data5["storeId"] = storeId;
            data5["catalogId"] = catalogId;
            data5["langId"] = langId;
            data5["partNumberWR"] = productObj.mainsku;
            data5["inventoryValidation"] = inventoryValidation;
            data5["pahDoInventory"] = pahDoInventory;
            data5["catEntryId"] = productObj.internalCategoryId;
            data5["quantity"] = dataStore.bundleCartProducts[bundleCartProduct];
            data5["isAddToDelivery"] = isAddToDelivery;
            data5["requesttype"] = requesttype;
            url5 = addProductURL;
            pid5 = productObj.mainId
            formData.push(data5)
        }
        var sizeText = ""
        var weightText = ""
        if (productObj.option[0] != undefined || productObj.option[1] != undefined || productObj.option[2] != undefined) {
            if (productObj.option[1] != undefined) {
                if (productObj.option[1].code == "Size") {
                    sizeText = productObj.option[1].text
                } else if (productObj.option[1].code == "Weight") {
                    weightText = productObj.option[1].text
                } else if (productObj.option[1].code == "Volume") {
                    sizeText = productObj.option[1].text
                }
            }
        }
        addedproducdetails.push({
            'name': productObj.name,
            'id': productObj.mainId,
            'price': productObj.activePrice,
            'brand': productObj.manufacturer,
            'category': productObj.categoryName,
            'variant': productObj.id,
            'quantity': dataStore.bundleCartProducts[bundleCartProduct],
            'weight': weightText,
            'size': sizeText, //track if available,
        })
        count_pr_to_add++
        if (total_length.length == count_pr_to_add) {
            ajax_add_to_cart(formData, btn_cart, mainProductId, url0, url1, url2, url3, url4, url5, pid0, pid1, pid2, pid3, pid4, pid5)
            setJsonDatatoCookie(addedproducdetails)
            // dataLayer.push({ ecommerce: null });  // Clear the previous ecommerce object.
            // dataLayer.push({
            //     'event': 'addToCart',
            //     'product_type' : 'Bundle', //track if this was added as a bundle if true. If false 'No Bundle'
            //     'ecommerce': {
            //     'currencyCode': 'GBP',
            //     'add': {                                // 'add' actionFieldObject measures.
            //         'products':addedproducdetails
            //         }
            //     }
            // });
        }
    });
    var timeoutOffset = 0;

    add_to_cart_tracking_multiple(mainProductId)


    // Object.keys(dataStore.bundleCartProducts).forEach(function (bundleCartProduct) {
    //     var findObj = new INC.classes.FindObj({ id: bundleCartProduct });
    //     var productObj = INC.dataStore.methods().getProductById(findObj);

    //     var eventDataObj = {};
    //     var pageType = "100";

    //     eventDataObj["bundle_data"] = {
    //         "id": productObj.bundleId,
    //         "product_ids": [mainProductId, productObj.mainId],
    //         "product_id": mainProductId
    //     }
    //     INC.methods.trackingEvents("bundleAddToCart", eventDataObj, pageType);
    // });
}

function ajax_add_to_cart(formData, btn_cart, mainProductId, url0, url1, url2, url3, url4, url5, p0, p1, p2, p3, p4, p5) {
    INC.clientConfig.OOS = []
    INC.clientConfig.OOS_MESG = []

    callprodA()

    function callprodA() {
        dojo.xhrPost({
            url: url0,
            handleAs: "json-comment-filtered",
            form: null,
            content: formData[0],
            service: wc.service.services.AddOrderItem,
            load: function (_255, _256) {
                if (_255.errorMessage != undefined && _255.errorMessage != "") {
                    oosproduct(p0, formData[0].quantity)
                    INC.clientConfig.OOS.push(p0)
                    INC.clientConfig.OOS_MESG.push(_255.errorMessage)
                }

                if (url1 == undefined) {
                    if (document.querySelector('.dth-add-to-basket.-js-add-to-basket.active') != null) {
                        document.querySelector('.dth-add-to-basket.-js-add-to-basket.active').style.opacity = ""
                    }
                    INC.config.disablebtn = true
                    getTrackingPixel()
                    if (btn_cart != undefined) {
                        btn_cart.classList.remove('inc_loading')
                    }
                    if (document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading') != null) {
                        document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading').classList.remove('inc_loading')
                    }
                    if (document.querySelector('.inc_recommended_tabs_list_item_block') == null) {
                        // window.location.href = INC.clientConfig.checkoutLink;     
                        jQuery("html, body").animate({
                            scrollTop: 0
                        }, "slow");
                    }

                    if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                        document.querySelector('html').classList.add('inc_overlay');
                        if (_255.errorMessage != undefined && _255.errorMessage != "") {

                        } else {
                            INC.methods.showSidebar();
                            INC.methods.updateSidebarBlock();
                        }
                        if (document.querySelector('.sidebar_outer.sidebar_outer_active') == null) {
                            document.querySelector('html').classList.remove('inc_overlay')
                        }
                    }
                }

                if (url1 != undefined) {
                    callprodB()
                }
                callbacksuccessinc(_255, _256)
                if (document.querySelector('.inc_product_desc_add_block.Inc_checked') != null) {
                    var imgscrc = document.querySelector('.inc_product_desc_add_block.Inc_checked').parentNode.parentNode.parentNode.querySelector('.inc_product_img_main_img img').src
                    if (imgscrc != undefined) {
                        if (document.querySelector('.dth-add-to-basket.-js-add-to-basket .dth-add-to-basket__image') != null) {
                            document.querySelector('.dth-add-to-basket.-js-add-to-basket .dth-add-to-basket__image').src = imgscrc
                        }
                    }
                }
            },
            error: function (_25c, _25d) {
                var _25e = dojo.i18n.getLocalization("wc", "common");
                dojo.publish("ajaxRequestCompleted");
                if (url1 == undefined) {
                    INC.config.disablebtn = true
                    getTrackingPixel()
                    if (btn_cart != undefined) {
                        btn_cart.classList.remove('inc_loading')
                    }
                    if (document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading') != null) {
                        document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading').classList.remove('inc_loading')
                    }
                    if (document.querySelector('.inc_recommended_tabs_list_item_block') == null) {
                        // window.location.href = INC.clientConfig.checkoutLink; 
                        jQuery("html, body").animate({
                            scrollTop: 0
                        }, "slow");
                    }

                    if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                        document.querySelector('html').classList.add('inc_overlay');
                        INC.methods.showSidebar();
                        INC.methods.updateSidebarBlock();
                        if (document.querySelector('.sidebar_outer.sidebar_outer_active') == null) {
                            document.querySelector('html').classList.remove('inc_overlay')
                        }
                    }
                    if (document.querySelector('.inc_product_desc_add_block.Inc_checked') != null) {
                        var imgscrc = document.querySelector('.inc_product_desc_add_block.Inc_checked').parentNode.parentNode.parentNode.querySelector('.inc_product_img_main_img img').src
                        if (imgscrc != undefined) {
                            if (document.querySelector('.dth-add-to-basket.-js-add-to-basket .dth-add-to-basket__image') != null) {
                                document.querySelector('.dth-add-to-basket.-js-add-to-basket .dth-add-to-basket__image').src = imgscrc
                            }
                        }
                    }
                }

                if (url1 != undefined) {
                    callprodB()
                }

            }
        });
    }

    function callprodB() {
        dojo.xhrPost({
            url: url1,
            handleAs: "json-comment-filtered",
            form: null,
            content: formData[1],
            service: wc.service.services.AddOrderItem,
            load: function (_255, _256) {
                if (_255.errorMessage != undefined && _255.errorMessage != "") {
                    oosproduct(p1, formData[1].quantity)
                    INC.clientConfig.OOS.push(p1)
                    INC.clientConfig.OOS_MESG.push(_255.errorMessage)
                }

                if (url2 == undefined) {
                    if (document.querySelector('.dth-add-to-basket.-js-add-to-basket.active') != null) {
                        document.querySelector('.dth-add-to-basket.-js-add-to-basket.active').style.opacity = ""
                    }
                    INC.config.disablebtn = true
                    getTrackingPixel()
                    if (btn_cart != undefined) {
                        btn_cart.classList.remove('inc_loading')
                    }
                    if (document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading') != null) {
                        document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading').classList.remove('inc_loading')
                    }
                    if (document.querySelector('.inc_recommended_tabs_list_item_block') == null) {
                        // window.location.href = INC.clientConfig.checkoutLink;   
                        jQuery("html, body").animate({
                            scrollTop: 0
                        }, "slow");
                    }

                    if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                        document.querySelector('html').classList.add('inc_overlay');
                        if (_255.errorMessage != undefined && _255.errorMessage != "") {

                        } else {
                            INC.methods.showSidebar();
                            INC.methods.updateSidebarBlock();
                        }
                        if (document.querySelector('.sidebar_outer.sidebar_outer_active') == null) {
                            document.querySelector('html').classList.remove('inc_overlay')
                        }
                    }
                }

                if (url2 != undefined) {
                    callprodC()
                }
                callbacksuccessinc(_255, _256)
                if (document.querySelector('.inc_product_desc_add_block.Inc_checked') != null) {
                    var imgscrc = document.querySelector('.inc_product_desc_add_block.Inc_checked').parentNode.parentNode.parentNode.querySelector('.inc_product_img_main_img img').src
                    if (imgscrc != undefined) {
                        if (document.querySelector('.dth-add-to-basket.-js-add-to-basket .dth-add-to-basket__image') != null) {
                            document.querySelector('.dth-add-to-basket.-js-add-to-basket .dth-add-to-basket__image').src = imgscrc
                        }
                    }
                }
            },
            error: function (_25c, _25d) {
                var _25e = dojo.i18n.getLocalization("wc", "common");
                dojo.publish("ajaxRequestCompleted");
                if (url2 == undefined) {
                    INC.config.disablebtn = true
                    getTrackingPixel()
                    if (btn_cart != undefined) {
                        btn_cart.classList.remove('inc_loading')
                    }
                    if (document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading') != null) {
                        document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading').classList.remove('inc_loading')
                    }
                    if (document.querySelector('.inc_recommended_tabs_list_item_block') == null) {
                        // window.location.href = INC.clientConfig.checkoutLink;  
                        jQuery("html, body").animate({
                            scrollTop: 0
                        }, "slow");
                    }

                    if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                        document.querySelector('html').classList.add('inc_overlay');
                        INC.methods.showSidebar();
                        INC.methods.updateSidebarBlock();
                        if (document.querySelector('.sidebar_outer.sidebar_outer_active') == null) {
                            document.querySelector('html').classList.remove('inc_overlay')
                        }
                    }
                    if (document.querySelector('.inc_product_desc_add_block.Inc_checked') != null) {
                        var imgscrc = document.querySelector('.inc_product_desc_add_block.Inc_checked').parentNode.parentNode.parentNode.querySelector('.inc_product_img_main_img img').src
                        if (imgscrc != undefined) {
                            if (document.querySelector('.dth-add-to-basket.-js-add-to-basket .dth-add-to-basket__image') != null) {
                                document.querySelector('.dth-add-to-basket.-js-add-to-basket .dth-add-to-basket__image').src = imgscrc
                            }
                        }
                    }
                }

                if (url2 != undefined) {
                    callprodC()
                }
            }
        });
    }

    function callprodC() {
        dojo.xhrPost({
            url: url2,
            handleAs: "json-comment-filtered",
            form: null,
            content: formData[2],
            service: wc.service.services.AddOrderItem,
            load: function (_255, _256) {
                if (_255.errorMessage != undefined && _255.errorMessage != "") {
                    oosproduct(p2, formData[2].quantity)
                    INC.clientConfig.OOS.push(p2)
                    INC.clientConfig.OOS_MESG.push(_255.errorMessage)
                }

                if (url3 == undefined) {
                    if (document.querySelector('.dth-add-to-basket.-js-add-to-basket.active') != null) {
                        document.querySelector('.dth-add-to-basket.-js-add-to-basket.active').style.opacity = ""
                    }
                    INC.config.disablebtn = true
                    getTrackingPixel()
                    if (btn_cart != undefined) {
                        btn_cart.classList.remove('inc_loading')
                    }
                    if (document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading') != null) {
                        document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading').classList.remove('inc_loading')
                    }
                    if (document.querySelector('.inc_recommended_tabs_list_item_block') == null) {
                        // window.location.href = INC.clientConfig.checkoutLink;
                        jQuery("html, body").animate({
                            scrollTop: 0
                        }, "slow");
                    }

                    if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                        document.querySelector('html').classList.add('inc_overlay');
                        if (_255.errorMessage != undefined && _255.errorMessage != "") {

                        } else {
                            INC.methods.showSidebar();
                            INC.methods.updateSidebarBlock();
                        }
                        if (document.querySelector('.sidebar_outer.sidebar_outer_active') == null) {
                            document.querySelector('html').classList.remove('inc_overlay')
                        }
                    }
                }

                if (url3 != undefined) {
                    callprodD()
                }
                callbacksuccessinc(_255, _256)
                if (document.querySelector('.inc_product_desc_add_block.Inc_checked') != null) {
                    var imgscrc = document.querySelector('.inc_product_desc_add_block.Inc_checked').parentNode.parentNode.parentNode.querySelector('.inc_product_img_main_img img').src
                    if (imgscrc != undefined) {
                        if (document.querySelector('.dth-add-to-basket.-js-add-to-basket .dth-add-to-basket__image') != null) {
                            document.querySelector('.dth-add-to-basket.-js-add-to-basket .dth-add-to-basket__image').src = imgscrc
                        }
                    }
                }
            },
            error: function (_25c, _25d) {
                var _25e = dojo.i18n.getLocalization("wc", "common");
                dojo.publish("ajaxRequestCompleted");
                if (url3 == undefined) {
                    INC.config.disablebtn = true
                    getTrackingPixel()
                    if (btn_cart != undefined) {
                        btn_cart.classList.remove('inc_loading')
                    }
                    if (document.querySelector('.inc_recommended_tabs_list_item_block') == null) {
                        // window.location.href = INC.clientConfig.checkoutLink;                  
                        jQuery("html, body").animate({
                            scrollTop: 0
                        }, "slow");
                    }

                    if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                        document.querySelector('html').classList.add('inc_overlay');
                        INC.methods.showSidebar();
                        INC.methods.updateSidebarBlock();
                        if (document.querySelector('.sidebar_outer.sidebar_outer_active') == null) {
                            document.querySelector('html').classList.remove('inc_overlay')
                        }
                    }
                    if (document.querySelector('.inc_product_desc_add_block.Inc_checked') != null) {
                        var imgscrc = document.querySelector('.inc_product_desc_add_block.Inc_checked').parentNode.parentNode.parentNode.querySelector('.inc_product_img_main_img img').src
                        if (imgscrc != undefined) {
                            if (document.querySelector('.dth-add-to-basket.-js-add-to-basket .dth-add-to-basket__image') != null) {
                                document.querySelector('.dth-add-to-basket.-js-add-to-basket .dth-add-to-basket__image').src = imgscrc
                            }
                        }
                    }
                }

                if (url3 != undefined) {
                    callprodD()
                }
            }
        });
    }

    function callprodD() {
        dojo.xhrPost({
            url: url3,
            handleAs: "json-comment-filtered",
            form: null,
            content: formData[3],
            service: wc.service.services.AddOrderItem,
            load: function (_255, _256) {
                if (_255.errorMessage != undefined && _255.errorMessage != "") {
                    oosproduct(p3, formData[3].quantity)
                    INC.clientConfig.OOS.push(p3)
                    INC.clientConfig.OOS_MESG.push(_255.errorMessage)
                }

                if (url4 == undefined) {
                    if (document.querySelector('.dth-add-to-basket.-js-add-to-basket.active') != null) {
                        document.querySelector('.dth-add-to-basket.-js-add-to-basket.active').style.opacity = ""
                    }
                    INC.config.disablebtn = true
                    getTrackingPixel()
                    if (btn_cart != undefined) {
                        btn_cart.classList.remove('inc_loading')
                    }
                    if (document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading') != null) {
                        document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading').classList.remove('inc_loading')
                    }
                    if (document.querySelector('.inc_recommended_tabs_list_item_block') == null) {
                        // window.location.href = INC.clientConfig.checkoutLink; 
                        jQuery("html, body").animate({
                            scrollTop: 0
                        }, "slow");
                    }

                    if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                        document.querySelector('html').classList.add('inc_overlay');
                        if (_255.errorMessage != undefined && _255.errorMessage != "") {

                        } else {
                            INC.methods.showSidebar();
                            INC.methods.updateSidebarBlock();
                        }
                        if (document.querySelector('.sidebar_outer.sidebar_outer_active') == null) {
                            document.querySelector('html').classList.remove('inc_overlay')
                        }
                    }
                }

                if (url4 != undefined) {
                    callprodE()
                }
                callbacksuccessinc(_255, _256)
                if (document.querySelector('.inc_product_desc_add_block.Inc_checked') != null) {
                    var imgscrc = document.querySelector('.inc_product_desc_add_block.Inc_checked').parentNode.parentNode.parentNode.querySelector('.inc_product_img_main_img img').src
                    if (imgscrc != undefined) {
                        if (document.querySelector('.dth-add-to-basket.-js-add-to-basket .dth-add-to-basket__image') != null) {
                            document.querySelector('.dth-add-to-basket.-js-add-to-basket .dth-add-to-basket__image').src = imgscrc
                        }
                    }
                }
            },
            error: function (_25c, _25d) {
                var _25e = dojo.i18n.getLocalization("wc", "common");
                dojo.publish("ajaxRequestCompleted");
                if (url4 == undefined) {
                    INC.config.disablebtn = true
                    getTrackingPixel()
                    if (btn_cart != undefined) {
                        btn_cart.classList.remove('inc_loading')
                    }
                    if (document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading') != null) {
                        document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading').classList.remove('inc_loading')
                    }
                    if (document.querySelector('.inc_recommended_tabs_list_item_block') == null) {
                        // window.location.href = INC.clientConfig.checkoutLink; 
                        jQuery("html, body").animate({
                            scrollTop: 0
                        }, "slow");
                    }

                    if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                        document.querySelector('html').classList.add('inc_overlay');
                        INC.methods.showSidebar();
                        INC.methods.updateSidebarBlock();
                        if (document.querySelector('.sidebar_outer.sidebar_outer_active') == null) {
                            document.querySelector('html').classList.remove('inc_overlay')
                        }
                    }
                    if (document.querySelector('.inc_product_desc_add_block.Inc_checked') != null) {
                        var imgscrc = document.querySelector('.inc_product_desc_add_block.Inc_checked').parentNode.parentNode.parentNode.querySelector('.inc_product_img_main_img img').src
                        if (imgscrc != undefined) {
                            if (document.querySelector('.dth-add-to-basket.-js-add-to-basket .dth-add-to-basket__image') != null) {
                                document.querySelector('.dth-add-to-basket.-js-add-to-basket .dth-add-to-basket__image').src = imgscrc
                            }
                        }
                    }
                }

                if (url4 != undefined) {
                    callprodE()
                }
            }
        });
    }

    function callprodE() {
        dojo.xhrPost({
            url: url4,
            handleAs: "json-comment-filtered",
            form: null,
            content: formData[4],
            service: wc.service.services.AddOrderItem,
            load: function (_255, _256) {
                if (_255.errorMessage != undefined && _255.errorMessage != "") {
                    oosproduct(p4, formData[4].quantity)
                    INC.clientConfig.OOS.push(p4)
                    INC.clientConfig.OOS_MESG.push(_255.errorMessage)
                }

                if (url5 == undefined) {
                    if (document.querySelector('.dth-add-to-basket.-js-add-to-basket.active') != null) {
                        document.querySelector('.dth-add-to-basket.-js-add-to-basket.active').style.opacity = ""
                    }
                    INC.config.disablebtn = true
                    getTrackingPixel()
                    if (btn_cart != undefined) {
                        btn_cart.classList.remove('inc_loading')
                    }
                    if (document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading') != null) {
                        document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading').classList.remove('inc_loading')
                    }
                    if (document.querySelector('.inc_recommended_tabs_list_item_block') == null) {
                        // window.location.href = INC.clientConfig.checkoutLink; 
                        jQuery("html, body").animate({
                            scrollTop: 0
                        }, "slow");
                    }

                    if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                        document.querySelector('html').classList.add('inc_overlay');
                        if (_255.errorMessage != undefined && _255.errorMessage != "") {

                        } else {
                            INC.methods.showSidebar();
                            INC.methods.updateSidebarBlock();
                        }
                        if (document.querySelector('.sidebar_outer.sidebar_outer_active') == null) {
                            document.querySelector('html').classList.remove('inc_overlay')
                        }
                    }
                }

                if (url5 != undefined) {
                    callprodF()
                }
                callbacksuccessinc(_255, _256)
                if (document.querySelector('.inc_product_desc_add_block.Inc_checked') != null) {
                    var imgscrc = document.querySelector('.inc_product_desc_add_block.Inc_checked').parentNode.parentNode.parentNode.querySelector('.inc_product_img_main_img img').src
                    if (imgscrc != undefined) {
                        if (document.querySelector('.dth-add-to-basket.-js-add-to-basket .dth-add-to-basket__image') != null) {
                            document.querySelector('.dth-add-to-basket.-js-add-to-basket .dth-add-to-basket__image').src = imgscrc
                        }
                    }
                }
            },
            error: function (_25c, _25d) {
                var _25e = dojo.i18n.getLocalization("wc", "common");
                dojo.publish("ajaxRequestCompleted");
                if (url5 == undefined) {
                    INC.config.disablebtn = true
                    getTrackingPixel()
                    if (btn_cart != undefined) {
                        btn_cart.classList.remove('inc_loading')
                    }
                    if (document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading') != null) {
                        document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading').classList.remove('inc_loading')
                    }
                    if (document.querySelector('.inc_recommended_tabs_list_item_block') == null) {
                        // window.location.href = INC.clientConfig.checkoutLink; 
                        jQuery("html, body").animate({
                            scrollTop: 0
                        }, "slow");
                    }

                    if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                        document.querySelector('html').classList.add('inc_overlay');
                        INC.methods.showSidebar();
                        INC.methods.updateSidebarBlock();
                        if (document.querySelector('.sidebar_outer.sidebar_outer_active') == null) {
                            document.querySelector('html').classList.remove('inc_overlay')
                        }
                    }
                    if (document.querySelector('.inc_product_desc_add_block.Inc_checked') != null) {
                        var imgscrc = document.querySelector('.inc_product_desc_add_block.Inc_checked').parentNode.parentNode.parentNode.querySelector('.inc_product_img_main_img img').src
                        if (imgscrc != undefined) {
                            if (document.querySelector('.dth-add-to-basket.-js-add-to-basket .dth-add-to-basket__image') != null) {
                                document.querySelector('.dth-add-to-basket.-js-add-to-basket .dth-add-to-basket__image').src = imgscrc
                            }
                        }
                    }
                }

                if (url5 != undefined) {
                    callprodF()
                }
            }
        });
    }

    function callprodF() {
        dojo.xhrPost({
            url: url5,
            handleAs: "json-comment-filtered",
            form: null,
            content: formData[5],
            service: wc.service.services.AddOrderItem,
            load: function (_255, _256) {
                if (_255.errorMessage != undefined && _255.errorMessage != "") {
                    oosproduct(p5, formData[5].quantity)
                    INC.clientConfig.OOS.push(p5)
                    INC.clientConfig.OOS_MESG.push(_255.errorMessage)
                }
                if (document.querySelector('.dth-add-to-basket.-js-add-to-basket.active') != null) {
                    document.querySelector('.dth-add-to-basket.-js-add-to-basket.active').style.opacity = ""
                }
                INC.config.disablebtn = true
                getTrackingPixel()
                if (btn_cart != undefined) {
                    btn_cart.classList.remove('inc_loading')
                }
                if (document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading') != null) {
                    document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading').classList.remove('inc_loading')
                }
                if (document.querySelector('.inc_recommended_tabs_list_item_block') == null) {
                    // window.location.href = INC.clientConfig.checkoutLink;    
                    jQuery("html, body").animate({
                        scrollTop: 0
                    }, "slow");
                }

                if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                    document.querySelector('html').classList.add('inc_overlay');

                    if (_255.errorMessage != undefined && _255.errorMessage != "") {

                    } else {
                        INC.methods.showSidebar();
                        INC.methods.updateSidebarBlock();
                    }
                    if (document.querySelector('.sidebar_outer.sidebar_outer_active') == null) {
                        document.querySelector('html').classList.remove('inc_overlay')
                    }
                }
                callbacksuccessinc(_255, _256)
                if (document.querySelector('.inc_product_desc_add_block.Inc_checked') != null) {
                    var imgscrc = document.querySelector('.inc_product_desc_add_block.Inc_checked').parentNode.parentNode.parentNode.querySelector('.inc_product_img_main_img img').src
                    if (imgscrc != undefined) {
                        if (document.querySelector('.dth-add-to-basket.-js-add-to-basket .dth-add-to-basket__image') != null) {
                            document.querySelector('.dth-add-to-basket.-js-add-to-basket .dth-add-to-basket__image').src = imgscrc
                        }
                    }
                }
            },
            error: function (_25c, _25d) {
                var _25e = dojo.i18n.getLocalization("wc", "common");
                dojo.publish("ajaxRequestCompleted");
                INC.config.disablebtn = true
                getTrackingPixel()
                if (btn_cart != undefined) {
                    btn_cart.classList.remove('inc_loading')
                }
                if (document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading') != null) {
                    document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading').classList.remove('inc_loading')
                }
                if (document.querySelector('.inc_recommended_tabs_list_item_block') == null) {
                    // window.location.href = INC.clientConfig.checkoutLink;
                    jQuery("html, body").animate({
                        scrollTop: 0
                    }, "slow");
                }

                if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                    document.querySelector('html').classList.add('inc_overlay');
                    INC.methods.showSidebar();
                    INC.methods.updateSidebarBlock();
                    if (document.querySelector('.sidebar_outer.sidebar_outer_active') == null) {
                        document.querySelector('html').classList.remove('inc_overlay')
                    }
                }
                if (document.querySelector('.inc_product_desc_add_block.Inc_checked') != null) {
                    var imgscrc = document.querySelector('.inc_product_desc_add_block.Inc_checked').parentNode.parentNode.parentNode.querySelector('.inc_product_img_main_img img').src
                    if (imgscrc != undefined) {
                        if (document.querySelector('.dth-add-to-basket.-js-add-to-basket .dth-add-to-basket__image') != null) {
                            document.querySelector('.dth-add-to-basket.-js-add-to-basket .dth-add-to-basket__image').src = imgscrc
                        }
                    }
                }
            }
        });
    }
}

function callbacksuccessinc(_255, _256) {
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
    xhr.onreadystatechange = function () {
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


INC.methods.checkStatusVAT = function () {
    if (INC.methods.checkStatusLoggedIn()) return "false";
    var cookieArray = document.cookie.split(";");
    var statusVAT = "true";
    cookieArray.forEach(function (cookie) {
        var cookieSplit = cookie.split("=");
        if (cookieSplit[0].trim() == "includeVat") {
            // if (INC.debug) console.log(cookieSplit[1].trim());
            statusVAT = cookieSplit[1].trim();
        }
    });

    return statusVAT;
}

INC.methods.checkStatusLoggedIn = function () {
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


INC.methods.trackingEvents = function (eventType, eventDataObj, pageType) {

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

INC.methods.sendTrackingEvents = function (importDataObj) {
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

INC.methods.sendAffiliateRequest = function () {
    var url = INC.config.affiliateURL;
    var oImg = document.createElement("img");
    oImg.setAttribute('id', 'cstracking')
    oImg.setAttribute('src', url);
    oImg.setAttribute('height', '1px');
    oImg.setAttribute('width', '1px');
    oImg.setAttribute('style', 'display:none')
    document.body.appendChild(oImg);
}

INC.methods.addVisitorID = function () {
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
        var clientDomain = window.location.host.replace("www", "");
        var d = new Date();
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = 'ivid=' + ivid + '; expires=' + expires + '; domain=' + clientDomain + '; path=/' + '; secure:' + true + ';'
        // document.cookie = "ivid=" + ivid + ";" + "expires=16 Jul 2021 06:23:41 GMT;" + "path=/";
    } else {
        ivid = ivid;
        var clientDomain = window.location.host.replace("www", "");
        var d = new Date();
        d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
        var expires = "expires=" + d.toUTCString();
        document.cookie = 'ivid=' + ivid + '; expires=' + expires + '; domain=' + clientDomain + '; path=/' + '; secure:' + true + ';'
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
    // if (window.location.href.includes('https://www.petsathome.com/shop/en/pets/bundles')) {
    //     return
    // }
    var clickedElement = e.target;
    //console.log(clickedElement);
    if (clickedElement != null) {
        tags = document.getElementsByTagName(clickedElement.tagName);
        try {
            
            if (clickedElement == "inc_prd_desc_att_bk attributes_avail inc_active") {
                return
            }
            
            // if (clickedElement.className == "inc_prd_bk configurable show_overlay") {
                
            //     document.querySelector('html').classList.remove('inc_overlay');
            //     clickedElement.classList.remove("show_overlay")
            //     clickedElement.querySelector('.inc_prd_desc_att_bk').remove("inc_active");
            // }

            if (clickedElement.className == "inc_product_modal_block inc_active" || clickedElement.className == "inc_prd_modal_bk inc_active") {
                document.querySelector('body').classList.remove('inc_popup_open');
                if (document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                    document.querySelector('html').classList.remove('inc_overlay');
                    document.querySelector('html').classList.remove('inc_popup_open');
                    document.querySelector('body').classList.remove('inc_popup_open');
                }

                if (clickedElement.querySelector('.inc_prd_hdr_title_bk') != null) {
                    clickedElement.querySelector('.inc_prd_hdr_title_bk').classList.add('inc_active')
                }

                if (clickedElement.querySelector('.inc_product_header_title_block') != null) {
                    clickedElement.querySelector('.inc_product_header_title_block').classList.add('inc_active');
                }

                if (clickedElement.querySelector('.inc_product_hdr_title_bk_1') != null) {
                    clickedElement.querySelector('.inc_product_hdr_title_bk_1').classList.remove('inc_active');
                }

                if (clickedElement.querySelector('.inc_product_header_title_block_1') != null) {
                    clickedElement.querySelector('.inc_product_header_title_block_1').classList.remove('inc_active');
                }

                clickedElement.classList.remove('inc_active')
                if (document.querySelector('.inc_prd_modal_bk.inc_active') == null) {
                    // document.querySelector('html').setAttribute('style', 'overflow:auto')
                }
            }
            if (clickedElement.className == "inc_product_modal_block") {
                document.querySelector('html').classList.remove('inc_popup_open');
            }
            if (clickedElement.className == "icon__fallback-text" || clickedElement.classList.contains("icon-cart")) {
                var af_block = document.querySelector('.inc_af_block');
                if (af_block != null) {
                    af_block.parentNode.removeChild(af_block);
                }
                INC.init();
            }
            if (clickedElement.className == "inc_empty_popup") {
                if (document.querySelector('.inc_product_modal_block.inc_active') == null && document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                    document.querySelector('html').classList.remove('inc_overlay')
                    document.querySelector('html').classList.remove('inc_popup_open');

                    // document.querySelector('body').setAttribute('style', 'overflow:auto')
                }

                if (clickedElement.parentNode.querySelector('.inc_product_desc_att_block').classList.contains('inc_active')) {
                    clickedElement.parentNode.querySelector('.inc_product_desc_att_block').classList.remove('inc_active')
                }
                productBlock.classList.remove('show_overlay')
            }
            if (clickedElement.className == "cd-panel__close js-cd-close" || clickedElement.className == "slideCart cd-panel cd-panel--from-right js-cd-panel-cart-drawer") {
                window.location.reload();
            }

            if (clickedElement.className == "mobile-modal__button mobile-modal__button--remove btn") {
                setTimeout(function () {
                    window.location.reload();
                }, 1000)
            }

            if (document.querySelector('.inc_product_modal_block.inc_active') != null) {
                if (clickedElement.parentNode.classList == "inc_product_desc_att_color_list_item_img" || clickedElement.classList == "inc_product_desc_att_color_list_item_img" || clickedElement.parentNode.classList == "inc_product_desc_att_zero_list_block" || clickedElement.classList == "inc_product_desc_att_zero_list_block" || clickedElement.parentNode.classList == "inc_prd_desc_att_zero_title_bk" || clickedElement.parentNode.classList == "inc_prd_desc_att_color_list_item_img" || clickedElement.classList == "inc_prd_desc_att_size_list_item_img_bk" || clickedElement.parentNode.classList == "inc_prd_desc_att_zero_list_block" || clickedElement.classList == "inc_prd_desc_att_zero_list_block") {
                    document.querySelector('.inc_prd_desc_att_zero_bk .show_dropdown').classList.remove('show_dropdown')
                }
            }

            if (clickedElement.classList == "inc_product_desc_add_img") {
                if (window.innerWidth > 1300) {
                    document.querySelector('.inc_product_modal_block .inc_product_desc_att_block .show_dropdown').classList.remove('show_dropdown');
                }
            }

            if (clickedElement.className == "inc_product_header_img") {
                document.querySelector('.inc_product_header_title_block').classList.add('inc_active');
                document.querySelector('.inc_product_header_title_block_1').classList.remove('inc_active');
                document.querySelector('body').classList.remove('inc_popup_open');
            }

            if (clickedElement.className == "sidebar_outer sidebar_outer_active") {
                document.querySelector('.inc_header_continue_img').click()
                // document.querySelector('body').classList.remove('inc_popup_open');
            }
            if (clickedElement.classList.contains('delete_popup') == true) {
                if (document.querySelector('.inc_cart_added_product_block.remove_product_conf_modal .confirm_remove_product_close') != null) {
                    document.querySelector('.inc_cart_added_product_block.remove_product_conf_modal .confirm_remove_product_close').click()
                }
            }
            if (clickedElement.className == "inc_pdp_bundle_cart_overlay_block active") {
                document.querySelector('.inc_pdp_bundle_cart_title_img_block').click()
            }
            if (clickedElement.className == "inc_promo_popup inc_active") {
                document.querySelector('html').classList.remove('inc_overlay_promo');
                clickedElement.classList.remove('inc_active')
                if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
                    document.querySelector('.inc_sidebar_modal_block.inc_active').classList.remove('overflow_visible')
                }
            }
            if (clickedElement.parentNode != null) {
                if (clickedElement.className != "inc_product_desc_att_color_title_text_block" && clickedElement.className != "inc_product_desc_att_color_title_text_selected" && clickedElement.parentNode.className != "inc_product_desc_att_color_title_text_block" && clickedElement.className != "inc_product_desc_att_zero_title_text" && clickedElement.className != "inc_product_desc_att_zero_title_text_block" && clickedElement.className != "inc_product_desc_add_block" && clickedElement.className != "inc_product_desc_add_text" && clickedElement.className != "img_color_swatch" && clickedElement.className != "inc_product_desc_att_zero_title_text_selected" && clickedElement.classList.contains('inc_product_desc_att_color_list_item_img') != true && clickedElement.className != "inc_prd_desc_att_zero_title_bk" && clickedElement.className != "inc_prd_desc_att_color_list_item_img" && clickedElement.className != "inc_prd_desc_att_size_list_item_img_bk" && clickedElement.className != "inc_prd_desc_att_zero_list_block" && clickedElement.className != "inc_prd_desc_att_zero_list_block" && clickedElement.className != 'inc_prd_desc_att_zero_title_txt_selected' && clickedElement.className != "inc_prd_desc_att_size_title_txt_selected" && clickedElement.className != "inc_prd_desc_att_thirds_title_txt_selected" && clickedElement.className != 'inc_prd_desc_att_third_title_txt_selected') {
                    // if((window.innerWidth>=820 && window.innerWidth <1025) ){
                    if (clickedElement.className.toString().includes('bk')) return
                    if (document.querySelector('.inc_prd_desc_att_zero_bk.show_dropdown') != null) {
                        document.querySelector('.inc_prd_desc_att_zero_bk.show_dropdown').classList.remove('show_dropdown')
                    }

                    if (document.querySelector('.inc_prd_desc_att_size_bk.show_dropdown') != null) {
                        document.querySelector('.inc_prd_desc_att_size_bk.show_dropdown').classList.remove('show_dropdown')
                    }

                    if (document.querySelector('.inc_prd_desc_att_third_bk.show_dropdown') != null) {
                        document.querySelector('.inc_prd_desc_att_third_bk.show_dropdown').classList.remove('show_dropdown')
                    }

                    // } 
                }


                if (clickedElement.className == "inc_product_desc_color_list_mobile_overlay_block" || clickedElement.className == "inc_product_desc_color_list_header_img" || clickedElement.className == "inc_product_desc_colour_list_add_btn" || clickedElement.className == "inc_product_desc_att_zero_list_mobile_overlay_block" || clickedElement.className == "inc_product_desc_att_zero_list_header_img" || clickedElement.className == "inc_product_desc_att_zero_list_add_btn") {
                    if (window.innerWidth < 820) {
                        document.querySelector('.inc_product_desc_att_block .show_dropdown').classList.remove('show_dropdown')
                        document.querySelector('html').classList.remove('inc_overlay');
                        document.querySelector('body').classList.remove('inc_popup_open');
                    }

                }
            }
            if (document.querySelector('.inc_sidebar_modal_block.inc_active .inc_product_modal_block.inc_active') == null) {
                if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
                    if (document.querySelector('.close_read_more') != null) {
                        document.querySelector('.close_read_more').click()
                    }
                    if (document.querySelector('.inc_cart_added_product_block.remove_product_conf_modal') == null) {
                        if (document.querySelector('.inc_promo_popup.inc_active') == null) {
                            document.querySelector('.inc_sidebar_modal_block.inc_active').classList.remove('overflow_visible')
                        }
                    }
                }
            } else if (document.querySelector('.inc_sidebar_modal_block.inc_active .inc_product_modal_block.inc_active') != null) {
                document.querySelector('.inc_sidebar_modal_block.inc_active').classList.add('overflow_visible')
            }

            if (clickedElement.className != "inc_product_details_prod_block" && clickedElement.className != "inc_product_variant_simple_block" && clickedElement.className != "inc_product_variant_simple_text config" && clickedElement.className != "inc_product_desc_variant_popup_close_block" && clickedElement.className != "inc_product_desc_add_title_text_block" && clickedElement.tagName != "SELECT" && clickedElement.className != "inc_product_header_block active" && clickedElement.className != "inc_product_desc_att_color_list_item_img_block active" && clickedElement.className != "inc_product_desc_att_block attributes_avail active" && clickedElement.className != "inc_product_desc_qty_block active" && clickedElement.tagName != "LABEL" && clickedElement.tagName != "INPUT" && clickedElement.className != "inc_product_desc_qty_block" && clickedElement.className != "inc_product_desc_att_color_list_item_img_block" && clickedElement.className != "inc_product_header_block" && clickedElement.className != "select_option_inc_title" && clickedElement.className != "inc_product_desc_att_color_list_item_img" && clickedElement.className != "inc_product_desc_att_color_title_text" && clickedElement.className != "inc_product_desc_att_color_list_block" && clickedElement.classList.contains('inc_product_desc_att_block') == false && clickedElement.className != "select_option_inc_block" && clickedElement.className != "inc_product_desc_att_color_title_text_block" && clickedElement.className != "inc_product_desc_att_variant_text" && clickedElement.className != "inc_product_desc_add_img" && clickedElement.className != "inc_product_qty_up_btn" && clickedElement.className != "inc_product_qty_down_btn" && clickedElement.className != "inc_prd_desc_att_bk attributes_avail inc_active" && clickedElement.className != "inc_prd_details_prod_bk" && clickedElement.className != "inc_prd_variant_simple_bk" && clickedElement.className != "inc_prd_variant_simple_text config" && clickedElement.className != "inc_prd_desc_variant_popup_close_bk" && clickedElement.className != "inc_prd_desc_add_title_text_bk" && clickedElement.tagName != "SELECT" && clickedElement.className != "inc_prd_header_bk active" && clickedElement.className != "inc_prd_desc_att_color_list_item_img_bk active" && clickedElement.className != "inc_prd_desc_att_bk attributes_avail active" && clickedElement.className != "inc_prd_desc_qty_bk active" && clickedElement.tagName != "LABEL" && clickedElement.tagName != "INPUT" && clickedElement.className != "inc_prd_desc_qty_bk" && clickedElement.className != "inc_prd_desc_att_color_list_item_img_bk" && clickedElement.className != "inc_prd_header_bk" && clickedElement.className != "select_option_inc_title" && clickedElement.className != "inc_prd_desc_att_color_list_item_img" && clickedElement.className != "inc_prd_desc_att_color_title_text" && clickedElement.className != "inc_prd_desc_att_color_list_bk" && clickedElement.classList.contains('inc_prd_desc_att_bk') == false && clickedElement.className != "select_option_inc_bk" && clickedElement.className != "inc_prd_desc_att_color_title_text_bk" && clickedElement.className != "inc_prd_desc_att_variant_text" && clickedElement.className != "inc_prd_desc_add_img" && clickedElement.className != "inc_prd_qty_up_btn" && clickedElement.className != "inc_prd_qty_down_btn" && clickedElement.className != 'inc_prd_desc_att_size_list_item_img' && clickedElement.className != 'inc_prd_desc_att_zero_list_bk') {
                if (clickedElement.classList != undefined) {
                    if (clickedElement.classList.contains('variantoption') == false && clickedElement.classList.contains('inc_product_desc_att_size_list_item_img_block') == false && clickedElement.classList.contains('inc_product_desc_att_color_list_block') == false && clickedElement.className != "inc_product_desc_add_img checked" && clickedElement.classList.contains('inc_product_desc_add_block') == false && clickedElement.classList.contains('inc_pdp_bundle_cart_added_product_edit_img') == false && clickedElement.className != "inc_product_desc_att_color_title_block" && clickedElement.className != "inc_product_desc_qty_up_btn" && clickedElement.className != "inc_product_desc_qty_down_btn" && clickedElement.classList.contains('inc_product_desc_att_color_block') == false && clickedElement.classList.contains('inc_product_desc_att_color_list_item_block') == false && clickedElement.classList.contains('inc_product_desc_att_zero_title_text_selected') == false && clickedElement.classList.contains('inc_product_desc_att_zero_title_text') == false && clickedElement.classList.contains('inc_product_desc_att_size_list_item_img') == false && clickedElement.classList.contains('inc_product_desc_att_color_list_item_img') != true && clickedElement.classList.contains('inc_prd_desc_qty_input_bk') != true && clickedElement.classList.contains('inc_prd_desc_qty_input_text_bk') != true && clickedElement.classList.contains('inc_prd_desc_qty_input_text') != true && clickedElement.classList.contains('inc_prd_desc_qty_up_bk') != true && clickedElement.classList.contains('inc_prd_desc_qty_up_btn_bk') != true && clickedElement.classList.contains('inc_prd_desc_qty_up_btn') != true && clickedElement.classList.contains('inc_prd_desc_qty_bk') != true && clickedElement.classList.contains('inc_prd_desc_qty_down_bk') != true && clickedElement.classList.contains('inc_prd_desc_qty_down_bk') != true && clickedElement.classList.contains('inc_prd_desc_qty_down_btn_bk') != true && clickedElement.classList.contains('inc_prd_desc_qty_down_btn') != true) {
                        if((window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=3') >= 0)){
                
                        }
                        
                        var allact = document.querySelectorAll('.inc_product_desc_att_block.inc_active')
                        var allcolact = document.querySelectorAll('.inc_prd_desc_att_bk.inc_active')

                        if (document.querySelector('.inc_product_modal_block.inc_active') == null && document.querySelector('.inc_prd_modal_bk.inc_active') == null && document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                            if((window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=3') >= 0)){
                
                            }else{
                                document.querySelector('html').classList.remove('inc_overlay');
                                document.querySelector('body').classList.remove('inc_popup_open');
                            }
                            
                        } else if (document.querySelector('.inc_product_modal_block.inc_active') == null && document.querySelector('.inc_prd_modal_bk.inc_active') == null) {
                            document.querySelector('html').classList.add('inc_overlay');
                        }
                        if((window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=3') >= 0)){
                
                        }else{
                            for (q = 0; q < allact.length; q++) {
                                allact[q].classList.remove('inc_active')
                            }
                        }
                        
                        for (q = 0; q < allcolact.length; q++) {
                            if((window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=3') >= 0)){
                
                            }else{
                                allcolact[q].classList.remove('inc_active')
                            }
                        }

                        if (document.querySelector('.inc_prd_bk.show_overlay') != null) {
                            if((window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=1') >= 0 || window.location.href.indexOf('incgs=3') >= 0)){
                
                            }else{
                                if (document.querySelector('.inc_product_block.show_overlay') != null) {
                                    document.querySelector('.inc_product_block.show_overlay').classList.remove('show_overlay')
                                }
                                document.querySelector('.inc_prd_bk.show_overlay').classList.remove('show_overlay')
                            }
                            
                        }
                    }
                }
            }
            if (clickedElement.id == "basket_confirmation_button_yes") {
                setTimeout(function () {
                    INC.init();
                }, 3000)
            }
            //basket-product__remove-item -js-modal
            //dth-mini-basket__items__qty-remove
            if (clickedElement.classList.contains("remove-keep__btn") == true || clickedElement.classList.contains("dth-mini-basket__items__qty-remove") == true) {
                INC.clientConfig.slidevalue = 0;
                INC.clientConfig.offset = 0;
                var menu_list = document.querySelector('.inc_af_product-list_block');
                if (menu_list != null) {
                    menu_list.setAttribute('style', 'margin-left:0');
                }
                if (clickedElement.id == "removeItemBtn_" || clickedElement.classList.contains("dth-mini-basket__items__qty-remove") == true) {
                    setTimeout(function () {
                        //event: "removeFromCart"
                        var idlayer = 0
                        for (q = 0; q < dataLayer.length; q++) {
                            if (dataLayer[q].event == "removeFromCart") {
                                var idlayer = q
                                if (dataLayer[q + 1] != undefined) {
                                    if (dataLayer[q + 1].event == "removeFromCart") {
                                        idlayer = q + 1
                                    }
                                }
                                if (dataLayer[q + 2] != undefined) {
                                    if (dataLayer[q + 2].event == "removeFromCart") {
                                        idlayer = q + 2
                                    }
                                }
                                if (dataLayer[q + 3] != undefined) {
                                    if (dataLayer[q + 3].event == "removeFromCart") {
                                        idlayer = q + 3
                                    }
                                }
                                if (dataLayer[q + 4] != undefined) {
                                    if (dataLayer[q + 4].event == "removeFromCart") {
                                        idlayer = q + 4
                                    }
                                }
                                if (dataLayer[q + 5] != undefined) {
                                    if (dataLayer[q + 5].event == "removeFromCart") {
                                        idlayer = q + 5
                                    }
                                }
                                if (dataLayer[q + 6] != undefined) {
                                    if (dataLayer[q + 6].event == "removeFromCart") {
                                        idlayer = q + 6
                                    }
                                }
                                if (dataLayer[q + 7] != undefined) {
                                    if (dataLayer[q + 7].event == "removeFromCart") {
                                        idlayer = q + 7
                                    }
                                }
                            }
                        }
                        if (dataLayer[idlayer] != undefined) {
                            if (dataLayer[idlayer]["ecommerce"] != undefined) {
                                if (dataLayer[idlayer]["ecommerce"]["remove"] != undefined) {
                                    if (dataLayer[idlayer]["ecommerce"]["remove"]["products"] != undefined) {
                                        if (dataLayer[idlayer]["ecommerce"]["remove"]["products"][0] != undefined) {
                                            var addedflag = false;
                                            var cookieaddeddetails = readCookie('ividData')

                                            if (cookieaddeddetails != undefined) {
                                                var addedp = JSON.parse(cookieaddeddetails)
                                                for (h = 0; h < addedp.length; h++) {
                                                    if (addedp[h] != null) {
                                                        if (addedp[h].name.toLocaleLowerCase() == dataLayer[idlayer]["ecommerce"]["remove"]["products"][0].name.toLocaleLowerCase() || addedp[h].id == dataLayer[idlayer]["ecommerce"]["remove"]["products"][0].id || addedp[h].variant == dataLayer[idlayer]["ecommerce"]["remove"]["products"][0].variant) {
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
                                                //dataLayer[idlayer]["ecommerce"]["remove"]["products"][0].product_type = 'Bundle'
                                                if (addedflag == true) {
                                                    dataLayer[idlayer].product_type = 'Bundle'
                                                } else {
                                                    if (dataLayer[idlayer].product_type == undefined) {
                                                        dataLayer[idlayer].product_type = 'No Bundle'
                                                    }
                                                }
                                            } else {
                                                if (dataLayer[idlayer].product_type == undefined) {
                                                    dataLayer[idlayer].product_type = 'No Bundle'
                                                }
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }, 3000)
                }
            }

            //client side selection/

            //console.log(clickedElement.className)

            if (clickedElement.parentNode != null) {
                var sel_variant;
                var fieldset_variant;
                var client_var;
                if (clickedElement.className == "selector__radio") {
                    sel_variant = clickedElement.getAttribute('value');
                    fieldset_variant = clickedElement.getAttribute('name');
                    console.log(sel_variant, "sel_variant", fieldset_variant, "fieldset_variant")
                    setTimeout(function () {
                        if (!(window.location.host == "www.uat03p.pahtest.com")) {
                            crawl_click = true;
                            crawlscript();
                        }
                    })
                    setTimeout(function () {
                        // INC.init();

                        if (document.querySelector('.pdp-product-details .add-to-basket__add-btn.disabled') != null) {
                            if (document.querySelector('.inc_pdp_block') != null) {
                                document.querySelector('.inc_pdp_block').style.display = "none"
                            }
                        } else {
                            if (document.querySelector('.inc_pdp_block') != null) {
                                document.querySelector('.inc_pdp_block').style.display = "block"
                            }
                        }
                    }, 1000)
                } else if (clickedElement.className == "colour-selector__radio") {
                    sel_variant = clickedElement.getAttribute('value');
                    fieldset_variant = clickedElement.getAttribute('name');
                    console.log(sel_variant, "sel_variant", fieldset_variant, "fieldset_variant")
                    setTimeout(function () {
                        if (!(window.location.host == "www.uat03p.pahtest.com")) {
                            crawl_click = true;
                            crawlscript();
                        }
                    })
                    setTimeout(function () {
                        // INC.init();
                        if (document.querySelector('.pdp-product-details .add-to-basket__add-btn .disabled') != null) {
                            if (document.querySelector('.inc_pdp_block') != null) {
                                document.querySelector('.inc_pdp_block').style.display = "none"
                            }
                        } else {
                            if (document.querySelector('.inc_pdp_block') != null) {
                                document.querySelector('.inc_pdp_block').style.display = "block"
                            }
                        }
                    }, 1000)
                }

                if (fieldset_variant == "Size") {
                    client_var = sel_variant.toLowerCase();
                    if (document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_size_list_item_img_block[datasize="' + client_var + '"] div') != null) {
                        document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_size_list_item_img_block[datasize="' + client_var + '"] div').click()
                    }
                } else if (fieldset_variant == "Weight" || fieldset_variant == "Volume-") {
                    client_var = sel_variant.toLowerCase();
                    if (document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_size_list_item_img_block[datasize="' + client_var + '"] div') != null) {
                        document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_size_list_item_img_block[datasize="' + client_var + '"] div').click()
                    }
                } else if (fieldset_variant == "Colour") {
                    client_var = sel_variant.toLowerCase();
                    if (document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + client_var + '"] div') != undefined) {
                        document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + client_var + '"] div').click()
                    }
                }


            }


            if (INC.config.pageType == "pdp") {
                if (clickedElement.id == "add_to_cart" && !(clickedElement.classList.contains('btn--repeat')) && clickedElement.parentNode.className != "click-collect__button") {
                    //console.log(clickedElement.parentNode.parentNode.querySelector('.btn add-to-basket__add-btn.add-to-basket__cc-btn.disabled'))
                    var qty_check
                    if (document.querySelector('#quantity_easy-repeat') != null) {
                        qty_check = document.querySelector('#quantity_easy-repeat').value;
                    } else if (document.querySelector('.add-to-basket__qty') != null) {
                        qty_check = document.querySelector('.add-to-basket__qty').value;
                    }

                    var client_var_check = false;

                    if (document.querySelector('.inc_pdp_product-main_block .inc_product_module_block.configurable') != null) {
                        if (document.querySelector('.colour-selector__selected-value') != null) {
                            if (document.querySelector('.colour-selector__selected-value').innerText.toLowerCase() != "please select a colour") {
                                client_var_check = true;
                            }
                        } else if (document.querySelector('.selector__selected-value') != null) {
                            if (document.querySelector('.selector__selected-value').innerText.toLowerCase() != "please select the size" && document.querySelector('.selector__selected-value').innerText.toLowerCase() != "please select the weight" && document.querySelector('.selector__selected-value').innerText.toLowerCase() != "please select the volume-") {
                                client_var_check = true;
                            }
                        }
                    } else {
                        if (document.querySelector('.selector__selected-value') != null) {
                            if (document.querySelector('.selector__selected-value').innerText.toLowerCase() != "please select the size" && document.querySelector('.selector__selected-value').innerText.toLowerCase() != "please select the weight" && document.querySelector('.selector__selected-value').innerText.toLowerCase() != "please select the volume-") {
                                client_var_check = true;
                            }
                        } else {
                            client_var_check = true;
                        }

                    }

                    var sqpdetailsflag = false;

                    if (document.querySelector('#AddToCartForm') != null) {
                        if (document.querySelector('#AddToCartForm').getAttribute('action').indexOf('SQPDetailsForm') >= 0) {
                            sqpdetailsflag = true
                        }
                    }



                    if (qty_check >= 1 && client_var_check && sqpdetailsflag == false) {
                        //&& clickedElement.parentNode.parentNode.querySelector('.click-collect-atb .btn.add-to-basket__add-btn.add-to-basket__cc-btn.disabled') == null
                        pdp_listeners();
                    }

                }
            }
            if (clickedElement.classList.contains('dth-mini-basket__items__qty-remove') == true) {
                setTimeout(function () {
                    INC.init();
                }, 2000)
            }
            if (INC.config.pageType == "productList") {
                if (clickedElement.classList.contains('product-tile-basket__btn') == true) {
                    if (clickedElement.getAttribute('onclick') != undefined) {
                        if (clickedElement.getAttribute('onclick').indexOf('QuickViewJS.addSkuToBasket') >= 0) {
                            // var wrapper = clickedElement.parentNode.parentNode
                            // var prd_img_url=wrapper.querySelector('.product-tile__image-wrapper img').src
                            // var prd_name=wrapper.querySelector('.product-tile__title').textContent
                            // var prod_id=clickedElement.id.replace('pListBtn','')
                            // var pr_id = prod_id
                            // var prd_prc = wrapper.querySelector('.product-tile__price').innerText.replace('£','')
                            // var old_prc = prd_prc
                            // var p_href = wrapper.href
                            // plp_listeners(prd_name, old_prc, prd_img_url, prd_prc, 1, pr_id, p_href, prod_id) 
                        }
                    }
                }
            }
        } catch (err) {
            // var formData = new FormData();
            // formData.append("EmailId", "shashi@increasingly.com");
            // formData.append("Subject", 'JS Error on Boots');
            // formData.append("Message", err + 'Error Stack' + err.stack);
            // var xhr = new XMLHttpRequest();
            // xhr.open("POST", '//api.increasingly.co/SendEmail', true);
            // xhr.send(formData);
        }
    }
}


function pdp_listeners(prd_name, old_prc, prd_img_url, prd_prc, qty_shade, sticky) {
    INC.config.clientbtn = false
    setTimeout(function () {
        var checking_popup = setInterval(function () {
            if (INC.debug) console.log("interval in progress")
        }, 0)

        var elClientAddToCartBtn = document.querySelector('#product-addtocart-button');
        var findObj = new INC.classes.FindObj();
        findObj["id"] = INC.dataStore.methods().getFirstProductObjByMainId({
            mainId: INC.dataStore.pdpProductId
        }).id;
        findObj["sku"] = INC.dataStore.methods().getFirstProductObjByMainId({
            mainId: INC.dataStore.pdpProductId
        }).id;
        findObj["mainId"] = INC.dataStore.methods().getFirstProductObjByMainId({
            mainId: INC.dataStore.pdpProductId
        }).id;
        if (document.querySelector('.select2-choice.ui-select-match') != null && document.querySelector('.select2-choice.ui-select-match').innerText.toUpperCase() != "Wybierz odcień".toUpperCase()) {
            findObj["colorText"] = document.querySelector('.select2-choice.ui-select-match').innerText;
        } else if (document.querySelector('.Shades .Dark') != null) {
            findObj["colorText"] = document.querySelector('.Shades .Dark').innerText
        }

        var sbBlock = document.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarModalBlock"));

        if (sbBlock != null) {
            sbBlock.querySelector(INC.methods.getSelectorClassName(INC.uiConfig.sidebar.className, "sidebarCartAddedListBlock")).innerHTML = "";
            var qty = 1;
            if (document.querySelector('#quantity_easy-repeat') != null) {
                qty = document.querySelector('#quantity_easy-repeat').value;
            } else if (document.querySelector('.add-to-basket__qty') != null) {
                qty = document.querySelector('.add-to-basket__qty').value;
            }

            if (sticky == "sticky" && document.querySelector('.headerqty') != null && document.querySelector('.headerqty').value > qty) qty = document.querySelector('.headerqty').value
            var all_qty = document.querySelectorAll('.SelectedVariantQuantity input');
            var v_qty = 0
            for (q = 0; q < all_qty.length; q++) {
                v_qty = +v_qty + +all_qty[q].value
            }

            if (v_qty != 0) {
                qty = v_qty
            }
            qty = Math.abs(qty)
            var allvarsel = document.querySelectorAll('.SelectedRepeat .select2-chosen span')

            var sel_v = ""
            for (v = 0; v < allvarsel.length; v++) {
                if (all_qty[v].value > 0) {
                    if (sel_v == "") {
                        sel_v = allvarsel[v].innerText
                    } else {
                        sel_v = sel_v + ", " + allvarsel[v].innerText
                    }
                }
            }


            if (document.querySelector('.inc_cart_added_list_block') != null) {
                document.querySelector('.inc_cart_added_list_block').innerHTML = ""
            }


            if (findObj.sku != "" || findObj.colorText != "") {
                INC.config.pdpaddedProductList = []
                INC.config.pdpaddedProductList.push(INC.config.Product_id)
                if (document.querySelector('.inc_cart_added_list_block') != null) {
                    document.querySelector('.inc_cart_added_list_block').innerHTML = ""
                }
                INC.methods.addProductToSidebarCart(findObj, qty, null, "client_add_btn");
                INC.methods.showSidebar();
            } else if (findObj.colorText == "" && document.querySelector('.inc_product_module_block') != null && document.querySelector('.inc_product_module_block').classList.contains("Simple")) {
                INC.config.pdpaddedProductList = []
                INC.config.pdpaddedProductList.push(INC.config.Product_id)
                findObj.sku = document.querySelector('.inc_product_module_block').getAttribute('data-sku');
                if (document.querySelector('.inc_cart_added_list_block') != null) {
                    document.querySelector('.inc_cart_added_list_block').innerHTML = ""
                }
                INC.methods.addProductToSidebarCart(findObj, qty, null, "client_add_btn");
                INC.methods.showSidebar();
            }
            INC.clientConfig.offset = 0;
            INC.clientConfig.slidevalue = 0;
            document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')

            if (document.querySelector('.inc_cart_added_product_desc_att_color_text_block') != null && document.querySelector('.inc_cart_added_product_desc_att_color_text_block').innerHTML == "") {
                document.querySelector('.inc_cart_added_product_desc_att_color_text_block').innerHTML = sel_v
            }
            var img_elempdp = setInterval(function () {
                var circle_img = document.querySelector('.inc_cart_added_product_img img')
                if (circle_img != null) {

                    clearInterval(img_elempdp)
                    if (document.querySelector('#offerPrice') != null) {
                        prd_prc = document.querySelector('#offerPrice').innerText.replace('£', '');
                    }


                    if (document.querySelector('.pdp-image-viewer__img') != null) {
                        prd_img_url = document.querySelector('.pdp-image-viewer__img').src
                    }


                    if (prd_img_url != null) {
                        var cart_img = document.querySelector('.inc_cart_added_product_img img');
                        document.querySelector('.inc_cart_added_product_img img').src = prd_img_url;

                    }


                    if (prd_prc != null) {
                        var subtotalinc_active = document.querySelector('.inc_cart_added_product_desc_subtotal_price_active_text');
                        if (prd_prc != null) {
                            if (subtotalinc_active != null) {
                                var subt = (+prd_prc * qty)
                                subtotalinc_active.innerHTML = formatter.format(subt).replace('US', '')
                                subtotalinc_active.setAttribute('subtotalactiveprice', subt)
                                subtotalinc_active.setAttribute('subtotalactiveprice', subt)
                                var prd_price = document.querySelector('.inc_cart_added_product_desc_price_active_text')
                                if (prd_price != null && prd_prc != null) {
                                    prd_price.innerHTML = formatter.format(prd_prc).replace('US', '')
                                }
                                var subtotalregular = document.querySelector('.inc_cart_added_product_desc_price_regular_text')
                                var subtotalreg = document.querySelector('.inc_cart_added_product_desc_subtotal_price_regular_text')
                            }
                        }
                    }

                }
            }, 0)

            //  }
        }
        setTimeout(function () {
            var idlayer = 0
            for (q = 0; q < dataLayer.length; q++) {
                if (dataLayer[q].event == "addToCart") {
                    var idlayer = q
                    if (dataLayer[q + 1] != undefined) {
                        if (dataLayer[q + 1].event == "addToCart") {
                            idlayer = q + 1
                        }
                    }
                    if (dataLayer[q + 2] != undefined) {
                        if (dataLayer[q + 2].event == "addToCart") {
                            idlayer = q + 2
                        }
                    }
                    if (dataLayer[q + 3] != undefined) {
                        if (dataLayer[q + 3].event == "addToCart") {
                            idlayer = q + 3
                        }
                    }
                    if (dataLayer[q + 4] != undefined) {
                        if (dataLayer[q + 4].event == "addToCart") {
                            idlayer = q + 4
                        }
                    }

                }
            }
            if (dataLayer[idlayer] != undefined) {
                if (dataLayer[idlayer]["ecommerce"] != undefined) {
                    dataLayer[idlayer].product_type = 'No Bundle'
                    // if(dataLayer[idlayer]["ecommerce"]["add"] != undefined){
                    //     if(dataLayer[idlayer]["ecommerce"]["add"]["products"] != undefined){
                    //         if(dataLayer[idlayer]["ecommerce"]["add"]["products"][0] != undefined){
                    //             dataLayer[idlayer]["ecommerce"]["add"]["products"][0].product_type = 'No Bundle'
                    //         }
                    //     }
                    // }
                }
            }
        }, 2000)
    }, 300)
}

function plp_listeners(prd_name, old_prc, prd_img_url, prd_prc, qty_shade, pr_id, p_href, prod_id) {
    var productId = prod_id;
    var qty = 1;
    if (INC.config.deviceType == "desktop") {
        qty = qty_shade;
    }
    if (INC.config.deviceType == "mobile") {
        qty = qty_shade;
    }
    qty = Math.abs(qty)
    INC.dataStore.plpProductQty = qty;

    INC.methods.clear();
    var p_img = prd_img_url;
    var p_name = prd_name;
    var prc = prd_prc
    var s_prc = null;
    //
    if (old_prc != 0) {
        var s_prc = prd_prc
        var prc = old_prc
    }
    if (s_prc != null && s_prc != prc) {
        var p_activePrice = s_prc
        var regularPrice = prc
    } else {
        var p_activePrice = prc
        var regularPrice = prc
    }

    INC.config.empty_prod_details = []
    INC.config.empty_prod_details.push({
        p_id: productId,
        p_name: p_name,
        p_img: p_img,
        p_activePrice: p_activePrice,
        regularPrice: regularPrice
    })
    setTimeout(function () {
        INC.methods.irbReq(productId, 5, "catalog_product_view");
    }, 100);
}



setTimeout(function () {
    if (window.innerWidth < 900) {
        window.addEventListener("orientationchange", function () {
            if (window.matchMedia("(orientation: portrait)").matches) {
                console.log("PORTRAIT")
                INC.config.deviceMode = "PORTRAIT"
                var inc_pdp_block_rem = document.querySelector(".inc_pdp_block");
                if (inc_pdp_block_rem != null) {
                    inc_pdp_block_rem.parentNode.removeChild(inc_pdp_block_rem);
                }
                var sidebar_rem = document.querySelector(".inc_sidebar_modal_block");
                if (sidebar_rem != null) {
                    sidebar_rem.parentNode.removeChild(sidebar_rem);
                }
                var over_rem = document.querySelector(".inc_sidebar_overlay_block");
                if (over_rem != null) {
                    over_rem.parentNode.removeChild(over_rem);
                }
                setTimeout(function () {
                    INC.init();
                }, 0)

            }
            if (window.matchMedia("(orientation: landscape)").matches) {
                console.log("LANSCAPE")
                INC.config.deviceMode = "LANSCAPE";
                var inc_pdp_block_rem = document.querySelector(".inc_pdp_block");
                if (inc_pdp_block_rem != null) {
                    inc_pdp_block_rem.parentNode.removeChild(inc_pdp_block_rem);
                }
                var sidebar_rem = document.querySelector(".inc_sidebar_modal_block");
                if (sidebar_rem != null) {
                    sidebar_rem.parentNode.removeChild(sidebar_rem);
                }
                var over_rem = document.querySelector(".inc_sidebar_overlay_block");
                if (over_rem != null) {
                    over_rem.parentNode.removeChild(over_rem);
                }
                setTimeout(function () {
                    INC.init();
                }, 0)
            }
        }, false);
    }
    if (typeof (jQuery) != "undefined") {
        jQuery(window).resize(function () {
            if (document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_list_main_block') != null) {
                document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_list_main_block').setAttribute("style", "margin-left:0");
                if (window.innerWidth < 1185) {
                    var prd_length = 2
                } else {
                    var prd_length = 3
                }
                if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > prd_length) {
                    document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_left-btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                    document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_right-btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                    // if (isIE()){
                    document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
                    document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
                    // }
                }
                INC.clientConfig.slidevalue = 0
                INC.clientConfig.offset = 0
                INC.clientConfig.slidevalue = 0
            }
        });
        jQuery(window).on('scroll', function () {
            var y_scroll_pos = window.pageYOffset;
            //var scroll_pos_test = element_position;
            var inc_div = document.querySelector(".inc_pdp_block");
            if (document.querySelector('.inc_pdp_block') != null) {
                if (document.querySelector('.inc_pdp_block') != null) {
                    var width_min = 500
                    var widthplus = 500 //225;
                    if (window.innerWidth > 500) {
                        var width_min = 200
                        var widthplus = 450
                    }
                    if (window.innerWidth < 600) {
                        if (y_scroll_pos >= inc_div.offsetTop - width_min && y_scroll_pos <= inc_div.offsetTop + widthplus) {
                            if (document.querySelector('.inc_pdp_block') != null) {

                                if (document.querySelector('.back-to-top') != null) {
                                    document.querySelector('.back-to-top').style.visibility = "hidden";
                                }

                                if (document.querySelector('.btn_contact_us') != null) {
                                    document.querySelector('.btn_contact_us').style.display = 'none !important';
                                }

                            }
                        } else {
                            if (document.querySelector('.inc_pdp_block') != null) {

                                if (document.querySelector('.back-to-top') != null) {
                                    document.querySelector('.back-to-top').style.visibility = "visible";
                                }

                                if (document.querySelector('.btn_contact_us') != null) {
                                    document.querySelector('.btn_contact_us').style.display = 'block !important';
                                }
                            }
                        }
                    }
                    var width_minbtn = 400 //top to bottom
                    var widthplusbtn = 50 // bottom to top
                    if (window.innerWidth > 500) {
                        var width_minbtn = 200
                        var widthplusbtn = 450
                    }
                    if (window.innerWidth < 600) {
                        if (y_scroll_pos >= inc_div.offsetTop - width_minbtn && y_scroll_pos <= inc_div.offsetTop + widthplusbtn) {
                            if (document.querySelector('.inc_pdp_block') != null) {

                                if (document.querySelector('.inc_pdp_block').classList.contains('.inc_sticky_add_to_cart') == false) {
                                    document.querySelector('.inc_pdp_block').classList.add('inc_sticky_add_to_cart');
                                }
                            }
                        } else {
                            if (document.querySelector('.inc_pdp_block') != null) {

                                if (document.querySelector('.inc_pdp_block') != null) {
                                    document.querySelector('.inc_pdp_block').classList.remove('inc_sticky_add_to_cart');
                                }
                            }
                        }
                    }
                }
            }
        });
    }
}, 3000)



function slideTo(id, n, elm, type_of, arrow) {
    if (elm.className == "left_arrow" || elm.className == "left_arrow inc_active" || type_of == "left") {
        var nn = -1
        inc_showSlides(INC.config.inc_slideIndex += nn, nn, elm, type_of, arrow);
    } else {
        var nn = 1
        inc_showSlides(INC.config.inc_slideIndex += nn, nn, elm, type_of, arrow);
    }
}

function inc_showSlides(n, ind, elm, type_of, arrow) {
    var i;
    var showcase_other_img_list = elm.querySelector('.inc_product_showcase_block .inc_product_img_main_img a')
    var modal_other_img_list = elm.querySelector('.inc_product_modal_block .inc_product_img_main_img a')
    var showcase_dots = elm.querySelectorAll('.inc_product_showcase_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block')
    var modal_dots = elm.querySelectorAll('.inc_product_modal_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block')

    var showcase_other_img = elm.querySelector('.inc_product_showcase_block .inc_product_img_main_img a img')

    var modal_other_img = elm.querySelector('.inc_product_modal_block .inc_product_img_main_img a img')

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
        showcase_dots[i].classList.remove('inc_active')
        if (modal_dots[i] != undefined) {
            modal_dots[i].classList.remove('inc_active')
        }
    }
    var img_src = additional_img[INC.config.inc_slideIndex - 1].replace('160x90', '2000x1500');
    showcase_other_img.setAttribute('src', img_src);
    modal_other_img.setAttribute('src', img_src)
    showcase_other_img.setAttribute('onerror', "this.src='" + get_org_img + "'");
    modal_other_img.setAttribute('onerror', "this.src='" + get_org_img + "'");

    for (var r = 0; r < showcase_dots.length; r++) {
        showcase_dots[r].classList.remove('inc_active');
        modal_dots[r].classList.remove('inc_active');
    }
    if (showcase_dots[INC.config.inc_slideIndex - 1] != null) {
        showcase_dots[INC.config.inc_slideIndex - 1].classList.add('inc_active');
    }
    if (modal_dots[INC.config.inc_slideIndex - 1] != null) {
        modal_dots[INC.config.inc_slideIndex - 1].classList.add('inc_active');
    }
    if (arrow == "arrow") {
        if (modal_dots.length > 6) {
            var activedots = elm.querySelector('.inc_product_modal_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block.inc_active')
            if (activedots != null) {
                var actind = activedots.getAttribute('index')
                // if(type_of == "right"){
                // if(actind == 4){
                //     if(modal_dots.length >= 5){
                //         modal_dots[0].style.display = "none"
                //     }
                // }else if(actind == 5){
                //     if(modal_dots.length >= 6){
                //         modal_dots[0].style.display = "none"
                //         modal_dots[1].style.display = "none"
                //     }
                // }else 
                if (actind == 5) {
                    if (modal_dots.length >= 6) {
                        modal_dots[0].setAttribute('style', 'display: none !important;')
                        // modal_dots[1].style.display = "none"
                        // modal_dots[2].style.display = "none"
                    }
                }
                if (actind == 6) {
                    if (modal_dots.length >= 7) {
                        modal_dots[0].setAttribute('style', 'display: none !important;')
                        modal_dots[1].setAttribute('style', 'display: none !important;')
                        // modal_dots[2].style.display = "none"
                    }
                } else if (actind == 7) {
                    if (modal_dots.length >= 8) {
                        modal_dots[0].setAttribute('style', 'display: none !important;')
                        modal_dots[1].setAttribute('style', 'display: none !important;')
                        // modal_dots[2].setAttribute('style','display: none !important;')
                        // modal_dots[3].setAttribute('style','display: none !important;')
                    }
                } else if (actind == 8) {
                    if (modal_dots.length >= 9) {
                        modal_dots[0].setAttribute('style', 'display: none !important;')
                        modal_dots[1].setAttribute('style', 'display: none !important;')
                        modal_dots[2].setAttribute('style', 'display: none !important;')
                        // modal_dots[3].setAttribute('style','display: none !important;')
                        // modal_dots[4].setAttribute('style','display: none !important;')
                    }
                } else if (actind == 9) {
                    if (modal_dots.length >= 10) {
                        modal_dots[0].setAttribute('style', 'display: none !important;')
                        modal_dots[1].setAttribute('style', 'display: none !important;')
                        modal_dots[2].setAttribute('style', 'display: none !important;')
                        modal_dots[3].setAttribute('style', 'display: none !important;')
                        // modal_dots[4].setAttribute('style','display: none !important;')
                        // modal_dots[5].setAttribute('style','display: none !important;')
                    }
                } else if (actind == 10) {
                    if (modal_dots.length >= 11) {
                        modal_dots[0].setAttribute('style', 'display: none !important;')
                        modal_dots[1].setAttribute('style', 'display: none !important;')
                        modal_dots[2].setAttribute('style', 'display: none !important;')
                        modal_dots[3].setAttribute('style', 'display: none !important;')
                        modal_dots[4].setAttribute('style', 'display: none !important;')
                        // modal_dots[5].setAttribute('style','display: none !important;')
                        // modal_dots[6].setAttribute('style','display: none !important;')
                    }
                } else if (actind == 11) {
                    if (modal_dots.length >= 12) {
                        modal_dots[0].setAttribute('style', 'display: none !important;')
                        modal_dots[1].setAttribute('style', 'display: none !important;')
                        modal_dots[2].setAttribute('style', 'display: none !important;')
                        modal_dots[3].setAttribute('style', 'display: none !important;')
                        modal_dots[4].setAttribute('style', 'display: none !important;')
                        modal_dots[5].setAttribute('style', 'display: none !important;')
                        modal_dots[6].setAttribute('style', 'display: none !important;')
                    }
                } else if (actind == 12) {
                    if (modal_dots.length >= 13) {
                        modal_dots[0].setAttribute('style', 'display: none !important;')
                        modal_dots[1].setAttribute('style', 'display: none !important;')
                        modal_dots[2].setAttribute('style', 'display: none !important;')
                        modal_dots[3].setAttribute('style', 'display: none !important;')
                        modal_dots[4].setAttribute('style', 'display: none !important;')
                        modal_dots[5].setAttribute('style', 'display: none !important;')
                        modal_dots[6].setAttribute('style', 'display: none !important;')
                        modal_dots[7].setAttribute('style', 'display: none !important;')
                    }
                } else if (actind == 13) {
                    if (modal_dots.length >= 14) {
                        modal_dots[0].setAttribute('style', 'display: none !important;')
                        modal_dots[1].setAttribute('style', 'display: none !important;')
                        modal_dots[2].setAttribute('style', 'display: none !important;')
                        modal_dots[3].setAttribute('style', 'display: none !important;')
                        modal_dots[4].setAttribute('style', 'display: none !important;')
                        modal_dots[5].setAttribute('style', 'display: none !important;')
                        modal_dots[6].setAttribute('style', 'display: none !important;')
                        modal_dots[7].setAttribute('style', 'display: none !important;')
                        modal_dots[8].setAttribute('style', 'display: none !important;')
                    }
                } else if (actind == 14) {
                    if (modal_dots.length >= 15) {
                        modal_dots[0].setAttribute('style', 'display: none !important;')
                        modal_dots[1].setAttribute('style', 'display: none !important;')
                        modal_dots[2].setAttribute('style', 'display: none !important;')
                        modal_dots[3].setAttribute('style', 'display: none !important;')
                        modal_dots[4].setAttribute('style', 'display: none !important;')
                        modal_dots[5].setAttribute('style', 'display: none !important;')
                        modal_dots[6].setAttribute('style', 'display: none !important;')
                        modal_dots[7].setAttribute('style', 'display: none !important;')
                        modal_dots[8].setAttribute('style', 'display: none !important;')
                        modal_dots[9].setAttribute('style', 'display: none !important;')
                    }
                } else if (actind == 16) {
                    if (modal_dots.length >= 17) {
                        modal_dots[0].setAttribute('style', 'display: none !important;')
                        modal_dots[1].setAttribute('style', 'display: none !important;')
                        modal_dots[2].setAttribute('style', 'display: none !important;')
                        modal_dots[3].setAttribute('style', 'display: none !important;')
                        modal_dots[4].setAttribute('style', 'display: none !important;')
                        modal_dots[5].setAttribute('style', 'display: none !important;')
                        modal_dots[6].setAttribute('style', 'display: none !important;')
                        modal_dots[7].setAttribute('style', 'display: none !important;')
                        modal_dots[8].setAttribute('style', 'display: none !important;')
                        modal_dots[9].setAttribute('style', 'display: none !important;')
                        modal_dots[10].setAttribute('style', 'display: none !important;')
                    }
                } else if (actind == 17) {
                    if (modal_dots.length >= 18) {
                        modal_dots[0].setAttribute('style', 'display: none !important;')
                        modal_dots[1].setAttribute('style', 'display: none !important;')
                        modal_dots[2].setAttribute('style', 'display: none !important;')
                        modal_dots[3].setAttribute('style', 'display: none !important;')
                        modal_dots[4].setAttribute('style', 'display: none !important;')
                        modal_dots[5].setAttribute('style', 'display: none !important;')
                        modal_dots[6].setAttribute('style', 'display: none !important;')
                        modal_dots[7].setAttribute('style', 'display: none !important;')
                        modal_dots[8].setAttribute('style', 'display: none !important;')
                        modal_dots[9].setAttribute('style', 'display: none !important;')
                        modal_dots[10].setAttribute('style', 'display: none !important;')
                        modal_dots[11].setAttribute('style', 'display: none !important;')
                    }
                } else {
                    modal_dots[0].style.display = "flex"
                    modal_dots[1].style.display = "flex"
                    modal_dots[2].style.display = "flex"
                    modal_dots[3].style.display = "flex"
                    if (modal_dots[4] != undefined) {
                        modal_dots[4].style.display = "flex"
                    }
                    if (modal_dots[5] != undefined) {
                        modal_dots[5].style.display = "flex"
                    }
                    if (modal_dots[6] != undefined) {
                        modal_dots[6].style.display = "flex"
                    }
                }
                // }
            }
        }
    }
}
// SWIPE FEATURE
var xDown = null;
var yDown = null;

function add_swipe(element) {
    element.addEventListener('touchstart', handleTouchStart, {
        passive: true
    });
    element.addEventListener('touchmove', handleTouchMove, {
        passive: true
    });
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
                var prod_card = evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                slideTo(null, 0, prod_card, "left")
            } else {
                /* right swipe */
                console.log("Math.abs(xDiff) + Math.abs(yDiff) > 150  else")
                var prod_card = evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
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
                var prod_card = evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                slideTo(null, 0, prod_card, "left")
            } else {
                /* right swipe */
                var prod_card = evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                slideTo(null, 0, prod_card, "right")
            }
        }
        /* reset values */
        xDown = null;
        yDown = null;
    }
}


var formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'GBP',
});


function cb_tc(bundle_response, recommendation) {
    // if(INC.config.recommendation == true){
    //     var bundles_tc =  bundle_response.CategoryRecommendations;
    // }else{
    var bundles_tc = bundle_response.Bundles;
    // }
    var bundleproductarrayTC = {}
    if (bundle_response.ProductsDetail != null) {
        for (var ibT = 0; ibT < bundle_response.ProductsDetail.length; ibT++) {
            bundleproductarrayTC[bundle_response.ProductsDetail[ibT].ProductId] = bundle_response.ProductsDetail[ibT]
        }
    } else if (bundle_response.ProductsDetail == null || bundle_response.ProductsDetail == "null") {
        for (var ibT = 0; ibT < bundle_response.CategoryRecommendations.length; ibT++) {
            bundleproductarrayTC[bundle_response.CategoryRecommendations[ibT].ProductId] = bundle_response.CategoryRecommendations[ibT]
        }
    }

    if (recommendation == "recommendation") {
        // INC.config.recommendation = true
        bundle_count = 1
        bundles_tc = []
    } else {
        var bundle_count = bundles_tc.length
    }

    for (var i = 0; i < bundle_count; i++) {
        if (recommendation == "recommendation") {
            bundles_tc.push({
                BundleId: 11111,
            })
        }
        if (INC.config.dupDataObjectProducts.indexOf(bundles_tc[i].BundleId) == -1) {
            INC.config.dupDataObjectProducts.push(bundles_tc[i].BundleId)
            if (recommendation == "recommendation") {
                var irbBundleObj = bundle_response
            } else {
                var irbBundleObj = bundles_tc[i];
            }
            var bundleObj = {};
            bundleObj.id = irbBundleObj["BundleId"];

            if (INC.config.recommendation == false) {
                // if (INC.debug) console.log(bundleObj.id);
                bundleObj.totalRegularPrice = irbBundleObj["TotalPrice"];
                bundleObj.totalActivePrice = irbBundleObj["TotalSpecialPrice"];
                bundleObj.totalBundlePrice = irbBundleObj["TotalBundlePrice"];
                bundleObj.totalBundleDiscountPrice = irbBundleObj["DiscountPrice"];
                bundleObj.productCount = irbBundleObj["ProductCount"];
            }

            if (recommendation == "recommendation") {
                var irbProductsArray = bundle_response.CategoryRecommendations
            } else {
                var irbProductsArray = irbBundleObj["ProductIds"]
            }

            if (irbProductsArray.length) {
                pdpProductId = irbProductsArray[0];
                if (INC.dataStore.bundleProductsArray != undefined) {
                    INC.dataStore.bundleProductsArray.push(irbProductsArray[1]);
                }
            }

            for (var j = 0; j < irbProductsArray.length; j++) {
                if (recommendation == "recommendation") {
                    var product = irbProductsArray[j]
                } else {
                    var product = bundleproductarrayTC[irbProductsArray[j]]
                }
                if (recommendation == "recommendation") {
                    INC.config.recommendationProduct.push(product.ProductId)
                }
                if (product["OtherImageList"] != null) {
                    if (product["OtherImageList"].indexOf(product["ImageURL"]) == -1) {
                        // product["OtherImageList"].unshift(product["ImageURL"])
                    }
                }
                if (isBase64(product["Description"]) == true) {
                    try {
                        product["Description"] = Base64.decode(product["Description"])
                    } catch (e) {
                        product["Description"] = product["Description"]
                    }
                } else {
                    // product["Description"] = product["Description"]
                    try {
                        if (product["Description"] != "" && product["Description"] != null) {
                            if (product["Description"].indexOf('the') >= 0 || product["Description"].indexOf('br') >= 0 || product["Description"].indexOf('<a>') >= 0 || product["Description"].indexOf('<p>') >= 0 || product["Description"].indexOf('<span>') >= 0 || product["Description"].indexOf('and') >= 0 || product["Description"].indexOf('<a')) {
                                product["Description"] = product["Description"]
                            } else {
                                product["Description"] = Base64.decode(product["Description"])
                            }

                        }
                    } catch (e) {
                        product["Description"] = product["Description"]
                    }

                }

                var pAttributes = product["Attributes"] || "";
                if (pAttributes != "" && pAttributes != null) {
                    for (var h = 0; h < pAttributes.length; h++) {
                        if (pAttributes[h].frontEndLabel == "color") {
                            pAttributes[h].frontEndLabel = "Color"
                        }
                        if (pAttributes[h].frontEndLabel == "size") {
                            pAttributes[h].frontEndLabel = "Size"
                        }
                        if (pAttributes[h].frontEndLabel == "weight") {
                            pAttributes[h].frontEndLabel = "Weight"
                        }
                        if (pAttributes[h].frontEndLabel == "colour") {
                            pAttributes[h].frontEndLabel = "Color"
                        }
                        if (pAttributes[h].frontEndLabel == "volume") {
                            pAttributes[h].frontEndLabel = "Volume"
                        }
                        pAttributes[h].attributeCode = pAttributes[h].frontEndLabel;
                    }
                    pAttributes = attribute_listing(pAttributes)
                }

                var pAttObj = {};
                for (t = 0; t < pAttributes.length; t++) {
                    if (pAttributes.length == 1) {
                        if (pAttributes[0].attributeCode == "Color" || pAttributes[0].attributeCode == "color") {
                            pAttributes[0].attributeId = 0;
                            var attr_values = pAttributes[t].attributeValues;
                            for (v = 0; v < attr_values.length; v++) {
                                attr_values[v].optionId = 0;
                            }
                        } else {
                            pAttributes[0].attributeId = 1;
                            var attr_values = pAttributes[t].attributeValues;
                            for (v = 0; v < attr_values.length; v++) {
                                attr_values[v].optionId = 1;
                            }
                        }
                    } else {
                        pAttributes[t].attributeId = t
                        var attr_values = pAttributes[t].attributeValues;
                        for (v = 0; v < attr_values.length; v++) {
                            attr_values[v].optionId = t;
                        }
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
                            childProduct["PromotionalMessage"] = product["PromotionalMessage"];
                            childProduct["ProductLevelDiscountMessage"] = product["ProductLevelDiscountMessage"];
                            childProduct["childCategoryName"] = product["CategoryName"];
                            childProduct["childProductField6"] = product["Field6"];
                            childProduct["childCategoryId"] = product["CategoryId"];
                            childProduct["childProductDescription"] = product["Description"];
                            childProduct["ShortDescription"] = product["ShortDescription"];
                            childProduct["Field5"] = product["Field5"];
                            childProduct["ProductType"] = product["ProductType"];
                            childProduct["mainSKU"] = product["ProductSku"];
                            childProduct["childProductIdmain"] = product["ProductId"];

                            childProduct["childProductImageUrlMain"] = product["ImageURL"];
                            childProduct["childProductPriceMain"] = product["Price"];
                            childProduct["childProductSpecialPriceMain"] = product["SpecialPrice"];
                            childProduct["childProductNameMain"] = product["ProductName"];
                            childProduct["childProductUrlMain"] = product["ProductUrl"];
                            childProduct["Field1"] = product["Field1"];

                            childProduct["childProductOtherImageUrl"] = product["OtherImageList"];
                            childProduct["childProductName"] = product["ProductName"];
                            childProduct["Manufacturer"] = product["Manufacturer"];
                            var productObj = new INC.classes.ProductAttObj(childProduct);

                            productObj["bundledProductId"] = pdpProductId;
                            productObj.mainId = product["ProductId"];
                            productObj.bundleId = bundleObj.id;
                            productObj.sku = productObj.id;
                            productObj.option[pAttributesObj["attributeId"]].id = pAttributesObj["attributeId"];
                            productObj.option[pAttributesObj["attributeId"]].label = pAttributesObj["frontEndLabel"];
                            productObj.option[pAttributesObj["attributeId"]].code = pAttributesObj["attributeCode"];
                            // productObj.Filed3 = product["Field1"];
                            productObj.Filed3 = product["Field3"] + " | " + product["Field4"];
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

                                    Object.keys(productObj[pAtt]).forEach(function (key) {
                                        pAttObj[pAtt][key] = productObj[pAtt][key];
                                    });
                                    // }
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
                    // productObj.Filed3 = product["Field1"];
                    productObj.Filed3 = product["Field3"] + " | " + product["Field4"];
                    if ((INC.dataStore.dataStoreObj != undefined) && (!INC.dataStore.dataStoreObj.hasOwnProperty(productObj['mainId']))) {
                        INC.dataStore.dataStoreObj[productObj['mainId']] = {};
                    }


                    if (INC.dataStore.dataStoreObj != undefined) {
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

    if (recommendation != "recommendation") {
        setTimeout(function () {
            INC.methods.createPDPBlock("sidebar")
        }, 200)
    } else if (recommendation == "recommendation") {
        setTimeout(function () {
            INC.methods.createAMBlock(null, "PDP", "recommendation")
        }, 200)
    }
}

function attribute_listing(valueArray) {

    sortingArr = ["Color", "Size", "Weight", "Volume"];

    items = valueArray

    sorting = ["Color", "Size", "Weight", "Volume"];
    result = []

    sorting.forEach(function (key) {
        var found = false;
        items = items.filter(function (item) {
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

function getTrackingPixel() {
    // var url = 'https://www.awin1.com/cread.php?awinmid=6774&awinaffid=317439'
    // /*-------------------Tracking with Image Pixel---------------------------*/
    // var oImg = document.createElement("img");
    // oImg.setAttribute('id', 'cstracking')
    // oImg.setAttribute('src', url);
    // oImg.setAttribute('height', '1px');
    // oImg.setAttribute('width', '1px');
    // oImg.setAttribute('style', 'display:none')
    // document.body.appendChild(oImg);
    /* -----------------------------------------------------------------------*/
}

function element_in_viewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;
    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }
    return (top < (window.pageYOffset + window.innerHeight) && left < (window.pageXOffset + window.innerWidth) && (top + height) > window.pageYOffset && (left + width) > window.pageXOffset);
}

var is_visible_elem_counter = 0;

function get_discount_price(p_original_price, p_sale_price) {
    //Math.round(((p_original_price - p_sale_price) / p_original_price) * 100);
    return parseFloat(+p_original_price - +p_sale_price)
}

function get_discount_price_percentage(p_original_price, p_sale_price) {
    return Math.round(((p_original_price - p_sale_price) / p_original_price) * 100);
}


var _isVisible = {
    viewport: {},
    _index: 0,
    _imgs: null,
    _active: false,
    _init: function (data) {
        this.viewport.top = window.pageYOffset;
        this.viewport.bottom = this.viewport.top + window.innerHeight;
        this._imgs = document.querySelectorAll(data.classSelector);
        this._index = data.index;
        this._active = true;
        this.getImages();
    },
    checkVisibility: function (elm) {
        if (typeof (elm) == "undefined")
            return;
        var bounds = {};
        bounds.top = elm.getBoundingClientRect().top + window.pageYOffset;
        bounds.bottom = bounds.top + elm.clientHeight;
        return (bounds.bottom >= this.viewport.top && bounds.bottom <= this.viewport.bottom) || (bounds.top <= this.viewport.bottom && bounds.top >= this.viewport.top);
    },
    getImages: function () {
        (function (elm) {
            var imgLoader = window.setInterval(function () {
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
                                elm._imgs[elm._index].srcset = elm._imgs[elm._index].getAttribute('data-srcset');
                            }
                            break;
                    }
                }
                elm._index++;
            }, 10);
        })(this);
    }
}
window.addEventListener('scroll', function () {
    _isVisible._init({
        classSelector: ".inc_pdp_block img[data-src], .inc_pdp_block source[data-src], .inc_sidebar_modal_block img[data-src], .inc_sidebar_modal_block source[data-src], .inc_af_block img[data-src], .inc_af_block source[data-src]",
        index: 0
    }, {
        passive: true
    });
});
window.addEventListener('mousemove', function () {
    _isVisible._init({
        classSelector: ".inc_pdp_block img[data-src], .inc_pdp_block source[data-src], .inc_sidebar_modal_block img[data-src], .inc_sidebar_modal_block source[data-src], .inc_af_block img[data-src], .inc_af_block source[data-src]",
        index: 0
    });
}, {
    passive: true
});
document.addEventListener('DOMContentLoaded', function () {
    _isVisible._init({
        classSelector: ".inc_pdp_block img[data-src], .inc_pdp_block source[data-src], .inc_sidebar_modal_block img[data-src], .inc_sidebar_modal_block source[data-src], .inc_af_block img[data-src], .inc_af_block source[data-src]",
        index: 0
    });
}, {
    passive: true
});



function crawlscript() {
    var product_id = "";

    if (window.impressions_or_products != undefined) {
        if (window.impressions_or_products[0]["id"] != '') {
            product_id = impressions_or_products[0]["id"];
        } else if (document.querySelector('.pdp-accordion__content-partNumber') != null) {
            product_id = document.querySelector('.pdp-accordion__content-partNumber').innerText;
        }
    }

    // description
    var desc_overview = ''
    var desc_spec = ''
    var description = null
    if (document.querySelector('#pdp-accordion__description') != null) {
        desc_overview = document.querySelector('#pdp-accordion__description').innerHTML;
        description = desc_overview;
    }
    if (document.querySelector('#pdp-accordion__nutrition') != null) {
        desc_spec = document.querySelector('#pdp-accordion__nutrition').innerHTML;
        description = desc_overview + "<span class ='inc_nutrition_text'>Nutrition & Analysis</span>" + desc_spec;
    }


    // ratings and reviews
    var rating = "";
    var review = "";
    if (document.querySelector('.pr-snippet-rating-decimal') != null && document.querySelector('.pr-snippet-rating-decimal').innerText != "0.0") {
        rating = document.querySelector('.pr-snippet-rating-decimal').innerText;
    }
    if (document.querySelector('.pr-category-snippet__total') != null && document.querySelector('.pr-category-snippet__total').innerText.toLowerCase() != "No Reviews".toLocaleLowerCase()) {
        review = document.querySelector('.pr-category-snippet__total').innerText.replace('Reviews', '').replace('Review', '');
    }
    var field6 = rating + "|" + review;

    var otherImageList = [];

    if (document.querySelectorAll('.pdp-image-viewer__tn-list li').length > 0) {
        Array.prototype.forEach.call(document.querySelectorAll('.pdp-image-viewer__tn-list li'), function (elProductImg) {
            otherImageList.push(elProductImg.getAttribute('data-src'));
        });
    }

    var product_val = [];
    var other_imag_url;
    var Captilize;
    var attribute_code;
    var option_Id;
    var promo;

    if (document.querySelector('.pdp-image-viewer__img') != null) {
        other_imag_url = document.querySelector('.pdp-image-viewer__img').src;
    }

    if (document.querySelector('.selector__selected-value') != null) {
        Captilize = document.querySelector('.selector__selected-value').innerText;
    } else if (document.querySelector('.colour-selector__selected-value') != null) {
        Captilize = document.querySelector('.colour-selector__selected-value').innerText;
    }

    if (document.querySelector('.pdp-accordion__content-partNumber') != null) {
        child_id = document.querySelector('.pdp-accordion__content-partNumber').innerText;
    }

    if (document.querySelector('.selector__title') != null && document.querySelector('.selector__title') != '') {
        if (document.querySelector('.selector__title').innerText.toLocaleLowerCase().replace(':', '') == "colour") {
            attribute_code = "Colour";
            option_Id = "1";
        } else if (document.querySelector('.selector__title').innerText.toLocaleLowerCase().replace(':', '') == "size") {
            attribute_code = "Size";
            option_Id = "2";
        } else if (document.querySelector('.selector__title').innerText.toLocaleLowerCase().replace(':', '') == "weight") {
            attribute_code = "Weight";
            option_Id = "3";
        } else if (document.querySelector('.selector__title').innerText.toLocaleLowerCase().replace(':', '') == "volume") {
            attribute_code = "Volume";
            option_Id = "4";
        }

    }

    if (document.querySelector('.pdp-offer-text__inner') != null) {
        promo = document.querySelector('.pdp-offer-text__inner').innerText;
    }

    // product_val.push({ "child_product_id": child_id, "attribute_code": attribute_code , "attribute_label": attribute_code, "option_image_url": other_imag_url, "option_id": option_Id, "option_text": Captilize });


    var format_json_data;

    if (crawl_click == false) {
        // onloadpdp = true;
        format_json_data = JSON.stringify({
            "event_data": {
                "product_id": product_id,
                "product_sku": null,
                // "product_attribute_data": product_val,
                "description": encodeURI(description),
                "other_image_list": otherImageList,
                //"promotional_message": promo,
                "field2": null,
                "field6": field6
            },
            "event_type": "product_page_visit",
            "method": "track",
            "token": "p3ThM9cON"
        });
    } else {
        format_json_data = JSON.stringify({
            "event_data": {
                "product_id": child_id,
                "product_sku": child_id,
                // "product_attribute_data": product_val,
                "description": null,
                // "promotional_message":null,
                "other_image_list": null,
                "field2": Captilize,
                "field6": null
            },
            "event_type": "product_page_visit",
            "method": "track",
            "token": "p3ThM9cON"
        });
    }




    data = {
        "eventData": btoa(format_json_data),
        "vid": readCookie('ivid'),
        "time": getCurrentFormattedTime(),
        "uri": document.location.href
    };

    p_url = 'https://gather.increasingly.com/ImportCrawledData';
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState == XMLHttpRequest.DONE) {
            if (xhr.status == 200) {
                if (xhr.responseText != "" && xhr.responseText != null) {} else {}
            }
        }
    };
    xhr.open("POST", p_url, true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify(data));

}


function oosproduct(prdid, qty, oos) {
    var format_json_data;
    var product_id = prdid;


    if (oos == "oos") {
        if (window.impressions_or_products != undefined) {
            if (window.impressions_or_products[0]["id"] != '') {
                product_id = impressions_or_products[0]["id"];
            } else if (document.querySelector('.pdp-accordion__content-partNumber') != null) {
                product_id = document.querySelector('.pdp-accordion__content-partNumber').innerText;
            }
        }
        qty = 1
    }
    format_json_data = JSON.stringify({
        "token": "p3ThM9cON",
        "product_id": product_id,
        "quantity": qty,
    });

    if (product_id != null) {
        data = {
            "eventData": btoa(format_json_data)
        };

        var p_url = 'https://gather.increasingly.com/ProductInventoryUpdate';
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


if (onloadpdp == false && INC.methods.detectPageType() == "pdp" && !(window.location.host == "www.uat03p.pahtest.com")) {
    setTimeout(function () {
        // crawlscript();
    }, 5000);
}


if (document.querySelector('.pdp-stock__message') != null && document.querySelector('.pdp-stock__message').innerText.toLocaleLowerCase().includes('out of stock')) {
    oosproduct(null, null, "oos");
}

function get_child_product_prices(productid) {
    price_array = [];
    x_price_array = [];
    var obj1 = INC.dataStore.dataStoreObj[productid];

    for (var key in obj1) {
        if (obj1.hasOwnProperty(key)) {
            var val1 = obj1[key];
            if (val1.activePrice != null && parseFloat(val1.activePrice) < parseFloat(val1.regularPrice)) {
                price_array.push(val1.activePrice);
                x_price_array.push(val1.regularPrice);
            } else {
                price_array.push(val1.activePrice);
                x_price_array.push(val1.regularPrice);
            }
        }
    }

    price_array = price_array.filter(Number);
    x_price_array = x_price_array.filter(Number);
    return min_max_prices(price_array, x_price_array);
}

function min_max_prices(arr, arr_x) {
    var min = Math.min.apply(Math, arr);
    var max = Math.max.apply(Math, arr);
    var min1 = Math.min.apply(Math, arr_x);
    var max1 = Math.max.apply(Math, arr_x);
    if (arr_x.length > 0) {
        var min_x = Math.min.apply(Math, arr_x);
    }
    var price_min_max = generate_html_tag("div", "price_min_max");
    if (min != max) {
        var price = formatter.format(min) + " - " + formatter.format(max);
    } else {
        var price = formatter.format(min);
    }
    if (min1 != max1) {
        var price1 = formatter.format(min1) + " - " + formatter.format(max1);
    } else {
        var price1 = formatter.format(min1);
    }
    price_min_max.textContent = price + "," + price1;
    return price_min_max;
}

function setJsonDatatoCookie(addedproducdetails) {
    var userD = readCookie('ividData')
    try {
        if (userD == undefined || userD == null || userD == "[]" || userD == "[null]") {
            var IncAddedprod = []
            IncAddedprod.push({
                addedproducdetails
            })
            var clientDomain = window.location.host.replace("www", "");
            var d = new Date();
            d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = 'ividData=' + JSON.stringify(addedproducdetails) + '; expires=' + expires + '; domain=' + clientDomain + '; path=/' + '; secure:' + true + ';'
        } else {
            var addedprod = JSON.parse(userD)
            var IncAddedprod = []
            addedprod.push(addedproducdetails[0])
            // var ividdataN = ividData + "-" + ;
            var clientDomain = window.location.host.replace("www", "");
            var d = new Date();
            d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = 'ividData=' + JSON.stringify(addedprod) + '; expires=' + expires + '; domain=' + clientDomain + '; path=/' + '; secure:' + true + ';'
        }
    } catch {

        console.log("IVID")
    }

}