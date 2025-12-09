import { Link } from 'react-router-dom';
import { Instagram, Facebook, Twitter, Mail, Phone, MapPin, Sparkles } from 'lucide-react';

export function Footer() {
  return (
    <footer className="relative bg-gradient-to-b from-background via-card to-background border-t border-primary/20">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,0,255,0.1),transparent)] pointer-events-none"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Section */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Sparkles className="w-8 h-8 text-primary animate-pulse" />
              <span className="text-2xl font-bold gradient-text">EULALIE EVENT&apos;S</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              L&apos;exception incarnée. Des parfums, cosmétiques et articles de mode qui transcendent l&apos;ordinaire et célèbrent votre unicité.
            </p>
            <div className="flex space-x-4">
              {[
                { Icon: Instagram, href: '#', label: 'Instagram' },
                { Icon: Facebook, href: '#', label: 'Facebook' },
                { Icon: Twitter, href: '#', label: 'Twitter' },
              ].map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="w-10 h-10 rounded-lg bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center hover:from-primary hover:to-secondary transition-all duration-300 group"
                  aria-label={label}
                >
                  <Icon className="w-5 h-5 group-hover:scale-110 transition-transform" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Navigation</h3>
            <ul className="space-y-3">
              {[
                { to: '/', label: 'Accueil' },
                { to: '/boutique', label: 'Boutique' },
                { to: '/a-propos', label: 'À Propos' },
                { to: '/contact', label: 'Contact' },
              ].map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-muted-foreground hover:text-primary transition-colors inline-flex items-center group"
                  >
                    <span className="group-hover:translate-x-1 transition-transform">
                      {link.label}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-bold mb-4 text-lg">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                <span>123 Avenue du Luxe, Paris 75008</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Phone className="w-5 h-5 text-accent flex-shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center space-x-3 text-muted-foreground">
                <Mail className="w-5 h-5 text-accent flex-shrink-0" />
                <span>contact@eulalie-events.fr</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary/20 text-center">
          <p className="text-muted-foreground">
            © 2025 EULALIE EVENT&apos;S. Tous droits réservés. Fait avec passion.
          </p>
        </div>
      </div>
    </footer>
  );
}
