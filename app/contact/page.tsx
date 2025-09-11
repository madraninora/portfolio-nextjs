"use client";
import type { FormEvent } from 'react';

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (typeof window !== 'undefined') {
      window.alert("Message envoyé ! Je vous répondrai dans les plus brefs délais.");
    }
  };

  return (
    <div className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">Contact</h1>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Une idée de projet ? Une question ? N'hésitez pas à me contacter, je serais ravi d'échanger avec vous
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <div className="shadow-card rounded-xl border border-violet-100/60 bg-white/70 backdrop-blur">
            <div className="p-8">
              <h2 className="text-2xl font-bold mb-6">Envoyez-moi un message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">Prénom</label>
                    <input 
                      id="firstName" 
                      placeholder="Votre prénom" 
                      required 
                      className="w-full rounded-md border border-violet-200 bg-white/80 px-3 py-2 outline-none transition-all focus:ring-2 focus:ring-violet-200"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Nom</label>
                    <input 
                      id="lastName" 
                      placeholder="Votre nom" 
                      required 
                      className="w-full rounded-md border border-violet-200 bg-white/80 px-3 py-2 outline-none transition-all focus:ring-2 focus:ring-violet-200"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                  <input 
                    id="email" 
                    type="email" 
                    placeholder="votre@email.com" 
                    required 
                    className="w-full rounded-md border border-violet-200 bg-white/80 px-3 py-2 outline-none transition-all focus:ring-2 focus:ring-violet-200"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700">Sujet</label>
                  <input 
                    id="subject" 
                    placeholder="Sujet de votre message" 
                    required 
                    className="w-full rounded-md border border-violet-200 bg-white/80 px-3 py-2 outline-none transition-all focus:ring-2 focus:ring-violet-200"
                  />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
                  <textarea 
                    id="message" 
                    placeholder="Décrivez votre projet ou votre question..." 
                    className="min-h-32 w-full rounded-md border border-violet-200 bg-white/80 px-3 py-2 outline-none transition-all focus:ring-2 focus:ring-violet-200" 
                    rows={6}
                    required 
                  />
                </div>
                
                <button 
                  type="submit"
                  className="w-full rounded-md bg-violet-700 text-white px-4 py-3 font-medium shadow-elegant transition-all hover:bg-violet-800"
                >
                  Envoyer le message
                </button>
              </form>
            </div>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="shadow-card rounded-xl border border-violet-100/60 bg-white/70 backdrop-blur">
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-6">Informations de contact</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-xl">📧</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Email</h4>
                      <p className="text-muted-foreground">madraninorah@gmail.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-xl">📱</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Téléphone</h4>
                      <p className="text-muted-foreground">06 58 78 67 20</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-primary text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Localisation</h4>
                      <p className="text-muted-foreground">Maroc, Casablanca</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="shadow-card rounded-xl border border-violet-100/60 bg-white/70 backdrop-blur">
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-6">Réseaux sociaux</h3>
                
                <div className="space-y-4">
                  <a 
                    href="https://linkedin.com/in/monprofil" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-secondary/50 transition-smooth group"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
                      <span className="text-blue-600 text-lg">💼</span>
                    </div>
                    <div>
                      <h4 className="font-semibold group-hover:text-primary transition-smooth">LinkedIn</h4>
                      <p className="text-sm text-muted-foreground">Mon profil professionnel</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://github.com/monusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-secondary/50 transition-smooth group"
                  >
                    <div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center">
                      <span className="text-gray-600 text-lg">💻</span>
                    </div>
                    <div>
                      <h4 className="font-semibold group-hover:text-primary transition-smooth">GitHub</h4>
                      <p className="text-sm text-muted-foreground">Mes projets open source</p>
                    </div>
                  </a>
                  
                  <a 
                    href="https://twitter.com/monusername" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-4 rounded-lg border border-border hover:bg-secondary/50 transition-smooth group"
                  >
                    <div className="w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                      <span className="text-blue-500 text-lg">🐦</span>
                    </div>
                    <div>
                      <h4 className="font-semibold group-hover:text-primary transition-smooth">Twitter</h4>
                      <p className="text-sm text-muted-foreground">Suivez mes actualités</p>
                    </div>
                  </a>
                </div>
              </div>
            </div>

            <div className="shadow-card bg-gradient-primary text-violet-800 rounded-xl">
              <div className="p-8 text-center">
                <h3 className="text-xl font-semibold mb-4">Disponibilité</h3>
                <p className="mb-6 opacity-90">
                  Actuellement disponible pour de nouveaux projets freelance ou des opportunités d'emploi.
                </p>
                <div className="flex items-center justify-center gap-2">
                  <span className="w-3 h-3 bg-green-400 rounded-full animate-pulse"></span>
                  <span className="font-medium">Disponible maintenant</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}