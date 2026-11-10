import Link from 'next/link';
import {ArrowUpRight, Download, MessageCircle, TrendingUp, Hand} from 'lucide-react';
import {SiteHeader} from '@/components/SiteHeader';
import {projects, type Project} from '@/lib/projects';
import {portfolioAssets} from '@/lib/portfolio-assets';
import styles from './page.module.css';

const tools=[
  {title:'Конструкторы',items:['Figma','ProtoPie']},
  {title:'Adobe Creative Suite',items:['Ps','Ai','Ae','C4D','Pr']},
  {title:'AI-инструменты',items:['Cl','Fr','GPT','MJ']},
  {title:'Workspace',items:['Jira','Notion','Miro','VS']},
];

const skills=[
  {title:'UX & Product',tags:['UX Research','Product Discovery','User Flow','IA','Entity Modeling','Hypotheses','Wireframing','Prototyping']},
  {title:'UI Design',tags:['Design Systems','Component Approach','UI Kits','Variables','Responsive','Accessibility','Handoff']},
  {title:'Soft Skills',tags:['System Thinking','Prioritization','Mentoring'],list:['Умение разбираться в сложных предметных областях','Переговоры и управление ожиданиями','Умение работать в условиях неполных вводных и ограниченных ресурсов','Умение задавать неудобные, но необходимые вопросы']},
];

const companyData={
  SberTech:{title:'SBERTECH',description:'ИТ-компания экосистемы Сбера, которая разрабатывает технологические решения и платформы для крупного бизнеса. Дизайн-штаб поддерживает более 100 внутренних и корпоративных продуктов — от отдельных сервисов до сложных высоконагруженных B2B-систем.',tags:['Product Design','UI UX Design','Design Systems','Workflow Development'],tasks:['Проектирование UX/UI сложных B2B-продуктов; исследование пользовательских сценариев, интервью и тестирование прототипов; формирование и проверка продуктовых гипотез.','Проектирование сложных конфигураторов и административных интерфейсов; развитие единой дизайн-системы и UI-kit; создание компонентов, вариантов и переменных в Figma.','Разработка интерактивных прототипов; анализ пользовательских и интерфейсных ошибок; работа со стейкхолдерами, аналитиками и разработчиками.','Участие в продуктовой стратегии и приоритизации задач; развитие процессов UX-исследований внутри команды; найм, онбординг и менторинг дизайнеров.']},
  'Softlogic.AI':{title:'SOFTLOGIC.AI',description:'IT-компания, разрабатывающая сложные B2B-решения и платформы для корпоративных клиентов в сфере умного видеонаблюдения. В компании я совмещала роли Product Designer и Product Manager, поэтому участвовала как в проектировании интерфейсов, так и в развитии продукта и работе с командой.',tags:['Product Design','UI UX Design','Design Systems','Business Analytics'],tasks:['Проектирование UX/UI сложного B2B-продукта; исследование пользовательских сценариев, интервью и тестирование прототипов; формирование и проверка продуктовых гипотез.','Проектирование интерфейсов взаимодействия с искусственным интеллектом; развитие единой дизайн-системы и UI-kit с нуля; создание компонентов, вариантов и переменных в Figma.','Разработка интерактивных прототипов; анализ пользовательских и интерфейсных ошибок; работа со стейкхолдерами, аналитиками и разработчиками, работа с метриками и A/B-тестами.','Участие в продуктовой стратегии и приоритизации задач; управление командой дизайнеров и развитие специалистов.']},
};

const cardCopy:Record<Project['visual'],{title:string;tags:string[]}>= {
  'report-designer':{title:'Проектирование архитектуры платформы видеоаналитики',tags:['Product design','B2B / Enterprise','Computer Vision']},
  tfsix:{title:'Проектирование архитектуры платформы видеоаналитики',tags:['Product design','B2B / Enterprise','Computer Vision']},
  idm:{title:'Как сделать операцию сохранения понятной',tags:['Product design','Identity Management','Error Handling']},
  softlogic:{title:'Проектирование архитектуры платформы видеоаналитики',tags:['UX/UI','B2B / Enterprise','Computer Vision']},
  'smart-city':{title:'Дашборд для мониторинга состояния городской среды',tags:['Product design','B2B / Enterprise','Computer Vision']},
  reporting:{title:'Редизайн формы создания ручных и автоматических отчетов',tags:['Product design','Data-heavy Interfaces','Usability Testing']},
};

