export default function Team() {
  const team = [
    {
      id: 1,
      name: "David Harrison",
      role: "Founder & Master Tea Blender",
      bio: "50 years of tea farming expertise",
      image: "/placeholder-user.jpg",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Head of Sustainability",
      bio: "Environmental conservation specialist",
      image: "/placeholder-user.jpg",
    },
    {
      id: 3,
      name: "Marco Rossi",
      role: "Operations Manager",
      bio: "Quality assurance & production",
      image: "/placeholder-user.jpg",
    },
    {
      id: 4,
      name: "Lisa Wong",
      role: "Customer Relations",
      bio: "Building tea community connections",
      image: "/placeholder-user.jpg",
    },
  ]

  return (
    <section id="team" className="py-20 bg-base">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4">Our Team</h2>
          <p className="text-lg text-muted-foreground">Passionate experts dedicated to tea excellence</p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {team.map((member) => (
            <div
              key={member.id}
              className="bg-background rounded-lg overflow-hidden border border-primary/10 hover:border-primary/30 transition-colors"
            >
              <img src={member.image || "/placeholder.svg"} alt={member.name} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-lg font-bold text-foreground mb-1">{member.name}</h3>
                <p className="text-sm text-primary font-medium mb-3">{member.role}</p>
                <p className="text-sm text-foreground/70">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
