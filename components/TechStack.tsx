const techs = [
  { name: 'React',       color: '#61DAFB', letter: 'Re' },
  { name: 'Next.js',     color: '#000000', letter: 'N' },
  { name: 'Node.js',     color: '#339933', letter: 'No' },
  { name: 'MongoDB',     color: '#47A248', letter: 'M' },
  { name: 'TypeScript',  color: '#3178C6', letter: 'TS' },
  { name: 'Tailwind CSS',color: '#06B6D4', letter: 'TW' },
  { name: 'PostgreSQL',  color: '#4169E1', letter: 'PG' },
  { name: 'Redis',       color: '#DC382D', letter: 'Rd' },
  { name: 'Docker',      color: '#2496ED', letter: 'Dk' },
  { name: 'AWS',         color: '#FF9900', letter: 'AW' },
  { name: 'Vercel',      color: '#000000', letter: 'V' },
  { name: 'Git',         color: '#F05032', letter: 'Gt' },
];

function TechBadge({ name, color, letter }: { name: string; color: string; letter: string }) {
  return (
    <div className="flex items-center gap-3 px-5 py-3 bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-card transition-shadow duration-200 flex-shrink-0">
      <div
        className="w-8 h-8 rounded-lg flex items-center justify-center text-white font-bold text-xs"
        style={{ backgroundColor: color }}
      >
        {letter}
      </div>
      <span className="font-semibold text-slate-700 text-sm whitespace-nowrap">{name}</span>
    </div>
  );
}

export default function TechStack() {
  return (
    <section className="section bg-white overflow-hidden" id="tech-stack">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14">
          <span className="tag mb-4">Technology Stack</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-5">
            Built with the{' '}
            <span className="gradient-text">Best Tools</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We use modern, battle-tested technologies to build fast, secure, and maintainable software.
          </p>
        </div>

        {/* Marquee row 1 */}
        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="overflow-hidden">
            <div className="flex gap-4 animate-marquee marquee-track w-max">
              {[...techs, ...techs].map((t, i) => (
                <TechBadge key={`${t.name}-${i}`} {...t} />
              ))}
            </div>
          </div>
        </div>

        {/* Marquee row 2 (reverse) */}
        <div className="relative mt-4">
          <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
          <div className="overflow-hidden">
            <div className="flex gap-4 animate-marquee marquee-track w-max" style={{ animationDirection: 'reverse', animationDuration: '22s' }}>
              {[...techs.slice(6), ...techs, ...techs.slice(0, 6)].map((t, i) => (
                <TechBadge key={`rev-${t.name}-${i}`} {...t} />
              ))}
            </div>
          </div>
        </div>

        {/* Bottom note */}
        <p className="text-center text-slate-400 text-sm mt-10">
          + Many more tools & frameworks based on your project requirements
        </p>
      </div>
    </section>
  );
}
