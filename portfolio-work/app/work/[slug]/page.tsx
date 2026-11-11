import {Suspense} from 'react';
import Link from 'next/link';
import {notFound} from 'next/navigation';
import type {Metadata} from 'next';
import {ArrowLeft, ArrowUpRight} from 'lucide-react';
import {SiteHeader} from '@/components/SiteHeader';
import {Visual} from '@/components/Visual';
import {Drawer} from '@/components/Drawer';
import {getProject, projects, softlogicDetails} from '@/lib/projects';
import {nbsp} from '@/lib/typography';
import styles from './page.module.css';

type CaseSection={title:string;copy:string};
type CaseContent={intro:string;role:string;period:string;sections:CaseSection[]};

const content:Record<string,CaseContent>={
  'smart-city':{intro:'Платформа для мониторинга состояния городской среды, которая объединяет данные районов, площадок ТКО, событий и камер в единую рабочую картину.',role:'Product Designer',period:'Softlogic.AI',sections:[
    {title:'Контекст проекта',copy:'Данные о городской инфраструктуре находились в разных интерфейсах. Пользователям было сложно быстро определить проблемную территорию и перейти от сводного показателя к конкретной площадке.'},
    {title:'Пользователи',copy:'Основные пользователи — операторы мониторинга и руководители, которым важно видеть состояние объектов, находить отклонения и контролировать реакцию служб.'},
    {title:'Исследование',copy:'В работе использовались интервью, анализ текущих сценариев, изучение данных и проверка прототипов. Выводы показаны без неподтверждённых бизнес-метрик.'},
    {title:'Гипотезы',copy:'Рабочие гипотезы были сосредоточены на иерархии показателей, быстром переходе от города к району и площадке, а также на приоритизации проблемных объектов.'},
    {title:'Дашборд и карта',copy:'Единый дашборд связывает агрегированные показатели, рейтинг районов, карту и события. Пользователь может постепенно углубляться в данные, не теряя контекст.'},
    {title:'Результат',copy:'Макет фиксирует итоговую структуру продукта и сценарии проверки решений. Численные результаты не публикуются без подтверждённого источника.'},
  ]},
  reporting:{intro:'Редизайн сценария создания ручных и автоматических отчётов в платформе видеоаналитики.',role:'Product Designer · UX Research',period:'Softlogic.AI',sections:[
    {title:'Проблема',copy:'Форма объединяла множество зависимых настроек. Пользователю было трудно понять последовательность шагов, обязательность параметров и различия между типами отчётов.'},
    {title:'Исследование',copy:'Сценарии проверялись на прототипах. В кейсе показаны структура теста, проблемные места и изменения интерфейса без выдуманных результатов.'},
    {title:'Информационная архитектура',copy:'Настройки сгруппированы по смыслу и выстроены в последовательность: тип отчёта, источник данных, расписание, получатели и параметры выдачи.'},
    {title:'Ручной отчёт',copy:'Для разового отчёта оставлены только необходимые параметры, а зависимые поля появляются в контексте выбранного сценария.'},
    {title:'Автоматический отчёт',copy:'Расписание и доставка результата стали отдельным ясным этапом, связанным с выбранными данными и форматом.'},
    {title:'Проверка решения',copy:'Макеты содержат результаты пользовательской проверки только там, где они зафиксированы в исходном дизайне.'},
  ]},
  'softlogic-ai':{intro:'Softlogic.AI — B2B-платформа видеоаналитики на основе компьютерного зрения. Она объединяет камеры, нейросети, события и рабочие сценарии операторов.',role:'Product Designer · Product Manager',period:'Softlogic.AI',sections:[
    {title:'О платформе',copy:'Пользователь подключает источники видео, настраивает нейросети, получает события и переходит к проверке исходной видеозаписи.'},
    {title:'Задача',copy:'Сформировать согласованный пользовательский опыт для взаимосвязанных модулей и сохранить понятную связь между камерой, событием и результатом анализа.'},
    {title:'Архитектура продукта',copy:'Основные сущности платформы связаны едиными паттернами навигации, фильтрации, карточек и переходов к деталям.'},
    {title:'Моя зона ответственности',copy:'Исследование сценариев, проектирование UX/UI, развитие дизайн-системы, прототипирование и взаимодействие с продуктовой и технической командами.'},
  ]},
  idm:{intro:'Кейс Platform V IDM о сценарии сохранения изменений и обработке конфликтов в корпоративной системе управления идентификацией.',role:'Senior Product Designer',period:'SberTech',sections:[
    {title:'Контекст',copy:'Пользователь редактирует сложный объект с большим количеством атрибутов. Между открытием формы и сохранением данные могут измениться в другом процессе.'},
    {title:'Проблема',copy:'Система должна объяснить, какие значения конфликтуют, что сохранится и какое действие требуется от пользователя.'},
    {title:'Сценарий сохранения',copy:'Изменения сгруппированы по статусу, исходное и новое значения сравниваются рядом, а результат операции остаётся доступным для проверки.'},
    {title:'Ошибки и конфликты',copy:'Сообщения связаны с конкретными полями и объясняют дальнейшее действие без потери уже введённых данных.'},
    {title:'Решение',copy:'Последовательность состояний делает сохранение предсказуемым и помогает пользователю безопасно завершить операцию.'},
  ]}
};

