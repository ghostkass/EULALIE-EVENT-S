import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, Sparkles, TrendingUp, Users, Award } from 'lucide-react';
import { products } from '../data/products';

export function Home() {
  const bestSellers = products.filter(p => p.trending).slice(0, 4);

  const testimonials = [
    {
      name: 'Sophie Laurent',
      text: 'Ce parfum a littéralement changé ma vie. Les compliments sont quotidiens !',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1603132789551-47b97377046e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlbGVnYW50JTIwd29tYW4lMjBwb3J0cmFpdHxlbnwxfHx8fDE3NjUyNDI3Njd8MA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Marc Dubois',
      text: 'Qualité exceptionnelle. Enfin une marque qui comprend le luxe moderne.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1615787421240-3464c7739197?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc29tZSUyMG1hbiUyMGZhc2hpb258ZW58MXx8fHwxNzY1Mjg0MjM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    },
    {
      name: 'Élise Martin',
      text: 'Une expérience sensorielle unique. Je suis devenue accro à leur collection.',
      rating: 5,
      image: 'https://images.unsplash.com/photo-1619384846683-8dede3452564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBlbGVnYW50fGVufDF8fHx8MTc2NTE5MDcyN3ww&ixlib=rb-4.1.0&q=80&w=1080',
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background avec effet */}
        <div className="absolute inset-0 bg-gradient-to-br from-background via-card to-background">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,0,255,0.15),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(0,255,255,0.15),transparent_50%)]"></div>
        </div>

        {/* Images flottantes */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
            className="absolute top-20 right-20 w-64 h-64 opacity-30"
          >
            <img
              src="https://images.unsplash.com/photo-1619384846683-8dede3452564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXNoaW9uJTIwbW9kZWwlMjBlbGVnYW50fGVufDF8fHx8MTc2NTE5MDcyN3ww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Fashion"
              className="w-full h-full object-cover rounded-3xl shadow-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent rounded-3xl"></div>
          </motion.div>

          <motion.div
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            className="absolute bottom-32 left-20 w-48 h-48 opacity-40"
          >
            <img
              src="https://images.unsplash.com/photo-1719175936556-dbd05e415913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlfGVufDF8fHx8MTc2NTE5MjM0Nnww&ixlib=rb-4.1.0&q=80&w=1080"
              alt="Perfume"
              className="w-full h-full object-cover rounded-2xl shadow-2xl animate-glow"
            />
          </motion.div>
        </div>

        {/* Contenu Hero */}
        <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex justify-center mb-6">
              <Sparkles className="w-16 h-16 text-primary animate-pulse" />
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-black">
              <span className="gradient-text">Ressens l&apos;exception.</span>
              <br />
              <span className="gradient-text">Porte l&apos;inoubliable.</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
              Découvre une collection exclusive de parfums, cosmétiques et mode qui transcende l&apos;ordinaire.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Link to="/boutique">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-gradient-to-r from-primary via-accent to-secondary rounded-full text-white font-bold flex items-center space-x-2 shadow-2xl hover:shadow-primary/50 transition-shadow"
                >
                  <span>Acheter Maintenant</span>
                  <ArrowRight className="w-5 h-5" />
                </motion.button>
              </Link>

              <Link to="/a-propos">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 glass-effect rounded-full font-bold flex items-center space-x-2 hover:bg-muted/50 transition-colors"
                >
                  <span>Découvrir l&apos;Histoire</span>
                </motion.button>
              </Link>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="grid grid-cols-3 gap-8 pt-16 max-w-3xl mx-auto"
            >
              {[
                { icon: Users, label: '15K+ Clients', value: 'Satisfaits' },
                { icon: Award, label: 'Qualité', value: 'Premium' },
                { icon: TrendingUp, label: '4.9/5', value: 'Note Moyenne' },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <stat.icon className="w-8 h-8 mx-auto mb-2 text-accent" />
                  <div className="font-bold">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.value}</div>
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Best Sellers Section */}
      <section className="py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-b from-card/50 to-transparent"></div>
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Les Senteurs Qui Font Tourner Les Têtes
            </h2>
            <p className="text-xl text-muted-foreground">Nos produits les plus désirés</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bestSellers.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Link to={`/produit/${product.id}`}>
                  <div className="group relative glass-effect rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300">
                    {product.isLimited && (
                      <div className="absolute top-4 left-4 z-10 bg-accent text-white px-3 py-1 rounded-full text-sm font-bold">
                        Édition Limitée
                      </div>
                    )}

                    <div className="aspect-square overflow-hidden">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-bold text-lg">{product.name}</h3>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-accent text-accent" />
                          <span className="text-sm">{product.rating}</span>
                        </div>
                      </div>

                      <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                        {product.description}
                      </p>

                      <div className="flex items-center justify-between">
                        <span className="text-2xl font-bold gradient-text">{product.price}€</span>
                        <span className="text-xs text-muted-foreground">
                          {product.stock} en stock
                        </span>
                      </div>

                      <div className="mt-3 text-xs text-secondary flex items-center space-x-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>Ajouté {27 + index} fois aujourd&apos;hui</span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/boutique">
              <motion.button
                whileHover={{ scale: 1.05 }}
                className="px-8 py-4 neon-border rounded-full font-bold hover:bg-primary/10 transition-colors"
              >
                Voir Toute La Collection
              </motion.button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-24 px-4 bg-gradient-to-b from-transparent via-card/30 to-transparent">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-4 gradient-text">
              Ils Ont Découvert Le Secret
            </h2>
            <p className="text-xl text-muted-foreground">Ce que disent nos clients</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass-effect rounded-2xl p-8 hover:bg-muted/30 transition-colors"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover ring-2 ring-primary"
                  />
                  <div>
                    <h4 className="font-bold">{testimonial.name}</h4>
                    <div className="flex">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground italic">&quot;{testimonial.text}&quot;</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/20 via-accent/20 to-secondary/20"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(10,0,18,0.8)_100%)]"></div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative max-w-4xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-6xl font-bold mb-6 gradient-text">
            Prêt À Vivre L&apos;Exception ?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Rejoins les milliers de personnes qui ont déjà transformé leur quotidien
          </p>
          <Link to="/boutique">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-12 py-5 bg-gradient-to-r from-primary via-accent to-secondary rounded-full text-white font-bold text-lg shadow-2xl hover:shadow-primary/50 transition-shadow"
            >
              Découvrir La Boutique
            </motion.button>
          </Link>
        </motion.div>
      </section>
    </div>
  );
}
