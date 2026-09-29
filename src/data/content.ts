import bornCover from '@/assets/book-born.png.asset.json';
import judgementCover from '@/assets/book-judgement.png.asset.json';
import shiftedCover from '@/assets/book-centered.png.asset.json';
import sealCover from '@/assets/book-seal.png.asset.json';
import pamphletsCover from '@/assets/book-pamphlets.png.asset.json';
import blog1 from '@/assets/blog-1.png.asset.json';
import blog2 from '@/assets/blog-2.png.asset.json';
import blog3 from '@/assets/blog-3.png.asset.json';
import blog4 from '@/assets/blog-4.png.asset.json';
import blog5 from '@/assets/blog-5.png.asset.json';

export const products = [
  { title: "Born Saved: Rediscovering God's Accomplished Work In Christ", cover: bornCover.url, slug: 'born-saved-book', price: '$4.99', status: 'Out of Stock', summary: "Before Paul explains justification by faith, he first explains the representative work of Jesus Christ as the Second Adam. Before he tells us how salvation is received, he explains what God accomplished through the incarnation, the cross, the resurrection, and Christ's priesthood." },
  { title: 'The Day of Judgement: Two Goats and the Final Removal of Sin', cover: judgementCover.url, slug: 'the-day-of-atonement', price: '$4.99', status: 'Out of Stock', summary: 'The Day of Judgment reveals a God who does not ignore the sin problem, pretend guilt does not exist, or ask sinners to become good enough to save themselves. Instead, it reveals what God is doing in Christ to deal with sin, accusation, judgment, rebellion, and the charges brought against God’s character.' },
  { title: 'When The Center Shifted: How Christianity Kept The Words But Changed The Story', cover: shiftedCover.url, slug: 'when-the-center-shifted', price: '$4.99', status: 'Out of Stock', summary: 'What if Christianity kept the words of the Gospel—but slowly lost its center? When the Center Shifted follows a remarkable historical trail through the development of Christian thought, asking how the Gospel came to be understood in ways that may look very different from the message proclaimed by the earliest Christians.' },
  { title: 'The Seal of God or the Mark: The Choice That Will Divide The World', cover: sealCover.url, slug: 'the-seal-of-god-or-the-mark', price: '$4.99', status: 'Out of Stock', summary: 'Before Revelation speaks of the mark of the beast, Scripture gives us another sign: the seal of the living God. And if the two are opposites, then we cannot understand the mark until we understand the seal.' },
  { title: 'Born Saved Witnessing Pamphlets', cover: pamphletsCover.url, slug: 'born-saved-witnessing-pamphlets', price: '$120.00 / 100', status: 'Out of Stock', summary: 'Give the Gospel. Share the Good News. Point Someone to Christ. These beautiful Born Saved Gospel Witness Pamphlets were created for one simple purpose: to put the Gospel into the hands of people who need to hear it.' },
];

export const articles = [
  { title: 'WHEN WERE YOU PUT INTO CHRIST?', url: 'https://www.bornsaved.org/post/when-were-you-put-into-christ', image: blog1.url, category: 'Biblical Solidarity', excerpt: 'The Second Adam, Corporate Solidarity, and the Question Behind “Once Saved, Always Saved”' },
  { title: "The Husband Isn't Dead: Why Did Paul Use Marriage to Explain the Law?", url: 'https://www.bornsaved.org/post/the-husband-isn-t-dead-why-did-paul-use-marriage-to-explain-the-law', image: blog2.url, category: 'Gospel', excerpt: 'Romans 5–8, the Death of the Old Man, and Belonging to Christ' },
  { title: 'THE COUNTERFEIT GOSPEL — BLOG 3 THE SCOPE OF CHRIST’S ACCOMPLISHMENT', url: 'https://www.bornsaved.org/post/the-counterfeit-gospel-blog-3-the-scope-of-christ-s-accomplishment', image: blog3.url, category: 'Gospel', excerpt: 'What Did the Second Adam Actually Do for Humanity?' },
  { title: 'THE COUNTERFEIT GOSPEL — BLOG 2 THE GOSPEL BEFORE THE SYSTEM', url: 'https://www.bornsaved.org/post/the-counterfeit-gospel-blog-2-the-gospel-before-the-system', image: blog4.url, category: 'Gospel', excerpt: 'What Did Christ Actually Accomplish for Humanity?' },
  { title: 'THE COUNTERFEIT GOSPEL— BLOG 1 THE FINAL TEST', url: 'https://www.bornsaved.org/post/the-counterfeit-gospel-blog-1-the-final-test', image: blog5.url, category: 'Gospel', excerpt: 'How Will We Know the True Gospel?' },
];
