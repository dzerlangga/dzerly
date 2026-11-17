/**
 * Pengaturan situs. Nilai bertanda [ISI] belum ditentukan di brief
 * (LANDING-PAGE.md) dan perlu dilengkapi pemilik produk sebelum publikasi.
 */
export const SITE = {
  /** [ISI] Domain final, dipakai untuk canonical URL & Open Graph. */
  url: 'https://dzerly.app',
  version: '0.1.0',

  /**
   * [ISI] Harga. `true` → tombol "Unduh gratis" & FAQ "Ya, gratis".
   * Ubah ke `false` bila berbayar, lalu sesuaikan teks `pricingAnswer` di src/i18n/content.ts.
   */
  isFree: true,

  downloads: {
    /** [ISI] Ganti dengan URL hosting final bila tidak di-serve dari situs ini. */
    exe: '/downloads/Dzerly_0.1.0_x64-setup.exe',
    msi: '/downloads/Dzerly_0.1.0_x64_en-US.msi',
    /** Paket ekstensi untuk pemasangan manual (Load unpacked). */
    extensionZip: '/downloads/dzerly-media-bridge.zip',
  },

  /** [ISI] Tautan Chrome Web Store. Kosong → tombol mengarah ke panduan pemasangan manual. */
  extensionStoreUrl: '',

  /** [ISI] Email kontak di footer. Kosong → tautan disembunyikan. */
  contactEmail: '',

  /** [ISI] Tautan kebijakan privasi. Kosong → tautan disembunyikan. */
  privacyPolicyUrl: '',
} as const;
