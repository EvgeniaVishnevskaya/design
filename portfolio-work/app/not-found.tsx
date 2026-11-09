import Link from 'next/link';
export default function NotFound(){return <main style={{minHeight:'100vh',display:'grid',placeItems:'center',textAlign:'center',padding:24}}><div><h1 style={{fontFamily:'var(--font-heading)',fontSize:72,margin:0}}>404</h1><p>Эта страница пока не опубликована.</p><Link className="button primary" href="/">На главную</Link></div></main>}
