import Link from 'next/link';
import { SiteHeader, SiteFooter } from '@/components/site-chrome';
export function SiteFrame({children}:{children:React.ReactNode}){return <><a className="skip-link" href="#main">Skip to content</a><div id="top"><SiteHeader/></div>{children}<SiteFooter/></>;}
const pageImages:Record<string,{src:string;alt:string}>={
  About:{src:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=82',alt:'Technology team collaborating around a laptop'},
  Company:{src:'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=82',alt:'Professional working with digital tools'},
  Services:{src:'/illustrations/digital-product-illustration.png',alt:'Illustration of connected websites, applications, and digital tools'},
  Projects:{src:'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=82',alt:'Team planning a digital project together'},
  Reviews:{src:'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1200&q=82',alt:'Colleagues sharing feedback during a project review'},
  Pricing:{src:'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=82',alt:'Planning a technology project at a desk'},
  FAQs:{src:'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=82',alt:'Close view of connected computer hardware'},
  Blog:{src:'https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=1200&q=82',alt:'Abstract digital technology installation'},
  Contact:{src:'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=82',alt:'Colleagues working together in a bright office'},
  Search:{src:'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=82',alt:'Electronic connections and integrated circuit board'},
  Home:{src:'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=82',alt:'Software development workspace'},
};
export function PageHero({eyebrow,title,lead,trail='Home'}:{eyebrow:string;title:React.ReactNode;lead:string;trail?:string}){const media=pageImages[trail]||pageImages.Services;return <section className={`page-hero${trail==='Services'?' page-hero-service':''}`}><div className="shell page-hero-grid"><div className="page-hero-copy"><div className="breadcrumbs"><Link href="/">Home</Link> / {trail}</div><p className="eyebrow"><i/> {eyebrow}</p><h1>{title}</h1><p>{lead}</p></div><div className="page-hero-image"><img src={media.src} alt={media.alt} loading="eager" fetchPriority="high"/>{trail!=='Services'&&<span>WorldWays Web-Developers</span>}</div></div></section>;}
