import { StarIcon } from '@heroicons/react/20/solid'

const reviews = [
  {
    id: 1,
    title: "Pulvinar etiam lacus volutpat eu",
    rating: 5,
    content: `
      <p>Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.</p>
    `,
    author: 'Stefan M',
    date: 'Nov 24, 2023',
    datetime: '2023-11-24',
  },
  {
    id: 1,
    title: "Turpis tortor quis scelerisque diam id",
    rating: 5,
    content: `
      <p>Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.</p>
    `,
    author: 'Svenja S.',
    date: 'Nov 23, 2023',
    datetime: '2023-11-23',
  },
  {
    id: 1,
    title: "Commodo nec sagittis tortor mauris sed",
    rating: 5,
    content: `
      <p>Commodo nec sagittis tortor mauris sed. Turpis tortor quis scelerisque diam id accumsan nullam tempus. Pulvinar etiam lacus volutpat eu. Phasellus praesent ligula sit faucibus.</p>
    `,
    author: 'Marcel W.',
    date: 'Nov 22, 2023',
    datetime: '2023-11-22',
  },
  // More reviews...
]

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Reviews() {
  return (
    <section>
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
      <div className="text-center">
            <h2 className="text-4xl font-caveat leading-8 tracking-tight text-blue-600">Reviews</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
              Was andere zu unserem Lernsystem sagen
            </p>
          </div>
        <div className="mt-6 space-y-10 divide-y divide-gray-200 dark:divide-white/10 border-b border-t border-gray-200 dark:border-white/10 pb-10">
          {reviews.map((review) => (
            <div key={review.id} className="pt-10 lg:grid lg:grid-cols-12 lg:gap-x-8">
              <div className="lg:col-span-8 lg:col-start-5 xl:col-span-9 xl:col-start-4 xl:grid xl:grid-cols-3 xl:items-start xl:gap-x-8">
                <div className="flex items-center xl:col-span-1">
                  <div className="flex items-center">
                    {[0, 1, 2, 3, 4].map((rating) => (
                      <StarIcon
                        key={rating}
                        className={classNames(
                          review.rating > rating ? 'text-yellow-400' : 'text-gray-200',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <p className="ml-3 text-sm text-gray-700 dark:text-gray-400">
                    {review.rating}
                    <span className="sr-only"> out of 5 stars</span>
                  </p>
                </div>

                <div className="mt-4 lg:mt-6 xl:col-span-2 xl:mt-0">
                  <h3 className="text-lg font-medium text-gray-900 dark:text-white">{review.title}</h3>

                  <div
                    className="mt-3 space-y-6 text-sm text-gray-500 dark:text-gray-400"
                    dangerouslySetInnerHTML={{ __html: review.content }}
                  />
                </div>
              </div>

              <div className="mt-6 flex items-center lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:mt-0 lg:flex-col lg:items-start xl:col-span-3">
                <p className="text-lg font-medium text-gray-900 dark:text-white">{review.author}</p>
                <time
                  dateTime={review.datetime}
                  className="ml-4 border-l text-sm border-gray-200 pl-4 text-gray-500 dark:text-gray-400 lg:ml-0 lg:mt-2 lg:border-0 lg:pl-0"
                >
                  {review.date}
                </time>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
