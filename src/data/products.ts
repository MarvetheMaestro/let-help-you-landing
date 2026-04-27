export interface Product {
  id: string;
  name: string;
  price: number;
  category: 'Streetwear' | 'Luxury' | 'Minimalist' | 'Accessories';
  image: string;
  description: string;
  isBestSeller?: boolean;
  sizes: string[];
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Royal Silk Fusion Robe',
    price: 450,
    category: 'Luxury',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/62439e52-f271-41ac-8065-70a705617836/luxury-collection-42a1d423-1777307379192.webp',
    description: 'A blend of traditional Nigerian heritage and modern luxury. Crafted from the finest silk with intricate embroidery.',
    isBestSeller: true,
    sizes: ['S', 'M', 'L', 'XL']
  },
  {
    id: '2',
    name: 'Architectural Minimalist Blazer',
    price: 320,
    category: 'Minimalist',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/62439e52-f271-41ac-8065-70a705617836/minimalist-collection-8c3ecd70-1777307379048.webp',
    description: 'Sharp lines and impeccable tailoring. This blazer is the cornerstone of a modern wardrobe.',
    isBestSeller: true,
    sizes: ['XS', 'S', 'M', 'L']
  },
  {
    id: '3',
    name: 'Heritage Signature Bag',
    price: 890,
    category: 'Accessories',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/62439e52-f271-41ac-8065-70a705617836/accessories-spotlight-2c6ca30a-1777307378224.webp',
    description: 'The ultimate statement piece. Hand-crafted leather with gold-toned hardware inspired by Nigerian artistry.',
    isBestSeller: true,
    sizes: ['One Size']
  },
  {
    id: '4',
    name: 'Lagos Urban Street Hoodie',
    price: 180,
    category: 'Streetwear',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/62439e52-f271-41ac-8065-70a705617836/streetwear-collection-72734d27-1777307379467.webp',
    description: 'Heavyweight cotton with a bold, expressive silhouette. Designed for the vibrant streets of Lagos.',
    sizes: ['S', 'M', 'L', 'XL', 'XXL']
  },
  {
    id: '5',
    name: 'Midnight Crepe Trousers',
    price: 210,
    category: 'Minimalist',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/62439e52-f271-41ac-8065-70a705617836/minimalist-collection-8c3ecd70-1777307379048.webp',
    description: 'Flowing silhouette with a deep midnight hue. Perfect for transitions from day to night.',
    sizes: ['28', '30', '32', '34']
  },
  {
    id: '6',
    name: 'Gold Accent Silk Scarf',
    price: 120,
    category: 'Accessories',
    image: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/62439e52-f271-41ac-8065-70a705617836/accessories-spotlight-2c6ca30a-1777307378224.webp',
    description: 'Intricately patterned silk with gold foil accents. A versatile accessory for the modern fashionista.',
    sizes: ['One Size']
  }
];