const faqs = [
    {
      id: 1,
      question: "Wie funktioniert die Fragestellung an die Community und Experten?",
      answer:
        "Du kannst Deine Lernfragen einfach über unsere Webseite einreichen. Klicke auf den Button 'Frage kostenlos stellen' und beschreibe Dein Anliegen. Unsere Community und Experten werden dann persönlich darauf antworten und Dir mit Rat und Tat zur Seite stehen.",
    },
    {
        id: 2,
        question: "Was kann ich tun, wenn ich nicht weiß, wo ich mit dem Lernen anfangen soll?",
        answer:
          "Kein Problem! Erzähle uns einfach, worüber Du mehr erfahren möchtest oder in welchem Bereich Du Dich verbessern willst. Unsere Experten bieten Dir Orientierung und helfen Dir, den ersten Schritt auf Deinem Lernweg zu machen.",
      },
      {
        id: 3,
        question: "Wie kann ich meine Lernmotivation steigern?",
        answer:
          "Wir bieten verschiedene Strategien und Tipps, um Deine Motivation zu wecken und aufrechtzuerhalten. Teile uns Deine spezifischen Herausforderungen mit, und unsere Experten werden personalisierte Ratschläge geben, um Dich zu inspirieren und motivieren.",
      },
      {
        id: 4,
        question: "Ich stehe vor einer Lernblockade. Wie kann mir die Community helfen?",
        answer:
          "Erkläre uns, womit Du Schwierigkeiten hast, und wir werden gemeinsam Lösungsansätze erarbeiten. Unsere Community und Experten bieten praktische Tipps und Unterstützung, um Dir den Weg aus der Lernblockade zu ebnen.",
      },
      {
        id: 5,
        question: "Ist die Nutzung Ihrer Plattform und das Stellen von Fragen wirklich kostenlos?",
        answer:
          "Ja, absolut! Das Stellen von Fragen an unsere Community und Experten ist völlig kostenlos. Unser Ziel ist es, jedem beim Lernen zu helfen, ohne dass dabei Kosten entstehen.",
      },
      {
        id: 6,
        question: "Für wen ist Ihre Plattform geeignet?",
        answer:
          "Unsere Plattform ist für jeden geeignet, der sich verbessern und Lernblockaden überwinden möchte. Egal, ob Du Schüler, Student, Berufstätiger oder einfach jemand bist, der neues Wissen erwerben möchte, wir bieten Unterstützung und Ratschläge für Lernende aller Ebenen.",
      },
    // More questions...
  ]
  
  export default function FAQ() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-7xl divide-y divide-gray-900/10 px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
          <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900">Häufige Fragen</h2>
          <dl className="mt-10 space-y-8 divide-y divide-gray-900/10">
            {faqs.map((faq) => (
              <div key={faq.id} className="pt-8 lg:grid lg:grid-cols-12 lg:gap-8">
                <dt className="text-base font-semibold leading-7 text-gray-900 lg:col-span-5">{faq.question}</dt>
                <dd className="mt-4 lg:col-span-7 lg:mt-0">
                  <p className="text-base leading-7 text-gray-600">{faq.answer}</p>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    )
  }
  