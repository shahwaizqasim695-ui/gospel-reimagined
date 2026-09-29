import { Link, useRouterState } from '@tanstack/react-router';
import { ArrowUpRight, Menu, ShoppingBag, X } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import logo from '@/assets/logo.png.asset.json';
import { FadeIn } from '@/components/FadeIn';

const navigation = [
  { label: 'Home', to: '/' },
  { label: 'Shop', to: '/shop' },
  { label: 'Blog', to: '/blog' },
  { label: 'Further Reading', to: '/further-reading' },
  { label: 'Why We Exist', to: '/why-we-exist' },
] as const;

export function SiteLayout({ children }: { children: React.ReactNode }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = useRouterState({ select: s => s.location.pathname });
  return <div className="min-h-screen bg-background text-foreground">
    <header className="site-header relative z-30 bg-primary text-primary-foreground">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between gap-5 px-5 sm:px-8 lg:h-24 lg:px-10">
        <Link to="/" className="flex shrink-0 items-center gap-2.5" aria-label="Born Saved home" onClick={() => setMenuOpen(false)}>
          <img src={logo.url} alt="Born Saved gold circular cross logo" className="h-13 w-13 object-contain lg:h-16 lg:w-16" />
          <span className="font-display text-xl leading-none text-primary-foreground sm:text-2xl">Born Saved<span className="block pt-1 font-sans text-[9px] uppercase tracking-[0.2em] text-brand-gold">The everlasting gospel</span></span>
        </Link>
        <nav aria-label="Main navigation" className="hidden items-center gap-7 lg:flex">
          {navigation.map(item => <Link key={item.to} to={item.to} className={`nav-link text-xs font-semibold uppercase tracking-[0.14em] transition-colors hover:text-brand-gold ${pathname === item.to ? 'text-brand-gold' : 'text-primary-foreground/80'}`}>{item.label}</Link>)}
        </nav>
        <div className="flex items-center gap-1 sm:gap-3">
          <Dialog><DialogTrigger asChild><Button variant="ghost" size="icon" aria-label="Open cart" className="h-10 w-10 text-primary-foreground hover:bg-primary-foreground/10 hover:text-brand-gold"><ShoppingBag className="!size-5" /></Button></DialogTrigger><DialogContent className="max-w-sm rounded-none border-border bg-background"><DialogHeader><DialogTitle className="font-display text-3xl">Your cart</DialogTitle><DialogDescription>The shop collection is currently out of stock.</DialogDescription></DialogHeader><Button asChild className="mt-4 rounded-none"><Link to="/shop">Browse the collection <ArrowUpRight /></Link></Button></DialogContent></Dialog>
          <Button variant="ghost" size="icon" className="h-10 w-10 text-primary-foreground hover:bg-primary-foreground/10 hover:text-brand-gold lg:hidden" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'} aria-expanded={menuOpen}>{menuOpen ? <X className="!size-6" /> : <Menu className="!size-6" />}</Button>
        </div>
      </div>
      {menuOpen && <nav aria-label="Mobile navigation" className="absolute inset-x-0 top-full border-t border-primary-foreground/15 bg-primary px-5 pb-5 pt-2 shadow-lg lg:hidden">{navigation.map(item => <Link key={item.to} to={item.to} onClick={() => setMenuOpen(false)} className={`block border-b border-primary-foreground/15 py-4 text-sm font-semibold uppercase tracking-[0.12em] ${pathname === item.to ? 'text-brand-gold' : 'text-primary-foreground'}`}>{item.label}</Link>)}</nav>}
    </header>
    <main>{children}</main>
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-14 sm:px-8 md:grid-cols-[1fr_auto] lg:px-10">
        <div><Link to="/" className="flex items-center gap-3"><img src={logo.url} alt="" className="h-15 w-15 object-contain" /><span className="font-display text-3xl">Born Saved</span></Link><p className="mt-5 max-w-md font-display text-2xl leading-snug">Open the Bible. Look at Christ. Discover the Gospel.</p></div>
        <div className="md:text-right"><p className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-brand-gold">Contact Us</p><a href="mailto:BornSaved@proton.me" className="text-sm hover:text-brand-gold">BornSaved@proton.me</a><div className="mt-8 flex flex-wrap gap-x-5 gap-y-2 md:justify-end">{navigation.map(item => <Link key={item.to} to={item.to} className="text-xs text-primary-foreground/70 hover:text-brand-gold">{item.label}</Link>)}</div></div>
      </div>
      <div className="border-t border-primary-foreground/15 px-5 py-5 text-center text-xs text-primary-foreground/60">© 2026 Born Saved. All rights reserved.</div>
    </footer>
  </div>;
}

export function PageIntro({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return <section className="bg-primary px-5 py-16 text-primary-foreground sm:px-8 sm:py-20 lg:px-10 lg:py-24"><FadeIn className="mx-auto max-w-7xl"><p className="section-label text-brand-gold">{eyebrow}</p><h1 className="mt-5 max-w-4xl font-display text-5xl leading-[1.08] sm:text-6xl lg:text-7xl">{title}</h1>{description && <p className="mt-6 max-w-2xl text-base leading-8 text-primary-foreground/75 sm:text-lg">{description}</p>}</FadeIn></section>;
}
