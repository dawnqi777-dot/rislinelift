import { NavLink } from '@lark-apaas/client-toolkit-lite';
import { Mail, Phone, MapPin, Linkedin, Facebook, Youtube } from 'lucide-react';
import { UniversalLink } from '@lark-apaas/client-toolkit-lite';

const QUICK_LINKS = [
  { label: 'Home', to: '#hero' },
  { label: 'Products', to: '#products' },
  { label: 'About Us', to: '#about' },
  { label: 'Factory', to: '#factory' },
  { label: 'Customization', to: '#customization' },
  { label: 'Contact Us', to: '#contact' },
];

const PRODUCT_LINKS = [
  { label: 'Villa Elevator', to: '#products' },
  { label: 'Cargo Lift', to: '#products' },
  { label: 'Scissor Lift', to: '#products' },
  { label: 'Wheelchair Lift', to: '#products' },
];

const SOCIAL_LINKS = [
  { icon: Linkedin, label: 'LinkedIn', href: '#' },
  { icon: Facebook, label: 'Facebook', href: '#' },
  { icon: Youtube, label: 'YouTube', href: '#' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-foreground text-background/80">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand Column */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="size-9 rounded-md bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm shrink-0">
                RL
              </div>
              <span className="text-lg font-bold text-background tracking-tight">
                RISLINE LIFT CO., LTD.
              </span>
            </div>
            <p className="text-sm text-background/50 leading-relaxed max-w-xs">
              Professional China industrial elevator manufacturer. OEM/ODM villa &amp; home elevator solutions for global markets.
            </p>
            <div className="flex items-center gap-3 pt-2">
              {SOCIAL_LINKS.map(({ icon: Icon, label, href }) => (
                <UniversalLink
                  key={label}
                  to={href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={label}
                  className="size-9 rounded-md border border-background/15 flex items-center justify-center text-background/50 hover:text-background hover:border-background/40 transition-colors duration-200"
                >
                  <Icon className="size-4" />
                </UniversalLink>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-background uppercase tracking-wider">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `text-sm transition-colors duration-200 ${
                        isActive
                          ? 'text-accent'
                          : 'text-background/50 hover:text-background'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Products */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-background uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-2.5">
              {PRODUCT_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <NavLink
                    to={to}
                    className={({ isActive }) =>
                      `text-sm transition-colors duration-200 ${
                        isActive
                          ? 'text-accent'
                          : 'text-background/50 hover:text-background'
                      }`
                    }
                  >
                    {label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h4 className="text-sm font-semibold text-background uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li>
                 <UniversalLink
                   to="mailto:sales@rislinelift.com"
                   className="flex items-center gap-3 text-sm text-background/50 hover:text-background transition-colors duration-200 group"
                 >
                   <Mail className="size-4 shrink-0 text-background/30 group-hover:text-accent transition-colors duration-200" />
                   sales@rislinelift.com
                 </UniversalLink>
              </li>
              <li>
                 <UniversalLink
                   to="tel:+8615254118933"
                   className="flex items-center gap-3 text-sm text-background/50 hover:text-background transition-colors duration-200 group"
                 >
                   <Phone className="size-4 shrink-0 text-background/30 group-hover:text-accent transition-colors duration-200" />
                   +86 152-5411-8933
                 </UniversalLink>
              </li>
              <li className="flex items-start gap-3 text-sm text-background/50">
                <MapPin className="size-4 shrink-0 mt-0.5 text-background/30" />
                <span className="leading-relaxed">
                  Jinan, Shandong, China
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-14 pt-8 border-t border-background/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-background/35">
          <p>&copy; {new Date().getFullYear()} RISLINE LIFT CO., LTD. All rights reserved.</p>
          <p>China Industrial Elevator Manufacturer</p>
        </div>
      </div>
    </footer>
  );
}
