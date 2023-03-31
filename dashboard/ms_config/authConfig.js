const msalConfig = {
    auth: {
      clientId: "3e1dbae7-cada-42bd-9276-27962a5b9467",
      authority: "https://login.microsoftonline.com/common/",
      redirectUri: "https://app.increasingly.com/dashboard.html",
    },
    cache: {
      cacheLocation: "sessionStorage", // This configures where your cache will be stored
      storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
    }
  };

  // Add here scopes for id token to be used at MS Identity Platform endpoints.
  const loginRequest = {
    scopes: ["openid", "profile", "User.Read"]
  };

  // Add here scopes for access token to be used at MS Graph API endpoints.
  const tokenRequest = {
    scopes: ["Mail.Read"]
  };