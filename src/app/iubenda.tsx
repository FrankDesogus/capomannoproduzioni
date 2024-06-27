"use client";

import { useEffect } from 'react';

const IubendaScripts = () => {
  useEffect(() => {
    const loader = () => {
      // Definisci la configurazione di _iub prima di caricare gli script
      const iubScriptConfig = document.createElement('script');
      iubScriptConfig.innerHTML = `
        var _iub = _iub || [];
        _iub.csConfiguration = {
          askConsentAtCookiePolicyUpdate: true,
          floatingPreferencesButtonDisplay: 'bottom-right',
          perPurposeConsent: true,
          siteId: 3680591,
          whitelabel: false,
          cookiePolicyId: 64244273,
          lang: 'it',
          banner: {
            acceptButtonDisplay: true,
            closeButtonRejects: true,
            customizeButtonDisplay: true,
            explicitWithdrawal: true,
            listPurposes: true,
            position: 'float-top-center',
            showTitle: false
          }
        };
      `;
      document.body.appendChild(iubScriptConfig);

      // Carica gli script di iubenda
      const iubScript = document.createElement('script');
      iubScript.src = '//cdn.iubenda.com/cs/iubenda_cs.js';
      iubScript.charset = 'UTF-8';
      iubScript.async = true;
      document.body.appendChild(iubScript);
      
      const iubAutoblocking = document.createElement('script');
      iubAutoblocking.src = 'https://cs.iubenda.com/autoblocking/3680591.js';
      iubAutoblocking.async = true;
      document.body.appendChild(iubAutoblocking);
    };

    if (document.readyState === 'complete') {
      loader();
    } else {
      window.addEventListener('load', loader);
    }

    return () => {
      window.removeEventListener('load', loader);
    };
  }, []);

  return null; // Non rende nulla
};

export default IubendaScripts;
