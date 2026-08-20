import { GraduationCap } from 'lucide-react'
import Reveal from './Reveal'
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from './ui/card'
import { Badge } from './ui/badge'
import { education } from '../data/portfolio'

export default function Education() {
  return (
    <section id="education" className="section border-b-2 border-ink bg-cream">
      <Reveal className="wrap">
        <div className="mb-12">
          <span className="chip bg-grape">{education.eyebrow}</span>
          <h2 className="mt-4 text-[clamp(1.9rem,4vw,2.8rem)]">{education.title}</h2>
        </div>

        {education.items.map((item) => (
          <Card
            key={item.school}
            className="gap-0 rounded-none border-2 border-ink bg-paper p-0 shadow-hard-sm transition-transform hover:-translate-y-1"
          >
            <CardHeader className="flex-row items-center gap-5 rounded-none border-l-8 border-ink px-6 py-6">
              <span className="hidden size-14 shrink-0 place-items-center border-2 border-ink bg-sky shadow-hard-xs sm:grid">
                <GraduationCap className="size-7" />
              </span>
              <div>
                <CardTitle className="font-display text-xl font-bold md:text-2xl">{item.school}</CardTitle>
                <CardDescription className="mt-1 text-ink-soft">{item.degree}</CardDescription>
              </div>
            </CardHeader>
            <CardFooter className="justify-end border-t-2 border-dashed border-ink px-6 py-4">
              <Badge className="border-2 border-ink bg-sun font-mono text-xs uppercase tracking-wide">
                {item.date}
              </Badge>
            </CardFooter>
          </Card>
        ))}
      </Reveal>
    </section>
  )
}