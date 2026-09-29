import { ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { products } from '@/data/content';
import details from '@/data/product-details.json';

type Product = typeof products[number];
export function ProductCard({ product, index }: { product: Product; index: number }) {
  const paragraphs = details[product.slug as keyof typeof details] || [];
  return <article className="group min-w-0 border-b border-border pb-8">
    <div className="relative flex aspect-[4/4.7] items-center justify-center overflow-hidden bg-secondary px-7 py-7 sm:px-9"><img src={product.cover} alt={`${product.title} cover`} loading={index > 1 ? 'lazy' : 'eager'} className="h-full w-full object-contain transition-transform duration-500 group-hover:scale-[1.035]" /></div>
    <div className="pt-6"><p className="section-label text-accent-foreground">The everlasting gospel series <span className="mx-2 text-border">/</span> {String(index + 1).padStart(2, '0')}</p><h3 className="mt-3 min-h-[3.5rem] font-display text-2xl leading-tight sm:text-[1.7rem]">{product.title}</h3><p className="mt-4 line-clamp-3 text-sm leading-7 text-muted-foreground">{product.summary}</p><div className="mt-5 flex items-center justify-between border-t border-border pt-4"><span className="text-sm font-semibold">{product.price}</span><span className="text-xs uppercase tracking-[0.1em] text-muted-foreground">{product.status}</span></div>
      <Dialog><DialogTrigger asChild><Button variant="outline" className="mt-5 h-11 w-full justify-between rounded-none border-primary px-4 text-xs font-semibold uppercase tracking-[0.1em] text-primary shadow-none hover:bg-primary hover:text-primary-foreground">Read description <ArrowUpRight /></Button></DialogTrigger><DialogContent className="max-h-[85vh] max-w-2xl overflow-y-auto rounded-none bg-background px-6 py-8 sm:px-10"><DialogHeader><DialogTitle className="pr-6 font-display text-3xl leading-tight sm:text-4xl">{product.title}</DialogTitle><DialogDescription>{product.price} · {product.status}</DialogDescription></DialogHeader><div className="mt-5 space-y-5 text-sm leading-7 text-foreground">{paragraphs.map((paragraph, i) => <p key={i}>{paragraph}</p>)}</div><a className="mt-5 inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.12em] text-primary underline underline-offset-4" href={`https://www.bornsaved.org/product-page/${product.slug}`} target="_blank" rel="noopener noreferrer">View original listing <ArrowUpRight className="size-4" /></a></DialogContent></Dialog>
    </div>
  </article>;
}
