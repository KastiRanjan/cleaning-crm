import Image from "next/image";

import DashboardPage from "@/app/(admin)/dashboard/page";
import { ExamplesNav } from "@/components/examples-nav";

export default function IndexPage() {
  return (
    <div className="relative">
      <ExamplesNav className="[&>a:first-child]:text-primary" />
      <section className="space-y-8 overflow-hidden rounded-lg border-2 border-primary dark:border-muted md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </section>
      <section className="hidden md:block">
        <div className="overflow-hidden ">
          <DashboardPage />
        </div>
      </section>
    </div>
  );
}
