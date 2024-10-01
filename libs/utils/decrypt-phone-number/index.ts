import CryptoJS from "crypto-js";

const appKey = process.env.NEXT_PUBLIC_APP_KEY;

export const decryptPhoneNumber = (encryptedData: string): string => {
  const decryptedBytes = CryptoJS.AES.decrypt(
    encryptedData.replace(/Por21Ld/g, "/"),
    appKey as string
  );
  const decrypted = decryptedBytes.toString(CryptoJS.enc.Utf8);
  return decrypted;
};
