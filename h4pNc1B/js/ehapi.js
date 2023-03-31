
(function(){
    "use strict";
    var pdp_html = '<div class="inc_pdp_title_block"><div class="inc_pdp_title_text_block"><div class="inc_pdp_title_text">Frequently Bought Together</div></div></div><div class="inc_discount_promo_block"><div class="inc_discount_promo_text"></div></div><div class="inc_pdp_bundle_block"><div class="inc_pdp_product-main_block"><div class="mainprodtitletext">対象アイテム:</div></div><div class="inc_pdp_icon-add_block"><div class="inc_pdp_icon-add_img_block"><div class="inc_pdp_icon-add_img"></div></div></div><div class="inc_pdp_bundle_product_block"><div class="inc_pdp_bundle_product_header_block"><div class="inc_pdp_bundle_product_header_text">Frequently Bought with</div></div><div class="inc_pdp_bundle_product_left-btn_block"><div class="inc_pdp_bundle_product_left-btn_img_block"><div class="inc_pdp_bundle_product_left-btn_img" title="Scroll left"></div></div></div><div class="inc_pdp_bundle_product_list_block"><div class="inc_pdp_bundle_product_list_main_block"></div><div class="inc_pdp_bundle_product_list_left_block"><div class="inc_pdp_bundle_product_list_left_btn_block"><div class="inc_pdp_bundle_product_list_left_btn_img_block"><div class="inc_pdp_bundle_product_list_left_btn_img"></div></div></div></div><div class="inc_pdp_bundle_product_list_items_show_more_less_block"><div class="inc_pdp_bundle_product_list_items_show_more_less_text down_wrrow">Show more products</div></div><div class="inc_pdp_bundle_product_list_wrapper_items_block"><div class="inc_pdp_bundle_product_list_wrapper_header_block"><div class="inc_pdp_bundle_product_list_wrapper_header_text_block"></div><div class="inc_pdp_bundle_product_list_wrapper_header_close_block"></div></div><div class="inc_pdp_bundle_product_list_items_block"></div></div><div class="inc_pdp_bundle_product_list_right_block"><div class="inc_pdp_bundle_product_list_right_btn_block"><div class="inc_pdp_bundle_product_list_right_btn_img_block"><div class="inc_pdp_bundle_product_list_right_btn_img"></div></div></div></div></div><div class="inc_pdp_bundle_product_right-btn_block"><div class="inc_pdp_bundle_product_right-btn_img_block"><div class="inc_pdp_bundle_product_right-btn_img" title="Scroll right"></div></div></div></div><div class="inc_pdp_bundle_cart_overlay_block"></div><div class="inc_pdp_bundle_cart_block"><div class="inc_pdp_bundle_cart_title_block"><div class="inc_pdp_bundle_cart_title_text_block"><div class="inc_pdp_bundle_cart_title_text">Price Summary</div></div></div><div class="inc_pdp_bundle-cart_ecirp_block"><div class="inc_pdp_bundle-cart_ecirp_main"><div class="inc_pdp_bundle-cart_ecirp_main_title_block"><div class="inc_pdp_bundle-cart_ecirp_main_title_text_block"><div class="inc_pdp_bundle-cart_ecirp_main_title_text">Main Product Price </div></div></div><div class="inc_pdp_bundle-cart_ecirp_main_figure_block"><div class="inc_pdp_bundle-cart_ecirp_main_figure_text_block"><div class="inc_pdp_bundle-cart_ecirp_main_figure_text">¥00.00</div></div></div></div><div class="inc_pdp_bundle-cart_ecirp_addon_block"><div class="inc_pdp_bundle-cart_ecirp_addon_title_block"><div class="inc_pdp_bundle-cart_ecirp_addon_title_text_block"><div class="inc_pdp_bundle-cart_ecirp_addon_title_text">Add-on(s) Selected </div></div></div><div class="inc_pdp_bundle-cart_ecirp_addon_figure_block"><div class="inc_pdp_bundle-cart_ecirp_addon_figure_text_block"><div class="inc_pdp_bundle-cart_ecirp_addon_figure_text">¥0.00</div></div></div></div></div><div class="inc_pdp_bundle_cart_added_block"></div><div class="inc_pdp_bundle_cart_summary_block"><div class="inc_pdp_bundle_cart_summary_title_block"><div class="inc_pdp_bundle_cart_summary_title_text_block"><div class="inc_pdp_bundle_cart_summary_title_text">Total bundle price</div></div></div><div class="inc_pdp_bundle_cart_summary_ecirp_block"><div class="inc_pdp_bundle_cart_summary_ecirp_regular_block"><div class="inc_pdp_bundle_cart_summary_ecirp_regular_text_block"><span>合計金額: </span><div class="inc_pdp_bundle_cart_summary_ecirp_regular_text"></div></div></div><div class="inc_pdp_bundle_cart_summary_ecirp_active_block"><div class="inc_pdp_bundle_cart_summary_ecirp_active_text_block"><div class="inc_pdp_bundle_cart_summary_ecirp_active_text">¥60.00</div></div></div></div><div class="inc_pdp_bundle_cart_summary_ecirp_save_block"><div class="inc_pdp_bundle_cart_summary_ecirp_save_text"></div></div><div class="inc_pdp_bundle_cart_summary_view_block"><div class="inc_pdp_bundle_cart_summary_view_btn_block"><div class="inc_pdp_bundle_cart_summary_view_btn_img_block"><div class="inc_pdp_bundle_cart_summary_view_btn_img"></div></div><div class="inc_pdp_bundle_cart_summary_view_btn_text_block"><div class="inc_pdp_bundle_cart_summary_view_btn_text">Added items</div></div><div class="inc_pdp_bundle_cart_summary_view_btn_count_block"><div class="inc_pdp_bundle_cart_summary_view_btn_count"></div></div></div></div><div class="inc_pdp_bundle_cart_summary_add_block"><div class="inc_pdp_bundle_cart_summary_add_btn_block"><div class="inc_pdp_bundle_cart_summary_add_btn_text_block"><div class="inc_pdp_bundle_cart_summary_add_btn_text">カートに入れる</div><div class="inc_pdp_bundle_cart_summary_add_btn_span"></div></div><div class="inc_pdp_bundle_cart_summary_add_btn_img_block"><div class="inc_pdp_bundle_cart_summary_add_btn_img"></div></div></div><div class="inc_pdp_bundle_cart_summary_add_btn_collection_block" style="pointer-events: auto;opacity: 1;"><div class="inc_pdp_bundle_cart_summary_add_btn_collection_text_block"><div class="inc_pdp_bundle_cart_summary_add_btn_collection_text" style="text-transform: none;"></div></div></div></div></div></div></div>';
    var sidebar_html = '<span class="close_modal_inc"></span><div class="inc_sidebar_modal_block"><div class="inc_sidebar_modal_cart_and_title_block"><div class="inc_header_title_block"><div class="inc_header_title_text_block"><div class="inc_header_title_text">Just Added to your Basket</div></div></div><div class="inc_sidebar_cart_added_block"><div class="inc_cart_added_list_block"></div><div class="inc_cart_product_count_block"></div></div><div class="inc_sidebar_header_block"><div class="inc_header_continue_block"><div class="inc_header_continue_img_block"><div class="inc_header_continue_img"></div></div><div class="inc_header_continue_text_block"><div class="inc_header_continue_text">Back</div></div></div><div class="inc_header_item_block"><div class="inc_header_item_count_block"><div class="inc_header_item_count_title_block"><div class="inc_header_item_count_title_text_block"><div class="inc_header_item_count_title_text">Subtotal (0 item)</div></div></div><div class="inc_header_item_count_figure_block"><div class="inc_header_item_count_figure_text_block"><div class="inc_header_item_count_figure_text"></div></div></div><div class="inc_cart_added_product_desc_subtotal_ecirp_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_active_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_active_text_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_active_text" subtotalactiveprice="0.00">¥0.00</div><div class="inc_cart_added_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_cart_added_product_desc_subtotal_ecirp_regular_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_regular_text_block"><div class="inc_cart_added_product_desc_subtotal_ecirp_regular_text" subtotalregularprice="0.00"></div></div></div><div class="inc_just_added_save_pr"></div></div></div></div></div></div><div class="inc_sidebar_checkout_block"><div class="inc_checkout_continue_block"><div class="inc_checkout_continue_btn_block"><div class="inc_checkout_continue_btn_img_block"><div class="inc_checkout_continue_btn_img"></div></div><div class="inc_checkout_continue_btn_text_block"><div class="inc_checkout_continue_btn_text">Continue Shopping</div><div class="inc_checkout_continue_btn_span"></div></div></div></div><div class="inc_checkout_basket_block"><div class="inc_checkout_basket_btn_block"><div class="inc_checkout_basket_btn_img_block"><div class="inc_checkout_basket_btn_img"></div></div><div class="inc_checkout_basket_btn_text_block"><div class="inc_checkout_basket_btn_span"></div><div class="inc_checkout_basket_btn_text"><a class="view_basket_checkout"><div draggable="false">View Basket</div></a></div></div></div></div></div><div class="inc_sidebar_recommended_block"><div class="inc_recommended_title_block"><div class="inc_recommended_title_text_block"><div class="inc_recommended_title_text">Customers Also Bought</div></div></div><div class="inc_recommended_tabs_block"><div class="inc_recommended_tabs_list_block inc_categ_4" tabindex="0"></div></div><div class="inc_recommended_products_block"><div class="inc_recommended_products_left_block"><div class="inc_recommended_products_left_btn_block"><div class="inc_recommended_products_left_btn_img_block"><div class="inc_recommended_products_left_btn_img" title="Scroll left"></div></div></div></div><div class="inc_recommended_products_list_main_block"><div class="inc_recommended_products_list_block"></div></div><div class="inc_recommended_products_item_thumb_block"><div class="inc_recommended_products_list_item_thumb_block"></div></div><div class="inc_recommended_products_right_block"><div class="inc_recommeded_products_right_btn_block"><div class="inc_recommended_products_right_btn_img_block"><div class="inc_recommended_products_right_btn_img" title="Scroll right"></div></div></div></div></div></div></div>'

    var cart_html = '<div class="inc_af_title_block" style="clear: both;"><div class="inc_af_title_text_block"><div class="inc_af_title_text"></div><div class="inc_af_modal_close"></div></div><div class="inc_af_modal_close"></div></div></div><div class="inc_af_bundles_block"><div class="inc_af_left_block"><div class="inc_af_left_btn_block"><div class="inc_af_left_btn_img_block"><div class="inc_af_left_btn_img"></div></div></div></div><div class="inc_af_product-list-main_block"><div class="inc_af_product-list_block"></div></div><div class="inc_af_right_block"><div class="inc_af_right_btn_block"><div class="inc_af_right_btn_img_block"><div class="inc_af_right_btn_img"></div></div></div></div></div>'
    if(document.querySelector('.page-cart') != null) {
        var showcase_productcard = '<div class="inc_product_block"><div class="inc_product_extension_block"></div><div class="inc_product_header_main_block"><div class="inc_product_header_main_title_block"></div><div class="inc_product_header_main_rating_block"></div><div class="inc_product_header_block"><div class="inc_product_header_title_block"><div class="inc_product_header_title_text_block"><div class="inc_product_header_title_text"></div></div></div></div><div class="inc_product_Description_header_block"><div class="inc_product_Description_header_title_block"><div class="inc_product_Description_header_title_text_block"><div class="inc_product_Description_header_title_text"></div></div></div></div><div class="inc_product_header_img_block"><div class="inc_product_header_img"></div></div></div><div class="inc_product_info_main_block"><div class="inc_product_img_block"><div class="inc_product_img_main_block"><div class="inc_product_img_main_img"></div></div><div class="inc_product_img_gallery_block"><div class="inc_product_img_gallery_left_block"><div class="inc_product_img_gallery_left_btn_block"><div class="inc_product_img_gallery_left_btn_img_block"><div class="inc_product_img_gallery_left_btn_img"></div></div><div class="inc_product_img_gallery_left_btn_text_block"><div class="inc_product_img_gallery_left_btn_text"></div></div></div></div><div class="inc_product_img_gallery_list_block"></div><div class="inc_product_img_gallery_right_block"><div class="inc_product_img_gallery_right_btn_block"><div class="inc_product_img_gallery_right_btn_img_block"><div class="inc_product_img_gallery_right_btn_img"></div></div><div class="inc_product_img_gallery_right_btn_text_block"><div class="inc_product_img_gallery_right_btn_text"></div></div></div></div></div></div><div class="inc_product_desc_block"><div class="promo_main"><div class="pc_promo_div"></div><div class="pc_promo_div1"></div><div class="pc_promo_div2"></div><div class="pc_promo_div3"></div><div class="pc_promo_div4"></div></div><div class="inc_product_desc_title_block"><div class="inc_product_desc_title_text_block"><div class="inc_product_desc_title_text"></div></div></div><div class="inc_product_desc_ecirp_block"><div class="inc_product_ecirp_label_block">SALE</div><div class="inc_product_desc_ecirp_regular_block"><div class="inc_product_desc_ecirp_regular_text_block"><div class="inc_product_desc_ecirp_regular_text"></div></div></div><div class="inc_product_desc_ecirp_active_block"><div class="inc_product_desc_ecirp_active_text_block"><div class="inc_product_desc_ecirp_active_text">¥0.00 - -¥0.00</div><div class="inc_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_product_desc_ecirp_worth_block"><div class="inc_product_desc_ecirp_worth_text_block"><div class="inc_product_desc_ecirp_worth_text"></div><div class="inc_product_desc_ecirp_worth_text_msg"></div></div></div></div><div class="inc_product_desc_ratings_block"></div><div class="inc_variant_error_text"></div><div class="inc_product_desc_att_details_block"><div class="inc_product_variant_simple_block"><div class="inc_product_variant_simple_text"><span>まとめてカートに入れる</span></div></div><div class="inc_product_desc_att_block"><div class="inc_product_desc_variant_popup_close_block"></div><div class="inc_product_desc_add_err_text_block"></div><div class="inc_product_desc_add_title_text_block"></div><div class="inc_product_desc_att_zero_block"><div class="inc_product_desc_att_zero_title_block"><div class="inc_product_desc_att_zero_title_text_block"><div class="inc_product_desc_att_zero_title_text"></div><div class="inc_product_desc_att_zero_title_text_selected"></div></div></div><div class="inc_product_desc_att_zero_list_block"></div></div><div class="inc_product_desc_att_size_block"><div class="inc_product_desc_att_size_title_block"><div class="inc_product_desc_att_size_title_text_block"><div class="inc_product_desc_att_size_title_text"></div><div class="inc_product_desc_att_size_title_text_selected"></div></div></div><div class="inc_product_desc_att_size_list_block"></div></div><div class="inc_product_desc_att_color_block"><div class="inc_product_desc_att_color_title_block"><div class="inc_product_desc_att_color_title_text_block"><div class="inc_product_desc_att_color_title_text"></div><div class="inc_product_desc_att_color_title_text_selected"></div></div></div><div class="inc_product_desc_att_color_list_block"></div></div><div class="inc_product_desc_att_third_block"><div class="inc_product_desc_att_third_title_block"><div class="inc_product_desc_att_third_title_text_block"><div class="inc_product_desc_att_third_title_text"></div><div class="inc_product_desc_att_third_title_text_selected"></div></div></div><div class="inc_product_desc_att_third_list_block"></div></div><div class="inc_product_desc_att_fourth_block"><div class="inc_product_desc_att_fourth_title_block"><div class="inc_product_desc_att_fourth_title_text_block"><div class="inc_product_desc_att_fourth_title_text"></div><div class="inc_product_desc_att_fourth_title_text_selected"></div></div></div><div class="inc_product_desc_att_fourth_list_block"><div class="inc_product_desc_att_fourth_list_item_block"><div class="inc_product_desc_att_fourth_list_item_img_block"><div class="inc_product_desc_att_fourth_list_item_img"></div></div><div class="inc_product_desc_att_fourth_list_item_text_block"><div class="inc_product_desc_att_fourth_list_item_text"></div></div></div></div></div><div class="inc_product_desc_att_edit_block"><div class="inc_product_desc_att_edit_text"></div></div><div class="inc_product_desc_att_variant_add_block"><div class="inc_product_desc_att_variant_text"></div></div></div><div class="inc_product_details_prod_block"><div class="inc_product_details_prod_text"></div></div></div><div class="inc_product_desc_qty_add_btn_block "><label>qty</label><div class="inc_product_qty_block singleqty"><div class="inc_product_qty_down_block"><div class="inc_product_qty_down_btn_block"><div class="inc_product_qty_down_btn"></div></div></div><div class="inc_product_qty_input_block"><div class="inc_product_qty_input_text_block"><div class="inc_product_qty_input_text"><span class="inc_add_text"></span></div></div></div><div class="inc_product_qty_up_block"><div class="inc_product_qty_up_btn_block"><div class="inc_product_qty_up_btn"></div></div></div></div><div class="inc_product_add_block"><div class="inc_product_add_text_block"><div class="inc_product_add_text">まとめてカートに入れる</div></div></div><div class="inc_product_add_collection_block"><div class="inc_product_add_collection_text_block"><div class="inc_product_add_collection_text">Collect</div></div></div><div class="inc_product_desc_add_block"><div class="inc_product_desc_add_img_block"><div class="inc_product_desc_add_img"></div></div><div class="inc_product_desc_add_text_block"><div class="inc_product_desc_add_text">まとめてカートに入れる</div><div class="inc_product_desc_add_span"></div></div></div><div class="inc_product_bstxt_block"></div></div></div><div class="inc_product_bstxt_block"></div></div><div class="inc_product_description_main_block"></div></div>'
    } else {
        var showcase_productcard = '<div class="inc_product_block"><div class="inc_product_extension_block"></div><div class="inc_product_header_main_block"><div class="inc_product_header_main_title_block"></div><div class="inc_product_header_main_rating_block"></div><div class="inc_product_header_block"><div class="inc_product_header_title_block"><div class="inc_product_header_title_text_block"><div class="inc_product_header_title_text"></div></div></div></div><div class="inc_product_Description_header_block"><div class="inc_product_Description_header_title_block"><div class="inc_product_Description_header_title_text_block"><div class="inc_product_Description_header_title_text"></div></div></div></div><div class="inc_product_header_img_block"><div class="inc_product_header_img"></div></div></div><div class="inc_product_info_main_block"><div class="inc_product_img_block"><div class="inc_product_img_main_block"><div class="inc_product_img_main_img"></div></div><div class="inc_product_img_gallery_block"><div class="inc_product_img_gallery_left_block"><div class="inc_product_img_gallery_left_btn_block"><div class="inc_product_img_gallery_left_btn_img_block"><div class="inc_product_img_gallery_left_btn_img"></div></div><div class="inc_product_img_gallery_left_btn_text_block"><div class="inc_product_img_gallery_left_btn_text"></div></div></div></div><div class="inc_product_img_gallery_list_block"></div><div class="inc_product_img_gallery_right_block"><div class="inc_product_img_gallery_right_btn_block"><div class="inc_product_img_gallery_right_btn_img_block"><div class="inc_product_img_gallery_right_btn_img"></div></div><div class="inc_product_img_gallery_right_btn_text_block"><div class="inc_product_img_gallery_right_btn_text"></div></div></div></div></div></div><div class="inc_product_desc_block"><div class="inc_product_desc_title_block"><div class="inc_product_desc_title_text_block"><div class="inc_product_desc_title_text"></div></div></div>><div class="promo_main"><div class="pc_promo_div"></div><div class="pc_promo_div1"></div><div class="pc_promo_div2"></div><div class="pc_promo_div3"></div><div class="pc_promo_div4"></div></div><div class="inc_product_desc_ratings_block"></div><div class="inc_variant_error_text"></div><div class="inc_product_desc_att_details_block"><div class="inc_product_variant_simple_block"><div class="inc_product_variant_simple_text"><div class="colorCircle"></div><span>カートに入れる</span></div></div><div class="inc_product_desc_att_block"><div class="inc_product_desc_variant_popup_close_block"></div><div class="inc_product_desc_add_err_text_block"></div><div class="inc_product_desc_add_title_text_block"></div><div class="inc_product_desc_att_zero_block"><div class="inc_product_desc_att_zero_title_block"><div class="inc_product_desc_att_zero_title_text_block"><div class="inc_product_desc_att_zero_title_text"></div><div class="inc_product_desc_att_zero_title_text_selected"></div></div></div><div class="inc_product_desc_att_zero_list_block"></div></div><div class="inc_product_desc_att_size_block"><div class="inc_product_desc_att_size_title_block"><div class="inc_product_desc_att_size_title_text_block"><div class="inc_product_desc_att_size_title_text"></div><div class="inc_product_desc_att_size_title_text_selected"></div></div></div><div class="inc_product_desc_att_size_list_block"></div></div><div class="inc_product_desc_att_color_block"><div class="inc_product_desc_att_color_title_block"><div class="inc_product_desc_att_color_title_text_block"><div class="inc_product_desc_att_color_title_text"></div><div class="inc_product_desc_att_color_title_text_selected"></div></div></div><div class="inc_product_desc_att_color_list_block"></div></div><div class="inc_product_desc_att_third_block"><div class="inc_product_desc_att_third_title_block"><div class="inc_product_desc_att_third_title_text_block"><div class="inc_product_desc_att_third_title_text"></div><div class="inc_product_desc_att_third_title_text_selected"></div></div></div><div class="inc_product_desc_att_third_list_block"></div></div><div class="inc_product_desc_att_fourth_block"><div class="inc_product_desc_att_fourth_title_block"><div class="inc_product_desc_att_fourth_title_text_block"><div class="inc_product_desc_att_fourth_title_text"></div><div class="inc_product_desc_att_fourth_title_text_selected"></div></div></div><div class="inc_product_desc_att_fourth_list_block"><div class="inc_product_desc_att_fourth_list_item_block"><div class="inc_product_desc_att_fourth_list_item_img_block"><div class="inc_product_desc_att_fourth_list_item_img"></div></div><div class="inc_product_desc_att_fourth_list_item_text_block"><div class="inc_product_desc_att_fourth_list_item_text"></div></div></div></div></div><div class="inc_product_desc_att_edit_block"><div class="inc_product_desc_att_edit_text"></div></div><div class="inc_product_desc_att_variant_add_block"><div class="inc_product_desc_att_variant_text"></div></div></div><div class="inc_product_details_prod_block"><div class="inc_product_details_prod_text"></div></div></div><div class="inc_product_desc_ecirp_block"><div class="inc_product_ecirp_label_block">SALE</div><div class="inc_product_desc_ecirp_regular_block"><div class="inc_product_desc_ecirp_regular_text_block"><div class="inc_product_desc_ecirp_regular_text"></div></div></div><div class="inc_product_desc_ecirp_active_block"><div class="inc_product_desc_ecirp_active_text_block"><div class="inc_product_desc_ecirp_active_text">¥0.00 - -¥0.00</div><div class="inc_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_product_desc_ecirp_worth_block"><div class="inc_product_desc_ecirp_worth_text_block"><div class="inc_product_desc_ecirp_worth_text"></div><div class="inc_product_desc_ecirp_worth_text_msg"></div></div></div></div><div class="inc_product_desc_qty_add_btn_block "><label>qty</label><div class="inc_product_qty_block singleqty"><div class="inc_product_qty_down_block"><div class="inc_product_qty_down_btn_block"><div class="inc_product_qty_down_btn"></div></div></div><div class="inc_product_qty_input_block"><div class="inc_product_qty_input_text_block"><div class="inc_product_qty_input_text"><span class="inc_add_text"></span></div></div></div><div class="inc_product_qty_up_block"><div class="inc_product_qty_up_btn_block"><div class="inc_product_qty_up_btn"></div></div></div></div><div class="inc_product_add_block"><div class="inc_product_add_text_block"><div class="inc_product_add_text">カートに入れる</div></div></div><div class="inc_product_add_collection_block"><div class="inc_product_add_collection_text_block"><div class="inc_product_add_collection_text">Collect</div></div></div><div class="inc_product_desc_add_block"><div class="inc_product_desc_add_img_block"><div class="inc_product_desc_add_img"></div></div><div class="inc_product_desc_add_text_block"><div class="inc_product_desc_add_text">カートに入れる</div><div class="inc_product_desc_add_span"></div></div></div><div class="inc_product_bstxt_block"></div></div></div><div class="inc_product_bstxt_block"></div></div><div class="inc_product_description_main_block"></div></div>'
    }
    var modal_productcard = '<div class="inc_product_block "><div class="inc_product_extension_block"></div><div class="inc_product_header_main_block"><div class="inc_product_header_main_title_block"></div><div class="inc_product_header_main_rating_block"><div class="inc_product_desc_ratings_block"></div><span class="product_modal_sku">#</span></div><div class="inc_product_header_block"><div class="inc_product_header_title_block"><div class="inc_product_header_title_text_block"><div class="inc_product_header_title_text">Overview</div></div></div><div class="inc_product_header_title_block_1"><div class="inc_product_header_title_text_block_1"><div class="inc_product_header_title_text_1">Description</div></div></div><div class="inc_product_header_new_page"><a class="inc_product_header_new_page_text" href="">Open in a new tab</a></div></div><div class="inc_product_Description_header_block"><div class="inc_product_Description_header_title_block"><div class="inc_product_Description_header_title_text_block"><div class="inc_product_Description_header_title_text"></div></div></div></div><div class="inc_product_header_img_block"><div class="inc_product_header_img"></div></div></div><div class="inc_product_info_main_block"><div class="inc_product_img_block"><div class="inc_product_img_main_block"><div class="inc_product_img_main_img"></div></div><div class="inc_product_img_gallery_block"><div class="inc_product_img_gallery_left_block" title="Scroll left"><div class="inc_product_img_gallery_left_btn_block"><div class="inc_product_img_gallery_left_btn_img_block"><div class="inc_product_img_gallery_left_btn_img"></div></div><div class="inc_product_img_gallery_left_btn_text_block"><div class="inc_product_img_gallery_left_btn_text"></div></div></div></div><div class="inc_product_img_gallery_list_block"></div><div class="inc_product_img_gallery_right_block" title="Scroll right"><div class="inc_product_img_gallery_right_btn_block"><div class="inc_product_img_gallery_right_btn_img_block"><div class="inc_product_img_gallery_right_btn_img"></div></div><div class="inc_product_img_gallery_right_btn_text_block"><div class="inc_product_img_gallery_right_btn_text"></div></div></div></div></div></div><div class="inc_product_desc_block"><div class="inc_product_desc_title_block"><div class="inc_product_desc_title_text_block"><div class="inc_product_desc_title_text"></div></div></div><div class="inc_product_desc_ecirp_block"><div class="inc_product_ecirp_label_block">SALE</div><div class="inc_product_desc_ecirp_active_block"><div class="inc_product_desc_ecirp_active_text_block"><div class="inc_product_desc_ecirp_active_text">¥0.00 - -¥0.00</div><div class="inc_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_product_desc_ecirp_regular_block"><div class="inc_product_desc_ecirp_regular_text_block"><div class="inc_product_desc_ecirp_regular_text"></div></div></div><div class="inc_product_desc_ecirp_worth_block"><div class="inc_product_desc_ecirp_worth_text_block"><div class="inc_product_desc_ecirp_worth_text"></div><div class="inc_product_desc_ecirp_worth_text_msg"></div></div></div></div><div class="inc_product_desc_ratings_block"></div><div class="inc_product_desc_att_details_block"><div class="inc_product_variant_simple_block"><div class="inc_product_variant_simple_text"><img><span></span></div></div><div class="pc_promo_div"></div><div class="inc_product_desc_att_block"><div class="inc_product_desc_variant_popup_close_block"></div><div class="inc_product_desc_add_err_text_block"></div><div class="inc_product_desc_add_title_text_block"></div><div class="inc_product_desc_att_zero_block"><div class="inc_product_desc_att_zero_title_block"><div class="inc_product_desc_att_zero_title_text_block"><div class="inc_product_desc_att_zero_title_text"></div><div class="inc_product_desc_att_zero_title_text_selected"></div></div></div><div class="inc_product_desc_att_zero_list_block"></div></div><div class="inc_product_desc_att_size_block"><div class="inc_product_desc_att_size_title_block"><div class="inc_product_desc_att_size_title_text_block"><div class="inc_product_desc_att_size_title_text"></div><div class="inc_product_desc_att_size_title_text_selected"></div></div></div><div class="inc_product_desc_att_size_list_block"></div></div><div class="inc_product_desc_att_color_block"><div class="inc_product_desc_att_color_title_block"><div class="inc_product_desc_att_color_title_text_block"><div class="inc_product_desc_att_color_title_text"></div><div class="inc_product_desc_att_color_title_text_selected"></div></div></div><div class="inc_product_desc_att_color_list_block"></div></div><div class="inc_product_desc_att_third_block"><div class="inc_product_desc_att_third_title_block"><div class="inc_product_desc_att_third_title_text_block"><div class="inc_product_desc_att_third_title_text"></div><div class="inc_product_desc_att_third_title_text_selected"></div></div></div><div class="inc_product_desc_att_third_list_block"></div></div><div class="inc_product_desc_att_fourth_block"><div class="inc_product_desc_att_fourth_title_block"><div class="inc_product_desc_att_fourth_title_text_block"><div class="inc_product_desc_att_fourth_title_text"></div><div class="inc_product_desc_att_fourth_title_text_selected"></div></div></div><div class="inc_product_desc_att_fourth_list_block"><div class="inc_product_desc_att_fourth_list_item_block"><div class="inc_product_desc_att_fourth_list_item_img_block"><div class="inc_product_desc_att_fourth_list_item_img"></div></div><div class="inc_product_desc_att_fourth_list_item_text_block"><div class="inc_product_desc_att_fourth_list_item_text"></div></div></div></div></div><div class="inc_product_desc_att_edit_block"><div class="inc_product_desc_att_edit_text"></div></div><div class="inc_product_desc_att_variant_add_block"><div class="inc_product_desc_att_variant_text"></div></div></div><div class="inc_product_details_prod_block"><div class="inc_product_details_prod_text"></div></div></div><div class="inc_product_desc_qty_add_btn_block"><div class="inc_product_qty_block singleqty"><div class="inc_product_qty_down_block"><div class="inc_product_qty_down_btn_block"><div class="inc_product_qty_down_btn"></div></div></div><div class="inc_product_qty_input_block"><div class="inc_product_qty_input_text_block"><div class="inc_product_qty_input_text"></div></div></div><div class="inc_product_qty_up_block"><div class="inc_product_qty_up_btn_block"><div class="inc_product_qty_up_btn"></div></div></div></div><div class="inc_product_add_block"><div class="inc_product_add_text_block"><div class="inc_product_add_text"></div></div></div><div class="inc_product_add_collection_block"><div class="inc_product_add_collection_text_block"><div class="inc_product_add_collection_text">Collect</div></div></div><div class="inc_product_desc_add_block"><div class="inc_product_desc_add_img_block"><div class="inc_product_desc_add_img"></div></div><div class="inc_product_desc_add_text_block"><div class="inc_product_desc_add_text">カートに入れる</div><div class="inc_product_desc_add_span"></div></div></div><div class="inc_product_bstxt_block"></div></div></div><div class="inc_product_bstxt_block"></div></div><div class="inc_product_description_main_block"></div></div>';
    var INC = {};
    var init_flag = true
    INC.bundles = true
    INC.ENV = "prod";
    INC.debug = 0;
    INC.initStatus = "";
    INC.initStatusCP = "";
    var oosStatus = false;
    var onloadpdp = false;
    var crypto = window.crypto || window.msCrypto;
    function generateRandomString(bits1) {
        return (crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295).toString(bits1).substring(2, 15) + (crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295).toString(bits1).substring(2, 15);
    }
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
    INC.config.clientToken = "4@pP15ss";
    INC.config.trackingURL = "https://jpoptimizedby.increasingly.co/ImportData";
    if (window.location.hostname == 'tt311.w2solution.com'){
        INC.config.addToBasketURL = "https://tt311.w2solution.com/Test/R1024_Cefine/Form/Product/ProductDetail.aspx?shop=0&"
    } else {
        INC.config.addToBasketURL = "https://www.e-hapi.com/shop/cart/cart.aspx?";
    }
    if (window.location.hostname == 'tt311.w2solution.com'){
        INC.clientConfig.checkoutLink = "https://tt311.w2solution.com/Test/R1024_Cefine/Form/Order/CartList.aspx";
    } else {
        INC.clientConfig.checkoutLink = "https://www.e-hapi.com/shop/cart/cart.aspx?affiliate=bundle";
    }
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
    INC.config.FBTTitle = "よく一緒に購入される商品をまとめて購入"
    INC.config.FBTTitleJp = "よく一緒に購入されるアイテム"
    INC.config.AddedText = "Added"
    INC.config.BeforeYouChecktext = "よく一緒に購入される商品"
    INC.config.ajaxerr = "I'm sorry we've experienced an error. Please try again."
    INC.config.UpdateText = "UPDATE"
    INC.config.noimage = "https://jp.increasingly.co/Implementation/Ce5i9e/images/No-image.jpg"
    INC.config.recommendation = false;
    INC.config.bundledid=[]
    INC.config.cldomain = "";
    INC.config.checkoutpath = '/shop/cart/cart.aspx';
    INC.config.fabrictext="Select Fabric"
    INC.config.styleft="left:0 !important;position: relative;"
    INC.config.ctl_names = []
    INC.config.ctl_img_srcs = []
    INC.config.ctl_prices = []
    INC.config.qtyscross=[]
    INC.config.datastoreprod=[]
    INC.config.ddFlag = false;
    INC.config.catFlag = [];
    INC.config.prcText = "税込";
    var fabricprod=[]
    var addedProductIndex = [];
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
    // function addCSSFile() {
    //     var cssFilePath = "https://jp.increasingly.co/Clients/ehapi/css/ehapi.css";
    //     var linkTag = document.createElement('link');
    //     linkTag.rel = "stylesheet";
    //     linkTag.href = cssFilePath;
    //     document.querySelector('head').appendChild(linkTag);
    // }
    // addCSSFile()
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
    function dynamicSort(property) {
        return function (a, b) {
        return (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        }
    }
    INC.init = function () {
        INC.config.datastoreprod=[]
        INC.config.dupDataObjectProducts = [];
        INC.methods.addVisitorID();
        INC.config.pageType = INC.methods.detectPageType();
        INC.methods.clear();
        switch (INC.config.pageType) {
            case "pdp":
                // var SpecialProduct = true;
                // if (document.querySelector(".block-goods-comment4 .goods_com .gc_txt") != null){
                //     if (document.querySelector(".block-goods-comment4 .goods_com .gc_txt").innerText == '初回限定特別価格の商品は1世帯につき1回限りのため、お届け先はご自宅のみとさせていただきます。'){
                //         SpecialProduct = false;
                //         console.log("Special Product")
                //     }
                // }
                // if (SpecialProduct){
                //     console.log("Not Special Product")
                    var productId = INC.methods.getProductIdFromWebPage();
                    if (document.querySelector('.block-no-stock .block-no-stock--message') != null){
                        if (document.querySelector('.block-no-stock .block-no-stock--message').classList.contains('disabled')){
                            oosStatus = true;
                            // oosproduct(productId);
                        }
                    } else {
                        oosStatus = false;
                    }
                    if (oosStatus == false){
                        INC.methods.irbReq(productId, 5, "catalog_product_view");
                    }
                // }
                break;
            case "cartPage":
                if (window.innerWidth < 820){
                    Array.prototype.forEach.call(document.querySelectorAll(".block-cart--body .block-cart--goods-list .block-cart--goods-list-image"),function(elProductCode) {
                            var cartId = elProductCode.querySelector('img').getAttribute('data-src').split('.')[0].split('goods/S/')[1].replace('s','')
                            INC.config.cartproductids.push(cartId);
                    });
                } else {
                    Array.prototype.forEach.call(document.querySelectorAll(".block-cart--container .block-cart--goods-list .js-enhanced-ecommerce-item .block-cart--goods-list-image"), function(elProductCode) {
                        var cartId = elProductCode.querySelector('img').getAttribute('data-src').split('.')[0].split('goods/S/')[1].replace('s','')
                        INC.config.cartproductids.push(cartId);
                    });
                }
                    if (INC.config.cartproductids.length > 0) {
                        INC.methods.irbReq(INC.config.cartproductids, 12, "checkout_cart_index");
                    }

                break;
            case "productList":
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
                            bundleObj.bundle_percentage = irbBundleObj["BundleDiscountPercentage"];
                            bundleObj.bundle_promo = irbBundleObj["BundleLevelDiscountMessage"];
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
                                    var fabricattr=false;
                                    if(pAttributes != null){
                                        if(pAttributes[0] != undefined){
                                            if(pAttributes[0].attributeId.split("|")[0] == INC.config.fabrictext){
                                                fabricattr = true
                                            }
                                        }
                                    }
                                    if(fabricattr == trueflag){
                                        var fabricvariants=[];
                                        var fabricattributes=[];
                                        for (var pm in pAttributes) {
                                            if(Object.prototype.hasOwnProperty.call(pAttributes, pm)){
                                                if(pAttributes[pm].attributeId.split("|")[0] == INC.config.fabrictext){
                                                    var atvalues = pAttributes[pm].attributeValues;
                                                    for (var vS in atvalues) {
                                                        if(Object.prototype.hasOwnProperty.call(atvalues, vS)){
                                                            var opttex=atvalues[vS].optionText
                                                            atvalues[vS].att_id = pAttributes[pm].attributeCode;
                                                            atvalues[vS].att_lebel = pAttributes[pm].frontEndLabel;
                                                            atvalues[vS].optionId1 = 0;
                                                            atvalues[vS].optionText1 = atvalues[vS].optionText
                                                            atvalues[vS].optionText = opttex.split('_')[0] + "_" + pAttributes[pm].frontEndLabel;
                                                            atvalues[vS].attrLength = pAttributes.length;
                                                            fabricvariants.push(atvalues[vS])
                                                        }
                                                    }
                                                }
                                            }
                                        }
                                        fabricattributes.push({
                                            attributeIdAd : 0,
                                            attributeCode: "Color",
                                            attributeId: "0",
                                            attributeValues: fabricvariants,
                                            frontEndLabel: INC.config.fabrictext
                                        })
                                        pAttributes = fabricattributes
                                    }else{

                                        if (pAttributes != "" && pAttributes != null) {
                                            var checkforatt=0
                                            var clrflg=false;
                                            for (var p in pAttributes) {
                                                if(Object.prototype.hasOwnProperty.call(pAttributes, p)){
                                                    if (pAttributes[p].attributeCode == "color" || pAttributes[p].attributeCode == "Colour") {
                                                        if(pAttributes[0].attributeValues[0].optionImageUrl != null || pAttributes[0].attributeValues[0].colorCode != null){
                                                            pAttributes[p].attributeCode = "Color"
                                                            clrflg = true;
                                                        }
                                                    }
                                                    if (pAttributes[p].attributeCode == "size" || pAttributes[p].attributeCode == "Base Colour" || pAttributes[p].attributeCode == "Base Type") {
                                                        pAttributes[p].attributeCode = "Size"
                                                    }else if (pAttributes[p].attributeCode == "Leather") {
                                                        pAttributes[p].attributeCode = "Size"
                                                    }else{
                                                        if(clrflg == trueflag){
                                                            if(checkforatt == 0 && pAttributes[0].attributeCode != "Color"){
                                                                pAttributes[p].attributeCode = "Size"
                                                            }else{
                                                                if(clrflg != trueflag){
                                                                    pAttributes[p].attributeCode = "Length"
                                                                }
                                                            }
                                                        }else if(checkforatt == 1){
                                                            pAttributes[p].attributeCode = "Size_"
                                                        }else if(checkforatt == 2){
                                                            pAttributes[p].attributeCode = "Length"
                                                        }
                                                    }
                                                    if(pAttributes.length == 1){
                                                        if (pAttributes[p].attributeCode == "color" || pAttributes[p].attributeCode == "Color" || pAttributes[p].attributeCode == "Colour") {
                                                            pAttributes[p].attributeCode = "Color"
                                                        }else{
                                                            pAttributes[p].attributeCode = "Size"
                                                        }
                                                    }
                                                    checkforatt++
                                                }
                                            }
                                            pAttributes = attribute_listing(pAttributes)
                                        }
                                    }
                                    if (pAttributes.length > 1) {
                                        
                                        var fabricattributes = [];
                                        // for (var pm in pAttributes) {
                                        // if (Object.prototype.hasOwnProperty.call(pAttributes, pm)) {
                                        // if (pm != 0) {
                                        var atvalues = pAttributes[1].attributeValues;
                                        var atvaluesfirst = pAttributes[0].attributeValues;
                                        for(var c=0;c<atvaluesfirst.length;c++){
                                            for (var vS in atvalues) {
                                                atvalues = atvalues.sort(dynamicSort('childProductId'))
                                                if (Object.prototype.hasOwnProperty.call(atvalues, vS)) {
                                                    if (atvaluesfirst[c].childProductId == atvalues[vS].childProductId) {
                                                        atvaluesfirst[c].optionText = atvaluesfirst[c].optionText + " / " + atvalues[vS].optionText
                                                        atvaluesfirst[c].optionImageUrl = atvalues[vS].optionImageUrl
                                                    }
                                                }
                                            }
                                        }
                                        // }
                                        // }
                                        // }
                                        fabricattributes.push({
                                            attributeIdAd: 0,
                                            attributeCode: "Size",
                                            attributeId: "0",
                                            attributeValues: pAttributes[0].attributeValues,
                                            frontEndLabel: "Size"
                                        })
                                        pAttributes = fabricattributes
                                    }
                                    var pAttObj = {};
                                    var attr_values = '';
                                    var atcounts=0
                                    for (var t in pAttributes) {
                                        if(Object.prototype.hasOwnProperty.call(pAttributes, t)){
                                            if (pAttributes.length == 1) {
                                                var attcsplitb=""
                                                if(pAttributes[0].attributeId != undefined && pAttributes[0].attributeId != 0 && pAttributes[0].attributeId != 1){
                                                    attcsplitb = pAttributes[0].attributeId.split("|")[0]
                                                }
                                                if ((pAttributes[0].attributeCode == "Color" || pAttributes[0].attributeCode == "color") && attcsplitb != INC.config.fabrictext) {
                                                    pAttributes[0].attributeIdAd = 0;
                                                    attr_values = pAttributes[t].attributeValues;
                                                    for (var v in attr_values) {
                                                        if(Object.prototype.hasOwnProperty.call(attr_values, v)){
                                                            attr_values[v].optionId1 = 0;
                                                        }
                                                    }
                                                } else if(attcsplitb != INC.config.fabrictext){
                                                    pAttributes[0].attributeIdAd = 1;
                                                    attr_values = pAttributes[t].attributeValues;
                                                    for (var vb in attr_values) {
                                                        if(Object.prototype.hasOwnProperty.call(attr_values, vb)){
                                                            attr_values[vb].optionId1 = 1;
                                                        }
                                                    }
                                                }
                                            } else {
                                                if(pAttributes[0].attributeCode != "Color" && pAttributes[1].attributeCode != "Color"){
                                                    if(atcounts == 0){
                                                        atcounts++
                                                    }
                                                }
                                                pAttributes[t].attributeIdAd = atcounts
                                                attr_values = pAttributes[t].attributeValues;
                                                for (var va in attr_values) {
                                                    if(Object.prototype.hasOwnProperty.call(attr_values, va)){
                                                        attr_values[va].optionId1 = atcounts;
                                                    }
                                                }
                                                atcounts++
                                            }
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
                                                        childProduct["Manufacturer"] = product["Manufacturer"];
                                                        

                                                        productObj = new INC.classes.ProductAttObj(childProduct);
                                                        
                                                        productObj["bundledProductId"] = pdpProductId;
                                                        productObj.mainId = product["ProductId"];
                                                        productObj.bundleId = bundleObj.id;
                                                        productObj.bundle_promotion = bundleObj.bundle_promo
                                                        productObj.bundle_percentage = bundleObj.bundle_percentage
                                                        productObj.sku = productObj.id;
                                                        productObj.option[pAttributesObj["attributeIdAd"]].id = pAttributesObj["attributeId"];
                                                        productObj.option[pAttributesObj["attributeIdAd"]].label = pAttributesObj["frontEndLabel"];
                                                        productObj.option[pAttributesObj["attributeIdAd"]].code = pAttributesObj["attributeCode"];
                                                        productObj.option[pAttributesObj["attributeIdAd"]].att_id = pAttributesObj.attributeId
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
                                        productObj.bundle_promotion = irbBundleObj["BundleLevelDiscountMessage"];
                                        productObj.bundle_percentage = irbBundleObj["BundleDiscountPercentage"];
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
                console.error('e', e.stack);
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
                                if (productListObj[mainProductId][childProductId]["option"]["0"].code == "Color") {
                                    if (productListObj[mainProductId][childProductId]["option"] != null &&
                                        productListObj[mainProductId][childProductId]["option"] != undefined &&
                                        productListObj[mainProductId][childProductId]["option"]["0"] != null &&
                                        productListObj[mainProductId][childProductId]["option"]["0"] != undefined) {
                                        if (type_of != undefined) {
                                            var attr_block = null;
                                            if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == falseflag) {
                                                attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                            } else {
                                                attr_block = type_of.parentNode.parentNode.parentNode
                                            }
                                            var opt_text = ""
                                            var opt_size_text = ""
                                            if (type_of.parentNode != null) {
                                                opt_text = attr_block.getAttribute('data-zero');
                                                if(attr_block.getAttribute('data-size') != undefined){
                                                    opt_size_text = attr_block.getAttribute('data-size');
                                                }
                                            } else {
                                                opt_text = type_of.innerText;
                                            }

                                            if (opt_text != "" && opt_size_text != "" && productListObj[mainProductId][childProductId].option[1] != undefined && productListObj[mainProductId][childProductId].option[2] != undefined) {
                                                if (productListObj[mainProductId][childProductId].option[1].text == opt_text && productListObj[mainProductId][childProductId].option[2].text == opt_size_text) {
                                                    colordata(productColorArrayObj,productListObj,mainProductId,childProductId)
                                                }
                                            } else if (opt_text != "" && productListObj[mainProductId][childProductId].option[1] != undefined) {
                                                if (productListObj[mainProductId][childProductId].option[1].text == opt_text) {
                                                    colordata(productColorArrayObj,productListObj,mainProductId,childProductId)
                                                }
                                            } else {
                                                colordata(productColorArrayObj,productListObj,mainProductId,childProductId)
                                            }
                                        } else {
                                            colordata(productColorArrayObj,productListObj,mainProductId,childProductId)
                                        }
                                    }
                                }
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
                                        if(opt_text != "" && opt_size_text != "" && productListObj[mainProductId][childProductId].option[0]){
                                            if(productListObj[mainProductId][childProductId].option[1].text == opt_text && productListObj[mainProductId][childProductId].option[0].text == opt_size_text){
                                                attr_flag = "fir_block"
                                            }
                                        }else{
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
            if (Object.prototype.hasOwnProperty.call(findObj, "mainId")) {
                for (var  mainProductId in productListObj) {
                    if (mainProductId == findObj["mainId"]) {
                        for (var  childProductId in productListObj[mainProductId]) {
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
                                    zerodata(product0ArrayObj,productListObj,mainProductId,childProductId)
                                } else {
                                    if (findObj.colorText != undefined) {
                                        if (productListObj[mainProductId][childProductId].option["0"].text.trim().toLocaleLowerCase() == findObj.colorText.trim().toLocaleLowerCase()) {
                                            zerodata(product0ArrayObj,productListObj,mainProductId,childProductId)
                                        }
                                    } else {
                                        zerodata(product0ArrayObj,productListObj,mainProductId,childProductId)
                                    }
                                }
                            }
                        }
                    }
                }
            }
            var oneattflg=false;
            Object.keys(product0ArrayObj).forEach(function (colorText) {
                var attr0Obj = {}
                if(colorText.indexOf('セット') >= 0){
                    oneattflg = true
                }
                attr0Obj["text"] = colorText;
                attr0Obj["text1"] = colorText.split('セット')[0];
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
            if(oneattflg == true){
                product0Obj["att0Array"] =  sortByKey(product0ObjArray, 'text1');
            }else{
                product0Obj["att0Array"] =  sortByKey(product0ObjArray, 'text');
            }
           
            return product0Obj;
        }
        function zerodata(product0ArrayObj,productListObj,mainProductId,childProductId){
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
            if(findObj.mainId != undefined && productListObj != undefined){
                mainProductListObj = productListObj[findObj.mainId];
            }
            for (var  childProductId in mainProductListObj) {
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
                } else if (findObj.zeroText == "" && findObj.sizeText == "" && findObj.thirdText == "" && findObj.colorText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined) {
                    if (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if (findObj.zeroText != "" && findObj.sizeText == "" && findObj.thirdText == "" && findObj.colorText == "" && mainProductListObj[childProductId]["option"]["1"] != undefined) {
                    if (findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text) {
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
        this.childsku = ((product != null) && (product != undefined)) ? product["Field5"] : "";
        this.name = ((product != null) && (product != undefined)) ? product["ProductName"] : "";
        // if (product["ProductUrl"].indexOf('shop=0') <= 0){
        //     this.url = product["ProductUrl"].replace('https://cefinecosmetics.co.jp/Form/Product/ProductDetail.aspx?','https://cefinecosmetics.co.jp/Form/Product/ProductDetail.aspx?shop=0&')
        // } else {
            this.url = product["ProductUrl"]
        // }
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
        this.manufacturer = ((product != null) && (product != undefined)) ? product["Manufacturer"] : "";
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
        if(product["childProductField5"] != null){
            this.childsku = ((product != null) && (product != undefined)) ? product["childProductField5"] : "";
        }else{
            this.childsku = product["childProductId"];
        }
        if (product["childProductName"] != null) {
            this.name = product["childProductName"];
        }else{
            this.name = "";
        }
        // if (product["childProductUrl"].indexOf('shop=0') <= 0){
        //     this.url = product["childProductUrl"].replace('https://cefinecosmetics.co.jp/Form/Product/ProductDetail.aspx?','https://cefinecosmetics.co.jp/Form/Product/ProductDetail.aspx?shop=0&')
        // } else {
            this.url = product["childProductUrl"]
        // }
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
            this.option[product["optionId1"]] = {};
            this.option[product["optionId1"]].text = product["optionText"];
            this.option[product["optionId1"]].titleText = (product["childProductField2"] != null) ? product["childProductField2"] : "";
            this.option[product["optionId1"]].imgSrc = (product["optionImageUrl"] != null) ? product["optionImageUrl"] : "";
            this.option[product["optionId1"]].colorCode = (product["colorCode"] != null) ? product["colorCode"] : "";
            this.option[product["optionId1"]].cpid = (product["childProductId"] != null) ? product["childProductId"] : "";
            this.option[product["optionId1"]].opt_id = (product["optionId"] != null) ? product["optionId"] : "";
            this.option[product["optionId1"]].opttext = product["optionText1"];
            this.option[product["optionId1"]].att_lebel = product.att_lebel;
            this.option[product["optionId1"]].field1 = product.childProductField1;
            this.option[product["optionId1"]].attrLength = product.attrLength;
            this.option[product["optionId1"]].activePriceChild = product.attrLength;
            if (product["childProductSpecialPrice"] != null && product["childProductSpecialPrice"] != product["childProductPrice"]) {
                if(parseFloat(product["childProductSpecialPrice"]) >  parseFloat(product["childProductPrice"])){
                    this.option[product["optionId1"]].activePriceChild = product["childProductSpecialPrice"]
                    this.option[product["optionId1"]].activePriceChild = product["childProductPrice"]
                }else{
                    this.option[product["optionId1"]].activePriceChild = product["childProductSpecialPrice"];
                }
            }else{
                this.option[product["optionId1"]].activePriceChild = product["childProductPrice"];
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
                INC.config.recommendation = true
                INC.dataStore.methods().buildDataStoreObj(bundleResponse);
                if ((incDataStore.dataStoreObj == null) || (incDataStore.dataStoreObj == undefined)) {
                    return;
                }
                if(INC.config.pageType == "pdp") {
                    INC.methods.createAMBlock("PDP")
                }
            }
        });
    }
    INC.methods.irbReq_is_tc = function (productIds, bundleCount, elementNameel) {
        var elementName = elementNameel || "";
        var productId = productIds;
        var apiKey = INC.config.clientToken;
        var bundleReqCount = bundleCount || 5;
        var irbPATH = "//jprapidload.increasingly.co/increasingly_bundles?irb/";
        var vi = INC.config.ivid
        var irbparam =
            "product_ids=" + productId +
            "&api_key=" + apiKey +
            "&page_type=" + elementName +
            "&fr=" + "1" +
            "&client_visitor_id=" + vi +
            "&is_tc=" + "1" +
            "&no_of_bundles=" + bundleReqCount;

        var irbReqURL1 = decodeURI(irbPATH + btoa(irbparam));
        var networkConfigObj = new INC.classes.NWConfig();
        networkConfigObj["url"] = irbReqURL1;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", networkConfigObj["url"], true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
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
        var product_id = '';
        
        if (document.querySelector('.pane-goods-header #hidden_variation_group') != null){
            var pid = document.querySelector('.pane-goods-header #hidden_variation_group').value;
        } else {
            if(document.querySelector('.page-goods .pane-main #hidden_variation_group') != null){
                var pid = document.querySelector('.page-goods .pane-main #hidden_variation_group').value
            }
        }
       
        INC.config.Product_id = pid
        return pid;
    }

    INC.methods.detectPageType = function () {
        if (document.querySelector('.page-goods') != null) {
            return "pdp";
        }
        if(document.querySelector('.page-cart') != null) {
            return "cartPage";
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
                    sidebarel.classList.add('inc_active')
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
            sidebarelhide.classList.remove('inc_active')
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
                setTimeout(function() {
                    INC.methods.createPDPBlock("sidebar")
                }, 200)
            }
        }else{
            INC.methods.clear()
        }
        Array.prototype.forEach.call(document.querySelectorAll(".inc_sidebar_overlay_block"), function (elm) {
            elm.parentNode.removeChild(elm);
        });
        setTimeout(function() {
            if (document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_block") != null) {
                document.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_block").classList.remove("is_special_ecirp");
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
           
        //     if(document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block')!=null){
        //         document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block').classList.remove('is_special_ecirp');
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
            var amProductListBlock = amBlock.querySelector(".inc_af_product-list_block");
            if (INC.dataStore.bundleProductsArray.length > 5){
                var bundleProductsArray = INC.dataStore.bundleProductsArray.slice(0,5)
            } else {
                var bundleProductsArray = INC.dataStore.bundleProductsArray;
            }
            console.log(bundleProductsArray)
            if (INC.config.pageType == "pdp") {
                if (INC.dataStore.bundleProductsArray.indexOf(INC.config.Product_id) == -1) {
                    INC.dataStore.bundleProductsArray.push(INC.config.Product_id)
                }
                INC.config.cartproductids = []
            }
            var duplamid = []
            var idExcl = ['200210212147000000','200210212148000000','200210213149000000','200210213150000000']
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
                let countBlockAdded = 0
                
                if (bundleProductsArray.length > 0){
                    bundleProductsArray.forEach(function (mainProductId) {
                        // if (idExcl.indexOf(mainProductId) < 0){
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
                        // }
                    });
                }
                let productListBlock = amBlock.querySelector('.inc_af_product-list_block')
                if (window.innerWidth < 820) {
                    if (window.innerWidth > 600) {
                        if (countBlockAdded <= 2) {
                            productListBlock.classList.add('less_product')
                            productListBlock.parentNode.classList.add('less_product')
                        }
                    } else {
                        if (countBlockAdded <= 4) {
                            productListBlock.classList.add('less_product')
                            productListBlock.parentNode.classList.add('less_product')
                        }
                    }
                } else {
                    if (countBlockAdded == 1) {
                        productListBlock.parentNode.classList.add('inc_one_product')
                        productListBlock.classList.add('inc_one_product')
                    } else if (countBlockAdded <= 4) {
                        productListBlock.classList.add('less_product')
                        productListBlock.parentNode.classList.add('less_product')
                    } else if (countBlockAdded == 3) {
                        productListBlock.classList.add('inc_three_products')
                        productListBlock.parentNode.classList.add('inc_three_products')
                    }
                }
            }
            // elAmTitleText1.innerText = "他のお客様も買ったアイテム"
            var amProductBlocks = amBlock.querySelectorAll('.inc_product_block');
            Array.prototype.forEach.call(amProductBlocks, function (productBlock) {
                productBlock.querySelector('.inc_product_desc_add_block').addEventListener("click", function () {
                    addprodsingle(this)
                });
            });
            
            var prod_sl_c = 1
            if (amBlock != null) {
                Array.prototype.forEach.call(document.querySelectorAll('.inc_af_block'), function (el) {
                    el.parentNode.removeChild(el);
                });
            }
            // if(amBlock.querySelector('.inc_af_block .inc_product_showcase_block') == null){
            //     return;
            // }
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
                    if (document.querySelector('.karte-widget .karte-widget__content').innerHTML != '' && document.querySelector('.karte-widget .karte-widget__content ul').innerHTML.length < 0 &&  document.querySelector('.karte-widget .karte-widget__content section').style.display != 'none'){
                        var CartPos = document.querySelector('.karte-widget').parentNode
                    } else {
                        var CartPos= document.querySelector('#cart_itemhistory')
                    }
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
                cc_ount = 5
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
                    cc_ounts = 5
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
                    if (document.querySelector('.inc_af_product-list-dots-main_block .inc_dots.inc_active') != null) {
                        document.querySelector('.inc_af_product-list-dots-main_block .inc_dots.inc_active').classList.remove('inc_active')
                    }
                    if (document.querySelectorAll('.inc_af_product-list-dots-main_block .inc_dots')[+INC.clientConfig.slidevalue] != null) {
                        document.querySelectorAll('.inc_af_product-list-dots-main_block .inc_dots')[+INC.clientConfig.slidevalue].classList.add('inc_active')
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
                    if (document.querySelector('.inc_af_product-list-dots-main_block .inc_dots.inc_active') != null) {
                        document.querySelector('.inc_af_product-list-dots-main_block .inc_dots.inc_active').classList.remove('inc_active')
                    }
                    if (document.querySelectorAll('.inc_af_product-list-dots-main_block .inc_dots')[+INC.clientConfig.slidevalue] != null) {
                        document.querySelectorAll('.inc_af_product-list-dots-main_block .inc_dots')[+INC.clientConfig.slidevalue].classList.add('inc_active')
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
                            main_idsd = prd_moduleb.getAttribute('data-sku')
                        }
                        if(all_list_el[all_list].querySelector('.inc_product_desc_att_zero_block.inc_active') != null){
                            if(prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="'+main_idsd+'"]') != null){
                                if(prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="'+main_idsd+'"] .inc_product_desc_att_size_list_item_img_block') != null){
                                    prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="'+main_idsd+'"] .inc_product_desc_att_size_list_item_img_block').click()
                                }else if(all_list_el[all_list].querySelector('.inc_product_desc_att_size_list_item_img_block') != null){
                                    all_list_el[all_list].querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                                }
                            } 
                        }else if(all_list_el[all_list].querySelector('.inc_product_desc_att_color_block.inc_active') != null){
                            if(prd_moduleb.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="'+main_idsd+'"]') != null){
                                if(prd_moduleb.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="'+main_idsd+'"].inc_product_desc_att_color_list_item_img_block') != null){
                                    prd_moduleb.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="'+main_idsd+'"].inc_product_desc_att_color_list_item_img_block').click()
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
    function addprodsingle(element){
        var productBlockNode = element.parentNode.parentNode;
        var flag_check = INC.methods.checkVariantSelection(productBlockNode)
        if (element.parentNode.parentNode.className == "inc_product_desc_block") {
            productBlockNode = element.parentNode.parentNode.parentNode.parentNode
        }
        if(productBlockNode.classList.contains('inc_product_block') == trueflag){
            productBlockNode = productBlockNode.parentNode.parentNode
        }
        var sku = productBlockNode.getAttribute('data-sku');
        var findObj = new INC.classes.FindObj({
            id: sku
        });
        var add_btn = productBlockNode.querySelector('.inc_product_add_text')
        var add_btn_click = productBlockNode.querySelector('.inc_product_add_text');
        var add_prod_im = productBlockNode.querySelectorAll('.inc_product_desc_add_img');
        if (flag_check == 1) {
            if (INC.config.disablebtn == trueflag) {
                INC.config.disablebtn = false;
                if (element.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_showcase_block') == trueflag || element.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_modal_block') == trueflag) {
                    var popbtn=productBlockNode.querySelector('.inc_product_modal_block .inc_product_desc_add_text')
                    popbtn.innerText = "追加中..."
                    productBlockNode.querySelector('.inc_product_add_text').innerText = "追加中..."
                    INC.methods.addProductToCart(findObj, productBlockNode, add_btn_click, add_prod_im, add_btn,popbtn);
                }
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
                modalTitle.innerText = INC.config.FBTTitle
                
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
                elPdpMainProductBlock.appendChild(mainProductBlock);
                pdpBundleProductListMainBlock = pdpBlock.querySelector('.inc_pdp_bundle_product_list_main_block');
                pdpBundleProductListMainBlock.innerHTML = "";
                var pdpBundleProductListItemsBlock = pdpBlock.querySelector('.inc_pdp_bundle_product_list_items_block');
                pdpBundleProductListItemsBlock.innerHTML = "";
                if (Object.keys(INC.dataStore.dataStoreObj).length > 2){
                    var productVisibleCount = 2;
                } else {
                    var productVisibleCount = 1;
                }
                for (var i = 0; i < productVisibleCount; i++) {
                    firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: bundleProductsArray[i] });
                    var productBlock = this.createProductModuleBlock(firstProductObjByMainId.id, "pdp", true, pdpBlock);
                    productBlock.setAttribute('b-index', i + 1);
                    pdpBundleProductListMainBlock.appendChild(productBlock);
                    var productListItemBlock = this.createProductListItemBlock(firstProductObjByMainId, "pdp");
                    pdpBundleProductListItemsBlock.appendChild(productListItemBlock);
                }
                
                var header = pdpBlock.querySelector('.inc_pdp_bundle_product_header_text');
                if (header != null) {
                    header.innerText = "Frequently Bought with"
                    header.style.textTransform = "none"
                }
                
                var mainprodimgsrc=pdpBlock.querySelector('.inc_pdp_product-main_block .inc_product_img_main_img img').getAttribute('data-src')
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
                if(document.querySelector('.box-tocart') != null){
                    if(document.querySelector('.box-tocart').style.display == 'none'){
                        pdpBlock.style.display = "none"
                        inc_bundle_avail_block.setAttribute('style','display: none !important')
                    }
                }
                if(document.querySelector('.product-info-main .product-info-stock-sku .stock.unavailable') != null){
                    pdpBlock.style.display = "none"
                    inc_bundle_avail_block.setAttribute('style','display: none !important')
                }
                if(document.querySelector('.swatch-attribute-selected-option.unavailable') != null){
                    pdpBlock.style.display = "none"
                    inc_bundle_avail_block.setAttribute('style','display: none !important')
                }
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
                pdpBlock.querySelector('.inc_pdp_bundle_product_list_items_block').classList.add("inc_active");
                var pdpBundleCartBlock = this.createPDPBundleCartBlock(pdpBlock);
                var rpdpBundleCartBlock = pdpBlock.querySelector('.inc_pdp_bundle_cart_block')
                rpdpBundleCartBlock.parentNode.removeChild(rpdpBundleCartBlock);
                pdpBlock.querySelector('.inc_pdp_bundle_block').appendChild(pdpBundleCartBlock);
                var pdpBlockSibling = null
                if (window.innerWidth > 1139){
                    pdpBlockSibling = document.querySelector('.pane-main .pane-goods-center .block-goods-comment5')
                } else {
                    pdpBlockSibling = document.querySelector('.pane-main .block-goods-comment-tab-container')
                }
                var fabricavail=false
                var client_var = ""
                if (document.querySelector('.block-variation--selected-item') != null){
                    if (document.querySelectorAll('.block-variation--selected-item').length > 1){
                        if (document.querySelectorAll('.block-variation--selected-item')[0].innerText != null){
                            var siz = document.querySelectorAll('.block-variation--selected-item')[0].innerText.split('：')[1].trim()
                        }
                        if (document.querySelectorAll('.block-variation--selected-item')[1].innerText != null){
                            var col = document.querySelectorAll('.block-variation--selected-item')[1].innerText.split('：')[1].trim()
                        }
                        client_var = siz +" "+"/"+" "+ col
                    } else {
                        if (document.querySelectorAll('.block-variation--selected-item')[0].innerText != null){
                            var client_var = document.querySelectorAll('.block-variation--selected-item')[0].innerText.split('：')[1].trim()
                        }
                    }
                }
                var inc_link_tag = generate_html_tag('a')
                var inc_goes_img_tag = generate_html_tag('img')

                var inc_link_tag2 = generate_html_tag('a')
                var inc_goes_img_tag2 = generate_html_tag('img')

                if (window.innerWidth > 800) {
                    var siblmainbundle = pdpBlock.querySelector('.inc_pdp_bundle_cart_title_block')
                    var inc_img_together_block = generate_html_tag('div', 'inc_img_together_block')
                    siblmainbundle.parentNode.insertBefore(inc_img_together_block, siblmainbundle)
                    var inc_main_img_block = generate_html_tag('div', 'inc_main_img_block')
                    inc_img_together_block.appendChild(inc_main_img_block)
                    var inc_plus_icon = generate_html_tag('div', 'inc_plus_icon')
                    inc_img_together_block.appendChild(inc_plus_icon)
                    var inc_link_tagM = generate_html_tag('a')
                    inc_main_img_block.appendChild(inc_link_tagM)
                    var inc_main_img_tagM = generate_html_tag('img')
                    inc_link_tagM.appendChild(inc_main_img_tagM)
                    var imgblockMain = mainProductBlock.querySelector('.inc_product_img_main_img')
                    var src_main = imgblockMain.querySelector('img').src
                    var href_main = imgblockMain.querySelector('a').href
                    inc_main_img_tagM.setAttribute('src', src_main)
                    inc_main_img_tagM.setAttribute('role', 'img')
                    inc_link_tagM.href = href_main;
                    inc_main_img_block.addEventListener("click", function () {
                        // 
                    });
                    inc_link_tagM.addEventListener("click", function (e) {
                        e.preventDefault()
                    })
                    var inc_goes_img_block = generate_html_tag('div', 'inc_goes_img_block')
                    inc_goes_img_block.setAttribute('id', bundleProductsArray[0])
                    inc_img_together_block.appendChild(inc_goes_img_block)
                    
                    inc_goes_img_block.appendChild(inc_link_tag)
                    inc_link_tag.appendChild(inc_goes_img_tag)
                    inc_goes_img_tag.setAttribute('role', 'img')
                    inc_goes_img_block.addEventListener("click", function (e) {
                        // e.preventDefault()
                        var bundlprd=document.querySelectorAll('.inc_pdp_bundle_product_list_main_block .inc_product_module_block')
                        INC.methods.sendBundleClickTracking(e.target.parentNode.parentNode.getAttribute('id'));
                        getTrackingPixel();
                        if (window.location.hostname == 'tt311.w2solution.com'){
                            var href = bundlprd[0].querySelector('.inc_product_img_main_img a').href.replace('https://cefinecosmetics.co.jp/','https://tt311.w2solution.com/Test/R1024_Cefine/');
                        } else {
                            var href = bundlprd[0].querySelector('.inc_product_img_main_img a').href
                        }
                        setTimeout(function(){
                            window.location.href = href
                        },3000)
                    });
                    if (Object.keys(INC.dataStore.dataStoreObj).length > 2){
                        var inc_plus_icon = generate_html_tag('div', 'inc_plus_icon')
                        inc_img_together_block.appendChild(inc_plus_icon)

                        var inc_goes_img_block = generate_html_tag('div', 'inc_goes_img_block')
                        inc_goes_img_block.setAttribute('id', bundleProductsArray[1])
                        inc_img_together_block.appendChild(inc_goes_img_block)
                        
                        inc_goes_img_block.appendChild(inc_link_tag2)
                        inc_link_tag2.appendChild(inc_goes_img_tag2)
                        inc_goes_img_tag2.setAttribute('role', 'img')
                        inc_goes_img_block.addEventListener("click", function (e) {
                            // e.preventDefault()
                            var bundlprd=document.querySelectorAll('.inc_pdp_bundle_product_list_main_block .inc_product_module_block')
                            INC.methods.sendBundleClickTracking(bundlprd.getAttribute('data-main_id'));
                            getTrackingPixel();
                            if (window.location.hostname == 'tt311.w2solution.com'){
                                var href = bundlprd[1].querySelector('.inc_product_img_main_img a').href.replace('https://cefinecosmetics.co.jp/','https://tt311.w2solution.com/Test/R1024_Cefine/');
                            } else {
                                var href = bundlprd[1].querySelector('.inc_product_img_main_img a').href
                            }
                            setTimeout(function(){
                                window.location.href = href
                            },3000)
                        });
                    }
                }
                if (window.innerWidth > 800) {
                    var g_src_img = pdpBundleProductListMainBlock.querySelectorAll('.inc_product_img_main_img img')[0].src
                    var g_href_a = pdpBundleProductListMainBlock.querySelectorAll('.inc_product_img_main_img a')[0].href
                    inc_goes_img_tag.setAttribute('src', g_src_img)
                    inc_link_tag.href = g_href_a;
                    if (Object.keys(INC.dataStore.dataStoreObj).length > 2){
                        var g_src_img = pdpBundleProductListMainBlock.querySelectorAll('.inc_product_img_main_img img')[2].src
                        var g_href_a = pdpBundleProductListMainBlock.querySelectorAll('.inc_product_img_main_img a')[2].href
                        inc_goes_img_tag2.setAttribute('src', g_src_img)
                        inc_link_tag2.href = g_href_a;
                    }
                }
                if(document.querySelector('.product-add-form .swatch-option') != null && client_var == ""){
                    if(document.querySelector('.product-add-form .swatch-option').getAttribute('data-option-label') != null){
                        client_var = document.querySelector('.product-add-form .swatch-option').getAttribute('data-option-label').trim().toLocaleLowerCase()
                    }else if(document.querySelector('.page-product-bundle .fieldset-bundle-options .option .option+.label') != null){
                        client_var = document.querySelector('.page-product-bundle .fieldset-bundle-options .option .option+.label').parentNode.innerText.trim().toLocaleLowerCase()
                    }
                }
                
                if(pdpBlockSibling != null){
                    pdpBlockSibling.parentNode.insertBefore(pdpBlock,pdpBlockSibling)
                }
                
                var elProductAddBlock = pdpBlock.querySelectorAll('.inc_product_desc_add_block')
                var productBlocks = pdpBlock.querySelector('.inc_pdp_bundle_product_list_block').querySelectorAll('.inc_product_module_block');
                if (document.querySelector('.inc_pdp_product-main_block .inc_product_desc_title_text_header') != null) {
                    document.querySelector('.inc_pdp_product-main_block .inc_product_desc_title_text_header').innerHTML = "Selected Product"
                    document.querySelector('.inc_pdp_product-main_block .inc_product_desc_title_text_header').style.textTransform = "none"
                }
                pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute("style", "opacity:0.5");
                pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_img').setAttribute('title', 'Scroll left')
                pdpBlock.querySelector('.inc_pdp_bundle_product_right-btn_img').setAttribute('title', 'Scroll right')
                var sliderBtnCounter = 0;
                var lengthCount = productBlocks.length + 1;
                var prd_length = 1
                if (window.innerWidth > 1185) {
                    prd_length = 2
                }
                if (productBlocks.length > prd_length) {
                    pdpBlock.querySelector('.inc_pdp_bundle_product_right-btn_block').addEventListener("click", function () {
                        var prod_c = 1;
                        var width_prod = 256;
                        if(window.innerWidth >= 840 && window.innerWidth < 1190){
                            width_prod = 266;
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
                        var width_prod = 256;
                        if(window.innerWidth >= 840 && window.innerWidth < 1190){
                            width_prod = 266;
                        }else if(window.innerWidth > 1189){
                            if(window.innerWidth > 1368){
                                width_prod = 306;
                            } else{
                                width_prod = 276;
                            }
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
                setTimeout(function () {
                    for (var n = 0; n < 8; n++) {
                        if (typeof (elProductAddBlock[n]) != "undefined" && n % 2 != 0) {
                            if (n == 1 || n == 3 || n==5) {
                                elProductAddBlock[n].click();
                            }
                        }
                    }
                }, 100)
                setTimeout(function(){
                    if(document.querySelector('.inc_pdp_product-main_block .inc_product_showcase_block .inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block[datasize="'+client_var+'"]') != null){
                        document.querySelector('.inc_pdp_product-main_block .inc_product_showcase_block .inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block[datasize="'+client_var+'"]').click()
                    }else if(document.querySelector('.inc_pdp_product-main_block .inc_product_showcase_block .inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block') != undefined){
                        document.querySelector('.inc_pdp_product-main_block .inc_product_showcase_block .inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block').click()
                    }
                    if(document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_size_block .inc_product_desc_att_size_list_item_img_block[datasize="'+client_var+'"]') != null){
                        document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_size_block .inc_product_desc_att_size_list_item_img_block[datasize="'+client_var+'"]').click()
                    }else if(document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_size_block .inc_product_desc_att_size_list_item_img_block') != undefined){
                        document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_size_block .inc_product_desc_att_size_list_item_img_block').click()
                    }
                    
                    var el_all_list_main1 = document.querySelectorAll('.inc_product_showcase_block')
                    for (var li in el_all_list_main1) {
                        if(el_all_list_main1[li] != null && Object.prototype.hasOwnProperty.call(el_all_list_main1, li)){
                            if(el_all_list_main1[li].querySelector('.inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[datacolorfabric="'+client_var+'"] div') != null){
                                el_all_list_main1[li].querySelector('.inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[datacolorfabric="'+client_var+'"] div').click()
                            }else if(el_all_list_main1[li].querySelector('.inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[datacolor="'+client_var+'"] div') != null){
                                el_all_list_main1[li].querySelector('.inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[datacolor="'+client_var+'"] div').click()
                            }else if(el_all_list_main1[li].querySelector('.inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block div') != null){
                                var defaultColor = "渡辺直美カラー"
                                if (el_all_list_main1[li].querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="'+defaultColor+'"] div') != undefined){
                                    el_all_list_main1[li].querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="'+defaultColor+'"] div').click();
                                } else {
                                    el_all_list_main1[li].querySelector('.inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block div').click()
                                }
                            }
                        }
                    }
                    if(fabricavail == trueflag && client_var != "" && client_var != undefined){
                        if(document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[data-optid="'+client_var+'"] div') != null){
                            document.querySelector('.inc_pdp_product-main_block .inc_product_modal_block .inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[data-optid="'+client_var+'"] div').click()
                        }
                    }
                    var all_list_el = document.querySelectorAll('.inc_pdp_bundle_product_list_block .inc_product_showcase_block');
                    for (var ell in all_list_el) {
                        if(Object.prototype.hasOwnProperty.call(all_list_el, ell)){
                            var prd_moduleb = all_list_el[ell].parentNode
                            var main_idsd = prd_moduleb.getAttribute('data-main_id')
                            if(all_list_el[ell] != null){
                                
                                if(all_list_el[ell].querySelector('.inc_product_desc_att_zero_block.inc_active') != null){
                                    if(prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="'+main_idsd+'"]') != null){
                                        if(prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="'+main_idsd+'"] div') != null){
                                            prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="'+main_idsd+'"] div').click()
                                        }
                                    } else if(all_list_el[ell].querySelector('.inc_product_desc_att_size_list_item_img_block[datasize="'+client_var+'"] div') != undefined){
                                        all_list_el[ell].querySelector('.inc_product_desc_att_size_list_item_img_block[datasize="'+client_var+'"] div').click()
                                    }else if(all_list_el[ell].querySelector('.inc_product_desc_att_size_list_item_img_block') != null){
                                        all_list_el[ell].querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                                    }
                                }
                                if(all_list_el[ell].querySelector('.inc_product_desc_att_color_block.inc_active') != null){
                                    if(prd_moduleb.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="'+main_idsd+'"]') != null){
                                        if(prd_moduleb.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="'+main_idsd+'"] .inc_product_desc_att_color_list_item_img_block') != null){
                                            prd_moduleb.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="'+main_idsd+'"] .inc_product_desc_att_color_list_item_img_block').click()
                                        }
                                    } else if(all_list_el[ell].querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="'+client_var+'"] div') != undefined){
                                        all_list_el[ell].querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="'+client_var+'"] div').click()
                                    }else if(all_list_el[ell].querySelector('.inc_product_desc_att_color_list_item_img_block') != null){
                                        all_list_el[ell].querySelector('.inc_product_desc_att_color_list_item_img_block').click()
                                    }
                                }
                            }
                        }
                    }
                    
                    if(document.querySelector('.inc_bundle_avail_block img') != null && document.querySelector('.inc_pdp_product-main_block .inc_product_img_block img') != null){
                        document.querySelector('.inc_bundle_avail_block img').src= document.querySelector('.inc_pdp_product-main_block .inc_product_img_block img').getAttribute('data-src')
                    }
                    

                    if(document.querySelectorAll('.inc_bundle_avail_block img')[1] != undefined && document.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_img_main_img img') != null){
                        var thirdimg=document.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_img_main_img img').src
                        document.querySelectorAll('.inc_bundle_avail_block img')[1].src= thirdimg
                    }
                    
                },200)
                setTimeout(function(){
                    onloadpdp = true
                    onloadpdp_delete = true
                    var inc_prod_img =  document.querySelectorAll('.inc_product_img_main_img img')
                    for (var im in inc_prod_img) {
                        if(inc_prod_img[im] != undefined && Object.prototype.hasOwnProperty.call(inc_prod_img, im)){
                            inc_prod_img[im].setAttribute('style',INC.config.styleft)
                        }
                    }
                },500)
                // if (document.querySelector('#detailOne .errors').innerText.indexOf('の在庫がありません。') > 0 || document.querySelectorAll('.ChangesByVariation p')[1].innerText == "\n※こちらの商品は、サロン専売品です。サロン設置のQRコードからご登録いただいたサロンゴールド会員様が、ログイン後ご購入いただけます。"){
                //     pdpBlock.style.display = "none"
                //     // pdpbundleel.style.display = "none"
                // }
            }
            if (INC.config.Product_id.indexOf('&') > 0){
                var id = INC.config.Product_id.split('&')[0]
            } else {
                var id = INC.config.Product_id;
            }
            // if (id == '500230202118000000' || id == "200230184089000000" || id == "200210165085000000" || id == "200210165050000000"|| id == "200210205122000000" || id == "200230185091000000"){
            //     pdpBlock.style.display = "none"
            //     inc_bundle_avail_block.setAttribute('style','display: none !important')
            // }
        }
        if (sidebar == "sidebar") {
            this.createSidebarBlock();
        }
    }
    INC.methods.createPDPBundleCartBlock = function (pdpBlock) {
        var pdpBundleCartBlock = pdpBlock.querySelector('.inc_pdp_bundle_cart_block')
        var elBundleCartTitleText = pdpBlock.querySelector('.inc_pdp_bundle_cart_title_text')
        var elBundleCartAddedBlock = pdpBlock.querySelector('.inc_pdp_bundle_cart_added_block')
        var elBundleCartSummaryViewBtnText = pdpBlock.querySelector('.inc_pdp_bundle_cart_summary_view_btn_text');
        var elBundleCartAddBtnBlock = pdpBlock.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block');
        var elBundleCartAddBtncollectionBlock = pdpBlock.querySelector('.inc_pdp_bundle_cart_summary_add_btn_collection_block')
        if (window.innerWidth > 820) {
            elBundleCartTitleText.innerText = "Price Summary";
            elBundleCartAddedBlock.innerHTML = "";
            elBundleCartSummaryViewBtnText.innerText = "Added items";
        }
        if(elBundleCartAddBtnBlock != null){
            elBundleCartAddBtnBlock.addEventListener("click", function () {
                addbundlefn_('delivery',this)
            });
        }
        if(elBundleCartAddBtncollectionBlock != null){
            elBundleCartAddBtncollectionBlock.addEventListener("click", function () {
                addbundlefn_('collection',this)
            });
        }
        return pdpBundleCartBlock;
    }
    function addbundlefn_(typeadd,elm){
        checkAddedProductInJustAdded()
        elm.classList.add('inc_loading');
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
        var prd_length = 2
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
        if (INC.config.disablebtn == trueflag) {
            var btn_cart = elm
            INC.config.disablebtn = false
            btn_cart.classList.add('inc_loading')
            INC.methods.addBundleToCart(btn_cart,typeadd);
        }
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
        var dataStore = INC.dataStore;
        var sidebar_dialoge_block = document.createElement('div')
        sidebar_dialoge_block.classList.add('sidebar_outer')
        sidebar_dialoge_block.innerHTML = sidebar_html
        var sbBlock = sidebar_dialoge_block.querySelector('.inc_sidebar_modal_block');
        
        sbBlock.querySelector(".inc_cart_added_list_block").innerHTML = "";
        
        var elHeaderContinueText = sbBlock.querySelector(".inc_header_continue_text");
        var elHeaderTitleText = sbBlock.querySelector(".inc_header_title_text");
        var elHeaderItemCountTitleText = sbBlock.querySelector(".inc_header_item_count_title_text");
        var elRecommendedTitleText = sbBlock.querySelector(".inc_recommended_title_text");
        var elRecommendedTabsListBlock = sbBlock.querySelector(".inc_recommended_tabs_list_block")
        var elRecommendedProductsListBlock = sbBlock.querySelector(".inc_recommended_products_list_block");
        var elCheckoutContinueBtnText = sbBlock.querySelector(".inc_checkout_continue_btn_text");
        var elCheckoutBasketBtnText = sbBlock.querySelector(".inc_checkout_basket_btn_text");
        var elheaditemblock = sbBlock.querySelector(".inc_header_item_block");
        var elheadtitleblock = sbBlock.querySelector(".inc_header_title_block");
        var elclosesidebar = document.querySelector(".close_modal_inc");
        if(elclosesidebar != null){
            elclosesidebar.addEventListener('click', function () {
                closesidebar()
            })
        }
        elheaditemblock.addEventListener('click', function () {
            var cnt = document.querySelector('.inc_header_item_count_title_text').getAttribute('added_counts')
            if (cnt >= 1) {
                if (document.querySelector('.inc_sidebar_cart_added_block').classList.contains('inc_active') == trueflag) {
                    document.querySelector('.inc_sidebar_cart_added_block').classList.remove('inc_active')
                    var alladdedprodlength = document.querySelectorAll('.inc_cart_added_product_block').length;
                    var morecount = 2
                    if (window.innerWidth < 821) {
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
        elHeaderTitleText.innerText = "Just Added To Your Basket";
        elHeaderTitleText.style.textTransform = "none"
        
        if(dataStore.bundleCartProducts != undefined){
            elHeaderItemCountTitleText.innerText = "Subtotal";
            elRecommendedTitleText.innerText = INC.config.BeforeYouChecktext 
            elRecommendedTitleText.style.textTransform = "none"
            elCheckoutContinueBtnText.innerText = "Continue Shopping";
            var elCheckoutLink = elCheckoutBasketBtnText.querySelector('.view_basket_checkout')
            elCheckoutLink.setAttribute('href', INC.clientConfig.checkoutLink);
            var productCategoriesArray = dataStore.methods().getUniqueCatergories();
            elRecommendedTabsListBlock.innerHTML = "";
            elRecommendedProductsListBlock.innerHTML = "";
            var category_count = 0
            elRecommendedTabsListBlock.classList.add('inc_categ_' + Object.keys(productCategoriesArray).length)
            productCategoriesArray.forEach(function (productCategory) {
                if (category_count < 5 && productCategory != undefined) {
                    category_count++
                    var sidebarTabsListItemBlock = generate_html_tag('div','inc_recommended_tabs_list_item_block')
                    var tablistitm = '<div class="inc_recommended_tabs_list_item_text_block"><div class="inc_recommended_tabs_list_item_text"></div></div>'
                    sidebarTabsListItemBlock.innerHTML = tablistitm
                    var sidebarTabsListItemText = sidebarTabsListItemBlock.querySelector('.inc_recommended_tabs_list_item_text');
                    sidebarTabsListItemText.parentNode.parentNode.setAttribute('title', productCategory)
                    sidebarTabsListItemText.innerText = productCategory.toLocaleLowerCase();
                    sidebarTabsListItemText.setAttribute('style', 'text-transform:capitalize;')
                    sidebarTabsListItemBlock.addEventListener("click", function () {
                        var elrecprdlistblk = sbBlock.querySelector(".inc_recommended_products_list_block")
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
            var sbcontinue=sbBlock.querySelector(".inc_header_continue_block")
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
            var body = document.querySelector('body');
            body.appendChild(sidebar_dialoge_block);
            var elSideBarOverlayBlock = document.createElement('div');
            elSideBarOverlayBlock.setAttribute("class", "inc_sidebar_overlay_block");
            elSideBarOverlayBlock.addEventListener("click", function () {
                closesidebar()
            });
            elSideBarOverlayBlock.style.display = "none";
            body.appendChild(elSideBarOverlayBlock);
            if (INC.dataStore.dataStoreObj.undefined != undefined) {
                if (document.querySelector('.inc_recommended_products_block') != null) {
                    document.querySelector('.inc_recommended_products_block').style.display = "none"
                }
            }
        }
        setTimeout(function () {
            if (document.querySelector('.inc_recommended_products_list_block') != null) {
                document.querySelector('.inc_recommended_products_list_block').setAttribute('role', "contentinfo")
            }
            var inc_prod_img =  document.querySelectorAll('.inc_product_img_main_img img')
            for (var ig in inc_prod_img) {
                if(inc_prod_img[ig] != null && Object.prototype.hasOwnProperty.call(inc_prod_img, ig)){
                    inc_prod_img[ig].setAttribute('style',INC.config.styleft)
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
        var subtotalactiveprice = 0
        var subtotalregukarprice = 0
        var dataStore = INC.dataStore;
        var sbBlock = document.querySelector('.inc_sidebar_modal_block');
        if (sbBlock != null) {
            var sidebarHeaderItemCountTitleText = sbBlock.querySelector(".inc_header_item_count_title_text");
            var elHeadersubtotalactivetext = sbBlock.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_active_text");
            var elHeadersubtotalregulartext = sbBlock.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_regular_text");
            var sbCartBlock = sbBlock.querySelector(".inc_cart_added_list_block");
            var sidebarHeaderseelesstext = sbBlock.querySelector(".inc_header_item_count_figure_text");
            sidebarHeaderseelesstext.innerText = ""
            sbCartBlock.innerHTML = "";
            var bundleCartProductsArray = Object.keys(dataStore.bundleCartProducts);
            sidebarHeaderItemCountTitleText.innerHTML = "Subtotal";
            var headerItemCountFigureText = 0;
            subtotalactiveprice = 0
            subtotalregukarprice = 0
            var error_message = ""
            var oosname=[]
            var oosids=[]
            var remerrorjust=document.querySelectorAll('.inc_justerror')
            for (var r in remerrorjust) {
                if(remerrorjust[r] != null && Object.prototype.hasOwnProperty.call(remerrorjust, r)){
                    remerrorjust[r].parentNode.removeChild(remerrorjust[r])
                }
            }
            bundleCartProductsArray.forEach(function (productSKU) {
                if (dataStore.bundleCartProducts[productSKU] < 1) {
                    dataStore.bundleCartProducts[productSKU] = 1
                }
                var findObj = new INC.classes.FindObj({ sku: productSKU });
                var productObj = INC.dataStore.methods().getProductBySKU(findObj);
                if (INC.clientConfig.OOS.indexOf(productObj.mainId) >= 0) {
                    if(oosname.indexOf(productObj.name) == -1 && oosids.indexOf(productObj.mainId) == -1){
                        error_message = ""
                        oosids.push(productObj.mainId)
                        oosname.push(productObj.name)
                        if(error_message == ""){
                            error_message = "<span>"+productObj.name +"</span>" + " - " + "<span>The requested quantity is not available</span>"
                        }else{
                            error_message = error_message + " <br> " + "<span>"+productObj.name +"</span>" + " - " + "<span>The requested quantity is not available</span>"
                        }
                        var headertitle=sbBlock.querySelector('.inc_sidebar_modal_cart_and_title_block')
                        var errormes = generate_html_tag('div','inc_justerror')
                        var errorimg = generate_html_tag('img','errorimg')
                        errorimg.src = productObj.imageURL
                        errormes.appendChild(errorimg)
                        var errormestext = generate_html_tag('span','inc_justerror_text')
                        errormestext.innerHTML = error_message
                        errormes.appendChild(errormestext)
                        headertitle.parentNode.insertBefore(errormes,headertitle)
                        setTimeout(function(){
                            var remoerroblk=document.querySelectorAll('.inc_justerror')
                            for (var re in remoerroblk) {
                                if(remoerroblk[re] != null && Object.prototype.hasOwnProperty.call(remoerroblk, re)){
                                    remoerroblk[re].parentNode.removeChild(remoerroblk[re])
                                }
                            }
                        },5000)
                    }
                }else{
                    headerItemCountFigureText = headerItemCountFigureText + parseInt(dataStore.bundleCartProducts[productSKU]);
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
                    var sel_size = ""
                    if (color != "" && color != undefined && color != null) {
                        sel_size = "Color" + color;
                    } else if (size != "" && size != undefined && size != null) {
                        sel_size = "Size" + size;
                    }
                    var activePrice = parseFloat(productObj.activePrice).toFixed(2);
                    subtotalactiveprice = (+subtotalactiveprice + (+productObj.activePrice * dataStore.bundleCartProducts[productSKU]));
                    subtotalregukarprice = (+subtotalregukarprice + (+productObj.regularPrice * dataStore.bundleCartProducts[productSKU]));

                    var addedhtml = '<div class="inc_cart_added_product_img_block"><div class="inc_cart_added_product_img"><img class="inc_lazy" src="'+productObj.imageURL+'" data-src="'+productObj.imageURL+'" alt="'+productObj.name+'"><div class="sidebar_product_quantity_label">'+dataStore.bundleCartProducts[productSKU]+'</div></div><div class="inc_cart_added_product_desc_block"><div class="inc_cart_added_product_desc_title_block"><div class="inc_cart_added_product_desc_title_text_block"><div class="inc_cart_added_product_desc_title_text" title="Easidri Cooling Coat Wide Fit" style="text-transform: unset;">'+dataStore.bundleCartProducts[productSKU] + ' X ' + productObj.name+'</div></div></div><div class="inc_cart_added_product_desc_att_block"><div class="inc_cart_added_product_desc_att_color_block"><div class="inc_cart_added_product_desc_att_color_text_block"><div class="inc_cart_added_product_desc_att_color_text_block"></div></div></div><div class="inc_cart_added_product_desc_att_size_block"><div class="inc_cart_added_product_desc_att_size_text_block"><div class="inc_cart_added_product_desc_att_size_text">'+sel_size+'</div></div></div></div><div class="inc_cart_added_product_desc_ecirp_block"><div class="inc_cart_added_product_desc_ecirp_active_block"><div class="inc_cart_added_product_desc_ecirp_active_text_block"><div class="inc_cart_added_product_desc_ecirp_active_text">'+formatter.format(activePrice)+'</div><div class="inc_cart_added_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_cart_added_product_desc_ecirp_regular_block"><div class="inc_cart_added_product_desc_ecirp_regular_text_block"><div class="inc_cart_added_product_desc_ecirp_regular_text"></div></div></div></div><div class="inc_cart_added_product_qty_block"></div></div></div>'
                    var productBlock = generate_html_tag('div','inc_cart_added_product_block');
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
            var sidebarsaveprc = get_discount_price(subtotalregukarprice, subtotalactiveprice)
            if (+subtotalactiveprice != null && (+subtotalactiveprice < +subtotalregukarprice)) {
                elHeadersubtotalactivetext.setAttribute('subtotalActiveprice', subtotalactiveprice)
                elHeadersubtotalregulartext.setAttribute('subtotalRegularprice', subtotalregukarprice)
                elHeadersubtotalactivetext.innerHTML = formatter.format(subtotalactiveprice) + "<span>("+INC.config.prcText+") </span>"
                elHeadersubtotalregulartext.innerHTML =  formatter.format(subtotalregukarprice) + "<span>("+INC.config.prcText+") </span>"
                if (document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block') != null) {
                    document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block').classList.add("is_special_ecirp")
                }
                if(document.querySelector('.inc_just_added_save_pr') != null){
                    document.querySelector('.inc_just_added_save_pr').innerText = "You save: " + formatter.format(sidebarsaveprc) 
                }
                elHeadersubtotalactivetext.style.color = "#ee1c31"
            } else {
                elHeadersubtotalactivetext.setAttribute('subtotalActiveprice', subtotalactiveprice)
                elHeadersubtotalactivetext.style.color = "#000"
                elHeadersubtotalregulartext.setAttribute('subtotalRegularprice', subtotalregukarprice)
                elHeadersubtotalactivetext.innerHTML = formatter.format(subtotalregukarprice) + "<span>("+INC.config.prcText+") </span>"
                elHeadersubtotalregulartext.innerHTML = ""
                if(document.querySelector('.inc_just_added_save_pr') != null){
                    document.querySelector('.inc_just_added_save_pr').innerText = ""
                }
            }
            sidebarHeaderItemCountTitleText.innerHTML = "Subtotal";
            if (window.innerWidth > 767) {
                if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 5) {
                    document.querySelector('.inc_sidebar_cart_added_block').classList.add('flex-start')
                }
            } else {
                if (document.querySelectorAll('.inc_sidebar_cart_added_block .inc_cart_added_product_block').length > 3) {
                    document.querySelector('.inc_sidebar_cart_added_block').classList.add('flex-start')
                }
            }
            if(sbBlock.querySelector('.inc_cart_added_product_block') == null){
                if(sbBlock.querySelector('.inc_header_title_text_block') != null){
                    sbBlock.classList.add('oos_prod_avail')
                }
            }
        }
    }
    INC.methods.updateSidebarProductsList = function (elRecommendedProductsListBlock, productCategory) {
        var productListArray = INC.dataStore.bundleProductsArray;
        var dupl_sidebar_prod = []
        var addCheck = INC.config.pdpaddedProductList;
        for (var pd in productListArray) {
            var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: productListArray[pd] });
            if (firstProductObjByMainId["categoryId"] == productCategory) {
                if (INC.dataStore.dataStoreObj.undefined == undefined) {
                    if (addCheck.indexOf(productListArray[pd]) == -1) {
                        if (INC.config.sidebarremovedprod.indexOf(firstProductObjByMainId.id) == -1) {
                            if (dupl_sidebar_prod.indexOf(firstProductObjByMainId.id) == -1) {
                                dupl_sidebar_prod.push(firstProductObjByMainId.id)
                                var prdblck = INC.methods.createProductModuleBlock(firstProductObjByMainId.id, "sidebar", false, elRecommendedProductsListBlock);
                                prdblck.querySelector('.inc_product_desc_add_block').addEventListener("click", function () {
                                    sidebaraddprod(this)
                                });
                                prdblck.querySelector('.inc_product_add_collection_block').addEventListener("click", function () {
                                    sidebaraddprod(this)
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
        var sliderBtnCounter = 0;
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_img').setAttribute('title', 'Scroll left')
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_right_btn_img').setAttribute('title', 'Scroll right')
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommeded_products_right_btn_block').addEventListener("click", function () {
            var productBlocks = document.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block')
            if (INC.clientConfig.slidevalue + 1 < productBlocks.length) {
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_block').setAttribute("style", "pointer-events: auto;opacity:1");
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_img').setAttribute("style", "opacity:1");
                INC.clientConfig.slidevalue++
                var slide_w = 274
                INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) - slide_w) + 'px';
                var menu = elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_list_block');
                menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
            }
            var cc_ount = 1;
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
            if (INC.clientConfig.slidevalue == -1) {
                INC.clientConfig.slidevalue = 0;
            }
            if (INC.clientConfig.slidevalue > 0) {
                var slide_w = 274
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommeded_products_right_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                document.querySelector('.inc_recommended_products_right_btn_img').setAttribute("style", "pointer-events: auto;opacity:1");
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_right_btn_img').setAttribute("style", "opacity:1");
                INC.clientConfig.slidevalue--
                INC.clientConfig.offset = (parseInt(INC.clientConfig.offset) + slide_w) + 'px';
                var menu = elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_list_block');
                menu.setAttribute('style', 'margin-left:' + INC.clientConfig.offset + ';transition-duration:0.5s;-webkit-transition-duration:0.5s;-moz-transition-duration:0.5s;-ms-transition-duration:0.5s;-o-transition-duration:0.5s;')
            }
            if (INC.clientConfig.slidevalue == 0) {
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_img').setAttribute("style", "opacity:0.5");
            }
            sliderBtnCounter--;
            if (sliderBtnCounter == -1) {
                sliderBtnCounter = 0;
            }
        });
        setTimeout(function(){
            var all_list_el = document.querySelectorAll('.inc_recommended_products_list_block .inc_product_showcase_block')
            for (var le in all_list_el) {
                var prd_moduleb = all_list_el[le].parentNode
                var main_idsd = ""
                if(prd_moduleb != null){
                    main_idsd = prd_moduleb.getAttribute('data-main_id')
                }
                if(all_list_el[le] != null && Object.prototype.hasOwnProperty.call(all_list_el, le)){
                    if(all_list_el[le].querySelector('.inc_product_desc_att_zero_block.inc_active') != null){
                        if(prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="'+main_idsd+'"]') != null){
                            if(prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="'+main_idsd+'"] .inc_product_desc_att_size_list_item_img_block') != null){
                                prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="'+main_idsd+'"] .inc_product_desc_att_size_list_item_img_block').click()
                            }else if(all_list_el[le].querySelector('.inc_product_desc_att_size_list_item_img_block') != null){
                                all_list_el[le].querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                            }
                        } else if(all_list_el[le].querySelector('.inc_product_desc_att_size_list_item_img_block') != null){
                            all_list_el[le].querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                        }
                    } else if(all_list_el[le].querySelector('.inc_product_desc_att_color_block.inc_active') != null){
                        if(prd_moduleb.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="'+main_idsd+'"]') != null){
                            if(prd_moduleb.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="'+main_idsd+'"] .inc_product_desc_att_color_list_item_img_block') != null){
                                prd_moduleb.querySelector('.inc_product_desc_att_color_list_item_img_block[data-cpid="'+main_idsd+'"] .inc_product_desc_att_color_list_item_img_block').click()
                            }
                        } else if(all_list_el[le].querySelector('.inc_product_desc_att_color_list_item_img_block') != null){
                            all_list_el[le].querySelector('.inc_product_desc_att_color_list_item_img_block').click()
                        }
                    }
                }
            }
            setTimeout(function(){
                var inc_prod_img =  document.querySelectorAll('.inc_product_img_main_img img')
                for (var prodimg in inc_prod_img) {
                    if(inc_prod_img[prodimg] != null && Object.prototype.hasOwnProperty.call(inc_prod_img, prodimg)){
                        inc_prod_img[prodimg].setAttribute('style',INC.config.styleft)
                    }
                }
            },2000)
        },10)
    }

    function sidebaraddprod(element){
        var productModuleBlock = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        if (productModuleBlock.classList.contains('inc_product_module_block') == falseflag) {
            productModuleBlock = element.parentNode.parentNode.parentNode.parentNode.parentNode
        }
        var flag_check = INC.methods.checkVariantSelection(productModuleBlock)
        var sku = productModuleBlock.getAttribute('data-sku');
        var findObj = new INC.classes.FindObj({ id: sku });
        var add_prod_im = productModuleBlock.querySelector('.inc_product_desc_add_img')
        if (flag_check == 1) {
            if (element.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_showcase_block') == trueflag || element.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_modal_block') == trueflag) {
                if (INC.config.disablebtn == trueflag) {
                    INC.config.disablebtn = false;
                    var newbtntext = productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_text')
                    var btnclick = productModuleBlock.querySelector('.inc_product_add_text')
                    newbtntext.innerText = "追加中..."
                    btnclick.innerText = "追加中...";
                    var selbtn=productModuleBlock.querySelector('.inc_product_variant_simple_text')
                    selbtn.innerText = "追加中...";
                    INC.methods.addProductToCart(findObj, productModuleBlock, btnclick, add_prod_im, selbtn,newbtntext);
                }
            }
        }
    }
    INC.methods.addProductToSidebarCart = function (findObj, _productBlockel, client_add_btn, btn_addtocart,elmparent) {
        var qty = 1;
        if(_productBlockel != null){
            if(_productBlockel.querySelector('input') != null){
                qty = _productBlockel.querySelector('input').value;
            }
        }
        if(client_add_btn == 'client_add_btn'){
            if(document.querySelector('.box-tocart .field.qty input') != null){
                qty = document.querySelector('.box-tocart .field.qty input').value
            }else if(elmparent.querySelector('.field.qty input') != null){
                qty = elmparent.querySelector('.field.qty input').value;
            }
        }
        var dataStore = INC.dataStore;
        var sbBlock = document.querySelector('.inc_sidebar_modal_block');
        var subtotal_activeprice = 0;
        var subtotal_regular = 0;
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
            var elHeadersubtotalactivetext = sbBlock.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_active_text");
            var elHeadersubtotalregulartext = sbBlock.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_regular_text");
            var elHeaderItemCountFigureText = sbBlock.querySelector(".inc_header_item_count_figure_text");
            var sidebarHeaderItemCountTitleText = sbBlock.querySelector(".inc_header_item_count_title_text");
            var sbCartBlock = sbBlock.querySelector(".inc_cart_added_list_block");
            if (client_add_btn == "client_add_btn") {
                sbCartBlock.innerHTML = ""
            }
            var productObj = dataStore.methods().getProductById(findObj);
            var productBlock =  generate_html_tag('div','inc_cart_added_product_block');

            if (INC.clientConfig.OOS.indexOf(productObj.mainId) >= 0) {
                productBlock.classList.add('cross')
                for (var e = 0; e < INC.clientConfig.OOS.length; e++) {
                    if (INC.clientConfig.OOS_MESG[e] != undefined) {
                        var remerrorjust=document.querySelector('.inc_justerror')
                        if(remerrorjust != null){
                            remerrorjust.parentNode.removeChild(remerrorjust)
                        }
                        if(document.querySelector('.inc_justerror') == null){
                            var headertitle=sbBlock.querySelector('.inc_sidebar_modal_cart_and_title_block')
                            var errormes = generate_html_tag('div','inc_justerror')
                            var errormestext = generate_html_tag('span','inc_justerror_text')
                                errormestext.innerHTML = "<span>"+productObj.name +"</span>" + " - " + "<span>The requested quantity is not available</span>"
                            errormes.appendChild(errormestext)
                            headertitle.parentNode.insertBefore(errormes,headertitle)
                            setTimeout(function(){
                                var remel=document.querySelector('.inc_justerror')
                                if(remel != null){
                                    remel.parentNode.removeChild(remel)
                                }
                            },500)
                        }
                    }
                }
            }else{
                var color = "";
                var size = "";
                var just_check_prod_block = ""
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
                    if (btn_addtocart.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == trueflag) {
                        var module_blk = btn_addtocart.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                        if (module_blk.querySelector('.inc_product_modal_block .inc_product_desc_att_block') != null) {
                            var sel_attr = module_blk.querySelector('.inc_product_modal_block .inc_product_desc_att_block')
                            var zero_text = sel_attr.getAttribute('data-zero');
                            var size_text = sel_attr.getAttribute('data-size');
                            var color_text = sel_attr.getAttribute('data-color');
                            var third_text = sel_attr.getAttribute('data-third');
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
                var sel_size = "";
                if (color != "" && color != undefined && color != null) {
                    sel_size = "Color" + color;
                } else if (size != "" && size != undefined && size != null) {
                    sel_size = "Size : " + size;
                }
                var pdpprice = 0
                if (client_add_btn == "client_add_btn" && INC.config.pageType == "pdp" && document.querySelector('.js-product-original-price') != null) {
                    pdpprice =  document.querySelector('.sd-product-spp__product-full .js-product-original-price').innerText.replace('¥','').replace(',','').trim()
                }
                var activepriceClnt = 0
                if(document.querySelector('.sd-product-spp__product-full .elc-product-prices-wrapper .js-product-price') != null){
                    activepriceClnt = document.querySelector('.sd-product-spp__product-full .elc-product-prices-wrapper .js-product-price').innerText.replace('¥','')
                }
                var activePrice = 0;
                var regularPrice = 0;
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
                
                var addedhtml = '<div class="inc_cart_added_product_img_block"><div class="inc_cart_added_product_img"><img class="inc_lazy" src="'+productObj.imageURL+'" data-src="'+productObj.imageURL+'"  alt="'+productObj.name+'"><div class="sidebar_product_quantity_label">'+qty+'</div></div></div><div class="inc_cart_added_product_desc_block"><div class="inc_cart_added_product_desc_title_block"><div class="inc_cart_added_product_desc_title_text_block"><div class="inc_cart_added_product_desc_title_text" title="Easidri Cooling Coat Wide Fit" style="text-transform: unset;">'+qty + ' X ' + productObj.name+'</div></div></div><div class="inc_cart_added_product_desc_att_block"><div class="inc_cart_added_product_desc_att_color_block"><div class="inc_cart_added_product_desc_att_color_text_block"><div class="inc_cart_added_product_desc_att_color_text_block"></div></div></div><div class="inc_cart_added_product_desc_att_size_block"><div class="inc_cart_added_product_desc_att_size_text_block"><div class="inc_cart_added_product_desc_att_size_text">'+sel_size+'</div></div></div></div><div class="inc_cart_added_product_desc_ecirp_block"><div class="inc_cart_added_product_desc_ecirp_active_block"><div class="inc_cart_added_product_desc_ecirp_active_text_block"><div class="inc_cart_added_product_desc_ecirp_active_text">'+formatter.format(activePrice)+'</div><div class="inc_cart_added_product_desc_ecirp_active_text_msg"></div></div></div><div class="inc_cart_added_product_desc_ecirp_regular_block"><div class="inc_cart_added_product_desc_ecirp_regular_text_block"><div class="inc_cart_added_product_desc_ecirp_regular_text"></div></div></div></div><div class="inc_cart_added_product_qty_block"></div></div>'
                productBlock.innerHTML = addedhtml
                productBlock.querySelector('.inc_cart_added_product_img img').setAttribute('onerror',"this.src='"+INC.config.noimage+"'" );
                var subtotalactiveprice = 0;
                var subtotalregukarprice = 0;
                if (subtotal_regular == "" && +regularPrice != 0 && regularPrice != "") {
                    subtotalactiveprice = +subtotal_activeprice + (+activePrice * qty)
                    subtotalregukarprice = +subtotal_activeprice + (+regularPrice * qty)
                } else {
                    subtotalactiveprice = +subtotal_activeprice + (+activePrice * qty)
                    subtotalregukarprice = +subtotal_regular + (+regularPrice * qty)
                }
                if (sbCartBlock != null) {
                    sbCartBlock.insertBefore(productBlock, sbCartBlock.querySelector('.inc_cart_added_product_block'));
                }
                if (elHeaderItemCountFigureText != null) {
                    elHeaderItemCountFigureText.style.display = "none";
                }
                sidebarHeaderItemCountTitleText.innerHTML = "Subtotal"
                elHeadersubtotalactivetext.setAttribute('subtotalactiveprice', subtotalactiveprice)
                elHeadersubtotalregulartext.setAttribute('subtotalregularprice', subtotalregukarprice)

                var sidebarsaveprcw = get_discount_price(subtotalregukarprice, subtotalactiveprice)
                if (+subtotalactiveprice != null && (+subtotalactiveprice < +subtotalregukarprice)) {
                    elHeadersubtotalactivetext.innerHTML = formatter.format(subtotalactiveprice) + "<span>("+INC.config.prcText+") </span>"
                    elHeadersubtotalregulartext.innerHTML =  formatter.format(subtotalregukarprice) + "<span>("+INC.config.prcText+") </span>";
                    if (document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block') != null) document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block').classList.add("is_special_ecirp")
                    elHeadersubtotalactivetext.style.color = "#ee1c31"
                    if(document.querySelector('.inc_just_added_save_pr') != null){
                        document.querySelector('.inc_just_added_save_pr').innerText = "You save: " + formatter.format(sidebarsaveprcw) 
                    }
                } else {
                    elHeadersubtotalactivetext.style.color = "#000"
                    elHeadersubtotalactivetext.innerHTML = formatter.format(subtotalactiveprice) + "<span>("+INC.config.prcText+") </span>";
                    elHeadersubtotalregulartext.innerHTML = ""
                    if(document.querySelector('.inc_just_added_save_pr') != null){
                        document.querySelector('.inc_just_added_save_pr').innerHTML = ""
                    }
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
            if(INC.config.pageType ==  "pdp") {
                if(Object.keys(productObj).length == 0 || client_add_btn == "client_add_btn" || client_add_btn == "clientbtn"){
                    console.log("client_add_btn")
                    if(elmparent != null){
                        if(elmparent.querySelector('.product.media .fotorama__active img') != null || document.querySelector('.inc_pdp_product-main_block .inc_product_img_main_img img') != null){
                            var imgselp=''
                            if(elmparent.querySelector('.product.media .fotorama__active img') != null){
                                imgselp = elmparent.querySelector('.product.media .fotorama__active img').src;
                            }else if(document.querySelector('.inc_pdp_product-main_block .inc_product_img_main_img img') != null){
                                imgselp = document.querySelector('.inc_pdp_product-main_block .inc_product_img_main_img img').src;
                            }
                            
                            var namep = elmparent.querySelector('.page-title [data-ui-id="page-title-wrapper"]').innerText;
                            var clientPrice = null;
                            var clientSpPrice = null;
                            if (document.querySelector('.page-title-wrapper [data-price-type="finalPrice"]') != null) {
                                clientPrice = document.querySelector('.page-title-wrapper [data-price-type="finalPrice"]').innerText.replace('¥','').replace(',','')
                            }
                            if(document.querySelector('.product-info-price-dynamic [data-price-type="finalPrice"]') != null){
                                clientPrice = document.querySelector('.product-info-price-dynamic [data-price-type="finalPrice"]').innerText.replace('¥','').replace(',','')
                            }
                            if(document.querySelector('.product-info-price [data-price-type="oldPrice"]') != null && document.querySelector('.page-title-wrapper [data-price-type="finalPrice"]') != null){
                                clientPrice = document.querySelector('.page-title-wrapper .product-info-price [data-price-type="oldPrice"]').innerText.replace('¥','').replace(',','')
                                clientSpPrice = document.querySelector('.page-title-wrapper [data-price-type="finalPrice"]').innerText.replace('¥','').replace(',','')
                            }
                            var actprice=parseFloat(clientPrice).toFixed(2) * qty;
                            var regprice=parseFloat(clientPrice).toFixed(2) * qty;
                            var actiprice=parseFloat(clientPrice).toFixed(2);
                            if(parseFloat(clientSpPrice) != null && parseFloat(clientSpPrice) < parseFloat(clientPrice)){
                                actprice = parseFloat(clientSpPrice).toFixed(2) * qty;
                                regprice = parseFloat(clientPrice).toFixed(2) * qty;
                                actiprice=parseFloat(clientSpPrice).toFixed(2);
                                var sidebarsavepr = get_discount_price(clientPrice, clientSpPrice)
                                if(document.querySelector('.inc_just_added_save_pr') != null){
                                    document.querySelector('.inc_just_added_save_pr').innerText = "You save: " + formatter.format(sidebarsavepr) + "<span> ("+INC.config.prcText+") </span>"
                                }
                            }
                            
                            if(productBlock.querySelector('.inc_cart_added_product_img img') != null){
                                if(imgselp != "" && imgselp != undefined){
                                    productBlock.querySelector('.inc_cart_added_product_img img').src = imgselp
                                }
                                productBlock.querySelector('.inc_cart_added_product_desc_title_text').innerText = qty + " x " + namep
                                productBlock.querySelector('.inc_cart_added_product_desc_title_text').setAttribute('title',namep)
                                productBlock.querySelector('.inc_cart_added_product_desc_ecirp_active_text').innerHTML =
                                formatter.format(actiprice);
                                elHeadersubtotalregulartext.setAttribute('subtotalregularprice',regprice)
                                elHeadersubtotalactivetext.innerHTML = formatter.format(actprice) + "<span>("+INC.config.prcText+") </span>";
                                elHeadersubtotalactivetext.setAttribute('subtotalactiveprice',actprice)
                            }
                        }
                    }
                }
            }
            if(document.querySelector('.inc_cart_added_product_block') != null){
                sbBlock.classList.remove('oos_prod_avail')
            }else{
                sbBlock.classList.add('oos_prod_avail')
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
        if (document.querySelector(".inc_sidebar_modal_block.inc_active") == null && INC.config.pageType == "pdp") {
            pageType = "100";
        }
        if (document.querySelector(".inc_sidebar_modal_block.inc_active") != null && INC.config.pageType != "productList") {
            pageType = "107";
        }
        var prdcore=INC.dataStore.pdpProductId
        if(INC.config.pageType == 'pdp'){
            prdcore = INC.config.Product_id.split('&')[0].trim()
        }
        INC.methods.trackingEvents("bundleProductClickTracking", {
            "product_id": productId,
            "core_product_id": prdcore.toString()
        }, pageType);
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
    function incscrollPgae(productBlock){
        var doc = null;
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
                    galleryListItemBlock.classList.remove("inc_active");
                });
                elImgGalleryListItemBlock.classList.add("inc_active");
                var imgotherlist = this.querySelector('img').src
                var elImgMainImg = productBlock.querySelector('.inc_product_img_main_img')
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
        var elAddText = productBlock.querySelector('.inc_product_desc_add_text');
        var productDescQtyInputText = productBlock.querySelector('.inc_product_qty_input_text');
        var productDescQtyBlock = productBlock.querySelector('.inc_product_qty_block');
        var elQtyBlock = productBlock.querySelector('.inc_product_qty_block');
        var elQtyDownBlock = productBlock.querySelector('.inc_product_qty_down_block');
        var elQtyUpBlock = productBlock.querySelector('.inc_product_qty_up_block');
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
            var pprice = prdblk.querySelector('.inc_product_desc_ecirp_active_text').textContent.replace('¥', '');
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
            var pprice = productBlock.querySelector('.inc_product_desc_ecirp_active_text').innerText.replace('¥', '');
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
            var pprice = productBlock.querySelector('.inc_product_desc_ecirp_active_text').innerText.replace('¥', '');
            if (elAddText.textContent == "Added" || elAddText.textContent == "Update" || elAddText.textContent == INC.config.AddedText || elAddText.textContent == INC.config.UpdateText) {
                INC.methods.updateBundleCart({ sku: id, qty: qty }, "add", main_id, bundle_id, pname, pprice);
            }
        });
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
        var elPromo1 = productBlock.querySelector('.pc_promo_div1');
        var elPromo2 = productBlock.querySelector('.pc_promo_div2');
        var elPromo3 = productBlock.querySelector('.pc_promo_div3');
        var elPromo4 = productBlock.querySelector('.pc_promo_div4');
        var elDisPromo = _parentblock.querySelector('.inc_discount_promo_text');
        var elproductPriceLabel = productBlock.querySelector('.inc_product_ecirp_label_block');
        var elPriceActiveText = productBlock.querySelector('.inc_product_desc_ecirp_active_text');
        var elPriceRegularText = productBlock.querySelector('.inc_product_desc_ecirp_regular_text');
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
        var elworthPrice = productBlock.querySelector('.inc_product_desc_ecirp_worth_text');
        var eldetailsprodblock = productBlock.querySelector('.inc_product_desc_att_details_block');
        var eladdvarianttext = productBlock.querySelector('.inc_product_variant_simple_text');
        var elconfigtitle = productBlock.querySelector('.inc_product_desc_add_title_text_block');
        var elvariantaddbtn = productBlock.querySelector('.inc_product_desc_att_variant_add_block');
        var elvariantaddbtntext = productBlock.querySelector('.inc_product_desc_att_variant_text');
        var elvariantpopupclose = productBlock.querySelector('.inc_product_desc_variant_popup_close_block');
        var elselectoptaddbtn = productBlock.querySelector('.inc_product_variant_simple_block');
        
        
        var productDescAddText = productBlock.querySelector('.inc_product_add_text');
        var elQtyAddBtnBlock = productBlock.querySelector('.inc_product_desc_qty_add_btn_block');
        
        elQtyAddBtnBlock.classList.add(productObj.ProductType);
        elproductPriceLabel.innerHTML = "SALE"
        
        if (INC.config.catFlag.length >= 2){
        
            if (_parentblock.querySelector('.inc_pdp_title_text') != null){
                _parentblock.querySelector('.inc_pdp_title_text').innerText = "Buy The Set"
            }
        
        } 
        
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
            if (document.querySelector('.inc_product_modal_block.inc_active') == null && document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                document.querySelector('html').classList.remove('inc_overlay')
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
        if (window.location.hostname == 'tt311.w2solution.com'){
            productLink.href = productObj.url.replace('https://cefinecosmetics.co.jp/','https://tt311.w2solution.com/Test/R1024_Cefine/');
        } else {
            productLink.href = productObj.url;
        }
        productLink.appendChild(elImgTag1);
        productLink.setAttribute('otherImageList', productObj["otherImageList"])
        productLink.setAttribute('imageURL', productObj["imageURLMain"])
        add_swipe(productLink)

        elImgMainImg.appendChild(productLink);

        productLink.addEventListener('click', function (e) {
            if(window.innerWidth < 821 || mainprod == "mainprod"){
                e.preventDefault()
            }
        })
        productLink.setAttribute("href", productObj.url);
        if(mainprod != "mainprod"){
            elImgMainImg.addEventListener("click", function (e) {
                // e.preventDefault()
                getTrackingPixel();
                INC.methods.sendBundleClickTracking(productObj.mainId);
                if (window.location.hostname == 'tt311.w2solution.com'){
                    var href = productBlock.querySelector('.inc_product_img_main_img a').href.replace('https://cefinecosmetics.co.jp/','https://tt311.w2solution.com/Test/R1024_Cefine/')
                } else {
                    var href = productBlock.querySelector('.inc_product_img_main_img a').href
                }
                setTimeout(function(){
                    window.location.href = href
                },3000)
            });
        }
        elImgGalleryListBlock.innerHTML = "";
        if ((productObj.otherImageList != null) && productObj.otherImageList.length > 1) {
            prepareAdditionalimages(elImgGalleryListBlock,productObj,productBlock)
        }
        if(mainprod != "mainprod"){
            elTitleTextBlock.addEventListener("click", function (e) {
                // e.preventDefault()
                getTrackingPixel();
                INC.methods.sendBundleClickTracking(productObj.mainId);
                if (window.location.hostname == 'tt311.w2solution.com'){
                    var href = productBlock.querySelector('.inc_product_img_main_img a').href.replace('https://cefinecosmetics.co.jp/','https://tt311.w2solution.com/Test/R1024_Cefine/')
                } else {
                    var href = productBlock.querySelector('.inc_product_img_main_img a').href
                }
                setTimeout(function(){
                    window.location.href = href
                },3000)
            });
        }

        if (productObj.PromotionalMessage != null && productObj.PromotionalMessage != ""){
            if (productObj.PromotionalMessage.indexOf(',')  < 0){
                elPromo.innerText = productObj.PromotionalMessage;
                elPromo1.classList.add('empty');
                elPromo2.classList.add('empty');
                elPromo3.classList.add('empty');
                elPromo4.classList.add('empty');
            } else if (productObj.PromotionalMessage.split(',').length == 2){
                elPromo.innerText = productObj.PromotionalMessage.split(',')[0].trim();
                elPromo1.innerText = productObj.PromotionalMessage.split(',')[1].trim();
                elPromo2.classList.add('empty');
                elPromo3.classList.add('empty');
                elPromo4.classList.add('empty');
            } else if (productObj.PromotionalMessage.split(',').length == 3){
                elPromo.innerText = productObj.PromotionalMessage.split(',')[0].trim();
                elPromo1.innerText = productObj.PromotionalMessage.split(',')[1].trim();
                elPromo2.innerText = productObj.PromotionalMessage.split(',')[2].trim();
                elPromo3.classList.add('empty');
                elPromo4.classList.add('empty');
            } else if (productObj.PromotionalMessage.split(',').length == 4){
                elPromo.innerText = productObj.PromotionalMessage.split(',')[0].trim();
                elPromo1.innerText = productObj.PromotionalMessage.split(',')[1].trim();
                elPromo2.innerText = productObj.PromotionalMessage.split(',')[2].trim();
                elPromo3.innerText = productObj.PromotionalMessage.split(',')[3].trim();
                elPromo4.classList.add('empty');
            } else {
                if (productObj.PromotionalMessage.split(',').length == 5){
                    elPromo.innerText = productObj.PromotionalMessage.split(',')[0].trim();
                    elPromo1.innerText = productObj.PromotionalMessage.split(',')[1].trim();
                    elPromo2.innerText = productObj.PromotionalMessage.split(',')[2].trim();
                    elPromo3.innerText = productObj.PromotionalMessage.split(',')[3].trim();
                    elPromo4.innerText = productObj.PromotionalMessage.split(',')[4].trim();
                }
            }
            
            elPromo.classList.add('avail')
        } else {
            elPromo.classList.add('empty')
            elPromo1.classList.add('empty');
            elPromo2.classList.add('empty');
            elPromo3.classList.add('empty');
            elPromo4.classList.add('empty');
        }
 
        var pTitleDiv = document.createElement('div');
        if(mainprod == "mainprod" && INC.config.pageType == "pdp"){
            pTitleDiv.innerHTML = "<strong>対象商品: </strong>" + productObj.nameMain;
        }else{
            pTitleDiv.innerHTML = productObj.nameMain;
        }
        var field1 = productObj.ratingsCount
        var field2 = productObj.reviewsCount
        INC.methods.get_product_ratings(field1, field2, elratingsBlock);
        var pLink = document.createElement('a');
        pLink.setAttribute('style', 'cursor: default;text-decoration: none;')
        if (window.location.hostname == 'tt311.w2solution.com'){
            pLink.href = productObj.url;
        } else {
            pLink.href = productObj.url;
            // .replace('https://cefinecosmetics.co.jp/','https://tt311.w2solution.com/Test/R1024_Cefine/');
        }
        pLink.addEventListener('click', function (ev) {
            if(window.innerWidth < 821 || mainprod == "mainprod"){
                ev.preventDefault()
            }
        })
        pLink.setAttribute('style', 'text-transform: unset;')
        // pLink.setAttribute('title', productObj.nameMain)
        if (INC.config.pageType == "pdp" && INC.config.recommendation) {
            pLink.setAttribute('href', productObj.url)
        }
        pLink.appendChild(pTitleDiv);
        elTitleText.appendChild(pLink);
        if (productObj.bundle_promotion != null){
            _parentblock.classList.add('inc_hideCheckBox')
            if (elDisPromo != null){
                elDisPromo.innerText = productObj.bundle_promotion;
            }
        }
        var activePrice = parseFloat(productObj.activePriceMain).toFixed(2).toString();
        var regularPrice = parseFloat(productObj.regularPriceMain).toFixed(2).toString();
        elPriceRegularText.textContent = "";
        if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
            elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
            elPriceActiveText.innerHTML = formatter.format(activePrice) + "<span>("+INC.config.prcText+") </span>"
            elPriceRegularText.innerHTML =  formatter.format(regularPrice) + "<span>("+INC.config.prcText+") </span>"
        } else {
            elPriceActiveText.innerHTML = formatter.format(activePrice) + "<span>("+INC.config.prcText+") </span>"
            elworthPrice.innerHTML = ""
        }
        if (window.innerWidth < 821) {
            var inc_empty_popup = generate_html_tag('div', 'inc_empty_popup');
            eldetailsprodblock.appendChild(inc_empty_popup);
        }
        if (blockType == "am") {
            productDescAddText.innerText = "カートに入れる"
        } else if (blockType == "sidebar") {
            productDescAddText.innerText = "カートに入れる"
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
                case "sidebar": eladdvarianttext.textContent = "カートに入れる"; break;
                case "am": eladdvarianttext.textContent = "カートに入れる"; break;
            }
            eladdvarianttext.classList.add('simple')
        } else if (productColorsObj["colorArray"].length > 0) {
            elAttBlock.classList.add('attributes_avail')
            elAttSizeTitleText.textContent = "View colours";
            eladdvarianttext.textContent = "カラーを選ぶ";
            eladdvarianttext.classList.add('config')
            elconfigtitle.textContent = "Please select a Color";
            switch (blockType) {
                case "pdp": elvariantaddbtntext.textContent = "Add To Bundle"; break;
                case "sidebar": elvariantaddbtntext.textContent = "カートに入れる"; break;
                case "am": elvariantaddbtntext.textContent = "カートに入れる"; break;
            }
            eladdvarianttext.classList.remove('simple')
        } else if (sizezero["att0Array"].length > 0) {
            eladdvarianttext.classList.remove('simple')
            eladdvarianttext.textContent = "カラーを選ぶ";
            eladdvarianttext.classList.add('config')
            elAttBlock.classList.add('attributes_avail')
            if (elAttSizeTitleText.textContent == null){
             elAttSizeTitleText.textContent = "View Sizes";
            }
            elconfigtitle.textContent = "Please select your Size";
            switch (blockType) {
                case "pdp": elvariantaddbtntext.textContent = "Add To Bundle"; break;
                case "sidebar": elvariantaddbtntext.textContent = "カートに入れる"; break;
                case "am": elvariantaddbtntext.textContent = "カートに入れる"; break;
            }
        }

        elvariantaddbtn.addEventListener('click', function () {
            var moduleblk = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
            var flag_check = INC.methods.checkVariantSelection(moduleblk)
            if ((this.textContent.trim() == "Update" || this.parentNode.classList.contains('config_avail') == trueflag) && this.innerText.trim() != "カートに入れる") {
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
                if (this.innerText.trim() == "カートに入れる" || this.innerText.trim() == "SELECT") {
                    if (flag_check == 1 || flag_check == 3) {
                        if (document.querySelector('.inc_product_modal_block.inc_active') == null && document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                            document.querySelector('html').classList.remove('inc_overlay')
                        }
                        this.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()
                        this.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()

                        productBlock.classList.remove('show_overlay')
                        if (this.textContent.trim() == "カートに入れる" || this.textContent.trim() == "SELECT" || this.textContent.trim() == "Add") {
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
                productBlock.classList.add('show_overlay')
                this.parentNode.querySelector('.inc_product_desc_att_block').classList.add('inc_active')
                
                if (document.querySelector('.sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block') != null) {
                    document.querySelector('.sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block').classList.add('overflow_visible')
                    document.querySelector('body').classList.add('inc_popup_open');
                }
                if (productBlock.parentNode.parentNode.parentNode.classList.contains('inc_af_product-list_block') == trueflag) {
                    document.querySelector('html').classList.add('inc_overlay');
                }
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_info_main_block').classList.add('inc_active');
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_description_main_block').classList.remove('inc_active');
            }
        })
        switch (blockType) {
            case "pdp": elAddText.textContent = "Add"; break;
            case "sidebar": elAddText.textContent = "カートに入れる"; break;
            case "am": elAddText.textContent = "カートに入れる"; break;
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
            var pprice = productBlock.querySelector('.inc_product_desc_ecirp_active_text').textContent.replace('¥', '');
            var elqtyvalue = productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_qty_block input')
            var qty = parseInt(elqtyvalue.value);
            if (qty < 1){
                qty = 1
            }
            var prod_card = elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
            var prodflag=false;
            if (document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                if (flag_check == 1 || onloadpdp == falseflag || onloadpdp_delete == falseflag) {
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
                    if(prodflag == trueflag){
                        elAddText.textContent = "Added";
                        elAddText.classList.add('added');
                        productDescAddText.textContent = "Added"
                        elAddText.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').classList.add('Inc_checked');
                        var pListItemBlock = document.querySelector('.inc_pdp_bundle_product_list_item_block' + "[data-main_id=\"" + mainId + "\"]");
                        modalProductBlock.querySelector('.inc_product_desc_add_text').textContent = "Update";
                        if (pListItemBlock != null) {
                            pListItemBlock.classList.add('product_added');
                            pListItemBlock.querySelector('.inc_pdp_bundle_product_list_item_added_btn_img').classList.add("checked");
                        }
                        elAddImg.classList.add("checked");
                        modalProductBlock.querySelector('.inc_product_desc_add_img').classList.add("checked");
                        elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.style.opacity="1"
                        if (window.innerWidth > 820) {
                            if (elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className == 'inc_pdp_bundle_product_list_main_block') {

                                if (document.querySelector('.inc_goes_img_block[id="' + prod_card.getAttribute('data-main_id') + '"]') != null) {
                                    document.querySelector('.inc_goes_img_block[id="' + prod_card.getAttribute('data-main_id') + '"]').style.display = "block"
                                }
                                if (document.querySelector('.inc_pdp_product-main_block .inc_product_desc_add_block').classList.contains('Inc_checked') == false){
                                    document.querySelectorAll('.inc_plus_icon')[0].style.display = "none"
                                    document.querySelectorAll('.inc_plus_icon')[1].style.display = "block"
                                } else {
                                    if (document.querySelector('.inc_goes_img_block[id="' + prod_card.getAttribute('data-main_id') + '"]') != null) {
                                        document.querySelector('.inc_goes_img_block[id="' + prod_card.getAttribute('data-main_id') + '"]').previousElementSibling.style.display = "block"
                                    }
                                }
                                if (document.querySelector('.inc_product_block[data-main_id="' + prod_card.getAttribute('data-main_id') + '"] .inc_product_desc_title_block') != null) {
                                    document.querySelector('.inc_product_block[data-main_id="' + prod_card.getAttribute('data-main_id') + '"] .inc_product_desc_title_block').style.pointerEvents = "auto";
                                }
                                if (prod_card.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_variant_simple_text').classList.contains('config')) {
                                    prod_card.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_variant_simple_block').style.pointerEvents = "auto"
                                    prod_card.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_variant_simple_text').style.pointerEvents = "auto"
                                }
                            } else {
                                if (elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className == "inc_pdp_product-main_block") {
                                    if (document.querySelector('.inc_main_img_block') != null) {
                                        document.querySelector('.inc_main_img_block').style.display = "block"
                                    }
                                    if (document.querySelector('.inc_plus_icon') != null) {
                                        document.querySelector('.inc_plus_icon').style.display = "block"
                                    }
                                    if (prod_card.querySelector('.inc_product_desc_title_block') != null) {
                                        prod_card.querySelector('.inc_product_desc_title_block').style.pointerEvents = "auto"
                                    }
                                    if (prod_card.querySelector('.inc_product_variant_simple_text').classList.contains('config')) {
                                        prod_card.querySelector('.inc_product_variant_simple_block').style.pointerEvents = "auto"
                                        prod_card.querySelector('.inc_product_variant_simple_text').style.pointerEvents = "auto"
                                    }
                                }
                            }
                        }
                        if (INC.config.pageType == "pdp" && blockType == "pdp") {
                            INC.methods.updateBundleCart({ sku: sku, qty: qty }, "add", main_id, bundle_id, pname, pprice);
                        }
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
                        productModuleBlock.querySelector('.inc_product_variant_simple_text').innerText = "";
                        var color_span = generate_html_tag('div', 'colorCircle')
                        var colorImg = generate_html_tag('img', 'img');
                        // color_span.appendChild(colorImg);
                        // if (Object.keys(productObj.option).length != 0){
                        //     if (productObj.option[1].imgSrc != ""){
                        //         colorImg.src = productObj.option[1].imgSrc;
                        //         productModuleBlock.querySelector('.inc_product_variant_simple_text').appendChild(color_span);
                        //     }
                        // }
                        // if (window.innerWidth > 820){
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
                        // }
                    }
                }else if(elAddText.textContent == "Added"){
                    if (modalProductBlock.querySelector('.inc_product_desc_add_text').textContent != "Update" && prod_card.querySelector('.inc_product_modal_block.inc_active') != null) {
                        elAddText.textContent = "Add";
                        productDescAddText.textContent = "Add To Bundle"
                        elAddText.classList.remove('added');
                        elAddText.parentNode.parentNode.classList.remove('Inc_checked');
                        modalProductBlock.querySelector('.inc_product_desc_add_text').textContent = "Add To Bundle";
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
                        if (prod_card.querySelector('.inc_product_modal_block.inc_active') == null) {
                            elAddText.textContent = "Add";
                            productDescAddText.textContent = "Add To Bundle"
                            elAddText.classList.remove('added');
                            elAddText.parentNode.parentNode.classList.remove('Inc_checked');
                            // if (document.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_variant_simple_text').style.pointerEvents != 'none'
                            //         ) {
                                elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.style.opacity="0.5"
                            // }
                            if (window.innerWidth > 820) {
                                if (elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className == 'inc_pdp_bundle_product_list_main_block') {

                                    document.querySelector('.inc_goes_img_block[id="' + prod_card.getAttribute('data-main_id') + '"]').style.display = "none"
                                    if (document.querySelector('.inc_pdp_product-main_block .inc_product_desc_add_block').classList.contains('Inc_checked') == false){
                                        document.querySelectorAll('.inc_plus_icon')[1].style.display = "none"
                                    }
                                    document.querySelector('.inc_goes_img_block[id="' + prod_card.getAttribute('data-main_id') + '"]').previousElementSibling.style.display = "none"
                                    prod_card.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_desc_title_block').style.pointerEvents = "none";
                                    if (prod_card.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_variant_simple_text').classList.contains('config')) {
                                        prod_card.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_variant_simple_block').style.pointerEvents = "none";
                                        prod_card.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_variant_simple_text').style.pointerEvents = "none";
                                    }

                                } else {
                                    if (document.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_variant_simple_text').style.pointerEvents != 'none'
                                    ) {
                                        if (elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.className == "inc_pdp_product-main_block") {
                                            document.querySelector('.inc_main_img_block').style.display = "none"
                                            document.querySelector('.inc_plus_icon').style.display = "none"
                                            prod_card.querySelector('.inc_product_desc_title_block').style.pointerEvents = "none"
                                            if (prod_card.querySelector('.inc_product_variant_simple_text').classList.contains('config')) {
                                                prod_card.querySelector('.inc_product_variant_simple_block').style.pointerEvents = "none"
                                                prod_card.querySelector('.inc_product_variant_simple_text').style.pointerEvents = "none"
                                            }
                                        }
                                    }
                                }
                            }
                            modalProductBlock.querySelector('.inc_product_desc_add_text').textContent = "Add To Bundle";
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
                    elAddText.textContent = "追加中...";
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
    function eladdfn_(productModuleBlock) {
        if (productModuleBlock.querySelector('.inc_product_variant_simple_text.simple') != null) {
            productModuleBlock.querySelector('.inc_product_variant_simple_text.simple span').textContent = "Add To Bundle"
        } else {
            var image_x = productModuleBlock.querySelector('.inc_product_variant_simple_text img');
            if (image_x) {
                image_x.parentNode.removeChild(image_x);
            }
            productModuleBlock.querySelector('.inc_product_variant_simple_text span').textContent = "カラーを選ぶ";

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
        var elPriceActiveText = prdmblock.querySelector('.inc_product_desc_ecirp_active_text');
        var elPriceRegularText = prdmblock.querySelector('.inc_product_desc_ecirp_regular_text');
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
        var elproductPriceLabel = prdmblock.querySelector('.inc_product_ecirp_label_block')
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
            if (document.querySelector('.inc_product_modal_block.inc_active') == null && document.querySelector('body.active-gnav, body.product-shades-sidebar-active') == null) {
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
        productLink.appendChild(elImgTag1);
        productLink.style.cursor = 'pointer';
        productLink.setAttribute('otherImageList', productObj["otherImageList"])
        productLink.setAttribute('imageURL', productObj["imageURLMain"])
        add_swipe(productLink)
        elImgMainImg.appendChild(productLink);
        if(mainprod != 'mainprod'){
            elImgMainImg.addEventListener("click", function (e) {
                // e.preventDefault()
                getTrackingPixel();
                INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
                var hrefm = productBlock.querySelector('.inc_product_img_main_img a').href
                setTimeout(function(){
                    window.location.href = hrefm
                },3000)
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
                // e.preventDefault()
                getTrackingPixel();
                INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
                var hrefm1 = productBlock.querySelector('.inc_product_img_main_img a').href
                setTimeout(function(){
                    window.location.href = hrefm1
                },3000)
            });
        }
        
        elManuBlock.innerText = productObj.manufacturer;
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
                // e.preventDefault()
                getTrackingPixel();
                INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
                var hrefm2 = productBlock.querySelector('.inc_product_img_main_img a').href
                setTimeout(function(){
                    window.location.href = hrefm2
                },3000)
            });
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
        pLink.setAttribute('style', 'text-transform: unset;')
        pLink.setAttribute('title', productObj.nameMain)
        pLink.appendChild(pTitleDiv);
        elTitleText.appendChild(pLink);
        var activePrice = parseFloat(productObj.activePriceMain).toFixed(2).toString();
        var regularPrice = parseFloat(productObj.regularPriceMain).toFixed(2).toString();

        elPriceRegularText.innerText = "";
        if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
            elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
            elPriceActiveText.innerHTML = formatter.format(activePrice) + "<span>("+INC.config.prcText+") </span>"
            elPriceRegularText.innerHTML =  formatter.format(regularPrice) + "<span>("+INC.config.prcText+") </span>"
        } else {
            elPriceActiveText.innerText = formatter.format(activePrice) + "<span>("+INC.config.prcText+") </span>"
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

        var product0Obj = INC.dataStore.methods().getProductopt0Obj(findObj);

        var productSizesObj = INC.dataStore.methods().getProductSizesObj(findObj);

        var productColorsObj = INC.dataStore.methods().getProductColorsObj(findObj);

        var product3Obj = INC.dataStore.methods().getProductopt3Obj(findObj);

        elAtt0ListBlock.innerHTML = "";
        elAttSizeListBlock.innerHTML = "";
        elAttColorListBlock.innerHTML = "";
        elAtt3ListBlock.innerHTML = "";

        
        if (product0Obj.att0Array.length > 0) {
            if (product0Obj["att0Array"][0].code != "Color") {
                elAtt0ListBlock.innerHTML = "";
                if (product0Obj["att0Array"].length > 0) {
                    productzeroatt(elAtt0TitleText,elAtt0Block,product0Obj,elAtt0ListBlock,blockType,productBlock)
                }
            }
        }
       

        if (productColorsObj["colorArray"].length > 0 || productSizesObj["sizeArray"].length > 0 || product3Obj["att3Array"].length > 0){
            INC.config.ddFlag  =true; 
        }
        
        productsizeatt(elAttSizeTitleText,elAttSizeBlock,productSizesObj,elAttSizeListBlock,elAttSizeTitleTextSelected,blockType)
        
        productcoloratt(productColorsObj,productBlock,elAttColorListBlock,blockType,elAttColorBlock,elAttColorTitleText)
        
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
            case "sidebar": elAddText.innerText = "カートに入れる"; break;
            case "am": elAddText.innerText = "カートに入れる"; break;
        }
        elAddBlock.addEventListener("click", function () {
            productBlock.parentNode.querySelector('.inc_product_header_title_block').classList.add('inc_active');
            productBlock.parentNode.querySelector('.inc_product_header_title_block_1').classList.remove('inc_active');

            var productModuleBlock = productBlock.parentNode.parentNode;
            var flag_check = INC.methods.checkVariantSelection(productModuleBlock)
            if (document.querySelector('.sidebar_outer.sidebar_outer_active') == null) {
                document.querySelector('body').classList.remove('inc_popup_open')
                document.querySelector('html').classList.remove('inc_overlay')
            }
            var showcaseProductBlock = productModuleBlock.querySelector('.inc_product_showcase_block').querySelector('.inc_product_block');
            
            if (INC.config.pageType != "cartPage" && !INC.config.recommendation && INC.config.pageType != "ticket" && productModuleBlock.parentNode.className.indexOf('inc_af_product-list_block') == -1) {
                showcaseProductBlock.querySelector('.inc_product_desc_add_block').click();
            }
            if (productModuleBlock.classList.contains('configurable') == trueflag) {
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
                    var element = document.querySelector('.inc_product_modal_block.inc_active .inc_product_block .inc_product_desc_att_color_block')
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
                    var sidemodal=document.querySelector('.inc_sidebar_modal_block')
                    if (document.querySelector('.inc_sidebar_modal_block.inc_active .inc_product_modal_block.inc_active') == null && sidemodal != null) {
                        sidemodal.classList.remove('overflow_visible')
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
    function productzeroatt(elAtt0TitleText,elAtt0Block,product0Obj,elAtt0ListBlock,blockType,productBlock){
        elAtt0TitleText.innerText = "カラーとサイズ" +':';
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
        elAtt0Block.classList.add("inc_active");
        elAtt0Block.classList.add("inc_total_"+product0Obj["att0Array"].length)
        var zeroc=0
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
            
            attSizeImg0.innerText = sizeObj["text"];
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
            if(zeroc > 6 && blockType != 'pdp'){
                var inc_more_size = generate_html_tag('span', 'inc_more_size')
                inc_more_size.innerText = '+';
                inc_more_size.addEventListener('click',function(){
                    getTrackingPixel();
                    INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
                    var href = productBlock.querySelector('.inc_product_img_main_img a').href
                    setTimeout(function(){
                        window.location.href = href
                    },3000)
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
            productColorsObj["colorArray"] = productColorsObj["colorArray"].sort(function(a, b){
                if(a.attLebel < b.attLebel) { return -1; }
                if(a.attLebel > b.attLebel) { return 1; }
                return 0;
            })
            if(productColorsObj["colorArray"][0].label == 'Select Fabric'){
                var items = productColorsObj["colorArray"]
                var sortingdata = ["Color", "Size","Linen","Wool","Duro Velvet","Bouclé","Textured Chenille","Wilbur Alpaca Blend","Stonewash Linen","Twisted Yarn Cotton Blend","Brenta Leather","Fermo Leather","Romagna Leather","Riso Bouclé","Alpaca Velvet","Bora Bora","Dolce","Strange Loves"];
                var result = []
                sortingdata.forEach(function (key) {
                    var found = false;
                    items = items.filter(function (item) {
                        var attcheck = item.attLebel.split('|')[0]
                        if (!found && attcheck == key) {
                            result.push(item);
                            return false;
                        } else{
                            return true;
                        }
                    })
                })
                productColorsObj["colorArray"] = result
            }
                
            if (productColorsObj["colorArray"].length > 0) {
                elAttColorListBlock.innerHTML = "";
                elAttColorBlock.classList.add("inc_active");
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
                elAttColorBlock.classList.add("inc_active");
                if(productColorsObj["colorArray"][0].label == 'Select Fabric'){
                    for(var aL=0;aL<productColorsObj["colorArray"][0].attrLength;aL++){
                        productColorsObj["colorArray"].forEach(function (colorObj) {
                            var createelmflg=false;
                            if(pushedfabric.indexOf(colorObj.attLebel) == -1){
                                pushedfabric.push(colorObj.attLebel)
                            }
                            if(pushedfabric[aL] == colorObj.attLebel){
                                if(fabricprod.indexOf(colorObj.attLebel) == -1){
                                    fabricprod.push(colorObj.attLebel)
                                    createelmflg=true
                                }
                                colorelmOb(colorObj,elAttColorListBlock,colorC,blockType,productBlock,one_attr_flag,createelmflg)
                                if(colorObj.label == 'Select Fabric'){
                                    elAttColorTitleText.innerText = colorObj.label + ":";
                                }
                                colorC ++
                            }
                        });
                    }
                }else{
                    productColorsObj["colorArray"].forEach(function (colorObj) {
                        colorelmOb(colorObj,elAttColorListBlock,colorC,blockType,productBlock,one_attr_flag,null)
                        colorC ++
                    });
                }
            }
        }
    }
    function colorelmOb(colorObj,elAttColorListBlock,colorC,blockType,productBlock,one_attr_flag,createelmflg){
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
                getTrackingPixel();
                var hrefd = productBlock.querySelector('.inc_product_img_main_img a').href
                this.setAttribute('href',hrefd)
                INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
                if(window.innerWidth < 821){
                    setTimeout(function(){
                        window.location.href = hrefd
                    },3000)
                }
            })
            if(elAttColorListBlock.querySelector('.inc_more_color') == null){
                elAttColorListBlock.appendChild(inc_more_color);
            }
            return
        }
        attColorImgBlock.appendChild(attColorImg);
        attColorBlock.appendChild(attColorImgBlock);
        
        if(colorObj.label == 'Select Fabric'){
            if(createelmflg == trueflag){
                productBlock.querySelector('.inc_product_desc_att_block').classList.add('fabric_items_available')
                var inc_fabric_att = generate_html_tag('div','inc_fabric_att')
                var inc_fabric_att_text = generate_html_tag('div','inc_fabric_att_text')
                inc_fabric_att_text.innerText = colorObj.attLebel.replace('|',' ')
                inc_fabric_att.appendChild(inc_fabric_att_text);
                var inc_list_fabric_blk = generate_html_tag('div','inc_list_fabric_blk')
                inc_list_fabric_blk.appendChild(attColorBlock);
                inc_fabric_att.appendChild(inc_list_fabric_blk);
                elAttColorListBlock.appendChild(inc_fabric_att);
                attColorBlock.classList.add('fabric_items')
            }else{
                var elind=fabricprod.length - 1
                var inc_fabricel = elAttColorListBlock.querySelectorAll('.inc_list_fabric_blk')[elind]
                inc_fabricel.appendChild(attColorBlock);
            }
            colorTitle.innerText = colorObj["opttext"].split('_')[0]
            colorTitle.title = colorObj["opttext"].split('_')[0].toUpperCase();
        }else{
            elAttColorListBlock.appendChild(attColorBlock);
        }
        var prod_id = productBlock.getAttribute('data-main_id');
        if (one_attr_flag == trueflag) {
            setTimeout(function () {
                if (INC.methods.getProductIdFromWebPage() == prod_id) {
                    attColorImgBlock.click()
                }
            }, 0)
        }
    }
    function productsizeatt(elAttSizeTitleText,elAttSizeBlock,productSizesObj,elAttSizeListBlock,elAttSizeTitleTextSelected,blockType){
        if (productSizesObj.sizeArray.length > 0) {
            elAttSizeBlock.parentNode.parentNode.parentNode.classList.add('dropdownstyle')
            if (productSizesObj["sizeArray"][0].code != "Color") {
                elAttSizeListBlock.innerHTML = "";
                elAttSizeTitleText.innerText = productSizesObj["sizeArray"][0].label;
                elAttSizeBlock.classList.add("inc_active");
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
                    attSizeImg.innerText = sizeObj["text"];
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
                elAtt3TitleTextSelected.innerText = "- Please Select -"
                product3Obj["att3Array"].forEach(function (sizeObj) {
                    elAtt3TitleText.innerText = product3Obj["att3Array"][0].label;
                    elAtt3Block.classList.add("inc_active");
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
                    attSizeImgBlock3.appendChild(attSizeImg3);
                    elAtt3ListBlock.appendChild(attSizeImgBlock3);
                });
            }
        }
    }
    INC.methods.mappvariants = function (obj, blocktype, type_of_variant) {
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
            var productblockshow = productModuleBlck.querySelector('.inc_product_showcase_block .inc_product_block')
            var productblockmod = productModuleBlck.querySelector('.inc_product_modal_block .inc_product_block')

            var mainprdid = productblockshow.getAttribute('data-main_id')

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
            var elselcolortextmodal=productblockmod.querySelector('.inc_product_desc_att_color_title_text_selected')
            if(size_text != undefined){
                var sizelowertext = size_text.toLocaleLowerCase()
                if (productblockmod.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
                    productblockmod.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.inc_active').classList.remove('inc_active')
                }
                if (productblockshow.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
                    productblockshow.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block.inc_active').classList.remove('inc_active')
                }
                if(productblockmod.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' + sizelowertext + '"]') != null){
                    productblockmod.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' + sizelowertext + '"]').classList.add('inc_active')
                    productblockshow.querySelector('.inc_product_desc_att_size_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' + sizelowertext + '"]').classList.add('inc_active')
                }
            }
            if(color_text != undefined){
                var colorlowertext = color_text.toLocaleLowerCase()
                if (productblockmod.querySelector('.inc_product_desc_att_color_list_item_block.inc_active') != null) {
                    productblockmod.querySelector('.inc_product_desc_att_color_list_item_block.inc_active').classList.remove('inc_active')
                }
                if (productblockshow.querySelector('.inc_product_desc_att_color_list_item_block.inc_active') != null) {
                    productblockshow.querySelector('.inc_product_desc_att_color_list_item_block.inc_active').classList.remove('inc_active')
                }
                if(productblockmod.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + colorlowertext + '"]') != null){
                    productblockmod.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + colorlowertext + '"]').parentNode.classList.add('inc_active')
                    productblockshow.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + colorlowertext + '"]').parentNode.classList.add('inc_active')
                }
                elselcolortextmodal.innerText= colorlowertext
                if(productblockmod.querySelector('.inc_product_desc_att_color_list_item_block.inc_active div') != null){
                    var color_colorcode = productblockmod.querySelector('.inc_product_desc_att_color_list_item_block.inc_active div').getAttribute('data-colorcode');
                    if(window.innerWidth < 821){
                        
                            elselcolortextmodal.style.backgroundColor = color_colorcode;
                        
                            elselcolortextmodal.style.backgroundColor = color_colorcode;
                    }
                }
            }
            if(third_text != undefined){
                var thirdlowertext = third_text.toLocaleLowerCase()
                if (productblockmod.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_third_list_item_img_block.inc_active') != null) {
                    productblockmod.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_third_list_item_img_block.inc_active').classList.remove('inc_active')
                }
                if (productblockshow.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_third_list_item_img_block.inc_active') != null) {
                    productblockshow.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_third_list_item_img_block.inc_active').classList.remove('inc_active')
                }
                productblockmod.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_third_list_item_img_block[datasize="' + thirdlowertext + '"]').classList.add('inc_active')
                productblockshow.querySelector('.inc_product_desc_att_third_list_block .inc_product_desc_att_third_list_item_img_block[datasize="' + thirdlowertext + '"]').classList.add('inc_active')
            }
            var checkzeroselflag=false
            if (productblockmod.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active') == null) {
                checkzeroselflag = true
            }
            if (type_of_variant == "zero" || checkzeroselflag == trueflag && type_of_variant != "color") {
                var zerolowertext = ""
                zero_text = ""
                if(checkzeroselflag == trueflag){
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
            if(window.innerWidth < 821){
                if(document.querySelector(".inc_product_block.show_overlay") != null){
                    if (productblockshow.querySelector('.inc_product_desc_att_block').classList.contains('moreThanOne') == falseflag){
                        var allact = document.querySelectorAll('.inc_product_desc_att_block.inc_active')
                        if (document.querySelector('.inc_product_modal_block.inc_active') == null && document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                            document.querySelector('html').classList.remove('inc_overlay');
                            document.querySelector('body').classList.remove('inc_popup_open');
                        }
                        for (var actelm in allact) {
                            if(allact[actelm] != null && Object.prototype.hasOwnProperty.call(allact, actelm)){
                                allact[actelm].classList.remove('inc_active')
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
        var elSize = prod_module_block.querySelector('.inc_product_desc_att_size_block.inc_active')
        var elColor = prod_module_block.querySelector('.inc_product_desc_att_color_block.inc_active')
        var elattr0 = prod_module_block.querySelector('.inc_product_desc_att_zero_block.inc_active')
        var elthird3 = prod_module_block.querySelector('.inc_product_desc_att_third_block.inc_active')
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
        if (attr_flag_color == trueflag && attr__flag_zero == trueflag && attr__flag_third == trueflag) {
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
                sel_attr_text = color_text.split('_')[0]
            } else {
                sel_attr_text = sel_attr_text + " / " + color_text.split('_')[0]
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
        var productObj = INC.dataStore.methods().getProductByAtt(findObj);
        if (productBlock.querySelector('.inc_product_variant_simple_text') != null) {
            // if(blockType == "sidebar" || blockType == "am"){
            //     productBlock.querySelector('.inc_product_variant_simple_text').innerText = "カラーを選ぶ"
            // }else{
                productBlock.querySelector('.inc_product_variant_simple_text').setAttribute('title', sel_attr_text)
                if(productModuleBlock.querySelector('.inc_product_block .inc_product_add_block.added_inc') != null){
                    productBlock.querySelector('.inc_product_variant_simple_text').innerText = "";
                    var variant_span = generate_html_tag('span','variant_span')
                    variant_span.innerText = sel_attr_text
                    productBlock.querySelector('.inc_product_variant_simple_text').appendChild(variant_span)
                } else {
                    if (blockType == "am"){
                        productBlock.querySelector('.inc_product_variant_simple_text').innerText = "";
                        var variant_span = generate_html_tag('span','variant_span')
                        variant_span.innerText = sel_attr_text
                        productBlock.querySelector('.inc_product_variant_simple_text').appendChild(variant_span)
                    }
                }
            // }
            if (zero_text != null) {
                var PrdVarSimTxt = productBlock.querySelector('.inc_product_variant_simple_text')
                var colorTitle = generate_html_tag('div');
                var colorImg = generate_html_tag('img');
                colorTitle.addEventListener('click', function (e) {
                    e.preventDefault();
                })
                if (Object.keys(productObj.option).length != 0){
                    if (productObj.option[1].imgSrc != ""){
                        colorImg.setAttribute('src', productObj.option[1].imgSrc);
                    
                        if (productBlock.querySelector('.inc_product_variant_simple_text .variant_span') != null){
                            colorTitle.appendChild(colorImg);
                            PrdVarSimTxt.prepend(colorTitle);
                        }
                        colorTitle.classList.add("colorCircle")
                    }
                }
            }
        }
        var productObj = INC.dataStore.methods().getProductByAtt(findObj);
        if (Object.keys(productObj).length != 0) {
            var previousSKU = "";
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
                // productModuleBlock.querySelector('.inc_product_desc_att_size_title_text').textContent = sel_attr_text
                productModuleBlock.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title', sel_attr_text)
                if(modal_attr_block.querySelector('.inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block') != null){
                    var optionimage = modal_attr_block.querySelector('.inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-optionimge');
                    if(optionimage == '' || optionimage == undefined){
                        optionimage = modal_attr_block.querySelector('.inc_product_desc_att_color_list_item_block.inc_active .inc_product_desc_att_color_list_item_img_block').getAttribute('data-colorcode');
                    }
                    if(optionimage != undefined && optionimage != ""){
                        productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_variant_simple_text').innerHTML = ""
                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_variant_simple_text').innerHTML = ""
                        var optimg = null
                        var colorImg = generate_html_tag('div');
                        colorImg.classList.add("colorCircle")
                        if (optionimage.charAt(0) != "#") {
                            optimg = generate_html_tag('img')
                            optimg.src = optionimage
                        } else {
                            optimg = generate_html_tag('span')
                            optimg.style.backgroundColor = optionimage
                        }
                        colorImg.append(optimg)
                        // var optimg = null
                        // if(optionimage.charAt(0) != "#"){
                        //     optimg = generate_html_tag('img')
                        //     optimg.src = optionimage
                        // }else{
                        //     optimg = generate_html_tag('span')
                        //     optimg.style.backgroundColor = optionimage
                        // }
                        var imgselvar = optimg.cloneNode(colorImg);
                        productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_variant_simple_block').classList.remove("select_inc")
                        productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_variant_simple_text').appendChild(colorImg)
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
            if (color_text != undefined) {
                var ccode = modal_attr_block.querySelector('.inc_product_desc_att_color_list_item_block.inc_active div').getAttribute('data-colorcode');
                productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_desc_att_color_title_text').style.backgroundColor = ccode
                if(window.innerWidth < 821){
                    productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_att_color_title_text').style.backgroundColor = ccode
                }
            }

            var elImgBlock = productBlock.querySelector('.inc_product_img_block');
            var elImgGalleryListBlock = productBlock.querySelector('.inc_product_img_gallery_list_block');
            var elTitleText =  productBlock.querySelector('.inc_product_desc_title_text');
            var elPriceActiveText = productBlock.querySelector('.inc_product_desc_ecirp_active_text');
            var elPriceRegularText = productBlock.querySelector('.inc_product_desc_ecirp_regular_text');
            var elAddText = productBlock.querySelector('.inc_product_desc_add_text');
            var elworthPrice = productBlock.querySelector('.inc_product_desc_ecirp_worth_text');
            var elGalleryRightArrow = productBlock.querySelector('.inc_product_img_gallery_right_block');
            var elGallerylefttArrow = productBlock.querySelector('.inc_product_img_gallery_left_block');
            var eladdbtnqtyblock = productBlock.querySelector('.inc_product_desc_qty_add_btn_block');
            if (productBlock.parentNode.className.indexOf('inc_product_showcase_block') >= 0) {
                if (blockType != "pdp") {
                    eladdbtnqtyblock.classList.add('inc_active')
                }
            }
            var elImgMainImg = elImgBlock.querySelector('.inc_product_img_main_img');

            elImgMainImg.querySelectorAll('img')[0].setAttribute('src', productObj["imageURL"]);
            if(productModuleBlock.parentNode.classList.contains('inc_pdp_product-main_block') == falseflag){
                if (window.location.hostname == 'tt311.w2solution.com'){
                    elImgMainImg.querySelector('a').setAttribute('href', productObj["url"].replace('https://cefinecosmetics.co.jp/','https://tt311.w2solution.com/Test/R1024_Cefine/'));
                } else {
                    elImgMainImg.querySelector('a').setAttribute('href', productObj["url"].replace('https://cefinecosmetics.co.jp/','https://tt311.w2solution.com/Test/R1024_Cefine/'));
                }
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
                elTitleText.querySelector('div').innerHTML = "<strong>対象商品: </strong>" + productObj.name
            }else{
                elTitleText.querySelector('div').textContent = productObj.name
            }
            // elTitleText.querySelector('a').setAttribute('title', productObj.name)

            var activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
            var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
            var totalsaveprc = get_discount_price(productObj.regularPrice, productObj.activePrice)
            var totalsaveper = get_discount_price_percentage(productObj.regularPrice, productObj.activePrice)

            elPriceActiveText.parentNode.parentNode.parentNode.classList.remove('is_special_ecirp')
            elPriceRegularText.textContent = "";
            if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
                elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
                elPriceActiveText.innerHTML = formatter.format(activePrice) + "<span>("+INC.config.prcText+") </span>"
                elPriceRegularText.innerHTML =  formatter.format(regularPrice)  + "<span>("+INC.config.prcText+") </span>"
                elworthPrice.innerHTML = "You save: " + formatter.format(totalsaveprc) + " (" + (totalsaveper) + "%)";
            } else {
                elworthPrice.innerHTML = "";
                elPriceActiveText.innerHTML = formatter.format(activePrice) + "<span>("+INC.config.prcText+") </span>"
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
            var elQtyInput = productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_qty_add_btn_block .inc_product_qty_block input');
            var sku = productBlock.getAttribute('data-sku');
            var bundle_id = productBlock.getAttribute('data-bundle_id');
            var main_id = productBlock.getAttribute('data-main_id');
            var qty = parseInt(elQtyInput.value);
            var pname = productBlock.querySelector('.inc_product_desc_title_text').textContent;
            var pprice = productBlock.querySelector('.inc_product_desc_ecirp_active_text').textContent.replace('¥', '');

            if (elAddText.parentNode.parentNode.querySelector('.inc_product_desc_add_img.checked') != null) {
                INC.methods.updateBundleCart({ sku: sku, qty: qty }, "add", main_id, bundle_id, pname, pprice);
            }
            if (blockType == "pdp") {
                if(document.querySelector('.inc_img_together_block .inc_main_img_block img') != null &&  document.querySelector('.inc_goes_img_block img') != null){
                    var img_1 = document.querySelector('.inc_pdp_product-main_block .inc_product_img_block img').src
                    var href_1 = document.querySelector('.inc_pdp_product-main_block .inc_product_img_block a').href
                    if (document.querySelectorAll('.inc_pdp_bundle_product_list_main_block .inc_product_module_block').length > 1){
                        var img_2 = document.querySelectorAll('.inc_pdp_bundle_product_list_main_block .inc_product_module_block .inc_product_img_block img')[0].src
                        var img_3 = document.querySelectorAll('.inc_pdp_bundle_product_list_main_block .inc_product_module_block .inc_product_img_block img')[2].src
                        var href_2 = document.querySelectorAll('.inc_pdp_bundle_product_list_main_block .inc_product_module_block .inc_product_img_block a')[0].href
                        var href_3 = document.querySelectorAll('.inc_pdp_bundle_product_list_main_block .inc_product_module_block .inc_product_img_block a')[2].href
                        document.querySelectorAll('.inc_goes_img_block img')[0].src=img_2
                        document.querySelectorAll('.inc_goes_img_block a')[0].href=href_2
                        document.querySelectorAll('.inc_goes_img_block img')[1].src=img_3
                        document.querySelectorAll('.inc_goes_img_block a')[1].href=href_3
                    } else {
                        var img_2 = document.querySelectorAll('.inc_pdp_bundle_product_list_main_block .inc_product_module_block .inc_product_img_block img')[0].src
                        var href_2 = document.querySelectorAll('.inc_pdp_bundle_product_list_main_block .inc_product_module_block .inc_product_img_block a'[0]).href
                        document.querySelectorAll('.inc_goes_img_block img'[0]).src=img_2
                        document.querySelectorAll('.inc_goes_img_block a')[0].href=href_2
                    }
                    
                    document.querySelector('.inc_img_together_block .inc_main_img_block img').src=img_1
                    document.querySelector('.inc_img_together_block .inc_main_img_block a').href=href_1
                    

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
        var productListItemBlock = generate_html_tag('div','inc_pdp_bundle_product_list_item_block');
        var findObj = new INC.classes.FindObj({ id: productObjs.id, mainId: productObjs.mainId });
        var productObj = INC.dataStore.methods().getProductById(findObj);
        productListItemBlock.style.userSelect = "none";
        productListItemBlock.setAttribute('data-id', productObj.id);
        productListItemBlock.setAttribute('data-sku', productObj.sku);
        productListItemBlock.setAttribute('data-main_id', productObj.mainId);
        productListItemBlock.setAttribute('data-bundle_id', productObj.bundleId);

        var seemoreprodhtml='<div class="inc_pdp_bundle_product_list_item_added_block"><div class="inc_pdp_bundle_product_list_item_added_btn_block"><div class="inc_pdp_bundle_product_list_item_added_btn_img_block"><div class="inc_pdp_bundle_product_list_item_added_btn_img"></div></div><div class="inc_pdp_bundle_product_list_item_added_btn_text_block"><div class="inc_pdp_bundle_product_list_item_added_btn_text"></div></div></div></div><div class="inc_pdp_bundle_product_list_item_img_block"><div class="inc_pdp_bundle_product_list_item_img"><img class="inc_lazy" data-src="'+productObj.imageURL+'" src="'+productObj.imageURL+'"></div></div><div class="inc_pdp_bundle_product_list_item_title_block"><div class="inc_pdp_bundle_product_list_item_title_text_block"><div class="inc_pdp_bundle_product_list_item_title_text"></div></div></div><div class="inc_pdp_bundle_product_list_item_ecirp_block"><div class="inc_pdp_bundle_product_list_item_ecirp_active_block"><div class="inc_pdp_bundle_product_list_item_ecirp_active_text_block"><div class="inc_pdp_bundle_product_list_item_ecirp_active_text"></div></div></div></div>'

        productListItemBlock.innerHTML=seemoreprodhtml
        productListItemBlock.querySelector('.inc_pdp_bundle_product_list_item_img img').setAttribute('onerror',"this.src='"+INC.config.noimage+"'" );
        productListItemBlock.addEventListener("click", function () {
            Array.prototype.forEach.call(document.querySelectorAll('.inc_product_desc_att_size_list_block'), function (attSizeListBlock) {
                attSizeListBlock.classList.remove("inc_active");
            });

            var elListMainBlock = document.querySelector('.inc_pdp_bundle_product_list_main_block');
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
                                duplicate_check_produ.push(productListObj[mainProductId][childProductId]["sku"])
                                var regularPrice = productListObj[mainProductId][childProductId]["regularPrice"];
                                var activePrice = productListObj[mainProductId][childProductId]["activePrice"];
                                var percentile;
                                // if (productListObj[mainProductId][childProductId].bundle_percentage != null){
                                //     if (productListObj[mainProductId][childProductId].bundle_percentage == 5){
                                //         percentile = 0.95
                                //     } 
                                // }
                                    // else {
                                //         percentile = 0.80
                                //     }
                                // }
                                totalRegularPrice = totalRegularPrice + (parseFloat(bundleCartProducts[sku]) * activePrice);
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
        var totalAddonProductsCount = priceObj.totalAddonProductsCount;
        var totalProductCount = priceObj.totalProductCount;
        var elPdpBundleCartBlock = document.querySelector('.inc_pdp_bundle_cart_block');
        if (elPdpBundleCartBlock != null) {
            var elBundleCartAddedBlock = document.querySelector('.inc_pdp_bundle_cart_added_block')
            var elBundleCartSummaryViewBtnCount = document.querySelector('.inc_pdp_bundle_cart_summary_view_btn_count')
            var elBundleCartPriceRegularText =document.querySelector('.inc_pdp_bundle_cart_summary_ecirp_regular_text')
            var elBundleCartPriceActiveText = document.querySelector('.inc_pdp_bundle_cart_summary_ecirp_active_text')
            var elBundleCartTitleTextcount = document.querySelector('.inc_pdp_bundle_cart_title_text')
            var elbundlesavetext = document.querySelector('.inc_pdp_bundle_cart_summary_ecirp_save_text')
            var elBundleCartAddBtnText = document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_text')
            elBundleCartAddedBlock.innerHTML = "";
            var bundleCartProductsArray = Object.keys(bundleCartProducts);
            elBundleCartSummaryViewBtnCount.textContent = bundleCartProductsArray.length;
            if (window.innerWidth < 821) {
                elBundleCartTitleTextcount.textContent = "Items you've added"
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

            if (bundleCartProductsArray.length == 0) {
                setTimeout(function () {
                    onloadpdp_delete = false;
                    document.querySelectorAll('.inc_pdp_block .inc_product_desc_add_block')[1].click();
                    if (window.innerWidth > 820){
                        document.querySelector('.inc_plus_icon').style.display = "none";
                    }
                    onloadpdp_delete = true;
                }, 5);
            }
            
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.remove('simple_ecirp')
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.remove('is_special_ecirp')
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.remove('simple_ecirp')
            elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.remove('is_special_ecirp')
            var totalsaveprcs = get_discount_price(totalRegularPrice, totalActivePrice)
            if (totalRegularPrice != "0.00" && totalRegularPrice != totalActivePrice && totalRegularPrice != null && totalRegularPrice != "") {
            	elBundleCartPriceActiveText.innerHTML =  formatter.format(Math.ceil(totalActivePrice)) + "<span>("+INC.config.prcText+") </span>"
                elBundleCartPriceRegularText.innerHTML =  formatter.format(Math.ceil(totalRegularPrice)) + "<span>("+INC.config.prcText+") </span>"
                elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
                elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
                elbundlesavetext.innerHTML = "You save: " + formatter.format(totalsaveprcs)  + "<span>("+INC.config.prcText+") </span>"
            } else {
            	elBundleCartPriceActiveText.innerHTML =  "<span>合計金額: </span>"+ formatter.format(Math.ceil(totalActivePrice)) + "<span>("+INC.config.prcText+") </span>"
                elbundlesavetext.innerHTML = ""
                elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.add('simple_ecirp')
            }

            if (elPdpBundleCartBlock != null && elPdpBundleCartBlock != undefined) {
                var elBundleCartTitleText = document.querySelector('.inc_pdp_bundle_cart_title_text')
                var elBundleCartAddBtnTexts = document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_text')
                elBundleCartAddBtnTexts.style.textTransform = "none"
                elBundleCartTitleText.textContent = "Price Summary";
                elBundleCartAddBtnTexts.textContent =  "まとめてカートに入れる";
                if (totalProductCount <= 1) {
                    elBundleCartAddBtnTexts.textContent = "カートに入れる";
                }
            }

            var elPriceMainTitleText = elPdpBundleCartBlock.querySelector('.inc_pdp_bundle-cart_ecirp_main_title_text');
            var elPriceMainFigureText = elPdpBundleCartBlock.querySelector('.inc_pdp_bundle-cart_ecirp_main_figure_text');
            var elPriceAddonTitleText = elPdpBundleCartBlock.querySelector('.inc_pdp_bundle-cart_ecirp_addon_title_text');
            var elPriceAddonFigureText = elPdpBundleCartBlock.querySelector('.inc_pdp_bundle-cart_ecirp_addon_figure_text');
            var elPriceActiveText = elPdpBundleCartBlock.querySelector('.inc_pdp_bundle_cart_summary_ecirp_active_text');

            elPriceMainTitleText.textContent = "Main Product Price ";
            elPriceAddonTitleText.textContent = "Add-on(s) Selected  " + ((totalAddonProductsCount > 0) ? totalAddonProductsCount : "");

            elPriceMainFigureText.innerHTML = formatter.format(totalMainProduct)
            elPriceAddonFigureText.innerHTML = formatter.format(totalAddonProducts)
            
            elPriceActiveText.innerHTML = "<span>合計金額: </span>"+ " " + formatter.format(Math.ceil(totalActivePrice)) + "<span>("+INC.config.prcText+") </span>"
            if (totalRegularPrice != "0.00" && totalRegularPrice != totalActivePrice && totalRegularPrice != null && totalRegularPrice != "") {
            	elPriceActiveText.innerHTML = formatter.format(Math.ceil(totalActivePrice)) + "<span>("+INC.config.prcText+") </span>"
            }

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
        var addedsumprodhtml = '<div class="inc_pdp_bundle_cart_added_product_img_block"><div class="inc_pdp_bundle_cart_added_product_img"><img src="'+productObj.imageURL+'" data-src="'+productObj.imageURL+'"></div></div><div class="inc_pdp_bundle_cart_added_product_title_block"><div class="inc_pdp_bundle_cart_added_product_title_text_block"><div class="inc_pdp_bundle_cart_added_product_title_text"><a title="'+productObj.name+'"><div style="text-transform: unset;"><span>'+qty+' <small>x</small> </span>'+productObj.name+'</div></a></div></div></div><div class="inc_pdp_bundle_cart_added_product_qty_block"><div class="inc_pdp_bundle_cart_added_product_qty_text_block"><div class="inc_pdp_bundle_cart_addeed_product_qty_text">'+qty+'</div></div></div><div class="inc_pdp_bundle_cart_added_product_ecirp_block"><div class="inc_pdp_bundle_cart_added_product_ecirp_text_block"><div class="inc_pdp_bundle_cart_added_product_ecirp_text">'+formatter.format(productObj.activePrice * qty)+'</div></div></div><div class="inc_pdp_bundle_cart_added_product_att_block" title="'+sel_attr_text+'"><div class="inc_pdp_bundle_cart_added_product_att_color_block"><div class="inc_pdp_bundle_cart_added_product_att_color_text_block" style="text-transform: none;">'+sel_attr_text+'</div></div><div class="inc_pdp_bundle_cart_added_product_att_size_block"><div class="inc_pdp_bundle_cart_added_product_att_size_text_block"><div class="inc_pdp_bundle_cart_added_product_att_size_text"></div></div></div></div><div class="inc_pdp_bundle_cart_added_product_edit_block"><div class="inc_pdp_bundle_cart_added_product_edit_text_block"><div class="inc_pdp_bundle_cart_added_product_edit_text"></div></div><div class="inc_pdp_bundle_cart_added_product_edit_img_block"><div class="inc_pdp_bundle_cart_added_product_edit_img"></div></div></div>'

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

    INC.methods.addProductToCart = function (findObjd, productBlock, add_btn_click, _add_prod_im, btn_addtocart, newbtntext, rec_type) {
        
        try{
            getTrackingPixel();
	        var findObj = new INC.classes.FindObj(findObjd);
	        var productObj = INC.dataStore.methods().getProductById(findObj);
	        var mainids = productBlock.getAttribute('data-main_id')
	        var qty = productBlock.querySelector('input').value;
	       
	        setTimeout(function(){
		        if (document.querySelector('.inc_product_modal_block.inc_active') != null) {
                    document.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                    document.querySelector('html').classList.remove('inc_overlay')
                }
	        },1500)
	        var id = "";
            if (productObj.ProductType == "configurable"){
                id = productObj.childsku;
            } else {
                id = productObj.mainsku
            }
	        var data0 = {};
            data0["goods"] = id;
            data0["qty"] = qty;
	        if (rec_type == trueflag) {
	            INC.config.pdpaddedProductList = []
	            INC.config.pdpaddedProductList.push(INC.config.Product_id.toString())
	            INC.config.pdpaddedProductList.push(productObj.mainId.toString())
	            checkAddedProductInJustAdded()
	        }	
	        var addurl = INC.config.addToBasketURL  + "goods=" + id + "&qty=" + qty;
	        
	        window.jQuery.ajax({
	            type: "POST",
	            url: addurl,
	            data: data0,
	            dataType: 'json',
	            success: function (e) {
	                INC.config.pdpaddedProductList.push(productObj.mainId)
	                INC.config.sidebarremovedprod.push(mainids)
	               	INC.config.disablebtn = true
                    
                    if (window.location.pathname.indexOf('cart') <= 0 &&window.location.pathname.indexOf('kurv') <= 0 ){
                       addsuccess_(btn_addtocart, add_btn_click, productBlock,newbtntext,e)
                    } else {
	                	
                        addsuccess_(btn_addtocart, add_btn_click, productBlock,newbtntext,e)
                        window.location.reload();
	                }
	                
	            },
	            error: function (res) {
                    INC.config.pdpaddedProductList.push(productObj.mainId)
	                INC.config.sidebarremovedprod.push(mainids)
	               	INC.config.disablebtn = true
                    if (window.location.pathname.indexOf('cart') <= 0 &&window.location.pathname.indexOf('kurv') <= 0 ){
                       addsuccess_(btn_addtocart, add_btn_click, productBlock,newbtntext,e)
                    } else {
	                	
                        addsuccess_(btn_addtocart, add_btn_click, productBlock,newbtntext,e)
                        window.location.reload();
	                }
	                
	            },
	        });

	        function addsuccess_(btn_t, addbtnt, addedprdblock,newbtn,e) {
	            INC.config.disablebtn = true
	            if(e.error == true){
	            	add_btn_click.innerText = "Not Added";
	                btn_addtocart.innerText = "Not Added";
	                if (newbtntext != undefined) {
	                    newbtntext.innerHTML = "Not Added";
	                }
	            }else{
	            	if(addbtnt != null){
		                addbtnt.innerText = "カートに入れる";
		            }
		            if(newbtn != null){
		                newbtn.innerText = "カートに入れる";
		            }
		            btn_t.innerText = "カートに入れる";
		            if (newbtntext != undefined) {
		                newbtntext.innerHTML = "カートに入れる";
		            }
	            }
	            

	            if (INC.config.pageType == "cartPage") {
	                if (document.querySelector('.cart-item.product') != null) {
	                    INC.clientConfig.offset = 0;
	                    INC.clientConfig.slidevalue = 0;
	                    INC.init();
	                }
	            }
	            var call_addprodtosidebar = false;

	            if (INC.config.pageType != "cartPage" && !INC.config.recommendation && !rec_type) {
	                call_addprodtosidebar = true
	            } else {
	                if ((INC.config.pageType != "cartPage" && document.querySelector('.sidebar_outer.sidebar_outer_active') != null)) {
	                    call_addprodtosidebar = true
	                }
	            }

	            if (INC.config.pageType == "cartPage") {
	                if (document.querySelector('.inc_product_modal_block.inc_active') != null) {
	                    document.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
	                }
	                addedprdblock.querySelector('.inc_product_desc_add_text').innerText = "Added";
	                setTimeout(function () {
	                    if (addedprdblock != null) {
	                        addedprdblock.parentNode.removeChild(addedprdblock);
	                    }
	                }, 500)
	                setTimeout(function () {
	                    window.location.reload();
	                }, 2000);

	                if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
	                    document.querySelector('.inc_recommended_tabs_list_item_block').click()
	                }
	                document.querySelector('html').classList.remove('inc_overlay')

	            }

	            setTimeout(function () {
	            	// if(e.error == false){
		                if(addbtnt != null){
		                    addbtnt.innerText = INC.config.addtoBagText;
		                }
		                if(newbtn != null){
			                newbtn.innerText = INC.config.addtoBagText;
			            }
		                Array.prototype.forEach.call(addbtnt, function (el) {
		                    el.innerText = "Add";
		                });
		                if (btn_t != undefined) {
		                	btn_t.innerText = INC.config.addtoBagText;
		                    if (btn_t.parentNode.parentNode != null) {
		                        btn_t.parentNode.parentNode.setAttribute("style", "pointer-events: auto;opacity: 1;");
		                    }
		                }
		            // }
	                INC.config.disablebtn = true
	            }, 2000);
	            if (INC.config.pageType != "cartPage" && !INC.config.recommendation && !rec_type) {
	                setTimeout(function () {
	                    loadsidebarajax(null, rec_type)
	                    var allprd = addedprdblock.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block').length
	                    if (document.querySelector('.inc_recommended_products_list_block .inc_product_module_block') == null || allprd == 1 && document.querySelector('.sidebar_outer.sidebar_outer_active') != null) {
	                        if (document.querySelector('.inc_recommended_tabs_list_item_block.inc_active') != null) {
	                            var remcat = document.querySelector('.inc_recommended_tabs_list_item_block.inc_active')

	                            if (document.querySelector('.inc_recommended_tabs_list_item_block.inc_active') != null) {

	                                document.querySelector('.inc_recommended_tabs_list_item_block.inc_active').parentNode.removeChild(remcat)

	                                if (document.querySelector('.inc_recommended_tabs_block').innerText == "") {
	                                    document.querySelector('.inc_recommended_products_block').innerHTML = ""
	                                    // window.location.replace(INC.clientConfig.checkoutLink);

	                                    return
	                                }
	                                if (document.querySelectorAll('.inc_recommended_tabs_list_item_block').length > 1) {
	                                    if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
	                                        document.querySelector('.inc_recommended_tabs_list_item_block').click()
	                                    }
	                                    checkTabEmpty();
	                                } else {
	                                    if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
	                                        document.querySelector('.inc_recommended_tabs_list_item_block').click()
	                                    }
	                                    checkTabEmpty();
	                                    document.querySelector('.inc_recommended_products_list_block').setAttribute('style', 'margin-left:0;')
	                                }
	                                if (window.innerWidth < 821) {
	                                    document.querySelector('.inc_recommended_tabs_list_block').scroll({
	                                        left: 0,
	                                        top: 0,
	                                        behavior: 'smooth'
	                                    })
	                                }
	                            }
	                        }
	                    } else {
	                        if (addedprdblock.parentNode.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block').length == 1) {
	                            var len = addedprdblock.parentNode.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block').length
	                            checkTabEmpty(len);
	                            if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
	                                document.querySelector('.inc_recommended_tabs_list_item_block').click()
	                            }
	                        } else {
	                            checkTabEmpty();
	                            if (addedprdblock != null) {
	                                addedprdblock.parentNode.removeChild(addedprdblock);
	                            }
	                        }

	                        if (window.innerWidth < 821) {
	                            document.querySelector('.inc_recommended_tabs_list_block').scroll({
	                                left: 0,
	                                top: 0,
	                                behavior: 'smooth'
	                            })
	                        }
	                    }
	                }, 1000)
	            }
	        }
	    }
	    catch(er){
	        if(btn_addtocart != null){
                btn_addtocart.innerText = INC.config.addtoBagText;
            }
            if(newbtntext != null){
                newbtntext.innerText = INC.config.addtoBagText;
            }
            Array.prototype.forEach.call(btn_addtocart, function (el) {
                el.innerText = "Add";
            });
            if (btn_addtocart != undefined) {
            	btn_addtocart.innerText = INC.config.addtoBagText;
                if (btn_addtocart.parentNode.parentNode != null) {
                    btn_addtocart.parentNode.parentNode.setAttribute("style", "pointer-events: auto;opacity: 1;");
                }
            }
	    }
        
        document.querySelector('body').classList.remove('inc_popup_open');
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
        setTimeout(function () {
            if (INC.config.pageType == "cartPage") {
                if (btn_addtocart.innerText == '追加中...'|| btn_addtocart.innerText == 'Tilføjelse...') {
                    add_btn_click.innerText = "カートに入れる";
                    btn_addtocart.innerText = "カートに入れる";
                    if (newbtntext != undefined) {
                        newbtntext.innerHTML = "カートに入れる";
                    }
                }
                if (document.querySelector('.inc_product_modal_block.inc_active') != null) {
                    document.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                }

                document.querySelector('html').classList.remove('inc_overlay')
                window.location.reload()
            }
        }, 3000)
        var eventDataObj = {};
        if (document.querySelector(".inc_sidebar_modal_block.inc_active") == null && INC.config.pageType == "pdp") {
            pageType = "100";
        }
        if (document.querySelector(".minicart-container--active") != null && INC.config.pageType == "pdp") {
            pageType = "107";
        }
        if(document.querySelector('.minicart-container.minicart-container--active') != null && INC.config.pageType == "pdp"){
        	pageType = "107";
        }
        if ((INC.config.recommendation == falseflag && rec_type != trueflag) && productObj.bundleId == 'undefined' || productObj.bundleId == undefined) {
            var eventdata__ = {
                "core_product_id": INC.config.Product_id,
                "product_id": productObj.mainId
            }
            var data__ = {
                "eventData": btoa((JSON.stringify({
                    "event_data": eventdata__,
                    "page_type": pageType,
                    "event_type": 'bestseller_add_to_cart',
                    "method": "track",
                    "platform": "",
                    "rt": "8",
                    "rpt": "4",
                    "token": INC.config.clientToken
                }))),
                "vid": readCookie('ivid'),
                "time": getCurrentFormattedTime(),
                "uri": document.location.href
            };
            makeTrackingApiCall(JSON.stringify(data__));
        } else {
            if (INC.config.pageType == "cartPage") {
                eventDataObj["bundle_data"] = {
                    "id":'bundle id',
                    "product_ids": ['main product id', 'prduct which we are going to add'],
                    "product_id": 'prduct which we are going to add'
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
        var addProductURL = INC.config.addToBasketURL;
        if (document.querySelector('input[name="form_key"]') != null) {
            formKey = document.querySelector('input[name="form_key"]').value;
        }
        var dataStore = INC.dataStore;
        var mainProductId =  INC.config.Product_id;
        var searchParamsObjArray = [];
        var formData = []
        
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
        var formData = []
        var form_data_json = []
        var count_pr_to_add = 0
        var success_length=0;
        var total_length = Object.keys(dataStore.bundleCartProducts);
        Object.keys(dataStore.bundleCartProducts).forEach(function (bundleCartProduct) {
            getTrackingPixel()
            var findObj = new INC.classes.FindObj({ id: bundleCartProduct });
            addedProductIndex.push(document.querySelector('.inc_product_module_block[data-sku="' + bundleCartProduct + '"]').getAttribute('b-index'))
            var productObj = INC.dataStore.methods().getProductById(findObj);
            var id = "";
            if (productObj.ProductType == "configurable"){
                id = productObj.childsku;
            } else {
                id = productObj.mainsku
            }
            if (count_pr_to_add == 0) {
                data0["goods"] = id;
                data0["qty"] = INC.dataStore.bundleCartProducts[bundleCartProduct];
                url0 = addProductURL + "goods=" + id + "&qty=" + INC.dataStore.bundleCartProducts[bundleCartProduct];
                formData.push(data0)
            } else if (count_pr_to_add == 1) {
                data1["goods"] = id;
                data1["qty"] = INC.dataStore.bundleCartProducts[bundleCartProduct];
                url1 = addProductURL + "goods=" + id + "&qty=" + INC.dataStore.bundleCartProducts[bundleCartProduct];
                formData.push(data1)
            } else if (count_pr_to_add == 2) {
                data2["goods"] = id;
                data2["qty"] = INC.dataStore.bundleCartProducts[bundleCartProduct];
                url2 = addProductURL + "goods=" + id + "&qty=" + INC.dataStore.bundleCartProducts[bundleCartProduct];
                formData.push(data2)
            } else if (count_pr_to_add == 3) {
                data3["goods"] = id;
                data3["qty"] = INC.dataStore.bundleCartProducts[bundleCartProduct];
                url3 = addProductURL + "goods=" + id + "&qty=" + INC.dataStore.bundleCartProducts[bundleCartProduct];
                formData.push(data3)
            } else if (count_pr_to_add == 4) {
                data4["goods"] = productObj.idAddtocart;
                data4["qty"] = "";
                url4= addProductURL + "/" + btoa(window.location.url) + "/product/" + productObj.idAddtocart + "/";
                formData.push(data4)
            } else if (count_pr_to_add == 5) {
                data5["goods"] = productObj.idAddtocart;
                data5["qty"] = "";
                url5 = addProductURL + "/" + Base64.encode(productObj.urlMain) + "/product/" + productObj.idAddtocart + "/";
                formData.push(data5)
            }
            count_pr_to_add++
            if (total_length.length == count_pr_to_add) {
                ajax_add_to_cart(formData, btn_cart, mainProductId, url0, url1, url2, url3, url4, url5)
            }
        });
        var timeoutOffset = 0;
        add_to_cart_tracking_multiple(mainProductId)
        
    
        Object.keys(dataStore.bundleCartProducts).forEach(function (bundleCartProduct) {
            var findObj = new INC.classes.FindObj({ id: bundleCartProduct });
            var productObj = INC.dataStore.methods().getProductById(findObj);
    
            var eventDataObj = {};
            var pageType = "100";
    
            eventDataObj["bundle_data"] = {
                "id": productObj.bundleId,
                "product_ids": [mainProductId, productObj.mainId],
                "product_id": mainProductId
            }
            // INC.methods.trackingEvents("bundleAddToCart", eventDataObj, pageType);
        });
    }
    function ajax_add_to_cart(formData, btn_cart, mainProductId, url0, url1, url2, url3, url4, url5) {
        INC.clientConfig.OOS = []
        INC.clientConfig.OOS_MESG = []
        function suc1(btn_ca){
            if (formData[1] == undefined) {
                loadsidebarajax(btn_ca)
            }
            if (formData[1] != undefined) {
                callprodB()
            }
        }
        function suc2(btn_ca){
            if (formData[2] == undefined) {
                loadsidebarajax(btn_ca)
            }
            if (formData[2] != undefined) {
                callprodC()
            }
        }
        function suc3(btn_ca){
            if (formData[3] == undefined) {
                loadsidebarajax(btn_ca)
            }
            if (formData[3] != undefined) {
                callprodD()
            }
        }
        function suc4(btn_ca){
            if (formData[4] == undefined) {
                loadsidebarajax(btn_ca)
            }
            if (formData[4] != undefined) {
                callprodE()
            }
        }
        function suc5(btn_ca){
            if (formData[5] == undefined) {
                loadsidebarajax(btn_ca)
            }
            if (formData[5] != undefined) {
                callprodF()
            }
        }
        callprodA()
        function callprodA() {
            window.jQuery.ajax({
                type: "POST",
                url: url0,
                headers: {
                    'X-Requested-With':'XMLHttpRequest',
                    'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
                    'X-MicrosoftAjax':'Delta=true',
                    'Cache-Control':'no-cache',
                },
                data: formData[0],
                async: true,
                success: function(data_re) {
                    if(data_re.backUrl != undefined){
                        prod_qty_notinstock(formData[0])
                    }
                    // getTrackingPixel()
                    suc1(btn_cart)
                },
                error: function () {
                    // getTrackingPixel()
                    suc1(btn_cart)
                },
            });
        }
        function callprodB() {
            window.jQuery.ajax({
                type: "POST",
                url: url1,
                headers: {
                    'X-Requested-With':'XMLHttpRequest',
                    'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
                    'X-MicrosoftAjax':'Delta=true',
                    'Cache-Control':'no-cache',
                },
                data: formData[1],
                async: true,
                success: function(res) {
                    // getTrackingPixel()
                    if(res.backUrl != undefined){
                        prod_qty_notinstock(formData[1])
                    }
                    suc2(btn_cart)
                },
                error: function () {
                    suc2(btn_cart)
                },
            });
        }
        function callprodC() {
            window.jQuery.ajax({
                type: "POST",
                url: url2,
                headers: {
                    'X-Requested-With':'XMLHttpRequest',
                    'Content-Type':'application/x-www-form-urlencoded; charset=UTF-8',
                    'X-MicrosoftAjax':'Delta=true',
                    'Cache-Control':'no-cache',
                },
                data: formData[2],
                async: true,
                success: function(res2) {
                    // getTrackingPixel()
                    if(res2.backUrl != undefined){
                        prod_qty_notinstock(formData[2])
                    }
                    suc3(btn_cart)
                },
                error: function () {
                    suc3(btn_cart)
                },
            });
        }
        function callprodD() {
            window.jQuery.ajax({
                type: "POST",
                url: url3,
                data: formData[3],
                async: true,
                success: function(res3) {
                    if(res3.backUrl != undefined){
                        prod_qty_notinstock(formData[3])
                    }
                    // getTrackingPixel()
                    suc4(btn_cart)
                },
                error: function () {
                    suc4(btn_cart)
                },
            });
        }
        function callprodE() {
            window.jQuery.ajax({
                type: "POST",
                url: url_add[4],
                data: formData[4],
                async: true,
                success: function(res4) {
                    // getTrackingPixel()
                    if(res4.backUrl != undefined){
                        prod_qty_notinstock(formData[4])
                    }
                    suc5(btn_cart)
                },
                error: function () {
                    suc5(btn_cart)
                },
            });
        }
        function callprodF() {
            window.jQuery.ajax({
                type: "POST",
                url: url_add[5],
                data: formData[5],
                async: true,
                success: function(res5) {
                    // getTrackingPixel()
                    if(res5.backUrl != undefined){
                        prod_qty_notinstock(formData[5])
                    }
                    loadsidebarajax(btn_cart)
                },
                error: function () {
                    loadsidebarajax(btn_cart)
                },
            });
        }
    }
    function prod_qty_notinstock(formd){
        var ajaxmainid=formd.split('&')[0].replace('product=','')
        INC.clientConfig.OOS.push(ajaxmainid)
        INC.clientConfig.OOS_MESG.push('The requested quantity is not available')
    }
    function loadsidebarajax(btn_cart){
        INC.config.disablebtn = true
        if (btn_cart != undefined) {
            btn_cart.classList.remove('inc_loading')
        }
        if(document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading') != null){
            document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading').classList.remove('inc_loading')
        }
        if (window.innerWidth < 1080){
            setTimeout(function(){
                window.location.href = INC.clientConfig.checkoutLink;
            },100)
        } else {
            setTimeout(function(){
                window.location.href = INC.clientConfig.checkoutLink;
            },100)
        }
    }
    function checkAddedProductInJustAdded(){
        var addCheckCategory = INC.config.pdpaddedProductList;
        var productListArrayprod = INC.dataStore.bundleProductsArray;
        var categoryList = INC.dataStore.methods().getUniqueCatergories();
        for (var catlist in categoryList) {
            var count = 0;
            for (var prd in productListArrayprod) {
                var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: productListArrayprod[prd] });
                if (firstProductObjByMainId["categoryName"] == categoryList[catlist]) {
                    if (addCheckCategory.indexOf(productListArrayprod[prd]) == -1) {
                        count++
                    }
                }
            }
            if (count == 0) {
                var titleel = categoryList[catlist]
                var eltablist = document.querySelectorAll('.inc_recommended_tabs_list_item_block')
                if(eltablist != null){
                    for(var jb=0;jb<eltablist.length;jb++){
                        var titleText = eltablist[jb].getAttribute('title')
                        if(titleText == titleel){
                            if (eltablist[jb] != null) {
                                eltablist[jb].parentNode.removeChild(eltablist[jb])
                            }
                        }
                    }
                }
            }
        }
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;

        if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
            document.querySelector('.inc_recommended_tabs_list_item_block').click()
            if (document.querySelector('.inc_recommended_products_list_block .inc_product_module_block') == null) {
                var remcateg = document.querySelector('.inc_recommended_tabs_list_item_block.inc_active')
                if (remcateg != null) {
                    remcateg.parentNode.removeChild(remcateg)
                }
            }
        }
    }
    function add_to_cart_tracking_multiple(mainProductId) {
        var event_type = "bundle_add_to_cart";
        var core_prod_id = "";
        var productIdsforTracking = []
        core_prod_id = mainProductId;
        var pageType = "100";
        var bundlpos = "";
        var all_data = [];
        for (var tc in INC.config.bundle_tracking) {
            if (INC.config.bundle_tracking.length == 1) {
                productIdsforTracking.push(mainProductId)
                productIdsforTracking.push(INC.config.bundle_tracking[tc].id)
                if (document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="' + INC.config.bundle_tracking[tc].id + '"]') != null) {
                    bundlpos = document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="' + INC.config.bundle_tracking[tc].id + '"]').getAttribute('b-index')
                } else if (document.querySelector('.inc_pdp_block .inc_product_module_block[data-sku="' + INC.config.bundle_tracking[tc].id + '"]') != null) {
                    bundlpos = document.querySelector('.inc_pdp_block .inc_product_module_block[data-sku="' + INC.config.bundle_tracking[tc].id + '"]').getAttribute('b-index')
                }
                all_data.push({
                    id: parseInt(INC.config.bundle_tracking[tc].bid),
                    product_ids: productIdsforTracking,
                    product_id: core_prod_id,
                    "bundle_pos": bundlpos
                })
                productIdsforTracking = []
            } else {
                if (mainProductId != INC.config.bundle_tracking[tc].id) {
                    productIdsforTracking.push(mainProductId)
                    productIdsforTracking.push(INC.config.bundle_tracking[tc].id)
                    if (document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="' + INC.config.bundle_tracking[tc].id + '"]') != null) {
                        bundlpos = document.querySelector('.inc_pdp_block .inc_product_module_block[data-main_id="' + INC.config.bundle_tracking[tc].id + '"]').getAttribute('b-index')
                    } else if (document.querySelector('.inc_pdp_block .inc_product_module_block[data-sku="' + INC.config.bundle_tracking[tc].id + '"]') != null) {
                        bundlpos = document.querySelector('.inc_pdp_block .inc_product_module_block[data-sku="' + INC.config.bundle_tracking[tc].id + '"]').getAttribute('b-index')
                    }
                    all_data.push({
                        id: parseInt(INC.config.bundle_tracking[tc].bid),
                        product_ids: productIdsforTracking,
                        product_id: core_prod_id,
                        "bundle_pos": bundlpos
                    })
                    productIdsforTracking = []
                }
            }
        }
        var bundlec_1 = document.querySelectorAll('.inc_pdp_bundle_product_list_main_block .inc_product_module_block').length
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
                "db": bundlec_1.toString(),
                "mb": "1"
            }))),
            "vid": INC.config.ivid,
            "time": getCurrentFormattedTime(),
            "uri": document.location.href
        };
        makeTrackingApiCall(JSON.stringify(data));


    }
    function makeTrackingApiCall(eventdata) {
        var p_url = 'https://jpoptimizedby.increasingly.co/ImportData';
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function () {
            if (xhr.readyState === 4 && xhr.status === 200) {
                if (xhr.responseText != "" && xhr.responseText != null) {
                    var resul = xhr.responseText;
                    console.log("track" + resul)
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
                if ((INC.config.recommendation == trueflag || INC.config.recommendationProduct.includes(eventDataObj.product_id)) && INC.config.pageType == "pdp") {
                    importEventDataObj["rt"] = "8";   
                    if (INC.config.pageType == "pdp") {
                        if (oosStatus) {
                            importEventDataObj["rpt"] = "1";
                        } else if (INC.config.recommendation == true) {
                            importEventDataObj["rpt"] = "2";
                        } else if (INC.config.recommendationProduct.includes(eventDataObj.product_id)) {
                            importEventDataObj["rpt"] = "4";
                        } else {
                            importEventDataObj["rpt"] = "3";
                        }
                    }
                }
                importEventDataObj["event_type"] = "bundle_product_click_tracking";
                importEventDataObj["page_type"] = pageType;
                // if (rec_type == trueflag && INC.config.pageType == "pdp") {
                //     importEventDataObj["rt"] = "8";
                //     importEventDataObj["rpt"] = "4";
                // }
                importEventDataObj["is_logged"] = "0";
                importEventDataObj["method"] = "track";
                // if (rec_type != true) {
                    if (pageType == "100") {
                        if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block')[0] != undefined) {
                            var bundlec = document.querySelectorAll('.inc_pdp_bundle_product_list_main_block .inc_product_module_block').length
                            importEventDataObj["db"] = bundlec.toString()
                        }
                    }
                // }
                break;
            case "bundleAddToCart":
                importEventDataObj["event_type"] = "bundle_add_to_cart";
                importEventDataObj["page_type"] = pageType;
                importEventDataObj["is_logged"] = "0";
                importEventDataObj["method"] = "track";
                if (pageType == "100") {
                    if (document.querySelectorAll('.inc_pdp_block .inc_product_module_block')[0] != undefined) {
                        var bundlec_ = document.querySelectorAll('.inc_pdp_bundle_product_list_main_block .inc_product_module_block').length
                        var bundleShown = bundlec_.toString()
                        importEventDataObj["db"] = bundleShown
                    }
                }
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
                console.log(xhr.responseText);
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
        console.log(ivid);
        return ivid;
    }

    document.onclick = clickListener;

    function clickListener(e) {
        var clickedElement = e.target;
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
                
                if(clickedElement.classList.contains('quick_view_open') == trueflag){
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
                if (clickedElement.className == 'inc_product_block configurable show_overlay' || clickedElement.className == 'inc_product_block configurable inc_other_noimage show_overlay'){
                    if (clickedElement.parentNode.querySelector('.inc_product_desc_att_block').classList.contains('inc_active')) {
                        clickedElement.parentNode.querySelector('.inc_product_desc_att_block').classList.remove('inc_active')
                        document.querySelector('html').classList.remove('inc_overlay');
                        document.querySelector('.inc_product_block.configurable.show_overlay').classList.remove('show_overlay')
                    }
                }
                if (document.querySelector('.inc_product_modal_block.inc_active') != null) {
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
                        document.querySelector('.inc_product_header_title_block').classList.add('inc_active');
                        document.querySelector('.inc_product_header_title_block_1').classList.remove('inc_active');
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
                    if (clickedElement.className == "inc_promo_popup inc_active") {
                        document.querySelector('html').classList.remove('inc_overlay_promo');
                        clickedElement.classList.remove('inc_active')
                        if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null) {
                            document.querySelector('.inc_sidebar_modal_block.inc_active').classList.remove('overflow_visible')
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
                    if (clickedElement.className != 'inc_product_block configurable inc_other_noimage show_overlay' && clickedElement.className != 'inc_product_desc_att_zero_title_text_block' && clickedElement.className != "inc_product_details_prod_block" && clickedElement.className != "inc_product_variant_simple_block" && clickedElement.className != "inc_product_variant_simple_text config" && clickedElement.className != "inc_product_desc_variant_popup_close_block" && clickedElement.className != "inc_product_desc_add_title_text_block" && clickedElement.tagName != "SELECT" && clickedElement.className != "inc_product_header_block active" && clickedElement.className != "inc_product_desc_att_color_list_item_img_block active" && clickedElement.className != "inc_product_desc_att_block attributes_avail active" && clickedElement.className != "inc_product_qty_block active" && clickedElement.tagName != "LABEL" && clickedElement.tagName != "INPUT" && clickedElement.className != "inc_product_qty_block" && clickedElement.className != "inc_product_desc_att_color_list_item_img_block" && clickedElement.className != "inc_product_header_block" && clickedElement.className != "select_option_inc_title" && clickedElement.className != "inc_product_desc_att_color_list_item_img" && clickedElement.className != "inc_product_desc_att_color_title_text" && clickedElement.className != "inc_product_desc_att_color_list_block" && clickedElement.classList.contains('inc_product_desc_att_block') == falseflag && clickedElement.className != "select_option_inc_block" && clickedElement.className != "inc_product_desc_att_color_title_text_block" && clickedElement.className != "inc_product_desc_att_variant_text" && clickedElement.className != "inc_product_qty_up_btn" && clickedElement.className != "inc_product_qty_down_btn" && clickedElement.className != 'variant_span') {
                        if (clickedElement.classList != undefined) {
                            if (clickedElement.classList.contains('variantoption') == falseflag && clickedElement.classList.contains('inc_product_desc_att_size_list_item_img_block') == falseflag && clickedElement.classList.contains('inc_product_desc_att_color_list_block') == falseflag && clickedElement.className != "inc_product_desc_add_img checked" && clickedElement.classList.contains('inc_product_desc_add_block') == falseflag && clickedElement.classList.contains('inc_pdp_bundle_cart_added_product_edit_img') == falseflag && clickedElement.className != "inc_product_desc_att_color_title_block" && clickedElement.className != "inc_product_desc_qty_up_btn" && clickedElement.className != "inc_product_desc_qty_down_btn" && clickedElement.classList.contains('inc_product_desc_att_color_block') == falseflag && clickedElement.classList.contains('inc_product_desc_att_color_list_item_block') == falseflag && clickedElement.classList.contains('inc_product_desc_att_zero_title_text_selected') == falseflag && clickedElement.classList.contains('inc_product_desc_att_zero_title_text') == falseflag  && clickedElement.classList.contains('inc_product_desc_att_color_list_item_img') != trueflag && clickedElement.className != 'inc_product_desc_att_size_title_text_selected' && clickedElement.className != 'inc_product_desc_att_third_title_text_selected') {
                                if (document.querySelector('.inc_product_desc_att_block') != null){
                                    if (document.querySelector('.inc_product_desc_att_block').classList.contains('moreThanOne') == falseflag){
                                        var allact = document.querySelectorAll('.inc_product_desc_att_block.inc_active')

                                        if (document.querySelector('.inc_product_modal_block.inc_active') == null && document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                                            document.querySelector('html').classList.remove('inc_overlay');
                                            document.querySelector('body').classList.remove('inc_popup_open');
                                        }
                                        for (var actelm in allact) {
                                            if(allact[actelm] != null && Object.prototype.hasOwnProperty.call(allact, actelm)){
                                                allact[actelm].classList.remove('inc_active')
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
                    if(INC.config.pageType == "pdp"){
                        if(clickedElement.parentNode != null){
                            if(clickedElement.className != 'sidebar_outer'){
                                if(clickedElement.parentNode.classList != undefined){
                                    if((clickedElement.classList.contains('tocart') == trueflag && clickedElement.id == "product-addtocart-button") || (clickedElement.parentNode.classList.contains('tocart') == trueflag && clickedElement.parentNode.id == "product-addtocart-button") || (clickedElement.parentNode.classList.contains('tocart-header') == trueflag && clickedElement.parentNode.id == "product-addtocart-button-header") || clickedElement.id == "product-addtocart-button-header"){
                                        if (window.location.href.indexOf('(out+of+stock)') < 0){
                                            var findObj = new INC.classes.FindObj();
                                            var p_ids = INC.methods.getProductIdFromWebPage()
                                            findObj["id"] = INC.dataStore.methods().getFirstProductObjByMainId({ mainId: p_ids }).id;
                                            setTimeout(function(){
                                                if((clickedElement.parentNode.parentNode.querySelector('.tocart.disabled') != null && clickedElement.parentNode.parentNode.querySelector('.tocart').getAttribute('title') == "Added") || clickedElement.parentNode.parentNode.querySelector('.tocart').getAttribute('title') == "追加中..."){
                                                    var elPDP = document.querySelector('.catalog-product-view')
                                                    INC.config.pdpaddedProductList=[]
                                                    INC.config.pdpaddedProductList.push(INC.config.Product_id)
                                                    INC.clientConfig.OOS = []
                                                    INC.clientConfig.OOS_MESG = []
                                                    if (document.querySelector('.inc_sidebar_modal_block .inc_product_module_block') == null) {
                                                        if(document.querySelector('.inc_recommended_tabs_list_item_block') != null){
                                                            document.querySelector('.inc_recommended_tabs_list_item_block').click()
                                                        }
                                                    }
                                                    
                                                    setTimeout(function(){
                                                        INC.methods.addProductToSidebarCart(findObj, null, "client_add_btn",null,elPDP);
                                                        INC.methods.showSidebar("clientBtn");
                                                    },500)
                                                }
                                            },300)
                                        }
                                    } 
                                }
                            }
                        } 
                        /*autoselection*/
                        if(clickedElement.parentNode != null){
                            if(clickedElement.parentNode.classList != undefined){
                                if(clickedElement.classList.contains('swatch-option') == trueflag || clickedElement.classList.contains('image') == trueflag || clickedElement.parentNode.classList.contains('image') == trueflag || clickedElement.classList.contains('product-custom-option')){
                                    var click_textsel = clickedElement.getAttribute('data-option-label')
                                    if(clickedElement.classList.contains('image') == trueflag || clickedElement.parentNode.classList.contains('image') == trueflag){
                                        click_textsel = clickedElement.parentNode.parentNode.innerText;
                                        if(clickedElement.getAttribute('data-option-label') != undefined){
                                            click_textsel = clickedElement.getAttribute('data-option-label')
                                        }
                                    }
                                    if(click_textsel != undefined){
                                        click_textsel = click_textsel.trim().toLocaleLowerCase()
                                    }
                                    autoselect_(click_textsel)
                                } 
                            }
                        } 
                        if(clickedElement.parentNode != null){
                            if(clickedElement.parentNode.parentNode != null){
                                if(clickedElement.parentNode.parentNode.parentNode != null){
                                    
                                    if(clickedElement.parentNode.parentNode.parentNode.id.indexOf('Variation') >= 0 || clickedElement.parentNode.parentNode.id.indexOf('Variation') >= 0 || clickedElement.parentNode.id.indexOf('Variation') >= 0 || clickedElement.id.indexOf('Variation') >= 0){
                                        setTimeout(function(){
                                            if(document.querySelector('.inc_pdp_block') == null){
                                                onloadpdp = false;
                                                onloadpdp_delete = false;
                                                INC.clientConfig.offset = 0;
                                                INC.clientConfig.slidevalue = 0;
                                                INC.dataStore["bundleCartProducts"] = {};
                                                INC.config.pdpaddedProductList = [];
                                                INC.config.bundle_tracking = [];
                                                INC.config.bundle_skuPushed = [];
                                                INC.config.dupBasket = [];
                                                INC.config.pdpaddedProductList= [];
                                                INC.config.sidebarremovedprod= [];
                                                INC.config.pdpaddedProductList = [];
                                                INC.config.catFlag = [];
                                                INC.methods.createPDPBlock()
                                                setTimeout(function() {
                                                    INC.methods.createPDPBlock("sidebar")
                                                }, 200)
                                            }
                                        },2500)
                                    }
                                }
                            }
                        }
                    }
                    if(clickedElement.classList.contains('remove_link') == trueflag && INC.config.pageType == "cartPage"){
                        setTimeout(function(){
                            if(document.querySelector('.cart-item.product') != null){
                                var len = document.querySelectorAll('.product .list_inner .flex_02').length;
                                if (len == 1){
                                    if(document.querySelector('.inc_af_block') != null){
                                        document.querySelector('.inc_af_block').style.display="none"
                                    }
                                }
                            }
                        },2000)
                    }

                    if(clickedElement.parentNode != null){
                        if(clickedElement.parentNode.parentNode != null){
                            if(clickedElement.parentNode.parentNode.parentNode != null){
                                if((clickedElement.classList.contains('item_delete') == trueflag || clickedElement.parentNode.classList.contains('item_delete') == trueflag || clickedElement.parentNode.parentNode.classList.contains('item_delete') == trueflag) && INC.config.pageType == "cartPage"){
                                    setTimeout(function(){
                                        var len = document.querySelectorAll('.product .list_inner .flex_02').length;
                                            if (len == 0){
                                                if(document.querySelector('.inc_af_block') != null){
                                                    document.querySelector('.inc_af_block').style.display="none"
                                                }
                                            }
                                    },2000)
                                }
                            }
                        }
                    }
                }
                setTimeout(function(){
                    var inc_prod_img1 =  document.querySelector('.inc_product_modal_block.inc_active .inc_product_img_main_img img')
                    if(inc_prod_img1){
                        inc_prod_img1.setAttribute('style',INC.config.styleft)
                    }
                },2000)
            } catch (err) {
                // var formData = new FormData();
                // formData.append("EmailId", "shashi@increasingly.com");
                // formData.append("Subject", 'JS Error on Conranshop');
                // formData.append("Message", err + 'Error Stack' + err.stack);
                // var xhr = new XMLHttpRequest();
                // xhr.open("POST", '//api.increasingly.co/SendEmail', trueflag);
                // xhr.send(formData);
                // throw err;
            }
        }
    }
    function autoselect_(textsel){
        setTimeout(function(){
            if (textsel == null){
                if (document.querySelector('select[name="options[33]"]') != null) {
                    var selvar = document.querySelector('select[name="options[33]"]');
                    textsel = selvar.options[selvar.selectedIndex].innerText.trim().toLocaleLowerCase();
                }
            }
            var all_list_el = document.querySelectorAll('.inc_pdp_product-main_block .inc_product_showcase_block')
            for (var alistel in all_list_el) {
                if(all_list_el[alistel] != null && Object.prototype.hasOwnProperty.call(all_list_el, alistel)){
                    if(all_list_el[alistel].querySelector('.inc_product_desc_att_zero_block.inc_active') != null){
                        if(all_list_el[alistel].querySelector('.inc_product_desc_att_zero_block.inc_active .inc_product_desc_att_size_list_item_img_block[datasize="'+textsel+'"] div') != undefined){
                            all_list_el[alistel].querySelector('.inc_product_desc_att_zero_block.inc_active .inc_product_desc_att_size_list_item_img_block[datasize="'+textsel+'"] div').click()
                        }
                        if(all_list_el[alistel].querySelector('.inc_product_desc_att_color_block.inc_active') != null){
                            if(all_list_el[alistel].querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="'+textsel+'"] div') != undefined){
                                all_list_el[alistel].querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="'+textsel+'"]').click()
                            }
                        }
                    }
                    if (textsel != null){
                        if (textsel.indexOf('sel_35') < 0){
                            if(all_list_el[alistel].querySelector('.inc_product_desc_att_size_block.inc_active') != null){
                                textsel =  textsel.replace('sel_34','').trim()
                                if(all_list_el[alistel].querySelector('.inc_product_desc_att_size_block.inc_active .inc_product_desc_att_size_list_item_img_block[datasize="'+textsel+'"] div') != undefined){
                                    all_list_el[alistel].querySelector('.inc_product_desc_att_size_block.inc_active .inc_product_desc_att_size_list_item_img_block[datasize="'+textsel+'"] div').click()
                                }
                                textsel =  textsel + 'sel_34'
                            }
                        }
                        if (textsel.indexOf('sel_34') < 0){
                            if(all_list_el[alistel].querySelector('.inc_product_desc_att_third_block.inc_active') != null){
                                textsel = textsel.replace('sel_35','').trim()
                                if(all_list_el[alistel].querySelector('.inc_product_desc_att_third_block.inc_active .inc_product_desc_att_third_list_item_img_block[datasize="'+textsel+'"] div') != undefined){
                                    all_list_el[alistel].querySelector('.inc_product_desc_att_third_block.inc_active .inc_product_desc_att_third_list_item_img_block[datasize="'+textsel+'"] div').click()
                                }
                            }
                        }
                    }
                    if(all_list_el[alistel].querySelector('.inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[datacolorfabric="'+textsel+'"] div') != null){
                        all_list_el[alistel].querySelector('.inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[datacolorfabric="'+textsel+'"] div').click()
                    }  
                    if(all_list_el[alistel].querySelector('.inc_product_desc_att_color_block.inc_active') != null){
                        if(all_list_el[alistel].querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="'+textsel+'"] div') != undefined){
                            all_list_el[alistel].querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="'+textsel+'"]').click()
                        }
                    }
                }
            }
        },500)
        if(document.querySelector('.product-info-main .product-info-stock-sku .stock.unavailable') != null || document.querySelector('.swatch-attribute-selected-option.unavailable') != null){
            if(document.querySelector('.inc_pdp_block') != null){
                document.querySelector('.inc_pdp_block').style.display = "none"
                if(document.querySelector('.inc_bundle_avail_block') != null){
                    document.querySelector('.inc_bundle_avail_block').setAttribute('style','display: none !important')
                }
            }
        }else {
            if(document.querySelector('.inc_pdp_block') != null){
                document.querySelector('.inc_pdp_block').style.display = "block"

                if(document.querySelector('.inc_bundle_avail_block') != null){
                    document.querySelector('.inc_bundle_avail_block').style.display = "block"
                }
            }
        }
    }
    setTimeout(function () {
        if (window.innerWidth < 821) {
            window.addEventListener("orientationchange", function () {
                if (window.matchMedia("(orientation: portrait)").matches) {
                    console.log("PORTRAIT")
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
                    console.log("LANSCAPE")
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
        if (elm.className == "left_arrow" || elm.className == "left_arrow inc_active" || type_of == "left") {
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

        var otherImg_list=showcase_other_img_list.getAttribute('otherImageList');
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
            showcase_dots[im].classList.remove('inc_active')
            if(modal_dots[im] != undefined){
                modal_dots[im].classList.remove('inc_active')
            }
        }
        var img_src = additional_img[INC.config.inc_slideIndex - 1].replace('160x90','2000x1500');
        if(img_src != "null"){
            showcase_other_img.setAttribute('src',img_src);
            modal_other_img.setAttribute('src',img_src)
            showcase_other_img.setAttribute('onerror',"this.src='"+get_org_img+"'" );
            modal_other_img.setAttribute('onerror',"this.src='"+get_org_img+"'" );
            
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
            if(arrow == "arrow"){
                if(modal_dots.length > 6){
                    var activedots=elm.querySelector('.inc_product_modal_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block.inc_active')
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
    
    function cb_tc(bundle_response) {
        var bundles_tc = bundle_response.Bundles;
        var bundleproductarrayTC = {}
        var pdpProductId = ""
        if (bundle_response.ProductsDetail != null) {
            for (var prdetails in bundle_response.ProductsDetail) {
                bundleproductarrayTC[bundle_response.ProductsDetail[prdetails].ProductId] = bundle_response.ProductsDetail[prdetails]
            }
        } else if (bundle_response.ProductsDetail == null || bundle_response.ProductsDetail == "null") {
            for (var c in bundle_response.CategoryRecommendations) {
                bundleproductarrayTC[bundle_response.CategoryRecommendations[c].ProductId] = bundle_response.CategoryRecommendations[c]
            }
        }
        var bundle_count = bundles_tc.length
        for (var i = 0; i < bundle_count; i++) {
            if (INC.config.dupDataObjectProducts.indexOf(bundles_tc[i].BundleId) == -1) {
                INC.config.dupDataObjectProducts.push(bundles_tc[i].BundleId)
                var irbBundleObj = bundles_tc[i];
                var bundleObj = {};
                bundleObj.id = irbBundleObj["BundleId"];
                if (INC.config.recommendation == falseflag) {
                    // if(irbBundleObj["BundleId"] == "1558695" || irbBundleObj["BundleId"] == "1558769" || irbBundleObj["BundleId"] == "1684296" || irbBundleObj["BundleId"] == "1558847" || irbBundleObj["BundleId"] == "1791859" || irbBundleObj["BundleId"] == "1791844" || irbBundleObj["BundleId"] == "1791867" || irbBundleObj["BundleId"] == "1791846" || irbBundleObj["BundleId"] == "1791892"){
                    //     irbBundleObj["BundleDiscountPercentage"] = 20
                    //     irbBundleObj["BundleLevelDiscountMessage"] = "一緒にご購入で合計価格から20%オフ！（税込）"
                    // } else {
                    //     irbBundleObj["BundleDiscountPercentage"] = 5
                    //     irbBundleObj["BundleLevelDiscountMessage"] = "一緒にご購入で合計価格から5%オフ！（税込）"
                    // }
                    bundleObj.id = irbBundleObj["BundleId"];
                    bundleObj.bundle_percentage = irbBundleObj["BundleDiscountPercentage"];
                    bundleObj.bundle_promo = irbBundleObj["BundleLevelDiscountMessage"];
                    bundleObj.totalRegularPrice = irbBundleObj["TotalPrice"];
                    bundleObj.totalActivePrice = irbBundleObj["TotalSpecialPrice"];
                    bundleObj.totalBundlePrice = irbBundleObj["TotalBundlePrice"];
                    bundleObj.totalBundleDiscountPrice = irbBundleObj["DiscountPrice"];
                    bundleObj.productCount = irbBundleObj["ProductCount"];
                }
                var irbProductsArray = irbBundleObj["ProductIds"]
                if (irbProductsArray.length) {
                    if (INC.dataStore.bundleProductsArray != undefined) {
                        pdpProductId = irbProductsArray[0];
                        INC.dataStore.bundleProductsArray.push(irbProductsArray[1]);
                    }
                }
                
                for (var irbprdarray in irbProductsArray) {
                    if(Object.prototype.hasOwnProperty.call(irbProductsArray, irbprdarray)){
                        var product = bundleproductarrayTC[irbProductsArray[irbprdarray]]
                        if(INC.config.datastoreprod.indexOf(product.ProductId) == -1){
                            INC.config.datastoreprod.push(product.ProductId)
                            var pAttributes = product["Attributes"] || "";
                            var fabricattrc=false;
                            if(pAttributes != null){
                                if(pAttributes[0] != undefined){
                                    if(pAttributes[0].attributeId.split("|")[0] == INC.config.fabrictext){
                                        fabricattrc = true
                                    }
                                }
                            }
                            
                            if(fabricattrc == trueflag){
                                var fabricvariants1=[];
                                var fabricattributes1=[];
                                for (var pm1 in pAttributes) {
                                    if(Object.prototype.hasOwnProperty.call(pAttributes, pm1)){
                                        if(pAttributes[pm1].attributeId.split("|")[0] == INC.config.fabrictext){
                                            var atvalues = pAttributes[pm1].attributeValues;
                                            for (var vS1 in atvalues) {
                                                if(Object.prototype.hasOwnProperty.call(atvalues, vS1)){
                                                    var opttex=atvalues[vS1].optionText
                                                    atvalues[vS1].att_id = pAttributes[pm1].attributeCode;
                                                    atvalues[vS1].att_lebel = pAttributes[pm1].frontEndLabel;
                                                    atvalues[vS1].optionId1 = 0;
                                                    atvalues[vS1].optionText1 = atvalues[vS1].optionText
                                                    atvalues[vS1].optionText = opttex.split('_')[0] + "_" + pAttributes[pm1].frontEndLabel;
                                                    atvalues[vS1].attrLength = pAttributes.length;
                                                    fabricvariants1.push(atvalues[vS1])
                                                }
                                            }
                                        }
                                    }
                                }
                                fabricattributes1.push({
                                    attributeIdAd : 0,
                                    attributeCode: "Color",
                                    attributeId: "0",
                                    attributeValues: fabricvariants1,
                                    frontEndLabel: INC.config.fabrictext
                                })
                                pAttributes = fabricattributes1
                            }else{
                                if (pAttributes != "" && pAttributes != null) {
                                    var checkforat=0
                                    var clrflg = false
                                    for (var patt1 in pAttributes) {
                                        if (pAttributes[patt1].attributeCode == "color" || pAttributes[patt1].attributeCode == "Colour") {
                                            if(pAttributes[patt1].attributeValues[0].optionImageUrl != null || pAttributes[patt1].attributeValues[0].colorCode != null){
                                                clrflg = true
                                                pAttributes[patt1].attributeCode = "Color"
                                            }
                                        }
                                        if (pAttributes[patt1].attributeCode == "size" || pAttributes[patt1].attributeCode == "Base Colour" || pAttributes[patt1].attributeCode == "Base Type") {
                                            pAttributes[patt1].attributeCode = "Size"
                                        }else if (pAttributes[patt1].attributeCode == "Leather") {
                                            pAttributes[patt1].attributeCode = "Size"
                                        }else {
                                            if(clrflg == trueflag){
                                                if(checkforat == 0 && pAttributes[0].attributeCode != "Color"){
                                                    pAttributes[patt1].attributeCode = "Size"
                                                }else{
                                                    if(clrflg != trueflag){
                                                        pAttributes[patt1].attributeCode = "Length"
                                                    }
                                                }
                                            }else if(checkforat == 1){
                                                pAttributes[patt1].attributeCode = "Size_"
                                            }else if(checkforat == 2){
                                                pAttributes[patt1].attributeCode = "Length"
                                            }
                                        }
                                        checkforat++
                                        if(pAttributes.length == 1){
                                            if (pAttributes[patt1].attributeCode == "color" || pAttributes[patt1].attributeCode == "Color" || pAttributes[patt1].attributeCode == "Colour") {
                                                if(pAttributes[patt1].attributeValues[0].optionImageUrl != null || pAttributes[patt1].attributeValues[0].colorCode != null){
                                                    pAttributes[patt1].attributeCode = "Color"
                                                }else{
                                                    pAttributes[patt1].attributeCode = "Size"
                                                }
                                            }else{
                                                pAttributes[patt1].attributeCode = "Size"
                                            }
                                        }
                                    }
                                    pAttributes = attribute_listing(pAttributes)
                                }
                                if (pAttributes.length > 1) {
                                    var fabricattributes = [];
                                    // for (var pm in pAttributes) {
                                    // if (Object.prototype.hasOwnProperty.call(pAttributes, pm)) {
                                    // if (pm != 0) {
                                    var atvalues = pAttributes[1].attributeValues;
                                    var atvaluesfirst = pAttributes[0].attributeValues;
                                    for(var c=0;c<atvaluesfirst.length;c++){
                                        for (var vS in atvalues) {
                                            atvalues = atvalues.sort(dynamicSort('childProductId'))
                                            if (Object.prototype.hasOwnProperty.call(atvalues, vS)) {
                                                if (atvaluesfirst[c].childProductId == atvalues[vS].childProductId) {
                                                    atvaluesfirst[c].optionText = atvaluesfirst[c].optionText + " / " + atvalues[vS].optionText
                                                    atvaluesfirst[c].optionImageUrl = atvalues[vS].optionImageUrl
                                                }
                                            }
                                        }
                                    }
                                    // }
                                    // }
                                    // }
                                    fabricattributes.push({
                                    attributeIdAd: 0,
                                    attributeCode: "Size",
                                    attributeId: "0",
                                    attributeValues: pAttributes[0].attributeValues,
                                    frontEndLabel: "Size"
                                    })
                                    pAttributes = fabricattributes
                                }
                            }
                            var pAttObj = {};
                            var attr_values =""
                            var tcount = 0
                            for (var p2 in pAttributes) {
                                if (pAttributes.length == 1) {
                                    var attcsplit=""
                                    if(pAttributes[0].attributeId != undefined && pAttributes[0].attributeId != 0 && pAttributes[0].attributeId != 1){
                                        attcsplit = pAttributes[0].attributeId.split("|")[0]
                                    }
                                    if ((pAttributes[0].attributeCode == "Color" || pAttributes[0].attributeCode == "color") && attcsplit != INC.config.fabrictext) {
                                        pAttributes[0].attributeIdAd = 0;
                                        attr_values = pAttributes[p2].attributeValues;
                                        for (var v in attr_values) {
                                            attr_values[v].optionId1 = 0;
                                        }
                                    } else if(attcsplit != INC.config.fabrictext){
                                        pAttributes[0].attributeIdAd = 1;
                                        attr_values = pAttributes[p2].attributeValues;
                                        for (var v1 in attr_values) {
                                            attr_values[v1].optionId1 = 1;
                                        }
                                    }
                                } else {
                                    if(pAttributes[0].attributeCode != "Color" && pAttributes[1].attributeCode != "Color" && pAttributes[0].attributeCode != "Colour" && pAttributes[1].attributeCode != "Colour"){
                                        if(tcount == 0){
                                            tcount++
                                        }
                                    }
                                    pAttributes[p2].attributeIdAd = tcount
                                    attr_values = pAttributes[p2].attributeValues;
                                    for (var v2 in attr_values) {
                                        attr_values[v2].optionId1 = tcount;
                                    }
                                }
                                tcount++
                            }

                            if (pAttributes.length) {
                                for (var k in pAttributes) {
                                    var pAttributesObj = pAttributes[k];
                                    var pAttributesValues = pAttributesObj["attributeValues"];
                                    for (var l in pAttributesValues) {
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
                                        childProduct["ProductType"] = product["ProductType"];
                                        childProduct["mainSKU"] = product["ProductSku"];
                                        childProduct["childProductIdmain"] = product["ProductId"];

                                        childProduct["childProductImageUrlMain"] = product["ImageURL"];
                                        childProduct["childProductPriceMain"] = product["Price"];
                                        childProduct["childProductSpecialPriceMain"] = product["SpecialPrice"];
                                        childProduct["childProductNameMain"] = product["ProductName"];
                                        childProduct["PromotionalMessage"] = product["PromotionalMessage"];
                                        childProduct["childProductUrlMain"] = product["ProductUrl"];
                                        childProduct["Field1"] = product["Field1"];
                                        childProduct["Manufacturer"] = product["Manufacturer"];
                                        childProduct["childreviewsCount"] = product["RatingCount"];
                                        childProduct["childRating"] = product["Rating"];
                                        childProduct["childCategoryName"] = product["CategoryName"];
                                        childProduct["childCategoryId"] = product["CategoryId"];
                                        childProduct["childProductDescription"] = product["Description"];
                                        
                                    
                                        var productObj = new INC.classes.ProductAttObj(childProduct);
                                        productObj["bundledProductId"] = pdpProductId;
                                        productObj.mainId = product["ProductId"];
                                        productObj.bundleId = bundleObj.id;
                                        productObj.sku = productObj.id;
                                        
                                        productObj.option[pAttributesObj["attributeIdAd"]].id = pAttributesObj["attributeId"];
                                        productObj.option[pAttributesObj["attributeIdAd"]].label = pAttributesObj["frontEndLabel"];
                                        productObj.option[pAttributesObj["attributeIdAd"]].code = pAttributesObj["attributeCode"];
                                        productObj.option[pAttributesObj["attributeIdAd"]].att_id = pAttributesObj.attributeId
                                        if (!Object.prototype.hasOwnProperty.call(INC.dataStore.dataStoreObj, product['ProductId'])) {
                                            INC.dataStore.dataStoreObj[product['ProductId']] = {};
                                        }
                                        
                                        if (!Object.prototype.hasOwnProperty.call(INC.dataStore.dataStoreObj[product['ProductId']],productObj['id'])) {
                                            INC.dataStore.dataStoreObj[product['ProductId']][productObj['id']] = {}
                                        }
                                        pAttObj = INC.dataStore.dataStoreObj[product['ProductId']][productObj['id']];
                                        for (var pAttcb in productObj) {
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
                                var productObjS = new INC.classes.ProductObj(product);
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
            }
        }
        setTimeout(function () {
            INC.methods.createPDPBlock("sidebar")
        }, 200)
    }
    function attribute_listing(valueArray) {
        
        var items = valueArray
        var sorting = ["Colour","Color","Color_size", "Size","Leather","Castors","Size_","Length",'Castors_Size','Leather_Size'];
        var result = []
        sorting.forEach(function (key) {
            var found = false;
            items = items.filter(function (item) {
                if (!found && item.attributeCode == key) {
                    result.push(item);
                    found = true;
                    return false;
                } else{
                    return true;
                }
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
        console.log('Third Party Tracking')
        var url = 'https://www.e-hapi.com/shop/cart/cart.aspx?affiliate=bundle'
        var xhr2 = new XMLHttpRequest();
        xhr2.open('GET', url, true);
        xhr2.onload = function() {}
        xhr2.setRequestHeader('accept', '*/*');
        xhr2.onreadystatechange = function() {
            if (this.readyState === XMLHttpRequest.DONE && this.status === 200) {
            }
        }
        xhr2.send();
        /*-------------------Tracking with Image Pixel---------------------------*/
        // if(url == 'https://www.e-hapi.com/shop/cart/cart.aspx?affiliate=bundle'){
                // var oImg = document.createElement("img");
                // oImg.setAttribute('id', 'cstracking')
                // oImg.setAttribute('src', url);
                // oImg.setAttribute('height', '1px');
                // oImg.setAttribute('width', '1px');
                // oImg.setAttribute('style', 'display:none')
                // document.body.appendChild(oImg);
        // }
        /* -----------------------------------------------------------------------*/
    }
    function inc_isOnScreen_page(elem) {
        var isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
        if (isIOS) {
            if (document.querySelector(".inc_pdp_block") != null) {
                var el = document.querySelector(".inc_pdp_block")
            } else if (document.querySelector(".inc_af_block") != null && INC.config.pageType == "pdp") {
                var el = document.querySelector(".inc_af_block");
            }
            if (el != null) {
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
            if (elem.length == 0) {
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
    var is_visible_elem_counter = 0;
    if (window.innerWidth < 980) {
        var scrollableElement = document.body;
        scrollableElement.addEventListener('wheel', checkScrollDirection);
        document.addEventListener("touchmove", checkScrollDirection, false);
        function checkScrollDirection(event) {
            if (document.querySelector(".inc_pdp_block") != null) {
                var inc_div = document.querySelector(".inc_pdp_block");
                if (inc_isOnScreen_page(jQuery('.inc_pdp_block')) && is_visible_elem_counter < 1) {
                    var data = {
                        "eventData": String(btoa(JSON.stringify({ "event_data": { "product_id": INC.config.Product_id }, "event_type": "catalog_product_view", "page_type": "catalog_product_view", "method": "track", "platform": "", "token": INC.config.clientToken }))),
                        "vid": readCookie('ivid'),
                        "time": getCurrentFormattedTime(),
                        "uri": document.location.href
                    };
                    makeTrackingApiCall(JSON.stringify(data));
                    is_visible_elem_counter++;
                }
            } else if (document.querySelector(".inc_af_block") != null && INC.config.pageType == "pdp") {
                var inc_div = document.querySelector(".inc_af_block");
                if (inc_isOnScreen_page(jQuery('.inc_af_block')) && is_visible_elem_counter < 1) {
                    var data = {
                        "eventData": String(btoa(JSON.stringify({ "event_data": { "product_id": INC.config.Product_id }, "event_type": "catalog_product_view", "page_type": "catalog_product_view", "method": "track", "platform": "", "token": INC.config.clientToken }))),
                        "vid": readCookie('ivid'),
                        "time": getCurrentFormattedTime(),
                        "uri": document.location.href
                    };
                    makeTrackingApiCall(JSON.stringify(data));
                    is_visible_elem_counter++;
                }
            }

        }
    } else {
        window.onscroll = function () { execute_import_tracking(); };
    }
    function execute_import_tracking() {
        if (document.querySelector(".inc_pdp_block") != null || document.querySelector(".inc_pdp_block") != undefined) {
            var el = document.querySelector(".inc_pdp_block");
            var a = element_in_viewport(el);
        } else if (document.querySelector(".inc_af_block") != null && INC.config.pageType == "pdp") {
            var el = document.querySelector(".inc_af_block");
            var a = element_in_viewport(el);
        }
        if (a == true && is_visible_elem_counter < 1) {
            var data = {
                "eventData": String(btoa(JSON.stringify({ "event_data": { "product_id": INC.config.Product_id }, "event_type": "catalog_product_view", "page_type": "catalog_product_view", "method": "track", "platform": "", "token": INC.config.clientToken }))),
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
    function get_discount_price(p_original_price, p_sale_price) {
        return parseFloat(+p_original_price - +p_sale_price)
    }
    function get_discount_price_percentage(p_original_price, p_sale_price) {
        return Math.round(((p_original_price - p_sale_price) / p_original_price) * 100);
    }
    setTimeout(function(){
        if (document.querySelector('.inc_pdp_block') != null){
            if (document.querySelector('.inc_pdp_product-main_block .inc_product_module_block').classList.contains('simple') && document.querySelector('.inc_pdp_bundle_product_list_main_block .inc_product_module_block').classList.contains('simple')){
                document.querySelector('.inc_pdp_block').classList.add('bothSimple');
            }
        }
    },2500)
    function oosproduct(prdid) {
        // var format_json_data;
        // var product_id = prdid;
        // var qty = 0
        // format_json_data = JSON.stringify({
        //     "token": INC.config.clientToken,
        //     "product_id": product_id,
        //     "quantity": qty,
        // });

        // if (product_id != null) {
        //     var data = {
        //         "eventData": Base64.encode(format_json_data)
        //     };
        //     var p_url = 'https://gather.increasingly.com/ProductInventoryUpdate';
        //     var xhr = new XMLHttpRequest();
        //     xhr.open("POST", p_url, true);
        //     xhr.onreadystatechange = function () {
        //         if (xhr.readyState == XMLHttpRequest.DONE) {
        //             if (xhr.status == 200) { // console.log(xhr.responseText)
        //             }
        //         }
        //     };
        //     xhr.setRequestHeader('Content-Type', 'application/json');
        //     xhr.send(JSON.stringify(data));
        // }
    }
})();