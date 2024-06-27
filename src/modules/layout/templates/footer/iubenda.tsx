"use client";  // Questa direttiva dichiara il componente come Client Component

import { useEffect } from 'react';

const IubendaLinks = () => {
  useEffect(() => {
    const loader = () => {
      const s = document.createElement("script");
      s.src = "https://cdn.iubenda.com/iubenda.js";
      const tag = document.getElementsByTagName("script")[0];
      
      if (tag && tag.parentNode) {
        tag.parentNode.insertBefore(s, tag);
      } else {
        document.body.appendChild(s);  // In caso non ci siano tag script, aggiungiamo lo script al body
      }
    };

    if (window.addEventListener) {
      window.addEventListener("load", loader, false);
    } else {
      window.onload = loader;
    }
  }, []);

  return (
    <>
      <a href="https://www.iubenda.com/privacy-policy/64244273" className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe" title="Privacy Policy">
        Privacy Policy
      </a>
      <a href="https://www.iubenda.com/privacy-policy/64244273/cookie-policy" className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe" title="Cookie Policy">
        Cookie Policy
      </a>
      <a href="https://www.iubenda.com/termini-e-condizioni/64244273" className="iubenda-white iubenda-noiframe iubenda-embed iubenda-noiframe" title="Termini e Condizioni">
        Termini e Condizioni
      </a>
    </>
  );
};

export default IubendaLinks;
