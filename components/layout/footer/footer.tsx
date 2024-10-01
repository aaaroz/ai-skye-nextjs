import * as React from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { InstagramIcon, MailIcon, PhoneIcon } from "lucide-react";
import { Logo } from "@/components/common/logo";

export const Footer: React.FC = (): React.ReactElement => {
  return (
    <footer className="w-full bg-sky-800">
      <div className="container relative overflow-hidden space-y-12 pt-20 h-full">
        <div className="absolute inset-0 left-5 sm:left-[7rem] md:left-[15rem] top-20 z-0 size-80 bg-gradient-to-b from-sky-400/80 to-transparent rounded-full blur-3xl transform scale-110" />
        <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-4 border-b pb-14 border-neutral-200 text-neutral-100">
          <div className="md:col-span-2 z-10 w-full space-y-8 lg:pr-10">
            <Logo variant="white" />
            <div className="space-y-4 p-8 rounded-md bg-neutral-800">
              <Input
                className="bg-neutral-800 focus:ring-0 focus-visible:ring-0 placeholder:text-neutral-100 text-white border-white"
                placeholder="Masukkan pesan"
              />
              <Input
                className="bg-neutral-800 focus:ring-0 focus-visible:ring-0 placeholder:text-neutral-100 text-white border-white"
                placeholder="Masukkan email"
              />
              <Button className="w-full">Kirim Pesan</Button>
            </div>
          </div>
          <div className="w-full z-10 space-y-8 lg:px-6">
            <h2 className="text-2xl font-bold">Quick Links</h2>
            <ul className="space-y-3 font-semibold">
              <li>
                <Link
                  href="/"
                  title="beranda"
                  className="hover:text-neutral-100/60 transition-colors duration-200"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/#pricing"
                  title="harga"
                  className="hover:text-neutral-100/60 transition-colors duration-200"
                >
                  Harga
                </Link>
              </li>
              <li>
                <Link
                  href="/features"
                  title="fitur AI"
                  className="hover:text-neutral-100/60 transition-colors duration-200"
                >
                  Fitur AI
                </Link>
              </li>
              <li>
                <Link
                  href="/#FAQs"
                  title="pertanyaan yang sering ditanyakan"
                  className="hover:text-neutral-100/60 transition-colors duration-200"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>
          <div className="w-full z-10 space-y-8 lg:pr-5">
            <h2 className="text-2xl font-bold">Address</h2>
            <p className="space-y-6 text-neutral-300">
              Jl. Walini No.24, Bojongloa, Kec. Rancaekek, Kabupaten Bandung,
              Jawa Barat 40394
            </p>
          </div>
          <div className="w-full z-10 space-y-8">
            <h2 className="text-2xl font-bold">Get In Touch</h2>
            <Link href="#" className="flex items-center">
              <PhoneIcon className="size-5 shrink-0 mr-2" />
              <p className="text-lg font-medium">0851-3453-2345</p>
            </Link>
            <Link href="#" className="flex items-center">
              <MailIcon className="size-5 shrink-0 mr-2" />
              <p className="text-lg font-medium">support@kontenkilat.id</p>
            </Link>
          </div>
        </div>
        <div className="w-full flex flex-wrap gap-4 lg:gap-0 lg:flex-nowrap justify-between items-center pb-8">
          <p className="text-neutral-300">
            Copyright © 2024 KontenKilat.id | All right reserved.
          </p>
          <div className="flex gap-2 lg:gap-5">
            <Link
              href="/terms-condition"
              title="Ketentuan Pengguna"
              className="text-neutral-100 hover:text-neutral-100/60 transition-colors duration-200"
            >
              Terms & Conditions
            </Link>
            <Link
              href="/privacy-policy"
              title='Kebijakan Privasi'
              className="text-neutral-100 hover:text-neutral-100/60 transition-colors duration-200"
            >
              Privacy Policy
            </Link>
          </div>
          <div className="flex gap-2 items-center">
            <Button size="icon" className="bg-neutral-800 hover:bg-neutral-700">
              <InstagramIcon className="size-6" />
            </Button>
            <Button size="icon" className="bg-neutral-800 hover:bg-neutral-700">
              <InstagramIcon className="size-6" />
            </Button>
            <Button size="icon" className="bg-neutral-800 hover:bg-neutral-700">
              <InstagramIcon className="size-6" />
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
};
