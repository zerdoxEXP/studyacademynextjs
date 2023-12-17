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
          "Kein Problem! Erzähle uns einfach, worüber Du mehr erfahren möchtest oder in welchem Bereich Du Dich verbessern willst. Unsere Experten bieten Dir Orientierung und helfen Dir, den ersten Schritt auf Deinem Lernweg zu machen."
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
    <section id="HäufigeFragen">
      <div className="bg-gray-50 dark:bg-slate-800">
        <div className="mx-auto max-w-7xl px-6 py-16 sm:py-24 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-2xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white">Häufige Fragen</h2>
            <p className="mt-6 text-base leading-7 text-gray-600 dark:text-gray-400">
            Hier findest du die wichtigsten Fragen zu unserer Community beantwortet.
            </p>
          </div>
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
  