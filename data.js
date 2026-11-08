/*
راهنمای سریع:
- active: true        بج برای همه نمایش داده می‌شود (کسب‌نشده‌ها «در انتظار» هستند).
- earned: ['b1']      این دانش‌آموز بج b1 را گرفته.
- overrides           جایگزین کردن بج یک نفر. مثال:
                      overrides: { b3: { title: 'عنوان جدید', desc: '...', active: true } }
- extra               بج‌های ویژه یک نفر. ابتدا باید در BADGE_CATALOG تعریف شوند. مثال: extra: ['x1']
- {name} در توضیحات   با نام کامل دانش‌آموز جایگزین می‌شود.
- کلید هر دانش‌آموز (مثلاً x7k2p9qa) همان چیزی است که در لینک ?student= می‌آید.
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
  "x7k2p9qa": { name: "آرین فروزانی فرد",        earned: ['b1'] },
  "m4t8ryn3": { name: "ابوالفضل خدری",           earned: [] },
  "b9c2hw6e": { name: "ارشیا امیری",             earned: [] },
  "q5v1zd8s": { name: "امیررضا جلالی اصفهان",    earned: [] },
  "k2n7fe4j": { name: "امیررضا ورناصری",         earned: [] },
  "h8s3ug1r": { name: "امیرعلی پوریافر",         earned: [] },
  "w6p9ta2m": { name: "امیرعلی شکیبا",           earned: [] },
  "d3j5xc7b": { name: "آراد نظرزاده",            earned: [] },
  "r1g8lq4n": { name: "آروین امیری",             earned: [] },
  "t7e2ym9k": { name: "بهتاش رحیمی نیا",         earned: [] },
  "z4u6oi3f": { name: "بهراد ناصری کریموند",     earned: [] },
  "c8f1bn5w": { name: "سامیار حاجتی",            earned: [] },
  "y2m9kd7h": { name: "سهیل عساکره",             earned: [] },
  "e5a3rv8p": { name: "سورنا اسکندری",           earned: [] },
  "u9l6sj2t": { name: "عباس زهریان نژاد",        earned: [] },
  "g3q7hx4c": { name: "علی ممبینی",              earned: [] },
  "p6w2ze9d": { name: "علیرضا سطوت",             earned: [] },
  "n8b4ka1v": { name: "علیرضا کاظمی",            earned: [] },
  "f1x5tm7y": { name: "محمدطاها خدادادی",        earned: [] },
  "j7r9cw3g": { name: "مهراد بلادی موسوی",       earned: [] }
};