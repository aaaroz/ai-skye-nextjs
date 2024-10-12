"use server";

import { baseApiUrl, TPersonalDataSchema } from "@/libs/entities";
import { TUpdateProfileResponse } from "./type";
import { getSession } from "next-auth/react";

export const updateProfile = async ({
  fullName,
  phoneNumber,
  position,
  company,
  city,
  birthDate,
  avatar,
}: TPersonalDataSchema) => {
  const session = await getSession();
  const token = session?.user.token;
  if (!token) {
    throw new Error("401 - Unauthorized!");
  }
  const payload = {
    userId: session.user.id,
    updateData: {
      phoneNumber: phoneNumber,
      name: fullName,
      jabatan: position,
      perusahaan: company,
      kota: city,
      tempatTanggalLahir: birthDate,
      image_url: avatar,
    },
  };

  const res: TUpdateProfileResponse = await fetch(
    `${baseApiUrl}/api/profile/update`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(payload),
    }
  ).then((response) => response.json());

  if (res.status !== 200) {
    console.error(res.body.message);
    throw new Error(res.body.message);
  }

  return res.body;
};
