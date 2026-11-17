/** Contoh jadwal sholat Jakarta (ilustrasi, bukan data langsung). */
export const SAMPLE_TIMES = ['04:12', '11:41', '15:03', '17:52', '19:05'];

const toMin = (hm: string) => {
  const [h, m] = hm.split(':').map(Number);
  return h * 60 + m;
};

/** Indeks waktu sholat berikutnya & sisa detik menuju waktu itu. */
export function nextPrayer(now = new Date()) {
  const secNow = now.getHours() * 3600 + now.getMinutes() * 60 + now.getSeconds();
  for (let i = 0; i < SAMPLE_TIMES.length; i++) {
    const s = toMin(SAMPLE_TIMES[i]) * 60;
    if (s > secNow) return { index: i, seconds: s - secNow };
  }
  return { index: 0, seconds: 86400 - secNow + toMin(SAMPLE_TIMES[0]) * 60 };
}

export const fmtCountdown = (s: number) => {
  const h = Math.floor(s / 3600);
  const m = Math.floor((s % 3600) / 60);
  const sec = s % 60;
  const p = (n: number) => String(n).padStart(2, '0');
  return h > 0 ? `${h}:${p(m)}:${p(sec)}` : `${p(m)}:${p(sec)}`;
};

export const fmtTime = (hm: string, lang: string) => (lang === 'id' ? hm.replace(':', '.') : hm);
