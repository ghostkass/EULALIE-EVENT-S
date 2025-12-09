export interface Product {
  id: number;
  name: string;
  category: 'parfum' | 'cosmetique' | 'mode-homme' | 'mode-femme';
  price: number;
  image: string;
  description: string;
  stock: number;
  rating: number;
  reviews: number;
  isLimited?: boolean;
  trending?: boolean;
}

export const products: Product[] = [
  {
    id: 1,
    name: 'Élixir Nocturne',
    category: 'parfum',
    price: 189,
    image: 'https://images.unsplash.com/photo-1719175936556-dbd05e415913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlfGVufDF8fHx8MTc2NTE5MjM0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Un parfum envoûtant qui capture l\'essence de la nuit étoilée. Notes de jasmin, vanille bourbon et bois de santal.',
    stock: 12,
    rating: 4.9,
    reviews: 267,
    isLimited: true,
    trending: true,
  },
  {
    id: 2,
    name: 'Aurore Infinie',
    category: 'parfum',
    price: 165,
    image: 'https://images.unsplash.com/photo-1724732678052-1437962cbbab?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcmVtaXVtJTIwZnJhZ3JhbmNlfGVufDF8fHx8MTc2NTIxOTY1MXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'La fraîcheur de l\'aube dans un flacon. Bergamote, néroli et musc blanc pour une signature inoubliable.',
    stock: 23,
    rating: 4.8,
    reviews: 189,
    trending: true,
  },
  {
    id: 3,
    name: 'Sérum Lumière Éternelle',
    category: 'cosmetique',
    price: 145,
    image: 'https://images.unsplash.com/photo-1523634118614-82b2685ee3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBsdXh1cnl8ZW58MXx8fHwxNzY1MjgyNjExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Concentré d\'acide hyaluronique et vitamine C. Transforme votre peau pour un éclat de lumière pure.',
    stock: 34,
    rating: 5.0,
    reviews: 412,
    trending: true,
  },
  {
    id: 4,
    name: 'Montre Prestige Noir',
    category: 'mode-homme',
    price: 599,
    image: 'https://images.unsplash.com/photo-1762513461072-5008c7f6511d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBmYXNoaW9uJTIwYWNjZXNzb3JpZXN8ZW58MXx8fHwxNzY1Mjg0MjM0fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Montre automatique suisse au design minimaliste. Boîtier en acier inoxydable, bracelet en cuir italien.',
    stock: 8,
    rating: 4.9,
    reviews: 156,
    isLimited: true,
  },
  {
    id: 5,
    name: 'Sac Icône Métallique',
    category: 'mode-femme',
    price: 449,
    image: 'https://images.unsplash.com/photo-1743000916326-117f9fe838a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBicmFuZCUyMHN0b3JlfGVufDF8fHx8MTc2NTI4NDIzNXww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Sac à main en cuir véritable avec finitions métalliques chromées. L\'accessoire qui sublime toutes vos tenues.',
    stock: 15,
    rating: 4.7,
    reviews: 203,
    trending: true,
  },
  {
    id: 6,
    name: 'Essence de Velours',
    category: 'parfum',
    price: 175,
    image: 'https://images.unsplash.com/photo-1719175936556-dbd05e415913?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBwZXJmdW1lJTIwYm90dGxlfGVufDF8fHx8MTc2NTE5MjM0Nnww&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Notes poudrées et sensuelles. Rose de Damas, iris et patchouli créent une symphonie olfactive unique.',
    stock: 19,
    rating: 4.8,
    reviews: 178,
  },
  {
    id: 7,
    name: 'Crème Réparatrice Divine',
    category: 'cosmetique',
    price: 125,
    image: 'https://images.unsplash.com/photo-1523634118614-82b2685ee3df?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtZXRpY3MlMjBsdXh1cnl8ZW58MXx8fHwxNzY1MjgyNjExfDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Texture onctueuse enrichie en beurre de karité et huiles précieuses. Régénère intensément votre peau.',
    stock: 42,
    rating: 4.9,
    reviews: 321,
  },
  {
    id: 8,
    name: 'Veste Urbaine Premium',
    category: 'mode-homme',
    price: 389,
    image: 'https://images.unsplash.com/photo-1615787421240-3464c7739197?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYW5kc29tZSUyMG1hbiUyMGZhc2hpb258ZW58MXx8fHwxNzY1Mjg0MjM1fDA&ixlib=rb-4.1.0&q=80&w=1080',
    description: 'Coupe moderne, tissu technique respirant. La veste qui allie style et performance urbaine.',
    stock: 11,
    rating: 4.6,
    reviews: 94,
  },
];
