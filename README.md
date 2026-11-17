# Dzerly — Landing Page

Astro 5 + Tailwind CSS 4. Konten mengikuti `LANDING-PAGE.md` (brief produk).

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # hasil di dist/
```

- `/` = Bahasa Indonesia, `/en/` = English. Semua teks ada di `src/i18n/content.ts`.
- Pengaturan yang masih **[ISI]** (domain, harga, tautan unduhan, Chrome Web Store, kontak, kebijakan privasi) ada di `src/config.ts` dan `astro.config.mjs`.
- Installer & paket ekstensi disajikan dari `public/downloads/`. Ganti tautannya di `src/config.ts` bila di-hosting di tempat lain.
- Gambar Open Graph: `public/og.png` (1200×630).
