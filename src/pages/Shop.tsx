import { useState } from 'react';
import { motion } from 'motion/react';
import { Link } from 'react-router-dom';
import { Star, Filter, TrendingUp } from 'lucide-react';
import { products, Product } from '../data/products';

export function Shop() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Tout' },
    { id: 'parfum', label: 'Parfums' },
    { id: 'cosmetique', label: 'Cosmétiques' },
    { id: 'mode-homme', label: 'Mode Homme' },
    { id: 'mode-femme', label: 'Mode Femme' },
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen pt-32 pb-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-5xl md:text-6xl font-bold mb-4 gradient-text">
            Notre Collection Exclusive
          </h1>
          <p className="text-xl text-muted-foreground">
            Explore les trésors qui définiront ton style
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-12"
        >
          <div className="flex items-center justify-center space-x-2 mb-6">
            <Filter className="w-5 h-5 text-primary" />
            <span className="font-bold">Filtrer par catégorie</span>
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={`px-6 py-3 rounded-full font-bold transition-all ${
                  selectedCategory === category.id
                    ? 'bg-gradient-to-r from-primary to-accent text-white shadow-lg'
                    : 'glass-effect hover:bg-muted/50'
                }`}
              >
                {category.label}
              </motion.button>
            ))}
          </div>

          <div className="text-center mt-6 text-muted-foreground">
            {filteredProducts.length} produit{filteredProducts.length > 1 ? 's' : ''} trouvé{filteredProducts.length > 1 ? 's' : ''}
          </div>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <Link to={`/produit/${product.id}`}>
                <div className="group relative glass-effect rounded-2xl overflow-hidden hover:scale-105 transition-all duration-300 h-full">
                  {/* Badges */}
                  <div className="absolute top-4 left-4 z-10 flex flex-col gap-2">
                    {product.isLimited && (
                      <div className="bg-accent text-white px-3 py-1 rounded-full text-xs font-bold">
                        Édition Limitée
                      </div>
                    )}
                    {product.trending && (
                      <div className="bg-secondary text-background px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                        <TrendingUp className="w-3 h-3" />
                        <span>Tendance</span>
                      </div>
                    )}
                  </div>

                  {/* Image */}
                  <div className="aspect-square overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent"></div>
                  </div>

                  {/* Info */}
                  <div className="p-5">
                    <div className="flex items-start justify-between mb-2">
                      <div className="flex-1">
                        <h3 className="font-bold text-lg mb-1 line-clamp-1">{product.name}</h3>
                        <p className="text-xs text-muted-foreground capitalize">
                          {product.category.replace('-', ' ')}
                        </p>
                      </div>
                      <div className="flex items-center space-x-1 ml-2">
                        <Star className="w-4 h-4 fill-accent text-accent flex-shrink-0" />
                        <span className="text-sm font-bold">{product.rating}</span>
                      </div>
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {product.description}
                    </p>

                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold gradient-text">{product.price}€</span>
                      <span className={`text-xs px-2 py-1 rounded-full ${
                        product.stock < 15
                          ? 'bg-accent/20 text-accent'
                          : 'bg-secondary/20 text-secondary'
                      }`}>
                        {product.stock < 15 ? `Plus que ${product.stock}` : 'En stock'}
                      </span>
                    </div>

                    <div className="mt-3 text-xs text-muted-foreground">
                      {product.reviews} avis clients
                    </div>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/50 rounded-2xl transition-colors pointer-events-none"></div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        {/* Empty State */}
        {filteredProducts.length === 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-2xl text-muted-foreground mb-4">
              Aucun produit trouvé dans cette catégorie
            </p>
            <button
              onClick={() => setSelectedCategory('all')}
              className="px-6 py-3 bg-gradient-to-r from-primary to-accent rounded-full text-white font-bold"
            >
              Voir tous les produits
            </button>
          </motion.div>
        )}
      </div>
    </div>
  );
}
