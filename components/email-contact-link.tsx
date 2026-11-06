'use client';
import {useEffect,useState} from 'react';
import {publicRequest} from '@/lib/api';
const defaultEmail='info@worldwayswebdevelopers.co.ke';
type Setting={contact_email?:string};
export function EmailContactLink({className='',subject='',children}:{className?:string;subject?:string;children?:React.ReactNode}){const[email,setEmail]=useState(defaultEmail);useEffect(()=>{publicRequest<Setting[]>('/api/public/settings').then(rows=>{const row=Array.isArray(rows)?rows[0]:undefined;if(row?.contact_email)setEmail(row.contact_email)}).catch(()=>{});},[]);return <a className={className} href={`mailto:${email}${subject?`?subject=${encodeURIComponent(subject)}`:''}`}>{children||email}</a>}
