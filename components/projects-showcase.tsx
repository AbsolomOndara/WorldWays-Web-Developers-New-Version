'use client';

import { useEffect, useState } from 'react';
import { ArrowUpRight, Pause, Play } from 'lucide-react';
import { apiConfigured, publicRequest } from '@/lib/api';

type Project = {id?:string|number;name:string;sector:string;url:string;domain:string;initials:string;logoSrc?:string;description:string};
const starterProjects: Project[] = [
  { name: 'Happiness Children’s Home', sector: 'Community care', url: 'https://happinesschildrenshome.co.ke/', domain: 'happinesschildrenshome.co.ke', initials: 'HCH', logoSrc: 'https://happinesschildrenshome.co.ke/images/logo.jpg', description: 'A welcoming home for stories, events, community life and ways to support children.' },
  { name: 'Mojake Orphanage', sector: 'Children and family support', url: 'https://www.mojakeorphanagehome.co.ke/', domain: 'mojakeorphanagehome.co.ke', initials: 'MO', logoSrc: 'https://www.mojakeorphanagehome.co.ke/images/logo.jpg', description: 'A clear, compassionate website connecting supporters with the work happening in Kisii.' },
  { name: 'Institute of Cybersecurity and Forensics', sector: 'Education and cybersecurity', url: 'https://www.icsf.co.ke/', domain: 'icsf.co.ke', initials: 'ICSF', description: 'A digital home for cybersecurity education, forensic training and institutional services.' },
  { name: 'Kenya Cyber Security and Forensics Association', sector: 'Cybersecurity community', url: 'https://www.kcsfa.co.ke/', domain: 'kcsfa.co.ke', initials: 'KCSFA', logoSrc: 'https://res.cloudinary.com/dis6gxos2/images/f_auto,q_auto/v1715665104/KCSFA-footer-logo-1/KCSFA-footer-logo-1.png?_i=AA', description: 'An online platform for association information, professional engagement and membership.' },
  { name: 'Worldways One Ventures', sector: 'Travel and empowerment', url: 'https://worldwaysone.co.ke/', domain: 'worldwaysone.co.ke', initials: 'W1', description: 'A broad service website for travel, delegations, conferences and youth empowerment.' },
  { name: 'Keniz Agira & Company Advocates', sector: 'Legal services', url: 'https://www.kenizagiracompanyandadvocates.co.ke/', domain: 'kenizagiracompanyandadvocates.co.ke', initials: 'KA', description: 'A professional digital presence for Keniz Agira & Company Advocates.' },
];

function ProjectCard({ project, hide = false }: { project: Project; hide?: boolean }) {
  const [logoFailed, setLogoFailed] = useState(!project.logoSrc);
  return <article className="project-showcase-card">
    <div className="project-card-head"><span className="project-logo-wrap">{project.logoSrc&&!logoFailed?<img src={project.logoSrc} alt={`${project.name} logo`} loading="lazy" onError={() => setLogoFailed(true)} />:<span className={`project-logo-fallback project-logo-${project.initials.toLowerCase()}`}>{project.initials}</span>}</span><span className="project-sector">{project.sector}</span></div>
    <div className="project-card-body"><p className="project-domain">{project.domain}</p><h3>{project.name}</h3><p className="project-description">{project.description}</p><a href={project.url} target="_blank" rel="noopener noreferrer" tabIndex={hide?-1:undefined}>Visit live project <ArrowUpRight size={17}/></a></div>
    <span className="project-card-rule" aria-hidden="true"/>
  </article>;
}

export function ProjectsShowcase() {
  const [paused, setPaused] = useState(false);
  const [projects, setProjects] = useState<Project[]>(starterProjects);
  useEffect(() => {
    if (!apiConfigured()) return;
    publicRequest<Array<Record<string, unknown>>>('/api/public/projects').then((rows) => {
      const mapped = rows.map((row) => {
        const name = String(row.title || row.client || '');
        const known = starterProjects.find((item) => item.name.toLowerCase() === name.toLowerCase());
        const url = String(row.website_url || known?.url || '');
        let domain = known?.domain || '';
        try { domain = new URL(url).hostname.replace(/^www\./, ''); } catch {}
        const initials = String(row.initials || known?.initials || name.split(/\s+/).map((part) => part[0]).join('').slice(0, 4)).toUpperCase();
        return {
          id: row.id as string | number | undefined,
          name,
          sector: String(row.category || known?.sector || 'Digital project'),
          url,
          domain,
          initials,
          logoSrc: String(row.logo_url || known?.logoSrc || '') || undefined,
          description: String(row.summary || known?.description || 'A digital project developed in partnership with the organisation.'),
        };
      }).filter((project) => project.name && project.url);
      setProjects(mapped);
    }).catch(() => { /* Keep the published starter showcase if the API is unavailable. */ });
  }, []);
  if (!projects.length) return <div className="projects-empty shell">There are no published case studies at the moment.</div>;
  return <div className={`projects-marquee${paused?' is-paused':''}`}>
    <div className="projects-marquee-top shell"><p className="section-description">Each mark opens the live website. Use the pause button to browse at your own pace.</p><button className="marquee-pause" type="button" onClick={() => setPaused((current) => !current)} aria-label={paused?'Resume project showcase':'Pause project showcase'}>{paused?<Play size={16}/>:<Pause size={16}/>}<span>{paused?'Play':'Pause'}</span></button></div>
    <div className="projects-marquee-viewport"><div className="projects-marquee-track"><div className="projects-marquee-set">{projects.map((project)=><ProjectCard project={project} key={project.domain}/>)}</div><div className="projects-marquee-set projects-marquee-copy" aria-hidden="true">{projects.map((project)=><ProjectCard project={project} hide key={`copy-${project.domain}`}/>)}</div></div></div>
  </div>;
}
