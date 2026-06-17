import { motion } from 'framer-motion';
import { ArrowDown, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Image } from '@/components/ui/image';

const SELLING_POINTS = [
  'OEM / ODM Manufacturer',
  'Fast Response Within 12 Hours',
  'Global Export Experience',
];

const HERO_IMAGE =
  '/spark/app/app_4kdd4472j9a3j/runtime/api/v1/storage/object/bucket_aadkgk3nsc6bq_static/static%2Faadkgkdkieogg_ve_miaoda';

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export default function HeroSection() {
  return (
    <section
      id="hero"
      className="relative w-full min-h-screen flex items-center overflow-hidden bg-foreground"
    >
      {/* Background image with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={HERO_IMAGE}
          alt="RISLINE LIFT elevator"
          className="w-full h-full object-cover opacity-40"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-foreground/90 via-foreground/70 to-foreground" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-6 py-32 md:py-40">
        <div className="max-w-3xl">
          {/* Brand tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="text-accent text-sm md:text-base font-semibold tracking-widest uppercase mb-4"
          >
            RISLINE LIFT
          </motion.p>

          {/* Main heading */}
          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-background leading-[1.08] tracking-tight mb-6"
          >
            China Industrial{' '}
            <span className="text-accent">Elevator</span>{' '}
            Manufacturer
          </motion.h1>

          {/* Sub heading */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="text-base md:text-lg text-background/60 max-w-xl leading-relaxed mb-8"
          >
            Professional Villa &amp; Home Elevator Solutions for Global Markets.
            Premium quality, factory-direct pricing, worldwide delivery.
          </motion.p>

          {/* Selling points */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-3 mb-10"
          >
            {SELLING_POINTS.map((point) => (
              <span
                key={point}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-background/15 bg-background/5 text-background/80 text-sm font-medium backdrop-blur-sm"
              >
                <CheckCircle className="size-3.5 text-accent shrink-0" />
                {point}
              </span>
            ))}
          </motion.div>

          {/* CTA buttons */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-wrap gap-4"
          >
            <Button
              size="lg"
              className="h-12 px-8 text-base font-semibold"
              onClick={() => scrollTo('products')}
            >
              Explore Products
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-12 px-8 text-base font-semibold border-background/25 text-background hover:bg-background/10 hover:text-background"
              onClick={() => scrollTo('contact')}
            >
              Get a Quote
            </Button>
          </motion.div>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2"
      >
        <span className="text-xs text-background/40 tracking-widest uppercase">
          Scroll
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.8, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ArrowDown className="size-5 text-background/40" />
        </motion.div>
      </motion.div>
    </section>
  );
}
