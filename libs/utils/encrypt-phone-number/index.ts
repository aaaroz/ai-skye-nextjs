import CryptoJS from "crypto-js";
import { generateSecretKey } from "../generate-secret-key";

export const secretKey = generateSecretKey();

export const encryptPhoneNumber = (phoneNumber: string): string => {
  const encrypted = CryptoJS.AES.encrypt(phoneNumber, secretKey)
    .toString()
    .replace(/\//g, "Por21Ld")
    .replace(/\+/g, "Por22Ld")
    .replace(/\=/g, "Por23Ld");
  return encrypted;
};
