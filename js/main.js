/* ===== إعدادات يمكن تعديلها ===== */
const CONFIG = {
  phone: "0120007575",
  whatsapp: "249120007575",        // بالصيغة الدولية بدون + (يُستخدم في الرابط)
  whatsappLabel: "0120007575",     // النص الظاهر للزائر
  email: "Royal-kush@gmail.com",
  address: "دنقلا الدرجة الثانية",
  social: [{ name: "فيسبوك", url: "https://www.facebook.com/royalkushschools" }]
};
// كل سطر يظهر كفقرة مستقلة
const MANAGEMENT_MESSAGE = [
  "بسم الله الرحمن الرحيم",
  "أهلاً بكم في روضة رويال كوش ، حيث تبدأ الأحلام الصغيرة وتُصنع البدايات الكبيرة.",
  "نؤمن بأن مرحلة الطفولة هي الأساس الذي تُبنى عليه شخصية الإنسان ومستقبله.",
  "لذلك نحرص على توفير بيئة تعليمية آمنة، مليئة بالحب والرعاية والتحفيز.",
  "ونسعى إلى غرس القيم النبيلة والأخلاق الحميدة في نفوس أطفالنا منذ الصغر.",
  "كما نهتم بتنمية مهارات الأطفال ومواهبهم، وتعزيز قدراتهم على التفكير والإبداع والاكتشاف.",
  "ونؤمن بأن التعلم في هذه المرحلة يجب أن يجمع بين المتعة والمعرفة واللعب الهادف.",
  "ونعمل مع كوادر تربوية متميزة لتقديم تجربة تعليمية تليق بأطفالنا وتطلعات أسرهم.",
  "كما نعتز بشراكتنا مع أولياء الأمور، ونؤمن بأن نجاح الطفل مسؤولية نتشاركها جميعاً.",
  "هدفنا أن نمنح كل طفل بداية مشرقة، وثقة بالنفس، وحباً للتعلم يستمر معه مدى الحياة.",
  "روضة رويال كوش … طفولة سعيدة، تعلم ممتع، ومستقبل واعد."
].join("\n");
// صور المعرض: ضع الصور في assets/images/gallery ثم أضفها هنا
const GALLERY = [
  {
    "src": "assets/images/gallery/01.jpg",
    "alt": "معلمة تساعد طفلة في الكتابة",
    "pos": "center 40%"
  },
  {
    "src": "assets/images/gallery/02.jpg",
    "alt": "طفل يحمل إطار صورة في فعالية يوم الموز",
    "pos": "center 30%"
  },
  {
    "src": "assets/images/gallery/03.jpg",
    "alt": "طفلة مع إطار صورة في فعالية يوم الموز",
    "pos": "center 35%"
  },
  {
    "src": "assets/images/gallery/04.jpg",
    "alt": "طفلتان خلف إطار صورة في فعالية يوم الموز",
    "pos": "center 40%"
  },
  {
    "src": "assets/images/gallery/05.jpg",
    "alt": "أطفال يرفعون أيديهم في نشاط جماعي",
    "pos": "center 40%"
  },
  {
    "src": "assets/images/gallery/06.jpg",
    "alt": "أطفال يرفعون أيديهم في نشاط جماعي داخل الروضة",
    "pos": "center 40%"
  },
  {
    "src": "assets/images/gallery/07.jpg",
    "alt": "أطفال في فعالية يوم الموز",
    "pos": "center 50%"
  },
  {
    "src": "assets/images/gallery/08.jpg",
    "alt": "افتتاح الروضة: أطفال بزيّ برتقالي أمام قوس من البالونات",
    "pos": "center 60%"
  },
  {
    "src": "assets/images/gallery/09.jpg",
    "alt": "أطفال بالزي البرتقالي جالسون في الفصل",
    "pos": "center 50%"
  },
  {
    "src": "assets/images/gallery/10.jpg",
    "alt": "أطفال جالسون في حلقة خلال نشاط تراثي",
    "pos": "center 40%"
  },
  {
    "src": "assets/images/gallery/11.jpg",
    "alt": "أطفال يتعانقون في نشاط جماعي",
    "pos": "center 40%"
  },
  {
    "src": "assets/images/gallery/12.jpg",
    "alt": "أطفال يلعبون لعبة بالتصفيق في حلقة",
    "pos": "center 50%"
  },
  {
    "src": "assets/images/gallery/13.jpg",
    "alt": "طفلة في ركن تراثي لتحضير القهوة",
    "pos": "center 30%"
  },
  {
    "src": "assets/images/gallery/14.jpg",
    "alt": "طفل بالزي التراثي في ركن تراثي",
    "pos": "center 30%"
  },
  {
    "src": "assets/images/gallery/15.jpg",
    "alt": "طفلة بالزي التراثي في ركن تراثي",
    "pos": "center 35%"
  },
  {
    "src": "assets/images/gallery/16.jpg",
    "alt": "ركن تراثي بعلم السودان ومعروضات تقليدية",
    "pos": "center 50%"
  },
  {
    "src": "assets/images/gallery/17.jpg",
    "alt": "ثلاث طفلات بالأزياء التراثية",
    "pos": "center 35%"
  },
  {
    "src": "assets/images/gallery/18.jpg",
    "alt": "أطفال بالزي التراثي في فعالية الروضة",
    "pos": "center 40%"
  },
  {
    "src": "assets/images/gallery/19.jpg",
    "alt": "طفلتان بزي مدرسي أبيض وأسود",
    "pos": "center 25%"
  }
];

