/*
راهنمای سریع:
- active: true        یعنی این بج فعال است و دانش‌آموزان می‌توانند آن را بگیرند.
- earned: ['b1']      یعنی این دانش‌آموز بج b1 را گرفته (فقط وقتی active باشد رنگی می‌شود).
- overrides           جایگزین کردن بج یک نفر. مثال:
                      overrides: { b3: { title: 'عنوان جدید', desc: '...', active: true } }
- extra               بج‌های ویژه یک نفر. ابتدا باید در BADGE_CATALOG تعریف شوند. مثال: extra: ['x1']
- {name} در توضیحات   با نام کامل دانش‌آموز جایگزین می‌شود.
*/

const BADGE_CATALOG = {
  b1:    { title: "حل‌گر مسئله", active: true, desc: "{name} عزیز، با تکیه بر استدلال منطقی و تفکر ساختارمند، یک مسئله‌ی پیچیده را در پروژه‌ات شناسایی، تحلیل و حل کردی. این یعنی به‌جای حدس، با دلیل پیش رفتی؛ مهارتی که در هر مسیر علمی و فنی تو را از بقیه متمایز می‌کند.", svg: `<svg viewBox="0 0 120 120" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="gA" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stop-color="#2ef2ff"/><stop offset="1" stop-color="#ff2bd6"/></linearGradient><radialGradient id="gB"><stop offset="0" stop-color="#1c2044"/><stop offset="1" stop-color="#07070f"/></radialGradient><filter id="fG"><feGaussianBlur stdDeviation="1.8" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter></defs><polygon points="60,6 106,32 106,88 60,114 14,88 14,32" fill="url(#gB)" stroke="url(#gA)" stroke-width="2.5"/><polygon points="60,15 97,36 97,84 60,105 23,84 23,36" fill="none" stroke="#2ef2ff" stroke-opacity=".22" stroke-width="1"/><g stroke="url(#gA)" stroke-width="1.7" fill="none" stroke-linecap="round" filter="url(#fG)"><path d="M23 60H42l6-6h6"/><path d="M97 60H78l-6 6h-6"/><path d="M60 23V40"/><path d="M60 97V80"/><path d="M40 36h-8"/><path d="M80 84h8"/></g><g fill="#2ef2ff" filter="url(#fG)"><circle cx="23" cy="60" r="2.6"/><circle cx="97" cy="60" r="2.6"/><circle cx="60" cy="23" r="2.6"/><circle cx="60" cy="97" r="2.6"/><circle cx="32" cy="36" r="2"/><circle cx="88" cy="84" r="2"/></g><g stroke="url(#gA)" stroke-width="2.2" fill="none" stroke-linecap="round" stroke-linejoin="round" filter="url(#fG)"><circle cx="60" cy="54" r="14"/><path d="M53 66h14v4a2 2 0 0 1-2 2h-10a2 2 0 0 1-2-2z"/><path d="M55 76h10"/><path d="M60 40v3M46 54h3M71 54h3M49 43l2 2M71 43l-2 2"/></g><path d="M56 56l4 4 4-4" stroke="#ff2bd6" stroke-width="1.6" fill="none" filter="url(#fG)"/></svg>` },
  b2:    { title: "", desc: "", active: false, svg: null },
  b3:    { title: "", desc: "", active: false, svg: null },
  b4:    { title: "", desc: "", active: false, svg: null },
  b5:    { title: "", desc: "", active: false, svg: null },
  b6:    { title: "", desc: "", active: false, svg: null },
  final: { title: "", desc: "", active: false, svg: null }
};

const STUDENTS = {
  s01: { name: "آرین فروزان فرد",        earned: [] },
  s02: { name: "ابوالفضل خدری",           earned: [] },
  s03: { name: "ارشیا امیری",             earned: [] },
  s04: { name: "امیررضا جلالی اصفهان",    earned: [] },
  s05: { name: "امیررضا ورناصری",         earned: [] },
  s06: { name: "امیرعلی پوریافر",         earned: [] },
  s07: { name: "امیرعلی شکیبا",           earned: [] },
  s08: { name: "آراد نظرزاده",            earned: [] },
  s09: { name: "آروین امیری",             earned: [] },
  s10: { name: "بهتاش رحیمی نیا",         earned: [] },
  s11: { name: "بهراد ناصری کریموند",     earned: [] },
  s12: { name: "سامیار حاجتی",            earned: [] },
  s13: { name: "سهیل عساکره",             earned: [] },
  s14: { name: "سورنا اسکندری",           earned: [] },
  s15: { name: "عباس زهریان نژاد",        earned: [] },
  s16: { name: "علی ممبینی",              earned: [] },
  s17: { name: "علیرضا سطوت",             earned: [] },
  s18: { name: "علیرضا کاظمی",            earned: [] },
  s19: { name: "محمدطاها خدادادی",        earned: [] },
  s20: { name: "مهراد بلادی موسوی",       earned: [] }
};