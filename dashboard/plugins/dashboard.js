
var INC = (typeof(INC) == "undefined") ? {} : INC;
INC.methods = {};
var pageload=true
 /*Get all the active clients details */
var currency_c="en-US"
var currency_inc="USD"
var trueflag=true
var falseflag=false

function generate_html_tag(element, className) {
    var generateEl = document.createElement(element);
    if(className != undefined){
        generateEl.classList.add(className)
    }
    return generateEl;
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
        const sorteddata = x > y ? 1 : 0;
        return (x < y ? -1 : (sorteddata));
    });
}
INC.methods.get_rep_snippest = function () {
    var selDate_=document.querySelector('.viewReport .dropdown-two')
    var seldays_ = selDate_.options[selDate_.selectedIndex].innerText
    
    var api_key = document.querySelector('.reporting_li_dropdown.active').getAttribute('apikey')
    var clientid = document.querySelector('.reporting_li_dropdown.active').getAttribute('clientid')
    var sel_stats_s="";
    if(document.querySelector('.incReportTagsList li.active span') != null){
        sel_stats_s = document.querySelector('.incReportTagsList li.active span').innerText
    }
    var reptype=""
    if(sel_stats_s == "Bundle report"){
        reptype = "DailyStats"
    }else if(sel_stats_s == "Top category report"){
        reptype = "TopCategories"
    }else if(sel_stats_s == "Top bundles report"){
        reptype = "TopBundles"
    }else if(sel_stats_s == "Dynamic Recs"){
        reptype = "RecommendationsStats"
    }
    var str_clientid = clientid;
    var client_id_array = str_clientid.split(',');

    var url_ = 'https://cms.increasingly.com/ReportingSnippet'
    var param_ = {"clientId":client_id_array, "reportType": reptype}
    var xhrr_r = new XMLHttpRequest();
    xhrr_r.open('POST', url_, true);
    xhrr_r.setRequestHeader('content-type', 'application/json');
    xhrr_r.onreadystatechange = function () {
        if (xhrr_r.readyState === XMLHttpRequest.DONE && xhrr_r.status === 200) {
            if(xhrr_r.responseText != ""){
                var res_snippet=JSON.parse(xhrr_r.responseText)
                if(res_snippet.Status == "Success"){
                    var repsnipet = document.querySelector('.reporting_snippet .iframe_snippet')
                    repsnipet.innerHTML = ""
                    if(res_snippet.Snippets != undefined){
                        var iframeEl = generate_html_tag('div','ifram_')
                        iframeEl.innerHTML  = res_snippet.Snippets;
                        var viewPortTag=document.createElement('meta');
                        viewPortTag.id="viewport";
                        viewPortTag.name = "viewport";
                        viewPortTag.content = "width=device-width; initial-scale=1.0; maximum-scale=1.0; user-scalable=0;";
                        window.parent.document.getElementsByTagName('head')[0].appendChild(viewPortTag);
                        // iframeEl.querySelector('iframe').setAttribute("Content-Security-Policy: frame-ancestors 'self'","")
                        repsnipet.innerHTML = "";
                        repsnipet.appendChild(iframeEl)
                    }else {
                        var html_nodata = '<span style="display: flex;justify-content: center; padding: 20px;">Sorry, No Records Found</span>'
                        document.querySelector('.iframe_snippet').innerHTML = html_nodata
                    }
                    hideLoader()
                    //Content-Security-Policy: frame-ancestors 'self'
                    // var el_snippet = generate_html_tag('div','iframe_snippet')
                    // el_snippet.innerHTML = res_snippet.Snippets
                    // repsnipet.appendChild(el_snippet)
                    
                }
            }
        }else if(xhrr_r.status === 400){
            var repsnipet = document.querySelector('.reporting_snippet .iframe_snippet')
            repsnipet.innerHTML = ""
            hideLoader()
        }
    }
    xhrr_r.send(JSON.stringify(param_));
}

