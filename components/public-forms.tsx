'use client';
import { FormEvent, useState } from 'react';
import { publicRequest } from '@/lib/api';

export function ContactForm() {
 const [status, setStatus] = useState(''); const [error, setError] = useState(false); const [busy, setBusy] = useState(false);
 async function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setBusy(true); setStatus(''); setError(false); const form = event.currentTarget; const values = Object.fromEntries(new FormData(form).entries());
  try { await publicRequest('/api/public/contact', { method: 'POST', body: JSON.stringify(values) }); setStatus('Thank you. Your enquiry has been sent to the Worldways team.'); form.reset(); }
  catch (err) { setError(true); setStatus(err instanceof Error ? `${err.message} You can email us directly at info@worldwayswebdevelopers.co.ke.` : 'Unable to send your message. Please email us directly.'); }
  finally { setBusy(false); }
 }
 return <form className="contact-form" onSubmit={submit}><div className="field-row"><label>Your name<input name="name" autoComplete="name" required placeholder="Your full name"/></label><label>Email address<input name="email" type="email" autoComplete="email" required placeholder="you@company.com"/></label></div><div className="field-row"><label>Organisation<input name="organisation" autoComplete="organization" placeholder="Company or organisation"/></label><label>What do you need?<select name="service" required defaultValue=""><option value="" disabled>Select a service</option><option>Software &amp; Web Development</option><option>Digital Marketing &amp; Branding</option><option>Business Automation &amp; AI</option><option>IT Consulting &amp; Strategy</option><option>E-commerce Solutions</option><option>Tech Support &amp; Maintenance</option><option>Cybersecurity &amp; Digital Skills</option><option>Other</option></select></label></div><label>Tell us a little about it<textarea name="message" required minLength={8} rows={5} placeholder="What would you like to improve or create?"/></label><button className="button" disabled={busy}>{busy ? 'Sending…' : 'Send your enquiry'} <span>↗</span></button>{status && <p className={`form-message${error ? ' error' : ''}`} role="status">{status}</p>}<p style={{fontSize:9,color:'#869188',margin:0}}>Your message is sent to the Worldways admin dashboard through the connected backend.</p></form>;
}
export function SubscribeForm() {
 const [status, setStatus] = useState(''); const [busy, setBusy] = useState(false);
 async function submit(event: FormEvent<HTMLFormElement>) { event.preventDefault(); setBusy(true); setStatus(''); const form=event.currentTarget; const email=new FormData(form).get('email'); try { await publicRequest('/api/public/subscriptions',{method:'POST',body:JSON.stringify({email})}); setStatus('You’re subscribed. Thank you.'); form.reset(); } catch (e) { setStatus(e instanceof Error ? e.message : 'Please try again later.'); } finally { setBusy(false); } }
 return <form className="subscription-form" onSubmit={submit}><input type="email" name="email" placeholder="Your email address" aria-label="Your email address" required/><button className="button button-lime" disabled={busy}>{busy?'Joining…':'Subscribe'} ↗</button>{status&&<span className="form-message">{status}</span>}</form>;
}
