'use client';

import Link from 'next/link';
import { FormEvent, useEffect, useState } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { publicRequest } from '@/lib/api';

type Review = { id?: string | number; name: string; organisation?: string; service?: string; rating: number; review: string; created_at?: string };

export function ReviewFeed({ limit }: { limit?: number }) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => { publicRequest<Review[]>('/api/public/reviews').then(rows => setReviews(Array.isArray(rows) ? rows : [])).catch(() => setReviews([])).finally(() => setLoading(false)); }, []);
  const visible = limit ? reviews.slice(0, limit) : reviews;
  return <div className="review-feed">
    {visible.map((review, index) => <article className="review-card" key={review.id || `${review.name}-${index}`}>
      <div className="review-stars" aria-label={`${review.rating} out of 5 stars`}>{Array.from({ length: 5 }, (_, i) => <Star key={i} size={16} fill={i < review.rating ? 'currentColor' : 'none'} aria-hidden="true"/>)}</div>
      <blockquote>{review.review}</blockquote>
      <div className="review-person"><span className="review-initials">{review.name.split(/\s+/).map(part => part[0]).slice(0, 2).join('').toUpperCase()}</span><div><strong>{review.name}</strong><small>{[review.organisation, review.service].filter(Boolean).join(' · ') || 'WorldWays client'}</small></div></div>
    </article>)}
    {!visible.length && <p className="review-empty">{loading ? 'Published reviews will appear here.' : 'We are gathering feedback from the people we work with.'}</p>}
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
    try { await publicRequest('/api/public/reviews', { method: 'POST', body: JSON.stringify({ ...values, rating: Number(values.rating) }) }); setStatus('Thank you for sharing your experience. Our team will review it before it appears on the site.'); form.reset(); }
    catch (cause) { setError(true); setStatus(cause instanceof Error ? cause.message : 'We could not send your review. Please try again.'); }
    finally { setBusy(false); }
  }
  return <form className="review-form" onSubmit={submit}>
    <div className="field-row"><label>Your name<input name="name" autoComplete="name" required minLength={2} maxLength={140} placeholder="Your full name"/></label><label>Organisation<input name="organisation" autoComplete="organization" maxLength={180} placeholder="Company or organisation"/></label></div>
    <div className="field-row"><label>Service or project<input name="service" maxLength={180} placeholder="What did we work on together?"/></label><label>Your rating<select name="rating" required defaultValue=""><option value="" disabled>Select a rating</option><option value="5">5 stars, excellent</option><option value="4">4 stars, very good</option><option value="3">3 stars, good</option><option value="2">2 stars, needs improvement</option><option value="1">1 star, needs improvement</option></select></label></div>
    <label>Your review<textarea name="review" required minLength={20} maxLength={2500} rows={5} placeholder="Tell us what went well and what could be better."/></label>
    <label className="review-honeypot" aria-hidden="true">Leave this field empty<input name="website" tabIndex={-1} autoComplete="off"/></label>
    <button className="button" type="submit" disabled={busy}>{busy ? 'Sending review' : 'Send your review'} <ArrowRight size={17}/></button>
    <p className="review-privacy">Reviews are checked by our team before they are published. Your name and review will appear on the site only after approval.</p>
    {status && <p className={`form-message${error ? ' error' : ''}`} role="status">{status}</p>}
  </form>;
}

export function ReviewPreview() {
  return <section className="reviews-preview section section-soft"><div className="shell"><div className="section-title-row"><div><p className="eyebrow"><i/> Working together</p><h2 className="section-title">Good work is measured by <em>the people it helps.</em></h2></div><Link className="inline-link" href="/reviews">Read and share a review <ArrowRight size={16}/></Link></div><ReviewFeed limit={3}/></div></section>;
}