INC.methods.get_client_details = function (stats_var) {
    var selDate_=document.querySelector('.viewReport .dropdown-two')
    var seldays_ = selDate_.options[selDate_.selectedIndex].value
    var date = new Date();
    var val_="0"
    var val_z="0"
    var date_= ''
    var mnt = date.getMonth() + 1
    if(seldays_ == "1"){
        if(mnt.toString().length == 1){
            mnt = "0" + mnt
        }
        var newd = date.getDate()  - 1
        if(newd.toString().length == 1){
            newd = "0" + newd
        }
        date_= ''+date.getFullYear()+'-'+mnt+'-'+newd+''
    }else if(seldays_ == "7"){
        if(mnt.toString().length == 1){
            mnt = "0" + mnt
        }
        var newd = date.getDate() - 7
        if(newd.toString().length == 1){
            newd = "0" + newd
        }
        date_= ''+date.getFullYear()+'-'+mnt+'-'+newd+''
        var sel_date = getlastmonthdate(7)
        var fromNewdate = convert(sel_date)
        date_ = fromNewdate
    } else if(seldays_ == "14"){
        if(mnt.toString().length == 1){
            mnt = "0" + mnt
        }
        var newd = date.getDate() - 14
        if(newd.toString().length == 1){
            newd = "0" + newd
        }
        date_= ''+date.getFullYear()+'-'+mnt+'-'+newd+''
        var sel_date = getlastmonthdate(14)
        var fromNewdate = convert(sel_date)
        date_ = fromNewdate
    }else if(seldays_ == "30"){
        if(mnt.toString().length == 1){
            mnt = "0" + mnt-1
        }
        var newd = date.getDate()
        if(newd.toString().length == 1){
            newd = "0" + newd
        }
        date_= ''+date.getFullYear()+'-'+mnt+'-'+newd+''
        var sel_date = getlastmonthdate(30)
        var fromNewdate = convert(sel_date)
        date_ = fromNewdate
    }
    var mnt_ =  date.getMonth() + 1
    if(mnt_.toString().length == 1){
        mnt_ = "0" + mnt_
    }
    var newd_ = date.getDate()
    if(newd_.toString().length == 1){
        newd_ = "0" + newd_
    }
    var tod_date = ''+date.getFullYear()+'-'+mnt_+'-'+newd_+'';
    var api_key = document.querySelector('.reporting_li_dropdown.active').getAttribute('api_key')
    var clientid = document.querySelector('.reporting_li_dropdown.active').getAttribute('clientid')
    var cl_region = document.querySelector('.reporting_li_dropdown.active').getAttribute('region')
    var cl_nme = document.querySelector('.reporting_li_dropdown.active').getAttribute('fnm')
    if(cl_nme == "Avon CZ MAB"){
        cl_region = "CZ"
    }else if(cl_nme == "Avon Slovakia"){
        cl_region = "EUR"
    }else if(cl_nme == "BalsamBrands_AU"){
        cl_region = "US"
    }else if(cl_nme == "Albeka"){
        cl_region = "EUR"
    }else if(cl_nme.indexOf('Games Workshop') >= 0){
        cl_region = "UK"
    }else if(cl_nme.indexOf('Denby CA') >= 0){
        cl_region = "US"
    }
    currency_check(cl_region)
    var sel_stats_s="";
    if(document.querySelector('.incReportTagsList li.active span') != null){
        sel_stats_s = document.querySelector('.incReportTagsList li.active span').innerText
    }
    
    var reptype=""
    if(sel_stats_s == "Bundle report"){
        reptype = "DailyStats"
    }else if(sel_stats_s == "Top category report"){
        reptype = "TopCategories"
    }else if(sel_stats_s == "Top bundles report"){
        reptype = "TopBundles"
        var date = new Date();
        var firstDay = new Date(date.getFullYear(), date.getMonth(), 1);
        var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
        date_ = convert(firstDay)
        tod_date = convert(lastDay)

    }else if(sel_stats_s == "Dynamic Recs"){
        reptype = "RecommendationsStats"
    }
    var eventdata = ""
    eventdata='api_key='+api_key+'&from_date='+date_+'&to_date='+tod_date+'&report_type='+reptype+''
    
    var url='https://cms.increasingly.com/Reporting?ird/' + btoa(eventdata)
    // var uel='https://cms.increasingly.com/Reporting?YXBpX2tleT1kVEVQakImZnJvbV9kYXRlPTIwMjAtMTAtMDEmdG9fZGF0ZT0yMDIwLTEwLTEwJnJlcG9ydF90eXBlPURhaWx5U3RhdHM='
    var xhrr = new XMLHttpRequest();
    xhrr.open('GET', url, true);
    xhrr.send();
    xhrr.onreadystatechange = function () {
        if (xhrr.readyState === XMLHttpRequest.DONE && xhrr.status === 200) {
            if(xhrr.responseText != ""){
                var reportdata=JSON.parse(xhrr.responseText)
                if(reportdata.NumberOfRecords != 0){
                    var val_z="0"
                    var gr_sale=0
                    var sale_impct=0
                    var roi_=0
                    var prdBupl=0
                    var bundlecov=0

                    var IncrementalSales=0
                    var SalesImpact=0
                    var BundleSales=0
                    var IncTotalSales=0
                    var IncTotalOrders=0
                    var NonIncTotalOrders=0
                    var NonIncTotalSales=0
                    var BundleReturned=0
                    var BundleRequests=0
                    var Spend=0
                    var days=0
                    if(reportdata.ReportingDailyStats[0] != null){
                        for(var rp=0;rp<reportdata.ReportingDailyStats.length;rp++){
                            if(reportdata.ReportingDailyStats[rp].BundleReturned != null){
                                BundleReturned = BundleReturned + reportdata.ReportingDailyStats[rp].BundleReturned
                            }
                            if(reportdata.ReportingDailyStats[rp].Spend != null){
                                if(reportdata.ReportingDailyStats[rp].Spend > 0){
                                    Spend = Spend + reportdata.ReportingDailyStats[rp].Spend
                                }
                            }
                            if(reportdata.ReportingDailyStats[rp].BundleRequests != null){
                                BundleRequests = BundleRequests + reportdata.ReportingDailyStats[rp].BundleRequests
                            }
                            if(reportdata.ReportingDailyStats[rp].IncrementalSales != null){
                                IncrementalSales = IncrementalSales + reportdata.ReportingDailyStats[rp].IncrementalSales
                            }
                            if(reportdata.ReportingDailyStats[rp].SalesImpact != null){
                                SalesImpact = SalesImpact + reportdata.ReportingDailyStats[rp].SalesImpact
                            }
                            if(reportdata.ReportingDailyStats[rp].BundleSales != null){
                                BundleSales = BundleSales + reportdata.ReportingDailyStats[rp].BundleSales
                            }
                            if(reportdata.ReportingDailyStats[rp].IncTotalSales != null){
                                IncTotalSales = IncTotalSales + reportdata.ReportingDailyStats[rp].IncTotalSales
                            }
                            if(reportdata.ReportingDailyStats[rp].IncTotalOrders != null){
                                IncTotalOrders = IncTotalOrders + reportdata.ReportingDailyStats[rp].IncTotalOrders
                            }
                            if(reportdata.ReportingDailyStats[rp].NonIncTotalOrders != null){
                                NonIncTotalOrders = NonIncTotalOrders + reportdata.ReportingDailyStats[rp].NonIncTotalOrders
                            }
                            if(reportdata.ReportingDailyStats[rp].NonIncTotalSales != null){
                                NonIncTotalSales = NonIncTotalSales + reportdata.ReportingDailyStats[rp].NonIncTotalSales
                            }
                            if(reportdata.ReportingDailyStats[rp].Sales != null){
                                gr_sale = gr_sale + reportdata.ReportingDailyStats[rp].Sales
                            }
                            if(reportdata.ReportingDailyStats[rp].SalesImpact != null){
                                sale_impct = sale_impct + reportdata.ReportingDailyStats[rp].SalesImpact
                            }
                            if(reportdata.ReportingDailyStats[rp].ROI != null){
                                roi_ = roi_ + reportdata.ReportingDailyStats[rp].ROI
                            }
                            if(reportdata.ReportingDailyStats[rp].Coverage != null){
                                bundlecov = bundlecov + reportdata.ReportingDailyStats[rp].Coverage
                            }
                            if(reportdata.ReportingDailyStats[rp].IncrementalSalesUplift != null){
                                prdBupl = prdBupl + reportdata.ReportingDailyStats[rp].IncrementalSalesUplift
                            }
                            if(reportdata.ReportingDailyStats[rp].Days != null){
                                days = reportdata.ReportingDailyStats[rp].Days
                            }
                        }
                        //SUM(BundleSales) / (SUM(SalesImpact) - SUM(BundleSales)) * 100 =  BundleUplift%
                        if(reportdata.ReportingDailyStats.length > 1){
                            bundlecov = BundleReturned / BundleRequests * 100
                            prdBupl = (IncrementalSales) / ((SalesImpact) - (IncrementalSales)) * 100
                            var selDate_=document.querySelector('.viewReport .dropdown-two')
                            var seldays_ = selDate_.options[selDate_.selectedIndex].value
                            if(days == 0){
                                if(Spend > 0 && IncTotalOrders > 0){
                                    roi_ = (((IncTotalSales /IncTotalOrders) - (NonIncTotalSales / NonIncTotalOrders)) * IncTotalOrders) / ((Spend / 30) * seldays_)
                                }
                            }else{
                                if(Spend > 0 && IncTotalOrders > 0){
                                    roi_ = (((IncTotalSales /IncTotalOrders) - (NonIncTotalSales / NonIncTotalOrders)) * IncTotalOrders) / ((Spend / 30) * days)
                                }
                            }
                            
                        }
                        if(gr_sale != null){
                            if(currency_inc == "EUR"){
                                if(formatter.format(gr_sale).indexOf(',') >= 0 && formatter.format(gr_sale).indexOf('.') == -1){
                                    document.querySelector('.grosssale').innerText = formatter.format(gr_sale).replace(",", ".")
                                }else{
                                    document.querySelector('.grosssale').innerText = formatter.format(gr_sale).replace(",", ".").replace(".", ",")
                                }
                            }else if(currency_inc == "BGN" || currency_inc == "HUF" || currency_inc == "Lei"){
                                document.querySelector('.grosssale').innerText = check_currency_symb(parseFloat(sale_impct))
                            }else{
                                document.querySelector('.grosssale').innerText = formatter.format(gr_sale)
                            }
                        }else{
                            if(currency_inc == "BGN" || currency_inc == "HUF" || currency_inc == "Lei"){
                                document.querySelector('.grosssale').innerText = check_currency_symb(parseFloat(val_z))
                            }else{
                                document.querySelector('.grosssale').innerText = formatter.format(val_z)
                            }
                            
                        }
                        if(sale_impct != null){
                            if(currency_inc == "EUR"){
                                if(formatter.format(sale_impct).indexOf(',') >= 0 && formatter.format(sale_impct).indexOf('.') == -1){
                                    document.querySelector('.saleimpact').innerText = formatter.format(sale_impct).replace(",", ".")
                                }else{
                                    document.querySelector('.saleimpact').innerText = formatter.format(sale_impct).replace(",", ".").replace(".", ",")
                                }
                            }else if(currency_inc == "BGN" || currency_inc == "HUF" || currency_inc == "Lei"){
                                document.querySelector('.saleimpact').innerText = check_currency_symb(parseFloat(sale_impct))
                            }else{
                                document.querySelector('.saleimpact').innerText = formatter.format(sale_impct)
                            }
                        }else{
                            if(currency_inc == "BGN" || currency_inc == "HUF" || currency_inc == "Lei"){
                                document.querySelector('.saleimpact').innerText = check_currency_symb(parseFloat(val_z))
                            }else{
                                document.querySelector('.saleimpact').innerText = formatter.format(val_z)
                            }
                        }
                        if(roi_ != null){
                            document.querySelector('.returninvestment').innerText = parseFloat(roi_).toFixed(2)//+"%"
                        }else{
                            document.querySelector('.returninvestment').innerText = val_z//+"%"
                        }
                        if(bundlecov != null){
                            document.querySelector('.bundlecovrage').innerText =parseFloat(bundlecov).toFixed(2)+"%"
                        }else{
                            document.querySelector('.bundlecovrage').innerText = val_z+"%"
                        }
                        if(prdBupl != null){
                            document.querySelector('.prodbuplift').innerText = parseFloat(prdBupl).toFixed(2)+"%"
                        }else{
                            document.querySelector('.prodbuplift').innerText =val_z+"%"
                        }
                        // if(reportdata.ReportingDailyStats[0].Sales != null){
                        //     if(currency_inc == "EUR"){
                        //         if(formatter.format(reportdata.ReportingDailyStats[0].Sales).indexOf(',') >= 0 && formatter.format(reportdata.ReportingDailyStats[0].Sales).indexOf('.') == -1){
                        //             document.querySelector('.grosssale').innerText = formatter.format(reportdata.ReportingDailyStats[0].Sales).replace(",", ".")
                        //         }else{
                        //             document.querySelector('.grosssale').innerText = formatter.format(reportdata.ReportingDailyStats[0].Sales).replace(",", ".").replace(".", ",")
                        //         }
                        //     }else{
                        //         document.querySelector('.grosssale').innerText = formatter.format(reportdata.ReportingDailyStats[0].Sales)
                        //     }
                        // }else{
                        //     document.querySelector('.grosssale').innerText = formatter.format(val_z)
                        // }
                        // if(reportdata.ReportingDailyStats[0].SalesImpact != null){
                        //     if(currency_inc == "EUR"){
                        //         if(formatter.format(reportdata.ReportingDailyStats[0].SalesImpact).indexOf(',') >= 0 && formatter.format(reportdata.ReportingDailyStats[0].SalesImpact).indexOf('.') == -1){
                        //             document.querySelector('.saleimpact').innerText = formatter.format(reportdata.ReportingDailyStats[0].SalesImpact).replace(",", ".")
                        //         }else{
                        //             document.querySelector('.saleimpact').innerText = formatter.format(reportdata.ReportingDailyStats[0].SalesImpact).replace(",", ".").replace(".", ",")
                        //         }
                        //     }else{
                        //         document.querySelector('.saleimpact').innerText = formatter.format(reportdata.ReportingDailyStats[0].SalesImpact)
                        //     }
                        // }else{
                        //     document.querySelector('.saleimpact').innerText = formatter.format(val_z)
                        // }
                        // if(reportdata.ReportingDailyStats[0].ROI != null){
                        //     document.querySelector('.returninvestment').innerText = reportdata.ReportingDailyStats[0].ROI.toFixed(1)+"%"
                        // }else{
                        //     document.querySelector('.returninvestment').innerText = val_z+"%"
                        // }
                        // if(reportdata.ReportingDailyStats[0].Coverage != null){
                        //     document.querySelector('.bundlecovrage').innerText = reportdata.ReportingDailyStats[0].Coverage.toFixed(1)+"%"
                        // }else{
                        //     document.querySelector('.prodbuplift').innerText = val_z+"%"
                        // }
                        // if(reportdata.ReportingDailyStats[0].BundleSalesUplift != null){
                        //     document.querySelector('.prodbuplift').innerText = reportdata.ReportingDailyStats[0].BundleSalesUplift.toFixed(1)+"%"
                        // }else{
                        //     document.querySelector('.bundlecovrage').innerText =val_z+"%"
                        // }
                    }else{  
                        setzerotoreport()
                    }
                }else{  
                    setzerotoreport()
                }
                console.log(xhrr.responseText)
                hideLoader()
            }
        }else if(xhrr.status == 504){
            hideLoader()
            setzerotoreport()
        }
    }
}
function setzerotoreport(){
    var val_z="0"
    document.querySelector('.grosssale').innerText = formatter.format(val_z)
    document.querySelector('.saleimpact').innerText = formatter.format(val_z)
    document.querySelector('.returninvestment').innerText = val_z+"%"
    document.querySelector('.prodbuplift').innerText = val_z+"%"
    document.querySelector('.bundlecovrage').innerText =val_z+"%"
}
function truncateToDecimals(num, dec = 2) {
    const calcDec = Math.pow(10, dec);
    return Math.trunc(num * calcDec) / calcDec;
  }

