const featuredTestimonial = {
    body: 'Ich habe das Lernsystem Basic gestern durchgearbeitet und möchte dir mein Feedback mitteilen. Ich finde das Lernsystem Basic bereits sehr hilfreich! Danke dir!! Ich habe meine Fehler erkannt und kann nun viel besser daran arbeiten. Ich hoffe, bald ein Profi im Lernen zu werden. Ich habe mir jetzt das Lernsystem Pro gekauft und freue mich auf die Vertiefung.',
    author: {
      name: 'Sahra',
      handle: 'Mitglied seit Januar 2024',
    },
  }
  const testimonials = [
    [
      [
        {
          body: 'Ich bin Marc, 24 Jahre alt und studiere derzeit Medizin und im Master Humanbiologie mit dem Schwerpunkt in der Tumorbiologie. Ich habe zwar bereits einen Bachelor in der Biologie, allerdings habe ich es seit Beginn des Medizinstudiums mit einer deutlich größeren Stoffmenge zu tun. Dementsprechend war ich regelmäßig demotiviert und wusste nicht wie ich das ganze angehen soll. Ich habe zwar bereits mit flow maps gelernt, allerdings habe ich dabei einige Fehler gemacht. Mittlerweile habe ich das Lernsystem Basic und Pro durchgearbeitet und fühle mich bereits deutlich sicherer im Umgang mit dem Lernstoff. Ich bin nun total motiviert jeden Tag an mir zu arbeiten und mein Lernsystem zu optimieren. Ich habe also endlich das nötige Werkzeug bekommen um meine Ziele zu erreichen!',
          author: {
            name: 'Marc',
            handle: 'Mitglied seit Januar 2024',
          },
        },
        {
          body: 'Hey Henry ich wollte dir nur mal sagen dein Kurs ist echt hammer geworden! Ich hab mir beide Teile geholt und durchgearbeitet und du hast für 200€ das verkauft, wo andere 2000€ für haben wollen! Ich war wirklich sehr begeistert mach weiter so',
          author: {
            name: 'Wilhelm',
            handle: 'Mitglied seit Januar 2024',
          },
        },
        // More testimonials...
      ],
      [
        {
          body: 'Ich bin stolz, dass ich den Kurs komplett durchgezogen habe, mir nebenbei insgesamt 42 Good notes Seiten mitgeschrieben habe und ich sowas von happy bin, dass ich diesen Schritt gemacht habe. Mein Mindset und die Motivation zum Lernen haben sich so heftig gesteigert. Allein schon die forest app gibt mir einen weiteren Grund zu lernen - neben dem Erhalten von Informationen, Konzepte und dem Erreichen meiner Ziele. Ich bin so gespannt, was jetzt folgt und wie mich diese Methoden und Ideen unterstützen, auf das ich vllt in ein paar Monaten echte Erfolge erkennen kann. Danke Henrv!!!',
          author: {
            name: 'Jannes',
            handle: 'Mitglied seit Januar 2024',
          },
        },
        {
          body: 'Habe es mit dem Lernsystem geschafft in VWL II eine 1,3 zu schreiben.',
          author: {
            name: 'Jonas',
            handle: 'Mitglied seit Januar 2024',
          },
        },
        // More testimonials...
      ],
    ],
    [
      [
        {
          body: 'Ich halte mich nicht mehr an unwichtigen Details auf und versuche alles zu hinterfragen um ein besseres Verständnis zu bekommen. Die Videos sind sehr gut uns Verständlich und von der länge super! Ebenfalls gehe ich deutlich Entspannter in die Klausuren !',
          author: {
            name: 'Christin',
            handle: 'Mitglied seit Januar 2024',
          },
        },
        {
          body: 'Das Programm hat mir vor allem beim Zeitmanagement geholfen. Ich persönlich neige dazu, zu prokrastinieren, da ich oft das Gefühl habe, nicht gut genug zu sein, obwohl ich einen Schnitt von 1,1 habe. Die Verwendung von Notion hat mir ebenfalls geholfen. Durch Effizienzsteigerungen benötige ich nun weniger Zeit für Aufgaben. Ein konkretes Beispiel hierfür ist die Verfassung meiner Abschlussarbeit, die ich innerhalb von fünf Tagen abschließen konnte, während ich zuvor dafür üblicherweise drei Wochen benötigt hätte.',
          author: {
            name: 'Edwina',
            handle: 'Mitglied seit Januar 2024',
          },
        },
        // More testimonials...
      ],
      [
        {
          body: 'Ich bin gerade dabei dein Lernsystem basic durchzuarbeiten. Eigentlich bin ich schon immer ein sehr guter Schüler (aktuell 10. Jgst. am Gym), weil ich alles schnell verstehe und leicht auswendig lernen kann, allerdings hilft mir dein Lernsystem gerade einfach enorm meine Lernzeit zu verkürzen und mein Verständnis weiter auszubauen. Ich finde es auch mega interessant zu lernen wie unser Gehirn funktioniert und wie man dieses Wissen konkret nutzen kann, um seine Lerneinheiten produktiver zu gestalten. Gut gefällt mir, dass du im Kurs alles immer so kurz wie möglich auf den Punkt bringst. Dabei helfen auch die Zusammenfassungen unter den Videos mega um den Inhalt nochmal durchzugehen und zusammenzu-fassen. Danke, dass du mir hilfst mich in einem meiner zentralen Lebensbereichen zu verbessern!',
          author: {
            name: 'Felix',
            handle: 'Mitglied seit Januar 2024',
          },
        },
          {
            body: 'Ich habe nun alle Lektionen durchgearbeitet und mir fast 45 Seiten Notizen gemacht. Ich hatte so viele Aha-Momente! Wow! Danke für die mega Einsichten! Ich habe jetzt so viele gute Tools an der Hand bekommen, dass ich mich sogar auf die Module freue, die mir nicht so liegen.',
            author: {
              name: 'Arleny',
              handle: 'Mitglied seit Januar 2024',
            },
          },
        // More testimonials...
      ],
    ],
  ]
  
  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }
  
  export default function Testimonials() {
    return (
    <section id="Testimonials">
      <div className="relative isolate pt-24 sm:pt-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="font-caveat text-2xl sm:text-4xl font-medium leading-7 text-teal-600 dark:text-teal-500">Testimonials</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Was sagen Kursteilnehmer zum Lernsystem Pro+?
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 grid-rows-1 gap-8 text-sm leading-6 text-gray-900 sm:mt-20 sm:grid-cols-2 xl:mx-0 xl:max-w-none xl:grid-flow-col xl:grid-cols-4">
            <figure className="rounded-2xl bg-white dark:bg-slate-800 shadow-lg ring-1 ring-gray-900/5 sm:col-span-2 xl:col-start-2 xl:row-end-1">
              <blockquote className="p-6 text-lg font-semibold leading-7 tracking-tight text-gray-900 dark:text-white sm:p-12 sm:text-xl sm:leading-8">
                <p>{`“${featuredTestimonial.body}”`}</p>
              </blockquote>
              <figcaption className="flex flex-wrap items-center gap-x-4 gap-y-4 border-t border-gray-900/10 px-6 py-4 sm:flex-nowrap">
                <div className="flex-auto">
                  <div className="font-semibold dark:text-white">{featuredTestimonial.author.name}</div>
                  <div className="text-gray-600">{`${featuredTestimonial.author.handle}`}</div>
                </div>
              </figcaption>
            </figure>
            {testimonials.map((columnGroup, columnGroupIdx) => (
              <div key={columnGroupIdx} className="space-y-8 xl:contents xl:space-y-0">
                {columnGroup.map((column, columnIdx) => (
                  <div
                    key={columnIdx}
                    className={classNames(
                      (columnGroupIdx === 0 && columnIdx === 0) ||
                        (columnGroupIdx === testimonials.length - 1 && columnIdx === columnGroup.length - 1)
                        ? 'xl:row-span-2'
                        : 'xl:row-start-1',
                      'space-y-8'
                    )}
                  >
                    {column.map((testimonial) => (
                      <figure
                        key={testimonial.author.handle}
                        className="rounded-2xl bg-white dark:bg-slate-800 p-6 shadow-lg ring-1 ring-gray-900/5"
                      >
                        <blockquote className="text-gray-900 dark:text-white">
                          <p>{`“${testimonial.body}”`}</p>
                        </blockquote>
                        <figcaption className="mt-6 flex items-center gap-x-4">
                          <div>
                            <div className="font-semibold dark:text-white">{testimonial.author.name}</div>
                            <div className="text-gray-600">{`${testimonial.author.handle}`}</div>
                          </div>
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
    )
  }
  