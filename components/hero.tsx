"use client"

export default function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-secondary/30 to-background flex items-center justify-center overflow-hidden pt-20">
      <div className="absolute top-10 left-5 w-32 h-32 opacity-15">
        <div className="w-full h-full rounded-full border-2 border-primary" />
      </div>
      <div className="absolute bottom-20 right-10 w-40 h-40 opacity-10">
        <div className="w-full h-full rounded-full border-2 border-primary" />
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl font-bold text-foreground leading-tight text-balance">
              Crafted with Care, Steeped in Tradition
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed text-balance">
              Welcome to our sustainable tea plantation. Every leaf is harvested with precision, dried with expertise,
              and packaged with passion. Discover the authentic taste of quality tea.
            </p>
            <div className="flex gap-4 flex-wrap">
              <button className="px-8 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-all hover:shadow-lg">
                Explore Collection
              </button>
              <button className="px-8 py-3 border-2 border-primary text-foreground rounded-lg font-medium hover:bg-secondary transition-all">
                Learn Our Story
              </button>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="w-96 h-96 rounded-full bg-secondary/30 flex items-center justify-center overflow-hidden border-4 border-secondary shadow-lg">
              <img src="/tea-cup-ceremony.jpg" alt="Tea ceremony" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
