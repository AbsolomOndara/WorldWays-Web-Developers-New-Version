import { useId } from 'react';

const palette: Record<string, { a: string; b: string; c: string; bg: string }> = {
  contact: { a: '#0f6b59', b: '#ffc46b', c: '#ed8b78', bg: '#eaf4ec' },
  faq: { a: '#6757c8', b: '#ffca72', c: '#71c6ac', bg: '#f0edff' },
  about: { a: '#217b57', b: '#f2b56c', c: '#6ebfb0', bg: '#e8f3eb' },
  projects: { a: '#186b59', b: '#f2b866', c: '#78b7d8', bg: '#e8f2f1' },
  reviews: { a: '#2d6e55', b: '#f2b866', c: '#d6858b', bg: '#f7eee8' },
  company: { a: '#176b49', b: '#ffc46b', c: '#79b9a0', bg: '#eaf4ec' },
  services: { a: '#176b49', b: '#775bd0', c: '#ffbd65', bg: '#e9f3ed' },
  blog: { a: '#3c735d', b: '#f3b96c', c: '#8272cf', bg: '#f1f0e9' },
  home: { a: '#176b49', b: '#f3b96c', c: '#7b69d0', bg: '#eaf4ec' },
};

export function CartoonIllustration({ type = 'home', className = '' }: { type?: string; className?: string }) {
  const p = palette[type] || palette.home;
  const id = useId().replace(/:/g, '');
  return <svg className={`cartoon-art ${className}`} viewBox="0 0 560 390" role="img" aria-label={`${type} technology illustration`} xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id={`screen-${id}`} x1="0" x2="1" y1="0" y2="1"><stop stopColor={p.a}/><stop offset="1" stopColor="#123d35"/></linearGradient>
      <filter id={`shadow-${id}`} x="-20%" y="-20%" width="140%" height="150%"><feDropShadow dx="0" dy="12" stdDeviation="9" floodColor="#244e3c" floodOpacity=".12"/></filter>
    </defs>
    <path d="M280 25c106 0 192 76 212 177 20 99-55 161-151 164-105 4-257-18-273-115C51 151 144 25 280 25Z" fill={p.bg}/>
    <g fill="none" stroke={p.a} strokeOpacity=".24" strokeWidth="2"><path d="m86 100 55 30 43-55 57 35 69-61 48 47 65-4 42 46"/><path d="m110 269 44-38 61 38 39-44 65 37 66-48 50 43"/></g>
    <g fill={p.a} fillOpacity=".55"><circle cx="86" cy="100" r="5"/><circle cx="141" cy="130" r="6"/><circle cx="184" cy="75" r="5"/><circle cx="241" cy="110" r="6"/><circle cx="310" cy="49" r="5"/><circle cx="358" cy="96" r="6"/><circle cx="423" cy="92" r="5"/><circle cx="465" cy="138" r="6"/><circle cx="110" cy="269" r="5"/><circle cx="154" cy="231" r="6"/><circle cx="215" cy="269" r="5"/><circle cx="254" cy="225" r="6"/><circle cx="319" cy="262" r="5"/><circle cx="385" cy="214" r="6"/><circle cx="435" cy="257" r="5"/></g>
    <g filter={`url(#shadow-${id})`}>
      <rect x="129" y="105" width="300" height="178" rx="19" fill="#fff"/>
      <rect x="143" y="119" width="272" height="149" rx="12" fill={`url(#screen-${id})`}/>
      <circle cx="279" cy="275" r="3" fill="#aac2b1"/>
      <path d="M108 285h343l-18 26H126Z" fill="#d9e7df" stroke="#739183" strokeWidth="3"/>
      <rect x="245" y="285" width="72" height="6" rx="3" fill="#819a8b"/>
    </g>
    <g fontFamily="monospace" fontSize="13" fontWeight="700">
      <text x="169" y="151" fill={p.b}>const</text><text x="215" y="151" fill="#eaf4ee"> experience = {'{'}</text>
      <text x="184" y="178" fill="#a8dfb6"> design: <tspan fill="#f6d48c">'clear'</tspan>,</text>
      <text x="184" y="202" fill="#a8dfb6"> people: <tspan fill="#f6d48c">'first'</tspan>,</text>
      <text x="184" y="226" fill="#eaf4ee"> result: <tspan fill={p.b}>build()</tspan></text>
    </g>
    <g filter={`url(#shadow-${id})`}>
      <rect x="54" y="143" width="91" height="62" rx="15" fill="#fff"/><path d="m81 205-3 16 20-16" fill="#fff"/><circle cx="82" cy="174" r="4" fill={p.a}/><circle cx="99" cy="174" r="4" fill={p.b}/><circle cx="116" cy="174" r="4" fill={p.c}/>
      <rect x="400" y="162" width="84" height="84" rx="24" fill="#fff"/><path d="M424 205h35M441 188v35" stroke={p.a} strokeWidth="7" strokeLinecap="round"/><circle cx="442" cy="203" r="30" fill="none" stroke={p.b} strokeWidth="3" strokeDasharray="4 7"/>
      <rect x="211" y="44" width="120" height="41" rx="20" fill="#fff"/><circle cx="235" cy="64" r="8" fill={p.a}/><path d="M254 64h53" stroke="#c7d8ca" strokeWidth="5" strokeLinecap="round"/>
    </g>
    {type === 'faq' && <g><circle cx="452" cy="66" r="34" fill={p.b}/><text x="452" y="79" textAnchor="middle" fontSize="36" fontWeight="800" fill="#fff">?</text></g>}
    {type === 'reviews' && <g><path d="M390 38h83a16 16 0 0 1 16 16v23a16 16 0 0 1-16 16h-21l-15 13v-13h-47a16 16 0 0 1-16-16V54a16 16 0 0 1 16-16Z" fill={p.b}/><text x="431" y="78" textAnchor="middle" fontSize="21" fill="#fff">★★★★★</text></g>}
    {type === 'contact' && <g><circle cx="465" cy="70" r="31" fill={p.c}/><path d="M451 69h28M465 55v28" stroke="#fff" strokeWidth="5" strokeLinecap="round"/></g>}
    {type === 'projects' && <g><rect x="60" y="61" width="76" height="56" rx="9" fill={p.b}/><rect x="68" y="70" width="60" height="38" rx="4" fill="#fff"/><path d="M74 98l14-14 12 10 10-8 11 12" fill={p.c}/></g>}
    {type === 'services' && <g><rect x="461" y="274" width="42" height="67" rx="9" fill="#fff" stroke={p.a} strokeWidth="3"/><rect x="467" y="283" width="30" height="43" rx="4" fill={p.a}/><circle cx="482" cy="334" r="2" fill={p.a}/></g>}
    {type === 'blog' && <g><rect x="63" y="68" width="83" height="62" rx="9" fill={p.c}/><path d="M75 86h57M75 101h45M75 116h34" stroke="#fff" strokeWidth="5" strokeLinecap="round"/></g>}
    <path d="M161 341h234" stroke={p.a} strokeOpacity=".16" strokeWidth="4" strokeLinecap="round"/>
  </svg>;
}

