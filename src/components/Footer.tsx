export function Footer() {
  return (
    <footer
      className="py-12 px-8 md:px-28 flex flex-col sm:flex-row items-center justify-between gap-4"
      style={{ borderTop: '1px solid hsl(var(--border) / 0.3)' }}
    >
      <p className="text-sm" style={{ color: 'hsl(var(--muted-foreground))' }}>
        © 2026 Mindloop. All rights reserved.
      </p>
      <div className="flex items-center gap-6">
        {['Privacy', 'Terms', 'Contact'].map((link) => (
          <a
            key={link}
            href="#"
            className="text-sm transition-colors duration-200"
            style={{ color: 'hsl(var(--muted-foreground))' }}
            onMouseEnter={(e) => {
              ;(e.target as HTMLElement).style.color = '#fff'
            }}
            onMouseLeave={(e) => {
              ;(e.target as HTMLElement).style.color =
                'hsl(var(--muted-foreground))'
            }}
          >
            {link}
          </a>
        ))}
      </div>
    </footer>
  )
}
