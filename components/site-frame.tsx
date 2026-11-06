import Link from 'next/link';
import { SiteHeader, SiteFooter } from '@/components/site-chrome';
export function SiteFrame({children}:{children:React.ReactNode}){return <><a className="skip-link" href="#main">Skip to content</a><div id="top"><SiteHeader/></div>{children}<SiteFooter/></>;}
export function PageHero({eyebrow,title,lead,trail='Home'}:{eyebrow:string;title:React.ReactNode;lead:string;trail?:string}){return <section className="page-hero"><div className="shell"><div className="breadcrumbs"><Link href="/">Home</Link> / {trail}</div><p className="eyebrow"><i/> {eyebrow}</p><h1>{title}</h1><p>{lead}</p></div></section>;}
