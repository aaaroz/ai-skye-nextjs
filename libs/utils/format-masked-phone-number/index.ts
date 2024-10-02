export const formatMaskedPhoneNumber = (phoneNumber: string): string => {
  // Pastikan nomor telepon dimulai dengan "0" untuk format lokal
  if (phoneNumber.startsWith("0")) {
    // Ganti "0" dengan "+62" untuk format internasional
    const formattedPhone = "+62" + phoneNumber.slice(1);

    // Ambil 5 digit pertama dan 4 digit terakhir, lalu sembunyikan sisanya
    const firstPart = formattedPhone.slice(0, 5); // "+628"
    const lastPart = formattedPhone.slice(-4); // "8343"

    // Hitung berapa banyak 'x' yang harus ditambahkan
    const xCount = phoneNumber.length === 13 ? 5 : 4; // 5 'x' jika panjang 13, 4 'x' jika panjang 12

    // Buat string x berdasarkan jumlah yang diperlukan
    const maskedMiddle = "x".repeat(xCount);

    return `${firstPart}${maskedMiddle}${lastPart}`;
  }

  // Jika format nomor tidak valid (tidak diawali dengan "0"), kembalikan apa adanya
  return phoneNumber;
};
