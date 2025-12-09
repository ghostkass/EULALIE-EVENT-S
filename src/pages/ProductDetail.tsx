import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'motion/react';
import { Star, ShoppingCart, Heart, TrendingUp, Package, Shield, ArrowLeft, Users } from 'lucide-react';
import { products } from '../data/products';

export function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [isLiked, setIsLiked] = useState(false);

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Produit non trouvé</h1>
          <Link to="/boutique" className="text-primary hover:underline">
            Retour à la boutique
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Back Button */}
        <Link to="/boutique">
          <motion.button
            whileHover={{ x: -5 }}
            className="flex items-center space-x-2 text-muted-foreground hover:text-primary mb-8 transition-colors"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Retour à la boutique</span>
          </motion.button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          {/* Product Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="relative"
          >
            <div className="sticky top-32">
              <div className="relative rounded-3xl overflow-hidden glass-effect">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full aspect-square object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/50 to-transparent"></div>
                
                {product.isLimited && (
                  <div className="absolute top-6 left-6 bg-accent text-white px-4 py-2 rounded-full font-bold shadow-lg">
                    Édition Limitée
                  </div>
                )}

                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  onClick={() => setIsLiked(!isLiked)}
                  className="absolute top-6 right-6 w-12 h-12 rounded-full glass-effect flex items-center justify-center hover:bg-accent/20 transition-colors"
                >
                  <Heart
                    className={`w-6 h-6 transition-colors ${
                      isLiked ? 'fill-accent text-accent' : 'text-foreground'
                    }`}
                  />
                </motion.button>
              </div>
            </div>
          </motion.div>

          {/* Product Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-6"
          >
            {/* Category */}
            <div className="text-sm text-primary font-bold uppercase tracking-wider">
              {product.category.replace('-', ' ')}
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold gradient-text">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'fill-accent text-accent'
                          : 'text-muted-foreground'
                      }`}
                    />
                  ))}
                </div>
                <span className="font-bold">{product.rating}</span>
              </div>
              <span className="text-muted-foreground">
                ({product.reviews} avis)
              </span>
            </div>

            {/* Price */}
            <div className="text-5xl font-bold gradient-text">
              {product.price}€
            </div>

            {/* Description */}
            <p className="text-lg text-muted-foreground leading-relaxed">
              {product.description}
            </p>

            {/* Psychological Triggers */}
            <div className="space-y-3 py-6">
              {product.stock < 15 && (
                <div className="flex items-center space-x-3 text-accent">
                  <Package className="w-5 h-5" />
                  <span className="font-bold">
                    Attention : Plus que {product.stock} en stock !
                  </span>
                </div>
              )}

              <div className="flex items-center space-x-3 text-secondary">
                <TrendingUp className="w-5 h-5" />
                <span>Ajouté au panier 27 fois aujourd&apos;hui</span>
              </div>

              <div className="flex items-center space-x-3 text-primary">
                <Users className="w-5 h-5" />
                <span>{product.reviews} clients adorent ce produit</span>
              </div>
            </div>

            {/* Quantity Selector */}
            <div>
              <label className="block mb-3 font-bold">Quantité</label>
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="w-12 h-12 rounded-lg glass-effect hover:bg-muted/50 transition-colors font-bold"
                >
                  -
                </button>
                <span className="text-2xl font-bold w-12 text-center">{quantity}</span>
                <button
                  onClick={() => setQuantity(Math.min(product.stock, quantity + 1))}
                  className="w-12 h-12 rounded-lg glass-effect hover:bg-muted/50 transition-colors font-bold"
                >
                  +
                </button>
              </div>
            </div>

            {/* Add to Cart */}
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full py-5 bg-gradient-to-r from-primary via-accent to-secondary rounded-full text-white font-bold text-lg flex items-center justify-center space-x-3 shadow-2xl hover:shadow-primary/50 transition-shadow"
            >
              <ShoppingCart className="w-6 h-6" />
              <span>Ajouter au Panier</span>
            </motion.button>

            {/* Trust Badges */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              {[
                { icon: Shield, label: 'Paiement Sécurisé' },
                { icon: Package, label: 'Livraison Rapide' },
                { icon: Star, label: 'Qualité Premium' },
              ].map((badge, i) => (
                <div key={i} className="text-center glass-effect rounded-xl p-4">
                  <badge.icon className="w-6 h-6 mx-auto mb-2 text-accent" />
                  <p className="text-xs text-muted-foreground">{badge.label}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div>
            <h2 className="text-3xl font-bold mb-8 gradient-text">
              Produits Similaires
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link key={relatedProduct.id} to={`/produit/${relatedProduct.id}`}>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="glass-effect rounded-2xl overflow-hidden"
                  >
                    <div className="aspect-square overflow-hidden">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-bold mb-2">{relatedProduct.name}</h3>
                      <div className="flex items-center justify-between">
                        <span className="text-xl font-bold gradient-text">
                          {relatedProduct.price}€
                        </span>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-accent text-accent" />
                          <span className="text-sm">{relatedProduct.rating}</span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
