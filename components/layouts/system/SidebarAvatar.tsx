import {
  IconArrowBarToLeft,
  IconChevronDown,
  IconSettings,
} from "@tabler/icons-react";
import { Avatar, Dropdown } from "flowbite-react";
import { DropdownItem } from "flowbite-react/lib/esm/components/Dropdown/DropdownItem";
import { signOut } from "next-auth/react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { FC } from "react";

type Props = {
  session: any;
};

const SidebarAvatar: FC<Props> = ({ session }) => {
  const router = useRouter();

  return (
    <div className="hs-dropdown relative inline-flex animate-fade">
      <button
        id="hs-dropdown-custom-trigger"
        type="button"
        className="hs-dropdown-toggle inline-flex items-center justify-center gap-2 rounded-full border bg-white py-1 pl-1 pr-3 align-middle text-sm font-medium text-gray-700 shadow-sm transition-all hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white dark:border-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-800 dark:hover:text-white dark:focus:ring-offset-gray-800"
      >
        <div className="relative">
          <Image
            className="h-auto w-8 rounded-full"
            src=""
            fill
            alt="Profile picture"
          />
        </div>
        <div className="flex items-center gap-1">
          <span className="max-w-[7.5rem] truncate font-medium text-gray-600 dark:text-gray-400">
            {session.user.name}
          </span>
          <IconChevronDown size={16} />
        </div>
      </button>

      <div
        className="hs-dropdown-menu duration mt-2 hidden min-w-[15rem] rounded-lg bg-white p-2 opacity-0 shadow-md transition-[opacity,margin] hs-dropdown-open:opacity-100 dark:border dark:border-gray-700 dark:bg-gray-800"
        aria-labelledby="hs-dropdown-custom-trigger"
      >
        <Link
          className="flex items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-gray-800 hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
          href="#"
        >
          <IconSettings size={20} />
          Configurações
        </Link>
        <div
          className="flex cursor-pointer items-center gap-x-3.5 rounded-md px-3 py-2 text-sm text-gray-800 transition-colors hover:bg-gray-100 hover:text-red-500 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
          onClick={() => signOut({ callbackUrl: "/" })}
        >
          <IconArrowBarToLeft size={20} />
          Deslogar
        </div>
      </div>
    </div>
  );
};

export default SidebarAvatar;
