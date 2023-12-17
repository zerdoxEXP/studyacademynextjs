const faqs = [
    {
      id: 1,
      question: "Benötige ich spezielle Vorkenntnisse, um das Lernsystem Basic zu nutzen?",
      answer: "Nein, spezielle Vorkenntnisse sind nicht erforderlich. Das Lernsystem Basic ist so konzipiert, dass es leicht verständlich und für jeden zugänglich ist, unabhängig vom Bildungsstand oder der Vorerfahrung mit ähnlichen Systemen.",
    },
    {
        id: 2,
        question: "Wie schnell kann ich Ergebnisse sehen, nachdem ich mit dem Lernsystem Basic begonnen habe?",
        answer: "Viele Nutzer berichten, dass sie bereits innerhalb der ersten Wochen positive Veränderungen in ihrem Lernverhalten und ihren Prüfungsergebnissen bemerken. Die Geschwindigkeit der Ergebnisse kann jedoch individuell variieren, da sie von verschiedenen Faktoren wie dem persönlichen Engagement und der bisherigen Lernerfahrung abhängt.",
      },
      {
        id: 3,
        question: "Was unterscheidet Lernsystem Basic von anderen Lernprogrammen?",
        answer:
          "Das Lernsystem Basic unterscheidet sich durch seine einzigartige Kombination aus wissenschaftlich fundierten Lernmethoden und modernster Technik. Wir bieten strukturierte, praxiserprobte Techniken an, die auf jahrelanger Forschung und Erfahrung basieren und durch Tools wie Notion unterstützt werden. Dieses System ist speziell darauf ausgerichtet, Lernenden zu helfen, schnell und effizient zu lernen.",
      },
      {
        id: 4,
        question: "Ist das Lernsystem Basic auch für Schüler geeignet?",
        answer:
          "Ja, absolut! Obwohl Lernsystem Basic primär für Studierende entwickelt wurde, profitieren auch Schüler erheblich von den angebotenen Techniken. Es hilft, Lerninhalte effektiver zu verarbeiten und zu behalten, was für jede Altersgruppe und Bildungsstufe von Vorteil ist.",
      },
      {
        id: 5,
        question: "Kann ich das Lernsystem Basic auch neben einem Vollzeitstudium oder einer Vollzeitbeschäftigung nutzen?",
        answer:
          "Ja, das Lernsystem Basic ist ideal für Personen mit einem vollen Zeitplan. Es ist flexibel und so gestaltet, dass es sich leicht in den Alltag integrieren lässt. Die Techniken sind darauf ausgerichtet, die Lerneffizienz zu maximieren, was bedeutet, dass Sie auch mit begrenzter Zeit große Fortschritte erzielen können.",
      },
      {
        id: 6,
        question: "Gibt es eine Geld-zurück-Garantie, falls ich mit dem Lernsystem Basic nicht zufrieden bin?",
        answer:
          "Ja, wir bieten eine Zufriedenheitsgarantie. Wenn Sie innerhalb eines bestimmten Zeitraums nach dem Kauf feststellen, dass das Lernsystem Basic nicht Ihren Erwartungen entspricht, können Sie eine vollständige Rückerstattung beantragen. Details hierzu finden Sie in unseren Nutzungsbedingungen.",
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
          Hier findest du die wichtigsten Fragen zum Lernsystem Basic beantwortet.
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
  