export function generateStaticParams(){return projects.filter(p=>p.status==='published').map(p=>({slug:p.slug}))}
export async function generateMetadata({params}:{params:Promise<{slug:string}>}):Promise<Metadata>{const {slug}=await params;const p=getProject(slug);return {title:p?.title||'Кейс',description:p?.excerpt}}

function ProjectFooter({current}:{current:string}){const related=projects.filter(p=>p.status==='published'&&p.slug!==current);return <><section className={`container ${styles.more}`}><h2>Другие проекты</h2><div>{related.map(p=><Link href={`/work/${p.slug}`} key={p.slug}><span>{p.title}</span><ArrowUpRight aria-hidden="true"/></Link>)}</div></section><footer className={`container ${styles.footer}`}><Link href="/"><strong>ВИШНЕВСКАЯ ЕВГЕНИЯ</strong></Link><nav aria-label="Навигация в футере"><Link href="/">Главная</Link><Link href="/#about">Резюме</Link><Link href="/#work">Все кейсы</Link><Link href="/#contacts">Контакты</Link></nav><div><a href="mailto:jeinifer.vishnevskaya@gmail.com">Email</a><a href="https://t.me/vishnevskayadsgn">Telegram</a></div></footer></>}

const softlogicCards=[
  ['face-recognition','Распознавание лиц','/portfolio/softlogic-card-face.png'],['camera-management','Управление камерами','/portfolio/softlogic-card-camera.png'],['video-analytics','Видеоаналитика','/portfolio/softlogic-card-video.png'],['report-builder','Создание отчётов','/portfolio/softlogic-card-report.png'],['user-profile','Профиль пользователя','/portfolio/softlogic-card-profile.png'],
];

function SoftlogicCase(){return <main className={styles.softlogicPage}>
  <section className={styles.softHero}><div className="container"><SiteHeader/><div className={styles.softTitle}><h1>Softlogic.AI</h1><h2>{nbsp('B2B-платформа видеоаналитики на основе компьютерного зрения')}</h2><div>{['Product design','B2B / Enterprise','UX/UI Design','Computer Vision','Data Visualization'].map((tag,index)=><span className={index<2?styles.blueTag:undefined} key={tag}>{tag}</span>)}</div></div><div className={styles.softAbout}><div className={styles.laptop}><img src="/portfolio/softlogic-laptop.png" alt="Интерфейс платформы Softlogic.AI на экране ноутбука"/></div><h3>{nbsp('О проекте')}</h3><div><p>{nbsp('Softlogic.ai разрабатывала решения на основе компьютерного зрения для автоматизации мониторинга и анализа видеопотока')}</p><p>{nbsp('Платформа позволяла подключать камеры, обрабатывать видеоданные с помощью нейросетей, обнаруживать события и работать с результатами видеоаналитики через интерфейс системы')}</p><p>{nbsp('На базе единой платформы создавались решения для разных бизнес-задач: от распознавания лиц и контроля зон до мониторинга поведения водителей и безопасности на производстве.')}</p><p>{nbsp('В зависимости от потребностей клиента использовался определённый набор функциональных возможностей платформы')}</p><div className={styles.softMeta}><div><strong>Роль</strong><span>Продуктовый дизайнер</span><span>UX-исследователь</span></div><div><strong>Инструменты</strong><span>Figma</span><span>FigJam</span><span>Notion</span></div><div><strong>Scope</strong><span>Исследование</span><span>Прототип</span><span>UX-тесты</span></div></div></div></div></div></section>
  <section className={`container ${styles.softSection}`}><h2>{nbsp('Контекст и бизнес-задача')}</h2><div className={styles.contextBlock}><div><p>{nbsp('Компьютерное зрение позволяет автоматически анализировать видеопоток и выявлять события, которые человеку пришлось бы отслеживать вручную')}</p><p>{nbsp('Однако обнаружение события — только часть процесса. Пользователю также необходимо понять, что произошло, проверить результат распознавания, найти источник события и при необходимости изучить видеозапись или данные объекта')}</p><p>{nbsp('При этом сценарии использования платформы различались в зависимости от отрасли и задач клиента')}</p><p>{nbsp('Задача проекта заключалась в создании масштабируемой UX/UI-архитектуры платформы.')}</p></div><img src="/portfolio/softlogic-context-visual.png" alt="Интерфейс видеоаналитики Softlogic.AI"/></div></section>
  <section className={`container ${styles.softSection}`}><h2>Пользователи</h2><img className={`${styles.wideAsset} ${styles.desktopAsset}`} src="/portfolio/softlogic-users.png" alt="Операторы мониторинга, руководители и специалисты по безопасности, технические специалисты и администраторы"/><div className={`${styles.mobileSlices} ${styles.userSlices}`} aria-label="Пользователи платформы"><span/><span/><span/></div></section>
  <section className={`container ${styles.softSection}`}><h2>{nbsp('Как всё устроено')}</h2><img className={`${styles.wideAsset} ${styles.desktopAsset}`} src="/portfolio/softlogic-flow.png" alt="Схема возможностей платформы и применения в разных отраслях"/><div className={`${styles.mobileSlices} ${styles.flowSlices}`} aria-label="Возможности платформы и применение в разных отраслях"><span/><span/><span/></div></section>
  <section className={`container ${styles.softSection}`}><div className={styles.roleCard}><h2>{nbsp('Моя роль')}</h2><div><p>{nbsp('Я отвечала за UX/UI-проектирование пользовательских сценариев и интерфейсов платформы.')}</p><p>{nbsp('В работе я прорабатывала структуру экранов, последовательность действий, отображение данных, состояния интерфейса и взаимосвязи между разделами.')}</p></div><div><p>Самостоятельно проектировала:</p><ul><li>сценарии распознавания лиц и работу с картотекой</li><li>журналы событий и карточки обнаружений</li><li>просмотр видеотрансляций</li><li>добавление и настройку камер</li><li>создание аналитических отчётов</li><li>профиль пользователя</li></ul></div></div></section>
  <section className={`container ${styles.softSection}`}><h2>Кейсы</h2><div className={styles.softCards}>{softlogicCards.map(([slug,title,src])=><Link href={`/work/softlogic-ai?detail=${slug}`} scroll={false} key={slug}><img src={src} alt={title}/></Link>)}</div></section>
  <Suspense fallback={null}><Drawer/></Suspense><ProjectFooter current="softlogic-ai"/>
</main>}

