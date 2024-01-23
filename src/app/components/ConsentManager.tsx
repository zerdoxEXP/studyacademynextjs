'use client';

import React, { useState, useEffect } from 'react';
import ConsentPopup from './ConsentPopup';
import { sendGTMEvent, GoogleTagManager } from '@next/third-parties/google';

const ConsentManager: React.FC = () => {
    const [consentGiven, setConsentGiven] = useState(false);
    const [showPopup, setShowPopup] = useState(false);

    useEffect(() => {
        const consent = localStorage.getItem('userConsent');
        if (consent === 'true') {
            setConsentGiven(true);
        } else {
            setTimeout(() => setShowPopup(true), 1000);
        }
    }, []);

    const handleConsent = () => {
        localStorage.setItem('userConsent', 'true');
        setConsentGiven(true);
        setShowPopup(false);
        
        // Sendet ein benutzerdefiniertes Ereignis an GTM
        sendGTMEvent({ event: 'consentGiven' });
    };

    const handleDeny = () => {
        localStorage.setItem('userConsent', 'false');
        setShowPopup(false);
    };

    return (
        <>
            {showPopup && !consentGiven && <ConsentPopup onConsent={handleConsent} onDeny={handleDeny} />}
            {consentGiven && <GoogleTagManager gtmId="GTM-WMTK3V3" />}
        </>
    );
};

export default ConsentManager;