const $ = (s, r = document) => r.querySelector(s);
const $$ = (s, r = document) => [...r.querySelectorAll(s)];

/* التواصل */
(() => {
  const set = (k, html) => { const el = $(`[data-c="${k}"]`); if (el) el.innerHTML = html; };
  const none = '<span class="empty">سيُضاف قريباً</span>';
  const esc = t => String(t).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
  set("phone", CONFIG.phone ? `<a href="tel:${esc(CONFIG.phone)}" dir="ltr">${esc(CONFIG.phone)}</a>` : none);
  set("whatsapp", CONFIG.whatsapp ? `<a href="https://wa.me/${esc(CONFIG.whatsapp)}" dir="ltr" target="_blank" rel="noopener">${esc(CONFIG.whatsappLabel || CONFIG.whatsapp)}</a>` : none);
  set("email", CONFIG.email ? `<a href="mailto:${esc(CONFIG.email)}" dir="ltr">${esc(CONFIG.email)}</a>` : none);
  set("address", CONFIG.address ? esc(CONFIG.address) : none);
  set("social", CONFIG.social.length ? CONFIG.social.map(s => `<a href="${esc(s.url)}" target="_blank" rel="noopener">${esc(s.name)}</a>`).join(" · ") : none);
  if (CONFIG.whatsapp) { const w = $("#wa"); w.href = `https://wa.me/${CONFIG.whatsapp}`; w.hidden = false; }
  if (MANAGEMENT_MESSAGE) {
    const m = $("#mgmt"); m.textContent = ""; m.classList.add("filled");
    MANAGEMENT_MESSAGE.split("\n").forEach((t, i) => { const p = document.createElement("p"); p.textContent = t; if (i === 0) p.className = "bis"; m.appendChild(p); });
  }
})();

/* القائمة */
const nav = $("#nav"), menu = $("#menu"), burger = $("#burger");
const closeMenu = () => { menu.classList.remove("open"); nav.classList.remove("open"); burger.setAttribute("aria-expanded", "false"); };
burger.addEventListener("click", () => {
  const o = menu.classList.toggle("open"); nav.classList.toggle("open", o); burger.setAttribute("aria-expanded", String(o));
});
$$("#menu a").forEach(a => a.addEventListener("click", closeMenu));
document.addEventListener("keydown", e => { if (e.key === "Escape") closeMenu(); });

/* شريط التنقل والعودة للأعلى */
const topBtn = $("#top");
const onScroll = () => { nav.classList.toggle("on", scrollY > 20); topBtn.hidden = scrollY < 500; };
addEventListener("scroll", onScroll, { passive: true }); onScroll();
topBtn.addEventListener("click", () => scrollTo({ top: 0 }));

/* الظهور وتمييز القسم الحالي */
const io = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { threshold: .12 });
$$(".reveal").forEach(el => io.observe(el));
const map = { home: "home", about: "about", vision: "about", philosophy: "about", programs: "programs", activities: "activities", talents: "activities", environment: "environment", care: "environment", parents: "contact", message: "contact", contact: "contact" };
const so = new IntersectionObserver(es => es.forEach(e => {
  if (e.isIntersecting) $$("#menu a").forEach(a => a.classList.toggle("cur", a.getAttribute("href") === "#" + map[e.target.id]));
}), { rootMargin: "-45% 0px -50% 0px" });
$$("main section[id]").forEach(s => so.observe(s));

/* المعرض و Lightbox */
const gal = $("#gallery"), lb = $("#lb"), lbimg = $("#lbimg");
let idx = 0, opener = null;
if (GALLERY.length) {
  GALLERY.forEach((g, i) => {
    const b = document.createElement("a"); b.className = "g"; b.href = g.src; b.target = "_blank"; b.setAttribute("aria-label", "تكبير: " + g.alt);
    const im = document.createElement("img"); im.src = g.src; im.alt = g.alt; im.loading = "lazy"; if (g.pos) im.style.objectPosition = g.pos; b.appendChild(im);
    b.addEventListener("click", e => { e.preventDefault(); openLb(i, b); }); gal.appendChild(b);
  });
} else {
  for (let i = 0; i < 6; i++) { const d = document.createElement("div"); d.className = "g ph"; d.textContent = "مكان لصورة من أنشطة الروضة"; gal.appendChild(d); }
}
function show() { const g = GALLERY[idx]; lbimg.src = g.src; lbimg.alt = g.alt; }
function openLb(i, b) { idx = i; opener = b; show(); lb.hidden = false; document.body.style.overflow = "hidden"; $(".lb-x").focus(); }
function closeLb() { lb.hidden = true; document.body.style.overflow = ""; if (opener) opener.focus(); }
function step(d) { idx = (idx + d + GALLERY.length) % GALLERY.length; show(); }
lb.addEventListener("click", e => { const a = e.target.dataset.a; if (a === "close" || e.target === lb) closeLb(); if (a === "next") step(1); if (a === "prev") step(-1); });
document.addEventListener("keydown", e => {
  if (lb.hidden) return;
  if (e.key === "Escape") closeLb(); if (e.key === "ArrowLeft") step(1); if (e.key === "ArrowRight") step(-1);
});
let sx = 0;
lb.addEventListener("touchstart", e => sx = e.touches[0].clientX, { passive: true });
lb.addEventListener("touchend", e => { const d = e.changedTouches[0].clientX - sx; if (Math.abs(d) > 50) step(d < 0 ? 1 : -1); });
