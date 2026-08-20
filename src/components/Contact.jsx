import { ArrowUpRight, Mail } from 'lucide-react'
import Reveal from './Reveal'
import { Button } from './ui/button'
import { GitHubIcon } from './icons'
import { contact } from '../data/portfolio'

export default function Contact() {
  return (
    <section id="contact" className="section border-b-2 border-ink bg-leaf text-ink">
      <Reveal className="wrap">
        <div className="border-2 border-ink bg-leaf p-8 shadow-hard-lg md:p-14">
          <span className="chip bg-cream">{contact.eyebrow}</span>
          <h2 className="mt-6 max-w-3xl text-[clamp(1.9rem,5vw,3.4rem)] font-bold leading-tight">
            {contact.title}
          </h2>
          <p className="mt-5 max-w-xl text-lg font-medium">{contact.sub}</p>

          <div className="mt-10 flex flex-wrap gap-3">
            {contact.ctas.map((cta) => (
              <Button
                key={cta.href}
                asChild
                className={
                  cta.variant === 'solid'
                    ? 'border-2 border-ink bg-ink text-cream font-mono text-xs font-semibold uppercase tracking-wide shadow-hard-sm hover:-translate-y-0.5'
                    : 'border-2 border-ink bg-cream text-ink font-mono text-xs font-semibold uppercase tracking-wide shadow-hard-sm hover:-translate-y-0.5 hover:bg-sun'
                }
              >
                <a href={cta.href}>
                  {cta.label.includes('@') ? <Mail className="size-4" /> : <GitHubIcon className="size-4" />}
                  {cta.label}
                  {!cta.label.includes('@') && <ArrowUpRight className="size-4" />}
                </a>
              </Button>
            ))}
          </div>
        </div>
      </Reveal>
    </section>
  )
}