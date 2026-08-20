import Reveal from './Reveal'
import { TextGradient } from './ui/text-gradient'
import { about } from '../data/portfolio'

export default function About() {
  return (
    <section id="about" className="section border-b-2 border-ink bg-paper">
      <Reveal className="wrap">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="chip bg-leaf">{about.eyebrow}</span>
            <h2 className="mt-4 text-[clamp(1.9rem,4vw,2.8rem)]">
              Backend systems, wired for{' '}
              <TextGradient
                baseColor="var(--color-ink)"
                highlightColor="var(--color-leaf)"
                spread={26}
                duration={3}
              >
                agents.
              </TextGradient>
            </h2>
          </div>
          <span className="hidden font-mono text-xs uppercase tracking-widest text-ink-soft md:block">
            since 2022 / kathmandu
          </span>
        </div>

        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <p className="text-lg leading-relaxed text-ink-soft">{about.body}</p>
            <div className="mt-10 grid grid-cols-3 gap-4">
              {about.stats.map((stat) => (
                <div
                  key={stat.label}
                  className={`${stat.accent} border-2 border-ink p-4 text-center shadow-hard-xs transition-transform hover:-translate-y-1`}
                >
                  <div className="font-display text-2xl font-bold leading-none md:text-3xl">{stat.value}</div>
                  <div className="mt-1 font-mono text-[0.65rem] uppercase tracking-wider">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="border-2 border-ink bg-ink p-5 font-mono text-sm leading-relaxed text-cream shadow-hard-sm">
            <div className="mb-4 flex items-center gap-2">
              <span className="size-3 rounded-full bg-melon" />
              <span className="size-3 rounded-full bg-sun" />
              <span className="size-3 rounded-full bg-leaf" />
              <span className="ml-2 text-xs text-ink-soft">kaushal — bash</span>
            </div>
            {about.terminal.map((line, i) => (
              <div key={line} className="whitespace-pre-wrap break-words">
                {i === 0 ? (
                  <span className="text-melon">$ {line}</span>
                ) : (
                  <span className="text-leaf">▸</span>
                )}{' '}
                {i === 0 ? '' : line}
              </div>
            ))}
            <div className="mt-3 text-sky">
              <span className="animate-pulse">█</span>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}