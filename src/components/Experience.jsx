import Reveal from './Reveal'
import { Badge } from './ui/badge'
import { experience } from '../data/portfolio'

const ACCENTS = ['bg-leaf', 'bg-sky', 'bg-sun', 'bg-melon']

export default function Experience() {
  return (
    <section id="experience" className="section border-b-2 border-ink bg-cream">
      <Reveal className="wrap">
        <div className="mb-12">
          <span className="chip bg-sky">{experience.eyebrow}</span>
          <h2 className="mt-4 text-[clamp(1.9rem,4vw,2.8rem)]">{experience.title}</h2>
        </div>

        <ol className="relative ml-3 border-l-2 border-ink pl-8 md:ml-6">
          {experience.items.map((item, i) => (
            <li key={item.company} className="relative pb-12 last:pb-0">
              <span
                className={`absolute -left-[45px] top-1 grid size-6 place-items-center rounded-full border-2 border-ink ${ACCENTS[i % ACCENTS.length]} font-mono text-[0.6rem] font-bold md:-left-[45px]`}
              >
                {i + 1}
              </span>
              <div className="border-2 border-ink bg-paper p-6 shadow-hard-sm transition-transform hover:-translate-y-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="font-display text-xl font-bold">{item.company}</h3>
                  <Badge
                    className={`border-2 border-ink ${ACCENTS[i % ACCENTS.length]} font-mono text-[0.65rem] font-semibold uppercase tracking-wide text-ink`}
                  >
                    {item.date}
                  </Badge>
                </div>
                <p className="mt-1 font-mono text-xs uppercase tracking-wide text-ink-soft">{item.role}</p>
                <ul className="mt-4 space-y-2">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3 text-[0.95rem] leading-relaxed text-ink-soft">
                      <span className="mt-2 size-2 shrink-0 rotate-45 bg-leaf" aria-hidden="true" />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  )
}