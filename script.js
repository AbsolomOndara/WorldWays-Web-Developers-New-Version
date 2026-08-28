const menuButton=document.querySelector('.menu-toggle');const navLinks=document.querySelector('.nav-links');menuButton.addEventListener('click',()=>{const open=menuButton.getAttribute('aria-expanded')==='true';menuButton.setAttribute('aria-expanded',String(!open));navLinks.classList.toggle('open',!open);document.body.style.overflow=open?'':'hidden'});navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{navLinks.classList.remove('open');menuButton.setAttribute('aria-expanded','false');document.body.style.overflow=''}));
document.querySelectorAll('.service-tabs button').forEach(button=>button.addEventListener('click',()=>{document.querySelectorAll('.service-tabs button').forEach(b=>{b.classList.remove('active');b.setAttribute('aria-selected','false')});button.classList.add('active');button.setAttribute('aria-selected','true');const filter=button.dataset.filter;document.querySelectorAll('.service-card').forEach(card=>card.classList.toggle('hidden',filter!=='all'&&card.dataset.category!==filter))}));
document.querySelectorAll('.step button').forEach(button=>button.addEventListener('click',()=>{const step=button.closest('.step');const wasOpen=step.classList.contains('open');document.querySelectorAll('.step').forEach(item=>{item.classList.remove('open');item.querySelector('button').setAttribute('aria-expanded','false');item.querySelector('button b').textContent='+'});if(!wasOpen){step.classList.add('open');button.setAttribute('aria-expanded','true');button.querySelector('b').textContent='−'}}));
const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('visible');observer.unobserve(entry.target)}}),{threshold:.12});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
document.querySelector('#project-form').addEventListener('submit',event=>{event.preventDefault();const name=new FormData(event.currentTarget).get('name').trim();const status=event.currentTarget.querySelector('.form-status');status.textContent=`Thank you${name?`, ${name}`:''}. Your note is ready—connect this form to your preferred email or CRM to receive submissions.`;event.currentTarget.querySelector('button').textContent='Project note prepared ✓'});
document.querySelector('#year').textContent=new Date().getFullYear();

// Requested content-protection interaction. This discourages casual copying;
// it is paired with a clear, non-disruptive notice for visitors.
const protectionNotice=document.createElement('div');
protectionNotice.className='protection-notice';
protectionNotice.setAttribute('role','status');
protectionNotice.setAttribute('aria-live','polite');
protectionNotice.innerHTML='<span>WW</span><p><strong>Worldways content is protected.</strong><small>Please contact our team if you would like to use or reference this work.</small></p>';
document.body.appendChild(protectionNotice);
let protectionTimer;
document.addEventListener('contextmenu',event=>{event.preventDefault();protectionNotice.classList.add('show');clearTimeout(protectionTimer);protectionTimer=setTimeout(()=>protectionNotice.classList.remove('show'),3200)});
