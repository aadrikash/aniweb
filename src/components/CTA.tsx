import { useEffect, useRef } from 'react'
import { motion, type MotionProps } from 'framer-motion'
import Hls from 'hls.js'

const fadeUp = (delay: number): MotionProps => ({
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-100px' },
  transition: { duration: 0.6, delay, ease: 'easeOut' },
})

const HLS_URL =
  'https://stream.mux.com/8wrHPCX2dC3msyYU9ObwqNdm00u3ViXvOSHUMRYSEe5Q.m3u8'

export function CTA() {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    const video = videoRef.current
    if (!video) return

    if (Hls.isSupported()) {
      const hls = new Hls()
      hls.loadSource(HLS_URL)
      hls.attachMedia(video)
      return () => {
        hls.destroy()
      }
    } else if (video.canPlayType('application/vnd.apple.mpegurl')) {
      // Safari native HLS support
      video.src = HLS_URL
    }
  }, [])

  return (
    <section
      className="relative py-32 md:py-44 border-t overflow-hidden"
      style={{ borderColor: 'hsl(var(--border) / 0.3)' }}
    >
      {/* Background HLS Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover z-0"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Overlay */}
      <div
        className="absolute inset-0 z-[1]"
        style={{ backgroundColor: 'rgba(0,0,0,0.45)' }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6">
        {/* Logo */}
        <motion.div
          {...fadeUp(0)}
          className="relative flex items-center justify-center w-10 h-10 rounded-full border-2 border-white/60 mb-8"
        >
          <div className="w-5 h-5 rounded-full border border-white/60" />
        </motion.div>

        {/* Heading */}
        <motion.h2
          {...fadeUp(0.1)}
          className="text-4xl md:text-6xl font-medium tracking-tight text-white mb-6"
        >
          <span className="font-serif italic font-normal">Start Your Journey</span>
        </motion.h2>

        {/* Subtitle */}
        <motion.p
          {...fadeUp(0.2)}
          className="text-lg max-w-xl mb-10"
          style={{ color: 'hsl(var(--muted-foreground))' }}
        >
          Join thousands of curious minds. Subscribe to our newsletter or start
          writing and sharing your own ideas with our community.
        </motion.p>

        {/* Buttons */}
        <motion.div
          {...fadeUp(0.3)}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="bg-white text-black rounded-lg px-8 py-3.5 font-semibold text-sm cursor-pointer"
          >
            Subscribe Now
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="liquid-glass rounded-lg px-8 py-3.5 text-white font-semibold text-sm cursor-pointer"
          >
            Start Writing
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}
