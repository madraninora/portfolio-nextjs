import Link from 'next/link';
import Image from 'next/image';
import profilePhoto from './Image/download.jpg';

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-hero py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 text-center lg:text-left">
              <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
                Développeuse Web
                <span className="block text-accent text-pink-500 pl-20 pt-5">Créative & Passionnée</span>
              </h1>
              <p className="text-lg lg:text-xl text-gray-800 mb-8 max-w-2xl">
                Je crée des expériences web modernes et performantes avec les dernières technologies. 
                Spécialisé en React, Next.js et développement fullstack.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link href="/projets" className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium bg-white text-violet-800 hover:bg-white/90 shadow-elegant transition-all">
                  Voir mes projets
                </Link>
                <Link href="/contact" className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium border border-white text-violet-800 hover:bg-white hover:text-violet-800 transition-all">
                  Me contacter
                </Link>
              </div>
            </div>
            <div className="flex-1 flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full overflow-hidden shadow-elegant">
                  <Image 
                    src={profilePhoto} 
                    alt="Photo de profil" 
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                    priority
                  />
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-pink-100 rounded-full opacity-80"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-200 rounded-full opacity-60"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-8 bg-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Mes Compétences</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Technologies et outils que je maîtrise pour créer des solutions web innovantes
            </p>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "React", "Next.js", "TypeScript", "Tailwind CSS",
              "Node.js", "Bootstrap", "MongoDB", "Git"
            ].map((skill) => (
              <div key={skill} className="shadow-card hover:shadow-elegant transition-all duration-200 rounded-xl bg-white/70 backdrop-blur p-6 text-center">
                <h3 className="font-semibold text-lg">{skill}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4">Projets Récents</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Découvrez quelques-uns de mes projets les plus récents
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Application Web Cinema",
                description: "Interface utilisateur responsive avec React",
                image: "/appcinema.png",
                technologies: ["React Native","Tailwind", "Api"]
              },
              {
                title: "E-commerce Platform",
                description: "Plateforme e-commerce complète avec panier",
                image: "/boutique.png",
                technologies: ["React", "Figma", "Tailwind"]
              },
              {
                title: "Portfolio Moderne",
                description: "Design épuré et moderne avec interface intuitive",
                image: "/portfolio.png",
                technologies: ["Next.js", "tailwind"]
              }
            ].map((project, index) => (
              <div key={index} className="shadow-card hover:shadow-elegant transition-all duration-200 group rounded-xl bg-white/70 backdrop-blur">
                <div className="p-0">
                  <div className="aspect-video overflow-hidden rounded-t-xl flex items-center justify-center bg-white">
                    <Image 
                      src={project.image} 
                      alt={project.title}
                      width={640}
                      height={360}
                      className="object-contain p-6 group-hover:scale-105 transition-all"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                    <p className="text-muted-foreground mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="px-3 py-1 text-sm bg-blue-100 text-primary rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link href="/projets" className="inline-flex items-center justify-center rounded-md px-6 py-3 text-base font-medium bg-violet-700 text-white hover:bg-violet-800 shadow-elegant transition-all">
              Voir tous les projets
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
  

