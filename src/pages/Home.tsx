import { motion } from "framer-motion";
import { ArrowRight, ShoppingBag, Star, Shield, Truck } from "lucide-react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import ProductCard from "../components/ProductCard";
import { Button } from "@/components/ui/button";

export default function Home() {
  const bestSellers = products.filter(p => p.isBestSeller);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen min-h-[700px] flex items-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/62439e52-f271-41ac-8065-70a705617836/hero-banner-1f8d7727-1777307378751.webp" 
            alt="Kerenalexis Hero" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="container mx-auto px-4 relative z-10 text-white">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl"
          >
            <span className="uppercase tracking-[0.3em] text-sm font-light mb-4 block">New Collection 2025</span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 leading-tight">
              Boldly <br />Expressive.
            </h1>
            <p className="text-lg md:text-xl font-light mb-10 text-zinc-200 max-w-lg">
              Experience the fusion of Nigerian heritage and modern luxury. 
              Kerenalexis brings you premium fashion that tells a story.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/shop">
                <Button className="bg-white text-black hover:bg-zinc-200 h-14 px-10 rounded-none text-base font-bold">
                  SHOP NOW <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link to="/about">
                <Button variant="outline" className="border-white text-white hover:bg-white/10 h-14 px-10 rounded-none text-base">
                  OUR STORY
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Featured Collections */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-serif font-bold">Featured Collections</h2>
              <p className="text-zinc-500 mt-2">Curated styles for the fashion-conscious</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { 
                title: 'Luxury', 
                img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/62439e52-f271-41ac-8065-70a705617836/luxury-collection-42a1d423-1777307379192.webp',
                link: '/shop?category=Luxury'
              },
              { 
                title: 'Streetwear', 
                img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/62439e52-f271-41ac-8065-70a705617836/streetwear-collection-72734d27-1777307379467.webp',
                link: '/shop?category=Streetwear'
              },
              { 
                title: 'Minimalist', 
                img: 'https://storage.googleapis.com/dala-prod-public-storage/generated-images/62439e52-f271-41ac-8065-70a705617836/minimalist-collection-8c3ecd70-1777307379048.webp',
                link: '/shop?category=Minimalist'
              }
            ].map((col, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -10 }}
                className="relative aspect-[4/5] group overflow-hidden"
              >
                <img src={col.img} alt={col.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors" />
                <div className="absolute bottom-8 left-8 text-white">
                  <h3 className="text-2xl font-serif font-bold mb-2">{col.title}</h3>
                  <Link to={col.link} className="text-sm uppercase tracking-widest border-b border-white pb-1">Explore</Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Best Sellers */}
      <section className="py-24 bg-zinc-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-serif font-bold mb-4">Best Sellers</h2>
            <div className="w-20 h-1 bg-black mx-auto" />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {bestSellers.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Brand Story Snippet */}
      <section className="py-24 bg-black text-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/62439e52-f271-41ac-8065-70a705617836/lifestyle-social-proof-798f0489-1777307379655.webp" 
                alt="Brand Story" 
                className="w-full h-full object-cover"
              />
              <div className="absolute -bottom-8 -right-8 bg-zinc-800 p-8 hidden md:block">
                <p className="text-4xl font-serif italic">Est. 2023</p>
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="text-4xl md:text-5xl font-serif font-bold leading-tight">Crafting Nigerian Luxury for the Modern World</h2>
              <p className="text-lg text-zinc-400 font-light leading-relaxed">
                Kerenalexis was born from a desire to celebrate the rich textile heritage of Nigeria 
                while embracing the global language of minimalist and luxury fashion. Each piece 
                is a conversation between tradition and modernity.
              </p>
              <Link to="/about" className="inline-flex items-center text-white border-b border-white pb-2 hover:text-zinc-400 hover:border-zinc-400 transition-colors">
                LEARN MORE ABOUT OUR JOURNEY <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="py-20 border-b border-zinc-100">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center">
                <Truck className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg">Global Shipping</h3>
              <p className="text-zinc-500">Fast delivery across Nigeria and worldwide</p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center">
                <Shield className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg">Secure Payment</h3>
              <p className="text-zinc-500">Safe checkout powered by Paystack</p>
            </div>
            <div className="space-y-4">
              <div className="mx-auto w-16 h-16 bg-zinc-100 rounded-full flex items-center justify-center">
                <Star className="h-8 w-8" />
              </div>
              <h3 className="font-bold text-lg">Premium Quality</h3>
              <p className="text-zinc-500">Hand-selected materials for lasting elegance</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}