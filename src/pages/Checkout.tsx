import { useCart } from '@/context/CartContext';
import { useAuth } from '@/context/AuthContext';
import { PaystackButton } from 'react-paystack';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { ShoppingBag, ChevronLeft } from 'lucide-react';

export default function Checkout() {
  const { cart, totalPrice, clearCart } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const config = {
    reference: (new Date()).getTime().toString(),
    email: user?.email || "customer@example.com",
    amount: totalPrice * 100 * 450, // Converting to Naira (approximate)
    publicKey: import.meta.env.VITE_PAYSTACK_PUBLIC_KEY || 'pk_test_placeholder',
  };

  const handlePaystackSuccessAction = (reference: any) => {
    console.log(reference);
    toast.success('Payment successful! Your order has been placed.');
    clearCart();
    navigate('/');
  };

  const handlePaystackCloseAction = () => {
    toast.error('Payment cancelled');
  };

  const componentProps = {
    ...config,
    text: `Pay Now (₦${(totalPrice * 450).toLocaleString()})`,
    onSuccess: (reference: any) => handlePaystackSuccessAction(reference),
    onClose: handlePaystackCloseAction,
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center p-4">
        <ShoppingBag className="h-16 w-16 text-zinc-300 mb-4" />
        <h2 className="text-2xl font-serif font-bold mb-4">Your cart is empty</h2>
        <Button onClick={() => navigate('/shop')} className="bg-black text-white">
          Go Shopping
        </Button>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-zinc-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <button 
          onClick={() => navigate('/shop')} 
          className="flex items-center text-zinc-600 hover:text-black mb-8 transition-colors"
        >
          <ChevronLeft className="h-4 w-4 mr-1" />
          Back to Shop
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Order Summary */}
          <div className="space-y-8">
            <h2 className="text-3xl font-serif font-bold">Order Summary</h2>
            <div className="space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex justify-between items-center py-4 border-b border-zinc-200">
                  <div className="flex items-center space-x-4">
                    <img src={item.image} alt={item.name} className="h-16 w-16 object-cover rounded" />
                    <div>
                      <h3 className="font-medium">{item.name}</h3>
                      <p className="text-sm text-zinc-500">Qty: {item.quantity}</p>
                    </div>
                  </div>
                  <p className="font-medium">${(item.price * item.quantity).toFixed(2)}</p>
                </div>
              ))}
            </div>
            <div className="pt-4">
              <div className="flex justify-between text-xl font-bold">
                <span>Total</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <p className="text-sm text-zinc-500 mt-2">Approximately ₦{(totalPrice * 450).toLocaleString()}</p>
            </div>
          </div>

          {/* Checkout Details */}
          <div className="bg-white p-8 rounded-xl shadow-sm border border-zinc-100">
            <h2 className="text-2xl font-serif font-bold mb-6">Checkout</h2>
            <div className="space-y-6">
              <div className="p-4 bg-zinc-50 rounded-lg">
                <p className="text-sm text-zinc-500 mb-1">Account</p>
                <p className="font-medium">{user?.email || 'Guest User'}</p>
              </div>
              
              {!user && (
                <p className="text-sm text-amber-600">
                  Sign in to save your order history and track shipping.
                </p>
              )}

              <div className="pt-6">
                <PaystackButton 
                  {...componentProps} 
                  className="w-full h-14 bg-black hover:bg-zinc-800 text-white font-bold rounded-lg transition-all transform hover:scale-[1.02] cursor-pointer flex items-center justify-center"
                />
              </div>
              
              <p className="text-center text-xs text-zinc-400">
                Secured by Paystack. All major Nigerian cards accepted.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}