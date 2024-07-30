"use client";

import React, { useEffect, useState } from 'react';
import CookieConsent from 'react-cookie-consent';

import styles from '@/styles/modules/utils/cookieAccept.module.css'

const CookieAccept = () => {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
}, []);

  return (
    <>
      {loading &&
        <CookieConsent
          enableDeclineButton
          location="bottom"
          cookieName="Aceite de termos de cookies"
          declineButtonText="Não aceito"
          buttonText="Aceito"
          style={{ background: 'white' }}
          expires={365}
          containerClasses={styles.cookieConsent}
          buttonClasses={`${styles.buttonClasses} btn btn-primary`}
          declineButtonClasses={`${styles.buttonDecline} btn btn-outline-primary`}
          contentClasses={styles.contentClasses}
        >
          <h5 className={styles.h5}>Nós usamos cookies</h5>
          <p className={`${styles.p} m-0`}>Ao utilizar nosso site, você pode ou não consentir com o armazenamento dos seus dados de navegação. Os cookies nos ajudam a entender como você e demais usuários interagem com o nosso conteúdo, e com isso oferecermos a melhor experiência em nosso site.</p>
        </CookieConsent>
        }
    </>
  );
};

export default CookieAccept;