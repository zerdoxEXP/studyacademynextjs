import Image from 'next/image';

const testimonials = [
    {
      body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
      author: {
        name: 'Laborum Quis',
        handle: 'xxxx',
        imageUrl:
          '/images/example-author.jpg',
      },
    },
    {
      body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
      author: {
        name: 'Laborum Quis',
        handle: 'xxxx',
        imageUrl:
          '/images/example-author.jpg',
      },
    },
    {
      body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
      author: {
        name: 'Laborum Quis',
        handle: 'xxxx',
        imageUrl:
          '/images/example-author.jpg',
      },
    },
    {
      body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
      author: {
        name: 'Laborum Quis',
        handle: 'xxxx',
        imageUrl:
          '/images/example-author.jpg',
      },
    },
    {
      body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
      author: {
        name: 'Laborum Quis',
        handle: 'xxxx',
        imageUrl:
          '/images/example-author.jpg',
      },
    },
    {
      body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
      author: {
        name: 'Laborum Quis',
        handle: 'xxxx',
        imageUrl:
          '/images/example-author.jpg',
      },
    },
    {
      body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
      author: {
        name: 'Laborum Quis',
        handle: 'xxxx',
        imageUrl:
          '/images/example-author.jpg',
      },
    },
    {
      body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
      author: {
        name: 'Laborum Quis',
        handle: 'xxxx',
        imageUrl:
          '/images/example-author.jpg',
      },
    },
    {
      body: 'Laborum quis quam. Dolorum et ut quod quia. Voluptas numquam delectus nihil. Aut enim doloremque et ipsam.',
      author: {
        name: 'Laborum Quis',
        handle: 'xxxx',
        imageUrl:
          '/images/example-author.jpg',
      },
    },
    // More testimonials...
  ]
  
  export default function Testimonials() {
    return (
      <section>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto flow-root max-w-2xl lg:mx-0 lg:max-w-none">
            <div className="-mt-8 sm:-mx-4 sm:columns-2 sm:text-[0] lg:columns-3">
              {testimonials.map((testimonial) => (
                <div key={testimonial.author.handle} className="pt-8 sm:inline-block sm:w-full sm:px-4">
                  <figure className="rounded-2xl bg-gray-50 dark:bg-white/5 p-8 text-sm leading-6">
                    <blockquote className="text-gray-900 dark:text-gray-300">
                      <p>{`“${testimonial.body}”`}</p>
                    </blockquote>
                    <figcaption className="mt-6 flex items-center gap-x-4">
                      <Image
                      width={40}
                      height={40}
                      className="h-10 w-10 rounded-full bg-gray-50"
                      src={testimonial.author.imageUrl}
                      alt="" />
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">{testimonial.author.name}</div>
                        <div className="text-gray-600 dark:text-gray-300">{`@${testimonial.author.handle}`}</div>
                      </div>
                    </figcaption>
                  </figure>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    )
  }
  