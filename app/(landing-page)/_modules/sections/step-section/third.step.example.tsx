import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CopyIcon, SaveIcon } from "lucide-react";
import * as React from "react";
import markdownit from "markdown-it";
import Markdown from "markdown-to-jsx";

const responseAI = `Untuk meningkatkan value produk Seblak Maicih di TikTok, konten video harus kreatif dan engaging, serta menonjolkan keunikan produk. 
Berikut beberapa ide konten yang menarik:

**1.Challenge Seblak Pedas Level Up**

  Konsep: Buat challenge bertema "Seblak Pedas Level Up" di mana orang mencoba level kepedasan dari rendah hingga tertinggi. Setiap level bisa ditandai dengan ekspresi lucu dan reaksi dramatis.
  
  Hashtag: #SeblakPedasLevelUp #SeblakChallenge
  
  Tips: Tambahkan efek visual api dan musik seru yang meningkatkan kesan pedas dan menegangkan.

**2.Behind the Scene Produksi Seblak Maicih**

Konsep: Tunjukkan proses pembuatan Seblak Maicih, dari pemilihan bahan baku berkualitas hingga proses pengemasan. Ini akan memberikan value bahwa produk Seblak Maicih dibuat dengan kualitas terbaik dan standar tinggi.

Hashtag: #BehindTheMaicih #SeblakBerkualitas

Tips: Gunakan visual slow-motion pada proses yang menarik seperti saat memasukkan bumbu atau saat kemasan siap dikirim.

Konten video dengan storytelling, visual menarik, dan mengajak interaksi akan membantu meningkatkan value produk Seblak Maicih di mata audiens TikTok.
.`;

export const ThirdStepExample: React.FC = (): React.ReactElement => {
  const md = markdownit();
  const result = md.renderInline(responseAI);

  return (
    <div className="relative w-full p-4 space-y-6 rounded-md bg-neutral-50 shadow">
      <div className="space-y-1.5 w-full flex h-[380px] overflow-hidden [mask:linear-gradient(90deg,white_60%,transparent)] md:[mask:linear-gradient(90deg,white_30%,transparent)] ">
        <section className="p-2 w-full space-y-2 py-2.5">
          <div className="flex w-full gap-2">
            <Input
              className="h-6 text-xs"
              value="Konten TikTok Produk Seblak"
              readOnly
            />
            <Button
              size="icon"
              variant="secondary"
              className="h-6 w-7 rounded-md"
            >
              <CopyIcon className="size-4" />
            </Button>
            <Button size="icon" className="h-6 w-7 rounded-md">
              <SaveIcon className="size-4" />
            </Button>
          </div>
          <Markdown className="text-xs space-y-1 rounded-md p-2 text-muted-foreground border border-neutral-200">
            {result}
          </Markdown>
        </section>
      </div>
    </div>
  );
};
