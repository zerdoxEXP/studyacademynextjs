import React from 'react';
import LightLogo from './LightLogo';
import DarkLogo from './DarkLogo';

const ConsentPopup = ({ onConsent, onDeny }) => {
  return (
    <div className="fixed inset-0 z-50 bg-white dark:bg-black bg-opacity-50 dark:bg-opacity-50 flex justify-center items-center p-4">
      <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow-xl max-w-lg w-full">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg dark:text-white font-semibold">Cookie Einstellungen</h2>
            <div className="dark:hidden">
          <LightLogo className="w-28 h-4" />
         </div>
          <div className="hidden dark:block">
          <DarkLogo className=" w-28 h-4" />
          </div>
        </div>
        {/* Scrollbereich für den Text */}
        <div className="max-h-64 overflow-auto mb-4 text-gray-700 dark:text-gray-300">
          <p className="text-sm">
          Um Ihnen ein optimales Erlebnis auf unserer Seite zu bieten, verwenden wir Cookies und ähnliche Technologien. Diese helfen uns dabei, unsere Webseite zu verbessern und die Effektivität unserer Online-Marketingkampagnen zu messen.
          </p>
          <p className="text-sm mt-2">
          Ihre Privatsphäre ist uns wichtig, deswegen verwenden wir folgende Technologien nur mit Ihrer Zustimmung. Google Tag Manager zur Verwaltung und Implementierung von Tags auf unserer Webseite. Google Analytics zur Analyse des Webseitenverkehrs und des Nutzerverhaltens. Google Ads und Google Ads Remarketing um Ihnen auf Ihre Interessen abgestimmte Werbung zu präsentieren. Google Conversion-Tracking zur Messung der Leistung unserer Werbekampagnen und Microsoft Clarity für Einblicke in die Nutzererfahrung auf unserer Webseite.
          </p>
          <p className="text-sm mt-2">
          Sie können Ihre Einwilligung jederzeit widerrufen, den entsprechenden Link dazu finden Sie im Footer unter &quot;Cookies widerrufen&quot;. Mehr Informationen zum Datenschutz finden Sie in unserer Datenschutzerklärung.
          </p>
          <div className="flex justify-between items-center my-4">
          <p className="text-xs">Weitere Informationen:</p>
          <a href="/impressum" className="text-blue-600 hover:underline text-xs">Impressum</a>
          <a href="/datenschutz" className="text-blue-600 hover:underline text-xs">Datenschutzerklärung</a>
        </div>
        </div>
        <div className="flex justify-end items-center">
          <button onClick={onDeny} className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 mr-2 rounded">
            Ablehnen
          </button>
          <button onClick={onConsent} className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded">
            Zustimmen und schließen
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConsentPopup;