/** Perilaku global: reveal, sorot kartu, mata robot, jam langsung, skala mockup. */

const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;

// Reveal saat gulir
const revealIO = new IntersectionObserver(
  (entries) => {
    for (const e of entries) {
      if (e.isIntersecting) {
        e.target.classList.add('in');
        revealIO.unobserve(e.target);
      }
    }
  },
  { rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
);
document.querySelectorAll('[data-reveal]').forEach((el) => revealIO.observe(el));

// Hentikan animasi CSS di bagian yang tidak terlihat (hemat CPU/GPU)
const offIO = new IntersectionObserver(
  (entries) => {
    for (const e of entries) e.target.classList.toggle('offscreen', !e.isIntersecting);
  },
  { rootMargin: '150px 0px' },
);
document.querySelectorAll('main > section, footer').forEach((el) => offIO.observe(el));

// Sorot kursor pada kartu .spot
document.addEventListener(
  'pointermove',
  (e) => {
    const card = (e.target as Element).closest?.<HTMLElement>('.spot');
    if (!card) return;
    const r = card.getBoundingClientRect();
    card.style.setProperty('--mx', `${e.clientX - r.left}px`);
    card.style.setProperty('--my', `${e.clientY - r.top}px`);
  },
  { passive: true },
);

// Mata robot mengikuti kursor
let px = innerWidth / 2;
let py = innerHeight / 3;
let raf = 0;
const updateEyes = () => {
  raf = 0;
  document.querySelectorAll<HTMLElement>('.robot-eyes[data-track]').forEach((el) => {
    const r = el.getBoundingClientRect();
    if (r.bottom < 0 || r.top > innerHeight) return;
    const dx = px - (r.left + r.width / 2);
    const dy = py - (r.top + r.height / 2);
    const max = el.classList.contains('lg') ? 5 : 3;
    const d = Math.hypot(dx, dy) || 1;
    const k = Math.min(1, d / 220);
    el.style.setProperty('--look-x', `${((dx / d) * max * k).toFixed(2)}px`);
    el.style.setProperty('--look-y', `${((dy / d) * max * 0.7 * k).toFixed(2)}px`);
  });
};
if (!reduce) {
  addEventListener(
    'pointermove',
    (e) => {
      px = e.clientX;
      py = e.clientY;
      if (!raf) raf = requestAnimationFrame(updateEyes);
    },
    { passive: true },
  );
}

// Jam langsung: [data-clock] (format mengikuti bahasa halaman)
const lang = document.documentElement.lang;
const tick = () => {
  const d = new Date();
  const p = (n: number) => String(n).padStart(2, '0');
  const t = `${p(d.getHours())}${lang === 'id' ? '.' : ':'}${p(d.getMinutes())}`;
  document.querySelectorAll<HTMLElement>('[data-clock]').forEach((el) => {
    if (el.textContent !== t) el.textContent = t;
  });
  const dateStr = d.toLocaleDateString(lang === 'id' ? 'id-ID' : 'en-US', { weekday: 'short', day: 'numeric', month: 'short' });
  document.querySelectorAll<HTMLElement>('[data-date]').forEach((el) => (el.textContent = dateStr));
};
tick();
setInterval(tick, 1000);

// Skala mockup ber-ukuran tetap agar proporsional di semua lebar layar
document.querySelectorAll<HTMLElement>('[data-stage-wrap]').forEach((wrap) => {
  const stage = wrap.querySelector<HTMLElement>('[data-stage]')!;
  const lg = { w: Number(wrap.dataset.lgW ?? 960), h: Number(wrap.dataset.lgH ?? 560) };
  const sm = { w: Number(wrap.dataset.smW ?? 420), h: Number(wrap.dataset.smH ?? 600) };
  const fit = () => {
    const w = wrap.clientWidth;
    const size = w >= 600 ? lg : sm;
    const s = Math.min(1.25, w / size.w);
    stage.dataset.size = size === lg ? 'lg' : 'sm';
    stage.style.width = `${size.w}px`;
    stage.style.height = `${size.h}px`;
    stage.style.transform = `translateX(-50%) scale(${s})`;
    wrap.style.height = `${size.h * s}px`;
  };
  new ResizeObserver(fit).observe(wrap);
  fit();
});

// Palet perintah dibuka dari tombol mana pun
document.addEventListener('click', (e) => {
  if ((e.target as Element).closest?.('[data-open-palette]')) {
    window.dispatchEvent(new CustomEvent('dz:palette'));
  }
});
