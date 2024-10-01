import { CallToAction, Footer, Navbar } from "@/components/layout";
import { FC, ReactElement, ReactNode } from "react";

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
