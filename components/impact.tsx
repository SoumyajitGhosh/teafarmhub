"use client"

export default function Impact() {
  const stats = [
    {
      number: "25,000+",
      label: "Hectares Planted",
      description: "Sustainable tea gardens across pristine highlands",
    },
    {
      number: "50+",
      label: "Tea Varieties",
      description: "From delicate whites to bold oolongs and pu-erhs",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto leading-relaxed">
          Our plantation spans generations of tea mastery. We blend traditional methods with modern sustainability
          practices to deliver the finest tea to your cup.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="flex flex-col items-center">
              <div className="w-48 h-48 rounded-full bg-gradient-to-b from-secondary to-secondary/20 flex items-center justify-center mb-8 border-4 border-secondary/50 shadow-lg">
                <div className="text-center">
                  <div className="text-5xl font-bold text-primary mb-2">{stat.number}</div>
                  <div className="text-sm font-semibold text-foreground uppercase">{stat.label}</div>
                </div>
              </div>
              <p className="text-center text-muted-foreground text-sm">{stat.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
