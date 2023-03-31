(function() {
    "use strict";
    var pdp_html = '<div class="inc_pdp_title_block"><div class="inc_pdp_title_text_block"><div class="inc_pdp_title_text">Frequently Bought Together</div></div></div><div class="inc_pdp_bundle_block"><div class="inc_pdp_product-main_block"><div class="mainprodtitletext">This Item</div></div><div class="inc_pdp_icon-add_block"><div class="inc_pdp_icon-add_img_block"><div class="inc_pdp_icon-add_img"></div></div></div><div class="inc_pdp_bundle_product_block"><div class="inc_pdp_bundle_product_header_block"><div class="inc_pdp_bundle_product_header_text"></div></div><div class="inc_pdp_bundle_product_left-btn_block"><div class="inc_pdp_bundle_product_left-btn_img_block"><div class="inc_pdp_bundle_product_left-btn_img" title="Scroll left"></div></div></div><div class="inc_pdp_bundle_product_list_block"><div class="inc_pdp_bundle_product_list_main_block"></div><div class="inc_pdp_bundle_product_list_left_block"><div class="inc_pdp_bundle_product_list_left_btn_block"><div class="inc_pdp_bundle_product_list_left_btn_img_block"><div class="inc_pdp_bundle_product_list_left_btn_img"></div></div></div></div><div class="inc_pdp_bundle_product_list_items_show_more_less_block"><div class="inc_pdp_bundle_product_list_items_show_more_less_text down_wrrow">Show more products</div></div><div class="inc_pdp_bundle_product_list_wrapper_items_block"><div class="inc_pdp_bundle_product_list_wrapper_header_block"><div class="inc_pdp_bundle_product_list_wrapper_header_text_block"></div><div class="inc_pdp_bundle_product_list_wrapper_header_close_block"></div></div><div class="inc_pdp_bundle_product_list_items_block"></div></div><div class="inc_pdp_bundle_product_list_right_block"><div class="inc_pdp_bundle_product_list_right_btn_block"><div class="inc_pdp_bundle_product_list_right_btn_img_block"><div class="inc_pdp_bundle_product_list_right_btn_img"></div></div></div></div></div><div class="inc_pdp_bundle_product_right-btn_block"><div class="inc_pdp_bundle_product_right-btn_img_block"><div class="inc_pdp_bundle_product_right-btn_img" title="Scroll right"></div></div></div></div><div class="inc_pdp_bundle_cart_overlay_block"></div><div class="inc_pdp_bundle_cart_block"><div class="inc_pdp_bundle_cart_title_block"><div class="inc_pdp_bundle_cart_title_text_block"><div class="inc_pdp_bundle_cart_title_text">Price Summary</div></div></div><div class="inc_pdp_bundle-cart_ecirp_block"><div class="inc_pdp_bundle-cart_ecirp_main"><div class="inc_pdp_bundle-cart_ecirp_main_title_block"><div class="inc_pdp_bundle-cart_ecirp_main_title_text_block"><div class="inc_pdp_bundle-cart_ecirp_main_title_text">Main Product Price </div></div></div><div class="inc_pdp_bundle-cart_ecirp_main_figure_block"><div class="inc_pdp_bundle-cart_ecirp_main_figure_text_block"><div class="inc_pdp_bundle-cart_ecirp_main_figure_text">£00.00</div></div></div></div><div class="inc_pdp_bundle-cart_ecirp_addon_block"><div class="inc_pdp_bundle-cart_ecirp_addon_title_block"><div class="inc_pdp_bundle-cart_ecirp_addon_title_text_block"><div class="inc_pdp_bundle-cart_ecirp_addon_title_text">Add-on(s) Selected </div></div></div><div class="inc_pdp_bundle-cart_ecirp_addon_figure_block"><div class="inc_pdp_bundle-cart_ecirp_addon_figure_text_block"><div class="inc_pdp_bundle-cart_ecirp_addon_figure_text">£0.00</div></div></div></div></div><div class="inc_pdp_bundle_cart_added_block"></div><div class="inc_pdp_bundle_cart_summary_block"><div class="inc_pdp_bundle_cart_summary_title_block"><div class="inc_pdp_bundle_cart_summary_title_text_block"><div class="inc_pdp_bundle_cart_summary_title_text"></div></div></div><div class="inc_pdp_bundle_cart_summary_ecirp_block"><div class="inc_pdp_bundle_cart_summary_ecirp_active_block"><div class="inc_pdp_bundle_cart_summary_ecirp_active_text_block"><div class="inc_pdp_bundle_cart_summary_ecirp_active_text">£60.00</div><div class="inc_pdp_bundle_cart_summary_ecirp_active_text_msg">inc VAT</div></div></div><div class="inc_pdp_bundle_cart_summary_ecirp_regular_block"><div class="inc_pdp_bundle_cart_summary_ecirp_regular_text_block"><div class="inc_pdp_bundle_cart_summary_ecirp_regular_text"></div><div class="inc_pdp_bundle_cart_summary_ecirp_regular_text_msg">inc VAT</div></div></div></div><div class="inc_pdp_bundle_cart_summary_ecirp_save_block"><div class="inc_pdp_bundle_cart_summary_ecirp_save_text"></div></div><div class="inc_pdp_bundle_cart_summary_view_block"><div class="inc_pdp_bundle_cart_summary_view_btn_block"><div class="inc_pdp_bundle_cart_summary_view_btn_img_block"><div class="inc_pdp_bundle_cart_summary_view_btn_img"></div></div><div class="inc_pdp_bundle_cart_summary_view_btn_text_block"><div class="inc_pdp_bundle_cart_summary_view_btn_text">Added items</div></div><div class="inc_pdp_bundle_cart_summary_view_btn_count_block"><div class="inc_pdp_bundle_cart_summary_view_btn_count"></div></div></div></div><div class="inc_pdp_bundle_cart_summary_add_block"><div class="inc_pdp_bundle_cart_summary_add_btn_block"><div class="inc_pdp_bundle_cart_summary_add_btn_text_block"><div class="inc_pdp_bundle_cart_summary_add_btn_text">Deliver</div><div class="inc_pdp_bundle_cart_summary_add_btn_span"></div></div><div class="inc_pdp_bundle_cart_summary_add_btn_img_block"><div class="inc_pdp_bundle_cart_summary_add_btn_img"></div></div></div><div class="inc_pdp_bundle_cart_summary_add_btn_collection_block" style="pointer-events: auto;opacity: 1;"><div class="inc_pdp_bundle_cart_summary_add_btn_collection_text_block"><div class="inc_pdp_bundle_cart_summary_add_btn_collection_text" style="text-transform: none;">Collect</div></div></div></div></div></div></div>';
    var sidebar_html = '<div class="inc_sidebar_modal_block"> <div class="inc_sidebar_modal_cart_and_title_block"> <div class="inc_header_title_block"> <div class="inc_header_title_text_block"> <div class="inc_header_title_text">Just added to your basket</div></div><span class="close_sisebar_icon"></span> </div></div><div class="inc_sidebar_parent_block"> <div class="inc_sidebar_cart_added_block"> <div class="inc_cart_added_list_block"></div><div class="inc_cart_product_count_block"></div></div><div class="inc_sidebar_header_parent_block"> <div class="inc_sidebar_header_block"> <div class="inc_header_continue_block"> <div class="inc_header_continue_img_block"> <div class="inc_header_continue_img"></div></div><div class="inc_header_continue_text_block"> <div class="inc_header_continue_text">Back</div></div></div><div class="inc_header_item_block"> <div class="inc_header_item_count_block"> <div class="inc_header_item_count_title_block"> <div class="inc_header_item_count_title_text_block"> <div class="inc_header_item_count_title_text">Subtotal</div></div></div><div class="inc_header_item_count_figure_block"> <div class="inc_header_item_count_figure_text_block"> <div class="inc_header_item_count_figure_text"></div></div></div><div class="inc_cart_added_product_desc_subtotal_ecirp_block"> <div class="inc_cart_added_product_desc_subtotal_ecirp_active_block"> <div class="inc_cart_added_product_desc_subtotal_ecirp_active_text_block"> <div class="inc_cart_added_product_desc_subtotal_ecirp_active_text" subtotalactiveprice="0.00">£0.00</div><div class="inc_cart_added_product_desc_ecirp_active_text_msg">inc VAT</div></div></div><div class="inc_cart_added_product_desc_subtotal_ecirp_regular_block"> <div class="inc_cart_added_product_desc_subtotal_ecirp_regular_text_block"> <div class="inc_cart_added_product_desc_subtotal_ecirp_regular_text" subtotalregularprice="0.00"></div></div></div></div></div></div></div><div class="inc_sidebar_checkout_block"> <div class="inc_checkout_continue_block"> <div class="inc_checkout_continue_btn_block"> <div class="inc_checkout_continue_btn_img_block"> <div class="inc_checkout_continue_btn_img"></div></div><div class="inc_checkout_continue_btn_text_block"> <div class="inc_checkout_continue_btn_text">Continue Shopping</div><div class="inc_checkout_continue_btn_span"></div></div></div></div><div class="inc_checkout_basket_block"> <div class="inc_checkout_basket_btn_block"> <div class="inc_checkout_basket_btn_img_block"> <div class="inc_checkout_basket_btn_img"></div></div><div class="inc_checkout_basket_btn_text_block"> <div class="inc_checkout_basket_btn_span"></div><div class="inc_checkout_basket_btn_text"><a class="view_basket_checkout"> <div draggable="false">View Cart</div></a></div></div></div></div></div></div></div><div class="inc_sidebar_recommended_block"> <div class="inc_recommended_title_block"> <div class="inc_recommended_title_text_block"> <div class="inc_recommended_title_text">Customers also bought</div></div></div><div class="inc_recommended_tabs_block"> <div class="inc_recommended_tabs_list_block inc_categ_4" tabindex="0"></div></div><div class="inc_recommended_products_block"> <div class="inc_recommended_products_left_block"> <div class="inc_recommended_products_left_btn_block"> <div class="inc_recommended_products_left_btn_img_block"> <div class="inc_recommended_products_left_btn_img" title="Scroll left"></div></div></div></div><div class="inc_recommended_products_list_main_block"> <div class="inc_recommended_products_list_block"></div></div><div class="inc_recommended_products_item_thumb_block"> <div class="inc_recommended_products_list_item_thumb_block"></div></div><div class="inc_recommended_products_right_block"> <div class="inc_recommeded_products_right_btn_block"> <div class="inc_recommended_products_right_btn_img_block"> <div class="inc_recommended_products_right_btn_img" title="Scroll right"></div></div></div></div></div></div></div>';

    var cart_html = '<div class="inc_af_title_block" style="clear: both;"><div class="inc_af_title_text_block"><div class="inc_af_title_text">Customers also bought</div><div class="inc_af_modal_close"></div></div></div><div class="inc_af_bundles_block"><div class="inc_af_left_block"><div class="inc_af_left_btn_block"><div class="inc_af_left_btn_img_block"><div class="inc_af_left_btn_img"></div></div></div></div><div class="inc_af_product-list-main_block"><div class="inc_af_product-list_block"></div></div><div class="inc_af_right_block"><div class="inc_af_right_btn_block"><div class="inc_af_right_btn_img_block"><div class="inc_af_right_btn_img"></div></div></div></div></div>'
    var showcase_productcard = '<div class="inc_product_block"><div class="inc_product_extension_block"></div><div class="inc_product_header_main_block"><div class="inc_product_header_main_title_block"></div><div class="inc_product_header_main_rating_block"></div><div class="inc_product_header_block"><div class="inc_product_header_title_block"><div class="inc_product_header_title_text_block"><div class="inc_product_header_title_text"></div></div></div></div><div class="inc_product_Description_header_block"><div class="inc_product_Description_header_title_block"><div class="inc_product_Description_header_title_text_block"><div class="inc_product_Description_header_title_text"></div></div></div></div><div class="inc_product_header_img_block"><div class="inc_product_header_img"></div></div></div><div class="inc_product_info_main_block"><div class="inc_product_img_block"><div class="inc_product_img_main_block"><div class="inc_product_img_main_img"></div></div><div class="inc_product_img_gallery_block"><div class="inc_product_img_gallery_left_block"><div class="inc_product_img_gallery_left_btn_block"><div class="inc_product_img_gallery_left_btn_img_block"><div class="inc_product_img_gallery_left_btn_img"></div></div><div class="inc_product_img_gallery_left_btn_text_block"><div class="inc_product_img_gallery_left_btn_text"></div></div></div></div><div class="inc_product_img_gallery_list_block"></div><div class="inc_product_img_gallery_right_block"><div class="inc_product_img_gallery_right_btn_block"><div class="inc_product_img_gallery_right_btn_img_block"><div class="inc_product_img_gallery_right_btn_img"></div></div><div class="inc_product_img_gallery_right_btn_text_block"><div class="inc_product_img_gallery_right_btn_text"></div></div></div></div></div></div><div class="inc_product_desc_block"><div class="inc_product_desc_title_block"><div class="inc_product_desc_title_text_block"><div class="inc_product_desc_title_text"></div></div></div><div class="pc_promo_div empty"></div><div class="inc_product_desc_ecirp_block"><div class="inc_product_ecirp_label_block">SALE</div><div class="inc_product_desc_ecirp_active_block"><div class="inc_product_desc_ecirp_active_text_block"><div class="inc_product_desc_ecirp_active_text">£0.00 - -£0.00</div><div class="inc_product_desc_ecirp_active_text_msg">inc VAT</div></div></div><div class="inc_product_desc_ecirp_regular_block"><div class="inc_product_desc_ecirp_regular_text_block"><div class="inc_product_desc_ecirp_regular_text"></div></div></div><div class="inc_product_desc_ecirp_worth_block"><div class="inc_product_desc_ecirp_worth_text_block"><div class="inc_product_desc_ecirp_worth_text"></div><div class="inc_product_desc_ecirp_worth_text_msg"></div></div></div></div><div class="inc_product_desc_ratings_block"></div><div class="inc_variant_error_text"></div><div class="inc_product_desc_att_details_block"><div class="inc_product_variant_simple_block"><div class="inc_product_variant_simple_text">Deliver</div></div><div class="inc_product_desc_att_block"><div class="inc_product_desc_variant_popup_close_block"></div><div class="inc_product_desc_add_err_text_block"></div><div class="inc_product_desc_add_title_text_block"></div><div class="inc_product_desc_att_zero_block"><div class="inc_product_desc_att_zero_title_block"><div class="inc_product_desc_att_zero_title_text_block"><div class="inc_product_desc_att_zero_title_text"></div><div class="inc_product_desc_att_zero_title_text_selected"></div></div></div><div class="inc_product_desc_att_zero_list_block"></div></div><div class="inc_product_desc_att_size_block"><div class="inc_product_desc_att_size_title_block"><div class="inc_product_desc_att_size_title_text_block"><div class="inc_product_desc_att_size_title_text"></div><div class="inc_product_desc_att_size_title_text_selected"></div></div></div><div class="inc_product_desc_att_size_list_block"></div></div><div class="inc_product_desc_att_color_block"><div class="inc_product_desc_att_color_title_block"><div class="inc_product_desc_att_color_title_text_block"><div class="inc_product_desc_att_color_title_text"></div><div class="inc_product_desc_att_color_title_text_selected"></div></div></div><div class="inc_product_desc_att_color_list_block"></div></div><div class="inc_product_desc_att_third_block"><div class="inc_product_desc_att_third_title_block"><div class="inc_product_desc_att_third_title_text_block"><div class="inc_product_desc_att_third_title_text"></div><div class="inc_product_desc_att_third_title_text_selected"></div></div></div><div class="inc_product_desc_att_third_list_block"></div></div><div class="inc_product_desc_att_fourth_block"><div class="inc_product_desc_att_fourth_title_block"><div class="inc_product_desc_att_fourth_title_text_block"><div class="inc_product_desc_att_fourth_title_text"></div><div class="inc_product_desc_att_fourth_title_text_selected"></div></div></div><div class="inc_product_desc_att_fourth_list_block"><div class="inc_product_desc_att_fourth_list_item_block"><div class="inc_product_desc_att_fourth_list_item_img_block"><div class="inc_product_desc_att_fourth_list_item_img"></div></div><div class="inc_product_desc_att_fourth_list_item_text_block"><div class="inc_product_desc_att_fourth_list_item_text"></div></div></div></div></div><div class="inc_product_desc_att_edit_block"><div class="inc_product_desc_att_edit_text"></div></div><div class="inc_product_desc_att_variant_add_block"><div class="inc_product_desc_att_variant_text"></div></div></div><div class="inc_product_details_prod_block"><div class="inc_product_details_prod_text"></div></div></div><div class="inc_product_desc_qty_add_btn_block "><label>qty</label><div class="inc_product_qty_block singleqty"><div class="inc_product_qty_down_block"><div class="inc_product_qty_down_btn_block"><div class="inc_product_qty_down_btn"></div></div></div><div class="inc_product_qty_input_block"><div class="inc_product_qty_input_text_block"><div class="inc_product_qty_input_text"><span class="inc_add_text"></span></div></div></div><div class="inc_product_qty_up_block"><div class="inc_product_qty_up_btn_block"><div class="inc_product_qty_up_btn"></div></div></div></div><div class="inc_product_add_block"><div class="inc_product_add_text_block"><div class="inc_product_add_text">Add To Cart</div></div></div><div class="inc_product_add_collection_block"><div class="inc_product_add_collection_text_block"><div class="inc_product_add_collection_text">Collect</div></div></div><div class="inc_product_desc_add_block"><div class="inc_product_desc_add_img_block"><div class="inc_product_desc_add_img"></div></div><div class="inc_product_desc_add_text_block"><div class="inc_product_desc_add_text">Add To Cart</div><div class="inc_product_desc_add_span"></div></div></div><div class="inc_product_bstxt_block"></div></div></div><div class="inc_product_bstxt_block"></div></div><div class="inc_product_description_main_block"></div></div>'

    var modal_productcard = '<div class="inc_product_block "><div class="inc_product_extension_block"></div><div class="inc_product_header_main_block"><div class="inc_product_header_main_title_block"></div><div class="inc_product_header_main_rating_block"><div class="inc_product_desc_ratings_block"></div><span class="product_modal_sku">#</span></div><div class="inc_product_header_block"><div class="inc_product_header_title_block"><div class="inc_product_header_title_text_block"><div class="inc_product_header_title_text">Overview</div></div></div><div class="inc_product_header_title_block_1"><div class="inc_product_header_title_text_block_1"><div class="inc_product_header_title_text_1">Product Details</div></div></div><div class="inc_product_header_new_page"><a class="inc_product_header_new_page_text" href="">Open In A New Tab</a></div></div><div class="inc_product_Description_header_block"><div class="inc_product_Description_header_title_block"><div class="inc_product_Description_header_title_text_block"><div class="inc_product_Description_header_title_text"></div></div></div></div><div class="inc_product_header_img_block"><div class="inc_product_header_img"></div></div></div><div class="inc_product_info_main_block"><div class="inc_product_img_block"><div class="inc_product_img_main_block"><div class="inc_product_img_main_img"></div></div><div class="inc_product_img_gallery_block"><div class="inc_product_img_gallery_left_block" title="Scroll left"><div class="inc_product_img_gallery_left_btn_block"><div class="inc_product_img_gallery_left_btn_img_block"><div class="inc_product_img_gallery_left_btn_img"></div></div><div class="inc_product_img_gallery_left_btn_text_block"><div class="inc_product_img_gallery_left_btn_text"></div></div></div></div><div class="inc_product_img_gallery_list_block"></div><div class="inc_product_img_gallery_right_block" title="Scroll right"><div class="inc_product_img_gallery_right_btn_block"><div class="inc_product_img_gallery_right_btn_img_block"><div class="inc_product_img_gallery_right_btn_img"></div></div><div class="inc_product_img_gallery_right_btn_text_block"><div class="inc_product_img_gallery_right_btn_text"></div></div></div></div></div></div><div class="inc_product_desc_block"><div class="inc_product_desc_title_block"><div class="inc_product_desc_title_text_block"><div class="inc_product_desc_title_text"></div></div></div><div class="inc_product_desc_ecirp_block"><div class="inc_product_ecirp_label_block">SALE</div><div class="inc_product_desc_ecirp_active_block"><div class="inc_product_desc_ecirp_active_text_block"><div class="inc_product_desc_ecirp_active_text">£0.00 - -£0.00</div><div class="inc_product_desc_ecirp_active_text_msg">inc VAT</div></div></div><div class="inc_product_desc_ecirp_regular_block"><div class="inc_product_desc_ecirp_regular_text_block"><div class="inc_product_desc_ecirp_regular_text"></div></div></div><div class="inc_product_desc_ecirp_worth_block"><div class="inc_product_desc_ecirp_worth_text_block"><div class="inc_product_desc_ecirp_worth_text"></div><div class="inc_product_desc_ecirp_worth_text_msg"></div></div></div></div><div class="inc_product_desc_ratings_block"></div><div class="inc_product_desc_att_details_block"><div class="inc_product_variant_simple_block"><div class="inc_product_variant_simple_text"></div></div><div class="pc_promo_div empty"></div><div class="inc_product_desc_att_block"><div class="inc_product_desc_variant_popup_close_block"></div><div class="inc_product_desc_add_err_text_block"></div><div class="inc_product_desc_add_title_text_block"></div><div class="inc_product_desc_att_zero_block"><div class="inc_product_desc_att_zero_title_block"><div class="inc_product_desc_att_zero_title_text_block"><div class="inc_product_desc_att_zero_title_text"></div><div class="inc_product_desc_att_zero_title_text_selected"></div></div></div><div class="inc_product_desc_att_zero_list_block"></div></div><div class="inc_product_desc_att_size_block"><div class="inc_product_desc_att_size_title_block"><div class="inc_product_desc_att_size_title_text_block"><div class="inc_product_desc_att_size_title_text"></div><div class="inc_product_desc_att_size_title_text_selected"></div></div></div><div class="inc_product_desc_att_size_list_block"></div></div><div class="inc_product_desc_att_color_block"><div class="inc_product_desc_att_color_title_block"><div class="inc_product_desc_att_color_title_text_block"><div class="inc_product_desc_att_color_title_text"></div><div class="inc_product_desc_att_color_title_text_selected"></div></div></div><div class="inc_product_desc_att_color_list_block"></div></div><div class="inc_product_desc_att_third_block"><div class="inc_product_desc_att_third_title_block"><div class="inc_product_desc_att_third_title_text_block"><div class="inc_product_desc_att_third_title_text"></div><div class="inc_product_desc_att_third_title_text_selected"></div></div></div><div class="inc_product_desc_att_third_list_block"></div></div><div class="inc_product_desc_att_fourth_block"><div class="inc_product_desc_att_fourth_title_block"><div class="inc_product_desc_att_fourth_title_text_block"><div class="inc_product_desc_att_fourth_title_text"></div><div class="inc_product_desc_att_fourth_title_text_selected"></div></div></div><div class="inc_product_desc_att_fourth_list_block"><div class="inc_product_desc_att_fourth_list_item_block"><div class="inc_product_desc_att_fourth_list_item_img_block"><div class="inc_product_desc_att_fourth_list_item_img"></div></div><div class="inc_product_desc_att_fourth_list_item_text_block"><div class="inc_product_desc_att_fourth_list_item_text"></div></div></div></div></div><div class="inc_product_desc_att_edit_block"><div class="inc_product_desc_att_edit_text"></div></div><div class="inc_product_desc_att_variant_add_block"><div class="inc_product_desc_att_variant_text"></div></div></div><div class="inc_product_details_prod_block"><div class="inc_product_details_prod_text"></div></div></div><div class="inc_product_desc_qty_add_btn_block"><div class="inc_product_qty_block singleqty"><div class="inc_product_qty_down_block"><div class="inc_product_qty_down_btn_block"><div class="inc_product_qty_down_btn"></div></div></div><div class="inc_product_qty_input_block"><div class="inc_product_qty_input_text_block"><div class="inc_product_qty_input_text"></div></div></div><div class="inc_product_qty_up_block"><div class="inc_product_qty_up_btn_block"><div class="inc_product_qty_up_btn"></div></div></div></div><div class="inc_product_add_block"><div class="inc_product_add_text_block"><div class="inc_product_add_text"></div></div></div><div class="inc_product_add_collection_block"><div class="inc_product_add_collection_text_block"><div class="inc_product_add_collection_text">Collect</div></div></div><div class="inc_product_desc_add_block"><div class="inc_product_desc_add_img_block"><div class="inc_product_desc_add_img"></div></div><div class="inc_product_desc_add_text_block"><div class="inc_product_desc_add_text">Add To Cart</div><div class="inc_product_desc_add_span"></div></div></div><div class="inc_product_bstxt_block"></div></div></div><div class="inc_product_bstxt_block"></div></div><div class="inc_product_description_main_block"></div></div>';

    var sidebar_configurator_id = [];

    

    let INC = {};
    var init_flag = true
    INC.ENV = "prod";
    INC.debug = 0;
    INC.initStatus = "";
    INC.initStatusCP = "";
    var onloadpdp = false;
    var onloadpdp_delete = false;
    var incallowedKeys = [46, 8, 9, 27, 110, 190];
    var inc_scroll_height = 100
    var addedProductIndex=[]
    INC.clientConfig = {};
    INC.clientConfig.statusVAT = "";
    INC.clientConfig.offset = 0;
    INC.clientConfig.slidevalue = 0;
    INC.config = {};
    INC.config.deviceType = "";
    INC.config.clientToken = "bDS7f1r";
    INC.config.trackingURL = "https://optimizedby.increasingly.co/ImportData";
    INC.config.addToBasketURL = "https://www.bradfords.co.uk/checkout/cart/add/uenc/";
    INC.clientConfig.checkoutLink = "https://www.bradfords.co.uk/checkout/cart/";
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
    INC.config.FBTTitle = "Frequently Bought Together"
    INC.config.AddedText = "Added"
    INC.config.BeforeYouChecktext = "Customers also bought"
    INC.config.ajaxerr = "I'm sorry we've experienced an error. Please try again."
    INC.config.UpdateText = "UPDATE"
    INC.config.noimage = "https://www.increasingly.co/Implementation/bDS7f1r/js/noimage.png"
    INC.config.recommendation = false;
    INC.config.recommendationProduct = [];
    INC.config.srcImgeLazy = "https://www.increasingly.co/Implementation/bDS7f1r/prod/images/img_placeholder.gif";
    INC.config.bundledid = []
    INC.config.cldomain = ""
    INC.config.checkoutpath = ""
    INC.config.configuratorProduct = []
    INC.config.siderbaropenCount = 0
    INC.clientConfig.statusVAT = ''
    INC.config.category_seqId=[]
    INC.config.category_sequance=[]
    if (window.location.host == 'bradfordsdev1.dev.iwebcloud.co.uk') {
        INC.config.addToBasketURL = "https://bradfordsdev1.dev.iwebcloud.co.uk/checkout/cart/add/uenc/";
        INC.clientConfig.checkoutLink = "https://bradfordsdev1.dev.iwebcloud.co.uk/checkout/cart/";
    }
    
    INC.checkProdUserCookie = function() {
        if (INC.ENV == "prod") {
            if (init_flag) {
                setTimeout(function() {
                    init_flag = false;
                    INC.init();
                }, 1000)
            }
        }
    }
    INC.checkProdUserCookie();
    function readCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for (var s of ca) {
            var c = s;
            while (c.charAt(0) == ' ')
                c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0)
                return c.substring(nameEQ.length, c.length);
        }
        return null;
    }
    function generate_html_tag(element, className) {
        var generateEl = document.createElement(element);
        if (className != undefined) {
            generateEl.classList.add(className)
        }
        return generateEl;
    }
    INC.init = function() {
        INC.methods.addVisitorID();
        // sidebar_configurator_id = ['IDA246']
	    sidebar_configurator_id = ['PTP008','PTP009','PTP016','PTP015','PTP004','GSL015','GFP135','CVP005','DEK101','IDC037','IDC038','IDC039','IDC040','IDC041','IDC042','IDC043','IDC044','IDC045','IDC046','IDC047','IDC048','IDC049','IDC050','IDC051','IDC052','IDC053','IDC054','IDC055','IDC056','IDC057','IDC058','IDC059','IDC060','IDC061','IDC062','IDC063','IDA103','IDA365','IDA131','IDA149','IDA258','IDA661','IDA168','IDA836','IDA922','IDA384','IDA969','IDA761','IDA846','IDA895','IDA055','IDA112','IDA146','IDA157','IDA623','IDA982','IDA984','IDB017','IDB049','IDA260','IDA156','IDA159','IDA361','IDA101','IDA151','IDA704','IDA135','IDA871','IDA622','IDA362','IDA844','IDA863','IDA963','IDB045','IDA834','IDA930','IDA421','IDA038','IDA512','IDA349','IDA388','IDA111','IDA345','IDA651','IDA052','IDA162','IDA164','IDA896','IDA364','IDA705','IDA941','IDA964','IDA838','IDA970','IDA971','IDA148','IDA950','IDA897','IDA051','IDA053','IDA160','IDA298','IDA363','IDA498','IDA259','IDA261','IDA931','IDA243','IDA454','IDA536','IDB111','IDA854','IDA762','IDA659','IDB047','IDA879','IDA155','IDA257','IDA650','IDA054','IDA940','IDA100','IDA256','IDA133','IDA049','IDA150','IDA326','IDA056','IDA163','IDA110','IDA300','IDA417','IDA242','IDA425','IDA427','IDA147','IDA165','IDA134','IDA385','IDA893','IDA161','IDA500','IDA050','IDA837','IDA864','IDA660','IDB048','IDA652','IDA057','IDA350','IDA419','IDA035','IDA102','IDA166','IDA534','IDA456','IDA624','IDA254','IDA329','IDA386','IDA387','IDB067','IDA037','IDA325','IDA327','IDB079','IDA132','IDA513','IDA706','IDA835','IDA853','IDB020','IDA344','IDA880','IDA872','IDA932','IDA845','IDA455','IDB069','IDA942','IDA981','IDB015','IDB068','IDA653','IDA921','IDA952','IDA983','IDA499','IDA855','IDA972','IDA923','IDB019','IDA036','IDB046','IDA299','IDA167','IDA302','IDA535','IDA842','IDA301','IDA039','IDA241','IDA262','IDA951','IDA878','IDB016','IDA328','IDA343','IDA873','IDB110','IDA980','IDA662','IDA760','IDA843','IDA894','IDB080','IDB112','IDA414','IDA099','IDA124','IDA090','IDA265','IDA263','IDA324','IDA338','IDA043','IDA075','IDA141','IDA143','IDA574','IDA617','IDA924','IDA967','IDA278','IDA542','IDA578','IDA646','IDA139','IDA566','IDA847','IDA033','IDA286','IDA504','IDA554','IDA394','IDA628','IDA645','IDA860','IDA877','IDA729','IDA687','IDA737','IDA768','IDB041','IDA567','IDA885','IDB012','IDB095','IDB129','IDA841','IDB025','IDB082','IDB136','IDB077','IDB127','IDA961','IDB030','IDA114','IDA182','IDA314','IDA548','IDA550','IDB124','IDA032','IDA073','IDA068','IDA109','IDA106','IDA145','IDA288','IDA044','IDA176','IDA369','IDA418','IDA569','IDA097','IDA122','IDA649','IDA656','IDA754','IDA034','IDA085','IDA117','IDA153','IDA367','IDA434','IDA502','IDA237','IDA239','IDA296','IDA496','IDA630','IDA552','IDB003','IDA851','IDA876','IDA965','IDB002','IDB027','IDA411','IDA426','IDA679','IDA868','IDB073','IDB147','IDA849','IDA856','IDB132','IDA978','IDB013','IDB113','IDB130','IDB144','IDA839','IDA713','IDB097','IDA087','IDA187','IDA348','IDA580','IDA655','IDA682','IDA757','IDA857','IDB083','IDB092','IDA083','IDB072','IDB149','IDA093','IDA108','IDA178','IDA191','IDA342','IDA181','IDA199','IDA331','IDA449','IDA506','IDA556','IDA318','IDA336','IDA337','IDA400','IDA275','IDA375','IDA450','IDA501','IDA601','IDA072','IDA129','IDA240','IDA347','IDA619','IDA686','IDA701','IDA615','IDA833','IDA840','IDA865','IDA769','IDA886','IDA528','IDA577','IDA203','IDA435','IDA928','IDA273','IDA305','IDA339','IDA507','IDA539','IDA685','IDA998','IDB108','IDA667','IDA717','IDA881','IDB043','IDB118','IDA870','IDA935','IDA121','IDA123','IDA616','IDA962','IDA977','IDA979','IDB031','IDB039','IDB121','IDB139','IDA576','IDB115','IDA689','IDA714','IDB105','IDB137','IDA891','IDA933','IDB066','IDB116','IDB134','IDA069','IDA335','IDA105','IDA264','IDA332','IDA432','IDA095','IDA113','IDA138','IDA524','IDA541','IDA664','IDA074','IDA308','IDA378','IDA631','IDA731','IDA874','IDA245','IDA277','IDA360','IDA428','IDA668','IDB093','IDA887','IDA918','IDB038','IDB123','IDB042','IDA670','IDA663','IDA738','IDA988','IDB103','IDA862','IDA859','IDA197','IDA358','IDA976','IDB151','IDA058','IDA092','IDA076','IDA144','IDA152','IDA120','IDA313','IDA086','IDA136','IDA269','IDA064','IDA077','IDA177','IDA294','IDA368','IDA201','IDA268','IDA096','IDA098','IDA107','IDA274','IDA267','IDA320','IDA602','IDA310','IDA393','IDA190','IDA303','IDA334','IDA353','IDA370','IDA529','IDA544','IDA712','IDB028','IDA065','IDA204','IDA315','IDA422','IDA059','IDA142','IDA396','IDA700','IDA618','IDA869','IDA088','IDA960','IDB029','IDA272','IDA383','IDA390','IDA497','IDA688','IDA703','IDA753','IDA104','IDA089','IDA180','IDA351','IDA568','IDA604','IDA526','IDA579','IDA643','IDA321','IDA323','IDA380','IDA391','IDA423','IDA448','IDA525','IDA317','IDB114','IDB005','IDB138','IDA892','IDB075','IDB107','IDA238','IDA154','IDA290','IDA304','IDA322','IDA354','IDA374','IDA381','IDA399','IDA319','IDA669','IDA966','IDB044','IDB099','IDB135','IDA137','IDA198','IDB104','IDB091','IDB109','IDA311','IDA392','IDA530','IDA312','IDA395','IDA632','IDA666','IDA397','IDA415','IDA540','IDA647','IDA658','IDA665','IDA730','IDA866','IDA271','IDA373','IDA356','IDA621','IDA702','IDB098','IDA681','IDA756','IDA852','IDA920','IDB004','IDA654','IDA718','IDA919','IDA987','IDB006','IDB120','IDA527','IDA715','IDA858','IDA505','IDA575','IDA739','IDA934','IDA968','IDB014','IDA382','IDA614','IDA657','IDA716','IDB074','IDB076','IDB145','IDA867','IDA917','IDA999','IDB148','IDB090','IDB122','IDA927','IDA929','IDA997','IDB096','IDA882','IDA246','IDB084','IDB146','IDA555','IDA648','IDA888','IDA985','IDA280','IDA316','IDA389','IDA523','IDA759','IDB085','IDB117','IDB119','IDA989','IDB026','IDA740','IDA883','IDA890','IDA495','IDA678','IDA861','IDB081','IDB040','IDB071','IDA642','IDA767','IDA974','IDA925','IDA875','IDB001','IDA091','IDB133','IDB065','IDB078','IDB131','IDA082','IDB094','IDA084','IDA185','IDA270','IDA306','IDA352','IDA503','IDA553','IDA620','IDA424','IDA549','IDA699','IDA140','IDA297','IDA340','IDA372','IDA125','IDA244','IDA359','IDA379','IDA447','IDA200','IDA333','IDA551','IDA376','IDA461','IDA986','IDB037','IDB070','IDB106','IDA629','IDA644','IDA130','IDA307','IDA330','IDA341','IDA758','IDA926','IDA371','IDA398','IDA732','IDA094','IDA309','IDA377','IDA494','IDA832','IDA973','IDA975','IDB010','IDB035','IDB150','IDB152','IDB064','IDB128','IDB086','IDB125','IDA996','IDA289','IDA346','IDA355','IDA357','IDA680','IDA755','IDA848','IDA850','IDA884','IDA889','IDB126','IDA285','IDA287','IDA764','IDA282','IDA045','IDA281','IDA047','IDA492','IDA493','IDA046','IDA048','IDA734','IDA744','IDA751','IDA741','IDA735','IDA742','IDA749','IDA733','IDA743','IDA750','IDA752','IDA736','IDA184','IDA029','IDA252','IDA831','IDA722','IDB007','IDA080','IDA825','IDA041','IDA031','IDA249','IDA247','IDB022','IDB036','IDA936','IDB034','IDB052','IDA946','IDA416','IDA723','IDA119','IDA060','IDA126','IDA433','IDA116','IDA253','IDA826','IDA724','IDA943','IDA945','IDA727','IDA827','IDB155','IDA957','IDA042','IDA183','IDA186','IDA066','IDA430','IDA127','IDA956','IDA292','IDB153','IDA937','IDB023','IDA939','IDA830','IDA078','IDA293','IDA118','IDA028','IDA062','IDA250','IDA283','IDA188','IDA420','IDA040','IDA079','IDA128','IDA070','IDA726','IDA828','IDA938','IDB021','IDA291','IDB154','IDA413','IDA431','IDB009','IDA429','IDA030','IDA295','IDB054','IDA412','IDB033','IDA728','IDA944','IDB032','IDA725','IDB011','IDB024','IDB051','IDB008','IDA081','IDA824','IDA115','IDA955','IDA829','IDB160','IDB162','IDA719','IDA720','IDB156','IDB157','IDB158','IDB159','IDB161','IDB163','IDB164','IDB165','IDB166','IDB167','IDB168','IDB169','IDB170','IDB171','IDB172','IDB173','IDB174','IDB175','IDB176','IDB177','IDB178','IDB179','IDB180','IDB206','IDB207','IDB208','IDB209','IDB210','IDB211','IDB212','IDB213','IDB214','IDB215','IDB216','IDB217','IDB218','IDB219','IDB220','IDB221','IDB222','IDB223','IDB224','IDB225','IDB226','IDB227','IDB228','IDB229','IDB230','IDB231','IDB232','IDB233','IDB234','IDB235','IDB236','IDB237','IDB238','IDB239','IDB240','IDB241','IDB242','IDB243','IDB244','IDB245','IDB246','IDB247','IDB248','IDB249','IDB250','IDB251','IDB252','IDB253','IDB254','IDB255','IDB256','IDB257','IDB258','IDB259','IDB260','IDB261','IDB262','IDB263','IDB264','IDB265','IDB266','IDB267','IDB268','IDB269','IDB270','IDB271','IDB272','IDB273','IDB274','IDB275','IDB276','IDB277','IDB278','IDB279','IDB280','IDB281','IDB282','IDB283','IDB284','IDB285','IDB286','IDB287','IDB288','IDB289','IDB290','IDB291','IDB292','IDB293','IDB294','IDB295','IDB296','IDB297','IDB298','IDB299','IDB300','IDB301','IDB302','IDB303','IDB304','IDB305','IDB306','IDB307','IDB308','IDB309','IDB310','IDB311','IDB312','IDB313','IDB314','IDB315','IDB316','IDB317','IDB318','IDB319','IDB320','IDB321','IDB322','IDB323','IDB324','IDB325','IDB326','IDB327','IDB328','IDB329','IDB330','IDB331','IDB332','IDB333','IDB334','IDB335','IDB336','IDB337','IDB338','IDB339','IDB340','IDB341','IDB342','IDB343','IDB344','IDB345','IDB346','IDB347','IDB348','IDB349','IDB350','IDB351','IDB352','IDB353','IDB354','IDB355','IDB356','IDB357','IDB358','IDB359','IDB360','IDB361','IDB362','IDB363','IDB364','IDB365','IDB366','IDB367','IDB368','IDB369','IDB370','IDB371','IDB372','IDB373','IDB374','IDB375','IDB376','IDB377','IDB378','IDB379','IDB380','IDB381','IDB382','IDB383','IDB384','IDB385','IDB386','IDB387','IDB388','IDB389','IDB390','IDB391','IDB392','IDB393','IDB394','IDB395','IDB396','IDB397','IDB398','IDB399','IDB400','IDB401','IDB402','IDB403','IDB404','IDB405','IDB406','IDB407','IDB408','IDB409','IDB410','IDB411','IDB412','IDB413','IDB414','IDB415','IDB416','IDB417','IDB418','IDB419','IDB420','IDB421','IDB422','IDB423','IDB424','IDB425','IDB426','IDB427','IDB428','IDB429','IDB430','IDB431','IDB432','IDB433','IDB434','IDB435','IDB436','IDB437','IDB438','IDB439','IDB440','IDB441','IDB442','IDB443','IDB444','IDB445','IDB446','IDB447','IDB448','IDB450','IDB451','IDB452','IDB453','IDB454','IDB455','IDB456','IDB457','IDB458','IDB459','IDB460','IDB461','IDB462','IDB463','IDB464','IDB465','IDB466','IDB467','IDB468','IDB469','IDB470','IDB471','IDB472','IDB473','IDB474','IDB475','IDB476','IDB477','IDB478','IDB479','IDB480','IDB481','IDB482','IDB483','IDB484','IDB485','IDB486','IDB487','IDB488','IDB489','IDB490','IDB491','IDB492','IDB493','IDB494','IDB495','IDB496','IDB497','IDB498','IDB499','IDB500','IDB501','IDB502','IDB503','IDB504','IDB505','IDB506','IDB507','IDB508','IDB509','IDB510','IDB511','IDB512','IDB513','IDB514','IDB515','IDB516','IDB517','IDB518','IDB519','IDB520','IDB521','IDB522','IDB523','IDB524','IDB525','IDB526','IDB527','IDB528','IDB529','IDB530','IDB531','IDB532','IDB533','IDB534','IDB535','IDB536','IDB537','IDB538','IDB539','IDB540','IDB541','IDB542','IDB543','IDB544','IDB545','IDB546','IDB547','IDB548','IDB549','IDB550','IDB551','IDB552','IDB553','IDB554','IDB555','IDB556','IDB557','IDB558','IDB559','IDB560','IDB561','IDB562','IDB563','IDB564','IDB565','IDB566','IDB567','IDB568','IDB569','IDB570','IDB571','IDB572','IDB573','IDB574','IDB575','IDB576','IDB577','IDB578','IDB579','IDB580','IDB581','IDB582','IDB583','IDB584','IDB585','IDB586','IDB587','IDB588','IDB589','IDB590','IDB591','IDB592','IDB593','IDB594','IDB595','IDB596','IDB597','IDB598','IDB599','IDB600','IDB601','IDB602','IDB603','IDB604','IDB605','IDB606','IDB607','IDB608','IDB609','IDB610','IDB611','IDB612','IDB613','IDB614','IDB615','IDB616','IDB617','IDB618','IDB619','IDB630','IDB631','IDB632','IDB633','IDB634','IDB635','IDB636','IDB637','IDB638','IDB639','IDB640','IDB641','IDB642','IDB643','IDB644','IDB645','IDB646','IDB647','IDB648','IDB649','IDB650','IDB651','IDB652','IDB653','IDB654','IDB655','IDB656','IDB657','IDB658','IDB659','IDB660','IDB661','IDB662','IDB663','IDB664','IDB665','IDB666','IDB667','IDB668','IDB669','IDB670','IDB671','IDB672','IDB673','IDB674','IDB675','IDB676','IDB677','IDB678','IDB679','IDB680','IDB681','IDB682','IDB683','IDB684','IDB685','IDB686','IDB687','IDB688','IDB689','IDB690','IDB691','IDB692','IDB693','IDB694','IDB695','IDB696','IDB697','IDB698','IDB699','IDB700','IDB701','IDB702','IDB703','IDB704','IDB705','IDB706','IDB707','IDB708','IDB709','IDB710','IDB711','IDB712','IDB713','IDB714','IDB715','IDB716','IDB717','IDB718','IDB719','IDB720','IDB721','IDB722','IDB723','IDB724','IDB725','IDB726','IDB727','IDB728','IDB729','IDB730','IDB731','IDB732','IDB733','IDB734','IDB735','IDB736','IDB737','IDB738','IDB739','IDB740','IDB741','IDB742','IDB743','IDB744','IDB745','IDB746','IDB747','IDB748','IDB749','IDB750','IDB751','IDB752','IDB753','IDB754','IDB755','IDB756','IDB757','IDB758','IDB759','IDB760','IDB761','IDB762','IDB763','IDB764','IDB765','IDB766','IDB767','IDB768','IDB769','IDB770','IDB771','IDB772','IDB773','IDB774','IDB775','IDB776','IDB777','IDB778','IDB779','IDB780','IDB781','IDB782','IDB783','IDB784','IDB785','IDB786','IDB787','IDB788','IDB789','IDB790','IDB791','IDB792','IDB793','IDB794','IDB795','IDB796','IDB797','IDB798','IDB799','IDB800','IDB801','IDB802','IDB803','IDB804','IDB805','IDB806','IDB807','IDB808','IDB809','IDB810','IDB811','IDB812','IDB813','IDB814','IDB815','IDB816','IDB817','IDB818','IDB819','IDB820','IDB821','IDB822','IDB823','IDB824','IDB825','IDB826','IDB827','IDB828','IDB829','IDB830','IDB831','IDB832','IDB833','IDB834','IDB835','IDB836','IDB837','IDB838','IDB839','IDB840','IDB841','IDB842','IDB843','IDB844','IDB845','IDB846','IDB847','IDB848','IDB849','IDB850','IDB851','IDB852','IDB853','IDB854','IDB855','IDB856','IDB857','IDB858','IDB859','IDB860','IDB861','IDB862','IDB863','IDB864','IDB865','IDB866','IDB867','IDB868','IDB869','IDB870','IDB871','IDB872','IDB873','IDB874','IDB875','IDB876','IDB877','IDB878','IDB879','IDB880','IDB881','IDB882','IDB883','IDB884','IDB885','IDB886','IDB887','IDB888','IDB889','IDB890','IDB891','IDB892','IDB893','IDB894','IDB895','IDB896','IDB897','IDB898','IDB899','IDB900','IDB901','IDB902','IDB903','IDB904','IDB905','IDB906','IDB907','IDB908','IDB909','IDB910','IDB911','IDB912','IDB913','IDB914','IDB915','IDB916','IDB917','IDB918','IDB919','IDB920','IDB921','IDB922','IDB923','IDB924','IDB925','IDB926','IDB927','IDB928','IDB929','IDB930','IDB931','IDB932','IDB933','IDB934','IDB935','IDB936','IDB937','IDB938','IDB939','IDB940','IDB941','IDB942','IDB943','IDB944','IDB945','IDB946','IDB947','IDB948','IDB949','IDB950','IDB951','IDB952','IDB953','IDB954','IDB955','IDB956','IDB957','IDB958','IDB959','IDB960','IDB961','IDB962','IDB963','IDB964','IDB965','IDB966','IDB967','IDB968','IDB969','IDB970','IDB971','IDB972','IDB973','IDB974','IDB975','IDB976','IDB977','IDB978','IDB979','IDB980','IDB981','IDB982','IDB983','IDB984','IDB985','IDB986','IDB987','IDB988','IDB989','IDB990','IDB991','IDB992','IDB993','IDB994','IDB995','IDB996','IDB997','IDB998','DRC316','DRC317','DRC318','DRC319','DRC320','DRC321','DRC322','DRC323','DRC324','DRC325','DRC326','DRC327','DRC328','DRC329','DRC330','DRC331','DRC332','DRC333','DRC334','DRC335','DRC336','DRC337','DRC338','DRC339','DRC340','DRC341','DRC342','DRC343','DRC344','DRC345','DRC346','DRC347','DRC348','DRC349','DRC350','DRC351','DRC352','DRC353','DRC354','DRC355','DRC356','DRC357','DRC358','DRC359','DRC360','DRC361','DRC362','DRC363','DRC364','DRC365','DRC366','DRC367','DRC368','DRC369','DRC370','DRC371','DRC372','DRC373','DRC374','DRC375','DRC376','DRC377','DRC378','DRC379','DRC380','DRC381','DRC382','DRC383','DRC384','DRC385','DRC386','DRC387','DRC388','DRC389','DRC390','DRC391','DRC392','DRC393','DRC394','DRC395','DRC428','DRC429','DRC430','DRC431','DRC432','DRC433','DRC434','DRC435','DRC436','PTD002','PTD005','PTD210','PTD003','PTD006','PTD008','PTD016','PTD007']
	    
        INC.config.pageType = INC.methods.detectPageType();
        INC.methods.clear();
        if (document.querySelector('body').classList.contains('tax-hidden') == false) {
	        INC.clientConfig.statusVAT = true;
	    } else {
	        INC.clientConfig.statusVAT = false
	    }
        switch (INC.config.pageType) {
        case "pdp":
            var productId = INC.methods.getProductIdFromWebPage();
            // if (document.querySelector('.delivery.js-service-option') != null) {
                if (document.querySelector('.collection.js-service-option .stock-message-default') != null || document.querySelector('.delivery.js-service-option') != null) {
                    if ((document.querySelector('.collection.js-service-option .stock-message-default') != null &&  document.querySelector('.collection.js-service-option .stock-message-default').innerHTML.toUpperCase().indexOf('OUT OF STOCK') > -1) && (document.querySelector('.delivery.js-service-option') != null && document.querySelector('.delivery.js-service-option').innerText.toUpperCase() == "OUT OF STOCK"))
                     { 
                        oosproduct(productId)
                        // INC.methods.irbReq(productId, 5, "catalog_product_view");
                    } else {
                        INC.methods.irbReq(productId, 5, "catalog_product_view");
                    }
                } else {
                    INC.methods.irbReq(productId, 5, "catalog_product_view");
                }
            // }
            break;
        case "cartPage":
            if (cartpageprodids().length > 0) {
                INC.methods.irbReq(INC.config.cartproductids, 12, "checkout_cart_index");
            }
            break;
        case "productList":
            productId = "";
            if (document.querySelector('.category-list__upper .page-title-wrapper') != null) {
                productId = document.querySelector('.category-list__upper .page-title-wrapper').innerText
            }
            sidebar_configurator_id = []
            INC.methods.irbReq_category_based(productId, 10, "catalog_category_view")
            break;
        }
    }
    function cartpageprodids() {
        INC.config.cartproductids = []

        let local = JSON.parse(localStorage.getItem('mage-cache-storage'))
        if (local) {
            if (local.cart) {
                for (let i = 0; i < local.cart.items.length; i++) {
                    INC.config.cartproductids.push(local.cart.items[i].product_sku)
                }
            }
        }

        return INC.config.cartproductids;
    }
    INC.dataStore = {};
    INC.dataStore.methods = function() {
        var incDataStore = INC.dataStore;
        function buildDataStoreObj(bundleResponse,configurator) {
            INC.config.dupDataObjectProducts = []
            INC.dataStore.clientProductDealsCategory = "";
            var bundles = [];
            var reccheck = true;
            var recC = false;
            if (INC.config.pageType == "productList") {
                bundles = [];
                bundles.push({
                    BundleId: '12345'
                })
            } else {
                if (INC.config.recommendation == reccheck) {
                    bundles = [];
                    bundles.push({
                        BundleId: '12345'
                    })
                } else {
                    bundles = bundleResponse.Bundles;
                }
            }

            if (bundleResponse.ProductDeals != null) {
                bundleResponse.ProductDeals.forEach(function(productDealObj) {
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
                for (var prdetails of bundleResponse.ProductsDetail) {
                    bundleproductarray[prdetails.ProductId] = prdetails
                }
            } else if (bundleResponse.CategoryRecommendations != null) {
                for (var catrecT of bundleResponse.CategoryRecommendations) {
                    bundleproductarray[catrecT.ProductId] = catrecT
                }
            }
            var pdpProductId = ""
            for (var bundle_i of bundles) {
                if (INC.config.dupDataObjectProducts.indexOf(bundle_i.BundleId) == -1) {
                    if (INC.config.recommendation == recC) {
                        INC.config.dupDataObjectProducts.push(bundle_i.BundleId)
                    }
                    INC.config.bundledid.push({
                        bundleids: bundle_i.BundleId,
                        productids: bundle_i.ProductIds
                    })
                    var irbBundleObj = ""
                    if (INC.config.pageType == "productList" || INC.config.recommendation == reccheck) {
                        irbBundleObj = bundleResponse;
                    } else {
                        irbBundleObj = bundle_i;
                    }

                    var bundleObj = {};
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

                    var irbProductsArray = '';
                    if (INC.config.pageType == "productList") {
                        irbProductsArray = irbBundleObj.CategoryRecommendations;
                    } else {
                        var trf = true
                        if (INC.config.recommendation == trf) {
                            irbProductsArray = irbBundleObj.CategoryRecommendations;
                        } else {
                            irbProductsArray = irbBundleObj["ProductIds"]
                        }
                    }

                    if (INC.config.recommendation == recC) {
                        if (irbProductsArray) {
                            if (window.location.pathname == '/checkout/cart/' || INC.config.recommendation) {
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
                    var productId = INC.methods.getProductIdFromWebPage();
                    if (sidebar_configurator_id.indexOf(productId) >= 0) {
                        // INC.config.configuratorProduct.push(irbProductsArray[1]);
                    }
                    if (irbProductsArray != null) {
                        for (var irbprdarray of irbProductsArray) {
                            var product = irbprdarray

                            if (INC.config.pageType == "productList") {
                                bundleProductsArray.push(product["ProductId"]);
                            } else {
                                if (INC.config.recommendation == reccheck) {
                                    bundleProductsArray.push(irbprdarray.ProductId);
                                    INC.config.recommendationProduct.push(irbprdarray.ProductId)
                                } else {
                                    product = bundleproductarray[irbprdarray];
                                }
                            }
                           
                            var pAttributes = product["Attributes"] || "";
                            if(configurator == "configurator"){
                                if(irbProductsArray[0]["ProductId"] != product["ProductId"]){
                                    if(INC.config.category_sequance.indexOf(product["CategoryName"]) == -1){
                                        INC.config.category_sequance.push(product["CategoryName"])
                                        INC.config.category_seqId.push({
                                            id:product["CategorySequenceId"],
                                            category:product["CategoryName"]
                                        })
                                    }
                                }
                            }
                            if(product.ExclusiveVATPrice == null){
                            	product.ExclusiveVATPrice = product["Price"]
                            	product.ExclusiveVATSpecialPrice = product["SpecialPrice"]
                            }
                            if (pAttributes != "" && pAttributes != null) {
                                for (var p of pAttributes) {
                                    if (p.frontEndLabel == "color") {
                                        p.frontEndLabel = "Color"
                                    }
                                    if (p.frontEndLabel == "Shade") {
                                        p.frontEndLabel = "Color"
                                    }
                                    if (p.frontEndLabel == "size") {
                                        p.frontEndLabel = "Size"
                                    }
                                    if (pAttributes.length == 1) {
                                        if (p.frontEndLabel == "color" || p.frontEndLabel == "Color") {
                                            p.frontEndLabel = "Color"
                                        } else {
                                            p.frontEndLabel = "Size"
                                        }
                                    }
                                    p.attributeCode = p.frontEndLabel;
                                }
                                pAttributes = attribute_listing(pAttributes)
                            }
                            var pAttObj = {};
                            var attr_values = '';
                            for (var t of pAttributes) {
                                if (pAttributes.length == 1) {
                                    if (pAttributes[0].attributeCode == "Color" || pAttributes[0].attributeCode == "color") {
                                        pAttributes[0].attributeId = 0;
                                        attr_values = t.attributeValues;
                                        for (var v of attr_values) {
                                            v.optionId = 0;
                                        }
                                    } else {
                                        pAttributes[0].attributeId = 1;
                                        attr_values = t.attributeValues;
                                        for (var vb of attr_values) {
                                            vb.optionId = 1;
                                        }
                                    }
                                } else {
                                    t.attributeId = t
                                    attr_values = t.attributeValues;
                                    for (var va of attr_values) {
                                        va.optionId = t;
                                    }
                                }
                            }
                            var productObj = '';
                            if (pAttributes.length) {
                                for (var pattv of pAttributes) {
                                    var pAttributesObj = pattv;
                                    var pAttributesValues = pAttributesObj["attributeValues"];
                                    for (var patvalues of pAttributesValues) {
                                        var childProduct = patvalues;
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
                                        if(product.exclusiveVATPrice == null){
			                            	product.exclusiveVATPrice = product["Price"]
			                            	product.exclusiveVATSpecialPrice = product["SpecialPrice"]
			                            }
                                        childProduct["ProductType"] = product["ProductType"];
                                        childProduct["mainSKU"] = product["ProductSku"];
                                        childProduct["childProductIdmain"] = product["ProductId"];
                                        childProduct["childProductImageUrlMain"] = product["ImageURL"];
                                        childProduct["childProductPriceMain"] = product["Price"];
                                        childProduct["childProductSpecialPriceMain"] = product["SpecialPrice"];
                                        childProduct["childProductNameMain"] = product["ProductName"];
                                        childProduct["childProductUrlMain"] = product["ProductUrl"];
                                        childProduct["childProductOtherImageUrl"] = product["OtherImageList"];
                                        childProduct["childProductName"] = product["ProductName"];
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
                                        // productObj.Filed3 = product["Field3"] + " | " + product["Field4"];
                                        productObj.Filed3 = product["Field3"];
                                        if (!Object.prototype.hasOwnProperty.call(dataStoreObj, product['ProductId'])) {
                                            dataStoreObj[product['ProductId']] = {};
                                        }
                                        if (!Object.prototype.hasOwnProperty.call(dataStoreObj[product['ProductId']], productObj['id'])) {
                                            dataStoreObj[product['ProductId']][productObj['id']] = {}
                                        }
                                        pAttObj = dataStoreObj[product['ProductId']][productObj['id']];
                                        for (var pAtt in productObj) {
                                            if (pAtt == "option") {
                                                if (!Object.prototype.hasOwnProperty.call(pAttObj, 'option')) {
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
                                productObj = new INC.classes.ProductObj(product);
                                productObj["bundleId"] = irbBundleObj["BundleId"];
                                if (INC.config.recommendation == recC) {
                                    productObj["bundledProductId"] = pdpProductId;
                                }
                                productObj.sku = productObj.id;
                                // productObj.Filed3 = product["Field3"] + " | " + product["Field4"];
                                productObj.Filed3 = product["Field3"];
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
            incDataStore.dataStoreObj = dataStoreObj;
            incDataStore.bundleProductsArray = bundleProductsArray;
            if (INC.config.recommendation == recC) {
                incDataStore.pdpProductId = pdpProductId;
            }
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
            try {
                if (productListObj != undefined) {
                    childProductObj = productListObj[findObj["mainId"]][Object.keys(productListObj[findObj["mainId"]])[0]];
                }
            } catch (e) {
                // console.log('e', e.stack);
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
            if (Object.keys(childProductObj).length == 0) {
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
            var bundleProductsArray = '';
            var productListObj = INC.dataStore.dataStoreObj;
            var productId = INC.methods.getProductIdFromWebPage();
            if (sidebar_configurator_id.indexOf(productId) >= 0) {
                bundleProductsArray = INC.config.configuratorProduct;
            } else {
                bundleProductsArray = INC.dataStore.bundleProductsArray;
            }
            bundleProductsArray.forEach(function(prdi_d) {
                for (var childProductId in productListObj[prdi_d]) {
                    var indexOfCategoryId = catergoriesArray.indexOf(productListObj[prdi_d][childProductId]["categoryId"]);
                    if (indexOfCategoryId == -1 && productListObj[prdi_d][childProductId]["categoryId"] != INC.dataStore.clientProductDealsCategory) {
                        catergoriesArray.push(productListObj[prdi_d][childProductId]["categoryId"]);
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
            if (Object.prototype.hasOwnProperty.call(findObj, "mainId")) {
                for (var mainProductId in productListObj) {
                    if (mainProductId == findObj["mainId"]) {
                        for (var childProductId in productListObj[mainProductId]) {
                            if (productListObj[mainProductId][childProductId]["option"]["0"] != undefined) {
                                if (productListObj[mainProductId][childProductId]["option"]["0"].code == "Color") {
                                    if (productListObj[mainProductId][childProductId]["option"] != null && productListObj[mainProductId][childProductId]["option"] != undefined && productListObj[mainProductId][childProductId]["option"]["0"] != null && productListObj[mainProductId][childProductId]["option"]["0"] != undefined) {
                                        if (type_of != undefined) {
                                            var attr_block = null;
                                            var checB = false
                                            if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == checB) {
                                                attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                            } else {
                                                attr_block = type_of.parentNode.parentNode.parentNode
                                            }
                                            var opt_text = ""
                                            var opt_size_text = ""
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
                                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]] = {};
                                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["0"]["titleText"];
                                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["0"]["colorCode"];
                                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["0"]["imgSrc"];
                                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["0"]["code"];
                                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["0"]["cpid"];
                                                }
                                            } else if (opt_text != "" && productListObj[mainProductId][childProductId].option[1] != undefined) {
                                                if (productListObj[mainProductId][childProductId].option[1].text == opt_text) {
                                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]] = {};
                                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["0"]["titleText"];
                                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["0"]["colorCode"];
                                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["0"]["imgSrc"];
                                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["0"]["code"];
                                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["0"]["cpid"];
                                                }
                                            } else {
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]] = {};
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["0"]["titleText"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["0"]["colorCode"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["0"]["imgSrc"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["0"]["code"];
                                                productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["0"]["cpid"];
                                            }
                                        } else {
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]] = {};
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["0"]["titleText"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["colorCode"] = productListObj[mainProductId][childProductId]["option"]["0"]["colorCode"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["0"]["imgSrc"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["0"]["code"];
                                            productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["0"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["0"]["cpid"];
                                        }

                                    }
                                }
                            }
                        }
                    }
                }
            }
            Object.keys(productColorArrayObj).forEach(function(colorText) {
                var colorObj = {}
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
        function getProductSizesObj(findObj, type_of) {
            var productSizeObj = {};
            var productListObj = INC.dataStore.dataStoreObj;
            var productSizesArrayObj = {};
            var productSizesObjArray = [];
            var attr_code = "";
            var c_pid = "";
            var prc = "";
            if (Object.prototype.hasOwnProperty.call(findObj, "mainId")) {
                for (var mainProductId in productListObj) {
                    if (mainProductId == findObj["mainId"]) {
                        for (var childProductId in productListObj[mainProductId]) {
                            var attr_flag = ""
                            if (type_of != undefined) {
                                var attr_block = null;
                                var checB = false
                                if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == checB) {
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
                                                productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]] = productListObj[mainProductId][childProductId]["option"]["2"]["text"];
                                                attr_code = productListObj[mainProductId][childProductId]["option"]["2"]["code"];
                                                c_pid = productListObj[mainProductId][childProductId]["option"]["2"]["cpid"];
                                                prc = productListObj[mainProductId][childProductId]["option"]["2"]["activePriceChild"];
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
                                    productSizesArrayObj[productListObj[mainProductId][childProductId]["option"]["2"]["text"]] = productListObj[mainProductId][childProductId]["option"]["2"]["text"];
                                    attr_code = productListObj[mainProductId][childProductId]["option"]["2"]["code"];
                                    c_pid = productListObj[mainProductId][childProductId]["option"]["2"]["cpid"];
                                    prc = productListObj[mainProductId][childProductId]["option"]["2"]["activePriceChild"];
                                }
                            }
                        }

                    }
                }
            }

            Object.keys(productSizesArrayObj).forEach(function(sizeText) {
                var sizeObj = {};
                sizeObj["text"] = sizeText;
                sizeObj["code"] = attr_code;
                sizeObj["cpid"] = c_pid;
                sizeObj["prc"] = prc;
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
                for (var mainProductId in productListObj) {
                    if (mainProductId == findObj["mainId"]) {
                        for (var childProductId in productListObj[mainProductId]) {
                            if (productListObj[mainProductId][childProductId]["option"] != null && productListObj[mainProductId][childProductId]["option"] != undefined && productListObj[mainProductId][childProductId]["option"]["1"] != null && productListObj[mainProductId][childProductId]["option"]["1"] != undefined) {
                                var checT = true
                                var attr_main = true;
                                var first_attr_acodec = ["Connectivity", "Number of SIM", "Device"];
                                if (productListObj[mainProductId][childProductId]["option"][0] != undefined || productListObj[mainProductId][childProductId]["option"][1].code != undefined) {
                                    if (first_attr_acodec.indexOf(productListObj[mainProductId][childProductId]["option"][0]) == -1 && first_attr_acodec.indexOf(productListObj[mainProductId][childProductId]["option"][1].code) == -1) {
                                        attr_main = false;
                                    }
                                }
                                if (attr_main == checT) {
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]] = {};
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["1"]["titleText"];
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["1"]["code"];
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["1"]["cpid"];
                                    product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["prc"] = productListObj[mainProductId][childProductId]["option"]["1"]["activePriceChild"];
                                } else {
                                    if (findObj.colorText != undefined) {
                                        if (productListObj[mainProductId][childProductId].option["0"].text.trim().toLocaleLowerCase() == findObj.colorText.trim().toLocaleLowerCase()) {
                                            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]] = {};
                                            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["1"]["titleText"];
                                            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["1"]["cpid"];
                                            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
                                            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["1"]["code"];
                                            product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["prc"] = productListObj[mainProductId][childProductId]["option"]["1"]["activePriceChild"];
                                        }
                                    } else {
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]] = {};
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["1"]["titleText"];
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["1"]["cpid"];
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["1"]["imgSrc"];
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["1"]["code"];
                                        product0ArrayObj[productListObj[mainProductId][childProductId]["option"]["1"]["text"]]["prc"] = productListObj[mainProductId][childProductId]["option"]["1"]["activePriceChild"];
                                    }
                                }
                            }
                        }
                    }
                }
            }

            Object.keys(product0ArrayObj).forEach(function(colorText) {
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
            product0Obj["att0Array"] = product0ObjArray
            return product0Obj;
        }
        function getProductopt3Obj(findObj, type_of) {
            var product3Obj = {};
            var productListObj = INC.dataStore.dataStoreObj;
            var productColorArrayObj = {}
            var product3ObjArray = [];
            var checB = false
            var checTr = true
            if (Object.prototype.hasOwnProperty.call(findObj, "mainId")) {
                for (var mainProductId in productListObj) {
                    if (mainProductId == findObj["mainId"]) {
                        for (var childProductId in productListObj[mainProductId]) {
                            if (productListObj[mainProductId][childProductId]["option"] != null && productListObj[mainProductId][childProductId]["option"] != undefined && productListObj[mainProductId][childProductId]["option"]["3"] != null && productListObj[mainProductId][childProductId]["option"]["3"] != undefined) {
                                if (type_of != undefined) {
                                    var attr_block = null;
                                    if (type_of.parentNode.parentNode != null) {
                                        if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == checB) {
                                            attr_block = type_of.parentNode.parentNode.parentNode.parentNode
                                        } else {
                                            attr_block = type_of.parentNode.parentNode.parentNode
                                        }
                                    } else {
                                        attr_block = type_of.parentNode.parentNode
                                    }
                                    if (type_of.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == checTr) {
                                        attr_block = type_of.parentNode.parentNode.parentNode
                                    }
                                    if (type_of.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_desc_att_block') == checTr) {
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
                                    }
                                } else {
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]] = {};
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["colorCode"] = "";
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["titleText"] = productListObj[mainProductId][childProductId]["option"]["3"]["titleText"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["imgSrc"] = productListObj[mainProductId][childProductId]["option"]["3"]["imgSrc"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["code"] = productListObj[mainProductId][childProductId]["option"]["3"]["code"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["cpid"] = productListObj[mainProductId][childProductId]["option"]["3"]["cpid"];
                                    productColorArrayObj[productListObj[mainProductId][childProductId]["option"]["3"]["text"]]["prc"] = productListObj[mainProductId][childProductId]["option"]["3"]["activePriceChild"];
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
                attr3Obj["cpid"] = productColorArrayObj[colorText]["cpid"];
                attr3Obj["prc"] = productColorArrayObj[colorText]["prc"];
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
                } else if (findObj.zeroText == "" && findObj.sizeText == "" && findObj.thirdText == "" && findObj.colorText != "" && mainProductListObj[childProductId]["option"]["0"] != undefined && mainProductListObj[childProductId]["option"]["1"] != undefined) {
                    if (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if (findObj.zeroText != "" && findObj.sizeText == "" && findObj.thirdText == "" && findObj.colorText == "" && mainProductListObj[childProductId]["option"]["1"] != undefined) {
                    if (findObj.zeroText == mainProductListObj[childProductId]["option"]["1"].text) {
                        childProductObj = mainProductListObj[childProductId];
                        return childProductObj;
                    }
                } else if ((mainProductListObj[childProductId]["option"] != null && mainProductListObj[childProductId]["option"] != undefined && mainProductListObj[childProductId]["option"]["0"] != null && mainProductListObj[childProductId]["option"]["0"] != undefined && (findObj.colorText == mainProductListObj[childProductId]["option"]["0"].text)) || mainProductListObj[childProductId]["option"] != null && mainProductListObj[childProductId]["option"] != undefined && mainProductListObj[childProductId]["option"]["1"] != null && mainProductListObj[childProductId]["option"]["1"] != undefined && (findObj.sizeText == mainProductListObj[childProductId]["option"]["1"].text)) {
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
    INC.classes.ProductObj = function(product) {
        this.bundleId = "";
        this.id = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
        this.sku = ((product != null) && (product != undefined)) ? product["ProductSku"] : "";
        this.mainsku = ((product != null) && (product != undefined)) ? product["ProductSku"] : "";
        this.childsku = ((product != null) && (product != undefined)) ? product["ProductSku"] : "";
        this.name = ((product != null) && (product != undefined)) ? product["ProductName"] : "";
        this.url = product["ProductUrl"]
        this.imageURL = product["ImageURL"].replace('pngg', 'png')
        this.regularPrice = product["Price"];

        if (product["SpecialPrice"] != null && product["SpecialPrice"] != product["Price"]) {
            this.activePrice = product["SpecialPrice"]
        } else {
            this.activePrice = product["Price"]
        }

        if (INC.clientConfig.statusVAT == false) {
            this.regularPrice = ((product != null) && (product != undefined)) ? product["ExclusiveVATPrice"] : "";
            this.activePrice = ((product != null) && (product != undefined)) ? ((product["ExclusiveVATSpecialPrice"] != null) ? product["ExclusiveVATSpecialPrice"] : product["ExclusiveVATPrice"]) : "";
        }

        if (product["OtherImageList"] != null && product["OtherImageList"] != undefined) {
            this.otherImageList = product["OtherImageList"];
        } else {
            this.otherImageList = [];
        }
        if (product["Size"] != null && product["Size"] != undefined) {
            this.size = product["Size"];
        } else {
            this.size = ""
        }
        this.option = {};
        this.mainId = ((product != null) && (product != undefined)) ? product["ProductId"] : "";
        this.categoryName = ((product != null) && (product != undefined)) ? product["CategoryName"] : "";
        this.categoryId = ((product != null) && (product != undefined)) ? product["CategoryId"] : "";
        this.description = ((product != null) && (product != undefined)) ? product["Description"] : "";
        this.shortDescription = ((product != null) && (product != undefined)) ? product["ShortDescription"] : "";
        this.ratingsCount = ((product != null) && (product != undefined)) ? product["Rating"] : "";
        this.reviewsCount = ((product != null) && (product != undefined)) ? product["RatingCount"] : "";
        if (product["PromotionalMessage"] != null) {
            this.PromotionalMessage = product["PromotionalMessage"];
        } else {
            this.PromotionalMessage = ""
        }
        if (product["ProductLevelDiscountMessage"] != null) {
            this.ProductLevelDiscountMessage = product["ProductLevelDiscountMessage"]
        } else {
            this.ProductLevelDiscountMessage = ""
        }
        this.skinType = ((product != null) && (product != undefined)) ? product["Field3"] : "";
        this.underTone = ((product != null) && (product != undefined)) ? product["Field4"] : "";
        this.finish = ((product != null) && (product != undefined)) ? product["Field5"] : "";
        this.coverage = ((product != null) && (product != undefined)) ? product["Field6"] : "";
        this.ProductType = ""
        if (product["ProductType"] != null && product["ProductType"] != undefined) {
            this.ProductType = product["ProductType"]
        }
        this.regularPriceMain = product["Price"];
        if (product["SpecialPrice"] != null && product["SpecialPrice"] != product["Price"]) {
            this.activePriceMain = product["SpecialPrice"];
        } else {
            this.activePriceMain = product["Price"];
        }

        if (INC.clientConfig.statusVAT == false) {
            this.regularPriceMain = ((product != null) && (product != undefined)) ? product["ExclusiveVATPrice"] : "";
            this.activePriceMain = ((product != null) && (product != undefined)) ? ((product["ExclusiveVATSpecialPrice"] != null) ? product["ExclusiveVATSpecialPrice"] : product["ExclusiveVATPrice"]) : "";
        }

        if (product["ProductName"] != null) {
            this.nameMain = product["ProductName"];
        } else {
            this.nameMain = ""
        }
        if (product["ImageURL"] != null) {
            this.imageURLMain = product["ImageURL"];
        } else {
            this.imageURLMain = ""
        }
        this.urlMain = product["ProductUrl"]
    }
    INC.classes.ProductAttObj = function(product) {
        this.bundleId = "";
        this.id = ((product != null) && (product != undefined)) ? product["childProductId"] : "";
        this.sku = ((product != null) && (product != undefined)) ? product["childProductSku"] : "";
        this.mainsku = ((product != null) && (product != undefined)) ? product["mainSKU"] : "";
        this.childsku = ((product != null) && (product != undefined)) ? product["childProductSku"] : "";
        if (product["childProductName"] != null) {
            this.name = product["childProductName"];
        } else {
            this.name = "";
        }
        this.url = product["childProductUrl"]
        this.imageURL = product["childProductImageUrl"].replace('pngg', 'png')
        this.regularPrice = ((product != null) && (product != undefined)) ? product["childProductPrice"] : "";
        if (product["childProductSpecialPrice"] != null && product["childProductSpecialPrice"] != product["childProductPrice"]) {
            this.activePrice = product["childProductSpecialPrice"];
        } else {
            this.activePrice = product["childProductPrice"];
        }

        if (INC.clientConfig.statusVAT == false) {
            this.regularPrice = ((product != null) && (product != undefined)) ? product["exclusiveVATPrice"] : "";
            this.activePrice = ((product != null) && (product != undefined)) ? ((product["exclusiveVATSpecialPrice"] != null) ? product["exclusiveVATSpecialPrice"] : product["exclusiveVATPrice"]) : "";
        }

        if (product["promotionalMessage"] != null) {
            this.PromotionalMessage = product["promotionalMessage"];
        } else {
            this.PromotionalMessage = ""
        }
        if (product["productLevelDiscountMessage"] != null) {
            this.ProductLevelDiscountMessage = product["productLevelDiscountMessage"]
        } else {
            this.ProductLevelDiscountMessage = ""
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
        this.categoryName = ((product != null) && (product != undefined)) ? product["childCategoryName"] : "";
        this.categoryId = ((product != null) && (product != undefined)) ? product["childCategoryId"] : "";
        this.description = ((product != null) && (product != undefined)) ? product["childProductDescription"] : "";
        if (product["ShortDescription"] != null) {
            this.shortDescription = product["ShortDescription"]
        } else if (product["Field1"] != null) {
            this.shortDescription = product["Field1"]
        } else {
            this.shortDescription = ""
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

        if (INC.clientConfig.statusVAT == false) {
            this.regularPriceMain = ((product != null) && (product != undefined)) ? product["exclusiveVATPrice"] : "";
            this.activePriceMain = ((product != null) && (product != undefined)) ? ((product["exclusiveVATSpecialPrice"] != null) ? product["exclusiveVATSpecialPrice"] : product["exclusiveVATPrice"]) : "";
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

    INC.methods = {};
    INC.methods.networkReq = function(nwConfigObj, cb) {
        var nwConfigObject = new INC.classes.NWConfig(nwConfigObj);
        var xhr = new XMLHttpRequest();
        xhr.open(nwConfigObject.method, nwConfigObject.url, true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status === 200) {
                if (xhr.response != "") {
                    cb(xhr.response);
                    if (INC.config.pageType == "pdp") {
                        var p_ids = INC.methods.getProductIdFromWebPage()
                        INC.methods.irbReq_is_tc(p_ids, 10, "catalog_product_view");
                    }
                } else {
                    if (INC.config.pageType == "productList") {
                        INC.config.modal_called = true
                    }else{
                        if(INC.config.pageType == "pdp"){
                            var p_idsw = INC.methods.getProductIdFromWebPage()
                            if (sidebar_configurator_id.indexOf(p_idsw) >= 0) {
                                INC.methods.irbReq_is_tc(p_idsw,30, "catalog_product_view",'configurator');
                            }
                        }
                    }

                }
            }
        }
        xhr.send(JSON.stringify(nwConfigObject.params));
    }

    INC.methods.irbReq = function(productId, bundleCount, elementName) {
        var elmname = elementName || "";
        var productIdReq = productId;
        var apiKey = INC.config.clientToken;
        var bundleReqCount = bundleCount || 5;
        var irbReqParams = ""
        var irbPATH = "//rapidload.increasingly.co/increasingly_bundles?irb/";
        if (INC.config.pageType == "pdp" || INC.config.pageType == "cartPage") {
            irbReqParams = "product_ids=" + productIdReq + "&category_id=" + "&api_key=" + apiKey + "&client_id=" + "&page_type=" + elmname + "&fr=" + "1" + "&client_visitor_id=" + INC.config.ivid;
        } else {
            irbReqParams = "product_ids=" + productIdReq + "&category_id=" + "&api_key=" + apiKey + "&client_id=" + "&page_type=" + elmname + "&fr=" + "1" + "&client_visitor_id=" + INC.config.ivid + "&is_tc=" + "1" + "&no_of_bundles=" + bundleReqCount;
        }

        var irbReqURL = decodeURI(irbPATH + btoa(irbReqParams));
        var networkConfigObj = new INC.classes.NWConfig();
        networkConfigObj["url"] = irbReqURL;
        return this.refreshBundles(networkConfigObj);
    }

    INC.methods.irbReq_category_based = function(productId, _bundleCount, elementName) {
        var apiKey = INC.config.clientToken;
        var irbPATH = "//rapidload.increasingly.co/increasingly_bundles?irb/";
        var irbReqParams = "product_ids=" + "&category_id=" + btoa(productId) + "&api_key=" + apiKey + "&client_id=" + "&page_type=" + elementName + "&client_visitor_id=" + INC.config.ivid;

        if (INC.debug)
            // console.log(irbReqParams);
        var irbReqURL1 = decodeURI(irbPATH + btoa(irbReqParams));
        var networkConfigObj = new INC.classes.NWConfig();
        networkConfigObj["url"] = irbReqURL1;

        var xhr = new XMLHttpRequest();
        xhr.open("GET", networkConfigObj["url"], true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status === 200) {
                if (xhr.response != "") {
                    INC.dataStore.methods().buildDataStoreObj(JSON.parse(xhr.response));
                }
            }
        }

        xhr.send(JSON.stringify(networkConfigObj["params"]));

    }

    INC.methods.refreshBundles = function(nwConfigObj) {
        var incDataStore = INC.dataStore;
        INC.methods.networkReq(nwConfigObj, function(response) {
            if (response.length == 0)
                return;
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
                if (sidebar_configurator_id.indexOf(INC.config.Product_id) >= 0) {
                    if (INC.config.pageType == "pdp") {
                        INC.dataStore.methods().buildDataStoreObj(bundleResponse, 'configurator');
                    }
                } else {
                    INC.dataStore.methods().buildDataStoreObj(bundleResponse);
                }
                if ((incDataStore.dataStoreObj == null) || (incDataStore.dataStoreObj == undefined))
                    return;
                switch (INC.config.pageType) {
                case "pdp":
                    INC.methods.createPDPBlock();
                    break;
                case "cartPage":
                    INC.methods.createAMBlock();
                    break;
                case "productList":
                    sidebar_configurator_id = []
                    INC.methods.createSidebarBlock();
                    INC.methods.showSidebar();
                    break;
                }
            } else if (Object.prototype.hasOwnProperty.call(responseJSON, "CategoryRecommendations") && (responseJSON.CategoryRecommendations.length > 0)) {
                responseJSON.timeStamp = Date.now();
                INC.config.recommendation = true
                INC.dataStore.methods().buildDataStoreObj(bundleResponse);
                if ((incDataStore.dataStoreObj == null) || (incDataStore.dataStoreObj == undefined))
                    return;

                if (INC.config.pageType == "pdp") {
                    INC.methods.createAMBlock("PDP")
                }
            }
        });
    }
    INC.methods.irbReq_is_tc = function(productIds, bundleCount, elementNameel,configurator) {
        var elementName = elementNameel || "";
        var productId = productIds;
        var apiKey = INC.config.clientToken;
        var bundleReqCount = bundleCount || 5;
        // if(readCookie('ivid') == '07099fde5b89b5a3a31a8b5cff9cd6db83cab6fc1d'){
            if (sidebar_configurator_id.indexOf(productId) >= 0) {
                bundleReqCount = 30
            }
        // }
        var irbPATH = "//rapidload.increasingly.co/increasingly_bundles?irb/";
        var irbReqParams = "product_ids=" + productId + "&category_id=" + "&api_key=" + apiKey + "&client_id=" + "&page_type=" + elementName + "&fr=" + "1" + "&client_visitor_id=" + INC.config.ivid + "&no_of_bundles=" + bundleReqCount;
 		
 		// if(readCookie('ivid') == '07099fde5b89b5a3a31a8b5cff9cd6db83cab6fc1d'){
 			if (sidebar_configurator_id.indexOf(productId) >= 0) {
	            irbReqParams = irbReqParams + "&bt=23&is_tc=1";
	        } else {
	            irbReqParams = irbReqParams + "&is_tc=1";
	        }
 		// }else{
 		// 	irbReqParams = irbReqParams + "&is_tc=1";
 		// }
        

        var irbReqURL1 = decodeURI(irbPATH + btoa(irbReqParams));
        var networkConfigObj = new INC.classes.NWConfig();
        networkConfigObj["url"] = irbReqURL1;
        var xhr = new XMLHttpRequest();
        xhr.open("GET", networkConfigObj["url"], true);
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status === 200) {
                if (xhr.response != "") {
                    if(configurator == "configurator"){
                        var responseJSONt = ""
                        if (typeof(response) != "object") {
                            responseJSONt = JSON.parse(xhr.response);
                        } 
                        var bundleResponset = responseJSONt;
                       
                        INC.dataStore.methods().buildDataStoreObj(bundleResponset,'configurator');
                        setTimeout(function(){
                            cb_tc(JSON.parse(xhr.response));
                        },200)
                    }else if (INC.config.pageType == "pdp") {
                        cb_tc(JSON.parse(xhr.response));
                    }
                }
            }
        }
        xhr.send(JSON.stringify(networkConfigObj["params"]));
    }
    INC.methods.get_product_ratings = function(filed3, field2, rating_containers) {
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
    INC.methods.getProductIdFromWebPage = function() {
        var product_id = '';
        if (document.querySelector('.product-summary #product-code') != null) {
            product_id = document.querySelector('.product-summary #product-code').innerText
        } else if (document.querySelector('.product.attribute.sku .value') != null) {
            product_id = document.querySelector('.product.attribute.sku .value').innerText
        } else if (document.querySelector('.trustpilot-widget[data-sku]') != null && document.querySelector('.trustpilot-widget[data-sku]').getAttribute('data-sku') != null) {
            product_id = document.querySelector('.trustpilot-widget[data-sku]').getAttribute('data-sku')
        }
        INC.config.Product_id = product_id
        return product_id;
    }

    INC.methods.detectPageType = function() {
        if (document.querySelector('.product.data.items') != null)
            return "pdp";
        if (document.querySelector('.catalog-category-view') != null)
            return "productList";
        if (document.querySelector('.catalogsearch-result-index') != null)
            return "productList";
        if (document.querySelector('#product-tabs-container') != null)
            return "pdp";
        if (document.querySelector(".cart-container") != null)
            return "cartPage";

    }
    INC.methods.showSidebar = function() {

        if (document.querySelector('.inc_sidebar_modal_block') != null) {
            if (document.querySelector('.inc_sidebar_modal_block .inc_product_module_block') != null) {
                if (document.querySelector('.inc_cart_added_product_desc_title_text') != null && document.querySelector('.inc_cart_added_product_desc_title_text').innerText == "undefined")
                    return;
                if (document.querySelector('.sidebar_outer') != null) {
                    var elSidebarOverlay = document.querySelector(".inc_sidebar_overlay_block");
                    if (elSidebarOverlay != null) {
                        elSidebarOverlay.style.display = "block";
                    }
                    document.querySelector('.sidebar_outer').style.display = "block"
                    document.querySelector('.inc_sidebar_modal_block').style.display = "block"
                    document.querySelector('.inc_sidebar_modal_block').classList.add('inc_active')
                    document.querySelector('.sidebar_outer').classList.add('sidebar_outer_active')
                }
            } else {
                setTimeout(function() {
                    window.location.href = INC.clientConfig.checkoutLink;
                }, 200)

            }
        }
        if (document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block') != null) {
            document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block').classList.remove('inc_loading');
        }

        if (INC.config.pageType != "productList") {
            document.querySelector('html').classList.add('inc_overlay');
        }

    }

    INC.methods.hideSidebar = function() {
        INC.config.sidebarremovedprod = []
        document.querySelector('html').style = '';
        document.querySelector('html').classList.remove('inc_overlay')
        document.querySelector('body').classList.remove('inc_popup_open');
        if (document.querySelector('.sidebar_outer') != null) {
            document.querySelector('.inc_sidebar_modal_block').style.display = "none"
            document.querySelector('.sidebar_outer').style.display = "none"
            document.querySelector('.sidebar_outer').classList.remove('sidebar_outer_active')
            document.querySelector('.inc_sidebar_modal_block').classList.remove('inc_active')
        }

        setTimeout(function() {
            var allchecked = document.querySelectorAll('.inc_pdp_bundle_product_list_main_block .inc_product_showcase_block .inc_product_desc_add_img.checked')
            for (var alcheckp of allchecked) {
                if (alcheckp != undefined) {
                    alcheckp.click()
                }
            }
            INC.config.pdpaddedProductList = Object.keys(INC.dataStore.bundleCartProducts)
            if (document.querySelector('.sidebar_outer') != null) {// remsidebarelm()
            }
            if (document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block') != null) {
                document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block').classList.remove('is_special_ecirp');
            }
        }, 30)

        if (INC.config.pageType == "pdp") {
            if (document.querySelector('.inc_pdp_block') != null) {
                INC.dataStore["bundleCartProducts"] = {};
                INC.config.pdpaddedProductList = [];
                INC.config.bundle_tracking = [];
                INC.config.bundle_skuPushed = [];
                INC.config.dupBasket = [];
                INC.config.sidebarremovedprod = [];
            }
        } else {
            INC.methods.clear()
        }
        setTimeout(function() {
            window.location.reload();
        }, 50)
    }
    INC.methods.createAMBlock = function(PDP_type) {
        if(INC.config.pageType=="pdp"){
            document.querySelector('body').classList.add('inc_bundles');
        }
        if (INC.dataStore.dataStoreObj.undefined == undefined) {
            document.querySelector('html').classList.add('inc-prevent-hor-scroll');
            var amBlock = generate_html_tag('div', 'inc_af_block')
            amBlock.classList.add('af_cart_page')
            amBlock.innerHTML = cart_html
            if (document.querySelector('.o-navigation__bag .a-bag-count') != null) {
                var totalbagcountside = document.querySelector('.o-navigation__bag .a-bag-count').innerText
                if (totalbagcountside == 0) {
                    amBlock.style.display = "none"
                }
            }
            if (INC.config.pageType == "productList") {
                amBlock.classList.add('inc_best_sellers')
                amBlock.setAttribute('id', 'inc_best_sellers')
            }

            amBlock.querySelector(".inc_af_product-list_block").innerHTML = "";
            var elAmTitleText = amBlock.querySelector(".inc_af_title_text_block")
            if (PDP_type == "PDP" || PDP_type == "productList") {
                elAmTitleText.innerText = "Other customers also viewed";
            }
            var amProductListBlock = amBlock.querySelector(".inc_af_product-list_block");
            var bundleProductsArray = "";
            var tr1 = true
            if (INC.config.recommendation == tr1) {
                bundleProductsArray = INC.config.recommendationProduct;
            } else {
                bundleProductsArray = INC.dataStore.bundleProductsArray;
            }

            if (INC.config.pageType == "pdp") {
                if (INC.dataStore.bundleProductsArray.indexOf(INC.config.Product_id) == -1)
                    INC.dataStore.bundleProductsArray.push(INC.config.Product_id)
                INC.config.cartproductids = []
            }
            var duplamid = []
            
            let addedCartProduct = 0
            if (PDP_type == "PDP") {
                bundleProductsArray.forEach(function(mainProductId) {
                    if (duplamid.indexOf(mainProductId) == -1) {
                        duplamid.push(mainProductId)
                        amProductListBlock.appendChild(INC.methods.createProductModuleBlock(mainProductId, "am", false, amBlock));
                        elAmTitleText.innerText = "Best Selling Similar Products";
                        addedCartProduct++
                    }
                });
            } else {
                
                bundleProductsArray.forEach(function(mainProductId) {
                    if (duplamid.indexOf(mainProductId) == -1) {
                        duplamid.push(mainProductId)
                        if (INC.config.cartproductids.indexOf(mainProductId) == -1) {
                            var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({
                                mainId: mainProductId
                            });
                            var prd_module = INC.methods.createProductModuleBlock(firstProductObjByMainId.id, "am", false, amBlock);
                            if (prd_module.getAttribute('data-id') != "undefined") {
                                amProductListBlock.appendChild(prd_module);
                                if (INC.config.pageType == "productList") {
                                    elAmTitleText.innerText = "Best Sellers";
                                } else {
                                    elAmTitleText.innerText = "Customers also bought";
                                }
                            }
                            addedCartProduct++
                        }
                    }
                });
            }

            if (addedCartProduct == 0) return
            var amProductBlocks = amBlock.querySelectorAll('.inc_product_block');
            Array.prototype.forEach.call(amProductBlocks, function(productBlock) {
                productBlock.querySelector('.inc_product_desc_add_block').addEventListener("click", function() {
                    addprodsingle('delivery', this)
                });
                productBlock.querySelector('.inc_product_add_collection_block').addEventListener("click", function() {
                    addprodsingle('collection', this)
                });
            });

            var prod_sl_c = 1
            if (amBlock != null) {
                Array.prototype.forEach.call(document.querySelectorAll('.inc_af_block'), function(el) {
                    el.parentNode.removeChild(el);
                });
            }
            var trflg = true
            var elAMPosition2 = document.querySelectorAll('.pagination.clearfix')[2];
            var elAMPosition = document.querySelector('.category-description');
            var elAMPositionMain = document.querySelector('#maincontent');
            var elAMPosition3 = document.querySelector('.newsletter-wrapper');
            var pdpBlockSibling = document.querySelector('#maincontent')

            if (INC.config.pageType == "productList" && bundleProductsArray.length > 0) {
                amBlock.setAttribute('style', 'margin: auto;')
                if (elAMPositionMain != null) {
                    elAMPositionMain.appendChild(amBlock);
                } else if (elAMPosition2 != null) {
                    elAMPosition2.appendChild(amBlock);
                } else if (elAMPosition3 != null) {
                    elAMPosition3.appendChild(amBlock);
                }
            } else if (INC.config.recommendation == trflg) {
                if (window.innerWidth > 810) {
                    if (document.querySelector('.product.data.items') != null && document.querySelector('.data.item.title')!=null) {
                        pdpBlockSibling = document.querySelector('.data.item.title')
                        pdpBlockSibling.parentNode.insertBefore(amBlock, pdpBlockSibling);
                    }
                    
                } else {
                    if (document.querySelector('.product-info__right').nextElementSibling != null) {
                        if(document.querySelector('.product-info__right').nextElementSibling.nextElementSibling!=null){
                            pdpBlockSibling = document.querySelector('.product-info__right').nextElementSibling.nextElementSibling
                        pdpBlockSibling.parentNode.insertBefore(amBlock, pdpBlockSibling);
                        }else{
                            pdpBlockSibling = document.querySelector('.product-info__right').nextElementSibling
                        pdpBlockSibling.parentNode.insertBefore(amBlock, pdpBlockSibling);
                        }
                    }
                }
            } else {
                if (window.innerWidth > 810) {
                    if (bundleProductsArray.length > 0) {
                        if (window.innerWidth > 1367) {
                            elAMPosition = document.querySelector('#maincontent');
                            elAMPosition.appendChild(amBlock);
                        } else {
                            elAMPosition = document.querySelector('main#maincontent .column');
                            elAMPosition.appendChild(amBlock);
                        }
                    }
                } else {
                    if(window.innerWidth<810){
                        elAMPosition = document.querySelector('.cart-container');
                        elAMPosition.parentNode.insertBefore(amBlock, elAMPosition.nextElementSibling)

                    }else{
                        elAMPosition = document.querySelector('.page-footer');
                        elAMPosition.parentNode.insertBefore(amBlock, elAMPosition)
                    }
                }
            }
            amBlock.querySelector('.inc_af_right_btn_block').style.visibility = "hidden";
            amBlock.querySelector('.inc_af_right_btn_img').style.visibility = "hidden";
            amBlock.querySelector('.inc_af_left_btn_block').style.visibility = "hidden";
            amBlock.querySelector('.inc_af_left_btn_img').style.visibility = "hidden";
            var productBlocks = amProductListBlock.querySelectorAll('.inc_product_module_block');
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
                //debugger
                if(INC.config.pageType == "pdp"){
                    cc_ount=3
                }
                else if(INC.config.pageType == "productList"){
                    cc_ount=4
                }
                else if(INC.config.pageType == "cartPage"){
                    cc_ount = 5
                }
                
            }
            if (productBlocks.length <= cc_ount) {
                amBlock.querySelector('.inc_af_right_btn_block').style.visibility = "hidden";
                amBlock.querySelector('.inc_af_right_btn_img').style.visibility = "hidden";
                amBlock.querySelector('.inc_af_left_btn_block').style.visibility = "hidden";
                amBlock.querySelector('.inc_af_left_btn_img').style.visibility = "hidden";
            }
            amBlock.querySelector('.inc_af_right_btn_block').addEventListener("click", function() {
                sliderBtnCounter++;
                if (sliderBtnCounter > productBlocks.length - 1) {
                    sliderBtnCounter--;
                }
                var all_p_length = document.querySelectorAll('.inc_af_product-list_block .inc_product_module_block').length
                var cc_ounts = 1;
                if (window.innerWidth > 768) {
                    if(INC.config.pageType == "pdp" ){
                    cc_ounts=3
                }
                else if(INC.config.pageType == "productList"){
                    cc_ounts=4
                }
                else if(INC.config.pageType == "cartPage"){
                    cc_ounts = 5
                }
                }
                var width_slide = ""
                if (INC.config.pageType == "pdp" || INC.config.pageType == "productList") {
                    if (window.innerWidth > 1280) {
                        width_slide = 264;
                    } else {
                        width_slide = 252
                    }

                } else {
                    width_slide = 255
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
                    if (document.querySelectorAll('.inc_af_product-list-dots-main_block .inc_dots')[+INC.clientConfig.slidevalue] != null)
                        document.querySelectorAll('.inc_af_product-list-dots-main_block .inc_dots')[+INC.clientConfig.slidevalue].classList.add('inc_active')
                }

                if (+INC.clientConfig.slidevalue + +cc_ounts == all_p_length) {
                    amBlock.parentNode.parentNode.querySelector('.inc_af_right_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                    amBlock.parentNode.parentNode.querySelector('.inc_af_right_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
                }
            });

            amBlock.querySelector('.inc_af_left_btn_block').addEventListener("click", function() {
                sliderBtnCounter--;
                if (sliderBtnCounter == -1)
                    sliderBtnCounter = 0;
                if (INC.clientConfig.slidevalue == -1)
                    INC.clientConfig.slidevalue = 0;
                var width_slide = ""
                if (INC.config.pageType == "pdp" || INC.config.pageType == "productList") {
                    if (window.innerWidth > 1280) {
                        width_slide = 264;
                    } else {
                        width_slide = 252
                    }
                } else {
                    width_slide = 255
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
                    if (document.querySelectorAll('.inc_af_product-list-dots-main_block .inc_dots')[+INC.clientConfig.slidevalue] != null)
                        document.querySelectorAll('.inc_af_product-list-dots-main_block .inc_dots')[+INC.clientConfig.slidevalue].classList.add('inc_active')
                }
                if (INC.clientConfig.slidevalue == 0) {
                    amBlock.parentNode.parentNode.querySelector('.inc_af_left_btn_block').setAttribute("style", "pointer-events: none;opacity:0.5");
                    amBlock.parentNode.parentNode.querySelector('.inc_af_left_btn_img').setAttribute("style", "pointer-events: none;opacity:0.5");
                }
            });
            setTimeout(function() {
                var all_list_el = document.querySelectorAll('.inc_af_product-list_block .inc_product_showcase_block')
                for (var all_list of all_list_el) {
                    if (all_list.querySelector('.inc_product_desc_att_zero_block.inc_active') != null) {
                        var prd_moduleb = all_list.parentNode
                        var main_idsd = prd_moduleb.getAttribute('data-main_id')
                        if (prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="' + main_idsd + '"]') != null) {
                            if (prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="' + main_idsd + '"] .inc_product_desc_att_size_list_item_img_block') != null) {
                                prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="' + main_idsd + '"] .inc_product_desc_att_size_list_item_img_block').click()
                            } else if (all_list.querySelector('.inc_product_desc_att_size_list_item_img_block') != null) {
                                all_list.querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                            }
                        } else if (all_list.querySelector('.inc_product_desc_att_size_list_item_img_block') != null) {
                            all_list.querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                        }
                    }
                }
                onloadpdp = true
            }, 400)
            setTimeout(function() {
                var inc_prod_img = document.querySelectorAll('.inc_product_img_main_img img')
                for (var i_prd_image of inc_prod_img) {
                    if (i_prd_image) {
                        i_prd_image.setAttribute('style', 'left:0 !important;position: relative;')
                    }
                }
            }, 2000)
        }

        if (document.querySelector('.inc_af_block') != null) {
            if (INC.config.pageType == "cartPage") {
                document.querySelector('.inc_af_block').classList.add('af_cart_page')
            } else if (INC.config.pageType == "pdp") {
                document.querySelector('.inc_af_block').classList.add('inc_recommendations')
            }
        }
    }
    INC.methods.createPDPBlock = function(sidebar) {
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
        var tr_ch = false;
        if (sidebar != "sidebar") {
            if (INC.dataStore.dataStoreObj.undefined != undefined || empty_sidebarflag == tr_ch) {
                var pdpBlock = generate_html_tag('div', 'inc_pdp_block')
                pdpBlock.innerHTML = pdp_html
                pdpBlock.setAttribute('style', 'clear: both;')
                if (document.querySelector('body').classList.contains('delivery-branch-selected-false'))
                    pdpBlock.style.display = "none"
                var modalTitle = pdpBlock.querySelector('.inc_pdp_title_text');
                modalTitle.innerText = INC.config.FBTTitle
                if (document.querySelector('.js-right-column-section .elc-service-view-renderer[data-rendered-view="product-notify-me"] .elc-product-notify-me-button') != null) {
                    pdpBlock.style.display = "none"
                }
                var pdpProductId = INC.dataStore.methods().getFirstProductObjByMainId({
                    mainId: INC.dataStore.pdpProductId
                }).id;

                ////////pricemismatch start
                //debugger
                var findObj = new INC.classes.FindObj({
                    id: pdpProductId
                });
                var productObj = INC.dataStore.methods().getProductById(findObj);

                var clientPrice = null;
                var clientSpPrice = null;

                if (document.querySelector('.special-price .price-including-tax span.price') != null) {
                    if(INC.clientConfig.statusVAT==true){
                        clientSpPrice = document.querySelector('.special-price .price-including-tax span.price').innerText.replace("£", "").replace(",", "").trim()
                    }
                    else if(INC.clientConfig.statusVAT==false && document.querySelector('.special-price .price-excluding-tax span.price')){
                        clientSpPrice = document.querySelector('.special-price .price-excluding-tax span.price').innerText.replace("£", "").replace(",", "").trim()
                    }
                    

                } else {
                    if (document.querySelector('.product-price.box .price-including-tax span.price') != null) {
                        clientSpPrice = document.querySelector('.product-price.box .price-including-tax span.price').innerText.replace("£", "").replace(",", "").trim()
                    } else if (document.querySelector('.product-info-price-box .price-including-tax span.price') != null) {
                        clientSpPrice = document.querySelector('.product-info-price-box .price-including-tax span.price').innerText.replace("£", "").replace(",", "").trim()
                    }
                    // else if(document.querySelector('.price-wrapper span.price') != null){
                    //     clientSpPrice = document.querySelector('.price-wrapper span.price').innerText.replace("£","").replace(",","").trim()
                    // }
                }
                if (document.querySelector('.product-price.box .price-including-tax span.price') != null) {
                    clientPrice = document.querySelector('.product-price.box .price-including-tax span.price').innerText.replace("£", "").replace(",", "").trim()
                }else if(INC.clientConfig.statusVAT==true  && document.querySelector('.price-box.price-final_price .price-wrapper.price-including-tax .price')!=null){
                    clientPrice = document.querySelector('.price-box.price-final_price .price-wrapper.price-including-tax .price').innerText.replace("£", "").replace(",", "").trim()
                }else if(INC.clientConfig.statusVAT==false  && document.querySelector('.price-box.price-final_price .price-wrapper.price-excluding-tax .price')!=null){
                    clientPrice = document.querySelector('.price-box.price-final_price .price-wrapper.price-excluding-tax .price').innerText.replace("£", "").replace(",", "").trim()
                } 
                if(clientSpPrice!= null && clientPrice.includes(clientSpPrice)){
                    if(INC.clientConfig.statusVAT==true && document.querySelector('.old-price .price-including-tax span.price')!= null){
                        clientPrice = document.querySelector('.old-price .price-including-tax span.price').innerText.replace("£", "").replace(",", "").trim()
                    }
                    else if(INC.clientConfig.statusVAT==false && document.querySelector('.old-price .price-excluding-tax span.price')!= null){
                        clientPrice = document.querySelector('.old-price .price-excluding-tax span.price').innerText.replace("£", "").replace(",", "").trim()
                    }
                }  
                if (clientSpPrice != null) {
                    var pricecheck = clientSpPrice
                } else {
                    clientSpPrice=clientPrice
                    var pricecheck = clientPrice
                }
                if (productObj.activePrice != null && productObj.activePrice != productObj.regularPrice) {
                    var incpricecheck = productObj.activePrice
                } else {
                    var incpricecheck = productObj.regularPrice
                }
                if((clientSpPrice!=null)&& parseFloat(clientSpPrice)!=parseFloat(clientPrice)){
                    var incpricecheck = productObj.activePrice
                }
                //console.log(Number(incpricecheck) + "+" + Number(pricecheck))
                if (parseFloat(incpricecheck) != parseFloat(pricecheck)) {
                    incPriceMismatch(productObj.activePrice, productObj.regularPrice, clientPrice, clientSpPrice)
                    INC.bundles = false;
                    return;
                }
                // pricecheck = clientPrice
                // incpricecheck = productObj.regularPrice
                // if (parseFloat(incpricecheck) != parseFloat(pricecheck)) {
                //     incPriceMismatch(productObj.activePrice, productObj.regularPrice, clientPrice, clientSpPrice)
                //     INC.bundles = false;
                //     return;
                // }
                ////////pricemismatch end

                var firstProductObjByMainId = ''
                var pdpBundleProductListMainBlock = null;
                var mainProductBlock = this.createProductModuleBlock(pdpProductId, "pdp", false, pdpBlock, "mainprod");
                mainProductBlock.setAttribute('b-index', 0)
                var bundleProductsArray = INC.dataStore.bundleProductsArray;
                var elPdpMainProductBlock = pdpBlock.querySelector('.inc_pdp_product-main_block');
                var mainprodtitletexts = elPdpMainProductBlock.querySelector('.mainprodtitletext');
                if (mainprodtitletexts != undefined) {
                    mainprodtitletexts.innerText = "This Item"
                }
                elPdpMainProductBlock.appendChild(mainProductBlock);
                pdpBundleProductListMainBlock = pdpBlock.querySelector('.inc_pdp_bundle_product_list_main_block');
                pdpBundleProductListMainBlock.innerHTML = "";
                var pdpBundleProductListItemsBlock = pdpBlock.querySelector('.inc_pdp_bundle_product_list_items_block');
                pdpBundleProductListItemsBlock.innerHTML = "";
                var productVisibleCount = 1;
                if (bundleProductsArray.length > 1) {
                    productVisibleCount = 2;
                }
                for (var i = 0; i < productVisibleCount; i++) {
                    firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({
                        mainId: bundleProductsArray[i]
                    });
                    var productBlock = this.createProductModuleBlock(firstProductObjByMainId.id, "pdp", true, pdpBlock);
                    productBlock.setAttribute('b-index', i+1)
                    pdpBundleProductListMainBlock.appendChild(productBlock);
                    var productListItemBlock = this.createProductListItemBlock(firstProductObjByMainId, "pdp");
                    pdpBundleProductListItemsBlock.appendChild(productListItemBlock);

                }
                var header = pdpBlock.querySelector('.inc_pdp_bundle_product_header_text');
                if (header != null) {
                    header.innerText = ""
                    header.style.textTransform = "none"
                }
                pdpBlock.querySelector('.inc_pdp_bundle_product_list_items_block').classList.add("inc_active");
                var pdpBundleCartBlock = this.createPDPBundleCartBlock(pdpBlock);
                var rpdpBundleCartBlock = pdpBlock.querySelector('.inc_pdp_bundle_cart_block')
                rpdpBundleCartBlock.parentNode.removeChild(rpdpBundleCartBlock);
                pdpBlock.querySelector('.inc_pdp_bundle_block').appendChild(pdpBundleCartBlock);

                INC.methods.clear();
                //debugger
                //pdpBlock.setAttribute('style', 'display: "";')
                var pdpBlockSibling = document.querySelector('#maincontent')
                if (window.innerWidth > 810) {
                    if (document.querySelector('.product.data.items') != null && document.querySelector('.data.item.title')!=null) {
                        pdpBlockSibling = document.querySelector('.data.item.title')
                        pdpBlockSibling.parentNode.insertBefore(pdpBlock, pdpBlockSibling);
                    }
                    
                } else {
                    if (document.querySelector('.product-info__right').nextElementSibling != null && document.querySelector('.product-info__right').nextElementSibling.nextElementSibling != null) {
                        pdpBlockSibling = document.querySelector('.product-info__right').nextElementSibling.nextElementSibling
                        pdpBlockSibling.parentNode.insertBefore(pdpBlock, pdpBlockSibling);
                    }
                    else if (document.querySelector('.product.data.items') != null) {
                        pdpBlockSibling = document.querySelector('.product.data.items')
                        pdpBlockSibling.parentNode.insertBefore(pdpBlock, pdpBlockSibling);
                    }
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
                    pdpBlock.querySelector('.inc_pdp_bundle_product_right-btn_block').addEventListener("click", function() {
                        var prod_c = 1;
                        var width_prod = 256;
                        if (window.innerWidth >= 840 && window.innerWidth < 1190) {
                            width_prod = 266;
                        } else if (window.innerWidth > 1189) {
                            prod_c = 2
                            if (window.innerWidth > 1368) {
                                width_prod = 306;
                            } else {
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
                    pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_block').addEventListener("click", function() {
                        var width_prod = 256;
                        if (window.innerWidth >= 840 && window.innerWidth < 1190) {
                            width_prod = 266;
                        } else if (window.innerWidth > 1189) {
                            if (window.innerWidth > 1368) {
                                width_prod = 306;
                            } else {
                                width_prod = 276;
                            }
                        }
                        if (INC.clientConfig.slidevalue == -1)
                            INC.clientConfig.slidevalue = 0;
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
                        if (sliderBtnCounter == -1)
                            sliderBtnCounter = 0;
                    });
                }
                if ((productBlocks.length <= prd_length)) {
                    pdpBlock.querySelector('.inc_pdp_bundle_product_right-btn_block').style.visibility = "hidden";
                    pdpBlock.querySelector('.inc_pdp_bundle_product_left-btn_block').style.visibility = "hidden";
                }
                setTimeout(function() {
                    for (var n = 0; n < 8; n++) {
                        if (typeof (elProductAddBlock[n]) != "undefined" && n % 2 != 0) {
                            if (n == 1 || n == 3 || n == 5) {
                                elProductAddBlock[n].click();
                            }
                        }
                    }
                }, 100)
                setTimeout(function() {
                    var client_var = ""
                    if (window.innerWidth < 821) {
                        if (document.querySelector('.js-size-picker-label p') != null) {
                            client_var = document.querySelector('.js-size-picker-label p').innerText.trim().toLocaleLowerCase()
                        } else if (document.querySelector('.js-size-picker-dropdown input[data-test-id="product_size_dropdown"]') != null) {
                            client_var = document.querySelector('.js-size-picker-dropdown input[data-test-id="product_size_dropdown"]').value
                        }
                        var elshowcase = document.querySelectorAll('.inc_pdp_product-main_block .inc_product_showcase_block')
                        for (var shel of elshowcase) {
                            if (shel.querySelector('.inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block[datasize="' + client_var + '"]') != undefined) {
                                shel.querySelector('.inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block[datasize="' + client_var + '"]').click()
                            } else if (shel.querySelector('.inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block') != undefined) {
                                shel.querySelector('.inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block').click()
                            }
                        }
                    } else {
                        if (document.querySelector('.js-size-picker-label p') != null) {
                            client_var = document.querySelector('.js-size-picker-label p').innerText.trim().toLocaleLowerCase()
                        } else if (document.querySelector('.js-size-picker-dropdown input[data-test-id="product_size_dropdown"]') != null) {
                            client_var = document.querySelector('.js-size-picker-dropdown input[data-test-id="product_size_dropdown"]').value
                        }
                        if (document.querySelector('.inc_pdp_product-main_block .inc_product_showcase_block .inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block[datasize="' + client_var + '"]') != undefined) {
                            document.querySelector('.inc_pdp_product-main_block .inc_product_showcase_block .inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block[datasize="' + client_var + '"]').click()
                        } else if (document.querySelector('.inc_pdp_product-main_block .inc_product_showcase_block .inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block') != undefined) {
                            document.querySelector('.inc_pdp_product-main_block .inc_product_showcase_block .inc_product_desc_att_zero_block .inc_product_desc_att_size_list_item_img_block').click()
                        }
                    }
                    var client_varc = ""
                    if (document.querySelector('.js-product-shades-view-button') != null) {
                        client_varc = document.querySelector('.js-product-shades-view-button').innerText.trim().toLocaleLowerCase()
                    }
                    var el_all_list_main1 = document.querySelectorAll('.inc_pdp_product-main_block .inc_product_showcase_block')
                    for (var main_list of el_all_list_main1) {
                        if (main_list.querySelector('.inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + client_varc + '"] div') != null) {
                            main_list.querySelector('.inc_product_desc_att_color_block .inc_product_desc_att_color_list_item_img_block[datacolor="' + client_varc + '"] div').click()
                        }
                    }
                    var all_list_el = document.querySelectorAll('.inc_pdp_bundle_product_list_block .inc_product_showcase_block');
                    for (var ell of all_list_el) {
                        if (ell.querySelector('.inc_product_desc_att_zero_block.inc_active') != null) {
                            var clrtext = ""
                            if (document.querySelector('.js-size-picker-label p') != null) {
                                clrtext = document.querySelector('.js-size-picker-label p').innerText.trim().toLocaleLowerCase()
                            }
                            var prd_moduleb = ell.parentNode
                            var main_idsd = prd_moduleb.getAttribute('data-main_id')
                            if (prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="' + main_idsd + '"]') != null) {
                                if (prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="' + main_idsd + '"] .inc_product_desc_att_size_list_item_img_block') != null) {
                                    prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="' + main_idsd + '"] .inc_product_desc_att_size_list_item_img_block').click()
                                } else if (ell.querySelector('.inc_product_desc_att_size_list_item_img_block[datasize="' + clrtext + '"] div') != undefined) {
                                    ell.querySelector('.inc_product_desc_att_size_list_item_img_block[datasize="' + clrtext + '"] div').click()
                                } else if (ell.querySelector('.inc_product_desc_att_size_list_item_img_block') != null) {
                                    ell.querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                                }
                            } else if (ell.querySelector('.inc_product_desc_att_size_list_item_img_block[datasize="' + clrtext + '"] div') != undefined) {
                                ell.querySelector('.inc_product_desc_att_size_list_item_img_block[datasize="' + clrtext + '"] div').click()
                            } else if (ell.querySelector('.inc_product_desc_att_size_list_item_img_block') != null) {
                                ell.querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                            }
                        }
                    }
                }, 200)
                setTimeout(function() {
                    onloadpdp = true
                    onloadpdp_delete = true
                    var inc_prod_img = document.querySelectorAll('.inc_product_img_main_img img')
                    for (var pr_img of inc_prod_img) {
                        if (pr_img) {
                            pr_img.setAttribute('style', 'left:0 !important;position: relative;')
                        }
                    }
                }, 2000)
            }
        }
        if (sidebar == "sidebar") {
            this.createSidebarBlock();
        }
    }
    INC.methods.createPDPBundleCartBlock = function(pdpBlock) {
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
        if (elBundleCartAddBtnBlock != null) {
            elBundleCartAddBtnBlock.addEventListener("click", function() {
                addbundlefn_('delivery', this)
            });
        }
        if (elBundleCartAddBtncollectionBlock != null) {
            elBundleCartAddBtncollectionBlock.addEventListener("click", function() {
                addbundlefn_('collection', this)
            });
        }
        return pdpBundleCartBlock;
    }
    function addbundlefn_(typeadd, elm) {
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
        var tf = true
        if (INC.config.disablebtn == tf) {
            var btn_cart = elm
            INC.config.disablebtn = false
            btn_cart.classList.add('inc_loading')
            INC.methods.addBundleToCart(btn_cart, typeadd);
        }
    }
    INC.methods.createSidebarBlock = function() {
        var dataStore = INC.dataStore;
        var sidebar_dialoge_block = document.createElement('div')
        sidebar_dialoge_block.classList.add('sidebar_outer')
        sidebar_dialoge_block.innerHTML = sidebar_html
        var sbBlock = sidebar_dialoge_block.querySelector('.inc_sidebar_modal_block');

        sbBlock.querySelector(".inc_cart_added_list_block").innerHTML = "";

        if (document.querySelector('.sidebar_outer') != null) {
            document.querySelector('.sidebar_outer').parentNode.removeChild(document.querySelector('.sidebar_outer'))
        }

        if (document.querySelector('.inc_sidebar_overlay_block') != null) {
            document.querySelector('.inc_sidebar_overlay_block').parentNode.removeChild(document.querySelector('.inc_sidebar_overlay_block'));
        }

        var elHeaderContinueText = sbBlock.querySelector(".inc_header_continue_text");
        var elHeaderTitleText = sbBlock.querySelector(".inc_header_title_text");
        var elHeaderItemCountTitleText = sbBlock.querySelector(".inc_header_item_count_title_text");
        var elRecommendedTitleText = sbBlock.querySelector(".inc_recommended_title_text");
        var elRecommendedTabsListBlock = sbBlock.querySelector(".inc_recommended_tabs_list_block")
        var elRecommendedProductsListBlock = sbBlock.querySelector(".inc_recommended_products_list_block");
        var elCheckoutContinueBtnText = sbBlock.querySelector(".inc_checkout_continue_btn_text");
        var elheaditemblock = sbBlock.querySelector(".inc_header_item_block");
        var elheadtitleblock = sbBlock.querySelector(".inc_header_title_block");
        var elrecomendblock = sbBlock.querySelector(".inc_sidebar_recommended_block");

        elheaditemblock.addEventListener('click', function() {
            var cnt = document.querySelector('.inc_header_item_count_title_text').getAttribute('added_counts')
            var bt = true
            if (cnt >= 1) {
                if (document.querySelector('.inc_sidebar_cart_added_block').classList.contains('inc_active') == bt) {
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
        elHeaderTitleText.style.textTransform = "none"
        elHeaderTitleText.innerText = "Just added to your cart";

        if (dataStore.bundleCartProducts != undefined) {
            elHeaderItemCountTitleText.innerText = "Subtotal" + " " + "(" + Object.keys(dataStore.bundleCartProducts).length + " items)";

            if (sidebar_configurator_id.indexOf(INC.config.Product_id) >= 0) {
                elRecommendedTitleText.innerText = "You may need these to complete your project";
            } else {
                elRecommendedTitleText.innerText = INC.config.BeforeYouChecktext
            }
            elRecommendedTitleText.style.textTransform = "none"
            elCheckoutContinueBtnText.innerText = "Continue Shopping";
            var productCategoriesArray = dataStore.methods().getUniqueCatergories();
            var progress_bar_block = document.createElement('div')
            progress_bar_block.classList.add('inc_recommended_tabs_list_progressbar_block')
            progress_bar_block.classList.add('inc_progress_1')
            elRecommendedTabsListBlock.parentNode.insertBefore(progress_bar_block, elRecommendedTabsListBlock)
            elRecommendedTabsListBlock.innerHTML = "";
            elRecommendedProductsListBlock.innerHTML = "";
            var category_count = 0
            progress_bar_block.classList.add('inc_category_' + Object.keys(productCategoriesArray).length)//Object.keys(productCategoriesArray).length)

            productCategoriesArray.forEach(function(productCategory) {
                if (category_count < 8 && productCategory != undefined) {
                    category_count++
                    var sidebarTabsListItemBlock = generate_html_tag('div', 'inc_recommended_tabs_list_item_block')
                    var tablistitm = '<div class="inc_recommended_tabs_list_item_text_block"><div class="inc_recommended_tabs_list_item_text"></div></div>'
                    sidebarTabsListItemBlock.innerHTML = tablistitm
                    var sidebarTabsListItemText = sidebarTabsListItemBlock.querySelector('.inc_recommended_tabs_list_item_text');
                    sidebarTabsListItemText.parentNode.parentNode.setAttribute('title', productCategory)
                    sidebarTabsListItemText.innerText = productCategory.toLocaleLowerCase();
                    sidebarTabsListItemText.setAttribute('style', 'text-transform:capitalize;')
                    sidebarTabsListItemBlock.addEventListener("click", function() {
                        var elrecprdlistblk = sbBlock.querySelector(".inc_recommended_products_list_block")
                        if (elrecprdlistblk != null) {
                            elrecprdlistblk.innerHTML = "";
                        }
                        Array.prototype.forEach.call(elRecommendedTabsListBlock.querySelectorAll('.inc_recommended_tabs_list_item_block'), function(elTabsItemBlock) {
                            elTabsItemBlock.classList.remove("inc_active");
                        });
                        sidebarTabsListItemBlock.classList.add("inc_active");
                        INC.methods.updateSidebarProductsList(elrecprdlistblk, productCategory);
                    });
                    if (sidebar_configurator_id.indexOf(INC.config.Product_id) >= 0) {
                        var inc_progress_list_block = document.createElement('div');
                        inc_progress_list_block.classList.add('inc_progress_list_block')
                        progress_bar_block.appendChild(inc_progress_list_block);
                        var inc_progress_list_text = document.createElement('div');
                        inc_progress_list_text.innerText = productCategory;
                        inc_progress_list_text.classList.add('inc_progress_list_text')
                        inc_progress_list_block.appendChild(inc_progress_list_text);
                        inc_progress_list_block.setAttribute('index', category_count)
                        elRecommendedTabsListBlock.appendChild(sidebarTabsListItemBlock);

                        var category_progress_count_block = document.createElement('div')
                        category_progress_count_block.classList.add('category_progress_count_block')
                        var category_progress_count_text = document.createElement('div')
                        category_progress_count_text.classList.add('category_progress_count_text')
                        category_progress_count_text.innerText = category_count
                        if (category_count == 1) {
                            inc_progress_list_block.classList.add('inc_active')
                            inc_progress_list_block.classList.add('progress_show')
                        }
                        category_progress_count_block.appendChild(category_progress_count_text)
                        inc_progress_list_text.parentNode.insertBefore(category_progress_count_block, inc_progress_list_text)
                        if (productCategory != "") {
                            elRecommendedTabsListBlock.appendChild(sidebarTabsListItemBlock);
                        }
                    } else {
                        elRecommendedTabsListBlock.setAttribute('tabindex', 0)
                        elRecommendedTabsListBlock.appendChild(sidebarTabsListItemBlock);
                    }
                }
            });
            if (elRecommendedTabsListBlock.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                elRecommendedTabsListBlock.querySelector('.inc_recommended_tabs_list_item_block').click();
            } else {
                elRecommendedTitleText.style.display = "none";
            }
            var inc_next_previous_block = document.createElement('div')
            inc_next_previous_block.classList.add('inc_next_previous_block')
            inc_next_previous_block.style.marginBottom = "12px"
            var inc_previous_block = document.createElement('div')
            inc_previous_block.classList.add('inc_previous_block')
            inc_previous_block.innerText = "Previous"
            inc_previous_block.setAttribute("style", "pointer-events: none;opacity:0.5;");
            inc_previous_block.classList.add('inc_prev_disable')
            inc_next_previous_block.appendChild(inc_previous_block)

            var inc_next_block = document.createElement('div')
            inc_next_block.classList.add('inc_next_block')
            inc_next_block.innerText = "Next"
            inc_next_previous_block.appendChild(inc_next_block)

            var inc_click_checkout = document.createElement('div')
            inc_click_checkout.classList.add('inc_click_checkout')
            var elCheckoutLink = document.createElement('a');
            elCheckoutLink.href = INC.clientConfig.checkoutLink;
            elCheckoutLink.innerText = "View Cart"
            inc_click_checkout.appendChild(elCheckoutLink)
            inc_next_previous_block.appendChild(inc_click_checkout)

            elrecomendblock.appendChild(inc_next_previous_block)

            if (INC.dataStore.methods().getUniqueCatergories().length == 1) {
                inc_next_block.classList.add("inc_next_disable");
                inc_click_checkout.classList.add("inc_active");
            }

            inc_next_block.addEventListener('click', function() {
                document.querySelector('.inc_recommended_products_block').setAttribute('style', 'min-height: 170px;')
                var elnext = document.querySelector('.inc_recommended_tabs_list_progressbar_block')
                var elnextcurrentactive = elnext.querySelector('.inc_progress_list_block.inc_active')
                var activetab = document.querySelector(".inc_recommended_tabs_list_item_block.inc_active")
                if (elnextcurrentactive == null) {
                    if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                        if (elnext.querySelector('.inc_progress_list_block.inc_active') != null) {
                            elnext.querySelector('.inc_progress_list_block.inc_active').classList.remove('inc_active')
                        }
                        elnext.querySelector('.inc_progress_list_block').classList.add('progress_show')
                        elnext.querySelector('.inc_progress_list_block').classList.add('inc_active')
                        document.querySelector('.inc_recommended_tabs_list_item_block').click()
                    }
                } else if (elnextcurrentactive.nextElementSibling != null) {
                    if (elnextcurrentactive.nextElementSibling.innerText != "Checkout") {
                        if (activetab.nextElementSibling != null) {
                            activetab.nextElementSibling.click()
                        }
                    }
                    if (elnext.querySelector('.inc_progress_list_block.inc_active') != null) {
                        elnext.querySelector('.inc_progress_list_block.inc_active').classList.remove('inc_active')
                    }
                    elnextcurrentactive.nextElementSibling.classList.add('progress_show')
                    elnextcurrentactive.nextElementSibling.classList.add('inc_active')

                    document.querySelector('.inc_previous_block').setAttribute('style', '')
                    document.querySelector('.inc_previous_block').classList.remove('inc_prev_disable')
                    if (elnextcurrentactive.nextElementSibling.nextElementSibling == null) {
                        document.querySelector('.inc_next_block').classList.add('inc_next_disable')
                        document.querySelector('.inc_click_checkout').classList.add('inc_active')
                        document.querySelector('.inc_next_block').setAttribute('style', 'opacity:0.5;pointer-events: none;')
                    }
                    if (elnextcurrentactive.nextElementSibling.innerText == "Checkout") {
                        document.querySelector('.inc_next_block').classList.add('inc_next_disable')
                        document.querySelector('.inc_click_checkout').classList.add('inc_active')
                        document.querySelector('.inc_click_checkout').innerText = "Please click on checkout"
                        document.querySelector('.inc_next_block').setAttribute('style', 'opacity:0.5;pointer-events: none;')
                    }
                } else {
                    document.querySelector('.inc_next_block').classList.add('inc_next_disable')
                    document.querySelector('.inc_click_checkout').classList.add('inc_active')
                    document.querySelector('.inc_next_block').setAttribute('style', 'opacity:0.5;pointer-events: none;')
                }
                setTimeout(function() {
                    classaddconfigurator()
                })

                setTimeout(function() {
                    resetimageprop_()
                }, 500)
            });

            inc_previous_block.addEventListener('click', function() {
                document.querySelector('.inc_recommended_products_block').setAttribute('style', 'min-height: 170px;')
                var elprev = document.querySelector('.inc_recommended_tabs_list_progressbar_block')
                var elprevcurrentactive = elprev.querySelector('.inc_progress_list_block.inc_active')
                var activetab = document.querySelector(".inc_recommended_tabs_list_item_block.inc_active")
                if (elprevcurrentactive.previousElementSibling != null) {
                    if (elprevcurrentactive.innerText != "Checkout") {
                        if (elprev.querySelector('.inc_progress_list_block.inc_active') != null) {
                            elprev.querySelector('.inc_progress_list_block.inc_active').classList.remove('progress_show')
                            elprev.querySelector('.inc_progress_list_block.inc_active').classList.remove('inc_active')
                        }

                        elprevcurrentactive.previousElementSibling.classList.add('inc_active')
                        if (activetab.previousElementSibling != null) {
                            activetab.previousElementSibling.click()
                        }

                        document.querySelector('.inc_next_block').setAttribute('style', '')
                        if (elprevcurrentactive.previousElementSibling.previousElementSibling == null) {
                            document.querySelector('.inc_previous_block').setAttribute('style', 'opacity:0.5;pointer-events: none;')
                            document.querySelector('.inc_previous_block').classList.add('inc_prev_disable')
                            document.querySelector('.inc_next_block').classList.remove('inc_next_disable')
                            document.querySelector('.inc_click_checkout').classList.remove('inc_active')
                            document.querySelector('.inc_next_block').setAttribute('style', '')
                        }
                        if (elprevcurrentactive.previousElementSibling != null) {
                            document.querySelector('.inc_next_block').classList.remove('inc_next_disable')
                            document.querySelector('.inc_click_checkout').classList.remove('inc_active')
                            document.querySelector('.inc_next_block').setAttribute('style', '')
                        }
                    } else {
                        if (elprev.querySelector('.inc_progress_list_block.inc_active') != null) {
                            elprev.querySelector('.inc_progress_list_block.inc_active').classList.remove('progress_show')
                            elprev.querySelector('.inc_progress_list_block.inc_active').classList.remove('inc_active')
                        }
                        document.querySelector('.inc_click_checkout').innerText = ""
                        elprevcurrentactive.previousElementSibling.classList.add('inc_active')
                    }
                } else {
                    if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                        if (elprev.querySelector('.inc_progress_list_block.inc_active') != null) {
                            elprev.querySelector('.inc_progress_list_block.inc_active').classList.remove('progress_show')
                            elprev.querySelector('.inc_progress_list_block.inc_active').classList.remove('inc_active')
                        }
                        document.querySelector('.inc_progress_list_block').classList.add('inc_active')
                        document.querySelector('.inc_recommended_tabs_list_item_block').click()
                    }
                    document.querySelector('.inc_previous_block').setAttribute('style', 'opacity:0.5;pointer-events: none;')
                    document.querySelector('.inc_next_block').setAttribute('style', '')
                    document.querySelector('.inc_previous_block').classList.add('inc_prev_disable')
                    document.querySelector('.inc_next_block').classList.remove('inc_next_disable')
                    document.querySelector('.inc_click_checkout').classList.remove('inc_active')
                }
                setTimeout(function() {
                    classaddconfigurator()
                }, 100)

                setTimeout(function() {
                    resetimageprop_()
                }, 500)

            });
            document.querySelector('html').classList.remove('TP_inc_configurator')
            document.querySelector('html').classList.remove('TP_inc_no_configurator')
            if (sidebar_configurator_id.indexOf(INC.config.Product_id) >= 0) {
                document.querySelector('html').classList.add('TP_inc_configurator')
                var elcheckblk = sbBlock.querySelector(".inc_sidebar_checkout_block");
                elrecomendblock.parentNode.insertBefore(elcheckblk, elrecomendblock)
                elRecommendedTabsListBlock.style.display = "none"
                //inc_sidebar_checkout_block
                //inc_sidebar_header_parent_block
                var add_html = sbBlock.querySelector('.inc_sidebar_checkout_block').innerHTML
		        var add_sibling = sbBlock.querySelector('.inc_sidebar_header_parent_block')
		        var html_add_block = document.createElement('div');
		        html_add_block.classList.add('inc_sidebar_checkout_block')
		        html_add_block.innerHTML = add_html
		        var add_html_rem = sbBlock.querySelector('.inc_sidebar_checkout_block');
		        add_html_rem.parentNode.removeChild(add_html_rem);
		        add_sibling.appendChild(html_add_block)

            } else {
                inc_next_previous_block.style.display = "none"
                progress_bar_block.style.display = "none"
                document.querySelector('html').classList.add('TP_inc_no_configurator')
            }
            var sbcontinue = sbBlock.querySelector(".inc_header_continue_block")

            setTimeout(function() {
                if (window.innerWidth < 820) {
                    var scontinue = document.querySelector('.inc_header_continue_block');
                    // console.log("called",scontinue)
                    sbBlock.parentNode.insertBefore(sbcontinue, sbBlock)
                }

            }, 1500)

            sbcontinue.addEventListener("click", function() {
                closesidebar()
            });
            sbBlock.querySelector(".inc_checkout_continue_block").addEventListener("click", function() {
                closesidebar()
            });
            close_sisebar_icon.addEventListener("click", function() {
                closesidebar()
            });
            sbBlock.querySelector(".inc_checkout_basket_block").addEventListener("click", function() {
                this.querySelector('.inc_checkout_basket_btn_block').classList.add('inc_loading')
                window.location.href = INC.clientConfig.checkoutLink;
            });
            var body = document.querySelector('body');
            if (body != null) {
                body.appendChild(sidebar_dialoge_block);
            }
            if (body != null) {
                body.appendChild(sidebar_dialoge_block);
            }
            var elSideBarOverlayBlock = document.createElement('div');
            elSideBarOverlayBlock.setAttribute("class", "inc_sidebar_overlay_block");
            elSideBarOverlayBlock.addEventListener("click", function() {
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
        setTimeout(function() {
            if (document.querySelector('.inc_recommended_products_list_block') != null) {
                document.querySelector('.inc_recommended_products_list_block').setAttribute('role', "contentinfo")
            }
            var inc_prod_img = document.querySelectorAll('.inc_product_img_main_img img')
            for (var prodimg of inc_prod_img) {
                if (prodimg) {
                    prodimg.setAttribute('style', 'left:0 !important;position: relative;')
                }
            }
        }, 100)
    }
    function resetimageprop_() {
        if (document.querySelector(".inc_sidebar_recommended_block .inc_recommended_products_list_block img") != null) {
            document.querySelector(".inc_sidebar_recommended_block .inc_recommended_products_list_block img").setAttribute("style", "display:block");
        }
    }
    function classaddconfigurator() {
        var all_length_progress = document.querySelectorAll('.progress_show').length
        if (document.querySelector('.inc_recommended_tabs_list_progressbar_block') != null) {
            document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.remove('inc_progress_1')
            document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.remove('inc_progress_2')
            document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.remove('inc_progress_3')
            document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.remove('inc_progress_4')
            document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.remove('inc_progress_5')
            document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.remove('inc_progress_6')
            document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.remove('inc_progress_7')
            document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.remove('inc_progress_8')
            document.querySelector('.inc_recommended_tabs_list_progressbar_block')
            document.querySelector('.inc_recommended_tabs_list_progressbar_block')
            document.querySelector('.inc_recommended_tabs_list_progressbar_block')
            document.querySelector('.inc_recommended_tabs_list_progressbar_block').classList.add('inc_progress_' + all_length_progress)
        }
        document.querySelector('.inc_recommended_products_block').setAttribute('style', '')
    }
    function closesidebar() {
        document.querySelector('html').classList.remove('inc_overlay');
        INC.methods.hideSidebar();
        INC.config.pdpaddedProductList = [];
        INC.clientConfig.offset = 0;
        INC.clientConfig.slidevalue = 0;
    }
    INC.methods.updateSidebarBlock = function(type_bundle) {
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
            var elHeaderactivepricemsg = sbBlock.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block .inc_cart_added_product_desc_ecirp_active_text_msg');
            if (INC.clientConfig.statusVAT == false) {
                elHeaderactivepricemsg.innerHTML = "EXC VAT";
            } else {
                elHeaderactivepricemsg.innerHTML = "inc VAT";
            }

            sidebarHeaderseelesstext.innerText = ""
            sbCartBlock.innerHTML = "";
            var bundleCartProductsArray = Object.keys(dataStore.bundleCartProducts);
            sidebarHeaderItemCountTitleText.innerHTML = "Subtotal :"
            var headerItemCountFigureText = 0;
            subtotalactiveprice = 0
            subtotalregukarprice = 0
            var error_message = ""
            var oosname = []
            var oosids = []
            var remerrorjust = document.querySelectorAll('.inc_justerror')
            for (var r of remerrorjust) {
                if (r != null) {
                    r.parentNode.removeChild(r)
                }
            }
            bundleCartProductsArray.forEach(function(productSKU) {
                if (dataStore.bundleCartProducts[productSKU] < 1)
                    dataStore.bundleCartProducts[productSKU] = 1
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
                            error_message = "<span>" + productObj.name + "</span>" + " - " + "<span>Cannot be purchased at this time</span>"
                        } else {
                            error_message = error_message + " <br> " + "<span>" + productObj.name + "</span>" + " - " + "<span>Cannot be purchased at this time</span>"
                        }
                        var headertitle = sbBlock.querySelector('.inc_sidebar_modal_cart_and_title_block')
                        var errormes = generate_html_tag('div', 'inc_justerror')
                        var errorimg = generate_html_tag('img', 'errorimg')
                        errorimg.src = productObj.imageURL
                        errormes.appendChild(errorimg)
                        var errormestext = generate_html_tag('span', 'inc_justerror_text')
                        errormestext.innerHTML = error_message
                        errormes.appendChild(errormestext)
                        headertitle.parentNode.insertBefore(errormes, headertitle)
                        setTimeout(function() {
                            var remoerroblk = document.querySelectorAll('.inc_justerror')
                            for (var re of remoerroblk) {
                                if (re != null) {
                                    re.parentNode.removeChild(re)
                                }
                            }
                        }, 5000)
                    }
                } else {
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
                    var pricemsgtext = '';
                    INC.clientConfig.statusVAT == false ? pricemsgtext = "EXC VAT" : pricemsgtext = "inc VAT";
                    var addedhtml = '<div class="inc_cart_added_product_img_block"><div class="inc_cart_added_product_img"><img class="inc_lazy" src="' + productObj.imageURL + '" data-src="' + productObj.imageURL + '" alt="' + productObj.name + '"><div class="sidebar_product_quantity_label">' + dataStore.bundleCartProducts[productSKU] + 'x' + '</div></div><div class="inc_cart_added_product_desc_block"><div class="inc_cart_added_product_desc_title_block"><div class="inc_cart_added_product_desc_title_text_block"><div class="inc_cart_added_product_desc_title_text" title="Easidri Cooling Coat Wide Fit" style="text-transform: unset;">' + dataStore.bundleCartProducts[productSKU] + ' X ' + productObj.name + '</div></div></div><div class="inc_cart_added_product_desc_att_block"><div class="inc_cart_added_product_desc_att_color_block"><div class="inc_cart_added_product_desc_att_color_text_block"><div class="inc_cart_added_product_desc_att_color_text_block"></div></div></div><div class="inc_cart_added_product_desc_att_size_block"><div class="inc_cart_added_product_desc_att_size_text_block"><div class="inc_cart_added_product_desc_att_size_text">' + sel_size + '</div></div></div></div><div class="inc_cart_added_product_desc_ecirp_block"><div class="inc_cart_added_product_desc_ecirp_active_block"><div class="inc_cart_added_product_desc_ecirp_active_text_block"><div class="inc_cart_added_product_desc_ecirp_active_text">' + formatter.format(activePrice) + '</div><div class="inc_cart_added_product_desc_ecirp_active_text_msg">' + pricemsgtext + '</div></div></div><div class="inc_cart_added_product_desc_ecirp_regular_block"><div class="inc_cart_added_product_desc_ecirp_regular_text_block"><div class="inc_cart_added_product_desc_ecirp_regular_text"></div></div></div></div><div class="inc_cart_added_product_qty_block"></div></div></div>'

                    var productBlock = generate_html_tag('div', 'inc_cart_added_product_block');
                    productBlock.innerHTML = addedhtml
                    productBlock.setAttribute('data-id', productObj.id);
                    productBlock.setAttribute('data-sku', productObj.sku);
                    productBlock.setAttribute('data-main_id', productObj.mainId);
                    productBlock.setAttribute('data-bundle_id', productObj.bundleId);
                    productBlock.setAttribute('data-childsku', productObj.childsku);
                    productBlock.setAttribute('data-mainsku', productObj.mainsku);
                    productBlock.querySelector('.inc_cart_added_product_img img').setAttribute('onerror', "this.src='" + INC.config.noimage + "'");

                    var p_type_details = document.createElement('div');

                    if (type_bundle == "collection") {
                        p_type_details.innerText = "Added to collection"
                    } else {
                        p_type_details.innerText = "Added for Delivery"
                    }
                    p_type_details.classList.add('p_type_details')
                    p_type_details.setAttribute('style', 'display:block;width:100%')
                    if (productBlock.querySelector('.inc_cart_added_product_desc_block') != undefined) {
                        productBlock.querySelector('.inc_cart_added_product_desc_block').appendChild(p_type_details)
                    }

                    sbCartBlock.appendChild(productBlock);

                    setTimeout(function() {
                        var desc_blk = productBlock.querySelector('.inc_cart_added_product_desc_block');
                        var img_blk = productBlock.querySelector('.inc_cart_added_product_img_block');
                        img_blk.parentNode.insertBefore(desc_blk, img_blk)
                    })

                }
            });
            if (+subtotalactiveprice != null && (+subtotalactiveprice < +subtotalregukarprice)) {
                elHeadersubtotalactivetext.setAttribute('subtotalActiveprice', subtotalactiveprice)
                elHeadersubtotalregulartext.setAttribute('subtotalRegularprice', subtotalregukarprice)
                elHeadersubtotalactivetext.innerHTML = formatter.format(subtotalactiveprice)
                elHeadersubtotalregulartext.innerHTML = formatter.format(subtotalregukarprice)
                if (document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block') != null)
                    document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block').classList.add("is_special_ecirp")
                elHeadersubtotalactivetext.style.color = "#ee1c31"
            } else {
                elHeadersubtotalactivetext.setAttribute('subtotalActiveprice', subtotalactiveprice)
                elHeadersubtotalactivetext.style.color = "#000"
                elHeadersubtotalregulartext.setAttribute('subtotalRegularprice', subtotalregukarprice)
                elHeadersubtotalactivetext.innerHTML = formatter.format(subtotalregukarprice)
                elHeadersubtotalregulartext.innerHTML = ""
            }
            sidebarHeaderItemCountTitleText.innerHTML = "Subtotal :"
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
    INC.methods.updateSidebarProductsList = function(elRecommendedProductsListBlock, productCategory) {
        INC.config.siderbaropenCount++
        var productListArray = INC.dataStore.bundleProductsArray;
        // if(readCookie('ivid') == '07099fde5b89b5a3a31a8b5cff9cd6db83cab6fc1d'){
            if (sidebar_configurator_id.indexOf(INC.methods.getProductIdFromWebPage()) >= 0) {
                productListArray = INC.config.configuratorProduct
            }
        // }
        var dupl_sidebar_prod = []
        var addCheck = INC.config.pdpaddedProductList;
        for (var pdlistarray of productListArray) {
            var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({
                mainId: pdlistarray
            });
            if (firstProductObjByMainId["categoryId"] == productCategory) {
                if (INC.dataStore.dataStoreObj.undefined == undefined) {
                    if (addCheck.indexOf(pdlistarray) == -1) {
                        if (INC.config.sidebarremovedprod.indexOf(firstProductObjByMainId.id) == -1) {
                            if (dupl_sidebar_prod.indexOf(firstProductObjByMainId.id) == -1) {
                                dupl_sidebar_prod.push(firstProductObjByMainId.id)
                                var prdblck = INC.methods.createProductModuleBlock(firstProductObjByMainId.id, "sidebar", false, elRecommendedProductsListBlock);
                                prdblck.querySelector('.inc_product_desc_add_block').addEventListener("click", function() {
                                    sidebaraddprod('delivery', this)
                                });
                                prdblck.querySelector('.inc_product_add_collection_block').addEventListener("click", function() {
                                    sidebaraddprod('collection', this)
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
        if ((document.querySelector('.inc_recommended_tabs_list_item_block') == null && elRecommendedProductsListBlock.querySelector('.inc_product_module_block') == null)) {
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
            // right button
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommeded_products_right_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
        }
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_img').setAttribute("style", "opacity:0.5");
        var sliderBtnCounter = 0;
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_img').setAttribute('title', 'Scroll left')
        elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_right_btn_img').setAttribute('title', 'Scroll right')

        if (INC.config.siderbaropenCount == 1) {
            elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommeded_products_right_btn_block').addEventListener("click", function() {
                var productBlocks = document.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block')
                if (INC.clientConfig.slidevalue + 1 < productBlocks.length) {
                    elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_block').setAttribute("style", "pointer-events: auto;opacity:1");
                    elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_block').setAttribute("style", "pointer-events: auto;opacity:1");
                    elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_img').setAttribute("style", "opacity:1");
                    INC.clientConfig.slidevalue++
                    var slide_w = 274
                    if (sidebar_configurator_id.indexOf(INC.config.Product_id) >= 0) {
                        slide_w = 400
                    }
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

            elRecommendedProductsListBlock.parentNode.parentNode.querySelector('.inc_recommended_products_left_btn_block').addEventListener("click", function() {
                if (INC.clientConfig.slidevalue == -1)
                    INC.clientConfig.slidevalue = 0;
                if (INC.clientConfig.slidevalue > 0) {
                    var slide_w = 274
                    if (sidebar_configurator_id.indexOf(INC.config.Product_id) >= 0) {
                        slide_w = 400
                    }
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
                if (sliderBtnCounter == -1)
                    sliderBtnCounter = 0;
            });
        }

        setTimeout(function() {
            var all_list_el = document.querySelectorAll('.inc_recommended_products_list_block .inc_product_showcase_block')
            for (let listel of all_list_el) {
                if (listel.querySelector('.inc_product_desc_att_zero_block.inc_active') != null) {
                    var prd_moduleb = listel.parentNode
                    var main_idsd = prd_moduleb.getAttribute('data-main_id')
                    if (prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="' + main_idsd + '"]') != null) {
                        if (prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="' + main_idsd + '"] .inc_product_desc_att_size_list_item_img_block') != null) {
                            prd_moduleb.querySelector('.inc_product_desc_att_size_list_item_img_block[data-cpid="' + main_idsd + '"] .inc_product_desc_att_size_list_item_img_block').click()
                        } else if (listel.querySelector('.inc_product_desc_att_size_list_item_img_block') != null) {
                            listel.querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                        }
                    } else if (listel.querySelector('.inc_product_desc_att_size_list_item_img_block') != null) {
                        listel.querySelector('.inc_product_desc_att_size_list_item_img_block').click()
                    }
                }
            }
            var allimgSid = document.querySelectorAll('.inc_sidebar_modal_block img[data-src]')
            for (var imglist of allimgSid) {
                imglist.src = imglist.getAttribute('data-src')
            }
            setTimeout(function() {
                var inc_prod_img = document.querySelectorAll('.inc_product_img_main_img img')
                for (var prodimg of inc_prod_img) {
                    if (prodimg) {
                        prodimg.setAttribute('style', 'left:0 !important;position: relative;')
                    }
                }
            }, 2000)
        }, 10)
    }
    INC.methods.addProductToSidebarCart = function(findObj, qty, _productBlockel, client_add_btn, btn_addtocart, type_bundle) {
        if (qty == 0) {
            qty = 1;
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

        if (sbBlock != null) {
            var elHeadersubtotalactivetext = sbBlock.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_active_text");
            var elHeadersubtotalregulartext = sbBlock.querySelector(".inc_cart_added_product_desc_subtotal_ecirp_regular_text");
            var elHeaderItemCountFigureText = sbBlock.querySelector(".inc_header_item_count_figure_text");
            var sidebarHeaderItemCountTitleText = sbBlock.querySelector(".inc_header_item_count_title_text");
            var sbCartBlock = sbBlock.querySelector(".inc_cart_added_list_block");
            var elHeaderactivepricemsg = sbBlock.querySelector('.inc_cart_added_product_desc_ecirp_active_text_msg');
            if (INC.clientConfig.statusVAT == false) {
                elHeaderactivepricemsg.innerHTML = "EXC VAT";
            } else {
                elHeaderactivepricemsg.innerHTML = "inc VAT";
            }

            if (client_add_btn == "client_add_btn") {
                sbCartBlock.innerHTML = ""
            }
            var productObj = dataStore.methods().getProductById(findObj);
            var productBlock = generate_html_tag('div', 'inc_cart_added_product_block');

            if (INC.clientConfig.OOS.indexOf(productObj.mainId) >= 0) {
                productBlock.classList.add('cross')
                for (var e = 0; e < INC.clientConfig.OOS.length; e++) {
                    if (INC.clientConfig.OOS_MESG[e] != undefined) {
                        var remerrorjust = document.querySelector('.inc_justerror')
                        if (remerrorjust != null) {
                            remerrorjust.parentNode.removeChild(remerrorjust)
                        }
                        if (document.querySelector('.inc_justerror') == null) {
                            var headertitle = sbBlock.querySelector('.inc_sidebar_modal_cart_and_title_block')
                            var errormes = generate_html_tag('div', 'inc_justerror')
                            var errormestext = generate_html_tag('span', 'inc_justerror_text')
                            errormestext.innerHTML = "<span>" + productObj.name + "</span>" + " - " + "<span>Cannot be purchased at this time</span>"
                            errormes.appendChild(errormestext)
                            headertitle.parentNode.insertBefore(errormes, headertitle)
                            setTimeout(function() {
                                var remel = document.querySelector('.inc_justerror')
                                if (remel != null) {
                                    remel.parentNode.removeChild(remel)
                                }
                            }, 500)
                        }
                    }
                }
            } else {
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
                    var trflg = true;
                    if (btn_addtocart.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_module_block') == trflg) {
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
                    pdpprice = document.querySelector('.sd-product-spp__product-full .js-product-original-price').innerText.replace('£', '').replace(',', '').trim()
                }
                var activepriceClnt = 0
                if (INC.clientConfig.statusVAT == false) {
                    if (document.querySelector('.price-box.price-final_price') != null) {
                        if (document.querySelector('.price-box.price-final_price .price-wrapper.price-excluding-tax') != null) {
                            if (document.querySelector('.price-box.price-final_price .price-wrapper.price-excluding-tax .price') != null) {
                                activepriceClnt = document.querySelector('.price-box.price-final_price .price-wrapper.price-excluding-tax .price').textContent.split('£')[1].replace(',', '').trim()
                            }
                        }
                    }
                } else {
                    if (document.querySelector('.price-box.price-final_price') != null) {
                        if (document.querySelector('.price-box.price-final_price .price-wrapper.price-including-tax') != null) {
                            if (document.querySelector('.price-box.price-final_price .price-wrapper.price-including-tax .price') != null) {
                                activepriceClnt = document.querySelector('.price-box.price-final_price .price-wrapper.price-including-tax .price').textContent.split('£')[1].replace(',', '').trim()
                            }
                        }
                    }
                }
                var activePrice = 0;
                var regularPrice = 0;
                if (client_add_btn == "client_add_btn") {
                    if (activepriceClnt != 0 && pdpprice != 0) {
                        activePrice = parseFloat(activepriceClnt).toFixed(2).toString();
                        regularPrice = parseFloat(pdpprice).toFixed(2).toString();
                    } else if (pdpprice != 0) {
                        activePrice = parseFloat(pdpprice).toFixed(2).toString();
                        regularPrice = parseFloat(pdpprice).toFixed(2).toString();
                    } else if (pdpprice == 0 && activepriceClnt != 0) {
                        activePrice = parseFloat(activepriceClnt).toFixed(2).toString();
                        regularPrice = parseFloat(activepriceClnt).toFixed(2).toString();
                    }

                } else {
                    activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
                    regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
                }
                var price_msg_text = '';
                INC.clientConfig.statusVAT == false ? price_msg_text = "EXC VAT" : price_msg_text = "inc VAT";
                var addedhtml = '<div class="inc_cart_added_product_img_block"><div class="inc_cart_added_product_img"><img class="inc_lazy" src="' + productObj.imageURL + '" data-src="' + productObj.imageURL + '"  alt="' + productObj.name + '"><div class="sidebar_product_quantity_label">' + qty + 'x' + '</div></div></div><div class="inc_cart_added_product_desc_block"><div class="inc_cart_added_product_desc_title_block"><div class="inc_cart_added_product_desc_title_text_block"><div class="inc_cart_added_product_desc_title_text" title="Easidri Cooling Coat Wide Fit" style="text-transform: unset;">' + qty + ' X ' + productObj.name + '</div></div></div><div class="inc_cart_added_product_desc_att_block"><div class="inc_cart_added_product_desc_att_color_block"><div class="inc_cart_added_product_desc_att_color_text_block"><div class="inc_cart_added_product_desc_att_color_text_block"></div></div></div><div class="inc_cart_added_product_desc_att_size_block"><div class="inc_cart_added_product_desc_att_size_text_block"><div class="inc_cart_added_product_desc_att_size_text">' + sel_size + '</div></div></div></div><div class="inc_cart_added_product_desc_ecirp_block"><div class="inc_cart_added_product_desc_ecirp_active_block"><div class="inc_cart_added_product_desc_ecirp_active_text_block"><div class="inc_cart_added_product_desc_ecirp_active_text">' + formatter.format(activePrice) + '</div><div class="inc_cart_added_product_desc_ecirp_active_text_msg">' + price_msg_text + '</div></div></div><div class="inc_cart_added_product_desc_ecirp_regular_block"><div class="inc_cart_added_product_desc_ecirp_regular_text_block"><div class="inc_cart_added_product_desc_ecirp_regular_text"></div></div></div></div><div class="inc_cart_added_product_qty_block"></div></div>'
                productBlock.innerHTML = addedhtml
                productBlock.querySelector('.inc_cart_added_product_img img').setAttribute('onerror', "this.src='" + INC.config.noimage + "'");

                var p_type_details = document.createElement('div');
                if (type_bundle == "delivery" || type_bundle == "Deliver") {
                    p_type_details.innerText = "Added For Delivery"
                } else {
                    p_type_details.innerText = "Added to collection"
                }
                p_type_details.classList.add('p_type_details')
                p_type_details.setAttribute('style', 'display:block;width:100%')

                setTimeout(function() {
                    if (productBlock != undefined) {
                        if (productBlock.querySelector('.inc_cart_added_product_desc_block') != undefined) {
                            productBlock.querySelector('.inc_cart_added_product_desc_block').appendChild(p_type_details)
                        }
                    }
                })

                var prdb = productBlock
                setTimeout(function() {
                    var desc_blk = prdb.querySelector('.inc_cart_added_product_desc_block');
                    var img_blk = prdb.querySelector('.inc_cart_added_product_img_block');
                    img_blk.parentNode.insertBefore(desc_blk, img_blk)
                }, 100)

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
                if (elHeaderItemCountFigureText != null)
                    elHeaderItemCountFigureText.style.display = "none";
                sidebarHeaderItemCountTitleText.innerHTML = "Subtotal :"
                elHeadersubtotalactivetext.setAttribute('subtotalactiveprice', subtotalactiveprice)
                elHeadersubtotalregulartext.setAttribute('subtotalregularprice', subtotalregukarprice)
                if (+subtotalactiveprice != null && (+subtotalactiveprice < +subtotalregukarprice)) {
                    elHeadersubtotalactivetext.innerHTML = formatter.format(subtotalactiveprice)
                    elHeadersubtotalregulartext.innerHTML = formatter.format(subtotalregukarprice);
                    if (document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block') != null)
                        document.querySelector('.inc_cart_added_product_desc_subtotal_ecirp_block').classList.add("is_special_ecirp")
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

        if (INC.config.pageType == "cartPage") {
            INC.methods.trackingEvents("bundleProductClickTracking", {
                "product_id": productId,
                "core_product_id": INC.dataStore.pdpProductId
            }, pageType);
        } else {
            INC.methods.trackingEvents("bundleProductClickTracking", {
                "product_id": productId,
                "core_product_id": INC.config.Product_id
            }, pageType);
        }

    }

    INC.methods.createProductModuleBlock = function(pdpProductId, blockType, bundleProductListCheck, parentblock, mainprod) {
        if (INC.dataStore.dataStoreObj.undefined == undefined) {
            var productModuleBlock = generate_html_tag('div', 'inc_product_module_block')
            var findObj = new INC.classes.FindObj({
                id: pdpProductId
            });
            var productObj = INC.dataStore.methods().getProductById(findObj);
            productModuleBlock.style.userSelect = "none";
            setidstoelm(productModuleBlock, productObj)
            var elProductShowcaseBlock = generate_html_tag('div', 'inc_product_showcase_block');
            elProductShowcaseBlock.innerHTML = showcase_productcard
            var elProductModalBlock = generate_html_tag('div', 'inc_product_modal_block');
            elProductModalBlock.innerHTML = modal_productcard
            if (elProductShowcaseBlock != null) {
                elProductShowcaseBlock.setAttribute('role', "contentinfo")
            }
            if (elProductModalBlock != null) {
                elProductModalBlock.setAttribute('role', "contentinfo")
            }
            var productShowcaseBlock = INC.methods.createProductShowcaseBlock(pdpProductId, blockType, bundleProductListCheck, parentblock, elProductShowcaseBlock, mainprod);
            var productModalBlock = INC.methods.createProductModalBlock(pdpProductId, blockType, bundleProductListCheck, parentblock, elProductModalBlock, mainprod);

            elProductShowcaseBlock.appendChild(productShowcaseBlock);
            elProductModalBlock.appendChild(productModalBlock);
            productModuleBlock.appendChild(elProductShowcaseBlock)
            productModuleBlock.appendChild(elProductModalBlock)
            return productModuleBlock;
        }
    }
    function setidstoelm(productBlock, productObj) {
        productBlock.setAttribute('data-id', productObj.id);
        productBlock.setAttribute('data-sku', productObj.sku);
        productBlock.setAttribute('data-main_id', productObj.mainId);
        productBlock.setAttribute('data-bundle_id', productObj.bundleId);
        productBlock.setAttribute('data_main_variant', productObj.mainProdVariant);
        productBlock.setAttribute('data-category_name', productObj.categoryName);
        productBlock.setAttribute('product_type', productObj.ProductType);
        productBlock.classList.add(productObj.ProductType)
    }
    function prodtypedesc(productObj, producttypedetails, prodtypeflag) {
        if (productObj.finish != null && productObj.finish != "") {
            prodtypeflag = true
            var inc_prod_finish_block = generate_html_tag('div', 'inc_prod_finish_block')
            producttypedetails.appendChild(inc_prod_finish_block)
            var inc_prod_finish_title = generate_html_tag('div', 'inc_prod_finish_title')
            inc_prod_finish_title.innerText = "Finish"
            inc_prod_finish_block.appendChild(inc_prod_finish_title)
            var inc_prod_finish_text = generate_html_tag('div', 'inc_prod_finish_text')
            inc_prod_finish_text.innerText = productObj.finish
            inc_prod_finish_block.appendChild(inc_prod_finish_text)
        }
        if (productObj.coverage != null && productObj.coverage != "") {
            prodtypeflag = true
            var inc_prod_coverage_block = generate_html_tag('div', 'inc_prod_coverage_block')
            producttypedetails.appendChild(inc_prod_coverage_block)
            var inc_prod_coverage_title = generate_html_tag('div', 'inc_prod_coverage_title')
            inc_prod_coverage_title.innerText = "Coverage"
            inc_prod_coverage_block.appendChild(inc_prod_coverage_title)
            var inc_prod_coverage_text = generate_html_tag('div', 'inc_prod_coverage_text')
            inc_prod_coverage_text.innerText = productObj.coverage
            inc_prod_coverage_block.appendChild(inc_prod_coverage_text)
        }
        if (productObj.underTone != null && productObj.underTone != "") {
            prodtypeflag = true
            var inc_prod_undertone_block = generate_html_tag('div', 'inc_prod_undertone_block')
            producttypedetails.appendChild(inc_prod_undertone_block)
            var inc_prod_undertone_title = generate_html_tag('div', 'inc_prod_undertone_title')
            inc_prod_undertone_title.innerText = "Undertone"
            inc_prod_undertone_block.appendChild(inc_prod_undertone_title)
            var inc_prod_undertone_text = generate_html_tag('div', 'inc_prod_undertone_text')
            inc_prod_undertone_text.innerText = productObj.underTone
            inc_prod_undertone_block.appendChild(inc_prod_undertone_text)
        }
        if (productObj.skinType != null && productObj.skinType != "") {
            prodtypeflag = true
            var inc_prod_skinType_block = generate_html_tag('div', 'inc_prod_skinType_block')
            producttypedetails.appendChild(inc_prod_skinType_block)
            var inc_prod_skinType_title = generate_html_tag('div', 'inc_prod_skinType_title')
            inc_prod_skinType_title.innerText = "Skin Type"
            inc_prod_skinType_block.appendChild(inc_prod_skinType_title)
            var inc_prod_skinType_text = generate_html_tag('div', 'inc_prod_skinType_text')
            inc_prod_skinType_text.innerText = productObj.skinType
            inc_prod_skinType_block.appendChild(inc_prod_skinType_text)
        }
        return prodtypeflag;
    }
    function incscrollPgae(productBlock) {
        var doc = null;
        if (document.querySelector('.inc_pdp_block') != null) {
            doc = document.querySelector('.inc_pdp_block');
            inc_scroll_height = (window.scrollY || doc.scrollTop) - (doc.clientTop || 0);
        } else if (document.querySelector('.inc_af_block') != null) {
            doc = document.querySelector('.inc_af_block');
            inc_scroll_height = (window.scrollY || doc.scrollTop) - (doc.clientTop || 0);
        }
        if (productBlock != null) {
            if (productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block') != null) {
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_block').click()
            }
            Array.prototype.forEach.call(document.querySelectorAll('.inc_product_modal_block'), function(el) {
                el.classList.remove("inc_active");
            });
        }
    }
    function prepareAdditionalimages(elImgGalleryListBlock, productObj, productBlock) {
        var otimg = 0
        productObj.otherImageList.forEach(function(otherImgURLs) {
            var otherImgURL = otherImgURLs;
            var elImgGalleryListItemBlock = generate_html_tag('div', 'inc_product_img_gallery_list_item_block')
            var imglist = '<div class="inc_product_img_gallery_list_item_img_block"><div class="inc_product_img_gallery_list_item_img"><img class="inc_lazy" data-src="' + otherImgURL + '" src="' + otherImgURL + '" role="img" aria-label="Image"  alt="' + productObj.name + '"></div></div><div class="inc_product_img_gallery_list_item_text_block"><div class="inc_product_img_gallery_list_item_text"></div></div>'
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
            elImgGalleryListItemBlock.addEventListener("click", function() {
                Array.prototype.forEach.call(productBlock.querySelectorAll('.inc_product_img_gallery_list_item_block'), function(galleryListItemBlock) {
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

    function prepareqty(productBlock, blockType) {
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
        elQtyInput.setAttribute('max', 999);
        elQtyInput.setAttribute('maxlength', 1);
        elQtyInput.value = 1;
        elQtyInput.setAttribute('old_qty', '1');
        elQtyInput.setAttribute("onkeydown", "if(event.key==='.'){event.preventDefault();}");
        elQtyInput.setAttribute('onKeyPress', 'if(this.value.length==3) return false;');
        elQtyInput.setAttribute("oninput", "validity.valid||(value='');");
        elQtyInput.addEventListener("keydown", function(event) {
            var elmth = this
            var keyCode = event.which || event.keyCode;
            if (keyCode === 13) {
                event.preventDefault();
            } else if ((window.jQuery.inArray(event.keyCode, incallowedKeys) !== -1) || (keyCode === 65 && (event.ctrlKey || event.metaKey)) || (keyCode >= 35 && keyCode <= 40)) {
                return;
            }
            var charValue = String.fromCharCode(keyCode)
              , valid = /^\d+$/.test(charValue);
            if (!valid) {
                event.preventDefault();
            } else {
                setTimeout(function() {
                    qtyupdateInc(elmth, productBlock, elAddText)
                }, 50);
            }
        });
        elQtyInput.addEventListener('focusout', function() {
            var elmt = this
            setTimeout(function() {
                qtyupdateInc(elmt, productBlock, elAddText)
            }, 50);
        });
        function qtyupdateInc(elm, prdblk, eladtext) {
            if (elm.value.length == 0)
                elm.value = 1;
            if (elm.value == 0)
                elm.value = 1;

            var productModuleBlock = prdblk.parentNode.parentNode;
            var showcaseProductBlock = productModuleBlock.querySelector('.inc_product_showcase_block').querySelector('.inc_product_block');
            var modalProductBlock = productModuleBlock.querySelector('.inc_product_modal_block').querySelector('.inc_product_block')
            showcaseProductBlock.querySelector('.inc_product_qty_block').querySelector('input').value = parseInt(elm.value);
            modalProductBlock.querySelector('.inc_product_qty_input_text input').value = parseInt(elm.value);

            var id = prdblk.getAttribute('data-id');
            var qty = parseInt(elm.value);
            var main_id = prdblk.getAttribute('data-main_id');
            var bundle_id = prdblk.getAttribute('data-bundle_id');
            var pname = prdblk.querySelector('.inc_product_desc_title_text').textContent;
            var pprice = prdblk.querySelector('.inc_product_desc_ecirp_active_text').textContent.replace('£', '');
            if (eladtext.textContent == 'Added' || eladtext.textContent == "Update") {
                INC.methods.updateBundleCart({
                    sku: id,
                    qty: qty
                }, "add", main_id, bundle_id, pname, pprice);
            }
            if (elm.value == 1) {
                elQtyBlock.classList.add('singleqty')
            }
        }
        productDescQtyInputText.appendChild(elQtyInput);

        var added_text = document.createElement('span');
        added_text.classList.add("inc_add_text");
        productDescQtyInputText.appendChild(added_text);

        elQtyDownBlock.addEventListener('click', function() {
            var elinput = this.parentNode.parentNode.parentNode.querySelector('.inc_product_qty_input_text input')

            if (elinput.value == 1) {
                if (productBlock.parentNode.querySelector('.inc_product_desc_add_block') != null && INC.config.pageType == "pdp" && window.innerWidth > 820) {
                    if(blockType != "sidebar") productBlock.parentNode.querySelector('.inc_product_desc_add_block').click()
                }

            }

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
            var pprice = productBlock.querySelector('.inc_product_desc_ecirp_active_text').innerText.replace('£', '');
            var jt = true;
            if (parseInt(elinput.value) == 1 && productDescQtyBlock.classList.contains('singleqty') == jt) {
                if (elAddText.textContent == "Added" || elAddText.textContent == "Update" || elAddText.textContent == INC.config.AddedText || elAddText.textContent == INC.config.UpdateText) {
                    document.querySelector('html').classList.remove('inc_overlay')
                    if (INC.config.pageType == "pdp" && blockType == "pdp")
                        INC.methods.updateBundleCart({
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
            if (elinput.value == 1) {
                elQtyBlock.classList.add('singleqty')
                productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_qty_block').classList.add('singleqty')
                modalProductBlock.querySelector('.inc_product_qty_input_text input').parentNode.parentNode.parentNode.parentNode.classList.add('singleqty');
            }
        });

        elQtyUpBlock.addEventListener('click', function() {
            var elinpt = this.parentNode.parentNode.parentNode.querySelector('.inc_product_qty_input_text input')
            elinpt.value = parseInt(elinpt.value) + 1;
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
            var pprice = productBlock.querySelector('.inc_product_desc_ecirp_active_text').innerText.replace('£', '');
            if (elAddText.textContent == "Added" || elAddText.textContent == "Update" || elAddText.textContent == INC.config.AddedText || elAddText.textContent == INC.config.UpdateText) {
                INC.methods.updateBundleCart({
                    sku: id,
                    qty: qty
                }, "add", main_id, bundle_id, pname, pprice);
            }
        });
    }

    function sidebaraddprod(typeadd, element) {

        var falsflg = false;
        var trflg = true
        var productModuleBlock = element.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
        if (productModuleBlock.classList.contains('inc_product_module_block') == falsflg) {
            productModuleBlock = element.parentNode.parentNode.parentNode.parentNode.parentNode
        }
        var flag_check = INC.methods.checkVariantSelection(productModuleBlock)
        var sku = productModuleBlock.getAttribute('data-sku');
        var findObj = new INC.classes.FindObj({
            id: sku
        });
        var add_prod_im = productModuleBlock.querySelector('.inc_product_desc_add_img')
        if (flag_check == 1) {
            if (element.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_showcase_block') == trflg || element.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_modal_block') == trflg) {
                if (INC.config.disablebtn == trflg) {
                    INC.config.disablebtn = false;
                    var newbtntext = productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_add_text')
                    var btnclick = productModuleBlock.querySelector('.inc_product_add_text')
                    newbtntext.innerText = "Adding..."
                    btnclick.innerText = "Adding...";
                    var selbtn = productModuleBlock.querySelector('.inc_product_variant_simple_text')
                    if (typeadd == 'collection') {
                        productModuleBlock.querySelector('.inc_product_add_collection_text').innerText = "Adding...";
                    } else {
                        selbtn.innerText = "Adding...";
                    }
                    INC.methods.addProductToCart(findObj, productModuleBlock, btnclick, add_prod_im, selbtn, newbtntext, typeadd);
                }
            }
        }
    }

    function addprodsingle(typeadd, element) {
        var productBlockNode = element.parentNode.parentNode;
        var flag_check = INC.methods.checkVariantSelection(productBlockNode)
        if (element.parentNode.parentNode.className == "inc_product_desc_block") {
            productBlockNode = element.parentNode.parentNode.parentNode.parentNode
        }
        var checblock = true
        if (productBlockNode.classList.contains('inc_product_block') == checblock) {
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
            if (element.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_showcase_block') == checblock || element.parentNode.parentNode.parentNode.parentNode.parentNode.classList.contains('inc_product_modal_block') == checblock) {
                var popbtn = productBlockNode.querySelector('.inc_product_modal_block .inc_product_desc_add_text')
                popbtn.innerText = "Adding..."
                productBlockNode.querySelector('.inc_product_add_text').innerText = "Adding..."
                if (typeadd == 'collection') {
                    productBlockNode.querySelector('.inc_product_add_collection_text').innerHTML = "Adding..."
                } else {
                    productBlockNode.querySelector('.inc_product_variant_simple_text').innerText = "Adding..."
                }

                INC.methods.addProductToCart(findObj, productBlockNode, add_btn_click, add_prod_im, add_btn, popbtn, typeadd);
            }
        }
    }

    INC.methods.createProductShowcaseBlock = function(pdpProductId, blockType, _bundleProductListCheck, _parentblock, elProductShowcaseBlock, mainprod) {
        var productBlock = elProductShowcaseBlock.querySelector('.inc_product_block')
        var findObj = new INC.classes.FindObj({
            id: pdpProductId
        });
        var productObj = INC.dataStore.methods().getProductById(findObj);
        setidstoelm(productBlock, productObj)
        var elHeaderInfoBlck = productBlock.querySelector('.inc_product_info_main_block');
        var elHeader = productBlock.querySelector('.inc_product_header_main_block');
        var elImgBlock = productBlock.querySelector('.inc_product_img_block');
        var elImgGalleryListBlock = productBlock.querySelector('.inc_product_img_gallery_list_block');
        var elTitleTextBlock = productBlock.querySelector('.inc_product_desc_title_text_block');
        var elTitleText = productBlock.querySelector('.inc_product_desc_title_text');
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
        var elpricetextmsg = productBlock.querySelector('.inc_product_desc_ecirp_active_text_msg');
        var qtyBlock = productBlock.querySelector('.inc_product_qty_block')

        if (INC.clientConfig.statusVAT == false) {
            elpricetextmsg.innerText = "EXC VAT"
        } else {
            elpricetextmsg.innerText = "inc VAT"
        }

        var productDescAddText = productBlock.querySelector('.inc_product_add_text');
        var elQtyAddBtnBlock = productBlock.querySelector('.inc_product_desc_qty_add_btn_block');

        elQtyAddBtnBlock.classList.add(productObj.ProductType);
        elproductPriceLabel.innerHTML = "SALE"

        if (window.innerWidth < 821) {
            var prodtypeflag = false;
            var producttypedetails_mobile_view = generate_html_tag('div', 'inc_details_mobile_quick_view')
            var producttypedetails = generate_html_tag('div', 'inc_producttype_details_block')
            var prod_quick_view_close = generate_html_tag('div', 'prod_quick_view_close')
            producttypedetails_mobile_view.appendChild(prod_quick_view_close)
            prod_quick_view_close.addEventListener('click', function() {
                document.querySelector('html').classList.remove('inc_overlay')
                document.querySelector('body').classList.remove('quick_view_active_inc')
                if (document.querySelector('.inc_details_mobile_quick_view.quick_view_active') != null) {
                    document.querySelector('.inc_product_block.quick_view_open').classList.remove('quick_view_open')
                    document.querySelector('.inc_details_mobile_quick_view.quick_view_active').classList.remove('quick_view_active')
                }
            })
            producttypedetails_mobile_view.appendChild(producttypedetails)
            prodtypedesc(productObj, producttypedetails, prodtypeflag)
            var ft = true;
            if (prodtypeflag == ft) {
                var prod_quick_view_btn = generate_html_tag('div', 'prod_quick_view_btn')
                prod_quick_view_btn.innerText = "More Info"
                prod_quick_view_btn.addEventListener('click', function() {
                    if (productBlock.querySelector('.inc_details_mobile_quick_view.quick_view_active') != null) {
                        document.querySelector('html').classList.remove('inc_overlay')
                        document.querySelector('body').classList.remove('quick_view_active_inc')
                        productBlock.classList.remove('quick_view_open')
                        productBlock.querySelector('.inc_details_mobile_quick_view.quick_view_active').classList.remove('quick_view_active')
                    } else {
                        document.querySelector('body').classList.add('quick_view_active_inc')

                        document.querySelector('html').classList.add('inc_overlay')
                        productBlock.classList.add('quick_view_open')
                        productBlock.querySelector('.inc_details_mobile_quick_view').classList.add('quick_view_active')
                    }

                })
                var prodplacement = productBlock.querySelector('.inc_product_desc_block')
                if (prodplacement != null) {
                    prodplacement.appendChild(prod_quick_view_btn)
                    prodplacement.appendChild(producttypedetails_mobile_view)
                }
            }
        }
        

        elvariantpopupclose.addEventListener('click', function() {
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

        elHeader.querySelector('.inc_product_header_img_block').addEventListener("click", function() {
            productBlock.parentNode.classList.remove("inc_active");
        });
        var elImgMainImg = elImgBlock.querySelector('.inc_product_img_main_img');
        var elImgTag1 = generate_html_tag('img');
        elImgTag1.src = productObj.imageURLMain
        elImgTag1.setAttribute('data-src', productObj.imageURLMain)
        elImgTag1.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
        elImgTag1.setAttribute('role', 'img')
        elImgTag1.setAttribute('aria-label', 'Image')
        elImgTag1.setAttribute('alt', productObj.nameMain)
        elImgTag1.setAttribute('data-mouseover', productObj["otherImageList"])
        elImgTag1.setAttribute('data-imageURL', productObj["imageURLMain"])
        var productLink = document.createElement('a');
        productLink.target = "_blank";
        productLink.setAttribute('rel', 'noopener noreferrer')

        if (window.location.host == 'bradfordsdev1.dev.iwebcloud.co.uk' && productObj.url != undefined) {
            productLink.href = productObj.url.replace('www.bradfords.co.uk', 'bradfordsdev1.dev.iwebcloud.co.uk');
        } else {
            productLink.href = productObj.url;
        }
        productLink.appendChild(elImgTag1);
        productLink.setAttribute('otherImageList', productObj["otherImageList"])
        productLink.setAttribute('imageURL', productObj["imageURLMain"])
        add_swipe(productLink)
        elImgMainImg.appendChild(productLink);

        productLink.addEventListener('click', function(e) {
            INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
            if (window.innerWidth < 820) {
                e.preventDefault();
                var href = productBlock.querySelector('.inc_product_desc_title_text a').href
                setTimeout(function() {
                    window.location.href = href
                }, 2000)
            }

        })
        if (mainprod != "mainprod" || window.innerWidth > 820) {
            elImgMainImg.addEventListener("click", function() {
                incscrollPgae(productBlock)
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_header_title_text_block').click()
                if (document.querySelector('.sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block') != null) {
                    document.querySelector('.sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block').classList.add('overflow_visible')
                    document.querySelector('body').classList.add('inc_popup_open');
                }
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block').classList.add("inc_active")
            });
        }
        elImgGalleryListBlock.innerHTML = "";
        if ((productObj.otherImageList != null) && productObj.otherImageList.length > 1) {
            prepareAdditionalimages(elImgGalleryListBlock, productObj, productBlock)
        }

        if (mainprod != "mainprod" || window.innerWidth > 820) {
            elTitleTextBlock.addEventListener("click", function() {
                incscrollPgae(productBlock)
                if (document.querySelector('.sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block') != null) {
                    document.querySelector('.sidebar_outer.sidebar_outer_active .inc_sidebar_modal_block').classList.add('overflow_visible')
                    document.querySelector('body').classList.add('inc_popup_open');
                }
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block').classList.add("inc_active")
            });
        }

        var pTitleDiv = document.createElement('div');
        if (mainprod == "mainprod" && INC.config.pageType == "pdp") {
            if (productObj.nameMain != undefined) {
                pTitleDiv.innerHTML = "<strong>This Item:</strong>" + productObj.nameMain.replace("&quot", '').replace(';', '');
            }
        } else {
            if (productObj.nameMain != undefined) {
                pTitleDiv.innerHTML = productObj.nameMain.replace("&quot", '').replace(';', '');
            }
        }
        var field1 = productObj.ratingsCount
        var field2 = productObj.reviewsCount
        INC.methods.get_product_ratings(field1, field2, elratingsBlock);
        var pLink = document.createElement('a');
        pLink.setAttribute('style', 'cursor: default;text-decoration: none;')
        pLink.target = "_blank";

        if (window.location.host == 'bradfordsdev1.dev.iwebcloud.co.uk' && productObj.url != undefined) {
            pLink.href = productObj.url.replace('www.bradfords.co.uk', 'bradfordsdev1.dev.iwebcloud.co.uk');
        } else {
            pLink.href = productObj.url;
        }

        pLink.addEventListener('click', function(e) {
            INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
            if (window.innerWidth < 820) {
                e.preventDefault();
                var href = productBlock.querySelector('.inc_product_desc_title_text a').href
                if (window.location.host == 'bradfordsdev1.dev.iwebcloud.co.uk') {
                    href = href.replace('bradfords.co.uk', 'bradfordsdev1.dev.iwebcloud.co.uk')
                }
                setTimeout(function() {
                    window.location.href = href
                }, 2000)
            }
        })
        pLink.setAttribute('style', 'text-transform: unset;')
        pLink.setAttribute('title', productObj.nameMain)
        pLink.appendChild(pTitleDiv);
        elTitleText.appendChild(pLink);
        var activePrice = parseFloat(productObj.activePriceMain).toFixed(2).toString();
        var regularPrice = parseFloat(productObj.regularPriceMain).toFixed(2).toString();
        elPriceRegularText.textContent = "";
        if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
            elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
            elPriceActiveText.innerHTML = formatter.format(activePrice)
            elPriceRegularText.innerHTML = "Was " + formatter.format(regularPrice)
        } else {
            elPriceActiveText.innerHTML = formatter.format(activePrice)
            elworthPrice.innerHTML = ""
        }
        if (window.innerWidth < 821) {
            var inc_empty_popup = generate_html_tag('div', 'inc_empty_popup');
            eldetailsprodblock.appendChild(inc_empty_popup);
        }
        if (blockType == "am") {
            productDescAddText.innerText = "Add To Cart"
        } else if (blockType == "sidebar") {
            productDescAddText.innerText = "Add To Cart"
        } else {
            productDescAddText.innerText = "Add To Bundle"
        }
        productDescAddText.addEventListener('click', function() {
            this.parentNode.parentNode.parentNode.querySelector('.inc_product_desc_add_block').click()
        });

        prepareqty(productBlock, blockType)

        findObj = new INC.classes.FindObj({
            mainId: productObj.mainId
        });

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
                findObj = new INC.classes.FindObj({
                    mainId: productObj.mainId
                });
                elAtt0ListBlock.innerHTML = "";
                if (product0Obj["att0Array"].length > 0) {
                    productzeroatt(elAtt0TitleText, elAtt0Block, product0Obj, elAtt0ListBlock, blockType)
                }
            }
        }
        productsizeatt(elAttSizeTitleText, elAttSizeBlock, productSizesObj, elAttSizeListBlock, elAttSizeTitleTextSelected, blockType)
        productcoloratt(productColorsObj, productBlock, elAttColorListBlock, blockType, elAttColorBlock, elAttColorTitleText)

        productthirdatt(product3Obj, elAtt3TitleText, elAtt3Block, elAtt3ListBlock, blockType, elAtt3TitleTextSelected)

        if (product0Obj["att0Array"].length > 0) {
            productBlock.querySelector('.inc_product_desc_att_zero_title_block').addEventListener('click', function(e) {
                var droflg = false;
                if (document.querySelector('.inc_product_desc_att_zero_block.show_dropdown') != e.currentTarget) {
                    if (document.querySelector('.inc_product_desc_att_zero_block.show_dropdown') != null) {
                        if (e.currentTarget.parentNode.classList.contains('show_dropdown') == droflg) {
                            document.querySelector('.inc_product_desc_att_zero_block.show_dropdown').classList.remove('show_dropdown')
                        }
                    }
                }
                if (document.querySelector('.inc_product_desc_att_color_block.show_dropdown') != null) {
                    document.querySelector('.inc_product_desc_att_color_block.show_dropdown').classList.remove('show_dropdown')
                }
                this.parentNode.classList.toggle('show_dropdown')
            })
        }
        if (productColorsObj["colorArray"].length > 0) {
            productBlock.querySelector('.inc_product_desc_att_color_title_block').addEventListener('click', function(e) {
                if (document.querySelector('.inc_product_desc_att_color_block.show_dropdown') != e.currentTarget) {
                    if (document.querySelector('.inc_product_desc_att_color_block.show_dropdown') != null) {
                        var ctfg = false
                        if (e.currentTarget.parentNode.classList.contains('show_dropdown') == ctfg) {
                            document.querySelector('.inc_product_desc_att_color_block.show_dropdown').classList.remove('show_dropdown')
                        }
                    }
                }
                if (document.querySelector('.inc_product_desc_att_zero_block.show_dropdown') != null) {
                    document.querySelector('.inc_product_desc_att_zero_block.show_dropdown').classList.remove('show_dropdown')
                }
                this.parentNode.classList.toggle('show_dropdown')
            })
        }
        var sizezero = INC.dataStore.methods().getProductopt0Obj(findObj)
        if (productColorsObj["colorArray"].length == 0 && sizezero["att0Array"].length == 0) {
            elAttBlock.classList.add('attributes_not_avail')
            eladdvarianttext.textContent = "Add"
            switch (blockType) {
            case "pdp":
                eladdvarianttext.textContent = "Add To Bundle";
                break;
            case "sidebar":
                eladdvarianttext.textContent = "Deliver";
                break;
            case "am":
                eladdvarianttext.textContent = "Deliver";
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
                elvariantaddbtntext.textContent = "Add To Bundle";
                break;
            case "sidebar":
                elvariantaddbtntext.textContent = "Add To Cart";
                break;
            case "am":
                elvariantaddbtntext.textContent = "Add To Cart";
                break;
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
            case "pdp":
                elvariantaddbtntext.textContent = "Add To Bundle";
                break;
            case "sidebar":
                elvariantaddbtntext.textContent = "Add To Cart";
                break;
            case "am":
                elvariantaddbtntext.textContent = "Add To Cart";
                break;
            }
        }

        elvariantaddbtn.addEventListener('click', function() {
            var moduleblk = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
            var flag_check = INC.methods.checkVariantSelection(moduleblk)
            var cngf = true;
            if ((this.textContent.trim() == "Update" || this.parentNode.classList.contains('config_avail') == cngf) && this.innerText.trim() != "Add To Cart") {
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
                if (this.innerText.trim() == "Add To Cart" || this.innerText.trim() == "SELECT") {
                    if (flag_check == 1 || flag_check == 3) {
                        if (document.querySelector('.inc_product_modal_block.inc_active') == null && document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                            document.querySelector('html').classList.remove('inc_overlay')
                        }
                        this.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()
                        this.parentNode.parentNode.querySelector('.inc_product_desc_variant_popup_close_block').click()

                        productBlock.classList.remove('show_overlay')
                        if (this.textContent.trim() == "Add To Cart" || this.textContent.trim() == "SELECT" || this.textContent.trim() == "Add") {
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

        elselectoptaddbtn.addEventListener('click', function() {
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
                var trucheck = true;
                if (productBlock.parentNode.parentNode.parentNode.classList.contains('inc_af_product-list_block') == trucheck) {

                    document.querySelector('html').classList.add('inc_overlay');
                }
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_info_main_block').classList.add('inc_active');
                productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_description_main_block').classList.remove('inc_active');
            }
        })
        switch (blockType) {
        case "pdp":
            elAddText.textContent = "Add";
            break;
        case "sidebar":
            elAddText.textContent = "Add To Cart";
            break;
        case "am":
            elAddText.textContent = "Add To Cart";
            break;
        }
        elAddBlock.addEventListener("click", function() {
            var productModuleBlock = productBlock.parentNode.parentNode;
            var modalProductBlock = productModuleBlock.querySelector('.inc_product_modal_block').querySelector('.inc_product_block')
            var flag_check = INC.methods.checkVariantSelection(productModuleBlock)
            var sku = productBlock.getAttribute('data-sku');
            var mainId = productBlock.getAttribute('data-main_id');
            var main_id = productBlock.getAttribute('data-main_id');
            var bundle_id = productBlock.getAttribute('data-bundle_id');
            var pname = productBlock.querySelector('.inc_product_desc_title_text').textContent;
            var pprice = productBlock.querySelector('.inc_product_desc_ecirp_active_text').textContent.replace('£', '');
            var elqtyvalue = productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_qty_block input')
            var qty = parseInt(elqtyvalue.value);
            if (qty < 1)
                qty = 1
            var prod_card = elAddText.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode
            var flgfalse = false;
            var trflg = true;
            var prodflag = false;
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
                        if (elAddText.textContent == "Add") {
                            if (document.querySelector('.inc_product_modal_block.inc_active') == null) {
                                if (window.innerWidth < 821) {
                                    productModuleBlock.querySelector('.inc_product_variant_simple_text').click()
                                } else {
                                    productModuleBlock.querySelector('.inc_product_details_prod_block').click()
                                }
                            }
                            if (productModuleBlock.querySelector('.inc_product_variant_simple_text').getAttribute('title') != null) {
                                productModuleBlock.querySelector('.inc_product_variant_simple_text').textContent = productModuleBlock.querySelector('.inc_product_variant_simple_text').getAttribute('title');
                            }
                        }
                    }
                }
                if (elAddText.textContent == "Add") {
                    if (prodflag == trflg) {
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
                        if (INC.config.pageType == "pdp" && blockType == "pdp")
                            INC.methods.updateBundleCart({
                                sku: sku,
                                qty: qty
                            }, "add", main_id, bundle_id, pname, pprice);
                        if (prod_card != null) {
                            if (prod_card.querySelector('.inc_product_modal_block.inc_active') != null) {
                                if (inc_scroll_height > 100) {
                                    window.scrollTo(0, inc_scroll_height);
                                }
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
                    }
                } else if (elAddText.textContent == "Added") {
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
                        if (INC.config.pageType == "pdp" && blockType == "pdp")
                            INC.methods.updateBundleCart({
                                sku: sku,
                                qty: qty
                            }, "sub", main_id, bundle_id, pname, pprice);
                    } else {
                        if (prod_card.querySelector('.inc_product_modal_block.inc_active') == null) {
                            elAddText.textContent = "Add";
                            productDescAddText.textContent = "Add To Bundle"
                            elAddText.classList.remove('added');
                            elAddText.parentNode.parentNode.classList.remove('Inc_checked');
                            modalProductBlock.querySelector('.inc_product_desc_add_text').textContent = "Add To Bundle";
                            var pListItemBlock2 = document.querySelector('.inc_pdp_bundle_product_list_item_block' + "[data-main_id=\"" + mainId + "\"]");
                            if (pListItemBlock2 != null) {
                                pListItemBlock2.classList.remove('product_added');
                                pListItemBlock2.querySelector('.inc_pdp_bundle_product_list_item_added_btn_img').classList.remove("checked");
                            }
                            eladdfn_(productModuleBlock)
                            elAddImg.classList.remove("checked");
                            modalProductBlock.querySelector('.inc_product_desc_add_img').classList.remove("checked");
                            if (INC.config.pageType == "pdp" && blockType == "pdp")
                                INC.methods.updateBundleCart({
                                    sku: sku,
                                    qty: qty
                                }, "sub", main_id, bundle_id, pname, pprice);
                        }
                    }
                    if (prod_card != null) {
                        if (prod_card.querySelector('.inc_product_modal_block.inc_active') != null) {
                            if (inc_scroll_height > 100) {
                                window.scrollTo(0, inc_scroll_height);
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
        if(blockType == "sidebar"){
            eldetailsprodblock.parentNode.insertBefore(qtyBlock, eldetailsprodblock)
        }
        return productBlock;
    }
    function eladdfn_(productModuleBlock) {
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
    INC.methods.createProductModalBlock = function(pdpProductId, blockType, _bundleProductListCheck, _parentblock, elmodalblock) {
        var productBlock = elmodalblock.querySelector('.inc_product_block')
        var prdmblock = productBlock
        var findObj = new INC.classes.FindObj({
            id: pdpProductId
        });
        var productObj = INC.dataStore.methods().getProductById(findObj);
        setidstoelm(productBlock, productObj)
        var elHeader = prdmblock.querySelector('.inc_product_header_main_block');
        var elImgBlock = prdmblock.querySelector('.inc_product_img_block');
        var elImgGalleryListBlock = prdmblock.querySelector('.inc_product_img_gallery_list_block');
        var elTitleBlock = prdmblock.querySelector('.inc_product_desc_title_block');
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

        elHeader.querySelector('.inc_product_header_img_block').addEventListener("click", function() {
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
            if (inc_scroll_height > 100) {
                window.scrollTo(0, inc_scroll_height);
            }
        });
        if (window.innerWidth > 820) {
            var prodtypeflag = false;
            var producttypedetails = generate_html_tag('div', 'inc_producttype_details_block')
            prodtypedesc(productObj, producttypedetails, prodtypeflag)
            var gg = true;
            if (prodtypeflag == gg) {
                var prodplacement = productBlock.querySelector('.inc_product_desc_att_details_block')
                if (prodplacement != null) {
                    prodplacement.parentNode.insertBefore(producttypedetails, prodplacement)
                }
            }
        }
        var elImgMainImg = elImgBlock.querySelector('.inc_product_img_main_img');
        var elImgTag1 = generate_html_tag('img');
        elImgTag1.src = productObj.imageURLMain
        elImgTag1.setAttribute('data-src', productObj.imageURLMain)
        var s = true;
        if (elImgTag1 == s) {
            elImgTag1.src = productObj.imageURLMain
        }
        elImgTag1.setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
        elImgTag1.setAttribute('role', 'img')
        elImgTag1.setAttribute('aria-label', 'Image')
        if (productObj.nameMain != undefined) {
            elImgTag1.setAttribute('alt', productObj.nameMain.toLocaleLowerCase())
        }

        if (window.innerWidth < 821) {
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
        productLink.setAttribute('rel', 'noopener noreferrer')
        productLink.href = productObj.url;
        productLink.appendChild(elImgTag1);
        productLink.style.cursor = 'pointer';
        productLink.setAttribute('otherImageList', productObj["otherImageList"])
        productLink.setAttribute('imageURL', productObj["imageURLMain"])
        add_swipe(productLink)
        elImgMainImg.appendChild(productLink);
        elImgMainImg.addEventListener("click", function() {
            INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
            getTrackingPixel();
        });
        elImgGalleryListBlock.innerHTML = "";
        if ((productObj.otherImageList != null) && productObj.otherImageList.length > 1) {
            prepareAdditionalimages(elImgGalleryListBlock, productObj, productBlock)
        } else {
            productBlock.classList.add('inc_other_noimage')
        }
        elTitleBlock.addEventListener("click", function() {
            INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
            getTrackingPixel();
        });
        var pTitleDiv = document.createElement('div');
        pTitleDiv.innerText = productObj.nameMain;
        var pLinkModal = document.createElement('a');
        pLinkModal.setAttribute("title", productObj.nameMain);
        pLinkModal.setAttribute("href", productObj.url);
        pLinkModal.setAttribute("target", "_blank");
        pLinkModal.setAttribute('rel', 'noopener noreferrer')
        pLinkModal.innerText = productObj.nameMain;
        productHeaderMainBlockTitle.appendChild(pLinkModal)
        pLinkModal.addEventListener("click", function() {
            INC.methods.sendBundleClickTracking(productBlock.getAttribute('data-main_id'));
            getTrackingPixel()
        });

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
            elPriceActiveText.innerHTML = formatter.format(activePrice)
            elPriceRegularText.innerHTML = "Was " + formatter.format(regularPrice)
        } else {
            elPriceActiveText.innerText = formatter.format(activePrice)
        }
        prepareqty(productBlock, blockType)

        findObj = new INC.classes.FindObj({
            mainId: productObj.mainId
        });
        if (INC.dataStore.methods().getProductColorsObj(findObj).colorArray.length == 0 && INC.dataStore.methods().getProductopt0Obj(findObj).att0Array.length == 0) {
            elHeader.querySelector('.inc_product_header_title_text').innerText = "Overview";
        } else {
            if (INC.dataStore.methods().getProductopt0Obj(findObj).att0Array.length > 0 || INC.dataStore.methods().getProductColorsObj(findObj).colorArray.length > 0) {
                elHeader.querySelector('.inc_product_header_title_text').innerText = "Overview";
            }
        }
        var inc_product_header_title_block_1 = productBlock.querySelector('.inc_product_header_title_block_1')
        var inc_product_header_title_text_1 = productBlock.querySelector('.inc_product_header_title_text_1')
        inc_product_header_title_text_1.innerText = "Product Details";

        var descriptionhtml = generate_html_tag('div', 'inc_descriptionhtml')
        descriptionhtml.innerHTML = productObj.description;
        if (window.innerWidth < 821) {
            productDescriptionMainBlock.innerHTML = "<span>Description</span>" + productObj.description;
        } else {
            productDescriptionMainBlock.innerHTML = productObj.description;
        }

        var inc_product_header_title_block = inc_product_header_title_block_1.parentNode.querySelector('.inc_product_header_title_block');

        var inc_product_header_new_page = productBlock.querySelector('.inc_product_header_new_page')
        var inc_product_header_new_page_text = productBlock.querySelector('.inc_product_header_new_page .inc_product_header_new_page_text')
        inc_product_header_new_page_text.innerText = "Open In A New Tab"
        inc_product_header_new_page_text.setAttribute("href", productObj.url)
        inc_product_header_new_page_text.setAttribute("target", "_blank")
        inc_product_header_new_page_text.setAttribute('rel', 'noopener noreferrer')
        inc_product_header_new_page.addEventListener("click", function() {
            INC.methods.sendBundleClickTracking(productObj.mainId);
            getTrackingPixel()
        });

        inc_product_header_title_block_1.addEventListener('click', function() {
            this.parentNode.parentNode.parentNode.querySelector(".inc_product_description_main_block").classList.add("inc_active")
            this.parentNode.parentNode.parentNode.querySelector(".inc_product_info_main_block").classList.remove("inc_active")
            this.parentNode.querySelector('.inc_product_header_title_block').classList.remove("inc_active");
            this.classList.add("inc_active");
        });

        inc_product_header_title_block.classList.add('inc_active');

        inc_product_header_title_block.addEventListener('click', function() {
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
                    productzeroatt(elAtt0TitleText, elAtt0Block, product0Obj, elAtt0ListBlock, blockType)
                }
            }
        }
        productsizeatt(elAttSizeTitleText, elAttSizeBlock, productSizesObj, elAttSizeListBlock, elAttSizeTitleTextSelected, blockType)

        productcoloratt(productColorsObj, productBlock, elAttColorListBlock, blockType, elAttColorBlock, elAttColorTitleText)

        productthirdatt(product3Obj, elAtt3TitleText, elAtt3Block, elAtt3ListBlock, blockType, elAtt3TitleTextSelected)

        if (product0Obj["att0Array"].length > 0) {
            productBlock.querySelector('.inc_product_desc_att_zero_title_block').addEventListener('click', function() {
                if (document.querySelector('.inc_product_desc_att_color_block.show_dropdown') != null) {
                    document.querySelector('.inc_product_desc_att_color_block.show_dropdown').classList.remove('show_dropdown')
                }
                this.parentNode.classList.toggle('show_dropdown')
            })
        }
        if (productColorsObj["colorArray"].length > 0) {
            productBlock.querySelector('.inc_product_desc_att_color_title_block').addEventListener('click', function() {
                if (document.querySelector('.inc_product_desc_att_zero_block.show_dropdown') != null) {
                    document.querySelector('.inc_product_desc_att_zero_block.show_dropdown').classList.remove('show_dropdown')
                }
                this.parentNode.classList.toggle('show_dropdown')
            })
        }
        elGallerylefttArrow.setAttribute('title', 'Scroll left')
        elGalleryRightArrow.setAttribute('title', 'Scroll right')

        elGalleryRightArrow.addEventListener("click", function() {
            var prod_card = this.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            var pr_id = prod_card.getAttribute('data-main_id')
            slideTo(pr_id, 0, prod_card, "right", "arrow")
        });
        elGallerylefttArrow.addEventListener("click", function() {
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
            elAddText.innerText = "Add To Bundle";
            break;
        case "sidebar":
            elAddText.innerText = "Add To Cart";
            break;
        case "am":
            elAddText.innerText = "Add To Cart";
            break;
        }
        elAddBlock.addEventListener("click", function() {
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
            var modfl = true
            if (productModuleBlock.classList.contains('configurable') == modfl) {
                if (flag_check == 1) {
                    setTimeout(function() {
                        if (document.querySelector('.sidebar_outer.sidebar_outer_active .inc_product_modal_block.inc_active') != null) {
                            document.querySelector('.sidebar_outer.sidebar_outer_active .inc_product_modal_block.inc_active').classList.remove('inc_active')
                            document.querySelector('body').classList.remove('inc_popup_open');
                            if (inc_scroll_height > 100) {
                                window.scrollTo(0, inc_scroll_height);
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
                setTimeout(function() {
                    if (document.querySelector('.inc_sidebar_modal_block.inc_active .inc_product_modal_block.inc_active') != null) {
                        document.querySelector('.inc_sidebar_modal_block.inc_active .inc_product_modal_block.inc_active').classList.remove('inc_active')
                        document.querySelector('body').classList.remove('inc_popup_open')
                        if (inc_scroll_height > 100) {
                            window.scrollTo(0, inc_scroll_height);
                        }
                    }
                    if (document.querySelector('.inc_sidebar_modal_block.inc_active') != null && document.querySelector('.inc_sidebar_modal_block.inc_active .inc_product_modal_block.inc_active') == null && document.querySelector('.inc_sidebar_modal_block') != null) {
                        document.querySelector('.inc_sidebar_modal_block').classList.remove('overflow_visible')
                    }
                }, 100)
            }
            setTimeout(function() {
                if (document.querySelector('.sidebar_outer.sidebar_outer_active') != null && document.querySelector('.inc_product_modal_block.inc_active') == null) {
                    if(document.querySelector('.inc_sidebar_modal_block.inc_active') != null) document.querySelector('.inc_sidebar_modal_block.inc_active').classList.remove('overflow_visible')
                }
            }, 200)
        });
        return productBlock;
    }
    function productzeroatt(elAtt0TitleText, elAtt0Block, product0Obj, elAtt0ListBlock, blockType) {
        elAtt0TitleText.innerText = product0Obj["att0Array"][0].code + ':';
        elAtt0Block.classList.add("inc_active");
        elAtt0Block.classList.add("inc_total_" + product0Obj["att0Array"].length)
        product0Obj["att0Array"].forEach(function(sizeObj) {
            var attSizeImgBlock0 = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img_block');
            var attSizeImg0 = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img');
            attSizeImgBlock0.setAttribute('blocktype', blockType)
            attSizeImgBlock0.setAttribute('varianttypes', 'zero')
            attSizeImgBlock0.addEventListener('click', function() {
                var elvariant = this;
                var elblktype = this.getAttribute('blocktype')
                var elvtype = this.getAttribute('varianttypes')
                INC.methods.mappvariants(elvariant, elblktype, elvtype)
            })
            attSizeImgBlock0.classList.add('avail')
            if (sizeObj["imgSrc"].length > 0) {
                if (sizeObj["colorCode"] == "" || sizeObj["colorCode"] == undefined) {
                    var sizeimg = generate_html_tag('img');
                    sizeimg.setAttribute('alt', sizeObj["text"])
                    sizeimg.src = sizeObj["imgSrc"]
                    attSizeImgBlock0.setAttribute('data-optionimge', sizeObj["imgSrc"])
                    attSizeImgBlock0.appendChild(sizeimg);
                    elAtt0TitleText.classList.add('img_tag_avail')
                    elAtt0TitleText.style.display = "flex"
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

    function productcoloratt(productColorsObj, productBlock, elAttColorListBlock, blockType, elAttColorBlock, elAttColorTitleText) {
        if (productColorsObj.colorArray.length > 0) {
            if (productColorsObj["colorArray"].length > 0) {
                elAttColorListBlock.innerHTML = "";
                elAttColorBlock.classList.add("inc_active");
                elAttColorTitleText.innerText = "Color";
                var one_attr_flag = false
                if (productColorsObj["colorArray"].length == 1) {
                    one_attr_flag = true
                }
                productColorsObj["colorArray"].forEach(function(colorObj) {
                    var attColorBlock = generate_html_tag('div', 'inc_product_desc_att_color_list_item_block')
                    var attColorImgBlock = generate_html_tag('div', 'inc_product_desc_att_color_list_item_img_block');
                    var attColorImg = generate_html_tag('div', 'inc_product_desc_att_color_list_item_img_block');
                    attColorImgBlock.setAttribute('blocktype', blockType)
                    attColorImgBlock.setAttribute('varianttypes', 'color')
                    attColorImgBlock.addEventListener('click', function() {
                        var elvariantc = this;
                        var elblktypec = this.getAttribute('blocktype')
                        var elvtypec = this.getAttribute('varianttypes')
                        INC.methods.mappvariants(elvariantc, elblktypec, elvtypec)
                    })
                    imgcolorgen(colorObj, attColorImg)
                    var colorTitle = generate_html_tag('a');
                    colorTitle.innerText = colorObj["text"]
                    colorTitle.title = colorObj["text"].toUpperCase();
                    colorTitle.addEventListener('click', function(e) {
                        e.preventDefault();
                    })
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
                    var prod_id = productBlock.getAttribute('data-main_id');
                    var mt = true;
                    if (one_attr_flag == mt) {
                        setTimeout(function() {
                            if (INC.methods.getProductIdFromWebPage() == prod_id) {
                                attColorImgBlock.click()
                            }
                        }, 0)
                    }
                });
            }
        }
    }

    function productsizeatt(elAttSizeTitleText, elAttSizeBlock, productSizesObj, elAttSizeListBlock, elAttSizeTitleTextSelected, blockType) {
        if (productSizesObj.sizeArray.length > 0) {
            if (productSizesObj["sizeArray"][0].code != "Color") {
                elAttSizeListBlock.innerHTML = "";
                elAttSizeTitleText.innerText = productSizesObj["sizeArray"][0].code;
                elAttSizeBlock.classList.add("inc_active");
                productSizesObj["sizeArray"].forEach(function(sizeObj) {
                    var attSizeImgBlock = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img_block');
                    var attSizeImg = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img');
                    elAttSizeTitleTextSelected.innerText = "Please select option"
                    attSizeImgBlock.classList.add('avail')
                    attSizeImgBlock.setAttribute('blocktype', blockType)
                    attSizeImgBlock.setAttribute('varianttypes', 'size')
                    attSizeImgBlock.addEventListener('click', function() {
                        var elvariants = this;
                        var elblktypes = this.getAttribute('blocktype')
                        var elvtypes = this.getAttribute('varianttypes')
                        INC.methods.mappvariants(elvariants, elblktypes, elvtypes)
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

    function productthirdatt(product3Obj, elAtt3TitleText, elAtt3Block, elAtt3ListBlock, blockType, elAtt3TitleTextSelected) {
        if (product3Obj.att3Array.length > 0) {
            if (product3Obj["att3Array"][0].code != "Color") {
                elAtt3ListBlock.innerHTML = "";
                elAtt3TitleTextSelected.innerText = "Please select option"
                product3Obj["att3Array"].forEach(function(sizeObj) {
                    elAtt3TitleText.innerText = product3Obj["att3Array"][0].code;
                    elAtt3Block.classList.add("inc_active");
                    var attSizeImgBlock3 = generate_html_tag('div', 'inc_product_desc_att_third_list_item_img_block');
                    var attSizeImg3 = generate_html_tag('div', 'inc_product_desc_att_third_list_item_img');
                    attSizeImgBlock3.setAttribute('blocktype', blockType)
                    attSizeImgBlock3.setAttribute('varianttypes', 'third')
                    attSizeImgBlock3.addEventListener('click', function() {
                        var elvariantd = this;
                        var elblktyped = this.getAttribute('blocktype')
                        var elvtyped = this.getAttribute('varianttypes')
                        INC.methods.mappvariants(elvariantd, elblktyped, elvtyped)
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
    INC.methods.mappvariants = function(obj, blocktype, type_of_variant) {
        if (obj.parentNode != undefined) {
            var productModuleBlck = obj.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
            var vtrflg = true;
            if (productModuleBlck.classList.contains('inc_product_showcase_block') == vtrflg || productModuleBlck.classList.contains('inc_product_modal_block') == vtrflg) {
                productModuleBlck = productModuleBlck.parentNode
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

            var main_p_id = INC.dataStore.methods().getFirstProductObjByMainId({
                mainId: mainprdid
            }).id;
            var findobj = new INC.classes.FindObj({
                id: main_p_id
            });
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

            var productSizesObj = INC.dataStore.methods().getProductSizesObj(findobj, obj);
            var productColorsObj = INC.dataStore.methods().getProductColorsObj(findobj, obj);
            var product3rdObj = INC.dataStore.methods().getProductopt3Obj(findobj, obj);

            var elAttSizeBlock = productblockmod.querySelector('.inc_product_desc_att_size_block')
            var elAttColorBlock = productblockmod.querySelector('.inc_product_desc_att_color_block')
            var elAtt3rdBlock = productblockmod.querySelector('.inc_product_desc_att_third_block')
            var elAttSizeListBlock = productblockmod.querySelector('.inc_product_desc_att_size_list_block')
            var elAttColorListBlock = productblockmod.querySelector('.inc_product_desc_att_color_list_block')
            var elAtt3ListBlock = productblockmod.querySelector('.inc_product_desc_att_third_list_block')
            var elselcolortextmodal = productblockmod.querySelector('.inc_product_desc_att_color_title_text_selected')
            var elcolortextmodal = productblockmod.querySelector('.inc_product_desc_att_color_title_text')
            var elAttSizeListBlockshow = productblockshow.querySelector('.inc_product_desc_att_size_list_block')
            var elAttColorListBlockshow = productblockshow.querySelector('.inc_product_desc_att_color_list_block')
            var elAtt3ListBlockshow = productblockshow.querySelector('.inc_product_desc_att_third_list_block')
            var elselcolortextshow = productblockshow.querySelector('.inc_product_desc_att_color_title_text_selected')
            var elcolortextshow = productblockmod.querySelector('.inc_product_desc_att_color_title_text')

            if (type_of_variant == "zero" || type_of_variant == "third" || type_of_variant == "color") {
                elAttSizeListBlock.innerHTML = "";
                elAttSizeListBlockshow.innerHTML = "";
                if (productSizesObj["sizeArray"].length > 0) {
                    elAttSizeBlock.classList.add("inc_active");
                    productSizesObj["sizeArray"].forEach(function(sizeObj) {
                        var attSizeImgBlock = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img_block');
                        var attSizeImg = generate_html_tag('div', 'inc_product_desc_att_size_list_item_img');
                        attSizeImgBlock.setAttribute('blocktype', blocktype)
                        attSizeImgBlock.setAttribute('varianttypes', 'size')
                        attSizeImgBlock.addEventListener('click', function() {
                            var elvariants2 = this;
                            var elblktypes2 = this.getAttribute('blocktype')
                            var elvtypes2 = this.getAttribute('varianttypes')
                            INC.methods.mappvariants(elvariants2, elblktypes2, elvtypes2)
                        })
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
            if (type_of_variant == "zero" || type_of_variant == "size" || type_of_variant == "third") {
                elAttColorListBlock.innerHTML = "";
                elAttColorListBlockshow.innerHTML = "";
                if (productModuleBlck.querySelector('.inc_product_modal_block .inc_product_desc_att_color_title_text_selected').innerText == "" && productModuleBlck.querySelector('.inc_product_desc_att_color_title_text_selected').innerText == "") {
                    productModuleBlck.querySelector('.inc_product_modal_block .inc_product_desc_att_color_title_text_selected').innerText = ""
                    productModuleBlck.querySelector('.inc_product_desc_att_color_title_text_selected').innerText = ""
                }
                var selcol = findobj.colorText
                if (productColorsObj["colorArray"].length > 0) {
                    elAttColorBlock.classList.add("inc_active");
                    var clrselflag = false;
                    productColorsObj["colorArray"].forEach(function(colorObj) {
                        if (selcol == colorObj["text"]) {
                            findobj.colorText = colorObj["text"]
                            findobj.color_text = colorObj["text"]
                        } else {
                            findobj.colorText = ""
                            findobj.color_text = ""
                        }
                        var attColorBlock = generate_html_tag('div', 'inc_product_desc_att_color_list_item_block')
                        var attColorImgBlock = generate_html_tag('div', 'inc_product_desc_att_color_list_item_img_block');
                        var attColorImg = generate_html_tag('div', 'inc_product_desc_att_color_list_item_img_block');

                        attColorImgBlock.setAttribute('blocktype', blocktype)
                        attColorImgBlock.setAttribute('varianttypes', 'color')
                        attColorImgBlock.addEventListener('click', function() {
                            var elvariantc2 = this;
                            var elblktypec2 = this.getAttribute('blocktype')
                            var elvtypec2 = this.getAttribute('varianttypes')
                            INC.methods.mappvariants(elvariantc2, elblktypec2, elvtypec2)
                        })
                        imgcolorgen(colorObj, attColorImg)

                        var colorTitle = generate_html_tag('a');
                        colorTitle.innerText = colorObj["text"]
                        colorTitle.title = colorObj["text"];
                        colorTitle.addEventListener('click', function(e) {
                            e.preventDefault();
                        })
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
                        elAttColorListBlock.appendChild(attColorBlock);
                        elAttColorListBlockshow.appendChild(attColorBlockclone);
                        if (color_text != null) {
                            if (color_text.toLocaleLowerCase() == colorObj.text.toLocaleLowerCase()) {
                                clrselflag = true
                                attColorBlock.classList.add('inc_active');
                                attColorBlockclone.classList.add('inc_active');
                                elselcolortextshow.innerText = colorObj.text
                                elselcolortextmodal.innerText = colorObj.text
                                elcolortextmodal.style.backgroundColor = colorObj["colorCode"];
                                elcolortextshow.style.backgroundColor = colorObj["colorCode"];
                            } else if (productColorsObj["colorArray"].length == 1) {
                                clrselflag = true
                                attColorBlock.classList.add('inc_active');
                                attColorBlockclone.classList.add('inc_active');
                                productblockmod.querySelector('.inc_product_desc_att_block').setAttribute('data-color', colorObj.text)
                                productblockshow.querySelector('.inc_product_desc_att_block').setAttribute('data-color', colorObj.text)
                                elselcolortextshow.innerText = colorObj.text
                                elselcolortextmodal.innerText = colorObj.text
                                elcolortextmodal.style.backgroundColor = colorObj["colorCode"];
                                elcolortextshow.style.backgroundColor = colorObj["colorCode"];
                            }
                        }
                    });
                    var flg = false;
                    if (clrselflag == flg) {
                        var ctext = productblockmod.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block').getAttribute('data-color')
                        var color_colorcodesel = productblockmod.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block').getAttribute('data-colorcode');
                        productblockmod.querySelector('.inc_product_desc_att_block').setAttribute('data-color', ctext)
                        productblockshow.querySelector('.inc_product_desc_att_block').setAttribute('data-color', ctext)
                        elAttColorListBlock.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block').parentNode.classList.add('inc_active')
                        elAttColorListBlockshow.querySelector('.inc_product_desc_att_color_list_item_block .inc_product_desc_att_color_list_item_img_block').parentNode.classList.add('inc_active')
                        elselcolortextshow.innerText = ctext
                        elselcolortextmodal.innerText = ctext
                        elcolortextmodal.style.backgroundColor = color_colorcodesel;
                        elcolortextshow.style.backgroundColor = color_colorcodesel;
                    }
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
                elselcolortextshow.innerText = colorlowertext
                elselcolortextmodal.innerText = colorlowertext
                if (productblockmod.querySelector('.inc_product_desc_att_color_list_item_block.inc_active div') != null) {
                    var color_colorcode = productblockmod.querySelector('.inc_product_desc_att_color_list_item_block.inc_active div').getAttribute('data-colorcode');
                    elcolortextmodal.style.backgroundColor = color_colorcode;
                    elcolortextshow.style.backgroundColor = color_colorcode;
                }
            }
            if (type_of_variant == "zero" || type_of_variant == "size" || type_of_variant == "color") {
                elAtt3ListBlock.innerHTML = "";
                elAtt3ListBlockshow.innerHTML = "";
                if (product3rdObj["att3Array"].length > 0) {
                    elAtt3rdBlock.classList.add("inc_active");

                    product3rdObj["att3Array"].forEach(function(sizeObj) {
                        var attSizeImgBlock3 = generate_html_tag('div', 'inc_product_desc_att_third_list_item_img_block');
                        var attSizeImg3 = generate_html_tag('div', 'inc_product_desc_att_third_list_item_img');

                        attSizeImgBlock3.setAttribute('blocktype', blocktype)
                        attSizeImgBlock3.setAttribute('varianttypes', 'third')
                        attSizeImgBlock3.addEventListener('click', function() {
                            var elvarianttd = this;
                            var elblktypetd = this.getAttribute('blocktype')
                            var elvtypetd = this.getAttribute('varianttypes')
                            INC.methods.mappvariants(elvarianttd, elblktypetd, elvtypetd)
                        })
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
            var checkzeroselflag = false
            if (productblockmod.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block.inc_active') == null) {
                checkzeroselflag = true
            }
            var sfl = true;
            if (type_of_variant == "zero" || checkzeroselflag == sfl && type_of_variant != "color") {
                var zerolowertext = ""
                zero_text = ""
                if (checkzeroselflag == sfl) {
                    if (obj != null) {
                        zero_text = obj.getAttribute('data-size')
                        zerolowertext = zero_text.toLocaleLowerCase()
                    } else {
                        if (productblockmod.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block') != null) {
                            zero_text = productblockmod.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block').getAttribute('data-size')
                            zerolowertext = zero_text.toLocaleLowerCase()
                        }
                    }
                } else {
                    if (obj != null) {
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
                if (productblockmod.querySelector('.inc_product_desc_att_zero_list_block .inc_product_desc_att_size_list_item_img_block[datasize="' + zerolowertext + '"]') != null) {
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
    INC.methods.checkVariantSelection = function(prod_module_block) {
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
        var vc = true
        var vf = false
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
    function imgcolorgen(colorObj, attColorImg) {
        if (colorObj["colorCode"] != "" && colorObj["colorCode"] != undefined) {
            var spancolorcode = generate_html_tag('span');
            spancolorcode.setAttribute('alt', colorObj["text"])
            spancolorcode.style.backgroundColor = colorObj["colorCode"];
            attColorImg.appendChild(spancolorcode);
        } else if (colorObj["imgSrc"].length > 0) {
            if (colorObj["colorCode"] == "") {
                var colorImg = generate_html_tag('img');
                colorImg.setAttribute('alt', colorObj["text"])
                colorImg.src = colorObj["imgSrc"]
                attColorImg.appendChild(colorImg);
            }
        }
    }
    INC.methods.updateProductBlock = function(productBlockel, findObj, blockType) {
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
            if (blockType == "sidebar" || blockType == "am") {
                productBlock.querySelector('.inc_product_variant_simple_text').innerText = "Select Option"
            } else {
                productBlock.querySelector('.inc_product_variant_simple_text').setAttribute('title', sel_attr_text)
                if (productModuleBlock.querySelector('.inc_product_block .inc_product_add_block.added_inc') != null) {
                    productBlock.querySelector('.inc_product_variant_simple_text').innerText = sel_attr_text
                }
            }
            if (color_text != null) {
                var PrdVarSimTxt = productBlock.querySelector('.inc_product_variant_simple_text')
                var colorTitle = generate_html_tag('div');

                colorTitle.addEventListener('click', function(e) {
                    e.preventDefault();
                })
                PrdVarSimTxt.appendChild(colorTitle);
                colorTitle.classList.add("colorCircle")
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
                productModuleBlock.querySelector('.inc_product_desc_att_size_title_text').textContent = sel_attr_text
                productModuleBlock.querySelector('.inc_product_desc_att_size_title_text').setAttribute('title', sel_attr_text)
                if (modal_attr_block.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active') != null) {
                    var optionimage = modal_attr_block.querySelector('.inc_product_desc_att_size_list_item_img_block.inc_active').getAttribute('data-optionimge');
                    if (optionimage != undefined && optionimage != "") {
                        productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_desc_att_zero_title_text').innerHTML = ""
                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_att_zero_title_text').innerHTML = ""
                        var optimg = generate_html_tag('img')
                        optimg.src = optionimage
                        productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_desc_att_zero_title_text').appendChild(optimg)
                        productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_att_zero_title_text').appendChild(optimg)
                    }
                }
            }
            if (color_text != undefined) {
                var ccode = modal_attr_block.querySelector('.inc_product_desc_att_color_list_item_block.inc_active div').getAttribute('data-colorcode');
                productModuleBlock.querySelector('.inc_product_showcase_block .inc_product_desc_att_color_title_text').style.backgroundColor = ccode
                productModuleBlock.querySelector('.inc_product_modal_block .inc_product_desc_att_color_title_text').style.backgroundColor = ccode
            }

            var elImgBlock = productBlock.querySelector('.inc_product_img_block');
            var elImgGalleryListBlock = productBlock.querySelector('.inc_product_img_gallery_list_block');
            var elTitleText = productBlock.querySelector('.inc_product_desc_title_text');
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
            if (productBlock.querySelector('.inc_prod_finish_text') != null) {
                if (productObj.finish != null && productObj.finish != "") {
                    productBlock.querySelector('.inc_prod_finish_text').innerText = productObj.finish
                } else {
                    productBlock.querySelector('.inc_prod_finish_text').innerText = ""
                }
            }
            if (productBlock.querySelector('.inc_prod_coverage_text') != null) {
                if (productObj.coverage != null && productObj.coverage != "") {
                    productBlock.querySelector('.inc_prod_coverage_text').innerText = productObj.coverage
                } else {
                    productBlock.querySelector('.inc_prod_coverage_text').innerText = ""
                }
            }
            if (productBlock.querySelector('.inc_prod_undertone_text') != null) {
                if (productObj.underTone != null && productObj.underTone != "") {
                    productBlock.querySelector('.inc_prod_undertone_text').innerText = productObj.underTone
                } else {
                    productBlock.querySelector('.inc_prod_undertone_text').innerText = ""
                }
            }
            if (productBlock.querySelector('.inc_prod_skinType_text') != null) {
                if (productObj.skinType != null && productObj.skinType != "") {
                    productBlock.querySelector('.inc_prod_skinType_text').innerText = productObj.skinType
                } else {
                    productBlock.querySelector('.inc_prod_skinType_text').innerText = ""
                }
            }
            var elImgMainImg = elImgBlock.querySelector('.inc_product_img_main_img');

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
            elImgGalleryListBlock.innerHTML = "";
            if ((productObj.otherImageList != null) && productObj.otherImageList.length > 1) {
                prepareAdditionalimages(elImgGalleryListBlock, productObj, productBlock)
            } else {
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
            if (elTitleText.querySelector('strong') != null && window.innerWidth < 821 && INC.config.pageType == "pdp") {
                elTitleText.querySelector('div').innerHTML = "<strong>This Item </strong>" + productObj.name
            } else {
                elTitleText.querySelector('div').textContent = productObj.name
            }
            elTitleText.querySelector('a').setAttribute('title', productObj.name)

            var activePrice = parseFloat(productObj.activePrice).toFixed(2).toString();
            var regularPrice = parseFloat(productObj.regularPrice).toFixed(2).toString();
            var totalsaveprc = get_discount_price(productObj.regularPrice, productObj.activePrice)
            var totalsaveper = get_discount_price_percentage(productObj.regularPrice, productObj.activePrice)

            elPriceActiveText.parentNode.parentNode.parentNode.classList.remove('is_special_ecirp')
            // elPriceActiveMsg.textContent = " + VAT"
            elPriceRegularText.textContent = "";
            if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
                elPriceActiveText.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
                elPriceActiveText.innerHTML = formatter.format(activePrice)
                elPriceRegularText.innerHTML = "Was " + formatter.format(regularPrice)
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
            var elQtyInput = productBlock.parentNode.parentNode.querySelector('.inc_product_modal_block .inc_product_desc_qty_add_btn_block .inc_product_qty_block input');
            var sku = productBlock.getAttribute('data-sku');
            var bundle_id = productBlock.getAttribute('data-bundle_id');
            var main_id = productBlock.getAttribute('data-main_id');
            var qty = parseInt(elQtyInput.value);
            var pname = productBlock.querySelector('.inc_product_desc_title_text').textContent;
            var pprice = productBlock.querySelector('.inc_product_desc_ecirp_active_text').textContent.replace('£', '');

            if (elAddText.parentNode.parentNode.querySelector('.inc_product_desc_add_img.checked') != null) {
                INC.methods.updateBundleCart({
                    sku: sku,
                    qty: qty
                }, "add", main_id, bundle_id, pname, pprice);
            }
            setTimeout(function() {
                if (elImgMainImg.querySelectorAll('img')[0].naturalWidth == 360) {
                    elImgMainImg.querySelectorAll('img')[0].setAttribute('src', productObj["imageURLMain"]);
                }
            }, 200);
        }
        if (blockType == "pdp" && productModuleBlock.querySelector('.inc_product_add_block.added_inc') != null) {
            productModuleBlock.querySelector('.inc_product_variant_simple_block').classList.add('added_inc')
        }
    }

    INC.methods.createProductListItemBlock = function(productObjs) {
        var productListItemBlock = generate_html_tag('div', 'inc_pdp_bundle_product_list_item_block');
        var findObj = new INC.classes.FindObj({
            id: productObjs.id,
            mainId: productObjs.mainId
        });
        var productObj = INC.dataStore.methods().getProductById(findObj);
        productListItemBlock.style.userSelect = "none";
        productListItemBlock.setAttribute('data-id', productObj.id);
        productListItemBlock.setAttribute('data-sku', productObj.sku);
        productListItemBlock.setAttribute('data-main_id', productObj.mainId);
        productListItemBlock.setAttribute('data-bundle_id', productObj.bundleId);

        var seemoreprodhtml = '<div class="inc_pdp_bundle_product_list_item_added_block"><div class="inc_pdp_bundle_product_list_item_added_btn_block"><div class="inc_pdp_bundle_product_list_item_added_btn_img_block"><div class="inc_pdp_bundle_product_list_item_added_btn_img"></div></div><div class="inc_pdp_bundle_product_list_item_added_btn_text_block"><div class="inc_pdp_bundle_product_list_item_added_btn_text"></div></div></div></div><div class="inc_pdp_bundle_product_list_item_img_block"><div class="inc_pdp_bundle_product_list_item_img"><img class="inc_lazy" data-src="' + productObj.imageURL + '" src="' + productObj.imageURL + '"></div></div><div class="inc_pdp_bundle_product_list_item_title_block"><div class="inc_pdp_bundle_product_list_item_title_text_block"><div class="inc_pdp_bundle_product_list_item_title_text"></div></div></div><div class="inc_pdp_bundle_product_list_item_ecirp_block"><div class="inc_pdp_bundle_product_list_item_ecirp_active_block"><div class="inc_pdp_bundle_product_list_item_ecirp_active_text_block"><div class="inc_pdp_bundle_product_list_item_ecirp_active_text"></div></div></div></div>'

        productListItemBlock.innerHTML = seemoreprodhtml
        productListItemBlock.querySelector('.inc_pdp_bundle_product_list_item_img img').setAttribute('onerror', "this.src='" + INC.config.noimage + "'");
        productListItemBlock.addEventListener("click", function() {
            Array.prototype.forEach.call(document.querySelectorAll('.inc_product_desc_att_size_list_block'), function(attSizeListBlock) {
                attSizeListBlock.classList.remove("inc_active");
            });

            var elListMainBlock = document.querySelector('.inc_pdp_bundle_product_list_main_block');
            Array.prototype.forEach.call(elListMainBlock.querySelectorAll('.inc_product_module_block'), function(productBlock) {
                productBlock.setAttribute('style', 'display: none!important');
            });
            elListMainBlock.querySelector('.inc_product_module_block' + "[data-main_id=\"" + productObj.mainId + "\"]").style.display = "block";

            Array.prototype.forEach.call(productListItemBlock.parentNode.querySelectorAll('.inc_pdp_bundle_product_list_item_block'), function(pListItemBlock) {
                pListItemBlock.classList.remove("inc_active");
            });

            productListItemBlock.classList.add("inc_active");
        });

        return productListItemBlock;
    }
    INC.methods.updateBundleCart = function(bundleCartObj, type, main_id, bundle_id, pname, pprice) {
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
            INC.config.pdpaddedProductList.remove_prod_list = function() {
                var what, a = arguments, L = a.length, ax;
                while (L && this.length) {
                    what = a[--L];
                    while ((ax = this.indexOf(what)) !== -1) {
                        this.splice(ax, 1);
                    }
                }
                return this;
            }
            ;
            listToDelete[0] = main_id
            for (var i = 0; i < INC.config.bundle_tracking.length; i++) {
                var obj = INC.config.bundle_tracking[i];
                if (obj != undefined) {
                    if (listToDelete.indexOf(obj.id) !== -1) {
                        INC.config.bundle_tracking.splice(i, 1);
                    }
                }
            }
            INC.config.bundle_skuPushed.remove_prod_list = function() {
                var what1, a1 = arguments, L1 = a1.length, ax1;
                while (L1 && this.length) {
                    what1 = a1[--L1];
                    while ((ax1 = this.indexOf(what1)) !== -1) {
                        this.splice(ax1, 1);
                    }
                }
                return this;
            }
            ;
            INC.config.pdpaddedProductList.remove_prod_list(main_id);
            INC.config.bundle_skuPushed.remove_prod_list(bundleCartObj["sku"]);
            break;
        }

        if (INC.config.pageType == "pdp")
            this.calculateBundleTotal();
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
        var total_qty = 0
        var total_collect_point = 0
        var mainId = INC.methods.getProductIdFromWebPage();
        if (bundleCartProducts != null && bundleCartProducts != undefined) {
            Object.keys(bundleCartProducts).forEach(function(sku) {
                for (var mainProductId in productListObj) {
                    for (var childProductId in productListObj[mainProductId]) {
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

    INC.methods.updateBundleCartBlock = function(priceObj) {
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
            var elBundleCartPriceRegularText = document.querySelector('.inc_pdp_bundle_cart_summary_ecirp_regular_text')
            var elBundleCartPriceRegularText_Msg = document.querySelector('.inc_pdp_bundle_cart_summary_ecirp_regular_text_msg')
            var elBundleCartPriceActiveText = document.querySelector('.inc_pdp_bundle_cart_summary_ecirp_active_text')
            var elBundleCartTitleTextcount = document.querySelector('.inc_pdp_bundle_cart_title_text')
            var elbundlesavetext = document.querySelector('.inc_pdp_bundle_cart_summary_ecirp_save_text')
            var elBundleCartAddBtnText = document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_text')
            var elBundlePriceActiveMsg = document.querySelector('.inc_pdp_bundle_cart_summary_ecirp_active_text_msg')

            if (INC.clientConfig.statusVAT == false) {
                elBundlePriceActiveMsg.innerText = "Exc VAT"
            } else {
                elBundlePriceActiveMsg.innerText = "Inc VAT"
            }

            elBundleCartAddedBlock.innerHTML = "";
            var bundleCartProductsArray = Object.keys(bundleCartProducts);
            elBundleCartSummaryViewBtnCount.textContent = bundleCartProductsArray.length;
            if (window.innerWidth < 821) {
                elBundleCartTitleTextcount.textContent = "Items you've added"
            }
            for (var skup of INC.config.bundle_skuPushed) {
                var elcont = skup
                for (var bundaray of bundleCartProductsArray) {
                    var findObj = new INC.classes.FindObj({
                        sku: bundaray
                    });
                    var productObj = INC.dataStore.methods().getProductBySKU(findObj);
                    if (elcont == productObj.id) {
                        var productId = productObj.id;
                        var prepen_elm = this.createBundleCartAddedProductBlock(productId, bundleCartProducts[bundaray], "pdp")
                        if (elBundleCartAddedBlock != null || elBundleCartAddedBlock != undefined) {
                            elBundleCartAddedBlock.insertBefore(prepen_elm, elBundleCartAddedBlock.childNodes[0]);
                        }
                    }
                }
            }
            elBundleCartPriceRegularText.style.display = "none";
            elBundleCartPriceRegularText_Msg.style.display = "none";

            if (totalActivePrice != totalRegularPrice) {
                elBundleCartPriceRegularText.style.display = "flex";
                elBundleCartPriceRegularText_Msg.style.display = "flex";
            }

            if (bundleCartProductsArray.length == 0) {
                setTimeout(function() {
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
            var totalsaveprcs = get_discount_price(totalRegularPrice, totalActivePrice)
            var totalsavepers = get_discount_price_percentage(totalRegularPrice, totalActivePrice)
            if (totalRegularPrice != "0.00" && totalRegularPrice != totalActivePrice && totalRegularPrice != null && totalRegularPrice != "") {
                elBundleCartPriceRegularText.innerHTML = formatter.format(totalRegularPrice)
                elBundleCartPriceRegularText.parentNode.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
                elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.add('is_special_ecirp')
                elbundlesavetext.innerHTML = "You save: " + formatter.format(totalsaveprcs) + " (" + (totalsavepers) + "%)";
            } else {
                elbundlesavetext.innerHTML = ""
                elBundleCartPriceRegularText.parentNode.parentNode.parentNode.classList.add('simple_ecirp')
            }

            if (elPdpBundleCartBlock != null && elPdpBundleCartBlock != undefined) {
                var elBundleCartTitleText = document.querySelector('.inc_pdp_bundle_cart_title_text')
                var elBundleCartAddBtnTexts = document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_text')
                elBundleCartAddBtnTexts.style.textTransform = "none"
                elBundleCartTitleText.textContent = "Price Summary";
                elBundleCartAddBtnTexts.textContent = "Deliver";
                if (totalProductCount <= 1) {
                    elBundleCartAddBtnTexts.textContent = "Deliver";
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
            elPriceActiveText.innerHTML = formatter.format(totalActivePrice)

            setTimeout(function() {
                if (INC.dataStore.bundleCartProducts != null) {
                    if (Object.keys(INC.dataStore.bundleCartProducts).length == 0) {
                        elBundleCartAddBtnText.textContent = "Deliver";
                        elBundleCartAddBtnText.parentNode.parentNode.setAttribute('style', 'pointer-events: none;opacity: 0.5;')
                    } else {
                        elBundleCartAddBtnText.parentNode.parentNode.setAttribute('style', 'pointer-events: auto;opacity: 1;')
                    }
                }
            }, 100);
        }

    }

    INC.methods.createBundleCartAddedProductBlock = function(productId, qty) {
        var addedProductBlock = generate_html_tag('div', 'inc_pdp_bundle_cart_added_product_block')
        var findObj = new INC.classes.FindObj({
            id: productId
        });
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
        var addedsumprodhtml = '<div class="inc_pdp_bundle_cart_added_product_img_block"><div class="inc_pdp_bundle_cart_added_product_img"><img src="' + productObj.imageURL + '" data-src="' + productObj.imageURL + '"></div></div><div class="inc_pdp_bundle_cart_added_product_title_block"><div class="inc_pdp_bundle_cart_added_product_title_text_block"><div class="inc_pdp_bundle_cart_added_product_title_text"><a title="' + productObj.name + '"><div style="text-transform: unset;"><span>' + qty + ' <small>x</small> </span>' + productObj.name + '</div></a></div></div></div><div class="inc_pdp_bundle_cart_added_product_qty_block"><div class="inc_pdp_bundle_cart_added_product_qty_text_block"><div class="inc_pdp_bundle_cart_addeed_product_qty_text">' + qty + '</div></div></div><div class="inc_pdp_bundle_cart_added_product_ecirp_block"><div class="inc_pdp_bundle_cart_added_product_ecirp_text_block"><div class="inc_pdp_bundle_cart_added_product_ecirp_text">' + formatter.format(productObj.activePrice * qty) + '</div></div></div><div class="inc_pdp_bundle_cart_added_product_att_block" title="' + sel_attr_text + '"><div class="inc_pdp_bundle_cart_added_product_att_color_block"><div class="inc_pdp_bundle_cart_added_product_att_color_text_block" style="text-transform: none;">' + sel_attr_text + '</div></div><div class="inc_pdp_bundle_cart_added_product_att_size_block"><div class="inc_pdp_bundle_cart_added_product_att_size_text_block"><div class="inc_pdp_bundle_cart_added_product_att_size_text"></div></div></div></div><div class="inc_pdp_bundle_cart_added_product_edit_block"><div class="inc_pdp_bundle_cart_added_product_edit_text_block"><div class="inc_pdp_bundle_cart_added_product_edit_text"></div></div><div class="inc_pdp_bundle_cart_added_product_edit_img_block"><div class="inc_pdp_bundle_cart_added_product_edit_img"></div></div></div>'

        addedProductBlock.innerHTML = addedsumprodhtml

        addedProductBlock.querySelector('.inc_pdp_bundle_cart_added_product_img img').setAttribute('onerror', "this.src='" + INC.config.noimage + "'")

        var elEditTextBlock = addedProductBlock.querySelector(".inc_pdp_bundle_cart_added_product_edit_text_block")
        var elEditImgBlock = addedProductBlock.querySelector(".inc_pdp_bundle_cart_added_product_edit_img_block");

        elEditTextBlock.addEventListener("click", function() {
            if (INC.config.deviceType == "mobile") {
                if (document.querySelector('.inc_pdp_bundle_product_list_item_block' + '[data-main_id="' + productObj.mainId + '"]') != null)
                    document.querySelector('.inc_pdp_bundle_product_list_item_block' + '[data-main_id="' + productObj.mainId + '"]').click();
            }
            setTimeout(function() {
                document.querySelector('.inc_product_block' + '[data-id="' + productObj.id + '"]').parentNode.parentNode.querySelector('.inc_product_modal_block').classList.add('inc_active');
                document.querySelector('html').classList.add('inc_overlay');

            }, 50);
        });
        elEditImgBlock.addEventListener("click", function() {
            document.querySelector('.inc_product_block' + '[data-id="' + productObj.id + '"]').querySelector('.inc_product_desc_add_block').click();
        });
        return addedProductBlock;
    }

    INC.methods.clear = function() {
        // remsidebarelm()

        INC.config.siderbaropenCount = 0;

        if (document.querySelector('.inc_af_block') != null) {
            Array.prototype.forEach.call(document.querySelectorAll('.inc_af_block'), function(el) {
                el.parentNode.removeChild(el);
            });
        }

        if (document.querySelector('.inc_pdp_block') != null) {
            Array.prototype.forEach.call(document.querySelectorAll('.inc_pdp_block'), function(el) {
                el.parentNode.removeChild(el);
            });
        }
    }

    INC.methods.addProductToCart = function(findObjd, productBlock, add_btn_click, _add_prod_im, btn_addtocart, newbtntext, type_bundle) {

        var productModuleBlock = productBlock;
        if (!productBlock.classList.contains('inc_product_module_block')) {
            productModuleBlock = productBlock.parentNode.parentNode;
        }
        
        var qty = productModuleBlock.querySelector('input').value;
        if (INC.config.pageType != "cartPage" && INC.config.pageType != "pdp") {
            document.querySelector('html').classList.remove('inc_overlay')
        }
        var addProductURL = INC.config.addToBasketURL
        var form_key = "";
        if (document.querySelector('input[name="form_key"]') != null) {
            form_key = document.querySelectorAll('input[name="form_key"]')[0].value;
        }
        if (qty < 1)
            qty = 1
        var findObj = new INC.classes.FindObj(findObjd);
        var productObj = INC.dataStore.methods().getProductById(findObj);
        var mainids = productBlock.getAttribute('data-main_id')
        addProductURL = addProductURL + btoa(productObj.url.split('?')[0]) + '/product/' + productObj.mainsku;
        var storecode = "-1"
        var iscol = false
        if (type_bundle == 'collection') {
            storecode = INC.config.storeId
            iscol = true
        }
        var service = iscol ? 'collection' : 'delivery'
        var params = 'product=' + productObj.mainsku + '&selected_configurable_option=&related_product=&form_key=' + form_key + '&qty=' + qty + '&branchNumber=' + storecode + '&isCollection=' + iscol + '&service=' + service + '';
        window.jQuery.ajax({
            type: "POST",
            url: addProductURL,
            data: params,
            async: true,
            success: function() {
                var fl1 = false;
                if (document.querySelector('html').classList.contains('TP_inc_configurator') == fl1) {
                    INC.config.pdpaddedProductList.push(productObj.mainId)
                    INC.config.sidebarremovedprod.push(mainids)
                }

                addsuccess_(btn_addtocart, add_btn_click, productBlock, findObj, qty, type_bundle)
            },
            error: function() {
                add_btn_click.innerText = "Not Added";
                btn_addtocart.innerText = "Not Added";
                if (newbtntext != undefined) {
                    newbtntext.innerHTML = "Not Added";
                }
                if (INC.config.pageType == "cartPage") {
                    if (productBlock != null) {
                        productBlock.parentNode.removeChild(productBlock);
                    }
                }
                if (window.innerWidth < 821) {
                    if (productBlock != null) {
                        productBlock.parentNode.removeChild(productBlock);
                    }
                    if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                        document.querySelector('.inc_recommended_tabs_list_item_block').click()
                    }
                }
                if (INC.config.pageType != "cartPage") {
                    setTimeout(function() {
                        loadsidebarajax()
                    }, 500)
                }
            },
        });
        function addsuccess_(btn_t, addbtnt, addedprdblock, objfind, _qty_added, tybund) {
            INC.methods.addProductToSidebarCart(objfind, _qty_added, null, null, null, tybund);

            INC.config.disablebtn = true
            if (type_bundle == 'collection') {
                addedprdblock.querySelector('.inc_product_add_collection_text').innerText = "Added To Bag"
                addbtnt.innerText = "Added To Bag";
                if(addedprdblock.querySelector('.inc_product_qty_input_text input') != null) addedprdblock.querySelector('.inc_product_qty_input_text input').value = "1";
                // if(btn_t!= undefined){
                //     btn_t.innerText = "Added To Bag";
                // }
            } else {
                addedprdblock.querySelector('.inc_product_variant_simple_text').innerText = "Added To Bag"
               if(addedprdblock.querySelector('.inc_product_qty_input_text input') != null) addedprdblock.querySelector('.inc_product_qty_input_text input').value = "1";
                addbtnt.innerText = "Added To Bag";
                if (btn_t != undefined) {
                    btn_t.innerText = "Added To Bag";
                }

            }
            if (newbtntext != undefined) {
                newbtntext.innerHTML = "Added To Bag";
            }
            if (INC.config.pageType == "cartPage") {
                if (document.querySelector('.cart-item.product') != null) {
                    INC.clientConfig.offset = 0;
                    INC.clientConfig.slidevalue = 0;
                    INC.init();
                }
            }
            if (INC.config.pageType == "cartPage" || INC.config.recommendation) {
                if (document.querySelector('.inc_product_modal_block.inc_active') != null) {
                    document.querySelector('.inc_product_modal_block.inc_active').classList.remove('inc_active')
                }
                addedprdblock.querySelector('.inc_product_desc_add_text').innerText = "Added";
                if (addedprdblock != null) {
                    addedprdblock.parentNode.removeChild(addedprdblock);
                }
                if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                    document.querySelector('.inc_recommended_tabs_list_item_block').click()
                }
                document.querySelector('html').classList.remove('inc_overlay')
            }
            setTimeout(function() {
                if (type_bundle == 'collection') {
                    addbtnt.innerText = "Collect";
                    addedprdblock.querySelector('.inc_product_add_collection_text').innerText = "Collect";
                    Array.prototype.forEach.call(addbtnt, function(el) {
                        el.innerText = "Collect";
                    });
                } else {
                    addedprdblock.querySelector('.inc_product_variant_simple_text').innerText = "Deliver"
                    addbtnt.innerText = "Add To Cart";
                    Array.prototype.forEach.call(addbtnt, function(el) {
                        el.innerText = "Add";
                    });
                }

                if (btn_t != undefined) {
                    if (btn_t.parentNode.parentNode != null)
                        btn_t.parentNode.parentNode.setAttribute("style", "pointer-events: auto;opacity: 1;");
                }
                INC.config.disablebtn = true
            }, 2000);
            if (INC.config.pageType != "cartPage" && INC.config.pageType != "productList") {
                setTimeout(function() {
                    loadsidebarajax()
                    var allprd = productBlock.parentNode.querySelectorAll('.inc_recommended_products_list_block .inc_product_module_block').length
                    if (document.querySelector('.inc_recommended_products_list_block .inc_product_module_block') == null || allprd == 1) {
                        var flg = false;
                        if (document.querySelector('.inc_recommended_tabs_list_item_block.inc_active') != null && document.querySelector('html').classList.contains('TP_inc_configurator') == flg) {
                            document.querySelector('.inc_recommended_tabs_list_item_block.inc_active').click()
                            var remcat = document.querySelector('.inc_recommended_tabs_list_item_block.inc_active')
                            if (remcat != null) {
                                remcat.parentNode.removeChild(remcat)
                                if (document.querySelector('.inc_recommended_tabs_list_item_block') == null) {
                                    window.location.href = INC.clientConfig.checkoutLink;
                                }
                                if (document.querySelectorAll('.inc_recommended_tabs_list_item_block').length > 1) {
                                    if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                                        document.querySelector('.inc_recommended_tabs_list_item_block').click()
                                    }
                                } else {
                                    if (document.querySelector('.inc_recommended_tabs_list_item_block') != null) {
                                        document.querySelector('.inc_recommended_tabs_list_item_block').click()
                                    }
                                    document.querySelector('.inc_recommended_products_list_block').setAttribute('style', 'margin-left:0;')
                                }
                            }
                        }
                    } else {
                        flg = false;
                        if (document.querySelector('.inc_recommended_tabs_list_item_block.inc_active') != null && document.querySelector('html').classList.contains('TP_inc_configurator') == flg) {
                            document.querySelector('.inc_recommended_tabs_list_item_block.inc_active').click()
                        }

                    }
                }, 1000)
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
        setTimeout(function() {
            if (INC.config.pageType == "cartPage") {
                if (btn_addtocart.innerText == 'Adding...') {
                    add_btn_click.innerText = "Added To Bag";
                    if (btn_addtocart != undefined) {
                        btn_addtocart.innerText = "Added To Bag";
                    }

                    if (newbtntext != undefined) {
                        newbtntext.innerHTML = "Added To Bag";
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
        if (document.querySelector('.header-gnav-cart__overlay.visible') != null && INC.config.pageType == "pdp") {
            pageType = "107"
        }
        if (INC.config.pageType == "productList") {
            pageType = "catalog_category_view"
            var eventdata = {
                "core_product_id": productObj.mainId,
                "product_id": productObj.mainId.toString(),
            }
            var data = {
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

        }
        INC.methods.trackingEvents("bundleAddToCart", eventDataObj, pageType);
    }
    INC.methods.addBundleToCart = function(btn_cart, type_bundle) {

        INC.clientConfig.OOS = []
        var dataStore = INC.dataStore;
        var mainProductId = document.querySelector('.inc_pdp_product-main_block .inc_product_module_block').getAttribute('data-main_id');
        var formData = []
        var url_add = []
        var count_pr_to_add = 0
        var form_key = "";
        if (document.querySelector('input[name="form_key"]') != null) {
            form_key = document.querySelectorAll('input[name="form_key"]')[0].value;
        }
        var addProductURL = INC.config.addToBasketURL
        var total_length = Object.keys(dataStore.bundleCartProducts);
        Object.keys(dataStore.bundleCartProducts).forEach(function(bundleCartProduct) {
            var findObj = new INC.classes.FindObj({
                id: bundleCartProduct
            });
            var productObj = INC.dataStore.methods().getProductById(findObj);
            addedProductIndex.push(document.querySelector('.inc_product_module_block[data-sku="'+ bundleCartProduct +'"]').getAttribute('b-index'))
            addProductURL = addProductURL + btoa(productObj.url.split('?')[0]) + '/product/' + productObj.mainsku;
            var storecode = "-1"
            var iscol = false
            if (type_bundle == 'collection') {
                storecode = INC.config.storeId
                iscol = true
            }
            var service = iscol ? 'collection' : 'delivery'
            var params = 'product=' + productObj.mainsku + '&selected_configurable_option=&related_product=&form_key=' + form_key + '&qty=' + dataStore.bundleCartProducts[bundleCartProduct] + '&branchNumber=' + storecode + '&isCollection=' + iscol + ' + &service=' + service + '';
            formData.push(params)
            url_add.push(addProductURL)
            count_pr_to_add++
            if (total_length.length == count_pr_to_add) {
                ajax_add_to_cart(formData, url_add, btn_cart, type_bundle)
            }
        });
        add_to_cart_tracking_multiple(mainProductId)
    }
    function ajax_add_to_cart(formData, url_add, btn_cart, type_bundle) {
        INC.clientConfig.OOS = []
        INC.clientConfig.OOS_MESG = []
        function suc1(btn_ca) {
            if (formData[1] == undefined) {
                loadsidebarajax(btn_ca, type_bundle)
            }
            if (formData[1] != undefined) {
                callprodB()
            }
        }
        function suc2(btn_ca) {
            if (formData[2] == undefined) {
                loadsidebarajax(btn_ca, type_bundle)
            }
            if (formData[2] != undefined) {
                callprodC()
            }
        }
        function suc3(btn_ca) {
            if (formData[3] == undefined) {
                loadsidebarajax(btn_ca, type_bundle)
            }
            if (formData[3] != undefined) {
                callprodD()
            }
        }
        function suc4(btn_ca) {
            if (formData[4] == undefined) {
                loadsidebarajax(btn_ca, type_bundle)
            }
            if (formData[4] != undefined) {
                callprodE()
            }
        }
        function suc5(btn_ca) {
            if (formData[5] == undefined) {
                loadsidebarajax(btn_ca, type_bundle)
            }
            if (formData[5] != undefined) {
                callprodF()
            }
        }

        callprodA()
        function callprodA() {
            window.jQuery.ajax({
                type: "POST",
                url: url_add[0],
                data: formData[0],
                async: true,
                success: function() {
                    suc1(btn_cart)
                },
                error: function() {
                    suc1(btn_cart)
                },
            });
        }
        function callprodB() {
            window.jQuery.ajax({
                type: "POST",
                url: url_add[1],
                data: formData[1],
                async: true,
                success: function() {
                    suc2(btn_cart)
                },
                error: function() {
                    suc2(btn_cart)
                },
            });
        }
        function callprodC() {
            window.jQuery.ajax({
                type: "POST",
                url: url_add[2],
                data: formData[2],
                async: true,
                success: function() {
                    suc3(btn_cart)
                },
                error: function() {
                    suc3(btn_cart)
                },
            });
        }
        function callprodD() {
            window.jQuery.ajax({
                type: "POST",
                url: url_add[3],
                data: formData[3],
                async: true,
                success: function() {
                    suc4(btn_cart)
                },
                error: function() {
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
                success: function() {
                    suc5(btn_cart)
                },
                error: function() {
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
                success: function() {
                    loadsidebarajax(btn_cart)
                },
                error: function() {
                    loadsidebarajax(btn_cart)
                },
            });
        }
    }
    function loadsidebarajax(btn_cart, type_bundle) {
        INC.config.disablebtn = true
        if (btn_cart != undefined) {
            btn_cart.classList.remove('inc_loading')
        }
        if (document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading') != null) {
            document.querySelector('.inc_pdp_bundle_cart_summary_add_btn_block.inc_loading').classList.remove('inc_loading')
        }
        if (document.querySelector('.sidebar_outer.sidebar_outer_active') == null) {
            checkAddedProductInJustAdded()
            INC.methods.showSidebar();
            INC.methods.updateSidebarBlock(type_bundle)
        }
    }
    function checkAddedProductInJustAdded() {
        var addCheckCategory = INC.config.pdpaddedProductList;
        var productListArrayprod = INC.dataStore.bundleProductsArray;
        var categoryList = INC.dataStore.methods().getUniqueCatergories();
        for (var catlist of categoryList) {
            var count = 0;
            for (var prdlistar of productListArrayprod) {
                var firstProductObjByMainId = INC.dataStore.methods().getFirstProductObjByMainId({
                    mainId: prdlistar
                });
                if (firstProductObjByMainId["categoryName"] == catlist) {
                    if (addCheckCategory.indexOf(prdlistar) == -1) {
                        count++
                    }
                }
            }
            if (count == 0) {
                if (document.querySelector('.inc_recommended_tabs_list_item_block[title="' + catlist + '"]') != null) {
                    var categrem = document.querySelector('.inc_recommended_tabs_list_item_block[title="' + catlist + '"]')
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
        var all_data = [];
        var index=0
        for (var trkdata of INC.config.bundle_tracking) {
            if (INC.config.bundle_tracking.length == 1) {
                productIdsforTracking.push(mainProductId)
                productIdsforTracking.push(trkdata.id)
                all_data.push({
                    id: parseInt(trkdata.bid),
                    product_ids: productIdsforTracking,
                    product_id: core_prod_id,
                    "bundle_pos": addedProductIndex[index]
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
                        "bundle_pos": addedProductIndex[index]
                    })
                    productIdsforTracking = []
                }
            }
            index++
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
    function makeTrackingApiCall(eventdata) {
        var p_url = '//optimizedby.increasingly.co/ImportData';
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (xhr.readyState == 4 && xhr.status === 200) {
                if (xhr.responseText != "" && xhr.responseText != null) {
                    var resul = xhr.responseText;
                    // console.log("track" + resul)
                }
            }
        }
        ;
        xhr.open("POST", p_url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        xhr.send(eventdata);
    }
    function reinitsidebar() {
        // console.log("reinitsidebar")
        INC.methods.createSidebarBlock();
        checkAddedProductInJustAdded()
        INC.methods.showSidebar();
        document.querySelector('html').classList.remove('inc_overlay')
    }
    function getCurrentFormattedTime() {
        var d = new Date();
        return (d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate() + " " + d.getHours() + ":" + d.getMinutes() + ":" + d.getSeconds() + "." + d.getMilliseconds());
    }
    INC.methods.trackingEvents = function(eventType, eventDataObj, pageType) {
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
            var trflg = true
            if (INC.config.recommendation == trflg && INC.config.pageType == "pdp")
                importEventDataObj["rt"] = "8";
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
    INC.methods.sendTrackingEvents = function(importDataObj) {
        var xhr = new XMLHttpRequest();
        var method = "POST";
        var url = INC.config.trackingURL;
        xhr.onreadystatechange = handleStateChange;

        xhr.open(method, url, true);
        xhr.setRequestHeader('Content-Type', 'application/json');
        function handleStateChange() {
            if (xhr.readyState === 4 && xhr.status === 200) {
                // console.log(xhr.responseText);
            }
        }

        xhr.send(JSON.stringify(importDataObj));
    }

    function generateRandomString(bits1) {
        return (crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295).toString(bits1).substring(2, 15) + (crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295).toString(bits1).substring(2, 15);
    }

    INC.methods.addVisitorID = function() {
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
        if (readCookie('ivid') != undefined) {
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
        var clickedElement = e.target;
        var trf = true;
        var flfalse = false;
        // console.log(clickedElement.classList.contains("tocart"),"ssss")
        if (clickedElement != null) {
            try {
                if (clickedElement.className == "inc_product_modal_block inc_active") {
                    document.querySelector('body').classList.remove('inc_popup_open');
                    if (document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                        document.querySelector('html').classList.remove('inc_overlay');
                        document.querySelector('html').classList.remove('inc_popup_open');
                    }
                    if (inc_scroll_height > 100) {
                        window.scrollTo(0, inc_scroll_height);
                    }
                    clickedElement.querySelector('.inc_product_header_title_block').classList.add('inc_active');
                    clickedElement.querySelector('.inc_product_header_title_block_1').classList.remove('inc_active');
                    clickedElement.classList.remove('inc_active')
                }

                if (clickedElement.classList.contains('quick_view_open') == trf) {
                    if (document.querySelector('.inc_details_mobile_quick_view.quick_view_active') != null) {
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
                if (clickedElement != null) {
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
                        if (document.querySelector('.inc_header_continue_img') != null) {
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
                    if (clickedElement.className != "inc_product_details_prod_block" && clickedElement.className != "inc_product_variant_simple_block" && clickedElement.className != "inc_product_variant_simple_text config" && clickedElement.className != "inc_product_desc_variant_popup_close_block" && clickedElement.className != "inc_product_desc_add_title_text_block" && clickedElement.tagName != "SELECT" && clickedElement.className != "inc_product_header_block active" && clickedElement.className != "inc_product_desc_att_color_list_item_img_block active" && clickedElement.className != "inc_product_desc_att_block attributes_avail active" && clickedElement.className != "inc_product_qty_block active" && clickedElement.tagName != "LABEL" && clickedElement.tagName != "INPUT" && clickedElement.className != "inc_product_qty_block" && clickedElement.className != "inc_product_desc_att_color_list_item_img_block" && clickedElement.className != "inc_product_header_block" && clickedElement.className != "select_option_inc_title" && clickedElement.className != "inc_product_desc_att_color_list_item_img" && clickedElement.className != "inc_product_desc_att_color_title_text" && clickedElement.className != "inc_product_desc_att_color_list_block" && clickedElement.classList.contains('inc_product_desc_att_block') == flfalse && clickedElement.className != "select_option_inc_block" && clickedElement.className != "inc_product_desc_att_color_title_text_block" && clickedElement.className != "inc_product_desc_att_variant_text" && clickedElement.className != "inc_product_desc_add_img" && clickedElement.className != "inc_product_qty_up_btn" && clickedElement.className != "inc_product_qty_down_btn") {
                        if (clickedElement.classList != undefined) {
                            if (clickedElement.classList.contains('variantoption') == flfalse && clickedElement.classList.contains('inc_product_desc_att_size_list_item_img_block') == flfalse && clickedElement.classList.contains('inc_product_desc_att_color_list_block') == flfalse && clickedElement.className != "inc_product_desc_add_img checked" && clickedElement.classList.contains('inc_product_desc_add_block') == flfalse && clickedElement.classList.contains('inc_pdp_bundle_cart_added_product_edit_img') == flfalse && clickedElement.className != "inc_product_desc_att_color_title_block" && clickedElement.className != "inc_product_desc_qty_up_btn" && clickedElement.className != "inc_product_desc_qty_down_btn" && clickedElement.classList.contains('inc_product_desc_att_color_block') == flfalse && clickedElement.classList.contains('inc_product_desc_att_color_list_item_block') == flfalse && clickedElement.classList.contains('inc_product_desc_att_zero_title_text_selected') == flfalse && clickedElement.classList.contains('inc_product_desc_att_zero_title_text') == flfalse && clickedElement.classList.contains('inc_product_desc_att_size_list_item_img') == flfalse && clickedElement.classList.contains('inc_product_desc_att_color_list_item_img') != trf) {
                                var allact = document.querySelectorAll('.inc_product_desc_att_block.inc_active')

                                if (document.querySelector('.inc_product_modal_block.inc_active') == null && document.querySelector('.inc_sidebar_modal_block.inc_active') == null) {
                                    document.querySelector('html').classList.remove('inc_overlay');
                                    document.querySelector('body').classList.remove('inc_popup_open');
                                }
                                for (var actelm of allact) {
                                    actelm.classList.remove('inc_active')
                                }

                                if (document.querySelector('.inc_product_block.show_overlay') != null) {
                                    document.querySelector('.inc_product_block.show_overlay').classList.remove('show_overlay')
                                }
                            }
                        }
                    }
                    var falsefl = false;
                    if (INC.config.pageType == "pdp") {
                        if ((clickedElement.classList.contains('tocart') == trf && clickedElement.getAttribute('data-type') == "delivery" || clickedElement.classList.contains('tocart') == trf && clickedElement.getAttribute('data-type') == "collection") && INC.config.recommendation == falsefl) {
                            if (window.innerWidth > 767) {
                                if (document.querySelector('.toolbar-branchselector .js-branch-switch').innerText != null && document.querySelector('.toolbar-branchselector .js-branch-switch').innerText != "delivery address" && parseInt(document.querySelector(".field.qty input").value) > 0) {
                                    if (INC.dataStore.bundleProductsArray != undefined) {
                                        if (clickedElement.innerText.trim() == "Deliver") {
                                            pdp_listeners("Deliver")
                                        } else if (clickedElement.innerText.trim() == "Collect") {
                                            pdp_listeners("Collect")
                                        }

                                    }
                                }
                            } else {
                                if (document.querySelector('.toolbar-branchselector .js-branch-switch').innerText != null && document.querySelector('.toolbar-branchselector .js-branch-switch').innerText != "delivery address") {
                                    var findObj = new INC.classes.FindObj();
                                    var p_ids = INC.methods.getProductIdFromWebPage()
                                    findObj["id"] = INC.dataStore.methods().getFirstProductObjByMainId({
                                        mainId: p_ids
                                    }).id;
                                    var qty = 1;
                                    if (document.querySelector('#product_addtocart_form') != null) {
                                        if (document.querySelector('#product_addtocart_form .box-tocart') != null) {
                                            if (document.querySelector('#product_addtocart_form .box-tocart .control.control__has-actions') != null) {
                                                if (document.querySelector('#product_addtocart_form .box-tocart .control.control__has-actions input').value != null) {
                                                    var ClientQty = document.querySelector('#product_addtocart_form .box-tocart .control.control__has-actions input').value
                                                    qty = parseInt(ClientQty)
                                                }
                                            }
                                        }
                                    }
                                    var type_bundle = "Deliver"
                                    if (clickedElement.innerText.trim() == "Collect") {
                                        type_bundle = "Collect";
                                    }
                                    INC.methods.addProductToSidebarCart(findObj, qty, null, "client_add_btn", null, type_bundle);
                                    INC.methods.showSidebar("clientBtn");
                                }
                            }
                        }
                        if (clickedElement.parentNode != null) {
                            if (clickedElement.classList.contains('js-shade-picker-item-name') == trf || clickedElement.classList.contains('js-shade-swatch--image-wrapper') == trf || clickedElement.classList.contains('elc-shade-picker-item--selected') == trf || clickedElement.classList.contains('js-dropdown-option') == trf || clickedElement.parentNode.parentNode.classList.contains('sells-with-grid') == trf || clickedElement.parentNode.classList.contains('sells-with-grid') == trf || clickedElement.classList.contains('sells-with-grid') == trf) {
                                var textsel = clickedElement.textContent.trim()
                                if (textsel == "") {
                                    textsel = clickedElement.parentNode.textContent.trim()
                                }
                                var imgscrsel = ""
                                if (clickedElement.tagName == "IMG") {
                                    imgscrsel = clickedElement.src
                                } else if (clickedElement.querySelector('img') != null) {
                                    imgscrsel = clickedElement.querySelector('img').src
                                }
                                var all_list_el = document.querySelectorAll('.inc_pdp_product-main_block .inc_product_showcase_block')
                                if (textsel != undefined) {
                                    textsel = textsel.trim().toLocaleLowerCase()
                                }
                                for (var alistel of all_list_el) {
                                    if (alistel.querySelector('.inc_product_desc_att_zero_block.inc_active') != null) {
                                        if (imgscrsel == "") {
                                            if (alistel.querySelector('.inc_product_desc_att_size_list_item_img_block[datasize="' + textsel + '"] div') != undefined) {
                                                alistel.querySelector('.inc_product_desc_att_size_list_item_img_block[datasize="' + textsel + '"] div').click()
                                            } else if (alistel.querySelector('.inc_product_desc_att_color_block.inc_active') != null) {
                                                if (alistel.querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="' + textsel + '"] div') != undefined) {
                                                    alistel.querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="' + textsel + '"]').click()
                                                }
                                            }
                                        } else {
                                            if (alistel.querySelector('.inc_product_desc_att_size_list_item_img_block[data-optionimge="' + imgscrsel + '"]') != undefined) {
                                                alistel.querySelector('.inc_product_desc_att_size_list_item_img_block[data-optionimge="' + imgscrsel + '"]').click()
                                            }
                                        }
                                    } else if (alistel.querySelector('.inc_product_desc_att_color_block.inc_active') != null) {
                                        if (alistel.querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="' + textsel + '"] div') != undefined) {
                                            alistel.querySelector('.inc_product_desc_att_color_list_item_img_block[datacolor="' + textsel + '"]').click()
                                        }
                                    }
                                }
                                if (document.querySelector('.js-right-column-section .elc-service-view-renderer[data-rendered-view="product-notify-me"] .elc-product-notify-me-button') == null) {
                                    if (document.querySelector('.inc_pdp_block') != null) {
                                        document.querySelector('.inc_pdp_block').style.display = "block"
                                    }
                                } else {
                                    if (document.querySelector('.inc_pdp_block') != null) {
                                        document.querySelector('.inc_pdp_block').style.display = "none"
                                    }
                                }
                            }
                        }
                        if (clickedElement.classList.contains('svgicon--bag') == trf || clickedElement.classList.contains('header-gnav-cart__icon') == trf || clickedElement.classList.contains('header-gnav-cart__trigger') == trf || clickedElement.classList.contains('header-gnav-cart__count') == trf) {
                            var checkcartpopups = setInterval(function() {
                                if (document.querySelector('body.active-gnav') != null && document.querySelector('.header-gnav-cart__overlay') != null && document.querySelector('.js-header-gnav-cart__overlay.visible') != null) {
                                    clearInterval(checkcartpopups)
                                    setTimeout(function() {
                                        reinitsidebar()
                                    }, 700)
                                }
                            }, 200)
                        }
                    }
                    if (clickedElement.classList.contains('remove_link') == trf && INC.config.pageType == "cartPage") {
                        setTimeout(function() {
                            if (document.querySelector('.cart-item.product') != null) {
                                INC.clientConfig.offset = 0;
                                INC.clientConfig.slidevalue = 0;
                                INC.init();
                            }
                        }, 2000)
                    }
                    if (INC.config.pageType == "productList") {
                        if (clickedElement.classList.contains('js-add-to-bag-button') == trf) {
                            if (clickedElement.getAttribute('data-test-id') == "add_to_bag_btn") {
                                var checkplpcartopen = setInterval(function() {
                                    if (document.querySelector('body.active-gnav') != null && document.querySelector('.header-gnav-cart__overlay') != null && document.querySelector('.js-header-gnav-cart__overlay.visible') != null) {
                                        clearInterval(checkplpcartopen)
                                        setTimeout(function() {
                                            var classpid = document.querySelector('.cart-confirm-wrapper .cart-overlay-products .prod').classList
                                            var pidplp = ""
                                            for (var cls of classpid) {
                                                if (cls.indexOf('prod-PROD') >= 0) {
                                                    if (cls.split('SKU')[0] != undefined) {
                                                        pidplp = cls.split('SKU')[0].replace('prod-', '')
                                                    }
                                                }
                                            }
                                            plp_listeners(pidplp)
                                        }, 1000)
                                    }
                                }, 100)
                            }
                        }
                    }
                    if (clickedElement.classList.contains('js-gnav-header-formatter__bg-full-width') == trf) {
                        INC.methods.hideSidebar()
                    }
                }
                setTimeout(function() {
                    var inc_prod_img1 = document.querySelector('.inc_product_modal_block.inc_active .inc_product_img_main_img img')
                    if (inc_prod_img1) {
                        inc_prod_img1.setAttribute('style', 'left:0 !important;position: relative;')
                    }
                }, 2000)
                // console.log(clickedElement.className,"ss")
                if (clickedElement.classList.contains('taxswitcher__indicator') || clickedElement.classList.contains('taxswitcher__indicator-show') || clickedElement.classList.contains('taxswitcher__indicator-hide')) {
                    setTimeout(function(){
                    	if (document.querySelector('body').classList.contains('tax-hidden') == false) {
	                        INC.clientConfig.statusVAT = true;
	                    } else {
	                        INC.clientConfig.statusVAT = false
	                    }
	                    INC.init()
                    },2000)
                }
            } catch (err) {
                // console.log(err.stack)
            }
        }
    }

    function pdp_listeners(type_bundle) {
        setTimeout(function() {
            var findObj = new INC.classes.FindObj();
            findObj["id"] = INC.dataStore.methods().getFirstProductObjByMainId({
                mainId: INC.dataStore.pdpProductId
            }).id;
            findObj["mainId"] = INC.dataStore.methods().getFirstProductObjByMainId({
                mainId: INC.dataStore.pdpProductId
            }).id;
            var sidebar_dialoge_block = document.createElement("div");
            sidebar_dialoge_block.classList.add("sidebar_outer");
            sidebar_dialoge_block.innerHTML = sidebar_html;

            var sbBlock = sidebar_dialoge_block.querySelector(".inc_sidebar_modal_block");
            if (sbBlock != null && document.querySelector(".inc_sidebar_modal_block") != null) {
                sbBlock.querySelector(".inc_cart_added_list_block").innerHTML = "";
                var qty = 1;
                if (document.querySelector('#product_addtocart_form') != null) {
                    if (document.querySelector('#product_addtocart_form .box-tocart') != null) {
                        if (document.querySelector('#product_addtocart_form .box-tocart .control.control__has-actions') != null) {
                            if (document.querySelector('#product_addtocart_form .box-tocart .control.control__has-actions input').value != null) {
                                var ClientQty = document.querySelector('#product_addtocart_form .box-tocart .control.control__has-actions input').value
                                qty = parseInt(ClientQty)
                            }
                        }
                    }
                }
                if (findObj.sku != "" || findObj.colorText != "" || findObj.id != "") {
                    if (isNaN(parseInt(qty)) || parseInt(qty) == 0)
                        qty = 1;
                    checkAddedProductInJustAdded()
                    INC.methods.addProductToSidebarCart(findObj, qty, null, "client_add_btn", null, type_bundle);
                    INC.methods.showSidebar("clientBtn");
                } else if (findObj.colorText == "" && document.querySelector(".inc_product_module_block") != null && document.querySelector(".inc_product_module_block").classList.contains("Simple")) {
                    findObj.sku = document.querySelector(".inc_product_module_block").getAttribute("data-sku");
                    if (isNaN(parseInt(qty)) || parseInt(qty) == 0)
                        qty = 1;
                    checkAddedProductInJustAdded()
                    INC.methods.addProductToSidebarCart(findObj, qty, null, "client_add_btn", null, type_bundle);
                    INC.methods.showSidebar("clientBtn");
                }
            }
        }, 300);
    }
    function plp_listeners(prod_id) {
        var productId = prod_id.replace('PROD', '');
        INC.methods.irbReq(productId, 10, "catalog_product_view");
    }
    setTimeout(function() {
        if (window.innerWidth < 821) {
            window.addEventListener("orientationchange", function() {
                if (window.matchMedia("(orientation: portrait)").matches) {
                    // console.log("PORTRAIT")
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
                    setTimeout(function() {
                        INC.init();
                    }, 0)

                }
                if (window.matchMedia("(orientation: landscape)").matches) {
                    // console.log("LANSCAPE")
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
                    setTimeout(function() {
                        INC.init();
                    }, 10)
                }
            }, {
                passive: true
            });
            document.addEventListener("touchmove", checkScrollDirection, false);
        }
        function checkScrollDirection() {
            if (inc_isOnScreen(window.jQuery('.inc_pdp_block'))) {
                if (document.querySelector('.inc_pdp_block') != null) {
                    if (document.querySelectorAll('.elc-sticky-container.js-sticky-container')[1] != null) {
                        document.querySelectorAll('.elc-sticky-container.js-sticky-container')[1].style.display = "none";
                    }
                }
            } else {
                if (document.querySelector('.inc_pdp_block') != null) {
                    if (document.querySelectorAll('.elc-sticky-container.js-sticky-container')[1] != null) {
                        document.querySelectorAll('.elc-sticky-container.js-sticky-container')[1].style.display = "block"
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
        }, {
            passive: true
        })
    }, 3000)
    function inc_isOnScreen(elem) {
        if (elem.length == 0) {
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
        return (top >= viewport_top && top < viewport_bottom) || (bottom > viewport_top && bottom <= viewport_bottom) || (height > viewport_height && top <= viewport_top && bottom >= viewport_bottom)
    }
    function slideTo(_id, _n, elm, type_of, arrow) {
        if (elm.className == "left_arrow" || elm.className == "left_arrow inc_active" || type_of == "left") {
            var nn2 = -1
            var indslid = INC.config.inc_slideIndex += nn2
            inc_showSlides(indslid, nn2, elm, type_of, arrow);
        } else {
            var nn1 = 1
            var indslid1 = INC.config.inc_slideIndex += nn1
            inc_showSlides(indslid1, nn1, elm, type_of, arrow);
        }
    }
    function inc_showSlides(n, _ind, elm, _type_of, arrow) {
        var showcase_other_img_list = elm.querySelector('.inc_product_showcase_block .inc_product_img_main_img a')
        var showcase_dots = elm.querySelectorAll('.inc_product_showcase_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block')
        var modal_dots = elm.querySelectorAll('.inc_product_modal_block .inc_product_img_gallery_list_block .inc_product_img_gallery_list_item_block')

        var showcase_other_img = elm.querySelector('.inc_product_showcase_block .inc_product_img_main_img a img')

        var modal_other_img = elm.querySelector('.inc_product_modal_block .inc_product_img_main_img a img')

        var otherImg_list = showcase_other_img_list.getAttribute('otherImageList');
        var additional_img = []
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
            if (modal_dots[im] != undefined) {
                modal_dots[im].classList.remove('inc_active')
            }
        }
        var img_src = additional_img[INC.config.inc_slideIndex - 1].replace('160x90', '2000x1500');
        if (img_src != "null") {
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
                        if (actind == 5) {
                            if (modal_dots.length >= 6) {
                                modal_dots[0].setAttribute('style', 'display: none !important;')
                            }
                        } else if (actind == 6) {
                            if (modal_dots.length >= 7) {
                                modal_dots[0].setAttribute('style', 'display: none !important;')
                                modal_dots[1].setAttribute('style', 'display: none !important;')
                            }
                        } else if (actind == 7) {
                            if (modal_dots.length >= 8) {
                                modal_dots[0].setAttribute('style', 'display: none !important;')
                                modal_dots[1].setAttribute('style', 'display: none !important;')
                                modal_dots[2].setAttribute('style', 'display: none !important;')
                            }
                        } else if (actind == 8) {
                            if (modal_dots.length >= 9) {
                                modal_dots[0].setAttribute('style', 'display: none !important;')
                                modal_dots[1].setAttribute('style', 'display: none !important;')
                                modal_dots[2].setAttribute('style', 'display: none !important;')
                                modal_dots[3].setAttribute('style', 'display: none !important;')
                            }
                        } else if (actind == 9) {
                            if (modal_dots.length >= 10) {
                                modal_dots[0].setAttribute('style', 'display: none !important;')
                                modal_dots[1].setAttribute('style', 'display: none !important;')
                                modal_dots[2].setAttribute('style', 'display: none !important;')
                                modal_dots[3].setAttribute('style', 'display: none !important;')
                                modal_dots[4].setAttribute('style', 'display: none !important;')
                            }
                        } else if (actind == 10) {
                            if (modal_dots.length >= 11) {
                                modal_dots[0].setAttribute('style', 'display: none !important;')
                                modal_dots[1].setAttribute('style', 'display: none !important;')
                                modal_dots[2].setAttribute('style', 'display: none !important;')
                                modal_dots[3].setAttribute('style', 'display: none !important;')
                                modal_dots[4].setAttribute('style', 'display: none !important;')
                                modal_dots[5].setAttribute('style', 'display: none !important;')
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
    }
    function handleTouchMove(evt) {
        var prod_card = null;
        if (!xDown || !yDown) {
            return;
        }
        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;
        var xDiff = xDown - xUp;
        var yDiff = yDown - yUp;
        if (Math.abs(xDiff) + Math.abs(yDiff) > 150 || Math.abs(xDiff) + Math.abs(yDiff) < 150) {
            if (Math.abs(xDiff) > Math.abs(yDiff)) {
                /*most significant*/
                if (xDiff > 0) {
                    prod_card = evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                    slideTo(null, 0, prod_card, "left")
                } else {
                    /* right swipe */
                    prod_card = evt.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
                    slideTo(null, 0, prod_card, "right")
                }
            }
            /* reset values */
            xDown = null;
            yDown = null;
        }
    }
    var formatter = new Intl.NumberFormat('en-US',{
        style: 'currency',
        currency: 'GBP',
    });
    function cb_tc(bundle_response) {
        var bundles_tc = bundle_response.Bundles;
        var bundleproductarrayTC = {}
        var pdpProductId = ""
        if (bundle_response.ProductsDetail != null) {
            for (var prdetails of bundle_response.ProductsDetail) {
                bundleproductarrayTC[prdetails.ProductId] = prdetails
            }
        } else if (bundle_response.ProductsDetail == null || bundle_response.ProductsDetail == "null") {
            for (var catrec of bundle_response.CategoryRecommendations) {
                bundleproductarrayTC[catrec.ProductId] = catrec
            }
        }
        var bundle_count = bundles_tc.length
        for (var i = 0; i < bundle_count; i++) {
            var irbBundleObj = bundles_tc[i];
            var irbProductsArray = irbBundleObj["ProductIds"]
            var productId = INC.methods.getProductIdFromWebPage();
            if (sidebar_configurator_id.indexOf(productId) >= 0) {
                INC.config.configuratorProduct.push(irbProductsArray[1]);
            }
            if (INC.config.dupDataObjectProducts.indexOf(bundles_tc[i].BundleId) == -1) {
                INC.config.dupDataObjectProducts.push(bundles_tc[i].BundleId)
                
                var bundleObj = {};
                bundleObj.id = irbBundleObj["BundleId"];
                var fltr = false;
                if (INC.config.recommendation == fltr) {
                    bundleObj.totalRegularPrice = irbBundleObj["TotalPrice"];
                    bundleObj.totalActivePrice = irbBundleObj["TotalSpecialPrice"];
                    bundleObj.totalBundlePrice = irbBundleObj["TotalBundlePrice"];
                    bundleObj.totalBundleDiscountPrice = irbBundleObj["DiscountPrice"];
                    bundleObj.productCount = irbBundleObj["ProductCount"];
                }
                
                if (irbProductsArray.length) {
                    if (INC.dataStore.bundleProductsArray != undefined) {
                        pdpProductId = irbProductsArray[0];
                        INC.dataStore.bundleProductsArray.push(irbProductsArray[1]);

                    }

                }
                for (var irbprdarray of irbProductsArray) {
                    var product = bundleproductarrayTC[irbprdarray]
                    var pAttributes = product["Attributes"] || "";
                    if(product.ExclusiveVATPrice == null){
                    	product.ExclusiveVATPrice = product["Price"]
                    	product.ExclusiveVATSpecialPrice = product["SpecialPrice"]
                    }
                    if (pAttributes != "" && pAttributes != null) {
                        for (var patt1 of pAttributes) {
                            if (patt1.frontEndLabel == "color") {
                                patt1.frontEndLabel = "Color"
                            }
                            if (patt1.frontEndLabel == "size") {
                                patt1.frontEndLabel = "Size"
                            }
                            if (patt1.frontEndLabel == "Shade") {
                                patt1.frontEndLabel = "Color"
                            }
                            if (pAttributes.length == 1) {
                                if (patt1.frontEndLabel == "color" || patt1.frontEndLabel == "Color") {
                                    patt1.frontEndLabel = "Color"
                                } else {
                                    patt1.frontEndLabel = "Size"
                                }
                            }
                            patt1.attributeCode = patt1.frontEndLabel;
                        }
                        pAttributes = attribute_listing(pAttributes)
                    }
                    var pAttObj = {};
                    var attr_values = ""
                    var tcount = 0
                    for (var p2 of pAttributes) {
                        if (pAttributes.length == 1) {
                            if (pAttributes[0].attributeCode == "Color" || pAttributes[0].attributeCode == "color") {
                                pAttributes[0].attributeId = 0;
                                attr_values = p2.attributeValues;
                                for (var v of attr_values) {
                                    v.optionId = 0;
                                }
                            } else {
                                pAttributes[0].attributeId = 1;
                                attr_values = p2.attributeValues;
                                for (var v1 of attr_values) {
                                    v1.optionId = 1;
                                }
                            }
                        } else {
                            p2.attributeId = tcount
                            attr_values = p2.attributeValues;
                            for (var v2 of attr_values) {
                                v2.optionId = tcount;
                            }
                        }
                        tcount++
                    }

                    if (pAttributes.length) {
                        for (var k of pAttributes) {
                            var pAttributesObj = k;
                            var pAttributesValues = pAttributesObj["attributeValues"];
                            for (var l of pAttributesValues) {
                                var childProduct = l;
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
                                if(product.exclusiveVATPrice == null){
	                            	product.exclusiveVATPrice = product["Price"]
	                            	product.exclusiveVATSpecialPrice = product["SpecialPrice"]
	                            }
                                childProduct["childProductOtherImageUrl"] = product["OtherImageList"];
                                childProduct["childProductName"] = product["ProductName"];
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
                                productObj.option[pAttributesObj["attributeId"]].id = pAttributesObj["attributeId"];
                                productObj.option[pAttributesObj["attributeId"]].label = pAttributesObj["frontEndLabel"];
                                productObj.option[pAttributesObj["attributeId"]].code = pAttributesObj["attributeCode"];
                                // productObj.Filed3 = product["Field3"] + " | " + product["Field4"];
                                productObj.Filed3 = product["Field3"];
                                if (!Object.prototype.hasOwnProperty.call(INC.dataStore.dataStoreObj, product['ProductId'])) {
                                    INC.dataStore.dataStoreObj[product['ProductId']] = {};
                                }

                                if (!Object.prototype.hasOwnProperty.call(INC.dataStore.dataStoreObj[product['ProductId']], productObj['id'])) {
                                    INC.dataStore.dataStoreObj[product['ProductId']][productObj['id']] = {}
                                }
                                pAttObj = INC.dataStore.dataStoreObj[product['ProductId']][productObj['id']];
                                for (var pAttcb in productObj) {
                                    if (pAttcb == "option") {
                                        if (!Object.prototype.hasOwnProperty.call(pAttObj, 'option')) {
                                            pAttObj["option"] = {}
                                        }
                                        Object.keys(productObj[pAttcb]).forEach(function(key) {
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
                        // productObjS.Filed3 = product["Field3"] + " | " + product["Field4"];
                        productObjS.Filed3 = product["Field3"];
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
        setTimeout(function() {
            INC.methods.createPDPBlock("sidebar")
        }, 200)
    }
    function attribute_listing(valueArray) {
        var items = valueArray
        var sorting = ["Color", "Size", "Shade", "Weight", "Volume"];
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
        if (url != '') {
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
    function oosproduct(prdid) {
        var format_json_data;
        var product_id = prdid;
        var qty = 0
        format_json_data = JSON.stringify({
            "token": INC.config.clientToken,
            "product_id": product_id,
            "quantity": qty,
        });

        if (product_id != null) {
            var data = {
                "eventData": Base64.encode(format_json_data)
            };

            var p_url = 'https://gather.increasingly.com/ProductInventoryUpdate';
            var xhr = new XMLHttpRequest();
            xhr.open("POST", p_url, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState == XMLHttpRequest.DONE) {
                    if (xhr.status == 200) {
                        // console.log(xhr.responseText)
                    }
                }
            }
            ;

            xhr.setRequestHeader('Content-Type', 'application/json');
            xhr.send(JSON.stringify(data));
        }
    }
    function incPriceMismatch(special_price, price, clientSpPrice, clientPrice) {
	    var data = {}
	    var priceMismatchObj = {}
	    priceMismatchObj.token = INC.config.clientToken
	    priceMismatchObj.product_id = INC.methods.getProductIdFromWebPage()
	    if (clientSpPrice != null && parseInt(clientSpPrice) < parseInt(clientPrice)) {
	        priceMismatchObj.product_price = clientPrice
	        priceMismatchObj.special_price = clientSpPrice
	    } else {
	        priceMismatchObj.product_price = clientSpPrice
	        priceMismatchObj.special_price = clientPrice
	    }
	    priceMismatchObj.old_product_price = price
	    priceMismatchObj.old_special_price = special_price

	    var pricetype = "";
	    if (INC.clientConfig.statusVAT == true) {
	        pricetype = "IncVAT"
	    } else {
	        pricetype = "ExcVAT"
	    }
	    priceMismatchObj.price_type = pricetype
	    //debugger
	    //if(Number(priceMismatchObj.special_price) != Number(clientSpPrice)){
	    data = {
	        "eventData": Base64.encode(JSON.stringify(priceMismatchObj))
	    }
	    jQuery.ajax({
	        type: "POST",
	        url: "https://gather.increasingly.com/ProductPriceDetails",
	        data: JSON.stringify(data),
	        headers: {
	            "content-type": "application/json; charset=utf-8"
	        },
	        error: function (jqXHR, textStatus, errorMessage) {},
	        success: function (data) {}
	    });
	    //}
	}

    if (document.querySelector('body').classList.contains('tax-hidden') == false) {
        INC.clientConfig.statusVAT = true;
    } else {
        INC.clientConfig.statusVAT = false
    }

}
)();
