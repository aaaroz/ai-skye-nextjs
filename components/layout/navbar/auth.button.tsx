import * as React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export const AuthButton: React.FC = (): React.ReactElement => {
  return (
    <div className="flex gap-1 items-center">
      <Link href="/auth/login" title="Masuk">
        <Button variant="ghost">Masuk</Button>
      </Link>
      <Link href="/auth/register" title="Daftar">
        <Button>Daftar</Button>
      </Link>
    </div>
  );
};
