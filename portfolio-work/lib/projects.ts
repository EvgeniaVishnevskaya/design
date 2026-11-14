export type Project = {
  slug: string;
  title: string;
  subtitle: string;
  company: 'SberTech' | 'Softlogic.AI';
  tags: string[];
  status: 'published' | 'draft';
  visual: 'report-designer' | 'tfsix' | 'idm' | 'softlogic' | 'smart-city' | 'reporting';
  excerpt: string;
};

export const projects: Project[] = [
  {slug:'report-designer',title:'Platform V Report Designer',subtitle:'Редактор шаблонов документов',company:'SberTech',tags:['Enterprise','UX research','Design systems'],status:'draft',visual:'report-designer',excerpt:'Редактор шаблонов документов. Основной кейс с будущими вложенными исследованиями и сценариями.'},
  {slug:'tfsix',title:'Platform V TFSix',subtitle:'No-code конфигуратор передачи данных',company:'SberTech',tags:['Enterprise','No-code'],status:'draft',visual:'tfsix',excerpt:'Конфигуратор сценариев передачи данных для сложных корпоративных систем.'},
  {slug:'idm',title:'Platform V IDM',subtitle:'Управление идентификацией и доступами',company:'SberTech',tags:['B2B','Enterprise'],status:'published',visual:'idm',excerpt:'Управление сотрудниками, учётными записями и корпоративными доступами.'},
  {slug:'softlogic-ai',title:'Softlogic.AI',subtitle:'B2B-платформа видеоаналитики на основе компьютерного зрения',company:'Softlogic.AI',tags:['UX/UI','Computer vision','B2B'],status:'published',visual:'softlogic',excerpt:'Единая платформа для обнаружения событий в видеопотоке, просмотра записей, анализа и управления камерами.'},
  {slug:'smart-city',title:'Умный город',subtitle:'Мониторинг состояния городской инфраструктуры',company:'Softlogic.AI',tags:['Data visualization','Smart City','B2G'],status:'published',visual:'smart-city',excerpt:'Инструмент для выявления проблемных районов и мониторинга состояния площадок ТКО.'},
  {slug:'reporting',title:'Формирование отчётов',subtitle:'Сценарии создания и настройки отчётности',company:'Softlogic.AI',tags:['B2B','Reporting','UX/UI'],status:'published',visual:'reporting',excerpt:'Интерфейсы для подготовки отчётных материалов на основе данных платформы.'}
];

export type Detail = { slug:string; title:string; lead:string; challenge:string; outcome:string; visual:string };
export const softlogicDetails: Detail[] = [
  {slug:'face-recognition',title:'Распознавание лиц',lead:'Связали обнаружения нейросети с данными о людях, видеопотоками и событиями.',challenge:'Оператору важно понять, кого система обнаружила, где и когда это произошло, и проверить результат распознавания.',outcome:'Карточки обнаружений, каталог людей, фильтры, журнал и просмотр видеотрансляций.',visual:'face'},
  {slug:'camera-management',title:'Управление камерами',lead:'Управление источниками видеопотока и настройкой камер.',challenge:'Упростить работу с большим количеством подключённых источников и их параметрами.',outcome:'Общие сценарии подключения, настройки и контроля состояния камер.',visual:'camera'},
  {slug:'video-analytics',title:'Видеоаналитика',lead:'От сигнала нейросети — к понятному событию в интерфейсе.',challenge:'Помочь пользователю находить события, проверять их и быстро переходить к исходному видеопотоку.',outcome:'Единые паттерны анализа, просмотра и фильтрации событий.',visual:'video'},
  {slug:'report-builder',title:'Создание отчётов',lead:'Подготовка материалов по результатам наблюдения и анализа.',challenge:'Сделать переход от результатов мониторинга к готовому отчёту последовательным и прозрачным.',outcome:'Сценарии выбора данных и формирования отчётных материалов.',visual:'report'},
  {slug:'user-profile',title:'Профиль пользователя',lead:'Персональные параметры и управление аккаунтом.',challenge:'Собрать настройки пользователя в понятную структуру.',outcome:'Экран профиля и сценарии управления персональными данными.',visual:'profile'}
];

export const sberDetails = [
  {slug:'research',title:'Исследования редактора',lead:'Проблемы обнаружения функций и обучения пользователей'},
  {slug:'editor',title:'Работа в редакторе',lead:'Ключевые сценарии создания шаблонов'},
  {slug:'tables',title:'Таблицы и данные',lead:'Настройка элементов и привязка данных'}
];

export function getProject(slug:string) { return projects.find(p => p.slug === slug); }
