import { motion, useReducedMotion } from 'framer-motion';
import type { ReactNode } from 'react';

export function FadeIn({ children, className = '', delay = 0 }: { children: ReactNode; className?: string; delay?: number }) {
  const reduceMotion = useReducedMotion();
  return <motion.div className={className} initial={reduceMotion ? false : { opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.1 }} transition={{ duration: 0.65, ease: 'easeOut', delay }}>{children}</motion.div>;
}
