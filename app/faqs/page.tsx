import type { Metadata } from 'next';
import { SiteFrame, PageHero } from '@/components/site-frame';
import { FAQList } from '@/components/public-sections';
import { faqs } from '@/lib/content';
export const metadata:Metadata={title:'Frequently asked questions',description:'Answers to common questions about Worldways services, project pricing, support and contacting our team.'};
export default function FAQsPage(){return <SiteFrame><main id="main"><PageHero eyebrow="FAQs" title={<>A few useful answers, <em>up front.</em></>} lead="If you have a question that isn’t covered here, send us a note and we’ll be glad to help." trail="FAQs"/><section className="section section-white"><div className="shell" style={{maxWidth:900}}><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify({'@context':'https://schema.org','@type':'FAQPage',mainEntity:faqs.map(item=>({'@type':'Question',name:item.question,acceptedAnswer:{'@type':'Answer',text:item.answer}}))})}}/><FAQList/></div></section></main></SiteFrame>}
