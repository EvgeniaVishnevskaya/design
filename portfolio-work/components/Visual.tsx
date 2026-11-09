import type { Project } from '@/lib/projects';
import styles from './Visual.module.css';

export function Visual({kind,large=false}:{kind:Project['visual']|string;large?:boolean}) {
  return <div className={`${styles.canvas} ${styles[kind.replaceAll('-','_')]||''} ${large?styles.large:''}`} aria-label={`Абстрактный превью-макет: ${kind}`} role="img">
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
    <div className={styles.note}>Иллюстрация будет заменена на экспорт из Figma</div>
  </div>;
}
