import type { Metadata } from 'next';
import { SiteFrame } from '@/components/site-frame';
import { ServiceDetail } from '@/components/service-detail';
import { services } from '@/lib/content';
type Props={params:Promise<{slug:string}>};
export const dynamicParams=true;
export function generateStaticParams(){return services.map(service=>({slug:service.slug}));}
export async function generateMetadata({params}:Props):Promise<Metadata>{const{slug}=await params;const service=services.find(s=>s.slug===slug);if(service){return{title:service.title,description:`${service.summary} Contact Worldways to discuss ${service.title.toLowerCase()} for your organisation.`,alternates:{canonical:`/services/${slug}`}};}const api=(process.env.NEXT_PUBLIC_API_BASE_URL||'').replace(/\/$/,'');if(api){try{const response=await fetch(`${api}/api/public/services/${encodeURIComponent(slug)}`,{cache:'no-store'});if(response.ok){const result=await response.json();const row=result.data||result;return{title:row.title,description:row.summary,alternates:{canonical:`/services/${slug}`}};}}catch{}}return{title:'Our services',description:'Explore Worldways web development, app development and technology services for organisations worldwide.',robots:{index:false,follow:true}};}
export default async function ServicePage({params}:Props){const{slug}=await params;return <SiteFrame><ServiceDetail slug={slug}/></SiteFrame>}
