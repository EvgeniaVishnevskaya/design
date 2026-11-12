'use client';
import {useEffect,useRef} from 'react';
import Link from 'next/link';
import {usePathname,useRouter,useSearchParams} from 'next/navigation';
import {X} from 'lucide-react';
import {enDetails} from '@/lib/english';
import styles from './Drawer.module.css';

export function EnglishDrawer(){
  const params=useSearchParams(),router=useRouter(),pathname=usePathname();
  const slug=params.get('detail') as keyof typeof enDetails|null;
  const item=slug?enDetails[slug]:null;
  const closeRef=useRef<HTMLButtonElement>(null);
  useEffect(()=>{if(!item)return;closeRef.current?.focus();const esc=(e:KeyboardEvent)=>{if(e.key==='Escape')router.replace(pathname,{scroll:false})};document.addEventListener('keydown',esc);return()=>document.removeEventListener('keydown',esc)},[item,pathname,router]);
  if(!item)return null;
  const keys=Object.keys(enDetails) as (keyof typeof enDetails)[];
  const next=keys[(keys.indexOf(slug!)+1)%keys.length];
  return <div className={styles.backdrop} onMouseDown={e=>{if(e.target===e.currentTarget)router.replace(pathname,{scroll:false})}}>
    <section className={styles.panel} role="dialog" aria-modal="true" aria-labelledby="english-detail-title">
      <div className={styles.top}><span>CASE STUDIES / SOFTLOGIC.AI / {item.title.toUpperCase()}</span><nav className={styles.drawerLanguages} aria-label="Language"><Link href={`/work/softlogic-ai?detail=${slug}`}>RU</Link><span>|</span><b>EN</b></nav><button ref={closeRef} className={styles.close} onClick={()=>router.replace(pathname,{scroll:false})} aria-label="Close case study"><X/></button></div>
      <div className={styles.intro}><div><h2 id="english-detail-title">{item.title}</h2><h3>Overview</h3><p>{item.lead}</p></div><div><h3>Design challenge</h3><p>{item.challenge}</p><h3>Outcome</h3><p>{item.outcome}</p></div></div>
      <div className={styles.body}><h3>Related product area</h3><div className={styles.placeholder}>The interface examples shown in this case study are from the original product environment. The narrative and all portfolio navigation are available in English.</div></div>
      <Link className={styles.next} href={`/en/work/softlogic-ai?detail=${next}`} scroll={false}>NEXT CASE STUDY <span>{enDetails[next].title}</span></Link>
    </section>
  </div>
}
