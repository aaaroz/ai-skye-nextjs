import CredentialsProvider from "next-auth/providers/credentials";
import { loginSchema } from "../entities";
import { authenticate } from "./utils";

export const credentialProvider = () =>
  CredentialsProvider({
    id: "login",
    name: "credentials",
    credentials: {
      phoneNumber: {
        label: "Nomor Telepon",
        type: "text",
        placeholder: "Masukkan nomor telepon",
      },
      password: {
        label: "Password",
        type: "password",
        placeholder: "*********",
      },
    },
    async authorize(credentials) {
      const { data } = loginSchema.safeParse(credentials);

      if (!data?.phoneNumber || !data?.password) {
        throw new Error("Nomor Telepon dan Password wajib diisi");
      }

      const user = await authenticate({
        phoneNumber: data.phoneNumber,
        password: data.password,
      });

      if (user) {
        console.log("Halo!", user?.name);
        return {
          ...user,
        };
      } else {
        return null;
      }
    },
  });
