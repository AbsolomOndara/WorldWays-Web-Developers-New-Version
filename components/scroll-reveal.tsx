'use client';

import { useEffect } from 'react';

export function ScrollReveal() {
  useEffect(() => {
    // The full services catalog can be many screen-heights tall on mobile. Keep
    // its parent visible and reveal the individual cards as they enter view.
    const selector = '.page-hero-copy,.page-hero-image,.section:not(.hero):not(.services-catalog-section),.home-photo-strip,.about-story,.about-principles,.company-values,.principle-grid article,.service-card,.review-card,.faq-item,.project-showcase-card,.contact-info,.contact-form,.projects-intro-inner';
    const nodes = Array.from(document.querySelectorAll<HTMLElement>(selector));
    if (!('IntersectionObserver' in window)) return;
    const observer = new IntersectionObserver(entries => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-revealed');
          observer.unobserve(entry.target);
        }
      }
    }, { threshold: 0, rootMargin: '0px 0px -36px 0px' });
    nodes.forEach((node, index) => {
      node.classList.add('reveal-on-scroll');
      node.style.setProperty('--reveal-delay', `${Math.min(index % 4, 3) * 70}ms`);
      observer.observe(node);
    });
    document.body.classList.add('motion-ready');
    return () => { observer.disconnect(); document.body.classList.remove('motion-ready'); };
  }, []);
  return null;
}
