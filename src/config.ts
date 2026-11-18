/**
 * Pengaturan situs. Nilai bertanda [ISI] belum ditentukan di brief
 * (LANDING-PAGE.md) dan perlu dilengkapi pemilik produk sebelum publikasi.
 */

/** Repo GitHub untuk statistik unduhan (dari GitHub Releases). */
const GITHUB_REPO = 'dzerlangga/dzerly';

/**
 * Sumber file installer:
 * - 'local'  → disajikan dari public/downloads/ (jalan sekarang, tapi tidak terhitung).
 * - 'github' → dari GitHub Releases terbaru. Unduhan TERHITUNG di statistik.
 *   Syarat: buat Release (mis. tag v0.1.0) dan unggah file .exe & .msi dengan nama yang sama.
 */
const DOWNLOAD_SOURCE: 'local' | 'github' = 'github';

const EXE = 'Dzerly_0.1.0_x64-setup.exe';
const MSI = 'Dzerly_0.1.0_x64_en-US.msi';
const fileUrl = (name: string) =>
  DOWNLOAD_SOURCE === 'github'
    ? `https://github.com/${GITHUB_REPO}/releases/latest/download/${name}`
    : `/downloads/${name}`;

export const SITE = {
  /** [ISI] Domain final, dipakai untuk canonical URL & Open Graph. */
  url: 'https://dzerly.app',
  version: '0.1.0',

  /**
   * [ISI] Harga. `true` → tombol "Unduh gratis" & FAQ "Ya, gratis".
   * Ubah ke `false` bila berbayar, lalu sesuaikan teks FAQ di src/i18n/content.ts.
   */
  isFree: true,

  githubRepo: GITHUB_REPO,

  downloads: {
    exe: fileUrl(EXE),
    msi: fileUrl(MSI),
    /** Paket ekstensi untuk pemasangan manual (Load unpacked). */
    extensionZip: '/downloads/dzerly-media-bridge.zip',
  },

  /** Bagian "Traktir". Tombol yang tautannya kosong disembunyikan. */
  support: {
    /** [ISI] mis. 'https://saweria.co/username' */
    saweria: 'https://saweria.co/ThanD',
    /** [ISI] mis. 'https://trakteer.id/username' */
    trakteer: '',
    /** [ISI] Gambar QRIS di folder public/, mis. '/qris.png' */
    qrisImage: '',
  },

  /** [ISI] Tautan Chrome Web Store. Kosong → tombol mengarah ke panduan pemasangan manual. */
  extensionStoreUrl: '',

  /** [ISI] Email kontak di footer. Kosong → tautan disembunyikan. */
  contactEmail: '',

  /** [ISI] Tautan kebijakan privasi. Kosong → tautan disembunyikan. */
  privacyPolicyUrl: '',
} as const;
