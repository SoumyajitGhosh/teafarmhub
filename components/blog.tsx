export default function Blog() {
  const posts = [
    {
      id: 1,
      title: "The Art of Tea Brewing: Temperature Matters",
      excerpt: "Discover how water temperature affects the flavor profile of different tea varieties.",
      date: "Nov 15, 2024",
      category: "Brewing Tips",
      image: "/tea-cup-ceremony.jpg",
    },
    {
      id: 2,
      title: "Sustainable Tea Farming Practices",
      excerpt: "Learn about our commitment to environmental stewardship and organic farming methods.",
      date: "Nov 8, 2024",
      category: "Sustainability",
      image: "/tea-plantation-mountains.jpg",
    },
    {
      id: 3,
      title: "Health Benefits of Green Tea",
      excerpt: "Explore the science behind green tea's antioxidants and wellness benefits.",
      date: "Nov 1, 2024",
      category: "Health",
      image: "/tea-leaf-harvest-hands.jpg",
    },
  ]

  return (
    <section id="blog" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Tea Stories & Tips</h2>
          <p className="text-lg text-muted-foreground">Latest insights from our tea experts</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <article
              key={post.id}
              className="bg-base border border-primary/10 rounded-lg overflow-hidden hover:shadow-lg transition-shadow cursor-pointer"
            >
              <img src={post.image || "/placeholder.svg"} alt={post.title} className="w-full h-40 object-cover" />
              <div className="p-6">
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold text-primary bg-primary/10 px-3 py-1 rounded-full">
                    {post.category}
                  </span>
                  <span className="text-xs text-muted-foreground">{post.date}</span>
                </div>
                <h3 className="text-lg font-bold text-foreground mb-3">{post.title}</h3>
                <p className="text-foreground/70 text-sm leading-relaxed">{post.excerpt}</p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
