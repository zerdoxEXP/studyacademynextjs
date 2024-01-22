'use client'

import { CheckCircleIcon, InformationCircleIcon } from '@heroicons/react/20/solid'
import React from 'react';

const handleWithdrawConsent = () => {
  localStorage.removeItem('userConsent');
  alert('Ihre Zustimmung wurde widerrufen.');
};


export default function Datenschutz() {
  return (
<section>
    <div className="px-6 py-32 lg:px-8">
      <div className="mx-auto max-w-3xl text-base leading-7 text-gray-700">
        <h1 className="text-3xl sm:text-5xl font-caveat text-blue-600">Datenschutzerklärung</h1>
        <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">1. Datenschutz auf einen Blick</h2>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Allgemeine Hinweise</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit denen Sie persönlich identifiziert werden können. Ausführliche Informationen zum Thema Datenschutz entnehmen Sie unserer unter diesem Text aufgeführten Datenschutzerklärung.
        </p>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Datenerfassung auf dieser Website</h3>
        <h4 className="mt-6 text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">Wer ist verantwortlich für die Datenerfassung auf dieser Website?</h4>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten können Sie dem Abschnitt „Hinweis zur Verantwortlichen Stelle“ in dieser Datenschutzerklärung entnehmen.
        </p>
        <h4 className="mt-6 text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">Wie erfassen wir Ihre Daten?</h4>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich z. B. um Daten handeln, die Sie in ein Kontaktformular eingeben.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Andere Daten werden automatisch oder nach Ihrer Einwilligung beim Besuch der Website durch unsere ITSysteme erfasst. Das sind vor allem technische Daten (z. B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs). Die Erfassung dieser Daten erfolgt automatisch, sobald Sie diese Website betreten.
        </p>
        <h4 className="mt-6 text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">Wofür nutzen wir Ihre Daten?</h4>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
        </p>
        <h4 className="mt-6 text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">Welche Rechte haben Sie bezüglich Ihrer Daten?</h4>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck Ihrer
        gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die Berichtigung oder
        Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur Datenverarbeitung erteilt haben,
        können Sie diese Einwilligung jederzeit für die Zukunft widerrufen. Außerdem haben Sie das Recht, unter
        bestimmten Umständen die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
        Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
        Hierzu sowie zu weiteren Fragen zum Thema Datenschutz können Sie sich jederzeit an uns wenden.
        </p>
        <h4 className="mt-6 text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">Analyse-Tools und Tools von Dritt­anbietern</h4>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Beim Besuch dieser Website kann Ihr Surf-Verhalten statistisch ausgewertet werden. Das geschieht vor allem mit sogenannten Analyseprogrammen.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Detaillierte Informationen zu diesen Analyseprogrammen finden Sie in der folgenden Datenschutzerklärung.
        </p>
        <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">2. Hosting</h2>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Wir hosten die Inhalte unserer Website bei folgendem Anbieter:
        </p>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Externes Hosting</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Diese Website wird extern gehostet. Die personenbezogenen Daten, die auf dieser Website erfasst werden,
        werden auf den Servern des Hosters / der Hoster gespeichert. Hierbei kann es sich v. a. um IP-Adressen,
        Kontaktanfragen, Meta- und Kommunikationsdaten, Vertragsdaten, Kontaktdaten, Namen, Websitezugriffe
        und sonstige Daten, die über eine Website generiert werden, handeln.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Das externe Hosting erfolgt zum Zwecke der Vertragserfüllung gegenüber unseren potenziellen und
        bestehenden Kunden (Art. 6 Abs. 1 lit. b DSGVO) und im Interesse einer sicheren, schnellen und effizienten
        Bereitstellung unseres Online-Angebots durch einen professionellen Anbieter (Art. 6 Abs. 1 lit. f DSGVO).
        Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung
        von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im
        Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Unser(e) Hoster wird bzw. werden Ihre Daten nur insoweit verarbeiten, wie dies zur Erfüllung seiner
        Leistungspflichten erforderlich ist und unsere Weisungen in Bezug auf diese Daten befolgen.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Wir setzen folgende(n) Hoster ein:
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Vercel Inc.<br/>
        440 N Barranca Ave #4133<br/>
        Covina, CA 91723
        </p>
        <h4 className="mt-6 text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">Auftragsverarbeitung</h4>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes
        geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der
        gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren
        Weisungen und unter Einhaltung der DSGVO verarbeitet.
        </p>
        <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">3. Allgemeine Hinweise und Pflichtinformationen</h2>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Datenschutz</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Die Betreiber dieser Seiten nehmen den Schutz Ihrer persönlichen Daten sehr ernst. Wir behandeln Ihre
        personenbezogenen Daten vertraulich und entsprechend den gesetzlichen Datenschutzvorschriften sowie
        dieser Datenschutzerklärung.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Wenn Sie diese Website benutzen, werden verschiedene personenbezogene Daten erhoben.
        Personenbezogene Daten sind Daten, mit denen Sie persönlich identifiziert werden können. Die vorliegende
        Datenschutzerklärung erläutert, welche Daten wir erheben und wofür wir sie nutzen. Sie erläutert auch, wie
        und zu welchem Zweck das geschieht.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Wir weisen darauf hin, dass die Datenübertragung im Internet (z. B. bei der Kommunikation per E-Mail)
        Sicherheitslücken aufweisen kann. Ein lückenloser Schutz der Daten vor dem Zugriff durch Dritte ist nicht
        möglich.
        </p>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Hinweis zur verantwortlichen Stelle</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Die verantwortliche Stelle für die Datenverarbeitung auf dieser Website ist:
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Zerdox Experience UG (haftungsbeschränkt)<br/>
        Leiblstr. 5<br/>
        67136 Fußgönheim
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Telefon: 06237 – 97 65 630<br/>
        E-Mail: kontakt@zerdox.de
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Verantwortliche Stelle ist die natürliche oder juristische Person, die allein oder gemeinsam mit anderen über
        die Zwecke und Mittel der Verarbeitung von personenbezogenen Daten (z. B. Namen, E-Mail-Adressen o. Ä.)
        entscheidet.
        </p>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Speicherdauer</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, verbleiben
        Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung entfällt. Wenn Sie ein
        berechtigtes Löschersuchen geltend machen oder eine Einwilligung zur Datenverarbeitung widerrufen,
        werden Ihre Daten gelöscht, sofern wir keine anderen rechtlich zulässigen Gründe für die Speicherung Ihrer
        personenbezogenen Daten haben (z. B. steuer- oder handelsrechtliche Aufbewahrungsfristen); im
        letztgenannten Fall erfolgt die Löschung nach Fortfall dieser Gründe.
        </p>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Allgemeine Hinweise zu den Rechtsgrundlagen der Datenverarbeitung auf dieser Website</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Sofern Sie in die Datenverarbeitung eingewilligt haben, verarbeiten wir Ihre personenbezogenen Daten auf
        Grundlage von Art. 6 Abs. 1 lit. a DSGVO bzw. Art. 9 Abs. 2 lit. a DSGVO, sofern besondere Datenkategorien
        nach Art. 9 Abs. 1 DSGVO verarbeitet werden. Im Falle einer ausdrücklichen Einwilligung in die Übertragung
        personenbezogener Daten in Drittstaaten erfolgt die Datenverarbeitung außerdem auf Grundlage von Art.
        49 Abs. 1 lit. a DSGVO. Sofern Sie in die Speicherung von Cookies oder in den Zugriff auf Informationen in
        Ihr Endgerät (z. B. via Device-Fingerprinting) eingewilligt haben, erfolgt die Datenverarbeitung zusätzlich
        auf Grundlage von § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Sind Ihre Daten zur
        Vertragserfüllung oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, verarbeiten wir Ihre
        Daten auf Grundlage des Art. 6 Abs. 1 lit. b DSGVO. Des Weiteren verarbeiten wir Ihre Daten, sofern diese
        zur Erfüllung einer rechtlichen Verpflichtung erforderlich sind auf Grundlage von Art. 6 Abs. 1 lit. c DSGVO.
        Die Datenverarbeitung kann ferner auf Grundlage unseres berechtigten Interesses nach Art. 6 Abs. 1 lit. f
        DSGVO erfolgen. Über die jeweils im Einzelfall einschlägigen Rechtsgrundlagen wird in den folgenden
        Absätzen dieser Datenschutzerklärung informiert.
        </p>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Datenschutzbeauftragter</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Wir haben einen Datenschutzbeauftragten benannt.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Andreas Keller<br/>
        Zerdox Experience UG (haftungsbeschränkt)<br/>
        Leiblstr. 5<br/>
        67136 Fußgönheim
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Telefon: 06237 – 97 65 630<br/>
        E-Mail: kontakt@zerdox.de
        </p>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Hinweis zur Datenweitergabe in datenschutzrechtlich nicht sichere Drittstaaten sowie die Weitergabe an US-Unternehmen, die nicht DPF-zertifiziert sind</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Wir verwenden unter anderem Tools von Unternehmen mit Sitz in datenschutzrechtlich nicht sicheren Drittstaaten sowie US-Tools, deren Anbieter nicht nach dem EU-US-Data Privacy Framework (DPF) zertifiziert sind. Wenn diese Tools aktiv sind, können Ihre personenbezogene Daten in diese Staaten übertragen und dort verarbeitet werden. Wir weisen darauf hin, dass in datenschutzrechtlich unsicheren Drittstaaten kein mit der EU vergleichbares Datenschutzniveau garantiert werden kann.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Wir weisen darauf hin, dass die USA als sicherer Drittstaat grundsätzlich ein mit der EU vergleichbares Datenschutzniveau aufweisen. Eine Datenübertragung in die USA ist danach zulässig, wenn der Empfänger eine Zertifizierung unter dem „EU-US Data Privacy Framework“ (DPF) besitzt oder über geeignete zusätzliche Garantien verfügt. Informationen zu Übermittlungen an Drittstaaten einschließlich der Datenempfänger finden Sie in dieser Datenschutzerklärung.
        </p>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Empfänger von personenbezogenen Daten</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Im Rahmen unserer Geschäftstätigkeit arbeiten wir mit verschiedenen externen Stellen zusammen. Dabei
        ist teilweise auch eine Übermittlung von personenbezogenen Daten an diese externen Stellen erforderlich.
        Wir geben personenbezogene Daten nur dann an externe Stellen weiter, wenn dies im Rahmen einer
        Vertragserfüllung erforderlich ist, wenn wir gesetzlich hierzu verpflichtet sind (z. B. Weitergabe von Daten
        an Steuerbehörden), wenn wir ein berechtigtes Interesse nach Art. 6 Abs. 1 lit. f DSGVO an der Weitergabe
        haben oder wenn eine sonstige Rechtsgrundlage die Datenweitergabe erlaubt. Beim Einsatz von
        Auftragsverarbeitern geben wir personenbezogene Daten unserer Kunden nur auf Grundlage eines gültigen
        Vertrags über Auftragsverarbeitung weiter. Im Falle einer gemeinsamen Verarbeitung wird ein Vertrag über
        gemeinsame Verarbeitung geschlossen.
        </p>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Widerruf Ihrer Einwilligung zur Datenverarbeitung</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Viele Datenverarbeitungsvorgänge sind nur mit Ihrer ausdrücklichen Einwilligung möglich. Sie können eine
        bereits erteilte Einwilligung jederzeit widerrufen. Die Rechtmäßigkeit der bis zum Widerruf erfolgten
        Datenverarbeitung bleibt vom Widerruf unberührt.
        </p>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Widerspruchsrecht gegen die Datenerhebung in besonderen Fällen sowie gegen
        Direktwerbung (Art. 21 DSGVO)</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        WENN DIE DATENVERARBEITUNG AUF GRUNDLAGE VON ART. 6 ABS. 1 LIT. E ODER F DSGVO
        ERFOLGT, HABEN SIE JEDERZEIT DAS RECHT, AUS GRÜNDEN, DIE SICH AUS IHRER BESONDEREN
        SITUATION ERGEBEN, GEGEN DIE VERARBEITUNG IHRER PERSONENBEZOGENEN DATEN
        WIDERSPRUCH EINZULEGEN; DIES GILT AUCH FÜR EIN AUF DIESE BESTIMMUNGEN GESTÜTZTES
        PROFILING. DIE JEWEILIGE RECHTSGRUNDLAGE, AUF DENEN EINE VERARBEITUNG BERUHT,
        ENTNEHMEN SIE DIESER DATENSCHUTZERKLÄRUNG. WENN SIE WIDERSPRUCH EINLEGEN,
        WERDEN WIR IHRE BETROFFENEN PERSONENBEZOGENEN DATEN NICHT MEHR VERARBEITEN, ES
        SEI DENN, WIR KÖNNEN ZWINGENDE SCHUTZWÜRDIGE GRÜNDE FÜR DIE VERARBEITUNG
        NACHWEISEN, DIE IHRE INTERESSEN, RECHTE UND FREIHEITEN ÜBERWIEGEN ODER DIE
        VERARBEITUNG DIENT DER GELTENDMACHUNG, AUSÜBUNG ODER VERTEIDIGUNG VON
        RECHTSANSPRÜCHEN (WIDERSPRUCH NACH ART. 21 ABS. 1 DSGVO).
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        WERDEN IHRE PERSONENBEZOGENEN DATEN VERARBEITET, UM DIREKTWERBUNG ZU BETREIBEN,
        SO HABEN SIE DAS RECHT, JEDERZEIT WIDERSPRUCH GEGEN DIE VERARBEITUNG SIE
        BETREFFENDER PERSONENBEZOGENER DATEN ZUM ZWECKE DERARTIGER WERBUNG
        EINZULEGEN; DIES GILT AUCH FÜR DAS PROFILING, SOWEIT ES MIT SOLCHER DIREKTWERBUNG IN
        VERBINDUNG STEHT. WENN SIE WIDERSPRECHEN, WERDEN IHRE PERSONENBEZOGENEN DATEN
        ANSCHLIESSEND NICHT MEHR ZUM ZWECKE DER DIREKTWERBUNG VERWENDET (WIDERSPRUCH
        NACH ART. 21 ABS. 2 DSGVO).
        </p>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Beschwerderecht bei der zuständigen Aufsichtsbehörde</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Im Falle von Verstößen gegen die DSGVO steht den Betroffenen ein Beschwerderecht bei einer
        Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthalts, ihres Arbeitsplatzes
        oder des Orts des mutmaßlichen Verstoßes zu. Das Beschwerderecht besteht unbeschadet anderweitiger
        verwaltungsrechtlicher oder gerichtlicher Rechtsbehelfe.
        </p>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Recht auf Datenübertragbarkeit</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Sie haben das Recht, Daten, die wir auf Grundlage Ihrer Einwilligung oder in Erfüllung eines Vertrags
        automatisiert verarbeiten, an sich oder an einen Dritten in einem gängigen, maschinenlesbaren Format
        aushändigen zu lassen. Sofern Sie die direkte Übertragung der Daten an einen anderen Verantwortlichen
        verlangen, erfolgt dies nur, soweit es technisch machbar ist.
        </p>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Auskunft, Berichtigung und Löschung</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Sie haben im Rahmen der geltenden gesetzlichen Bestimmungen jederzeit das Recht auf unentgeltliche
        Auskunft über Ihre gespeicherten personenbezogenen Daten, deren Herkunft und Empfänger und den
        Zweck der Datenverarbeitung und ggf. ein Recht auf Berichtigung oder Löschung dieser Daten. Hierzu sowie
        zu weiteren Fragen zum Thema personenbezogene Daten können Sie sich jederzeit an uns wenden.
        </p>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Recht auf Einschränkung der Verarbeitung</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
        Hierzu können Sie sich jederzeit an uns wenden. Das Recht auf Einschränkung der Verarbeitung besteht in
        folgenden Fällen:
        </p>
        <ul className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400 list-disc list-inside">
        <li>Wenn Sie die Richtigkeit Ihrer bei uns gespeicherten personenbezogenen Daten bestreiten, benötigen wir
        in der Regel Zeit, um dies zu überprüfen. Für die Dauer der Prüfung haben Sie das Recht, die
        Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
        <li>Wenn die Verarbeitung Ihrer personenbezogenen Daten unrechtmäßig geschah/geschieht, können Sie
        statt der Löschung die Einschränkung der Datenverarbeitung verlangen.</li>
        <li>Wenn wir Ihre personenbezogenen Daten nicht mehr benötigen, Sie sie jedoch zur Ausübung,
        Verteidigung oder Geltendmachung von Rechtsansprüchen benötigen, haben Sie das Recht, statt der
        Löschung die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen.</li>
        <li>Wenn Sie einen Widerspruch nach Art. 21 Abs. 1 DSGVO eingelegt haben, muss eine Abwägung zwischen
        Ihren und unseren Interessen vorgenommen werden. Solange noch nicht feststeht, wessen Interessen
        überwiegen, haben Sie das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten
        zu verlangen.</li>
        </ul>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Wenn Sie die Verarbeitung Ihrer personenbezogenen Daten eingeschränkt haben, dürfen diese Daten – von
        ihrer Speicherung abgesehen – nur mit Ihrer Einwilligung oder zur Geltendmachung, Ausübung oder
        Verteidigung von Rechtsansprüchen oder zum Schutz der Rechte einer anderen natürlichen oder
        juristischen Person oder aus Gründen eines wichtigen öffentlichen Interesses der Europäischen Union oder
        eines Mitgliedstaats verarbeitet werden.
        </p>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">SSL- bzw. TLS-Verschlüsselung</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher Inhalte, wie zum
        Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber senden, eine SSL- bzw. TLSVerschlüsselung.
        Eine verschlüsselte Verbindung erkennen Sie daran, dass die Adresszeile des Browsers von
        „http://“ auf „https://“ wechselt und an dem Schloss-Symbol in Ihrer Browserzeile.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Wenn die SSL- bzw. TLS-Verschlüsselung aktiviert ist, können die Daten, die Sie an uns übermitteln, nicht
        von Dritten mitgelesen werden.
        </p>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Verschlüsselter Zahlungsverkehr auf dieser Website</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Besteht nach dem Abschluss eines kostenpflichtigen Vertrags eine Verpflichtung, uns Ihre Zahlungsdaten
        (z. B. Kontonummer bei Einzugsermächtigung) zu übermitteln, werden diese Daten zur Zahlungsabwicklung
        benötigt.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Der Zahlungsverkehr über die gängigen Zahlungsmittel (Visa/MasterCard, Lastschriftverfahren) erfolgt
        ausschließlich über eine verschlüsselte SSL- bzw. TLS-Verbindung. Eine verschlüsselte Verbindung erkennen
        Sie daran, dass die Adresszeile des Browsers von „http://“ auf „https://“ wechselt und an dem Schloss-Symbol
        in Ihrer Browserzeile.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Bei verschlüsselter Kommunikation können Ihre Zahlungsdaten, die Sie an uns übermitteln, nicht von
        Dritten mitgelesen werden.
        </p>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Widerspruch gegen Werbe-E-Mails</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Der Nutzung von im Rahmen der Impressumspflicht veröffentlichten Kontaktdaten zur Übersendung von
        nicht ausdrücklich angeforderter Werbung und Informationsmaterialien wird hiermit widersprochen. Die
        Betreiber der Seiten behalten sich ausdrücklich rechtliche Schritte im Falle der unverlangten Zusendung von
        Werbeinformationen, etwa durch Spam-E-Mails, vor.
        </p>
        <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">4. Datenerfassung auf dieser Website</h2>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Cookies</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Unsere Internetseiten verwenden so genannte „Cookies“. Cookies sind kleine Datenpakete und richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem Endgerät gespeichert. Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine automatische Löschung durch Ihren Webbrowser erfolgt.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Cookies können von uns (First-Party-Cookies) oder von Drittunternehmen stammen (sog. Third-Party-Cookies). Third-Party-Cookies ermöglichen die Einbindung bestimmter Dienstleistungen von Drittunternehmen innerhalb von Webseiten (z. B. Cookies zur Abwicklung von Zahlungsdienstleistungen).
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Cookies haben verschiedene Funktionen. Zahlreiche Cookies sind technisch notwendig, da bestimmte Webseitenfunktionen ohne diese nicht funktionieren würden (z. B. die Warenkorbfunktion oder die Anzeige von Videos). Andere Cookies können zur Auswertung des Nutzerverhaltens oder zu Werbezwecken verwendet werden.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Cookies, die zur Durchführung des elektronischen Kommunikationsvorgangs, zur Bereitstellung bestimmter, von Ihnen erwünschter Funktionen (z. B. für die Warenkorbfunktion) oder zur Optimierung der Website (z. B. Cookies zur Messung des Webpublikums) erforderlich sind (notwendige Cookies), werden auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO gespeichert, sofern keine andere Rechtsgrundlage angegeben wird. Der Websitebetreiber hat ein berechtigtes Interesse an der Speicherung von notwendigen Cookies zur technisch fehlerfreien und optimierten Bereitstellung seiner Dienste. Sofern eine Einwilligung zur Speicherung von Cookies und vergleichbaren Wiedererkennungstechnologien abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage dieser Einwilligung (Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG); die Einwilligung ist jederzeit widerrufbar.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Sie können Ihren Browser so einstellen, dass Sie über das Setzen von Cookies informiert werden und Cookies nur im Einzelfall erlauben, die Annahme von Cookies für bestimmte Fälle oder generell ausschließen sowie das automatische Löschen der Cookies beim Schließen des Browsers aktivieren. Bei der Deaktivierung von Cookies kann die Funktionalität dieser Website eingeschränkt sein.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Welche Cookies und Dienste auf dieser Website eingesetzt werden, können Sie dieser Datenschutzerklärung entnehmen.
        </p>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Server-Log-Dateien</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten Server-Log-
        Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
        </p>
        <ul className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400 list-disc list-inside">
        <li>Browsertyp und Browserversion</li>
        <li>verwendetes Betriebssystem</li>
        <li>Referrer URL</li>
        <li>Hostname des zugreifenden Rechners</li>
        <li>Uhrzeit der Serveranfrage</li>
        <li>IP-Adresse</li>
        </ul>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat
        ein berechtigtes Interesse an der technisch fehlerfreien Darstellung und der Optimierung seiner Website –
        hierzu müssen die Server-Log-Files erfasst werden.
        </p>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Kontaktformular</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Wenn Sie uns per Kontaktformular Anfragen zukommen lassen, werden Ihre Angaben aus dem
        Anfrageformular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks Bearbeitung der Anfrage
        und für den Fall von Anschlussfragen bei uns gespeichert. Diese Daten geben wir nicht ohne Ihre
        Einwilligung weiter.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit
        der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen
        erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
        effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
        Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit
        widerrufbar.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Die von Ihnen im Kontaktformular eingegebenen Daten verbleiben bei uns, bis Sie uns zur Löschung
        auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
        (z. B. nach abgeschlossener Bearbeitung Ihrer Anfrage). Zwingende gesetzliche Bestimmungen –
        insbesondere Aufbewahrungsfristen – bleiben unberührt.
        </p>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Anfrage per E-Mail, Telefon oder Telefax</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Wenn Sie uns per E-Mail, Telefon oder Telefax kontaktieren, wird Ihre Anfrage inklusive aller daraus
        hervorgehenden personenbezogenen Daten (Name, Anfrage) zum Zwecke der Bearbeitung Ihres Anliegens
        bei uns gespeichert und verarbeitet. Diese Daten geben wir nicht ohne Ihre Einwilligung weiter.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, sofern Ihre Anfrage mit
        der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung vorvertraglicher Maßnahmen erforderlich ist. In allen übrigen Fällen beruht die Verarbeitung auf unserem berechtigten Interesse an der
        effektiven Bearbeitung der an uns gerichteten Anfragen (Art. 6 Abs. 1 lit. f DSGVO) oder auf Ihrer
        Einwilligung (Art. 6 Abs. 1 lit. a DSGVO) sofern diese abgefragt wurde; die Einwilligung ist jederzeit
        widerrufbar.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Die von Ihnen an uns per Kontaktanfragen übersandten Daten verbleiben bei uns, bis Sie uns zur Löschung
        auffordern, Ihre Einwilligung zur Speicherung widerrufen oder der Zweck für die Datenspeicherung entfällt
        (z. B. nach abgeschlossener Bearbeitung Ihres Anliegens). Zwingende gesetzliche Bestimmungen –
        insbesondere gesetzliche Aufbewahrungsfristen – bleiben unberührt.
        </p>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Registrierung auf dieser Website</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Sie können sich auf dieser Website registrieren, um zusätzliche Funktionen auf der Seite zu nutzen. Die dazu
        eingegebenen Daten verwenden wir nur zum Zwecke der Nutzung des jeweiligen Angebotes oder Dienstes,
        für den Sie sich registriert haben. Die bei der Registrierung abgefragten Pflichtangaben müssen vollständig
        angegeben werden. Anderenfalls werden wir die Registrierung ablehnen.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Für wichtige Änderungen etwa beim Angebotsumfang oder bei technisch notwendigen Änderungen nutzen
        wir die bei der Registrierung angegebene E-Mail-Adresse, um Sie auf diesem Wege zu informieren.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Die Verarbeitung der bei der Registrierung eingegebenen Daten erfolgt zum Zwecke der Durchführung des
        durch die Registrierung begründeten Nutzungsverhältnisses und ggf. zur Anbahnung weiterer Verträge (Art.
        6 Abs. 1 lit. b DSGVO).
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Die bei der Registrierung erfassten Daten werden von uns gespeichert, solange Sie auf dieser Website
        registriert sind und werden anschließend gelöscht. Gesetzliche Aufbewahrungsfristen bleiben unberührt.
        </p>
        <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">5. Analyse-Tools und Werbung</h2>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Google Tag Manager</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Wir setzen den Google Tag Manager ein. Anbieter ist die Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Der Google Tag Manager ist ein Tool, mit dessen Hilfe wir Tracking- oder Statistik-Tools und andere Technologien auf unserer Website einbinden können. Der Google Tag Manager selbst erstellt keine Nutzerprofile, speichert keine Cookies und nimmt keine eigenständigen Analysen vor. Er dient lediglich der Verwaltung und Ausspielung der über ihn eingebundenen Tools. Der Google Tag Manager erfasst jedoch Ihre IP-Adresse, die auch an das Mutterunternehmen von Google in die Vereinigten Staaten übertragen werden kann.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Der Einsatz des Google Tag Managers erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an einer schnellen und unkomplizierten Einbindung und Verwaltung verschiedener Tools auf seiner Website. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active" className="text-blue-600 dark:text-blue-500" target="_blank" rel="noopener noreferrer">https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active</a>
        </p>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Google Analytics</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Diese Website nutzt Funktionen des Webanalysedienstes Google Analytics. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Google Analytics ermöglicht es dem Websitebetreiber, das Verhalten der Websitebesucher zu analysieren. Hierbei erhält der Websitebetreiber verschiedene Nutzungsdaten, wie z. B. Seitenaufrufe, Verweildauer, verwendete Betriebssysteme und Herkunft des Nutzers. Diese Daten werden in einer User-ID zusammengefasst und dem jeweiligen Endgerät des Websitebesuchers zugeordnet.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Des Weiteren können wir mit Google Analytics u. a. Ihre Maus- und Scrollbewegungen und Klicks aufzeichnen. Ferner verwendet Google Analytics verschiedene Modellierungsansätze, um die erfassten Datensätze zu ergänzen und setzt Machine-Learning-Technologien bei der Datenanalyse ein.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Google Analytics verwendet Technologien, die die Wiedererkennung des Nutzers zum Zwecke der Analyse des Nutzerverhaltens ermöglichen (z. B. Cookies oder Device-Fingerprinting). Die von Google erfassten Informationen über die Benutzung dieser Website werden in der Regel an einen Server von Google in den USA übertragen und dort gespeichert.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://privacy.google.com/businesses/controllerterms/mccs/" className="text-blue-600 dark:text-blue-500" target="_blank" rel="noopener noreferrer">https://privacy.google.com/businesses/controllerterms/mccs/</a>.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active" className="text-blue-600 dark:text-blue-500" target="_blank" rel="noopener noreferrer">https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active</a>
        </p>
        <h4 className="mt-6 text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">IP Anonymisierung</h4>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Die Google Analytics IP-Anonymisierung ist aktiviert. Dadurch wird Ihre IP-Adresse von Google innerhalb von Mitgliedstaaten der Europäischen Union oder in anderen Vertragsstaaten des Abkommens über den Europäischen Wirtschaftsraum vor der Übermittlung in die USA gekürzt. Nur in Ausnahmefällen wird die volle IP-Adresse an einen Server von Google in den USA übertragen und dort gekürzt. Im Auftrag des Betreibers dieser Website wird Google diese Informationen benutzen, um Ihre Nutzung der Website auszuwerten, um Reports über die Websiteaktivitäten zusammenzustellen und um weitere mit der Websitenutzung und der Internetnutzung verbundene Dienstleistungen gegenüber dem Websitebetreiber zu erbringen. Die im Rahmen von Google Analytics von Ihrem Browser übermittelte IP-Adresse wird nicht mit anderen Daten von Google zusammengeführt.
        </p>
        <h4 className="mt-6 text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">Browser Plugin</h4>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Sie können die Erfassung und Verarbeitung Ihrer Daten durch Google verhindern, indem Sie das unter dem folgenden Link verfügbare Browser-Plugin herunterladen und installieren: <a href="https://tools.google.com/dlpage/gaoptout?hl=de" className="text-blue-600 dark:text-blue-500" target="_blank" rel="noopener noreferrer">https://tools.google.com/dlpage/gaoptout?hl=de</a>.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Mehr Informationen zum Umgang mit Nutzerdaten bei Google Analytics finden Sie in der Datenschutzerklärung von Google: <a href="https://support.google.com/analytics/answer/6004245?hl=de" className="text-blue-600 dark:text-blue-500" target="_blank" rel="noopener noreferrer">https://support.google.com/analytics/answer/6004245?hl=de</a>.
        </p>
        <h4 className="mt-6 text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">Google-Signale</h4>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Wir nutzen Google-Signale. Wenn Sie unsere Website besuchen, erfasst Google Analytics u. a. Ihren Standort, Suchverlauf und YouTube-Verlauf sowie demografische Daten (Besucherdaten). Diese Daten können mit Hilfe von Google-Signal für personalisierte Werbung verwendet werden. Wenn Sie über ein Google-Konto verfügen, werden die Besucherdaten von Google-Signal mit Ihrem Google-Konto verknüpft und für personalisierte Werbebotschaften verwendet. Die Daten werden außerdem für die Erstellung anonymisierter Statistiken zum Nutzerverhalten unserer User verwendet.
        </p>
        <h4 className="mt-6 text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">Auftragsverarbeitung</h4>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Wir haben mit Google einen Vertrag zur Auftragsverarbeitung abgeschlossen und setzen die strengen Vorgaben der deutschen Datenschutzbehörden bei der Nutzung von Google Analytics vollständig um.
        </p>
        <h4 className="mt-6 text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">Google Analytics E-Commerce-Messung</h4>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Diese Website nutzt die Funktion „E-Commerce-Messung“ von Google Analytics. Mit Hilfe von E-Commerce-Messung kann der Websitebetreiber das Kaufverhalten der Websitebesucher zur Verbesserung seiner Online-Marketing-Kampagnen analysieren. Hierbei werden Informationen, wie zum Beispiel die getätigten Bestellungen, durchschnittliche Bestellwerte, Versandkosten und die Zeit von der Ansicht bis zum Kauf eines Produktes erfasst. Diese Daten können von Google unter einer Transaktions-ID zusammengefasst werden, die dem jeweiligen Nutzer bzw. dessen Gerät zugeordnet ist.
        </p>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Clarity</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Diese Website nutzt Clarity. Anbieter ist die Microsoft Ireland Operations Limited, One Microsoft Place, South County Business Park, Leopardstown, Dublin 18, Irland, <a href="https://docs.microsoft.com/en-us/clarity/" className="text-blue-600 dark:text-blue-500" target="_blank" rel="noopener noreferrer">https://docs.microsoft.com/en-us/clarity/</a> (im Folgenden „Clarity“).
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Clarity ist ein Werkzeug zur Analyse des Nutzerverhaltens auf dieser Website. Hierbei erfasst Clarity insbesondere Mausbewegungen und erstellt eine grafische Darstellung darüber, auf welchen Teil der Website Nutzer besonders häufig scrollen (Heatmaps). Clarity kann ferner Sitzungen aufzeichnen, sodass wir die Seitennutzung in Form von Videos ansehen können. Ferner erhalten wir Angaben über das allgemeine Nutzerverhalten innerhalb unserer Website.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Clarity verwendet Technologien, die die Wiedererkennung des Nutzers zum Zwecke der Analyse des Nutzerverhaltens ermöglichen (z. B. Cookies oder Einsatz von Device-Fingerprinting). Ihre personenbezogenen Daten werden auf den Servern von Microsoft (Microsoft Azure Cloud Service) in den USA gespeichert.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Soweit eine Einwilligung (Consent) eingeholt wurde, erfolgt der Einsatz des o. g. Dienstes ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 TTDSG. Die Einwilligung ist jederzeit widerrufbar. Soweit keine Einwilligung eingeholt wurde, erfolgt die Verwendung dieses Dienstes auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO; der Websitebetreiber hat ein berechtigtes Interesse an einer effektiven Nutzeranalyse.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Weitere Details zum Datenschutz von Clarity finden Sie hier: <a href="https://docs.microsoft.com/en-us/clarity/faq" className="text-blue-600 dark:text-blue-500" target="_blank" rel="noopener noreferrer">https://docs.microsoft.com/en-us/clarity/faq</a>.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000KzNaAAK&status=Active" className="text-blue-600 dark:text-blue-500" target="_blank" rel="noopener noreferrer">https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt0000000KzNaAAK&status=Active</a>
        </p>
        <h4 className="mt-6 text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">Auftragsverarbeitung</h4>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
        </p>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Google Ads</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Der Websitebetreiber verwendet Google Ads. Google Ads ist ein Online-Werbeprogramm der Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Google Ads ermöglicht es uns Werbeanzeigen in der Google-Suchmaschine oder auf Drittwebseiten auszuspielen, wenn der Nutzer bestimmte Suchbegriffe bei Google eingibt (Keyword-Targeting). Ferner können zielgerichtete Werbeanzeigen anhand der bei Google vorhandenen Nutzerdaten (z. B. Standortdaten und Interessen) ausgespielt werden (Zielgruppen-Targeting). Wir als Websitebetreiber können diese Daten quantitativ auswerten, indem wir beispielsweise analysieren, welche Suchbegriffe zur Ausspielung unserer Werbeanzeigen geführt haben und wie viele Anzeigen zu entsprechenden Klicks geführt haben.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://policies.google.com/privacy/frameworks" className="text-blue-600 dark:text-blue-500" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy/frameworks</a> und <a href="https://privacy.google.com/businesses/controllerterms/mccs/" className="text-blue-600 dark:text-blue-500" target="_blank" rel="noopener noreferrer">https://privacy.google.com/businesses/controllerterms/mccs/</a>.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active" className="text-blue-600 dark:text-blue-500" target="_blank" rel="noopener noreferrer">https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active</a>.
        </p>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Google Ads Remarketing</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Diese Website nutzt die Funktionen von Google Ads Remarketing. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Mit Google Ads Remarketing können wir Personen, die mit unserem Online-Angebot interagieren bestimmten Zielgruppen zuordnen, um ihnen anschließend interessenbezogene Werbung im Google-Werbenetzwerk anzeigen zu lassen (Remarketing bzw. Retargeting).
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Des Weiteren können die mit Google Ads Remarketing erstellten Werbe-Zielgruppen mit den geräteübergreifenden Funktionen von Google verknüpft werden. Auf diese Weise können interessenbezogene, personalisierte Werbebotschaften, die in Abhängigkeit Ihres früheren Nutzungs- und Surfverhaltens auf einem Endgerät (z. B. Handy) an Sie angepasst wurden auch auf einem anderen Ihrer Endgeräte (z. B. Tablet oder PC) angezeigt werden.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Wenn Sie über einen Google-Account verfügen, können Sie der personalisierten Werbung unter folgendem Link widersprechen: <a href="https://www.google.com/settings/ads/onweb/" className="text-blue-600 dark:text-blue-500" target="_blank" rel="noopener noreferrer">https://www.google.com/settings/ads/onweb/</a>.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Weitergehende Informationen und die Datenschutzbestimmungen finden Sie in der Datenschutzerklärung von Google unter: <a href="https://policies.google.com/technologies/ads?hl=de" className="text-blue-600 dark:text-blue-500" target="_blank" rel="noopener noreferrer">https://policies.google.com/technologies/ads?hl=de</a>.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active" className="text-blue-600 dark:text-blue-500" target="_blank" rel="noopener noreferrer">https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active</a>.
        </p>
        <h4 className="mt-6 text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">Zielgruppenbildung mit Kundenabgleich</h4>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Zur Zielgruppenbildung verwenden wir unter anderem den Kundenabgleich von Google Ads Remarketing. Hierbei übergeben wir bestimmte Kundendaten (z. B. E-Mail-Adressen) aus unseren Kundenlisten an Google. Sind die betreffenden Kunden Google-Nutzer und in ihrem Google-Konto eingeloggt, werden ihnen passende Werbebotschaften innerhalb des Google-Netzwerks (z. B. bei YouTube, Gmail oder in der Suchmaschine) angezeigt.
        </p>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Google Conversion-Tracking</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Diese Website nutzt Google Conversion Tracking. Anbieter ist die Google Ireland Limited („Google“), Gordon House, Barrow Street, Dublin 4, Irland.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Mit Hilfe von Google-Conversion-Tracking können Google und wir erkennen, ob der Nutzer bestimmte Aktionen durchgeführt hat. So können wir beispielsweise auswerten, welche Buttons auf unserer Website wie häufig geklickt und welche Produkte besonders häufig angesehen oder gekauft wurden. Diese Informationen dienen dazu, Conversion-Statistiken zu erstellen. Wir erfahren die Gesamtanzahl der Nutzer, die auf unsere Anzeigen geklickt haben und welche Aktionen sie durchgeführt haben. Wir erhalten keine Informationen, mit denen wir den Nutzer persönlich identifizieren können. Google selbst nutzt zur Identifikation Cookies oder vergleichbare Wiedererkennungstechnologien.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Die Nutzung dieses Dienstes erfolgt auf Grundlage Ihrer Einwilligung nach Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG. Die Einwilligung ist jederzeit widerrufbar.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Mehr Informationen zu Google Conversion-Tracking finden Sie in den Datenschutzbestimmungen von Google: <a href="https://policies.google.com/privacy?hl=de" className="text-blue-600 dark:text-blue-500" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a>.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Das Unternehmen verfügt über eine Zertifizierung nach dem „EU-US Data Privacy Framework“ (DPF). Der DPF ist ein Übereinkommen zwischen der Europäischen Union und den USA, der die Einhaltung europäischer Datenschutzstandards bei Datenverarbeitungen in den USA gewährleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a href=" https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active" className="text-blue-600 dark:text-blue-500" target="_blank" rel="noopener noreferrer"> https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active</a>
        </p>
        <h3 id="cookieswiderrufen" className="scroll-mt-90 mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Cookie-Zustimmung widerrufen</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Ihre Privatsphäre und die Kontrolle über Ihre Daten sind uns wichtig. Wenn Sie zuvor Ihre Zustimmung zur Verwendung von Cookies auf unserer Webseite erteilt haben, können Sie diese Entscheidung jederzeit ändern. Wir respektieren Ihr Recht, Ihre Präferenzen zu ändern und bieten Ihnen die Möglichkeit, Ihre Cookie-Einstellungen anzupassen.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Durch das Widerrufen Ihrer Cookie-Zustimmung stoppen wir die Datenerfassung durch Cookies, die nicht unbedingt für das Funktionieren der Webseite erforderlich sind. Dies umfasst Cookies, die für Analysen, personalisierte Werbung und soziale Medien verwendet werden. Bitte beachten Sie, dass nach dem Widerruf der Zustimmung einige Teile unserer Webseite möglicherweise nicht mehr wie gewohnt funktionieren.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Sie können Ihre Cookie-Zustimmung jederzeit widerrufen, indem Sie auf den folgenden Link klicken:
        </p>
        <button
          onClick={handleWithdrawConsent}
          className="mt-2 text-blue-600 hover:text-blue-800"
        >
          Einwilligung widerrufen
        </button>
        <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">6. Plugins und Tools</h2>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">YouTube mit erweitertem Datenschutz</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Diese Website bindet Videos der Website YouTube ein. Betreiber der Seiten ist die Google Ireland Limited
        („Google“), Gordon House, Barrow Street, Dublin 4, Irland.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Wir nutzen YouTube im erweiterten Datenschutzmodus. Dieser Modus bewirkt laut YouTube, dass
        YouTube keine Informationen über die Besucher auf dieser Website speichert, bevor diese sich das Video
        ansehen. Die Weitergabe von Daten an YouTube-Partner wird durch den erweiterten Datenschutzmodus
        hingegen nicht zwingend ausgeschlossen. So stellt YouTube – unabhängig davon, ob Sie sich ein Video
        ansehen – eine Verbindung zum Google Marketing Netzwerk her.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Sobald Sie ein YouTube-Video auf dieser Website starten, wird eine Verbindung zu den Servern von
        YouTube hergestellt. Dabei wird dem YouTube-Server mitgeteilt, welche unserer Seiten Sie besucht haben.
        Wenn Sie in Ihrem YouTube-Account eingeloggt sind, ermöglichen Sie YouTube, Ihr Surfverhalten direkt
        Ihrem persönlichen Profil zuzuordnen. Dies können Sie verhindern, indem Sie sich aus Ihrem YouTube-
        Account ausloggen.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Des Weiteren kann YouTube nach Starten eines Videos verschiedene Cookies auf Ihrem Endgerät speichern
        oder vergleichbare Wiedererkennungstechnologien (z. B. Device-Fingerprinting) einsetzen. Auf diese Weise
        kann YouTube Informationen über Besucher dieser Website erhalten. Diese Informationen werden u. a.
        verwendet, um Videostatistiken zu erfassen, die Anwenderfreundlichkeit zu verbessern und
        Betrugsversuchen vorzubeugen.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Gegebenenfalls können nach dem Start eines YouTube-Videos weitere Datenverarbeitungsvorgänge
        ausgelöst werden, auf die wir keinen Einfluss haben.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Die Nutzung von YouTube erfolgt im Interesse einer ansprechenden Darstellung unserer Online-Angebote.
        Dies stellt ein berechtigtes Interesse im Sinne von Art. 6 Abs. 1 lit. f DSGVO dar. Sofern eine entsprechende
        Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a
        DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf
        Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die
        Einwilligung ist jederzeit widerrufbar.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Weitere Informationen &uuml;ber Datenschutz bei YouTube finden Sie in deren Datenschutzerkl&auml;rung unter: <a href="https://policies.google.com/privacy?hl=de" className="text-blue-600 dark:text-blue-500" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a>.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Das Unternehmen verf&uuml;gt &uuml;ber eine Zertifizierung nach dem &bdquo;EU-US Data Privacy Framework&ldquo; (DPF). Der DPF ist ein &Uuml;bereinkommen zwischen der Europ&auml;ischen Union und den USA, der die Einhaltung europ&auml;ischer Datenschutzstandards bei Datenverarbeitungen in den USA gew&auml;hrleisten soll. Jedes nach dem DPF zertifizierte Unternehmen verpflichtet sich, diese Datenschutzstandards einzuhalten. Weitere Informationen hierzu erhalten Sie vom Anbieter unter folgendem Link: <a href="https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active" className="text-blue-600 dark:text-blue-500" target="_blank" rel="noopener noreferrer">https://www.dataprivacyframework.gov/s/participant-search/participant-detail?contact=true&id=a2zt000000001L5AAI&status=Active</a>
        </p>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Google Fonts (lokales Hosting)</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Diese Seite nutzt zur einheitlichen Darstellung von Schriftarten so genannte Google Fonts, die von Google
        bereitgestellt werden. Die Google Fonts sind lokal installiert. Eine Verbindung zu Servern von Google findet
        dabei nicht statt.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Weitere Informationen zu Google Fonts finden Sie unter <a href="https://developers.google.com/fonts/faq" className="text-blue-600 dark:text-blue-500" target="_blank" rel="noopener noreferrer">https://developers.google.com/fonts/faq</a> und in der Datenschutzerkl&auml;rung von Google: <a href="https://policies.google.com/privacy?hl=de" className="text-blue-600 dark:text-blue-500" target="_blank" rel="noopener noreferrer">https://policies.google.com/privacy?hl=de</a>.
        </p>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Zapier</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Wir haben Zapier auf dieser Website eingebunden. Anbieter ist die Zapier Inc., Market St. #62411, San Francisco, CA 94104-5401, USA (nachfolgend Zapier).
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Zapier ermöglicht es uns, verschiedene Funktionalitäten, Datenbanken und Tools mit unserer Website zu verknüpfen und untereinander zu synchronisieren. Auf diese Weise ist es beispielsweise möglich, Inhalte, die wir auf unserer Website veröffentlichen, automatisch auch auf unseren Social-Media-Kanälen auszuspielen oder Inhalte aus Marketing- und Analysetools zu exportieren. Je nach Funktionalität kann hierbei auch Zapier verschiedene personenbezogene Daten erfassen.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Die Verwendung von Zapier erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO. Der Websitebetreiber hat ein berechtigtes Interesse an einer möglichst effektiven Integration der genutzten Tools. Sofern eine entsprechende Einwilligung abgefragt wurde, erfolgt die Verarbeitung ausschließlich auf Grundlage von Art. 6 Abs. 1 lit. a DSGVO und § 25 Abs. 1 TTDSG, soweit die Einwilligung die Speicherung von Cookies oder den Zugriff auf Informationen im Endgerät des Nutzers (z. B. Device-Fingerprinting) im Sinne des TTDSG umfasst. Die Einwilligung ist jederzeit widerrufbar.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Die Datenübertragung in die USA wird auf die Standardvertragsklauseln der EU-Kommission gestützt. Details finden Sie hier: <a href="https://zapier.com/tos" className="text-blue-600 dark:text-blue-500" target="_blank" rel="noopener noreferrer">https://zapier.com/tos</a>.
        </p>
        <h4 className="mt-6 text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">Auftragsverarbeitung</h4>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Wir haben einen Vertrag über Auftragsverarbeitung (AVV) zur Nutzung des oben genannten Dienstes geschlossen. Hierbei handelt es sich um einen datenschutzrechtlich vorgeschriebenen Vertrag, der gewährleistet, dass dieser die personenbezogenen Daten unserer Websitebesucher nur nach unseren Weisungen und unter Einhaltung der DSGVO verarbeitet.
        </p>
        <h2 className="mt-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-3xl">6. eCommerce und Zahlungs&shy;anbieter</h2>
        <h3 className="mt-6 text-xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-2xl">Zahlungsdienste</h3>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Wir binden Zahlungsdienste von Drittunternehmen auf unserer Website ein. Wenn Sie einen Kauf bei uns t&auml;tigen, werden Ihre Zahlungsdaten (z.&nbsp;B. Name, Zahlungssumme, Kontoverbindung, Kreditkartennummer) vom Zahlungsdienstleister zum Zwecke der Zahlungsabwicklung verarbeitet. F&uuml;r diese Transaktionen gelten die jeweiligen Vertrags- und Datenschutzbestimmungen der jeweiligen Anbieter. Der Einsatz der Zahlungsdienstleister erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO (Vertragsabwicklung) sowie im Interesse eines m&ouml;glichst reibungslosen, komfortablen und sicheren Zahlungsvorgangs (Art. 6 Abs. 1 lit. f DSGVO). Soweit f&uuml;r bestimmte Handlungen Ihre Einwilligung abgefragt wird, ist Art. 6 Abs. 1 lit. a DSGVO Rechtsgrundlage der Datenverarbeitung; Einwilligungen sind jederzeit f&uuml;r die Zukunft widerrufbar.
        </p>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Folgende Zahlungsdienste / Zahlungsdienstleister setzen wir im Rahmen dieser Website ein:
        </p>
        <h4 className="mt-6 text-lg font-bold tracking-tight text-gray-900 dark:text-white sm:text-xl">CopeCart</h4>
        <p className="mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
        Anbieter dieses Zahlungsdienstes ist CopeCart GmbH, Ufnaustraße 10, 10553 Berlin (im Folgenden „CopeCart“). Details entnehmen Sie der Datenschutzerklärung von CopeCart: <a href="https://www.copecart.com/de/datenschutz" className="text-blue-600 dark:text-blue-500" target="_blank" rel="noopener noreferrer">https://www.copecart.com/de/datenschutz</a>.
        </p>
      </div>
    </div>
</section>
  )
}