function FigmaFrameCase({slug,title}:{slug:'smart-city'|'idm'|'reporting';title:string}){
  const desktop=`/portfolio/case-${slug}.png`;
  return <main className={styles.figmaCase} aria-label={title}><div className={styles.caseNav}><SiteHeader/></div><picture>{slug==='smart-city'&&<source media="(max-width: 600px)" srcSet="/portfolio/case-smart-city-mobile.png"/>}<img src={desktop} alt={`${title}. Полный кейс из Figma`}/></picture><Link className={styles.caseHomeLink} href="/" aria-label="Вернуться на главную"/><nav className={styles.caseFooterLinks} aria-label="Навигация в футере"><Link href="/">Главная</Link><Link href="/#about">Резюме</Link><Link href="/#contacts">Контакты</Link></nav></main>;
}

export default async function WorkPage({params}:{params:Promise<{slug:string}>}){
  const {slug}=await params; const project=getProject(slug); const data=content[slug]; if(!project||project.status!=='published'||!data)notFound(); const isSoftlogic=slug==='softlogic-ai';
  if(isSoftlogic)return <SoftlogicCase/>;
  if(slug==='smart-city'||slug==='idm'||slug==='reporting')return <FigmaFrameCase slug={slug} title={project.title}/>;
  return <main className={styles.page}>
    <section className={styles.hero}><div className="container"><SiteHeader/><div className={styles.crumbs}><Link href="/#work"><ArrowLeft/>Все кейсы</Link><span>{project.company} / {project.title}</span></div><div className={styles.intro}><div><h1>{project.title}</h1><p>{project.subtitle}</p><div className={styles.tags}>{project.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div><div className={styles.about}><h2>О проекте</h2><p>{data.intro}</p><dl><div><dt>Роль</dt><dd>{data.role}</dd></div><div><dt>Компания</dt><dd>{data.period}</dd></div></dl></div></div><Visual kind={project.visual} large/></div></section>
    <div className={styles.caseBody}>{data.sections.map((section,index)=><section className={`container ${styles.caseSection} ${index%2?styles.flip:''}`} key={section.title}><div className={styles.sectionCopy}><span>0{index+1}</span><h2>{section.title}</h2><p>{section.copy}</p></div><div className={styles.sectionVisual}><Visual kind={project.visual} large/></div></section>)}</div>
    {isSoftlogic&&<section className={`container ${styles.inside}`}><div className={styles.insideHead}><span>Внутри платформы</span><h2>Связанные продуктовые сценарии</h2></div><div className={styles.detailGrid}>{softlogicDetails.map((item,index)=><Link href={`/work/softlogic-ai?detail=${item.slug}`} scroll={false} key={item.slug}><Visual kind={item.visual}/><div><span>0{index+1}</span><h3>{item.title}</h3><ArrowUpRight/></div></Link>)}</div></section>}
    {isSoftlogic&&<Suspense fallback={null}><Drawer/></Suspense>}<ProjectFooter current={slug}/>
  </main>
}
