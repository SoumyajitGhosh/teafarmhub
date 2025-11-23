export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Sarah Mitchell",
      role: "Tea Enthusiast",
      content: "The quality and flavor of TeaLeaf's teas are absolutely exceptional. I'm a customer for life!",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 2,
      name: "James Chen",
      role: "Restaurant Owner",
      content:
        "We've been serving TeaLeaf teas in our restaurant for 3 years. Our customers love them and ask for them by name.",
      avatar: "/placeholder-user.jpg",
    },
    {
      id: 3,
      name: "Emma Rodriguez",
      role: "Wellness Coach",
      content: "Not only are these teas delicious, but knowing they're sustainably grown makes every sip even better.",
      avatar: "/placeholder-user.jpg",
    },
  ]

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">What People Say</h2>
          <p className="text-lg text-muted-foreground">Hear from our satisfied customers and partners</p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-base border border-primary/10 rounded-lg p-8 hover:shadow-lg transition-shadow"
            >
              <p className="text-foreground/80 mb-6 italic">"{testimonial.content}"</p>
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.avatar || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-bold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
