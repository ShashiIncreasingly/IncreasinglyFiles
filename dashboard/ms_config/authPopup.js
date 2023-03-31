const myMSALObj = new Msal.UserAgentApplication(msalConfig);

function ms_signIn() {
  myMSALObj.loginPopup(loginRequest)
    .then(loginResponse => {
      console.log('id_token acquired at: ' + new Date().toString());
      console.log(loginResponse);

      if (myMSALObj.getAccount()) {
        var ms_usr=myMSALObj.getAccount()
        var logn=ms_usr.userName
        if(document.querySelector('#loader_block_inc') == null){
            showLoader()
        }
        var usreml = logn
        localStorage.setItem('me',btoa(usreml))
        var param_1 = {"emailId":btoa(usreml)}
        var xhr__ = new XMLHttpRequest();
        xhr__.open('POST', 'https://cms.increasingly.com/Login?emailId='+btoa(usreml)+'', true);
        xhr__.setRequestHeader('content-type', 'application/json');
        xhr__.onload = function () { }
        xhr__.onerror = function () {
          hideLoader()
          console.log("error")
        };
        xhr__.getResponseHeader('Set-Cookie');
        xhr__.onreadystatechange = function () {
          if (xhr__.readyState === XMLHttpRequest.DONE && xhr__.status === 200) {
            if(xhr__.responseText != ""){
              var result = JSON.parse(xhr__.responseText)
              if(result.Status == "Success"){
                localStorage.setItem('login_type','user_password')
                localStorage.setItem('client_details',result.ApiKeyClientId)
                localStorage.setItem('client_domain',result.DomainName)
                localStorage.setItem('sessionExpire','false')
                localStorage.setItem('lotype','ms')
                hideLoader()
                window.location.href='https://app.increasingly.com/dashboard.html';
              }else{
                hideLoader()
                alert("Invalid User")
              }
            }
          }else if(xhr__.status == 401){
            if (xhr__.readyState === XMLHttpRequest.DONE) {
              if(xhr__.responseText != ""){
                var result = JSON.parse(xhr__.responseText)
                if(result.Status != "Success"){
                  hideLoader()
                  alert("Invalid User")
                }
              }
            }
          }
        }
        xhr__.send(JSON.stringify(param_1));
        showWelcomeMessage(myMSALObj.getAccount());
      }
    }).catch(error => {
      console.log(error);
    });
}

function signOut() {
  myMSALObj.logout();
}

function callMSGraph(theUrl, accessToken, callback) {
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
           callback(JSON.parse(this.responseText));
        }
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.setRequestHeader('Authorization', 'Bearer ' + accessToken);
    xmlHttp.send();
}

function getTokenPopup(request) {
  return myMSALObj.acquireTokenSilent(request)
    .catch(error => {
      console.log(error);
      console.log("silent token acquisition fails. acquiring token using popup");

      // fallback to interaction when silent call fails
        return myMSALObj.acquireTokenPopup(request)
          .then(tokenResponse => {
            return tokenResponse;
          }).catch(error => {
            console.log(error);
          });
    });
}

function seeProfile() {
  if (myMSALObj.getAccount()) {
    getTokenPopup(loginRequest)
      .then(response => {
        callMSGraph(graphConfig.graphMeEndpoint, response.accessToken, updateUI);
        profileButton.classList.add('d-none');
        mailButton.classList.remove('d-none');
      }).catch(error => {
        console.log(error);
      });
  }
}

function readMail() {
  if (myMSALObj.getAccount()) {
    getTokenPopup(tokenRequest)
      .then(response => {
        callMSGraph(graphConfig.graphMailEndpoint, response.accessToken, updateUI);
      }).catch(error => {
        console.log(error);
      });
  }
}