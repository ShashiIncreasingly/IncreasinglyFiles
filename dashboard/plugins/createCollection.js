
var INC = (typeof(INC) == "undefined") ? {} : INC;
INC.methods = {};
var falseflg=false;
var trueflg = true;
var currency_c="en-US"
var currency_inc="USD"
var inc_noimage = "https://www.increasingly.co/Implementation/wKS8xz_R/no_image.jpg"
var dataProducts=[]
function generate_html_tag(element, className) {
    var generateEl = document.createElement(element);
    if(className != undefined){
        generateEl.classList.add(className)
    }
    return generateEl;
}

var client_id = localStorage.getItem('client_selected') 
if(client_id == null && localStorage.getItem('client_details') != undefined){
    var clientdd = localStorage.getItem('client_details').split('-')[1]
    client_id = decodeString(clientdd)
}
var textsearch = ""
setTimeout(function(){
    if(client_id != null){
        showLoader()
        if(document.querySelector('.collectionList') != null){
            INC.methods.getallCollection(textsearch)
        }else{
            INC.methods.searchproducts(textsearch)
        }
    }else{
        document.querySelector('#create_collection_section').style.display="none"
    }
    var check_cl_client1 = setInterval(function(){
        if(localStorage.getItem('client_details') != undefined && document.querySelector('.client_list_text') != null){
            var clientde = localStorage.getItem('client_details').split('-')[1]
            var client_ids = decodeString(clientde)
            if(document.querySelector('.client_list_text').innerText.toLowerCase() == "select client" || document.querySelector('.client_list_text').innerText == "Select Client"){
                if(client_ids != undefined){
                    if(document.querySelector('.reporting_li_dropdown[clientid="'+client_ids.trim()+'"]') != null){
                        document.querySelector('.reporting_li_dropdown[clientid="'+client_ids.trim()+'"]').click()
                        clearInterval(check_cl_client1)
                    }else{
                        clearInterval(check_cl_client1)
                    }
                }else{
                    clearInterval(check_cl_client1)
                }
            }
        }
    },0)
},200)
INC.methods.searchproducts = function (texts) { 
    var clientid_12 = localStorage.getItem('client_selected')
    if(clientid_12 == null && localStorage.getItem('client_details') != undefined){
        var clientd = localStorage.getItem('client_details').split('-')[1]
        clientid_12 = decodeString(clientd)
    }
    var param = ""
    if(texts == ""){
        param = '{"feedId":"'+clientid_12+'","searchString":""}'
    }else{
        param = '{"feedId":"'+clientid_12+'","searchString":"'+texts+'"}'
    }
    var paramN = '{"elasticSearchPattern":"'+btoa(param)+'"}'
    var urlstatus = 'https://collection.increasingly.com/collections/products/search'
    var xhr1 = new XMLHttpRequest();
    xhr1.open('POST', urlstatus, true);
    xhr1.setRequestHeader('content-type', 'application/json');
    xhr1.onerror = function () {
        console.log("error")
    };
    xhr1.onreadystatechange = function () {
        if (xhr1.readyState === XMLHttpRequest.DONE && xhr1.status === 200) {
            if(xhr1.responseText != ""){
                var result = JSON.parse(xhr1.responseText)
                var elproductlist=document.querySelector('.createpublishcollection .productList')
                if(result.length > 0){
                    dataProducts = result
                    elproductlist.innerHTML = ""
                    var elproductlistItem=generate_html_tag('div','product_list_Block')
                    elproductlist.appendChild(elproductlistItem)
                    hideLoader()
                    
                    if(dataProducts.length > 14){
                        var pagination_block = generate_html_tag('div','pagination-block')
                        elproductlist.appendChild(pagination_block)
                        var button_prev = generate_html_tag('div','button_prev')
                        button_prev.setAttribute('id','button_prev')
                        button_prev.innerHTML = "Prev"
                        var button_next = generate_html_tag('div','button_next')
                        button_next.setAttribute('id','button_next')
                        button_next.innerHTML = "Next"
                        pagination_block.appendChild(button_prev)
                        var page_number = generate_html_tag('div','page_number')
                        page_number.setAttribute('id','page_number')
                        pagination_block.appendChild(page_number)
                        pagination_block.appendChild(button_next)
                    }
                    function Pagination() {
                        var current_page = 1;
                        var records_per_page = 21;
                        this.init = function() {
                            changePage(1);
                            pageNumbers();
                            selectedPage();
                            clickPage();
                            addEventListeners();
                        }
                        
                        var addEventListeners = function() {
                            var prevButton2 = document.getElementById('button_prev');
                            var nextButton2 = document.getElementById('button_next');
                            if(prevButton2 != null){
                                prevButton2.addEventListener('click', prevPage);
                                nextButton2.addEventListener('click', nextPage);   
                            }
                        }
                            
                        var selectedPage = function() {
                            if(document.getElementById('page_number') != null){
                                var page_number2 = document.getElementById('page_number').getElementsByClassName('clickPageNumber'); 
                                for (var i = 0; i < page_number2.length; i++) {
                                    if (i == current_page - 1) {
                                        page_number2[i].classList.add('active')
                                    } 
                                    else {
                                        page_number2[i].classList.remove('active')
                                    }
                                }  
                            } 
                        }  
                        
                        var checkButtonOpacity = function() {
                            var prevButton3 = document.getElementById('button_prev');
                            if(prevButton3 != null){
                                var nextButton3 = document.getElementById('button_next');
                                current_page == 1 ? prevButton3.classList.add('opacity') : prevButton3.classList.remove('opacity');
                                current_page == numPages() ? nextButton3.classList.add('opacity') : nextButton3.classList.remove('opacity');
                            }
                        }
                
                        var changePage = function(page) {
                            var listingTable = elproductlistItem;
                            if (page < 1) {
                                page = 1;
                            } 
                            if (page > (numPages() -1)) {
                                page = numPages();
                            }
                            listingTable.innerHTML = "";
                            for(var i = (page -1) * records_per_page; i < (page * records_per_page) && i < dataProducts.length; i++) {
                                var dataprd = dataProducts[i]
                                var product_block = generate_html_tag('div','productBlock')
                                var activePrice = 0
                                if (dataprd.specialPrice != null && dataprd.specialPrice != dataprd.price) {
                                    activePrice = dataprd.specialPrice
                                }else{
                                    activePrice = dataprd.price
                                }
                                
                                var prodhtml = '<div class="productImage"> <div class="mainImage"> <img src="'+dataprd.imageUrl+'" alt=""></div></div><div class="productConent"> <div class="productName"> '+dataprd.productName+'</div><div class="productID"> <span>Product ID :</span> '+dataprd.productId+' </div><div class="productPrice"> '+new Intl.NumberFormat(currency_c, { style: 'currency', currency: currency_inc }).format(activePrice)+' </div><div class="productButton"> <button class="incButtonProduct">Add to collection</button> </div></div>';
                                product_block.innerHTML = prodhtml
                                product_block.setAttribute('id',dataprd.productId)
                                product_block.setAttribute('internalid',dataprd.internalProductId)
                                product_block.setAttribute('price',dataprd.price)
                                product_block.setAttribute('specialprice',dataprd.specialPrice)
                                var addtocolbtn = product_block.querySelector('.incButtonProduct')
                                addtocolbtn.addEventListener('click',function(){
                                    var prodBlock = this.parentNode.parentNode.parentNode
                                    var publish_item = document.querySelector('.publish_collection_item .collection_prod_container.empty')
                                    var id = prodBlock.getAttribute('id')
                                    var added_prod = document.querySelector('.publish_collection_item .collection_prod_container[id="'+id+'"]')
                                    document.querySelector('.input_collection_name').setAttribute('style','')
                                    document.querySelector('.publish_col_heading span').setAttribute('style','')     
                                    if(publish_item != null && added_prod == null){
                                        publish_item.setAttribute('id',prodBlock.getAttribute('id'))
                                        publish_item.setAttribute('internalid',prodBlock.getAttribute('internalid'))
                                        publish_item.setAttribute('price',prodBlock.getAttribute('price'))
                                        publish_item.setAttribute('specialprice',prodBlock.getAttribute('specialprice'))
                                        var elimgtag =  generate_html_tag('img')
                                        elimgtag.src = prodBlock.querySelector('.mainImage img').src
                                        elimgtag.setAttribute('onerror',"this.src='"+inc_noimage+"'" );
                                        publish_item.appendChild(elimgtag)
                                        var delete_selected_prod =  generate_html_tag('div','delete_selected_prod')
                                        publish_item.appendChild(delete_selected_prod)
                                        publish_item.classList.add('active')
                                        publish_item.classList.remove('empty')
                                        delete_selected_prod.addEventListener('click',function(){
                                            var selprodblock = this.parentNode
                                            selprodblock.classList.remove('active')
                                            selprodblock.classList.add('empty')
                                            selprodblock.removeAttribute('id')
                                            selprodblock.removeAttribute('price')
                                            selprodblock.removeAttribute('specialprice')
                                            selprodblock.innerHTML = ""
                                            if(selprodblock.parentNode.parentNode.parentNode.className == "collection_wrapper_first" == trueflg){
                                                document.querySelector('.collection_wrapper_first .collection_prod_container').innerHTML = '<i>Main product goes here...</i>';
                                            }
                                            INC.methods.updatecollectionprice()
                                        });
                                        INC.methods.updatecollectionprice()
                                    }else{
                                        if(publish_item != null && added_prod != null){
                                            document.querySelector('.modal-msg').innerText = "You have already added this product in collection. Please select different product to create collection";
                                        }else{
                                            document.querySelector('.modal-msg').innerText = "Please publish  an item or a delete product to replace selected product";
                                        }
                                        INC.methods.closepopup()
                                    }
        
                                });
                                elproductlistItem.appendChild(product_block)
                                checkButtonOpacity();
                                selectedPage();
                            }
                        }
                        
                        var prevPage = function() {
                            if(current_page > 1) {
                                current_page--;
                                changePage(current_page);
                            }
                        }
                
                        var nextPage = function() {
                            if(current_page < numPages()) {
                                current_page++;
                                changePage(current_page);
                            } 
                        }
                
                        var clickPage = function() {
                            document.addEventListener('click', function(e) {
                                if(e.target.nodeName == "SPAN" && e.target.classList.contains("clickPageNumber")) {
                                    current_page = e.target.textContent;
                                    changePage(current_page);
                                }
                            });
                        }
                
                        var pageNumbers = function() {
                            var pageNumber = document.getElementById('page_number');
                            if(pageNumber != null){
                                pageNumber.innerHTML = "";
                                for(var i = 1; i < numPages() + 1; i++) {
                                    pageNumber.innerHTML += "<span class='clickPageNumber'>" + i + "</span>";
                                }
                            }
                        }
                
                        var numPages = function() {
                            return Math.ceil(dataProducts.length / records_per_page);  
                        }
                    }
                    var pagination = new Pagination();
                    pagination.init();
                }else{
                    elproductlist.innerHTML = ""
                    elproductlist.innerHTML = "Sorry No Products Found."
                    setTimeout(function(){
                        hideLoader()
                    },10)
                }
            }else{
                hideLoader()
            }
        }
    }
    xhr1.send(paramN);
}
INC.methods.closepopup = function(){
    document.querySelector('.modal').classList.add('active')
    document.querySelector('.overlay').classList.add('active')
    document.querySelector('.modal-btn').addEventListener('click',function(){
        document.querySelector('.modal').classList.remove('active')
        document.querySelector('.overlay').classList.remove('active')
    })
    document.querySelector('.overlay').addEventListener('click',function(){
        document.querySelector('.modal').classList.remove('active')
        document.querySelector('.overlay').classList.remove('active')
    })
}
INC.methods.createcollectionapi = function(type_collection) {
    var client_id3 = localStorage.getItem('client_selected')
    if(client_id3 == null && localStorage.getItem('client_details') != undefined){
        var clientd = localStorage.getItem('client_details').split('-')[1]
        client_id3 = decodeString(clientd)
    }
    var col_name=document.querySelector('.input_collection_name').value
    var all_active_col = document.querySelectorAll('.publish_collection_item .collection_prod_container.active')
    var collect_internal_id = ""
    for(var c=0;c<all_active_col.length;c++){
        if(c == 0){
            collect_internal_id = all_active_col[c].getAttribute('internalid')
        }else{
            collect_internal_id = collect_internal_id + "," + all_active_col[c].getAttribute('internalid')
        }
    }
    var param = ""
    if(type_collection == "draft"){
        param = '{"internalProductIdsList":"'+collect_internal_id+'","feedId":"'+client_id3+'","status":"0","collectionTitle":"'+col_name+'"}'
    }else{
        param = '{"internalProductIdsList":"'+collect_internal_id+'","feedId":"'+client_id3+'","status":"1","collectionTitle":"'+col_name+'"}'
    }
    var publishparam = '{"eventData":"'+btoa(param)+'"}'
    var publishurl = 'https://collection.increasingly.com/collections/create'
    var xhr1 = new XMLHttpRequest();
    xhr1.open('POST', publishurl, true);
    xhr1.setRequestHeader('content-type', 'application/json');
    xhr1.onerror = function () {
        console.log("error")
    };
    xhr1.onreadystatechange = function () {
        if (xhr1.readyState === XMLHttpRequest.DONE && xhr1.status === 200) {
            if(xhr1.responseText != ""){
                var successmessage=document.querySelector('.note_block')
                var succ = generate_html_tag('div','publish_success_mes')
            
                if(type_collection != "draft"){
                    succ.innerText = "Collection has been successfully published."
                    document.querySelector('.publish_collection_btn span').innerText = "VIEW COLLECTION"
                    document.querySelector('.modal-msg').innerText = "Collection has been successfully published.";
                }else{
                    succ.innerText = "Collection has been successfully saved to draft."
                    document.querySelector('.modal-msg').innerText = "Collection has been successfully saved to draft.";
                    document.querySelector('.publish_collection_save_draft_btn span').innerText = "SAVE & DRAFT"
                }
                successmessage.appendChild(succ)
                successmessage.classList.add('active')
                INC.methods.closepopup();
                document.querySelector('.publish_collection_button_block').classList.add('view_publish')
                hideLoader()
            }else{
                hideLoader()
            }
        }
    }
    xhr1.send(publishparam);
}
INC.methods.resetcollection = function() {
    var all_publish_elm = document.querySelectorAll('.collection_prod_container.active')
    document.querySelector('.input_collection_name').value = ""
    document.querySelector('.input_collection_placement').value = ""
    document.querySelector('.input_collection_promo').value = ""
    for (var elpub of all_publish_elm) {
        var selprodblock = elpub
        selprodblock.classList.remove('active')
        selprodblock.classList.add('empty')
        selprodblock.removeAttribute('id')
        selprodblock.removeAttribute('price')
        selprodblock.removeAttribute('specialprice')
        selprodblock.innerHTML = ""
    }
    var remactivesuc=document.querySelector('.note_block')
    remactivesuc.classList.remove('active')
    document.querySelector('.publish_collection_btn span').innerText = "PUBLISH"
    document.querySelector('.publish_collection_save_draft_btn span').innerText = "SAVE & DRAFT"
    document.querySelector('.publish_collection_button_block').classList.remove('view_publish')
    var remText=document.querySelector('.publish_success_mes')
    if(remText != null){
        remText.parentNode.removeChild(remText)
    }
    var eltext=""
    if(document.querySelector('#loader_block_inc') == null){
        showLoader()
    }
    INC.methods.searchproducts(eltext)
}
INC.methods.updatecollectionprice = function() {
    var publish_elm = document.querySelectorAll('.collection_prod_container.active')
    var pr = 0;
    var sp = 0;
    for(var e=0;e<publish_elm.length;e++){
        var prc = publish_elm[e].getAttribute('price')
        var sprc = publish_elm[e].getAttribute('specialprice')
        if(sprc == "null"){
            sprc = 0
        }
        var specialprice=0;
        var activePrice=prc
        var regularPrice = prc
        if (sprc != null && sprc != prc) {
            activePrice = sprc
        }
        if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
            specialprice = activePrice
        }
        if (sp != 0 && +specialprice == 0 || sp == 0 && +specialprice == 0) {
            pr += +prc;
            sp += +prc;
        } else {
            pr += +prc;
            sp += +sprc;
        }
        if(publish_elm.length == e+1){
            if (pr != sp && sp != 0) {
                document.querySelector('.activeprice').innerHTML = new Intl.NumberFormat(currency_c, { style: 'currency', currency: currency_inc }).format(sp)
                document.querySelector('.regularprice').innerHTML = new Intl.NumberFormat(currency_c, { style: 'currency', currency: currency_inc }).format(pr)
            }else{
                document.querySelector('.activeprice').innerHTML = new Intl.NumberFormat(currency_c, { style: 'currency', currency: currency_inc }).format(pr)
            }
        }
    }
    
}
INC.methods.getallCollection = function(coltext) {
    var sel_col_type = document.querySelector('.dropdown-one')
    var colType = sel_col_type.options[sel_col_type.selectedIndex].getAttribute("name");
    var clientid_1 = localStorage.getItem('client_selected')
    if(clientid_1 == null && localStorage.getItem('client_details') != undefined){
        var clientd = localStorage.getItem('client_details').split('-')[1]
        clientid_1 = decodeString(clientd)
    }
    var param = ""
    if(coltext != undefined){
        if(colType == "all"){
            param = '{"feedId":"'+clientid_1+'","searchString":"'+coltext+'"}'
        }else if(colType == "published"){
            param = '{"feedId":"'+clientid_1+'","searchString":"'+coltext+'","status":"1"}'
        }else if(colType == "draft"){
            param = '{"feedId":"'+clientid_1+'","searchString":"'+coltext+'","status":"0"}'
        }else if(colType == "deleted"){
            param = '{"feedId":"'+clientid_1+'","searchString":"Z","status":"0"}'
        }
    }else{
        if(colType == "all"){
            param = '{"feedId":"'+clientid_1+'","searchString":""}'
        }else if(colType == "published"){
            param = '{"feedId":"'+clientid_1+'","searchString":"","status":"1"}'
        }else if(colType == "draft"){
            param = '{"feedId":"'+clientid_1+'","searchString":"","status":"0"}'
        }else if(colType == "deleted"){
            param = '{"feedId":"'+clientid_1+'","searchString":"","status":"0"}'
        }
    }
    var paramD = '{"elasticSearchPattern":"'+btoa(param)+'"}';
    var urlstatus = 'https://collection.increasingly.com/collections/collection-products/search';
    var xhr = new XMLHttpRequest();
    xhr.open('POST', urlstatus, true);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onerror = function () {
        hideLoader()
    };
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            if(xhr.responseText != ""){
                var result = JSON.parse(xhr.responseText)
                if(result.length > 0){
                    dataProducts = result
                    var elcollectionlist=document.querySelector('.collectionList .productList')
                    var productList_item_block=generate_html_tag('div','productList_item_block')
                    elcollectionlist.innerHTML = ""
                    elcollectionlist.appendChild(productList_item_block)
                    hideLoader()
                    if(dataProducts.length > 14){
                        var pagination_block = generate_html_tag('div','pagination-block')
                        elcollectionlist.appendChild(pagination_block)
                        var button_prev = generate_html_tag('div','button_prev')
                        button_prev.setAttribute('id','button_prev')
                        button_prev.innerHTML = "Prev"
                        var button_next = generate_html_tag('div','button_next')
                        button_next.setAttribute('id','button_next')
                        button_next.innerHTML = "Next"
                        pagination_block.appendChild(button_prev)
                        var page_number = generate_html_tag('div','page_number')
                        page_number.setAttribute('id','page_number')
                        pagination_block.appendChild(page_number)
                        pagination_block.appendChild(button_next)
                    }
                    function Pagination() {
                        var current_page = 1;
                        var records_per_page = 18;
                        this.init = function() {
                            changePagecol(1);
                            pageNumberscol();
                            selectedPagecol();
                            clickPagecol();
                            addEventListenerscol();
                        }
                        
                        var addEventListenerscol = function() {
                            var prevButton = document.getElementById('button_prev');
                            var nextButton = document.getElementById('button_next');
                            if(prevButton != null){
                                prevButton.addEventListener('click', prevPage);
                                nextButton.addEventListener('click', nextPage);   
                            }
                        }
                            
                        var selectedPagecol = function() {
                            if(document.getElementById('page_number') != null){
                                var page_number2 = document.getElementById('page_number').getElementsByClassName('clickPagecol'); 
                                for (var i = 0; i < page_number2.length; i++) {
                                    if (i == current_page - 1) {
                                        page_number2[i].classList.add('active')
                                    } else {
                                        page_number2[i].classList.remove('active')
                                    }
                                }
                            }   
                        }  
                        
                        var checkButtonOpacity = function() {
                            var prevButton = document.getElementById('button_prev');
                            var nextButton = document.getElementById('button_next');
                            if(prevButton != null){
                                current_page == 1 ? prevButton.classList.add('opacity') : prevButton.classList.remove('opacity');
                                current_page == numPagescol() ? nextButton.classList.add('opacity') : nextButton.classList.remove('opacity');
                            }
                        }
                
                        var changePagecol = function(page) {
                            var listingTable = productList_item_block;
                
                            if (page < 1) {
                                page = 1;
                            } 
                            if (page > (numPagescol() -1)) {
                                page = numPagescol();
                            }
                        
                            listingTable.innerHTML = "";
                
                            for(var j = (page -1) * records_per_page; j < (page * records_per_page) && j < dataProducts.length; j++) {
                                var dataprd = dataProducts[j];
                                var product_block = generate_html_tag('div','productBlock')
                                product_block.setAttribute('collectionId',dataprd.collectionId)
                                product_block.setAttribute('collectiontitle',dataprd.collectionTitle)
                                var productImag = generate_html_tag('div','productImage')
                                var mainImage = generate_html_tag('div','mainImage')
                                var mainImg = generate_html_tag('img')
                                mainImg.setAttribute('src',dataprd.collectionMainProduct.imageUrl)
                                mainImg.setAttribute('onerror',"this.src='"+inc_noimage+"'" );
                                mainImg.setAttribute('alt',dataprd.collectionMainProduct.productName)
                                mainImage.appendChild(mainImg)
                                productImag.appendChild(mainImage)
                                var otherImages = generate_html_tag('div','otherImages')
                                productImag.appendChild(otherImages)
                                var pr=0
                                var sp=0
                                var activePriceM = parseFloat(dataprd.collectionMainProduct.price).toFixed(2).toString();
                                var regularPriceM = parseFloat(dataprd.collectionMainProduct.specialPrice).toFixed(2).toString();
                                if (dataprd.collectionMainProduct.specialPrice != null && dataprd.collectionMainProduct.specialPrice != dataprd.collectionMainProduct.price) {
                                    activePriceM = parseFloat(dataprd.collectionMainProduct.specialPrice).toFixed(2).toString();
                                    regularPriceM = parseFloat(dataprd.collectionMainProduct.price).toFixed(2).toString();
                                }
                                var specialpriceM=0
                                var priceM=0
                                if (activePriceM != regularPriceM && regularPriceM != "" && regularPriceM != null && regularPriceM != 0) {
                                    specialpriceM = activePriceM
                                    priceM = regularPriceM
                                } else{
                                    priceM = regularPriceM
                                }
                                if (sp != 0 && +specialpriceM == 0 || sp == 0 && +specialpriceM == 0) {
                                    pr += +priceM;
                                    sp += +priceM;
                                } else {
                                    pr += +priceM;
                                    sp += +specialpriceM;
                                }
                                var countP=0
                                for (var prdchild of dataprd.collectionChildProducts) {
                                    countP++
                                    product_block.setAttribute('internal_'+countP,prdchild.internalProductId)
                                    var mainImgchild = generate_html_tag('img')
                                    mainImgchild.setAttribute('src',prdchild.imageUrl)
                                    mainImgchild.setAttribute('onerror',"this.src='"+inc_noimage+"'" );
                                    mainImgchild.setAttribute('alt',prdchild.productName)
                                    otherImages.appendChild(mainImgchild)
                                    var price=0;
                                    var specialprice=0;
                                    var activePrice = parseFloat(prdchild.price).toFixed(2).toString();
                                    var regularPrice = parseFloat(prdchild.specialPrice).toFixed(2).toString();
                                    if (prdchild.specialPrice != null && prdchild.specialPrice != prdchild.price) {
                                        activePrice = parseFloat(prdchild.specialPrice).toFixed(2).toString();
                                        regularPrice = parseFloat(prdchild.price).toFixed(2).toString();
                                    }
                                    if (activePrice != regularPrice && regularPrice != "" && regularPrice != null && regularPrice != 0) {
                                        specialprice = activePrice
                                        price = regularPrice
                                    } else{
                                        price = regularPrice
                                    }
                                    if (sp != 0 && +specialprice == 0 || sp == 0 && +specialprice == 0) {
                                        pr += +price;
                                        sp += +price;
                                    } else {
                                        pr += +price;
                                        sp += +specialprice;
                                    }
                                }
                                product_block.appendChild(productImag)
                                var productConent = generate_html_tag('div','productConent')
                                var productName = generate_html_tag('div','productName')
                                productName.innerText = dataprd.collectionTitle
                                product_block.setAttribute('internal_main',dataprd.collectionMainProduct.internalProductId)
                                productConent.appendChild(productName)
                                var productID = generate_html_tag('div','productID')
                                productID.innerHTML = '<span>Collection ID :</span>' + dataprd.collectionId
                                //collectionMainProduct.productId
                                productConent.appendChild(productID)
                                var productPrice = generate_html_tag('div','productPrice')
                                if (sp != null && sp != pr) {
                                    productPrice.innerText = new Intl.NumberFormat(currency_c, { style: 'currency', currency: currency_inc }).format(sp)
                                }else{
                                    productPrice.innerText = new Intl.NumberFormat(currency_c, { style: 'currency', currency: currency_inc }).format(pr)
                                }
                                productConent.appendChild(productPrice)
                                var productButton = generate_html_tag('div','productButton')
                                var incButtonProduct = generate_html_tag('button','incButtonProduct')
                                incButtonProduct.innerText = 'Add to collection'
                                productButton.appendChild(incButtonProduct)
                                productConent.appendChild(productButton)
                                product_block.appendChild(productConent)
                                product_block.addEventListener('click',function(){
                                    if(document.querySelector('.bulk_btn_active') != null){
                                        this.classList.toggle('inc_active')
                                    }
                                })
                                productList_item_block.appendChild(product_block)
                            }
                            
                            checkButtonOpacity();
                            selectedPagecol();
                        }
                        
                        var prevPage = function() {
                            if(current_page > 1) {
                                current_page--;
                                changePagecol(current_page);
                            }
                        }
                
                        var nextPage = function() {
                            if(current_page < numPagescol()) {
                                current_page++;
                                changePagecol(current_page);
                            } 
                        }
                
                        var clickPagecol = function() {
                            document.addEventListener('click', function(e) {
                                if(e.target.nodeName == "SPAN" && e.target.classList.contains("clickPageNumbercol")) {
                                    current_page = e.target.textContent;
                                    changePagecol(current_page);
                                }
                            });
                        }
                
                        var pageNumberscol = function() {
                            var pageNumber = document.getElementById('page_number');
                            if(pageNumber != null){
                                pageNumber.innerHTML = "";
                                for(var l = 1; l < numPagescol() + 1; l++) {
                                    pageNumber.innerHTML += "<span class='clickPageNumbercol'>" + l + "</span>";
                                }
                            }
                        }
                
                        var numPagescol = function() {
                            return Math.ceil(dataProducts.length / records_per_page);  
                        }
                    }
                    var pagination = new Pagination();
                    pagination.init();
    
                    setTimeout(function(){
                        hideLoader()
                    },500)
                }else{
                    var elproductlist=document.querySelector('.productList')
                    elproductlist.innerHTML = ""
                    elproductlist.innerHTML = "Sorry No Collection Found."
                    setTimeout(function(){
                        hideLoader()
                    },10)
                }
            }else{
                hideLoader()
            }
        }
    }
    xhr.send(paramD);
    
}
INC.methods.deleteCollectionapi = function(colid){
    var sel_col_type = document.querySelector('.dropdown-one')
    var colType = sel_col_type.options[sel_col_type.selectedIndex].getAttribute("name");
    var clientid2 = localStorage.getItem('client_selected')
    if(clientid2 == null && localStorage.getItem('client_details') != undefined){
        var clientd = localStorage.getItem('client_details').split('-')[1]
        clientid2 = decodeString(clientd)
    }
    var param = "";
    if(colType == "published" || colType == "all"){
        param = '{"collectionIds":"'+colid+'","feedId":"'+clientid2+'","status":"1"}';
    }else if(colType == "draft" || colType == "deleted"){
        param = '{"collectionIds":"'+colid+'","feedId":"'+clientid2+'","status":"0"}';
    }
    var delparam = '{"eventData":"'+btoa(param)+'"}'
    var urlstatus = 'https://collection.increasingly.com/collections/delete';
    var xhr3 = new XMLHttpRequest();
    xhr3.open('POST', urlstatus, true);
    xhr3.setRequestHeader('content-type', 'application/json');
    xhr3.onerror = function () {
        console.log("error")
    };
    xhr3.onreadystatechange = function () {
        if (xhr3.readyState === XMLHttpRequest.DONE && xhr3.status === 200) {
            if(xhr3.responseText != ""){
                document.querySelector('.modal-msg').innerText = "Collections are deleted";
                INC.methods.closepopup();
                hideLoader()
            }
        }
    }
    xhr3.send(delparam);
}
INC.methods.colmovetodraft = function(mainid,client_id_1,coltitle){
    var param = '{"internalProductIdsList":"'+mainid+'","feedId":"'+client_id_1+'","status":"0","collectionTitle":"'+coltitle+'"}'
    var publishparam = '{"eventData":"'+btoa(param)+'"}'
    var publishurl = 'https://collection.increasingly.com/collections/create'
    var xhr12 = new XMLHttpRequest();
    xhr12.open('POST', publishurl, true);
    xhr12.setRequestHeader('content-type', 'application/json');
    xhr12.onerror = function () {
        console.log("error")
    };
    xhr12.onreadystatechange =function () {
        if (xhr12.readyState === XMLHttpRequest.DONE && xhr12.status === 200) {
            if (xhr12.responseText != "") {
                hideLoader();
                document.querySelector('.modal-msg').innerText = "Collections are moved to draft";
                INC.methods.closepopup();
            } else {
                hideLoader();
            }
        }
    }
    xhr12.send(publishparam);
}
document.addEventListener('click', function(e) { 
    if(e.target.classList.contains('get_allclient_list_dropdown') == falseflg &&  e.target.classList.contains('reporting_li_dropdown') == falseflg && e.target.classList.contains('client_list_text') == falseflg && e.target.classList.contains('get_allclient_list') == falseflg && e.target.id != "inc_searchInput" && e.target.className != "size_input_div"){
        // document.querySelector('.get_allclient_list').classList.remove('active')
    }
}, false);

