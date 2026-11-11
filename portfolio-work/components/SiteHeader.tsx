import Link from 'next/link';
import {FileText, Home, Mail} from 'lucide-react';
import styles from './SiteHeader.module.css';
export function SiteHeader({mobileDock: _mobileDock=false}:{mobileDock?:boolean}){return <><header className={styles.header}><Link href="/" className={styles.logo}>ВИШНЕВСКАЯ ЕВГЕНИЯ</Link><nav aria-label="Основная навигация"><Link href="/#about">РЕЗЮМЕ</Link><Link href="/#contacts">КОНТАКТЫ</Link><span aria-label="Текущий язык — русский">RU | EN</span></nav></header><nav className={styles.mobileDock} aria-label="Мобильная навигация"><Link href="/"><Home/><span>Главная</span></Link><Link href="/#about"><FileText/><span>Резюме</span></Link><Link href="/#contacts"><Mail/><span>Контакты</span></Link></nav></>}
