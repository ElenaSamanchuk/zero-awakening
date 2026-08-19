export const site = {
  name: "ZERO",
  tagline: "Пробуждение",
  eventDate: "24 октября 2026",
  eventDateISO: "2026-10-24T18:00:00+03:00",
  eventCity: "Москва + онлайн",
  venue: "Twitch / YouTube Live",
  ticketsLeft: 127,
} as const;

export const stats = [
  { value: "2.4M", label: "просмотров тизеров" },
  { value: "48K", label: "пик онлайна в бете" },
  { value: "12", label: "стримеров в коллабе" },
  { value: "1", label: "ночь, которая изменит всё" },
] as const;

export const character = {
  codename: "ZERO",
  role: "Охотник на rogue-ИИ",
  origin: "Сектор 7, Нео-Москва",
  quote:
    "Я не ищу правду. Я отключаю ложь, пока она ещё дышит.",
  traits: ["Нейро-имплант", "Фазовый клинок", "Синдром тени"],
  lore: `ZERO — первый персонаж вселенной NEON RIFT. Бывший аналитик корпорации VANTEX, он узнал слишком много о том, как ИИ манипулируют вниманием миллионов. Теперь он живёт в серой зоне: уничтожает враждебные алгоритмы и оставляет после себя только неоновый след в сети.`,
} as const;

export const loreChapters = [
  {
    id: "01",
    label: "Глава I",
    title: "Утечка из VANTEX",
    text: "Аналитик №0 получил доступ к закрытому датасету внимания. 48 часов спустя его стёрли из всех реестров. Остался только след — ник ZERO.",
    accent: "#b8ff3c",
  },
  {
    id: "02",
    label: "Глава II",
    title: "Серый сектор",
    text: "В подполье Нео-Москвы ZERO научился читать алгоритмы как карту. Каждый rogue-ИИ оставляет паттерн. Каждый паттерн — приговор.",
    accent: "#ff3c6e",
  },
  {
    id: "03",
    label: "Глава III",
    title: "Фазовый клинок",
    text: "Оружие, вырезанное из чужого кода. Один удар — и бот-сеть рассыпается в статику. Зрители на стриме впервые увидят это вживую.",
    accent: "#6e3cff",
  },
  {
    id: "04",
    label: "Финал",
    title: "Пробуждение",
    text: "24 октября сигнал выйдет в эфир. 12 стримеров. 1 персонаж. 0 шансов остаться в стороне.",
    accent: "#3cc8ff",
  },
] as const;

export const streamers = [
  {
    name: "bratishkinoff",
    role: "Рейд-лидер",
    twitch: "3.4M",
    peak: "521K",
    youtube: "1.6M",
    tag: "PvE",
  },
  {
    name: "deepins02",
    role: "Тактик",
    twitch: "2.5M",
    peak: "522K",
    youtube: "54K",
    tag: "Шоу",
  },
  {
    name: "mazellovvv",
    role: "Саппорт",
    twitch: "1.9M",
    peak: "506K",
    youtube: "94K",
    tag: "Коллаб",
  },
  {
    name: "T2x2",
    role: "Кастер",
    twitch: "1.6M",
    peak: "293K",
    youtube: "39K",
    tag: "Эфир",
  },
  {
    name: "derzko69",
    role: "Дуэлянт",
    twitch: "1.2M",
    peak: "242K",
    youtube: "117K",
    tag: "Баттл",
  },
  {
    name: "Drakeoffc",
    role: "Снайпер",
    twitch: "1.2M",
    peak: "380K",
    youtube: "26K",
    tag: "Рейд",
  },
] as const;

export const schedule = [
  {
    time: "18:00",
    title: "Пролог: сигнал из Сектора 7",
    description:
      "Анимированный тизер и первый глитч-стрим с создателями вселенной. Открытие главной сцены.",
    track: "Премьера",
    hall: "Главная сцена",
    speakers: ["Модератор: NEON Team", "Арт-директор", "Lead Narrative"],
  },
  {
    time: "19:00",
    title: "Раскрытие способностей ZERO",
    description:
      "Геймплей, механики боя и интерактив с чатом — голосуйте за финальный скин в реальном времени.",
    track: "Шоу",
    hall: "Арена",
    speakers: ["bratishkinoff", "deepins02", "Game Design Lead"],
  },
  {
    time: "20:30",
    title: "Коллаб-баттл стримеров",
    description:
      "12 стримеров в PvE-рейде. Пик онлайна, дропы и секретный промокод только для зрителей эфира.",
    track: "Ивент",
    hall: "Рейд-зона",
    speakers: ["12 стримеров GCA", "Кастеры", "Модераторы чата"],
  },
  {
    time: "22:00",
    title: "Закрытый дроп для подписчиков",
    description:
      "Эксклюзивный аватар, обои, ранний доступ к бета-тесту и Q&A с командой.",
    track: "Дроп",
    hall: "VIP-чат",
    speakers: ["ZERO Team", "Community Lead"],
  },
] as const;

export const portfolio = [
  {
    title: "NEON RIFT — Бета-тизер",
    brand: "VANTEX",
    reach: "2.4M просмотров",
    peak: "48K онлайн",
    description:
      "Первый глитч-тизер персонажа ZERO. Лендинг собрал 47K визитов за 72 часа.",
  },
  {
    title: "Сектор 7 — ARG-кампания",
    brand: "NEON RIFT",
    reach: "890K охват",
    peak: "12K участников",
    description:
      "Alternate Reality Game в Telegram и Discord — игроки расшифровывали сигналы ZERO.",
  },
  {
    title: "Стримерский рейд",
    brand: "GCA × ZERO",
    reach: "5.8M просмотров",
    peak: "39K пик",
    description:
      "12 стримеров в одном PvE-ивенте. Формат вдохновлён кейсами GCA Studio.",
  },
] as const;

export const marqueeItems = [
  "ZERO // ПРОБУЖДЕНИЕ",
  "24 ОКТЯБРЯ",
  "NEON RIFT",
  "PLAY BIG",
  "LIVE PREMIERE",
  "СИГНАЛ АКТИВЕН",
  "ZERO // ПРОБУЖДЕНИЕ",
] as const;

export const halls = ["Главная сцена", "Арена", "Рейд-зона", "VIP-чат"] as const;