var client_api_id = localStorage.getItem('client_details')



INC.methods.searchAndFilter = function(searchTerm, elm) {
    var elms = elm.parentNode.parentNode.parentNode.parentNode
    var all_lis = elms.querySelectorAll('ul li')
    var is_size_available=0;
    for (var li_cl of all_lis) {
        if(li_cl.querySelector('.size_input_div') == null){
            var currentText = li_cl.innerText;
            currentText = currentText.toUpperCase();
            searchTerm = searchTerm.toUpperCase();
            if (currentText.indexOf(searchTerm) >= 0) {
                li_cl.style.display = "flex"
            } else {
                is_size_available++;
                li_cl.style.display = "none"
            }
        }
    }
}
INC.methods.removecssfromli = function() {
    if(document.querySelector('#inc_searchInput') != null){
        document.querySelector('#inc_searchInput').value=""
    }
    var alllis = document.querySelectorAll('.get_allclient_list_dropdown li')
    for (var scl of alllis) {
        scl.style.display = "flex"
    }
}

var formatter = new Intl.NumberFormat(currency_c, {
    style: 'currency',
    currency: currency_inc,
});

function return_month(dig_m){
    if(dig_m == 1){
        return "January"
    }else if(dig_m == 2){
        return "Febuary"
    }else if(dig_m == 3){
        return "March"
    }else if(dig_m == 4){
        return "April"
    }else if(dig_m == 5){
        return "May"
    }else if(dig_m == 6){
        return "June"
    }else if(dig_m == 7){
        return "July"
    }else if(dig_m == 8){
        return "August"
    }else if(dig_m == 9){
        return "September"
    }else if(dig_m == 10){
        return "October"
    }else if(dig_m == 11){
        return "November"
    }else if(dig_m == 12){
        return "December"
    }
}


