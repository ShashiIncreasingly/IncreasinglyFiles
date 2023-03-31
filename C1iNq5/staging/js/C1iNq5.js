
(function(){
    'use strict';

    let pdp_html = '<div class="inc_pdp_title_block"><div class="inc_pdp_title_text_block"><div class="inc_pdp_title_text">Frequently bought together</div></div></div><div class="inc_pdp_bundle_block"><div class="inc_pdp_product-main_block"><div class="mainprodtitletext">This item</div></div><div class="inc_pdp_icon-add_block"><div class="inc_pdp_icon-add_img_block"><div class="inc_pdp_icon-add_img"></div></div></div><div class="inc_pdp_bundle_product_block"><div class="inc_pdp_bundle_product_header_block"><div class="inc_pdp_bundle_product_header_text">Frequently Bought with</div></div><div class="inc_pdp_bundle_product_left-btn_block"><div class="inc_pdp_bundle_product_left-btn_img_block"><div class="inc_pdp_bundle_product_left-btn_img" title="Scroll left"></div></div></div><div class="inc_pdp_bundle_product_list_block"><div class="inc_pdp_bundle_product_list_main_block"></div><div class="inc_pdp_bundle_product_list_left_block"><div class="inc_pdp_bundle_product_list_left_btn_block"><div class="inc_pdp_bundle_product_list_left_btn_img_block"><div class="inc_pdp_bundle_product_list_left_btn_img"></div></div></div></div><div class="inc_pdp_bundle_product_list_items_show_more_less_block"><div class="inc_pdp_bundle_product_list_items_show_more_less_text down_wrrow">Show more products</div></div><div class="inc_pdp_bundle_product_list_wrapper_items_block"><div class="inc_pdp_bundle_product_list_wrapper_header_block"><div class="inc_pdp_bundle_product_list_wrapper_header_text_block"></div><div class="inc_pdp_bundle_product_list_wrapper_header_close_block"></div></div><div class="inc_pdp_bundle_product_list_items_block"></div></div><div class="inc_pdp_bundle_product_list_right_block"><div class="inc_pdp_bundle_product_list_right_btn_block"><div class="inc_pdp_bundle_product_list_right_btn_img_block"><div class="inc_pdp_bundle_product_list_right_btn_img"></div></div></div></div></div><div class="inc_pdp_bundle_product_right-btn_block"><div class="inc_pdp_bundle_product_right-btn_img_block"><div class="inc_pdp_bundle_product_right-btn_img" title="Scroll right"></div></div></div></div><div class="inc_pdp_bundle_cart_overlay_block"></div><div class="inc_pdp_bundle_cart_block"><div class="inc_pdp_bundle_cart_title_block"><div class="inc_pdp_bundle_cart_title_text_block"><div class="inc_pdp_bundle_cart_title_text">Price Summary</div></div></div><div class="inc_pdp_bundle-cart_ecirp_block"><div class="inc_pdp_bundle-cart_ecirp_main"><div class="inc_pdp_bundle-cart_ecirp_main_title_block"><div class="inc_pdp_bundle-cart_ecirp_main_title_text_block"><div class="inc_pdp_bundle-cart_ecirp_main_title_text">Main Product Price </div></div></div><div class="inc_pdp_bundle-cart_ecirp_main_figure_block"><div class="inc_pdp_bundle-cart_ecirp_main_figure_text_block"><div class="inc_pdp_bundle-cart_ecirp_main_figure_text">£00.00</div></div></div></div><div class="inc_pdp_bundle-cart_ecirp_addon_block"><div class="inc_pdp_bundle-cart_ecirp_addon_title_block"><div class="inc_pdp_bundle-cart_ecirp_addon_title_text_block"><div class="inc_pdp_bundle-cart_ecirp_addon_title_text">Add-on(s) Selected </div></div></div><div class="inc_pdp_bundle-cart_ecirp_addon_figure_block"><div class="inc_pdp_bundle-cart_ecirp_addon_figure_text_block"><div class="inc_pdp_bundle-cart_ecirp_addon_figure_text">£0.00</div></div></div></div></div><div class="inc_pdp_bundle_cart_added_block"></div><div class="inc_pdp_bundle_cart_summary_block"><div class="inc_pdp_bundle_cart_summary_title_block"><div class="inc_pdp_bundle_cart_summary_title_text_block"><div class="inc_pdp_bundle_cart_summary_title_text">Total bundle price</div></div></div><div class="inc_pdp_bundle_cart_summary_ecirp_block"><div class="inc_pdp_bundle_cart_summary_ecirp_active_block"><div class="inc_pdp_bundle_cart_summary_ecirp_active_text_block"><div class="inc_pdp_bundle_cart_summary_ecirp_active_text">£60.00</div></div></div><div class="inc_pdp_bundle_cart_summary_ecirp_regular_block"><div class="inc_pdp_bundle_cart_summary_ecirp_regular_text_block"><div class="inc_pdp_bundle_cart_summary_ecirp_regular_text"></div></div></div></div><div class="inc_pdp_bundle_cart_summary_ecirp_save_block"><div class="inc_pdp_bundle_cart_summary_ecirp_save_text"></div></div><div class="inc_pdp_bundle_cart_summary_view_block"><div class="inc_pdp_bundle_cart_summary_view_btn_block"><div class="inc_pdp_bundle_cart_summary_view_btn_img_block"><div class="inc_pdp_bundle_cart_summary_view_btn_img"></div></div><div class="inc_pdp_bundle_cart_summary_view_btn_text_block"><div class="inc_pdp_bundle_cart_summary_view_btn_text">Added items</div></div><div class="inc_pdp_bundle_cart_summary_view_btn_count_block"><div class="inc_pdp_bundle_cart_summary_view_btn_count"></div></div></div></div><div class="inc_pdp_bundle_cart_summary_add_block"><div class="inc_pdp_bundle_cart_summary_add_btn_block"><div class="inc_pdp_bundle_cart_summary_add_btn_text_block"><div class="inc_pdp_bundle_cart_summary_add_btn_text">Add To Bag</div><div class="inc_pdp_bundle_cart_summary_add_btn_span"></div></div><div class="inc_pdp_bundle_cart_summary_add_btn_img_block"><div class="inc_pdp_bundle_cart_summary_add_btn_img"></div></div></div></div></div></div></div>';

    let sidebar_html = '<div class="inc_sidebar_modal_block"><div class="inc_sidebar_modal_cart_and_title_block"><div class="inc_header_title_block"><div class="inc_header_title_text_block"><div class="inc_header_title_text">Just Added to your Basket</div></div><span class="close_sisebar_icon"></span></div><div class="inc_sidebar_cart_added_block"><div class="inc_cart_added_list_block"></div><div class="inc_cart_product_count_block"></div></div><div class="inc_sidebar_header_block"><div class="inc_header_continue_block"><div class="inc_header_continue_img_block"><div class="inc_header_continue_img"></div></div><div class="inc_header_continue_text_block"><div class="inc_header_continue_text">Back</div></div></div><div class="inc_header_item_block"><div class="inc_header_item_count_block"><div class="inc_header_item_count_title_block"><div class="inc_header_item_count_title_text_block"><div class="inc_header_item_count_title_text">Subtotal (0 item)</div></div></div><div class="inc_header_item_count_figure_block"><div class="inc_header_item_count_figure_text_block"><div class="inc_header_item_count_figure_text"></div></div></div><div class="inc_cart_added_product_desc_subtotal_ecirp_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_active_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_active_text_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_active_text" subtotalactiveprice="0.00">£0.00</div><div class="inc_cart_added_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_cart_added_product_desc_subtotal_ecirp_regular_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_regular_text_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_regular_text" subtotalregularprice="0.00"></div></div></div></div></div></div></div></div><div class="inc_sidebar_checkout_block"><div class="inc_checkout_continue_block"><div class="inc_checkout_continue_btn_block"><div class="inc_checkout_continue_btn_img_block"><div class="inc_checkout_continue_btn_img"></div></div><div class="inc_checkout_continue_btn_text_block"><div class="inc_checkout_continue_btn_text">Continue Shopping</div><div class="inc_checkout_continue_btn_span"></div></div></div></div><div class="inc_checkout_basket_block"><div class="inc_checkout_basket_btn_block"><div class="inc_checkout_basket_btn_img_block"><div class="inc_checkout_basket_btn_img"></div></div><div class="inc_checkout_basket_btn_text_block"><div class="inc_checkout_basket_btn_span"></div><div class="inc_checkout_basket_btn_text"><a class="view_basket_checkout"><div draggable="false">Checkout</div></a></div></div></div></div></div><div class="inc_sidebar_recommended_block"><div class="inc_recommended_title_block"><div class="inc_recommended_title_text_block"><div class="inc_recommended_title_text">Customers also bought</div></div></div><div class="inc_recommended_tabs_block"><div class="inc_recommended_tabs_list_block inc_categ_4" tabindex="0"></div></div><div class="inc_recommended_products_block"><div class="inc_recommended_products_left_block"><div class="inc_recommended_products_left_btn_block"><div class="inc_recommended_products_left_btn_img_block"><div class="inc_recommended_products_left_btn_img" title="Scroll left"></div></div></div></div><div class="inc_recommended_products_list_main_block"><div class="inc_recommended_products_list_block"></div></div><div class="inc_recommended_products_item_thumb_block"><div class="inc_recommended_products_list_item_thumb_block"></div></div><div class="inc_recommended_products_right_block"><div class="inc_recommeded_products_right_btn_block"><div class="inc_recommended_products_right_btn_img_block"><div class="inc_recommended_products_right_btn_img" title="Scroll right"></div></div></div></div></div></div></div>';

    let cart_html = '<div class="inc_af_title_block" style="clear: both;"><div class="inc_af_title_text_block"><div class="inc_af_title_text">Customers also bought</div><div class="inc_af_modal_close"></div></div></div><div class="inc_af_bundles_block"><div class="inc_af_left_block"><div class="inc_af_left_btn_block"><div class="inc_af_left_btn_img_block"><div class="inc_af_left_btn_img"></div></div></div></div><div class="inc_af_product-list-main_block"><div class="inc_af_product-list_block"></div></div><div class="inc_af_right_block"><div class="inc_af_right_btn_block"><div class="inc_af_right_btn_img_block"><div class="inc_af_right_btn_img"></div></div></div></div></div>';

    let showcase_productcard = '<div class="inc_product_block"><div class="inc_product_extension_block"></div><div class="inc_product_header_main_block"><div class="inc_product_header_main_title_block"></div><div class="inc_product_header_main_rating_block"></div><div class="inc_product_header_block"><div class="inc_product_header_title_block"><div class="inc_product_header_title_text_block"><div class="inc_product_header_title_text"></div></div></div></div><div class="inc_product_Description_header_block"><div class="inc_product_Description_header_title_block"><div class="inc_product_Description_header_title_text_block"><div class="inc_product_Description_header_title_text"></div></div></div></div><div class="inc_product_header_img_block"><div class="inc_product_header_img"></div></div></div><div class="inc_product_info_main_block"><div class="inc_product_img_block"><div class="inc_product_img_main_block"><div class="inc_product_img_main_img"></div></div><div class="inc_product_img_gallery_block"><div class="inc_product_img_gallery_left_block"><div class="inc_product_img_gallery_left_btn_block"><div class="inc_product_img_gallery_left_btn_img_block"><div class="inc_product_img_gallery_left_btn_img"></div></div><div class="inc_product_img_gallery_left_btn_text_block"><div class="inc_product_img_gallery_left_btn_text"></div></div></div></div><div class="inc_product_img_gallery_list_block"></div><div class="inc_product_img_gallery_right_block"><div class="inc_product_img_gallery_right_btn_block"><div class="inc_product_img_gallery_right_btn_img_block"><div class="inc_product_img_gallery_right_btn_img"></div></div><div class="inc_product_img_gallery_right_btn_text_block"><div class="inc_product_img_gallery_right_btn_text"></div></div></div></div></div></div><div class="inc_product_desc_block"><div class="inc_product_desc_title_block"><div class="inc_product_desc_title_text_block"><div class="inc_product_desc_title_text"></div></div></div><div class="pc_promo_div empty"></div><div class="inc_product_desc_ecirp_block"><div class="inc_product_ecirp_label_block">SALE</div><div class="inc_product_desc_ecirp_active_block"><div class="inc_product_desc_ecirp_active_text_block"><div class="inc_product_desc_ecirp_active_text">£0.00 - -£0.00</div><div class="inc_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_product_desc_ecirp_regular_block"><div class="inc_product_desc_ecirp_regular_text_block"><div class="inc_product_desc_ecirp_regular_text"></div></div></div><div class="inc_product_desc_ecirp_worth_block"><div class="inc_product_desc_ecirp_worth_text_block"><div class="inc_product_desc_ecirp_worth_text"></div><div class="inc_product_desc_ecirp_worth_text_msg"></div></div></div></div><div class="inc_product_desc_ratings_block"></div><div class="inc_variant_error_text"></div><div class="inc_product_desc_att_details_block"><div class="inc_product_variant_simple_block"><div class="inc_product_variant_simple_text">Add To Bag</div></div><div class="inc_product_desc_att_block"><div class="inc_product_desc_variant_popup_close_block"></div><div class="inc_product_desc_add_err_text_block"></div><div class="inc_product_desc_add_title_text_block"></div><div class="inc_product_desc_att_zero_block"><div class="inc_product_desc_att_zero_title_block"><div class="inc_product_desc_att_zero_title_text_block"><div class="inc_product_desc_att_zero_title_text"></div><div class="inc_product_desc_att_zero_title_text_selected"></div></div></div><div class="inc_product_desc_att_zero_list_block"></div></div><div class="inc_product_desc_att_size_block"><div class="inc_product_desc_att_size_title_block"><div class="inc_product_desc_att_size_title_text_block"><div class="inc_product_desc_att_size_title_text"></div><div class="inc_product_desc_att_size_title_text_selected"></div></div></div><div class="inc_product_desc_att_size_list_block"></div></div><div class="inc_product_desc_att_color_block"><div class="inc_product_desc_att_color_title_block"><div class="inc_product_desc_att_color_title_text_block"><div class="inc_product_desc_att_color_title_text"></div><div class="inc_product_desc_att_color_title_text_selected"></div></div></div><div class="inc_product_desc_att_color_list_block"></div></div><div class="inc_product_desc_att_third_block"><div class="inc_product_desc_att_third_title_block"><div class="inc_product_desc_att_third_title_text_block"><div class="inc_product_desc_att_third_title_text"></div><div class="inc_product_desc_att_third_title_text_selected"></div></div></div><div class="inc_product_desc_att_third_list_block"></div></div><div class="inc_product_desc_att_fourth_block"><div class="inc_product_desc_att_fourth_title_block"><div class="inc_product_desc_att_fourth_title_text_block"><div class="inc_product_desc_att_fourth_title_text"></div><div class="inc_product_desc_att_fourth_title_text_selected"></div></div></div><div class="inc_product_desc_att_fourth_list_block"><div class="inc_product_desc_att_fourth_list_item_block"><div class="inc_product_desc_att_fourth_list_item_img_block"><div class="inc_product_desc_att_fourth_list_item_img"></div></div><div class="inc_product_desc_att_fourth_list_item_text_block"><div class="inc_product_desc_att_fourth_list_item_text"></div></div></div></div></div><div class="inc_product_desc_att_edit_block"><div class="inc_product_desc_att_edit_text"></div></div><div class="inc_product_desc_att_variant_add_block"><div class="inc_product_desc_att_variant_text"></div></div></div><div class="inc_product_details_prod_block"><div class="inc_product_details_prod_text"></div></div></div><div class="inc_product_desc_qty_add_btn_block "><label>qty</label><div class="inc_product_qty_block singleqty"><div class="inc_product_qty_down_block"><div class="inc_product_qty_down_btn_block"><div class="inc_product_qty_down_btn"></div></div></div><div class="inc_product_qty_input_block"><div class="inc_product_qty_input_text_block"><div class="inc_product_qty_input_text"><span class="inc_add_text"></span></div></div></div><div class="inc_product_qty_up_block"><div class="inc_product_qty_up_btn_block"><div class="inc_product_qty_up_btn"></div></div></div></div><div class="inc_product_add_block"><div class="inc_product_add_text_block"><div class="inc_product_add_text">Add To Bag</div></div></div><div class="inc_product_desc_add_block"><div class="inc_product_desc_add_img_block"><div class="inc_product_desc_add_img"></div></div><div class="inc_product_desc_add_text_block"><div class="inc_product_desc_add_text">Add To Bag</div><div class="inc_product_desc_add_span"></div></div></div><div class="inc_product_bstxt_block"></div></div></div><div class="inc_product_bstxt_block"></div></div><div class="inc_product_description_main_block"></div></div>';

    let modal_productcard = '<div class="inc_product_block "><div class="inc_product_extension_block"></div><div class="inc_product_header_main_block"><div class="inc_product_header_main_title_block"></div><div class="inc_product_header_main_rating_block"><div class="inc_product_desc_ratings_block"></div><span class="product_modal_sku">#</span></div><div class="inc_product_header_block"><div class="inc_product_header_title_block"><div class="inc_product_header_title_text_block"><div class="inc_product_header_title_text">Overview</div></div></div><div class="inc_product_header_title_block_1"><div class="inc_product_header_title_text_block_1"><div class="inc_product_header_title_text_1">Product Details</div></div></div><div class="inc_product_header_new_page"><a class="inc_product_header_new_page_text" href="">Open In A New Tab</a></div></div><div class="inc_product_Description_header_block"><div class="inc_product_Description_header_title_block"><div class="inc_product_Description_header_title_text_block"><div class="inc_product_Description_header_title_text"></div></div></div></div><div class="inc_product_header_img_block"><div class="inc_product_header_img"></div></div></div><div class="inc_product_info_main_block"><div class="inc_product_img_block"><div class="inc_product_img_main_block"><div class="inc_product_img_main_img"></div></div><div class="inc_product_img_gallery_block"><div class="inc_product_img_gallery_left_block" title="Scroll left"><div class="inc_product_img_gallery_left_btn_block"><div class="inc_product_img_gallery_left_btn_img_block"><div class="inc_product_img_gallery_left_btn_img"></div></div><div class="inc_product_img_gallery_left_btn_text_block"><div class="inc_product_img_gallery_left_btn_text"></div></div></div></div><div class="inc_product_img_gallery_list_block"></div><div class="inc_product_img_gallery_right_block" title="Scroll right"><div class="inc_product_img_gallery_right_btn_block"><div class="inc_product_img_gallery_right_btn_img_block"><div class="inc_product_img_gallery_right_btn_img"></div></div><div class="inc_product_img_gallery_right_btn_text_block"><div class="inc_product_img_gallery_right_btn_text"></div></div></div></div></div></div><div class="inc_product_desc_block"><div class="inc_product_desc_title_block"><div class="inc_product_desc_title_text_block"><div class="inc_product_desc_title_text"></div></div></div><div class="inc_product_desc_ecirp_block"><div class="inc_product_ecirp_label_block">SALE</div><div class="inc_product_desc_ecirp_active_block"><div class="inc_product_desc_ecirp_active_text_block"><div class="inc_product_desc_ecirp_active_text">£0.00 - -£0.00</div><div class="inc_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_product_desc_ecirp_regular_block"><div class="inc_product_desc_ecirp_regular_text_block"><div class="inc_product_desc_ecirp_regular_text"></div></div></div><div class="inc_product_desc_ecirp_worth_block"><div class="inc_product_desc_ecirp_worth_text_block"><div class="inc_product_desc_ecirp_worth_text"></div><div class="inc_product_desc_ecirp_worth_text_msg"></div></div></div></div><div class="inc_product_desc_ratings_block"></div><div class="inc_product_desc_att_details_block"><div class="inc_product_variant_simple_block"><div class="inc_product_variant_simple_text"></div></div><div class="pc_promo_div empty"></div><div class="inc_product_desc_att_block"><div class="inc_product_desc_variant_popup_close_block"></div><div class="inc_product_desc_add_err_text_block"></div><div class="inc_product_desc_add_title_text_block"></div><div class="inc_product_desc_att_zero_block"><div class="inc_product_desc_att_zero_title_block"><div class="inc_product_desc_att_zero_title_text_block"><div class="inc_product_desc_att_zero_title_text"></div><div class="inc_product_desc_att_zero_title_text_selected"></div></div></div><div class="inc_product_desc_att_zero_list_block"></div></div><div class="inc_product_desc_att_size_block"><div class="inc_product_desc_att_size_title_block"><div class="inc_product_desc_att_size_title_text_block"><div class="inc_product_desc_att_size_title_text"></div><div class="inc_product_desc_att_size_title_text_selected"></div></div></div><div class="inc_product_desc_att_size_list_block"></div></div><div class="inc_product_desc_att_color_block"><div class="inc_product_desc_att_color_title_block"><div class="inc_product_desc_att_color_title_text_block"><div class="inc_product_desc_att_color_title_text"></div><div class="inc_product_desc_att_color_title_text_selected"></div></div></div><div class="inc_product_desc_att_color_list_block"></div></div><div class="inc_product_desc_att_third_block"><div class="inc_product_desc_att_third_title_block"><div class="inc_product_desc_att_third_title_text_block"><div class="inc_product_desc_att_third_title_text"></div><div class="inc_product_desc_att_third_title_text_selected"></div></div></div><div class="inc_product_desc_att_third_list_block"></div></div><div class="inc_product_desc_att_fourth_block"><div class="inc_product_desc_att_fourth_title_block"><div class="inc_product_desc_att_fourth_title_text_block"><div class="inc_product_desc_att_fourth_title_text"></div><div class="inc_product_desc_att_fourth_title_text_selected"></div></div></div><div class="inc_product_desc_att_fourth_list_block"><div class="inc_product_desc_att_fourth_list_item_block"><div class="inc_product_desc_att_fourth_list_item_img_block"><div class="inc_product_desc_att_fourth_list_item_img"></div></div><div class="inc_product_desc_att_fourth_list_item_text_block"><div class="inc_product_desc_att_fourth_list_item_text"></div></div></div></div></div><div class="inc_product_desc_att_edit_block"><div class="inc_product_desc_att_edit_text"></div></div><div class="inc_product_desc_att_variant_add_block"><div class="inc_product_desc_att_variant_text"></div></div></div><div class="inc_product_details_prod_block"><div class="inc_product_details_prod_text"></div></div></div><div class="inc_product_desc_qty_add_btn_block"><div class="inc_product_qty_block singleqty"><div class="inc_product_qty_down_block"><div class="inc_product_qty_down_btn_block"><div class="inc_product_qty_down_btn"></div></div></div><div class="inc_product_qty_input_block"><div class="inc_product_qty_input_text_block"><div class="inc_product_qty_input_text"></div></div></div><div class="inc_product_qty_up_block"><div class="inc_product_qty_up_btn_block"><div class="inc_product_qty_up_btn"></div></div></div></div><div class="inc_product_add_block"><div class="inc_product_add_text_block"><div class="inc_product_add_text"></div></div></div><div class="inc_product_desc_add_block"><div class="inc_product_desc_add_img_block"><div class="inc_product_desc_add_img"></div></div><div class="inc_product_desc_add_text_block"><div class="inc_product_desc_add_text">Add To Bag</div><div class="inc_product_desc_add_span"></div></div></div><div class="inc_product_bstxt_block"></div></div></div><div class="inc_product_bstxt_block"></div></div><div class="inc_product_description_main_block"></div></div>';

    let INC = {};
    let init_flag = true
    INC.ENV = "prod";
    INC.debug = 0;
    INC.initStatus = "";
    INC.initStatusCP = "";
    let onloadpdp = false;
    let falseflag = false;
    let trueflag = true;
    let crypto = window.crypto || window.msCrypto;
    function generateRandomString(bits1) {
        return (crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295).toString(bits1).substring(2, 15) + (crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295).toString(bits1).substring(2, 15);
    }
    let onloadpdp_delete = false;
    let incallowedKeys = [46, 8, 9, 27, 110, 190];
    let inc_scroll_height = 100
    INC.clientConfig = {};
    INC.clientConfig.statusVAT = "";
    INC.clientConfig.offset = 0;
    INC.clientConfig.slidevalue = 0;
    INC.config = {};
    INC.config.deviceType = "";
    INC.config.clientToken = "C1iNq5";
    INC.config.trackingURL = "https://optimizedby.increasingly.co/ImportData";
    INC.config.addToBasketURL = "";
    INC.clientConfig.checkoutLink = "";
    INC.config.affiliateURL = "";
    INC.config.pageType = "";
    INC.config.ivid = "";
    INC.config.recommendationProduct = []
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
    INC.config.FBTTitle = "Frequently bought together"
    INC.config.AddedText = "Added"
    INC.config.BeforeYouChecktext = "Customers also bought"
    INC.config.ajaxerr = "I'm sorry we've experienced an error. Please try again."
    INC.config.UpdateText = "UPDATE"
    INC.config.noimage = "/Implementation/C1iNq5/images/noimage.png"
    INC.config.recommendation = false;
    INC.config.srcImgeLazy = "/Implementation/C1iNq5/images/img_placeholder.gif";
    INC.config.bundledid=[]
    INC.config.cldomain = ""
    INC.config.checkoutpath = ""
    INC.config.db_products = 0
    INC.checkProdUserCookie = function () {
        if (INC.ENV == "prod") {
            if (init_flag) {
                setTimeout(function(){
                    init_flag = false;
                    INC.init();
                },500)
            }
        }
    }
    INC.checkProdUserCookie();
    function readCookie(name) {
        let nameEQ = name + "=";
        let ca = document.cookie.split(';');
        for(let s of ca) {
            let c = s;
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    function generate_html_tag(element, className) {
        let generateEl = document.createElement(element);
        if(className != undefined){
            generateEl.classList.add(className)
        }
        return generateEl;
    }
    INC.init = function () {
        INC.methods.addVisitorID();
        INC.config.pageType = INC.methods.detectPageType();
        INC.methods.clear();
        let paramdata = { "eventData": btoa((JSON.stringify({"vid":INC.config.ivid,"token":"C1iNq5"}))) };
        let eventdata = JSON.stringify(paramdata)
        let p_url = '//rapidload.increasingly.co/increasingly_domain';
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status === 200) {
                if (xhr.responseText != "") {
                    let resData = JSON.parse(xhr.responseText)
                    INC.config.addToBasketURL = resData.basketURL
                    INC.clientConfig.checkoutLink = resData.checkoutURL
                    INC.config.checkoutpath = resData.checkoutPath
                    INC.config.cldomain = resData.domain
                    INC.config.noimage = resData.increasinglyFilesDomain + "/Implementation/C1iNq5/images/noimage.png"
                    INC.config.srcImgeLazy = resData.increasinglyFilesDomain + "/Implementation/C1iNq5/images/img_placeholder.gif";
                }
            }
        };
        
        xhr.open("POST", p_url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(eventdata);
        
        switch (INC.config.pageType) {
            case "pdp":
                var productId = INC.methods.getProductIdFromWebPage();
                INC.methods.irbReq(productId, 5, "catalog_product_view");
                break;
            case "cartPage":
                if (cartpageprodids().length > 0) {
                    INC.methods.irbReq(INC.config.cartproductids, 12, "checkout_cart_index");
                }
                break;
            case "productList":
                break;
        }
    }
    function cartpageprodids(){
        INC.config.cartproductids=[]
        let idsFromStorage = window.utag_data.cart_product_base_id
        idsFromStorage.map((product) => {
            INC.config.cartproductids.push(product.toString())
        })
        return INC.config.cartproductids;
    }
    INC.dataStore = {};
    INC.dataStore.methods = function () {
        let incDataStore = INC.dataStore;
        function buildDataStoreObj(bundleResponse) {
            INC.config.dupDataObjectProducts = []
            INC.dataStore.clientProductDealsCategory = "";
            let bundles = [];
            let reccheck = true;
            let recC = false;
            if (INC.config.recommendation == reccheck) {
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
            let dataStoreObj = {};
            let bundleproductarray = {}
            let bundleProductsArray = [];
            if (bundleResponse.ProductsDetail != null) {
                for(let prdetails of bundleResponse.ProductsDetail) {
                    bundleproductarray[prdetails.ProductId] = prdetails
                }
            } else if (bundleResponse.CategoryRecommendations != null) {
                for(let catrecT of bundleResponse.CategoryRecommendations) {
                    bundleproductarray[catrecT.ProductId] = catrecT
                }
            }
            let pdpProductId = ""
            for(let bundle_i of bundles) {
                if (INC.config.dupDataObjectProducts.indexOf(bundle_i.BundleId) == -1) {
                    if (INC.config.recommendation == recC) {
                        INC.config.dupDataObjectProducts.push(bundle_i.BundleId)
                    }
                    INC.config.bundledid.push({
                        bundleids :bundle_i.BundleId,
                        productids:bundle_i.ProductIds
                    })
                    let irbBundleObj = bundle_i;
                    let bundleObj = {};
                    if (INC.config.recommendation == recC) {
                        bundleObj.id = irbBundleObj["BundleId"];
                    }
                    if (INC.config.recommendation == recC) {
                        bundleObj.id = irbBundleObj["BundleId"];
                        bundleObj.totalRegularPrice = irbBundleObj["TotalPrice"];
                        bundleObj.totalActivePrice = irbBundleObj["TotalSpecialPrice"];
                        bundleObj.totalBundlePrice = irbBundleObj["TotalBundlePrice"];
                        bundleObj.totalBundleDiscountPrice = irbBundleObj["DiscountPrice"];
                        bundleObj.productCount = irbBundleObj["ProductCount"];
                    }
                    let irbProductsArray = '';
                    if (INC.config.recommendation == reccheck) {
                        irbProductsArray = bundles;
                    } else {
                        irbProductsArray = irbBundleObj["ProductIds"]
                    }
                    if (INC.config.recommendation == recC) {
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
                    if (INC.config.recommendation == reccheck) {
                        bundleProductsArray.push(bundle_i["ProductId"]);
                    }
                    for(let irbprdarray of irbProductsArray) {
                        let product = bundleproductarray[irbprdarray] || irbprdarray
                        let pAttributes = product["Attributes"] || "";
                        
                        if (pAttributes != "" && pAttributes != null) {
                            for(let p of pAttributes) {
                                if (p.frontEndLabel == "color") {
                                    p.frontEndLabel = "Color"
                                }
                                if (p.frontEndLabel == "Shade") {
                                    p.frontEndLabel = "Color"
                                }
                                if (p.frontEndLabel == "size") {
                                    p.frontEndLabel = "Size"
                                }
                                if(pAttributes.length == 1){
                                    if (p.frontEndLabel == "color" || p.frontEndLabel == "Color") {
                                        p.frontEndLabel = "Color"
                                    }else{
                                        p.frontEndLabel = "Size"
                                    }
                                }
                                p.attributeCode = p.frontEndLabel;
                            }
                            pAttributes = attribute_listing(pAttributes)
                        }
                        let pAttObj = {};
                        let attr_values = '';
                        let c_t = 0
                        for(let t of pAttributes) {
                            if (pAttributes.length == 1) {
                                if (pAttributes[0].attributeCode == "Color" || pAttributes[0].attributeCode == "color") {
                                    pAttributes[0].attributeId = 0;
                                    attr_values = t.attributeValues;
                                    for(let v of attr_values) {
                                        v.optionId = 0;
                                    }
                                } else {
                                    pAttributes[0].attributeId = 1;
                                    attr_values = t.attributeValues;
                                    for(let vb of attr_values) {
                                        vb.optionId = 1;
                                    }
                                }
                            } else {
                                t.attributeId = c_t
                                attr_values = t.attributeValues;
                                for(let va of attr_values) {
                                    va.optionId = c_t;
                                }
                            }
                            c_t++
                        }
                        let productObj = '';
                        if (pAttributes.length) {
                            for(let pattv of pAttributes) {
                                let pAttributesObj = pattv;
                                let pAttributesValues = pAttributesObj["attributeValues"];
                                for(let patvalues of pAttributesValues) {
                                    let childProduct = patvalues;
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
                                    childProduct["ProductType"] = product["ProductType"];
                                    childProduct["mainSKU"] = product["ProductSku"];
                                    childProduct["childProductIdmain"] = product["ProductId"];
                                    childProduct["childProductImageUrlMain"] = product["ImageURL"];
                                    childProduct["childProductPriceMain"] = product["Price"];
                                    childProduct["childProductSpecialPriceMain"] = product["SpecialPrice"];
                                    childProduct["childProductNameMain"] = product["ProductName"];
                                    childProduct["childProductUrlMain"] = product["ProductUrl"];
                                    if(childProduct["childProductOtherImageUrl"] == null){
                                        childProduct["childProductOtherImageUrl"] = product["OtherImageList"];
                                    }
                                    if(childProduct["childProductName"] == null){
                                        childProduct["childProductName"] = product["ProductName"];
                                    }
                                    if(childProduct["childProductField6"] == null){
                                        childProduct["childProductField6"] = product["Field6"];
                                    }
                                    if(childProduct["childProductField4"] == null){
                                        childProduct["childProductField4"] = product["Field4"];
                                    }
                                    childProduct["childreviewsCount"] = product["RatingCount"];
                                    childProduct["childRating"] = product["Rating"];
                                    childProduct["childCategoryName"] = product["CategoryName"];
                                    childProduct["childCategoryId"] = product["CategoryId"];
                                    childProduct["childProductDescription"] = product["Description"];

                                    productObj = new INC.classes.ProductAttObj(childProduct);

                                    productObj["bundledProductId"] = pdpProductId;
                                    productObj.mainId = product["ProductId"];
                                    productObj.bundleId = bundleObj.id;
                                    productObj.sku = productObj.id;
                                    productObj.option[pAttributesObj["attributeId"]].id = pAttributesObj["attributeId"];
                                    productObj.option[pAttributesObj["attributeId"]].label = pAttributesObj["frontEndLabel"];
                                    productObj.option[pAttributesObj["attributeId"]].code = pAttributesObj["attributeCode"];
                                    productObj.Filed3 = product["Field3"] + " | " + product["Field4"];
                                    
                                    if (!Object.prototype.hasOwnProperty.call(dataStoreObj, product['ProductId'])) {
                                        dataStoreObj[product['ProductId']] = {};
                                    }
                                    if (!Object.prototype.hasOwnProperty.call(dataStoreObj[product['ProductId']], productObj['id'])) {
                                        dataStoreObj[product['ProductId']][productObj['id']] = {}
                                    }
                                    pAttObj = dataStoreObj[product['ProductId']][productObj['id']];
                                    for(let pAtt in productObj) {
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
                        if (pAttributes.length == 0) {
                            productObj = new INC.classes.ProductObj(product);
                            productObj["bundleId"] = irbBundleObj["BundleId"];
                            if (INC.config.recommendation == recC) {
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
            incDataStore.dataStoreObj = dataStoreObj;
            incDataStore.bundleProductsArray = bundleProductsArray;
            if (INC.config.recommendation == recC) {
                incDataStore.pdpProductId = pdpProductId;
            }
            incDataStore.bundleCartProducts = {};
        }
        function getFirstProductObjByMainId(findObj) {
            let childProductObj = {};
            let productListObj = INC.dataStore.dataStoreObj;
            try {
                if(productListObj != undefined){
                    childProductObj = productListObj[findObj["mainId"]][Object.keys(productListObj[findObj["mainId"]])[0]];
                }
            } catch(e) {
                console.error('e', e.stack);
            }
            return childProductObj;
        }

        function getProductById(findObj) {
            let childProductObj = {};
            let productListObj = INC.dataStore.dataStoreObj;
            if (Object.prototype.hasOwnProperty.call(findObj, "id")) {
                for(let mainProductId in productListObj) {
                    for(let childProductId in productListObj[mainProductId]) {
                        if (productListObj[mainProductId][childProductId]["id"] == findObj["id"]) {
                            childProductObj = productListObj[mainProductId][childProductId];
                            break;
                        }
                    }
                }
            }
            if(Object.keys(childProductObj).length == 0){
                if (Object.prototype.hasOwnProperty.call(findObj, "id")) {
                    for(let mainProductIds in productListObj) {
                        for(let childProductIds in productListObj[mainProductIds]) {
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
            let childProductObj = {};
            let productListObj = INC.dataStore.dataStoreObj;
            if (Object.prototype.hasOwnProperty.call(findObj, "sku")) {
                for(let mainProductId in productListObj) {
                    for(let childProductId in productListObj[mainProductId]) {
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
            let catergoriesArray = [];
            let productListObj = INC.dataStore.dataStoreObj;
            let bundleProductsArray = INC.dataStore.bundleProductsArray;
            bundleProductsArray.forEach(function (productId) {
                for(let childProductId in productListObj[productId]) {
                    let indexOfCategoryId = catergoriesArray.indexOf(productListObj[productId][childProductId]["categoryId"]);
                    if (indexOfCategoryId == -1 && productListObj[productId][childProductId]["categoryId"] != INC.dataStore.clientProductDealsCategory) {
                        catergoriesArray.push(productListObj[productId][childProductId]["categoryId"]);
                    }
                }
            });
            return catergoriesArray;
        }
        function getProductColorsObj(findObj, type_of) {
            let productColorObj = {};
            let productListObj = INC.dataStore.dataStoreObj;
            let productColorArrayObj = {}
            let productColorObjArray = [];
            if (Object.prototype.hasOwnProperty.call(findObj, "mainId")) {
                for (let mainProductId in productListObj) {
                    if (mainProductId == findObj["mainId"]) {
                        for (let childProductId in productListObj[mainProductId]) {
                            if (productListObj[mainProductId][childProductId]["option"]["0"] != undefined) {

                                if (productListObj[mainProductId][childProductId]["option"]["0"].code == "Color") {
                                    if (productListObj[mainProductId][childProductId]["option"] != null && productListObj[mainProductId][childProductId]["option"] != undefined && productListObj[mainProductId][childProductId]["option"]["0"] != null && productListObj[mainProductId][childProductId]["option"]["0"] != undefined) {
                                        if (type_of != undefined) {
                                            let attr_block = null;
                                            if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == falseflag) {
                                                attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                            } else {
                                                attr_block = type_of.parentNode.parentNode.parentNode
                                            }
                                            let opt_text = ""
                                            let opt_size_text = ""
                                            if (type_of.parentNode != null) {
                                                opt_text = attr_block.getAttribute('data-zero');
                                                if (attr_block.getAttribute('data-size') != undefined) {
                                                    opt_size_text = attr_block.getAttribute('data-size');
                                                }
                                            } else {
                                                opt_text = type_of.innerText;
                                            }

                                            if (opt_text != "" && opt_size_text != "" && productListObj[mainProductId][childProductId].option[1] != undefined && productListObj[mainProductId][childProductId].option[2] != undefined) {
                                                if (productListObj[mainProductId][childProductId].option[1].text == opt_text && productListObj[mainProductId][childProductId].option[2].text == opt_size_text) {
                                                    colordata(productColorArrayObj, productListObj, mainProductId, childProductId)
                                                }
                                            } else if (opt_text != "" && productListObj[mainProductId][childProductId].option[1] != undefined) {
                                                if (productListObj[mainProductId][childProductId].option[1].text == opt_text) {
                                                    colordata(productColorArrayObj, productListObj, mainProductId, childProductId)
                                                }
                                            } else {
                                                colordata(productColorArrayObj, productListObj, mainProductId, childProductId)
                                            }
                                        } else {
                                            colordata(productColorArrayObj, productListObj, mainProductId, childProductId)
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            }
            Object.keys(productColorArrayObj).forEach(function (colorText) {
                let colorObj = {}
                colorObj["text"] = colorText;
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
        function colordata(productColorArrayObj, productListObj, mainProductId, childProductId) {
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]] = {};
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["0"]["titleText"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["0"]["colorCode"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["0"]["imgSrc"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["0"]["code"];
            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["0"]["cpid"];
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
                            var attr_flag = ""
                            if (productListObj[mainProductId][childProductId]["option"] != null && productListObj[mainProductId][childProductId]["option"]["2"] != undefined) {
                                if (type_of != undefined) {
                                    var attr_block = null;
                                    if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == falseflag) {
                                        attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                    } else {
                                        attr_block = type_of.parentNode.parentNode.parentNode
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
                                        if (opt_text != "" && opt_size_text != "" && productListObj[mainProductId][childProductId].option[0]) {
                                            if (productListObj[mainProductId][childProductId].option[1].text == opt_text && productListObj[mainProductId][childProductId].option[0].text == opt_size_text) {
                                                attr_flag = "fir_block"
                                            }
                                        } else {
                                            if (productListObj[mainProductId][childProductId].option[1].text == opt_text) {
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
                                    } else if (productListObj[mainProductId][childProductId]["option"] != null && productListObj[mainProductId][childProductId]["option"]["2"] != null) {
                                        attr_flag = "empty_"
                                    }
                                } else if (productListObj[mainProductId][childProductId]["option"] != null && productListObj[mainProductId][childProductId]["option"]["2"] != null) {
                                    attr_flag = "empty"
                                }
                                if (attr_flag == "fir_block" || attr_flag == "sec_block" || attr_flag == "empty" || attr_flag == "empty_") {
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
        function getProductopt0Obj(findObj, type_of) {
            var product0Obj = {};
            var productListObj = INC.dataStore.dataStoreObj;
            var product0ArrayObj = {}
            var product0ObjArray = [];
            if (Object.prototype.hasOwnProperty.call(findObj, "mainId")) {
                for (var mainProductId in productListObj) {
                    if (mainProductId == findObj["mainId"]) {
                        for (var childProductId in productListObj[mainProductId]) {

                            if (productListObj[mainProductId][childProductId]["option"] != null && productListObj[mainProductId][childProductId]["option"] != undefined && productListObj[mainProductId][childProductId]["option"]["1"] != null && productListObj[mainProductId][childProductId]["option"]["1"] != undefined) {
                                if (type_of != undefined) {
                                    var attr_block = null;
                                    if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == falseflag) {
                                        attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                    } else {
                                        attr_block = type_of.parentNode.parentNode.parentNode
                                    }
                                    var opt_text = ""
                                    if (type_of.parentNode != null) {
                                        opt_text = attr_block.getAttribute('data-color');
                                    } else {
                                        opt_text = type_of.innerText;
                                    }
                                    if (opt_text != undefined) {
                                        if (productListObj[mainProductId][childProductId].option["0"].text.trim().toLocaleLowerCase() == opt_text.trim().toLocaleLowerCase()) {
                                            zerodata(product0ArrayObj, productListObj, mainProductId, childProductId)
                                        }
                                    } else {
                                        zerodata(product0ArrayObj, productListObj, mainProductId, childProductId)
                                    }
                                } else {

                                    zerodata(product0ArrayObj, productListObj, mainProductId, childProductId)
                                }
                            }
                        }
                    }
                }
            }

            Object.keys(product0ArrayObj).forEach(function (colorText) {
                var attr0Obj = {}

                attr0Obj["text"] = colorText;
                attr0Obj["text1"] = colorText
                attr0Obj["imgSrc"] = product0ArrayObj[colorText]["imgSrc"];
                attr0Obj["titleText"] = product0ArrayObj[colorText]["titleText"];
                attr0Obj["code"] = product0ArrayObj[colorText]["code"];
                attr0Obj["cpid"] = product0ArrayObj[colorText]["cpid"];
                attr0Obj["prc"] = product0ArrayObj[colorText]["prc"];
                attr0Obj["label"] = product0ArrayObj[colorText]["label"];
                attr0Obj["colorCode"] = product0ArrayObj[colorText]["colorCode"];
                attr0Obj["opt_id"] = product0ArrayObj[colorText]["opt_id"];
                attr0Obj["att_id"] = product0ArrayObj[colorText]["att_id"];
                attr0Obj["option_text"] = product0ArrayObj[colorText]["option_text"];
                attr0Obj["option_text1"] = product0ArrayObj[colorText]["option_text1"];
                attr0Obj["option_text2"] = product0ArrayObj[colorText]["option_text2"];
                attr0Obj["headers"] = product0ArrayObj[colorText]["headers"];
                attr0Obj["combo_options"] = product0ArrayObj[colorText]["combo_options"];

                product0ObjArray.push(attr0Obj);

            });
            product0Obj["att0Array"] = sortByKey(product0ObjArray, 'colorText');
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
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["option_text"] = productListObj[mainProductId][childProductId]["option"]["1"]["option_text"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["option_text1"] = productListObj[mainProductId][childProductId]["option"]["1"]["option_text1"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["option_text2"] = productListObj[mainProductId][childProductId]["option"]["1"]["option_text2"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["headers"] = productListObj[mainProductId][childProductId]["option"]["1"]["headers"];
            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["combo_options"] = productListObj[mainProductId][childProductId]["option"]["1"]["combo_options"];

            return product0ArrayObj;
        }
        function getProductopt3Obj(findObj, type_of) {
            var product3Obj = {};
            var productListObj = INC.dataStore.dataStoreObj;
            var productColorArrayObj = {}
            var product3ObjArray = [];
            if (Object.prototype.hasOwnProperty.call(findObj, "mainId")) {
                for (var mainProductId in productListObj) {
                    if (mainProductId == findObj["mainId"]) {
                        for (var childProductId in productListObj[mainProductId]) {
                            if (productListObj[mainProductId][childProductId]["option"] != null && productListObj[mainProductId][childProductId]["option"] != undefined && productListObj[mainProductId][childProductId]["option"]["3"] != null && productListObj[mainProductId][childProductId]["option"]["3"] != undefined) {
                                if (type_of != undefined) {
                                    var attr_block = null;
                                    if (type_of.parentNode.parentNode != null) {
                                        if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == falseflag) {
                                            attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                        } else {
                                            attr_block = type_of.parentNode.parentNode.parentNode
                                        }
                                    } else {
                                        attr_block = type_of.parentNode.parentNode
                                    }
                                    if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == trueflag) {
                                        attr_block = type_of.parentNode.parentNode.parentNode
                                    }
                                    if (type_of.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == trueflag) {
                                        attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                    }
                                    var opt_text = attr_block.getAttribute('data-zero');
                                    var opt_size_text = attr_block.getAttribute('data-size');
                                    var opt_color_text = attr_block.getAttribute('data-color');
                                    var opt_third_text = attr_block.getAttribute('data-third');
                                    if (opt_size_text == undefined) {
                                        opt_size_text = ""
                                    }
                                    if (opt_color_text == undefined) {
                                        opt_color_text = ""
                                    }
                                    if (opt_third_text == undefined) {
                                        opt_third_text = ""
                                    }
                                    if (opt_text == null) {
                                        opt_text = ""
                                    }
                                    if (opt_text != "" && opt_size_text != "" && opt_color_text != "") {
                                        if (productListObj[mainProductId][childProductId].option[1] != undefined && productListObj[mainProductId][childProductId].option[2] != undefined && productListObj[mainProductId][childProductId].option[0] != undefined) {
                                            if (productListObj[mainProductId][childProductId].option[1].text == opt_text && productListObj[mainProductId][childProductId].option[2].text == opt_size_text && productListObj[mainProductId][childProductId].option[0].text == opt_color_text) {
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
                                    } else if (opt_text != "" && opt_size_text != "" && opt_third_text != "") {
                                        if (productListObj[mainProductId][childProductId].option[1] != undefined && productListObj[mainProductId][childProductId].option[2] != undefined && productListObj[mainProductId][childProductId].option[3] != undefined) {
                                            if (productListObj[mainProductId][childProductId].option[1].text == opt_text && productListObj[mainProductId][childProductId].option[2].text == opt_size_text) {
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

        function getProductByAtt(findObj) {
            var childProductObj = {};
            var mainProductListObj = ""
            var productListObj = INC.dataStore.dataStoreObj;
            if (findObj.mainId != undefined && productListObj != undefined) {
                mainProductListObj = productListObj[findObj.mainId];
            }
            for (var childProductId in mainProductListObj) {
                if (findObj.zeroText != "" && findObj.sizeText != "" && findObj.colorText != "" && findObj.thirdText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined && mainProductListObj[childProductId]["option"]["2"] != undefined && mainProductListObj[childProductId]["option"]["3"] != undefined) {
                    if (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text && findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text && findObj.sizeText == mainProductListObj[childProductId]["option"]["2"].text && findObj.thirdText == mainProductListObj[childProductId]["option"]["3"].text) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if (findObj.zeroText != "" && findObj.sizeText != "" && findObj.colorText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined && mainProductListObj[childProductId]["option"]["2"] != undefined) {
                    if (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text && findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text && findObj.sizeText == mainProductListObj[childProductId]["option"]["2"].text) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if (findObj.zeroText != "" && findObj.colorText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined) {
                    if (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text && findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if (findObj.zeroText != "" && findObj.sizeText != "" && mainProductListObj[childProductId]["option"]["1"] != undefined && mainProductListObj[childProductId]["option"]["2"] != undefined && findObj.thirdText == "") {
                    if (findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text && findObj.sizeText == mainProductListObj[childProductId]["option"]["2"].text) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if (findObj.zeroText == "" && findObj.sizeText == "" && findObj.thirdText == "" && findObj.colorText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined) {
                    if (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if (findObj.zeroText != "" && findObj.sizeText == "" && findObj.thirdText == "" && findObj.colorText == "" && mainProductListObj[childProductId]["option"]["1"] != undefined) {
                    if (mainProductListObj[childProductId]["option"]["1"].label == "AMOUNT") {
                        if (parseInt(findObj.zeroText.split('£')[1]) == parseInt(mainProductListObj[childProductId]["option"]["1"].activePriceChild)) {
                            childProductObj = mainProductListObj[childProductId];
                            return childProductObj;
                        }
                    }
                    if (findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if ((mainProductListObj[childProductId]["option"] != null && mainProductListObj[childProductId]["option"] != undefined && mainProductListObj[childProductId]["option"]["0"] != null && mainProductListObj[childProductId]["option"]["0"] != undefined && (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text)) || mainProductListObj[childProductId]["option"] != null && mainProductListObj[childProductId]["option"] != undefined && mainProductListObj[childProductId]["option"]["1"] != null && mainProductListObj[childProductId]["option"]["1"] != undefined && (findObj.sizeText == mainProductListObj[childProductId]["option"]["1"].text)) {
                    childProductObj = mainProductListObj[childProductId];
                    return childProductObj;

                } else if (findObj.sizeText !== "" && findObj.zeroText !== "" && mainProductListObj[childProductId]["option"]["1"].text == findObj.zero_text && mainProductListObj[childProductId]["option"]["2"].text == findObj.sizeText && findObj.thirdText == undefined && findObj.colorText == undefined) {
                    childProductObj = mainProductListObj[childProductId];
                    return childProductObj;
                } else if (findObj.thirdText != undefined && mainProductListObj[childProductId]["option"]["3"] !== undefined) {
                    if (findObj.sizeText !== "" && findObj.zeroText !== "" && mainProductListObj[childProductId]["option"]["1"].text == findObj.zero_text && mainProductListObj[childProductId]["option"]["2"].text == findObj.sizeText && findObj.thirdText == mainProductListObj[childProductId]["option"]["3"].text) {
                        childProductObj = mainProductListObj[childProductId];
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
        this.childsku = ((product != null) && (product != undefined)) ? product["ProductSku"] : "";
        this.name = ((product != null) && (product != undefined)) ? product["ProductName"] : "";
        this.url = product["ProductUrl"]
        this.imageURL = product["ImageURL"].replace('pngg','png')
        this.regularPrice = product["Price"];
        if (product["SpecialPrice"] != null && product["SpecialPrice"] != product["Price"]) {
            this.activePrice = product["SpecialPrice"]
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
        this.ratingsCount = ((product != null) && (product != undefined)) ? product["Rating"] : "";
        this.reviewsCount = ((product != null) && (product != undefined)) ? product["RatingCount"] : "";
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
        this.skinType = ((product != null) && (product != undefined)) ? product["Field3"] : "";
        this.underTone = ((product != null) && (product != undefined)) ? product["Field4"] : "";
        this.finish = ((product != null) && (product != undefined)) ? product["Field5"] : "";
        this.coverage = ((product != null) && (product != undefined)) ? product["Field6"] : "";
        this.ProductType = ""
        if(product["ProductType"] != null && product["ProductType"] != undefined){
            this.ProductType = product["ProductType"]
        }
        this.regularPriceMain = product["Price"];
        if (product["SpecialPrice"] != null && product["SpecialPrice"] != product["Price"]) {
            this.activePriceMain = product["SpecialPrice"];
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
            this.activePrice = product["childProductSpecialPrice"];
        }else{
            this.activePrice = product["childProductPrice"];
        }
        if (product["promotionalMessage"] != null) {
            this.PromotionalMessage = product["promotionalMessage"];
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
        this.ratingsCount = ((product != null) && (product != undefined)) ? product["childRating"] : "";
        this.reviewsCount = ((product != null) && (product != undefined)) ? product["childreviewsCount"] : "";
        this.skinType = ((product != null) && (product != undefined)) ? product["childProductField3"] : "";
        this.underTone = ((product != null) && (product != undefined)) ? product["childProductField4"] : "";
        this.finish = ((product != null) && (product != undefined)) ? product["childProductField5"] : "";
        this.coverage = ((product != null) && (product != undefined)) ? product["childProductField6"] : "";
        this.ProductType = ((product != null) && (product != undefined)) ? product["ProductType"] : "";
        this.regularPriceMain = product["childProductPriceMain"];
        this.activePriceMain = product["childProductPriceMain"];
        if (product["childProductSpecialPriceMain"] != null && product["childProductSpecialPriceMain"] != product["childProductPriceMain"]) {
            this.activePriceMain = product["childProductSpecialPriceMain"];
        }
        this.nameMain = ""
        if (product["childProductNameMain"] != null) {
            this.nameMain = product["childProductNameMain"];
        }
        this.imageURLMain = ""
        if (product["childProductImageUrlMain"] != null) {
            this.imageURLMain = product["childProductImageUrlMain"];
        }
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
        let nwConfigObject = new INC.classes.NWConfig(nwConfigObj);
        let xhr = new XMLHttpRequest();
        xhr.open(nwConfigObject.method, nwConfigObject.url, true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status === 200) {
                if (xhr.response != "") {
                    cb(xhr.response);
                    if (INC.config.pageType == "pdp") {
                        let p_ids = INC.methods.getProductIdFromWebPage()
                        INC.methods.irbReq_is_tc(p_ids, 10, "catalog_product_view");
                    }
                } else {
                    if (INC.config.pageType == "productList") {
                        INC.config.modal_called = true
                    }
                }
            }
        }
        xhr.send(JSON.stringify(nwConfigObject.params));
    }

    INC.methods.irbReq = function (productId, bundleCount, elementName) {
        let elmname = elementName || "";
        let productIdReq = productId;
        let apiKey = INC.config.clientToken;
        let bundleReqCount = bundleCount || 5;
        let irbReqParams = ""
        let irbPATH = "//rapidload.increasingly.co/increasingly_bundles?irb/";
        if (INC.config.pageType == "pdp" || INC.config.pageType == "cartPage") {
            irbReqParams =
                "product_ids=" + productIdReq +
                "&category_id=" +
                "&api_key=" + apiKey +
                "&client_id=" +
                "&page_type=" + elmname +
                "&fr=" + "1" +
                "&client_visitor_id=" + INC.config.ivid
                ;
        } else {
            irbReqParams =
                "product_ids=" + productIdReq +
                "&category_id=" +
                "&api_key=" + apiKey +
                "&client_id=" +
                "&page_type=" + elmname +
                "&fr=" + "1" +
                "&client_visitor_id=" + INC.config.ivid +
                "&is_tc=" + "1" +
                "&no_of_bundles=" + bundleReqCount
                ;
        }
        let irbReqURL = decodeURI(irbPATH + btoa(irbReqParams));
        let networkConfigObj = new INC.classes.NWConfig();
        networkConfigObj["url"] = irbReqURL;
        return this.refreshBundles(networkConfigObj);
    }

    INC.methods.refreshBundles = function (nwConfigObj) {
        let incDataStore = INC.dataStore;
        INC.methods.networkReq(nwConfigObj, function (response) {
            if (response.length == 0) return;
            let responseJSON = ""
            if (typeof (response) != "object") {
                responseJSON = JSON.parse(response);
            } else {
                responseJSON = response;
            }
            let bundleResponse = responseJSON;
            if (Object.prototype.hasOwnProperty.call(responseJSON, "Bundles") && (responseJSON.Bundles != null)) {
                INC.config.recommendation = false;
                responseJSON.timeStamp = Date.now();
                INC.dataStore.methods().buildDataStoreObj(bundleResponse);
                if ((incDataStore.dataStoreObj == null) || (incDataStore.dataStoreObj == undefined)) return;
                switch (INC.config.pageType) {
                    case "pdp": INC.methods.createPDPBlock();
                        break;
                    case "cartPage": INC.methods.createAMBlock(); break;
                    case "productList":
                        INC.methods.createSidebarBlock();
                        INC.methods.showSidebar();
                        break;
                }
            } else if (Object.prototype.hasOwnProperty.call(responseJSON, "CategoryRecommendations") && (responseJSON.CategoryRecommendations.length > 0)) {
                responseJSON.timeStamp = Date.now();
                INC.dataStore.methods().buildDataStoreObj(bundleResponse);
                if ((incDataStore.dataStoreObj == null) || (incDataStore.dataStoreObj == undefined)) return;
                INC.config.recommendation = true
                if(INC.config.pageType == "pdp") {
                    INC.methods.createAMBlock("PDP")
                }
            }
        });
    }
    INC.methods.irbReq_is_tc = function (productIds, bundleCount, elementNameel) {
        let elementName = elementNameel || "";
        let productId = productIds;
        let apiKey = INC.config.clientToken;
        let bundleReqCount = bundleCount || 5;
        let irbPATH = "//rapidload.increasingly.co/increasingly_bundles?irb/";
        let irbReqParams =
            "product_ids=" + productId +
            "&category_id=" +
            "&api_key=" + apiKey +
            "&client_id=" +
            "&page_type=" + elementName +
            "&fr=" + "1" +
            "&client_visitor_id=" + INC.config.ivid +
            "&is_tc=" + "1" +
            "&no_of_bundles=" + bundleReqCount;

        let irbReqURL1 = decodeURI(irbPATH + btoa(irbReqParams));
        let networkConfigObj = new INC.classes.NWConfig();
        networkConfigObj["url"] = irbReqURL1;
        let xhr = new XMLHttpRequest();
        xhr.open("GET", networkConfigObj["url"], true);
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
    INC.methods.get_product_ratings = function (filed3, field2, rating_containers) {
        let count = document.createElement('span');
        count.classList.add('rating_count')
        rating_containers.appendChild(count);
        let avg = document.createElement('span');
        avg.classList.add('rating_avg')
        if (field2 == undefined) {
            count.textContent = "(0)";
        } else {
            count.textContent = "(" + field2 + ")";
            
        }
        let stars = document.createElement('span');
        if (filed3 != undefined && filed3 != "") {
            let rating = filed3;
            if (rating == "" || rating == undefined || rating == "NaN" || rating == "norating") {
                rating = 0
            }
            rating = parseFloat(rating).toFixed(1)
            rating = rating.toString();
            let rating_m = null;
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
        let product_id = '';
        let PRODUCT_ID;
        if(document.querySelector('meta[name="productId"]') != null){
            product_id = document.querySelector('meta[name="productId"]').getAttribute('content')
        }else if(typeof(PRODUCT_ID) != "undefined"){
            if(PRODUCT_ID != undefined){
                product_id = PRODUCT_ID.replace('PROD','')
            }
        }
        INC.config.Product_id = product_id
        return product_id;
    }

    INC.methods.detectPageType = function () {
        if (document.querySelector('.page-product') != null || document.querySelector('meta[name="productId"]') != null) {  
            return "pdp";
        }else if (document.querySelector('.products-grid-wrap') != null || document.querySelector('.plp-wrapper') != null) {
            return "productList";
        }else if (document.querySelector('#viewcart') != null || document.querySelector('.viewcart-panel')!=null) {
            return "cartPage";
        }else if (document.querySelector('.sd-product-grid') != null || document.querySelector('.js-grid-item-product.js-grid-item') != null) {
            return "productList";
        }
    }
    INC.methods.showSidebar = function () {
        if (document.querySelector('.inc_sidebar_modal_block') != null) {
            if (document.querySelector('.inc_sidebar_modal_block .inc_product_module_block') != null) {
                if (document.querySelector('.inc_cart_added_product_desc_title_text') != null && document.querySelector('.inc_cart_added_product_desc_title_text').innerText == "undefined") return;
                if (document.querySelector('.sidebar_outer') != null) {
                    let elSidebarOverlay = document.querySelector(".inc_sidebar_overlay_block");
                    if(elSidebarOverlay != null){
                        elSidebarOverlay.style.display = "block";
                    }
                    document.querySelector('.sidebar_outer').style.display = "block"
                    document.querySelector('.inc_sidebar_modal_block').style.display = "block"
                    document.querySelector('.inc_sidebar_modal_block').classList.add('inc_active')
                    document.querySelector('.sidebar_outer').classList.add('sidebar_outer_active')
                }
            }
        }
        if (document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block') != null) {
            document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block').classList.remove('inc_loading');
        }
    }
    INC.methods.hideSidebar = function () {
        INC.config.sidebarremovedprod=[]
        document.querySelector('html').style='';
        document.querySelector('html').classList.remove('inc_overlay')
        document.querySelector('body').classList.remove('inc_popup_open');
        if (document.querySelector('.sidebar_outer') != null) {
            document.querySelector('.inc_sidebar_modal_block').style.display = "none"
            document.querySelector('.sidebar_outer').style.display = "none"
            document.querySelector('.sidebar_outer').classList.remove('sidebar_outer_active')
            document.querySelector('.inc_sidebar_modal_block').classList.remove('inc_active')
        }
        
        setTimeout(function(){
            let allchecked = document.querySelectorAll('.inc_pdp_bundle_product_list_main_block .inc_product_showcase_block .inc_product_desc_add_img.checked')
            for(let alcheckp of allchecked) {
                if(alcheckp != undefined){
                    alcheckp.click()
                }
            }
            INC.config.pdpaddedProductList = Object.keys(INC.dataStore.bundleCartProducts)
            if(window.innerWidth > 767){
                if (document.querySelector('.sidebar_outer') != null) {
                    remsidebarelm()
                }
            }else{
                Array.prototype.forEach.call(document.querySelectorAll(".inc_sidebar_overlay_block"), function (elm) {
                    elm.parentNode.removeChild(elm);
                });
            }
            if(document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block')!=null){
                document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block').classList.remove('is_special_ecirp');
            } 
        },30)
    }
    INC.methods.createAMBlock = function (PDP_type) {
        if (INC.dataStore.dataStoreObj.undefined == undefined) {
            document.querySelector('html').classList.add('inc-prevent-hor-scroll');
            let amBlock = generate_html_tag('div','inc_af_block')
            amBlock.classList.add('af_cart_page')
            amBlock.innerHTML = cart_html
            if (document.querySelector('.o-navigation__bag .a-bag-count') != null) {
                let totalbagcountside = document.querySelector('.o-navigation__bag .a-bag-count').innerText
                if (totalbagcountside == 0) {
                    amBlock.style.display = "none"
                }
            }
            amBlock.querySelector(".inc_af_product-list_block").innerHTML = "";
            let elAmTitleText = amBlock.querySelector(".inc_af_title_text_block")
            if (PDP_type == "PDP" || PDP_type == "productList") {
                elAmTitleText.innerText = "Other customers also viewed";
            }
            let amProductListBlock = amBlock.querySelector(".inc_af_product-list_block");
            let bundleProductsArray = INC.dataStore.bundleProductsArray;
            if (INC.config.pageType == "pdp") {
                if (INC.dataStore.bundleProductsArray.indexOf(INC.config.Product_id) == -1) INC.dataStore.bundleProductsArray.push(INC.config.Product_id)
                INC.config.cartproductids = []
            }
            let duplamid = []
            if (PDP_type == "PDP") {
                bundleProductsArray.forEach(function (mainProductId) {
                    if(duplamid.indexOf(mainProductId) == -1){
                        duplamid.push(mainProductId)
                        amProductListBlock.appendChild(INC.methods.createProductModuleBlock(mainProductId, "am", false, amBlock));
                        elAmTitleText.innerText = "Other customers also viewed";
                    }
                });
            } else {
                bundleProductsArray.forEach(function (mainProductId) {
                    if(duplamid.indexOf(mainProductId) == -1){
                        duplamid.push(mainProductId)
                        if (INC.config.cartproductids.indexOf(mainProductId) == -1) {
                            let firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: mainProductId });
                            let prd_module = INC.methods.createProductModuleBlock(firstProductObjByMainId.id, "am", false, amBlock);
                            if (prd_module.getAttribute('data-id') != "undefined") {
                                amProductListBlock.appendChild(prd_module);
                                elAmTitleText.innerText = INC.config.BeforeYouChecktext ;
                            }
                        }
                    }
                });
            }

            let amProductBlocks = amBlock.querySelectorAll('.inc_product_block');
            Array.prototype.forEach.call(amProductBlocks, function (productBlock) {
                productBlock.querySelector('.inc_product_desc_add_block').addEventListener("click", function () {
                    let productBlockNode = this.parentNode.parentNode;
                    let flag_check = INC.methods.checkVariantSelection(productBlockNode)
                    if (this.parentNode.parentNode.className == "inc_product_desc_block") {
                        productBlockNode = this.parentNode.parentNode.parentNode.parentNode
                    }
                    let checblock = true
                    if(productBlockNode.classList.contains('inc_product_block') == checblock){
                        productBlockNode = productBlockNode.parentNode.parentNode
                    }
                    let sku = productBlockNode.getAttribute('data-sku');
                    let findObj = new INC.classes.FindObj({
                        id: sku
                    });
                    let qty = productBlockNode.querySelector('input').value;
                    let add_btn = productBlockNode.querySelector('.inc_product_add_text')
                    let add_btn_click = productBlockNode.querySelector('.inc_product_add_text');
                    let add_prod_im = productBlockNode.querySelectorAll('.inc_product_desc_add_img');
                    if (flag_check == 1) {
                        if (this.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_showcase_block') == checblock || this.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_modal_block') == checblock) {
                            let popbtn=productBlockNode.querySelector('.inc_product_modal_block .inc_product_desc_add_text')
                            popbtn.innerText = "Adding..."
                            productBlockNode.querySelector('.inc_product_add_text').innerText = "Adding..."
                            INC.methods.addProductToCart(findObj, qty, productBlockNode, add_btn_click, add_prod_im, add_btn,popbtn);
                        }
                    }
                });
            });
            let prod_sl_c = 1
            if (amBlock != null) {
                Array.prototype.forEach.call(document.querySelectorAll('.inc_af_block'), function (el) {
                    el.parentNode.removeChild(el);
                });
            }
            let CartPos= document.querySelector('#main')
            if(document.querySelector('#main') != null){
                CartPos.appendChild(amBlock)
                if(document.querySelector('.T133-wrapper') != null){
                    document.querySelector('.T133-wrapper').style.display = "none"
                }
                if(document.querySelector('.qb-placement-checkout-recs') != null){
                    document.querySelector('.qb-placement-checkout-recs').style.display = "none"
                    document.querySelector('.qb-placement-checkout-recs').parentNode.parentNode.style.display = "none"
                }
            }
            amBlock.querySelector('.inc_af_right_btn_block').style.visibility = "hidden";
            amBlock.querySelector('.inc_af_right_btn_img').style.visibility = "hidden";
            amBlock.querySelector('.inc_af_left_btn_block').style.visibility = "hidden";
            amBlock.querySelector('.inc_af_left_btn_img').style.visibility = "hidden";
            let productBlocks = amProductListBlock.querySelectorAll('.inc_product_module_block');
            let sliderBtnCounter = 0;
            if (productBlocks.length > prod_sl_c) {
                amBlock.querySelector('.inc_af_right_btn_block').style.visibility = "visible";
                amBlock.querySelector('.inc_af_left_btn_block').style.visibility = "visible";
                amBlock.querySelector('.inc_af_left_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                amBlock.querySelector('.inc_af_right_btn_img').style.visibility = "visible";
                amBlock.querySelector('.inc_af_left_btn_img').style.visibility = "visible";
                amBlock.querySelector('.inc_af_left_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
            }
            let cc_ount = 1;
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
                let all_p_length = document.querySelectorAll('.inc_af_product-list_block .inc_product_module_block').length
                let cc_ounts = 1;
                if (window.innerWidth > 768) {
                    cc_ounts = 4
                }
                let width_slide = ""
                if (INC.config.pageType == "pdp" || INC.config.pageType == "productList") {
                    width_slide = 265;
                } else {
                    width_slide = 263
                }
                if (+INC.clientConfig.slidevalue + +cc_ounts < all_p_length) {
                    amBlock.parentNode.parentNode.querySelector('.inc_af_left_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                    amBlock.parentNode.parentNode.querySelector('.inc_af_left_btn_img').setAttribute("style", "pointer-events: auto;opacity:1");
                    INC.clientConfig.slidevalue++
                    INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) - width_slide) + 'px';
                    let menu = amBlock.parentNode.parentNode.querySelector('.inc_af_product-list_block');
                    menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                    if (document.querySelector('.inc_af_product-list-dots-main_block .inc_dots.inc_active') != null) {
                        document.querySelector('.inc_af_product-list-dots-main_block .inc_dots.inc_active').classList.remove('inc_active')
                    }
                    if (document.querySelectorAll('.inc_af_product-list-dots-main_block .inc_dots')[+INC.clientConfig.slidevalue] != null) document.querySelectorAll('.inc_af_product-list-dots-main_block .inc_dots')[+INC.clientConfig.slidevalue].classList.add('inc_active')
                }

                if (+INC.clientConfig.slidevalue + +cc_ounts == all_p_length) {
                    amBlock.parentNode.parentNode.querySelector('.inc_af_right_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                    amBlock.parentNode.parentNode.querySelector('.inc_af_right_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
                }
            });

            amBlock.querySelector('.inc_af_left_btn_block').addEventListener("click", function () {
                sliderBtnCounter--;
                if (sliderBtnCounter == -1) sliderBtnCounter = 0;
                if (INC.clientConfig.slidevalue == -1) INC.clientConfig.slidevalue = 0;
                let width_slide = ""
                if (INC.config.pageType == "pdp" || INC.config.pageType == "productList") {
                    width_slide = 265;
                } else {
                    width_slide = 263
                }
                if (INC.clientConfig.slidevalue > 0) {
                    amBlock.parentNode.parentNode.querySelector('.inc_af_right_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                    amBlock.parentNode.parentNode.querySelector('.inc_af_right_btn_img').setAttribute("style", "pointer-events: auto;opacity:1");
                    INC.clientConfig.slidevalue--
                    INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) + width_slide) + 'px';
                    let menu = amBlock.parentNode.parentNode.querySelector('.inc_af_product-list_block');
                    menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                    if (document.querySelector('.inc_af_product-list-dots-main_block .inc_dots.inc_active') != null) {
                        document.querySelector('.inc_af_product-list-dots-main_block .inc_dots.inc_active').classList.remove('inc_active')
                    }
                    if (document.querySelectorAll('.inc_af_product-list-dots-main_block .inc_dots')[+INC.clientConfig.slidevalue] != null) document.querySelectorAll('.inc_af_product-list-dots-main_block .inc_dots')[+INC.clientConfig.slidevalue].classList.add('inc_active')
                }
                if (INC.clientConfig.slidevalue == 0) {
                    amBlock.parentNode.parentNode.querySelector('.inc_af_left_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                    amBlock.parentNode.parentNode.querySelector('.inc_af_left_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
                }
            });
            setTimeout(function(){
                let all_list_el = document.querySelectorAll('.inc_af_product-list_block .inc_product_showcase_block')
                for(let all_list of all_list_el) {
                    if(all_list.querySelector('.inc_product_desc_att_zero_block.inc_active') != null){
                        let prd_moduleb = all_list.parentNode
                        let main_idsd = prd_moduleb.getAttribute('data-main_id')
                        if(prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="'+main_idsd+'"]') != null){
                            if(prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="'+main_idsd+'"] .inc_product_desc_att_size_list_item_img_block') != null){
                                prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="'+main_idsd+'"] .inc_product_desc_att_size_list_item_img_block').click()
                            }else if(all_list.querySelector('.inc_product_desc_att_size_list_item_img_block') != null){
                                all_list.querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                            }
                        } else if(all_list.querySelector('.inc_product_desc_att_size_list_item_img_block') != null){
                            all_list.querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                        }
                    }
                }
                onloadpdp = true
            },400)
            setTimeout(function(){
                let inc_prod_img =  document.querySelectorAll('.inc_product_img_main_img img')
                for(let i_prd_image of inc_prod_img) {
                    if(i_prd_image){
                        i_prd_image.setAttribute('style','left:0 !important;position: relative;')
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
    INC.methods.createPDPBlock = function (sidebar) {
        document.querySelector('body').classList.add('inc_bundles');
        document.querySelector('html').classList.add('inc-prevent-hor-scroll');
        let empty_sidebarflag = false
        if (INC.dataStore.dataStoreObj[INC.config.Product_id] != undefined) {
            if (INC.dataStore.dataStoreObj[INC.config.Product_id][INC.config.Product_id] != undefined) {
                if (INC.dataStore.dataStoreObj[INC.config.Product_id][INC.config.Product_id].bundleId == "12345679") {
                    empty_sidebarflag = true
                }
            }
        }
        let tr_ch = false;
        if (sidebar != "sidebar") {
            if (INC.dataStore.dataStoreObj.undefined != undefined || empty_sidebarflag == tr_ch) {
                let pdpBlock = generate_html_tag('div','inc_pdp_block')
                pdpBlock.innerHTML = pdp_html
                pdpBlock.setAttribute('style', 'clear: both;')
                let modalTitle = pdpBlock.querySelector('.inc_pdp_title_text');
                modalTitle.innerText = INC.config.FBTTitle
                if(document.querySelector('.js-right-column-section .elc-service-view-renderer[data-rendered-view="product-notify-me"] .elc-product-notify-me-button') != null){
                    pdpBlock.style.display = "none"
                }
                let elPdpMainProductBlock = pdpBlock.querySelector('.inc_pdp_product-main_block');
                let pdpProductId = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: INC.dataStore.pdpProductId }).id;
                let firstProductObjByMainId = ''
                let pdpBundleProductListMainBlock = null;
                let bundarray = INC.dataStore.bundleProductsArray;
                if (INC.config.db_products === 0) {
                    INC.config.db_products = bundarray.length
                }
                if(window.innerWidth > 820){
                    let mainProductBlock = this.createProductModuleBlock(pdpProductId, "pdp", false, pdpBlock,"mainprod");
                    let bundleProductsArray = INC.dataStore.bundleProductsArray;
                    elPdpMainProductBlock = pdpBlock.querySelector('.inc_pdp_product-main_block');
                    let mainprodtitletexts = elPdpMainProductBlock.querySelector('.mainprodtitletext');
                    if(mainprodtitletexts != undefined){
                        mainprodtitletexts.innerText = "This item"
                    }
                    elPdpMainProductBlock.appendChild(mainProductBlock);
                    pdpBundleProductListMainBlock = pdpBlock.querySelector('.inc_pdp_bundle_product_list_main_block');
                    pdpBundleProductListMainBlock.innerHTML = "";
                    let pdpBundleProductListItemsBlock = pdpBlock.querySelector('.inc_pdp_bundle_product_list_items_block');
                    pdpBundleProductListItemsBlock.innerHTML = "";
                    let productVisibleCount = (bundleProductsArray.length > 5) ? 5 : bundleProductsArray.length;
                    if (INC.config.deviceType == "mobile") productVisibleCount = (bundleProductsArray.length > 2) ? 2 : bundleProductsArray.length;
                    for(let i = 0; i < productVisibleCount; i++) {
                        firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: bundleProductsArray[i] });
                        let productBlock = this.createProductModuleBlock(firstProductObjByMainId.id, "pdp", true, pdpBlock);
                        pdpBundleProductListMainBlock.appendChild(productBlock);
                        let productListItemBlock = this.createProductListItemBlock(firstProductObjByMainId, "pdp");
                        pdpBundleProductListItemsBlock.appendChild(productListItemBlock);
                    }
                }else{
                    let pdpbl = pdpBlock.querySelector('.inc_pdp_bundle_block')
                    if(pdpbl != null){
                        pdpbl.parentNode.removeChild(pdpbl)
                    }
                    for(let bundid of INC.config.bundledid) {
                        let bundleblockmain=generate_html_tag('div','inc_pdp_bundle_block')
                        let htmlbundle = '<div class="inc_pdp_product-main_bundle_block"><div class="inc_pdp_product-main_block"></div><div class="inc_pdp_icon-add_block"><div class="inc_pdp_icon-add_img_block"><div class="inc_pdp_icon-add_img"></div></div></div><div class="inc_pdp_bundle_product_block"><div class="inc_pdp_bundle_product_list_block"><div class="inc_pdp_bundle_product_list_main_block"></div></div></div></div>'  
                        bundleblockmain.innerHTML = htmlbundle
                        elPdpMainProductBlock = bundleblockmain.querySelector('.inc_pdp_product-main_block')
                        pdpBundleProductListMainBlock = bundleblockmain.querySelector(".inc_pdp_bundle_product_list_main_block");
                        pdpBlock.appendChild(bundleblockmain)
                        let cartbundleblock = generate_html_tag('div','inc_pdp_bundle_cart_block')
                        let cartblock = '<div class="inc_pdp_bundle_cart_block"><div class="inc_pdp_bundle_cart_summary_block"><div class="inc_pdp_bundle_cart_summary_title_block"><div class="inc_pdp_bundle_cart_summary_title_text_block"><div class="inc_pdp_bundle_cart_summary_title_text"></div></div></div><div class="inc_pdp_bundle_cart_summary_ecirp_block"><div class="inc_pdp_bundle_cart_summary_ecirp_active_block"><div class="inc_pdp_bundle_cart_summary_ecirp_active_text_block"><div class="inc_pdp_bundle_cart_summary_ecirp_active_text">£0.00</div></div></div><div class="inc_pdp_bundle_cart_summary_ecirp_regular_block"><div class="inc_pdp_bundle_cart_summary_ecirp_save_block"><div class="inc_pdp_bundle_cart_summary_ecirp_save_text"></div></div><div class="inc_pdp_bundle_cart_summary_ecirp_regular_text_block"><div class="inc_pdp_bundle_cart_summary_ecirp_regular_text"></div></div></div></div><div class="inc_pdp_bundle_cart_summary_add_block"><div class="inc_pdp_bundle_cart_summary_add_btn_block"><div class="inc_pdp_bundle_cart_summary_add_btn_text_block"><div class="inc_pdp_bundle_cart_summary_add_btn_text">Add To Bag</div></div><div class="inc_pdp_bundle_cart_summary_add_btn_img_block"><div class="inc_pdp_bundle_cart_summary_add_btn_img"></div></div></div><div class="inc_pdp_bundle_cart_summary_error_block"></div></div></div></div>'
                        cartbundleblock.innerHTML = cartblock;
                        bundleblockmain.appendChild(cartbundleblock)
                        bundleblockmain.setAttribute('bundle_id',bundid.bundleids)
                        for(let p=0;p<bundid.productids.length;p++){
                            if(p == 0){
                                let mainProductBlocka = this.createProductModuleBlock(pdpProductId, "pdp", false, pdpBlock,"mainprod");
                                elPdpMainProductBlock.innerHTML = "";
                                let mainprodtitletext = document.createElement('div')
                                mainprodtitletext.classList.add('mainprodtitletext')
                                mainprodtitletext.innerText = "This Item:"
                                elPdpMainProductBlock.appendChild(mainprodtitletext)
                                elPdpMainProductBlock.appendChild(mainProductBlocka);
                            }else{
                                firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: bundid.productids[p] });
                                let productBlocka = this.createProductModuleBlock(firstProductObjByMainId.id, "pdp", true, pdpBlock);
                                pdpBundleProductListMainBlock.appendChild(productBlocka);
                            }
                        }
                        bundleblockmain.querySelector('.inc_pdp_bundle_cart_summary_add_block').addEventListener('click',function(e){
                            let bundleb=this.parentNode.parentNode.parentNode.parentNode
                            let bl=true
                            if (INC.config.disablebtn == bl) {
                                let btn_cart = e.target
                                INC.config.disablebtn = false
                                btn_cart.classList.add('inc_loading')
                                let mainProductId = bundleb.querySelector('.inc_pdp_product-main_block .inc_product_module_block').getAttribute('data-main_id');
                                let total_length = 2;
                                let formData = []
                                let count_pr_to_add = 0
                                INC.dataStore['bundleCartProducts'] = {};
                                let el_prod_modules=bundleb.querySelectorAll('.inc_product_module_block')
                                for(let a=0;a<el_prod_modules.length;a++){
                                    let prodid=el_prod_modules[a].getAttribute('data-id')
                                    let findObj = new INC.classes.FindObj({ id: prodid });
                                    let productObj = INC.dataStore.methods().getProductById(findObj);
                                    INC.config.pdpaddedProductList.push(productObj.mainId)
                                    INC.config.bundle_tracking.push({
                                        id: productObj.mainId,
                                        bid: productObj.bundleId,
                                    });
                                    let args = {}
                                    if(a == 0){
                                        let qtysel = e.currentTarget.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block').getAttribute('qty')
                                        args.qty = qtysel
                                        INC.dataStore["bundleCartProducts"][prodid] = qtysel;
                                    }else{
                                        let qtysel1 = e.currentTarget.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block').getAttribute('qty1')
                                        args.qty = qtysel1
                                        INC.dataStore["bundleCartProducts"][prodid] = qtysel1
                                    }
                                    args.skuBaseId = productObj.childsku
                                    let catBaseId = ""
                                    let params = {
                                        skus: [productObj.childsku],
                                        itemType: 'cart',
                                        INCREMENT: 1,
                                        CAT_BASE_ID: catBaseId,
                                        QTY: args.qty || 1,
                                    };
                                    formData.push(params)
                                    count_pr_to_add++
                                    if (total_length == count_pr_to_add) {
                                        ajax_add_to_cart(formData, btn_cart)
                                    }
                                }
                                add_to_cart_tracking_multiple(mainProductId)
                            }
                        })
                        INC.methods.updateallbasketprice(bundleblockmain)
                    }
                    if(INC.config.bundledid.length > 2){
                        let bundlecount = "incbundle"+INC.config.bundledid.length
                        pdpBlock.classList.add(bundlecount)
                        let inc_view_more_product_block = generate_html_tag('div','inc_view_more_product_block')
                        let inc_view_more_product_text = generate_html_tag('div','inc_view_more_product_text')
                        inc_view_more_product_text.innerText = "Show More Bundles"
                        inc_view_more_product_block.appendChild(inc_view_more_product_text)
                        inc_view_more_product_block.addEventListener('click',function(){
                            let b=true
                            if(pdpBlock.classList.contains('inc_more_bundle_active') == b){
                                pdpBlock.classList.remove('inc_more_bundle_active')
                                inc_view_more_product_text.innerText = "Show More Bundles"
                                let elmnt = document.querySelector('.inc_pdp_block')
                                elmnt.scrollIntoView(b)
                            }else{
                                pdpBlock.classList.add('inc_more_bundle_active')
                                inc_view_more_product_text.innerText = "Show Less Bundles"
                            }
                        })
                        pdpBlock.appendChild(inc_view_more_product_block)
                    }
                }
                let header = pdpBlock.querySelector('.inc_pdp_bundle_product_header_text');
                if (header != null) {
                    header.innerText = "Frequently Bought with"
                    header.style.textTransform = "none"
                }
                if(window.innerWidth > 820){
                    pdpBlock.querySelector('.inc_pdp_bundle_product_list_items_block').classList.add("inc_active");
                    let pdpBundleCartBlock = this.createPDPBundleCartBlock(pdpBlock);
                    let rpdpBundleCartBlock = pdpBlock.querySelector('.inc_pdp_bundle_cart_block')
                    rpdpBundleCartBlock.parentNode.removeChild(rpdpBundleCartBlock);
                    pdpBlock.querySelector('.inc_pdp_bundle_block').appendChild(pdpBundleCartBlock);
                }
                INC.methods.clear();
                let nextpdpsibling=null;
                let mobileplacement = document.querySelector('.js-right-column-section .elc-product-overview') || document.querySelector('.js-right-column-section .js-product-overview');
                let recsibling = document.querySelector('.qubit-recs-container');
                let pdpsibling1 = document.querySelector('.spp-product-layout__content');
                let pdpBlockeinstienSibling = document.querySelector('.sd-product-spp__product-full');
                let pdpsibling2 = document.querySelector('.sd-product-spp.spp__container');
                let pdpsibling3 = document.querySelector('.product-full__cross-sell');
                let deployTemp = ""
                if(window.innerWidth < 821 && document.querySelector('.device-mobile') != null){
                    if(window.innerWidth > 800){
                        deployTemp="mob"
                    }else{
                        if(mobileplacement != null){
                            mobileplacement.insertBefore(pdpBlock, mobileplacement.childNodes[0]);
                        }else{
                            pdpsibling1 = document.querySelector('.spp-product-layout__content');
                            pdpBlockeinstienSibling = document.querySelector('.sd-product-spp__product-full');
                            if (pdpBlockeinstienSibling != null || pdpBlockeinstienSibling != undefined) {
                                nextpdpsibling=pdpBlockeinstienSibling.nextElementSibling
                                nextpdpsibling.parentNode.insertBefore(pdpBlock, nextpdpsibling);
                            }else if(pdpsibling1 != null){
                                pdpsibling1.parentNode.insertBefore(pdpBlock, pdpsibling1);
                            }
                        }
                    }
                }else{
                    deployTemp="dekst"
                }
                if(deployTemp == "mob" || deployTemp == "dekst"){
                    if (pdpBlockeinstienSibling != null || pdpBlockeinstienSibling != undefined) {
                        nextpdpsibling=pdpBlockeinstienSibling.nextElementSibling
                        nextpdpsibling.parentNode.insertBefore(pdpBlock, nextpdpsibling);
                    }else if(recsibling != null){
                        recsibling.parentNode.insertBefore(pdpBlock, recsibling);
                    }else if(pdpsibling1 != null){
                        pdpsibling1.parentNode.insertBefore(pdpBlock, pdpsibling1);
                    }else if(pdpsibling2 != null){
                        pdpsibling2.insertBefore(pdpBlock, pdpsibling2.childNodes[1]);
                    }else if(pdpsibling3 != null){
                        pdpsibling3.parentNode.insertBefore(pdpBlock, pdpsibling3);
                    }
                }
                
                let elProductAddBlock = pdpBlock.querySelectorAll('.inc_product_desc_add_block')
                let productBlocks = pdpBlock.querySelector('.inc_pdp_bundle_product_list_block').querySelectorAll('.inc_product_module_block');
                if (document.querySelector('.inc_pdp_product-main_block .inc_product_desc_title_text_header') != null) {
                    document.querySelector('.inc_pdp_product-main_block .inc_product_desc_title_text_header').innerHTML = "Selected Product"
                    document.querySelector('.inc_pdp_product-main_block .inc_product_desc_title_text_header').style.textTransform = "none"
                }
                if(window.innerWidth > 820){
                    pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                    pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute("style", "opacity:0.5");
                    pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('title', 'Scroll left')
                    pdpBlock.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('title', 'Scroll right')
                    let sliderBtnCounter = 0;
                    let lengthCount = productBlocks.length + 1;
                    let prd_length = 1
                    if (window.innerWidth > 1185) {
                        prd_length = 2
                    }
                    if (productBlocks.length > prd_length) {
                        pdpBlock.querySelector('.inc_pdp_bundle_product_right-btn_block').addEventListener("click", function () {
                            let prod_c = 1;
                            let width_prod = 256;
                            if(window.innerWidth >= 840 && window.innerWidth < 1190){
                                width_prod = 266;
                                if(window.innerWidth > 1139){
                                    width_prod = 276;
                                }
                            }else if(window.innerWidth > 1189){
                                prod_c = 2
                                if(window.innerWidth > 1368){
                                    width_prod = 306;
                                } else{
                                    width_prod = 276;
                                }
                            }
                            
                            if (INC.clientConfig.slidevalue + prod_c < productBlocks.length) {
                                pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                                pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute("style", "opacity:1");
                                INC.clientConfig.slidevalue++
                                INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) - width_prod) + 'px';
                                let menu = pdpBlock.querySelector('.inc_pdp_bundle_product_list_main_block');
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
                            let width_prod = 256;
                            if(window.innerWidth >= 840 && window.innerWidth < 1190){
                                width_prod = 266;
                                if(window.innerWidth > 1139){
                                    width_prod = 276;
                                }
                            }else if(window.innerWidth > 1189){
                                if(window.innerWidth > 1368){
                                    width_prod = 306;
                                } else{
                                    width_prod = 276;
                                }
                            }
                            if (INC.clientConfig.slidevalue == -1) INC.clientConfig.slidevalue = 0;
                            if (INC.clientConfig.slidevalue > 0) {
                                pdpBlock.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                                pdpBlock.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute("style", "opacity:1");
                                INC.clientConfig.slidevalue--
                                INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) + width_prod) + 'px';
                                let menu = pdpBlock.querySelector('.inc_pdp_bundle_product_list_main_block');
                                menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
                            }
                            if (INC.clientConfig.slidevalue == 0) {
                                pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                                pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute("style", "opacity:0.5");
                            }
                            sliderBtnCounter--;
                            if (sliderBtnCounter == -1) sliderBtnCounter = 0;
                        });
                    }
                    if ((productBlocks.length <= prd_length)) {
                        pdpBlock.querySelector('.inc_pdp_bundle_product_right-btn_block').style.visibility = "hidden";
                        pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_block').style.visibility = "hidden";
                    }
                }
                setTimeout(function () {
                    for(let n = 0; n < 8; n++) {
                        if (typeof (elProductAddBlock[n]) != "undefined" && n % 2 != 0) {
                            if (window.innerWidth > 820) {
                                if (n == 1) {
                                    elProductAddBlock[n].click();
                                }
                            }
                        }
                    }
                }, 100)
                setTimeout(function(){
                    let client_var = ""
                    if(window.innerWidth < 821){
                        if(document.querySelector('.js-size-picker-label p') != null){
                            client_var = document.querySelector('.js-size-picker-label p').innerText.trim().toLocaleLowerCase()
                        }else if(document.querySelector('.js-size-picker-dropdown input[data-test-id="product_size_dropdown"]') != null){
                            client_var = document.querySelector('.js-size-picker-dropdown input[data-test-id="product_size_dropdown"]').value
                        }
                        let elshowcase = document.querySelectorAll('.inc_pdp_product-main_block .inc_product_showcase_block')
                        for(let shel of elshowcase) {
                            if(shel.querySelector('.inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block[datasize="'+client_var+'"]') != undefined){
                                shel.querySelector('.inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block[datasize="'+client_var+'"]').click()
                            }else if(shel.querySelector('.inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block') != undefined){
                                shel.querySelector('.inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block').click()
                            }
                        }
                    }else{
                        if(document.querySelector('.js-size-picker-label p') != null){
                            client_var = document.querySelector('.js-size-picker-label p').innerText.trim().toLocaleLowerCase()
                        }else if(document.querySelector('.js-size-picker-dropdown input[data-test-id="product_size_dropdown"]') != null){
                            client_var = document.querySelector('.js-size-picker-dropdown input[data-test-id="product_size_dropdown"]').value
                        }
                        if(document.querySelector('.inc_pdp_product-main_block .inc_product_showcase_block .inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block[datasize="'+client_var+'"]') != undefined){
                            document.querySelector('.inc_pdp_product-main_block .inc_product_showcase_block .inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block[datasize="'+client_var+'"]').click()
                        }else if(document.querySelector('.inc_pdp_product-main_block .inc_product_showcase_block .inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block') != undefined){
                            document.querySelector('.inc_pdp_product-main_block .inc_product_showcase_block .inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block').click()
                        }
                    }
                    let client_varc = ""
                    if(document.querySelector('.js-product-shades-view-button') != null){
                        client_varc = document.querySelector('.js-product-shades-view-button').innerText.trim().toLocaleLowerCase()
                    }
                    let el_all_list_main1 = document.querySelectorAll('.inc_pdp_product-main_block .inc_product_showcase_block')
                    for(let main_list of el_all_list_main1) {
                        if(main_list.querySelector('.inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[datacolor="'+client_varc+'"] div') != null){
                            main_list.querySelector('.inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[datacolor="'+client_varc+'"] div').click()
                        }
                    }
                    let all_list_el = document.querySelectorAll('.inc_pdp_bundle_product_list_block .inc_product_showcase_block');
                    for(let ell of all_list_el) {
                        if(ell.querySelector('.inc_product_desc_att_zero_block.inc_active') != null){
                            let clrtext = ""
                            if(document.querySelector('.js-size-picker-label p') != null){
                                clrtext = document.querySelector('.js-size-picker-label p').innerText.trim().toLocaleLowerCase()
                            }
                            let prd_moduleb = ell.parentNode
                            let main_idsd = prd_moduleb.getAttribute('data-main_id')
                            if(prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="'+main_idsd+'"]') != null){
                                if(prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="'+main_idsd+'"] .inc_product_desc_att_size_list_item_img_block') != null){
                                    prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="'+main_idsd+'"] .inc_product_desc_att_size_list_item_img_block').click()
                                }else if(ell.querySelector('.inc_product_desc_att_size_list_item_img_block[datasize="'+clrtext+'"] div') != undefined){
                                    ell.querySelector('.inc_product_desc_att_size_list_item_img_block[datasize="'+clrtext+'"] div').click()
                                }else if(ell.querySelector('.inc_product_desc_att_size_list_item_img_block') != null){
                                    ell.querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                                }
                            } else if(ell.querySelector('.inc_product_desc_att_size_list_item_img_block[datasize="'+clrtext+'"] div') != undefined){
                                ell.querySelector('.inc_product_desc_att_size_list_item_img_block[datasize="'+clrtext+'"] div').click()
                            }else if(ell.querySelector('.inc_product_desc_att_size_list_item_img_block') != null){
                                ell.querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                            }
                        }
                    }
                },200)
                setTimeout(function(){
                    onloadpdp = true
                    onloadpdp_delete = true
                    let eltotalbundle = document.querySelectorAll('.inc_pdp_bundle_block')
                    for(let tobundle of eltotalbundle) {
                        INC.methods.updateallbasketprice(tobundle)
                    }
                    let inc_prod_img =  document.querySelectorAll('.inc_product_img_main_img img')
                    for(let pr_img of inc_prod_img) {
                        if(pr_img){
                            pr_img.setAttribute('style','left:0 !important;position: relative;')
                        }
                    }
                },2000)
            }
        }
        if (sidebar == "sidebar") {
            this.createSidebarBlock();
        }
    }
    INC.methods.createPDPBundleCartBlock = function (pdpBlock) {
        let pdpBundleCartBlock = pdpBlock.querySelector('.inc_pdp_bundle_cart_block')
        let elBundleCartTitleText = pdpBlock.querySelector('.inc_pdp_bundle_cart_title_text')
        let elBundleCartAddedBlock = pdpBlock.querySelector('.inc_pdp_bundle_cart_added_block')
        let elBundleCartSummaryViewBtnText = pdpBlock.querySelector('.inc_pdp_bundle_cart_summary_view_btn_text');
        let elBundleCartAddBtnBlock = pdpBlock.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block');
        if (window.innerWidth > 820) {
            elBundleCartTitleText.innerText = "Price Summary";
            elBundleCartAddedBlock.innerHTML = "";
            elBundleCartSummaryViewBtnText.innerText = "Added items";
        }
        if(elBundleCartAddBtnBlock != null){
            elBundleCartAddBtnBlock.addEventListener("click", function (e) {
                checkAddedProductInJustAdded()
                this.classList.add('inc_loading');
                INC.clientConfig.offset = 0;
                INC.clientConfig.slidevalue = 0;
                let prd_length = 2
                if (window.innerWidth > 1185) {
                    prd_length = 3
                }
                document.querySelector('.inc_pdp_bundle_product_list_main_block').setAttribute('style', 'margin-left: 0')
                if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block').length > prd_length) {
                    document.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute('style', 'pointer-events: none;opacity:0.5')
                    document.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('style', 'opacity:0.5')
                    document.querySelector('.inc_pdp_bundle_product_right-btn_block').setAttribute('style', 'pointer-events: auto;opacity:1')
                    document.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('style', 'opacity:1')
                }
                let tf=true
                if (INC.config.disablebtn == tf) {
                    let btn_cart = e.target
                    INC.config.disablebtn = false
                    btn_cart.classList.add('inc_loading')
                    INC.methods.addBundleToCart(btn_cart);
                }
            });
        }
        return pdpBundleCartBlock;
    }
    function remsidebarelm(){
        if (document.querySelector('.sidebar_outer') != null) {
            Array.prototype.forEach.call(document.querySelectorAll('.sidebar_outer'), function (el) {
                el.parentNode.removeChild(el);
            });

            Array.prototype.forEach.call(document.querySelectorAll(".sidebar_outer"), function (el) {
                el.parentNode.removeChild(el);
            });
        }
        if (document.querySelector('.inc_sidebar_modal_block') != null) {
            Array.prototype.forEach.call(document.querySelectorAll('.inc_sidebar_modal_block'), function (el) {
                el.parentNode.removeChild(el);
            });

            Array.prototype.forEach.call(document.querySelectorAll(".inc_sidebar_overlay_block"), function (el) {
                el.parentNode.removeChild(el);
            });
        }
    }
    INC.methods.createSidebarBlock = function () {
        remsidebarelm()
        let dataStore = INC.dataStore;
        let sidebar_dialoge_block = document.createElement('div')
        sidebar_dialoge_block.classList.add('sidebar_outer')
        sidebar_dialoge_block.innerHTML = sidebar_html
        let sbBlock = sidebar_dialoge_block.querySelector('.inc_sidebar_modal_block');
        
        sbBlock.querySelector(".inc_cart_added_list_block").innerHTML = "";
        
        let elHeaderContinueText = sbBlock.querySelector(".inc_header_continue_text");
        let elHeaderTitleText = sbBlock.querySelector(".inc_header_title_text");
        let elHeaderItemCountTitleText = sbBlock.querySelector(".inc_header_item_count_title_text");
        let elRecommendedTitleText = sbBlock.querySelector(".inc_recommended_title_text");
        let elRecommendedTabsListBlock = sbBlock.querySelector(".inc_recommended_tabs_list_block")
        let elRecommendedProductsListBlock = sbBlock.querySelector(".inc_recommended_products_list_block");
        let elCheckoutContinueBtnText = sbBlock.querySelector(".inc_checkout_continue_btn_text");
        let elCheckoutBasketBtnText = sbBlock.querySelector(".inc_checkout_basket_btn_text");
        let elheaditemblock = sbBlock.querySelector(".inc_header_item_block");
        let elheadtitleblock = sbBlock.querySelector(".inc_header_title_block");
        elheaditemblock.addEventListener('click', function () {
            let cnt = document.querySelector('.inc_header_item_count_title_text').getAttribute('added_counts')
            let bt=true
            if (cnt >= 1) {
                if (document.querySelector('.inc_sidebar_cart_added_block').classList.contains('inc_active') == bt) {
                    document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_active')
                    let alladdedprodlength = document.querySelectorAll('.inc_cart_added_product_block').length;
                    let morecount = 2
                    if (window.innerWidth < 821) {
                        morecount = 1
                    }
                    if (alladdedprodlength > morecount) {
                        let tcount = alladdedprodlength - morecount + " more item(s)"
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
        let close_sisebar_icon = generate_html_tag('span', 'close_sisebar_icon')
        elheadtitleblock.appendChild(close_sisebar_icon)
        elRecommendedProductsListBlock.setAttribute('role', "contentinfo")
        elRecommendedProductsListBlock.setAttribute('tabindex', 0)
        elHeaderContinueText.innerText = "Back";
        elHeaderTitleText.innerText = "Just Added To Your Bag";
        elHeaderTitleText.style.textTransform = "none"
        if(dataStore.bundleCartProducts != undefined){
            elHeaderItemCountTitleText.innerText = "Subtotal" + " " + "(" + Object.keys(dataStore.bundleCartProducts).length + " items)";
            elRecommendedTitleText.innerText = INC.config.BeforeYouChecktext 
            elRecommendedTitleText.style.textTransform = "none"
            elCheckoutContinueBtnText.innerText = "Continue Shopping";
            let elCheckoutLink = elCheckoutBasketBtnText.querySelector('.view_basket_checkout')
            elCheckoutLink.setAttribute('href', INC.clientConfig.checkoutLink);
            let productCategoriesArray = dataStore.methods().getUniqueCatergories();
            elRecommendedTabsListBlock.innerHTML = "";
            elRecommendedProductsListBlock.innerHTML = "";
            let category_count = 0
            elRecommendedTabsListBlock.classList.add('inc_categ_' + Object.keys(productCategoriesArray).length)
            productCategoriesArray.forEach(function (productCategory) {
                if (category_count < 5 && productCategory != undefined) {
                    category_count++
                    let sidebarTabsListItemBlock = generate_html_tag('div','inc_recommended_tabs_list_item_block')
                    let tablistitm = '<div class="inc_recommended_tabs_list_item_text_block"><div class="inc_recommended_tabs_list_item_text"></div></div>'
                    sidebarTabsListItemBlock.innerHTML = tablistitm
                    let sidebarTabsListItemText = sidebarTabsListItemBlock.querySelector('.inc_recommended_tabs_list_item_text');
                    sidebarTabsListItemText.parentNode.parentNode.setAttribute('title', productCategory)
                    sidebarTabsListItemText.innerText = productCategory.toLocaleLowerCase();
                    sidebarTabsListItemText.setAttribute('style', 'text-transform:capitalize;')
                    sidebarTabsListItemBlock.addEventListener("click", function () {
                        let elrecprdlistblk = sbBlock.querySelector(".inc_recommended_products_list_block")
                        if(elrecprdlistblk != null){
                            elrecprdlistblk.innerHTML = "";
                        }
                        Array.prototype.forEach.call(elRecommendedTabsListBlock.querySelectorAll('.inc_recommended_tabs_list_item_block'), function (elTabsItemBlock) {
                            elTabsItemBlock.classList.remove("inc_active");
                        });
                        sidebarTabsListItemBlock.classList.add("inc_active");
                        INC.methods.updateSidebarProductsList(elrecprdlistblk, productCategory);
                    });
                    elRecommendedTabsListBlock.setAttribute('tabindex', 0)
                    elRecommendedTabsListBlock.appendChild(sidebarTabsListItemBlock);
                }
            });
            if (elRecommendedTabsListBlock.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                elRecommendedTabsListBlock.querySelector('.inc_recommended_tabs_list_item_block').click();
            } else {
                elRecommendedTitleText.style.display = "none";
            }
            let sbcontinue=sbBlock.querySelector(".inc_header_continue_block")
            sbcontinue.addEventListener("click", function () {
                closesidebar()
            });
            sbBlock.querySelector(".inc_checkout_continue_block").addEventListener("click", function () {
                closesidebar()
            });
            close_sisebar_icon.addEventListener("click", function () {
                closesidebar()
            });
            sbBlock.querySelector(".inc_checkout_basket_block").addEventListener("click", function () {
                this.querySelector('.inc_checkout_basket_btn_block').classList.add('inc_loading')
                window.location.href = INC.clientConfig.checkoutLink;
            });
            let body = document.querySelector('.header-gnav-cart__overlay .cart-confirm-wrapper');
            if(window.innerWidth < 767 && document.querySelector('.device-mobile') != null){
                body = document.querySelector('body');
            }
            if(body != null){
                body.appendChild(sidebar_dialoge_block);
            }
            let elSideBarOverlayBlock = document.createElement('div');
            elSideBarOverlayBlock.setAttribute("class", "inc_sidebar_overlay_block");
            elSideBarOverlayBlock.addEventListener("click", function () {
                closesidebar()
            });
            elSideBarOverlayBlock.style.display = "none";
            if(body != null && window.innerWidth < 768 && document.querySelector('.device-mobile') != null){
                body.appendChild(elSideBarOverlayBlock);
            }
            if (INC.dataStore.dataStoreObj.undefined != undefined) {
                if (document.querySelector('.inc_recommended_products_block') != null) {
                    document.querySelector('.inc_recommended_products_block').style.display = "none"
                }
                if (document.querySelector('.s7staticimage img') != null && document.querySelector('.inc_cart_added_product_img') != null) {
                    let p_img = document.querySelector('.s7staticimage img').src
                    document.querySelector('.inc_cart_added_product_img').src = p_img
                }
            }
        }
        setTimeout(function () {
            if (document.querySelector('.inc_recommended_products_list_block') != null) {
                document.querySelector('.inc_recommended_products_list_block').setAttribute('role', "contentinfo")
            }
            let inc_prod_img =  document.querySelectorAll('.inc_product_img_main_img img')
            for(let prodimg of inc_prod_img) {
                if(prodimg){
                    prodimg.setAttribute('style','left:0 !important;position: relative;')
                }
            }
        }, 100)
    }
    function closesidebar(){
        document.querySelector('html').classList.remove('inc_overlay');
        INC.methods.hideSidebar();
        INC.config.pdpaddedProductList = [];
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
    }
    INC.methods.updateSidebarBlock = function () {
        let subtotalactiveprice = 0
        let subtotalregukarprice = 0
        let dataStore = INC.dataStore;
        let sbBlock = document.querySelector('.inc_sidebar_modal_block');
        if (sbBlock != null) {
            let sidebarHeaderItemCountTitleText = sbBlock.querySelector(".inc_header_item_count_title_text");
            let elHeadersubtotalactivetext = sbBlock.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_active_text");
            let elHeadersubtotalregulartext = sbBlock.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_regular_text");
            let sbCartBlock = sbBlock.querySelector(".inc_cart_added_list_block");
            let sidebarHeaderseelesstext = sbBlock.querySelector(".inc_header_item_count_figure_text");
            sidebarHeaderseelesstext.innerText = ""
            sbCartBlock.innerHTML = "";
            let bundleCartProductsArray = Object.keys(dataStore.bundleCartProducts);
            sidebarHeaderItemCountTitleText.innerHTML = "Subtotal (" + Object.keys(dataStore.bundleCartProducts).length + " item)";
            let headerItemCountFigureText = 0;
            subtotalactiveprice = 0
            subtotalregukarprice = 0
            let error_message = ""
            let oosname=[]
            let oosids=[]
            let remerrorjust=document.querySelectorAll('.inc_justerror')
            for(let r of remerrorjust) {
                if(r != null){
                    r.parentNode.removeChild(r)
                }
            }
            bundleCartProductsArray.forEach(function (productSKU) {
                if (dataStore.bundleCartProducts[productSKU] < 1) dataStore.bundleCartProducts[productSKU] = 1
                let findObj = new INC.classes.FindObj({ sku: productSKU });
                let productObj = INC.dataStore.methods().getProductBySKU(findObj);
                if (INC.clientConfig.OOS.indexOf(productObj.mainId) >= 0) {
                    if(oosname.indexOf(productObj.name) == -1 && oosids.indexOf(productObj.mainId) == -1){
                        error_message = ""
                        oosids.push(productObj.mainId)
                        oosname.push(productObj.name)
                        if(error_message == ""){
                            error_message = "<span>"+productObj.name +"</span>" + " - " + "<span>Cannot be purchased at this time</span>"
                        }else{
                            error_message = error_message + " <br> " + "<span>"+productObj.name +"</span>" + " - " + "<span>Cannot be purchased at this time</span>"
                        }
                        let headertitle=sbBlock.querySelector('.inc_sidebar_modal_cart_and_title_block')
                        let errormes = generate_html_tag('div','inc_justerror')
                        let errorimg = generate_html_tag('img','errorimg')
                        errorimg.src = productObj.imageURL
                        errormes.appendChild(errorimg)
                        let errormestext = generate_html_tag('span','inc_justerror_text')
                        errormestext.innerHTML = error_message
                        errormes.appendChild(errormestext)
                        headertitle.parentNode.insertBefore(errormes,headertitle)
                        setTimeout(function(){
                            let remoerroblk=document.querySelectorAll('.inc_justerror')
                            for(let re of remoerroblk) {
                                if(re != null){
                                    re.parentNode.removeChild(re)
                                }
                            }
                        },5000)
                    }
                }else{
                    headerItemCountFigureText = headerItemCountFigureText + parseInt(dataStore.bundleCartProducts[productSKU]);
                    let color = "";
                    let size = "";
                    let just_check_prod_block = document.querySelector('.inc_product_module_block[data-main_id="' + productObj.mainId + '"]')
                    if (just_check_prod_block != null) {
                        if (just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active div') != null) {
                            size = just_check_prod_block.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active div').innerText
                        }
                        if (just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block') != null) {
                            color = just_check_prod_block.querySelector('.inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-color')
                        }
                    }
                    let sel_size = ""
                    if (color != "" && color != undefined && color != null) {
                        sel_size = "Color" + color;
                    } else if (size != "" && size != undefined && size != null) {
                        sel_size = "Size" + size;
                    }
                    let activePrice = parseFloat(productObj.activePrice).toFixed(2);
                    subtotalactiveprice = (+subtotalactiveprice + (+productObj.activePrice * dataStore.bundleCartProducts[productSKU]));
                    subtotalregukarprice = (+subtotalregukarprice + (+productObj.regularPrice * dataStore.bundleCartProducts[productSKU]));

                    let addedhtml = '<div class="inc_cart_added_product_img_block"><div class="inc_cart_added_product_img"><img class="inc_lazy" src="'+productObj.imageURL+'" data-src="'+productObj.imageURL+'" alt="'+productObj.name+'"><div class="sidebar_product_quantity_label">'+dataStore.bundleCartProducts[productSKU]+'</div></div><div class="inc_cart_added_product_desc_block"><div class="inc_cart_added_product_desc_title_block"><div class="inc_cart_added_product_desc_title_text_block"><div class="inc_cart_added_product_desc_title_text" title="Easidri Cooling Coat Wide Fit" style="text-transform: unset;">'+dataStore.bundleCartProducts[productSKU] + ' X ' + productObj.name+'</div></div></div><div class="inc_cart_added_product_desc_att_block"><div class="inc_cart_added_product_desc_att_color_block"><div class="inc_cart_added_product_desc_att_color_text_block"><div class="inc_cart_added_product_desc_att_color_text_block"></div></div></div><div class="inc_cart_added_product_desc_att_size_block"><div class="inc_cart_added_product_desc_att_size_text_block"><div class="inc_cart_added_product_desc_att_size_text">'+sel_size+'</div></div></div></div><div class="inc_cart_added_product_desc_ecirp_block"><div class="inc_cart_added_product_desc_ecirp_active_block"><div class="inc_cart_added_product_desc_ecirp_active_text_block"><div class="inc_cart_added_product_desc_ecirp_active_text">'+formatter.format(activePrice)+'</div><div class="inc_cart_added_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_cart_added_product_desc_ecirp_regular_block"><div class="inc_cart_added_product_desc_ecirp_regular_text_block"><div class="inc_cart_added_product_desc_ecirp_regular_text"></div></div></div></div><div class="inc_cart_added_product_qty_block"></div></div></div>'
                    let productBlock = generate_html_tag('div','inc_cart_added_product_block');
                    productBlock.innerHTML = addedhtml
                    productBlock.setAttribute('data-id', productObj.id);
                    productBlock.setAttribute('data-sku', productObj.sku);
                    productBlock.setAttribute('data-main_id', productObj.mainId);
                    productBlock.setAttribute('data-bundle_id', productObj.bundleId);
                    productBlock.setAttribute('data-childsku', productObj.childsku);
                    productBlock.setAttribute('data-mainsku', productObj.mainsku);
                    productBlock.querySelector('.inc_cart_added_product_img img').setAttribute('onerror',"this.src='"+INC.config.noimage+"'" );
                    sbCartBlock.appendChild(productBlock);
                }
            });
            if (+subtotalactiveprice != null && (+subtotalactiveprice < +subtotalregukarprice)) {
                elHeadersubtotalactivetext.setAttribute('subtotalActiveprice', subtotalactiveprice)
                elHeadersubtotalregulartext.setAttribute('subtotalRegularprice', subtotalregukarprice)
                elHeadersubtotalactivetext.innerHTML = formatter.format(subtotalactiveprice)
                elHeadersubtotalregulartext.innerHTML =  formatter.format(subtotalregukarprice)
                if (document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block') != null) document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block').classList.add("is_special_ecirp")
                elHeadersubtotalactivetext.style.color = "#ee1c31"
            } else {
                elHeadersubtotalactivetext.setAttribute('subtotalActiveprice', subtotalactiveprice)
                elHeadersubtotalactivetext.style.color = "#000"
                elHeadersubtotalregulartext.setAttribute('subtotalRegularprice', subtotalregukarprice)
                elHeadersubtotalactivetext.innerHTML = formatter.format(subtotalregukarprice)
                elHeadersubtotalregulartext.innerHTML = ""
            }
            if (headerItemCountFigureText == 1) {
                sidebarHeaderItemCountTitleText.innerHTML = "Subtotal " + "(" + headerItemCountFigureText + " item)";
            } else {
                sidebarHeaderItemCountTitleText.innerHTML = "Subtotal " + "(" + headerItemCountFigureText + " items)";
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
    }
    INC.methods.updateSidebarProductsList = function (elRecommendedProductsListBlock, productCategory) {
        let productListArray = INC.dataStore.bundleProductsArray;
        let dupl_sidebar_prod = []
        let addCheck = INC.config.pdpaddedProductList;
        for(let pdlistarray of productListArray) {
            let firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: pdlistarray });
            if (firstProductObjByMainId["categoryId"] == productCategory) {
                if (INC.dataStore.dataStoreObj.undefined == undefined) {
                    if (addCheck.indexOf(pdlistarray) == -1) {
                        if (INC.config.sidebarremovedprod.indexOf(firstProductObjByMainId.id) == -1) {
                            if (dupl_sidebar_prod.indexOf(firstProductObjByMainId.id) == -1) {
                                dupl_sidebar_prod.push(firstProductObjByMainId.id)
                                let falsflg=false;
                                let truflg=true;
                                let prdblck = INC.methods.createProductModuleBlock(firstProductObjByMainId.id, "sidebar", false, elRecommendedProductsListBlock);
                                prdblck.querySelector('.inc_product_desc_add_block').addEventListener("click", function () {
                                    let productModuleBlock = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                                    if (productModuleBlock.classList.contains('inc_product_module_block') == falsflg) {
                                        productModuleBlock = this.parentNode.parentNode.parentNode.parentNode.parentNode
                                    }
                                    let flag_check = INC.methods.checkVariantSelection(productModuleBlock)
                                    let sku = productModuleBlock.getAttribute('data-sku');
                                    let findObj = new INC.classes.FindObj({ id: sku });
                                    let qty = productModuleBlock.querySelector('input').value;
                                    let add_prod_im = productModuleBlock.querySelector('.inc_product_desc_add_img')
                                    if (flag_check == 1) {
                                        if (this.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_showcase_block') == truflg || this.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_modal_block') == truflg) {
                                            if (INC.config.disablebtn == truflg) {
                                                INC.config.disablebtn = false;
                                                let newbtntext = productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_text')
                                                let btnclick = productModuleBlock.querySelector('.inc_product_add_text')
                                                newbtntext.innerText = "Adding..."
                                                btnclick.innerText = "Adding...";
                                                let selbtn=productModuleBlock.querySelector('.inc_product_variant_simple_text')
                                                selbtn.innerText = "Adding...";
                                                INC.methods.addProductToCart(findObj, qty, productModuleBlock, btnclick, add_prod_im, selbtn,newbtntext);
                                            }
                                        }
                                    }
                                });
                                elRecommendedProductsListBlock.appendChild(prdblck);
                            }
                        }
                    }
                }
            }
        }
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
        elRecommendedProductsListBlock.setAttribute('style', 'margin-left: 0')
        if((document.querySelector('.inc_recommended_tabs_list_item_block') == null && elRecommendedProductsListBlock.querySelector('.inc_product_module_block') == null)){
            elRecommendedProductsListBlock.parentNode.parentNode.parentNode.parentNode.style.display = "none"
        }
        if ((elRecommendedProductsListBlock.childNodes.length <= 2)) {
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_right_block').style.visibility = "hidden";
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_block').style.visibility = "hidden";
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_block').setAttribute("style", "pointer-events: none;opacity:0.5;visibility: hidden;");
        }

        if (elRecommendedProductsListBlock.childNodes.length > 2) {
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_right_block').style.visibility = "visible";
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_block').style.visibility = "visible";
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_block').setAttribute("style", "pointer-events: none;opacity:0.5");
        }
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_img').setAttribute("style", "opacity:0.5");
        let sliderBtnCounter = 0;
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_img').setAttribute('title', 'Scroll left')
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_right_btn_img').setAttribute('title', 'Scroll right')
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommeded_products_right_btn_block').addEventListener("click", function () {
            let productBlocks = document.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block')
            if (INC.clientConfig.slidevalue + 1 < productBlocks.length) {
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_block').setAttribute("style", "pointer-events: auto;opacity:1");
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_img').setAttribute("style", "opacity:1");
                INC.clientConfig.slidevalue++
                let slide_w = 274
                INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) - slide_w) + 'px';
                let menu = elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_list_block');
                menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
            }
            let cc_ount = 1;
            if (window.innerWidth > 820) {
                cc_ount = 2
            }
            if (+INC.clientConfig.slidevalue + +cc_ount == productBlocks.length) {
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommeded_products_right_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                document.querySelector('.inc_recommended_products_right_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_right_btn_img').setAttribute("style", "opacity:0.5");
            }
            sliderBtnCounter++;
            if (sliderBtnCounter > productBlocks.length - cc_ount) {
                sliderBtnCounter--;
            }
        });

        elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_block').addEventListener("click", function () {
            if (INC.clientConfig.slidevalue == -1) INC.clientConfig.slidevalue = 0;
            if (INC.clientConfig.slidevalue > 0) {
                let slide_w = 274
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommeded_products_right_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                document.querySelector('.inc_recommended_products_right_btn_img').setAttribute("style", "pointer-events: auto;opacity:1");
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_right_btn_img').setAttribute("style", "opacity:1");
                INC.clientConfig.slidevalue--
                INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) + slide_w) + 'px';
                let menu = elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_list_block');
                menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
            }
            if (INC.clientConfig.slidevalue == 0) {
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_img').setAttribute("style", "opacity:0.5");
            }
            sliderBtnCounter--;
            if (sliderBtnCounter == -1) sliderBtnCounter = 0;
        });
        setTimeout(function(){
            let all_list_el = document.querySelectorAll('.inc_recommended_products_list_block .inc_product_showcase_block')
            for (let listel of all_list_el) {
                if(listel.querySelector('.inc_product_desc_att_zero_block.inc_active') != null){
                    let prd_moduleb = listel.parentNode
                    let main_idsd = prd_moduleb.getAttribute('data-main_id')
                    if(prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="'+main_idsd+'"]') != null){
                        if(prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="'+main_idsd+'"] .inc_product_desc_att_size_list_item_img_block') != null){
                            prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="'+main_idsd+'"] .inc_product_desc_att_size_list_item_img_block').click()
                        }else if(listel.querySelector('.inc_product_desc_att_size_list_item_img_block') != null){
                            listel.querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                        }
                    } else if(listel.querySelector('.inc_product_desc_att_size_list_item_img_block') != null){
                        listel.querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                    }
                }
            }
            let allimgSid = document.querySelectorAll('.inc_sidebar_modal_block img[data-src]')
            for(let imglist of allimgSid) {
                imglist.src = imglist.getAttribute('data-src')
            }
            setTimeout(function(){
                let inc_prod_img =  document.querySelectorAll('.inc_product_img_main_img img')
                for(let prodimg of inc_prod_img) {
                    if(prodimg){
                        prodimg.setAttribute('style','left:0 !important;position: relative;')
                    }
                }
            },2000)
        },10)
    }
    INC.methods.addProductToSidebarCart = function (findObj, qty, _productBlockel, client_add_btn, btn_addtocart) {
        if (qty == 0) {
            qty = 1;
        }
        let dataStore = INC.dataStore;
        let sbBlock = document.querySelector('.inc_sidebar_modal_block');
        let subtotal_activeprice = 0;
        let subtotal_regular = 0;
        if (document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_subtotal_ecirp_active_text') != null) {
            subtotal_activeprice = document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_subtotal_ecirp_active_text').getAttribute('subtotalactiveprice')
        }
        if (document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_subtotal_ecirp_regular_text') != null) {
            subtotal_regular = document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_subtotal_ecirp_regular_text').getAttribute('subtotalregularprice')
        }
        if (subtotal_activeprice == null) {
            subtotal_activeprice = 0
        }
        if (subtotal_regular == null) {
            subtotal_regular = 0
        }
        if (client_add_btn == "client_add_btn") {
            subtotal_activeprice = 0;
            subtotal_regular = 0;
        }
        if (document.querySelector('.inc_sidebar_cart_added_block.inc_active') != null) {
            if (document.querySelector('.inc_header_item_count_title_block') != null) {
                document.querySelector('.inc_header_item_count_title_block').click()
            }
        }
        if(sbBlock != null){
            let elHeadersubtotalactivetext = sbBlock.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_active_text");
            let elHeadersubtotalregulartext = sbBlock.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_regular_text");
            let elHeaderItemCountFigureText = sbBlock.querySelector(".inc_header_item_count_figure_text");
            let sidebarHeaderItemCountTitleText = sbBlock.querySelector(".inc_header_item_count_title_text");
            let sbCartBlock = sbBlock.querySelector(".inc_cart_added_list_block");
            if (client_add_btn == "client_add_btn") {
                sbCartBlock.innerHTML = ""
            }
            let productObj = dataStore.methods().getProductById(findObj);
            let productBlock =  generate_html_tag('div','inc_cart_added_product_block');

            if (INC.clientConfig.OOS.indexOf(productObj.mainId) >= 0) {
                productBlock.classList.add('cross')
                for(let e = 0; e < INC.clientConfig.OOS.length; e++) {
                    if (INC.clientConfig.OOS_MESG[e] != undefined) {
                        let remerrorjust=document.querySelector('.inc_justerror')
                        if(remerrorjust != null){
                            remerrorjust.parentNode.removeChild(remerrorjust)
                        }
                        if(document.querySelector('.inc_justerror') == null){
                            let headertitle=sbBlock.querySelector('.inc_sidebar_modal_cart_and_title_block')
                            let errormes = generate_html_tag('div','inc_justerror')
                            let errormestext = generate_html_tag('span','inc_justerror_text')
                                errormestext.innerHTML = "<span>"+productObj.name +"</span>" + " - " + "<span>Cannot be purchased at this time</span>"
                            errormes.appendChild(errormestext)
                            headertitle.parentNode.insertBefore(errormes,headertitle)
                            setTimeout(function(){
                                let remel=document.querySelector('.inc_justerror')
                                if(remel != null){
                                    remel.parentNode.removeChild(remel)
                                }
                            },500)
                        }
                    }
                }
            }else{
                let color = "";
                let size = "";
                let just_check_prod_block = ""
                if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
                    just_check_prod_block = document.querySelector('.inc_sidebar_modal_block .inc_product_module_block[data-main_id="' + productObj.sku + '"]')
                } else {
                    just_check_prod_block = document.querySelector('.inc_product_module_block[data-main_id="' + productObj.mainId + '"]')
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
                    let trflg=true;
                    if (btn_addtocart.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == trflg) {
                        let module_blk = btn_addtocart.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                        if (module_blk.querySelector('.inc_product_modal_block .inc_product_desc_att_block') != null) {
                            let sel_attr = module_blk.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                            let zero_text = sel_attr.getAttribute('data-zero');
                            let size_text = sel_attr.getAttribute('data-size');
                            let color_text = sel_attr.getAttribute('data-color');
                            let third_text = sel_attr.getAttribute('data-third');
                            size = ""
                            color = ""
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
                let sel_size = "";
                if (color != "" && color != undefined && color != null) {
                    sel_size = "Color" + color;
                } else if (size != "" && size != undefined && size != null) {
                    sel_size = "Size : " + size;
                }
                let pdpprice = 0
                if (client_add_btn == "client_add_btn" && INC.config.pageType == "pdp" && document.querySelector('.js-product-original-price') != null) {
                    pdpprice =  document.querySelector('.sd-product-spp__product-full .js-product-original-price').innerText.replace('£','').replace(',','').trim()
                }
                let activepriceClnt = 0
                if(document.querySelector('.sd-product-spp__product-full .elc-product-prices-wrapper .js-product-price') != null){
                    activepriceClnt = document.querySelector('.sd-product-spp__product-full .elc-product-prices-wrapper .js-product-price').innerText.replace('£','')
                }
                let activePrice = 0;
                let regularPrice = 0;
                if(client_add_btn == "client_add_btn"){
                    if(activepriceClnt != 0 && pdpprice != 0){
                        activePrice = parseFloat(activepriceClnt).toFixed(2).toString();
                        regularPrice = parseFloat(pdpprice).toFixed(2).toString();
                    }else if(pdpprice != 0){
                        activePrice = parseFloat(pdpprice).toFixed(2).toString();
                        regularPrice = parseFloat(pdpprice).toFixed(2).toString();
                    }else if(pdpprice == 0 && activepriceClnt != 0){
                        activePrice = parseFloat(activepriceClnt).toFixed(2).toString();
                        regularPrice = parseFloat(activepriceClnt).toFixed(2).toString();
                    }
                    
                }else{
                    activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
                    regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
                }
                
                let addedhtml = '<div class="inc_cart_added_product_img_block"><div class="inc_cart_added_product_img"><img class="inc_lazy" src="'+productObj.imageURL+'" data-src="'+productObj.imageURL+'"  alt="'+productObj.name+'"><div class="sidebar_product_quantity_label">'+qty+'</div></div></div><div class="inc_cart_added_product_desc_block"><div class="inc_cart_added_product_desc_title_block"><div class="inc_cart_added_product_desc_title_text_block"><div class="inc_cart_added_product_desc_title_text" title="Easidri Cooling Coat Wide Fit" style="text-transform: unset;">'+qty + ' X ' + productObj.name+'</div></div></div><div class="inc_cart_added_product_desc_att_block"><div class="inc_cart_added_product_desc_att_color_block"><div class="inc_cart_added_product_desc_att_color_text_block"><div class="inc_cart_added_product_desc_att_color_text_block"></div></div></div><div class="inc_cart_added_product_desc_att_size_block"><div class="inc_cart_added_product_desc_att_size_text_block"><div class="inc_cart_added_product_desc_att_size_text">'+sel_size+'</div></div></div></div><div class="inc_cart_added_product_desc_ecirp_block"><div class="inc_cart_added_product_desc_ecirp_active_block"><div class="inc_cart_added_product_desc_ecirp_active_text_block"><div class="inc_cart_added_product_desc_ecirp_active_text">'+formatter.format(activePrice)+'</div><div class="inc_cart_added_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_cart_added_product_desc_ecirp_regular_block"><div class="inc_cart_added_product_desc_ecirp_regular_text_block"><div class="inc_cart_added_product_desc_ecirp_regular_text"></div></div></div></div><div class="inc_cart_added_product_qty_block"></div></div>'
                productBlock.innerHTML = addedhtml
                productBlock.querySelector('.inc_cart_added_product_img img').setAttribute('onerror',"this.src='"+INC.config.noimage+"'" );
                let subtotalactiveprice = 0;
                let subtotalregukarprice = 0;
                if (subtotal_regular == "" && +regularPrice != 0 && regularPrice != "") {
                    subtotalactiveprice = +subtotal_activeprice + (+activePrice * qty)
                    subtotalregukarprice = +subtotal_activeprice + (+regularPrice * qty)
                } else {
                    subtotalactiveprice = +subtotal_activeprice + (+activePrice * qty)
                    subtotalregukarprice = +subtotal_regular + (+regularPrice * qty)
                }
                let old_qty = 0
                if (document.querySelector('.inc_header_item_count_title_text') != null) old_qty = document.querySelector('.inc_header_item_count_title_text').textContent.split('(')[1].split('ite')[0].trim();
                if (sbCartBlock != null) {
                    sbCartBlock.insertBefore(productBlock, sbCartBlock.querySelector('.inc_cart_added_product_block'));
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
                elHeadersubtotalactivetext.setAttribute('subtotalactiveprice', subtotalactiveprice)
                elHeadersubtotalregulartext.setAttribute('subtotalregularprice', subtotalregukarprice)
                if (+subtotalactiveprice != null && (+subtotalactiveprice < +subtotalregukarprice)) {
                    elHeadersubtotalactivetext.innerHTML = formatter.format(subtotalactiveprice)
                    elHeadersubtotalregulartext.innerHTML =  formatter.format(subtotalregukarprice);
                    if (document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block') != null) document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block').classList.add("is_special_ecirp")
                    elHeadersubtotalactivetext.style.color = "#ee1c31"
                } else {
                    elHeadersubtotalactivetext.style.color = "#000"
                    elHeadersubtotalactivetext.innerHTML = formatter.format(subtotalactiveprice);
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
            }
        }
    }
    INC.methods.sendBundleClickTracking = function (productId) {
        let pageType = "";
        switch (INC.config.pageType) {
            case "pdp": pageType = "107"; break;
            case "productList": pageType = "101"; break;
            case "cartPage": pageType = "103"; break;
            case "ticket": pageType = "103"; break;
            case "other": pageType = "101";
        }
        if (document.querySelector('.inc_sidebar_modal_block.inc_active') == null && INC.config.pageType == "pdp") {
            pageType = "100";
        }
        if(document.querySelector('.header-gnav-cart__overlay.visible') == null && INC.config.pageType == "pdp"){
            pageType = "100"
        }
        if(document.querySelector('.header-gnav-cart__overlay.visible') != null && INC.config.pageType == "pdp"){
            pageType = "107"
        }
        if (document.querySelector(".inc_sidebar_modal_block.inc_active") != null && INC.config.pageType != "productList") {
            pageType = "107";
        }
        INC.methods.trackingEvents("bundleProductClickTracking", { "product_id": productId, "core_product_id": INC.dataStore.pdpProductId }, pageType);
    }

    INC.methods.createProductModuleBlock = function (pdpProductId, blockType, bundleProductListCheck, parentblock,mainprod) {
        if (INC.dataStore.dataStoreObj.undefined == undefined) {
            let productModuleBlock = generate_html_tag('div','inc_product_module_block')
            let findObj = new INC.classes.FindObj({ id: pdpProductId });
            let productObj = INC.dataStore.methods().getProductById(findObj);
            productModuleBlock.style.userSelect = "none";
            setidstoelm(productModuleBlock,productObj)
            let elProductShowcaseBlock = generate_html_tag('div','inc_product_showcase_block');
            elProductShowcaseBlock.innerHTML = showcase_productcard
            let elProductModalBlock = generate_html_tag('div','inc_product_modal_block');
            elProductModalBlock.innerHTML = modal_productcard
            if (elProductShowcaseBlock != null) {
                elProductShowcaseBlock.setAttribute('role', "contentinfo")
            }
            if (elProductModalBlock != null) {
                elProductModalBlock.setAttribute('role', "contentinfo")
            }
            let productShowcaseBlock = INC.methods.createProductShowcaseBlock(pdpProductId, blockType, bundleProductListCheck, parentblock,elProductShowcaseBlock,mainprod);
            let productModalBlock = INC.methods.createProductModalBlock(pdpProductId, blockType, bundleProductListCheck, parentblock,elProductModalBlock,mainprod);

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
            let inc_prod_finish_block = generate_html_tag('div','inc_prod_finish_block')
            producttypedetails.appendChild(inc_prod_finish_block)
            let inc_prod_finish_title = generate_html_tag('div','inc_prod_finish_title')
            inc_prod_finish_title.innerText = "Finish"
            inc_prod_finish_block.appendChild(inc_prod_finish_title)
            let inc_prod_finish_text = generate_html_tag('div','inc_prod_finish_text')
            inc_prod_finish_text.innerText = productObj.finish
            inc_prod_finish_block.appendChild(inc_prod_finish_text)
        }
        
        if(productObj.coverage != null && productObj.coverage != ""){
            prodtypeflag = true
            let inc_prod_coverage_block = generate_html_tag('div','inc_prod_coverage_block')
            producttypedetails.appendChild(inc_prod_coverage_block)
            let inc_prod_coverage_title = generate_html_tag('div','inc_prod_coverage_title')
            inc_prod_coverage_title.innerText = "Coverage"
            inc_prod_coverage_block.appendChild(inc_prod_coverage_title)
            let inc_prod_coverage_text = generate_html_tag('div','inc_prod_coverage_text')
            inc_prod_coverage_text.innerText = productObj.coverage
            inc_prod_coverage_block.appendChild(inc_prod_coverage_text)
        }
        if(productObj.underTone != null && productObj.underTone != ""){
            prodtypeflag = true
            let inc_prod_undertone_block = generate_html_tag('div','inc_prod_undertone_block')
            producttypedetails.appendChild(inc_prod_undertone_block)
            let inc_prod_undertone_title = generate_html_tag('div','inc_prod_undertone_title')
            inc_prod_undertone_title.innerText = "Undertone"
            inc_prod_undertone_block.appendChild(inc_prod_undertone_title)
            let inc_prod_undertone_text = generate_html_tag('div','inc_prod_undertone_text')
            inc_prod_undertone_text.innerText = productObj.underTone
            inc_prod_undertone_block.appendChild(inc_prod_undertone_text)
        }
        if(productObj.skinType != null && productObj.skinType != ""){
            prodtypeflag = true
            let inc_prod_skinType_block = generate_html_tag('div','inc_prod_skinType_block')
            producttypedetails.appendChild(inc_prod_skinType_block)
            let inc_prod_skinType_title = generate_html_tag('div','inc_prod_skinType_title')
            inc_prod_skinType_title.innerText = "Skin Type"
            inc_prod_skinType_block.appendChild(inc_prod_skinType_title)
            let inc_prod_skinType_text = generate_html_tag('div','inc_prod_skinType_text')
            inc_prod_skinType_text.innerText = productObj.skinType
            inc_prod_skinType_block.appendChild(inc_prod_skinType_text)
        }
        return prodtypeflag;
    }
    function incscrollPgae(productBlock){
        let doc = null;
        if(document.querySelector('.inc_pdp_block') != null){
            doc = document.querySelector('.inc_pdp_block');
            inc_scroll_height = (window.scrollY || doc.scrollTop)  - (doc.clientTop || 0);
        }else if(document.querySelector('.inc_af_block') != null){
            doc = document.querySelector('.inc_af_block');
            inc_scroll_height = (window.scrollY || doc.scrollTop)  - (doc.clientTop || 0);
        }
        if(productBlock != null){
            if (productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block') != null) {
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block').click()
            }
            Array.prototype.forEach.call(document.querySelectorAll('.inc_product_modal_block'), function (el) {
                el.classList.remove("inc_active");
            });
        }
    }
    function prepareAdditionalimages(elImgGalleryListBlock,productObj,productBlock){
        let otimg = 0
        productObj.otherImageList.forEach(function (otherImgURLs) {
            let otherImgURL = otherImgURLs;
            let elImgGalleryListItemBlock = generate_html_tag('div','inc_product_img_gallery_list_item_block')
            let imglist = '<div class="inc_product_img_gallery_list_item_img_block"><div class="inc_product_img_gallery_list_item_img"><img class="inc_lazy" data-src="'+otherImgURL+'" src="'+otherImgURL+'" role="img" aria-label="Image"  alt="'+productObj.name+'"></div></div><div class="inc_product_img_gallery_list_item_text_block"><div class="inc_product_img_gallery_list_item_text"></div></div>'
            elImgGalleryListItemBlock.innerHTML = imglist
        
            let elImgGalleryListItemImg = elImgGalleryListItemBlock.querySelector('.inc_product_img_gallery_list_item_img');
        
            let elOtherImgTag = elImgGalleryListItemBlock.querySelector('.inc_product_img_gallery_list_item_img img')
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
                    galleryListItemBlock.classList.remove("inc_active");
                });
                elImgGalleryListItemBlock.classList.add("inc_active");
                let imgotherlist = this.querySelector('img').src
                let elImgMainImg = productBlock.querySelector('.inc_product_img_main_img')
                elImgMainImg.querySelector('img').src = imgotherlist;
                elImgMainImg.querySelector('img').setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
            })
        
            elImgGalleryListBlock.appendChild(elImgGalleryListItemBlock);
            if (otimg == 0) {
                elImgGalleryListItemBlock.classList.add('inc_active')
            }
            if (productObj.otherImageList.length > 5) {
                elImgGalleryListItemBlock.parentNode.classList.add("flex-start")
            }
            otimg++;
        });
    }
    
    function prepareqty(productBlock,blockType){
        let elAddText = productBlock.querySelector('.inc_product_desc_add_text');
        let productDescQtyInputText = productBlock.querySelector('.inc_product_qty_input_text');
        let productDescQtyBlock = productBlock.querySelector('.inc_product_qty_block');
        let elQtyBlock = productBlock.querySelector('.inc_product_qty_block');
        let elQtyDownBlock = productBlock.querySelector('.inc_product_qty_down_block');
        let elQtyUpBlock = productBlock.querySelector('.inc_product_qty_up_block');
        let elQtyInput = generate_html_tag('input');
        elQtyInput.setAttribute('type', "number");
        elQtyInput.setAttribute('aria-label', "quantity");
        elQtyInput.setAttribute('min', 1);
        elQtyInput.setAttribute('max', 8);
        elQtyInput.setAttribute('maxlength', 1);
        elQtyInput.value = 1;
        elQtyInput.setAttribute('old_qty', '1');
        elQtyInput.setAttribute("onkeydown", "if(event.key==='.'){event.preventDefault();}");
        elQtyInput.setAttribute('onKeyPress', 'if(this.value.length==3) return false;');
        elQtyInput.setAttribute("oninput", "validity.valid||(value='');");
        elQtyInput.setAttribute('readOnly', '');
        elQtyInput.addEventListener("keydown", function (event) {
            let elmth = this
            let keyCode = event.which || event.keyCode;
            if (keyCode === 13) {
                event.preventDefault();
            } else if ((window.$.inArray(event.keyCode, incallowedKeys) !== -1) || (keyCode === 65 && (event.ctrlKey || event.metaKey)) || (keyCode >= 35 && keyCode <= 40)) {
                return;
            }
            let charValue = String.fromCharCode(keyCode)
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
            let elmt=this
            setTimeout(function () {
                qtyupdateInc(elmt,productBlock,elAddText)
            }, 50);
        });
        function qtyupdateInc(_elm,prdblk,eladtext){
            if (_elm.value.length == 0) _elm.value = 1;
            if (_elm.value == 0) _elm.value = 1;
            if (_elm.value > 8) _elm.value = 8;

            let productModuleBlock = prdblk.parentNode.parentNode;
            let showcaseProductBlock = productModuleBlock.querySelector('.inc_product_showcase_block').querySelector('.inc_product_block');
            let modalProductBlock = productModuleBlock.querySelector('.inc_product_modal_block').querySelector('.inc_product_block')
            showcaseProductBlock.querySelector('.inc_product_qty_block').querySelector('input').value = parseInt(_elm.value);
            modalProductBlock.querySelector('.inc_product_qty_input_text input').value = parseInt(_elm.value);

            let id = prdblk.getAttribute('data-id');
            let qty = parseInt(_elm.value);
            let main_id = prdblk.getAttribute('data-main_id');
            let bundle_id = prdblk.getAttribute('data-bundle_id');
            let pname = prdblk.querySelector('.inc_product_desc_title_text').textContent;
            let pprice = prdblk.querySelector('.inc_product_desc_ecirp_active_text').textContent.replace('£', '');
            if (eladtext.textContent == 'Added' || eladtext.textContent == "Update") {
                INC.methods.updateBundleCart({ sku: id, qty: qty }, "add", main_id, bundle_id, pname, pprice);
            }
            if (_elm.value == 1) {
                elQtyBlock.classList.add('singleqty')
            }
            let bundleblock = prdblk
            let gflg=true
            let hflg=false;
            if(prdblk.parentNode.parentNode.parentNode.classList.contains('inc_pdp_product-main_block') == gflg){
                bundleblock = prdblk.parentNode.parentNode.parentNode.parentNode.parentNode
                if(bundleblock.classList.contains('inc_pdp_bundle_block') == gflg){
                    INC.methods.updateallbasketprice(bundleblock)
                }
            }else if(prdblk.parentNode.parentNode.parentNode.classList.contains('inc_pdp_product-main_block') == hflg){
                bundleblock = prdblk.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                if(bundleblock.classList.contains('inc_pdp_bundle_block') == gflg){
                    INC.methods.updateallbasketprice(bundleblock)
                }
            }
        }
        productDescQtyInputText.appendChild(elQtyInput);
    
        let added_text = document.createElement('span');
        added_text.classList.add("inc_add_text");
        productDescQtyInputText.appendChild(added_text);
    
        elQtyDownBlock.addEventListener('click', function () {
            let elinput = this.parentNode.parentNode.parentNode.querySelector('.inc_product_qty_input_text input')
            elinput.value = (elinput.value - 1 < 1) ? 1 : elinput.value - 1;
            let productModuleBlock = productBlock.parentNode.parentNode;
            let showcaseProductBlock = productModuleBlock.querySelector('.inc_product_showcase_block').querySelector('.inc_product_block');
            let modalProductBlock = productModuleBlock.querySelector('.inc_product_modal_block').querySelector('.inc_product_block')
            
            showcaseProductBlock.querySelector('.inc_product_qty_block').querySelector('input').value = parseInt(elinput.value);
            modalProductBlock.querySelector('.inc_product_qty_input_text input').value = parseInt(elinput.value);
    
            let id = productBlock.getAttribute('data-id');
            let qty = parseInt(elinput.value);
            let bundle_id = productBlock.getAttribute('data-bundle_id');
            let main_id = productBlock.getAttribute('data-main_id');
            let pname = productBlock.querySelector('.inc_product_desc_title_text').innerText;
            let pprice = productBlock.querySelector('.inc_product_desc_ecirp_active_text').innerText.replace('£', '');
            let jt=true;
            let fts=false;
            if (parseInt(elinput.value) == 1 && productDescQtyBlock.classList.contains('singleqty') == jt) {
                if (elAddText.textContent == "Added" || elAddText.textContent == "Update" || elAddText.textContent == INC.config.AddedText || elAddText.textContent == INC.config.UpdateText) {
                    document.querySelector('html').classList.remove('inc_overlay')
                    if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({ sku: id, qty: qty }, "add", main_id, bundle_id, pname, pprice);
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
            setTimeout(function(){
                let bundleblock = productBlock
                if(productBlock.parentNode.parentNode.parentNode.classList.contains('inc_pdp_product-main_block') == jt){
                    bundleblock = productBlock.parentNode.parentNode.parentNode.parentNode.parentNode
                    if(bundleblock.classList.contains('inc_pdp_bundle_block') == jt){
                        INC.methods.updateallbasketprice(bundleblock)
                    }
                }else if(productBlock.parentNode.parentNode.parentNode.classList.contains('inc_pdp_product-main_block') == fts){
                    bundleblock = productBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
                    if(bundleblock.classList.contains('inc_pdp_bundle_block') == jt){
                        INC.methods.updateallbasketprice(bundleblock)
                    }
                }
            },200)
        });
    
        elQtyUpBlock.addEventListener('click', function () {
            let elinpt = this.parentNode.parentNode.parentNode.querySelector('.inc_product_qty_input_text input')
            elinpt.value = (parseInt(elinpt.value) + 1 > 8) ? 8 : parseInt(elinpt.value) + 1;
            let productModuleBlock = productBlock.parentNode.parentNode;
            let showcaseProductBlock = productModuleBlock.querySelector('.inc_product_showcase_block').querySelector('.inc_product_block');
            let modalProductBlock = productModuleBlock.querySelector('.inc_product_modal_block').querySelector('.inc_product_block')
    
            showcaseProductBlock.querySelector('.inc_product_qty_block').querySelector('input').value = parseInt(elinpt.value);
            modalProductBlock.querySelector('.inc_product_qty_input_text input').value = parseInt(elinpt.value);
    
            modalProductBlock.querySelector('.inc_product_qty_input_text input').parentNode.parentNode.parentNode.parentNode.classList.remove('singleqty');
    
            productDescQtyBlock.classList.remove('singleqty')
            productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_qty_block').classList.remove('singleqty')
            let id = productBlock.getAttribute('data-id');
            let qty = parseInt(elinpt.value);
            let bundle_id = productBlock.getAttribute('data-bundle_id');
            let main_id = productBlock.getAttribute('data-main_id');
            let pname = productBlock.querySelector('.inc_product_desc_title_text').innerText;
            let pprice = productBlock.querySelector('.inc_product_desc_ecirp_active_text').innerText.replace('£', '');
            if (elAddText.textContent == "Added" || elAddText.textContent == "Update" || elAddText.textContent == INC.config.AddedText || elAddText.textContent == INC.config.UpdateText) {
                INC.methods.updateBundleCart({ sku: id, qty: qty }, "add", main_id, bundle_id, pname, pprice);
            }
            setTimeout(function(){
                let trf=true;
                let sf=false;
                let bundleblocks = productBlock;
                if (productBlock.parentNode.parentNode.parentNode.classList.contains('inc_pdp_product-main_block') == trf) {
                    bundleblocks = productBlock.parentNode.parentNode.parentNode.parentNode.parentNode;
                    if (bundleblocks.classList.contains('inc_pdp_bundle_block') == trf) {
                        INC.methods.updateallbasketprice(bundleblocks);
                    }
                } else if (productBlock.parentNode.parentNode.parentNode.classList.contains('inc_pdp_product-main_block') == sf) {
                    bundleblocks = productBlock.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                    if (bundleblocks.classList.contains('inc_pdp_bundle_block') == trf) {
                        INC.methods.updateallbasketprice(bundleblocks);
                    }
                }
            },200);
        });
    }
    INC.methods.createProductShowcaseBlock = function (pdpProductId, blockType, _bundleProductListCheck, _parentblock,elProductShowcaseBlock,mainprod) {
        let productBlock = elProductShowcaseBlock.querySelector('.inc_product_block')
        if(window.innerWidth < 821){
            let qty_html = productBlock.querySelector('.inc_product_qty_block').innerHTML
            let qty_sibling=productBlock.querySelector('.inc_product_desc_att_details_block')
            let html_qty_block = document.createElement('div');
            html_qty_block.classList.add('inc_product_qty_block')
            html_qty_block.classList.add('singleqty')
            html_qty_block.innerHTML = qty_html
            let qty_html_rem = productBlock.querySelector('.inc_product_qty_block');
            qty_html_rem.parentNode.removeChild(qty_html_rem);
            qty_sibling.parentNode.insertBefore(html_qty_block,qty_sibling)
        }
        let findObj = new INC.classes.FindObj({ id: pdpProductId });
        let productObj = INC.dataStore.methods().getProductById(findObj);
        setidstoelm(productBlock,productObj)
        let elHeaderInfoBlck = productBlock.querySelector('.inc_product_info_main_block');
        let elHeader = productBlock.querySelector('.inc_product_header_main_block');
        let elImgBlock = productBlock.querySelector('.inc_product_img_block');
        let elImgGalleryListBlock = productBlock.querySelector('.inc_product_img_gallery_list_block');
        let elTitleTextBlock = productBlock.querySelector('.inc_product_desc_title_text_block');
        let elTitleText = productBlock.querySelector('.inc_product_desc_title_text');
        let elproductPriceLabel = productBlock.querySelector('.inc_product_ecirp_label_block');
        let elPriceActiveText = productBlock.querySelector('.inc_product_desc_ecirp_active_text');
        let elPriceRegularText = productBlock.querySelector('.inc_product_desc_ecirp_regular_text');
        let elAttBlock = productBlock.querySelector('.inc_product_desc_att_block');
        let elAttColorBlock = productBlock.querySelector('.inc_product_desc_att_color_block');
        let elAttColorTitleText = productBlock.querySelector('.inc_product_desc_att_color_title_text');
        let elAttColorListBlock = productBlock.querySelector('.inc_product_desc_att_color_list_block');
        let elAttSizeBlock = productBlock.querySelector('.inc_product_desc_att_size_block');
        let elAttSizeTitleText = productBlock.querySelector('.inc_product_desc_att_size_title_text');
        let elAttSizeTitleTextSelected = productBlock.querySelector('.inc_product_desc_att_size_title_text_selected');
        let elAttSizeListBlock = productBlock.querySelector('.inc_product_desc_att_size_list_block');
        let elAtt0ListBlock = productBlock.querySelector('.inc_product_desc_att_zero_list_block');
        let elAtt3ListBlock = productBlock.querySelector('.inc_product_desc_att_third_list_block');
        let elAtt0Block = productBlock.querySelector('.inc_product_desc_att_zero_block');
        let elAtt3Block = productBlock.querySelector('.inc_product_desc_att_third_block');
        let elAtt0TitleText = productBlock.querySelector('.inc_product_desc_att_zero_title_text');
        let elAtt3TitleTextSelected = productBlock.querySelector('.inc_product_desc_att_third_title_text_selected');
        let elAtt3TitleText = productBlock.querySelector('.inc_product_desc_att_third_title_text');
        
        let elAddBlock = productBlock.querySelector('.inc_product_desc_add_block');
        let elAddText = productBlock.querySelector('.inc_product_desc_add_text');
        let elAddImg = productBlock.querySelector('.inc_product_desc_add_img');
        let elratingsBlock = productBlock.querySelector('.inc_product_desc_ratings_block');
        let elworthPrice = productBlock.querySelector('.inc_product_desc_ecirp_worth_text');
        let eldetailsprodblock = productBlock.querySelector('.inc_product_desc_att_details_block');
        let eladdvarianttext = productBlock.querySelector('.inc_product_variant_simple_text');
        let elconfigtitle = productBlock.querySelector('.inc_product_desc_add_title_text_block');
        let elvariantaddbtn = productBlock.querySelector('.inc_product_desc_att_variant_add_block');
        let elvariantaddbtntext = productBlock.querySelector('.inc_product_desc_att_variant_text');
        let elvariantpopupclose = productBlock.querySelector('.inc_product_desc_variant_popup_close_block');
        let elselectoptaddbtn = productBlock.querySelector('.inc_product_variant_simple_block');
        
        
        let productDescAddText = productBlock.querySelector('.inc_product_add_text');
        let elQtyAddBtnBlock = productBlock.querySelector('.inc_product_desc_qty_add_btn_block');
        
        elQtyAddBtnBlock.classList.add(productObj.ProductType);
        elproductPriceLabel.innerHTML = "SALE"

        if(window.innerWidth < 821){
            let prodtypeflag = false;
            let producttypedetails_mobile_view = generate_html_tag('div','inc_details_mobile_quick_view')
            let producttypedetails = generate_html_tag('div','inc_producttype_details_block')
            let prod_quick_view_close = generate_html_tag('div','prod_quick_view_close')
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
            prodtypeflag = prodtypedesc(productObj,producttypedetails,prodtypeflag)
            let ft=true;
            if(prodtypeflag == ft){
                let prod_quick_view_btn = generate_html_tag('div','prod_quick_view_btn')
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
                let prodplacement = productBlock.querySelector('.inc_product_desc_block')
                if(prodplacement != null){
                    prodplacement.appendChild(prod_quick_view_btn)
                    prodplacement.appendChild(producttypedetails_mobile_view)
                }
            }
        }

        elvariantpopupclose.addEventListener('click', function () {
            if (document.querySelector('.inc_product_modal_block.inc_active') == null && document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                document.querySelector('html').classList.remove('inc_overlay')
                document.querySelector('body').style.position = "relative"
                document.querySelector('body').style.overflow = "auto"
            }
            this.parentNode.classList.remove('inc_active')
            productBlock.classList.remove('show_overlay')
        });
        elHeaderInfoBlck.setAttribute('data-id', productObj.id);
        elHeaderInfoBlck.setAttribute('data-sku', productObj.sku);
        elHeaderInfoBlck.setAttribute('data-main_id', productObj.mainId);
        elHeaderInfoBlck.setAttribute('data-bundle_id', productObj.bundleId);

        elHeader.querySelector('.inc_product_header_img_block').addEventListener("click", function () {
            productBlock.parentNode.classList.remove("inc_active");
        });
        let elImgMainImg = elImgBlock.querySelector('.inc_product_img_main_img');
        let elImgTag1 = generate_html_tag('img');
        elImgTag1.src = productObj.imageURLMain
        elImgTag1.setAttribute('data-src',productObj.imageURLMain)
        elImgTag1.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
        elImgTag1.setAttribute('role', 'img')
        elImgTag1.setAttribute('aria-label', 'Image')
        elImgTag1.setAttribute('alt', productObj.nameMain)
        elImgTag1.setAttribute('data-mouseover', productObj["otherImageList"])
        elImgTag1.setAttribute('data-imageURL', productObj["imageURLMain"])
        let productLink = document.createElement('a');
        productLink.target = "_blank";
        productLink.setAttribute('rel', 'noopener noreferrer')
        productLink.href = productObj.url;
        productLink.appendChild(elImgTag1);
        productLink.setAttribute('otherImageList', productObj["otherImageList"])
        productLink.setAttribute('imageURL', productObj["imageURLMain"])
        add_swipe(productLink)

        elImgMainImg.appendChild(productLink);

        productLink.addEventListener('click', function (e) {
            if(blockType != "sidebar" || blockType != "am" || mainprod == "mainprod"){
                e.preventDefault();  
            }
        })
        if ((INC.config.pageType == "pdp" && window.innerWidth < 821 && blockType != "sidebar") && mainprod != "mainprod") {
            productLink.setAttribute("href", productObj.url);
            elImgMainImg.addEventListener("click", function () {
                INC.methods.sendBundleClickTracking(productObj.mainId);
                let href = productBlock.querySelector('.inc_product_desc_title_text a').href
                setTimeout(function(){
                    window.location.href = href
                },1200)
                getTrackingPixel();
            });
        } else if(window.innerWidth > 820 || blockType == "sidebar" || blockType == "am"){
            elImgMainImg.addEventListener("click", function () {
                incscrollPgae(productBlock)
                if (document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                    document.querySelector('html').classList.add('inc_overlay');
                }
                
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_title_text_block').click()
                document.querySelector('html').classList.add('inc_overlay');
                if (document.querySelector('.sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block') != null) {
                    document.querySelector('.sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block').classList.add('overflow_visible')
                    document.querySelector('body').classList.add('inc_popup_open');
                }
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block').classList.add("inc_active")
            });
        }

        elImgGalleryListBlock.innerHTML = "";
        if ((productObj.otherImageList != null) && productObj.otherImageList.length > 1) {
            prepareAdditionalimages(elImgGalleryListBlock,productObj,productBlock)
        }
        if ((INC.config.pageType == "pdp" && window.innerWidth < 821 && blockType != "sidebar") && mainprod != "mainprod") {
            elTitleTextBlock.addEventListener("click", function () {
                INC.methods.sendBundleClickTracking(productObj.mainId);
                getTrackingPixel();
                let href = productBlock.querySelector('.inc_product_desc_title_text a').href
                setTimeout(function(){
                    window.location.href = href
                },1200)
            });
        }else if(window.innerWidth > 820 || blockType == "sidebar" || blockType == "am"){
            elTitleTextBlock.addEventListener("click", function () {
                incscrollPgae(productBlock)
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_title_text_block').click()
                document.querySelector('html').classList.add('inc_overlay');
                if (document.querySelector('.sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block') != null) {
                    document.querySelector('.sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block').classList.add('overflow_visible')
                    document.querySelector('body').classList.add('inc_popup_open');
                }
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block').classList.add("inc_active")
                setTimeout(function () {
                    if (document.querySelector('.inc_product_modal_block.inc_active') != null) document.querySelector('html').classList.add('inc_overlay');
                }, 300)
            });
        }

        let pTitleDiv = document.createElement('div');
        if(window.innerWidth < 821 && mainprod == "mainprod" && INC.config.pageType == "pdp"){
            pTitleDiv.innerHTML = "<strong>This item </strong>" + productObj.nameMain;
        }else{
            pTitleDiv.innerHTML = productObj.nameMain;
        }
        let field1 = productObj.ratingsCount
        let field2 = productObj.reviewsCount
        INC.methods.get_product_ratings(field1, field2, elratingsBlock);
        let pLink = document.createElement('a');
        pLink.setAttribute('style', 'cursor: default;text-decoration: none;')
        pLink.href = productObj.url;
        pLink.addEventListener('click', function (e) {
            if(blockType != "sidebar" || blockType != "am" || window.innerWidth < 821 || mainprod == "mainprod"){
                e.preventDefault()
            }
        })
        pLink.setAttribute('style', 'text-transform: unset;')
        pLink.setAttribute('title', productObj.nameMain)
        if (INC.config.pageType == "pdp" && INC.config.recommendation) {
            pLink.setAttribute('href', productObj.url)
        }
        pLink.appendChild(pTitleDiv);
        elTitleText.appendChild(pLink);
        let activePrice = parseFloat(productObj.activePriceMain).toFixed(2).toString();
        let regularPrice = parseFloat(productObj.regularPriceMain).toFixed(2).toString();
        elPriceRegularText.textContent = "";
        if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
            elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
            elPriceActiveText.innerHTML = formatter.format(activePrice)
            elPriceRegularText.innerHTML =  formatter.format(regularPrice)
        } else {
            elPriceActiveText.innerHTML = formatter.format(activePrice)
            elworthPrice.innerHTML = ""
        }
        if (window.innerWidth < 821) {
            let inc_empty_popup = generate_html_tag('div', 'inc_empty_popup');
            eldetailsprodblock.appendChild(inc_empty_popup);
        }
        if (blockType == "am") {
            productDescAddText.innerText = "Add To Bag"
        } else if (blockType == "sidebar") {
            productDescAddText.innerText = "Add To Bag"
        } else {
            productDescAddText.innerText = "Add To Bundle"
        }
        productDescAddText.addEventListener('click', function () {
            this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
        });

        prepareqty(productBlock,blockType)

        findObj = new INC.classes.FindObj({ mainId: productObj.mainId });

        let productColorsObj = INC.dataStore.methods().getProductColorsObj(findObj);
        let product0Obj = INC.dataStore.methods().getProductopt0Obj(findObj);
        let productSizesObj = INC.dataStore.methods().getProductSizesObj(findObj);
        let product3Obj = INC.dataStore.methods().getProductopt3Obj(findObj);

        elAtt0ListBlock.innerHTML = "";
        elAttSizeListBlock.innerHTML = "";
        elAttColorListBlock.innerHTML = "";
        elAtt3ListBlock.innerHTML = "";
        if (product0Obj.att0Array.length > 0) {
            if (product0Obj["att0Array"][0].code != "Color") {
                findObj = new INC.classes.FindObj({ mainId: productObj.mainId });
                elAtt0ListBlock.innerHTML = "";
                if (product0Obj["att0Array"].length > 0) {
                    productzeroatt(elAtt0TitleText,elAtt0Block,product0Obj,elAtt0ListBlock,blockType)
                }
            }
        }
        productsizeatt(elAttSizeTitleText,elAttSizeBlock,productSizesObj,elAttSizeListBlock,elAttSizeTitleTextSelected,blockType)
        productcoloratt(productColorsObj,productBlock,elAttColorListBlock,blockType,elAttColorBlock,elAttColorTitleText)

        productthirdatt(product3Obj,elAtt3TitleText,elAtt3Block,elAtt3ListBlock,blockType,elAtt3TitleTextSelected)
        
        
        if (product0Obj["att0Array"].length > 0) {
            productBlock.querySelector('.inc_product_desc_att_zero_title_block').addEventListener('click', function (e) {
                let droflg=false;
                if(document.querySelector('.inc_product_desc_att_zero_block.show_dropdown') != e.currentTarget){
                    if(document.querySelector('.inc_product_desc_att_zero_block.show_dropdown') != null){
                        if(e.currentTarget.parentNode.classList.contains('show_dropdown') == droflg){
                            document.querySelector('.inc_product_desc_att_zero_block.show_dropdown').classList.remove('show_dropdown')
                        }
                    }
                }
                if(document.querySelector('.inc_product_desc_att_color_block.show_dropdown') != null){
                    document.querySelector('.inc_product_desc_att_color_block.show_dropdown').classList.remove('show_dropdown')
                }
                this.parentNode.classList.toggle('show_dropdown')
            })
        }
        if (productColorsObj["colorArray"].length > 0) {
            productBlock.querySelector('.inc_product_desc_att_color_title_block').addEventListener('click', function (e) {
                if(document.querySelector('.inc_product_desc_att_color_block.show_dropdown') != e.currentTarget){
                    if(document.querySelector('.inc_product_desc_att_color_block.show_dropdown') != null){
                        let ctfg=false
                        if(e.currentTarget.parentNode.classList.contains('show_dropdown') == ctfg){
                            document.querySelector('.inc_product_desc_att_color_block.show_dropdown').classList.remove('show_dropdown')
                        }
                    }
                }
                if(document.querySelector('.inc_product_desc_att_zero_block.show_dropdown') != null){
                    document.querySelector('.inc_product_desc_att_zero_block.show_dropdown').classList.remove('show_dropdown')
                }
                this.parentNode.classList.toggle('show_dropdown')
            })
        }
        let sizezero = INC.dataStore.methods().getProductopt0Obj(findObj)
        if (productColorsObj["colorArray"].length == 0 && sizezero["att0Array"].length == 0) {
            elAttBlock.classList.add('attributes_not_avail')
            eladdvarianttext.textContent = "Add"
            switch (blockType) {
                case "pdp": eladdvarianttext.textContent = "Add To Bundle"; break;
                case "sidebar": eladdvarianttext.textContent = "Add To Bag"; break;
                case "am": eladdvarianttext.textContent = "Add To Bag"; break;
            }
            eladdvarianttext.classList.add('simple')
        } else if (productColorsObj["colorArray"].length > 0) {
            elAttBlock.classList.add('attributes_avail')
            elAttSizeTitleText.textContent = "View colours";
            eladdvarianttext.textContent = "Select Option";
            eladdvarianttext.classList.add('config')
            elconfigtitle.textContent = "Please select a Color";
            switch (blockType) {
                case "pdp": elvariantaddbtntext.textContent = "Add To Bundle"; break;
                case "sidebar": elvariantaddbtntext.textContent = "Add To Bag"; break;
                case "am": elvariantaddbtntext.textContent = "Add To Bag"; break;
            }
            eladdvarianttext.classList.remove('simple')
        } else if (sizezero["att0Array"].length > 0) {
            eladdvarianttext.classList.remove('simple')
            eladdvarianttext.textContent = "Select Option";
            eladdvarianttext.classList.add('config')
            elAttBlock.classList.add('attributes_avail')
            elAttSizeTitleText.textContent = "View Sizes";
            elconfigtitle.textContent = "Please select your Size";
            switch (blockType) {
                case "pdp": elvariantaddbtntext.textContent = "Add To Bundle"; break;
                case "sidebar": elvariantaddbtntext.textContent = "Add To Bag"; break;
                case "am": elvariantaddbtntext.textContent = "Add To Bag"; break;
            }
        }

        elvariantaddbtn.addEventListener('click', function () {
            let moduleblk = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
            let flag_check = INC.methods.checkVariantSelection(moduleblk)
            let cngf=true;
            if ((this.textContent.trim() == "Update" || this.parentNode.classList.contains('config_avail') == cngf) && this.innerText.trim() != "Add To Bag") {
                if (flag_check == 1 || flag_check == 3) {
                    if (document.querySelector('.inc_product_modal_block.inc_active') == null && document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
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
                if (this.innerText.trim() == "Add To Bag" || this.innerText.trim() == "SELECT") {
                    if (flag_check == 1 || flag_check == 3) {
                        if (document.querySelector('.inc_product_modal_block.inc_active') == null && document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                            document.querySelector('html').classList.remove('inc_overlay')
                        }
                        this.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()
                        this.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()

                        productBlock.classList.remove('show_overlay')
                        if (this.textContent.trim() == "Add To Bag" || this.textContent.trim() == "SELECT" || this.textContent.trim() == "Add") {
                            this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
                        }
                    } else {
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
                                }
                            }
                        }
                    }
                } else {
                    if (flag_check == 1 || flag_check == 3) {
                        this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
                        this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()
                    } else {
                        if (flag_check == 2 || flag_check == 0) {
                            if (flag_check != 0) {
                                if (this.parentNode.parentNode.querySelector('.inc_variant_tag') != null) {
                                    this.parentNode.querySelector('.inc_product_desc_add_title_text_block').innerText = "Please select a Color";
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
                                }
                            }
                        }
                    }
                }

            }
        })

        elselectoptaddbtn.addEventListener('click', function () {
            if (document.querySelector('.inc_product_desc_att_block.inc_active') != null) {
                document.querySelector('.inc_product_desc_att_block.inc_active').classList.remove('inc_active')
            }
            incscrollPgae(null)
            if (this.querySelector('.inc_product_variant_simple_text.simple') != null) {
                this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
            } else {
                document.querySelector('html').classList.add('inc_overlay');
                this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.querySelector('.inc_product_modal_block').classList.add('inc_active')
                if (document.querySelector('.sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block') != null) {
                    document.querySelector('.sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block').classList.add('overflow_visible')
                    document.querySelector('body').classList.add('inc_popup_open');
                }
                let trucheck=true;
                if (productBlock.parentNode.parentNode.parentNode.classList.contains('inc_af_product-list_block') == trucheck) {
                    document.querySelector('html').classList.add('inc_overlay');
                }
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_info_main_block').classList.add('inc_active');
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_description_main_block').classList.remove('inc_active');
            }
        })
        switch (blockType) {
            case "pdp": elAddText.textContent = "Add"; break;
            case "sidebar": elAddText.textContent = "Add To Bag"; break;
            case "am": elAddText.textContent = "Add To Bag"; break;
        }
        elAddBlock.addEventListener("click", function () {
            let productModuleBlock = productBlock.parentNode.parentNode;
            let modalProductBlock = productModuleBlock.querySelector('.inc_product_modal_block').querySelector('.inc_product_block')
            let flag_check = INC.methods.checkVariantSelection(productModuleBlock)
            let sku = productBlock.getAttribute('data-sku');
            let mainId = productBlock.getAttribute('data-main_id');
            let main_id = productBlock.getAttribute('data-main_id');
            let bundle_id = productBlock.getAttribute('data-bundle_id');
            let pname = productBlock.querySelector('.inc_product_desc_title_text').textContent;
            let pprice = productBlock.querySelector('.inc_product_desc_ecirp_active_text').textContent.replace('£', '');
            let elqtyvalue = productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_qty_block input')
            let qty = parseInt(elqtyvalue.value);
            if (qty < 1) qty = 1
            let prod_card = elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
            let flgfalse=false;
            let trflg=true;
            let prodflag=false;
            if (document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                if (flag_check == 1 || onloadpdp == flgfalse || onloadpdp_delete == flgfalse) {
                    prodflag = true
                } else {
                    if (document.querySelector('.inc_product_modal_block.inc_active') == null) {
                        if (document.querySelector('.inc_pdp_bundle_block.inc_active .inc_pdp_bundle_cart_title_img_block') != null) {
                            document.querySelector('.inc_pdp_bundle_block.inc_active .inc_pdp_bundle_cart_title_img_block').click()
                        }
                        if (window.innerWidth < 821) {
                            productModuleBlock.querySelector('.inc_product_variant_simple_text').click()
                        } else {
                            productModuleBlock.querySelector('.inc_product_variant_simple_block').click()
                        }
                        if(elAddText.textContent == "Add"){
                            if (document.querySelector('.inc_product_modal_block.inc_active') == null) {
                                if (window.innerWidth < 821) {
                                    productModuleBlock.querySelector('.inc_product_variant_simple_text').click()
                                } else {
                                    productModuleBlock.querySelector('.inc_product_details_prod_block').click()
                                }
                            }
                            if (productModuleBlock.querySelector('.inc_product_variant_simple_text').getAttribute('title') != null){
                                productModuleBlock.querySelector('.inc_product_variant_simple_text').textContent = productModuleBlock.querySelector('.inc_product_variant_simple_text').getAttribute('title');
                            }
                        }
                    }
                }
                if(elAddText.textContent == "Add"){
                    if(prodflag == trflg){
                        elAddText.textContent = "Added";
                        elAddText.classList.add('added');
                        productDescAddText.textContent = "Added"
                        elAddText.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').classList.add('Inc_checked');
                        let pListItemBlock = document.querySelector('.inc_pdp_bundle_product_list_item_block' + "[data-main_id=\"" + mainId + "\"]");
                        modalProductBlock.querySelector('.inc_product_desc_add_text').textContent = "Update";
                        if (pListItemBlock != null) {
                            pListItemBlock.classList.add('product_added');
                            pListItemBlock.querySelector('.inc_pdp_bundle_product_list_item_added_btn_img').classList.add("checked");
                        }
                        elAddImg.classList.add("checked");
                        modalProductBlock.querySelector('.inc_product_desc_add_img').classList.add("checked");
                        if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({ sku: sku, qty: qty }, "add", main_id, bundle_id, pname, pprice);
                        if (prod_card != null) {
                            if (prod_card.querySelector('.inc_product_modal_block.inc_active') != null) {
                                if(inc_scroll_height > 100){
                                    window.scrollTo(0,inc_scroll_height);
                                }
                                prod_card.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
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
                        productModuleBlock.querySelector('.inc_product_variant_simple_text').textContent = productModuleBlock.querySelector('.inc_product_variant_simple_text').getAttribute('title')
                    }
                }else if(elAddText.textContent == "Added"){
                    if (modalProductBlock.querySelector('.inc_product_desc_add_text').textContent != "Update" && prod_card.querySelector('.inc_product_modal_block.inc_active') != null) {
                        elAddText.textContent = "Add";
                        productDescAddText.textContent = "Add To Bundle"
                        elAddText.classList.remove('added');
                        elAddText.parentNode.parentNode.classList.remove('Inc_checked');
                        modalProductBlock.querySelector('.inc_product_desc_add_text').textContent = "Add To Bundle";
                        let pListItemBlock1 = document.querySelector('.inc_pdp_bundle_product_list_item_block' + "[data-main_id=\"" + mainId + "\"]");
                        if (pListItemBlock1 != null) {
                            pListItemBlock1.classList.remove('product_added');
                            pListItemBlock1.querySelector('.inc_pdp_bundle_product_list_item_added_btn_img').classList.remove("checked");
                        }
                        elAddImg.classList.remove("checked");
                        modalProductBlock.querySelector('.inc_product_desc_add_img').classList.remove("checked");
                        eladdfn_(productModuleBlock)
                        if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({ sku: sku, qty: qty }, "sub", main_id, bundle_id, pname, pprice);
                    } else {
                        if (prod_card.querySelector('.inc_product_modal_block.inc_active') == null) {
                            elAddText.textContent = "Add";
                            productDescAddText.textContent = "Add To Bundle"
                            elAddText.classList.remove('added');
                            elAddText.parentNode.parentNode.classList.remove('Inc_checked');
                            modalProductBlock.querySelector('.inc_product_desc_add_text').textContent = "Add To Bundle";
                            let pListItemBlock2 = document.querySelector('.inc_pdp_bundle_product_list_item_block' + "[data-main_id=\"" + mainId + "\"]");
                            if (pListItemBlock2 != null) {
                                pListItemBlock2.classList.remove('product_added');
                                pListItemBlock2.querySelector('.inc_pdp_bundle_product_list_item_added_btn_img').classList.remove("checked");
                            }
                            eladdfn_(productModuleBlock)
                            elAddImg.classList.remove("checked");
                            modalProductBlock.querySelector('.inc_product_desc_add_img').classList.remove("checked");
                            if (INC.config.pageType == "pdp" && blockType == "pdp") INC.methods.updateBundleCart({ sku: sku, qty: qty }, "sub", main_id, bundle_id, pname, pprice);
                        }
                    }
                    if (prod_card != null) {
                        if (prod_card.querySelector('.inc_product_modal_block.inc_active') != null) {
                            if(inc_scroll_height > 100){
                                window.scrollTo(0,inc_scroll_height);
                            }
                            prod_card.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                        }
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
        return productBlock;
    }
    function eladdfn_(productModuleBlock){
        if (productModuleBlock.querySelector('.inc_product_variant_simple_text.simple') != null) {
            productModuleBlock.querySelector('.inc_product_variant_simple_text.simple').textContent = "Add To Bundle"
        } else {
            productModuleBlock.querySelector('.inc_product_variant_simple_text').textContent = "Select Option";
            
        }
        if (productModuleBlock.querySelector('.inc_product_variant_simple_block') != null) {
            productModuleBlock.querySelector('.inc_product_variant_simple_block').classList.remove('added_inc')
        }
        productModuleBlock.querySelector('.inc_product_desc_qty_add_btn_block').classList.remove('added_inc')
        productModuleBlock.querySelector('.inc_product_add_block').classList.remove('added_inc')
        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_add_block').classList.remove('added_inc')
        productModuleBlock.querySelector('.inc_product_desc_att_variant_text').textContent = "Add To Bundle"
    }
    INC.methods.createProductModalBlock = function (pdpProductId, blockType, _bundleProductListCheck, _parentblock,elmodalblock) {
        let productBlock = elmodalblock.querySelector('.inc_product_block')
        let prdmblock=productBlock
        let findObj = new INC.classes.FindObj({ id: pdpProductId });
        let productObj = INC.dataStore.methods().getProductById(findObj);
        setidstoelm(productBlock,productObj)
        let elHeader = prdmblock.querySelector('.inc_product_header_main_block');
        let elImgBlock = prdmblock.querySelector('.inc_product_img_block');
        let elImgGalleryListBlock = prdmblock.querySelector('.inc_product_img_gallery_list_block');
        let elTitleBlock = prdmblock.querySelector('.inc_product_desc_title_block');
        let elTitleText = prdmblock.querySelector('.inc_product_desc_title_text');
        let elAttColorTitleText = prdmblock.querySelector('.inc_product_desc_att_color_title_text');
        let elPriceActiveText = prdmblock.querySelector('.inc_product_desc_ecirp_active_text');
        let elPriceRegularText = prdmblock.querySelector('.inc_product_desc_ecirp_regular_text');
        let elAttColorBlock = prdmblock.querySelector('.inc_product_desc_att_color_block');
        let elAttColorListBlock = prdmblock.querySelector('.inc_product_desc_att_color_list_block');
        let elAttSizeBlock = prdmblock.querySelector('.inc_product_desc_att_size_block');
        let elAttSizeTitleText = prdmblock.querySelector('.inc_product_desc_att_size_title_text');
        let elAttSizeTitleTextSelected = prdmblock.querySelector('.inc_product_desc_att_size_title_text_selected');
        let elAttSizeListBlock = prdmblock.querySelector('.inc_product_desc_att_size_list_block');
        let elAtt0ListBlock = prdmblock.querySelector('.inc_product_desc_att_zero_list_block');
        let elAtt3ListBlock = prdmblock.querySelector('.inc_product_desc_att_third_list_block');
        let elAtt0Block = prdmblock.querySelector('.inc_product_desc_att_zero_block');
        let elAtt3Block = prdmblock.querySelector('.inc_product_desc_att_third_block');
        let elAtt0TitleText = prdmblock.querySelector('.inc_product_desc_att_zero_title_text');
        let elAtt3TitleTextSelected = prdmblock.querySelector('.inc_product_desc_att_third_title_text_selected');
        let elAtt3TitleText = prdmblock.querySelector('.inc_product_desc_att_third_title_text');
        let elAddBlock = prdmblock.querySelector('.inc_product_desc_add_block');
        let elAddText = prdmblock.querySelector('.inc_product_desc_add_text');
        let elratingsBlock = prdmblock.querySelector('.inc_product_desc_ratings_block');
        let elGalleryRightArrow = prdmblock.querySelector('.inc_product_img_gallery_right_block');
        let elGallerylefttArrow = prdmblock.querySelector('.inc_product_img_gallery_left_block');
        let productDescriptionMainBlock = prdmblock.querySelector('.inc_product_description_main_block');
        let productHeaderMainBlockTitle = prdmblock.querySelector('.inc_product_header_main_title_block')
        let productHeaderMainBlockRating = prdmblock.querySelector('.inc_product_header_main_rating_block')
        let elproductPriceLabel = prdmblock.querySelector('.inc_product_ecirp_label_block')
        elproductPriceLabel.innerHTML = "SALE"

        elHeader.querySelector('.inc_product_header_img_block').addEventListener("click", function () {
            if (document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                document.querySelector('html').classList.remove('inc_overlay');
                document.querySelector('body').classList.remove('inc_popup_open');
            }
            if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
                document.querySelector('.inc_sidebar_modal_block.inc_active').classList.remove('overflow_visible')
            }
            if (productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_text input') != null && productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_qty_input_text input') != null) {
                if (productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_text input').value != productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_qty_input_text input').value) {
                    productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_qty_input_text input').value = productBlock.parentNode.parentNode.querySelector('.inc_product_showcase_block .inc_product_desc_qty_input_text input').value
                }
            }
            
            productBlock.parentNode.classList.remove("inc_active");
            productBlock.parentNode.querySelector('.inc_product_header_title_block').classList.add('inc_active');
            productBlock.parentNode.querySelector('.inc_product_header_title_block_1').classList.remove('inc_active');
            
            if(inc_scroll_height > 100){
                window.scrollTo(0,inc_scroll_height);
            }
        });
        if(window.innerWidth > 820){
            let prodtypeflag = false;
            let producttypedetails = generate_html_tag('div','inc_producttype_details_block')
            prodtypeflag = prodtypedesc(productObj,producttypedetails,prodtypeflag)
            let gg=true;
            if(prodtypeflag == gg){
                let prodplacement = productBlock.querySelector('.inc_product_desc_att_details_block')
                if(prodplacement != null){
                    prodplacement.parentNode.insertBefore(producttypedetails,prodplacement)
                }
            }
        }
        let elImgMainImg = elImgBlock.querySelector('.inc_product_img_main_img');
        let elImgTag1 = generate_html_tag('img');
        elImgTag1.src = productObj.imageURLMain
        elImgTag1.setAttribute('data-src',productObj.imageURLMain)
        let s=true;
        if(elImgTag1 == s){
            elImgTag1.src = productObj.imageURLMain
        }
        elImgTag1.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
        elImgTag1.setAttribute('role', 'img')
        elImgTag1.setAttribute('aria-label', 'Image')
        elImgTag1.setAttribute('alt', productObj.nameMain.toLocaleLowerCase())
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
        let productLink = document.createElement('a');
        productLink.setAttribute('rel', 'noopener noreferrer')
        productLink.href = productObj.url;
        productLink.appendChild(elImgTag1);
        productLink.style.cursor = 'pointer';
        productLink.setAttribute('otherImageList', productObj["otherImageList"])
        productLink.setAttribute('imageURL', productObj["imageURLMain"])
        add_swipe(productLink)
        elImgMainImg.appendChild(productLink);
        elImgMainImg.addEventListener("click", function (ev) {
            ev.preventDefault();
            getTrackingPixel();
            INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
            let href = productBlock.querySelector('.inc_product_img_main_img a').href
            setTimeout(function () {
                window.location.href = href
            }, 1500)
        });
        elImgGalleryListBlock.innerHTML = "";
        if ((productObj.otherImageList != null) && productObj.otherImageList.length > 1) {
            prepareAdditionalimages(elImgGalleryListBlock,productObj,productBlock)
        }else{
            productBlock.classList.add('inc_other_noimage')
        }
        elTitleBlock.addEventListener("click", function () {
            INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
            getTrackingPixel();
        });
        let pTitleDiv = document.createElement('div');
        pTitleDiv.innerText = productObj.nameMain;
        let pLinkModal = document.createElement('a');
        pLinkModal.setAttribute("title", productObj.nameMain);
        pLinkModal.setAttribute("href", productObj.url);
        pLinkModal.setAttribute('rel', 'noopener noreferrer')
        pLinkModal.innerText = productObj.nameMain;
        productHeaderMainBlockTitle.appendChild(pLinkModal)
        pLinkModal.addEventListener("click", function (e) {
            e.preventDefault();
            getTrackingPixel();
            INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
            let href = productBlock.querySelector('.inc_product_img_main_img a').href
            setTimeout(function () {
                window.location.href = href
            }, 1500)
        });

        let field1 = productObj.ratingsCount
        let field2 = productObj.reviewsCount
        INC.methods.get_product_ratings(field1, field2, elratingsBlock);
        let pLinkModalSKU = document.createElement('span');
        pLinkModalSKU.classList.add("product_modal_sku");
        pLinkModalSKU.innerText = "#" + productObj.sku
        productHeaderMainBlockRating.appendChild(pLinkModalSKU)

        let pLink = document.createElement('a');
        pLink.href = productObj.url;
        pLink.setAttribute('style', 'text-transform: unset;')
        pLink.setAttribute('title', productObj.nameMain)
        pLink.appendChild(pTitleDiv);
        elTitleText.appendChild(pLink);
        let activePrice = parseFloat(productObj.activePriceMain).toFixed(2).toString();
        let regularPrice = parseFloat(productObj.regularPriceMain).toFixed(2).toString();

        elPriceRegularText.innerText = "";
        if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
            elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
            elPriceActiveText.innerHTML = formatter.format(activePrice)
            elPriceRegularText.innerHTML =  formatter.format(regularPrice)
        } else {
            elPriceActiveText.innerText = formatter.format(activePrice)
        }
        prepareqty(productBlock,blockType)

        findObj = new INC.classes.FindObj({ mainId: productObj.mainId });
        if (INC.dataStore.methods().getProductColorsObj(findObj).colorArray.length == 0 && INC.dataStore.methods().getProductopt0Obj(findObj).att0Array.length == 0) {
            elHeader.querySelector('.inc_product_header_title_text').innerText = "Overview";
        } else {
            if (INC.dataStore.methods().getProductopt0Obj(findObj).att0Array.length > 0 || INC.dataStore.methods().getProductColorsObj(findObj).colorArray.length > 0) {
                elHeader.querySelector('.inc_product_header_title_text').innerText = "Overview";
            }
        }
        let inc_product_header_title_block_1 = productBlock.querySelector('.inc_product_header_title_block_1')
        let inc_product_header_title_text_1 = productBlock.querySelector('.inc_product_header_title_text_1')
        inc_product_header_title_text_1.innerText = "Product Details";

        let descriptionhtml = generate_html_tag('div','inc_descriptionhtml')
        descriptionhtml.innerHTML = productObj.description;
        let eldes =  descriptionhtml.innerText
        let htmlappend = generate_html_tag('div','inc_form_desc')
        if(eldes != "" && (eldes.indexOf('What It Is') >= 0 || eldes.indexOf('What It Does') >= 0 || eldes.indexOf('How To Use') >= 0)){
            if(eldes.indexOf('What It Is') >= 0){
                let wdtitle = generate_html_tag('span','inc_whatdoestext_title')
                wdtitle.innerText = ""
                let whatdoesttile = generate_html_tag('span','inc_whatdoestext_title')
                whatdoesttile.innerText = "What It Is"
                let whatdoestext = generate_html_tag('div','inc_whatdoestext')
                whatdoestext.innerHTML = eldes.split('What It Is')[1].split('What It Does')[0].replace(':','')
                htmlappend.appendChild(wdtitle)
                htmlappend.appendChild(whatdoesttile)
                htmlappend.appendChild(whatdoestext)
            }
            if(eldes.indexOf('What It Does') >= 0){
                let whatdoesttileg = generate_html_tag('span','inc_whatdoestext_title')
                whatdoesttileg.innerText = "What It Does"
                let whatdoestextg = generate_html_tag('div','inc_whatdoestext')
                whatdoestextg.innerHTML = eldes.split('What It Does')[1].split('How To Use')[0].replace(':','')
                htmlappend.appendChild(whatdoesttileg)
                htmlappend.appendChild(whatdoestextg)
            }
            if(eldes.indexOf('How To Use') >= 0){
                let whatdoesttilef = generate_html_tag('span','inc_whatdoestext_title')
                whatdoesttilef.innerText = "How To Use"
                let whatdoestextf = generate_html_tag('div','inc_whatdoestext')
                if(eldes.indexOf('We recommend') >= 0){
                    whatdoestextf.innerHTML = eldes.split('How To Use')[1].split('We recommend:')[0].replace(':','')
                }else if(eldes.indexOf('Please note') >= 0){
                    whatdoestextf.innerHTML = eldes.split('How To Use')[1].split('Please note:')[0].replace(':','')
                }else{
                    whatdoestextf.innerHTML = eldes.split('How To Use')[1].replace(':','')
                }
                htmlappend.appendChild(whatdoesttilef)
                htmlappend.appendChild(whatdoestextf)
            }
            if(eldes.indexOf('We recommend') >= 0){
                if(eldes.split('We recommend:')[1] != undefined){
                    let werectitle = generate_html_tag('span','inc_whatdoestext_title')
                    werectitle.innerText = "We recommend"
                    let werectext = generate_html_tag('div','inc_whatdoestext')
                    werectext.innerHTML = eldes.split('We recommend:')[1].replace(':','')
                    htmlappend.appendChild(werectitle)
                    htmlappend.appendChild(werectext)
                }
            }
            if(eldes.indexOf('Please note') >= 0){
                if(eldes.split('Please note:')[1] != undefined){
                    let notetitle = generate_html_tag('span','inc_whatdoestext_title')
                    notetitle.innerText = "Please note"
                    let notetext = generate_html_tag('div','inc_whatdoestext')
                    notetext.innerHTML = eldes.split('Please note:')[1].replace(':','')
                    htmlappend.appendChild(notetitle)
                    htmlappend.appendChild(notetext)
                }
            }
            productDescriptionMainBlock.appendChild(htmlappend)
        }else if(eldes != "" && (eldes.indexOf('Who it’s for') >= 0 || eldes.indexOf('What it is') >= 0 || eldes.indexOf('What it does') >= 0)){
            if(eldes.indexOf('Who it’s for') >= 0){
                let whatdoesttile1 = generate_html_tag('span','inc_whatdoestext_title')
                whatdoesttile1.innerText = ""
                let whatdoesttilee = generate_html_tag('span','inc_whatdoestext_title')
                whatdoesttilee.innerText = "Who it’s for"
                let whatdoestextd = generate_html_tag('div','inc_whatdoestext')
                whatdoestextd.innerHTML = eldes.split('Who it’s for')[1].split('What it is')[0].replace(':','')
                htmlappend.appendChild(whatdoesttile1)
                htmlappend.appendChild(whatdoesttilee)
                htmlappend.appendChild(whatdoestextd)
            }
            if(eldes.indexOf('What it is') >= 0){
                let whatdoesttil = generate_html_tag('span','inc_whatdoestext_title')
                whatdoesttil.innerText = "What it is"
                let whatdoestextc = generate_html_tag('div','inc_whatdoestext')
                whatdoestextc.innerHTML = eldes.split('What it is')[1].split('What it does')[0].replace(':','')
                htmlappend.appendChild(whatdoesttil)
                htmlappend.appendChild(whatdoestextc)
            }
            if(eldes.indexOf('What it does') >= 0){
                let whatdoesttileb = generate_html_tag('span','inc_whatdoestext_title')
                whatdoesttileb.innerText = "What it does"
                let whatdoestextb = generate_html_tag('div','inc_whatdoestext')
                
                if(eldes.indexOf('We recommend') >= 0){
                    whatdoestextb.innerHTML = eldes.split('What it does')[1].split('We recommend:')[0].replace(':','')
                }else if(eldes.indexOf('Please note') >= 0){
                    whatdoestextb.innerHTML = eldes.split('What it does')[1].split('Please note:')[0].replace(':','')
                }else{
                    whatdoestextb.innerHTML = eldes.split('What it does')[1].replace(':','')
                }
                htmlappend.appendChild(whatdoesttileb)
                htmlappend.appendChild(whatdoestextb)
            }
            if(eldes.indexOf('We recommend') >= 0){
                if(eldes.split('We recommend:')[1] != undefined){
                    let werectitlea = generate_html_tag('span','inc_whatdoestext_title')
                    werectitlea.innerText = "We recommend"
                    let werectexta = generate_html_tag('div','inc_whatdoestext')
                    werectexta.innerHTML = eldes.split('We recommend:')[1].replace(':','')
                    htmlappend.appendChild(werectitlea)
                    htmlappend.appendChild(werectexta)
                }
            }
            if(eldes.indexOf('Please note') >= 0){
                if(eldes.split('Please note:')[1] != undefined){
                    let notetitles = generate_html_tag('span','inc_whatdoestext_title')
                    notetitles.innerText = "Please note"
                    let notetexts = generate_html_tag('div','inc_whatdoestext')
                    notetexts.innerHTML = eldes.split('Please note:')[1].replace(':','')
                    htmlappend.appendChild(notetitles)
                    htmlappend.appendChild(notetexts)
                }
            }
            productDescriptionMainBlock.appendChild(htmlappend)
        }else{
            if(window.innerWidth < 821){
                productDescriptionMainBlock.innerHTML = "<span>Description</span>" + productObj.description;
            }else{
                productDescriptionMainBlock.innerHTML = productObj.description;
            }
        }
        
        //Who it’s for: What it is: What it does:

        let inc_product_header_title_block = inc_product_header_title_block_1.parentNode.querySelector('.inc_product_header_title_block');

        let inc_product_header_new_page = productBlock.querySelector('.inc_product_header_new_page')
        let inc_product_header_new_page_text = productBlock.querySelector('.inc_product_header_new_page .inc_product_header_new_page_text')
        inc_product_header_new_page_text.innerText = "Open In A New Tab"
        inc_product_header_new_page_text.setAttribute("href", productObj.url)
        inc_product_header_new_page_text.setAttribute("target", "_blank")
        inc_product_header_new_page_text.setAttribute('rel', 'noopener noreferrer')
        inc_product_header_new_page.addEventListener("click", function () {
            INC.methods.sendBundleClickTracking(productObj.mainId);
            getTrackingPixel()
        });

        inc_product_header_title_block_1.addEventListener('click', function () {
            this.parentNode.parentNode.parentNode.querySelector(".inc_product_description_main_block").classList.add("inc_active")
            this.parentNode.parentNode.parentNode.querySelector(".inc_product_info_main_block").classList.remove("inc_active")
            this.parentNode.querySelector('.inc_product_header_title_block').classList.remove("inc_active");
            this.classList.add("inc_active");
        });

        inc_product_header_title_block.classList.add('inc_active');


        inc_product_header_title_block.addEventListener('click', function () {
            this.parentNode.parentNode.parentNode.querySelector(".inc_product_description_main_block").classList.remove("inc_active")
            this.parentNode.parentNode.parentNode.querySelector(".inc_product_info_main_block").classList.add("inc_active")
            inc_product_header_title_block.classList.add('inc_active');
            inc_product_header_title_block_1.classList.remove('inc_active');
        });

        let product0Obj = INC.dataStore.methods().getProductopt0Obj(findObj);

        let productSizesObj = INC.dataStore.methods().getProductSizesObj(findObj);

        let productColorsObj = INC.dataStore.methods().getProductColorsObj(findObj);

        let product3Obj = INC.dataStore.methods().getProductopt3Obj(findObj);

        elAtt0ListBlock.innerHTML = "";
        elAttSizeListBlock.innerHTML = "";
        elAttColorListBlock.innerHTML = "";
        elAtt3ListBlock.innerHTML = "";


        if (product0Obj.att0Array.length > 0) {
            if (product0Obj["att0Array"][0].code != "Color") {
                elAtt0ListBlock.innerHTML = "";
                if (product0Obj["att0Array"].length > 0) {
                    productzeroatt(elAtt0TitleText,elAtt0Block,product0Obj,elAtt0ListBlock,blockType)
                }
            }
        }
        productsizeatt(elAttSizeTitleText,elAttSizeBlock,productSizesObj,elAttSizeListBlock,elAttSizeTitleTextSelected,blockType)
        
        productcoloratt(productColorsObj,productBlock,elAttColorListBlock,blockType,elAttColorBlock,elAttColorTitleText)
        
        productthirdatt(product3Obj,elAtt3TitleText,elAtt3Block,elAtt3ListBlock,blockType,elAtt3TitleTextSelected)

        
        if (product0Obj["att0Array"].length > 0) {
            productBlock.querySelector('.inc_product_desc_att_zero_title_block').addEventListener('click', function () {
                if(document.querySelector('.inc_product_desc_att_color_block.show_dropdown') != null){
                    document.querySelector('.inc_product_desc_att_color_block.show_dropdown').classList.remove('show_dropdown')
                }
                this.parentNode.classList.toggle('show_dropdown')
            })
        }
        if (productColorsObj["colorArray"].length > 0) {
            productBlock.querySelector('.inc_product_desc_att_color_title_block').addEventListener('click', function () {
                if(document.querySelector('.inc_product_desc_att_zero_block.show_dropdown') != null){
                    document.querySelector('.inc_product_desc_att_zero_block.show_dropdown').classList.remove('show_dropdown')
                }
                this.parentNode.classList.toggle('show_dropdown')
            })
        }
        elGallerylefttArrow.setAttribute('title', 'Scroll left')
        elGalleryRightArrow.setAttribute('title', 'Scroll right')

        elGalleryRightArrow.addEventListener("click", function () {
            let prod_card=this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            let pr_id=prod_card.getAttribute('data-main_id')
            slideTo(pr_id,0,prod_card,"right","arrow")
        });
        elGallerylefttArrow.addEventListener("click", function () {
            let prod_card=this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            let pr_id=prod_card.getAttribute('data-main_id')
            slideTo(pr_id,0,prod_card,"left","arrow")
        });
        if ((productObj.otherImageList == null) || productObj.otherImageList.length < 2) {
            elGalleryRightArrow.style.display = "none"
            elGallerylefttArrow.style.display = "none"
        }
        switch (blockType) {
            case "pdp": elAddText.innerText = "Add To Bundle"; break;
            case "sidebar": elAddText.innerText = "Add To Bag"; break;
            case "am": elAddText.innerText = "Add To Bag"; break;
        }
        elAddBlock.addEventListener("click", function () {
            productBlock.parentNode.querySelector('.inc_product_header_title_block').classList.add('inc_active');
            productBlock.parentNode.querySelector('.inc_product_header_title_block_1').classList.remove('inc_active');

            let productModuleBlock = productBlock.parentNode.parentNode;
            let flag_check = INC.methods.checkVariantSelection(productModuleBlock)
            if (document.querySelector('.sidebar_outer.sidebar_outer_active') == null) {
                document.querySelector('body').classList.remove('inc_popup_open')
                document.querySelector('html').classList.remove('inc_overlay')
            }
            let showcaseProductBlock = productModuleBlock.querySelector('.inc_product_showcase_block').querySelector('.inc_product_block');
            
            if (INC.config.pageType != "cartPage" && !INC.config.recommendation && INC.config.pageType != "ticket" && productModuleBlock.parentNode.className.indexOf('inc_af_product-list_block') == -1) {
                showcaseProductBlock.querySelector('.inc_product_desc_add_block').click();
            }
            let modfl=true
            if (productModuleBlock.classList.contains('configurable') == modfl) {
                if (flag_check == 1) {
                    setTimeout(function () {
                        if (document.querySelector('.sidebar_outer.sidebar_outer_active .inc_product_modal_block.inc_active') != null) {
                            document.querySelector('.sidebar_outer.sidebar_outer_active .inc_product_modal_block.inc_active').classList.remove('inc_active')
                            document.querySelector('body').classList.remove('inc_popup_open');
                            if(inc_scroll_height > 100){
                                window.scrollTo(0,inc_scroll_height);
                            }
                            document.querySelector('.sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block').classList.remove('overflow_visible')
                        }
                    }, 200)
                } else {
                    productModuleBlock.querySelector('.inc_product_desc_add_title_text_block').setAttribute('style', 'color:#E52B45')
                    let element = document.querySelector('.inc_product_modal_block.inc_active .inc_product_block .inc_product_desc_att_color_block')
                    if (element != null) {
                        document.querySelector('html').classList.add('inc_popup_open')
                        document.querySelector('html').classList.add('inc_overlay')
                    }
                }
            } else {
                setTimeout(function () {
                    if (document.querySelector('.inc_sidebar_modal_block.inc_active .inc_product_modal_block.inc_active') != null) {
                        document.querySelector('.inc_sidebar_modal_block.inc_active .inc_product_modal_block.inc_active').classList.remove('inc_active')
                        document.querySelector('body').classList.remove('inc_popup_open')
                        if(inc_scroll_height > 100){
                            window.scrollTo(0,inc_scroll_height);
                        }
                    }
                    if (document.querySelector('.inc_sidebar_modal_block.inc_active .inc_product_modal_block.inc_active') == null && document.querySelector('.inc_sidebar_modal_block') != null) {
                        document.querySelector('.inc_sidebar_modal_block').classList.remove('overflow_visible')
                    }
                }, 100)
            }
            setTimeout(function(){
                if (document.querySelector('.sidebar_outer.sidebar_outer_active') != null && document.querySelector('.inc_product_modal_block.inc_active') == null) {
                    document.querySelector('.inc_sidebar_modal_block.inc_active').classList.remove('overflow_visible')
                }
            },200)
        });
        return productBlock;
    }
    function productzeroatt(elAtt0TitleText,elAtt0Block,product0Obj,elAtt0ListBlock,blockType){
        elAtt0TitleText.innerText = product0Obj["att0Array"][0].code +':';
        elAtt0Block.classList.add("inc_active");
        elAtt0Block.classList.add("inc_total_"+product0Obj["att0Array"].length)
        product0Obj["att0Array"].forEach(function (sizeObj) {
            let attSizeImgBlock0 = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img_block');
            let attSizeImg0 = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img');
            attSizeImgBlock0.setAttribute('blocktype', blockType)
            attSizeImgBlock0.setAttribute('varianttypes', 'zero')
            attSizeImgBlock0.addEventListener('click',function(){
                let elvariant = this;
                let elblktype=this.getAttribute('blocktype')
                let elvtype=this.getAttribute('varianttypes')
                INC.methods.mappvariants(elvariant,elblktype,elvtype)
            })
            attSizeImgBlock0.classList.add('avail')
            if (sizeObj["imgSrc"].length > 0) {
                if (sizeObj["colorCode"] == "" || sizeObj["colorCode"] == undefined) {
                    let sizeimg = generate_html_tag('img');
                    sizeimg.setAttribute('alt', sizeObj["text"])
                    sizeimg.src = sizeObj["imgSrc"]
                    attSizeImgBlock0.setAttribute('data-optionimge', sizeObj["imgSrc"])
                    attSizeImgBlock0.appendChild(sizeimg);
                    elAtt0TitleText.classList.add('img_tag_avail')
                    elAtt0TitleText.style.display="flex"
                    attSizeImgBlock0.classList.add('img_avail')
                }
            }
            attSizeImg0.innerText = sizeObj["text"];
            attSizeImgBlock0.setAttribute('data-size', sizeObj["text"]);
            attSizeImgBlock0.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
            attSizeImgBlock0.setAttribute('data-option', "1");
            attSizeImgBlock0.setAttribute('data-cpid', sizeObj["cpid"])
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
    
    function productcoloratt(productColorsObj,productBlock,elAttColorListBlock,blockType,elAttColorBlock,elAttColorTitleText){
        if (productColorsObj.colorArray.length > 0) {
            if (productColorsObj["colorArray"].length > 0) {
                elAttColorListBlock.innerHTML = "";
                elAttColorBlock.classList.add("inc_active");
                elAttColorTitleText.innerText = "Color";
                let one_attr_flag = false
                if (productColorsObj["colorArray"].length == 1) {
                    one_attr_flag = true
                }
                productColorsObj["colorArray"].forEach(function (colorObj) {
                    let attColorBlock = generate_html_tag('div', 'inc_product_desc_att_color_list_item_block')
                    let attColorImgBlock = generate_html_tag('div', 'inc_product_desc_att_color_list_item_img_block');
                    let attColorImg = generate_html_tag('div', 'inc_product_desc_att_color_list_item_img_block');
                    attColorImgBlock.setAttribute('blocktype', blockType)
                    attColorImgBlock.setAttribute('varianttypes', 'color')
                    attColorImgBlock.addEventListener('click',function(){
                        let elvariantc = this;
                        let elblktypec=this.getAttribute('blocktype')
                        let elvtypec=this.getAttribute('varianttypes')
                        INC.methods.mappvariants(elvariantc,elblktypec,elvtypec)
                    })
                    imgcolorgen(colorObj,attColorImg)
                    let colorTitle = generate_html_tag('a');
                    colorTitle.innerText = colorObj["text"]
                    colorTitle.title = colorObj["text"].toUpperCase();
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
                    elAttColorListBlock.appendChild(attColorBlock);
                    let prod_id = productBlock.getAttribute('data-main_id');
                    let mt=true;
                    if (one_attr_flag == mt) {
                        setTimeout(function () {
                            if (INC.methods.getProductIdFromWebPage() == prod_id) {
                                attColorImgBlock.click()
                            }
                        }, 0)
                    }
                });
            }
        }
    }
    
    function productsizeatt(elAttSizeTitleText,elAttSizeBlock,productSizesObj,elAttSizeListBlock,elAttSizeTitleTextSelected,blockType){
        if (productSizesObj.sizeArray.length > 0) {
            if (productSizesObj["sizeArray"][0].code != "Color") {
                elAttSizeListBlock.innerHTML = "";
                elAttSizeTitleText.innerText = productSizesObj["sizeArray"][0].code;
                elAttSizeBlock.classList.add("inc_active");
                productSizesObj["sizeArray"].forEach(function (sizeObj) {
                    let attSizeImgBlock = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img_block');
                    let attSizeImg = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img');
                    elAttSizeTitleTextSelected.innerText = "Please select option"
                    attSizeImgBlock.classList.add('avail')
                    attSizeImgBlock.setAttribute('blocktype', blockType)
                    attSizeImgBlock.setAttribute('varianttypes', 'size')
                    attSizeImgBlock.addEventListener('click',function(){
                        let elvariants = this;
                        let elblktypes=this.getAttribute('blocktype')
                        let elvtypes = this.getAttribute('varianttypes')
                        INC.methods.mappvariants(elvariants,elblktypes,elvtypes)
                    })
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
    
    function productthirdatt(product3Obj,elAtt3TitleText,elAtt3Block,elAtt3ListBlock,blockType,elAtt3TitleTextSelected){
        if (product3Obj.att3Array.length > 0) {
            if (product3Obj["att3Array"][0].code != "Color") {
                elAtt3ListBlock.innerHTML = "";
                elAtt3TitleTextSelected.innerText = "Please select option"
                product3Obj["att3Array"].forEach(function (sizeObj) {
                    elAtt3TitleText.innerText = product3Obj["att3Array"][0].code;
                    elAtt3Block.classList.add("inc_active");
                    let attSizeImgBlock3 = generate_html_tag('div', 'inc_product_desc_att_third_list_item_img_block');
                    let attSizeImg3 = generate_html_tag('div', 'inc_product_desc_att_third_list_item_img');
                    attSizeImgBlock3.setAttribute('blocktype', blockType)
                    attSizeImgBlock3.setAttribute('varianttypes', 'third')
                    attSizeImgBlock3.addEventListener('click',function(){
                        let elvariantd = this;
                        let elblktyped=this.getAttribute('blocktype')
                        let elvtyped=this.getAttribute('varianttypes')
                        INC.methods.mappvariants(elvariantd,elblktyped,elvtyped)
                    })
                    attSizeImgBlock3.classList.add('avail')
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
    INC.methods.mappvariants = function (obj, blocktype, type_of_variant) {
        if (obj.parentNode != undefined) {
            let productModuleBlck = obj.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            let vtrflg=true;
            if (productModuleBlck.classList.contains('inc_product_showcase_block') == vtrflg || productModuleBlck.classList.contains('inc_product_modal_block') == vtrflg) {
                productModuleBlck = productModuleBlck.parentNode
            }

            let productblockshow = productModuleBlck.querySelector('.inc_product_showcase_block .inc_product_block')
            let productblockmod = productModuleBlck.querySelector('.inc_product_modal_block .inc_product_block')

            let mainprdid = productblockshow.getAttribute('data-main_id')

            if (type_of_variant == "zero") {
                let sel_variantz = obj.getAttribute('data-size')
                productblockmod.querySelector('.inc_product_desc_att_block').setAttribute('data-zero', sel_variantz)
                productblockshow.querySelector('.inc_product_desc_att_block').setAttribute('data-zero', sel_variantz)
            } else if (type_of_variant == "color") {
                let sel_variantC = obj.getAttribute('data-color')
                productblockmod.querySelector('.inc_product_desc_att_block').setAttribute('data-color', sel_variantC)
                productblockshow.querySelector('.inc_product_desc_att_block').setAttribute('data-color', sel_variantC)
            } else if (type_of_variant == "size") {
                let sel_variantS = obj.getAttribute('data-size')
                productblockmod.querySelector('.inc_product_desc_att_block').setAttribute('data-size', sel_variantS)
                productblockshow.querySelector('.inc_product_desc_att_block').setAttribute('data-size', sel_variantS)
            } else if (type_of_variant == "third") {
                let sel_variantT = obj.getAttribute('data-size')
                productblockmod.querySelector('.inc_product_desc_att_block').setAttribute('data-third', sel_variantT)
                productblockshow.querySelector('.inc_product_desc_att_block').setAttribute('data-third', sel_variantT)
            }

            let main_p_id = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: mainprdid }).id;
            let findobj = new INC.classes.FindObj({ id: main_p_id });
            let zero_text = productblockmod.querySelector('.inc_product_desc_att_block').getAttribute('data-zero');
            let size_text = productblockmod.querySelector('.inc_product_desc_att_block').getAttribute('data-size');
            let color_text = productblockmod.querySelector('.inc_product_desc_att_block').getAttribute('data-color');
            let third_text = productblockmod.querySelector('.inc_product_desc_att_block').getAttribute('data-third');

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

            let productSizesObj = INC.dataStore.methods().getProductSizesObj(findobj, obj);
            let productColorsObj = INC.dataStore.methods().getProductColorsObj(findobj, obj);
            let product3rdObj = INC.dataStore.methods().getProductopt3Obj(findobj, obj);

            let elAttSizeBlock = productblockmod.querySelector('.inc_product_desc_att_size_block')
            let elAttColorBlock = productblockmod.querySelector('.inc_product_desc_att_color_block')
            let elAtt3rdBlock = productblockmod.querySelector('.inc_product_desc_att_third_block')
            let elAttSizeListBlock = productblockmod.querySelector('.inc_product_desc_att_size_list_block')
            let elAttColorListBlock = productblockmod.querySelector('.inc_product_desc_att_color_list_block')
            let elAtt3ListBlock = productblockmod.querySelector('.inc_product_desc_att_third_list_block')
            let elselcolortextmodal=productblockmod.querySelector('.inc_product_desc_att_color_title_text_selected')
            let elcolortextmodal=productblockmod.querySelector('.inc_product_desc_att_color_title_text')
            let elAttSizeListBlockshow = productblockshow.querySelector('.inc_product_desc_att_size_list_block')
            let elAttColorListBlockshow = productblockshow.querySelector('.inc_product_desc_att_color_list_block')
            let elAtt3ListBlockshow = productblockshow.querySelector('.inc_product_desc_att_third_list_block')
            let elselcolortextshow=productblockshow.querySelector('.inc_product_desc_att_color_title_text_selected')
            let elcolortextshow=productblockmod.querySelector('.inc_product_desc_att_color_title_text')
            
            if (type_of_variant == "zero" || type_of_variant == "third" || type_of_variant == "color") {
                elAttSizeListBlock.innerHTML = "";
                elAttSizeListBlockshow.innerHTML = "";
                if (productSizesObj["sizeArray"].length > 0) {
                    elAttSizeBlock.classList.add("inc_active");
                    productSizesObj["sizeArray"].forEach(function (sizeObj) {
                        let attSizeImgBlock = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img_block');
                        let attSizeImg = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img');
                        attSizeImgBlock.setAttribute('blocktype', blocktype)
                        attSizeImgBlock.setAttribute('varianttypes', 'size')
                        attSizeImgBlock.addEventListener('click',function(){
                            let elvariants2 = this;
                            let elblktypes2=this.getAttribute('blocktype')
                            let elvtypes2=this.getAttribute('varianttypes')
                            INC.methods.mappvariants(elvariants2,elblktypes2,elvtypes2)
                        })
                        attSizeImgBlock.classList.add('avail')
                        attSizeImg.innerText = sizeObj["text"];
                        attSizeImgBlock.setAttribute('data-size', sizeObj["text"]);
                        attSizeImgBlock.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                        attSizeImgBlock.setAttribute('data-option', "2");
                        attSizeImgBlock.appendChild(attSizeImg);
                        let attSizeImgBlockclone = attSizeImgBlock.cloneNode(attSizeImgBlock);
                        attSizeImgBlockclone.addEventListener('click', function () {
                            let elvariants_ = this;
                            let elblktypes_ = this.getAttribute('blocktype')
                            let elvtypes_ = this.getAttribute('varianttypes')
                            INC.methods.mappvariants(elvariants_, elblktypes_, elvtypes_)
                        })
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
                let sizelowertext = size_text.toLocaleLowerCase()
                if (productblockmod.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
                    productblockmod.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.inc_active').classList.remove('inc_active')
                }
                if (productblockshow.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
                    productblockshow.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.inc_active').classList.remove('inc_active')
                }
                productblockmod.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datacolor="' + sizelowertext + '"]').classList.add('inc_active')
                productblockshow.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datacolor="' + sizelowertext + '"]').classList.add('inc_active')
            }
            if (type_of_variant == "zero" || type_of_variant == "size" || type_of_variant == "third") {
                elAttColorListBlock.innerHTML = "";
                elAttColorListBlockshow.innerHTML = "";
                if (productModuleBlck.querySelector('.inc_product_modal_block .inc_product_desc_att_color_title_text_selected').innerText == "" && productModuleBlck.querySelector('.inc_product_desc_att_color_title_text_selected').innerText == "") {
                    productModuleBlck.querySelector('.inc_product_modal_block .inc_product_desc_att_color_title_text_selected').innerText = ""
                    productModuleBlck.querySelector('.inc_product_desc_att_color_title_text_selected').innerText = ""
                }
                let selcol = findobj.colorText
                if (productColorsObj["colorArray"].length > 0) {
                    elAttColorBlock.classList.add("inc_active");
                    let clrselflag=false;
                    productColorsObj["colorArray"].forEach(function (colorObj) {
                        if (selcol == colorObj["text"]) {
                            findobj.colorText = colorObj["text"]
                            findobj.color_text = colorObj["text"]
                        } else {
                            findobj.colorText = ""
                            findobj.color_text = ""
                        }
                        let attColorBlock = generate_html_tag('div', 'inc_product_desc_att_color_list_item_block')
                        let attColorImgBlock = generate_html_tag('div', 'inc_product_desc_att_color_list_item_img_block');
                        let attColorImg = generate_html_tag('div', 'inc_product_desc_att_color_list_item_img_block');
                        
                        attColorImgBlock.setAttribute('blocktype', blocktype)
                        attColorImgBlock.setAttribute('varianttypes', 'color')
                        attColorImgBlock.addEventListener('click',function(){
                            let elvariantc2 = this;
                            let elblktypec2=this.getAttribute('blocktype')
                            let elvtypec2=this.getAttribute('varianttypes')
                            INC.methods.mappvariants(elvariantc2,elblktypec2,elvtypec2)
                        })
                        imgcolorgen(colorObj,attColorImg)

                        let colorTitle = generate_html_tag('a');
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
                        let attColorBlockclone = attColorBlock.cloneNode(attColorBlock);
                        attColorBlockclone.querySelector('.inc_product_desc_att_color_list_item_img_block').addEventListener('click', function () {
                            let elvariantc1s = this;
                            let elblktypec2s = this.getAttribute('blocktype')
                            let elvtypec2s = this.getAttribute('varianttypes')
                            INC.methods.mappvariants(elvariantc1s, elblktypec2s, elvtypec2s)
                        })
                        elAttColorListBlock.appendChild(attColorBlock);
                        elAttColorListBlockshow.appendChild(attColorBlockclone);
                        if (color_text != null){
                            if(color_text.toLocaleLowerCase() == colorObj.text.toLocaleLowerCase()){
                                clrselflag = true
                                attColorBlock.classList.add('inc_active');
                                attColorBlockclone.classList.add('inc_active');
                                elselcolortextshow.innerText= colorObj.text
                                elselcolortextmodal.innerText= colorObj.text
                                elcolortextmodal.style.backgroundColor = colorObj["colorCode"];
                                elcolortextshow.style.backgroundColor = colorObj["colorCode"];
                            }else if(productColorsObj["colorArray"].length == 1){
                                clrselflag = true
                                attColorBlock.classList.add('inc_active');
                                attColorBlockclone.classList.add('inc_active');
                                productblockmod.querySelector('.inc_product_desc_att_block').setAttribute('data-color',colorObj.text)
                                productblockshow.querySelector('.inc_product_desc_att_block').setAttribute('data-color',colorObj.text)
                                elselcolortextshow.innerText= colorObj.text
                                elselcolortextmodal.innerText= colorObj.text
                                elcolortextmodal.style.backgroundColor = colorObj["colorCode"];
                                elcolortextshow.style.backgroundColor = colorObj["colorCode"];
                            }
                        }
                    });
                    let flg=false;
                    if(clrselflag == flg){
                        let ctext=productblockmod.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block').getAttribute('data-color')
                        let color_colorcodesel = productblockmod.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block').getAttribute('data-colorcode');
                        productblockmod.querySelector('.inc_product_desc_att_block').setAttribute('data-color',ctext)
                        productblockshow.querySelector('.inc_product_desc_att_block').setAttribute('data-color',ctext)
                        elAttColorListBlock.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block').parentNode.classList.add('inc_active')
                        elAttColorListBlockshow.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block').parentNode.classList.add('inc_active')
                        elselcolortextshow.innerText= ctext
                        elselcolortextmodal.innerText= ctext
                        elcolortextmodal.style.backgroundColor = color_colorcodesel;
                        elcolortextshow.style.backgroundColor = color_colorcodesel;
                    }
                }
            } else {
                let colorlowertext = color_text.toLocaleLowerCase()
                let colortxt = color_text
                if (productblockmod.querySelector('.inc_product_desc_att_color_list_item_block.inc_active') != null) {
                    productblockmod.querySelector('.inc_product_desc_att_color_list_item_block.inc_active').classList.remove('inc_active')
                }
                if (productblockshow.querySelector('.inc_product_desc_att_color_list_item_block.inc_active') != null) {
                    productblockshow.querySelector('.inc_product_desc_att_color_list_item_block.inc_active').classList.remove('inc_active')
                }
                productblockmod.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + colorlowertext + '"]').parentNode.classList.add('inc_active')
                productblockshow.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + colorlowertext + '"]').parentNode.classList.add('inc_active')
                elselcolortextshow.innerText= colortxt
                elselcolortextmodal.innerText= colortxt
                if(productblockmod.querySelector('.inc_product_desc_att_color_list_item_block.inc_active div') != null){
                    let color_colorcode = productblockmod.querySelector('.inc_product_desc_att_color_list_item_block.inc_active div').getAttribute('data-colorcode');
                    elcolortextmodal.style.backgroundColor = color_colorcode;
                    elcolortextshow.style.backgroundColor = color_colorcode;
                }
            }
            if (type_of_variant == "zero" || type_of_variant == "size" || type_of_variant == "color") {
                elAtt3ListBlock.innerHTML = "";
                elAtt3ListBlockshow.innerHTML = "";
                if (product3rdObj["att3Array"].length > 0) {
                    elAtt3rdBlock.classList.add("inc_active");

                    product3rdObj["att3Array"].forEach(function (sizeObj) {
                        let attSizeImgBlock3 = generate_html_tag('div', 'inc_product_desc_att_third_list_item_img_block');
                        let attSizeImg3 = generate_html_tag('div', 'inc_product_desc_att_third_list_item_img');
                        
                        attSizeImgBlock3.setAttribute('blocktype', blocktype)
                        attSizeImgBlock3.setAttribute('varianttypes', 'third')
                        attSizeImgBlock3.addEventListener('click',function(){
                            let elvarianttd = this;
                            let elblktypetd=this.getAttribute('blocktype')
                            let elvtypetd=this.getAttribute('varianttypes')
                            INC.methods.mappvariants(elvarianttd,elblktypetd,elvtypetd)
                        })
                        attSizeImg3.innerText = sizeObj["text"];
                        attSizeImgBlock3.setAttribute('data-size', sizeObj["text"]);
                        attSizeImgBlock3.setAttribute("datasize", sizeObj["text"].toLocaleLowerCase());
                        attSizeImgBlock3.setAttribute('data-option', "3");
                        attSizeImgBlock3.appendChild(attSizeImg3);
                        let attSizeImgBlock3clone = attSizeImgBlock3.cloneNode(attSizeImgBlock3);
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
                let thirdlowertext = third_text.toLocaleLowerCase()
                if (productblockmod.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
                    productblockmod.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block.inc_active').classList.remove('inc_active')
                }
                if (productblockshow.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
                    productblockshow.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block.inc_active').classList.remove('inc_active')
                }
                productblockmod.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block[datacolor="' + thirdlowertext + '"]').classList.add('inc_active')
                productblockshow.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_size_list_item_img_block[datacolor="' + thirdlowertext + '"]').classList.add('inc_active')
            }
            let checkzeroselflag=false
            if (productblockmod.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active') == null) {
                checkzeroselflag = true
            }
            let sfl=true;
            if (type_of_variant == "zero" || checkzeroselflag == sfl && type_of_variant != "color") {
                let zerolowertext = ""
                zero_text = ""
                if(checkzeroselflag == sfl){
                    if(obj != null){
                        zero_text = obj.getAttribute('data-size')
                        zerolowertext = zero_text.toLocaleLowerCase()
                    }else{
                        if(productblockmod.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block') != null){
                            zero_text = productblockmod.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block').getAttribute('data-size')
                            zerolowertext = zero_text.toLocaleLowerCase()
                        }
                    }
                }else{
                    if(obj != null){
                        zero_text = obj.getAttribute('data-size')
                        zerolowertext = zero_text.toLocaleLowerCase()
                    }
                }
                if (productblockmod.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
                    productblockmod.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active').classList.remove('inc_active')
                }
                if (productblockshow.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
                    productblockshow.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active').classList.remove('inc_active')
                }
                if(productblockmod.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' + zerolowertext + '"]') != null){
                    productblockmod.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' + zerolowertext + '"]').classList.add('inc_active')
                    productblockshow.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' + zerolowertext + '"]').classList.add('inc_active')
                }
                if (productblockmod.querySelector('.inc_product_desc_att_zero_title_text_selected') != null) {
                    productblockmod.querySelector('.inc_product_desc_att_zero_title_text_selected').innerText = zero_text
                }
                if (productblockshow.querySelector('.inc_product_desc_att_zero_title_text_selected') != null) {
                    productblockshow.querySelector('.inc_product_desc_att_zero_title_text_selected').innerText = zero_text
                }
            }

            INC.methods.updateProductBlock(productblockshow, findobj, blocktype);
            INC.methods.updateProductBlock(productblockmod, findobj, blocktype);
        }
    }
    INC.methods.checkVariantSelection = function (prod_module_block) {
        let attr_flag_color = false;
        let attr_flag_size = false;
        let attr__flag_zero = false;
        let attr__flag_third = false;
        let elSize = prod_module_block.querySelector('.inc_product_desc_att_size_block.inc_active')
        let elColor = prod_module_block.querySelector('.inc_product_desc_att_color_block.inc_active')
        let elattr0 = prod_module_block.querySelector('.inc_product_desc_att_zero_block.inc_active')
        let elthird3 = prod_module_block.querySelector('.inc_product_desc_att_third_block.inc_active')
        if (elColor != null && elattr0 != null && elthird3 != null && elSize != null) {
            if ((elColor.querySelector('.inc_product_desc_att_color_list_item_block.inc_active') != null && elattr0.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active') != null && elthird3.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active') != null && elSize.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active') != null)) {
                attr_flag_color = true
                attr__flag_zero = true
                attr__flag_third = true;
                attr_flag_size = true
            }
        } else if (elColor != null && elattr0 != null && elSize != null) {
            if (elColor.querySelector('.inc_product_desc_att_color_list_item_block.inc_active') != null && elattr0.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active') != null && elSize.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
                attr_flag_color = true
                attr__flag_zero = true
                attr__flag_third = true;
                attr_flag_size = true
            }
        } else if (elColor != null && elattr0 != null) {
            if (elColor.querySelector('.inc_product_desc_att_color_list_item_block.inc_active') != null && elattr0.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
                attr_flag_color = true
                attr__flag_zero = true
                attr_flag_size = true;
                attr__flag_third = true;
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
        let vc=true
        let vf=false
        if (attr_flag_color == vc && attr__flag_zero == vc && attr__flag_third == vc) {
            return 1
        } else {
            if (attr_flag_size == vf) {
                return 2
            } else if (attr__flag_third == vf) {
                return 3
            } else if (attr_flag_color == vf) {
                return 0
            } else {
                return 0
            }
        }
    }
    function imgcolorgen(colorObj,attColorImg){
        if (colorObj["colorCode"] != "" && colorObj["colorCode"] != undefined) {
            let spancolorcode = generate_html_tag('span');
            spancolorcode.setAttribute('alt', colorObj["text"])
            spancolorcode.style.backgroundColor = colorObj["colorCode"];
            attColorImg.appendChild(spancolorcode);
        }else if (colorObj["imgSrc"].length > 0) {
            if (colorObj["colorCode"] == "") {
                let colorImg = generate_html_tag('img');
                colorImg.setAttribute('alt', colorObj["text"])
                colorImg.src = colorObj["imgSrc"]
                attColorImg.appendChild(colorImg);
            }
        }
    }
    INC.methods.updateProductBlock = function (productBlockel, findObj, blockType) {
        let dataStore = INC.dataStore;
        let productBlock = productBlockel;
        let productModuleBlock = productBlock.parentNode.parentNode;
        let modal_attr_block = productModuleBlock.querySelector('.inc_product_modal_block')
        let zero_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-zero');
        let size_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-size');
        let color_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-color');
        let third_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-third');
       
        let sel_attr_text = ""
        if (zero_text != undefined) {
            findObj.zero_text = zero_text
            findObj.zeroText = zero_text
            sel_attr_text = zero_text
        } else {
            findObj.zeroText = ""
            findObj.zero_text = ""
        }
        if (color_text != undefined) {
            findObj.color_text = color_text
            findObj.colorText = color_text
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
            if(blockType == "sidebar" || blockType == "am"){
                productBlock.querySelector('.inc_product_variant_simple_text').innerText = "Select Option"
            }else{
                productBlock.querySelector('.inc_product_variant_simple_text').setAttribute('title', sel_attr_text)
                if(productModuleBlock.querySelector('.inc_product_block .inc_product_add_block.added_inc') != null){
                    productBlock.querySelector('.inc_product_variant_simple_text').innerText = sel_attr_text
                }
            }
            if (color_text != null) {
                let PrdVarSimTxt = productBlock.querySelector('.inc_product_variant_simple_text')
                let colorTitle = generate_html_tag('div');

                colorTitle.addEventListener('click', function (e) { e.preventDefault(); })
                PrdVarSimTxt.appendChild(colorTitle);
                colorTitle.classList.add("colorCircle")
            }
        }
        let productObj = INC.dataStore.methods().getProductByAtt(findObj);
        if (Object.keys(productObj).length != 0) {
            let previousSKU = "";
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
                let added_sum_prod = document.querySelector('.inc_pdp_bundle_cart_added_product_block[data-main_id="' + productObj.mainId + '"]')
                added_sum_prod.querySelector('.inc_pdp_bundle_cart_added_product_att_color_text_block').textContent = sel_attr_text
                added_sum_prod.querySelector('.inc_pdp_bundle_cart_added_product_att_color_text_block').setAttribute('style', '')
                added_sum_prod.querySelector('.inc_pdp_bundle_cart_added_product_att_block').setAttribute('title', sel_attr_text)
            }
            if (productModuleBlock.querySelector('.inc_product_desc_att_size_title_text') != null && sel_attr_text != "") {
                productModuleBlock.querySelector('.inc_product_desc_att_size_title_text').textContent = sel_attr_text
                productModuleBlock.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title', sel_attr_text)
                if(modal_attr_block.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active') != null){
                    let optionimage = modal_attr_block.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active').getAttribute('data-optionimge');
                    if(optionimage != undefined && optionimage != ""){
                        productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_desc_att_zero_title_text').innerHTML = ""
                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_att_zero_title_text').innerHTML = ""
                        let optimg = generate_html_tag('img')
                        optimg.src = optionimage
                        productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_desc_att_zero_title_text').appendChild(optimg)
                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_att_zero_title_text').appendChild(optimg)
                    }
                }
            }
            if (color_text != undefined) {
                let ccode = modal_attr_block.querySelector('.inc_product_desc_att_color_list_item_block.inc_active div').getAttribute('data-colorcode');
                productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_desc_att_color_title_text').style.backgroundColor = ccode
                productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_att_color_title_text').style.backgroundColor = ccode
            }

            let elImgBlock = productBlock.querySelector('.inc_product_img_block');
            let elImgGalleryListBlock = productBlock.querySelector('.inc_product_img_gallery_list_block');
            let elTitleText =  productBlock.querySelector('.inc_product_desc_title_text');
            let elheaderTitleText =  productBlock.querySelector('.inc_product_header_main_title_block');
            let elPriceActiveText = productBlock.querySelector('.inc_product_desc_ecirp_active_text');
            let elPriceRegularText = productBlock.querySelector('.inc_product_desc_ecirp_regular_text');
            let elAddText = productBlock.querySelector('.inc_product_desc_add_text');
            let elworthPrice = productBlock.querySelector('.inc_product_desc_ecirp_worth_text');
            let elGalleryRightArrow = productBlock.querySelector('.inc_product_img_gallery_right_block');
            let elGallerylefttArrow = productBlock.querySelector('.inc_product_img_gallery_left_block');
            let eladdbtnqtyblock = productBlock.querySelector('.inc_product_desc_qty_add_btn_block');
            if (productBlock.parentNode.className.indexOf('inc_product_showcase_block') >= 0) {
                if (blockType != "pdp") {
                    eladdbtnqtyblock.classList.add('inc_active')
                }
            }
            if(productBlock.querySelector('.inc_prod_finish_text') != null){
                if(productObj.finish != null && productObj.finish != ""){
                    productBlock.querySelector('.inc_prod_finish_text').innerText = productObj.finish
                }else{
                    productBlock.querySelector('.inc_prod_finish_text').innerText =  ""
                }
            }
            if(productBlock.querySelector('.inc_prod_coverage_text') != null){
                if(productObj.coverage != null && productObj.coverage != ""){
                    productBlock.querySelector('.inc_prod_coverage_text').innerText = productObj.coverage
                }else{
                    productBlock.querySelector('.inc_prod_coverage_text').innerText = ""
                }
            }
            if(productBlock.querySelector('.inc_prod_undertone_text') != null){
                if(productObj.underTone != null && productObj.underTone != ""){
                    productBlock.querySelector('.inc_prod_undertone_text').innerText = productObj.underTone
                }else{
                    productBlock.querySelector('.inc_prod_undertone_text').innerText = ""
                }
            }
            if(productBlock.querySelector('.inc_prod_skinType_text') != null){
                if(productObj.skinType != null && productObj.skinType != ""){
                    productBlock.querySelector('.inc_prod_skinType_text').innerText = productObj.skinType
                }else{
                    productBlock.querySelector('.inc_prod_skinType_text').innerText = ""
                }
            }
            let elImgMainImg = elImgBlock.querySelector('.inc_product_img_main_img');

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

            let prod_ids = productModuleBlock.getAttribute('data-main_id')
            if (document.querySelector('.inc_pdp_bundle_product_list_items_block .inc_pdp_bundle_product_list_item_block[data-main_id="' + prod_ids + '"]') != null) {
                let tab_img = document.querySelector('.inc_pdp_bundle_product_list_items_block .inc_pdp_bundle_product_list_item_block[data-main_id="' + prod_ids + '"]');
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
            let prdname= productObj.name.charAt(0).toUpperCase() +  productObj.name.slice(1)
            if (elTitleText.querySelector('strong') != null && window.innerWidth < 821 && INC.config.pageType == "pdp") {
                if(elTitleText.querySelector('div') != null){
                    elTitleText.querySelector('div').innerHTML = "<strong>This item </strong>" +prdname
                }
            }else{
                if(elTitleText.querySelector('div') != null){
                    elTitleText.querySelector('div').textContent =prdname
                }
            }
           
            if(elheaderTitleText.querySelector('a') != null){
                elheaderTitleText.querySelector('a').setAttribute('title',prdname)
                elheaderTitleText.querySelector('a').textContent =prdname
            }
            elTitleText.querySelector('a').setAttribute('title',prdname)
            let activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
            let regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
            let totalsaveprc = get_discount_price(productObj.regularPrice, productObj.activePrice)
            let totalsaveper = get_discount_price_percentage(productObj.regularPrice, productObj.activePrice)

            elPriceActiveText.parentNode.parentNode.parentNode.classList.remove('is_special_ecirp')
            elPriceRegularText.textContent = "";
            if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
                elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
                elPriceActiveText.innerHTML = formatter.format(activePrice)
                elPriceRegularText.innerHTML =  formatter.format(regularPrice)
                elworthPrice.innerHTML = "You save: " + formatter.format(totalsaveprc) + " (" + (totalsaveper) + "%)";
            } else {
                elworthPrice.innerHTML = "";
                elPriceActiveText.innerHTML = formatter.format(activePrice)
            }
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
            let elQtyInput = productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_qty_add_btn_block .inc_product_qty_block input');
            let sku = productBlock.getAttribute('data-sku');
            let bundle_id = productBlock.getAttribute('data-bundle_id');
            let main_id = productBlock.getAttribute('data-main_id');
            let qty = parseInt(elQtyInput.value);
            let pname = productBlock.querySelector('.inc_product_desc_title_text').textContent;
            let pprice = productBlock.querySelector('.inc_product_desc_ecirp_active_text').textContent.replace('£', '');

            if (elAddText.parentNode.parentNode.querySelector('.inc_product_desc_add_img.checked') != null) {
                INC.methods.updateBundleCart({ sku: sku, qty: qty }, "add", main_id, bundle_id, pname, pprice);
            }
            if(window.innerWidth < 821){
                let pdpbundleblock = null
                if(productModuleBlock.parentNode != null){
                    let trfl=true;
                    if(productModuleBlock.parentNode.parentNode.parentNode.classList.contains('inc_pdp_bundle_block') == trfl){
                        pdpbundleblock = productModuleBlock.parentNode.parentNode.parentNode
                    }else{
                        pdpbundleblock = productModuleBlock.parentNode.parentNode.parentNode.parentNode.parentNode
                    }
                    INC.methods.updateallbasketprice(pdpbundleblock)
                }
            }
            setTimeout(function () {
                if (elImgMainImg.querySelectorAll('img')[0].naturalWidth == 360) {
                    elImgMainImg.querySelectorAll('img')[0].setAttribute('src', productObj["imageURLMain"]);
                }
            }, 200);
        }
        if(blockType == "pdp" && productModuleBlock.querySelector('.inc_product_add_block.added_inc') != null){
            productModuleBlock.querySelector('.inc_product_variant_simple_block').classList.add('added_inc')
        }
    }

    INC.methods.createProductListItemBlock = function (productObjs) {
        let productListItemBlock = generate_html_tag('div','inc_pdp_bundle_product_list_item_block');
        let findObj = new INC.classes.FindObj({ id: productObjs.id, mainId: productObjs.mainId });
        let productObj = INC.dataStore.methods().getProductById(findObj);
        productListItemBlock.style.userSelect = "none";
        productListItemBlock.setAttribute('data-id', productObj.id);
        productListItemBlock.setAttribute('data-sku', productObj.sku);
        productListItemBlock.setAttribute('data-main_id', productObj.mainId);
        productListItemBlock.setAttribute('data-bundle_id', productObj.bundleId);

        let seemoreprodhtml='<div class="inc_pdp_bundle_product_list_item_added_block"><div class="inc_pdp_bundle_product_list_item_added_btn_block"><div class="inc_pdp_bundle_product_list_item_added_btn_img_block"><div class="inc_pdp_bundle_product_list_item_added_btn_img"></div></div><div class="inc_pdp_bundle_product_list_item_added_btn_text_block"><div class="inc_pdp_bundle_product_list_item_added_btn_text"></div></div></div></div><div class="inc_pdp_bundle_product_list_item_img_block"><div class="inc_pdp_bundle_product_list_item_img"><img class="inc_lazy" data-src="'+productObj.imageURL+'" src="'+productObj.imageURL+'"></div></div><div class="inc_pdp_bundle_product_list_item_title_block"><div class="inc_pdp_bundle_product_list_item_title_text_block"><div class="inc_pdp_bundle_product_list_item_title_text"></div></div></div><div class="inc_pdp_bundle_product_list_item_ecirp_block"><div class="inc_pdp_bundle_product_list_item_ecirp_active_block"><div class="inc_pdp_bundle_product_list_item_ecirp_active_text_block"><div class="inc_pdp_bundle_product_list_item_ecirp_active_text"></div></div></div></div>'

        productListItemBlock.innerHTML=seemoreprodhtml
        productListItemBlock.querySelector('.inc_pdp_bundle_product_list_item_img img').setAttribute('onerror',"this.src='"+INC.config.noimage+"'" );
        productListItemBlock.addEventListener("click", function () {
            Array.prototype.forEach.call(document.querySelectorAll('.inc_product_desc_att_size_list_block'), function (attSizeListBlock) {
                attSizeListBlock.classList.remove("inc_active");
            });

            let elListMainBlock = document.querySelector('.inc_pdp_bundle_product_list_main_block');
            Array.prototype.forEach.call(elListMainBlock.querySelectorAll('.inc_product_module_block'), function (productBlock) {
                productBlock.setAttribute('style', 'display: none!important');
            });
            elListMainBlock.querySelector('.inc_product_module_block' + "[data-main_id=\"" + productObj.mainId + "\"]").style.display = "block";

            Array.prototype.forEach.call(productListItemBlock.parentNode.querySelectorAll('.inc_pdp_bundle_product_list_item_block'), function (pListItemBlock) {
                pListItemBlock.classList.remove("inc_active");
            });

            productListItemBlock.classList.add("inc_active");
        });

        return productListItemBlock;
    }
    INC.methods.updateBundleCart = function (bundleCartObj, type, main_id, bundle_id, pname, pprice) {
        let dataStore = INC.dataStore;
        let listToDelete = []
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
                    let what, a = arguments, L = a.length, ax;
                    while (L && this.length) {
                        what = a[--L];
                        while ((ax = this.indexOf(what)) !== -1) {
                            this.splice(ax, 1);
                        }
                    }
                    return this;
                };
                listToDelete[0] = main_id
                for(let i = 0; i < INC.config.bundle_tracking.length; i++) {
                    let obj = INC.config.bundle_tracking[i];
                    if (obj != undefined) {
                        if (listToDelete.indexOf(obj.id) !== -1) {
                            INC.config.bundle_tracking.splice(i, 1);
                        }
                    }
                }
                INC.config.bundle_skuPushed.remove_prod_list = function () {
                    let what1, a1 = arguments, L1 = a1.length, ax1;
                    while (L1 && this.length) {
                        what1 = a1[--L1];
                        while ((ax1 = this.indexOf(what1)) !== -1) {
                            this.splice(ax1, 1);
                        }
                    }
                    return this;
                };
                INC.config.pdpaddedProductList.remove_prod_list(main_id);
                INC.config.bundle_skuPushed.remove_prod_list(bundleCartObj["sku"]);
                break;
        }

        if (INC.config.pageType == "pdp") this.calculateBundleTotal();
    }

    INC.methods.calculateBundleTotal = function () {
        let dataStore = INC.dataStore;
        let bundleCartProducts = dataStore["bundleCartProducts"];
        let productListObj = dataStore.dataStoreObj;
        let duplicate_check_produ = []
        let totalRegularPrice = 0;
        let totalActivePrice = 0;
        let totalMainProduct = 0;
        let totalAddonProducts = 0;
        let totalAddonProductsCount = 0;
        let totalProductCount = 0;
        let total_qty = 0
        let total_collect_point = 0
        let mainId = INC.methods.getProductIdFromWebPage();
        if (bundleCartProducts != null && bundleCartProducts != undefined) {
            Object.keys(bundleCartProducts).forEach(function (sku) {
                for(let mainProductId in productListObj) {
                    for(let childProductId in productListObj[mainProductId]) {
                        if (sku == productListObj[mainProductId][childProductId]["sku"]) {
                            if (duplicate_check_produ.indexOf(productListObj[mainProductId][childProductId]["sku"]) == -1) {
                                duplicate_check_produ.push(productListObj[mainProductId][childProductId]["sku"])
                                let regularPrice = productListObj[mainProductId][childProductId]["regularPrice"];
                                let activePrice = productListObj[mainProductId][childProductId]["activePrice"];
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
            });
        }
        let priceObj = {
            totalActivePrice: parseFloat(totalActivePrice).toFixed(2),
            totalRegularPrice: parseFloat(totalRegularPrice).toFixed(2),
            totalMainProduct: totalMainProduct,
            totalAddonProducts: totalAddonProducts,
            totalAddonProductsCount: totalAddonProductsCount,
            totalProductCount: totalProductCount,
            total_qty: total_qty,
            total_collect_point: total_collect_point
        }
        if(window.innerWidth > 820){
            this.updateBundleCartBlock(priceObj);
        }
    }

    INC.methods.updateBundleCartBlock = function (priceObj) {
        let dataStore = INC.dataStore;
        let bundleCartProducts = dataStore["bundleCartProducts"];
        let totalRegularPrice = priceObj.totalRegularPrice;
        let totalActivePrice = priceObj.totalActivePrice;
        let totalMainProduct = priceObj.totalMainProduct;
        let totalAddonProducts = priceObj.totalAddonProducts;
        let totalAddonProductsCount = priceObj.totalAddonProductsCount;
        let totalProductCount = priceObj.totalProductCount;
        let elPdpBundleCartBlock = document.querySelector('.inc_pdp_bundle_cart_block');
        if (elPdpBundleCartBlock != null) {
            let elBundleCartAddedBlock = document.querySelector('.inc_pdp_bundle_cart_added_block')
            let elBundleCartSummaryViewBtnCount = document.querySelector('.inc_pdp_bundle_cart_summary_view_btn_count')
            let elBundleCartPriceRegularText =document.querySelector('.inc_pdp_bundle_cart_summary_ecirp_regular_text')
            let elBundleCartPriceActiveText = document.querySelector('.inc_pdp_bundle_cart_summary_ecirp_active_text')
            let elBundleCartTitleTextcount = document.querySelector('.inc_pdp_bundle_cart_title_text')
            let elbundlesavetext = document.querySelector('.inc_pdp_bundle_cart_summary_ecirp_save_text')
            let elCartsummaryMainPrdtxtBlock = document.querySelector('.inc_pdp_bundle_cart_summary_main_prd_txt')
            let elCartsummaryMainPrdPrcBlock = document.querySelector('.inc_pdp_bundle_cart_summary_main_prd_prc')
            let elCartsummaryAddonPrdtxtBlock = document.querySelector('.inc_pdp_bundle_cart_summary_addon_prd_txt')
            let elCartsummaryAddonPrdPrcBlock = document.querySelector('.inc_pdp_bundle_cart_summary_addon_prd_prc')
            let elBundleCartAddBtnText = document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_text')
            elBundleCartAddedBlock.innerHTML = "";
            let bundleCartProductsArray = Object.keys(bundleCartProducts);
            elBundleCartSummaryViewBtnCount.textContent = bundleCartProductsArray.length;
            if (window.innerWidth < 821) {
                elBundleCartTitleTextcount.textContent = "Items you've added"
            }
            for(let skup of INC.config.bundle_skuPushed) {
                let elcont = skup
                for(let bundaray of bundleCartProductsArray) {
                    let findObj = new INC.classes.FindObj({ sku: bundaray });
                    let productObj = INC.dataStore.methods().getProductBySKU(findObj);
                    if (elcont == productObj.id) {
                        let productId = productObj.id;
                        let prepen_elm = this.createBundleCartAddedProductBlock(productId, bundleCartProducts[bundaray], "pdp")
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

            if (bundleCartProductsArray.length == 0) {
                setTimeout(function () {
                    onloadpdp_delete = false;
                    document.querySelectorAll('.inc_pdp_block .inc_product_desc_add_block')[1].click();
                    onloadpdp_delete = true;
                }, 5);
            }
            elBundleCartPriceActiveText.innerHTML = formatter.format(totalActivePrice)
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.remove('simple_ecirp')
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.remove('is_special_ecirp')
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.remove('simple_ecirp')
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.remove('is_special_ecirp')
            let totalsaveprcs = get_discount_price(totalRegularPrice, totalActivePrice)
            let totalsavepers = get_discount_price_percentage(totalRegularPrice, totalActivePrice)
            if (totalRegularPrice != "0.00" && totalRegularPrice != totalActivePrice && totalRegularPrice != null && totalRegularPrice != "") {
                elBundleCartPriceRegularText.innerHTML =  formatter.format(totalRegularPrice)
                elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
                elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
                elbundlesavetext.innerHTML = "You save: " + formatter.format(totalsaveprcs) + " (" + (totalsavepers) + "%)";
            } else {
                elbundlesavetext.innerHTML = ""
                elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.add('simple_ecirp')
            }
            if (window.innerWidth < 821) {
                elCartsummaryMainPrdtxtBlock.innerHTML = "Main product ";
                elCartsummaryMainPrdPrcBlock.innerText = ""
                if (totalMainProduct != undefined) {
                    elCartsummaryMainPrdPrcBlock.innerText = formatter.format(totalMainProduct)
                }
                if (bundleCartProductsArray.length == 1) {

                    if (totalAddonProducts == 0 || totalAddonProducts == 0.00) {
                        elCartsummaryAddonPrdtxtBlock.innerText = "No addon product selected ";
                        elCartsummaryAddonPrdPrcBlock.innerHTML = ""
                    }
                    else {
                        elCartsummaryAddonPrdtxtBlock.innerText = "1 addon product selected ";
                        elCartsummaryAddonPrdPrcBlock.innerHTML = elCartsummaryAddonPrdPrcBlock.innerText = "+ " + formatter.format(totalAddonProducts)
                    }
                }
                else if (bundleCartProductsArray.length > 1) {
                    if (totalMainProduct == 0 || totalMainProduct == 0.00) {
                        elCartsummaryAddonPrdtxtBlock.innerText = bundleCartProductsArray.length + " " + "addon products selected ";
                    }
                    else {
                        if(bundleCartProductsArray.length == 2){
                            elCartsummaryAddonPrdtxtBlock.innerText = bundleCartProductsArray.length - 1 + " " + "addon product selected ";
                        }
                        else{
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
                let elBundleCartTitleText = document.querySelector('.inc_pdp_bundle_cart_title_text')
                let elBundleCartAddBtnTexts = document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_text')
                elBundleCartAddBtnTexts.style.textTransform = "none"
                elBundleCartTitleText.textContent = "Price Summary";
                elBundleCartAddBtnTexts.textContent = "Add To Bag";
                if (totalProductCount <= 1) {
                    elBundleCartAddBtnTexts.textContent = "Add To Bag";
                }
            }

            let elPriceMainTitleText = elPdpBundleCartBlock.querySelector('.inc_pdp_bundle-cart_ecirp_main_title_text');
            let elPriceMainFigureText = elPdpBundleCartBlock.querySelector('.inc_pdp_bundle-cart_ecirp_main_figure_text');
            let elPriceAddonTitleText = elPdpBundleCartBlock.querySelector('.inc_pdp_bundle-cart_ecirp_addon_title_text');
            let elPriceAddonFigureText = elPdpBundleCartBlock.querySelector('.inc_pdp_bundle-cart_ecirp_addon_figure_text');
            let elPriceActiveText = elPdpBundleCartBlock.querySelector('.inc_pdp_bundle_cart_summary_ecirp_active_text');

            elPriceMainTitleText.textContent = "Main Product Price ";
            elPriceAddonTitleText.textContent = "Add-on(s) Selected  " + ((totalAddonProductsCount > 0) ? totalAddonProductsCount : "");

            elPriceMainFigureText.innerHTML = formatter.format(totalMainProduct)
            elPriceAddonFigureText.innerHTML = formatter.format(totalAddonProducts)
            elPriceActiveText.innerHTML = formatter.format(totalActivePrice)

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

    INC.methods.createBundleCartAddedProductBlock = function (productId, qty) {
        let addedProductBlock = generate_html_tag('div','inc_pdp_bundle_cart_added_product_block')
        let findObj = new INC.classes.FindObj({ id: productId });
        let productObj = INC.dataStore.methods().getProductById(findObj);
        addedProductBlock.setAttribute('data-id', productObj.id);
        addedProductBlock.setAttribute('data-sku', productObj.sku);
        addedProductBlock.setAttribute('data-main_id', productObj.mainId);
        addedProductBlock.setAttribute('data-bundle_id', productObj.bundleId);

        let prod_module_elm = document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="' + productObj.mainId + '"]')
        let modal_attr_block = prod_module_elm.querySelector('.inc_product_modal_block')
        let zero_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-zero');
        let size_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-size');
        let color_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-color');
        let third_text = modal_attr_block.querySelector('.inc_product_desc_att_block').getAttribute('data-third');

        let sel_attr_text = ""
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
        let addedsumprodhtml = '<div class="inc_pdp_bundle_cart_added_product_img_block"><div class="inc_pdp_bundle_cart_added_product_img"><img src="'+productObj.imageURL+'" data-src="'+productObj.imageURL+'"></div></div><div class="inc_pdp_bundle_cart_added_product_title_block"><div class="inc_pdp_bundle_cart_added_product_title_text_block"><div class="inc_pdp_bundle_cart_added_product_title_text"><a title="'+productObj.name+'"><div style="text-transform: unset;"><span>'+qty+' <small>x</small> </span>'+productObj.name+'</div></a></div></div></div><div class="inc_pdp_bundle_cart_added_product_qty_block"><div class="inc_pdp_bundle_cart_added_product_qty_text_block"><div class="inc_pdp_bundle_cart_addeed_product_qty_text">'+qty+'</div></div></div><div class="inc_pdp_bundle_cart_added_product_ecirp_block"><div class="inc_pdp_bundle_cart_added_product_ecirp_text_block"><div class="inc_pdp_bundle_cart_added_product_ecirp_text">'+formatter.format(productObj.activePrice * qty)+'</div></div></div><div class="inc_pdp_bundle_cart_added_product_att_block" title="'+sel_attr_text+'"><div class="inc_pdp_bundle_cart_added_product_att_color_block"><div class="inc_pdp_bundle_cart_added_product_att_color_text_block" style="text-transform: none;">'+sel_attr_text+'</div></div><div class="inc_pdp_bundle_cart_added_product_att_size_block"><div class="inc_pdp_bundle_cart_added_product_att_size_text_block"><div class="inc_pdp_bundle_cart_added_product_att_size_text"></div></div></div></div><div class="inc_pdp_bundle_cart_added_product_edit_block"><div class="inc_pdp_bundle_cart_added_product_edit_text_block"><div class="inc_pdp_bundle_cart_added_product_edit_text"></div></div><div class="inc_pdp_bundle_cart_added_product_edit_img_block"><div class="inc_pdp_bundle_cart_added_product_edit_img"></div></div></div>'

        addedProductBlock.innerHTML = addedsumprodhtml

        addedProductBlock.querySelector('.inc_pdp_bundle_cart_added_product_img img').setAttribute('onerror',"this.src='"+INC.config.noimage+"'" )

        let elEditTextBlock = addedProductBlock.querySelector(".inc_pdp_bundle_cart_added_product_edit_text_block") 
        let elEditImgBlock = addedProductBlock.querySelector(".inc_pdp_bundle_cart_added_product_edit_img_block");
        
        elEditTextBlock.addEventListener("click", function () {
            if (INC.config.deviceType == "mobile") {
                if (document.querySelector('.inc_pdp_bundle_product_list_item_block' + '[data-main_id="' + productObj.mainId + '"]') != null)
                    document.querySelector('.inc_pdp_bundle_product_list_item_block' + '[data-main_id="' + productObj.mainId + '"]').click();
            }
            setTimeout(function () {
                document.querySelector('.inc_product_block' + '[data-id="' + productObj.id + '"]').parentNode.parentNode.querySelector('.inc_product_modal_block').classList.add('inc_active');
                document.querySelector('html').classList.add('inc_overlay');
            }, 50);
        });
        elEditImgBlock.addEventListener("click", function () {
            document.querySelector('.inc_product_block' + '[data-id="' + productObj.id + '"]').querySelector('.inc_product_desc_add_block').click();
        });
        return addedProductBlock;
    }

    INC.methods.clear = function () {
        remsidebarelm()

        if (document.querySelector('.inc_af_block') != null) {
            Array.prototype.forEach.call(document.querySelectorAll('.inc_af_block'), function (el) {
                el.parentNode.removeChild(el);
            });
        }

        if (document.querySelector('.inc_pdp_block') != null) {
            Array.prototype.forEach.call(document.querySelectorAll('.inc_pdp_block'), function (el) {
                el.parentNode.removeChild(el);
            });
        }
    }

    INC.methods.addProductToCart = function (findObjd, qty, productBlock, add_btn_click, _add_prod_im, btn_addtocart,newbtntext) {
        if(INC.config.pageType != "cartPage"){
            document.querySelector('html').classList.remove('inc_overlay')
        }
        if (qty < 1) qty = 1
        let findObj = new INC.classes.FindObj(findObjd);
        let productObj = INC.dataStore.methods().getProductById(findObj);
        let formData = []
        let mainids = productBlock.getAttribute('data-main_id')
        let args = {}
        let skuc = productObj.childsku
        args.qty = qty
        args.skuBaseId = productObj.childsku.split('-');
        args.cartId = false
        args.collectionId = false
        args.collectionName = false
        args.kitCat = ""
        args.kitSkus = skuc.replace('-',',') 
        args.kitType = skuc + "_KIT"
        let catBaseId = ""
        let params = {
            skus: [productObj.childsku],
            itemType: 'cart',
            INCREMENT: 1,
            CAT_BASE_ID: catBaseId,
            QTY: args.qty || 1,
        };
        formData.push(params)
        if(skuc.indexOf('-') >= 0){
            let args1 = {}
            let callback = '';
            let eventName = 'addToCartKitItem.success';
            args1.COLLECTION_SUBTYPE = args.kitType.replace('-','_');
            args1.COLLECTION_NAME =  args.collectionName
            args1.CAT_BASE_ID = args.kitCat;
            args1.itemType = 'kit';
        
            args1.COLLECTION_TYPE = 'UKIT';
            args1.SKU_BASE_ID = String(args.kitSkus).split(',');
            args1.INCREMENT = 0;
            args1.QTY = args.QTY ? args.QTY : 1;
            args1._SUBMIT = 'alter_collection';
            args1.HAS_MULTIPLE_SKUS = 1;
            let bits1_1 = 16 || 36;
            let mathranvalue_1 = generateRandomString(bits1_1).toString().slice(2)
            args1.COLLECTION_NAME = 'Kit ' + Math.floor((mathranvalue_1 * 10000));
            args1.action = 'add,edit,create_kit';
            if(window.site.cartConfirm != undefined){
                callback = window.site.cartConfirm.prepareCart;
            }
            window.generic.jsonrpc.fetch({
                method: 'cart',
                params: [args1],
                onFailure: function() {
                    add_btn_click.innerText = "Not Added";
                    btn_addtocart.innerText = "Not Added";
                    if(newbtntext != undefined){
                        newbtntext.innerHTML = "Not Added";
                    }
                    if (INC.config.pageType == "cartPage") {
                        if (productBlock != null) {
                            productBlock.parentNode.removeChild(productBlock);
                        }
                    }
                    if(window.innerWidth < 821){
                        if (productBlock != null) {
                            productBlock.parentNode.removeChild(productBlock);
                        }
                        if(document.querySelector('.inc_recommended_tabs_list_item_block') != null){
                            document.querySelector('.inc_recommended_tabs_list_item_block').click()
                        }
                    }
                    if (INC.config.pageType != "cartPage") {
                        setTimeout(function () {
                            loadsidebarajax()
                        },500)
                    }
                },
                onBoth: function(r) {
                    if (INC.config.pageType != "cartPage") {
                        window.$(document).trigger(eventName, {'callback': callback, 'cartResult': r.getData()});
                    }else{
                        window.location.reload()
                    }
                    INC.config.pdpaddedProductList.push(productObj.mainId)
                    INC.config.sidebarremovedprod.push(mainids)
                    
                    addsuccess_(btn_addtocart,add_btn_click,productBlock,findObj,qty)
                }
            });
        }else{
            window.generic.checkout.cart.updateCart({
                params: formData[0],
                onSuccess: function(r) {
                    setTimeout(function () {
                        let messages = r.getMessages();
                        let offerCriteriaMessages = '';
                        if (messages) {
                            messages.forEach(function(message) {
                            if (message.key === 'offer_criteria_not_met') {
                                offerCriteriaMessages = offerCriteriaMessages.concat(message.text + '<br />');
                            }
                            });
                        }
                        if (offerCriteriaMessages) {
                            window.$(document).trigger('addToCart.failure', [messages]);
                            window.generic.overlay.launch({
                            content: offerCriteriaMessages,
                            includeBackground: true,
                            cssStyle: {
                                width: '324px',
                                padding: '25px'
                            }
                            });
                        } else {
                            let resultData = r.getData();
                            if (INC.config.pageType != "cartPage") {
                                if(resultData.ac_results != undefined){
                                    window.$(document).trigger('addToCart.success', [resultData]);
                                }else{
                                    onerror_message()
                                }
                            }
                        }
                    },500)
                    INC.config.pdpaddedProductList.push(productObj.mainId)
                    INC.config.sidebarremovedprod.push(mainids)
                    
                    addsuccess_(btn_addtocart,add_btn_click,productBlock,findObj,qty)
                },
                onFailure: function(ss) {
                    add_btn_click.innerText = "Not Added";
                    btn_addtocart.innerText = "Not Added";
                    if(newbtntext != undefined){
                        newbtntext.innerHTML = "Not Added";
                    }
                    if (INC.config.pageType == "cartPage") {
                        if (productBlock != null) {
                            productBlock.parentNode.removeChild(productBlock);
                        }
                    }
                    let errorObjectsArray = ss.getMessages();
                    window.$(document).trigger('addToCart.failure', [errorObjectsArray]);
                    onerror_message(errorObjectsArray[0].text)
                    if(window.innerWidth < 821){
                        if (productBlock != null) {
                            productBlock.parentNode.removeChild(productBlock);
                        }
                        if(document.querySelector('.inc_recommended_tabs_list_item_block') != null){
                            document.querySelector('.inc_recommended_tabs_list_item_block').click()
                        }
                    }
                    if (INC.config.pageType != "cartPage") {
                        setTimeout(function () {
                            loadsidebarajax()
                        },500)
                    }
                }
            });
        }
        function addsuccess_(btn_t,addbtnt,addedprdblock,objfind,qty_added){
            INC.config.disablebtn = true
            addbtnt.innerText = "Added To Bag";
            btn_t.innerText = "Added To Bag";
            if(newbtntext != undefined){
                newbtntext.innerHTML = "Added To Bag";
            }
            if (INC.config.pageType == "cartPage") {
                if(document.querySelector('.cart-item.product') != null){
                    INC.clientConfig.offset = 0;
                    INC.clientConfig.slidevalue = 0;
                    INC.init();
                }
            }
            if(window.innerWidth < 821){
                if (INC.config.pageType != "cartPage" && !INC.config.recommendation) INC.methods.addProductToSidebarCart(objfind, qty_added,addedprdblock,null,btn_t);
            }
            if (INC.config.pageType == "cartPage" || INC.config.recommendation) {
                if(document.querySelector('.inc_product_modal_block.inc_active') != null){
                    document.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                }
                addedprdblock.querySelector('.inc_product_desc_add_text').innerText = "Added";
                if (addedprdblock != null) {
                    addedprdblock.parentNode.removeChild(addedprdblock);
                }
                if(document.querySelector('.inc_recommended_tabs_list_item_block') != null){
                    document.querySelector('.inc_recommended_tabs_list_item_block').click()
                }
                document.querySelector('html').classList.remove('inc_overlay')
            }
            setTimeout(function () {
                addbtnt.innerText = "Add To Bag";
                Array.prototype.forEach.call(addbtnt, function (el) {
                    el.innerText = "Add";
                });
                if (btn_t != undefined) {
                    if (btn_t.parentNode.parentNode != null) btn_t.parentNode.parentNode.setAttribute("style", "pointer-events: auto;opacity: 1;");
                }
                INC.config.disablebtn = true
            }, 2000);
            if (INC.config.pageType != "cartPage") {
                setTimeout(function () {
                    loadsidebarajax()
                    let allprd = document.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block').length
                    if(document.querySelector('.inc_recommended_products_list_block .inc_product_module_block') == null || allprd == 1){
                        if(document.querySelector('.inc_recommended_tabs_list_item_block.inc_active') != null){
                            let remcat = document.querySelector('.inc_recommended_tabs_list_item_block.inc_active')
                            if(remcat != null){
                            remcat.parentNode.removeChild(remcat)
                                if(document.querySelector('.inc_recommended_tabs_list_item_block') == null){
                                    window.location.href = INC.clientConfig.checkoutLink; 
                                }
                                if(document.querySelectorAll('.inc_recommended_tabs_list_item_block').length > 1){
                                    if (addedprdblock != null) {
                                        addedprdblock.parentNode.removeChild(addedprdblock);
                                    }
                                    if(document.querySelector('.inc_recommended_tabs_list_item_block') != null){
                                        document.querySelector('.inc_recommended_tabs_list_item_block').click()
                                    }
                                }else{
                                    if(document.querySelector('.inc_recommended_tabs_list_item_block') != null){
                                        document.querySelector('.inc_recommended_tabs_list_item_block').click()
                                    }
                                    document.querySelector('.inc_recommended_products_list_block').setAttribute('style','margin-left:0;')
                                }
                            }
                        }
                    }else{
                        if(document.querySelector('.inc_recommended_tabs_list_item_block') != null){
                            document.querySelector('.inc_recommended_tabs_list_item_block').click()
                        }
                    }
                },1000)
            }
        }
        document.querySelector('body').classList.remove('inc_popup_open');
        let pageType = "";
        switch (INC.config.pageType) {
            case "pdp": pageType = "107"; break;
            case "productList": pageType = "101"; break;
            case "cartPage": pageType = "103"; break;
            case "ticket": pageType = "103"; break;
            case "other": pageType = "101"; break;
        }
        setTimeout(function(){
            if (INC.config.pageType == "cartPage") {
                if(btn_addtocart.innerText == 'Adding...'){
                    add_btn_click.innerText = "Added To Bag";
                    btn_addtocart.innerText = "Added To Bag";
                    if(newbtntext != undefined){
                        newbtntext.innerHTML = "Added To Bag";
                    }
                }
                if(document.querySelector('.inc_product_modal_block.inc_active') != null){
                    document.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                }
                
                document.querySelector('html').classList.remove('inc_overlay')
                window.location.reload()
            }
        },3000)
        let eventDataObj = {};
        if(document.querySelector('.header-gnav-cart__overlay.visible') != null && INC.config.pageType == "pdp"){
            pageType = "107"
        }
        if (document.querySelector(".inc_sidebar_modal_block.inc_active") != null && INC.config.pageType != "productList") {
            pageType = "107";
        }
        if (INC.config.recommendation == falseflag && productObj.bundleId == 'undefined' || productObj.bundleId == undefined && INC.config.pageType == 'pdp') {
            let eventdata__ = {
                "core_product_id": INC.config.Product_id,
                "product_id": productObj.mainId ? productObj.mainId.toString() : "",
            }
            let rpt_val = '4'
            if (INC.config.pageType == "pdp") {
                if (INC.config.OutOfStock) {
                    rpt_val = "1";
                } else if (INC.config.recommendation == trueflag) {
                    rpt_val = "2";
                } else if (INC.config.recommendationProduct.includes(eventdata__.product_id)) {
                    rpt_val = "4";
                } else {
                    rpt_val = "3";
                }
            }
            let data__ = {
                "eventData": btoa((JSON.stringify({
                    "event_data": eventdata__,
                    "page_type": pageType,
                    "event_type": 'bestseller_add_to_cart',
                    "method": "track",
                    "platform": "",
                    "token": INC.config.clientToken,
                    "rt": "8",
                    "rpt": rpt_val

                }))),
                "vid": readCookie('ivid'),
                "time": getCurrentFormattedTime(),
                "uri": document.location.href
            };
            makeTrackingApiCall(JSON.stringify(data__));
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
    INC.methods.addBundleToCart = function (btn_cart) {
        INC.clientConfig.OOS = []
        let dataStore = INC.dataStore;
        let mainProductId = document.querySelector('.inc_pdp_product-main_block .inc_product_module_block').getAttribute('data-main_id');
        let formData = []
        let count_pr_to_add = 0
        let total_length = Object.keys(dataStore.bundleCartProducts);
        Object.keys(dataStore.bundleCartProducts).forEach(function (bundleCartProduct) {
            let findObj = new INC.classes.FindObj({ id: bundleCartProduct });
            let productObj = INC.dataStore.methods().getProductById(findObj);
            let args = {}
            let skuc = productObj.childsku
            args.qty = dataStore.bundleCartProducts[bundleCartProduct]
            args.skuBaseId = productObj.childsku.split('-');
            args.cartId = false
            args.collectionId = false
            args.collectionName = false
            args.kitCat = ""
            args.kitSkus = skuc.replace('-',',') 
            args.kitType = skuc + "_KIT"
            
            let catBaseId = ""
            let params = {
                skus: [productObj.childsku],
                itemType: 'cart',
                INCREMENT: 1,
                CAT_BASE_ID: catBaseId,
                QTY: args.qty || 1,
            };
            if(skuc.indexOf('-') >= 0){
                let args1 = {}
                args1.COLLECTION_SUBTYPE = args.kitType.replace('-','_');
                args1.COLLECTION_NAME =  args.collectionName
                args1.CAT_BASE_ID = args.kitCat;
                args1.itemType = 'kit';
            
                args1.COLLECTION_TYPE = 'UKIT';
                args1.SKU_BASE_ID = String(args.kitSkus).split(',');
                args1.INCREMENT = 0;
                args1.QTY = args.QTY ? args.QTY : 1;
                args1._SUBMIT = 'alter_collection';
                args1.HAS_MULTIPLE_SKUS = 1;
                let bits1_ = 16 || 36;
                let mathranvalue_ = generateRandomString(bits1_).toString().slice(2)
                args1.COLLECTION_NAME = 'Kit ' + Math.floor((mathranvalue_ * 10000));
                args1.action = 'add,edit,create_kit';
                formData.push(args1);
            }else{
                formData.push(params)
            }
            count_pr_to_add++
            if (total_length.length == count_pr_to_add) {
                ajax_add_to_cart(formData, btn_cart)
            }
        });
        add_to_cart_tracking_multiple(mainProductId)
    }
    function onerror_message(error_mesg){
        let inc_div_er = document.createElement('div')
        document.querySelector('body').appendChild(inc_div_er);
        let mesgty = ""
        if(error_mesg != undefined){
            mesgty = error_mesg
        }else{
            mesgty = INC.config.ajaxerr
        }
        let styleObj = {};
        let cssClass = "";
        styleObj.width = "324px";
        styleObj.padding = "25px";
        inc_div_er.textContent = mesgty
        let content = inc_div_er;
        window.generic.overlay.launch({
            content: content,
            includeBackground: true,
            cssStyle: styleObj,
            cssClass: cssClass 
        });
    }
    function ajax_add_to_cart(formData, btn_cart) {
        INC.clientConfig.OOS = []
        INC.clientConfig.OOS_MESG = []
        callprodA()
        let callback = '';
        let eventName = 'addToCartKitItem.success';
        if(window.site.cartConfirm != undefined){
            callback = window.site.cartConfirm.prepareCart;
        }
        function callprodA() {
            if(formData[0].itemType == "kit"){
                window.generic.jsonrpc.fetch({
                    method: 'cart',
                    params: [formData[0]],
                    onFailure: function(ss) {
                        console.log(ss.getMessages());
                        if (formData[1] == undefined) {
                            loadsidebarajax(btn_cart)
                        }
                        if (formData[1] != undefined) {
                            callprodB()
                        }
                    },
                    onBoth: function(r) {
                        if (formData[1] == undefined) {
                            window.$(document).trigger(eventName, {'callback': callback, 'cartResult': r.getData()});
                        }
                        if (formData[1] == undefined) {
                            loadsidebarajax(btn_cart)
                        }
                        if (formData[1] != undefined) {
                            callprodB()
                        }
                    }
                });
            }else{
                window.generic.checkout.cart.updateCart({
                    params: formData[0],
                    onSuccess: function(r) {
                        let messaged = r.getMessages();
                        let offerCriteriaMessages = '';
                        if (messaged) {
                            messaged.forEach(function(messages) {
                                if (messages.key === 'offer_criteria_not_met') {
                                    offerCriteriaMessages = offerCriteriaMessages.concat(messages.text + '<br />');
                                }
                            });
                        }
                        if (offerCriteriaMessages) {
                            window.$(document).trigger('addToCart.failure', [messaged]);
                            window.generic.overlay.launch({
                            content: offerCriteriaMessages,
                            includeBackground: true,
                            cssStyle: {
                                width: '324px',
                                padding: '25px'
                            }
                            });
                        } else {
                            let resultData = r.getData();
                            if(window.innerWidth > 820){
                                if (formData[1] == undefined) {
                                    if(resultData.ac_results != undefined){
                                        window.$(document).trigger('addToCart.success', [resultData]);
                                    }else{
                                        onerror_message()
                                    }
                                }
                            }else{
                                if(resultData.ac_results != undefined){
                                    window.$(document).trigger('addToCart.success', [resultData]);
                                }else{
                                    onerror_message()
                                }
                            }
                        }
                        if (formData[1] == undefined) {
                            loadsidebarajax(btn_cart)
                        }
                        if (formData[1] != undefined) {
                            callprodB()
                        }
                    },
                    onFailure: function(ss) {
                        let errorObjectsArray = ss.getMessages();
                        window.$(document).trigger('addToCart.failure', [errorObjectsArray]);
                        onerror_message(errorObjectsArray[0].text)
                        if (formData[1] == undefined) {
                            loadsidebarajax(btn_cart)
                        }
                        if (formData[1] != undefined) {
                            callprodB()
                        }
                    }
                });
            }
        }
        function callprodB() {
            if(formData[1].itemType == "kit"){
                window.generic.jsonrpc.fetch({
                    method: 'cart',
                    params: [formData[1]],
                    onFailure: function(ss) {
                        console.log(ss.getMessages());
                        if (formData[2] == undefined) {
                            loadsidebarajax(btn_cart)
                        }
                        if (formData[2] != undefined) {
                            callprodB()
                        }
                    },
                    onBoth: function(r) {
                        if (formData[2] == undefined) {
                            window.$(document).trigger(eventName, {'callback': callback, 'cartResult': r.getData()});
                        }
                        if (formData[2] == undefined) {
                            loadsidebarajax(btn_cart)
                        }
                        if (formData[2] != undefined) {
                            callprodB()
                        }
                    }
                });
            }else{
                window.generic.checkout.cart.updateCart({
                    params: formData[1],
                    onSuccess: function(r) {
                        let messaged1 = r.getMessages();
                        let offerCriteriaMessages = '';
                        if (messaged1) {
                            messaged1.forEach(function(messagee) {
                            if (messagee.key === 'offer_criteria_not_met') {
                                offerCriteriaMessages = offerCriteriaMessages.concat(messagee.text + '<br />');
                            }
                            });
                        }
                        if (offerCriteriaMessages) {
                            window.$(document).trigger('addToCart.failure', [messaged1]);
                            window.generic.overlay.launch({
                            content: offerCriteriaMessages,
                            includeBackground: true,
                            cssStyle: {
                                width: '324px',
                                padding: '25px'
                            }
                            });
                        } else {
                            let resultData = r.getData();
                            if(resultData.ac_results != undefined){
                                if(window.innerWidth > 820){
                                    if (formData[2] == undefined) {
                                        window.$(document).trigger('addToCart.success', [resultData]);
                                    }
                                }else{
                                    setTimeout(function(){
                                        window.$(document).trigger('addToCart.success', [resultData]);
                                    },500)
                                }
                            }else{
                                onerror_message()
                            }
                        }
                        if (formData[2] == undefined) {
                            loadsidebarajax(btn_cart)
                        }
                        if (formData[2] != undefined) {
                            callprodC()
                        }
                    },
                    onFailure: function(ss) {
                        let errorObjectsArray = ss.getMessages();
                        window.$(document).trigger('addToCart.failure', [errorObjectsArray]);
                        onerror_message(errorObjectsArray[0].text)
                        if (formData[2] == undefined) {
                            loadsidebarajax(btn_cart)
                        }
                        if (formData[2] != undefined) {
                            callprodC()
                        }
                    }
                });
            }
        }
        function callprodC() {
            if(formData[2].itemType == "kit"){
                window.generic.jsonrpc.fetch({
                    method: 'cart',
                    params: [formData[2]],
                    onFailure: function(ss) {
                        console.log(ss.getMessages());
                        if (formData[3] == undefined) {
                            loadsidebarajax(btn_cart)
                        }
                        if (formData[3] != undefined) {
                            callprodB()
                        }
                    },
                    onBoth: function(r) {
                        if (formData[3] == undefined) {
                            window.$(document).trigger(eventName, {'callback': callback, 'cartResult': r.getData()});
                        }
                        if (formData[3] == undefined) {
                            loadsidebarajax(btn_cart)
                        }
                        if (formData[3] != undefined) {
                            callprodB()
                        }
                    }
                });
            }else{
                window.generic.checkout.cart.updateCart({
                    params: formData[2],
                    onSuccess: function(r) {
                        let messages = r.getMessages();
                        let offerCriteriaMessages = '';
                        if (messages) {
                            messages.forEach(function(message1) {
                            if (message1.key === 'offer_criteria_not_met') {
                                offerCriteriaMessages = offerCriteriaMessages.concat(message1.text + '<br />');
                            }
                            });
                        }
                        if (offerCriteriaMessages) {
                            window.$(document).trigger('addToCart.failure', [messages]);
                            window.generic.overlay.launch({
                            content: offerCriteriaMessages,
                            includeBackground: true,
                            cssStyle: {
                                width: '324px',
                                padding: '25px'
                            }
                            });
                        } else {
                            let resultData = r.getData();
                            if(resultData.ac_results != undefined){
                                if (formData[3] == undefined) {
                                    window.$(document).trigger('addToCart.success', [resultData]);
                                }
                            }else{
                                onerror_message()
                            }
                        }
                        if (formData[3] == undefined) {
                            loadsidebarajax(btn_cart)
                        }
                        if (formData[3] != undefined) {
                            callprodD()
                        }
                    },
                    onFailure: function(ss) {
                        let errorObjectsArray = ss.getMessages();
                        window.$(document).trigger('addToCart.failure', [errorObjectsArray]);
                        onerror_message(errorObjectsArray[0].text)
                        if (formData[3] == undefined) {
                            loadsidebarajax(btn_cart)
                        }
                        if (formData[3] != undefined) {
                            callprodD()
                        }
                    }
                });
            }
        }
        function callprodD() {
            if(formData[3].itemType == "kit"){
                window.generic.jsonrpc.fetch({
                    method: 'cart',
                    params: [formData[3]],
                    onFailure: function(ss) {
                        console.log(ss.getMessages());
                        if (formData[4] == undefined) {
                            loadsidebarajax(btn_cart)
                        }
                        if (formData[4] != undefined) {
                            callprodB()
                        }
                    },
                    onBoth: function(r) {
                        if (formData[4] == undefined) {
                            window.$(document).trigger(eventName, {'callback': callback, 'cartResult': r.getData()});
                        }
                        if (formData[4] == undefined) {
                            loadsidebarajax(btn_cart)
                        }
                        if (formData[4] != undefined) {
                            callprodB()
                        }
                    }
                });
            }else{
                window.generic.checkout.cart.updateCart({
                    params: formData[3],
                    onSuccess: function(r) {
                        let messages = r.getMessages();
                        let offerCriteriaMessages = '';
                        if (messages) {
                            messages.forEach(function(message2) {
                                if (message2.key === 'offer_criteria_not_met') {
                                    offerCriteriaMessages = offerCriteriaMessages.concat(message2.text + '<br />');
                                }
                            });
                        }
                        if (offerCriteriaMessages) {
                            window.$(document).trigger('addToCart.failure', [messages]);
                            window.generic.overlay.launch({
                            content: offerCriteriaMessages,
                            includeBackground: true,
                            cssStyle: {
                                width: '324px',
                                padding: '25px'
                            }
                            });
                        } else {
                            let resultData = r.getData();
                            if(resultData.ac_results != undefined){
                                if (formData[4] == undefined) {
                                    window.$(document).trigger('addToCart.success', [resultData]);
                                }
                            }else{
                                onerror_message()
                            }
                        }
                        if (formData[4] == undefined) {
                            loadsidebarajax(btn_cart)
                        }
                        if (formData[4] != undefined) {
                            callprodE()
                        }
                    },
                    onFailure: function(ss) {
                        let errorObjectsArray = ss.getMessages();
                        window.$(document).trigger('addToCart.failure', [errorObjectsArray]);
                        onerror_message(errorObjectsArray[0].text)
                        if (formData[4] == undefined) {
                            loadsidebarajax(btn_cart)
                        }
                        if (formData[4] != undefined) {
                            callprodE()
                        }
                    }
                });
            }
        }
        function callprodE() {
            if(formData[4].itemType == "kit"){
                window.generic.jsonrpc.fetch({
                    method: 'cart',
                    params: [formData[4]],
                    onFailure: function(ss) {
                        console.log(ss.getMessages());
                        if (formData[5] == undefined) {
                            loadsidebarajax(btn_cart)
                        }
                        if (formData[5] != undefined) {
                            callprodB()
                        }
                    },
                    onBoth: function(r) {
                        if (formData[5] == undefined) {
                            window.$(document).trigger(eventName, {'callback': callback, 'cartResult': r.getData()});
                        }
                        if (formData[5] == undefined) {
                            loadsidebarajax(btn_cart)
                        }
                        if (formData[5] != undefined) {
                            callprodB()
                        }
                    }
                });
            }else{
                window.generic.checkout.cart.updateCart({
                    params: formData[4],
                    onSuccess: function(r) {
                        let messages = r.getMessages();
                        let offerCriteriaMessages = '';
                        if (messages) {
                            messages.forEach(function(message3) {
                            if (message3.key === 'offer_criteria_not_met') {
                                offerCriteriaMessages = offerCriteriaMessages.concat(message3.text + '<br />');
                            }
                            });
                        }
                        if (offerCriteriaMessages) {
                            window.$(document).trigger('addToCart.failure', [messages]);
                            window.generic.overlay.launch({
                            content: offerCriteriaMessages,
                            includeBackground: true,
                            cssStyle: {
                                width: '324px',
                                padding: '25px'
                            }
                            });
                        } else {
                            let resultData = r.getData();
                            if(resultData.ac_results != undefined){
                                if (formData[5] == undefined) {
                                    window.$(document).trigger('addToCart.success', [resultData]);
                                }
                            }else{
                                onerror_message()
                            }
                        }
                        if (formData[5] == undefined) {
                            loadsidebarajax(btn_cart)
                        }
                        if (formData[5] != undefined) {
                            callprodF()
                        }
                    },
                    onFailure: function(ss) {
                        let errorObjectsArray = ss.getMessages();
                        window.$(document).trigger('addToCart.failure', [errorObjectsArray]);
                        onerror_message(errorObjectsArray[0].text)
                        if (formData[5] == undefined) {
                            loadsidebarajax(btn_cart)
                        }
                        if (formData[5] != undefined) {
                            callprodF()
                        }
                    }
                });
            }
        }
        function callprodF() {
            if(formData[5].itemType == "kit"){
                window.generic.jsonrpc.fetch({
                    method: 'cart',
                    params: [formData[5]],
                    onFailure: function(ss) {
                        console.log(ss.getMessages());
                        loadsidebarajax(btn_cart)
                    },
                    onBoth: function(r) {
                        window.$(document).trigger(eventName, {'callback': callback, 'cartResult': r.getData()});
                        loadsidebarajax(btn_cart)
                    }
                });
            }else{
                window.generic.checkout.cart.updateCart({
                    params: formData[5],
                    onSuccess: function(r) {
                        let messages = r.getMessages();
                        let offerCriteriaMessages = '';
                        if (messages) {
                            messages.forEach(function(messageq) {
                            if (messageq.key === 'offer_criteria_not_met') {
                                offerCriteriaMessages = offerCriteriaMessages.concat(messageq.text + '<br />');
                            }
                            });
                        }
                        if (offerCriteriaMessages) {
                            window.$(document).trigger('addToCart.failure', [messages]);
                            window.generic.overlay.launch({
                            content: offerCriteriaMessages,
                            includeBackground: true,
                            cssStyle: {
                                width: '324px',
                                padding: '25px'
                            }
                            });
                        } else {
                            let resultData = r.getData();
                            if(resultData.ac_results != undefined){
                                window.$(document).trigger('addToCart.success', [resultData]);
                            }else{
                                onerror_message()
                            }
                        }
                        loadsidebarajax(btn_cart)
                    },
                    onFailure: function(ss) {
                        let errorObjectsArray = ss.getMessages();
                        window.$(document).trigger('addToCart.failure', [errorObjectsArray]);
                        onerror_message(errorObjectsArray[0].text)
                        loadsidebarajax(btn_cart)
                    }
                });
            }
        }
        let timer_count = 0;
        let checkpopup = setInterval(function(){
            timer_count++
            if(document.querySelector('.cart-confirm-wrapper .item.js-item') != null){
                clearInterval(checkpopup)
                if(window.innerWidth < 768){
                    document.querySelector('.cart-confirm-wrapper .item.js-item').innerHTML = "<b>Success!</b>" + " 2 item's has been added to your bag."
                }else{
                    document.querySelector('.cart-confirm-wrapper .item.js-item').innerHTML = "<b>Success!</b>" + " "+ INC.config.bundle_tracking.length+" item's has been added to your bag."
                } 
            }
            if (timer_count * 100 > 20000) {
                clearInterval(checkpopup)
            }
        },10)
    }
    function loadsidebarajax(btn_cart){
        INC.config.disablebtn = true
        if (btn_cart != undefined) {
            btn_cart.classList.remove('inc_loading')
        }
        if(document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading') != null){
            document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading').classList.remove('inc_loading')
        }
        if(document.querySelector('.inc_recommended_tabs_list_item_block') == null){   
            window.$("html, body").animate({ scrollTop: 0 }, "slow");            
        }
        
        if(window.innerWidth > 767 || document.querySelector('.device-mobile') == null){
            let checkcartpopup = setInterval(function(){
                if(document.querySelector('body.active-gnav') != null && document.querySelector('.header-gnav-cart__overlay') != null && document.querySelector('.js-header-gnav-cart__overlay.visible') != null){
                    clearInterval(checkcartpopup)
                    setTimeout(function(){
                        reinitsidebar()
                    },700)
                }
            },200)
        }else{
            if(document.querySelector('.sidebar_outer.sidebar_outer_active') == null && document.querySelector('.device-mobile') != null){
                checkAddedProductInJustAdded()
                INC.methods.showSidebar();
                INC.methods.updateSidebarBlock()
            }
        }
    }
    function checkAddedProductInJustAdded(){
        let addCheckCategory = INC.config.pdpaddedProductList;
        let productListArrayprod = INC.dataStore.bundleProductsArray;
        let categoryList = INC.dataStore.methods().getUniqueCatergories();
        for(let catlist of categoryList) {
            let count = 0;
            for(let prdlistar of productListArrayprod) {
                let firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: prdlistar });
                if (firstProductObjByMainId["categoryName"] == catlist) {
                    if (addCheckCategory.indexOf(prdlistar) == -1) {
                        count++
                    }
                }
            }
            if (count == 0) {
                if (document.querySelector('.inc_recommended_tabs_list_item_block[title="' + catlist + '"]') != null) {
                    let categrem = document.querySelector('.inc_recommended_tabs_list_item_block[title="' + catlist + '"]')
                    if (categrem != null) {
                        categrem.parentNode.removeChild(categrem)
                    }
                }
            }
        }
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;

        if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
            document.querySelector('.inc_recommended_tabs_list_item_block').click()
            if (document.querySelector('.inc_recommended_products_list_block .inc_product_module_block') == null) {
                let remcateg = document.querySelector('.inc_recommended_tabs_list_item_block.inc_active')
                if (remcateg != null) {
                    remcateg.parentNode.removeChild(remcateg)
                }
            }
        }
    }
    function add_to_cart_tracking_multiple(mainProductId) {
        let event_type = "bundle_add_to_cart";
        let core_prod_id = "";
        let productIdsforTracking = []
        core_prod_id = mainProductId;

        let pageType = "100";
        let all_data = [];
        for(let trkdata of INC.config.bundle_tracking) {
            let bundlePos = 0
            let bundleProdsList = document.querySelectorAll('.inc_pdp_bundle_block .inc_product_module_block')
            let prodBlock = document.querySelector('.inc_pdp_bundle_block .inc_product_module_block[data-main_id="' + trkdata.id + '"]')

            for(let index in bundleProdsList) {
                if (bundleProdsList[index] == prodBlock) {
                    bundlePos = index
                    break
                }
            }
            if (INC.config.bundle_tracking.length == 1) {
                productIdsforTracking.push(mainProductId)
                productIdsforTracking.push(trkdata.id)
                all_data.push({
                    id: parseInt(trkdata.bid),
                    product_ids: productIdsforTracking,
                    product_id: core_prod_id,
                    bundle_pos: (bundlePos > 1) ? parseInt(bundlePos) : 1
                })
                productIdsforTracking = []
            } else {
                if (mainProductId != trkdata.id) {
                    productIdsforTracking.push(mainProductId)
                    productIdsforTracking.push(trkdata.id)
                    all_data.push({
                        id: parseInt(trkdata.bid),
                        product_ids: productIdsforTracking,
                        product_id: core_prod_id,
                        bundle_pos: (bundlePos > 1) ? parseInt(bundlePos) : 1
                    })
                    productIdsforTracking = []
                }
            }
        }
        let dbCount = document.querySelectorAll('.inc_pdp_bundle_product_list_main_block .inc_product_module_block').length
        let data = {
            "eventData": btoa((JSON.stringify({
                "event_data": {
                    "bundle_data": all_data
                },
                "page_type": pageType.toString(),
                "event_type": event_type,
                "method": "track",
                "platform": "",
                "token": INC.config.clientToken,
                "mb": "1",
                "db": dbCount.toString(),
            }))),
            "vid": INC.config.ivid,
            "time": getCurrentFormattedTime(),
            "uri": document.location.href
        };
        makeTrackingApiCall(JSON.stringify(data));


    }
    function makeTrackingApiCall(eventdata) {
        let p_url = '//optimizedby.increasingly.co/ImportData';
        let xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status === 200) {
                if (xhr.responseText != "" && xhr.responseText != null) {
                    let resul = xhr.responseText;
                    console.log("track" + resul)
                }
            }
        };
        xhr.open("POST", p_url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(eventdata);
    }
    function reinitsidebar(){
        INC.methods.createSidebarBlock();
        checkAddedProductInJustAdded()
        INC.methods.showSidebar();
        document.querySelector('html').classList.remove('inc_overlay')
    }
    function getCurrentFormattedTime() {
        let d = new Date();
        return (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds());
    }
    INC.methods.trackingEvents = function (eventType, eventDataObj, pageType) {
        let importEventDataObj = {};
        let importDataObj = {};

        importEventDataObj["event_data"] = eventDataObj;
        let trueflag_ = true
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
                if ((INC.config.recommendation == trueflag_ || INC.config.recommendationProduct.includes(eventDataObj.product_id)) && INC.config.pageType == "pdp") {
                    importEventDataObj["rt"] = "8";
                    if (INC.config.pageType == "pdp") {
                        if (INC.config.OutOfStock) {
                            importEventDataObj["rpt"] = "1";
                        } else if (INC.config.recommendation == trueflag_) {
                            importEventDataObj["rpt"] = "2";
                        } else if (INC.config.recommendationProduct.includes(eventDataObj.product_id)) {
                            importEventDataObj["rpt"] = "4";
                        } else {
                            importEventDataObj["rpt"] = "3";
                        }
                    }

                }
                if (pageType == "100" && !INC.config.recommendationProduct.includes(eventDataObj.product_id)) {
                    importEventDataObj["db"] = INC.config.db_products.toString();
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
        let xhr = new XMLHttpRequest();
        let method = "POST";
        let url = INC.config.trackingURL;
        xhr.onreadystatechange = handleStateChange;

        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        function handleStateChange() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                console.log(xhr.responseText);
            }
        }
        xhr.send(JSON.stringify(importDataObj));
    }
    INC.methods.addVisitorID = function () {
        function generateUniqueINCVisitorId(len, bits) {
            let bits1 = bits || 36;
            let outStr = "";
            let newStr;
            while (outStr.length < len) {
                newStr = generateRandomString(bits1).toString().slice(2);
                outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
            }
            return outStr;
        }
        let ivid = "";
        if (readCookie('ivid') != undefined) {
            ivid = readCookie('ivid')
        }
        let clientdomain = window.location.host
        let arr = clientdomain.split(".");
        let d = new Date();
        let expires = "expires=" + d.toUTCString();
        if (ivid.length == 0) {
            ivid = generateUniqueINCVisitorId(42, 16);
            arr.shift();
            clientdomain = arr.join(".");
            if (arr == 'com') {
                clientdomain = window.location.host;
            }
            d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
            expires = "expires=" + d.toUTCString();
            document.cookie = 'ivid=' + ivid + '; expires=' + expires + '; domain=' + clientdomain + '; path=/' + '; secure;'
        } else {
            arr.shift();
            clientdomain = arr.join(".");
            if (arr == 'com') {
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
        let clickedElement = e.target;
        let trf=true;
        let flfalse=false;
        if (clickedElement != null) {
            try {
                if (clickedElement.className == "inc_product_modal_block inc_active") {
                    document.querySelector('body').classList.remove('inc_popup_open');
                    if (document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                        document.querySelector('html').classList.remove('inc_overlay');
                        document.querySelector('html').classList.remove('inc_popup_open');
                    }
                    if(inc_scroll_height > 100){
                        window.scrollTo(0,inc_scroll_height);
                    }
                    clickedElement.querySelector('.inc_product_header_title_block').classList.add('inc_active');
                    clickedElement.querySelector('.inc_product_header_title_block_1').classList.remove('inc_active');
                    clickedElement.classList.remove('inc_active')
                }
                
                if(clickedElement.classList.contains('quick_view_open') == trf){
                    if(document.querySelector('.inc_details_mobile_quick_view.quick_view_active') != null){
                        document.querySelector('.inc_details_mobile_quick_view.quick_view_active .prod_quick_view_close').click()
                    }
                }
                if (clickedElement.className == "inc_empty_popup") {
                    if (document.querySelector('.inc_product_modal_block.inc_active') == null && document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                        document.querySelector('html').classList.remove('inc_overlay')
                        document.querySelector('html').classList.remove('inc_popup_open');
                    }
                    if (clickedElement.parentNode.querySelector('.inc_product_desc_att_block').classList.contains('inc_active')) {
                        clickedElement.parentNode.querySelector('.inc_product_desc_att_block').classList.remove('inc_active')
                    }
                }
                if (document.querySelector('.inc_product_modal_block.inc_active') != null) {
                    if (clickedElement.parentNode.classList == "inc_product_desc_att_color_list_item_img" || clickedElement.classList == "inc_product_desc_att_color_list_item_img" || clickedElement.parentNode.classList == "inc_product_desc_att_zero_list_block" || clickedElement.classList == "inc_product_desc_att_zero_list_block") {
                        document.querySelector('.inc_product_desc_att_block .show_dropdown').classList.remove('show_dropdown')
                    }
                }
                if(clickedElement != null){
                    if (clickedElement.classList == "inc_product_desc_add_img" && document.querySelector('.inc_product_modal_block .inc_product_desc_att_block .show_dropdown') != null) {
                        if (window.innerWidth > 1300) {
                            document.querySelector('.inc_product_modal_block .inc_product_desc_att_block .show_dropdown').classList.remove('show_dropdown');
                        }
                    }
                    if (clickedElement.className == "inc_product_header_img") {
                        document.querySelector('.inc_product_header_title_block').classList.add('inc_active');
                        document.querySelector('.inc_product_header_title_block_1').classList.remove('inc_active');
                        document.querySelector('body').classList.remove('inc_popup_open');
                    }
                    
                    if (clickedElement.className == "sidebar_outer sidebar_outer_active" || clickedElement.classList.contains('js-gnav-header-formatter__bg-full-width') == trf || clickedElement.classList.contains('gnav-header-formatter__close-icon') == trf || clickedElement.classList.contains('js-header-gnav-cart__close') == trf) {
                        if(document.querySelector('.inc_header_continue_img') != null){
                            document.querySelector('.inc_header_continue_img').click()
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
                        if (clickedElement.className != "inc_product_desc_att_color_title_text_block" && clickedElement.className != "inc_product_desc_att_color_title_text_selected" && clickedElement.parentNode.className != "inc_product_desc_att_color_title_text_block" && clickedElement.className != "inc_product_desc_att_zero_title_text" && clickedElement.className != "inc_product_desc_att_zero_title_text_block" && clickedElement.className != "inc_product_desc_add_block" && clickedElement.className != "inc_product_desc_add_text" && clickedElement.className != "img_color_swatch" && clickedElement.className != "inc_product_desc_att_zero_title_text_selected" && clickedElement.classList.contains('inc_product_desc_att_color_list_item_img') != trf && clickedElement.classList.contains('inc_product_desc_att_zero_title_text_selected') != trf) {
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
                    if (document.querySelector('.sidebar_outer.sidebar_outer_active .inc_product_modal_block.inc_active') == null) {
                        if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
                            if (document.querySelector('.inc_cart_added_product_block.remove_product_conf_modal') == null) {
                                if (document.querySelector('.inc_promo_popup.inc_active') == null) {
                                    document.querySelector('.inc_sidebar_modal_block.inc_active').classList.remove('overflow_visible')
                                }
                            }
                        }
                    } else if (document.querySelector('.sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block .inc_product_modal_block.inc_active') != null) {
                        document.querySelector('.sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block').classList.add('overflow_visible')
                        document.querySelector('body').classList.add('inc_popup_open');
                    }
                    if (clickedElement.className != "inc_product_details_prod_block" && clickedElement.className != "inc_product_variant_simple_block" && clickedElement.className != "inc_product_variant_simple_text config" && clickedElement.className != "inc_product_desc_variant_popup_close_block" && clickedElement.className != "inc_product_desc_add_title_text_block" && clickedElement.tagName != "SELECT" && clickedElement.className != "inc_product_header_block active" && clickedElement.className != "inc_product_desc_att_color_list_item_img_block active" && clickedElement.className != "inc_product_desc_att_block attributes_avail active" && clickedElement.className != "inc_product_qty_block active" && clickedElement.tagName != "LABEL" && clickedElement.tagName != "INPUT" && clickedElement.className != "inc_product_qty_block" && clickedElement.className != "inc_product_desc_att_color_list_item_img_block" && clickedElement.className != "inc_product_header_block" && clickedElement.className != "select_option_inc_title" && clickedElement.className != "inc_product_desc_att_color_list_item_img" && clickedElement.className != "inc_product_desc_att_color_title_text" && clickedElement.className != "inc_product_desc_att_color_list_block" && clickedElement.classList.contains('inc_product_desc_att_block') == flfalse && clickedElement.className != "select_option_inc_block" && clickedElement.className != "inc_product_desc_att_color_title_text_block" && clickedElement.className != "inc_product_desc_att_variant_text" && clickedElement.className != "inc_product_desc_add_img" &&clickedElement.className != "inc_product_qty_up_btn" && clickedElement.className != "inc_product_qty_down_btn") {
                        if (clickedElement.classList != undefined) {
                            if (clickedElement.classList.contains('variantoption') == flfalse && clickedElement.classList.contains('inc_product_desc_att_size_list_item_img_block') == flfalse && clickedElement.classList.contains('inc_product_desc_att_color_list_block') == flfalse && clickedElement.className != "inc_product_desc_add_img checked" && clickedElement.classList.contains('inc_product_desc_add_block') == flfalse && clickedElement.classList.contains('inc_pdp_bundle_cart_added_product_edit_img') == flfalse && clickedElement.className != "inc_product_desc_att_color_title_block" && clickedElement.className != "inc_product_desc_qty_up_btn" && clickedElement.className != "inc_product_desc_qty_down_btn" && clickedElement.classList.contains('inc_product_desc_att_color_block') == flfalse && clickedElement.classList.contains('inc_product_desc_att_color_list_item_block') == flfalse && clickedElement.classList.contains('inc_product_desc_att_zero_title_text_selected') == flfalse && clickedElement.classList.contains('inc_product_desc_att_zero_title_text') == flfalse && clickedElement.classList.contains('inc_product_desc_att_size_list_item_img') == flfalse && clickedElement.classList.contains('inc_product_desc_att_color_list_item_img') != trf) {
                                let allact = document.querySelectorAll('.inc_product_desc_att_block.inc_active')

                                if (document.querySelector('.inc_product_modal_block.inc_active') == null && document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                                    document.querySelector('html').classList.remove('inc_overlay');
                                    document.querySelector('body').classList.remove('inc_popup_open');
                                }
                                for(let actelm of allact) {
                                    actelm.classList.remove('inc_active')
                                }

                                if (document.querySelector('.inc_product_block.show_overlay') != null) {
                                    document.querySelector('.inc_product_block.show_overlay').classList.remove('show_overlay')
                                }
                            }
                        }
                    }
                    if(INC.config.pageType == "pdp"){
                        if(clickedElement.classList.contains('js-add-to-bag-button') == trf && clickedElement.getAttribute('data-test-id') == "add_to_bag_btn" || clickedElement.classList.contains('js-btn-add-to-bag') == trf && clickedElement.getAttribute('data-test-id') == "add-to-cart"){
                            if(window.innerWidth > 767){
                                let checkpdpcartopen = setInterval(function(){
                                    if(document.querySelector('body.active-gnav') != null && document.querySelector('.header-gnav-cart__overlay') != null && document.querySelector('.js-header-gnav-cart__overlay.visible') != null){
                                        clearInterval(checkpdpcartopen)
                                        if(INC.dataStore.bundleProductsArray != undefined){
                                            pdp_listeners() 
                                        }
                                    }
                                },100)
                            }else{
                                let findObj = new INC.classes.FindObj();
                                let p_ids = INC.methods.getProductIdFromWebPage()
                                findObj["id"] = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: p_ids }).id;
                                let qty = document.querySelector('p[data-test-id="cart_product_quantity"]').innerText.trim()
                                let orgprice = 0
                                let activeprice = 0
                                if(document.querySelector('.elc-product-prices-wrapper .js-product-original-price') != null){
                                    orgprice = document.querySelector('.elc-product-prices-wrapper .js-product-original-price').innerText.replace('£','')
                                }
                                if(document.querySelector('.elc-product-prices-wrapper .js-product-price') != null){
                                    activeprice = document.querySelector('.elc-product-prices-wrapper .js-product-price').innerText.replace('£','')
                                }
                                INC.methods.addProductToSidebarCart(findObj, qty, null, "client_add_btn",null,activeprice,orgprice);
                                INC.methods.showSidebar("clientBtn");
                            }
                        }  
                        if(clickedElement.parentNode != null){
                            if(clickedElement.classList.contains('js-shade-picker-item-name') == trf || clickedElement.classList.contains('js-shade-swatch--image-wrapper') == trf || clickedElement.classList.contains('elc-shade-picker-item--selected') == trf || clickedElement.classList.contains('js-dropdown-option') == trf || clickedElement.parentNode.parentNode.classList.contains('sells-with-grid') == trf || clickedElement.parentNode.classList.contains('sells-with-grid') == trf || clickedElement.classList.contains('sells-with-grid') == trf){
                                let textsel = clickedElement.textContent.trim()
                                if(textsel == ""){
                                    textsel = clickedElement.parentNode.textContent.trim()
                                }
                                let imgscrsel = ""
                                if(clickedElement.tagName == "IMG"){
                                    imgscrsel = clickedElement.src
                                }else if(clickedElement.querySelector('img') != null){
                                    imgscrsel = clickedElement.querySelector('img').src
                                }
                                let all_list_el = document.querySelectorAll('.inc_pdp_product-main_block .inc_product_showcase_block')
                                if(textsel != undefined){
                                    textsel = textsel.trim().toLocaleLowerCase()
                                }
                                for(let alistel of all_list_el) {
                                    if(alistel.querySelector('.inc_product_desc_att_zero_block.inc_active') != null){
                                        if(imgscrsel == ""){
                                            if(alistel.querySelector('.inc_product_desc_att_size_list_item_img_block[datasize="'+textsel+'"] div') != undefined){
                                                alistel.querySelector('.inc_product_desc_att_size_list_item_img_block[datasize="'+textsel+'"] div').click()
                                            }else if(alistel.querySelector('.inc_product_desc_att_color_block.inc_active') != null){
                                                if(alistel.querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="'+textsel+'"] div') != undefined){
                                                    alistel.querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="'+textsel+'"]').click()
                                                }
                                            }
                                        }else{
                                            if(alistel.querySelector('.inc_product_desc_att_size_list_item_img_block[data-optionimge="'+imgscrsel+'"]') != undefined){
                                                alistel.querySelector('.inc_product_desc_att_size_list_item_img_block[data-optionimge="'+imgscrsel+'"]').click()
                                            }
                                        }
                                    }else if(alistel.querySelector('.inc_product_desc_att_color_block.inc_active') != null){
                                        if(alistel.querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="'+textsel+'"] div') != undefined){
                                            alistel.querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="'+textsel+'"]').click()
                                        }
                                    }
                                }
                                if(document.querySelector('.js-right-column-section .elc-service-view-renderer[data-rendered-view="product-notify-me"] .elc-product-notify-me-button') == null){
                                    if(document.querySelector('.inc_pdp_block') != null){
                                        document.querySelector('.inc_pdp_block').style.display = "block"
                                    }
                                }else{
                                    if(document.querySelector('.inc_pdp_block') != null){
                                        document.querySelector('.inc_pdp_block').style.display = "none"
                                    }
                                }
                            } 
                        }   
                        if(clickedElement.classList.contains('svgicon--bag') == trf || clickedElement.classList.contains('header-gnav-cart__icon')  == trf || clickedElement.classList.contains('header-gnav-cart__trigger')  == trf || clickedElement.classList.contains('header-gnav-cart__count') == trf){
                            let checkcartpopups = setInterval(function(){
                                if(document.querySelector('body.active-gnav') != null && document.querySelector('.header-gnav-cart__overlay') != null && document.querySelector('.js-header-gnav-cart__overlay.visible') != null){
                                    clearInterval(checkcartpopups)
                                    setTimeout(function(){
                                        reinitsidebar()
                                    },700)
                                }
                            },200)
                        }
                    }
                    if(clickedElement.classList.contains('remove_link') == trf && INC.config.pageType == "cartPage"){
                        setTimeout(function(){
                            if(document.querySelector('.cart-item.product') != null){
                                INC.clientConfig.offset = 0;
                                INC.clientConfig.slidevalue = 0;
                                INC.init();
                            }
                        },2000)
                    }
                    if (INC.config.pageType == "productList") {
                        if(clickedElement.classList.contains('js-add-to-bag-button') == trf){
                            if(clickedElement.getAttribute('data-test-id') == "add_to_bag_btn"){
                                let checkplpcartopen = setInterval(function(){
                                    if(document.querySelector('body.active-gnav') != null && document.querySelector('.header-gnav-cart__overlay') != null && document.querySelector('.js-header-gnav-cart__overlay.visible') != null){
                                        clearInterval(checkplpcartopen)
                                        setTimeout(function(){
                                            let classpid=document.querySelector('.cart-confirm-wrapper .cart-overlay-products .prod').classList
                                            let pidplp = ""
                                            for(let cls of classpid) {
                                                if(cls.indexOf('prod-PROD') >= 0){
                                                    if(cls.split('SKU')[0] != undefined){
                                                        pidplp = cls.split('SKU')[0].replace('prod-','')
                                                    }
                                                }
                                            }
                                            plp_listeners(pidplp) 
                                        },1000)
                                    }
                                },100)
                            }
                        }
                    }
                    if(clickedElement.classList.contains('js-gnav-header-formatter__bg-full-width') == trf){
                        INC.methods.hideSidebar()
                    }
                }
                setTimeout(function(){
                    let inc_prod_img1 =  document.querySelector('.inc_product_modal_block.inc_active .inc_product_img_main_img img')
                    if(inc_prod_img1){
                        inc_prod_img1.setAttribute('style','left:0 !important;position: relative;')
                    }
                },2000)
            } catch (err) {
                let formData = new FormData();
                formData.append("EmailId", "shashi@increasingly.com");
                formData.append("Subject", 'JS Error on ');
                formData.append("Message", err + 'Error Stack' + err.stack);
                let xhr = new XMLHttpRequest();
                xhr.open("POST", '//api.increasingly.co/SendEmail', trf);
                xhr.send(formData);
            }
        }
    }
  
    function pdp_listeners() {
        INC.methods.createSidebarBlock();
        checkAddedProductInJustAdded()
        INC.methods.showSidebar();
    }
    function plp_listeners(prod_id) {
        let productId = prod_id.replace('PROD','');
        INC.methods.irbReq(productId, 10, "catalog_product_view");
    }
    setTimeout(function () {
        if (window.innerWidth < 821) {
            window.addEventListener("orientationchange", function () {
                if (window.matchMedia("(orientation: portrait)").matches) {
                    console.log("PORTRAIT")
                    INC.config.deviceMode = "PORTRAIT"
                    let inc_pdp_block_rem = document.querySelector(".inc_pdp_block");
                    if (inc_pdp_block_rem != null) {
                        inc_pdp_block_rem.parentNode.removeChild(inc_pdp_block_rem);
                    }
                    onloadpdp = false
                    let sidebar_rem = document.querySelector(".inc_sidebar_modal_block");
                    if (sidebar_rem != null) {
                        sidebar_rem.parentNode.removeChild(sidebar_rem);
                    }
                    let over_rem = document.querySelector(".inc_sidebar_overlay_block");
                    if (over_rem != null) {
                        over_rem.parentNode.removeChild(over_rem);
                    }
                    setTimeout(function () {
                        INC.init();
                    },0)
                }
                if (window.matchMedia("(orientation: landscape)").matches) {
                    console.log("LANSCAPE")
                    INC.config.deviceMode = "LANSCAPE";
                    onloadpdp = false
                    let inc_pdp_block_remove = document.querySelector(".inc_pdp_block");
                    if (inc_pdp_block_remove != null) {
                        inc_pdp_block_remove.parentNode.removeChild(inc_pdp_block_remove);
                    }
                    let sidebar_remove = document.querySelector(".inc_sidebar_modal_block");
                    if (sidebar_remove != null) {
                        sidebar_remove.parentNode.removeChild(sidebar_remove);
                    }
                    let over_remove = document.querySelector(".inc_sidebar_overlay_block");
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
            if( inc_isOnScreen( window.$( '.inc_pdp_block'))){
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
                let prd_length = 2
                if (window.innerWidth > 1185) {
                    prd_length = 3
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
        let $window = window.$(window)
        let viewport_top = $window.scrollTop()
        let viewport_height = $window.height()
        let viewport_bottom = viewport_top + viewport_height
        let $elem = window.$(elem)
        let top = $elem.offset().top
        let height = $elem.height()
        let bottom = top + height
        return (top >= viewport_top && top < viewport_bottom) ||
        (bottom > viewport_top && bottom <= viewport_bottom) ||
        (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
    }
    function slideTo(_id, _n, elm, type_of,arrow) {
        if (elm.className == "left_arrow" || elm.className == "left_arrow inc_active" || type_of == "left") {
            let nn2 = -1
            let indslid=INC.config.inc_slideIndex += nn2
            inc_showSlides(indslid, nn2, elm, type_of,arrow);
        } else {
            let nn1 = 1
            let indslid1=INC.config.inc_slideIndex += nn1
            inc_showSlides(indslid1, nn1, elm, type_of,arrow);
        }
    }
    function inc_showSlides(n, _ind, elm,_type_of,arrow) {
        let showcase_other_img_list = elm.querySelector('.inc_product_showcase_block .inc_product_img_main_img a')
        let showcase_dots=elm.querySelectorAll('.inc_product_showcase_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block')
        let modal_dots=elm.querySelectorAll('.inc_product_modal_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block')

        let showcase_other_img = elm.querySelector('.inc_product_showcase_block .inc_product_img_main_img a img')

        let modal_other_img = elm.querySelector('.inc_product_modal_block .inc_product_img_main_img a img')

        let otherImg_list=showcase_other_img_list.getAttribute('otherImageList');
        let additional_img=[]
        additional_img = otherImg_list.split(',');
        let get_org_img = showcase_other_img_list.getAttribute('imageURL')
        if (n > additional_img.length) {
            INC.config.inc_slideIndex = 1
        }
        if (n < 1) {
            INC.config.inc_slideIndex = additional_img.length
        }
        
        for(let im = 0; im < showcase_dots.length; im++) {
            showcase_dots[im].classList.remove('inc_active')
            if(modal_dots[im] != undefined){
                modal_dots[im].classList.remove('inc_active')
            }
        }
        let img_src = additional_img[INC.config.inc_slideIndex - 1].replace('160x90','2000x1500');
        if(img_src != "null"){
            showcase_other_img.setAttribute('src',img_src);
            modal_other_img.setAttribute('src',img_src)
            showcase_other_img.setAttribute('onerror',"this.src='"+get_org_img+"'" );
            modal_other_img.setAttribute('onerror',"this.src='"+get_org_img+"'" );
            
            for(let r = 0; r < showcase_dots.length; r++) {
                showcase_dots[r].classList.remove('inc_active');
                modal_dots[r].classList.remove('inc_active');
            }
            if (showcase_dots[INC.config.inc_slideIndex - 1] != null) {
                showcase_dots[INC.config.inc_slideIndex - 1].classList.add('inc_active');
            }
            if (modal_dots[INC.config.inc_slideIndex - 1] != null) {
                modal_dots[INC.config.inc_slideIndex - 1].classList.add('inc_active');
            }
            if(arrow == "arrow"){
                if(modal_dots.length > 6){
                    let activedots=elm.querySelector('.inc_product_modal_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block.inc_active')
                    if(activedots != null){
                        let actind = activedots.getAttribute('index')
                        if(actind == 5){
                            if(modal_dots.length >= 6){
                                for (let i1 in modal_dots) {
                                    if(i1 == 0){
                                        modal_dots[i1].setAttribute('style','display: none !important;')
                                    }
                                }
                            }
                        }else if(actind == 6){
                            if(modal_dots.length >= 7){
                                for (let i2 in modal_dots) {
                                    if(i2 == 0 || i2 == 1){
                                        modal_dots[i2].setAttribute('style','display: none !important;')
                                    }
                                }
                            }
                        }else if(actind == 7){
                            if(modal_dots.length >= 8){
                                for (let i3 in modal_dots) {
                                    if(i3 == 0 || i3 == 1 || i3 == 2){
                                        modal_dots[i3].setAttribute('style','display: none !important;')
                                    }
                                }
                            }
                        }else if(actind == 8){
                            if(modal_dots.length >= 9){
                                for (let i4 in modal_dots) {
                                    if(i4 == 0 || i4 == 1 || i4 == 2 || i4 == 3){
                                        modal_dots[i4].setAttribute('style','display: none !important;')
                                    }
                                }
                            }
                        }else if(actind == 9){
                            if(modal_dots.length >= 10){
                                for (let i5 in modal_dots) {
                                    if(i5 == 0 || i5 == 1 || i5 == 2 || i5 == 3 || i5 == 4){
                                        modal_dots[i5].setAttribute('style','display: none !important;')
                                    }
                                }
                            }
                        }else if(actind == 10){
                            if(modal_dots.length >= 11){
                                for (let i6 in modal_dots) {
                                    if(i6 == 0 || i6 == 1 || i6 == 2 || i6 == 3 || i6 == 4 || i6 == 5){
                                        modal_dots[i6].setAttribute('style','display: none !important;')
                                    }
                                }
                            }
                        }else if(actind == 11){
                            if(modal_dots.length >= 12){
                                for (let i7 in modal_dots) {
                                    if(i7 == 0 || i7 == 1 || i7 == 2 || i7 == 3 || i7 == 4 || i7 == 5 || i7 == 6){
                                        modal_dots[i7].setAttribute('style','display: none !important;')
                                    }
                                }
                            }
                        }else {
                            for (let iq in modal_dots) {
                                if(iq == 0 || iq == 1 || iq == 2 || iq == 3 || iq == 4 || iq == 5 || iq == 6){
                                    if(modal_dots[iq] != undefined){
                                        modal_dots[iq].style.display = "flex"
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
    // SWIPE FEATURE
    let xDown = null;
    let yDown = null;
    function add_swipe(element) {
        element.addEventListener('touchstart', handleTouchStart, {passive: true});
        element.addEventListener('touchmove', handleTouchMove, {passive: true});
    }
    function handleTouchStart(evt) {
        xDown = evt.touches[0].clientX;
        yDown = evt.touches[0].clientY;
    }
    function handleTouchMove(evt) {
        let prod_card= null;
        if (!xDown || !yDown) {
            return;
        }
        let xUp = evt.touches[0].clientX;
        let yUp = evt.touches[0].clientY;
        let xDiff = xDown - xUp;
        let yDiff = yDown - yUp;
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
    let formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP',
    });
    function cb_tc(bundle_response) {
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

        let bundle_count = bundles_tc.length
        for(let i = 0; i < bundle_count; i++) {
            if (INC.config.dupDataObjectProducts.indexOf(bundles_tc[i].BundleId) == -1) {
                INC.config.dupDataObjectProducts.push(bundles_tc[i].BundleId)
                let irbBundleObj = bundles_tc[i];
                let bundleObj = {};
                bundleObj.id = irbBundleObj["BundleId"];
                let fltr=false;
                if (INC.config.recommendation == fltr) {
                    bundleObj.totalRegularPrice = irbBundleObj["TotalPrice"];
                    bundleObj.totalActivePrice = irbBundleObj["TotalSpecialPrice"];
                    bundleObj.totalBundlePrice = irbBundleObj["TotalBundlePrice"];
                    bundleObj.totalBundleDiscountPrice = irbBundleObj["DiscountPrice"];
                    bundleObj.productCount = irbBundleObj["ProductCount"];
                }
                let irbProductsArray = irbBundleObj["ProductIds"]
                if (irbProductsArray.length) {
                    if (INC.dataStore.bundleProductsArray != undefined) {
                        pdpProductId = irbProductsArray[0];
                        INC.dataStore.bundleProductsArray.push(irbProductsArray[1]);
                    }
                }
                for(let irbprdarray of irbProductsArray) {
                    let product = bundleproductarrayTC[irbprdarray]
                    let pAttributes = product["Attributes"] || "";
                    if (pAttributes != "" && pAttributes != null) {
                        for(let patt1 of pAttributes) {
                            if (patt1.frontEndLabel == "color") {
                                patt1.frontEndLabel = "Color"
                            }
                            if (patt1.frontEndLabel == "size") {
                                patt1.frontEndLabel = "Size"
                            }
                            if (patt1.frontEndLabel == "Shade") {
                                patt1.frontEndLabel = "Color"
                            }
                            if(pAttributes.length == 1){
                                if (patt1.frontEndLabel == "color" || patt1.frontEndLabel == "Color") {
                                    patt1.frontEndLabel = "Color"
                                }else{
                                    patt1.frontEndLabel = "Size"
                                }
                            }
                            patt1.attributeCode = patt1.frontEndLabel;
                        }
                        pAttributes = attribute_listing(pAttributes)
                    }
                    let pAttObj = {};
                    let attr_values =""
                    let tcount = 0
                    for(let p2 of pAttributes) {
                        if (pAttributes.length == 1) {
                            if (pAttributes[0].attributeCode == "Color" || pAttributes[0].attributeCode == "color") {
                                pAttributes[0].attributeId = 0;
                                attr_values = p2.attributeValues;
                                for(let v of attr_values) {
                                    v.optionId = 0;
                                }
                            } else {
                                pAttributes[0].attributeId = 1;
                                attr_values = p2.attributeValues;
                                for(let v1 of attr_values) {
                                    v1.optionId = 1;
                                }
                            }
                        } else {
                            p2.attributeId = tcount
                            attr_values = p2.attributeValues;
                            for(let v2 of attr_values) {
                                v2.optionId = tcount;
                            }
                        }
                        tcount++
                    }

                    if (pAttributes.length) {
                        for(let k of pAttributes) {
                            let pAttributesObj = k;
                            let pAttributesValues = pAttributesObj["attributeValues"];
                            for(let l of pAttributesValues) {
                                let childProduct = l;
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
                                childProduct["ProductType"] = product["ProductType"];
                                childProduct["mainSKU"] = product["ProductSku"];
                                childProduct["childProductIdmain"] = product["ProductId"];

                                childProduct["childProductImageUrlMain"] = product["ImageURL"];
                                childProduct["childProductPriceMain"] = product["Price"];
                                childProduct["childProductSpecialPriceMain"] = product["SpecialPrice"];
                                childProduct["childProductNameMain"] = product["ProductName"];
                                childProduct["childProductUrlMain"] = product["ProductUrl"];
                                childProduct["Field1"] = product["Field1"];
                                childProduct["childreviewsCount"] = product["RatingCount"];
                                childProduct["childRating"] = product["Rating"];
                                childProduct["childCategoryName"] = product["CategoryName"];
                                childProduct["childCategoryId"] = product["CategoryId"];
                                childProduct["childProductDescription"] = product["Description"];
                                if(childProduct["childProductOtherImageUrl"] == null){
                                    childProduct["childProductOtherImageUrl"] = product["OtherImageList"];
                                }
                                if(childProduct["childProductName"] == null){
                                    childProduct["childProductName"] = product["ProductName"];
                                }
                                if(childProduct["childProductField6"] == null){
                                    childProduct["childProductField6"] = product["Field6"];
                                }
                                if(childProduct["childProductField4"] == null){
                                    childProduct["childProductField4"] = product["Field4"];
                                }
                                let productObj = new INC.classes.ProductAttObj(childProduct);

                                productObj["bundledProductId"] = pdpProductId;
                                productObj.mainId = product["ProductId"];
                                productObj.bundleId = bundleObj.id;
                                productObj.sku = productObj.id;
                                productObj.option[pAttributesObj["attributeId"]].id = pAttributesObj["attributeId"];
                                productObj.option[pAttributesObj["attributeId"]].label = pAttributesObj["frontEndLabel"];
                                productObj.option[pAttributesObj["attributeId"]].code = pAttributesObj["attributeCode"];
                                productObj.Filed3 = product["Field3"] + " | " + product["Field4"];
                                if (!Object.prototype.hasOwnProperty.call(INC.dataStore.dataStoreObj, product['ProductId'])) {
                                    INC.dataStore.dataStoreObj[product['ProductId']] = {};
                                }
                                
                                if (!Object.prototype.hasOwnProperty.call(INC.dataStore.dataStoreObj[product['ProductId']],productObj['id'])) {
                                    INC.dataStore.dataStoreObj[product['ProductId']][productObj['id']] = {}
                                }
                                pAttObj = INC.dataStore.dataStoreObj[product['ProductId']][productObj['id']];
                                for(let pAttcb in productObj) {
                                    if (pAttcb == "option") {
                                        if (!Object.prototype.hasOwnProperty.call(pAttObj, 'option')) {
                                            pAttObj["option"] = {}
                                        }
                                        Object.keys(productObj[pAttcb]).forEach(function (key) {
                                            pAttObj[pAttcb][key] = productObj[pAttcb][key];
                                        });
                                    } else {
                                        pAttObj[pAttcb] = productObj[pAttcb];
                                    }
                                }
                            }
                        }
                    }
                    if (pAttributes.length == 0) {
                        let productObjS = new INC.classes.ProductObj(product);
                        productObjS["bundleId"] = irbBundleObj["BundleId"];
                        productObjS["bundledProductId"] = pdpProductId;
                        productObjS.sku = productObjS.id;
                        productObjS.Filed3 = product["Field3"] + " | " + product["Field4"];
                        if ((INC.dataStore.dataStoreObj != undefined) && !Object.prototype.hasOwnProperty.call(INC.dataStore.dataStoreObj, productObjS['mainId'])) {
                            INC.dataStore.dataStoreObj[productObjS['mainId']] = {};
                        }
                        if (INC.dataStore.dataStoreObj != undefined) {
                            INC.dataStore.dataStoreObj[productObjS['mainId']][productObjS['id']] = {};
                            if (!!window.MSInputMethodContext && !!document.documentMode) {
                                INC.dataStore.dataStoreObj[productObjS['mainId']][productObjS['id']] = JSON.parse(JSON.stringify(productObjS));
                            } else {
                                INC.dataStore.dataStoreObj[productObjS['mainId']][productObjS['id']] = Object.assign({}, productObjS);
                            }
                        }
                    }
                }
            }
        }
        setTimeout(function () {
            INC.methods.createPDPBlock("sidebar")
        }, 200)
    }
    function attribute_listing(valueArray) {
        let items = valueArray
        let sorting = ["Color", "Size","Shade","Weight","Volume"];
        let result = []
        sorting.forEach(function (key) {
            let found = false;
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
    function getTrackingPixel() {
        let url = ''
        /*-------------------Tracking with Image Pixel---------------------------*/
        if(url != ''){
            let oImg = document.createElement("img");
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
    INC.methods.updateallbasketprice = function (bundle_card) {
        if(window.innerWidth < 821 && INC.config.pageType == "pdp" && document.querySelector('.header-gnav-cart__overlay.visible') == null && document.querySelector('.sidebar_outer.sidebar_outer_active') == null){
            let p_id = bundle_card.querySelectorAll('.inc_product_module_block')[0].getAttribute('data-id')
            let p_mainid = bundle_card.querySelectorAll('.inc_product_module_block')[0].getAttribute('data-main_id')
            let p_sku = bundle_card.querySelectorAll('.inc_product_module_block')[0].getAttribute('data-sku')
            let p_bid = bundle_card.querySelectorAll('.inc_product_module_block')[0].getAttribute('data-bundle_id')
            let p_qty = bundle_card.querySelectorAll('.inc_product_module_block .inc_product_qty_input_text input')[0].value
            let activePrice = bundle_card.querySelectorAll('.inc_product_desc_ecirp_active_text')[0].innerText.replace('£','')
            let regularPrice = bundle_card.querySelectorAll('.inc_product_desc_ecirp_regular_text')[0].innerText.replace('Was','').replace('WAS','').replace('£','').trim()
            if(regularPrice== ""){
                regularPrice = activePrice
            }
            let secondprd=bundle_card.querySelectorAll('.inc_product_module_block')[1]
            if(secondprd != null){
                let p_id1 = secondprd.getAttribute('data-id')
                let p_mainid1 = secondprd.getAttribute('data-main_id')
                let p_sku1 = secondprd.getAttribute('data-sku')
                let p_bid1 = secondprd.getAttribute('data-bundle_id')
                let p_qty1 = secondprd.querySelector('.inc_product_qty_input_text input').value
                let activePrice1 = secondprd.querySelectorAll('.inc_product_desc_ecirp_active_text')[0].innerText.replace('£','')
                let regularPrice1 = secondprd.querySelectorAll('.inc_product_desc_ecirp_regular_text')[0].innerText.replace('Was','').replace('WAS','').replace('£','').trim()
                if(regularPrice1== ""){
                    regularPrice1 = activePrice1
                }
                let elBundleCartPriceActiveText = bundle_card.querySelector('.inc_pdp_bundle_cart_summary_ecirp_active_text')
                let elBundleCartPriceRegularText = bundle_card.querySelector('.inc_pdp_bundle_cart_summary_ecirp_regular_text')
                let elBundleCartPriceActiveTextMsg = bundle_card.querySelector('.inc_pdp_bundle_cart_summary_ecirp_save_text')
                let totalActivePrice = (+activePrice * parseInt(p_qty)) + (+activePrice1 * parseInt(p_qty1))
                let totalRegularPrice = (+regularPrice * parseInt(p_qty)) + (+regularPrice1 * parseInt(p_qty1))
                if(elBundleCartPriceActiveText != null){
                    elBundleCartPriceActiveText.innerText = formatter.format(totalActivePrice);
                    elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.remove('simple_ecirp')
                    elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.remove('is_special_ecirp')
                    elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.remove('simple_ecirp')
                    elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.remove('is_special_ecirp')
                    let totalsaveprcs = get_discount_price(totalRegularPrice, totalActivePrice)
                    if (totalRegularPrice != totalActivePrice && totalRegularPrice != null && totalRegularPrice != "") {
                        elBundleCartPriceRegularText.innerText = formatter.format(totalRegularPrice)
                        elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
                        elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
                        elBundleCartPriceActiveTextMsg.innerHTML = "Save " + formatter.format(totalsaveprcs);
                    } else {
                        elBundleCartPriceActiveTextMsg.innerHTML = ""
                        elBundleCartPriceRegularText.innerHTML = "";
                        elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.add('simple_ecirp')
                    }
                    let elsummaryblock = bundle_card.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block')
                    elsummaryblock.setAttribute('id',p_id)
                    elsummaryblock.setAttribute('psku',p_sku)
                    elsummaryblock.setAttribute('mainid',p_mainid)
                    elsummaryblock.setAttribute('bid',p_bid)
                    elsummaryblock.setAttribute('qty',p_qty)
                    elsummaryblock.setAttribute('id1',p_id1)
                    elsummaryblock.setAttribute('psku1',p_sku1)
                    elsummaryblock.setAttribute('mainid1',p_mainid1)
                    elsummaryblock.setAttribute('bid1',p_bid1)
                    elsummaryblock.setAttribute('qty1',p_qty1)
                }   
            }
        }
    }
})();