function ProjectTile({project}:{project:Project}){
  const copy=cardCopy[project.visual];
  const content=<><div className={styles.projectName}>{project.title.replace('Platform V ','')}</div><div className={styles.projectImage}><img src={portfolioAssets.visuals[project.visual]||''} alt=""/></div><div className={styles.projectGradient}/><div className={styles.projectCopy}><strong>{copy.title}</strong><div>{copy.tags.map(tag=><span key={tag}>{tag}</span>)}</div></div><span className={styles.projectArrow}><ArrowUpRight/></span></>;
  return project.status==='published'?<Link className={styles.projectTile} href={`/work/${project.slug}`}>{content}</Link>:<article className={`${styles.projectTile} ${styles.projectDraft}`} aria-label={`${project.title}, кейс в разработке`}>{content}</article>;
}

export default function Home(){return <main>
  <section className={styles.hero}><div className="container"><SiteHeader mobileDock/><div className={styles.heroGrid}><div className={styles.heroCopy}><h1>Привет, я Женя</h1><p>Проектирую цифровые продукты, которые помогают пользователям быстрее достигать своих целей, а бизнесу — улучшать ключевые метрики</p><div className={styles.heroActions}><Link href="#work">Кейсы <ArrowUpRight/></Link><a href="https://t.me/vishnevskayadsgn" target="_blank" rel="noreferrer">Скачать CV <Download/></a><Link href="#contacts">Контакты</Link></div></div><div className={styles.portrait}><div className={styles.portraitRing}><span>UI CHERRY PIE</span><div className={styles.blueCircle}/><img src={portfolioAssets.portrait||''} alt="Евгения Вишневская"/></div></div></div></div></section>

  <section id="about" className={`container ${styles.about}`}><div className={styles.aboutLead}><div><h2>Senior Product Designer</h2><p>с 7+ годами опыта</p><div className={styles.topTags}><span><MessageCircle/>UX Research</span><span><TrendingUp/>Product Strategy</span><span><Hand/>Design Systems</span></div><div className={styles.bio}><p>Проектирую сложные B2B и enterprise-продукты — от исследования пользовательских сценариев и формирования гипотез до прототипирования, тестирования и внедрения решений.</p><p>Работала в СберТехе, Softlogic и банковских продуктах. Создавала и развивала дизайн-системы, выстраивала UX-исследования и дизайн-процессы, работала со стейкхолдерами и командами разработки.</p><p>Помимо продуктового дизайна, у меня есть опыт в product management, бизнес-анализе и управлении дизайнерами — поэтому умею смотреть на интерфейс не отдельно, а в контексте продукта, пользователей и бизнеса.</p></div><a className={styles.cvButton} href="https://t.me/vishnevskayadsgn" target="_blank" rel="noreferrer">Скачать CV <ArrowUpRight/></a></div><div className={styles.tools}><h3>Инструменты</h3><div className={styles.toolGrid}>{tools.map(tool=><div className={styles.toolCard} key={tool.title}><strong>{tool.title}</strong><div>{tool.items.map(item=><span key={item}>{item}</span>)}</div></div>)}</div></div></div><div className={styles.skills}><h3>Навыки</h3><div className={styles.skillGrid}>{skills.map((skill,i)=><article className={i===0?styles.skillPrimary:''} key={skill.title}><h4>{skill.title}</h4><div className={styles.skillTags}>{skill.tags.map(tag=><span key={tag}>{tag}</span>)}</div>{skill.list&&<ul>{skill.list.map(item=><li key={item}>{item}</li>)}</ul>}</article>)}</div></div></section>

  <section id="work" className={`container ${styles.work}`}><h2>Кейсы</h2>{(['SberTech','Softlogic.AI'] as const).map(company=>{const info=companyData[company];const companyProjects=projects.filter(project=>project.company===company);return <div className={styles.companyGroup} key={company}><article className={styles.companyCard}><div><h3>{info.title}</h3><p>{info.description}</p><div className={styles.companyTags}>{info.tags.map((tag,i)=><span className={i<2?styles.activeTag:''} key={tag}>{tag}</span>)}</div></div><div><h4>Основные задачи:</h4><ol>{info.tasks.map(task=><li key={task}>{task}</li>)}</ol></div></article><div className={styles.projectGrid}>{companyProjects.map(project=><ProjectTile project={project} key={project.slug}/>)}</div></div>})}</section>

  <footer id="contacts" className={`container ${styles.footer}`}><div className={styles.footerInner}><strong>ВИШНЕВСКАЯ ЕВГЕНИЯ</strong><div><h3>СТРАНИЦЫ</h3><Link href="/">ГЛАВНАЯ</Link><Link href="#about">РЕЗЮМЕ</Link><Link href="#contacts">КОНТАКТЫ</Link></div><div><h3>КОНТАКТЫ</h3><a href="mailto:jeinifer.vishnevskaya@gmail.com">EMAIL</a><a href="https://t.me/vishnevskayadsgn">TELEGRAM</a><span>ТЕЛЕФОН</span></div></div></footer>
</main>}
