"use client"

export default function TreeShowcase() {
  const showcases = [
    {
      title: "Highland Estates",
      image: "/tea-plantation-mountains.jpg",
      description:
        "Our premium tea gardens nestled in misty highlands, where perfect conditions nurture exceptional teas",
    },
    {
      title: "Hand-Picked Excellence",
      image: "/tea-leaf-harvest-hands.jpg",
      description: "Each leaf is selected at peak flavor, ensuring only the finest tea reaches your cup",
    },
    {
      title: "Traditional Craftsmanship",
      image: "/tea-processing-traditional.jpg",
      description: "Generations of expertise guide our tea processing, preserving authentic taste and aroma",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-foreground mb-16 text-center">Our Tea Stories</h2>

        <div className="grid md:grid-cols-3 gap-8">
          {showcases.map((project, index) => (
            <div key={index} className="group cursor-pointer">
              <div className="rounded-xl overflow-hidden mb-6 border-4 border-secondary/30 hover:border-primary transition-all">
                <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-3">{project.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
