import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { toast } from 'sonner';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Card, CardContent } from '@/components/ui/card';
import { UniversalLink } from '@lark-apaas/client-toolkit-lite';

const WHATSAPP_NUMBER = '8615254118933';
const WHATSAPP_MESSAGE = encodeURIComponent(
  'Hello RISLINE LIFT CO., LTD., I would like to inquire about your elevator products.'
);

const PRODUCT_OPTIONS = [
  { value: 'villa-elevator', label: 'Villa Elevator' },
  { value: 'cargo-lift', label: 'Cargo Lift' },
  { value: 'scissor-lift', label: 'Scissor Lift' },
  { value: 'wheelchair-lift', label: 'Wheelchair Lift' },
  { value: 'other', label: 'Other / Not Sure' },
];

interface FormData {
  name: string;
  email: string;
  phone: string;
  country: string;
  productInterest: string;
  message: string;
}

const INITIAL_FORM: FormData = {
  name: '',
  email: '',
  phone: '',
  country: '',
  productInterest: '',
  message: '',
};

export default function ContactSection() {
  const [form, setForm] = useState<FormData>(INITIAL_FORM);
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});

  function handleChange(field: keyof FormData, value: string) {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  }

  function validate(): boolean {
    const errs: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) errs.name = 'Name is required';
    if (!form.email.trim()) {
      errs.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email';
    }
    if (!form.message.trim()) errs.message = 'Message is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;

    setSubmitting(true);
    await new Promise((r) => setTimeout(r, 1200));
    setSubmitting(false);
    setSubmitted(true);
    setForm(INITIAL_FORM);
    toast.success('Thank you! We will reply within 12 hours.', {
      description: 'Our team has received your inquiry and will get back to you shortly.',
    });
  }

  return (
    <section id="contact" className="w-full py-20 md:py-28 bg-muted/50">
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
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground tracking-tight">
            Start Your Project Today
          </h2>
          <p className="mt-4 text-muted-foreground max-w-xl mx-auto text-base leading-relaxed">
            Fill out the form below and our team will respond within 12 hours.
            Prefer instant messaging? Chat with us directly on WhatsApp.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
          {/* Form Column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-3"
          >
            <Card className="shadow-sm border-border/60">
              <CardContent className="p-6 md:p-8">
                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                    className="flex flex-col items-center justify-center py-12 text-center"
                  >
                    <div className="size-16 rounded-full bg-success/10 flex items-center justify-center mb-5">
                      <CheckCircle className="size-8 text-success" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Inquiry Submitted!
                    </h3>
                    <p className="text-muted-foreground max-w-sm leading-relaxed">
                      Thank you for reaching out. Our team will review your inquiry
                      and reply within <span className="font-medium text-foreground">12 hours</span>.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Inquiry
                    </Button>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} noValidate className="space-y-5">
                    {/* Name + Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">
                          Name <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="contact-name"
                          placeholder="Your full name"
                          value={form.name}
                          onChange={(e) => handleChange('name', e.target.value)}
                          className={errors.name ? 'border-destructive' : ''}
                        />
                        {errors.name && (
                          <p className="text-xs text-destructive">{errors.name}</p>
                        )}
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-email">
                          Email <span className="text-destructive">*</span>
                        </Label>
                        <Input
                          id="contact-email"
                          type="email"
                          placeholder="you@company.com"
                          value={form.email}
                          onChange={(e) => handleChange('email', e.target.value)}
                          className={errors.email ? 'border-destructive' : ''}
                        />
                        {errors.email && (
                          <p className="text-xs text-destructive">{errors.email}</p>
                        )}
                      </div>
                    </div>

                    {/* Phone + Country */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div className="space-y-2">
                        <Label htmlFor="contact-phone">Phone (optional)</Label>
                        <Input
                          id="contact-phone"
                          placeholder="+1 234 567 890"
                          value={form.phone}
                          onChange={(e) => handleChange('phone', e.target.value)}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-country">Country</Label>
                        <Input
                          id="contact-country"
                          placeholder="Your country"
                          value={form.country}
                          onChange={(e) => handleChange('country', e.target.value)}
                        />
                      </div>
                    </div>

                    {/* Product Interest */}
                    <div className="space-y-2">
                      <Label htmlFor="contact-product">Product Interest</Label>
                      <Select
                        value={form.productInterest}
                        onValueChange={(v) => handleChange('productInterest', v)}
                      >
                        <SelectTrigger id="contact-product" className="w-full">
                          <SelectValue placeholder="Select a product category" />
                        </SelectTrigger>
                        <SelectContent>
                          {PRODUCT_OPTIONS.map((opt) => (
                            <SelectItem key={opt.value} value={opt.value}>
                              {opt.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    {/* Message */}
                    <div className="space-y-2">
                      <Label htmlFor="contact-message">
                        Message <span className="text-destructive">*</span>
                      </Label>
                      <Textarea
                        id="contact-message"
                        rows={5}
                        placeholder="Tell us about your project requirements, specifications, or any questions..."
                        value={form.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className={errors.message ? 'border-destructive' : ''}
                      />
                      {errors.message && (
                        <p className="text-xs text-destructive">{errors.message}</p>
                      )}
                    </div>

                    {/* Submit */}
                    <Button
                      type="submit"
                      size="lg"
                      disabled={submitting}
                      className="w-full sm:w-auto gap-2"
                    >
                      {submitting ? (
                        <>
                          <span className="size-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="size-4" />
                          Send Inquiry
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </motion.div>

          {/* Sidebar Column */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-2 space-y-6"
          >
            {/* WhatsApp Card */}
            <Card className="bg-emerald-600 border-emerald-700 shadow-sm">
              <CardContent className="p-6 text-white">
                <div className="flex items-start gap-4">
                  <div className="size-12 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <MessageCircle className="size-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-base">Chat on WhatsApp</h4>
                    <p className="text-sm text-white/80 leading-relaxed">
                      Prefer instant messaging? Our sales team is available on WhatsApp
                      for quick inquiries and real-time support.
                    </p>
                  </div>
                </div>
                <Button
                  className="w-full mt-4 bg-white text-emerald-700 hover:bg-white/90 hover:text-emerald-800"
                  size="lg"
                  asChild
                >
                  <UniversalLink
                    to={`https://wa.me/${WHATSAPP_NUMBER}?text=${WHATSAPP_MESSAGE}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <MessageCircle className="size-4" />
                    Start WhatsApp Chat
                  </UniversalLink>
                </Button>
              </CardContent>
            </Card>

            {/* Contact Info Card */}
            <Card className="shadow-sm border-border/60">
              <CardContent className="p-6 space-y-5">
                <h4 className="font-semibold text-foreground">Contact Information</h4>
                <ul className="space-y-4">
                  <li>
                    <UniversalLink
                      to="mailto:sales@rislinelift.com"
                      className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                    >
                      <Mail className="size-5 shrink-0 mt-0.5 text-muted-foreground/50 group-hover:text-primary transition-colors duration-200" />
                      <span>sales@rislinelift.com</span>
                    </UniversalLink>
                  </li>
                  <li>
                    <UniversalLink
                      to="tel:+8615254118933"
                      className="flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors duration-200 group"
                    >
                      <Phone className="size-5 shrink-0 mt-0.5 text-muted-foreground/50 group-hover:text-primary transition-colors duration-200" />
                      <span>+86 152-5411-8933</span>
                    </UniversalLink>
                  </li>
                  <li className="flex items-start gap-3 text-sm text-muted-foreground">
                    <MapPin className="size-5 shrink-0 mt-0.5 text-muted-foreground/50" />
                    <span className="leading-relaxed">
                      Jinan, Shandong, China
                    </span>
                  </li>
                </ul>

                <div className="pt-4 border-t border-border/60">
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    <span className="font-medium text-foreground">Business Hours:</span>{' '}
                    Monday – Friday, 8:00 AM – 6:00 PM (GMT+8)
                  </p>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
