export const generateSecretKey = (): string => {
  const keyLength = 32; // 32 bytes = 256 bits (AES-256)
  const buffer = new Uint8Array(keyLength);
  crypto.getRandomValues(buffer);
  return Array.from(buffer, (byte) => byte.toString(16).padStart(2, "0")).join(
    ""
  );
};
