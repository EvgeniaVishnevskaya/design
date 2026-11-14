import type { Project } from '@/lib/projects';
import { portfolioAssets } from '@/lib/portfolio-assets';
import styles from './Visual.module.css';

export function Visual({kind,large=false}:{kind:Project['visual']|string;large?:boolean}) {
  const src=portfolioAssets.visuals[kind as keyof typeof portfolioAssets.visuals];
  const className=`${styles.canvas} ${styles[kind.replaceAll('-','_')]||''} ${large?styles.large:''}`;
  if(src) return <div className={className}><img className={styles.asset} src={src} alt=""/></div>;
  return <div className={className} aria-hidden="true" data-asset-slot={kind}>
    <div className={styles.window}>
      <div className={styles.toolbar}><span/><span/><span/><i/></div>
      <div className={styles.app}>
        <aside className={styles.sidebar}><em/><em/><em/><em/><em/></aside>
        <div className={styles.content}>
          <div className={styles.header}><b/><b/></div>
          <div className={styles.stats}><span/><span/><span/></div>
          <div className={styles.split}><div className={styles.graph}><span/><span/><span/><span/><span/></div><div className={styles.list}><i/><i/><i/><i/></div></div>
        </div>
      </div>
    </div>
  </div>;
}
