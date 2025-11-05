'use client'
import Image from 'next/image'

export default function AnimatedLogo() {
  return (
    <div className="relative mx-auto flex items-center justify-center">
      <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-full overflow-hidden">
        {/* Logo */}
        <Image
          src="/logo.jpg"
          alt="Yury Enriquez"
          fill
          priority
          className="object-cover rounded-full shadow-2xl animate-floaty"
        />

        {/* Optional shimmer disabled to avoid corner artifact */}
        {/* <div className="pointer-events-none absolute inset-0 overflow-hidden rounded-full">
          <div className="shimmer-bar absolute inset-0" />
        </div> */}

        {/* Brush stroke drawing around logo */}
        <svg className="pointer-events-none absolute inset-0" viewBox="0 0 200 200">
          <defs>
            <linearGradient id="logoStroke" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="var(--gold-600)" />
              <stop offset="50%" stopColor="var(--gold-500)" />
              <stop offset="100%" stopColor="var(--gold-400)" />
            </linearGradient>
          </defs>
          <circle
            cx="100"
            cy="100"
            r="85"
            fill="none"
            stroke="url(#logoStroke)"
            strokeWidth="8"
            strokeLinecap="round"
            className="stroke-draw"
          />
        </svg>
      </div>
    </div>
  )
}