/**
 * Membuat slug dari nama yang diberikan.
 *
 * Slug akan diubah menjadi huruf kecil, spasi di awal dan akhir dihapus, karakter non-alphanumeric kecuali spasi dan strip akan dihapus,
 * spasi akan diubah menjadi strip, dan strip berurutan akan diubah menjadi satu strip.
 *
 * @param name Nama yang akan diubah menjadi slug
 * @returns Slug yang dihasilkan
 */

export function createSlug(name: string): string {
  return name
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "") // Hapus karakter non-alphanumeric kecuali spasi dan strip
    .replace(/\s+/g, "-") // Ganti spasi dengan strip
    .replace(/-+/g, "-"); // Ganti strip berurutan menjadi satu strip
}
