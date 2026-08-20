import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Button } from './ui/button'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { profile } from '../data/portfolio'
import portrait from '../assets/kaushal_nepal_image.jpg'

const LINKS = [
  { label: 'about', href: '#about' },
  { label: 'experience', href: '#experience' },
  { label: 'projects', href: '#projects' },
  { label: 'skills', href: '#skills' },
]

export default function Nav() {
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <header className="sticky top-0 z-50 border-b-2 border-ink bg-cream/95 backdrop-blur">
      <div className="wrap flex items-center justify-between gap-4 py-3">
        <a
          href="#top"
          onClick={close}
          className="flex items-center gap-2 font-mono text-sm font-medium tracking-tight"
          aria-label="Home"
        >
          <span className="grid size-9 place-items-center border-2 border-ink bg-leaf font-display text-base font-bold text-ink shadow-hard-xs">
            {profile.initials}
          </span>
          <span className="hidden sm:inline">kaushal.nepal</span>
        </a>

        <nav
          className={`fixed inset-x-0 top-[61px] z-40 flex-col gap-1 border-b-2 border-ink bg-cream p-4 shadow-hard-sm sm:static sm:z-auto sm:flex sm:flex-row sm:items-center sm:gap-2 sm:border-0 sm:bg-transparent sm:p-0 sm:shadow-none ${
            open ? 'flex' : 'hidden'
          }`}
          aria-label="Primary"
        >
          {LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={close}
              className="px-3 py-2 font-mono text-sm uppercase tracking-wide text-ink-soft transition-colors hover:bg-sand hover:text-ink"
            >
              /{link.label}
            </a>
          ))}
          <a href="#contact" onClick={close} className="mt-2 sm:mt-0 sm:ml-2">
            <Button
              asChild
              className="w-full border-2 border-ink bg-melon font-mono text-xs font-semibold uppercase tracking-wide text-ink shadow-hard-xs hover:-translate-y-0.5 hover:bg-melon sm:w-auto"
            >
              <span>Let's talk</span>
            </Button>
          </a>
        </nav>

        <div className="hidden items-center gap-3 sm:flex">
          <Avatar className="size-9 border-2 border-ink shadow-hard-xs">
            <AvatarImage src={portrait} alt={`${profile.name} avatar`} />
            <AvatarFallback className="bg-sky font-display font-bold">
              {profile.initials}
            </AvatarFallback>
          </Avatar>
        </div>

        <button
          className="grid size-10 place-items-center border-2 border-ink bg-paper shadow-hard-xs sm:hidden"
          aria-label="Toggle navigation"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>
    </header>
  )
}