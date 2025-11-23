export default function About() {
  return (
    <section id="about" className="py-20 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Tea Heritage</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With over 50 years of tea farming tradition, TeaLeaf combines ancient brewing wisdom with modern sustainable
            practices to bring you the finest teas from our verdant plantations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img src="/tea-plantation-mountains.jpg" alt="Tea plantation landscape" className="rounded-lg shadow-lg" />
          </div>
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Our Story</h3>
              <p className="text-foreground/80 leading-relaxed">
                TeaLeaf began as a small family operation in the misty highlands. Today, we're proud to be one of the
                region's most respected tea producers, known for our commitment to quality and environmental
                stewardship.
              </p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-foreground mb-3">Our Mission</h3>
              <p className="text-foreground/80 leading-relaxed">
                We're dedicated to crafting exceptional teas while preserving the natural ecosystems of our plantations.
                Every cup tells a story of passion, tradition, and dedication to excellence.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
