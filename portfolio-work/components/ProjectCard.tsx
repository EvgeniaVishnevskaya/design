import Link from 'next/link';
import {ArrowUpRight,LockKeyhole} from 'lucide-react';
import type {Project} from '@/lib/projects';
import {Visual} from './Visual';
import styles from './ProjectCard.module.css';
export function ProjectCard({project}:{project:Project}){
 const body=<><div className={styles.preview}><div className={styles.top}><strong>{project.title}</strong>{project.status==='draft'&&<span className={styles.draft}>В РАБОТЕ</span>}</div><Visual kind={project.visual}/><div className={styles.overlay}>{project.subtitle}</div></div><div className={styles.bottom}><div><strong>{project.title}</strong><p>{project.excerpt}</p></div><div className={styles.action}>{project.status==='published'?<ArrowUpRight size={22}/>:<LockKeyhole size={19}/>}</div></div></>;
 return project.status==='published'?<Link href={`/work/${project.slug}`} className={styles.card}>{body}</Link>:<article className={`${styles.card} ${styles.disabled}`} aria-label={`${project.title}, кейс в разработке`}>{body}</article>;
}
