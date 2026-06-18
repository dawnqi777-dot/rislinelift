import { memo } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { MOCK_PRODUCTS } from '@/data/products';

function ProductsSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="products" className="w-full py-16 md:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-4 mb-12 md:mb-16"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            Our Products
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Complete Elevator &amp; Lift Solutions
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg leading-relaxed">
            From luxury villa elevators to heavy-duty cargo lifts — we deliver certified,
            customizable lifting solutions for every need.
          </p>
        </motion.div>

        {/* Product Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 md:gap-8">
          {MOCK_PRODUCTS.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              whileHover={{ y: -6, transition: { duration: 0.25 } }}
              className="group rounded-xl border border-border/50 bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-[4/3] bg-muted">
                <Image
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-5 md:p-6">
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                  {product.description}
                </p>

                {/* Features */}
                <ul className="space-y-1.5 mb-5">
                  {product.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2 text-sm text-foreground/80">
                      <Check className="size-4 shrink-0 mt-0.5 text-accent" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button
                  variant="outline"
                  size="sm"
                  className="w-full gap-2 group/btn"
                  onClick={scrollToContact}
                >
                  Learn More
                  <ArrowRight className="size-4 transition-transform duration-200 group-hover/btn:translate-x-0.5" />
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default memo(ProductsSection);
