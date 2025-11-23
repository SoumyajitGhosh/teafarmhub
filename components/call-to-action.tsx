"use client"

export default function CallToAction() {
  return (
    <section className="py-20 bg-primary/90 text-primary-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-balance">Experience Premium Tea Today</h2>
        <p className="text-xl mb-8 leading-relaxed text-balance opacity-95">
          Join tea enthusiasts worldwide who have discovered the difference quality makes. Order your first collection
          now.
        </p>
        <button className="px-10 py-4 bg-secondary text-foreground rounded-lg font-semibold text-lg hover:bg-secondary/90 transition-all hover:shadow-xl">
          Shop Our Collection
        </button>
      </div>
    </section>
  )
}
