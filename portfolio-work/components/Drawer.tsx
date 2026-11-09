'use client';
import { useEffect,useRef } from 'react';
import { usePathname,useRouter,useSearchParams } from 'next/navigation';
import { ArrowRight, X } from 'lucide-react';
import { softlogicDetails } from '@/lib/projects';
import { Visual } from './Visual';
import styles from './Drawer.module.css';

export function Drawer() {
  const params=useSearchParams(),router=useRouter(),pathname=usePathname();
  const slug=params.get('detail');
  const idx=softlogicDetails.findIndex(d=>d.slug===slug);
  const item=softlogicDetails[idx];
  const closeRef=useRef<HTMLButtonElement>(null);
  useEffect(()=>{
    if(!item)return;
    const previous=document.activeElement as HTMLElement|null;
    const oldOverflow=document.body.style.overflow;
    document.body.style.overflow='hidden';
    closeRef.current?.focus();
    const esc=(e:KeyboardEvent)=>{if(e.key==='Escape')router.push(pathname,{scroll:false});if(e.key==='Tab'){const root=document.getElementById('project-drawer');const els=root?.querySelectorAll<HTMLElement>('a[href],button:not([disabled])');if(!els?.length)return;const first=els[0],last=els[els.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}};
    document.addEventListener('keydown',esc);
    return()=>{document.body.style.overflow=oldOverflow;document.removeEventListener('keydown',esc);previous?.focus()};
  },[item,pathname,router]);
  if(!item)return null;
  const next=softlogicDetails[(idx+1)%softlogicDetails.length];
  const close=()=>router.push(pathname,{scroll:false});
  return <div className={styles.backdrop} onMouseDown={(e)=>{if(e.target===e.currentTarget)close()}}>
    <section id="project-drawer" className={styles.panel} role="dialog" aria-modal="true" aria-labelledby="drawer-title">
      <div className={styles.top}><span>КЕЙСЫ / SOFTLOGIC.AI / <strong>{item.title.toUpperCase()}</strong></span><button ref={closeRef} className={styles.close} onClick={close} aria-label="Закрыть кейс"><X size={22}/></button></div>
      <div className={styles.intro}><div><h2 id="drawer-title">{item.title}</h2><h3>О проекте</h3><p>{item.lead}</p><p>Это один из взаимосвязанных сценариев платформы Softlogic.AI.</p></div><Visual kind="softlogic" large/></div>
      <div className={styles.body}><h3>Задача</h3><p>{item.challenge}</p><h3>Решение</h3><p>{item.outcome}</p><div className={styles.placeholder}>Здесь будет подробный контент и оригинальные экраны из Figma.</div></div>
      <button className={styles.next} onClick={()=>router.push(`${pathname}?detail=${next.slug}`,{scroll:false})}>Следующий кейс: {next.title} <ArrowRight size={18}/></button>
    </section>
  </div>;
}
