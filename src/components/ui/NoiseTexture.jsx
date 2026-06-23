"use client"

import { cn } from "@/lib/utils"

export const NoiseTexture = ({
  className,
  noiseOpacity = 0.05,
  ...props
}) => {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 z-0 size-full select-none",
        className
      )}
      style={{
        opacity: noiseOpacity,
        backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        backgroundRepeat: "repeat",
        backgroundSize: "128px 128px",
      }}
      {...props}
    />
  )
}
