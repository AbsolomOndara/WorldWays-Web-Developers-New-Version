import type { Metadata } from 'next';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { SiteFrame, PageHero } from '@/components/site-frame';
import { ReviewFeed, ReviewForm } from '@/components/reviews';

export const metadata:Metadata={title:'Client Reviews | Worldways Web-Developers',description:'Read feedback shared by Worldways clients and leave a review about your experience working with our team.',alternates:{canonical:'/reviews'}};
export default function ReviewsPage(){return <SiteFrame><main id="main"><PageHero eyebrow="Client reviews" title={<>A better picture comes from <em>your experience.</em></>} lead="Read feedback shared by our clients, or tell us about your experience working with Worldways. Each review is checked by our team before it is published." trail="Reviews"/><section className="section section-white"><div className="shell review-page-layout"><div className="review-public-list"><p className="eyebrow"><i/> Client feedback</p><h2 className="section-title">Experiences from <em>the people we serve.</em></h2><ReviewFeed/></div><aside className="review-form-panel"><p className="eyebrow"><i/> Share a review</p><h2>Tell us how the work felt from your side.</h2><ReviewForm/><Link className="inline-link" href="/projects"><ArrowLeft size={15}/> Back to our projects</Link></aside></div></section></main></SiteFrame>}
