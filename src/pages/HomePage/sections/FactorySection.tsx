import { motion } from 'framer-motion';
import { Factory, Ruler, Package, ShieldCheck, Award, CheckCircle } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { MOCK_FACTORY_DATA } from '@/data/factory';

const PRODUCTION_STATS = [
  {
    icon: Ruler,
    label: 'Factory Area',
    value: `${(MOCK_FACTORY_DATA.factoryArea / 1000).toFixed(0)}k m²`,
    description: 'Modern manufacturing facility',
  },
  {
    icon: Factory,
    label: 'Production Lines',
    value: String(MOCK_FACTORY_DATA.productionLines),
    description: 'Dedicated elevator lines',
  },
  {
    icon: Package,
    label: 'Monthly Capacity',
    value: `${MOCK_FACTORY_DATA.monthlyCapacity}+`,
    description: 'Units per month',
  },
  {
    icon: ShieldCheck,
    label: 'Quality Standard',
    value: 'ISO 9001',
    description: 'Full-process inspection',
  },
];

const CERT_ICONS: Record<string, string> = {
  'ISO 9001:2015': 'ISO',
  CE: 'CE',
  SGS: 'SGS',
};

export default function FactorySection() {
  return (
    <section id="factory" className="w-full py-16 md:py-24 bg-muted/40">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <span className="inline-block text-xs font-semibold tracking-[0.2em] uppercase text-accent mb-3">
            Manufacturing Excellence
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Factory &amp; Production
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            {MOCK_FACTORY_DATA.description}
          </p>
        </motion.div>

        {/* Image Gallery Grid */}
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mb-14"
        >
          {MOCK_FACTORY_DATA.images.map((img, i) => (
            <motion.div
              key={img.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="relative overflow-hidden rounded-xl border border-border/40 group"
            >
              <Image
                src={img.src}
                alt={img.alt}
                className="w-full aspect-video object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />
              <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-400">
                <span className="text-xs font-medium text-white bg-foreground/40 backdrop-blur-sm rounded-full px-3 py-1">
                  {img.category === 'production-line' ? 'Production Line' : 'Quality Control'}
                </span>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Production Data Cards */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-5 mb-14"
        >
          {PRODUCTION_STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.08, ease: [0.16, 1, 0.3, 1] }}
              >
                <Card className="h-full border-border/40 hover:border-primary/20 hover:shadow-sm transition-all duration-300">
                  <CardContent className="p-5 flex flex-col items-center text-center gap-3">
                    <div className="size-11 rounded-lg bg-primary/8 flex items-center justify-center">
                      <Icon className="size-5 text-primary" />
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-foreground tracking-tight tabular-nums">
                        {stat.value}
                      </div>
                      <div className="text-xs font-medium text-muted-foreground mt-0.5">
                        {stat.label}
                      </div>
                    </div>
                    <p className="text-xs text-muted-foreground/70 leading-relaxed">
                      {stat.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Certifications */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <div className="inline-flex items-center gap-2 mb-5">
            <Award className="size-5 text-accent" />
            <span className="text-sm font-semibold text-foreground uppercase tracking-wider">
              Certifications
            </span>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            {MOCK_FACTORY_DATA.certifications.map((cert, i) => (
              <motion.div
                key={cert}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.5 + i * 0.1, ease: [0.16, 1, 0.3, 1] }}
              >
                <Badge
                  variant="outline"
                  className="h-12 px-5 gap-2.5 text-sm font-semibold border-2 border-primary/20 bg-primary/4 text-primary rounded-lg hover:border-primary/40 transition-colors duration-300"
                >
                  <CheckCircle className="size-4 text-accent" />
                  {CERT_ICONS[cert] ?? cert}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
