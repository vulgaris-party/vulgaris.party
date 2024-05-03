const cards = [
  {
    title: 'Manifesto',
  },
  {
    title: 'Documentation',
  },
  {
    title: 'Support',
  },
  {
    title: 'GitHub',
  },
];

export default function Home() {
  return (
    <main className='min-h-screen px-3 bg-gradient-to-t from-black to-purple-950 '>
      <div className='min-h-screen max-w-6xl mx-auto py-28 flex flex-col justify-between items-start gap-12'>
        <div>
          <a className='text-lg font-medium' href='/'>
            vulgaris.party
          </a>
        </div>
        <div>
          <h2 className='text-2xl font-special'>
            Open source politics for common people
          </h2>
        </div>
        <div className='grid gap-8 text-center lg:mb-0 lg:w-full lg:grid-cols-4 lg:text-left'>
          {cards.map(({ title }) => {
            return (
              <div
                key={title}
                className='p-8 border rounded-md transition-all duration-500 hover:bg-foreground/10 hover:border-foreground'
              >
                <h2 className='text-lg font-semibold'>{title}</h2>
              </div>
            );
          })}
        </div>
      </div>
    </main>
  );
}
