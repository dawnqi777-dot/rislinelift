import { motion } from 'framer-motion';
import { ArrowRight, MapPin } from 'lucide-react';
import { Image } from '@/components/ui/image';
import { Button } from '@/components/ui/button';
import { MOCK_PARTNERS, MOCK_CASES } from '@/data/partners';

export default function CasesSection() {
  const scrollToContact = () => {
    document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="cases" className="w-full py-16 md:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6 space-y-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center space-y-4"
        >
          <span className="text-xs font-semibold tracking-[0.2em] uppercase text-accent">
            Trusted Worldwide
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Partners &amp; Case Studies
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            RISLINE LIFT products are trusted by leading construction firms, hotel groups,
            and distributors across 60+ countries.
          </p>
        </motion.div>

        {/* Partner Logo Wall */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <h3 className="text-lg font-semibold text-foreground text-center">
            Our Global Partners
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
            {MOCK_PARTNERS.map((partner, i) => (
              <motion.div
                key={partner.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.08 * i, ease: [0.16, 1, 0.3, 1] }}
                className="group flex items-center justify-center h-24 px-4 rounded-xl border border-border/60 bg-card transition-all duration-300 grayscale hover:grayscale-0 hover:border-accent/40 hover:shadow-sm"
              >
                {partner.logo ? (
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    className="max-h-10 max-w-full object-contain opacity-50 group-hover:opacity-100 transition-opacity duration-300"
                  />
                ) : (
                  <span className="text-sm font-semibold text-muted-foreground/60 group-hover:text-foreground transition-colors duration-300">
                    {partner.name}
                  </span>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Case Study Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="space-y-6"
        >
          <h3 className="text-lg font-semibold text-foreground text-center">
            Featured Projects
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MOCK_CASES.map((caseItem, i) => (
              <motion.div
                key={caseItem.id}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 * i, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="group rounded-xl border border-border/60 bg-card overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              >
                {/* Case Image */}
                <div className="relative overflow-hidden aspect-[4/3]">
                  <Image
                    src={caseItem.image}
                    alt={caseItem.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/40 via-transparent to-transparent" />
                  <div className="absolute bottom-3 left-3 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-background/90 backdrop-blur-sm text-xs font-medium text-foreground">
                    <MapPin className="size-3 text-accent" />
                    {caseItem.country}
                  </div>
                </div>

                {/* Case Content */}
                <div className="p-5 space-y-3">
                  <h4 className="font-semibold text-foreground leading-snug group-hover:text-primary transition-colors duration-200">
                    {caseItem.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed line-clamp-2">
                    {caseItem.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="text-center"
        >
          <Button
            variant="outline"
            size="lg"
            className="gap-2 border-primary/30 text-primary hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
            onClick={scrollToContact}
          >
            Become a Partner
            <ArrowRight className="size-4" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
