"use client";

import React from "react";
import Script from "next/script";
import Head from "next/head";

export default function ClientOnlyComponents() {
  return (
    <>
      <Head>
      <a
        href="https://www.iubenda.com/termini-e-condizioni/64244273"
        className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe"
        title="Termini e Condizioni"
      >
        Termini e Condizioni
      </a>
      <a
        href="https://www.iubenda.com/privacy-policy/64244273/cookie-policy"
        className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe"
        title="Cookie Policy"
      >
        Cookie Policy
      </a>
        <link
          href="https://www.iubenda.com/privacy-policy/64244273"
          className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe"
          title="Privacy Policy"
          rel="nofollow"
        />
      </Head>
      <Script
        src="https://cdn.iubenda.com/iubenda.js"
        strategy="afterInteractive"
      />
            <Script
        id="iubenda-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function (w,d) {
            var loader = function () {
              var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];
              s.src="https://cdn.iubenda.com/iubenda.js";
              tag.parentNode.insertBefore(s,tag);
            };
            if(w.addEventListener){w.addEventListener("load", loader, false);}
            else if(w.attachEvent){w.attachEvent("onload", loader);}
            else{w.onload = loader;}
          })(window, document);`,
        }}
      />
       <Script
        id="iubenda-terms-script"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `(function (w,d) {
            var loader = function () {
              var s = d.createElement("script"), tag = d.getElementsByTagName("script")[0];
              s.src="https://cdn.iubenda.com/iubenda.js";
              tag.parentNode.insertBefore(s,tag);
            };
            if(w.addEventListener){w.addEventListener("load", loader, false);}
            else if(w.attachEvent){w.attachEvent("onload", loader);}
            else{w.onload = loader;}
          })(window, document);`,
        }}
      />
            <Script
        id="iubenda-config-script"
        type="text/javascript"
        dangerouslySetInnerHTML={{
          __html: `
            var _iub = _iub || [];
            _iub.csConfiguration = {
              "askConsentAtCookiePolicyUpdate": true,
              "floatingPreferencesButtonDisplay": "bottom-right",
              "perPurposeConsent": true,
              "siteId": 3680591,
              "whitelabel": false,
              "cookiePolicyId": 64244273,
              "lang": "it",
              "banner": {
                "acceptButtonDisplay": true,
                "closeButtonRejects": true,
                "customizeButtonDisplay": true,
                "explicitWithdrawal": true,
                "listPurposes": true,
                "position": "float-top-center",
                "showTitle": false
              }
            };
          `,
        }}
      />
      <Script
        src="https://cs.iubenda.com/autoblocking/3680591.js"
        strategy="afterInteractive"
        type="text/javascript"
      />
      <Script
        src="//cdn.iubenda.com/cs/iubenda_cs.js"
        strategy="afterInteractive"
        type="text/javascript"
        charSet="UTF-8"
        async
      />
    </>
  );
}
