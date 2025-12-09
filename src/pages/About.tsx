import { motion } from 'motion/react';
import { Sparkles, Heart, Award, Globe } from 'lucide-react';

export function About() {
  const values = [
    {
      icon: Sparkles,
      title: 'Excellence',
      description: 'Chaque produit est sélectionné avec soin pour garantir la plus haute qualité.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Notre amour pour le luxe et la beauté guide chacune de nos décisions.',
    },
    {
      icon: Award,
      title: 'Innovation',
      description: 'Nous repoussons constamment les limites pour créer des expériences uniques.',
    },
    {
      icon: Globe,
      title: 'Accessibilité',
      description: 'Le luxe doit être accessible à tous ceux qui rêvent de se distinguer.',
    },
  ];

  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Hero Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            L&apos;Histoire D&apos;Une Vision
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            EULALIE EVENT&apos;S est née d&apos;un rêve : rendre le luxe accessible et transformer chaque moment en une expérience inoubliable.
          </p>
        </motion.div>

        {/* Founder Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1603132789551-47b97377046e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjUyNDI3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Eulalie, Fondatrice"
                className="w-full aspect-[3/4] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
              
              {/* Floating Elements */}
              <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-10 right-10 w-20 h-20 rounded-full bg-primary/30 blur-2xl animate-pulse"></div>
                <div className="absolute bottom-20 left-10 w-32 h-32 rounded-full bg-secondary/20 blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col justify-center space-y-6"
          >
            <div className="flex items-center space-x-3">
              <Sparkles className="w-8 h-8 text-primary" />
              <span className="text-sm font-bold text-primary uppercase tracking-wider">
                La Fondatrice
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold gradient-text">
              Eulalie Mbemba
            </h2>

            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Passionnée par l&apos;univers de la beauté et de la mode depuis toujours, j&apos;ai créé EULALIE EVENT&apos;S en 2020 avec une vision claire : <span className="text-foreground font-bold">démocratiser le luxe authentique</span>.
              </p>
              <p>
                Après des années dans l&apos;industrie de la parfumerie haut de gamme à Paris, j&apos;ai réalisé que le véritable luxe n&apos;est pas seulement une question de prix, mais d&apos;<span className="text-foreground font-bold">expérience, d&apos;émotion et d&apos;authenticité</span>.
              </p>
              <p>
                Aujourd&apos;hui, EULALIE EVENT&apos;S est plus qu&apos;une marque : c&apos;est un <span className="gradient-text font-bold">mouvement qui célèbre l&apos;individualité</span> et invite chacun à découvrir sa propre définition de l&apos;excellence.
              </p>
            </div>

            <div className="pt-6">
              <div className="glass-effect rounded-2xl p-6">
                <p className="italic text-foreground">
                  &quot;Mon objectif est simple : que chaque personne qui porte nos produits se sente unique, confiante et absolument irrésistible.&quot;
                </p>
                <p className="mt-4 text-sm text-muted-foreground">
                  — Eulalie Mbemba, Fondatrice
                </p>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Values Section */}
        <div className="mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Nos Valeurs
            </h2>
            <p className="text-xl text-muted-foreground">
              Les piliers qui définissent notre identité
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-8 text-center hover:bg-muted/30 transition-colors group"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Story Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center gradient-text">
            Notre Parcours
          </h2>

          <div className="space-y-12 max-w-4xl mx-auto">
            {[
              {
                year: '2020',
                title: 'La Naissance',
                description: 'Création d\'EULALIE EVENT\'S avec la première collection de parfums artisanaux.',
              },
              {
                year: '2021',
                title: 'L\'Expansion',
                description: 'Lancement de la gamme cosmétique et ouverture du premier showroom à Paris.',
              },
              {
                year: '2023',
                title: 'La Reconnaissance',
                description: 'Prix de la Meilleure Marque Émergente et extension vers la mode de luxe.',
              },
              {
                year: '2025',
                title: 'L\'Innovation',
                description: 'Plus de 15 000 clients satisfaits et lancement de notre boutique en ligne.',
              },
            ].map((milestone, index) => (
              <div key={index} className="flex gap-8 items-start">
                <div className="flex-shrink-0">
                  <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-primary to-accent flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">{milestone.year}</span>
                  </div>
                </div>
                <div className="flex-1 glass-effect rounded-2xl p-6">
                  <h3 className="text-2xl font-bold mb-3">{milestone.title}</h3>
                  <p className="text-muted-foreground">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center glass-effect rounded-3xl p-12"
        >
          <Sparkles className="w-12 h-12 mx-auto mb-6 text-primary animate-pulse" />
          <h2 className="text-3xl md:text-4xl font-bold mb-4 gradient-text">
            Prêt À Rejoindre L&apos;Aventure ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Découvre notre collection et fais partie de la famille EULALIE EVENT&apos;S
          </p>
          <motion.a
            href="/boutique"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-block px-12 py-5 bg-gradient-to-r from-primary via-accent to-secondary rounded-full text-white font-bold text-lg shadow-2xl hover:shadow-primary/50 transition-shadow"
          >
            Découvrir La Boutique
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
}
