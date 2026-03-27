import { motion, type MotionProps } from 'framer-motion'
import iconChatgpt from '../assets/icon-chatgpt.png'
import iconPerplexity from '../assets/icon-perplexity.png'
import iconGoogle from '../assets/icon-google.png'

const fadeUp = (delay: number): MotionProps => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

const platforms = [
  {
    icon: iconChatgpt,
    name: 'ChatGPT',
    description:
      'AI-powered conversations are replacing traditional search. Your brand needs a presence in every answer.',
  },
  {
    icon: iconPerplexity,
    name: 'Perplexity',
    description:
      'Real-time AI search citations shape what people discover. Be the source that gets cited.',
  },
  {
    icon: iconGoogle,
    name: 'Google AI',
    description:
      'AI Overviews now summarize before users even click. Your content must be positioned to surface first.',
  },
]

export function SearchChanged() {
  return (
    <section className="text-center px-6 pt-52 md:pt-64 pb-6 md:pb-9">
      {/* Heading */}
      <motion.h2
        {...fadeUp(0)}
        className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-white leading-tight mb-6"
      >
        Search has{' '}
        <span className="font-serif italic font-normal">changed.</span>
        {' '}Have you?
      </motion.h2>

      {/* Subtitle */}
      <motion.p
        {...fadeUp(0.1)}
        className="text-lg max-w-2xl mx-auto mb-24"
        style={{ color: 'hsl(var(--muted-foreground))' }}
      >
        The way people discover content has fundamentally shifted. AI tools now
        answer questions directly — and the platforms that win are those with
        a clear, consistent voice.
      </motion.p>

      {/* Platform Cards */}
      <div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20 max-w-5xl mx-auto">
        {platforms.map((platform, i) => (
          <motion.div
            key={platform.name}
            {...fadeUp(0.1 * (i + 1))}
            className="flex flex-col items-center gap-4"
          >
            <img
              src={platform.icon}
              alt={platform.name}
              className="w-[200px] h-[200px] object-contain rounded-2xl"
            />
            <span className="font-semibold text-base text-white">
              {platform.name}
            </span>
            <p
              className="text-sm max-w-xs"
              style={{ color: 'hsl(var(--muted-foreground))' }}
            >
              {platform.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* Bottom tagline */}
      <motion.p
        {...fadeUp(0.4)}
        className="text-sm text-center"
        style={{ color: 'hsl(var(--muted-foreground))' }}
      >
        If you don't answer the questions, someone else will.
      </motion.p>
    </section>
  )
}
