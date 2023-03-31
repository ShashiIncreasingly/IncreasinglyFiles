// /* eslint-disable no-inner-declarations */
// try{ 
//     function generateRandomString(bits1) {
//         return (crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295).toString(bits1).substring(2, 15) + (crypto.getRandomValues(new Uint32Array(1))[0] / 4294967295).toString(bits1).substring(2, 15);
//     }
    
//     function getVisitorId() {
//         function generateUniqueINCVisitorId(len, bits) {
//             var bits1 = bits || 36;
//             var outStr = "";
//             var newStr;
//             while (outStr.length < len) {
//                 newStr = generateRandomString(bits1).toString().slice(2);
//                 outStr += newStr.slice(0, Math.min(newStr.length, (len - outStr.length)));
//             }
//             return outStr;
//         }
//         var clientdomain = window.location.host
//         var arr = clientdomain.split(".");
//         var d = new Date();
//         var expires = "expires=" + d.toUTCString();
//         var ivid = "";
//         if(readCookie('ivid') != undefined){
//             ivid = readCookie('ivid')
//         }
//         if (ivid.length == 0) {
//             ivid = generateUniqueINCVisitorId(42, 16);
//             arr.shift();
//             clientdomain = arr.join(".");
//             if(arr == 'com' || window.location.host.indexOf('www') == -1){
//                 clientdomain = window.location.host;
//             }
//             d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
//             expires = "expires=" + d.toUTCString();
//             document.cookie = 'ivid=' + ivid + '; expires=' + expires + '; domain=' + clientdomain + '; path=/' + '; secure;'
//         }else{
//             arr.shift();
//             clientdomain = arr.join(".");
//             if(arr == 'com' || window.location.host.indexOf('www') == -1){
//                 clientdomain = window.location.host;
//             }
//             d.setTime(d.getTime() + (365 * 24 * 60 * 60 * 1000));
//             expires = "expires=" + d.toUTCString();
//             document.cookie = 'ivid=' + ivid + '; expires=' + expires + '; domain=' + clientdomain + '; path=/' + '; secure;'
//         }
//         return ivid;
//     }
//     getVisitorId()
    
//     function readCookie(name) {
//         var nameEQ = name + "=";
//         var ca = document.cookie.split(';');
//         for (var s of ca) {
//             var c = s;
//             while (c.charAt(0) == ' ') c = c.substring(1, c.length);
//             if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
//         }
//         return null;
//     }
//     if (readCookie('ivid') != null) {
//         var cook_ids = readCookie("ivid");
//         localStorage.setItem('inc_cookie', cook_ids);
//     }
//     if (navigator.userAgent.search("Safari") >= 0 && navigator.userAgent.search("Chrome") < 0) {
         
//         if(window.innerWidth < 1367 && window.innerWidth > 600){
//             document.querySelector('body').classList.add('safari_browser')       
//         } else if(window.innerWidth > 1367){
//             document.querySelector('body').classList.add('safari_browser_inc')
//         }    
//     }
//     var cssfileload=false
//     var enableInc = false
//     function checkpagetype(){
//         if (document.querySelector('#str_contents #form2cart') != null){
//             cssfileload = true;enableInc = true
//         }
//         if(document.querySelector('.main-content #form2cart') != null){
//             cssfileload = true;enableInc = true
//         }
//         if(document.querySelector('.main-content #form2cart') != null){
//             cssfileload = true;enableInc = true
//         }
//     }
//     checkpagetype()
//     if (window.location.host == "shop.golfdigest.co.jp" && enableInc == true){
//         checkpagetype()
//         if(window.location.href.indexOf('dmg_0000663040') >= 0 || window.location.href.indexOf('dmg_0000658949') >= 0 || window.location.href.indexOf('dmg_0000613914') >= 0 || window.location.href.indexOf('dmg_0000648098') >= 0 || window.location.href.indexOf('dmg_0000523053') >= 0 || window.location.href.indexOf('dmg_0000676789') >= 0 || window.location.href.indexOf('dmg_0000663040') >= 0 || window.location.href.indexOf('dmg_0000692230') >= 0 || window.location.href.indexOf('dmg_0000634019') >= 0 || window.location.href.indexOf('dmg_0000683798') >= 0 || window.location.href.indexOf('dmg_0000667280') >= 0 || window.location.href.indexOf('dmg_0000633192') >= 0 || window.location.href.indexOf('dmg_0000617158') >= 0 || window.location.href.indexOf('dmg_5001974862') >= 0 || window.location.href.indexOf('dmg_0000684007') >= 0){
//             if(cssfileload == true){
//                 function addCSSFile() {
//                     var cssFilePath = "https://jp.increasingly.co/Implementation/gD9Jp_N/css/gD9Jp.css?v="
//                     var linkTag = document.createElement('link');
//                     linkTag.rel = "stylesheet";
//                     linkTag.href = cssFilePath;
//                     document.querySelector('head').appendChild(linkTag);
//                 }
//                 addCSSFile()
//                 var jsFilePath = "https://jp.increasingly.co/Implementation/gD9Jp_N/js/gD9Jp.js?v=1.0"
//                 var scriptTag = document.createElement('script');
//                 scriptTag.type = 'text/javascript';
//                 scriptTag.src = jsFilePath;
//                 document.querySelector('body').appendChild(scriptTag);
//             }
//         }
//     }
// }

// catch (err) {
//     var formData = new FormData();
//     formData.append("EmailId", "nitish@increasingly.com");
//     formData.append("Subject", 'JS Error on GDO');
//     formData.append("Message", err + 'Error Stack' + err.stack);
//     var xhr = new XMLHttpRequest();
//     xhr.open("POST", '//api.increasingly.co/SendEmail', true);
//     xhr.send(formData);
// }


 

