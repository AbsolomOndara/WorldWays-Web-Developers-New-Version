import type { Metadata } from 'next';
import { AdminLayoutGate } from '@/components/admin-layout-gate';
export const metadata:Metadata={title:{default:'Admin',template:'%s | Worldways Admin'},robots:{index:false,follow:false}};
export default function AdminLayout({children}:{children:React.ReactNode}){return <AdminLayoutGate>{children}</AdminLayoutGate>}
