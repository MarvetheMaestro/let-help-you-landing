import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="fade-in bg-white">
      {/* Hero */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <img 
          src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/62439e52-f271-41ac-8065-70a705617836/lifestyle-social-proof-e50f9ca7-1777295822938.webp" 
          alt="About Kerenalexis" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative text-center text-white px-4">
          <h1 className="text-5xl md:text-7xl font-serif mb-6">The Legacy</h1>
          <p className="uppercase tracking-[0.4em] text-sm">Crafting Nigerian Excellence</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-12">
            <p className="uppercase tracking-widest text-xs text-accent font-bold">Our Philosophy</p>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight">
              A Symphony of Heritage <br /> and Modernity.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-left text-muted-foreground text-lg leading-relaxed">
              <p>
                Founded in Lagos, Nigeria, Kerenalexis emerged from a desire to redefine luxury for the contemporary African spirit. We believe that true fashion transcends trends; it is a permanent expression of identity, culture, and impeccable craftsmanship.
              </p>
              <p>
                Our collections are meticulously curated to offer a seamless blend of bold streetwear energy and refined minimalist elegance. We source the finest materials and collaborate with master artisans to bring each vision to life.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founders / Team */}
      <section className="bg-secondary/30 py-32">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="order-2 lg:order-1 space-y-8">
              <h2 className="text-4xl font-serif">Rooted in Purpose</h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Kerenalexis isn't just a label; it's a movement. We are committed to fostering the Nigerian fashion ecosystem by empowering local tailors and artisans. 
              </p>
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="h-2 w-2 bg-accent mt-2 flex-shrink-0" />
                  <p><strong>Sustainability:</strong> Conscious sourcing and small-batch production.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-2 w-2 bg-accent mt-2 flex-shrink-0" />
                  <p><strong>Innovation:</strong> Merging traditional weaving with modern silhouettes.</p>
                </div>
                <div className="flex items-start gap-4">
                  <div className="h-2 w-2 bg-accent mt-2 flex-shrink-0" />
                  <p><strong>Community:</strong> Investing in the next generation of African designers.</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <img 
                src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/62439e52-f271-41ac-8065-70a705617836/product-1---fusion-wear-cec2002a-1777295822945.webp" 
                alt="Brand Vision" 
                className="w-full aspect-square object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Location / Atelier */}
      <section className="py-32">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto space-y-8">
            <h2 className="text-4xl font-serif">Visit Our Atelier</h2>
            <p className="text-muted-foreground">
              Experience the craftsmanship firsthand. Our Victoria Island atelier is open for private viewings and bespoke fittings by appointment.
            </p>
            <div className="pt-8">
              <Link to="/contact" className="inline-block border-b-2 border-primary pb-2 uppercase tracking-widest text-sm font-bold hover:text-accent hover:border-accent transition-all">
                Book An Appointment
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;