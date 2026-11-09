import Link from 'next/link';
import styles from './SiteHeader.module.css';
export function SiteHeader(){return <header className={styles.header}><Link href="/" className={styles.logo}>ВИШНЕВСКАЯ ЕВГЕНИЯ</Link><nav aria-label="Основная навигация"><Link href="/#about">ОБО МНЕ</Link><Link href="/#work">КЕЙСЫ</Link><Link href="/#contacts">КОНТАКТЫ</Link><span aria-label="Текущий язык — русский">RU</span></nav></header>}
