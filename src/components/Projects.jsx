import { ArrowUpRight } from 'lucide-react'
import Reveal from './Reveal'
import { Badge } from './ui/badge'
import { GitHubIcon } from './icons'
import { projects } from '../data/portfolio'

const ACCENTS = ['bg-leaf', 'bg-melon', 'bg-sky', 'bg-sun', 'bg-grape']

function ProjectCard({ project, index }) {
  const accent = ACCENTS[index % ACCENTS.length]
  return (
    <article className="group flex flex-col border-2 border-ink bg-paper shadow-hard-sm transition-transform hover:-translate-y-1.5 hover:shadow-hard">
      <div className={`flex items-center justify-between border-b-2 border-ink px-5 py-2.5 ${accent}`}>
        <span className="font-display text-lg font-bold leading-none">0{index + 1}</span>
        <Badge
          className={`border-2 border-ink font-mono text-[0.62rem] font-semibold uppercase tracking-wide ${
            project.live ? 'bg-cream text-ink' : 'bg-ink text-cream'
          }`}
        >
          {project.live ? (
            <>
              <span className="size-1.5 animate-pulse rounded-full bg-leaf" /> live
            </>
          ) : (
            'in progress'
          )}
        </Badge>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <h3 className="font-display text-xl font-bold leading-tight">{project.title}</h3>

        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.pills.map((pill) => (
            <span
              key={pill}
              className="border-2 border-ink bg-sand px-2 py-0.5 font-mono text-[0.68rem] text-ink-soft"
            >
              {pill}
            </span>
          ))}
        </div>

        <p className="mt-4 flex-1 text-[0.95rem] leading-relaxed text-ink-soft">{project.desc}</p>

        <div className="mt-6 flex flex-wrap gap-4 border-t-2 border-dashed border-ink pt-4">
          {project.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-mono text-sm font-semibold uppercase tracking-wide underline decoration-2 underline-offset-4 transition-colors hover:text-leaf-deep"
            >
              {link.icon === 'github' ? <GitHubIcon /> : <ArrowUpRight className="size-4" />}
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="section border-b-2 border-ink bg-sand">
      <Reveal className="wrap">
        <div className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="chip bg-melon">{projects.eyebrow}</span>
            <h2 className="mt-4 text-[clamp(1.9rem,4vw,2.8rem)]">{projects.title}</h2>
          </div>
          <p className="max-w-sm font-mono text-xs uppercase leading-relaxed tracking-widest text-ink-soft">
            production-grade · evaluator-gated · open source
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {projects.items.map((project, i) => (
            <Reveal key={project.title}>
              <ProjectCard project={project} index={i} />
            </Reveal>
          ))}
        </div>
      </Reveal>
    </section>
  )
}