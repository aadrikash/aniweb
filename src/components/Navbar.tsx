import { Globe, AtSign, Share2 } from 'lucide-react'

const navLinks = ['Home', 'How It Works', 'Philosophy', 'Use Cases']

const socialIcons = [
  { Icon: Globe, label: 'Website' },
  { Icon: AtSign, label: 'Social' },
  { Icon: Share2, label: 'Share' },
]

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-8 md:px-28 py-4 bg-transparent">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="relative flex items-center justify-center w-7 h-7 rounded-full border-2 border-white/60">
          <div className="w-3 h-3 rounded-full border border-white/60" />
        </div>
        <span className="font-bold text-white text-base tracking-tight">Mindloop</span>
      </div>

      {/* Nav Links */}
      <div className="hidden md:flex items-center gap-3 text-sm">
        {navLinks.map((link, i) => (
          <span key={link} className="flex items-center gap-3">
            <a
              href="#"
              className="text-white/65 hover:text-white transition-colors duration-200 cursor-pointer"
            >
              {link}
            </a>
            {i < navLinks.length - 1 && (
              <span className="text-white/30">•</span>
            )}
          </span>
        ))}
      </div>

      {/* Social Icons */}
      <div className="flex items-center gap-2">
        {socialIcons.map(({ Icon, label }) => (
          <button
            key={label}
            aria-label={label}
            className="liquid-glass w-10 h-10 rounded-full flex items-center justify-center text-white/70 hover:text-white transition-colors duration-200 cursor-pointer"
          >
            <Icon size={16} />
          </button>
        ))}
      </div>
    </nav>
  )
}
