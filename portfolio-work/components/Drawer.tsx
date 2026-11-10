'use client';
import { useEffect,useRef } from 'react';
import { usePathname,useRouter,useSearchParams } from 'next/navigation';
import { ArrowRight, X } from 'lucide-react';
import { softlogicDetails } from '@/lib/projects';
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
    const focusFrame=requestAnimationFrame(()=>closeRef.current?.focus());
    const esc=(e:KeyboardEvent)=>{if(e.key==='Escape')router.replace(pathname,{scroll:false});if(e.key==='Tab'){const root=document.getElementById('project-drawer');const els=root?.querySelectorAll<HTMLElement>('a[href],button:not([disabled])');if(!els?.length)return;const first=els[0],last=els[els.length-1];if(e.shiftKey&&document.activeElement===first){e.preventDefault();last.focus()}else if(!e.shiftKey&&document.activeElement===last){e.preventDefault();first.focus()}}};
    document.addEventListener('keydown',esc);
    return()=>{cancelAnimationFrame(focusFrame);document.body.style.overflow=oldOverflow;document.removeEventListener('keydown',esc);previous?.focus()};
  },[item,pathname,router]);
  if(!item)return null;
  const next=softlogicDetails[(idx+1)%softlogicDetails.length];
  const assets:Record<string,string>={
    'face-recognition':'/portfolio/drawer-face-recognition.png','camera-management':'/portfolio/drawer-camera-management.png','video-analytics':'/portfolio/drawer-video-analytics.png','report-builder':'/portfolio/drawer-report-builder.png','user-profile':'/portfolio/drawer-user-profile.png'
  };
  const close=()=>router.replace(pathname,{scroll:false});
  return <div className={styles.backdrop} onMouseDown={(e)=>{if(e.target===e.currentTarget)close()}}>
    <section id="project-drawer" className={`${styles.panel} ${styles.figmaPanel}`} role="dialog" aria-modal="true" aria-labelledby="drawer-title" aria-describedby="drawer-description">
      <h2 id="drawer-title" className={styles.srOnly}>{item.title}</h2><p id="drawer-description" className={styles.srOnly}>{item.lead}</p>
      <img className={styles.figmaScreen} src={assets[item.slug]} alt={`${item.title}. Экран кейса из Figma`}/>
      <button ref={closeRef} className={styles.figmaClose} onClick={close} aria-label="Закрыть кейс"><X size={22}/></button>
      <button className={styles.figmaNext} onClick={()=>router.replace(`${pathname}?detail=${next.slug}`,{scroll:false})} aria-label={`Следующий кейс: ${next.title}`}><ArrowRight size={18} aria-hidden="true"/></button>
    </section>
  </div>;
}
