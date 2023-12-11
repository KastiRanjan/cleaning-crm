"use client";

import { CalendarIcon, DashboardIcon } from "@radix-ui/react-icons";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { cn } from "@/lib/utils";
import { useSession } from "next-auth/react";
import Image from "next/image";
import { Button } from "@/registry/new-york/ui/button";

const secure = [
  {
    name: "Dashboard",
    href: "/dashboard",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/secure/dashboard",
    icon: <DashboardIcon />,
  },
  {
    name: "Services",
    href: "/services",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/secure/cards",
    icon: <DashboardIcon />,
  },
  {
    name: "Schedule",
    href: "/schedule",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/secure/tasks",
    icon: <CalendarIcon />,
  },
  {
    name: "Customer",
    href: "/customers",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/secure/playground",
    icon: <CalendarIcon />,
  },
  {
    name: "Staff",
    href: "/staff",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/secure/playground",
    icon: <CalendarIcon />,
  },
  {
    name: "Calendar",
    href: "/calendar",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/secure/playground",
    icon: <CalendarIcon />,
  },
  {
    name: "Hour logs",
    href: "/hourlogs",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/secure/playground",
    icon: <CalendarIcon />,
  },
  {
    name: "Reports",
    href: "/reports",
    code: "https://github.com/shadcn/ui/tree/main/apps/www/app/secure/playground",
    icon: <CalendarIcon />,
  },
];

interface DrawerNavProps extends React.HTMLAttributes<HTMLDivElement> {}

export function DrawerNav({ className, ...props }: DrawerNavProps) {
  const pathname = usePathname();

  const session = useSession();
  console.log(session);

  return (
    <div className="relative h-full">
      <div className=" h-full lg:max-w-none overflow-x-hidden">
        <Image
          src="/cleaning-logo.jpg"
          width={50}
          height={50}
          alt="Picture of the author"
        />
        <div>
          <ul className={cn("my-6 ", className)} {...props}>
            <li className="px-5 py-2 font-bold text-muted-foreground">Pages</li>
            {secure.map((example) => (
              <li key={example.href} className="p-3 hover:bg-[#ee8]">
                <Link
                  href={example.href}
                  key={example.href}
                  className={cn(
                    "flex items-center px-2",
                    pathname?.startsWith(example.href)
                      ? "font-bold text-white"
                      : "font-medium text-muted-foreground hover:text-white"
                  )}
                >
                  {example.icon}
                  <span className="ml-2 text-sm">{example.name}</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

interface ExampleCodeLinkProps {
  pathname: string | null;
}
