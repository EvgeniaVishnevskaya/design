'use client';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import styles from './SiteHeader.module.css';
export function LanguageSwitch({locale}:{locale:'ru'|'en'}){const pathname=usePathname();const base=pathname.startsWith('/en')?pathname.slice(3)||'/':pathname;const ru=base,en=`/en${base==='/'?'':base}`;return <span className={styles.languages} aria-label={locale==='en'?'Language':'Язык'}><Link className={locale==='ru'?styles.currentLanguage:undefined} href={ru}>RU</Link><b>|</b><Link className={locale==='en'?styles.currentLanguage:undefined} href={en}>EN</Link></span>}
