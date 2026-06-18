import { motion } from 'framer-motion';
import { Factory, ShieldCheck, Zap, TrendingUp, Truck } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { MOCK_ADVANTAGES } from '@/data/company';

const ICON_MAP: Record<string, React.ComponentType<{ className?: string }>> = {
  settings: Factory,
  zap: Zap,
  'shield-check': ShieldCheck,
  'trending-up': TrendingUp,
  truck: Truck,
};

const container = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const itemVariant = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
};

export default function AboutSection() {
  return (
    <section id="about" className="w-full py-16 md:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14 md:mb-18"
        >
          <span className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            About Us
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Why Choose <span className="text-primary">RISLINE LIFT</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground text-base leading-relaxed">
            With over 15 years of manufacturing excellence, RISLINE LIFT has grown into a trusted
            partner for elevator distributors and construction companies across 60+ countries.
            We combine German-inspired engineering precision with China&apos;s manufacturing efficiency
            to deliver premium lifting solutions at competitive prices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Advantages */}
          <motion.div
            variants={container}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
            className="space-y-5"
          >
            {MOCK_ADVANTAGES.map((adv) => {
              const Icon = ICON_MAP[adv.icon] || Factory;
              return (
                <motion.div
                  key={adv.id}
                  variants={itemVariant}
                  className="flex gap-4 p-4 rounded-xl bg-card border border-border/50 hover:border-primary/20 hover:shadow-sm transition-all duration-300"
                >
                  <div className="size-11 shrink-0 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Icon className="size-5 text-primary" />
                  </div>
                  <div className="min-w-0">
                    <h3 className="text-base font-semibold text-foreground">{adv.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground leading-relaxed">
                      {adv.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>

          {/* Right: Image placeholder */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden border border-border/30 shadow-sm">
              <Image
                src="/spark/app/app_4kdd4472j9a3j/runtime/api/v1/storage/object/bucket_aadkgk3nsc6bq_static/static%2Faadkgkb473igo_ve_miaoda"
                alt="RISLINE LIFT manufacturing facility"
                className="w-full aspect-[4/3] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-primary/20 to-transparent" />
            </div>

            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 md:-bottom-6 md:-left-6 bg-card border border-border/50 rounded-xl px-5 py-3 shadow-md">
              <p className="text-xs text-muted-foreground">Established</p>
              <p className="text-2xl font-bold text-primary tracking-tight">2011</p>
            </div>

            {/* Decorative dots */}
            <div className="absolute -top-3 -right-3 size-24 bg-accent/20 rounded-full blur-2xl -z-10" />
            <div className="absolute -bottom-6 -left-6 size-32 bg-primary/10 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
