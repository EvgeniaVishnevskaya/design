import {Suspense} from 'react';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import {ArrowLeft,ArrowUpRight} from 'lucide-react';
import {SiteHeader} from '@/components/SiteHeader';
import {Visual} from '@/components/Visual';
import {EnglishDrawer} from '@/components/EnglishDrawer';
import {enDetails,enProjects} from '@/lib/english';
import styles from '../../../work/[slug]/page.module.css';

type Slug=keyof typeof enProjects;
export function generateStaticParams(){return Object.keys(enProjects).map(slug=>({slug}))}

export default async function EnglishWorkPage({params}:{params:Promise<{slug:string}>}){const {slug}=await params;if(!(slug in enProjects))notFound();const project=enProjects[slug as Slug];const visual=slug==='smart-city'?'smart-city':slug==='reporting'?'reporting':slug==='softlogic-ai'?'softlogic':'idm';return <main className={styles.page}>
  <section className={styles.hero}><div className="container"><SiteHeader locale="en"/><div className={styles.crumbs}><Link href="/en#work"><ArrowLeft/>All case studies</Link><span>{project.company} / {project.title}</span></div><div className={styles.intro}><div><h1>{project.title}</h1><p>{project.subtitle}</p><div className={styles.tags}>{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div><div className={styles.about}><h2>About the project</h2><p>{project.intro}</p><dl><div><dt>Role</dt><dd>{project.role}</dd></div><div><dt>Company</dt><dd>{project.company}</dd></div></dl></div></div><Visual kind={visual} large/></div></section>
  <div className={styles.caseBody}>{project.sections.map((section,index)=><section className={`container ${styles.caseSection} ${index%2?styles.flip:''}`} key={section[0]}><div className={styles.sectionCopy}><span>0{index+1}</span><h2>{section[0]}</h2><p>{section[1]}</p></div><div className={styles.sectionVisual}><Visual kind={visual} large/></div></section>)}</div>
  {slug==='softlogic-ai'&&<section className={`container ${styles.inside}`}><div className={styles.insideHead}><span>Inside the platform</span><h2>Connected product workflows</h2></div><div className={styles.detailGrid}>{Object.entries(enDetails).map(([key,item],index)=><Link href={`/en/work/softlogic-ai?detail=${key}`} scroll={false} key={key}><Visual kind={key==='face-recognition'?'face':key==='camera-management'?'camera':key==='video-analytics'?'video':key==='report-builder'?'report':'profile'}/><div><span>0{index+1}</span><h3>{item.title}</h3><ArrowUpRight/></div></Link>)}</div></section>}
  {slug==='softlogic-ai'&&<Suspense fallback={null}><EnglishDrawer/></Suspense>}
  <section className={`container ${styles.more}`}><h2>More projects</h2><div>{Object.entries(enProjects).filter(([key])=>key!==slug).map(([key,p])=><Link href={`/en/work/${key}`} key={key}><span>{p.title}</span><ArrowUpRight/></Link>)}</div></section><footer className={`container ${styles.footer}`}><Link href="/en"><strong>EVGENIA VISHNEVSKAYA</strong></Link><nav><Link href="/en">Home</Link><Link href="/en#about">About</Link><Link href="/en#work">Case studies</Link><Link href="/en#contacts">Contacts</Link></nav><div><a href="mailto:jeinifer.vishnevskaya@gmail.com">Email</a><a href="https://t.me/vishnevskayadsgn">Telegram</a></div></footer>
</main>}
