'use client';

import { FormEvent, useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight, Pause, Play, Star } from 'lucide-react';
import { publicRequest } from '@/lib/api';

type Review = { id?: string | number; name: string; organisation?: string; service?: string; rating: number; review: string; created_at?: string };

export function ReviewFeed() {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [loadError, setLoadError] = useState(false);
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    let active = true;
    const loadReviews = async () => {
      try {
        const rows = await publicRequest<Review[]>('/api/public/reviews');
        if (active) {
          setLoadError(false);
          const published = Array.isArray(rows) ? rows : [];
          setReviews(published);
          setIndex((current) => published.length ? Math.min(current, published.length - 1) : 0);
        }
      } catch {
        if (active) { setReviews([]); setLoadError(true); }
      } finally {
        if (active) setLoading(false);
      }
    };
    void loadReviews();
    const refreshTimer = window.setInterval(loadReviews, 30000);
    window.addEventListener('focus', loadReviews);
    return () => {
      active = false;
      window.clearInterval(refreshTimer);
      window.removeEventListener('focus', loadReviews);
    };
  }, []);

  useEffect(() => {
    if (paused || reviews.length < 2 || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timer = window.setInterval(() => setIndex((current) => (current + 1) % reviews.length), 6500);
    return () => window.clearInterval(timer);
  }, [paused, reviews.length]);

  if (!reviews.length) return <div className="review-feed"><p className="review-empty">{loading ? 'Loading published reviews…' : loadError ? 'Published reviews are temporarily unavailable. Please refresh in a moment.' : 'We are gathering feedback from the people we work with.'}</p></div>;

  const goTo = (next: number) => setIndex((next + reviews.length) % reviews.length);
  return <div className="review-carousel" aria-label="Client review carousel">
    <div className="review-carousel-viewport" aria-live="polite">
      <div className="review-carousel-track" style={{ transform: `translateX(-${index * 100}%)` }}>
        {reviews.map((review, slideIndex) => <article className="review-card" key={review.id || `${review.name}-${slideIndex}`} aria-label={`Review ${slideIndex + 1} of ${reviews.length}`} aria-hidden={slideIndex !== index}>
          <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>{Array.from({ length: 5 }, (_, starIndex) => <Star key={starIndex} size={19} fill={starIndex < review.rating ? 'currentColor' : 'none'} aria-hidden="true"/>)}</div>
          <blockquote>{review.review}</blockquote>
          <div className="review-person"><span className="review-initials">{review.name.split(/\s+/).map((part) => part[0]).slice(0, 2).join('').toUpperCase()}</span><div><strong>{review.name}</strong><small>{[review.organisation, review.service].filter(Boolean).join(' · ') || 'WorldWays client'}</small></div></div>
        </article>)}
      </div>
    </div>
    {reviews.length > 1 && <div className="review-carousel-controls">
      <button type="button" className="review-carousel-arrow" onClick={() => goTo(index - 1)} aria-label="Previous review"><ChevronLeft size={20}/></button>
      <span aria-live="polite">{String(index + 1).padStart(2, '0')} <span>/</span> {String(reviews.length).padStart(2, '0')}</span>
      <button type="button" className="review-carousel-arrow" onClick={() => goTo(index + 1)} aria-label="Next review"><ChevronRight size={20}/></button>
      <button type="button" className="review-carousel-pause" onClick={() => setPaused((value) => !value)} aria-label={paused ? 'Resume automatic reviews' : 'Pause automatic reviews'}>{paused ? <Play size={16}/> : <Pause size={16}/>}<span>{paused ? 'Play' : 'Pause'}</span></button>
    </div>}
  </div>;
}

export function ReviewForm() {
  const [status, setStatus] = useState('');
  const [error, setError] = useState(false);
  const [busy, setBusy] = useState(false);
  async function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault(); setBusy(true); setStatus(''); setError(false);
    const form = event.currentTarget;
    const values = Object.fromEntries(new FormData(form).entries());
    if (values.website) { setStatus('Thank you. Your review has been received.'); form.reset(); setBusy(false); return; }
    try {
      await publicRequest('/api/public/reviews', { method: 'POST', body: JSON.stringify({ ...values, rating: Number(values.rating) }) });
      setStatus('Thank you for sharing your experience. Our team will review it before it appears on the site.');
      form.reset();
    } catch (cause) {
      setError(true);
      setStatus(cause instanceof Error ? cause.message : 'We could not send your review. Please try again.');
    } finally { setBusy(false); }
  }
  return <form className="review-form" onSubmit={submit}>
    <div className="field-row"><label>Your name<input name="name" autoComplete="name" required minLength={2} maxLength={140} placeholder="Your full name"/></label><label>Organisation<input name="organisation" autoComplete="organization" maxLength={180} placeholder="Company or organisation"/></label></div>
    <div className="field-row"><label>Service or project<input name="service" maxLength={180} placeholder="What did we work on together?"/></label><label>Your rating<select name="rating" required defaultValue=""><option value="" disabled>Select a rating</option><option value="5">5 stars, excellent</option><option value="4">4 stars, very good</option><option value="3">3 stars, good</option><option value="2">2 stars, needs improvement</option><option value="1">1 star, needs improvement</option></select></label></div>
    <label>Your review<textarea name="review" required minLength={20} maxLength={2500} rows={5} placeholder="Tell us what went well and what could be better."/></label>
    <label className="review-honeypot" aria-hidden="true">Leave this field empty<input name="website" tabIndex={-1} autoComplete="off"/></label>
    <button className="button" type="submit" disabled={busy}>{busy ? 'Sending review…' : 'Send your review'} <ArrowRight size={17}/></button>
    <p className="review-privacy">Reviews are checked by our team before they are published. Your name and review will appear on the site only after approval.</p>
    {status && <p className={`form-message${error ? ' error' : ''}`} role="status">{status}</p>}
  </form>;
}
