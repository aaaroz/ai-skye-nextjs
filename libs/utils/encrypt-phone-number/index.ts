import CryptoJS from "crypto-js";

const appKey = process.env.NEXT_PUBLIC_APP_KEY;

export const encryptPhoneNumber = (phoneNumber: string): string => {
  const encrypted = CryptoJS.AES.encrypt(phoneNumber, appKey as string)
    .toString()
    .replace(/\//g, "Por21Ld");
  return encrypted;
};
