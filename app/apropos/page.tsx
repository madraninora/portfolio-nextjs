import Image from 'next/image';
import profilePhoto from '../Image/download.jpg';

export default function AproposPage() {
  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">À Propos de Moi</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Découvrez mon parcours, mes passions et ce qui me motive dans le développement web
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start bg-violet-100 mb-20">
          <div className="space-y-6">
            <div className="w-80 h-80 mx-auto lg:mx-0 rounded-2xl overflow-hidden shadow-elegant bg-violet-100 p-2 transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Image
                src={profilePhoto}
                alt="Photo de profil"
                width={320}
                height={320}
                className="w-full h-full object-cover rounded-xl"
                priority
              />
            </div>
          </div>

          <div className="space-y-6">
            <h2 className="text-2xl font-bold">Développeuse Fullstack Passionné</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>
                Bonjour ! Je suis une développeuse web passionnée par la création d'expériences
                numériques exceptionnelle, je me spécialise dans les technologies modernes comme React, Next.js
                et MongoDB.
              </p>
              <p>
                Mon approche du développement se concentre sur la performance, l'accessibilité
                et l'expérience utilisateur. J'aime transformer des idées complexes en interfaces
                intuitives et élégantes.
              </p>
              <p>
                Quand je ne code pas, vous me trouverez en train d'explorer les dernières
                tendances du web, de contribuer à des projets open source, ou de partager
                mes connaissances avec la communauté des développeurs.
              </p>
            </div>
          </div>
        </div>
           {/* Formation */}
        <div className="max-w-2xl mx-auto mb-20">
          <div className="shadow-card rounded-xl border border-violet-100/60 bg-white/70 backdrop-blur transition-all duration-200 hover:-translate-y-1 hover:shadow-elegant">
            <div className="p-8 text-center">
              <h3 className="text-3xl font-bold mb-4">Formation</h3>
              <p className="font-semibold text-2xl mb-2">Bootcamp Fullstack</p>
              <p className="text-muted-foreground mb-2">GomyCode • 2025</p>
              <p className="text-muted-foreground">Spécialisation en développement web Fullstack et technologies émergentes.</p>
            </div>
          </div>
        </div>

        {/* Values & Approach */}
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-12">Mes Valeurs</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="shadow-card hover:shadow-elegant transition-all duration-200 hover:-translate-y-1 rounded-xl border border-violet-100/60 bg-white/70 backdrop-blur">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-white">💡</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  Toujours à la recherche de nouvelles solutions créatives et
                  de technologies émergentes pour repousser les limites.
                </p>
              </div>
            </div>

            <div className="shadow-card hover:shadow-elegant transition-all duration-200 hover:-translate-y-1 rounded-xl border border-violet-100/60 bg-white/70 backdrop-blur">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-gradient-secondary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-white">🎯</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Qualité</h3>
                <p className="text-muted-foreground">
                  Code propre, performances optimales et attention aux détails
                  pour des résultats exceptionnels.
                </p>
              </div>
            </div>

            <div className="shadow-card hover:shadow-elegant transition-all duration-200 hover:-translate-y-1 rounded-xl border border-violet-100/60 bg-white/70 backdrop-blur">
              <div className="p-8 text-center">
                <div className="w-16 h-16 bg-primary rounded-full mx-auto mb-4 flex items-center justify-center">
                  <span className="text-2xl text-white">🤝</span>
                </div>
                <h3 className="text-xl font-semibold mb-3">Collaboration</h3>
                <p className="text-muted-foreground">
                  Travail d'équipe efficace et communication claire pour
                  atteindre les objectifs ensemble.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

