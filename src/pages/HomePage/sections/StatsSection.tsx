import { useEffect, useRef, useState, memo } from 'react';
import { motion } from 'framer-motion';
import { Factory, Package, Globe, Users } from 'lucide-react';
import { MOCK_COMPANY_STATS } from '@/data/company';

const ICON_MAP: Record<string, typeof Factory> = {
  factory: Factory,
  package: Package,
  globe: Globe,
  users: Users,
};

function useCountUp(target: number, duration: number, shouldStart: boolean) {
  const [count, setCount] = useState(0);
  const rafRef = useRef<number>(0);
  const startTimeRef = useRef<number>(0);

  useEffect(() => {
    if (!shouldStart) return;

    const step = (timestamp: number) => {
      if (!startTimeRef.current) startTimeRef.current = timestamp;
      const elapsed = timestamp - startTimeRef.current;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(eased * target));

      if (progress < 1) {
        rafRef.current = requestAnimationFrame(step);
      } else {
        setCount(target);
      }
    };

    rafRef.current = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafRef.current);
  }, [target, duration, shouldStart]);

  return count;
}

function StatCard({ stat, index }: { stat: (typeof MOCK_COMPANY_STATS)[number]; index: number }) {
  const [inView, setInView] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  const count = useCountUp(stat.value, 2000, inView);
  const Icon = ICON_MAP[stat.icon] || Factory;

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.unobserve(node);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5, delay: index * 0.1, ease: [0.16, 1, 0.3, 1] }}
      className="flex flex-col items-center text-center p-6 md:p-8 rounded-2xl bg-card border border-border/50 shadow-sm"
    >
      <div className="size-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
        <Icon className="size-6 text-primary" />
      </div>
      <div className="text-3xl md:text-4xl font-bold tabular-nums tracking-tight text-foreground">
        {count}
        <span className="text-accent">{stat.suffix}</span>
      </div>
      <p className="mt-2 text-sm text-muted-foreground font-medium">{stat.label}</p>
    </motion.div>
  );
}

export default memo(function StatsSection() {
  return (
    <section id="stats" className="w-full py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-2">
            Trusted Worldwide
          </p>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            RISLINE LIFT in Numbers
          </h2>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {MOCK_COMPANY_STATS.map((stat, i) => (
            <StatCard key={stat.id} stat={stat} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
});
