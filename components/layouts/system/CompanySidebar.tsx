"use client";

import {
  IconDiscount2,
  IconMap,
  IconSearch,
  IconTags,
  IconTrophy,
  IconUserCircle,
} from "@tabler/icons-react";
import { useSession } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { FC } from "react";
import SidebarListItem from "./SidebarListItem";
import SidebarMobile from "./SidebarMobile";
import SidebarAvatar from "./SidebarAvatar";
import Logo from "@/components/landing/ui/logo";

type SidebarItem = {
  title: string;
  href: string;
  icon?: React.ElementType;
};

const CompanySidebar: FC = () => {
  const { data: session } = useSession();
  const pathname = usePathname();

  const items: SidebarItem[] = [
    {
      title: "Perfil",
      href: "/system/company/profile",
      icon: IconUserCircle,
    },
    {
      title: "Pesquisa",
      href: "/system/search",
      icon: IconSearch,
    },
    {
      title: "Ranking",
      href: "/system/ranking",
      icon: IconTrophy,
    },
    {
      title: "Mapa",
      href: "/system/maps",
      icon: IconMap,
    },
    {
      title: "Benefícios",
      href: "/system/company/benefits",
      icon: IconTags,
    },
    {
      title: "Pontuar",
      href: "/system/company/points",
      icon: IconDiscount2,
    },
  ];

  return (
    <>
      <SidebarMobile />
      <div
        id="application-sidebar"
        className="hs-overlay scrollbar-y dark:scrollbar-y fixed bottom-0 left-0 top-0 z-[10] hidden w-80 -translate-x-full transform overflow-y-auto border-r border-gray-200 bg-white pb-10 pt-7 transition-all duration-300 hs-overlay-open:translate-x-0 dark:border-slate-700 dark:bg-slate-800 md:w-3/12 lg:bottom-0 lg:right-auto lg:block lg:translate-x-0"
      >
        <div className="mb-7 px-6 pt-2">
          <Link
            className="flex-none text-xl font-semibold dark:text-white"
            href="/system/company/profile"
            aria-label="Brand"
          >
            <div className="flex items-center gap-3">
              <Logo />
              <span>BT Project</span>
            </div>
          </Link>
        </div>
        <nav
          className="hs-accordion-group flex w-full flex-col flex-wrap p-6"
          data-hs-accordion-always-open
        >
          <ul className="mb-12 space-y-1.5">
            {items.map((item, index) => (
              <SidebarListItem
                item={item}
                key={index}
                isActive={item.href === pathname}
              />
            ))}
          </ul>
          {!session ? (
            <div className="flex animate-pulse">
              <div className="flex-shrink-0">
                <span className="block h-12 w-12 rounded-full bg-gray-200 dark:bg-gray-700"></span>
              </div>
            </div>
          ) : (
            <div className="inline">
              <SidebarAvatar session={session} user="company" />
            </div>
          )}
        </nav>
      </div>
    </>
  );
};

export default CompanySidebar;
