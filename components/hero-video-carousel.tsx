'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Pause, Play } from 'lucide-react';

const slides = [
  { src: 'https://videos.pexels.com/video-files/10130349/10130349-hd_1920_1080_30fps.mp4', title: <>Interfaces begin with <em>lines of code.</em></>, note: 'A close view of an editor as a developer shapes a working idea.' },
  { src: 'https://videos.pexels.com/video-files/1992325/1992325-hd_1920_1080_30fps.mp4', title: <>Small details make software <em>feel effortless.</em></>, note: 'Code runs across a screen during a focused development session.' },
  { src: 'https://videos.pexels.com/video-files/2278095/2278095-hd_1920_1080_30fps.mp4', title: <>Thoughtful development, <em>built line by line.</em></>, note: 'JavaScript code is edited and refined on a developer monitor.' },
  { src: 'https://videos.pexels.com/video-files/6804121/6804121-uhd_4096_2160_25fps.mp4', title: <>Reliable systems start with <em>clear logic.</em></>, note: 'A code editor runs through a dark mode interface.' },
  { src: 'https://videos.pexels.com/video-files/11274330/11274330-uhd_3840_2160_25fps.mp4', title: <>Ideas turn into products through <em>careful craft.</em></>, note: 'A close-up of code on a laptop during a software build.' },
];

export function HeroVideoCarousel() {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const [motionAllowed, setMotionAllowed] = useState(true);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    setMotionAllowed(!preference.matches);
    const update = () => setMotionAllowed(!preference.matches);
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);
  useEffect(() => {
    if (paused || !motionAllowed) return;
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 5500);
    return () => window.clearInterval(timer);
  }, [paused, motionAllowed]);
  const slide = slides[active];
  return <section className="hero hero-network hero-video" aria-label="WorldWays technology showcase">
    <div className="hero-video-frame" aria-live="polite">
      <video key={slide.src} className="hero-video-media" autoPlay muted loop playsInline preload={active === 0 ? 'auto' : 'metadata'} aria-label="Code being written and worked on"><source src={slide.src} type="video/mp4" /></video>
      <div className="hero-video-shade" />
      <div className="hero-video-content shell"><div className="hero-copy">
        <p className="eyebrow"><i/> WorldWays Web-Developers Ltd</p><h1>{slide.title}</h1>
        <p>We build business websites, mobile apps and digital systems, with cybersecurity, digital growth and dependable technology support for organisations worldwide.</p>
        <div className="hero-actions"><Link href="/contact" className="button button-lime">Talk to our team <ArrowUpRight size={18}/></Link><Link href="/services" className="button button-outline">Explore our services <ArrowRight size={17}/></Link></div>
        <div className="home-service-links"><span>Web and software</span><span>Cybersecurity</span><span>Digital growth</span><span>IT support</span></div>
      </div><div className="hero-video-caption"><span>Technology in motion</span><p>{slide.note}</p></div></div>
      <div className="hero-video-controls shell"><div className="hero-video-dots" role="group" aria-label="Choose a technology video">{slides.map((item, index) => <button key={item.src} type="button" className={index === active ? 'active' : ''} onClick={() => setActive(index)} aria-label={`Show video ${index + 1}`} aria-pressed={index === active}><span>{String(index + 1).padStart(2, '0')}</span></button>)}</div><button type="button" className="hero-video-pause" onClick={() => setPaused((value) => !value)} aria-label={paused ? 'Play video carousel' : 'Pause video carousel'}>{paused ? <Play size={16}/> : <Pause size={16}/>}<span>{paused ? 'Play' : 'Pause'}</span></button></div>
    </div>
  </section>;
}
