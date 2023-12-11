import { Metadata } from "next";

import { DrawerNav } from "@/components/drawer-nav";
import { ExamplesNav } from "@/components/examples-nav";

export const metadata: Metadata = {
  title: "Root",
  description: "Check out some examples app built using the components.",
};

interface ExamplesLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: ExamplesLayoutProps) {
  return (
    <>
      <div className="relative bg-[#F5F5F7]">
        <section className="flex">
          <div
            className="w-[210px] bg-[#1d2327] col-span-2 h-screen"
            style={{ background: "#1d2327" }}
          >
            <DrawerNav />
          </div>
          <div className="flex-1 col-span-10 h-screen overflow-y-scroll">
            <ExamplesNav />
            <div className="overflow-hidden">{children}</div>
          </div>
        </section>
      </div>
    </>
  );
}
