import {Suspense} from 'react';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowUpRight} from 'lucide-react';
import {SiteHeader} from '@/components/SiteHeader';
import {EnglishDrawer} from '@/components/EnglishDrawer';
import {enDetails,enProjects} from '@/lib/english';
import styles from '../../../work/[slug]/page.module.css';

type Slug=keyof typeof enProjects;
export function generateStaticParams(){return Object.keys(enProjects).map(slug=>({slug}))}
function MobileCaseSwitch({current}:{current:Slug}){return <nav className={styles.mobileCaseSwitch} aria-label="More projects">{Object.entries(enProjects).filter(([key])=>key!==current).map(([key,p])=><Link href={`/en/work/${key}`} key={key}>{p.title}<ArrowUpRight/></Link>)}</nav>}

export default async function EnglishWorkPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params;if(!(slug in enProjects))notFound();const current=slug as Slug,project=enProjects[current];
  const desktop=`/portfolio/case-${slug}-en.png`;
  if(slug==='softlogic-ai')return <main className={`${styles.figmaCase} ${styles.englishSoft}`} aria-label={project.title}><div className={styles.caseNav}><SiteHeader locale="en"/></div><picture><source media="(max-width:600px)" srcSet="/portfolio/case-softlogic-en-mobile.png"/><img src="/portfolio/case-softlogic-en.png" alt="Softlogic.AI case study"/></picture><div className={styles.englishSoftLinks}>{Object.keys(enDetails).map((key,index)=><Link href={`/en/work/softlogic-ai?detail=${key}`} scroll={false} aria-label={enDetails[key as keyof typeof enDetails].title} key={key} data-index={index}/>)}</div><Link className={styles.caseHomeLink} href="/en" aria-label="Back to home"/><MobileCaseSwitch current={current}/><Suspense fallback={null}><EnglishDrawer/></Suspense></main>;
  return <main className={styles.figmaCase} aria-label={project.title}><div className={styles.caseNav}><SiteHeader locale="en"/></div><picture>{slug==='smart-city'&&<source media="(max-width:600px)" srcSet="/portfolio/case-smart-city-en-mobile.png"/>}{slug==='reporting'&&<source media="(max-width:600px)" srcSet="/portfolio/case-reporting-en-mobile.png"/>}<img src={desktop} alt={`${project.title} case study`}/></picture><Link className={styles.caseHomeLink} href="/en" aria-label="Back to home"/><nav className={styles.caseFooterLinks}><Link href="/en">Home</Link><Link href="/en#about">About</Link><Link href="/en#contacts">Contacts</Link></nav><MobileCaseSwitch current={current}/></main>
}
