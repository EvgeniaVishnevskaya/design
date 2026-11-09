import type {Metadata} from 'next';
import './globals.css';
export const metadata:Metadata={title:{default:'Евгения Вишневская — Senior Product Designer',template:'%s | Евгения Вишневская'},description:'Портфолио Евгении Вишневской: Senior Product Designer. Сложные B2B и enterprise-продукты, UX-исследования и дизайн-системы.',openGraph:{title:'Евгения Вишневская — Senior Product Designer',description:'UX/UI · B2B · Enterprise · Design systems',type:'website'}};
export default function RootLayout({children}:{children:React.ReactNode}){return <html lang="ru"><body>{children}</body></html>}
