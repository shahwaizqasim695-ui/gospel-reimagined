import { createFileRoute } from '@tanstack/react-router';
import { PageIntro } from '@/components/SiteLayout';
import { ProductCard } from '@/components/ProductCard';
import { FadeIn } from '@/components/FadeIn';
import { products } from '@/data/content';
export const Route = createFileRoute('/shop')({
  head: () => ({ meta: [ { title: 'Shop the Collection — Born Saved' }, { name: 'description', content: 'Explore the five Born Saved books and witnessing pamphlets about Christ’s finished work, the Gospel, judgment, and faith.' }, { property: 'og:title', content: 'Shop the Collection — Born Saved' }, { property: 'og:description', content: 'The Everlasting Gospel series and Born Saved witnessing pamphlets.' }, { property: 'og:type', content: 'website' }, { name: 'twitter:card', content: 'summary_large_image' } ] }), component: ShopPage,
});
function ShopPage() { return <><PageIntro eyebrow="The everlasting gospel series" title="The collection" description="Rediscover the Gospel through what God has already accomplished in Christ." /><section className="px-5 py-15 sm:px-8 sm:py-20 lg:px-10"><div className="mx-auto max-w-7xl"><div className="mb-9 flex items-center justify-between border-b border-border pb-5"><h2 className="font-display text-3xl">All Products</h2><span className="text-xs uppercase tracking-[.14em] text-muted-foreground">5 products</span></div><div className="grid gap-x-7 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">{products.map((product,i) => <FadeIn key={product.slug} delay={(i % 3) * 0.08}><ProductCard product={product} index={i} /></FadeIn>)}</div></div></section></>; }
