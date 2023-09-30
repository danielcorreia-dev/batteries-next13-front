"use client";

import React, { FC } from "react";
import SidebarMobile from "./SidebarMobile";
import Link from "next/link";
import SidebarListItem from "./SidebarListItem";
import { usePathname } from "next/navigation";
import { useSession } from "next-auth/react";
import { IconUserCircle } from "@tabler/icons-react";

type SidebarItem = {
  title: string;
  href: string;
  icon?: React.ElementType;
};

const Sidebar: FC = () => {
  const { data: session, status } = useSession();
  const pathname = usePathname();

  console.log(session);

  const items: SidebarItem[] = [
    {
      title: "Profile",
      href: "/system/user",
      icon: IconUserCircle,
    },
  ];

  return (
    <>
      <SidebarMobile />
      <div
        id="application-sidebar"
        className="hs-overlay scrollbar-y dark:scrollbar-y fixed bottom-0 left-0 top-0 z-[60] hidden w-72 -translate-x-full transform overflow-y-auto border-r border-gray-200 bg-white pb-10 pt-7 transition-all duration-300 hs-overlay-open:translate-x-0 dark:border-slate-700 dark:bg-slate-800 lg:bottom-0 lg:right-auto lg:block lg:translate-x-0"
      >
        <div className="px-6">
          <Link
            className="flex-none text-xl font-semibold dark:text-white"
            href="/system/user"
            aria-label="Brand"
          >
            Brand
          </Link>
        </div>
        <nav
          className="hs-accordion-group flex w-full flex-col flex-wrap p-6"
          data-hs-accordion-always-open
        >
          <ul className="space-y-1.5">
            {items.map((item, index) => (
              <SidebarListItem
                item={item}
                key={index}
                isActive={item.href === pathname}
              />
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Sidebar;
