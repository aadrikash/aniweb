import { motion, type MotionProps } from 'framer-motion'

const fadeUp = (delay: number): MotionProps => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

const features = [
  {
    title: 'Curated Feed',
    description:
      'A distraction-free reading experience tailored to your interests and the voices you trust.',
  },
  {
    title: 'Writer Tools',
    description:
      'Powerful publishing tools built for depth — from drafts to distribution in one clean workspace.',
  },
  {
    title: 'Community',
    description:
      'Conversations that go beyond likes — threaded discussions with readers who actually read.',
  },
  {
    title: 'Distribution',
    description:
      'Reach your audience across email, web, and AI search results with one unified platform.',
  },
]

export function Solution() {
  return (
    <section
      className="py-32 md:py-44 px-6 border-t"
      style={{ borderColor: 'hsl(var(--border) / 0.3)' }}
    >
      <div className="max-w-5xl mx-auto text-center">
        {/* Label */}
        <motion.p
          {...fadeUp(0)}
          className="text-xs tracking-[3px] uppercase mb-6"
          style={{ color: 'hsl(var(--muted-foreground))' }}
        >
          SOLUTION
        </motion.p>

        {/* Heading */}
        <motion.h2
          {...fadeUp(0.1)}
          className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-12"
        >
          The platform for{' '}
          <span className="font-serif italic font-normal">meaningful</span>{' '}
          content
        </motion.h2>

        {/* Video */}
        <motion.div {...fadeUp(0.2)} className="mb-16">
          <video
            className="w-full rounded-2xl object-cover aspect-[3/1]"
            src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_125119_8e5ae31c-0021-4396-bc08-f7aebeb877a2.mp4"
            autoPlay
            loop
            muted
            playsInline
          />
        </motion.div>

        {/* Feature Grid */}
        <div className="grid md:grid-cols-4 gap-8 text-left">
          {features.map((feature, i) => (
            <motion.div key={feature.title} {...fadeUp(0.1 * (i + 1))}>
              <h3 className="font-semibold text-base text-white mb-2">
                {feature.title}
              </h3>
              <p
                className="text-sm"
                style={{ color: 'hsl(var(--muted-foreground))' }}
              >
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
