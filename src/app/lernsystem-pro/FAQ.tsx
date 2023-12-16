const faqs = [
    {
      id: 1,
      question: "Wie unterscheidet sich Lernsystem Pro vom Lernsystem Basic?",
      answer:
        "Lernsystem Pro baut auf den Grundlagen von Lernsystem Basic auf und bietet erweiterte, tiefere Einblicke und Techniken für fortgeschrittene Lerner. Es ist speziell dafür konzipiert, um komplexere und anspruchsvollere akademische Herausforderungen zu meistern und richtet sich an diejenigen, die zu den Top 5% gehören möchten.",
    },
    {
        id: 2,
        question: "Ist das Lernsystem Pro für alle Studienrichtungen geeignet?",
        answer:
          "Ja, das Lernsystem Pro ist universell einsetzbar und für alle Studienrichtungen geeignet. Es bietet fortgeschrittene Techniken und Strategien, die in jeder Disziplin angewendet werden können, um komplexe Konzepte und Aufgaben zu meistern."
      },
      {
        id: 3,
        question: "Wie viel Zeit muss ich investieren, um Ergebnisse mit Lernsystem Pro zu sehen?",
        answer:
          "Die Zeit, die benötigt wird, um Ergebnisse zu sehen, kann variieren, aber viele Nutzer berichten von signifikanten Verbesserungen innerhalb weniger Wochen. Die Effizienz des Lernsystems ermöglicht es Ihnen, schneller und tiefer zu lernen, was zu schnelleren Fortschritten führt.",
      },
      {
        id: 4,
        question: "Kann ich Lernsystem Pro nutzen, wenn ich bereits ein fortgeschrittener Lerner bin?",
        answer:
          "Absolut. Lernsystem Pro ist ideal für fortgeschrittene Lerner, die ihre Fähigkeiten weiter verbessern und herausfordernde akademische Ziele erreichen möchten. Es bietet spezialisierte Ressourcen und Techniken, die auf hohem Niveau konzipiert sind.",
      },
      {
        id: 5,
        question: "Bietet Lernsystem Pro individuelle Unterstützung oder Anpassungen?",
        answer:
          "Ja, ein Hauptmerkmal von Lernsystem Pro ist seine Anpassungsfähigkeit. Es bietet individuell anpassbare Lern-Templates, die auf Ihre spezifischen Bedürfnisse und Ziele zugeschnitten sind, um maximale Effizienz und Wirksamkeit zu gewährleisten.",
      },
      {
        id: 6,
        question: "Gibt es einen Support oder eine Community für Nutzer des Lernsystem Pro?",
        answer:
          "Ja, wir bieten eine umfassende Unterstützung und eine engagierte Community für Nutzer des Lernsystem Pro. Dies umfasst Zugang zu Experten, Austauschmöglichkeiten mit anderen Lernenden und kontinuierliche Updates des Systems.",
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
            Du konntest die gesuchte Antwort nicht finden? Dann wende dich an unser Customer Support Team.
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
  