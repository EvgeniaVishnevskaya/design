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
  const keys=Object.keys(enDetails) as (keyof typeof enDetails)[];
  const idx=slug?keys.indexOf(slug):-1,item=slug?enDetails[slug]:null,next=keys[(idx+1)%keys.length];
  const closeRef=useRef<HTMLButtonElement>(null),scrollRef=useRef<HTMLDivElement>(null);
  useEffect(()=>{scrollRef.current?.scrollTo({top:0,behavior:'instant'})},[slug]);
  useEffect(()=>{if(!item)return;const y=window.scrollY,old=document.body.style.overflow;document.body.style.overflow='hidden';closeRef.current?.focus();const esc=(e:KeyboardEvent)=>{if(e.key==='Escape')router.replace(pathname,{scroll:false})};document.addEventListener('keydown',esc);return()=>{document.body.style.overflow=old;window.scrollTo(0,y);document.removeEventListener('keydown',esc)}},[item,pathname,router]);
  if(!item||!slug)return null;
  const desktop=`/portfolio/drawer-${slug==='report-builder'?'report-builder':slug}-en.png`;
  const mobile=`/portfolio/drawer-${slug==='report-builder'?'report-builder':slug}-en-mobile.png`;
  return <div className={styles.backdrop} onMouseDown={e=>{if(e.target===e.currentTarget)router.replace(pathname,{scroll:false})}}><section className={`${styles.panel} ${styles.figmaPanel}`} role="dialog" aria-modal="true" aria-label={item.title}>
    <header className={styles.figmaHeader}><span>CASE STUDIES&nbsp;&nbsp;/&nbsp;&nbsp;SOFTLOGIC.AI&nbsp;&nbsp;/&nbsp;&nbsp;<strong>{item.title}</strong></span><nav className={styles.drawerLanguages}><Link href={`/work/softlogic-ai?detail=${slug}`}>RU</Link><span>|</span><b>EN</b></nav><button ref={closeRef} className={styles.figmaClose} onClick={()=>router.replace(pathname,{scroll:false})} aria-label="Close case study"><X size={22}/></button></header>
    <div ref={scrollRef} className={styles.figmaScroll}><picture><source media="(max-width:760px)" srcSet={mobile}/><img className={styles.figmaScreen} src={desktop} alt={`${item.title} case study`}/></picture></div>
    <footer className={styles.figmaFooter}><button onClick={()=>router.replace(`${pathname}?detail=${next}`,{scroll:false})}>NEXT CASE STUDY</button><span>{enDetails[next].title}</span></footer>
  </section></div>
}
