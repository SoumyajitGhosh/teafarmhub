"use client"

export default function TreeVarieties() {
  const teas = [
    {
      name: "White Tea",
      icon: "🫖",
      description: "Delicate and subtle with natural sweetness",
      color: "bg-secondary/40",
    },
    {
      name: "Green Tea",
      icon: "🍃",
      description: "Fresh and vibrant with grassy notes",
      color: "bg-secondary/30",
    },
    {
      name: "Oolong Tea",
      icon: "🌊",
      description: "Complex flavor between green and black",
      color: "bg-secondary/50",
    },
    {
      name: "Pu-erh Tea",
      icon: "🥉",
      description: "Rich and earthy with deep character",
      color: "bg-primary/20",
    },
  ]

  return (
    <section className="py-20 bg-secondary/10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-foreground mb-4 text-center">Our Tea Collections</h2>
        <p className="text-center text-muted-foreground mb-16 max-w-2xl mx-auto">
          Each blend is carefully selected for its unique character and benefits, honoring traditional tea
          craftsmanship.
        </p>

        <div className="grid md:grid-cols-4 gap-6">
          {teas.map((tea, index) => (
            <div
              key={index}
              className={`${tea.color} rounded-2xl p-8 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 cursor-pointer border border-primary/20`}
            >
              <div className="text-5xl mb-4">{tea.icon}</div>
              <h3 className="text-xl font-bold text-foreground mb-3">{tea.name}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{tea.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