setTimeout(function(){
    $('.incInputPrimary').on("search, input", function() { 
        var eltext = this.value
        setTimeout(function() {
            if (eltext.length > 2) {
                if(document.querySelector('#loader_block_inc') == null){
                    showLoader()
                }
                if(document.querySelector('.collectionList') != null){
                    INC.methods.getallCollection(eltext)
                }else{
                    INC.methods.searchproducts(eltext)
                }
            }
        }, 100);
    });
    
    
    //save to draft
    var draft_btn = document.querySelector('.publish_collection_save_draft_btn')
    draft_btn.addEventListener('click', function() {
        //draft
        if(document.querySelector('.publish_collection_item .collection_prod_container.active') != null){
            if(document.querySelector('.input_collection_name').value != ""){
                showLoader()
                INC.methods.createcollectionapi("draft")
            }else{
                document.querySelector('.input_collection_name').setAttribute('style','border:1px solid red;')
                var element1 =  document.querySelector('.publish_collection_block .input_collection_name')
                if(element1 != null){
                    element1.scrollIntoView({ behavior: 'smooth'})
                }
            }
        }else{
            var element2 =  document.querySelector('.publish_collection_block .collection_name')
            if(element2 != null){
                element2.scrollIntoView({ behavior: 'smooth'})
            }
            document.querySelector('.publish_col_heading span').setAttribute('style','color: red;font-weight: bold;')
        }
    });
    //publish
    var publish_btn = document.querySelector('.publish_collection_btn')
    publish_btn.addEventListener('click', function() {
        if(this.innerText == 'VIEW COLLECTION'){
            document.querySelector('#viewAll').click()
            this.innerText = 'PUBLISH'
        }else{
            if(document.querySelector('.publish_collection_button_block').classList.contains('view_publish') == falseflg){
                if(document.querySelector('.publish_collection_item .collection_prod_container.active') != null){
                    if(document.querySelector('.input_collection_name').value != ""){
                        showLoader()
                        INC.methods.createcollectionapi("publish")
                    }else{
                        document.querySelector('.input_collection_name').setAttribute('style','border:1px solid red;')
                        jQuery("html, body").animate({ scrollTop: jQuery(".input_collection_name").offset().top + 110}, 500);
                    }
                }else{
                    jQuery("html, body").animate({ scrollTop: jQuery(".publish_col_heading").offset().top + 110}, 500);
                    document.querySelector('.publish_col_heading span').setAttribute('style','color: red;font-weight: bold;')
                }
            }
        }
    });
    //collection name
    var col_name_elm = document.querySelector('.input_collection_name')
    col_name_elm.addEventListener('keydown', function() {
        this.setAttribute('style','')
    })
    //create new collection
    var createnewcollection = document.querySelector('#createNew')
    createnewcollection.addEventListener('click', function() {
        document.querySelector('.incInputPrimary').value=""
        document.querySelector('.collectionHeader h2').innerText = "Create new collection"
        document.querySelector('body').classList.add('createpublishcollection')
        document.querySelector('body').classList.remove('collectionList')
        INC.methods.resetcollection()
    });
    //view all collection
    var viewallcollection = document.querySelector('#viewAll')
    viewallcollection.addEventListener('click', function() {
        document.querySelector(".dropdown-one option").selected = true
        document.querySelector('.incInputPrimary').value=""
        document.querySelector('.collectionHeader h2').innerText = "Collections"
        document.querySelector('body').classList.remove('bulk_btn_active')
        document.querySelector('body').classList.remove('createpublishcollection')
        document.querySelector('body').classList.add('collectionList')
        showLoader()
        INC.methods.getallCollection()
    });
    //select collection type
    $('select.dropdown-one').change(function(){
        showLoader()
        INC.methods.getallCollection()
        if(this.value == "1" || this.value == "2"){
            document.querySelector('.bulk-button').style.display="inline-block"
        }
    })
    //bulk selection
    var bulkbtn=document.querySelector('.bulk-button')
    bulkbtn.addEventListener('click', function() {
        document.querySelector('body').classList.add('bulk_btn_active')
    });
    //Cancel-button
    var cancelbtn=document.querySelector('.Cancel-button')
    cancelbtn.addEventListener('click', function() {
        document.querySelector('body').classList.remove('bulk_btn_active')
        var elprodblock = document.querySelectorAll('.productBlock.inc_active')
        for (var prdb of elprodblock) {
            prdb.classList.remove('inc_active')
        }
    });
    //Delete-button
    var deletebtn=document.querySelector('.Delete-button')
    deletebtn.addEventListener('click', function() {
        var elprodblock = document.querySelectorAll('.productBlock.inc_active')
        for (var elp of elprodblock) {
            var colid = elp.getAttribute('collectionId') 
            INC.methods.deleteCollectionapi(colid)
        }
    });
    var moveDraft=document.querySelector('.moveDraft')
    moveDraft.addEventListener('click', function() {
        var elproductactive = document.querySelectorAll('.productBlock.inc_active')
        var collection_ids=""
        for (var elp of elproductactive) {
            var client_id_1 = localStorage.getItem('client_selected')
            if(client_id_1 == null && localStorage.getItem('client_details') != undefined){
                var clientd = localStorage.getItem('client_details').split('-')[1]
                client_id_1 = decodeString(clientd)
            }
            var coltitle= elp.getAttribute('collectiontitle')
            var mainid = '';
            mainid = elp.getAttribute('internal_main')
            collection_ids = mainid
            if(elp.getAttribute('internal_1') != undefined){
                var colprdids = elp.getAttribute('internal_1')
                collection_ids = collection_ids + "," +colprdids
            }
            if(elp.getAttribute('internal_2') != undefined){
                var colprdids1 = elp.getAttribute('internal_2')
                collection_ids = collection_ids + "," +colprdids1
            }
            if(elp.getAttribute('internal_3') != undefined){
                var colprdids2 = elp.getAttribute('internal_3')
                collection_ids = collection_ids + "," +colprdids2
            }
            INC.methods.colmovetodraft(collection_ids,client_id_1,coltitle)
        }
    });
},2000)











