import { Link } from 'react-router-dom';
import { Mail, Instagram, Facebook, Twitter, Phone, MapPin } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground pt-20 pb-10">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <h2 className="text-2xl font-bold tracking-tighter font-serif uppercase">Kerenalexis</h2>
            <p className="text-primary-foreground/70 leading-relaxed max-w-xs">
              Premium fashion from the heart of Nigeria. We blend heritage with modern minimalism to create timeless pieces for the bold.
            </p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-accent transition-colors"><Instagram className="h-5 w-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Facebook className="h-5 w-5" /></a>
              <a href="#" className="hover:text-accent transition-colors"><Twitter className="h-5 w-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-sm uppercase tracking-widest font-semibold">Shop</h3>
            <ul className="space-y-4 text-primary-foreground/70">
              <li><Link to="/shop" className="hover:text-accent transition-colors">New Arrivals</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Luxury Collection</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Streetwear</Link></li>
              <li><Link to="/shop" className="hover:text-accent transition-colors">Accessories</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-6">
            <h3 className="text-sm uppercase tracking-widest font-semibold">Help</h3>
            <ul className="space-y-4 text-primary-foreground/70">
              <li><Link to="/contact" className="hover:text-accent transition-colors">Contact Us</Link></li>
              <li><a href="#" className="hover:text-accent transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-6">
            <h3 className="text-sm uppercase tracking-widest font-semibold">Stay Inspired</h3>
            <p className="text-primary-foreground/70 text-sm">Join the Kerenalexis circle for exclusive access and news.</p>
            <div className="flex gap-2">
              <Input 
                className="bg-primary-foreground/10 border-none text-white placeholder:text-primary-foreground/40" 
                placeholder="Email address"
              />
              <Button className="bg-white text-black hover:bg-accent hover:text-white transition-all uppercase text-xs tracking-widest px-6">
                Join
              </Button>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-xs text-primary-foreground/50 tracking-widest">
            © {new Date().getFullYear()} KERENALEXIS. ALL RIGHTS RESERVED.
          </p>
          <div className="flex gap-6 text-[10px] tracking-widest uppercase opacity-50">
            <a href="#" className="hover:opacity-100 transition-opacity">Privacy Policy</a>
            <a href="#" className="hover:opacity-100 transition-opacity">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;