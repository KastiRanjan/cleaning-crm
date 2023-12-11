"use client";

import { usePathname } from "next/navigation";

import { UserNav } from "@/app/(admin)/dashboard/components/user-nav";
import { cn } from "@/lib/utils";
import NavNotification from "@/registry/default/example/nav-notification";
import { ScrollArea, ScrollBar } from "@/registry/new-york/ui/scroll-area";
import { useSession } from "next-auth/react";
import { ModeToggle } from "./mode-toggle";
import { Menu } from "lucide-react";

interface ExampleNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function ExamplesNav({ className, ...props }: ExampleNavProps) {
  const pathname = usePathname();

  const session = useSession();
  console.log(session);

  return (
    <div className="relative">
      <ScrollArea className="max-w-[600px] bg-white shadow lg:max-w-none">
        <div className="flex h-16 justify-between items-center px-4">
          <div className={cn("my-6 flex items-center", className)} {...props}>
            <Menu />
          </div>
          <div className="ml-auto flex items-center space-x-4">
            <NavNotification />
            <UserNav />
          </div>
        </div>
        <ScrollBar orientation="horizontal" className="invisible" />
      </ScrollArea>
    </div>
  );
}

interface ExampleCodeLinkProps {
  pathname: string | null;
}
