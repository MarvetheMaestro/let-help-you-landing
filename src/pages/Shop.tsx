import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { SlidersHorizontal, ChevronDown, Grid, List } from 'lucide-react';
import { products, Product } from '@/data/products';
import ProductCard from '@/components/ProductCard';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Shop = () => {
  const [category, setCategory] = useState<string>('All');
  const [sortBy, setSortBy] = useState<string>('featured');

  const categories = ['All', 'Luxury', 'Streetwear', 'Minimalist', 'Accessories'];

  const filteredProducts = useMemo(() => {
    let result = category === 'All' 
      ? products 
      : products.filter(p => p.category === category);
    
    if (sortBy === 'price-low') result = [...result].sort((a, b) => a.price - b.price);
    if (sortBy === 'price-high') result = [...result].sort((a, b) => b.price - a.price);
    
    return result;
  }, [category, sortBy]);

  return (
    <div className="fade-in bg-white min-h-screen">
      <div className="container mx-auto px-4 py-16">
        {/* Header */}
        <div className="mb-12">
          <h1 className="text-5xl font-serif mb-4">Collections</h1>
          <p className="text-muted-foreground max-w-2xl">
            Explore our curated range of premium apparel and accessories. Each piece is a testament to Nigerian craftsmanship and modern design.
          </p>
        </div>

        {/* Filters */}
        <div className="sticky top-20 z-40 bg-white/95 backdrop-blur-sm py-4 border-y flex flex-wrap items-center justify-between gap-6 mb-12">
          <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-2 md:pb-0">
            {categories.map(cat => (
              <Button
                key={cat}
                variant={category === cat ? 'default' : 'ghost'}
                onClick={() => setCategory(cat)}
                className={`rounded-none uppercase tracking-widest text-xs px-6 ${category === cat ? 'bg-primary text-white' : ''}`}
              >
                {cat}
              </Button>
            ))}
          </div>

          <div className="flex items-center gap-6">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="outline" className="rounded-none border-border uppercase tracking-widest text-xs">
                  Sort: {sortBy === 'featured' ? 'Featured' : sortBy === 'price-low' ? 'Price Low-High' : 'Price High-Low'} <ChevronDown className="ml-2 h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end" className="rounded-none">
                <DropdownMenuItem onClick={() => setSortBy('featured')} className="uppercase text-xs tracking-widest">Featured</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('price-low')} className="uppercase text-xs tracking-widest">Price Low-High</DropdownMenuItem>
                <DropdownMenuItem onClick={() => setSortBy('price-high')} className="uppercase text-xs tracking-widest">Price High-Low</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
            
            <div className="hidden sm:flex border-l pl-6 gap-2">
              <Button variant="ghost" size="icon" className="text-primary"><Grid className="h-5 w-5" /></Button>
              <Button variant="ghost" size="icon" className="text-muted-foreground"><List className="h-5 w-5" /></Button>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-x-8 gap-y-16">
          <AnimatePresence mode="popLayout">
            {filteredProducts.map((product) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
              >
                <ProductCard product={product} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-32 text-center">
            <p className="text-xl text-muted-foreground italic">No products found in this category.</p>
            <Button variant="link" className="mt-4 text-accent" onClick={() => setCategory('All')}>View All Products</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Shop;