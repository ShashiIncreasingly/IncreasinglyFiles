
var INC = (typeof(INC) == "undefined") ? {} : INC;
INC.methods = {};

var currency_c="en-US"
var currency_inc="USD"


function sorting_data(json_object, key_to_sort_by) {
    function sortByKey(a, b) {
        var x = a[key_to_sort_by];
        var y = b[key_to_sort_by];
        return ((x < y) ? -1 : ((x > y) ? 1 : 0));
    }

    json_object.sort(sortByKey);
}

function sortByKey(array, key) {
    return array.sort(function(a, b) {
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

var dataProducts=[]
function generate_html_tag(element, className) {
    var generateEl = document.createElement(element);
    className ? generateEl.classList.add(className) : null;
    return generateEl;
}

var client_id = localStorage.getItem('client_selected') 
if(client_id == null && localStorage.getItem('client_details') != undefined){
    var clientd = localStorage.getItem('client_details').split('-')[1]
    client_id = decodeString(clientd)
}
var textsearch = ""

setTimeout(function(){
    if(client_id != null){
        showLoader()
        // INC.methods.searchproducts(client_id,textsearch)
        if(document.querySelector('.collectionList') != null){
            INC.methods.getallCollection(textsearch)
        }else{
            INC.methods.searchproducts(client_id,textsearch)
        }
    }else{
        document.querySelector('#create_collection_section').style.display="none"
    }
    var check_cl_client1 = setInterval(function(){
        if(localStorage.getItem('client_details') != undefined && document.querySelector('.client_list_text') != null){
            var clientd = localStorage.getItem('client_details').split('-')[1]
                client_id = decodeString(clientd)
            if(document.querySelector('.client_list_text').innerText.toLowerCase() == "select client" || document.querySelector('.client_list_text').innerText == "Select Client"){
                if(client_id != undefined){
                    if(document.querySelector('.reporting_li_dropdown[clientid="'+client_id.trim()+'"]') != null){
                        document.querySelector('.reporting_li_dropdown[clientid="'+client_id.trim()+'"]').click()
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
INC.methods.searchproducts = function (clientId,textsearch) { 
    if(textsearch == ""){
        var param = '{"feedId":"'+clientId+'","searchString":""}'
    }else{
        var param = '{"feedId":"'+clientId+'","searchString":"'+textsearch+'"}'
    }
    var paramN = '{"elasticSearchPattern":"'+btoa(param)+'"}'
    var xhr = new XMLHttpRequest();

    var urlstatus = 'https://collection.increasingly.com/collections/products/search'
    var xhr = new XMLHttpRequest();
    xhr.open('POST', urlstatus, true);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function () { }
    xhr.onerror = function () {
        console.log("error")
    };
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
            if(xhr.responseText != ""){
                var result = JSON.parse(xhr.responseText)
                if(result.length > 0){
                    dataProducts = result
                    var elproductlist=document.querySelector('.createpublishcollection .productList')
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
                    var prevButton = document.getElementById('button_prev');
                    var nextButton = document.getElementById('button_next');
                    function Pagination() {
                        var prevButton = document.getElementById('button_prev');
                        var nextButton = document.getElementById('button_next');
                        var clickPageNumber = document.querySelectorAll('.clickPageNumber');
                        
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
                            var prevButton = document.getElementById('button_prev');
                            var nextButton = document.getElementById('button_next');
                            prevButton.addEventListener('click', prevPage);
                            nextButton.addEventListener('click', nextPage);   
                        }
                            
                        var selectedPage = function() {
                            var page_number = document.getElementById('page_number').getElementsByClassName('clickPageNumber'); 
                            for (var i = 0; i < page_number.length; i++) {
                                if (i == current_page - 1) {
                                    page_number[i].classList.add('active')
                                    // page_number[i].style.opacity = "1.0";
                                } 
                                else {
                                    page_number[i].classList.remove('active')
                                    // page_number[i].style.opacity = "0.5";
                                }
                            }   
                        }  
                        
                        var checkButtonOpacity = function() {
                            var prevButton = document.getElementById('button_prev');
                            var nextButton = document.getElementById('button_next');
                            current_page == 1 ? prevButton.classList.add('opacity') : prevButton.classList.remove('opacity');
                            current_page == numPages() ? nextButton.classList.add('opacity') : nextButton.classList.remove('opacity');
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
                                var prodhtml = '<div class="productImage"> <div class="mainImage"> <img src="'+dataprd.imageUrl+'" alt=""></div></div><div class="productConent"> <div class="productName"> '+dataprd.productName+'</div><div class="productID"> <span>Product ID :</span> '+dataprd.productId+' </div><div class="productPrice"> '+activePrice+' </div><div class="productButton"> <button class="incButtonProduct">Add to collection</button> </div></div>'
                                product_block.innerHTML = prodhtml
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
                                pageNumber.innerHTML = "";
                
                            for(var i = 1; i < numPages() + 1; i++) {
                                pageNumber.innerHTML += "<span class='clickPageNumber'>" + i + "</span>";
                            }
                        }
                
                        var numPages = function() {
                            return Math.ceil(dataProducts.length / records_per_page);  
                        }
                    }
                    var pagination = new Pagination();
                    pagination.init();
                }else{
                    var elproductlist=document.querySelector('.productList')
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
    xhr.send(paramN);
}


INC.methods.createcollectionapi = function(type_collection) {
    var client_id = localStorage.getItem('client_selected')
    if(client_id == null && localStorage.getItem('client_details') != undefined){
        var clientd = localStorage.getItem('client_details').split('-')[1]
        client_id = decodeString(clientd)
    }
    var col_name=document.querySelector('.input_collection_name').value
    var all_active_col = document.querySelectorAll('.publish_collection_item .collection_prod_container.active')
    var collect_internal_id = ""
    for(c=0;c<all_active_col.length;c++){
        if(c == 0){
            collect_internal_id = all_active_col[c].getAttribute('internalid')
        }else{
            collect_internal_id = collect_internal_id + "," + all_active_col[c].getAttribute('internalid')
        }
    }
    if(type_collection == "draft"){
        var param = '{"internalProductIdsList":"'+collect_internal_id+'","feedId":"'+client_id+'","status":"0","collectionTitle":"'+col_name+'"}'
    }else{
        var param = '{"internalProductIdsList":"'+collect_internal_id+'","feedId":"'+client_id+'","status":"1","collectionTitle":"'+col_name+'"}'
    }
    // var param = '{"feedId":"117","searchString":""}'
    param = '{"eventData":"'+btoa(param)+'"}'
    var xhr = new XMLHttpRequest();

    var urlstatus = 'https://collection.increasingly.com/collections/create'
    jQuery.support.cors = true;
    jQuery.ajax({
        type: "POST",
        url: urlstatus,
        crossOrigin: true,
        contentType: "application/json",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        data: param,
        error: function () {
            // INC.methods.resetcollection()
            hideLoader()
        },
        success: function (col_data) {
            // INC.methods.resetcollection()
            var successmessage=document.querySelector('.note_block')
            var succ = generate_html_tag('div','publish_success_mes')
           
            if(type_collection != "draft"){
                succ.innerText = "Collection has been successfully published."
                document.querySelector('.publish_collection_btn span').innerText = "VIEW COLLECTION"
            }else{
                succ.innerText = "Collection has been successfully saved to draft."
                document.querySelector('.publish_collection_save_draft_btn span').innerText = "SAVE & DRAFT"
            }
            successmessage.appendChild(succ)
            successmessage.classList.add('active')
            
            document.querySelector('.publish_collection_button_block').classList.add('view_publish')
            hideLoader()
        }
    });
}
INC.methods.resetcollection = function() {
    var all_publish_elm = document.querySelectorAll('.collection_prod_container.active')
    document.querySelector('.input_collection_name').value = ""
    document.querySelector('.input_collection_placement').value = ""
    document.querySelector('.input_collection_promo').value = ""
    // document.querySelector('.create-collection-block').classList.add('active')
    // document.querySelector('.view-all-collection').classList.remove('active')
    // document.querySelector('.create-collection-block').style.display = "flex"
    // document.querySelector('.view-all-collection').style.display = "none"
    for(d=0;d<all_publish_elm.length;d++){
        var selprodblock = all_publish_elm[d]
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
    // document.querySelector('.view-all-collection').classList.remove('bulk_select_active')
    var eltext=""
    var client_id = localStorage.getItem('client_selected')
    if(client_id == null && localStorage.getItem('client_details') != undefined){
        var clientd = localStorage.getItem('client_details').split('-')[1]
        client_id = decodeString(clientd)
    }
    if(document.querySelector('#loader_block_inc') == null){
        showLoader()
    }
    INC.methods.searchproducts(client_id,eltext)
}

INC.methods.updatecollectionprice = function() {
    var price_total = 0
    var publish_elm = document.querySelectorAll('.collection_prod_container.active')
    var pr = 0;
    var sp = 0;
    for(e=0;e<publish_elm.length;e++){
        var prc = publish_elm[e].getAttribute('price')
        var sprc = publish_elm[e].getAttribute('specialprice')
        if(sprc == "null"){
            sprc = 0
        }
        if (sp != 0 && +sprc != 0) {
            pr += +prc;
            sp += +sprc;
        } else if (sp != 0 && +sprc == 0) {
            pr += +prc;
            sp += +prc;
        } else if (sp == 0 && +sprc == 0) {
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
    var client_id = localStorage.getItem('client_selected')
    if(client_id == null && localStorage.getItem('client_details') != undefined){
        var clientd = localStorage.getItem('client_details').split('-')[1]
        client_id = decodeString(clientd)
    }
    if(coltext != undefined){
        if(colType == "all"){
            var param = '{"feedId":"'+client_id+'","searchString":"'+coltext+'"}'
        }else if(colType == "published"){
            var param = '{"feedId":"'+client_id+'","searchString":"'+coltext+'","status":"1"}'
        }else if(colType == "draft"){
            var param = '{"feedId":"'+client_id+'","searchString":"'+coltext+'","status":"0"}'
        }else if(colType == "deleted"){
            var param = '{"feedId":"'+client_id+'","searchString":"Z","status":"0"}'
        }
    }else{
        if(colType == "all"){
            var param = '{"feedId":"'+client_id+'","searchString":""}'
        }else if(colType == "published"){
            var param = '{"feedId":"'+client_id+'","searchString":"","status":"1"}'
        }else if(colType == "draft"){
            var param = '{"feedId":"'+client_id+'","searchString":"","status":"0"}'
        }else if(colType == "deleted"){
            var param = '{"feedId":"'+client_id+'","searchString":"","status":"0"}'
        }
    }
    var paramD = '{"elasticSearchPattern":"'+btoa(param)+'"}'
   
    var urlstatus = 'https://collection.increasingly.com/collections/collection-products/search'
    var xhr = new XMLHttpRequest();
    xhr.open('POST', urlstatus, true);
    xhr.setRequestHeader('content-type', 'application/json');
    xhr.onload = function () { }
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
                        //<span id="page_number" class="outline-none"></span>
                        var page_number = generate_html_tag('div','page_number')
                        page_number.setAttribute('id','page_number')
                        pagination_block.appendChild(page_number)
                        pagination_block.appendChild(button_next)
                    }
                    var prevButton = document.getElementById('button_prev');
                    var nextButton = document.getElementById('button_next');
                    function Pagination() {
                        var prevButton = document.getElementById('button_prev');
                        var nextButton = document.getElementById('button_next');
                        var clickPageNumbercol = document.querySelectorAll('.collectionList .productList .clickPageNumbercol');
                        
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
                            prevButton.addEventListener('click', prevPage);
                            nextButton.addEventListener('click', nextPage);   
                        }
                            
                        var selectedPagecol = function() {
                            var page_number = document.getElementById('page_number').getElementsByClassName('clickPagecol'); 
                            for (var i = 0; i < page_number.length; i++) {
                                if (i == current_page - 1) {
                                    page_number[i].classList.add('active')
                                } 
                                else {
                                    page_number[i].classList.remove('active')
                                }
                            }   
                        }  
                        
                        var checkButtonOpacity = function() {
                            var prevButton = document.getElementById('button_prev');
                            var nextButton = document.getElementById('button_next');
                            current_page == 1 ? prevButton.classList.add('opacity') : prevButton.classList.remove('opacity');
                            current_page == numPagescol() ? nextButton.classList.add('opacity') : nextButton.classList.remove('opacity');
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
                                var productImag = generate_html_tag('div','productImage')
                                var mainImage = generate_html_tag('div','mainImage')
                                var mainImg = generate_html_tag('img')
                                mainImg.setAttribute('src',dataprd.collectionMainProduct.imageUrl)
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
                                for (var prdchild of dataprd.collectionChildProducts) {
                                    var mainImgchild = generate_html_tag('img')
                                    mainImgchild.setAttribute('src',prdchild.imageUrl)
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
                                productName.innerText = dataprd.collectionMainProduct.productName
                                productConent.appendChild(productName)
                                var productID = generate_html_tag('div','productID')
                                productID.innerHTML = '<span>Product ID :</span>' + dataprd.collectionMainProduct.productId
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
                                pageNumber.innerHTML = "";
                
                            for(var l = 1; l < numPagescol() + 1; l++) {
                                pageNumber.innerHTML += "<span class='clickPageNumbercol'>" + l + "</span>";
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
    xhr.send(paramD);
    
}
INC.methods.deleteCollectionapi = function(colid){
    var sel_col_type = document.querySelector('.dropdown-one')
    var colType = sel_col_type.options[sel_col_type.selectedIndex].getAttribute("name");
    var client_id = localStorage.getItem('client_selected')
    if(client_id == null && localStorage.getItem('client_details') != undefined){
        var clientd = localStorage.getItem('client_details').split('-')[1]
        client_id = decodeString(clientd)
    }
    if(colType == "published"){
        var param = '{"collectionIds":"'+colid+'","feedId":"'+client_id+'","status":"0"}'
    }else if(colType == "draft"){
        var param = '{"collectionIds":"'+colid+'","feedId":"'+client_id+'","status":"1"}'
    }
    param = '{"eventData":"'+btoa(param)+'"}'
    var xhr = new XMLHttpRequest();

    var urlstatus = 'https://collection.increasingly.com/collections/delete'
    jQuery.support.cors = true;
    jQuery.ajax({
        type: "POST",
        url: urlstatus,
        crossOrigin: true,
        contentType: "application/json",
        headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
        },
        data: param,
        error: function () {
            hideLoader()
        },
        success: function (result) {
            if(result.length > 0){
            }
        }
    });
}
document.addEventListener('click', function(e) { 
    if(e.target.classList.contains('get_allclient_list_dropdown') == false &&  e.target.classList.contains('reporting_li_dropdown') == false && e.target.classList.contains('client_list_text') == false && e.target.classList.contains('get_allclient_list') == false && e.target.id != "inc_searchInput" && e.target.className != "size_input_div"){
        document.querySelector('.get_allclient_list').classList.remove('active')
    }
}, false);

setTimeout(function(){
    $('.incInputPrimary').on("search, input", function() { 
        eltext = this.value
        setTimeout(function() {
            if (eltext.length > 2) {
                if(document.querySelector('#loader_block_inc') == null){
                    showLoader()
                }
                var client_id = localStorage.getItem('client_selected')
                if(client_id == null && localStorage.getItem('client_details') != undefined){
                    var clientd = localStorage.getItem('client_details').split('-')[1]
                    client_id = decodeString(clientd)
                }
                if(document.querySelector('.collectionList') != null){
                    INC.methods.getallCollection(eltext)
                }else{
                    INC.methods.searchproducts(client_id,eltext)
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
                var element =  document.querySelector('.publish_collection_block .input_collection_name')
                if(element != null){
                    element.scrollIntoView({ behavior: 'smooth'})
                }
                document.querySelector('.input_collection_name').value
            }
        }else{
            var element =  document.querySelector('.publish_collection_block .collection_name')
            if(element != null){
                element.scrollIntoView({ behavior: 'smooth'})
            }
            document.querySelector('.publish_col_heading span').setAttribute('style','color: red;font-weight: bold;')
        }
    });
    //publish
    var publish_btn = document.querySelector('.publish_collection_btn')
    publish_btn.addEventListener('click', function() {
        if(document.querySelector('.publish_collection_button_block').classList.contains('view_publish') == false){
            if(document.querySelector('.publish_collection_item .collection_prod_container.active') != null){
                if(document.querySelector('.input_collection_name').value != ""){
                    showLoader()
                    INC.methods.createcollectionapi("publish")
                }else{
                    document.querySelector('.input_collection_name').setAttribute('style','border:1px solid red;')
                    jQuery("html, body").animate({ scrollTop: jQuery(".input_collection_name").offset().top + 110}, 500);
                    document.querySelector('.input_collection_name').value
                }
            }else{
                jQuery("html, body").animate({ scrollTop: jQuery(".publish_col_heading").offset().top + 110}, 500);
                document.querySelector('.publish_col_heading span').setAttribute('style','color: red;font-weight: bold;')
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
        document.querySelector('body').classList.add('createpublishcollection')
        document.querySelector('body').classList.remove('collectionList')
        INC.methods.resetcollection()
    });
    //view all collection
    var viewallcollection = document.querySelector('#viewAll')
    viewallcollection.addEventListener('click', function() {
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
        var sel_col_type = document.querySelector('.dropdown-one')
        var colType = sel_col_type.options[sel_col_type.selectedIndex].getAttribute("name");
        if(this.value == "1" || this.value == "2"){
            document.querySelector('.bulk-button').style.display="inline-block"
        }
    })
    //bulk selection
    var bulkbtn=document.querySelector('.bulk-button')
    bulkbtn.addEventListener('click', function() {
        document.querySelector('body').classList.add('bulk_btn_active')
        // document.querySelector('.filter-block').classList.add('active')
        // document.querySelector('.view-all-collection').classList.add('bulk_select_active')
    });
    //Cancel-button
    var cancelbtn=document.querySelector('.Cancel-button')
    cancelbtn.addEventListener('click', function() {
        document.querySelector('body').classList.remove('bulk_btn_active')
        // document.querySelector('.filter-block').classList.remove('active')
        // document.querySelector('.view-all-collection').classList.remove('bulk_select_active')
        var elprodblock = document.querySelectorAll('.collection_block.active')
        for(d=0;d<elprodblock.length;d++){
            elprodblock[d].classList.remove('active')
        }
    });
    //Delete-button
    var deletebtn=document.querySelector('.Delete-button')
    deletebtn.addEventListener('click', function() {
        var elprodblock = document.querySelectorAll('.collection_block.active')
        for(d=0;d<elprodblock.length;d++){
            var colid = elprodblock[d].getAttribute('collectionId') 
            INC.methods.deleteCollectionapi(colid)
        }
    });
},2000)










