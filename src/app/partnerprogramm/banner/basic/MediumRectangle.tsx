import Head from 'next/head';

export default function MediumRectangle() {
  return (
    <div className="mt-8 container mx-auto px-4">
      <main className="grid grid-cols-5 gap-8">
        <div className="col-span-2 p-4">
          <h1 className="text-3xl font-bold dark:text-white">300 x 250 Banner</h1>
          <p className="mt-2 text-gray-600 dark:text-gray-400">Hier ist etwas Text auf der linken Seite des Layouts. Hier ist etwas Text auf der linken Seite des Layouts.</p>
          <p className="text-gray-600 dark:text-gray-400">Hier ist etwas Text auf der linken Seite des Layouts. Hier ist etwas Text auf der linken Seite des Layouts.</p>
        </div>
        <div className="col-span-3 flex justify-between gap-4">
          <img src="/images/partner/Banner/300-250-banner.jpg" alt="Banner 1" className="aspect-video w-1/3" />
          <img src="/images/partner/Banner/300-250-banner.jpg" alt="Banner 2" className="aspect-video w-1/3" />
          <img src="/images/partner/Banner/300-250-banner.jpg" alt="Banner 3" className="aspect-video w-1/3" />
        </div>
      </main>
    </div>
  );
}