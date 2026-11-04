"use client"

import * as React from "react"
import { motion, type Transition } from "framer-motion"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface PerspectiveCarouselItem {
  src?: string
  title: string
  alt?: string
  icon?: React.ReactNode
  summary?: string
  tags?: string[]
}

export interface PerspectiveCarouselProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "onChange"> {
  items: PerspectiveCarouselItem[]
  activeIndex?: number
  defaultActiveIndex?: number
  onActiveIndexChange?: (index: number) => void
  loop?: boolean
  slideWidth?: number
  rotationStep?: number
  inactiveScale?: number
  transition?: Transition
  showControls?: boolean
  showDots?: boolean
  viewportClassName?: string
  slideClassName?: string
  imageClassName?: string
  labelClassName?: string
  controlsClassName?: string
}

const DEFAULT_TRANSITION: Transition = {
  type: "spring",
  bounce: 0.14,
  duration: 0.9,
}

const clamp = (value: number, min: number, max: number) =>
  Math.min(Math.max(value, min), max)

export function PerspectiveCarousel({
  items,
  activeIndex,
  defaultActiveIndex = 0,
  onActiveIndexChange,
  loop = false,
  slideWidth = 220,
  rotationStep = 55,
  inactiveScale = 0.85,
  transition = DEFAULT_TRANSITION,
  showControls = true,
  showDots = true,
  viewportClassName,
  slideClassName,
  imageClassName,
  labelClassName,
  controlsClassName,
  className,
  onKeyDown,
  tabIndex,
  ...props
}: PerspectiveCarouselProps) {
  const maxIndex = Math.max(0, items.length - 1)
  const [uncontrolledIndex, setUncontrolledIndex] = React.useState(() =>
    clamp(defaultActiveIndex, 0, maxIndex)
  )
  const currentIndex = clamp(activeIndex ?? uncontrolledIndex, 0, maxIndex)
  const safeSlideWidth = Math.max(96, slideWidth)
  const safeInactiveScale = clamp(inactiveScale, 0.5, 1)

  const selectSlide = React.useCallback(
    (nextIndex: number) => {
      if (!items.length) return

      const resolvedIndex = loop
        ? (nextIndex + items.length) % items.length
        : clamp(nextIndex, 0, maxIndex)

      if (activeIndex === undefined) {
        setUncontrolledIndex(resolvedIndex)
      }
      onActiveIndexChange?.(resolvedIndex)
    },
    [activeIndex, items.length, loop, maxIndex, onActiveIndexChange]
  )

  if (!items.length) return null

  const isPreviousDisabled = !loop && currentIndex === 0
  const isNextDisabled = !loop && currentIndex === maxIndex
  const handleKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    onKeyDown?.(event)
    if (event.defaultPrevented) return
    if (event.key === "ArrowLeft") {
      event.preventDefault()
      selectSlide(currentIndex - 1)
    }
    if (event.key === "ArrowRight") {
      event.preventDefault()
      selectSlide(currentIndex + 1)
    }
  }

  return (
    <div
      role="region"
      aria-roledescription="carousel"
      aria-label="Example solutions carousel"
      tabIndex={tabIndex ?? 0}
      onKeyDown={handleKeyDown}
      className={cn("relative isolate h-full w-full overflow-hidden", className)}
      {...props}
    >
      <div
        className={cn("absolute inset-0 overflow-hidden", viewportClassName)}
        style={{ perspective: "1200px" }}
      >
        <motion.div
          className="absolute left-1/2 top-1/2 flex w-fit -translate-y-1/2 items-center"
          animate={{ x: -(currentIndex * safeSlideWidth + safeSlideWidth / 2) }}
          transition={transition}
        >
          {items.map((item, index) => {
            const isActive = currentIndex === index

            return (
              <div
                key={`${item.title}-${index}`}
                className="shrink-0"
                style={{ width: safeSlideWidth, perspective: "1200px" }}
              >
                <motion.div
                  className={cn(
                    "flex w-full flex-col items-center gap-3 will-change-transform",
                    slideClassName
                  )}
                  animate={{
                    rotateY: (currentIndex - index) * rotationStep,
                    scale: isActive ? 1 : safeInactiveScale,
                  }}
                  transition={transition}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  <button
                    type="button"
                    aria-label={`Show ${item.title}`}
                    aria-current={isActive ? "true" : undefined}
                    className="aspect-[3/4] w-full cursor-pointer"
                    onClick={() => selectSlide(index)}
                  >
                    {item.src ? (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img
                        src={item.src}
                        alt={item.alt ?? item.title}
                        draggable={false}
                        className={cn(
                          "h-full w-full select-none rounded-xl object-cover shadow-xl",
                          imageClassName
                        )}
                      />
                    ) : (
                      <div
                        className={cn(
                          "h-full w-full select-none rounded-xl border border-blue-200 bg-gradient-to-b from-white via-blue-50 to-cyan-50 shadow-xl shadow-blue-500/10 flex flex-col items-center justify-center gap-4 p-5 text-center",
                          imageClassName
                        )}
                      >
                        {item.icon && (
                          <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#1e63e9] to-[#06b6d4] flex items-center justify-center shadow-lg shadow-blue-500/25">
                            {item.icon}
                          </div>
                        )}
                        <p className="text-base font-semibold text-[#0b1f3a] leading-snug">
                          {item.title}
                        </p>
                        {item.summary && (
                          <p className="text-sm text-slate-600 leading-relaxed line-clamp-4">
                            {item.summary}
                          </p>
                        )}
                        {item.tags && (
                          <div className="flex flex-wrap justify-center gap-1.5 mt-auto">
                            {item.tags.map((tag) => (
                              <span
                                key={tag}
                                className="text-xs font-medium bg-blue-100 text-[#1e63e9] px-2.5 py-1 rounded-full"
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </button>

                  <motion.p
                    className={cn(
                      "whitespace-nowrap text-base font-medium text-[#0b1f3a]",
                      labelClassName
                    )}
                    animate={{
                      filter: isActive ? "blur(0px)" : "blur(2px)",
                      opacity: isActive ? 1 : 0,
                    }}
                    transition={transition}
                  >
                    {item.title}
                  </motion.p>
                </motion.div>
              </div>
            )
          })}
        </motion.div>
      </div>

      {showControls && (
        <div
          className={cn(
            "absolute inset-x-4 bottom-5 z-10 mx-auto flex w-fit items-center justify-center gap-3 rounded-full border border-blue-200 bg-white/85 px-2 text-[#0b1f3a] shadow-lg shadow-blue-500/10 backdrop-blur-sm",
            controlsClassName
          )}
        >
          <button
            type="button"
            aria-label="Show previous slide"
            disabled={isPreviousDisabled}
            className="inline-flex size-9 items-center justify-center rounded-full transition-colors hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-35"
            onClick={() => selectSlide(currentIndex - 1)}
          >
            <ChevronLeft className="size-5" />
          </button>

          {showDots && (
            <div className="flex items-center justify-center gap-2 text-[#1e63e9]">
              {items.map((item, index) => (
                <button
                  key={`${item.title}-${index}`}
                  type="button"
                  aria-label={`Show slide ${index + 1}: ${item.title}`}
                  aria-current={currentIndex === index ? "true" : undefined}
                  className={cn(
                    "h-2 rounded-full bg-current transition-[width,opacity] duration-300",
                    currentIndex === index ? "w-7 opacity-100" : "w-2 opacity-30"
                  )}
                  onClick={() => selectSlide(index)}
                />
              ))}
            </div>
          )}

          <button
            type="button"
            aria-label="Show next slide"
            disabled={isNextDisabled}
            className="inline-flex size-9 items-center justify-center rounded-full transition-colors hover:bg-blue-50 disabled:cursor-not-allowed disabled:opacity-35"
            onClick={() => selectSlide(currentIndex + 1)}
          >
            <ChevronRight className="size-5" />
          </button>
        </div>
      )}
    </div>
  )
}

export default PerspectiveCarousel
