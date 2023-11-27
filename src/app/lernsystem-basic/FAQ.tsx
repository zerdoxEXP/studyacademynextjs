const faqs = [
    {
      question: 'Benötige ich spezielle Vorkenntnisse, um das Lernsystem Basic zu nutzen?',
      answer:
        'Nein, spezielle Vorkenntnisse sind nicht erforderlich. Das Lernsystem Basic ist so konzipiert, dass es leicht verständlich und für jeden zugänglich ist, unabhängig vom Bildungsstand oder der Vorerfahrung mit ähnlichen Systemen.',
    },
    {
        question: 'Wie schnell kann ich Ergebnisse sehen, nachdem ich mit dem Lernsystem Basic begonnen habe?',
        answer:
          'Viele Nutzer berichten, dass sie bereits innerhalb der ersten Wochen positive Veränderungen in ihrem Lernverhalten und ihren Prüfungsergebnissen bemerken. Die Geschwindigkeit der Ergebnisse kann jedoch individuell variieren, da sie von verschiedenen Faktoren wie dem persönlichen Engagement und der bisherigen Lernerfahrung abhängt.',
      },
      {
        question: 'Was unterscheidet Lernsystem Basic von anderen Lernprogrammen?',
        answer:
          'Das Lernsystem Basic unterscheidet sich durch seine einzigartige Kombination aus wissenschaftlich fundierten Lernmethoden und modernster Technik. Wir bieten strukturierte, praxiserprobte Techniken an, die auf jahrelanger Forschung und Erfahrung basieren und durch Tools wie Notion unterstützt werden. Dieses System ist speziell darauf ausgerichtet, Lernenden zu helfen, schnell und effizient zu lernen.',
      },
      {
        question: 'Ist das Lernsystem Basic auch für Schüler geeignet?',
        answer:
          'Ja, absolut! Obwohl Lernsystem Basic primär für Studierende entwickelt wurde, profitieren auch Schüler erheblich von den angebotenen Techniken. Es hilft, Lerninhalte effektiver zu verarbeiten und zu behalten, was für jede Altersgruppe und Bildungsstufe von Vorteil ist.',
      },
      {
        question: 'Kann ich das Lernsystem Basic auch neben einem Vollzeitstudium oder einer Vollzeitbeschäftigung nutzen?',
        answer:
          'Ja, das Lernsystem Basic ist ideal für Personen mit einem vollen Zeitplan. Es ist flexibel und so gestaltet, dass es sich leicht in den Alltag integrieren lässt. Die Techniken sind darauf ausgerichtet, die Lerneffizienz zu maximieren, was bedeutet, dass Sie auch mit begrenzter Zeit große Fortschritte erzielen können.',
      },
      {
        question: 'Gibt es eine Geld-zurück-Garantie, falls ich mit dem Lernsystem Basic nicht zufrieden bin?',
        answer:
          'Ja, wir bieten eine Zufriedenheitsgarantie. Wenn Sie innerhalb eines bestimmten Zeitraums nach dem Kauf feststellen, dass das Lernsystem Basic nicht Ihren Erwartungen entspricht, können Sie eine vollständige Rückerstattung beantragen. Details hierzu finden Sie in unseren Nutzungsbedingungen.',
      },
    // More questions...
  ]
  
  export default function FAQ() {
    return (
      <section>
        <div className="mx-auto max-w-7xl px-6 pb-24 sm:pt-16 lg:px-8 lg:pb-40">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-bold leading-10 tracking-tight text-gray-900 dark:text-white">Häufige Fragen</h2>
              <p className="mt-4 text-lg leading-7 text-gray-600 dark:text-gray-400">
              Du konntest die gesuchte Antwort nicht finden? Dann wende dich an unser {' '}
                <a href="/" className="font-semibold text-blue-600 hover:text-blue-500">
                  Customer Support
                </a>{' '}
                Team.
              </p>
            </div>
            <div className="mt-10 lg:col-span-7 lg:mt-0">
              <dl className="space-y-10">
                {faqs.map((faq) => (
                  <div key={faq.question}>
                    <dt className="text-lg font-semibold leading-7 text-gray-900 dark:text-white">{faq.question}</dt>
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
  