INC.methods.get_bundle_status = function(disable_enable) {
    var flag_client=false
    var clientIds = ""
    if(localStorage.getItem('client_details') != undefined){
        var client_api_id = localStorage.getItem('client_details')
        var client_id = client_api_id.split('-')[1]
        if(client_id != undefined){
            if(document.querySelector('.reporting_li_dropdown[clientid="'+client_id+'"]') != null){
                clientIds = client_id
            }
        }
    }
    if(clientIds == "" && document.querySelector('.reporting_li_dropdown.active') != null){
        clientIds = document.querySelector('.reporting_li_dropdown.active').getAttribute('clientid')
    }
    if(clientIds != ""){
        var c_id = btoa(clientIds)
        var param = { ClientId: c_id.trim()};
        var clid="";
        $.ajax({
            type: 'POST',
            data: param,
            url: 'https://cms.increasingly.com/GetIncreasinglySwitch?ClientId='+c_id+'',
            success: function(data) {
                if(data.SwitchStatus == "Enabled"){
                    if(document.querySelector('#DisableButton span') != null){
                        document.querySelector('#DisableButton span').innerText = "Disable Bundles"
                        document.querySelector('.switch_status_text').innerText = "Bundles are currently ENABLED";
                    }
                }else {
                    if(document.querySelector('#DisableButton span') != null){
                        document.querySelector('#DisableButton span').innerText = "Enable bundles"
                        document.querySelector('.switch_status_text').innerText = "Bundles are currently DISABLED";
                    }
                }
            },
            error: function(request, status, error) {
                
            }
        });
    }
}
INC.methods.get_enable_disable_api = function(status_pass) {
    var flag_client=false
    var clientIds = ""
    if(localStorage.getItem('client_details') != undefined){
        var client_api_id = localStorage.getItem('client_details')
        var client_id = client_api_id.split('-')[1]
        if(client_id != undefined){
            if(document.querySelector('.reporting_li_dropdown[clientid="'+client_id+'"]') != null){
                clientIds = client_id
            }
        }
    }
    var usern_ = ""
    if(clientIds == "" && document.querySelector('.reporting_li_dropdown.active') != null){
        clientIds = document.querySelector('.reporting_li_dropdown.active').getAttribute('clientid')
        usern_ = document.querySelector('.reporting_li_dropdown.active').getAttribute('userm')
    }
    close_modal_()
    if(clientIds != ""){
        var c_id = btoa(clientIds)
        var email_l= atob(usern_)
        if(status_pass == "enable"){
            var status = btoa('enable')
            var email_id = localStorage.getItem('me')
            var param = { ClientId: c_id.trim(),SwitchStatus: status,EmailId: email_id};
        }else{
            var status = btoa('disable')
            var email_id = atob(usern_)
            var email_id = localStorage.getItem('me')
            var param = { ClientId: c_id.trim(),SwitchStatus: status,EmailId: email_id};
        }
        var clid="";
        // if(clientIds == '59'){
        $.ajax({
            type: 'POST',
            data: param,
            url: 'https://cms.increasingly.com/SetIncreasinglySwitch?ClientId='+c_id+'&SwitchStatus='+status+'&EmailId='+email_id+'',
            success: function(data) {
                if(status_pass == 'enable'){
                    if(document.querySelector('#DisableButton span') != null){
                        document.querySelector('#DisableButton span').innerText = "Disable Bundles"
                        document.querySelector('.switch_status_text').innerText = "Bundles are currently ENABLED";
                    }
                }else {
                    if(document.querySelector('#DisableButton span') != null){
                        document.querySelector('#DisableButton span').innerText = "Enable bundles"
                        document.querySelector('.switch_status_text').innerText = "Bundles are currently DISABLED";
                    }
                }
                hideLoader()
            },
            error: function(request, status, error) {
                hideLoader()
            }
        });
        // }else{
        //     hideLoader()
        // }
    }
}
INC.methods.checkfeedupdateprogresh = function() {
    var flag_client=false
    var apikey_ = ""
    var usern_ = ""
    if(apikey_ == "" && document.querySelector('.reporting_li_dropdown.active') != null){
        apikey_ = document.querySelector('.reporting_li_dropdown.active').getAttribute('apikey')
        usern_ = document.querySelector('.reporting_li_dropdown.active').getAttribute('userm')
    }
    var eml=atob(usern_)
    var apik = apikey_.toString()
    var eml_=atob(usern_)
    if(apikey_ != ""){
        var param_ = {"apiKey":apik, "userId": eml_}
        var url_ = 'https://cms.increasingly.com/checkFeedUpdateProgress'
        var xhrr_r = new XMLHttpRequest();
        xhrr_r.open('POST', url_, true);
        xhrr_r.setRequestHeader('content-type', 'application/json');
        xhrr_r.onreadystatechange = function () {
            if (xhrr_r.readyState === XMLHttpRequest.DONE && xhrr_r.status === 200) {
                if(xhrr_r.responseText != ""){
                    var res_=JSON.parse(xhrr_r.responseText)
                    if(res_.Status == "Feed Update process is idle"){
                        INC.methods.updatefeed()
                    }else if (res_.Status == "Feed Update is in progress") {
                        hideLoader()
                    }else{
                        hideLoader()
                    }
                    
                }else{
                    hideLoader()
                }
            }else if(xhrr_r.status === 400){
                hideLoader()
            }
        }
        xhrr_r.send(JSON.stringify(param_));
    }else{
        hideLoader()
    }
}
INC.methods.updatefeed = function() {
    var flag_client=false
    var apikey_ = ""
    document.querySelector('.feedRefresh').classList.remove('failure')
    var usern_ = ""
    if(apikey_ == "" && document.querySelector('.reporting_li_dropdown.active') != null){
        apikey_ = document.querySelector('.reporting_li_dropdown.active').getAttribute('apikey')
        usern_ = document.querySelector('.reporting_li_dropdown.active').getAttribute('userm')
    }
    var eml=atob(usern_)
    var apik = apikey_.toString()
    var eml_= atob(usern_)
    if(apikey_ != ""){
        var param_ = {"apiKey":apik, "userId": eml}
        var url_ = 'https://cms.increasingly.com/FeedUpdate'
        var xhrr_r_ = new XMLHttpRequest();
        xhrr_r_.open('POST', url_, true);
        xhrr_r_.setRequestHeader('content-type', 'application/json');
        xhrr_r_.onreadystatechange = function () {
            if (xhrr_r_.readyState === XMLHttpRequest.DONE && xhrr_r_.status === 200) {
                if(xhrr_r_.responseText != ""){
                    var res_=JSON.parse(xhrr_r_.responseText)
                    hideLoader()
                    if(res_.Status == "Failure"){
                        document.querySelector('.feedRefresh').classList.add('failure')
                        show_modal_("feed_refresh")
                        //modal-msg
                    }else{
                        show_modal_("feed_refresh")
                    }
                }
            }
        }
        xhrr_r_.send(JSON.stringify(param_));
    }
}
setTimeout(function(){
    var sel_clientelm = document.querySelector('.client_list_text')
    sel_clientelm.addEventListener('click', function() {
        var flag_client=false
        if(localStorage.getItem('client_details') != undefined){
            client_api_id = localStorage.getItem('client_details')
            var client_ids = client_api_id.split('-')[1]
            if(client_ids != undefined){
                if(document.querySelector('.reporting_li_dropdown[clientid="'+client_ids+'"]') != null){
                    flag_client = true
                }
            }
        }
        if(flag_client == falseflag){
            INC.methods.removecssfromli()
            this.parentNode.classList.add('active')
        }
        var check_cl_client1 = setInterval(function(){
            if(localStorage.getItem('client_details') != undefined){
                client_api_id = localStorage.getItem('client_details')
                var client_id = client_api_id.split('-')[1]
                if(document.querySelector('.client_list_text').innerText.toLowerCase() == "select client" || document.querySelector('.client_list_text').innerText == "Select Client"){
                    if(client_id != undefined){
                        if(document.querySelector('.incReportTagsList li') != null){
                            document.querySelector('.incReportTagsList li').click()
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
    });
    var reporting_Type = document.querySelectorAll('.incReportTagsList li')
    for(r=0;r<reporting_Type.length;r++){
        reporting_Type[r].addEventListener('click',function(){
            if(pageload == false){
                if(document.querySelector('#loader_block_inc') == null){
                    showLoader()
                }
            }
            if(this.parentNode.querySelector('li.active') != null){
                this.parentNode.querySelector('li.active').classList.remove('active')
            }
            this.classList.add('active')
            if(this.innerText == "Bundle report"){
                document.querySelector('.incReportInfo').style.display="block"
                INC.methods.get_client_details()
            }else{
                document.querySelector('.incReportInfo').style.display="none"
                if(document.querySelector('.incReportsMainBlock.active') == null){
                    document.querySelector('.incButtonPrimary.view-button').click()
                }
            }
            document.querySelector('.incReportBlockTitleText').innerText = this.innerText
            INC.methods.get_rep_snippest()
        })
    }
    var viewdetailrep = document.querySelector('.incButtonPrimary.view-button')
    viewdetailrep.addEventListener('click',function(){
        if(pageload == false){
            if(document.querySelector('#loader_block_inc') == null){
                showLoader()
            }
        }
        document.querySelector('.incReportsMainBlock').classList.add('active')
        INC.methods.get_rep_snippest()
    })
    var backrep = document.querySelector('.back_reporting')
    backrep.addEventListener('click',function(){
        document.querySelector('.incReportsMainBlock').classList.remove('active')
        // document.querySelector('.reporting_snippet').innerHTML = ""
    })
    var inc_ok = document.querySelector('.inc_ok')
    inc_ok.addEventListener('click',function(){
        close_modal_()
    })
    if(document.querySelector('.reporting_li_dropdown.active') != null){
        // document.querySelector('.incReportTagsList li').click()
    }
    if (document.querySelector('#DisableButton') != null){
        var enableButton = document.querySelector('#DisableButton')
        enableButton.addEventListener("click", function (e) {
            var btneltext=this.innerText
            if(btneltext == 'Disable Bundles'){
                show_modal_('disable_bundle')
            }else{
                if(document.querySelector('#loader_block_inc') == null){
                    showLoader()
                }
                INC.methods.get_enable_disable_api('enable')
            }
        });
        var continue_disable = document.querySelector('.continue_disable')
        continue_disable.addEventListener("click", function (e) {
            if(document.querySelector('#loader_block_inc') == null){
                showLoader()
            }
            INC.methods.get_enable_disable_api('disable')
        })
        var no_thanks_btn = document.querySelector('.no_thanks_button')
        no_thanks_btn.addEventListener("click", function (e) {
            close_modal_()
        })
    }   
    var seldate=document.querySelector('.viewReport .dropdown-two') 
    seldate.addEventListener("change", function(){
        INC.methods.get_client_details()
    })
    
    var val_ ="0"
    document.querySelector('.grosssale').innerText = formatter.format(val_)
    document.querySelector('.saleimpact').innerText = formatter.format(val_)
    document.querySelector('.returninvestment').innerText = val_//+"%"
    document.querySelector('.prodbuplift').innerText = val_+"%"
    document.querySelector('.bundlecovrage').innerText =val_+"%"
    setTimeout(function(){
        INC.methods.get_bundle_status()
    },500)
    if (document.querySelector('#RefreshButton') != null){
        var feedRefresh = document.querySelector('#RefreshButton');
        feedRefresh.addEventListener("click", function (e) {
            if(document.querySelector('#loader_block_inc') == null){
                showLoader()
                INC.methods.checkfeedupdateprogresh()
            }
        });
    }
    if(document.querySelector('.reporting_li_dropdown.active') != null){
        var cl_region = document.querySelector('.reporting_li_dropdown.active').getAttribute('region')
        var cl_nme = document.querySelector('.reporting_li_dropdown.active').getAttribute('fnm')
        if(cl_nme == "Avon CZ MAB"){
            cl_region = "CZ"
        }else if(cl_nme == "Avon Slovakia"){
            cl_region = "EUR"
        }else if(cl_nme == "BalsamBrands_AU"){
            cl_region = "US"
        }else if(cl_nme == "Albeka"){
            cl_region = "EUR"
        }else if(cl_nme.indexOf('Games Workshop') >= 0){
            cl_region = "UK"
        }else if(cl_nme.indexOf('Denby CA') >= 0){
            cl_region = "US"
        }
        //region="JP"
        currency_check(cl_region)
    }
},500)
function close_modal_(){
    document.querySelector('.overlay').classList.remove('active')
    document.querySelector('.feedRefresh').classList.remove('hide')
    document.querySelector('.disableBundle').classList.remove('hide')
    document.querySelector('.modal').classList.remove('active')
}
function show_modal_(type_action){
    document.querySelector('.overlay').classList.add('active')
    if(type_action == "feed_refresh"){
        document.querySelector('.disableBundle').classList.add('hide')
    }else{
        document.querySelector('.feedRefresh').classList.add('hide')
    }
    document.querySelector('.modal').classList.add('active')
}
document.onclick = clickListener;

function clickListener(e) {
    var clickedElement = (window.event) ?
    window.event.srcElement :
    e.target
    if (clickedElement.classList.contains('active') == true){
        // clickedElement.classList.remove('active');
        document.querySelector('html').classList.remove('inc_overlay');
    }
    if(clickedElement.classList.contains('reporting_li_dropdown') == true){
        if(clickedElement.querySelector('.size_input') == null){ 
            if(document.querySelector('#loader_block_inc') == null){
                showLoader()
            }
            if(document.querySelector('.incReportsMainBlock') != null){
                document.querySelector('.incReportsMainBlock').classList.remove('active')
            }
            if(document.querySelector('.incReportsMainBlock.active') == null && document.querySelector('.incReportTagsList li.active').innerText != 'Bundle report'){
                document.querySelector('.incButtonPrimary.view-button').click()
            }
            INC.methods.get_client_details()
            INC.methods.get_rep_snippest()
            INC.methods.get_bundle_status()
        }
    }
    if(clickedElement.className == 'overlay active'){
        close_modal_()
    }
    if(clickedElement.className != "client_list_text" && clickedElement.className != "size_input_div" && clickedElement.className != "size_input"){
        if(clickedElement.querySelector('.size_input') == null || clickedElement.tagName == 'HEADER'){ 
            document.querySelector('.get_allclient_list').classList.remove('active')
        }
    }
}

function currency_check(curr_c){
    if(curr_c == "UK" || curr_c == "INT"){
        currency_c="en-GB"
        currency_inc="GBP"
    }else if(curr_c == "US" || curr_c == "AUS" || curr_c == "CAD"){
        currency_c="en-US"
        currency_inc="USD"
    }else if(curr_c == "CZ"){
        currency_c="cs-CZ"
        currency_inc="CZK"
    }else if(curr_c == "EUR" || curr_c == "DE" || curr_c == "FR"){
        currency_c="de-DE"
        currency_inc="EUR"
    }else if(curr_c == "PL" || curr_c == "Poland"){
        currency_c="pl-PL"
        currency_inc="PLN"
    }else if(curr_c == "JP"){
        currency_c="ja-JP"
        currency_inc="JPY"
    }else if(curr_c == "Bulgaria"){
        currency_c="cs-BG"
        currency_inc="BGN"
    }else if(curr_c == "Avon Hungary MAB"){
        currency_c="cs-BG"
        currency_inc="BGN"
    }else if(curr_c == "Hungary"){
        currency_c="hu-HU"
        currency_inc="HUF"
    }else if(curr_c == "Romania"){
        currency_c="ro-RO"
        currency_inc="Lei"
    }
    formatter = new Intl.NumberFormat(currency_c, {
        style: 'currency',
        currency: currency_inc,
    });
}
function check_currency_symb(a) {
    if(currency_inc == "HUF"){
        return a.toLocaleString('hu-HU', {
            style: 'currency',
            currency: 'HUF',
            minimumFractionDigits: 0
        });
    }else if(currency_inc == "BGN"){
        return a.toLocaleString('cs-BG', {
            style: 'currency',
            currency: 'BGN',
            minimumFractionDigits: 2
        }).replace('BGN','').trim().replace('лв.','') + " лв."
    }else if(currency_inc == "Lei"){
        return a.toLocaleString('ro-RO', {
            style: 'currency',
            currency: 'Lei',
            symbolPosition: 'end',
            minimumFractionDigits: 2,
            currencyDisplay: 'name',
        }).replace('LEI','Lei').replaceAll('.','*').replace(',','.').replaceAll('*',',').replaceAll('de','');
    }
}
function getlastmonthdate(date_d){
    const pastday = [...Array(date_d).keys()].map(index => {
      const date = new Date();
      date.setDate(date.getDate() - (index + 1));
      return date;
    });
    return pastday[pastday.length-1];
}
function convert(str) {
  var date = new Date(str),
    mnth = ("0" + (date.getMonth() + 1)).slice(-2),
    day = ("0" + date.getDate()).slice(-2);
  return [date.getFullYear(), mnth, day].join("-");
}
setTimeout(function(){
    pageload = false
},2000)

