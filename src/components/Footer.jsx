import { profile } from '../data/portfolio'

export default function Footer() {
  return (
    <footer className="border-t-2 border-ink bg-ink py-8 text-cream">
      <div className="wrap flex flex-col items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest sm:flex-row">
        <span>
          © {profile.year} {profile.name}
        </span>
        <span className="flex items-center gap-2">
          <span className="size-2 rounded-full bg-leaf" aria-hidden="true" />
          open to work
        </span>
        <a href={profile.github} target="_blank" rel="noopener noreferrer" className="underline decoration-2 underline-offset-4 hover:text-leaf">
          github ↗
        </a>
      </div>
    </footer>
  )
}