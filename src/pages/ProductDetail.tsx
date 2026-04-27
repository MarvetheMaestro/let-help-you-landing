import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ShoppingBag, ChevronRight, Truck, RefreshCw, ShieldCheck, Star } from 'lucide-react';
import { products } from '@/data/products';
import { useCart } from '@/context/CartContext';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import ProductCard from '@/components/ProductCard';

const ProductDetail = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const product = products.find(p => p.id === id);
  const [selectedSize, setSelectedSize] = useState<string>('');
  const [mainImage, setMainImage] = useState<string>(product?.image || '');

  if (!product) return <div className="py-20 text-center">Product not found</div>;

  const relatedProducts = products.filter(p => p.category === product.category && p.id !== product.id).slice(0, 4);

  return (
    <div className="fade-in bg-white">
      <div className="container mx-auto px-4 py-8">
        {/* Breadcrumbs */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-muted-foreground mb-12">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <ChevronRight className="h-3 w-3" />
          <Link to="/shop" className="hover:text-primary transition-colors">Shop</Link>
          <ChevronRight className="h-3 w-3" />
          <span className="text-primary font-bold">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Gallery */}
          <div className="space-y-4">
            <div className="aspect-[4/5] bg-secondary overflow-hidden">
              <img src={mainImage} alt={product.name} className="w-full h-full object-cover" />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {[product.image, ...Array(3).fill(product.image)].map((img, idx) => (
                <div 
                  key={idx} 
                  className={`aspect-square bg-secondary cursor-pointer border-2 transition-all ${mainImage === img && idx === 0 ? 'border-accent' : 'border-transparent'}`}
                  onClick={() => setMainImage(img)}
                >
                  <img src={img} alt={`${product.name} ${idx}`} className="w-full h-full object-cover" />
                </div>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex flex-col">
            <div className="mb-8">
              <p className="uppercase tracking-[0.2em] text-xs text-accent font-bold mb-4">{product.category}</p>
              <h1 className="text-4xl md:text-5xl font-serif mb-4">{product.name}</h1>
              <div className="flex items-center gap-4 mb-6">
                <span className="text-3xl font-light">${product.price}</span>
                <div className="flex gap-1 text-accent">
                  {[...Array(5)].map((_, i) => <Star key={i} className="h-4 w-4 fill-current" />)}
                  <span className="text-xs text-muted-foreground ml-2">(24 reviews)</span>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {product.description}
              </p>
            </div>

            <Separator className="mb-8" />

            <div className="mb-10 space-y-6">
              <div>
                <div className="flex justify-between mb-4">
                  <h3 className="uppercase tracking-widest text-xs font-bold">Select Size</h3>
                  <button className="text-xs text-muted-foreground underline uppercase tracking-widest">Size Guide</button>
                </div>
                <div className="flex flex-wrap gap-3">
                  {product.sizes.map(size => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`h-12 w-16 border uppercase text-xs tracking-widest transition-all ${
                        selectedSize === size 
                          ? 'bg-primary text-white border-primary' 
                          : 'hover:border-primary'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              <Button 
                onClick={() => addToCart(product, selectedSize)}
                className="w-full h-16 rounded-none bg-primary text-white uppercase tracking-[0.2em] font-bold text-base hover:bg-primary/90"
              >
                <ShoppingBag className="mr-2 h-5 w-5" /> Add to Shopping Bag
              </Button>
            </div>

            {/* Trust Signals */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 py-8 border-y">
              <div className="flex flex-col items-center text-center gap-2">
                <Truck className="h-5 w-5 text-accent" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Fast Delivery</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2 border-x md:px-4">
                <ShieldCheck className="h-5 w-5 text-accent" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Secure Checkout</span>
              </div>
              <div className="flex flex-col items-center text-center gap-2">
                <RefreshCw className="h-5 w-5 text-accent" />
                <span className="text-[10px] uppercase tracking-widest font-bold">Easy Returns</span>
              </div>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <section className="py-16">
            <h2 className="text-3xl font-serif mb-12">Complete The Look</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {relatedProducts.map(p => (
                <ProductCard key={p.id} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </div>
  );
};

export default ProductDetail;