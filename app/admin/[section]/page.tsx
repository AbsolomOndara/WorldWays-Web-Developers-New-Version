import { AdminManager } from '@/components/admin-manager';
type Props={params:Promise<{section:string}>};
export default async function AdminSectionPage({params}:Props){const {section}=await params;return <AdminManager section={section}/>}
