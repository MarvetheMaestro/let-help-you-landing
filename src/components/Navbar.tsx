import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { ShoppingBag, User, LogOut, Menu, X, Settings } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function Navbar() {
  const { totalItems } = useCart();
  const { user, signOut } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleSignOut = async () => {
    await signOut();
    navigate('/');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-serif font-bold tracking-tighter">KERENALEXIS</span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-12">
            <Link to="/shop" className="text-sm font-medium hover:text-zinc-500 transition-colors">SHOP</Link>
            <Link to="/about" className="text-sm font-medium hover:text-zinc-500 transition-colors">ABOUT</Link>
            <Link to="/contact" className="text-sm font-medium hover:text-zinc-500 transition-colors">CONTACT</Link>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-6">
            <Link to="/checkout" className="relative group">
              <ShoppingBag className="h-6 w-6 group-hover:scale-110 transition-transform" />
              {totalItems > 0 && (
                <span className="absolute -top-2 -right-2 bg-black text-white text-[10px] font-bold h-5 w-5 rounded-full flex items-center justify-center">
                  {totalItems}
                </span>
              )}
            </Link>

            {user ? (
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button className="hover:scale-110 transition-transform">
                    <User className="h-6 w-6" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end" className="w-48">
                  <div className="px-2 py-1.5 text-xs text-zinc-500 border-b mb-1">
                    {user.email}
                  </div>
                  <DropdownMenuItem onClick={() => navigate('/admin')}>
                    <Settings className="mr-2 h-4 w-4" />
                    <span>Manage Products</span>
                  </DropdownMenuItem>
                  <DropdownMenuItem onClick={handleSignOut} className="text-red-600">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sign Out</span>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            ) : (
              <Link to="/login" className="text-sm font-medium border-b-2 border-transparent hover:border-black transition-all">
                SIGN IN
              </Link>
            )}

            {/* Mobile Menu Toggle */}
            <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden absolute top-20 left-0 right-0 bg-white border-b border-zinc-100 p-6 space-y-6 animate-in slide-in-from-top">
          <Link to="/shop" className="block text-xl font-serif" onClick={() => setIsOpen(false)}>Shop</Link>
          <Link to="/about" className="block text-xl font-serif" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="block text-xl font-serif" onClick={() => setIsOpen(false)}>Contact</Link>
          {user && (
            <Link to="/admin" className="block text-xl font-serif" onClick={() => setIsOpen(false)}>Admin Panel</Link>
          )}
        </div>
      )}
    </nav>
  );
}