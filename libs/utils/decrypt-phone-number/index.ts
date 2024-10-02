import CryptoJS from "crypto-js";
import { secretKey } from "../encrypt-phone-number";

export const decryptPhoneNumber = (encryptedData: string): string => {
  const decryptedBytes = CryptoJS.AES.decrypt(
    encryptedData
      .replace(/Por21Ld/g, "/")
      .replace(/Por22Ld/g, "+")
      .replace(/Por23Ld/g, "="),
    secretKey
  );
  const decrypted = decryptedBytes.toString(CryptoJS.enc.Utf8);
  return decrypted;
};
