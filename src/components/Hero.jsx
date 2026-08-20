import { ArrowRight } from 'lucide-react'
import { Button } from './ui/button'
import { Marquee } from './ui/marquee'
import Reveal from './Reveal'
import { hero, profile } from '../data/portfolio'
import portrait from '../assets/kaushal_nepal_image.jpg'

const AGENT_COLORS = {
  chat: 'bg-leaf',
  search: 'bg-sky',
  rag: 'bg-sun',
  coding: 'bg-melon',
  'pdf / doc': 'bg-grape',
}

function Title() {
  const words = hero.title.split(' ')
  return (
    <h1 className="text-[clamp(2.6rem,7vw,4.4rem)] font-bold leading-[1.02]">
      {words.map((word, i) => {
        const highlight = hero.highlights.find((h) => h.word === word.replace(/\./g, ''))
        if (highlight) {
          return (
            <span
              key={i}
              className={`${highlight.color} box-decoration-clone underline decoration-4 underline-offset-4`}
            >
              {word}
            </span>
          )
        }
        return <span key={i}>{word} </span>
      })}
    </h1>
  )
}

function Diagram() {
  const agents = ['chat', 'search', 'rag', 'coding', 'pdf / doc']
  return (
    <svg viewBox="0 0 440 300" role="img" aria-label="Supervisor node routing requests to specialist agents" className="w-full">
      <g className="font-mono">
        <rect x="14" y="132" width="112" height="40" rx="10" className="fill-melon stroke-ink" strokeWidth="2.5" />
        <text x="70" y="156" textAnchor="middle" fontSize="11" fill="#1c1917" fontWeight="600">
          supervisor
        </text>

        {agents.map((agent, i) => {
          const y = 20 + i * 56
          return (
            <g key={agent}>
              <rect
                x="300"
                y={y}
                width="112"
                height="36"
                rx="9"
                className={`${AGENT_COLORS[agent]} stroke-ink`}
                strokeWidth="2"
              />
              <text x="356" y={y + 22} textAnchor="middle" fontSize="11" fill="#ffffff" fontWeight="600">
                {agent}
              </text>
            </g>
          )
        })}

        {[
          'M126,140 C210,140 210,38 300,38',
          'M126,148 C210,148 210,94 300,94',
          'M126,152 C210,152 210,150 300,150',
          'M126,156 C210,156 210,206 300,206',
          'M126,164 C210,164 210,262 300,262',
        ].map((d, i) => (
          <path key={i} d={d} fill="none" stroke="#1c1917" strokeWidth="2" strokeDasharray="5 5" opacity="0.55" />
        ))}

        {[1.5, 1.9, 2.3].map((begin, i) => (
          <circle key={i} r="3.5" className="fill-leaf">
            <animateMotion
              dur="2.4s"
              begin={`${begin}s`}
              repeatCount="indefinite"
              path={['M126,140 C210,140 210,38 300,38', 'M126,152 C210,152 210,150 300,150', 'M126,164 C210,164 210,262 300,262'][i]}
            />
          </circle>
        ))}
      </g>
    </svg>
  )
}

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b-2 border-ink bg-cream">
      <div className="wrap pb-16 pt-14 md:pt-20">
        <div className="grid items-start gap-12 md:grid-cols-[1.15fr_0.85fr]">
          <div>
            <span className="chip bg-sun">{hero.eyebrow}</span>
            <Title />
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-ink-soft">{hero.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              {hero.ctas.map((cta) => (
                <Button
                  key={cta.href}
                  asChild
                  variant={cta.variant === 'solid' ? 'default' : 'outline'}
                  className={
                    cta.variant === 'solid'
                      ? 'border-2 border-ink bg-leaf font-mono text-xs font-semibold uppercase tracking-wide text-ink shadow-hard hover:-translate-y-0.5 hover:bg-leaf'
                      : 'border-2 border-ink bg-paper font-mono text-xs font-semibold uppercase tracking-wide shadow-hard hover:-translate-y-0.5 hover:bg-sun'
                  }
                >
                  <a href={cta.href}>
                    {cta.label}
                    {cta.label !== 'Say hello' && <ArrowRight className="size-4" />}
                  </a>
                </Button>
              ))}
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-xs md:max-w-none">
            <div className="absolute -left-4 -top-4 size-full border-2 border-ink bg-sky" aria-hidden="true" />
            <figure className="relative rotate-2 border-2 border-ink bg-paper p-3 pb-0 shadow-hard-lg transition-transform duration-200 hover:rotate-0">
              <div className="overflow-hidden border-2 border-ink">
                <img src={portrait} alt={`${profile.name}, backend and AI engineer`} className="aspect-[4/5] w-full object-cover" />
              </div>
              <figcaption className="flex items-center justify-between px-1 py-3 font-mono text-xs">
                <span className="font-semibold">{profile.name}</span>
                <span className="text-ink-soft">Nepal 🇳🇵</span>
              </figcaption>
              <span className="sticker absolute -left-5 top-10 -rotate-6 bg-melon">backend</span>
              <span className="sticker absolute -right-4 top-24 rotate-6 bg-sun">AI</span>
              <span className="sticker absolute -bottom-4 right-6 rotate-3 bg-leaf">LangGraph</span>
            </figure>
          </div>
        </div>

        <Reveal className="mt-16">
          <div className="border-2 border-ink bg-paper p-4 shadow-hard-sm sm:p-6">
            <div className="mb-2 flex items-center justify-between border-b-2 border-dashed border-ink pb-2 font-mono text-xs uppercase tracking-widest text-ink-soft">
              <span>system map — multi-agent runtime</span>
              <span className="hidden sm:inline text-leaf">● live</span>
            </div>
            <Diagram />
          </div>
        </Reveal>
      </div>

      <div className="border-t-2 border-ink bg-ink py-3">
        <Marquee speed="normal" pauseOnHover className="[--gap:2.5rem]">
          {hero.marquee.map((item) => (
            <span
              key={item}
              className="flex items-center gap-6 font-mono text-sm uppercase tracking-widest text-cream"
            >
              {item} <span className="text-melon">✦</span>
            </span>
          ))}
        </Marquee>
      </div>
    </section>
  )
}