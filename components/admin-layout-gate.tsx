'use client';
import { usePathname } from 'next/navigation';
import { AdminShell } from '@/components/admin-shell';
export function AdminLayoutGate({children}:{children:React.ReactNode}){const path=usePathname();return path==='/admin/login'?<>{children}</>:<AdminShell>{children}</AdminShell>;}
