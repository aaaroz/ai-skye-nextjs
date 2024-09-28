import * as React from "react";
import {
  AccordionContent,
  Accordion,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { SectionContainer } from "@/components/layout";

const faqsOne = [
  {
    question: "Apa itu KontenKilat?",
    answer:
      "KontenKilat adalah platform SAAS yang menyediakan berbagai alat dan solusi untuk memudahkan proses pembuatan konten, baik untuk keperluan sehari-hari maupun pekerjaan. Dengan KontenKilat, Kamu dapat menghemat waktu dan tenaga dalam pembuatan konten berkualitas tinggi.",
  },
  {
    question: "Fitur apa saja yang tersedia di KontenKilat?",
    answer:
      "Kami menawarkan berbagai macam fitur seperti penulisan konten otomatis, penulisan ide konten, pembuatan deskripsi produk, dan masih banyak lagi. Semua alat ini dirancang untuk mempermudah dan mempercepat proses pembuatan konten Kamu.",
  },
  {
    question: "Bagaimana cara mendaftar di KontenKilat?",
    answer:
      'Kamu dapat mendaftar dengan mengunjungi situs web kami dan mengklik tombol "Daftar" di sudut kanan atas. Isi informasi yang diperlukan, dan Kamu akan menerima otp konfirmasi yang dikirimkan ke pesan WhatsApp untuk mengaktifkan akun Kamu.',
  },
  {
    question: "Bagaimana cara meminta fitur baru atau memberikan masukan?",
    answer:
      "Kami selalu terbuka untuk masukan dan ide-ide baru. Anda dapat mengirimkan permintaan fitur atau memberikan masukan melalui tim kami melalui email support@kontenkilat.id atau WhatsApp kami di +6281213294389 (Support Konten Kilat).",
  },
];

const faqsTwo = [
  {
    question: "Apakah KontenKilat gratis?",
    answer:
      "Kami memberikan penawaran gratis kepada pengguna baru, yaitu 3000 kata yang dapat digunakan untuk menghasilkan ide konten Kamu. selanjutnya jika saldo kata telah digunakan semua, kamu bisa topup 10000 kata dengan harga Rp.10.000,- saja.",
  },
  {
    question: "Apakah ada panduan penggunaan fitur-fitur di KontenKilat?",
    answer:
      "Ya, kami menyediakan dokumentasi dan tutorial lengkap yang dapat membantu kamu memahami cara menggunakan setiap fitur yang tersedia di platform kami. Kamu dapat mengakses panduan ini melalui halaman detail fitur tersebut di situs kami.",
  },
  {
    question:
      "Bagaimana saya bisa menghubungi tim dukungan jika mengalami masalah?",
    answer:
      "Jika Anda mengalami masalah atau memiliki pertanyaan, Anda dapat menghubungi tim dukungan kami melalui email di support@kontenkilat.id atau WhatsApp kami di +6281213294389 (Support Konten Kilat).",
  },
  {
    question: "Apakah data saya aman di KontenKilat?",
    answer:
      "Kami sangat menghargai privasi dan keamanan data Anda. Kami menggunakan enkripsi tingkat lanjut dan standar keamanan industri untuk memastikan data Anda aman dan terlindungi di platform kami.",
  },
];

export const FAQSection: React.FC = (): React.ReactElement => {
  return (
    <div
      id="FAQs"
      className="2xl:container w-full py-20 relative min-h-[80dvh] overflow-hidden"
    >
      <div className="absolute inset-0 -left-28 md:-left-14 2xl:left-[20rem] top-32 md:-top-10 -z-10 size-56 md:size-72 bg-gradient-to-b from-sky-800 to-transparent rounded-full blur-3xl transform scale-110" />
      <SectionContainer>
        <h1 className="text-2xl sm:text-3xl md:text-5xl font-bold text-center">
          Pertanyaan yang sering ditanyakan
        </h1>
        <p className="text-sm sm:text-base md:text-lg text-muted-foreground text-center">
          Ada pertanyaan? Kami siap menjawabnya
        </p>
        <div className="flex flex-wrap md:flex-nowrap w-full gap-0 md:gap-8">
          <Accordion type="multiple" className="w-full">
            {faqsOne.map(({ question, answer }, index) => (
              <AccordionItem key={index} value={question}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <Accordion type="multiple" className="w-full">
            {faqsTwo.map(({ question, answer }, index) => (
              <AccordionItem key={index} value={question}>
                <AccordionTrigger>{question}</AccordionTrigger>
                <AccordionContent>{answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </SectionContainer>
    </div>
  );
};
