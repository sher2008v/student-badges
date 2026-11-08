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
  b1:    { title: "حل‌گر مسئله", active: true, desc: "{name} عزیز، با تکیه بر استدلال منطقی و تفکر ساختارمند، یک مسئله‌ی پیچیده را در پروژه‌ات شناسایی، تحلیل و حل کردی. این یعنی به‌جای حدس، با دلیل پیش رفتی؛ مهارتی که در هر مسیر علمی و فنی تو را از بقیه متمایز می‌کند.", svg: `<svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
<defs>
<linearGradient id="psR" gradientUnits="userSpaceOnUse" x1="20" y1="10" x2="180" y2="190"><stop offset="0" stop-color="#2ef2ff"/><stop offset=".55" stop-color="#8f7bff"/><stop offset="1" stop-color="#ff2bd6"/></linearGradient>
<linearGradient id="psR2" gradientUnits="userSpaceOnUse" x1="180" y1="10" x2="20" y2="190"><stop offset="0" stop-color="#2ef2ff"/><stop offset=".55" stop-color="#8f7bff"/><stop offset="1" stop-color="#ff2bd6"/></linearGradient>
<radialGradient id="psBody" cx=".5" cy=".42" r=".7"><stop offset="0" stop-color="#1d2358"/><stop offset=".6" stop-color="#0b0d26"/><stop offset="1" stop-color="#05050f"/></radialGradient>
<radialGradient id="psCore"><stop offset="0" stop-color="#bff9ff" stop-opacity=".95"/><stop offset=".45" stop-color="#2ef2ff" stop-opacity=".4"/><stop offset="1" stop-color="#8f7bff" stop-opacity=".08"/></radialGradient>
<radialGradient id="psHalo" cx="100" cy="90" r="46" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#2ef2ff" stop-opacity=".45"/><stop offset="1" stop-color="#2ef2ff" stop-opacity="0"/></radialGradient>
<linearGradient id="psGlass" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#fff" stop-opacity=".5"/><stop offset="1" stop-color="#fff" stop-opacity="0"/></linearGradient>
<linearGradient id="psPlate" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stop-color="#262b66"/><stop offset="1" stop-color="#0a0b22"/></linearGradient>
<filter id="psG" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="2.2" result="b"/><feMerge><feMergeNode in="b"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
<filter id="psS" x="-30%" y="-30%" width="160%" height="160%"><feGaussianBlur stdDeviation="9"/></filter>
<style>
.ps-run{stroke-dasharray:6 70;animation:psDash 3.4s linear infinite}
@keyframes psDash{from{stroke-dashoffset:0}to{stroke-dashoffset:-76}}
.ps-node{animation:psPulse 2.6s ease-in-out infinite}
@keyframes psPulse{50%{opacity:.4}}
.ps-core{animation:psBreath 3.4s ease-in-out infinite}
@keyframes psBreath{50%{opacity:.7}}
</style>
</defs>

<polygon points="100,22 168,61 168,139 100,178 32,139 32,61" fill="url(#psR)" opacity=".5" filter="url(#psS)"/>
<polygon points="100,8 179.7,54 179.7,146 100,192 20.3,146 20.3,54" fill="url(#psBody)" stroke="url(#psR)" stroke-width="4" stroke-linejoin="round"/>
<polygon points="100,13 175.3,56.5 175.3,143.5 100,187 24.7,143.5 24.7,56.5" fill="none" stroke="#fff" stroke-opacity=".14" stroke-width="1.2"/>
<polygon points="100,20 169.3,60 169.3,140 100,180 30.7,140 30.7,60" fill="none" stroke="url(#psR2)" stroke-width="1.6" stroke-dasharray="3 5" opacity=".8"/>

<polygon points="100,34 157.2,67 157.2,133 100,166 42.8,133 42.8,67" fill="url(#psBody)" stroke="url(#psR)" stroke-width="2.6" stroke-linejoin="round"/>
<circle cx="100" cy="90" r="46" fill="url(#psHalo)"/>

<g stroke="url(#psR)" stroke-width="2.4" fill="none" stroke-linecap="round" stroke-linejoin="round" filter="url(#psG)">
<path d="M45 100H68L76 108H84"/>
<path d="M155 100H132L124 92H116"/>
<path d="M100 36V54"/>
<path d="M100 164V142"/>
<path d="M56 70L70 82"/>
<path d="M144 70L130 82"/>
<path d="M56 130L70 118"/>
<path d="M144 130L130 118"/>
</g>

<g stroke="#e8feff" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
<path class="ps-run" d="M45 100H68L76 108H84"/>
<path class="ps-run" style="animation-delay:-.9s" d="M155 100H132L124 92H116"/>
<path class="ps-run" style="animation-delay:-1.7s" d="M100 36V54"/>
<path class="ps-run" style="animation-delay:-2.4s" d="M100 164V142"/>
</g>

<g filter="url(#psG)">
<circle class="ps-node" cx="45" cy="100" r="3" fill="#2ef2ff"/>
<circle class="ps-node" style="animation-delay:-.6s" cx="155" cy="100" r="3" fill="#ff2bd6"/>
<circle class="ps-node" style="animation-delay:-1.2s" cx="100" cy="36" r="3" fill="#2ef2ff"/>
<circle class="ps-node" style="animation-delay:-1.8s" cx="100" cy="164" r="3" fill="#ff2bd6"/>
<circle class="ps-node" style="animation-delay:-.3s" cx="56" cy="70" r="2.6" fill="#8f7bff"/>
<circle class="ps-node" style="animation-delay:-.9s" cx="144" cy="70" r="2.6" fill="#8f7bff"/>
<circle class="ps-node" style="animation-delay:-1.5s" cx="56" cy="130" r="2.6" fill="#8f7bff"/>
<circle class="ps-node" style="animation-delay:-2.1s" cx="144" cy="130" r="2.6" fill="#8f7bff"/>
<circle cx="84" cy="108" r="2" fill="#2ef2ff"/>
<circle cx="116" cy="92" r="2" fill="#ff2bd6"/>
<circle cx="70" cy="82" r="2" fill="#2ef2ff"/>
<circle cx="130" cy="82" r="2" fill="#ff2bd6"/>
<circle cx="70" cy="118" r="2" fill="#2ef2ff"/>
<circle cx="130" cy="118" r="2" fill="#ff2bd6"/>
<circle cx="100" cy="54" r="2" fill="#2ef2ff"/>
<circle cx="100" cy="142" r="2" fill="#ff2bd6"/>
</g>

<g stroke="url(#psR2)" stroke-width="3" stroke-linecap="round" filter="url(#psG)">
<path d="M124 66L129 61"/>
<path d="M76 66L71 61"/>
</g>

<path d="M84 104C78 98 76 94 76 88A24 24 0 1 1 124 88C124 94 122 98 116 104C113 108 112 111 112 115H88C88 111 87 108 84 104Z" fill="#0a0c24"/>
<path class="ps-core" d="M84 104C78 98 76 94 76 88A24 24 0 1 1 124 88C124 94 122 98 116 104C113 108 112 111 112 115H88C88 111 87 108 84 104Z" fill="url(#psCore)" stroke="url(#psR)" stroke-width="3" stroke-linejoin="round" filter="url(#psG)"/>

<g class="ps-core" stroke="#d9fbff" stroke-width="2.6" fill="none" stroke-linecap="round" stroke-linejoin="round" filter="url(#psG)">
<path d="M93 114V104L100 97L107 104V114"/>
<path d="M100 97V79"/>
<path d="M100 89L92 81"/>
<path d="M100 89L108 81"/>
</g>
<g fill="#fff" filter="url(#psG)">
<circle cx="100" cy="79" r="2.6"/>
<circle cx="92" cy="81" r="2.2"/>
<circle cx="108" cy="81" r="2.2"/>
</g>

<rect x="89" y="118" width="22" height="5" rx="2.5" fill="url(#psPlate)" stroke="url(#psR2)" stroke-width="1.4"/>
<rect x="92" y="125" width="16" height="5" rx="2.5" fill="url(#psPlate)" stroke="url(#psR2)" stroke-width="1.4"/>
<rect x="96" y="132" width="8" height="4" rx="2" fill="url(#psR)"/>

<path d="M42.8 67L100 34L157.2 67V84Q100 104 42.8 84Z" fill="url(#psGlass)" opacity=".28"/>
<ellipse cx="88" cy="74" rx="5" ry="2.5" transform="rotate(-30 88 74)" fill="#fff" opacity=".5"/>

<g filter="url(#psG)">
<polygon points="100,1 109,12 100,23 91,12" fill="url(#psR)" stroke="#fff" stroke-opacity=".5" stroke-width="1"/>
<polygon points="100,6 104.5,12 100,18 95.5,12" fill="#05050f" opacity=".55"/>
</g>
<path d="M76 183H124L112 197H88Z" fill="url(#psPlate)" stroke="url(#psR)" stroke-width="2.4" stroke-linejoin="round"/>
<circle cx="100" cy="190" r="2.4" fill="url(#psR2)"/>
<rect x="13" y="84" width="11" height="32" rx="5" fill="url(#psPlate)" stroke="url(#psR)" stroke-width="2.2"/>
<path d="M18.5 91V109" stroke="#2ef2ff" stroke-width="2" stroke-linecap="round" opacity=".9"/>
<rect x="176" y="84" width="11" height="32" rx="5" fill="url(#psPlate)" stroke="url(#psR)" stroke-width="2.2"/>
<path d="M181.5 91V109" stroke="#ff2bd6" stroke-width="2" stroke-linecap="round" opacity=".9"/>
</svg>` },
  b2:    { title: "", desc: "", active: false, svg: null },
  b3:    { title: "", desc: "", active: false, svg: null },
  b4:    { title: "", desc: "", active: false, svg: null },
  b5:    { title: "", desc: "", active: false, svg: null },
  b6:    { title: "", desc: "", active: false, svg: null },
  final: { title: "", desc: "", active: false, svg: null }
};

const STUDENTS = {
  "x7k2p9qa": { name: "آرین فروزان فرد",        earned: ['b1'] },
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