import { motion, type MotionProps } from 'framer-motion'
import { useState } from 'react'
import avatar1 from '../assets/avatar-1.png'
import avatar2 from '../assets/avatar-2.png'
import avatar3 from '../assets/avatar-3.png'

const fadeUp = (delay: number): MotionProps => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

export function Hero() {
  const [email, setEmail] = useState('')

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-start overflow-hidden">
      {/* Background Video */}
      <video
        className="absolute inset-0 w-full h-full object-cover z-0"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260325_120549_0cd82c36-56b3-4dd9-b190-069cfc3a623f.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-black to-transparent z-[1]" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 pt-28 md:pt-32 max-w-4xl mx-auto">
        {/* Avatar row */}
        <motion.div
          {...fadeUp(0)}
          className="flex items-center gap-3 mb-8"
        >
          <div className="flex -space-x-2">
            {[avatar1, avatar2, avatar3].map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Subscriber ${i + 1}`}
                className="w-8 h-8 rounded-full border-2 border-black object-cover"
              />
            ))}
          </div>
          <span
            className="text-sm"
            style={{ color: 'hsl(var(--muted-foreground))' }}
          >
            7,000+ people already subscribed
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h1
          {...fadeUp(0.1)}
          className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-[-2px] text-white leading-tight mb-6"
        >
          Get{' '}
          <span className="font-serif italic font-normal">Inspired</span>{' '}
          with Us
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-lg max-w-xl mb-10"
          style={{ color: 'hsl(var(--hero-subtitle))' }}
        >
          Join our feed for meaningful updates, news around technology and a
          shared journey toward depth and direction.
        </motion.p>

        {/* Email Form */}
        <motion.div
          {...fadeUp(0.3)}
          className="liquid-glass rounded-full p-2 w-full max-w-lg flex items-center gap-2"
        >
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="flex-1 bg-transparent text-white placeholder:text-white/40 text-sm px-4 outline-none border-none min-w-0"
          />
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-black rounded-full px-8 py-3 text-sm font-semibold tracking-wide shrink-0 cursor-pointer"
          >
            SUBSCRIBE
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
