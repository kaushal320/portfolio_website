import Reveal from './Reveal'
import { Marquee } from './ui/marquee'
import { skills } from '../data/portfolio'

const ACCENTS = ['bg-leaf', 'bg-sun', 'bg-sky', 'bg-melon', 'bg-grape']

export default function Skills() {
  const allTags = skills.categories.flatMap((c) => c.tags)

  return (
    <section id="skills" className="section border-b-2 border-ink bg-ink text-cream">
      <Reveal className="wrap">
        <div className="mb-12">
          <span className="chip bg-sun">{skills.eyebrow}</span>
          <h2 className="mt-4 text-[clamp(1.9rem,4vw,2.8rem)]">{skills.title}</h2>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.categories.map((category, i) => (
            <div
              key={category.name}
              className={`${ACCENTS[i % ACCENTS.length]} border-2 border-ink p-6 text-ink shadow-hard-sm transition-transform hover:-translate-y-1`}
            >
              <div className="flex items-center justify-between border-b-2 border-dashed border-ink pb-3">
                <h3 className="font-mono text-xs font-bold uppercase tracking-widest">
                  {category.name}
                </h3>
                <span className="font-display text-2xl font-bold leading-none opacity-40">0{i + 1}</span>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
                {category.tags.map((tag) => (
                  <span
                    key={tag}
                    className="border-2 border-ink bg-paper/90 px-2.5 py-1 font-mono text-[0.78rem] shadow-hard-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Reveal>

      <div className="mt-14 border-t-2 border-cream/20 py-3">
        <Marquee speed="slow" reverse pauseOnHover className="[--gap:2.5rem]">
          {allTags.map((tag) => (
            <span key={tag} className="flex items-center gap-6 font-mono text-sm uppercase tracking-widest text-cream/70">
              {tag} <span className="text-sun">◆</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}