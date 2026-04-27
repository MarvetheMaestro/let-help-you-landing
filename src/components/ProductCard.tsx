import { Link } from 'react-router-dom';
import { Product } from '@/data/products';
import { motion } from 'framer-motion';
import { ShoppingBag } from 'lucide-react';
import { useCart } from '@/context/CartContext';

const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart();

  return (
    <div className="group">
      <div className="relative aspect-[3/4] overflow-hidden bg-secondary mb-4">
        <Link to={`/product/${product.id}`}>
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
        </Link>
        <button 
          onClick={(e) => {
            e.preventDefault();
            addToCart(product, product.sizes[0]);
          }}
          className="absolute bottom-0 left-0 w-full py-4 bg-primary text-primary-foreground translate-y-full group-hover:translate-y-0 transition-transform duration-300 uppercase tracking-widest text-xs font-bold flex items-center justify-center gap-2"
        >
          <ShoppingBag className="h-4 w-4" /> Quick Add
        </button>
        {product.isBestSeller && (
          <span className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm text-black px-3 py-1 text-[10px] uppercase tracking-widest font-bold">
            Best Seller
          </span>
        )}
      </div>
      <div className="space-y-1">
        <div className="flex justify-between items-start">
          <Link to={`/product/${product.id}`} className="hover:text-accent transition-colors">
            <h3 className="text-sm uppercase tracking-widest font-medium">{product.name}</h3>
          </Link>
          <span className="text-sm font-light">${product.price}</span>
        </div>
        <p className="text-xs text-muted-foreground uppercase tracking-widest">{product.category}</p>
      </div>
    </div>
  );
};

export default ProductCard;