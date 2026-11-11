'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, ArrowUpRight, Pause, Play } from 'lucide-react';

const slides = [
  { src: 'https://videos.pexels.com/video-files/18382358/18382358-uhd_3840_2160_25fps.mp4', poster: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1500&q=82', title: <>Websites and software built for <em>real work.</em></>, note: 'A focused coding session, where ideas become useful digital products.' },
  { src: 'https://videos.pexels.com/video-files/4974708/4974708-hd_1920_1080_25fps.mp4', poster: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1500&q=82', title: <>A good technology partner makes <em>progress easier.</em></>, note: 'People working together to plan, build and improve digital services.' },
  { src: 'https://videos.pexels.com/video-files/13522186/13522186-uhd_3840_2160_25fps.mp4', poster: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1500&q=82', title: <>Thoughtful software, made with <em>care.</em></>, note: 'A warm, quiet workspace for careful development and problem solving.' },
  { src: 'https://videos.pexels.com/video-files/34645150/14683913_1920_1080_30fps.mp4', poster: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1500&q=82', title: <>Smarter systems for a more <em>connected future.</em></>, note: 'A close look at the circuits and connections behind modern computing.' },
  { src: 'https://videos.pexels.com/video-files/36405803/15438012_1920_1080_30fps.mp4', poster: 'https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?auto=format&fit=crop&w=1500&q=82', title: <>Technology that gives bold ideas <em>room to grow.</em></>, note: 'An abstract view of connected processors and artificial intelligence.' },
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
    const timer = window.setInterval(() => setActive((current) => (current + 1) % slides.length), 8500);
    return () => window.clearInterval(timer);
  }, [paused, motionAllowed]);
  const slide = slides[active];
  return <section className="hero hero-network hero-video" aria-label="WorldWays technology showcase">
    <div className="hero-video-frame" aria-live="polite">
      <video key={slide.src} className="hero-video-media" autoPlay muted loop playsInline preload={active === 0 ? 'auto' : 'metadata'} poster={slide.poster} aria-label="Technology video"><source src={slide.src} type="video/mp4" /></video>
      <div className="hero-video-shade" />
      <div className="hero-video-content shell"><div className="hero-copy">
        <p className="eyebrow"><i/> WorldWays Web-Developers Ltd</p><h1>{slide.title}</h1>
        <p>We build business websites, mobile apps and digital systems, with cybersecurity, digital growth and dependable technology support for organisations across Kenya.</p>
        <div className="hero-actions"><Link href="/contact" className="button button-lime">Talk to our team <ArrowUpRight size={18}/></Link><Link href="/services" className="button button-outline">Explore our services <ArrowRight size={17}/></Link></div>
        <div className="home-service-links"><span>Web and software</span><span>Cybersecurity</span><span>Digital growth</span><span>IT support</span></div>
      </div><div className="hero-video-caption"><span>Technology in motion</span><p>{slide.note}</p></div></div>
      <div className="hero-video-controls shell"><div className="hero-video-dots" role="group" aria-label="Choose a technology video">{slides.map((item, index) => <button key={item.src} type="button" className={index === active ? 'active' : ''} onClick={() => setActive(index)} aria-label={`Show video ${index + 1}`} aria-pressed={index === active}><span>{String(index + 1).padStart(2, '0')}</span></button>)}</div><button type="button" className="hero-video-pause" onClick={() => setPaused((value) => !value)} aria-label={paused ? 'Play video carousel' : 'Pause video carousel'}>{paused ? <Play size={16}/> : <Pause size={16}/>}<span>{paused ? 'Play' : 'Pause'}</span></button></div>
    </div>
  </section>;
}
