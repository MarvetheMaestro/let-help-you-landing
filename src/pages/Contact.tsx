import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Thank you for your inquiry. Our concierge will contact you shortly.");
  };

  return (
    <div className="fade-in bg-white">
      {/* Header */}
      <section className="bg-secondary/30 py-24 border-b">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-serif mb-6">Concierge</h1>
          <p className="text-muted-foreground max-w-xl mx-auto uppercase tracking-widest text-sm">
            Reach out for styling advice, bespoke inquiries, or order support.
          </p>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
            {/* Form */}
            <div className="space-y-12">
              <h2 className="text-3xl font-serif">Send an Inquiry</h2>
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="uppercase tracking-widest text-[10px] font-bold">Full Name</label>
                    <Input className="rounded-none border-t-0 border-x-0 border-b bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary" placeholder="Alexander Keren" required />
                  </div>
                  <div className="space-y-2">
                    <label className="uppercase tracking-widest text-[10px] font-bold">Email Address</label>
                    <Input className="rounded-none border-t-0 border-x-0 border-b bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary" placeholder="alex@example.com" type="email" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="uppercase tracking-widest text-[10px] font-bold">Subject</label>
                  <Input className="rounded-none border-t-0 border-x-0 border-b bg-transparent px-0 focus-visible:ring-0 focus-visible:border-primary" placeholder="Bespoke Collection Inquiry" required />
                </div>
                <div className="space-y-2">
                  <label className="uppercase tracking-widest text-[10px] font-bold">Message</label>
                  <Textarea className="rounded-none border-t-0 border-x-0 border-b bg-transparent px-0 min-h-[150px] focus-visible:ring-0 focus-visible:border-primary" placeholder="How can we assist you today?" required />
                </div>
                <Button className="w-full md:w-auto px-12 h-14 bg-primary text-white rounded-none uppercase tracking-[0.2em] font-bold hover:bg-primary/90">
                  Submit Inquiry <Send className="ml-2 h-4 w-4" />
                </Button>
              </form>
            </div>

            {/* Info */}
            <div className="bg-secondary/50 p-12 space-y-12">
              <div>
                <h3 className="text-xl font-serif mb-8">Contact Information</h3>
                <div className="space-y-8">
                  <div className="flex gap-6">
                    <MapPin className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="uppercase tracking-widest text-xs font-bold mb-2">Our Atelier</p>
                      <p className="text-muted-foreground leading-relaxed">
                        12 Luxury Lane, Victoria Island<br />
                        Lagos, Nigeria
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <Mail className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="uppercase tracking-widest text-xs font-bold mb-2">Email Us</p>
                      <p className="text-muted-foreground">concierge@kerenalexis.com</p>
                    </div>
                  </div>
                  <div className="flex gap-6">
                    <Phone className="h-6 w-6 text-accent flex-shrink-0" />
                    <div>
                      <p className="uppercase tracking-widest text-xs font-bold mb-2">Call Us</p>
                      <p className="text-muted-foreground">+234 (0) 800 KEREN</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-8 border-t border-white/20">
                <h3 className="text-xl font-serif mb-4">Follow Our Journey</h3>
                <div className="flex gap-6">
                  <a href="#" className="hover:text-accent transition-colors font-bold tracking-widest text-xs uppercase">Instagram</a>
                  <a href="#" className="hover:text-accent transition-colors font-bold tracking-widest text-xs uppercase">LinkedIn</a>
                  <a href="#" className="hover:text-accent transition-colors font-bold tracking-widest text-xs uppercase">Twitter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;