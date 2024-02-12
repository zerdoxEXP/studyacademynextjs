const faqs = [
    {
      id: 1,
      question: "Wie werde ich ein Affiliate für Lernsysteme Basic und Pro?",
      answer: "Um Affiliate zu werden, musst du dich zunächst bei CopeCart anmelden. Du kannst sofort danach loslegen mit deinem persönlichen Affiliate-Link unsere Produkte zu bewerben. Auszahlungen werden nach einer kurzen Überprüfung Deiner Angaben automatisch durchgeführt, wenn du einen Mindestbetrag von 50€ an Provisionen erreicht hast.",
    },
    {
        id: 2,
        question: "Wie und wann erhalte ich meine Provisionen?",
        answer: "Provisionen werden monatlich über PayPal oder Banküberweisung von CopeCart ausgezahlt, sofern ein Mindestbetrag von 50 Euro erreicht wurde. Sollten Sie diesen Betrag in einem Monat nicht erreichen, wird Ihr Guthaben in den nächsten Monat übertragen. Bitte beachte, dass 20% der Provision erst 40 Tage nach dem Verkauf ausbezahlt werden kann.",
      },
      {
        id: 3,
        question: "Kann ich Affiliate-Links auf mehreren Plattformen teilen?",
        answer:
          "Ja, du kannst Deine Affiliate-Links auf beliebig vielen Plattformen teilen, einschließlich Deiner Website, Blog, sozialen Medien und E-Mail-Newslettern. Wir empfehlen, verschiedene Kanäle zu nutzen, um Deine Reichweite zu maximieren.",
      },
      {
        id: 4,
        question: "Wie verfolge ich meine Verkäufe und Einnahmen?",
        answer:
          "In Deinem Affiliate-Dashboard bei CopeCart findest du detaillierte Berichte über Deine Klicks, Verkäufe und Einnahmen. Diese Daten werden in Echtzeit aktualisiert, sodass Du stets über Deine Leistung und Verdienste informiert bist.",
      },
      {
        id: 5,
        question: "Gibt es Einschränkungen, wie ich die Produkte bewerben kann?",
        answer:
          "Während wir Kreativität und Eigeninitiative schätzen, bitten wir Dich, keine irreführende Werbung, Spam-Techniken oder anderen unethische Praktiken zu verwenden, die uns persönlich schaden. Alle Marketingaktivitäten sollten die Integrität unserer Marke und Produkte wahren.",
      },
      {
        id: 6,
        question: "Was passiert, wenn ein Kunde eine Bestellung storniert oder eine Rückerstattung beantragt?",
        answer:
          "Im Falle einer Stornierung oder Rückerstattung wird die entsprechende Provision automatisch von Deinem Account abgezogen. Dies gilt auch für Rückbuchungen durch Zahlungsausfälle oder betrügerische Transaktionen.",
      },
    // More questions...
  ]
  
  export default function FAQ() {
    return (
    <section id="HäufigeFragen">
      <div className="bg-gray-50 dark:bg-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <h2 className="text-4xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white">Häufige Fragen</h2>
          <p className="mt-6 max-w-3xl text-xl leading-7 text-gray-600 dark:text-gray-400">
          Hier findest du die wichtigsten Fragen und Antworten zu unserem Partnerprogramm.
          </p>
          <div className="mt-20">
            <dl className="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:grid-cols-3 lg:gap-x-10">
              {faqs.map((faq) => (
                <div key={faq.id}>
                  <dt className="text-base font-semibold leading-7 text-gray-900 dark:text-white">{faq.question}</dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600 dark:text-gray-400">{faq.answer}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
    )
  }
  