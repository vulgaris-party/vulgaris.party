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
    <main className='min-h-screen px-3 bg-gradient-to-t from-black via-black to-purple-950 '>
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
        <div className='flex flex-col gap-4 max-w-prose'>
          <h3 className='text-lg font-semibold'>
            Welcome to vulgaris.party, the vulgar party. We stand for open
            source politics for common people. If that sounds interesting but
            vague, read on.
          </h3>
          <p className='font-light leading-7'>
            We’re a brand new political party in 2024, inspired by the{' '}
            <em>demokratia</em> of the ancient Greek <em>poleis</em> to bring
            more equity to modern democracy. We’re not a namby-pamby challenger
            party – you know the ones, they operate large mailing lists and
            complain about the status quo, but without every really explaining
            what they’d do instead.
          </p>
          <p className='font-light leading-7'>
            No, we’re not a party like that. We’re a long-term bet, fledgling
            for now, but committed to radical openness and a vision for
            government that’s 22nd century-ready. This manifesto is new and
            evolving, but here’s an idea of some of our values:
          </p>
          <h4 className='text-lg font-medium mt-4'>Open Source Government </h4>
          <p className='font-light leading-7'>
            Open source means everyone can see everything. It doesn’t mean
            everyone can contribute as they see fit; no, there’s a set of rules,
            and a review process to make
          </p>
          <h4 className='text-lg font-medium mt-4'>Modern Commandments</h4>
          <p className='font-light leading-7'>
            We’re not wedded to the Decalogue or the Seven Commandments of
            Animalism, but overall we quite like the idea of commandments as
            being a guiding principle for a government. Commandments should take
            a long time to design and a long time to change. They should be
            thought of as a party-agnostic framework for reasonable governance.
            Amendments should take multi-year reviews, multiple referendums and
            super majority support.
          </p>
          <h4 className='text-lg font-medium mt-4'>
            Anything But First Past the Post{' '}
          </h4>
          <p className='font-light leading-7'>
            That doesn’t necassarily mean proportional representation, but it
            wouldn’t be a bad place to start!
          </p>
        </div>
        <div className='grid gap-8 text-center lg:mb-0 lg:w-full lg:grid-cols-2 lg:text-left'>
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
