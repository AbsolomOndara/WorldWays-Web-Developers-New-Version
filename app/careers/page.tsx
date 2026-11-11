import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { PageHero, SiteFrame } from '@/components/site-frame';

export const metadata: Metadata = { title: 'Careers', description: 'Meet the people and skills behind WorldWays digital work. Get in touch about future opportunities.' };

export default function CareersPage(){return <SiteFrame><main id="main"><PageHero eyebrow="Careers" title={<>Make useful technology <em>with us.</em></>} lead="We bring developers, designers, marketers and technology specialists together to solve real problems for organisations around the world." trail="Careers"/><section className="section section-white"><div className="shell careers-content"><p className="eyebrow"><i/> A thoughtful team</p><h2 className="section-title">Bring your perspective, <em>not a title.</em></h2><p>We value clear thinking, care for the people using what we build, and the willingness to keep learning. If you would like to be considered for future opportunities or collaborate with us, tell us what you do and the kind of work you want to take on.</p><Link className="button" href="/contact?subject=Careers">Introduce yourself <ArrowUpRight size={16}/></Link></div></section></main></SiteFrame>}
