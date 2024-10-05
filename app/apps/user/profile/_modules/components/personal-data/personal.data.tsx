import * as React from "react";

export const PersonalData: React.FC = (): React.ReactElement => {
  return (
    <div className="p-4 md:p-6 space-y-4 md:space-y-6 rounded-md shadow-md bg-neutral-50 w-full h-fit lg:w-[40%]">
      <h1 className="text-xl md:text-2xl font-bold">Data Pribadi</h1>
      <div className="space-y-2">
        <div className="flex items-center justify-start py-2 border-b border-neutral-200">
          <strong className="w-[45%]">Nama Lengkap</strong>
          <p>John Doe</p>
        </div>
        <div className="flex items-center justify-start py-2 border-b border-neutral-200">
          <strong className="w-[45%]">Nomor Telepon</strong>
          <p>+6283472637845</p>
        </div>
        <div className="flex items-center justify-start py-2 border-b border-neutral-200">
          <strong className="w-[45%]">Jabatan</strong>
          <p>Happy Person</p>
        </div>
        <div className="flex items-center justify-start py-2 border-b border-neutral-200">
          <strong className="w-[45%]">Perusahaan</strong>
          <p>Skye Digipreneur</p>
        </div>
        <div className="flex items-center justify-start py-2 border-b border-neutral-200">
          <strong className="w-[45%]">Kota</strong>
          <p>Bandung</p>
        </div>
        <div className="flex items-center justify-start py-2 border-b border-neutral-200">
          <strong className="w-[45%]">Tanggal Lahir</strong>
          <p>-</p>
        </div>
      </div>
    </div>
  );
};
