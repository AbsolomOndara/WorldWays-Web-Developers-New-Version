'use client';
import Link from 'next/link';
import { useEffect,useState } from 'react';
import { ArrowUpRight, Code2, ShieldCheck, ChartNoAxesColumnIncreasing, Blocks, ShoppingBag, Headset, Sparkles } from 'lucide-react';
import { publicRequest } from '@/lib/api';
import { clients as fallbackClients, faqs as fallbackFaqs, services as fallbackServices } from '@/lib/content';
const iconMap=[Code2,ChartNoAxesColumnIncreasing,Sparkles,Blocks,ShoppingBag,Headset,ShieldCheck];
type Service={id?:string|number;slug:string;title:string;label?:string;summary:string;is_published?:boolean};
type Client={id?:string|number;name?:string;client?:string;title?:string;initials?:string;color?:string;sector?:string;category?:string;is_published?:boolean};
type Faq={id?:string|number;question:string;answer:string;is_published?:boolean};
const serviceImages=[
  ['https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=78','Developer workspace with code on screen'],
  ['https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=900&q=78','Abstract cybersecurity network visualization'],
  ['https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=900&q=78','Digital product planning on a laptop'],
  ['https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=900&q=78','Computer hardware and connected circuits'],
  ['https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=900&q=78','Technology team collaborating at work'],
  ['https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&fit=crop&w=900&q=78','Immersive digital technology lights'],
];
export function ServiceCards({ limit }: { limit?: number }) { const[data,setData]=useState<Service[]>(fallbackServices); useEffect(()=>{publicRequest<Service[]>('/api/public/services').then(rows=>{if(Array.isArray(rows)&&rows.length){const known=new Set(fallbackServices.map(s=>s.slug));const custom=rows.filter(row=>!known.has(row.slug));setData([...fallbackServices,...custom]);}}).catch(()=>{});},[]);return <div className="service-cards">{data.slice(0,limit).map((service,index)=>{const Icon=iconMap[index%iconMap.length]||Sparkles;const media=serviceImages[index%serviceImages.length];return <article className="service-card" key={service.id||service.slug}><div className="service-card-photo"><img src={media[0]} alt={media[1]} loading="lazy"/><span className="service-icon"><Icon size={20}/></span></div><span className="service-label">{service.label||'Service'} / {String(index+1).padStart(2,'0')}</span><h3>{service.title}</h3><p>{service.summary}</p><Link href={`/services/${service.slug}`}>Explore service <ArrowUpRight size={16}/></Link></article>})}</div>; }
export function ClientGrid() { const[data,setData]=useState<Client[]>(fallbackClients); useEffect(()=>{publicRequest<Client[]>('/api/public/projects').then(rows=>{if(Array.isArray(rows)&&rows.length)setData(rows)}).catch(()=>{});},[]); return <div className="clients-row">{data.map((client,index)=>{const name=client.name||client.client||client.title||'Worldways partner';const initials=client.initials||name.split(/\s+/).slice(0,2).map(w=>w[0]).join('').toUpperCase();const colors=['green','blue','violet','red','orange','teal','pink'];return <div className="client-tile" key={client.id||name}><span className={`client-mark ${client.color||colors[index%colors.length]}`}>{initials}</span><span><strong>{name}</strong><small>{client.sector||client.category||'Client & partner'}</small></span></div>})}</div>; }
export function FAQList({ limit }: { limit?: number }) { const[data,setData]=useState<Faq[]>(fallbackFaqs);useEffect(()=>{publicRequest<Faq[]>('/api/public/faqs').then(rows=>{if(Array.isArray(rows)&&rows.length)setData(rows)}).catch(()=>{});},[]);return <div className="faq-list">{data.slice(0,limit).map(item=><details className="faq-item" key={item.id||item.question}><summary>{item.question}</summary><p>{item.answer}</p></details>)}</div>; }
