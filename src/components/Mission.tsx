import { useRef } from 'react'
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion'

const highlightWords = new Set(['curiosity', 'meets', 'clarity'])

function AnimatedWord({
  word,
  progress,
  index,
  total,
}: {
  word: string
  progress: MotionValue<number>
  index: number
  total: number
}) {
  const clean = word.replace(/[^a-zA-Z]/g, '').toLowerCase()
  const isHighlighted = highlightWords.has(clean)

  const start = index / total
  const end = Math.min((index + 1) / total, 1)

  // eslint-disable-next-line react-hooks/rules-of-hooks
  const opacity = useTransform(progress, [start, end], [0.15, 1])

  return (
    <motion.span
      style={{
        opacity,
        color: isHighlighted ? '#ffffff' : 'hsl(210, 17%, 95%)',
      }}
      className="inline-block mr-[0.25em]"
    >
      {word}
    </motion.span>
  )
}

function AnimatedParagraph({
  text,
  progress,
  className,
}: {
  text: string
  progress: MotionValue<number>
  className?: string
}) {
  const words = text.split(' ')
  return (
    <p className={className}>
      {words.map((word, i) => (
        <AnimatedWord
          key={i}
          word={word}
          progress={progress}
          index={i}
          total={words.length}
        />
      ))}
    </p>
  )
}

export function Mission() {
  const containerRef = useRef<HTMLDivElement>(null)

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  })

  const para1Progress = useTransform(scrollYProgress, [0.1, 0.6], [0, 1])
  const para2Progress = useTransform(scrollYProgress, [0.4, 0.85], [0, 1])

  return (
    <section className="pt-0 pb-32 md:pb-44 px-6" ref={containerRef}>
      {/* Large Video */}
      <div className="flex justify-center mb-16">
        <video
          className="w-full max-w-[800px] h-auto rounded-2xl object-cover"
          style={{ maxHeight: 800 }}
          src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_132944_a0d124bb-eaa1-4082-aa30-2310efb42b4b.mp4"
          autoPlay
          loop
          muted
          playsInline
        />
      </div>

      {/* Scroll-driven text */}
      <div className="max-w-4xl mx-auto text-center">
        <AnimatedParagraph
          text="We're building a space where curiosity meets clarity — where readers find depth, writers find reach, and every newsletter becomes a conversation worth having."
          progress={para1Progress}
          className="text-2xl md:text-4xl lg:text-5xl font-medium tracking-[-1px] leading-tight"
        />
        <AnimatedParagraph
          text="A platform where content, community, and insight flow together — with less noise, less friction, and more meaning for everyone involved."
          progress={para2Progress}
          className="text-xl md:text-2xl lg:text-3xl font-medium mt-10 leading-snug"
        />
      </div>
    </section>
  )
}
