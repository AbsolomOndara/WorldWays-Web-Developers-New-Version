import Link from 'next/link';
import { SiteHeader, SiteFooter } from '@/components/site-chrome';
import { CartoonIllustration } from '@/components/cartoon-illustration';
import { WhatsAppWidget } from '@/components/whatsapp-widget';
import { ScrollReveal } from '@/components/scroll-reveal';
export function SiteFrame({children}:{children:React.ReactNode}){return <><a className="skip-link" href="#main">Skip to content</a><ScrollReveal/><div id="top"><SiteHeader/></div>{children}<SiteFooter/><WhatsAppWidget/></>;}
const sceneByPage:Record<string,string>={About:'about',Company:'company',Services:'services',Projects:'projects',Reviews:'reviews',Pricing:'services',FAQs:'faq',Blog:'blog',Contact:'contact',Search:'about',Home:'home'};
export function PageHero({eyebrow,title,lead,trail='Home'}:{eyebrow:string;title:React.ReactNode;lead:string;trail?:string}){return <section className={`page-hero bond-section page-hero-${trail.toLowerCase()}`}><div className="shell page-hero-grid"><div className="page-hero-copy"><div className="breadcrumbs"><Link href="/">Home</Link> / {trail}</div><p className="eyebrow"><i/> {eyebrow}</p><h1>{title}</h1><p>{lead}</p></div><div className="page-hero-image"><CartoonIllustration type={sceneByPage[trail]||'home'}/><span>WorldWays Web-Developers</span></div></div></section>;}
