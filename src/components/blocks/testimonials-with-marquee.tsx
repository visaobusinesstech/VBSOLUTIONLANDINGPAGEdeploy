import { cn } from "@/lib/utils"
import { TestimonialCard, TestimonialAuthor } from "@/components/ui/testimonial-card"

interface TestimonialsSectionProps {
  title: string
  description: string
  testimonials: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  altTestimonials?: Array<{
    author: TestimonialAuthor
    text: string
    href?: string
  }>
  className?: string
}

export function TestimonialsSection({
  title,
  description,
  testimonials,
  altTestimonials,
  className
}: TestimonialsSectionProps) {
  return (
    <section
      className={cn(
        "text-foreground",
        "py-12 sm:py-24 md:py-32 px-0",
        className
      )}
    >
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-4 text-center sm:gap-16">
        <div className="flex flex-col items-center gap-4 px-4 sm:gap-8">
          <h2 className="max-w-[720px] text-3xl font-normal leading-tight sm:text-5xl sm:leading-tight">
            {title}
          </h2>
          <p className="text-md max-w-[600px] font-normal text-muted-foreground sm:text-xl">
            {description}
          </p>
        </div>

        <div className="relative w-screen mx-[calc(50%-50vw)] flex flex-col items-center justify-center overflow-hidden">
          <div className="group flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:40s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee flex-row group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) =>
                testimonials.map((testimonial, i) => (
                  <TestimonialCard key={`${setIndex}-${i}`} {...testimonial} />
                ))
              )}
            </div>
          </div>

          <div className="pointer-events-none absolute inset-y-0 left-0 w-1/3 bg-background" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-1/3 bg-background" />

          <div className="group mt-2 flex overflow-hidden p-2 [--gap:1rem] [gap:var(--gap)] flex-row [--duration:44s]">
            <div className="flex shrink-0 justify-around [gap:var(--gap)] animate-marquee-reverse flex-row group-hover:[animation-play-state:paused]">
              {[...Array(4)].map((_, setIndex) =>
                (altTestimonials && altTestimonials.length > 0 ? altTestimonials : testimonials).map((testimonial, i) => (
                  <TestimonialCard key={`alt-${setIndex}-${i}`} {...testimonial} />
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
