import { memo } from 'react';
import { motion } from 'framer-motion';
import { NavLink } from '@lark-apaas/client-toolkit-lite';
import { ArrowRight, CheckCircle2, ClipboardList, Cog, Package, Truck } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { MOCK_CUSTOMIZATION_STEPS, MOCK_COOPERATION_MODES } from '@/data/company';

const STEP_ICONS = [ClipboardList, Cog, Package, Truck];

export default memo(function CustomizationSection() {
  return (
    <section id="customization" className="w-full py-16 md:py-24 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-accent uppercase tracking-wider">
            Customization
          </span>
          <h2 className="mt-3 text-3xl md:text-4xl font-bold text-foreground">
            OEM / ODM Custom Solutions
          </h2>
          <p className="mt-4 text-muted-foreground max-w-2xl mx-auto text-base leading-relaxed">
            From concept to delivery — we provide end-to-end customization services tailored to your market needs.
          </p>
        </motion.div>

        {/* 4-Step Process Timeline */}
        <div className="mb-20">
          <h3 className="text-xl font-semibold text-foreground text-center mb-12">
            Customization Process
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6 relative">
            {/* Desktop connecting line */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-0.5 bg-border" />

            {MOCK_CUSTOMIZATION_STEPS.map((step, i) => {
              const Icon = STEP_ICONS[i];
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.12 }}
                  className="relative flex flex-col items-center text-center"
                >
                  {/* Step number circle */}
                  <div className="relative z-10 size-20 rounded-full bg-primary flex items-center justify-center text-primary-foreground text-2xl font-bold shadow-md mb-4">
                    {step.step}
                  </div>
                  <Icon className="size-5 text-accent mb-3" />
                  <h4 className="text-base font-semibold text-foreground mb-2">
                    {step.title}
                  </h4>
                  <p className="text-sm text-muted-foreground leading-relaxed max-w-[220px]">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Cooperation Modes */}
        <div className="mb-16">
          <h3 className="text-xl font-semibold text-foreground text-center mb-10">
            Cooperation Models
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MOCK_COOPERATION_MODES.map((mode, i) => (
              <motion.div
                key={mode.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
              >
                <Card className="h-full border-border/60 hover:border-primary/30 hover:shadow-md transition-all duration-300">
                  <CardContent className="p-6 flex flex-col items-center text-center">
                    <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                      <CheckCircle2 className="size-6 text-primary" />
                    </div>
                    <h4 className="text-lg font-semibold text-foreground mb-3">
                      {mode.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {mode.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center"
        >
          <Button size="lg" className="gap-2 text-base px-8 h-14" asChild>
            <NavLink to="#contact">
              Start Your Custom Project
              <ArrowRight className="size-5" />
            </NavLink>
          </Button>
        </motion.div>
      </div>
    </section>
  );
});
