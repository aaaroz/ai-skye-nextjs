import * as React from "react";
import { Button } from "@/components/ui/button";

export const AuthButton: React.FC = (): React.ReactElement => {
  return (
    <div className="flex gap-1 items-center">
      <Button variant="ghost">Masuk</Button>
      <Button>Daftar</Button>
    </div>
  );
};
