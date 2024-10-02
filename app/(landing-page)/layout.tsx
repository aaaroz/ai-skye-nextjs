import { FC, ReactElement, ReactNode } from "react";
import { CallToAction, Footer, Navbar } from "@/components/layout";

const LandingPageLayout: FC<{ children: ReactNode }> = ({
  children,
}): ReactElement => {
  return (
    <main className="w-full min-h-screen">
      <Navbar />
      {children}
      <CallToAction />
      <Footer />
    </main>
  );
};

export default LandingPageLayout;
