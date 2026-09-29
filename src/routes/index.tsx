import { createFileRoute, Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/data/content';
import hero from '@/assets/hero.png.asset.json';

export const Route = createFileRoute('/')({
  head: () => ({ meta: [
    { title: 'Born Saved — One Gospel. One Savior. One finished work.' },
    { name: 'description', content: 'Open Scripture and rediscover the Gospel: Christ at the center, His finished work as the foundation, and faith as our response.' },
    { property: 'og:title', content: 'Born Saved — One Gospel. One Savior. One finished work.' },
    { property: 'og:description', content: 'Explore what God has already accomplished for humanity in Jesus Christ.' },
    { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' },
  ] }),
  component: HomePage,
});

function HomePage() {
  return <>
    <section className="relative flex min-h-[630px] items-center overflow-hidden bg-primary text-primary-foreground sm:min-h-[680px] lg:min-h-[730px]">
      <img src={hero.url} alt="An open Bible being handed to someone" fetchPriority="high" className="absolute inset-0 h-full w-full object-cover object-[58%_64%] lg:object-[center_66%]" />
      <div className="absolute inset-0 bg-primary/75 lg:bg-primary/65" />
      <div className="relative mx-auto w-full max-w-7xl px-5 py-20 sm:px-8 lg:px-10">
        <div className="max-w-3xl reveal-up"><p className="section-label mb-6 text-brand-gold">The everlasting gospel</p><h1 className="font-display text-[clamp(3.7rem,7vw,7rem)] leading-[.94]">One Gospel.<br />One Savior.<br /><em className="font-normal text-brand-gold">One finished work.</em></h1><div className="mt-8 max-w-xl space-y-4 text-sm leading-7 text-primary-foreground/90 sm:text-base"><p className="font-semibold">Salvation does not begin with what we do for God. It begins with what God has done for us in Christ.</p><p>Our purpose is to open Scripture and explore the Gospel honestly—without fear, without denominational boundaries, and without asking you to accept our conclusions simply because we say so.</p></div><Button asChild className="mt-9 h-12 rounded-none bg-brand-gold px-7 text-xs font-bold uppercase tracking-[0.13em] text-primary shadow-none hover:bg-brand-gold/90"><Link to="/blog">Explore The Gospel <ArrowUpRight /></Link></Button></div>
      </div>
    </section>
    <section className="bg-background px-5 py-17 sm:px-8 sm:py-22 lg:px-10"><div className="mx-auto grid max-w-7xl gap-9 lg:grid-cols-[.8fr_1.2fr] lg:gap-25"><div><p className="section-label mb-5 text-accent-foreground">The purpose of Born Saved</p><h2 className="font-display text-5xl leading-[1.07] sm:text-6xl">The Gospel is <em>bigger</em> than you think.</h2></div><div className="border-l-2 border-brand-gold pl-6 text-base leading-8 text-muted-foreground sm:pl-9 sm:text-lg"><p className="font-medium text-foreground">Discover what God has already accomplished for humanity in Jesus Christ—and why it changes everything.</p><p className="mt-4">Born Saved.org exists to help people rediscover the Gospel as Scripture presents it: Christ at the center, His finished work as the foundation, and faith as our response to what God has already done.</p><p className="mt-4">Here you can explore the Bible, ask difficult questions, and discover a God whose love, justice, and plan of salvation are far greater than we have often imagined.</p><Link to="/why-we-exist" className="mt-6 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.12em] text-primary underline decoration-brand-gold underline-offset-6">Why we exist <ArrowRight className="size-4" /></Link></div></div></section>
    <section className="bg-secondary px-5 py-17 sm:px-8 sm:py-22 lg:px-10"><div className="mx-auto max-w-7xl"><div className="mb-10 flex flex-wrap items-end justify-between gap-5"><div><p className="section-label text-accent-foreground">Collection highlights</p><h2 className="mt-3 max-w-xl font-display text-4xl leading-tight sm:text-5xl">Rediscover the Gospel through what God has already accomplished in Christ.</h2></div><Link to="/shop" className="inline-flex items-center gap-2 border-b border-primary pb-2 text-xs font-bold uppercase tracking-[0.12em]">View all books <ArrowUpRight className="size-4" /></Link></div><div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">{products.slice(0,3).map((product,i) => <ProductCard product={product} index={i} key={product.slug} />)}</div></div></section>
    <section className="bg-primary px-5 py-16 text-center text-primary-foreground sm:px-8 sm:py-22"><p className="section-label text-brand-gold">An invitation to look again</p><p className="mx-auto mt-5 max-w-3xl font-display text-4xl leading-tight sm:text-5xl">Open the Bible. Look at Christ. Discover the Gospel.</p><Button asChild variant="outline" className="mt-8 h-12 rounded-none border-brand-gold bg-transparent px-7 text-xs font-bold uppercase tracking-[0.12em] text-primary-foreground hover:bg-brand-gold hover:text-primary"><Link to="/blog">Explore The Gospel <ArrowUpRight /></Link></Button></section>
  </>;
}
