import { useState } from 'react';
import { motion } from 'motion/react';
import { Mail, Phone, MapPin, Instagram, Facebook, Twitter, Send, Clock, MessageCircle } from 'lucide-react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock submission
    alert('Message envoyé ! Nous vous répondrons dans les 24h.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-6 gradient-text">
            Parlons Ensemble
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Une question ? Un projet ? Notre équipe est là pour vous accompagner dans votre quête d&apos;excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="glass-effect rounded-3xl p-8 md:p-12"
          >
            <h2 className="text-3xl font-bold mb-6">Envoyez-nous un message</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block mb-2 text-sm font-bold">Nom complet</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-input-background border border-primary/20 focus:border-primary focus:outline-none transition-colors"
                  placeholder="Votre nom"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-bold">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-input-background border border-primary/20 focus:border-primary focus:outline-none transition-colors"
                  placeholder="votre@email.com"
                />
              </div>

              <div>
                <label className="block mb-2 text-sm font-bold">Sujet</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-input-background border border-primary/20 focus:border-primary focus:outline-none transition-colors"
                >
                  <option value="">Sélectionnez un sujet</option>
                  <option value="product">Question sur un produit</option>
                  <option value="order">Suivi de commande</option>
                  <option value="partnership">Partenariat</option>
                  <option value="other">Autre</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 text-sm font-bold">Message</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 rounded-xl bg-input-background border border-primary/20 focus:border-primary focus:outline-none transition-colors resize-none"
                  placeholder="Votre message..."
                />
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full py-4 bg-gradient-to-r from-primary via-accent to-secondary rounded-full text-white font-bold flex items-center justify-center space-x-2 shadow-xl hover:shadow-primary/50 transition-shadow"
              >
                <Send className="w-5 h-5" />
                <span>Envoyer le message</span>
              </motion.button>
            </form>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-8"
          >
            {/* Info Cards */}
            <div className="space-y-4">
              {[
                {
                  icon: MapPin,
                  title: 'Adresse',
                  content: '123 Avenue du Luxe\nParis 75008, France',
                  gradient: 'from-primary to-accent',
                },
                {
                  icon: Phone,
                  title: 'Téléphone',
                  content: '+33 1 23 45 67 89\nLun-Ven: 9h-18h',
                  gradient: 'from-accent to-secondary',
                },
                {
                  icon: Mail,
                  title: 'Email',
                  content: 'contact@eulalie-events.fr\nRéponse sous 24h',
                  gradient: 'from-secondary to-primary',
                },
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="glass-effect rounded-2xl p-6 hover:bg-muted/30 transition-colors group"
                >
                  <div className="flex items-start space-x-4">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform`}>
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold mb-1">{item.title}</h3>
                      <p className="text-muted-foreground whitespace-pre-line text-sm">
                        {item.content}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Hours */}
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <Clock className="w-6 h-6 text-primary" />
                <h3 className="font-bold text-lg">Heures d&apos;ouverture</h3>
              </div>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Lundi - Vendredi</span>
                  <span className="font-bold">9h00 - 18h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Samedi</span>
                  <span className="font-bold">10h00 - 16h00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-muted-foreground">Dimanche</span>
                  <span className="font-bold">Fermé</span>
                </div>
              </div>
            </div>

            {/* Social Media */}
            <div className="glass-effect rounded-2xl p-6">
              <div className="flex items-center space-x-3 mb-4">
                <MessageCircle className="w-6 h-6 text-primary" />
                <h3 className="font-bold text-lg">Suivez-nous</h3>
              </div>
              <p className="text-sm text-muted-foreground mb-4">
                Rejoignez notre communauté et ne manquez aucune nouveauté !
              </p>
              <div className="flex space-x-3">
                {[
                  { Icon: Instagram, href: '#', color: 'from-pink-500 to-purple-500' },
                  { Icon: Facebook, href: '#', color: 'from-blue-500 to-blue-600' },
                  { Icon: Twitter, href: '#', color: 'from-sky-400 to-blue-500' },
                ].map(({ Icon, href, color }, i) => (
                  <motion.a
                    key={i}
                    href={href}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow`}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-effect rounded-3xl overflow-hidden"
        >
          <div className="relative h-96 bg-gradient-to-br from-primary/20 via-accent/20 to-secondary/20 flex items-center justify-center">
            <div className="text-center space-y-4">
              <MapPin className="w-16 h-16 mx-auto text-primary animate-bounce" />
              <h3 className="text-2xl font-bold">Notre Boutique à Paris</h3>
              <p className="text-muted-foreground">
                Visitez-nous au 123 Avenue du Luxe, Paris 75008
              </p>
              <button className="px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-full text-white font-bold hover:shadow-lg transition-shadow">
                Obtenir l&apos;itinéraire
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
