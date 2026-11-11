'use client';

import { useState } from 'react';
import { X } from 'lucide-react';

function WhatsAppMark({ size = 24 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 32 32" aria-hidden="true" fill="none">
    <path d="M26.5 15.7a10.45 10.45 0 0 1-15.47 9.17L5 26.4l1.58-5.85A10.48 10.48 0 1 1 26.5 15.7Z" stroke="currentColor" strokeWidth="2.2" strokeLinejoin="round"/>
    <path d="M12.07 10.94c-.28-.62-.58-.63-.85-.64h-.72c-.25 0-.67.1-1.02.49-.35.38-1.34 1.31-1.34 3.2s1.37 3.72 1.56 3.97c.19.26 2.65 4.25 6.54 5.78 3.23 1.26 3.9 1.01 4.6.95.7-.07 2.26-.93 2.58-1.83.32-.9.32-1.67.23-1.83-.1-.16-.35-.25-.73-.44-.39-.2-2.27-1.12-2.62-1.25-.35-.13-.61-.19-.86.2-.26.38-.99 1.24-1.22 1.5-.22.25-.45.28-.83.09-.38-.2-1.61-.6-3.07-1.9-1.13-1-1.89-2.25-2.12-2.63-.22-.39-.02-.6.17-.79.17-.17.38-.45.57-.67.19-.23.25-.39.38-.65.13-.25.06-.48-.03-.67-.1-.19-.84-2.04-1.17-2.88Z" fill="currentColor"/>
  </svg>;
}

export function WhatsAppWidget() {
  const [open, setOpen] = useState(false);
  const startChat = 'https://wa.me/254112293409?text=Hello%20WorldWays%2C%20I%20would%20like%20to%20speak%20with%20your%20team.';
  return <div className={`whatsapp-widget${open ? ' is-open' : ''}`}>
    {open && <section className="whatsapp-panel" role="dialog" aria-label="WorldWays WhatsApp support">
      <header className="whatsapp-panel-head"><span className="whatsapp-avatar"><WhatsAppMark size={31}/></span><span className="whatsapp-heading"><strong>WorldWays Support</strong><small>We are here to help you.</small></span><button type="button" className="whatsapp-close" onClick={() => setOpen(false)} aria-label="Close support panel"><X size={20}/></button></header>
      <div className="whatsapp-conversation"><div className="whatsapp-message"><strong>WorldWays Support</strong><p>Hello there!<br/>Welcome to WorldWays support.<br/>How can we help you?</p><time>Usually replies shortly</time></div></div>
      <div className="whatsapp-panel-action"><a href={startChat} target="_blank" rel="noopener noreferrer"><WhatsAppMark size={19}/> Start Chat</a></div>
    </section>}
    <button className="whatsapp-launcher" type="button" onClick={() => setOpen(value => !value)} aria-expanded={open} aria-label={open ? 'Close WhatsApp support' : 'Contact WorldWays support on WhatsApp'}>
      <WhatsAppMark size={31}/><span>Contact Support</span>
    </button>
  </div>;
}
