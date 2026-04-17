import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { useToast } from '@/hooks/use-toast';
import { ArrowRight, Loader2 } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';

export const Contact = () => {
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      });
      if (error) throw error;
      toast({
        title: 'Message sent!',
        description: "Thank you for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
    } catch (error: any) {
      console.error('Error sending message:', error);
      toast({
        title: 'Failed to send message',
        description:
          error.message || 'Please try again later or email me directly.',
        variant: 'destructive',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <section id="contact" className="relative py-32 px-6" ref={ref}>
      <div className="container mx-auto max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-14"
        >
          <div className="flex justify-center mb-5">
            <span className="eyebrow">Get In Touch</span>
          </div>
          <div className="h-px w-24 bg-foreground mx-auto mb-8" />
          <h2 className="fluid-heading font-display font-bold mb-5 tracking-tight">
            Let's Work Together
          </h2>
          <p className="text-lg text-muted-foreground max-w-md mx-auto">
            Have a project in mind? Reach out and let's create something amazing.
          </p>
        </motion.div>

        <motion.form
          onSubmit={handleSubmit}
          className="space-y-2"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <div className="floating-input">
            <input
              id="contact-name"
              type="text"
              name="name"
              placeholder=" "
              value={formData.name}
              onChange={handleChange}
              required
              autoComplete="name"
            />
            <label htmlFor="contact-name">Your Name</label>
          </div>

          <div className="floating-input">
            <input
              id="contact-email"
              type="email"
              name="email"
              placeholder=" "
              value={formData.email}
              onChange={handleChange}
              required
              autoComplete="email"
            />
            <label htmlFor="contact-email">Your Email</label>
          </div>

          <div className="floating-input">
            <textarea
              id="contact-message"
              name="message"
              placeholder=" "
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
            />
            <label htmlFor="contact-message">Your Message</label>
          </div>

          <motion.button
            type="submit"
            disabled={isSubmitting}
            className="group relative mt-8 w-full inline-flex items-center justify-center gap-2 py-5 rounded-full bg-foreground text-background text-sm font-medium tracking-wide transition-all duration-500 disabled:opacity-60 overflow-hidden"
            whileHover={{ scale: 1.01 }}
            whileTap={{ scale: 0.99 }}
          >
            <span
              aria-hidden
              className="absolute inset-0 bg-gradient-to-r from-foreground to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            />
            <span className="relative inline-flex items-center gap-2">
              {isSubmitting ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  Send Message
                  <ArrowRight
                    size={16}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  />
                </>
              )}
            </span>
          </motion.button>
        </motion.form>

        <motion.div
          className="mt-14 text-center"
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-xs uppercase tracking-[0.3em] text-muted-foreground mb-3">
            Or email me directly at
          </p>
          <a
            href="mailto:yanikamanikanta24@gmail.com"
            className="text-base md:text-lg font-medium underline-animation"
          >
            yanikamanikanta24@gmail.com
          </a>
        </motion.div>
      </div>
    </section>
  );
};
