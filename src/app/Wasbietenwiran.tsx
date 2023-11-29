import Image from 'next/image';

const posts = [
    {
      id: 1,
      product: 'Kostenlose Hilfe',
      title: 'Du kannst in unserer Community deine Lernfrage an Experten stellen.',
      href: '/community',
      description:
        'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
      imageUrl:
        '/images/female-student.jpg',
    },
    {
        id: 2,
        product: 'Lernsystem Basic',
        title: 'Das ist eine Beschreibung des Lernsystem Basic',
        href: '/lernsystem-basic',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
          '/images/happy-students.jpg',
      },
      {
        id: 3,
        product: 'Lernsystem Pro',
        title: 'Das ist eine Beschreibung des Lernsystem Pro',
        href: '/lernsystem-pro',
        description:
          'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
          '/images/laptop-mockup.jpg',
      },
    // More posts...
  ]
  
  export default function Wasbietenwiran() {
    return (
        <section>
      <div className="pb-12 sm:pb-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-5xl">Was bieten wir mit der <span className="text-blue-600"> Study Academy</span> an?🤷</h2>
            <p className="mt-2 text-lg leading-8 text-gray-600 dark:text-gray-400">
              Learn how to grow your business with our expert advice.
            </p>
          </div>
          <div className="mx-auto mt-16 grid max-w-2xl auto-rows-fr grid-cols-1 gap-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts.map((post) => (
              <div
                key={post.id}
                className="relative isolate flex flex-col justify-end overflow-hidden bg-white dark:bg-gray-900 dark:border-gray-900 border-white px-8 pb-12 pt-80 sm:pt-48 lg:pt-80"
              >
                <Image
                src={post.imageUrl}
                alt=""
                className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-gray-900 overflow-hidden object-cover rounded-2xl"
                width={768}
                height={800}
                />
                <div className="absolute inset-0 -z-10 rounded-2xl bg-gradient-to-t from-gray-900 via-gray-900/40" />
  
                <div className="flex flex-row gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
                  <p className="text-3xl font-semibold text-white mr-8">{post.product}</p>
                </div>
                <h3 className="mt-3 text-lg leading-6 text-white">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
              </div>
            ))}
          </div>
        </div>
      </div>
      </section>
    )
  }
  