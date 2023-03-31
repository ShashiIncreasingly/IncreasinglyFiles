/* eslint-disable no-mixed-spaces-and-tabs */

(function(){
    "use strict";
    var pdp_html = '<div class="inc_pdp_title_block"><div class="inc_pdp_title_text_block"><div class="inc_pdp_title_text">Frequently Bought Together</div></div></div><div class="inc_pdp_bundle_block"><div class="inc_pdp_product-main_block"><div class="mainprodtitletext">対象アイテム:</div></div><div class="inc_pdp_icon-add_block"><div class="inc_pdp_icon-add_img_block"><div class="inc_pdp_icon-add_img"></div></div></div><div class="inc_pdp_bundle_product_block"><div class="inc_pdp_bundle_product_header_block"><div class="inc_pdp_bundle_product_header_text">Frequently Bought with</div></div><div class="inc_pdp_bundle_product_left-btn_block"><div class="inc_pdp_bundle_product_left-btn_img_block"><div class="inc_pdp_bundle_product_left-btn_img" title="Scroll left"></div></div></div><div class="inc_pdp_bundle_product_list_block"><div class="inc_pdp_bundle_product_list_main_block"></div><div class="inc_pdp_bundle_product_list_left_block"><div class="inc_pdp_bundle_product_list_left_btn_block"><div class="inc_pdp_bundle_product_list_left_btn_img_block"><div class="inc_pdp_bundle_product_list_left_btn_img"></div></div></div></div><div class="inc_pdp_bundle_product_list_items_show_more_less_block"><div class="inc_pdp_bundle_product_list_items_show_more_less_text down_wrrow">Show more products</div></div><div class="inc_pdp_bundle_product_list_wrapper_items_block"><div class="inc_pdp_bundle_product_list_wrapper_header_block"><div class="inc_pdp_bundle_product_list_wrapper_header_text_block"></div><div class="inc_pdp_bundle_product_list_wrapper_header_close_block"></div></div><div class="inc_pdp_bundle_product_list_items_block" style="display:none;"></div></div><div class="inc_pdp_bundle_product_list_right_block"><div class="inc_pdp_bundle_product_list_right_btn_block"><div class="inc_pdp_bundle_product_list_right_btn_img_block"><div class="inc_pdp_bundle_product_list_right_btn_img"></div></div></div></div></div><div class="inc_pdp_bundle_product_right-btn_block"><div class="inc_pdp_bundle_product_right-btn_img_block"><div class="inc_pdp_bundle_product_right-btn_img" title="Scroll right"></div></div></div></div><div class="inc_pdp_bundle_cart_overlay_block"></div><div class="inc_pdp_bundle_cart_block"><div class="inc_pdp_bundle_cart_title_block"><div class="inc_pdp_bundle_cart_title_text_block" style="display:none;"><div class="inc_pdp_bundle_cart_title_text">Price Summary</div></div></div><div class="inc_pdp_bundle-cart_price_block"><div class="inc_pdp_bundle-cart_price_main"><div class="inc_pdp_bundle-cart_price_main_title_block"><div class="inc_pdp_bundle-cart_price_main_title_text_block"><div class="inc_pdp_bundle-cart_price_main_title_text">Main Product Price </div></div></div><div class="inc_pdp_bundle-cart_price_main_figure_block"><div class="inc_pdp_bundle-cart_price_main_figure_text_block"><div class="inc_pdp_bundle-cart_price_main_figure_text">¥00.00</div></div></div></div><div class="inc_pdp_bundle-cart_price_addon_block"><div class="inc_pdp_bundle-cart_price_addon_title_block"><div class="inc_pdp_bundle-cart_price_addon_title_text_block"><div class="inc_pdp_bundle-cart_price_addon_title_text">Add-on(s) Selected </div></div></div><div class="inc_pdp_bundle-cart_price_addon_figure_block"><div class="inc_pdp_bundle-cart_price_addon_figure_text_block"><div class="inc_pdp_bundle-cart_price_addon_figure_text">¥0.00</div></div></div></div></div><div class="inc_pdp_bundle_cart_added_block"></div><div class="inc_pdp_bundle_cart_summary_block"><div class="inc_pdp_bundle_cart_summary_title_block"><div class="inc_pdp_bundle_cart_summary_title_text_block"><div class="inc_pdp_bundle_cart_summary_title_text"><span>商品合計</span>(0<span>点)</span></div></div></div><div class="inc_pdp_bundle_cart_summary_price_block"><div class="inc_pdp_bundle_cart_summary_price_active_block"><div class="inc_pdp_bundle_cart_summary_price_active_text_block"><div class="inc_pdp_bundle_cart_summary_price_active_text">¥60.00</div></div></div><div class="inc_pdp_bundle_cart_summary_price_regular_block"><div class="inc_pdp_bundle_cart_summary_price_regular_text_block"><div class="inc_pdp_bundle_cart_summary_price_regular_text"></div></div></div></div><div class="inc_pdp_bundle_cart_summary_price_save_block"><div class="inc_pdp_bundle_cart_summary_price_save_text"></div></div><div class="inc_pdp_bundle_cart_summary_view_block"><div class="inc_pdp_bundle_cart_summary_view_btn_block"><div class="inc_pdp_bundle_cart_summary_view_btn_img_block"><div class="inc_pdp_bundle_cart_summary_view_btn_img"></div></div><div class="inc_pdp_bundle_cart_summary_view_btn_text_block"><div class="inc_pdp_bundle_cart_summary_view_btn_text">Added items</div></div><div class="inc_pdp_bundle_cart_summary_view_btn_count_block"><div class="inc_pdp_bundle_cart_summary_view_btn_count"></div></div></div></div><div class="inc_pdp_bundle_cart_summary_add_block"><div class="inc_pdp_bundle_cart_summary_add_btn_block"><div class="inc_pdp_bundle_cart_summary_add_btn_text_block"><div class="inc_pdp_bundle_cart_summary_add_btn_text">まとめてカートに入れる</div><div class="inc_pdp_bundle_cart_summary_add_btn_span"></div></div><div class="inc_pdp_bundle_cart_summary_add_btn_img_block"><div class="inc_pdp_bundle_cart_summary_add_btn_img"></div></div></div><div class="inc_pdp_bundle_cart_summary_add_btn_txt_block"></div></div></div></div>';
   
       var sidebar_html = '<div class="inc_sidebar_modal_block" id="inc_empty_sidebar" style="display: none;"> <div class="inc_header_title_block" role="banner"> <div class="inc_header_title_text_block"> <div class="inc_header_title_text"> カートに追加した商品 </div></div><div class="inc_header_sub_title_text_block"> <div class="inc_header_sub_title_text"></div></div><span class="close_sisebar_icon"></span></div><div class="inc_sidebar_cart_added_block"><div class="inc_cart_added_left_block"><div class="inc_cart_added_left_btn_block" style="visibility: hidden;"><div class="inc_cart_added_left_btn_img_block"><div class="inc_cart_added_left_btn_img"></div></div></div></div><div class="inc_cart_added_list_block" role="contentinfo"><div class="inc_cart_added_product_block oss" style="user-select: none;"></div></div><div class="inc_cart_added_right_block"><div class="inc_cart_added_right_btn_block" style="visibility: hidden;"><div class="inc_cart_added_right_btn_img_block"><div class="inc_cart_added_right_btn_img"></div></div></div></div></div><div class="inc_sidebar_checkout_block" role="contentinfo"> <div class="inc_checkout_continue_block"> <div class="inc_checkout_continue_btn_block"> <div class="inc_checkout_continue_btn_img_block"> <div class="inc_checkout_continue_btn_img"></div></div><div class="inc_checkout_continue_btn_text_block"> <div class="inc_checkout_continue_btn_text"> ショッピングを続ける </div><div class="inc_checkout_continue_btn_span"></div></div></div></div><div class="inc_checkout_basket_block"> <div class="inc_checkout_basket_btn_block"> <div class="inc_checkout_basket_btn_img_block"> <div class="inc_checkout_basket_btn_img"></div></div><div class="inc_checkout_basket_btn_text_block"> <div class="inc_checkout_basket_btn_span"></div><div class="inc_checkout_basket_btn_text"> <a href="https://shop.golfdigest.co.jp/gdogolfshop/cart/CCtViewCart_001.jsp?car=gr-dmg-bundle"> <div draggable="false"> カートを見る </div></a> </div></div></div></div></div></div>'

    
    var showcase_productcard = '<div class="inc_product_block"><div class="inc_product_extension_block"></div><div class="inc_product_header_main_block"><div class="inc_product_header_main_title_block"></div><div class="inc_product_header_main_rating_block"></div><div class="inc_product_header_block"><div class="inc_product_header_title_block"><div class="inc_product_header_title_text_block"><div class="inc_product_header_title_text"></div></div></div></div><div class="inc_product_Description_header_block"><div class="inc_product_Description_header_title_block"><div class="inc_product_Description_header_title_text_block"><div class="inc_product_Description_header_title_text"></div></div></div></div><div class="inc_product_header_img_block"><div class="inc_product_header_img"></div></div></div><div class="inc_product_info_main_block"><div class="inc_product_img_block"><div class="inc_product_img_main_block"><div class="inc_product_img_main_img_block"><div class="inc_product_img_main_img"></div></div></div><div class="inc_product_img_gallery_block"><div class="inc_product_img_gallery_left_block"><div class="inc_product_img_gallery_left_btn_block"><div class="inc_product_img_gallery_left_btn_img_block"><div class="inc_product_img_gallery_left_btn_img"></div></div><div class="inc_product_img_gallery_left_btn_text_block"><div class="inc_product_img_gallery_left_btn_text"></div></div></div></div><div class="inc_product_img_gallery_list_block"></div><div class="inc_product_img_gallery_right_block"><div class="inc_product_img_gallery_right_btn_block"><div class="inc_product_img_gallery_right_btn_img_block"><div class="inc_product_img_gallery_right_btn_img"></div></div><div class="inc_product_img_gallery_right_btn_text_block"><div class="inc_product_img_gallery_right_btn_text"></div></div></div></div></div><div class="inc_product_desc_titlprc_block"><div class="inc_product_manufacture_text_block"><div class="inc_product_maufacture_text"></div></div><div class="inc_product_desc_title_block"><div class="inc_product_desc_title_text_block"><div class="inc_product_desc_title_text"></div></div></div><div class="pc_promo_div"></div><div class="inc_product_desc_price_block"><div class="inc_product_price_label_block">SALE</div><div class="inc_product_desc_price_active_block"><div class="inc_product_desc_price_active_text_block"><div class="inc_product_desc_price_active_text">¥0.00 - -¥0.00</div><div class="inc_product_desc_price_active_text_msg"></div></div></div><div class="inc_product_desc_price_regular_block"><div class="inc_product_desc_price_regular_text_block"><div class="inc_product_desc_price_regular_text"></div></div></div></div></div><div class="inc_product_desc_ratings_block"></div><div class="inc_variant_error_text"></div><div class="inc_product_desc_qty_add_btn_block "><label>qty</label><div class="inc_product_qty_block singleqty" style="display:none;"><div class="inc_product_qty_down_block"><div class="inc_product_qty_down_btn_block"><div class="inc_product_qty_down_btn"></div></div></div><div class="inc_product_qty_input_block"><div class="inc_product_qty_input_text_block"><div class="inc_product_qty_input_text"><span class="inc_add_text"></span></div></div></div><div class="inc_product_qty_up_block"><div class="inc_product_qty_up_btn_block"><div class="inc_product_qty_up_btn"></div></div></div></div><div class="inc_product_add_block"><div class="inc_product_add_text_block" style="display:none;"><div class="inc_product_add_text">まとめてカートに入れる</div></div></div><div class="inc_product_add_collection_block" style="display:none;"><div class="inc_product_add_collection_text_block"><div class="inc_product_add_collection_text">Collect</div></div></div><div class="inc_product_desc_add_block"><div class="inc_product_desc_add_img_block"><div class="inc_product_desc_add_img"></div></div><div class="inc_product_desc_add_text_block"><div class="inc_product_desc_add_text">まとめてカートに入れる</div><div class="inc_product_desc_add_span"></div></div></div><div class="inc_product_bstxt_block"></div></div></div><div class="inc_product_desc_block"><div class="inc_product_desc_price_worth_block"><div class="inc_product_desc_price_worth_text_block"><div class="inc_product_desc_price_worth_text"></div><div class="inc_product_desc_price_worth_text_msg"></div></div></div><div class="inc_product_desc_att_details_block"><div class="inc_product_variant_simple_block" style="display:none;"><div class="inc_product_variant_simple_text"><span>まとめてカートに入れる</span></div></div><div class="inc_product_desc_att_block"><div class="inc_product_desc_variant_popup_close_block"></div><div class="inc_product_desc_add_err_text_block"></div><div class="inc_product_desc_add_title_text_block" style="display:none;"></div><div class="inc_product_desc_att_zero_block" style="display:none;"><div class="inc_product_desc_att_zero_title_block"><div class="inc_product_desc_att_zero_title_text_block"><div class="inc_product_desc_att_zero_title_text"></div><div class="inc_product_desc_att_zero_title_text_selected"></div></div></div><div class="inc_product_desc_att_zero_list_block"></div></div><div class="inc_product_desc_att_size_block"><div class="inc_product_desc_att_size_title_block"><div class="inc_product_desc_att_size_title_text_block"><div class="inc_product_desc_att_size_title_text"></div><div class="inc_product_desc_att_size_title_text_selected" style="display:none;"></div></div></div><div class="inc_product_desc_att_size_list_block"></div></div><div class="inc_product_desc_att_color_block" style="display:none;"><div class="inc_product_desc_att_color_title_block"><div class="inc_product_desc_att_color_title_text_block"><div class="inc_product_desc_att_color_title_text"></div><div class="inc_product_desc_att_color_title_text_selected"></div></div></div><div class="inc_product_desc_att_color_list_block"></div></div><div class="inc_product_desc_att_third_block" style="display:none;"><div class="inc_product_desc_att_third_title_block"><div class="inc_product_desc_att_third_title_text_block"><div class="inc_product_desc_att_third_title_text"></div><div class="inc_product_desc_att_third_title_text_selected"></div></div></div><div class="inc_product_desc_att_third_list_block"></div></div><div class="inc_product_desc_att_fourth_block"><div class="inc_product_desc_att_fourth_title_block"><div class="inc_product_desc_att_fourth_title_text_block"><div class="inc_product_desc_att_fourth_title_text"></div><div class="inc_product_desc_att_fourth_title_text_selected"></div></div></div><div class="inc_product_desc_att_fourth_list_block"><div class="inc_product_desc_att_fourth_list_item_block"><div class="inc_product_desc_att_fourth_list_item_img_block"><div class="inc_product_desc_att_fourth_list_item_img"></div></div><div class="inc_product_desc_att_fourth_list_item_text_block"><div class="inc_product_desc_att_fourth_list_item_text"></div></div></div></div></div><div class="inc_product_desc_att_edit_block"><div class="inc_product_desc_att_edit_text"></div></div><div class="inc_product_desc_att_variant_add_block" style="display:none;"><div class="inc_product_desc_att_variant_text"></div></div></div><div class="inc_product_details_prod_block"><div class="inc_product_details_prod_text"></div></div></div></div><div class="inc_product_bstxt_block"></div></div><div class="inc_product_description_main_block"></div></div>'

    var modal_productcard = '<div class="inc_product_block "><div class="inc_product_extension_block"></div><div class="inc_product_header_main_block"><div class="inc_product_header_main_title_block" style="display:none;"></div><div class="inc_product_header_main_rating_block" style="display:none;"><div class="inc_product_desc_ratings_block"></div><span class="product_modal_sku">#</span></div><div class="inc_product_header_block"><div class="inc_product_header_title_block"><div class="inc_product_header_title_text_block"><div class="inc_product_header_title_text">Overview</div></div></div><div class="inc_product_header_title_block_1"><div class="inc_product_header_title_text_block_1"><div class="inc_product_header_title_text_1">Description</div></div></div><div class="inc_product_header_new_page"><a class="inc_product_header_new_page_text" href="">Open in a new tab</a></div></div><div class="inc_product_Description_header_block"><div class="inc_product_Description_header_title_block"><div class="inc_product_Description_header_title_text_block"><div class="inc_product_Description_header_title_text"></div></div></div></div><div class="inc_product_header_img_block"><div class="inc_product_header_img"></div></div></div><div class="inc_product_info_main_block"><div class="inc_product_img_block"><div class="inc_product_img_main_block"><div class="inc_product_img_main_img_block"><div class="inc_product_img_main_img"></div></div></div><div class="inc_product_img_gallery_block"><div class="inc_product_img_gallery_left_block" title="Scroll left"><div class="inc_product_img_gallery_left_btn_block"><div class="inc_product_img_gallery_left_btn_img_block"><div class="inc_product_img_gallery_left_btn_img"></div></div><div class="inc_product_img_gallery_left_btn_text_block"><div class="inc_product_img_gallery_left_btn_text"></div></div></div></div><div class="inc_product_img_gallery_list_block"></div><div class="inc_product_img_gallery_right_block" title="Scroll right"><div class="inc_product_img_gallery_right_btn_block"><div class="inc_product_img_gallery_right_btn_img_block"><div class="inc_product_img_gallery_right_btn_img"></div></div><div class="inc_product_img_gallery_right_btn_text_block"><div class="inc_product_img_gallery_right_btn_text"></div></div></div></div></div><div class="inc_product_desc_titlprc_block"><div class="inc_product_manufacture_text_block"><div class="inc_product_maufacture_text"></div></div><div class="inc_product_desc_title_block"><div class="inc_product_desc_title_text_block"><div class="inc_product_desc_title_text"></div></div></div><div class="inc_product_desc_price_block"><div class="inc_product_price_label_block">SALE</div><div class="inc_product_desc_price_active_block"><div class="inc_product_desc_price_active_text_block"><div class="inc_product_desc_price_active_text">¥0.00 - -¥0.00</div><div class="inc_product_desc_price_active_text_msg"></div></div></div><div class="inc_product_desc_price_regular_block"><div class="inc_product_desc_price_regular_text_block"><div class="inc_product_desc_price_regular_text"></div></div></div</div></div><div class="inc_product_desc_block"><div class="inc_product_desc_price_worth_block"><div class="inc_product_desc_price_worth_text_block"><div class="inc_product_desc_price_worth_text"></div><div class="inc_product_desc_price_worth_text_msg"></div></div></div><div class="inc_product_desc_ratings_block"></div><div class="inc_product_desc_att_details_block"><div class="inc_product_variant_simple_block"><div class="inc_product_variant_simple_text" style="display:none;"><img><span></span></div></div><div class="pc_promo_div"></div><div class="inc_product_desc_att_block"><div class="inc_product_desc_variant_popup_close_block"></div><div class="inc_product_desc_add_err_text_block"></div><div class="inc_product_desc_add_title_text_block"></div><div class="inc_product_desc_att_zero_block" style="display:none;"><div class="inc_product_desc_att_zero_title_block"><div class="inc_product_desc_att_zero_title_text_block"><div class="inc_product_desc_att_zero_title_text"></div><div class="inc_product_desc_att_zero_title_text_selected"></div></div></div><div class="inc_product_desc_att_zero_list_block"></div></div><div class="inc_product_desc_att_size_block"><div class="inc_product_desc_att_size_title_block"><div class="inc_product_desc_att_size_title_text_block"><div class="inc_product_desc_att_size_title_text"></div><div class="inc_product_desc_att_size_title_text_selected"></div></div></div><div class="inc_product_desc_att_size_list_block"></div></div><div class="inc_product_desc_att_color_block"><div class="inc_product_desc_att_color_title_block"><div class="inc_product_desc_att_color_title_text_block"><div class="inc_product_desc_att_color_title_text"></div><div class="inc_product_desc_att_color_title_text_selected"></div></div></div><div class="inc_product_desc_att_color_list_block"></div></div><div class="inc_product_desc_att_third_block"><div class="inc_product_desc_att_third_title_block"><div class="inc_product_desc_att_third_title_text_block"><div class="inc_product_desc_att_third_title_text"></div><div class="inc_product_desc_att_third_title_text_selected"></div></div></div><div class="inc_product_desc_att_third_list_block"></div></div><div class="inc_product_desc_att_fourth_block"><div class="inc_product_desc_att_fourth_title_block"><div class="inc_product_desc_att_fourth_title_text_block"><div class="inc_product_desc_att_fourth_title_text"></div><div class="inc_product_desc_att_fourth_title_text_selected"></div></div></div><div class="inc_product_desc_att_fourth_list_block"><div class="inc_product_desc_att_fourth_list_item_block"><div class="inc_product_desc_att_fourth_list_item_img_block"><div class="inc_product_desc_att_fourth_list_item_img"></div></div><div class="inc_product_desc_att_fourth_list_item_text_block"><div class="inc_product_desc_att_fourth_list_item_text"></div></div></div></div></div><div class="inc_product_desc_att_edit_block"><div class="inc_product_desc_att_edit_text"></div></div><div class="inc_product_desc_att_variant_add_block"><div class="inc_product_desc_att_variant_text"></div></div></div><div class="inc_product_details_prod_block"><div class="inc_product_details_prod_text"></div></div></div><div class="inc_product_desc_qty_add_btn_block"><div class="inc_product_qty_block singleqty" style="display:none;"><div class="inc_product_qty_down_block"><div class="inc_product_qty_down_btn_block"><div class="inc_product_qty_down_btn"></div></div></div><div class="inc_product_qty_input_block"><div class="inc_product_qty_input_text_block"><div class="inc_product_qty_input_text"></div></div></div><div class="inc_product_qty_up_block"><div class="inc_product_qty_up_btn_block"><div class="inc_product_qty_up_btn"></div></div></div></div><div class="inc_product_add_block"><div class="inc_product_add_text_block" style="display:none;"><div class="inc_product_add_text"></div></div></div><div class="inc_product_add_collection_block" style="display:none;"><div class="inc_product_add_collection_text_block"><div class="inc_product_add_collection_text">Collect</div></div></div><div class="inc_product_desc_add_block"><div class="inc_product_desc_add_img_block"><div class="inc_product_desc_add_img"></div></div><div class="inc_product_desc_add_text_block"><div class="inc_product_desc_add_text">選択する</div><div class="inc_product_desc_add_span"></div></div></div></div><div class="inc_product_bstxt_block"></div></div></div><div class="inc_product_bstxt_block"></div></div><div class="inc_product_description_main_block"></div></div>';
    var INC = {};
    var collection_height = 200
    var init_flag = true
    INC.bundles = true
    INC.ENV = "prod";
    INC.debug = 0;
    INC.initStatus = "";
    INC.initStatusCP = "";
    var onloadpdp = false;
    var crypto = window.crypto || window.msCrypto;
    function generateRandomString(bits1) {
        return (crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295).toString(bits1).substring(2, 15) + (crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295).toString(bits1).substring(2, 15);
    }
    function addCSSFile() {
        var versionUpdate = (new Date()).getTime();
        var cssFilePath = "https://jp.increasingly.co/Implementation/gD9Jp/css/gD9Jp.css?v="
        var linkTag = document.createElement('link');
        linkTag.rel = "stylesheet";
        linkTag.href = cssFilePath;
        document.querySelector('head').appendChild(linkTag);
    }
// addCSSFile()
    var trueflag = true;
    var falseflag = false;
    var onloadpdp_delete = false;
    var incallowedKeys = [46, 8, 9, 27, 110, 190];
    var inc_scroll_height = 100
    INC.clientConfig = {};
    INC.clientConfig.statusVAT = "";
    INC.clientConfig.offset = 0;
    INC.clientConfig.slidevalue = 0;
    INC.config = {};
    INC.config.deviceType = "";
    INC.config.clientToken = "gD9Jp";
    INC.config.trackingURL = "https://jpoptimizedby.increasingly.co/ImportData";
    INC.config.addToBasketURL = "https://shop.golfdigest.co.jp/newshop/cart/CCtAsyncAddGoodsToCart_J.jsp?";
    INC.clientConfig.checkoutLink = "https://shop.golfdigest.co.jp/gdogolfshop/cart/CCtViewCart_001.jsp?car=gr-dmg-bundle";
    INC.config.affiliateURL = "";
    INC.config.pageType = "";
    INC.config.ivid = "";
    INC.config.pdpaddedProductList = [];
    INC.config.inc_slideIndex = 1;
    INC.config.bundle_tracking = [];
    INC.config.Product_id = null;
    INC.config.dupBasket = [];
    INC.config.dupDataObjectProducts = [];
    INC.clientConfig.OOS = []
    INC.config.disablebtn = true;
    INC.config.sidebarremovedprod = [];
    INC.config.cartproductids = [];
    INC.config.bundle_skuPushed = []
    INC.config.recommendationProduct=[];
    INC.config.FBTTitleJp = "よく一緒に買われている商品をまとめて購入"
    INC.config.AddedText = "Added"
    INC.config.BeforeYouChecktext = "CUSTOMER ALSO USE"
    INC.config.ajaxerr = "I'm sorry we've experienced an error. Please try again."
    INC.config.UpdateText = "選択中"
    INC.config.noimage = "https://jp.increasingly.co/Implementation/gD9Jp_dev/images/No-image.png"
    INC.config.recommendation = false;
    INC.config.bundledid=[]
    INC.config.cldomain = "";
    INC.config.checkoutpath = '/Form/Order/CartList.aspx';
    INC.config.fabrictext="Select Fabric"
    INC.config.styleft="left:0 !important;position: relative;"
    INC.config.FBTTitle = "よく一緒に買われている商品をまとめて購入"
    INC.config.AddText = "選択する"
    INC.config.AddedText = "選択中"
    if (window.innerWidth < 820){
        INC.config.TotalText = "合計"
    } else {
        INC.config.TotalText = "商品合計"
    }
    INC.config.AddToCartText = "カートに入れる"
    INC.config.AddToCarts = "まとめてカートに入れる"
    INC.config.ItemAddedToCarttext = "カートに追加した商品"
    INC.config.ExcItemAlreadyinCartText = ""
    INC.config.NosText = "点"
    INC.config.OtherCustAlsoBoughtText = "この商品を買った人は、こんな商品も買っています"
    INC.config.ContinueShopping = "ショッピングを続ける"
    INC.config.CartText = "カートを見る"
    INC.config.BeforeYouChecktext = "この商品とよく一緒に購入されている商品"
    INC.config.BeforeYouChecktextMob = "この商品を買った人は、<br>こんな商品も買っています"
    INC.config.ViewDetailsText = "詳細を見る"
    INC.config.DescriptionText = "商品説明"
    INC.config.SeeOtherProdText = "その他の商品を見る"
    INC.config.ColorSizeText = "色/サイズ"
    INC.config.EditText = "編集"
    INC.config.UpdateText = "選択中"
    INC.config.addingText = "選択する"
    INC.config.qtyText = "数量:"
    INC.config.ctl_names = []
    INC.config.ctl_img_srcs = []
    INC.config.ctl_prices = []
    INC.config.qtyscross=[]
    INC.config.usrIdfy = "";
    INC.config.datastoreprod=[]
    INC.config.ddFlag = false;
    INC.config.catFlag = [];
    INC.config.clientvariantclick = false;
    INC.config.prcText = "税込";
    var fabricprod=[]
    INC.config.price_array = [];
	INC.config.x_price_array = [];
    INC.checkProdUserCookie = function () {
        if (INC.ENV == "prod") {
            if (init_flag) {
                setTimeout(function(){
                    init_flag = false;
                    INC.init();
                },50)
            }
        }
    }
    INC.checkProdUserCookie();
    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var s in ca) {
            if(Object.prototype.hasOwnProperty.call(ca, s)){
                var c = ca[s];
                while (c.charAt(0) == ' ') {
                    c = c.substring(1, c.length)
                }
                if (c.indexOf(nameEQ) == 0) {
                    return c.substring(nameEQ.length, c.length);
                }
            }
        }
        return null;
    }
    
    function generate_html_tag(element, className) {
        var generateEl = document.createElement(element);
        if(className != undefined){
            generateEl.classList.add(className)
        }
        return generateEl;
    }
    var formatter = new Intl.NumberFormat('ja-JP', {
        style: 'currency',
        currency: 'JPY',
    });
    if (document.querySelector('#usr_shopLevel') != null){
        if (document.querySelector('#usr_shopLevel').innerText == "0"){
            INC.config.usrIdfy = "level0"
        }

        if (document.querySelector('#usr_shopLevel').innerText == "1"){
            INC.config.usrIdfy = "level1"
        }

        if (document.querySelector('#usr_shopLevel').innerText == "2"){
            INC.config.usrIdfy = "level2"
        } 

        if (document.querySelector('#usr_shopLevel').innerText == "3"){
            INC.config.usrIdfy = "level3"
        }

        if (document.querySelector('#usr_shopLevel').innerText == "4"){
            INC.config.usrIdfy = "level4"
        }
    } else {
        INC.config.usrIdfy = "nonLogin"
    }
    INC.init = function () {
        INC.config.datastoreprod=[]
        INC.config.dupDataObjectProducts = [];
        INC.methods.addVisitorID();
        INC.config.pageType = INC.methods.detectPageType();
        INC.methods.clear();
        switch (INC.config.pageType) {
            case "pdp":
                var productId = INC.methods.getProductIdFromWebPage();
                INC.methods.irbReq(productId, 5, "catalog_product_view");
                break;
        }
    }
    INC.dataStore = {};
    INC.dataStore.methods = function () {
        var incDataStore = INC.dataStore;
        function buildDataStoreObj(bundleResponse) {
            INC.config.dupDataObjectProducts = []
            INC.dataStore.clientProductDealsCategory = "";
            var bundles = [];
            if (INC.config.recommendation == trueflag) {
                bundles = bundleResponse.CategoryRecommendations;
            }else{
                bundles = bundleResponse.Bundles;
            }
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
            if (bundleResponse.ProductsDetail != null) {
                for (var pr in bundleResponse.ProductsDetail) {
                    if(Object.prototype.hasOwnProperty.call(bundleResponse.ProductsDetail, pr)){
                        bundleproductarray[bundleResponse.ProductsDetail[pr].ProductId] = bundleResponse.ProductsDetail[pr]
                    }
                }
            } else if (bundleResponse.CategoryRecommendations != null) {
                for (var ct in bundleResponse.CategoryRecommendations) {
                    if(Object.prototype.hasOwnProperty.call(bundleResponse.CategoryRecommendations, ct)){
                        bundleproductarray[bundleResponse.CategoryRecommendations[ct].ProductId] = bundleResponse.CategoryRecommendations[ct]
                    }
                }
            }
            var pdpProductId = ""
            for (var i in bundles) {
                if(Object.prototype.hasOwnProperty.call(bundles, i)){
                    if (INC.config.dupDataObjectProducts.indexOf(bundles[i].BundleId) == -1) {
                        if (INC.config.recommendation == falseflag) {
                            INC.config.dupDataObjectProducts.push(bundles[i].BundleId)
                        }
                        INC.config.bundledid.push({
                            bundleids :bundles[i].BundleId,
                            productids:bundles[i].ProductIds
                        })
                        var irbBundleObj = bundles[i];
                        var bundleObj = {};
                        if (INC.config.recommendation == falseflag) {
                            bundleObj.id = irbBundleObj["BundleId"];
                        }
                        if (INC.config.recommendation == falseflag) {
                            bundleObj.id = irbBundleObj["BundleId"];
                            bundleObj.totalRegularPrice = irbBundleObj["TotalPrice"];
                            bundleObj.totalActivePrice = irbBundleObj["TotalSpecialPrice"];
                            bundleObj.totalBundlePrice = irbBundleObj["TotalBundlePrice"];
                            bundleObj.totalBundleDiscountPrice = irbBundleObj["DiscountPrice"];
                            bundleObj.productCount = irbBundleObj["ProductCount"];
                        }
                        var irbProductsArray = '';
                        if (INC.config.recommendation == trueflag) {
                            irbProductsArray = bundles;
                        } else {
                            irbProductsArray = irbBundleObj["ProductIds"]
                        }
                        if (INC.config.recommendation == falseflag) {
                            if (irbProductsArray) {
                                if (window.location.pathname == INC.config.checkoutpath || INC.config.recommendation) {
                                    if (INC.config.cartproductids.indexOf(irbProductsArray[0]) >= 0) {
                                        pdpProductId = irbProductsArray[0];
                                        bundleProductsArray.push(irbProductsArray[1]);
                                    } else if (INC.config.cartproductids.indexOf(irbProductsArray[1]) >= 0) {
                                        pdpProductId = irbProductsArray[1];
                                        bundleProductsArray.push(irbProductsArray[0]);
                                    }
                                } else {
                                    pdpProductId = irbProductsArray[0];
                                    bundleProductsArray.push(irbProductsArray[1]);
                                }
                            }
                        }
                        
                        if (INC.config.recommendation == trueflag) {
                            bundleProductsArray.push(bundles[i]["ProductId"]);
                        }
                    
                        for (var ir in irbProductsArray) {
                            if(Object.prototype.hasOwnProperty.call(irbProductsArray, ir)){
                                var product = bundleproductarray[irbProductsArray[ir]] || irbProductsArray[ir]
                                if(INC.config.datastoreprod.indexOf(product.ProductId) == -1){
                                    INC.config.datastoreprod.push(product.ProductId)
                                    if(INC.config.recommendation == trueflag){
                                        INC.config.recommendationProduct.push(product.ProductId)
                                    }
                                    var pAttributes = product["Attributes"] || "";
                                    if (pAttributes != "" && pAttributes != null) {
                                        pAttributes = attribute_listing(pAttributes)
                                    }
                                    var pAttObj = {};
                                    var attr_values = '';
                                    for (var t = 0; t < pAttributes.length; t++) {
                                        pAttributes[t].attributeId = t
                                        attr_values = pAttributes[t].attributeValues;
                                        for (var v = 0; v < attr_values.length; v++) {
                                            attr_values[v].optionId = t;
                                        }
                                    }
                                    
                                    var productObj = '';
                                    if (pAttributes.length) {
                                        for (var pattv in pAttributes) {
                                            if(Object.prototype.hasOwnProperty.call(pAttributes, pattv)){
                                                var pAttributesObj = pAttributes[pattv];
                                                var pAttributesValues = pAttributesObj["attributeValues"];
                                                for (var ptr in pAttributesValues) {
                                                    if(Object.prototype.hasOwnProperty.call(pAttributesValues, ptr)){
                                                        var childProduct = pAttributesValues[ptr];
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
                                                            childProduct["MemberPrc"] = product["Field4"];
                                                            childProduct["MemberPrices"] = product["Field4"];
                                                            childProduct["MakerName"] = product["Field6"];
                                                            childProduct["genericField"] = product["GenericField"];
                                                        }
                                                        childProduct["ProductType"] = product["ProductType"];
                                                        childProduct["mainSKU"] = product["ProductSku"];
                                                        childProduct["childProductIdmain"] = product["ProductId"];
                                                        childProduct["childProductImageUrlMain"] = product["ImageURL"];
                                                        childProduct["childProductPriceMain"] = product["Price"];
                                                        childProduct["childProductSpecialPriceMain"] = product["SpecialPrice"];
                                                        
                                                        childProduct["PromotionalMessage"] = product["PromotionalMessage"];
                                                        childProduct["childProductNameMain"] = product["ProductName"];
                                                        childProduct["childProductUrlMain"] = product["ProductUrl"];
                                                        childProduct["childreviewsCount"] = product["RatingCount"];
                                                        childProduct["childRating"] = product["Rating"];
                                                        childProduct["childCategoryName"] = product["CategoryName"];
                                                        childProduct["childCategoryId"] = product["CategoryId"];
                                                        childProduct["childProductDescription"] = product["Description"];
                                                     	childProduct["MemberPrices"] = childProduct["childProductField4"];
                                                        childProduct["MakerName"] = childProduct["childProductField6"];
                                                        childProduct["Manufacturer"] = product["Manufacturer"];
                                                        childProduct["genericField"] = childProduct["genericField"];
                                                        
                                                        productObj = new INC.classes.ProductAttObj(childProduct);
                                                        
                                                        productObj["bundledProductId"] = pdpProductId;
                                                        productObj.mainId = product["ProductId"];
                                                        productObj.bundleId = bundleObj.id;
                                                        productObj.sku = productObj.id;
                                                        productObj.option[pAttributesObj["attributeId"]].id = pAttributesObj["attributeId"];
                                                        productObj.option[pAttributesObj["attributeId"]].label = pAttributesObj["frontEndLabel"];
                                                        productObj.option[pAttributesObj["attributeId"]].code = pAttributesObj["attributeCode"];
                                                        productObj.option[pAttributesObj["attributeId"]].att_id = pAttributesObj.attributeId
                                                        if (!Object.prototype.hasOwnProperty.call(dataStoreObj, product['ProductId'])) {
                                                            dataStoreObj[product['ProductId']] = {};
                                                        }
                                                        if (!Object.prototype.hasOwnProperty.call(dataStoreObj[product['ProductId']], productObj['id'])) {
                                                            dataStoreObj[product['ProductId']][productObj['id']] = {}
                                                        }
                                                        pAttObj = dataStoreObj[product['ProductId']][productObj['id']];
                                                        for (var pAtt in productObj) {
                                                            if(Object.prototype.hasOwnProperty.call(productObj, pAtt)){
                                                                if (pAtt == "option") {
                                                                    if (!Object.prototype.hasOwnProperty.call(pAttObj, 'option')) {
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
                                        }
                                    }
                                    if (pAttributes.length == 0) {
                                        productObj = new INC.classes.ProductObj(product);
                                        productObj["bundleId"] = irbBundleObj["BundleId"];
                                        if (INC.config.recommendation == falseflag) {
                                            productObj["bundledProductId"] = pdpProductId;
                                        }
                                        productObj.sku = productObj.id;
                                        productObj.Filed3 = product["Field3"] + " | " + product["Field4"];
                                        if (!Object.prototype.hasOwnProperty.call(dataStoreObj, productObj['mainId'])) {
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
                }
            }
            
            incDataStore.dataStoreObj = dataStoreObj;
            incDataStore.bundleProductsArray = bundleProductsArray;
            if (INC.config.recommendation == falseflag) {
                incDataStore.pdpProductId = pdpProductId;
            }
            incDataStore.bundleCartProducts = {};
        }
        function getFirstProductObjByMainId(findObj) {
            var childProductObj = {};
            var productListObj = INC.dataStore.dataStoreObj;
            try {
                if(productListObj != undefined && productListObj[findObj["mainId"]] != undefined){
                    childProductObj = productListObj[findObj["mainId"]][Object.keys(productListObj[findObj["mainId"]])[0]];
                }
            } catch(e) {
                throw e;
            }
            return childProductObj;
        }

        function getProductById(findObj) {
            var childProductObj = {};
            var productListObj = INC.dataStore.dataStoreObj;
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
        function getProductBySKU(findObj) {
            var childProductObj = {};
            var productListObj = INC.dataStore.dataStoreObj;
            if (Object.prototype.hasOwnProperty.call(findObj, "sku")) {
                for (var mainProductId in productListObj) {
                    for (var childProductId in productListObj[mainProductId]) {
                        if (productListObj[mainProductId][childProductId]["sku"] == findObj['sku']) {
                            childProductObj = productListObj[mainProductId][childProductId];
                            break;
                        }
                    }
                }
            }
            return childProductObj;
        }
        function getUniqueCatergories() {
            var catergoriesArray = [];
            var productListObj = INC.dataStore.dataStoreObj;
            var bundleProductsArray = INC.dataStore.bundleProductsArray;
            bundleProductsArray.forEach(function (productId) {
                for (var childProductId in productListObj[productId]) {
                    var indexOfCategoryId = catergoriesArray.indexOf(productListObj[productId][childProductId]["categoryId"]);
                    if (indexOfCategoryId == -1 && productListObj[productId][childProductId]["categoryId"] != INC.dataStore.clientProductDealsCategory) {
                        catergoriesArray.push(productListObj[productId][childProductId]["categoryId"]);
                    }
                }
            });
            return catergoriesArray;
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
                return (x < y ? -1 : (sortdata_(x, y)));
            });

            function sortdata_(x, y) {
                return x > y ? 1 : 0;
            }
        }
        function getProductColorsObj(findObj, type_of) {
            var productColorObj = {};
            var productListObj = INC.dataStore.dataStoreObj;
            var productColorArrayObj = {}
            var productColorObjArray = [];
            if (Object.prototype.hasOwnProperty.call(findObj, "mainId")) {
                for (var mainProductId in productListObj) {
                    if (mainProductId == findObj["mainId"]) {
                        for (var childProductId in productListObj[mainProductId]) {
                            if (productListObj[mainProductId][childProductId]["option"]["0"] != undefined) {
                                // if (productListObj[mainProductId][childProductId]["option"]["0"].code == "Color") {
                                    if (productListObj[mainProductId][childProductId]["option"] != null &&
                                        productListObj[mainProductId][childProductId]["option"] != undefined &&
                                        productListObj[mainProductId][childProductId]["option"]["0"] != null &&
                                        productListObj[mainProductId][childProductId]["option"]["0"] != undefined) {
                                        if (type_of != undefined) {
                                            var attr_block = null;
                                            if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == falseflag) {
                                                attr_block = type_of.parentNode.parentNode
                                            } else {
                                                attr_block = type_of.parentNode.parentNode.parentNode
                                            }
                                            var opt_text = ""
                                            var opt_size_text = ""
                                            if (type_of.parentNode != null) {
                                            	if(attr_block.getAttribute('data-zero') != undefined){
                                                	opt_text = attr_block.getAttribute('data-zero').toUpperCase();
                                            	}
                                                if(attr_block.getAttribute('data-size') != undefined){
                                                    opt_size_text = attr_block.getAttribute('data-size');
                                                }
                                            } else if(type_of.innerText != undefined){
                                                opt_text = type_of.innerText.toUpperCase();
                                            }

                                            if (opt_text != "" && opt_size_text != "" && productListObj[mainProductId][childProductId].option[1] != undefined && productListObj[mainProductId][childProductId].option[2] != undefined) {
                                                if (productListObj[mainProductId][childProductId].option[1].text.toUpperCase() == opt_text && productListObj[mainProductId][childProductId].option[2].text.toUpperCase() == opt_size_text.toUpperCase()) {
                                                    colordata(productColorArrayObj,productListObj,mainProductId,childProductId)
                                                }
                                            } else if (opt_text != "" && productListObj[mainProductId][childProductId].option[1] != undefined && opt_text != null) {
                                                if (productListObj[mainProductId][childProductId].option[1].text.toUpperCase() == opt_text) {
                                                    colordata(productColorArrayObj,productListObj,mainProductId,childProductId)
                                                }
                                            } else {
                                                colordata(productColorArrayObj,productListObj,mainProductId,childProductId)
                                            }
                                        } else {
                                            colordata(productColorArrayObj,productListObj,mainProductId,childProductId)
                                        }
                                    }
                                // }
                            }
                        }
                    }
                }
            }
            Object.keys(productColorArrayObj).forEach(function (colorText) {
                var colorObj = {}
                colorObj["text"] = colorText;
                colorObj["colorCode"] = productColorArrayObj[colorText]["colorCode"];
                colorObj["imgSrc"] = productColorArrayObj[colorText]["imgSrc"];
                colorObj["titleText"] = productColorArrayObj[colorText]["titleText"];
                colorObj["code"] = productColorArrayObj[colorText]["code"];
                colorObj["cpid"] = productColorArrayObj[colorText]["cpid"];
                colorObj["attLebel"] = productColorArrayObj[colorText]["attLebel"];
                colorObj["label"] = productColorArrayObj[colorText]["label"];
                colorObj["attrLength"] = productColorArrayObj[colorText]["attrLength"];
                colorObj["opttext"] = productColorArrayObj[colorText]["opttext"];
                colorObj["field1"] = productColorArrayObj[colorText]["field1"];
                colorObj["att_id"] = productColorArrayObj[colorText]["att_id"];
                colorObj["opt_id"] = productColorArrayObj[colorText]["opt_id"];
                colorObj["prc"] = productColorArrayObj[colorText]["prc"];
                productColorObjArray.push(colorObj);
            });
            if (type_of == "size") {
                productColorObj["sizeArray"] =  sortByKey(productColorObjArray, 'colorText');
            } else if (type_of == "zero") {
                productColorObj["att0Array"] =  sortByKey(productColorObjArray, 'colorText');
            } else if (type_of == "third") {
                productColorObj["att3Array"] =  sortByKey(productColorObjArray, 'colorText');
            } else {
                productColorObj["colorArray"] =  sortByKey(productColorObjArray, 'colorText');
            }
            return productColorObj;
        }
        function colordata(productColorArrayObj,productListObj,mainProductId,childProductId){
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]] = {};
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["0"]["titleText"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["0"]["colorCode"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["0"]["imgSrc"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["0"]["code"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["0"]["cpid"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["attLebel"] = productListObj[mainProductId][childProductId]["option"]["0"]["att_lebel"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["label"] = productListObj[mainProductId][childProductId]["option"]["0"]["label"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["attrLength"] = productListObj[mainProductId][childProductId]["option"]["0"]["attrLength"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["opttext"] = productListObj[mainProductId][childProductId]["option"]["0"]["opttext"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["field1"] = productListObj[mainProductId][childProductId]["option"]["0"]["field1"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["att_id"] = productListObj[mainProductId][childProductId]["option"]["0"]["att_id"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["opt_id"] = productListObj[mainProductId][childProductId]["option"]["0"]["opt_id"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["prc"] = productListObj[mainProductId][childProductId]["option"]["0"]["activePriceChild"];
            return productColorArrayObj
        }
        function getProductSizesObj(findObj, type_of) {
            var productSizeObj = {};
            var productListObj = INC.dataStore.dataStoreObj;
            var productSizesArrayObj = {};
            var productSizesObjArray = [];
            var attr_code = "";
            var c_pid = "";
            var prc = "";
            var label = "";
            var attid = "";
            if (Object.prototype.hasOwnProperty.call(findObj, "mainId")) {
                for (var mainProductId in productListObj) {
                    if (mainProductId == findObj["mainId"]) {
                        for (var childProductId in productListObj[mainProductId]) {
                            var attr_flag=""
                            if(productListObj[mainProductId][childProductId]["option"] != null && 
                            productListObj[mainProductId][childProductId]["option"]["2"] != undefined){
                                if (type_of != undefined) {
                                    var attr_block = null;
                                    if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == falseflag) {
                                        attr_block = type_of.parentNode.parentNode
                                    } else {
                                        attr_block = type_of.parentNode.parentNode
                                    }

                                    var opt_text = attr_block.getAttribute('data-zero');
                                    var opt_size_text = attr_block.getAttribute('data-color');

                                    if (opt_size_text == undefined) {
                                        opt_size_text = ""
                                    }
                                    if (opt_text == undefined) {
                                        opt_text = ""
                                    }
                                    if (opt_text != "" && productListObj[mainProductId][childProductId].option[1] != undefined) {
                                    	opt_text = opt_text.toUpperCase()
                                    	opt_size_text = opt_size_text.toUpperCase()
                                        if(opt_text != "" && opt_size_text != "" && productListObj[mainProductId][childProductId].option[0]){
                                            if(productListObj[mainProductId][childProductId].option[1].text.toUpperCase() == opt_text && productListObj[mainProductId][childProductId].option[0].text.toUpperCase() == opt_size_text){
                                                attr_flag = "fir_block"
                                            }
                                        }else{
                                            if (productListObj[mainProductId][childProductId].option[1].text.toUpperCase() == opt_text) {
                                                attr_flag = "sec_block"
                                                if (productListObj[mainProductId][childProductId]["option"] != null && productListObj[mainProductId][childProductId]["option"]["2"] != null) {
                                                    productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]] = {};
                                                    productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["2"]["text"];
                                                    attr_code = productListObj[mainProductId][childProductId]["option"]["2"]["code"];
                                                    c_pid = productListObj[mainProductId][childProductId]["option"]["2"]["cpid"];
                                                    prc = productListObj[mainProductId][childProductId]["option"]["2"]["activePriceChild"];
                                                    label = productListObj[mainProductId][childProductId]["option"]["2"]["label"];
                                                    attid = productListObj[mainProductId][childProductId]["option"]["2"]["att_id"];
                                                    productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]]["opt_id"] = productListObj[mainProductId][childProductId]["option"]["2"]["opt_id"];

                                                    productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["2"]["colorCode"];
                                                    productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["2"]["imgSrc"];
                                                }
                                            }
                                        }
                                    } else if (productListObj[mainProductId][childProductId]["option"] != null &&
                                        productListObj[mainProductId][childProductId]["option"]["2"] != null) {
                                            attr_flag = "empty_"
                                    }
                                } else if (productListObj[mainProductId][childProductId]["option"] != null && 
                                    productListObj[mainProductId][childProductId]["option"]["2"] != null) {
                                        attr_flag = "empty"
                                }
                                if(attr_flag == "fir_block" || attr_flag == "sec_block" || attr_flag == "empty" || attr_flag == "empty_"){
                                    if (productListObj[mainProductId][childProductId]["option"] != null &&
                                    productListObj[mainProductId][childProductId]["option"]["2"] != null) {
                                        productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]] = {};
                                        productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["2"]["text"];
                                        attr_code = productListObj[mainProductId][childProductId]["option"]["2"]["code"];
                                        c_pid = productListObj[mainProductId][childProductId]["option"]["2"]["cpid"];
                                        prc = productListObj[mainProductId][childProductId]["option"]["2"]["activePriceChild"];
                                        label = productListObj[mainProductId][childProductId]["option"]["2"]["label"];
                                        attid = productListObj[mainProductId][childProductId]["option"]["2"]["att_id"];
                                        productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]]["opt_id"] = productListObj[mainProductId][childProductId]["option"]["2"]["opt_id"];
                                        productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["2"]["colorCode"];
                                        productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["2"]["imgSrc"];
                                    }
                                }
                            }
                        }

                    }
                }
            }

            Object.keys(productSizesArrayObj).forEach(function (sizeText) {
                var sizeObj = {};
                sizeObj["text"] = productSizesArrayObj[sizeText]["titleText"];
                sizeObj["code"] = attr_code;
                sizeObj["cpid"] = c_pid;
                sizeObj["prc"] = prc;
                sizeObj["label"] = label;
                sizeObj["opt_id"] = productSizesArrayObj[sizeText]["opt_id"];
                sizeObj["colorCode"] = productSizesArrayObj[sizeText]["colorCode"];
                sizeObj["imgSrc"] = productSizesArrayObj[sizeText]["imgSrc"];
                sizeObj["att_id"] = attid;
                productSizesObjArray.push(sizeObj);
            });
            productSizeObj["sizeArray"] = productSizesObjArray
            return productSizeObj;
        }
        function getProductopt0Obj(findObj) {
            var product0Obj = {};
            var productListObj = INC.dataStore.dataStoreObj;
            var product0ArrayObj = {}
            var product0ObjArray = [];
            var sizesArray = ["S", "M", "L", "LL", "3L", "XL", "2XL", "XX", "XXL", "XXXL", "20cm", "20.5cm", "21cm", "21.5cm", "22cm", "22.5cm", "23cm", "23.5cm", "24cm", "24.5cm", "25cm", "25.5cm", "26cm", "26.5cm", "27cm", "27.5cm", "28cm", "28.5cm", "29cm", "29.5cm", "30cm", "30.5cm", "31cm", "31.5cm", "32cm", "32.5cm"];
            if (Object.prototype.hasOwnProperty.call(findObj, "mainId")) {
                for (var mainProductId in productListObj) {
                    if (mainProductId == findObj["mainId"]) {
                        for (var childProductId in productListObj[mainProductId]) {
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
                                if (attr_main == trueflag) {
                                    zerodata(product0ArrayObj, productListObj, mainProductId, childProductId)
                                } else {
                                    if (findObj.colorText != undefined) {
                                        if (productListObj[mainProductId][childProductId].option[0] != undefined){
                                            if (productListObj[mainProductId][childProductId].option["0"].text.toUpperCase().trim().toUpperCase() == findObj.colorText.trim().toUpperCase()) {
                                                zerodata(product0ArrayObj, productListObj, mainProductId, childProductId)
                                            } 
                                        } else {
                                            if (productListObj[mainProductId][childProductId].option["1"].text.trim().toLocaleLowerCase() == findObj.colorText.trim().toLocaleLowerCase()) {
                                                zerodata(product0ArrayObj, productListObj, mainProductId, childProductId)
                                            } 
                                        }
                                    } else {
                                        zerodata(product0ArrayObj, productListObj, mainProductId, childProductId)
                                    }
                                }
                            }
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
                attr0Obj["label"] = product0ArrayObj[colorText]["label"];
                attr0Obj["colorCode"] = product0ArrayObj[colorText]["colorCode"];
                attr0Obj["opt_id"] = product0ArrayObj[colorText]["opt_id"];
                attr0Obj["att_id"] = product0ArrayObj[colorText]["att_id"];
                product0ObjArray.push(attr0Obj);
            });
            product0Obj["att0Array"] = sortByKey(product0ObjArray, 'colorText');
            product0Obj["att0Array"] = product0ObjArray.sort(function(a, b) {
	            return sizesArray.indexOf(a["text"]) - sizesArray.indexOf(b["text"])
	        });
            return product0Obj;
        }

        function zerodata(product0ArrayObj, productListObj, mainProductId, childProductId) {
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]] = {};
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["1"]["titleText"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["1"]["code"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["1"]["cpid"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["prc"] = productListObj[mainProductId][childProductId]["option"]["1"]["activePriceChild"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["label"] = productListObj[mainProductId][childProductId]["option"]["1"]["label"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["1"]["colorCode"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["opt_id"] = productListObj[mainProductId][childProductId]["option"]["1"]["opt_id"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["att_id"] = productListObj[mainProductId][childProductId]["option"]["1"]["att_id"];
            return product0ArrayObj;
        }
        function getProductopt3Obj(findObj, type_of) {
            var product3Obj = {};
            var productListObj = INC.dataStore.dataStoreObj;
            var productColorArrayObj = {}
            var product3ObjArray = [];
            if (Object.prototype.hasOwnProperty.call(findObj, "mainId")) {
                for (var  mainProductId in productListObj) {
                    if (mainProductId == findObj["mainId"]) {
                        for (var  childProductId in productListObj[mainProductId]) {
                            if (productListObj[mainProductId][childProductId]["option"] != null &&
                                productListObj[mainProductId][childProductId]["option"] != undefined &&
                                productListObj[mainProductId][childProductId]["option"]["3"] != null &&
                                productListObj[mainProductId][childProductId]["option"]["3"] != undefined) {
                                if (type_of != undefined) {
                                    var attr_block = null;
                                    if(type_of.parentNode.parentNode != null){
                                        if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == falseflag) {
                                            attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                        } else {
                                            attr_block = type_of.parentNode.parentNode.parentNode
                                        }
                                    }else{
                                        attr_block = type_of.parentNode.parentNode
                                    }
                                    if(type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == trueflag){
                                        attr_block = type_of.parentNode.parentNode.parentNode
                                    }
                                    if(type_of.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == trueflag){
                                        attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                    }
                                    var opt_text = attr_block.getAttribute('data-zero');
                                    var opt_size_text = attr_block.getAttribute('data-size');
                                    var opt_color_text = attr_block.getAttribute('data-color');

                                    if (opt_size_text == undefined) {
                                        opt_size_text = ""
                                    }
                                    if (opt_color_text == undefined) {
                                        opt_color_text = ""
                                    }
                                    if (opt_text != "" && opt_size_text != "" && opt_color_text != "") {
                                        if (productListObj[mainProductId][childProductId].option[1] != undefined && productListObj[mainProductId][childProductId].option[2] != undefined && productListObj[mainProductId][childProductId].option[0] != undefined) {
                                            if (productListObj[mainProductId][childProductId].option[1].text.toUpperCase() == opt_text.toUpperCase() && productListObj[mainProductId][childProductId].option[2].text.toUpperCase() == opt_size_text.toUpperCase() && productListObj[mainProductId][childProductId].option[0].text.toUpperCase() == opt_color_text.toUpperCase()) {
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]] = {};
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["colorCode"] = "";
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["3"]["titleText"];

                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["3"]["imgSrc"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["3"]["code"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["3"]["cpid"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["prc"] = productListObj[mainProductId][childProductId]["option"]["3"]["activePriceChild"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["label"] = productListObj[mainProductId][childProductId]["option"]["3"]["label"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["opt_id"] = productListObj[mainProductId][childProductId]["option"]["3"]["opt_id"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["att_id"] = productListObj[mainProductId][childProductId]["option"]["3"]["att_id"];
                                            }
                                        }
                                    } else {
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]] = {};
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["colorCode"] = "";
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["3"]["titleText"];
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["3"]["imgSrc"];
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["3"]["code"];
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["3"]["cpid"];
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["prc"] = productListObj[mainProductId][childProductId]["option"]["3"]["activePriceChild"];
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["label"] = productListObj[mainProductId][childProductId]["option"]["3"]["label"];
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["opt_id"] = productListObj[mainProductId][childProductId]["option"]["3"]["opt_id"];
                                        productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["att_id"] = productListObj[mainProductId][childProductId]["option"]["3"]["att_id"];
                                    }
                                } else {
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]] = {};
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["colorCode"] = "";
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["3"]["titleText"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["3"]["imgSrc"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["3"]["code"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["3"]["cpid"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["prc"] = productListObj[mainProductId][childProductId]["option"]["3"]["activePriceChild"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["label"] = productListObj[mainProductId][childProductId]["option"]["3"]["label"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["opt_id"] = productListObj[mainProductId][childProductId]["option"]["3"]["opt_id"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["att_id"] = productListObj[mainProductId][childProductId]["option"]["3"]["att_id"];
                                }
                            }
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
                attr3Obj["label"] = productColorArrayObj[colorText]["label"];
                attr3Obj["opt_id"] = productColorArrayObj[colorText]["opt_id"];
                attr3Obj["att_id"] = productColorArrayObj[colorText]["att_id"];
                product3ObjArray.push(attr3Obj);
            });
            product3Obj["att3Array"] = product3ObjArray;
            return product3Obj;
        }
        function getProductByAtt(findObj,checksel) {
            var childProductObj = {};
            var mainProductListObj = ""
            var productListObj = INC.dataStore.dataStoreObj;
            if(findObj.mainId != undefined && productListObj != undefined){
                mainProductListObj = productListObj[findObj.mainId];
            }
            for (var  childProductId in mainProductListObj) {
                if (findObj.zeroText != "" && findObj.sizeText != "" && findObj.colorText != "" && findObj.thirdText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined && mainProductListObj[childProductId]["option"]["2"] != undefined && mainProductListObj[childProductId]["option"]["3"] != undefined) {
                    if (findObj.colorText.toUpperCase() == mainProductListObj[childProductId]["option"]["0"].text.toUpperCase() && findObj.zeroText.toUpperCase() == mainProductListObj[childProductId]["option"]["1"].text.toUpperCase() && findObj.sizeText == mainProductListObj[childProductId]["option"]["2"].text && findObj.thirdText.toUpperCase() == mainProductListObj[childProductId]["option"]["3"].text.toUpperCase()) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if (findObj.zeroText != "" && findObj.sizeText != "" && findObj.colorText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined && mainProductListObj[childProductId]["option"]["2"] != undefined) {
                    if (findObj.colorText.toUpperCase() == mainProductListObj[childProductId]["option"]["0"].text.toUpperCase() && findObj.zeroText.toUpperCase() == mainProductListObj[childProductId]["option"]["1"].text.toUpperCase() && findObj.sizeText.toUpperCase() == mainProductListObj[childProductId]["option"]["2"].text.toUpperCase()) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if (findObj.zeroText != "" && findObj.colorText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined) {
                    if (findObj.colorText.toUpperCase() == mainProductListObj[childProductId]["option"]["0"].text.toUpperCase() && findObj.zeroText.toUpperCase() == mainProductListObj[childProductId]["option"]["1"].text.toUpperCase()) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if (findObj.zeroText == "" && findObj.sizeText == "" && findObj.thirdText == "" && findObj.colorText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined) {
                    if (findObj.colorText.toUpperCase() == mainProductListObj[childProductId]["option"]["0"].text.toUpperCase()) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if (findObj.zeroText != "" && findObj.sizeText == "" && findObj.thirdText == "" && findObj.colorText == "" && mainProductListObj[childProductId]["option"]["1"] != undefined) {
                    if (findObj.zeroText.toUpperCase() == mainProductListObj[childProductId]["option"]["1"].text.toUpperCase()) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if ((mainProductListObj[childProductId]["option"] != null &&
                    mainProductListObj[childProductId]["option"] != undefined &&
                    mainProductListObj[childProductId]["option"]["0"] != null &&
                    mainProductListObj[childProductId]["option"]["0"] != undefined &&
                    (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text)) || mainProductListObj[childProductId]["option"] != null &&
                    mainProductListObj[childProductId]["option"] != undefined &&
                    mainProductListObj[childProductId]["option"]["1"] != null &&
                    mainProductListObj[childProductId]["option"]["1"] != undefined &&
                    (findObj.sizeText == mainProductListObj[childProductId]["option"]["1"].text) ) {
                    childProductObj = mainProductListObj[childProductId];
                    return childProductObj;

                }
            }
            if(Object.keys(childProductObj).length == 0){
                for (var  childProductId1 in mainProductListObj) {
                    if ((findObj.zeroText == "" && findObj.sizeText == "" && findObj.colorText == "" && findObj.thirdText == "") && (checksel == 2 || checksel == 0) && findObj.nainIddd == childProductId1) {
                        childProductObj = mainProductListObj[childProductId1];
                        return childProductObj;
                    }
                }
            }
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
        this.idAddtocart = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
        this.childsku = ((product != null) && (product != undefined)) ? product["ProductSku"] : "";
        this.name = ((product != null) && (product != undefined)) ? product["ProductName"] : "";
        this.url = product["ProductUrl"]
        this.imageURL = product["ImageURL"]
        this.regularPrice = product["Price"];
        if (product["SpecialPrice"] != null && product["SpecialPrice"] != product["Price"]) {
            if(parseFloat(product["SpecialPrice"]) >  parseFloat(product["Price"])){
                this.regularPrice = product["SpecialPrice"]
                this.activePrice = product["Price"]
            }else{
                this.activePrice = product["SpecialPrice"]
            }
        }else{
            this.activePrice = product["Price"]
        }
        
        if(product["OtherImageList"] != null && product["OtherImageList"] != undefined){
            this.otherImageList = product["OtherImageList"];
        }else{
            this.otherImageList = [];
        }
        if(product["Size"] != null && product["Size"] != undefined){
            this.size = product["Size"];
        }else{
            this.size = ""
        }
        this.option = {};
        this.mainId = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
        this.categoryName = ((product != null) && (product != undefined)) ? product["CategoryName"]: "";
        this.categoryId = ((product != null) && (product != undefined)) ? product["CategoryId"]: "";
        this.description = ((product != null) && (product != undefined)) ? product["Description"] : "";
        this.shortDescription = ((product != null) && (product != undefined)) ? product["ShortDescription"]: "";
        this.ratingsCount = ((product != null) && (product != undefined)) ? product["Field2"] : "";
        this.reviewsCount = ((product != null) && (product != undefined)) ? product["Field3"] : "";
        this.worthPrice = ((product != null) && (product != undefined)) ? product["Field4"] : "";

        if (product["PromotionalMessage"] != null) {
            this.PromotionalMessage = product["PromotionalMessage"];
        }else{
            this.PromotionalMessage = ""
        }
        if (product["ProductLevelDiscountMessage"] != null) {
            this.ProductLevelDiscountMessage = product["ProductLevelDiscountMessage"]
        }else{
            this.ProductLevelDiscountMessage =  ""
        }
        this.worthPrice = ((product != null) && (product != undefined)) ? product["Field4"] : "";
        this.worthPricee = ((product != null) && (product != undefined)) ? product["Field4"] : "";
        this.MemberPrices = ((product != null) && (product != undefined)) ? product["Field4"] : "";
        this.MakerName = ((product != null) && (product != undefined)) ? product["MakerName"] : "";
        this.MemberPrc = ((product != null) && (product != undefined)) ? product["Field4"] : "";
        this.manufacturer = ((product != null) && (product != undefined)) ? product["Manufacturer"] : "";
        this.skinType = ((product != null) && (product != undefined)) ? product["Field3"] : "";
        this.underTone = ((product != null) && (product != undefined)) ? product["Field4"] : "";
        this.GOODSNO = ((product != null) && (product != undefined)) ? product["Field1"] : "";
        this.finish = ((product != null) && (product != undefined)) ? product["Field5"] : "";
        this.coverage = ((product != null) && (product != undefined)) ? product["Field6"] : "";
        this.genericField =  ((product != null) && (product != undefined)) ? product["genericField"] : "";
        this.ProductType = ""
        if(product["ProductType"] != null && product["ProductType"] != undefined){
            this.ProductType = product["ProductType"]
        }
        this.regularPriceMain = product["Price"];
        if (product["SpecialPrice"] != null && product["SpecialPrice"] != product["Price"]) {
            
            if(parseFloat(product["SpecialPrice"]) >  parseFloat(product["Price"])){
                this.regularPriceMain = product["SpecialPrice"]
                this.activePriceMain = product["Price"]
            }else{
                this.activePriceMain = product["SpecialPrice"];
            }
        }else{
            this.activePriceMain = product["Price"];
        }
        if (product["ProductName"] != null) {
            this.nameMain = product["ProductName"];
        }else{
            this.nameMain = ""
        }
        if (product["ImageURL"] != null) {
            this.imageURLMain = product["ImageURL"];
        }else{
            this.imageURLMain = ""
        }
        this.urlMain = product["ProductUrl"]
    }
    INC.classes.ProductAttObj = function (product) {
        this.bundleId = "";
        this.id = ((product != null) && (product != undefined)) ? product["childProductId"] : "";
        this.sku = ((product != null) && (product != undefined)) ? product["childProductSku"] : "";
        this.mainsku = ((product != null) && (product != undefined)) ? product["mainSKU"] : "";
        this.idAddtocart = ((product != null) && (product != undefined)) ? product["childProductField1"] : "";
        this.GOODSNO = ((product != null) && (product != undefined)) ? product["childProductField1"] : "";
        this.mainProdVariant = ((product != null) && (product != undefined)) ? product["MainprodVariant"] : "";
        this.childsku = ((product != null) && (product != undefined)) ? product["childProductSku"] : "";
        if (product["childProductName"] != null) {
            this.name = product["childProductName"];
        }else{
            this.name = "";
        }
        this.url = product["childProductUrl"]
        this.imageURL = product["childProductImageUrl"].replace('pngg','png')
        this.regularPrice = ((product != null) && (product != undefined)) ? product["childProductPrice"] : "";
        if (product["childProductSpecialPrice"] != null && product["childProductSpecialPrice"] != product["childProductPrice"]) {
            if(parseFloat(product["childProductSpecialPrice"]) >  parseFloat(product["childProductPrice"])){
                this.regularPrice = product["childProductSpecialPrice"]
                this.activePrice = product["childProductPrice"]
            }else{
                this.activePrice = product["childProductSpecialPrice"];
            }
        }else{
            this.activePrice = product["childProductPrice"];
        }
        
        if (product["PromotionalMessage"] != null) {
            this.PromotionalMessage = product["PromotionalMessage"];
        }else{
            this.PromotionalMessage = ""
        }
        if (product["productLevelDiscountMessage"] != null) {
            this.ProductLevelDiscountMessage = product["productLevelDiscountMessage"]
        }else{
            this.ProductLevelDiscountMessage =  ""
        }
        this.otherImageList = ((product != null) && (product != undefined)) ? product["childProductOtherImageUrl"] : [];

        this.size = "";
        this.option = {};
        if (((product != null) && (product != undefined))) {
            this.option[product["optionId"]] = {};
            this.option[product["optionId"]].text = product["optionText"];
            this.option[product["optionId"]].titleText = (product["childProductField2"] != null) ? product["childProductField2"] : "";
            this.option[product["optionId"]].imgSrc = (product["optionImageUrl"] != null) ? product["optionImageUrl"] : "";
            this.option[product["optionId"]].colorCode = (product["colorCode"] != null) ? product["colorCode"] : "";
            this.option[product["optionId"]].cpid = (product["childProductId"] != null) ? product["childProductId"] : "";
            this.option[product["optionId"]].opt_id = (product["optionId"] != null) ? product["optionId"] : "";
            this.option[product["optionId"]].opttext = product["optionText1"];
            this.option[product["optionId"]].att_lebel = product.att_lebel;
            this.option[product["optionId"]].field1 = product.childProductField1;
            this.option[product["optionId"]].attrLength = product.attrLength;
            this.option[product["optionId"]].activePriceChild = product.attrLength;
            if (product["childProductSpecialPrice"] != null && product["childProductSpecialPrice"] != product["childProductPrice"]) {
                if(parseFloat(product["childProductSpecialPrice"]) >  parseFloat(product["childProductPrice"])){
                    this.option[product["optionId"]].activePriceChild = product["childProductSpecialPrice"]
                    this.option[product["optionId"]].activePriceChild = product["childProductPrice"]
                }else{
                    this.option[product["optionId"]].activePriceChild = product["childProductSpecialPrice"];
                }
            }else{
                this.option[product["optionId"]].activePriceChild = product["childProductPrice"];
            }
            
        }
        this.categoryName = ((product != null) && (product != undefined)) ? product["childCategoryName"]: "";
        this.categoryId = ((product != null) && (product != undefined)) ? product["childCategoryId"]: "";
        this.description = ((product != null) && (product != undefined)) ? product["childProductDescription"] : "";
        if (product["ShortDescription"] != null) {
            this.shortDescription = product["ShortDescription"]
        }else if (product["Field1"] != null) {
            this.shortDescription = product["Field1"]
        }else{
            this.shortDescription =  ""
        }
        this.manufacturer = ((product != null) && (product != undefined)) ? product["Manufacturer"] : "";
        this.ratingsCount = ((product != null) && (product != undefined)) ? product["childProductField2"] : "";
        this.reviewsCount = ((product != null) && (product != undefined)) ? product["childProductField3"] : "";
         this.MemberPrices = ((product != null) && (product != undefined)) ? product["childProductField4"] : "";
        this.MemberPrc = ((product != null) && (product != undefined)) ? product["childProductField4"] : "";
        this.worthPrice = ((product != null) && (product != undefined)) ? product["MemberPrices"] : "";
        this.worthPricee = ((product != null) && (product != undefined)) ? product["MemberPrc"] : "";
        this.skinType = ((product != null) && (product != undefined)) ? product["childProductField3"] : "";
        this.underTone = ((product != null) && (product != undefined)) ? product["childProductField4"] : "";
        this.finish = ((product != null) && (product != undefined)) ? product["childProductField5"] : "";
        this.coverage = ((product != null) && (product != undefined)) ? product["childProductField6"] : "";
        this.ProductType = ((product != null) && (product != undefined)) ? product["ProductType"] : "";
        this.regularPriceMain = product["childProductPriceMain"];
        this.activePriceMain = product["childProductPriceMain"];
        if (product["childProductSpecialPriceMain"] != null && product["childProductSpecialPriceMain"] != product["childProductPriceMain"]) {
            if(parseFloat(product["childProductSpecialPriceMain"]) >  parseFloat(product["childProductPriceMain"])){
                this.regularPriceMain = product["childProductSpecialPriceMain"]
                this.activePriceMain = product["childProductPrice"]
            }else{
                this.activePriceMain = product["childProductSpecialPriceMain"];
            }
        }
        this.nameMain = ""
        if (product["childProductNameMain"] != null) {
            this.nameMain = product["childProductNameMain"];
        }
        this.imageURLMain = ""
        if (product["childProductImageUrlMain"] != null) {
            this.imageURLMain = product["childProductImageUrlMain"];
        }
        this.genericField =  ((product != null) && (product != undefined)) ? product["genericField"] : "";
        this.MakerName = ((product != null) && (product != undefined)) ? product["MakerName"] : "";
        this.urlMain = product["childProductUrlMain"]
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

    INC.methods = {};
    INC.methods.networkReq = function (nwConfigObj, cb) {
        var nwConfigObject = new INC.classes.NWConfig(nwConfigObj);
        var xhr = new XMLHttpRequest();
        xhr.open(nwConfigObject.method, nwConfigObject.url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (xhr.response != "") {
                    cb(xhr.response);
                }
            }
        }
        xhr.send(JSON.stringify(nwConfigObject.params));
    }

    INC.methods.irbReq = function (productId, bundleCount, elementName) {
        var elmname = elementName || "";
        var productIdReq = productId;
        var apiKey = INC.config.clientToken;
        var bundleReqCount = bundleCount || 5;
        var irbReqParams = ""
        var irbPATH = "//jprapidload.increasingly.co/increasingly_bundles?irb/";
        irbReqParams = "product_ids=" + productIdReq +  "&category_id=" +  "&api_key=" + apiKey +  "&page_type=" + elmname +  "&fr=" + "1" + "&client_visitor_id=" + INC.config.ivid;
        if (INC.config.pageType != "pdp" && INC.config.pageType != "cartPage") {
            irbReqParams = irbReqParams + "&is_tc=" + "1" + "&no_of_bundles=" + bundleReqCount
        }
        var irbReqURL = decodeURI(irbPATH + btoa(irbReqParams));
        var networkConfigObj = new INC.classes.NWConfig();
        networkConfigObj["url"] = irbReqURL;
        return this.refreshBundles(networkConfigObj);
    }

    INC.methods.refreshBundles = function (nwConfigObj) {
        var incDataStore = INC.dataStore;
        INC.methods.networkReq(nwConfigObj, function (response) {
            if (response.length == 0){
                return;
            }
            var responseJSON = ""
            if (typeof (response) != "object") {
                responseJSON = JSON.parse(response);
            } else {
                responseJSON = response;
            }
            var bundleResponse = responseJSON;
            
            if (Object.prototype.hasOwnProperty.call(responseJSON, "Bundles") && (responseJSON.Bundles != null)) {
                INC.config.recommendation = false;
                responseJSON.timeStamp = Date.now();
                INC.dataStore.methods().buildDataStoreObj(bundleResponse);
                if ((incDataStore.dataStoreObj == null) || (incDataStore.dataStoreObj == undefined)) {
                    return;
                }
                if(INC.config.pageType == "pdp") {
                    INC.methods.createPDPBlock();
                }
            }
        });
    }
    
    INC.methods.get_product_ratings = function (filed3, field2, rating_containers) {
        var count = document.createElement('span');
        count.classList.add('rating_count')
        rating_containers.appendChild(count);
        var avg = document.createElement('span');
        avg.classList.add('rating_avg')
        if (field2 == undefined) {
            count.textContent = "(0)";
        } else {
            count.textContent = "(" + field2 + ")";
            
        }
        var stars = document.createElement('span');
        if (filed3 != undefined && filed3 != "") {
            var rating = filed3;
            if (rating == "" || rating == undefined || rating == "NaN" || rating == "norating") {
                rating = 0
            }
            rating = parseFloat(rating).toFixed(1)
            rating = rating.toString();
            var rating_m = null;
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
            stars.classList.add('rating_stars');
            rating_containers.appendChild(stars);
        } else {
            stars.innerText = "."
            stars.style.color = "#fff"
            stars.classList.add('rating_stars');
            stars.classList.add('noratings');
            rating_containers.appendChild(stars);
        }
    }
    INC.methods.getProductIdFromWebPage = function () {
        var product_id = ""
        if (document.querySelector('.product-number span') != null) {
            product_id = document.querySelector('.product-number span').getAttribute('data-masterid')
        } else if (dataLayerGDOall != null) {
            var dtLyr = dataLayerGDOall
            for(var l1=0;l1<dtLyr.length;l1++){
                if (dtLyr[l1].ecommerce != null){
                    product_id = dtLyr[l1].ecommerce.detail.products[0].id
                }
            }
        }
        INC.config.Product_id = product_id
        return product_id;
    }

    INC.methods.detectPageType = function() {
        if (document.querySelector('#str_contents #form2cart') != null) {
            return "pdp";
        } 
        if (document.querySelector('.main-content #form2cart') != null){
            return "pdp";
        }
        
    }
    INC.methods.showSidebar = function () {
        var sidebarel=document.querySelector('.inc_sidebar_modal_block')
        if (sidebarel != null) {
            if (document.querySelector('.inc_sidebar_modal_block .inc_product_module_block') != null) {
                var addedprdte = document.querySelector('.inc_cart_added_product_desc_title_text')
                if (addedprdte != null && addedprdte.innerText == "undefined"){
                    return;
                }
                var sidebarouter=document.querySelector('.sidebar_outer')
                if (sidebarouter != null) {
                    document.querySelector("html").classList.add("inc_overlay");
                    var elSidebarOverlay = document.querySelector(".inc_sidebar_overlay_block");
                    if(elSidebarOverlay != null){
                        elSidebarOverlay.style.display = "block";
                    }
                    sidebarouter.style.display = "block"
                    sidebarel.style.display = "block"
                    sidebarel.classList.add('active')
                    sidebarouter.classList.add('sidebar_outer_active')
                }
            }
        }
        if (document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block') != null) {
            document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block').classList.remove('inc_loading');
        }
    }
    INC.methods.hideSidebar = function () {
        var sidebarelhide=document.querySelector('.inc_sidebar_modal_block')
        INC.config.sidebarremovedprod=[]
        INC.bundles = true;
        document.querySelector('html').style='';
        document.querySelector('html').classList.remove('inc_overlay')
        document.querySelector('body').classList.remove('inc_popup_open');
        var sidebarouterH=document.querySelector('.sidebar_outer')
        if (sidebarouterH != null) {
            document.querySelector(".inc_sidebar_overlay_block").style.display = "none"
            sidebarelhide.style.display = "none"
            sidebarouterH.style.display = "none"
            sidebarouterH.classList.remove('sidebar_outer_active')
            sidebarelhide.classList.remove('active')
        }
        if(INC.config.pageType == "pdp"){
            if(document.querySelector('.inc_pdp_block') != null){
                var rempdpel = document.querySelector('.inc_pdp_block')
                if(rempdpel != null){
                    rempdpel.parentNode.removeChild(rempdpel)
                }
                onloadpdp = false;
                onloadpdp_delete = false;       
                INC.dataStore["bundleCartProducts"] = {};
                INC.config.pdpaddedProductList = [];
                INC.config.bundle_tracking = [];
                INC.config.bundle_skuPushed = [];
                INC.config.dupBasket = [];
                INC.config.pdpaddedProductList= [];
                INC.config.sidebarremovedprod= [];
                INC.config.pdpaddedProductList = [];
                INC.config.catFlag = [];
                INC.methods.createPDPBlock("hidesidebar")
            }
        }else{
            INC.methods.clear()
        }
        Array.prototype.forEach.call(document.querySelectorAll(".inc_sidebar_overlay_block"), function (elm) {
            elm.parentNode.removeChild(elm);
        });
        setTimeout(function() {
            if (document.querySelector(".inc_cart_added_product_desc_subtotal_price_block") != null) {
                document.querySelector(".inc_cart_added_product_desc_subtotal_price_block").classList.remove("is_special_price");
            }
        }, 30);
        // setTimeout(function(){
        //     var allchecked = document.querySelectorAll('.inc_pdp_bundle_product_list_main_block .inc_product_showcase_block .inc_product_desc_add_img.checked')
        //     var coch=0
        //     for (var alcheckp in allchecked) {
        //         if(allchecked[alcheckp] != undefined && coch != 0 && coch != 1  && Object.prototype.hasOwnProperty.call(allchecked, alcheckp)){
        //             coch++
        //             allchecked[alcheckp].click()
        //         }
        //     }
        //     INC.config.pdpaddedProductList = Object.keys(INC.dataStore.bundleCartProducts)
           
        //     if(document.querySelector('.inc_cart_added_product_desc_subtotal_price_block')!=null){
        //         document.querySelector('.inc_cart_added_product_desc_subtotal_price_block').classList.remove('is_special_price');
        //     } 
        // },30)
    }
    INC.methods.createAMBlock = function (PDP_type) {
        if (INC.dataStore.dataStoreObj.undefined == undefined) {
            document.querySelector('html').classList.add('inc-prevent-hor-scroll');
            var amBlock = generate_html_tag('div','inc_af_block')
            amBlock.classList.add('af_cart_page')
            amBlock.innerHTML = cart_html
            amBlock.querySelector(".inc_af_product-list_block").innerHTML = "";
            var elAmTitleText = amBlock.querySelector(".inc_af_title_text_block")
            var elAmTitleText1 = amBlock.querySelector(".inc_af_title_text_block1")
            var amProductListBlock = amBlock.querySelector(".inc_af_product-list_block");
            var bundleProductsArray = INC.dataStore.bundleProductsArray;
            if (INC.config.pageType == "pdp") {
                if (INC.dataStore.bundleProductsArray.indexOf(INC.config.Product_id) == -1) {
                    INC.dataStore.bundleProductsArray.push(INC.config.Product_id)
                }
                INC.config.cartproductids = []
            }
            var duplamid = []
            if (PDP_type == "PDP") {
                bundleProductsArray = INC.config.recommendationProduct
                bundleProductsArray.forEach(function (mainProductId) {
                    if(duplamid.indexOf(mainProductId) == -1){
                        duplamid.push(mainProductId)
                        var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: mainProductId });
                        var prd_modulerec = INC.methods.createProductModuleBlock(firstProductObjByMainId.id, "am", false, amBlock);
                        if (prd_modulerec.getAttribute('data-id') != "undefined") {
                            amProductListBlock.appendChild(prd_modulerec);
                        }
                        elAmTitleText.innerText = "Best Selling Similar Products";
                    }
                });
            } else {
                if (bundleProductsArray.length > 0){
                    bundleProductsArray.forEach(function (mainProductId) {
                        if(duplamid.indexOf(mainProductId) == -1){
                            duplamid.push(mainProductId)
                            if (INC.config.cartproductids.indexOf(mainProductId) == -1) {
                                var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: mainProductId });
                                var prd_module = INC.methods.createProductModuleBlock(firstProductObjByMainId.id, "am", false, amBlock);
                                if (prd_module.getAttribute('data-id') != "undefined") {
                                    elAmTitleText.innerText = "Other customers also viewed";
                                    amProductListBlock.appendChild(prd_module);
                                    elAmTitleText.innerText = INC.config.BeforeYouChecktext ;
                                }
                            }
                        }
                    });
                }
            }
            elAmTitleText1.innerText = "他のお客様も買ったアイテム"
            
            var prod_sl_c = 1
            if (amBlock != null) {
                Array.prototype.forEach.call(document.querySelectorAll('.inc_af_block'), function (el) {
                    el.parentNode.removeChild(el);
                });
            }
            if(amBlock.querySelector('.inc_af_block .inc_product_showcase_block') == null){
                return;
            }
            
            if (PDP_type == "PDP") {
                var coltyperec=false;
                var pdpBlockSibling = document.querySelector('.product.info')
                var pdpplacement = document.querySelector('.product.media')
                if(document.querySelector('#shop-collection') != null){
                    coltyperec = true
                }else{
                    if(pdpplacement != null){
                        var pdpelplc=pdpplacement.nextElementSibling
                        pdpelplc.parentNode.insertBefore(amBlock,pdpelplc)
                    }else {
                        coltyperec = true
                    }
                }
                if(coltyperec == trueflag){
                    if(pdpBlockSibling != null){
                        pdpBlockSibling.parentNode.insertBefore(amBlock,pdpBlockSibling)
                    }
                }
            }else{
                if (bundleProductsArray.length > 0){
                    var CartPos= document.querySelector('#Foot')
                    if(CartPos != null){
                        var carnext=CartPos
                        carnext.parentNode.insertBefore(amBlock,carnext)
                    }
                }
            }
            amBlock.querySelector('.inc_af_right_btn_block').style.visibility = "hidden";
            amBlock.querySelector('.inc_af_right_btn_img').style.visibility = "hidden";
            amBlock.querySelector('.inc_af_left_btn_block').style.visibility = "hidden";
            amBlock.querySelector('.inc_af_left_btn_img').style.visibility = "hidden";
            
            var productBlocks = amProductListBlock.querySelectorAll('.inc_product_module_block');
            if (productBlocks.length < 4){
                amBlock.querySelector(".inc_af_product-list_block").classList.add('flexStart')
            }
            var sliderBtnCounter = 0;
            if (productBlocks.length > prod_sl_c) {
                amBlock.querySelector('.inc_af_right_btn_block').style.visibility = "visible";
                amBlock.querySelector('.inc_af_left_btn_block').style.visibility = "visible";
                amBlock.querySelector('.inc_af_left_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                amBlock.querySelector('.inc_af_right_btn_img').style.visibility = "visible";
                amBlock.querySelector('.inc_af_left_btn_img').style.visibility = "visible";
                amBlock.querySelector('.inc_af_left_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
            }
            var cc_ount = 1;
            if (window.innerWidth > 768) {
                cc_ount = 4
            }
            if (productBlocks.length <= cc_ount) {
                amBlock.querySelector('.inc_af_right_btn_block').style.visibility = "hidden";
                amBlock.querySelector('.inc_af_right_btn_img').style.visibility = "hidden";
                amBlock.querySelector('.inc_af_left_btn_block').style.visibility = "hidden";
                amBlock.querySelector('.inc_af_left_btn_img').style.visibility = "hidden";
            }
            amBlock.querySelector('.inc_af_right_btn_block').addEventListener("click", function () {
                sliderBtnCounter++;
                if (sliderBtnCounter > productBlocks.length - 1) {
                    sliderBtnCounter--;
                }
                var all_p_length = document.querySelectorAll('.inc_af_product-list_block .inc_product_module_block').length
                var cc_ounts = 1;
                if (window.innerWidth > 768) {
                    cc_ounts = 4
                }
                var width_slide = ""
                if (INC.config.pageType == "pdp" || INC.config.pageType == "productList") {
                    width_slide = 240;
                } else {
                    width_slide = 250
                }
                if (+INC.clientConfig.slidevalue + +cc_ounts < all_p_length) {
                    amBlock.parentNode.parentNode.querySelector('.inc_af_left_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                    amBlock.parentNode.parentNode.querySelector('.inc_af_left_btn_img').setAttribute("style", "pointer-events: auto;opacity:1");
                    INC.clientConfig.slidevalue++
                    INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) - width_slide) + 'px';
                    var menu = amBlock.parentNode.parentNode.querySelector('.inc_af_product-list_block');
                    menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                    if (document.querySelector('.inc_af_product-list-dots-main_block .inc_dots.active') != null) {
                        document.querySelector('.inc_af_product-list-dots-main_block .inc_dots.active').classList.remove('active')
                    }
                    if (document.querySelectorAll('.inc_af_product-list-dots-main_block .inc_dots')[+INC.clientConfig.slidevalue] != null) {
                        document.querySelectorAll('.inc_af_product-list-dots-main_block .inc_dots')[+INC.clientConfig.slidevalue].classList.add('active')
                    }
                }

                if (+INC.clientConfig.slidevalue + +cc_ounts == all_p_length) {
                    amBlock.parentNode.parentNode.querySelector('.inc_af_right_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                    amBlock.parentNode.parentNode.querySelector('.inc_af_right_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
                }
            });

            amBlock.querySelector('.inc_af_left_btn_block').addEventListener("click", function () {
                sliderBtnCounter--;
                if (sliderBtnCounter == -1) {
                    sliderBtnCounter = 0;
                }
                if (INC.clientConfig.slidevalue == -1){
                    INC.clientConfig.slidevalue = 0;
                }
                var width_slide = ""
                if (INC.config.pageType == "pdp" || INC.config.pageType == "productList") {
                    width_slide = 240;
                } else {
                    width_slide = 250
                }
                if (INC.clientConfig.slidevalue > 0) {
                    amBlock.parentNode.parentNode.querySelector('.inc_af_right_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                    amBlock.parentNode.parentNode.querySelector('.inc_af_right_btn_img').setAttribute("style", "pointer-events: auto;opacity:1");
                    INC.clientConfig.slidevalue--
                    INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) + width_slide) + 'px';
                    var menu = amBlock.parentNode.parentNode.querySelector('.inc_af_product-list_block');
                    menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                    if (document.querySelector('.inc_af_product-list-dots-main_block .inc_dots.active') != null) {
                        document.querySelector('.inc_af_product-list-dots-main_block .inc_dots.active').classList.remove('active')
                    }
                    if (document.querySelectorAll('.inc_af_product-list-dots-main_block .inc_dots')[+INC.clientConfig.slidevalue] != null) {
                        document.querySelectorAll('.inc_af_product-list-dots-main_block .inc_dots')[+INC.clientConfig.slidevalue].classList.add('active')
                    }
                }
                if (INC.clientConfig.slidevalue == 0) {
                    amBlock.parentNode.parentNode.querySelector('.inc_af_left_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                    amBlock.parentNode.parentNode.querySelector('.inc_af_left_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
                }
            });
            setTimeout(function(){
                var all_list_el = document.querySelectorAll('.inc_af_product-list_block .inc_product_showcase_block')
                for (var all_list in all_list_el) {
                    if(Object.prototype.hasOwnProperty.call(all_list_el, all_list)){
                        var prd_moduleb = all_list_el[all_list].parentNode
                        var main_idsd = ""
                        if(prd_moduleb != null){
                            main_idsd = prd_moduleb.getAttribute('data-main_id')
                        }
                        if(all_list_el[all_list].querySelector('.inc_product_desc_att_zero_block.active') != null){
                            if(prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="'+main_idsd+'"]') != null){
                                if(prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="'+main_idsd+'"] .inc_product_desc_att_size_list_item_img_block') != null){
                                    prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="'+main_idsd+'"] .inc_product_desc_att_size_list_item_img_block').click()
                                }else if(all_list_el[all_list].querySelector('.inc_product_desc_att_size_list_item_img_block') != null){
                                    all_list_el[all_list].querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                                }
                            } 
                        }else if(all_list_el[all_list].querySelector('.inc_product_desc_att_color_block.active') != null){
                            if(prd_moduleb.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="'+main_idsd+'"]') != null){
                                if(prd_moduleb.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="'+main_idsd+'"] .inc_product_desc_att_color_list_item_img_block') != null){
                                    prd_moduleb.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="'+main_idsd+'"] .inc_product_desc_att_color_list_item_img_block').click()
                                }
                            } else if(all_list_el[all_list].querySelector('.inc_product_desc_att_color_list_item_img_block') != null){
                                all_list_el[all_list].querySelector('.inc_product_desc_att_color_list_item_img_block').click()
                            }
                        } else if(all_list_el[all_list].querySelector('.inc_product_desc_att_size_list_item_img_block') != null){
                            all_list_el[all_list].querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                        }
                    }
                }
                onloadpdp = true
            },400)
            setTimeout(function(){
                var inc_prod_img =  document.querySelectorAll('.inc_product_img_main_img img')
                for (var i_prd_image in inc_prod_img) {
                    if(inc_prod_img[i_prd_image] != null && Object.prototype.hasOwnProperty.call(inc_prod_img, i_prd_image)){
                        inc_prod_img[i_prd_image].setAttribute('style',INC.config.styleft)
                    }
                }
            },2000)
        }

        if(document.querySelector('.inc_af_block') != null){
            if (INC.config.pageType == "cartPage") {
                document.querySelector('.inc_af_block').classList.add('af_cart_page')
            } else if (INC.config.pageType == "pdp") {
                document.querySelector('.inc_af_block').classList.add('inc_recommendations')
            }
        }
    }
    function scrollincelmtoview(element) {
        var topOfElement = element.offsetTop - 130
        window.scroll({ top: topOfElement, behavior: "smooth" });
    }
    INC.methods.createPDPBlock = function (sidebar) {
        document.querySelector('body').classList.add('inc_bundles');
        document.querySelector('html').classList.add('inc-prevent-hor-scroll');
        if (document.querySelector('.aio-widget-frame.acquire_w_ui_status_max') != null) {
            document.querySelector('.aio-widget-frame.acquire_w_ui_status_max').classList.add('acquire_w_ui_status_min')
            document.querySelector('.aio-widget-frame.acquire_w_ui_status_max').classList.remove('acquire_w_ui_status_max')
        }
        var empty_sidebarflag = false
        if (INC.dataStore.dataStoreObj[INC.config.Product_id] != undefined) {
            if (INC.dataStore.dataStoreObj[INC.config.Product_id][INC.config.Product_id] != undefined) {
                if (INC.dataStore.dataStoreObj[INC.config.Product_id][INC.config.Product_id].bundleId == "12345679") {
                    empty_sidebarflag = true
                }
            }
        }
        if(INC.bundles == falseflag && sidebar != 'sidebar' && sidebar != 'hidesidebar'){
            return;
        }
        
        if (sidebar != "sidebar") {
            if (INC.dataStore.dataStoreObj.undefined != undefined || empty_sidebarflag == falseflag) {
                var pdpBlock = generate_html_tag('div','inc_pdp_block')
                pdpBlock.innerHTML = pdp_html
                pdpBlock.setAttribute('style', 'clear: both;')
                var modalTitle = pdpBlock.querySelector('.inc_pdp_title_text');
                modalTitle.innerHTML = '<h2>よく一緒に買われている商品をまとめて購入</h2>'
                
                var pdpProductId = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: INC.dataStore.pdpProductId }).id;
                var firstProductObjByMainId = ''
                var pdpBundleProductListMainBlock = null;
                var mainProductBlock = this.createProductModuleBlock(pdpProductId, "pdp", false, pdpBlock,"mainprod");
                var bundleProductsArray = INC.dataStore.bundleProductsArray;
                var elPdpMainProductBlock = pdpBlock.querySelector('.inc_pdp_product-main_block');
                var mainprodtitletexts = elPdpMainProductBlock.querySelector('.mainprodtitletext');
                if(mainprodtitletexts != undefined){
                    mainprodtitletexts.innerText = "対象アイテム:"
                }
                // elPdpMainProductBlock.appendChild(mainProductBlock);
                pdpBundleProductListMainBlock = pdpBlock.querySelector('.inc_pdp_bundle_product_list_main_block');
                pdpBundleProductListMainBlock.innerHTML = "";
                pdpBundleProductListMainBlock.appendChild(mainProductBlock);
                var pdpBundleProductListItemsBlock = pdpBlock.querySelector('.inc_pdp_bundle_product_list_items_block');
                pdpBundleProductListItemsBlock.innerHTML = "";
                var productVisibleCount = (bundleProductsArray.length > 6) ? 6 : bundleProductsArray.length;
                for (var i = 0; i < productVisibleCount; i++) {
                    firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: bundleProductsArray[i] });
                    var productBlock = this.createProductModuleBlock(firstProductObjByMainId.id, "pdp", true, pdpBlock);
                    pdpBundleProductListMainBlock.appendChild(productBlock);
                    var productListItemBlock = this.createProductListItemBlock(firstProductObjByMainId, "pdp");
                    pdpBundleProductListItemsBlock.appendChild(productListItemBlock);
                }
                
                var header = pdpBlock.querySelector('.inc_pdp_bundle_product_header_text');
                if (header != null) {
                    header.innerText = "Frequently Bought with"
                    header.style.textTransform = "none"
                }
                
                var mainprodimgsrc=pdpBlock.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_img_main_img img').getAttribute('data-src')
                var secbundleimgsrc=pdpBlock.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_img_main_img img').getAttribute('data-src')
                var inc_bundle_avail_block = generate_html_tag('div','inc_bundle_avail_block')
                var toplevelbundleblock = "<div class='inc_bundle_avail_img first'><img src='"+mainprodimgsrc+"'></div><span></span> <div class='inc_bundle_avail_img second'><img src='"+secbundleimgsrc+"'></div><div class='inc_bundle_avail_btn'>BUNDLE AVAILABLE</div>"
                inc_bundle_avail_block.innerHTML = toplevelbundleblock
                inc_bundle_avail_block.querySelector('.inc_bundle_avail_btn').addEventListener('click',function(){
                    var pdpelm = document.querySelector('.inc_pdp_block')
                    if(pdpelm != null){
                        scrollincelmtoview(pdpelm)
                    }
                })
                var pdpbundleel = document.querySelector('.product-options-wrapper')
                if(pdpbundleel == null && document.querySelector('.product-add-form') != null){
                    pdpbundleel = document.querySelector('.product-add-form')
                }
                if(window.innerWidth < 821){
                    pdpbundleel = document.querySelector('.product-add-form')
                }
                INC.methods.clear();
                if(pdpbundleel != null){
                    if(document.querySelector('.inc_bundle_avail_block') == null){
                        pdpbundleel.parentNode.insertBefore(inc_bundle_avail_block,pdpbundleel)
                    }
                }
                pdpBlock.querySelector('.inc_pdp_bundle_product_list_items_block').classList.add("active");
                var pdpBundleCartBlock = this.createPDPBundleCartBlock(pdpBlock);
                var rpdpBundleCartBlock = pdpBlock.querySelector('.inc_pdp_bundle_cart_block')
                rpdpBundleCartBlock.parentNode.removeChild(rpdpBundleCartBlock);
                pdpBlock.querySelector('.inc_pdp_bundle_block').appendChild(pdpBundleCartBlock);
                if(document.querySelector('#dspbtnCrt') != null){
                    if(document.querySelector('#dspbtnCrt').style.display == "none"){
                        pdpBlock.style.display="none"
                    }
                }
                if(document.querySelector('#dspbtnCrt_g') != null){
                    if(document.querySelector('#dspbtnCrt_g').style.display == "inline"){
                        pdpBlock.style.display="block"
                    }
                }
                var fabricavail=false
                var client_var = ""
                if(document.querySelector('.wrapDetailImage .variationImage li.checked') != null){
                    client_var = document.querySelector('.wrapDetailImage .variationImage li.checked').innerText.trim().toLocaleLowerCase()
                }
                if(document.querySelector('.page-product-bundle .fieldset-bundle-options .option .option:checked') != null){
                    var elmfabric = document.querySelector('.page-product-bundle .fieldset-bundle-options .option .option:checked+.label').parentNode
                    client_var = elmfabric.innerText.trim().toLocaleLowerCase()
                    if(elmfabric.querySelector('input') != null){
                        client_var = elmfabric.querySelector('input').value
                        fabricavail = true
                    }
                }
                if (document.querySelector('.product-options-wrapper select') != null) {
                    var selvar_ = document.querySelector('.product-options-wrapper select');
                    client_var = selvar_.options[selvar_.selectedIndex].innerText.trim().toLocaleLowerCase();
                }
                var inc_link_tag = generate_html_tag('a')
                var inc_goes_img_tag = generate_html_tag('img')
                if(document.querySelector('.product-add-form .swatch-option') != null && client_var == ""){
                    if(document.querySelector('.product-add-form .swatch-option').getAttribute('data-option-label') != null){
                        client_var = document.querySelector('.product-add-form .swatch-option').getAttribute('data-option-label').trim().toLocaleLowerCase()
                    }else if(document.querySelector('.page-product-bundle .fieldset-bundle-options .option .option+.label') != null){
                        client_var = document.querySelector('.page-product-bundle .fieldset-bundle-options .option .option+.label').parentNode.innerText.trim().toLocaleLowerCase()
                    }
                }
                
                
                
                var elProductAddBlock = pdpBlock.querySelectorAll('.inc_product_desc_add_block')
                var productBlocks = pdpBlock.querySelector('.inc_pdp_bundle_product_list_block').querySelectorAll('.inc_product_module_block');
                if (pdpBlock.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_desc_title_text_header') != null) {
                    pdpBlock.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_desc_title_text_header').innerHTML = "Selected Product"
                    pdpBlock.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_desc_title_text_header').style.textTransform = "none"
                }
                pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute("style", "opacity:0.5");
                pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('title', 'Scroll left')
                pdpBlock.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('title', 'Scroll right')
                var sliderBtnCounter = 0;
                var lengthCount = productBlocks.length + 1;
                var prd_length = 1
                if (window.innerWidth > 819) {
                    prd_length = 4
                }
                if (productBlocks.length > prd_length) {
                    pdpBlock.querySelector('.inc_pdp_bundle_product_right-btn_block').addEventListener("click", function () {
                        var prod_c = 1;
                        var width_prod = 215;
                        if (window.innerWidth > 819) {
                            prod_c = 4
                            width_prod = 173;
                        }
                        
                        if (INC.clientConfig.slidevalue + prod_c < productBlocks.length) {
                            pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                            pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute("style", "opacity:1");
                            INC.clientConfig.slidevalue++
                            INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) - width_prod) + 'px';
                            var menu = pdpBlock.querySelector('.inc_pdp_bundle_product_list_main_block');
                            menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                        }
                        if (INC.clientConfig.slidevalue + prod_c == productBlocks.length) {
                            pdpBlock.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                            pdpBlock.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute("style", "opacity:0.5");
                        }
                        sliderBtnCounter++;
                        if (sliderBtnCounter > lengthCount - 3) {
                            sliderBtnCounter--;
                        }
                    });
                    pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_block').addEventListener("click", function () {
                        var prod_c = 1;
                        var width_prod = 215;
                        if (window.innerWidth > 819) {
                            prod_c = 4
                            width_prod =173;
                        }
                        if (INC.clientConfig.slidevalue == -1){
                            INC.clientConfig.slidevalue = 0;
                        }
                        if (INC.clientConfig.slidevalue > 0) {
                            pdpBlock.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                            pdpBlock.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute("style", "opacity:1");
                            INC.clientConfig.slidevalue--
                            INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) + width_prod) + 'px';
                            var menu = pdpBlock.querySelector('.inc_pdp_bundle_product_list_main_block');
                            menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                        }
                        if (INC.clientConfig.slidevalue == 0) {
                            pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                            pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute("style", "opacity:0.5");
                        }
                        sliderBtnCounter--;
                        if (sliderBtnCounter == -1){
                            sliderBtnCounter = 0;
                        }
                    });
                }
                if ((productBlocks.length <= prd_length)) {
                    pdpBlock.querySelector('.inc_pdp_bundle_product_right-btn_block').style.visibility = "hidden";
                    pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_block').style.visibility = "hidden";
                }
                var total_qty_item = 0;
                var totalActivePrice = 0;
                var elBundleCartAddedBlock = pdpBlock.querySelector('.inc_pdp_bundle_cart_added_block')
                var elBundleCartPriceActiveText = pdpBlock.querySelector('.inc_pdp_bundle_cart_summary_price_active_text')
                var elBundleCartTitleText = pdpBlock.querySelector('.inc_pdp_bundle_cart_title_text')
                var elBundleCartTitleText_ = pdpBlock.querySelector('.inc_pdp_bundle_cart_summary_title_text')
                var elBundleCartAddBtnText = pdpBlock.querySelector('.inc_pdp_bundle_cart_summary_add_btn_text')
                
                if (window.innerWidth < 820){
                    elBundleCartTitleText.innerHTML = "<span>"+INC.config.TotalText+"</span>"+total_qty_item+"<span>"+"点"+"</span>" 
                } else {
                    elBundleCartTitleText.innerHTML = "<span>"+INC.config.TotalText+"</span>"+"("+total_qty_item+"<span>"+"点"+")"+"</span>" 
                }
                if (window.innerWidth < 820){
                    elBundleCartTitleText_.innerHTML = "<span>"+INC.config.TotalText+"</span>"+total_qty_item+"<span>"+"点"+"</span>" 
                } else {
                    elBundleCartTitleText_.innerHTML = "<span>"+INC.config.TotalText+"</span>"+"("+total_qty_item+"<span>"+"点"+")"+"</span>" 
                }
                
               elBundleCartAddBtnText.innerText = INC.config.AddToCartText 
               elBundleCartAddBtnText.parentNode.parentNode.parentNode.classList.add('cartEmpty');
               elBundleCartPriceActiveText.innerHTML =  "¥" +  formatter.format(totalActivePrice).replace('￥', '').replace('¥', '')+ "<span> ("+INC.config.prcText+") </span>";
                setTimeout(function () {
                    for (var i = 0; i < 15; i++) {
                        if (typeof (elProductAddBlock[i]) != "undefined" && i % 2 != 0){
                            if (window.innerWidth < 820){
                                if (i == 1 || i == 3 || i==5) {
                                    var productBlockNode = elProductAddBlock[i].parentNode.parentNode.parentNode.parentNode.parentNode;
                                    var module_block=elProductAddBlock[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                                    var flag_check = INC.methods.checkVariantSelection(module_block)
                                    if(flag_check == 1){
                                        elProductAddBlock[i].click();
                                    }
                                }
                            } else {
                                if (i == 1 || i == 3 || i==5 || i==7) {
                                    var productBlockNode = elProductAddBlock[i].parentNode.parentNode.parentNode.parentNode.parentNode;
                                    var module_block=elProductAddBlock[i].parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                                    var flag_check = INC.methods.checkVariantSelection(module_block)
                                    if(flag_check == 1){
                                        elProductAddBlock[i].click();
                                    }
                                }
                            }
                        } 
                    }
                    
                    if(document.querySelector('.inc_pdp_block') != null){
                        if(document.querySelector('#dspbtnCrt') != null){
                            if(document.querySelector('#dspbtnCrt').style.display == "none"){
                                if(document.querySelector('#dspbtnCrt_g') != null){
                                    if(document.querySelector('#dspbtnCrt_g').style.display == "inline"){
                                        if (document.querySelector(".appeal_message") != null){ 
                                            if (document.querySelector(".appeal_message").innerText.trim() == "在庫切れ" || document.querySelector(".appeal_message").innerText == "在庫なし"){
                                                    document.querySelector('.inc_pdp_block').style.display = "none"
                                                } else {
                                                    document.querySelector('.inc_pdp_block').style.display = "block"
                                                }
                                            } else {
                                                if (document.querySelector('.itemNoCart') != null){
                                                    if (document.querySelector('.itemNoCart').innerHTML == "<p>こちらの商品は<br>現在お取り扱いがございません</p>"){
                                                        document.querySelector('.inc_pdp_block').style.display = "none"
                                                    } else {
                                                        document.querySelector('.inc_pdp_block').style.display = "block"
                                                    }    
                                                }
                                            }
                                    }
                                }
                            }else{
                                if (document.querySelector(".appeal_message") != null){ 
                                    if (document.querySelector(".appeal_message").innerText.trim() == "在庫切れ" || document.querySelector(".appeal_message").innerText == "在庫なし"){
                                        document.querySelector('.inc_pdp_block').style.display = "none"
                                    } else {
                                        document.querySelector('.inc_pdp_block').style.display = "block"
                                    }
                                } else {
                                    if (document.querySelector('.itemNoCart') != null){
                                        if (document.querySelector('.itemNoCart').innerHTML == "<p>こちらの商品は<br>現在お取り扱いがございません</p>"){
                                            document.querySelector('.inc_pdp_block').style.display = "none"
                                        } else {
                                            document.querySelector('.inc_pdp_block').style.display = "block"
                                        }    
                                    }
                                }
                            }
                        }
                    }
                    if(document.querySelector('#dspbtnCrt') != null){
                        if(document.querySelector('#dspbtnCrt').style.display == "none"){
                            if( document.querySelector('.inc_pdp_block') != null){
                                if(document.querySelector('#dspbtnCrt_g') != null){
                                    if(document.querySelector('#dspbtnCrt_g').style.display == "inline"){
                                        document.querySelector('.inc_pdp_block').style.display="block"
                                    }else{
                                        document.querySelector('.inc_pdp_block').style.display="none"
                                    }
                                }
                            }
                        }else{
                            document.querySelector('.inc_pdp_block').style.display="block"
                        }
                    }
                }, 100)
                var pdpBlockSibling = document.querySelector('#str_contents #recommendArea')
                var pdpBlockSibling1 = document.querySelector('#relGoodsArea')
                var pdpBlockSibling2 = document.querySelector('.coupon_campaign_area')
                var pdpBlockSibling3 = document.querySelector('#form2cart .favorite_area')
                if (pdpBlockSibling != null) {
                    pdpBlockSibling.parentNode.insertBefore(pdpBlock, pdpBlockSibling)
                } else if (pdpBlockSibling1 != null) {
                    pdpBlockSibling1.parentNode.insertBefore(pdpBlock, pdpBlockSibling1)
                } else if (pdpBlockSibling2 != null) {
                    pdpBlockSibling2.parentNode.insertBefore(pdpBlock, pdpBlockSibling2)
                } else if (pdpBlockSibling3 != null) {
                    pdpBlockSibling3.parentNode.insertBefore(pdpBlock, pdpBlockSibling3)
                }

                setTimeout(function(){
                    onloadpdp = true
                    onloadpdp_delete = true
                    var inc_prod_img =  document.querySelectorAll('.inc_product_img_main_img img')
                    for (var im in inc_prod_img) {
                        if(inc_prod_img[im] != undefined && Object.prototype.hasOwnProperty.call(inc_prod_img, im)){
                            inc_prod_img[im].setAttribute('style',INC.config.styleft)
                        }
                    }
                    var elselectsie=document.querySelectorAll('form select')
                    for(var et_=0;et_<elselectsie.length;et_++){
                        if(elselectsie[et_] != null){
                            if (document.querySelector('select.attChoice') == null){
                                selectautoselction(elselectsie[et_],'nonatt',"selection")
                            }else{
                                selectautoselction(elselectsie[et_],null,"selection")
                            }
                        }
                    }
                    var elsizeauto=document.querySelectorAll('#wear-slct-size label')
                    for(var es=0;es<elsizeauto.length;es++){
                        elsizeauto[es].addEventListener('click',function(e){
                            var elm = e.currentTarget
                            setTimeout(function(){
                                selectonclickoption(elm,'label')
                            },2000)
                        })
                    }
                    if (document.querySelector('#wear-clr-list li') != null){
                        var elsizeauto1=document.querySelectorAll('#wear-clr-list li')
                    }else{
                        var elsizeauto1=document.querySelectorAll('#wear-clr-list')
                    }
                    for(var es1=0;es1<elsizeauto1.length;es1++){
                    	if(window.innerWidth < 600){
	                    	$(elsizeauto1[es1]).bind( "click", function(e){
							    var elm = e.currentTarget
	                            if(window.innerWidth < 600){
	                            	setTimeout(function(){
		                                selectonclickoption(elm)
		                            },3000)
	                            }else{
	                            	setTimeout(function(){
		                                selectonclickoption(elm)
		                            },2000)
	                            }
							});
	                    }else{
	                        elsizeauto1[es1].addEventListener('click',function(e){
	                            var elm = e.currentTarget
	                            if(window.innerWidth < 600){
	                            	setTimeout(function(){
		                                selectonclickoption(elm)
		                            },3000)
	                            }else{
	                            	setTimeout(function(){
		                                selectonclickoption(elm)
		                            },2000)
	                            }
	                        })
	                    }
                    }
                    var elselectsie=document.querySelectorAll('form select')
                    for(var et=0;et<elselectsie.length;et++){
                        if(elselectsie[et] != null){
                            if (document.querySelector('select.attChoice') == null){
                                elselectsie[et].addEventListener('change',function(e){
                                    var elm = e.currentTarget
                                    setTimeout(function(){
                                        selectautoselction(elm,'nonatt',"selection")
                                    },2000)
                                })
                            }else{
                                elselectsie[et].addEventListener('change',function(e){
                                    var elm = e.currentTarget
                                    setTimeout(function(){
                                        selectautoselction(elm,null,"selection")
                                    },2000)
                                })
                            }
                        }
                    }
                    
                    if(document.querySelector('.variation_selection select') == null){
	                    setTimeout(function(){
	                        if (document.querySelector('#wear-clr-list li .is-active') != null){
	                            var elsizeauto1=document.querySelector('#wear-clr-list li .is-active')
	                        }else{
	                            var elsizeauto1=document.querySelector('#wear-clr-list .is-active')
	                        }
	                        
	                        if(elsizeauto1 == null){
	                            if (document.querySelector('#wear-clr-list li') != null){
	                                var elsize_=document.querySelectorAll('#wear-clr-list li')
	                            }else{
	                                var elsize_=document.querySelectorAll('#wear-clr-list')
	                            }
	                            for(var es1_=0;es1_<elsize_.length;es1_++){
	                                if(elsize_[es1_].querySelector('.cart_thumbnail_frame_select') != null){
	                                    if(elsize_[es1_].querySelector('.cart_thumbnail_frame_select').style.opacity != 0){
	                                        elsizeauto1 = elsize_[es1_].querySelector('a')
	                                        break;
	                                    }
	                                }
	                            }
	                        }

	                        //document.querySelector('#wear-clr-list li .cart_thumbnail_frame_select').style.opacity
	                        var elsizeauto=document.querySelector('#wear-slct-size .is-checked')
	                        if(elsizeauto1 != null){
	                            var elms1=elsizeauto1.parentNode
	                            if(elms1 != null){
	                                selectonclickoption(elms1)
	                            }
	                        }
	                        var zerEl = document.querySelector('#wear-slct-size input[type="radio"]:checked + .label-radio')
	                        if(zerEl != null){
	                            selectonclickoption(zerEl,'label')
	                        }
	                        if(elsizeauto != null){
	                            var elms=elsizeauto.parentNode
	                            if(elms != null){
	                                selectonclickoption(elms,'label')
	                            }
	                        }
	                        
	                        if(elsizeauto1 == null || elsizeauto == null){
	                            setTimeout(function(){
	                                if (document.querySelector('#wear-clr-list li .is-active') != null){
	                                    var elsizeauto1=document.querySelector('#wear-clr-list li .is-active')
	                                }else{
	                                    var elsizeauto1=document.querySelector('#wear-clr-list .is-active')
	                                }
	                                
	                                if(elsizeauto1 == null){
	                                    if (document.querySelector('#wear-clr-list li') != null){
	                                        var elsize_=document.querySelectorAll('#wear-clr-list li')
	                                    }else{
	                                        var elsize_=document.querySelectorAll('#wear-clr-list')
	                                    }
	                                    for(es1_=0;es1_<elsize_.length;es1_++){
	                                        if(elsize_[es1_].querySelector('.cart_thumbnail_frame_select') != null){
	                                            if(elsize_[es1_].querySelector('.cart_thumbnail_frame_select').style.opacity != 0){
	                                                elsizeauto1 = elsize_[es1_].querySelector('a')
	                                                break;
	                                            }
	                                        }
	                                    }
	                                }
	                                var checkclients = true;
	                                //document.querySelector('#wear-clr-list li .cart_thumbnail_frame_select').style.opacity
	                                var elsizeauto=document.querySelector('#wear-slct-size .is-checked')
	                                if(elsizeauto1 != null){
	                                    var elms1=elsizeauto1.parentNode
	                                    if(elms1 != null){
	                                        selectonclickoption(elms1)
	                                    }
	                                }else{
	                                    checkclients = false;
	                                }
	                                if(elsizeauto != null){
	                                    var elms=elsizeauto.parentNode
	                                    if(elms != null){
	                                        selectonclickoption(elms,'label')
	                                    }
	                                }else{
	                                    checkclients = false;
	                                }
	                                if(checkclients == false){
	                                    setTimeout(function(){
	                                        if (document.querySelector('#wear-clr-list li .is-active') != null){
	                                            var elsizeauto1=document.querySelector('#wear-clr-list li .is-active')
	                                        }else{
	                                            var elsizeauto1=document.querySelector('#wear-clr-list .is-active')
	                                        }
	                                        
	                                        if(elsizeauto1 == null){
	                                            if (document.querySelector('#wear-clr-list li') != null){
	                                                var elsize_=document.querySelectorAll('#wear-clr-list li')
	                                            }else{
	                                                var elsize_=document.querySelectorAll('#wear-clr-list')
	                                            }
	                                            for(es1_=0;es1_<elsize_.length;es1_++){
	                                                if(elsize_[es1_].querySelector('.cart_thumbnail_frame_select') != null){
	                                                    if(elsize_[es1_].querySelector('.cart_thumbnail_frame_select').style.opacity != 0){
	                                                        elsizeauto1 = elsize_[es1_].querySelector('a')
	                                                        break;
	                                                    }
	                                                }
	                                            }
	                                        }
	                                        var elsizeauto=document.querySelector('#wear-slct-size .is-checked')
	                                        if(elsizeauto1 != null){
	                                            var elms1=elsizeauto1.parentNode
	                                            if(elms1 != null){
	                                                selectonclickoption(elms1)
	                                            }
	                                        }
	                                        if(elsizeauto != null){
	                                            var elms=elsizeauto.parentNode
	                                            if(elms != null){
	                                                selectonclickoption(elms,'label')
	                                            }
	                                        }
	                                    },3000)
	                                }
	                            },2000)
	                        }
	                    },3000)
					}else{
						if(document.querySelectorAll('form select') != null){
		                    if (document.querySelector('select.attChoice') == null){
	                            selectautoselction(this,'nonatt')
	                        }else{
	                            selectautoselction(this)
	                        }
	                    }
					}
                },1000)
            }
            this.trackingEvents("productPageVisit", { "product_id": INC.dataStore.pdpProductId });
        }
        INC.methods.createSidebarBlock()
    }
    function selectonclickoption(elment,labelt){
        INC.config.scroll = false;
        var colortext = ""
        if(labelt == 'label'){
            if (document.querySelector('#wear-slct-size .label-radio.is-checked') != null){
                var size = document.querySelectorAll('#wear-slct-size .label-radio');
                for (var z=0; z<size.length; z++){
                    if(size[z].classList.contains('is-checked') == true){
                        colortext = size[z].textContent.trim();
                    }
                }
            }else if(elment != null){
                colortext = elment.textContent.trim();
            }
        }else{
            if (document.querySelector('#wear-slct-clr')!=null){
                if (document.querySelectorAll('#wear-clr-list li') != null){
                    if(elment != null){
                        if(elment.querySelector('a') != null){
                            if(elment.querySelector('a').getAttribute('data-color') != undefined){
                                colortext = elment.querySelector('a').getAttribute('data-color').trim()  
                            }else if (document.querySelector('#wear-slct-clr dt #color-nm') != null){
                                colortext = document.querySelector('#wear-slct-clr dt #color-nm').textContent.trim()
                            }
                        }else if (document.querySelector('#wear-slct-clr dt #color-nm') != null){
                            colortext = document.querySelector('#wear-slct-clr dt #color-nm').textContent.trim()
                        }else if (document.querySelector('#wear-slct-clr .cart_thumbnail_frame_select') != null){
                            colortext = elment.parentNode.getAttribute('data-color')
                        } else{
                            colortext = elment.innerText.trim()
                        }
                    }
                } else {
                    if (document.querySelector('#wear-slct-clr dt #color-nm') != null){
                        colortext = document.querySelector('#wear-slct-clr dt #color-nm').textContent.trim()
                    }
                }
            }  
        }
         
        var textcolor = colortext
        if (textcolor != undefined) {
            textcolor = textcolor.trim().toLowerCase()
        }
        if (textcolor != null) {
        	var elmainp=document.querySelectorAll(".inc_product_modal_block")[0]
            var availvariant = document.querySelectorAll('.inc_pdp_bundle_product_list_block .inc_product_module_block .inc_product_modal_block select')
            if(elmainp.querySelector('select option[datacolor="'+textcolor+'"]') != null || elmainp.querySelector('select option[datasize="'+textcolor+'"]') != null){
                var seloption_ = null
                if(document.querySelector('.inc_pdp_bundle_product_list_block .inc_product_module_block .inc_product_modal_block select option[datacolor="'+textcolor+'"]') != null){
                    seloption_ = document.querySelector('.inc_pdp_bundle_product_list_block .inc_product_module_block .inc_product_modal_block select option[datacolor="'+textcolor+'"]')
                }else if(document.querySelector('.inc_pdp_bundle_product_list_block .inc_product_module_block .inc_product_modal_block select option[datasize="'+textcolor+'"]')){
                    seloption_ = document.querySelector('.inc_pdp_bundle_product_list_block .inc_product_module_block .inc_product_modal_block select option[datasize="'+textcolor+'"]')
                }
                seloption_.selected = 'selected'
                var el_sel_tag = seloption_.parentNode
                var elm=el_sel_tag
                INC.methods.mappvariants(elm,null,null,"select_option")
                if (document.querySelector('.inc_pdp_bundle_product_list_block .inc_product_module_block') != null){
                    var mainModule = document.querySelector('.inc_pdp_bundle_product_list_block .inc_product_module_block .inc_product_modal_block');
                    var flag_check = INC.methods.checkVariantSelection(mainModule)
                    var elmainp=document.querySelectorAll(".inc_product_showcase_block")[0]
                    
                    if(flag_check == 1 && elmainp.querySelector('.inc_product_desc_add_block.Inc_checked') == null){
                        INC.config.clientvariantclick = true
                        onloadpdp = false
                        mainModule.querySelector(".inc_product_desc_qty_add_btn_block .elAddBlock").click()
                        onloadpdp = true
                        INC.config.clientvariantclick = false
                    }else if(flag_check == 2 && elmainp.querySelector('.inc_product_desc_add_block.Inc_checked') != null){
                        INC.config.clientvariantclick = true
                        onloadpdp = false
                        mainModule.querySelector(".inc_product_desc_qty_add_btn_block .elAddBlock").click()
                        onloadpdp = true
                        INC.config.clientvariantclick = false
                    }
                }
            }
        }
        if(document.querySelector('#dspbtnCrt') != null){
            if(document.querySelector('#dspbtnCrt').style.display == "none"){
                if( document.querySelector('.inc_pdp_block') != null){
                    if(document.querySelector('#dspbtnCrt_g') != null){
                        if(document.querySelector('#dspbtnCrt_g').style.display == "inline"){
                            document.querySelector('.inc_pdp_block').style.display="block"
                        }else{
                            document.querySelector('.inc_pdp_block').style.display="none"
                        }
                    }
                }
            }else{
                document.querySelector('.inc_pdp_block').style.display="block"
            }
        }
    }
    function selectautoselction(selelm,nonatt,selection){
        INC.config.scroll = false;
        var variDrop=null
        if(nonatt == 'nonatt'){
            variDrop = document.querySelectorAll('.variation_selection select')
        }else{
            variDrop = document.querySelectorAll('.variation_selection dl')
        }
        var sel_variant = ""
        var variArr = [];
        var selectedclientdetails = [];
        for (var x1 = 0; x1 < variDrop.length; x1++) {
            if(nonatt == 'nonatt'){
                for (var x = 0; x < variDrop.length; x++) {
                    if (variDrop[x].classList.contains('is-selected')){
                        var b = variDrop[x].getAttribute('name').split('_').length
                        var variName = variDrop[x].getAttribute('name').split('_')[b - 1]
                        var selName = variDrop[x].parentNode.querySelector('select').getAttribute('name')
                        var selvar = variDrop[x].parentNode.querySelector('select[name="' + selName + '"]');
                        sel_variant = selvar.options[selvar.selectedIndex].getAttribute("value").trim();
                        variArr.push(selvar.options[selvar.selectedIndex].innerText)
                        selectedclientdetails.push({
                            text:selvar.options[selvar.selectedIndex].innerText,
                            attrcode:"no"
                        })
                    }else if(selection == "selection"){
                        if(selelm != null){
                            if(selelm.parentNode != null){
                                if(selelm.parentNode != null){
                                    var selopttxt = selelm.options[selelm.selectedIndex].innerText
                                    var checktextattribute=""
                                    if(variDrop[x].querySelector('dt') != null){
                                        checktextattribute = variDrop[x].querySelector('dt').innerText
                                    }
                                    if(document.querySelector('.header-gnav__drawer') != null || window.innerWidth < 768){
                                        if(variDrop[x] != undefined){
                                            if(variDrop[x].options[selelm.selectedIndex] != undefined){
                                                selopttxt=variDrop[x].options[selelm.selectedIndex].innerText
                                                if(selopttxt.indexOf('を選択') >= 0){
                                                    checktextattribute = selopttxt.split('を選択')[0].trim()
                                                }
                                            }
                                        }
                                    }
                                    if(document.querySelector('.header-gnav__drawer') != null || window.innerWidth < 768){
                                        selopttxt=selelm.options[selelm.selectedIndex].innerText
                                        if(selopttxt.indexOf('を選択') >= 0){
                                            selopttxt = "選択してください"
                                        }
                                    }
                                    if(selopttxt == "選択してください"){
                                        var emptext=variDrop[x1].querySelector('select option').innerText  
                                        if(document.querySelector('.header-gnav__drawer') != null || window.innerWidth < 768){
                                            emptext= "選択してください"
                                        }
                                        variArr.push(emptext)
                                        selectedclientdetails.push({
                                            text:emptext,
                                            attrcode:checktextattribute
                                        })
                                    }
                                }
                            }
                        }
                    }
                }
	        }else{
	            if (variDrop[x1].querySelector('select').classList.contains('is-selected')){
	                var b = variDrop[x1].querySelector('select').getAttribute('name').split('_').length
	                var variName = variDrop[x1].querySelector('select').getAttribute('name').split('_')[b - 1]
	                var selName = variDrop[x1].querySelector('select').getAttribute('name')
	                var selvar = variDrop[x1].querySelector('select[name="' + selName + '"]');
	                sel_variant = selvar.options[selvar.selectedIndex].getAttribute("value").trim();
	                variArr.push(selvar.options[selvar.selectedIndex].innerText)
                    selectedclientdetails.push({
                        text:selvar.options[selvar.selectedIndex].innerText,
                        attrcode:"no"
                    })
	            }else if(selection == "selection"){
                    if(selelm != null){
                        if(selelm.parentNode != null){
                            if(selelm.parentNode != null){
                                var selopttxt = selelm.options[selelm.selectedIndex].innerText
                                var checktextattribute=""
                                if(variDrop[x1].querySelector('dt') != null){
                                    checktextattribute = variDrop[x1].querySelector('dt').innerText
                                }
                                if(document.querySelector('.header-gnav__drawer') != null || window.innerWidth < 768){
                                    selopttxt=variDrop[x1].options[selelm.selectedIndex].innerText
                                    if(selopttxt.indexOf('を選択') >= 0){
                                        checktextattribute = selopttxt.split('を選択')[0].trim()
                                    }
                                }
                                if(document.querySelector('.header-gnav__drawer') != null || window.innerWidth < 768){
                                    selopttxt=selelm.options[selelm.selectedIndex].innerText
                                    if(selopttxt.indexOf('を選択') >= 0){
                                        selopttxt = "選択してください"
                                    }
                                }
                                if(selopttxt == "選択してください"){
                                    var emptext=variDrop[x1].querySelector('select option').innerText  
                                    if(document.querySelector('.header-gnav__drawer') != null || window.innerWidth < 768){
                                        emptext= "選択してください"
                                    }
                                    variArr.push(emptext)
                                    selectedclientdetails.push({
                                        text:emptext,
                                        attrcode:checktextattribute
                                    })
                                }
                            }
                        }
                    }
                }
	        }
	    }
        if (variArr.length > 0) {
            for (var x2 = 0; x2 < variArr.length; x2++) {
                var sel_text = variArr[x2].toLocaleLowerCase();
                if (sel_text != null) {
                	var elmmainp=document.querySelectorAll('.inc_pdp_bundle_product_list_main_block .inc_product_module_block')[0]
                    var availvariant = elmmainp.querySelectorAll('.inc_product_modal_block select')
                    var elmainp_=document.querySelectorAll(".inc_product_modal_block")[0]
                    if(elmainp_.querySelector('select option[datacolor="'+sel_text+'"]') != null || elmainp_.querySelector('select option[datasize="'+sel_text+'"]') != null){
                        var seloption_ = null
                        if(document.querySelector('.inc_pdp_bundle_product_list_block .inc_product_module_block .inc_product_modal_block select option[datacolor="'+sel_text+'"]') != null){
                            seloption_ = document.querySelector('.inc_pdp_bundle_product_list_block .inc_product_module_block .inc_product_modal_block select option[datacolor="'+sel_text+'"]')
                        }else if(document.querySelector('.inc_pdp_bundle_product_list_block .inc_product_module_block .inc_product_modal_block select option[datasize="'+sel_text+'"]')){
                            seloption_ = document.querySelector('.inc_pdp_bundle_product_list_block .inc_product_module_block .inc_product_modal_block select option[datasize="'+sel_text+'"]')
                        }
                        seloption_.selected = 'selected'
                        var el_sel_tag = seloption_.parentNode
                        var elm=el_sel_tag
                        INC.methods.mappvariants(elm,null,null,"select_option",null,selectedclientdetails)
                        if (document.querySelector('.inc_pdp_bundle_product_list_block .inc_product_module_block') != null){
                            var mainModule = document.querySelector('.inc_pdp_bundle_product_list_block .inc_product_module_block .inc_product_modal_block');
                            var flag_check = INC.methods.checkVariantSelection(mainModule)
                            var elmainp=document.querySelectorAll(".inc_product_showcase_block")[0]
                    		if(flag_check == 1 && elmainp.querySelector('.inc_product_desc_add_block.Inc_checked') == null){
                                INC.config.clientvariantclick = true
                                onloadpdp = false
                                mainModule.querySelector(".inc_product_desc_qty_add_btn_block .elAddBlock").click()
                                onloadpdp = true
                                INC.config.clientvariantclick = false
                            }else if(flag_check == 2 && elmainp.querySelector('.inc_product_desc_add_block.Inc_checked') != null){
                                INC.config.clientvariantclick = true
                                onloadpdp = false
                                mainModule.querySelector(".inc_product_desc_qty_add_btn_block .elAddBlock").click()
                                onloadpdp = true
                                INC.config.clientvariantclick = false
                            }
                        }
                    } else if(sel_text == "選択してください" && selelm.parentNode != null && selection == "selection"){
                        if(selelm.parentNode.parentNode != null){
                            var checktextattribute=""
                            if(selelm.parentNode.parentNode.querySelector('dt') != null){
                                checktextattribute = selelm.parentNode.parentNode.querySelector('dt').innerText
                            }
                            if(document.querySelector('.header-gnav__drawer') != null || window.innerWidth < 768){
                                selopttxt=selelm.options[selelm.selectedIndex].innerText
                                if(selopttxt.indexOf('を選択') >= 0){
                                    checktextattribute = selopttxt.split('を選択')[0].trim()
                                }
                            }
                            if(checktextattribute != ""){
                                var elmSelctitle = checktextattribute
                                var seloption_ = null
                                if(document.querySelector('.inc_pdp_bundle_product_list_block .inc_product_module_block .inc_product_modal_block .selectvariantwrap[attrcode="'+elmSelctitle+'"]') != null){
                                    seloption_ = document.querySelector('.inc_pdp_bundle_product_list_block .inc_product_module_block .inc_product_modal_block .selectvariantwrap[attrcode="'+elmSelctitle+'"]')
                                }
                                if(seloption_ != null){
                                    seloption_.querySelector('select option').selected = 'selected'
                                    var el_sel_tag = seloption_.parentNode
                                    var elmattrdiv=null
                                    if(el_sel_tag.querySelector('.inc_product_desc_att_zero_list_block[attrcode="'+elmSelctitle+'"]') != null){
                                        el_sel_tag.setAttribute('data-zero','')
                                        elmattrdiv = el_sel_tag.querySelector('.inc_product_desc_att_zero_list_block[attrcode="'+elmSelctitle+'"]')
                                    }else if(el_sel_tag.querySelector('.inc_product_desc_att_size_list_block[attrcode="'+elmSelctitle+'"]') != null){
                                        el_sel_tag.setAttribute('data-size','')
                                        elmattrdiv = el_sel_tag.querySelector('.inc_product_desc_att_size_list_block[attrcode="'+elmSelctitle+'"]')
                                    }else if(el_sel_tag.querySelector('.inc_product_desc_att_color_list_block[attrcode="'+elmSelctitle+'"]') != null){
                                        el_sel_tag.setAttribute('data-color','')
                                        elmattrdiv = el_sel_tag.querySelector('.inc_product_desc_att_color_list_block[attrcode="'+elmSelctitle+'"]')
                                    }else if(el_sel_tag.querySelector('.inc_product_desc_att_third_list_block[attrcode="'+elmSelctitle+'"]') != null){
                                        el_sel_tag.setAttribute('data-third','')
                                        elmattrdiv = el_sel_tag.querySelector('.inc_product_desc_att_third_list_block[attrcode="'+elmSelctitle+'"]')
                                    }
                                    if(elmattrdiv != null){
                                        if(elmattrdiv.querySelector('div.active') != null){
                                            elmattrdiv.querySelector('div.active').classList.remove('active')
                                        }
                                    }
                                    var elm=el_sel_tag
                                    INC.methods.mappvariants(elm,null,null,"select_option","empty",selectedclientdetails)
                                    
                                    if (document.querySelector('.inc_pdp_bundle_product_list_block .inc_product_module_block') != null){
                                        var mainModule = document.querySelector('.inc_pdp_bundle_product_list_block .inc_product_module_block .inc_product_modal_block');
                                        var flag_check = INC.methods.checkVariantSelection(mainModule)
                                        var elmainp=document.querySelectorAll(".inc_product_showcase_block")[0]
                                        if((flag_check == 2 || flag_check == 0) && elmainp.querySelector('.inc_product_desc_add_block.Inc_checked') != null){
                                            onloadpdp = false
                                            INC.config.clientvariantclick = true
                                            mainModule.querySelector(".inc_product_desc_qty_add_btn_block .elAddBlock").click()
                                            onloadpdp = true
                                            INC.config.clientvariantclick = false
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
        if(document.querySelector('#dspbtnCrt') != null){
            if(document.querySelector('#dspbtnCrt').style.display == "none"){
                if( document.querySelector('.inc_pdp_block') != null){
                    if(document.querySelector('#dspbtnCrt_g') != null){
                        if(document.querySelector('#dspbtnCrt_g').style.display == "inline"){
                            document.querySelector('.inc_pdp_block').style.display="block"
                        }else{
                            document.querySelector('.inc_pdp_block').style.display="none"
                        }
                    }
                }
            }else{
                document.querySelector('.inc_pdp_block').style.display="block"
            }
        }
    }
    INC.methods.createPDPBundleCartBlock = function (pdpBlock) {
        var pdpBundleCartBlock = pdpBlock.querySelector('.inc_pdp_bundle_cart_block')
        var elBundleCartTitleText = pdpBlock.querySelector('.inc_pdp_bundle_cart_title_text')
        var elBundleCartAddedBlock = pdpBlock.querySelector('.inc_pdp_bundle_cart_added_block')
        var elBundleCartSummaryViewBtnText = pdpBlock.querySelector('.inc_pdp_bundle_cart_summary_view_btn_text');
        var elBundleCartAddBtnBlock = pdpBlock.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block');
       
        if (window.innerWidth > 820) {
            elBundleCartAddedBlock.innerHTML = "";
            elBundleCartSummaryViewBtnText.innerText = "Added items";
        }
        elBundleCartTitleText.innerText = "追加したアイテム";
        if(elBundleCartAddBtnBlock != null){
            elBundleCartAddBtnBlock.addEventListener("click", function () {
                addbundlefn_('delivery',this)
            });
        }
        var newelm = pdpBlock.querySelector('.inc_pdp_bundle_cart_summary_add_btn_txt_block')
        newelm.innerText = "商品価格の反映にタイムラグがある場合がございます。最新の価格は商品ページまたはカートにてご確認ください。"
         
        return pdpBundleCartBlock;
    }
    function addbundlefn_(typeadd,elm){
        elm.classList.add('inc_loading');
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
        var prd_length = 2
        if (window.innerWidth > 819) {
            prd_length = 4
        }
        document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
        if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > prd_length) {
            document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
            document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
            document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
            document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
        }
        if (INC.config.disablebtn == trueflag) {
            var btn_cart = elm
            INC.config.disablebtn = false
            if(btn_cart.querySelector('.inc_pdp_bundle_cart_summary_add_btn_text') != null){
            	btn_cart.querySelector('.inc_pdp_bundle_cart_summary_add_btn_text').classList.add('inc_loading')
            }
            btn_cart.classList.add('inc_loading')
            INC.methods.addBundleToCart(btn_cart,typeadd);
        }
    }
    INC.methods.updateSidebarBlock = function(errFlag) {
	    var subtotalactiveprice = 0
	    var subtotalregukarprice = 0
	    var dataStore = INC.dataStore;
	    var qty = "";
	    var sbBlock = document.querySelector('.inc_sidebar_modal_block');

	    var sidebarHeaderItemCountTitleText = sbBlock.querySelector(".inc_header_item_count_title_text");
        var elHeadersubtotalactivetext = sbBlock.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_active_text");
        var elHeadersubtotalregulartext = sbBlock.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_regular_text");
        var sbCartBlock = sbBlock.querySelector(".inc_cart_added_list_block");
        var sidebarHeaderseelesstext = sbBlock.querySelector(".inc_header_item_count_figure_text");
	    sbCartBlock.innerHTML = "";

	    var bundleCartProductsArray = Object.keys(dataStore.bundleCartProducts);
	    // sidebarHeaderItemCountTitleText.innerHTML = INC.config.TotalText + " " +  Object.keys(dataStore.bundleCartProducts).length + INC.config.NosText;
	    
	    var headerItemCountFigureText = 0;
	    var subtotalactiveprice = 0
	    var subtotalregukarprice = 0
	    bundleCartProductsArray.forEach(function(productSKU) {
	        var findObj = new INC.classes.FindObj({
	            sku: productSKU
	        });
	        qty = dataStore.bundleCartProducts[productSKU];
	        var productObj = INC.dataStore.methods().getProductBySKU(findObj);
	        if (INC.config.usrIdfy == "nonLogin") { 
	            var activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
	            var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
	        } else if (INC.config.usrIdfy == "level0"){
	            if (productObj.MemberPrices !=undefined && productObj.MemberPrc != "") {
	                var activePrice = parseFloat(productObj.MemberPrices.split('|')[1].split('=')[1]).toFixed(2).toString();
	                var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
	            } else {
	                if (productObj.worthPrice != null && productObj.worthPricee != ""){
	                    var activePrice = parseFloat(productObj.worthPrice.split('|')[1].split('=')[1]).toFixed(2).toString();
	                    var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
	                }
	            }
	        } else if (INC.config.usrIdfy == "level1"){
	            if (productObj.MemberPrices !=undefined && productObj.MemberPrc != ""){
	                var activePrice = parseFloat(productObj.MemberPrices.split('|')[2].split('=')[1]).toFixed(2).toString();
	                var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
	            } else {
	                if (productObj.worthPrice != null && productObj.worthPricee != ""){
	                    var activePrice = parseFloat(productObj.worthPrice.split('|')[2].split('=')[1]).toFixed(2).toString();
	                    var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
	                }
	            }
	        } else if (INC.config.usrIdfy == "level2"){
	            if (productObj.MemberPrices !=undefined && productObj.MemberPrc != ""){
	                var activePrice = parseFloat(productObj.MemberPrices.split('|')[3].split('=')[1]).toFixed(2).toString();
	                var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
	            } else {
	                if (productObj.worthPrice != null && productObj.worthPricee != ""){
	                    var activePrice = parseFloat(productObj.worthPrice.split('|')[3].split('=')[1]).toFixed(2).toString();
	                    var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
	                }
	            }
	        } else if (INC.config.usrIdfy == "level3"){
	            if (productObj.MemberPrices !=undefined && productObj.MemberPrc != ""){
	                var activePrice = parseFloat(productObj.MemberPrices.split('|')[4].split('=')[1]).toFixed(2).toString();
	                var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
	                // console.log(parseFloat(productObj.MemberPrices.split('|')[4].split('=')[1]).toFixed(2).toString())
	            } else {
	                if (productObj.worthPrice != null && productObj.worthPricee != ""){
	                    var activePrice = parseFloat(productObj.worthPrice.split('|')[4].split('=')[1]).toFixed(2).toString();
	                    var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
	                }
	            }
	        } else if (INC.config.usrIdfy == "level4"){
	           if (productObj.MemberPrices !=undefined && productObj.MemberPrc != ""){
	                var activePrice = parseFloat(productObj.MemberPrices.split('|')[5].split('=')[1]).toFixed(2).toString();
	                var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
	            } else {
	                if (productObj.worthPrice != null && productObj.worthPricee != ""){
	                    var activePrice = parseFloat(productObj.worthPrice.split('|')[5].split('=')[1]).toFixed(2).toString();
	                    var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
	                }
	            }
	        }
	        
	        
	        // elPrc.innerHTML = "特価" + formatter.format(activePrice).replace('￥', '').replace('¥', '') + "¥";
	        subtotalactiveprice = (+subtotalactiveprice + (+productObj.activePrice * dataStore.bundleCartProducts[productSKU]));
	        subtotalregukarprice = (+subtotalregukarprice + (+productObj.regularPrice * dataStore.bundleCartProducts[productSKU]));
	        
	        headerItemCountFigureText = headerItemCountFigureText + parseInt(dataStore.bundleCartProducts[productSKU]);
            var color = "";
            var size = "";
            var sizeLabel = ""
            var colorLabel = ""
            var elManutext=""

        	if (productObj.MakerName != null){
	            if (productObj.MakerName.length > 10){
	                elManutext = productObj.MakerName.substring(0, 10) + "...";
	            } else {
	                elManutext = productObj.MakerName;
	            }
	        }
	        
	        var oostext = ""
	        var productBlock = generate_html_tag('div', 'inc_cart_added_product_block');
	        if (INC.clientConfig.OOS.length > 0){
	            if (INC.clientConfig.OOS.indexOf(productObj.mainId) >= 0) {
	                for (var e=0; e < INC.clientConfig.OOS.length; e++) {
	                     if(INC.clientConfig.OOS[e] == productObj.mainId){
	                        oostext = "在庫切れ"
	                        productBlock.classList.add('oss')
	                     }
	                }
	            }
	        }
			var addedhtml = '<div class="inc_cart_added_product_img_block"><div class="inc_cart_added_product_img"><img class="inc_lazy" src="' + productObj.imageURL + '" data-src="' + productObj.imageURL + '" alt="' + productObj.name + '"></div></div><div class="inc_cart_added_product_prc_block"><div class="inc_cart_added_product_prc">' + formatter.format(activePrice) + '</div></div><div class="inc_cart_added_product_desc_block"><div class="inc_cart_added_product_desc_manu_block">'+elManutext+'</div><div class="inc_cart_added_product_desc_title_block"><div class="inc_cart_added_product_desc_title_text_block"><div class="inc_cart_added_product_desc_title_text">'+ productObj.name + '</div></div></div><div class="inc_cart_added_product_desc_att_block"><div class="inc_cart_added_product_desc_att_color_block"><div class="inc_cart_added_product_desc_att_color_text_block"><div class="inc_cart_added_product_desc_att_color_text_block"></div></div></div><div class="inc_cart_added_product_desc_att_size_block"><div class="inc_cart_added_product_desc_att_size_text_block"><div class="inc_cart_added_product_desc_att_size_text"></div></div></div></div><div class="inc_cart_added_product_desc_price_block"><div class="inc_cart_added_product_desc_price_active_block"><div class="inc_cart_added_product_desc_price_active_text_block"><div class="inc_cart_added_product_desc_price_active_text">'+oostext+'</div><div class="inc_cart_added_product_desc_price_active_text_msg"></div></div></div><div class="inc_cart_added_product_desc_price_regular_block"><div class="inc_cart_added_product_desc_price_regular_text_block"><div class="inc_cart_added_product_desc_price_regular_text"></div></div></div></div><div class="inc_cart_added_product_qty_block"></div></div>'
            //var addedhtml = '<div class="inc_cart_added_product_img_block"><div class="inc_cart_added_product_img"><img class="inc_lazy" src="' + productObj.imageURL + '" data-src="' + productObj.imageURL + '" alt="' + productObj.name + '"><div class="sidebar_product_quantity_label">' + qty +"x"+ '</div></div><div class="inc_cart_added_product_desc_block"><div class="inc_cart_added_product_desc_title_block"><div class="inc_cart_added_product_desc_title_text_block"><div class="inc_cart_added_product_desc_title_text" title="Easidri Cooling Coat Wide Fit" style="text-transform: unset;">'+ productObj.name + '</div></div></div><div class="inc_cart_added_product_desc_att_block"><div class="inc_cart_added_product_desc_att_color_block"><div class="inc_cart_added_product_desc_att_color_text_block"><div class="inc_cart_added_product_desc_att_color_text_block"></div></div></div><div class="inc_cart_added_product_desc_att_size_block"><div class="inc_cart_added_product_desc_att_size_text_block"><div class="inc_cart_added_product_desc_att_size_text">' + size + '</div></div></div></div><div class="inc_cart_added_product_desc_ecirp_block"><div class="inc_cart_added_product_desc_ecirp_active_block"><div class="inc_cart_added_product_desc_ecirp_active_text_block"><div class="inc_cart_added_product_desc_ecirp_active_text">' + formatter.format(activePrice) + '</div><div class="inc_cart_added_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_cart_added_product_desc_ecirp_regular_block"><div class="inc_cart_added_product_desc_ecirp_regular_text_block"><div class="inc_cart_added_product_desc_ecirp_regular_text"></div></div></div></div><div class="inc_cart_added_product_qty_block"></div></div></div>'
            
            productBlock.innerHTML = addedhtml
            productBlock.setAttribute('data-id', productObj.id);
            productBlock.setAttribute('data-sku', productObj.sku);
            productBlock.setAttribute('data-main_id', productObj.mainId);
            productBlock.setAttribute('data-bundle_id', productObj.bundleId);
            productBlock.setAttribute('data-childsku', productObj.childsku);
            productBlock.setAttribute('data-mainsku', productObj.mainsku);
            productBlock.querySelector('.inc_cart_added_product_img img').setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
            sbCartBlock.appendChild(productBlock);

	        // if (INC.clientConfig.OOS.length > 0){
	        //     if (INC.clientConfig.OOS.indexOf(productObj.mainId) >= 0) {
	        //         for (e = 0; e < INC.clientConfig.OOS.length; e++) {
	        //              if (INC.clientConfig.OOS[e] == productObj.mainId){
	        //                 elPriceActiveText.innerText = "在庫切れ"
	        //                 elPriceActiveText.parentNode.parentNode.parentNode.parentNode.parentNode.classList.add('oss')
	        //              }
	        //         }
	        //     }
	        // }

	    });
	    
	    

	    if (+subtotalactiveprice != null && (+subtotalactiveprice < +subtotalregukarprice)) {
	        elHeadersubtotalactivetext.setAttribute('subtotalActiveprice', subtotalactiveprice)
	        elHeadersubtotalregulartext.setAttribute('subtotalRegularprice', subtotalregukarprice)
	        elHeadersubtotalactivetext.innerHTML = INC.clientConfig.currencySymbol +"<span> 特価 </span>" +  "¥" +formatter.format(subtotalactiveprice).replace('￥', '').replace('¥', '')+ "<span> ("+INC.config.prcText+") </span>"
	        elHeadersubtotalregulartext.innerHTML = INC.clientConfig.currencySymbol +"<span> 特価 </span>" + "¥" + formatter.format(subtotalregukarprice).replace('￥', '').replace('¥', '') + "<span> ("+INC.config.prcText+") </span>"
	    } else {
	        elHeadersubtotalactivetext.setAttribute('subtotalActiveprice', subtotalactiveprice)
	        elHeadersubtotalregulartext.setAttribute('subtotalRegularprice', subtotalregukarprice)
	        elHeadersubtotalactivetext.innerHTML = INC.clientConfig.currencySymbol +  "¥" +formatter.format(subtotalregukarprice).replace('￥', '').replace('¥', '')+ "<span> ("+INC.config.prcText+") </span>"
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



	    setTimeout(function(){
	        var inc_prod_img = document.querySelectorAll('.inc_recommended_products_list_block .inc_product_img_main_img img')
	        for(im=0;im<inc_prod_img.length;im++){
	            // inc_prod_img[im].setAttribute('style','left: 0 !important;position: relative;')
	        }
	    },300)
	}
    INC.methods.createSidebarBlock = function() {
        var dataStore = INC.dataStore;
        var sidebar_dialoge_block = document.createElement('div')
        sidebar_dialoge_block.innerHTML = sidebar_html;
        sidebar_dialoge_block.classList.add('sidebar_outer')
        sidebar_dialoge_block.querySelector(".inc_checkout_continue_block").addEventListener("click", function() {
            closesidebar()
        });

        sidebar_dialoge_block.querySelector(".inc_checkout_basket_block").addEventListener("click", function() {
            window.location.href = INC.clientConfig.checkoutLink;
        });
        var body = document.querySelector('body');
        
        var elSideBarOverlayBlock = document.createElement('div');
        elSideBarOverlayBlock.setAttribute("class", "inc_sidebar_overlay_block");
        elSideBarOverlayBlock.addEventListener("click", function() {
            closesidebar()
        });
        sidebar_dialoge_block.querySelector(".close_sisebar_icon").addEventListener("click", function() {
            closesidebar()
        });
        elSideBarOverlayBlock.style.display = "none";
        if(INC.config.pageType == "pdp"){
            var pdpBlockSiblingsb = document.querySelector('.inc_pdp_block')
            var pdpBlockSiblingsb1 = document.querySelector('#relGoodsArea')
            var pdpBlockSiblingsb2 = document.querySelector('.coupon_campaign_area')
            var pdpBlockSiblingsb3 = document.querySelector('#form2cart .favorite_area')
            if (pdpBlockSiblingsb != null) {
                var sibelm=pdpBlockSiblingsb.nextElementSibling
                sibelm.parentNode.insertBefore(sidebar_dialoge_block, sibelm)
                sibelm.parentNode.insertBefore(elSideBarOverlayBlock, sibelm)
            } else if (pdpBlockSiblingsb1 != null) {
                pdpBlockSiblingsb1.parentNode.insertBefore(sidebar_dialoge_block, pdpBlockSiblingsb1)
                pdpBlockSiblingsb1.parentNode.insertBefore(elSideBarOverlayBlock, pdpBlockSiblingsb1)
            } else if (pdpBlockSiblingsb2 != null) {
                pdpBlockSiblingsb2.parentNode.insertBefore(sidebar_dialoge_block, pdpBlockSiblingsb2)
                pdpBlockSiblingsb2.parentNode.insertBefore(elSideBarOverlayBlock, pdpBlockSiblingsb2)
            } else if (pdpBlockSiblingsb3 != null) {
                pdpBlockSiblingsb3.parentNode.insertBefore(sidebar_dialoge_block, pdpBlockSiblingsb3)
                pdpBlockSiblingsb3.parentNode.insertBefore(elSideBarOverlayBlock, pdpBlockSiblingsb3)
            }
        }
    }
    INC.methods.hideSidebar = function () {
        var sidebarelhide = document.querySelector('.inc_sidebar_modal_block')
        INC.config.sidebarremovedprod = []
        INC.bundles = true;
        document.querySelector('html').style = '';
        document.querySelector('html').classList.remove('inc_overlay')
        document.querySelector('body').classList.remove('inc_popup_open');
        var sidebarouterH = document.querySelector('.sidebar_outer')
        if (sidebarouterH != null) {
            document.querySelector(".inc_sidebar_overlay_block").style.display = "none"
            sidebarelhide.style.display = "none"
            sidebarouterH.style.display = "none"
            sidebarouterH.classList.remove('sidebar_outer_active')
            sidebarelhide.classList.remove('active')
            sidebarelhide.classList.remove('noRecom');
        }
        window.location.reload()
    }
    INC.methods.showSidebar = function(client) {
        if (document.querySelector('.inc_sidebar_modal_block') != null) {
            if (document.querySelector('.inc_sidebar_modal_block') != null) {
                document.querySelector('.inc_sidebar_modal_block').classList.add('noRecom');
            }
            if ((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true && window.innerWidth < 1337) {
                if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0) {
                    setTimeout(function() {
                        if (document.querySelector('.inc_pdp_block') != null) {
                            collection_height = $(".inc_pdp_block").offset().top
                        } else if (document.querySelector('.inc_af_block') != null) {
                            collection_height = $(".inc_af_block").offset().top
                        }
                        document.querySelector('body').setAttribute('style', 'position: fixed;width:100%;')
                    }, 100)
                }
            } 
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
            document.querySelector('.inc_sidebar_modal_block').classList.add("active");
        }
    }
    function closesidebar() {
        document.querySelector('html').classList.remove('inc_overlay');
        INC.methods.hideSidebar();
        INC.config.pdpaddedProductList = [];
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
        if ((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true && window.innerWidth < 1337) {
            if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                document.querySelector('body').style.position = "relative"
            }
        }
    }
    INC.methods.sendBundleClickTracking = function(productId) {
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
        }
        if (document.querySelector(".inc_sidebar_modal_block.active") == null && INC.config.pageType == "pdp") {
            pageType = "100";
        }
        if (document.querySelector(".inc_sidebar_modal_block.active") != null && INC.config.pageType != "productList") {
            pageType = "107";
        }
        var prdcore=INC.dataStore.pdpProductId
        if(INC.config.pageType == 'pdp'){
            prdcore = INC.config.Product_id.split('&')[0].trim()
        }
        INC.methods.trackingEvents("bundleProductClickTracking", { "product_id": productId, "core_product_id": prdcore }, pageType);
    };

    INC.methods.createProductModuleBlock = function (pdpProductId, blockType, bundleProductListCheck, pdpblockel,mainprod) {
        if (INC.dataStore.dataStoreObj.undefined == undefined) {
            var productModuleBlock = generate_html_tag('div','inc_product_module_block')
            var findObj = new INC.classes.FindObj({ id: pdpProductId });
            var productObj = INC.dataStore.methods().getProductById(findObj);
            productModuleBlock.style.userSelect = "none";
            setidstoelm(productModuleBlock,productObj)
            var elProductShowcaseBlock = generate_html_tag('div','inc_product_showcase_block');
            elProductShowcaseBlock.innerHTML = showcase_productcard
            var elProductModalBlock = generate_html_tag('div','inc_product_modal_block');
            elProductModalBlock.innerHTML = modal_productcard
            if (elProductShowcaseBlock != null) {
                elProductShowcaseBlock.setAttribute('role', "contentinfo")
            }
            if (elProductModalBlock != null) {
                elProductModalBlock.setAttribute('role', "contentinfo")
            }
            var productShowcaseBlock = INC.methods.createProductShowcaseBlock(pdpProductId, blockType, bundleProductListCheck, pdpblockel,elProductShowcaseBlock,mainprod);
            var productModalBlock = INC.methods.createProductModalBlock(pdpProductId, blockType, bundleProductListCheck, pdpblockel,elProductModalBlock,mainprod);

            elProductShowcaseBlock.appendChild(productShowcaseBlock);
            elProductModalBlock.appendChild(productModalBlock);
            productModuleBlock.appendChild(elProductShowcaseBlock)
            productModuleBlock.appendChild(elProductModalBlock)
            return productModuleBlock;
        }
    }
    function setidstoelm(productBlock,productObj){
        productBlock.setAttribute('data-id', productObj.id);
        productBlock.setAttribute('data-sku', productObj.sku);
        productBlock.setAttribute('data-main_id', productObj.mainId);
        productBlock.setAttribute('data-bundle_id', productObj.bundleId);
        productBlock.setAttribute('data_main_variant', productObj.mainProdVariant);
        productBlock.setAttribute('data-category_name', productObj.categoryName);
        productBlock.setAttribute('product_type', productObj.ProductType);
        productBlock.classList.add(productObj.ProductType)
    }
    function prodtypedesc(productObj,producttypedetails,prodtypeflag){
        if(productObj.finish != null && productObj.finish != ""){
            prodtypeflag = true
            var inc_prod_finish_block = generate_html_tag('div','inc_prod_finish_block')
            producttypedetails.appendChild(inc_prod_finish_block)
            var inc_prod_finish_title = generate_html_tag('div','inc_prod_finish_title')
            inc_prod_finish_title.innerText = "Finish"
            inc_prod_finish_block.appendChild(inc_prod_finish_title)
            var inc_prod_finish_text = generate_html_tag('div','inc_prod_finish_text')
            inc_prod_finish_text.innerText = productObj.finish
            inc_prod_finish_block.appendChild(inc_prod_finish_text)
        }
        if(productObj.coverage != null && productObj.coverage != ""){
            prodtypeflag = true
            var inc_prod_coverage_block = generate_html_tag('div','inc_prod_coverage_block')
            producttypedetails.appendChild(inc_prod_coverage_block)
            var inc_prod_coverage_title = generate_html_tag('div','inc_prod_coverage_title')
            inc_prod_coverage_title.innerText = "Coverage"
            inc_prod_coverage_block.appendChild(inc_prod_coverage_title)
            var inc_prod_coverage_text = generate_html_tag('div','inc_prod_coverage_text')
            inc_prod_coverage_text.innerText = productObj.coverage
            inc_prod_coverage_block.appendChild(inc_prod_coverage_text)
        }
        if(productObj.underTone != null && productObj.underTone != ""){
            prodtypeflag = true
            var inc_prod_undertone_block = generate_html_tag('div','inc_prod_undertone_block')
            producttypedetails.appendChild(inc_prod_undertone_block)
            var inc_prod_undertone_title = generate_html_tag('div','inc_prod_undertone_title')
            inc_prod_undertone_title.innerText = "Undertone"
            inc_prod_undertone_block.appendChild(inc_prod_undertone_title)
            var inc_prod_undertone_text = generate_html_tag('div','inc_prod_undertone_text')
            inc_prod_undertone_text.innerText = productObj.underTone
            inc_prod_undertone_block.appendChild(inc_prod_undertone_text)
        }
        if(productObj.skinType != null && productObj.skinType != ""){
            prodtypeflag = true
            var inc_prod_skinType_block = generate_html_tag('div','inc_prod_skinType_block')
            producttypedetails.appendChild(inc_prod_skinType_block)
            var inc_prod_skinType_title = generate_html_tag('div','inc_prod_skinType_title')
            inc_prod_skinType_title.innerText = "Skin Type"
            inc_prod_skinType_block.appendChild(inc_prod_skinType_title)
            var inc_prod_skinType_text = generate_html_tag('div','inc_prod_skinType_text')
            inc_prod_skinType_text.innerText = productObj.skinType
            inc_prod_skinType_block.appendChild(inc_prod_skinType_text)
        }
        return prodtypeflag;
    }
    function prepareAdditionalimages(elImgGalleryListBlock,productObj,productBlock){
        var otimg = 0
        productObj.otherImageList.forEach(function (otherImgURLs) {
            var otherImgURL = otherImgURLs;
            var elImgGalleryListItemBlock = generate_html_tag('div','inc_product_img_gallery_list_item_block')
            var imglist = '<div class="inc_product_img_gallery_list_item_img_block"><div class="inc_product_img_gallery_list_item_img"><img class="inc_lazy" data-src="'+otherImgURL+'" src="'+otherImgURL+'" role="img" aria-label="Image"  alt="'+productObj.name+'"></div></div><div class="inc_product_img_gallery_list_item_text_block"><div class="inc_product_img_gallery_list_item_text"></div></div>'
            elImgGalleryListItemBlock.innerHTML = imglist
        
            var elImgGalleryListItemImg = elImgGalleryListItemBlock.querySelector('.inc_product_img_gallery_list_item_img');
        
            var elOtherImgTag = elImgGalleryListItemBlock.querySelector('.inc_product_img_gallery_list_item_img img')
            elOtherImgTag.src = otherImgURL
            elOtherImgTag.setAttribute('alt', productObj.name)
            elOtherImgTag.setAttribute('role', 'img')
            elOtherImgTag.setAttribute('aria-label', 'Image')
            elOtherImgTag.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
            
        
            if (productObj.otherImageList.length > 4) {
                elImgGalleryListItemImg.classList.add('OthImg4');
            }
        
            elImgGalleryListItemBlock.setAttribute('index', otimg)
            elImgGalleryListItemBlock.addEventListener("click", function () {
                Array.prototype.forEach.call(productBlock.querySelectorAll('.inc_product_img_gallery_list_item_block'), function (galleryListItemBlock) {
                    galleryListItemBlock.classList.remove("active");
                });
                elImgGalleryListItemBlock.classList.add("active");
                var imgotherlist = this.querySelector('img').src
                var elImgMainImg = productBlock.querySelector('.inc_product_img_main_img')
                elImgMainImg.querySelector('img').src = imgotherlist;
                elImgMainImg.querySelector('img').setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
            })
        
            elImgGalleryListBlock.appendChild(elImgGalleryListItemBlock);
            if (otimg == 0) {
                elImgGalleryListItemBlock.classList.add('active')
            }
            if (productObj.otherImageList.length > 5) {
                elImgGalleryListItemBlock.parentNode.classList.add("flex-start")
            }
            otimg++;
        });
    }
    
    function prepareqty(productBlock,blockType){
        var elAddText = productBlock.querySelector('.inc_product_desc_add_text');
        var productDescQtyInputText = productBlock.querySelector('.inc_product_qty_input_text');
        var productDescQtyBlock = productBlock.querySelector('.inc_product_qty_block');
        var elQtyBlock = productBlock.querySelector('.inc_product_qty_block');
        var elQtyDownBlock = productBlock.querySelector('.inc_product_qty_down_block');
        var elQtyUpBlock = productBlock.querySelector('.inc_product_qty_up_block');
        elQtyBlock.style.display = "none;"
        var elQtyInput = generate_html_tag('input');
        elQtyInput.setAttribute('type', "number");
        elQtyInput.setAttribute('aria-label', "quantity");
        elQtyInput.setAttribute('min', 1);
        elQtyInput.setAttribute('max', 99);
        elQtyInput.setAttribute('maxlength', 99);
        elQtyInput.value = 1;
        elQtyInput.setAttribute('old_qty', '1');
        elQtyInput.setAttribute("onkeydown", "if(event.key==='.'){event.preventDefault();}");
        elQtyInput.setAttribute('onKeyPress', 'if(this.value.length==3) return false;');
        elQtyInput.setAttribute("oninput", "validity.valid||(value='');");
        elQtyInput.addEventListener("keydown", function (event) {
            var elmth = this
            var keyCode = event.which || event.keyCode;
            if (keyCode === 13) {
                event.preventDefault();
            } else if ((window.jQuery.inArray(event.keyCode, incallowedKeys) != -1) || (keyCode === 65 && (event.ctrlKey || event.metaKey)) || (keyCode >= 35 && keyCode <= 40)) {
                return;
            }
            var charValue = String.fromCharCode(keyCode)
                , valid = /^\d+$/.test(charValue);
            if (!valid) {
                event.preventDefault();
            } else {
                setTimeout(function () {
                    qtyupdateInc(elmth,productBlock,elAddText)
                }, 50);
            }
        });
        elQtyInput.addEventListener('focusout', function () {
            var elmt=this
            setTimeout(function () {
                qtyupdateInc(elmt,productBlock,elAddText)
            }, 50);
        });
        function qtyupdateInc(_elm,prdblk,eladtext){
            if (_elm.value.length == 0) {
                _elm.value = 1;
            }
            if (_elm.value == 0) {
                _elm.value = 1;
            }
            if (_elm.value > 99) {
                _elm.value = 99;
            }

            var productModuleBlock = prdblk.parentNode.parentNode;
            var showcaseProductBlock = productModuleBlock.querySelector('.inc_product_showcase_block').querySelector('.inc_product_block');
            var modalProductBlock = productModuleBlock.querySelector('.inc_product_modal_block').querySelector('.inc_product_block')
            showcaseProductBlock.querySelector('.inc_product_qty_block').querySelector('input').value = parseInt(_elm.value);
            modalProductBlock.querySelector('.inc_product_qty_input_text input').value = parseInt(_elm.value);

            var id = prdblk.getAttribute('data-id');
            var qty = parseInt(_elm.value);
            var main_id = prdblk.getAttribute('data-main_id');
            var bundle_id = prdblk.getAttribute('data-bundle_id');
            var pname = prdblk.querySelector('.inc_product_desc_title_text').textContent;
            var pprice = prdblk.querySelector('.inc_product_desc_price_active_text').textContent.replace('¥', '');
            if (eladtext.textContent == 'Added' || eladtext.textContent == "Update") {
                INC.methods.updateBundleCart({ sku: id, qty: qty }, "add", main_id, bundle_id, pname, pprice);
            }
            if (_elm.value == 1) {
                elQtyBlock.classList.add('singleqty')
            }
        }
        productDescQtyInputText.appendChild(elQtyInput);
    
        var added_text = document.createElement('span');
        added_text.classList.add("inc_add_text");
        productDescQtyInputText.appendChild(added_text);
    
        elQtyDownBlock.addEventListener('click', function () {
            var elinput = this.parentNode.parentNode.parentNode.querySelector('.inc_product_qty_input_text input')
            elinput.value = (elinput.value - 1 < 1) ? 1 : elinput.value - 1;
            var productModuleBlock = productBlock.parentNode.parentNode;
            var showcaseProductBlock = productModuleBlock.querySelector('.inc_product_showcase_block').querySelector('.inc_product_block');
            var modalProductBlock = productModuleBlock.querySelector('.inc_product_modal_block').querySelector('.inc_product_block')
            
            showcaseProductBlock.querySelector('.inc_product_qty_block').querySelector('input').value = parseInt(elinput.value);
            modalProductBlock.querySelector('.inc_product_qty_input_text input').value = parseInt(elinput.value);
    
            var id = productBlock.getAttribute('data-id');
            var qty = parseInt(elinput.value);
            var bundle_id = productBlock.getAttribute('data-bundle_id');
            var main_id = productBlock.getAttribute('data-main_id');
            var pname = productBlock.querySelector('.inc_product_desc_title_text').innerText;
            var pprice = productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('¥', '');
            if (parseInt(elinput.value) == 1 && productDescQtyBlock.classList.contains('singleqty') == trueflag) {
                if (elAddText.textContent == "Added" || elAddText.textContent == "Update" || elAddText.textContent == INC.config.AddedText || elAddText.textContent == INC.config.UpdateText) {
                    document.querySelector('html').classList.remove('inc_overlay')
                    if (INC.config.pageType == "pdp" && blockType == "pdp") {
                        INC.methods.updateBundleCart({ sku: id, qty: qty }, "add", main_id, bundle_id, pname, pprice);
                    }
                }
            } else {
                if (elAddText.textContent == "Added" || elAddText.textContent == "Update" || elAddText.textContent == INC.config.AddedText || elAddText.textContent == INC.config.UpdateText) {
                    INC.methods.updateBundleCart({ sku: id, qty: qty }, "add", main_id, bundle_id, pname, pprice);
                }
            }
            if (elinput.value == 1) {
                elQtyBlock.classList.add('singleqty')
                productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_qty_block').classList.add('singleqty')
                modalProductBlock.querySelector('.inc_product_qty_input_text input').parentNode.parentNode.parentNode.parentNode.classList.add('singleqty');
            }
        });
    
        elQtyUpBlock.addEventListener('click', function () {
            var elinpt = this.parentNode.parentNode.parentNode.querySelector('.inc_product_qty_input_text input')
            elinpt.value = (parseInt(elinpt.value) + 1 > 99) ? 99 : parseInt(elinpt.value) + 1;
            var productModuleBlock = productBlock.parentNode.parentNode;
            var showcaseProductBlock = productModuleBlock.querySelector('.inc_product_showcase_block').querySelector('.inc_product_block');
            var modalProductBlock = productModuleBlock.querySelector('.inc_product_modal_block').querySelector('.inc_product_block')
    
            showcaseProductBlock.querySelector('.inc_product_qty_block').querySelector('input').value = parseInt(elinpt.value);
            modalProductBlock.querySelector('.inc_product_qty_input_text input').value = parseInt(elinpt.value);
    
            modalProductBlock.querySelector('.inc_product_qty_input_text input').parentNode.parentNode.parentNode.parentNode.classList.remove('singleqty');
    
            productDescQtyBlock.classList.remove('singleqty')
            productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_qty_block').classList.remove('singleqty')
            var id = productBlock.getAttribute('data-id');
            var qty = parseInt(elinpt.value);
            var bundle_id = productBlock.getAttribute('data-bundle_id');
            var main_id = productBlock.getAttribute('data-main_id');
            var pname = productBlock.querySelector('.inc_product_desc_title_text').innerText;
            var pprice = productBlock.querySelector('.inc_product_desc_price_active_text').innerText.replace('¥', '');
            if (elAddText.textContent == "Added" || elAddText.textContent == "Update" || elAddText.textContent == INC.config.AddedText || elAddText.textContent == INC.config.UpdateText) {
                INC.methods.updateBundleCart({ sku: id, qty: qty }, "add", main_id, bundle_id, pname, pprice);
            }
        });
    }
    //productBlock_,elproductPriceLabel,update
    function productprice_member(productObj,elPriceActiveText,elPriceRegularText,productBlock_,elproductPriceLabel,update){
    	var allprodData = Object.keys(INC.dataStore.dataStoreObj[productObj.mainId])
        INC.config.price_array = [];
        INC.config.x_price_array = [];
        if (INC.config.usrIdfy == "nonLogin") {
            if (productObj.MemberPrices !=undefined && productObj.MemberPrc != "") {
                var activePrice = parseFloat(productObj.MemberPrices.split('|')[0].split('=')[1]).toFixed(2).toString();
                var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
                for (var n = 0; n < allprodData.length; n++) {
		            if (INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]] != undefined) {
		                var productData = INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]]
		                INC.config.price_array.push(productData.MemberPrices.split('|')[0].split('=')[1]);
		            }
		        }
            } else {
                if (productObj.worthPrice != null && productObj.worthPricee != ""){
                    var activePrice = parseFloat(productObj.worthPrice.split('|')[0].split('=')[1]).toFixed(2).toString();
                    var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
                    for (var n = 0; n < allprodData.length; n++) {
			            if (INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]] != undefined) {
			                var productData = INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]]
			                INC.config.price_array.push(productData.worthPrice.split('|')[0].split('=')[1]);
			            }
			        }
                }
            }
        } else if (INC.config.usrIdfy == "level0"){
            if (productObj.MemberPrices !=undefined && productObj.MemberPrc != "") {
                var activePrice = parseFloat(productObj.MemberPrices.split('|')[1].split('=')[1]).toFixed(2).toString();
                var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
                for (var n = 0; n < allprodData.length; n++) {
		            if (INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]] != undefined) {
		                var productData = INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]]
		                INC.config.price_array.push(productData.MemberPrices.split('|')[1].split('=')[1]);
		            }
		        }
            } else {
                if (productObj.worthPrice != null && productObj.worthPricee != ""){
                    var activePrice = parseFloat(productObj.worthPrice.split('|')[1].split('=')[1]).toFixed(2).toString();
                    var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
                    for (var n = 0; n < allprodData.length; n++) {
			            if (INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]] != undefined) {
			                var productData = INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]]
			                INC.config.price_array.push(productData.worthPrice.split('|')[1].split('=')[1]);
			            }
			        }
                }
            }

            if (productObj.genericField != null){
                if (productObj.genericField.indexOf('-') > 1){
                    if (productObj.genericField.split('|')[1].split('-')[0] != productObj.genericField.split('|')[1].split('-')[1]){
                        if (productBlock_.querySelector('.inc_product_desc_add_block').classList.contains('Inc_checked') == false){
                            elproductPriceLabel.innerHTML = "<span> 特価 </span>" + "¥" +formatter.format(productObj.genericField.split('|')[1].split('-')[0].replace('mp4=','').replace('.0','')
                            ).replace('￥', '').replace('¥', '') + "～" + "<span> ("+INC.config.prcText+") </span>"
                        }
                        for (var n = 0; n < allprodData.length; n++) {
				            if (INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]] != undefined) {
				                var productData = INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]]
				                INC.config.price_array.push(productData.genericField.split('|')[1].split('-')[0].replace('mp4=','').replace('.0',''));
				            }
				        }
                    }
                }
            }
        } else if (INC.config.usrIdfy == "level1"){
            if (productObj.MemberPrices !=undefined && productObj.MemberPrc != ""){
                var activePrice = parseFloat(productObj.MemberPrices.split('|')[2].split('=')[1]).toFixed(2).toString();
                var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
                for (var n = 0; n < allprodData.length; n++) {
		            if (INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]] != undefined) {
		                var productData = INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]]
		                INC.config.price_array.push(productData.MemberPrices.split('|')[2].split('=')[1]);
		            }
		        }
            } else {
                if (productObj.worthPrice != null && productObj.worthPricee != ""){
                    var activePrice = parseFloat(productObj.worthPrice.split('|')[2].split('=')[1]).toFixed(2).toString();
                    var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
                    for (var n = 0; n < allprodData.length; n++) {
			            if (INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]] != undefined) {
			                var productData = INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]]
			                INC.config.price_array.push(productData.worthPrice.split('|')[2].split('=')[1]);
			            }
			        }
                }
            }
            // && update != "update"
            if (productObj.genericField != null){
                if (productObj.genericField.indexOf('-') > 1){
                    if (productObj.genericField.split('|')[2].split('-')[0] != productObj.genericField.split('|')[2].split('-')[1]){
                        if (productBlock_.querySelector('.inc_product_desc_add_block').classList.contains('Inc_checked') == false){
                            elproductPriceLabel.innerHTML = "<span> 特価 </span>" + "¥" +formatter.format(productObj.genericField.split('|')[2].split('-')[0].replace('mp4=','').replace('.0','')
                            ).replace('￥', '').replace('¥', '') + "～" + "<span> ("+INC.config.prcText+") </span>"
                            for (var n = 0; n < allprodData.length; n++) {
					            if (INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]] != undefined) {
					                var productData = INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]]
					                INC.config.price_array.push(productData.genericField.split('|')[2].split('-')[0].replace('mp4=','').replace('.0',''));
					            }
					        }
                        }
                    }
                }
            }
        } else if (INC.config.usrIdfy == "level2"){
            if (productObj.MemberPrices !=undefined && productObj.MemberPrc != ""){
                var activePrice = parseFloat(productObj.MemberPrices.split('|')[3].split('=')[1]).toFixed(2).toString();
                var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
                for (var n = 0; n < allprodData.length; n++) {
		            if (INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]] != undefined) {
		                var productData = INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]]
		                INC.config.price_array.push(productData.MemberPrices.split('|')[3].split('=')[1]);
		            }
		        }
            } else {
                if (productObj.worthPrice != null && productObj.worthPricee != ""){
                    var activePrice = parseFloat(productObj.worthPrice.split('|')[3].split('=')[1]).toFixed(2).toString();
                    var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
                    for (var n = 0; n < allprodData.length; n++) {
			            if (INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]] != undefined) {
			                var productData = INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]]
			                INC.config.price_array.push(productData.worthPrice.split('|')[3].split('=')[1]);
			            }
			        }
                }
            }
            //&& update != "update"
            if (productObj.genericField != null){
                if (productObj.genericField.indexOf('-') > 1){
                    if (productObj.genericField.split('|')[3].split('-')[0] != productObj.genericField.split('|')[3].split('-')[1]){
                        if (productBlock_.querySelector('.inc_product_desc_add_block').classList.contains('Inc_checked') == false){
                            productBlock_.querySelector('.inc_product_desc_add_block').classList.add('showLabel');
                            elproductPriceLabel.innerHTML = "<span> 特価 </span>" + "¥" +formatter.format(productObj.genericField.split('|')[3].split('-')[0].replace('mp4=','').replace('.0','')
                            ).replace('￥', '').replace('¥', '') + "～" + "<span> ("+INC.config.prcText+") </span>"
                            for (var n = 0; n < allprodData.length; n++) {
					            if (INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]] != undefined) {
					                var productData = INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]]
					                INC.config.price_array.push(productData.genericField.split('|')[3].split('-')[0].replace('mp4=','').replace('.0',''));
					            }
					        }
                        }
                    }
                }
            }
        } else if (INC.config.usrIdfy == "level3"){
            if (productObj.MemberPrices !=undefined && productObj.MemberPrc != ""){
                var activePrice = parseFloat(productObj.MemberPrices.split('|')[4].split('=')[1]).toFixed(2).toString();
                var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
                for (var n = 0; n < allprodData.length; n++) {
		            if (INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]] != undefined) {
		                var productData = INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]]
		                INC.config.price_array.push(productData.MemberPrices.split('|')[4].split('=')[1]);
		            }
		        }
            } else {
                if (productObj.worthPrice != null && productObj.worthPricee != ""){
                    var activePrice = parseFloat(productObj.worthPrice.split('|')[4].split('=')[1]).toFixed(2).toString();
                    var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
                    for (var n = 0; n < allprodData.length; n++) {
			            if (INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]] != undefined) {
			                var productData = INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]]
			                INC.config.price_array.push(productData.worthPrice.split('|')[4].split('=')[1]);
			            }
			        }
                }
            }
            // && update != "update"
            if (productObj.genericField != null){
                if (productObj.genericField.indexOf('-') > 1){
                    if (productObj.genericField.split('|')[4].split('-')[0] != productObj.genericField.split('|')[4].split('-')[1]){
                        if (productBlock_.querySelector('.inc_product_desc_add_block').classList.contains('Inc_checked') == false){
                            elproductPriceLabel.innerHTML = "<span> 特価 </span>" + "¥" +formatter.format(productObj.genericField.split('|')[4].split('-')[0].replace('mp4=','').replace('.0','')
                            ).replace('￥', '').replace('¥', '') + "～" + "<span> ("+INC.config.prcText+") </span>"
                            for (var n = 0; n < allprodData.length; n++) {
					            if (INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]] != undefined) {
					                var productData = INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]]
					                INC.config.price_array.push(productData.genericField.split('|')[4].split('-')[0].replace('mp4=','').replace('.0',''));
					            }
					        }
                        }
                    }
                }
            }
        } else if (INC.config.usrIdfy == "level4"){
           	if (productObj.MemberPrices !=undefined && productObj.MemberPrc != ""){
                var activePrice = parseFloat(productObj.MemberPrices.split('|')[5].split('=')[1]).toFixed(2).toString();
                var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
                for (var n = 0; n < allprodData.length; n++) {
		            if (INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]] != undefined) {
		                var productData = INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]]
		                INC.config.price_array.push(productData.MemberPrices.split('|')[5].split('=')[1]);
		            }
		        }
            } else {
                if (productObj.worthPrice != null && productObj.worthPricee != ""){
                    var activePrice = parseFloat(productObj.worthPrice.split('|')[5].split('=')[1]).toFixed(2).toString();
                    var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
                    for (var n = 0; n < allprodData.length; n++) {
			            if (INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]] != undefined) {
			                var productData = INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]]
			                INC.config.price_array.push(productData.worthPrice.split('|')[5].split('=')[1]);
			            }
			        }
                }
            }
            //&& update != "update"
            if (productObj.genericField != null ){
                if (productObj.genericField.indexOf('-') > 1){
                    if (productObj.genericField.split('|')[5].split('-')[0] != productObj.genericField.split('|')[5].split('-')[1]){
                        if (productBlock_.querySelector('.inc_product_desc_add_block').classList.contains('Inc_checked') == false){
                        	if(update != "update") {
	                            setTimeout(function(){
	                                if (productBlock_.querySelector('.inc_product_desc_titlprc_block .inc_product_desc_price_block') != null){
	                                    productBlock_.querySelector('.inc_product_desc_titlprc_block .inc_product_desc_price_block').classList.add('showPriceLabel')
	                                }
	                            },500)
	                        }
                            elproductPriceLabel.innerHTML = "<span> 特価 </span>" + "¥" +formatter.format(productObj.genericField.split('|')[5].split('-')[0].replace('mp4=','').replace('.0','')
                            ).replace('￥', '').replace('¥', '') + "～" + "<span> ("+INC.config.prcText+") </span>"
                            for (var n = 0; n < allprodData.length; n++) {
					            if (INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]] != undefined) {
					                var productData = INC.dataStore.dataStoreObj[productObj.mainId][allprodData[n]]
					                INC.config.price_array.push(productData.genericField.split('|')[5].split('-')[0].replace('mp4=','').replace('.0',''));
					            }
					        }
                        }
                    }
                }
            }
        }
        elPriceRegularText.innerText = "";
        if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
            elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_price')
            elPriceActiveText.innerHTML = "<span> 特価 </span>"  +  "¥" +formatter.format(activePrice).replace('￥', '').replace('¥', '')+ "<span> ("+INC.config.prcText+") </span>"
            elPriceRegularText.innerHTML =  formatter.format(regularPrice) + "<span> ("+INC.config.prcText+") </span>"
        } else {
            elPriceActiveText.innerHTML = "<span> 価格 </span>"  +  "¥" +formatter.format(activePrice).replace('￥', '').replace('¥', '') + "<span> ("+INC.config.prcText+") </span>"
        }
        if (productObj.ProductType == "configurable" && update != "update") {
	        // var allprodData = Object.keys(INC.dataStore.dataStoreObj[productObj.mainId])
	        // INC.config.price_array = [];
	        // INC.config.x_price_array = [];
	        INC.config.price_array = INC.config.price_array.filter(Number);
	        var min = Math.min.apply(Math, INC.config.price_array);
	        var max = Math.max.apply(Math, INC.config.price_array);

	        if ((min != undefined && min != 0) && (min != max)) {
	        	// elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_price')
	            
	            if(elPriceActiveText.parentNode.parentNode.parentNode.classList.contains('is_special_price') == false){
	            	elproductPriceLabel.setAttribute('style','color:#000;')
	            	elproductPriceLabel.innerHTML = "<span> 価格 </span>"  +  "¥" +formatter.format(min).replace('￥', '').replace('¥', '') +'～￥' + formatter.format(max).replace('￥','').replace('¥','')  + "<span> (税込) </span>";
	            }else{
	            	elproductPriceLabel.innerHTML = "<span> 特価 </span>"  +  "¥" +formatter.format(min).replace('￥', '').replace('¥', '') +'～￥' + formatter.format(max).replace('￥','').replace('¥','')  + "<span> (税込) </span>";
	            }
	            if (productBlock_.querySelector('.inc_product_desc_titlprc_block .inc_product_desc_price_block') != null){
                    productBlock_.querySelector('.inc_product_desc_titlprc_block .inc_product_desc_price_block').classList.add('showPriceLabel')
                }
	        }
      	} 
        if (update == "update"){
        	elproductPriceLabel.innerHTML = "<span> 特価 </span>" + "¥" +formatter.format(activePrice).replace('￥', '').replace('¥', '') + "～" + "<span> ("+INC.config.prcText+") </span>"
        	if (productBlock_.querySelector('.inc_product_desc_titlprc_block .inc_product_desc_price_block') != null){
                productBlock_.querySelector('.inc_product_desc_titlprc_block .inc_product_desc_price_block').classList.remove('showPriceLabel')
                productBlock_.querySelector('.inc_product_desc_titlprc_block .inc_product_desc_price_block').classList.remove('hidePriceLabel')
                productBlock_.querySelector('.inc_product_desc_titlprc_block .inc_product_desc_price_block').classList.add('hidePriceLabel')
            }
        }
    }
    INC.methods.createProductShowcaseBlock = function (pdpProductId, blockType, _bundleProductListCheck, _parentblock,elProductShowcaseBlock,mainprod) {
        var productBlock = elProductShowcaseBlock.querySelector('.inc_product_block')
        var findObj = new INC.classes.FindObj({ id: pdpProductId });
        var productObj = INC.dataStore.methods().getProductById(findObj);
        setidstoelm(productBlock,productObj)
        var elHeaderInfoBlck = productBlock.querySelector('.inc_product_info_main_block');
        var elHeader = productBlock.querySelector('.inc_product_header_main_block');
        var elImgBlock = productBlock.querySelector('.inc_product_img_block');
        var elImgGalleryListBlock = productBlock.querySelector('.inc_product_img_gallery_list_block');
        var elTitleTextBlock = productBlock.querySelector('.inc_product_desc_title_text_block');
        var elTitleText = productBlock.querySelector('.inc_product_desc_title_text');
        var elPromo = productBlock.querySelector('.pc_promo_div');
        var elproductPriceLabel = productBlock.querySelector('.inc_product_price_label_block');
        var elPriceblock = productBlock.querySelector('.inc_product_desc_price_block');
        var elPriceActiveText = productBlock.querySelector('.inc_product_desc_price_active_text');
        var elPriceRegularText = productBlock.querySelector('.inc_product_desc_price_regular_text');
        var elAttBlock = productBlock.querySelector('.inc_product_desc_att_block');
        var elAttColorBlock = productBlock.querySelector('.inc_product_desc_att_color_block');
        var elAttColorTitleText = productBlock.querySelector('.inc_product_desc_att_color_title_text');
        var elAttColorListBlock = productBlock.querySelector('.inc_product_desc_att_color_list_block');
        var elAttSizeBlock = productBlock.querySelector('.inc_product_desc_att_size_block');
        var elAttSizeTitleText = productBlock.querySelector('.inc_product_desc_att_size_title_text');
        var elAttSizeTitleTextSelected = productBlock.querySelector('.inc_product_desc_att_size_title_text_selected');
        var elAttSizeListBlock = productBlock.querySelector('.inc_product_desc_att_size_list_block');
        var elAtt0ListBlock = productBlock.querySelector('.inc_product_desc_att_zero_list_block');
        var elAtt3ListBlock = productBlock.querySelector('.inc_product_desc_att_third_list_block');
        var elAtt0Block = productBlock.querySelector('.inc_product_desc_att_zero_block');
        var elAtt3Block = productBlock.querySelector('.inc_product_desc_att_third_block');
        var elAtt0TitleText = productBlock.querySelector('.inc_product_desc_att_zero_title_text');
        var elAtt3TitleTextSelected = productBlock.querySelector('.inc_product_desc_att_third_title_text_selected');
        var elAtt3TitleText = productBlock.querySelector('.inc_product_desc_att_third_title_text');
        
        var elAddBlock = productBlock.querySelector('.inc_product_desc_add_block');
        var elAddText = productBlock.querySelector('.inc_product_desc_add_text');
        var elAddImg = productBlock.querySelector('.inc_product_desc_add_img');
        var elratingsBlock = productBlock.querySelector('.inc_product_desc_ratings_block');
        var elworthPrice = productBlock.querySelector('.inc_product_desc_price_worth_text');
        var eldetailsprodblock = productBlock.querySelector('.inc_product_desc_att_details_block');
        var eladdvarianttext = productBlock.querySelector('.inc_product_variant_simple_text');
        var elconfigtitle = productBlock.querySelector('.inc_product_desc_add_title_text_block');
        var elvariantaddbtn = productBlock.querySelector('.inc_product_desc_att_variant_add_block');
        var elvariantaddbtntext = productBlock.querySelector('.inc_product_desc_att_variant_text');
        var elvariantpopupclose = productBlock.querySelector('.inc_product_desc_variant_popup_close_block');
        var elselectoptaddbtn = productBlock.querySelector('.inc_product_variant_simple_block');
        var elMTitleText = productBlock.querySelector('.inc_product_maufacture_text');
        
        var productDescAddText = productBlock.querySelector('.inc_product_add_text');
        var elQtyAddBtnBlock = productBlock.querySelector('.inc_product_desc_qty_add_btn_block');
        
        elQtyAddBtnBlock.classList.add(productObj.ProductType);
        elproductPriceLabel.innerHTML = "SALE"
        
        if (INC.config.catFlag.length >= 2){
        
            if (_parentblock.querySelector('.inc_pdp_title_text') != null){
                _parentblock.querySelector('.inc_pdp_title_text').innerText = "Buy The Set"
            }
        
        } 
        var pMTitleDiv = document.createElement('div');
        if (productObj.MakerName != null){
            if (window.innerWidth < 820){
                pMTitleDiv.innerText = productObj.MakerName + " " + productObj.manufacturer;
            } else {
                if (productObj.MakerName.length > 10){
                    pMTitleDiv.innerText = productObj.MakerName.substring(0, 10) + "...";
                } else {
                    pMTitleDiv.innerText = productObj.MakerName;
                }
            }
        }
        var manFlink = document.createElement('a');
        if(blockType == "pdp" &&  INC.config.Product_id ==  productObj.mainId) {
            manFlink.setAttribute('style','cursor: default; text-decoration: none;')
        }else{
            manFlink.href = productObj.url+"?car=gr-dmg-bundle";
        }
        if (productObj.MakerName != null){
            manFlink.setAttribute('title', productObj.MakerName)
        }
        manFlink.setAttribute('data-eventcategory', "gr-dmg-bundle")
        manFlink.appendChild(pMTitleDiv);
        elMTitleText.appendChild(manFlink);
        
        if(window.innerWidth < 821){
            var prodtypeflag = false;
            var producttypedetails_mobile_view = generate_html_tag('div','inc_details_mobile_quick_view')
            var producttypedetails = generate_html_tag('div','inc_producttype_details_block')
            var prod_quick_view_close = generate_html_tag('div','prod_quick_view_close')
            producttypedetails_mobile_view.appendChild(prod_quick_view_close)
            prod_quick_view_close.addEventListener('click',function(){
                document.querySelector('html').classList.remove('inc_overlay')
                document.querySelector('body').classList.remove('quick_view_active_inc')
                if(document.querySelector('.inc_details_mobile_quick_view.quick_view_active') != null){
                    document.querySelector('.inc_product_block.quick_view_open').classList.remove('quick_view_open')
                    document.querySelector('.inc_details_mobile_quick_view.quick_view_active').classList.remove('quick_view_active')
                }
            })
            producttypedetails_mobile_view.appendChild(producttypedetails)
            prodtypedesc(productObj,producttypedetails,prodtypeflag)
            if(prodtypeflag == trueflag){
                var prod_quick_view_btn = generate_html_tag('div','prod_quick_view_btn')
                prod_quick_view_btn.innerText = "More Info"
                prod_quick_view_btn.addEventListener('click',function(){
                    if(productBlock.querySelector('.inc_details_mobile_quick_view.quick_view_active') != null){
                        document.querySelector('html').classList.remove('inc_overlay')
                        document.querySelector('body').classList.remove('quick_view_active_inc')
                        productBlock.classList.remove('quick_view_open')
                        productBlock.querySelector('.inc_details_mobile_quick_view.quick_view_active').classList.remove('quick_view_active')
                    }else{
                        document.querySelector('body').classList.add('quick_view_active_inc')
                        document.querySelector('html').classList.add('inc_overlay')
                        productBlock.classList.add('quick_view_open')
                        productBlock.querySelector('.inc_details_mobile_quick_view').classList.add('quick_view_active')
                    }
                    
                })
                var prodplacement = productBlock.querySelector('.inc_product_desc_block')
                if(prodplacement != null){
                    prodplacement.appendChild(prod_quick_view_btn)
                    prodplacement.appendChild(producttypedetails_mobile_view)
                }
            }
        }

        elvariantpopupclose.addEventListener('click', function () {
            if (document.querySelector('.inc_product_modal_block.active') == null && document.querySelector('.inc_sidebar_modal_block.active') == null) {
                document.querySelector('html').classList.remove('inc_overlay')
            }
            this.parentNode.classList.remove('active')
            productBlock.classList.remove('show_overlay')
        });
        elHeaderInfoBlck.setAttribute('data-id', productObj.id);
        elHeaderInfoBlck.setAttribute('data-sku', productObj.sku);
        elHeaderInfoBlck.setAttribute('data-main_id', productObj.mainId);
        elHeaderInfoBlck.setAttribute('data-bundle_id', productObj.bundleId);

        elHeader.querySelector('.inc_product_header_img_block').addEventListener("click", function () {
            productBlock.parentNode.classList.remove("active");
        });
        var elImgMainImg = elImgBlock.querySelector('.inc_product_img_main_img');
        var elImgTag1 = generate_html_tag('img');
        elImgTag1.src = productObj.imageURLMain
        elImgTag1.setAttribute('data-src',productObj.imageURLMain)
        elImgTag1.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
        elImgTag1.setAttribute('role', 'img')
        elImgTag1.setAttribute('aria-label', 'Image')
        elImgTag1.setAttribute('alt', productObj.nameMain)
        elImgTag1.setAttribute('data-mouseover', productObj["otherImageList"])
        elImgTag1.setAttribute('data-imageURL', productObj["imageURLMain"])
        var productLink = document.createElement('a');
        
        productLink.setAttribute('rel', 'noopener noreferrer')
        productLink.href = productObj.url+"?car=gr-dmg-bundle";
        productLink.appendChild(elImgTag1);
        productLink.setAttribute('otherImageList', productObj["otherImageList"])
        productLink.setAttribute('imageURL', productObj["imageURLMain"])
        productLink.setAttribute('data-eventcategory', "gr-dmg-bundle")
        add_swipe(productLink)
        if(blockType == "pdp" &&  INC.config.Product_id !=  productObj.mainId) {
            productLink.href = productObj.url+"?car=gr-dmg-bundle";
        } else {
            productLink.setAttribute('style','cursor: default; text-decoration: none;')
        }
        elImgMainImg.appendChild(productLink);

        if (INC.config.Product_id == productObj.mainId){
            var pMainPrd = document.createElement('div');
            pMainPrd.classList.add('pMainPrd')
            pMainPrd.innerText = "閲覧中";
            elImgMainImg.appendChild(pMainPrd)
        }
        productLink.addEventListener('click', function (e) {
            if(window.innerWidth < 821 || mainprod == "mainprod"){
                e.preventDefault()
            }
        })
        productLink.setAttribute("href", productObj.url+"?car=gr-dmg-bundle");
        if(mainprod != "mainprod"){
            elImgMainImg.addEventListener("click", function (e) {
                e.preventDefault()
                INC.methods.sendBundleClickTracking(productObj.mainId);
                var href = productBlock.querySelector('.inc_product_img_main_img a').href
                setTimeout(function(){
                    window.location.href = href
                },2000)
                getTrackingPixel();
            });
        }
        elImgGalleryListBlock.innerHTML = "";
        if ((productObj.otherImageList != null) && productObj.otherImageList.length > 1) {
            prepareAdditionalimages(elImgGalleryListBlock,productObj,productBlock)
        }
        if(mainprod != "mainprod"){
            elTitleTextBlock.addEventListener("click", function (e) {
                e.preventDefault()
                INC.methods.sendBundleClickTracking(productObj.mainId);
                getTrackingPixel();
                var href = productBlock.querySelector('.inc_product_img_main_img a').href
                setTimeout(function(){
                    window.location.href = href
                },2000)
            });
        }

        if (productObj.PromotionalMessage != null && productObj.PromotionalMessage != ""){
            elPromo.innerText = productObj.PromotionalMessage;
            elPromo.classList.add('avail')
        } else {
            elPromo.classList.add('empty')
        }
 
        var pTitleDiv = document.createElement('div');
        pTitleDiv.innerHTML = productObj.nameMain;
        var field1 = productObj.ratingsCount
        var field2 = productObj.reviewsCount
        INC.methods.get_product_ratings(field1, field2, elratingsBlock);
        var pLink = document.createElement('a');
        if(blockType == "pdp" &&  INC.config.Product_id ==  productObj.mainId) {
            pLink.setAttribute('style','cursor: default; text-decoration: none;')
        }else{
            pLink.href = productObj.url+"?car=gr-dmg-bundle";
        }
        pLink.setAttribute('style', 'cursor: default;text-decoration: none;')
        pLink.href = productObj.url+"?car=gr-dmg-bundle";
        pLink.addEventListener('click', function (ev) {
            if(window.innerWidth < 821 || mainprod == "mainprod"){
                ev.preventDefault()
            }
        })
        pLink.setAttribute('data-eventcategory', "gr-dmg-bundle")
        pLink.setAttribute('style', 'text-transform: unset;')
        // pLink.setAttribute('title', productObj.nameMain)
        if (INC.config.pageType == "pdp" && INC.config.recommendation) {
            pLink.setAttribute('href', productObj.url+"?car=gr-dmg-bundle")
        }
        pLink.appendChild(pTitleDiv);
        elTitleText.appendChild(pLink);
        // var activePrice = parseFloat(productObj.activePriceMain).toFixed(2).toString();
        // var regularPrice = parseFloat(productObj.regularPriceMain).toFixed(2).toString();
        elPriceRegularText.textContent = "";
        var elproductPriceLabel = productBlock.querySelector('.inc_product_price_label_block')

        productprice_member(productObj,elPriceActiveText,elPriceRegularText,productBlock,elproductPriceLabel)
        
        if (window.innerWidth < 821) {
            var inc_empty_popup = generate_html_tag('div', 'inc_empty_popup');
            eldetailsprodblock.appendChild(inc_empty_popup);
        }
        var prodlinkprice = document.createElement('a');
        if(blockType == "pdp" &&  INC.config.Product_id !=  productObj.mainId) {
            prodlinkprice.href = productObj.url+"?car=gr-dmg-bundle";
        } else {
            prodlinkprice.setAttribute('style','cursor: default; text-decoration: none;')
        }
        
        elPriceblock.appendChild(prodlinkprice);
        if (blockType == "am") {
            productDescAddText.innerText = "まとめてカートに入れる"
        } else if (blockType == "sidebar") {
            productDescAddText.innerText = "まとめてカートに入れる"
        } else {
            productDescAddText.innerText = "Add To Bundle"
        }
        productDescAddText.addEventListener('click', function () {
            this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
        });

        prepareqty(productBlock,blockType)

        findObj = new INC.classes.FindObj({ mainId: productObj.mainId });
        var productColorsObj = INC.dataStore.methods().getProductColorsObj(findObj);
        var product0Obj = INC.dataStore.methods().getProductopt0Obj(findObj);
        var productSizesObj = INC.dataStore.methods().getProductSizesObj(findObj);
        var product3Obj = INC.dataStore.methods().getProductopt3Obj(findObj);
        
        elAtt0ListBlock.innerHTML = "";
        elAttSizeListBlock.innerHTML = "";
        elAttColorListBlock.innerHTML = "";
        elAtt3ListBlock.innerHTML = "";
        if (product0Obj.att0Array.length > 0) {
            if (product0Obj["att0Array"][0].code != "Color") {
                findObj = new INC.classes.FindObj({ mainId: productObj.mainId });
                elAtt0ListBlock.innerHTML = "";
                if (product0Obj["att0Array"].length > 0) {
                    productzeroatt(elAtt0TitleText,elAtt0Block,product0Obj,elAtt0ListBlock,blockType,productBlock)
                }
            }
        }
        productsizeatt(elAttSizeTitleText,elAttSizeBlock,productSizesObj,elAttSizeListBlock,elAttSizeTitleTextSelected,blockType)
        productcoloratt(productColorsObj,productBlock,elAttColorListBlock,blockType,elAttColorBlock,elAttColorTitleText)
        productthirdatt(product3Obj,elAtt3TitleText,elAtt3Block,elAtt3ListBlock,blockType,elAtt3TitleTextSelected)
        if (productSizesObj.sizeArray.length > 0 && product0Obj["att0Array"].length > 0){
            elAttBlock.classList.add('moreThanOne')
        }
        if (productColorsObj["colorArray"].length > 0 && product0Obj["att0Array"].length > 0){
            elAttBlock.classList.add('moreThanOne')
        }
        if (product0Obj["att0Array"].length > 0) {
            productBlock.querySelector('.inc_variant_zero_tag').parentNode.style.display="none"
            _parentblock.classList.add('variant_avail')
            productBlock.querySelector('.inc_product_desc_att_zero_title_block').addEventListener('click', function (e) {
                if(document.querySelector('.inc_product_desc_att_zero_block.show_dropdown') != e.currentTarget){
                    if(e.currentTarget.parentNode.classList.contains('show_dropdown') == falseflag){
                        zeroremshowdrop()
                    }
                }
                colorshowdrop()
                sizehowdrop()
                thirshowdrop()
                this.parentNode.classList.toggle('show_dropdown')
            })
        }
        if (productColorsObj["colorArray"].length > 0) {
            _parentblock.classList.add('variant_avail')
            productBlock.querySelector('.inc_variant_color_tag').parentNode.style.display="none"
            productBlock.querySelector('.inc_product_desc_att_color_title_block').addEventListener('click', function (e) {
                if(document.querySelector('.inc_product_desc_att_color_block.show_dropdown') != e.currentTarget){
                    if(e.currentTarget.parentNode.classList.contains('show_dropdown') == falseflag){
                        colorshowdrop()
                    }
                }
                zeroremshowdrop()
                this.parentNode.classList.toggle('show_dropdown')
            })
        }
        if (productSizesObj.sizeArray.length > 0) {
            _parentblock.classList.add('variant_avail')
            productBlock.querySelector('.inc_variant_size_tag').parentNode.style.display="none"
            productBlock.querySelector('.inc_product_desc_att_size_block .inc_product_desc_att_size_title_block').addEventListener('click', function (e) {
                if(document.querySelector('.inc_product_desc_att_size_block.show_dropdown') != e.currentTarget){
                    if(e.currentTarget.parentNode.classList.contains('show_dropdown') == falseflag){
                       sizehowdrop()
                    }
                }
                thirshowdrop()
                zeroremshowdrop()
                this.parentNode.classList.toggle('show_dropdown')
            })
        }
        if (product3Obj.att3Array.length > 0) {
            _parentblock.classList.add('variant_avail')
            productBlock.querySelector('.inc_variant_tag').parentNode.style.display="none"
            productBlock.querySelector('.inc_product_desc_att_third_title_block').addEventListener('click', function (e) {
                if(document.querySelector('.inc_product_desc_att_third_block.show_dropdown') != e.currentTarget){
                    if(e.currentTarget.parentNode.classList.contains('show_dropdown') == falseflag){
                        zeroremshowdrop()
                        sizehowdrop()
                    }
                }
                zeroremshowdrop()
                sizehowdrop()
                
                this.parentNode.classList.toggle('show_dropdown')
            })
        }
        function zeroremshowdrop(){
            if(document.querySelector('.inc_product_desc_att_zero_block.show_dropdown') != null){
                document.querySelector('.inc_product_desc_att_zero_block.show_dropdown').classList.remove('show_dropdown')
            }
        }
        function colorshowdrop(){
            if(document.querySelector('.inc_product_desc_att_color_block.show_dropdown') != null){
                document.querySelector('.inc_product_desc_att_color_block.show_dropdown').classList.remove('show_dropdown')
            }
        }
        function sizehowdrop(){
            if(document.querySelector('.inc_product_desc_att_size_block.show_dropdown') != null){
                document.querySelector('.inc_product_desc_att_size_block.show_dropdown').classList.remove('show_dropdown')
            }
        }
        function thirshowdrop(){
            if(document.querySelector('.inc_product_desc_att_third_block.show_dropdown') != null){
                document.querySelector('.inc_product_desc_att_third_block.show_dropdown').classList.remove('show_dropdown')
            }
        }
        
        var sizezero = INC.dataStore.methods().getProductopt0Obj(findObj)
        if (productColorsObj["colorArray"].length == 0 && sizezero["att0Array"].length == 0) {
            elAttBlock.classList.add('attributes_not_avail')
            eladdvarianttext.textContent = "Add"
            switch (blockType) {
                case "pdp": eladdvarianttext.textContent = "Add To Bundle"; break;
                case "sidebar": eladdvarianttext.textContent = "まとめてカートに入れる"; break;
                case "am": eladdvarianttext.textContent = "まとめてカートに入れる"; break;
            }
            eladdvarianttext.classList.add('simple')
        } else if (productColorsObj["colorArray"].length > 0) {
            elAttBlock.classList.add('attributes_avail')
            elAttSizeTitleText.textContent = "";
            eladdvarianttext.textContent = "カラーを選ぶ";
            eladdvarianttext.classList.add('config')
            // elconfigtitle.textContent = "Please select a Color";
            switch (blockType) {
                case "pdp": elvariantaddbtntext.textContent = "Add To Bundle"; break;
                case "sidebar": elvariantaddbtntext.textContent = "まとめてカートに入れる"; break;
                case "am": elvariantaddbtntext.textContent = "まとめてカートに入れる"; break;
            }
            eladdvarianttext.classList.remove('simple')
        } else if (sizezero["att0Array"].length > 0) {
            eladdvarianttext.classList.remove('simple')
            eladdvarianttext.textContent = "カラーを選ぶ";
            eladdvarianttext.classList.add('config')
            elAttBlock.classList.add('attributes_avail')
            if (elAttSizeTitleText.textContent == null){
             elAttSizeTitleText.textContent = "";
            }
            // elconfigtitle.textContent = "Please select your Size";
            switch (blockType) {
                case "pdp": elvariantaddbtntext.textContent = "Add To Bundle"; break;
                case "sidebar": elvariantaddbtntext.textContent = "まとめてカートに入れる"; break;
                case "am": elvariantaddbtntext.textContent = "まとめてカートに入れる"; break;
            }
        }
        if(productObj.ProductType == "configurable"){
        	INC.methods.updateSelectedTxt(productBlock,"modal")
        }
        elvariantaddbtn.addEventListener('click', function () {
            var moduleblk = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
            var flag_check = INC.methods.checkVariantSelection(moduleblk)
            if ((this.textContent.trim() == "Update" || this.parentNode.classList.contains('config_avail') == trueflag) && this.innerText.trim() != "まとめてカートに入れる") {
                if (flag_check == 1 || flag_check == 3) {
                    if (document.querySelector('.inc_product_modal_block.active') == null && document.querySelector('.inc_sidebar_modal_block.active') == null) {
                        document.querySelector('html').classList.remove('inc_overlay')
                    }
                    this.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()
                    this.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()
                    productBlock.classList.remove('show_overlay')
                    if (this.textContent.trim() == "Add") {
                        this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
                    }
                } else {
                    if (flag_check == 2 || flag_check == 0) {
                        if (flag_check != 0) {
                            if (this.parentNode.parentNode.querySelector('.inc_variant_tag') != null) {
                                // this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select a Color";
                                // this.parentNode.parentNode.querySelector('.inc_variant_tag').setAttribute('style', 'border:1px solid #E52B45;')
                            }
                        }

                        // if (this.parentNode.querySelector('.inc_product_desc_add_title_text_block') != null) {
                        //     if (this.parentNode.getAttribute('data-color') == null && this.parentNode.getAttribute('data-zero') != null && this.parentNode.getAttribute('data-size') != null) {
                        //         this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select your Size and Color options";
                        //     } else if (this.parentNode.getAttribute('data-color') != null && this.parentNode.querySelectorAll('inc_product_desc_att_color_list_item_block.active').length > 0) {
                        //         this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select your Size";
                        //     } else if (this.parentNode.getAttribute('data-zero') != null || this.parentNode.getAttribute('data-size') != null) {
                        //         this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select a Color";
                        //     }
                        //     this.parentNode.querySelector('.inc_product_desc_add_title_text_block').setAttribute('style', 'display:block;')
                        // }

                    }
                }
            } else {
                if (this.innerText.trim() == "まとめてカートに入れる" || this.innerText.trim() == "SELECT") {
                    if (flag_check == 1 || flag_check == 3) {
                        if (document.querySelector('.inc_product_modal_block.active') == null && document.querySelector('.inc_sidebar_modal_block.active') == null) {
                            document.querySelector('html').classList.remove('inc_overlay')
                        }
                        this.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()
                        this.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()

                        productBlock.classList.remove('show_overlay')
                        if (this.textContent.trim() == "まとめてカートに入れる" || this.textContent.trim() == "SELECT" || this.textContent.trim() == "Add") {
                            this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
                        }
                    } else {
                        if (flag_check == 2 || flag_check == 0) {
                            // if (this.parentNode.querySelector('.inc_product_desc_add_title_text_block') != null) {
                            //     if (this.parentNode.getAttribute('data-color') == null && this.parentNode.getAttribute('data-zero') == null && this.parentNode.getAttribute('data-size') == null) {
                            //         this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select your Size and Color options";
                            //     } else if (this.parentNode.getAttribute('data-zero') == null) {
                            //         this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select your Size";
                            //     } else if (this.parentNode.getAttribute('data-zero') != null || this.parentNode.getAttribute('data-size') != null) {
                            //         this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select a Color";
                            //     }
                            //     this.parentNode.querySelector('.inc_product_desc_add_title_text_block').setAttribute('style', 'display:block;')
                            // }

                            // if (flag_check == 0) {
                            //     if (this.parentNode.querySelector('.inc_product_desc_add_title_text_block') != null) {
                            //         this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select your size";
                            //     }
                            // }
                        }
                    }
                } else {
                    if (flag_check == 1 || flag_check == 3) {
                        this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
                        this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()
                    } else {
                        if (flag_check == 2 || flag_check == 0) {
                            // if (flag_check != 0) {
                            //     if (this.parentNode.parentNode.querySelector('.inc_variant_tag') != null) {
                            //         this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select a Color";
                            //     }
                            // }

                            // if (this.parentNode.querySelector('.inc_product_desc_add_title_text_block') != null) {
                            //     if (this.parentNode.getAttribute('data-color') == null && this.parentNode.getAttribute('data-zero') == null && this.parentNode.getAttribute('data-size') == null) {
                            //         this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select your Size and Color options";
                            //     } else if (this.parentNode.getAttribute('data-color') != null) {
                            //         this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select your Size";
                            //     } else if (this.parentNode.getAttribute('data-zero') != null || this.parentNode.getAttribute('data-size')) {
                            //         this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select a Color";
                            //     }
                            //     this.parentNode.querySelector('.inc_product_desc_add_title_text_block').setAttribute('style', 'display:block;')
                            // }


                            if (flag_check == 0) {
                                if (this.parentNode.querySelector('.inc_product_desc_add_title_text_block') != null) {
                                    // this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select your size";
                                }
                            }
                        }
                    }
                }

            }
        })

        elselectoptaddbtn.addEventListener('click', function () {
            if (productBlock.querySelector('.close_read_more') != null) {
                productBlock.querySelector('.close_read_more').click()
            }

            var productModuleBlock = productBlock.parentNode.parentNode
            var flag_check = INC.methods.checkVariantSelection(productModuleBlock)

            if (productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block') != null) {
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block').click()
            }
            if (document.querySelector('.inc_sidebar_modal_block.active') == null) {
                if ((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true && window.innerWidth < 1337) {
                    if (navigator.userAgent.toLowerCase().indexOf('safari') >= 0 && navigator.userAgent.toLowerCase().indexOf('chrome') == -1) {
                        document.querySelector('body').style.position = "relative"
                    }
                }
                if ((document.querySelector('.inc_pdp_block') != null || document.querySelector('.inc_af_block') != null) && onloadpdp == true && window.innerWidth < 1337) {
                    if (window.innerWidth < 819) {
                        if (document.querySelector('.inc_pdp_block') != null) {
                            collection_height = $(".inc_pdp_block").offset().top
                        } else if (document.querySelector('.inc_af_block') != null) {
                            collection_height = $(".inc_af_block").offset().top
                        }
                    }
                }
                document.querySelector('html').classList.remove('inc_overlay');
            }
            Array.prototype.forEach.call(document.querySelectorAll('.inc_product_modal_block'), function(el) {
                el.classList.remove("active");
            });
            if (document.querySelector('.inc_sidebar_modal_block.active') == null) {
                document.querySelector('html').classList.add('inc_overlay');
            }
            if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
                document.querySelector('.inc_sidebar_modal_block.active').classList.add('overflow_visible')
            }
            if (this.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == true) {
                this.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block').classList.add("active")
            } else {
                this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block').classList.add("active")
            }
        })
        switch (blockType) {
            case "pdp": elAddText.textContent = INC.config.AddText; break;
            case "sidebar": elAddText.textContent = INC.config.AddToCartText; break;
            case "am": elAddText.textContent = INC.config.AddToCartText; break;
        }
        elAddBlock.addEventListener("click", function () {
            var productModuleBlock = productBlock.parentNode.parentNode;
            var modalProductBlock = productModuleBlock.querySelector('.inc_product_modal_block').querySelector('.inc_product_block')
            var flag_check = INC.methods.checkVariantSelection(productModuleBlock)
            var sku = productBlock.getAttribute('data-sku');
            var mainId = productBlock.getAttribute('data-main_id');
            var main_id = productBlock.getAttribute('data-main_id');
            var bundle_id = productBlock.getAttribute('data-bundle_id');
            var pname = productBlock.querySelector('.inc_product_desc_title_text').textContent;
            var pprice = productBlock.querySelector('.inc_product_desc_price_active_text').textContent.replace('¥', '');
            var elqtyvalue = productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_qty_block input')
            var qty = parseInt(elqtyvalue.value);
            if (qty < 1){
                qty = 1
            }
            var prod_card = elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
            var prodflag=false;
            if (document.querySelector('.inc_sidebar_modal_block.active') == null) {
                if (flag_check == 1 || onloadpdp == falseflag || onloadpdp_delete == falseflag ||  INC.config.clientvariantclick == true) {
                    if(onloadpdp == false || productModuleBlock.querySelector('.inc_product_modal_block.active') != null || productModuleBlock.querySelector('.inc_product_desc_att_block.config_avail.elipsis_inc') != null){
                        prodflag = true
                    } else {
                        if(elAddText.textContent != INC.config.AddedText){
                            productModuleBlock.querySelector('.inc_product_variant_simple_text').click()
                        }
                    }
                }else{
                    if (document.querySelector('.inc_product_modal_block.active') == null) {
                        if (document.querySelector('.inc_pdp_bundle_block.active .inc_pdp_bundle_cart_title_img_block') != null) {
                            document.querySelector('.inc_pdp_bundle_block.active .inc_pdp_bundle_cart_title_img_block').click()
                        }
                        productModuleBlock.querySelector('.inc_product_variant_simple_text').click()
                        if(elAddText.textContent == INC.config.AddText){
                            if (document.querySelector('.inc_product_modal_block.active') == null) {
                                if (window.innerWidth < 821) {
                                    productModuleBlock.querySelector('.inc_product_variant_simple_text').click()
                                } else {
                                    productModuleBlock.querySelector('.inc_product_details_prod_block').click()
                                }
                            }
                            if (productModuleBlock.querySelector('.inc_product_variant_simple_text').getAttribute('title') != null){
                            	var textsel_=productModuleBlock.querySelector('.inc_product_variant_simple_text').getAttribute('title');
                                productModuleBlock.querySelector('.inc_product_variant_simple_text').textContent = textsel_.toUpperCase()
                                productModuleBlock.querySelector('.inc_product_desc_att_size_block .inc_product_desc_att_size_title_text').textContent = textsel_.toUpperCase().replace('CM','cm')

                            }
                        }
                    }
                }
                if(elAddText.textContent == INC.config.AddText){
                    if(prodflag == trueflag){
                        elAddText.textContent = INC.config.AddedText;
                        elAddText.classList.add('added');
                        productDescAddText.textContent = INC.config.AddedText
                        elAddText.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').classList.add('Inc_checked');
                        var pListItemBlock = document.querySelector('.inc_pdp_bundle_product_list_item_block' + "[data-main_id=\"" + mainId + "\"]");
                        modalProductBlock.querySelector('.inc_product_desc_add_text').textContent = INC.config.UpdateText;
                        if (pListItemBlock != null) {
                            pListItemBlock.classList.add('product_added');
                            pListItemBlock.querySelector('.inc_pdp_bundle_product_list_item_added_btn_img').classList.add("checked");
                        }
                        elAddImg.classList.add("checked");
                        modalProductBlock.querySelector('.inc_product_desc_add_img').classList.add("checked");
                        elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.style.opacity="1"
                        if (window.innerWidth > 820){
                            if (elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className == 'inc_pdp_bundle_product_list_main_block'){
                                
                                document.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_desc_title_block').style.pointerEvents = "auto";
                                if (document.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_variant_simple_text').classList.contains('config')){
                                    document.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_variant_simple_block').style.pointerEvents = "auto"
                                    document.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_variant_simple_text').style.pointerEvents = "auto"
                                }
                            } else {
                                if (elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className == "inc_pdp_product-main_block"){
                                    document.querySelector('.inc_product_desc_title_block').style.pointerEvents = "auto"
                                    if (document.querySelector('.inc_product_variant_simple_text').classList.contains('config')){
                                        document.querySelector('.inc_product_variant_simple_block').style.pointerEvents = "auto"
                                        document.querySelector('.inc_product_variant_simple_text').style.pointerEvents = "auto"
                                    }
                                }
                            }
                        }
                        if (INC.config.pageType == "pdp" && blockType == "pdp") {
                            INC.methods.updateBundleCart({ sku: sku, qty: qty }, "add", main_id, bundle_id, pname, pprice);
                        }
                        if (prod_card != null) {
                            if (prod_card.querySelector('.inc_product_modal_block.active') != null) {
                                if(inc_scroll_height > 100){
                                    window.scrollTo(0,inc_scroll_height);
                                }
                                prod_card.querySelector('.inc_product_modal_block.active').classList.remove('active')
                            }
                        }
                        productModuleBlock.querySelector('.inc_product_variant_simple_block').classList.add('added_inc')
                        productModuleBlock.querySelector('.inc_product_desc_qty_add_btn_block').classList.add('added_inc')
                        if(productModuleBlock.querySelector('.inc_product_desc_qty_add_btn_block .inc_add_text')!=null){
                            productModuleBlock.querySelector('.inc_product_desc_qty_add_btn_block .inc_add_text').innerText = "Added to Bundle";
                        }
                        productModuleBlock.querySelector('.inc_product_add_block').classList.add('added_inc')
                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_add_block').classList.add('added_inc')
                        productModuleBlock.querySelector('.inc_product_desc_att_variant_text').textContent = "Update"
                        productModuleBlock.querySelector('.inc_product_variant_simple_text').innerText = "";
                        if (window.innerWidth > 820){
                            var optimg = null
                            var optionimage = productModuleBlock.getAttribute('optimage')
                            if (optionimage != null){
                                optimg = generate_html_tag('img')
                                optimg.src = optionimage
                                productModuleBlock.querySelector('.inc_product_variant_simple_text').appendChild(optimg)
                            }
                            var variant_span1 = generate_html_tag('span','variant_span')
                            variant_span1.innerText = productModuleBlock.querySelector('.inc_product_variant_simple_text').getAttribute('title')
                            productModuleBlock.querySelector('.inc_product_variant_simple_text').appendChild(variant_span1)
                        }
                    }
                }else if((elAddText.textContent == INC.config.AddedText) || (flag_check == 2 && elAddText.classList.contains('added') == true)){
                    if (modalProductBlock.querySelector('.inc_product_desc_add_text').textContent != INC.config.UpdateText && prod_card.querySelector('.inc_product_modal_block.active') != null  || (flag_check == 2 && elAddText.classList.contains('added') == true)) {
                        elAddText.textContent = INC.config.AddText;
                        productDescAddText.textContent = INC.config.AddText
                        elAddText.classList.remove('added');
                        elAddText.parentNode.parentNode.classList.remove('Inc_checked');
                        modalProductBlock.querySelector('.inc_product_desc_add_text').textContent = INC.config.UpdateText;
                        var pListItemBlock1 = document.querySelector('.inc_pdp_bundle_product_list_item_block' + "[data-main_id=\"" + mainId + "\"]");
                        if (pListItemBlock1 != null) {
                            pListItemBlock1.classList.remove('product_added');
                            pListItemBlock1.querySelector('.inc_pdp_bundle_product_list_item_added_btn_img').classList.remove("checked");
                        }
                        elAddImg.classList.remove("checked");
                        modalProductBlock.querySelector('.inc_product_desc_add_img').classList.remove("checked");
                        eladdfn_(productModuleBlock)
                        if (INC.config.pageType == "pdp" && blockType == "pdp") {
                            INC.methods.updateBundleCart({ sku: sku, qty: qty }, "sub", main_id, bundle_id, pname, pprice);
                        }
                    } else {
                        if (prod_card.querySelector('.inc_product_modal_block.active') == null) {
                            elAddText.textContent = INC.config.AddText;
                            productDescAddText.textContent = INC.config.AddText
                            elAddText.classList.remove('added');
                            elAddText.parentNode.parentNode.classList.remove('Inc_checked');
                            if (document.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_variant_simple_text').style.pointerEvents != 'none'
                                    ) {
                                // elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.style.opacity="0.5"
                            }
                            if(window.innerWidth > 820){
                                if (elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className == 'inc_pdp_bundle_product_list_main_block'){
                                    document.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_desc_title_block').style.pointerEvents = "none";
                                    if (document.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_variant_simple_text').classList.contains('config')){
                                        document.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_variant_simple_block').style.pointerEvents = "none";
                                        document.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_variant_simple_text').style.pointerEvents = "none";
                                    }
                                       
                                } else {
                                    if (document.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_variant_simple_text').style.pointerEvents != 'none'
                                    ) {
                                        if (elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className == "inc_pdp_product-main_block"){
                                            document.querySelector('.inc_product_desc_title_block').style.pointerEvents = "none"
                                            if (document.querySelector('.inc_product_variant_simple_text').classList.contains('config')){
                                                document.querySelector('.inc_product_variant_simple_block').style.pointerEvents = "none"
                                                document.querySelector('.inc_product_variant_simple_text').style.pointerEvents = "none"
                                            }
                                        }
                                    }
                                }
                            }
                            modalProductBlock.querySelector('.inc_product_desc_add_text').textContent = INC.config.UpdateText;
                            var pListItemBlock2 = document.querySelector('.inc_pdp_bundle_product_list_item_block' + "[data-main_id=\"" + mainId + "\"]");
                            if (pListItemBlock2 != null) {
                                pListItemBlock2.classList.remove('product_added');
                                pListItemBlock2.querySelector('.inc_pdp_bundle_product_list_item_added_btn_img').classList.remove("checked");
                            }
                            eladdfn_(productModuleBlock)
                            elAddImg.classList.remove("checked");
                            modalProductBlock.querySelector('.inc_product_desc_add_img').classList.remove("checked");
                            
                            if (INC.config.pageType == "pdp" && blockType == "pdp") {
                                INC.methods.updateBundleCart({ sku: sku, qty: qty }, "sub", main_id, bundle_id, pname, pprice);
                            }
                        }
                    }
                    if (prod_card != null) {
                        if (prod_card.querySelector('.inc_product_modal_block.active') != null) {
                            if(inc_scroll_height > 100){
                                window.scrollTo(0,inc_scroll_height);
                            }
                            prod_card.querySelector('.inc_product_modal_block.active').classList.remove('active')
                        }
                    }
                }
            } else {
                if (flag_check == 1) {
                    elAddText.textContent = INC.config.addingText;
                    // elAddText.parentNode.parentNode.setAttribute("style", "pointer-events: none;opacity: 0.5;");
                } else {
                    if (document.querySelector('.inc_product_modal_block.active') == null) {
                        productModuleBlock.querySelector('.inc_product_details_prod_block').click()
                    }
                }
            } 
        });
        return productBlock;
    }
    function eladdfn_(productModuleBlock){
        if (productModuleBlock.querySelector('.inc_product_variant_simple_text.simple') != null) {
            productModuleBlock.querySelector('.inc_product_variant_simple_text.simple').textContent = "Add To Bundle"
        } else {
            productModuleBlock.querySelector('.inc_product_variant_simple_text').textContent = "カラーを選ぶ";
            
        }
        if (productModuleBlock.querySelector('.inc_product_variant_simple_block') != null) {
            productModuleBlock.querySelector('.inc_product_variant_simple_block').classList.remove('added_inc')
        }
        productModuleBlock.querySelector('.inc_product_desc_qty_add_btn_block').classList.remove('added_inc')
        productModuleBlock.querySelector('.inc_product_add_block').classList.remove('added_inc')
        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_add_block').classList.remove('added_inc')
        productModuleBlock.querySelector('.inc_product_desc_att_variant_text').textContent = "Add To Bundle"
    }
    INC.methods.createProductModalBlock = function (pdpProductId, blockType, _bundleProductListCheck, _parentblock,elmodalblock,mainprod) {
        var productBlock = elmodalblock.querySelector('.inc_product_block')
        var prodmodal_desc = productBlock.querySelector('.inc_product_desc_block').innerHTML
        var desc_details_sibling = productBlock.querySelector('.inc_product_info_main_block')
        var html_desc_block = generate_html_tag('div','inc_product_desc_block');
        html_desc_block.innerHTML = prodmodal_desc
        var desc_html_rem = productBlock.querySelector('.inc_product_desc_block');
        desc_html_rem.parentNode.removeChild(desc_html_rem);
        desc_details_sibling.appendChild(html_desc_block)

        var prdmblock=productBlock
        var findObj = new INC.classes.FindObj({ id: pdpProductId });
        var productObj = INC.dataStore.methods().getProductById(findObj);
        setidstoelm(productBlock,productObj)
        var elHeader = prdmblock.querySelector('.inc_product_header_main_block');
        var elImgBlock = prdmblock.querySelector('.inc_product_img_block');
        var elImgGalleryListBlock = prdmblock.querySelector('.inc_product_img_gallery_list_block');
        var elTitleBlock = prdmblock.querySelector('.inc_product_desc_title_block');
        var elManuBlock = prdmblock.querySelector('.inc_product_extension_block');
        var elTitleText = prdmblock.querySelector('.inc_product_desc_title_text');
        var elAttColorTitleText = prdmblock.querySelector('.inc_product_desc_att_color_title_text');
        var elPriceActiveText = prdmblock.querySelector('.inc_product_desc_price_active_text');
        var elPriceRegularText = prdmblock.querySelector('.inc_product_desc_price_regular_text');
        var elAttColorBlock = prdmblock.querySelector('.inc_product_desc_att_color_block');
        var elAttColorListBlock = prdmblock.querySelector('.inc_product_desc_att_color_list_block');
        var elAttSizeBlock = prdmblock.querySelector('.inc_product_desc_att_size_block');
        var elAttSizeTitleText = prdmblock.querySelector('.inc_product_desc_att_size_title_text');
        var elAttSizeTitleTextSelected = prdmblock.querySelector('.inc_product_desc_att_size_title_text_selected');
        var elAttSizeListBlock = prdmblock.querySelector('.inc_product_desc_att_size_list_block');
        var elAtt0ListBlock = prdmblock.querySelector('.inc_product_desc_att_zero_list_block');
        var elAtt3ListBlock = prdmblock.querySelector('.inc_product_desc_att_third_list_block');
        var elAtt0Block = prdmblock.querySelector('.inc_product_desc_att_zero_block');
        var elAtt3Block = prdmblock.querySelector('.inc_product_desc_att_third_block');
        var elAtt0TitleText = prdmblock.querySelector('.inc_product_desc_att_zero_title_text');
        var elAtt3TitleTextSelected = prdmblock.querySelector('.inc_product_desc_att_third_title_text_selected');
        var elAtt3TitleText = prdmblock.querySelector('.inc_product_desc_att_third_title_text');
        var elAddBlock = prdmblock.querySelector('.inc_product_desc_add_block');
        var elAddText = prdmblock.querySelector('.inc_product_desc_add_text');
        var elratingsBlock = prdmblock.querySelector('.inc_product_desc_ratings_block');
        var elGalleryRightArrow = prdmblock.querySelector('.inc_product_img_gallery_right_block');
        var elGallerylefttArrow = prdmblock.querySelector('.inc_product_img_gallery_left_block');
        var productDescriptionMainBlock = prdmblock.querySelector('.inc_product_description_main_block');
        var productHeaderMainBlockTitle = prdmblock.querySelector('.inc_product_header_main_title_block')
        var productHeaderMainBlockRating = prdmblock.querySelector('.inc_product_header_main_rating_block')
        var elproductPriceLabel = prdmblock.querySelector('.inc_product_price_label_block')
        var elviewdetailheader = prdmblock.querySelector('.inc_product_Description_header_block')
        var elMTitleText =  productBlock.querySelector('.inc_product_maufacture_text');

        elproductPriceLabel.innerHTML = "SALE"
        productBlock.querySelector('.inc_product_info_main_block').classList.add('active')
        elviewdetailheader.addEventListener('click', function(e) {
            if (productBlock.querySelector('.inc_product_description_main_block.desc_avail') != null) {
                productBlock.querySelector('.inc_product_description_main_block.desc_avail').classList.remove('active')
            }
            productBlock.querySelector('.inc_product_Description_header_block').classList.remove('active')
            this.classList.add('active')
            productBlock.querySelector('.inc_product_info_main_block').classList.add('active')
        })
        elHeader.querySelector('.inc_product_header_img_block').addEventListener("click", function () {
            if (document.querySelector('.inc_sidebar_modal_block.active') == null) {
                document.querySelector('html').classList.remove('inc_overlay');
                document.querySelector('body').classList.remove('inc_popup_open');
            }
            if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
                document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
            }
            if (productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_text input') != null && productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_qty_input_text input') != null) {
                if (productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_text input').value != productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_qty_input_text input').value) {
                    productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_text input').value = productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_qty_input_text input').value
                }
            }
            
            productBlock.parentNode.classList.remove("active");
            productBlock.parentNode.querySelector('.inc_product_header_title_block').classList.add('active');
            productBlock.parentNode.querySelector('.inc_product_header_title_block_1').classList.remove('active');
            if (document.querySelector('.inc_product_modal_block.active') == null && document.querySelector('body.active-gnav, body.product-shades-sidebar-active') == null) {
                // document.querySelector('body').setAttribute('style', 'overflow:auto')
            }
            if(inc_scroll_height > 100){
                window.scrollTo(0,inc_scroll_height);
            }
        });
        if(window.innerWidth > 820){
            var prodtypeflag = false;
            var producttypedetails = generate_html_tag('div','inc_producttype_details_block')
            prodtypedesc(productObj,producttypedetails,prodtypeflag)
            if(prodtypeflag == trueflag){
                var prodplacement = productBlock.querySelector('.inc_product_desc_att_details_block')
                if(prodplacement != null){
                    prodplacement.parentNode.insertBefore(producttypedetails,prodplacement)
                }
            }
        }
        var elImgMainImg = elImgBlock.querySelector('.inc_product_img_main_img');
        var elImgTag1 = generate_html_tag('img');
        elImgTag1.src = productObj.imageURLMain
        elImgTag1.setAttribute('data-src',productObj.imageURLMain)
        if(elImgTag1 == trueflag){
            elImgTag1.src = productObj.imageURLMain
        }
        elImgTag1.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
        elImgTag1.setAttribute('role', 'img')
        elImgTag1.setAttribute('aria-label', 'Image')
        elImgTag1.setAttribute('alt', productObj.nameMain)
        if(window.innerWidth < 821){
            if(productObj.otherImageList != null && productObj.otherImageList.length < 2){
                elGalleryRightArrow.style.display ='none';
                elGallerylefttArrow.style.display ='none';
            }
        }else{
            if(productObj.otherImageList != null && productObj.otherImageList.length < 6){
                elGalleryRightArrow.style.display ='none';
                elGallerylefttArrow.style.display ='none';
            }
        }
        var productLink = document.createElement('a');
        
        productLink.setAttribute('rel', 'noopener noreferrer')
        if(mainprod != 'mainprod'){
            productLink.href = productObj.url;
        }
        if(blockType == "pdp" &&  INC.config.Product_id ==  productObj.mainId) {
            productLink.setAttribute('style','cursor: default;text-decoration: none;')
        } else {
            productLink.href = productObj.url+"?car=gr-dmg-bundle";
        }
        productLink.appendChild(elImgTag1);
        productLink.style.cursor = 'pointer';
        productLink.setAttribute('otherImageList', productObj["otherImageList"])
        productLink.setAttribute('imageURL', productObj["imageURLMain"])
        add_swipe(productLink)
        elImgMainImg.appendChild(productLink);
        if(mainprod != 'mainprod'){
            elImgMainImg.addEventListener("click", function (e) {
                e.preventDefault()
                INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
                getTrackingPixel();
                var hrefm = productBlock.querySelector('.inc_product_img_main_img a').href
                setTimeout(function(){
                    window.location.href = hrefm
                },2000)
            });
        }
        elImgGalleryListBlock.innerHTML = "";
        if ((productObj.otherImageList != null) && productObj.otherImageList.length > 1) {
            prepareAdditionalimages(elImgGalleryListBlock,productObj,productBlock)
        }else{
            productBlock.classList.add('inc_other_noimage')
        }
        if(mainprod != 'mainprod'){
            elTitleBlock.addEventListener("click", function (ee) {
                ee.preventDefault()
                INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
                getTrackingPixel();
                var hrefm1 = productBlock.querySelector('.inc_product_img_main_img a').href
                setTimeout(function(){
                    window.location.href = hrefm1
                },2000)
            });
        }
        
        // elManuBlock.innerText = productObj.manufacturer;
        var pTitleDiv = document.createElement('div');
        pTitleDiv.innerText = productObj.nameMain;
        var pLinkModal = document.createElement('a');
        pLinkModal.setAttribute("title", productObj.nameMain);
        if(mainprod != 'mainprod'){
            pLinkModal.setAttribute("href", productObj.url);
        }
        pLinkModal.setAttribute('rel', 'noopener noreferrer')
        pLinkModal.innerText = productObj.nameMain;
        productHeaderMainBlockTitle.appendChild(pLinkModal)
        if(mainprod != 'mainprod'){
            pLinkModal.addEventListener("click", function (e) {
                e.preventDefault()
                INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
                getTrackingPixel();
                var hrefm2 = productBlock.querySelector('.inc_product_img_main_img a').href
                setTimeout(function(){
                    window.location.href = hrefm2
                },2000)
            });
        }

        var pMTitleDiv = document.createElement('div');
        if (productObj.MakerName != null){
            var txtCount = productObj.manufacturer.length +  productObj.MakerName.length
            var mark_Manu =  productObj.MakerName + " " + productObj.manufacturer;
            pMTitleDiv.innerText = productObj.MakerName + " " + productObj.manufacturer;
            var manFlink = document.createElement('a');
            if(blockType == "pdp" &&  INC.config.Product_id ==  productObj.mainId) {
                manFlink.setAttribute('style','cursor: default; text-decoration: none;')
            }else{
                manFlink.href = productObj.url+"?car=gr-dmg-bundle";
            }
            if (productObj.MakerName != null){
                manFlink.setAttribute('title', productObj.MakerName)
            }
            manFlink.setAttribute('data-eventcategory', "gr-dmg-bundle")
            manFlink.appendChild(pMTitleDiv);
            elMTitleText.appendChild(manFlink);
        }

        var field1 = productObj.ratingsCount
        var field2 = productObj.reviewsCount
        INC.methods.get_product_ratings(field1, field2, elratingsBlock);
        var pLinkModalSKU = document.createElement('span');
        pLinkModalSKU.classList.add("product_modal_sku");
        pLinkModalSKU.innerText = "#" + productObj.sku
        productHeaderMainBlockRating.appendChild(pLinkModalSKU)

        var pLink = document.createElement('a');
        pLink.href = productObj.url;
        if(blockType == "pdp" &&  INC.config.Product_id ==  productObj.mainId) {
            pLink.setAttribute('style','cursor: default;text-decoration: none;')
        }else{
            if (INC.config.Product_id !=  productObj.mainId){
                pLink.href = productObj.url+"?car=gr-dmg-bundle";
            }
        }
        pLink.setAttribute('style', 'text-transform: unset;')
        // pLink.setAttribute('title', productObj.nameMain)
        pLink.appendChild(pTitleDiv);
        elTitleText.appendChild(pLink);
        productprice_member(productObj,elPriceActiveText,elPriceRegularText,productBlock,elproductPriceLabel)
        prepareqty(productBlock,blockType)

        findObj = new INC.classes.FindObj({ mainId: productObj.mainId });
        if (INC.dataStore.methods().getProductColorsObj(findObj).colorArray.length == 0 && INC.dataStore.methods().getProductopt0Obj(findObj).att0Array.length == 0) {
            elHeader.querySelector('.inc_product_header_title_text').innerText = "Overview";
        } else {
            if (INC.dataStore.methods().getProductopt0Obj(findObj).att0Array.length > 0 || INC.dataStore.methods().getProductColorsObj(findObj).colorArray.length > 0) {
                elHeader.querySelector('.inc_product_header_title_text').innerText = "Overview";
            }
        }
        var inc_product_header_title_block_1 = productBlock.querySelector('.inc_product_header_title_block_1')
        var inc_product_header_title_text_1 = productBlock.querySelector('.inc_product_header_title_text_1')
        inc_product_header_title_text_1.innerText = "Description";

       
        if(window.innerWidth < 821){
            productDescriptionMainBlock.innerHTML = "<span>Description</span>" + productObj.description;
        }else{
            productDescriptionMainBlock.innerHTML = productObj.description;
        }

        var inc_product_header_title_block = inc_product_header_title_block_1.parentNode.querySelector('.inc_product_header_title_block');

        var inc_product_header_new_page = productBlock.querySelector('.inc_product_header_new_page')
        var inc_product_header_new_page_text = productBlock.querySelector('.inc_product_header_new_page .inc_product_header_new_page_text')
        inc_product_header_new_page_text.innerText = "Open in a new tab"
        inc_product_header_new_page_text.setAttribute("href", productObj.url)
        inc_product_header_new_page_text.setAttribute("target", "_blank")
        inc_product_header_new_page_text.setAttribute('rel', 'noopener noreferrer')
        inc_product_header_new_page.addEventListener("click", function () {
            INC.methods.sendBundleClickTracking(productObj.mainId);
            getTrackingPixel()
        });

        inc_product_header_title_block_1.addEventListener('click', function () {
            this.parentNode.parentNode.parentNode.querySelector(".inc_product_description_main_block").classList.add("active")
            this.parentNode.parentNode.parentNode.querySelector(".inc_product_info_main_block").classList.remove("active")
            this.parentNode.querySelector('.inc_product_header_title_block').classList.remove("active");
            this.classList.add("active");
        });

        inc_product_header_title_block.classList.add('active');


        inc_product_header_title_block.addEventListener('click', function () {
            this.parentNode.parentNode.parentNode.querySelector(".inc_product_description_main_block").classList.remove("active")
            this.parentNode.parentNode.parentNode.querySelector(".inc_product_info_main_block").classList.add("active")
            inc_product_header_title_block.classList.add('active');
            inc_product_header_title_block_1.classList.remove('active');
        });

        var product0Obj = INC.dataStore.methods().getProductopt0Obj(findObj);

        var productSizesObj = INC.dataStore.methods().getProductSizesObj(findObj);

        var productColorsObj = INC.dataStore.methods().getProductColorsObj(findObj);

        var product3Obj = INC.dataStore.methods().getProductopt3Obj(findObj);

        elAtt0ListBlock.innerHTML = "";
        elAttSizeListBlock.innerHTML = "";
        elAttColorListBlock.innerHTML = "";
        elAtt3ListBlock.innerHTML = "";

        if (productColorsObj["colorArray"].length > 0 || productSizesObj["sizeArray"].length > 0 || product3Obj["att3Array"].length > 0){
            INC.config.ddFlag  =true; 
        }
        productcoloratt(productColorsObj,productBlock,elAttColorListBlock,blockType,elAttColorBlock,elAttColorTitleText)
        
        if (product0Obj.att0Array.length > 0) {
            if (product0Obj["att0Array"][0].code != "Color") {
                elAtt0ListBlock.innerHTML = "";
                if (product0Obj["att0Array"].length > 0) {
                    productzeroatt(elAtt0TitleText,elAtt0Block,product0Obj,elAtt0ListBlock,blockType,productBlock)
                }
            }
        }
        productsizeatt(elAttSizeTitleText,elAttSizeBlock,productSizesObj,elAttSizeListBlock,elAttSizeTitleTextSelected,blockType)
        productthirdatt(product3Obj,elAtt3TitleText,elAtt3Block,elAtt3ListBlock,blockType,elAtt3TitleTextSelected)

        
        if (product0Obj["att0Array"].length > 0) {
            productBlock.querySelector('.inc_product_desc_att_zero_title_block').addEventListener('click', function () {
                if(document.querySelector('.inc_product_desc_att_color_block.show_dropdown') != null){
                    document.querySelector('.inc_product_desc_att_color_block.show_dropdown').classList.remove('show_dropdown')
                }
                if(document.querySelector('.inc_product_desc_att_size_block.show_dropdown') != null){
                    document.querySelector('.inc_product_desc_att_size_block.show_dropdown').classList.remove('show_dropdown')
                }
                if(document.querySelector('.inc_product_desc_att_third_block.show_dropdown') != null){
                    document.querySelector('.inc_product_desc_att_third_block.show_dropdown').classList.remove('show_dropdown')
                }
                this.parentNode.classList.toggle('show_dropdown')
            })
        }
        
        if (productColorsObj["colorArray"].length > 0) {
            productBlock.querySelector('.inc_product_desc_att_color_title_block').addEventListener('click', function () {
                if(document.querySelector('.inc_product_desc_att_zero_block.show_dropdown') != null){
                    document.querySelector('.inc_product_desc_att_zero_block.show_dropdown').classList.remove('show_dropdown')
                }
                if(document.querySelector('.inc_product_desc_att_size_block.show_dropdown') != null){
                    document.querySelector('.inc_product_desc_att_size_block.show_dropdown').classList.remove('show_dropdown')
                }
                if(document.querySelector('.inc_product_desc_att_third_block.show_dropdown') != null){
                    document.querySelector('.inc_product_desc_att_third_block.show_dropdown').classList.remove('show_dropdown')
                }
                this.parentNode.classList.toggle('show_dropdown')
            })
        }
        if (productSizesObj["sizeArray"].length > 0) {
            productBlock.querySelector('.inc_product_desc_att_size_title_block').addEventListener('click', function () {
                if(document.querySelector('.inc_product_desc_att_zero_block.show_dropdown') != null){
                    document.querySelector('.inc_product_desc_att_zero_block.show_dropdown').classList.remove('show_dropdown')
                }
                if(document.querySelector('.inc_product_desc_att_third_block.show_dropdown') != null){
                    document.querySelector('.inc_product_desc_att_third_block.show_dropdown').classList.remove('show_dropdown')
                }
                if(document.querySelector('.inc_product_desc_att_color_block.show_dropdown') != null){
                    document.querySelector('.inc_product_desc_att_color_block.show_dropdown').classList.remove('show_dropdown')
                }
                this.parentNode.classList.toggle('show_dropdown')
            })
        }
        if (product3Obj["att3Array"].length > 0) {
            productBlock.querySelector('.inc_product_desc_att_third_title_block').addEventListener('click', function () {
                if(document.querySelector('.inc_product_desc_att_zero_block.show_dropdown') != null){
                    document.querySelector('.inc_product_desc_att_zero_block.show_dropdown').classList.remove('show_dropdown')
                }
                if(document.querySelector('.inc_product_desc_att_size_block.show_dropdown') != null){
                    document.querySelector('.inc_product_desc_att_size_block.show_dropdown').classList.remove('show_dropdown')
                }
                if(document.querySelector('.inc_product_desc_att_color_block.show_dropdown') != null){
                    document.querySelector('.inc_product_desc_att_color_block.show_dropdown').classList.remove('show_dropdown')
                }
                this.parentNode.classList.toggle('show_dropdown')
            })
        }
        
        elGallerylefttArrow.setAttribute('title', 'Scroll left')
        elGalleryRightArrow.setAttribute('title', 'Scroll right')

        elGalleryRightArrow.addEventListener("click", function () {
            var prod_card=this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            var pr_id=prod_card.getAttribute('data-main_id')
            slideTo(pr_id,0,prod_card,"right","arrow")
        });
        elGallerylefttArrow.addEventListener("click", function () {
            var prod_card=this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            var pr_id=prod_card.getAttribute('data-main_id')
            slideTo(pr_id,0,prod_card,"left","arrow")
        });
        if ((productObj.otherImageList == null) || productObj.otherImageList.length < 2) {
            elGalleryRightArrow.style.display = "none"
            elGallerylefttArrow.style.display = "none"
        }
        switch (blockType) {
            case "pdp": elAddText.innerText = "Add To Bundle"; break;
            case "sidebar": elAddText.innerText = "まとめてカートに入れる"; break;
            case "am": elAddText.innerText = "まとめてカートに入れる"; break;
        }
        var clone_elAddBlock = generate_html_tag('div','elAddBlock')
        clone_elAddBlock.classList.add('inactive');
        clone_elAddBlock.innerText = "選択する";
        elAddBlock.parentNode.insertBefore(clone_elAddBlock,elAddBlock)
        clone_elAddBlock.addEventListener('click',function(){
            elAddBlock.click()
        })
        if(productObj.ProductType == "configurable"){
        	INC.methods.updateSelectedTxt(productBlock,"modal")
        }
        elAddBlock.style.display="none"
        elAddBlock.addEventListener("click", function () {
            var productModuleBlock = productBlock.parentNode.parentNode;
            var flag_check = INC.methods.checkVariantSelection(productModuleBlock)
            if (document.querySelector('.sidebar_outer.sidebar_outer_active') == null) {
                document.querySelector('body').classList.remove('inc_popup_open')
                document.querySelector('html').classList.remove('inc_overlay')
            }
            var showcaseProductBlock = productModuleBlock.querySelector('.inc_product_showcase_block').querySelector('.inc_product_block');
            
            if (INC.config.pageType != "cartPage" && document.querySelector('.inc_sidebar_modal_block.active') == null) {
                showcaseProductBlock.querySelector('.inc_product_desc_add_block').click();
            }
            if (productModuleBlock.classList.contains('configurable') == trueflag) {
                if (flag_check == 1) {
                    setTimeout(function () {
                        if (document.querySelector('.sidebar_outer.sidebar_outer_active .inc_product_modal_block.active') != null) {
                            document.querySelector('.sidebar_outer.sidebar_outer_active .inc_product_modal_block.active').classList.remove('active')
                            document.querySelector('body').classList.remove('inc_popup_open');
                            if(inc_scroll_height > 100){
                                window.scrollTo(0,inc_scroll_height);
                            }
                            document.querySelector('.sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block').classList.remove('overflow_visible')
                        }
                    }, 200)
                } else {
                    var element = document.querySelector('.inc_product_modal_block.active .inc_product_block .inc_product_desc_att_color_block')
                    if (element != null) {
                        document.querySelector('html').classList.add('inc_popup_open')
                        document.querySelector('html').classList.add('inc_overlay')
                    }
                }
            } else {
                setTimeout(function () {
                    if (document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active') != null) {
                        document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active').classList.remove('active')
                        document.querySelector('body').classList.remove('inc_popup_open')
                        if(inc_scroll_height > 100){
                            window.scrollTo(0,inc_scroll_height);
                        }
                    }
                    var sidemodal=document.querySelector('.inc_sidebar_modal_block')
                    if (document.querySelector('.inc_sidebar_modal_block.active .inc_product_modal_block.active') == null && sidemodal != null) {
                        sidemodal.classList.remove('overflow_visible')
                    }
                }, 100)
            }
            setTimeout(function(){
                if (document.querySelector('.sidebar_outer.sidebar_outer_active') != null && document.querySelector('.inc_product_modal_block.active') == null) {
                    document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
                }
            },200)
        });
        return productBlock;
    }
    function productzeroatt(elAtt0TitleText,elAtt0Block,product0Obj,elAtt0ListBlock,blockType,productBlock){
        elAtt0TitleText.innerText = product0Obj["att0Array"][0].label +':';
        if (window.innerWidth < 821){
            if (INC.config.ddFlag ) {  
                if(product0Obj["att0Array"][0].label == "Leather" || product0Obj["att0Array"][0].label == "Colour" ){
                    elAtt0Block.parentNode.parentNode.parentNode.classList.add('dropdownstyle')
                }
            }
        } else {
            if(product0Obj["att0Array"][0].label == "Leather" || product0Obj["att0Array"][0].label == "Colour" || product0Obj["att0Array"][0].label == 'Colour:' || product0Obj["att0Array"][0].label == 'Fabric' || product0Obj["att0Array"][0].label == 'Marble' || product0Obj["att0Array"][0].label == "Finish"){
                elAtt0Block.parentNode.parentNode.parentNode.classList.add('dropdownstyle')
            }
        }
        elAtt0Block.classList.add("active");
        elAtt0Block.classList.add("inc_total_"+product0Obj["att0Array"].length)
        var zeroc=0
            var selectvariantwrap = generate_html_tag('div', 'selectvariantwrap')
            var selectvariant = generate_html_tag('select', 'inc_variant_zero_tag')
            selectvariant.setAttribute('id', 'variant_inc_avail_zero')
            selectvariant.setAttribute('blocktype', blockType)
            selectvariant.setAttribute('varianttypes', 'zero')
            selectvariant.addEventListener('change',function(e){
                var elm=e.currentTarget
                INC.methods.mappvariants(elm,null,null,"select_option")
            })
            selectvariantwrap.setAttribute('attrcode',product0Obj["att0Array"][0].code)
            selectvariantwrap.classList.add(product0Obj["att0Array"][0].code.replace('/',''))
            var variantLabel = generate_html_tag('label', 'variantLabel')
            variantLabel.innerText = product0Obj["att0Array"][0].code;
            selectvariantwrap.appendChild(variantLabel)
            selectvariantwrap.appendChild(selectvariant)
            elAtt0Block.parentNode.appendChild(selectvariantwrap)
            var variantoptionzero1 = generate_html_tag('option','variantoptionzero1')
            variantoptionzero1.textContent = "選択してください";
            variantoptionzero1.setAttribute('disabled','disabled')
            variantoptionzero1.setAttribute('selected','selected')
            variantoptionzero1.setAttribute('data-size', "");
            variantoptionzero1.setAttribute("datasize", "");
            variantoptionzero1.setAttribute('data-option', "");
            selectvariant.appendChild(variantoptionzero1)
            var sel_avail = false;
            product0Obj['att0Array'].forEach(function(sizeObj) {
                var variantoption = generate_html_tag('option', 'variantoption')
                variantoption.innerText = sizeObj["text"];
                variantoption.setAttribute('data-size', sizeObj["text"]);
                variantoption.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                variantoption.setAttribute('data-option', "1");
                variantoption.setAttribute('title', sizeObj["text"].toUpperCase());
                variantoption.setAttribute('ImgURLC', sizeObj["ImgURLC"]);
                // if(product0Obj['att0Array'].length == 1){
                //     variantoption.selected = 'selected'
                // }
                if(product0Obj['att0Array'].length == 1){
                    variantoption.selected = 'selected'
                    elAtt0Block.parentNode.setAttribute('data-zero',sizeObj["text"])
                    sel_avail = true
                    elAtt0Block.parentNode.setAttribute("data-zero", sizeObj["text"]);
                }
                selectvariant.appendChild(variantoption)
            });
        product0Obj["att0Array"].forEach(function (sizeObj) {
            var attSizeImgBlock0 = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img_block');
            var attSizeImg0 = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img');
            attSizeImgBlock0.setAttribute('blocktype', blockType)
            attSizeImgBlock0.setAttribute('varianttypes', 'zero')
            attSizeImgBlock0.addEventListener('click',function(){
                var elvariant = this;
                var elblktype=this.getAttribute('blocktype')
                var elvtype=this.getAttribute('varianttypes')
                INC.methods.mappvariants(elvariant,elblktype,elvtype)
            })
            attSizeImgBlock0.classList.add('avail')
            elAtt0ListBlock.setAttribute('attrcode',product0Obj["att0Array"][0].code)
            if (sizeObj.imgSrc.length > 0 || sizeObj["colorCode"] != "") {
                if (sizeObj["colorCode"] == "" || sizeObj["colorCode"] == undefined) {
                    var sizeimg = generate_html_tag('img');
                    sizeimg.setAttribute('alt', sizeObj["text"])
                    sizeimg.src = sizeObj["imgSrc"]
                    attSizeImgBlock0.setAttribute('data-optionimge', sizeObj["imgSrc"])
                    attSizeImgBlock0.appendChild(sizeimg);
                    elAtt0TitleText.classList.add('img_tag_avail')
                    elAtt0TitleText.style.display="flex"
                    attSizeImgBlock0.classList.add('img_avail')
                }else{
                    var spancolorcode = generate_html_tag('span');
                    spancolorcode.classList.add('color_code')
                    spancolorcode.setAttribute('alt', sizeObj["text"])
                    spancolorcode.style.backgroundColor = sizeObj["colorCode"];
                    elAtt0TitleText.classList.add('img_tag_avail')
                    attSizeImgBlock0.appendChild(spancolorcode);
                }
                elAtt0ListBlock.classList.add('img_tag_avail')
            }
            
            // attSizeImg0.innerText = sizeObj["text"];
            attSizeImgBlock0.setAttribute('data-size', sizeObj["text"]);
            attSizeImgBlock0.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
            attSizeImgBlock0.setAttribute('data-option', "1");
            attSizeImgBlock0.setAttribute('data-cpid', sizeObj["cpid"])
            attSizeImgBlock0.setAttribute('data-optid', sizeObj["opt_id"]);
            attSizeImgBlock0.setAttribute('data-attrid', sizeObj["att_id"]);
            attSizeImgBlock0.setAttribute('data-child-price', sizeObj["prc"]);
            if (product0Obj["att0Array"][0].code == "size") {
                attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
            } else if (product0Obj["att0Array"][0].code == "letter") {
                attSizeImgBlock0.setAttribute('title', "Letter" + " " + sizeObj["text"].toUpperCase());
            } else if (product0Obj["att0Array"][0].code == "choose") {
                attSizeImgBlock0.setAttribute('title', "Number " + sizeObj["text"].toUpperCase());
            } else {
                attSizeImgBlock0.setAttribute('title', sizeObj["text"].toUpperCase());
            }
            if(product0Obj["att0Array"].length == 1){
                attSizeImgBlock0.classList.add('active')
            }
            if(zeroc > 6 && blockType != 'pdp'){
                var inc_more_size = generate_html_tag('span', 'inc_more_size')
                inc_more_size.innerText = '+';
                inc_more_size.addEventListener('click',function(){
                    INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
                    getTrackingPixel();
                    var href = productBlock.querySelector('.inc_product_img_main_img a').href
                    setTimeout(function(){
                        window.location.href = href
                    },2000)
                })
                if(elAtt0ListBlock.querySelector('.inc_more_size') == null){
                    elAtt0ListBlock.appendChild(inc_more_size);
                }
                return
            }
            zeroc++
            attSizeImgBlock0.appendChild(attSizeImg0);
            elAtt0ListBlock.appendChild(attSizeImgBlock0);
        });
    }
    
    function productcoloratt(productColorsObj,productBlock,elAttColorListBlock,blockType,elAttColorBlock,elAttColorTitleText){
        fabricprod=[]
        if (productColorsObj.colorArray.length > 0) {
            if (productColorsObj["colorArray"][0].code != "Color") {
                var selectvariant_cwrap = generate_html_tag('div', 'selectvariantwrap')
                var selectvariant_c = generate_html_tag('select', 'inc_variant_color_tag')
                selectvariant_c.setAttribute('id', 'variant_inc_avail_color')
                selectvariant_c.setAttribute('blocktype', blockType)
                selectvariant_c.setAttribute('varianttypes', 'color')
                selectvariant_c.addEventListener('change',function(e){
                    var elm=e.currentTarget
                    INC.methods.mappvariants(elm,null,null,"select_option")
                })
                selectvariant_cwrap.setAttribute('attrcode',productColorsObj["colorArray"][0].code)
                selectvariant_cwrap.classList.add(productColorsObj["colorArray"][0].code)
                var variantLabel = generate_html_tag('label', 'variantLabel')
                variantLabel.innerText = productColorsObj["colorArray"][0].code;
                selectvariant_cwrap.appendChild(variantLabel)
                selectvariant_cwrap.appendChild(selectvariant_c)
                elAttColorBlock.parentNode.appendChild(selectvariant_cwrap)
                var variantoptioncolor = generate_html_tag('option','variantoptioncolor')
                variantoptioncolor.textContent = "選択してください";
                variantoptioncolor.setAttribute('disabled','disabled')
                variantoptioncolor.setAttribute('selected','selected')
                variantoptioncolor.setAttribute('data-size', "");
                variantoptioncolor.setAttribute("datasize", "");
                variantoptioncolor.setAttribute('data-option', "");
                selectvariant_c.appendChild(variantoptioncolor)
                elAttColorListBlock.setAttribute('attrcode', productColorsObj["colorArray"][0].code)
                productColorsObj["colorArray"].forEach(function(sizeObj) {
                    var variantoption = generate_html_tag('option', 'variantoption')
                    variantoption.innerText = sizeObj["text"];
                    variantoption.setAttribute('data-color', sizeObj["text"]);
                    variantoption.setAttribute("datacolor", sizeObj["text"].toLocaleLowerCase());
                    variantoption.setAttribute('data-option', "1");
                    variantoption.setAttribute('title', sizeObj["text"].toUpperCase());
                    variantoption.setAttribute('ImgURLC', sizeObj["ImgURLC"]);
                    if(productColorsObj["colorArray"].length == 1){
                        variantoption.selected = 'selected'
                        elAttColorBlock.parentNode.setAttribute('data-color',sizeObj["text"])
                    }
                    selectvariant_c.appendChild(variantoption)

                });
            } else {
                elAttColorBlock.classList.add('colour_attr_avail')
            }
            productColorsObj["colorArray"] = productColorsObj["colorArray"].sort(function(a, b){
                if(a.attLebel < b.attLebel) { return -1; }
                if(a.attLebel > b.attLebel) { return 1; }
                return 0;
            })
                
            if (productColorsObj["colorArray"].length > 0) {
                elAttColorListBlock.innerHTML = "";
                elAttColorBlock.classList.add("active");
                elAttColorTitleText.innerText = "カラーを選ぶ"
                var one_attr_flag = false
                if (productColorsObj["colorArray"].length == 1) {
                    one_attr_flag = true
                } 
                if (productColorsObj["colorArray"].length > 6){
                    elAttColorListBlock.classList.add('greater6');
                }
                var pushedfabric=[]
                var colorC = 0
                elAttColorBlock.classList.add("active");
                productColorsObj["colorArray"].forEach(function (colorObj) {
                    colorelmOb(colorObj,elAttColorListBlock,colorC,blockType,productBlock,one_attr_flag,productColorsObj)
                    colorC ++
                });
            }
        }
    }
    function colorelmOb(colorObj,elAttColorListBlock,colorC,blockType,productBlock,one_attr_flag,productColorsObj){
        var attColorBlock = generate_html_tag('div', 'inc_product_desc_att_color_list_item_block')
        var attColorImgBlock = generate_html_tag('div', 'inc_product_desc_att_color_list_item_img_block');
        var attColorImg = generate_html_tag('div', 'inc_product_desc_att_color_list_item_img');
        attColorImgBlock.setAttribute('blocktype', blockType)
        attColorImgBlock.setAttribute('varianttypes', 'color')
        attColorImgBlock.addEventListener('click',function(){
            var elvariantc = this;
            var elblktypec=this.getAttribute('blocktype')
            var elvtypec=this.getAttribute('varianttypes')
            INC.methods.mappvariants(elvariantc,elblktypec,elvtypec)
        })
        
        imgcolorgen(colorObj,attColorImg)
        var colorTitle = generate_html_tag('a');
        colorTitle.innerText = colorObj["text"]
        colorTitle.title = colorObj["text"].toUpperCase();
        colorTitle.addEventListener('click', function (e) { e.preventDefault(); })
        attColorImg.appendChild(colorTitle);
        
        attColorImgBlock.setAttribute('data-color', colorObj["text"]);
        attColorImgBlock.setAttribute("datacolor", colorObj["text"].toLocaleLowerCase());
        if(colorObj["opttext"] != undefined){
            if(colorObj["opttext"] != undefined){
                attColorImgBlock.setAttribute("datacolorfabric", colorObj["opttext"].split('_')[0].toLocaleLowerCase());
            }
        }
        attColorImgBlock.setAttribute('data-option', "0");
        attColorImgBlock.setAttribute('data-cpid', colorObj["cpid"])
        attColorImgBlock.setAttribute('data-colorcode', colorObj["colorCode"])
        attColorImgBlock.setAttribute('data-optionimge', colorObj["imgSrc"])
        attColorImgBlock.setAttribute('data-optid', colorObj["opt_id"]);
        attColorImgBlock.setAttribute('data-attrid', colorObj["att_id"]);
        attColorImgBlock.setAttribute('data-child-price', colorObj["prc"]);
        if(colorC > 5 && blockType != 'pdp'){
            var inc_more_color = generate_html_tag('a', 'inc_more_color')
            inc_more_color.innerText = '+';
            inc_more_color.addEventListener('click',function(e){
                if(window.innerWidth < 821){
                    e.preventDefault()
                }
                var hrefd = productBlock.querySelector('.inc_product_img_main_img a').href
                this.setAttribute('href',hrefd)
                INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
                getTrackingPixel();
                if(window.innerWidth < 821){
                    setTimeout(function(){
                        window.location.href = hrefd
                    },2000)
                }
            })
            if(elAttColorListBlock.querySelector('.inc_more_color') == null){
                elAttColorListBlock.appendChild(inc_more_color);
            }
            return
        }
        attColorImgBlock.appendChild(attColorImg);
        attColorBlock.appendChild(attColorImgBlock);
        
        elAttColorListBlock.appendChild(attColorBlock);
        var prod_id = productBlock.getAttribute('data-main_id');
        if (one_attr_flag == trueflag) {
            setTimeout(function () {
                if (INC.methods.getProductIdFromWebPage() == prod_id) {
                    attColorImgBlock.click()
                }
            }, 0)
        }
        if(productColorsObj["colorArray"].length == 1){
            attColorBlock.classList.add('active')
            attColorImgBlock.classList.add('active')
        }
    }
    function productsizeatt(elAttSizeTitleText,elAttSizeBlock,productSizesObj,elAttSizeListBlock,elAttSizeTitleTextSelected,blockType){
        if (productSizesObj.sizeArray.length > 0) {
            var selectvariant_swrap = generate_html_tag('div', 'selectvariantwrap')
            if (productSizesObj["sizeArray"][0].code == "ロフト/バウンス角"){
                selectvariant_swrap.classList.add(productSizesObj["sizeArray"][0].code.replace('/',''))
            }else{
                selectvariant_swrap.classList.add(productSizesObj["sizeArray"][0].code)
            }
            var selectvariant_s = generate_html_tag('select', 'inc_variant_size_tag')
            selectvariant_s.setAttribute('id', 'variant_inc_avail_size')
            selectvariant_s.setAttribute('blocktype', blockType)
            selectvariant_s.setAttribute('varianttypes', 'size')
            selectvariant_s.addEventListener('change',function(e){
                var elm=e.currentTarget
                INC.methods.mappvariants(elm,null,null,"select_option")
            })
            elAttSizeListBlock.setAttribute('attrcode', productSizesObj["sizeArray"][0].code)
            selectvariant_swrap.setAttribute('attrcode',productSizesObj["sizeArray"][0].code)
            var variantLabel = generate_html_tag('label', 'variantLabel')
            variantLabel.innerText = productSizesObj["sizeArray"][0].code;
            selectvariant_swrap.appendChild(variantLabel)
            selectvariant_swrap.appendChild(selectvariant_s)
            elAttSizeBlock.parentNode.appendChild(selectvariant_swrap)
            var variantoptionsize7 = generate_html_tag('option','variantoptionsize7')
            variantoptionsize7.textContent = "選択してください";
            variantoptionsize7.setAttribute('disabled','disabled')
            variantoptionsize7.setAttribute('selected','selected')
            variantoptionsize7.setAttribute('data-size', "");
            variantoptionsize7.setAttribute("datasize", "");
            variantoptionsize7.setAttribute('data-option', "");
            selectvariant_s.appendChild(variantoptionsize7)
            var sel_avail = false;
            productSizesObj["sizeArray"].forEach(function(sizeObj) {
                var variantoption = generate_html_tag('option', 'variantoption')
                variantoption.innerText = sizeObj["text"];
                variantoption.setAttribute('data-size', sizeObj["text"]);
                variantoption.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                variantoption.setAttribute('data-option', "1");
                variantoption.setAttribute('title', sizeObj["text"].toUpperCase());
                variantoption.setAttribute('ImgURLC', sizeObj["ImgURLC"]);
                // if(productSizesObj["sizeArray"].length == 1){
                //     variantoption.selected = 'selected'
                // }
                if(productSizesObj["sizeArray"].length == 1){
                    elAttSizeBlock.parentNode.setAttribute('data-size',sizeObj["text"])
                    variantoption.selected = 'selected'
                    sel_avail = true
                }
                selectvariant_s.appendChild(variantoption)

            });
            elAttSizeBlock.parentNode.parentNode.parentNode.classList.add('dropdownstyle')
            if (productSizesObj["sizeArray"][0].code != "Color") {
                elAttSizeListBlock.innerHTML = "";
                elAttSizeTitleText.innerText = productSizesObj["sizeArray"][0].label;
                elAttSizeBlock.classList.add("active");
                productSizesObj["sizeArray"].forEach(function (sizeObj) {
                    var attSizeImgBlock = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img_block');
                    var attSizeImg = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img');
                    elAttSizeTitleTextSelected.innerText = "- Please Select -"
                    attSizeImgBlock.classList.add('avail')
                    attSizeImgBlock.setAttribute('blocktype', blockType)
                    attSizeImgBlock.setAttribute('varianttypes', 'size')
                    attSizeImgBlock.addEventListener('click',function(){
                        var elvariants = this;
                        var elblktypes=this.getAttribute('blocktype')
                        var elvtypes = this.getAttribute('varianttypes')
                        INC.methods.mappvariants(elvariants,elblktypes,elvtypes)
                    })
                    if (sizeObj.imgSrc.length > 0 || sizeObj["colorCode"] != "") {
                        if (sizeObj["colorCode"] == "" || sizeObj["colorCode"] == undefined) {
                            var sizeimg_ = generate_html_tag('img');
                            sizeimg_.setAttribute('alt', sizeObj["text"])
                            sizeimg_.src = sizeObj["imgSrc"]
                            attSizeImgBlock.setAttribute('data-optionimge', sizeObj["imgSrc"])
                            attSizeImgBlock.appendChild(sizeimg_);
                            elAttSizeTitleText.classList.add('img_tag_avail')
                            elAttSizeTitleText.style.display="flex"
                            attSizeImgBlock.classList.add('img_avail')
                        }else{
                            var spancolorcode_ = generate_html_tag('span');
                            spancolorcode_.classList.add('color_code')
                            spancolorcode_.setAttribute('alt', sizeObj["text"])
                            spancolorcode_.style.backgroundColor = sizeObj["colorCode"];
                            elAttSizeTitleText.classList.add('img_tag_avail')
                            attSizeImgBlock.appendChild(spancolorcode_);
                        }
                        elAttSizeListBlock.classList.add('img_tag_avail')
                    }
                    // attSizeImg.innerText = sizeObj["text"];
                    attSizeImgBlock.setAttribute('data-size', sizeObj["text"]);
                    attSizeImgBlock.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                    attSizeImgBlock.setAttribute('data-option', "2");
                    attSizeImgBlock.setAttribute('data-optid', sizeObj["opt_id"]);
                    attSizeImgBlock.setAttribute('data-attrid', sizeObj["att_id"]);
                    attSizeImgBlock.setAttribute('data-child-price', sizeObj["prc"]);
                    if (productSizesObj["sizeArray"][0].code == "size") {
                        attSizeImgBlock.setAttribute('title', sizeObj["text"].toUpperCase());
                    } else if (productSizesObj["sizeArray"][0].code == "letter") {
                        attSizeImgBlock.setAttribute('title', "Letter" + " " + sizeObj["text"].toUpperCase());
                    } else if (productSizesObj["sizeArray"][0].code == "choose") {
                        attSizeImgBlock.setAttribute('title', "Number " + sizeObj["text"].toUpperCase());
                    } else {
                        attSizeImgBlock.setAttribute('title', sizeObj["text"].toUpperCase());
                    }
                    if(productSizesObj["sizeArray"].length == 1){
                        attSizeImgBlock.classList.add('active')
                    }
                    attSizeImgBlock.appendChild(attSizeImg);
                    elAttSizeListBlock.appendChild(attSizeImgBlock);
            
                });
            }
        }
    }
    
    function productthirdatt(product3Obj,elAtt3TitleText,elAtt3Block,elAtt3ListBlock,blockType,elAtt3TitleTextSelected){
        if (product3Obj.att3Array.length > 0) {
            if (product3rdObj["att0Array"].length > 0) {
                elAtt3Block.classList.add("active");
                var selectvariant_twrap = generate_html_tag('div', 'selectvariantwrap')
                selectvariant_twrap.classList.add(product3rdObj["att0Array"][0].code)
                var selectvariant_t = generate_html_tag('select', 'inc_variant_tag')
                selectvariant_t.setAttribute('id', 'variant_inc_avail')
                selectvariant_t.setAttribute('blocktype', blockType)
                selectvariant_t.setAttribute('varianttypes', 'third')
                selectvariant_t.addEventListener('change',function(e){
                    var elm=e.currentTarget
                    INC.methods.mappvariants(elm,null,null,"select_option")
                })
                var label = generate_html_tag('label', 'label')
                label.innerText = product3rdObj["att0Array"][0].code;
                selectvariant_twrap.appendChild(label)
                selectvariant_twrap.appendChild(selectvariant_t)
                elAtt3Block.parentNode.appendChild(selectvariant_twrap)
                elAtt3ListBlock.setAttribute('attrcode',  product3rdObj["att0Array"][0].code)
                selectvariant_twrap.setAttribute('attrcode', product3rdObj["att0Array"][0].code)
                var variantoptionzero76 = generate_html_tag('option','variantoptionzero76')
                variantoptionzero76.textContent = "選択してください";
                variantoptionzero76.setAttribute('selected','selected')
                variantoptionzero76.setAttribute('data-size', "");
                variantoptionzero76.setAttribute("datasize", "");
                variantoptionzero76.setAttribute('data-option', "");
                selectvariant_t.appendChild(variantoptionzero76)
                product3rdObj["att0Array"].forEach(function(sizeObj) {
                    var variantoption = generate_html_tag('option', 'variantoption')
                    variantoption.innerText = sizeObj["text"];
                    variantoption.setAttribute('data-zero', sizeObj["text"]);
                    variantoption.setAttribute("datazero", sizeObj["text"].toLocaleLowerCase());
                    variantoption.setAttribute('data-option', "1");
                    variantoption.setAttribute('title', sizeObj["text"].toUpperCase());
                    variantoption.setAttribute('ImgURLC', sizeObj["ImgURLC"]);
                    if(product3rdObj["att0Array"].length == 1){
                        elAtt3Block.parentNode.setAttribute('data-third',sizeObj["text"])
                        variantoption.selected = 'selected'
                    }
                    selectvariant_t.appendChild(variantoption)

                });
            }
            if (product3Obj["att3Array"][0].code != "Color") {
                elAtt3ListBlock.innerHTML = "";
                elAtt3TitleTextSelected.innerText = "- Please Select -"
                product3Obj["att3Array"].forEach(function (sizeObj) {
                    elAtt3TitleText.innerText = product3Obj["att3Array"][0].label;
                    elAtt3Block.classList.add("active");
                    var attSizeImgBlock3 = generate_html_tag('div', 'inc_product_desc_att_third_list_item_img_block');
                    var attSizeImg3 = generate_html_tag('div', 'inc_product_desc_att_third_list_item_img');
                    attSizeImgBlock3.setAttribute('blocktype', blockType)
                    attSizeImgBlock3.setAttribute('varianttypes', 'third')
                    attSizeImgBlock3.addEventListener('click',function(){
                        var elvariantd = this;
                        var elblktyped=this.getAttribute('blocktype')
                        var elvtyped=this.getAttribute('varianttypes')
                        INC.methods.mappvariants(elvariantd,elblktyped,elvtyped)
                    })
                    attSizeImgBlock3.classList.add('avail')
                    attSizeImg3.innerText = sizeObj["text"];
                    attSizeImgBlock3.setAttribute('data-size', sizeObj["text"]);
                    attSizeImgBlock3.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                    attSizeImgBlock3.setAttribute('data-option', "3");
                    attSizeImgBlock3.setAttribute('data-optid', sizeObj["opt_id"]);
                    attSizeImgBlock3.setAttribute('data-attrid', sizeObj["att_id"]);
                    attSizeImgBlock3.setAttribute('data-child-price', sizeObj["prc"]);
                    if(product3Obj["att3Array"].length == 1){
                        attSizeImgBlock.classList.add('active')
                    }
                    attSizeImgBlock3.appendChild(attSizeImg3);
                    elAtt3ListBlock.appendChild(attSizeImgBlock3);
                });
            }
        }
    }
    INC.methods.mappvariants = function (obj, blocktype, type_of_variant,select_option_,empty,selectedclientdetails) {
        if(select_option_ == "select_option"){
        	if(obj.tagName == "OPTION"){
        		obj = obj.parentNode
        	}
            blocktype = obj.getAttribute("blocktype");
            type_of_variant = obj.getAttribute("varianttypes");
        }

        if (obj.parentNode != undefined) {
            var productModuleBlck = obj.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            if (productModuleBlck.classList.contains('inc_product_showcase_block') == trueflag || productModuleBlck.classList.contains('inc_product_modal_block') == trueflag) {
                productModuleBlck = productModuleBlck.parentNode
            }
            if(productModuleBlck.classList.contains('inc_product_block') == trueflag){
                productModuleBlck = productModuleBlck.parentNode.parentNode
            }else if(productModuleBlck.classList.contains('inc_product_info_main_block') == trueflag){
                productModuleBlck = productModuleBlck.parentNode.parentNode.parentNode
            }
            if(select_option_ == "select_option"){
                productModuleBlck = obj.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                if(productModuleBlck.classList.contains('inc_product_modal_block') == trueflag){
                	productModuleBlck = productModuleBlck.parentNode
                }
            }
            
            var productblockshow = productModuleBlck.querySelector('.inc_product_showcase_block .inc_product_block')
            var productblockmod = productModuleBlck.querySelector('.inc_product_modal_block .inc_product_block')
            var mainprdid = productblockshow.getAttribute('data-main_id')
            if(select_option_ == "select_option"){
                var sel_attname = ""
                var sel_ntext=""
                if(type_of_variant == "color"){
                    sel_attname = "data-color"
                    color_text = obj.options[obj.selectedIndex].getAttribute("datacolor");
                    sel_ntext = obj.options[obj.selectedIndex].getAttribute("datacolor");
                }else if(type_of_variant == "zero"){
                    sel_attname = "data-zero"
                    zero_text = obj.options[obj.selectedIndex].getAttribute("datasize");
                    sel_ntext = obj.options[obj.selectedIndex].getAttribute("datasize");
                }else if(type_of_variant == "size"){
                    sel_attname = "data-size"
                    size_text = obj.options[obj.selectedIndex].getAttribute("datasize");
                    sel_ntext = obj.options[obj.selectedIndex].getAttribute("datasize");
                }else if(type_of_variant == "third"){
                    sel_attname = "data-third"
                    third_text = obj.options[obj.selectedIndex].getAttribute("datasize");
                    sel_ntext = obj.options[obj.selectedIndex].getAttribute("datasize");
                }
                if(sel_attname != "" && sel_ntext != null){
	                productblockmod.querySelector('.inc_product_desc_att_block').setAttribute(sel_attname, sel_ntext.toUpperCase())
	                productblockshow.querySelector('.inc_product_desc_att_block').setAttribute(sel_attname, sel_ntext.toUpperCase())
	            }
            }else{
	            if (type_of_variant == "zero") {
	                var sel_variantz = obj.getAttribute('data-size')
	                productblockmod.querySelector('.inc_product_desc_att_block').setAttribute('data-zero', sel_variantz)
	                productblockshow.querySelector('.inc_product_desc_att_block').setAttribute('data-zero', sel_variantz)
	            } else if (type_of_variant == "color") {
	                var sel_variantC = obj.getAttribute('data-color')
	                productblockmod.querySelector('.inc_product_desc_att_block').setAttribute('data-color', sel_variantC)
	                productblockshow.querySelector('.inc_product_desc_att_block').setAttribute('data-color', sel_variantC)
	            } else if (type_of_variant == "size") {
	                var sel_variantS = obj.getAttribute('data-size')
	                productblockmod.querySelector('.inc_product_desc_att_block').setAttribute('data-size', sel_variantS)
	                productblockshow.querySelector('.inc_product_desc_att_block').setAttribute('data-size', sel_variantS)
	            } else if (type_of_variant == "third") {
	                var sel_variantT = obj.getAttribute('data-size')
	                productblockmod.querySelector('.inc_product_desc_att_block').setAttribute('data-third', sel_variantT)
	                productblockshow.querySelector('.inc_product_desc_att_block').setAttribute('data-third', sel_variantT)
	            }
	        }

            var main_p_id = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: mainprdid }).id;
            var findobj = new INC.classes.FindObj({ id: main_p_id });
            var zero_text = productblockmod.querySelector('.inc_product_desc_att_block').getAttribute('data-zero');
            var size_text = productblockmod.querySelector('.inc_product_desc_att_block').getAttribute('data-size');
            var color_text = productblockmod.querySelector('.inc_product_desc_att_block').getAttribute('data-color');
            var third_text = productblockmod.querySelector('.inc_product_desc_att_block').getAttribute('data-third');

            findobj.mainId = mainprdid
            findobj.colorText = ""
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
                productblockshow.querySelector('.inc_product_desc_att_size_title_text_selected').setAttribute('style', 'color:"#4D4D4F";display:none;')
                productblockmod.querySelector('.inc_product_desc_att_size_title_text_selected').setAttribute('style', 'color:"#4D4D4F";display:none;')
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
            var elselcolortextmodal = productblockmod.querySelector('.inc_product_desc_att_color_title_text_selected')
            
            var productColorsObj = INC.dataStore.methods().getProductColorsObj(findobj, obj);
            var product0Obj = INC.dataStore.methods().getProductopt0Obj(findobj, obj);
            var productSizesObj = INC.dataStore.methods().getProductSizesObj(findobj, obj);
            var product3rdObj = INC.dataStore.methods().getProductopt3Obj(findobj, obj);

            var elAttSizeBlock = productblockmod.querySelector('.inc_product_desc_att_size_block')
            var elAttColorBlock = productblockmod.querySelector('.inc_product_desc_att_color_block')
            var elAtt3rdBlock = productblockmod.querySelector('.inc_product_desc_att_third_block')
            var elAttSizeListBlock = productblockmod.querySelector('.inc_product_desc_att_size_list_block')
            var elAtt0ListBlock = productblockmod.querySelector('.inc_product_desc_att_zero_list_block');
            var elAttColorListBlock = productblockmod.querySelector('.inc_product_desc_att_color_list_block')
            var elAtt3ListBlock = productblockmod.querySelector('.inc_product_desc_att_third_list_block')
            var elcolortextmodal=productblockmod.querySelector('.inc_product_desc_att_color_title_text')
            var elAttSizeListBlockshow = productblockshow.querySelector('.inc_product_desc_att_size_list_block')
            var elAtt0ListBlockshow = productblockshow.querySelector('.inc_product_desc_att_zero_list_block')

            var elAttColorListBlockshow = productblockshow.querySelector('.inc_product_desc_att_color_list_block')
            var elAtt3ListBlockshow = productblockshow.querySelector('.inc_product_desc_att_third_list_block')
            var elselcolortextshow=productblockshow.querySelector('.inc_product_desc_att_color_title_text_selected')
            var elcolortextshow=productblockmod.querySelector('.inc_product_desc_att_color_title_text')

            if(select_option_ == "select_option"){
                if(zero_text != undefined){
                    var sizelowzer = zero_text.toLocaleLowerCase()
                    if (productblockmod.querySelector('.inc_product_desc_att_zero_block .inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.active') != null) {
                        productblockmod.querySelector('.inc_product_desc_att_zero_block .inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.active').classList.remove('active')
                    }
                    if (productblockshow.querySelector('.inc_product_desc_att_zero_block .inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.active') != null) {
                        productblockshow.querySelector('.inc_product_desc_att_zero_block .inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.active').classList.remove('active')
                    }
                    if(productblockmod.querySelector('.inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block[datasize="' + sizelowzer + '"]') != null){
                        productblockmod.querySelector('.inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block[datasize="' + sizelowzer + '"]').classList.add('active')
                        productblockmod.querySelector('.inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block[datasize="' + sizelowzer + '"]').classList.add('active')
                    }
                }
                if(size_text != undefined){
                    var sizelowertext = size_text.toLocaleLowerCase()
                    if (productblockmod.querySelector('.inc_product_desc_att_size_block .inc_product_desc_att_size_list_item_img_block.active') != null) {
                        productblockmod.querySelector('.inc_product_desc_att_size_block .inc_product_desc_att_size_list_item_img_block.active').classList.remove('active')
                    }
                    if (productblockshow.querySelector('.inc_product_desc_att_size_block .inc_product_desc_att_size_list_item_img_block.active') != null) {
                        productblockshow.querySelector('.inc_product_desc_att_size_block .inc_product_desc_att_size_list_item_img_block.active').classList.remove('active')
                    }
                    if(productblockmod.querySelector('.inc_product_desc_att_size_block .inc_product_desc_att_size_list_item_img_block[datasize="' + sizelowertext + '"]') != null){
                        productblockmod.querySelector('.inc_product_desc_att_size_block .inc_product_desc_att_size_list_item_img_block[datasize="' + sizelowertext + '"]').classList.add('active')
                        productblockshow.querySelector('.inc_product_desc_att_size_block .inc_product_desc_att_size_list_item_img_block[datasize="' + sizelowertext + '"]').classList.add('active')
                    }
                }
                if(color_text != undefined){
                    var colorlowertext = color_text.toLocaleLowerCase()
                    if (productblockmod.querySelector('.inc_product_desc_att_color_list_item_block.active') != null) {
                        productblockmod.querySelector('.inc_product_desc_att_color_list_item_block.active').classList.remove('active')
                    }
                    if (productblockshow.querySelector('.inc_product_desc_att_color_list_item_block.active') != null) {
                        productblockshow.querySelector('.inc_product_desc_att_color_list_item_block.active').classList.remove('active')
                    }
                    if(productblockmod.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + colorlowertext + '"]') != null){
                        productblockmod.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + colorlowertext + '"]').parentNode.classList.add('active')
                        productblockshow.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + colorlowertext + '"]').parentNode.classList.add('active')
                    }
                    elselcolortextmodal.innerText= colorlowertext
                    if(productblockmod.querySelector('.inc_product_desc_att_color_list_item_block.active div') != null){
                        var color_colorcode = productblockmod.querySelector('.inc_product_desc_att_color_list_item_block.active div').getAttribute('data-colorcode');
                        if(window.innerWidth < 821){
                            
                            elselcolortextmodal.style.backgroundColor = color_colorcode;
                        
                            elselcolortextmodal.style.backgroundColor = color_colorcode;
                        }
                    }
                }
                if(third_text != undefined){
                    var thirdlowertext = third_text.toLocaleLowerCase()
                    if (productblockmod.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_third_list_item_img_block.active') != null) {
                        productblockmod.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_third_list_item_img_block.active').classList.remove('active')
                    }
                    if (productblockshow.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_third_list_item_img_block.active') != null) {
                        productblockshow.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_third_list_item_img_block.active').classList.remove('active')
                    }
                    productblockmod.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_third_list_item_img_block[datasize="' + thirdlowertext + '"]').classList.add('active')
                    productblockshow.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_third_list_item_img_block[datasize="' + thirdlowertext + '"]').classList.add('active')
                }
            }
            if (type_of_variant == "color" && productblockshow.querySelector('.inc_product_desc_att_color_block.active') != null) {
                elAtt0ListBlock.innerHTML = "";
                elAtt0ListBlockshow.innerHTML = "";
                productblockmod.querySelector('.inc_product_desc_att_block').setAttribute("data-zero", '')
                productblockshow.querySelector('.inc_product_desc_att_block').setAttribute("data-zero", '')
                if (product0Obj["att0Array"].length > 0) {
                    var selectvariant_zero = productblockmod.querySelector('.inc_variant_zero_tag')
                    selectvariant_zero.innerHTML = ""
                    var variantoptionzero1_ = generate_html_tag('option','variantoptionzero1')
                    variantoptionzero1_.textContent = "選択してください";
                    variantoptionzero1_.setAttribute('disabled','disabled')
                    variantoptionzero1_.setAttribute('selected','selected')
                    variantoptionzero1_.setAttribute('data-size', "");
                    variantoptionzero1_.setAttribute("datasize", "");
                    variantoptionzero1_.setAttribute('data-option', "");
                    selectvariant_zero.appendChild(variantoptionzero1_)
                    product0Obj['att0Array'].forEach(function(sizeObj) {
                        var variantoption = generate_html_tag('option', 'variantoption')
                        variantoption.innerText = sizeObj["text"];
                        variantoption.setAttribute('data-size', sizeObj["text"]);
                        variantoption.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                        variantoption.setAttribute('data-option', "1");
                        variantoption.setAttribute('title', sizeObj["text"].toUpperCase());
                        variantoption.setAttribute('ImgURLC', sizeObj["ImgURLC"]);
                        if(product0Obj['att0Array'].length == 1 && empty != "empty"){
                            var seldefattr=true
                            if(selectedclientdetails != undefined){
                                for(var at=0;at<selectedclientdetails.length;at++){
                                    if(selectedclientdetails[at].attrcode == product0Obj["att0Array"][0].code && selectedclientdetails[at].text == "選択してください"){
                                        seldefattr = false
                                    }
                                }
                            }
                            if(seldefattr == true){
                                variantoption.selected = 'selected'
                                sel_avail = true
                                productblockmod.querySelector('.inc_product_desc_att_block').setAttribute("data-zero", sizeObj["text"])
                                productblockshow.querySelector('.inc_product_desc_att_block').setAttribute("data-zero", sizeObj["text"])
                            }
                        }else if (zero_text != undefined) {
                            if (zero_text.toLocaleLowerCase() == sizeObj["text"].toLocaleLowerCase()) {
                                variantoption.selected = 'selected'
                                productblockmod.querySelector('.inc_product_desc_att_block').setAttribute("data-zero", sizeObj["text"])
                            	productblockshow.querySelector('.inc_product_desc_att_block').setAttribute("data-zero", sizeObj["text"])
                            }
                        }
                        selectvariant_zero.appendChild(variantoption)
                    });
                    product0Obj["att0Array"].forEach(function (sizeObj) {
                        var attSizeImgBlock0 = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img_block');
                        var attSizeImg0 = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img');
                        attSizeImgBlock0.setAttribute('blocktype', blocktype)
                        attSizeImgBlock0.setAttribute('varianttypes', 'zero')
                        attSizeImgBlock0.addEventListener('click', function () {
                            var elvariantss = this;
                            var elblktype__ = this.getAttribute('blocktype')
                            var elvtype__ = this.getAttribute('varianttypes')
                            INC.methods.mappvariants(elvariantss, elblktype__, elvtype__)
                        })
                        attSizeImgBlock0.classList.add('avail')
                        // attSizeImg0.innerText = sizeObj["text"];
                        attSizeImgBlock0.setAttribute('data-size', sizeObj["text"].replace(/"/g, ''));

                        attSizeImgBlock0.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase().replace(/"/g, ''));
                        attSizeImgBlock0.setAttribute('data-option', "1");
                        attSizeImgBlock0.setAttribute('data-cpid', sizeObj["cpid"])
                        attSizeImgBlock0.setAttribute('data-optid', sizeObj["opt_id"]);
                        attSizeImgBlock0.setAttribute('data-attrid', sizeObj["att_id"]);
                        attSizeImgBlock0.setAttribute('data-child-price', sizeObj["prc"]);
                        var attSizeImgBlockclone0 = attSizeImgBlock0.cloneNode(attSizeImgBlock0);
                        attSizeImgBlockclone0.addEventListener('click',function(){
                            var elvariants_1= this;
                            var elblktypes__2=this.getAttribute('blocktype')
                            var elvtypes__1=this.getAttribute('varianttypes')
                            INC.methods.mappvariants(elvariants_1,elblktypes__2,elvtypes__1)
                        })
                        if(product0Obj['att0Array'].length == 1 && empty != "empty"){
                            var seldefattr1=true
                            if(selectedclientdetails != undefined){
                                for(var at=0;at<selectedclientdetails.length;at++){
                                    if(selectedclientdetails[at].attrcode == product0Obj["att0Array"][0].code && selectedclientdetails[at].text == "選択してください"){
                                        seldefattr1 = false
                                    }
                                }
                            }
                            if(seldefattr1 == true){
                                attSizeImgBlock0.classList.add('active')
                                attSizeImgBlockclone0.classList.add('active')
                            }
                        }
                        attSizeImgBlock0.appendChild(attSizeImg0);
                        elAtt0ListBlock.appendChild(attSizeImgBlock0);
                        elAtt0ListBlockshow.appendChild(attSizeImgBlockclone0);
                        if (zero_text != undefined) {
                            if (zero_text.toLocaleLowerCase() == sizeObj["text"].toLocaleLowerCase()) {
                                attSizeImgBlock0.classList.add('active')
                                attSizeImgBlockclone0.classList.add('active')
                            }
                        }
                    });
                }
            }
            if (type_of_variant == "zero" || type_of_variant == "third" || type_of_variant == "color") {
                elAttSizeListBlock.innerHTML = "";
                elAttSizeListBlockshow.innerHTML = "";
                if (productSizesObj["sizeArray"].length > 0) {
                    elAttSizeBlock.classList.add("active");
                    var selectvariant_size = productblockmod.querySelector('.inc_variant_size_tag')
                    selectvariant_size.innerHTML = ""
                    var variantoptionsize7_ = generate_html_tag('option','variantoptionsize7')
                    variantoptionsize7_.textContent = "選択してください";
                    variantoptionsize7_.setAttribute('disabled','disabled')
                    variantoptionsize7_.setAttribute('selected','selected')
                    variantoptionsize7_.setAttribute('data-size', "");
                    variantoptionsize7_.setAttribute("datasize", "");
                    variantoptionsize7_.setAttribute('data-option', "");
                    selectvariant_size.appendChild(variantoptionsize7_)
                    var sel_avail = false;
                    productblockmod.querySelector('.inc_product_desc_att_block').setAttribute("data-size", '')
                    productblockshow.querySelector('.inc_product_desc_att_block').setAttribute("data-size", '')
                    productSizesObj["sizeArray"].forEach(function(sizeObj) {
                        var variantoption_size = generate_html_tag('option', 'variantoption')
                        variantoption_size.innerText = sizeObj["text"];
                        variantoption_size.setAttribute('data-size', sizeObj["text"]);
                        variantoption_size.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                        variantoption_size.setAttribute('data-option', "1");
                        variantoption_size.setAttribute('title', sizeObj["text"].toUpperCase());
                        variantoption_size.setAttribute('ImgURLC', sizeObj["ImgURLC"]);
                        if(productSizesObj["sizeArray"].length == 1 && empty != "empty"){
                            var seldefattr2=true
                            if(selectedclientdetails != undefined){
                                for(var at=0;at<selectedclientdetails.length;at++){
                                    if(selectedclientdetails[at].attrcode == productSizesObj["sizeArray"][0].code && selectedclientdetails[at].text == "選択してください"){
                                        seldefattr2 = false
                                    }
                                }
                            }
                            if(seldefattr2 == true){
                                variantoption_size.selected = 'selected'
                                productblockmod.querySelector('.inc_product_desc_att_block').setAttribute("data-size", sizeObj["text"])
                                productblockshow.querySelector('.inc_product_desc_att_block').setAttribute("data-size", sizeObj["text"])
                            }
                        }else if (size_text != undefined) {
                            if (size_text.toLocaleLowerCase() == sizeObj["text"].toLocaleLowerCase()) {
                                variantoption_size.selected = 'selected'
                                productblockmod.querySelector('.inc_product_desc_att_block').setAttribute("data-size", sizeObj["text"])
                            	productblockshow.querySelector('.inc_product_desc_att_block').setAttribute("data-size", sizeObj["text"])
                            }
                        }
                        selectvariant_size.appendChild(variantoption_size)

                    });
                    productSizesObj["sizeArray"].forEach(function (sizeObj) {
                        var attSizeImgBlock = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img_block');
                        var attSizeImg = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img');
                        attSizeImgBlock.setAttribute('blocktype', blocktype)
                        attSizeImgBlock.setAttribute('varianttypes', 'size')
                        attSizeImgBlock.addEventListener('click',function(){
                            var elvariants2 = this;
                            var elblktypes2=this.getAttribute('blocktype')
                            var elvtypes2=this.getAttribute('varianttypes')
                            INC.methods.mappvariants(elvariants2,elblktypes2,elvtypes2)
                        })
                        attSizeImgBlock.classList.add('avail')
                        // attSizeImg.innerText = sizeObj["text"];
                        attSizeImgBlock.setAttribute('data-size', sizeObj["text"]);
                        attSizeImgBlock.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                        attSizeImgBlock.setAttribute('data-option', "2");
                        attSizeImgBlock.appendChild(attSizeImg);
                        var attSizeImgBlockclone = attSizeImgBlock.cloneNode(attSizeImgBlock);
                        attSizeImgBlockclone.addEventListener('click',function(){
                            var elvariants_ = this;
                            var elblktypes_=this.getAttribute('blocktype')
                            var elvtypes_=this.getAttribute('varianttypes')
                            INC.methods.mappvariants(elvariants_,elblktypes_,elvtypes_)
                        })
                        if(productSizesObj["sizeArray"].length == 1 && empty != "empty"){
                            var seldefattr3=true
                            if(selectedclientdetails != undefined){
                                for(var at=0;at<selectedclientdetails.length;at++){
                                    if(selectedclientdetails[at].attrcode == productSizesObj["sizeArray"][0].code && selectedclientdetails[at].text == "選択してください"){
                                        seldefattr3 = false
                                    }
                                }
                            }
                            if(seldefattr3 == true){
                                attSizeImgBlock.classList.add('active')
                                attSizeImgBlockclone.classList.add('active')
                            }
                        }
                        elAttSizeListBlock.appendChild(attSizeImgBlock);
                        elAttSizeListBlockshow.appendChild(attSizeImgBlockclone);
                        if (size_text != undefined) {
                            if (size_text.toLocaleLowerCase() == sizeObj["text"].toLocaleLowerCase()) {
                                attSizeImgBlock.classList.add('active')
                                attSizeImgBlockclone.classList.add('active')
                            }
                        }
                    });
                }
            } else if(size_text != undefined){
                var sizelowertext = size_text.toLocaleLowerCase()
                if (productblockmod.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.active') != null) {
                    productblockmod.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.active').classList.remove('active')
                }
                if (productblockshow.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.active') != null) {
                    productblockshow.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.active').classList.remove('active')
                }
                if(productblockmod.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' + sizelowertext + '"]') != null){
                    productblockmod.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' + sizelowertext + '"]').classList.add('active')
                    productblockshow.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' + sizelowertext + '"]').classList.add('active')
                }
            }
            //type_of_variant == "zero" || 
            //|| type_of_variant == "third"
            //&& checkfl == false)
            var seldefattrc1=true
            var checkfl = false;
            if(document.querySelector('.variation_selection .attChoice') != null){
            	checkfl = true
            }
            if (type_of_variant == "size" || type_of_variant == "third") {
                elAttColorListBlock.innerHTML = "";
                elAttColorListBlockshow.innerHTML = "";
                if (productModuleBlck.querySelector('.inc_product_modal_block .inc_product_desc_att_color_title_text_selected').innerText == "" && productModuleBlck.querySelector('.inc_product_desc_att_color_title_text_selected').innerText == "") {
                    productModuleBlck.querySelector('.inc_product_modal_block .inc_product_desc_att_color_title_text_selected').innerText = ""
                    productModuleBlck.querySelector('.inc_product_desc_att_color_title_text_selected').innerText = ""
                }
                var selcol = findobj.colorText
                if (productColorsObj["colorArray"].length > 0) {
                    // if(empty == "empty"){
                        if(selectedclientdetails != undefined){
                            for(var at=0;at<selectedclientdetails.length;at++){
                                if(selectedclientdetails[at].attrcode == productColorsObj["colorArray"][0].code && selectedclientdetails[at].text == "選択してください"){
                                    seldefattrc1 = false
                                }
                            }
                        }
                    // }
                    elAttColorBlock.classList.add("active");
                    var clrselflag=false;
                    var clrarrac = 0
                    var selectvariant_color = productblockmod.querySelector('.inc_variant_color_tag')
                    selectvariant_color.innerHTML = ""
                    var variantoptioncolor_ = generate_html_tag('option','variantoptioncolor')
                    variantoptioncolor_.textContent = "選択してください";
                    variantoptioncolor_.setAttribute('disabled','disabled')
                    variantoptioncolor_.setAttribute('selected','selected')
                    variantoptioncolor_.setAttribute('data-size', "");
                    variantoptioncolor_.setAttribute("datasize", "");
                    variantoptioncolor_.setAttribute('data-option', "");
                    selectvariant_color.appendChild(variantoptioncolor_)
                    productColorsObj["colorArray"].forEach(function(sizeObj) {
                    	if (selcol == sizeObj["text"]) {
	                        findobj.colorText = sizeObj["text"]
	                        findobj.color_text = sizeObj["text"]
	                    } else {
	                        findobj.colorText = ""
	                        findobj.color_text = ""
	                    }
                        var variantoption__ = generate_html_tag('option', 'variantoption')
                        variantoption__.innerText = sizeObj["text"];
                        variantoption__.setAttribute('data-color', sizeObj["text"]);
                        variantoption__.setAttribute("datacolor", sizeObj["text"].toLocaleLowerCase());
                        variantoption__.setAttribute('data-option', "1");
                        variantoption__.setAttribute('title', sizeObj["text"].toUpperCase());
                        variantoption__.setAttribute('ImgURLC', sizeObj["ImgURLC"]);
                        if(productColorsObj["colorArray"].length == 1 && empty != "empty"){
                            var seldefattrc=true
                            if(selectedclientdetails != undefined){
                                for(var at=0;at<selectedclientdetails.length;at++){
                                    if(selectedclientdetails[at].attrcode == productColorsObj["colorArray"][0].code && selectedclientdetails[at].text == "選択してください"){
                                        seldefattrc = false
                                    }
                                }
                            }
                            if(seldefattrc == true){
                                variantoption__.selected = 'selected'
                                productblockmod.querySelector('.inc_product_desc_att_block').setAttribute("data-color", sizeObj["text"])
                                productblockshow.querySelector('.inc_product_desc_att_block').setAttribute("data-color", sizeObj["text"])
                            }
                        }else if (color_text != null){
                            if(color_text.toLocaleLowerCase() == sizeObj.text.toLocaleLowerCase()){
                                variantoption__.selected = 'selected'
                            }
                        }
                        selectvariant_color.appendChild(variantoption__)

                    });
                    productColorsObj["colorArray"].forEach(function (colorObj) {
                        if (selcol == colorObj["text"]) {
                            findobj.colorText = colorObj["text"]
                            findobj.color_text = colorObj["text"]
                        } else {
                            findobj.colorText = ""
                            findobj.color_text = ""
                        }
                        var attColorBlock = generate_html_tag('div', 'inc_product_desc_att_color_list_item_block')
                        var attColorImgBlock = generate_html_tag('div', 'inc_product_desc_att_color_list_item_img_block');
                        var attColorImg = generate_html_tag('div', 'inc_product_desc_att_color_list_item_img');
                        
                        attColorImgBlock.setAttribute('blocktype', blocktype)
                        attColorImgBlock.setAttribute('varianttypes', 'color')
                        attColorImgBlock.addEventListener('click',function(){
                            var elvariantc2 = this;
                            var elblktypec2=this.getAttribute('blocktype')
                            var elvtypec2=this.getAttribute('varianttypes')
                            INC.methods.mappvariants(elvariantc2,elblktypec2,elvtypec2)
                        })
                        imgcolorgen(colorObj,attColorImg)

                        var colorTitle = generate_html_tag('a');
                        colorTitle.innerText = colorObj["text"]
                        colorTitle.title = colorObj["text"];
                        colorTitle.addEventListener('click', function (e) { e.preventDefault(); })
                        attColorImg.appendChild(colorTitle);
                        
                        attColorImgBlock.setAttribute('data-color', colorObj["text"]);
                        attColorImgBlock.setAttribute("datacolor", colorObj["text"].toLocaleLowerCase());
                        attColorImgBlock.setAttribute('data-option', "0");
                        attColorImgBlock.setAttribute('data-cpid', colorObj["cpid"])
                        attColorImgBlock.setAttribute('data-colorcode', colorObj["colorCode"])
                        attColorImgBlock.setAttribute('data-optionimge', colorObj["imgSrc"])
                        attColorImgBlock.appendChild(attColorImg);
                        attColorBlock.appendChild(attColorImgBlock);
                        var attColorBlockclone = attColorBlock.cloneNode(attColorBlock);
                        attColorBlockclone.querySelector('.inc_product_desc_att_color_list_item_img_block').addEventListener('click',function(){
                            var elvariantc1s = this;
                            var elblktypec2s=this.getAttribute('blocktype')
                            var elvtypec2s=this.getAttribute('varianttypes')
                            INC.methods.mappvariants(elvariantc1s,elblktypec2s,elvtypec2s)
                        })
                        if(document.querySelector('.sidebar_outer.sidebar_outer_active') != null || INC.config.pageType == 'cartPage'){
                            if(clrarrac > 5){
                                var inc_more_color1 = generate_html_tag('a', 'inc_more_color')
                                inc_more_color1.target = "_blank";
                                inc_more_color1.innerText = '+';
                                inc_more_color1.addEventListener('click',function(ee){
                                    if(window.innerWidth < 821){
                                        ee.preventDefault()
                                    }
                                    var hrefd2 = productblockshow.querySelector('.inc_product_img_main_img a').href
                                    this.setAttribute('href',hrefd2)
                                    INC.methods.sendBundleClickTracking(productblockshow.getAttribute('data-main_id'));
                                    getTrackingPixel();
                                    if(window.innerWidth < 821){
                                        setTimeout(function(){
                                            window.location.href = hrefd2
                                        },2000)
                                    }
                                })
                                var inc_more_color1clone = inc_more_color1.cloneNode(inc_more_color1);
                                if(elAttColorListBlock.querySelector('.inc_more_color') == null){
                                    elAttColorListBlock.appendChild(inc_more_color1);
                                    elAttColorListBlockshow.appendChild(inc_more_color1clone);
                                    var cloneelinc_more_color = elAttColorListBlockshow.querySelector('.inc_more_color')
                                    cloneelinc_more_color.addEventListener('click',function(ec){
                                        if(window.innerWidth < 821){
                                            ec.preventDefault()
                                        }
                                        var hrefd1 = productblockshow.querySelector('.inc_product_img_main_img a').href
                                        this.setAttribute('href',hrefd1)
                                        INC.methods.sendBundleClickTracking(productblockshow.getAttribute('data-main_id'));
                                        getTrackingPixel();
                                        if(window.innerWidth < 821){
                                            setTimeout(function(){
                                                window.location.href = hrefd1
                                            },2000)
                                        }
                                    })
                                }
                                return
                            }
                        }
                        clrarrac++
                        elAttColorListBlock.appendChild(attColorBlock);
                        elAttColorListBlockshow.appendChild(attColorBlockclone);
                       
                        if (color_text != null){
                            if(color_text.toLocaleLowerCase() == colorObj.text.toLocaleLowerCase()){
                                clrselflag = true
                                attColorBlock.classList.add('active');
                                attColorBlockclone.classList.add('active');
                                attColorImgBlock.classList.add('active');
                                attColorBlockclone.querySelector('.inc_product_desc_att_color_list_item_img_block').classList.add('active');
                                elselcolortextshow.innerText= colorObj.text
                                elselcolortextmodal.innerText= colorObj.text + ":"
                                if(window.innerWidth < 821){
                                    elcolortextmodal.style.backgroundColor = colorObj["colorCode"];
                                    elcolortextshow.style.backgroundColor = colorObj["colorCode"];
                                }
                                
                            }else if(productColorsObj["colorArray"].length == 1 && empty != "empty"){
                                if(seldefattrc1 == true){
                                    clrselflag = true
                                    attColorBlock.classList.add('active');
                                    attColorBlockclone.classList.add('active');
                                    attColorImgBlock.classList.add('active');
                                    attColorBlockclone.querySelector('.inc_product_desc_att_color_list_item_img_block').classList.add('active');
                                    productblockmod.querySelector('.inc_product_desc_att_block').setAttribute('data-color',colorObj.text)
                                    productblockshow.querySelector('.inc_product_desc_att_block').setAttribute('data-color',colorObj.text)
                                    elselcolortextshow.innerText= colorObj.text
                                    elselcolortextmodal.innerText= colorObj.text + ":"
                                    if(window.innerWidth < 821){
                                        elcolortextmodal.style.backgroundColor = colorObj["colorCode"];
                                        elcolortextshow.style.backgroundColor = colorObj["colorCode"];
                                    }
                                }
                            }
                        }
                    });
                    if(clrselflag == falseflag && seldefattrc1 == true){
                        var ctext=productblockmod.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block').getAttribute('data-color')
                        var color_colorcodesel = productblockmod.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block').getAttribute('data-colorcode');
                        productblockmod.querySelector('.inc_product_desc_att_block').setAttribute('data-color',ctext)
                        productblockshow.querySelector('.inc_product_desc_att_block').setAttribute('data-color',ctext)
                        elAttColorListBlock.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block').parentNode.classList.add('active')
                        elAttColorListBlockshow.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block').parentNode.classList.add('active')
                        elselcolortextshow.innerText= ctext
                        elselcolortextmodal.innerText= ctext
                        if(window.innerWidth < 821){
                            elcolortextmodal.style.backgroundColor = color_colorcodesel;
                            elcolortextshow.style.backgroundColor = color_colorcodesel;
                        }
                    }
                }
            } else {
                var attrclrchek=true;
                if (productColorsObj["colorArray"].length > 0) {
                    if(selectedclientdetails != undefined){
                        for(var at=0;at<selectedclientdetails.length;at++){
                            if(selectedclientdetails[at].attrcode == productColorsObj["colorArray"][0].code && selectedclientdetails[at].text == "選択してください"){
                                attrclrchek = false
                            }
                        }
                    }
                }
                if(attrclrchek == true){
                    var colorlowertext = ""
                    if(color_text != undefined){
                        colorlowertext = color_text.toLocaleLowerCase()
                    }
                    if (productblockmod.querySelector('.inc_product_desc_att_color_list_item_block.active') != null) {
                        productblockmod.querySelector('.inc_product_desc_att_color_list_item_block.active').classList.remove('active')
                    }
                    if (productblockshow.querySelector('.inc_product_desc_att_color_list_item_block.active') != null) {
                        productblockshow.querySelector('.inc_product_desc_att_color_list_item_block.active').classList.remove('active')
                    }
                    if(productblockmod.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + colorlowertext + '"]') != null){
                        productblockmod.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + colorlowertext + '"]').parentNode.classList.add('active')
                        productblockshow.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + colorlowertext + '"]').parentNode.classList.add('active')
                        elselcolortextshow.innerText= colorlowertext
                        elselcolortextmodal.innerText= colorlowertext
                        if(productblockmod.querySelector('.inc_product_desc_att_color_list_item_block.active div') != null){
                            var color_colorcode = productblockmod.querySelector('.inc_product_desc_att_color_list_item_block.active div').getAttribute('data-colorcode');
                            if(window.innerWidth < 821){
                                elcolortextmodal.style.backgroundColor = color_colorcode;
                                elcolortextshow.style.backgroundColor = color_colorcode;
                            }
                        }
                    }
                }
            }
            if (type_of_variant == "zero" || type_of_variant == "size" || type_of_variant == "color") {
                elAtt3ListBlock.innerHTML = "";
                elAtt3ListBlockshow.innerHTML = "";
                if (product3rdObj["att3Array"].length > 0) {
                    elAtt3rdBlock.classList.add("active");
                    var selectvariant_third = productblockmod.querySelector('.inc_variant_tag')
                    selectvariant_third.innerHTML = ""
                    var variantoption_third = generate_html_tag('option','variantoption')
                    variantoption_third.textContent = "選択してください";
                    variantoption_third.setAttribute('selected','selected')
                    variantoption_third.setAttribute('data-size', "");
                    variantoption_third.setAttribute("datasize", "");
                    variantoption_third.setAttribute('data-option', "");
                    selectvariant_third.appendChild(variantoption_third)
                    product3rdObj["att0Array"].forEach(function(sizeObj) {
                        var variantoption_th = generate_html_tag('option', 'variantoption')
                        variantoption_th.innerText = sizeObj["text"];
                        variantoption_th.setAttribute('data-zero', sizeObj["text"]);
                        variantoption_th.setAttribute("datazero", sizeObj["text"].toLocaleLowerCase());
                        variantoption_th.setAttribute('data-option', "1");
                        variantoption_th.setAttribute('title', sizeObj["text"].toUpperCase());
                        variantoption_th.setAttribute('ImgURLC', sizeObj["ImgURLC"]);
                        if(product3rdObj["att0Array"].length == 1 && empty != "empty"){
                            var seldefattrt=true
                            if(selectedclientdetails != undefined){
                                for(var at=0;at<selectedclientdetails.length;at++){
                                    if(selectedclientdetails[at].attrcode == product3rdObj["att0Array"][0].code && selectedclientdetails[at].text == "選択してください"){
                                        seldefattrt = false
                                    }
                                }
                            }
                            if(seldefattrt == true){
                                productblockmod.querySelector('.inc_product_desc_att_block').setAttribute("data-third", sizeObj["text"])
                                productblockshow.querySelector('.inc_product_desc_att_block').setAttribute("data-third", sizeObj["text"])
                                variantoption_th.selected = 'selected'
                            }
                        }else if (third_text != undefined) {
                            if (third_text.toLocaleLowerCase() == sizeObj["text"].toLocaleLowerCase()) {
                                variantoption_th.selected = 'selected'
                            }
                        }
                        selectvariant_third.appendChild(variantoption_th)

                    });
                    product3rdObj["att3Array"].forEach(function (sizeObj) {
                        var attSizeImgBlock3 = generate_html_tag('div', 'inc_product_desc_att_third_list_item_img_block');
                        var attSizeImg3 = generate_html_tag('div', 'inc_product_desc_att_third_list_item_img');
                        
                        attSizeImgBlock3.setAttribute('blocktype', blocktype)
                        attSizeImgBlock3.setAttribute('varianttypes', 'third')
                        attSizeImgBlock3.addEventListener('click',function(){
                            var elvarianttd = this;
                            var elblktypetd=this.getAttribute('blocktype')
                            var elvtypetd=this.getAttribute('varianttypes')
                            INC.methods.mappvariants(elvarianttd,elblktypetd,elvtypetd)
                        })
                        attSizeImg3.innerText = sizeObj["text"];
                        attSizeImgBlock3.setAttribute('data-size', sizeObj["text"]);
                        attSizeImgBlock3.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                        attSizeImgBlock3.setAttribute('data-option', "3");
                        attSizeImgBlock3.appendChild(attSizeImg3);
                        var attSizeImgBlock3clone = attSizeImgBlock3.cloneNode(attSizeImgBlock3);
                        attSizeImgBlock3clone.querySelector('.inc_product_desc_att_third_list_item_img_block').addEventListener('click',function(){
                            var elvarianttd_ = this;
                            var elblktypetd_=this.getAttribute('blocktype')
                            var elvtypetd_=this.getAttribute('varianttypes')
                            INC.methods.mappvariants(elvarianttd_,elblktypetd_,elvtypetd_)
                        })
                        if(product3rdObj["att0Array"].length == 1 && empty != "empty"){
                            var seldefattrt1=true
                            if(selectedclientdetails != undefined){
                                for(var at=0;at<selectedclientdetails.length;at++){
                                    if(selectedclientdetails[at].attrcode == product3rdObj["att0Array"][0].code && selectedclientdetails[at].text == "選択してください"){
                                        seldefattrt1 = false
                                    }
                                }
                            }
                            if(seldefattrt1 == true){
                                attSizeImgBlock3.classList.add('active')
                                attSizeImgBlock3clone.classList.add('active')
                            }
                        }
                        elAtt3ListBlock.appendChild(attSizeImgBlock3);
                        elAtt3ListBlockshow.appendChild(attSizeImgBlock3clone);
                        if (third_text != undefined) {
                            if (third_text.toLocaleLowerCase() == sizeObj["text"].toLocaleLowerCase()) {
                                attSizeImgBlock3.classList.add('active')
                                attSizeImgBlock3clone.classList.add('active')
                            }
                        }
                    });
                }
            } else if(third_text != null){
                var thirdlowertext = third_text.toLocaleLowerCase()
                if (productblockmod.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block.active') != null) {
                    productblockmod.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block.active').classList.remove('active')
                }
                if (productblockshow.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block.active') != null) {
                    productblockshow.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block.active').classList.remove('active')
                }
                productblockmod.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block[datacolor="' + thirdlowertext + '"]').classList.add('active')
                productblockshow.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block[datacolor="' + thirdlowertext + '"]').classList.add('active')
            }

            var checkzeroselflag=false
            if (productblockmod.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.active') == null) {
                checkzeroselflag = true
            }
                
            var flag_check = INC.methods.checkVariantSelection(productblockmod)
            INC.methods.updateProductBlock(productblockshow, findobj, blocktype);
            INC.methods.updateProductBlock(productblockmod, findobj, blocktype);
            setTimeout(function(){
                var flag_check = INC.methods.checkVariantSelection(productblockmod)
                if(flag_check != 1){
                    if(productblockmod.classList.contains('inc_product_block') == trueflag){
                        productblockmod = productblockmod.parentNode.parentNode
                    }
                    if(productblockmod.classList.contains('inc_product_modal_block') == trueflag){
                        productblockmod = productblockmod.parentNode
                    }
                    if(productblockmod.classList.contains('inc_product_block') == trueflag){
                        productblockmod = productblockmod.parentNode
                    }
                    var prd_blck=productblockmod.querySelector('.inc_product_modal_block')
                    
                    if(prd_blck != null){
                        if (prd_blck.querySelector(".inc_product_desc_qty_add_btn_block .elAddBlock") != null){
                        	prd_blck.querySelector(".inc_product_desc_qty_add_btn_block .elAddBlock").classList.remove('inactive')
                            prd_blck.querySelector(".inc_product_desc_qty_add_btn_block .elAddBlock").classList.remove('inc_active')
                        }
                    }else{
                        productblockmod.querySelector(".inc_product_desc_qty_add_btn_block .elAddBlock").classList.remove('inc_active')
                    }
                }else{
                    if(prd_blck != null){
                        if (prd_blck.querySelector(".inc_product_desc_qty_add_btn_block .elAddBlock") != null){
                            if (prd_blck.querySelector(".inc_product_desc_qty_add_btn_block .elAddBlock").classList.contains('inactive') == false){
                                prd_blck.querySelector(".inc_product_desc_qty_add_btn_block .elAddBlock").classList.remove('inactive')
                                prd_blck.querySelector(".inc_product_desc_qty_add_btn_block .elAddBlock").classList.add('inc_active')
                                prd_blck.querySelector(".inc_product_desc_qty_add_btn_block .elAddBlock").setAttribute('style', '')
                                
                            }
                        }
                    }else{
                        if (productblockmod.querySelector(".inc_product_desc_qty_add_btn_block .elAddBlock").classList.contains('inactive') == false){
                            productblockmod.querySelector(".inc_product_desc_qty_add_btn_block .elAddBlock").classList.remove('inactive')
                            productblockmod.querySelector(".inc_product_desc_qty_add_btn_block .elAddBlock").setAttribute('style', '')
                            productblockmod.querySelector(".inc_product_desc_qty_add_btn_block .elAddBlock").classList.add('inc_active')
                            
                        }
                    }
                    INC.methods.updateSelectedTxt(productblockmod)
                }
            },10)
            if(window.innerWidth < 821){
                if(document.querySelector(".inc_product_block.show_overlay") != null){
                    if (productblockshow.querySelector('.inc_product_desc_att_block').classList.contains('moreThanOne') == falseflag){
                        var allact = document.querySelectorAll('.inc_product_desc_att_block.active')
                        if (document.querySelector('.inc_product_modal_block.active') == null && document.querySelector('.inc_sidebar_modal_block.active') == null) {
                            document.querySelector('html').classList.remove('inc_overlay');
                            document.querySelector('body').classList.remove('inc_popup_open');
                        }
                        for (var actelm in allact) {
                            if(allact[actelm] != null && Object.prototype.hasOwnProperty.call(allact, actelm)){
                                allact[actelm].classList.remove('active')
                            }
                        }

                        if (document.querySelector('.inc_product_block.show_overlay') != null) {
                            document.querySelector('.inc_product_block.show_overlay').classList.remove('show_overlay')
                        }
                    }
                }
            }
        }
    }

    INC.methods.checkVariantSelection = function (prod_module_block) {
        var attr_flag_color = false;
        var attr_flag_size = false;
        var attr__flag_zero = false;
        var attr__flag_third = false;
        if(prod_module_block.classList.contains('inc_product_block') == trueflag){
        	prod_module_block = prod_module_block.parentNode.parentNode
        }
        if(prod_module_block.classList.contains('inc_product_modal_block') == trueflag){
        	prod_module_block = prod_module_block.parentNode
        }
        var prd_blck=prod_module_block.querySelector('.inc_product_modal_block')
        var elSize = prd_blck.querySelector('.inc_product_desc_att_size_block.active')
        var elColor = prd_blck.querySelector('.inc_product_desc_att_color_block.active')
        var elattr0 = prd_blck.querySelector('.inc_product_desc_att_zero_block.active')
        var elthird3 = prd_blck.querySelector('.inc_product_desc_att_third_block.active')
        if (elColor != null && elattr0 != null && elthird3 != null && elSize != null) {
            if ((elColor.querySelector('.inc_product_desc_att_color_list_item_block.active') != null && elattr0.querySelector('.inc_product_desc_att_size_list_item_img_block.active') != null && elthird3.querySelector('.inc_product_desc_att_size_list_item_img_block.active') != null && elSize.querySelector('.inc_product_desc_att_size_list_item_img_block.active') != null)) {
                attr_flag_color = true
                attr__flag_zero = true
                attr__flag_third = true;
                attr_flag_size = true
            }
        } else if (elColor != null && elattr0 != null && elSize != null) {
            if (elColor.querySelector('.inc_product_desc_att_color_list_item_block.active') != null && elattr0.querySelector('.inc_product_desc_att_size_list_item_img_block.active') != null && elSize.querySelector('.inc_product_desc_att_size_list_item_img_block.active') != null) {
                attr_flag_color = true
                attr__flag_zero = true
                attr__flag_third = true;
                attr_flag_size = true
            }
        } else if (elColor != null && elattr0 != null) {
            if (elColor.querySelector('.inc_product_desc_att_color_list_item_block.active') != null && elattr0.querySelector('.inc_product_desc_att_size_list_item_img_block.active') != null) {
                attr_flag_color = true
                attr__flag_zero = true
                attr_flag_size = true;
                attr__flag_third = true;
            }
        } else {
            if (elColor != null) {
                if (elColor.querySelector('.inc_product_desc_att_color_list_item_block.active') != null) {
                    attr_flag_color = true
                }
            } else {
                attr_flag_color = true
            }
            if (elattr0 != null) {
                if (elattr0.querySelector('.inc_product_desc_att_size_list_item_img_block.active') != null) {
                    attr__flag_zero = true
                }
            } else {
                attr__flag_zero = true
            }
            if (elSize != null) {
                if (elSize.querySelector('.inc_product_desc_att_size_list_item_img_block.active') != null) {
                    attr_flag_size = true
                }
            } else {
                attr_flag_size = true
            }
            if (elthird3 != null) {
                if (elthird3.querySelector('.inc_product_desc_att_size_list_item_img_block.active') != null) {
                    attr__flag_third = true
                }
            } else {
                attr__flag_third = true
            }
        } 
        if (attr_flag_color == trueflag && attr__flag_zero == trueflag && attr__flag_third == trueflag) {
            if(prd_blck != null){
                if (prd_blck.querySelector(".inc_product_desc_qty_add_btn_block .elAddBlock") != null){
                    if (prd_blck.querySelector(".inc_product_desc_qty_add_btn_block .elAddBlock").classList.contains('inactive')){
                        prd_blck.querySelector(".inc_product_desc_qty_add_btn_block .elAddBlock").classList.remove('inactive')
                        prd_blck.querySelector(".inc_product_desc_qty_add_btn_block .elAddBlock").classList.add('inc_active')
                        prd_blck.querySelector(".inc_product_desc_qty_add_btn_block .elAddBlock").setAttribute('style', '')
                        
                    }
                }
            }else{
                if (prod_module_block.querySelector(".inc_product_desc_qty_add_btn_block .elAddBlock").classList.contains('inactive')){
                    prod_module_block.querySelector(".inc_product_desc_qty_add_btn_block .elAddBlock").classList.remove('inactive')
                    prod_module_block.querySelector(".inc_product_desc_qty_add_btn_block .elAddBlock").setAttribute('style', '')
                    prod_module_block.querySelector(".inc_product_desc_qty_add_btn_block .elAddBlock").classList.add('inc_active')
                    
                }
            }
            INC.methods.updateSelectedTxt(prod_module_block)
            return 1
        } else {
            if (attr_flag_size == falseflag) {
                return 2
            } else if (attr__flag_third == falseflag) {
                return 3
            } else if (attr_flag_color == falseflag) {
                return 0
            } else {
                return 0
            }
        }
    }
    function imgcolorgen(colorObj,attColorImg){
        var colrdcode=false;
        var imagecode=false;
        if (colorObj["colorCode"] != "" && colorObj["colorCode"] != undefined) {
            colrdcode = true
        }else if (colorObj["imgSrc"].length > 0) {
            if (colorObj["colorCode"] == "" && colorObj["imgSrc"].charAt(0) != "#") {
                var colorImg = generate_html_tag('img');
                colorImg.setAttribute('alt', colorObj["text"])
                colorImg.src = colorObj["imgSrc"]
                attColorImg.appendChild(colorImg);
            }else{
                imagecode = true
            }
        }
        if(colrdcode == trueflag || imagecode == trueflag){
            var spancolorcode = generate_html_tag('span');
            spancolorcode.setAttribute('alt', colorObj["text"])
            if(imagecode == trueflag){
                spancolorcode.style.backgroundColor = colorObj["imgSrc"];
            }else {
                spancolorcode.style.backgroundColor = colorObj["colorCode"];
            }
            attColorImg.appendChild(spancolorcode);
        }
    }
    INC.methods.updateSelectedTxt = function(prod_module_block,modal){
    	var prd_blck=prod_module_block.querySelector('.inc_product_modal_block')
    	if(modal == "modal"){
			prd_blck=prod_module_block
    	}
	    
	    if(prd_blck != null){
	    	if(prd_blck.querySelector('.inc_product_desc_att_block') != null){
			    var zero_text = prd_blck.querySelector('.inc_product_desc_att_block').getAttribute('data-zero');
			    var size_text = prd_blck.querySelector('.inc_product_desc_att_block').getAttribute('data-size');
			    var color_text = prd_blck.querySelector('.inc_product_desc_att_block').getAttribute('data-color');
			    var third_text = prd_blck.querySelector('.inc_product_desc_att_block').getAttribute('data-third');

			    var sel_attr_text = ""
			     
			    if (color_text != "" && color_text != null) {
			        if (sel_attr_text == "") {
			            sel_attr_text = color_text
			        } else {
			            sel_attr_text = color_text
			        }
			    } 
			    if (zero_text != "" && zero_text != null) {
			        if (sel_attr_text == "") {
			            sel_attr_text = zero_text
			        } else {
			            sel_attr_text = sel_attr_text + " / " + zero_text
			        }
			    }
			    if (size_text != "" && size_text != null) {
			        if (sel_attr_text == "") {
			            sel_attr_text = size_text
			        } else {   
			            sel_attr_text = sel_attr_text + " / " + size_text
			        }
			    } 

			    if (third_text != null) {
			        if (sel_attr_text == "") {
			            sel_attr_text = third_text
			        } else {   
			            sel_attr_text = sel_attr_text + " / " + third_text
			        }
			    } 

			    prd_blck.parentNode.querySelector('.inc_product_desc_att_size_title_text').innerText = sel_attr_text.toUpperCase().replace('CM','cm')
			    prd_blck.parentNode.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title', sel_attr_text.toUpperCase().replace('CM','cm'))
			    if(modal == "modal"){
			    	prd_blck.parentNode.querySelector('.inc_product_desc_att_size_title_text').textContent = sel_attr_text.toUpperCase().replace('CM','cm')
			    }
			}
		}
	}
    INC.methods.updateProductBlock = function (productBlockel, findObj, blockType) {
        var dataStore = INC.dataStore;
        var productBlock = productBlockel;
        var productModuleBlock = productBlock.parentNode.parentNode;
        var modal_attr_block = productModuleBlock.querySelector('.inc_product_modal_block')
        var zero_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-zero');
        var size_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-size');
        var color_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-color');
        var third_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-third');
        var sel_attr_text = ""
        findObj.nainIddd = productBlock.getAttribute('data-main_id')
        if (color_text != undefined) {
            findObj.color_text = color_text
            findObj.colorText = color_text
            sel_attr_text = color_text.split('_')[0].toUpperCase()
        } else {
            findObj.color_text = ""
        }
        if (zero_text != undefined) {
            findObj.zero_text = zero_text
            findObj.zeroText = zero_text
            
            if (sel_attr_text == "") {
                sel_attr_text = zero_text.split('_')[0].toUpperCase()
            } else {
            	if(zero_text != ""){
                	sel_attr_text = sel_attr_text + " / " + zero_text.split('_')[0].toUpperCase()
            	}
            }
        } else {
            findObj.zeroText = ""
            findObj.zero_text = ""
        }
        if (size_text != undefined && size_text != "") {
            findObj.sizeText = size_text
            if(sel_attr_text == ""){
                sel_attr_text = size_text.toUpperCase()
            }else{
                sel_attr_text = sel_attr_text + " / " + size_text.toUpperCase()
            }
        } else {
            findObj.sizeText = ""
        }

        if (third_text != undefined) {
            findObj.thirdText = third_text
            if(third_text != ""){
                if(sel_attr_text == ""){
                    sel_attr_text = third_text.toUpperCase()
                }else{
                    sel_attr_text = sel_attr_text + " / " + third_text.toUpperCase()
                }
            }
        } else {
            findObj.thirdText = ""
        }
        if (productBlock.querySelector('.inc_product_variant_simple_text') != null) {
            if(blockType == "sidebar" || blockType == "am"){
                productBlock.querySelector('.inc_product_variant_simple_text').innerText = "カラーを選ぶ"
            }else{
                productBlock.querySelector('.inc_product_variant_simple_text').setAttribute('title', sel_attr_text)
                productBlock.querySelector('.inc_product_desc_att_size_block .inc_product_desc_att_size_title_text').setAttribute('title', sel_attr_text.toUpperCase().replace('CM','cm'))
                productBlock.querySelector('.inc_product_desc_att_size_block .inc_product_desc_att_size_title_text').textContent = sel_attr_text.toUpperCase().replace('CM','cm')
                if(productModuleBlock.querySelector('.inc_product_block .inc_product_add_block.added_inc') != null){
                    productBlock.querySelector('.inc_product_variant_simple_text').innerText = "";
                    var variant_span = generate_html_tag('span','variant_span')
                    variant_span.innerText = sel_attr_text
                    productBlock.querySelector('.inc_product_variant_simple_text').appendChild(variant_span)
                }
            }
            if (color_text != null) {
                var PrdVarSimTxt = productBlock.querySelector('.inc_product_variant_simple_text')
                var colorTitle = generate_html_tag('div');
                colorTitle.addEventListener('click', function (e) { e.preventDefault(); })
                PrdVarSimTxt.appendChild(colorTitle);
                colorTitle.classList.add("colorCircle")
            }
        }
        var prdmd=productBlock.parentNode.parentNode
        var flag_check =""
        if(prdmd != null){
            flag_check = INC.methods.checkVariantSelection(prdmd)
        }
        if(document.querySelector('form select') != null &&( flag_check == 2 ||  flag_check == 0)){
            var productObj = INC.dataStore.methods().getProductByAtt(findObj,flag_check);
        }else{
            var productObj = INC.dataStore.methods().getProductByAtt(findObj);
        }
        
        if (Object.keys(productObj).length != 0) {
            if(prdmd != null && document.querySelector('.variation_selection #makeOpt select') == null){
                if(flag_check != 1 && productBlock.querySelector('.inc_product_desc_titlprc_block .inc_product_desc_price_block').classList.contains('showPriceLabel') == true){
                    return;
                }
            }
            var previousSKU = "";
            if(flag_check == 1){
                previousSKU = productBlock.getAttribute('data-sku');
                productBlock.setAttribute('data-id', productObj.id);
                productBlock.setAttribute('data-sku', productObj.sku);
                productBlock.setAttribute('data-main_id', productObj.mainId);
                productBlock.setAttribute('data-bundle_id', productObj.bundleId);
                productModuleBlock.setAttribute('data-id', productObj.id);
                productModuleBlock.setAttribute('data-sku', productObj.sku);
                productModuleBlock.setAttribute('data-main_id', productObj.mainId);
                productModuleBlock.setAttribute('data-bundle_id', productObj.bundleId);
            }

            if (document.querySelector('.inc_pdp_bundle_cart_added_product_block[data-main_id="' + productObj.mainId + '"]') != null && sel_attr_text != "") {
                var added_sum_prod = document.querySelector('.inc_pdp_bundle_cart_added_product_block[data-main_id="' + productObj.mainId + '"]')
                added_sum_prod.querySelector('.inc_pdp_bundle_cart_added_product_att_color_text_block').textContent = sel_attr_text
                added_sum_prod.querySelector('.inc_pdp_bundle_cart_added_product_att_color_text_block').setAttribute('style', '')
                added_sum_prod.querySelector('.inc_pdp_bundle_cart_added_product_att_block').setAttribute('title', sel_attr_text)
            }
            if (productModuleBlock.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != "") {
                productModuleBlock.querySelector('.inc_product_desc_att_size_title_text').innerText = sel_attr_text.replace('CM','cm')
                productModuleBlock.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title', sel_attr_text.replace('CM','cm'))
                if(modal_attr_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block') != null){
                    var optionimage = modal_attr_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-optionimge');
                    if(optionimage == '' || optionimage == undefined){
                        optionimage = modal_attr_block.querySelector('.inc_product_desc_att_color_list_item_block.active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-colorcode');
                    }
                    if(optionimage != undefined && optionimage != ""){
                        productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_variant_simple_text').innerHTML = ""
                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_variant_simple_text').innerHTML = ""
                        var optimg = null
                        if(optionimage.charAt(0) != "#"){
                            optimg = generate_html_tag('img')
                            optimg.src = optionimage
                        }else{
                            optimg = generate_html_tag('span')
                            optimg.style.backgroundColor = optionimage
                        }
                        
                        var imgselvar = optimg.cloneNode(optimg);
                        productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_variant_simple_text').appendChild(optimg)
                        productModuleBlock.setAttribute('optimage', optimg.src)
                        if(window.innerWidth < 821){
                            productModuleBlock.querySelector('.inc_product_modal_block .inc_product_variant_simple_text').appendChild(imgselvar)
                        }
                        var variant_span1 = generate_html_tag('span','variant_span')
                        variant_span1.innerText = sel_attr_text
                        var varseltextclonea = variant_span1.cloneNode(variant_span1);
                        productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_variant_simple_text').appendChild(variant_span1)
                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_variant_simple_text').appendChild(varseltextclonea)
                    }
                }
            }
            

            var elImgBlock = productBlock.querySelector('.inc_product_img_block');
            var elImgGalleryListBlock = productBlock.querySelector('.inc_product_img_gallery_list_block');
            var elTitleText =  productBlock.querySelector('.inc_product_desc_title_text');
            var elPriceActiveText = productBlock.querySelector('.inc_product_desc_price_active_text');
            var elPriceRegularText = productBlock.querySelector('.inc_product_desc_price_regular_text');
            var elAddText = productBlock.querySelector('.inc_product_desc_add_text');
            var elworthPrice = productBlock.querySelector('.inc_product_desc_price_worth_text');
            var elGalleryRightArrow = productBlock.querySelector('.inc_product_img_gallery_right_block');
            var elGallerylefttArrow = productBlock.querySelector('.inc_product_img_gallery_left_block');
            var eladdbtnqtyblock = productBlock.querySelector('.inc_product_desc_qty_add_btn_block');
            if(flag_check == 1 || sel_attr_text != ""){
                if (productBlock.parentNode.className.indexOf('inc_product_showcase_block') >= 0) {
                    if (blockType != "pdp") {
                        eladdbtnqtyblock.classList.add('active')
                    }
                }
                var elImgMainImg = elImgBlock.querySelector('.inc_product_img_main_img');

                elImgMainImg.querySelectorAll('img')[0].setAttribute('src', productObj["imageURL"]);
                if(productModuleBlock.parentNode.classList.contains('inc_pdp_product-main_block') == falseflag){
                    elImgMainImg.querySelector('a').setAttribute('href', productObj["url"]+"?car=gr-dmg-bundle");
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
                elImgGalleryListBlock.innerHTML = "";
                if ((productObj.otherImageList != null) && productObj.otherImageList.length > 1) {
                    prepareAdditionalimages(elImgGalleryListBlock,productObj,productBlock)
                }else{
                    productBlock.classList.add('inc_other_noimage')
                }
                if (window.innerWidth > 820) {
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
                if (elTitleText.querySelector('strong') != null && INC.config.pageType == "pdp") {
                    elTitleText.querySelector('div').innerHTML = "<strong>対象アイテム: </strong>" + productObj.name
                }else{
                    elTitleText.querySelector('div').textContent = productObj.name
                }
                // elTitleText.querySelector('a').setAttribute('title', productObj.name)
            }
            var elproductPriceLabel = productBlock.querySelector('.inc_product_price_label_block')
            var prdmd=productBlock.parentNode.parentNode
            flag_check = ""
	        if(prdmd != null){
		        flag_check = INC.methods.checkVariantSelection(prdmd)
				if(flag_check != 1 && productBlock.querySelector('.inc_product_desc_titlprc_block .inc_product_desc_price_block').classList.contains('showPriceLabel') == true){
			        if (productBlock.querySelector('.inc_product_desc_titlprc_block .inc_product_desc_price_block') != null){
			            productBlock.querySelector('.inc_product_desc_titlprc_block .inc_product_desc_price_block').classList.add('showPriceLabel')
			        }
			    }else{
                    if(flag_check == 2){
                        productprice_member(productObj,elPriceActiveText,elPriceRegularText,productBlock,elproductPriceLabel)
                    }else{
                        productprice_member(productObj,elPriceActiveText,elPriceRegularText,productBlock,elproductPriceLabel,"update")
                    }
			    }
			}
            if(flag_check == 1){
                if (productBlock.querySelector('.inc_product_desc_add_text').textContent == "Added" || productBlock.querySelector('.inc_product_desc_add_text').textContent == INC.config.AddedText || productBlock.parentNode.parentNode.querySelector('.inc_product_desc_add_text').textContent == INC.config.AddedText) {
                    if (!Object.prototype.hasOwnProperty.call(dataStore, "bundleCartProducts")) {
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

                var elQtyInput = productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_qty_add_btn_block .inc_product_qty_block input');
                var sku = productBlock.getAttribute('data-sku');
                var bundle_id = productBlock.getAttribute('data-bundle_id');
                var main_id = productBlock.getAttribute('data-main_id');
                var qty = parseInt(elQtyInput.value);
                var pname = productBlock.querySelector('.inc_product_desc_title_text').textContent;
                var pprice = productBlock.querySelector('.inc_product_desc_price_active_text').textContent.replace('¥', '');

                if (elAddText.parentNode.parentNode.querySelector('.inc_product_desc_add_img.checked') != null) {
                    INC.methods.updateBundleCart({ sku: sku, qty: qty }, "add", main_id, bundle_id, pname, pprice);
                }
                if (blockType == "pdp") {
                    if(document.querySelector('.inc_img_together_block .inc_main_img_block img') != null &&  document.querySelector('.inc_goes_img_block img') != null){
                        var img_1 = document.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_img_block img').src
                        var href_1 = document.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_img_block a').href

                        var img_2 = document.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_module_block .inc_product_img_block img').src
                        var href_2 = document.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_module_block .inc_product_img_block a').href
                        document.querySelector('.inc_img_together_block .inc_main_img_block img').src=img_1
                        document.querySelector('.inc_img_together_block .inc_main_img_block a').href=href_1
                        document.querySelector('.inc_goes_img_block img').src=img_2
                        document.querySelector('.inc_goes_img_block a').href=href_2
                    }
                }
                setTimeout(function () {
                    if (elImgMainImg.querySelectorAll('img')[0].naturalWidth == 360) {
                        elImgMainImg.querySelectorAll('img')[0].setAttribute('src', productObj["imageURLMain"]);
                    }
                }, 200);
            }
        }
        if(blockType == "pdp" && productModuleBlock.querySelector('.inc_product_add_block.added_inc') != null){
            productModuleBlock.querySelector('.inc_product_variant_simple_block').classList.add('added_inc')
        }
    }

    INC.methods.createProductListItemBlock = function (productObjs) {
        var productListItemBlock = generate_html_tag('div','inc_pdp_bundle_product_list_item_block');
        var findObj = new INC.classes.FindObj({ id: productObjs.id, mainId: productObjs.mainId });
        var productObj = INC.dataStore.methods().getProductById(findObj);
        productListItemBlock.style.userSelect = "none";
        productListItemBlock.setAttribute('data-id', productObj.id);
        productListItemBlock.setAttribute('data-sku', productObj.sku);
        productListItemBlock.setAttribute('data-main_id', productObj.mainId);
        productListItemBlock.setAttribute('data-bundle_id', productObj.bundleId);

        var seemoreprodhtml='<div class="inc_pdp_bundle_product_list_item_added_block"><div class="inc_pdp_bundle_product_list_item_added_btn_block"><div class="inc_pdp_bundle_product_list_item_added_btn_img_block"><div class="inc_pdp_bundle_product_list_item_added_btn_img"></div></div><div class="inc_pdp_bundle_product_list_item_added_btn_text_block"><div class="inc_pdp_bundle_product_list_item_added_btn_text"></div></div></div></div><div class="inc_pdp_bundle_product_list_item_img_block"><div class="inc_pdp_bundle_product_list_item_img"><img class="inc_lazy" data-src="'+productObj.imageURL+'" src="'+productObj.imageURL+'"></div></div><div class="inc_pdp_bundle_product_list_item_title_block"><div class="inc_pdp_bundle_product_list_item_title_text_block"><div class="inc_pdp_bundle_product_list_item_title_text"></div></div></div><div class="inc_pdp_bundle_product_list_item_price_block"><div class="inc_pdp_bundle_product_list_item_price_active_block"><div class="inc_pdp_bundle_product_list_item_price_active_text_block"><div class="inc_pdp_bundle_product_list_item_price_active_text"></div></div></div></div>'

        productListItemBlock.innerHTML=seemoreprodhtml
        productListItemBlock.querySelector('.inc_pdp_bundle_product_list_item_img img').setAttribute('onerror',"this.src='"+INC.config.noimage+"'" );
        productListItemBlock.addEventListener("click", function () {
            Array.prototype.forEach.call(document.querySelectorAll('.inc_product_desc_att_size_list_block'), function (attSizeListBlock) {
                attSizeListBlock.classList.remove("active");
            });

            var elListMainBlock = document.querySelector('.inc_pdp_bundle_product_list_main_block');
            Array.prototype.forEach.call(elListMainBlock.querySelectorAll('.inc_product_module_block'), function (productBlock) {
                productBlock.setAttribute('style', 'display: none!important');
            });
            elListMainBlock.querySelector('.inc_product_module_block' + "[data-main_id=\"" + productObj.mainId + "\"]").style.display = "block";

            Array.prototype.forEach.call(productListItemBlock.parentNode.querySelectorAll('.inc_pdp_bundle_product_list_item_block'), function (pListItemBlock) {
                pListItemBlock.classList.remove("active");
            });

            productListItemBlock.classList.add("active");
        });

        return productListItemBlock;
    }
    INC.methods.updateBundleCart = function (bundleCartObj, type, main_id, bundle_id, pname, pprice) {
        var dataStore = INC.dataStore;
        var listToDelete = []
        if (!Object.prototype.hasOwnProperty.call(dataStore, "bundleCartProducts")) {
            dataStore['bundleCartProducts'] = {};
            INC.config.pdpaddedProductList = []
            INC.config.bundle_tracking = []
            INC.config.bundle_skuPushed = []
            INC.config.dupBasket = []
        }
        
        switch (type) {
            case "add": dataStore["bundleCartProducts"][bundleCartObj["sku"]] = bundleCartObj["qty"];
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
            case "sub": delete dataStore["bundleCartProducts"][bundleCartObj["sku"]];
                INC.config.pdpaddedProductList.remove_prod_list = function () {
                    var what, a = arguments, L = a.length, ax;
                    while (L && this.length) {
                        what = a[--L];
                        while ((ax = this.indexOf(what)) != -1) {
                            this.splice(ax, 1);
                        }
                    }
                    return this;
                };
                listToDelete[0] = main_id
                for (var i = 0; i < INC.config.bundle_tracking.length; i++) {
                    var obj = INC.config.bundle_tracking[i];
                    if (obj != undefined) {
                        if (listToDelete.indexOf(obj.id) != -1) {
                            INC.config.bundle_tracking.splice(i, 1);
                        }
                    }
                }
                INC.config.bundle_skuPushed.remove_prod_list = function () {
                    var what1, a1 = arguments, L1 = a1.length, ax1;
                    while (L1 && this.length) {
                        what1 = a1[--L1];
                        while ((ax1 = this.indexOf(what1)) != -1) {
                            this.splice(ax1, 1);
                        }
                    }
                    return this;
                };
                INC.config.pdpaddedProductList.remove_prod_list(main_id);
                INC.config.bundle_skuPushed.remove_prod_list(bundleCartObj["sku"]);
                break;
        }

        if (INC.config.pageType == "pdp") {
            this.calculateBundleTotal();
        }
        // console.log("dataStore[bundleCartProducts]==" + JSON.stringify(dataStore["bundleCartProducts"]) )
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
                for (var mainProductId in productListObj) {
                    for (var childProductId in productListObj[mainProductId]) {
                        if (sku == productListObj[mainProductId][childProductId]["sku"]) {
                            if (duplicate_check_produ.indexOf(productListObj[mainProductId][childProductId]["sku"]) == -1) {
                                if(bundleCartProducts[sku] != undefined){
                                    duplicate_check_produ.push(productListObj[mainProductId][childProductId]["sku"])
                                    if (INC.config.usrIdfy == "nonLogin") { 
                                        if (productListObj[mainProductId][childProductId]["MemberPrices"] != undefined  &&  productListObj[mainProductId][childProductId]["MemberPrc"] != undefined){
                                            var regularPrice = productListObj[mainProductId][childProductId]["regularPrice"];
                                            var activePrice = productListObj[mainProductId][childProductId]["MemberPrices"].split('|')[0].split('=')[1];
                                        } else {
                                            if (productListObj[mainProductId][childProductId]["worthPrice"] != null && productListObj[mainProductId][childProductId]["worthPrice"] != null){
                                                var regularPrice = productListObj[mainProductId][childProductId]["regularPrice"];
                                                var activePrice = productListObj[mainProductId][childProductId]["worthPrice"].split('|')[0].split('=')[1];
                                            }
                                        }
                                    } else if (INC.config.usrIdfy == "level0"){
                                        if (productListObj[mainProductId][childProductId]["MemberPrices"] != undefined  &&  productListObj[mainProductId][childProductId]["MemberPrc"] != undefined){
                                            var regularPrice = productListObj[mainProductId][childProductId]["regularPrice"];
                                            var activePrice = productListObj[mainProductId][childProductId]["MemberPrices"].split('|')[1].split('=')[1];
                                        } else {
                                            if (productListObj[mainProductId][childProductId]["worthPrice"] != null && productListObj[mainProductId][childProductId]["worthPrice"] != null){
                                                var regularPrice = productListObj[mainProductId][childProductId]["regularPrice"];
                                                var activePrice = productListObj[mainProductId][childProductId]["worthPrice"].split('|')[1].split('=')[1];
                                            }
                                        }
                                    } else if (INC.config.usrIdfy == "level1"){
                                        if (productListObj[mainProductId][childProductId]["MemberPrices"] != undefined  &&  productListObj[mainProductId][childProductId]["MemberPrc"] != undefined){
                                            var regularPrice = productListObj[mainProductId][childProductId]["regularPrice"];
                                            var activePrice = productListObj[mainProductId][childProductId]["MemberPrices"].split('|')[2].split('=')[1];
                                        } else {
                                            if (productListObj[mainProductId][childProductId]["worthPrice"] != null && productListObj[mainProductId][childProductId]["worthPrice"] != null){
                                                var regularPrice = productListObj[mainProductId][childProductId]["regularPrice"];
                                                var activePrice = productListObj[mainProductId][childProductId]["worthPrice"].split('|')[2].split('=')[1];
                                            }
                                        }
                                    } else if (INC.config.usrIdfy == "level2"){
                                        if (productListObj[mainProductId][childProductId]["MemberPrices"] != undefined  &&  productListObj[mainProductId][childProductId]["MemberPrc"] != undefined){
                                            var regularPrice = productListObj[mainProductId][childProductId]["regularPrice"];
                                            var activePrice = productListObj[mainProductId][childProductId]["MemberPrices"].split('|')[3].split('=')[1];
                                        } else {
                                            if (productListObj[mainProductId][childProductId]["worthPrice"] != null && productListObj[mainProductId][childProductId]["worthPrice"] != null){
                                                var regularPrice = productListObj[mainProductId][childProductId]["regularPrice"];
                                                var activePrice = productListObj[mainProductId][childProductId]["worthPrice"].split('|')[3].split('=')[1];
                                            }
                                        }
                                    } else if (INC.config.usrIdfy == "level3"){
                                        if (productListObj[mainProductId][childProductId]["MemberPrices"] != undefined  &&  productListObj[mainProductId][childProductId]["MemberPrc"] != undefined){
                                            var regularPrice = productListObj[mainProductId][childProductId]["regularPrice"];
                                            var activePrice = productListObj[mainProductId][childProductId]["MemberPrices"].split('|')[4].split('=')[1];
                                        } else {
                                            if (productListObj[mainProductId][childProductId]["worthPrice"] != null && productListObj[mainProductId][childProductId]["worthPrice"] != null){
                                                var regularPrice = productListObj[mainProductId][childProductId]["regularPrice"];
                                                var activePrice = productListObj[mainProductId][childProductId]["worthPrice"].split('|')[4].split('=')[1];
                                            }
                                        }
                                    } else if (INC.config.usrIdfy == "level4"){
                                        if (productListObj[mainProductId][childProductId]["MemberPrices"] != undefined  &&  productListObj[mainProductId][childProductId]["MemberPrc"] != undefined){
                                            var regularPrice = productListObj[mainProductId][childProductId]["regularPrice"];
                                            var activePrice = productListObj[mainProductId][childProductId]["MemberPrices"].split('|')[5].split('=')[1];
                                        } else {
                                            if (productListObj[mainProductId][childProductId]["worthPrice"] != null && productListObj[mainProductId][childProductId]["worthPrice"] != null){
                                                var regularPrice = productListObj[mainProductId][childProductId]["regularPrice"];
                                                var activePrice = productListObj[mainProductId][childProductId]["activePrice"];
                                            }
                                        }
                                    }
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
                                    if (productListObj[mainProductId][childProductId].mainId != mainId) {
                                        totalProductCount++;
                                        totalAddonProductsCount++;
                                        totalAddonProducts = totalAddonProducts + (parseInt(bundleCartProducts[sku]) * activePrice);
                                    }
                                }
                            }
                        }
                    }
                }
            });
        }
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
        var dataStore = INC.dataStore;
        var bundleCartProducts = dataStore["bundleCartProducts"];
        var totalRegularPrice = priceObj.totalRegularPrice;
        var totalActivePrice = priceObj.totalActivePrice;
        var totalMainProduct = priceObj.totalMainProduct;
        var totalAddonProducts = priceObj.totalAddonProducts;
        var total_qty_item = priceObj.total_qty
        var totalAddonProductsCount = priceObj.totalAddonProductsCount;
        var totalProductCount = priceObj.totalProductCount;
        var elPdpBundleCartBlock = document.querySelector('.inc_pdp_bundle_cart_block');
        if (elPdpBundleCartBlock != null) {
            var elBundleCartAddedBlock = document.querySelector('.inc_pdp_bundle_cart_added_block')
            var elBundleCartSummaryViewBtnCount = document.querySelector('.inc_pdp_bundle_cart_summary_view_btn_count')
            var elBundleCartPriceRegularText =document.querySelector('.inc_pdp_bundle_cart_summary_price_regular_text')
            var elBundleCartPriceActiveText = document.querySelector('.inc_pdp_bundle_cart_summary_price_active_text')
            var elBundleCartTitleTextcount = document.querySelector('.inc_pdp_bundle_cart_title_text')
            var elbundlesavetext = document.querySelector('.inc_pdp_bundle_cart_summary_price_save_text')
            var elBundleCartAddBtnText = document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_text')
            elBundleCartAddedBlock.innerHTML = "";
            var bundleCartProductsArray = Object.keys(bundleCartProducts);
            elBundleCartSummaryViewBtnCount.textContent = bundleCartProductsArray.length;
            if (window.innerWidth < 821) {
                elBundleCartTitleTextcount.textContent = "追加したアイテム"
            }
            for (var skup in INC.config.bundle_skuPushed) {
                var elcont = INC.config.bundle_skuPushed[skup]
                for (var bundaray in bundleCartProductsArray) {
                    var findObj = new INC.classes.FindObj({ sku: bundleCartProductsArray[bundaray] });
                    var productObj = INC.dataStore.methods().getProductBySKU(findObj);
                    if (elcont == productObj.id) {
                        var productId = productObj.id;
                        var prepen_elm = this.createBundleCartAddedProductBlock(productId, bundleCartProducts[bundleCartProductsArray[bundaray]], "pdp")
                        if (elBundleCartAddedBlock != null || elBundleCartAddedBlock != undefined) {
                            elBundleCartAddedBlock.insertBefore(prepen_elm, elBundleCartAddedBlock.childNodes[0]);
                        }
                    }
                }
            }
            elBundleCartPriceRegularText.style.display = "none";
            if (totalActivePrice != totalRegularPrice) {
                elBundleCartPriceRegularText.style.display = "flex";
            }

            if (window.innerWidth > 819) {
                if (bundleCartProductsArray.length == 0) {
                    if (document.querySelector('.inc_pdp_bundle_cart_added_block') != null) {
                        document.querySelector('.inc_pdp_bundle_cart_added_block').classList.add('active');
                    }
                } else {
                    if (document.querySelector('.inc_pdp_bundle_cart_added_block') != null) {
                        document.querySelector('.inc_pdp_bundle_cart_added_block').classList.remove('active');
                    }
                }
            }

            if (window.innerWidth < 819) {
                if (bundleCartProductsArray.length == 0) {
                    if (document.querySelector('.inc_added_img_block') != null) {
                        document.querySelector('.inc_added_img_block').style.display = "none";
                    }
                    if (document.querySelector('.inc_pdp_bundle_cart_block') != null) {
                        document.querySelector('.inc_pdp_bundle_cart_block').classList.add('mobActive');
                    }
                } else {
                    if (document.querySelector('.inc_added_img_block') != null) {
                        document.querySelector('.inc_added_img_block').style.display = "flex";
                    }
                    if (document.querySelector('.inc_pdp_bundle_cart_block') != null) {
                        document.querySelector('.inc_pdp_bundle_cart_block').classList.remove('mobActive');
                    }
                }
            }
            elBundleCartPriceActiveText.innerHTML = "¥" +  formatter.format(totalActivePrice).replace('￥', '').replace('¥', '')+ "<span> ("+INC.config.prcText+") </span>";
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.remove('simple_price')
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.remove('is_special_price')
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.remove('simple_price')
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.remove('is_special_price')
            if (totalRegularPrice != totalActivePrice && totalRegularPrice != null && totalRegularPrice != "") {
                elBundleCartPriceRegularText.innerHTML = "<span> 特価 </span>"  + "¥" +  formatter.format(totalRegularPrice).replace('￥', '').replace('¥', '')+ "<span> ("+INC.config.prcText+") </span>";
                elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.add('is_special_price')
                elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.add('is_special_price')
            } else {
                elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.add('simple_price')
            }

            if (elPdpBundleCartBlock != null && elPdpBundleCartBlock != undefined) {
                var bundleCartProductsLength = Object.keys(bundleCartProducts).length;

                var elBundleCartTitleText = document.querySelector(".inc_pdp_bundle_cart_summary_title_text");
                var elBundleCartAddBtnText = document.querySelector(".inc_pdp_bundle_cart_summary_add_btn_text");

                if (total_qty_item == 1){
                    if (window.innerWidth < 820){
                        elBundleCartTitleText.innerHTML = "<span>"+INC.config.TotalText+"</span>"+total_qty_item+"<span>"+"点"+"</span>" 
                    } else {
                        elBundleCartTitleText.innerHTML = "<span>"+INC.config.TotalText+"</span>"+"("+total_qty_item+"<span>"+"点"+")"+"</span>" 
                    } 
                   elBundleCartAddBtnText.innerText = INC.config.AddToCartText 
                }

                if (total_qty_item > 1) {
                    if (window.innerWidth < 820){
                        elBundleCartTitleText.innerHTML = "<span>"+INC.config.TotalText+"</span>"+total_qty_item+"<span>"+"点"+"</span>" 
                    } else {
                        elBundleCartTitleText.innerHTML = "<span>"+INC.config.TotalText+"</span>"+"("+total_qty_item+"<span>"+"点"+")"+"</span>" 
                    }
                    elBundleCartAddBtnText.classList.add('inc_text');
                    elBundleCartAddBtnText.innerText = INC.config.AddToCarts
                }

                if (!(total_qty_item > 1)) {
                    if (window.innerWidth < 820){
                        elBundleCartTitleText.innerHTML = "<span>"+INC.config.TotalText+"</span>"+total_qty_item+"<span>"+"点"+"</span>" 
                    } else {
                        elBundleCartTitleText.innerHTML = "<span>"+INC.config.TotalText+"</span>"+"("+total_qty_item+"<span>"+"点"+")"+"</span>" 
                    }
                    if (elBundleCartAddBtnText.classList.contains('inc_text')){
                        elBundleCartAddBtnText.classList.remove('inc_text')
                    }
                    elBundleCartAddBtnText.innerText = INC.config.AddToCartText;
                }

            }


            if (elPdpBundleCartBlock != null && elPdpBundleCartBlock != undefined) {
                var elBundleCartTitleText = document.querySelector('.inc_pdp_bundle_cart_title_text')
                var elBundleCartAddBtnTexts = document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_text')
                elBundleCartAddBtnTexts.style.textTransform = "none"
                elBundleCartTitleText.textContent = "Price Summary";
                elBundleCartAddBtnTexts.textContent = "まとめてカートに入れる";
                if (totalProductCount <= 1) {
                    elBundleCartAddBtnTexts.textContent = "カートに入れる";
                }
            }

            var elPriceMainTitleText = elPdpBundleCartBlock.querySelector('.inc_pdp_bundle-cart_price_main_title_text');
            var elPriceMainFigureText = elPdpBundleCartBlock.querySelector('.inc_pdp_bundle-cart_price_main_figure_text');
            var elPriceAddonTitleText = elPdpBundleCartBlock.querySelector('.inc_pdp_bundle-cart_price_addon_title_text');
            var elPriceAddonFigureText = elPdpBundleCartBlock.querySelector('.inc_pdp_bundle-cart_price_addon_figure_text');
            var elPriceActiveText = elPdpBundleCartBlock.querySelector('.inc_pdp_bundle_cart_summary_price_active_text');

            elPriceMainTitleText.innerText = "Main Product Price";
            elPriceAddonTitleText.innerText = "Add-on(s) Selected  " + ((totalAddonProductsCount > 0) ? totalAddonProductsCount : "");

            elPriceMainFigureText.innerHTML = "<span> 特価 </span>" +  "¥" + formatter.format(totalMainProduct).replace('￥', '').replace('¥', '') + "<span> ("+INC.config.prcText+") </span>";
            elPriceAddonFigureText.innerHTML = INC.clientConfig.currencySymbol+ "<span> 特価 </span>"  + "¥" +  formatter.format(totalAddonProducts).replace('￥', '').replace('¥', '')+ "<span> ("+INC.config.prcText+") </span>";
            elPriceActiveText.innerHTML =  "¥" + formatter.format(totalActivePrice).replace('￥', '').replace('¥', '') + "<span> ("+INC.config.prcText+") </span>";
            
            setTimeout(function() {
                if (Object.keys(INC.dataStore.bundleCartProducts).length == 0) {
                    elBundleCartAddBtnText.parentNode.parentNode.parentNode.classList.add('cartEmpty')
                    elBundleCartAddBtnText.parentNode.parentNode.parentNode.classList.remove('incActive')
                } else {
                    if (document.querySelector('.inc_pdp_bundle_cart_summary_add_block').classList.contains('cartEmpty')){
                        document.querySelector('.inc_pdp_bundle_cart_summary_add_block').classList.remove('cartEmpty')
                        document.querySelector('.inc_pdp_bundle_cart_summary_add_block').classList.add('incActive')
                    }
                }
            }, 100);
        }

    }

    INC.methods.createBundleCartAddedProductBlock = function (productId, qty) {
        var addedProductBlock = generate_html_tag('div','inc_pdp_bundle_cart_added_product_block')
        var findObj = new INC.classes.FindObj({ id: productId });
        var productObj = INC.dataStore.methods().getProductById(findObj);
        addedProductBlock.setAttribute('data-id', productObj.id);
        addedProductBlock.setAttribute('data-sku', productObj.sku);
        addedProductBlock.setAttribute('data-main_id', productObj.mainId);
        addedProductBlock.setAttribute('data-bundle_id', productObj.bundleId);

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
        var addedsumprodhtml = '<div class="inc_pdp_bundle_cart_added_product_img_block"><div class="inc_pdp_bundle_cart_added_product_img"><img src="'+productObj.imageURL+'" data-src="'+productObj.imageURL+'"></div></div><div class="inc_pdp_bundle_cart_added_product_title_block"><div class="inc_pdp_bundle_cart_added_product_title_text_block"><div class="inc_pdp_bundle_cart_added_product_title_text"><a title="'+productObj.name+'"><div style="text-transform: unset;"><span>'+qty+' <small>x</small> </span>'+productObj.name+'</div></a></div></div></div><div class="inc_pdp_bundle_cart_added_product_qty_block"><div class="inc_pdp_bundle_cart_added_product_qty_text_block"><div class="inc_pdp_bundle_cart_addeed_product_qty_text">'+qty+'</div></div></div><div class="inc_pdp_bundle_cart_added_product_price_block"><div class="inc_pdp_bundle_cart_added_product_price_text_block"><div class="inc_pdp_bundle_cart_added_product_price_text">'+formatter.format(productObj.activePrice * qty)+'</div></div></div><div class="inc_pdp_bundle_cart_added_product_att_block" title="'+sel_attr_text+'"><div class="inc_pdp_bundle_cart_added_product_att_color_block"><div class="inc_pdp_bundle_cart_added_product_att_color_text_block" style="text-transform: none;">'+sel_attr_text+'</div></div><div class="inc_pdp_bundle_cart_added_product_att_size_block"><div class="inc_pdp_bundle_cart_added_product_att_size_text_block"><div class="inc_pdp_bundle_cart_added_product_att_size_text"></div></div></div></div><div class="inc_pdp_bundle_cart_added_product_edit_block"><div class="inc_pdp_bundle_cart_added_product_edit_text_block"><div class="inc_pdp_bundle_cart_added_product_edit_text"></div></div><div class="inc_pdp_bundle_cart_added_product_edit_img_block"><div class="inc_pdp_bundle_cart_added_product_edit_img"></div></div></div>'

        addedProductBlock.innerHTML = addedsumprodhtml

        addedProductBlock.querySelector('.inc_pdp_bundle_cart_added_product_img img').setAttribute('onerror',"this.src='"+INC.config.noimage+"'" )

        var elEditTextBlock = addedProductBlock.querySelector(".inc_pdp_bundle_cart_added_product_edit_text_block") 
        var elEditImgBlock = addedProductBlock.querySelector(".inc_pdp_bundle_cart_added_product_edit_img_block");
        
        elEditTextBlock.addEventListener("click", function () {
            if (INC.config.deviceType == "mobile") {
                if (document.querySelector('.inc_pdp_bundle_product_list_item_block' + '[data-main_id="' + productObj.mainId + '"]') != null)
                    document.querySelector('.inc_pdp_bundle_product_list_item_block' + '[data-main_id="' + productObj.mainId + '"]').click();
            }
            setTimeout(function () {
                document.querySelector('.inc_product_block' + '[data-id="' + productObj.id + '"]').parentNode.parentNode.querySelector('.inc_product_modal_block').classList.add('active');
                document.querySelector('html').classList.add('inc_overlay');
            }, 50);
        });
        elEditImgBlock.addEventListener("click", function () {
            document.querySelector('.inc_product_block' + '[data-id="' + productObj.id + '"]').querySelector('.inc_product_desc_add_block').click();
        });
        return addedProductBlock;
    }

    INC.methods.clear = function () {
        if (document.querySelector('.inc_af_block') != null) {
            Array.prototype.forEach.call(document.querySelectorAll('.inc_af_block'), function (el) {
                el.parentNode.removeChild(el);
            });
        }
        if (document.querySelector('.inc_bundle_avail_block') != null) {
            Array.prototype.forEach.call(document.querySelectorAll('.inc_bundle_avail_block'), function (reme) {
                reme.parentNode.removeChild(reme);
            });
        }
        if (document.querySelector('.inc_pdp_block') != null) {
            Array.prototype.forEach.call(document.querySelectorAll('.inc_pdp_block'), function (el) {
                el.parentNode.removeChild(el);
            });
        }
    }

    INC.methods.addBundleToCart = function (btn_cart) {

        INC.clientConfig.OOS = []
        var d__VIEWSTATE = ""
        var d__EVENTVALIDATION = ""
        var dataStore = INC.dataStore;
        var mainProductId = document.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_module_block').getAttribute('data-main_id');
        var formData = []
        var url_add = []
        var count_pr_to_add = 0
        add_to_cart_tracking_multiple(mainProductId)
        var total_length = Object.keys(dataStore.bundleCartProducts);
        var CFMID = ""
        if (document.querySelector('#form2cart input[name="CFM_ID"]') != null){
            CFMID = document.querySelector('#form2cart input[name="CFM_ID"]').value;
        }
        
        var t = 0;
        var url0 = null;
        var url1 = null;
        var url2 = null;
        var url3 = null;
        var url4 = null;
        var url5 = null;
        var url6 = null;
        var addProductURL = INC.config.addToBasketURL
        Object.keys(dataStore.bundleCartProducts).forEach(function (bundleCartProduct) {
            count_pr_to_add++
            if(dataStore.bundleCartProducts[bundleCartProduct] != undefined){
                var findObj = new INC.classes.FindObj({ id: bundleCartProduct });
                var productObj = INC.dataStore.methods().getProductById(findObj);
                var searchParamObjString = "GOODS_NO=" + productObj.childsku + "&" + "CFM_ID=" + CFMID + "&" + "ATT_GRP_ID=" + productObj.mainId + "&" + "ENTR_NO=" + productObj.idAddtocart + "&" + "STKNUM=" + "1" + "&" + "BUYM=" + "1" + "&" + "NMM=" + " " + "&" + "COMM_025=" +  dataStore.bundleCartProducts[bundleCartProduct];
                
               
                // searchParamsObjArray.push(searchParamObjString);
                if(count_pr_to_add == 1){
                    url1 =addProductURL+searchParamObjString
                }else if(count_pr_to_add == 2){
                    url2 =addProductURL+searchParamObjString
                }else if(count_pr_to_add == 3){
                    url3 =addProductURL+searchParamObjString
                }else if(count_pr_to_add == 4){
                    url4 =addProductURL+searchParamObjString
                }else if(count_pr_to_add == 5){
                    url5 =addProductURL+searchParamObjString
                }else if(count_pr_to_add == 6){
                    url6 =addProductURL+searchParamObjString
                }
                
            }
            if(total_length.length == count_pr_to_add){
                ajax_add_to_cart(url1,url2,url3,url4,url5,url6,btn_cart)
            }
        });
        
    }
    function ajax_add_to_cart(url1,url2,url3,url4,url5,url6,btn_cart) {
        INC.clientConfig.OOS = []
        INC.clientConfig.OOS_MESG = []
        function suc1(btn_ca,data_re,urls_,url2){
            checkaddedproderror(data_re,urls_,url2)
            if (url2 == null) {
                loadsidebarajax(btn_ca)
            }
            if (url2 != null) {
                callprodB()
            }
        }
        function suc2(btn_ca,data_re2,urls_2,url3){
            checkaddedproderror(data_re2,urls_2,url3)
            if (url3 == null) {
                loadsidebarajax(btn_ca)
            }
            if (url3 != null) {
                callprodC()
            }
        }
        function suc3(btn_ca,data_re3,urls_3,url4){
            checkaddedproderror(data_re3,urls_3,url4)
            if (url4 == null) {
                loadsidebarajax(btn_ca)
            }
            if (url4 != null) {
                callprodD()
            }
        }
        function suc4(btn_ca,data_re4,urls_4,url5){
            checkaddedproderror(data_re4,urls_4,url5)
            if (url5 == null) {
                loadsidebarajax(btn_ca)
            }
            if (url5 != null) {
                callprodE()
            }
        }
        function suc5(btn_ca,data_re5,urls_5,url6){
            checkaddedproderror(data_re5,urls_5,url6)
            if (url6 == null) {
                loadsidebarajax(btn_ca)
            }
            if (url6 != null) {
                callprodF()
            }
        }
        callprodA()
        function callprodA() {
            window.jQuery.ajax({
                type: "POST",
                url: url1,
                success: function(data_re) {
                    suc1(btn_cart,data_re,url1,url2)
                },
                error: function (data_re) {
                    suc1(btn_cart,data_re,url1,url2)
                },
            });
        }
        function callprodB() {
            window.jQuery.ajax({
                type: "POST",
                url: url2,
                success: function(res) {
                    suc2(btn_cart,res,url2,url3)
                },
                error: function (res) {
                    suc2(btn_cart,res,url2,url3)
                },
            });
        }
        function callprodC() {
            window.jQuery.ajax({
                type: "POST",
                url: url3,
                success: function(res2) {
                    suc3(btn_cart,res2,url3,url4)
                },
                error: function (res2) {
                    suc3(btn_cart,res2,url3,url4)
                },
            });
        }
        function callprodD() {
            window.jQuery.ajax({
                type: "POST",
                url: url4,
                success: function(res3) {
                    suc4(btn_cart,res3,url4,url5)
                },
                error: function (res3) {
                    suc4(btn_cart,res3,url4,url5)
                },
            });
        }
        function callprodE() {
            window.jQuery.ajax({
                type: "POST",
                url: url5,
                success: function(res4) {
                    suc5(btn_cart,res4,url5,url6)
                },
                error: function (res4) {
                    suc5(btn_cart,res4,url5,url6)
                },
            });
        }
        function callprodF() {
            window.jQuery.ajax({
                type: "POST",
                url: url6,
                success: function(res5) {
                    checkaddedproderror(res5,url5,url6)
                    loadsidebarajax(btn_cart)
                },
                error: function () {
                    loadsidebarajax(btn_cart)
                },
            });
        }
    }
    function checkaddedproderror(formd,url_,url_2){
        if(formd != undefined){
        	try{
	            var resData = JSON.parse(formd)
	            if (document.querySelector('#mini-cart') != null) {
	                document.querySelector('#mini-cart').innerHTML = formd
	            }
	            var err_text_incelm = document.querySelector('.err_text_inc')
	            if(err_text_incelm != null){
	                err_text_incelm.parentNode.removeChild(err_text_incelm)
	            }
	            var prdId = url_.split('?')[1].split('&ATT_GRP_ID=')[1].split('&')[0]
	            if (resData.errMsg != ""){
	            	INC.clientConfig.OOS.push(prdId)
	                if (resData.errMsg != "画面遷移に異常がありました。\n次のような操作が原因となった可能性があります。\n\n・複数のウィンドウを用いての並行した登録操作など\n・規定の画面以外からの登録操作など\n・画面遷移の有効期限切れなど" ){
	                    if (document.querySelector('.inc_sidebar_modal_block').classList.contains('errorMsage')){
	                        document.querySelector('.inc_sidebar_modal_block').classList.remove('errorMsage');
	                    }
	                    
	                    if (window.innerWidth < 820){
	                        if (document.querySelector('.inc_header_sub_title_text_block .inc_header_sub_title_text') != null){
	                            document.querySelector('.inc_header_sub_title_text_block').classList.add('active')
	                            document.querySelector('.inc_header_sub_title_text_block .inc_header_sub_title_text').innerHTML = "<div style="+"color:#EB4055;"+"> お手続き中に在庫情報が変更になりました。 </div>" + "<div>詳細は下記よりご確認ください。</div>";
	                            INC.methods.showSidebar();
                                INC.methods.updateSidebarBlock();
                                document.querySelector('html').classList.add('inc_overlay');
	                        }

	                    } else {
	                        if (document.querySelector('.inc_header_sub_title_text_block .inc_header_sub_title_text') != null){
	                            document.querySelector('.inc_header_sub_title_text_block').classList.add('active')
	                            document.querySelector('.inc_header_sub_title_text_block .inc_header_sub_title_text').innerText = "お手続き中に在庫情報が変更になりました。詳細は下記よりご確認ください。";
	                           
                                INC.methods.showSidebar();
                                INC.methods.updateSidebarBlock();
                                document.querySelector('html').classList.add('inc_overlay');
	                        }
	                    }
	                } else {
	                    if (window.innerWidth < 820){
	                        if (document.querySelector('.inc_header_sub_title_text_block .inc_header_sub_title_text') != null){
	                            document.querySelector('.inc_header_sub_title_text_block').classList.add('active')
	                            var headerDiv = document.querySelector('.inc_header_sub_title_text_block .inc_header_sub_title_text');
	                           
	                            var err_text_inc = generate_html_tag('div','err_text_inc');
                                err_text_inc.innerHTML = "<div class='inc_err_heading'>画面遷移にエラーがありました</div><div class='inc_err_para'>次のような操作が原因となった可能性があります。</div><ul class='inc_err_list'><li>・複数のウィンドウを用いての並行した登録操作など</li><li>・規定の画面以外からの登録操作など</li><li>・画面遷移の有効期限切れなど</li></ul><div class='inc_err_para'>お手数ですが、画面を更新するか、時間をおいてから<br>改めてお手続きをお願いいたします。</div>";
	                            headerDiv.appendChild(err_text_inc);
	                            // document.querySelector('.inc_sidebar_modal_block').classList.add('hide_heading')
	                            document.querySelector('.inc_sidebar_modal_block').classList.add('errorMsage')
	                            INC.methods.showSidebar();
                                document.querySelector('html').classList.add('inc_overlay');
	                        }

	                    } else {
	                        if (document.querySelector('.inc_header_sub_title_text_block .inc_header_sub_title_text') != null){
	                            document.querySelector('.inc_header_sub_title_text_block').classList.add('active')
	                            var headerDiv = document.querySelector('.inc_header_sub_title_text_block .inc_header_sub_title_text');
	                            var err_text_inc = generate_html_tag('div','err_text_inc');
                                err_text_inc.innerHTML = "<div class='inc_err_heading'>画面遷移にエラーがありました</div><div class='inc_err_para'>次のような操作が原因となった可能性があります。</div><ul class='inc_err_list'><li>・複数のウィンドウを用いての並行した登録操作など</li><li>・規定の画面以外からの登録操作など</li><li>・画面遷移の有効期限切れなど</li></ul><div class='inc_err_para'>お手数ですが、画面を更新するか、時間をおいてから<br>改めてお手続きをお願いいたします。</div>";
	                            headerDiv.appendChild(err_text_inc);
	                            // document.querySelector('.inc_sidebar_modal_block').classList.add('hide_heading')
	                            document.querySelector('.inc_sidebar_modal_block').classList.add('errorMsage')
	                            INC.methods.showSidebar();
                                document.querySelector('html').classList.add('inc_overlay');
	                        }
	                    }
	                }
	            }
	        }
	        catch(er){

	        }
        }
    }
    function loadsidebarajax(btn_cart){
        INC.config.disablebtn = true
        if (btn_cart != undefined) {
            btn_cart.classList.remove('inc_loading')
        }
        if(btn_cart.querySelector('.inc_pdp_bundle_cart_summary_add_btn_text') != null){
        	btn_cart.querySelector('.inc_pdp_bundle_cart_summary_add_btn_text').classList.remove('inc_loading')
        }
        if(document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading') != null){
            document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading').classList.remove('inc_loading')
        }
        if (INC.clientConfig.OOS.length == 0){
            window.location.href = INC.clientConfig.checkoutLink;
        }
    }
    function add_to_cart_tracking_multiple(mainProductId) {
    	try{
	        var event_type = "bundle_add_to_cart";
	        var core_prod_id = "";
	        var productIdsforTracking = []
	        core_prod_id = mainProductId;

	        var pageType = "100";
	        var all_data = [];
	        for (var tc in INC.config.bundle_tracking) {
	            if (INC.config.bundle_tracking.length == 1) {
	                productIdsforTracking.push(mainProductId)
	                productIdsforTracking.push(INC.config.bundle_tracking[tc].id)
	                all_data.push({
	                    id: parseInt(INC.config.bundle_tracking[tc].bid),
	                    product_ids: productIdsforTracking,
	                    product_id: core_prod_id
	                })
	                productIdsforTracking = []
	            } else {
	                if (mainProductId != INC.config.bundle_tracking[tc].id) {
	                    productIdsforTracking.push(mainProductId)
	                    productIdsforTracking.push(INC.config.bundle_tracking[tc].id)
	                    all_data.push({
	                        id: parseInt(INC.config.bundle_tracking[tc].bid),
	                        product_ids: productIdsforTracking,
	                        product_id: core_prod_id
	                    })
	                    productIdsforTracking = []
	                }
	            }
	        }
	        var data = {
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
	    catch(e){

	    }
    }
    function makeTrackingApiCall(eventdata) {
        var p_url = 'https://jpoptimizedby.increasingly.co/ImportData';
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (xhr.responseText != "" && xhr.responseText != null) {
                    var resul = xhr.responseText;
                }
            }
        };
        xhr.open("POST", p_url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(eventdata);
    }
    function getCurrentFormattedTime() {
        var d = new Date();
        return (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds());
    }
    INC.methods.trackingEvents = function (eventType, eventDataObj, pageType) {
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
                if(INC.config.pageType == "cartPage"){
                	pageType = "103"
                }
                importEventDataObj["page_type"] = pageType;
                if(INC.config.recommendation == trueflag && INC.config.pageType == "pdp") {
                    importEventDataObj["rt"] = "8";
                }
                importEventDataObj["is_logged"] = "0";
                importEventDataObj["method"] = "track";
                break;
            case "bundleAddToCart":
                importEventDataObj["event_type"] = "bundle_add_to_cart";
                importEventDataObj["page_type"] = pageType;
                importEventDataObj["is_logged"] = "0";
                importEventDataObj["method"] = "track";
                break;
        }

        importEventDataObj["platform"] = "";
        importEventDataObj["token"] = INC.config.clientToken;
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
            }
        }

        xhr.send(JSON.stringify(importDataObj));
    }
    INC.methods.addVisitorID = function () {
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
        var ivid = "";
        if(readCookie('ivid') != undefined){
            ivid = readCookie('ivid')
        }
        var clientdomain = window.location.host
        var arr = clientdomain.split(".");
        var d = new Date();
        var expires = "expires=" + d.toUTCString();
        if (ivid.length == 0) {
            ivid = generateUniqueINCVisitorId(42, 16);
            arr.shift();
            clientdomain = arr.join(".");
            if(arr == 'com'){
                clientdomain = window.location.host;
            }
            d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
            expires = "expires=" + d.toUTCString();
            document.cookie = 'ivid=' + ivid + '; expires=' + expires + '; domain=' + clientdomain + '; path=/' + '; secure;'
        }else{
            arr.shift();
            clientdomain = arr.join(".");
            if(arr == 'com'){
                clientdomain = window.location.host;
            }
            d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
            expires = "expires=" + d.toUTCString();
            document.cookie = 'ivid=' + ivid + '; expires=' + expires + '; domain=' + clientdomain + '; path=/' + '; secure;'
        }
        INC.config.ivid = ivid;
        return ivid;
    }

    document.onclick = clickListener;

    function clickListener(e) {
        var clickedElement = e.target;
        if (clickedElement != null) {
            try {
            	if(clickedElement.classList.contains('item_gallery-color_thumbnail') != true && clickedElement.classList.contains('cart_thumbnail_frame_select') != true && clickedElement.classList.contains('btn-cart') != true && clickedElement.classList.contains('dspbtnCrt') != true && clickedElement.classList.contains('js-tryshot_modal') != true && clickedElement.classList.contains('tryshot_plan') != true){
	                if (clickedElement.className == "inc_product_modal_block active") {
	                    document.querySelector('body').classList.remove('inc_popup_open');
	                    if (document.querySelector('.inc_sidebar_modal_block.active') == null) {
	                        document.querySelector('html').classList.remove('inc_overlay');
	                        document.querySelector('html').classList.remove('inc_popup_open');
	                    }
	                    if(inc_scroll_height > 100){
	                        window.scrollTo(0,inc_scroll_height);
	                    }
	                    clickedElement.querySelector('.inc_product_header_title_block').classList.add('active');
	                    clickedElement.querySelector('.inc_product_header_title_block_1').classList.remove('active');
	                    clickedElement.classList.remove('active')
	                }
	                if (clickedElement.className == "sidebar_outer sidebar_outer_active") {
	                    document.querySelector('.inc_header_continue_img').click()
	                }
	                if(clickedElement.classList.contains('quick_view_open') == trueflag){
	                    if(document.querySelector('.inc_details_mobile_quick_view.quick_view_active') != null){
	                        document.querySelector('.inc_details_mobile_quick_view.quick_view_active .prod_quick_view_close').click()
	                    }
	                }
	                if (clickedElement.className == "inc_empty_popup") {
	                    if (document.querySelector('.inc_product_modal_block.active') == null && document.querySelector('.inc_sidebar_modal_block.active') == null) {
	                        document.querySelector('html').classList.remove('inc_overlay')
	                        document.querySelector('html').classList.remove('inc_popup_open');
	                    }
	                    if (clickedElement.parentNode.querySelector('.inc_product_desc_att_block').classList.contains('active')) {
	                        clickedElement.parentNode.querySelector('.inc_product_desc_att_block').classList.remove('active')
	                    }
	                }
	                if (clickedElement.className == 'inc_product_block configurable show_overlay' || clickedElement.className == 'inc_product_block configurable inc_other_noimage show_overlay'){
	                    if (clickedElement.parentNode.querySelector('.inc_product_desc_att_block').classList.contains('active')) {
	                        clickedElement.parentNode.querySelector('.inc_product_desc_att_block').classList.remove('active')
	                        document.querySelector('html').classList.remove('inc_overlay');
	                        document.querySelector('.inc_product_block.configurable.show_overlay').classList.remove('show_overlay')
	                    }
	                }
	                if (document.querySelector('.inc_product_modal_block.active') != null) {
	                    if (clickedElement.parentNode.classList == "inc_product_desc_att_color_list_item_img" || clickedElement.classList == "inc_product_desc_att_color_list_item_img" || clickedElement.parentNode.classList == "inc_product_desc_att_zero_list_block" || clickedElement.classList == "inc_product_desc_att_zero_list_block") {
	                        if(document.querySelector('.inc_product_desc_att_block .show_dropdown') != null){
	                            document.querySelector('.inc_product_desc_att_block .show_dropdown').classList.remove('show_dropdown')
	                        }
	                    }
	                }
	                if(clickedElement != null){
	                    if (clickedElement.classList == "inc_product_desc_add_img" && document.querySelector('.inc_product_modal_block .inc_product_desc_att_block .show_dropdown') != null) {
	                        if (window.innerWidth > 2000) {
	                            document.querySelector('.inc_product_modal_block .inc_product_desc_att_block .show_dropdown').classList.remove('show_dropdown');
	                        }
	                    }
	                    if (clickedElement.className == "inc_product_header_img") {
	                        document.querySelector('.inc_product_header_title_block').classList.add('active');
	                        document.querySelector('.inc_product_header_title_block_1').classList.remove('active');
	                        document.querySelector('body').classList.remove('inc_popup_open');
	                    }
	                    
	                    if (clickedElement.className == "sidebar_outer sidebar_outer_active") {
	                        if(document.querySelector('.inc_header_continue_img') != null){
	                            document.querySelector('.inc_header_continue_img').click()
	                        }
	                    }
	                    if(clickedElement.className == 'close_modal_inc'){
	                        if(document.querySelector('.inc_header_continue_img') != null){
	                            document.querySelector('.inc_header_continue_img').click()
	                        }
	                    }
	                    if (clickedElement.className == "inc_pdp_bundle_cart_overlay_block active") {
	                        document.querySelector('.inc_pdp_bundle_cart_title_img_block').click()
	                    }
	                    if (clickedElement.className == "inc_promo_popup active") {
	                        document.querySelector('html').classList.remove('inc_overlay_promo');
	                        clickedElement.classList.remove('active')
	                        if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
	                            document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
	                        }
	                    }
	                    if (clickedElement.parentNode != null) {
	                        if (clickedElement.className != "inc_product_desc_att_color_title_text_block" && clickedElement.className != "inc_product_desc_att_color_title_text_selected" && clickedElement.parentNode.className != "inc_product_desc_att_color_title_text_block" && clickedElement.className != "inc_product_desc_att_zero_title_text" && clickedElement.className != "inc_product_desc_add_block" && clickedElement.className != "inc_product_desc_add_text" && clickedElement.className != "img_color_swatch" && clickedElement.className != "inc_product_desc_att_zero_title_text_selected" && clickedElement.classList.contains('inc_product_desc_att_color_list_item_img') != trueflag && clickedElement.classList.contains('inc_product_desc_att_zero_title_text_selected') != trueflag && clickedElement.classList.contains('inc_product_desc_att_size_title_text_selected') != trueflag && clickedElement.className != 'inc_product_desc_att_third_title_text_selected' && clickedElement.className != 'inc_product_desc_att_size_title_text_selected' && clickedElement.className != 'inc_product_desc_att_third_title_text_selected') {
	                            if (document.querySelector('.inc_product_desc_att_block .show_dropdown') != null) {
	                                document.querySelector('.inc_product_desc_att_block .show_dropdown').classList.remove('show_dropdown')
	                            }
	                        }


	                        if (clickedElement.className == "inc_product_desc_color_list_mobile_overlay_block" || clickedElement.className == "inc_product_desc_color_list_header_img" || clickedElement.className == "inc_product_desc_colour_list_add_btn" || clickedElement.className == "inc_product_desc_att_zero_list_mobile_overlay_block" || clickedElement.className == "inc_product_desc_att_zero_list_header_img" || clickedElement.className == "inc_product_desc_att_zero_list_add_btn") {
	                            if (window.innerWidth < 821) {
	                                document.querySelector('.inc_product_desc_att_block .show_dropdown').classList.remove('show_dropdown')
	                                document.querySelector('html').classList.remove('inc_overlay');
	                                document.querySelector('body').classList.remove('inc_popup_open');
	                            }

	                        }
	                    }
	                    if (document.querySelector('.sidebar_outer.sidebar_outer_active .inc_product_modal_block.active') == null) {
	                        if (document.querySelector('.inc_sidebar_modal_block.active') != null) {
	                            if (document.querySelector('.inc_cart_added_product_block.remove_product_conf_modal') == null) {
	                                if (document.querySelector('.inc_promo_popup.active') == null) {
	                                    document.querySelector('.inc_sidebar_modal_block.active').classList.remove('overflow_visible')
	                                }
	                            }
	                        }
	                    } else if (document.querySelector('.sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block .inc_product_modal_block.active') != null) {
	                        document.querySelector('.sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block').classList.add('overflow_visible')
	                        document.querySelector('body').classList.add('inc_popup_open');
	                    }
	                    if (clickedElement.className != 'inc_product_block configurable inc_other_noimage show_overlay' && clickedElement.className != 'inc_product_desc_att_zero_title_text_block' && clickedElement.className != "inc_product_details_prod_block" && clickedElement.className != "inc_product_variant_simple_block" && clickedElement.className != "inc_product_variant_simple_text config" && clickedElement.className != "inc_product_desc_variant_popup_close_block" && clickedElement.className != "inc_product_desc_add_title_text_block" && clickedElement.tagName != "SELECT" && clickedElement.className != "inc_product_header_block active" && clickedElement.className != "inc_product_desc_att_color_list_item_img_block active" && clickedElement.className != "inc_product_desc_att_block attributes_avail active" && clickedElement.className != "inc_product_qty_block active" && clickedElement.tagName != "LABEL" && clickedElement.tagName != "INPUT" && clickedElement.className != "inc_product_qty_block" && clickedElement.className != "inc_product_desc_att_color_list_item_img_block" && clickedElement.className != "inc_product_header_block" && clickedElement.className != "select_option_inc_title" && clickedElement.className != "inc_product_desc_att_color_list_item_img" && clickedElement.className != "inc_product_desc_att_color_title_text" && clickedElement.className != "inc_product_desc_att_color_list_block" && clickedElement.classList.contains('inc_product_desc_att_block') == falseflag && clickedElement.className != "select_option_inc_block" && clickedElement.className != "inc_product_desc_att_color_title_text_block" && clickedElement.className != "inc_product_desc_att_variant_text" && clickedElement.className != "inc_product_desc_add_img" &&clickedElement.className != "inc_product_qty_up_btn" && clickedElement.className != "inc_product_qty_down_btn" && clickedElement.className != 'variant_span') {
	                        if (clickedElement.classList != undefined) {
	                            if (clickedElement.classList.contains('variantoption') == falseflag && clickedElement.classList.contains('inc_product_desc_att_size_list_item_img_block') == falseflag && clickedElement.classList.contains('inc_product_desc_att_color_list_block') == falseflag && clickedElement.className != "inc_product_desc_add_img checked" && clickedElement.classList.contains('inc_product_desc_add_block') == falseflag && clickedElement.classList.contains('inc_pdp_bundle_cart_added_product_edit_img') == falseflag && clickedElement.className != "inc_product_desc_att_color_title_block" && clickedElement.className != "inc_product_desc_qty_up_btn" && clickedElement.className != "inc_product_desc_qty_down_btn" && clickedElement.classList.contains('inc_product_desc_att_color_block') == falseflag && clickedElement.classList.contains('inc_product_desc_att_color_list_item_block') == falseflag && clickedElement.classList.contains('inc_product_desc_att_zero_title_text_selected') == falseflag && clickedElement.classList.contains('inc_product_desc_att_zero_title_text') == falseflag  && clickedElement.classList.contains('inc_product_desc_att_color_list_item_img') != trueflag && clickedElement.className != 'inc_product_desc_att_size_title_text_selected' && clickedElement.className != 'inc_product_desc_att_third_title_text_selected') {
	                                if (document.querySelector('.inc_product_desc_att_block') != null){
	                                    if (document.querySelector('.inc_product_desc_att_block').classList.contains('moreThanOne') == falseflag){
	                                        var allact = document.querySelectorAll('.inc_product_desc_att_block.active')

	                                        if (document.querySelector('.inc_product_modal_block.active') == null && document.querySelector('.inc_sidebar_modal_block.active') == null) {
	                                            document.querySelector('html').classList.remove('inc_overlay');
	                                            document.querySelector('body').classList.remove('inc_popup_open');
	                                        }
	                                        for (var actelm in allact) {
	                                            if(allact[actelm] != null && Object.prototype.hasOwnProperty.call(allact, actelm)){
	                                                allact[actelm].classList.remove('active')
	                                            }
	                                        }

	                                        if (document.querySelector('.inc_product_block.show_overlay') != null) {
	                                            document.querySelector('.inc_product_block.show_overlay').classList.remove('show_overlay')
	                                        }
	                                    }
	                                }
	                            }
	                        }
	                    }
	                }
	                setTimeout(function(){
	                    var inc_prod_img1 =  document.querySelector('.inc_product_modal_block.active .inc_product_img_main_img img')
	                    if(inc_prod_img1){
	                        inc_prod_img1.setAttribute('style',INC.config.styleft)
	                    }
	                },2000)
	            }
            } catch (err) {
                var formData = new FormData();
                formData.append("EmailId", "shashi@increasingly.com");
                formData.append("Subject", 'JS Error on GDO');
                formData.append("Message", err + 'Error Stack' + err.stack);
                var xhr = new XMLHttpRequest();
                xhr.open("POST", '//api.increasingly.co/SendEmail', trueflag);
                xhr.send(formData);
                throw err;
            }
        }
    }
    setTimeout(function () {
        if (window.innerWidth < 821) {
            window.addEventListener("orientationchange", function () {
                if (window.matchMedia("(orientation: portrait)").matches) {
                    INC.config.deviceMode = "PORTRAIT"
                    var inc_pdp_block_rem = document.querySelector(".inc_pdp_block");
                    if (inc_pdp_block_rem != null) {
                        inc_pdp_block_rem.parentNode.removeChild(inc_pdp_block_rem);
                    }
                    onloadpdp = false
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
                    },0)

                }
                if (window.matchMedia("(orientation: landscape)").matches) {
                    INC.config.deviceMode = "LANSCAPE";
                    onloadpdp = false
                    var inc_pdp_block_remove = document.querySelector(".inc_pdp_block");
                    if (inc_pdp_block_remove != null) {
                        inc_pdp_block_remove.parentNode.removeChild(inc_pdp_block_remove);
                    }
                    var sidebar_remove = document.querySelector(".inc_sidebar_modal_block");
                    if (sidebar_remove != null) {
                        sidebar_remove.parentNode.removeChild(sidebar_remove);
                    }
                    var over_remove = document.querySelector(".inc_sidebar_overlay_block");
                    if (over_remove != null) {
                        over_remove.parentNode.removeChild(over_remove);
                    }
                    setTimeout(function () {
                        INC.init();
                    }, 10)
                }
            }, {passive: true});
            document.addEventListener("touchmove", checkScrollDirection, false);
        }
        function checkScrollDirection() {
            if( inc_isOnScreen( window.jQuery( '.inc_pdp_block'))){
                if (document.querySelector('.inc_pdp_block') != null) {
                    if (document.querySelectorAll('.elc-sticky-container.js-sticky-container')[1] != null) {
                        document.querySelectorAll('.elc-sticky-container.js-sticky-container')[1].style.display="none";
                    }
                }
            }else{
                if (document.querySelector('.inc_pdp_block') != null) {
                    if (document.querySelectorAll('.elc-sticky-container.js-sticky-container')[1] != null) {
                        document.querySelectorAll('.elc-sticky-container.js-sticky-container')[1].style.display="block"
                    }
                }
            }   
        }
        window.addEventListener('resize', function() {
            if (document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_list_main_block') != null) {
                document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_list_main_block').setAttribute("style", "margin-left:0");
                var prd_length = 2
                if (window.innerWidth > 819) {
                    prd_length = 4
                }
                if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > prd_length && document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_left-btn_block') != null) {
                    document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_left-btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                    document.querySelector('.inc_pdp_block .inc_pdp_bundle_product_right-btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                    document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
                    document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
                }
                INC.clientConfig.slidevalue = 0
                INC.clientConfig.offset = 0
                INC.clientConfig.slidevalue = 0
            }
        }, {passive: true})
    }, 3000)
    function inc_isOnScreen(elem) {
        if( elem.length == 0 ) {
            return;
        }
        var $window = window.jQuery(window)
        var viewport_top = $window.scrollTop()
        var viewport_height = $window.height()
        var viewport_bottom = viewport_top + viewport_height
        var $elem = window.jQuery(elem)
        var top = $elem.offset().top
        var height = $elem.height()
        var bottom = top + height
        return (top >= viewport_top && top < viewport_bottom) ||
        (bottom > viewport_top && bottom <= viewport_bottom) ||
        (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
    }
    function slideTo(_id, _n, elm, type_of,arrow) {
        if (elm.className == "left_arrow" || elm.className == "left_arrow active" || type_of == "left") {
            var nn2 = -1
            var indslid=INC.config.inc_slideIndex += nn2
            inc_showSlides(indslid, nn2, elm, type_of,arrow);
        } else {
            var nn1 = 1
            var indslid1=INC.config.inc_slideIndex += nn1
            inc_showSlides(indslid1, nn1, elm, type_of,arrow);
        }
    }
    function inc_showSlides(n, _ind, elm,_type_of,arrow) {
        var showcase_other_img_list = elm.querySelector('.inc_product_showcase_block .inc_product_img_main_img a')
        var showcase_dots=elm.querySelectorAll('.inc_product_showcase_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block')
        var modal_dots=elm.querySelectorAll('.inc_product_modal_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block')

        var showcase_other_img = elm.querySelector('.inc_product_showcase_block .inc_product_img_main_img a img')

        var modal_other_img = elm.querySelector('.inc_product_modal_block .inc_product_img_main_img a img')
        if(showcase_other_img_list != null){
            var otherImg_list=showcase_other_img_list.getAttribute('otherImageList');
            if(otherImg_list != "null" && otherImg_list != ""){
                var additional_img=[]
                additional_img = otherImg_list.split(',');
                var get_org_img = showcase_other_img_list.getAttribute('imageURL')
                if (n > additional_img.length) {
                    INC.config.inc_slideIndex = 1
                }
                if (n < 1) {
                    INC.config.inc_slideIndex = additional_img.length
                }
                
                for (var im = 0; im < showcase_dots.length; im++) {
                    showcase_dots[im].classList.remove('active')
                    if(modal_dots[im] != undefined){
                        modal_dots[im].classList.remove('active')
                    }
                }
                var img_src = additional_img[INC.config.inc_slideIndex - 1].replace('160x90','2000x1500');
                if(img_src != "null"){
                    showcase_other_img.setAttribute('src',img_src);
                    modal_other_img.setAttribute('src',img_src)
                    showcase_other_img.setAttribute('onerror',"this.src='"+get_org_img+"'" );
                    modal_other_img.setAttribute('onerror',"this.src='"+get_org_img+"'" );
                    
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
                    if(arrow == "arrow"){
                        if(modal_dots.length > 6){
                            var activedots=elm.querySelector('.inc_product_modal_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block.active')
                            if(activedots != null){
                                var actind = activedots.getAttribute('index')
                                if(actind == 5){
                                        if(modal_dots.length >= 6){
                                            modal_dots[0].setAttribute('style','display: none !important;')
                                        }
                                    }else if(actind == 6){
                                        if(modal_dots.length >= 7){
                                            modal_dots[0].setAttribute('style','display: none !important;')
                                            modal_dots[1].setAttribute('style','display: none !important;')
                                        }
                                    }else if(actind == 7){
                                        if(modal_dots.length >= 8){
                                            modal_dots[0].setAttribute('style','display: none !important;')
                                            modal_dots[1].setAttribute('style','display: none !important;')
                                            modal_dots[2].setAttribute('style','display: none !important;')
                                        }
                                    }else if(actind == 8){
                                        if(modal_dots.length >= 9){
                                            modal_dots[0].setAttribute('style','display: none !important;')
                                            modal_dots[1].setAttribute('style','display: none !important;')
                                            modal_dots[2].setAttribute('style','display: none !important;')
                                            modal_dots[3].setAttribute('style','display: none !important;')
                                        }
                                    }else if(actind == 9){
                                        if(modal_dots.length >= 10){
                                            modal_dots[0].setAttribute('style','display: none !important;')
                                            modal_dots[1].setAttribute('style','display: none !important;')
                                            modal_dots[2].setAttribute('style','display: none !important;')
                                            modal_dots[3].setAttribute('style','display: none !important;')
                                            modal_dots[4].setAttribute('style','display: none !important;')
                                        }
                                    }else if(actind == 10){
                                        if(modal_dots.length >= 11){
                                            modal_dots[0].setAttribute('style','display: none !important;')
                                            modal_dots[1].setAttribute('style','display: none !important;')
                                            modal_dots[2].setAttribute('style','display: none !important;')
                                            modal_dots[3].setAttribute('style','display: none !important;')
                                            modal_dots[4].setAttribute('style','display: none !important;')
                                            modal_dots[5].setAttribute('style','display: none !important;')
                                        }
                                    }else if(actind == 11){
                                        if(modal_dots.length >= 12){
                                            modal_dots[0].setAttribute('style','display: none !important;')
                                            modal_dots[1].setAttribute('style','display: none !important;')
                                            modal_dots[2].setAttribute('style','display: none !important;')
                                            modal_dots[3].setAttribute('style','display: none !important;')
                                            modal_dots[4].setAttribute('style','display: none !important;')
                                            modal_dots[5].setAttribute('style','display: none !important;')
                                            modal_dots[6].setAttribute('style','display: none !important;')
                                        }
                                    }else {
                                        modal_dots[0].style.display = "flex"
                                        modal_dots[1].style.display = "flex"
                                        modal_dots[2].style.display = "flex"
                                        modal_dots[3].style.display = "flex"
                                        if(modal_dots[4] != undefined){
                                            modal_dots[4].style.display = "flex"
                                        }
                                        if(modal_dots[5] != undefined){
                                            modal_dots[5].style.display = "flex"
                                        }
                                        if(modal_dots[6] != undefined){
                                            modal_dots[6].style.display = "flex"
                                        }
                                    }
                                // }
                            }
                        }
                    }
                }
            }
        }
    }
    // SWIPE FEATURE
    var xDown = null;
    var yDown = null;
    function add_swipe(element) {
        element.addEventListener('touchstart', handleTouchStart, {passive: true});
        element.addEventListener('touchmove', handleTouchMove, {passive: true});
    }
    function handleTouchStart(evt) {
        xDown = evt.touches[0].clientX;
        yDown = evt.touches[0].clientY;
    }
    function handleTouchMove(evt) {
        var prod_card= null;
        if (!xDown || !yDown) {
            return;
        }
        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;
        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;
        if (Math.abs(xDiff) + Math.abs(yDiff) > 150 || Math.abs(xDiff) + Math.abs(yDiff) < 150) { 
            if (Math.abs(xDiff) > Math.abs(yDiff)) { /*most significant*/
                if (xDiff > 0) {
                    prod_card=evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                    slideTo(null,0,prod_card,"left")
                } else { /* right swipe */
                    prod_card=evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                    slideTo(null,0,prod_card,"right")
                }
            }
            /* reset values */
            xDown = null;
            yDown = null;
        }
    }
    function attribute_listing(valueArray) {
        var sortingArr = ["Color", "Size","カラー", "左右", "ボール数", "サイズ", "シャフト重量", "ライ角", "巻番号", "数量", "バックライン", "サイズ/幅", "サイズ/数量", "バックライン/サイズ", "長さ",   "番手","シャフト", "口径/バックライン", "左右/サイズ", "番手/ロフト", "フレックス/長さ", "フレックス/サイズ"  , "ロフト/フレックス", "口径/バックライン/サイズ","フレックス",  "番手/フレックス", "ロフト", "ロフト/バウンス角", "長さ/ライ角", "長さ/シャフト重量", "Flex", "Irons"];

        var items = valueArray

        var sorting = ["Color", "Size","カラー", "左右", "ボール数",  "サイズ", "シャフト重量", "ライ角", "巻番号", "数量", "バックライン", "サイズ/幅", "サイズ/数量", "バックライン/サイズ",  "長さ",  "番手","シャフト", "口径/バックライン", "左右/サイズ", "番手/ロフト", "フレックス/長さ", "フレックス/サイズ"  , "ロフト/フレックス", "口径/バックライン/サイズ", "フレックス",  "番手/フレックス", "長さ/ライ角", "ロフト", "ロフト/バウンス角", "長さ/シャフト重量", "Flex", "Irons"];
        var result = [] 

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
            var r = 0;
            var c2 = 0;
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
                    var c3 = e.charCodeAt(n + 2);
                    t += String.fromCharCode((r & 15) << 12 | (c2 & 63) << 6 | c3 & 63);
                    n += 3
                }
            }
            return t
        }
    }
    function getTrackingPixel() {
        var url = ''
        /*-------------------Tracking with Image Pixel---------------------------*/
        if(url != ''){
            var oImg = document.createElement("img");
            oImg.setAttribute('id', 'cstracking')
            oImg.setAttribute('src', url);
            oImg.setAttribute('height', '1px');
            oImg.setAttribute('width', '1px');
            oImg.setAttribute('style', 'display:none')
            document.body.appendChild(oImg);
        }
        /* -----------------------------------------------------------------------*/
    }
    function get_discount_price(p_original_price, p_sale_price) {
        return parseFloat(+p_original_price - +p_sale_price)
    }
    function get_discount_price_percentage(p_original_price, p_sale_price) {
        return Math.round(((p_original_price - p_sale_price) / p_original_price) * 100);
    }
    setTimeout(function(){
        if (document.querySelector('.inc_pdp_block') != null){
            if (document.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_module_block').classList.contains('simple') && document.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_module_block').classList.contains('simple')){
                document.querySelector('.inc_pdp_block').classList.add('bothSimple');
            }
        }
    },2500)

	var is_visible_elem_counter = 0;
	if (window.innerWidth < 980){
	    var scrollableElement = document.body;
	    scrollableElement.addEventListener('wheel', checkScrollDirection);
	    document.addEventListener("touchmove", checkScrollDirection, false);
	    function checkScrollDirection(event) {
	        var inc_div = document.querySelector(".inc_pdp_block");
	        if( inc_isOnScreen_page(jQuery( '.inc_pdp_block'))  && is_visible_elem_counter < 1){
	            var data = {
	                "eventData": String(btoa(JSON.stringify({ "event_data": { "product_id": INC.dataStore.pdpProductId }, "event_type": "catalog_product_view", "page_type": "catalog_product_view", "method": "track", "platform": "", "token": INC.config.clientToken }))),
	                "vid": readCookie('ivid'),
	                "time": getCurrentFormattedTime(),
	                "uri": document.location.href
	            };
	            makeTrackingApiCall(JSON.stringify(data));
	            is_visible_elem_counter++;
	        }
	    }
	} else {
	    
	    window.onscroll = function () { execute_import_tracking(); };
	}

	function inc_isOnScreen_page(elem) {
	    var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
	    if (isIOS) {
	        var el = document.querySelector(".inc_pdp_block")
	        if(el != null){
	            var top = el.offsetTop;
	            var left = el.offsetLeft;
	            var width = el.offsetWidth;
	            var height = el.offsetHeight;
	            while (el.offsetParent) {
	                el = el.offsetParent;
	                top += el.offsetTop;
	                left += el.offsetLeft;
	            }
	            return (top < (window.pageYOffset + window.innerHeight + 2000) && left < (window.pageXOffset + window.innerWidth) && (top + height) > window.pageYOffset && (left + width) > window.pageXOffset);
	        }
	    } else {
	        if( elem.length == 0 ) {
	            return;
	        }
	        var $window = jQuery(window)
	        var viewport_top = $window.scrollTop()
	        var viewport_height = $window.height()
	        var viewport_bottom = viewport_top + viewport_height
	        var $elem = jQuery(elem)
	        var top = $elem.offset().top
	        var height = $elem.height()
	        var bottom = top + height
	        return (top >= viewport_top && top < viewport_bottom) ||
	        (bottom > viewport_top && bottom <= viewport_bottom) ||
	        (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
	    }
	    
	}

	function execute_import_tracking() {
	    if (document.querySelector(".inc_pdp_block") != null || document.querySelector(".inc_pdp_block") != undefined) {
	        var el = document.querySelector(".inc_pdp_block");
	        var a = element_in_viewport(el);
	    }
	    if (a == true && is_visible_elem_counter < 1) {
	        var data = {
	            "eventData": String(btoa(JSON.stringify({ "event_data": { "product_id": INC.dataStore.pdpProductId }, "event_type": "catalog_product_view", "page_type": "catalog_product_view", "method": "track", "platform": "", "token": INC.config.clientToken }))),
	            "vid": readCookie('ivid'),
	            "time": getCurrentFormattedTime(),
	            "uri": document.location.href
	        };
	        makeTrackingApiCall(JSON.stringify(data));
	        is_visible_elem_counter++;
	    }
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

})();