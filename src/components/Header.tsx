import { useState, useEffect, useCallback } from 'react';
import { NavLink } from '@lark-apaas/client-toolkit-lite';
import { Menu, X, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { UniversalLink } from '@lark-apaas/client-toolkit-lite';

const NAV_ITEMS = [
  { label: 'Home', href: '#hero' },
  { label: 'Products', href: '#products' },
  { label: 'About Us', href: '#about' },
  { label: 'Factory', href: '#factory' },
  { label: 'Customization', href: '#customization' },
  { label: 'Contact Us', href: '#contact' },
] as const;

const WHATSAPP_NUMBER = '8615254118933';
const WHATSAPP_MESSAGE = encodeURIComponent('Hello RISLINE LIFT CO., LTD., I would like to inquire about your elevator products.');

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  return (
    <header
      className={cn(
        'fixed top-0 inset-x-0 z-50 transition-all duration-300',
        scrolled
          ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border/40'
          : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex items-center justify-between h-16 md:h-18">
        {/* Logo */}
        <UniversalLink
          to="#hero"
          className="flex items-center gap-2 shrink-0"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          <div className="size-9 rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm tracking-tight">
            RL
          </div>
          <span className="text-lg font-bold tracking-tight text-foreground hidden sm:block">
            RISLINE<span className="text-primary">LIFT</span>
          </span>
        </UniversalLink>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.href}
              to={item.href}
              className={({ isActive }) =>
                cn(
                  'px-3 py-2 text-sm font-medium rounded-md transition-colors',
                  isActive
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                )
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        {/* Desktop WhatsApp CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <Button
            size="sm"
            className="gap-2 bg-emerald-600 hover:bg-emerald-700 text-white"
            asChild
          >
            <UniversalLink
              to={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <MessageCircle className="size-4" />
              WhatsApp
            </UniversalLink>
          </Button>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="lg:hidden p-2 -mr-2 text-foreground"
          onClick={() => setMobileOpen((prev) => !prev)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
        >
          {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="lg:hidden fixed inset-0 top-16 z-40 bg-background animate-in slide-in-from-top-2 duration-200">
          <nav className="flex flex-col p-4 gap-1">
            {NAV_ITEMS.map((item) => (
              <NavLink
                key={item.href}
                to={item.href}
                onClick={closeMobile}
                className={({ isActive }) =>
                  cn(
                    'px-4 py-3 text-base font-medium rounded-lg transition-colors',
                    isActive
                      ? 'bg-primary/10 text-primary'
                      : 'text-foreground hover:bg-muted'
                  )
                }
              >
                {item.label}
              </NavLink>
            ))}
            <div className="mt-4 pt-4 border-t border-border">
              <Button
                className="w-full gap-2 bg-emerald-600 hover:bg-emerald-700 text-white"
                asChild
              >
                <UniversalLink
                  to={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={closeMobile}
                >
                  <MessageCircle className="size-4" />
                  Chat on WhatsApp
                </UniversalLink>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
